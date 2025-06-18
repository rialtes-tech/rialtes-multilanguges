import ContactForm from "@/app/components/contactform";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";
import Image from "next/image";
import React from "react";

export default function page() {
    const thoughtLeadershipData = [
        "Disconnected systems and data silos limiting agility.",
        "Manual processes draining resources and increasing errors.",
        "Limited visibility across departments and partner ecosystems.",
        "Slow, fragmented customer and supplier interactions."
    ]

    const endToEndData = [
        {
            title: "Integration Strategy, Advisory & Architecture",
            dataList: [
                "End-to-end assessment of your integration landscape.",
                "Architecture blueprints aligned with business goals.",
                "Best-fit CPI patterns, adapters, and connectors.",
            ]
        },
        {
            title: "SAP CPI Implementation & Deployment",
            dataList: [
                "SAP-to-SAP (S/4HANA, SuccessFactors, Ariba, etc.) and SAP-to-non-SAP (Salesforce, Oracle, Workday) integrations.",
                "Workflow design, data transformation, error handling, and orchestration.",
                "End-to-end implementation and testing.",
            ]
        },
        {
            title: "Pre-Built Accelerators & Industry Connectors",
            dataList: [
                "Industry-specific accelerators for Manufacturing, Semiconductor, Automotive, and High-Tech. ",
                "Pre-delivered templates for rapid deployment and faster time-to-value.",
            ]
        },
        {
            title: "Quality Assurance & Compliance",
            dataList: [
                "Integration validation and stress testing.",
                "Security, privacy, and compliance frameworks (GDPR, HIPAA).",
            ]
        },
        {
            title: "Post-Go-Live Support & Monitoring",
            dataList: [
                "24/7 monitoring, support, and performance optimization.",
                "Continuous enhancement and change management.",
            ]
        },
    ]

    const specializedData = [
        {
            title: "SAP Ariba Integration",
            subtitle: "Unlock Procurement Excellence",
            desc: "Rialtes offers end-to-end integration between SAP Ariba and SAP S/4HANA and other systems, streamlining procurement and supplier collaboration.",
            keyData: [
                "Supplier onboarding and qualification automation.",
                "Seamless purchase order and invoice exchange.",
                "Contract management and compliance workflows.",
                "Supplier collaboration and performance monitoring.",
            ],
            businessData: [
                "Shorter procurement cycles and lower costs.",
                "Enhanced supplier collaboration and visibility.",
                "Real-time insights into procurement KPIs.",
            ],
            mobImg: "/images/solutions/sap-cpi/Mobile/sap-ariba-mob.webp",
            deskImg: "/images/solutions/sap-cpi/sap-ariba-desk.webp"
        },
        {
            title: "SAP S/4HANA Integration",
            subtitle: "Connecting Your Digital Core",
            desc: "Integrating SAP S/4HANA with other enterprise systems is critical for end-to-end business processes. Rialtes enables real-time and secure integrations with Salesforce, Ariba, Oracle, and more.",
            keyData: [
                "Finance and supply chain data synchronization.",
                "Sales order to fulfillment workflows.",
                "Master data management (customer, product, supplier).",
                "Manufacturing and logistics integrations.",
            ],
            businessData: [
                "Unified business processes and faster order-to-cash.",
                "Real-time operational insights.",
                "Reduced manual errors and streamlined workflows.",
            ],
            mobImg: "/images/solutions/sap-cpi/Mobile/sap-s4hana-mob.webp",
            deskImg: "/images/solutions/sap-cpi/sap-s4hana-desk.webp"
        },
        {
            title: "SAP SuccessFactors Integration",
            subtitle: "Powering Next-Gen HR",
            desc: "Rialtes provides robust integrations of SAP SuccessFactors with payroll, benefits, time tracking, and finance systems, enabling seamless employee lifecycle management.",
            keyData: [
                "Employee and position data synchronization.",
                "Payroll, benefits, and tax system integrations.",
                "Recruiting, onboarding, and learning management workflows.",
                "Employee self-service and mobile enablement.",
            ],
            businessData: [
                "End-to-end HR process automation.",
                "Better employee experience and faster onboarding.",
                "",
                "Compliance with local and global HR regulations.",
            ],
            mobImg: "/images/solutions/sap-cpi/Mobile/sap-successfactor-mob.webp",
            deskImg: "/images/solutions/sap-cpi/sap-successfactor-desk.webp"
        },
        {
            title: "Salesforce and SAP CPI Integration",
            subtitle: "Delivering 360° Customer View",
            desc: "Rialtes connects Salesforce CRM with SAP backend systems like S/4HANA and SAP ERP using CPI for seamless customer, order, and service workflows.",
            keyData: [
                "Lead, opportunity, and order integration. ",
                "Customer service case management tied to SAP data.",
                "Billing, invoicing, and product catalog synchronization.",
                "Real-time customer insights across CRM and ERP.",
            ],
            businessData: [
                "Unified customer experience from sales to service.",
                "Faster quote-to-cash cycles.",
                "Accurate and real-time customer and product data.",
            ],
            mobImg: "/images/solutions/sap-cpi/Mobile/salesforce-mob.webp",
            deskImg: "/images/solutions/sap-cpi/salesforce-desk.webp"
        }
    ]

    const integrationData = [
        "Finance and HR data flows across platforms.",
        "Supply chain and logistics integration.",
        "Real-time reporting and dashboards."
    ]
    return (
        <section className="min-h-screen">
            <Seo
                title="Salesforce Managed Services Provider | Rialtes SalesforceAgent+"
                description="Looking for a Salesforce managed services partner and provider? Rialtes drives innovation with SalesforceAgent+, making your platform smarter, faster, and AI-ready."
                canonical="https://www.rialtes.com /services/application-services/salesforce-managed-services-provider-salesforceagentplus"
            />
            {/* <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        /> */}
            {/* herosection */}
            <section className="relative group overflow-hidden h-[399px] lg:h-[650px] sm:h-[450px]">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/solutions/sap-cpi/hero-desk-banner.webp"
                        alt="desktop banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "85% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/solutions/sap-cpi/Mobile/hero-mob-banner.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "25% 40%" }}
                        priority
                    />
                </div>

                <div className="relative h-full custom-container flex items-center text-[#ffffff]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                        <div className="col-span-12">
                            <h3 className="text-[18px] lg:text-[24px] font-bold max-sm:w-[53%]">
                                SAP Cloud Integration Services
                            </h3>
                            <h1 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px] max-sm:w-[60%]">
                                Empowering Intelligent, <br /> Connected Enterprises
                            </h1>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>

            {/* page description */}
            <section className="custom-container xl:mt-[131px] mt-[50px]">
                <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-[40px] lg:gap-[20px] gap-y-[25px]">
                    <div className="lg:col-span-5 xl:col-span-6 4xl:col-span-7 col-span-12">
                        <h1 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px]">
                            Seamless Integrations. <br /> Smarter Operations. <br /> Elevated Experiences.
                        </h1>
                    </div>
                    <div className="lg:col-span-7 xl:col-span-6 4xl:col-span-5 col-span-12">
                        <p className="xl:text-[22px] text-[16px] leading-tight">
                            At Rialtes, we specialize in leveraging the SAP Cloud Integration (CPI) platform to deliver end-to-end, enterprise-grade integrations that connect SAP and non-SAP applications — transforming disconnected systems into streamlined, automated processes. <br /> <br /> Our experts bring a proven track record of successful integrations with SAP Ariba, SAP S/4HANA, SAP SuccessFactors, Salesforce, Oracle, and more, driving tangible outcomes for our clients.
                        </p>
                    </div>
                </div>

            </section>

            {/* thought leadership section */}
            <section className="xl:mt-[88px] mt-[57px] relative">
                <div className="absolute inset-0 -z-10">
                    {/* Desktop Image */}
                    <div className="hidden md:block w-full h-full">
                        <Image
                            src="/images/solutions/sap-cpi/thought-leadership-desk.webp"
                            alt="desktop banner"
                            fill
                            className="object-cover object-[35%_20%]"
                            priority
                        />
                    </div>
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden w-full h-full">
                    <Image
                        src="/images/solutions/sap-cpi/Mobile/thought-leadership-mob.webp"
                        alt="mobile banner"
                        width={0}
                        height={0}
                        className="object-cover object-center w-full h-full"
                        priority
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 custom-container sm:mt-[-14%] mt-[-20%] md:mt-0">
                    <div className="col-span-6 lg:col-span-7 xl:col-span-6 3xl:col-span-7 4xl:col-span-6"></div>
                    <div className="col-span-6 lg:col-span-5 xl:col-span-6 3xl:col-span-5 4xl:col-span-6">
                        <div className="md:bg-[#073259] md:mix-blend-hard-light bg-[#0A6BB8]/90 text-[#ffffff] xl:pt-[52px] pt-[29px] xl:pb-[40px] pb-[47px] xl:px-[63px] px-[23px]">
                            <h2 className="xl:text-[40px] 4xl:text-[60px] text-[26px] leading-tight font-light md:w-[50%]">
                                Thought Leadership
                            </h2>
                            <h3 className="xl:text-[28px] 4xl:text-[36px] text-[20px] mt-[14px] xl:mt-[27px] leading-tight font-semibold">
                                Why Integration is the Backbone of Digital Transformation
                            </h3>
                            <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[27px] mt-[14px] font-normal">
                                In today’s hyper-connected business landscape, companies face mounting challenges:
                            </p>
                            <ul className="list-disc xl:mt-[27px] mt-[22px] md:ml-[26px] ml-[20px] space-y-[19px] xl:space-y-[27px]">
                                {thoughtLeadershipData.map((data, ind) => (
                                    <li key={ind} className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight">
                                        {data}
                                    </li>
                                ))}
                            </ul>
                            <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[33px] mt-[22px] font-normal">
                                Rialtes and SAP Cloud Integration enable enterprises to break silos, automate workflows, and unlock real-time intelligence to power modern, responsive businesses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* end to end section */}
            <section className="xl:mt-[189px] mt-[90px] custom-container" >
                <div className="lg:mr-[80px] sm:mr-[60px] md:mr-0 border border-[#707070] lg:pl-[46px] xl:pr-[60px] 4xl:pr-[100px] sm:px-[36px] px-[28px] xl:pb-[75px] pb-[80px]">
                    <h2 className="xl:text-[40px] 4xl:text-[60px] text-[26px] leading-tight font-light sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[80%] bg-[#ffffff] mt-[-40px] xl:mt-[-50px]">
                        Rialtes End-to-End SAP Cloud Integration Services
                    </h2>

                    <div className="relative grid md:grid-cols-2 grid-cols-1 xl:mt-[62px] mt-[42px] gap-y-[48px] xl:gap-y-[89px] md:gap-[60px]">
                        {
                            endToEndData.map((data, ind) => {
                                return (
                                    <div className="border-l-[3px] border-[#006FBE] xl:pl-[32px] pl-[20px]" key={ind}>
                                        <p className="xl:text-[25px] 4xl:text-[30px] text-[20px] xl:mb-[27px] mb-[24px] leading-tight font-semibold text-[#0A6BB8]">
                                            {data.title}
                                        </p>

                                        <ul>
                                            {data?.dataList?.map((item, ind) => {
                                                // dash after li
                                                const isLastItem = ind === data.dataList.length - 1;

                                                return (
                                                    <React.Fragment key={ind}>
                                                        <li className="xl:text-[20px] 4xl:text-[24px] text-[16px] leading-tight">
                                                            {item}
                                                        </li>
                                                        {!isLastItem && (
                                                            <div className="w-[50px] h-[2px] bg-[#707070] my-[20px]" />
                                                        )}
                                                    </React.Fragment>
                                                );
                                            })}
                                        </ul>

                                    </div>
                                )
                            })
                        }
                        <div className="absolute max-md:left-0 md:right-0 bottom-[-100px]">
                            <LearnMore />
                        </div>
                    </div>


                </div>
            </section>

            {/* specialized SAP section */}
            <section className="custom-container xl:mt-[168px] mt-[89px]">
                <h2 className="xl:text-[40px] 4xl:text-[60px] text-[26px] leading-tight font-light sm:w-[70%] md:w-[50%] xl:w-[52%] 4xl:w-[70%]">
                    Specialized SAP Cloud Integrations Rialtes Delivers
                </h2>
                <div className="xl:mt-[92px] mt-[43px] space-y-[43px] lg:space-y-[153px]">
                    {
                        specializedData.map((data, ind) => {
                            return (
                                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-[40px] 4xl:gap-x-[60px]">
                                    <div key={ind} className="lg:order-1 order-2 max-lg:mt-[43px]">
                                        <h3 className="xl:text-[30px] 4xl:text-[48px] text-[25px] leading-tight font-bold text-[#006FBE]">
                                            {data.title}
                                        </h3>
                                        <h4 className="xl:text-[28px] 4xl:text-[35px] text-[20px] leading-tight font-bold xl:mt-[48px] mt-[19px]">
                                            {data.subtitle}
                                        </h4>
                                        <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[42px] mt-[19px] font-normal md:w-[80%] lg:w-full">
                                            {data.desc}
                                        </p>

                                        <div className="grid lg:grid-cols-2 grid-cols-1 xl:mt-[56px] mt-[32px] md:gap-x-[20px] gap-y-[34px] ">
                                            <div>
                                                <p className="xl:text-[26px] 4xl:text-[32px] text-[18px] leading-tight font-semibold">
                                                    Key Capabilities:
                                                </p>
                                                <ul className="list-disc xl:space-y-[24px] space-y-[19px] xl:mt-[19px] mt-[19px] pl-[18px]">
                                                    {
                                                        data.keyData.map((data, ind) => {
                                                            return (
                                                                <li key={ind} className="xl:text-[17px] text-[16px] leading-tight">{data}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="xl:text-[26px] 4xl:text-[32px] text-[18px] leading-tight font-semibold">
                                                    Business Benefits:
                                                </p>
                                                <ul className="list-disc xl:space-y-[24px] space-y-[19px] xl:mt-[19px] mt-[19px] pl-[18px]">
                                                    {
                                                        data.businessData.map((data, ind) => {
                                                            return (
                                                                <li key={ind} className="xl:text-[17px] text-[16px] leading-tight">{data}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="xl:mt-[61px] mt-[44px]">
                                            <LearnMore />
                                        </div>
                                    </div>
                                    <div className="lg:order-2 order-1">
                                        {/* Desktop Image */}
                                        <div className="hidden lg:block w-full h-full">
                                            <Image
                                                src={data.deskImg}
                                                alt="desktop banner"
                                                width={0}
                                                height={0}
                                                className="object-cover w-full h-full object-center lg:object-[20%_20%]"
                                                priority
                                            />
                                        </div>
                                        {/* Mobile Image */}
                                        <div className="block lg:hidden w-full h-full">
                                            <Image
                                                src={data.mobImg}
                                                alt="mobile banner"
                                                width={0}
                                                height={0}
                                                className="object-cover object-center w-full h-full md:w-[80%]"
                                                priority
                                            />
                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </section>

            {/* integration section */}
            <section className="custom-container 4xl:!pl-[142px] xl:!pl-[52px] lg:!pl-[42px] max-md:px-0">
                <div className="xl:mt-[88px] mt-[57px] relative">
                    <div className="absolute inset-0 -z-10">
                        {/* Desktop Image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/solutions/sap-cpi/integration-desk.webp"
                                alt="desktop banner"
                                fill
                                className="object-cover object-[55%_20%]"
                                priority
                            />
                        </div>

                        {/* Mobile Image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/solutions/sap-cpi/Mobile/integration-mob.webp"
                                alt="mobile banner"
                                width={0}
                                height={0}
                                className="object-cover object-center w-full h-full"
                                priority
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="col-span-6 xl:col-span-6"></div>
                        <div className="col-span-6 xl:col-span-6">
                            <div className="bg-[#ffffff]/20 md:bg-[#ffffff]/50 text-[#000000] px-[36px] lg:pt-[76px] pt-[45px] md:pb-[91px] pb-[109px] md:pl-[43px] md:pr-[63px]">
                                <h2 className="xl:text-[38px] 4xl:text-[54px] text-[26px] leading-tight font-light">
                                    Integration with Oracle, Workday, and More
                                </h2>
                                <h3 className="xl:text-[26px] 4xl:text-[36px] text-[20px] mt-[19px] xl:mt-[34px] leading-tight font-semibold">
                                    Connected Enterprise Ecosystem
                                </h3>
                                <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[44px] mt-[19px] font-normal">
                                    We help you connect SAP to Oracle, Workday, and other cloud/on-prem platforms to create a frictionless and intelligent enterprise.
                                </p>
                                <ul className="list-disc xl:mt-[44px] mt-[19px] md:ml-[26px] ml-[20px] space-y-[19px] xl:space-y-[27px]">
                                    {integrationData.map((data, ind) => (
                                        <li key={ind} className="xl:text-[19px] 4xl:text-[20px] text-[16px] leading-tight">
                                            {data}
                                        </li>
                                    ))}
                                </ul>
                                <div className="absolute md:mt-[40px] mt-[60px]">
                                    <LearnMore/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Form */}
            <div className="custom-container xl:mt-[117px] xl:mb-[104px] mt-[104px] mb-[45px]">
                <ContactForm title={'Ready to Connect Your Enterprise with SAP Cloud Integration?'} subtitle="Partner with Rialtes to simplify integrations, accelerate digital transformation, and unlock real business value." subtitle1="Contact us today for a free consultation and explore how we can empower your connected enterprise!" className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] xl:w-[70%] 4xl:w-[80%]" />
            </div >
        </section>
    )
}