"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/contactform";
import Seo from "../components/Seo";
import Script from "next/script";
import BreadCrumbs from '@/app/components/BreadCrumbs'
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";

export default function Industry() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://www.rialtes.com/industry/",
    "name": "Industries — Rialtes",
    "description": "Industries we serve — Rialtes provides Salesforce, SAP and AI-driven solutions tailored for multiple industries including Real Estate, Life Sciences, Healthcare, Manufacturing, Retail, Finance and more.",
    "publisher": {
      "@type": "Organization",
      "name": "Rialtes",
      "url": "https://www.rialtes.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": { "@type": "WebPage", "name": "Real Estate", "url": "https://www.rialtes.com/industry/real-estate-property-management/" }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": { "@type": "WebPage", "name": "Life Sciences", "url": "https://www.rialtes.com/industry/life-sciences-digital-transformation/" }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": { "@type": "WebPage", "name": "Healthcare / MedTech", "url": "https://www.rialtes.com/industry/life-sciences/healthcare-medtech-patient-care" }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": { "@type": "WebPage", "name": "Pharma & Biotech", "url": "https://www.rialtes.com/industry/life-sciences/pharma-biotech-digital-transformation/" }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": { "@type": "WebPage", "name": "Medical Devices", "url": "https://www.rialtes.com/industry/life-sciences/medical-devices-it-solutions/" }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": { "@type": "WebPage", "name": "Home Health", "url": "https://www.rialtes.com/industry/life-sciences/home-health-ai-tech-solutions" }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": { "@type": "WebPage", "name": "Semiconductor", "url": "https://www.rialtes.com/industry/hitech-semiconductor-ai-it-solutions" }
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": { "@type": "WebPage", "name": "Manufacturing", "url": "https://www.rialtes.com/industry/manufacturing-cloud-erp" }
        },
        {
          "@type": "ListItem",
          "position": 9,
          "item": { "@type": "WebPage", "name": "Education", "url": "https://www.rialtes.com/industry/education-cloud-it-solutions" }
        },
        {
          "@type": "ListItem",
          "position": 10,
          "item": { "@type": "WebPage", "name": "Automotive", "url": "https://www.rialtes.com/industry/digital-transformation-in-automotive-industry" }
        },
        {
          "@type": "ListItem",
          "position": 11,
          "item": { "@type": "WebPage", "name": "Travel & Hospitality", "url": "https://www.rialtes.com/industry/travel-hospitality-it-solutions" }
        },
        {
          "@type": "ListItem",
          "position": 12,
          "item": { "@type": "WebPage", "name": "Retail", "url": "https://www.rialtes.com/industry/retail-industry-digital-transformation" }
        },
        {
          "@type": "ListItem",
          "position": 13,
          "item": { "@type": "WebPage", "name": "Non-Profit", "url": "https://www.rialtes.com/industry/nonprofit-digital-transformation-it-solutions" }
        },
        {
          "@type": "ListItem",
          "position": 14,
          "item": { "@type": "WebPage", "name": "Finance", "url": "https://www.rialtes.com/industry/finance-industry-digital-transformation-services-solutions" }
        }
      ]
    }
  }
  const growLatestServices = [
    {
      id: 3,
      image: "/images/industry/real-estate.webp",
      title: "Real Estate",
      description: "Expand your real estate portfolio with cloud-based property management software. Helping realtors, property owners, and brokers navigate through client details, properties, and rental agreements.",
      knowMore: '/industry/real-estate-property-management'

    },
    {
      id: 11,
      image: "/images/industry/lifescience.webp",
      title: "Life Sciences",
      description: "Unify research, clinical, and commercial operations on a connected digital foundation. With Salesforce Life Sciences Cloud and AI-driven analytics, Rialtes helps organizations enhance compliance, accelerate innovation, and improve patient outcomes.",
      knowMore: '/industry/life-sciences-digital-transformation'

    },

    {
      id: 1,
      image: "/images/industry/healthcare.webp",
      title: "Healthcare",
      description: "Salesforce healthcare CRM to help medical service providers seamlessly integrate hospital software, harmonize patient data from various channels",
      knowMore: '/industry/life-sciences/healthcare-medtech-patient-care'

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
      id: 12,
      image: "/images/industry/home-health.webp",
      title: "Home Health",
      description: "Empower caregivers, clinicians, and coordinators with digital tools that enhance care delivery. Rialtes brings automation, real-time scheduling, and patient engagement solutions that simplify operations and improve quality of care at home.",
      knowMore: '/industry/life-sciences/home-health-ai-tech-solutions'

    },
    {
      id: 4,
      image: "/images/industry/semi-conductor/Mobile/hero-banner-mob.webp",
      title: "Semiconductor",
      description: "Best-in-class tech services spanning supply chain integration, demand planning, and more. Meet your growing demands without compromising on performance with tailored hi-tech software solutions.",
      knowMore: '/industry/hitech-semiconductor-ai-it-solutions'

    },

    {
      id: 2,
      image: "/images/industry/manufacturing.webp",
      title: "Manufacturing",
      description: "Manufacturing technology expertise at your fingertips. Streamline operations, sales processes, and supply chain management in manufacturing companies.",
      knowMore: '/industry/manufacturing-cloud-erp'

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
      id: 10,
      image: "/images/industry/travel-transporation/TTH.webp",
      title: "Travel and Hospitality",
      description: "Rialtes enables TTH companies to elevate every journey—from check-in to checkout, booking to delivery. With our expertise in AI, cloud, and enterprise platforms, we help you modernize operations, personalize experiences, and maximize business impact.",
      knowMore: '/industry/travel-hospitality-it-solutions'

    },
    {
      id: 9,
      image: "/images/industry/travel-transporation/retail+.webp",
      title: "Retail",
      description: "Navigate retail challenges with confidence. Rialtes Retail+ combines strategic insight with robust execution, enabling B2B and B2C retailers to modernize, personalize, and grow. From planning to post-launch support, we drive transformation every step of the way.",
      knowMore: '/industry/retail-industry-digital-transformation'

    },
    {
      id: 13,
      image: "/images/industry/nonprofit.webp",
      title: "Non-Profit",
      description: "Drive greater mission impact through connected data and donor engagement. Our Salesforce Nonprofit Cloud expertise helps organizations streamline fundraising, volunteer management, and community programs with measurable transparency.",
      knowMore: '/industry/nonprofit-digital-transformation-it-solutions'

    },
    {
      id: 14,
      image: "/images/finance-img/mobile/finance-mobile.webp",
      title: "Finance",
      description: "Modernize financial operations with AI-enabled insights and automation. From banking to insurance, Rialtes helps financial institutions simplify compliance, strengthen customer relationships, and deliver personalized financial experiences across every channel.",
      knowMore: '/industry/finance-industry-digital-transformation-services-solutions'

    },

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
      <p className="text-[#0092E0] font-bold cursor-pointer mt-auto 4xl:text-[20px] xl:text-[18px] text-[16px]">
        <Link href={services?.knowMore} aria-label={services.title}>Know More</Link>
      </p>
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
        canonical="https://www.rialtes.com/industry"
      />
      <Script
        id="schema-industry"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

       {/* breadcrumb schema */}
            <BreadcrumbSchema
              currPage="Industry"
            />
      {/* herosection */}
      <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px] ">
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
              <h3 className="text-[18px] md:text-[24px] font-bold ">
                Industries
              </h3>
              <h2 className="text-[26px] leading-tight md:text-[32px]  4xl:text-[60px] 2xl:text-[48px] xl:text-[40px]  mt-[11.5px] md:mt-[28.5px] ">
                Transform how <br /> you engage with <br /> your clients
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            </div>
          </div>
        </div>
      </section>
      <section className="custom-container mt-5">
         {/* breadcrumb */}
        <BreadCrumbs currPage="Industry" />

        <div className="grid lg:grid-cols-12 grid-cols-1  gap-y-[20px] lg:mt-[111px] mt-[45px]">
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
      <div className="custom-container lg:mt-[103px] mt-[60px]">
        <section className=" bg-white">
          <GrowServices />
        </section>
      </div>
      {/* Contact Form Section */}
      <div className="custom-container xl:py-[84px] py-[60px]">
        <ContactForm title={'Ready to take the next step? Let’s kick off your journey'} className={'max-w-4xl'} />
      </div>
    </div>
  );
}
