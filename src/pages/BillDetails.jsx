import React, { use, useEffect, useRef, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import useAxios from '../hook/useAxios';
import { AuthContext } from '../Provider/AuthProvider';
import Navbar from '../components/Navbar';
import Loading from './Loading';
import Swal from 'sweetalert2';

const BillDetails = () => {
    let {id}=useParams();
    
    let [payBill,setPayBill]=useState([]);
    const [bill, setBill] = useState(null);
    let {user,loading}=use(AuthContext);
    let billRef=useRef(null);
    
    let axiosInstance=useAxios();


    useEffect(()=>{
        axiosInstance.get(`/billsDetails/${id}`)
        .then(data=>{  
            setBill(data.data);
        })
    },[axiosInstance,id])


    let handleBill=()=>{
        billRef.current.showModal();
    }
     if(loading){
        return <Loading></Loading>;
    }

let handleBillForm = (e) => {
  e.preventDefault();

  // Collect form data
  const form = e.target;
  const email = form.email.value;
  const billId = form.billId.value;
  const amount = form.amount.value;
  const username = form.username.value;
  const address = form.address.value;
  const phone = form.phone.value;
  const date = form.date.value;
  const info = form.info.value;

  const newPayBill = {
    billId,
    username: username,
    email: email,
    amount,
    address,
    phone,
    date,
    additional_info: info || "",
  };

//   console.log(newPayBill);

  // Send to backend
  axiosInstance.post("/myPayBills", newPayBill)
    .then((res) => {
      if (res.data?.insertedId) {
        billRef.current.close();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Bill Payment Successfully!",
          showConfirmButton: false,
          timer: 1500
        });

        const updatedBills = [...payBill, { ...newPayBill, _id: res.data.insertedId }];
        updatedBills.sort((a, b) => b.amount - a.amount);
        setPayBill(updatedBills);
      }
    })
    .catch((error) => {
      console.log(error.message)
    });
};

//month check 
  const billDate = new Date(bill?.date);
  const currentDate = new Date();

  const isSameMonth =billDate.getMonth() === currentDate.getMonth()

    
    return (
        <div>
            <Navbar></Navbar>
            {/*Bill Details */}
            <div className="flex flex-col md:flex-row gap-6 p-6 border rounded shadow-lg w-11/12 mx-auto">
                <div className='md:w-1/2 flex flex-col gap-4 shadow-2xl p-4'>
                    <h2 className="text-2xl font-bold">{bill?.title}</h2>
        <p><strong>Category:</strong> {bill?.category}</p>
        <p><strong>Creator Email:</strong> {bill?.email}</p>
        <p><strong>Location:</strong> {bill?.location}</p>
        <p><strong>Date:</strong> {bill?.date}</p>
        <p><strong>Amount:</strong> ${bill?.amount}</p>
  {/* Pay Bill Button  */}
    <div className="flex flex-col gap-2">
      <button
        onClick={handleBill}
        className="btn btn-primary"
        disabled={!isSameMonth}
      >
        Pay Your Bill
      </button>
    </div>



  <dialog ref={billRef} className="modal modal-bottom sm:modal-middle">
    <div className="modal-box">
      <h3 className="font-bold text-lg mb-2">Provide Your Purchase Details</h3>

      <form onSubmit={handleBillForm}>
        <fieldset className="fieldset space-y-2">
          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            defaultValue={user?.email}
            readOnly
          />

          {/* Bill ID  */}
          <label className="label">Bill ID</label>
          <input
            type="text"
            name="billId"
            className="input input-bordered w-full"
            defaultValue={bill?._id}
            readOnly
          />

          {/* Amount  */}
          <label className="label">Amount</label>
          <input
            type="text"
            name="amount"
            className="input input-bordered w-full"
            defaultValue={bill?.amount}
            readOnly
          />

          {/* Username */}
          <label className="label">Username</label>
          <input
            type="text"
            name="username"
            className="input input-bordered w-full"
            placeholder="Your full name"
            required
          />

          {/* Address */}
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input input-bordered w-full"
            placeholder="Your address"
            required
          />

          {/* Phone */}
          <label className="label">Phone</label>
          <input
            type="tel"
            name="phone"
            className="input input-bordered w-full"
            placeholder="Your phone number"
            required
          />

          {/* Date  */}
          <label className="label">Date</label>
          <input
            type="text"
            name="date"
            className="input input-bordered w-full"
            defaultValue={new Date().toLocaleDateString()}
            readOnly
          />

          {/* Additional Info */}
          <label className="label">Additional Info</label>
          <textarea
            name="info"
            className="textarea textarea-bordered w-full"
            placeholder="Any additional notes (optional)"
          ></textarea>

          <button className="btn btn-neutral mt-4 w-full">Submit</button>
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
            {/* right side */}
             <div className="md:w-1/2 flex flex-col gap-4">
  <img 
    src={bill?.image} 
    alt={bill?.title} 
    className="w-full h-2/3 rounded-lg object-cover" 
  />
  <p className="text-gray-700">
    <span className='font-bold'>Description:</span> {bill?.description}
  </p>
</div>

           </div>  
        </div>
    );
};

export default BillDetails;