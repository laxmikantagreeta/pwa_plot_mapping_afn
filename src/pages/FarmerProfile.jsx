

import React, { useContext } from "react";
import { FarmerContext } from "../contexts/FarmerContext";
import Header from "../components/Header";

const FarmerProfile = () => {
  const { farmerData, loading, error } = useContext(FarmerContext);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-600">
        लोड करत आहे...
      </div>
    );
  }

  if (error || !farmerData) {
    return (
      <div className="text-center py-10 text-red-600">
        डेटा मिळवता आला नाही
      </div>
    );
  }

  const fields = farmerData.farms?.flatMap(farm => farm.fields) || [];
  const crops = fields.map(f =>
    `${f.fieldCode} - ${f.crop} (${f.totalAreaInAcre})`
  );
  const fieldCodes = fields.map(f => f.fieldCode);

  const profile = {
    name: `${farmerData.name} ${farmerData.lastName}`,
    code: farmerData.farmerCode,
    mobile: farmerData.mobile,
    address: `${farmerData.village}, ${farmerData.talukaName}, ${farmerData.districtName}, ${farmerData.pincode}`,
    fields: fieldCodes,
    crops,
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pb-6">
      <Header title={profile.name} />

      {/* Farmer Code */}
      <div className="bg-white mx-4 px-4 py-4 rounded-lg shadow-sm border border-gray-200 mb-4 mt-4">
        <div className="text-sm sm:text-base font-bold text-gray-700 mb-1">
          फार्मर कोड
        </div>
        <div className="text-base sm:text-lg font-semibold text-green-600">
          {profile.code}
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-4 space-y-4">
        <div>
          <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
            नाव
          </label>
          <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 font-semibold text-gray-800 shadow-sm">
            {profile.name}
          </div>
        </div>

        <div>
          <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
            मोबाईल नंबर
          </label>
          <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 font-semibold text-gray-800 shadow-sm">
            {profile.mobile}
          </div>
        </div>

        <div>
          <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
            शेती क्षेत्रे
          </label>
          <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 font-semibold text-gray-800 shadow-sm">
            {profile.fields.join(", ")}
          </div>
        </div>

        <div>
          <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
            पिके
          </label>
          <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 space-y-2 font-semibold text-gray-800 shadow-sm">
            {profile.crops.map((crop, idx) => (
              <div
                key={idx}
                className="py-1 border-b border-gray-100 last:border-b-0"
              >
                {crop}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm sm:text-base font-bold text-gray-700 mb-2">
            पत्ता
          </label>
          <div className="bg-white border border-gray-300 rounded-lg p-3 sm:p-4 font-semibold text-gray-800 shadow-sm leading-relaxed">
            {profile.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;
