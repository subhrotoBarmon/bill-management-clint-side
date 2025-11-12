import React, { use, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../pages/Loading';
import useAxios from '../hook/useAxios';
import Swal from 'sweetalert2';

const MyPayBillList = () => {
    let {user,loading}=use(AuthContext);
    let [myPayBills,setMyPayBills]=useState([]);
    const [selectedBill, setSelectedBill] = useState(null);
    const updateRef = useRef(null);

    let axiosInstance=useAxios();

        useEffect(()=>{
      axiosInstance.get(`/myPayBills?email=${user?.email}`)
      .then(data=>{
        setMyPayBills(data?.data);
      })
    },[user,axiosInstance])


    if(loading){
        return <Loading></Loading>
    };

        let handleDelete=(_id)=>{
        axiosInstance.delete(`/deleteMyPayBill/${_id}`)
        .then(data=>{
            // console.log(data);
            if(data?.data?.deletedCount>0){
               Swal.fire({
                         position: "top-end",
                         icon: "success",
                         title: "Delete Successful!",
                         showConfirmButton: false,
                         timer: 1500
                       });
              let remainingBids=myPayBills.filter(bids=>bids._id !==_id);
              setMyPayBills(remainingBids);  
            }
        })
    }
     
      //  Update Modal
   const handleUpdate = (bill) => {
    setSelectedBill(bill);
    updateRef.current.showModal();
  };

  //  Updated Data
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedBill = {
      amount: form.amount.value,
      address: form.address.value,
      phone: form.phone.value,
      date: form.date.value,
    };

    axiosInstance
      .put(`/updateMyPayBill/${selectedBill._id}`, updatedBill)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Update Successful!",
            showConfirmButton: false,
            timer: 1500,
          });
          // Update UI
          const updatedList = myPayBills.map((bill) =>
            bill._id === selectedBill._id
              ? { ...bill, ...updatedBill }
              : bill
          );
          setMyPayBills(updatedList);
          updateRef.current.close();
        }
      });
  };


    return (
       <div className="overflow-x-auto w-11/12 mx-auto p-4">
      <table className="table-auto w-full border border-gray-300 rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          <tr className="text-left">
            <th className="px-4 py-2 border">Username</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Amount</th>
            <th className="px-4 py-2 border">Address</th>
            <th className="px-4 py-2 border">Phone</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {myPayBills?.map((item) => (
            <tr key={item._id } className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{item.username}</td>
              <td className="px-4 py-2 border">{item.email}</td>
              <td className="px-4 py-2 border">{item.amount}</td>
              <td className="px-4 py-2 border">{item.address}</td>
              <td className="px-4 py-2 border">{item.phone}</td>
              <td className="px-4 py-2 border">{item.date}</td>
              <td className="px-4 py-2 border text-center">
                <button
                  onClick={() => handleUpdate(item)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          {
            myPayBills.length===0 &&  <p className="text-center text-gray-500 mt-4">No data found.</p>
          }

           {/* Update Modal */}
            <dialog ref={updateRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">Update Your Bill Details</h3>

          <form onSubmit={handleUpdateSubmit}>
            <fieldset className="fieldset space-y-2">
              <label className="label">Amount</label>
              <input
                type="text"
                name="amount"
                defaultValue={selectedBill?.amount}
                className="input input-bordered w-full"
                required
              />

              <label className="label">Address</label>
              <input
                type="text"
                name="address"
                defaultValue={selectedBill?.address}
                className="input input-bordered w-full"
                required
              />

              <label className="label">Phone</label>
              <input
                type="tel"
                name="phone"
                defaultValue={selectedBill?.phone}
                className="input input-bordered w-full"
                required
              />

              <label className="label">Date</label>
              <input
                type="date"
                name="date"
                defaultValue={selectedBill?.date}
                className="input input-bordered w-full"
                required
              />

              <button className="btn btn-neutral mt-4 w-full">Update</button>
            </fieldset>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      
    </div>
    );
};

export default MyPayBillList;