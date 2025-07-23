

import React, { useContext, useState, useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, Polygon, KmlLayer } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import FooterNav from "../components/Footer";
import { FaUser } from "react-icons/fa";
import { FarmerContext } from "../contexts/FarmerContext";
import FarmSelector from "../contexts/SelectionContext";
import axios from "../contexts/axiosInstance";

const containerStyle = { width: "100%", height: "300px" };
const center = { lat: 17.6772, lng: 75.3241 };

function parseRawKMLCoordinates(kmlText) {
  const parser = new DOMParser();
  const xml = parser.parseFromString(kmlText, "text/xml");
  const coordElements = xml.getElementsByTagName("coordinates");
  const polygons = [];

  for (let i = 0; i < coordElements.length; i++) {
    const raw = coordElements[i].textContent.trim();
    const lines = raw.split(/\s+/).map(line => {
      const [lng, lat] = line.split(',').map(Number);
      return [lng, lat];
    });

    if (lines.length > 2) {
      const [firstLng, firstLat] = lines[0];
      const [lastLng, lastLat] = lines[lines.length - 1];
      const epsilon = 1e-9;
      const close = Math.abs(firstLng - lastLng) < epsilon && Math.abs(firstLat - lastLat) < epsilon;
      if (!close) lines.push([firstLng, firstLat]);
      polygons.push(lines);
    }
  }

  return {
    type: "Feature",
    properties: {},
    geometry: {
      type: polygons.length === 1 ? "Polygon" : "MultiPolygon",
      coordinates: polygons.length === 1
        ? [polygons[0]]
        : polygons.map(p => [p])
    }
  };
}

export default function DashboardPage() {
  const navigate = useNavigate();
  const { farmerData, loading, error } = useContext(FarmerContext);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [activeTab, setActiveTab] = useState("DashboardPage");
  const [fieldId, setFieldId] = useState(null);
  const [dateOptions, setDateOptions] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [vegetationData, setVegetationData] = useState([]);
  const [kmlUrl, setKmlUrl] = useState(null);
  const [renderedCells, setRenderedCells] = useState([]);

  const mapInstanceRef = useRef(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDS7w2pVZPBpibKmaY_PsMv3AJohcDSSrA",
  });

  useEffect(() => {
    const farm = farmerData?.farms?.find(f => f.seasonType === selectedSeason);
    const field = farm?.fields?.find(fld => fld.fieldCode === selectedField);
    if (field) {
      setFieldId(field.fieldId);
      setKmlUrl(field.kmlFolderURL || null);
    }
  }, [selectedSeason, selectedField, farmerData]);

  useEffect(() => {
    if (!fieldId) return;
    const fetchDates = async () => {
      try {
        const res = await axios.post("/dates-list", { FieldId: fieldId });
        const sorted = res.data.dates?.map(d => d.ssmaDate).sort();
        setDateOptions(sorted || []);
        setSelectedDate("");
      } catch (e) {
        console.error("Failed to fetch date list", e);
      }
    };
    fetchDates();
  }, [fieldId]);

  useEffect(() => {
    if (!fieldId || !selectedDate) return;
    const fetchBands = async () => {
      try {
        const res = await axios.post("/plot-bands-mapping-list", {
          FieldId: fieldId,
          Date: selectedDate
        });
        setVegetationData(res.data.plotBandsMappingList || []);
      } catch (e) {
        console.error("Failed to fetch plot band mappings", e);
      }
    };
    fetchBands();
  }, [fieldId, selectedDate]);

  useEffect(() => {
    const loadBoundaryFromKML = async () => {
      if (!kmlUrl) return;
      try {
        const res = await fetch(kmlUrl);
        const kmlText = await res.text();
        const boundaryFeature = parseRawKMLCoordinates(kmlText);
        window.boundaryGeoJSON = boundaryFeature;
        // Fit map to boundary
        if (mapInstanceRef.current) {
          const turf = window.turf;
          const bbox = turf.bbox(boundaryFeature); // [minX, minY, maxX, maxY]
          const bounds = new window.google.maps.LatLngBounds(
            { lat: bbox[1], lng: bbox[0] },
            { lat: bbox[3], lng: bbox[2] }
          );
          mapInstanceRef.current.fitBounds(bounds);
        }

      } catch (err) {
        console.error("Failed to load boundary from KML", err);
      }
    };
    loadBoundaryFromKML();
  }, [kmlUrl]);

  useEffect(() => {
    if (!vegetationData.length || !window.boundaryGeoJSON || !isLoaded) return;

    const turf = window.turf;
    const boundary = window.boundaryGeoJSON;
    const buffered = turf.buffer(boundary, 20, { units: "meters" });
    const grid = turf.squareGrid(turf.bbox(buffered), 10, { units: "meters" });

    const relevantCells = grid.features.filter(cell => turf.booleanIntersects(cell, boundary));

    const matchedCells = relevantCells.map(cell => {
      const center = turf.centerOfMass(cell).geometry.coordinates;

      let closest = null;
      let minDist = Infinity;

      vegetationData.forEach(d => {
        const dist = turf.distance(
          turf.point(center),
          turf.point([d.longitude, d.latitude]),
          { units: "meters" }
        );

        if (dist <= 20 && dist < minDist) {
          minDist = dist;
          closest = d;
        }
      });

      const matched = closest;
      if (!matched) return null;

      const clipped = turf.intersect(cell, boundary);
      if (!clipped) return null;

      const coords = clipped.geometry.coordinates[0].map(([lng, lat]) => ({ lat, lng }));

      const fillColor =
        matched.sclValue !== matched.sclThresholdValue
          ? "#d3d3d3"
          : matched.ndviValue < matched.ndviThresholdValue || matched.ndreValue < matched.ndreThresholdValue
            ? "#ff0000"
            : "#008000";

      return { coords, fillColor };
    }).filter(Boolean);

    setRenderedCells(matchedCells);
  }, [vegetationData, isLoaded]);

  const fullName = farmerData?.name && farmerData?.lastName ? `${farmerData.name} ${farmerData.lastName}` : "शेतकरी";

  if (loading || !isLoaded) return <div className="text-center py-10 text-gray-600">लोड करत आहे...</div>;
  if (error || !farmerData) return <div className="text-center py-10 text-red-600">डेटा मिळवता आला नाही</div>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-green-500 text-white px-4 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <button onClick={() => navigate("/SettingsPage")} className="p-2 hover:bg-green-600 rounded-md">☰</button>
        <h1 className="text-sm sm:text-lg font-semibold flex-1 text-center truncate">{fullName}</h1>
        <button onClick={() => navigate("/FarmerProfile")} className="text-2xl p-2 hover:bg-green-600 rounded-md">
          <FaUser />
        </button>
      </header>

      <div className="w-full flex justify-center mt-4 px-4">
        <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-sm">
          <FarmSelector
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />

          <div className="flex items-center mt-4">
            <span className="text-sm font-bold text-gray-800 mr-2 min-w-[80px]">तारीख</span>
            <span className="text-sm text-gray-800 mr-2">:</span>
            <div className="relative flex-1">
              <select
                className="appearance-none w-full bg-transparent text-sm text-gray-800 pr-6 focus:outline-none border-b-2 border-gray-300 focus:border-green-500 pb-1"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                disabled={dateOptions.length === 0}
              >
                <option value="">-- निवडा --</option>
                {dateOptions.map(date => (
                  <option key={date} value={date}>{new Date(date).toLocaleDateString("en-GB")}</option>
                ))}
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none">▼</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 my-4 flex-1">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ height: "calc(100vh - 320px)", minHeight: "300px" }}>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={center}
            zoom={17}
            onLoad={(map) => (mapInstanceRef.current = map)}
            options={{ zoomControl: true, streetViewControl: false, mapTypeControl: false, fullscreenControl: false }}
          >
            {/* {kmlUrl && !vegetationData.length && (
              <KmlLayer
                key={kmlUrl}
                url={kmlUrl}
                options={{ preserveViewport: false, suppressInfoWindows: true }}
              />
            )} */}

            {window.boundaryGeoJSON && !vegetationData.length && (
              <Polygon
                paths={window.boundaryGeoJSON.geometry.coordinates[0].map(([lng, lat]) => ({ lat, lng }))}
                options={{
                  strokeColor: "#000000",
                  strokeOpacity: 1.0,
                  strokeWeight: 2,
                  fillOpacity: 0,
                }}
              />
            )}

            {renderedCells.map((cell, idx) => (
              <Polygon
                key={idx}
                paths={cell.coords}
                options={{
                  strokeColor: "#000",
                  strokeOpacity: 1.0,
                  strokeWeight: 1,
                  fillColor: cell.fillColor,
                  fillOpacity: 1.0
                }}
              />
            ))}
          </GoogleMap>
        </div>
      </div>

      <FooterNav selected={activeTab} onSelect={setActiveTab} />
    </div>
  );
}
