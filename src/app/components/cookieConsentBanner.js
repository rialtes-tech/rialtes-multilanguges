"use client";

import { useState, useEffect } from 'react';

export const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t-2 border-gray-300 z-50">
        <div className="p-10 xl:gap-20 custom-container grid xl:grid-cols-12">
          {/* Text Section */}
          <div className="text-sm xl:col-span-8 col-span-12">
            <p className="xl:text-[17px] 2xl:text-[18px] 4xl:text-[20px] text-[16px]">
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and improve our services. We share data about your site usage with our social media, advertising, and analytics partners, who may combine it with other information you’ve provided or collected.
            </p>
          </div>

          {/* Button Section */}
          <div className="xl:col-span-4 col-span-12 mt-10 xl:mt-0 md:mt-10">
            <div className="flex gap-10">
              <div>
                <button
                  onClick={handleReject}
                  className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4"
                >
                  Deny
                </button>
              </div>

              <div>
                <button
                  onClick={handleAccept}
                  className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4"
                >
                  Allow all
                </button>
              </div>
            </div>

            {/* Optional Preferences Button */}
            {/* <div>
              <button
                className="bg-[#7B7B7B] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6"
              >
                Manage preferences
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

