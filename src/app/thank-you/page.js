
"use client";
import React, { useState } from "react";

export default function ThankYou() {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="min-h-screen">
       {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
          style={{ animation: "fadeIn 0.3s ease-out" }}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 transform transition-transform duration-300 ease-in-out"
            style={{ animation: "slideIn 0.3s ease-out" }}
          >
            <div className="relative">
              <h2 className="text-xl font-semibold text-center">Thank You</h2>
              {/* Close button positioned at the top-right corner */}
              <button 
                onClick={closeModal} 
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
              >
                &times;
              </button>
            </div>
            <p className="mt-10 text-green-900 text-center">Thank you for choosing <span className="font-bold">Rialtes</span> We truly appreciate your interest and trust in our services. Our sales team will be in touch with you shortly !</p>
          </div>
        </div>
      )}
    </div>
  );
}
