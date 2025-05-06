"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Link from "next/link";


export default function About() {
    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-05-08T15:00:00Z"); // 10:00 AM CST = 15:00 UTC
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


    const fullUrl = "https://rialtes.netlify.app/insights/webinars/deliver-end-to-end-customer-journey-with-salesforce-automotive-cloud"
    const titleSlug = "Deliver End-to-End Customer Journey with Salesforce Automotive Cloud";

    return (
        <div className="min-h-screen">
            <Seo
                title="Salesforce WhatsApp Integration via AgentChat | Rialtes Webinar"
                description="See how to integrate WhatsApp with Salesforce using AgentChat and empower CX teams with secure, real-time engagement across all touchpoints"
                canonical="https://www.rialtes.com/insights/webinars/deliver-end-to-end-customer-journey-with-salesforce-automotive-cloud/"
            />


            <section className="relative h-[250px] sm:h-[500px] xl:h-[650px] overflow-hidden xl:ml-[280px]">
                <Image
                    src="/images/webinar/thumbc.webp"
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
                    <h1 className="xl:leading-tight mt-10 font-medium xl:font-normal">Deliver End-to-End Customer Journey with Salesforce Automotive Cloud</h1>
                    <div className="grid xl:grid-cols-12 xl:mt-16 mt-10">
                        <div className="xl:col-span-4 col-span-12">
                            <Image
                                src="/images/webinar/Divya.webp"
                                alt="RealForce Banking Module - ACH"
                                priority
                                className="xl:w-[256px] xl:h-[256px] w-full h-auto"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:col-span-8 col-span-12 mt-5 xl:mt-0">
                            <h3 className="xl:text-[24px] text-[#0092E0]">Speaker</h3>
                            <h3 className="mt-3 xl:text-[29px] font-bold mb-3">Divya Agarwal</h3>
                            <h3 className="mt-[-10px] xl:text-[24px]">Software Engineer - Salesforce</h3>
                        </div>
                    </div>
                    <p className="mt-16 xl:pr-32">Don’t miss this opportunity to join us for an exclusive webinar to explore how <strong>Salesforce Automotive Cloud</strong> is revolutionizing customer engagement in the auto industry. Discover how your teams can steer every customer interaction using data, AI, and automation—from lead to loyalty, all inside one connected platform.</p>

                    <h3 className="mt-16 text-[#0092E0]">In This Webinar, You'll Get:</h3>
                    <p className="mt-5 xl:pr-32"><strong>Comprehensive Overview:</strong> Understand the core capabilities of Salesforce Automotive Cloud and how it supports a connected customer journey in the automotive sector.</p>
                    <p className="mt-5 xl:pr-32"><strong>Introduction to the Automotive Cloud:</strong> Learn how the platform addresses industry-specific challenges and use cases tailored to auto manufacturers, dealers, and mobility service providers.</p>
                    <p className="mt-5"><strong>Key Insights and Stakeholder Scenarios:</strong> Explore how various stakeholders, from sales to service, can leverage Automotive Cloud for personalized engagement and seamless collaboration.</p>
                    <p className="mt-5 xl:pr-32"><strong>Unified Customer Data: </strong> See how you can unify every touchpoint across sales, service, marketing, and post-sale support for a 360° customer view.</p>
                    <p className="mt-5 xl:pr-32"><strong>Streamlined Sales & Service:</strong> Experience smarter workflows and automation that enhance response times, reduce friction, and drive conversions.</p>

                    <h3 className="mt-16 text-[#0092E0]">Who Should Attend?</h3>
                    <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-6 xl:text-[20px] text-[16px] marker:font-bold font-medium">

                        <li className="pb-2 mt-5">Automotive Sales & Service Leaders</li>
                        <li className="pb-2">CRM & Digital Transformation Heads</li>
                        <li className="pb-2">Dealership Owners & Operators</li>
                        <li className="pb-2">Auto Manufacturer IT Teams</li>
                        <li className="pb-2">Salesforce Admins & Consultants</li>
                        <li className="pb-2">Anyone seeking to deliver high-performance customer experiences in the auto industry</li>

                    </ul>
                    <Link href="https://us06web.zoom.us/webinar/register/WN_Jy51QtZpQx2b7AXfPq_gCg#/registration">
                        <button className="text-white xl:text-[20px] xl:block hidden text-[16px] font-bold p-5 bg-blue-500 mt-8">Register Now</button>

                    </Link>

                </div>
                <div className="xl:col-span-4 col-span-12 ">
                    <div className="bg-[#0092E0] xl:h-[490px] xl:w-[532px] xl:pt-20 xl:pl-16 pr-10 pt-10 pl-10 pb-10 text-white">
                        <h2 className="font-extrabold">08</h2>
                        <h3>May 2025</h3>
                        <h3 className="font-medium mt-8">10:00 AM CST | 8.30 PM IST</h3>
                        <h3 className="font-medium mt-3">11 AM EST | 8 AM PST</h3>
                        <Link href="https://us06web.zoom.us/webinar/register/WN_Jy51QtZpQx2b7AXfPq_gCg#/registration">
                            <button className="text-[#0092E0] xl:text-[20px] text-[16px] font-bold p-5 bg-white mt-8">Register Now</button>

                        </Link>

                    </div>
                    <p className="mt-10">Webinar Starting In</p>
                    <div class="flex items-center gap-4 xl:text-3xl text-2xl font-bold xl:mt-10 mt-5 border-b pb-10">
                        <div class="text-[#0092E0]">
                            <strong className="xl:text-[49px] font-semibold">{String(timeLeft.days).padStart(2, "0")}</strong>
                            <span class="text-xs text-black font-normal">Days</span>
                        </div>
                        <span class="text-black font-normal">:</span>
                        <div class="text-[#0092E0]">
                            <strong className="xl:text-[49px] font-semibold">{String(timeLeft.hours).padStart(2, "0")}</strong>
                            <span class="text-xs text-black font-normal">Hrs</span>
                        </div>
                        <span class="text-black font-normal">:</span>
                        <div class="text-[#0092E0]">
                            <strong className="xl:text-[49px] font-semibold">{String(timeLeft.minutes).padStart(2, "0")}</strong>
                            <span class="text-xs text-black font-normal">Min</span>
                        </div>
                        <span class="text-black font-normal">:</span>
                        <div class="text-[#0092E0]">
                            <strong className="xl:text-[49px] font-semibold">{String(timeLeft.seconds).padStart(2, "0")}</strong>
                            <span class="text-xs text-black font-normal">Sec</span>
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
