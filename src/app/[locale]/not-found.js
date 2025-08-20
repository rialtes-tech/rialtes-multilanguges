"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter()
  return (
    <div className="grid xl:grid-cols-12  px-4 pt-10 custom-container xl:gap-20">
      <div className="xl:col-span-7 col-span-12">
        <div className="xl:block hidden">
          <Image
            src="/images/not-found/desk.webp"
            alt="404 Error"
            className="w-full h-auto object-contain"
            priority
            width={0}
            height={0}
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/not-found/404-mobile.webp"
            alt="404 Error"
            className="w-full h-auto object-contain"
            priority
            width={0}
            height={0}
          />
        </div>
      </div>

      <div className="xl:col-span-5 col-span-12 text-center xl:text-left  !not-found-mt mb-10 xl:mb-0">
        {/* <h1 className="4xl:text-[81px] xl:text-[61px] text-[41px]">OOPS!</h1> */}
        <h1 className="4xl:text-[48px] xl:text-[38px] text-[#0A6BB8] mb-4 font-medium text-[18px] mt-16 md:text-[30px]">PAGE NOT FOUND</h1>
        <p className="4xl:text-[22px] xl:text-[20px] text-[16px] mb-6 md:text-[20px]">
          Looks like this page glitched out of existence.
But don’t worry — our consultants never do.
        </p>
       <div className="flex gap-10 justify-center xl:justify-start">
         <button  onClick={() => router.push('https://www.rialtes.com/?utm_source=internal&utm_medium=404_error')} className="bg-[#134874] text-white text-sm md:text-base font-semibold mt-5 py-3 px-6 md:px-8 border border-[#134874] hover:bg-white hover:text-[#134874] transition duration-300">
            Home
          </button>
           {/* <button  onClick={() => router.push('/insights')} className="bg-[#134874] text-white text-sm md:text-base font-semibold mt-5 py-3 px-6 md:px-8 border border-[#134874] hover:bg-white hover:text-[#134874] transition duration-300">
            Insights
          </button> */}
           <button  onClick={() => router.push('https://www.rialtes.com/contact-us/?utm_source=internal&utm_medium=404_error')} className="bg-[#134874] text-white text-sm md:text-base font-semibold mt-5 py-3 px-6 md:px-8 border border-[#134874] hover:bg-white hover:text-[#134874] transition duration-300">
           Contact Us
          </button>
       </div>
         
       
      </div>
    </div>
  );
}
