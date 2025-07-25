
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useStatusBarColor = () => {
  const location = useLocation();

  const updateThemeColor = () => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) return;

    if (location.pathname === "/") {
      metaThemeColor.setAttribute("content", "#f0fdf4");
    } else {
      metaThemeColor.setAttribute("content", "#22c55e");
    }
  };

  useEffect(() => {
    updateThemeColor(); // initial render

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        updateThemeColor();
      }
    });

    return () => {
      document.removeEventListener("visibilitychange", updateThemeColor);
    };
  }, [location]);
};

export default useStatusBarColor;
