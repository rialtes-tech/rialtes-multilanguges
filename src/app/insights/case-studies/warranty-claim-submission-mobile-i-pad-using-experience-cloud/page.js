"use client";
// pages/case-study-detail.js
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';
import Seo from "@/app/components/Seo";
import { HeroSection } from "@/app/components/herosection";
import Script from "next/script";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.rialtes.com/insights/case-studies/warranty-claim-submission-mobile-i-pad-using-experience-cloud"
    },
    "headline": "Salesforce Experience Cloud Case Study: Mobile Warranty Portal",
    "description": "This case study details how Rialtes implemented a mobile-first Salesforce Experience Cloud solution for a leading roofing manufacturer, streamlining warranty submissions and enhancing customer experience through Lightning Web Components.",
    "image": "https://www.rialtes.com/images/case-studies/Adaptis-for-web-casestudy-banner.webp",
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
    "proficiencyLevel": "Expert",
    "articleSection": "Case Studies",
    "datePublished": "2025-05-30",
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
    const fullUrl = "https://www.rialtes.com/insights/case-studies/warranty-claim-submission-mobile-i-pad-using-experience-cloud";

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title=" Salesforce Experience Cloud Case Study: Mobile Warranty Portal | Rialtes"
                description=" Discover how a leading roofing brand used Salesforce Experience Cloud to deliver a mobile-friendly warranty claim experience customers love."
                canonical="https://www.rialtes.com/insights/case-studies/warranty-claim-submission-mobile-i-pad-using-experience-cloud/"
            />

            <Script
                id="schema-warranty-mobile"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />



            <section className="relative h-[350px] md:h-[500px]  4xl:h-[650px]  overflow-hidden">
                <div className="hidden md:block">
                    <Image
                        src="/images/case-studies/Adaptis-for-web-casestudy-banner.webp"
                        alt="Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP"
                        fill
                        style={{ objectFit: "cover",  }}
                        priority
                    />
                </div>
                <div className="block md:hidden">
                    <Image
                        src="/images/case-studies/Adaptis-for-mobile-banner.webp"
                        alt="Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP"
                        fill
                        style={{ objectFit: "cover", objectPosition: "90% 20%" }}
                        priority
                    />
                </div>
            </section>


            <section className="custom-container">
                <div className="py-10 bg-white xl:max-w-[1084px] 4xl:w-[1084px] 2xl:w-[900px] xl:w-[800px]
 ">
                    <div className="">
                        <h1 className="text-[#000000] py-6 leading-tight text-[26px] 4xl:text-[60px]  2xl:text-[48px]   xl:text-[42px] md:text-[28px]">Claim in 4 Minutes: Rialtes Builds Mobile-First Portal to Transform Claims Experience</h1>
                    </div>
                    <div className="py-4"></div>
                    <div className="">
                        <div className="flex flex-col md:flex-row justify-between text-black  ">
                            <div className='pb-6'>
                                <span className='text-[#0092E0]'>Manufacturing</span> <span className='text-[#ACACAC]'> | </span>30 May 2025
                            </div>
                            <div className="flex flex-col ">
                                <span>8 min read</span>
                            </div>
                        </div>
                        <div className="pt-4"></div>
                        <div className="flex flex-row gap-6 ml-[-8px]  ">
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
                    <div className="">
                        <div className="">


                            <h2 className=" font-medium text-[#0092E0] 4xl:text-[30px]  2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Client Profile</h2>
                            <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">A leading manufacturer of high-quality roofing solutions designed to protect what matters most. Specializing in durable and innovative products for residential and commercial spaces, they offer a range of asphalt shingles, roofing underlayment, waterproofing solutions, and composite materials for superior protection and aesthetics. </p>
                            <div className="py-6"></div>
                            <h2 className=" font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Challenges</h2>
                            {/* <h6 className="h3-bold text-[#0092E0] text-sm">Complex Sales Process</h6> */}
                            <p className="text-black  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">The Customers of our client were having a hard time submitting warranty claims from their mobile devices, forcing them to rely on desktops, which was an inconvenient and frustrating process. The Customers had to seek additional support to complete their claims. The lack of mobile accessibility led to delays, inefficiencies, and increased support requests, ultimately reducing customer satisfaction and straining operations.</p>


                            <div className="py-6"></div>
                            <h2 className=" font-medium text-[#0092E0] 4xl:text-[30px]  2xl:text-[24px]  xl:text-[21px] text-[23px] leading-tight pb-4">Solutions</h2>

                            <p className="text-black pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] ">Rialtes stepped in to improve the warranty claims process by developing a mobile-first portal with Salesforce Experience Cloud.  Our team worked and designed a user-friendly interface specifically for Android, iOS, iPads, and tablets, making it easy for customers to submit claims anytime, from anywhere. </p>

                            <p className="text-black pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] ">We built the portal using Lightning Web Components (LWC) to ensure smooth navigation, fast performance, and a simple, touch-friendly design. This improved experience allows customers to complete warranty claims quickly and effortlessly. </p>

                            <p className="text-black  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] ">Our solution enhances customer satisfaction, streamlines operations, and ensures a modern, efficient claims experience across all mobile devices. </p>
                            <div className="py-6"></div>
                            <h2 className=" font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Benefits</h2>


                            <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 4xl:text-[20px]  2xl:text-[18px] font-medium  xl:text-[17px] text-[16px] ">
                                <li className="pb-4">Enabled complete mobile compatibility, allowing customers to submit claims from smartphones and tablets without needing desktop access.</li>
                                <li className="pb-4">Simplified user experience led to a 40% drop in support tickets related to warranty submissions.</li>
                                <li className="pb-4">Customers can now complete the warranty claim process in under 4 minutes, cutting down processing time by over 60%.</li>
                                <li className="pb-4">The convenience of mobile access drove a 35% increase in submitted claims, showing higher engagement and usage.</li>
                                <li className="pb-4">User feedback showed a 25% improvement in satisfaction scores, directly linked to faster processing and ease of access.</li>
                                <li>Lower dependency on manual support freed up internal teams, reducing claim-handling time by half and improving response rates.</li>

                            </ul>




                        </div>
                    </div>

                </div>
            </section>

            {/* Latest Blogs */}
            <div
                className="py-10
   custom-container lg:pr-0"
            >
                <RelatedTopicsCarousel slides={slides} />

            </div>
        </div>
    );
}