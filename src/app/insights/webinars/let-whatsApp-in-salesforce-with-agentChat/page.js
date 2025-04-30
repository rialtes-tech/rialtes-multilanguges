"use client";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { SlControlPlay } from "react-icons/sl";
import { useRouter } from "next/navigation";
import Seo from "@/app/components/Seo";
import Link from "next/link";

const webinars = [
    {
        id: 11,
        title: "SAP S/4 HANA: Sourcing and Procurement in S/4 HANA Public Cloud",
        date: "November 12, 2024",
        time: "10:00 AM CST",
        speaker: {
            name: "Sapana ",
            role: "Associate Software Engineer",
            image: "/images/webinar/sapna-chauhan.webp",
        },
        backgroundImage: "/images/webinar/upcoming-webinar-thumb-1.webp",
    },
    {
        id: 12,
        title: "SAP S/4 HANA: Sourcing and Procurement in S/4 HANA Public Cloud",
        date: "December 5, 2024",
        time: "2:00 PM EST",
        speaker: {
            name: "Michael Johnson",
            role: "Cloud Architect",
            image: "/images/webinar/sapna-chauhan.webp",
        },
        backgroundImage: "/images/webinar/upcoming-webinar-thumb-2.webp",
    },
    {
        id: 13,
        title: "SAP S/4 HANA: Sourcing and Procurement in S/4 HANA Public Cloud",
        date: "December 18, 2024",
        time: "11:00 AM PST",
        speaker: {
            name: "Priya Sharma",
            role: "Lead Data Scientist",
            image: "/images/webinar/sapna-chauhan.webp",
        },
        backgroundImage: "/images/webinar/upcoming-webinar-thumb-1.webp",
    },
];

const allWebinars = [
    {
        id: 1,
        title: "Salesforce CPQ: Bundle Configuration and Revenue Cloud Rules",
        date: "November 7, 2024",
        time: "10:00 AM CST",
        speaker: "Divya Agrawal",
        position: "Associate Software Engineer",
        image: "/images/webinar/webinar-thumb-1.webp",
    },
    {
        id: 2,
        title: "SAP Business AI: Setting Up Joule for SAP S/4 HANA Cloud",
        date: "November 5, 2024",
        time: "10:00 AM CST",
        speaker: "Kushagra Shah",
        position: "Senior Principal Consultant, SAP",
        image: "/images/webinar/webinar-thumb-3.webp",
    },
    {
        id: 3,
        title: "SAP Business AI: Setting Up Joule for SAP S/4 HANA Cloud",
        date: "November 5, 2024",
        time: "10:00 AM CST",
        speaker: "Kushagra Shah",
        position: "Senior Principal Consultant, SAP",
        image: "/images/webinar/webinar-thumb-1.webp",
    },
    {
        id: 4,
        title: "Cloud Migration Strategies for Enterprise",
        date: "October 25, 2024",
        time: "11:00 AM CST",
        speaker: "Raj Patel",
        position: "Cloud Solutions Architect",
        image: "/images/webinar/webinar-thumb-3.webp",
    },
    {
        id: 5,
        title: "Data Analytics with Power BI",
        date: "October 20, 2024",
        time: "2:00 PM CST",
        speaker: "Lisa Johnson",
        position: "Data Analytics Specialist",
        image: "/images/webinar/webinar-thumb-1.webp",
    },
    {
        id: 6,
        title: "AI Implementation in Customer Service",
        date: "October 15, 2024",
        time: "1:00 PM CST",
        speaker: "Michael Zhang",
        position: "AI Solutions Manager",
        image: "/images/webinar/webinar-thumb-3.webp",
    },
    {
        id: 7,
        title: "DevOps Best Practices",
        date: "October 10, 2024",
        time: "11:00 AM CST",
        speaker: "Sarah Williams",
        position: "DevOps Engineer",
        image: "/images/webinar/webinar-thumb-1.webp",
    },
    {
        id: 8,
        title: "Cybersecurity Trends 2025",
        date: "October 5, 2024",
        time: "10:00 AM CST",
        speaker: "James Rodriguez",
        position: "Security Specialist",
        image: "/images/webinar/webinar-thumb-3.webp",
    },
];

export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const carouselRef = useRef(null);
    const [hoveredBlog, setHoveredBlog] = useState(null);
    const [isRouterReady, setIsRouterReady] = useState(false);
    const router = useRouter();

    const [visibleCount, setVisibleCount] = useState(3);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };

    const visibleWebinars = allWebinars.slice(0, visibleCount);

    const hasMore = visibleCount < allWebinars.length;

    useEffect(() => {
        setIsRouterReady(true);
    }, []);

    const handleMouseEnter = (blogName) => {
        return () => {
            setHoveredBlog(blogName);
        };
    };

    const handleMouseLeave = () => {
        return () => {
            setHoveredBlog(null);
        };
    };

    const handleClick = (blogName) => {
        return () => {
            if (isRouterReady) {
                router.push(blogName);
            }
        };
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const nextSlide = () => {
        if (currentIndex < webinars.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const getSlideWidth = () => {
        if (isMobile) return 100;
        if (isTablet) return 80;
        return 80;
    };

    const getPeekWidth = () => {
        if (isMobile) return 0;
        if (isTablet) return 10;
        return 10;
    };

    const getTransformDistance = () => {
        const fullSlideWidth = getSlideWidth();
        return currentIndex * fullSlideWidth;
    };

    const hasNextSlide = currentIndex < webinars.length - 1;
    const fullUrl = "https://rialtes.netlify.app/insights/webinars/let-whatsApp-in-salesforce-with-agentChat";

    return (
        <div className="min-h-screen">
            <Seo
                title="Salesforce WhatsApp Integration via AgentChat | Rialtes Webinar"
                description="See how to integrate WhatsApp with Salesforce using AgentChat and empower CX teams with secure, real-time engagement across all touchpoints"
            />


            <section className="relative h-[250px] sm:h-[500px] xl:h-[650px] overflow-hidden xl:ml-[280px]">
                <Image
                    src="/images/webinar/Webinar_6.webp"
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
  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent("Let WhatsApp in Salesforce with AgentChat")}&summary=${encodeURIComponent("Join our webinar to explore integrating WhatsApp with Salesforce using AgentChat.")}&source=Rialtes`}
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
                    <h1 className="xl:leading-tight mt-10 font-medium xl:font-normal">Let’s WhatsApp in Salesforce with AgentChat</h1>
                    <div className="grid xl:grid-cols-12 xl:mt-16 mt-10">
                        <div className="xl:col-span-4 col-span-12">
                            <Image
                                src="/images/webinar/lokesh.webp"
                                alt="RealForce Banking Module - ACH"
                                priority
                                className="xl:w-[256px] xl:h-[256px] w-full h-auto"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:col-span-8 col-span-12 mt-5 xl:mt-0">
                            <h3 className="xl:text-[24px] text-[#0092E0]">Speaker</h3>
                            <h3 className="mt-3 xl:text-[29px] font-bold mb-3">Lokesh Adhikari</h3>
                            <h3 className="mt-[-10px] xl:text-[24px]">Software Engineer - Salesforce</h3>

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
                    <Link href="https://us06web.zoom.us/webinar/register/WN_AzyAJbyIRmm5R_cHgjW9PA#/registration">
                        <button className="text-white xl:text-[20px] xl:block hidden text-[16px] font-bold p-5 bg-blue-500 mt-8">Register Now</button>

                    </Link>

                </div>
                <div className="xl:col-span-4 col-span-12 ">
                    <div className="bg-[#0092E0] xl:h-[490px] xl:w-[532px] xl:pt-20 xl:pl-16 pt-10 pl-10 pb-10 text-white">
                        <h2 className="font-extrabold">06</h2>
                        <h3>May 2025</h3>
                        <h3 className="font-medium mt-8">10:00 AM CST | 8.30 PM IST</h3>
                        <Link href="https://us06web.zoom.us/webinar/register/WN_AzyAJbyIRmm5R_cHgjW9PA#/registration">
                            <button className="text-[#0092E0] xl:text-[20px] text-[16px] font-bold p-5 bg-white mt-8">Register Now</button>

                        </Link>

                    </div>
                    {/* <p className="mt-10">Webinar Starting In</p> */}
                    {/* <div class="flex items-center gap-4 text-3xl font-bold mt-10 border-b pb-10">
                        <div class="text-[#0092E0]">
                            <strong className="text-[49px] font-semibold">05</strong>
                            <span class="text-xs text-black font-normal">Days</span>
                        </div>
                        <span class="text-black font-normal">:</span>
                        <div class="text-[#0092E0]">
                            <strong className="text-[49px] font-semibold">00</strong>
                            <span class="text-xs text-black font-normal">Hrs</span>
                        </div>
                        <span class="text-black font-normal">:</span>
                        <div class="text-[#0092E0]">
                            <strong className="text-[49px] font-semibold">05</strong>
                            <span class="text-xs text-black font-normal">Min</span>
                        </div>
                        <span class="text-black font-normal">:</span>
                        <div class="text-[#0092E0]">
                            <strong className="text-[49px] font-semibold">38</strong>
                            <span class="text-xs text-black font-normal">Sec</span>
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
        </div>
    );
}
