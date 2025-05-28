// components/DemandPlusSection.tsx
"use client";
import ContactForm from "@/app/components/contactform";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";
import useSmartMargin from "@/app/utils/useSmartMargin";
import Image from "next/image";
import Link from "next/link";

export default function DemandPlusSection() {



    const schemaData = {


        "@context": "https://schema.org",

        "@type": "WebPage",

        "name": "Kinaxis RapidResponse: Transform with Rialtes DemandPlus",

        "url": "https://www.rialtes.com/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/",

        "description": "Kinaxis rapid response meets AI-driven planning. Rialtes DemandPlus delivers supply chain visibility, predictive agility, and smarter control.",

        "inLanguage": "en",

        "publisher": {

            "@type": "Organization",

            "name": "Rialtes Technologies",

            "url": "https://www.rialtes.com",

            "logo": {

                "@type": "ImageObject",

                "url": "https://www.rialtes.com/images/homepage/logo.svg"

            }

        },

        "mainEntity": {

            "@type": "Service",

            "name": "Rialtes DemandPlus for Kinaxis RapidResponse",

            "serviceType": "Supply Chain Planning and Integration",

            "provider": {

                "@type": "Organization",

                "name": "Rialtes Technologies",

                "url": "https://www.rialtes.com"

            },

            "areaServed": [

                { "@type": "Country", "name": "United States" },

                { "@type": "Country", "name": "Canada" },

                { "@type": "Country", "name": "India" },

                { "@type": "Country", "name": "Singapore" }

            ],

            "audience": {

                "@type": "Audience",

                "audienceType": "Enterprise, C-Level Executives, Supply Chain Leaders"

            },

            "hasOfferCatalog": {

                "@type": "OfferCatalog",

                "name": "DemandPlus Services",

                "itemListElement": [

                    {

                        "@type": "Offer",

                        "itemOffered": {

                            "@type": "Service",

                            "name": "Kinaxis License Advisory & Value Assessment"

                        }

                    },

                    {

                        "@type": "Offer",

                        "itemOffered": {

                            "@type": "Service",

                            "name": "Solution Architecture & Design"

                        }

                    },

                    {

                        "@type": "Offer",

                        "itemOffered": {

                            "@type": "Service",

                            "name": "Rapid Implementation & Process Configuration"

                        }

                    },

                    {

                        "@type": "Offer",

                        "itemOffered": {

                            "@type": "Service",

                            "name": "Quality Assurance, Testing & User Training"

                        }

                    },

                    {

                        "@type": "Offer",

                        "itemOffered": {

                            "@type": "Service",

                            "name": "Integration with SAP S/4HANA, Oracle EBS & Non-SAP Systems"

                        }

                    },

                    {

                        "@type": "Offer",

                        "itemOffered": {

                            "@type": "Service",

                            "name": "Post-Go-Live Support & Continuous Optimization"

                        }

                    },

                    {

                        "@type": "Offer",

                        "itemOffered": {

                            "@type": "Service",

                            "name": "Demand Planning & Forecasting"

                        }

                    },

                    {

                        "@type": "Offer",

                        "itemOffered": {

                            "@type": "Service",

                            "name": "Sales & Operations Planning (S&OP)"

                        }

                    },

                    {

                        "@type": "Offer",

                        "itemOffered": {

                            "@type": "Service",

                            "name": "Capacity & Production Planning"

                        }

                    },

                    {

                        "@type": "Offer",

                        "itemOffered": {

                            "@type": "Service",

                            "name": "Inventory Optimization & Enterprise Scheduling"

                        }

                    },

                    {

                        "@type": "Offer",

                        "itemOffered": {

                            "@type": "Service",

                            "name": "Scenario Planning & What-if Simulations"

                        }

                    },

                    {

                        "@type": "Offer",

                        "itemOffered": {

                            "@type": "Service",

                            "name": "Integration via SAP BTP and SAP CPI"

                        }

                    },

                    {

                        "@type": "Offer",

                        "itemOffered": {

                            "@type": "Service",

                            "name": "RialChat – WhatsApp for Supply Chain Teams"

                        }

                    }

                ]

            }

        }
    }
    const applyMargin = useSmartMargin(1500); // You can tweak this threshold
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
    return (
        <div className="min-h-screen bg-white">

            <Seo
                title="Kinaxis RapidResponse for Agile SCM with Rialtes DemandPlus"
                description="Reimagine resilient supply chains with Kinaxis RapidResponse and Rialtes’ DemandPlus—smart SCM solutions for agility, speed, and precision."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative group overflow-hidden h-[435px] lg:h-[650px]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/banner.webp"
                        alt=""
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/banner-mobile.webp"
                        alt=""
                        fill
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <div
                    className={`${applyMargin ? "xl:ml-[280px]  xl:w-[calc(100%-280px)]" : "ml-[35px]"} h-full relative mx-[35px] md:ml-[100px] md:w-[calc(100%-100px)] mr-0 `}
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 mt-20">
                        <div className="xl:col-span-7 col-span-12">
                            <h3 className="text-white xl:text-[24px]  font-bold mb-2">DemandPlus</h3>
                            <h1 className="text-white leading-tight mt-5 pr-14 xl:pr-0 md:text-[42px] xl:text-[60px] text-[26px]">
                                Transform Your Supply Chain with Rialtes ‘DemandPlus’ for Kinaxis RapidResponse
                            </h1>

                        </div>
                        <div className="xl:col-span-7 col-span-12">
                        </div>
                    </div>

                </div>
            </section>
            <section
                className={`${applyMargin ? "xl:ml-[280px]  xl:w-[calc(100%-280px)]" : "ml-[35px]"} mx-[35px] md:ml-[100px] md:w-[calc(100%-100px)] `}>

                <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-24 mt-10">
                    <div className="xl:col-span-8 xl:pr-20 pr-10">
                        <h2 className="leading-tight md:text-[42px] xl:text-[60px] text-[26px]">Agility, Accuracy, and Resilience in Supply Chain — Powered by Kinaxis and Rialtes</h2>
                        <p className="mt-12">In today’s volatile and complex supply chain landscape, businesses need real-time visibility, agile planning, and predictive insights to stay competitive. Rialtes’ DemandPlus Services, built around Kinaxis RapidResponse, deliver end-to-end supply chain transformation, enabling companies to plan, monitor, and respond to supply chain dynamics in real-time. </p>
                        <p className="mt-8 pb-16">As a certified Kinaxis and SAP partner with offices in United States, Canada, India, and Singapore, and a team of highly certified Kinaxis experts, Rialtes helps clients leverage RapidResponse to unlock connected, intelligent, and resilient supply chains — ready for tomorrow’s challenges.</p>
                    </div>
                    <div className="xl:col-span-4"></div>

                </div>
            </section>



            <section className="relative group xl:overflow-hidden h-[510px] xl:h-[800px]   xl:mt-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/demandplus-desktop.webp"
                        alt="GROW with SAP"
                        className="transform transition-transform duration-500 group-hover:scale-110"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/realtes-demadplus-mobile.webp"
                        alt="GROW with SAP"
                        fill
                        priority
                    />
                </div>
                <div


                    className={`${applyMargin ? "xl:ml-[280px]  xl:w-[calc(100%-280px)]" : "ml-[35px]"} mx-[35px] h-full relative md:ml-[100px] md:w-[calc(100%-100px)] `}

                >
                    <div className="relative p-8 xl:w-[720px] pb-16  xl:mt-0 xl:block hidden">
                        <div className="absolute inset-0 bg-[#016FBE] opacity-[0.9]"></div>

                        <div className="relative  bg-opacity-80 text-white z-10 p-4 rounded-lg">
                            <h3 className="font-light xl:text-[30px] text-[18px]">Introducing </h3>
                            <h3 className="xl:text-[50px] text-[23px] leading-[60px]">Rialtes DemandPlus</h3>
                            <h3 className="xl:text-[36px] text-[22px] mt-5">End-to-End Kinaxis Services</h3>
                            <p className='mt-8 text-[22px] leading-tight font-normal'>Our DemandPlus suite offers a holistic approach to deploying Kinaxis RapidResponse, combining:</p>
                            <ul className="list-disc leading-tight xl:space-y-5 font-light marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-8 pr-12 xl:pr-0">
                                <li>Kinaxis License Advisory & Value Assessment</li>
                                <li>Solution Architecture & Design</li>
                                <li>Rapid Implementation & Process Configuration</li>
                                <li>Quality Assurance, Testing & User Training</li>
                                <li> Integration with SAP S/4 HANA, Oracle EBS & Non-SAP Systems</li>
                                <li>Post-Go-Live Support & Continuous Process Optimization</li>
                            </ul>
                            <div className="mt-6 absolute">
                                <LearnMore bgcolor={"#134874"} bordercolor={"#006FBE"} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="relative p-8 xl:w-[720px] xl:pb-16 pb-10  mt-[-10rem] xl:hidden block mx-[35px] ">
                    <div className="absolute inset-0 bg-[#016FBE] opacity-[0.9]"></div>

                    <div className="relative  bg-opacity-80 text-white z-10 xl:p-4 rounded-lg">
                        <h3 className="font-light xl:text-[30px] text-[18px]">Introducing </h3>
                        <h3 className="xl:text-[50px] text-[23px] xl:leading-[60px]">Rialtes DemandPlus</h3>
                        <h3 className="xl:text-[36px] text-[22px] mt-5">End-to-End Kinaxis Services</h3>
                        <p className='xl:mt-8 mt-5  leading-tight font-normal'>Our DemandPlus suite offers a holistic approach to deploying Kinaxis RapidResponse, combining:</p>
                        <ul className="list-disc leading-tight xl:space-y-5 font-light marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-8 pr-6">
                            <li>Kinaxis License Advisory & Value Assessment</li>
                            <li>Solution Architecture & Design</li>
                            <li>Rapid Implementation & Process Configuration</li>
                            <li>Quality Assurance, Testing & User Training</li>
                            <li> Integration with SAP S/4 HANA, Oracle EBS & Non-SAP Systems</li>
                            <li>Post-Go-Live Support & Continuous Process Optimization</li>
                        </ul>
                        <div className="xl:mt-6 xl:absolute">
                            <LearnMore bgcolor={"#134874"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-[-70px] sticky mt-[35rem] mx-[35px] xl:mx-0">
                <div className="col-span-4"></div>
                <div className="col-span-7 bg-[#163055] p-8">
                    <p className="xl:text-[26px] text-[18px] text-white leading-tight font-normal xl:pr-10">From strategy to execution, Rialtes enables a seamless and accelerated journey to Kinaxis-driven supply chain transformation.</p>
                </div>
                <div className="col-span-1"></div>


            </div>


            <section className="relative group overflow-hidden xl:mt-16 xl:mr-[142px]">
                <div className="w-full xl:h-[1046px] ">
                    <div className="xl:block hidden">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/why-ki-desktop.webp"
                            alt="Warehouse"
                            fill
                            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                            priority
                        />
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/why-ki-mobile.webp"
                            alt="Warehouse"
                            priority
                            width={0}
                            height={0}
                            className="w-full h-[611px] transform transition-transform duration-500 group-hover:scale-110"

                        />
                    </div>

                    <div className="absolute  text-white grid xl:grid-cols-12 grid-cols-1 xl:top-[25rem] top-[18rem]">
                        <div className={`${applyMargin ? "xl:pl-[280px]" : "md:ml-[100px] md:w-[calc(100%-100px)]"}  xl:col-span-6 bg-[#0B3A66]  pl-[35px] xl:py-16 py-8 xl:pr-20 pr-10 mr-[100px] xl:mr-0`}>

                            <h2 className="mb-4 leading-tight">Why Kinaxis RapidResponse?</h2>
                            <p className="font-light pr-[2rem] xl:pr-24 xl:mt-10 mt-5">
                                Kinaxis RapidResponse is a cloud-based supply chain planning platform that delivers:
                            </p>
                        </div>
                        <div className="xl:col-span-6"></div>

                    </div>
                </div>

                <div
                    className={`${applyMargin ? "xl:ml-[280px]" : "md:ml-[100px] md:w-[calc(100%-100px)]"} grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 relative  xl:-mt-10 mt-[-40px]  xl:mr-[50px] mx-[35px]`}

                >
                    {[
                        "Concurrent planning for synchronized supply chain decisions.",
                        "Real-time visibility across demand, supply, inventory, and capacity.",
                        "Rapid scenario modeling for agile responses to disruptions.",
                        "Seamless collaboration across supply chain, operations, and finance.",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className=" shadow-md p-8  text-black  border-black  border hover:bg-[#D9F2FF]  transition-all bg-white"
                        >
                            <p className="font-semibold xl:text-[24px] text-[20px]">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-20 xl:ml-[280px]">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="col-span-5 mx-[35px] xl:mx-0">
                        <h2 className="leading-tight pr-10 xl:pr-0">Supply Chain Planning Reimagined with Rialtes and Kinaxis</h2>
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/supply-desktop.webp"
                            alt=""
                            priority
                            className="w-full xl:mt-16 mt-10 relative"
                            width={0}
                            height={0}
                        />
                    </div>
                    <div className="col-span-7 bg-[#006FBE] xl:mt-[13rem] mt-[-4rem] text-white xl:ml-[-135px] xl:mb-[50px] xl:pl-48 px-[35px] pb-16 xl:pb-0">
                        <h3 className="xl:pr-[24rem] xl:pt-20 pt-24 text-[22px] xl:text-[30px]">End-to-End Supply Chain Planning Capabilities:</h3>
                        <ul className="list-disc leading-tight xl:space-y-5 font-light marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-8  xl:pr-0">
                            <li>Demand Planning & Forecasting</li>
                            <li>Supply Planning & Inventory Management</li>
                            <li>Sales & Operations Planning (S&OP)</li>
                            <li>Capacity & Production Planning</li>
                            <li> Supplier Collaboration & Risk Management</li>
                            <li>Distribution & Logistics Planning</li>
                        </ul>
                        <div className="mt-6 absolute">
                            <LearnMore bgcolor={"#134874"} bordercolor={"#006FBE"} />
                        </div>
                    </div>

                </div>
            </section>

            <section className="mt-24 xl:ml-[280px] mx-[35px] xl:mx-0">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-6 order-1 xl:order-2">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/sales-operation-desktop.webp"
                            alt="Sales and Operations"
                            priority
                            className="w-full xl:h-[783px] relative"
                            width={0}
                            height={0}
                        />
                    </div>

                    <div className="xl:col-span-5 order-2 xl:order-1 xl:pr-32">
                        <h2 className="leading-tight mt-10 xl:mt-0 pr-10 xl:pr-0">Sales & Operations Planning (S&OP)</h2>
                        <h3 className="xl:text-[42px] text-[22px] xl:mt-10 mt-5 leading-tight font-semibold">Drive Cross-Functional Alignment</h3>
                        <p className="mt-5 font-normal">
                            Rialtes leverages Kinaxis to deliver best-in-class S&OP capabilities, enabling companies to:
                        </p>
                        <ul className="list-disc leading-tight xl:space-y-5 font-normal marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-8 mt-5">
                            <li>Align demand and supply plans in real-time.</li>
                            <li>Balance financial goals and operational constraints.</li>
                            <li>Create what-if scenarios and evaluate trade-offs instantly.</li>
                            <li>Enhance cross-functional collaboration across sales, supply chain, and finance.</li>
                        </ul>
                    </div>

                </div>
            </section>
            <p className="bg-[#163055] p-8 xl:mx-[280px] z-[99] mx-[35px] text-white xl:mt-[-50px] mt-10 relative xl:text-[26px] text-[18px] font-normal">Outcome: Greater forecast accuracy, lower inventory, and improved service levels.</p>
            <section className="relative w-full xl:mt-[-53px] mt-16">
                <div className="w-full xl:h-[1046px]">
                    <div className="xl:block hidden">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/inventery-desktop.webp"
                            alt="Warehouse"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/inventery-mobile.webp"
                            alt="Warehouse"
                            priority
                            width={0}
                            height={0}
                            className="w-full h-[725px]"
                        />
                    </div>

                    <div className="absolute  text-white grid xl:grid-cols-12 grid-cols-1 xl:top-[34rem] top-[23rem]">
                        <div className="xl:col-span-6  xl:pl-[280px] pl-[35px] xl:py-16 py-8">
                            <h2 className="mb-4 leading-tight">Inventory Optimization & Enterprise Scheduling</h2>
                            <h3 className="xl:text-[42px] text-[22px] mt-5">Maximize Efficiency</h3>
                            <p className="font-light xl:pr-24 pr-20 mt-5">
                                With Kinaxis, Rialtes helps clients achieve precision inventory management and production scheduling:
                            </p>
                        </div>
                        <div className="xl:col-span-6"></div>
                    </div>
                </div>


            </section>
            <div className=" grid xl:grid-cols-12 grid-cols-1 absolute xl:mt-[-100px]  mt-[-75px] xl:ml-[280px] mx-[35px] xl:mx-0">
                <div className="xl:col-span-4 col-span-12 bg-[#163055] px-10 py-12 text-white ">
                    <h3>Inventory Optimization</h3>
                    <ul className="list-disc leading-tight xl:space-y-5 font-normal marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-8 mt-5">
                        <li>End-to-end visibility across multi-echelon inventory.</li>
                        <li>Right-sizing inventory levels to balance service and cost.</li>
                        <li>Dynamic inventory policies based on real-time demand and supply signals.</li>
                    </ul>
                </div>
                <div className="xl:col-span-1 col-span-12 bg-[#163055] flex xl:items-center xl:justify-center">
                    <div className="border-b border-white  mx-[35px] xl:mx-0 xl:border-b-0 xl:border-r xl:h-[70%] xl:w-auto"></div>
                </div>

                <div className="xl:col-span-4 col-span-12 bg-[#163055] px-10 py-12 text-white">
                    <h3>Enterprise Scheduling</h3>
                    <ul className="list-disc leading-tight xl:space-y-5 font-normal marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-8 mt-5">
                        <li>Finite capacity scheduling for manufacturing and production.</li>
                        <li>Optimized allocation of resources and materials.</li>
                        <li>Real-time adjustments based on disruptions and priority changes.</li>
                    </ul>
                </div>
                <div className="xl:col-span-3 col-span-12"></div>
            </div>

            <section className="relative xl:mt-[17rem] xl:ml-[280px] mt-[38rem]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/scenario-desktop.webp"
                        alt="Warehouse"
                        className="object-cover w-full"
                        priority
                        width={0}
                        height={0}
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/scenario-mobile.webp"
                        alt="Warehouse"
                        className="object-cover w-full"
                        priority
                        width={0}
                        height={0}
                    />
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-1 absolute xl:mt-0 top-0 mt-[20rem] xl:pl-20 pl-10 pt-20">
                    <div className="col-span-5 pr-5">
                        <h2>Scenario Planning</h2>
                        <h3 className="xl:text-[42px] text-[22px] mt-5 font-semibold leading-tight">Prepare for Every Possibility</h3>
                        <p className="xl:mt-8 mt-5 font-normal leading-tight">What-if analysis and scenario simulation are at the heart of Kinaxis RapidResponse, and Rialtes brings the expertise to fully leverage them:</p>
                        <ul className="list-disc leading-normal xl:space-y-5 font-normal marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-8  xl:pr-16">
                            <li>Model complex supply chain scenarios (supplier delays, demand surges, production downtimes).</li>
                            <li>Evaluate impacts in real-time across financials, inventory, and operations.</li>
                            <li>Enable leadership teams to make confident, data-driven decisions.</li>
                        </ul>
                        <div className="mt-6 xl:mt-10 absolute">
                            <LearnMore bgcolor={"#134874"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                    <div className="col-span-7"></div>
                </div>
            </section>


            <section className="mt-[38rem] xl:mt-0">
                <div className="grid xl:grid-cols-12 grid-cols-1 mx-[35px] xl:mx-0">
                    <div className="col-span-6">

                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/seamless-desktop.webp"
                            alt="Warehouse"
                            className="object-cover w-full"
                            priority
                            width={0}
                            height={0}
                        />
                    </div>
                    <div className="col-span-6 xl:bg-[#EAEAEA] xl:p-20 pt-8 xl:pr-[10rem] pr-10">
                        <h2 className="leading-tight">Seamless Integration with SAP, Oracle, and Non-SAP Systems</h2>
                        <h3 className="mt-10 xl:text-[42px] text-[22px] font-semibold">Integrate Kinaxis with Your Existing ERP Ecosystem</h3>
                        <p className="mt-5 xl:pr-20 pr-10 font-normal leading-tight">Rialtes delivers robust integration services using SAP Cloud Platform Integration (SAP CPI) and Kinaxis-certified connectors:</p>
                        <ul className="list-disc leading-normal xl:space-y-5 font-normal marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5  xl:pr-16">
                            <li>SAP S/4 HANA and ECC</li>
                            <li> Oracle EBS and Cloud ERP</li>
                            <li>Legacy and non-SAP systems</li>
                        </ul>
                    </div>


                </div>
            </section>
            <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-[-80px] mt-10 mx-[35px] xl:mx-0">
                <div className="col-span-6"></div>
                <div className="col-span-5">
                    <p className="xl:text-[26px] text-[18px] bg-[#163055] p-8 text-white font-normal xl:pr-32 xl:pl-20">Our pre-built accelerators and custom APIs ensure real-time data flow for synchronized planning.</p>

                </div>
                <div className="col-span-1"></div>


            </div>


            <section className="xl:ml-[280px]">
                <div className="grid xl:grid-cols-12 grid-cols-1">

                    <div className="xl:order-2 order-1 col-span-6">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/btp-desktop.webp"
                            alt="Warehouse"
                            className="object-cover w-full xl:h-[828px]"
                            priority
                            width={0}
                            height={0}
                        />
                    </div>

                    <div className="xl:order-1 order-2 col-span-6">
                        <div className="bg-[#006FBE] xl:p-20 p-10 text-white xl:pb-32 pb-[20rem]">
                            <h2 className="leading-tight">Rialtes’ Strong SAP BTP Competency</h2>
                            <h3 className="xl:text-[42px] text-[22px] mt-5">Extending S/4 HANA Value</h3>
                            <p className="mt-5 font-light leading-tight">
                                Rialtes brings deep expertise in SAP Business Technology Platform (BTP) to extend,
                                customize, and enhance S/4 HANA integration with Kinaxis:
                            </p>
                            <ul className="list-disc leading-normal xl:space-y-4 font-light marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-8 xl:pr-16">
                                <li>Custom apps and workflows on BTP.</li>
                                <li>Real-time API management and orchestration.</li>
                                <li>Advanced analytics and AI integrations.</li>
                            </ul>
                            <div className="mt-5 absolute">
                                <LearnMore bgcolor={"#134874"} bordercolor={"#006FBE"} />
                            </div>
                        </div>
                        <p className="xl:text-[26px] text-[18px] bg-[#163055] xl:p-8 p-6 xl:pl-14 pl-10 text-white font-light mx-[35px] xl:mx-0 mt-[-172px] xl:mt-0">Our certified BTP consultants ensure secure, scalable, and future-proof solutions for every client.</p>

                    </div>
                </div>
            </section>



            <section className="relative">
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/bringing-desktop.webp"
                        alt="Warehouse"
                        className="object-cover w-full xl:h-[885px]"
                        priority
                        width={0}
                        height={0}
                        bringing-mobile
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/bringing-mobile.webp"
                        alt="Warehouse"
                        className="w-full h-[1233px]"
                        priority
                        width={0}
                        height={0}

                    />
                </div>

                <div className="grid xl:grid-cols-12 grid-cols-1 xl:ml-[280px] mx-[35px] xl:mx-0 absolute top-0">
                    <div className="col-span-6 pt-20">
                        <h2 className="leading-tight">Bringing Together Kinaxis and the Broader Enterprise Ecosystem</h2>
                        <h3 className="xl:text-[42px] text-[22px] mt-10 font-bold leading-tight pr-20">Related SAP and Procurement Solutions with Rialtes:</h3>
                    </div>

                </div>
                <div className="xl:ml-[280px] mx-[35px] xl:mx-0 xl:mr-[464px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 absolute bottom-[-3rem] z-[9]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border hover:bg-[#D9F2FF] p-10 flex flex-col xl:h-[425px] transition-all bg-white  shadow-lg"
                        >
                            <h3 className="mb-8 text-[#0A6BB8] font-semibold leading-tight">{service.title}</h3>
                            <p className="text-[#000000] leading-tight xl:text-[24px] text-[16px]">{service.description}</p>
                            <div className="xl:bottom-[30px] xl:absolute">

                                <Link
                                    href={service.knowMore}
                                    className={`inline-block  xl:text-[20px] text-[16px] hover:bg-[#134874] bg-[#134874] border-[1px] border-[solid]  font-semibold text-white py-3 px-8 transition duration-300 mt-6`}
                                >
                                    Know More
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>



            </section>

            <section className="relative">
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/sap-ariba-desktop.webp"
                        alt="Warehouse"
                        className="object-cover w-full xl:h-[1061px]"
                        priority
                        width={0}
                        height={0}
                        bringing-mobile
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/sap-ariba-mobile.webp"
                        alt="Warehouse"
                        className="w-full h-[403px]"
                        priority
                        width={0}
                        height={0}

                    />
                </div>

                <div className="xl:ml-[280px]  absolute xl:top-[28rem] top-[25rem] grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-5 bg-[#073259] xl:p-16 p-10 xl:pr-24 text-white">
                        <h2 className="leading-tight pr-20 xl:pr-0">SAP ARIBA & Procurement</h2>
                        <h3 className="xl:text-[42px] text-[22px] font-bold leading-tight mt-5 pr-16 xl:pr-0">Direct/indirect procurement visibility connected to supply chain plans.</h3>
                        <h3 className="mt-5 leading-tight">SAP CPI — Connect S/4 HANA with Non-SAP Systems</h3>
                        <p className="mt-5 mb-5 font-normal">Rialtes leverages SAP CPI to connect S/4 HANA, Kinaxis, and other enterprise systems for a fully synchronized supply chain.</p>
                        <div className="absolute">
                            <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                </div>
                <div className="bg-[#555555] mt-[20rem] xl:mt-0">
                    <div className="pt-64 mx-[35px] xl:mx-0">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/solutions/enterprise-platform/kinaxis/enhance-desktop.webp"
                                alt="Warehouse"
                                className="w-[1360px] h-[224px] xl:h-[612px] xl:mx-[280px] "
                                priority
                                width={0}
                                height={0}
                                bringing-mobile
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/solutions/enterprise-platform/kinaxis/enhance-mobile.webp"
                                alt="Warehouse"
                                className="w-full h-[224px]"
                                priority
                                width={0}
                                height={0}
                                bringing-mobile
                            />
                        </div>
                    </div>
                    <div className="xl:mx-[280px] mx-[35px] grid xl:grid-cols-12 grid-cols-1 text-white mt-16 xl:gap-20">
                        <div className="col-span-6">
                            <h2 className="leading-tight">Enhance Supply Chain Conversations with AgentChat</h2>
                            <h3 className="mt-10 xl:text-[42px] text-[22px] leading-tight font-bold">WhatsApp for Supply Chain Teams</h3>

                        </div>
                        <div className="col-span-6">
                            <h3 className="mt-8 xl:mt-0 pr-16 xl:pr-0">Introducing AgentChat Your Conversational AI for Supply Chain</h3>
                            <p className="mt-5 font-normal">AgentChat is a bi-directional WhatsApp conversational app, enabling instant collaboration across supply chain teams.</p>
                            <h3 className="xl:text-[24px] text-[18px] mt-10">AgentChat Highlights:</h3>
                            <ul className="list-disc leading-tight xl:space-y-4 mb-10 font-light marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 pr-12 xl:pr-0">
                                <li>Rapid deployment within minutes.</li>
                                <li> Secure, role-based access.</li>
                                <li>Case, order, and issue delegation by type (orders, inventory, delays).</li>
                                <li>Fully integrated with Salesforce and SAP environments.</li>
                            </ul>
                            <div className="xl:mt-10">
                                <Link
                                    href="/products/agentchat"
                                    className="xl:text-[20px] text-[16px] hover:bg-[#ffffff] bg-[#134874] hover:text-[#134874]   font-semibold text-white py-3 px-8 transition duration-300 mt-6"
                                >
                                    Know More
                                </Link>
                            </div>

                        </div>

                    </div>
                    <div className="xl:ml-[280px] mx-[35px] xl:mx-0 grid xl:grid-cols-12 grid-cols-1 mt-16">
                        <div className="col-span-8 bg-[#068EDA] p-8 pl-12 text-white">
                            <p className="xl:text-[26px] text-[18px] font-normal xl:pr-32 leading-tight">Now, connect your supply chain teams, suppliers, and partners with a familiar and powerful interface — WhatsApp + ERP + CRM.</p>
                        </div>
                    </div>
                </div>






            </section>



            <section className="xl:ml-[280px] relative">
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/leading-desktop.webp"
                        alt="Warehouse"
                        className="object-cover w-full"
                        priority
                        width={0}
                        height={0}
                        bringing-mobile
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/leading-mobile.webp"
                        alt="Warehouse"
                        className="object-cover w-full h-[850px]"
                        priority
                        width={0}
                        height={0}
                        bringing-mobile
                    />
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-1 absolute xl:top-40 top-[20rem] text-white">
                    <div className="col-span-6 xl:px-16 px-14">
                        <h2 className="leading-tight xl:pr-24">Leading the Future with AI, Data, and Integrated Planning</h2>
                        <p className="mt-8 font-light">At Rialtes, we go beyond standard implementations — combining AI, data science, and advanced planning tools to create responsive and resilient supply chains.</p>
                        <ul className="list-disc leading-tight xl:space-y-4 font-light marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5  xl:pr-0">
                            <li>Rapid deployment within minutes.</li>
                            <li> Secure, role-based access.</li>
                            <li>Case, order, and issue delegation by type (orders, inventory, delays).</li>
                            <li>Fully integrated with Salesforce and SAP environments.</li>
                        </ul>
                        <div className="absolute xl:mt-8 mt-4">
                            <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                        </div>
                    </div>
                    <div className="col-span-6"></div>

                </div>
            </section>
            < div
                className="mt-20
              xl:container
              mx-[35px] xl:mr-0
              xl:ml-[280px] xl:w-[calc(100%-280px)]
              md:ml-[100px] md:w-[calc(100%-100px)]
              text-black pb-10"
            >
                <ContactForm title={'Start Your Kinaxis Journey with Rialtes DemandPlus Today'} subtitle={'Ready to transform your supply chain planning and resilience with Kinaxis RapidResponse? Let Rialtes DemandPlus guide you through every step — from strategy to execution.'} className={"xl:max-w-[60rem] leading-tight text-[26px] font-light xl:text-[60px] pr-10 xl:pr-0"} />
            </div >
        </div>
    );
}
