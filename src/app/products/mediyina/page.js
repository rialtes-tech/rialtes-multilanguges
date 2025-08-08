"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import Script from "next/script";
import ContactForm from "@/app/components/contactform";
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
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.rialtes.com/services/business-transformation/grow-with-sap-services/"
    }
}

export const cards = [
    {
        title: "Patient Identification",
        subtitle:
            "Leverage AI to detect, segment, and activate the right candidates for therapies, care plans, and trials.",
        imagedesk: "/images/products/mediyana/desktop/patient-desktop.webp",
        mobileImage: "/images/products/mediyana/mobile/paitient-mobile.webp",

        benefits: [
            "Predictive models trained on clinical, claims, and wearable data.",
            "Smart filters for rare diseases, chronic care, and trial eligibility.",
            "Integration with EHRs and lab data sources.",
        ],
        outcomes: [
            "Higher patient precision and faster enrollments.",
            "Reduced outreach cost and better ROI.",
            "Improved access to targeted care and therapies."
        ],
        buttons: [
            { label: "Learn More", variant: "primary" },
            { label: "Explore intelligent patient discovery", variant: "secondary" },
        ],
    },
    {
        title: "Candidate Education",
        subtitle:
            "Transform candidates into informed partners with personalized digital education.",
        imagedesk: "/images/products/mediyana/desktop/candidate.webp",
        mobileImage: "/images/products/mediyana/mobile/candidate.webp",

        benefits: [
            "Multilingual, interactive content for devices and therapies.",
            "Adaptive learning based on candidate behavior and feedback.",
            "Integrated care education journeys with chat support..",
        ],
        outcomes: [
            "Increased therapy compliance and satisfaction.",
            "Reduced device misuse and support calls.",
            "Higher candidate engagement with digital tools."
        ],
        buttons: [
            { label: "Learn More", variant: "primary" },
            { label: "Empower candidates through education", variant: "secondary" },
        ],
    },
    {
        title: "Digital Prior Authorization (PA)",
        subtitle:
            "Automate complex prior authorization workflows and reduce treatment delays.",
        imagedesk: "/images/products/mediyana/desktop/digital.webp",
        mobileImage: "/images/products/mediyana/mobile/digital.webp",

        benefits: [
            "End-to-end PA workflow automation with real-time payer integration.",
            "Preconfigured rules for top payers and regulatory standards.",
            "Case routing, escalation, and tracking dashboards.",
        ],
        outcomes: [
            "40–60% reduction in processing time.",
            "Reduced manual errors and rework.",
            "Faster time-to-care with lower administrative overhead."
        ],
        buttons: [
            { label: "Learn More", variant: "primary" },
            { label: "Streamline your authorization process", variant: "secondary" },
        ],
    },
    {
        title: "Clinical Trial Management with 360° Patient View",
        subtitle:
            "Centralize trial operations with unified patient intelligence.",
        imagedesk: "/images/products/mediyana/desktop/clinical.webp",
        mobileImage: "/images/products/mediyana/mobile/clinical.webp",

        benefits: [
            "Real-time patient profiles from EHR, labs, and wearables.",
            "Eligibility verification, onboarding, and compliance tracking.",
            "Integrated digital diaries and adverse event capture.",
        ],
        outcomes: [
            "Better trial outcomes through continuous patient engagement.",
            "Enhanced trial efficiency and reduced dropouts.",
            "Actionable insights for sponsors and CROs."
        ],
        buttons: [
            { label: "Learn More", variant: "primary" },
            { label: "Power smarter trials", variant: "secondary" },
        ],
    },
    {
        title: "Long-Term Care Management",
        subtitle:
            "Extend care beyond the clinic with automated, connected long-term care.",
        imagedesk: "/images/products/mediyana/desktop/long.webp",
        mobileImage: "/images/products/mediyana/mobile/long.webp",

        benefits: [
            "Personalized care pathways and remote monitoring.",
            "Real-time alerts for risk scores and care deviations.",
            "Multi-provider collaboration tools and mobile access",
        ],
        outcomes: [
            "Improved health outcomes and patient retention.",
            "Reduced readmissions and avoidable ER visits.",
            "End-to-end visibility across the care continuum."
        ],
        buttons: [
            { label: "Learn More", variant: "primary" },
            { label: "Digitize long-term care management", variant: "secondary" },
        ],
    },
    {
        title: "Body MAP App – Track Pain & Progress Visually",
        subtitle:
            "A visual-first approach to understanding the patient’s symptoms and responses.",
        imagedesk: "/images/products/mediyana/desktop/body.webp",
        mobileImage: "/images/products/mediyana/mobile/body.webp",

        benefits: [
            "10+ pain parameters visualized in one intuitive interface.",
            "Interactive 3D body mapping for patients and clinicians.",
            "Longitudinal tracking of pain vs. therapy progress.",
        ],
        outcomes: [
            "Accelerated diagnostics and therapy adjustments.",
            " Enhanced patient-provider communication.",
            "Objective outcome measurement for chronic care."
        ],
        buttons: [
            { label: "Learn More", variant: "primary" },
            { label: "Visualize outcomes with Body MAP", variant: "secondary" },
        ],
    },
    {
        title: "Conversational Insights with Agentforce",
        subtitle:
            "Ask questions. Get instant answers. Act faster—powered by Agentforce.",
        imagedesk: "/images/products/mediyana/desktop/conversational.webp",
        mobileImage: "/images/products/mediyana/mobile/conver.webp",

        benefits: [
            "Natural language queries across all MediAIna data.",
            "Automated insights on care gaps, patient status, and trial KPIs.",
            "Role-based access with HIPAA-compliant guardrails.",
        ],
        outcomes: [
            "Time savings for care teams and researchers.", "Data democratization across departments.",
            "Empowered, insight-driven decision-making."
        ],
        buttons: [
            { label: "Learn More", variant: "primary" },
            { label: "Talk to your healthcare data", variant: "secondary" },
        ],
    },
    {
        title: "Unified Intelligence with Salesforce Data Cloud",
        subtitle:
            "Bring every interaction, record, and insight into one powerful data platform.",
        imagedesk: "/images/products/mediyana/desktop/unified.webp",
        mobileImage: "/images/products/mediyana/mobile/unified.webp",

        benefits: [
            "Harmonized data across providers, payers, trials, and patients.", "Predictive models for risk scoring, engagement, and resource planning.",
            "Real-time dashboards and cohort analytics.",
        ],
        outcomes: [
            "Smarter, personalized healthcare delivery.", "Holistic decision-making for patient outcomes.", "Improved population health management."
        ],
        buttons: [
            { label: "Learn More", variant: "primary" },
            { label: "Leverage predictive healthcare intelligence", variant: "secondary" },
        ],
    },
    {
        title: "Seamless Integration with MuleSoft + Athenahealth",
        subtitle:
            "Enable a truly connected care ecosystem with secure, scalable integrations.",
        imagedesk: "/images/products/mediyana/desktop/seamless.webp",
        mobileImage: "/images/products/mediyana/mobile/seamless.webp",

        benefits: [
            "API-led connectivity with Athenahealth, Epic, Cerner, and SAP.", "Bi-directional data flow across EHR, CRM, and ERP systems.", "FHIR and HL7 standard compliance.",
        ],
        outcomes: [
            "Unified patient records and device tracking.", "Reduced duplication and data silos.", "Faster implementation and interoperability at scale."
        ],
        buttons: [
            { label: "Learn More", variant: "primary" },
            { label: "Connect your digital health stack", variant: "secondary" },
        ],
    },
    {
        title: "Real-Time Patient Engagement with AgentChat",
        subtitle:
            "Drive proactive communication across the care journey with intelligent chat.",
        imagedesk: "/images/products/mediyana/desktop/real.webp",
        mobileImage: "/images/products/mediyana/mobile/real.webp",

        benefits: [
            "Secure, HIPAA-compliant omnichannel chat for patients and staff.", "AI and live agent handoffs for smarter conversations.", "Integrated with PA, education, and care workflows.",
        ],
        outcomes: [
            "Higher satisfaction, better adherence, faster resolutions.", "Reduced call volume and improved service metrics.", "Consistent experience across every touchpoint."
        ],
        buttons: [
            { label: "Learn More", variant: "primary" },
            { label: "Engage with AgentChat today", variant: "secondary" },
        ],
    },
    {
        title: "Order & Inventory Management Integration with ERP (SAP)",
        subtitle:
            "Bridge clinical care with operational excellence.",
        imagedesk: "/images/products/mediyana/desktop/order.webp",
        mobileImage: "/images/products/mediyana/mobile/order.webp",

        benefits: [
            "Real-time inventory visibility across warehouses and hospitals.", "Integration with SAP for procurement, fulfillment, and billing.", "Automated alerts for replenishment and stock optimization.",
        ],
        outcomes: [
            "360° product traceability from order to delivery.", "Improved device availability and logistics efficiency.", "Better compliance and cost control."
        ],
        buttons: [
            { label: "Learn More", variant: "primary" },
            { label: "Synchronize operations with ERP", variant: "secondary" },
        ],
    },
    {
        title: "Trusted by Salesforce. Certified by Rialtes.",
        subtitle:
            "Built on the Salesforce platform, MediAIna adheres to the most rigorous global security and privacy standards.",
        imagedesk: "/images/products/mediyana/desktop/trusted.webp",
        mobileImage: "/images/products/mediyana/mobile/trusted.webp",

        benefits: [
            "HIPAA – Safeguarding electronic health data.", "FedRAMP – Government-grade cloud security.", "SOC 2 Type II – Operational integrity and controls.", "GDPR – Privacy-compliant across the EU. Rialtes Certified Security Team – Continuous audits and governance.",
        ],
        outcomes: [
            "Trusted by providers, payers, CROs, and regulators.", "Accelerated deployment in highly regulated environments.", "Total peace of mind for your stakeholders and patients."
        ],
        buttons: [
            { label: "Learn More", variant: "primary" },
            { label: "Read about our security and compliance practices", variant: "secondary" },
        ],
    },
];
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Grow with SAP Solutions by a Trusted SAP Partner | Rialtes"
                description="Grow with SAP solutions that deliver measurable business success, powered by Rialtes—a trusted SAP partner driving enterprise-ready innovation and growth."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/services/business-transformation/grow-with-sap-services/"
            />
            <Script
                id="schema-grow"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative group overflow-hidden pb-20">
                <div className="xl:block hidden">
                    <Image
                        src="/images/products/mediyana/desktop/banner-desk.webp"
                        alt="grow with sap banner"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/products/mediyana/mobile/banner-mobile.webp"
                        alt="grow with sap banner"
                        fill
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="relative custom-container 4xl:pb-20">
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 mt-20 mx-auto">
                        <div className="xl:col-span-7 col-span-12 pr-5 4xl:pr-[6rem]">
                            <h3 className="text-[#073259] text-[20px] xl:text-[24px] font-bold mb-2 break-words ">
                                MediAIna
                            </h3>
                            <h1 className="text-black  leading-tight break-words 4xl:text-[60px] xl:text-[40px]">
                                Redefining the<br></br> Digital Patient Journey for the Life Sciences Industry
                            </h1>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        </div>
                    </div>
                </div>
            </section>
            <section className="xl:pt-20 pt-10">
                <div className="custom-container">
                    <div>
                        <div className="xl:grid xl:grid-cols-12 grid-cols-1 xl:mt-10  xl:gap-16 4xl:gap-10  flex flex-col-reverse">
                            <div className="xl:col-span-7 col-span-12 4xl:pr-10">
                                <p className="leading-tight font-normal">
                                    MediAIna is Rialtes’ next-generation digital platform designed to transform the patient journey. It integrates clinical, operational, and digital touchpoints across providers, payers, medtech, and life sciences enterprises.

                                </p>
                                <p className="mt-5 font-normal">Backed by LifeAI+, Rialtes’ specialized healthcare consulting suite, MediAIna offers intelligent, scalable, and compliant solutions that accelerate innovation, improve outcomes, and deliver human-centered healthcare at scale.</p>
                            </div>
                            <div className="xl:col-span-5 col-span-12">
                                <Image
                                    src="/images/products/mediyana/desktop/logo.svg"
                                    alt="Empower your enterprise with Rialtes"
                                    priority
                                    className="w-[500px] h-[233] xl:mt-[-20px]"
                                    width={0}
                                    height={0}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="custom-container mx-auto grid xl:grid-cols-12 gap-0 items-center 4xl:pr-0">
                    {/* Left Side - Text Card */}
                    <div className="bg-[#05ACA6] text-white p-8  z-10 col-span-4 relative">
                        <h2 className="4xl:text-[60px]">Rialtes LifeAI+</h2>
                        <h3 className="4xl:text-[36px] font-semibold mt-4 leading-tight">
                            Our Vision for Life Sciences
                        </h3>
                        <p className="mt-6  leading-tight font-light">
                            As a consulting leader in digital transformation, Rialtes believes the future of healthcare is built on connected ecosystems, predictive insights, and intelligent automation. With LifeAI+, our dedicated consulting services for life sciences, we help organizations:
                        </p>

                        <div className="mt-10 space-y-4 pb-20">
                            <p className="font-bold 4xl:text-[20px]">Benefits</p>
                            <ul className="list-disc pl-6 space-y-8 4xl:text-[20px] leading-tight 4xl:pr-8">
                                <li>
                                    Accelerate product-to-market timelines with agile delivery models.
                                </li>
                                <li>
                                    Enable smarter clinical trials, connected care, and digital therapeutics.
                                </li>
                                <li>
                                    Leverage Salesforce, AI, and cloud platforms for compliant innovation.
                                </li>
                            </ul>
                        </div>

                        <button className="mt-8 bg-[#073259] text-white font-semibold text-sm xl:text-base py-3 px-6 transition bottom-0 absolute">
                            Learn More
                        </button>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full h-full relative  col-span-8">
                        <div className="xl:block hidden ml-[-200px] 4xl:mt-[9rem] 4xl:h-[814px]">
                            <Image
                                src="/images/products/mediyana/desktop/lifeai.webp"
                                alt="LifeAI Illustration"
                                className="object-cover w-full h-full"
                                priority
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/products/mediyana/mobile/lifeai.webp"
                                alt="LifeAI Illustration"
                                className="object-cover w-full h-full"
                                priority
                                width={0}
                                height={0}
                            />
                        </div>

                    </div>
                </div>
            </section>

            <section>
                {cards.map((card, index) => {
                    const isEven = index % 2 === 0;
                    const bgColors = [
                        "bg-[#CCF7F5]",
                        "bg-[#C6E7FF]",
                        "bg-[#EDEDED]",
                        "bg-[#CCF7F5]",
                        "bg-[#C6E7FF]",
                        "bg-[#EDEDED]",
                        "bg-[#CCF7F5]",
                        "bg-[#C6E7FF]",
                        "bg-[#EDEDED]",
                        "bg-[#CCF7F5]",
                        "bg-[#C6E7FF]",
                        "bg-[#EDEDED]",
                    ];
                    const textBgColor = bgColors[index % bgColors.length];

                    return (
                        <div
                            key={index}
                            className={`grid grid-cols-1 mt-10 xl:grid-cols-12 4xl:pr-[143px]  xl:items-center gap-8 xl:gap-12 relative custom-container overflow-visible 4xl:pl-0 ${isEven ? "" : "xl:flex-row-reverse"
                                }`}
                        >
                            <div
                                className={`relative z-10 col-span-1 xl:col-span-9  px-5 xl:px-0 py-6 xl:py-0 ${textBgColor
                                    } ${isEven
                                        ? "order-2 xl:order-1 4xl:pl-[280px] xl:pr-[200px] "
                                        : "order-2 xl:order-2 4xl:pr-[280px] xl:-mr-[143px] 4xl:mt-20 4xl:pl-[290px]"
                                    }`}
                            >
                                <h2 className="text-2xl xl:4xl:text-[57px] 4xl:pr-[2rem] mb-2 pt-4 xl:pt-16 leading-tight">
                                    {card.title}
                                </h2>
                                <p className="text-gray-700 mb-6">{card.subtitle}</p>

                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-6 mt-10 xl:mt-16">
                                    <div>
                                        <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                                            Benefits
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base xl:4xl:text-[20px]">
                                            {card.benefits.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                                            Outcomes
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base xl:4xl:text-[20px]">
                                            {card.outcomes.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 xl:gap-8 mt-10 xl:mt-16">
                                    {card.buttons.map((btn, i) => (
                                        <button
                                            key={i}
                                            className={`px-4 xl:px-6 py-3 xl:py-4 text-base xl:text-[20px] ${btn.variant === "primary"
                                                ? "bg-[#073259] text-white"
                                                : "bg-[#0A6BB8] text-white"
                                                }`}
                                        >
                                            {btn.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* IMAGE BLOCK */}
                            <div
                                className={`relative z-30 col-span-1 xl:col-span-3 flex items-start ${isEven
                                    ? "order-1 xl:order-2  4xl:ml-[-220px]"
                                    : "order-1 xl:order-1  4xl:pl-[142px] 4xl:mr-[-200px]"
                                    }`}
                            >
                                <div className="w-full h-[600px] 4xl:w-[550px]">
                                   <div className="xl:block hidden h-full">
                                    <Image
                                        src={card.imagedesk}
                                        alt={card.title}
                                        width={600}
                                        height={400}
                                        className={"object-cover w-full h-full"}
                                    />
                                    </div>
                            
                                <div className="block xl:hidden h-full">
                                    <Image
                                        src={card.mobileImage}
                                        alt={card.title}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>


            {/* contact form */}
            <section className="custom-container text-black py-16">
                <ContactForm title={'Ready to Grow with SAP? Partner with Rialtes VoyagerNext Today!'} subtitle={"Empower your growth journey with VoyagerNext — the Rialtes way to unlock S/4HANA Cloud potential."} className={"leading-tight max-w-[76%] 4xl:text-[60px] xl:text-[40px] xl:text-[26px] "} />
            </section>
        </div >
    );
}