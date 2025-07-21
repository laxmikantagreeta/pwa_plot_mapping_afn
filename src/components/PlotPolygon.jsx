// import React from "react";
// import { Polygon } from "@react-google-maps/api";
// import * as martinez from "martinez-polygon-clipping";

// // const getColor = (value) => {
// //   if (value >= 2500 && value <= 2700) return "#FF0000";
// //   if (value >= 2701 && value <= 2900) return "#FFFF00";
// //   if (value >= 2901 && value <= 5000) return "#008000";
// //   return "#000000";
// // };
// const getColor = (value) => {
//   if (value < 0.1) return "#FF0000";        // Red
//   if (value >= 0.1 && value < 0.3) return "#90EE90";  // Light Green
//   if (value >= 0.3 && value < 0.6) return "#008000";  // Green
//   if (value >= 0.6) return "#006400";       // Dark Green
//   return "#000000"; // Default fallback (optional)
// };


// const getSquareCoords = (lat, lng, size) => [
//   [lng - size, lat + size],
//   [lng + size, lat + size],
//   [lng + size, lat - size],
//   [lng - size, lat - size],
//   [lng - size, lat + size]
// ];

// const getBoundaryForClip = (boundary) => [
//   boundary.map((point) => [point.lng, point.lat])
// ];  

// export default function PlotPolygon({ plot, squareSize, boundary }) {
//   const square = [getSquareCoords(plot.lat, plot.lng, squareSize)];
//   const kmlPoly = getBoundaryForClip(boundary);
//   const clipped = martinez.intersection(square, kmlPoly);

//   if (!clipped) return null;

//   return clipped.map((polygon, i) => (
//     <Polygon
//       key={i}
//       paths={polygon[0].map(([lng, lat]) => ({ lat, lng }))}
//       options={{
//         fillColor: getColor(plot.value),
//         fillOpacity: 0.7,
//         strokeColor: "#FFFFFF",
//         strokeWeight: 1,
//       }}
//     />
//   ));
// }


import React from "react";
import { Polygon } from "@react-google-maps/api";
import * as martinez from "martinez-polygon-clipping";

const getColor = (value) => {
  if (value < 0.1) return "#FF0000";
  if (value < 0.3) return "#90EE90";
  if (value < 0.6) return "#008000";
  return "#006400";
};

const getSquareCoords = (lat, lng, size) => [
  [lng - size, lat + size],
  [lng + size, lat + size],
  [lng + size, lat - size],
  [lng - size, lat - size],
  [lng - size, lat + size],
];

const getBoundaryForClip = (boundary) => [boundary.map(p => [p.lng, p.lat])];

export default function PlotPolygon({ plot, squareSize, boundary }) {
  const square = [getSquareCoords(plot.lat, plot.lng, squareSize)];
  const kmlPoly = getBoundaryForClip(boundary);
  const clipped = martinez.intersection(square, kmlPoly);
  if (!clipped) return null;
  return clipped.map((polygon, i) => (
    <Polygon
      key={i}
      paths={polygon[0].map(([lng, lat]) => ({ lat, lng }))}
      options={{ fillColor: getColor(plot.value), fillOpacity: 0.7, strokeColor: "#FFFFFF", strokeWeight: 1 }}
    />
  ));
}





// // 📁 src/api/bayerAPI.js
// export const fetchReferenceData = async () => {
//   return fetch("http://localhost:5000/api/bayer/reference")
//     .then(res => res.json());
// };


// // 📁 src/api/plotAPI.js
// export const fetchKMLs = (yearId, seasonId, stateId) => {
//   return fetch(`/api/getKMLs?yearId=${yearId}&seasonId=${seasonId}&stateId=${stateId}`).then(res => res.json());
// };

// export const fetchDates = (kmlId) => {
//   return fetch(`/api/getDates?kmlId=${kmlId}`).then(res => res.json());
// };

// export const fetchKMLBoundary = (kmlId) => {
//   return fetch(`/api/getKMLBoundary?kmlId=${kmlId}`).then(res => res.json());
// };

// export const fetchNDVIData = (kmlId, date, index) => {
//   return fetch(`/api/getData?kmlId=${kmlId}&date=${date}&index=${index}`).then(res => res.json());
// };


// // 📁 src/components/Dropdowns.jsx
// import React from "react";

// export default function Dropdowns({
//   years, seasons, states, kmls, dates,
//   yearId, setYearId,
//   seasonId, setSeasonId,
//   stateId, setStateId,
//   kmlId, setKmlId,
//   selectedDate, setSelectedDate,
//   selectedIndex, setSelectedIndex
// }) {
//   return (
//     <div className="flex flex-wrap gap-2">
//       <select value={yearId} onChange={e => setYearId(e.target.value)}>
//         <option value="">Year</option>
//         {years.map(y => <option key={y.id} value={y.id}>{y.description}</option>)}
//       </select>

//       <select value={seasonId} onChange={e => setSeasonId(e.target.value)} disabled={!yearId}>
//         <option value="">Season</option>
//         {seasons.map(s => <option key={s.id} value={s.id}>{s.description}</option>)}
//       </select>

//       <select value={stateId} onChange={e => setStateId(e.target.value)} disabled={!seasonId}>
//         <option value="">State</option>
//         {states.map(st => <option key={st.id} value={st.id}>{st.description}</option>)}
//       </select>

//       <select value={kmlId} onChange={e => setKmlId(e.target.value)} disabled={!stateId}>
//         <option value="">KML</option>
//         {kmls.map(k => <option key={k.id} value={k.id}>{k.name}</option>)}
//       </select>

//       <select value={selectedDate} onChange={e => setSelectedDate(e.target.value)} disabled={!kmlId}>
//         <option value="">Date</option>
//         {dates.map((d, i) => <option key={i} value={d}>{d}</option>)}
//       </select>

//       <select value={selectedIndex} onChange={e => setSelectedIndex(e.target.value)}>
//         <option value="NDVI">NDVI</option>
//         <option value="NDMI">NDMI</option>
//       </select>
//     </div>
//   );
// }


// // 📁 src/components/MapContainer.jsx
// import React, { useRef } from "react";
// import { GoogleMap, Polygon } from "@react-google-maps/api";
// import PlotPolygon from "./PlotPolygon";

// const containerStyle = { width: "100%", height: "100%" };

// export default function MapContainer({ center, boundary, plots, squareSize }) {
//   const mapRef = useRef(null);
//   return (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={17}
//       onLoad={(map) => (mapRef.current = map)}
//     >
//       {boundary.length > 0 && (
//         <Polygon paths={boundary} options={{ strokeColor: "#0000FF", strokeWeight: 2, fillOpacity: 0.2 }} />
//       )}
//       {plots.map((plot, idx) => (
//         <PlotPolygon key={idx} plot={plot} squareSize={squareSize} boundary={boundary} />
//       ))}
//     </GoogleMap>
//   );
// }


// // 📁 src/components/PlotPolygon.jsx
// import React from "react";
// import { Polygon } from "@react-google-maps/api";
// import * as martinez from "martinez-polygon-clipping";

// const getColor = (value) => {
//   if (value < 0.1) return "#FF0000";
//   if (value < 0.3) return "#90EE90";
//   if (value < 0.6) return "#008000";
//   return "#006400";
// };

// const getSquareCoords = (lat, lng, size) => [
//   [lng - size, lat + size],
//   [lng + size, lat + size],
//   [lng + size, lat - size],
//   [lng - size, lat - size],
//   [lng - size, lat + size],
// ];

// const getBoundaryForClip = (boundary) => [boundary.map(p => [p.lng, p.lat])];

// export default function PlotPolygon({ plot, squareSize, boundary }) {
//   const square = [getSquareCoords(plot.lat, plot.lng, squareSize)];
//   const kmlPoly = getBoundaryForClip(boundary);
//   const clipped = martinez.intersection(square, kmlPoly);
//   if (!clipped) return null;
//   return clipped.map((polygon, i) => (
//     <Polygon
//       key={i}
//       paths={polygon[0].map(([lng, lat]) => ({ lat, lng }))}
//       options={{ fillColor: getColor(plot.value), fillOpacity: 0.7, strokeColor: "#FFFFFF", strokeWeight: 1 }}
//     />
//   ));
// }


// // 📁 src/utils/geoUtils.js
// export const calculateSquareSize = (boundary) => 5 / 111320;

// export const filterInsidePlots = (plots, boundary) => {
//   const polygon = new window.google.maps.Polygon({ paths: boundary });
//   return plots.filter((plot) => {
//     const point = new window.google.maps.LatLng(plot.lat, plot.lng);
//     return window.google.maps.geometry.poly.containsLocation(point, polygon);
//   });
// };
