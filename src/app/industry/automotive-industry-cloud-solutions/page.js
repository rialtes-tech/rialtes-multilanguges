"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform"
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "../../components/learnMore";

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
                title="Automotive Industry Cloud Solutions | Rialtes"
                description="From AI to real-time analytics, automotive industry cloud solutions are redefining how auto brands innovate. Discover what’s next in cloud-powered mobility."
                canonical="https://www.rialtes.com/industry/automotive-industry-cloud-solutions/"
            />
            {/* Mobile View */}
            <div className="block md:hidden">
                <img
                    src="/images/industry/auto-industry/Mobile/thought-leadership-mob-img.webp"
                    alt="thought-leadership-mob-img"
                    className="w-full h-auto"
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
            <div className="hidden md:block relative w-full h-[800px] xl:h-[1300px]">
                <img
                    src="/images/industry/auto-industry/thought-leadership-img.webp"
                    alt="thought-leadership-img"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-end">
                    <div className="relative mx-[32px] xl:ml-0 xl:mr-[280px] xl:w-[40%] md:mr-[100px] w-[90%] lg:w-[80%] h-full">
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

        <>
            <section
                className="
          mt-[60px] xl:mt-[0px]
          md:mx-[100px] xl:ml-[280px] xl:mr-[190px]
          bg-[url('/images/industry/auto-industry/Mobile/predelivered-mob-img.webp')]
          md:bg-[url('/images/industry/auto-industry/Mobile/predelivered-mob-img.webp')]
          xl:bg-[url('/images/industry/auto-industry/predelivered-img.webp')]
          bg-no-repeat bg-cover bg-center
          pt-[64px] xl:pt-[82px]
          px-[36px] xl:px-[80px] relative
          xl:h-[840px] h-[1000px]"  style={{ backgroundSize: "100% 100%" }}
            >
                <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light xl:w-[70%]">
                    Rialtes Pre-Delivered Automotive Accelerators
                </h2>

                <h3 className="text-[#FFFFFF] xl:text-[42px] text-[22px] leading-[27px] xl:leading-[52px] font-semibold xl:mt-[49px] mt-[21px]">
                    Fast-Tracking Success
                </h3>

                <p className="text-[#FFFFFF] xl:text-[22px] text-[16px] leading-[19px] xl:leading-[30px] font-light xl:mt-[35px] mt-[21px] xl:w-[80%] w-[80%]">
                    Our proprietary accelerators are designed to streamline and future-proof automotive operations:
                </p>
            </section>

            <div className="-mt-[163%] md:-mt-[180px] xl:-mt-[300px] md:mx-[100px] xl:ml-[190px] relative z-10 mx-[35px]">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 xl:gap-12 max-w-[1280px] mx-auto">
                    {predeliveredCardData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#FFFFFF] border border-[#707070] pt-[33px] xl:pt-[65px] pb-[47px] xl:pb-[36px] xl:px-[46px] px-[33px]"
                        >
                            <h4 className="text-[#006FBE] xl:text-[30px] text-[20px] font-semibold leading-[24px] xl:leading-[37px] w-[90%]">
                                {card.title}
                            </h4>
                            <p className="text-[#000000] xl:text-[24px] text-[16px] leading-[19px] xl:leading-[29px] font-normal mt-[21px] xl:mt-[33px]">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </>

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
            className="xl:mt-[99px] mt-[84px] mx-[1px] xl:mr-0
          xl:ml-[280px] xl:w-[calc(100%-280px)]
          md:ml-[100px] md:w-[calc(100%-100px)]
          xl:pt-[67px] pt-[42px] border border-[#707070] px-[35px] xl:pl-[56px] xl:pb-[99px] pb-[89px]"
        >
            <h2 className="text-[#000000] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-Light">
                End-to-End Automotive Buyer Journey
            </h2>

            <h3 className="text-[#030303] xl:text-[42px] text-[22px] leading-[27px] xl:leading-[52px] font-semibold xl:mt-[33px] mt-[17px]">
                Seamless from First Click to Final Delivery
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-[56px] gap-[82px] xl:mt-[63px] mt-[32px] xl:w-[86%]">
                {endtoendautomativesection.map((section, index) => (
                    <div
                        key={index}
                        className={`${index === 1 ? "xl:mt-[179px]" : "xl:mt[63px]"}`}
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
                        <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                            Comprehensive Customer Service Journey
                        </h2>
                        <h3 className="text-[#FFFFFF] xl:text-[42px] text-[22px] font-semibold xl:mt-[39px] mt-[23px] leading-[27px] xl:leading-[52px]">
                            From Ownership to Loyalty
                        </h3>
                    </div>
                </div>
            </div>

            <div
                className="xl:mx-[210px] md:mx-[100px] xl:pl-[70px] mx-[35px] xl:mt-[64px] mt-[33px]"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-x-[87px] gap-y-[58px]">
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
        <section className="relative xl:mt-[96px] mt-[91px] xl:mr-0
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
                className="hidden md:block w-full h-[773px]"
            />

            <div className="absolute inset-0 flex items-start justify-start xl:mt-[64px] mt-[38px]">
                <div className="relative mx-[32px] xl:mr-0 xl:ml-[76px] xl:w-[50%]">
                    <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                        Personalizing the Automotive Experience
                    </h2>

                    <h3 className="text-[#FFFFFF] xl:text-[42px] text-[22px] leading-[27px] xl:leading-[52px] font-semibold xl:mt-[23px] mt-[20px]">
                        Salesforce Marketing Cloud + Automotive Cloud
                    </h3>

                    <ul className="list-disc pl-[22px] xl:w-[70%] mt-[11px] xl:mt-[39px]">
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
            <div className="xl:ml-[270px] xl:mr-[170px] md:mx-[100px] xl:pl-[72px] px-[31px] mx-[35px] xl:mt-[-200px] mt-[-30px] xl:pt-[56px] pt-[32px] xl:pb-[0px] pb-[60px] bg-[#073259] relative">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-[71px] gap-[20px]">
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
                        <ul className="list-disc pl-[22px] xl:w-[70%] xl:mt-[20px]">
                            {revolutionizingData.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="text-[#FFFFFF] mt-[19px] first:mt-0 xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px]">
                                    {item}
                                </li>

                            ))}
                        </ul>

                        {/* Button only visible on desktop inside the box */}
                        <div className="hidden md:block mt-[56px] xl:ml-1 ">
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
            <div className="block md:hidden xl:mx-[212px] md:mx-[100px] xl:pl-[70px] ml-[35px] -mt-[26px] absolute z-10">
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
        <section className="relative xl:mt-[36px] mt-[126px] mx-0 xl:ml-0 xl:mr-[100px] xl:w-full md:ml-[100px] md:w-[calc(100%-100px)]">
            <div className="flex flex-col xl:flex-row relative">
                {/* Image Side */}
                <div className="w-full xl:w-[45%] relative z-10 px-[35px] xl:px-0 xl:flex xl:items-center">
                    {/* Mobile Image - overlapping on content */}
                    <img
                        src="/images/industry/auto-industry/Mobile/enabling-dynamic-mob-img.webp"
                        alt="enabling-dynamic-img-mobile"
                        className="block xl:hidden w-[calc(100%-70px)] h-auto object-cover absolute top-[-60px] left-[35px] z-20"
                    />
                    {/* Desktop Image */}
                    <img
                        src="/images/industry/auto-industry/enabling-dyanamic-img.webp"
                        alt="enabling-dynamic-img-desktop"
                        className="hidden xl:block w-full h-[90%] object-cover"
                    />
                </div>

                {/* Content Side */}
                <div className="w-full xl:w-[60%] relative xl:-ml-[200px] z-0 bg-[#A16B4D] flex flex-col xl:pl-[260px] xl:pr-[75px] px-[35px] pt-[386px] xl:pt-[104px] pb-0 xl:min-h-[700px] min-h-[600px]">
                    <h2 className="text-white xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                        Enabling Dynamic Pricing & Configuration
                    </h2>
                    <h3 className="text-white font-semibold xl:text-[42px] text-[20px] leading-[24px] xl:leading-[52px] mt-[18px] xl:mt-[39px] w-[80%]">
                        Salesforce Revenue Cloud for CPQ
                    </h3>

                    <ul className="list-disc pl-[22px] xl:w-[70%] xl:mt-[30px] mt-[23px] xl:mb-[74px] mb:[42px]">
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
        <section className="relative xl:mt-[42px] mt-[126px] mx-0 xl:ml-0 xl:mr-[100px] xl:w-full md:ml-[100px] md:w-[calc(100%-100px)]">
            <div className="flex flex-col xl:flex-row-reverse relative">
                {/* Image Side */}
                <div className="w-full xl:w-[45%] relative z-10 px-[35px] xl:px-0 xl:flex xl:items-center">
                    {/* Mobile Image - overlapping on content */}
                    <img
                        src="/images/industry/auto-industry/Mobile/dealer-buyer-mob-img.webp"
                        alt="dealer-buyer-mob-img"
                        className="block xl:hidden w-[calc(100%-70px)] h-auto object-cover absolute top-[-60px] left-[35px] z-20"
                    />
                    {/* Desktop Image */}
                    <img
                        src="/images/industry/auto-industry/dealer-buyer-img.webp"
                        alt="dealer-buyer-img"
                        className="hidden xl:block w-full h-[90%] object-cover"
                    />
                </div>

                {/* Content Side */}
                <div className="w-full xl:w-[51.5%] relative xl:-mr-[200px] z-0 bg-[#3B4E59] flex flex-col xl:pl-[50px] xl:pr-[214px] px-[35px] pt-[380px] xl:pt-[104px] pb-0 xl:min-h-[700px] min-h-[600px]">
                    <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                        Dealer and Buyer Portal
                    </h2>
                    <h3 className="text-[#FFFFFF] font-semibold xl:text-[42px] text-[20px] leading-[24px] xl:leading-[52px] mt-[19px] xl:mt-[28px]">
                        Salesforce Experience Cloud
                    </h3>

                    <ul className="list-disc pl-[22px] xl:w-[70%] xl:mt-[40px] mt-[28px]">
                        {enablingDynamicData.map((data, idx) => (
                            <li
                                key={idx}
                                className="text-[#FFFFFF] mt-[19px] first:mt-0  xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] font-light"
                            >
                                {data}
                            </li>
                        ))}
                    </ul>

                    {/* <div className="mt-auto xl:mt-[48px] xl:mb-[94px] mb-0"> */}
                    <div className="mt-[20px] xl:mt-[48px] xl:mb-[94px] ">

                        <Link href='/contact-us'>
                            <button className="xl:bg-[#006FBE] bg-[#006FBE] xl:text-[20px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] xl:border-[1px] border-[solid] border-[#006FBE] font-semibold text-white py-3 px-8 transition duration-300 order-4 mt-6">
                                Learn More
                            </button>
                        </Link>
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
        <section className="relative xl:mt-[57px] mt-[126px] mx-0 xl:ml-0 xl:mr-[100px] xl:w-full md:ml-[100px] md:w-[calc(100%-100px)]">
            <div className="flex flex-col xl:flex-row relative">
                {/* Image Side */}
                <div className="w-full xl:w-[45%] relative z-10 px-[35px] xl:px-0 xl:flex xl:items-center">
                    {/* Mobile Image - overlapping on content */}
                    <img
                        src="/images/industry/auto-industry/Mobile/empowering-dealers-mob-img.webp"
                        alt="empowering-dealers-mob-img"
                        className="block xl:hidden w-[calc(100%-70px)] h-auto object-cover absolute top-[-60px] left-[35px] z-20"
                    />
                    {/* Desktop Image */}
                    <img
                        src="/images/industry/auto-industry/empowering-dealers-img.webp"
                        alt="empowering-dealers-img"
                        className="hidden xl:block w-full h-[90%] object-cover"
                    />
                </div>

                {/* Content Side */}
                <div className="w-full xl:w-[60%] relative xl:-ml-[200px] z-0 bg-[#4087C7] flex flex-col xl:pl-[260px] xl:pr-[75px] px-[35px] pt-[380px] xl:pt-[104px] pb-0 xl:min-h-[700px] min-h-[600px]">
                    <h2 className="text-white xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                        Empowering Dealers & Agents
                    </h2>
                    <h3 className="text-white font-semibold xl:text-[42px] text-[20px] leading-[24px] xl:leading-[52px] mt-[18px] xl:mt-[39px] w-[80%] xl:w-full">
                        Agentforce in Automotive Cloud
                    </h3>

                    <ul className="list-disc pl-[22px] w-[90%] xl:w-[70%] xl:mt-[40px] mt-[23px]">
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
        <section className="relative xl:mt-[64px] mt-[126px] mx-0 xl:ml-0 xl:mr-[100px] xl:w-full md:ml-[100px] md:w-[calc(100%-100px)]">
            <div className="flex flex-col xl:flex-row-reverse relative">
                {/* Image Side */}
                <div className="w-full xl:w-[45%] relative z-10 px-[35px] xl:px-0 xl:flex xl:items-center">
                    {/* Mobile Image - overlapping on content */}
                    <img
                        src="/images/industry/auto-industry/Mobile/unlocking-data-mob-img.webp"
                        alt="unlocking-data-mob-img"
                        className="block xl:hidden w-[calc(100%-70px)] h-auto object-cover absolute top-[-60px] left-[35px] z-20"
                    />
                    {/* Desktop Image */}
                    <img
                        src="/images/industry/auto-industry/unlocking-data-img.webp"
                        alt="unlocking-data-img"
                        className="hidden xl:block w-full h-[90%] object-cover"
                    />
                </div>

                {/* Content Side */}
                <div className="w-full xl:w-[51%] relative xl:-mr-[200px] z-0 xl:bg-[#3B4E59] bg-[#444A55] flex flex-col xl:pl-[50px] xl:pr-[213px] px-[35px] pt-[380px] xl:pt-[104px] pb-0 xl:min-h-[700px] min-h-[600px]">
                    <h2 className="text-white xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                        Unlocking Data-Driven Success
                    </h2>
                    <h3 className="text-white font-semibold xl:text-[42px] text-[20px] leading-[24px] xl:leading-[52px] mt-[18px] xl:mt-[39px]">
                        Salesforce Data Cloud for Automotive
                    </h3>

                    <ul className="list-disc pl-[22px] xl:w-[90%] mt-[23px] xl:mt-[38px]">
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
                <img
                    src="/images/industry/auto-industry/Mobile/integrating-automative-mob-img.webp"
                    alt="integrating-automative-mob-img"
                    className="w-full h-auto"
                />
                <div className="mx-[30px] absolute bottom-0 left-0 right-0 bg-[rgba(0,111,190,0.8)] px-[22px] pt-[32px]">
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
                        <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
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
            <div className="relative block md:hidden">
                <img
                    src="/images/industry/auto-industry/Mobile/partnering-power-mob-img.webp"
                    alt="partnering-power-mob-img"
                    className="w-full h-auto"
                />
                <div className="mx-[30px] absolute bottom-0 left-0 right-0 bg-[rgba(255,255,255,0.8)] px-[14px] pt-[32px] z-10">
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
            <div className="hidden md:block relative w-full xl:h-[71%]">
                <img
                    src="/images/industry/auto-industry/partnering-power-img.webp"
                    alt="partnering-power-img"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-start justify-end">
                    <div className="relative mx-[32px] xl:ml-0 xl:mr-[280px] xl:w-[40%] md:mr-[100px] w-[90%] lg:w-[80%]">
                        <div
                            className="absolute inset-0 z-0 pointer-events-none"
                            style={{ background: "#FFFFFF", borderRadius: "inherit" }}
                        />
                        <div className="relative z-10 xl:pt-[66px] pt-[32px] px-[26px] xl:px-[61px] border">
                            <h2 className="text-[#000000] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px]">
                                Rialtes Partnering Power
                            </h2>
                            <h3 className="text-[#0B0B0B] xl:text-[42px] text-[22px] font-semibold xl:mt-[18px] mt-[16px] leading-[27px] xl:leading-[52px]">
                                SAP and Salesforce Expertise in One
                            </h3>
                            <p className="text-[#000000] xl:text-[20px] text-[22px] font-light xl:mt-[11px] mt-[16px] leading-[27px] xl:leading-[24px]">
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
        <section
            className={`
          xl:ml-[270px] xl:mr-[170px] md:mx-[100px] xl:pl-[61px] px-[35px] xl:mt-[94px] mt-[63px] xl:pt-[129px] pt-[49px] xl:pb-[160px] pb-[59px] 
          bg-[url('/images/industry/auto-industry/Mobile/related-solutions-mob-img.webp')] bg-cover bg-center
          md:bg-[url('/images/industry/auto-industry/related-solutions-img.webp')] md:bg-cover md:bg-center
        `}
        >
            <h2 className="xl:text-[60px] text-[26px] font-light leading-[32px] xl:leading-[73px] text-[#FFFFFF]">
                Related Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:mt-[45px] mt-[33px]">
                {relatedSolutionsData.map((item, index) => {
                    // Border 
                    const borderRight = index < 2 ? 'xl:border-r-[2px] xl:border-[#FFFFFF]' : '';
                    const borderBottom = 'border-b-[2px] border-[#FFFFFF] md:border-0 pb-[33px] last:border-b-0 last:pb-0';

                    // Padding 
                    let paddingClass = '';
                    if (index === 0) {
                        paddingClass = 'xl:pr-[40px]'; // 1st grid: only right padding
                    } else {
                        paddingClass = 'xl:px-[48px]'; // Others: left + right
                    }

                    return (
                        <div
                            key={index}
                            className={`flex flex-col justify-between ${borderRight} ${borderBottom} ${paddingClass} h-full`}
                        >
                            <div className="flex-1 flex flex-col">
                                <h4 className="text-white xl:text-[30px] text-[18px] xl:font-semibold font-medium leading-[24px] xl:leading-[37px]">
                                    {item.title}
                                </h4>
                                <p className="text-white xl:text-[20px] text-[16px] font-light leading-[19px] xl:leading-[24px] xl:mt-[18px] mt-[18px] xl:w-[80%]">
                                    {item.desc}
                                </p>
                                <div className={`mt-auto pt-[20px] ${index === relatedSolutionsData.length - 1 ? 'xl:mt-[37px]' : ''}`}>
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
        </section>

    )
}
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
                            <h2 className="text-[#FFFFFF] xl:text-[60px] text-[24px] leading-[29px] xl:leading-[73px] font-normal">
                                Driving Digital Transformation from Showroom to Service Bay
                            </h2>
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
                <h1 className="xl:text-[60px] text-[26px] font-Light leading-[32px] xl:leading-[73px] xl:w-[70%]">Powering the Next-Generation Automotive Ecosystem with Rialtes</h1>
                <div className="mt-[22px] xl:mt-[48px]">
                    <p className="xl:text-[22px] text-[16px] font-normal leading-[19px] xl:leading-[30px] xl:w-[68%] w-[96%]">The automotive industry is in the midst of a seismic shift — from traditional dealer-centric models to a connected, customer-first mobility ecosystem. OEMs, dealers, and suppliers are challenged to deliver seamless omnichannel experiences, manage complex vehicle lifecycles, and foster brand loyalty in a hyper-competitive market.</p>
                    <p className="xl:text-[22px] text-[16px] font-normal leading-[19px] xl:leading-[30px] mt-[22px] xl:mt[48px] xl:w-[68%] w-[96%]"> Rialtes partners with leading automotive brands to navigate these disruptions, combining deep domain expertise with cutting-edge technologies like SAP, Salesforce Automotive Cloud, Marketing Cloud, Revenue Cloud, and more. With offices in the U.S., Canada, India, and Singapore, and certified automotive solution experts, we deliver end-to-end digital transformation — from lead capture to warranty service and beyond.</p>
                </div>
            </section>
            {/* thought leadership section */}
            <ThoughtLeadershipSection />
            {/* rialtes predelivered automative section */}
            <PreDeliveredSection />
            {/* learn more btn */}
            <section
                className="
          mt-[36px] xl:mt-[37px]
          xl:ml-[220px]
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
      mt-[-30px] xl:mt-[-30px]
      md:mx-[100px] xl:mx-[340px]
      mx-[40px]
    "
            >
                <Link href='/contact-us'>
                    <button className="xl:bg-[#134874] bg-[#006FBE] xl:text-[20px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] xl:border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 order-4">
                        Learn More
                    </button>
                </Link>
            </section>

            {/* revolutionizing sectin */}
            <RevolutionizingServiceSection />

            {/* enabling dynamic section */}
            <EnablingDynamicSection />
            {/* dealer buyer section */}
            <DealerBuyerSection />
            {/* Empowering Dealers Section */}
            <EmpoweringDealersSection />
            {/* unlocking data driven */}
            <UnlockingDataSection />
            {/* integrating automative section */}
            <IntegratingAutomativeSection />
            {/* partenring power section */}
            <PartenringPowerSection />
            {/* realted solutions section */}
            <RelatedSolutionsSection />
            {/* Contact Form */}
            <div
                className="
              xl:container
              mx-[35px] xl:mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]
              text-[#000000] pb-10"
            >
                <ContactForm title={'Ready to Transform Your Automotive Customer Experience?'} className={"max-w-[66rem] xl:font-normal xl:text-[60px] text-[26px] xl:leading-[73px] leading-[32px] mt-[52px] xl:mt-[89px]"} />
            </div >
        </>
    )
}