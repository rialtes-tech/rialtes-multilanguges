"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import WebinarForm from "@/app/components/webinarForm";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Databricks and Datasphere — What’s in SAP Business Data Cloud?",
    "description": "Explore how SAP Datasphere integrates with Databricks to create the SAP Business Data Cloud. Learn how you can harmonize data across platforms, streamline your analytics strategy, and enable trusted business-ready data across your organization.",
    "url": "https://www.rialtes.com/insights/webinars/databricks-and-datasphere-whats-in-sap-business-data-cloud",
    "startDate": "2025-05-13T20:30:00+05:30",
    "endDate": "2025-05-13T21:00:00+05:30",
    "duration": "PT30M",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventCompleted",
    "organizer": {
        "@type": "Organization",
        "name": "Rialtes Technology",
        "url": "https://www.rialtes.com",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg"
    },
    "performer": {
        "@type": "Person",
        "name": "Akshay Kale",
        "jobTitle": "Sr. Managing Director – SAP Services",
        "url": "https://www.linkedin.com/in/sap-akshaykale/"
    },
    "image": "https://www.rialtes.com/images/webinar/Webinar_13%20May%2025_webinar%20Banner.webp",
    "audience": {
        "@type": "Audience",
        "audienceType": "Data Engineers, SAP Architects, Analytics Leaders, CIOs, CTOs, BI Professionals"
    },
    "location": {
        "@type": "VirtualLocation",
        "url": "https://www.rialtes.com/insights/webinars/databricks-and-datasphere-whats-in-sap-business-data-cloud"
    },
    "keywords": "SAP webinar​, SAP Datasphere webinar, Databricks webinar, SAP Business Data Cloud, Rialtes webinars"
}

export default function () {
    const sectionRef = useRef(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-05-13T15:00:00Z"); // 10:00 AM CST = 15:00 UTC
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


    const fullUrl = "https://rialtes.netlify.app/insights/webinars/databricks-and-datasphere-whats-in-sap-business-data-cloud"
    const titleSlug = "Databricks and Datasphere — What’s in SAP Business Data Cloud?";

    return (
        <div className="min-h-screen">
            <Seo
                title="How SAP Business Data Cloud, Databricks & SAP Datasphere Unify Enterprise Data"
                description="Join our expert-led webinar on May 13 to learn how SAP Business Data Cloud, Databricks, and SAP Datasphere together simplify data unification, power AI, and drive business innovation."
                canonical="https://www.rialtes.com/insights/webinars/databricks-and-datasphere-whats-in-sap-business-data-cloud/"
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <section className="relative h-[250px] sm:h-[500px] xl:h-[650px] overflow-hidden xl:ml-[280px]">
                <Image
                    src="/images/webinar/Webinar_13 May 25_webinar Banner.webp"
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
                <div className="xl:col-span-7 col-span-12 pb-10">
                    <div className="flex flex-row gap-6  mt-10">
                        <div className="max-w-[40px]">
                            <a
                                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(titleSlug)}&summary=${encodeURIComponent("Join our webinar to explore integrating WhatsApp with Salesforce using AgentChat.")}&source=Rialtes`}
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
                        {/* <div className="max-w-[40px]">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=/case-study-2">
                                <Image
                                    src="/images/case-studies/facebook.svg"
                                    alt="Facebook"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    priority
                                />
                            </a>
                        </div> */}
                        {/* <div className="max-w-[40px]">
                            <a href="https://twitter.com/intent/tweet?url=/case-study-2&text=RealForce Banking Module - ACH">
                                <Image
                                    src="/images/case-studies/twitter.svg"
                                    alt="Twitter"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    priority
                                />
                            </a>
                        </div> */}
                    </div>
                    <h1 className="xl:leading-tight mt-10 font-medium xl:font-normal">Databricks and Datasphere — What’s in SAP Business Data Cloud?</h1>
                    <div className="grid xl:grid-cols-12 xl:mt-16 mt-10">
                        <div className="xl:col-span-4 col-span-12">
                            <Image
                                src="/images/webinar/Akshay-Kale.webp"
                                alt="Databricks and Datasphere — What’s in SAP Business Data Cloud?"
                                priority
                                className="xl:w-[256px] xl:h-[256px] w-full h-auto"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:col-span-8 col-span-12 mt-5 xl:mt-0">
                            <h3 className="xl:text-[24px] text-[#0092E0]">Speaker</h3>
                            <h3 className="mt-3 xl:text-[29px] font-bold mb-3">Akshay Kale</h3>
                            <h3 className="mt-[-10px] xl:text-[24px]">Sr. Managing Director – SAP Services</h3>
                        </div>
                    </div>
                    <p className="mt-16 xl:pr-32">Don’t miss this opportunity to join us for an exclusive webinar to explore how <strong>Salesforce Automotive Cloud</strong> is revolutionizing customer engagement in the auto industry. Discover how your teams can steer every customer interaction using data, AI, and automation—from lead to loyalty, all inside one connected platform.</p>

                    <h3 className="mt-16 text-[#0092E0]">In This Webinar, You'll Get:</h3>
                    <p className="mt-5 xl:pr-32"><strong>Modern Data Challenge:</strong> Understand today's enterprise data complexities and how SAP’s Cloud Vision addresses them.</p>
                    <p className="mt-5 xl:pr-32"><strong>Core Capabilities:</strong>Dive into the features of Databricks and SAP Datasphere—and how they compare.</p>
                    <p className="mt-5"><strong>Seamless Integration:</strong> Explore how SAP Datasphere and Databricks integrate with SAP systems and with each other.</p>
                    <p className="mt-5 xl:pr-32"><strong>Strategic Decision Factors: </strong> Get a clear framework to shape your data strategy using SAP Business Data Cloud.</p>
                    <p className="mt-5 xl:pr-32"><strong>Live Demo:</strong> Witness how unified data can unlock AI-driven insights in real time.</p>

                    <h3 className="mt-16 text-[#0092E0]">Who Should Attend?</h3>
                    <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-6 xl:text-[20px] text-[16px] marker:font-bold font-medium">

                        <li className="pb-2 mt-5">Data Engineers and Architects</li>
                        <li className="pb-2">IT Decision-Makers</li>
                        <li className="pb-2">SAP Administrators and Consultants</li>
                        <li className="pb-2">Analytics and BI Leaders</li>
                        <li className="pb-2">Innovation and Digital Transformation Teams</li>
                        <li className="pb-2">Anyone seeking to unify enterprise data and power AI initiatives</li>

                    </ul>
                    {/* <Link href="https://us06web.zoom.us/webinar/register/WN_l9ckv1LCSI6zhReliozUrw">
                        <button className="text-white xl:text-[20px] xl:block hidden text-[16px] font-bold p-5 bg-blue-500 mt-8">Watch Now</button>

                    </Link> */}

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
                    {/* <p className="mt-10">Webinar Starting In</p>
                    <div className="flex items-center gap-4 xl:text-3xl text-2xl font-bold xl:mt-10 mt-5 border-b pb-10">
                        <div className="text-[#0092E0]">
                            <strong className="xl:text-[49px] font-semibold">{String(timeLeft.days).padStart(2, "0")}</strong>
                            <span className="text-xs text-black font-normal">Days</span>
                        </div>
                        <span className="text-black font-normal">:</span>
                        <div className="text-[#0092E0]">
                            <strong className="xl:text-[49px] font-semibold">{String(timeLeft.hours).padStart(2, "0")}</strong>
                            <span className="text-xs text-black font-normal">Hrs</span>
                        </div>
                        <span className="text-black font-normal">:</span>
                        <div className="text-[#0092E0]">
                            <strong className="xl:text-[49px] font-semibold">{String(timeLeft.minutes).padStart(2, "0")}</strong>
                            <span className="text-xs text-black font-normal">Min</span>
                        </div>
                        <span className="text-black font-normal">:</span>
                        <div className="text-[#0092E0]">
                            <strong className="xl:text-[49px] font-semibold">{String(timeLeft.seconds).padStart(2, "0")}</strong>
                            <span className="text-xs text-black font-normal">Sec</span>
                        </div>
                    </div> */}
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
                    emailWebinarLink="https://www.rialtes.com/insights/webinars/databricks-and-datasphere-whats-in-sap-business-data-cloud/"
                />
            </div>
        </div>
    );
}
