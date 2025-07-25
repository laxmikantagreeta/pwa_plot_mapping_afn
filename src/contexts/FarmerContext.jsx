// // src/context/FarmerContext.js
// import React, { createContext, useState, useEffect, useContext } from "react";
// import axios from "./axiosInstance";
// import { AuthContext } from "./AuthContext";

// export const FarmerContext = createContext();

// export const FarmerProvider = ({ children }) => {
//   const { farmerMobile } = useContext(AuthContext);
//   const [farmerData, setFarmerData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchFarmerData = async () => {
//     if (!farmerMobile) return;

//     setLoading(true);
//     try {
//       const res = await axios.post("/farmer-profile", {
//         mobileNumber: farmerMobile,
//       });
//       setFarmerData(res.data.farmer);
//       setError("");
//     } catch (err) {
//       setError("Failed to fetch farmer data.");
//       console.error("❌ Farmer API error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const clearFarmerData = () => setFarmerData(null);

//   useEffect(() => {
//     fetchFarmerData();
//   }, [farmerMobile]);

//   return (
//     <FarmerContext.Provider value={{ farmerData, loading, error, refetchFarmer: fetchFarmerData , clearFarmerData}}>
//       {children}
//     </FarmerContext.Provider>
//   );
// };
// src/context/FarmerContext.js
import React, { createContext, useState, useEffect, useContext, useMemo } from "react";
import axios from "./axiosInstance";
import { AuthContext } from "./AuthContext";

export const FarmerContext = createContext();

export const FarmerProvider = ({ children }) => {
  const { farmerMobile, accessToken } = useContext(AuthContext);
  const [farmerData, setFarmerData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchFarmerData = async () => {
    if (!farmerMobile) return;

    setLoading(true);
    try {
      const res = await axios.post("/farmer-profile", {
        mobileNumber: farmerMobile,
      });
      setFarmerData(res.data.farmer);
      setError("");
    } catch (err) {
      setError("Failed to fetch farmer data.");
      console.error("❌ Farmer API error:", err);
    } finally {
      setLoading(false);
    }
  };

  const clearFarmerData = () => setFarmerData(null);

  // useEffect(() => {
  //   fetchFarmerData();
  // }, [farmerMobile]);
  useEffect(() => {
    if (farmerMobile && !farmerData) fetchFarmerData();
  }, [farmerMobile]);

    const contextValue = useMemo(
    () => ({
      farmerData,
      loading,
      error,
      refetchFarmer: fetchFarmerData,
      clearFarmerData,
    }),
    [farmerData, loading, error] // dependencies
  );


  return (
    <FarmerContext.Provider value={ contextValue }>
      {children}
    </FarmerContext.Provider>
  );
};
