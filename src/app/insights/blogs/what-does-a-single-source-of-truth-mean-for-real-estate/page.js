"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from '@/app/components/blogSocialIcons'


export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/what-does-a-single-source-of-truth-mean-for-real-estate-from-lead-to-lease/";
    const currUrl = useUrl()
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "From Lead to Lease: Why Real Estate Needs a Single Source of Truth | Rialtes",
        "description": "Learn how a Single Source of Truth (SSOT) unifies CRM and ERP to eliminate data silos across leasing, finance, and operations—speeding reporting, improving compliance, and enabling AI-driven decisions for property management.",
        "image": "https://www.rialtes.com/images/blog/single-source-of-truth-real-estate-lead-to-lease.webp",
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
            "@id": "https://rialtes.netlify.app/insights/blogs/what-does-a-single-source-of-truth-mean-for-real-estate/"
        },
        "datePublished": "2025-11-04",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "Single Source of Truth (SSOT) in Real Estate — FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What does ‘single source of truth’ mean in real estate operations?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It means using one centralized system that connects leasing, finance, and operational data so every team works from the same verified, real-time information instead of multiple conflicting copies."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does CRM + ERP convergence improve efficiency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "By integrating lead management, leasing, billing, and reporting, convergence eliminates duplicate data entry and manual reconciliations. Lease details flow into billing automatically, operations see occupancy and service needs instantly, and finance receives real-time payment updates."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why do property managers need a single source of truth?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Fragmented systems slow decisions, create errors, and hide insights. SSOT ensures consistent, traceable records across departments, improving tenant experience and reducing revenue leakage from missed billing or delays."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can AI help maintain a single source of truth in real estate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. AI detects inconsistencies between lease and billing data, flags duplicates, forecasts maintenance costs, and automates validation—keeping records accurate and enabling proactive decision-making."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does centralizing leasing and finance data improve reporting?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Unified data enables instant, accurate, audit-ready reporting without manual consolidation, significantly reducing compliance and month-end reporting cycles."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What makes Exelona different from other property management tools?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Exelona unifies CRM and ERP for real estate, centralizing leases, tenants, and payments; embedding AI-driven operations and predictive maintenance; integrating with platforms like Yardi or Oracle; and providing mobile-first experiences and automated, audit-ready insights."
                    }
                }
            ]
        }
    }

    const whatASingleSourceData = [
        {
            "title": "What a Single Source of Truth Actually Means in Real Estate",
            "desc": "In simple terms, a Single Source of Truth is one centralized system where every piece of operational, financial, and leasing data lives in sync. Instead of sales, accounting, and facilities management using separate tools and versions of the truth, all teams rely on the same verified, real-time data.",

            "desc2": "The work doesn’t stop at connecting databases. It’s about building trust in the numbers you see daily, whether it’s occupancy rates, rental revenue, or maintenance SLAs. Imagine your leasing agent updates a tenant record. That change automatically reflects in finance for billing, and in operations for service scheduling. Everyone works from the same record, not ten different copies of it. ",
            "desc3": "That’s pretty much the essence of SSOT: clarity, accuracy, and connectedness throughout the property lifecycle.",

        }
    ]
    const whyRealEstatedata = [
        {
            "title": "Why Real Estate Still Struggles with Data Fragmentation",
            "desc": "Despite the clear benefits, most real estate organizations still operate in silos. A 2024 Deloitte study found that over 60% of property management firms rely on more than five disconnected systems to manage daily operations.",
            "listTitle": "Here’s where the cracks usually appear:",
            "list": [
                {
                    "desc": "Legacy systems that don’t share data",
                },
                {
                    "desc": "Multiple vendor solutions for leasing, billing, and maintenance",
                },
                {
                    "desc": "Manual reconciliation of payments and contracts",
                },
                {
                    "desc": "Duplicate or outdated records across platforms",
                },


            ],
            "desc2": "Due to this, teams spend hours verifying data rather than acting on it. Finance and operations make decisions on different versions of the truth. Lease renewals are delayed. Compliance checks take weeks instead of hours. ",
            "desc3": "And the kicker, inaccurate or inconsistent data can cost property owners up to 20% of their potential revenue through missed billing, delayed collections, and poor tenant experience. Real estate doesn’t have a data problem; it has a data alignment problem."
        }
    ]


    const crmErpData = [
        {
            "title": "CRM + ERP Convergence: The Foundation of a Single Source of Truth",
            "desc": "So how do you fix it?",
            "desc1": "The real answer lies in the <a href='https://www.rialtes.com/insights/blogs/erp-crm-convergence-real-estate-leaders-guide/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>convergence of CRM and ERP systems</a> , the two biggest data engines in your operations.",
            "list": [
                {
                    "title": "CRM (Customer Relationship Management ",
                    "desc": "handles everything from lead generation and tenant onboarding to renewals and communication.",
                },
                {
                    "title": "ERP (Enterprise Resource Planning)",
                    "desc": "manages finance, billing, procurement, and reporting.",
                },

            ],
            "desc2": "When these systems operate in silos, critical information like lease terms, payment schedules, and maintenance costs gets lost or duplicated.",
            "desc3": "But when they’re integrated, they form a continuous data flow:"
        },

    ]
    const crmDataList2 = [
        {


            "list": [
                {
                    "desc": "A lead enters the CRM through a website inquiry",
                },
                {
                    "desc": "Once converted, the lease details automatically sync with ERP for financial processing.",
                },
                {
                    "desc": "The operations team gets instant visibility into occupancy status and service schedules.",
                },
                {
                    "desc": "When payments are made, data updates across systems are made in real time.",
                }
            ],
            "desc2": "A leading European property developer, for instance, integrated their CRM and ERP through a unified platform and saw a 25% drop in data errors and 30% faster month-end financial closure.",
            "desc3": "That’s the power of convergence, which means less reconciliation, more clarity."
        }
    ]
    const theBusinessCase = [
        {
            "title": "The Business Case: Why a Single Source of Truth Matters",
            "list": [
                {
                    "title": "1. Real-Time Visibility and Decision Making",
                    "desc": "With unified data, dashboards finally make sense. Property managers can see leasing pipelines, occupancy trends, and cash flow in real time. Executives don’t have to wait for end-of-month reports. They can monitor performance live and make faster, evidence-based decisions. According to Deloitte’s Real Estate Outlook, 70% of leaders report better forecasting accuracy after implementing integrated data platforms.",
                },
                {
                    "title": "2. Reduced Reconciliation Errors and Faster Operations",
                    "desc": "When leasing, billing, and finance all use the same system, manual cross-checking disappears. Payments match invoices instantly, and tenant data is consistent across the board. For example, instead of reconciling rent payments weekly, your finance team gets automated payment updates from the moment they’re processed.That not only saves hours of administrative work but also improves accuracy and compliance. That not only saves hours of administrative work but also improves accuracy and compliance."

                },
                {
                    "title": "3. Stronger Compliance and Easier Reporting",
                    "desc": "Real estate firms deal with heavy regulation, whether it’s RERA, GAAP, or internal audit standards. Having a single, connected database means every record — every lease, invoice, and payment is traceable. Audits that used to take days can be completed in hours. Compliance reports that needed multiple teams can now be auto-generated. Companies that adopted unified data platforms report up to 40% faster compliance reporting cycles."
                },
                {
                    "title": "4. Collaboration That Actually Works",
                    "desc": "Ask any property management team what slows them down, and you’ll often hear the same thing: we’re not looking at the same numbers. A single source of truth changes that. Leasing agents, accountants, and facility managers all work from the same data set. Updates happen instantly across departments. No more “who updated this file?” or “which version is final?” confusion. That cultural shift from information hoarding to information sharing is often the biggest win of all."
                }
            ],
        },

    ]

    const aDayInLife = [
        {
            "title": "A Day in the Life: From Lead to Lease in a Unified System",
            "des": "Let’s take a real-world example. ",
            "desc1": "A commercial property firm manages 80 buildings and uses separate systems for CRM, ERP, and maintenance.",
            "des2": "Here’s what their old process looks like:"
        },

    ]

    const theRoleOfAI = [
        {
            "title": "The Role of AI and Automation in Maintaining a Single Source of Truth",
            "des": "A single system is powerful, but add AI to the mix, and it becomes predictive. AI can now detect inconsistencies between lease data and billing entries before they cause downstream errors. It can forecast maintenance costs based on historical data or even flag duplicate entries.",
            "desc1": "Automation ensures data stays synchronized across every workflow — from lease approvals to rent collection. For instance, if an AI engine detects that a property’s maintenance cost exceeds its expected range, it can alert both operations and finance automatically. This not only keeps data clean but also makes decision-making proactive rather than reactive.",
            "des2": "In short, AI doesn’t just support a single source of truth; it protects it."
        },

    ]

    const fromDataChaos = [
        {
            "title": "From Data Chaos to Data Confidence",
            "des": "Here’s what we have discovered: real estate teams don’t struggle because they lack data; they struggle because their data lives everywhere. A Single Source of Truth transforms how you work, how you plan, and how you grow. It connects CRM and ERP systems, breaks down silos, and gives you something every property business needs — data confidence.",
            "desc1": "With Exelona, real estate leaders finally get a unified view from lead to lease to ledger, one version of the truth that drives accuracy, transparency, and long-term profitability. It’s time to stop managing systems and <a href='https://www.rialtes.com/contact-us/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>start managing outcomes with Rialtes</a> .",
        },

    ]
    const yourPathTitle = [
        {
            "title": "Your Path to a Unified Real Estate Ecosystem",
            "des": "Our solution, Exelona, is more than just property management software; it’s a unified CRM + ERP platform built specifically for real estate organizations that want to eliminate data silos.",
            "desc1": "Here’s how it helps build a Single Source of Truth across your operations:",
        },

    ]

    const keyElemData = [
        {
            "title": "Centralized Leasing and Finance Data",
            "desc": "Every lease, tenant, and payment record lives in one system. No duplication, no delays."
        },
        {
            "title": "AI-Driven Property Operations",
            "desc": "Predict maintenance, forecast budgets, and track SLAs with precision."
        },
        {
            "title": "Scalable Real Estate Platform Integration",
            "desc": "Connects seamlessly with your existing systems, whether it’s Yardi, Oracle, or custom ERP setups."
        }
        ,
        {
            "title": "Mobile-First Resident Experience",
            "desc": "Give your staff and tenants real-time visibility and self-service options on the go."
        },
        {
            "title": "Automated Reporting Insights",
            "desc": "Generate audit-ready financial and operational reports in minutes."
        }
    ]

    const faqs = [
        {
            "question": "What does ‘single source of truth’ mean in real estate operations?",
            "answer": "It means using one centralized system that connects all leasing, finance, and operational data so every team works from the same verified information."
        },
        {
            "question": "How does CRM + ERP convergence improve efficiency?",
            "answer": "By integrating lead management, leasing, billing, and reporting into one platform, convergence eliminates duplicate work and manual reconciliations."
        },
        {
            "question": "Why do property managers need a single source of truth?",
            "answer": "Fragmented data leads to slow decisions, errors, and poor visibility. SSOT ensures every team operates from the same up-to-date data."
        },
        {
            "question": "Can AI help maintain a single source of truth in real estate?",
            "answer": "Yes. AI can identify inconsistencies, automate data validation, and deliver predictive insights to keep records accurate and consistent."
        },
        {
            "question": "How does centralizing leasing and finance data improve reporting?",
            "answer": "Unified data allows instant, accurate reporting without manual consolidation — cutting reporting time by up to 40%."
        },
        {
            "question": "What makes Exelona different from other property management tools?",
            "answer": "Exelona unifies CRM and ERP into a single, AI-powered system designed to deliver AI-driven property operations and scalable real estate platform integration, making it the ultimate single source of truth for modern real estate firms."
        }
    ]


    return (
        <section className="min-h-screen">
            <Seo
                title="End Data Chaos: Single Source of Truth for Real Estate | Rialtes"
                description="A Single Source of Truth transforms how real estate teams work, plan, and grow. It connects CRM and ERP systems, breaks down silos, and gives you clarity."
                canonical={
                    "https://www.rialtes.com/insights/blogs/what-does-a-single-source-of-truth-mean-for-real-estate/"
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
                        src="/images/blog/single-source-of-truth-real-estate-lead-to-lease.webp"
                        alt="banner image"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/exelona-cluster-mobile-banner.webp"
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
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>04 November 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">What Does a 'Single Source of Truth' Mean for Real Estate From Lead to Lease?</h1>



                            <div className="md:mt-[50px] mt-[40px]">
                                {/* <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">What Are Digital Patient Journeys?</h2> */}
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> In property management, it’s rarely the big things that slow teams down. It’s the countless small inefficiencies, mismatched lease data, duplicate records, or time wasted verifying spreadsheets. Most real estate businesses naturally juggle multiple systems: a CRM for leads, an ERP for finance, a maintenance app, and more spreadsheets than anyone would like to admit.</p>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> This patchwork setup doesn’t just waste time. It hides insights, delays reporting, and makes collaboration harder than it needs to be. That’s where the idea of a Single Source of Truth (SSOT) act as one unified view of data across leasing, finance, and operations that keeps everyone on the same page.</p>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> We’ll break down what this really means for real estate businesses and how platforms like Exelona are helping leaders finally bring all their data and decisions together.</p>


                                <>
                                    {
                                        whatASingleSourceData.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>


                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                    />
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                    />
                                                </div>
                                            )
                                        })
                                    }

                                </>
                                <>
                                    {
                                        whyRealEstatedata.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                    <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.listTitle}</p>

                                                    <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                                        {
                                                            data.list.map((elem, id) => {
                                                                return (
                                                                    <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.desc}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                    />
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                    />
                                                </div>
                                            )
                                        })
                                    }

                                </>
                                <>
                                    {
                                        crmErpData.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <p className="mt-[22px] xl:mt-[10px] 2xl:mt-2 4xl:mt-[10px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                    <p
                                                        className="mt-[22px] xl:mt-[10px] 2xl:mt-2 4xl:mt-[10px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                                                    />
                                                    <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                                        {
                                                            data.list.map((elem, id) => {
                                                                return (
                                                                    <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"><h4 className="inline font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" >{elem.title} {ind == 0}</h4>{elem.desc}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                    />
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                    />
                                                </div>
                                            )
                                        })
                                    }

                                </>
                                <>
                                    {
                                        crmDataList2.map((data, ind) => {
                                            return (
                                                <div key={ind}>
                                                    <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                                        {
                                                            data.list.map((elem, id) => {
                                                                return (
                                                                    <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"><p className="inline font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" >{elem.title} {ind == 0}</p>{elem.desc}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>

                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                    />
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                    />
                                                </div>

                                            )
                                        })
                                    }

                                </>

                                <>
                                    {
                                        theBusinessCase.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <ul className="list-disc xl:pl-[36px] md:pl-[36px] font-medium mt-4 space-y-4">
                                                        {data.list.map((elem, id) => (
                                                            <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-none">
                                                                <h3 className="font-bold mb-1 block 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">
                                                                    {elem.title}
                                                                </h3>

                                                                <p className="leading-relaxed xl:pl-8 md:pl-8 text-gray-800 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                                    {elem.desc}

                                                                </p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )
                                        })
                                    }

                                </>
                                <>
                                    {
                                        aDayInLife.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.des }}
                                                    />
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                                                    />
                                                    <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold pb-6">{data.des2}</p>

                                                </div>
                                            )
                                        })
                                    }
                                </>


                                <div className="flex flex-col md:flex-row justify-center  border-gray-300 border-2  overflow-hidden max-w-6xl mx-auto">
                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300">
                                        <div className="h-[280px] flex flex-col items-center justify-start px-6 py-8">
                                            <p className="mb-2 4xl:text-[20px] 2xl:text-[17px]  xl:text-[17px] md:text-[16px] text-[16px]">A lead fills out </p>
                                            <p className="mb-2 4xl:text-[20px] 2xl:text-[17px]  xl:text-[17px] md:text-[16px] text-[16px]"> a form</p>
                                            <div className="absolute 4xl:top-[110px] top-[100px] 2xl:top-[110px] xl:top-[110px] left-1/2 transform -translate-x-1/2">
                                                <svg className="text-[#006FBE] h-[60px] w-[50px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            <p className="4xl:mt-[120px] 2xl:mt-[90px] md:mt-[100px] mt-[130px] xl:mt-[90px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Enters CRM</p>
                                        </div>
                                        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="xl:hidden block absolute md:hidden  bottom-[-35px] left-[145px] transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300">
                                        <div className="h-[280px] flex flex-col items-center justify-start px-6 py-8">
                                            <p className="mb-2 4xl:text-[20px]  2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Lease is approved</p>
                                            <div className="absolute 4xl:top-[115px] top-[100px] 2xl:top-[112px] xl:top-[110px] left-1/2 transform -translate-x-1/2">
                                                <svg className="text-[#006FBE] h-[60px] w-[50px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            <p className="4xl:mt-[120px] 2xl:mt-[120px] md:mt-[100px] mt-[130px] xl:mt-[120px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Details re-entered manually into ERP</p>
                                        </div>
                                        <div className="md:block hidden absolute top-1/2 xl:right-0 transform translate-x-1/2 -translate-y-1/2 z-10 right-0">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="xl:hidden block absolute md:hidden   bottom-[-35px] left-[145px] transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300">
                                        <div className="h-[280px] flex flex-col items-center justify-start px-6 py-8">
                                            <p className="mb-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Maintenance tickets logged separately</p>
                                            <div className="absolute 4xl:top-[110px] top-[100px] 2xl:top-[110px] xl:top-[110px] left-1/2 transform -translate-x-1/2">
                                                <svg className="text-[#006FBE] h-[60px] w-[50px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            <p className="4xl:mt-[90px] 2xl:mt-[95px] mt-[130px] md:mt-[80px] xl:mt-[90px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Emailed weekly to operations</p>
                                        </div>
                                        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>

                                        </div>
                                        <div className="xl:hidden block absolute  md:hidden  bottom-[-35px] left-[145px] transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-gray-300">
                                        <div className="h-[280px] flex flex-col items-center justify-center px-6 py-8">
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Finance team spends two days reconciling monthly invoices</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Now, here’s what happens when they switch to a unified SSOT platform like Exelona:</p>


                                <div className="flex flex-col md:flex-row justify-center border border-[#6DC1FD]  overflow-hidden max-w-6xl mx-auto mt-5 bg-[#EFF8FF]">
                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-b md:border-b-0 md:border-r border-[#6DC1FD]">
                                        <div className="h-[300px] flex flex-col items-center justify-start px-6 py-8">
                                            <p className="mb-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">The lead enters CRM</p>
                                            <div className="absolute 4xl:top-[120px] top-[100px] md:top-[100px] 2xl:top-[120px] xl:top-[120px] left-1/2 transform -translate-x-1/2">
                                                <svg className="text-[#006FBE] h-[60px] w-[50px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            <p className="4xl:mt-[115px] xl:mt-[120px] md:mt-[80px] mt-[100px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Automatically creates a prospect record linked to ERP</p>
                                        </div>
                                        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="xl:hidden block absolute md:hidden   bottom-[-35px] left-[145px] transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-b md:border-b-0 md:border-r border-[#6DC1FD]">
                                        <div className="h-[300px] flex flex-col items-center justify-start px-6 py-8">
                                            <p className="mb-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">When the lease is signed</p>
                                            <div className="absolute 4xl:top-[115px] top-[100px] md:mt-[10px] 2xl:top-[110px] xl:top-[115px] left-1/2 transform -translate-x-1/2">
                                                <svg className="text-[#006FBE] h-[60px] w-[50px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            <p className="4xl:mt-[85px] 2xl:mt-[100px] mt-[100px] md:mt-[100px] xl:mt-[100px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Billing and accounting update instantly</p>
                                        </div>
                                        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="xl:hidden block absolute md:hidden   bottom-[-35px] left-[145px] transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-b md:border-b-0 md:border-r border-[#6DC1FD]">
                                        <div className="h-[300px] flex flex-col items-center justify-center px-6 py-8">
                                            <p className="mb-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Any maintenance activity or SLA breach Syncs directly to both leasing and finance dashboards</p>
                                        </div>
                                        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="xl:hidden block absolute md:hidden   bottom-[-35px] left-[145px] transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-[#6DC1FD]">
                                        <div className="h-[300px] flex flex-col items-center justify-center px-6 py-8">
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Reports and KPIs update in real time</p>
                                        </div>
                                    </div>
                                </div>



                                <>
                                    {
                                        theRoleOfAI.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.des }}
                                                    />
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                                                    />
                                                    <p className="mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pb-6">{data.des2}</p>

                                                </div>
                                            )
                                        })
                                    }
                                </>
                                <>
                                    {
                                        yourPathTitle.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[15px] mt-[10px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.des }}
                                                    />
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                                                    />

                                                </div>
                                            )
                                        })
                                    }
                                </>


                                {
                                    <div className="">
                                        {keyElemData.map((data, ind) => (
                                            <div
                                                key={ind}
                                                className="relative flex flex-col md:flex-row w-full md:w-auto flex-1 border border-[#707070] bg-white
                 py-[34px] xl:py-[46px] px-[26px] md:pr-[54px] 4xl:pr-[30px] mt-24 md:mt-10 md:ml-[90px]
                 sm:w-[80%] lg:w-[80%] xl:w-auto 4xl:w-[86%] min-h-[150px]"
                                            >
                                                {/* Title box */}
                                                <h3
                                                    className="md:absolute md:flex items-center justify-center
                   max-md:mt-[-80px] sm:mt-[-70px] md:mt-0
                   md:top-1/2 md:-translate-y-1/2 md:left-[-80px]
                   bg-[#006FBE] text-white font-semibold
                   4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]
                   px-[30px] py-[22px] leading-tight
                   4xl:w-[340px] xl:w-[280px] 2xl:w-[325px] md:w-[240px] w-fit 4xl:h-[100px]"
                                                >
                                                    {data.title}
                                                </h3>

                                                {/* Description box */}
                                                <div
                                                    className="flex-grow flex items-center
                   4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]
                   font-medium max-md:mt-8 md:ml-[220px] xl:ml-[210px] 4xl:ml-[300px] 2xl:ml-[250px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                }

                                <>
                                    {
                                        fromDataChaos.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.des }}
                                                    />
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                                                    />

                                                </div>
                                            )
                                        })
                                    }
                                </>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Single Source of Truth in Real Estate</h2>
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