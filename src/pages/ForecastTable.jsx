// import React from "react";
// import { useState } from "react";
// import { FaCloudSunRain } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import ImageIcon from "../assets/IMG-20250702-WA0011.jpg"
// import FooterNav from "../components/Footer";
// import { FaUser } from "react-icons/fa";

// const forecast = [
//     {
//         date: "22/05/2025",
//         weather: {
//             temp: "29°C",
//             humidity: "74%",
//             wind: "5 Km/Hr",
//             rain: "5mm",
//         },
//         pests: ["तेया (Bacterial blight)", "फळ पोसणारी अळी (Fruit borer)"],
//     },
//     {
//         date: "23/05/2025",
//         weather: {
//             temp: "30°C",
//             humidity: "68%",
//             wind: "5 Km/Hr",
//             rain: "5mm",
//         },
//         pests: ["तेया (Bacterial blight)", "फळ पोसणारी अळी (Fruit borer)"],
//     },
//     {
//         date: "24/05/2025",
//         weather: {
//             temp: "28°C",
//             humidity: "65%",
//             wind: "5 Km/Hr",
//             rain: "5mm",
//         },
//         pests: ["तेया (Bacterial blight)", "फळ पोसणारी अळी (Fruit borer)"],
//     },
// ];


// const ForecastTable = () => {
//     const navigate = useNavigate();
//     const [activeTab, setActiveTab] = useState("ForecastTable");


//     return (
//         <div className="bg-white min-h-screen pb-20">
//             {/* Header */}
//             {/* <header className="bg-green-500 text-white px-4 py-3 flex justify-between items-center">
//         <h1 className="text-lg font-semibold">Shubham Bagal</h1>
//         <span className="text-2xl">👤</span>
//       </header> */}
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


//             {/* Dropdowns */}
//             {/* <div className="px-4 py-2 space-y-2">
//                 <div>
//                     <label className="block text-sm font-medium">शेती क्षेत्र :</label>
//                     <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
//                         <option>A</option>
//                         <option>B</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium">पीक :</label>
//                     <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
//                         <option>A - Pomegranate (2.0)</option>
//                         <option>B - Guava (3.0)</option>
//                     </select>
//                 </div>
//             </div> */}
//             <div className="w-full flex justify-center mt-6">
//                 <div className="w-[300px] space-y-4">

//                     {/* शेती क्षेत्र */}
//                     <div className="flex items-center">
//                         <span className="text-sm font-bold text-black mr-1 whitespace-nowrap">शेती क्षेत्र</span>
//                         <span className="text-sm text-black mr-1">:</span>
//                         <div className="relative flex-1">
//                             <select
//                                 className="appearance-none w-full bg-transparent text-sm text-black pr-5 focus:outline-none border-b border-black pb-[2px]"
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
//                         <span className="text-sm font-bold text-black mr-1 whitespace-nowrap ml-6">   पीक   </span>
//                         <span className="text-sm text-black ml-s mr-1">:</span>
//                         <div className="relative flex-1">
//                             <select
//                                 className="appearance-none w-full bg-transparent text-sm text-black pr-5 focus:outline-none border-b border-black pb-[2px]"
//                             >
//                                 <option>A - Pomegranate (2.0)</option>
//                                 <option>B - Guava (3.0)</option>
//                             </select>
//                             <div className="absolute right-0 top-1/2 -translate-y-1/2 text-black text-sm pointer-events-none">
//                                 ▼
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* Main Date Header */}
//             <div className="text-center font-bold text-black border-y border-black py-2 my-4">
//                 22/05/2025
//             </div>

//             {/* Weather Icon & Summary */}
//             {/* <div className="flex flex-col items-center text-center text-sm space-y-0 mb-4">
//                 <FaCloudSunRain className="text-4xl text-green-500" />
//                 <span>तापमान - 29°C</span>
//                 <div>आर्द्रता  - 70%</div>
//                 <div>वाऱ्याचा वेग - 7 Km/Hr</div>
//                 <div>पर्जन्यमान - 5mm</div>
//             </div> */}
//             {/* Weather Icon & Summary */}
//             <div className="flex flex-col items-center text-sm mb-4 text-black">
//                 <FaCloudSunRain className="text-4xl text-green-500 mb-1" />
//                 <div className="flex flex-col space-y-[2px]">
//                     <div className="flex items-center">
//                         <span className="min-w-[90px] text-right">तापमान</span>
//                         <span className="ml-1 mr-1">-</span>
//                         <span>29°C</span>
//                     </div>
//                     <div className="flex items-center">
//                         <span className="min-w-[90px] text-right">आर्द्रता</span>
//                         <span className="ml-1 mr-1">-</span>
//                         <span>70%</span>
//                     </div>
//                     <div className="flex items-center">
//                         <span className="min-w-[90px] text-right">वाऱ्याचा वेग</span>
//                         <span className="ml-1 mr-1">-</span>
//                         <span>7 Km/Hr</span>
//                     </div>
//                     <div className="flex items-center">
//                         <span className="min-w-[90px] text-right">पर्जन्यमान</span>
//                         <span className="ml-1 mr-1">-</span>
//                         <span>5mm</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Forecast Table */}
//             {/* Forecast Table */}
//             {/* <div className="rounded-lg ml-4 mr-4 overflow-hidden border border-gray-400">
//                 <table className="w-full text-sm border-collapse">
//                     <thead>
//                         <tr className="bg-green-500 text-white">
//                             <th className="py-2 border border-gray-300">तारीख</th>
//                             <th className="py-2 border border-gray-300">हवामान अंदाज</th>
//                             <th className="py-2 border border-gray-300">कीड व रोगांचे अंदाज</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {forecast.map((item, idx) => (
//                             <tr key={idx} className="text-center border-t">
//                                 <td className="border border-gray-300 py-2">{item.date}</td>
//                                 <td className="border border-gray-300 py-2">
//                                     तापमान - {item.weather.temp} <br />
//                                     आर्द्रता - {item.weather.humidity} <br />
//                                     वाऱ्याचा वेग - {item.weather.wind} <br />
//                                     पर्जन्यमान - {item.weather.rain}
//                                 </td>
//                                 <td className="border border-gray-300 py-2 space-y-1 font-medium">
//                                     {item.pests.map((pest, pidx) => (
//                                         <div key={pidx} className="flex justify-center items-center gap-2">
//                                             <span>{pest}</span>
//                                         </div>
//                                     ))}
//                                     <div className="text-right">
//                                         <img src={ImageIcon} alt="pest" className="w-7 h-7 mr-2 inline-block hover:cursor-pointer" />
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div> */}

//             <div className="rounded-lg ml-4 mr-4 border border-gray-400 overflow-x-auto">
//                 <table className="w-full text-xs md:text-sm border-collapse min-w-[400px]">
//                     <thead>
//                         <tr className="bg-green-500 text-white">
//                             <th className="py-2 border border-gray-300 min-w-[60px]">तारीख</th>
//                             <th className="py-2 border border-gray-300 min-w-[140px]">हवामान अंदाज</th>
//                             <th className="py-2 border border-gray-300 min-w-[140px]">कीड व रोगांचे अंदाज</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {forecast.map((item, idx) => (
//                             <tr key={idx} className="text-center border-t">
//                                 <td className="border border-gray-300 py-2">{item.date}</td>
//                                 <td className="border border-gray-300 py-2 leading-tight">
//                                     तापमान - {item.weather.temp} <br />
//                                     आर्द्रता - {item.weather.humidity} <br />
//                                     वाऱ्याचा वेग - {item.weather.wind} <br />
//                                     पर्जन्यमान - {item.weather.rain}
//                                 </td>
//                                 <td className="border border-gray-300 py-2 space-y-1 font-medium">
//                                     {item.pests.map((pest, pidx) => (
//                                         <div key={pidx} className="flex justify-center items-center gap-1">
//                                             <span>{pest}</span>
//                                         </div>
//                                     ))}
//                                     <div className="text-right">
//                                         <img
//                                             src={ImageIcon}
//                                             alt="pest"
//                                             className="w-6 h-6 mr-2 inline-block hover:cursor-pointer"
//                                         />
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <FooterNav selected={activeTab} onSelect={setActiveTab} />

//         </div>
//     );
// };

// export default ForecastTable;


// 16/07/25
// import React, { useContext }  from "react";
// import { useState } from "react";
// import { FaCloudSunRain } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import ImageIcon from "../assets/IMG-20250702-WA0011.jpg"
// import FooterNav from "../components/Footer";
// import { FaUser } from "react-icons/fa";
// import { FarmerContext } from "../contexts/FarmerContext";

// const forecast = [
//     {
//         date: "22/05/2025",
//         weather: {
//             temp: "29°C",
//             humidity: "74%",
//             wind: "5 Km/Hr",
//             rain: "5mm",
//         },
//         pests: ["तेया (Bacterial blight)", "फळ पोसणारी अळी (Fruit borer)"],
//     },
//     {
//         date: "23/05/2025",
//         weather: {
//             temp: "30°C",
//             humidity: "68%",
//             wind: "5 Km/Hr",
//             rain: "5mm",
//         },
//         pests: ["तेया (Bacterial blight)", "फळ पोसणारी अळी (Fruit borer)"],
//     },
//     {
//         date: "24/05/2025",
//         weather: {
//             temp: "28°C",
//             humidity: "65%",
//             wind: "5 Km/Hr",
//             rain: "5mm",
//         },
//         pests: ["तेया (Bacterial blight)", "फळ पोसणारी अळी (Fruit borer)"],
//     },
// ];


// const ForecastTable = () => {
//     const navigate = useNavigate();
//     const [activeTab, setActiveTab] = useState("ForecastTable");

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


//     return (
//         <div className="bg-gray-50 min-h-screen pb-20">
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

//             {/* Main Date Header */}
//             <div className="text-center font-bold text-gray-800 border-y border-gray-300 py-3 my-4 sm:my-6 bg-white mx-4 rounded-lg shadow-sm">
//                 22/05/2025
//             </div>

//             {/* Weather Icon & Summary */}
//             <div className="flex flex-col items-center text-sm sm:text-base mb-4 sm:mb-6 text-gray-800 bg-white mx-4 p-4 sm:p-6 rounded-lg shadow-sm">
//                 <FaCloudSunRain className="text-4xl sm:text-5xl text-green-500 mb-3" />
//                 <div className="flex flex-col space-y-2 w-full max-w-xs">
//                     <div className="flex items-center ml-10">
//                         <span className="min-w-[100px] sm:min-w-[120px] text-right font-medium">तापमान</span>
//                         <span className="mx-2">-</span>
//                         <span className="font-semibold text-green-600">29°C</span>
//                     </div>
//                     <div className="flex items-center ml-10">
//                         <span className="min-w-[100px] sm:min-w-[120px] text-right font-medium">आर्द्रता</span>
//                         <span className="mx-2">-</span>
//                         <span className="font-semibold text-green-600">70%</span>
//                     </div>
//                     <div className="flex items-center ml-10">
//                         <span className="min-w-[100px] sm:min-w-[120px] text-right font-medium">वाऱ्याचा वेग</span>
//                         <span className="mx-2">-</span>
//                         <span className="font-semibold text-green-600">7 Km/Hr</span>
//                     </div>
//                     <div className="flex items-center ml-10">
//                         <span className="min-w-[100px] sm:min-w-[120px] text-right font-medium">पर्जन्यमान</span>
//                         <span className="mx-2">-</span>
//                         <span className="font-semibold text-green-500">5mm</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Forecast Table */}
//             <div className="mx-4 mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
//                 <div className="overflow-x-auto">
//                     <table className="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
//                         <thead>
//                             <tr className="bg-green-500 text-white">
//                                 <th className="py-3 px-2 border border-gray-200 min-w-[80px] font-semibold">तारीख</th>
//                                 <th className="py-3 px-2 border border-gray-200 min-w-[160px] font-semibold">हवामान अंदाज</th>
//                                 <th className="py-3 px-2 border border-gray-200 min-w-[160px] font-semibold">कीड व रोगांचे अंदाज</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {forecast.map((item, idx) => (
//                                 <tr key={idx} className="text-center border-t hover:bg-gray-50 transition-colors">
//                                     <td className="border border-gray-200 py-3 px-2 font-medium text-gray-800">{item.date}</td>
//                                     <td className="border border-gray-200 py-3 px-2 leading-relaxed text-left">
//                                         <div className="space-y-1">
//                                             <div className="text-sm font-medium text-gray-800">तापमान - <span className="font-semibold text-green-600">{item.weather.temp}</span></div>
//                                             <div className="text-sm font-medium text-gray-800">आर्द्रता - <span className="font-semibold text-green-600">{item.weather.humidity}</span></div>
//                                             <div className="text-sm font-medium text-gray-800">वाऱ्याचा वेग - <span className="font-semibold text-green-600">{item.weather.wind}</span></div>
//                                             <div className="text-sm font-medium text-gray-800">पर्जन्यमान - <span className="font-semibold text-green-600">{item.weather.rain}</span></div>
//                                         </div>
//                                     </td>
//                                     <td className="border border-gray-200 py-3 px-2 text-left">
//                                         <div className="space-y-2">
//                                             {item.pests.map((pest, pidx) => (
//                                                 <div key={pidx} className="text-sm font-medium text-gray-800">
//                                                     {pest}
//                                                 </div>
//                                             ))}
//                                             <div className="flex justify-end mt-2">
//                                                 <img
//                                                     src={ImageIcon}
//                                                     alt="pest"
//                                                     className="w-8 h-8 rounded-md hover:cursor-pointer hover:scale-110 transition-transform shadow-sm"
//                                                 />
//                                             </div>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             <FooterNav selected={activeTab} onSelect={setActiveTab} />
//         </div>
//     );
// };

// export default ForecastTable;


// import React, { useContext, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import FooterNav from "../components/Footer";
// import { FaUser, FaCloudSunRain } from "react-icons/fa";
// import ImageIcon from "../assets/IMG-20250702-WA0011.jpg";
// import { FarmerContext } from "../contexts/FarmerContext";

// const forecast = [
//   {
//     date: "22/05/2025",
//     weather: { temp: "29°C", humidity: "74%", wind: "5 Km/Hr", rain: "5mm" },
//     pests: ["तेया (Bacterial blight)", "फळ पोसणारी अळी (Fruit borer)"],
//   },
//   {
//     date: "23/05/2025",
//     weather: { temp: "30°C", humidity: "68%", wind: "5 Km/Hr", rain: "5mm" },
//     pests: ["तेया (Bacterial blight)", "फळ पोसणारी अळी (Fruit borer)"],
//   },
//   {
//     date: "24/05/2025",
//     weather: { temp: "28°C", humidity: "65%", wind: "5 Km/Hr", rain: "5mm" },
//     pests: ["तेया (Bacterial blight)", "फळ पोसणारी अळी (Fruit borer)"],
//   },
// ];

// const ForecastTable = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("ForecastTable");

//   const { farmerData, loading, error } = useContext(FarmerContext);
//   const [selectedSeason, setSelectedSeason] = useState("");
//   const [selectedField, setSelectedField] = useState("");

//   const farms = farmerData?.farms || [];

//   const seasons = useMemo(() => {
//     const unique = new Set();
//     farms.forEach((f) => {
//       if (f.seasonType) unique.add(f.seasonType);
//     });
//     return Array.from(unique);
//   }, [farms]);

//   const fields = useMemo(() => {
//     return farms
//       .filter((f) => f.seasonType === selectedSeason)
//       .flatMap((f) => f.fields || []);
//   }, [farms, selectedSeason]);

//   const selectedCrop = useMemo(() => {
//     const fieldObj = fields.find((f) => f.fieldCode === selectedField);
//     return fieldObj ? `${fieldObj.crop} (${fieldObj.totalAreaInAcre} एकर)` : "";
//   }, [fields, selectedField]);

//   const fullName =
//     farmerData?.name && farmerData?.lastName
//       ? `${farmerData.name} ${farmerData.lastName}`
//       : "शेतकरी";

//   if (loading) return <div className="text-center py-10 text-gray-600">लोड करत आहे...</div>;
//   if (error || !farmerData) return <div className="text-center py-10 text-red-600">डेटा मिळवता आला नाही</div>;

//   return (
//     <div className="bg-gray-50 min-h-screen pb-20">
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
//                   setSelectedField("");
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

//       {/* Main Date Header */}
//       <div className="text-center font-bold text-gray-800 border-y border-gray-300 py-3 my-4 sm:my-6 bg-white mx-4 rounded-lg shadow-sm">
//         22/05/2025
//       </div>

//       {/* Weather Summary */}
//       <div className="flex flex-col items-center text-sm sm:text-base mb-4 sm:mb-6 text-gray-800 bg-white mx-4 p-4 sm:p-6 rounded-lg shadow-sm">
//         <FaCloudSunRain className="text-4xl sm:text-5xl text-green-500 mb-3" />
//         <div className="flex flex-col space-y-2 w-full max-w-xs">
//           <div className="flex items-center ml-10">
//             <span className="min-w-[100px] text-right font-medium">तापमान</span><span className="mx-2">-</span>
//             <span className="font-semibold text-green-600">29°C</span>
//           </div>
//           <div className="flex items-center ml-10">
//             <span className="min-w-[100px] text-right font-medium">आर्द्रता</span><span className="mx-2">-</span>
//             <span className="font-semibold text-green-600">70%</span>
//           </div>
//           <div className="flex items-center ml-10">
//             <span className="min-w-[100px] text-right font-medium">वाऱ्याचा वेग</span><span className="mx-2">-</span>
//             <span className="font-semibold text-green-600">7 Km/Hr</span>
//           </div>
//           <div className="flex items-center ml-10">
//             <span className="min-w-[100px] text-right font-medium">पर्जन्यमान</span><span className="mx-2">-</span>
//             <span className="font-semibold text-green-500">5mm</span>
//           </div>
//         </div>
//       </div>

//       {/* Forecast Table */}
//       <div className="mx-4 mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
//             <thead>
//               <tr className="bg-green-500 text-white">
//                 <th className="py-3 px-2 border border-gray-200 min-w-[80px] font-semibold">तारीख</th>
//                 <th className="py-3 px-2 border border-gray-200 min-w-[160px] font-semibold">हवामान अंदाज</th>
//                 <th className="py-3 px-2 border border-gray-200 min-w-[160px] font-semibold">कीड व रोगांचे अंदाज</th>
//               </tr>
//             </thead>
//             <tbody>
//               {forecast.map((item, idx) => (
//                 <tr key={idx} className="text-center border-t hover:bg-gray-50 transition-colors">
//                   <td className="border border-gray-200 py-3 px-2 font-medium text-gray-800">{item.date}</td>
//                   <td className="border border-gray-200 py-3 px-2 leading-relaxed text-left">
//                     <div className="space-y-1">
//                       <div className="text-sm font-medium text-gray-800">तापमान - <span className="font-semibold text-green-600">{item.weather.temp}</span></div>
//                       <div className="text-sm font-medium text-gray-800">आर्द्रता - <span className="font-semibold text-green-600">{item.weather.humidity}</span></div>
//                       <div className="text-sm font-medium text-gray-800">वाऱ्याचा वेग - <span className="font-semibold text-green-600">{item.weather.wind}</span></div>
//                       <div className="text-sm font-medium text-gray-800">पर्जन्यमान - <span className="font-semibold text-green-600">{item.weather.rain}</span></div>
//                     </div>
//                   </td>
//                   <td className="border border-gray-200 py-3 px-2 text-left">
//                     <div className="space-y-2">
//                       {item.pests.map((pest, pidx) => (
//                         <div key={pidx} className="text-sm font-medium text-gray-800">
//                           {pest}
//                         </div>
//                       ))}
//                       <div className="flex justify-end mt-2">
//                         <img
//                           src={ImageIcon}
//                           alt="pest"
//                           className="w-8 h-8 rounded-md hover:cursor-pointer hover:scale-110 transition-transform shadow-sm"
//                         />
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <FooterNav selected={activeTab} onSelect={setActiveTab} />
//     </div>
//   );
// };

// export default ForecastTable;


// // working with FarmSelector
// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaCloudSunRain, FaUser } from "react-icons/fa";
// import ImageIcon from "../assets/IMG-20250702-WA0011.jpg";
// import FooterNav from "../components/Footer";
// import { FarmerContext } from "../contexts/FarmerContext";
// import FarmSelector from "../contexts/SelectionContext";

// const forecast = [
//   {
//     date: "22/05/2025",
//     weather: {
//       temp: "29°C",
//       humidity: "74%",
//       rain: "yes",
//     },
//     pests: ["तेया (Bacterial blight)", "फळ पोसणारी अळी (Fruit borer)"],
//   },
//   {
//     date: "23/05/2025",
//     weather: {
//       temp: "30°C",
//       humidity: "68%",
//       rain: "yes",
//     },
//     pests: ["तेया (Bacterial blight)", "फळ पोसणारी अळी (Fruit borer)"],
//   },
//   {
//     date: "24/05/2025",
//     weather: {
//       temp: "28°C",
//       humidity: "65%",
//       rain: "yes",
//     },
//     pests: ["तेया (Bacterial blight)", "फळ पोसणारी अळी (Fruit borer)"],
//   },
// ];

// const ForecastTable = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("ForecastTable");

//   const { farmerData, loading, error } = useContext(FarmerContext);

//   const [selectedSeason, setSelectedSeason] = useState("");
//   const [selectedField, setSelectedField] = useState("");

//   if (loading) {
//     return (
//       <div className="text-center py-10 text-gray-600">लोड करत आहे...</div>
//     );
//   }

//   if (error || !farmerData) {
//     return (
//       <div className="text-center py-10 text-red-600">डेटा मिळवता आला नाही</div>
//     );
//   }

//   const fullName =
//     farmerData?.name && farmerData?.lastName
//       ? `${farmerData.name} ${farmerData.lastName}`
//       : "शेतकरी";

//   return (
//     <div className="bg-gray-50 min-h-screen pb-20">
//       {/* Header */}
//       <header className="bg-green-500 text-white px-3 sm:px-4 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
//         <button
//           onClick={() => navigate("/SettingsPage")}
//           className="hover:cursor-pointer p-2 hover:bg-green-600 rounded-md transition-colors"
//         >
//           <span className="text-2xl sm:text-3xl leading-none">☰</span>
//         </button>

//         <h1 className="text-sm sm:text-lg font-semibold text-center flex-1 mx-2 truncate">
//           {fullName}
//         </h1>

//         <button
//           onClick={() => navigate("/FarmerProfile")}
//           className="text-xl sm:text-2xl text-white hover:cursor-pointer p-2 hover:bg-green-600 rounded-md transition-colors"
//         >
//           <FaUser />
//         </button>
//       </header>

//       {/* Dropdown Section */}
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

//       {/* Main Date Header */}
//       <div className="text-center font-bold text-gray-800 border-y border-gray-300 py-3 my-4 sm:my-6 bg-white mx-4 rounded-lg shadow-sm">
//         22/05/2025
//       </div>

//       {/* Weather Summary */}
//       <div className="flex flex-col items-center text-sm sm:text-base mb-4 sm:mb-6 text-gray-800 bg-white mx-4 p-4 sm:p-6 rounded-lg shadow-sm">
//         <FaCloudSunRain className="text-4xl sm:text-5xl text-green-500 mb-3" />
//         <div className="flex flex-col space-y-2 w-full max-w-xs">
//           <div className="flex items-center ml-10">
//             <span className="min-w-[100px] sm:min-w-[120px] text-right font-medium">तापमान</span>
//             <span className="mx-2">-</span>
//             <span className="font-semibold text-green-600">29°C</span>
//           </div>
//           <div className="flex items-center ml-10">
//             <span className="min-w-[100px] sm:min-w-[120px] text-right font-medium">आर्द्रता</span>
//             <span className="mx-2">-</span>
//             <span className="font-semibold text-green-600">70%</span>
//           </div>
//           <div className="flex items-center ml-10">
//             <span className="min-w-[100px] sm:min-w-[120px] text-right font-medium">पर्जन्यमान</span>
//             <span className="mx-2">-</span>
//             <span className="font-semibold text-green-500">5mm</span>
//           </div>
//         </div>
//       </div>

//       {/* Forecast Table */}
//       <div className="mx-4 mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
//             <thead>
//               <tr className="bg-green-500 text-white">
//                 <th className="py-3 px-2 border border-gray-200 font-semibold">तारीख</th>
//                 <th className="py-3 px-2 border border-gray-200 font-semibold">हवामान अंदाज</th>
//                 <th className="py-3 px-2 border border-gray-200 font-semibold">कीड व रोगांचे अंदाज</th>
//               </tr>
//             </thead>
//             <tbody>
//               {forecast.map((item, idx) => (
//                 <tr
//                   key={idx}
//                   className="text-center border-t hover:bg-gray-50 transition-colors"
//                 >
//                   <td className="border border-gray-200 py-3 px-2 font-medium text-gray-800">
//                     {item.date}
//                   </td>
//                   <td className="border border-gray-200 py-3 px-2 leading-relaxed text-left">
//                     <div className="space-y-1">
//                       <div>तापमान - <span className="font-semibold text-green-600">{item.weather.temp}</span></div>
//                       <div>आर्द्रता - <span className="font-semibold text-green-600">{item.weather.humidity}</span></div>
//                       <div>पर्जन्यमान - <span className="font-semibold text-green-600">{item.weather.rain}</span></div>
//                     </div>
//                   </td>
//                   <td className="border border-gray-200 py-3 px-2 text-left">
//                     <div className="space-y-2">
//                       {item.pests.map((pest, pidx) => (
//                         <div key={pidx} className="text-sm font-medium text-gray-800">
//                           {pest}
//                         </div>
//                       ))}
//                       <div className="flex justify-end mt-2">
//                         <img
//                           src={ImageIcon}
//                           alt="pest"
//                           className="w-8 h-8 rounded-md hover:cursor-pointer hover:scale-110 transition-transform shadow-sm"
//                         />
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <FooterNav selected={activeTab} onSelect={setActiveTab} />
//     </div>
//   );
// };

// export default ForecastTable;



import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCloudSunRain, FaUser } from "react-icons/fa";
import ImageIcon from "../assets/IMG-20250702-WA0011.jpg";
import FooterNav from "../components/Footer";
import { FarmerContext } from "../contexts/FarmerContext";
import FarmSelector from "../contexts/SelectionContext";
import axiosInstance from "../contexts/axiosInstance";

const ForecastTable = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ForecastTable");

  const { farmerData, loading, error } = useContext(FarmerContext);
  const [selectedSeason, setSelectedSeason] = useState(localStorage.getItem("selectedSeason") || "");
  const [selectedField, setSelectedField] = useState(localStorage.getItem("selectedField") || "");

  const [forecastData, setForecastData] = useState([]);
  const [loadingForecast, setLoadingForecast] = useState(false);
  const [forecastError, setForecastError] = useState("");

  const BASE_DATE = "2025-07-15";

  const fullName =
    farmerData?.name && farmerData?.lastName
      ? `${farmerData.name} ${farmerData.lastName}`
      : "शेतकरी";

  // Persist dropdowns
  useEffect(() => {
    localStorage.setItem("selectedSeason", selectedSeason);
    localStorage.setItem("selectedField", selectedField);
  }, [selectedSeason, selectedField]);

  // Fetch forecast when selectedField changes
  useEffect(() => {
    const fetchForecast = async () => {
      const allFarms = farmerData?.farms || [];
      const fieldObj = allFarms
        .flatMap((f) => f.fields || [])
        .find((f) => f.fieldCode === selectedField);

      if (!fieldObj?.fieldId) {
        setForecastData([]);
        return;
      }

      setLoadingForecast(true);
      setForecastError("");

      try {
        const res = await axiosInstance.post("/pest-disease-forecast", {
          FieldId: fieldObj.fieldId,
          Date: BASE_DATE,
        });

        const grouped = res.data.pestDiseaseForecast.reduce((acc, item) => {
          const date = item.date.split("T")[0];
          if (!acc[date]) acc[date] = [];
          acc[date].push(item);
          return acc;
        }, {});

        setForecastData(
          Object.entries(grouped).map(([date, items]) => ({
            date,
            weather: {
              temp: items[0].temprature + "°C",
              humidity: items[0].humidity + "%",
              rain: items[0].rainfall,
            },
            pests: items.map((i) => i.disease),
          }))
        );
      } catch (err) {
        console.error("Error fetching forecast", err);
        setForecastError("डेटा मिळवताना त्रुटी आली.");
      } finally {
        setLoadingForecast(false);
      }
    };

    if (selectedField) fetchForecast();
  }, [selectedField, farmerData]);

  if (loading) return <div className="text-center py-10 text-gray-600">लोड करत आहे...</div>;
  if (error || !farmerData) return <div className="text-center py-10 text-red-600">डेटा मिळवता आला नाही</div>;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <header className="bg-green-500 text-white px-3 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <button onClick={() => navigate("/SettingsPage")} className="p-2 hover:bg-green-600 rounded-md">
          <span className="text-2xl">☰</span>
        </button>
        <h1 className="text-sm font-semibold text-center flex-1 mx-2 truncate">{fullName}</h1>
        <button onClick={() => navigate("/FarmerProfile")} className="text-xl p-2 hover:bg-green-600 rounded-md">
          <FaUser />
        </button>
      </header>

      {/* Dropdown */}
      <div className="w-full flex justify-center mt-4 px-4">
        <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-sm">
          <FarmSelector
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
        </div>
      </div>

      {/* Date Header */}
      <div className="text-center font-bold text-gray-800 border-y border-gray-300 py-3 my-4 bg-white mx-4 rounded-lg shadow-sm">
        {BASE_DATE.split("-").reverse().join("/")}
      </div>

      {/* Weather Summary */}
      {loadingForecast ? (
        <div className="text-center text-gray-600 my-6">हवामान डेटा लोड करत आहे...</div>
      ) : forecastError ? (
        <div className="text-center text-red-600 my-6">{forecastError}</div>
      ) : forecastData.length > 0 ? (
        <div className="flex flex-col items-center mb-6 text-gray-800 bg-white mx-4 p-4 rounded-lg shadow-sm">
          <FaCloudSunRain className="text-4xl text-green-500 mb-3" />
          <div className="space-y-2 w-full max-w-xs">
            <div className="flex">
              <span className="min-w-[120px] text-right font-medium">तापमान</span>
              <span className="mx-2">-</span>
              <span className="font-semibold text-green-600">{forecastData[0].weather.temp}</span>
            </div>
            <div className="flex">
              <span className="min-w-[120px] text-right font-medium">आर्द्रता</span>
              <span className="mx-2">-</span>
              <span className="font-semibold text-green-600">{forecastData[0].weather.humidity}</span>
            </div>
            <div className="flex">
              <span className="min-w-[120px] text-right font-medium">पर्जन्यमान</span>
              <span className="mx-2">-</span>
              <span className="font-semibold text-green-600">{forecastData[0].weather.rain}</span>
            </div>
          </div>
        </div>
      ) : null}

      {/* Forecast Table */}
      <div className="mx-4 mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="py-3 px-2 border">तारीख</th>
                <th className="py-3 px-2 border">हवामान अंदाज</th>
                <th className="py-3 px-2 border">कीड व रोगांचे अंदाज</th>
              </tr>
            </thead>
            <tbody>
              {forecastData.map((item, idx) => (
                <tr key={idx} className="text-center border-t hover:bg-gray-50">
                  <td className="border px-2 py-3 font-medium text-gray-800">
                    {item.date.split("-").reverse().join("/")}
                  </td>
                  <td className="border px-2 py-3 text-left">
                    <div className="space-y-1">
                      <div>तापमान - <span className="font-semibold text-green-600">{item.weather.temp}</span></div>
                      <div>आर्द्रता - <span className="font-semibold text-green-600">{item.weather.humidity}</span></div>
                      <div>पर्जन्यमान - <span className="font-semibold text-green-600">{item.weather.rain}</span></div>
                    </div>
                  </td>
                  <td className="border px-2 py-3 text-left">
                    <div className="space-y-2">
                      {item.pests.map((pest, pidx) => (
                        <div key={pidx} className="text-sm font-medium text-gray-800">
                          {pest}
                        </div>
                      ))}
                      {/* <div className="flex justify-end mt-2">
                        <img
                          src={ImageIcon}
                          alt="pest"
                          className="w-8 h-8 rounded-md hover:scale-110 transition-transform"
                        />
                      </div> */}
                    </div>
                  </td>
                </tr>
              ))}
              {forecastData.length === 0 && (
                <tr><td colSpan="3" className="text-center text-gray-500 py-4">डेटा उपलब्ध नाही</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <FooterNav selected={activeTab} onSelect={setActiveTab} />
    </div>
  );
};

export default ForecastTable;
