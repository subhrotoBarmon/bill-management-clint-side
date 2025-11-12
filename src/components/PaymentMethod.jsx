// PaymentMethods.jsx
import React from "react";

// Example image URLs (apni nijer logos diye replace korte paren)
const paymentLogos = {
  bkash: "https://cdn.dribbble.com/userupload/9943216/file/original-72c6f4a3d5d35b03ee35a423e1f93263.jpg",
  rocket:"https://images.seeklogo.com/logo-png/31/2/dutch-bangla-rocket-logo-png_seeklogo-317692.png",
  upay:"https://today.thefinancialexpress.com.bd/public/uploads/p9-Upay-Logo.jpg",
  nagad: "https://freelogopng.com/images/all_img/1679248787Nagad-Logo.png",
  visa: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png",
  mastercard: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png",
  creditCard: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDcu9teWir_yyk2E0dIfEkU-qIWpcTYASM0A&s",
  paytm:"https://www.citypng.com/public/uploads/preview/paytm-circle-logo-hd-png-701751694706614zmho56voff.png?v=2025083118"
};


const PaymentMethods = () => {
  return (
    <section className="bg-gray-100 py-10 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Choose Payment Method
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Bkash */}
        <div className="card bg-white shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform rounded-lg cursor-pointer">
          <img src={paymentLogos.bkash} alt="Bkash" className="w-16 mb-3" />
          <span className="font-semibold text-gray-700">Bkash</span>
        </div>

        {/* Nagad */}
        <div className="card bg-white shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform rounded-lg cursor-pointer">
          <img src={paymentLogos.nagad} alt="Nagad" className="w-16 mb-3" />
          <span className="font-semibold text-gray-700">Nagad</span>
        </div>

        {/* Rocket */}
        <div className="card bg-white shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform rounded-lg cursor-pointer">
          <img src={paymentLogos.rocket} alt="Nagad" className="w-16 mb-3" />
          <span className="font-semibold text-gray-700">Nagad</span>
        </div>

        {/* Upay */}
        <div className="card bg-white shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform rounded-lg cursor-pointer">
          <img src={paymentLogos.upay} alt="Nagad" className="w-16 mb-3" />
          <span className="font-semibold text-gray-700">Upay</span>
        </div>

        {/* visa Card */}
        <div className="card bg-white shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform rounded-lg cursor-pointer">
          <img src={paymentLogos?.visa} alt="Card" className="w-16 mb-3" />
          <span className="font-semibold text-gray-700">Visa Card</span>
        </div>

        {/* creditcard */}
        <div className="card bg-white shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform rounded-lg cursor-pointer">
          <img src={paymentLogos?.creditCard} alt="Card" className="w-16 mb-3" />
          <span className="font-semibold text-gray-700">Credit Card</span>
        </div>

        {/* Paytm */}
        <div className="card bg-white shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform rounded-lg cursor-pointer">
          <img src={paymentLogos?.paytm} alt="Card" className="w-16 mb-3" />
          <span className="font-semibold text-gray-700">Paytm</span>
        </div>

        {/* Mastercard */}
        <div className="card bg-white shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform rounded-lg cursor-pointer">
          <img
            src={paymentLogos.mastercard}
            alt="Mastercard"
            className="w-16 mb-3"
          />
          <span className="font-semibold text-gray-700">Mastercard</span>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
