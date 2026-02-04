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
    const fullUrl = "https://www.rialtes.com/insights/blogs/conversational-ai-in-real-estate-scale-resident-support";
    const currUrl = useUrl()

    const mainData = [
        "Here’s something every property leader already knows but rarely says out loud: the technology stack that was meant to simplify operations has ended up complicating it.",
        "Most real estate enterprises today run on a patchwork of systems: Yardi for property management, Oracle or SAP for finance, MRI for analytics, Salesforce for CRM, and Excel for everything else. Each system excels in its lane, but together, they form a fragmented ecosystem where data duplication, integration costs, and reporting chaos are the norm. It causes delayed decision-making, inflated Opex, and teams that spend more time reconciling spreadsheets than managing properties.",
        "However, this fragmentation problem is solvable, and many forward-thinking real estate leaders are solving it through CRM + ERP convergence. By unifying customer, financial, and operational data in a single intelligent platform, enterprises are cutting system costs by up to 35%, improving visibility across departments, and freeing up teams to focus on growth instead of maintenance.",
        "This blog discusses how convergence works, what’s driving its adoption, and why platforms like <a href='https://www.rialtes.com/products/exelona-salesforce-for-real-estate-management/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Exelona unified CRM + ERP system</a> are redefining property operations for the AI-driven era.",
    ]

    const hiddenData = [
        {
            "title": "The Hidden Cost of Fragmented Systems",
            "data": [
                "Most property companies didn’t set out to build fragmented systems — it happened over time. As portfolios grew, new tools were added to solve specific problems: a leasing app here, a finance module there, an analytics dashboard on top. But soon, these isolated systems began to work against each other. Leasing data lived in one database, maintenance logs in another, and finance in a third.",
                "A KPMG study found that 7 in 10 real estate companies still rely on three or more legacy systems to run daily operations, leading to slow reporting cycles and frequent data mismatches.",
                "Teams waste hours pulling data from multiple systems to answer basic questions like:",
            ],
            "list": [
                "What’s our true occupancy rate this quarter?",
                "How many outstanding maintenance requests are still open?",
                "What’s the revenue leakage from delayed invoicing?",
            ],
            "desc": "When answers take days instead of minutes, agility suffers, and so does profitability."
        }
    ]

    const commonData = [
        {
            "title": "How Fragmentation Impacts the Resident Experience",
            "data": [
                "System silos don’t just frustrate operations teams; they ripple down to residents. Imagine a tenant who books a maintenance request on a mobile app, but it never syncs with the accounting system, delaying vendor payments. Or when lease renewals are processed in CRM, but billing still happens in a disconnected ERP.",
                "That’s where the <span>mobile-first resident experience</span> breaks. Communication gaps, billing errors, and slow response times quickly erode trust.",
            ]
        },
        {
            "title": "The Shift Toward CRM and ERP Convergence",
            "subTitle": "What Convergence Really Means",
            "data": [
                "CRM + ERP convergence means having one platform where every function, like leasing, maintenance, accounting, vendor management, and resident communication, operates on the same data foundation.",
                "No more exporting CSVs, no more duplicate entries, no more blind spots between departments. A converged system provides <span>centralized leasing and finance data</span>, letting executives see the entire property lifecycle, from lease signing to payment collection, in one dashboard. When CRM (customer-focused workflows) meets ERP (financial and operational workflows), property enterprises finally achieve the holy grail of real-time insight and efficiency.",
            ]
        }
    ]

    const whyData = [
        {
            "title": "Why It’s Happening Now",
            "desc": "Here’s why:",
            "data": [
                {
                    "title": "Cloud maturity",
                    "desc": "Real estate companies are moving away from on-prem systems like Yardi and Oracle toward modular cloud-based platforms."
                },
                {
                    "title": "AI and data analytics",
                    "desc": "The rise of AI-driven property operations allows predictive insights across systems, from cash flow forecasts to maintenance scheduling."
                },
                {
                    "title": "Cost pressures",
                    "desc": "Managing multiple licenses, vendors, and integrations is expensive. Consolidation directly reduces IT overhead."
                },
                {
                    "title": "User expectations",
                    "desc": "Both employees and residents expect seamless digital experiences and not systems that feel like they belong in 2008."
                }
            ],
            "desc2": "Across North America and Europe, some of the largest property groups are replacing 5–7 disconnected tools with one converged solution, simplifying reporting, compliance, and maintenance management.",

        }
    ]

    const painData = [
        {
            "title": "The Pain Points of Multi-System Architecture",
            "desc": "Let’s get specific.",
            "desc2": "Traditional property systems like Yardi, MRI, and Oracle all serve specific verticals, but rarely integrate deeply with each other.",
            "list": [
                {
                    "title": "Yardi",
                    "desc": "Excellent for property and accounting data, but lacks CRM depth and tenant engagement tools.",
                },
                {
                    "title": "MRI",
                    "desc": "Powerful reporting capabilities, but limited when it comes to automation or real-time synchronization.",
                },
                {
                    "title": "Oracle / SAP",
                    "desc": "Enterprise-grade financial engines, but too rigid and expensive for dynamic property workflows.",
                }
            ],
            "desc3": "This leads to a disconnected workflow where financial reconciliation drags on for weeks, maintenance tickets get buried in endless email threads, and leasing data never makes its way into financial forecasts. Each system functions on its own, but none of them work together.",
        }
    ]

    const unifiedData = [
        {
            "title": "How Unified Systems Solve These Challenges",
            "desc": "A <a href='https://www.rialtes.com/insights/blogs/smart-api-integrations-for-real-estate-2026/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>scalable real estate platform integration</a> replaces all those moving parts with a single ecosystem.",
            "desc2": "Imagine this workflow:",
            "list": [
                "A lease is approved in CRM.",
                "The ERP instantly generates recurring invoices and syncs them to accounting.",
                "Maintenance requests from residents automatically update SLA and vendor payments.",
                "Management views live P&L reports tied to occupancy rates.",
            ],
            "desc3": "That’s end-to-end visibility, and the reason real estate firms adopting convergence see:",
            "numberList": [
                {
                    "number": "40%",
                    "desc": "faster month-end closing"
                },
                {
                    "number": "30%",
                    "desc": "lower IT overhead"
                },
                {
                    "number": "25%",
                    "desc": "improvement in SLA compliance"
                }
            ],
            "desc4": "It’s not just about integration. It’s about eliminating duplication and ensuring every department operates from a shared truth.",
        }
    ]

    const roleData = [
        {
            "title": "The Role of AI and Automation in Convergence",
            "subtitle": "AI-Driven Property Operations",
            "desc": "Convergence alone isn’t enough. Without intelligence layered on top, even unified systems can become static. That’s where <a href='https://www.rialtes.com/insights/blogs/ai-in-real-estate-reduce-opex-with-predictive-maintenance/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>AI-driven property operations</a> up the ante",
            "desc2": "AI algorithms continuously scan data across CRM and ERP modules to:",
            "list": [
                "Flag inconsistencies in billing or lease data.",
                "Predict cash flow dips or maintenance surges.",
                "Optimize maintenance scheduling based on usage and cost trends.",
            ],
            "desc3": "One large US-based REIT saw its predictive maintenance accuracy improve by 25% after integrating AI insights into its ERP system , directly cutting downtime and repair costs.",
        }
    ]

    const payoffData = [
        {
            "title": "Operational Transparency and Decision Confidence",
            "desc": "Executives finally get a unified dashboard that answers every critical question:",
            "list": [
                "What’s our real-time occupancy rate?",
                "Which properties are underperforming on rent collection?",
                "Where are maintenance costs trending highest?",
            ],
            "desc2": "With <a href='https://www.rialtes.com/insights/blogs/what-does-a-single-source-of-truth-mean-for-real-estate/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>centralized leasing and finance data</a>, decision-makers no longer rely on week-old reports or manual reconciliations."
        },
        {
            "title": "Cost Efficiency and IT Simplification",
            "desc": "Maintaining multiple licenses and integrations costs both money and sanity.Unified systems mean fewer vendors, less middleware, and easier scalability.According to PwC, organizations that streamline core systems report 15–25% IT cost savings within the first year, not counting the efficiency gains from better workflows.",
        }
    ]
    const buildData = [
        {
            "title": "How to Build a Unified CRM + ERP Strategy",
            "list": [
                {
                    "title": "Map Your Current Systems",
                    "desc": "Start by auditing your existing tech stack. Identify redundancies, integration gaps, and manual processes slowing down your teams."
                },
                {
                    "title": "Prioritize Critical Integration Points",
                    "desc": "Focus on areas with the most impact, leasing + finance, maintenance + billing, and resident support + CRM."
                },
                {
                    "title": "Align Teams Around Data",
                    "desc": "Ensure every department works from the same data definitions and metrics. Data alignment is the foundation of convergence success."
                },
                {
                    "title": "Choose the Right Platform Partner",
                    "desc": "Look for a solution that offers:",
                    "lists": [
                        "AI - driven automation",
                        "Cloud scalability",
                        "Integration with legacy tools",
                        "A user - friendly mobile experience",
                    ]
                }
            ]
        }
    ]
    const oneUnifiedData = [
        "When operations are unified, employees spend less time switching between tools and more time solving problems. Residents benefit from faster response times, unified portals, and transparent billing, all powered by a mobile-first resident experience.",
        "A connected ecosystem doesn’t just optimize operations; it builds trust. And in property management, trust drives renewals. Exelona by Rialtes is property management tool, a connected ecosystem designed to eliminate silos, unify data, and accelerate decision-making.",
        "This means lower costs, faster operations, and a more connected resident ecosystem. Exelona doesn’t just consolidate systems , it redefines how real estate enterprises think about integration, intelligence, and growth. Ready to take your real estate business to the next level? Let’s build smarter systems, automate what matters, and drive growth together with Rialtes, your trusted partner in real estate transformation."
    ]
    const faqs = [
        {
            "question": "What is CRM and ERP convergence in real estate?",
            "answer": "It’s the integration of customer, financial, and operational workflows into one platform, allowing property teams to manage leasing, billing, and maintenance without juggling multiple tools."
        },
        {
            "question": "How can I consolidate my systems like Yardi or MRI?",
            "answer": "You can integrate or migrate them into a unified solution like Exelona, which connects data across legacy and modern systems through scalable APIs."
        },
        {
            "question": "What are the biggest benefits of CRM + ERP convergence?",
            "answer": "Convergence improves data accuracy, reduces costs, and provides real-time operational visibility. It also enhances tenant satisfaction through faster service and transparent billing."
        },
        {
            "question": "How does AI help unify property management systems?",
            "answer": "AI cleans, connects, and analyzes data across CRM and ERP modules, helping predict failures, automate billing, and forecast budgets with precision."
        },
        {
            "question": "What is the ROI of consolidating property systems?",
            "answer": "Most enterprises report 20–35% cost savings in IT and operations, plus measurable improvements in SLA compliance and decision-making speed."
        },
        {
            "question": "Why is Exelona the right platform for convergence?",
            "answer": "Because it’s purpose-built for real estate. Exelona unified CRM + ERP system merges automation, analytics, and scalability—everything property enterprises need to grow efficiently."
        }
    ]

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "CRM + ERP Convergence: How Real Estate Leaders Break System Silos and Cut Costs",
        "description": "Discover how real estate leaders are breaking system silos and cutting costs through CRM + ERP convergence. Learn how unified systems improve visibility, reduce IT overhead, and transform property management with AI-driven operations.",
        "image": "https://www.rialtes.com/images/blog/crm-erp-convergence-for-real-estate.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/erp-crm-convergence-real-estate-leaders-guide/"
        },
        "datePublished": "2025-11-03",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "CRM + ERP Convergence in Real Estate FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is CRM and ERP convergence in real estate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "CRM and ERP convergence integrates customer, financial, and operational workflows into a single platform, enabling property teams to manage leasing, billing, and maintenance without juggling multiple systems."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can I consolidate my systems like Yardi or MRI?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can integrate or migrate systems like Yardi, MRI, or Oracle into a unified solution such as Exelona, which connects data across legacy and modern tools using scalable APIs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the biggest benefits of CRM + ERP convergence?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Convergence improves data accuracy, reduces operational costs, and provides real-time visibility. It enhances tenant satisfaction with faster service, unified billing, and transparent communication."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does AI help unify property management systems?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI cleans, connects, and analyzes data across CRM and ERP modules, enabling predictive maintenance, automated billing, and precise budgeting through real-time insights."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the ROI of consolidating property systems?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Enterprises typically achieve 20–35% savings in IT and operations costs, along with measurable gains in SLA compliance, faster reporting, and improved decision-making."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is Exelona the right platform for convergence?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Exelona is purpose-built for real estate enterprises. It unifies CRM and ERP capabilities with automation, analytics, and scalability—helping property leaders eliminate silos and accelerate growth."
                    }
                }
            ]
        }
    }

    return (
        <section className="min-h-screen">
            <Seo
                title="Unified ERP & CRM for Real Estate: Cut Costs by 35% | Rialtes"
                description="Unified ERP & CRM platforms help real estate enterprises cut system costs by up to 35% while improving cross-department visibility and efficiency."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/erp-crm-convergence-real-estate-leaders-guide"
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
                        src="/images/blog/crm-erp-convergence-for-real-estate.webp"
                        alt="Conceptual illustration of a smart city connected through cloud computing and data networks"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/crm-erp-convergence-for-real-estate-mobile.webp"
                        alt="Conceptual illustration of a smart city connected through cloud computing and data networks"
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Exelona</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>03 November 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">CRM + ERP Convergence: How Real Estate Leaders Break System Silos and Cut Costs</h1>

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


                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    hiddenData.map((elem, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{elem.title}</h2>
                                                <UnorderedList arrName={elem.data} ulClassName="space-y-4 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                                <UnorderedList arrName={elem.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-4 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />

                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <>
                                {
                                    commonData.map((elem, ind) => {
                                        return (
                                            <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{elem.title}</h2>
                                                {
                                                    elem.subTitle &&
                                                    <h3 className="pb-3 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold leading-tight mt-5"> {elem.subTitle}</h3>
                                                }
                                                <UnorderedList arrName={elem.data} ulClassName={`space-y-4  ${ind == 0 ? "mt-5" : "mt-2"} space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium`} />
                                            </div>
                                        )
                                    })
                                }
                            </>

                            {/* why section */}
                            {
                                whyData.map((data, ind) => {
                                    return (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <p
                                                className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />

                                            {
                                                data.data.map((data, ind) => {
                                                    return (
                                                        <div className="md:flex mt-24 md:mt-10 py-[34px] xl:py-[36px] px-[26px] md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative md:ml-[90px] sm:w-[80%] md:w-auto xl:w-[1000px] 4xl:w-[1200px]" key={ind}>
                                                            <h3 className="md:absolute max-md:mt-[-80px] sm:mt-[-70px] md:mt-0 md:top-[50%] md:translate-y-[-50%] 4xl:w-[350px] xl:w-[280px] md:w-[240px] w-fit md:left-[-80px] bg-[#006FBE] text-white font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] px-[40px] py-[22px] leading-tight">{data.title}</h3>
                                                            <div className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[180px] xl:ml-[210px] 4xl:ml-[300px]" dangerouslySetInnerHTML={{ __html: data.desc }} />
                                                        </div>

                                                    )
                                                })
                                            }
                                            <p
                                                className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                        </div>
                                    )
                                })
                            }

                            {/* pain points */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    painData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />

                                                <div className="grid lg:grid-cols-3 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] lg:mt-[48px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full 4xl:w-[1300px]">
                                                    {
                                                        data.list.map((data, ind) => {
                                                            return (
                                                                <div key={ind} className={`mt-5 ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-lg:border-b max-lg:pb-5 max-lg:last:border-0" : ""} ${ind == 0 ? "lg:pr-[40px] 4xl:pr-0 md:border-b lg:border-0 border-[#707070] max-md:border-b max-lg:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                                    <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{data.title}</h3>
                                                                    <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[84%]">{data.desc}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p
                                                    className={`mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />

                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* unified section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    unifiedData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-4 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />
                                                <div className="grid md:grid-cols-3 gap-y-[40px] sm:grid-cols-2 grid-cols-1 mt-[28px] lg:mt-[48px] md:gap-x-[60px]">
                                                    {
                                                        data.numberList.map((elem, ind) => {
                                                            return (
                                                                <div key={ind}>
                                                                    <h3 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight font-bold text-[#006FBE]">{elem.number}{" "}
                                                                        <p
                                                                            className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[65%] font-semibold text-black`}
                                                                            dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                                        />
                                                                    </h3>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>

                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc4 }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* role section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    roleData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                                <h3 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight font-semibold mt-5">{data.subtitle}</h3>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-4 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                                <p
                                                    className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* payoff section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">The Payoff: What Converged Systems Deliver</h2>
                                {
                                    payoffData.map((data, ind) => {
                                        return (
                                            <div className="mt-[22px] xl:mt-[30px]" key={ind}>
                                                <h3 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight font-bold mt-5">{data.title}</h3>
                                                <p
                                                    className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />

                                                {
                                                    data.list && <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-4 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                                }
                                                {
                                                    data.desc2 && <p
                                                        className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                    />
                                                }

                                            </div>
                                        )
                                    })
                                }

                            </div>

                            {/* build section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    buildData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <div className="grid xl:grid-cols-4 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] md:mt-[48px] gap-y-[40px] md:gap-x-[60px] lg:gap-[40px] sm:w-[80%] md:w-full xl:w-[1100px] 4xl:w-[1200px]">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <div key={id}>
                                                                    <span className="bg-[#0C8AED] w-12 h-12 flex items-center justify-center rounded-full text-white font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                                        {id + 1}
                                                                    </span>
                                                                    <h3 className="mt-[30px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.title}</h3>
                                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]">{elem.desc}</p>
                                                                    {
                                                                        elem.lists && <UnorderedList arrName={elem.lists} ulClassName="pl-[26px] space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />

                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* one unified section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">One Unified CRM + ERP System for Property Leaders</h2>
                                {
                                    oneUnifiedData.map((data, ind) => {
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

                        </div>
                    </div>
                </div>
            </section>
            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Build a Unified CRM + ERP Strategy</h2>
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