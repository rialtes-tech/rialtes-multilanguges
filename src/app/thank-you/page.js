"use client";
import Image from "next/image";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="grid xl:grid-cols-12 grid-cols-1 w-full gap-0 px-0 pt-10 4xl:pt-20 custom-container xl:pr-0">

      {/* LEFT CONTENT */}
      <div className="xl:col-span-6 flex flex-col">

        <h2
          className="text-[#134874] font-medium leading-tight
          4xl:text-[45px] 2xl:text-[40px] xl:text-[32px] md:text-[30px] text-[26px]"
        >
          Thank you for contacting Rialtes!
        </h2>

        {/* Divider */}
        <div className="w-24 h-[3px] bg-gray-300 mt-4 mb-6"></div>

        {/* Text */}
        <p className="text-[18px] md:text-[20px] xl:text-[22px] text-black leading-tight mt-10 max-w-[500px]">
          Our expert will respond to you shortly via your phone or email address.
        </p>

        {/* Follow Us */}
        <p className="text-[#134874] mt-12 text-[20px] md:text-[22px] xl:text-[24px] font-medium">
          For more updates follow us on:
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-8 ml-[-20px] mt-8">
          <Link href="https://www.instagram.com/rialtes_technologies/" title="Instagram">
            <Image className="h-12 w-16" src="/images/homepage/Asset3.svg" alt="instagram" height={100} width={100} />
          </Link>

          <Link href="https://www.youtube.com/@rialtes" title="YouTube">
            <Image className="h-12 w-16" src="/images/homepage/Asset4.svg" alt="youtube" height={100} width={100} />
          </Link>

          <Link href="https://www.linkedin.com/company/rialtes-technologies-llc/" title="LinkedIn">
            <Image className="h-12 w-16" src="/images/homepage/Asset5.svg" alt="linkedin" height={100} width={100} />
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE + CLOSE BUTTON */}
      <div className="xl:col-span-6 flex justify-end relative">

        <div className="w-full max-w-[600px] relative h-[500px]">

          {/* Background Image */}
          <Image
            src="/images/homepage/logoback.webp"
            alt="Background Pattern"
            width={800}
            height={800}
            className="w-full h-auto object-contain"
          />

          {/* Close Button */}
          <Link href="/" className="absolute bottom-[3rem] xl:left-10">
            <button
              className="bg-[#134874] text-white font-medium py-3 px-10 rounded-sm
              hover:bg-white hover:text-[#134874] border border-[#134874]
              transition duration-300"
            >
              Close
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}
