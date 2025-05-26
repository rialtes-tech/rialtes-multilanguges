
"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import { HeroSection } from "@/app/components/herosection";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rise with SAP Services",
    "alternateName": "VoyagerPlus by Rialtes",
    "url": "https://www.rialtes.com/services/business-transformation/rise-with-sap-services/",
    "description": "Accelerate your digital transformation with Rialtes Voyager+ for RISE with SAP. Our services include SAP S/4HANA Cloud implementation, Greenfield and Brownfield deployments, SAP BTP integrations, SAP Signavio process intelligence, and post-go-live support — tailored for future-ready enterprises.",
    "provider": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg",
        "sameAs": [
            "https://www.linkedin.com/company/rialtes-technologies-llc/",
            "https://www.youtube.com/@rialtes"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        }
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
    "audience": {
        "@type": "Audience",
        "audienceType": "Enterprises, CIOs, CTOs, ERP Leaders"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "RISE with SAP Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "SAP Cloud ERP Implementation",
                    "description": "End-to-end implementation of SAP S/4HANA Cloud using SAP Activate and Rialtes Voyager+ methodology."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Greenfield SAP Implementation",
                    "description": "Reimagine your ERP from scratch using SAP best practices, SAP Signavio, and data strategy frameworks."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Brownfield SAP System Conversion",
                    "description": "Seamlessly migrate from ECC to SAP S/4HANA while retaining data and business processes."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "SAP Business Technology Platform Integration",
                    "description": "Custom app development, automation, analytics, and integrations with SAP BTP and CPI."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Connected SAP Solutions",
                    "description": "Integrate SAP SuccessFactors, SAP Ariba, and Salesforce with SAP S/4HANA for business synergy."
                }
            }
        ]
    }
}
export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Rise with SAP Services from a Trusted Implementation Partner | Rialtes"
                description="Looking for a SAP Rise implementation partner you can trust? Rialtes’ Voyager+ delivers tailored rise with SAP services for smooth S/4HANA transformation."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/services/business-transformation/rise-with-sap-services/"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section>
                <HeroSection title="Accelerate Your Digital Transformation with Rialtes Voyager+ for RISE with SAP" subtitle="Voyager+" mobimg="/images/services/rise-with-sap/header.webp" deskimg="/images/services/rise-with-sap/header.webp" extraImg="/images/success-factors/sap-partner-logo.webp" />
            </section>

            {/* unlock section */}
            <section
                className="xl:mt-[78px] mt-[51px] custom-container"
            >
                <h2 className="text-[26px] leading-[32px] md:text-[40px] md:leading-[50px] font-light xl:text-[60px] xl:leading-[73px] xl:w-[90%] w-[80%]">
                    Unlock the Future of Intelligent Enterprise with a Trusted SAP Partner
                </h2>

                <p className="text-[16px] leading-[19px] md:text-[18px] md:leading-[26px] font-normal xl:text-[22px] xl:leading-[30px] xl:w-[80%] w-[92%] xl:mt-[43px] mt-[32px]">
                    At Rialtes, we help organizations future-proof their business with RISE with SAP — combining deep industry expertise, a certified SAP team, and proven methodologies. As a certified SAP partner with global presence in the United States, Canada, India, and Singapore, Rialtes is uniquely positioned to deliver end-to-end SAP S/4HANA transformations that go beyond technology and drive real business outcomes.
                </p>

                <p className="text-[16px] leading-[19px] md:text-[18px] md:leading-[26px] font-normal xl:text-[22px] xl:leading-[30px] xl:w-[80%] w-[94%] mt-[20px]">
                    Our proprietary Voyager+ framework brings together SAP License Advisory, Solution Design, Implementation, Quality Assurance, Integration, and Post-Go-Live Support — creating a seamless, value-driven journey for organizations adopting RISE with SAP.
                </p>
            </section>

            {/* why chooose section */}

            <div className="bg-[#DBDBDB]">
                <section className="custom-container pb-[39px] lg:pb-[50px] mt-[145px]">
                    <div className="flex flex-col-reverse lg:flex-row gap-[60px] lg:gap-[60px] xl:gap-[100px]">


                        <div className="w-full xl:w-1/2 lg:mt-[81px] lg:mb-[50px]">
                            <h2 className="text-[26px] xl:text-[60px] xl:leading-tight">
                                Why Choose RISE with SAP + Rialtes?
                            </h2>
                            <p className="mt-5 text-[16px] xl:text-[22px]">
                                RISE with SAP is not just an ERP — it’s a comprehensive business transformation offering that bundles SAP S/4HANA Cloud, SAP Business Technology Platform (BTP), Business Process Intelligence with SAP Signavio, and partner-managed services into a single contract.
                            </p>
                            <h3 className="mt-10 font-bold text-[20px] xl:text-[30px]">
                                With Rialtes Voyager+, you can:
                            </h3>
                            <ul className="list-disc space-y-5 mt-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl">
                                <li>
                                    <h4 className="font-bold">Simplify your SAP transformation <span className="font-normal">with an all-in-one approach.</span></h4>
                                </li>
                                <li>
                                    <h4 className="font-bold">Accelerate cloud adoption<span className="font-normal"> and reduce technical debt.</span> </h4 >
                                </li>
                                <li>
                                    <h4 className="font-bold">Reimagine business processes <span className="font-normal"> using SAP Signavio.</span> </h4 >
                                </li>
                                <li>
                                    <h4 className="font-bold">Leverage AI and automation <span className="font-normal"> to optimize operations.</span> </h4 >
                                </li>
                            </ul>
                        </div>


                        <div className="w-full xl:w-1/2 flex justify-center xl:justify-end">
                            <Image
                                src="/images/services/rise-with-sap/why rialtes.webp"
                                alt="SAP Partner Logo"
                                width={0}
                                height={0}
                                className="w-[95%] md:w-[75%] lg:w-full xl:w-full mt-[-90px] h-full lg:mt-[-80px] xl:mt-[-70px] object-cover"
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* greenfield section */}

            <section className="relative overflow-hidden xl:mt-0">
                <Image
                    src="/images/services/rise-with-sap/Greenfield+background (1).webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />
                <div
                    className="
                 h-full relative custom-container"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-[95x] mt-[48px] text-white">
                        <div className="xl:col-span-12 col-span-12">
                            <h2 className="text-[26px] xl:text-[60px] xl:leading-tight w-[70%] lg:w-full">Greenfield and Brownfield:<br />
                                Two Roads to SAP S/4HANA Success</h2>
                        </div>
                        <div className="xl:col-span-2 col-span-12">
                            {/* Empty space for larger screens */}
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 grid-cols-1 lg:mt-[55px] mt-[28px] text-white bg-[#0C723F] lg:p-12 p-[25px]">
                        <div className="lg:col-span-7 col-span-12">
                            <h2 className="xl:text-[45px] text-[26px] leading-tight font-medium xl:w-[90%] lg:w-[70%]">
                                Greenfield Implementation-Reimagine from Ground Up
                            </h2>
                        </div>

                        <div className="lg:col-span-4 col-span-12">
                            <p className="xl:text-[22px] mt-[16px] lg:mt-0">For organizations looking to rebuild business processes and start fresh on SAP S/4HANA, Greenfield is the right approach.</p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-12 grid-cols-1 bg-white lg:pt-[40px] lg:px-[60px] lg:pb-[109px] px-[26px] pt-[28px] pb-[80px]">

                        <div className="lg:col-span-6 col-span-12">
                            <h3 className="xl:text-[30px] font-bold">Our Greenfield Approach Includes:</h3>

                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px]  xl:mt-[37px] mt-[19px] lg:mr-[20px]">
                                <li><h4 className="font-bold inline">Vision and Strategy Alignment — </h4>Define business goals and digital vision.</li>
                                <li><h4 className="font-bold inline">Process Reimagination with SAP Best Practices and Signavio — </h4>Redesign processes to leverage the latest innovations.</li>
                                <li><h4 className="font-bold inline">Solution Design and Prototyping —</h4> Develop future-state architecture and rapid prototyping.</li>
                                <li><h4 className="font-bold inline">  SAP S/4HANA Cloud Configuration — </h4> Build system aligned with fit-to-standard and tailored needs.</li>
                            </ul>
                        </div>

                        <div className="lg:col-span-6 col-span-12 lg:mt-12">
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] lg:mt-[37px] mt-[19px] lg:ml-[20px]">
                                <li><h4 className="font-bold inline"> Data Strategy and Clean Migration — </h4>Ensure accurate, clean data migration from legacy platforms.</li>
                                <li><h4 className="font-bold inline">Integration Framework Design with SAP BTP and CPI — </h4>Plan integrations with internal and external systems.</li>
                                <li><h4 className="font-bold inline"> User Training and Change Management — </h4>Drive adoption and organizational readiness.</li>
                                <li><h4 className="font-bold inline">Go-Live and Hypercare Support — </h4>Smooth transition with strong post-go-live governance.</li>
                            </ul>
                        </div>
                    </div>
                    <p className="xl:text-[26px] bg-[#0C8AD4] p-5 pl-10 text-white  xl:w-[93%] mt-[-50px] xl:ml-[50px]">Best for companies aiming for next-gen processes and cloud-first ERP.</p>
                    <div className="grid lg:grid-cols-12 grid-cols-1  mt-20 text-white bg-[#713A18] lg:p-12 p-[25px]">
                        <div className="lg:col-span-7 col-span-12">
                            <h2 className="xl:text-[45px] text-[26px] font-medium leading-tight xl:w-[90%] lg:w-[70%]">
                                Brownfield Implementation- Seamless System Conversion
                            </h2>
                        </div>

                        <div className="lg:col-span-4 col-span-12">
                            <p className="xl:text-[22px] mt-[28px] lg:mt-0">For enterprises seeking to retain existing processes and data while migrating to S/4HANA, the Brownfield approach offers a cost-effective, faster route.</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 grid-cols-1 bg-white lg:pt-[40px] lg:px-[60px] lg:pb-[109px] px-[26px] pt-[28px] pb-[80px]">

                        <div className="lg:col-span-6 col-span-12">
                            <h3 className="xl:text-[30px] font-bold">Our Brownfield Expertise Covers:</h3>
                            <ul className="list-disc space-y-5  marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-[37px] mt-[19px]">
                                <li><h4 className="font-bold inline">System Landscape and Fit Assessment — </h4>Evaluate existing ECC setup and assess conversion readiness.</li>
                                <li><h4 className="font-bold inline">Custom Code and Data Analysis — </h4> Review, simplify, and adapt custom developments.</li>
                                <li><h4 className="font-bold inline">Technical System Conversion — </h4> Execute SAP S/4HANA conversion using SAP-certified tools.</li>
                            </ul>
                        </div>

                        <div className="lg:col-span-6 col-span-12 lg:mt-12">
                            <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] lg:mt-[37px] mt-[19px] lg:ml-[20px]">
                                <li><span className="font-bold inline"> Data Transformation and Validation — </span>Migrate high-integrity data with minimal disruption.</li>
                                <li><span className="font-bold inline">Functional Testing and Optimization — </span>Ensure system alignment and performance.</li>
                                <li><span className="font-bold inline"> Post-Go-Live Optimization and Support — </span>Fine-tune processes and system behaviour post-migration.</li>
                            </ul>
                        </div>
                    </div>
                    <p className="xl:text-[26px] bg-[#0C8AD4] p-5 pl-10 text-white  xl:w-[93%] mt-[-50px] xl:ml-[50px]">Ideal for organizations focused on modernization without disrupting core operations.</p>

                    <button className="text-[20px] border-[1px] border-[solid]  border-[#134874] font-semibold bg-white text-black p-5 py-5  transition duration-300 order-4 mt-16">
                        <Link href='/contact-us'>Learn More</Link>
                    </button>
                </div>

            </section>

            {/* laveraging section */}

            <div
                className="custom-container xl:mt-[111px] mt-[46px]"
            >
                <div className="grid xl:grid-cols-12 grid-cols-1 items-center xl:gap-20 gap-5">
                    <div className="xl:col-span-8 col-span-12">
                        <h2 className="text-[25px] xl:text-[60px] mt-5 leading-tight">
                            Leveraging SAP Signavio and SAP Activate Methodology
                        </h2>
                        <h3 className="xl:text-[40px] xl:leading-[49px] text-[21px] leading-[25px] xl:mt-[31px] mt-[18px]">Proven Framework for Success</h3>
                    </div>

                    <div className="xl:col-span-4 col-span-12">
                        <p className="xl:text-[22px] text-[16px]">At Rialtes, we blend SAP Signavio’s Business Process Intelligence (BPI) with SAP Activate Methodology to ensure strategic alignment and flawless execution.</p>
                    </div>
                </div>
            </div>
            <div className="custom-container">
                <h3 className="xl:text-[30px] text-[18px] font-bold xl:mt-[86px] mt-[32px] w-[80%] lg:w-full">Our Activate-Based Delivery Model:</h3>

                <div className="overflow-x-auto xl:mt-[36px] mt-[39px]">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#D0EEFF] text-left">
                                <th className="xl:py-[30px] xl:pl-[30px] pl-[30px] py-[18px] text-[16px] xl:text-[30px] font-bold">Phase</th>
                                <th className="xl:py-[30px] xl:pl-[30px] pl-[30px] py-[18px] text-[16px] xl:text-[30px] font-bold">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {[
                                { title: "Discover", desc: "Value discovery, business case, and strategy." },
                                { title: "Prepare", desc: "Team onboarding, planning, and initial scoping." },
                                { title: "Explore", desc: "Fit-to-standard analysis and process design." },
                                { title: "Realize", desc: "System configuration, integrations, and testing." },
                                { title: "Deploy", desc: "Migration, training, and go-live execution." },
                                { title: "Run", desc: "Continuous optimization and support." }

                            ].map((item, index) => (
                                <tr key={index} className={`${index % 2 === 0 ? "bg-[#F2F2F2]" : "bg-white"} text-left mt-5`}>
                                    <td className="xl:py-[30px] xl:px-[30px] px-[30px] py-[18px] text-[16px] xl:text-[26px]">{item.title}</td>
                                    <td className="xl:py-[30px] xl:px-[30px] px-[30px] py-[18px] text-[16px] xl:text-[26px]">{item.desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="relative">
                <div
                    className="absolute left-0 right-0 xl:mt-[74px] lg:mt-[95px] mt-[104px] sm:mt-[50px] md:mt-[62px]"
                >
                    <div className="custom-container">
                        <div className="grid lg:grid-cols-12 grid-cols-1 bg-[#068EDA] lg:gap-8">
                            <div className="xl:col-span-4 lg:col-span-4 col-span-12 lg:pl-10 md:px-4">
                                <Image
                                    src="/images/services/rise-with-sap/SAP Signavio.webp"
                                    alt="SAP Partner Logo"
                                    width={0}
                                    height={0}
                                    className="lg:w-full md:w-[50%] w-full h-full"
                                    priority
                                />
                            </div>
                            <div className="xl:col-span-8 lg:col-span-8 col-span-12 text-white p-[24px] lg:py-[19px]">
                                <p className="xl:text-[26px] text-[16px] font-normal">
                                    By embedding SAP Signavio into Explore and Realize phases, we optimize processes and ensure business alignment, driving higher user adoption and system value.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* extending section */}
            <div className="bg-[#DBDBDB] lg:py-[102px] lg:pb-[132px] lg:mt-[153px] mt-[400px] md:mt-[320px] pt-[45px] pb-[73px]">
                <div
                    className="custom-container text-black">

                    <div className="grid lg:grid-cols-12 grid-cols-1">
                        <div className="lg:col-span-8 lg:mt-16 mt-5">
                            <h2 className="text-[25px] xl:text-[60px] xl:leading-tight">Extending Value: Rialtes’ BTP and Integration Expertise</h2>
                        </div>
                        <div className="lg:col-span-4 col-span-12">
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 grid-cols-1 mt-10 gap-5">
                        <div className="lg:col-span-5 col-span-12">
                            <h3 className="xl:text-[30px] font-bold text-[18px]">BTP Competency for Tailored Solutions</h3>
                            <p className="mt-5 xl:text-[22px] text-[16px]">Our certified SAP Business Technology Platform (BTP) experts enable advanced extensions, workflows, and integrations to customize and future-proof SAP S/4HANA solutions.</p>
                            <ul className="list-disc space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px]">
                                <li className="mt-4">Custom App Development and Extensions</li>
                                <li>Process Automation with SAP Build</li>
                                <li>Analytics and Data Intelligence</li>
                                <li> Seamless API and event-driven integrations</li>
                            </ul>
                        </div>
                        <div className="lg:col-span-1 col-span-12">
                        </div>
                        <div className="lg:col-span-5 col-span-12">
                            <h3 className="xl:text-[30px] font-bold text-[18px]">SAP CPI for Enterprise-Grade Integration</h3>
                            <p className="mt-5 xl:text-[22px] text-[16px]">We enable secure, scalable integration using SAP Cloud Platform Integration (CPI) to connect S/4HANA with SAP and non-SAP systems like Salesforce, Workday, and ServiceNow.</p>

                        </div>
                    </div>
                </div>
            </div>

            {/* connected sap solution */}

            <section className="relative xl:mt-0 mt-0 pb-[91px] xl:pb-[0px] xl:h-[600px]">
                <Image
                    src="/images/services/rise-with-sap/Connected SAP Solutions.webp"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                    priority
                />
                <div
                    className="
                  h-full relative custom-container"
                >
                    <div className="grid xl:grid-cols-12 grid-cols-1">
                        <div className="col-span-12">
                            <h2 className="text-[26px] xl:text-[60px] xl:mt-[63px] mt-[59px] text-white leading-tight w-[80%] lg:w-full xl:w-[80%]">
                                Connected SAP Solutions — Unlocking Synergy with S/4HANA
                            </h2>
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-[39px] mt-[43px]">
                        <div className="col-span-12 flex xl:flex-row flex-col gap-5">
                            <div className="flex-1 lg:pt-[49px] lg:px-[40px] lg:pb-[40px] pt-[42px] px-[32px] pb-[48px] bg-white text-black">
                                <h3 className="xl:text-[30px] font-bold">SAP SuccessFactors + S/4HANA</h3>
                                <p className="xl:text-[20px] mt-5 text-[16px]">Rialtes integrates SAP SuccessFactors for seamless HR and talent management, enabling end-to-end workforce lifecycle linked directly to core ERP functions like payroll, projects, and finance.</p>
                            </div>
                            <div className="flex-1 lg:pt-[49px] lg:px-[40px] lg:pb-[40px] pt-[42px] px-[32px] pb-[48px] bg-white text-black">
                                <h3 className="xl:text-[30px] font-bold">SAP Ariba + S/4HANA</h3>
                                <p className="xl:text-[20px] mt-5 text-[16px]">With SAP Ariba, we deliver comprehensive procurement transformation, fully integrated into S/4HANA for direct and indirect sourcing, supplier collaboration, and spend analysis.</p>
                            </div>
                            <div className="flex-1 lg:pt-[49px] lg:px-[40px] lg:pb-[40px] pt-[42px] px-[32px] pb-[48px] bg-white text-black">
                                <h3 className="xl:text-[30px] font-bold">Direct and Indirect Procurement</h3>
                                <p className="xl:text-[20px] mt-5 text-[16px]">Design and implement optimized procurement processes that reduce costs, enhance compliance, and improve supplier performance.</p>
                            </div>
                        </div>
                        <div className="xl:col-span-2 col-span-12">
                        </div>
                    </div>
                </div>
            </section>

            {/* conversational AI section */}

            <div className="bg-[#184671] xl:pt-[266px] 2xl:pt-[196px] pb-[68px]">
                <div
                    className="custom-container xl:!pr-0 "
                >
                    <div className="relative xl:h-[665px] h-auto xl:mt-20">

                        <div className="relative xl:absolute xl:inset-0 h-[300px] xl:h-full w-full">
                            <Image
                                src="/images/services/rise-with-sap/Agentchat banner.webp"
                                alt="AgentChat Banner"
                                fill
                                style={{ objectFit: "cover", objectPosition: "68%" }}
                                priority
                                className="w-full h-full"
                            />
                        </div>


                        <div className="grid xl:grid-cols-12 grid-cols-1 relative xl:absolute xl:top-0 xl:left-0 w-full">
                            <div className="xl:col-span-5 col-span-12 xl:w-[720px] xl:h-[360px]">
                                <h2 className="text-[25px] xl:text-[50px] xl:leading-tight bg-white text-black xl:p-12 p-5 xl:mt-0">
                                    Conversational AI with AgentChat — WhatsApp Business, Made for SAP and Salesforce
                                </h2>
                            </div>
                            <div className="xl:col-span-7 col-span-12" />
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white xl:mt-[60px] mt-[28px]">
                        <div className="xl:col-span-4 col-span-12">
                            <h3 className="xl:text-[40px] font-bold text-[20px] leading-[24px] xl:leading-[49px] w-[80%] lg:w-full">Transform Customer and Supplier Engagement with AgentChat</h3>
                            <p className="xl:text-[22px] font-normal text-[16px] leading-[22px] xl:leading-[30px] xl:mt-[30px] mt-[21px] w-[90%] lg:w-full">
                                AgentChat is a bi-directional WhatsApp conversational app built within Salesforce, designed to integrate seamlessly with SAP S/4HANA and Salesforce Clouds.
                            </p>
                            <button className="text-[20px] border-[1px] border-[solid]  border-[#134874] font-semibold bg-white text-black p-3  transition duration-300 order-4 mt-16 xl:block hidden">
                                <Link href='/products/agentchat'>Know More</Link>
                            </button>
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12 mt-[36px] xl:mt-0">
                            <h3 className="xl:text-[30px] text-[26px] font-bold">Key Features:</h3>
                            <ul className="list-disc space-y-5 xl:text-[20px] pl-5 marker:font-bold marker:text-2xl">
                                <li className="mt-5"><span className="font-bold">Quick Setup — </span> Go live in minutes.</li>
                                <li><span className="font-bold"> Enterprise-Grade Security & Role Management — </span> Supports multiple roles and secure access.</li>
                                <li><span className="font-bold"> Process Delegation — </span> Manage Cases, Orders, Leads, and Work Orders by record type.</li>
                                <li><span className="font-bold"> Cross-Platform Engagement — </span>  Unified communications between SAP, Salesforce, and WhatsApp.</li>
                            </ul>
                            <button className="text-[20px] border-[1px] border-[solid]  border-[#134874] font-semibold bg-white text-black p-3  transition duration-300 order-4 mt-16 xl:hidden block">
                                <Link href='/products/agentchat'>Know More</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI and data driven section */}

            <div className="custom-container xl:mt-[134px] mt-[37px]">
                <div className="grid lg:grid-cols-12 grid-cols-1 md:gap-[40px] xl:gap-[100px] items-center">

                    {/* Image Column */}
                    <div className="col-span-12 lg:col-span-5 relative h-[450px] md:h-[600px] md:w-[700px] lg:w-full md:mx-auto lg:h-full">
                        <Image
                            src="/images/services/rise-with-sap/AI and Data-Driven Innovation.webp"
                            alt="AI and Data-Driven Innovation"
                            fill
                            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                            priority
                            className="w-full"
                        />
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 col-span-12 text-black">
                        <h2 className="text-[26px] leading-[32px] xl:text-[60px] xl:leading-[73px] mt-8 lg:mt-0 w-[90%] xl:w-full">
                            AI and Data-Driven Innovation: Agentforce and SAP Data Cloud
                        </h2>
                        <p className="mt-5 xl:mt-10 text-[16px] leading-[19px] xl:text-[22px] xl:leading-[30px] font-normal xl:w-[90%]">
                            With SAP Data Cloud and Salesforce Agentforce AI, Rialtes brings intelligent insights, automation, and customer segmentation to modern SAP environments.
                        </p>
                        <ul className="list-disc marker:text-[#036CBC] pl-5 mt-6 xl:mt-10 text-[16px] leading-[19px] xl:text-[20px] xl:leading-[24px] font-semibold space-y-4">
                            <li>AI-Powered Analytics and Campaigns</li>
                            <li>Dynamic Customer and Supplier Journeys</li>
                            <li>Predictive Maintenance and Forecasting</li>
                            <li>Unified Data for Personalized Engagement</li>
                        </ul>
                    </div>

                </div>
            </div>


            {/* Contact Form */}
            <div
                className="custom-container text-black xl:mt-[119px] mt-[72px] mb-[58px] xl:mb-[148px]">
                <ContactForm title={'Partner with Rialtes to Transform Your SAP Landscape!'}
                    className={"max-w-[80rem] font-normal xl:text-[60px] text-[26px] leading-tight"} />
            </div >
        </div >
    );
}