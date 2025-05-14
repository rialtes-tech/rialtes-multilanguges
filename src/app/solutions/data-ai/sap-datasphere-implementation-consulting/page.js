"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import ContactForm from "@/app/components/contactform";
import LearnMore from "@/app/components/learnMore";

const WhyRialtesSection = () => {
    const whyrialtessectiondata = [
        "Complete lifecycle services: Consulting, Design, Implementation, Integration, and Post-Go-Live AI Optimization.",
        "Industry-first AI/ML data models and accelerators for rapid value realization.",
        "Tailored integrations with SAP S/4HANA, SuccessFactors, Ariba, Salesforce, Oracle, and more.",
        "Real-time data governance, compliance, and security frameworks.",
        "Offices in the US, Canada, Singapore, and India, delivering global expertise with local precision."
    ]
    return (
        <section className="w-full relative">

            <div className="w-full xl:pt-[100px]">
                {/* Mobile Image */}
                <img
                    src="/images/solutions/data-sphere/Mobile/why-rialtes-mob-img.webp"
                    alt="why-rialtes-img-mobile"
                    className="w-full h-full block md:hidden"
                />

                {/* Desktop Image */}
                <img
                    src="/images/solutions/data-sphere/why-rialtes-img.webp"
                    alt="why-rialtes-img"
                    className="w-full h-full hidden md:block"
                />
            </div>
            <div className="w-full mx-auto px-[35px] md:absolute md:top-0 md:left-0 xl:bg-transparent bg-[#80857E] xl:pt-[154px] pt-[37px] xl:pb-[41px]">
                <div className="xl:ml-[240px] mx-auto grid md:grid-cols-2 xl:gap-[20px] gap-[39px]">

                    <div>
                        <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] font-Light leading-[32px] xl:leading-[73px]">Why Rialtes?</h2>
                        <h3 className="text-[#FFFFFF] xl:text-[42px] text-[22px] font-semibold leading-[27px] xl:leading-[52px] xl:w-[100%] w-[90%] xl:mt-[38px] mt-[17px]">Your AI-Powered SAP Datasphere Partner for End-to-End Success</h3>

                        <div className="grid md:grid-cols-2 xl:gap-[20px] xl:w-[94%] w-[90%]">
                            {whyrialtessectiondata.map((data, ind) => {
                                const isBorderLeft = ind === 1 || ind === 3;
                                const isNotLast = ind !== whyrialtessectiondata.length - 1;

                                return (
                                    <div key={ind} className="w-full flex items-center">
                                        <div
                                            className={`relative
            xl:mt-[48px] xl:py-0 py-[39px]
            text-[#FFFFFF] xl:text-[20px] text-[17px] font-medium leading-[20px] xl:leading-[24px]
            ${isBorderLeft ? 'md:border-l-2 md:pl-6 border-white' : ''}
            md:border-b-0`}>
                                            {data}
                                            {isNotLast && (
                                                <div className="absolute bottom-0 left-0 w-[73px] border-b-2 border-white md:hidden" />
                                            )}
                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                        <div className="mt-[6px] md:mt-[40px] md:mb-[40px] xl:mt-[61px] xl:mb-[61px]">

                            <Link href='/contact-us'>
                                <button className="xl:bg-[#006FBE] bg-[#006FBE] xl:text-[20px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874]  font-semibold text-white py-3 px-8 transition duration-300 order-4">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>


                    <div className="w-full">

                    </div>
                </div>
            </div>
        </section >

    )
}
const BuildIntelligentSection = () => {
    const buildIntelligentData = [
        "Centralized, AI-ready data lakes combining SAP and non-SAP applications.",
        "Seamless, real-time data pipelines for live analytics and AI/ML models.",
        "Full data lineage, governance, and compliance support.",
        "Future-proof platform for AI/ML predictive and prescriptive analytics."
    ];
    return (
        <section>
            <Seo
                title="SAP Datasphere Implementation with AI Consulting Services | Rialtes"
                description="Need smarter data? SAP Datasphere Implementation Consulting by Rialtes blends AI with expertise to unify systems, optimize workflows, and drive success."

                canonical={"https://www.rialtes.com/solutions/data-ai/sap-datasphere-implementation-consulting/"}
            />
            <section className="xl:ml-[280px] mr-0 bg-[#006FBE] xl:mt-[0px] mt-[0px]">

                <div>
                    {/* Mobile Image */}
                    <img
                        src="/images/solutions/data-sphere/Mobile/build-intelligent-mob-img.webp"
                        alt="build-intelligent-mob-img"
                        className="w-full h-full block md:hidden"
                    />

                    {/* Desktop Image */}
                    <img
                        src="/images/solutions/data-sphere/build-intelligent-img.webp"
                        alt="build-intelligent-img"
                        className="w-full h-full hidden md:block"
                    />
                </div>

            </section>
            <div className="xl:ml-[280px] xl:mr-[170px] md:mx-[100px] xl:pl-[104px] px-[35px] xl:mt-[-100px] mt-[-30px] xl:pt-[78px] pt-[38px] xl:pb-[0px] pb-[0px] bg-[#073259] relative">
                <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light xl:w-[70%]">
                    Build an Intelligent Data Lake with SAP Datasphere
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-[71px] gap-[20px] xl:mt-[53px] mt-[24px]">
                    {/* Left Column */}
                    <div>
                        <h2 className="text-[#FFFFFF] xl:text-[42px] text-[22px] leading-[27px] xl:leading-[52px] font-semibold">
                            Your Unified, AI-Driven Business Engine
                        </h2>
                        <h3 className="text-[#FFFFFF] font-semibold xl:text-[36px] text-[18px] leading-[22px] xl:leading-[44px] mt-[24px] xl:mt-[37px] xl:w-[90%]">
                            Unlock End-to-End Visibility and Actionable AI Insights
                        </h3>
                        <p className="text-[#FFFFFF] font-light xl:text-[20px] text-[16px] leading-[19px] xl:leading-[24px] mt-[24px] xl:mt-[37px] xl:w-[80%] w-[90%]">
                            Data consolidation shouldn’t be a bottleneck — it should be a growth catalyst. Rialtes uses SAP Datasphere to unify all your critical enterprise data into a powerful data lake, eliminating silos and enabling AI/ML insights at scale.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col">
                        <p className="text-[#FFFFFF] font-semibold xl:text-[22px] text-[20px] leading-[24px] xl:leading-[27px] xl:mt-0 mt-[26px]">Key Benefits:</p>
                        <ul className="list-disc pl-[22px] xl:w-[86%] w-[90%] xl:mt-[29px] mt-[26px]">
                            {buildIntelligentData.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="text-[#FFFFFF] mt-[19px] first:mt-0 xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] font-light">
                                    {item}
                                </li>

                            ))}
                        </ul>


                        <div className="xl:mt-[104px] mt-[44px] xl:ml-1 ">
                            <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
const IndustryAcceleratorsSection = () => {
    const industryAcceleratorData = [
        "AI-powered Manufacturing production and inventory optimization.",
        "Semiconductor-specific yield, demand, and supply chain analytics.",
        "Automotive customer lifecycle and parts analytics.",
        "Retail customer behavior, inventory, and sales insights.",
        "Education student lifecycle analytics and faculty insights.",
        "HR workforce performance and diversity analytics."
    ]
    return (
        <section className="w-full xl:mt-[158px] mt-[41px]">
            <div className="grid grid-cols-1 md:grid-cols-[4fr_5fr]">

                <div className="w-full">
                    {/* Mobile Image */}
                    <img
                        src="/images/solutions/data-sphere/Mobile/industry-accelerators-mob-img.webp"
                        alt="industry-accelerators-mob-img"
                        className="w-full h-full block md:hidden"
                    />

                    {/* Desktop Image */}
                    <img
                        src="/images/solutions/data-sphere/industry-accelerators-img.webp"
                        alt="industry-accelerators-img"
                        className="w-full h-full hidden md:block"
                    />
                </div>

                <div className="text-[#000000] xl:pl-[60px] mx-[35px] xl:pt-0 pt-[40px]">
                    <h2 className="xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                        Industry-Accelerators
                    </h2>
                    <h3 className="font-semibold xl:text-[42px] text-[22px] leading-[27px] xl:leading-[52px] mt-[29px] xl:mt-[29px]">
                        Fast-Track AI Success in Your Industry
                    </h3>
                    <h3 className="font-semibold xl:text-[36px] text-[18px] leading-[22px] xl:leading-[44px] mt-[22px] xl:mt-[29px] xl:w-[90%]">
                        Pre-Built Connectors & AI Models to Accelerate Your Transformation
                    </h3>
                    <p className="xl:text-[20px] text-[16px] leading-[19px] xl:leading-[24px] mt-[22px] xl:mt-[45px] xl:w-[86%] font-light">
                        Rialtes’ pre-delivered accelerators make AI data consolidation seamless and impactful. Designed specifically for Manufacturing, Semiconductor, Automotive, Retail, Education, and HR industries, these plug-and-play solutions help you gain immediate business value.
                    </p>
                    <h4 className="font-semibold xl:text-[22px] text-[18px] leading-[22px] xl:leading-[27px] mt-[29px] xl:mt-[54px]">
                        Industry-Focused Capabilities:
                    </h4>

                    <ul className="list-disc pl-[22px] w-[90%] xl:mt-[28px] mt-[22px]">
                        {industryAcceleratorData.map((data, idx) => (
                            <li
                                key={idx}
                                className="mt-[19px] first:mt-0 xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] font-light"
                            >
                                {data}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    )
}
const IntelligentAutomativeSection = () => {
    const intelligentData = [
        "Seamless integration of dealer, customer, IoT/telematics, and ERP data.",
        "Predictive maintenance, warranty management, and AI-based customer retention.",
        "Insights for new product development and targeted marketing campaigns."
    ];

    return (
        <section className="relative xl:mt-[66px] mt-[53px] xl:mr-0
            xl:ml-[280px] xl:w-[calc(100%-280px)]
            md:ml-[100px] md:w-[calc(100%-100px)]"
        >
            {/* Mobile Image */}
            <img
                src="/images/solutions/data-sphere/Mobile/intelligent-automative-mob-img.webp"
                alt="intelligent-automative-img"
                className="block md:hidden w-full h-[940px]"
            />

            {/* Desktop Image */}
            <img
                src="/images/solutions/data-sphere/intelligent-automative-img.webp"
                alt="intelligent-automative-img"
                className="hidden md:block w-full h-[820px]"
            />

            <div className="absolute inset-0 flex items-start justify-start xl:mt-[64px] mt-[294px]">
                <div className="relative mx-[32px] xl:mr-0 xl:ml-[76px] xl:w-[60%]">
                    <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light xl:w-[90%]">
                        Intelligent Automotive Data Lakes — Transform Vehicle Data into AI-Driven Value
                    </h2>

                    <h3 className="text-[#FFFFFF] xl:text-[42px] text-[22px] leading-[27px] xl:leading-[52px] font-semibold xl:mt-[45px] mt-[24px] xl:w-[80%] w-[90%]">
                        Drive the Future of Automotive with AI-Integrated Insights
                    </h3>

                    <ul className="list-disc pl-[22px] xl:w-[86%] w-[90%] mt-[24px] xl:mt-[39px]">
                        {intelligentData.map((item, idx) => (
                            <li
                                key={idx}
                                className="text-[#FFFFFF] mt-[19px] xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px]">
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="xl:mt-[20px] mt-[54px]">
                        <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                    </div>
                </div>
            </div>
            <div className="bg-[#163055] absolute top-[95%] mx-[32px] xl:mr-0 xl:ml-[76px]">
                <p className="text-[#FFFFFF] xl:text-[26px] text-[22px] leading-[27px] xl:leading-[32px] xl:py-[37px] py-[27px] xl:px-[43px] px-[24px] font-light">
                    Unlock AI for better vehicle performance, customer experience, and market growth.
                </p>
            </div>
        </section>
    );
};
const AIReadyManufacturingSection = () => {
    const aiReadyData = [
        "AI-driven predictive maintenance, yield forecasting, and supplier analytics.",
        "Unified supply chain, production, and demand data for real-time decisions.",
        "Real-time KPI dashboards to drive operational excellence and cost savings.",
    ]
    return (
        <section className="w-full xl:mt-[158px] mt-[180px] relative">
            <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr]">
                <div className="order-1 md:order-2 w-full">
                    {/* Mobile Image */}
                    <img
                        src="/images/solutions/data-sphere/Mobile/ai-ready-mob-img.webp"
                        alt="ai-ready-mob-img"
                        className="w-full h-full block md:hidden"
                    />
                    {/* Desktop Image */}
                    <img
                        src="/images/solutions/data-sphere/ai-ready-img.webp"
                        alt="ai-ready-img"
                        className="w-full h-full hidden md:block"
                    />
                </div>


                <div className="order-2 md:order-1 text-[#FFFFFF] xl:pl-[280px] px-[35px] xl:pr-[90px] xl:pt-[88px] pt-[46px] pb-[120px] bg-[#64676C]">
                    <h2 className="xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light xl:w-full w-[90%]">
                        AI-Ready Manufacturing & Semiconductor Data Lake
                    </h2>
                    <h3 className="font-semibold xl:text-[42px] text-[22px] leading-[27px] xl:leading-[52px] mt-[19px] xl:mt-[45px] xl:w-full w-[90%]">
                        Precision-Driven Performance
                    </h3>
                    <h3 className="font-semibold xl:text-[36px] text-[18px] leading-[22px] xl:leading-[44px] mt-[19px] xl:mt-[45px] xl:w-[90%]">
                        Optimize Production, Supply Chain, and Maintenance
                    </h3>

                    <ul className="list-disc pl-[22px] w-[90%] xl:mt-[39px] mt-[29px]">
                        {aiReadyData.map((data, idx) => (
                            <li
                                key={idx}
                                className="mt-[19px] first:mt-0 xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[22px] font-light"
                            >
                                {data}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="bg-[#163055] xl:w-[36%] w-[81%] mx-[32px] xl:ml-[284px] absolute -bottom-[66px]">
                <p className="text-[#FFFFFF] xl:text-[26px] text-[22px] leading-[27px] xl:leading-[32px] xl:py-[37px] py-[27px] xl:px-[43px] px-[24px] font-light">
                    Stay competitive with AI-powered, data-driven manufacturing intelligence.
                </p>
            </div>
        </section>
    )
}
const OmnichannelSmartEducationSection = () => {
    const omniSectionData = [
        "Consolidated view of customer, sales, inventory, and marketing data.",
        "AI/ML-powered segmentation, churn prediction, and demand forecasting.",
        "Real-time stock and fulfillment analytics to improve margins."
    ]
    const educationSectionData = [
        "AI-driven analytics for student retention, performance, and engagement.",
        "Faculty productivity, curriculum insights, and administrative reporting.",
        "Financial performance and compliance analytics made easy."
    ]
    return (
        <section className="md:mx-[100px] xl:ml-[160px] xl:mt-[144px] mt-[120px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="">
                    <div className="relative">
                        {/* Mobile Image */}
                        <img
                            src="/images/solutions/data-sphere/Mobile/omnichannel-mob-img.webp"
                            alt="omnichannel-mob-img"
                            className="block xl:hidden h-auto mx-auto -mb-[247px] relative z-10 w-[80%]"
                        />

                        {/* Desktop Image */}
                        <div className="hidden xl:block w-[70%] mx-auto relative z-10 xl:-mb-[46%]">
                            <img
                                src="/images/solutions/data-sphere/omnichannel-img.webp"
                                alt="omnichannel-img"
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="relative text-[#000000] bg-[#E0E0E0] xl:pt-[400px] pt-[305px] xl:pb-[145px] pb-[100px] px-[35px] xl:pl-[72px] overflow-visible">
                        <h2 className="xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light xl:w-[70%] xl:ml-[28px]">
                            Omnichannel Retail Data Intelligence
                        </h2>
                        <h3 className="font-semibold xl:text-[42px] text-[26px] leading-[32px] xl:leading-[52px] mt-[27px] xl:mt-[39px] xl:w-[80%] xl:ml-[28px]">
                            Personalize, Optimize, and Win Customers
                        </h3>
                        <ul className="list-disc pl-[22px] w-[90%] xl:mt-[47px] mt-[25px] xl:ml-[28px]">
                            {omniSectionData.map((data, idx) => (
                                <li
                                    key={idx}
                                    className="mt-[19px] first:mt-0 xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] font-light"
                                >
                                    {data}
                                </li>
                            ))}
                        </ul>

                        <div className="bg-[#163055] xl:mx-auto mx-auto w-[80%] left-1/2 transform -translate-x-1/2 absolute xl:bottom-[-50px] bottom-[-50px] xl:mt-[60px] xl:w-[80%]">
                            <p className="text-[#FFFFFF] xl:text-[26px] text-[20px] leading-[24px] xl:leading-[32px] xl:py-[37px] py-[27px] xl:px-[43px] px-[24px] font-light">
                                Empower retail with hyper-personalized experiences and optimized operations.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:mt-[40%] mt-[80px]">
                    <div className="relative">
                        {/* Mobile Image */}
                        <img
                            src="/images/solutions/data-sphere/Mobile/smart-education-mob-img.webp"
                            alt="smart-education-mob-img"
                            className="block xl:hidden h-auto mx-auto -mb-[247px] relative z-10 w-[80%]"
                        />

                        {/* Desktop Image */}
                        <div className="hidden xl:block w-[70%] mx-auto relative z-10 xl:-mb-[46%]">
                            <img
                                src="/images/solutions/data-sphere/smart-education-img.webp"
                                alt="smart-education-img"
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="relative text-[#000000] bg-[#7AB5BF] xl:pt-[400px] pt-[305px] xl:pb-[115px] pb-[100px] px-[35px] xl:pl-[72px] overflow-visible">
                        <h2 className="xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light xl:w-[90%] xl:ml-[28px]">
                            Smart Education Data Platforms
                        </h2>
                        <h3 className="font-semibold xl:text-[42px] text-[26px] leading-[32px] xl:leading-[52px] mt-[27px] xl:mt-[36px] xl:w-[80%] xl:ml-[28px]">
                            Driving Student Success with AI
                        </h3>
                        <h4 className="font-semibold xl:text-[36px] text-[20px] leading-[24px] xl:leading-[44px] mt-[23px] xl:mt-[36px] xl:w-[76%] xl:ml-[28px]">
                            From Enrollment to Alumni — AI-Powered Student Journeys
                        </h4>
                        <ul className="list-disc pl-[22px] xl:w-[80%] w-[90%] xl:mt-[49px] mt-[25px] xl:ml-[28px]">
                            {educationSectionData.map((data, idx) => (
                                <li
                                    key={idx}
                                    className="mt-[19px] first:mt-0 xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] font-light"
                                >
                                    {data}
                                </li>
                            ))}
                        </ul>

                        <div className="bg-[#163055] xl:mx-auto mx-auto w-[80%] left-1/2 transform -translate-x-1/2 absolute bottom-[-50px]  xl:left-[50%] xl:mt-[40px] xl:w-[80%]">
                            <p className="text-[#FFFFFF] xl:text-[26px] text-[20px] leading-[24px] xl:leading-[32px] xl:py-[37px] py-[27px] xl:px-[43px] px-[24px] font-light">
                                Future-proof education with AI insights to enhance student outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const AiPoweredHRAnalyticsSection = () => {
    const aiPoweredData = [
        "Unify employee data across SuccessFactors, Oracle, Workday, and more.",
        "AI-driven analytics for recruitment, retention, diversity, and workforce planning.",
        "Real-time dashboards for leadership decision-making."
    ]
    return (
        <section className="xl:mt-[142px] mt-[107px]">
            <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr]">
                <div>
                    {/* Mobile Image */}
                    <img
                        src="/images/solutions/data-sphere/Mobile/ai-powered-hr-analytics-mob-img.webp"
                        alt="ai-powered-hr-analytics-mob-img"
                        className="block xl:hidden h-auto mx-auto"
                    />

                    {/* Desktop Image */}
                    <img
                        src="/images/solutions/data-sphere/ai-powered-hr-analytics-img.webp"
                        alt="ai-powered-hr-analytics"
                        className="hidden xl:block w-full"
                    />
                </div>

                <div className="relative text-[#FFFFFF] xl:pl-[72px] xl:ml-[-20%] xl:w-[98%] xl:mt-[100px] mx-[0px] px-[35px] xl:pt-[76px] pt-[42px] bg-[#006FBE] xl:pb-[76px] pb-[142px] overflow-visible">
                    <h2 className="xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light xl:w-[80%]">
                        AI-Powered HR Analytics Hub
                    </h2>
                    <h3 className="font-semibold xl:text-[42px] text-[26px] leading-[32px] xl:leading-[52px] mt-[27px] xl:mt-[36px] xl:w-[80%]">
                        Redefine Workforce Intelligence
                    </h3>
                    <h4 className="font-semibold xl:text-[36px] text-[20px] leading-[24px] xl:leading-[44px] mt-[23px] xl:mt-[36px] xl:w-full">
                        Smarter People Decisions with AI
                    </h4>
                    <ul className="list-disc pl-[22px] w-[90%] xl:mt-[49px] mt-[25px]">
                        {aiPoweredData.map((data, idx) => (
                            <li
                                key={idx}
                                className="mt-[19px] first:mt-0 xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] font-light"
                            >
                                {data}
                            </li>
                        ))}
                    </ul>


                    <div className="bg-[#163055] 
                    w-[80%] left-1/2 
                    transform 
                    -translate-x-1/2 
                    absolute 
                    bottom-[-50px] 
                    xl:left-[0px] 
                    xl:w-[100%]
                    xl:right-[-72px] 
                    xl:bottom-auto 
                    xl:top-full 
                    xl:mt-[0px] 
                    xl:transform-none
                ">
                        <p className="text-[#FFFFFF] xl:text-[26px] text-[20px] leading-[24px] xl:leading-[32px] xl:py-[37px] py-[27px] xl:px-[43px] px-[24px] font-light">
                            Take HR to the next level with AI-powered talent management and compliance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
const SapAribaSection = () => {
    const sapAribaData = [
        "Real-time procurement, spend, and supplier risk insights.",
        "AI for predictive sourcing, supplier scoring, and risk analysis.",
        "Comprehensive contract and spend analytics.",
    ];
    return (
        <>
            <section className="xl:ml-[280px] mr-0 xl:mt-[200px] mt-[94px]">
                <h2 className="text-[#000000] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light xl:w-[50%] w-[80%] xl:mx-[0] ml-[44px] mr-[36px]">
                    End-to-End Integration — Real-Time Data Unification
                </h2>
                <div>
                    {/* Mobile Image */}
                    <img
                        src="/images/solutions/data-sphere/Mobile/sap-ariba-mob-img.webp"
                        alt="sap-ariba-mob-img"
                        className="w-full h-full block md:hidden mt-[60px]"
                    />

                    {/* Desktop Image */}
                    <img
                        src="/images/solutions/data-sphere/sap-ariba-img.webp"
                        alt="sap-ariba-img"
                        className="w-full h-full hidden md:block xl:mt-[84px]"
                    />
                </div>

            </section>
            <div className="xl:ml-[280px] xl:mr-[170px] md:mx-[100px] xl:pl-[67px] px-[35px] xl:mt-[-16%] mt-[-30px] xl:pt-[70px] pt-[42px] xl:pb-[68px] pb-[49px] bg-[#3280A3] relative">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-[1px] gap-[20px] xl:mt-[0px] mt-[24px]">

                    <div>
                        <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light xl:w-[80%]">
                            SAP Ariba + SAP Datasphere
                        </h2>
                        <h3 className="text-[#FFFFFF] font-semibold xl:text-[42px] text-[20px] leading-[24px] xl:leading-[52px] mt-[27px] xl:mt-[31px] xl:w-[90%] w-[80%]">
                            Procurement Intelligence at Scale
                        </h3>
                    </div>

                    <div className="flex flex-col">
                        <ul className="list-disc pl-[22px] xl:w-[86%] w-[90%] xl:mt-[0] mt-[21px]">
                            {sapAribaData.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="text-[#FFFFFF] mt-[19px] first:mt-0 xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] font-light">
                                    {item}
                                </li>

                            ))}
                        </ul>


                        <div className="xl:mt-[49px] mt-[34px] xl:ml-1 ">
                            <LearnMore />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
const SapHanaSection = () => {
    const sapHanaData = [
        "Unified financials, operations, and logistics data.",
        "Real-time business health and performance analytics.",
        "AI-powered demand forecasting and cost analysis."
    ]
    return (
        <section className="xl:ml-0  md:ml-[100px] md:w-[calc(100%-188px)] bg-[#75603B] xl:mt-[91px] mt-[55px]">
            <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr]">
                <div>
                    {/* Mobile Image */}
                    <img
                        src="/images/solutions/data-sphere/Mobile/sap-hana-mob-img.webp"
                        alt="sap-hana-mob-img"
                        className="w-full h-full block md:hidden"
                    />

                    {/* Desktop Image */}
                    <img
                        src="/images/solutions/data-sphere/sap-hana-img.webp"
                        alt="sap-hana-img"
                        className="w-full h-full hidden md:block"
                    />
                </div>
                <div className="text-[#FFFFFF] xl:pl-[36px] mx-[35px] xl:pt-[57px] pt-[42px]">
                    <h2 className="xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                        SAP S/4HANA + SAP Datasphere
                    </h2>
                    <h3 className="font-semibold xl:text-[42px] text-[20px] leading-[24px] xl:leading-[52px] mt-[27px] xl:mt-[37px] xl:w-full">
                        Enterprise Data Mastery
                    </h3>
                    <ul className="list-disc pl-[22px] w-[90%] xl:mt-[49px] mt-[45px]">
                        {sapHanaData.map((data, idx) => (
                            <li
                                key={idx}
                                className="mt-[19px] first:mt-0 xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] font-light"
                            >
                                {data}
                            </li>
                        ))}
                    </ul>
                    <div className="xl:my-[62px] mt-[34px] mb-[49px]">
                        <LearnMore />
                    </div>
                </div>
            </div>
        </section>
    )
}
const SapSucessFactorSection = () => {
    const sapSuccessData = [
        "End-to-end talent lifecycle visibility.",
        "AI for workforce trends, diversity, and attrition prediction.",
        "Enhanced leadership dashboards with real-time workforce data."
    ]
    return (
        <section className="xl:ml-[280px] mr-0 bg-[#006FBE] xl:mt-[97px] mt-[55px]">
            <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr]">

                <div className="order-1 md:order-2">
                    {/* Mobile Image */}
                    <img
                        src="/images/solutions/data-sphere/Mobile/sap-success-factos-mob-img.webp"
                        alt="sap-success-factos-mob-img"
                        className="w-full h-full block md:hidden"
                    />
                    {/* Desktop Image */}
                    <img
                        src="/images/solutions/data-sphere/sap-success-factos-img.webp"
                        alt="sap-success-factos-img"
                        className="w-full h-full hidden md:block"
                    />
                </div>


                <div className="order-2 md:order-1 text-[#FFFFFF] xl:pl-[36px] mx-[35px] xl:pt-[57px] pt-[42px]">
                    <h2 className="xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                        SAP SuccessFactors + SAP Datasphere
                    </h2>
                    <h3 className="font-semibold xl:text-[42px] text-[20px] leading-[24px] xl:leading-[52px] mt-[27px] xl:mt-[37px] xl:w-full">
                        HR Data Reimagined
                    </h3>
                    <ul className="list-disc pl-[22px] w-[90%] xl:mt-[49px] mt-[45px]">
                        {sapSuccessData.map((data, idx) => (
                            <li
                                key={idx}
                                className="mt-[19px] first:mt-0 xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] font-light"
                            >
                                {data}
                            </li>
                        ))}
                    </ul>
                    <div className="xl:my-[62px] mt-[34px] mb-[49px]">
                        <LearnMore />
                    </div>
                </div>
            </div>
        </section>
    )
}
const SalesforceSap = () => {
    const salesforcesapData = [
        "Unified sales, service, and marketing data for deep insights.",
        "AI-driven customer retention, cross-sell, and upsell models.",
        "Real-time journey mapping and customer lifecycle management."
    ]
    return (
        <section className="xl:ml-0 md:ml-[100px] md:w-[calc(100%-188px)] bg-[#C2EBEF] xl:mt-[98px] mt-[64px]">
            <div className="grid grid-cols-1 md:grid-cols-[5fr_4fr]">
                <div>
                    {/* Mobile Image */}
                    <img
                        src="/images/solutions/data-sphere/Mobile/salesforcesap-mob-img.webp"
                        alt="salesforcesap-mob-img"
                        className="w-full h-full block md:hidden"
                    />

                    {/* Desktop Image */}
                    <img
                        src="/images/solutions/data-sphere/salesforcesap-img.webp"
                        alt="salesforcesap-img"
                        className="w-full h-full hidden md:block"
                    />
                </div>
                <div className="text-[#000000] xl:pl-[36px] mx-[35px] xl:pt-[57px] pt-[42px]">
                    <h2 className="xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                        Salesforce + SAP Datasphere
                    </h2>
                    <h3 className="font-semibold xl:text-[42px] text-[20px] leading-[24px] xl:leading-[52px] mt-[27px] xl:mt-[37px] xl:w-full">
                        AI-Enhanced Customer 360
                    </h3>
                    <ul className="list-disc pl-[22px] w-[90%] xl:mt-[49px] mt-[45px]">
                        {salesforcesapData.map((data, idx) => (
                            <li
                                key={idx}
                                className="mt-[19px] first:mt-0 xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] font-light"
                            >
                                {data}
                            </li>
                        ))}
                    </ul>
                    <div className="xl:my-[62px] mt-[34px] mb-[49px]">
                        <LearnMore />
                    </div>
                </div>
            </div>
        </section>
    )
}
const AdvancedDataSection = () => {
    const advancedData = [
        "Build stunning, interactive dashboards for leadership and teams.",
        "AI-infused visualizations for trend spotting and scenario planning.",
        "Instant visibility into KPIs and performance indicators."
    ]
    return (
        <>
            <section className="xl:ml-[280px] mr-0 bg-[#A16B5D] xl:mt-[98px] mt-[64px] xl:pb-0 pb-[47px] relative">
                <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr]">
                    <div className="order-1 md:order-2">
                        {/* Mobile Image */}
                        <img
                            src="/images/solutions/data-sphere/Mobile/advanced-data-mob-img.webp"
                            alt="advanced-data-mob-img"
                            className="w-full h-full block md:hidden"
                        />
                        {/* Desktop Image */}
                        <img
                            src="/images/solutions/data-sphere/advanced-data-img.webp"
                            alt="advanced-data-img"
                            className="w-full h-full hidden md:block"
                        />
                    </div>

                    <div className="order-2 md:order-1 text-[#FFFFFF] xl:pl-[36px] mx-[35px] xl:pt-[57px] pt-[42px]">
                        <h2 className="xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                            Advanced Data Visualization
                        </h2>
                        <h3 className="font-semibold xl:text-[42px] text-[20px] leading-[24px] xl:leading-[52px] mt-[19px] xl:mt-[37px] xl:w-[86%]">
                            Make Data Speak with SAP Analytics Cloud and Tableau
                        </h3>
                        <h3 className="font-semibold xl:text-[36px] text-[18px] leading-[22px] xl:leading-[44px] mt-[19px] xl:mt-[27px] xl:w-full">
                            From Raw Data to Actionable Intelligence
                        </h3>
                        <ul className="list-disc pl-[22px] w-[80%] xl:w-[90%] xl:mt-[49px] mt-[45px]">
                            {advancedData.map((data, idx) => (
                                <li
                                    key={idx}
                                    className="mt-[19px] first:mt-0 xl:mt-[24px] xl:text-[20px] text-[16px] xl:leading-[24px] leading-[19px] font-light"
                                >
                                    {data}
                                </li>
                            ))}
                        </ul>
                        <div className="xl:my-[62px] mt-[34px] mb-[49px]">
                            <LearnMore />
                        </div>
                    </div>
                </div>

                <div className="bg-[#163055] xl:w-[50%] mx-[35px] xl:ml-[0px] xl:mr-0 absolute top-[95%]">
                    <p className="text-[#FFFFFF] xl:text-[26px] text-[22px] leading-[27px] xl:leading-[32px] xl:py-[37px] py-[27px] xl:px-[33px] px-[24px] font-light">
                        Transform data into strategic insights that drive results.
                    </p>
                </div>
            </section>
        </>
    )
}
const AIPoweredUseSection = () => {
    const aiPoweredData = [
        "AI for predictive maintenance and quality assurance in manufacturing.",
        "Personalized customer experiences in retail using AI segmentation.",
        "AI-driven recruitment and diversity planning in HR.",
        "Predictive student success models in education.",
    ]
    return (
        <>
            <section className="relative xl:mt-[141px] mt-[164px] w-full">
                {/* Mobile View */}
                <div className="relative block md:hidden">
                    <img
                        src="/images/solutions/data-sphere/Mobile/ai-powered-use-mob-img.webp"
                        alt="ai-powered-use-mob-img"
                        className="w-full h-auto"
                    />

                    <div
                        className="absolute bottom-[220px] left-0 right-0 h-[43%] z-0"
                        style={{
                            background: "#006FBE",
                            mixBlendMode: "multiply",
                            opacity: 1,
                        }}
                    ></div>


                    <div className="mx-[30px] absolute bottom-[220px] left-0 right-0 px-[22px] pt-[61px] pb-[73px] z-10 text-white">
                        <h2 className="text-[26px] leading-[32px] font-light">
                            AI-Powered Use Cases
                        </h2>
                        <h3 className="text-[20px] font-semibold mt-[19px] leading-[24px] w-[90%]">
                            Accelerating Innovation
                        </h3>

                        <ul className="list-disc pl-[22px] mt-[22px]">
                            {aiPoweredData.map((element, index) => (
                                <li
                                    key={index}
                                    className="mt-[19px] first:mt-0 text-[16px] leading-[19px]"
                                >
                                    {element}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-[44px] absolute">
                            <Link href="/contact-us">
                                <button className="bg-[#006FBE] text-[16px] hover:bg-white hover:text-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Desktop View */}
                <img
                    src="/images/solutions/data-sphere/ai-powered-use-img.webp"
                    alt="ai-powered-use-img"
                    className="hidden md:block w-full h-auto object-contain"
                />

                <div className="hidden md:flex absolute inset-0 items-start justify-start">
                    <div className="relative mx-[32px] xl:mr-0 xl:ml-[280px] xl:w-[40%] md:ml-[100px] w-[90%] lg:w-[80%]">

                        <div
                            className="absolute inset-0 z-0 pointer-events-none"
                            style={{
                                background: "#006FBE",
                                mixBlendMode: "multiply",
                                opacity: 1,
                            }}
                        />

                        <div className="relative z-10 xl:pt-[70px] pt-[57px] xl:pb-[73px] pb-[27px] px-[26px] xl:px-[67px] text-white">
                            <h2 className="xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light">
                                AI-Powered Use Cases
                            </h2>
                            <h3 className="xl:text-[42px] text-[22px] font-semibold xl:mt-[38px] mt-[18px] leading-[27px] xl:leading-[52px]">
                                Accelerating Innovation
                            </h3>

                            <ul className="list-disc pl-[22px] xl:mt-[43px] mt-[16px]">
                                {aiPoweredData.map((element, index) => (
                                    <li
                                        key={index}
                                        className="mt-[19px] first:mt-0 xl:text-[20px] text-[15px] xl:leading-[24px] leading-[19px] font-light"
                                    >
                                        {element}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-[30px]">
                                <Link href="/contact-us">
                                    <button className="bg-[#006FBE] xl:text-[20px] text-[16px] hover:bg-white hover:text-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#163055] xl:w-[43%] mx-[35px] xl:ml-[280px] xl:mr-0 absolute xl:-mt-[58px] -mt-[68px]">
                    <p className="text-[#FFFFFF] xl:text-[26px] text-[22px] leading-[27px] xl:leading-[32px] xl:py-[37px] py-[27px] xl:px-[35px] px-[24px] font-light">
                        AI brings the future of decision-making to your fingertips.
                    </p>
                </div>
            </section>

        </>
    );
};
const GlobalPresenceSection = () => {
    const globalPresenceData = [
        "Certified SAP Datasphere and AI/ML experts delivering end-to-end solutions.",
        "Agile SCRUM-certified project managers for high-speed, iterative delivery.",
        "Global delivery model with offices in the US, Canada, Singapore, and India.",
        "Deep domain expertise in Manufacturing, Automotive, Semiconductor, Retail, HR, and Education."
    ]
    return (
        <section className="relative xl:ml-[280px] mr-0 xl:mt-[121px] mt-[126px]">
            <div className="flex flex-col xl:block">

                <div className="">
                    {/* Mobile Image */}
                    <img
                        src="/images/solutions/data-sphere/Mobile/global-presence-mob-img.webp"
                        alt="global-presence-mob-img"
                        className="block xl:hidden h-auto object-cover mx-auto z-10"
                    />

                    {/* Desktop Image */}
                    <img
                        src="/images/solutions/data-sphere/global-presence-img.webp"
                        alt="global-presence-img"
                        className="hidden xl:block w-full h-[90%] object-cover"
                    />
                </div>

                <div
                    className="xl:ml-[-143px] mx-[35px] xl:mt-auto mt-[-166px] xl:px-0 px-[35px] md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2 xl:pt-[74px] pt-[42px] xl:pb-[126px] pb-[52px] xl:w-[65%] z-20"
                    style={{
                        background: "#073259",
                        mixBlendMode: "multiply",
                        opacity: 1,
                    }}
                >
                    <div className="xl:ml-[138px] mx-auto xl:mr-[61px] z-30">
                        <h2 className="text-[#FFFFFF] xl:text-[60px] text-[26px] font-Light leading-[32px] xl:leading-[73px]">
                            Global Presence, Certified Expertise, Agile Excellence
                        </h2>

                        <div className="grid md:grid-cols-2 xl:gap-x-[40px] xl:w-[78%]">
                            {globalPresenceData.map((data, ind) => {
                                const isBorderLeft = ind === 1 || ind === 3;
                                const isNotLast = ind !== globalPresenceData.length - 1;

                                return (
                                    <div key={ind} className="w-full flex items-center">
                                        <div
                                            className={`
                          relative
                          xl:mt-[56px] xl:py-0 py-[31px] xl:w-[100%] w-[90%]
                          text-[#FFFFFF] xl:text-[20px] text-[18px] font-semibold leading-[22px] xl:leading-[24px] 
                          ${isBorderLeft ? 'md:border-l-2 md:pl-[68px] border-white' : ''}
                          ${!isBorderLeft ? "xl:mr-[45px]" : ""}
                          md:border-b-0
                        `}
                                        >
                                            {data}
                                            {isNotLast && (
                                                <div className="absolute bottom-0 left-0 w-[100%] border-b-2 border-[#848484] md:hidden" />
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default function () {
    return (
        <>
            <Seo
                title="SAP Datasphere Implementation with AI Consulting Services | Rialtes"
                description="Need smarter data? SAP Datasphere Implementation Consulting by Rialtes blends AI with expertise to unify systems, optimize workflows, and drive success."
                canonical="https://www.rialtes.com/solutions/data-ai/sap-datasphere-implementation-consulting/"
            />
            {/* hero section */}
            <section className="relative group overflow-hidden h-[399px] lg:h-[650px]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/data-sphere/data-sphere-banner.webp"
                        alt="data-sphere-banner"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/data-sphere/Mobile/data-sphere-mob-banner.webp"
                        alt="data-sphere-mob-banner"
                        fill
                        priority
                    />
                </div>

                <div
                    className="h-full relative
        mx-[32px] xl:mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-20 xl:mt-20 mt-[90px]">
                        <div className="xl:col-span-6 col-span-12 xl:pr-16 pr-[35rem] xl:w-[90%] w-[94%] mb-[15.5px] xl:mt-[3.5rem] mt-[6.5rem]">
                            <h3 className="text-[#FFFFFF] xl:text-[24px] text-[18px] font-bold leading-[22px] xl:leading-[60px]">SAP Datasphere</h3>
                            <h1 className="text-[#FFFFFF] xl:text-[60px] text-[26px] leading-[32px] xl:leading-[73px] font-light xl:mt-[28.5px] mt-[11.5px]">
                                Unleash the Power of AI-Driven Data Lakes with Rialtes & SAP Datasphere
                            </h1>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        </div>
                    </div>

                </div>
            </section>

            {/* future proof section */}
            <section className="w-full xl:px-[0] px-[35px] md:px-12 xl:mt-[124px] mt-[53px] xl:mb-[0px] mb-[52px]">
                <div className="xl:ml-[280px] mx-auto grid md:grid-cols-2 xl:gap-[20px] gap-[39px]">
                    {/* Left Side */}
                    <div>
                        <h2 className="xl:text-[60px] text-[26px] font-Light leading-[32px] xl:leading-[73px] xl:w-[100%] w-[90%]">Future-Proof Your Business with Intelligent Data Consolidation, AI Insights, and Seamless Integration</h2>
                    </div>

                    {/* Right Side */}
                    <div className="w-full">
                        <p className="xl:text-[22px] text-[16px] font-normal leading-[19px] xl:leading-[30px] xl:w-[68%] w-[96%]">In today’s competitive landscape, data is the new currency. Yet, most organizations struggle with fragmented data spread across multiple systems like SAP, Salesforce, Oracle, and more. Rialtes, as a certified SAP partner, offers cutting-edge SAP Datasphere services to consolidate and harmonize your enterprise data, unlocking real-time AI-powered insights that drive value and innovation.</p>
                        <p className="xl:text-[22px] text-[16px] font-normal leading-[19px] xl:leading-[30px] xl:w-[68%] w-[96%] xl:mt-[30px] mt-[19px]">With deep expertise in SAP Datasphere and AI-led data architecture, we turn your data sprawl into a powerful, unified asset — creating a future-ready, intelligent enterprise.</p>
                    </div>
                </div>
            </section>

            {/* why rialtes section */}
            <WhyRialtesSection />

            {/* Build Intelligent Section */}
            <BuildIntelligentSection />

            {/* industry accelerators section */}
            <IndustryAcceleratorsSection />
            {/* Intelligent Automative Section */}
            <IntelligentAutomativeSection />
            {/* AI Ready Manufacturing Section */}
            <AIReadyManufacturingSection />
            {/* OmnichannelSmartEducationSection */}
            <OmnichannelSmartEducationSection />
            {/* ai powered hr analytics section */}
            <AiPoweredHRAnalyticsSection />
            {/* sap ariba section */}
            <SapAribaSection />
            {/* sap hana section */}
            <SapHanaSection />
            {/* sap success factors */}
            <SapSucessFactorSection />
            {/* SalesforceSap section */}
            <SalesforceSap />
            {/* advanced data visualization */}
            <AdvancedDataSection />
            {/* ai powered section */}
            <AIPoweredUseSection />

            {/* Global Presence Section */}
            <GlobalPresenceSection />
            {/* Contact Form */}
            <div
                className="
              xl:container
              mx-[35px] xl:mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]
              text-[#000000] pb-10"
            >
                <ContactForm title={'Ready to Transform Your Data Landscape?'} subtitle={"Rialtes is here to guide you on every step of your AI and data consolidation journey — from strategy to execution to AI insights that create real business value. "} subtitle1={"Contact us today for a personalized consultation and see how SAP Datasphere can redefine your enterprise!"} className={"max-w-[66rem] xl:font-normal xl:text-[60px] text-[26px] xl:leading-[73px] leading-[32px] mt-[52px] xl:mt-[89px]"} />
            </div >
        </>
    )
}