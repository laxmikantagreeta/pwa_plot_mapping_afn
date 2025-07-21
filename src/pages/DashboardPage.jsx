// import React, { useState, useCallback } from "react";
// import {
//     GoogleMap,
//     useLoadScript,
//     OverlayView,
// } from "@react-google-maps/api";
// import { useNavigate } from "react-router-dom";
// import FooterNav from "../components/Footer";
// import { FaUser } from "react-icons/fa";

// const containerStyle = {
//     width: "100%",
//     height: "400px",
// };

// const center = {
//     lat: 17.6772, 
//     lng: 75.3241,
// };

// // Example bounds for overlays (adjust to your farm area)
// const overlayBounds = {
//     north: 17.679,
//     south: 17.675,
//     east: 75.326,
//     west: 75.322,
// };

// export default function DashboardPageWithMap() {
//     const [field, setField] = useState("A");
//     const [crop, setCrop] = useState("A - Pomegranate (2.0)");
//     const [status, setStatus] = useState("पिकाचे आरोग्य");
//     const [activeTab, setActiveTab] = useState("DashboardPage");

//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: "AIzaSyArn5Qmf0v5ZKpGZa_rjdDXDYvaq7TREgg",
//     });

//     const renderOverlay = () => {
//         const imageUrl =
//             status === "पिकाचे आरोग्य"
//                 ? "/ndvi-overlay.png"
//                 : "/stress-overlay.png";

//         return (
//             <OverlayView
//                 position={center}
//                 mapPaneName={OverlayView.OVERLAY_LAYER}
//                 bounds={overlayBounds}
//             >
//                 <img
//                     src={imageUrl}
//                     alt="Overlay"
//                     className="w-full h-full object-cover opacity-75"
//                 />
//             </OverlayView>
//         );
//     };
//     const navigate = useNavigate();

//     if (!isLoaded) return <div>Loading Map...</div>;

//     return (
//         <div className="min-h-screen flex flex-col bg-white">
//             {/* Header */}
//             <header className="bg-green-500 text-white px-4 py-3 flex justify-between items-center">
//                 <button
//                     onClick={() => navigate("/SettingsPage")}
//                     className="hover:cursor-pointer"
//                     aria-label="Open Settings"
//                 >
//                     <span className="text-[32px] leading-none">☰</span>
//                 </button>

//                 <h1 className="text-lg font-semibold">Shubham Bagal</h1>
//                 <button
//                     onClick={() => navigate("/FarmerProfile")}
//                     className="text-2xl text-white hover:cursor-pointer"
//                     aria-label="Farmer Profile"
//                 >
//                     <FaUser />
//                 </button>

//             </header>

//             <div className="w-full flex justify-center mt-6">
//                 <div className="w-[300px] space-y-4">

//                     {/* शेती क्षेत्र */}
//                     <div className="flex items-center">
//                         <span className="text-sm text-black mr-1 whitespace-nowrap ml-8">शेती क्षेत्र</span>
//                         <span className="text-sm text-black mr-1">:</span>
//                         <div className="relative flex-1">
//                             <select
//                                 className="appearance-none w-full bg-transparent text-sm text-black pr-5 focus:outline-none border-b border-black pb-[2px] font-semibold"
//                             >
//                                 <option>A</option>
//                                 <option>B</option>
//                             </select>
//                             <div className="absolute right-0 top-1/2 -translate-y-1/2 text-black text-sm pointer-events-none">
//                                 ▼
//                             </div>
//                         </div>
//                     </div>

//                     {/* पीक */}
//                     <div className="flex items-center">
//                         <span className="text-sm text-black mr-1 whitespace-nowrap ml-14">पीक</span>
//                         <span className="text-sm text-black ml-sm mr-1">:</span>
//                         <div className="relative flex-1">
//                             <select
//                                 className="appearance-none w-full bg-transparent text-sm text-black pr-5 focus:outline-none font-semibold border-b border-black pb-[2px]"
//                             >
//                                 <option>A - Pomegranate (2.0)</option>
//                                 <option>B - Guava (3.0)</option>
//                             </select>
//                             <div className="absolute right-0 top-1/2 -translate-y-1/2 text-black text-sm pointer-events-none">
//                                 ▼
//                             </div>
//                         </div>
//                     </div>
//                     {/* पिकाची स्थिती */}
//                     <div className="flex items-center">
//                         <span className="text-sm text-black mr-1 whitespace-nowrap">   पिकाची स्थिती   </span>
//                         <span className="text-sm text-black mr-1">:</span>
//                         <div className="relative flex-1">
//                             <select
//                                 className="appearance-none w-full font-semibold bg-transparent text-sm text-black pr-5 focus:outline-none border-b border-black pb-[2px]"
//                             >
//                                 <option>NDVI / Vegetation</option>
//                                 <option>Biotic Stress</option>
//                             </select>
//                             <div className="absolute right-0 top-1/2 -translate-y-1/2 text-black text-sm pointer-events-none">
//                                 ▼
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>


//             {/* Map with overlay */}
//             <div className="px-4 my-6">
//                 <GoogleMap
//                     mapContainerStyle={containerStyle}
//                     center={center}
//                     zoom={17}
//                 >
//                     {/* {renderOverlay()} */}
//                 </GoogleMap>
//             </div>

//             <FooterNav selected={activeTab} onSelect={setActiveTab} />
//         </div>
//     );
// }

// working for शेती क्षेत्र and पीक

// import React, { useState, useCallback, useContext, useEffect } from "react";
// import {
//     GoogleMap,
//     useLoadScript,
//     OverlayView,
// } from "@react-google-maps/api";
// import { useNavigate } from "react-router-dom";
// import FooterNav from "../components/Footer";
// import { FaUser } from "react-icons/fa";
// import { FarmerContext } from "../contexts/FarmerContext";

// const containerStyle = {
//     width: "100%",
//     height: "300px",
// };

// const center = {
//     lat: 17.6772,
//     lng: 75.3241,
// };

// // Example bounds for overlays (adjust to your farm area)
// const overlayBounds = {
//     north: 17.679,
//     south: 17.675,
//     east: 75.326,
//     west: 75.322,
// };

// export default function DashboardPageWithMap() {
//     const [field, setField] = useState("A");
//     const [crop, setCrop] = useState("A - Pomegranate (2.0)");
//     const [status, setStatus] = useState("पिकाचे आरोग्य");
//     const [activeTab, setActiveTab] = useState("DashboardPage");

//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: "AIzaSyArn5Qmf0v5ZKpGZa_rjdDXDYvaq7TREgg",
//     });

//     const renderOverlay = () => {
//         const imageUrl =
//             status === "पिकाचे आरोग्य"
//                 ? "/ndvi-overlay.png"
//                 : "/stress-overlay.png";

//         return (
//             <OverlayView
//                 position={center}
//                 mapPaneName={OverlayView.OVERLAY_LAYER}
//                 bounds={overlayBounds}
//             >
//                 <img
//                     src={imageUrl}
//                     alt="Overlay"
//                     className="w-full h-full object-cover opacity-75"
//                 />
//             </OverlayView>
//         );
//     };
//     const navigate = useNavigate();

//     const {farmerData, loading, error } = useContext(FarmerContext);
//     const [selectedFieldCode, setSelectedFieldCode] = useState("");
//     const [selectedCrop, setSelectedCrop] = useState("");

//     // Extract all fields from nested farms
//     const fields = farmerData?.farms?.flatMap(farm =>
//         farm.fields?.map(field => ({
//             fieldCode: field.fieldCode,
//             crop: field.crop,
//             cropDisplay: `${field.fieldCode} - ${field.crop} (${field.totalAreaInAcre})`,
//         }))
//     ) || [];

//     useEffect(() => {
//         if (fields.length > 0 && !selectedFieldCode) {
//             setSelectedFieldCode(fields[0].fieldCode);
//             setSelectedCrop(fields[0].cropDisplay);
//         }
//     }, [fields]);

//     const uniqueFieldCodes = [...new Set(fields.map(f => f.fieldCode))];

//     const cropOptions = fields.filter(f => f.fieldCode === selectedFieldCode);

//     if (loading) {
//         return (
//             <div className="text-center py-10 text-gray-600">
//                 लोड करत आहे...
//             </div>
//         );
//     }

//     if (error || !farmerData) {
//         return (
//             <div className="text-center py-10 text-red-600">
//                 डेटा मिळवता आला नाही
//             </div>
//         );
//     }

//     const fullName = farmerData?.name && farmerData?.lastName
//         ? `${farmerData.name} ${farmerData.lastName}`
//         : "शेतकरी"; // fallback if name not loaded


//     if (!isLoaded) return <div>Loading Map...</div>;

//     return (
//         <div className="min-h-screen flex flex-col bg-gray-50">
//             {/* Header */}
//             <header className="bg-green-500 text-white px-3 sm:px-4 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
//                 <button
//                     onClick={() => navigate("/SettingsPage")}
//                     className="hover:cursor-pointer p-2 hover:bg-green-600 rounded-md transition-colors"
//                     aria-label="Open Settings"
//                 >
//                     <span className="text-2xl sm:text-3xl leading-none">☰</span>
//                 </button>

//                 <h1 className="text-sm sm:text-lg font-semibold text-center flex-1 mx-2 truncate">{fullName}</h1>
//                 <button
//                     onClick={() => navigate("/FarmerProfile")}
//                     className="text-xl sm:text-2xl text-white hover:cursor-pointer p-2 hover:bg-green-600 rounded-md transition-colors"
//                     aria-label="Farmer Profile"
//                 >
//                     <FaUser />
//                 </button>
//             </header>

//             {/* Form Section */}
//             <div className="w-full flex justify-center mt-4 sm:mt-6 px-4">
//                 <div className="w-full max-w-md space-y-4 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
//                     {/* शेती क्षेत्र */}
//                     {/* <div className="flex items-center">
//                         <span className="text-sm sm:text-base font-bold text-gray-800 mr-2 whitespace-nowrap min-w-[80px] sm:min-w-[100px]">शेती क्षेत्र</span>
//                         <span className="text-sm sm:text-base text-gray-800 mr-2">:</span>
//                         <div className="relative flex-1">
//                             <select
//                                 className="appearance-none w-full bg-transparent text-sm sm:text-base text-gray-800 pr-6 focus:outline-none border-b-2 border-gray-300 focus:border-green-500 pb-1 transition-colors"
//                             >
//                                 <option>A</option>
//                                 <option>B</option>
//                             </select>
//                             <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none">
//                                 ▼
//                             </div>
//                         </div>
//                     </div> */}

//                     {/* पीक */}
//                     {/* <div className="flex items-center">
//                         <span className="text-sm sm:text-base font-bold text-gray-800 mr-2 whitespace-nowrap min-w-[80px] sm:min-w-[100px]">पीक</span>
//                         <span className="text-sm sm:text-base text-gray-800 mr-2">:</span>
//                         <div className="relative flex-1">
//                             <select
//                                 className="appearance-none w-full bg-transparent text-sm sm:text-base text-gray-800 pr-6 focus:outline-none border-b-2 border-gray-300 focus:border-green-500 pb-1 transition-colors"
//                             >
//                                 <option>A - Pomegranate (2.0)</option>
//                                 <option>B - Guava (3.0)</option>
//                             </select>
//                             <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none">
//                                 ▼
//                             </div>
//                         </div>
//                     </div> */}
//                     {/* पिकाची स्थिती */}
//                     <div className="flex items-center">
//                         <span className="text-sm sm:text-base font-bold text-gray-800 mr-2 whitespace-nowrap min-w-[80px] sm:min-w-[100px]">हंगाम</span>
//                         <span className="text-sm sm:text-base text-gray-800 mr-2">:</span>
//                         <div className="relative flex-1">
//                             <select
//                                 className="appearance-none w-full bg-transparent text-sm sm:text-base text-gray-800 pr-6 focus:outline-none border-b-2 border-gray-300 focus:border-green-500 pb-1 transition-colors"
//                             >
//                                 <option>खरीप</option>
//                                 <option>रब्बी</option>
//                                 <option>उन्हाळा </option>
//                             </select>
//                             <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none">
//                                 ▼
//                             </div>
//                         </div>
//                     </div>

//                     {/* शेती क्षेत्र */}
//                     <div className="flex items-center">
//                         <span className="text-sm sm:text-base font-bold text-gray-800 mr-2 whitespace-nowrap min-w-[80px] sm:min-w-[100px]">शेती क्षेत्र</span>
//                         <span className="text-sm sm:text-base text-gray-800 mr-2">:</span>
//                         <div className="relative flex-1">
//                             <select
//                                 value={selectedFieldCode}
//                                 onChange={(e) => {
//                                     setSelectedFieldCode(e.target.value);
//                                     const firstCrop = fields.find(f => f.fieldCode === e.target.value);
//                                     setSelectedCrop(firstCrop?.cropDisplay || "");
//                                 }}
//                                 className="appearance-none w-full bg-transparent text-sm sm:text-base text-gray-800 pr-6 focus:outline-none border-b-2 border-gray-300 focus:border-green-500 pb-1 transition-colors"
//                             >
//                                 {uniqueFieldCodes.map(code => (
//                                     <option key={code} value={code}>{code}</option>
//                                 ))}
//                             </select>
//                             <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none">▼</div>
//                         </div>
//                     </div>

//                     {/* पीक */}
//                     <div className="flex items-center">
//                         <span className="text-sm sm:text-base font-bold text-gray-800 mr-2 whitespace-nowrap min-w-[80px] sm:min-w-[100px]">पीक</span>
//                         <span className="text-sm sm:text-base text-gray-800 mr-2">:</span>
//                         <div className="relative flex-1">
//                             <select
//                                 value={selectedCrop}
//                                 onChange={(e) => setSelectedCrop(e.target.value)}
//                                 className="appearance-none w-full bg-transparent text-sm sm:text-base text-gray-800 pr-6 focus:outline-none border-b-2 border-gray-300 focus:border-green-500 pb-1 transition-colors"
//                             >
//                                 {cropOptions.map((f, i) => (
//                                     <option key={i} value={f.cropDisplay}>{f.cropDisplay}</option>
//                                 ))}
//                             </select>
//                             <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none">▼</div>
//                         </div>
//                     </div>



//                 </div>
//             </div>

//             {/* Map with overlay */}
//             <div className="px-4 my-4 sm:my-6 flex-1">
//                 <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ height: "calc(100vh - 280px)", minHeight: "300px" }}>
//                     <GoogleMap
//                         mapContainerStyle={{ width: "100%", height: "100%" }}
//                         center={center}
//                         zoom={17}
//                         options={{
//                             zoomControl: true,
//                             streetViewControl: false,
//                             mapTypeControl: false,
//                             fullscreenControl: false,
//                         }}
//                     >
//                         {/* {renderOverlay()} */}
//                     </GoogleMap>
//                 </div>
//             </div>

//             {/* Bottom spacing for footer */}
//             <div className="h-16 sm:h-20"></div>

//             <FooterNav selected={activeTab} onSelect={setActiveTab} />
//         </div>
//     );
// }






// working frontend code 
// import React, { useState, useCallback, useContext } from "react";
// import {
//     GoogleMap,
//     useLoadScript,
//     OverlayView,
// } from "@react-google-maps/api";
// import { useNavigate } from "react-router-dom";
// import FooterNav from "../components/Footer";
// import { FaUser } from "react-icons/fa";
// import { FarmerContext } from "../contexts/FarmerContext";

// const containerStyle = {
//     width: "100%",
//     height: "300px",
// };

// const center = {
//     lat: 17.6772,
//     lng: 75.3241,
// };

// // Example bounds for overlays (adjust to your farm area)
// const overlayBounds = {
//     north: 17.679,
//     south: 17.675,
//     east: 75.326,
//     west: 75.322,
// };

// export default function DashboardPageWithMap() {
//     const [field, setField] = useState("A");
//     const [crop, setCrop] = useState("A - Pomegranate (2.0)");
//     const [status, setStatus] = useState("पिकाचे आरोग्य");
//     const [activeTab, setActiveTab] = useState("DashboardPage");

//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: "AIzaSyArn5Qmf0v5ZKpGZa_rjdDXDYvaq7TREgg",
//     });

//     const renderOverlay = () => {
//         const imageUrl =
//             status === "पिकाचे आरोग्य"
//                 ? "/ndvi-overlay.png"
//                 : "/stress-overlay.png";

//         return (
//             <OverlayView
//                 position={center}
//                 mapPaneName={OverlayView.OVERLAY_LAYER}
//                 bounds={overlayBounds}
//             >
//                 <img
//                     src={imageUrl}
//                     alt="Overlay"
//                     className="w-full h-full object-cover opacity-75"
//                 />
//             </OverlayView>
//         );
//     };
//     const navigate = useNavigate();

//     const { farmerData, loading, error } = useContext(FarmerContext);

//     if (loading) {
//         return (
//             <div className="text-center py-10 text-gray-600">
//                 लोड करत आहे...
//             </div>
//         );
//     }

//     if (error || !farmerData) {
//         return (
//             <div className="text-center py-10 text-red-600">
//                 डेटा मिळवता आला नाही
//             </div>
//         );
//     }

//     const fullName = farmerData?.name && farmerData?.lastName
//         ? `${farmerData.name} ${farmerData.lastName}`
//         : "शेतकरी"; // fallback if name not loaded


//     if (!isLoaded) return <div>Loading Map...</div>;

//     return (
//         <div className="min-h-screen flex flex-col bg-gray-50">
//             {/* Header */}
//             <header className="bg-green-500 text-white px-3 sm:px-4 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
//                 <button
//                     onClick={() => navigate("/SettingsPage")}
//                     className="hover:cursor-pointer p-2 hover:bg-green-600 rounded-md transition-colors"
//                     aria-label="Open Settings"
//                 >
//                     <span className="text-2xl sm:text-3xl leading-none">☰</span>
//                 </button>

//                 <h1 className="text-sm sm:text-lg font-semibold text-center flex-1 mx-2 truncate">{fullName}</h1>
//                 <button
//                     onClick={() => navigate("/FarmerProfile")}
//                     className="text-xl sm:text-2xl text-white hover:cursor-pointer p-2 hover:bg-green-600 rounded-md transition-colors"
//                     aria-label="Farmer Profile"
//                 >
//                     <FaUser />
//                 </button>
//             </header>

//             {/* Form Section */}
//             <div className="w-full flex justify-center mt-4 sm:mt-6 px-4">
//                 <div className="w-full max-w-md space-y-4 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
//                     {/* शेती क्षेत्र */}
//                     <div className="flex items-center">
//                         <span className="text-sm sm:text-base font-bold text-gray-800 mr-2 whitespace-nowrap min-w-[80px] sm:min-w-[100px]">शेती क्षेत्र</span>
//                         <span className="text-sm sm:text-base text-gray-800 mr-2">:</span>
//                         <div className="relative flex-1">
//                             <select
//                                 className="appearance-none w-full bg-transparent text-sm sm:text-base text-gray-800 pr-6 focus:outline-none border-b-2 border-gray-300 focus:border-green-500 pb-1 transition-colors"
//                             >
//                                 <option>A</option>
//                                 <option>B</option>
//                             </select>
//                             <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none">
//                                 ▼
//                             </div>
//                         </div>
//                     </div>

//                     {/* पीक */}
//                     <div className="flex items-center">
//                         <span className="text-sm sm:text-base font-bold text-gray-800 mr-2 whitespace-nowrap min-w-[80px] sm:min-w-[100px]">पीक</span>
//                         <span className="text-sm sm:text-base text-gray-800 mr-2">:</span>
//                         <div className="relative flex-1">
//                             <select
//                                 className="appearance-none w-full bg-transparent text-sm sm:text-base text-gray-800 pr-6 focus:outline-none border-b-2 border-gray-300 focus:border-green-500 pb-1 transition-colors"
//                             >
//                                 <option>A - Pomegranate (2.0)</option>
//                                 <option>B - Guava (3.0)</option>
//                             </select>
//                             <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none">
//                                 ▼
//                             </div>
//                         </div>
//                     </div>

//                     {/* पिकाची स्थिती */}
//                     <div className="flex items-center">
//                         <span className="text-sm sm:text-base font-bold text-gray-800 mr-2 whitespace-nowrap min-w-[80px] sm:min-w-[100px]">हंगाम</span>
//                         <span className="text-sm sm:text-base text-gray-800 mr-2">:</span>
//                         <div className="relative flex-1">
//                             <select
//                                 className="appearance-none w-full bg-transparent text-sm sm:text-base text-gray-800 pr-6 focus:outline-none border-b-2 border-gray-300 focus:border-green-500 pb-1 transition-colors"
//                             >
//                                 <option>खरीप</option>
//                                 <option>रब्बी</option>
//                                 <option>उन्हाळा </option>
//                             </select>
//                             <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none">
//                                 ▼
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Map with overlay */}
//             <div className="px-4 my-4 sm:my-6 flex-1">
//                 <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ height: "calc(100vh - 280px)", minHeight: "300px" }}>
//                     <GoogleMap
//                         mapContainerStyle={{ width: "100%", height: "100%" }}
//                         center={center}
//                         zoom={17}
//                         options={{
//                             zoomControl: true,
//                             streetViewControl: false,
//                             mapTypeControl: false,
//                             fullscreenControl: false,
//                         }}
//                     >
//                         {/* {renderOverlay()} */}
//                     </GoogleMap>
//                 </div>
//             </div>

//             {/* Bottom spacing for footer */}
//             <div className="h-16 sm:h-20"></div>

//             <FooterNav selected={activeTab} onSelect={setActiveTab} />
//         </div>
//     );
// }



// 16/07/25
// import React, { useState, useContext, useMemo } from "react";
// import {
//   GoogleMap,
//   useLoadScript,
// } from "@react-google-maps/api";
// import { useNavigate } from "react-router-dom";
// import FooterNav from "../components/Footer";
// import { FaUser } from "react-icons/fa";
// import { FarmerContext } from "../contexts/FarmerContext";
// import { SelectionContext } from "../contexts/SelectionContext";

// const containerStyle = {
//   width: "100%",
//   height: "300px",
// };

// const center = {
//   lat: 17.6772,
//   lng: 75.3241,
// };

// export default function DashboardPageWithMap() {
//   const navigate = useNavigate();
//   const { farmerData, loading, error } = useContext(FarmerContext);
//   const [selectedSeason, setSelectedSeason] = useState("");
//   const [selectedField, setSelectedField] = useState("");
//   const [activeTab, setActiveTab] = useState("DashboardPage");

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyArn5Qmf0v5ZKpGZa_rjdDXDYvaq7TREgg", 
//   });

//   // Get farms from farmerData
//   const farms = farmerData?.farms || [];

//   // Extract unique seasons
//   const seasons = useMemo(() => {
//     const unique = new Set();
//     farms.forEach(f => {
//       if (f.seasonType) unique.add(f.seasonType);
//     });
//     return Array.from(unique);
//   }, [farms]);

//   // Filter fields based on selected season
//   const fields = useMemo(() => {
//     return farms
//       .filter(f => f.seasonType === selectedSeason)
//       .flatMap(f => f.fields || []);
//   }, [farms, selectedSeason]);

//   // Get crop for selected field
//   const selectedCrop = useMemo(() => {
//     const fieldObj = fields.find(f => f.fieldCode === selectedField);
//     return fieldObj ? `${fieldObj.crop} (${fieldObj.totalAreaInAcre} एकर)` : "";
//   }, [fields, selectedField]);

//   const fullName = farmerData?.name && farmerData?.lastName
//     ? `${farmerData.name} ${farmerData.lastName}`
//     : "शेतकरी";

//   if (loading || !isLoaded) return <div className="text-center py-10 text-gray-600">लोड करत आहे...</div>;
//   if (error || !farmerData) return <div className="text-center py-10 text-red-600">डेटा मिळवता आला नाही</div>;

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Header */}
//       <header className="bg-green-500 text-white px-3 sm:px-4 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
//         <button
//           onClick={() => navigate("/SettingsPage")}
//           className="hover:cursor-pointer p-2 hover:bg-green-600 rounded-md transition-colors"
//         >
//           <span className="text-2xl sm:text-3xl leading-none">☰</span>
//         </button>
//         <h1 className="text-sm sm:text-lg font-semibold text-center flex-1 mx-2 truncate">{fullName}</h1>
//         <button
//           onClick={() => navigate("/FarmerProfile")}
//           className="text-xl sm:text-2xl text-white hover:cursor-pointer p-2 hover:bg-green-600 rounded-md transition-colors"
//         >
//           <FaUser />
//         </button>
//       </header>

//       {/* Form Section */}
//       <div className="w-full flex justify-center mt-4 sm:mt-6 px-4">
//         <div className="w-full max-w-md space-y-4 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
//           {/* हंगाम */}
//           <div className="flex items-center">
//             <span className="text-sm sm:text-base font-bold text-gray-800 mr-2 min-w-[80px]">हंगाम</span>
//             <span className="text-sm text-gray-800 mr-2">:</span>
//             <div className="relative flex-1">
//               <select
//                 className="appearance-none w-full bg-transparent text-sm text-gray-800 pr-6 focus:outline-none border-b-2 border-gray-300 focus:border-green-500 pb-1"
//                 value={selectedSeason}
//                 onChange={(e) => {
//                   setSelectedSeason(e.target.value);
//                   setSelectedField(""); // reset field when season changes
//                 }}
//               >
//                 <option value="">-- निवडा --</option>
//                 {seasons.map((season, idx) => (
//                   <option key={idx} value={season}>{season}</option>
//                 ))}
//               </select>
//               <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none">▼</div>
//             </div>
//           </div>

//           {/* शेती क्षेत्र */}
//           <div className="flex items-center">
//             <span className="text-sm sm:text-base font-bold text-gray-800 mr-2 min-w-[80px]">शेती क्षेत्र</span>
//             <span className="text-sm text-gray-800 mr-2">:</span>
//             <div className="relative flex-1">
//               <select
//                 className="appearance-none w-full bg-transparent text-sm text-gray-800 pr-6 focus:outline-none border-b-2 border-gray-300 focus:border-green-500 pb-1"
//                 value={selectedField}
//                 onChange={(e) => setSelectedField(e.target.value)}
//                 disabled={!selectedSeason}
//               >
//                 <option value="">-- निवडा --</option>
//                 {fields.map((field, idx) => (
//                   <option key={idx} value={field.fieldCode}>{field.fieldCode}</option>
//                 ))}
//               </select>
//               <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none">▼</div>
//             </div>
//           </div>

//           {/* पीक */}
//           <div className="flex items-center">
//             <span className="text-sm sm:text-base font-bold text-gray-800 mr-2 min-w-[80px]">पीक</span>
//             <span className="text-sm text-gray-800 mr-2">:</span>
//             <div className="flex-1 text-sm text-gray-800 font-semibold">
//               {selectedCrop || "—"}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Map */}
//       <div className="px-4 my-4 sm:my-6 flex-1">
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ height: "calc(100vh - 280px)", minHeight: "300px" }}>
//           <GoogleMap
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             center={center}
//             zoom={17}
//             options={{
//               zoomControl: true,
//               streetViewControl: false,
//               mapTypeControl: false,
//               fullscreenControl: false,
//             }}
//           />
//         </div>
//       </div>

//       {/* Footer spacing */}
//       <div className="h-16 sm:h-20" />
//       <FooterNav selected={activeTab} onSelect={setActiveTab} />
//     </div>
//   );
// }


// import React, { useState, useContext, useMemo } from "react";
// import {
//   GoogleMap,
//   useLoadScript,
//   KmlLayer,
// } from "@react-google-maps/api";
// import { useNavigate } from "react-router-dom";
// import FooterNav from "../components/Footer";
// import { FaUser } from "react-icons/fa";
// import { FarmerContext } from "../contexts/FarmerContext";
// import FarmSelector from "../contexts/SelectionContext";

// const center = { lat: 17.6772, lng: 75.3241 };

// export default function DashboardPage() {
//   const navigate = useNavigate();
//   const { farmerData, loading, error } = useContext(FarmerContext);

//   const [selectedSeason, setSelectedSeason] = useState("");
//   const [selectedField, setSelectedField] = useState("");
//   const [activeTab, setActiveTab] = useState("DashboardPage");

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyArn5Qmf0v5ZKpGZa_rjdDXDYvaq7TREgg", // Replace with your key
//   });

//   const farms = farmerData?.farms || [];

//   const seasons = useMemo(() => {
//     const set = new Set();
//     farms.forEach(f => f.seasonType && set.add(f.seasonType));
//     return [...set];
//   }, [farms]);

//   const fields = useMemo(() => {
//     return farms
//       .filter(f => f.seasonType === selectedSeason)
//       .flatMap(f => f.fields || []);
//   }, [farms, selectedSeason]);

//   const selectedFieldObj = useMemo(() => {
//     return fields.find(f => f.fieldCode === selectedField);
//   }, [fields, selectedField]);

//   const selectedCrop = selectedFieldObj
//     ? `${selectedFieldObj.crop} (${selectedFieldObj.totalAreaInAcre} एकर)`
//     : "";

//   const kmlUrl = selectedFieldObj?.kmlFolderURL || "";

//   const fullName = farmerData?.name && farmerData?.lastName
//     ? `${farmerData.name} ${farmerData.lastName}`
//     : "शेतकरी";

//   if (loading || !isLoaded) return <div className="text-center py-10">लोड होत आहे...</div>;
//   if (error || !farmerData) return <div className="text-center py-10 text-red-600">डेटा मिळवता आला नाही</div>;

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Header */}
//       <header className="bg-green-500 text-white px-4 py-3 flex justify-between items-center shadow-md sticky top-0 z-50">
//         <button onClick={() => navigate("/SettingsPage")} className="p-2 hover:bg-green-600 rounded">
//           ☰
//         </button>
//         <h1 className="text-sm sm:text-lg font-semibold truncate">{fullName}</h1>
//         <button onClick={() => navigate("/FarmerProfile")} className="p-2 hover:bg-green-600 rounded">
//           <FaUser />
//         </button>
//       </header>

//       {/* Dropdowns */}
//       <div className="w-full flex justify-center mt-4 px-4">
//         <div className="w-full max-w-md space-y-4 bg-white p-4 rounded shadow-sm">
//           {/* Season */}
//           <div className="flex items-center">
//             <label className="min-w-[90px] font-semibold text-gray-700">हंगाम</label>
//             <span className="mr-2">:</span>
//             <select
//               className="flex-1 border-b border-gray-300 focus:border-green-500 outline-none"
//               value={selectedSeason}
//               onChange={e => {
//                 setSelectedSeason(e.target.value);
//                 setSelectedField("");
//               }}
//             >
//               <option value="">-- निवडा --</option>
//               {seasons.map((s, i) => (
//                 <option key={i} value={s}>{s}</option>
//               ))}
//             </select>
//           </div>

//           {/* Field */}
//           <div className="flex items-center">
//             <label className="min-w-[90px] font-semibold text-gray-700">शेती क्षेत्र</label>
//             <span className="mr-2">:</span>
//             <select
//               className="flex-1 border-b border-gray-300 focus:border-green-500 outline-none"
//               value={selectedField}
//               onChange={e => setSelectedField(e.target.value)}
//               disabled={!selectedSeason}
//             >
//               <option value="">-- निवडा --</option>
//               {fields.map((f, i) => (
//                 <option key={i} value={f.fieldCode}>{f.fieldCode}</option>
//               ))}
//             </select>
//           </div>

//           {/* Crop */}
//           <div className="flex items-center">
//             <label className="min-w-[90px] font-semibold text-gray-700">पीक</label>
//             <span className="mr-2">:</span>
//             <div className="flex-1 font-semibold text-gray-800">
//               {selectedCrop || "—"}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Map */}
//       <div className="flex-1 px-4 my-4">
//         <div className="bg-white rounded shadow-sm overflow-hidden" style={{ height: "calc(100vh - 320px)" }}>
//           <GoogleMap
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             center={center}
//             zoom={17}
//             options={{
//               zoomControl: true,
//               mapTypeControl: false,
//               fullscreenControl: false,
//               streetViewControl: false,
//             }}
//           >
//             {kmlUrl && (
//               <KmlLayer
//                 key={kmlUrl}
//                 url={kmlUrl}
//                 options={{ preserveViewport: true }}
//               />
//             )}
//           </GoogleMap>
//         </div>
//       </div>

//       <div className="h-16 sm:h-20" />
//       <FooterNav selected={activeTab} onSelect={setActiveTab} />
//     </div>
//   );
// }


// // // DashboardPage.jsx drpdown working code
// import React, { useContext, useState, useEffect } from "react";
// import { GoogleMap, useLoadScript, KmlLayer } from "@react-google-maps/api";
// import { useNavigate } from "react-router-dom";
// import FooterNav from "../components/Footer";
// import { FaUser } from "react-icons/fa";
// import { FarmerContext } from "../contexts/FarmerContext";
// import FarmSelector from "../contexts/SelectionContext";

// const containerStyle = {
//   width: "100%",
//   height: "300px",
// };

// const center = {
//   lat: 17.6772,
//   lng: 75.3241,
// };

// export default function DashboardPage() {
//   const navigate = useNavigate();
//   const { farmerData, loading, error } = useContext(FarmerContext);
//   const [selectedSeason, setSelectedSeason] = useState("");
//   const [selectedField, setSelectedField] = useState("");
//   const [activeTab, setActiveTab] = useState("DashboardPage");
//   const [kmlUrl, setKmlUrl] = useState(null);

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyArn5Qmf0v5ZKpGZa_rjdDXDYvaq7TREgg", // ✅ Replace with your own
//   });

//   // Load KML URL based on selected field
//   useEffect(() => {
//     if (!selectedSeason || !selectedField || !farmerData?.farms) {
//       setKmlUrl(null);
//       return;
//     }
//     const matchingFarm = farmerData.farms.find(
//       (farm) => farm.seasonType === selectedSeason
//     );

//     const matchingField = matchingFarm?.fields?.find(
//       (field) => field.fieldCode === selectedField
//     );

//     if (matchingField?.kmlFolderURL) {
//       setKmlUrl(matchingField.kmlFolderURL);
//     } else {
//       setKmlUrl(null);
//     }
//   }, [selectedSeason, selectedField, farmerData]);

//   const fullName = farmerData?.name && farmerData?.lastName
//     ? `${farmerData.name} ${farmerData.lastName}`
//     : "शेतकरी";

//   if (loading || !isLoaded)
//     return <div className="text-center py-10 text-gray-600">लोड करत आहे...</div>;

//   if (error || !farmerData)
//     return <div className="text-center py-10 text-red-600">डेटा मिळवता आला नाही</div>;

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Header */}
//       <header className="bg-green-500 text-white px-3 sm:px-4 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
//         <button
//           onClick={() => navigate("/SettingsPage")}
//           className="hover:cursor-pointer p-2 hover:bg-green-600 rounded-md transition-colors"
//         >
//           <span className="text-2xl sm:text-3xl leading-none">☰</span>
//         </button>
//         <h1 className="text-sm sm:text-lg font-semibold text-center flex-1 mx-2 truncate">{fullName}</h1>
//         <button
//           onClick={() => navigate("/FarmerProfile")}
//           className="text-xl sm:text-2xl text-white hover:cursor-pointer p-2 hover:bg-green-600 rounded-md transition-colors"
//         >
//           <FaUser />
//         </button>
//       </header>

//       {/* Form Section with Shared FarmSelector */}
//       <div className="w-full flex justify-center mt-4 sm:mt-6 px-4">
//         <div className="w-full max-w-md bg-white p-4 sm:p-6 rounded-lg shadow-sm">
//           <FarmSelector
//             selectedSeason={selectedSeason}
//             setSelectedSeason={setSelectedSeason}
//             selectedField={selectedField}
//             setSelectedField={setSelectedField}
//           />
//         </div>
//       </div>

//       {/* Map Section */}
//       <div className="px-4 my-4 sm:my-6 flex-1">
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ height: "calc(100vh - 280px)", minHeight: "300px" }}>
//           <GoogleMap
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             center={center}
//             zoom={17}
//             options={{
//               zoomControl: true,
//               streetViewControl: false,
//               mapTypeControl: false,
//               fullscreenControl: false,
//             }}
//           >
//             {/* KML Layer */}
//             {kmlUrl && (
//               <KmlLayer
//                 key={kmlUrl}
//                 url={kmlUrl}
//                 options={{
//                   preserveViewport: false,
//                   suppressInfoWindows: true,
//                 }}
//               />
//             )}
//           </GoogleMap>
//         </div>
//       </div>

//       {/* Bottom spacing + footer */}
//       <div className="h-16 sm:h-20" />
//       <FooterNav selected={activeTab} onSelect={setActiveTab} />
//     </div>
//   );
// }

// // DashboardPage.jsx
// import React, { useContext, useState, useEffect } from "react";
// import { GoogleMap, useLoadScript, Polygon, KmlLayer } from "@react-google-maps/api";
// import { useNavigate } from "react-router-dom";
// import FooterNav from "../components/Footer";
// import { FaUser } from "react-icons/fa";
// import { FarmerContext } from "../contexts/FarmerContext";
// import FarmSelector from "../contexts/SelectionContext";
// import axios from "../contexts/axiosInstance"; // Axios wrapper

// const containerStyle = { width: "100%", height: "300px" };
// const center = { lat: 17.6772, lng: 75.3241 };

// // Helper to create square polygon around center
// const squareAround = ({ lat, lng }, size = 0.00005) => ([
//   { lat: lat - size, lng: lng - size },
//   { lat: lat - size, lng: lng + size },
//   { lat: lat + size, lng: lng + size },
//   { lat: lat + size, lng: lng - size }
// ]);

// export default function DashboardPage() {
//   const navigate = useNavigate();
//   const { farmerData, loading, error } = useContext(FarmerContext);
//   const [selectedSeason, setSelectedSeason] = useState("");
//   const [selectedField, setSelectedField] = useState("");
//   const [activeTab, setActiveTab] = useState("DashboardPage");
//   const [fieldId, setFieldId] = useState(null);
//   const [dateOptions, setDateOptions] = useState([]);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [vegetationData, setVegetationData] = useState([]);
//   const [kmlUrl, setKmlUrl] = useState(null);

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyArn5Qmf0v5ZKpGZa_rjdDXDYvaq7TREgg", // Replace with your actual key
//   });

//   // Set fieldId and kmlUrl when selection changes
//   useEffect(() => {
//     const farm = farmerData?.farms?.find(f => f.seasonType === selectedSeason);
//     const field = farm?.fields?.find(fld => fld.fieldCode === selectedField);
//     if (field) {
//       setFieldId(field.fieldId);
//       setKmlUrl(field.kmlFolderURL || null);
//     }
//   }, [selectedSeason, selectedField, farmerData]);

//   // Fetch dates
//   useEffect(() => {
//     if (!fieldId) return;
//     const fetchDates = async () => {
//       try {
//         const res = await axios.post("/dates-list", { FieldId: fieldId });
//         const sorted = res.data.dates?.map(d => d.ssmaDate).sort();
//         setDateOptions(sorted || []);
//         setSelectedDate("");
//       } catch (e) {
//         console.error("Failed to fetch date list", e);
//       }
//     };
//     fetchDates();
//   }, [fieldId]);

//   // Fetch vegetation data
//   useEffect(() => {
//     if (!fieldId || !selectedDate) return;
//     const fetchBands = async () => {
//       try {
//         const res = await axios.post("/plot-bands-mapping-list", {
//           FieldId: fieldId,
//           Date: selectedDate
//         });
//         setVegetationData(res.data.plotBandsMappingList || []);
//       } catch (e) {
//         console.error("Failed to fetch plot band mappings", e);
//       }
//     };
//     fetchBands();
//   }, [fieldId, selectedDate]);

//   const fullName = farmerData?.name && farmerData?.lastName
//     ? `${farmerData.name} ${farmerData.lastName}`
//     : "शेतकरी";

//   if (loading || !isLoaded)
//     return <div className="text-center py-10 text-gray-600">लोड करत आहे...</div>;
//   if (error || !farmerData)
//     return <div className="text-center py-10 text-red-600">डेटा मिळवता आला नाही</div>;

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Header */}
//       <header className="bg-green-500 text-white px-4 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
//         <button onClick={() => navigate("/SettingsPage")} className="p-2 hover:bg-green-600 rounded-md">☰</button>
//         <h1 className="text-sm sm:text-lg font-semibold flex-1 text-center truncate">{fullName}</h1>
//         <button onClick={() => navigate("/FarmerProfile")} className="text-2xl p-2 hover:bg-green-600 rounded-md">
//           <FaUser />
//         </button>
//       </header>

//       {/* Farm Selector */}
//       <div className="w-full flex justify-center mt-4 px-4">
//         <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-sm">
//           <FarmSelector
//             selectedSeason={selectedSeason}
//             setSelectedSeason={setSelectedSeason}
//             selectedField={selectedField}
//             setSelectedField={setSelectedField}
//           />

//           {/* Date Dropdown */}
//           <div className="mt-4">
//             <label className="block text-sm font-bold text-gray-700 mb-1">तारीख</label>
//             <select
//               className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
//               value={selectedDate}
//               onChange={(e) => setSelectedDate(e.target.value)}
//               disabled={dateOptions.length === 0}
//             >
//               <option value="">-- निवडा --</option>
//               {dateOptions.map(date => (
//                 <option key={date} value={date}>
//                   {new Date(date).toLocaleDateString("en-GB")}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Map Section */}
//       <div className="px-4 my-4 flex-1">
//         <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ height: "calc(100vh - 320px)", minHeight: "300px" }}>
//           <GoogleMap
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             center={center}
//             zoom={17}
//             options={{
//               zoomControl: true,
//               streetViewControl: false,
//               mapTypeControl: false,
//               fullscreenControl: false,
//             }}
//           >
//             {/* Show KML if no polygons */}
//             {kmlUrl && !vegetationData.length && (
//               <KmlLayer
//                 key={kmlUrl}
//                 url={kmlUrl}
//                 options={{ preserveViewport: false, suppressInfoWindows: true }}
//               />
//             )}

//             {/* Vegetation Polygons */}
//             {vegetationData.map((item, idx) => {
//               const fillColor = item.sclValue !== 4
//                 ? "#d3d3d3"
//                 : item.ndviValue < item.ndviThresholdValue || item.ndreValue < item.ndreThresholdValue
//                   ? "#ff0000"
//                   : "#008000";

//               return (
//                 <Polygon
//                   key={idx}
//                   paths={squareAround({ lat: item.latitude, lng: item.longitude })}
//                   options={{
//                     strokeColor: "#000",
//                     strokeOpacity: 1.0,
//                     strokeWeight: 1,
//                     fillColor,
//                     fillOpacity: 1.0,
//                   }}
//                 />
//               );
//             })}
//           </GoogleMap>
//         </div>
//       </div>

//       <FooterNav selected={activeTab} onSelect={setActiveTab} />
//     </div>
//   );
// }

// // DashboardPage.jsx
import React, { useContext, useState, useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, Polygon, KmlLayer } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import FooterNav from "../components/Footer";
import { FaUser } from "react-icons/fa";
import { FarmerContext } from "../contexts/FarmerContext";
import FarmSelector from "../contexts/SelectionContext";
import axios from "../contexts/axiosInstance"; // Axios wrapper

const containerStyle = { width: "100%", height: "300px" };
const center = { lat: 17.6772, lng: 75.3241 };

// Helper to create square polygon around center
const squareAround = ({ lat, lng }, size = 0.00005) => ([
  { lat: lat - size, lng: lng - size },
  { lat: lat - size, lng: lng + size },
  { lat: lat + size, lng: lng + size },
  { lat: lat + size, lng: lng - size }
]);

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
    googleMapsApiKey: "AIzaSyArn5Qmf0v5ZKpGZa_rjdDXDYvaq7TREgg",
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

  const clearLayer = (key) => {
    if (shapesRef.current[key]) {
      shapesRef.current[key].forEach(p => p.setMap(null));
      shapesRef.current[key] = [];
    }
  };

  const analyze = () => {
    clearLayer("veg");
    if (!kmlUrl || !vegetationData.length) return;

    const boundary = window.boundaryGeoJSON; // Make sure this is defined earlier
    const gridData = vegetationData.map(item => ({
      lat: item.latitude,
      lng: item.longitude,
      NDVI: item.ndviValue,
      NDRE: item.ndreValue,
      SCL: item.sclValue
    }));

    const buffer = window.turf.buffer(boundary, 20, { units: "meters" });
    const grid = window.turf.squareGrid(window.turf.bbox(buffer), 0.01, { units: "kilometers" });
    const NDVI_TH = 0.5, NDRE_TH = 0.4;

    grid.features.forEach((sq) => {
      const center = window.turf.center(sq).geometry.coordinates;
      const pt = gridData.find(p =>
        Math.abs(p.lat - center[1]) < 1e-4 &&
        Math.abs(p.lng - center[0]) < 1e-4
      );

      if (!pt || !window.turf.booleanIntersects(sq, boundary)) return;

      const coords = window.turf.intersect(sq, boundary)?.geometry.coordinates[0].map(([lng, lat]) => ({ lat, lng }));
      if (!coords) return;

      let fillColor = "#d3d3d3";
      if (pt.SCL === 4) {
        fillColor = (pt.NDVI < NDVI_TH || pt.NDRE < NDRE_TH) ? "#ff0000" : "#008000";
      }

      const polygon = new window.google.maps.Polygon({
        paths: coords,
        strokeColor: "#000",
        strokeOpacity: 1.0,
        strokeWeight: 1,
        fillColor,
        fillOpacity: 1.0,
        map: mapInstanceRef.current,
      });

      polygon.addListener("click", (e) => {
        new window.google.maps.InfoWindow({
          content: `NDVI: ${pt.NDVI?.toFixed(3)}<br>NDRE: ${pt.NDRE?.toFixed(3)}<br>SCL: ${pt.SCL}`,
          position: e.latLng,
        }).open(mapInstanceRef.current);
      });

      shapesRef.current.veg.push(polygon);
    });
  };
  

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
                <option key={date} value={date}>
                  {new Date(date).toLocaleDateString("en-GB")}
                </option>
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
            options={{
              zoomControl: true,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
          >
            {kmlUrl && !vegetationData.length && (
              <KmlLayer
                key={kmlUrl}
                url={kmlUrl}
                options={{ preserveViewport: false, suppressInfoWindows: true }}
              />
            )}

            {vegetationData.map((item, idx) => {
              const fillColor = item.sclValue !== 4
                ? "#d3d3d3"
                : item.ndviValue < item.ndviThresholdValue || item.ndreValue < item.ndreThresholdValue
                  ? "#ff0000"
                  : "#008000";

              return (
                <Polygon
                  key={idx}
                  paths={squareAround({ lat: item.latitude, lng: item.longitude })}
                  options={{
                    strokeColor: "#000",
                    strokeOpacity: 1.0,
                    strokeWeight: 1,
                    fillColor,
                    fillOpacity: 1.0,
                  }}
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
