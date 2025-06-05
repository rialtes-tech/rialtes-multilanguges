


"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import ContactForm from "../../../components/contactform";
import LearnMore from "../../../components/learnMore";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Grow with SAP - Cloud ERP Implementation Services",
    "alternateName": "VoyagerNext by Rialtes",
    "url": "https://www.rialtes.com/services/business-transformation/grow-with-sap-services/",
    "description": "Rialtes provides end-to-end Grow with SAP transformation services, including SAP Cloud ERP implementation leveraging SAP S/4HANA Cloud, SAP Activate methodology, SAP Signavio, and SAP BTP. Services include implementation, migration from SAP B1, integration with Salesforce, and support for AI, automation, and digital procurement.",
    "provider": {
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
    "areaServed": [
        {
            "@type": "Country",
            "name": "United States"
        },
        {
            "@type": "Country",
            "name": "Canada"
        },
        {
            "@type": "Country",
            "name": "India"
        },
        {
            "@type": "Country",
            "name": "Singapore"
        }
    ],
    "serviceType": [
        "Grow with SAP Services",
        "SAP S/4HANA Cloud Public Edition Implementation",
        "SAP B1 to S/4HANA Migration",
        "SAP Activate & SAP Signavio Enablement",
        "SAP SuccessFactors Integration",
        "SAP Ariba and Procurement Solutions",
        "SAP BTP Customization and Automation",
        "SAP CPI Integration",
        "Salesforce and SAP Integration",
        "Conversational AI for ERP (AgentChat)",
        "AI and Data Cloud Enablement"
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "VoyagerNext Offerings",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "SAP License Advisory",
                    "description": "Guidance on SAP licensing for cost-effectiveness and scalability."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Solution Design & Implementation",
                    "description": "Design and implement SAP S/4HANA Cloud aligned with industry best practices."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "System Integration & Customization",
                    "description": "Integrate SAP with legacy systems and customize using SAP BTP and CPI."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Post Go-Live Support & Optimization",
                    "description": "Hypercare, continuous improvement, and performance monitoring post go-live."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Quality Assurance & User Training",
                    "description": "Ensure system readiness with testing and user enablement services."
                }
            }
        ]
    },
    "audience": {
        "@type": "Audience",
        "audienceType": [
            "Mid-market Enterprises",
            "Growing Businesses",
            "Enterprise IT Teams",
            "SAP Business One Customers",
            "Digital Transformation Leaders"
        ]
    },
    "isRelatedTo": [
        {
            "@type": "Product",
            "name": "SAP S/4HANA Cloud Public Edition"
        },
        {
            "@type": "Product",
            "name": "SAP Activate"
        },
        {
            "@type": "Product",
            "name": "SAP Signavio"
        },
        {
            "@type": "Product",
            "name": "SAP Business Technology Platform (BTP)"
        },
        {
            "@type": "Product",
            "name": "SAP Cloud Platform Integration (CPI)"
        },
        {
            "@type": "Product",
            "name": "SAP SuccessFactors"
        },
        {
            "@type": "Product",
            "name": "SAP Ariba"
        },
        {
            "@type": "Product",
            "name": "Salesforce"
        },
        {
            "@type": "Product",
            "name": "AgentChat"
        }
    ],
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.rialtes.com/services/business-transformation/grow-with-sap-services/"
    }
}

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Grow with SAP Solutions by a Trusted SAP Partner | Rialtes"
                description="Grow with SAP solutions that deliver measurable business success, powered by Rialtes—a trusted SAP partner driving enterprise-ready innovation and growth."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/services/business-transformation/grow-with-sap-services/"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <section className="relative  xl:pb-40 pb-20">
                <div className="xl:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/banner.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        sizes="100vw" />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/banner.webp"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>

                <div
                    className="relative
        custom-container"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 mt-20 xl:text-black text-white">
                        <div className="xl:col-span-6 col-span-12 xl:pt-40 pt-20">
                            <h3 className="text-[20px] xl:text-[24px] font-bold mb-2 break-words">
                                SAP Digital Desk
                            </h3>
                            <h2 className="leading-tight break-words xl:mt-10 mt-5 pr-32 xl:pr-0">
                                Maximize Your SAP Investment with Always-On Expertise
                            </h2>
                        </div>
                    </div>
                </div>
            </section>




            <section
                className="mt-20
              custom-container">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-10 col-span-12">
                        <h1 className="leading-tight">
                            Reimagine SAP Support with Rialtes: Agile, Scalable, and Future-Ready Managed Services
                        </h1>
                        <p className="xl:text-[22px] text-[16px] mt-5 xl:pr-32">At Rialtes, we empower organizations to run their SAP landscapes smarter, faster, and more securely. SAP Digital Desk, our next-gen managed services platform, brings together end-to-end SAP expertise — from stabilization and innovation to continuous optimization — ensuring your SAP systems become a strategic driver for business growth, not just an operational tool.  </p>
                        <p className="xl:text-[22px] text-[16px] mt-5 xl:pr-40">As a global SAP-certified partner with a presence in India, USA, Canada, and Singapore, and a team of top-tier, SAP-certified experts, Rialtes is committed to delivering unparalleled value, agility, and innovation for every client.
                        </p>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                    </div>
                </div>

            </section>





            <section className="relative  xl:mt-32 mt-10 pb-20 xl:pb-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/global.webp"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/global.webp"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div
                    className="h-full relative
                    custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white">
                        <div className="xl:col-span-6 col-span-12 xl:pr-20">
                            <h2 className="text-[25px] xl:text-[60px]  mt-16 leading-tight">
                                Global Delivery, Local Expertise
                            </h2>
                            <h3 className="mt-5 xl:text-[36px] text-[22px] leading-tight">Rialtes’ 24/7 SAP Support That Works Around You</h3>
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
                            <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3 xl:pr-20">
                                <li>Always-On SAP system monitoring, incident management, and functional/technical support.</li>
                                <li>Proactive alerts, real-time resolution, and service continuity — anywhere, anytime.</li>
                            </ul>
                            <h3 className="xl:text-[28px] text-[18px] xl:font-bold font-medium xl:pr-20 xl:pt-20 pt-10">Hybrid Delivery Model (Onsite + Offshore)</h3>
                            <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3 xl:pr-20">
                                <li>Strategic blend of onsite expertise and offshore delivery for cost-effective yet personalized support.</li>
                                <li>Local leadership and customer-facing consultants backed by offshore SAP CoE teams for scalability.</li>
                            </ul>
                            <div className="xl:absolute mt-10 xl:block hidden">
                                <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                            </div>
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12 mt-10 xl:mt-0">
                            <h3 className="xl:text-[28px] text-[18px] font-bold">Onsite Delivery Model</h3>
                            <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3">
                                <li>SAP experts embedded within your business to provide hands-on, real-time collaboration.</li>
                                <li>Ideal for high-touch implementations, critical go-lives, and executive stakeholder alignment.</li>
                            </ul>
                            <h3 className="xl:text-[28px] text-[18px] font-bold xl:pt-20 pt-10">Fully Offshore Model</h3>

                            <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3">
                                <li>100% remote delivery from our global SAP Centers of Excellence in India and Singapore for optimized costs and continuous delivery.</li>
                                <li>Best suited for steady-state AMS (Application Management Services), developments, and enhancements.</li>
                            </ul>
                            <div className="absolute mt-10 xl:hidden block">
                                <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="custom-container xl:mt-32 xl:!pr-0 h-full max-md:px-0 mt-16">
                <div className="grid xl:grid-cols-12 grid-cols-1 h-full">

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
                        <h2 className="leading-tight">Project Leadership</h2>
                        <h3 className="xl:text-[36px] text-[22px] mt-5 font-semibold leading-tight">
                            Expertly Managed, Seamlessly Delivered
                        </h3>
                        <p className="mt-5 xl:pr-40 font-medium">
                            All our engagements are driven by PMP® and Scrum®-certified Project Managers, ensuring that every project is delivered on time, within budget, and aligned to business goals.
                        </p>
                        <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3 xl:pr-32 font-medium">
                            <li>Agile and Waterfall methodologies based on business needs.</li>
                            <li>Strong governance, communication, and risk management frameworks.</li>
                            <li>Transparent, KPI-driven service reporting and business outcome focus.</li>
                        </ul>
                        <p className="mt-10 xl:pr-40 pb-10 font-medium">
                            Our SAP-certified consultants are strategically located across USA, Canada, and India, giving you the right mix of proximity, cost-efficiency, and expertise.
                        </p>

                        <LearnMore />
                    </div>

                </div>
            </section>

            <section className="relative  xl:mt-32">
                <div className="xl:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/unmatch.webp"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/unmatched.webp"
                        alt=""
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
                            <h2 className="text-[25px] xl:text-[60px]  mt-16 leading-tight">
                                Unmatched SAP Expertise
                            </h2>
                            <p className="mt-5">At Rialtes, our strength is our people — a highly skilled team holding over 150 active SAP certifications, covering the entire SAP ecosystem to support your business transformation journey.</p>
                            <h3 className="xl:text-[36px] text-[22px] mt-10 leading-tight font-semibold">Over 150 SAP Certifications Across Every Major Module</h3>
                        </div>

                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-[#006FBE]  items-center pt-10">
                        <div className="xl:col-span-6 col-span-12">
                            <h3 className="text-[20px] xl:text-[30px] leading-tight font-semibold">
                                Our Certified SAP Competency Covers:
                            </h3>
                        </div>
                        <div className="xl:col-span-6 col-span-12  xl:border-b-2 xl:border-black">
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-12 grid-cols-1 text-black xl:pb-20">
                        <div className="xl:col-span-6 col-span-12">
                            <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3 xl:pr-20">
                                <li>SAP S/4HANA (Finance, Logistics, Manufacturing, Sales & Distribution, Procurement)</li>
                                <li> SAP SuccessFactors (EC, LMS, Talent, Onboarding, Compensation, Workforce Analytics)</li>
                                <li> SAP Ariba (Strategic Sourcing, Contracts, Buying & Invoicing)</li>
                                <li>SAP Business Technology Platform (BTP) — Integration, Extensions, AI/ML, Analytics, App Development</li>
                            </ul>
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12  xl:mt-0">
                            <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3">
                                <li>SAP CPI & SAP Integration Suite</li>
                                <li> SAP Fiori and UI5 Development</li>
                                <li>SAP Signavio for Business Process Intelligence</li>
                                <li> SAP Datasphere and SAP Analytics Cloud </li>
                                <li> SAP ABAP and ABAP on Cloud</li>
                                <li> SAP Joule (AI Assistant) enablement</li>
                                <li>SAP Basis & Security</li>
                            </ul>
                        </div>

                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-[#006FBE]  items-center mt-10 xl:mt-0">
                        <div className="xl:col-span-4 col-span-12">
                            <h3 className="text-[20px] xl:text-[30px] leading-tight font-semibold">
                                What This Means for You:
                            </h3>
                        </div>
                        <div className="xl:col-span-8 col-span-12  xl:border-b-2 xl:border-black">
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 text-black  items-center xl:mt-16  mt-5 xl:gap-16 gap-8 xl:pr-40">
                        <div>
                            <p className="xl:pb-5 pb-2 xl:text-[20px] font-bold leading-tight">Certified Expertise On-Demand </p>
                            <p>Rapid access to specialized skills without hiring overheads.</p>
                        </div>
                        <div>
                            <p className="xl:pb-5 pb-2 xl:text-[20px] font-bold leading-tight">Assurance of Quality and Best Practices </p>
                            <p>Every solution aligned to SAP’s latest standards and innovations.</p>
                        </div>
                        <div>
                            <p className="xl:pb-5 pb-2 xl:text-[20px] font-bold leading-tight">Future-Proof Solutions </p>
                            <p>Deep understanding of the SAP roadmap ensures your investments are protected and scalable.</p>
                        </div>
                        <div>
                            <p className="xl:pb-5 pb-2 xl:text-[20px] font-bold leading-tight">Compliance, Governance, and Risk Mitigation </p>
                            <p>Solutions built right the first time, adhering to global compliance and SAP guidelines.</p>
                        </div>
                    </div>
                    <div className="xl:pr-64">
                        <div className="bg-[#163055] p-8 xl:text-[26px] text-[20px] text-white mt-16 leading-tight ">With Rialtes, you’re not just getting support — you’re gaining a long-term partner to drive continuous SAP innovation and value realization.</div>

                    </div>

                </div>
            </section>

            <section className="custom-container xl:mt-40 mt-10  h-full xl:!pl-0 !px-0">
                <div className="grid xl:grid-cols-12 grid-cols-1 h-full xl:gap-20">
                    <div className="col-span-7">
                        <Image
                            src="/images/sap/sap-digital-desk/desktop/future.webp"
                            alt=""
                            priority
                            className="w-full xl:h-full h-[400px]"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="col-span-5 xl:pr-32 mt-10 xl:mt-0 mx-[35px] xl:mx-0 md:mx-0">
                        <h2 className="leading-tight">Future-Proof Your Core</h2>
                        <h3 className="xl:text-[36px] text-[22px] mt-5 font-semibold leading-tight">Complete SAP S/4HANA Post-Go-Live Support</h3>
                        <p className="mt-5 font-normal">Keep your SAP S/4HANA running at peak performance with our functional, technical, and Basis expertise:</p>
                        <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3">
                            <li> Business process optimization and issue resolution.</li>
                            <li>System performance monitoring and enhancements.</li>
                            <li> Security, compliance, and risk management.</li>
                            <li>                 Continuous improvement of system configurations and workflows.</li>
                        </ul>
                        <div className="mt-5">
                            <LearnMore />
                        </div>

                    </div>

                </div>
            </section>

            <section className="relative mt-5 xl:mt-0  xl:ml-[142px]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/user-exper.webp"
                        alt="GROW with SAP"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/user-expe.webp"
                        alt="GROW with SAP"
                        fill
                        priority
                        sizes="100vw"
                        className="h-[628px]"
                    />
                </div>
                <div className=" h-full relative custom-container xl:!ml-[-142px] max-md:px-0">
                    <div className="grid xl:grid-cols-12 grid-cols-1">
                        <div className="col-span-6">
                            <div className="relative xl:p-12 p-10 mt-40 xl:mt-0">
                                <div className="absolute inset-0 xl:bg-[#016FBE] mix-blend-multiply"></div>
                                <div className="relative bg-opacity-80 text-white z-10 rounded-lg">
                                    <h2 className="leading-tight">Revolutionize User Experience</h2>
                                    <h3 className="xl:text-[36px] text-[20px] mt-5 leading-tight font-semibold">SAP Fiori/UI5 — Built for Your Business</h3>
                                    <p className="mt-5 font-normal">Modernize and streamline user interactions with intuitive SAP Fiori/UI5 apps</p>
                                    <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] font-normal text-[16px] xl:mt-10 mt-3">
                                        <li> Role-based custom app development and enhancement.</li>
                                        <li>Mobile-responsive designs for field and remote teams.</li>
                                        <li> Fiori launchpad personalization and optimization.</li>
                                        <li>  End-user adoption and training to maximize ROI.</li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="bg-[#EFEFEF] xl:mt-20 xl:pb-0 custom-container xl:!px-0 h-full max-md:px-0 pb-20">
                <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-24  xl:!pr-0">
                    <div className="xl:col-span-6 col-span-12 order-1 xl:order-1">
                        <div className="xl:block hidden h-full">
                            <Image
                                src="/images/sap/sap-digital-desk/desktop/unleash.webp"
                                width={950}
                                height={600}
                                priority
                                sizes="100vw"
                                className="w-full h-full"
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/sap/sap-digital-desk/mobile/unleash.webp"
                                width={950}
                                height={600}
                                className="w-full"
                                priority
                                sizes="100vw"
                            />
                        </div>
                    </div>

                    {/* Text: comes SECOND in HTML, but appears FIRST on desktop  */}
                    <div className="xl:col-span-6 col-span-12 order-2 xl:order-1 h-full px-[35px] xl:px-0 md:px-0">
                        <h2 className="xl:text-[60px] text-[26px] mt-10 xl:mt-0 leading-tight xl:pt-16">
                            Unleash Innovation
                        </h2>
                        <h3 className="xl:text-[36px] text-[20px] mt-5 xl:font-bold font-medium  xl:pr-40 leading-tight">
                            Maximize SAP BTP to Extend and Personalize SAP
                        </h3>
                        <p className="mt-5 leading-tight pr-10 xl:pr-40 font-normal">
                            Take advantage of SAP Business Technology Platform (BTP) to build innovations that drive competitive advantage:
                        </p>
                        <ul className="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl leading-tight pr-10 xl:pr-0">
                            <li className="mt-5">Low-code/no-code application development with SAP Build.</li>
                            <li>AI/ML integrations using SAP AI Core.</li>
                            <li>Event-driven and API-based workflows.</li>
                            <li>Cloud-native extensions that are upgrade-safe and scalable.</li>
                        </ul>
                        <div className="absolute xl:mt-10 mt-8">
                            <LearnMore />
                        </div>

                    </div>
                </div>
            </div>
            <section className="mt-16">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:hidden block">
                        <Image
                            src="/images/sap/sap-digital-desk/mobile/seamless.webp"
                            alt=""
                            priority
                            className="w-full h-[657px]"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="xl:col-span-6 col-span-12 bg-[#068EDA] p-8 text-white xl:mt-10 mb-10 z-[9]  mt-[-175px] custom-container xl:!pr-0 !mx-[35px] !w-[85%] xl:!w-full">
                        <h2 className="leading-tight  xl:mt-0">Seamless Connectivity</h2>
                        <h3 className="mt-5 xl:text-[36px] text-[20px] leading-tight font-semibold">End-to-End SAP CPI & Integration Expertise</h3>
                        <p className="mt-8  font-light leading-tight">
                            Make your SAP landscape truly connected:
                        </p>
                        <ul className="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl leading-tight xl:pr-32 font-light">
                            <li className="mt-5">Integrate SAP S/4HANA with SAP and non-SAP systems — Salesforce, Oracle, Workday, ZOHO.</li>
                            <li> API and event-driven integrations for real-time data flow.</li>
                            <li> Secure and scalable architecture for high-volume transactions.</li>
                            <li> Post-integration monitoring, maintenance, and support.</li>
                        </ul>
                    </div>
                    <div className="xl:col-span-6 col-span-12 xl:block hidden xl:ml-[-550px]">
                        <Image
                            src="/images/sap/sap-digital-desk/desktop/seamless.webp"
                            alt=""
                            priority
                            className="w-full h-full"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>

                </div>
            </section>

            <section className="custom-container xl:mt-24  h-full xl:!pl-0 max-md:px-0">
                <div className="grid xl:grid-cols-12 grid-cols-1 h-full xl:gap-20 items-center">
                    <div className="col-span-8">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/sap/sap-digital-desk/desktop/code.webp"
                                alt=""
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
                                alt=""
                                priority
                                className="w-full h-[400px] md:h-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                    </div>
                    <div className="col-span-4 mx-[35px] xl:mx-0 mt-10 xl:mt-0 md:mx-0">
                        <h2 className="leading-tight">Code the Future</h2>
                        <h3 className="xl:text-[36px] text-[22px] mt-5 font-semibold leading-tight">SAP ABAP on Cloud — Smarter, Leaner, Faster</h3>
                        <p className="mt-5">Unlock the next-gen power of ABAP in the cloud:</p>
                        <ul className="list-disc xl:space-y-3 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3">
                            <li> Develop and deploy upgrade-safe ABAP extensions.</li>
                            <li>RAP-based RESTful services.</li>
                            <li>Cloud and hybrid environment readiness.</li>
                            <li>End-to-end ABAP development lifecycle management.</li>
                        </ul>
                    </div>

                </div>
            </section>
            <section className="mt-16 custom-container xl:!pr-0 max-md:px-0">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="col-span-7 order-1 xl:order-2 xl:ml-[-300px]">
                        <Image
                            src="/images/sap/sap-digital-desk/desktop/intelligent.webp"
                            alt=""
                            priority
                            className="w-full xl:h-full h-[466px] xl:pb-20"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>

                    {/* Content second on mobile, first on desktop */}
                    <div className="col-span-5  order-2 xl:order-1   h-[500px] xl:h-[860px] 2xl:h-[820px] 4xl:h-[650px]       
   bg-[#073259] xl:pb-0 pb-20 p-8 text-white xl:mt-24 z-[9] mx-[35px] xl:mx-0 mt-[-115px] xl:!pr-0 xl:pl-[80px]">
                        <h2 className="leading-tight xl:mt-10">Intelligent Insights</h2>
                        <h3 className="mt-5 xl:text-[36px] text-[20px] leading-tight font-semibold xl:pr-10">
                            Advanced SAP Analytics Cloud & Datasphere Services
                        </h3>
                        <p className="mt-8 font-light leading-tight xl:pr-20">
                            Empower data-driven decisions with enterprise-grade analytics:
                        </p>
                        <ul className="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl leading-tight font-light">
                            <li className="mt-5">Real-time dashboards, KPIs, and executive reporting.</li>
                            <li>Planning and predictive analytics.</li>
                            <li>Datasphere for unified, governed data landscapes.</li>
                            <li>AI-powered insights and what-if scenarios for better forecasting.</li>
                        </ul>
                        <div className="xl:mt-10  mt-5 absolute">
                            <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative xl:mt-10 custom-container mt-[5rem] xl:!pr-0 max-md:px-0">
                <div className="relative">
                    <div className="relative">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/sap/sap-digital-desk/desktop/winning.webp"
                                alt=""
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
                                alt=""
                                priority
                                className="w-full h-[297px] md:h-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>

                        <div className="absolute xl:inset-0 items-start px-[35px] md:px-0 grid xl:grid-cols-12   xl:px-20 py-20 text-black xl:pr-40">
                            <div className="col-span-10 zoom150:col-span-8 2xl:col-span-6">
                                <h2 className="text-[25px] xl:text-[60px] leading-tight pr-0 2xl:pr-40">
                                    Winning the Talent War
                                </h2>
                                <h3 className="mt-5 xl:text-[36px] text-[22px] leading-tight font-semibold pr-0 2xl:pr-32">
                                    End-to-End SAP SuccessFactors Support
                                </h3>
                                <p className="mt-5 font-normal">
                                    Put employees at the heart of your digital transformation:
                                </p>
                                <ul className="list-disc space-y-3 pl-5 xl:text-[20px] text-[16px] mt-5 ">
                                    <li>Global HR process optimization.</li>
                                    <li>Ongoing configuration, compliance updates.</li>
                                    <li>Talent management, recruitment, and performance solutions.</li>
                                    <li>Seamless integration with SAP S/4HANA and third-party systems.</li>
                                </ul>
                                <div className="mt-6 absolute">
                                    <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="custom-container xl:mt-20 mt-[38rem] md:mt-[30rem]">
                <div className="grid xl:grid-cols-12 grid-cols-12">
                    <div className="xl:col-span-6 col-span-12">
                        <h2 className="leading-tight">Smart Procurement, Delivered</h2>
                        <h3 className="xl:text-[36px] text-[20px] mt-5 leading-tight font-semibold">SAP Ariba Managed Services</h3>
                        <p className="mt-5 font-normal">Streamline procurement and supplier collaboration:</p>
                        <ul className="list-disc space-y-3 pl-5 xl:text-[20px] text-[16px] mt-5 ">
                            <li>Ariba Network onboarding and integration.</li>
                            <li>Catalog, sourcing, and contract management.</li>
                            <li> Guided buying and invoice automation.</li>
                            <li> Risk management and compliance assurance.</li>
                        </ul>
                    </div>
                    <div className="xl:col-span-6 col-span-12 mt-20 xl:mt-0">
                        <h2 className="leading-tight">Modern Data Fabric</h2>
                        <h3 className="xl:text-[36px] text-[20px] mt-5 leading-tight font-semibold">SAP Datasphere Management for Unified Data Access</h3>
                        <p className="mt-5 font-normal">Unlock the full potential of enterprise data:</p>
                        <ul className="list-disc space-y-3 pl-5 xl:text-[20px] text-[16px] mt-5 ">
                            <li>Data federation and virtualization.</li>
                            <li> Secure data sharing and collaboration.</li>
                            <li>  Unified business data modeling.</li>
                            <li>  AI/ML-enabled insights at scale.</li>
                        </ul>
                    </div>


                </div>
            </section>

            <section className="relative  xl:mt-32 mt-10">
                <div className="xl:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/transform.webp"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/transf.webp"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div
                    className="h-full relative
                    custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-black">
                        <div className="xl:col-span-9 col-span-12">
                            <h2 className="text-[25px] xl:text-[60px]  mt-16 leading-tight">
                                Transform with Confidence
                            </h2>
                            <h3 className="xl:text-[36px] text-[22px] mt-10 leading-tight font-semibold">SAP Signavio and SAP Activate — Process to Action</h3>
                        </div>

                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-black">
                        <div className="xl:col-span-7 col-span-12">
                            <h3 className="xl:text-[32px] text-[18px] mt-10 font-semibold leading-tight">Rialtes’ Proven SAP Activate Approach Combined with Process Intelligence</h3>
                            <p className="mt-5">From discovery to post-go-live, we align SAP Activate methodology with SAP Signavio for outcome-focused transformations:</p>
                        </div>

                    </div>

                    <div className="grid xl:grid-cols-12 xl:gap-x-12 gap-y-6 mt-16">
                        <div className="grid gap-6 xl:col-span-5 col-span-12">
                            <div className="gap-x-4 flex items-center">
                                <div className="w-[70px] h-[70px] bg-[#006FBE] text-white font-bold flex items-center justify-center text-4xl">1</div>
                                <div className="xl:flex items-center flex-col xl:flex-row">
                                    <p className="font-bold xl:text-[22px] text-[18px] text-black">Discover</p>
                                    <p className="font-normal xl:pl-16">Process mining and value assessments.</p>
                                </div>

                            </div>
                            <div className="gap-x-4 flex items-center">
                                <div className="w-[70px] h-[70px] bg-[#006FBE] text-white font-bold flex items-center justify-center text-4xl">2</div>
                                <div className="xl:flex items-center flex-col xl:flex-row">
                                    <p className="font-bold xl:text-[22px] text-[18px] text-black">Prepare</p>
                                    <p className="font-normal xl:pl-16">Strategy, governance, and scope definition.</p>
                                </div>

                            </div>
                            <div className="gap-x-4 flex items-center">
                                <div className="w-[70px] h-[70px] bg-[#006FBE] text-white font-bold flex items-center justify-center text-4xl">3</div>
                                <div className="xl:flex items-center flex-col xl:flex-row">
                                    <p className="font-bold xl:text-[22px] text-[18px] text-black">Explore</p>
                                    <p className="font-normal xl:pl-16">Fit-to-standard analysis and future-state design.</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid xl:col-span-5 col-span-12 gap-6">
                            <div className="gap-x-4 flex items-center">
                                <div className="w-[70px] h-[70px] bg-[#006FBE] text-white font-bold flex items-center justify-center text-4xl">4</div>
                                <div className="xl:flex items-center flex-col xl:flex-row">
                                    <p className="font-bold xl:text-[22px] text-[18px] text-black">Realize</p>
                                    <p className="font-normal xl:pl-16">Rapid configuration and development aligned to KPIs.</p>
                                </div>
                            </div>

                            <div className="gap-x-4 flex items-center">
                                <div className="w-[70px] h-[70px] bg-[#006FBE] text-white font-bold flex items-center justify-center text-4xl">5</div>
                                <div className="xl:flex items-center flex-col xl:flex-row">
                                    <p className="font-bold xl:text-[22px] text-[18px] text-black">Deploy</p>
                                    <p className="font-normal xl:pl-16">Smooth cutover, training, and enablement.</p>
                                </div>
                            </div>

                            <div className="gap-x-4 flex items-center">
                                <div className="w-[70px] h-[70px] bg-[#006FBE] text-white font-bold flex items-center justify-center text-4xl">6</div>
                                <div className="xl:flex items-center flex-col xl:flex-row">
                                    <p className="font-bold xl:text-[22px] text-[18px] text-black">Run</p>
                                    <p className="font-normal xl:pl-24">Post-go-live hypercare and continuous improvement.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#163055] xl:mb-[-60px] col-span-10 z-[999] p-8 xl:text-[26px] text-[20px] text-white mt-16 leading-tight font-normal">With Signavio’s real-time process intelligence, we ensure you run SAP based on best-in-class benchmarks.</div>
                    </div>
                </div>
            </section>

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
                                className="w-full h-[500px] xl:h-[860px] 2xl:h-[820px] 4xl:h-[800px]"
                            />
                        </picture>
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/sap/sap-digital-desk/mobile/supercharge.webp"
                            alt=""
                            priority
                            className="w-full h-full md:h-[900px]"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>


                    {/* Content: static on mobile, absolute on desktop */}
                    <div className="py-10 xl:py-20 text-black relative xl:absolute xl:inset-0 xl:flex xl:items-end xl:justify-end -mt-[37rem] md:mt-[-32rem] xl:mt-0 px-[35px] xl:px-0">
                        <div className="max-w-[700px]">
                            <h2 className="text-[25px] xl:text-[60px] leading-tight">
                                Supercharge HR with SAP Joule
                            </h2>
                            <h3 className="mt-5 xl:text-[36px] text-[22px] leading-tight font-semibold">
                                AI-Powered Business Assistant for SuccessFactors
                            </h3>
                            <p className="mt-5 font-normal">
                                Meet SAP Joule, your AI-powered co-pilot for HR and enterprise processes. Rialtes helps you leverage Joule for impactful automation and insights:
                            </p>
                            <ul className="list-disc space-y-3 pl-5 xl:text-[20px] text-[16px] mt-5">
                                <li>AI-driven employee experience and HR recommendations.</li>
                                <li>Automated document handling and case resolution.</li>
                                <li>Conversational AI for managers and employees.</li>
                                <li>Seamless integration with SAP S/4HANA and SuccessFactors.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-full custom-container xl:pr-0 max-md:px-0 mt-0">
                <div className="grid xl:grid-cols-12 grid-cols-1 h-full xl:gap-20 items-center">

                    {/* Image: first on mobile, second on desktop */}
                    <div className="xl:col-span-7 col-span-12 order-1 xl:order-2 h-full">
                        <div className="xl:block hidden h-full">
                            <Image
                                src="/images/sap/sap-digital-desk/desktop/btp.webp"
                                alt=""
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
                                alt=""
                                priority
                                className="w-full h-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                    </div>

                    {/* Content: second on mobile, first on desktop */}
                    <div className="xl:col-span-5 col-span-12 order-2 xl:order-1 mx-[35px] xl:mx-0 mt-10 xl:mt-0 md:mx-0">
                        <h2 className="leading-tight">Rialtes’ BTP Center of Excellence</h2>
                        <h3 className="xl:text-[36px] text-[22px] mt-5 font-semibold leading-tight">
                            Innovate, Integrate, and Extend SAP Faster
                        </h3>
                        <p className="mt-5 xl:pr-20 xl:text-[30px] text-[18px] text-[#006FBE] font-semibold">
                            Certified SAP BTP Experts at Your Service
                        </p>
                        <p className="mt-8 font-normal">
                            From AI-driven workflows to mobile apps and event-driven architectures, our SAP BTP experts ensure:
                        </p>
                        <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3 xl:pr-10">
                            <li>Fast-track application development using SAP Build.</li>
                            <li>AI/ML-powered extensions using SAP AI Core.</li>
                            <li>Seamless APIs and integrations through API Hub.</li>
                            <li>Event Mesh and Graph for real-time connectivity.</li>
                            <li>Full governance, security, and compliance in the cloud.</li>
                        </ul>
                        <div className="mt-5 relative">
                            <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} />
                        </div>
                    </div>

                </div>
            </section>

            <section className="relative  xl:mt-32 mt-10 pb-20 xl:pb-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/migrate.webp"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/migrate.webp"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div
                    className="h-full relative
                    custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white">
                        <div className="xl:col-span-9 col-span-12">
                            <h2 className="text-[25px] xl:text-[60px]  mt-16 leading-tight">
                                Migrate to SAP SuccessFactors with Confidence
                            </h2>
                            <h3 className="xl:text-[36px] text-[20px] xl:mt-12 mt-5">SuccessPlus by Rialtes</h3>

                        </div>

                    </div>


                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white xl:pt-10 pt-5 xl:pb-20">

                        <div className="xl:col-span-6 col-span-12">
                            <h3 className="xl:text-[28px] text-[18px] xl:font-semibold font-medium">Workday to SAP SuccessFactors Migration Services</h3>
                            <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3 xl:pr-20">
                                <li> End-to-end secure migration strategy..</li>
                                <li>Data cleansing, transformation, and migration.</li>
                                <li> Business process mapping and optimization.</li>
                                <li> SAP CPI-based integrations for seamless workflows.</li>
                            </ul>
                        </div>
                        <div className="xl:col-span-6 col-span-12 mt-10 xl:mt-0">
                            <h3 className="xl:text-[28px] text-[18px] xl:font-semibold font-medium xl:pr-20">ZOHO HR to SAP SuccessFactors Migration</h3>
                            <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3 xl:pr-20">
                                <li> Standardized HR process setup in SuccessFactors.</li>
                                <li>Accurate, compliant data migration.</li>
                                <li> Real-time integration and ongoing support.</li>
                                <li> Localization and global compliance readiness.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="custom-container  h-full xl:!pl-[142px] max-md:px-0 mt-10 xl:mt-0">
                <div className="grid xl:grid-cols-12 grid-cols-1 h-full xl:gap-20">
                    <div className="col-span-7">
                        <Image
                            src="/images/sap/sap-digital-desk/desktop/why.webp"
                            alt=""
                            priority
                            className="w-full h-full"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="col-span-5 xl:mt-20 mx-[35px] xl:mx-0 mt-10 md:mx-0">
                        <h2 className="leading-tight">Why Partner with Rialtes?</h2>
                        <h3 className="xl:text-[36px] text-[20px] mt-5 font-semibold leading-tight">Your Success Is Our Mission</h3>
                        <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3">
                            <li> Global SAP Certified Partner with a proven delivery record.</li>
                            <li>24/7 SAP Managed Services for uninterrupted operations.</li>
                            <li>SAP BTP, Integration, and AI Center of Excellence.</li>
                            <li>Dedicated customer success managers. </li>
                            <li>Flexible, outcome-based engagement models.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div
                className="custom-container text-black py-20">
                <ContactForm title={'Ready to Unlock Maximum Value from SAP? Let’s Talk!'} subtitle={"Contact us today to explore how SAP Digital Desk can transform your SAP operations."} className={"leading-tight xl:max-w-[71%]"} />
            </div >
        </div >
    );
}