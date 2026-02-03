"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform"
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "../../components/learnMore";
import Script from "next/script";
import UnorderedList from "@/app/components/unorderedList";
import BreadCrumbs from '@/app/components/BreadCrumbs'
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Digital Transformation in Automotive Industry",
    "url": "https://www.rialtes.com/industry/digital-transformation-in-automotive-industry/",
    "description": "Rialtes delivers end-to-end digital transformation for the automotive industry using Salesforce Automotive Cloud, SAP S/4HANA, Revenue Cloud, and Data Cloud. Our AI-powered solutions streamline lead management, dealer operations, vehicle lifecycle, warranty management, and customer engagement across OEMs, dealers, and mobility service providers.",
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
        "name": "Digital Transformation in Automotive Industry",
        "description": "AI-powered Salesforce and SAP automotive solutions for OEMs, dealers, and mobility providers focused on lifecycle, engagement, and compliance.",
        "areaServed": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "India" },
            { "@type": "Country", "name": "Singapore" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Automotive Digital Transformation Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Lead Management & Vehicle Discovery",
                        "description": "Capture omnichannel leads with Salesforce Automotive Cloud, enable vehicle configuration, test drive scheduling, and AI-powered recommendations for upselling and personalization."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Deal & Finance Management",
                        "description": "Configure quotes, manage trade-ins, financing, and dealer incentives using Salesforce Revenue Cloud and CPQ, integrated with SAP for pricing and inventory data."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Warranty & Service Lifecycle Management",
                        "description": "Automate warranty registration, claims, recalls, and maintenance reminders. Integrate with SAP and DMS for parts inventory, repair orders, and connected vehicle data."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Dealer & Buyer Portals",
                        "description": "Deploy self-service portals with Salesforce Experience Cloud for vehicle deals, financing, inventory tracking, document management, and secure communication."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Marketing & Personalization",
                        "description": "Use Salesforce Marketing Cloud and Data Cloud to create personalized journeys, AI-powered next-best-actions, behavioral triggers, and co-branded dealer campaigns."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Agentforce for Automotive CRM",
                        "description": "Equip sales and service agents with a unified view of buyer history, preferences, warranties, and omnichannel engagement for improved upsell and retention strategies."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Automotive Data Cloud & Analytics",
                        "description": "Unify customer and vehicle data from OEMs, dealers, and connected vehicles to power real-time insights, predictive maintenance, and personalized service campaigns."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Integration with SAP S/4HANA & CPI",
                        "description": "Ensure seamless integration of SAP S/4HANA with Salesforce Automotive Cloud, DMS, and telematics platforms for synchronized operations, mobility services, and compliance."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Rialtes Automotive Accelerators",
                        "description": "Deploy pre-built accelerators for dealer operations, vehicle lifecycle management, buyer graphs, and warranty administration to reduce time-to-value and ensure compliance."
                    }
                }
            ]
        }
    }
}
const ThoughtLeadershipSection = () => {
    const keyIndustryChallenges = [
        "Fragmented customer lifecycle management (from prospect to owner).",
        "Inefficient dealer and franchisee management, impacting sales velocity.",
        "Lack of real-time inventory visibility and pricing accuracy.",
        "Disconnected service and warranty processes, hurting customer satisfaction.",
        "Difficulty in personalizing customer engagement across digital and physical touchpoints.",
        "Inefficient aftermarket parts and accessory sales workflows.",
    ];
    const rialtesSolutions = [
        "Strategic advisory for end-to-end automotive digitalization.",
        "Tailored solution design with SAP and Salesforce Industry Cloud offerings.",
        "Pre-delivered accelerators for dealer management, vehicle lifecycle, and service orchestration.",
        "Agile implementation using SAP Activate and Salesforce best practices.",
        "Robust QA, integration, and post-go-live optimization.",
    ];

    return (
        <section className="relative w-full xl:mt-[84px] mt-[64px]">
            {/* Mobile View */}
            <div className="block md:hidden">
                <Image
                    src="/images/industry/auto-industry/Mobile/thought-leadership-mob-img.webp"
                    alt="thought-leadership-mob-img"
                    className="w-full h-auto"
                    width={1200}
                    height={800}
                    priority
                />
                <div className="border-none px-[30px] pt-[42px] z-10  xl:pb-[144px] pb-[57px]" style={{
                    background: "#073259"
                }}>
                    <h2 className="text-[#FFFFFF] text-[26px] leading-[32px]">
                        Thought Leadership
                    </h2>
                    <h3 className="text-[#FFFFFF] text-[22px] font-semibold mt-[17px] leading-[27px]">
                        Addressing the Complex Challenges in the Automotive Sector
                    </h3>
                    <h4 className="text-[#FFFFFF] text-[18px] mt-[17px] leading-[22px] font-semibold w-[80%]">
                        Key Industry Challenges We Solve:
                    </h4>
                    <UnorderedList arrName={keyIndustryChallenges} ulClassName="list-disc pl-[20px] text-[#FFFFFF] mt-[17px]" liClassName="mt-[19px] text-[16px] leading-[19px]" />
                    <h4 className="text-[#FFFFFF] text-[18px] mt-[61px] leading-[19px] font-semibold">
                        Rialtes Solutions:
                    </h4>
                    <UnorderedList arrName={rialtesSolutions} ulClassName="list-disc pl-[20px] text-[#FFFFFF]" liClassName="mt-[19px] text-[16px] leading-[19px]" />
                </div>
            </div>
            {/* Desktop View */}
            <div className="hidden md:block relative w-full h-[980px] lg:h-[1000px] xl:h-[1200px] md:h-[1050px] 2xl:h-[1450px] 3xl:h-[1300px]">
                <Image
                    src="/images/industry/auto-industry/thought-leadership-img.webp"
                    alt="thought-leadership-img"
                    className="w-full h-full object-cover"
                    width={1200}
                    height={630}
                    priority
                />
                <div className="absolute inset-0">
                    <div className="custom-container w-full h-full flex items-start justify-end">
                        <div className="relative 2xl:w-[55%] lg:w-[58%] w-[60%] h-full">
                            <div
                                className="absolute inset-0 z-0 pointer-events-none"
                                style={{
                                    background: "#073259",
                                    mixBlendMode: "multiply",
                                    opacity: 1,
                                }}
                            />
                            <div className="relative z-10 h-full flex flex-col justify-center px-[26px] xl:px-[40px] overflow-y-auto">
                                <h2 className="text-[#FFFFFF] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] max-[350px]:text-[22px] leading-[32px] xl:leading-[73px] ">
                                    Thought Leadership
                                </h2>
                                <h3 className="text-[#FFFFFF] 4xl:text-[42px] 2xl:text-[38px] xl:text-[32px] lg:text-[30px] md:text-[22px] text-[22px] font-semibold xl:mt-[35px] mt-[16px] leading-tight max-[380px]:text-[20px] ">
                                    Addressing the Complex Challenges in the Automotive Sector
                                </h3>
                                <h4 className="text-[#FFFFFF] 4xl:text-[36px] 2xl:text-[32px] xl:text-[28px] lg:text-[26px] md:text-[22px]  text-[22px] font-semibold xl:mt-[20px] mt-[16px] leading-[27px] xl:leading-[44px]">
                                    Key Industry Challenges We Solve:
                                </h4>
                                <UnorderedList arrName={keyIndustryChallenges} ulClassName="list-disc pl-[22px] text-[#FFFFFF] xl:mt-[23px] mt-[16px]" liClassName="mt-[19px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] md:text-[16px] text-[15px]" />
                                <h4 className="text-[#FFFFFF] 4xl:text-[36px] 2xl:text-[32px] xl:text-[30px] lg:text-[28px] md:text-[26px] text-[22px] font-light xl:mt-[38px] mt-[22px] leading-[27px] xl:leading-[44px]">
                                    Rialtes Solutions:
                                </h4>
                                <UnorderedList arrName={rialtesSolutions} ulClassName="list-disc pl-[22px] text-[#FFFFFF] xl:mt-[26px] mt-[16px]" liClassName="mt-[19px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] md:text-[16px] text-[15px] leading-tight" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
const PreDeliveredSection = () => {
    const predeliveredCardData = [
        {
            title: "Dealer Management Bolt-On",
            desc: "Extends Salesforce Automotive Cloud and SAP S/4HANA to manage dealer operations, including floor planning, F&I (Finance and Insurance), vehicle allocation, and dealer incentives.",
        },
        {
            title: "Warranty & Vehicle Lifecycle Management",
            desc: "Integrated module for warranty claims, recalls, extended warranty, and service contracts, synced with SAP backend.",
        },
        {
            title: "Vehicle Family & Buyer Graph",
            desc: "Advanced buyer modeling that maps household, corporate, and fleet relationships, enabling cross-sell, upsell, and service bundling strategies.",
        },
    ];
    return (
        <section className="relative mt-[60px] md:mt-0 mb-20">
            <div className="
                            absolute inset-0 xl:w-[94%] mx-auto
                            bg-[url('/images/industry/auto-industry/Mobile/predelivered-mob-img.webp')]
                            md:bg-[url('/images/industry/auto-industry/Mobile/predelivered-mob-img.webp')]
                            xl:bg-[url('/images/industry/auto-industry/predelivered-img.webp')]
                            bg-no-repeat bg-cover
                            z-0" style={{ backgroundSize: "100% 100%" }}></div>
            <div className="relative z-10 pt-[64px] xl:pt-[82px] max-[350px]:h-[1100px] h-[1050px] sm:h-[760px] md:h-full  ">
                <div className="custom-container">
                    <h2 className="text-white 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] leading-tight font-light lg:w-[58%] max-[380px]:text-[22px]">
                        Rialtes Pre-Delivered Automotive Accelerators
                    </h2>
                    <h3 className="text-white 4xl:text-[42px] 2xl:text-[38px] xl:text-[26px] lg:text-[30px] md:text-[22px] text-[22px] leading-[27px] xl:leading-[52px] font-semibold xl:mt-[49px] mt-[21px] max-[380px]:text-[20px]">
                        Fast-Tracking Success
                    </h3>
                    <p className="text-white 4xl:text-[22px] 2xl:text-[20px] xl:text-[16px] lg:text-[18px] md:text-[18px] text-[16px] leading-[19px] xl:leading-[30px] font-light xl:mt-[35px] mt-[21px] xl:w-[80%] w-[90%]">
                        Our proprietary accelerators are designed to streamline and future-proof automotive operations:
                    </p>
                </div>
                <div className="md:relative z-10 custom-container md:bottom-[-200px] absolute mt-[30px] lg:mt-[2px]">
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-12">
                        {predeliveredCardData.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#707070] pt-[33px] xl:pt-[65px] pb-[47px] xl:pb-[36px] xl:px-[50px] px-[33px]">
                                <h4 className="text-[#006FBE] 4xl:text-[30px] 2xl:text-[28px] xl:text-[22px] lg:text-[24px] md:text-[24px] text-[20px] font-semibold leading-[24px] xl:leading-[37px] w-[99%]">
                                    {card.title}
                                </h4>
                                <p className="text-black 4xl:text-[24px] 2xl:text-[22px] xl:text-[18px] lg:text-[18px]  md:text-[18px] text-[16px] leading-[19px] xl:leading-[29px] font-normal mt-[21px] xl:mt-[20px]">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-[36px] xl:mt-[37px]">
                        <LearnMore />
                    </div>
                </div>
            </div>
        </section>
    );
}
const EndToEndAutomativeSection = () => {
    const endtoendautomativesection = [
        {
            imgUrlMobile: "/images/industry/auto-industry/Mobile/lead-mgmt-mob-img.webp",
            imgUrlDesktop: "/images/industry/auto-industry/lead-mgmt-img.webp",
            title: "Lead Management & Vehicle Discovery",
            list: [
                "Omnichannel lead capture via Salesforce Automotive Cloud — web, mobile, showroom, and social.",
                "Dynamic lead scoring and nurturing using Marketing Cloud.",
                "Vehicle selection and configuration tools — including trims, packages, accessories.",
                "AI-powered recommendation engines for upselling (e.g., warranties, add-ons).",
                "Dealer inventory visibility and test-drive scheduling."
            ],
        },
        {
            imgUrlMobile: "/images/industry/auto-industry/Mobile/deal-finance-mob-img.webp",
            imgUrlDesktop: "/images/industry/auto-industry/deal-finance-img.webp",
            title: "Deal & Finance Management",
            list: [
                "Quote and negotiation management using Salesforce Revenue Cloud (CPQ).",
                "Integrated credit application, leasing, and financing options.",
                "Embedded trade-in evaluations and F&I add-on selections (e.g., GAP insurance, extended warranties).",
                "Customer deal room portals via Experience Cloud for transparency and collaboration.",
            ],
        },
    ];
    return (
        <section className="lg:mt-[263px] md:mt-[282px] mt-[20rem] max-[430px]:mt-[245px]  max-[388px]:mt-[300px] max-[359px]:mt-[400px]  custom-container lg:pr-0 max-lg:!px-0 relative">
            <div className=" xl:pt-[67px] pt-[42px] xl:pb-[99px] pb-[89px] border border-[#707070] lg:pl-[40px] max-lg:px-[30px] ">
                <h2 className="text-[#000000] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] leading-tight font-Light max-[380px]:text-[22px]">
                    End-to-End Automotive Buyer Journey
                </h2>
                <h3 className="text-[#030303] 4xl:text-[42px] 2xl:text-[38px] xl:text-[28px] lg:text-[26px] text-[22px] leading-[27px] xl:leading-[52px] font-semibold xl:mt-[33px] mt-[17px] max-[380px]:text-[20px]">
                    Seamless from First Click to Final Delivery
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-[60px] gap-[82px] xl:mt-[63px] mt-[32px] 3xl:pr-[280px] 2xl:pr-[140px] xl:pr-[80px] lg:pr-[48px]">
                    {endtoendautomativesection.map((section, index) => (
                        <div key={index} className={`${index === 1 ? "lg:mt-[179px]" : "lg:mt[63px]"}`}>
                            {/* Mobile Image */}
                            <Image
                                src={section.imgUrlMobile}
                                alt={section.title}
                                className="block lg:hidden mb-4 h-auto w-full"
                                width={375}
                                height={250}
                                priority
                            />
                            {/* Desktop Image */}
                            <Image
                                src={section.imgUrlDesktop}
                                alt={section.title}
                                className="hidden lg:block mb-4 h-auto w-full"
                                width={1200}
                                height={630}
                                priority
                            />
                            <h4 className="mt-[29px] xl:mt-[63px] 4xl:text-[36px] 2xl:text-[32px] xl:text-[28px] lg:text-[28px] md:text-[28px] xl:font-semibold font-medium text-[20px] leading-tight">{section.title}</h4>
                            <UnorderedList arrName={section.list} ulClassName="list-disc xl:mt-[13px] mt-[6px] pl-[22px]" liClassName="mt-[19px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[18px] text-[16px] xl:leading-[24px] leading-[19px] w-[90%] lg:w-full" />
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-[-20px]">
                    <LearnMore />
                </div>
            </div>
        </section>
    );
};
const ComprehensiveCustomerSection = () => {
    const comprehensiveCustomerData = [
        {
            title: "Warranty and Maintenance Management",
            list: [
                "Automated warranty registration and repair order management using Salesforce Service Cloud + SAP.",
                "Real-time recall and campaign notifications to customers.",
                "Connected vehicle data integration for proactive maintenance reminders.",
                "Service scheduling integrated with dealer management systems (DMS).",
                "Parts inventory and real-time parts ordering from SAP."
            ],
        }, {
            title: "Vehicle & Customer Relationship Management",
            list: [
                "Family and corporate buyer charts to manage multi-vehicle households and fleets.",
                "Targeted marketing for loyalty offers, service packages, and vehicle upgrades.",
                "Integration with telematics platforms for real-time diagnostics and predictive maintenance.",
            ],
        }

    ]
    return (
        <section className="relative xl:mt-[93px] mt-[107px] w-full">
            {/* Mobile Image */}
            <Image
                src="/images/industry/auto-industry/Mobile/comprehensive-customer-mob-img.webp"
                alt="Customer Journey Mobile"
                className="block md:hidden w-full h-full object-cover"
                width={275}
                height={250}
                priority
            />
            {/* Desktop Image */}
            <div className="3xl:h-full xl:h-[700px]">
                <Image
                    src="/images/industry/auto-industry/comprehensive-customer-img.webp"
                    alt="Customer Journey Desktop"
                    className="hidden md:block w-full h-full object-cover"
                    width={1200}
                    height={630}
                    priority
                />
            </div>
            <div className="absolute inset-0 ">
                <div className="custom-container">
                    <div className="relative xl:w-[54%] lg:w-[50%] 2xl:w-[55%] max-[450px]:w-[87%] w-[75%] md:w-[45%]">
                        <div
                            className="absolute inset-0 z-0 pointer-events-none"
                            style={{
                                background: "rgba(0, 111, 190, 1)",
                                mixBlendMode: "multiply",
                                opacity: 1,
                                borderRadius: "inherit",
                            }}
                        />
                        <div className="relative z-10 xl:pt-[70px] pt-[32px] xl:pb-[55px] pb-[27px] px-[28px] md:px-[30px] 4xl:px-[100px] 2xl:px-[80px] xl:px-[80px] lg:px-[70px]">
                            <h2 className="text-[#FFFFFF] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] md:text-[29px] max-[400px]:text-[22px] leading-tight font-light max-">
                                Comprehensive Customer Service Journey
                            </h2>
                            <h3 className="text-[#FFFFFF] 4xl:text-[42px] 2xl:text-[38px] xl:text-[32px] lg:text-[30px] md:text-[23px] text-[22px] max-[400px]:text-[18px] font-semibold xl:mt-[39px] mt-[23px] leading-[27px] xl:leading-[52px]">
                                From Ownership to Loyalty
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="custom-container xl:mt-[64px] mt-[33px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-x-[87px] gap-y-[58px]">
                    {comprehensiveCustomerData.map((section, index) => (
                        <div key={index}>
                            <h4 className="4xl:text-[36px] 2xl:text-[32px] xl:text-[28px] lg:text-[28px] md:text-[26px] font-semibold text-[20px] leading-tight">
                                {section.title}
                            </h4>
                            <UnorderedList arrName={section.list} ulClassName="list-disc pl-[22px] xl:mt-[21px]" liClassName="mt-[19px] xl:mt-[19px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] md:text-[18px] text-[16px] leading-tight" />
                        </div>
                    ))}
                </div>
                <div className=" xl:mt-[66px] mt-[39px]">
                    <LearnMore />
                </div>
            </div>
        </section>
    );
};
const PersonalizingSection = () => {
    const personalizedData = [
        "Customer segmentation: First-time buyers, returning customers, luxury vs. budget segments.",
        "AI-powered next best action (NBA) and personalized marketing journeys.",
        "Behavioral and transactional triggers for targeted campaigns (e.g., lease end, service reminders).",
        "Dealer-specific campaigns and co-branded marketing programs."
    ];
    return (
        <section className="relative h-full xl:mt-[96px] mt-[91px] custom-container md:pr-0 max-md:px-0">
            <div className="flex items-start justify-start xl:pt-[64px] pt-[38px] xl:pb-[104px] pb-[73px] bg-[url('/images/industry/auto-industry/Mobile/personalizing-mob-img.webp')]
                        md:bg-[url('/images/industry/auto-industry/personalizing-img.webp')] bg-no-repeat bg-cover">
                <div className="relative md:pl-[76px] 2xl:w-[61%] xl:w-[81%] lg:w-[60%] md:w-[70%] sm:w-[80%] max-md:pl-[36px]">
                    <h2 className="text-[#FFFFFF] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] md:text-[29px] max-[400px]:text-[22px] leading-tight font-light  4xl:w-[732px] 2xl:w-[710px] xl:w-[500px] lg:w-[587px] md:w-[425px] w-[322px] max-[400px]:w-[260px]">
                        Personalizing the Automotive Experience
                    </h2>
                    <h3 className="text-[#FFFFFF] 4xl:text-[42px] 2xl:text-[38px] xl:text-[30px] lg:text-[30px] md:text-[23px] text-[22px] max-[400px]:text-[18px] leading-tight font-semibold xl:mt-[23px] mt-[20px] 4xl:w-[670px] 2xl:w-[650px] xl:w-[620px] lg:w-[600px] md:w-[483px] w-[400px] max-[400px]:w-[330px]">
                        Salesforce Marketing Cloud + Automotive Cloud
                    </h3>
                    <UnorderedList arrName={personalizedData} ulClassName="list-disc pl-[22px]  4xl:w-[520px] 2xl:w-[519px] xl:w-[470px] lg:w-[420px] md:w-[380px] w-[340px] max-[400px]:w-[270px]" liClassName="text-[#FFFFFF] mt-[19px] xl:mt-[24px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] md:text-[18px] text-[16px] leading-tight" />
                    <div className="absolute bottom-[-125px]">
                        <LearnMore />
                    </div>
                </div>
            </div>
        </section>
    );
};
const RevolutionizingServiceSection = () => {
    const revolutionizingData = [
        "Dealer and service center case management for faster issue resolution.",
        "Integrated knowledge bases for technical service teams.",
        "Mobile app for field service agents (remote diagnostics, service-on-the-go).",
        "Warranty and extended service plan administration."
    ];
    return (
        <>
            <div className="mt-[78px] xl:mt-[89px]">
                {/* Mobile Image */}
                <Image
                    src="/images/industry/auto-industry/Mobile/revolutionizing-service-mob-img.webp"
                    alt="revolutionizing-service-img"
                    className="block md:hidden w-full"
                    width={375}
                    height={250}
                    priority
                />
                {/* Desktop Image */}
                <Image
                    src="/images/industry/auto-industry/revolutionizing-service-img.webp"
                    alt="revolutionizing-service-img"
                    className="hidden md:block w-full h-full object-cover"
                    width={1200}
                    height={630}
                    priority
                />
            </div>
            <div className="custom-container">
                <div className="xl:pl-[72px] px-[31px] lg:mt-[-200px] mt-[-30px] xl:pt-[56px] pt-[32px] xl:pb-[0px] pb-[60px] bg-[#073259] relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-[71px] gap-[20px]">
                        <div>
                            <h2 className="text-[#FFFFFF] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] text-[26px] md:text-[29px] max-[400px]:text-[22px] leading-tight 2xl:w-[99%] xl:w-[80%] lg:w-[60%] font-light ">
                                Revolutionizing Service Operations
                            </h2>
                            <h3 className="text-[#FFFFFF] font-semibold 4xl:text-[42px] 2xl:text-[38px] xl:text-[30px] lg:text-[30px] md:text-[23px] text-[20px] max-[400px]:text-[18px] leading-tight mt-[13px] xl:mt-[22px]">
                                Salesforce Service Cloud
                            </h3>
                        </div>
                        {/* Right Column */}
                        <div className="flex flex-col">
                            <UnorderedList arrName={revolutionizingData} ulClassName="list-disc pl-[22px] 4xl:w-[431px] 2xl:w-[426px] xl:w-[400px] lg:w-[350px] xl:mt-[20px]" liClassName="text-[#FFFFFF] mt-[19px] first:mt-0 xl:mt-[24px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] md:text-[18px] text-[16px] leading-tight" />
                            {/* Button only visible on desktop inside the box */}
                            <div className="hidden lg:block mt-[56px] xl:ml-1 ">
                                <Link href="/contact-us">
                                    <button className="bg-[#006FBE] xl:text-[20px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] xl:border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Button outside grid for mobile */}
            <div className="block lg:hidden custom-container xl:pl-[70px] ml-[35px] -mt-[26px] absolute z-10">
                <Link href="/contact-us">
                    <button className="bg-[#006FBE] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
                        Learn More
                    </button>
                </Link>
            </div>
        </>
    );
};
const EnablingDynamicSection = () => {
    const enablingDynamicData = [
        "Real-time pricing and discounting for vehicles, parts, and accessories.",
        "Dealer and manufacturer incentive management.",
        "Bundling of add-ons like protection plans, service packages, and accessories.",
        "Integrated with SAP for inventory, parts, and vehicle configuration data."
    ]
    return (
        <section className="relative md:mt-[60px] min-[430px]:mt-[14rem] sm:mt-[15rem] mt-[12rem] md:pr-[20px] lg:pr-[60px] ">
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full relative z-20 md:flex md:items-center">
                    {/* Mobile Image - overlapping on content */}
                    <div className="block sm:block md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[25%] z-20 w-[80%] max-w-[460px]">
                        <Image
                            src="/images/industry/auto-industry/Mobile/enabling-dynamic-mob-img.webp"
                            alt="enabling-dynamic-img-mobile"
                            className="h-auto w-full max-w-full object-cover"
                            width={375}
                            height={250}
                            priority
                        />
                    </div>
                    {/* Desktop Image */}
                    <div className="absolute h-[80%] w-full hidden md:block">
                        <Image
                            src="/images/industry/auto-industry/enabling-dyanamic-img.webp"
                            alt="enabling-dynamic-img-desktop"
                            className="w-full object-cover h-full"
                            style={{ objectPosition: '40% 20%' }}
                            width={1200}
                            height={630}
                            priority
                        />
                    </div>
                </div>
                <div className="md:ml-[-220px] xl:ml-[-200px] relative z-0 bg-[#A16B4D] flex flex-col md:pl-[240px] xl:pl-[260px] md:pr-[55px] 2xl:pr-[75px]  px-[40px] xl:pt-[94px] md:pt-[44px] pb-0 h-auto md:h-full md:min-h-full min-h-[810px] sm:min-h-[820px] max-[460px]:min-h-[800px]">
                    <div className="max-md:absolute bottom-0">
                        <div className="max-md:pr-[36px]">
                            <h2 className="text-white 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px]  max-[380px]:text-[22px] leading-tight  4xl:w-[689px]  2xl:w-[670px] xl:w-[500px] lg:w-[500px]   max-[380px]:w-[256px] font-light">
                                Enabling Dynamic Pricing & Configuration
                            </h2>
                            <h3 className="text-white font-semibold 4xl:text-[42px] 2xl:text-[38px] xl:text-[28px] lg:text-[28px]  text-[20px] max-[38px]:text-[18px]   leading-tight mt-[18px] xl:mt-[39px] 2xl:w-[93%] xl:w-[80%] lg:w-[90%] ">
                                Salesforce Revenue Cloud for CPQ
                            </h3>
                            <UnorderedList arrName={enablingDynamicData} ulClassName="list-disc pl-[22px] xl:mt-[30px] mt-[23px] xl:mb-[74px] mb:[42px] 2xl:w-full xl:w-[95%] lg:w-[90%]" liClassName="text-white first:mt-0 mt-[19px] xl:mt-[24px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] text-[16px] leading-tight font-light" />
                            <div className="mt-[20px] xl:mt-[4px] mb-0">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
const DealerBuyerSection = () => {
    const enablingDynamicData = [
        "Self-service portals for customers to view deals, configure vehicles, apply for finance.",
        "Dealer portals for inventory tracking, incentives, and sales management.",
        "End-to-end document and contract management (signing, approvals, F&I disclosures).",
        "Integrated communication via chat, email, and secure messaging."
    ]
    return (
        <section className="relative md:mt-[60px] min-[430px]:mt-[14rem] sm:mt-[15rem] mt-[12rem] custom-container md:pr-0 max-md:px-0">
            <div className="flex flex-col md:flex-row-reverse relative">
                <div className="w-full relative z-10 px-[35px] md:px-0 md:flex md:items-center">
                    {/* Mobile Image - overlapping on content */}
                    <div className="block sm:block md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[25%] z-20 w-[80%] max-w-[460px]">
                        <Image
                            src="/images/industry/auto-industry/Mobile/dealer-buyer-mob-img.webp"
                            alt="dealer-buyer-mob-img"
                            className="block md:hidden h-full w-full object-cover"
                            width={375}
                            height={250}
                            priority
                        />
                    </div>
                    {/* Desktop Image */}
                    <Image
                        src="/images/industry/auto-industry/dealer-buyer-img.webp"
                        alt="dealer-buyer-img"
                        className="hidden md:block w-full h-[80%] lg:h-[90%] object-cover"
                        width={1200}
                        height={630}
                        priority
                    />
                </div>
                <div className="w-full relative md:-mr-[180px] z-0 bg-[#3B4E59] flex flex-col md:pl-[30px] lg:pl-[50px] md:pr-[194px] lg:pr-[204px] px-[35px] xl:pt-[104px] md:pt-[54px] pb-0h-auto md:h-full md:min-h-full min-h-[810px] sm:min-h-[820px] max-[460px]:min-h-[800px]">
                    <div className="max-md:absolute max-md:bottom-0 pr-[36px] ">
                        <h2 className="text-[#FFFFFF] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px]  max-[380px]:text-[22px] leading-tight  4xl:w-[734px]  2xl:w-[670px] xl:w-[500px] lg:w-[500px]  max-[350px]:w-[265px] font-light">
                            Dealer and Buyer Portal
                        </h2>
                        <h3 className="text-[#FFFFFF] font-semibold 4xl:text-[42px] 2xl:text-[38px] xl:text-[28px] lg:text-[28px]  text-[20px] max-[380px]:text-[18px]   leading-tight  2xl:w-[93%] xl:w-[88%] lg:w-[95%] mt-[19px] xl:mt-[28px]">
                            Salesforce Experience Cloud
                        </h3>
                        <UnorderedList arrName={enablingDynamicData} ulClassName="list-disc pl-[22px] 2xl:w-[90%] xl:w-[90%] lg:w-[95%] xl:mt-[40px] mt-[28px]" liClassName="text-[#FFFFFF] mt-[19px] first:mt-0  xl:mt-[24px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] text-[16px] leading-tight xl:leading-[24px] font-light" />
                        <div className="mt-[20px] xl:mt-[48px] md:mb-[94px]">
                            <Link href='/contact-us'>
                                <button className="xl:bg-[#006FBE] bg-[#006FBE] xl:text-[20px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] xl:border-[1px] border-[solid] border-[#006FBE] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const EmpoweringDealersSection = () => {
    const enablingDynamicData = [
        "Single agent view of buyer history, preferences, service records, and warranty.",
        "AI-powered next-best-action (NBA) for upselling and service opportunities.",
        "Omnichannel engagement (chat, phone, in-store).",
        "Embedded dealer CRM workflows, including test drive follow-ups and retention campaigns."
    ]
    return (
        <section className="relative md:mt-[60px] min-[430px]:mt-[14rem] sm:mt-[15rem] mt-[12rem] md:pr-[20px] lg:pr-[60px] ">
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full relative z-20 md:flex md:items-center">
                    {/* Mobile Image - overlapping on content */}
                    <div className="block sm:block md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[25%] z-20 w-[80%] max-w-[460px]">
                        <Image
                            src="/images/industry/auto-industry/Mobile/empowering-dealers-mob-img.webp"
                            alt="empowering-dealers-mob-img"
                            className="h-auto w-full object-cover"
                            width={375}
                            height={250}
                            priority
                        />
                    </div>
                    {/* Desktop Image */}
                    <div className="absolute h-[80%] w-full hidden md:block">
                        <Image
                            src="/images/industry/auto-industry/empowering-dealers-img.webp"
                            alt="empowering-dealers-img"
                            className="w-full object-cover h-full"
                            width={1200}
                            height={630}
                            priority
                        />
                    </div>
                </div>
                <div className="md:ml-[-220px] xl:ml-[-200px] relative z-0 bg-[#4087C7] flex flex-col md:pl-[240px] xl:pl-[260px] md:pr-[55px] 2xl:pr-[75px] px-[35px] xl:pt-[94px] md:pt-[44px] pb-0 h-auto md:h-full md:min-h-full min-h-[810px] sm:min-h-[820px] max-[460px]:min-h-[800px]">
                    <div className="max-md:absolute bottom-0">
                        <div className="max-md:pr-[36px]">
                            <h2 className="text-white  4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px]  max-[380px]:text-[22px] leading-tight  4xl:w-[670px]  2xl:w-[670px] xl:w-[500px] lg:w-[500px]  max-[350px]:w-[265px]  font-light">
                                Empowering Dealers & Agents
                            </h2>
                            <h3 className="text-white font-semibold 4xl:text-[42px] 2xl:text-[38px] xl:text-[28px] lg:text-[28px]  text-[20px] max-[400px]:text-[18px]  max-[350px]:w-[256px] leading-tight  2xl:w-[717px] xl:w-full lg:w-[95%]  mt-[18px] xl:mt-[39px] w-[80%] ">
                                Agentforce in Automotive Cloud
                            </h3>
                            <UnorderedList arrName={enablingDynamicData} ulClassName="list-disc pl-[22px] 2xl:w-[90%] xl:w-[90%] lg:w-[95%] xl:mt-[40px] mt-[23px]" liClassName="text-white mt-[19px] first:mt-0 xl:mt-[24px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] text-[16px] leading-tight xl:leading-[24px] font-light" />
                            <div className="mt-[20px] xl:mt-[60px] xl:mb-[70px] mb-0">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
const UnlockingDataSection = () => {
    const unlockingData = [
        "Unified 360° view of customers, vehicles, service history, and deals.",
        "Real-time data unification from dealerships, OEM systems, and connected cars.",
        "Advanced analytics and AI for forecasting, inventory optimization, and personalized recommendations.",
        " Customer behavior insights for proactive service and sales campaigns."
    ]
    return (
        <section className="relative md:mt-[60px] min-[430px]:mt-[14rem] sm:mt-[15rem] mt-[12rem] custom-container md:pr-0 max-md:px-0">
            <div className="flex flex-col md:flex-row-reverse relative">
                <div className="w-full relative z-10 px-[35px] md:px-0 md:flex md:items-center">
                    {/* Mobile Image - overlapping on content */}
                    <div className="block sm:block md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[25%] z-20 w-[80%] max-w-[460px]">
                        <Image
                            src="/images/industry/auto-industry/Mobile/unlocking-data-mob-img.webp"
                            alt="unlocking-data-mob-img"
                            className="block md:hidden h-full w-full object-cover"
                            width={375}
                            height={250}
                            priority
                        />
                    </div>
                    {/* Desktop Image */}
                    <Image
                        src="/images/industry/auto-industry/unlocking-data-img.webp"
                        alt="unlocking-data-img"
                        className="hidden md:block w-full h-[80%] lg:h-[90%] object-cover"
                        width={1200}
                        height={630}
                        priority
                    />
                </div>
                <div className="w-full relative md:-mr-[180px] z-0 bg-[#3B4E59] flex flex-col md:pl-[30px] lg:pl-[50px] md:pr-[194px] lg:pr-[204px] px-[35px] xl:pt-[104px] md:pt-[54px] pb-0h-auto md:h-full md:min-h-full min-h-[810px] sm:min-h-[820px] max-[460px]:min-h-[800px]">
                    <div className="max-md:absolute max-md:bottom-0 pr-[36px]">
                        <h2 className="text-white 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px]  max-[380px]:text-[22px] leading-tight  4xl:w-[689px]  2xl:w-[670px] xl:w-[500px] lg:w-[500px]   font-light ">
                            Unlocking Data-Driven Success
                        </h2>
                        <h3 className="text-white font-semibold 4xl:text-[42px] 2xl:text-[38px] xl:text-[28px] lg:text-[28px]  text-[20px] max-[380px]:text-[18px]  max-[390px]:w-[256px] leading-tight  2xl:w-[689px] xl:w-full lg:w-[95%]   mt-[18px] xl:mt-[39px]">
                            Salesforce Data Cloud for Automotive
                        </h3>
                        <UnorderedList arrName={unlockingData} ulClassName="list-disc pl-[22px] 2xl:w-[90%] xl:w-[90%] lg:w-[95%] mt-[23px] xl:mt-[38px]" liClassName="text-white mt-[19px] first:mt-0 xl:mt-[24px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] text-[16px] xl:leading-[24px] leading-[19px] font-light" />
                        <div className="mt-[20px] xl:mt-[48px] xl:mb-[94px] mb-0">
                            <Link href='/contact-us'>
                                <button className="xl:bg-[#006FBE] bg-[#006FBE] xl:text-[20px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] xl:border-[1px] border-[solid] border-[#006FBE] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const IntegratingAutomativeSection = () => {
    const integratingAutomativeData = [
        "Real-time integration between Salesforce Automotive Cloud, SAP S/4HANA, DMS, and third-party platforms.",
        "Synchronizing vehicle configurations, parts availability, pricing, warranty data, and customer records.",
        "SAP BTP-based custom extensions, including dealer-specific apps, AI-driven diagnostics, and mobility services integration (EV charging, telematics).",
        "Security and compliance ensured through SAP Identity and Access Management (IAM).",
    ]
    return (
        <section className="relative xl:mt-[106px] mt-[99px] w-full">
            {/* Mobile View */}
            <div className="relative block md:hidden">
                <div className="sm:h-[1200px] h-full">
                    <Image
                        src="/images/industry/auto-industry/Mobile/integrating-automative-mob-img.webp"
                        alt="integrating-automative-mob-img"
                        className="w-full h-full object-cover sm:object-[35%_50%]"
                        width={375}
                        height={250}
                        priority
                    />
                </div>
                <div className="sm:mx-[100px] mx-[40px] absolute bottom-0 left-0 right-0 bg-[rgba(0,111,190,0.8)] px-[22px] pt-[32px]">
                    <h2 className="text-[#FFFFFF] text-[26px] max-[350px]:text-[22px] leading-[32px] font-light">
                        Integrating the Automotive Stack
                    </h2>
                    <h3 className="text-[#FFFFFF] text-[22px] max-[350px]:text-[18px]  font-semibold mt-[16px] leading-[27px] w-[90%]">
                        SAP CPI and BTP Expertise
                    </h3>
                    <UnorderedList arrName={integratingAutomativeData} ulClassName="list-disc pl-[22px] text-[#FFFFFF] mt-[16px]" liClassName="mt-[19px] first:mt-0 text-[16px] leading-[19px]" />
                    <div className="mt-[51px]">
                        <LearnMore />
                    </div>
                </div>
            </div>
            {/* Desktop View */}
            <div className="2xl:h-[900px] xl:h-[1000px] md:h-[700px]">
                <Image
                    src="/images/industry/auto-industry/integrating-automative-img.webp"
                    alt="integrating-automative-img"
                    className="hidden md:block w-full h-full object-cover"
                    width={1200}
                    height={630}
                    priority
                />
            </div>
            <div className="hidden md:flex absolute inset-0 items-start justify-start">
                <div className="custom-container">
                    <div className="relative 2xl:w-[61%] w-[55%] xl:w-[56%] ">
                        <div
                            className="absolute inset-0 z-0 pointer-events-none"
                            style={{
                                background: "rgba(0, 111, 190, 0.8)",
                                borderRadius: "inherit",
                            }}
                        />
                        <div className="relative z-10 xl:pt-[70px] pt-[32px] xl:pb-[55px] pb-[27px] px-[26px] xl:px-[61px] ">
                            <h2 className="text-[#FFFFFF] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px]  max-[380px]:text-[22px] leading-tight  4xl:w-[689px]  2xl:w-[670px] xl:w-[400px] lg:w-[500px] md:w-[350px]   font-light">
                                Integrating the Automotive Stack
                            </h2>
                            <h3 className="text-[#FFFFFF] 4xl:text-[42px] 2xl:text-[38px] xl:text-[28px] lg:text-[28px]  text-[20px] max-[380px]:text-[18px]  max-[390px]:w-[256px] leading-tight  2xl:w-[689px] xl:w-[500px] lg:w-[95%]    font-semibold xl:mt-[38px] mt-[16px]  xl:leading-[52px]">
                                SAP CPI and BTP Expertise
                            </h3>
                            <UnorderedList arrName={integratingAutomativeData} ulClassName="list-disc pl-[22px] text-[#FFFFFF] xl:mt-[40px] mt-[16px] 4xl:w-[85%] 2xl:w-[89%] xl:w-[90%] lg:w-[95%]" liClassName="mt-[19px] first:mt-0 2xl:text-[20px] xl:text-[16px] lg:text-[16px] text-[16px] leading-tight font-light" />
                            <div className="xl:mt-[40px] mt-[41px]">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
const PartenringPowerSection = () => {
    const partenringPowerData = [
        "Salesforce Automotive Cloud, Marketing Cloud, Revenue Cloud, Service Cloud, and Experience Cloud.",
        "SAP S/4HANA Automotive, SAP ARIBA, SAP BTP, and SAP CPI.",
    ];
    return (
        <section className="relative w-full">
            {/* Mobile View */}
            <div className="2xl:h-[900px] xl:h-[1000px] md:h-[700px] block md:hidden">
                <div className="sm:h-[1200px] h-full">
                    <Image
                        src="/images/industry/auto-industry/Mobile/partnering-power-mob-img.webp"
                        alt="partnering-power-mob-img"
                        className="w-full h-full"
                        width={375}
                        height={250}
                        priority
                    />
                </div>
                <div className="sm:mx-[100px] mx-[40px] absolute bottom-0 left-0 right-0 bg-[rgba(255,255,255,0.8)] px-[14px] pt-[32px] z-10">
                    <h2 className="text-[#000000] text-[26px] max-[350px]:text-[22px]  leading-[32px]">
                        Rialtes Partnering Power
                    </h2>
                    <h3 className="text-[#0B0B0B] text-[22px]  max-[350px]:text-[18px] font-semibold xl:mt-[18px] mt-[16px] leading-[27px]">
                        SAP and Salesforce Expertise in One
                    </h3>
                    <p className="text-[#000000] text-[16px] mt-[16px] leading-[19px] font-normal">
                        With deep alliances with SAP and Salesforce, Rialtes delivers the most comprehensive, agile, and future-ready automotive solutions on the market. Our experts hold certifications in:
                    </p>
                    <UnorderedList arrName={partenringPowerData} ulClassName="list-disc pl-[20px] text-[#000000] mt-[45px]" liClassName="mt-[19px] first:mt-0 text-[16px] leading-[19px]" />
                    <div className="mt-[33px]">
                        <LearnMore />
                    </div>
                </div>
            </div>
            {/* Desktop View */}
            <div className="hidden md:block relative w-full h-full">
                <div className="relative w-full md:h-[570px] lg:h-[500px] xl:h-[810px] 2xl:h-[794px] 3xl:h-[680px]">
                    <Image
                        src="/images/industry/auto-industry/partnering-power-img.webp"
                        alt="partnering-power-img"
                        className="w-full h-full object-cover"
                        width={1200}
                        height={630}
                        priority
                    />
                    <div className="absolute inset-0">
                        <div className="custom-container w-full h-full flex items-start justify-end">
                            <div className="relative bg-white h-full xl:pt-[66px] pt-[32px] px-[26px] xl:px-[61px] md:w-[55%] w-full">
                                <h2 className="text-[#000000] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px]  max-[380px]:text-[22px] leading-tight  4xl:w-[624px]  2xl:w-[670px] xl:w-[400px] lg:w-[380px] md:w-[350px]   font-light  ">
                                    Rialtes Partnering Power
                                </h2>
                                <h3 className="text-[#0B0B0B] 4xl:text-[42px] 2xl:text-[38px] xl:text-[28px] lg:text-[28px]  text-[20px] max-[380px]:text-[18px]  max-[390px]:w-[256px] leading-tight  4xl:w-[614px] 2xl:w-[570px] xl:w-[405px] lg:w-[77%] font-semibold xl:mt-[18px] mt-[16px]  ">
                                    SAP and Salesforce Expertise in One
                                </h3>
                                <p className="text-[#000000] 2xl:text-[20px] xl:text-[16px] lg:text-[16px]  text-[16px] leading-tight font-normal xl:mt-[11px] mt-[16px]  xl:leading-[24px]">
                                    With deep alliances with SAP and Salesforce, Rialtes delivers the most comprehensive, agile, and future-ready automotive solutions on the market. Our experts hold certifications in:
                                </p>
                                <UnorderedList arrName={partenringPowerData} ulClassName="list-disc pl-[22px] text-[#000000] xl:mt-[26px] mt-[16px]" liClassName="mt-[19px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] text-[16px] xl:leading-[24px] leading-[19px]" />
                                <div className="xl:mt-[33px] mt-[41px]">
                                    <LearnMore />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
const RelatedSolutionsSection = () => {
    const relatedSolutionsData = [
        {
            title: "SAP S/4HANA for Automotive Industry",
            desc: "Full ERP for automotive supply chain, production, and finance."
        },
        {
            title: "SAP ARIBA for Direct & Indirect Automotive Procurement",
            desc: "Supplier collaboration and parts procurement."
        }, {
            title: "Salesforce Automotive Cloud",
            desc: "End-to-end CRM for auto manufacturers and dealers."
        },
    ]
    return (
        <section className="custom-container max-md:px-0">
            <div
                className={`xl:pl-[61px] px-[35px] xl:mt-[94px] mt-[63px] xl:pt-[129px] pt-[49px] xl:pb-[160px] pb-[59px] 
                    bg-[url('/images/industry/auto-industry/Mobile/related-solutions-mob-img.webp')] bg-cover bg-center
                    md:bg-[url('/images/industry/auto-industry/related-solutions-img.webp')] md:bg-cover md:bg-center`}>
                <h2 className="4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px]  max-[380px]:text-[22px] leading-tight font-light   text-[#FFFFFF]">
                    Related Solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:mt-[45px] mt-[33px] gap-[30px] lg:gap-0">
                    {relatedSolutionsData.map((item, index) => {
                        // Border 
                        const borderRight = index < 2 ? 'xl:border-r-[2px] xl:border-[#FFFFFF]' : '';
                        const borderBottom = 'border-b-[2px] border-[#FFFFFF] md:border-0 pb-[33px] last:border-b-0 last:pb-0';
                        // Padding 
                        let paddingClass = '';
                        if (index === 0) {
                            paddingClass = 'xl:pr-0'; // 1st grid: only right padding
                        } else {
                            paddingClass = 'xl:px-[30px]'; // Others: left + right
                        }
                        return (
                            <div key={index} className={`flex xl:flex-col xl:justify-between md:w-[80%] xl:w-full ${borderRight} ${borderBottom} ${paddingClass} h-full`}>
                                <div className="flex flex-col flex-1 xl:min-h-[300px]">
                                    <h4 className="text-white 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px]  text-[18px] xl:font-semibold font-medium leading-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-white 2xl:text-[20px] xl:text-[16px] lg:text-[16px] font-light leading-[19px] xl:leading-[24px] xl:mt-[18px] mt-[18px] ">
                                        {item.desc}
                                    </p>
                                    <div className={`mt-auto pt-[20px] ${index === relatedSolutionsData.length - 1 ? 'xl:mt-[37px] 2xl:mt-[72px]' : ''}`}>
                                        <Link href="/contact-us">
                                            <button className="bg-[#006FBE] hover:bg-white hover:text-[#134874] text-white xl:text-[20px] text-[16px] font-semibold py-3 px-8 transition duration-300">
                                                Learn More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
export default function page() {
    return (
        <>
            <Seo
                title="Digital Transformation in Automotive Industry | Rialtes"
                description="Ready for digital transformation in automotive? Partner with Rialtes to revolutionize your automotive industry journey and fuel future growth."
                canonical="https://www.rialtes.com/industry/digital-transformation-in-automotive-industry/"
            />
            <Script
                id="schema-automotive"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
             {/* breadcrumb schema */}
       <BreadcrumbSchema
       currPage="Automotive"/>

            {/* hero section */}
            <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px]  ">
                <div className="hidden md:block">
                    <Image
                        src="/images/industry/auto-industry/auto-industry-banner.webp"
                        alt="desktop banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/industry/auto-industry/Mobile/auto-industry-banner-mob.webp"
                        alt="mobile banner"
                        fill
                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 ">
                        <div className="col-span-12 xl:col-span-7 lg:col-span-9 text-white">
                            <h3 className="text-[18px] 4xl:text-[24px] 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[18px]  font-bold pr-[60px]">
                                Automotive Industry Solutions
                            </h3>
                            <h1 className="text-[24px]  md:text-[36px] lg:text-[50px] xl:text-[50px] 2xl:text-[56px]  4xl:text-[60px] leading-tight mt-[11.5px] md:mt-[28.5px] 4xl:w-[549px] 2xl:w-[520px] xl:w-[450px] lg:w-[430px] md:w-[334px] w-[198px] "  >
                                Driving Digital Transformation from Showroom to Service Bay
                            </h1>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb */}
            <div className="custom-container">
                <BreadCrumbs currPage="Automotive" />
            </div>
            {/* powering next gen section */}
            <section className="custom-container xl:mt-[112px] mt-[62px]">
                <h2 className="4xl:text-[60px] 2xl:text-[58px] xl:text-[40px] lg:text-[40px] md:text-[35px] text-[26px] max-[400px]:text-[22px]  leading-tight xl:w-[69%] 2xl:w-[85%] lg:w-[77%] font-light">Powering the Next-Generation Automotive Ecosystem with Rialtes</h2>
                <div className="mt-[22px] xl:mt-[48px]">
                    <p className="4xl:text-[22px] 2xl:text-[20px] xl:text-[16px]   text-[16px] font-normal lg:w-[78%] w-[96%]">The automotive industry is in the midst of a seismic shift — from traditional dealer-centric models to a connected, customer-first mobility ecosystem. OEMs, dealers, and suppliers are challenged to deliver seamless omnichannel experiences, manage complex vehicle lifecycles, and foster brand loyalty in a hyper-competitive market.</p>
                    <p className="4xl:text-[22px] 2xl:text-[20px] xl:text-[16px]   text-[16px] font-normal  mt-[22px] xl:mt[48px] lg:w-[78%] w-[96%]"> Rialtes partners with leading automotive brands to navigate these disruptions, combining deep domain expertise with cutting-edge technologies like SAP, Salesforce Automotive Cloud, Marketing Cloud, Revenue Cloud, and more. With offices in the U.S., Canada, India, and Singapore, and certified automotive solution experts, we deliver end-to-end digital transformation — from lead capture to warranty service and beyond.</p>
                </div>
            </section>
            <ThoughtLeadershipSection />
            <PreDeliveredSection />
            <EndToEndAutomativeSection />
            <ComprehensiveCustomerSection />
            <PersonalizingSection />
            <RevolutionizingServiceSection />
            <EnablingDynamicSection />
            <DealerBuyerSection />
            <EmpoweringDealersSection />
            <UnlockingDataSection />
            <IntegratingAutomativeSection />
            <PartenringPowerSection />
            <RelatedSolutionsSection />
            {/* Contact Form */}
            <div className="custom-container pb-10">
                <ContactForm title={'Ready to Transform Your Automotive Customer Experience?'} className={"max-w-[66rem] xl:font-normal 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] leading-tight mt-[52px] xl:mt-[89px]"} />
            </div >
        </>
    )
}