
// FileUpload.jsx
import React from "react";
import * as toGeoJSON from "@tmcw/togeojson";

export default function FileUpload({ setCsvData, setBoundary }) {
  const handleCSVUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      // Split text into rows and split each row by comma
      const rows = e.target.result.split("\n").map((r) => r.split(","));
      // Assume the first row is the header: Date, lng, lat, NDVI, NDMI
      const parsed = rows.slice(1) // skip header row
        .map((cols) => {
          if (cols.length < 5) return null;
          const [dateStr, latStr, lngStr,  ndviStr, ndmiStr] = cols.map(col => col.trim());
          const parsedDate = new Date(dateStr);
          const parsedLat = parseFloat(latStr);
          const parsedLng = parseFloat(lngStr);
          const parsedNDVI = parseFloat(ndviStr);
          const parsedNDMI = parseFloat(ndmiStr);
          // Validate data; skip if any field is invalid
          if (
            isNaN(parsedDate.getTime()) ||
            isNaN(parsedLng) ||
            isNaN(parsedLat) ||
            isNaN(parsedNDVI) ||
            isNaN(parsedNDMI)
          ) {
            return null;
          }
          return { date: parsedDate, lat: parsedLat, lng: parsedLng, NDVI: parsedNDVI, NDMI: parsedNDMI };
        })
        .filter(Boolean);
      setCsvData(parsed);
    };
    reader.readAsText(file);
  };

  const handleKMLUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const parser = new DOMParser();
      const kml = parser.parseFromString(e.target.result, "text/xml");
      const geoJSON = toGeoJSON.kml(kml);
      if (geoJSON.features.length > 0) {
        const coords = geoJSON.features[0].geometry.coordinates[0].map(
          ([lng, lat]) => ({ lat, lng })
        );
        setBoundary(coords);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      {/* CSV Upload */}
      <label className="flex flex-col items-start bg-white px-4 py-2 rounded-lg shadow hover:bg-blue-50 cursor-pointer transition duration-200">
        <span className="text-sm font-medium text-gray-700 mb-1">Upload CSV File</span>
        <input
          type="file"
          accept=".csv"
          onChange={handleCSVUpload}
          className="text-sm text-gray-600 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        />
      </label>

      {/* KML Upload */}
      <label className="flex flex-col items-start bg-white px-4 py-2 rounded-lg shadow hover:bg-blue-50 cursor-pointer transition duration-200">
        <span className="text-sm font-medium text-gray-700 mb-1">Upload KML File</span>
        <input
          type="file"
          accept=".kml"
          onChange={handleKMLUpload}
          className="text-sm text-gray-600 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
        />
      </label>
    </div>
  );
}


