"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from '@/app/components/blogSocialIcons'
import UnorderedList from "@/app/components/unorderedList";

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/sap-cpi-implementation-architecture-best-practices-use-cases";
    const currUrl = useUrl()
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "SAP CPI Implementation: Architecture, Best Practices & Use Cases",
        "description": "A well-executed SAP CPI implementation gives enterprises the integration backbone to scale automation, unlock insights, and deliver seamless experiences.",
        "image": "https://www.rialtes.com/images/blogs/cloud-data-analytics-team.webp",
        "author": {
            "@type": "Organization",
            "name": "Rialtes"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Rialtes",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.rialtes.com/images/homepage/logo.svg"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.rialtes.com/insights/blogs/sap-cpi-implementation-architecture-best-practices-use-cases/"
        },
        "datePublished": "2026-02-02",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "SAP CPI Implementation FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is SAP CPI used for?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SAP CPI is used to integrate SAP and non-SAP applications, automate business processes, and enable real-time data exchange across enterprise landscapes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is SAP CPI different from point-to-point integration?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SAP CPI provides centralized governance, scalability, security, and reuse, unlike point-to-point integrations that become hard to manage as systems grow."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is SAP CPI suitable for large enterprises?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. SAP CPI is designed for enterprise-scale integrations with high volumes, complex security requirements, and hybrid system landscapes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does an SAP CPI implementation take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Timelines vary based on complexity, number of systems, and use cases. Modular design and best practices significantly accelerate delivery."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can SAP CPI integrate with non-SAP systems?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. SAP CPI supports a wide range of adapters and protocols to integrate with Salesforce, Oracle, legacy systems, and third-party platforms."
                    }
                }
            ]
        }
    }
    const faqdata = [
        {
            question: "What is SAP CPI used for?",
            answer:
                "SAP CPI is used to integrate SAP and non-SAP applications, automate business processes, and enable real-time data exchange across complex enterprise landscapes."
        },
        {
            question: "How is SAP CPI different from point-to-point integration?",
            answer:
                "SAP CPI offers centralized governance, scalability, security, and reusable integration patterns, unlike point-to-point integrations that become difficult to manage as systems and volumes grow."
        },
        {
            question: "Is SAP CPI suitable for large enterprises?",
            answer:
                "Yes. SAP CPI is built for enterprise-scale integrations, supporting high transaction volumes, complex security requirements, and hybrid landscapes spanning cloud and on-premise systems."
        },
        {
            question: "How long does an SAP CPI implementation take?",
            answer:
                "Implementation timelines depend on integration complexity, number of connected systems, and use cases. Using modular architectures and proven best practices can significantly accelerate delivery."
        },
        {
            question: "Can SAP CPI integrate with non-SAP systems?",
            answer:
                "Absolutely. SAP CPI supports a wide range of adapters and protocols, enabling seamless integration with non-SAP systems such as Salesforce, Oracle, legacy platforms, and other third-party applications."
        }
    ]
    const mainData = [
        "Digital transformation doesn’t fail because of weak applications. It fails because systems don’t talk to each other.",
        "As enterprises adopt cloud ERP, best-of-breed SaaS platforms, and industry-specific solutions, integration becomes the invisible backbone holding everything together. Orders, invoices, employee data, suppliers, customers, and partners all depend on reliable, secure, and scalable data movement.",
        "This is where SAP Cloud Platform Integration (SAP CPI) plays a big role. A well-designed SAP CPI implementation doesn’t just connect systems. It orchestrates processes, enforces security, enables automation, and creates the real-time visibility modern enterprises need.",
        "At Rialtes, we help organizations design and <a href='https://www.rialtes.com/solutions/integration/sap-cloud-platform-integration-consulting' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>implement enterprise-grade SAP CPI architectures</a> that scale with growth, support complex landscapes, and turn integration from a bottleneck into a business accelerator."
    ]
    const commonData = [
        {
            "title": "Why Integration Is the Backbone of Digital Transformation",
            "desc": "Most enterprises today operate in hybrid landscapes that include:",
            "list": [
                "SAP S/4HANA or ECC",
                "SAP Ariba and SuccessFactors",
                "Salesforce and other CRM platforms",
                "Legacy systems and third-party application"
            ],
            "desc2": "Without a robust integration layer, organizations face:",
            "list2": [
                "Disconnected systems and data silos",
                "Manual handoffs and duplicate data entry",
                "Limited end-to-end visibility",
                "Slow customer and supplier interactions",
                "Higher operational risk and error rates"
            ],
            "desc3": "SAP CPI addresses this by acting as a centralized integration hub, enabling standardized, secure, and reusable integrations across SAP and non-SAP systems."
        },
        {
            "title": "What Is SAP CPI and Where Does It Fit",
            "desc": "SAP CPI is a cloud-native integration platform that enables:",
            "list": [
                "Application-to-application integration",
                "Business process integration",
                "API-based connectivity",
                "Event-driven and message-based integratio"
            ],
            "desc2": "It supports a wide range of integration patterns, including synchronous, asynchronous, batch, and event-based flows.",
            "list2": null,
            "desc3": "Enterprise landscape diagram with SAP CPI at the center connecting SAP and non-SAP systems."
        }
    ]
    const sapArchitectData = [
        {
            "title": "Integration Flows (iFlows)",
            "desc": "Integration flows define how data moves between sender and receiver systems. <div class='mt-5'>They include:</div> ",
            "list": [
                "Message routing logic",
                "Data transformation steps",
                "Error handling",
                "Logging and monitoring"
            ],
            "desc2": "Well-designed iFlows are modular, reusable, and easily extendable."
        },
        {
            "title": "Adapters",
            "desc": "Adapters enable connectivity with different systems and protocols, including:",
            "list": [
                "OData, REST, and SOAP",
                "IDoc and RFC",
                "SFTP and FTP",
                "JMS and AS2"
            ],
            "desc2": null
        },
        {
            "title": "Message Processing and Transformation",
            "desc": "SAP CPI supports message mapping, XSLT, and Groovy scripting to transform data formats between systems. Best practice is to keep transformations simple, well-documented, and centrally governed.",
            "list": null,
            "desc2": null
        },
        {
            "title": "Security and Connectivity",
            "desc": "Security is embedded into CPI through:",
            "list": [
                "OAuth, certificates, and basic authentication",
                "Secure credential storage",
                "TLS encryption",
                "Role-based access control"
            ]
        }
    ]
    const sapImplementationData = [
        {
            "title": "SAP CPI Implementation Best Practices",
            "desc": "A successful SAP CPI implementation is as much about discipline as it is about technology.",
            "list": [
                {
                    "title": "Design for Reuse and Scalability",
                    "desc": "Avoid point-to-point integrations.Build canonical data models and reusable iFlow templates to support future growth."
                },
                {
                    "title": "Standardize Naming and Documentation",
                    "desc": "Clear naming conventions for packages, iFlows, and artifacts reduce maintenance effort and speed up troubleshooting."
                },
                {
                    "title": "Implement Robust Error Handling",
                    "desc": "Every iFlow should include:",
                    "list": [
                        "Technical error handling",
                        "Business validation checks",
                        "Alerts and notifications"
                    ],
                    "desc2": "Errors should be actionable, not just logged."
                },
                {
                    "title": "Secure by Default",
                    "desc": "Use certificates and OAuth wherever possible.<br>Avoid hardcoding credentials and sensitive data."
                },
                {
                    "title": "Plan for Monitoring and Operations",
                    "desc": "Leverage CPI monitoring dashboards, message logs, and alerts to ensure integrations remain healthy as volumes grow."
                },
                {
                    "title": "Visual-ready concept:",
                    "desc": "Best practices checklist mapped to design, build, deploy, and operate phases."
                }
            ]
        }
    ]
    const deploymentData = [
        {
            "title": "Deployment and Lifecycle Management",
            "desc": "A successful SAP CPI implementation doesn’t stop at go-live.It lives and evolves alongside the business. Enterprise integrations typically move through clearly defined environments to protect stability while enabling change:",
            "list": [
                "<strong>Development</strong>, where integration flows are designed, built, and enhanced",
                "<strong>Quality / Test</strong>, where scenarios are validated, edge cases are exposed, and performance is verified",
                "<strong>Production</strong>, where integrations run at scale and support mission-critical operations"
            ],
            "desc2": [
                "Each environment serves a distinct purpose, and moving changes between them requires discipline. Without strong transport management and version control, even small updates can create unexpected disruptions downstream.",
                "At Rialtes, we implement structured lifecycle management practices that reduce risk and increase confidence:"
            ],
            "list2": [
                "Controlled deployment pipelines that manage transports between environments with full traceability",
                "Version-controlled integration artifacts, ensuring changes are documented, auditable, and reversible",
                "Automated testing strategies that validate message flows, data mappings, and error handling before production release",
                "Clear rollback procedures that allow teams to restore stable versions if issues arise quickly"
            ],
            "desc3": "This approach ensures integrations can be enhanced continuously without compromising reliability. As business processes evolve, systems are added, or volumes increase, SAP CPI remains stable, predictable, and ready to scale."
        }
    ]
    const enterpriseData = [
        {
            "title": "Enterprise Use Cases for SAP CPI",
            "list": [
                {
                    "title": "SAP S/4HANA Integration",
                    "list": [
                        "Real-time master data synchronization",
                        "Order-to-cash and procure-to-pay integration",
                        "Financial postings and reporting"
                    ]
                },
                {
                    "title": "SAP Ariba Integration",
                    "list": [
                        "Supplier onboarding",
                        "Purchase orders and invoices",
                        "Contract and sourcing data exchange"
                    ]
                },
                {
                    "title": "SAP SuccessFactors Integration",
                    "list": [
                        "Employee master data replication",
                        "Organizational structure updates",
                        "Payroll and third-party HR system integration"
                    ]
                },
                {
                    "title": "Salesforce Integration",
                    "list": [
                        "Customer and account synchronization",
                        "Order and billing data exchange",
                        "Service and case data integration"
                    ]
                },
                {
                    "title": "Hybrid and Third-Party Systems",
                    "list": [
                        "Oracle, Workday, legacy ERP",
                        "Banking and payment gateways",
                        "Logistics and partner platforms"
                    ]
                }
            ],
            "desc": "These integrations enable true end-to-end business processes instead of disconnected transactions."
        }
    ]
    const commonData2 = [
        {
            "title": "Integration Is the Difference Between Digital and Truly Connected",
            "desc": [
                "Digital transformation isn’t about adopting more systems.<br> It’s about making them work together intelligently.",
                "A well-executed SAP CPI implementation gives enterprises the integration backbone needed to scale automation, unlock real-time insights, and deliver seamless business experiences. With the right architecture, best practices, and execution partner, integration stops being a constraint and starts becoming a competitive advantage.",
                "SAP CPI provides the foundation for:"
            ],
            "list": [
                "Event-driven processes",
                "Real-time data pipelines",
                "API-led architectures",
                "Intelligent workflows"
            ],
            "desc2": "Without a strong integration layer, automation initiatives stall and AI lacks reliable data."
        },
        {
            "title": "How Rialtes Delivers SAP CPI at Enterprise Scale",
            "desc": [
                "At Rialtes, SAP CPI implementation is not treated as a technical afterthought. It’s treated as a strategic foundation.",
                "Our approach includes:"
            ],
            "list": [
                "Integration strategy and architecture design",
                "End-to-end SAP and non-SAP connectivity",
                "Security-first implementation",
                "Performance and scalability planning",
                "Post-go-live support and optimization"
            ],
            "desc2": "With proven experience across <a href='https://www.rialtes.com/services/spend-management/sapbuyplus-ariba-implementation-partner' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>SAP Ariba</a>, <a href='https://www.rialtes.com/services/business-transformation/grow-with-sap-services' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>S/4HANA</a>, <a href='https://www.rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>SuccessFactors</a>, <a href='https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Salesforce</a>, and complex hybrid landscapes, we help enterprises move faster without compromising stability."
        }
    ]
    return (
        <section className="min-h-screen" >
            <Seo
                title="SAP CPI Implementation Explained: Architecture to Use Cases | Rialtes"
                description="A well-executed SAP CPI implementation gives enterprises the integration backbone to scale automation, unlock insights, and deliver seamless experiences."
                keywords="Partners, website, welcome"
                canonical={`https://www.rialtes.com/insights/blogs/sap-cpi-implementation-architecture-best-practices-use-cases`}
            />

            <Script
                id="schema-datapshere-blog"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/cloud-data-analytics-team.webp"
                        alt="Team analyzing cloud data and digital dashboards to drive enterprise insights and decision making"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/cloud-data-analytics-team-mobile.webp"
                        alt="Team analyzing cloud data and digital dashboards to drive enterprise insights and decision making"
                        priority
                        height={0}
                        width={0}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>

            <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
                <div className="grid lg:grid-cols-12">
                    <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

                        {/* date and icons */}
                        <div className="sm:flex justify-between">
                            <div>
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">SAP CPI</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>02 February 2026
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">SAP CPI Implementation: Architecture, Best Practices, and Enterprise Use Cases</h1>

                            <div className="xl:mt-[38px] mt-[33px]">
                                {
                                    mainData.map((data, ind) => {
                                        return (
                                            <p
                                                key={ind}
                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data }}
                                            />
                                        )
                                    })
                                }
                            </div>
                            {/* common section */}
                            {
                                commonData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc && data.desc}</p>
                                        {
                                            data.list &&
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                        }
                                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2 && data.desc2}</p>
                                        {data.list2 &&
                                            <UnorderedList arrName={data.list2} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                        }
                                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc3 && data.desc3}</p>
                                    </div>
                                ))
                            }

                            <div className="my-10">
                                <Image
                                    src="/images/blog/sap-cpi.svg"
                                    alt="Team analyzing cloud data and digital dashboards to drive enterprise insights and decision making"
                                    width={0}
                                    height={0}
                                    className="h-full w-full"
                                />
                            </div>

                            {/* sap cpi section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">SAP CPI Architecture: Core Building Blocks</h2>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Understanding SAP CPI implementation starts with understanding its architecture.</p>
                                <div className="grid md:grid-cols-2 grid-cols-1 mt-10 gap-y-10 md:gap-y-20 xl:w-[1100px]">
                                    {
                                        sapArchitectData.map((data, ind) => (
                                            <div className={`${ind % 2 == 0 ? "md:border-r md:pr-20" : "md:pl-20"} max-md:border-b max-md:pb-5 border-[#707070] last:border-b-0`} key={ind}>
                                                <h3 className="font-bold text-[18px] md:text-[19px] xl:text-[19px] 4xl:text-[22px]">{data.title}</h3>
                                                <p
                                                    key={ind}
                                                    className="md:mt-8 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                {data.list && <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-1 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />}
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2 && data.desc2}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Connectivity to on-premise systems is handled via SAP Cloud Connector, ensuring secure communication without exposing internal networks.</p>
                            </div>

                            {/* how Rialtes section */}
                            {
                                sapImplementationData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                        <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{data.subtitle}</h3>

                                        <div className="grid lg:grid-cols-3 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full lg:w-[940px] xl:w-[1100px] 4xl:w-[1250px]">
                                            {
                                                data.list.map((data, ind) => {
                                                    return (
                                                        <div
                                                            key={ind}
                                                            className={`mt-5 md:pr-8 border-[#707070] ${(ind === 1 || ind === 2 || ind === 4 || ind === 5) ? "4xl:pl-[50px] lg:pl-[30px] lg:border-l max-lg:border-b max-lg:pb-5 max-lg:last:border-b-0 md:pr-4" : ""} ${(ind === 0) ? "lg:pr-[40px] 4xl:pr-0 max-lg:border-b max-lg:pb-5" : ""} ${(ind === 1 || ind === 3) ? "max-lg:border-b max-lg:pb-4 lg:border-0" : ""} ${(ind === 4) ? "md:border-b-0" : ""}`}>
                                                            <h4 className={`4xl:text-[22px] 2xl:text-[19px] xl:text-[19px] md:text-[20px] text-[20px] font-bold text-[#0A6BB8] md:w-[80%]`}>{data.title}</h4>
                                                            <p
                                                                key={ind}
                                                                className="md:mt-8 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                                            />
                                                            {data.list && <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-1 pl-[26px] lg:pl-[36px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />}
                                                            <p className="md:mt-1 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[80%]">{data.desc2}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                            {/* deployment section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    deploymentData.map((data, ind) => (
                                        <div key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-1 pl-[26px] lg:pl-[36px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                            <UnorderedList arrName={data.desc2} ulClassName="mt-5 space-y-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <UnorderedList arrName={data.list2} ulClassName="mt-5 space-y-1 pl-[26px] lg:pl-[36px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc3}</p>
                                        </div>
                                    ))
                                }
                            </div>

                            {/* enterprise section */}
                            {
                                enterpriseData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[50px] mt-[40px] gap-[20px] sm:w-[80%] md:w-full lg:w-[90%] xl:w-full 4xl:w-[1200px]">
                                            {
                                                data.list.map((elem, id) => {
                                                    return (
                                                        <div className="4xl:p-[36px] p-[32px] border border-[#707070]" key={id}>
                                                            <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4">{elem.title}</h3>
                                                            <UnorderedList arrName={elem.list} ulClassName="mt-4 space-y-1 pl-[26px] lg:pl-[26px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <p
                                            className="my-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />
                                    </div>
                                ))
                            }
                            {/* common section */}
                            {
                                commonData2.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        {
                                            data.list &&
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-1 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                        }
                                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2 && data.desc2}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </section>
            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container" >
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: SAP CPI Implementation</h2>
                <div className="mt-[29px] xl:mt-[30px]">
                    <FAQAccordion faqData={faqdata} />
                </div>
            </section >

            {/* blog carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]" >
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section >
    )
}

// sap cpi