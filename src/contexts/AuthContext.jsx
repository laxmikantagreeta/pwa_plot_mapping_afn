
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
