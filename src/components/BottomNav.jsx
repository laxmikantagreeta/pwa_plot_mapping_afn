import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-sm flex justify-around py-2 text-sm text-gray-700">
      <NavLink to="/dashboard" className="flex flex-col items-center">
        <img src="/icons/satellite.png" className="w-6 h-6" />
        उपग्रह प्रतिमा
      </NavLink>
      <NavLink to="/forecast" className="flex flex-col items-center">
        <img src="/icons/weather.png" className="w-6 h-6" />
        हवामान, कीड व रोगांचे
      </NavLink>
      <NavLink to="/profile" className="flex flex-col items-center">
        <span className="text-xl">👤</span>
        प्रोफाइल
      </NavLink>
    </div>
  );
};

export default BottomNav;
