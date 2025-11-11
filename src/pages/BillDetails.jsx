import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import useAxios from '../hook/useAxios';

const BillDetails = () => {
    let {_id}=useLoaderData();
    console.log(_id);
    
    let axiosInstance=useAxios();

    useEffect(()=>{
        axiosInstance.get(`/billsDetails/${_id}`)
        .then(data=>{
            console.log(data.data)
        })
    },[axiosInstance,_id])
    return (
        <div>
           lsdhgsh 
        </div>
    );
};

export default BillDetails;