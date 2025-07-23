
import React, { useRef, useEffect, useContext } from "react";
import {
  FaInfoCircle,
  FaUserShield,
  FaFileContract,
  FaCog,
  FaPowerOff,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FarmerContext } from "../contexts/FarmerContext";
import { AuthContext } from "../contexts/AuthContext";

const SettingsPage = () => {
  const navigate = useNavigate();
  const drawerRef = useRef();
  const { farmerData } = useContext(FarmerContext); // ✅ Access farmerData
  const { logout } = useContext(AuthContext);
  const { clearFarmerData } = useContext(FarmerContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        navigate(-1); // Go back
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navigate]);

  const handleLogout = () => {
    logout();                // clear token + mobile + localStorage
    clearFarmerData();       // clear cached farmer profile
    navigate("/", { replace: true }); // prevent back nav
  };

  const handleClick = (label) => {
    alert(`Clicked on: ${label}`);
    // or route logic here (navigate("/privacy-policy")) etc.
  };


  const fullName = farmerData?.name && farmerData?.lastName
    ? `${farmerData.name} ${farmerData.lastName}`
    : "शेतकरी"; // fallback if name not loaded


  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex">
      <div
        ref={drawerRef}
        className="w-72 sm:w-80 min-h-screen bg-white border-r border-gray-300 shadow-xl relative"
      >
        {/* Header */}
        <div className="bg-green-500 text-white text-center p-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-white flex items-center justify-center mb-3 shadow-md">
            <span className="text-4xl sm:text-5xl text-gray-500"><FaUser /></span>
          </div>
          <div className="font-semibold text-lg sm:text-xl">{fullName}</div>
        </div>

        {/* Menu Items */}
        <div className="px-4 py-6 space-y-1">
          {[
            { icon: FaInfoCircle, label: "ॲपबद्दल माहिती" },
            { icon: FaUserShield, label: "गोपनीयता धोरण" },
            { icon: FaFileContract, label: "सेवेच्या अटी" },
            { icon: FaCog, label: "सेटिंग्ज" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => handleClick(label)}
              className="w-full flex items-center space-x-4 text-left text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-100 px-3 py-4 cursor-pointer rounded-lg transition-colors border-b border-gray-100 last:border-b-0"
            >
              <Icon className="text-green-500 text-lg sm:text-xl flex-shrink-0" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="absolute bottom-16 left-4 right-4 flex items-center justify-center gap-3 text-base sm:text-lg font-medium text-gray-800 hover:text-red-600 hover:bg-red-50 cursor-pointer py-3 px-4 rounded-lg transition-colors border border-gray-200"
        >
          <FaPowerOff className="text-red-500 text-lg sm:text-xl" />
          लॉगआउट
        </button>

        {/* Version */}
        <div className="absolute bottom-4 left-4 text-xs sm:text-sm text-gray-400">
          V 1.0.0
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
