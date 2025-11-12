"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from '@/app/components/blogSocialIcons'
import Link from "next/link";
import UnorderedList from "@/app/components/unorderedList";

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/ai-in-real-estate-reduce-opex-with-predictive-maintenance/";
    const currUrl = useUrl()

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "AI in Property Operations: Cut Downtime 30% and Reduce Opex with Predictive Maintenance",
        "description": "AI-driven predictive maintenance transforms property operations, cutting downtime by 30% and reducing Opex through proactive interventions.",
        "image": "https://www.rialtes.com/images/blogs/ai-property-operations-predictive-maintenance.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/ai-in-real-estate-reduce-opex-with-predictive-maintenance/"
        },
        "datePublished": "2025-10-13",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "AI in Property Operations FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How can AI reduce maintenance downtime in property management?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI continuously analyzes equipment data to predict potential failures before they occur. Maintenance teams can act proactively, reducing downtime and avoiding costly emergency repairs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How to reduce time spent on corrective maintenance?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Strategies include improving accessibility, interchangeability, managing redundant systems, accounting for human limitations, and enhancing fault recognition and isolation efficiency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is predictive maintenance for property operations?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Predictive maintenance uses AI and IoT sensors to monitor equipment health in real time, forecasting when assets need servicing to improve uptime and extend asset lifespan."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does AI optimize technician assignment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI evaluates technician skills, availability, and location to automatically assign the best person for each job, reducing response times and enhancing efficiency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the benefits of using AI in property operations?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Benefits include up to 30% less downtime, lower operational costs, faster service responses, and improved tenant satisfaction through real-time insights and automation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does Exelona help with predictive maintenance and Opex reduction?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Exelona integrates AI, IoT, and workflow automation to monitor assets, predict issues, and dispatch technicians efficiently, helping property managers reduce Opex, extend asset life, and improve portfolio performance."
                    }
                }
            ]
        }
    }
    const blogMainData = [
        "Here’s the truth about property operations: they have always been a balancing act between cost, comfort, and continuity. The challenge is that most maintenance models are still reactive. Teams fix what breaks, scramble to respond to tenant complaints, and watch operating expenses climb year after year.",
        "In an industry where every minute of equipment downtime hits profitability and reputation, the need for a smarter approach is crystal clear. That’s where artificial intelligence (AI) steps in — transforming how buildings think, predict, and act.",
        "AI isn’t just automating tasks; it’s reshaping property management from the ground up. For property owners and operators, AI-driven predictive maintenance is a game-changer, cutting downtime by as much as 30% and reducing Opex through proactive interventions.",
        "Instead of reacting to issues after they occur, predictive systems powered by AI continuously analyze data from sensors, HVAC systems, lifts, and meters to flag potential issues before they become costly failures. This translates to fewer surprises, lower costs, and a smoother, <span>next-gen resident experience in real estate</span>."
    ]
    const howAiData = [
        "IoT sensors collect performance data from equipment (temperature, vibration, pressure, usage frequency).",
        "AI models continuously analyze these data streams to detect early warning signs of wear or inefficiency.",
        "When a deviation is detected, the system triggers an automated work order or maintenance alert."
    ]
    const howAiData2 = [
        {
            "title": "Before AI",
            "list": [
                "Maintenance teams reacted to tenant complaints.",
                "Unplanned equipment failures disrupted operations.",
                "Repairs were costlier due to emergency labor and parts."
            ]
        },
        {
            "title": "After AI",
            "list": [
                "Predictive alerts identified HVAC issues two days before failure.",
                "Technicians received automated notifications with clear action plans.",
                "Downtime dropped sharply, and maintenance became proactive, not reactive."
            ]
        }
    ]
    const keyTechData = [
        {
            "title": "AI & Machine Learning",
            "desc": "Identify patterns of failure before they occur."
        },
        {
            "title": "IoT Sensors",
            "desc": "Collect real-time equipment data for constant monitoring."
        },
        {
            "title": "Data Analytics Dashboards",
            "desc": "Turn complex data into visual insights."
        },
        {
            "title": "Cloud Integration",
            "desc": "Centralize asset data across locations for unified oversight."
        }
    ]
    const predictionData = [
        {
            "title": "Energy Consumption",
            "desc": "Detect efficiency drops signaling potential failure."
        },
        {
            "title": "Temperature and Vibration Metrics",
            "desc": "Identify abnormal performance in motors or compressors."
        },
        {
            "title": "HVAC Telemetry",
            "desc": "Monitor airflow and filter conditions."
        },
        {
            "title": "Usage Frequency",
            "desc": "Track wear and tear across high-traffic areas."
        }
    ]
    const howAiImprovesData = [
        {
            "title": "How AI Improves the Entire Property Lifecycle",
            "desc": "Predictive maintenance is only one part of what AI can do for property operations. Once data begins to flow across assets, systems, and tenants, it opens the door to full lifecycle intelligence.",
            "listDataTitle": "AI-Driven Optimization Across Operations",
            "list": [
                {
                    "title": "Energy Management",
                    "desc": "Predict peak load times and optimize HVAC and lighting systems for energy savings."
                },
                {
                    "title": "Budget Forecasting",
                    "desc": "Use predictive insights to estimate future maintenance costs and CapEx needs."
                },
                {
                    "title": "Sustainability Tracking",
                    "desc": "Measure energy efficiency and environmental performance in real time."
                },
                {
                    "title": "Tenant Experience",
                    "desc": "Use sentiment data and <a href='https://www.rialtes.com/insights/blogs/conversational-ai-in-real-estate-scale-resident-support/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>conversational AI for resident support</a> to personalize communication and improve satisfaction."
                }
            ],
            "desc2": "In short, AI converts reactive property operations into strategic, data-driven ecosystems. It gives asset managers the visibility they need to make informed decisions about maintenance, performance, investment, and sustainability.",
        }
    ]
    const optimizingData = [
        {
            "title": "Optimizing Technician Assignment with AI and Smart Scheduling",
            "desc": "Even with predictive alerts, maintenance execution matters. Once an issue is flagged, assigning the right technician quickly is what keeps operations running smoothly.",
            "desc2": "AI brings intelligence not only to diagnostics but also to workforce management.",
            "commonData": [
                {
                    "listTitle": "Here’s what that looks like:",
                    "list": [
                        "The system evaluates technician skill sets, availability, and location.",
                        "It then prioritizes and assigns work orders automatically, minimizing idle time and travel.",
                        "If multiple issues occur, the AI schedules tasks based on urgency and impact."
                    ],
                    "desc": "This optimization can reduce response times by up to 25% and significantly improve SLA compliance."
                },
                {
                    "listTitle": "Example Workflow: Smart Dispatch",
                    "list": [
                        "An HVAC sensor detects an airflow anomaly and sends an alert to the platform.",
                        "AI identifies the nearest available technician with the required expertise.",
                        "A work order is automatically generated and synced to the technician’s mobile device.",
                        "The technician completes the job, uploads notes, and closes the ticket.",
                        "The system updates status in real time — giving management full visibility and <a href='https://www.rialtes.com/insights/blogs/tracking-service-level-agreements-without-losing-mind/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>SLA tracking and billing automation in real estate</a>"
                    ],
                    "desc": "This level of coordination helps large property portfolios save time, reduce fuel costs, and ensure that no alert is missed."
                }
            ]
        }
    ]
    const fromMaintenanceData = [
        {
            "title": "From Maintenance Logs to Strategic Decisions",
            "desc": "By analyzing long-term maintenance trends, AI provides insights such as:",
            "list": [
                "Which equipment needs replacement next quarter?",
                "Where to focus energy efficiency investments.",
                "How to extend asset life through early intervention."
            ],
            "desc2": "This isn’t maintenance management — it’s <span>portfolio intelligence</span>, and it’s redefining how property enterprises scale efficiently."
        }
    ]
    const exelonaEdgeData = [
        {
            "title": "The Exelona Edge – Smarter Property Operations Powered by AI",
            "desc": "Let’s bring this closer to home.",
            "desc2": "<a href='https://www.rialtes.com/products/exelona-salesforce-for-real-estate-management/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Exelona</a>, Rialtes’ real estate management platform, unifies every step of the property lifecycle — from lead generation to financial closeout. Built for property managers, developers, and portfolio owners, Exelona delivers AI-driven automation, mobile-first experiences, and CRM + ERP convergence for property management, all from a single platform.",
            "listTitle": "What Makes Exelona Different",
            "list": [
                {
                    "title": "100% Mobile-Enabled",
                    "desc": "Manage leasing, maintenance, and finance on any device."
                },
                {
                    "title": "Agentic AI + Conversational Interfaces",
                    "desc": "AI that automates, prioritizes, and communicates through conversational AI for resident support."
                },
                {
                    "title": "CRM + ERP, Unified",
                    "desc": "One system for marketing, operations, leasing, and accounting."
                },
                {
                    "title": "OPENAPI Architecture",
                    "desc": "Easily integrates with SAP, Yardi, Oracle, Salesforce, and more."
                }
            ],
            "desc3": "Exelona doesn’t just digitize property operations but redefines how property businesses scale, combining intelligence, automation, and insight into one connected experience."
        }
    ]
    const preparingData = [
        {
            "title": "Start Small, Think Big",
            "desc": "Begin with one building or a single asset category to validate ROI."
        },
        {
            "title": "Connect Your Data",
            "desc": "Integrate IoT devices and existing building systems into a unified platform like Exelona."
        },
        {
            "title": "Train Your Teams",
            "desc": "Equip staff to interpret AI insights and act confidently on recommendations."
        },
        {
            "title": "Scale Gradually",
            "desc": "Expand predictive capabilities across your portfolio as data maturity grows."
        }
    ]
    const keyElemData = [
        {
            "title": "Predictive Maintenance = Proactive Efficiency",
            "desc": "AI cuts downtime by up to 30% and reduces operational costs."
        },
        {
            "title": "Data-Driven Decision-Making",
            "desc": "AI enables better forecasting, budgeting, and asset management."
        },
        {
            "title": "Smarter Workforce Allocation",
            "desc": "Intelligent technician routing improves response times and tenant satisfaction."
        },
        {
            "title": "Exelona Advantage",
            "desc": "The all-in-one AI-powered property platform built to reduce Opex and optimize performance through <span>SLA tracking and billing automation in real estate</span>."
        }
    ]
    const faqs = [
        {
            "question": "How can AI reduce maintenance downtime in property management?",
            "answer": "AI continuously analyzes equipment data to predict potential failures before they occur. This allows maintenance teams to act proactively, reducing downtime and avoiding costly emergency repairs."
        },
        {
            "question": "How to reduce time spent on corrective maintenance?",
            "answer": "Here are some strategies to reduce corrective maintenance time and allow your plant to operate at the highest efficiency it can:\n\n1. Improve accessibility.\n\n2. Improve interchangeability.\n\n3. Manage redundant systems.\n\n4. Account for human limitations.\n\n5. Enhance efficiency in fault recognition, location, and isolation."
        },
        {
            "question": "What is predictive maintenance for property operations?",
            "answer": "Predictive maintenance uses AI and IoT sensors to monitor equipment health in real time. It forecasts when assets need servicing, improving uptime and extending asset lifespan."
        },
        {
            "question": "How does AI optimize technician assignment?",
            "answer": "AI evaluates technician skills, availability, and proximity to automatically assign the best person for each job. This reduces response times, minimizes travel, and enhances efficiency."
        },
        {
            "question": "What are the benefits of using AI in property operations?",
            "answer": "Enterprises experience up to 30% less downtime, lower operational costs, faster service responses, and improved tenant satisfaction through real-time insights and automation."
        },
        {
            "question": "How does Exelona help with predictive maintenance and Opex reduction?",
            "answer": "Exelona integrates AI, IoT, and workflow automation to monitor assets, predict issues, and dispatch technicians efficiently — helping property managers reduce Opex, extend asset life, and improve portfolio performance."
        }
    ]

    return (
        <section className="min-h-screen">
            <Seo
                title="How AI in Real Estate Powers Predictive Maintenance | Rialtes"
                description="AI-driven predictive maintenance is a game-changer, cutting downtime by as much as 30% and reducing Opex through proactive interventions. Discover how today."
                canonical={
                    "https://www.rialtes.com/insights/blogs/ai-in-real-estate-reduce-opex-with-predictive-maintenance/"
                }
            />

            <Script
                id="schema-copilots"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/ai-property-operations-predictive-maintenance.webp"
                        alt="banner image"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/ai-property-operations-predictive-maintenance-mobile.webp"
                        alt="banner image"
                        priority
                        height={0}
                        width={0}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>


            <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
                <div className="grid lg:grid-cols-12 grid-cols-12">
                    <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11 col-span-12">

                        {/* date and icons */}
                        <div className="sm:flex justify-between">
                            <div>
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Exelona</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>13 October 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">AI in Property Operations: Cut Downtime 30% and Reduce Opex with Predictive Maintenance</h1>
                            <div className="xl:mt-[38px] mt-[33px]">
                                {
                                    blogMainData.map((data, ind) => {
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

                            {/* how ai section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">How AI Reduces Maintenance Downtime in Property Operations</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">One of the most practical uses of AI in property management is its ability to reduce downtime. Think of it as having a digital operations manager watching every asset 24/7 — alerting you before something goes wrong.</p>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Here’s how it works in practice:</p>

                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:mt-[70px] mt-[30px] gap-[20px] sm:w-[80%] lg:w-full">
                                    {
                                        howAiData.map((data, ind) => {
                                            return (
                                                <div key={ind} className="border border-[#707070] lg:p-[36px] p-[24px]">
                                                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <p className="mt-[24px] xl:mt-[50px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">This process eliminates the need for manual monitoring and guesswork. Instead, you get real-time visibility into asset health across your portfolio.</p>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">A commercial real estate firm that implemented AI-driven predictive maintenance across 50 buildings saw HVAC downtime drop by 30% within six months, while annual maintenance costs fell by nearly 20%. That’s not theory. That’s the power of data-driven operations in action.</p>
                                <div className="grid md:grid-cols-2 grid-cols-1 xl:mt-[60px] mt-[30px] gap-[60px] sm:w-[90%] 4xl:w-[80%]">
                                    {
                                        howAiData2.map((data, ind) => {
                                            return (

                                                <div key={ind}>
                                                    <h3 className="mb-2 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] px-[22px] py-[12px] leading-tight bg-[#006FBE] text-white">{data.title}</h3>
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] py-4 border-b last:border-0 border-[#707070]" key={id}>{elem}</p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {/* predective maintenance section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Predictive Maintenance for Property Management: What It Looks Like in Action</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Predictive maintenance sounds futuristic, but it’s already a cornerstone of modern property management platforms.</p>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">The system learns from multiple data points — historical maintenance logs, energy consumption trends, and sensor telemetry to forecast when an asset is likely to fail. These insights feed into maintenance scheduling, budget allocation, and asset lifecycle planning.</p>

                                <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">Key Technologies Driving Predictive Maintenance</h3>

                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-[28px] lg:mt-[48px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full 4xl:w-[1300px]">
                                    {
                                        keyTechData.map((data, ind) => {
                                            return (
                                                <div key={ind} className={`mt-5 ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-md:border-b max-md:pb-5" : ""} ${ind == 3 ? "lg:pl-[32px] border-[#707070] lg:border-l" : ""} ${ind == 0 ? "lg:pr-[40px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-md:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                    <h4 className="4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] font-bold text-[#006FBE]">{data.title}</h4>
                                                    <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">By merging these technologies, property managers can monitor dozens or even hundreds of assets without needing manual inspection — a foundational part of <a href='https://www.rialtes.com/insights/blogs/erp-crm-convergence-real-estate-leaders-guide/' className='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>CRM + ERP convergence for property management</a>.</p>

                                <h3 className="mt-10 lg:mt-[80px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">Data That Powers Prediction</h3>
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-[28px] lg:mt-[48px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full 4xl:w-[1200px]">
                                    {
                                        predictionData.map((data, ind) => {
                                            return (
                                                <div key={ind} className={`mt-5 ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-md:border-b max-md:pb-5" : ""} ${ind == 3 ? "lg:pl-[32px] border-[#707070] lg:border-l" : ""} ${ind == 0 ? "lg:pr-[40px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-md:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                    <h4 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold text-[#006FBE]">{data.title}</h4>
                                                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">When combined, these signals create a predictive picture of asset health, allowing teams to act before systems fail.</p>
                            </div>
                            {/* optmizing section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    optimizingData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2}</p>
                                                {
                                                    data.commonData.map((elem, id) => {

                                                        return (
                                                            <div key={id}>
                                                                <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.listTitle}</h3>
                                                                <UnorderedList arrName={elem.list} ulClassName={`mt-5 ${id == 1 ? "list-decimal" : "list-disc"} 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] font-medium space-y-4`} />
                                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.desc}</p>

                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* how ai improves section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    howAiImprovesData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{data.listDataTitle}</h3>
                                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] 4xl:w-[1400px] sm:w-[80%] md:w-full">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <div className="4xl:p-[30px] p-[22px] border border-[#707070]" key={id}>
                                                                    <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070]">{elem.title}</h3>
                                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: elem.desc }} />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>

                                                <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2}</p>

                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* from maintenance section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    fromMaintenanceData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                <UnorderedList arrName={data.list} ulClassName={`mt-5 list-disc 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[38px] font-medium space-y-3`} />
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: data.desc2 }} />
                                            </div>
                                        )
                                    }
                                    )
                                }
                            </div>

                            {/* exelona section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    exelonaEdgeData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: data.desc2 }} />
                                                <h3 className="mt-8 font-bold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">{data.listTitle}</h3>

                                                <ul className="list-disc pl-[36px] font-medium mt-5 space-y-2">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"><h4 className="inline font-bold">{elem.title}</h4>
                                                                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.desc}</p>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: data.desc3 }} />

                                            </div>
                                        )
                                    }
                                    )
                                }
                            </div>

                            {/* preparing section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Preparing for an AI-Driven Property Future</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">AI is quickly becoming the standard for property operations, not the exception. From multifamily complexes to commercial buildings, organizations that integrate predictive analytics today are setting themselves up for resilience tomorrow.</p>
                                <h3 className="mt-8 font-bold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">Here’s How to Get Started</h3>
                                <ul className="list-disc pl-[36px] font-medium mt-[20px] xl:mt-[30px] space-y-2">
                                    {
                                        preparingData.map((elem, id) => {
                                            return (
                                                <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"><h4 className="inline font-bold">{elem.title} : </h4>{elem.desc}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <p className="mt-[32px] xl:mt-[60px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">By taking this structured approach, you’ll build not just smarter maintenance workflows but a property management strategy that continuously learns, adapts, and improves.</p>
                            </div>


                            {/* key section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Key Takeaways</h2>
                                {
                                    keyElemData.map((data, ind) => {
                                        return (
                                            <div
                                                className={`md:flex mt-24 md:mt-10 py-[34px] px-[26px] 
                                                           md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative 
                                                           md:ml-[90px] sm:w-[86%] md:w-auto lg:w-[80%] xl:w-[110%] 4xl:w-[86%]  ${ind == 3 ? "md:py-8 lg:py-8 xl:py-[20px] 2xl:py-8" : "md:py-[46px] lg:py-[46px]"}`}
                                                key={ind}>
                                                <h3
                                                    className={`md:absolute md:flex items-center
                                                                max-md:mt-[-80px] sm:mt-[-70px] md:mt-0
                                                                md:top-1/2 md:-translate-y-1/2 md:left-[-80px]
                                                                bg-[#006FBE] text-white font-semibold
                                                                4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]
                                                                px-[30px] py-[22px] leading-tight
                                                                4xl:w-[380px] xl:w-[320px] md:w-[320px] w-fit md:h-[100px]`}>
                                                    {data.title}
                                                </h3>

                                                <div
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]
                                                                font-medium my-auto max-md:mt-8
                                                                md:ml-[250px] lg:ml-[250px] xl:ml-[250px] 2xl:ml-[270px] 4xl:ml-[320px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>
                                        )
                                    })
                                }

                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Whether you manage 100 units or 100,000, Exelona gives you a flexible, intelligent, and secure platform to run your real estate enterprise. Ready to Transform Your Real Estate Business? Let’s build it, automate it, and grow it with Rialtes, your trusted partner in real estate transformation.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Reduce Opex with Predictive Maintenance</h2>
                <div className="mt-[29px] xl:mt-[30px]">
                    <FAQAccordion faqData={faqs} />
                </div>
            </section>

            {/* blog carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section>
    )
}

