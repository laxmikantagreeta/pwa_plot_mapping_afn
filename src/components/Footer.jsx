

import React from "react";
import { MdSatelliteAlt } from "react-icons/md";
import { WiDayCloudy } from "react-icons/wi";
import { GiFlyingBeetle } from "react-icons/gi";
import { MdOutlinePestControl } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const FooterNav = ({ selected, onSelect }) => {
  const navigate = useNavigate();
  const handleSelect = (tabName) => {
    onSelect(tabName);
    if (tabName === "DashboardPage") {
      navigate("/DashboardPage");
    } else if (tabName === "ForecastTable") {
      navigate("/ForecastTable");
    }
  };
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex text-xs sm:text-sm z-40 safe-area-inset-bottom">
      {/* Satellite Button */}
      <button
        onClick={() => {
          handleSelect("DashboardPage");
        }}
        className={`w-1/2 flex flex-col items-center justify-center py-2 sm:py-3 hover:cursor-pointer transition-colors ${selected === "DashboardPage" ? "text-green-600 font-bold bg-green-50" : "text-gray-500 hover:text-green-600 hover:bg-gray-50"
          }`}
      >
        <MdSatelliteAlt className="text-lg sm:text-xl mb-1" />
        <span className="text-center leading-tight">उपग्रह प्रतिमा</span>
      </button>

      {/* Divider */}
      <div className="w-px bg-gray-300"></div>

      {/* Weather & Pest Button */}
      <button
        onClick={() => {
          handleSelect("ForecastTable");
        }}
        className={`w-1/2 flex flex-col items-center justify-center py-2 sm:py-3 hover:cursor-pointer transition-colors ${selected === "ForecastTable" ? "text-green-600 font-bold bg-green-50" : "text-gray-500 hover:text-green-600 hover:bg-gray-50"
          }`}
      >
        <div className="flex space-x-1 mb-1">
          <WiDayCloudy className="text-lg sm:text-xl" />
          {/* <MdOutlinePestControl className="text-lg sm:text-xl" /> */}
        </div>
        <span className="text-center leading-tight">हवामान, कीड व रोगांचे अंदाज</span>
      </button>
    </footer>
  );
};

export default FooterNav;
