"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import ContactForm from "@/app/components/contactform";
import LearnMore from "@/app/components/learnMore";
import Script from "next/script";
import UnorderedList from "@/app/components/unorderedList";
import React from "react";
export default function Page() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Home Health Care Technology Solutions",
        "url": "https://www.rialtes.com/industry/life-sciences/home-health-ai-tech-solutions/",
        "description": "Rialtes provides AI-powered Home Health Care Technology Solutions built on Salesforce to support remote monitoring, virtual consultations, personalized care, and digital transformation in home-based healthcare delivery.",
        "publisher": {
            "@type": "Organization",
            "name": "Rialtes",
            "url": "https://www.rialtes.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.rialtes.com/images/homepage/logo.svg"
            },
            "sameAs": [
                "https://www.linkedin.com/company/rialtes-technologies-llc/",
                "https://www.youtube.com/@rialtes"
            ]
        },
        "mainEntity": {
            "@type": "Service",
            "name": "Home Health Care Technology Solutions",
            "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "Singapore" }
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Home Health Solutions",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Remote Patient Monitoring (RPM)",
                            "description": "Track vitals and symptoms via wearables integrated with Salesforce Health Cloud to enable real-time alerts and chronic care management."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Virtual Care Coordination",
                            "description": "Automated care plans, mobile dashboards, and real-time task tracking for clinicians and caregivers."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "AI-Driven Health Insights",
                            "description": "Predictive health monitoring, smart care planning, and AI diagnostics for proactive home care delivery."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Salesforce Health Cloud Integration",
                            "description": "Unified health records, appointment scheduling, care plan automation, and real-time patient engagement via Salesforce."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "WhatsApp-Based Patient Communication (AgentChat)",
                            "description": "Real-time, HIPAA-compliant messaging between care teams and patients using Salesforce-integrated WhatsApp communication."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Mental Health & Behavioral Support",
                            "description": "Discreet access to mental health professionals via virtual counseling, mood-tracking tools, and wellness check-ins."
                        }
                    }
                ]
            }
        }
    }
    const addressingData = [
        {
            title: "Geographical Divide & Accessibility",
            desc: "Patients in rural or remote areas face significant barriers to accessing timely medical care due to limited healthcare infrastructure and geographic isolation. Our team empowers home health providers with virtual care coordination tools, mobile-optimized apps, and real-time data access, so patients can receive continuous care without ever visiting a clinic.",
            deskImg: "/images/home-health/geographical-desk.webp",
            mobImg: "/images/home-health/Mobile/geographical-mob.webp"
        },
        {
            title: "Pandemic & Infectious Disease Risk",
            desc: "Physical consultations expose vulnerable patients to contagious diseases, especially during public health crises like COVID-19. We support the shift from clinic-based visits to remote consultations and monitoring, ensuring that patients receive care in a safe, controlled environment, at home. It is done by virtual appointments, remote diagnostics, and contactless care delivery via Salesforce.",
            deskImg: "/images/home-health/pandemic-desk.webp",
            mobImg: "/images/home-health/Mobile/pandemic-mob.webp"
        },
        {
            title: "Lack of Real-Time Health Tracking",
            desc: "Without real-time visibility into patient health, early warning signs are often missed, leading to preventable complications. Rialtes enables Remote Patient Monitoring (RPM) by integrating smart medical devices and wearables with Salesforce Health Cloud, ensuring healthcare providers receive live updates and alerts for timely intervention.",
            deskImg: "/images/home-health/lack-desk.webp",
            mobImg: "/images/home-health/Mobile/lack-mob.webp"
        },
        {
            title: "Long Waiting Times",
            desc: "Overburdened clinics lead to delayed care, missed follow-ups, and frustrated patients. With automated appointment scheduling, intelligent routing tools, and virtual care options, we help reduce patient backlog and facilitate on-demand consultations for home-bound patients.",
            deskImg: "/images/home-health/long-desk.webp",
            mobImg: "/images/home-health/Mobile/long-mob.webp"
        },
        {
            title: "Limited Access to Mental Health Support",
            desc: "Access to mental health services remains a challenge due to stigma, limited availability, and logistical barriers. Rialtes offers discreet, virtual access to behavioral health professionals, counseling sessions, and mood-tracking tools, all integrated within a secure and patient-friendly digital platform.",
            deskImg: "/images/home-health/limited-desk.webp",
            mobImg: "/images/home-health/Mobile/limited-mob.webp"
        },
    ]
    const aiRovolutionizingData = [
        {
            title: "Predictive Health Monitoring",
            desc: "AI algorithms analyze real-time data from wearable devices and remote monitoring tools to detect health anomalies before they become critical."
        },
        {
            title: "Smart Care Planning",
            desc: "AI assists in creating dynamic care plans based on patient history, behavior, and risk scores pulled from Salesforce Health Cloud and integrated EHR systems."
        },
        {
            title: "Virtual Health Assistants",
            desc: "Conversational AI and chatbots provide 24/7 support to patients, answering questions, scheduling appointments, and escalating urgent issues to clinicians."
        },
        {
            title: "AI-Powered Diagnostics",
            desc: "AI enhances decision support by interpreting remote test results, images, or symptom logs, helping clinicians diagnose conditions more accurately and quickly."
        },
        {
            title: "Operational Automation",
            desc: "From routing home health professionals efficiently to automating documentation, AI streamlines workflows and reduces overhead."
        },
    ]
    const capabilitiesData = [
        {
            title: "Intelligent Appointment Scheduling for Home Visits & Virtual Care",
            desc: "Efficient care starts with seamless scheduling. Rialtes empowers home health providers with automated appointment booking, real-time alerts, and telehealth-ready scheduling tools, all fully integrated into Salesforce Health Cloud.",
            dataList: [
                "Patients can book home visits or virtual consultations via a secure online portal",
                "Real-time notifications reduce missed appointments and optimize caregiver routes",
                "Centralized calendar view for care teams to manage schedules, follow-ups, and reassignments",
            ]
        },
        {
            title: "EHR Integration for Unified Home Health Records",
            desc: "In home-based care, having access to accurate, up-to-date patient information is critical. Rialtes connects Electronic Health Records (EHR) with your Salesforce platform to create a 360-degree view of the patient journey, accessible to clinicians on the move.",
            dataList: [
                "Seamless, secure syncing of patient history, lab results, and care plans",
                "Supports real-time updates from remote monitoring devices and in-home assessments",
                "Enables personalized, data-driven decisions during each home visit",
            ]
        },
        {
            title: "Remote Patient Monitoring (RPM)",
            desc: "",
            dataList: [
                "Real-time tracking of vitals and symptoms via wearable devices and connected apps",
                "Automatic alerts for abnormal health patterns",
                "Data-driven interventions for chronic condition management",
            ]
        },
        {
            title: "Virtual Care Coordination",
            desc: "",
            dataList: [
                "Integrated care plans and tasks for clinicians, caregivers, and patients",
                "Automated follow-up scheduling and medication reminders",
                "Mobile-first dashboards for field nurses and home care staff",
            ]
        },
        {
            title: "Centralized Health Data with Salesforce Health Cloud",
            desc: "",
            dataList: [
                "Unified patient profiles are accessible anytime, anywhere",
                "Seamless integration with EHR/EMR systems and third-party apps",
                "Role-based access for better data governance and security",
            ]
        },
        {
            title: "Enhanced Patient Engagement",
            desc: "",
            dataList: [
                "Patient portals with two-way communication",
                "Virtual waiting rooms and telehealth support",
                "Personalized alerts and health education resources",
            ]
        },
    ]
    const agentChat = [
        {
            title: "Seamless Integration",
            desc: "Initiate or respond to WhatsApp messages from any Salesforce record, including Health Cloud contacts, care plans, or service requests."
        },
        {
            title: "Real-Time Sync",
            desc: "Whether a conversation begins on WhatsApp or in Salesforce, messages are synchronized in real-time, ensuring no detail is ever missed."
        }, {
            title: "Unified Patient View",
            desc: "Chat history becomes part of the patient’s medical profile in Salesforce, providing clinicians and care coordinators full context."
        },
    ]
    const homeHealth = [
        "Send appointment reminders and medication instructions",
        "Share care plan updates with families",
        "Coordinate with on-ground caregivers for urgent needs",
        "Provide mental health check-ins and wellness tips",
    ]
    const relatedData = [
        {
            id: "1",
            title: "Salesforce Service Cloud",
            desc: "For superior patient and provider service workflows."
        },
        {
            id: "2",
            title: "Salesforce Experience (Community) Cloud",
            desc: "To build patient, HCP, and partner-facing portals."
        },
        {
            id: "3",
            title: "Salesforce Agentforce for Health",
            desc: "AI-driven case management and services optimization."
        },
        {
            id: "4",
            title: "Salesforce Data Cloud for Health",
            desc: "Unified patient data to power next-gen personalization and analytics."
        },
    ]
    return (
        <section className="min-h-screen bg-white">
            <Seo
                title="AI-Powered Home Healthcare Technology Solutions | Rialtes"
                description="Rialtes offers home healthcare technology solutions powered by AI to support virtual, remote, and personalized patient care—anytime, anywhere."
                canonical=" https://www.rialtes.com/industry/life-sciences/home-health-ai-tech-solutions/"
            />
            <Script
                id="schema-sap-bdc"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* herosection */}
            <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px] ">
                <div className="hidden md:block">
                    <Image
                        src="/images/home-health/hero-banner-desk.webp"
                        alt="desktop banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "55% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/home-health/Mobile/hero-banner-mob.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "5% 20%" }}
                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full pt-[80px] md:pt-0">
                        <div className="col-span-12">
                            <h1 className="text-[#FFFFFF] text-[18px] md:text-[24px] font-bold lg:w-full">
                                Home Health {" "}
                                <div className="text-[#FFFFFF] text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px]">
                                    Technology Solutions <div className="min-[330px]:block hidden" /> to Connect Patients <div className="min-[330px]:block hidden" /> with Their Providers
                                </div>
                            </h1>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description section */}
            <div className="custom-container xl:mt-[124px] mt-[33px]">
                <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[40px] gap-y-[28px]">
                    <div className="lg:col-span-6 xl:col-span-7 col-span-12">
                        <h2 className="4xl:text-[60px] xl:text-[45px] text-[26px] leading-tight md:w-[80%] xl:w-full">
                            Empowering Healthcare access anytime from home with mobile apps
                        </h2>
                    </div>
                    <div className="lg:col-span-6 xl:col-span-5 col-span-12">
                        <p className="text-[16px] 4xl:text-[22px] xl:text-[18px] font-normal mt-[6px] w-[90%] md:w-[80%] lg:w-full">
                            The need for efficient and patient-centric care is greater than ever. Our home health services provide healthcare organizations with cutting-edge mobile and home health technology solutions for remote patient monitoring, virtual consultations, and personalized healthcare management.
                        </p>
                    </div>
                </div>
            </div>

            {/* addressing section */}
            <section className="custom-container xl:mt-[166px] mt-[49px]">
                <h2 className="4xl:text-[60px] xl:text-[45px] text-[26px] leading-tight lg:w-[60%] 4xl:w-[70%]">
                    Addressing Roadblocks in Home Health Care
                </h2>
                <p className="text-[16px] 4xl:text-[22px] xl:text-[18px] font-normal xl:mt-[39px] mt-[28px] w-[90%] lg:w-[65%] 4xl:w-[70%]">
                    While home-based care offers a transformative opportunity for healthcare delivery, it must overcome several long-standing challenges. At Rialtes, we design next-gen Remote Monitoring and Home Health solutions on Salesforce Health Cloud to break down these barriers and deliver equitable, efficient, and empathetic care.
                </p>
                {
                    addressingData.map((data, ind) => {
                        const isEven = ind % 2 === 0;
                        const content = [
                            <React.Fragment key="image">
                                <div className={`lg:col-span-4 col-span-12 ${!isEven && "lg:order-2 order-1"}`}>
                                    <div className="h-full w-full">
                                        <Image src={data.mobImg} alt="mobile" className="block md:hidden w-full h-full object-cover" width={0} height={0} priority />
                                        <Image src={data.deskImg} alt="desktop" className="hidden md:block w-full h-full object-cover" width={0} height={0} priority />
                                    </div>
                                </div>
                                <div className={`lg:col-span-8 col-span-12 xl:pt-[51px] xl:pb-[93px] xl:px-[68px] pt-[29px] pb-[64px] px-[30px] relative  ${!isEven && "lg:order-1 order-2"}`} key="text">
                                    <h2 className="4xl:text-[30px] xl:text-[26px] text-[22px] leading-tight text-[#0A6BB8] font-semibold w-[90%] md:w-full">{data.title}</h2>
                                    <p className="text-[16px] 4xl:text-[22px] xl:text-[18px] font-normal xl:mt-[39px] mt-[19px] w-[90%] lg:w-[94%]">{data.desc}</p>
                                    <div className="xl:mt-[40px] mt-[20px] absolute"><LearnMore /></div>
                                </div>
                            </React.Fragment>
                        ];
                        return (
                            <div className="xl:mt-[71px] mt-[70px]" key={ind}>
                                <div className="grid lg:grid-cols-12 grid-cols-1 border border-[#707070]">
                                    {isEven ? content : content.reverse()}
                                </div>
                            </div>
                        )
                    })
                }
            </section>
            {/* global expertise section */}
            <section className="custom-container xl:mt-[145px] mt-[70px] lg:pr-0 max-md:px-0">
                <div className="grid lg:grid-cols-12 grid-cols-1">
                    <div className="lg:col-span-5 col-span-12 lg:my-[40px] max-md:mx-[36px] lg:mr-[-90px] max-md:mt-[-120px] relative z-20 lg:order-1 order-2">
                        <div className="bg-[#006FBE] text-[#ffffff] xl:pt-[69px] xl:pb-[96px] lg:pl-[63px] xl:pr-[20px] pt-[39px] pb-[70px] px-[26px]">
                            <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light w-[90%] lg:w-[60%] xl:w-full">Global Expertise, Locally Delivered</h2>
                            <p className="text-[16px] 4xl:text-[22px] xl:text-[18px] font-normal xl:mt-[65px] mt-[25px] w-[94%] lg:w-[90%]">With certified expertise in Salesforce Life Sciences Cloud and SAP S/4HANA for Pharma, Rialtes brings together global innovation and local compliance. Operating across India, the United States, Canada, and Singapore, we ensure that your home health programs align with regional regulations while following global best practices in healthcare delivery and digital transformation.</p>
                            <div className="absolute xl:mt-[40px] mt-[20px]">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 col-span-12 lg:order-2 order-1">
                        <Image src="/images/home-health/Mobile/global-mob.webp" alt="mobile" className="block md:hidden w-full h-full object-cover" width={0} height={0} priority />
                        <Image src="/images/home-health/global-desk.webp" alt="desktop" className="hidden md:block w-full h-full object-cover" width={0} height={0} priority />
                    </div>
                </div>
            </section>
            {/* how ai section */}
            <section className="custom-container xl:mt-[119px] mt-[85px]">
                <div className="grid xl:grid-cols-12 grid-cols-1 gap-y-[29px] xl:gap-[60px]">
                    <div className="xl:col-span-7 col-span-12">
                        <h2 className="4xl:text-[55px] xl:text-[40px] text-[26px] leading-tight">
                            How AI is Revolutionizing Home Health
                        </h2>
                    </div>
                    <div className="xl:col-span-5 col-span-12">
                        <p className="text-[16px] 4xl:text-[20px] xl:text-[18px] font-normal md:w-[80%] xl:w-full">Artificial Intelligence is redefining what’s possible in home-based care. By enabling predictive insights, personalized treatment, and real-time decision-making, AI empowers care teams to move from reactive to proactive care models, improving patient outcomes while reducing costs.</p>
                    </div>
                </div>
                <div className="xl:mt-[65px] mt-[39px]">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] sm:w-[70%] md:w-full">
                        {
                            aiRovolutionizingData.map((data, ind) => {
                                return (
                                    <div key={ind} className="border border-[#707070] xl:pt-[52px] xl:pb-[56px] xl:px-[40px] pt-[32px] pb-[32px] px-[26px]">
                                        <h3 className="4xl:text-[30px] xl:text-[26px] text-[20px] leading-tight text-[#006FBE] font-semibold">
                                            {data.title}
                                        </h3>
                                        <p className="text-[16px] 4xl:text-[22px] xl:text-[19px] font-normal xl:mt-[31px] mt-[22px] w-[90%] xl:w-full 4xl:w-[86%]">
                                            {data.desc}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* our capabilities section */}
            <section className="relative xl:mt-[133px] mt-[70px] xl:pt-[141px] pt-[45px] bg-no-repeat bg-cover bg-center
                    md:bg-[url('/images/home-health/our-capabilities-desk.webp')]
                    bg-[url('/images/home-health/Mobile/our-capabilities-mob.webp')]">
                <div className="custom-container text-[#ffffff]">
                    <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight">
                        Our Capabilities
                    </h2>
                    <div className="grid lg:grid-cols-12 grid-cols-1 xl:mt-[36px] mt-[17px] lg:gap-[60px] gap-y-[17px]">
                        <div className="lg:col-span-5 col-span-12">
                            <h3 className="4xl:text-[42px] xl:text-[32px] text-[22px] leading-tight">
                                Smarter Home Health with Salesforce
                            </h3>
                        </div>
                        <div className="lg:col-span-7 col-span-12">
                            <p className="text-[16px] 4xl:text-[20px] xl:text-[18px] font-normal w-[90%] md:w-[70%] lg:w-full 4xl:w-[90%]">
                                We integrate AI into every layer of your Salesforce-powered home health ecosystem, transforming your operations with intelligent automation and insight-driven care.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 xl:mt-[79px] mt-[34px] md:w-[70%] lg:w-[90%] xl:w-[87%] lg:gap-x-[80px] lg:gap-y-[91px] gap-y-[55px]">
                        {
                            capabilitiesData.map((data, ind) => {
                                return (
                                    <div key={ind}>
                                        <h4 className="4xl:text-[36px] xl:text-[28px] text-[20px] leading-tight w-[90%] lg:w-full">
                                            {data.title}
                                        </h4>
                                        <p className="text-[16px] 4xl:text-[20px] xl:text-[18px] font-normal w-[90%] lg:w-full xl:mt-[35px] mt-[16px] 4xl:w-[98%]">
                                            {data.desc && data.desc}
                                        </p>
                                        <UnorderedList arrName={data.dataList} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[35px] mt-[17px] pl-[20px] w-[90%] md:w-full 4xl:w-[90%]" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="mt-[74px] xl:mt-[104px]">
                        <LearnMore bgcolor="#0C8AED" bordercolor="#0C8AED" />
                    </div>
                </div>
            </section>
            {/* agentchat section */}
            <section className="custom-container bg-[#0A6BB8] text-[#ffffff] xl:mt-[247px] mt-[174px]">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[80px] gap-y-[40px]">
                    <div className="relative mt-[-120px]">
                        <Image src="/images/home-health/Mobile/agent-chat-mob.webp" alt="mobile" className="block md:hidden w-full h-full object-cover" width={0} height={0} priority />
                        <Image src="/images/home-health/agent-chat-desk.webp" alt="desktop" className="hidden md:block w-full h-full object-cover md:h-[600px] lg:h-full" width={0} height={0} priority />
                    </div>
                    <div>
                        <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight lg:mt-[46px]">
                            AgentChat
                        </h2>
                        <h3 className="4xl:text-[42px] xl:text-[32px] text-[22px] leading-tight xl:mt-[35px] mt-[17px] font-semibold w-[80%] md:w-full">
                            Real-Time WhatsApp Integration for Home Health
                        </h3>
                        <p className="text-[16px] 4xl:text-[20px] xl:text-[18px] font-normal w-[90%] lg:w-full xl:mt-[35px] mt-[24px]">
                            In-home healthcare, communication is care. That’s why we have AgentChat—a powerful solution that instantly connects with patients and caregivers through WhatsApp, all within Salesforce. With AgentChat, your care teams can respond to patients, families, and field staff using the world’s most popular messaging app, while keeping every conversation tracked and accessible.
                        </p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 xl:mt-[91px] mt-[24px] gap-y-[32px] md:w-[90%] lg:w-full">
                    {
                        agentChat.map((data, ind) => {
                            const getXlPaddingRight = (ind) => {
                                if (ind === 2) return "xl:pr-0";
                                if (ind === 1) return "xl:pr-[73px]";
                                return "xl:pr-[40px]";
                            };
                            return (
                                <div
                                    key={ind}
                                    className={`border-l-2 border-[#ffffff] xl:pl-[32px] pl-[18px] ${getXlPaddingRight(ind)}`}>
                                    <h4 className="4xl:text-[32px] xl:text-[28px] text-[20px] leading-tight w-[90%] lg:w-full">
                                        {data.title}
                                    </h4>
                                    <p className="text-[16px] 4xl:text-[20px] xl:text-[18px] font-normal w-[90%] lg:w-full xl:mt-[21px] mt-[19px] 4xl:w-[98%]">
                                        {data.desc && data.desc}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] gap-y-[19px] mt-[40px] xl:mt-[80px] items-stretch">
                    <div className="lg:col-span-3 col-span-12">
                        <h4 className="4xl:text-[36px] xl:text-[28px] text-[20px] leading-tight w-[90%] lg:w-full">
                            Designed for Home Health
                        </h4>
                    </div>
                    <div className="lg:col-span-6 xl:col-span-7 col-span-12">
                        <UnorderedList arrName={homeHealth} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc pl-[20px] w-[90%] md:w-full 4xl:w-[90%] lg:pb-[120px]" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal" />
                    </div>
                    <div className="xl:col-span-2 lg:col-span-3 col-span-12 h-full">
                        <div className="flex flex-col justify-end h-full w-[190px]">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </section>

            {/* related section */}
            <section className="custom-container xl:mt-[125px] mt-[44px]">
                <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight">
                    Related Solutions You Can Explore
                </h2>
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-[60px] xl:gap-x-0 gap-y-[40px] xl:mt-[83px] mt-[40px] sm:w-[80%] xl:w-full">
                    {
                        relatedData.map((data, ind) => {
                            const paddingRight = (ind) => {
                                if (ind === 0) return "xl:pr-[60px] xl:border-r max-lg:border-b border-[d4d7db]";
                                if (ind === 1) return "max-lg:border-b border-[d4d7db] xl:border-r xl:px-[40px] "
                                if (ind === 2) return "xl:px-[40px] max-lg:border-b xl:border-r border-[d4d7db]";
                                if (ind === 3) return "xl:pl-[40px]";
                                return ""
                            };
                            return (
                                <div className={`${paddingRight(ind)} flex flex-col pb-[30px] xl:pb-0`} key={ind}>
                                    <h3 className="4xl:text-[30px] xl:text-[25px] text-[20px] leading-tight font-semibold text-[#006FBE]">
                                        {data.title}
                                    </h3>
                                    <p className="text-[16px] 4xl:text-[24px] xl:text-[20px] font-normal w-[90%] lg:w-full xl:mt-[31px] mt-[10px] xl:mb-[31px] mb-[18px]">
                                        {data.desc}
                                    </p>
                                    <div className="mt-auto">
                                        <LearnMore />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* Contact Form */}
            <section className="custom-container xl:mt-[130px] xl:mb-[130px] mt-[65px] mb-[48px]">
                <ContactForm title={'Ready to Deliver Proactive, Connected, and Compassionate Care Directly to Patients?'} subtitle="Transform your patient care model with Rialtes’ Salesforce-powered home health solutions" className={"font-normal text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] xl:w-[60%] 4xl:w-[80%]"} />
            </section >
        </section>
    )
}