"use client";
import Image from "next/image";
import LearnMore from "@/app/components/learnMore";
import { useState, useEffect } from 'react';
import ContactForm from "@/app/components/contactform";

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

const KeyPillarsSectionDesign = ({ data }) => {
    return (
        <section className="xl:mt-[95px] mt-[79px]">
            <div className="xl:mx-[210px] md:mx-[100px] xl:pl-[70px] mx-[35px]">
                <h2 className="text-[000000] xl:text-[30px] text-[18px] font-bold">
                    Key Pillars of AutoSense
                </h2>
                <div className="xl:mt-[49px] mt-[35px]">
                    {data.map((data, ind) => {
                        return (
                            <div
                                key={ind}
                                className="grid md:grid-cols-2 grid-cols-1 xl:mt-[31px] mt-[26px]"
                            >
                                {ind % 2 === 0 ? (
                                    <>
                                        <div
                                            style={{ backgroundColor: data.bgColor, padding: '32px 22px 0px 22px' }}
                                            className="xl:pt-[46px] xl:px-[79px] pb-0 px-[22px] pt-[32px] order-2 md:order-none flex flex-col justify-between h-full"
                                        >
                                            <h3 className="xl:text-[36px] text-[22px] font-semibold text-[#FFFFFF] xl:pt-[31px] xl:pl-[34px] xl:leading-[44px] leading-[27px]">
                                                {data.title}
                                            </h3>
                                            <ul className="list-disc text-[#FFFFFF] xl:mt-[24px] xl:px-[24px] pb-0 px-[22px] xl:pl-[52px] pl-[16px] xl:w-[80%] pr-0">
                                                {data.listItems.map((item, index) => (
                                                    <li key={index} className="xl:mt[24px] mt-[19px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px]">{item}</li>
                                                ))}
                                            </ul>
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
                                            />

                                            {/* Mobile Image */}
                                            <Image
                                                src={data.mobileImageUrl}
                                                alt={data.imageAlt}
                                                width={600}
                                                height={100}
                                                className="block md:hidden w-full h-full object-cover"
                                            />

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
                                            />

                                            {/* Mobile Image */}
                                            <Image
                                                src={data.mobileImageUrl}
                                                alt={data.imageAlt}
                                                width={600}
                                                height={100}
                                                className="block md:hidden w-full h-full object-cover"
                                            />

                                        </div>
                                        <div
                                            style={{ backgroundColor: data.bgColor, padding: '32px 22px 0px 22px' }}
                                            className="xl:pt-[46px] xl:px-[79px] pb-0 px-[22px] pt-[32px] order-2 md:order-none flex flex-col justify-between h-full"
                                        >
                                            <h3 className="xl:text-[36px] text-[22px] font-semibold text-[#FFFFFF] xl:pt-[31px] xl:pl-[34px] xl:leading-[44px] leading-[27px]">
                                                {data.title}
                                            </h3>
                                            <ul className="list-disc text-[#FFFFFF] xl:mt-[24px] xl:px-[24px] pb-0 px-[22px] xl:pl-[52px] pl-[16px] xl:w-[90%] pr-0">
                                                {data.listItems.map((item, index) => (
                                                    <li key={index} className="xl:mt[24px] mt-[19px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px]">{item}</li>
                                                ))}
                                            </ul>
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

const ChooseRialtes = ({ data }) => {
    return (
        <section className="xl:mx-[210px] md:mx-[100px] xl:pl-[60px] xl:mt-[135px] mt-[74px] mx-[35px]">
            <h2 className="xl:text-[60px] text-[26px] xl:leading-[73px] leading-[32px] font-light">
                Why Choose Rialtes for <span className="block">Automotive Transformation?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:mt-[61px] mt-[37px]">
                {data.map((item, ind) => {
                    return (
                        <div key={ind} className="xl:p-[55px] p-[42px] border-[1px] border-[#707070] hover:border-0 hover:bg-[#D9F2FF] transition-colors duration-300">
                            <img src={item.imageUrl} alt={`image-${ind}`} />
                            <h3 className="xl:mt-[46px] mt-[33px] xl:text-[30px] text-[20px] font-semibold xl:leading-[37px] leading-[24px]">{item.title}</h3>
                            <div>
                                {item.listItems.map((listItem, index) => (
                                    <p key={index} className="xl:mt-[33px] mt-[26px] xl:text-[24px] text-[16px] font-normal xl:leading-[29px] leading-[19px]">{listItem}</p>
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

const RialtesMakesWork = ({ data }) => {
    return (
        <section className="xl:mx-[210px] md:mx-[100px] xl:pl-[70px] mx-[35px] xl:mt-[110px] mt-[70px]">
            <h2 className="text-[26px] xl:text-[60px]">How Rialtes Makes It Work</h2>
            <h3 className="text-[22px] xl:text-[42px] font-semibold xl:mt-[16px] mt-[17px]">
                Seamless Integration Across the Ecosystem
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-[100px] xl:gap-[158px] xl:mt-[61px] mt-[29px]">
                {/* Left Column */}
                {data[0] && (
                    <div className="rialtesmakecard-1">
                        <img src={data[0].image} alt={data[0].title} className="w-full hidden md:block" />
                        <img src={data[0].mobileImage} alt={data[0].title} className="w-full block md:hidden" />

                        <h4
                            className="xl:mt-[63px] mt-[33px] xl:text-[36px] text-[20px] font-semibold xl:leading-[44px] leading-[24px]">
                            {data[0].title}
                        </h4>
                        <ul className="list-disc pl-5 xl:mt-[33px] mt-[29px] w-[90%]">
                            {data[0].list.map((descItem, descIndex) => (
                                <li key={descIndex}
                                    className="xl:text-[20px] text-[16px] xl:mt-[24px] mt-[19px] xl:leading-[24px] leading-[19px]">
                                    {descItem}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}


                {/* Right Column */}
                {data[1] && (
                    <div className="rialtesmakecard-2 mt-[47px] xl:mt-[230px]">
                        <img src={data[1].image} alt={data[1].title} className="w-full hidden md:block" />
                        <img src={data[1].mobileImage} alt={data[1].title} className="w-full block md:hidden" />

                        <h4
                            className="xl:mt-[63px] mt-[33px] xl:text-[36px] text-[20px] font-semibold xl:leading-[44px] leading-[24px]">
                            {data[1].title}
                        </h4>
                        <ul className="list-disc pl-5 xl:text-[20px] text-[16px] xl:mt-[33px] mt-[29px]  w-[90%]">
                            {data[1].list.map((descItem, descIndex) => (
                                <li key={descIndex}
                                    className="xl:text-[20px] text-[16px] xl:mt-[24px] mt-[19px] xl:leading-[24px] leading-[19px]">
                                    {descItem}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-[40px] xl:mt-[-80px]">
                {/* Left Column */}
                {data[2] && (
                    <div className="rialtesmakecard-1">
                        <img src={data[2].image} alt={data[2].title} className="w-full hidden md:block" />
                        <img src={data[2].mobileImage} alt={data[2].title} className="w-full block md:hidden" />

                        <h4
                            className="xl:mt-[63px] mt-[33px] xl:text-[36px] text-[20px] font-semibold xl:leading-[44px] leading-[24px]">
                            {data[2].title}
                        </h4>
                        <ul className="list-disc pl-5 xl:mt-[33px] mt-[29px]  w-[90%]">
                            {data[2].list.map((descItem, descIndex) => (
                                <li key={descIndex}
                                    className="xl:text-[20px] text-[16px] xl:mt-[24px] mt-[19px] xl:leading-[24px] leading-[19px]">
                                    {descItem}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </section>
    );
};

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

const ThoughtLeadershipDesign = ({ data }) => {
    const [bgImage, setBgImage] = useState('');

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        const mobileImage = '/images/industry/auto-sense/Mobile/thought-leadership-mob-img.webp';
        const desktopImage = '/images/industry/auto-sense/thought-leadership-img.webp';

        setBgImage(isMobile ? mobileImage : desktopImage);
    }, []);

    return (
        <section
            className="bg-center bg-no-repeat xl:pt[151px] xl:pb[173px] py-[65px] xl:mt-[70px] mt-[57px] mb-[115px] xl:mb-0 px-[30px] xl:px-2"
            style={
                bgImage
                    ? {
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: '100% 100%',
                    }
                    : {}
            }
        >
            <div className="xl:mx-[210px] md:mx-[100px] xl:pl-[60px] mx-[25px]">
                <div>
                    <h2 className="text-[#FFFFFF] xl:text-[60px] text-[20pt] xl:w-[65%] w-[100%] xl:leading-[73px] leading-[32px]">
                        Thought Leadership Themes for Automotive Clients
                    </h2>
                    <p className="text-[#FFFFFF] xl:text-[24px] text-[16pt] font-semibold xl:mt[29px] mt-[26px] xl:leading-[37px] leading-[24px] xl:w-[55%]">
                        Here are 5 high impact thought leadership ideas Rialtes can drive to position as an industry leader:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-[89px] gap-[20px] xl:gap-y-auto gap-y-[54px] xl:mt-[84px] mt-[40px]">
                        {data.map((item, index) => (
                            <div key={index}>
                                <h3 className="text-[20px] xl:text-[30px] font-semibold text-[#FFFFFF] xl:leading-[37px] leading-[24px]">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] xl:text-[24px] mt-[15px] xl:mt-[29px] text-[#FFFFFF] xl:leading-[29px] leading-[19px] w-[90%] font-light">
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
            {/* hero section */}
            <section className="relative group overflow-hidden h-[399px] lg:h-[650px]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/industry/auto-sense/auto-sense-banner.webp"
                        alt="auto-sense-banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/industry/auto-sense/Mobile/auto-sense-banner-mob.webp"
                        alt=""
                        fill
                        priority
                    />
                </div>

                <div
                    className="h-full relative mx-[35px] xl:mr-0 xl:ml-[280px] xl:w-[calc(100%-280px)] md:ml-[100px] md:w-[calc(100%-100px)]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-20 xl:mt-[100px] mt-[32px]">
                        <div className="xl:col-span-6 col-span-12 xl:pr-16 pr-[35rem]">
                            <h3 className="text-white xl:text-[24px] text-[18px] font-bold mb-4 mt-10">AutoSense</h3>
                            <h1 className="text-white xl:text-[60px] text-[24px] leading-tight">
                                Accelerate Your Automotive Business with Rialtes AutoSense
                            </h1>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        </div>
                    </div>

                </div>
            </section>

            {/* page description section */}
            <section
                className="
              mx-[35px] xl:mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)] xl:mt-[105px] mt-[55px] xl:mb-[114px] mb-[42px]"
            >
                <p className="xl:text-[22px] text-[16px] xl:leading-[30px] leading-[19px] xl:w-[70%] w-[96%]">For over a decade, Rialtes has been a trusted partner for global automotive leaders, helping them navigate rapid industry transformation — from electrification and connected vehicles to customer experience innovation and supply chain resilience. Our specialized service suite, AutoSense, brings together deep automotive expertise, Salesforce Automotive Cloud proficiency, and powerful ERP integrations to drive real business outcomes.</p>

            </section>

            {/* introducing rialtes */}
            <section
                className="
        container
        w-[calc(100%-15px)] mx-[35px] xl:mx-auto
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:w-[calc(100%-40px)]
        xs:w-[calc(100%-32px)]"
            >

                <div>
                    <div className=" 2xl:pr-72 xl:pr-40 md:pr-20">
                        <div className="flex flex-col xl:flex-row">
                            <div className="flex flex-col w-full xl:max-w-xl xl:mr-10 xl:mb-0 mb-4">
                                <h2 className="text-[#000000] text-[18px] xl:text-[30px] ">Introducing</h2>
                                <h2 className="text-[#000000] text-[24px] xl:text-[50px] font-medium ">Rialtes AutoSense</h2>
                                <div className="text-[#000000] text-[22px] xl:text-[36px] font-semibold xl:mt-[31px] mt-[12px] xl:leading-[40px] leading-[27px] xl:w-full w-[76%]">End-to-End Automotive Solutions</div>
                            </div>
                            <div className="flex flex-col w-full">
                                <p className="text-[#000000] text-[16px] xl:text-[21px] xl:mt-[20px] xl:leading-[30px] leading-[19px] xl:w-[90%] w-[90%]" >AutoSense is Rialtes comprehensive service suite designed specifically for the evolving needs of the automotive ecosystem — including OEMs, suppliers, dealers, and mobility providers. AutoSense combines advisory, implementation, quality assurance, and post-go-live support, fully integrated with OEM technology partners like SAP and Salesforce. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* key pillars of autosense */}

            <KeyPillarsSectionDesign data={keyPillarsSectionData} />
            {/* how rialtes makes it workd section */}
            <RialtesMakesWork data={rialtesMakesWorkData} />
            {/* why choose rialtes section */}
            <ChooseRialtes data={chooseRialtesData} />


            {/* partner with rialtes */}
            <section className="relative mt-[60px] xl:mt-[81px]">
                {/* IMAGE */}
                <div className="mx-auto">
                    {/* Desktop Image */}
                    <Image
                        src="/images/industry/auto-sense/partner-with-rialtes-img.webp"
                        alt="partner-with-rialtes-img"
                        width={1400}
                        height={100}
                        className="hidden sm:block"
                    />

                    {/* Mobile Image */}
                    <Image
                        src="/images/industry/auto-sense/Mobile/partner-with-rialtes-img-mobile.webp"
                        alt="partner-with-rialtes-img-mobile"
                        width={600}
                        height={100}
                        className="block sm:hidden"
                    />
                </div>

                {/* TEXT SECTION */}
                <div className="relative z-10 bg-[#073259] mt-[-30px] xl:mt-[-60px] xl:w-[100%] xl:ml-auto xl:p-[71px] p-[32px] max-w-[85%] mx-auto xl:mx-0">

                    <div className="mx-auto">
                        <div className="flex flex-col xl:flex-row xl:gap-x-6">
                            {/* Left Column */}
                            <div className="flex flex-col xl:w-[40%]">
                                <h2 className="text-[#FFFFFF] text-[26px] xl:text-[60px] xl:leading-[73px] leading-[32px]">
                                    Partner with Rialtes to Drive Intelligent Automotive Transformation
                                </h2>
                            </div>

                            {/* Right Column */}
                            <div className="flex flex-col xl:w-[27%]  xl:mt-[14px] mt-[27px] xl:ml-[61px]">
                                <p className="text-[#FFFFFF] text-[16px] xl:text-[24px] xl:leading-[29px] leading-[19px] font-normal">
                                    Whether you’re a global OEM, a growing EV brand, or a leading dealership network, Rialtes helps you connect technology with outcomes. From advisory and implementation to ongoing innovation, we are your partner in building the future of mobility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Thought leadership themes */}
            <ThoughtLeadershipDesign data={thoughtLeadershipData} />

            {/* Contact Form */}
            <div
                className="
              xl:container
              mx-[35px] xl:mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]
              text-black xl:pb-20 pb-10 xl:pt-[138px]"
            >
                <ContactForm title={'Accelerate Your Automotive Transformation with Rialtes'} className={"max-w-[62rem] xl:font-light xl:text-[60px] text-[26px] xl:leading-[73px] leading-[32px]"} />
            </div >

        </>


    )
}