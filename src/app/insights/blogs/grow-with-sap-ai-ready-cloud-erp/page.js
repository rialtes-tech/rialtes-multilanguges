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
    const fullUrl = "https://www.rialtes.com/insights/blogs/what-makes-sap-consulting-companies-trustworthy";
    const currUrl = useUrl()

    const mainData = [
        "If there’s one thing the market is signaling loudly, it is that AI is already reshaping industries, rewriting workflows, and rewarding companies that leap early. But here’s the catch: AI doesn’t thrive on fragmented systems, legacy processes, or scattered data. It needs structure, standardization, and a clean core to build on.",
        "According to McKinsey, more than 70 percent of organizations have already experimented with GenAI, and one in three expects AI to reshape core operations within the next three years. Gartner predicts that 80 percent of enterprises will shift from legacy to cloud-centric ERP by 2027, driven by the need for data standardization, automation, and connected business processes. Yet, most companies still struggle with fragmented systems and outdated workflows, making AI deployment slow, expensive, and unreliable. The reality is simple: AI only creates value when the underlying ERP is modern, clean, and integrated.",
        "This is where GROW with SAP lays the digital foundation needed to automate faster, scale confidently, and unlock intelligence across finance, supply chain, procurement, manufacturing, and beyond."
    ]

    const whyTrustData = [
        {
            "title": "Why GROW with SAP is the Launchpad for an Intelligent Enterprise",
            "desc": [
                "The move to modern ERP is no longer just an IT upgrade. It’s the backbone for innovation. AI, machine learning, and advanced analytics — all of this depends on the quality and consistency of your operational data.",
                "GROW with SAP offers standardized processes, industry best practices, and a cloud-native stack that clears the clutter and sets you up for rapid transformation."
            ]
        }

    ]
   

    const whatAreData = [
        {
            "title": "What Businesses Gain From GROW with SAP",
            "desc": [
                "When companies adopt GROW with SAP, the impact is not just technical. It shows up in how quickly decisions are made, how smoothly operations run, and how confidently leaders plan for the next phase of growth.",

            ],
            "list": [
                {
                    "title": "Lower TCO than traditional ERP rollouts",
                    "desc": "Cloud-first deployment removes the burden of heavy infrastructure investment and ongoing upgrade costs. Instead of maintaining servers and custom code year after year, businesses operate on a predictable subscription model and redirect saved capital toward innovation."
                },
                {
                    "title": "Faster implementation timelines",
                    "desc": "Because GROW with SAP delivers preconfigured industry best practices, businesses don’t start from scratch. Teams can go live in months, not years, accelerating time-to-value and reducing change management fatigue across departments"
                },
                {
                    "title": "Best practice processes instead of reinvented workflows",
                    "desc": "You get proven process templates that already work for global organizations. Finance closes faster, procurement approvals move automatically, supply chains become more visible, and manual spreadsheet-based operations finally fade out."
                },
                {
                    "title": "Always up-to-date system with continuous cloud innovations",
                    "desc": "No more disruptive upgrade cycles. You receive quarterly enhancements, new features, and performance improvements automatically in the cloud, keeping you future-aligned without reimplementation projects."
                },
                {
                    "title": "Real-time finance and operational visibility",
                    "desc": "Dashboards and embedded analytics deliver instant insights into working capital, inventory, fulfillment bottlenecks, and order-to-cash performance. Leaders can spot risks before they surface and act with clarity instead of hindsight."
                },
                {
                    "title": "Scalable foundation ready for AI, BTP apps, and automation",
                    "desc": "Once the core ERP is clean and standardized, automation becomes natural. You can easily extend capabilities with SAP BTP, integrate AI copilots, design predictive workflows, and tap into a growing innovation ecosystem without system overload."
                },


            ]
        }
    ]
    const whoShouldConsider = [
        {
            "title1": "Who Should Consider GROW with SAP?",
            "title2": "ERP as the Intelligence Layer",
            "desc": [
                "The old ERP was built to store transactions.",
                "Modern ERP is built to learn from them.",
                "GROW with SAP turns ERP into a decision engine combining real-time operational data, embedded analytics, and AI-based recommendations. This means leaders aren’t just accessing data; they’re acting on insights quickly.",
                "Where intelligence shows up:"

            ],
        }
    ]
    const tableData = [
        {
            function: "Finance",
            useCase: "Predict cash flow, detect anomalies, automate close",
        },
        {
            function: "Supply Chain",
            useCase: "Forecast demand, optimize stock, reduce wastage",
        },
        {
            function: "Sales & Service",
            useCase: "Recommendation engines, automated quotations",
        },
        {
            function: "Manufacturing",
            useCase: "Predictive maintenance, shop-floor IoT insights",
        },
        {
            function: "HR",
            useCase: "Workforce planning, productivity insights",
        },
    ];
    const whoshouldlistCard = [
        {
            "desc": [
                "GROW with SAP is built for organizations that want to scale without carrying legacy constraints. It fits companies that are evolving fast, expanding product lines, entering new markets, or digitizing core operations for the first time.",

            ],
            "list": [
                {
                    "title": "Mid-market companies aiming for enterprise-grade capabilities",
                    "desc": "You may not be a global giant yet, but you want the same control, transparency, and advanced capabilities that enterprise ERPs offer, without long deployment cycles or custom-heavy implementations."
                },
                {
                    "title": "Fast-growing businesses preparing to scale globally",
                    "desc": "When growth is rapid, manual processes become bottlenecks. GROW with SAP sets up the structure needed for compliance, multi-country operations, future acquisitions, and process consistency across business units."
                },
                {
                    "title": "Organizations moving off legacy ERP or multiple disconnected systems",
                    "desc": "If your data lives in different tools, departments, or spreadsheets, scaling becomes painful. GROW unifies operations into a single digital core and eliminates complexity step by step."
                },
                {
                    "title": "Companies preparing for AI-driven automation",
                    "desc": "To adopt AI meaningfully, workflows must be standardized, data clean, and systems connected. GROW with SAP builds that foundation, so introducing automation, predictive analytics, and AI copilots later is smooth and cost-effective."
                },


            ]
        }
    ]
    const howSalesforceData = [
        {
            "title": "How Rialtes Helps You Adopt GROW with SAP Successfully",
            "desc": ["Choosing the right ERP is critical. Implementing it right matters even more.",
                "We help you go live with SAP S/4HANA Public Cloud through GROW with SAP using a structured approach:"
            ],
            "list": [
                {
                    "title": "Assessment & Process Mapping",
                    "desc": ["Understand current workflows, gaps, and align with SAP best practices."],
                },
                {
                    "title": "System Configuration & Data Migration",
                    "desc": [
                        "Clean mapping, structured migration, minimal disruption"
                    ],
                },
                {
                    "title": "Standardization Over Customization",
                    "desc": [
                        "Focus on adopting proven processes instead of replicating legacy complexities."
                    ],

                },
                {
                    "title": "Automation Design & Enablement",
                    "desc": [
                        "Set up workflows, analytics dashboards, and integration flows."
                    ],

                },
                {
                    "title": "AI & Innovation Roadmap for the Next 12–36 Months",
                    "desc": [
                        "Guide future automation, BTP extensions, AI copilots, and industry add-ons."
                    ],
                }
            ],
            "desc2": "At Rialtes, we help organizations move to SAP S/4HANA Cloud under the GROW program and build an ERP foundation that’s automation-first, AI-ready, and future-proof by design. Whether you’re scaling, modernizing, or preparing for next-stage digital transformation, GROW with SAP gives you a clean starting point and the speed to get value early."
        }
    ]
    const faqdata = [
        {
            "question": "What is GROW with SAP?",
            "answer": "A packaged offering that enables businesses to adopt SAP S/4HANA Public Cloud quickly with standardized best-practice processes, automation-ready workflows, and lower total ownership cost."
        },
        {
            "question": "Why choose GROW with SAP over traditional ERP deployment?",
            "answer": "It avoids heavy customization, speeds up go-live, keeps the core clean, and ensures your ERP remains upgrade-friendly for future AI and automation use cases"
        },
        {
            "question": "How does GROW with SAP prepare businesses for AI?",
            "answer": "Creating a standardized data foundation where processes are uniform, integrated, and optimized it makes it easier to introduce machine learning, automation, and AI-powered insights later."
        },
        {
            "question": "What role does Rialtes play in a GROW with SAP implementation?",
            "answer": "We help organizations plan, deploy, and scale SAP S/4HANA Cloud, design process automation, migrate data securely, and create long-term AI and innovation roadmaps."
        },
        {
            "question": "Is GROW with SAP suitable for SMBs?",
            "answer": "Yes. It’s built for growing companies that want enterprise-level capabilities without long implementation cycles or infrastructure complexity."
        }
    ]


    const commonTrustData = [
        {
            "title": "ERP Readiness for AI",
            "desc": [
                "Before AI can optimize supply chains, automate payables, or forecast demand, it needs trustworthy, unified data. Traditional ERPs often struggle here simply because they carry years of custom code, workarounds, and siloed systems.",
                "GROW with SAP cuts through that complexity. You get a standardized ERP powered by SAP S/4HANA Cloud that ensures data is structured, integrated, and ready for intelligence layers.",
                "What this leads to:"
            ],
            "list": [
                "Faster AI adoption without re-platforming later",
                "Predictive analytics instead of manual reporting",
                "Automated decision support for finance, procurement, operations",
                "A clear path to SAP BTP, Generative AI, Joule copilots, and future agentic workflows"
            ]
        }
    ]
    const standardizationData = [
        {
            "title": "Standardization Enables Automation — And This is Where the Real ROI Lives",
            "desc": [
                "Automation doesn’t start with bots or AI. It starts with standardizing processes so workflows can run the same way every time.",
                "GROW with SAP brings predefined industry scenarios out of the box. Instead of spending months defining how procurement should work, businesses can adopt proven best practices and automate from Day 1.",
                "Example outcomes we deliver for our clients at Rialtes:"
            ],
            "list": [
                "Reduced manual approvals through rule-based workflows",
                "Automated invoice matching and reconciliation",
                "Real-time inventory tracking with automated reorder triggers",
                "Auto-generated reports for month-end closing",
                "Touchless procurement workflows supported by self-service portals"
            ]
        }
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Grow with SAP: Your Fast-Track Ticket to an AI-First Tomorrow",
        "description": "GROW with SAP lays the digital foundation needed to automate faster, scale confidently, and unlock intelligence across finance, supply chain, procurement, manufacturing, and beyond.",
        "image": "https://www.rialtes.com/images/blogs/grow-with-sap-ai-first.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/grow-with-sap-ai-ready-cloud-erp/"
        },
        "datePublished": "2026-01-06",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "GROW with SAP FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is GROW with SAP?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "GROW with SAP is a packaged offering that helps businesses adopt SAP S/4HANA Public Cloud quickly using standardized best-practice processes, automation-ready workflows, and a lower total cost of ownership."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why choose GROW with SAP over traditional ERP deployment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "GROW with SAP reduces heavy customization, accelerates go-live, keeps the ERP core clean, and ensures the system remains upgrade-friendly for future AI and automation scenarios."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does GROW with SAP prepare businesses for AI?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "GROW with SAP standardizes and integrates processes so data is clean, consistent, and trustworthy, making it easier to introduce machine learning, predictive analytics, and AI copilots on top of the ERP."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What role does Rialtes play in a GROW with SAP implementation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Rialtes helps assess current processes, configure SAP S/4HANA Public Cloud, migrate data, prioritize standardization over customization, design automation, and build a 12–36 month AI and innovation roadmap."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is GROW with SAP suitable for SMBs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, GROW with SAP is designed for growing businesses that want enterprise-grade ERP capabilities with faster implementation timelines and minimal infrastructure complexity."
                    }
                }
            ]
        }
    }
    return (
        <section className="min-h-screen">
            <Seo
                title="Grow with SAP: Modern ERP for an AI-First Tomorrow | Rialtes"
                description="Grow with SAP gives you a clean, cloud-native ERP foundation so you can automate operations, connect data, and become truly AI-ready without legacy complexity."
                keywords="Partners, website, welcome"
                canonical={`https://www.rialtes.com/insights/blogs/grow-with-sap-ai-ready-cloud-erp/`}
            />

            <Script
                id="schema-cluster"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/voygernext/grow-with-sap-ai-first.webp"
                        alt="Two people shaking hands with glowing digital lines symbolizing partnership and collaboration."
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/voygernext/voyager-mobile.webp"
                        alt="Two people shaking hands with glowing digital lines symbolizing partnership and collaboration."
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Grow with SAP</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>06 January 2026
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">Grow with SAP: Your Fast-Track Ticket to an AI-First Tomorrow</h1>

                            <div className="xl:mt-[38px] mt-[33px]">
                                {
                                    mainData.map((data,index) => {
                                        return (
                                            <p
                                               key={`${data}-${index}`} 
                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data }}
                                            />
                                        )
                                    })
                                }


                                {
                                    whyTrustData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                                {data.title}
                                            </h2>

                                            {data.desc.map((item,index) => (
                                                <p
                                                   key={`${item}-${index}`}
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: item }}
                                                />
                                            ))}
                                        </div>
                                    ))
                                }
                                <div className="bg-[#006FBE] text-white font-semibold p-5 mt-16 4xl:text-[26px] 2xl:text-[22px] xl:text-[22px] md:text-[20px] text-[20px]">GROW with SAP = Modern ERP + Standardization + Future AI Enablement</div>
                                <div className="xl:block hidden md:block">
                                    <img
                                        src="/images/blog/voygernext/infographic11.png"
                                        alt="Two people shaking hands with glowing digital lines symbolizing partnership and collaboration."
                                        className="w-full mt-16"
                                    />
                                </div>
                                <div className="xl:hidden block md:hidden">

                                    <img
                                        src="/images/blog/voygernext/mobile-info.webp"
                                        alt="Two people shaking hands with glowing digital lines symbolizing partnership and collaboration."
                                        className="mt-16 m-auto"
                                    />
                                </div>
                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">This alone shifts companies from reactive problem-solving to proactive decision-making.</p>

                                {
                                    commonTrustData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                        </div>
                                    ))
                                }
                                {
                                    standardizationData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                        </div>
                                    ))
                                }
                                <div className="bg-[#EDEDED] p-6 mt-5">
                                    <img
                                        src="/images/blog/voygernext/infographic.png"
                                        alt="Two people shaking hands with glowing digital lines symbolizing partnership and collaboration."

                                    />
                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">A three-stage maturity roadmap showcasing evolution from manual processes to AI-powered decisions.</p>
                                </div>
                                {
                                    whatAreData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] sm:w-[80%] md:w-full xl:w-[96%]">
                                                {
                                                    data.list.map((elem, index) => {
                                                        return (
                                                            <div className="4xl:p-[30px] p-[32px] border border-[#707070]" key={`${elem.title}-${index}`}>
                                                                <h3 className="text-[#006FBE] 4xl:text-[22px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070] leading-tight">{elem.title}</h3>
                                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight" dangerouslySetInnerHTML={{ __html: elem.desc }} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                        </div>
                                    ))
                                }
                                {
                                    whoShouldConsider.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title1}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title1}</h2>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title2}</h2>


                                            {data.desc.map((item, index) => (
                                                <p
                                                    key={`${item}-${index}`}
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: item }}
                                                />
                                            ))}
                                        </div>
                                    ))
                                }
                                <table className="w-full border-collapse mt-10">
                                    {/* Header */}
                                    <thead className="bg-gray-100 border-b border-gray-300">
                                        <tr>
                                            <th className="text-left font-semibold p-4
              4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                Function
                                            </th>
                                            <th className="text-left font-semibold p-4
              4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                Example AI / Insight Use Case
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {tableData.map((row, index) => (
                                            <tr
                                                key={`${row.function}-${index}`}
                                                className="border-b border-gray-300 xl:table-row"
                                            >
                                                <td
                                                    className="p-4 xl:table-cell 
                4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                >
                                                    {row.function}
                                                </td>

                                                <td
                                                    className="p-4 xl:table-cell 
                4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                >

                                                    {row.useCase}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {
                                    whoshouldlistCard.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] sm:w-[80%] md:w-full xl:w-[96%]">
                                                {
                                                    data.list.map((elem, index) => {
                                                        return (
                                                            <div className="4xl:p-[30px] p-[32px] border border-[#707070]" key={`${elem.title}-${index}`}>
                                                                <h3 className="text-[#006FBE] 4xl:text-[22px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 leading-tight">{elem.title}</h3>
                                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight" dangerouslySetInnerHTML={{ __html: elem.desc }} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                        </div>
                                    ))
                                }

                                {
                                    howSalesforceData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                            <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                            {
                                                data.list.map((elem, index) => (
                                                    <div key={`${elem.title}-${index}`} className="mt-8">
                                                        <h3 className="4xl:text-[20px] 2xl:text-[19px] text-[20px] font-bold mt-8">{index + 1}. {elem.title}</h3>
                                                        <UnorderedList arrName={elem.desc} ulClassName={`md:pl-[24px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium`} />
                                                    </div>
                                                ))
                                            }
                                            <p
                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
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
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: GROW with SAP to Get Value Early</h2>
                <div className="mt-[29px] xl:mt-[30px]">
                    <FAQAccordion faqData={faqdata} />
                </div>
            </section>

            {/* blog carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section>
    )
}