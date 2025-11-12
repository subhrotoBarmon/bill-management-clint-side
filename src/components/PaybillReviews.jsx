import React from "react";

const PaybillReviews = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">User Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="card bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">Alice Johnson</h3>
              <div className="flex space-x-1">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
              </div>
            </div>
            <p className="text-gray-700">
              Paybill app makes my bill payments so easy and fast. Highly recommended!
            </p>
          </div>

          <div className="card bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">Bob Smith</h3>
              <div className="flex space-x-1">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-gray-300">★</span>
              </div>
            </div>
            <p className="text-gray-700">
              Great app, very convenient. Sometimes the app takes a bit longer to load.
            </p>
          </div>

          <div className="card bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">Carla Gomez</h3>
              <div className="flex space-x-1">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
              </div>
            </div>
            <p className="text-gray-700">
              Love the UI and smooth experience. Payment confirmation is instant!
            </p>
          </div>

          <div className="card bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">David Lee</h3>
              <div className="flex space-x-1">
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-yellow-400">★</span>
                <span className="text-gray-300">★</span>
                <span className="text-gray-300">★</span>
              </div>
            </div>
            <p className="text-gray-700">
              Useful app, but needs more payment options and features.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaybillReviews;
