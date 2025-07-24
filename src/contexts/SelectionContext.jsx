
import React, { useContext, useMemo, useEffect } from "react";
import { FarmerContext } from "../contexts/FarmerContext";

// Marathi mappings
const seasonMap = {
  "Kharif": "खरीप",
  "Rabi": "रब्बी",
  "Summer": "उन्हाळी"
};

export const cropMap = {
  "Soybean": "सोयाबीन",
  "Wheat": "गहू",
  "Cotton": "कापूस",
  "Maize": "मका",
  "Gram": "हरभरा",
  "Pomegranate": "डाळिंब",
  "Banana": "केळं",
  "Mango": "आंबा",
  "Papaya": "पपई",
  "Guava": "पेरू",
  "Orange": "संत्रं",
  "Sweet Lime": "मोसंबी",
  "Tomato": "टोमॅटो",
  "Onion": "कांदा",
  "Potato": "बटाटा",
  "Brinjal": "वांगी",
  "Okra": "भेंडी",
  "Cabbage": "कोबी",
  "Cauliflower": "फुलकोबी"
};

const FarmSelector = ({ selectedSeason, setSelectedSeason, selectedField, setSelectedField }) => {
  const { farmerData } = useContext(FarmerContext);
  const farms = farmerData?.farms || [];

  const seasons = useMemo(() => {
    const unique = new Set();
    farms.forEach((f) => {
      if (f.seasonType) unique.add(f.seasonType);
    });
    return Array.from(unique);
  }, [farms]);

  const fields = useMemo(() => {
    return farms
      .filter((f) => f.seasonType === selectedSeason)
      .flatMap((f) => f.fields || []);
  }, [farms, selectedSeason]);

  const selectedCrop = useMemo(() => {
    const fieldObj = fields.find((f) => f.fieldCode === selectedField);
    if (!fieldObj) return "";
    const cropMarathi = cropMap[fieldObj.crop] || fieldObj.crop;
    return `${cropMarathi} (${fieldObj.totalAreaInAcre} एकर)`;
  }, [fields, selectedField]);

  // Restore from sessionStorage or auto-select first season and field
  useEffect(() => {
    if (!farmerData || farms.length === 0) return;

    const savedSeason = sessionStorage.getItem("selectedSeason");
    const savedField = sessionStorage.getItem("selectedField");

    if (savedSeason && farms.some(f => f.seasonType === savedSeason)) {
      setSelectedSeason(savedSeason);

      const matchingFields = farms
        .filter(f => f.seasonType === savedSeason)
        .flatMap(f => f.fields || []);

      if (savedField && matchingFields.some(f => f.fieldCode === savedField)) {
        setSelectedField(savedField);
        return;
      }
    }

    // If no saved values or invalid, select first available
    const firstSeason = seasons[0];
    if (firstSeason) {
      setSelectedSeason(firstSeason);
      const firstField = farms
        .filter(f => f.seasonType === firstSeason)
        .flatMap(f => f.fields || [])[0];
      if (firstField) {
        setSelectedField(firstField.fieldCode);
      }
    }
  }, [farmerData, farms, seasons]);

  useEffect(() => {
    sessionStorage.setItem("selectedSeason", selectedSeason);
    sessionStorage.setItem("selectedField", selectedField);
  }, [selectedSeason, selectedField]);

  return (
    <div className="space-y-4">
      {/* हंगाम */}
      <div className="flex items-center">
        <span className="text-sm font-bold text-gray-800 mr-2 min-w-[80px]">हंगाम</span>
        <span className="text-sm text-gray-800 mr-2">:</span>
        <div className="relative flex-1">
          <select
            className="appearance-none w-full bg-transparent text-sm text-gray-800 pr-6 focus:outline-none border-b-2 border-gray-300 focus:border-green-500 pb-1"
            value={selectedSeason}
            onChange={(e) => {
              setSelectedSeason(e.target.value);
              const firstField = farms
                .filter(f => f.seasonType === e.target.value)
                .flatMap(f => f.fields || [])[0];
              setSelectedField(firstField?.fieldCode || "");
            }}
          >
            {seasons.map((season, idx) => (
              <option key={idx} value={season}>
                {seasonMap[season] || season}
              </option>
            ))}
          </select>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none">▼</div>
        </div>
      </div>

      {/* शेती क्षेत्र */}
      <div className="flex items-center">
        <span className="text-sm font-bold text-gray-800 mr-2 min-w-[80px]">शेती क्षेत्र</span>
        <span className="text-sm text-gray-800 mr-2">:</span>
        <div className="relative flex-1">
          <select
            className="appearance-none w-full bg-transparent text-sm text-gray-800 pr-6 focus:outline-none border-b-2 border-gray-300 focus:border-green-500 pb-1"
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
          >
            {fields.map((field, idx) => (
              <option key={idx} value={field.fieldCode}>
                {field.fieldCode}
              </option>
            ))}
          </select>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 text-sm pointer-events-none">▼</div>
        </div>
      </div>

      {/* पीक */}
      <div className="flex items-center">
        <span className="text-sm font-bold text-gray-800 mr-2 min-w-[80px]">पीक</span>
        <span className="text-sm text-gray-800 mr-2">:</span>
        <div className="flex-1 text-sm text-gray-800 font-semibold">
          {selectedCrop || "—"}
        </div>
      </div>
    </div>
  );
};

export default FarmSelector;
