
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom"; 

const Header = ({ title = "शेतकरी डॅशबोर्ड" }) => {
  const navigate = useNavigate();
  const location = useLocation(); 

  return (
    <header className="bg-green-500 text-white px-3 sm:px-4 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
      {/* Menu Icon */}
      <button
        onClick={() => navigate("/SettingsPage")}
        className="hover:cursor-pointer p-2 hover:bg-green-600 rounded-md transition-colors"
        aria-label="Open Settings"
      >
        <span className="text-2xl sm:text-3xl leading-none">☰</span>
      </button>

      {/* Title */}
      <h1 className="text-sm sm:text-lg font-semibold text-center flex-1 mx-2 truncate">{title}</h1>

      {/* User Profile */}
      {/* <button
        onClick={() => navigate("/FarmerProfile")}
        className="text-xl sm:text-2xl text-white hover:cursor-pointer p-2 hover:bg-green-600 rounded-md transition-colors"
        aria-label="Farmer Profile"
      >
        <FaUser />
      </button> */}
      <button
        onClick={() => {
          if (location.pathname !== "/FarmerProfile") {
            navigate("/FarmerProfile");
          }
        }}
        className="text-xl sm:text-2xl text-white hover:cursor-pointer p-2 hover:bg-green-600 rounded-md transition-colors"
        aria-label="Farmer Profile"
      >
        <FaUser />
      </button>
    </header>
  );
};

export default Header;

