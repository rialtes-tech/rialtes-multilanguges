"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import UnorderedList from "@/app/components/unorderedList";
import Script from "next/script";
import BlogSocialIcons from "@/app/components/blogSocialIcons";
import RealtedCaseStudies from "@/app/components/RealtedCaseStudies"
import useUrl from "@/app/components/useUrl";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.rialtes.com/insights/case-studies/sap-erp-cloud-solutions-automotive-case-study/"
    },
    "headline": "SAP ERP Cloud Solutions | Automotive Case Study",
    "description": "This case study shows how Rialtes implemented SAP ERP Cloud solutions for a leading global tire manufacturer to automate O2C and P2P using SD, MM, FI, Ariba, EWM, VIM, and Fiori—improving order accuracy, fulfillment speed, inventory efficiency, and supplier performance.",
    "image": "https://www.rialtes.com/images/case-studies/automotive-tire-factory-production-line.webp",
    "author": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com"
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
    "keywords": "sap erp cloud solutions, automotive case study",
    "datePublished": "2025-11-19"
};
const challenges = [
    {
        "title": "Order-to-Cash (O2C)",
        "desc": [
            "Manual order processing led to frequent errors and delayed fulfillment.",
            "Inventory mismanagement caused recurring stockouts of high - demand sizes, resulting in lost revenue.",
            "Delayed invoicing slowed cash inflows and weakened customer relationships."
        ]
    },
    {
        "title": "Procure-to-Pay (P2P)",
        "desc": [
            "Lack of process visibility caused inefficiencies, higher procurement costs, and potential supply chain disruptions.",
            "Absence of real-time supplier and inventory data hampered decision-making.",
            "Manual invoice processing created bottlenecks in reconciliation and payments."
        ]
    }
]
const solutions = [
    {
        "title": "SAP ERP Integration",
        "desc": [
            "Integrated modules: SD(Sales and Distribution), MM(Materials Management), FI(Financial Accounting), and Ariba for procurement.",
            "Used SAP PI / PO(Process Integration / Orchestration) for seamless data exchange with legacy systems."
        ]
    },
    {
        "title": "Automated Order Management",
        "desc": [
            "Configured SAP SD for sales order automation with ATP (Available-to-Promise) checks.",
            "Integrated with EDI (Electronic Data Interchange) for real-time order capture from distributors."
        ]
    },
    {
        "title": "Real-time Inventory Management",
        "desc": [
            "Enabled SAP Extended Warehouse Management (EWM) for granular inventory tracking.",
            "Integrated IoT sensors for real-time stock visibility in warehouses and production lines."
        ]
    },
    {
        "title": "Automated Invoice Processing",
        "desc": [
            "Deployed SAP VIM (Vendor Invoice Management) by OpenText for OCR-based invoice capture and workflow automation.",
            "Integrated with SAP FI for automatic posting and reconciliation.",
        ]
    },
    {
        "title": "Supplier Relationship Management",
        "desc": [
            "Leveraged SAP Ariba Network for supplier onboarding, catalog management, and performance tracking.",
            "Implemented scorecards and KPIs using SAP Analytics Cloud for supplier evaluation"
        ]
    }
]
const fioriData = [
    {
        "title": "Fiori Implementation Highlights",
        "desc": [
            "Role-Based Dashboards: Designed intuitive Fiori Launchpad tiles tailored for Sales, Procurement, Inventory, and Finance teams, enabling faster access to critical tasks.",
            "Responsive Design: Enabled mobile and tablet access for field sales and warehouse teams, improving real-time decision-making and reducing delays."
        ]
    },
    {
        "title": "Custom Fiori Apps",
        "desc": [
            "Order Management App: Allowed sales teams to create, track, and modify orders with real-time ATP checks and customer insights.",
            "Inventory Insights App: Provided warehouse managers with live stock levels, reorder alerts, and movement history.",
            "Invoice Tracker App: Empowered finance teams to monitor invoice status, approvals, and payment cycles with drill-down analytics."
        ]
    }
]
const benefits = [
    {
        "title": "Order Accuracy Improved by 40%",
        "desc": "Automation reduced manual entry errors."
    },
    {
        "title": "Order Fulfillment Speed Increased by 35%",
        "desc": "Real-time visibility allowed faster processing and delivery."
    },
    {
        "title": "Inventory Holding Costs Reduced by 25%",
        "desc": "Better demand forecasting minimized excess stock."
    },
    {
        "title": "Stockouts Decreased by 30%",
        "desc": "Popular tire sizes consistently available, boosting customer satisfaction."
    },
    {
        "title": "Invoice Processing Time Reduced by 50%",
        "desc": "Payments processed faster, reducing cycle times."
    },
    {
        "title": "Procurement Costs Lowered by 15%",
        "desc": "Data-driven purchasing decisions improved supplier terms and efficiency."
    },
    {
        "title": "Supplier Performance Scores Increased by 25%",
        "desc": "Stronger collaboration and transparency improved relationships."
    }
]
const businessData = [
    {
        "title": "User Adoption Increased by",
        "perc": "60%",
        "desc": "Simplified interfaces and mobile access boosted engagement across departments."
    },
    {
        "title": "Task Completion Time Reduced by",
        "perc": "40%",
        "desc": "Role-based apps minimized navigation and manual data entry."
    },
    {
        "title": "Error Rates Dropped by",
        "perc": "35%",
        "desc": "Guided workflows and validations reduced process deviations."
    },
    {
        "title": "Mobile Productivity Improved by",
        "perc": "50%",
        "desc": "Field teams accessed real-time data on the go, accelerating order and delivery cycles."
    }
]

export default function page() {
    const currUrl = useUrl()
    const fullUrl = "https://www.rialtes.com/insights/case-studies/sap-erp-cloud-solutions-automotive-case-study";
    return (
        <section className="min-h-screen bg-white">
            <Seo
                title="SAP ERP Cloud Solutions for Automotive | A Case Study"
                description="This automotive case study showcases how SAP ERP Cloud solutions have brought innovation to O2C and P2P, enhancing accuracy, inventory control, and speed."
                canonical={`https://www.rialtes.com/insights/case-studies/sap-erp-cloud-solutions-automotive-case-study/`}
            />
            <Script
                id="schema-revolutionizing"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[380px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/case-studies/automotive-tire-factory-production-line.webp"
                        alt="Automotive tires moving on a production line in a modern manufacturing facility"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block h-full">
                    <Image 
                        src="/images/case-studies/automotive-tire-factory-production-line-mobile.webp"
                        alt="Automotive tires moving on a production line in a modern manufacturing facility Mobile"
                        priority
                        height={250}
                        width={375}
                        className="w-full h-full object-cover"
                    />
                </div> 
            </section>

            <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
                <div className="grid lg:grid-cols-12">
                    <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">
                        {/* date and icons */}
                        <div className="sm:flex justify-between">
                            <div>
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Automotive</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>19 November 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>


                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                                Transforming O2C and P2P Processes with SAP ERP Cloud Solutions
                            </h1>

                            {/* client section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    Client Profile
                                </h2>

                                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    Our client is a leading tire manufacturer, ranked among the top 25 globally and recognized as a flagship company in the automotive sector. Known for its innovation in radial technology, the company offers an extensive portfolio spanning Truck/Bus Radials, Light Commercial Vehicles, Passenger Car Radials, Off-the-Road, Farm Vehicles, and two- and three-wheelers. They are also pioneers in motorsport tire technology and Smart Tyres with advanced Tyre Pressure Monitoring Systems (TPMS).
                                </p>
                            </div>{" "}

                            {/* challenges section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    Challenge
                                </h2>
                                {
                                    challenges.map((data, ind) => {
                                        return (
                                            <div key={ind} className="md:mt-10">
                                                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight font-bold  mt-5">
                                                    {data.title}
                                                </h3>
                                                <UnorderedList
                                                    ulClassName="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] marker:text-black list-disc text-black font-medium mt-5 pl-[36px] lg:pl-[46px] "
                                                    liClassName="mt-4 text-black last:pb-0"
                                                    arrName={data.desc}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* solutions section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    Solution
                                </h2>
                                <p className="mt-[29px] font-medium xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Rialtes implemented comprehensive SAP ERP cloud solutions to digitize and automate O2C and P2P processes.</p>
                                <div className="grid md:grid-cols-2 grid-cols-1 mt-5 gap-x-[80px] md:gap-y-[30px] gap-y-[20px]">
                                    {
                                        solutions.map((data, ind) => (
                                            <div key={ind} >
                                                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight font-bold mt-5">
                                                    {ind + 1}. {data.title}
                                                </h3>
                                                <ol
                                                    className="mt-[16px] xl:mt-[20px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] space-y-3">
                                                    {data.desc.map((elem, id) => (
                                                        <li key={id}>
                                                            {elem}
                                                        </li>
                                                    ))}
                                                </ol>

                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* fiori section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    Fiori Solutioning: Enhancing Usability and Process Efficiency
                                </h2>
                                <p className="mt-[29px] font-medium xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">As part of the SAP ERP transformation, Rialtes implemented SAP Fiori to modernize the user interface and improve operational agility across departments.</p>
                                {
                                    fioriData.map((data, ind) => (
                                        <div key={ind}>
                                            <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight font-bold mt-10 xl:mt-[50px]">
                                                {data.title}
                                            </h3>
                                            <UnorderedList
                                                ulClassName="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] marker:text-black list-disc text-black font-medium mt-5 pl-[26px]"
                                                liClassName="mt-4 text-black last:pb-0"
                                                arrName={data.desc}
                                            />
                                        </div>
                                    ))
                                }

                            </div>

                            {/* benefits section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    Benefits
                                </h2>
                                <p className="mt-[29px] font-medium xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">The transformation delivered measurable outcomes across operations:</p>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[40px]">
                                    {
                                        benefits.map((data, ind) => (
                                            <div key={ind} className="mt-[15px]">
                                                <h3 className="4xl:text-[22px] 2xl:text-[19px] xl:text-[19px] md:text-[18px] text-[18px] leading-tight font-bold">
                                                    {data.title}
                                                </h3>
                                                <p
                                                    className={`mt-[18px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* business section */}
                                <h3 className="mt-[50px] xl:mt-[60px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight font-bold">
                                    Business Impact of Fiori Enablement
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[46px] sm:w-[80%] md:w-full">
                                    {
                                        businessData.map((data, ind) => (
                                            <div key={ind} className="mt-10">
                                                <div className="w-11 h-11 mb-5 flex items-center justify-center rounded-full bg-[#0C8AED] text-white 4xl:text-[22px] 2xl:text-[19px] xl:text-[19px] md:text-[18px] text-[18px] font-bold">
                                                    {ind + 1}
                                                </div>
                                                <h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.title}
                                                    <span className="text-[#0C8AED] block 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">{data.perc}</span>
                                                </h4>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* case study carousel */}
            <section className="custom-container lg:pr-0 xl:my-[120px] md:my-[60px] my-[60px]">
                <RealtedCaseStudies url={currUrl} currTopic="Automotive" />
            </section>
        </section>
    );
}
