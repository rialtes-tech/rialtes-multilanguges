"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import WebinarForm from "@/app/components/webinarForm";
import Script from "next/script";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Discover the Agentic Capabilities of Agentforce",
  "description": "Join this exclusive webinar to explore how Agentforce brings agentic AI to life with intelligent autonomous agents that think, act, learn, and evolve alongside your team. Discover how Agentforce transforms workplaces with proactive AI agents capable of autonomous task execution, contextual human-like interactions, seamless integration, and real-world impact across industries.",
  "url": "https://www.rialtes.com/insights/webinars/discover-the-agentic-capabilities-of-agentforce",
  "startDate": "2025-05-15T20:30:00+05:30",
  "endDate": "2025-05-15T21:00:00+05:30",
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
    "jobTitle": "Software Engineer",
    "url": "https://www.linkedin.com/in/lokeshadhikari/"
  },
  "location": {
    "@type": "VirtualLocation",
    "url": "https://www.rialtes.com/insights/webinars/discover-the-agentic-capabilities-of-agentforce"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": [
      "Business Leaders",
      "Innovation & AI Teams",
      "IT Decision-Makers",
      "Salesforce Administrators and Consultants",
      "Anyone looking to supercharge workflows with intelligent, agentic AI solutions"
    ]
  },
  "keywords": [
    "Agentforce webinar",
    "agentic AI webinar",
    "Salesforce AI",
    "Rialtes webinar"
  ]
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
        const targetDate = new Date("2025-05-15T15:00:00Z"); // 10:00 AM CST = 15:00 UTC
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


    const fullUrl = "https://rialtes.netlify.app/insights/webinars/discover-the-agentic-capabilities-of-agentforce"

    return (
        <div className="min-h-screen">
            <Seo
                title="AI Webinar: Exploring Agentic Capabilities with Agentforce | Rialtes"
                description="Join our AI webinar to discover how Agentforce’s agentic AI transforms enterprise workflows with autonomous agents, context, and smart integration."
                canonical="https://www.rialtes.com/insights/webinars/discover-the-agentic-capabilities-of-agentforce/"
            />
       <Script
        id="webinar-schema-discover"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
            <section className="relative custom-container xl:!pr-0  max-md:px-0">
                <Image
                    src="/images/webinar/Webinar_15 May 25_webinar Banner.webp"
                    alt="Webinar Header"
                    priority
                    width={0}
                    height={0}
                    className="w-full h-full"
                    sizes="100vw"
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
                    <h1 className="xl:leading-tight mt-10 font-medium xl:font-normal xl:text-[40px] 4xl:text-[60px]">Discover the Agentic Capabilities of Agentforce</h1>
                    <div className="grid xl:grid-cols-12 xl:mt-16 mt-10 xl:gap-10">
                        <div className="xl:col-span-4 col-span-12">
                            <Image
                                src="/images/webinar/Lokesh.webp"
                                alt="Discover the Agentic Capabilities of Agentforce"
                                priority
                                className="w-full h-auto"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:col-span-8 col-span-12 mt-5 xl:mt-0">
                            <h3 className="xl:text-[24px] text-[#0092E0]">Speaker</h3>
                            <h3 className="mt-3 4xl:text-[29px] xl:text-[22px] font-bold mb-3">Lokesh Adhikari</h3>
                            <h3 className="mt-[-10px] 4xl:text-[24px] xl:text-[20px]">Software Engineer - Salesforce</h3>
                        </div>
                    </div>
                    <p className="mt-16 xl:pr-32">Don’t miss this opportunity to join us for an exclusive webinar to explore how <strong>Salesforce Automotive Cloud</strong> is revolutionizing customer engagement in the auto industry. Discover how your teams can steer every customer interaction using data, AI, and automation—from lead to loyalty, all inside one connected platform.</p>

                    <h3 className="mt-16 text-[#0092E0]">In This Webinar, You'll Get:</h3>
                    <p className="mt-5 xl:pr-32"><strong>What is Agentforce? </strong> Understand the fundamentals of Agentic AI and how Agentforce stands apart from traditional bots.</p>
                    <p className="mt-5 xl:pr-32"><strong>Autonomous Task Execution: </strong>See how intelligent agents can complete tasks without manual intervention.</p>
                    <p className="mt-5"><strong>Human-like, Contextual Interactions:</strong> Explore how Agentforce understands context, maintains conversation memory, and engages in natural, personalized conversations.</p>
                    <p className="mt-5 xl:pr-32"><strong>Seamless Integration with Your Tech Stack: </strong> how Agentforce easily plugs into your existing Salesforce ecosystem and other enterprise tools.</p>
                    <p className="mt-5 xl:pr-32"><strong>Real-World Impact & Bonus Capabilities: </strong> See how Agentforce delivers measurable value across industries and discover additional capabilities like multi-channel support, and AI-driven insight</p>

                    <h3 className="mt-16 text-[#0092E0]">Who Should Attend?</h3>
                    <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-6 xl:text-[20px] text-[16px] marker:font-bold font-medium">

                        <li className="pb-2 mt-5">Business Leaders</li>
                        <li className="pb-2">Innovation & AI Teams</li>
                        <li className="pb-2">IT Decision-Makers</li>
                        <li className="pb-2">Salesforce Administrators and Consultants</li>
                        <li className="pb-2">Innovation and Digital Transformation Teams</li>
                        <li className="pb-2">Anyone looking to supercharge workflows with intelligent, agentic AI solutions</li>

                    </ul>


                </div>
                <div className="xl:col-span-4 col-span-12 ">
                    <div className="bg-[#0092E0] xl:h-[490px] xl:w-[532px] xl:pt-20 xl:pl-16 pr-10 pt-10 pl-10 pb-10 text-white">
                        <h2 className="font-extrabold">15</h2>
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
                    <p className="mt-10 xl:pb-0">For inquiries, please contact sales@rialtes.com.</p>
                </div>
                <div className="xl:col-span-1 col-span-12"></div>
            </div>
            <div className="custom-container mb-20" ref={sectionRef}>
                <WebinarForm
                    redirectUrl="https://www.youtube.com/watch?v=EcPEwPAG2SM"
                    emailWebinarLink="https://www.rialtes.com/insights/webinars/discover-the-agentic-capabilities-of-agentforce"
                />
            </div>

        </div>
    );
}
