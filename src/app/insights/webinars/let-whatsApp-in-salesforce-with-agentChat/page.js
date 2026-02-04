"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import WebinarForm from "@/app/components/webinarForm";
import Script from "next/script";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Let’s WhatsApp in Salesforce with AgentChat",
    "description": "Discover how AgentChat, Rialtes' native, bidirectional Salesforce WhatsApp integration, transforms team communication directly within Salesforce. Learn about cross-cloud compatibility, faster customer response times, workflow automation, and more. This is a recorded webinar.",
    "url": "https://www.rialtes.com/insights/webinars/let-whatsapp-in-salesforce-with-agentchat",
    "startDate": "2024-05-06T20:30:00+05:30",
    "endDate": "2024-05-06T21:00:00+05:30",
    "duration": "PT30M",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventCompleted",
    "organizer": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg"
    },
    "performer": {
        "@type": "Person",
        "name": "Lokesh Adhikari",
        "jobTitle": "Software Engineer - Salesforce",
        "url": "https://www.linkedin.com/in/lokeshadhikari/"
    },
    "image": "https://www.rialtes.com/images/webinar/Webinar_6.webp",
    "audience": {
        "@type": "Audience",
        "audienceType": "Salesforce Admins & Developers, Sales & Service Team Leads, Customer Experience Managers, Field Operations Managers, CRM & Marketing Professionals"
    },
    "location": {
        "@type": "VirtualLocation",
        "url": "https://www.rialtes.com/insights/webinars/let-whatsapp-in-salesforce-with-agentchat"
    },
    "keywords": "WhatsApp integration with Salesforce, Salesforce webinar, Salesforce integration webinar"
}

export default function About() {
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
        const targetDate = new Date("2025-05-06T15:00:00Z"); // 10:00 AM CST = 15:00 UTC
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


    const fullUrl = "https://rialtes.netlify.app/insights/webinars/let-whatsapp-in-salesforce-with-agentchat";

    return (
        <div className="min-h-screen">
            <Seo
                title="Salesforce WhatsApp Integration via AgentChat | Rialtes Webinar"
                description="See how to integrate WhatsApp with Salesforce using AgentChat and empower CX teams with secure, real-time engagement across all touchpoints"
                canonical="https://www.rialtes.com/insights/webinars/let-whatsapp-in-salesforce-with-agentchat"
            />

            <Script
                id="webinar-schema-let"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <section className="relative custom-container xl:!pr-0">
                <Image
                    src="/images/webinar/Webinar_6.webp"
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
                    <h1 className="xl:leading-tight mt-10 font-medium xl:font-normal xl:text-[40px] 4xl:text-[60px]">Let’s WhatsApp in Salesforce with AgentChat</h1>
                    <div className="grid xl:grid-cols-12 xl:mt-16 mt-10 xl:gap-10">
                        <div className="xl:col-span-4 col-span-12">
                            <Image
                                src="/images/webinar/Lokesh.webp"
                                alt="RealForce Banking Module - ACH"
                                priority
                                className="w-full h-auto"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:col-span-8 col-span-12 mt-5 xl:mt-0">
                            <h3 className="xl:text-[24px]  text-[#0092E0]">Speaker</h3>
                            <h3 className="mt-3 4xl:text-[29px] xl:text-[22px] font-bold mb-3">Lokesh Adhikari</h3>
                            <h3 className="mt-[-10px] 4xl:text-[24px] xl:text-[20px]">Software Engineer - Salesforce</h3>
                        </div>
                    </div>
                    <p className="mt-16 xl:pr-32">Don’t miss this exclusive webinar to discover how <strong>AgentChat</strong>, our native, bidirectional Salesforce WhatsApp integration, transforms the way your teams communicate, directly within Salesforce. Whether you're in Sales, Service, Marketing, or Field Operations, AgentChat brings seamless, real-time WhatsApp conversations to your CRM environment.</p>

                    <h3 className="mt-16 text-[#0092E0]">In This Webinar, You’ll Learn:</h3>
                    <p className="mt-5 xl:pr-32"><strong>Cross-Cloud Compatibility:</strong> How AgentChat works across every Salesforce Cloud—from Sales and Service to Marketing and Field Ops.</p>
                    <p className="mt-5 xl:pr-32"><strong>Faster Customer Response Times:</strong> Reduce delays and close conversations faster.</p>
                    <p className="mt-5"><strong>Workflow Automation:</strong> Trigger tasks, alerts, and records based on chat actions.</p>
                    <p className="mt-5 xl:pr-32"><strong>Features and Benefits: </strong> Explore the core capabilities of AgentChat and the real-world impact they deliver.</p>
                    <p className="mt-5 xl:pr-32"><strong>Live Demo:</strong> See AgentChat in action and how Salesforce WhatsApp integration fits into your current Salesforce setup.</p>

                    <h3 className="mt-16 text-[#0092E0]">Who Should Attend?</h3>
                    <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-6 xl:text-[20px] text-[16px] marker:font-bold font-medium">

                        <li className="pb-2 mt-5">Salesforce Admins & Developers</li>
                        <li className="pb-2">Sales & Service Team Leads</li>
                        <li className="pb-2">Customer Experience Managers</li>
                        <li className="pb-2">Field Operations Managers</li>
                        <li className="pb-2">CRM & Marketing Professionals</li>
                        <li className="pb-2">Anyone looking to improve customer engagement within Salesforce</li>

                    </ul>


                </div>
                <div className="xl:col-span-4 col-span-12 ">
                    <div className="bg-[#0092E0] xl:h-[490px] xl:w-[532px] xl:pt-20 xl:pl-16 pt-10 pr-10 pl-10 pb-10 text-white">
                        <h2 className="font-extrabold">06</h2>
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
                    <p className="mt-10  xl:pb-0">For inquiries, please contact sales@rialtes.com.</p>
                </div>
                <div className="xl:col-span-1 col-span-12"></div>
            </div>
            <div className="custom-container mb-20 scroll-mt-28 xl:scroll-mt-24 4xl:scroll-mt-16" ref={sectionRef} >
                <WebinarForm
                    redirectUrl="https://www.youtube.com/watch?v=QGKwqgjEyT4"
                    emailWebinarLink="https://www.rialtes.com/insights/webinars/let-whatsapp-in-salesforce-with-agentchat"
                />
            </div>
        </div>
    );
}
