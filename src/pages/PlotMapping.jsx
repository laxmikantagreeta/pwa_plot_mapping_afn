// import React, { useState, useEffect } from "react";
// import { LoadScript } from "@react-google-maps/api";
// import MapContainer from "../components/MapContainer";
// import FileUpload from "../components/FileUpload";
// import { filterInsidePlots, calculateSquareSize } from "../components/utils";

// // Initial default center value (in case no KML is loaded)
// const defaultCenter = { lat: 17.8811889, lng: 75.5568831 };
// const libraries = ["geometry"];

// export default function PlotMapping() {
//   const [csvData, setCsvData] = useState([]);
//   const [filteredPlots, setFilteredPlots] = useState([]);
//   const [boundary, setBoundary] = useState([]);
//   const [squareSize, setSquareSize] = useState(0.00005);

//   // New state for map center
//   const [center, setCenter] = useState(defaultCenter);

//   // New state for filter criteria:
//   const [filterDate, setFilterDate] = useState("");
//   // selectedIndex will be either "NDVI" or "NDMI"
//   const [selectedIndex, setSelectedIndex] = useState("NDVI");

//   // Update the square size and center based on boundary changes
//   useEffect(() => {
//     if (boundary.length > 0) {
//       // Update square size based on boundary
//       const newSize = calculateSquareSize(boundary);
//       setSquareSize(newSize);

//       // Update map center: here we choose the first point of boundary as the center
//       setCenter(boundary[0]);
//     }
//   }, [boundary]);

//   // The filtering function (originally triggered by the button)
//   const handleFilter = () => {
//     // For manual filtering (using the button) we still alert if files are not uploaded
//     if (csvData.length === 0 || boundary.length === 0) {
//       alert("Please upload both CSV and KML files.");
//       return;
//     }

//     let filteredData = csvData;
//     console.log("Initial CSV Data:", filteredData);

//     if (filterDate) {
//       filteredData = filteredData.filter((row) => {
//         const rowDateStr = row.date.toISOString().split("T")[0];
//         const isMatch = rowDateStr === filterDate;
//         console.log(
//           `Row date ${rowDateStr} ${isMatch ? "matches" : "does not match"} filter date ${filterDate}`
//         );
//         return isMatch;
//       });
//       console.log("After date filter:", filteredData);
//     }

//     filteredData = filteredData.map((row) => {
//       console.log(`Mapping row, using ${selectedIndex} with value:`, row[selectedIndex]);
//       // Return a new object containing only lat, lng, and value.
//       return { lat: row.lat, lng: row.lng, value: row[selectedIndex] };
//     });
//     console.log("After index mapping:", filteredData);

//     // Filter data points that are inside the polygon boundary
//     const inside = filterInsidePlots(filteredData, boundary);
//     console.log("After boundary filter, points inside:", inside);
//     setFilteredPlots(inside);
//   };

//   // New useEffect to automatically filter when CSV data, boundary, filterDate, or dropdown change.
//   useEffect(() => {
//     // Only run auto-filter if CSV data, boundary, filterDate, and selectedIndex are all available.
//     if (csvData.length > 0 && boundary.length > 0 && filterDate && selectedIndex) {
//       handleFilter();
//     }
//   }, [filterDate, selectedIndex, csvData, boundary]);

//   return (
//     <div className="w-screen h-screen flex flex-col bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
//       {/* Header */}
//       <div className="bg-white shadow-lg px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-green-200">
//         <h1 className="text-3xl font-extrabold text-green-800 tracking-tight flex items-center gap-2">
//           🌾 Plot Mapping <span className="text-yellow-600">for Agriculture</span>
//         </h1>

//         <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
//           <FileUpload setCsvData={setCsvData} setBoundary={setBoundary} />

//           {/* Additional Filters */}
//           <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-md">
//             {/* Date input */}
//             <input
//               type="date"
//               value={filterDate}
//               onChange={(e) => setFilterDate(e.target.value)}
//               className="border border-green-300 rounded-lg px-4 py-2 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50"
//             />
//             {/* Dropdown for selecting index */}
//             <select
//               value={selectedIndex}
//               onChange={(e) => setSelectedIndex(e.target.value)}
//               className="border border-green-300 rounded-lg px-4 py-2 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50"
//             >
//               <option value="NDVI">NDVI</option>
//               <option value="NDMI">NDMI</option>
//             </select>
//           </div>

//           <button
//             onClick={handleFilter}
//             className="bg-gradient-to-r from-green-600 to-yellow-500 hover:from-green-700 hover:to-yellow-600 text-white px-6 py-2 rounded-xl shadow-md transition-all duration-300 font-semibold"
//           >
//             🚜 Filter & Display
//           </button>
//         </div>
//       </div>

//       {/* Map Area */}
//       <div className="flex-1">
//         <LoadScript
//           googleMapsApiKey="AIzaSyArn5Qmf0v5ZKpGZa_rjdDXDYvaq7TREgg"
//           libraries={libraries}
//         >
//           <MapContainer
//             center={center}
//             boundary={boundary}
//             plots={filteredPlots}
//             squareSize={squareSize}
//           />
//         </LoadScript>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { LoadScript } from "@react-google-maps/api";
// import MapContainer from "../components/MapContainer";
// import { filterInsidePlots, calculateSquareSize } from "../components/utils";

// const defaultCenter = { lat: 17.8811889, lng: 75.5568831 };
// const libraries = ["geometry"];

// export default function PlotMapping() {
//   // Dropdown states
//   const [years, setYears] = useState([]);
//   const [seasons, setSeasons] = useState([]);
//   const [states, setStates] = useState([]);
//   const [kmlList, setKmlList] = useState([]);
//   const [dates, setDates] = useState([]);

//   // Selections
//   const [yearId, setYearId] = useState("");
//   const [seasonId, setSeasonId] = useState("");
//   const [stateId, setStateId] = useState("");
//   const [kmlId, setKmlId] = useState("");
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedIndex, setSelectedIndex] = useState("NDVI");

//   // Mapping states
//   const [boundary, setBoundary] = useState([]);
//   const [filteredPlots, setFilteredPlots] = useState([]);
//   const [squareSize, setSquareSize] = useState(0.00005);
//   const [center, setCenter] = useState(defaultCenter);

//   const AUTH_HEADER = {
//     Authorization: "Basic " + btoa("System:3VnznHx6bASVvsxhbea8TAFeKa7CFYvZyL+/M8G0SNg="),
//   };

//   // Step 1: Load initial dropdowns (Years, Seasons, States)
//   useEffect(() => {
//     fetch("https://bayer.agreeta.com/agFarm_Bayer_Kharif25_WebAPI_Outlet/api/SSMAKMLClassification", {
//       headers: AUTH_HEADER,
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         const data = res.data;
//         setYears(data.cultivationYear);
//         setSeasons(data.seasons);
//         setStates(data.states);
//       })
//       .catch(console.error);
//   }, []);

//   // Step 2: Load KMLs based on selected Year + Season + State
//   useEffect(() => {
//     if (yearId && seasonId && stateId) {
//       fetch(`/api/getKMLs?yearId=${yearId}&seasonId=${seasonId}&stateId=${stateId}`)
//         .then((res) => res.json())
//         .then(setKmlList)
//         .catch(console.error);
//     }
//   }, [yearId, seasonId, stateId]);

//   // Step 3: Load available Dates after KML is selected
//   useEffect(() => {
//     if (kmlId) {
//       fetch(`/api/getDates?kmlId=${kmlId}`)
//         .then((res) => res.json())
//         .then(setDates)
//         .catch(console.error);
//     }
//   }, [kmlId]);

//   // Step 4: Load KML boundary
//   useEffect(() => {
//     if (kmlId) {
//       fetch(`/api/getKMLBoundary?kmlId=${kmlId}`)
//         .then((res) => res.json())
//         .then((coords) => {
//           setBoundary(coords);
//           setCenter(coords[0] || defaultCenter);
//           const size = calculateSquareSize(coords);
//           setSquareSize(size);
//         })
//         .catch(console.error);
//     }
//   }, [kmlId]);

//   // Step 5: Fetch NDVI/NDMI data after Date is selected
//   useEffect(() => {
//     if (kmlId && selectedDate && selectedIndex && boundary.length > 0) {
//       fetch(`/api/getData?kmlId=${kmlId}&date=${selectedDate}&index=${selectedIndex}`)
//         .then((res) => res.json())
//         .then((data) => {
//           const plots = data.map((d) => ({
//             lat: d.lat,
//             lng: d.lng,
//             value: d.value,
//           }));
//           const inside = filterInsidePlots(plots, boundary);
//           setFilteredPlots(inside);
//         })
//         .catch(console.error);
//     }
//   }, [kmlId, selectedDate, selectedIndex, boundary]);

//   return (
//     <div className="w-screen h-screen flex flex-col bg-gradient-to-br from-green-50 via-yellow-50 to-green-100">
//       {/* Header */}
//       <div className="bg-white shadow-lg px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-green-200">
//         <h1 className="text-3xl font-extrabold text-green-800 tracking-tight flex items-center gap-2">
//           🌾 Plot Mapping <span className="text-yellow-600">via API</span>
//         </h1>

//         {/* Dropdowns */}
//         <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-md items-center">
//           <select value={yearId} onChange={(e) => setYearId(e.target.value)} className="px-3 py-2 border rounded">
//             <option value="">Select Year</option>
//             {years.map((y) => (
//               <option key={y.id} value={y.id}>{y.description}</option>
//             ))}
//           </select>

//           <select value={seasonId} onChange={(e) => setSeasonId(e.target.value)} disabled={!yearId} className="px-3 py-2 border rounded">
//             <option value="">Select Season</option>
//             {seasons.map((s) => (
//               <option key={s.id} value={s.id}>{s.description}</option>
//             ))}
//           </select>

//           <select value={stateId} onChange={(e) => setStateId(e.target.value)} disabled={!seasonId} className="px-3 py-2 border rounded">
//             <option value="">Select State</option>
//             {states.map((st) => (
//               <option key={st.id} value={st.id}>{st.description}</option>
//             ))}
//           </select>

//           <select value={kmlId} onChange={(e) => setKmlId(e.target.value)} disabled={!stateId} className="px-3 py-2 border rounded">
//             <option value="">Select KML</option>
//             {kmlList.map((k) => (
//               <option key={k.id} value={k.id}>{k.name}</option>
//             ))}
//           </select>

//           <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} disabled={!kmlId} className="px-3 py-2 border rounded">
//             <option value="">Select Date</option>
//             {dates.map((d, i) => (
//               <option key={i} value={d}>{d}</option>
//             ))}
//           </select>

//           <select value={selectedIndex} onChange={(e) => setSelectedIndex(e.target.value)} className="px-3 py-2 border rounded">
//             <option value="NDVI">NDVI</option>
//             <option value="NDMI">NDMI</option>
//           </select>
//         </div>
//       </div>

//       {/* Map Display */}
//       <div className="flex-1">
//         <LoadScript googleMapsApiKey="AIzaSyArn5Qmf0v5ZKpGZa_rjdDXDYvaq7TREgg" libraries={libraries}>
//           <MapContainer
//             center={center}
//             boundary={boundary}
//             plots={filteredPlots}
//             squareSize={squareSize}
//           />
//         </LoadScript>
//       </div>
//     </div>
//   );
// }
// 📁 src/pages/PlotMapping.jsx
import React, { useEffect, useState } from "react";
// import { LoadScript } from "@react-google-maps/api";
import Dropdowns from "../components/DropdownSelector";
import MapContainer from "../components/MapContainer";
// import {
//   fetchReferenceData
// } from "../api/bayerAPI";
// import {
//   fetchKMLs,
//   fetchDates,
//   fetchKMLBoundary,
//   fetchNDVIData
// } from "../api/plotAPI";
import { calculateSquareSize, filterInsidePlots } from "../components/utils";

const libraries = ["geometry"];
const defaultCenter = { lat: 17.8801, lng: 75.5501 };

export default function PlotMapping() {
  const [years, setYears] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [states, setStates] = useState([]);
  const [kmls, setKMLs] = useState([]);
  const [dates, setDates] = useState([]);

  const [yearId, setYearId] = useState("");
  const [seasonId, setSeasonId] = useState("");
  const [stateId, setStateId] = useState("");
  const [kmlId, setKmlId] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedIndex, setSelectedIndex] = useState("NDVI");

  const [boundary, setBoundary] = useState([]);
  // const [plots, setPlots] = useState([]);
  // const [squareSize, setSquareSize] = useState(0.00005);
  // const [center, setCenter] = useState(defaultCenter);

  useEffect(() => {
    fetchReferenceData()
      .then((data) => {
        setYears(data.cultivationYear);
        setSeasons(data.seasons);
        setStates(data.states);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (yearId && seasonId && stateId) {
      fetchKMLs(yearId, seasonId, stateId).then(setKMLs);
    }
  }, [yearId, seasonId, stateId]);

  useEffect(() => {
    if (kmlId) fetchDates(kmlId).then(setDates);
  }, [kmlId]);

  useEffect(() => {
    if (kmlId) {
      fetchKMLBoundary(kmlId).then((boundary) => {
        setBoundary(boundary);
        setCenter(boundary[0]);
        setSquareSize(calculateSquareSize(boundary));
      });
    }
  }, [kmlId]);

  useEffect(() => {
    if (kmlId && selectedDate && selectedIndex && boundary.length > 0) {
      fetchNDVIData(kmlId, selectedDate, selectedIndex).then((data) => {
        const inside = filterInsidePlots(data, boundary);
        setPlots(inside);
      });
    }
  }, [kmlId, selectedDate, selectedIndex, boundary]);

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-50">
      <div className="bg-white shadow p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
        <h1 className="text-2xl font-bold text-green-800">🌱 Plot Mapper</h1>
        <Dropdowns
          years={years} seasons={seasons} states={states} kmls={kmls} dates={dates}
          yearId={yearId} setYearId={setYearId}
          seasonId={seasonId} setSeasonId={setSeasonId}
          stateId={stateId} setStateId={setStateId}
          kmlId={kmlId} setKmlId={setKmlId}
          selectedDate={selectedDate} setSelectedDate={setSelectedDate}
          selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}
        />
      </div>
{/* 
      <div className="flex-1">
        <LoadScript googleMapsApiKey="AIzaSyArn5Qmf0v5ZKpGZa_rjdDXDYvaq7TREgg" libraries={libraries}>
          <MapContainer
            center={center}
            boundary={boundary}
            plots={plots}
            squareSize={squareSize}
          />
        </LoadScript>
      </div> */}
    </div>
  );
}
