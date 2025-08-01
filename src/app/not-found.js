"use client";

import Image from "next/image";
import Link from "next/link";
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
        <h1 className="4xl:text-[81px] xl:text-[61px] text-[41px]">OOPS!</h1>
        <h2 className="4xl:text-[48px] xl:text-[38px] text-[#0A6BB8] mb-4 font-medium text-[18px]">PAGE NOT FOUND</h2>
        <p className="4xl:text-[22px] xl:text-[20px] text-[16px] mb-6">
          Sorry, the page you’re looking for doesn’t exist. If you think something is broken, report a problem.
        </p>
       
          <button  onClick={() => router.push('/')} className="bg-[#134874] text-white text-sm md:text-base font-semibold mt-5 py-3 px-6 md:px-8 border border-[#134874] hover:bg-white hover:text-[#134874] transition duration-300">
            Return To Home
          </button>
       
      </div>
    </div>
  );
}
