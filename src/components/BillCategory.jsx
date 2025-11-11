import React from 'react';
import { FaBolt, FaGasPump, FaWater, FaWifi } from "react-icons/fa";

const BillCategory = () => {
    return (
        <div className="flex flex-wrap justify-center gap-6 py-8">
      {/* Electricity */}
      <div className="w-56 p-6 rounded-2xl shadow-md bg-gradient-to-b from-yellow-100 to-yellow-50 hover:shadow-lg hover:scale-105 transition-transform text-center">
        <FaBolt className="text-yellow-500 text-4xl mb-3 mx-auto" />
        <h3 className="text-lg font-semibold text-gray-700">Electricity</h3>
      </div>

      {/* Gas */}
      <div className="w-56 p-6 rounded-2xl shadow-md bg-gradient-to-b from-red-100 to-red-50 hover:shadow-lg hover:scale-105 transition-transform text-center">
        <FaGasPump className="text-red-500 text-4xl mb-3 mx-auto" />
        <h3 className="text-lg font-semibold text-gray-700">Gas</h3>
      </div>

      {/* Water */}
      <div className="w-56 p-6 rounded-2xl shadow-md bg-gradient-to-b from-blue-100 to-blue-50 hover:shadow-lg hover:scale-105 transition-transform text-center">
        <FaWater className="text-blue-500 text-4xl mb-3 mx-auto" />
        <h3 className="text-lg font-semibold text-gray-700">Water</h3>
      </div>

      {/* Internet */}
      <div className="w-56 p-6 rounded-2xl shadow-md bg-gradient-to-b from-green-100 to-green-50 hover:shadow-lg hover:scale-105 transition-transform text-center">
        <FaWifi className="text-green-500 text-4xl mb-3 mx-auto" />
        <h3 className="text-lg font-semibold text-gray-700">Internet</h3>
      </div>
    </div>
  );
};


export default BillCategory;