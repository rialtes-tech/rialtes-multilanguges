"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import ContactForm from "../../../components/contactform";
import LearnMore from "../../../components/learnMore";
import UnorderedList from "@/app/components/unorderedList";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SAP Managed Services Provider",
    "description": "As a next-gen SAP Managed Services Provider, Rialtes future-proofs your SAP stack with AI, automation, cloud-native apps, and continuous innovation.",
    "serviceType": "SAP Managed Services",
    "provider": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg"
    },
    "areaServed": [
        {
            "@type": "Place",
            "name": "India"
        },
        {
            "@type": "Place",
            "name": "United States"
        },
        {
            "@type": "Place",
            "name": "Canada"
        },
        {
            "@type": "Place",
            "name": "Singapore"
        },
        {
            "@type": "Place",
            "name": "Europe"
        }
    ],
    "url": "https://www.rialtes.com/services/business-transformation/sap-managed-services-provider",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SAP Services Catalog",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "SAP S/4HANA Support"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "SAP SuccessFactors Support"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "SAP BTP Services"
                }
            }
        ]
    }
}
const sapCertificationData = [
    "SAP S/4HANA (Finance, Logistics, Manufacturing, Sales & Distribution, Procurement)",
    "SAP SuccessFactors (EC, LMS, Talent, Onboarding, Compensation, Workforce Analytics)",
    "SAP Ariba (Strategic Sourcing, Contracts, Buying & Invoicing)",
    "SAP Business Technology Platform (BTP) — Integration, Extensions, AI/ML, Analytics, App Development",
]
const sapCertificationData2 = [
    "SAP CPI & SAP Integration Suite",
    "SAP Fiori and UI5 Development",
    "SAP Signavio for Business Process Intelligence",
    "SAP Datasphere and SAP Analytics Cloud",
    "SAP ABAP and ABAP on Cloud",
    "SAP Joule (AI Assistant) enablement",
    "SAP Basis & Security",
]
const sapFeatureGrid = [
    {
        title: "Certified Expertise On-Demand",
        description: "Rapid access to specialized skills without hiring overheads.",
    },
    {
        title: "Assurance of Quality and Best Practices",
        description: "Every solution is aligned to SAP’s latest standards and innovations.",
    },
    {
        title: "Future-Proof Solutions",
        description:
            "Deep understanding of the SAP roadmap ensures your investments are protected and scalable.",
    },
    {
        title: "Compliance, Governance, and Risk Mitigation",
        description:
            "Solutions built right the first time, adhering to global compliance and SAP guidelines.",
    },
];
const futureData = [
    " Business process optimization and issue resolution.",
    "System performance monitoring and enhancements.",
    " Security, compliance, and risk management.",
    "Continuous improvement of system configurations and workflows.",
]
const revolutionizeData = [
    "Role-based custom app development and enhancement.",
    "Mobile-responsive designs for field and remote teams.",
    "Fiori launchpad personalization and optimization.",
    "End-user adoption and training to maximize ROI.",
]
const unleashData = [
    "Low-code/no-code application development with SAP Build.",
    "AI/ML integrations using SAP AI Core.",
    "Event-driven and API-based workflows.",
    "Cloud-native extensions that are upgrade-safe and scalable.",
]
const seamlessData = [
    "Integrate SAP S/4HANA with SAP and non-SAP systems — Salesforce, Oracle, Workday, ZOHO.",
    "API and event-driven integrations for real-time data flow.",
    "Secure and scalable architecture for high-volume transactions.",
    "Post-integration monitoring, maintenance, and support.",
]
const codeData = [
    " Develop and deploy upgrade-safe ABAP extensions.",
    "RAP-based RESTful services.",
    "Cloud and hybrid environment readiness.",
    "End-to-end ABAP development lifecycle management.",
]
const intelligentData = [
    "Real-time dashboards, KPIs, and executive reporting.",
    "Planning and predictive analytics.",
    "Datasphere for unified, governed data landscapes.",
    "AI-powered insights and what-if scenarios for better forecasting.",
]
const winningSectionData = [
    "Global HR process optimization.",
    "Ongoing configuration, compliance updates.",
    "Talent management, recruitment, and performance solutions.",
    "Seamless integration with SAP S/4HANA and third-party systems.",
]
const sapAribaData = [
    "Ariba Network onboarding and integration.",
    "Catalog, sourcing, and contract management.",
    "Guided buying and invoice automation.",
    "Risk management and compliance assurance.",
]
const sapDatasphereData = [
    "Data federation and virtualization.",
    "Secure data sharing and collaboration.",
    "Unified business data modeling.",
    "AI/ML-enabled insights at scale.",
]
const sapTransformationSteps = [
    {
        step: 1,
        title: "Discover",
        description: "Process mining and value assessments.",
    },
    {
        step: 2,
        title: "Prepare",
        description: "Strategy, governance, and scope definition.",
    },
    {
        step: 3,
        title: "Explore",
        description: "Fit-to-standard analysis and future-state design.",
    },
    {
        step: 4,
        title: "Realize",
        description: "Rapid configuration and development aligned to KPIs.",
    },
    {
        step: 5,
        title: "Deploy",
        description: "Smooth cutover, training, and enablement.",
    },
    {
        step: 6,
        title: "Run",
        description: "Post-go-live hypercare and continuous improvement.",
        plOverride: "xl:pl-24",
    },
];
const superchargeData = [
    "AI-driven employee experience and HR recommendations.",
    "Automated document handling and case resolution.",
    "Conversational AI for managers and employees.",
    "Seamless integration with SAP S/4HANA and SuccessFactors.",
]
const btpData = [
    "Fast-track application development using SAP Build.",
    "AI/ML-powered extensions using SAP AI Core.",
    "Seamless APIs and integrations through API Hub.",
    "Event Mesh and Graph for real-time connectivity. ",
    "Full governance, security, and compliance in the cloud.",
]
const migrateData1 = [
    "End-to-end secure migration strategy.",
    "Data cleansing, transformation, and migration.",
    "Business process mapping and optimization.",
    "SAP CPI-based integrations for seamless workflows.",
]
const migrateData2 = [
    "Standardized HR process setup in SuccessFactors.",
    "Accurate, compliant data migration.",
    "Real-time integration and ongoing support.",
    "Localization and global compliance readiness.",
]
const whyPartnerData = [
    "Global SAP Certified Partner with a proven delivery record.",
    "24/7 SAP managed services for uninterrupted operations.",
    "SAP BTP, Integration, and AI Center of Excellence.",
    "Dedicated customer success managers. ",
    "Flexible, outcome-based engagement models.",
]
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="SAP Managed Services Provider Driving ROI and Agility | Rialtes"
                description="As a next-gen SAP Managed Services Provider, Rialtes future-proofs your SAP stack with AI, automation, cloud-native apps, and continuous innovation"
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/services/business-transformation/sap-managed-services-provider/"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            {/* hero section */}
            <section className="relative  xl:pb-40 md:pb-[10rem] pb-20">
                <div className="md:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/banner.webp"
                        alt="SAP Digital Desk image"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        sizes="100vw" />
                </div>
                <div className="md:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/banner.webp"
                        alt=" SAP Digital Desk image"
                        fill
                       style={{ objectFit: "cover" }}

                        priority
                        sizes="100vw"
                    />
                </div>

                <div
                    className="relative
        custom-container"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 mt-20 md:text-black text-white">
                        <div className="xl:col-span-6  xl:pt-40 pt-20 md:pr-80 xl:pr-0">
                            <h3 className="text-[20px] xl:text-[24px] font-bold mb-2 break-words">
                                SAP Digital Desk
                            </h3>
                            <h2 className="leading-tight break-words xl:mt-10 mt-5 pr-32 md:pr-0 xl:pr-0 4xl:text-[56px] text-[26px] xl:text-[50px]">
                                Maximize Your SAP Investment with Always-On Expertise
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* page description */}
            <section className="mt-20 custom-container">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-10 col-span-12">
                        <h1 className="leading-tight 4xl:text-[56px] text-[26px] xl:text-[50px]">
                            Reimagine SAP Support with Rialtes Managed Services
                        </h1>
                        <p className="xl:text-[22px] text-[16px] mt-5 xl:pr-32">At Rialtes, we empower organizations to run their SAP landscapes more efficiently, securely, and effectively. SAP Digital Desk, our next-gen managed services platform, brings together end-to-end SAP expertise, from stabilization and innovation to continuous optimization, ensuring your SAP systems become a strategic driver for business growth, not just an operational tool.</p>
                        <p className="xl:text-[22px] text-[16px] mt-5 xl:pr-40">As a global SAP-certified partner with a presence in India, the USA, Canada, and Singapore, and a team of top-tier, SAP-certified experts, Rialtes is committed to delivering unparalleled value, agility, and innovation for every client.
                        </p>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                    </div>
                </div>

            </section>

            {/* rialtes 24/7 section */}
            <section className="relative xl:mt-32 mt-10 pb-20 xl:pb-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/global.webp"
                        alt="rialtes 24/7 image "
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/global.webp"
                        alt="rialtes image "
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="h-full relative custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white">
                        <div className="xl:col-span-6 col-span-12 xl:pr-20">
                            <h2 className="4xl:text-[56px] text-[26px] xl:text-[50px]  mt-16 leading-tight">
                                Rialtes’ 24/7 SAP Support That Works Around You
                            </h2>
                        </div>
                        <div className="col-span-1"></div>
                        <div className="xl:col-span-5 col-span-12 xl:mt-16 mt-5">
                            <p className="xl:text-[22px] text-[16px] font-medium">At Rialtes, we know that SAP systems are mission-critical — downtime is not an option. That’s why our SAP Digital Desk is built on a global support model that delivers uninterrupted 24x7 coverage through a flexible combination of Onsite, Hybrid, and Fully Offshore delivery options to meet your unique operational needs and cost expectations.</p>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white  items-center xl:pt-20 pt-10">
                        <div className="xl:col-span-5 col-span-12">
                            <h3 className="text-[20px] xl:text-[32px] leading-tight">
                                Our Support Delivery Models
                            </h3>
                        </div>
                        <div className="xl:col-span-7 col-span-12  xl:border-b-2 xl:border-white">
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white pt-10  xl:pb-20">
                        <div className="xl:col-span-6 col-span-12">
                            <h3 className="xl:text-[28px] text-[18px] xl:font-bold font-medium">24x7 “Follow-the-Sun” Global Support</h3>
                            <UnorderedList arrName={["Always-On SAP system monitoring, incident management, and functional/technical support.", "Proactive alerts, real-time resolution, and service continuity — anywhere, anytime."]} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3 xl:pr-20" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            <h3 className="xl:text-[28px] text-[18px] xl:font-bold font-medium xl:pr-20 xl:pt-20 pt-10">Hybrid Delivery Model (Onsite + Offshore)</h3>
                            <UnorderedList arrName={["Strategic blend of onsite expertise and offshore delivery for cost-effective yet personalized support.", "Local leadership and customer-facing consultants backed by offshore SAP CoE teams for scalability."]} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3 xl:pr-20" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            <div className="xl:absolute bottom-[-26px] xl:block hidden">
                                <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                            </div>
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12 mt-10 xl:mt-0">
                            <h3 className="xl:text-[28px] text-[18px] font-bold">Onsite Delivery Model</h3>
                            <UnorderedList arrName={["SAP experts embedded within your business to provide hands-on, real-time collaboration.", "Ideal for high-touch implementations, critical go-lives, and executive stakeholder alignment."]} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            <h3 className="xl:text-[28px] text-[18px] font-bold xl:pt-20 pt-10">Fully Offshore Model</h3>
                            <UnorderedList arrName={["100% remote delivery from our global SAP Centers of Excellence in India and Singapore for optimized costs and continuous delivery.", "Best suited for steady-state AMS (Application Management Services), developments, and enhancements."]} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            <div className="absolute mt-[28px] xl:hidden block">
                                <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* project leadership section */}
            <section className="custom-container xl:mt-32 xl:!pr-0 h-full max-md:px-0 mt-16">
                <div className="md:grid xl:grid-cols-12 grid-cols-1 h-full gap-10">

                    {/* Image first on mobile, second on desktop */}
                    <div className="col-span-7 order-1 xl:order-2 max-md:px-0">
                        <Image
                            src="/images/sap/sap-digital-desk/desktop/project.webp"
                            alt="Project Image"
                            priority
                            className="w-full xl:h-full h-[458px] object-cover"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>

                    {/* Content second on mobile, first on desktop */}
                    <div className="col-span-5 order-2 xl:order-1 mt-10 xl:mt-0 mx-[35px] xl:mx-0 md:mx-0">
                        <h2 className="leading-tight 4xl:text-[56px] text-[26px] xl:text-[50px]">Project Leadership</h2>
                        <p className="mt-5 4xl:pr-40 font-medium">
                            All our engagements are driven by PMP® and Scrum®-certified Project Managers, ensuring that every project is delivered on time, within budget, and aligned to business goals.
                        </p>
                        <UnorderedList arrName={["Agile and Waterfall methodologies are based on business needs.", "Strong governance, communication, and risk management frameworks.", "Transparent, KPI-driven service reporting and business outcome focus."]} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3 4xl:pr-32 font-medium" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px] " />
                        <p className="mt-10 4xl:pr-40 pb-10 font-medium">
                            Our SAP-certified consultants are strategically located across the USA, Canada, and India, giving you the right mix of proximity, cost-efficiency, and expertise.
                        </p>
                        <LearnMore />
                    </div>
                </div>
            </section>

            {/* 150 sap section */}
            <section className="relative  4xl:mt-24 xl:mt-20">
                <div className="xl:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/unmatch.webp"
                        alt="sap section"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/unmatched.webp"
                        alt="sap section"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div
                    className="h-full relative
                    custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-black">
                        <div className="xl:col-span-8 col-span-12 xl:pr-20">
                            <h2 className="text-[25px] 4xl:text-[60px] xl:text-[40px] mt-16 leading-tight">
                                Over 150 SAP Certifications Across Every Major Module
                            </h2>
                        </div>

                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-[#006FBE]  items-center pt-10">
                        <div className="xl:col-span-6 col-span-12">
                            <h3 className="text-[20px] 4xl:text-[30px] xl:text-[25px] leading-tight font-semibold">
                                Our Certified SAP Competency Covers:
                            </h3>
                        </div>
                        <div className="xl:col-span-6 col-span-12  xl:border-b-2 xl:border-black">
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-12 grid-cols-1 text-black xl:pb-20">
                        <div className="xl:col-span-6 col-span-12">
                            <UnorderedList arrName={sapCertificationData} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3 xl:pr-20" liClassName="xl:text-[18x] 4xl:text-[20px] text-[16px]" />
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12  xl:mt-0">
                            <UnorderedList arrName={sapCertificationData2} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3" liClassName="xl:text-[18px] 4xl:text-[20px] text-[16px] " />
                        </div>

                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-[#006FBE]  items-center mt-10 xl:mt-0">
                        <div className="xl:col-span-4 col-span-12">
                            <h3 className="text-[20px] 4xl:text-[30px] xl:text-[25px] leading-tight font-semibold">
                                What This Means for You:
                            </h3>
                        </div>
                        <div className="xl:col-span-8 col-span-12  xl:border-b-2 xl:border-black">
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 text-black xl:mt-16 mt-5 4xl:gap-16 gap-8 xl:pr-40">
                        {sapFeatureGrid.map((item, index) => (
                            <div key={index}>
                                <p className="xl:pb-5 pb-2 4xl:text-[20px] xl:text-[17px] font-bold leading-tight">
                                    {item.title}
                                </p>
                                <p className="xl:text-[18px] 4xl:text-[20px] leading-tight">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="xl:pr-64">
                        <div className="bg-[#163055] p-8 4xl:text-[26px] text-[20px] text-white mt-16 leading-tight">With Rialtes, you’re gaining a long-term partner to drive continuous SAP innovation and value realization.</div>
                    </div>
                </div>
            </section>

            {/* future proof section */}
            <section className="custom-container xl:mt-32 mt-10  xl:!pl-0 !px-0">
                <div className="grid xl:grid-cols-12 grid-cols-1  xl:gap-20">
                    <div className="col-span-6">
                        <Image
                            src="/images/sap/sap-digital-desk/desktop/future.webp"
                            alt=" future proof image"
                            priority
                            className="w-full 4xl:h-full xl:h-[495px]"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="col-span-5 4xl:pr-32 mt-10 xl:mt-0 mx-[35px] xl:mx-0">
                        <h2 className="4xl:text-[56px] text-[26px] xl:text-[40px] leading-tight">Future-Proof Your Core</h2>
                        <h3 className="4xl:text-[36px] text-[22px] mt-5 font-semibold leading-tight">Complete SAP S/4HANA Post-Go-Live Support</h3>
                        <p className="mt-5 font-normal 4xl:text-[20px] xl:text-[18px]">Keep your SAP S/4HANA running at peak performance with our functional, technical, and Basis expertise:</p>
                        <UnorderedList arrName={futureData} ulClassName="list-disc 4xl:space-y-3 xl:space-y-2 marker:font-bold marker:text-2xl pl-5 4xl:mt-10 mt-3 4xl:pr-24" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="4xl:mt-10 xl:mt-2">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </section>

            {/* sap fiori section */}
            <section className="relative mt-5 xl:mt-0  xl:ml-[142px]">
                <div className="md:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/user-exper.webp"
                        alt="GROW with SAP"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="md:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/user-expe.webp"
                        alt="GROW with SAP"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover sm:object-[20%,26%]"
                    />
                </div>
                <div className="relative custom-container xl:!ml-[-110px] max-md:px-0">
                    <div className="grid xl:grid-cols-12 grid-cols-1">
                        <div className="col-span-6">
                            <div className="relative xl:p-12 p-10 mt-40 xl:mt-0">
                                <div className="absolute inset-0 md:bg-[#016FBE] mix-blend-multiply"></div>
                                <div className="relative bg-opacity-80 text-white z-10 rounded-lg">
                                    <h2 className="leading-tight 4xl:text-[56px] text-[26px] xl:text-[45px]">Revolutionize User Experience</h2>
                                    <h3 className="4xl:text-[36px] text-[20px] mt-5 leading-tight font-semibold">SAP Fiori/UI5 — Built for Your Business</h3>
                                    <p className="mt-5 font-normal">Modernize and streamline user interactions with intuitive SAP Fiori/UI5 apps</p>
                                    <UnorderedList arrName={revolutionizeData} ulClassName="list-disc 4xl:space-y-5 marker:font-bold marker:text-2xl pl-5 4xl:mt-10 mt-3" liClassName="4xl:text-[20px] xl:text-[18px] font-normal text-[16px]" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* unleash section */}
            <section className="bg-[#EFEFEF] xl:mt-20 xl:pb-0 custom-container xl:!px-0 h-full max-md:px-0 pb-[5rem]">
                <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-24  xl:!pr-0">
                    <div className="xl:col-span-6 col-span-12 order-1 xl:order-1">
                        <div className="xl:block hidden h-full">
                            <Image
                                src="/images/sap/sap-digital-desk/desktop/unleash.webp"
                                width={950}
                                height={600}
                                priority
                                sizes="100vw"
                                alt="unleash image"
                                className="w-full h-full"
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/sap/sap-digital-desk/mobile/unleash.webp"
                                width={950}
                                height={600}
                                className="w-full"
                                alt="unleash image"
                                priority
                                sizes="100vw"
                            />
                        </div>
                    </div>

                    <div className="xl:col-span-6 col-span-12 order-2 xl:order-1 h-full px-[35px] xl:px-0 md:px-0">
                        <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] mt-10 xl:mt-0 leading-tight 4xl:pt-16 xl:pt-5">
                            Unleash Innovation
                        </h2>
                        <h3 className="4xl:text-[36px]  text-[20px] mt-5 xl:font-bold font-medium  4xl:pr-40 leading-tight">
                            Maximize SAP BTP to Extend and Personalize SAP
                        </h3>
                        <p className="mt-5 leading-tight pr-10 4xl:pr-40 font-normal">
                            Take advantage of SAP Business Technology Platform (BTP) to build innovations that drive competitive advantage:
                        </p>
                        <UnorderedList arrName={unleashData} ulClassName="list-disc 4xl:space-y-5 4xl:text-[20px] xl:text-[18px] text-[16px] pl-5 marker:font-bold marker:text-2xl leading-tight pr-10 xl:pr-0" liClassName="first:mt-3" />
                        <div className="absolute 4xl:mt-10 mt-2">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </section>

            {/* seamless section */}
            <section className="mt-16">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:hidden block">
                        <Image
                            src="/images/sap/sap-digital-desk/mobile/seamless.webp"
                            alt="seamless image"
                            priority
                            className="w-full h-[657px] object-cover"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="xl:col-span-6 col-span-12 bg-[#068EDA] p-8 text-white xl:mt-10 mb-10 z-[9]  mt-[-175px] custom-container xl:!pr-0  !w-[85%] xl:!w-full">
                        <h2 className="leading-tight  xl:mt-0 xl:text-[40px]">Seamless Connectivity</h2>
                        <h3 className="mt-5 xl:text-[36px] text-[20px] leading-tight font-semibold">End-to-End SAP CPI & Integration Expertise</h3>
                        <p className="mt-8  font-light leading-tight">
                            Make your SAP landscape truly connected:
                        </p>
                        <UnorderedList arrName={seamlessData} ulClassName="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl leading-tight xl:pr-32 font-light" liClassName="first:mt-5" />
                    </div>
                    <div className="xl:col-span-6 col-span-12 xl:block hidden xl:ml-[-350px]">
                        <Image
                            src="/images/sap/sap-digital-desk/desktop/seamless.webp"
                            alt=" seamless image"
                            priority
                            className="w-full h-full"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>

                </div>
            </section>

            {/* code the future section */}
            <section className="custom-container xl:mt-24  h-full xl:!pl-0 max-md:px-0">
                <div className="grid xl:grid-cols-12 grid-cols-1 h-full xl:gap-20 items-center">
                    <div className="col-span-8">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/sap/sap-digital-desk/desktop/code.webp"
                                alt="code the future"
                                priority
                                className="w-full h-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/sap/sap-digital-desk/mobile/code.webp"
                                alt="code the future"
                                priority
                                className="w-full  md:h-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                    </div>
                    <div className="col-span-4 mx-[35px] xl:mx-0 mt-10 xl:mt-0 md:mx-0">
                        <h2 className="leading-tight 4xl:text-[56px] text-[26px] xl:text-[40px]">Code the Future</h2>
                        <h3 className="4xl:text-[36px] text-[22px] mt-5 font-semibold leading-tight">SAP ABAP on Cloud — Smarter, Leaner, Faster</h3>
                        <p className="mt-5 leading-tight">Unlock the next-gen power of ABAP in the cloud:</p>
                        <UnorderedList arrName={codeData} ulClassName="list-disc 4xl:space-y-3 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] text-[16px] 4xl:mt-10 mt-3" liClassName="first:mt-5" />
                    </div>

                </div>
            </section>

            {/* intelligent section */}
            <section className="mt-16 custom-container xl:!pr-0 max-md:px-0">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="col-span-7 order-1 xl:order-2 xl:ml-[-300px]">
                        <Image
                            src="/images/sap/sap-digital-desk/desktop/intelligent.webp"
                            alt="intelligent image"
                            priority
                            className="w-full xl:h-full h-[466px] xl:pb-20"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>

                    {/* Content second on mobile, first on desktop */}
                    <div className=" col-span-5  order-2 xl:order-1    xl:h-[640px] 2xl:h-[650px] 4xl:h-[650px]       
                                    bg-[#073259] xl:pb-0 pb-20 p-8 text-white xl:mt-24 z-[9] mx-[35px] xl:mx-0 mt-[-115px] xl:!pr-0 xl:pl-[80px]">
                        <h2 className="leading-tight xl:mt-10 4xl:text-[56px] text-[26px] xl:text-[40px]">Intelligent Insights</h2>
                        <h3 className="mt-5 4xl:text-[36px] text-[20px] leading-tight font-semibold xl:pr-10">
                            Advanced SAP Analytics Cloud & Datasphere Services
                        </h3>
                        <p className="mt-8 font-light leading-tight xl:pr-20">
                            Empower data-driven decisions with enterprise-grade analytics:
                        </p>
                        <UnorderedList arrName={intelligentData} ulClassName="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl leading-tight font-light" liClassName="first:mt-5" />
                        <div className="4xl:mt-[36px] 2xl:mt-[48px] xl:mt-[40px] mt-[29px] absolute">
                            <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                </div>
            </section>

            {/* winning section */}
            <section className="relative xl:mt-10 custom-container mt-[5rem] xl:!pr-0 max-md:px-0">
                <div className="relative">
                    <div className="relative">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/sap/sap-digital-desk/desktop/winning.webp"
                                alt="winning image"
                                priority
                                className="w-full h-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/sap/sap-digital-desk/mobile/wining.webp"
                                alt="winning  image"
                                priority
                                className="w-full h-[297px] md:h-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>

                        <div className="absolute xl:inset-0 items-start px-[35px] md:px-0 grid xl:grid-cols-12   xl:px-20 py-11 text-black xl:pr-40">
                            <div className="col-span-10 2xl:col-span-6">
                                <h2 className="4xl:text-[60px] text-[26px] xl:text-[40px] leading-tight pr-0 4xl:pr-64">
                                    Winning the Talent War
                                </h2>
                                <h3 className="mt-5 4xl:text-[36px] text-[22px] leading-tight font-semibold pr-0 2xl:pr-32">
                                    End-to-End SAP SuccessFactors Support
                                </h3>
                                <p className="mt-5 font-normal">
                                    Put employees at the heart of your digital transformation:
                                </p>
                                <UnorderedList arrName={winningSectionData} ulClassName="list-disc 4xl:space-y-5 xl:space-y-3 pl-5 4xl:text-[20px] text-[16px] mt-5 " liClassName="" />
                                <div className="xl:bottom-0 absolute">
                                    <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* smart procurement section */}
            <section className="custom-container xl:mt-20 mt-[30rem] max-[500px]:mt-[500px] max-[378px]:mt-[624px] md:mt-[25rem] ">
                <div className="grid xl:grid-cols-12 grid-cols-12">
                    <div className="xl:col-span-6 col-span-12">
                        <h2 className="leading-tight 4xl:text-[56px] text-[26px] xl:text-[40px]">Smart Procurement</h2>
                        <h3 className="4xl:text-[36px] xl:text-[30px] text-[20px] mt-5 leading-tight font-semibold">SAP Ariba Managed Services</h3>
                        <UnorderedList arrName={sapAribaData} ulClassName="list-disc space-y-3 pl-5 xl:text-[20px] text-[16px] mt-5" liClassName="" />
                    </div>
                    <div className="xl:col-span-6 col-span-12 mt-20 xl:mt-0">
                        <h2 className="leading-tight 4xl:text-[56px] text-[26px] xl:text-[40px]">Modern Data Fabric</h2>
                        <h3 className="4xl:text-[36px] xl:text-[30px] text-[20px] mt-5 leading-tight font-semibold">SAP Datasphere Management for Unified Data Access</h3>
                        <UnorderedList arrName={sapDatasphereData} ulClassName="list-disc space-y-3 pl-5 xl:text-[20px] text-[16px] mt-5" liClassName="" />
                    </div>
                </div>
            </section>

            {/* sap signavio section */}
            <section className="relative  xl:mt-32 mt-10">
                <div className="xl:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/transform.webp"
                        alt=" sap signavio image"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/transf.webp"
                        alt=" sap signavio image"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="h-full relative custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-black">
                        <div className="xl:col-span-9 col-span-12">
                            <h2 className="text-[25px] xl:text-[60px]  mt-16 leading-tight">
                                SAP Signavio and SAP Activate
                            </h2>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-black">
                        <div className="xl:col-span-7 col-span-12">
                            <p className="mt-5">Rialtes’ Proven SAP Activate Approach Combined with Process Intelligence</p>
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-12 xl:gap-x-12 gap-y-6 mt-16">

                        <div className="grid gap-6 xl:col-span-5 col-span-12">
                            {sapTransformationSteps.slice(0, 3).map(({ step, title, description }, index) => (
                                <div key={step} className="gap-x-4 flex items-center">
                                    <div className="w-[70px] h-[70px] bg-[#006FBE] text-white font-bold flex items-center justify-center text-4xl">
                                        {step}
                                    </div>
                                    <div className="xl:flex items-center flex-col xl:flex-row">
                                        <p className="font-bold xl:text-[22px] text-[18px] text-black">{title}</p>
                                        <p className={`font-normal xl:pl-16`}>{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid xl:col-span-5 col-span-12 gap-6">
                            {sapTransformationSteps.slice(3).map(({ step, title, description, plOverride }, index) => (
                                <div key={step} className="gap-x-4 flex items-center">
                                    <div className="w-[70px] h-[70px] bg-[#006FBE] text-white font-bold flex items-center justify-center text-4xl">
                                        {step}
                                    </div>
                                    <div className="xl:flex items-center flex-col xl:flex-row">
                                        <p className="font-bold xl:text-[22px] text-[18px] text-black">{title}</p>
                                        <p className={`font-normal ${plOverride || "xl:pl-16"}`}>{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#163055] xl:mb-[-60px] col-span-10 z-[20] p-8 xl:text-[26px] text-[20px] text-white mt-16 leading-tight font-normal">
                            With Signavio’s real-time process intelligence, we ensure you run SAP based on best-in-class benchmarks.
                        </div>
                    </div>
                </div>
            </section>

            {/* supercharge section */}
            <section className="relative custom-container xl:!pl-0 xl:!pr-[142px] mt-[5rem] xl:mt-0 max-md:px-0">
                <div className="relative">
                    <div className="xl:block hidden">
                        <picture>
                            <source
                                media="(min-width: 1280px)"
                                srcSet="/images/sap/sap-digital-desk/desktop/supercharge.webp"
                            />
                            <img
                                src="/images/sap/sap-digital-desk/desktop/supercharge.webp"
                                alt="Warehouse"
                                className="w-full h-[500px] xl:h-[720px] 2xl:h-[820px] 4xl:h-[800px]"
                            />
                        </picture>
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/sap/sap-digital-desk/mobile/supercharge.webp"
                            alt=""
                            priority
                            className="w-full h-full sm:h-[1150px] md:h-[1100px] max-[420px]:h-[999px] object-cover "
                            style={{ objectPosition: "75% 20%" }}

                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="py-10 xl:py-20 text-black relative xl:absolute xl:inset-0 xl:flex xl:items-end xl:justify-end  -mt-[39rem] md:mt-[-32rem] xl:mt-0 px-[35px] xl:px-7">
                        <div className="4xl:max-w-[710px] xl:max-w-[440px]">
                            <h2 className="text-[25px] 4xl:text-[60px] xl:text-[40px] leading-tight">
                                Supercharge HR with SAP Joule
                            </h2>
                            <p className="mt-5 font-normal">
                                Meet SAP Joule, your AI-powered business assistant for HR and enterprise processes in SuccessFactors. Rialtes helps you leverage Joule for impactful automation and insights:
                            </p>
                            <UnorderedList arrName={superchargeData} ulClassName="list-disc space-y-3 pl-5 4xl:text-[20px] xl:text-[18px] text-[16px] mt-5" liClassName="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* rialtes BTP section */}
            <section className="h-full custom-container xl:pr-0 max-md:px-0 mt-0 ">
                <div className="grid xl:grid-cols-12 grid-cols-1 h-full 4xl:gap-20 xl:gap-10 items-center">
                    <div className="xl:col-span-7 col-span-12 order-1 xl:order-2 h-full z-20">
                        <div className="xl:block hidden h-full">
                            <Image
                                src="/images/sap/sap-digital-desk/desktop/btp.webp"
                                alt="rialtes BTP image"
                                priority
                                className="w-full h-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/sap/sap-digital-desk/mobile/btp.webp"
                                alt="rialtes BTP image"
                                priority
                                className="w-full h-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                    </div>
                    <div className="xl:col-span-5 col-span-12 order-2 xl:order-1 mx-[35px] xl:mx-0 xl:mt-0 md:mx-0 ">
                        <h2 className="leading-tight 4xl:text-[56px] text-[26px] xl:text-[35px] mt-16">Rialtes’ BTP Center of Excellence</h2>
                        <h3 className="4xl:text-[36px] text-[22px] mt-5 font-semibold leading-tight">
                            Innovate, Integrate, and Extend SAP Faster
                        </h3>
                        <p className="4xl:mt-8 xl:mt-4 font-normal 4xl:text-[20px] text-[16px]">
                            From AI-driven workflows to mobile apps and event-driven architectures, our Certified SAP BTP experts ensure:
                        </p>
                        <UnorderedList arrName={btpData} ulClassName="list-disc 4xl:space-y-5 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] text-[16px] 4xl:mt-10 mt-3 xl:pr-10" liClassName="" />
                        <div className="mt-5 relative">
                            <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                </div>
            </section>

            {/* migrate section */}
            <section className="relative  xl:mt-32 mt-10 pb-20 xl:pb-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/migrate.webp"
                        alt="migrate image"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/migrate.webp"
                        alt="migrate image"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="h-full relative custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white">
                        <div className="xl:col-span-9 col-span-12">
                            <h2 className="text-[25px] 4xl:text-[60px] xl:text-[50px] mt-16 leading-tight">
                                Migrate to SAP SuccessFactors with Confidence
                            </h2>
                            <h3 className="xl:text-[36px] text-[20px] xl:mt-12 mt-5">Success+ by Rialtes</h3>
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white xl:pt-10 pt-5 xl:pb-20">
                        <div className="xl:col-span-6 col-span-12">
                            <h3 className="xl:text-[28px] text-[18px] xl:font-semibold font-medium">Workday to SAP SuccessFactors Migration Services</h3>
                            <UnorderedList arrName={migrateData1} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3 xl:pr-20" liClassName="" />
                        </div>
                        <div className="xl:col-span-6 col-span-12 mt-10 xl:mt-0">
                            <h3 className="xl:text-[28px] text-[18px] xl:font-semibold font-medium xl:pr-20">ZOHO HR to SAP SuccessFactors Migration</h3>
                            <UnorderedList arrName={migrateData2} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3 xl:pr-20" liClassName="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* why partner section */}
            <section className="custom-container  h-full xl:!pl-[142px] max-md:px-0 mt-10 xl:mt-0">
                <div className="grid xl:grid-cols-12 grid-cols-1 h-full xl:gap-20">
                    <div className="col-span-7">
                        <Image
                            src="/images/sap/sap-digital-desk/desktop/why.webp"
                            alt=" why partner image"
                            priority
                            className="w-full h-full"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="col-span-5 xl:mt-20 mx-[35px] xl:mx-0 mt-10 md:mx-0">
                        <h2 className="leading-tight xl:text-[40px] 4xl:text-[60px] text-[26px]">Why Partner with Rialtes?</h2>
                        <h3 className="4xl:text-[36px] text-[20px] mt-5 font-semibold leading-tight">Your Success Is Our Mission</h3>
                        <UnorderedList arrName={whyPartnerData} ulClassName="list-disc 4xl:space-y-5 xl:space-y-3 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] text-[16px] xl:mt-5 4xl:mt-10 mt-3" liClassName="" />
                    </div>
                </div>
            </section>

            {/* contact form */}
            <div className="custom-container text-black py-20">
                <ContactForm title={'Ready to Unlock Maximum Value from SAP? Let’s Talk!'} subtitle={"Contact us today to explore how SAP Digital Desk can transform your SAP operations."} className={"leading-tight xl:text-[40px] xl:max-w-[71%]"} />
            </div >
        </div >
    );
}