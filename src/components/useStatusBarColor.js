import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useStatusBarColor = () => {
  const location = useLocation();

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) return;

    if (location.pathname === "/") {
      metaThemeColor.setAttribute("content", "#f0fdf4"); // white
    } else {
      metaThemeColor.setAttribute("content", "#22c55e"); 
    }
  }, [location]);
};

export default useStatusBarColor;
