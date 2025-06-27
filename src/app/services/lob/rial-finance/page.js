"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "@/app/components/learnMore";

export default function page() {
    const startWithData = [
        "Pre-built AI bots for customer onboarding, lending, service, and wealth advisory.",
        "Agentforce enablement workshops for rapid AI readiness.",
        "AI-driven compliance checks, fraud detection, and document management.",
        "Conversational AI for personalized customer experiences in retail and corporate banking.",
        "Integration with Data Cloud for unified customer profiles.",
    ]

    const exelonaData = [
        "Asset lifecycle and portfolio management.",
        "Integrated revenue management, leasing, and marketing.",
        "Unified investor and tenant servicing platforms.",
        "Seamless collaboration between real estate finance, operations, and compliance teams.",
        "AI-driven deal and property recommendations.",
    ]

    const agentChat = [
        "Instant WhatsApp communication directly from Salesforce.",
        "Automated alerts, statements, and loan updates.",
        "Real-time customer service and chatbot interactions.",
        "Secure document and e-signature requests.",
        "AI-powered reminders and upsell recommendations.",
    ]
    const agentforceData = [
        "AI bots for client onboarding, loan processing, and wealth advice.",
        "Real-time fraud detection and compliance monitoring.",
        "AI-powered case management and service workflows.",
        "Seamless AI and human agent collaboration.",
        "Advanced data-driven insights and next best action recommendations."
    ]
    const salesforceData = [
        "Zero Copy Data Access — unified client profiles without duplication.",
        "Connected data ecosystems across Salesforce, SAP, and financial platforms.",
        "AI-ready data lakehouse architecture.",
        "Real-time insights and hyper-personalized customer journeys.",
        "Enhanced regulatory compliance and risk analytics.",
    ]
    const howWeDeliverData = [
        "Salesforce Certified Business Analysts and Financial Services Experts.",
        "PMP and Scrum-certified Project Managers for agile, transparent delivery.",
        "Dedicated Solution Architects and Technical Leads. ",
        "Ongoing enhancements, compliance updates, and performance optimization.",
        "24x7 Global Support with local and offshore teams."
    ]
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Retail Business Consulting Services and Omnichannel Solutions | Rialtes"
                description="Retail+ by Rialtes offers expert-led Retail Business Consulting Services and AI-powered Omnichannel Solutions. Start your retail transformation now."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/services/lob/retail-plus-business-consulting-omnichannel-solutions/"
            />
            {/* <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            /> */}
            {/* herosection */}
            <section className="relative group overflow-hidden h-[420px] lg:h-[550px] 4xl:h-[650px]">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/services/rial-finance/hero-desk-banner.webp"
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
                        src="/images/services/rial-finance/Mobile/hero-mob-banner.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "5% 20%" }}
                        priority
                    />
                </div>

                <div className="relative h-full custom-container sm:flex sm:items-center pt-[70px] sm:pt-0 ">
                    <div className="grid grid-cols-12 w-full">
                        <div className="4xl:col-span-8 sm:col-span-7 md:col-span-6 lg:col-span-6 col-span-9 max-[400px]:col-span-12">
                            <h3 className="text-[18px] md:text-[24px] font-bold">
                                RialFinance+
                            </h3>
                            <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] lg:mt-[28.5px] w-[88%] sm:w-full">
                                Empowering Financial Services with RialFinance+
                            </h2>
                            <h2 className="text-[#000000] text-[20px] leading-tight xl:text-[28px] 4xl:text-[35px] mt-[14px] lg:mt-[46px] font-bold 4xl:w-[80%]">
                                Transformative Salesforce Solutions for the Future of Finance
                            </h2>
                        </div>
                        <div className="4xl:col-span-4 sm:col-span-5 md:col-span-6 lg:col-span-6 col-span-3">
                        </div>
                    </div>
                </div>
            </section>

            {/* page description section */}
            <section className="custom-container xl:mt-[99px] mt-[50px]">
                <div>
                    <h1 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] w-[90%] sm:w-full">
                        AI-Powered Financial Services. <div className="sm:block hidden" /> Personalized Client Journeys. <div className="sm:block hidden" /> Seamless Omnichannel Engagement.
                    </h1>
                    <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[43px] mt-[30px]  w-[90%] sm:w-full xl:w-[80%]">
                        At Rialtes, we enable financial institutions to lead with innovation and trust. Our RialFinance+ Managed Services deliver advisory, implementation, customization, AI integration, and post-go-live support, all unified to transform your Salesforce Financial Services Cloud (FSC) experience.
                        <br />
                        <br />
                        With deep domain expertise in Banking, Wealth, Lending, Asset Management, Insurance, and Brokerage, and offices in the U.S., Canada, Singapore, and India, Rialtes is a certified Salesforce partner delivering cutting-edge, compliant, AI-ready solutions.
                    </p>
                </div>
            </section>

            {/* start with agentforce section */}
            <section className="xl:mt-[121px] mt-[68px]">
                <div className="custom-container lg:pl-0 max-lg:px-0">
                    <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] gap-y-[44px]">
                        <div className="lg:col-span-7 col-span-12">

                            <div className="lg:block hidden w-full h-full">
                                <Image
                                    src="/images/services/rial-finance/start-with-desk.webp"
                                    alt="desktop img"
                                    width={0}
                                    height={0}
                                    className="w-full h-full object-cover xl:object-[75%_20%] 4xl:object-[25%_20%]"
                                    priority
                                />
                            </div>
                            {/* mob image */}
                            <div className="lg:hidden block w-full h-full">
                                <Image
                                    src="/images/services/rial-finance/Mobile/start-with-mob.webp"
                                    alt="mob img"
                                    width={0}
                                    height={0}
                                    className="w-full h-full md:h-[600px] object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-5 col-span-12 max-lg:px-[36px] w-[90%] lg:w-full">
                            <h2 className="text-[26px] xl:text-[40px] 4xl:text-[60px]">
                                Start with Agentforce Adoption
                            </h2>
                            <h3 className="text-[22px] xl:text-[30px] 4xl:text-[36px] font-semibold xl:mt-[25px] mt-[17px]">
                                Elevating Customer Experience in Financial Services
                            </h3>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] xl:mt-[25px] mt-[17px] font-normal">
                                Agentforce, Salesforce’s revolutionary AI assistant, is transforming customer-agent relationships in financial services. Rialtes makes Agentforce adoption seamless with:
                            </p>

                            <ul className="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[25px] mt-[17px] pl-[20px]">
                                {startWithData.map((data, ind) => (
                                    <li
                                        className="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal"
                                        key={ind}
                                    >
                                        {data}
                                    </li>
                                ))}
                            </ul>

                            <div className="xl:mt-[62px] mt-[46px]">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="custom-container xl:mt-[46px] mt-[53px]">
                    <p className="xl:py-[31px] xl:px-[38px] py-[24px] px-[34px] bg-[#073259] text-[#ffffff] font-normal w-fit 4xl:text-[24px] xl:text-[20px] text-[18px]">Adopt AI with confidence — powered by Rialtes financial services expertise.</p>
                </div>
            </section>

            {/* exelona section */}
            <section className="xl:mt-[70px] mt-[63px]">
                <div className="custom-container md:pl-0 max-md:px-0">
                    <div className="lg:block hidden w-full h-full">
                        <Image
                            src="/images/services/rial-finance/exelona-desk.webp"
                            alt="desktop img"
                            width={0}
                            height={0}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                    {/* mob image */}
                    <div className="lg:hidden block w-full h-full">
                        <Image
                            src="/images/services/rial-finance/Mobile/exelona-mob.webp"
                            alt="mob img"
                            width={0}
                            height={0}
                            className="w-full h-full md:h-[600px] object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="custom-container 4xl:!pr-[142px] xl:!pr-[36px] md:!pr-0 max-md:px-0 md:mt-[-120px] relative z-20">
                    <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[60px] 4xl:gap-[20px] gap-y-[30px] bg-[#0E3157] text-[#ffffff] xl:pt-[87px] xl:pl-[70px] xl:pr-[40px] xl:pb-[127px] pt-[41px] pb-[93px] px-[36px]">
                        <div className="md:col-span-6 col-span-12">
                            <h2 className="text-[26px] xl:text-[40px] 4xl:text-[60px] w-[90%] md:w-full lg:w-[60%] xl:w-full">
                                Exelona + Financial Services Cloud
                            </h2>
                            <h3 className="text-[22px] xl:text-[30px] 4xl:text-[36px] font-semibold xl:mt-[25px] mt-[17px] 4xl:w-[80%]">
                                Transforming Real Estate Financial Services
                            </h3>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] xl:mt-[25px] mt-[17px] font-normal 4xl:w-[70%]">
                                Our proprietary solution Exelona, when integrated with FSC, revolutionizes real estate firms and asset management companies by enabling:
                            </p>
                        </div>
                        <div className="md:col-span-6 col-span-12">
                            <ul className="xl:space-y-[27px] space-y-[19px] list-disc pl-[20px] w-[90%] md:w-full">
                                {exelonaData.map((data, ind) => (
                                    <li
                                        className="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal"
                                        key={ind}
                                    >
                                        {data}
                                    </li>
                                ))}
                            </ul>
                            <div className="xl:mt-[75px] mt-[55px]">
                                <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute xl:px-[70px] px-[36px] mt-[-50px]">
                        <p className="xl:py-[31px] xl:px-[38px] py-[24px] px-[34px] bg-[#006FBE] text-[#ffffff] font-normal w-fit 4xl:text-[24px] xl:text-[20px] text-[18px]">One integrated platform — Real Estate + Financial Services.</p>
                    </div>
                </div>
            </section>

            {/* agent chat section */}
            <section className="xl:mt-[181px] mt-[123px] bg-[#184671] custom-container">
                <div className="lg:block hidden w-full h-full">
                    <Image
                        src="/images/services/rial-finance/agentchat-desk.webp"
                        alt="desktop img"
                        width={0}
                        height={0}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>
                {/* mob image */}
                <div className="lg:hidden block w-full h-full">
                    <Image
                        src="/images/services/rial-finance/Mobile/agentchat-mob.webp"
                        alt="mob img"
                        width={0}
                        height={0}
                        className="w-full h-full md:h-[600px] object-cover"
                        priority
                    />
                </div>
                <h2 className="text-[26px] xl:text-[36px] 4xl:text-[50px] text-[#ffffff] xl:pt-[50px] pt-[41px]">
                    AgentChat
                </h2>
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[60px] 4xl:gap-[80px] gap-y-[30px] text-[#ffffff] xl:mt-[23px] mt-[16px]">
                    <div className="md:col-span-5 col-span-12">
                        <h3 className="text-[20px] xl:text-[28px] 4xl:text-[38px] font-semibold w-[90%] xl:w-[90%] 4xl:w-full">
                            WhatsApp-Enabled Real-Time Customer Engagement (Included Free with RialFinance+)
                        </h3>
                        <p className="xl:text-[18px] 4xl:text-[20px] text-[16px] xl:mt-[35px] mt-[16px] font-normal w-[90%] xl:w-full">
                            With RialChat, seamlessly integrated into Salesforce FSC, engage your clients in real-time:
                        </p>
                    </div>
                    <div className="md:col-span-7 col-span-12">
                        <ul className="xl:space-y-[27px] space-y-[19px] list-disc pl-[20px] w-[90%] md:w-full">
                            {agentChat.map((data, ind) => (
                                <li
                                    className="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal"
                                    key={ind}>
                                    {data}
                                </li>
                            ))}
                        </ul>
                        <p className="xl:text-[18px] 4xl:text-[22px] text-[18px] xl:mt-[52px] mt-[29px] font-normal">
                            Included FREE with RialFinance+ — enhancing customer engagement without extra costs.
                        </p>
                        <div className="xl:mt-[55px] mt-[37px]">
                            <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" />
                        </div>
                    </div>
                </div>

            </section>

            {/* agent force section */}
            <section className="xl:mt-[73px] mt-[42px] custom-container">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] lg:gap-[80px] gap-y-[29px]">
                    <div className="md:order-1 order-2">
                        <h2 className="text-[26px] xl:text-[36px] 4xl:text-[50px]">
                            Agentforce
                        </h2>
                        <h3 className="text-[20px] xl:text-[28px] 4xl:text-[38px] font-semibold w-[90%] xl:w-[90%] 4xl:w-full mt-[13px] xl:mt-[23px]">
                            AI-Powered Transformation for Financial Services
                        </h3>
                        <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] xl:mt-[35px] mt-[16px] font-normal w-[90%] xl:w-full">
                            Agentforce, with Rialtes’ expertise, delivers AI-driven excellence:
                        </p>
                        <ul className="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[43px] mt-[16] pl-[20px] w-[90%] md:w-full">
                            {agentforceData.map((data, ind) => (
                                <li
                                    className="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal"
                                    key={ind}>
                                    {data}
                                </li>
                            ))}
                        </ul>
                        <p className="xl:text-[18px] 4xl:text-[22px] text-[18px] xl:mt-[49px] mt-[48px] font-normal w-[90%] md:w-full">
                            Future-proof your client engagement — with Agentforce and Rialtes.
                        </p>
                        <div className="xl:mt-[55px] mt-[37px]">
                            <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" />
                        </div>
                    </div>
                    <div className="md:order-2 order-1">
                        <div className="lg:block hidden w-full h-full">
                            <Image
                                src="/images/services/rial-finance/agentforce-desk.webp"
                                alt="desktop img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        {/* mob image */}
                        <div className="lg:hidden block w-full h-full">
                            <Image
                                src="/images/services/rial-finance/Mobile/agentforce-mob.webp"
                                alt="mob img"
                                width={0}
                                height={0}
                                className="w-full h-full md:h-[600px] object-cover"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* salesforce force section */}
            <section className="xl:mt-[147px] mt-[75px] custom-container md:pl-0">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] lg:gap-[60px] gap-y-[29px]">
                    <div className="md:col-span-7 col-span-12">
                        <div className="md:block hidden w-full h-full relative">
                            <Image
                                src="/images/services/rial-finance/salesforce-desk.webp"
                                alt="desktop img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                            <div className="absolute right-0 mt-[-60px]">
                                <p className="xl:py-[31px] xl:px-[38px] py-[24px] px-[34px] bg-[#073259] text-[#ffffff] font-normal w-fit 4xl:text-[24px] xl:text-[20px] text-[18px]">A unified view of your client. Real-time. AI-ready.</p>
                            </div>
                        </div>
                        {/* mob image */}
                        <div className="md:hidden block w-full h-full">
                            <Image
                                src="/images/services/rial-finance/Mobile/salesforce-mob.webp"
                                alt="mob img"
                                width={0}
                                height={0}
                                className="w-full h-full md:h-[600px] object-cover"
                                priority
                            />
                        </div>
                    </div>
                    <div className="md:col-span-5 col-span-12">
                        <h2 className="text-[26px] xl:text-[36px] 4xl:text-[48px] w-[90%] md:w-full">
                            Salesforce Data Cloud & SAP Data Cloud Zero Copy
                        </h2>
                        <h3 className="text-[20px] xl:text-[28px] 4xl:text-[38px] font-semibold w-[90%] xl:w-[90%] 4xl:w-full mt-[16px] xl:mt-[33px]">
                            Unified, AI-Ready Customer Profiles
                        </h3>
                        <ul className="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[33px] mt-[17px] pl-[20px] w-[86%] md:w-full">
                            {salesforceData.map((data, ind) => (
                                <li
                                    className="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal"
                                    key={ind}>
                                    {data}
                                </li>
                            ))}
                        </ul>
                        <div className="xl:mt-[71px] mt-[37px]">
                            <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" />
                        </div>
                        <div className="md:hidden mt-[40px]">
                            <p className="xl:py-[31px] xl:px-[38px] py-[24px] px-[34px] bg-[#073259] text-[#ffffff] font-normal w-fit 4xl:text-[24px] xl:text-[20px] text-[18px]">A unified view of your client. Real-time. AI-ready.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* how we deliver section */}
            <section className="xl:mt-[147px] mt-[75px] custom-container lg:pr-0 max-lg:px-0">
                <div className="grid lg:grid-cols-12 grid-cols-1">
                    <div className="lg:col-span-5 col-span-12 lg:mr-[-90px] relative z-20 lg:order-1 order-2">
                        <div className="bg-[#5D5F63] max-lg:mx-[36px] text-[#ffffff] xl:pt-[57px] xl:pb-[101px] xl:pl-[80px] xl:pr-[60px] lg:my-[60px] pt-[34px] px-[30px] pb-[60px]">
                            <h2 className="text-[26px] xl:text-[36px] 4xl:text-[48px] w-[90%] md:w-full">
                                How We Deliver
                            </h2>
                            <h3 className="text-[20px] xl:text-[28px] 4xl:text-[38px] font-semibold mt-[16px] xl:mt-[35px] w-[90%] lg:w-full">
                                Salesforce Implementation with Certified Experts
                            </h3>
                            <ul className="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[33px] mt-[17px] pl-[20px] w-[86%] md:w-full 4xl:w-[90%]">
                                {howWeDeliverData.map((data, ind) => (
                                    <li
                                        className="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal"
                                        key={ind}>
                                        {data}
                                    </li>
                                ))}
                            </ul>
                            <div className="xl:mt-[40px] mt-[10px] absolute">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 col-span-12 lg:order-2 order-1">
                        <div className="lg:block hidden w-full h-full">
                            <Image
                                src="/images/services/rial-finance/how-we-deliver-desk.webp"
                                alt="desktop img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        {/* mob image */}
                        <div className="lg:hidden block w-full h-full">
                            <Image
                                src="/images/services/rial-finance/Mobile/how-we-deliver-mob.webp"
                                alt="mob img"
                                width={0}
                                height={0}
                                className="w-full h-full md:h-[600px] object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

            </section>
            {/* Contact Form */}
            < div className="custom-container lg:mt-[108px] lg:mb-[92px] mt-[41px] mb-[45px]">
                <ContactForm title={'Get Started with RialFinance+ — Transform Your Financial Services with AI, Data, and Salesforce'} subtitle="Ready to future-proof your financial institution and deliver next-gen customer experiences?" subtitle1="Contact Rialtes to explore RialFinance+ — your partner for Salesforce-driven financial transformation." className={"xl:text-[40px] 4xl:text-[60px] text-[26px] xl:w-[68%] 4xl:w-[80%]"} />
            </div >

        </div>
    )
}

