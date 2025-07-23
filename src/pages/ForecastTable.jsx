import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCloudSunRain, FaUser } from "react-icons/fa";
import ImageIcon from "../assets/IMG-20250702-WA0011.jpg";
import FooterNav from "../components/Footer";
import { FarmerContext } from "../contexts/FarmerContext";
import FarmSelector from "../contexts/SelectionContext";
import axiosInstance from "../contexts/axiosInstance";

const ForecastTable = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ForecastTable");

  const { farmerData, loading, error } = useContext(FarmerContext);
  const [selectedSeason, setSelectedSeason] = useState(localStorage.getItem("selectedSeason") || "");
  const [selectedField, setSelectedField] = useState(localStorage.getItem("selectedField") || "");

  const [forecastData, setForecastData] = useState([]);
  const [loadingForecast, setLoadingForecast] = useState(false);
  const [forecastError, setForecastError] = useState("");

  // const BASE_DATE = "2025-07-15";
  const BASE_DATE = new Date().toISOString().split("T")[0];

  const fullName =
    farmerData?.name && farmerData?.lastName
      ? `${farmerData.name} ${farmerData.lastName}`
      : "शेतकरी";

  // Persist dropdowns
  useEffect(() => {
    localStorage.setItem("selectedSeason", selectedSeason);
    localStorage.setItem("selectedField", selectedField);
  }, [selectedSeason, selectedField]);

  // Fetch forecast when selectedField changes
  useEffect(() => {
    const fetchForecast = async () => {
      const allFarms = farmerData?.farms || [];
      const fieldObj = allFarms
        .flatMap((f) => f.fields || [])
        .find((f) => f.fieldCode === selectedField);

      if (!fieldObj?.fieldId) {
        setForecastData([]);
        return;
      }

      setLoadingForecast(true);
      setForecastError("");

      try {
        const res = await axiosInstance.post("/pest-disease-forecast", {
          FieldId: fieldObj.fieldId,
          Date: BASE_DATE,
        });

        const grouped = res.data.pestDiseaseForecast.reduce((acc, item) => {
          const date = item.date.split("T")[0];
          if (!acc[date]) acc[date] = [];
          acc[date].push(item);
          return acc;
        }, {});

        setForecastData(
          Object.entries(grouped).map(([date, items]) => ({
            date,
            weather: {
              temp: items[0].temprature + "°C",
              humidity: items[0].humidity + "%",
              rain: items[0].rainfall,
            },
            pests: items.map((i) => i.disease),
          }))
        );
      } catch (err) {
        console.error("Error fetching forecast", err);
        setForecastError("डेटा मिळवताना त्रुटी आली.");
      } finally {
        setLoadingForecast(false);
      }
    };

    if (selectedField) fetchForecast();
  }, [selectedField, farmerData]);

  if (loading) return <div className="text-center py-10 text-gray-600">लोड करत आहे...</div>;
  if (error || !farmerData) return <div className="text-center py-10 text-red-600">डेटा मिळवता आला नाही</div>;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <header className="bg-green-500 text-white px-3 py-3 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <button onClick={() => navigate("/SettingsPage")} className="p-2 hover:bg-green-600 rounded-md">
          <span className="text-2xl">☰</span>
        </button>
        <h1 className="text-sm font-semibold text-center flex-1 mx-2 truncate">{fullName}</h1>
        <button onClick={() => navigate("/FarmerProfile")} className="text-xl p-2 hover:bg-green-600 rounded-md">
          <FaUser />
        </button>
      </header>

      {/* Dropdown */}
      <div className="w-full flex justify-center mt-4 px-4">
        <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-sm">
          <FarmSelector
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
        </div>
      </div>

      {/* Date Header */}
      <div className="text-center font-bold text-gray-800 border-y border-gray-300 py-3 my-4 bg-white mx-4 rounded-lg shadow-sm">
        {BASE_DATE.split("-").reverse().join("/")}
      </div>

      {/* Weather Summary */}
      {loadingForecast ? (
        <div className="text-center text-gray-600 my-6">हवामान डेटा लोड करत आहे...</div>
      ) : forecastError ? (
        <div className="text-center text-red-600 my-6">{forecastError}</div>
      ) : forecastData.length > 0 ? (
        <div className="flex flex-col items-center mb-6 text-gray-800 bg-white mx-4 p-4 rounded-lg shadow-sm">
          <FaCloudSunRain className="text-4xl text-green-500 mb-3" />
          <div className="space-y-2 w-full max-w-xs">
            <div className="flex">
              <span className="min-w-[120px] text-right font-medium">तापमान</span>
              <span className="mx-2">-</span>
              <span className="font-semibold text-green-600">{forecastData[0].weather.temp}</span>
            </div>
            <div className="flex">
              <span className="min-w-[120px] text-right font-medium">आर्द्रता</span>
              <span className="mx-2">-</span>
              <span className="font-semibold text-green-600">{forecastData[0].weather.humidity}</span>
            </div>
            <div className="flex">
              <span className="min-w-[120px] text-right font-medium">पर्जन्यमान</span>
              <span className="mx-2">-</span>
              <span className="font-semibold text-green-600">{forecastData[0].weather.rain}</span>
            </div>
          </div>
        </div>
      ) : null}

      {/* Forecast Table */}
      <div className="mx-4 mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="py-3 px-2 border">तारीख</th>
                <th className="py-3 px-2 border">हवामान अंदाज</th>
                <th className="py-3 px-2 border">कीड व रोगांचे अंदाज</th>
              </tr>
            </thead>
            <tbody>
              {forecastData.map((item, idx) => (
                <tr key={idx} className="text-center border-t hover:bg-gray-50">
                  <td className="border px-2 py-3 font-medium text-gray-800">
                    {item.date.split("-").reverse().join("/")}
                  </td>
                  <td className="border px-2 py-3 text-left">
                    <div className="space-y-1">
                      <div>तापमान - <span className="font-semibold text-green-600">{item.weather.temp}</span></div>
                      <div>आर्द्रता - <span className="font-semibold text-green-600">{item.weather.humidity}</span></div>
                      <div>पर्जन्यमान - <span className="font-semibold text-green-600">{item.weather.rain}</span></div>
                    </div>
                  </td>
                  <td className="border px-2 py-3 text-left">
                    <div className="space-y-2">
                      {item.pests.map((pest, pidx) => (
                        <div key={pidx} className="text-sm font-medium text-gray-800">
                          {pest}
                        </div>
                      ))}
                      {/* <div className="flex justify-end mt-2">
                        <img
                          src={ImageIcon}
                          alt="pest"
                          className="w-8 h-8 rounded-md hover:scale-110 transition-transform"
                        />
                      </div> */}
                    </div>
                  </td>
                </tr>
              ))}
              {forecastData.length === 0 && (
                <tr><td colSpan="3" className="text-center text-gray-500 py-4">डेटा उपलब्ध नाही</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <FooterNav selected={activeTab} onSelect={setActiveTab} />
    </div>
  );
};

export default ForecastTable;
