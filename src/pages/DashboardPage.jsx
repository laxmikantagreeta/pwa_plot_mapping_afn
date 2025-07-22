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

const squareAround = ({ lat, lng }, size = 0.00005) => ([
  { lat: lat - size, lng: lng - size },
  { lat: lat - size, lng: lng + size },
  { lat: lat + size, lng: lng + size },
  { lat: lat + size, lng: lng - size },
  { lat: lat - size, lng: lng - size } // ensure closed ring
]);

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
  const shapesRef = useRef({ veg: [] });
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
      } catch (err) {
        console.error("Failed to load boundary from KML", err);
      }
    };
    loadBoundaryFromKML();
  }, [kmlUrl]);

  const fullName = farmerData?.name && farmerData?.lastName ? `${farmerData.name} ${farmerData.lastName}` : "शेतकरी";

  if (loading || !isLoaded)
    return <div className="text-center py-10 text-gray-600">लोड करत आहे...</div>;
  if (error || !farmerData)
    return <div className="text-center py-10 text-red-600">डेटा मिळवता आला नाही</div>;

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

          <div className="mt-4">
            <label className="block text-sm font-bold text-gray-700 mb-1">तारीख</label>
            <select
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              disabled={dateOptions.length === 0}
            >
              <option value="">-- निवडा --</option>
              {dateOptions.map(date => (
                <option key={date} value={date}>{new Date(date).toLocaleDateString("en-GB")}</option>
              ))}
            </select>
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
            {kmlUrl && !vegetationData.length && (
              <KmlLayer
                key={kmlUrl}
                url={kmlUrl}
                options={{ preserveViewport: false, suppressInfoWindows: true }}
              />
            )}

            {vegetationData.map((item, idx) => {
              if (!window.boundaryGeoJSON) return null;

              const square = window.turf.polygon([
                squareAround({ lat: item.latitude, lng: item.longitude }).map(p => [p.lng, p.lat])
              ]);

              const buffered = window.turf.buffer(window.boundaryGeoJSON, 20, { units: "meters" });
              if (!window.turf.booleanIntersects(square, buffered)) return null;

              const clipped = window.turf.intersect(square, window.boundaryGeoJSON);
              if (!clipped) return null;

              const coords = clipped.geometry.coordinates[0].map(([lng, lat]) => ({ lat, lng }));

              const fillColor = item.sclValue !== 4
                ? "#d3d3d3"
                : item.ndviValue < item.ndviThresholdValue || item.ndreValue < item.ndreThresholdValue
                  ? "#ff0000"
                  : "#008000";

              return (
                <Polygon
                  key={idx}
                  paths={coords}
                  options={{ strokeColor: "#000", strokeOpacity: 1.0, strokeWeight: 1, fillColor, fillOpacity: 1.0 }}
                />
              );
            })}
          </GoogleMap>
        </div>
      </div>

      <FooterNav selected={activeTab} onSelect={setActiveTab} />
    </div>
  );
}
