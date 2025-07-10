"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import LearnMore from "@/app/components/learnMore";
import ExploreMoreCarousel from '../../components/servicesExploreMoreCarousel';
import CaseStudyIndivisual from '../../components/caseStudyIndivisual';
import Seo from "@/app/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/components/unorderedList";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Cloud-Based Property Management & Real Estate IT Solutions",
  "description": "Rialtes delivers cloud-based property management software and digital transformation services for real estate brokerages, property managers, and investors. Our Exelona platform and RealForce CRM, built on Salesforce, streamline operations, accounting, leasing, maintenance, and AI-powered decision-making.",
  "provider": {
    "@type": "Organization",
    "name": "Rialtes",
    "url": "https://www.rialtes.com",
    "logo": "https://www.rialtes.com/images/homepage/logo.svg",
    "sameAs": [
      "https://www.linkedin.com/company/rialtes-technologies-llc/",
      "https://www.youtube.com/@rialtes"
    ]
  },
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "India" },
    { "@type": "Country", "name": "Singapore" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Real Estate IT Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "RealForce Property Management Platform",
          "description": "Built on Salesforce, RealForce offers ERP and CRM capabilities for residential and commercial property management with mobile access, automation, and reporting."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "RealPay Payment Gateway",
          "description": "A multi-currency, bank-integrated payment solution supporting over 135 currencies and offering digital rent collection for tenants and property managers."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Leasing Assistant",
          "description": "AI-powered leasing assistant software for faster lead handling, automated communication, and cost savings in residential and commercial leasing operations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Maintenance Management",
          "description": "Intelligent triaging and routing of maintenance requests, enabling real-time work order management, task tracking, and SLA compliance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Property Accounting & Financial Reporting",
          "description": "End-to-end property accounting tools with electronic invoicing, AI abstraction, digital payments, and financial dashboards tailored for real estate firms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "CRM & Real Estate Marketing Automation",
          "description": "Salesforce-based CRM solutions for real estate including listing conversion, lead nurturing, campaign automation, and syndication tools."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Integrations",
          "description": "System integration services to connect RealForce and Exelona with existing ERP, accounting, CRM, or leasing platforms for unified operations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Real Estate Outsourcing Services",
          "description": "Flexible on-site, offsite, or hybrid outsourcing for property management, accounting, tenant onboarding, and lease operations."
        }
      }
    ]
  },
  "url": "https://www.rialtes.com/industry/real-estate-property-management/"
}
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
      <h3 className="mb-[15px] md:mb-[25px] text-[#1F3F69] 4xl:text-[30px] xl:text-[24px] text-[20px]">{services.title}</h3>
      <p className='md:mb-[15px] mb-0 4xl:text-[22px] xl:text-[20px] text-[18px]'>{services.description}</p>
    </div>
  </div>
);
const Services = () => {
  return (
    <div className="text-black 2xl:pr-70 xl:pr-35 md:pr-8 pr-0 mt-20 ">
      <h2 className="text-black mb-6 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[85%] ">Find the right property management software online with Rialtes</h2>
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
    <div className="flex flex-col pt-8">
      <h3 className="mb-[10px] md:mb-[15px] font-semibold h3-bold 4xl:text-[30px] xl:text-[24px] text-[20px] line-clamp-2 min-h-[60px]">{services.title}</h3>
    </div>
    <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight mt-2">{services.description}</p>
    <UnorderedList arrName={services?.productsDetails} ulClassName="mt-6 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" liClassName="font-medium flex mt-3 items-start before:content-['•'] before:text-[#0092E0] before:text-4xl before:font-bold before:mr-2 before:leading-[0.5]" />
    <div className="mt-6"><LearnMore /></div>
  </div>
);

const GrowServices = () => {
  return (
    <div className="text-black lg:pr-20 md:pr-10   pr-6 ">
      <h2 className="pb-10 text-black 4xl:w-[100%] xl:w-[79%] w-fill leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">Enhance your real estate operations with our customizable service offerings</h2>
      <p className="xl:w-full w-[85%] text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">Rialtes helps real estate brokerages and property management companies achieve unparalleled excellence through technology and strategic guidance. From accounting software to real estate developers to mobile-friendly CRM, our property management solutions can be customized to fit your organization’s unique requirements.</p>
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
      <Script
        id="schema-real-estate"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
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
            <div className="col-span-12 xl:col-span-8 lg:col-span-9 mb-[139px] ">
              <h3 className="text-white text-[18px] xl:text-[24px] font-bold ">
                REAL ESTATE
              </h3>
              <h2 className="text-white leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]  xl:w-[75%] 2xl:w-[67%] 4xl:w-[92%] mt-[11.5px] md:mt-[28.5px]">
                Manage real estate processes with cloud-based property management software
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            </div>
          </div>
        </div>
      </section>
      {/* page description */}
      <section className="custom-container">
        <div className="py-10 bg-white">
          <div>
            <div className="flex flex-col xl:flex-row py-6 xl:gap-10">
              <div className="flex flex-col w-full 4xl:w-[50%] xl:w-[38%] 2xl:w-[35%] xl:mr-4 xl:mb-0 mb-4">
                <h1 className="text-black md:pb-0 pb-4 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
                  Affordable property management software for your real estate operations
                </h1>
              </div>
              <div className="flex flex-col w-full xl:w-[40%]">
                <p className="text-[#000000] text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                  The real estate market is dynamic and unpredictable – but your business doesn’t have to be. With the right tools and strategies, real estate companies can see consistent growth year over year while exceeding client expectations.
                </p>
                <p className="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                  At Rialtes, we provide top property management software designed to streamline your daily operations. Exelona offers an all-in-one solution with features tailored for real estate professionals, investors, property managers, and more. Whether you’re managing multiple residential rentals or balancing the demands of commercial investment spaces, Rialtes has the tools to support you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* We Help You Grow and Thrive */}
      <div className="custom-container">
        <section className="pb-16 xl:pt-0 bg-white">
          <GrowServices />
        </section>
      </div>
      <div className="bg-[#EDEDED]">
        <div className="custom-container">
          <section className="pb-16  pt-10">
            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">The #1 CRM for real estate business</h2>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:mt-16 mt-5 xl:gap-20 gap-10">
              <div>
                <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">Built on Salesforce, the world’s #1 CRM platform, RealForce centralizes your property management functions and transforms the way you serve your clients. Whether you’re a small brokerage firm or a national property management group, your business deserves the best property management software on the market.</p>
              </div>
              <div>
                <h4 className="text-[#0092E0] text-[22px] xl:text-[24px] 4xl:text-[26px] leading-tight">RealForce Platform</h4>
                <p className="mt-5 text-[18px] xl:text-[20px] 4xl:text-[22px] leading-tight"> Our flagship property management platform, built on Salesforce and designed for your real ERP (Property Cloud) and CRM(Experience Cloud) functions.</p>
              </div>
              <div>
                <h4 className="text-[#0092E0] text-[22px] xl:text-[24px] 4xl:text-[26px] leading-tight">RealPay </h4>
                <p className="mt-5 text-[18px] xl:text-[20px] 4xl:text-[22px] leading-tight">RealPay is an integrated payment gateway that supports payments across most North American banks and 135+ currencies. Residents can easily make payments and check</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Latest Services Section */}
      <div className="custom-container">
        <section className="pb-16 bg-white">
          <Services />
          <LearnMore />
        </section>
      </div>
      <div className="bg-[#F5F5F5] py-6">
        <div className="custom-container md:!pr-0">
          <CaseStudyIndivisual slides={slides} />
        </div>
      </div>
      <div className="bg-[#808080] py-6" >
        <div className="custom-container md:!pr-0">
          <ExploreMoreCarousel />
        </div>
      </div>
      {/* Contact Form */}
      <div className="mb-20 mt-20 custom-container text-black py-6">
        <ContactForm title={'Take the next step to elevate your property management.'} className={"leading-tight text-black 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[65%] 4xl:w-[80%]"} />
      </div>
    </div>
  );
}