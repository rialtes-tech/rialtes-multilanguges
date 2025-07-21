"use client";

import { useState, useEffect } from 'react';

const CookiePopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Check if the cookie consent is already given
    useEffect(() => {
        if (!localStorage.getItem('cookieConsent')) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    return (
        <div>
            {isVisible && (
                <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t-2 border-gray-300 z-50">
                    <div className="flex p-10 gap-20 px-[280px]">
                        <div className="text-sm">
                            <p>We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and improve our services. We share data about your site usage with our social media, advertising, and analytics partners, who may combine it with other information you’ve provided or collected.</p>
                        </div>
                        <div>
                            <div className='flex gap-10'>
                                <div className='w-full'>
                                    <button
                                        onClick={() => setIsVisible(false)}
                                        className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4"
                                    >
                                        Deny

                                    </button>
                                </div>

                                <div className='w-full'>
                                    <button
                                        onClick={handleAccept}
                                        className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4"
                                    >
                                        Allow all
                                    </button>
                                </div>

                            </div>
                            <div>
                                <button
                                    className="bg-[#7B7B7B] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6"
                                >
                                    Manage preferences
                                </button>
                            </div>


                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default CookiePopup;
