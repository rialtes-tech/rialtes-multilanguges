"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/contactform";
import Seo from "../components/Seo";

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
      image: "/images/industry/semi-conductor/Mobile/hero-banner-mob.webp",
      title: "Semiconductor",
      description: "Best-in-class tech services spanning supply chain integration, demand planning, and more. Meet your growing demands without compromising on performance with tailored hi-tech software solutions.",
      knowMore: '/industry/hitech-semiconductor-ai-it-solutions'

    },

    {
      id: 5,
      image: "/images/pharma/Header Pharma.webp",
      title: "Pharma & Biotech",
      description: "Rialtes leverages certified expertise in Salesforce Life Sciences Cloud and SAP S/4HANA to help pharma and biotech leaders harness AI, machine learning, and automation for integrated clinical, medical, and commercial operations.",
      knowMore: '/industry/life-sciences/pharma-biotech-digital-transformation'

    },
    {
      id: 6,
      image: "/images/medical/medical-header.webp",
      title: "Medical Devices",
      description: "Helping medical device companies turn compliance into a competitive advantage by combining strategy, technology, and patient-centric design to ensure seamless patient journeys from device prescription to outcome tracking.",
      knowMore: '/industry/life-sciences/medical-devices-it-solutions'

    },
    {
      id: 7,
      image: "/images/education/Group 483.webp",
      title: "Education",
      description: "We focus on addressing key challenges in education, like fragmented student engagement and inefficient recruitment. By leveraging strategic advisory along with SAP and Salesforce technology, we help institutions streamline operations and enhance the student experience",
      knowMore: '/industry/education-cloud-it-solutions'

    },
    {
      id: 8,
      image: "/images/industry/auto-industry/Mobile/auto-industry-banner-mob.webp",
      title: "Automotive",
      description: "Address the complex challenges faced by the automotive sector, particularly the fragmentation across the customer lifecycle from prospecting to ownership. Leveraging SAP and Salesforce Industry Cloud solutions, we design tailored, scalable systems that streamline operations.",
      knowMore: '/industry/digital-transformation-in-automotive-industry'

    },
    {
      id: 9,
      image: "/images/industry/travel-transporation/retail+.webp",
      title: "Retail",
      description: "Navigate retail challenges with confidence. Rialtes Retail+ combines strategic insight with robust execution, enabling B2B and B2C retailers to modernize, personalize, and grow. From planning to post-launch support, we drive transformation every step of the way.",
      knowMore: '/industry/retail-industry-digital-transformation'

    },
    {
      id: 10,
      image: "/images/industry/travel-transporation/TTH.webp",
      title: "Travel and Hospitality",
      description: "Rialtes enables TTH companies to elevate every journey—from check-in to checkout, booking to delivery. With our expertise in AI, cloud, and enterprise platforms, we help you modernize operations, personalize experiences, and maximize business impact.",
      knowMore: '/industry/travel-hospitality-it-solutions'

    }
  ];
  const GrowServicesCard = ({ services }) => (
    <div className="w-full h-full flex flex-col">
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
      <div className="flex flex-col mt-[23px]">
        <h3 className="lg:text-[30px] text-[20px] font-semibold leading-tight">{services.title}</h3>
      </div>
      <p className='lg:text-[20px] lg:leading-[30px] mt-[25px] mb-[33px]'>{services.description}</p>
      <h5 className="text-[#0092E0] font-bold cursor-pointer mt-auto text-[20px]">
        <Link href={services?.knowMore}>Know More</Link>
      </h5>
    </div>
  );
  const GrowServices = () => {
    return (
      <div>
        <h2 className="xl:mb-[-20px] xl:text-[60px] text-[26px] mb-[40px] text-black">
          Industries we serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[40px] gap-y-[60px] lg:mt-[78px]">
          {growLatestServices.map((services) => (
            <GrowServicesCard key={services.id} services={services} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">

      <Seo
        title="Salesforce & SAP Solutions by Industry | Rialtes"
        description="Salesforce and SAP industry solutions that drive measurable outcomes, streamline operations, and unlock innovation in every sector we serve."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/industry/"
      />

      {/* herosection */}
      <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/industry/industry-header.webp"
            alt="desktop banner"
            fill
            style={{ objectFit: "cover", objectPosition: "55% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />

        </div>

        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/industry/industry-header.webp"
            alt="mobile banner"
            fill
            style={{ objectFit: "cover", objectPosition: "5% 20%" }}
            priority
          />
        </div>

        <div className="relative h-full custom-container flex items-center text-[#ffffff]">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12">
              <h3 className="text-[18px] md:text-[24px] font-bold max-lg:w-[60%] md:w-[50%] lg:w-full">
                Industries
              </h3>
              <h2 className="text-[26px] leading-[38px] md:text-[36px] md:leading-[50px] lg:text-[60px] lg:leading-[73px] mt-[11.5px] md:mt-[28.5px] max-md:w-[55%]">
                Transform how you<br /> engage with <br /> your clients
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            </div>
          </div>
        </div>
      </section>

      <section
        className="custom-container lg:mt-[111px] mt-[45px]"
      >
        <div className="grid lg:grid-cols-12 grid-cols-1  gap-y-[20px]">
          <div className="2xl:col-span-6 xl:col-span-7 col-span-12">
            <h1 className="text-[#000000] xl:text-[60px] text-[26px] leading-tight">
              Different Industries, Different Mindsets
            </h1>
          </div>
          <div className="2xl:col-span-6 xl:col-span-5 col-span-12">
            <p className="xl:text-[22px] text-[16px]">
              We specialize in various industries, enabling us to offer comprehensive solutions tailored to meet your specific industry needs. With our expertise and support, clients can respond to evolving industry conditions and leverage emerging trends for their business.
            </p>
          </div>
        </div>
      </section>


      <div
        className="custom-container lg:mt-[103px] mt-[60px]"
      >
        <section className=" bg-white">
          <GrowServices />
        </section>
      </div>

      {/* Contact Form Section */}
      <div
        className="custom-container xl:py-[84px] py-[60px]"
      >
        <ContactForm title={'Ready to take the next step? Let’s kick off your journey'} className={'max-w-4xl'} />
      </div>
    </div>
  );
}
