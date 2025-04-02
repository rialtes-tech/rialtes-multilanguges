"use client";
// pages/success-factors.js
import Head from "next/head";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import Link from "next/link";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";

export default function Page() {

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="AgentChat"
                keywords="Contact, website, welcome"
            />
            <div className="relative bg-[#E8E8E8] xl:h-[1080px] h-[760px] xl:mt-[6rem]">
                <div className=" h-[700px] absolute
                        ml-[15px] w-[calc(100%-15px)]
                        xl:ml-[280px] xl:w-[calc(100%-280px)]
                        md:ml-[100px] md:w-[calc(100%-100px)]
                        sm:mx-5 sm:w-[calc(100%-40px)]
                        xs:mx-4 xs:w-[calc(100%-32px)]
                        ">
                    <div className="overflow-hidden relative">
                        <div className="w-full h-full xl:block hidden">
                            <Image
                                src="/images/industry/real-estate/newAgentchat.webp"
                                alt="About Us"
                                className="xl:h-[1900px] w-full bg-cover xl:object-contain  xl:mt-[-40rem] "
                                width={0}
                                height={0}
                                objectPosition="right"
                                priority
                            />
                        </div>

                        <div className="w-full h-full xl:hidden block">
                            <Image
                                src="/images/industry/real-estate/agentchat header mobile.webp"
                                alt="About Us"
                                className="xl:h-[1900px] h-[300px] w-full bg-cover xl:object-contain  xl:mt-[-40rem]"
                                width={0}
                                height={0}
                                objectPosition="right"
                                priority
                            />
                        </div>

                        <div className="absolute bg-[#134874] text-white xl:p-10 p-3 xl:w-[20%] w-[60%] xl:left-[6%] top-0 xl:top-0">
                            <p className="xl:text-xl">Introducing  </p>
                            <h1 className="xl:text-2xl text-lg">AgentChat:</h1>
                            <p className="xl:text-xl">Seamless WhatsApp Conversations Inside Salesforce</p>
                        </div>

                        <div className="absolute xl:right-[200px] xl:top-[30rem] top-[76%]">
                            <Image
                                className="xl:w-full w-[30%] xl:ml-0 xl:mt-0 ml-[70%] mt-50%]"
                                src='/images/industry/rialchat/AgentChat logo.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-[-30rem] xl:gap-20 gap-5 mt-10">
                        <div className="xl:col-span-4 col-span-1">
                            <h2>Engage, Support, and Close Deals - All Through WhatsApp. All Inside Salesforce.</h2>
                        </div>
                        <div className="xl:col-span-5 col-span-1">
                            <p>RialChat is a bi-directional WhatsApp conversational app natively built on Salesforce, enabling your teams to connect with customers instantly, manage conversations efficiently, and automate workflows — all without leaving Salesforce.</p>
                            <p className="mt-5">Whether you’re in Sales, Service, Marketing, Field Operations, or Education, RialChat works across all Salesforce Clouds and lets you turn WhatsApp into a powerful engagement tool for every team.</p>
                        </div>
                    </div>
                </div>
            </div>



            <div
                className="xl:mt-20 mb-10
  container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black py-6"
            >
                <h2>Why AgentChat?</h2>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 gris-cols-1 mt-10">
                    <div className="relative group overflow-hidden">
                        <Image
                            className="w-full transform transition-transform duration-500 group-hover:scale-110"
                            src='/images/industry/rialchat/Why AgentChat.png'
                            alt="Our Solution to Success"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />

                    </div>
                    <div>
                        <div className="border p-8 h-full hover:bg-[#134874] hover:text-white">
                            <h3 className="font-bold">Instant WhatsApp Conversations, Directly in Salesforce</h3>
                            <p className="xl:mt-20 mt-5">Connect and respond to customers over WhatsApp from any Salesforce record — Leads, Cases, Opportunities, Work Orders, or Custom Objects.</p>
                            <Image
                                className="w-[50px] xl:mt-20 mt-5 hover:invert hover:grayscale hover:contrast-100"
                                src='/images/industry/rialchat/Instant WhatsApp .svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                    <div>
                        <div className="border p-8 h-full hover:bg-[#134874] hover:text-white">
                            <h3 className="font-bold">Rapid Setup — Go Live in Minutes!</h3>
                            <p className="xl:mt-20 mt-5">No complex integrations. Plug-and-play setup within minutes. Start engaging right away.</p>
                            <Image
                                className="w-[50px] xl:mt-20 mt-5 hover:invert hover:grayscale hover:contrast-100"
                                src='/images/industry/rialchat/Rapid Setup.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="grid xl:grid-cols-3 md:grid-cols-2 gris-cols-1">
                    <div>
                        <div className="border p-8 h-full hover:bg-[#134874] hover:text-white">
                            <h3 className="font-bold">Bi-Directional & Real-Time Messaging</h3>
                            <p className="xl:mt-20 mt-5">Conversations sync in real-time — whether initiated from WhatsApp or Salesforce.</p>
                            <Image
                                className="w-[50px] xl:mt-20 mt-5 hover:invert hover:grayscale hover:contrast-100"
                                src='/images/industry/rialchat/Real-Time Messaging.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>

                    </div>
                    <div>
                        <div className="border p-8 h-full hover:bg-[#134874] hover:text-white">
                            <h3 className="font-bold">Delegate Messages to the Right Team Automatically</h3>
                            <p className="xl:mt-20 mt-5">Automatically route conversations by record type (e.g., Cases, Leads, Work Orders), ensuring the right team responds fast.</p>
                            <Image
                                className="w-[50px] xl:mt-20 mt-5 hover:invert hover:grayscale hover:contrast-100"
                                src='/images/industry/rialchat/Delegate Messages.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                    <div>
                        <div className="border p-8 h-full hover:bg-[#134874] hover:text-white">
                            <h3 className="font-bold">Built-in Role-Based Access and Security</h3>
                            <p className="xl:mt-20 mt-5">Control who can chat, view, and manage conversations with advanced role-based permissions and Salesforce’s native security model.</p>
                            <Image
                                className="w-[50px] xl:mt-20 mt-5 hover:invert hover:grayscale hover:contrast-100"
                                src='/images/industry/rialchat/Rapid Setup.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>

            </div >




            < div
                className="xl:mt-20 mb-20
  container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
  text-black"
            >
                <h2>Key Features of AgentChat</h2>
                <div className="grid xl:grid-cols-2 md:grid-cols-2 gris-cols-1 mt-10 border-b-2 hover:bg-gray-100 hover:p-5 hover:shadow-lg  transition-all duration-500 ease-in-out origin-left">
                    <div>
                        <h3>Real-Time, Two-Way WhatsApp Messaging</h3>
                        <ul className="list-disc list-inside mt-8">
                            <li className="marker:text-blue-500">Start and manage WhatsApp conversations directly from any Salesforce object.</li>
                            <li className="marker:text-blue-500 mt-3">Automatic conversation tracking linked to Salesforce records. </li>
                            <li className="marker:text-blue-500 mt-3">Full conversation history and audit trails.</li>
                        </ul>
                        <LearnMore />

                    </div>
                    <div className="mt-10 xl:mt-0">
                        <Image
                            className="xl:w-[75%] w-full"
                            src='/images/industry/rialchat/Seamless Messaging.png'
                            alt="Our Solution to Success"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>


                <div className="grid xl:grid-cols-2 md:grid-cols-2 gris-cols-1 mt-10 border-b-2 hover:bg-gray-100 hover:p-5 hover:shadow-lg  transition-all duration-500 ease-in-out origin-left">
                    <div>

                        <h3>Context-Aware Messaging</h3>
                        <ul className="list-disc list-inside mt-8">
                            <li className="marker:text-blue-500">Access full customer context from Salesforce while chatting.</li>
                            <li className="marker:text-blue-500 mt-3">Share files, media, and quick replies for faster resolutions.</li>
                        </ul>
                        <LearnMore />

                    </div>
                    <div className="mt-10 xl:mt-0">
                        <Image
                            className="xl:w-[75%] w-full"
                            src='/images/industry/rialchat/Rich Media Support.png'
                            alt="Our Solution to Success"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
                <div className="grid xl:grid-cols-2 md:grid-cols-2 gris-cols-1 mt-10 border-b-2 hover:bg-gray-100 hover:p-5 hover:shadow-lg  transition-all duration-500 ease-in-out origin-left">
                    <div>

                        <h3>Supports All Salesforce Clouds</h3>
                        <ul className="list-disc list-inside mt-8">
                            <li className="marker:text-blue-500"><span className="font-bold">Sales Cloud:</span> Convert chats to Leads and Opportunities. </li>
                            <li className="marker:text-blue-500 mt-3"><span className="font-bold">Service Cloud: </span>Manage Cases and provide instant support.</li>
                            <li className="marker:text-blue-500 mt-3"><span className="font-bold">Field Service:</span>  Coordinate field operations and Work Orders.</li>
                            <li className="marker:text-blue-500 mt-3"><span className="font-bold">Education Cloud: </span> Engage students and alumni for enrollment, advising, and support.</li>
                            <li className="marker:text-blue-500 mt-3"><span className="font-bold">Nonprofit Cloud: </span> Connect with donors, volunteers, and stakeholders.</li>

                        </ul>
                        <LearnMore />

                    </div>
                    <div className="mt-10 xl:mt-0">
                        <Image
                            className="xl:w-[75%] w-full"
                            src='/images/industry/rialchat/Automated Conversation Logging.png'
                            alt="Our Solution to Success"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
                <div className="grid xl:grid-cols-2 md:grid-cols-2 gris-cols-1 mt-10 border-b-2 hover:bg-gray-100 hover:p-5 hover:shadow-lg  transition-all duration-500 ease-in-out origin-left">
                    <div>
                        <h3>Seamless Salesforce Integration</h3>

                        <ul className="list-disc list-inside mt-8">
                            <li className="marker:text-blue-500">Works out-of-the-box with Cases, Leads, Opportunities, Work Orders, and more. </li>
                            <li className="marker:text-blue-500 mt-3"> Delegation and routing rules by record type — no manual effort needed.</li>
                        </ul>
                        <LearnMore />

                    </div>
                    <div className="mt-10 xl:mt-0">
                        <Image
                            className="xl:w-[75%] w-full"
                            src='/images/industry/rialchat/Seamless Messaging.png'
                            alt="Our Solution to Success"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
                <div className="grid xl:grid-cols-2 md:grid-cols-2 gris-cols-1 mt-10 border-b-2 hover:bg-gray-100 hover:p-5 hover:shadow-lg  transition-all duration-500 ease-in-out origin-left">
                    <div>

                        <h3>Multi-Role, Multi-Team Support</h3>
                        <ul className="list-disc list-inside mt-8">
                            <li className="marker:text-blue-500"> Serve customers through dedicated teams (Sales, Support, Field Agents, Advisors).</li>
                            <li className="marker:text-blue-500 mt-3"> Define who can initiate, view, or respond based on roles and business units.</li>
                        </ul>
                        <LearnMore />
                    </div>
                    <div className="mt-10 xl:mt-0">
                        <Image
                            className="xl:w-[75%] w-full"
                            src='/images/industry/rialchat/Multi-Agent Collaboration.webp'
                            alt="Our Solution to Success"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>

                <div className="grid xl:grid-cols-2 md:grid-cols-2 gris-cols-1 mt-10 border-b-2 hover:bg-gray-100 hover:p-5 hover:shadow-lg  transition-all duration-500 ease-in-out origin-left">
                    <div>

                        <h3>Salesforce-Native Security and Compliance</h3>

                        <ul className="list-disc list-inside mt-8">
                            <li className="marker:text-blue-500"> Leverages Salesforce’s role hierarchies, sharing rules, and object-level security.</li>
                            <li className="marker:text-blue-500 mt-3">  GDPR, HIPAA-ready based on Salesforce’s secure platform.</li>
                        </ul>
                        <LearnMore />
                    </div>
                    <div className="mt-10 xl:mt-0">
                        <Image
                            className="xl:w-[75%] w-full"
                            src='/images/industry/rialchat/Seamless Messaging.png'
                            alt="Our Solution to Success"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>



            </div >

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
                <h2>Use Cases for AgentChat</h2>
                <div className="xl:grid xl:grid-cols-4 flex justify-between  bg-[#D0EEFF] xl:p-5 p-3 mt-10">
                    <div className="xl:col-span-1"> <h3 className="xl:font-bold xl:text-[24px] text-[16px]">Use Case</h3></div>
                    <div className="xl:col-span-2"> <h3 className="xl:font-bold xl:text-[24px] text-[16px]">How AgentChat Helps</h3></div>
                </div>
                <div className="xl:grid xl:grid-cols-4 flex justify-between bg-[#F2F2F2] xl:p-5 p-3 mt-5 xl:gap-0 gap-10">
                    <div className="xl:col-span-1"> <h3 className="xl:text-[24px] text-[16px]">Customer Support</h3></div>
                    <div className="xl:col-span-2"> <h3 className="xl:text-[24px] text-[16px]">Manage support cases via WhatsApp, instantly.</h3></div>
                </div>
                <div className="xl:grid xl:grid-cols-4 flex justify-between  mt-10 xl:gap-0 gap-10 xl:p-5 p-3">
                    <div className="xl:col-span-1"> <h3 className="xl:text-[24px] text-[16px]">Sales Outreach</h3></div>
                    <div className="xl:col-span-2">   <h3 className="xl:text-[24px] text-[16px]">Engage leads, close deals with real-time chats.</h3></div>
                </div>
                <div className="xl:grid xl:grid-cols-4 flex justify-between bg-[#F2F2F2] xl:p-5 p-3 mt-10 xl:gap-0 gap-10">
                    <div className="xl:col-span-1">
                        <h3 className="xl:text-[24px] text-[16px]">Field Operations</h3></div>
                    <div className="xl:col-span-2"> <h3 className="xl:text-[24px] text-[16px]">Coordinate work orders and updates in real time.</h3></div>
                </div>
                <div className="xl:grid xl:grid-cols-4 flex justify-between mt-10 xl:gap-0 gap-10 xl:p-5 p-3">
                    <div className="xl:col-span-1">  <h3 className="xl:text-[24px] text-[16px]">Student Engagement</h3></div>
                    <div className="xl:col-span-2"> <h3 className="xl:text-[24px] text-[16px]">Connect with students and alumni seamlessly.</h3></div>
                </div>
                <div className="xl:grid xl:grid-cols-4 flex justify-between bg-[#F2F2F2] xl:p-5 p-3 mt-10 xl:gap-0 gap-10">
                    <div className="xl:col-span-1">  <h3 className="xl:text-[24px] text-[16px]">Donor Management</h3></div>
                    <div className="xl:col-span-2"> <h3 className="xl:text-[24px] text-[16px]">Stay in touch with donors via personalized chats.</h3></div>
                </div>
            </div>



            <div className="bg-[url('/images/industry/rialchat/bg2.png')] bg-cover bg-right overflow-hidden xl:h-[500px]">
                <div
                    className="mt-16 mb-20 text-white
  container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
 py-6"
                >
                    <h2>Quick Setup. Maximum Impact.</h2>
                    <div className="flex flex-col xl:flex-row mt-20 xl:gap-20">
                        <div className="relative">
                            <Image
                                className="w-[45%]"
                                src='/images/industry/rialchat/Group 380.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute left-[50px] top-[100px]">Install AgentChat from AppExchange.</p>
                        </div>

                        <div className="relative">
                            <Image
                                className="w-[45%]"
                                src='/images/industry/rialchat/Group 381.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute left-[50px] top-[100px]">Connect your WhatsApp Business Account securely.</p>
                        </div>

                        <div className="relative">
                            <Image
                                className="w-[45%]"
                                src='/images/industry/rialchat/Group 382.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute left-[50px] top-[100px]">Map to Salesforce record types (Cases, Leads, Work Orders, etc.).</p>
                        </div>

                        <div className="relative">
                            <Image
                                className="w-[45%]"
                                src='/images/industry/rialchat/Group 383.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute left-[50px] top-[100px]">Set roles and permissions for teams.</p>
                        </div>

                        <div className="relative">
                            <Image
                                className="w-[45%]"
                                src='/images/industry/rialchat/Group 384.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute left-[50px] top-[100px]">Start chatting — directly from Salesforce!</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="bg-[#134874] text-white xl:py-20">


                < div className="mb-20 container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
  sm:mx-5 sm:w-[calc(100%-40px)]
  xs:mx-4 xs:w-[calc(100%-32px)]
 py-6"
                >

                    <div className="grid xl:grid-cols-4">
                        <div className="xl:col-span-1">
                            <Image
                                className="w-[60%]"
                                src='/images/industry/rialchat/CTA (1).svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                        <div className="xl:col-span-2">
                            <h2>Ready to Supercharge WhatsApp Engagement in Salesforce?</h2>
                            <p className="mt-10">Book a Free Demo and see how AgentChat can transform customer engagement through WhatsApp — right inside Salesforce!</p>
                            <div className="xl:flex xl:flex-row flex-col mt-16 items-center gap-10 hidden">
                                <Image
                                    className="w-[50px]"
                                    src='/images/industry/rialchat/get started now (1).svg'
                                    alt="Our Solution to Success"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                />
                                <p className="border-r-2 pr-4">Get Started Now</p>
                                <Image
                                    className="w-[50px]"
                                    src='/images/industry/rialchat/contact us (1).svg'
                                    alt="Our Solution to Success"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                />
                                <p className="border-r-2 pr-4">Contact Us</p>

                                <Image
                                    className="w-[50px]"
                                    src='/images/industry/rialchat/demo (1).svg'
                                    alt="Our Solution to Success"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                />
                                <p>Scheduled a demo</p>
                            </div>
                        </div>
                    </div>
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