
"use client";
import ContactForm from "@/app/components/contactform";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";
import Image from "next/image";
import Link from "next/link";
import UnorderedList from "@/app/components/unorderedList";
import Script from "next/script";
export default function DemandPlusSection() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.rialtes.com/insights/case-studies/empowering-a-leading-roofing-manufacturer-with-self-service-order-prioritization-using-sap-fiori/"
        },
        "headline": "Case Study: Empowering Roofing Manufacturer with SAP Fiori for Self-Service Sales Order Prioritization",
        "description": "Discover how a top roofing manufacturer used SAP Fiori for self-service sales order prioritization, cutting 150+ manual adjustments daily and boosting accuracy.",
        "image": "https://rialtes.netlify.app/images/case-studies/fiori-banner.webp",
        "author": {
            "@type": "Organization",
            "name": "Rialtes"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Rialtes",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.rialtes.com/images/homepage/logo.svg"
            }
        },
        "articleSection": "Case Studies",
        "datePublished": "2025-05-29"
    }
    const services = [
        {
            id: 1,
            title: "SAP S/4 HANA Integration with Mulesoft",
            description:
                "Seamless ERP Integrations Across SAP, Oracle, and Kinaxis",
            knowMore: '/solutions/integration/mulesoft-salesforce'
        },
        {
            id: 2,
            title: "Oracle EBS Integration",
            description:
                "Extend Kinaxis planning to Oracle-based environments for hybrid ERP landscapes.",
            knowMore: '/solutions/enterprise-platforms/oracle-ebs-consulting'
        },
        {
            id: 3,
            title: "SAP BTP",
            description:
                "Unifying Planning and Production with Seamless ERP Integrations",
            knowMore: '/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services'
        },
    ];
    const endToEndData = [
        "Kinaxis License Advisory & Value Assessment",
        "Solution Architecture & Design",
        "Rapid Implementation & Process Configuration",
        "Quality Assurance, Testing & User Training",
        "Integration with SAP S/4 HANA, Oracle EBS & Non-SAP Systems",
        "Post-Go-Live Support & Continuous Process Optimization",
    ]
    const supplyChain = [
        "Demand Planning & Forecasting",
        "Supply Planning & Inventory Management",
        "Sales & Operations Planning (S&OP)",
        "Capacity & Production Planning",
        "Supplier Collaboration & Risk Management",
        "Distribution & Logistics Planning",
    ]
    const salesData = [
        "Align demand and supply plans in real-time.",
        "Balance financial goals and operational constraints.",
        "Create what-if scenarios and evaluate trade-offs instantly.",
        "Enhance cross-functional collaboration across sales, supply chain, and finance.",
    ]
    const inventeryOptimizationData = [
        "End-to-end visibility across multi-echelon inventory.",
        "Right-sizing inventory levels to balance service and cost.",
        "Dynamic inventory policies based on real-time demand and supply signals.",
    ]
    const enterpriseSchedulingData = [
        "Finite capacity scheduling for manufacturing and production.",
        "Optimized allocation of resources and materials.",
        "Real-time adjustments based on disruptions and priority changes.",
    ]
    const scenarioData = [
        "Model complex supply chain scenarios (supplier delays, demand surges, production downtimes).",
        "Evaluate impacts in real-time across financials, inventory, and operations.",
        "Enable leadership teams to make confident, data-driven decisions.",
    ]
    const seamlessIntegrationData = [
        "SAP S/4 HANA and ECC",
        "Oracle EBS and Cloud ERP",
        "Legacy and non-SAP systems",
    ]
    const rialtesStrongData = [
        "Custom apps and workflows on BTP.",
        "Real-time API management and orchestration.",
        "Advanced analytics and AI integrations.",
    ]
    const agentChatData = [
        "Rapid deployment within minutes.",
        "Secure, role-based access.",
        "Case, order, and issue delegation by type (orders, inventory, delays).",
        "Fully integrated with Salesforce and SAP environments.",
    ]
    const leadingData = [
        "Predictive analytics and machine learning models.",
        "Integrated AI for demand sensing and forecasting.",
        "Real-time risk assessment and mitigation.",
    ]
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Kinaxis RapidResponse for Agile SCM with Rialtes DemandPlus"
                description="Reimagine resilient supply chains with Kinaxis RapidResponse and Rialtes’ DemandPlus—smart SCM solutions for agility, speed, and precision."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/"
            />
            <Script
                id="schema-demandplus"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative group overflow-hidden h-[435px] lg:h-[650px]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/banner.webp"
                        alt="kinaxis banner"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110 object-cover"
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/banner-mobile.webp"
                        alt="kinaxis banner"
                        fill
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110 object-cover"
                        sizes="100vw" />
                </div>
                <div className="h-full relative custom-container xl:!pr-0  mr-0">
                    <div className="grid xl:grid-cols-12  grid-cols-1 gap-2 mt-20">
                        <div className="xl:col-span-7 md:col-span-2 col-span-12">
                            <h3 className="text-white xl:text-[24px]  font-bold mb-2">DemandPlus</h3>
                            <h1 className="text-white leading-tight mt-5 pr-14 xl:pr-0 md:text-[42px] 4xl:text-[60px] xl:text-[45px] text-[26px]">
                                Transform Your Supply Chain with Rialtes ‘DemandPlus’ for Kinaxis RapidResponse
                            </h1>
                        </div>
                        <div className="xl:col-span-7 col-span-12">
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="custom-container xl:!pr-0">
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-24 mt-10">
                    <div className="xl:col-span-8 xl:pr-0 pr-10">
                        <h2 className="leading-tight md:text-[42px] 4xl:text-[60px] xl:text-[40px] text-[26px]">Agility, Accuracy, and Resilience in Supply Chain — Powered by Kinaxis and Rialtes</h2>
                        <p className="mt-12">In today’s volatile and complex supply chain landscape, businesses need real-time visibility, agile planning, and predictive insights to stay competitive. Rialtes’ DemandPlus Services, built around Kinaxis RapidResponse, deliver end-to-end supply chain transformation, enabling companies to plan, monitor, and respond to supply chain dynamics in real-time. </p>
                        <p className="mt-8 pb-16">As a certified Kinaxis and SAP partner with offices in United States, Canada, India, and Singapore, and a team of highly certified Kinaxis experts, Rialtes helps clients leverage RapidResponse to unlock connected, intelligent, and resilient supply chains — ready for tomorrow’s challenges.</p>
                    </div>
                    <div className="xl:col-span-4"></div>
                </div>
            </section>
            <section className="relative xl:h-[700px] group overflow-hidden">
                {/* Desktop Image */}
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/demandplus-desktop.webp"
                        alt="demandplus-desktop"
                        className="transform transition-transform duration-500 group-hover:scale-110 object-cover"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                {/* Mobile Image */}
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/realtes-demadplus-mobile.webp"
                        alt="realtes-demadplus-mobile"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-[400px] object-cover"
                        priority
                    />
                </div>
                {/* Content Block */}
                <div className={`custom-container z-10 relative xl:absolute xl:top-[45%] top-[-100px]  xl:-translate-y-1/2`}>
                    <div className="bg-[#016FBE] bg-opacity-90 text-white p-[20px] md:p-8 xl:w-[720px] xl:pb-20 4xl:pb-20 pb-32">
                        <h3 className="font-light xl:text-[30px] text-[18px]">Introducing</h3>
                        <h3 className="4xl:text-[50px] xl:text-[40px] text-[23px] max-[350px]:text-[20px] leading-[60px]">Rialtes DemandPlus</h3>
                        <h3 className="4xl:text-[36px] xl:text-[25px] text-[22px] mt-5">End-to-End Kinaxis Services</h3>
                        <p className="mt-8 4xl:text-[22px] text-[16px] leading-tight font-normal">
                            Our DemandPlus suite offers a holistic approach to deploying Kinaxis RapidResponse, combining:
                        </p>
                        <UnorderedList arrName={endToEndData} ulClassName="list-disc leading-tight xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 mt-5  xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px] " />
                        <div className="mt-5 absolute">
                            <LearnMore bgcolor="#134874" bordercolor="#134874" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-[-81px] sticky mt-[-7rem] md:mt-[-7rem] mx-[35px] xl:mx-0 z-[20]">
                <div className="col-span-4"></div>
                <div className="col-span-7 bg-[#163055] p-8">
                    <p className="4xl:text-[26px] text-[18px] text-white leading-tight font-normal xl:pr-10">From strategy to execution, Rialtes enables a seamless and accelerated journey to Kinaxis-driven supply chain transformation.</p>
                </div>
                <div className="col-span-1"></div>
            </div>
            <section className="relative group overflow-hidden xl:mt-16 xl:mr-[142px]">
                <div className="w-full xl:h-[1046px] ">
                    <div className="xl:block hidden">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/why-ki-desktop.webp"
                            alt="Kinaxis RapidResponse image"
                            fill
                            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                            priority
                            sizes="100vw"
                        />
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/why-ki-mobile.webp"
                            alt="Kinaxis RapidResponse image"
                            priority
                            width={0}
                            height={0}
                            className="w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                            sizes="100vw"
                        />
                    </div>
                    <div className="absolute  text-white grid lg:grid-cols-12 grid-cols-12 xl:top-[25rem] top-[260px] sm:top-[36rem] :">
                        <div className="lg:col-span-6 col-span-10 bg-[#0B3A66] pl-[35px] xl:py-16 py-8 xl:pr-20  xl:mr-0 custom-container">
                            <h2 className="lg-4 leading-tight 4xl:text-[60px] xl:text-[45px] text-[26px]">Why Kinaxis RapidResponse?</h2>
                            <p className="font-light xl:pr-0 xl:mt-10 mt-5">
                                Kinaxis RapidResponse is a cloud-based supply chain planning platform that delivers:
                            </p>
                        </div>
                        <div className="lg:col-span-6"></div>
                    </div>
                </div>
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 relative xl:-mt-10 mt-[-40px]  xl:mr-[50px] custom-container xl:!pr-16">
                    {[
                        "Concurrent planning for synchronized supply chain decisions.",
                        "Real-time visibility across demand, supply, inventory, and capacity.",
                        "Rapid scenario modeling for agile responses to disruptions.",
                        "Seamless collaboration across supply chain, operations, and finance.",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className=" shadow-md p-8 text-black border-black border hover:bg-[#D9F2FF] transition-all bg-white">
                            <p className="font-semibold 4xl:text-[24px] text-[20px] xl:text-[15px]">{item}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mt-20 custom-container xl:!pr-0 max-md:px-0">
                <div className="grid xl:grid-cols-12">
                    <div className="col-span-6">
                        <h2 className="leading-tight pr-16 4xl:text-[60px] xl:text-[40px] text-[26px] max-md:px-[35px]">Supply Chain Planning Reimagined with Rialtes and Kinaxis</h2>
                    </div>
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="col-span-5  xl:mx-0">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/supply-desktop.webp"
                            alt="supply image"
                            priority
                            className="w-full 4xl:mt-16 xl:mt-8 mt-10 relative xl:h-full  4xl:h-auto max-md:px-[35px]"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="col-span-7 bg-[#006FBE] 4xl:mt-[-2rem] xl:mt-[-1rem] mt-[-4rem] text-white 4xl:ml-[-90px] xl:ml-[-108px] 4xl:mb-[75px] xl:pl-[10rem] px-[35px] pb-16  xl:pb-20">
                        <h3 className="4xl:pt-20 xl:pt-10 pt-24 text-[22px] 4xl:text-[30px] 4xl:pr-[20rem] xl:pr-[14rem]">End-to-End Supply Chain Planning Capabilities:</h3>
                        <UnorderedList arrName={supplyChain} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-2 font-light marker:font-bold marker:text-2xl pl-5 mt-8 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="mt-6 absolute">
                            <LearnMore bgcolor={"#134874"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-24 custom-container xl:!pr-0">
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20">
                    <div className="xl:col-span-6 order-1 xl:order-2">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/sales-operation-desktop.webp"
                            alt="Sales and Operations"
                            priority
                            className="w-full h-full"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="xl:col-span-5 order-2 xl:order-1">
                        <h2 className="leading-tight mt-10 xl:mt-0 pr-10 xl:pr-0 4xl:text-[60px] xl:text-[45px] text-[26px]">Sales & Operations Planning (S&OP)</h2>
                        <h3 className="4xl:text-[42px] xl:text-[32px] text-[22px] xl:mt-10 mt-5 leading-tight font-semibold">Drive Cross-Functional Alignment</h3>
                        <p className="mt-5 font-normal 4xl:text-[20px] text-[16px] xl:text-[18px]">
                            Rialtes leverages Kinaxis to deliver best-in-class S&OP capabilities, enabling companies to:
                        </p>
                        <UnorderedList arrName={salesData} ulClassName="list-disc leading-tight xl:space-y-3 font-normal marker:font-bold marker:text-2xl pl-5 xl:mt-8 mt-5" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                    </div>
                </div>
            </section>
            <p className="bg-[#163055] p-8  xl:!mx-[280px]  z-[15] max-md:mx-[35px]  text-white 4xl:mt-[-50px] mt-10 relative 4xl:text-[26px] xl:text-[15px] text-[18px] font-normal">Outcome: Greater forecast accuracy, lower inventory, and improved service levels.</p>
            <section className="relative w-full xl:mt-[-53px] mt-16">
                <div className="w-full xl:h-[1083px]">
                    <div className="xl:block hidden">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/inventery-desktop.webp"
                            alt="inventery image"
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/inventery-mobile.webp"
                            alt="inventery image"
                            priority
                            width={0}
                            height={0}
                            className="w-full"
                            sizes="100vw"
                        />
                    </div>
                    <div className="absolute text-white grid xl:grid-cols-12 grid-cols-1 xl:top-[34rem] top-[23rem] md:top-[46rem]">
                        <div className="xl:col-span-7  custom-container xl:!pr-0 pl-[35px] xl:py-16 py-8">
                            <h2 className="mb-4 leading-tight 4xl:text-[60px] xl:text-[45px] text-[26px]">Inventory Optimization & Enterprise Scheduling</h2>
                            <h3 className="4xl:text-[42px] xl:text-[32px] text-[22px] mt-5">Maximize Efficiency</h3>
                            <p className="font-light xl:pr-24 pr-20 mt-5 leading-tight">
                                With Kinaxis, Rialtes helps clients achieve precision inventory management and production scheduling:
                            </p>
                        </div>
                        <div className="xl:col-span-5"></div>
                    </div>
                </div>
            </section>
            <div className="grid xl:grid-cols-12 grid-cols-1 absolute xl:mt-[-100px] mt-[-75px] md:mt-0 custom-container">
                <div className="xl:col-span-5 col-span-12 bg-[#163055] px-10 py-12 text-white">
                    <h3>Inventory Optimization</h3>
                    <UnorderedList arrName={inventeryOptimizationData} ulClassName="list-disc leading-tight xl:space-y-5 font-normal marker:font-bold marker:text-2xl pl-5 xl:mt-8 mt-5" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                </div>
                <div className="xl:col-span-1 col-span-12 bg-[#163055] flex xl:items-center xl:justify-center">
                    <div className="border-b border-white mx-[35px] xl:mx-0 xl:border-b-0 xl:border-r xl:h-[70%] xl:w-auto"></div>
                </div>
                <div className="xl:col-span-5 col-span-12 bg-[#163055] px-10 py-12 text-white">
                    <h3>Enterprise Scheduling</h3>
                    <UnorderedList arrName={enterpriseSchedulingData} ulClassName="list-disc leading-tight xl:space-y-5 font-normal marker:font-bold marker:text-2xl pl-5 xl:mt-8 mt-5" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                </div>
                <div className="xl:col-span-3 col-span-12"></div>
            </div>
            <section className="relative h-auto xl:mt-[17rem] custom-container mt-[38rem] xl:!pr-0 max-md:px-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/scenario-desktop.webp"
                        alt="scenario image"
                        className="w-full"
                        priority
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/scenario-mobile.webp"
                        alt="scenario image"
                        className="object-cover w-full"
                        priority
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-1 absolute max-md:px-[35px] top-0 xl:pl-20 4xl:pt-20 pt-[25rem] md:pt-[16rem] xl:pt-10">
                    <div className="xl:col-span-5">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">Scenario Planning</h2>
                        <h3 className="4xl:text-[42px] xl:text-[30px] text-[22px] mt-5 font-semibold leading-tight">Prepare for Every Possibility</h3>
                        <p className="xl:mt-8 mt-5 font-medium leading-tight 4xl:text-[20px] text-[16px]">What-if analysis and scenario simulation are at the heart of Kinaxis RapidResponse, and Rialtes brings the expertise to fully leverage them:</p>
                        <UnorderedList arrName={scenarioData} ulClassName="list-disc xl:space-y-3 font-medium marker:font-bold marker:text-2xl pl-5  mt-8 leading-tight" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="mt-6 4xl:mt-10 absolute">
                            <LearnMore bgcolor={"#134874"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-[38rem] xl:mt-0 md:mt-0">
                <div className="grid xl:grid-cols-12 grid-cols-1 mx-[35px] xl:mx-0">
                    <div className="col-span-6">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/seamless-desktop.webp"
                            alt="seamless image"
                            className="object-cover w-full h-full"
                            priority
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="col-span-6 xl:bg-[#EAEAEA] xl:p-20 pt-8 xl:pr-[120px]">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">Seamless Integration with SAP, Oracle, and Non-SAP Systems</h2>
                        <h3 className="mt-10 4xl:text-[42px] xl:text-[32px] text-[22px] font-semibold leading-tight">Integrate Kinaxis with Your Existing ERP Ecosystem</h3>
                        <p className="mt-5 xl:pr-20 pr-10 font-normal leading-tight 4xl:text-[20px] text-[16px]">Rialtes delivers robust integration services using SAP Cloud Platform Integration (SAP CPI) and Kinaxis-certified connectors:</p>
                        <UnorderedList arrName={seamlessIntegrationData} ulClassName="list-disc leading-normal xl:space-y-3 font-normal marker:font-bold marker:text-2xl pl-5 mt-5  xl:pr-16" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                    </div>
                </div>
            </section>
            <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-[-80px] mt-10 mx-[35px] xl:mx-0">
                <div className="col-span-6"></div>
                <div className="col-span-5">
                    <p className="4xl:text-[26px] text-[18px] bg-[#163055] p-8 text-white font-normal 4xl:pr-32 xl:pl-20 leading-tight">Our pre-built accelerators and custom APIs ensure real-time data flow for synchronized planning.</p>
                </div>
                <div className="col-span-1"></div>
            </div>
            <section className="custom-container xl:!pr-0 max-md:px-0">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:order-2 order-1 col-span-6">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/btp-desktop.webp"
                            alt="Rialtes’ Strong SAP BTP"
                            className="object-cover w-full h-full"
                            priority
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="xl:order-1 order-2 col-span-6">
                        <div className="bg-[#006FBE] xl:p-20 p-10 text-white xl:pb-32 pb-[20rem]">
                            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">Rialtes’ Strong SAP BTP Competency</h2>
                            <h3 className="4xl:text-[42px] xl:text-[30px] text-[22px] mt-5 leading-tight">Extending S/4 HANA Value</h3>
                            <p className="mt-5 font-light leading-tight">
                                Rialtes brings deep expertise in SAP Business Technology Platform (BTP) to extend,
                                customize, and enhance S/4 HANA integration with Kinaxis:
                            </p>
                            <UnorderedList arrName={rialtesStrongData} ulClassName="list-disc leading-normal xl:space-y-4 font-light marker:font-bold marker:text-2xl pl-5 mt-8 xl:pr-16" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            <div className="mt-5 absolute">
                                <LearnMore bgcolor={"#134874"} bordercolor={"#006FBE"} />
                            </div>
                        </div>
                        <p className="4xl:text-[26px] text-[18px] bg-[#163055] xl:p-8 p-6 xl:pl-14 pl-10 4xl:pr-32 text-white font-light mx-[35px] xl:mx-0 mt-[-172px] xl:mt-0 leading-tight">Our certified BTP consultants ensure secure, scalable, and future-proof solutions for every client.</p>
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/bringing-desktop.webp"
                        alt="Rialtes’ Strong SAP BTP"
                        className="object-cover w-full xl:h-[885px]"
                        priority
                        width={0}
                        height={0}
                        sizes="100vw" />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/bringing-mobile.webp"
                        alt="Rialtes’ Strong SAP BTP"
                        className="w-full h-[1233px]"
                        priority
                        width={0}
                        sizes="100vw"
                        height={0} />
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-1 custom-container mx-[35px] xl:mx-0 absolute top-0">
                    <div className="col-span-7 pt-20">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">Bringing Together Kinaxis and the Broader Enterprise Ecosystem</h2>
                        <h3 className="4xl:text-[42px] xl:text-[32px] text-[22px] mt-10 font-bold leading-tight pr-20">Related SAP and Procurement Solutions with Rialtes:</h3>
                    </div>
                </div>
                <div className="custom-container mx-[35px] xl:mx-0 xl:mr-[464px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 absolute bottom-[-3rem] z-[9]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border hover:bg-[#D9F2FF] p-10 flex flex-col xl:h-[425px] transition-all bg-white shadow-lg">
                            <h3 className="mb-8 text-[#0A6BB8] font-semibold leading-tight">{service.title}</h3>
                            <p className="text-[#000000] leading-tight xl:text-[24px] text-[16px]">{service.description}</p>
                            <div className="xl:bottom-[30px] xl:absolute">
                                <Link
                                    href={service.knowMore}
                                    className={`inline-block  xl:text-[20px] text-[16px] hover:bg-[#134874] bg-[#134874] border-[1px] border-[solid] font-semibold text-white py-3 px-8 transition duration-300 mt-6`}>
                                    Know More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="relative xl:h-[700px]">
                {/* Desktop Image */}
                <div className="hidden xl:block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/sap-ariba-desktop.webp"
                        alt="sap-ariba"
                        className="object-cover"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                {/* Mobile Image */}
                <div className="block xl:hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/sap-ariba-mobile.webp"
                        alt="sap-ariba"
                        className="w-full h-auto"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                    />
                </div>
                {/* Text Block */}
                <div className={`custom-container text-white xl:absolute xl:top-[20%] relative xl:w-[62%] w-full z-10 max-md:px-0`}>
                    <div className="bg-[#073259] xl:p-16 p-10">
                        <h2 className="leading-tight pr-20 xl:pr-0 4xl:text-[60px] xl:text-[50px] text-[26px]">SAP ARIBA & Procurement</h2>
                        <h3 className="xl:text-[42px] text-[22px] font-semibold leading-tight mt-5 pr-16 xl:pr-0">
                            Direct/indirect procurement visibility connected to supply chain plans.
                        </h3>
                        <h3 className="mt-5 leading-tight">SAP CPI — Connect S/4 HANA with Non-SAP Systems</h3>
                        <p className="mt-5 mb-5 font-normal leading-tight">
                            Rialtes leverages SAP CPI to connect S/4 HANA, Kinaxis, and other enterprise systems for a fully synchronized supply chain.
                        </p>
                        <div className="absolute">
                            <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-[#555555] mt-0">
                <div className="xl:pt-64 pt-32 mx-[35px] xl:mx-0">
                    <div className="xl:block hidden">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/enhance-desktop.webp"
                            alt="enhance image"
                            className="w-[1360px] xl:h-[612px] custom-container"
                            priority
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/enhance-mobile.webp"
                            alt="enhance image"
                            className="w-full"
                            priority
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                </div>
                <div className="custom-container mx-[35px] grid xl:grid-cols-12 grid-cols-1 text-white mt-16 xl:gap-20">
                    <div className="col-span-6">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">Enhance Supply Chain Conversations with AgentChat</h2>
                        <h3 className="mt-10 xl:text-[42px] text-[22px] leading-tight font-bold">WhatsApp for Supply Chain Teams</h3>
                    </div>
                    <div className="col-span-6">
                        <h3 className="mt-8 xl:mt-0 pr-16 xl:pr-0 4xl:text-[30px] xl:text-[25px] text-[20px] leading-tight">Introducing AgentChat Your Conversational AI for Supply Chain</h3>
                        <p className="mt-5 font-normal">AgentChat is a bi-directional WhatsApp conversational app, enabling instant collaboration across supply chain teams.</p>
                        <h3 className="xl:text-[24px] text-[18px] mt-10">AgentChat Highlights:</h3>
                        <UnorderedList arrName={agentChatData} ulClassName="list-disc leading-tight xl:space-y-4 mb-10 font-light marker:font-bold marker:text-2xl pl-5 mt-5 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="xl:mt-10">
                            <Link
                                href="/products/agentchat"
                                className="xl:text-[20px] text-[16px] hover:bg-[#ffffff] bg-[#134874] hover:text-[#134874] font-semibold text-white py-3 px-8 transition duration-300 mt-6">
                                Know More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="custom-container mx-[35px] xl:mx-0 grid xl:grid-cols-12 grid-cols-1 mt-16">
                    <div className="col-span-9 bg-[#068EDA] p-8 pl-12 text-white">
                        <p className="4xl:text-[26px] text-[18px] font-normal xl:pr-32 4xl:pr-16 leading-tight">Now, connect your supply chain teams, suppliers, and partners with a familiar and powerful interface — WhatsApp + ERP + CRM.</p>
                    </div>
                </div>
            </div>
            <section className="custom-container relative xl:!pr-0 max-md:px-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/leading-desktop.webp"
                        alt="Leading the Future"
                        className=" w-full"
                        priority
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/leading-mobile.webp"
                        alt="Leading the Future"
                        className="object-cover w-full h-[970px]"
                        priority
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                </div>
                <div className="grid xl:grid-cols-12  grid-cols-1 absolute 4xl:top-40 xl:top-[6rem] top-[20rem] text-white">
                    <div className="col-span-6 xl:px-16 px-14">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px] 4xl:pr-20">Leading the Future with AI, Data, and Integrated Planning</h2>
                        <p className="mt-8 font-light 4xl:text-[20px] text-[16px]">At Rialtes, we go beyond standard implementations — combining AI, data science, and advanced planning tools to create responsive and resilient supply chains.</p>
                        <UnorderedList arrName={leadingData} ulClassName="list-disc leading-tight xl:space-y-4 font-light marker:font-bold marker:text-2xl pl-5 mt-5  xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="absolute 4xl:mt-16  mt-4">
                            <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                    <div className="col-span-6"></div>
                </div>
            </section>
            {/* contact form */}
            <div className="mt-20 custom-container text-black pb-20" >
                <ContactForm title={'Start Your Kinaxis Journey with Rialtes DemandPlus Today'} subtitle={'Ready to transform your supply chain planning and resilience with Kinaxis RapidResponse? Let Rialtes DemandPlus guide you through every step — from strategy to execution.'} className={"4xl:max-w-[60rem] xl:max-w-[40rem] leading-tight text-[26px] font-light 4xl:text-[60px] xl:text-[40px] pr-10 xl:pr-0"} />
            </div >
        </div>
    );
}
