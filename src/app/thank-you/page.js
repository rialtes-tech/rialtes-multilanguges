
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function ThankYou() {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="
    container h-full relative
    ml-[15px] w-[calc(100%-15px)] mr-0
    xl:ml-[280px] xl:w-[calc(100%-280px)]
    md:ml-[100px] md:w-[calc(100%-100px)]
    sm:mx-5 sm:w-[calc(100%-40px)]
    xs:mx-4 xs:w-[calc(100%-32px)]
    thank-you-bg bg-right-bottom bg-cover py-20
    "
    >
      {/* {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
          style={{ animation: "fadeIn 0.3s ease-out" }}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 transform transition-transform duration-300 ease-in-out"
            style={{ animation: "slideIn 0.3s ease-out" }}
          >
            <div className="relative">
              <h2 className="text-xl font-semibold text-center">Thank You</h2>
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
      )} */}
      <Image
        className="z-[999] cursor-pointer lg:w-[165px] md:w-[130px] w-[120px]"
        alt="Company logo"
        width={0}
        height={0}
        sizes="100vw"
        src="/images/homepage/logo.svg"
        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
        priority
      />
      <h2 className="text-[#134874] xl:font-bold xl:mt-32 mt-2"><span className="xl:border-b-[3px] border-gray-500 inline pb-5">Thank </span>you for contacting Rialtes! </h2>
      <h3 className="xl:font-bold xl:mt-20 xl:text-3xl xl:w-[55%] w-full mt-2">Our expert will respond to you shortly via your phone or email address.</h3>
      <h3 className="xl:font-bold text-[#134874] xl:mt-20 mt-5">For more updates follow us on:</h3>

      <div className="flex flex-col xl:flex-row  xl:mt-10 xl:gap-32">
        <div className="flex">
          <div className="mt-3">
            <Link href="https://www.linkedin.com/company/rialtes-technologies-llc/" title="Visit our LinkedIn">
              <Image className="h-20 w-20" alt="linkedin" src="/images/homepage/Asset5.svg" height={100} width={100} />
            </Link>
          </div>
          <div className="mt-3">
            <Link href="/facebook" title="Follow us on Facebook">
              <Image className="h-20 w-20" alt="facebook" src="/images/homepage/Asset1.svg" height={100} width={100} />
            </Link>
          </div>
          <div className="mt-3">
            <Link href="https://x.com/Rialtestech" title="Follow us on Twitter">
              <Image className="h-20 w-20" alt="twitter" src="/images/homepage/Asset2.svg" height={100} width={100} />
            </Link>
          </div>
          <div className="mt-3">
            <Link href="https://www.instagram.com/rialtes_technologies/" title="Follow us on Instagram">
              <Image className="h-20 w-20" alt="instagram" src="/images/homepage/Asset3.svg" height={100} width={100} />
            </Link>
          </div>
          <div className="mt-3">
            <Link href="https://www.youtube.com/@rialtes" title="Follow us on YouTube">
              <Image className="h-20 w-20" alt="youtube" src="/images/homepage/Asset4.svg" height={100} width={100} />
            </Link>
          </div>
        </div>
        <div>
          <button className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6">
            <Link href='/'>Close</Link>
          </button>
        </div>

      </div>
    </div>
  );
}
