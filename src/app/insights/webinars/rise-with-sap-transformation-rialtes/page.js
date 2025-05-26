"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Link from "next/link";


const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Voyage with SAP – Transformational RISE with SAP Services by Rialtes",
    "description": "Join us for an exclusive deep dive into transformational SAP journeys to explore how Rialtes' Voyager+ framework streamlines every step of your SAP journey, from license advisory to post-go-live success. Discover how you can simplify your RISE with SAP transformation with a clear, value-driven, all-in-one approach designed to accelerate cloud adoption, reduce technical debt, reimagine processes, and infuse AI-powered innovation into your operations.",
    "url": "https://www.rialtes.com/insights/webinars/rise-with-sap-transformation-rialtes",
    "startDate": "2025-06-03T20:30:00+05:30",
    "endDate": "2025-06-03T21:00:00+05:30",
    "duration": "PT30M",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "organizer": {
        "@type": "Organization",
        "name": "Rialtes Technology",
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
        "url": "https://www.rialtes.com/insights/webinars/rise-with-sap-transformation-rialtes"
    },
    "keywords": "SAP Rise webinar, RISE with SAP, Voyager+, Rialtes webinars"
}
export default function () {
    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-06-03T15:00:00Z"); // 10:00 AM CST = 15:00 UTC
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


    const fullUrl = "https://rialtes.netlify.app/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes"
    const titleSlug = "Voyage with SAP – Transformational RISE with SAP Services by Rialtes";

    return (
        <div className="min-h-screen">
            <Seo
                title="SAP RISE Webinar: Simplify Your SAP Journey with Voyager+ by Rialtes"
                description="Join our SAP RISE webinar to explore Voyager+—a powerful framework to simplify your SAP journey, accelerate cloud adoption, and drive transformation."
                canonical="https://www.rialtes.com/insights/webinars/rise-with-sap-transformation-rialtes/"
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <section className="relative h-[250px] sm:h-[500px] xl:h-[650px] overflow-hidden xl:ml-[280px]">
                <Image
                    src="/images/webinar/banner-rise.webp"
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
                    <h1 className="xl:leading-tight mt-10 font-medium xl:font-normal">Voyage with SAP – Transformational RISE with SAP Services by Rialtes</h1>
                    <div className="grid xl:grid-cols-12 xl:mt-16 mt-10">
                        <div className="xl:col-span-4 col-span-12">
                            <Image
                                src="/images/webinar/anurag.webp"
                                alt="Voyage with SAP – Transformational RISE with SAP Services by Rialtes"
                                priority
                                className="xl:w-[256px] xl:h-[256px] w-full h-auto"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:col-span-8 col-span-12 mt-5 xl:mt-0">
                            <h3 className="xl:text-[24px] text-[#0092E0]">Speaker</h3>
                            <h3 className="mt-3 xl:text-[29px] font-bold mb-3">Anuraag Aggarwal</h3>
                            <h3 className="mt-[-10px] xl:text-[24px]">Vice President of Global Sales</h3>
                        </div>
                    </div>
                    <p className="mt-16 xl:pr-32">Join us for an exclusive deep dive into transformational SAP journeys to explore how Rialtes' Voyager+ framework streamlines every step of your SAP journey, from license advisory to post-go-live success. Discover how you can simplify your RISE with SAP transformation with a clear, value-driven, all-in-one approach designed to accelerate cloud adoption, reduce technical debt, reimagine processes, and infuse AI-powered innovation into your operations.</p>

                    <h3 className="mt-16 text-[#0092E0]">In This Webinar, You'll Get:</h3>
                    <ul className="list-disc marker:text-black text-black pl-4 pb-6 xl:text-[20px] text-[16px] marker:font-bold font-medium pr-24">

                        <li className="pb-2 mt-5"><strong>Simplify SAP Transformation:</strong> How an integrated approach removes complexity.</li>
                        <li className="pb-2"><strong>Accelerate Cloud Adoption:</strong> Strategies to migrate faster and smarter while minimizing technical debt.</li>
                        <li className="pb-2"><strong>Process Reimagination with SAP Signavio:</strong> Unlock new efficiencies and innovation opportunities..</li>
                        <li className="pb-2"><strong>Tap into AI and Automation:</strong> Enhance your SAP operations for smarter, autonomous workflows.</li>
                        <li className="pb-2"><strong>Live Demo:</strong> See the Voyager+ framework in action, supporting a smooth RISE with SAP journey.</li>

                    </ul>
                    <h3 className="mt-10 text-[#0092E0]">Who Should Attend?</h3>
                    <ul className="list-disc marker:text-black text-black pl-4 pb-6 xl:text-[20px] text-[16px] marker:font-bold font-medium">

                        <li className="pb-2 mt-5">CIOs and IT Leaders</li>
                        <li className="pb-2">Digital Transformation Leaders</li>
                        <li className="pb-2">SAP Technical Consultants</li>
                        <li className="pb-2">SAP Functional Consultants</li>
                        <li className="pb-2">Enterprise Architects</li>
                        <li className="pb-2">Anyone planning or accelerating their RISE with SAP transformation</li>

                    </ul>
                    <Link href="https://us06web.zoom.us/webinar/register/WN_70Iq56coShaL0BdO-I2jyQ">
                        <button className="text-white xl:text-[20px] xl:block hidden text-[16px] font-bold p-5 bg-blue-500 mt-8">Register Now</button>

                    </Link>

                </div>
                <div className="xl:col-span-4 col-span-12 ">
                    <div className="bg-[#0092E0] xl:h-[490px] xl:w-[532px] xl:pt-20 xl:pl-16 pr-10 pt-10 pl-10 pb-10 text-white">
                        <h2 className="font-extrabold">03</h2>
                        <h3>June 2025</h3>
                        <h3 className="font-medium mt-8">10:00 AM CST | 8.30 PM IST</h3>
                        <h3 className="font-medium mt-3">11 AM EST | 8 AM PST</h3>
                        <Link href="https://us06web.zoom.us/webinar/register/WN_70Iq56coShaL0BdO-I2jyQ">
                            <button className="text-[#0092E0] xl:text-[20px] text-[16px] font-bold p-5 bg-white mt-8">Register Now</button>

                        </Link>

                    </div>
                    <p className="mt-10">Webinar Starting In</p>
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
                    </div>
                    <h3 className="mt-10">How to Join:</h3>
                    <p className="mt-5">Once registered, you will receive a confirmation email with the webinar access link and instructions.</p>
                    <h3 className="mt-10">Can’t Make It?</h3>
                    <p className="mt-3">No problem! Go ahead and register, and we’ll send you a recording of the webinar afterward, so you can watch it whenever it suits you best.</p>
                    <p className="mt-10 pb-16 xl:pb-0">For inquiries, please contact sales@rialtes.com.</p>
                </div>
                <div className="xl:col-span-1 col-span-12"></div>
            </div>
        </div>
    );
}