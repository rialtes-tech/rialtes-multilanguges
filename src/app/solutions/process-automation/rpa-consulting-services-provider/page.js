"use client";
import ContactForm from "@/app/components/contactform";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";
import Image from "next/image";
import UnorderedList from "@/app/components/unorderedList";
import Script from "next/script";
import BreadCrumbs from '../../../components/BreadCrumbs'
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";

const featureBoxes = [
    {
        title: "Automation Strategy & License Advisory",
        description:
            "Identify high-value use cases and license optimization.",
    },
    {
        title: "Bot Design, Development, and Implementation",
        description:
            "Scalable and secure bot development.",
    },
    {
        title: "Pre-built Industry Accelerators",
        description:
            "Pre-built Industry Accelerators",
    },
    {
        title: "Quality Assurance & Compliance",
        description:
            "Robust testing and regulatory adherence.",
    },
    {
        title: "Post-Go-Live Bot Monitoring and Support",
        description:
            "Ensuring smooth operation and continuous improvement.",
    },

];
const featureBoxes2 = [
    {
        icon: "/images/uipath/manufcature.svg",
        title: "Manufacturing",
        description:
            "Supply chain and inventory bots.",
    },
    {
        icon: "/images/uipath/semiconductor.svg",
        title: "Semiconductor",
        description:
            "Procurement and order processing bots.",
    },
    {
        icon: "/images/uipath/automotive.svg",
        title: "Automotive",
        description:
            "Dealer network and parts management bots.",
    },
    {
        icon: "/images/uipath/retail.svg",
        title: "Retail",
        description:
            "Order and customer service bots.",
    }
];
const whyRpaData = [
    "Seamless automation of repetitive, time-consuming tasks.",
    "End-to-end integration with enterprise platforms like SAP, Salesforce, Oracle.",
    "Rapid ROI and reduced operational costs.",
    "Agility to scale as business grows.",
]
const aribaUseCases = [
    "Automated vendor onboarding and updates.",
    "Invoice processing and three-way matching automation.",
    "Contract lifecycle management and approvals.",
    "Compliance checks and audit readiness automation."
]
const aribaBenefits = [
    "Accelerated procurement cycles.",
    "Error-free supplier transactions.",
    "Improved compliance and vendor satisfaction."
]
const s4hanaUseCases = [
    "Order-to-cash automation — from order creation to invoicing.",
    "Inventory and materials management updates.",
    "Automated purchase order creation and validation.",
    "Financial closing, reconciliation, and reporting."
]
const s4hanaBenefits = [
    "Reduced manual data entry and errors.",
    "Faster, streamlined ERP processes.",
    "Enhanced compliance and data accuracy."
]
const successFactorUsecases = [
    "Employee onboarding and offboarding automation.",
    "Payroll and benefits data management.",
    "Performance management tracking and reminders.",
    "HR compliance document management.",
]
const successFactorBenefits = [
    "Faster and smoother HR operations.",
    "Enhanced employee onboarding experience.",
    "Improved data accuracy and compliance.",
]
const salesforceUsecases = [
    "Automated lead and opportunity management.",
    "Customer case and service ticket processing.",
    "Account and contact data enrichment.",
    "Contract creation and customer onboarding automation.",
]
const salesforceBenefits = [
    "Faster sales cycles.",
    "Better customer service and engagement.",
    "Real-time, accurate CRM data.",
]
const automativeIndustryData = [
    "Dealer order automation.",
    "Warranty claims and service request processing.",
    " Parts supply chain and vendor management.",
]
const manufacturingData = [
    "Procurement and supply chain automation.",
    "Inventory updates and production scheduling.",
    "Quality compliance and reporting.",
]
const retailData = [
    "Customer order management and fulfillment.",
    "Returns processing and inventory updates.",
    "Pricing and product updates across platforms.",
]
const hrData = [
    "Employee lifecycle automation (hire-to-retire).",
    "Payroll, benefits, and compliance management."
]
const visualizationData = [
    "Real-time bot performance dashboards.",
    "Automation impact and ROI tracking.",
    "Integrated insights from Data Cloud and Tableau/Qlik.",
    "Bottleneck identification and continuous optimization.",
]
const aiEnhanceData = [
    "Intelligent document processing (IDP) for contracts, invoices.",
    "Natural Language Processing (NLP) for customer interactions.",
    "Predictive analytics for proactive decision-making.",
    "Automated compliance and risk monitoring.",
]
const provenData = [
    "Agile sprint execution and transparent collaboration.",
    "Delivery hubs in United States, Canada, Singapore, and India.",
    "SAP-certified partner with deep integration and process knowledge.",
]
const whyRiatlesData = [
    "Proven track record of enterprise RPA with SAP, Salesforce, Oracle.",
    "Industry-specific accelerators for faster automation.",
    "Full-spectrum services — strategy to support.",
    "Focus on value, scalability, and rapid ROI. 24/7 monitoring and support for bots.",
]
export default function DemandPlusSection() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "RPA Consulting Services and Solutions",
        "url": "https://www.rialtes.com/solutions/process-automation/rpa-consulting-services-provider",
        "description": "Looking for RPA consulting services providers? We help automate SAP and Salesforce workflows, cut costs, and boost efficiency using UiPath. Start today.",
        "provider": {
            "@type": "Organization",
            "name": "Rialtes",
            "url": "https://www.rialtes.com",
            "logo": "https://www.rialtes.com/images/homepage/logo.svg",
            "sameAs": [
                "https://www.linkedin.com/company/rialtes-technologies-llc",
                "https://x.com/Rialtestech",
                "https://www.youtube.com/@rialtes"
            ]
        },
        "areaServed": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "Singapore" },
            { "@type": "Country", "name": "India" },
            { "@type": "Continent", "name": "Europe" }
        ],
        "serviceType": "UiPath RPA Consulting Services",
        "category": "Robotic Process Automation",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "End-to-End RPA Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Automation Strategy & License Advisory" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Bot Design, Development & Implementation" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Pre-built Industry Accelerators" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Quality Assurance & Compliance" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Post-Go-Live Bot Monitoring and Support" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "RPA Automation with SAP Ariba" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "RPA Automation with SAP S/4HANA" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "RPA Automation with SAP SuccessFactors" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "RPA Automation with Salesforce" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "AI-Enhanced RPA with IDP, NLP, and Predictive Analytics" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Data Visualization & RPA Analytics with Tableau/Qlik" }
                }
            ]
        }
    }
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="RPA Consulting Services and Solutions with UiPath | Rialtes"
                description="Looking for RPA consulting services providers? We help automate SAP and Salesforce workflows, cut costs, and boost efficiency using UiPath. Start today."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/solutions/process-automation/rpa-consulting-services-provider/"
            />
            <Script
                id="schema-rpa"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* breadcrumb schema */}
            <BreadcrumbSchema currPage="UiPath" />
            {/* hero section */}
            <section className="relative">
                <div className="xl:block hidden">
                    <Image
                        src="/images/uipath/desktop/banner.webp"
                        alt="Tosca Banner desktop"
                        width={0}
                        height={0} 
                        priority
                        sizes="100vw"
                        className="w-full"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/uipath/mobile/banner.webp"
                        alt="Toska Banner Mobile"
                        className="w-full h-[400px] object-cover"
                        priority
                        sizes="100vw"
                        width={0}
                        height={0}
                    />
                </div>
                <div className="h-full absolute custom-container xl:!pr-0 mr-0 top-0">
                    <div className="grid xl:grid-cols-12  grid-cols-1 gap-2">
                        <div className="xl:col-span-6  col-span-12 4xl:mt-32 xl:mt-20 mt-40 4xl:pr-16  xl:pr-10 pr-10 max-[340px]:pr-0 md:pr-64">
                            <h3 className="text-white xl:text-[24px]  font-bold mb-2">UiPath RPA Services</h3>
                            <h2 className="text-white leading-tight mt-5   text-[26px] 4xl:text-[60px]   xl:text-[44px]">
                                Driving Next-Gen Automation for a Smarter Enterprise
                            </h2>
                        </div>
                        <div className="xl:col-span-7 col-span-12">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description */}
            <section className="custom-container xl:!pr-0 mt-5">
                {/* breadcrumb */}
                <BreadCrumbs currPage="UiPath" />

                <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-24 mt-10 items-center">
                    <div className="col-span-2 mt-10 xl:mt-20 order-1 xl:order-2">
                        <Image
                            src="/images/uipath/image.svg"
                            alt="UiPath Banner"
                            className="4xl:w-full w-[170px]"
                            priority
                            sizes="100vw"
                            width={0}
                            height={0}
                        />
                    </div>
                    <div className="xl:col-span-8 order-2 xl:order-1">
                        <h1 className="leading-tight text-[26px] 4xl:text-[60px] xl:text-[42px] xl:pr-20 mt-10 4xl:mt-0 xl:mt-0 pr-10">
                            Transform Your Enterprise Operations with Intelligent RPA.
                        </h1>
                        <p className="xl:mt-12 mt-5 4xl:text-[22px] text-[16px] pr-[36px] 4xl:pr-20 xl:pr-32">
                            At Rialtes, we help businesses harness the full power of UiPath’s Robotic Process Automation (RPA) platform to automate end-to-end processes, reduce manual effort, improve accuracy, and drive scalable growth.
                        </p>
                        <p className="mt-5 pb-16 4xl:text-[22px] text-[16px] pr-[30px] 4xl:pr-20 xl:pr-24">
                            With a proven track record of deploying RPA solutions integrated with SAP, Salesforce, Oracle, and other enterprise platforms, Rialtes enables companies to focus on innovation while bots handle repetitive work.
                        </p>
                    </div>
                </div>
            </section>
            {/* why RPA section */}
            <section className="custom-container 4xl:!pr-[142px] 4xl:pl-[280px] max-md:px-0">
                <div className="xl:grid-cols-12 grid">
                    <div className="xl:col-span-5 order-1 xl:order-2">
                        <Image
                            src="/images/uipath/desktop/why-rpa.webp"
                            alt="Why RPA with UiPath?"
                            priority
                            sizes="100vw"
                            className="w-full h-full"
                            width={0}
                            height={0}
                        />
                    </div>
                    <div className="xl:col-span-7 bg-[#006FBE] p-10 text-white order-2 xl:order-1 pb-40 4xl:pb-0 xl:pb-16">
                        <h2 className="leading-tight text-[26px] 4xl:text-[60px] xl:text-[42px]">Why RPA with UiPath?</h2>
                        <p className="mt-5 4xl:text-[22px] text-[16px] font-normal 4xl:pr-20">
                            Enterprises today face enormous pressure to streamline processes, ensure compliance, and improve customer and employee experiences. UiPath RPA delivers:
                        </p>
                        <UnorderedList arrName={whyRpaData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 pr-12 mt-8 xl:pr-0 4xl:pr-20" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                    </div>
                </div>
            </section>
            <section className="custom-container 4xl:!pr-[142px] 4xl:pl-[280px] mt-[-100px] 4xl:mt-0 xl:mt-0">
                <div className="xl:grid-cols-12 grid">
                    <div className="xl:col-span-8 bg-[#163055] p-8">
                        <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal">At Rialtes, we make RPA real for businesses — combining strategy, design, deployment, and continuous optimization.</p>
                    </div>
                </div>
            </section>
            {/* end to end section */}
            <section className="xl:mt-24 4xl:mt-24 mt-16 my-10 custom-container 4xl:pr-[464px] xl:pr-[200px]">
                <h2 className="leading-tight text-[26px] 4xl:text-[60px]  xl:text-[42px]">
                    Rialtes’ End-to-End RPA Services
                </h2>
                <div className="4xl:text-[36px] text-[22px] xl:text-[25px] font-semibold leading-tight mt-5">Powered by UiPath</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:mt-[67px] mt-[48px]">
                    {featureBoxes.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white border border-black hover:bg-[#D9F2FF] 4xl:p-10 p-8 flex flex-col h-full">
                            <div className="flex flex-col items-start mb-4">
                                <h3 className="text-[#0A6BB8] mt-2 4xl:text-[30px] xl:text-[24px] text-[20px] font-semibold leading-tight">{feature.title}</h3>
                            </div>
                            <p className="text-[#000000] mt-2 4xl:text-[24px] xl:text-[18px] text-[16px] leading-tight font-normal">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* pre configured section */}
            <section className="mt-24 my-10 custom-container 4xl:pr-[405px] ">
                <h2 className="leading-tight text-[26px] 4xl:text-[60px]  xl:text-[42px]">
                    Pre-Configured Industry Accelerators
                </h2>
                <p className="4xl:text-[22px] text-[16px] leading-tight mt-5">Rialtes offers industry-specific RPA accelerators for rapid deployment in:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-5 4xl:gap-5 gap-20 xl:mt-[67px] mt-[40px] w-[80%] md:w-[80%] lg:w-[90%] xl:w-full">
                    {featureBoxes2.map((feature, index) => (
                        <div
                            key={index}
                            className={`4xl:border-r xl:border-r ${index < 3 ? "border-b" : ""} ${index === 2 || index === 3 ? "md:border-0" : ""} xl:border-b-0 4xl:border-b-0 border-black lg:pr-10  flex flex-col h-full pb-10 pr-10`}>
                            <div className="w-[140px] h-[140px] flex items-start justify-start">
                                <Image
                                    src={feature.icon}
                                    alt={`${feature.title} image`}
                                    width={100}
                                    height={100}
                                    priority
                                    className="h-full w-full"
                                />
                            </div>
                            <div className="flex flex-col items-start mb-4 pt-10">
                                <h3 className="text-[#0A6BB8] mt-2 4xl:text-[30px] xl:text-[24px] text-[24px] font-bold leading-tight">{feature.title}</h3>
                            </div>
                            <p className="text-[#000000] mt-2 4xl:text-[22px] xl:text-[18px] text-[20px] leading-tight font-normal pb-6 lg:pb-4">{feature.description}</p>
                            <div className="mt-auto">
                                <LearnMore />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* ariba section */}
            <section className="mt-20 custom-container 4xl:pl-[280px] 4xl:pr-0 max-md:px-0">
                <div className="grid xl:grid-cols-12">
                    <div className="xl:col-span-4 xl:mt-20 4xl:mt-20 mb-32">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/uipath/desktop/rpa-sap-ariba.webp"
                                alt="RPA Automation with SAP Ariba"
                                priority
                                sizes="100vw"
                                className="w-full relative"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:hidden block px-[35px]">
                            <Image
                                src="/images/uipath/mobile/sap-ariba.webp"
                                alt="RPA Automation with SAP Ariba"
                                priority
                                sizes="100vw"
                                className="w-full relative"
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                    <div className="xl:col-span-8 bg-[#F0DCC9] max-md:px-[35px] md:px-[35px] text-black 4xl:pl-64 4xl:pr-[22rem] xl:pr-[14rem] xl:pl-[11rem] pt-16  4xl:ml-[-200px] xl:ml-[-130px] mt-[-230px] 4xl:mt-0 xl:mt-0">
                        <h2 className="leading-tight text-[26px] 4xl:text-[60px]  xl:text-[40px] pt-24 4xl:pt-0 xl:pt-0 pr-20 xl:pr-0 4xl:pr-0">
                            RPA Automation with SAP Ariba
                        </h2>
                        <h3 className="4xl:text-[40px] xl:text-[25px] text-[20px] font-semibold mt-5 leading-tight pr-20 xl:pr-0 4xl:pr-0">
                            Smart Procurement and Supplier Collaboration
                        </h3>
                        <p className="mt-5 4xl:text-[22px] text-[16px]">Rialtes has deep expertise in automating procurement and supplier workflows in SAP Ariba using UiPath bots.</p>
                        <div className="4xl:mt-10 xl:mt-5 font-semibold 4xl:text-[32px] xl:text-[20px] text-[18px] leading-tight mt-10">Ariba Use Cases:</div>
                        <UnorderedList arrName={aribaUseCases} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-1  font-medium marker:font-bold marker:text-2xl pl-5  mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="4xl:mt-10 xl:mt-5 font-semibold 4xl:text-[32px] xl:text-[20px] text-[18px] leading-tight mt-10">Benefits:</div>
                        <UnorderedList arrName={aribaBenefits} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-1 font-medium  marker:font-bold marker:text-2xl pl-5 mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="mt-5">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </section>
            {/* sap s4hana section */}
            <section className="mt-20 custom-container 4xl:pl-[142px] 4xl:pr-[280px] max-md:px-0">
                <div className="grid xl:grid-cols-12">
                    <div className="4xl:col-span-5 xl:col-span-6 xl:mt-20 4xl:mb-32 mb-16 order-1 xl:order-2">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/uipath/desktop/rpa-auto.webp"
                                alt="RPA Automation with SAP S/4HANA"
                                priority
                                sizes="100vw"
                                className="w-full relative"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/uipath/mobile/saps4hana.webp"
                                alt="RPA Automation with SAP S/4HANA"
                                priority
                                sizes="100vw"
                                className="w-full relative max-md:px-[35px]"
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                    <div className="4xl:col-span-7 max-md:px-[35px] md:px-[35px] xl:col-span-6 bg-[#BFDEE3] text-black pt-16 4xl:pl-[197px] 4xl:pr-[250px] 4xl:mr-[-200px] xl:pl-20 xl:pr-[200px] xl:mr-[-150px] order-2 xl:order-1 mt-[-285px] xl:mt-0 4xl:mt-0">
                        <h2 className="leading-tight text-[26px] 4xl:text-[60px] xl:text-[42px] pt-48 xl:pt-0 4xl:pt-0">
                            RPA Automation with SAP S/4HANA
                        </h2>
                        <h3 className="4xl:text-[40px] xl:text-[30px] text-[20px] font-semibold mt-5 leading-tight">
                            Intelligent ERP Process Automation
                        </h3>
                        <p className="mt-5 4xl:text-[22px] text-[16px]">
                            Rialtes helps clients leverage UiPath to automate mission-critical workflows within SAP S/4HANA, enhancing operational efficiency.
                        </p>
                        <div className="4xl:mt-10 xl:mt-8 mt-10 font-semibold 4xl:text-[32px] xl:text-[22px] text-[18px] leading-tight">
                            S/4HANA Use Cases:
                        </div>
                        <UnorderedList arrName={s4hanaUseCases} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-3 marker:font-bold marker:text-2xl pl-5 font-medium mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="4xl:mt-10 xl:mt-8 mt-10 font-semibold 4xl:text-[32px] xl:text-[22px] text-[18px] leading-tight">
                            Benefits:
                        </div>
                        <UnorderedList arrName={s4hanaBenefits} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-3 marker:font-bold marker:text-2xl pl-5 font-medium mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="mt-5">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </section>
            {/* success factor section */}
            <section className="mt-20 custom-container 4xl:pl-[280px] 4xl:pr-0 max-md:px-0">
                <div className="grid xl:grid-cols-12">
                    <div className="xl:col-span-4 xl:mt-20 mb-16 xl:mb-32">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/uipath/desktop/sap-successfactor.webp"
                                alt="RPA Automation with SAP SuccessFactors"
                                priority
                                sizes="100vw"
                                className="w-full relative"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/uipath/mobile/sap-successfactor.webp"
                                alt="RPA Automation with SAP SuccessFactors"
                                priority
                                sizes="100vw"
                                className="w-full relative max-md:px-[35px]"
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                    <div className="xl:col-span-8 bg-[#E6D2D2] max-md:px-[35px] md:px-[35px] mt-[-200px] xl:mt-0 4xl:mt-0 text-black 4xl:pl-64 4xl:pr-[22rem] xl:pr-[14rem] xl:pl-[11rem] pt-16 4xl:ml-[-200px] xl:ml-[-130px] order-2 xl:order-1">
                        <h2 className="leading-tight text-[26px] 4xl:text-[60px] xl:text-[40px] pt-32 xl:pt-0 4xl:pt-0">
                            RPA Automation with SAP SuccessFactors
                        </h2>
                        <h3 className="4xl:text-[40px] xl:text-[25px] text-[20px] font-semibold mt-5 leading-tight">
                            Streamlining HR Operations
                        </h3>
                        <p className="mt-5 4xl:text-[22px] text-[16px]">
                            Rialtes automates complex and repetitive HR workflows in SuccessFactors using UiPath, creating a more agile HR function.
                        </p>
                        <div className="4xl:mt-10 xl:mt-5 font-semibold 4xl:text-[32px] xl:text-[20px] text-[18px] leading-tight mt-10">
                            SuccessFactors Use Cases:
                        </div>
                        <UnorderedList arrName={successFactorUsecases} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-1 marker:font-bold marker:text-2xl pl-5 font-medium mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="4xl:mt-10 xl:mt-5 font-semibold 4xl:text-[32px] xl:text-[20px] text-[18px] leading-tight mt-10">
                            Benefits:
                        </div>
                        <UnorderedList arrName={successFactorBenefits} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-1 marker:font-bold marker:text-2xl pl-5 font-medium mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="mt-5">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </section>
            {/* salesforce section */}
            <section className="mt-20 custom-container 4xl:pl-[142px] 4xl:pr-[280px] max-md:px-0">
                <div className="grid xl:grid-cols-12">
                    <div className="4xl:col-span-5 xl:col-span-6  xl:mt-20 4xl:mb-32 mb-16 order-1 xl:order-2">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/uipath/desktop/rpa.webp"
                                alt="RPA Automation with Salesforce"
                                priority
                                sizes="100vw"
                                className="w-full relative"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/uipath/mobile/rpa-auto.webp"
                                alt="RPA Automation with Salesforce"
                                priority
                                sizes="100vw"
                                className="w-full relative max-md:px-[35px]"
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                    <div className="4xl:col-span-7 xl:col-span-6 max-md:px-[35px] md:px-[35px] bg-[#ACD8ED] mt-[-200px] xl:mt-0 4xl:mt-0 text-black pt-16 4xl:pl-[197px] 4xl:pr-[250px] 4xl:mr-[-200px] xl:pl-20 xl:pr-[200px] xl:mr-[-150px] order-2 xl:order-1">
                        <h2 className="leading-tight text-[26px] 4xl:text-[60px] xl:text-[42px] pt-32 xl:pt-0 4xl:pt-0">
                            RPA Automation with Salesforce
                        </h2>
                        <h3 className="4xl:text-[40px] xl:text-[30px] text-[20px] font-semibold mt-5 leading-tight">
                            Powering Customer-Centric Automation
                        </h3>
                        <p className="mt-5 4xl:text-[22px] text-[16px]">
                            Rialtes enables clients to extend UiPath RPA to Salesforce, improving CRM, sales, and service processes.
                        </p>
                        <div className="4xl:mt-10 xl:mt-8 font-semibold 4xl:text-[32px] xl:text-[22px] text-[18px] leading-tight mt-10">
                            Salesforce Use Cases:
                        </div>
                        <UnorderedList arrName={salesforceUsecases} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-3 marker:font-bold marker:text-2xl pl-5 font-medium mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="4xl:mt-10 xl:mt-8 font-semibold 4xl:text-[32px] xl:text-[22px] text-[18px] leading-tight mt-10">
                            Benefits:
                        </div>
                        <UnorderedList arrName={salesforceBenefits} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-3 marker:font-bold marker:text-2xl pl-5 font-medium mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="mt-10">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </section>
            {/* industry focused section */}
            <section className="relative 4xl:mt-32 xl:mt-32 mt-20 custom-container 4xl:pl-[280px] 4xl:pr-0 xl:pr-0 max-md:pr-0">
                <div>
                    <Image
                        src="/images/uipath/desktop/industry.webp"
                        alt="Automotive Industry"
                        priority
                        sizes="100vw"
                        className="w-full h-[300px] xl:h-full"
                        width={0}
                        height={0}
                    />
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-1  4xl:mt-[-285px] xl:mt-[-200px]">
                    <div className="xl:col-span-10 bg-[#016FBE]  text-white p-8 xl:pl-20 4xl:pl-20 4xl:pb-20 pb-24 xl:pb-10">
                        <h2 className="leading-tight 4xl:mt-10 text-[26px] 4xl:text-[60px]  xl:text-[40px] pr-10 xl:pr-0 4xl:pr-0">Industry-Focused UiPath RPA Use Cases</h2>
                        <div className="4xl:text-[40px] text-[20px] font-semibold leading-tight 4xl:mt-8 xl:mt-5 mt-5">Ready-to-Deploy</div>
                        <div className="flex xl:gap-20 4xl:gap-20 gap-10 4xl:mt-14 mt-10 md:gap-0 xl:flex-row flex-col md:flex-row">
                            <div>
                                <h3 className="4xl:text-[30px] text-[18px] xl:text-[22px]">Automotive Industry</h3>
                                <UnorderedList arrName={automativeIndustryData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 pr-12 mt-3 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            </div>
                            <div>
                                <h3 className="4xl:text-[30px] text-[18px] xl:text-[22px]">Manufacturing & Semiconductor</h3>
                                <UnorderedList arrName={manufacturingData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 pr-12 mt-3 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            </div>
                        </div>
                        <div className="flex xl:gap-20 4xl:gap-24 gap-10 md:gap-6 xl:flex-row flex-col 4xl:mt-16 xl:mt-16 mt-10 md:flex-row">
                            <div>
                                <h3 className="4xl:text-[30px] text-[18px] xl:text-[22px]">Retail</h3>
                                <UnorderedList arrName={retailData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 pr-12 mt-3 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                                <div className="absolute 4xl:mt-5 xl:block hidden">
                                    <LearnMore />
                                </div>
                            </div>
                            <div>
                                <h3 className="4xl:text-[30px] text-[18px] xl:text-[22px]">HR (Cross-Industry)</h3>
                                <UnorderedList arrName={hrData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 pr-12 mt-3 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                                <div className="absolute mt-5 xl:hidden block">
                                    <LearnMore />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* data visualization section */}
            <section className="mt-24 custom-container 4xl:pr-[142px]">
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20 4xl:gap-20">
                    <div className="xl:col-span-5 col-span-12">
                        <Image
                            src="/images/uipath/desktop/data-visu.webp"
                            alt="Data Visualization"
                            priority
                            sizes="100vw"
                            className="w-full relative"
                            width={0}
                            height={0}
                        />
                    </div>
                    <div className="xl:col-span-7 mt-16">
                        <h2 className="leading-tight 4xl:mt-10 text-[26px] 4xl:text-[60px]  xl:text-[40px] pr-10 xl:pr-0 4xl:pr-0">Data Visualization & Analytics with UiPath + Tableau/Qlik + Data Cloud</h2>
                        <UnorderedList arrName={visualizationData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 marker:font-bold marker:text-2xl pl-5 font-medium 4xl:mt-8 xl:mt-5 pr-12 mt-8 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                    </div>
                </div>
            </section>
            {/* ai enhaced section */}
            <section className="xl:mt-24 4xl:mt-24 mt-16 custom-container 4xl:pr-0 xl:pr-0">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-8 4xl:ml-[35px] order-1 xl:order-2">
                        <Image
                            src="/images/uipath/desktop/ai-enhance.webp"
                            alt="AI-Enhanced RPA"
                            priority
                            sizes="100vw"
                            className="w-full"
                            width={0}
                            height={0}
                        />
                    </div>
                    <div className="xl:col-span-4 order-2 xl:order-1">
                        <h2 className="leading-tight text-[26px] 4xl:text-[55px] xl:text-[40px] 4xl:pr-10 pt-10 xl:pt-0 4xl:pt-0">
                            AI-Enhanced RPA
                        </h2>
                        <h3 className="4xl:text-[40px] xl:text-[30px] text-[20px] mt-5 leading-tight font-bold pr-10 xl:pr-0 4xl:pr-0">
                            Taking Automation to the Next Level
                        </h3>
                        <p className="4xl:text-[22px] text-[16px] leading-tight mt-5">
                            Rialtes integrates AI with UiPath bots to automate more intelligent, complex processes:
                        </p>
                        <UnorderedList arrName={aiEnhanceData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-medium marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5  mt-8 4xl:pr-16" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="absolute mt-5 xl:mt-5">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </section>
            {/* proven section */}
            <section className="mt-40 custom-container 4xl:pr-0 xl:pr-0 4xl:pl-[142px]">
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20">
                    <div className="xl:col-span-5 4xl:ml-[35px]">
                        <Image
                            src="/images/uipath/desktop/proven.webp"
                            alt="Rialtes’ certified SCRUM"
                            priority
                            sizes="100vw"
                            className="w-full"
                            width={0}
                            height={0}
                        />
                    </div>
                    <div className="4xl:col-span-5 xl:col-span-6">
                        <h2 className="leading-tight text-[26px] 4xl:text-[60px]  xl:text-[40px] 4xl:pr-10 pt-10 xl:pt-0 4xl:pt-0">Proven Delivery with Global Reach & Agile Execution</h2>
                        <p className="4xl:text-[22px] text-[16px] leading-tight mt-5">Rialtes’ certified SCRUM project managers and global delivery centers ensure seamless automation delivery:</p>
                        <UnorderedList arrName={provenData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-medium marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 pr-12 mt-5 4xl:pr-16" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                    </div>
                </div>
            </section>
            <section className="relative xl:mt-32 4xl:mt-32 mt-16 custom-container 4xl:pl-[280px] 4xl:pr-[142px] xl:pr-0 max-md:px-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/uipath/desktop/why-uipath-rpa.webp"
                        alt="Why Rialtes for UiPath RPA?"
                        priority
                        sizes="100vw"
                        className="w-full h-full"
                        width={0}
                        height={0}
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/uipath/mobile/why-uipath-rpa.webp"
                        alt="Why Rialtes for UiPath RPA?"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full object-cover"
                        priority
                    />
                </div>
                <div
                    className="grid xl:grid-cols-12  grid-cols-1 4xl:mt-[-100px] xl:mt-[-70px] max-md:px-[35px]">
                    <div className="col-span-1"></div>
                    <div className="xl:col-span-10 bg-[#016FBE]  text-white p-8 xl:pl-20 4xl:pl-20  pb-12 xl:pb-[rem] 4xl:pb-16">
                        <div className="flex xl:gap-20 xl:flex-row flex-col">
                            <div>
                                <h2 className="leading-tight 4xl:mt-10 text-[26px] 4xl:text-[60px]  xl:text-[40px] pr-10 xl:pr-0 4xl:pr-0">Why Rialtes for UiPath RPA?</h2>
                            </div>
                            <div>
                                <UnorderedList arrName={whyRiatlesData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 pr-10 mt-8 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-20 custom-container pb-20">
                <ContactForm title={'Ready to Transform with UiPath RPA?'} subtitle={"Partner with Rialtes to accelerate your automation journey. Our UiPath-certified experts are ready to help you unlock efficiency, reduce costs, and scale innovation."} subtitle1={"Contact us today for a free automation assessment!"} className={"4xl:max-w-[58rem] xl:max-w-[44rem] leading-tight text-[26px] !font-light 4xl:text-[60px]  xl:text-[45px] pr-10 xl:pr-0"} />
            </div >
        </div>
    );
}
