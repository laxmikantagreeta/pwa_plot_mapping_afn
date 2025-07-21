// src/components/FarmSelector.js
import React, { useContext, useMemo, useEffect, useState } from "react";
import { FarmerContext } from "../contexts/FarmerContext";

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
    return fieldObj ? `${fieldObj.crop} (${fieldObj.totalAreaInAcre} एकर)` : "";
  }, [fields, selectedField]);

  // Store dropdown state in sessionStorage to persist between routes
  // useEffect(() => {
  //   const savedSeason = sessionStorage.getItem("selectedSeason");
  //   const savedField = sessionStorage.getItem("selectedField");
  //   if (savedSeason) setSelectedSeason(savedSeason);
  //   if (savedField) setSelectedField(savedField);
  // }, []);

  useEffect(() => {
  if (!farmerData || farms.length === 0) return;

  const savedSeason = sessionStorage.getItem("selectedSeason");
  const savedField = sessionStorage.getItem("selectedField");

  if (savedSeason && farms.some(f => f.seasonType === savedSeason)) {
    setSelectedSeason(savedSeason);

    // Check if saved field exists in that season
    const matchingFields = farms
      .filter(f => f.seasonType === savedSeason)
      .flatMap(f => f.fields || []);

    if (savedField && matchingFields.some(f => f.fieldCode === savedField)) {
      setSelectedField(savedField);
    }
  }
}, [farmerData, farms]);


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
              setSelectedField("");
            }}
          >
            <option value="">-- निवडा --</option>
            {seasons.map((season, idx) => (
              <option key={idx} value={season}>{season}</option>
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
            disabled={!selectedSeason}
          >
            <option value="">-- निवडा --</option>
            {fields.map((field, idx) => (
              <option key={idx} value={field.fieldCode}>{field.fieldCode}</option>
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
