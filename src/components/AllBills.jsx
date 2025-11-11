import React, { useEffect, useState } from 'react';
import useAxios from '../hook/useAxios';
import { Link, useLocation } from 'react-router';


let AllBills = () => {
  let [allBills, setAllBills] = useState([]);
  let axiosInstance = useAxios();
  let location = useLocation();
//   console.log(location);
  

  // Extract query parameter
  let params = new URLSearchParams(location?.search);
  let category = params.get('category');

  useEffect(() => {
    let url = category ? `/bills?category=${category}` : '/bills';
    axiosInstance.get(url)
      .then(res => {
        setAllBills(res.data)
      })
      .catch(error =>{
        console.error(error)
      });
  }, [axiosInstance, category]);

  return (
    <div className="w-11/12 mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        {category ? `${category} Bills` : 'All Bills'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBills.map((data) => (
          <div
            key={data?._id}
            className="w-full bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
          >
            <img
              src={data?.image}
              alt={data?.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{data?.title}</h2>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium text-gray-700">Category:</span> {data?.category}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium text-gray-700">Location:</span> {data?.location}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-medium text-gray-700">Amount:</span> ${data?.amount}
              </p>

              <Link
                to={`/billsDetails/${data?._id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBills;
