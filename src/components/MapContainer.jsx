// import React, { useRef, useEffect } from "react";
// import { GoogleMap, Polygon } from "@react-google-maps/api";
// import PlotPolygon from "./PlotPolygon";

// const containerStyle = { width: "100%", height: "95%" };

// export default function MapContainer({ center, boundary, plots, squareSize }) {
//   const mapRef = useRef(null);
//   return (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={17}
//       onLoad={(map) => (mapRef.current = map)} // save map instance
//     >
//       {boundary.length > 0 && (
//         <Polygon
//           paths={boundary}
//           options={{
//             strokeColor: "#0000FF",
//             strokeWeight: 2,
//             fillOpacity: 0.2,
//           }}
//         />
//       )}
//       {plots.map((plot, idx) => (
//         <PlotPolygon
//           key={idx}
//           plot={plot}
//           squareSize={squareSize}
//           boundary={boundary}
//         />
//       ))}
//     </GoogleMap>
//   );
// }

import React, { useRef } from "react";
import { GoogleMap, Polygon } from "@react-google-maps/api";
import PlotPolygon from "./PlotPolygon";

const containerStyle = { width: "100%", height: "100%" };

export default function MapContainer({ center, boundary, plots, squareSize }) {
  const mapRef = useRef(null);
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      onLoad={(map) => (mapRef.current = map)}
    >
      {boundary.length > 0 && (
        <Polygon paths={boundary} options={{ strokeColor: "#0000FF", strokeWeight: 2, fillOpacity: 0.2 }} />
      )}
      {plots.map((plot, idx) => (
        <PlotPolygon key={idx} plot={plot} squareSize={squareSize} boundary={boundary} />
      ))}
    </GoogleMap>
  );
}
