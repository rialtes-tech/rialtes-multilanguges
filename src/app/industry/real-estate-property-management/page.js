"use client";
// pages/success-factors.js
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import LearnMore from "@/app/components/learnMore";
import ExploreMoreCarousel from '../../components/servicesExploreMoreCarousel';
import CaseStudyIndivisual from '../../components/caseStudyIndivisual';
import Seo from "@/app/components/Seo";
import { HeroSection } from "@/app/components/herosection";
const slides = [
  {
    id: 1,
    imgSrc: "/images/case-studies/case-study-2_thumb_n.webp",
    title: "RealForce Banking Module - ACH",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
    url: "/insights/case-studies/realForce-banking-module-ach",
  },
  {
    id: 2,
    url: "/insights/case-studies/yardi-managed-services",
    imgSrc: "/images/case-studies/case-study-6_thumb.webp",
    title: "Yardi Managed Services",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
  },



];

const latestServices = [
  {
    id: 1,
    title: "AI Leasing",
    description: "AI-powered leasing assistants help you serve clients faster while saving money and resources. We can set you up with AI leasing software that’s both cost-effective and comprehensive.",
  },
  {
    id: 2,
    title: "AI Maintenance",
    description: "Filter and triage maintenance requests with simple and intelligent software tools. We offer AI maintenance technology that can help you eliminate bottlenecks by automatically routing work orders and tracking task completion."
  },
  {
    id: 3,
    title: "Property Accounting",
    description: "Streamline your accounting process with property management accounting software solutions- featuring AI integrations, detailed financial report automation, and digital payments.",
  },
  {
    id: 4,
    title: "Marketing",
    description: "Our CRM solutions for real estate simplify marketing operations, from listing conversions to syndication and marketing collateral management.",
  },
  {
    id: 5,
    title: "Integrations",
    description: "Our experts can assist with all your real estate software integration requirements. We will work with you to ensure your new property management solutions work in harmony with and even maximize the value of your existing systems.",
  },
  {
    id: 6,
    title: "Real Estate Outsourcing",
    description: "Outsourcing your property management and accounting processes to a trusted partner could save you countless hours of administrative work. Our real estate outsourcing services include on-site, offsite, and hybrid models.",
  },

];

const ServicesCard = ({ services }) => (
  <div className="h-full flex flex-col border border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
    <div className="flex-grow flex flex-col">
      <h3 className="mb-[15px] md:mb-[25px] text-[#1F3F69]">{services.title}</h3>
      <p className='md:mb-[15px] mb-0'>{services.description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="text-black 2xl:pr-70 xl:pr-35 md:pr-8 pr-0 mt-20 ">
      <h2 className="text-black mb-6">Find the right property management software online with Rialtes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 mt-10 w-full">
        {latestServices.map((services) => (
          <ServicesCard key={services.id} services={services} />
        ))}
      </div>
    </div>
  );
};

const growLatestServices = [
  {
    id: 1,
    image: "/images/industry/real-estate/AdobeStock_493889513 copy.webp",
    title: "Centralized Operations: The One-Stop Solution",
    description: "Imagine managing all your property data, from rental agreements to maintenance schedules in one place. RealForce provides centralized operations for a streamlined management experience via our online rental property management efficiencies.",
    productsDetails: [
      'Automatic agreement generation',
      'Centralized Collections management',
      'SMART Monthly Billing ',
    ],

  },
  {
    id: 2,
    image: "/images/industry/real-estate/AdobeStock_519184506 copy.webp",
    title: "Multi-Platform Accessibility: Manage On-The-Go",
    description: "Our online property management system ensures you can access your management dashboard wherever you are, making us a leader among property management software companies in the USA.",
    productsDetails: [
      'Mobile reports and dashboards',
      'Chat with property groups',
      'Mobile approvals',
    ],

  },
  {
    id: 3,
    image: "/images/industry/real-estate/AdobeStock_921769044 copy.webp",
    title: "Comprehensive Analytics: Make Informed Decisions",
    description: "We stand out among top property management software companies by providing the #1 analytics platform to improve your numbers, from revenue to vacancies.",
    productsDetails: [
      'Leverage existing dashboards',
      'Use data to make decisions',
      'Drill down to individual records ',
    ],

  },
  {
    id: 4,
    image: "/images/industry/real-estate/AdobeStock_1029847777 copy.webp",
    title: "Financial Clarity: Accounting Made Easy",
    description: "Our software is the go-to accounting software for realtors looking for detailed financial reports and invoicing capabilities. Simplify your budgeting process with the world’s #1 cloud platform.",

    productsDetails: [
      'Electronic Invoice Processing',
      'AI Abstraction Automation',
      'Digital Payments in +135 currencies',
    ],

  }
];

const GrowServicesCard = ({ services }) => (
  <div className=" h-full">
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
      <h3 className="mb-[10px] md:mb-[15px] font-semibold h3-bold line-clamp-2 min-h-[60px]">{services.title}</h3>
    </div>
    <p>{services.description}</p>
    <ul className="mt-5">
      {services?.productsDetails?.map((details, index) => {
        return (
          <li
            key={index}
            className="font-medium flex mt-3 items-start before:content-['•'] before:text-[#0092E0] before:text-4xl before:font-bold before:mr-2  before:leading-[0.5]"
          >
            {details}
          </li>

        )
      })}
    </ul>
    <LearnMore className="w-[30%]" />
  </div>
);

const GrowServices = () => {
  return (
    <div className="text-black lg:pr-20 md:pr-10   pr-6 ">
      <h2 className="pb-10 text-black xl:w-1/2 w-fill">Enhance your real estate operations with our customizable service offerings</h2>
      <p className="xl:w-1/2 w-full">Rialtes helps real estate brokerages and property management companies achieve unparalleled excellence through technology and strategic guidance. From accounting software to real estate developers to mobile-friendly CRM, our property management solutions can be customized to fit your organization’s unique requirements.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 md:gap-10 lg:gap-20 mt-20">
        {growLatestServices.map((services) => (
          <GrowServicesCard key={services.id} services={services} />
        ))}
      </div>

    </div>
  );
};


export default function Page() {

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Revolutionizing Property Management for Real Estate Industry | Rialtes"
        description="The future of property management for real estate industry is here. Automate leasing, reduce vacancies, and improve ROI with purpose-built software."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/industry/real-estate-property-management/"
      />

      <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
        {/* Desktop Image */}
        <div className="hidden lg:block">
          <Image
            src="/images/industry/real-estate/AdobeStock_907006023_Preview copy.webp"
            alt="desktop banner"
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Mobile Image */}
        <div className="block lg:hidden">
          <Image
            src="/images/industry/real-estate/real-estate-mob.webp"
            alt="mobile banner"
            fill
            priority
          />
        </div>

        <div className="relative h-full custom-container flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12 xl:col-span-7 lg:col-span-9">
              <h3 className="text-white text-[18px] md:text-[24px] font-bold">
               REAL ESTATE
              </h3>
              <h2 className="text-white text-[26px] leading-[38px] md:text-[36px] md:leading-[50px] lg:text-[60px] lg:leading-[73px] w-[90%] lg:w-[92%] mt-[11.5px] md:mt-[28.5px]">
                Manage real estate processes with cloud-based property management software
              </h2>
            </div>

            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            </div>
          </div>
        </div>
      </section>


      <section
        className="custom-container "
      >

        <div className="py-10 bg-white">
          <div className="">
            <div className="flex flex-col xl:flex-row py-6 xl:gap-20">
              <div className="flex flex-col w-full xl:max-w-lg xl:mr-4 xl:mb-0 mb-4 ">
                <h1 className="text-black md:pb-0 pb-4">Affordable property management software for your real estate operations</h1>
              </div>
              <div className="flex flex-col w-full ">
                <p className="text-[#000000]">The real estate market is dynamic and unpredictable – but your business doesn’t have to be. With the right tools and strategies, real estate companies can see consistent growth year over year while exceeding client expectations.
                </p>
                <p className="mt-5">At Rialtes, we provide top property management software designed to streamline your daily operations. Exelona offers an all-in-one solution with features tailored for real estate professionals, investors, property managers, and more. Whether you’re managing multiple residential rentals or balancing the demands of commercial investment spaces, Rialtes has the tools to support you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* We Help You Grow and Thrive */}
      <div
        className="
   custom-container "
      >
        <section className="pb-16 xl:pt-0 bg-white">
          <GrowServices />
        </section>
      </div>

      <div className="bg-[#EDEDED]">
        <div
          className="custom-container "
        >
          <section className="pb-16  pt-10">
            <h2>The #1 CRM for real estate business</h2>

            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:mt-16 mt-5 xl:gap-20 gap-10">
              <div>
                <p>Built on Salesforce, the world’s #1 CRM platform, RealForce centralizes your property management functions and transforms the way you serve your clients. Whether you’re a small brokerage firm or a national property management group, your business deserves the best property management software on the market.</p>
              </div>
              <div>
                <h4 className="text-[#0092E0]">RealForce Platform</h4>
                <p className="mt-5"> Our flagship property management platform, built on Salesforce and designed for your real ERP (Property Cloud) and CRM(Experience Cloud) functions.</p>
              </div>
              <div>
                <h4 className="text-[#0092E0]">RealPay </h4>
                <p className="mt-5">RealPay is an integrated payment gateway that supports payments across most North American banks and 135+ currencies. Residents can easily make payments and check</p>
              </div>
            </div>
          </section>
        </div>
      </div>


      {/* Latest Services Section */}
      <div
        className="
      custom-container "
      >
        <section className="pb-16 bg-white">

          <Services />
          <LearnMore />

        </section>
      </div>

      < div className="bg-[#F5F5F5] py-6" >
        <div
          className="
   custom-container md:!pr-0"
        >
          <CaseStudyIndivisual slides={slides} />

        </div>
      </div>



      < div className="bg-[#808080] py-6" >
        <div
          className="
     custom-container md:!pr-0"
        >
          <ExploreMoreCarousel />

        </div>
      </div >
      {/* Contact Form */}
      < div
        className="mb-20 mt-20
 custom-container 
  text-black py-6"
      >
        <ContactForm title={'Take the next step to operational excellence with us.'} className={"max-w-4xl"} />

      </div >


    </div >
  );
}