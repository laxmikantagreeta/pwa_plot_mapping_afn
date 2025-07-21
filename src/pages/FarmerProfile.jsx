// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const FarmerProfile = () => {
//   const [farmer, setFarmer] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchFarmer = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/farmer"); // Replace with actual API
//         setFarmer(response.data);
//       } catch (error) {
//         console.error("Failed to fetch farmer data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFarmer();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center text-gray-500">
//         लोड करत आहे...
//       </div>
//     );
//   }

//   if (!farmer) {
//     return (
//       <div className="min-h-screen flex justify-center items-center text-red-500">
//         माहिती मिळाली नाही
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white text-gray-800">
//       {/* Header */}
//       <header className="bg-green-500 text-white px-4 py-3 flex justify-between items-center">
//         <button
//           onClick={() => navigate("/SettingsPage")}
//           aria-label="Open Settings"
//         >
//           <span className="text-[32px] leading-none">☰</span>
//         </button>

//         <h1 className="text-lg font-semibold">{farmer.name}</h1>

//         <button
//           onClick={() => navigate("/FarmerProfile")}
//           className="text-2xl"
//           aria-label="Farmer Profile"
//         >
//           👤
//         </button>
//       </header>

//       {/* Profile Image */}
//       <div className="flex justify-center mt-4">
//         <img
//           src={farmer.profileImage || "/default-profile.jpg"}
//           alt="Profile"
//           className="w-24 h-24 rounded-full border-4 border-green-500 object-cover"
//         />
//       </div>

//       {/* Farmer Code */}
//       <div className="bg-white px-4 py-3 border-b border-gray-200">
//         <div className="text-sm font-bold text-gray-700">फार्मर कोड</div>
//         <div className="text-base font-semibold">{farmer.code}</div>
//       </div>

//       {/* Profile Info */}
//       <div className="px-4 py-5 space-y-4">
//         <Info label="नाव" value={farmer.name} />
//         <Info label="मोबाईल नंबर" value={farmer.mobile} />
//         <Info label="शेती क्षेत्रे" value={farmer.fields?.join(", ")} />
//         <Info
//           label="पिके"
//           value={farmer.crops?.map((crop, idx) => <div key={idx}>{crop}</div>)}
//         />
//         <Info label="पत्ता" value={farmer.address} />
//       </div>
//     </div>
//   );
// };

// // Reusable Info block
// const Info = ({ label, value }) => (
//   <div>
//     <label className="block text-sm font-bold text-gray-700 mb-1">{label}</label>
//     <div className="border border-gray-300 rounded-md p-2 bg-gray-50">
//       {value}
//     </div>
//   </div>
// );

// export default FarmerProfile;



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import profileImage from "../assets/IMG-20250702-WA0022.jpg"
// import Header from "../components/Header";

// const FarmerProfile = () => {
//   const farmer = {
//     name: "Shubham Bagal",
//     code: "MH/SOL/PAN/GAD/001",
//     mobile: "70580 15152",
//     fields: ["A", "B", "C"],
//     crops: [
//       "A - Pomegranate (2.0)",
//       "B - Guava (3.0)",
//       "C - Grape (1.0)",
//     ],
//     address: "Gadegaon, Pandharpur, Solapur"
//   };

//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-white text-gray-800">
//       {/* Header */}
//       {/* <header className="bg-green-500 text-white px-4 py-3 flex justify-between items-center">
//         <button
//           onClick={() => navigate("/SettingsPage")}
//           aria-label="Open Settings"
//         >
//           <span className="text-[32px] leading-none">☰</span>
//         </button>

//         <h1 className="text-lg font-semibold">Shubham Bagal</h1>

//         <button
//           onClick={() => navigate("/FarmerProfile")}
//           className="text-2xl"
//           aria-label="Farmer Profile"
//         >
//           👤
//         </button>
//       </header> */}
//       <Header title="Shubham Bagal" />


//       {/* Profile Picture */}
//       {/* <div className="flex justify-center mb-4 mt-4">
//         <img
//           src={profileImage}
//           alt="Profile"
//           className="w-24 h-24 object-cover"
//         />
//       </div> */}

//       {/* Farmer Code */}
//       <div className="bg-white px-4 py-3 border-b border-gray-200">
//         <div className="text-sm font-bold text-gray-700">फार्मर कोड</div>
//         <div className="text-base font-semibold">{farmer.code}</div>
//       </div>

//       {/* Profile Info */}
//       <div className="px-4 py-5 space-y-4">
//         <div>
//           <label className="block text-sm font-bold text-gray-700 mb-1">नाव</label>
//           <div className="border border-gray-300 rounded-md p-2 bg-gray-50 font-semibold">{farmer.name}</div>
//         </div>

//         <div>
//           <label className="block text-sm font-bold text-gray-700 mb-1">मोबाईल नंबर</label>
//           <div className="border border-gray-300 rounded-md p-2 bg-gray-50 font-semibold">{farmer.mobile}</div>
//         </div>

//         <div>
//           <label className="block text-sm font-bold text-gray-700 mb-1">शेती क्षेत्रे</label>
//           <div className="border border-gray-300 rounded-md p-2 bg-gray-50 font-semibold">
//             {farmer.fields.join(", ")}
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-bold text-gray-700 mb-1">पिके</label>
//           <div className="border border-gray-300 rounded-md p-2 bg-gray-50 space-y-1 font-semibold">
//             {farmer.crops.map((crop, idx) => (
//               <div key={idx}>{crop}</div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-bold text-gray-700 mb-1">पत्ता</label>
//           <div className="border border-gray-300 rounded-md p-2 bg-gray-50 font-semibold">{farmer.address}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FarmerProfile;



// import React from "react";
// import { useNavigate } from "react-router-dom";
// // import profileImage from "../assets/IMG-20250702-WA0022.jpg"
// import Header from "../components/Header";

// const FarmerProfile = () => {
//   const farmer = {
//     name: "Shubham Bagal",
//     code: "MH/SOL/PAN/GAD/001",
//     mobile: "70580 15152",
//     fields: ["A", "B", "C"],
//     crops: [
//       "A - Pomegranate (2.0)",
//       "B - Guava (3.0)",
//       "C - Grape (1.0)",
//     ],
//     address: "Gadegaon, Pandharpur, Solapur"
//   };

//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 pb-6">
//       <Header title="Shubham Bagal" />

//       {/* Farmer Code */}
//       <div className="bg-white mx-4 px-4 py-4 rounded-lg shadow-sm border border-gray-200 mb-4 mt-4">
//         <div className="text-sm sm:text-base font-bold text-gray-700 mb-1">फार्मर कोड</div>
//         <div className="text-base sm:text-lg font-semibold text-green-600">{farmer.code}</div>
//       </div>

//       {/* Profile Info */}
//       <div className="px-4 space-y-4">
//         <div>
//           <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">नाव</label>
//           <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 font-semibold text-gray-800 shadow-sm">{farmer.name}</div>
//         </div>

//         <div>
//           <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">मोबाईल नंबर</label>
//           <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 font-semibold text-gray-800 shadow-sm">{farmer.mobile}</div>
//         </div>

//         <div>
//           <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">शेती क्षेत्रे</label>
//           <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 font-semibold text-gray-800 shadow-sm">
//             {farmer.fields.join(", ")}
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">पिके</label>
//           <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 space-y-2 font-semibold text-gray-800 shadow-sm">
//             {farmer.crops.map((crop, idx) => (
//               <div key={idx} className="py-1 border-b border-gray-100 last:border-b-0">{crop}</div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">पत्ता</label>
//           <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 font-semibold text-gray-800 shadow-sm leading-relaxed">{farmer.address}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FarmerProfile;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../components/Header";
// import axios from "axios";

// const FarmerProfile = () => {
//   const [farmer, setFarmer] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // const mobileNumber = localStorage.getItem("7977771545");
//   const mobileNumber = "7977771545";

//   useEffect(() => {
//     const fetchFarmerProfile = async () => {
//       try {
//         const res = await axios.post("http://localhost:8000/farmer-profile", {
//           mobileNumber,
//         });
//         const farmerData = res.data.farmer;
//         // const fields = farmerData.farms?.[0]?.fields || [];
//         const fields = farmerData.farms?.flatMap(farm => farm.fields) || [];
//         // const crops = fields.map(f =>
//         //   `${f.fieldCode} - ${f.crop} (${f.totalAreaInAcre})`
//         // );
//         const crops = fields.map(f =>
//           `${f.fieldCode} - ${f.crop} (${f.totalAreaInAcre})`
//         );

//         setFarmer({
//           name: `${farmerData.name} ${farmerData.lastName}`,
//           code: farmerData.farmerCode,
//           mobile: farmerData.mobile,
//           fields: fields.map(f => f.fieldCode),
//           crops,
//           address: `${farmerData.village}, ${farmerData.talukaName}, ${farmerData.districtName}, ${farmerData.pincode}`,
//         });
//       } catch (error) {
//         console.error("Error fetching farmer profile", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (mobileNumber) {
//       fetchFarmerProfile();
//     }
//   }, [mobileNumber]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center text-gray-500">
//         लोड करत आहे...
//       </div>
//     );
//   }

//   if (!farmer) {
//     return (
//       <div className="min-h-screen flex justify-center items-center text-red-500">
//         माहिती मिळाली नाही
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 pb-6">
//       <Header title={farmer.name} />

//       {/* Farmer Code */}
//       <div className="bg-white mx-4 px-4 py-4 rounded-lg shadow-sm border border-gray-200 mb-4 mt-4">
//         <div className="text-sm sm:text-base font-bold text-gray-700 mb-1">फार्मर कोड</div>
//         <div className="text-base sm:text-lg font-semibold text-green-600">{farmer.code}</div>
//       </div>

//       {/* Profile Info */}
//       <div className="px-4 space-y-4">
//         <Info label="नाव" value={farmer.name} />
//         <Info label="मोबाईल नंबर" value={farmer.mobile} />
//         <Info label="शेती क्षेत्रे" value={farmer.fields.join(", ")} />
//         <Info label="पिके" value={farmer.crops.map((c, idx) => <div key={idx}>{c}</div>)} />
//         <Info label="पत्ता" value={farmer.address} />
//       </div>
//     </div>
//   );
// };

// const Info = ({ label, value }) => (
//   <div>
//     <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">{label}</label>
//     <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 font-semibold text-gray-800 shadow-sm">
//       {value}
//     </div>
//   </div>
// );

// export default FarmerProfile;


import React, { useContext } from "react";
import { FarmerContext } from "../contexts/FarmerContext";
import Header from "../components/Header";

const FarmerProfile = () => {
  const { farmerData, loading, error } = useContext(FarmerContext);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-600">
        लोड करत आहे...
      </div>
    );
  }

  if (error || !farmerData) {
    return (
      <div className="text-center py-10 text-red-600">
        डेटा मिळवता आला नाही
      </div>
    );
  }

  const fields = farmerData.farms?.flatMap(farm => farm.fields) || [];
  const crops = fields.map(f =>
    `${f.fieldCode} - ${f.crop} (${f.totalAreaInAcre})`
  );
  const fieldCodes = fields.map(f => f.fieldCode);

  const profile = {
    name: `${farmerData.name} ${farmerData.lastName}`,
    code: farmerData.farmerCode,
    mobile: farmerData.mobile,
    address: `${farmerData.village}, ${farmerData.talukaName}, ${farmerData.districtName}, ${farmerData.pincode}`,
    fields: fieldCodes,
    crops,
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pb-6">
      <Header title={profile.name} />

      {/* Farmer Code */}
      <div className="bg-white mx-4 px-4 py-4 rounded-lg shadow-sm border border-gray-200 mb-4 mt-4">
        <div className="text-sm sm:text-base font-bold text-gray-700 mb-1">
          फार्मर कोड
        </div>
        <div className="text-base sm:text-lg font-semibold text-green-600">
          {profile.code}
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-4 space-y-4">
        <div>
          <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
            नाव
          </label>
          <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 font-semibold text-gray-800 shadow-sm">
            {profile.name}
          </div>
        </div>

        <div>
          <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
            मोबाईल नंबर
          </label>
          <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 font-semibold text-gray-800 shadow-sm">
            {profile.mobile}
          </div>
        </div>

        <div>
          <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
            शेती क्षेत्रे
          </label>
          <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 font-semibold text-gray-800 shadow-sm">
            {profile.fields.join(", ")}
          </div>
        </div>

        <div>
          <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
            पिके
          </label>
          <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 space-y-2 font-semibold text-gray-800 shadow-sm">
            {profile.crops.map((crop, idx) => (
              <div
                key={idx}
                className="py-1 border-b border-gray-100 last:border-b-0"
              >
                {crop}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
            पत्ता
          </label>
          <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 font-semibold text-gray-800 shadow-sm leading-relaxed">
            {profile.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;
