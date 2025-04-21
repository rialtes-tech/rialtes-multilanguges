"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/contactform";

export default function Industry() {

  const growLatestServices = [
    {
      id: 1,
      image: "/images/industry/healthcare.webp",
      title: "Healthcare",
      description: "Salesforce healthcare CRM to help medical service providers seamlessly integrate hospital software, harmonize patient data from various channels",
      knowMore: '/industry/life-sciences/healthcare-medtech-patient-care'

    },
    {
      id: 2,
      image: "/images/industry/manufacturing.webp",
      title: "Manufacturing",
      description: "Manufacturing technology expertise at your fingertips. Streamline operations, sales processes, and supply chain management in manufacturing companies.",
      knowMore: '/industry/manufacturing-cloud-erp'

    },
    {
      id: 3,
      image: "/images/industry/real-estate.webp",
      title: "Real Estate",
      description: "Expand your real estate portfolio with cloud-based property management software. Helping realtors, property owners, and brokers navigate through client details, properties, and rental agreements.",
      knowMore: '/industry/real-estate-property-management'

    },
    {
      id: 4,
      image: "/images/industry/hi-tech.webp",
      title: "Hi-Tech",
      description: "Best-in-class tech services spanning supply chain integration, demand planning, and more. Meet your growing demands without compromising on performance with tailored hi-tech software solutions.",
      knowMore: '/industry/hitech-semiconductor'

    },
    // {
    //   id: 5,
    //   image: "/images/industry/finance.webp",
    //   title: "Finance",
    //   description: "From banking payment solutions to financial services automation, our dedicated team helps you achieve operational excellence and build customer trust.",
    //   knowMore: '/salesforce-consulting/salesforce-manage'

    // },
    // {
    //   id: 6,
    //   image: "/images/industry/public-sector.webp",
    //   title: "Public Sector",
    //   description: "For critical public sector projects, we deliver the finest in private sector technology—from AI and automation to cloud solutions. With proven methodologies, trusted expertise, and cutting-edge software, we’re shaping the future of the public sector.",
    //   knowMore: '/salesforce-consulting/salesforce-manage'

    // },
  ];
  const GrowServicesCard = ({ services }) => (
    <div className="w-full h-full">
      <div className="relative overflow-hidden">
        <Image
          className="w-full transition-transform duration-300 hover:scale-105"
          src={services.image}
          alt={services.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="flex flex-col pt-4">
        <h3 className="md:mb-[15px] font-semibold h3-bold line-clamp-2 min-h-[60px]">{services.title}</h3>
      </div>
      <p className='md:mb-[15px] mb-3'>{services.description}</p>
      <h5 className="text-[#0092E0] font-bold cursor-pointer">
                                        <Link href={services?.knowMore}>Know More</Link>
                                    </h5>
    </div>
  );
  const GrowServices = () => {
    return (
      <div className="container mx-auto text-black lg:pr-20 md:pr-10 pr-6">
        <h2 className="pb-10 text-black">Industries we serve</h2>
        {Array.from({ length: Math.ceil(growLatestServices.length / 3) }).map((_, rowIdx) => {
  const rowItems = growLatestServices.slice(rowIdx * 3, rowIdx * 3 + 3);
  return (
    <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
      {rowItems.map((services) => (
        <GrowServicesCard key={services.id} services={services} />
      ))}
    </div>
  );
})}
      </div>
    );
  };
  return (
    <div className="min-h-screen">
      <Head>
        <title>Industry | Rialtes</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/industry/industry-header.webp"
          alt="Webinar Header"
          fill
          style={{ objectFit: "cover", objectPosition: "70% 20%" }}
          priority
        />
        <div
          className="
        container h-full relative
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
        >
          <div className="container mx-auto h-full flex flex-col justify-center">
            <h3 className="text-white text-[300] font-medium mb-2">
              Industries
            </h3>
            <h2 className="text-[#ffffff] max-w-sm">
              Transform how you engage with your clients
            </h2>
          </div>
        </div>
      </section>

      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className="pt-16 bg-white">
          <div className="flex flex-col md:flex-row xl:gap-8 mb-5 max-w-7xl">
            <div className="w-full md:w-1/3 mr-6">
              <h1 className="text-[#000000] mb-4 ">
                Different Industries, Different Mindsets
              </h1>
            </div>
            <div className="w-full md:w-1/2">
              <p className="mb-6">
                We specialize in various industries, enabling us to offer
                comprehensive solutions tailored to meet your specific industry
                needs. With our expertise and support, clients can respond to
                evolving industry conditions and leverage emerging trends for
                their business.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div
        className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
      >
        <section className=" bg-white">
          <GrowServices />
        </section>
      </div>

{/* Contact Form Section */}
      <div
        className="mt-5 mb-20
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]
        text-black py-6"
      >
        <ContactForm title={'Take the next step to operational excellence with us.'} className={'max-w-4xl'} />
      </div>
    </div>
  );
}
