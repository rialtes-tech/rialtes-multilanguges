"use client";
// pages/success-factors.js
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import { useState } from "react";
import LearnMore from "@/app/[locale]/components/learnMore";




export default function Page() {

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Rise with SAP | Company Name</title>
                <meta name="description" content="About our company" />
            </Head>

            <section className="relative h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden">
                <Image
                    src="/images/industry/mediyina/Rialchat Banner.png"
                    alt="RISE with SAP"
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
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
                    <div className="container mx-auto px-6 h-full flex flex-col justify-center">
                        <div className="flex flex-col xl:place-self-end">
                            <h3 className="text-white text-[300] font-medium mb-2">RIALCHAT</h3>
                            <h1 className="text-white max-w-2xl">
                                Native WhatsApp Integration for Salesforce
                            </h1>
                        </div>

                    </div>
                </div>
            </section>
        
         
         
         <div className="bg-gradient-to-t from-[#0092E0] via-[#0092E0] text-white">
            <section
                className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >

                <div className="py-10">
                    <div className="container mx-auto 2xl:pr-80 xl:pr-40 md:pr-20">
                        <div className="flex flex-col w-full xl:w-2/3 xl:mr-20 xl:mb-0 mb-4">
                            <h2 className="md:pb-0 pb-4">Seamless WhatsApp Communication for Connecting Your Businesses</h2>
                        </div>
                        <div className="flex flex-col w-full xl:w-2/3">
                            <p>Traditional methods like emails or phone calls often delay engagement with leads, affecting conversions. WhatsApp is the preferred communication channel for instant, conversational interactions. RialChat bridges the gap, allowing sales reps and service agents to connect with leads, customers, and prospects seamlessly from Salesforce. It connects your customer relationship management to one of the world’s most widely used messaging platforms.</p>
                        </div>

                    </div>
                </div>
            </section>
            <div
                className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <section className="pb-16">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row xl:items-center py-6 gap-6">
                            <div className="flex flex-col w-full">
                                <div className="relative overflow-hidden mr-6">
                                    <Image
                                        className="w-full transition-transform duration-300 hover:scale-105"
                                        src='/images/services/rise-with-sap/solution-to-success.webp'
                                        alt="Our Solution to Success"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <h2 className="pb-6  xl:flex hidden">Transform Your Sales and Service Communication with RialChat</h2>
                                <p className="pb-6">Imagine being able to send messages, share updates, resolve service requests, or provide customer support directly from Salesforce. </p>
                                <p>We give you RialChat for smooth and efficient customer interactions on WhatsApp directly within your CRM. Your sales and service teams can manage all customer conversations without leaving Salesforce, ensuring real-time engagement, streamlined processes, and productivity</p>

                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row xl:items-center py-6 gap-6">
                        <div className="flex flex-col w-full">
                            <div className="relative overflow-hidden mr-6">
                                <Image
                                    className="w-full transition-transform duration-300 hover:scale-105"
                                    src='/images/services/rise-with-sap/solution-to-success.webp'
                                    alt="Our Solution to Success"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <h2 className="pb-6 xl:flex hidden">Seamless Messaging</h2>
                            <hr></hr>
                            <p className=" pb-6 mt-5">Initiate and manage WhatsApp conversations directly within Salesforce, ensuring efficient communication for both sales and support teams.</p>
                            <div>
                              <LearnMore/>
                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row xl:items-center py-6 gap-6">

                        <div className="flex flex-col w-full">
                            <h2 className="pb-6 xl:flex hidden">Rich Media Support</h2>
                            <hr></hr>
                            <p className=" pb-6 mt-5">Send and receive images, videos, and documents effortlessly, making interactions more engaging and personalized.</p>
                            <div>
                            <LearnMore/>

                            </div>

                        </div>
                        <div className="flex flex-col w-full">
                            <div className="relative overflow-hidden mr-6">
                                <Image
                                    className="w-full transition-transform duration-300 hover:scale-105"
                                    src='/images/services/rise-with-sap/solution-to-success.webp'
                                    alt="Our Solution to Success"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row xl:items-center py-6 gap-6">
                        <div className="flex flex-col w-full">
                            <div className="relative overflow-hidden mr-6">
                                <Image
                                    className="w-full transition-transform duration-300 hover:scale-105"
                                    src='/images/services/rise-with-sap/solution-to-success.webp'
                                    alt="Our Solution to Success"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <h2 className="pb-6 xl:flex hidden">Automated Conversation Logging</h2>
                            <hr></hr>
                            <p className=" pb-6 mt-5">Track and store all WhatsApp conversations within Salesforce, ensuring centralized and accessible records for both sales and customer service interactions.</p>
                            <div>
                            <LearnMore/>

                            </div>

                        </div>


                    </div>

                    <div className="flex flex-col md:flex-row xl:items-center py-6 gap-6">
                        <div className="flex flex-col w-full">
                            <h2 className="pb-6 xl:flex hidden">Improved Lead & Customer Management</h2>
                            <hr></hr>
                            <p className=" pb-6 mt-5">If a sales or support rep leaves the company, the conversation history remains in Salesforce, maintaining continuity and performance tracking.</p>
                            <div>
                            <LearnMore/>

                            </div>

                        </div>
                        <div className="flex flex-col w-full">
                            <div className="relative overflow-hidden mr-6">
                                <Image
                                    className="w-full transition-transform duration-300 hover:scale-105"
                                    src='/images/services/rise-with-sap/solution-to-success.webp'
                                    alt="Our Solution to Success"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                        </div>



                    </div>

                    <div className="flex flex-col md:flex-row xl:items-center py-6 gap-6">

                        <div className="flex flex-col w-full">
                            <div className="relative overflow-hidden mr-6">
                                <Image
                                    className="w-full transition-transform duration-300 hover:scale-105"
                                    src='/images/services/rise-with-sap/solution-to-success.webp'
                                    alt="Our Solution to Success"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <h2 className="pb-6 xl:flex hidden">Tracking & Automation</h2>
                            <hr></hr>
                            <p className="pb-6 mt-5">Automate workflows, schedule follow-ups, and gain valuable insights into lead interactions and customer support tickets, improving response time and productivity.</p>
                            <div>
                            <LearnMore/>

                            </div>

                        </div>


                    </div>

                    <div className="flex flex-col md:flex-row xl:items-center py-6 gap-6">


                        <div className="flex flex-col w-full">
                            <h2 className="pb-6 xl:flex hidden">Multi-Agent Collaboration</h2>
                            <hr></hr>
                            <p className="pb-6 mt-5">Enable seamless collaboration between sales, service, and support member within Salesforce to provide a unified customer experience.</p>
                            <div>
                            <LearnMore/>

                            </div>

                        </div>
                        <div className="flex flex-col w-full">
                            <div className="relative overflow-hidden mr-6">
                                <Image
                                    className="w-full transition-transform duration-300 hover:scale-105"
                                    src='/images/services/rise-with-sap/solution-to-success.webp'
                                    alt="Our Solution to Success"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                        </div>


                    </div>


                    <div className="flex flex-col md:flex-row xl:items-center py-6 gap-6">
                        <div className="flex flex-col w-full">
                            <div className="relative overflow-hidden mr-6">
                                <Image
                                    className="w-full transition-transform duration-300 hover:scale-105"
                                    src='/images/services/rise-with-sap/solution-to-success.webp'
                                    alt="Our Solution to Success"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <h2 className="pb-6 xl:flex hidden">Customer Support Integration</h2>
                            <hr></hr>
                            <p className="pb-6 mt-5">Allow service agents to handle customer inquiries, complaints, and support requests efficiently through WhatsApp, ensuring fast resolutions and better customer satisfaction.</p>
                            <div>
                            <LearnMore/>

                            </div>

                        </div>



                    </div>
                </section>
            </div>

            <div
                className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <section className="py-16">

                </section>

            </div>


            <div
                className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <section className="py-16 text-white">
                    <h2 className="xl:w-[50%] w-full">Safeguard Your Business with Security & Compliance</h2>
                    <p className="mt-5 xl:w-[70%] w-full">We understand that data security is a top priority for businesses handling customer information. RialChat ensures that all communications comply with industry standards and regulations, including GDPR and ISO requirements.</p>
                    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-16">
                        <div className="bg-white p-5 shadow-md">
                            <h4 className="text-[#1F3F69]">End-to-End Encryption</h4>
                            <p className="mt-3 text-black">Protects sensitive customer data and ensures secure messaging.</p>
                        </div>
                        <div className="bg-white p-5 shadow-md">
                            <h4 className="text-[#1F3F69]">Centralized Data Storage</h4>
                            <p className="mt-3 text-black">All chat history is stored within Salesforce, reducing dependency on personal devices.</p>
                        </div>
                        <div className="bg-white p-5 shadow-md">
                            <h4 className="text-[#1F3F69]">Access Controls</h4>
                            <p className="mt-3 text-black">Role-based permissions ensure that only authorized personnel can access critical customer conversations.</p>
                        </div>
                        <div className="bg-white p-5 shadow-md">
                            <h4 className="text-[#1F3F69]">Regulatory Compliance</h4>
                            <p className="mt-3 text-black">RialChat helps businesses adhere to data privacy laws and industry-specific compliance requirements.</p>
                        </div>
                    </div>

                </section>
            </div>

            </div>
         
          
          
            <div className="bg-[#EDEDED]">
                <div
                    className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
                >
                    <section className="py-16 ">
                        <h2 className="xl:w-[50%] w-full">CRM-Enabled WhatsApp Connectivity</h2>
                        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-16">
                            <div>
                                <div className="text-[#0092E0] xl:text-6xl text-lg font-bold">98%</div>
                                <h4 className="text-[#0092E0] mt-3">Open Rate</h4>
                                <p className="mt-3">Ensure your messages are seen with WhatsApp’s exceptional open rate</p>
                            </div>
                            <div>
                                <div className="text-[#0092E0] xl:text-6xl text-lg font-bold">40%</div>
                                <h4 className="text-[#0092E0] mt-3">Higher Response Rate</h4>
                                <p className="mt-3">Get faster customer responses compared to email and SMS</p>
                            </div>

                            <div>
                                <div className="text-[#0092E0] xl:text-6xl text-lg font-bold">50M+</div>
                                <h4 className="text-[#0092E0] mt-3">Businesses on WhatsApp</h4>
                                <p className="mt-3">Leverage WhatsApp for sales, support, and engagement</p>
                            </div>

                            <div>
                                <div className="text-[#0092E0] xl:text-6xl text-lg font-bold">3x</div>
                                <h4 className="text-[#0092E0] mt-3">Faster Query Resolution</h4>
                                <p className="mt-3">Boost efficiency with CRM-integrated WhatsApp support</p>
                            </div>
                        </div>

                    </section>
                </div>
            </div>


            {/* Contact Form */}
            < div
                className="mt-20 mb-20
  container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black py-6"
            >
                <ContactForm title={'Take the next step to operational excellence with us.'} className={'max-w-4xl'} />

            </div >
        </div >
    );
}