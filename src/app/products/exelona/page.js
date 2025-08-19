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


export default function Page() {

    const features = [
        {
            img: "/images/products/exelona/mobile-enable.svg",
            alt: "Mobile Enabled",
            title: "100% Mobile-Enabled",
            desc: "Manage leasing, maintenance, and finance on any device.",
        },
        {
            img: "/images/products/exelona/web-chat.svg",
            alt: "AI Interfaces",
            title: "Agentic AI + Conversational Interfaces",
            desc: "AI that automates, prioritizes, and communicates.",
        },
        {
            img: "/images/products/exelona/crm.svg",
            alt: "CRM + ERP",
            title: "CRM + ERP, Unified",
            desc: "One system for marketing, operations, leasing, and accounting.",
        },
        {
            img: "/images/products/exelona/open-api.svg",
            alt: "Open API",
            title: "OPENAPI Architecture",
            desc: "Easily integrates with SAP, Yardi, Oracle, Salesforce, and more.",
        },
    ];

    const properties = [
        {
            title: "Accounts Receivable",
            img: "/images/products/exelona/desktop/account.webp",
            points: [
                "Automated tenant billing and late fee application.",
                "Write-off approval workflows and history tracking.",
                "Receipts processing and ledger reconciliation.",
            ],
            outcomes: [
                "Increased collection efficiency.",
                "Real-time AR visibility across properties.",
            ],
        },
        {
            title: "Budgeting, Forecasting & Financial Reporting",
            img: "/images/products/exelona/desktop/budgeting.webp",
            points: [
                "Multi-year budgeting with property-level customization.",
                "Rolling forecasts based on occupancy and lease data.",
                "Financial statements: Balance Sheet, Trial Balance, Income Statement.",
            ],
            outcomes: [
                "Accurate, dynamic financial planning.",
                "Board-ready, real-time reporting.",
            ],
        },
        {
            title: "Accounts Payable & Procurement",
            img: "/images/products/exelona/desktop/account-payble.webp",
            points: [
                "Payable invoice automation and approval workflows.",
                "Purchase order creation and receipt matching.",
                "Multi-mode payment scheduling and vendor management.",
            ],
            outcomes: [
                "Centralized purchasing and audit compliance.",
                "Transparent spend control across your portfolio.",
            ],
        },
        {
            title: "Inventory & Asset Management",
            img: "/images/products/exelona/desktop/inventory.webp",
            points: [
                "Track inventory at unit, building, and warehouse level.",
                "Manage capital assets with depreciation schedules.",
                "Maintenance and replacement forecasting.",
            ],
            outcomes: [
                "Improved asset utilization and accuracy.",
                "Financial alignment with CAPEX strategy.",
            ],
        },
    ];
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="MediAIna - Redefining Patient Journey Mapping in Healthcare"
                description="MediAIna puts patients at the center by mapping every care moment with Salesforce Cloud and Rialtes' LifeAI+ to enable truly connected, human-first healthcare."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/products/mediaina-reimagining-patient-journeys/"
            />
            <Script
                id="schema-grow"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative overflow-hidden">
                <div className="xl:absolute inset-0 z-0">
                    <div className="hidden xl:block w-full h-full">
                        <Image
                            src="/images/products/exelona/desktop/banner-desk.webp"
                            alt="grow with sap banner desktop"
                            priority
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Mobile Banner */}
                    <div className="block xl:hidden w-full h-full">
                        <Image
                            src="/images/products/exelona/mobile/mobile-banner.webp"
                            alt="grow with sap banner mobile"
                            priority
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Mask only in bottom-right corner */}
                <div className="absolute xl:bottom-0 xl:right-0 right-[-185px] bottom-[-59px] z-10">
                    <Image
                        src="/images/products/exelona/desktop/mask.webp"
                        alt="mask decoration"
                        width={500}   // adjust as needed
                        height={500}  // adjust as needed
                        className="object-contain"
                        priority
                    />
                </div>


                {/* Content */}
                <div className="relative z-20 custom-container 4xl:mt-[22rem] 2xl:mt-[20rem] xl:mt-[18rem] mt-[200px] 4xl:pr-0">
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-2">
                        <div className="xl:col-span-12 col-span-12 pr-5 text-white">
                            <h1 className="leading-tight break-words 4xl:text-[60px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:pr-0 md:pr-40 pr-10">
                                <span className="text-white text-[24px] xl:text-[60px] 2xl:text-[80px] 4xl:text-[105px] mb-2 break-words">
                                    Exelona™
                                </span>
                            </h1>
                            <h2 className="xl:font-bold font-semibold leading-tight pb-10 xl:pb-0 text-[20px] 4xl:text-[60px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] mt-5 pr-16 4xl:pr-0 2xl:pr-0 xl:pr-0">
                                Powering the Modern Real Estate Enterprise
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* second section */}
            <section>
                <div className="grid grid-cols-12 bg-[#134874] custom-container 4xl:pr-0 2xl:pr-0 xl:pr-0">
                    <div className="xl:col-span-6 col-span-12 mt-10 4xl:pb-20 xl:pb-20 pb-10 4xl:pr-24 xl:pr-0 2xl:pr-0 pr-10">
                        <p className="text-white font-light leading-tight">
                            Welcome to Exelona, the intelligent real estate cloud platform that unifies
                            every step of the property lifecycle—from lead generation to financial
                            closeout. Built for property managers, developers, and portfolio owners,
                            Exelona delivers AI-driven automation, mobile-first experiences, and CRM + ERP
                            convergence, all from a single platform.
                        </p>
                    </div>
                    <div className="xl:col-span-6 col-span-12 relative ">
                        <div className="absolute bottom-0 right-0 z-10 xl:block hidden">
                            <Image
                                src="/images/products/exelona/desktop/mask.webp"
                                alt="mask decoration"
                                width={500}
                                height={500}
                                className="object-contain"
                                priority
                            />
                        </div>


                    </div>
                </div>
            </section>

            <section className="relative group overflow-hidden 2xl:pb-0 4xl:pb-0 bg-[#134874]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/products/exelona/desktop/your-desktop.webp"
                        alt="grow with sap banner"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/products/exelona/mobile/your.webp"
                        alt="grow with sap banner"
                        fill
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="relative custom-container 4xl:pb-0 text-white 4xl:pr-[226px] 2xl:pr-[200px] xl:pr-[150px] pr-10">
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 4xl:mt-32 xl:mt-20 mx-auto mt-20">
                        <div className="xl:col-span-12 col-span-12 pr-5 4xl:pr-[6rem]">
                            <h2 className="4xl:text-[60px] 2xl:text-[48px] text-[26px] xl:text-[40px] leading-tight">Your Digital Real Estate Backbone</h2>


                            <p className="mt-5 leading-tight">Built for modern portfolios, Exelona empowers your teams with seamless collaboration, automation, and scale.</p>
                            <h3 className="4xl:text-[36px] xl:text-[30px] text-[18px] xl:mt-16 mt-5">What Sets Exelona Apart</h3>
                        </div>
                    </div>

                    <div className="xl:mt-16 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 4xl:gap-8 xl:gap-0 gap-16 pb-16 xl:pb-0">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col">
                                <Image
                                    src={feature.img}
                                    alt={feature.alt}
                                    width={100}
                                    height={100}
                                    className="mb-4 w-[100px] h-[100px]"
                                />
                                <h3 className="font-bold 4xl:text-[24px] mt-5 text-[18px] leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-200 leading-tight mt-8 4xl:pr-10">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Link className="mt-20" href="https://www.rialtes.com/industry/real-estate-property-management/">
                            <button className="bg-[#0A6BB8] text-[16px] xl:mt-10 4xl:text-[20px] xl:text-[16px] hover:bg-[#ffffff]  hover:text-[#134874] border-[solid] border-[#134874] 4xl:font-semibold font-normal text-white py-3 px-8 transition duration-300">
                                Learn More
                            </button>
                        </Link>
                    </div>

                </div>

            </section>

            <section className="bg-[#134874]">
                <div className="grid  4xl:grid-cols-[775px,830px] xl:grid-cols-[516px,655px] 2xl:grid-cols-[520px,795px]  custom-container 4xl:pr-0 2xl:pr-0 xl:pr-0">
                    {/* Left Content */}
                    <div className="text-white">
                        <h2 className="4xl:text-[60px] 2x:text-[40px] xl:text-[40px] md:text-[30px] font-light leading-tight text-white mt-20">
                            Asset Marketing –
                            Maximize Leasing Velocity  & Brand Performance
                        </h2>

                        <h3 className="mt-8 4xl:text-[40px] 2xl:text-[30px] xl:text-[28px] font-semibold text-white">
                            Market smarter. Lease faster.
                        </h3>

                        <p className="mt-4 text-gray-200 leading-tight">
                            Exelona’s Asset Marketing module transforms how you position,
                            promote, and lease your properties.
                        </p>


                    </div>

                    {/* Right Image */}
                    <div className="mt-20">
                        <Image
                            src="/images/products/exelona/desktop/asset-marketing.webp" // replace with your actual image path
                            alt="Asset Marketing"
                            width={1000}
                            height={1000}
                            className="w-full object-contain 4xl:ml-[-100px] xl:ml-[-80px] 2xl:ml-0"
                        />
                    </div>
                </div>
                <div className="custom-container  text-white 4xl:pr-[280px] 2xl:pr-[200px] xl:pr-[150px] pr-10">
                    {/* 3 Columns of Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 xl:gap-0">
                        {/* Column 1 */}
                        <div>
                            <h4 className="font-semibold text-white 4xl:text-[22px] text-[18px]">Core Capabilities</h4>
                            <ul className="mt-3 list-outside space-y-5 text-gray-200 list-disc  4xl:text-[20px] text-[16px] xl:pr-20">
                                <li>Lead & campaign management across email, social, and web.</li>
                                <li>Brand consistency through centralized digital asset management.</li>
                                <li>Real-time campaign analytics for property-specific performance.</li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h4 className="font-semibold text-white 4xl:text-[22px] text-[18px]">From Lead to Lease</h4>
                            <ul className="mt-3 space-y-5 text-gray-200 list-outside list-disc  xl:pr-20 4xl:text-[20px] text-[16px] text-left">
                                <li>
                                    Generate leads through branded websites, landing pages, and
                                    ExelPersona.
                                </li>
                                <li>Score and nurture leads using automated AI workflows.</li>
                                <li>
                                    Convert prospects to applicants and residents seamlessly within
                                    Exelona.
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h4 className="font-semibold text-white 4xl:text-[22px] text-[18px]">Business Outcomes</h4>
                            <ul className="mt-3 list-outside space-y-5 text-gray-200 list-disc  xl:pr-20 4xl:text-[20px] text-[16px]">
                                <li>Reduced cost per lead and faster lease-up cycles.</li>
                                <li>Stronger brand recall across your portfolio.</li>
                                <li>
                                    Increased occupancy and improved marketing ROI.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-16 xl:flex gap-10 pb-[5rem] xl:pb-0 4xl:pb-0 2xl:pb-0">
                        <button className="bg-[#0A6BB8]  px-6 py-3 text-left rounded text-white font-semibold 4xl:text-[24px]">
                            Learn More
                        </button>
                        <button className="bg-[#0A6BB8] mt-10 xl:mt-0 px-6 py-3 rounded text-white text-left 4xl:text-[26px] text-[18px]">
                            See how top portfolios grow occupancy with Asset Marketing
                        </button>
                    </div>
                </div>

                <section className="relative w-full">
                    <div className="custom-container mx-auto grid xl:grid-cols-12 gap-0 items-stretch 4xl:px-0  2xl:px-0 xl:px-0 mt-20 max-md:px-0">
                        {/* Left Side - Image */}
                        <div className="xl:col-span-4 col-span-12 relative 4xl:my-16 2xl:my-14 xl:my-12 z-[9] 4xl:mr-[-140px] 2xl:m4-[100px] xl:mr-[-80px] mt-[-100px]">
                            <img
                                src="/images/products/exelona/desktop/ai-enable.webp"
                                alt="AI Property Operations"
                                className="w-full h-full object-cover max-md:px-[35px]"
                            />
                        </div>

                        {/* Right Side - Content */}
                        <div className="xl:col-span-8 col-span-12 bg-[#C6E7FF] absolute   xl:relative 4xl:pl-[230px] 4xl:pr-[150px]  2xl:px-[150px] xl:pl-[130px] xl:pr-[100px] pl-10">


                            {/* Text content */}
                            <h2 className="4xl:text-[60px] xl:text-[40px] 2xl:text-[48px] text-[26px] text-[#0A2E4D] leading-tight mb-4  pt-[24rem] xl:pt-14 4xl:pt-20 2xl:pt-16">
                                AI-Enabled Property
                                Operations – Run Smarter,
                                Respond Faster
                            </h2>

                            <p className="font-semibold 4xl:text-[40px] mt-10 2xl:text-[30px] xl:text-[24px] text-[18px] text-black mb-2 leading-tight">
                                Operational excellence meets automation.
                            </p>
                            <p className="text-gray-700 mb-6 max-w-2xl mt-6">
                                Exelona’s AI-enabled property operations give you full control over
                                daily operations with AI at the core.
                            </p>

                            {/* Features + Outcomes */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-0">
                                <div>
                                    <h3 className="font-semibold text-[#0A6FBF] mb-3 4xl:text-[22px]">Key Features</h3>
                                    <ul className="4xl:space-y-5 space-y-3 xl:space-y-3 text-gray-800 4xl:text-[20px] text-[16px] list-outside list-disc xl:pb-16 2xl:pb-14 4xl:pb-0 pr-10 4xl:pl-[20px] 2xl:pl-[20px] xl:pl-[20px]">
                                        <li>Resident move-in/move-out flows with automated checklists.</li>
                                        <li>AI-enabled monthly billing and recurring charges.</li>
                                        <li>Smart work order management with knowledge article suggestions.</li>
                                        <li>Real-time dashboards with geolocation and skill-based technician assignment.</li>
                                        <li>SLA tracking, maintenance routing, and inventory linkage.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#0A6FBF] mb-3 4xl:text-[22px]">Business Outcomes</h3>
                                    <ul className="4xl:space-y-5 space-y-3 xl:space-y-3 text-gray-800 4xl:text-[20px] text-[16px] list-outside list-disc pr-20 xl:pr-0 2xl:pr-0 4xl:pl-[20px] 2xl:pl-[20px] xl:pl-[20px]">
                                        <li>30% improvement in maintenance resolution time.</li>
                                        <li>Higher resident satisfaction and retention.</li>
                                        <li>Streamlined operations across distributed teams.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Buttons */}

                            <div className="mt-16 xl:mt-0 xl:flex gap-8 xl:gap-5 2xl:gap-10 4xl:mt-[65px] max-md:pr-[35px]">
                                <button className="bg-[#134874]  px-6 py-3 text-left  text-white font-semibold 4xl:text-[24px] xl:text-[16px]">
                                    Learn More
                                </button>
                                <button className="bg-[#0A6BB8] mt-10 xl:mt-0 px-6 py-3  text-white text-left 4xl:text-[26px] text-[18px] xl:text-[16px]">
                                    Automate and optimize property operations
                                </button>
                            </div>
                        </div>
                    </div>

                </section>
                <div className="custom-container text-white xl:grid xl:grid-cols-[1108px] grid-cols-1  mt-[1200px] 4xl:mt-24 2xl:mt-20 xl:mt-16">
                    <div>
                        <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[40px] text-[26px] font-light leading-tight">Property Financial Suite – <br></br>Real Estate Finance Reimagined</h2>
                        <h3 className="mt-5 4xl:text-[40px] 2xl:text-[30px] xl:text-[28px] font-semibold leading-tight">Own your financials from billing to balance sheets.</h3>
                        <p className="mt-5">Exelona’s financial modules deliver accuracy, automation, and clarity across your property finance stack.</p>

                    </div>
                </div>

                <div className="grid lg:grid-cols-2 4xl:gap-24 2xl:gap-24 xl:gap-24 gap-10  custom-container mx-auto 4xl:mt-16 2xl:mt-16 xl:mt-16 mt-0">
                    {properties.map((feature, idx) => (
                        <div key={idx} className="flex flex-col space-y-10">
                            {/* Image (always first on mobile, position switches on lg+) */}
                            <div className="order-first lg:order-none mt-10 lg:mt-0">
                                <Image
                                    src={feature.img}
                                    alt={feature.title}
                                    width={600}
                                    height={400}
                                    className="shadow-lg object-cover w-full h-full"
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="font-semibold mb-4 text-white 4xl:text-[28px] text-[18px]">
                                    {feature.title}
                                </h3>
                                <ul className="list-disc pl-5 space-y-5 mb-4 text-white 4xl:text-[20px] text-[16px] pr-32">
                                    {feature.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>

                                <h4 className="font-semibold text-white mt-10 4xl:text-[22px] text-[18px]">
                                    Outcomes
                                </h4>
                                <ul className="list-disc pl-5 space-y-5 text-white mt-4 4xl:text-[20px] text-[16px]">
                                    {feature.outcomes.map((outcome, i) => (
                                        <li key={i}>{outcome}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}


                </div>
                <div className="mt-16  xl:flex gap-8 xl:gap-5 2xl:gap-10 4xl:mt-24 max-md:pr-[35px] custom-container">
                    <button className="bg-[#073259]  px-6 py-3 text-left  text-white font-semibold 4xl:text-[24px] xl:text-[16px]">
                        Learn More
                    </button>
                    <button className="bg-[#0A6BB8] mt-10 xl:mt-0 px-6 py-3  text-white text-left 4xl:text-[26px] text-[18px] xl:text-[16px]">
                        Streamline your real estate finance
                    </button>
                </div>


                <div className="custom-container mx-auto grid xl:grid-cols-12 grid-cols-1  4xl:px-0 2xl:px-0 xl:px-0 mt-24">
                    {/* Left Side - Image */}
                    <div className="relative xl:col-span-4 col-span-12">
                        <Image
                            src="/images/products/exelona/desktop/excel-persona.webp"
                            alt="ExelPersona Preview"
                            className="object-cover w-full xl:h-full h-[263px]"
                            priority
                            width={1000}
                            height={1000}
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="4xl:px-16 text-white xl:col-span-8 col-span-12 2xl:px-14 xl:px-14">
                        <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[40px] text-[26px] font-light leading-tight mt-10 xl:mt-0 4xl:mt-0 2xl:mt-0">
                            ExelPersona™ – The Ultimate Resident & Applicant Experience
                        </h2>
                        <h3 className="mt-8 4xl:text-[40px] 2xl:text-[30px] xl:text-[28px] font-semibold leading-tight 4xl:pr-64 2xl:pr-64 xl:pr-32">
                            Custom-branded portals. Multilingual access. Mobile-native by design.
                        </h3>
                        <p className="mt-8 4xl:text-[20px] text-base 4xl:pr-[28rem] 2xl:pr-[20rem] xl:pr-[13rem] pr-10">
                            ExelPersona is your fully customizable applicant and resident
                            portal, created to reflect your brand and deliver 24/7 self-service.
                        </p>

                        {/* Two Column Features + Outcomes */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 4xl:pr-40 xl:pr-32 2xl:pr-32 xl:gap-10 4xl:gap-0 2xl:gap-0">
                            {/* Features */}
                            <div>
                                <h4 className="4xl:text-[22px] text-[18px] font-semibold mb-3">Top Features</h4>
                                <ul className="space-y-5 text-gray-200 list-disc list-outside 4xl:text-[20px] text-[16px] pl-5 4xl:pr-20 2xl:pr-20">
                                    <li>Branded UI for each property or region.</li>
                                    <li>Mobile-first design with native access on iOS & Android.</li>
                                    <li>Multilingual support for diverse communities.</li>
                                    <li>
                                        Real-time application status, lease e-sign, service requests,
                                        and payments.
                                    </li>
                                    <li>Built-in AI chatbot powered by AgentChat.</li>
                                </ul>
                            </div>

                            {/* Outcomes */}
                            <div>
                                <h4 className="4xl:text-[22px] text-[18px] font-semibold mb-3 mt-10 4xl:mt-0 2xl:mt-0 xl:mt-0">Outcomes</h4>
                                <ul className="space-y-5 text-gray-200 list-disc list-outside 4xl:text-[20px] text-[16px] pl-5 4xl:pr-20 2xl:pr-20">
                                    <li>Shorter lease cycles and higher conversion.</li>
                                    <li>Reduced call volume with self-service access.</li>
                                    <li>Enhanced resident satisfaction and retention.</li>
                                </ul>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-16 xl:flex gap-8 xl:gap-5 2xl:gap-10 4xl:mt-24 max-md:pr-[35px]">
                            <button className="bg-[#073259]  px-6 py-3 text-left  text-white font-semibold 4xl:text-[24px] xl:text-[16px]">
                                Learn More
                            </button>
                            <button className="bg-[#0A6BB8] mt-10 xl:mt-0 px-6 py-3  text-white text-left 4xl:text-[26px] text-[18px] xl:text-[16px]">
                                Design your branded resident experience with ExelPersona
                            </button>
                        </div>
                    </div>
                </div>



                <section className="relative w-full custom-container 4xl:px-0 2xl:px-0 xl:px-0 max-md:px-0">
                    <div className="grid xl:grid-cols-12 gap-0 mt-20 max-md:px-0">
                        {/* Left Side - Content (desktop first, mobile second) */}
                        <div className="xl:col-span-10 col-span-12 bg-[#B4F0D0] 
                    xl:relative 4xl:pl-[280px] 4xl:pr-[460px]  
                    2xl:pl-[135px] 2xl:pr-[510px] xl:pl-[80px] xl:pr-[435px] 
                    pl-10 order-last xl:order-first mt-[-230px] 4xl:mt-0 2xl:mt-0 xl:mt-0 max-md:px-[35px]">
                            {/* Text content */}
                            <h2 className="4xl:text-[60px] xl:text-[40px] 2xl:text-[48px] text-[26px] text-[#0A2E4D] leading-tight mb-4 pt-[17rem] xl:pt-14 4xl:pt-20 2xl:pt-16">
                                ExelPay™ <br /> Built-In Payments. Complete Control.
                            </h2>

                            <p className="font-semibold 4xl:text-[40px] mt-10 2xl:text-[30px] xl:text-[24px] text-[18px] text-black mb-2 leading-tight 4xl:pr-[12rem]">
                                Integrated payments that work how your residents pay.
                            </p>
                            <p className="text-gray-700 mb-6 max-w-2xl mt-6">
                                ExelPay is Exelona’s secure payment gateway for collecting rent,
                                deposits, and fees with full reconciliation.
                            </p>

                            {/* Features + Outcomes */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-0">
                                <div>
                                    <h3 className="font-semibold text-[#0A6FBF] mb-3 4xl:text-[22px] text-[18px]">
                                        Capabilities
                                    </h3>
                                    <ul className="4xl:space-y-5 space-y-3 xl:space-y-3 text-gray-800 4xl:text-[20px] text-[16px] list-outside list-disc xl:pb-16 2xl:pb-14 4xl:pb-0 pr-10 4xl:pl-[20px] 2xl:pl-[20px] xl:pl-[20px]">
                                        <li>Accepts checks, ACH, and credit/debit cards.</li>
                                        <li>Supports one-time, scheduled, and recurring payments.</li>
                                        <li>Automatically syncs with tenant ledgers and financial reports.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#0A6FBF] mb-3 4xl:text-[22px] text-[18px]">
                                        Business Outcomes
                                    </h3>
                                    <ul className="4xl:space-y-5 space-y-3 xl:space-y-3 text-gray-800 4xl:text-[20px] text-[16px] list-outside list-disc pr-20 xl:pr-0 2xl:pr-0 4xl:pl-[20px] 2xl:pl-[20px] xl:pl-[20px]">
                                        <li>Improved cash flow and faster collections.</li>
                                        <li>Reduced manual entry and reconciliation errors.</li>
                                        <li>Secure, PCI-compliant transactions.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-16 xl:mt-0 xl:flex gap-8 xl:gap-5 2xl:gap-10 4xl:mt-[65px] max-md:pr-[35px]">
                                <button className="bg-[#134874] px-6 py-3 text-left text-white font-semibold 4xl:text-[24px] xl:text-[16px]">
                                    Learn More
                                </button>
                                <button className="bg-[#0A6BB8] mt-10 xl:mt-0 px-6 py-3 text-white text-left 4xl:text-[26px] text-[18px] xl:text-[16px]">
                                    Power up your collections with ExelPay
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Image (desktop right, mobile first) */}
                        <div className="xl:col-span-1 4xl:ml-[-445px] 2xl:ml-[-440px] xl:ml-[-395px] col-span-12 relative 4xl:my-16 2xl:my-14 xl:my-12 z-[9] order-first xl:order-last">
                            <img
                                src="/images/products/exelona/desktop/payment.webp"
                                alt="AI Property Operations"
                                className="w-full h-full object-cover max-md:px-[35px]"
                            />
                        </div>
                    </div>
                </section>



                <div className="custom-container mx-auto grid xl:grid-cols-12 gap-0 items-stretch 4xl:pl-[140px] 2xl:pl-[100px] xl:pl-[80px]  2xl:px-0 xl:px-0 mt-20 max-md:px-0">
                    {/* Left Side - Image */}
                    <div className="xl:col-span-3 col-span-12 relative 4xl:mt-16 2xl:mt-14 xl:mt-12 z-[9] 4xl:mr-[-140px]  xl:mr-[-80px] mt-[-40px]">
                        <img
                            src="/images/products/exelona/desktop/agentchat.webp"
                            alt="AI Property Operations"
                            className="w-full xl:h-full h-[350px] object-cover max-md:px-[35px]"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="xl:col-span-9 mt-[5rem] 4xl:mt-0 xl:mt-0 2xl:mt-0 mb-20 col-span-12 bg-[#073259] absolute text-white  xl:relative 4xl:pl-[315px] 4xl:ml-[-100px] 4xl:pr-[150px]  2xl:px-[150px] xl:pl-[130px] xl:pr-[100px] pl-10">


                        {/* Text content */}
                        <h2 className="4xl:text-[60px] xl:text-[40px] 2xl:text-[48px] text-[26px]  leading-tight mb-4  pt-[18rem] xl:pt-14 4xl:pt-20 2xl:pt-16">
                            AgentChat – Real-Time AI Assistant for Residents & Teams
                        </h2>

                        <p className="font-semibold 4xl:text-[40px] mt-10 2xl:text-[30px] xl:text-[24px] text-[18px] mb-2 leading-tight">
                            Scale your support without scaling your staff.
                        </p>
                        <p className="mb-6  mt-6 leading-tight 4xl:pr-64 2xl:pr-64 xl:pr-32">
                            AgentChat is the conversational AI built into Exelona for residents, applicants, and property teams.
                        </p>

                        {/* Features + Outcomes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-0">
                            <div>
                                <h3 className="font-semibold  mb-3 4xl:text-[22px] text-[18px] ">Key Capabilities</h3>
                                <ul className="4xl:space-y-5 space-y-3 xl:space-y-3  4xl:text-[20px] text-[16px] list-outside list-disc xl:pb-16 2xl:pb-14 4xl:pb-0 pr-10 4xl:pl-[20px] 2xl:pl-[20px] xl:pl-[20px] pl-[15px]">
                                    <li>Natural language queries for status updates, billing, and maintenance.</li>
                                    <li>Embedded in ExelPersona, web, and mobile apps.</li>
                                    <li> Multilingual, role-based access.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-3 4xl:text-[22px] text-[18px]">Outcomes</h3>
                                <ul className="4xl:space-y-5 space-y-3 xl:space-y-3  4xl:text-[20px] pr-20 text-[16px] list-outside list-disc 4xl:pr-20 xl:pr-0 2xl:pr-0 4xl:pl-[20px] 2xl:pl-[20px] xl:pl-[20px] pl-[15px]">
                                    <li>40–60% drop in support tickets and emails. </li>
                                    <li>24/7 availability without additional staff cost.</li>
                                    <li>Improved engagement and satisfaction scores.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Buttons */}

                        <div className="mt-16 xl:mt-0 xl:flex gap-8 xl:gap-5 2xl:gap-10 4xl:mt-[65px] max-md:pr-[35px]">
                            <button className="bg-[#134874]  px-6 py-3 text-left  text-white font-semibold 4xl:text-[24px] xl:text-[16px]">
                                Learn More
                            </button>
                            <button className="bg-[#0A6BB8] mt-10 xl:mt-0 px-6 py-3  text-white text-left 4xl:text-[26px] text-[18px] xl:text-[16px]">
                                Experience AI-powered property communication
                            </button>
                        </div>
                    </div>
                </div>
                 <div className="custom-container mt-20">
        {/* Top section */}
        <div className="grid xl:grid-cols-12 grid-cols-1  gap-2 xl:gap-10">
          <div className="xl:col-span-8 col-span-12">
            <h2 className="4xl:text-[60px] xl:text-[40px] 2xl:text-[48px] text-[26px]  leading-tight text-white font-light">
              Built for Scale.  Trusted by Real Estate Leaders.
            </h2>
          </div>

          {/* Right content */}
          <div className="xl:col-span-4 col-span-12 pr-20">
            <p className="text-lg leading-relaxed text-gray-200">
              Whether you manage 100 units or 100,000, Exelona gives you a
              flexible, intelligent, and secure platform to run your real estate
              enterprise.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-white  4xl:p-8 2xl:p-8 xl:p-5 shadow-md">
            <p className="leading-tight 4xl:pr-8 2xl:pr-8 xl:pr-0">Used by asset managers, operators, and developers.</p>
          </div>

          <div className="bg-white  4xl:p-8 2xl:p-8 xl:p-5 shadow-md">
            <p className="leading-tight 4xl:pr-8 2xl:pr-8 xl:pr-0">Secure, cloud-native, and compliance-ready.</p>
          </div>

          <div className="bg-white  4xl:p-8 2xl:p-8 xl:p-5 shadow-md">
            <p className="leading-tight 4xl:pr-2 2xl:pr-2 xl:pr-0">Scalable for residential, commercial, and mixed-use portfolios.</p>
          </div>

          <div className="bg-white  4xl:p-8 2xl:p-8 xl:p-5 shadow-md">
            <p className="leading-tight 4xl:pr-8 2xl:pr-8 xl:pr-0">Integrated with SAP, Oracle, Yardi, Salesforce, and more.</p>
          </div>
        </div>
      </div>
            </section>




            <section className="custom-container text-black py-16 mt-16 max-md:mt-0">
                <ContactForm title={'Let’s Begin.'} subtitle={"The future of patient experience is intelligent, connected, and outcome-driven. With MediAIna, Rialtes empowers you to reimagine every step of the journey—from identification to engagement, from trials to care, and from data to decisions."} className={"leading-tight max-w-[76%] 4xl:text-[60px] xl:text-[40px]"} />
            </section>
        </div >
    );
}