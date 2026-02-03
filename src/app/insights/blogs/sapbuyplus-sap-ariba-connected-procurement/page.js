"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from '@/app/components/blogSocialIcons'
import UnorderedList from "@/app/components/unorderedList";
const schemaData = {
      "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "SAPBuy+: The Missing Link in SAP Ariba Procurement | Rialtes",
  "description": "SAPBuy+ is Rialtes’ comprehensive service suite built around SAP Ariba to deliver end-to-end procurement transformation along with system implementation.",
  "image": "https://www.rialtes.com/images/blogs/digital-connectivity-bridge-network-integration.webp",
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
    "@id": "https://www.rialtes.com/insights/blogs/sapbuyplus-sap-ariba-connected-procurement/"
  },
  "datePublished": "2026-01-12",
  "mainEntity": {
    "@type": "FAQPage",
    "name": "SAPBuy+ for SAP Ariba Implementation and Migration FAQs",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is SAPBuy+?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SAPBuy+ is Rialtes’ comprehensive service framework for SAP Ariba implementations and transformations, covering advisory, deployment, integration, supplier enablement, AI tools, and continuous optimization."
        }
      },
      {
        "@type": "Question",
        "name": "How does SAPBuy+ improve SAP Ariba adoption?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By focusing on supplier enablement, user experience, process standardization, and real-world workflows — not just system configuration."
        }
      },
      {
        "@type": "Question",
        "name": "What role does the Ariba Network play in connected procurement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Ariba Network enables digital collaboration between buyers and suppliers, automating transactions, improving visibility, and strengthening compliance."
        }
      },
      {
        "@type": "Question",
        "name": "How does AgentChat enhance procurement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AgentChat brings conversational AI into procurement, enabling instant support, real-time insights, and proactive risk management."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose Rialtes as your SAP Ariba partner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rialtes combines certified SAP expertise, global delivery capability, and a proven SAPBuy+ framework to deliver procurement transformation that goes beyond technology."
        }
      }
    ]
  }
}

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/sapbuyplus-sap-ariba-connected-procurement";
    const currUrl = useUrl()


    const mainData = [
        "Procurement has undergone more significant changes in the last five years than it did in the previous twenty. What was once a back-office function focused on cost control is now a strategic engine for resilience, risk management, and supplier innovation. Yet many enterprises still struggle to unlock the full value of SAP Ariba.",
        "The platform is powerful. The outcomes, however, often fall short. Why? Because technology alone doesn’t create connected procurement. Execution does.",
        "Disconnected supplier onboarding, underutilized Ariba Network capabilities, slow adoption, and limited intelligence layers continue to hinder organizations' progress. That gap between platform potential and real-world performance is exactly where SAPBuy+ is needed. SAPBuy+ is designed to turn SAP Ariba from a transactional system into a connected procurement ecosystem that brings suppliers, buyers, and intelligence together in real time.",

    ]
    const faqData = [
        {
            "question": "What is SAPBuy+?",
            "answer": "SAPBuy+ is Rialtes’ comprehensive service framework for SAP Ariba implementations and transformations, covering advisory, deployment, integration, supplier enablement, AI tools, and continuous optimization."
        },
        {
            "question": "How does SAPBuy+ improve SAP Ariba adoption?",
            "answer": "By focusing on supplier enablement, user experience, process standardization, and real-world workflows — not just system configuration."
        },
        {
            "question": "What role does the Ariba Network play in connected procurement?",
            "answer": "The Ariba Network enables digital collaboration between buyers and suppliers, automating transactions, improving visibility, and strengthening compliance."
        },
        {
            "question": "How does AgentChat enhance procurement?",
            "answer": "AgentChat brings conversational AI into procurement, enabling instant support, real-time insights, and proactive risk management."
        },
        {
            "question": "Why choose Rialtes as your SAP Ariba partner?",
            "answer": "Rialtes combines certified SAP expertise, global delivery capability, and a proven SAPBuy+ framework to deliver procurement transformation that goes beyond technology."
        }
    ]
    const procurementData = [
        {
            title: "Why Procurement Still Feels Fragmented — Even with SAP Ariba",
            desc: [
                "Most enterprises already run SAP Ariba. Yet many still experience:"
            ],
            // descc: "From the customer’s perspective, it looks like this:",
            list: [
                "Low supplier adoption on Ariba Network",
                "Manual touchpoints across sourcing and contracting",
                "Limited visibility into supplier risk",
                "Slow cycle times in procure-to-pay",
                "Compliance that depends on people instead of systems",
                "Collaboration that happens outside the platform"
            ],
            desc2:
                "In short, the tools exist. The connection doesn’t.",
            descc: "Procurement today demands more than automation. It needs orchestration across suppliers, internal teams, data, and risk signals.",
             desc3: "The Procurement Gap",


        }
    ];

    const traditionalAriba = [
        {
            "title": "Why SAPBuy+ Works Where Traditional Ariba Projects Struggle",
            "desc": [
                "Many Ariba programs stall because they focus only on deployment. SAPBuy+ focuses on adoption, integration, and value realization.",
                "Here’s what’s different:"

            ],
            "list": [
                {
                    "title": "Advisory First, Technology Second",
                    "desc": "We start with your procurement goals — cost control, risk mitigation, supplier innovation — and design Ariba around outcomes.",
                },
                {
                    "title": "Implementation with a Clean Core Mindset",
                    "desc": "Standardized processes replace custom chaos, making upgrades and expansion easier.",
                },
                {
                    "title": "Supplier Enablement as a Core Workstream",
                    "desc": "Not an afterthought. Not optional. Adoption is engineered from day one",

                },
                {
                    "title": "Integration Without Friction",
                    "desc": "SAPBuy+ connects Ariba with SAP S/4HANA, ECC, finance systems, and third-party apps to eliminate data silos.",
                },
                {
                    "title": "Continuous Optimization",
                    "desc": "Post-go-live is where transformation accelerates — not where it ends."
                }
            ],
            "desc2": "The SAPBuy+ Delivery Model",
           
            model: {
                steps: [
                    "Assess",
                    "Design",
                    "Enable",
                    "Integrate",
                    "Automate",
                    "Optimize"
                ]
            },

        }
    ]
    const sapbuyplusData = [
        {
            "title": "What Is SAPBuy+? A Connected Procurement Framework",
            "desc": [
                "SAPBuy+ is Rialtes’ comprehensive service suite built around SAP Ariba to deliver end-to-end procurement transformation along with system implementation."
            ],
            "descc": "It combines:",
            "list": [
                "Strategic advisory",
                "SAP Ariba implementation and migration",
                "Supplier enablement on Ariba Network",
                "Integration with ERP and third-party systems",
                "AI-driven engagement tools like AgentChat",
                "Continuous optimization and value tracking"

            ],
            "desc2": "Instead of running procurement on disconnected processes, SAPBuy+ helps enterprises build a single, connected procurement experience from sourcing to settlement.",

        }
    ]

    const supplierCollaboration = [
        {
            "title": "Supplier Collaboration: Where Procurement Transformation Really Begins",
            "desc3": [
                "Technology can automate workflows.",
                "Only collaboration transforms outcomes.",
            ],
            "desc": [
                "SAP Ariba already offers one of the world’s largest digital supplier ecosystems through the Ariba Network. Yet many organizations underuse it, limiting interaction to purchase orders and invoices.",
                "SAPBuy+ changes that dynamic."

            ],
            "descc": "What connected supplier collaboration looks like",
            "list": [
                "Digital onboarding instead of manual vendor setup",
                "Centralized communication instead of email chains",
                "Shared visibility into orders, deliveries, and payments",
                "Faster dispute resolution",
                "Standardized compliance documentation",
                "Real-time performance tracking"
            ],
            "desc2": "When suppliers become partners on the same platform, procurement moves from control to co-creation."
        }
    ]

    const aribaNetwork = [
        {
            "title": "The Ariba Network Advantage",
            "desc": [
                "The Ariba Network is more than a transaction hub. It’s a business network — but only when activated properly.",
                "Through SAPBuy+, Rialtes helps enterprises unlock the full value of the network by:"
            ],
            "list": [
                "Driving supplier onboarding programs",
                "Designing supplier experience journeys",
                "Automating PO, ASN, invoice, and payment flows",
                "Embedding compliance at every step",
                "Enabling supplier self-service portals",
                "Improving data accuracy and cycle times"
            ],
            "descc": "The result is measurable:",
            "list2": [
                "Faster sourcing cycles",
                "Lower invoice exception rates",
                "Higher on-contract spend",
                "Reduced operational friction",
                "Stronger supplier relationships"
            ],
            "desc2": "Procurement stops being reactive and becomes predictably efficient."
        }
    ]
    const automationIntelligence = [
        {
            "title": "From Automation to Intelligence: AI in Connected Procurement",
            "desc": "Modern procurement isn’t just about speed. It’s about insight. This is where AI tools like <a href='https://www.rialtes.com/products/agentchat/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>AgentChat</a> elevate SAP Ariba from a system of record to a system of engagement.",
            "desc2": "How AI changes the procurement experience",
            "descc": "With AgentChat layered into the procurement ecosystem, teams gain:",
            "list": [
                "Conversational access to procurement data",
                "Instant answers on order status, contracts, and suppliers",
                "Automated support for suppliers and internal users",
                "Risk alerts based on behavior and data patterns",
                "Faster resolution of exceptions"
            ],
            "desc4": "AI in Procurement Flow",
            model: {
                label: "Ariba + AgentChat = Always-on procurement assistant",
                steps: [
                    "Data",
                    "Intelligence",
                    "Action",
                ]
            },
            "desc3": "Instead of chasing information, teams focus on decisions.",
            "desc6" : "With AgentChat layered into the procurement ecosystem, teams gain:"

        }
    ]
    const businessOutcomes = [
        {
            "title": "Business Outcomes That Matter",
            "desc": [
                "Connected procurement delivers impact leaders can see on the balance sheet and in daily operations:"
            ],
            "list": [
                "Faster sourcing and contracting cycles",
                "Reduced procurement operating costs",
                "Higher supplier adoption and satisfaction",
                "Better compliance and audit readiness",
                "Lower supply risk exposure",
                "Real-time spend visibility",
                "AI-driven decision support"
            ],
            "desc2": "Procurement becomes a growth enabler, not a bottleneck."
        }

    ]
    const sapbuyplus = [
        {
            "title": "Who Should Consider SAPBuy+",
            "desc": [
                "SAPBuy+ is ideal for:"
            ],
            "list": [
                "Enterprises modernizing procurement with SAP Ariba",
                "Organizations migrating from legacy SRM systems",
                "Businesses struggling with supplier adoption",
                "Global firms seeking standardized processes",
                "Teams aiming to introduce AI into procurement operations",
            ],
            "desc2": "If procurement is strategic to your business, SAPBuy+ makes it scalable.",

        }
    ]

    const sapAribaTransformation = [
        {
            "title": "How Rialtes Delivers SAP Ariba Transformation at Scale",
            "desc": [
                "At Rialtes, we help organizations redefine procurement efficiency with SAP Ariba — the industry’s leading cloud-based solution for strategic sourcing, contract management, supplier collaboration, and procure-to-pay automation.",
                "As a <a href='https://partnerfinder.sap.com/profile/0002050236' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>certified SAP partner</a> with a global presence in the United States, Canada, India, and Singapore, we deliver end-to-end SAP Ariba solutions covering:"
            ],
            "list": [
                "Advisory and roadmap creation",
                "Implementation and migration",
                "Ariba Network enablement",
                "ERP and ecosystem integration",
                "AI-powered engagement with AgentChat",
                "Ongoing support and optimization"
            ],
            "desc2": "Our <a href='https://www.rialtes.com/services/spend-management/sapbuyplus-ariba-implementation-partner/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>SAPBuy+ service suite</a> ensures enterprises achieve real procurement transformation while maximizing ROI on SAP investments.",
            "desc3": "SAP Ariba provides the platform.",
            "desc4": "SAPBuy+ makes it work the way modern procurement demands."

        }
    ]
    const ChevronRight = () => (
        <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 4xl:w-9 4xl:h-9"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );


    return (
        <section className="min-h-screen">
            <Seo
                title="SAPBuy+: Scaling SAP Ariba for Modern Procurement | Rialtes"
                description="SAPBuy+ is Rialtes’ comprehensive service suite built around SAP Ariba to deliver end-to-end procurement transformation along with system implementation."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/sapbuyplus-sap-ariba-connected-procurement/"
                }
            />

            <Script
                id="schema-voyager"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/digital-connectivity-bridge-network-integration.webp"
                        alt="Glowing blue digital bridge with network nodes connecting devices representing cloud connectivity and data integration"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/digital-connectivity-bridge-network-integration-mobile.webp"
                        alt="Glowing blue digital bridge with network nodes connecting devices representing cloud connectivity and data integration"
                        priority
                        height={250}
                        width={375}
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">SAP Ariba </span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>12 January 2026
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">SAPBuy+: The Missing Link in Ariba Procurement</h1>
                            {/*Main section */}
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

                                {/* Procurement section */}
                                {
                                    procurementData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />

                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}

                                            />
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.descc}</p>
                                             <p className="mt-8 4xl:text-[20px] font-bold 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc3}</p>

                                             <div className="w-full h-full my-5 xl:mt-8 md:mt-6">
                                                <Image
                                                    src="/images/blog/procurement-workflow-progression-stages-diagram.svg"
                                                    alt="Procurement workflow progression arrows showing strong platform, weak adoption, fragmented workflows, and missed value stages"
                                                    className="w-[340px] md:w-[650px] 4xl:w-[800px] 2xl:w-[780px] xl:w-[750px] h-auto"
                                                    height={0}
                                                    width={0}
                                                    priority
                                                />
                                            </div>



                                        </div>
                                    ))
                                }


                                {/* SAPBUY+ section */}
                                {
                                    sapbuyplusData.map((data, ind) => (
                                        // this blog has extra margin top
                                        <div className="md:mt-[60px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.descc }}
                                            />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <p className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/*  Supplier Collaboration section */}
                                {
                                    supplierCollaboration.map((data, ind) => (

                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc3} ulClassName="mt-5  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <h3 className="mt-5 4xl:text-[24px] font-bold 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">{data.descc}</h3>

                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />

                                        </div>
                                    ))
                                }

                                {/**Ariba Network */}
                                {
                                    aribaNetwork.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-5 4xl:text-[20px]  2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.descc}</p>
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list2.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/*   Automation Intelligence section */}
                                {
                                    automationIntelligence.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <p
                                                className="mt-5  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                            <h3
                                                className="mt-5  4xl:text-[24px] font-bold 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                             <p
                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc6 }}
                                            />

                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>

                                            <p className="mt-5 md:mt-10 4xl:text-[20px] font-bold 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc4}</p>

                                            {/* Automation Model */}
                                            <div className=" mt-[50px]">

                                                <div className="border  4xl:w-[540px] 2xl:w-[490px] xl:w-[470px] w-[320px] max-[400px]:w-[260px] md:w-[420px] border-b-0 border-black mt-[-25px] xl:px-6 px-2 xl:py-6  py-6 flex flex-wrap items-center gap-4 4xl:text-[22px] 2xl:text-[20px] xl:text-[20px] md:text-[18px] text-[16px] font-medium">

                                                    {data.model.steps.map((step, index) => (
                                                        <span key={index} className="flex items-center md:gap-4 gap-2 xl:gap-8">
                                                            <span className="4xl:text-[24px] 2xl:text-[20px] xl:text-[20px] md:text-[20px] text-[16px]">{step}</span>

                                                            {index !== data.model.steps.length - 1 && (
                                                                <div className="bg-[#006FBE] xl:p-[4px] rounded-full">
                                                                    <span className="text-white flex items-center">
                                                                        <ChevronRight />
                                                                    </span>
                                                                </div>

                                                            )}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="inline-block bg-[#006FBE] w-[340px] max-[400px]:w-[290px] md:w-[500px] 4xl:w-[680px] 2xl:w-[620px] xl:w-[570px] text-white px-6 py-3 font-semibold
                                             4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[16px]">
                                                    {data.model.label}
                                                </div>
                                            </div>

                                            <p
                                                className="mt-5 md:mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />


                                        </div>
                                    ))
                                }

                                {/* Traditional Ariba section */}
                                {
                                    traditionalAriba.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            {
                                                data.list.map((elem, id) => (
                                                    <div className="flex gap-5 md:gap-10 mt-12" key={id}>
                                                        <p className="flex-shrink-0 w-[48px] h-[48px] md:w-[56px] md:h-[56px] xl:w-[60px] xl:h-[60px] 2xl:w-[64px] 2xl:h-[64px] 4xl:w-[65px] 4xl:h-[65px] flex items-center justify-center bg-[#1486E6] text-white font-bold  text-[20px] md:text-[22px] xl:text-[26px] 2xl:text-[26px] 4xl:text-[32px]">{id + 1}</p>
                                                        <div>
                                                            <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.title}</h3>
                                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-2">{elem.desc}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }


                                            <p className="xl:mt-[80px] md:mt-[60px] mt-12 4xl:text-[24px] font-bold 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[18px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />


                                            <div className="mt-[30px]">
                                                <div className="flex items-start justify-between">

                                                    {data.model.steps.map((step, index) => (
                                                        <div key={index} className="flex flex-col items-start flex-1">

                                                           
                                                            <div className="flex items-center w-full">

                                                         
                                                                <div className="bg-[#006FBE] xl:p-[6px] p-[2px] rounded-full flex items-center justify-center z-10">
                                                                    <span className="text-white flex items-center">
                                                                        <ChevronRight />
                                                                    </span>
                                                                </div>


                                                                {index !== data.model.steps.length - 1 && (
                                                                    <div className="flex-1 h-[2px] bg-black"></div>
                                                                )}
                                                            </div>
                                                   <span className="mt-4 font-bold justify-start   4xl:text-[24px] 
                                                   2xl:text-[20px]  xl:text-[18px]  md:text-[18px] max-[400px]:text-[10px] text-[11px] px-1">
                                                                {step}
                                                            </span>



                                                        </div>


                                                    ))}
                                                </div>
                                            </div>



                                        </div>
                                    ))
                                }

                                {/* Solve Fragmentation section */}
                                {
                                    businessOutcomes.map((data, ind) => (
                                        <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/**sapbuyplus Section */}
                                {
                                    sapbuyplus.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <p className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                        </div>
                                    ))
                                }


                                {/**SAP Ariba Transformation Section */}
                                {
                                    sapAribaTransformation.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <p className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                            <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc4 }}
                                            />
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: SAPBuy+ for SAP Ariba Implementation and Migration</h2>
                <div className="mt-[29px] xl:mt-[30px]">
                    <FAQAccordion faqData={faqData} />
                </div>
            </section>

            {/* blog carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section>
    )
}