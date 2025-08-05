"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import LearnMore from "@/app/components/learnMore";
import Link from "next/link";
import Seo from "@/app/components/Seo";
import UnorderedList from "@/app/components/unorderedList";
import Script from "next/script";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SAP ARIBA Implementation Services",
    "alternateName": "SAPBuyPlus by Rialtes",
    "url": "https://www.rialtes.com/services/spend-management/sapbuyplus-ariba-implementation-partner/",
    "image": "https://www.rialtes.com/assets/images/sapbuyplus-ariba.jpg",
    "description": "Rialtes SAPBuy+ helps enterprises transform procurement with SAP ARIBA through advisory, implementation, integration, and optimization services. Streamline procure-to-pay operations, enhance supplier collaboration, and maximize ROI with SAPBuy+.",
    "provider": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg",
        "sameAs": [
            "https://www.linkedin.com/company/rialtes-technologies-llc/",
            "https://www.youtube.com/@rialtes"
        ]
    },
    "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "Singapore" }
    ],
    "serviceType": "SAP ARIBA Implementation, Integration & Migration",
    "audience": {
        "@type": "Audience",
        "audienceType": [
            "CIOs",
            "Procurement Heads",
            "IT Directors",
            "Operations Managers"
        ]
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SAPBuy+ Service Suite",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "SAP ARIBA License Advisory"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Implementation & Design with SAP Signavio and Activate"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Quality Assurance & Governance"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "System Integration with SAP S/4HANA, SuccessFactors, and Non-SAP Tools"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Post Go-Live Support and Supplier Onboarding"
                }
            }
        ]
    }
}
const WhyChooseRialtes = () => {
    const whyChooseData = [
        {
            title: "SAP ARIBA License Advisory",
            desc: "Guidance on selecting the right ARIBA modules based on procurement needs."
        },
        {
            title: "Implementation & Design",
            desc: "Process-driven design using SAP Signavio and SAP Activate methodology."
        }, {
            title: "Quality Assurance & Governance",
            desc: "Best-in-class testing, compliance validation, and process optimization."
        },
        {
            title: "System Integration",
            desc: "Connecting ARIBA seamlessly with SAP S/4HANA, SAP SuccessFactors, and other third-party applications via SAP CPI."
        }, {
            title: "Post Go-Live Support",
            desc: "Continuous monitoring, supplier onboarding, data optimization, and user training."
        },
    ]
    return (
        <section className="lg:pt-[89px] lg:pb-[40px] pt-[37px] pb-[42px] text-[#FFFFFF] mt-[53px] lg:mt-[85px]
        lg:bg-[url('/images/sap-buy/why-choose-rialtes-img.webp')]
        bg-[url('/images/sap-buy/Mobile/why-choose-rialtes-mob-img.webp')] bg-cover bg-no-repeat lg:bg-[50%_20%] max-sm:bg-[20%_10%]">
            <div className="custom-container px-[2rem] md:px-auto mt-[110%] md:mt-[110%] max-[450px]:mt-[150%] max-[390px]:mt-[170%] max-[355px]:mt-[210%]  lg:mt-0">
                <div className="max-lg:pt-[37px]">
                    <h2 className="text-[26px] font-light 4xl:text-[60px] xl:text-[40px] leading-tight lg:w-[60%] xl:w-[50%] w-[86%]">
                        Why Choose Rialtes for SAP ARIBA Implementation?
                    </h2>
                    <h3 className="mt-[21px] text-[22px]  font-semibold lg:mt-[35px] 4xl:text-[42px] xl:text-[38px] leading-tight lg:w-[50%] xl:w-[60%] 2xl:W-[50%]">SAPBuy+ — A Comprehensive Procurement Transformation Approach</h3>
                    <p className="mt-[12px] text-[17px] font-medium lg:mt-[42px] 4xl:text-[22px] xl:text-[20px] leading-tight lg:w-[50%]">Our SAPBuy+ service suite integrates strategy, execution, and support, ensuring a seamless SAP ARIBA adoption for enterprises.</p>
                    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 lg:gap-[30px] gap-[26px] lg:mt-[26px] mt-[45px]">
                        {
                            whyChooseData.map((data, ind) => {
                                return (
                                    <div key={ind} className="bg-[#FFFFFF] pt-[33px] px-[29px] pb-[43px] xl:pt-[42px] xl:pl-[32px] xl:pb-[56px] 4xl:pt-[52px] 4xl:pl-[42px] 4xl:pb-[66px]">
                                        <p className="text-[#0A6BB8] text-[20px] leading-tight font-semibold 4xl:text-[30px]  xl:text-[24px]">{data.title}</p>
                                        <p className="text-[#000000] mt-[26px] text-[16pt] leading-tight font-light lg:mt-[32px] 4xl:text-[24px] xl:text-[20px] lg:w-[80%]">{data.desc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="lg:mt-[53px] mt-[38px] lg:hidden block">
                    <LearnMore />
                </div>
                <div className="mt-[38px] hidden lg:block">
                    <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                </div>
            </div>
        </section>
    )
}
const UnlockProcurementSection = () => {
    const benefitsData = [
        {
            title: "Streamlined Procurement –",
            desc: "Automate the entire procure-to-pay (P2P) process, eliminating inefficiencies."
        },
        {
            title: "Supplier Collaboration –",
            desc: "Connect with millions of suppliers globally through the ARIBA Business Network."
        }, {
            title: "Cost Optimization –",
            desc: "Gain full visibility into procurement spend, negotiate better contracts, and reduce maverick spending."
        }, {
            title: "Compliance & Risk Reduction –",
            desc: "Ensure regulatory compliance, contract alignment, and supplier due diligence."
        }, {
            title: "Cloud-First Procurement –",
            desc: "Eliminate IT maintenance efforts with SAP ARIBA’s SaaS-based architecture."
        },
    ];
    const migrationData = [
        {
            title: "Data Migration & Transformation –",
            desc: "Secure and structured migration of supplier, contract, and transaction data."
        },
        {
            title: "Process Standardization –",
            desc: "Optimizing procurement workflows for SAP ARIBA best practices."
        }, {
            title: "Supplier Enablement –",
            desc: "Onboarding and training suppliers to use ARIBA effectively."
        }, {
            title: "Change Management & Training –",
            desc: "Ensuring successful adoption across procurement teams."
        }
    ];
    return (
        <section className="custom-container relative max-md:px-0">
            {/* Desktop Image */}
            <Image src="/images/sap-buy/unlock-procurement-img.webp" priority alt="unlock-procurement-img" width={600} height={100} className="hidden md:block w-full h-full object-cover" />
            {/* Mobile Image */}
            <Image src="/images/sap-buy/unlock-procurement-img.webp" priority alt="unlock-procurement-img" width={600} height={100} className="block md:hidden w-full h-full object-cover" />
            <div className="z-20 lg:mt-[-50%] relative">
                <div className=" bg-[#006FBE]/90 text-[#FFFFFF] xl:z-50 lg:mx-[80px] xl:py-[64px] xl:px-[60px] md:py-[48px] md:px-[2rem] pt-[40px] pb-[59px] px-[2rem]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-[10px]">
                        <div className="lg:col-span-8 col-span-12">
                            <h2 className="text-[26px] font-light 4xl:text-[60px] xl:text-[40px] leading-tight sm:w-full w-[90%] lg:w-[80%] xl:w-[90%] 2xl:w-[80%] 4xl:w-full">
                                Unlock Procurement Efficiency with SAP ARIBA Implementation & Migration Services
                            </h2>
                        </div>
                        <div className="lg:col-span-4 col-span-12">
                            <p className="text-[16px] font-light 4xl:text-[20px] xl:text-[18px] leading-tight lg:mt-[12px] mt-[24px] sm:w-full">
                                Organizations looking to modernize their procurement systems or migrate from legacy solutions can seamlessly transition to SAP ARIBA with Rialtes’ expert guidance.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mt-[58px] mt-[29px]">
                        <div className="lg:mt-[32px]  xl:w-[90%]">
                            <h4 className="text-[22px] leading-tight font-bold 4xl:text-[36px] xl:text-[30px]">
                                Benefits of Implementing SAP ARIBA
                            </h4>
                            <div>
                                <ul className="list-disc pl-6 lg:mt-[25px] mt-[29px] sm:w-full w-[90%]  4xl:space-y-[24px] space-y-[19px]">
                                    {benefitsData.map((item, index) => (
                                        <li key={index} className="text-[16px] font-light 4xl:text-[24px] 2xl:text-[24px] xl:text-[18px] leading-tight lg:mt-[25px]">
                                            <span className="font-bold">{item.title}</span> {item.desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="lg:mt-[32px] xl:w-[90%]">
                            <h4 className="text-[20px] font-semibold 4xl:text-[36px] xl:text-[30px] leading-tight lg:w-[80%]">
                                SAP ARIBA Migration Services
                            </h4>
                            <p className="text-[16px] mt-[26px] font-light 4xl:text-[20px] xl:text-[18px] leading-tight lg:mt-[25px]">
                                For businesses already using SAP SRM, SAP ECC, or other legacy procurement systems, Rialtes offers end-to-end migration services, including:
                            </p>
                            <div>
                                <ul className="list-disc pl-6 lg:mt-[25px] mt-[29px] sm:w-full w-[90%] 4xl:space-y-[24px] space-y-[19px]">
                                    {migrationData.map((item, index) => (
                                        <li key={index} className="text-[16px] font-light 4xl:text-[24px] 2xl:text-[24px] xl:text-[18px] leading-tight lg:mt-[25px]">
                                            <span className="font-bold">{item.title}</span> {item.desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const SapAribaModulesSection = () => {
    const sapAribaDirectData = [
        "Real-time visibility into supply chain requirements.",
        "Automated purchase order (PO) generation linked to production schedules.",
        "Supplier collaboration tools to minimize disruptions and optimize delivery schedules."
    ]
    const sapAribaIndirectData = [
        "Standardized approval workflows to ensure compliance.",
        "AI-driven spending analysis to identify savings opportunities.",
        "Real-time supplier collaboration to manage invoices, payments, and SLAs."
    ]
    return (
        <section className="custom-container max-md:px-0 lg:mt[95px] mt-[63px]">
            <h2 className="text-[26px] leading-tight font-light 4xl:text-[60px] xl:text-[40px] w-[80%] md:block hidden">SAP ARIBA Modules & Rialtes Implementation Expertise</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center md:mt-[52px] lg:mt-[52px]">
                <div className="order-1 lg:order-2 h-full w-full">
                    <Image
                        src="/images/sap-buy/sap-ariba-modules-img.webp"
                        alt="sap-ariba-modules-img"
                        width={0}
                        height={0}
                        className="w-full hidden md:block h-full object-cover object-[25%_20%]"
                        priority
                    />
                    {/* mob and tablet img */}
                    <Image
                        src="/images/sap-buy/Mobile/sap-ariba-modules-mob-img.webp"
                        alt="sap-ariba-modules-img"
                        width={800}
                        height={600}
                        className="w-full block md:hidden h-auto"
                        priority
                    />
                </div>
                <div className="order-2 lg:order-1 md:px-[0] px-[2rem]">
                    <h2 className="text-[26px] font-light 4xl:text-[60px] xl:text-[40px] leading-tight w-[90%] md:hidden block">SAP ARIBA Modules & Rialtes’ Implementation Expertise</h2>
                    <h4 className="text-[20px] leading-tight font-semibold 4xl:text-[36px] xl:text-[30px] mt-[26px] lg:w-[63%] xl:w-full">
                        SAP ARIBA for Direct Procurement – Integrated with SAP S/4HANA
                    </h4>
                    <p className="text-[16px] leading-tight mt-[23px] font-normal 4xl:text-[20px] xl:text-[18px] lg:mt-[33px]">
                        Direct procurement involves raw materials, components, and production-related items. SAP ARIBA, integrated with SAP S/4HANA, ensures:
                    </p>
                    <div>
                        <UnorderedList arrName={sapAribaDirectData} ulClassName="list-disc pl-6 lg:mt-[26px] mt-[26px] sm:w-full w-[90%]  4xl:space-y-[24px] space-y-[19px]" liClassName="text-[16px] leading-tight font-normal 4xl:text-[20px] xl:text-[18px] lg:mt-[24px]" />
                    </div>
                    <h4 className="text-[20px] leading-tight font-semibold 4xl:text-[36px] xl:text-[30px] lg:mt-[64px] mt-[62px]">
                        SAP ARIBA for Indirect Procurement – Smarter, Policy-Driven Buying
                    </h4>
                    <p className="text-[16px] leading-tight mt-[26px] font-normal 4xl:text-[20px] xl:text-[18px] lg:mt-[33px]">
                        Indirect procurement covers office supplies, professional services, IT resources, and facility management. With SAP ARIBA’s automated sourcing and contract management, businesses achieve:
                    </p>
                    <div>
                        <UnorderedList arrName={sapAribaIndirectData} ulClassName="list-disc pl-6 lg:mt-[26px] mt-[29px] sm:w-full w-[90%] 4xl:space-y-[24px] space-y-[19px]" liClassName="text-[16px] leading-tight font-normal 4xl:text-[20px] xl:text-[18px] lg:mt-[24px]" />
                    </div>
                    <div className="lg:mt-[25px]">
                        <LearnMore />
                    </div>
                </div>
            </div>
        </section>
    )
}
const AribaBusinessNetworkSection = () => {
    const sapAribaData = [
        "Seamless Supplier Discovery – Connect with millions of verified suppliers globally.",
        "RFQ & Tendering Automation – Enable real-time negotiations with transparent pricing.",
        "Order & Invoice Digitization – Reduce manual effort and errors in transaction processing.",
        "End-to-End Supply Chain Visibility – Gain actionable insights into order tracking, shipment status, and risk mitigation."
    ]
    return (
        <section className="custom-container max-md:px-0 lg:mt-[62px] mt-[61px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center md:mt-[52px] lg:mt-[52px]">
                <div className="order-1 lg:order-1 h-full w-full">
                    <Image
                        src="/images/sap-buy/ariba-business-network-img.webp"
                        alt="ariba-business-network-img"
                        width={800}
                        height={1000}
                        className="w-full hidden md:block h-full object-cover"
                        priority
                    />
                    {/* mob and tablet img */}
                    <Image
                        src="/images/sap-buy/Mobile/ariba-business-network-mob-img.webp"
                        alt="ariba-business-network-img"
                        width={800}
                        height={600}
                        className="w-full block md:hidden h-auto"
                        priority
                    />
                </div>
                <div className="order-2 lg:order-2 md:px-[0] px-[2rem]">
                    <h2 className="text-[26px] leading-tight font-light 4xl:text-[60px] xl:text-[40px]">
                        SAP ARIBA Business Network
                    </h2>
                    <h4 className="text-[20px] leading-tight font-semibold 4xl:text-[42px] xl:text-[38px] lg:mt-[31px] mt-[26px] w-[70%]">
                        Global Supplier Collaboration
                    </h4>
                    <p className="text-[16px] leading-tight mt-[23px] font-normal 4xl:text-[20px] xl:text-[18px] lg:mt-[31px]">
                        SAP ARIBA Business Network is the world’s largest digital marketplace for suppliers and buyers, facilitating:
                    </p>
                    <UnorderedList arrName={sapAribaData} ulClassName="list-disc pl-6 lg:mt-[32px] mt-[26px] sm:w-full w-[90%] 4xl:space-y-[24px] space-y-[19px]" liClassName="text-[16px] leading-tight font-normal 4xl:text-[24px] xl:text-[18px] lg:mt-[24px] lg:w-[80%]" />
                </div>
            </div>
        </section>
    )
}
const SupplierProfileSection = () => {
    const sapAribaDirectData = [
        "Supplier onboarding automation with compliance validation.",
        "Continuous supplier performance tracking with real-time dashboards.",
        "Risk scoring & fraud detection based on AI-driven analytics.",
        "Ongoing supplier relationship management to optimize procurement efficiency."
    ]
    return (
        <section className="custom-container mt-[63px] lg:mt-0">
            <section className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center md:mt-[52px] lg:mt-0">
                <div className="order-1 xl:order-2 xl:col-span-7">
                    <Image
                        src="/images/sap-buy/supplier-profile-img.webp"
                        alt="supplier-profile-img"
                        width={800}
                        height={1000}
                        className="w-full hidden md:block h-full"
                        priority
                    />
                    <Image
                        src="/images/sap-buy/Mobile/supplier-profile-mob-img.webp"
                        alt="supplier-profile-mob-img"
                        width={800}
                        height={600}
                        className="w-full block md:hidden h-auto"
                        priority
                    />
                </div>
                <div className="order-2 xl:order-1 md:px-0 xl:col-span-5 lg:mt-[40px]">
                    <h2 className="text-[26px] leading-tight font-light 4xl:text-[58px] xl:text-[40px]">
                        Supplier Profile & Risk Management
                    </h2>
                    <p className="text-[16px] leading-tight mt-[23px] font-normal 4xl:text-[20px] xl:text-[18px]  lg:mt-[33px]">
                        A robust supplier management framework is critical for mitigating risks. Rialtes enables:
                    </p>
                    <div>
                        <UnorderedList arrName={sapAribaDirectData} ulClassName="list-disc pl-6 lg:mt-[26px] mt-[26px] w-[90%] sm:w-[80%] 4xl:space-y-[24px] space-y-[19px]" liClassName="text-[16px] leading-tight font-normal 4xl:text-[20px] xl:text-[18px] lg:mt-[24px]" />
                    </div>
                    <div className="lg:mt-[76px]">
                        <LearnMore />
                    </div>
                </div>
            </section>
        </section>
    )
}
const AribaContract = () => {
    const contractData = [
        "Automated contract creation using predefined templates.",
        "Collaboration tools for legal and procurement teams to streamline approvals.",
        "Digital signature support for quick and secure contract execution.",
        "Built-in compliance tracking to monitor contract obligations and renewals."
    ]
    return (
        <section
            className="relative md:bg-[url('/images/sap-buy/ariba-contract-img.webp')] bg-no-repeat bg-cover bg-center lg:mt-[67px]">
            <div className="custom-container max-md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%,60%] xl:grid-cols">
                    <div className="md:hidden w-full h-[500px] bg-[url('/images/sap-buy/Mobile/ariba-contract-mob-img.webp')] bg-no-repeat bg-cover bg-center" />
                    <div className="hidden md:block" />
                    <div className="bg-[#363636] mx-[36px] md:mx-0 text-[#FFFFFF] lg:pt-[107px] lg:pb-[94px] lg:pl-[73px] lg:pr-[53px] pt-[46px] pb-[79px] px-[26px] mt-[-54%] md:mt-0 lg:ml-[32px]">
                        <h2 className="text-[26px] leading-tight font-light 4xl:text-[60px] xl:text-[40px]">
                            ARIBA Contract Management
                        </h2>
                        <h3 className="mt-[18px] text-[20px] leading-tight font-semibold lg:mt-[36px] 4xl:text-[30px] xl:text-[24px]">
                            Centralized & Compliant
                        </h3>
                        <p className="mt-[15px] text-[16px] leading-tight font-light lg:mt-[39px] 4xl:text-[24px] xl:text-[24px]">
                            SAP ARIBA simplifies contract lifecycle management with:
                        </p>
                        <UnorderedList arrName={contractData} ulClassName="list-disc pl-6 lg:mt-[39px] mt-[24px] w-[90%] sm:w-[80%] 4xl:space-y-[24px] space-y-[19px]" liClassName="text-[16px] leading-tight font-normal 4xl:text-[20px] xl:text-[18px] lg:mt-[24px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}
const ExploreRelatedSection = () => {
    const exploreData = [
        {
            title: "SAP SuccessFactors",
            desc: "Align procurement strategies with workforce planning.",
            link: "https://www.rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner/"
        },
        {
            title: "SAP S/4HANA",
            desc: "A real-time ERP foundation for procurement, finance, and supply chain management.",
            link: "https://www.rialtes.com/services/business-transformation/grow-with-sap-services/"

        }, {
            title: "SAP for Direct & Indirect Procurement",
            desc: "Drive procurement transformation across sourcing categories.",
            link: "/contact-us"

        },
    ]
    return (
        <section className="custom-container lg:mt-[90px] mt-[58px] px-[2rem]">
            <h2 className="text-[26px] leading-tight font-light 4xl:text-[60px] xl:text-[40px]">
                Explore Related SAP Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:mt-[53px] mt-[36px]">
                {
                    exploreData.map((data, ind) => {
                        const isFirstTwo = ind === 0 || ind === 1;
                        const borderClasses = isFirstTwo
                            ? "border-b md:border-b-0 md:border-r-2 border-[#848484] pb-[40px] lg:pb-0"
                            : "";
                        return (
                            <div
                                className={`h-full ${borderClasses} first:pl-0 first:pt-0 pt-[42px] md:pt-0 last:pr-0 md:pl-[40px] md:pr-[20px] lg:pl-[40px] mb-[36px] lg:mb-[45px] lg:pr-[40px] flex flex-col justify-between`}
                                key={ind}>
                                <div>
                                    <h3 className="text-[24px] leading-tight font-semibold 4xl:text-[30px] xl:text-[24px]">
                                        {data.title}
                                    </h3>
                                    <p className="mt-[14px] text-[16px] leading-tight font-light xl:mt-[29px] 4xl:text-[24px] xl:text-[20px]">
                                        {data.desc}
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <Link
                                        href={data.link}
                                        className={`inline-block bg-[#006FBE] 4xl:text-[20px] xl:text-[18px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-["#134874"] font-semibold text-white py-3 px-8 transition duration-300 mt-6`}>
                                        Know More
                                    </Link>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section >
    )
}
const SeamlessIntergrationsSection = () => {
    const seamlessData = [
        {
            title: "SAP ARIBA needs to work seamlessly within an enterprise’s broader IT landscape. Rialtes leverages SAP Cloud Platform Integration (CPI) to connect ARIBA with:",
            list: ["SAP S/4HANA for procurement and finance automation.", "SAP SuccessFactors to align procurement with HR policies (contractor hiring, travel expenses).", "Non-SAP Applications such as ERP, CRM, or third-party logistics systems."]
        },
        {
            title: "Additionally, Rialtes brings deep expertise in SAP Business Technology Platform (BTP), enabling:",
            list: ["Custom ARIBA extensions for industry-specific procurement needs.", "Workflow automation & AI-driven procurement insights.", "Embedded analytics for procurement performance tracking."]
        }
    ];
    return (
        <section className="relative lg:mt-[102px] mt-[43px]">
            <Image
                src="/images/sap-buy/seamless-img.webp"
                alt="seamless-img"
                width={600}
                height={100}
                className="hidden lg:block w-full h-full object-cover"
                priority
            />
            <Image
                src="/images/sap-buy/Mobile/seamless-mob-img.webp"
                alt="seamless-img"
                width={600}
                height={100}
                className="block lg:hidden w-full h-[1200px] object-cover"
                priority
            />
            <div className="custom-container max-lg:px-0 relative">
                <div className="bg-[#006FBE] max-lg:bg-[#006FBE]/70 max-lg:absolute max-lg:bottom-0 text-[#FFFFFF] z-20 xl:py-[64px] lg:px-[60px] md:py-[48px] lg:ml-auto pt-[42px] pb-[98px] px-[36px] lg:translate-y-[-40px] xl:w-[90%] lg:w-[80%] lg:mt-[-400px] 4xl:mt-[-500px] 5xl:mt-[-647px]">
                    <div className="lg:col-span-8 col-span-12">
                        <h2 className="text-[26px] leading-tight font-light 4xl:text-[60px] xl:text-[40px] sm:w-full lg:w-[70%] xl:w-[90%]">
                            Seamless Integrations Powered by SAP CPI & Rialtes BTP Competency
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[45px] lg:mt-[39px] mt-[20px]">
                        {seamlessData.map((data, ind) => (
                            <div className="lg:mt-[32px]" key={ind}>
                                <p className="text-[#FFFFFF] text-[16px] leading-tight font-light 4xl:text-[24px] xl:text-[20px]">
                                    {data.title}
                                </p>
                                <UnorderedList arrName={data?.list} ulClassName="pl-5 list-disc lg:mt-[39px] mt-[24px] 4xl:space-y-[24px] space-y-[19px]" liClassName="text-[16px] leading-tight font-light 4xl:text-[20px] xl:text-[18px] lg:mt-[25px]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
const BuyingInvoicingSection = () => {
    const buyingData = [
        "Catalog-based purchasing with predefined pricing and vendor terms.",
        "Purchase order (PO) & invoice reconciliation to eliminate mismatches.",
        "Automated tax & compliance validation to prevent fraud and regulatory risks.",
        "AI-powered spend analytics to optimize procurement budgets."
    ]
    return (
        <section className="text-[#FFFFFF] relative lg:mt-[82px] sm:mt-[200px] md:mt-[200px] mt-[100px] ">
            <div className="flex flex-col-reverse xl:flex-row items-center xl:items-start xl:relative">
                <div className="z-10 bg-[#073259] xl:w-[60%] w-full xl:my-auto relative">
                    <div className="custom-container px-[2rem] pb-[56px] lg:pt-[59px] lg:pr-[57px] lg:pb-[71px] buyingLeftDiv">
                        <h2 className="text-[20px] leading-tight font-light 4xl:text-[60px] xl:text-[40px]">
                            Buying & Invoicing (Procure-to-Pay)
                        </h2>
                        <h3 className="mt-[17px] text-[20px] leading-tight font-semibold lg:mt-[39px] 4xl:text-[42px] xl:text-[38px]">
                            Complete Automation
                        </h3>
                        <p className="mt-[20px] text-[16px] leading-tight font-light lg:mt-[39px] 4xl:text-[20px] xl:text-[18px]">
                            SAP ARIBA Buying & Invoicing module automates the full procure-to-pay cycle, offering:
                        </p>
                        <UnorderedList arrName={buyingData} ulClassName="pl-5 list-disc lg:mt-[29px] mt-[34px] 4xl:space-y-[24px] space-y-[19px]" liClassName="text-[16px] leading-tight font-light 4xl:text-[20px] xl:text-[18px] lg:mt-[25px]" />
                    </div>
                </div>
                <div className="xl:w-[70%] 3xl:h-full xl:h-[760px] w-full relative xl:-ml-[216px] mt-6 xl:mt-0">
                    {/* Desktop Image */}
                    <Image
                        src="/images/sap-buy/buying-img.webp"
                        alt="buying-img"
                        width={600}
                        height={100}
                        className="hidden lg:block w-full h-full object-cover"
                        priority
                    />
                    <div className="block lg:hidden absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-20%] w-[84%] z-10">
                        <Image
                            src="/images/sap-buy/Mobile/buying-mob-img.webp"
                            alt="buying-img"
                            width={600}
                            height={100}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
const AgentChat = () => {
    const agentData = [
        {
            title: "Instant Supplier Communication –",
            desc: "Automate RFQs, POs, and invoice tracking via WhatsApp."
        },
        {
            title: "Real-Time Procurement Approvals –",
            desc: "Enable procurement managers to approve POs via mobile."
        }, {
            title: "Multi-Role & Security Model –",
            desc: "Configure access based on procurement roles."
        }, {
            title: "Quick Setup & Integration –",
            desc: "Deploy within minutes across SAP & Salesforce ecosystems."
        }
    ];
    return (
        <section className="relative xl:mt-[143px] mt-[89px]">
            <div className="z-50">
                <div className="custom-container lg:pr-0">
                    <Image
                        src="/images/sap-buy/agent-chat-img.webp"
                        alt="agent-chat-img"
                        width={600}
                        height={100}
                        className="hidden lg:block w-full h-full object-cover"
                        priority
                    />
                </div>
                <Image
                    src="/images/sap-buy/Mobile/agent-chat-mob-img.webp"
                    alt="agent-chat-img"
                    width={600}
                    height={100}
                    className="block lg:hidden w-full h-full object-cover"
                    priority
                />
            </div>
            <div className="custom-container lg:pl-0 max-md:px-0">
                <div className="custom-container lg:pr-0 bg-[#184671] max-md:px-0">
                    <div className="grid xl:grid-cols-2 xl:gap-[26px] top-20% text-[#FFFFFF] pt-[42px] xl:pt-[170px] xl:pb-[129px] xl:mt-[-8%] z-[-2] lg:pr-[40px] xl:pr-[50px] 4xl:pr-[60px] max-md:px-[36px]">
                        <div>
                            <h2 className="text-[26px] leading-tight font-light 4xl:text-[60px] xl:text-[40px]">Introducing AgentChat</h2>
                            <h3 className="text-[26px] leading-tight font-semibold xl:mt-[6px] 4xl:text-[40px] xl:text-[30px]">AI-Powered Supplier Engagement</h3>
                            <p className="mt-[24px] text-[18px] leading-[22px] font-light xl:mt-[53px] 4xl:text-[22px] xl:text-[18px] lg:w-[80%]">Rialtes RialChat is a bi-directional WhatsApp conversational app, designed for seamless procurement collaboration.</p>
                            <div className="mt-[30px] xl:block hidden">
                                <Link
                                    href="/products/agentchat"
                                    className={`inline-block bg-[#006FBE] 4xl:text-[20px] xl:text-[18px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[#006FBE] font-semibold text-white py-3 px-8 transition duration-300 mt-6 cursor-pointer`} >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-[20px] leading-tight font-semibold 4xl:text-[30px] xl:text-[26px] mt-[24px] xl:mt-0">
                                Key Features of AgentChat for SAP ARIBA Users
                            </h4>
                            <div>
                                <ul className="list-disc pl-6 xl:mt-[41px] mt-[24px] sm:w-full w-[90%] 4xl:space-y-[24px] space-y-[19px]">
                                    {agentData.map((item, index) => (
                                        <li key={index} className="text-[16px] leading-tight font-light 4xl:text-[20px] xl:text-[18px] xl:mt-[25px]">
                                            <span className="font-bold">{item.title}</span> {item.desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="my-[46px] xl:hidden block">
                                <Link
                                    href="/products/agentchat"
                                    className={`inline-block bg-[#006FBE] 4xl:text-[20px] xl:text-[18px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[#006FBE] font-semibold text-white py-3 px-8 transition duration-300 mt-6 cursor-pointer`}>
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default function page() {
    return (
        <section>
            <Seo
                title="SAP Ariba Implementation Partner and Procurement Solutions | Rialtes"
                description="As a leading Ariba implementation partner, Rialtes powers procurement transformation with SAPBuy+ and expert Ariba services tailored to modern supply chain needs."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/services/spend-management/sapbuyplus-ariba-implementation-partner/"
            />
            <Script
                id="schema-sap-buy-plus"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative group overflow-hidden h-[399px] lg:h-[600px] 4xl:h-[650px] ">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/sap-buy/sap-buy-banner.webp"
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
                        src="/images/sap-buy/Mobile/sap-buy-banner-mob.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center text-[#ffffff]">
                    <div className="grid grid-cols-12 w-full">
                        <div className="4xl:col-span-7 sm:col-span-8 xl:col-span-6 col-span-11">
                            <h3 className="text-[18px] md:text-[24px] font-bold">
                                SAPBuy+
                            </h3>
                            <h1 className="text-[26px] leading-tight xl:text-[44px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px] min-[450px]:w-[60%] xl:w-full">
                                Transform Procurement Excellence with Rialtes SAPBuy+ Services for SAP ARIBA
                            </h1>
                        </div>
                        <div className="4xl:col-span-5 sm:col-span-4 xl:col-span-6 col-span-1">
                        </div>
                    </div>
                </div>
            </section>
            {/* page information */}
            <section className="custom-container mt-[51px] lg:mt-[85px] px-[2rem]">
                <p className=" leading-tight font-normal w-[96%] 4xl:text-[22px] xl:text-[19px] text-[16px] xl:w-[90%] lg:w-[90%]">
                    At Rialtes, we help organizations redefine procurement efficiency with SAP ARIBA, the industry’s leading cloud-based solution for strategic sourcing, contract management, supplier collaboration, and procure-to-pay automation. With SAP ARIBA, businesses can streamline procurement operations, reduce costs, ensure compliance, and drive supplier engagement on a global scale.
                </p>
                <p className="leading-tight font-normal w-[96%] mt-[19px] lg:mt-[30px] 4xl:text-[22px] xl:text-[19px] text-[16px] xl:w-[90%] lg:w-[90%]">
                    As a certified SAP partner with a global presence in the United States, Canada, India, and Singapore, Rialtes delivers comprehensive SAP ARIBA solutions, covering advisory, implementation, integration, and continuous optimization. Our SAPBuy+ service suite ensures that enterprises achieve end-to-end procurement transformation while maximizing ROI on SAP investments.
                </p>
            </section>
            {/* Why Choose Rialtes */}
            <WhyChooseRialtes />
            {/* unlock procurement section */}
            <UnlockProcurementSection />
            {/* sap aribas modules  */}
            <SapAribaModulesSection />
            {/* ariba business network */}
            <AribaBusinessNetworkSection />
            {/* Buying Invoicing Section */}
            <BuyingInvoicingSection />
            {/* ariba contract section */}
            <AribaContract />
            {/* supplier profile section */}
            <SupplierProfileSection />
            {/* Seamless Intergrations Section */}
            <SeamlessIntergrationsSection />
            {/* Explore Related Section */}
            <ExploreRelatedSection />
            {/* agent chat */}
            <AgentChat />
            {/* Contact Form */}
            <div className="custom-container pb-10 xl:mt-[109px] xl:mb-[166px] mt-[50px] mb-[45px]">
                <ContactForm title='Ready to Elevate Your Procurement with SAP ARIBA?' subtitle='With Rialtes expertise in SAP ARIBA, you can streamline procurement, enhance supplier collaboration, and drive cost efficiencies.' subtitle1={"Talk to our experts today and unlock procurement transformation!"} className={"xl:w-[70%] xl:font-light 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight"} />
            </div >
        </section>
    )
}