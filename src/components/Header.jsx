// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUser } from "react-icons/fa";

// const Header = ({ title = "शेतकरी डॅशबोर्ड" }) => {
//   const navigate = useNavigate();

//   return (
//     <header className="bg-green-500 text-white px-4 py-3 flex justify-between items-center">
//       {/* Menu Icon */}
//       <button
//         onClick={() => navigate("/SettingsPage")}
//         className="hover:cursor-pointer"
//         aria-label="Open Settings"
//       >
//         <span className="text-[32px] leading-none">☰</span>
//       </button>

//       {/* Title */}
//       <h1 className="text-lg font-semibold">{title}</h1>

//       {/* User Profile */}
//       <button
//         onClick={() => navigate("/FarmerProfile")}
//         className="text-2xl text-white hover:cursor-pointer"
//         aria-label="Farmer Profile"
//       >
//         <FaUser />
//       </button>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Header = ({ title = "शेतकरी डॅशबोर्ड" }) => {
  const navigate = useNavigate();

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
      <button
        onClick={() => navigate("/FarmerProfile")}
        className="text-xl sm:text-2xl text-white hover:cursor-pointer p-2 hover:bg-green-600 rounded-md transition-colors"
        aria-label="Farmer Profile"
      >
        <FaUser />
      </button>
    </header>
  );
};

export default Header;
