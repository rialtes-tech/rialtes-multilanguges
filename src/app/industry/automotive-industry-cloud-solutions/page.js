"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform"
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "../../components/learnMore";
import { HeroSection } from "@/app/components/herosection";

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
            <Seo
                title="Digital Transformation in Automotive Industry | Rialtes"
                description="Ready for digital transformation in automotive? Partner with Rialtes to revolutionize your automotive industry journey and fuel future growth."
                canonical="https://www.rialtes.com/industry/automotive-industry-cloud-solutions/"
            />
            {/* Mobile View */}
            <div className="block md:hidden">
                <Image
                    src="/images/industry/auto-industry/Mobile/thought-leadership-mob-img.webp"
                    alt="thought-leadership-mob-img"
                    className="w-full h-auto"
                    width={0}
                    height={0}
                    priority

                />
                <div className="border-none px-[35px] pt-[42px] z-10  xl:pb-[144px] pb-[57px]" style={{
                    background: "#073259",
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
                    <ul className="list-disc pl-[20px] text-[#FFFFFF] mt-[17px]">
                        {keyIndustryChallenges.map((element, index) => (
                            <li key={index} className="mt-[19px] text-[16px] leading-[19px]">
                                {element}
                            </li>
                        ))}
                    </ul>
                    <h4 className="text-[#FFFFFF] text-[16px] mt-[61px] leading-[19px] font-semibold">
                        Rialtes Solutions:
                    </h4>
                    <ul className="list-disc pl-[20px] text-[#FFFFFF]">
                        {rialtesSolutions.map((element, index) => (
                            <li key={index} className="mt-[19px] text-[16px] leading-[19px]">
                                {element}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block relative w-full h-[980px] lg:h-[900px] xl:h-[1500px] 2xl:h-[1450px] 3xl:h-[1300px]">
                <Image
                    src="/images/industry/auto-industry/thought-leadership-img.webp"
                    alt="thought-leadership-img"
                    className="w-full h-full object-cover"
                    width={0}
                    height={0}
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
                            <div className="relative z-10 h-full flex flex-col justify-center px-[26px] xl:px-[61px] overflow-y-auto">
                                <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px]">
                                    Thought Leadership
                                </h2>
                                <h3 className="text-[#FFFFFF] xl:text-[42px] text-[22px] font-semibold xl:mt-[35px] mt-[16px] leading-[27px] xl:leading-[52px] w-full">
                                    Addressing the Complex Challenges in the Automotive Sector
                                </h3>
                                <h4 className="text-[#FFFFFF] xl:text-[36px] text-[22px] font-semibold xl:mt-[20px] mt-[16px] leading-[27px] xl:leading-[44px]">
                                    Key Industry Challenges We Solve:
                                </h4>
                                <ul className="list-disc pl-[22px] text-[#FFFFFF] xl:mt-[23px] mt-[16px]">
                                    {keyIndustryChallenges.map((element, index) => (
                                        <li key={index} className="mt-[19px] xl:text-[20px] text-[15px] xl:leading-[24px] leading-[19px]">
                                            {element}
                                        </li>
                                    ))}
                                </ul>
                                <h4 className="text-[#FFFFFF] xl:text-[36px] text-[22px] font-light xl:mt-[38px] mt-[16px] leading-[27px] xl:leading-[44px]">
                                    Rialtes Solutions:
                                </h4>
                                <ul className="list-disc pl-[22px] text-[#FFFFFF] xl:mt-[26px] mt-[16px]">
                                    {rialtesSolutions.map((element, index) => (
                                        <li key={index} className="mt-[19px] xl:text-[20px] text-[15px] xl:leading-[24px] leading-[19px]">
                                            {element}
                                        </li>
                                    ))}
                                </ul>
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
        <section className="relative mt-[60px] md:mt-0">
            {/* Background image layer */}
            <div
                className="
      absolute inset-0 xl:w-[94%] mx-auto
      bg-[url('/images/industry/auto-industry/Mobile/predelivered-mob-img.webp')]
      md:bg-[url('/images/industry/auto-industry/Mobile/predelivered-mob-img.webp')]
      xl:bg-[url('/images/industry/auto-industry/predelivered-img.webp')]
      bg-no-repeat bg-cover
      z-0" style={{ backgroundSize: "100% 100%" }}></div>

            <div className="relative z-10 pt-[64px] xl:pt-[82px] max-[421px]:h-[1120px] h-[900px] sm:h-[760px] md:h-full">

                <div className="custom-container">
                    <h2 className="text-white xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light xl:w-[70%]">
                        Rialtes Pre-Delivered Automotive Accelerators
                    </h2>

                    <h3 className="text-white xl:text-[42px] text-[22px] leading-[27px] xl:leading-[52px] font-semibold xl:mt-[49px] mt-[21px]">
                        Fast-Tracking Success
                    </h3>

                    <p className="text-white xl:text-[22px] text-[16px] leading-[19px] xl:leading-[30px] font-light xl:mt-[35px] mt-[21px] xl:w-[80%] w-[80%]">
                        Our proprietary accelerators are designed to streamline and future-proof automotive operations:
                    </p>
                </div>

                <div className="md:relative z-10 custom-container md:bottom-[-200px] absolute mt-[34px]">
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-12">
                        {predeliveredCardData.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#707070] pt-[33px] xl:pt-[65px] pb-[47px] xl:pb-[36px] xl:px-[46px] px-[33px]"
                            >
                                <h4 className="text-[#006FBE] xl:text-[30px] text-[20px] font-semibold leading-[24px] xl:leading-[37px] w-[90%]">
                                    {card.title}
                                </h4>
                                <p className="text-black xl:text-[24px] text-[16px] leading-[19px] xl:leading-[29px] font-normal mt-[21px] xl:mt-[33px]">
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
        <section
            className="lg:mt-[263px] md:mt-[282px] mt-[20rem] max-[421px]:mt-[22rem] custom-container lg:pr-0 max-lg:!px-0 relative"
        >
            <div className=" xl:pt-[67px] pt-[42px] xl:pb-[99px] pb-[89px] border border-[#707070] lg:pl-[40px] max-lg:px-[36px]">
                <h2 className="text-[#000000] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-Light">
                    End-to-End Automotive Buyer Journey
                </h2>

                <h3 className="text-[#030303] xl:text-[42px] text-[22px] leading-[27px] xl:leading-[52px] font-semibold xl:mt-[33px] mt-[17px]">
                    Seamless from First Click to Final Delivery
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-[56px] gap-[82px] xl:mt-[63px] mt-[32px] 3xl:pr-[280px] 2xl:pr-[140px] xl:pr-[80px] lg:pr-[48px]">
                    {endtoendautomativesection.map((section, index) => (
                        <div
                            key={index}
                            className={`${index === 1 ? "lg:mt-[179px]" : "lg:mt[63px]"}`}
                        >
                            {/* Mobile Image */}
                            <Image
                                src={section.imgUrlMobile}
                                alt={section.title}
                                className="block lg:hidden mb-4"
                                width={0}
                                height={0}
                                priority
                            />
                            {/* Desktop Image */}
                            <Image
                                src={section.imgUrlDesktop}
                                alt={section.title}
                                className="hidden lg:block mb-4"
                                width={0}
                                height={0}
                                priority
                            />

                            <h4 className="mt-[29px] xl:mt-[63px] xl:text-[36px] xl:font-semibold font-medium text-[20px] xl:leading-[44px] leading-[24px]">{section.title}</h4>

                            <ul className="list-disc xl:mt-[13px] mt-[6px] pl-[22px]">
                                {section.list.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="mt-[19px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] w-[90%]"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
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
                width={0}
                height={0}
                priority
            />

            {/* Desktop Image */}
            <div className="3xl:h-full xl:h-[700px]">
                <Image
                    src="/images/industry/auto-industry/comprehensive-customer-img.webp"
                    alt="Customer Journey Desktop"
                    className="hidden md:block w-full h-full object-cover"
                    width={0}
                    height={0}
                    priority
                />
            </div>

            <div className="absolute inset-0 ">
                <div className="custom-container">
                    <div className="relative xl:w-[61%] 2xl:w-[55%] max-[420px]:w-[87%] w-[68%] md:w-[40%]">

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
                            <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                                Comprehensive Customer Service Journey
                            </h2>
                            <h3 className="text-[#FFFFFF] xl:text-[42px] text-[22px] font-semibold xl:mt-[39px] mt-[23px] leading-[27px] xl:leading-[52px]">
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
                            <h4 className="xl:text-[36px] font-semibold text-[20px] xl:leading-[44px] leading-[24px]">
                                {section.title}
                            </h4>

                            <ul className="list-disc pl-[22px] xl:mt-[21px]">
                                {section.list.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="mt-[19px] xl:mt-[19px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px]"
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
        "Behavioral and transactional triggers for targeted campaigns (e.g., lease end, service reminders).",
        "Dealer-specific campaigns and co-branded marketing programs."
    ];

    return (
        <section className="relative h-full xl:mt-[96px] mt-[91px] custom-container md:pr-0 max-md:px-0">

            <div className="flex items-start justify-start xl:pt-[64px] pt-[38px] xl:pb-[104px] pb-[73px] bg-[url('/images/industry/auto-industry/Mobile/personalizing-mob-img.webp')]
    md:bg-[url('/images/industry/auto-industry/personalizing-img.webp')]
    bg-no-repeat bg-cover ">
                <div className="relative md:pl-[76px] 2xl:w-[60%] xl:w-[80%] lg:w-[60%] md:w-[70%] sm:w-[80%] max-md:px-[36px]">
                    <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light 2xl:w-[80%] lg:w-[80%]">
                        Personalizing the Automotive Experience
                    </h2>

                    <h3 className="text-[#FFFFFF] xl:text-[42px] text-[22px] leading-[27px] xl:leading-[52px] font-semibold xl:mt-[23px] mt-[20px] lg:w-[80%] 2xl:w-[90%]">
                        Salesforce Marketing Cloud + Automotive Cloud
                    </h3>

                    <ul className="list-disc pl-[22px] xl:w-[70%] mt-[11px] xl:mt-[39px] lg:w-[80%]">
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
            <div className="mt-[78px] xl:mt-[89px]">
                {/* Mobile Image */}
                <Image
                    src="/images/industry/auto-industry/Mobile/revolutionizing-service-mob-img.webp"
                    alt="revolutionizing-service-img"
                    className="block md:hidden w-full"
                    width={0}
                    height={0}
                    priority
                />

                {/* Desktop Image */}
                <Image
                    src="/images/industry/auto-industry/revolutionizing-service-img.webp"
                    alt="revolutionizing-service-img"
                    className="hidden md:block w-full h-full object-cover"
                    width={0}
                    height={0}
                    priority
                />
            </div>
            <div className="custom-container">
                <div className="xl:pl-[72px] px-[31px] lg:mt-[-200px] mt-[-30px] xl:pt-[56px] pt-[32px] xl:pb-[0px] pb-[60px] bg-[#073259] relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-[71px] gap-[20px]">
                        {/* Left Column */}
                        <div>
                            <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                                Revolutionizing Service Operations
                            </h2>
                            <h3 className="text-[#FFFFFF] font-semibold xl:text-[42px] text-[20px] leading-[24px] xl:leading-[52px] mt-[13px] xl:mt-[22px]">
                                Salesforce Service Cloud
                            </h3>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col">
                            <ul className="list-disc pl-[22px] xl:w-[96%] 2xl:w-[90%] xl:mt-[20px]">
                                {revolutionizingData.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="text-[#FFFFFF] mt-[19px] first:mt-0 xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px]">
                                        {item}
                                    </li>

                                ))}
                            </ul>

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
            </div></>

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
                            className="h-auto max-w-full object-cover"
                            width={0}
                            height={0}
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
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                </div>


                <div className="md:ml-[-220px] xl:ml-[-200px] relative z-0 bg-[#A16B4D] flex flex-col md:pl-[240px] xl:pl-[260px] md:pr-[55px] 2xl:pr-[75px] px-[35px] xl:pt-[94px] md:pt-[44px] pb-0 h-auto md:h-full md:min-h-full min-h-[810px] sm:min-h-[820px] max-[460px]:min-h-[800px]">
                    <div className="max-md:absolute bottom-0">
                        <div className="max-md:pr-[36px]">
                            <h2 className="text-white xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                                Enabling Dynamic Pricing & Configuration
                            </h2>
                            <h3 className="text-white font-semibold xl:text-[42px] text-[20px] leading-[24px] xl:leading-[52px] mt-[18px] xl:mt-[39px] w-[80%]">
                                Salesforce Revenue Cloud for CPQ
                            </h3>

                            <ul className="list-disc pl-[22px] xl:mt-[30px] mt-[23px] xl:mb-[74px] mb:[42px]">
                                {enablingDynamicData.map((data, idx) => (
                                    <li
                                        key={idx}
                                        className="text-white first:mt-0 mt-[19px] xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] font-light"
                                    >
                                        {data}
                                    </li>
                                ))}
                            </ul>

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
                            className="block md:hidden h-full object-cover"
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                    {/* Desktop Image */}
                    <Image
                        src="/images/industry/auto-industry/dealer-buyer-img.webp"
                        alt="dealer-buyer-img"
                        className="hidden md:block w-full h-[80%] lg:h-[90%] object-cover"
                        width={0}
                        height={0}
                        priority
                    />
                </div>


                <div className="w-full relative md:-mr-[180px] z-0 bg-[#3B4E59] flex flex-col md:pl-[30px] lg:pl-[50px] md:pr-[194px] lg:pr-[204px] px-[35px] xl:pt-[104px] md:pt-[54px] pb-0h-auto md:h-full md:min-h-full min-h-[810px] sm:min-h-[820px] max-[460px]:min-h-[800px]">
                    <div className="max-md:absolute max-md:bottom-0 pr-[36px]">
                        <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                            Dealer and Buyer Portal
                        </h2>
                        <h3 className="text-[#FFFFFF] font-semibold xl:text-[42px] text-[20px] leading-[24px] xl:leading-[52px] mt-[19px] xl:mt-[28px]">
                            Salesforce Experience Cloud
                        </h3>

                        <ul className="list-disc pl-[22px] 2xl:w-[70%] xl:mt-[40px] mt-[28px]">
                            {enablingDynamicData.map((data, idx) => (
                                <li
                                    key={idx}
                                    className="text-[#FFFFFF] mt-[19px] first:mt-0  xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] font-light"
                                >
                                    {data}
                                </li>
                            ))}
                        </ul>

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
                            className="h-auto max-w-full object-cover"
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                    {/* Desktop Image */}
                    <div className="absolute h-[80%] w-full hidden md:block">
                        <Image
                            src="/images/industry/auto-industry/empowering-dealers-img.webp"
                            alt="empowering-dealers-img"
                            className="w-full object-cover h-full"
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                </div>

                <div className="md:ml-[-220px] xl:ml-[-200px] relative z-0 bg-[#4087C7] flex flex-col md:pl-[240px] xl:pl-[260px] md:pr-[55px] 2xl:pr-[75px] px-[35px] xl:pt-[94px] md:pt-[44px] pb-0 h-auto md:h-full md:min-h-full min-h-[810px] sm:min-h-[820px] max-[460px]:min-h-[800px]">
                    <div className="max-md:absolute bottom-0">
                        <div className="max-md:pr-[36px]">
                            <h2 className="text-white 2xl:text-[60px] xl:text-[54px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                                Empowering Dealers & Agents
                            </h2>
                            <h3 className="text-white font-semibold xl:text-[42px] text-[20px] leading-[24px] xl:leading-[52px] mt-[18px] xl:mt-[39px] w-[80%] w-[80%]">
                                Agentforce in Automotive Cloud
                            </h3>

                            <ul className="list-disc pl-[22px] xl:mt-[40px] mt-[23px]">
                                {enablingDynamicData.map((data, idx) => (
                                    <li
                                        key={idx}
                                        className="text-white mt-[19px] first:mt-0 xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] font-light"
                                    >
                                        {data}
                                    </li>
                                ))}
                            </ul>

                            {/* <div className="mt-auto xl:mt-[70px] xl:mb-[70px] mb-0"> */}
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
                            className="block md:hidden h-full object-cover"
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                    {/* Desktop Image */}
                    <Image
                        src="/images/industry/auto-industry/unlocking-data-img.webp"
                        alt="unlocking-data-img"
                        className="hidden md:block w-full h-[80%] lg:h-[90%] object-cover"
                        width={0}
                        height={0}
                        priority
                    />
                </div>

                <div className="w-full relative md:-mr-[180px] z-0 bg-[#3B4E59] flex flex-col md:pl-[30px] lg:pl-[50px] md:pr-[194px] lg:pr-[204px] px-[35px] xl:pt-[104px] md:pt-[54px] pb-0h-auto md:h-full md:min-h-full min-h-[810px] sm:min-h-[820px] max-[460px]:min-h-[800px]">
                    <div className="max-md:absolute max-md:bottom-0 pr-[36px]">

                        <h2 className="text-white xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                            Unlocking Data-Driven Success
                        </h2>
                        <h3 className="text-white font-semibold xl:text-[42px] text-[20px] leading-[24px] xl:leading-[52px] mt-[18px] xl:mt-[39px]">
                            Salesforce Data Cloud for Automotive
                        </h3>

                        <ul className="list-disc pl-[22px] 2xl:w-[70%] mt-[23px] xl:mt-[38px]">
                            {unlockingData.map((data, idx) => (
                                <li
                                    key={idx}
                                    className="text-white mt-[19px] first:mt-0 xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] font-light"
                                >
                                    {data}
                                </li>
                            ))}
                        </ul>

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
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                <div className="sm:mx-[100px] mx-[40px] absolute bottom-0 left-0 right-0 bg-[rgba(0,111,190,0.8)] px-[22px] pt-[32px]">
                    <h2 className="text-[#FFFFFF] text-[26px] leading-[32px] font-light">
                        Integrating the Automotive Stack
                    </h2>
                    <h3 className="text-[#FFFFFF] text-[22px] font-semibold mt-[16px] leading-[27px] w-[90%]">
                        SAP CPI and BTP Expertise
                    </h3>

                    <ul className="list-disc pl-[22px] text-[#FFFFFF] mt-[16px]">
                        {integratingAutomativeData.map((element, index) => (
                            <li
                                key={index}
                                className="mt-[19px] first:mt-0 text-[16px] leading-[19px]"
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

            {/* Desktop View */}
            <div className="2xl:h-[900px] xl:h-[1000px] md:h-[700px]">
                <Image
                    src="/images/industry/auto-industry/integrating-automative-img.webp"
                    alt="integrating-automative-img"
                    className="hidden md:block w-full h-full object-cover"
                    width={0}
                    height={0}
                    priority
                />
            </div>

            <div className="hidden md:flex absolute inset-0 items-start justify-start">
                <div className="custom-container">
                    <div className="relative 2xl:w-[60%] w-[55%] xl:w-[66%]">
                        <div
                            className="absolute inset-0 z-0 pointer-events-none"
                            style={{
                                background: "rgba(0, 111, 190, 0.8)",
                                borderRadius: "inherit",
                            }}
                        />
                        <div className="relative z-10 xl:pt-[70px] pt-[32px] xl:pb-[55px] pb-[27px] px-[26px] xl:px-[61px]">
                            <h2 className="text-[#FFFFFF] xl:text-[54px] 2xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                                Integrating the Automotive Stack
                            </h2>
                            <h3 className="text-[#FFFFFF] xl:text-[42px] text-[22px] font-semibold xl:mt-[38px] mt-[16px] leading-[27px] xl:leading-[52px]">
                                SAP CPI and BTP Expertise
                            </h3>

                            <ul className="list-disc pl-[22px] text-[#FFFFFF] xl:mt-[40px] mt-[16px]">
                                {integratingAutomativeData.map((element, index) => (
                                    <li
                                        key={index}
                                        className="mt-[19px] first:mt-0 xl:text-[20px] text-[15px] xl:leading-[24px] leading-[19px] font-light"
                                    >
                                        {element}
                                    </li>
                                ))}
                            </ul>

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
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                <div className="sm:mx-[100px] mx-[40px] absolute bottom-0 left-0 right-0 bg-[rgba(255,255,255,0.8)] px-[14px] pt-[32px] z-10">
                    <h2 className="text-[#000000] text-[26px] leading-[32px]">
                        Rialtes Partnering Power
                    </h2>
                    <h3 className="text-[#0B0B0B] text-[22px] font-semibold xl:mt-[18px] mt-[16px] leading-[27px]">
                        SAP and Salesforce Expertise in One
                    </h3>
                    <p className="text-[#000000] text-[16px] mt-[16px] leading-[19px] font-normal">
                        With deep alliances with SAP and Salesforce, Rialtes delivers the most comprehensive, agile, and future-ready automotive solutions on the market. Our experts hold certifications in:
                    </p>
                    <ul className="list-disc pl-[20px] text-[#000000] mt-[45px]">
                        {partenringPowerData.map((element, index) => (
                            <li key={index} className="mt-[19px] first:mt-0 text-[16px] leading-[19px]">
                                {element}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-[33px]">
                        <LearnMore />
                    </div>
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block relative w-full h-full">
                {/* Image container with controlled height */}
                <div className="relative w-full md:h-[570px] lg:h-[500px] xl:h-[810px] 2xl:h-[794px] 3xl:h-[680px]">
                    <Image
                        src="/images/industry/auto-industry/partnering-power-img.webp"
                        alt="partnering-power-img"
                        className="w-full h-full object-cover"
                        width={0}
                        height={0}
                        priority
                    />

                    <div className="absolute inset-0">
                        <div className="custom-container w-full h-full flex items-start justify-end">

                            <div className="relative bg-white h-full xl:pt-[66px] pt-[32px] px-[26px] xl:px-[61px] md:w-[55%] w-full">
                                <h2 className="text-[#000000] xl:text-[56px] 2xl:text-[58px] text-[26px] leading-[32px] xl:leading-[73px]">
                                    Rialtes Partnering Power
                                </h2>
                                <h3 className="text-[#0B0B0B] xl:text-[42px] text-[22px] font-semibold xl:mt-[18px] mt-[16px] leading-[27px] xl:leading-[52px]">
                                    SAP and Salesforce Expertise in One
                                </h3>
                                <p className="text-[#000000] xl:text-[20px] text-[20px] font-light xl:mt-[11px] mt-[16px] leading-[27px] xl:leading-[24px]">
                                    With deep alliances with SAP and Salesforce, Rialtes delivers the most comprehensive, agile, and future-ready automotive solutions on the market. Our experts hold certifications in:
                                </p>
                                <ul className="list-disc pl-[22px] text-[#000000] xl:mt-[26px] mt-[16px]">
                                    {partenringPowerData.map((element, index) => (
                                        <li key={index} className="mt-[19px] xl:text-[20px] text-[15px] xl:leading-[24px] leading-[19px]">
                                            {element}
                                        </li>
                                    ))}
                                </ul>
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
                className={`
           xl:pl-[61px] px-[35px] xl:mt-[94px] mt-[63px] xl:pt-[129px] pt-[49px] xl:pb-[160px] pb-[59px] 
          bg-[url('/images/industry/auto-industry/Mobile/related-solutions-mob-img.webp')] bg-cover bg-center
          md:bg-[url('/images/industry/auto-industry/related-solutions-img.webp')] md:bg-cover md:bg-center
        `}
            >
                <h2 className="xl:text-[60px] text-[26px] font-light leading-[32px] xl:leading-[73px] text-[#FFFFFF]">
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
                            paddingClass = 'xl:px-[40px]'; // Others: left + right
                        }

                        return (
                            <div
                                key={index}
                                className={`
      flex xl:flex-col xl:justify-between 
      md:w-[80%] xl:w-full 
      ${borderRight} ${borderBottom} ${paddingClass} 
      h-full
    `}
                            >
                                <div className="flex flex-col flex-1 xl:min-h-[300px]">
                                    <h4 className="text-white xl:text-[30px] text-[18px] xl:font-semibold font-medium leading-[24px] xl:leading-[37px]">
                                        {item.title}
                                    </h4>
                                    <p className="text-white xl:text-[20px] text-[16px] font-light leading-[19px] xl:leading-[24px] xl:mt-[18px] mt-[18px] xl:w-[80%]">
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
            {/* hero section */}
            <HeroSection title="Driving Digital Transformation from Showroom to Service Bay" subtitle="Automotive Industry Solutions" mobimg="/images/industry/auto-industry/Mobile/auto-industry-banner-mob.webp" deskimg="/images/industry/auto-industry/auto-industry-banner.webp" />

            {/* powering next gen section */}

            <section className="custom-container xl:mt-[112px] mt-[62px]">
                <h2 className="xl:text-[60px] text-[26px] font-Light leading-[32px] xl:leading-[73px] xl:w-[95%] 2xl:w-[86%]">Powering the Next-Generation Automotive Ecosystem with Rialtes</h2>
                <div className="mt-[22px] xl:mt-[48px]">
                    <p className="xl:text-[22px] text-[16px] font-normal leading-[19px] xl:leading-[30px] xl:w-[78%] w-[96%]">The automotive industry is in the midst of a seismic shift — from traditional dealer-centric models to a connected, customer-first mobility ecosystem. OEMs, dealers, and suppliers are challenged to deliver seamless omnichannel experiences, manage complex vehicle lifecycles, and foster brand loyalty in a hyper-competitive market.</p>
                    <p className="xl:text-[22px] text-[16px] font-normal leading-[19px] xl:leading-[30px] mt-[22px] xl:mt[48px] xl:w-[78%] w-[96%]"> Rialtes partners with leading automotive brands to navigate these disruptions, combining deep domain expertise with cutting-edge technologies like SAP, Salesforce Automotive Cloud, Marketing Cloud, Revenue Cloud, and more. With offices in the U.S., Canada, India, and Singapore, and certified automotive solution experts, we deliver end-to-end digital transformation — from lead capture to warranty service and beyond.</p>
                </div>
            </section>

            <ThoughtLeadershipSection />

            {/* rialtes predelivered automative section */}
            <PreDeliveredSection />
            <EndToEndAutomativeSection />
            {/* comprehensive section */}
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
            <div
                className="custom-container pb-10"
            >
                <ContactForm title={'Ready to Transform Your Automotive Customer Experience?'} className={"max-w-[66rem] xl:font-normal xl:text-[60px] text-[26px] xl:leading-[73px] leading-[32px] mt-[52px] xl:mt-[89px]"} />
            </div >
        </>
    )
}