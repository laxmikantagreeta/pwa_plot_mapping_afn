
// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const api = axios.create({
//     baseURL: "http://localhost:8000",
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   });

//   // Check authentication status on app load
//   useEffect(() => {
//     const token = localStorage.getItem('accessToken');
//     if (token) {
//       setIsAuthenticated(true);
//       // You can add token validation here if needed
//     }
//     setLoading(false);
//   }, []);

//   const sendOtp = async (phoneNumber) => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await api.post('/send-otp', { 
//         phone: `+91${phoneNumber}` 
//       });

//       return {
//         success: true,
//         session: response.data.session,
//         message: `ओटीपी +91${phoneNumber} वर पाठवला`
//       };
//     } catch (err) {
//       const errorMessage = err.response?.data?.detail || "OTP पाठवता आला नाही";
//       setError(errorMessage);
//       return {
//         success: false,
//         message: errorMessage
//       };
//     } finally {
//       setLoading(false);
//     }
//   };

//   const verifyOtp = async (phoneNumber, otp, session) => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await api.post('/verify-otp', {
//         phone: `+91${phoneNumber}`,
//         otp,
//         session
//       });

//       const token = response.data.accessToken;
//       localStorage.setItem('accessToken', token);

//       setIsAuthenticated(true);
//       setUser({ phone: phoneNumber });

//       return {
//         success: true,
//         message: "यशस्वी लॉगिन!",
//         token
//       };
//     } catch (err) {
//       const errorMessage = err.response?.data?.detail || "OTP पडताळणी अयशस्वी";
//       setError(errorMessage);
//       return {
//         success: false,
//         message: errorMessage
//       };
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('accessToken');
//     setIsAuthenticated(false);
//     setUser(null);
//     setError(null);
//   };

//   const clearError = () => {
//     setError(null);
//   };

//   const value = {
//     user,
//     isAuthenticated,
//     loading,
//     error,
//     sendOtp,
//     verifyOtp,
//     logout,
//     clearError
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };

// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(() => localStorage.getItem("accessToken") || "");
  const [farmerMobile, setFarmerMobile] = useState(() => localStorage.getItem("farmerMobile") || "");

  useEffect(() => {
    if (accessToken) localStorage.setItem("accessToken", accessToken);
    else localStorage.removeItem("accessToken");

    if (farmerMobile) localStorage.setItem("farmerMobile", farmerMobile);
    else localStorage.removeItem("farmerMobile");
  }, [accessToken, farmerMobile]);

  const logout = () => {
    localStorage.clear();
    setAccessToken("");
    setFarmerMobile("");
  };


  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, farmerMobile, setFarmerMobile, logout  }}>
      {children}
    </AuthContext.Provider>
  );
};
