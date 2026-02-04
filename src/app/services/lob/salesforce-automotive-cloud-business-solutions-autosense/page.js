"use client";
import Image from "next/image";
import LearnMore from "@/app/components/learnMore";
import UnorderedList from "@/app/components/unorderedList";
import ContactForm from "@/app/components/contactform";
import Seo from "@/app/components/Seo";
import BreadCrumbs from '@/app/components/BreadCrumbs'

import Script from "next/script";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Transformation Automotive Services",
    "name": "Accelerate digital transformation in the automotive industry​ with Rialtes AutoSense",
    "provider": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg",
        "sameAs": [
            "https://www.linkedin.com/company/rialtes-technologies-llc/",
            "https://www.youtube.com/@rialtes"
        ]
    },
    "url": "https://www.rialtes.com/services/lob/salesforce-automotive-cloud-business-solutions-autosense/",
    "description": "Rialtes AutoSense offers end-to-end automotive digital transformation services for OEMs, suppliers, dealerships, and mobility providers. From Salesforce Automotive Cloud and SAP S/4HANA implementation to ERP integration and connected vehicle ecosystems, we drive innovation in EV strategy, intelligent operations, and data monetization.",
    "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "Singapore" },
        { "@type": "Country", "name": "Europe" }
    ],
    "audience": {
        "@type": "BusinessAudience",
        "audienceType": [
            "OEMs",
            "Automotive Suppliers",
            "EV Startups",
            "Dealerships",
            "Mobility Providers"
        ]
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Rialtes AutoSense Offerings",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Strategic Advisory & Roadmapping",
                    "description": "Future-ready digital strategy, EV compliance, and CX innovation powered by SAP Signavio and Salesforce advisory."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Design & Implementation",
                    "description": "Deployment of Salesforce Automotive Cloud, SAP VMS, and connected car ecosystems with AI and IoT integration."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Integration & Quality Assurance",
                    "description": "End-to-end ERP, CRM, and IoT platform integration, AI-driven testing, and cybersecurity compliance."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Post Go-Live & Continuous Innovation",
                    "description": "24/7 managed services, AI CoE, and connected data monetization strategies for long-term growth."
                }
            }
        ]
    },
    "category": "Automotive Consulting, Digital Transformation, Salesforce Automotive Cloud, SAP S/4HANA for Automotive",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.rialtes.com/services/lob/salesforce-automotive-cloud-business-solutions-autosense/"
    }
}
const KeyPillarsSectionDesign = () => {
    const keyPillarsSectionData = [
        {
            imageUrl: "/images/industry/auto-sense/strategic-advisory-img.webp",
            imageAlt: "strategic advisory image",
            mobileImageUrl: "/images/industry/auto-sense/Mobile/strategic-advisory-mob-img.webp",
            title: "Strategic Advisory & Roadmapping",
            listItems: [
                "Future-ready IT and digital strategy aligned to electrification, AI, and CX goals.",
                "Process reimagination workshops leveraging SAP Signavio and Salesforce advisory tools.",
                "EV market-readiness and regulatory compliance assessments.",
            ],
            bgColor: "#1FA274"
        },
        {
            imageUrl: "/images/industry/auto-sense/design-and-implementation-img.webp",
            imageAlt: "design and implementation image",
            mobileImageUrl: "/images/industry/auto-sense/Mobile/design-and-implementation-mob-img.webp",
            title: "Design & Implementation",
            listItems: [
                "Rapid deployment of Salesforce Automotive Cloud, SAP S/4HANA Automotive, SAP Vehicle Management System (VMS), and SAP IBP for Supply Chain.",
                "Connected car ecosystem design, integrating IoT platforms and AI data lakes.",
                "Dealer network transformation with Salesforce Automotive Retail solutions.",
            ],
            bgColor: "#0F90BF"
        }, {
            imageUrl: "/images/industry/auto-sense/integration-quality-assurance-img.webp",
            imageAlt: "integration quality assurance image",
            mobileImageUrl: "/images/industry/auto-sense/Mobile/integration-quality-assurance-mob-img.webp",

            title: "Integration & Quality Assurance",
            listItems: [
                "Seamless integration across ERP, CRM, connected devices, and third-party platforms.",
                "Data integrity, cybersecurity assessments, and compliance readiness.",
                "AI-driven testing and process simulations for zero-defect delivery.",
            ],
            bgColor: "#006FBE"
        }
        , {
            imageUrl: "/images/industry/auto-sense/post-go-live-img.webp",
            imageAlt: "post go live image",
            mobileImageUrl: "/images/industry/auto-sense/Mobile/post-go-live-mob-img.webp",

            title: "Post Go-Live & Continuous Innovation",
            listItems: [
                "Dedicated Center of Excellence (CoE) for AI, SAP, and Salesforce auto solutions.",
                "24x7 managed services, proactive monitoring, and continuous optimization.",
                "Data monetization frameworks — helping OEMs leverage connected car data for new revenue streams.",
            ],
            bgColor: "#5C8C9D"
        },
    ];
    return (
        <section className="xl:mt-[95px] mt-[79px]">
            <Seo
                title="Salesforce Automotive Cloud Solutions and Services | Rialtes AutoSense"
                description="Salesforce automotive cloud by Rialtes AutoSense drives innovation and efficiency, helping automotive businesses deliver exceptional customer experiences."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/services/lob/salesforce-automotive-cloud-business-solutions-autosense"
            />
            <div className="custom-container">
                <h2 className="text-[000000] 4xl:text-[30px] xl:text-[24px] text-[20px] leading-tight font-bold">
                    Key Pillars of AutoSense
                </h2>
                <div className="xl:mt-[49px] mt-[35px]">
                    {keyPillarsSectionData.map((data, ind) => {
                        return (
                            <div
                                key={ind}
                                className="grid md:grid-cols-2 grid-cols-1 xl:mt-[31px] mt-[26px]">
                                {ind % 2 === 0 ? (
                                    <>
                                        <div
                                            style={{ backgroundColor: data.bgColor, padding: '32px 22px 0px 22px' }}
                                            className="xl:pt-[46px] xl:px-[79px] pb-0 px-[22px] pt-[32px] order-2 md:order-none flex flex-col justify-between h-full">
                                            <h3 className="4xl:text-[36px] xl:text-[31px] text-[22px] leading-tight font-semibold text-[#FFFFFF] xl:pt-[31px] xl:pl-[34px] ">
                                                {data.title}
                                            </h3>
                                            <UnorderedList arrName={data.listItems} ulClassName="list-disc text-[#FFFFFF] xl:mt-[24px] xl:px-[24px] pb-0 px-[22px] xl:pl-[52px] pl-[16px] xl:w-[80%] pr-0" liClassName="xl:mt[24px] mt-[19px] text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" />
                                            <div className="xl:mt-[31px] xl:px-[30px]">
                                                <LearnMore />
                                            </div>
                                        </div>
                                        <div className="order-1 md:order-none">
                                            {/* Desktop Image */}
                                            <Image
                                                src={data.imageUrl}
                                                alt={data.imageAlt}
                                                width={600}
                                                height={100}
                                                className="hidden md:block w-full h-full object-cover"
                                                priority />
                                            {/* Mobile Image */}
                                            <Image
                                                src={data.mobileImageUrl}
                                                alt={data.imageAlt}
                                                width={600}
                                                height={100}
                                                className="block md:hidden w-full h-full object-cover"
                                                priority />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="order-1 md:order-none">
                                            {/* Desktop Image */}
                                            <Image
                                                src={data.imageUrl}
                                                alt={data.imageAlt}
                                                width={600}
                                                height={100}
                                                className="hidden md:block w-full h-full object-cover"
                                                priority
                                            />
                                            {/* Mobile Image */}
                                            <Image
                                                src={data.mobileImageUrl}
                                                alt={data.imageAlt}
                                                width={600}
                                                height={100}
                                                className="block md:hidden w-full h-full object-cover"
                                                priority
                                            />
                                        </div>
                                        <div style={{ backgroundColor: data.bgColor, padding: '32px 22px 0px 22px' }}
                                            className="xl:pt-[46px] xl:px-[79px] pb-0 px-[22px] pt-[32px] order-2 md:order-none flex flex-col justify-between h-full">
                                            <h3 className="4xl:text-[36px] xl:text-[31px] text-[22px]  font-semibold text-[#FFFFFF] xl:pt-[31px] xl:pl-[34px] xl:leading-[44px] leading-[27px]">
                                                {data.title}
                                            </h3>
                                            <UnorderedList arrName={data.listItems} ulClassName="list-disc text-[#FFFFFF] xl:mt-[24px] xl:px-[24px] pb-0 px-[22px] xl:pl-[52px] pl-[16px] xl:w-[90%] pr-0" liClassName="xl:mt[24px] mt-[19px] text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" />
                                            <div className="xl:mt-[31px] xl:px-[30px]">
                                                <LearnMore />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
const ChooseRialtes = () => {
    const chooseRialtesData = [
        {
            imageUrl: "/images/industry/auto-sense/automative-experties-img.svg",
            title: "10+ Years of Automotive Expertise",
            listItems: [
                "We bring over a decade of hands-on experience working with OEMs, suppliers, dealers, and EV startups across the automotive value chain. From manufacturing floors to customer showrooms, we understand the unique challenges and opportunities shaping the future of mobility.",
            ]
        },
        {
            imageUrl: "/images/industry/auto-sense/automative-cloud-experts-img.svg",
            title: "Salesforce Automotive Cloud Experts",
            listItems: [
                "As certified Salesforce Automotive Cloud specialists, we empower automotive companies to deliver connected, personalized customer experiences, improve dealer collaboration, and unlock the power of connected vehicle data.",
            ]
        },
        {
            imageUrl: "/images/industry/auto-sense/data-integration-img.svg",
            title: "Seamless ERP & Data Integration",
            listItems: [
                "We specialize in integrating Salesforce Automotive Cloud with backend ERP platforms like SAP S/4HANA and Oracle, creating a unified data ecosystem that connects sales, service, supply chain, and finance.",
            ]
        }
    ];
    return (
        <section className="custom-container xl:mt-[135px] mt-[74px]">
            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] font-light">
                Why Choose Rialtes for <span className="block">Automotive Transformation?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:mt-[61px] mt-[37px]">
                {chooseRialtesData.map((item, ind) => {
                    return (
                        <div key={ind} className="xl:p-[47px] p-[42px] border-[1px] border-[#707070] hover:border-[#D9F2FF] hover:bg-[#D9F2FF] transition-colors duration-300">
                            <Image src={item.imageUrl} alt={`image-${ind}`} width={1200} height={700} priority />
                            <h3 className="xl:mt-[46px] mt-[33px] 4xl:text-[30px] xl:text-[23px] text-[20px] font-semibold leading-tight">{item.title}</h3>
                            <div>
                                {item.listItems.map((listItem, index) => (
                                    <p key={index} className="xl:mt-[33px] mt-[26px] text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal ">{listItem}</p>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="xl:mt-[52px] mt-[32px]">
                <LearnMore />
            </div>
        </section>
    );
};
const RialtesMakesWork = () => {
    const rialtesMakesWorkData = [
        {
            image: "/images/industry/auto-sense/backend-erp-img.webp",
            mobileImage: "/images/industry/auto-sense/Mobile/backend-erp-mob-img.webp",
            title: "Salesforce Automotive Cloud + Backend ERP Systems (SAP, Oracle, Others)",
            list: [
                "Integrating Salesforce Automotive Cloud with ERP systems like SAP S/4HANA for Automotive, SAP IBP for Supply Chain, and Oracle Automotive solutions for real-time sync of inventory, production, warranty, and supply chain data.",
                "Enabling dynamic pricing, incentives, order management, and inventory visibility directly within Salesforce.",
            ]
        },
        {
            image: "/images/industry/auto-sense/frontend-img.webp",
            mobileImage: "/images/industry/auto-sense/Mobile/frontend-mob-img.webp",
            title: "Salesforce Automotive Cloud + Front-End Data Visualization & AI Solutions",
            list: [
                "Building interactive dashboards and customer portals using tools like Tableau, Power BI, and AI/ML-powered analytics.",
                "Delivering real-time visual insights for leadership on sales trends, vehicle demand, service patterns, and customer sentiment.",
            ]
        },
        {
            image: "/images/industry/auto-sense/end-to-end-process-img.webp",
            mobileImage: "/images/industry/auto-sense/Mobile/end-to-end-process-mob-img.webp",
            title: "End-to-End Process Automation & Quality Assurance",
            list: [
                "Implementing process automation for sales, service, and marketing workflows.",
                "Ensuring data integrity, security compliance, and zero-defect delivery through AI-powered testing frameworks.",
            ]
        }
    ];
    return (
        <section className="custom-container xl:mt-[110px] mt-[70px]">
            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">How Rialtes Makes It Work</h2>
            <h3 className="text-[22px] xl:text-[30px] 4xl:text-[42px] leading-tight font-semibold xl:mt-[16px] mt-[17px]">
                Seamless Integration Across the Ecosystem
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[60px] lg:gap-[100px] xl:gap-[158px] xl:mt-[61px] mt-[29px]">
                {/* Left Column */}
                {rialtesMakesWorkData[0] && (
                    <div className="rialtesmakecard-1">
                        <Image src={rialtesMakesWorkData[0].image} alt={rialtesMakesWorkData[0].title} width={1200} height={700} priority className="w-full hidden md:block" />
                        <Image src={rialtesMakesWorkData[0].mobileImage} alt={rialtesMakesWorkData[0].title} width={1200} height={700} priority className="w-full block md:hidden" />
                        <h4
                            className="xl:mt-[63px] mt-[33px] 4xl:text-[36px] xl:text-[28px] text-[20px] leading-tight  font-semibold ">
                            {rialtesMakesWorkData[0].title}
                        </h4>
                        <UnorderedList arrName={rialtesMakesWorkData[0].list} ulClassName="list-disc pl-5 xl:mt-[33px] mt-[29px] w-[90%]" liClassName="xl:mt-[24px] mt-[19px] text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" />
                    </div>
                )}
                {/* Right Column */}
                {rialtesMakesWorkData[1] && (
                    <div className="rialtesmakecard-2 mt-[47px] md:mt-[160px] xl:mt-[230px]">
                        <Image src={rialtesMakesWorkData[1].image} alt={rialtesMakesWorkData[1].title} width={1200} height={700} priority className="w-full hidden md:block" />
                        <Image src={rialtesMakesWorkData[1].mobileImage} alt={rialtesMakesWorkData[1].title} width={1200} height={700} priority className="w-full block md:hidden" />
                        <h4 className="xl:mt-[63px] mt-[33px] 4xl:text-[36px] xl:text-[28px] text-[20px] leading-tight  font-semibold ">
                            {rialtesMakesWorkData[1].title}
                        </h4>
                        <UnorderedList arrName={rialtesMakesWorkData[1].list} ulClassName="list-disc pl-5 xl:text-[20px] text-[16px] xl:mt-[33px] mt-[29px]  w-[90%]" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight xl:mt-[24px] mt-[19px]" />
                    </div>
                )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-[40px] md:mt-[-60px] xl:mt-[-40px] 3xl:mt-[-80px]">
                {/* Left Column */}
                {rialtesMakesWorkData[2] && (
                    <div className="rialtesmakecard-1">
                        <Image src={rialtesMakesWorkData[2].image} alt={rialtesMakesWorkData[2].title} width={1200} height={700} priority className="w-full hidden md:block" />
                        <Image src={rialtesMakesWorkData[2].mobileImage} alt={rialtesMakesWorkData[2].title} width={1200} height={700} priority className="w-full block md:hidden" />
                        <h4 className="xl:mt-[63px] mt-[33px] 4xl:text-[36px] xl:text-[28px] text-[20px] leading-tight font-semibold ">
                            {rialtesMakesWorkData[2].title}
                        </h4>
                        <UnorderedList arrName={rialtesMakesWorkData[2].list} ulClassName="list-disc pl-5 xl:mt-[33px] mt-[29px] w-[90%]" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight xl:mt-[24px] mt-[19px]" />
                    </div>
                )}
            </div>
        </section>
    );
};
const ThoughtLeadershipDesign = () => {
    const thoughtLeadershipData = [
        {
            title: "The Road to EV-First Business Models: What Automotive Leaders Need to Know",
            description: "Navigating battery lifecycles, new revenue streams, and digital sales transformation."
        },
        {
            title: "AI-Powered Supply Chains: Solving Automotive Disruption with Intelligence",
            description: "How AI and SAP IBP are redefining proactive supply chain visibility."
        }, {
            title: "From Car Sales to Mobility Services: The Future of Customer Experience in Automotive",
            description: "Leveraging Salesforce Automotive Cloud for end-to-end CX management."
        }, {
            title: "Connected Cars, Data Goldmine: Monetization and AI-Driven Insights",
            description: "How to unlock the value of data streams from connected vehicles."
        }, {
            title: "Sustainability in the Fast Lane: Making Green Mobility Profitable",
            description: "Aligning profitability with ESG goals through AI and intelligent platforms."
        },
    ]
    return (
        <section
            className='bg-[url("/images/industry/auto-sense/Mobile/thought-leadership-mob-img.webp")] md:bg-[url("/images/industry/auto-sense/thought-leadership-img.webp")] bg-center bg-no-repeat bg-cover xl:pt-[151px] xl:pb-[93px] py-[65px] xl:mt-[70px] mt-[57px] px-[30px] xl:px-2'>
            <div className="custom-container max-lg:px-0">
                <div>
                    <h2 className="text-[#FFFFFF] leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]  w-[100%] xl:w-[55%] 4xl:w-[65%] ">
                        Thought Leadership Themes for Automotive Clients
                    </h2>
                    <p className="text-[#FFFFFF] font-semibold xl:mt[29px] mt-[26px]  xl:w-[71%] text-[20px] xl:text-[25px] 4xl:text-[30px] leading-tight">
                        Here are 5 high impact thought leadership ideas Rialtes can drive to position as an industry leader:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-[89px] gap-[20px] md:gap-[40px] xl:gap-y-auto gap-y-[54px] xl:mt-[84px] mt-[40px]">
                        {thoughtLeadershipData.map((item, index) => (
                            <div key={index}>
                                <h3 className="text-[20px] xl:text-[25px] 4xl:text-[30px] leading-tight font-semibold text-[#FFFFFF] ">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] xl:text-[18px] 4xl:text-[24px] leading-tight mt-[15px] xl:mt-[29px] text-[#FFFFFF] w-[90%] font-light">
                                    {item.description}
                                </p>
                                <div className="mt-[38px] xl:mt-[56px] xl:w-[81px] w-[34px] h-[4px] bg-white"></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="xl:mb-[34px] xl:mt-[78px] mt-[73px]">
                    <LearnMore />
                </div>
            </div>
        </section>
    );
};
export default function page() {
    return (
        <>
            <Script
                id="schema-automotive-cloude"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* breadcrumbs schema*/}
            <BreadcrumbSchema currPage="Salesforce Automotive Cloud" subPath="Line of Business" />
            {/* hero section */}
            <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px] ">
                <div className="md:block hidden">
                    <Image
                        src="/images/industry/auto-sense/auto-sense-banner.webp"
                        alt="auto-sense-banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="md:hidden block">
                    <Image
                        src="/images/industry/auto-sense/Mobile/auto-sense-banner-mob.webp"
                        alt=""
                        fill
                        priority
                    />
                </div>
                <div className="h-full relative  custom-container">
                    <div className="grid md:grid-cols-12 grid-cols-1 4xl:mt-20 xl:mt-10 ">
                        <div className="lg:col-span-5 2xl:col-span-5 4xl:col-span-7 col-span-12 mt-28 max-sm:mt-10 2xl:pr-[34px]">
                            <h3 className="text-white xl:text-[24px] text-[18px] font-bold mb-2">AutoSense</h3>
                            <h1 className="text-white leading-tight md:text-[26px] xl:text-[40px] 4xl:text-[60px] mt-5">
                                Accelerate Your Automotive Business with Rialtes AutoSense
                            </h1>
                        </div>
                        <div className="xl:col-span-7 col-span-12">
                        </div>
                    </div>
                </div>
            </section>
            <section className="custom-container mt-4">
                {/* breadcrumbs */}
                <BreadCrumbs currPage="Salesforce Automotive Cloud" subPath="Line of Business" />
            </section>
            {/* page description section */}
            <section className="custom-container xl:mt-[105px] mt-[55px] xl:mb-[114px] mb-[42px]">
                <p className="text-[16px] xl:text-[18px] 4xl:text-[22px] leading-tight xl:w-[70%] w-[96%]">For over a decade, Rialtes has been a trusted partner for global automotive leaders, helping them navigate rapid industry transformation — from electrification and connected vehicles to customer experience innovation and supply chain resilience. Our specialized service suite, AutoSense, brings together deep automotive expertise, Salesforce Automotive Cloud proficiency, and powerful ERP integrations to drive real business outcomes.</p>
            </section>
            {/* introducing rialtes */}
            <section className="custom-container">
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="flex flex-col w-full lg:max-w-xl lg:mb-0 mb-4">
                        <p className="text-[#000000] text-[18px] xl:text-[22px] 4xl:text-[30px] leading-tight font-normal">Introducing</p>
                        <p className="text-[#000000] leading-tight 4xl:text-[50px] xl:text-[40px] text-[24px]  font-medium ">Rialtes AutoSense</p>
                        <div className="text-[#000000] text-[22px] xl:text-[32px] 2xl:text-[34px] 4xl:text-[36px]  leading-tight font-semibold xl:mt-[31px] mt-[12px] xl:w-full w-[96%]">End-to-End Automotive Solutions</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <p className="text-[#000000] text-[16px] xl:text-[18px] 4xl:text-[22px] leading-tight xl:w-[90%] w-[90%]" >AutoSense is Rialtes comprehensive service suite designed specifically for the evolving needs of the automotive ecosystem — including OEMs, suppliers, dealers, and mobility providers. AutoSense combines advisory, implementation, quality assurance, and post-go-live support, fully integrated with OEM technology partners like SAP and Salesforce. </p>
                    </div>
                </div>
            </section>
            {/* key pillars of autosense */}
            <KeyPillarsSectionDesign />
            {/* how rialtes makes it workd section */}
            <RialtesMakesWork />
            {/* why choose rialtes section */}
            <ChooseRialtes />
            {/* partner with rialtes */}
            <section className="relative mt-[60px] xl:mt-[81px]">
                <div className="custom-container md:pl-0 max-md:px-0">
                    {/* Desktop Image */}
                    <Image
                        src="/images/industry/auto-sense/partner-with-rialtes-img.webp"
                        alt="partner-with-rialtes-img"
                        width={1200}
                        height={630} 
                        className="hidden lg:block w-full"
                        priority
                    />
                    {/* Mobile Image */}
                    <Image
                        src="/images/industry/auto-sense/Mobile/partner-with-rialtes-img-mobile.webp"
                        alt="partner-with-rialtes-img-mobile"
                        width={375}
                        height={250}
                        className="block lg:hidden w-full"
                        priority
                    />
                </div>
                <div className="custom-container md:pr-0">
                    <div className="relative z-10 bg-[#073259] mt-[-60px] xl:mt-[-60px] xl:p-[71px] p-[32px] mx-auto">
                        <div className="mx-auto custom-container md:pl-0 max-md:px-0">
                            <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-[10px]">
                                <div className="">
                                    <h2 className="text-[#FFFFFF] leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] lg:w-[80%] xl:w-full 2xl:w-[90%] 4xl:w-[100%]">
                                        Partner with Rialtes to Drive Intelligent Automotive Transformation
                                    </h2>
                                </div>
                                <div className="lg:mt-0 2xl:mt-[14px] mt-[27px] xl:ml-[61px] xl:w-[80%] lg:pl-[40px]">
                                    <p className="text-[#FFFFFF] text-[16px] xl:text-[18px] 4xl:text-[24px] leading-tight font-normal lg:w-[80%] xl:w-full">
                                        Whether you’re a global OEM, a growing EV brand, or a leading dealership network, Rialtes helps you connect technology with outcomes. From advisory and implementation to ongoing innovation, we are your partner in building the future of mobility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Thought leadership themes */}
            <ThoughtLeadershipDesign />
            {/* Contact Form */}
            <div className="custom-container text-black xl:pb-20 pb-10 pt-[115px] xl:pt-[138px]">
                <ContactForm title={'Accelerate Your Automotive Transformation with Rialtes'} className={"max-w-[62rem] xl:font-light xl:text-[60px] text-[26px] xl:leading-[73px] leading-[32px]"} />
            </div >
        </>
    )
}