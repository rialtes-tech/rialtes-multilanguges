// components/DemandPlusSection.tsx
"use client";
import ContactForm from "@/app/components/contactform";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";
import Image from "next/image";

export default function DemandPlusSection() {
    const schemaData = {

        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Tosca Automation Testing Services",
        "alternateName": "Tricentis Tosca Test Automation by Rialtes",
        "description": "Rialtes offers end-to-end Tosca automation testing services, including implementation, test management, risk-based testing, and integration with SAP, Salesforce, Oracle, and DevOps pipelines.",
        "provider": {
            "@type": "Organization",
            "name": "Rialtes",
            "url": "https://www.rialtes.com",
            "logo": "https://www.rialtes.com/images/homepage/logo.svg",
            "sameAs": [
                "https://www.linkedin.com/company/rialtes-technologies-llc",
                "https://x.com/Rialtestech"
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
                "name": "Singapore"
            },
            {
                "@type": "Continent",
                "name": "Europe"
            },
            {
                "@type": "Country",
                "name": "India"
            }
        ],
        "audience": {
            "@type": "Audience",
            "audienceType": "Enterprises in Manufacturing, Healthcare, Retail, Semiconductor, Automotive, and Financial Services"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Tosca Automation Testing Offerings",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Thing",
                        "name": "Tosca Implementation & Advisory",
                        "description": "End-to-end Tosca installation, configuration, API/UI/mobile/data testing, DevOps pipeline integration, and AI-powered self-healing automation."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Thing",
                        "name": "qTest Test Management Services",
                        "description": "Centralized test lifecycle management with qTest, including integration with Jira and Tosca, real-time dashboards, and risk-based workflows."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Thing",
                        "name": "LiveCompare Implementation",
                        "description": "AI-based SAP change impact analysis, integration with Tosca/qTest, and continuous testing optimization for SAP updates."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Thing",
                        "name": "NeoLoad Performance Testing",
                        "description": "End-to-end performance, scalability, and endurance testing integrated into CI/CD for SAP, Oracle, Salesforce, and custom apps."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Thing",
                        "name": "Certified Tosca Experts",
                        "description": "Tricentis-certified experts with experience in SAP, Oracle, Salesforce, Agile, DevOps, and enterprise test automation."
                    }
                }
            ]
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.rialtes.com/solutions/quality-engineering-assurance/tosca-software-automation-testing"
        }
    }
    return (
        <div className="min-h-screen bg-white">

            <Seo
                title="Tosca Software Automation Testing Services | Rialtes"
                description="Rialtes offers Tosca Software Automation Testing Services with AI, CI/CD, and risk-based testing for seamless transformation of SAP, Salesforce, and DevOps"
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/solutions/quality-engineering-assurance/tosca-software-automation-testing/"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative">
                <div className="xl:block hidden">
                    <Image
                        src="/images/toska/desktop/banner-desktop.webp"
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
                        src="/images/toska/mobile/banner-mobile.webp"
                        alt="Toska Banner Mobile"
                        className="w-full h-[400px] md:h-full"
                        priority
                        sizes="100vw"
                        width={0}
                        height={0}

                    />
                </div>

                <div
                    className="h-full absolute custom-container xl:!pr-0  mr-0 top-0"
                >
                    <div className="grid xl:grid-cols-12  grid-cols-1 gap-2">
                        <div className="xl:col-span-6 md:col-span-2 col-span-12 4xl:mt-32 xl:mt-20 mt-20 4xl:pr-16  xl:pr-10 pr-20 md:pr-64">
                            <h3 className="text-white xl:text-[24px]  font-bold mb-2">TOSCA</h3>
                            <h1 className="text-white leading-tight mt-5   text-[26px] 4xl:text-[60px]   xl:text-[44px]">
                                Elevate Quality Engineering with Rialtes’ Tosca Automation Testing Services
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
                    <div className="xl:col-span-9">
                        <h2 className="leading-tight text-[26px] 4xl:text-[60px]  xl:text-[42px]">Empowering Enterprises with < br className="hidden sm:block" /> End-to-End Automated Testing, QTest, LiveCompare & NeoLoad Solutions</h2>
                        <p className="xl:mt-12 mt-5 4xl:text-[22px] text-[16px] pr-[36px] 4xl:pr-0">At Rialtes, we help organizations transform their testing lifecycle with Tricentis Tosca — the industry’s leading continuous testing platform. With deep expertise and a team of highly certified Tosca experts, Rialtes delivers scalable, intelligent, and resilient testing solutions that dramatically improve quality, speed, and efficiency.  </p>
                        <p className="mt-5 pb-16 4xl:text-[22px] text-[16px] pr-[30px] 4xl:pr-0">From test automation to risk-based testing and performance testing, Rialtes ensures seamless Tosca implementation, integration, and optimization, tailored to the unique needs of enterprises across industries — including Manufacturing, Healthcare, Retail, Semiconductor, Automotive, and Financial Services.</p>
                    </div>

                </div>
            </section>

            <section className="relative">
                <div className="xl:block hidden">
                    <Image
                        src="/images/toska/desktop/why-choose.webp"
                        alt="Why choose Background Desktop"
                        priority
                        sizes="100vw"
                        className="w-full h-full"
                        width={0}
                        height={0}
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/toska/mobile/why-choose-mobile.webp"
                        alt="Why choose Mobile background"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-[400px] object-cover"
                        priority
                    />
                </div>

                <div
                    className="grid xl:grid-cols-12">
                    <div className="xl:col-span-6"></div>
                    <div className="xl:col-span-6 xl:absolute 4xl:right-[333px] xl:right-[170px]  xl:top-0 top-[290px]">
                        <div className="bg-[#016FBE] bg-opacity-90 text-white p-8 4xl:w-[765px] xl:w-[550px] 4xl:pb-20 pb-48 xl:pb-10">
                            <h2 className="leading-tight 4xl:mt-10 text-[26px] 4xl:text-[60px]  xl:text-[40px]">Why Choose Rialtes for Tosca Implementation?</h2>
                            <h3 className="4xl:text-[42px] text-[22px] font-semibold leading-tight 4xl:mt-8 xl:mt-5 mt-5 pr-[36px] 4xl:pr-0">Trusted Partner for End-to-End Testing Automation Success</h3>
                            <ul className="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] text-[16px] 4xl:mt-8 xl:mt-5 pr-12 mt-8 xl:pr-0">
                                <li>Certified Tosca experts with real-world industry experience</li>
                                <li>End-to-end services: Advisory, Implementation, Design, QA, Integration, Post-go-live Support</li>
                                <li>Strong partnerships with Tricentis and deep expertise in Tosca, qTest, LiveCompare, NeoLoad</li>
                                <li>Accelerated implementation using pre-built accelerators and reusable testing frameworks</li>
                                <li>Seamless integration with ERP (SAP, Oracle), Salesforce, and modern cloud ecosystems</li>
                            </ul>

                        </div>
                        <div className="bg-[#163055] p-8 absolute mx-10 xl:mx-0 4xl:mx-0 mt-[-155px] 4xl:mt-0 sm:mt-[-6.5rem] md:mt-[-110px] lg:mt-[-90px] xl:mt-0">
                            <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal pr-[10px] 4xl:pr-0">Rialtes ensures that automated testing becomes a strategic advantage, not just a process.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="custom-container xl:!pr-0 4xl:mt-32 mt-0 md:mt-0 xl:mt-32">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-8 xl:pr-10 4xl:pr-10">
                        <h2 className="leading-tight text-[26px] 4xl:text-[60px]  xl:text-[42px] 4xl:block xl:block hidden">End-to-End Tosca Implementation & Advisory Services</h2>
                    </div>
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-1 4xl:gap-10 xl:gap-16 4xl:mt-10 mt-16">
                    <div className="xl:col-span-6 order-1 xl:order-2">
                        <Image
                            src="/images/toska/desktop/end-to-end-desktop.webp"
                            alt="End to End desktop right side Image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full object-cover"
                            priority
                        />
                    </div>

                    <div className="xl:col-span-6 order-2 xl:order-1">
                        <h2 className="leading-tight text-[26px]  4xl:hidden xl:hidden block md:mt-20 mt-10 pr-10 4xl:pr-0">End-to-End Tosca Implementation & Advisory Services</h2>

                        <h3 className="4xl:text-[36px] text-[22px] xl:text-[25px] font-semibold leading-tight mt-5 4xl:mt-0 xl:mt-0 pr-10 4xl:pr-0">Build a Resilient Automation Foundation</h3>
                        <h3 className="mt-5 text-[#006FBE] font-semibold 4xl:text-[32px] xl:text-[22px] text-[20px] leading-tight">Make Automated Testing a Seamless Part of Your Development Lifecycle</h3>
                        <p className="mt-5 4xl:text-[22px] text-[16px]">Rialtes helps enterprises fully adopt Tosca for modern, agile, and DevOps-driven organizations:</p>
                        <ul className="list-disc  leading-tight 4xl:space-y-5 xl:space-y-2  marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] font-light text-[16px] 4xl:mt-8 mt-5 pr-12 xl:pr-0 md:pb-0">
                            <li>End-to-end Tosca installation and configuration</li>
                            <li>Test case design, optimization, and risk-based test management</li>
                            <li>API, UI, Mobile, and Data integrity testing using Tosca</li>
                            <li>Integration with DevOps pipelines and CI/CD (Jenkins, Azure DevOps, GitLab)</li>
                            <li>Test maintenance automation using Tosca’s AI-powered self-healing capabilities</li>
                        </ul>

                    </div>

                </div>
            </section>
            <div className="grid xl:grid-cols-12 4xl:mt-[-85px] mt-[1rem] sm:mt-10 xl:mt-[-50px] max-md:px-[35px] custom-container">
                <div className="xl:col-span-2">
                    <div className="4xl:mt-[5rem]  xl:mt-[75px] 2xl:mt-[5rem]">
                        <LearnMore bgcolor={"#134874"} bordercolor={"#006FBE"} />
                    </div>
                </div>
                <div className="xl:col-span-1">
                </div>
                <div className="xl:col-span-9 sm:mt-10 mt-10">
                    <div className="bg-[#163055] p-8">
                        <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal">With Rialtes, organizations achieve faster releases, improved quality, and reduced manual efforts through intelligent test automation.</p>
                    </div>
                </div>
            </div>

            <section className="relative mt-16 xl:custom-container px-0 sm:px-0 md:px-6 4xl:px-[142px]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/toska/desktop/qtest.webp"
                        alt="Qtest Desktop"
                        priority
                        sizes="100vw"
                        className="w-full h-full"
                        width={0}
                        height={0}
                    />
                </div>

                <div className="xl:hidden block">
                    <Image
                        src="/images/toska/mobile/qtest-mobile.webp"
                        alt="Qtest Mobile"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-[400px] object-cover"
                        priority
                    />
                </div>


            </section>
            <section className="4xl:-mt-[12rem] xl:custom-container px-0 sm:px-0 md:px-6 xl:-mt-[9rem] absolute 4xl:!pl-[205px] xl:pl-[80px] xl:pr-[150px] 4xl:pr-[280px]">
                <div className="bg-[#006FBE] xl:p-16 4xl:p-16 p-10 grid xl:grid-cols-12 text-white 4xl:pb-32 pb-32">
                    <div className="xl:col-span-7">
                        <h2 className="text-[26px] 4xl:text-[60px]  xl:text-[42px] leading-tight 4xl:pr-16 xl:pr-10">qTest Implementation & Test Management</h2>
                        <h3 className="4xl:text-[36px] text-[22px] xl:text-[25px] font-semibold leading-tight mt-8 xl:pr-48">End-to-End Test Lifecycle Orchestration</h3>
                        <h3 className="mt-5 font-semibold 4xl:text-[32px] xl:text-[22px] text-[20px] leading-tight xl:pr-48 pr-10">Manage Testing with Confidence & Control</h3>
                    </div>
                    <div className="xl:col-span-5">
                        <p className="4xl:text-[22px] text-[18px] mt-10 xl:mt-0 4xl:mt-0">qTest offers centralized test management, and Rialtes ensures organizations leverage its full potential:</p>
                        <ul className="list-disc leading-tight 4xl:space-y-5 xl:space-y-2  marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] font-light text-[16px] 4xl:mt-8 mt-5 pr-12 xl:pr-0">
                            <li>qTest installation, configuration, and integration with Tosca and Jira</li>
                            <li>End-to-end test case, defect, and requirement management</li>
                            <li>Real-time dashboards and advanced analytics for testing insights</li>
                            <li>Risk-based testing alignment and compliance-driven testing workflows</li>
                            <li>Seamless alignment with Agile, DevOps, and continuous testing models</li>
                        </ul>
                    </div>
                </div>

            </section>
            <section className="custom-container sm:mt-[33rem]  lg:mt-[35rem] xl:px-0 4xl:pl-[280px] 4xl:pr-[398px] xl:pl-[200px] xl:pr-[220px] mt-[50rem] md:mt-[35rem] xl:mt-0 4xl:mt-0">
                <div className=" bg-[#073259] p-8 4xl:mt-[27rem] xl:mt-[20rem] relative">
                    <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal">Rialtes makes qTest a central hub for testing, enabling transparency, collaboration, and control across all test activities.</p>
                </div>
            </section>


            <section className="xl:mt-32 mt-24 xl:custom-container lg:px-0 pl-0  px-0 sm:px-0 md:px-6">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-5  max-md:px-[35px]">
                        <Image
                            className="w-full 4xl:mt-16 4xl:mb-16 xl:mt-16  relative px-[35px] xl:px-0"
                            src="/images/toska/desktop/live-desk.webp"
                            alt="Live Desktop"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>

                    <div className="xl:col-span-7 bg-[#D0EBFF] text-black 4xl:ml-[-32rem]  xl:ml-[-28rem] pb-[15rem] xl:pb-[9rem] 4xl:pb-[11rem] px-[35px] 4xl:pl-[36rem] xl:pl-[31rem] 4xl:pr-[10rem] xl:pr-[7rem] xl:mt-0 mt-[-200px]">
                        <h2 className="text-[26px] 4xl:text-[60px]  xl:text-[38px] leading-tight 4xl:pr-16 xl:pr-10 pt-[15rem] 4xl:pt-10 xl:pt-[4rem] 2xl:text-[30px]">LiveCompare Implementation</h2>
                        <h3 className="4xl:text-[36px] text-[22px] xl:text-[25px] font-semibold leading-tight  xl:mt-3  xl:pr-0 mt-5 pr-20">AI-Powered Change Impact Analysis</h3>
                        <h3 className="text-[#006FBE] mt-5 font-semibold 4xl:text-[32px] xl:text-[22px] text-[20px] leading-tight 4xl:pr-48 pr-20">Accelerate Safe SAP Updates with AI-Driven Impact Analysis</h3>
                        <p className="4xl:text-[22px] xl:text-[14px] text-[16px] font-normal mt-5 pr-10">Rialtes helps organizations use LiveCompare to cut testing time and focus only on what matters most when upgrading SAP systems:</p>
                        <ul className="list-disc leading-tight 4xl:space-y-5   marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] xl:text-[14px] font-normal text-[16px] 4xl:pr-32 4xl:mt-5 mt-5 pr-12 xl:pr-0">
                            <li>LiveCompare deployment and configuration</li>
                            <li>AI-based change impact analysis for SAP custom code, configurations, and transports</li>
                            <li>Automated identification of test cases affected by SAP updates and patches</li>
                            <li>Seamless integration with Tosca and qTest for risk-based test execution</li>
                            <li>Continuous impact analysis to align with agile and DevOps methodologies</li>
                        </ul>
                        <div className="xl:hidden block mt-5">
                            <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-[-73px] 4xl:mt-[-78px]">

                <div className="xl:col-span-8 col-span-12 mx-[35px] z-[9] xl:mx-0 relative bg-[#163055] p-8 4xl:mt-[-57px] xl:mt-[-40px] mt-[-200px] 4xl:ml-[280px] xl:ml-[78px]">
                    <h3 className="4xl:text-[26px] xl:text-[16px] text-[20px] text-white font-normal leading-tight">
                        Rialtes makes SAP testing intelligent, targeted, and faster — reducing risk and effort while accelerating transformation.
                    </h3>


                </div>
                <div className="xl:col-span-1"></div>
                <div className="xl:col-span-2 xl:block hidden">
                    <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} />
                </div>
            </div>


            <section className="mt-10 xl:custom-container 4xl:px-[142px] max-lg:px-0">
                <div className="grid xl:grid-cols-12">
                    <div className="xl:col-span-5 col-span-12 mt-10 xl:mt-[10rem] 4xl:ml-[-200px] xl:ml-[-105px] order-1 xl:order-2">
                        <Image
                            className="w-full 4xl:mt-16 4xl:mb-16 xl:mt-10 xl:-mb-16 relative px-[35px] xl:px-0 4xl:px-0"
                            src="/images/toska/desktop/neoload-desktop.webp"
                            alt="Neoload desktop Image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>

                    <div className="xl:col-span-7 col-span-12 bg-[#427C8A] text-white px-[35px] md:pl-10 xl:pl-[5rem] 4xl:h-[1090px] 4xl:pl-[8rem] order-2 xl:order-1 mt-[-200px] xl:mt-0 4xl:mt-0 pb-[13rem] xl:pb-0 4xl:pb-0">
                        <h2 className="text-[26px] 4xl:text-[60px] xl:text-[40px] leading-tight 4xl:pr-0  pt-[15rem] xl:pt-16 4xl:pt-16">
                            NeoLoad Performance Testing Implementation
                        </h2>
                        <div className="4xl:pr-[14rem] xl:pr-[8rem]">
                            <h3 className="4xl:text-[40px] xl:text-[30px] text-[20px] font-semibold mt-5 leading-tight">
                                Ensure Resilience and Speed at Scale
                            </h3>
                            <h3 className="mt-5 font-semibold 4xl:text-[32px] xl:text-[22px] text-[20px] leading-tight">
                                Make Every Release Fast, Scalable, and Resilient
                            </h3>
                            <p className="4xl:text-[22px] xl:text-[14px] text-[16px] mt-5 font-light">
                                NeoLoad enables continuous performance testing, and Rialtes ensures enterprises stress test their applications effectively:
                            </p>
                            <ul className="list-disc leading-tight 4xl:space-y-5 xl:space-y-1 font-light marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] xl:text-[14px] text-[16px] 4xl:mt-8 mt-5 pr-12 xl:pr-0">
                                <li>NeoLoad setup and integration for SAP, Oracle, Salesforce, and custom apps</li>
                                <li>Performance, scalability, and endurance testing aligned with business-critical processes</li>
                                <li>Automated performance test scripts integrated into CI/CD pipelines</li>
                                <li>Real-time performance metrics and dashboards for actionable insights</li>
                                <li>Integration with Tosca for end-to-end functional and performance test synergy</li>
                            </ul>
                            <div className="xl:hidden block mt-10">
                                <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-12 xl:mt-[-10px] 4xl:mt-[-186px] absolute">
                <section className="custom-container xl:col-span-7 col-span-12  xl:px-0 4xl:pl-[280px]  xl:pl-[82px]  mt-[-11rem] md:mt-[-7rem] xl:mt-[20px] 4xl:mt-0">
                    <div className=" bg-[#073259] p-8  xl:mt-[-50px]  2xl:mt-[-2rem]">
                        <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal">Rialtes helps ensure that your applications are built for performance from day one, delivering seamless user experiences at scale.</p>
                    </div>
                </section>
                <div className="xl:col-span-1"></div>
                <div className="xl:col-span-2 4xl:mt-[42px] xl:block hidden">
                    <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />

                </div>
            </div>


            <section className="mt-20 4xl:mt-20 xl:mt-32 custom-container 4xl:pl-[280px] 4xl:pr-[181px] 2xl:pl-[142px]">
                <div className="grid xl:grid-cols-12 4xl:gap-16 grid-cols-1">
                    <div className="xl:col-span-5 col-span-12">
                        <Image
                            className="w-full h-full"
                            src="/images/toska/desktop/new-to.webp"
                            alt="Certifide Unamtched Image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>
                    <div className="xl:col-span-7 col-span-12  sm:px-0 md:px-[35px]">
                        <h2 className="text-[26px] 4xl:text-[60px]  xl:text-[40px] 2xl:text-[30px] leading-tight 4xl:pr-64 xl:pr-48 pt-10 xl:pt-0 4xl:pt-0">Rialtes’ Certified Tosca Experts</h2>
                        <h3 className="4xl:text-[40px] xl:text-[25px] text-[20px] font-semibold mt-5">Unmatched Testing Excellence</h3>
                        <p className="4xl:text-[22px] text-[16px] mt-5">Rialtes is proud to have a team of highly certified Tosca, qTest, LiveCompare, and NeoLoad experts, ensuring deep technical knowledge and proven industry practices:</p>
                        <section className="max-w-6xl mx-auto py-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                                <div className="flex items-start gap-5">
                                    <div className="w-[3px] h-full bg-[#006FBE]"></div>
                                    <p className="text-black font-semibold 4xl:text-[24px] text-[18px]  leading-tight">
                                        Tricentis-certified Tosca
                                        Automation Specialists
                                    </p>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-[4px] h-full bg-[#006FBE]"></div>
                                    <p className="text-black font-semibold 4xl:text-[24px] text-[18px] leading-tight">
                                        Certified DevOps and CI/CD
                                        experts for seamless pipeline
                                        integration
                                    </p>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-[4px] h-full bg-[#006FBE]"></div>
                                    <p className="text-black font-semibold 4xl:text-[24px] text-[18px] leading-tight">
                                        Domain specialists in SAP,
                                        Oracle, Salesforce, and
                                        custom enterprise applications
                                    </p>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-[5px] h-full bg-[#006FBE]"></div>
                                    <p className="text-black font-semibold 4xl:text-[24px] text-[18px] leading-tight">
                                        Agile, SCRUM, and SAFe
                                        certified project managers for
                                        effective test lifecycle governance
                                    </p>
                                </div>
                            </div>
                        </section>
                        <div className=" bg-[#073259] p-8">
                            <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal">Rialtes combines technical expertise with strategic vision, helping organizations achieve automation excellence.</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="relative mt-16 xl:custom-container xl:pl-0 4xl:pr-[280px] xl:pr-[80px]">
                {/* Desktop Image */}
                <div className="xl:block hidden">
                    <Image
                        src="/images/toska/desktop/seamless.webp"
                        alt="Seamless Desktop"
                        priority
                        sizes="100vw"
                        className="w-full h-full"
                        width={0}
                        height={0}
                    />
                </div>

                <div className="xl:hidden block">
                    <Image
                        src="/images/toska/mobile/seamless-mobile.webp"
                        alt="Seamless Mobile"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full  object-cover md:h-[700px] sm:h-[690px] h-[885px]"
                        priority
                    />
                </div>
                <div className="absolute top-0 max-md:px-[35px] custom-container ">
                    <div className="grid xl:grid-cols-12 grid-cols-1">
                        <div className="xl:col-span-9 col-span-12">
                            <h2 className="text-[26px] 4xl:text-[60px]  xl:text-[40px] leading-tight pt-20 pr-10 xl:pr-0 4xl:pr-0">Seamless Integration with SAP, Oracle, Salesforce, and More</h2>

                        </div>
                    </div>
                    <h3 className="4xl:text-[40px] xl:text-[25px] text-[20px] font-semibold mt-5 sm:pr-10 xs:pr-10">Unified Testing Across Complex Enterprise Landscapes</h3>
                    <div className="grid xl:grid-cols-12 grid-cols-1">
                        <div className="xl:col-span-6 col-span-12">
                            <p className="4xl:text-[22px] text-[16px] mt-5 sm:pr-10">Rialtes ensures Tosca and its suite of tools integrate flawlessly with your enterprise systems:</p>
                            <ul className="list-disc leading-tight 4xl:space-y-5 xl:space-y-1 space-y-2 font-medium  marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] text-[16px] 4xl:mt-8 mt-5 pr-12 xl:pr-0">
                                <li>SAP S/4HANA, SAP SuccessFactors, SAP Ariba</li>
                                <li>Salesforce (CRM, Service Cloud, Marketing Cloud)</li>
                                <li>Oracle EBS, Fusion Cloud, and HCM</li>
                                <li>Custom-built and legacy applications</li>
                                <li>Seamless data flow across qTest, Tosca, and DevOps tools for end-to-end visibility</li>
                            </ul>
                        </div>
                    </div>

                    <div className="xl:grid xl:grid-cols-12">
                        <div className="order-1 xl:order-3 4xl:mt-[28px] xl:mt-[3px] col-span-2 2xl:mt-[100px]">
                            <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                        </div>

                        <div className="order-2 xl:order-2 xl:col-span-1"></div>

                        <div className="order-3 xl:order-1 xl:col-span-7 col-span-12 md:mt-32 mt-10 xl:mt-0 4xl:mt-0 md:mr-[65px] sm:mr-[65px] xl:mr-0 4xl:mr-0">
                            <div className="bg-[#073259] p-8 xl:mt-[1rem] 4xl:mt-[3rem] 2xl:mt-[7.5rem]">
                                <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal">
                                    With Rialtes, testing becomes a connected, intelligent, and business-aligned process.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <div className="custom-container 4xl:pl-[280px] mt-[6rem] 4xl:pr-0 pr-0 md:mt-40">
                <section className="bg-[#EAEAEA] px-4 md:px-8 lg:px-16 py-12">
                    <div className="max-w-7xl  grid grid-cols-1 xl:grid-cols-12 gap-y-10">
                        <div className="xl:col-span-8 col-span-12">
                            <h2 className="text-[26px] 4xl:text-[60px]  xl:text-[45px] leading-tight">
                                Interesting Facts About
                                Tosca & Automated Testing
                            </h2>
                        </div>

                        <div className="xl::col-span-12 col-span-12  pl-4">
                            <p className="4xl:text-[30px] text-[24px] xl:text-[20px] font-bold leading-tight">
                                <span className="text-[#006FBE] font-bold 4xl:text-[65px] xl:text-[40px] text-[20px]">85%</span> of enterprises say automated testing is critical to<br />
                                accelerating digital transformation.
                            </p>
                        </div>
                        <span className="border-b-2 border-gray-400 w-[30%] xl:w-full 4xl:w-full"></span>

                        <div className="xl:col-span-12 col-span-12 pl-4">
                            <p className="4xl:text-[30px] text-[24px] xl:text-[20px] font-bold leading-tight">
                                Companies using Tosca report up to <span className="text-[#006FBE] font-bold 4xl:text-[65px] xl:text-[40px] text-[20px]">90%</span> reduction in<br />
                                manual testing efforts.
                            </p>
                        </div>
                        <span className="border-b-2 border-gray-400 w-[30%] xl:w-full 4xl:w-full"></span>
                        <div className="xl:col-span-12 col-span-12  pl-4">
                            <p className="4xl:text-[30px] text-[24px] xl:text-[20px] font-bold leading-tight">
                                AI-powered Tosca self-healing reduces test maintenance by<br />
                                <span className="text-[#006FBE] font-bold 4xl:text-[65px] xl:text-[40px] text-[20px]">40%</span> on average.
                            </p>
                        </div>
                        <span className="border-b-2 border-gray-400 w-[30%] xl:w-full 4xl:w-full"></span>

                        <div className="xl:col-span-12 col-span-12  pl-4">
                            <p className="4xl:text-[30px] text-[24px] xl:text-[20px] font-bold leading-tight">
                                Tricentis’ integrated platform (Tosca, qTest, NeoLoad) covers over<br />
                                <span className="text-[#006FBE] font-bold 4xl:text-[65px] xl:text-[40px] text-[20px]">80%</span> of enterprise testing needs in one suite.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
            <div
                className="mt-20
             custom-container
              text-black pb-20"
            >
                <ContactForm title={'Ready to Transform Your Testing Journey?'} subtitle={'Let Rialtes help you embrace Tosca and modern test automation to ensure every release is high-quality, fast, and secure.'} subtitle1="Schedule a Free Tosca Consultation, Book a Demo or Contact Our Experts please fill the below form." className={"4xl:max-w-[59rem] xl:max-w-[44rem] leading-tight text-[26px] font-light 4xl:text-[60px]  xl:text-[45px] pr-10 xl:pr-0"} />
            </div >
        </div>
    );
}
