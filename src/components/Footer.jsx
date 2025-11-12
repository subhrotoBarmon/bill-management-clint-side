import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-gray-300 px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">PAY BILL</h2>
          <p className="text-sm leading-6">
            Simplifying your utility payments with a single click. 
            Manage and track your bills easily, anytime, anywhere.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">About Us</a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center items-start md:items-end">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MyPayBill. All rights reserved.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        Designed & Developed by <span className="text-white font-medium">Pappu</span>
      </div>
    </footer>
  );
};

export default Footer;
