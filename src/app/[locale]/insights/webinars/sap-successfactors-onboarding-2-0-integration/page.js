"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
;
import Link from "next/link";
import WebinarForm from "@/app/components/webinarForm";
import Script from "next/script";


const schemaData = {

    "@context": "https://schema.org",

    "@type": "Event",

    "name": "SAP SuccessFactors Onboarding 2.0 Webinar: Smarter Hiring Journeys",

    "description": "Explore how SAP SuccessFactors Onboarding 2.0 transforms the new hire journey with digital tools, seamless Employee Central integration, and greater admin control. A must-attend webinar for HR professionals and SAP consultants.",

    "url": "https://www.rialtes.com/insights/webinars/sap-successfactors-onboarding-2-0-integration/",

    "startDate": "2025-05-27T20:30:00+05:30",

    "endDate": "2025-05-27T21:00:00+05:30",

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

        "name": "Vidya Kumar",

        "jobTitle": "Principal Managing Consultant",

        "url": "https://www.linkedin.com/in/vidya-kumar-a82a5b21/"

    },

    "audience": {

        "@type": "Audience",

        "audienceType": "HR Leaders, Talent Acquisition Specialists, Hiring Managers, SAP SuccessFactors Users, SAP Consultants"

    },

    "location": {

        "@type": "VirtualLocation",

        "url": "https://www.rialtes.com/insights/webinars/sap-successfactors-onboarding-2-0-integration"

    },

    "keywords": "SAP SuccessFactors onboarding 2.0, hr onboarding webinar, employee central integration, onboarding automation"


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
    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-05-27T15:00:00Z"); // 10:00 AM CST = 15:00 UTC
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    const fullUrl = "https://rialtes.netlify.app/insights/webinars/sap-successfactors-onboarding-2-0-integration"

    return (
        <div className="min-h-screen">
            <Seo
                title="SAP SuccessFactors Onboarding 2.0 Webinar: Boost HR ROI | Rialtes"
                description="Join our SAP SuccessFactors Onboarding 2.0 webinar—see how it compares to 1.0, integrates with Employee Central, and powers automated HR workflows"
                canonical="https://www.rialtes.com/insights/webinars/sap-successfactors-onboarding-2-0-integration/"
            />

             <Script
        id="webinar-schema-sap-success"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
            <section className="relative h-[250px] sm:h-[500px] xl:h-[650px] overflow-hidden xl:ml-[280px]">
                <Image
                    src="/images/webinar/banner-what.webp"
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
                    {/* <div className="container mx-auto h-full flex flex-col justify-center">
                        <h1 className="text-[#000000] max-w-2xl">
                            A symphony of
                            <br />
                            expert voices
                        </h1>
                    </div> */}
                </div>
            </section>
            <div className="grid xl:grid-cols-12 grid-cols-1 xl:ml-[280px] mx-[35px]">
                <div className="xl:col-span-7 col-span-12 xl:pb-20 pb-10">
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
                    <h1 className="xl:leading-tight mt-10 font-medium xl:font-normal">What’s New with SAP SuccessFactors Onboarding 2.0</h1>
                    <div className="grid xl:grid-cols-12 xl:mt-16 mt-10">
                        <div className="xl:col-span-4 col-span-12">
                            <Image
                                src="/images/webinar/Vidya-Kumar.webp"
                                alt="Voyage with SAP – Transformational RISE with SAP Services by Rialtes"
                                priority
                                className="xl:w-[256px] xl:h-[256px] w-full h-auto"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:col-span-8 col-span-12 mt-5 xl:mt-0">
                            <h3 className="xl:text-[24px] text-[#0092E0]">Speaker</h3>
                            <h3 className="mt-3 xl:text-[29px] font-bold mb-3">Vidya Kumar</h3>
                            <h3 className="mt-[-10px] xl:text-[24px]">Principal Managing Consultant</h3>
                        </div>
                    </div>
                    <p className="mt-16 xl:pr-32">Unveil the more efficient way of Employee Onboarding. Join us for an insightful webinar that illustrates the latest enhancements in SAP SuccessFactors Onboarding 2.0, aimed at improving the new hire experience from pre-boarding to day one and so on, and highlights how it transforms and streamlines the onboarding journey compared to its predecessor, SAP Onboarding 1.0.</p>

                    <h3 className="mt-16 text-[#0092E0]">In This Webinar, You'll Get:</h3>
                    <ul className="list-disc marker:text-black text-black pl-4 pb-6 xl:text-[20px] text-[16px] marker:font-bold font-medium pr-24">

                        <li className="pb-2 mt-5"><strong>Introduction to SAP SuccessFactors Onboarding 2.0:</strong> Understand how Onboarding 2.0 transforms the new hire experience from pre-boarding to productivity.</li>
                        <li className="pb-2"><strong>Key Features & Comparative Analysis: </strong> Explore what’s new in Onboarding 2.0 vs. 1.0, including smarter task flows, better customization, and enhanced user experience.</li>
                        <li className="pb-2"><strong>Step-by-Step Workflow & Implementation: </strong> Get a clear roadmap of the ONB 2.0 implementation journey—from configuration to go-live.</li>
                        <li className="pb-2"><strong>Seamless Integration with Employee Central: </strong> Discover how deep integration ensures data consistency and streamlined HR processes.</li>
                        <li className="pb-2"><strong>Smarter Task Management & Digital Tools: </strong> Learn how dashboards, e-signatures, and task automation elevate the onboarding process.</li>
                        <li className="pb-2"><strong>Greater Admin Control & Customization: </strong> Unlock new levels of flexibility with advanced business rules, notifications, and personalized workflows.</li>
                    </ul>
                    <h3 className="mt-10 text-[#0092E0]">Who Should Attend?</h3>
                    <ul className="list-disc marker:text-black text-black pl-4 pb-6 xl:text-[20px] text-[16px] marker:font-bold font-medium">

                        <li className="pb-2 mt-5">HR leaders and professionals</li>
                        <li className="pb-2">Talent acquisition specialists</li>
                        <li className="pb-2">Hiring Managers</li>
                        <li className="pb-2">SAP SuccessFactors users and administrators</li>
                        <li className="pb-2">SAP Technical Consultants</li>

                    </ul>
                    <Link href="https://us06web.zoom.us/webinar/register/WN_BvVPNywPRxG726tfthph_Q">
                        <button className="text-white xl:text-[20px] xl:block hidden text-[16px] font-bold p-5 bg-blue-500 mt-8">Register Now</button>

                    </Link>

                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="bg-[#0092E0] xl:h-[490px] xl:w-[532px] xl:pt-20 xl:pl-16 pr-10 pt-10 pl-10 pb-10 text-white">
                        <h2 className="font-extrabold">27</h2>
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
                    <p className="mt-10 pb-16 xl:pb-0">For inquiries, please contact sales@rialtes.com.</p>
                </div>
                <div className="xl:col-span-1 col-span-12"></div>
            </div>
             <div ref={sectionRef}  className="xl:ml-[280px] md:ml-[100px] mx-[35px] mb-20">
                <WebinarForm
                    redirectUrl="https://www.youtube.com/watch?v=UNe7QQHRMUU&t=569s"
                    emailWebinarLink="https://www.rialtes.com/insights/webinars/sap-successfactors-onboarding-2-0-integration/"
                />
            </div>
        </div>
    );
}