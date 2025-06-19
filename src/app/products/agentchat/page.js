"use client";
// pages/success-factors.js
import Image from "next/image";
import ContactForm from "../../components/contactform";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";

export default function Page() {

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="AgentChat: Salesforce WhatsApp Integration Made Easy | Rialtes"
                description="AgentChat enables WhatsApp integration with Salesforce, reducing silos and enhancing team collaboration for stronger customer engagement and higher ROI."
                keywords="Contact, website, welcome"
                canonical="https://www.rialtes.com/products/agentchat/"
            />
            <div className="relative bg-[#E8E8E8] xl:h-[985px] h-[885px] md:h-[1200px] xl:mt-[15rem]">
                <div className="absolute custom-container xl:mt-[-220px] xl:!pr-0
                        ">
                    <div className="overflow-hidden relative">
                        <div className="w-full h-full xl:block hidden">
                            <Image
                                src="/images/industry/real-estate/newAgentchat.webp"
                                alt="About Us"
                                className="xl:h-[775px] w-full bg-cover xl:object-contain"
                                width={0}
                                height={0}
                                objectPosition="right"
                                priority
                                sizes="100vw"

                            />
                        </div>

                        <div className="w-full h-full xl:hidden block">
                            <Image
                                src="/images/industry/real-estate/agentchat header mobile.webp"
                                alt="About Us"
                                className="xl:h-[1900px] h-[300px] md:h-full w-full bg-cover xl:object-contain  xl:mt-[-40rem]"
                                width={0}
                                height={0}
                                objectPosition="right"
                                priority
                                sizes="100vw"
                            />
                        </div>

                        <div className="absolute bg-[#134874] text-white xl:p-10 p-3 xl:w-[33%] md:h-[350px] md:w-[385px] w-[65%] xl:left-[6%] top-0 xl:top-[50px]">
                            <h1 ><span className="xl:text-[30px] text-[17px] font-light block">Introducing</span> 
                            <span className="font-light block">AgentChat:</span>
                            <span  className="xl:text-[30px] text-[17px] md:text-[25px] font-light leading-tight block">Seamless WhatsApp Conversations Inside Salesforce</span></h1>
                        </div>

                        <div className="absolute xl:right-[275px] xl:top-[33rem] top-[76%]">
                            <Image
                                className="xl:w-[276px] xl:h-[249px] xl:ml-0 xl:mt-0 ml-[70%] mt-50%]"
                                src='/images/industry/rialchat/AgentChat logo.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1   gap-5 mt-10">
                        <div className="xl:col-span-4 col-span-1">
                            <h2 className="leading-tight xl:text-[40px] text-[28px]">Engage, Support, and Close Deals - All Through WhatsApp. All Inside Salesforce.</h2>
                        </div>
                        <div className="xl:col-span-6 col-span-1">
                            <p>AgentChat is a bi-directional WhatsApp conversational app natively built on Salesforce, enabling your teams to connect with customers instantly, manage conversations efficiently, and automate workflows — all without leaving Salesforce.</p>
                            <p className="mt-5">Whether you’re in Sales, Service, Marketing, Field Operations, or Education, AgentChat works across all Salesforce Clouds and lets you turn WhatsApp into a powerful engagement tool for every team.</p>
                        </div>
                    </div>
                </div>
            </div>



            <div
                className="xl:mt-20 mb-10 md:mt-[2rem]
  custom-container xl:!pr-[142px]
  text-black py-6"
            >
                <h2>Why AgentChat?</h2>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 gris-cols-1 mt-10">
                    <div className="relative group overflow-hidden">
                        <Image
                            className="w-full h-full transform transition-transform duration-500 group-hover:scale-110"
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
                            <h3 className="font-semibold xl:text-[35px] text-[26px] leading-tight">Instant WhatsApp Conversations, Directly in Salesforce</h3>
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
                            <h3 className="font-semibold xl:text-[35px] text-[26px] leading-tight">Rapid Setup — Go Live in Minutes!</h3>
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
                            <h3 className="font-semibold xl:text-[35px] text-[26px] leading-tight">Bi-Directional & Real-Time Messaging</h3>
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
                            <h3 className="font-semibold xl:text-[35px] text-[26px] leading-tight">Delegate Messages to the Right Team Automatically</h3>
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
                            <h3 className="font-semibold xl:text-[35px] text-[26px] leading-tight">Built-in Role-Based Access and Security</h3>
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
  custom-container
  text-black"
            >
                <h2>Key Features of AgentChat</h2>
                <div className="grid xl:grid-cols-2 md:grid-cols-2 gris-cols-1 mt-10 border-b-2 hover:bg-gray-100 hover:p-5 hover:shadow-lg  transition-all duration-500 ease-in-out origin-left">
                    <div>
                        <h3 className="font-semibold xl:text-[35px] text-[26px] leading-tight">Real-Time, Two-Way WhatsApp Messaging</h3>
                        <ul className="list-disc list-inside mt-8 xl:text-[20px] text-[16px]">
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
                        <h3 className="font-semibold xl:text-[35px] text-[26px] leading-tight">Context-Aware Messaging</h3>
                        <ul className="list-disc list-inside mt-8 xl:text-[20px] text-[16px]">
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

                        <h3 className="font-semibold xl:text-[35px] text-[26px] leading-tight">Supports All Salesforce Clouds</h3>
                        <ul className="list-disc list-inside mt-8 xl:text-[20px] text-[16px]">
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
                        <h3 className="font-semibold xl:text-[35px] text-[26px] leading-tight">Seamless Salesforce Integration</h3>

                        <ul className="list-disc list-inside mt-8 xl:text-[20px] text-[16px]">
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

                        <h3 className="font-semibold xl:text-[35px] text-[26px] leading-tight">Multi-Role, Multi-Team Support</h3>
                        <ul className="list-disc list-inside mt-8 xl:text-[20px] text-[16px]">
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

                        <h3 className="font-semibold xl:text-[35px] text-[26px] leading-tight">Salesforce-Native Security and Compliance</h3>

                        <ul className="list-disc list-inside mt-8 xl:text-[20px] text-[16px]">
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
  custom-container
  text-black"
            >
                <h2>Use Cases for AgentChat</h2>

                <div className="overflow-x-auto mt-10">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#D0EEFF] text-left">
                                <th className="p-4 text-[16px] md:text-[20px] font-bold">Use Case</th>
                                <th className="p-4 text-[16px] md:text-[20px] font-bold">How AgentChat Helps</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {[
                                { title: "Customer Support", desc: "Manage support cases via WhatsApp, instantly." },
                                { title: "Sales Outreach", desc: "Engage leads, close deals with real-time chats." },
                                { title: "Field Operations", desc: "Coordinate work orders and updates in real time." },
                                { title: "Student Engagement", desc: "Connect with students and alumni seamlessly." },
                                { title: "Donor Management", desc: "Stay in touch with donors via personalized chats." }
                            ].map((item, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? "bg-[#F2F2F2]" : "bg-white"} text-left mt-5`}>
                                    <td className="p-4 text-[16px] md:text-[20px]">{item.title}</td>
                                    <td className="p-4 text-[16px] md:text-[20px]">{item.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>



            <div className="bg-[url('/images/industry/rialchat/bg2.png')] bg-cover bg-right overflow-hidden xl:h-[500px]">
                <div
                    className="mt-16 mb-20 text-white
  custom-container xl:!pr-[142px]
 py-6"
                >
                    <h2>Quick Setup. Maximum Impact.</h2>
                    <div className="flex flex-col xl:flex-row mt-20 xl:gap-20">
                        <div className="relative">
                            <Image
                                className="w-[52%]"
                                src='/images/industry/rialchat/Group 380.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute  xl:left-[40px] xl:top-[70px]  left-[50px] top-[100px] xl:text-[18px] md:text-[24px] md:top-[190px] md:left-[90px]">Install AgentChat from AppExchange.</p>
                        </div>

                        <div className="relative">
                            <Image
                                className="w-[52%]"
                                src='/images/industry/rialchat/Group 381.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute  xl:left-[40px] xl:top-[70px]  left-[50px] top-[100px] xl:text-[18px] md:text-[24px] md:top-[190px] md:left-[90px]">Connect your WhatsApp Business Account securely.</p>
                        </div>

                        <div className="relative">
                            <Image
                                className="w-[52%]"
                                src='/images/industry/rialchat/Group 382.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute  xl:left-[40px] xl:top-[70px]  left-[50px] top-[100px] xl:text-[18px] md:text-[24px] md:top-[190px] md:left-[90px]">Map to Salesforce record types (Cases, Leads, Work Orders, etc.).</p>
                        </div>

                        <div className="relative">
                            <Image
                                className="w-[52%]"
                                src='/images/industry/rialchat/Group 383.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute  xl:left-[40px] xl:top-[70px]  left-[50px] top-[100px] xl:text-[18px] md:text-[24px] md:top-[190px] md:left-[90px]">Set roles and permissions for teams.</p>
                        </div>

                        <div className="relative">
                            <Image
                                className="w-[52%]"
                                src='/images/industry/rialchat/Group 384.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute xl:left-[40px] xl:top-[70px]  left-[50px] top-[100px] xl:text-[18px] md:text-[24px] md:top-[190px] md:left-[90px]">Start chatting — directly from Salesforce!</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="bg-[#134874] text-white xl:py-20">


                < div className="mb-10 custom-container xl:pr-[145px]
 py-8"
                >

                    <div className="grid xl:grid-cols-12 grid-cols-1 items-center">
                        <div className="xl:col-span-4">
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
                        <div className="xl:col-span-8">
                            <h2 className="leading-tight">Ready to Supercharge WhatsApp Engagement in Salesforce?</h2>
                            <p className="mt-10 font-light">Book a Free Demo and see how AgentChat can transform customer engagement through WhatsApp — right inside Salesforce!</p>
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
                                <p className="border-r-2 pr-4 font-light">Get Started Now</p>
                                <Image
                                    className="w-[50px]"
                                    src='/images/industry/rialchat/contact us (1).svg'
                                    alt="Our Solution to Success"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                />
                                <p className="border-r-2 pr-4 font-light">Contact Us</p>

                                <Image
                                    className="w-[50px]"
                                    src='/images/industry/rialchat/demo (1).svg'
                                    alt="Our Solution to Success"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                />
                                <p className="font-light">Scheduled a demo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            < div
                className="custom-container
  text-black py-20"
            >
                <ContactForm title={'Let me know if you want a design mockup, call-to-action variations, or shorter ad copy versions!'} className={'max-w-6xl font-light leading-tight'} />

            </div >
        </div >
    );
}