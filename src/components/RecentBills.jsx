import React, { useEffect, useState } from 'react';
import useAxios from '../hook/useAxios';
import { Link } from 'react-router';

const RecentBills = () => {
    let [bills,setBills]=useState([]);
    let axiosInstance=useAxios();
    useEffect(()=>{
        axiosInstance.get('/recentBills')
        .then(data=>{
            // console.log(data);          
            setBills(data?.data);
        })
    },[axiosInstance])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                bills.map(data=><div key={data._id} className="w-90 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-5 border border-gray-100 mt-2">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{data?.title}</h2>
      <p className="text-sm text-gray-500">
        <span className="font-medium text-gray-700">Category:</span> {data?.category}
      </p>
      <p className="text-sm text-gray-500">
        <span className="font-medium text-gray-700">Location:</span> {data?.location}
      </p>
      <p className="text-sm text-gray-500 mb-4">
        <span className="font-medium text-gray-700">Date:</span> {data?.date}
      </p>

      <Link to={`/billsDetails/${data?._id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        See Details
      </Link>
    </div>)
            }
        </div>
    );
};

export default RecentBills;