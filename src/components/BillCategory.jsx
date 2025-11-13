import React from 'react';
import { FaBolt, FaGasPump, FaWater, FaWifi } from "react-icons/fa";
import { useNavigate } from 'react-router';


let BillCategory = () => {
  let navigate = useNavigate();

  let handleCategory = (category) => {
    navigate(`/bills?category=${category}`);
  };

  return (
    <>
    <h2 className='text-center font-bold text-2xl mt-4 text-blue-500'>Category</h2>
    <div className="flex flex-wrap justify-center gap-6 py-4">
      {/* Electricity */}
      <div
        onClick={() => handleCategory('Electricity')}
        className="cursor-pointer w-56 p-6 rounded-2xl shadow-md bg-gradient-to-b from-yellow-100 to-yellow-50 hover:shadow-lg hover:scale-105 transition-transform text-center"
      >
        <FaBolt className="text-yellow-500 text-4xl mb-3 mx-auto" />
        <h3 className="text-lg font-semibold text-gray-700">Electricity</h3>
      </div>

      {/* Gas */}
      <div
        onClick={() => handleCategory('Gas')}
        className="cursor-pointer w-56 p-6 rounded-2xl shadow-md bg-gradient-to-b from-red-100 to-red-50 hover:shadow-lg hover:scale-105 transition-transform text-center"
      >
        <FaGasPump className="text-red-500 text-4xl mb-3 mx-auto" />
        <h3 className="text-lg font-semibold text-gray-700">Gas</h3>
      </div>

      {/* Water */}
      <div
        onClick={() => handleCategory('Water')}
        className="cursor-pointer w-56 p-6 rounded-2xl shadow-md bg-gradient-to-b from-blue-100 to-blue-50 hover:shadow-lg hover:scale-105 transition-transform text-center"
      >
        <FaWater className="text-blue-500 text-4xl mb-3 mx-auto" />
        <h3 className="text-lg font-semibold text-gray-700">Water</h3>
      </div>

      {/* Internet */}
      <div
        onClick={() => handleCategory('Internet')}
        className="cursor-pointer w-56 p-6 rounded-2xl shadow-md bg-gradient-to-b from-green-100 to-green-50 hover:shadow-lg hover:scale-105 transition-transform text-center"
      >
        <FaWifi className="text-green-500 text-4xl mb-3 mx-auto" />
        <h3 className="text-lg font-semibold text-gray-700">Internet</h3>
      </div>
    </div>
    </>
  );
};

export default BillCategory;
