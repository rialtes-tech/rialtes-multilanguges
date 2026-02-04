"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import WebinarForm from "@/app/components/webinarForm";
import Script from "next/script";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Voyage with SAP – Transformational RISE with SAP Services by Rialtes",
    "description": "Join us for an exclusive deep dive into transformational SAP journeys to explore how Rialtes' Voyager+ framework streamlines every step of your SAP journey, from license advisory to post-go-live success. Discover how you can simplify your RISE with SAP transformation with a clear, value-driven, all-in-one approach designed to accelerate cloud adoption, reduce technical debt, reimagine processes, and infuse AI-powered innovation into your operations.",
    "url": "https://www.rialtes.com/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes/",
    "startDate": "2025-06-03T20:30:00+05:30",
    "endDate": "2025-06-03T21:00:00+05:30",
    "duration": "PT30M",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "organizer": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg"
    },
    "performer": {
        "@type": "Person",
        "name": "Anuraag Aggarwal",
        "jobTitle": "Vice President of Global Sales",
        "url": "https://www.linkedin.com/in/anuraag-aggarwal/"
    },
    "image": "https://www.rialtes.com/images/webinar/banner-rise.webp",
    "audience": {
        "@type": "Audience",
        "audienceType": "CIOs, IT Leaders, Digital Transformation Leaders, SAP Technical Consultants, SAP Functional Consultants, Enterprise Architects"
    },
    "location": {
        "@type": "VirtualLocation",
        "url": "https://www.rialtes.com/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes/"
    },
    "keywords": "SAP Rise webinar, RISE with SAP, Voyager+, Rialtes webinars"
}
export default function () {

    const sectionRef = useRef(null);

    const handleScroll = () => {
        if (!sectionRef.current) return;

        const getOffset = () => {
            const width = window.innerWidth;
            if (width > 1536) return 160; // 2xl+
            if (width > 1280) return 120; // xl
            if (width > 768) return 100;  // md
            return 80; // sm and below
        };

        const offset = getOffset();
        const elementPosition = sectionRef.current.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth',
        });
    };

    const fullUrl = "https://rialtes.netlify.app/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes"

    return (
        <div className="min-h-screen">
            <Seo
                title="SAP RISE Webinar: Simplify Your SAP Journey with Voyager+ by Rialtes"
                description="Join our SAP RISE webinar to explore VoyagerPlus, a powerful framework to simplify your SAP journey, accelerate cloud adoption, and drive transformation"
                canonical="https://www.rialtes.com/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes"
            />

            <Script
                id="webinar-schema-voyage"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <section className="relative custom-container xl:!pr-0">
                <Image
                    src="/images/webinar/webinar-20.webp"
                    alt="Webinar Header"
                    priority
                    width={0}
                    height={0}
                    className="w-full h-full"
                />

            </section>
            <div className="grid xl:grid-cols-12 grid-cols-1 custom-container">
                <div className="xl:col-span-7 col-span-12">
                    <div className="flex flex-row gap-6  mt-10">
                        <div className="flex flex-row gap-6">
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
                    <h1 className="xl:leading-tight mt-10 font-medium xl:font-normal xl:text-[40px] 4xl:text-[60px]">Voyage with SAP – Transformational RISE with SAP Services by Rialtes</h1>
                    <div className="grid xl:grid-cols-12 xl:mt-16 mt-10 xl:gap-10">
                        <div className="xl:col-span-4 col-span-12">
                            <Image
                                src="/images/webinar/anurag.webp"
                                alt="Voyage with SAP – Transformational RISE with SAP Services by Rialtes"
                                priority
                                className="w-full h-auto"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:col-span-8 col-span-12 mt-5 xl:mt-0">
                            <h3 className="xl:text-[24px] text-[#0092E0]">Speaker</h3>
                            <h3 className="mt-3 4xl:text-[29px] xl:text-[22px] font-bold mb-3">Anuraag Aggarwal</h3>
                            <h3 className="mt-[-10px] 4xl:text-[24px] xl:text-[20px]">Vice President of Global Sales</h3>
                        </div>
                    </div>
                    <p className="mt-16 xl:pr-32">Don’t miss this opportunity to join us for an exclusive webinar to explore how <strong>Salesforce Automotive Cloud</strong> is revolutionizing customer engagement in the auto industry. Discover how your teams can steer every customer interaction using data, AI, and automation—from lead to loyalty, all inside one connected platform.</p>

                    <h3 className="mt-16 text-[#0092E0]">In This Webinar, You'll Get:</h3>
                    <p className="mt-5 xl:pr-32"><strong>Simplify SAP Transformation:</strong> How an integrated approach removes complexity.</p>
                    <p className="mt-5 xl:pr-32"><strong>Accelerate Cloud Adoption:</strong>Strategies to migrate faster and smarter while minimizing technical debt.</p>
                    <p className="mt-5"><strong>Process Reimagination with SAP Signavio:</strong> Unlock new efficiencies and innovation opportunities..</p>
                    <p className="mt-5 xl:pr-32"><strong>Tap into AI and Automation:</strong> Enhance your SAP operations for smarter, autonomous workflows.</p>
                    <p className="mt-5 xl:pr-32"><strong>Live Demo:</strong> See the Voyager+ framework in action, supporting a smooth RISE with SAP journey.</p>

                    <h3 className="mt-16 text-[#0092E0]">Who Should Attend?</h3>
                    <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-6 xl:text-[20px] text-[16px] marker:font-bold font-medium">

                        <li className="pb-2 mt-5">CIOs and IT Leaders</li>
                        <li className="pb-2">Digital Transformation Leaders</li>
                        <li className="pb-2">SAP Technical Consultants</li>
                        <li className="pb-2">SAP Functional Consultants</li>
                        <li className="pb-2">Enterprise Architects</li>
                        <li className="pb-2">Anyone planning or accelerating their RISE with SAP transformation</li>

                    </ul>


                </div>
                <div className="xl:col-span-4 col-span-12 ">
                    <div className="bg-[#0092E0] xl:h-[490px] xl:w-[532px] xl:pt-20 xl:pl-16 pr-10 pt-10 pl-10 pb-10 text-white">
                        <h2 className="font-extrabold">13</h2>
                        <h3>May 2025</h3>
                        <h3 className="font-medium mt-8">10:00 AM CST | 8.30 PM IST</h3>
                        <h3 className="font-medium mt-3">11 AM EST | 8 AM PST</h3>
                        <div onClick={handleScroll}>
                            <button className="text-[#0092E0] xl:text-[20px] text-[16px] font-bold p-5 bg-white mt-8">Watch Now</button>

                        </div>


                    </div>

                    <h3 className="mt-10">How to Join:</h3>
                    <p className="mt-5">Once registered, you will receive a confirmation email with the webinar access link and instructions.</p>
                    <h3 className="mt-10">Can’t Make It?</h3>
                    <p className="mt-3">No problem! Go ahead and register, and we’ll send you a recording of the webinar afterward, so you can watch it whenever it suits you best.</p>
                    <p className="mt-10 xl:pb-0">For inquiries, please contact sales@rialtes.com.</p>
                </div>
                <div className="xl:col-span-1 col-span-12"></div>
            </div>
            <div className="custom-container mb-20" ref={sectionRef}>
                <WebinarForm
                    redirectUrl="https://www.youtube.com/watch?v=a0ad90kWp0c&t=201s"
                    emailWebinarLink="https://www.rialtes.com/insights/webinars/rialtes-web/src/app/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes"
                />

            </div>
        </div>
    );
}
