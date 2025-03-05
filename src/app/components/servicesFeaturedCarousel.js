"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function servicesFeaturedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      url: "/case-study-3",
      imgSrc: "/images/insights/manufacturing-case-study.webp",
      title: "Streamlined DevOps using Copado and Salesforce",
      description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
    },
    {
      id: 2,
      url: "/case-study-2",
      imgSrc: "/images/insights/real-estate-case-study.webp",
      title: "RealForce Banking Module - ACH",
      description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
    },
    {
      id: 3,
      url: "/case-study-1",
      imgSrc: "/images/insights/healthcare-case-study-2.webp",
      title: "Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP",
      description: "A global medical technology company that develops and manufactures innovative products",
    },
    /*{
      id: 4,
      imgSrc: "/images/case-studies/case-study-4_thumb.webp",
      title: "Omnichannel case management with Salesforce Service Cloud",
      description: "A leading provider of high-performance analog semiconductors for wireless and wired connectivity.",
    },
     {
      id: 5,
      imgSrc: "/images/case-studies/case-study-5_thumb.webp",
      title: "A public housing in US",
      description: "A Public housing authority responsible for managing affordable housing programs across multiple counties in their zone.",
    },
    {
      id: 6,
      imgSrc: "/images/case-studies/case-study-6_thumb.webp",
      title: "Yardi Managed Services",
      description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
    },
    {
      id: 7,
      imgSrc: "/images/case-studies/case-study-7_thumb.webp",
      title: "Streamlined DevOps using Copado and Salesforce",
      description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
    },
    {
      id: 8,
      imgSrc: "/images/case-studies/case-study-8_thumb.webp",
      title: "RealForce Banking Module - ACH",
      description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
    }, */
    // Add more case study objects as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlideIndex = (currentSlide + 1) % slides.length;

  return (
    <section className="relative py-10">
      <div className="container mx-auto pl-6">
        <div className="flex flex-row justify-between md:mr-24 mr-0 mb-6">
          <h2 className="text-black mb-6 mr-4 lg:text-4xl sm:text-2xl md:max-w-lg">Get Inspired By Our Latest Customer Success Stories, Industry Insight, And More</h2>
          <div className="flex">
            <button className="p-2 mr-2 group transition-all duration-300" onClick={prevSlide}>
              <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#707070" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#C3C3C3]">
                <path d="M3 7.5L11 0V15L3 7.5Z" fill="none" className="transition-all duration-300 group-hover:fill-[#C3C3C3] hover:fill-[#C3C3C3]" />
              </svg>
            </button>
            <button className="p-2 group transition-all duration-300" onClick={nextSlide}>
              <svg width="24px" height="24px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#707070" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#C3C3C3]">
                <path d="M12 7.5L4 0V15L12 7.5Z" fill="none" className="transition-all duration-300 group-hover:fill-[#C3C3C3]" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden flex">
          <div className="flex sm:flex-row flex-col sm:basis-[95%] basis-full sm:mr-12 group">
            <div className="basis-full sm:basis-2/3 lg:basis-4/3">
            <Link href={slides[currentSlide].url}>
              <Image
                src={slides[currentSlide].imgSrc}
                alt={slides[currentSlide].title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
              </Link>
            </div>
            <div className="flex flex-col text-black basis-full group-hover:bg-[#F0F0F0] bg-white sm:basis-2/3 py-6 sm:py-4 lg:py-10 sm:px-10 lg:px-16 px-6">
            <Link href={slides[currentSlide].url}><h3 className="pb-[10px] sm:pb-[15px] lg:pb-[20px] h3-bold">{slides[currentSlide].title}</h3></Link>
              <p className="pb-6">{slides[currentSlide].description}</p>
              <Link href={slides[currentSlide].url} className="font-medium text-[#0092E0]">Know More</Link>
            </div>
          </div>
          <div className="sm:basis-[5%] basis-[0%] basis-none">
            <Image
              src={slides[nextSlideIndex].imgSrc}
              alt={slides[nextSlideIndex].title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              priority
            />
          </div>

        </div>
        <div className="flex justify-start mt-6 sm:mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-1 md:px-8 px-4 mr-3 ${currentSlide === index ? 'bg-[#134874]' : 'bg-[#D1D1D1]'}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}