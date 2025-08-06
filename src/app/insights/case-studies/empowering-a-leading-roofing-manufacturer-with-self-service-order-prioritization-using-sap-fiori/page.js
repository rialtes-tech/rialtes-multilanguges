"use client";
// pages/case-study-detail.js
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';
import Seo from "@/app/components/Seo";
import { HeroSection } from "@/app/components/herosection";
import Script from "next/script";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.rialtes.com/insights/case-studies/empowering-a-leading-roofing-manufacturer-with-self-service-order-prioritization-using-sap-fiori/"
    },
    "headline": "Case Study: Empowering Roofing Manufacturer with SAP Fiori for Self-Service Sales Order Prioritization",
    "description": "Discover how a top roofing manufacturer used SAP Fiori for self-service sales order prioritization, cutting 150+ manual adjustments daily and boosting accuracy.",
    "image": "https://www.rialtes.com/images/case-studies/fiori-banner.webp",
    "author": {
        "@type": "Organization",
        "name": "Rialtes"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rialtes",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.rialtes.com/images/homepage/logo.svg"
        }
    },
    "articleSection": "Case Studies",
    "datePublished": "2025-05-28"
}
const slides = [
  {
    id: 3,
    image: "/images/case-studies/case study 1_thumb_n.webp",
    category: "Healthcare",
    industry: "Real Estate",
    date: "17 Nov 2024",
    title: "Automating Order Processing in Healthcare using MuleSoft",
    description: "A global medical technology company that develops and manufactures innovative products",
    url: 'insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap'
  },
  {
    id: 4,
    image: "/images/case-studies/case-study-4_thumb.webp",
    category: "Manufacturing",
    industry: "Healthcare",
    date: "14 Oct 2024",
    title: "Transforming Omnichannel Case Management Using Salesforce Service Cloud",
    description: "A leading provider of high-performance analog semiconductors for wireless and wired connectivity.",
    url: 'insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud'
  },
  {
    id: 6,
    image: "/images/case-studies/case-study-6_thumb.webp",
    category: "Real Estate",
    industry: "Manufacturing",
    date: "04 Sept 2024",
    title: "Reduced Downtime for a Multifamily Real Estate Firm Using Yardi Managed Services",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
    url: 'insights/case-studies/yardi-managed-services'
  },
  {
    id: 7,
    image: "/images/case-studies/case study 3_thumb_n.webp",
    category: "Manufacturing",
    industry: "Retail & e-Commerce",
    date: "08 Jan 2025",
    title: "DevOps Transformation using Copado and Salesforce",
    description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
    url: "insights/case-studies/streamlined-devops-using-copado-and-salesforce"
  },
  {
    id: 8,
    image: "/images/case-studies/case-study-2_thumb_n.webp",
    category: "Real Estate",
    industry: "Hi-Tech",
    date: "22 Dec 2024",
    title: "Automating ACH and Journal Entries with Our Exelona Banking Module",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
    url: 'insights/case-studies/realForce-banking-module-ach'
  },
  // Add more blog objects as needed
];

export default function Page() {
      const fullUrl = "https://www.rialtes.com/insights/case-studies/empowering-a-leading-roofing-manufacturer-with-self-service-order-prioritization-using-sap-fiori";

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="SAP Fiori for Sales Order Prioritization in Manufacturing | Rialtes"
                description="Discover how a top roofing manufacturer used SAP Fiori for self-service sales order prioritization, cutting 150+ manual adjustments daily and boosting accuracy."
                canonical="https://www.rialtes.com/insights/case-studies/empowering-a-leading-roofing-manufacturer-with-self-service-order-prioritization-using-sap-fiori/"
            />
         
               <Script
        id="schema-empowring"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

  <section className="relative h-[350px] md:h-[500px]  4xl:h-[650px]  overflow-hidden">
                <div className="hidden md:block">
                    <Image
                        src="/images/case-studies/fiori-banner.webp"
                        alt="Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP"
                        fill
                        style={{ objectFit: "cover",  }}
                        priority
                    />
                </div>
                <div className="block md:hidden">
                    <Image
                        src="/images/case-studies/Sample and literature Request_Case study Mobile banner.webp"
                        alt="Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP"
                        fill
                        style={{ objectFit: "cover", objectPosition: "90% 20%" }}
                        priority
                    />
                </div>
            </section>




            <section className="custom-container">
                <div className="py-10 bg-white xl:max-w-[1084px] 4xl:w-[1084px] 2xl:w-[900px] xl:w-[800px]">
                    <div>
                        <h1 className="text-[#000000] py-6 leading-tight 4xl:text-[60px]  2xl:text-[48px]   xl:text-[42px] md:text-[28px] text-[26px]">150 Orders a Day, Zero Manual Work: The Fiori-Powered Self-Service Order Prioritization</h1>
                    </div>
                    <div className="py-4"></div>
                    <div>
                        <div className="flex flex-col md:flex-row justify-between text-black ">
                            <div className='pb-6'>
                                <span className='text-[#0092E0]'>Manufacturing</span> <span className='text-[#ACACAC]'> | </span>28 May 2025
                            </div>
                            <div className="flex flex-col">
                                <span>8 min read</span>
                            </div>
                        </div>
                        <div className="pt-4"></div>
                      <div className="flex flex-row gap-6 ml-[-8px] ">
                  <div className="max-w-[40px]">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/case-studies/linkedin.svg"
                        alt="LinkedIn"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        priority
                      />
                    </a>
                  </div>

                  <div className="max-w-[40px]">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >                      <Image
                        src="/images/case-studies/twitter.svg"
                        alt="Twitter"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        priority
                      />
                    </a>
                  </div>
                </div>
                    </div>

                    <div className="py-6"></div>
                    <div>
                        <div>


                            <h2 className=" font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Client Profile</h2>
                            <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Our client is a renowned manufacturer of high-quality roofing products with a legacy built on innovation, quality, and sustainability. With a diverse portfolio that includes asphalt shingles, roofing accessories, underlayment, and waterproofing solutions, they serve both residential and commercial markets. Backed by cutting-edge manufacturing facilities and a robust distribution network, the company is a trusted partner for builders, contractors, and homeowners nationwide. </p>


                            <div className="py-6"></div>
                            <h2 className=" font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Challenges</h2>

                            <p className="text-black  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] ">Despite the client's significant technological investments in manufacturing, their order management process relied heavily on manual intervention. Customers who wanted to prioritize certain sales orders had to call the sales team and share their list of urgent orders. This required the sales team to manually adjust loading dates for approximately 150 orders daily—an inefficient and error-prone process that consumed valuable time and resources.

                            </p>
                           <div className="py-6"></div>
                            <h2 className=" font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Solutions</h2>

                            <p className="text-black pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Rialtes partnered with the client to streamline and digitize their order prioritization process. We developed a custom SAP Fiori app that enabled customers to independently access their open orders and select which orders needed prioritization. Key features of the solution contained: </p>

                            <div className="pl-2">
                                <ul className="list-disc marker:text-[#0092E0] marker:text-xl 4xl:text-[20px]  2xl:text-[18px] font-medium  xl:text-[17px] text-[16px] text-black pl-2 ">
                                   <li className="pb-4">A user-friendly interface for customers to view and select open orders</li>
                                    <li className="pb-4">Planning logic integrated with manufacturing capacity to ensure realistic timelines</li>
                                  <li className="pb-4">An intelligent allocation system based on predefined customer allotments</li>
                                  <li className="">Self-service functionality to allow customers to prioritize orders without sales team intervention</li>

                                </ul>
                            </div>

<div className="py-6"></div>
                            <h2 className=" font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Benefits</h2>

                            <p className="text-black pb-6 mt-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">The implementation of the Fiori app transformed sales order management for our clients, delivering measurable improvements across operations:</p>
                            <div className="pl-2">
                                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium ">
                               <li className="pb-4"><h3 className="h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Improved Efficiency </h3> : The manual adjustment of over 150 sales orders daily was eliminated. This saved the sales team approximately 25+ hours per week, allowing them to focus more on customer engagement and strategic activities.</li>
                                     <li className="pb-4"><h3 className="h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Customer Empowerment </h3> : With direct control over order prioritization via the Fiori app, customers gained transparency and flexibility, leading to a 20% increase in customer satisfaction and a 30% drop in support queries related to order status and changes.</li>
                                   <li className="pb-4"><h3 className="h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Optimized Planning </h3> : Real-time visibility into order data enabled smarter alignment of material allocation and production planning with customer demand and plant capacity, improving planning accuracy by 40% and reducing stock outs and missed deliveries by 20%.</li>
                                 <li className=""><h3 className="h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Reduced Errors </h3> : The removal of manual data entry decreased order processing errors by over 80%, enhancing accuracy and helping achieve a 15% improvement in on-time and in-full (OTIF) delivery metrics, critical for the construction supply chain.</li>
                                </ul>
                            </div>


                        </div>
                    </div>

                </div>
            </section>
<div className="py-6"></div>
            {/* Latest Blogs */}
            <div
                className="pb-20 custom-container lg:pr-0" >
                <RelatedTopicsCarousel slides={slides} />
            </div>
        </div>
    );
}