"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";
import BreadCrumbs from '../../components/BreadCrumbs'
import Script from "next/script";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AgentChat",
    "image": "https://www.rialtes.com/images/industry/rialchat/AgentChat%20logo.svg",
    "description": "AgentChat is a bi-directional WhatsApp conversational app natively built on Salesforce, offering seamless Salesforce WhatsApp integration. It enables real-time messaging, supports all Salesforce Clouds, and allows teams to engage, support, and close deals through WhatsApp without leaving Salesforce.",
    "brand": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg"
    },
    "url": "https://www.rialtes.com/products/agentchat/",
    "category": "Salesforce WhatsApp Messaging App",
    "isRelatedTo": {
        "@type": "SoftwareApplication",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Cloud",
        "softwareRequirements": "Salesforce platform"
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.rialtes.com/products/agentchat/"
    },
    "additionalProperty": [
        {
            "@type": "PropertyValue",
            "name": "Salesforce Integration",
            "value": "Works with Leads, Cases, Opportunities, Work Orders, and Custom Objects."
        },
        {
            "@type": "PropertyValue",
            "name": "Real-Time Bi-Directional Messaging",
            "value": "Synchronizes messages in real time between WhatsApp and Salesforce."
        },
        {
            "@type": "PropertyValue",
            "name": "Multi-Team Support",
            "value": "Supports Sales, Service, Field, Education, and Nonprofit teams."
        },
        {
            "@type": "PropertyValue",
            "name": "Role-Based Access Control",
            "value": "Advanced permissions using Salesforce’s native security model."
        },
        {
            "@type": "PropertyValue",
            "name": "GDPR & HIPAA Ready",
            "value": "Built on Salesforce’s secure and compliant platform."
        }
    ]
}
export default function Page() {
    const features = [
        {
            title: "Real-Time, Two-Way WhatsApp Messaging",
            image: "/images/industry/rialchat/Seamless Messaging.webp",
            alt: "Real-Time WhatsApp Messaging",
            points: [
                "Start and manage WhatsApp conversations directly from any Salesforce object.",
                "Automatic conversation tracking linked to Salesforce records.",
                "Full conversation history and audit trails.",
            ],
        },
        {
            title: "Context-Aware Messaging",
            image: "/images/industry/rialchat/rich-media-support.webp",
            alt: "Context-Aware Messaging",
            points: [
                "Access full customer context from Salesforce while chatting.",
                "Share files, media, and quick replies for faster resolutions.",
            ],
        },
        {
            title: "Supports All Salesforce Clouds",
            image: "/images/industry/rialchat/Automated Conversation Logging.webp",
            alt: "Supports All Salesforce Clouds",
            points: [
                "<strong>Sales Cloud:</strong> Convert chats to Leads and Opportunities.",
                "<strong>Service Cloud:</strong> Manage Cases and provide instant support.",
                "<strong>Field Service:</strong> Coordinate field operations and Work Orders.",
                "<strong>Education Cloud:</strong> Engage students and alumni for enrollment, advising, and support.",
                "<strong>Nonprofit Cloud:</strong> Connect with donors, volunteers, and stakeholders.",
            ],
        },
        {
            title: "Seamless Salesforce Integration",
            image: "/images/industry/rialchat/Seamless Messaging.webp",
            alt: "Seamless Salesforce Integration",
            points: [
                "Works out-of-the-box with Cases, Leads, Opportunities, Work Orders, and more.",
                "Delegation and routing rules by record type — no manual effort needed.",
            ],
        },
        {
            title: "Multi-Role, Multi-Team Support",
            image: "/images/industry/rialchat/Multi-Agent Collaboration.webp",
            alt: "Multi-Team Support",
            points: [
                "Serve customers through dedicated teams (Sales, Support, Field Agents, Advisors).",
                "Define who can initiate, view, or respond based on roles and business units.",
            ],
        },
        {
            title: "Salesforce-Native Security and Compliance",
            image: "/images/industry/rialchat/Seamless Messaging.webp",
            alt: "Security and Compliance",
            points: [
                "Leverages Salesforce’s role hierarchies, sharing rules, and object-level security.",
                "GDPR, HIPAA-ready based on Salesforce’s secure platform.",
            ],
        },
    ];
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="AgentChat: Salesforce WhatsApp Integration Made Easy | Rialtes"
                description="AgentChat enables WhatsApp integration with Salesforce, reducing silos and enhancing team collaboration for stronger customer engagement and higher ROI."
                keywords="Contact, website, welcome"
                canonical="https://www.rialtes.com/products/agentchat"
            />
            <Script
                id="schema-agentchat"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* breadcrumb schema */}
                  <BreadcrumbSchema
                    currPage="AgentChat"
                  />
            {/* hero section */}
            <div className="relative bg-[#E8E8E8] pb-20 ">
                <div className="relative  custom-container xl:!pr-0 max-xl:pr-0">
                    <div className="overflow-hidden relative z-0 ">
                        <div className="w-full h-full xl:block hidden ">
                            <Image
                                src="/images/industry/real-estate/newAgentchat.webp"
                                alt="agentchat banner"
                                className=" w-full bg-cover xl:object-contain"
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
                                alt="agentchat banner"
                                className=" h-full w-full object-cover object-right"
                                width={0}
                                height={0}
                                objectPosition="right"
                                priority
                                sizes="100vw"
                            />
                        </div>
                        <div className="absolute bg-[#134874] text-white  w-[256px] h-[205px] md:w-[332px] md:h-[255px]  xl:w-[400px] xl:h-[290px] 2xl:w-[420px] 2xl:h-[310px] 4xl:w-[478px] 4xl:h-[355px] lg:left-[6%] top-0 ">
                            <div className=" xl:mx-[58px] xl:my-6 my-6 md:my-0 mx-[30px] md:mx-[40px]">
                                <h1><span className=" font-light  text-[17px] md:text-[20px] xl:text-[26px] 4xl:text-[30px] leading-tight ">Introducing </span>
                                    <span className="font-light block text-[35px] md:text-[40px]  xl:text-[46px]  leading-tight 4xl:text-[60px] mt-[-12px]">AgentChat: </span>
                                    <span className="text-[17px] md:text-[20px] xl:text-[26px]  4xl:text-[30px] font-light leading-tight block"> Seamless WhatsApp Conversations Inside Salesforce</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-container">
                    <div className="relative">
                        <div className="absolute z-30 xl:right-16 right-0 md:right-10 mt-[-121px] xl:mt-[-180px] 4xl:mt-[-200px] ">
                            <Image
                                className=" w-[137px] h-[180px] md:w-[220px] md:h-[170px] xl:w-[246px] xl:h-[249px] 4xl:w-[276px] 4xl:h-[249px] "
                                src='/images/industry/rialchat/AgentChat logo.svg'
                                alt="AgentChat logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
                 {/* breadcrumb */}
                <div className="custom-container py-5">
                    <BreadCrumbs currPage="AgentChat"/>
                </div>
                <div className="custom-container grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] xl:gap-[80px] mt-[100px] xl:mt-[100px] 4xl:mt-[110px]">
                    <div className="lg:col-span-5 col-span-12 ">
                        <h2 className="leading-tight text-[28px] md:text-[30px] pb-4 lg:text-[28px] xl:text-[30px] 2xl:text-[36px] 4xl:text-[40px] ">Engage, Support, and Close Deals - All Through WhatsApp. All Inside Salesforce.</h2>
                    </div>
                    <div className="lg:col-span-7 col-span-12">
                        <p className="text-[16px] md:text-[18px] lg:text-[17px] xl:text-[16px] 2xl:text-[18px] 4xl:text-[20px]">AgentChat is a bi-directional WhatsApp cionversational app natively built on Salesforce, enabling your teams to connect with customers instantly, manage conversatons efficiently, and automate workflows — all without leaving Salesforce.</p>
                        <p className="mt-5 text-[16px] md:text-[18px] lg:text-[17px] xl:text-[16px] 2xl:text-[18px] 4xl:text-[20px] ">Whether you’re in Sales, Service, Marketing, Field Operations, or Education, AgentChat works across all Salesforce Clouds and lets you turn WhatsApp into a powerful engagement tool for every team.</p>
                    </div>
                </div>
            </div>

            {/* why agent chat section */}
            <div className="xl:mt-20 md:mt-[2rem] xl:!pr-[142px] custom-container text-black py-6">
                <h2 className="text-[28px] md:text-[40px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px] 4xl:text-[60px] ">Why AgentChat?</h2>
            </div>
            <div className="text-black custom-container max-md:px-0 mb-20">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:mt-10 ">
                    <div className="relative group overflow-hidden w-full">
                        <Image
                            className="w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                            src='/images/industry/rialchat/Why AgentChat.webp'
                            alt="Instant WhatsApp Conversations"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>
                    <div>
                        <div className="group flex flex-col justify-between border p-8 4xl:p-[54px] h-full hover:bg-[#134874]">
                            <div>
                                <h3 className="font-semibold 4xl:text-[35px] text-[26px] 2xl:text-[32px] xl:text-[26px] lg:text-[28px] md:text-[28px] leading-tight 4xl:w-[375px] 2xl:w-[350px] xl:w-[300px] text-black group-hover:text-white">
                                    Instant WhatsApp Conversations, Directly in Salesforce
                                </h3>
                                <p className="mt-5 xl:mt-10 text-[16px] md:text-[18px] lg:text-[18px] xl:text-[16px] 2xl:text-[19px] 4xl:text-[20px] 4xl:w-[358px] 2xl:w-[340px] xl:w-[300px] lg:w-[300px] text-black group-hover:text-white">
                                    Connect and respond to customers over WhatsApp from any Salesforce record — Leads, Cases, Opportunities, Work Orders, or Custom Objects.
                                </p>
                            </div>
                            <Image className="w-[50px] 4xl:w-[75px] 2xl:w-[70px] md:mt-20 mt-10 group-hover:invert group-hover:brightness-200"
                                src="/images/industry/rialchat/Instant WhatsApp .svg"
                                alt="Connect and respond"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                    <div>
                        <div className="group flex flex-col justify-between border p-8 4xl:p-[54px]  h-full hover:bg-[#134874] hover:text-white">
                            <div>
                                <h3 className="font-semibold 4xl:text-[35px] text-[26px] 2xl:text-[32px] xl:text-[26px] lg:text-[28px] md:text-[28px]  leading-tight 4xl:w-[358px] 2xl:w-[350px] xl:w-[300px]  ">Rapid Setup — Go Live in Minutes!</h3>
                                <p className=" mt-5 xl:mt-20  text-[16px] md:text-[18px] lg:text-[18px] xl:text-[16px] 2xl:text-[19px] 4xl:text-[20px] 4xl:w-[358px] 2xl:w-[330px] xl:w-[300px] lg:w-[300px] ">No complex integrations. Plug-and-play setup within minutes. Start engaging right away.</p>
                            </div>
                            <Image
                                className="w-[50px] 4xl:w-[83px]  2xl:w-[76px] mt-20 group-hover:invert group-hover:brightness-200"
                                src='/images/industry/rialchat/Rapid Setup.svg'
                                alt="Bi-Directional image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div>
                        <div className="group flex flex-col justify-between border p-8 4xl:p-[54px] h-full hover:bg-[#134874] hover:text-white">
                            <div>
                                <h3 className="font-semibold 4xl:text-[35px] text-[26px] 2xl:text-[33px] xl:text-[26px] lg:text-[28px] md:text-[28px]  leading-tight 4xl:w-[380px] 2xl:w-[350px]  xl:w-[300px]">Bi-Directional & Real-Time Messaging</h3>
                                <p className="mt-5 xl:mt-20  text-[16px] md:text-[18px] lg:text-[18px] xl:text-[16px] 2xl:text-[19px] 4xl:text-[20px] 4xl:w-[358px] 2xl:w-[340px] xl:w-[300px] lg:w-[300px]">Conversations sync in real-time — whether initiated from WhatsApp or Salesforce.</p>
                            </div>
                            <Image
                                className="w-[50px] 4xl:w-[67px] 2xl:w-[64px] xl:mt-40 mt-5 group-hover:invert group-hover:brightness-200"
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
                        <div className="group flex flex-col justify-between border p-8 4xl:p-[54px] h-full hover:bg-[#134874] hover:text-white">
                            <div>
                                <h3 className="font-semibold 4xl:text-[35px] text-[26px] 2xl:text-[32px] xl:text-[26px] lg:text-[28px] md:text-[28px] leading-tight 4xl:w-[391px] 2xl:w-[340px] xl:w-[300px]">Delegate Messages to the Right Team Automatically</h3>
                                <p className="mt-5 xl:mt-10  text-[16px] md:text-[18px] lg:text-[18px] xl:text-[16px] 2xl:text-[19px] 4xl:text-[20px] 4xl:w-[358px] 2xl:w-[340px] xl:w-[300px] lg:w-[300px]" >Automatically route conversations by record type (e.g., Cases, Leads, Work Orders), ensuring the right team responds fast.</p>
                            </div>
                            <Image
                                className="w-[50px] 4xl:w-[74px] 2xl:w-[70px] xl:mt-20 md:mt-20 mt-5 group-hover:invert group-hover:brightness-200"
                                src='/images/industry/rialchat/Delegate Messages.svg'
                                alt="Delegate Messages"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                    <div>
                        <div className="group border p-8 4xl:p-[54px] h-full hover:bg-[#134874] hover:text-white">
                            <h3 className="font-semibold 4xl:text-[35px] text-[26px] 2xl:text-[32px] xl:text-[26px] lg:text-[28px] md:text-[28px] leading-tight 4xl:w-[370px] 2xl:w-[346px] xl:w-[300px]">Built-in Role-Based Access and Security</h3>
                            <p className="mt-5 xl:mt-20  text-[16px] md:text-[18px] lg:text-[18px] xl:text-[16px] 2xl:text-[19px] 4xl:text-[20px] 4xl:w-[358px] 2xl:w-[340px] xl:w-[300px] lg:w-[300px]">Control who can chat, view, and manage conversations with advanced role-based permissions and Salesforce’s native security model.</p>
                            <Image
                                className="w-[50px] 4xl:w-[83px]  2xl:w-[76px] xl:mt-20 md:mt-20 mt-5 group-hover:invert group-hover:brightness-200"
                                src='/images/industry/rialchat/Rapid Setup.svg'
                                alt="Built-in Role-Based Access and Security"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* key features section */}
            <div className="xl:mt-20 mb-20 custom-container text-black">
                <h2 className="text-[28px]  md:text-[40px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px] 4xl:text-[60px] leading-tight ">Key Features of AgentChat</h2>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col-reverse md:grid md:grid-cols-2 mt-10 border-b-2 hover:bg-gray-100 hover:p-5 hover:shadow-lg transition-all duration-500 ease-in-out origin-left">
                        <div className="pb-8">
                            <h3 className="font-semibold text-[22px] md:text-[28px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] 4xl:text-[35px] leading-tight md:mt-20">
                                {feature.title}
                            </h3>
                            <ul className="list-disc mt-8 text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[19px] 4xl:text-[20px] 4xl:w-[570px] 2xl:w-[550px] xl:w-[520px] lg:w-[500px] px-2">
                                {feature.points.map((point, i) => (
                                    <li
                                        key={i}
                                        className={`marker:text-blue-500 ${i > 0 ? "mt-3" : ""}`}
                                        dangerouslySetInnerHTML={{ __html: point }}
                                    />
                                ))}
                            </ul>
                            <LearnMore />
                        </div>
                        <div className="mt-10 xl:mt-0">
                            <Image
                                className="xl:w-[75%] w-full"
                                src={feature.image}
                                alt={feature.alt}
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                ))}
            </div >
            {/* use cases section */}
            <section>
                <div className="mt-20 lg:mt-40 custom-container text-black">
                    <h2 className="text-[28px] md:text-[40px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px] 4xl:text-[60px] leading-tight "> Use Cases for AgentChat</h2>
                </div>
                <div className="custom-container max-md:px-0 mb-20">
                    <div className="overflow-x-auto mt-10 max-md:px-0">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-[#D0EEFF] text-left">
                                    <th className="p-4 text-[16px] md:text-[24px] lg:text-[24px] xl:text-[22px] 2xl:text-[28px] 4xl:text-[30px] font-bold">Use Case</th>
                                    <th className="p-4 text-[16px] md:text-[24px] lg:text-[24px] xl:text-[22px] 2xl:text-[28px] 4xl:text-[30px]  font-bold">How AgentChat Helps</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y ">
                                {[
                                    { title: "Customer Support", desc: "Manage support cases via WhatsApp, instantly." },
                                    { title: "Sales Outreach", desc: "Engage leads, close deals with real-time chats." },
                                    { title: "Field Operations", desc: "Coordinate work orders and updates in real time." },
                                    { title: "Student Engagement", desc: "Connect with students and alumni seamlessly." },
                                    { title: "Donor Management", desc: "Stay in touch with donors via personalized chats." }
                                ].map((item, index) => (
                                    <tr key={index} className={`${index % 2 === 0 ? "bg-[#F2F2F2]" : "bg-white"} text-left mt-5`}>
                                        <td className="p-4 text-[16px] md:text-[22px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px] 4xl:text-[26px]">{item.title}</td>
                                        <td className="p-4 text-[16px] md:text-[22px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px] 4xl:text-[26px]">{item.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/* quick setup section */}
            <div className="bg-[url('/images/industry/rialchat/bg2.png')] bg-cover bg-right overflow-hidden xl:h-[400px] 4xl:h-[520px] 2xl:h-[480px]">
                <div className="mt-16 text-white custom-container xl:!pr-[142px] pt-6">
                    <h2 className="text-[28px] md:text-[40px] max-lg:pb-6 lg:text-[40px] xl:pb-10 xl:text-[46px] 2xl:text-[54px] 4xl:text-[60px] leading-tight">Quick Setup. Maximum Impact.</h2>
                    <div className="flex flex-col xl:flex-row  4xl:gap-34px 2xl:gap-40 xl:gap-48">
                        <div className="relative">
                            <Image
                                className="w-[194px] 4xl:w-[188px] 2xl:w-[120px] xl:w-[400px] md:w-[220px] "
                                src='/images/industry/rialchat/Group 380.svg'
                                alt="Our Solution to Success"
                                width={0}
                                height={0}
                                priority
                            />
                            <p className="absolute 4xl:left-[60px] leading-tight 4xl:top-[100px] 2xl:top-[60px] 2xl:left-[40px] xl:top-[60px] xl:left-[20px]  left-[55px] top-[100px] text-[24px]  md:text-[24px] lg:text-[18px] xl:text-[16px] 2xl:text-[20px] 4xl:text-[24px] md:top-[130px]  md:left-[90px] 4xl:w-[203px] 2xl:w-[170px] xl:w-[160px] lg:w-[170px] md:w-[250px]">Install AgentChat from AppExchange.</p>
                        </div>
                        <div className="relative">
                            <Image
                                className="w-[194px]  4xl:w-[188px] 2xl:w-[120px] xl:w-[400px] md:w-[220px]"
                                src='/images/industry/rialchat/Group 381.svg'
                                alt="agent chat image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute mb-14 pb-10 leading-tight 4xl:left-[60px] 4xl:top-[100px] 2xl:top-[60px] 2xl:left-[40px]  xl:top-[60px] xl:left-[20px]  left-[55px] top-[100px] text-[24px] md:text-[24px] lg:text-[18px] xl:text-[16px] 2xl:text-[22px] 4xl:text-[24px]  md:top-[130px] md:left-[90px] 4xl:w-[222px] 2xl:w-[200px] xl:w-[180px] lg:w-[170px] md:w-[260px]">Connect your WhatsApp Business Account securely.</p>
                        </div>
                        <div className="relative">
                            <Image
                                className="w-[194px]  4xl:w-[188px] 2xl:w-[120px] xl:w-[400px] md:w-[220px]"
                                src='/images/industry/rialchat/Group 382.svg'
                                alt="agent chat image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute leading-tight 4xl:left-[60px] 4xl:top-[100px] 2xl:top-[60px] 2xl:left-[40px]  xl:top-[60px] xl:left-[20px] left-[55px] top-[100px] text-[24px] md:text-[24px] lg:text-[18px] xl:text-[16px] 2xl:text-[22px] 4xl:text-[24px] md:top-[130px] md:left-[90px] 4xl:w-[230px] 2xl:w-[210px] xl:w-[180px] lg:w-[170px] md:w-[310px] ">Map to Salesforce record types (Cases, Leads, Work Orders, etc.).</p>
                        </div>

                        <div className="relative">
                            <Image
                                className="w-[194px] 4xl:w-[188px] 2xl:w-[120px] xl:w-[400px] md:w-[220px]"
                                src='/images/industry/rialchat/Group 383.svg'
                                alt="agent chat image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute leading-tight  4xl:left-[60px] 4xl:top-[100px] 2xl:top-[60px] 2xl:left-[40px]  xl:top-[60px] xl:left-[20px] left-[55px] top-[100px] text-[24px] md:text-[24px] lg:text-[18px] xl:text-[16px] 2xl:text-[22px] 4xl:text-[24px] md:top-[130px] md:left-[90px] 4xl:w-[190px] 2xl:w-[190px] xl:w-[180px] lg:w-[170px] md:w-[260px]">Set roles and permissions for teams.</p>
                        </div>

                        <div className="relative">
                            <Image
                                className="w-[194px] 4xl:w-[188px] 2xl:w-[120px] xl:w-[400px] md:w-[220px]"
                                src='/images/industry/rialchat/Group 384.svg'
                                alt="agent chat image"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                            <p className="absolute leading-tight 4xl:left-[60px] 4xl:top-[100px] 2xl:top-[60px] 2xl:left-[40px]  xl:top-[60px] xl:left-[20px] left-[55px] top-[100px] text-[24px] md:text-[24px] lg:text-[18px] xl:text-[16px] 2xl:text-[22px] 4xl:text-[24px]  md:top-[130px] md:left-[90px] 4xl:w-[190px] 2xl:w-[190px] xl:w-[180px] lg:w-[170px] md:w-[260px]">Start chatting — directly from Salesforce!</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ready to super charge section */}
            <div className="bg-[#134874] text-white xl:py-8 overflow-hidden">
                < div className="mb-10 custom-container xl:pr-10 2xl:pr-20 4xl:pr-[100px] py-8">
                    <div className="grid xl:grid-cols-12 grid-cols-1 items-center">
                        <div className="xl:col-span-4">
                            <Image
                                className="w-[60%] md:w-[44%] "
                                src='/images/industry/rialchat/CTA (1).svg'
                                alt="Ready to Supercharge WhatsApp Engagement in Salesforce?"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority
                            />
                        </div>
                        <div className="xl:col-span-8">
                            <h2 className="text-[26px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[50px] 4xl:text-[60px] leading-tight max-w-[1081px] w-full">Ready to Supercharge WhatsApp Engagement in Salesforce?</h2>
                            <p className="mt-10 font-light text-[18px] md:text-[22px] lg:text-[22px] xl:text-[22px] 2xl:text-[26px] 4xl:text-[28px] max-w-[1000px] w-full xl:w-[880px] leading-tight">Book a Free Demo and see how AgentChat can transform customer engagement through WhatsApp — right inside Salesforce!</p>
                            <div className="xl:flex xl:flex-row md:flex-row flex-col mt-16 items-center gap-10 4xl:gap-[34px] ">
                                <div className="flex flex-col lg:flex-row gap-4 w-full h-[105px] max-lg:p-4">
                                    <div className="flex flex-row items-center gap-4 ">
                                        <Image
                                            className="w-[50px] md:w-[60px] xl:w-[50px]"
                                            src='/images/industry/rialchat/get started now (1).svg'
                                            alt="Ready to Supercharge WhatsApp Engagement in Salesforce?"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            priority
                                        />
                                        <p className="pr-4 font-light text-[22px] md:text-[24px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 4xl:text-[22px] leading-tight 4xl:w-[152px] 2xl:w-[200px] xl:w-[180px] lg:w-[120px] md:w-[160px]">Get Started Now</p>
                                    </div>
                                    <div className="hidden lg:block border-r-2  self-stretch border-gray-300 mx-4"></div>
                                    <div className="block lg:hidden w-full border-b border-gray-300 "></div>
                                </div>
                                <div className="flex flex-col lg:flex-row  gap-4 w-full h-[105px] max-lg:p-4">
                                    <div className="flex flex-row items-center gap-4   ">
                                        <Image
                                            className="w-[50px] md:w-[60px] xl:w-[50px]"
                                            src='/images/industry/rialchat/contact us (1).svg'
                                            alt="agent chat images"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            priority
                                        />
                                        <p className="pr-4 font-light text-[22px] md:text-[24px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 4xl:text-[22px] leading-tight 4xl:w-[152px] 2xl:w-[190px] xl:w-[180px] lg:w-[120px] md:w-[180px]">Contact Us</p>
                                    </div>
                                    <div className="hidden lg:block border-r-2 self-stretch border-gray-300 mx-4"></div>
                                    <div className="block lg:hidden w-full border-b border-gray-300 mt-4"></div>
                                </div>

                                <div className="flex flex-col lg:flex-row  gap-4 w-full h-[105px] max-lg:p-4 ">
                                    <div className="flex flex-row items-center gap-4  ">
                                        <Image
                                            className="w-[50px] md:w-[60px] xl:w-[50px] "
                                            src='/images/industry/rialchat/demo (1).svg'
                                            alt="agent chat images"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            priority
                                        />
                                        <p className="font-light text-[22px] md:text-[24px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 4xl:text-[22px] leading-tight 4xl:w-[152px] 2xl:w-[140px] xl:w-[130px] lg:w-[120px] md:w-[110px]">Scheduled a demo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="custom-container text-black py-10">
                <ContactForm title={'Let me know if you want a design mockup, call-to-action variations, or shorter ad copy versions!'} className={' font-light leading-tight text-[26px] md:text-[40px] lg:text-[40px] xl:text-[46px] 2xl:text-[54px] 4xl:text-[60px] 4xl:w-[1222px] 2xl:w-[1100px] xl:w-[800px] '} />
            </div>
        </div>
    );
}