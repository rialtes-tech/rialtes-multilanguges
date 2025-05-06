"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform"
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "../../components/learnMore";

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

const PreDeliveredSection = () => {
    return (
        <section
            className="
          mt-[62px] xl:mt-[112px]
          md:mx-[100px] xl:mx-[280px]
          bg-[url('/images/industry/auto-industry/Mobile/predelivered-mob-img.webp')]
          md:bg-[url('/images/industry/auto-industry/Mobile/predelivered-mob-img.webp')]
          xl:bg-[url('/images/industry/auto-industry/predelivered-img.webp')]
          bg-no-repeat bg-cover bg-center
          pt-[64px] xl:pt-[82px]
          px-[36px] xl:px-[138px]
        "
            style={{ backgroundSize: "100% 100%" }}
        >
            <h2 className="text-[#FFFFFF] xl:text-[60px] text-[24px] leading-[32px] xl:leading-[73px] font-normal xl:w-[70%]">
                Rialtes Pre-Delivered Automotive Accelerators
            </h2>

            <h3 className="text-[#FFFFFF] xl:text-[42px] text-[22px] leading-[27px] xl:leading-[52px] font-semibold xl:mt-[49px] mt-[21px]">
                Fast-Tracking Success
            </h3>

            <p className="text-[#FFFFFF] xl:text-[22px] text-[16px] leading-[19px] xl:leading-[30px] font-normal xl:mt-[35px] mt-[21px] xl:w-[80%]">
                Our proprietary accelerators are designed to streamline and future-proof automotive operations:
            </p>

            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 xl:gap-12 mt-[40px] xl:mt-[174px]">
                {predeliveredCardData.map((card, index) => (
                    <div
                        key={index}
                        className="bg-[#FFFFFF] border border-[#707070 pt-[33px] xl:pt-[65px] pb-[47px] xl:pb-[36px] px-[33px] xl:px-[33px]"
                    >
                        <h4 className="text-[#006FBE] xl:text-[30px] text-[20px] font-semibold leading-[24px] xl:leading-[37px]">
                            {card.title}
                        </h4>
                        <p className="text-[#000000] xl:text-[18px] text-[14px] font-normal mt-[21px] xl:mt-[33px] ">
                            {card.desc}
                        </p>
                    </div>
                ))}
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
        <section
            className="xl:mt-[112px] mt-[62px] mx-[1px] xl:mr-0
          xl:ml-[280px] xl:w-[calc(100%-280px)]
          md:ml-[100px] md:w-[calc(100%-100px)]
          xl:pt-[67px] pt-[42px] border border-[#707070] px-[35px] xl:pl-[56px] xl:pb-[99px] pb-[83px]"
        >
            <h2 className="text-[#000000] xl:text-[60px] text-[25px] leading-[32px] xl:leading-[73px] font-normal">
                End-to-End Automotive Buyer Journey
            </h2>

            <h3 className="text-[#0B0B0B] xl:text-[42px] text-[22px] leading-[27px] xl:leading-[52px] font-semibold xl:mt-[33px] mt-[17px]">
                Seamless from First Click to Final Delivery
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-[56px] gap-[82px] mt-8 xl:w-[86%]">
                {endtoendautomativesection.map((section, index) => (
                    <div
                        key={index}
                        className={`${index === 1 ? "xl:mt-[176px]" : "xl:mt[63px]"}`}
                    >
                        {/* Mobile Image */}
                        <img
                            src={section.imgUrlMobile}
                            alt={section.title}
                            className="block md:hidden mb-4"
                        />
                        {/* Desktop Image */}
                        <img
                            src={section.imgUrlDesktop}
                            alt={section.title}
                            className="hidden md:block mb-4 xl:w-[90%]"
                        />

                        <h4 className="mt-[29px] xl:mt-[63px] xl:text-[36px] font-semibold text-[20px] xl:leading-[44px] leading-[24px]">{section.title}</h4>

                        <ul className="list-disc xl:mt-[24px] pl-[22px]">
                            {section.list.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="mt-[19px] xl:text-[20px] text-[15px] xl:leading-[24px] leading-[19px]"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

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
        <section className="relative xl:mt-[62px] mt-[86px] w-full">
            {/* Mobile Image */}
            <img
                src="/images/industry/auto-industry/Mobile/comprehensive-customer-mob-img.webp"
                alt="Customer Journey Mobile"
                className="block md:hidden w-full h-auto object-contain"
            />

            {/* Desktop Image */}
            <img
                src="/images/industry/auto-industry/comprehensive-customer-img.webp"
                alt="Customer Journey Desktop"
                className="hidden md:block w-full h-auto object-contain"
            />

            <div className="absolute inset-0 flex items-start justify-start">
                <div className="relative mx-[32px] xl:mr-0 xl:ml-[280px] xl:w-[36%] md:ml-[100px] w-[68%] lg:w-[80%]">

                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            background: "rgba(0, 111, 190, 1)",
                            mixBlendMode: "multiply",
                            opacity: 1,
                            borderRadius: "inherit",
                        }}
                    />

                    <div className="relative z-10 xl:pt-[70px] pt-[32px] xl:pb-[55px] pb-[27px] px-[26px] xl:px-[61px]">
                        <h2 className="text-white xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px]">
                            Comprehensive Customer Service Journey
                        </h2>
                        <h3 className="text-white xl:text-[42px] text-[22px] font-semibold xl:mt-[39px] mt-[23px] leading-[27px] xl:leading-[52px]">
                            From Ownership to Loyalty
                        </h3>
                    </div>
                </div>
            </div>

            <div
                className="xl:mx-[210px] md:mx-[100px] xl:pl-[70px] mx-[35px] xl:mt-[64px] mt-[33px]"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-x-[87px] gap-y-[40px]">
                    {comprehensiveCustomerData.map((section, index) => (
                        <div key={index}>
                            <h4 className="xl:text-[36px] font-semibold text-[20px] xl:leading-[44px] leading-[24px]">
                                {section.title}
                            </h4>

                            <ul className="list-disc pl-[22px]">
                                {section.list.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="mt-[19px] xl:text-[20px] text-[15px] xl:leading-[24px] leading-[19px]"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
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
        "Behavioral and transactional triggers for targeted campaigns (e.g., lease end, service reminders)."
    ];

    return (
        <section className="relative xl:mt-[112px] mt-[62px] xl:mr-0
            xl:ml-[280px] xl:w-[calc(100%-280px)]
            md:ml-[100px] md:w-[calc(100%-100px)]"
        >
            {/* Mobile Image */}
            <img
                src="/images/industry/auto-industry/Mobile/personalizing-mob-img.webp"
                alt="personalizing-img"
                className="block md:hidden w-full"
            />

            {/* Desktop Image */}
            <img
                src="/images/industry/auto-industry/personalizing-img.webp"
                alt="personalizing-img"
                className="hidden md:block w-full h-[700px]"
            />

            <div className="absolute inset-0 flex items-start justify-start xl:mt-[64px] mt-[38px]">
                <div className="relative mx-[32px] xl:mr-0 xl:ml-[76px] xl:w-[50%]">
                    <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px]">
                        Personalizing the Automotive Experience
                    </h2>

                    <h3 className="text-[#FFFFFF] xl:text-[42px] text-[22px] leading-[27px] xl:leading-[52px] font-semibold xl:mt-[23px] mt-[20px]">
                        Salesforce Marketing Cloud + Automotive Cloud
                    </h3>

                    <ul className="list-disc pl-[22px] xl:w-[70%]  mt-[30px] xl:mt-[39px]">
                        {personalizedData.map((item, idx) => (
                            <li
                                key={idx}
                                className="text-[#FFFFFF] mt-[19px] xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px]">
                                {item}
                            </li>
                        ))}
                    </ul>
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

            <div className="mt-[58px]">

                {/* Mobile Image */}
                <img
                    src="/images/industry/auto-industry/Mobile/revolutionizing-service-mob-img.webp"
                    alt="revolutionizing-service-img"
                    className="block md:hidden w-full"
                />

                {/* Desktop Image */}
                <img
                    src="/images/industry/auto-industry/revolutionizing-service-img.webp"
                    alt="revolutionizing-service-img"
                    className="hidden md:block w-full h-[700px]"
                />
            </div>
            <div className="xl:ml-[270px] xl:mr-[170px] md:mx-[100px] xl:pl-[70px] px-[31px] mx-8 xl:mt-[-210px] mt-[-50px] xl:pt-[56px] pt-[32px] xl:pb-[0px] pb-[53px] bg-[#073259] relative">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-[71px] gap-[20px]">
                    {/* Left Column */}
                    <div>
                        <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px]">
                            Revolutionizing Service Operations
                        </h2>
                        <p className="text-[#FFFFFF] font-semibold xl:text-[42px] text-[20px] leading-[24px] xl:leading-[52px] mt-[13px] xl:mt-[22px]">
                            Salesforce Service Cloud
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col">
                        <ul className="list-disc pl-[22px] xl:w-[70%] xl:mt-[20px]">
                            {revolutionizingData.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="text-[#FFFFFF] mt-[19px] xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px]">
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Button only visible on desktop inside the box */}
                        <div className="hidden md:block mt-[56px]">
                            <Link href="/contact-us">
                                <button className="bg-[#006FBE] xl:text-[20px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] xl:border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            {/* Button outside grid for mobile */}
            <div className="block md:hidden xl:mx-[210px] md:mx-[100px] xl:pl-[70px] mx-8">
                <Link href="/contact-us">
                    <button className="bg-[#006FBE] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
                        Learn More
                    </button>
                </Link>
            </div></>

    );
};
const IntegratingAutomativeSection = () => {

    const integratingAutomativeData = [
        "Real-time integration between Salesforce Automotive Cloud, SAP S/4HANA, DMS, and third-party platforms.",
        "Synchronizing vehicle configurations, parts availability, pricing, warranty data, and customer records.",
        "SAP BTP-based custom extensions, including dealer-specific apps, AI-driven diagnostics, and mobility services integration (EV charging, telematics).",
        "Security and compliance ensured through SAP Identity and Access Management (IAM).",
    ]
    return (
        <section className="relative xl:mt-[62px] mt-[86px] w-full">
            {/* Mobile View (Image + content inside image at bottom) */}
            <div className="relative block md:hidden">
                <img
                    src="/images/industry/auto-industry/Mobile/integrating-automative-mob-img.webp"
                    alt="integrating-automative-mob-img"
                    className="w-full h-auto"
                />

                <div className="mx-[30px] absolute bottom-0 left-0 right-0 bg-[rgba(0,111,190,0.8)] px-[14px] pt-[32px]">
                    <h2 className="text-[#FFFFFF] text-[26px] leading-[32px]">
                        Integrating the Automotive Stack
                    </h2>
                    <h3 className="text-[#FFFFFF] text-[22px] font-semibold mt-[16px] leading-[27px]">
                        SAP CPI and BTP Expertise
                    </h3>

                    <ul className="list-disc pl-[22px] text-[#FFFFFF] mt-[16px]">
                        {integratingAutomativeData.map((element, index) => (
                            <li
                                key={index}
                                className="mt-[19px] text-[15px] leading-[19px]"
                            >
                                {element}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-[41px]">
                        <LearnMore />
                    </div>
                </div>
            </div>

            {/* Desktop View (Image + content overlaid top-left) */}
            <img
                src="/images/industry/auto-industry/integrating-automative-img.webp"
                alt="integrating-automative-img"
                className="hidden md:block w-full h-auto object-contain"
            />

            <div className="hidden md:flex absolute inset-0 items-start justify-start">
                <div className="relative mx-[32px] xl:mr-0 xl:ml-[280px] xl:w-[40%] md:ml-[100px] w-[90%] lg:w-[80%]">
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            background: "rgba(0, 111, 190, 0.8)",
                            borderRadius: "inherit",
                        }}
                    />
                    <div className="relative z-10 xl:pt-[70px] pt-[32px] xl:pb-[55px] pb-[27px] px-[26px] xl:px-[61px]">
                        <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px]">
                            Integrating the Automotive Stack
                        </h2>
                        <h3 className="text-[#FFFFFF] xl:text-[41px] text-[22px] font-semibold xl:mt-[38px] mt-[16px] leading-[27px] xl:leading-[52px]">
                            SAP CPI and BTP Expertise
                        </h3>

                        <ul className="list-disc pl-[22px] text-[#FFFFFF] xl:mt-[40px] mt-[16px]">
                            {integratingAutomativeData.map((element, index) => (
                                <li
                                    key={index}
                                    className="mt-[19px] xl:text-[20px] text-[15px] xl:leading-[24px] leading-[19px]"
                                >
                                    {element}
                                </li>
                            ))}
                        </ul>

                        <div className="xl:mt-[26px] mt-[41px]">
                            <LearnMore />
                        </div>
                    </div>
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
                        src="/images/industry/auto-industry/auto-industry-banner.webp"
                        alt="auto-industry-banner"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/industry/auto-industry/Mobile/auto-industry-banner-mob.webp"
                        alt="auto-industry-banner"
                        fill
                        priority
                    />
                </div>

                <div
                    className="
         h-full relative
        mx-[32px] xl:mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-20 xl:mt-20 mt-[90px]">
                        <div className="xl:col-span-6 col-span-12 xl:pr-16 pr-[35rem] xl:w-[80%] w-[90%]">
                            <h3 className="text-[#FFFFFF] xl:text-[24px] text-[18px] font-bold xl:mb-[20px] mb-[15.5px] mt-10 leading-[22px] xl:leading-[60px]">Automotive Industry Solutions</h3>
                            <h1 className="text-[#FFFFFF] xl:text-[60px] text-[24px] leading-[29px] xl:leading-[73px] font-normal">
                                Driving Digital Transformation from Showroom to Service Bay
                            </h1>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        </div>
                    </div>

                </div>
            </section>


            {/* powering next gen section */}

            <section className="mx-[32px] xl:mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)] xl:mt-[112px] mt-[62px]">
                <h2 className="xl:text-[60px] text-[26px] font-normal leading-[32px] xl:leading-[73px] xl:w-[70%]">Powering the Next-Generation Automotive Ecosystem with Rialtes</h2>
                <p className="xl:text-[22px] text-[16px] font-normal leading-[19px] xl:leading-[30px] mt-[22px] xl:mt[48px] xl:w-[70%] w-[96%]">The automotive industry is in the midst of a seismic shift — from traditional dealer-centric models to a connected, customer-first mobility ecosystem. OEMs, dealers, and suppliers are challenged to deliver seamless omnichannel experiences, manage complex vehicle lifecycles, and foster brand loyalty in a hyper-competitive market.</p>
                <p className="xl:text-[22px] text-[16px] font-normal leading-[19px] xl:leading-[30px] mt-[22px] xl:mt[48px] xl:w-[70%] w-[96%]"> Rialtes partners with leading automotive brands to navigate these disruptions, combining deep domain expertise with cutting-edge technologies like SAP, Salesforce Automotive Cloud, Marketing Cloud, Revenue Cloud, and more. With offices in the U.S., Canada, India, and Singapore, and certified automotive solution experts, we deliver end-to-end digital transformation — from lead capture to warranty service and beyond.</p>

            </section>

            {/* rialtes predelivered automative section */}
            <PreDeliveredSection />
            {/* learn more btn */}
            <section
                className="
          mt-[36px] xl:mt-[37px]
          md:mx-[100px] xl:mx-[280px]
          px-[36px] xl:px-[138px]
        ">

                <LearnMore />
            </section>

            <EndToEndAutomativeSection />
            {/* learn more btn */}
            <section
                className="
          mt-[-50px] xl:mt-[-50px]
          md:mx-[100px] xl:mx-[340px]
          mx-[40px]
        ">

                <LearnMore />
            </section>


            {/* comprehensive section */}
            <ComprehensiveCustomerSection />

            {/* personalized section */}
            <PersonalizingSection />
            {/* learn more btn */}
            <section
                className="
      relative z-10
      mt-[-50px] xl:mt-[-50px]
      md:mx-[100px] xl:mx-[340px]
      mx-[40px]
    "
            >
                <button className="xl:bg-[#134874] bg-[#006FBE] xl:text-[20px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] xl:border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6">
                    <Link href='/contact-us'>Learn More</Link>
                </button>
            </section>

            {/* revolutionizing sectin */}
            <RevolutionizingServiceSection />

            <IntegratingAutomativeSection />
            {/* Contact Form */}
            <div
                className="
              xl:container
              mx-[35px] xl:mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]
              text-black xl:py-20 pb-10"
            >
                <ContactForm title={'Accelerate Your Automotive Transformation with Rialtes'} className={"max-w-[62rem] xl:font-medium xl:text-[60px] text-[26px] xl:leading-[73px] leading-[32px]"} />
            </div >
        </>
    )
}