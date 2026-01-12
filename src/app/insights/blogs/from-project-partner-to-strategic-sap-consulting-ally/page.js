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
        "Enterprise SAP programs rarely end with one deployment. Once the core landscape is live, the real journey begins: expansion across business units, automation waves, analytics maturity, integration landscapes, and continuous improvement.",
        "Here’s the thing: organizations don’t scale SAP relationships with vendors who just deliver tasks. They scale with partners who show ownership, governance discipline, and the ability to think beyond the current scope. A   <a href='https://www.linkedin.com/pulse/how-enterprises-evaluate-choose-sap-consulting-citof/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>SAP consulting long-term partnership <a/>  is earned through predictability, accountability, and shared transformation outcomes.",
    ]


    const whyTrustData = [
        {
            "title": "What Enterprises Expect When Scaling SAP Consulting Partnerships",
            "desc": [
                "Once the foundation is proven, enterprises evaluate if the partner can operate at scale. Expectations shift from delivery metrics to strategic enablement.",
            ],
            "title2": "The Maturity Curve of an SAP Consulting Partnership",
            "desc2": "Most partners stop at stage 1 or 2. Enterprises scale relationships only when partners step into ownership at stages 3 and 4."
        }

    ]
    const whyEnterpriseData = [
        {
            "title": "Why Enterprises Choose Rialtes for Long-Term SAP Partnerships",
            "desc": [
                "Rialtes works beyond implementation milestones. We step in as partners who co-own business outcomes, from architecture decisions to automation pipelines. Our teams bring governance discipline, structured delivery models, and transparency in risk communication that enterprises rely on while scaling.",
                "As organizations grow across regions, functions, and digital priorities, Rialtes becomes the continuity thread, ensuring knowledge compounding, faster rollouts, stable operational governance, and sustained transformation value.",
                "For enterprises seeking  trusted SAP consulting relationships   built on maturity, accountability, and long-term impact, Rialtes evolves from project partner to strategic ally, accelerating transformation over years, not months"
            ],
        }

    ]
    const rows = [
        {
            stage: "1. Project Vendor",
            focus: "Scope-based delivery",
            expectation: "Technical capability",
            scale: "Timelines, quality, UAT readiness",
            bg: "bg-[#E2FFE5]",
        },
        {
            stage: "2. Preferred Partner",
            focus: "Multi-stream enablement",
            expectation: "Dependency reduction",
            scale: "Documentation, governance, playbooks",
            bg: "bg-[#FFF2E2]",
        },
        {
            stage: "3. Transformation Ally",
            focus: "Co-owning outcomes",
            expectation: "Innovation + business alignment",
            scale: "CoE enablement, roadmap planning",
            bg: "bg-[#FAD7ED]",
        },
        {
            stage: "4. Strategic SAP Consulting Long-Term Partnership",
            focus: "Continuous improvement",
            expectation: "Long-horizon strategy",
            scale: "Value tracking, automation agenda",
            bg: "bg-[#DDE1FD]",
        },
    ];

    const whyErpData = [
        {
            "title": "How Enterprises Expand SAP Engagements Beyond the First Deployment",
            "desc": [
                "Long-term growth doesn’t happen by default; it requires continuity, relevant use cases, and predictable execution.",
            ],
            "title2": "Pathways Through Which SAP Relationships Expand",
            "list": [
                {
                    "title": "New geographies & business units",
                    "desc": "Rollouts become faster when the partner already understands DNA, data, and org context."
                },
                {
                    "title": "Feature enablement & automation waves",
                    "desc": "AI, workflow automation, compliance modules, mobile extensions."
                },
                {
                    "title": "Integration with adjacent systems",
                    "desc": "SAP + Salesforce, SAP + MES, SAP + Data Cloud, value compounds when connected."
                },
                {
                    "title": "Managed support & optimization",
                    "desc": "Stabilization, adoption metrics, TCO reduction, and continuous functional enhancements."
                },
                {
                    "title": "Analytics and insight-driven transformation",
                    "desc": "SAP Analytics Cloud, Data Cloud integration, predictive planning.."
                }
            ],
            "desc2": "A <a href='https://www.rialtes.com/insights/blogs/what-makes-sap-consulting-companies-trustworthy/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'> trusted SAP consulting relationship</a> grows like a flywheel; each win fuels the next."
        }
    ]



    const howSalesforceData = [
        {
            "title": "Signals That a Partner Is Ready for Long-Term Strategic Engagement",
            "desc": ["Scaling a consulting relationship is never impulsive. Enterprises expand scope only when they sense alignment, maturity, and a     <a href='https://www.rialtes.com/insights/blogs/why-enterprises-choose-sap-consulting-partners/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>partner capable of growing with them<a/>. CIOs look for behavioural proof, not pitch-deck promises; they evaluate how a partner acts under pressure, how decisions are challenged, and whether teams operate like co-owners rather than implementers.",
            ],
            "list": [
                {
                    "title": "The partner challenges decisions with rationale instead of following instructions blindly",
                    "desc": ["A strategic partner doesn’t nod on every request. They question processes, validate assumptions, and protect the business from downstream complexity. Pushback is thoughtful, data-based, and timed well."],
                },
                {
                    "title": "Risk conversations are transparent, structured, and solution-oriented",
                    "desc": [
                        "Healthy delivery environments surface issues early. When a partner raises risks without political hedging and proposes mitigation paths, leadership gains confidence. It signals ownership, not avoidance"
                    ],
                },
                {
                    "title": "Leadership continuity is visible across phases, not just during sales cycles",
                    "desc": [
                        "Enterprises notice when the people who sold the vision remain accountable during execution. Consistency of program leads, architects, and engagement heads matters more than headcount."
                    ],

                },
                {
                    "title": "Business context is understood beyond transactions and configuration",
                    "desc": [
                        "Partners ready to scale connect SAP work to revenue flows, supply chain realities, compliance frameworks, and how decisions impact users. They speak business language, not only S/4HANA modules."
                    ],

                },
                {
                    "title": "Delivery cadence is measurable, predictable, and repeatable across workstreams",
                    "desc": [
                        "When ceremonies run on rhythm, escalations are clear, and reporting is outcome-based, teams feel safe increasing scope. Reliability builds trust quietly, sprint by sprint."
                    ],
                }
            ]
        }
    ]
    const faqdata = [
        {
            "question": "What does a scalable SAP consulting partnership look like?",
            "answer": "It’s when delivery shifts from ticket completion to value realization. The partner co-builds roadmaps, improves adoption, drives automation, and becomes involved in business planning rather than being a project executor."
        },
        {
            "question": "How is long-term SAP consulting value measured?",
            "answer": "Through cost-to-serve reduction, release velocity, user adoption rates, integration maturity, automation impact, time-to-change cycles, and business KPIs linked to SAP outcomes — not just go-live success."
        },
        {
            "question": "Why expand with one SAP partner instead of using many?",
            "answer": "Consolidation reduces re-learning, speeds decision cycles, stabilizes architecture, and builds institutional memory. One trusted partner scale faster than onboarding a new vendor for every initiative."
        },
        {
            "question": "When should enterprises shift from a project model to a managed partnership?",
            "answer": "Typically, post-stabilization, when enhancements become continuous. A managed model supports automation, innovation, and rollouts without constant procurement cycles."
        },
        {
            "question": "What makes a partner a strategic ally, not a vendor?",
            "answer": "Ownership mindset. The ability to forecast risks, help shape business roadmaps, deliver cross-functional value, and remain accountable beyond scope boundaries."
        }
    ]


    const commonTrustData = [
        {
            "title": "Why Most SAP Relationships Stall After the First Project",
            "desc": [
                "Many engagements start strong but fail to evolve because the partner remains execution-focused instead of growth-focused. The signs look familiar:"
            ],
            "list": [
                "Delivery becomes transaction-oriented, not value-oriented",
                "Stakeholders struggle with visibility into the future transformation roadmap",
                "The partner works in the system, but not on the strategy",
                "Different business units are onboarding new vendors, diluting ownership"
            ],
            desc2: "A single project proves capability. Scaling requires trust, pace, and a strategic SAP consulting relationship roadmap."
        }
    ]
    const standardizationData = [
        {
            "title": "SAP Consulting Governance — The Real Differentiator",
            "desc": [
                "Capability wins projects. <a href='https://www.rialtes.com/insights/blogs/sap-consulting-trust-through-accountability/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Governance wins trust</a>. As programs expand, decision velocity and alignment matter more than tickets closed.",
            ],
            "boldTitle": "Scalable Governance Frameworks Include:",
            "list": [
                "<h4> Cross-functional steering committees</h4>",
                "<h4> Structured RACI and escalation paths</h4>",
                "<h4> Release, regression & integration playbooks</h4>",
                "<h4> Change management and communication frameworks</h4>",
                "<h4> SLA-based managed services for continuous delivery</h4>"
            ],
            desc2: "When governance matures, business users stop seeing SAP as a project and start seeing it as the operating engine."
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
                title="How Enterprises Scale SAP Consulting Partnerships | Rialtes"
                description="Enterprises scale SAP relationships with partners who show ownership, governance discipline, and the ability to think beyond the current scope."
                keywords="Partners, website, welcome"
                canonical={`https://www.rialtes.com/insights/blogs/from-project-partner-to-strategic-sap-consulting-ally/`}
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
                        src="/images/blog/from-project-partner/scaling-sap-consulting-engagements.webp"
                        alt="Two people shaking hands with glowing digital lines symbolizing partnership and collaboration."
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/from-project-partner/mobile.webp"
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">SAP Consulting</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>02 January 2026
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">From Project Partner to Strategic Ally: Scaling SAP Consulting Engagements</h1>

                            <div className="xl:mt-[38px] mt-[33px]">
                                {
                                    mainData.map((data, index) => {
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
                                    commonTrustData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight" dangerouslySetInnerHTML={{ __html: data.desc2 }} />
                                        </div>
                                    ))
                                }

                                {
                                    whyTrustData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                                {data.title}
                                            </h2>

                                            {data.desc.map((item, index) => (
                                                <p
                                                    key={`${item}-${index}`}
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: item }}
                                                />
                                            ))}
                                            <h3 className="mt-5 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold  leading-tight" dangerouslySetInnerHTML={{ __html: data.title2 }} />

                                        </div>
                                    ))
                                }
                                <div className="hidden md:block mt-5">
                                    <table className="w-full border-separate border-spacing-y-3">
                                        <thead>
                                            <tr className="bg-[#DEDEDE] text-left">
                                                {["Stage", "Engagement Focus", "Enterprise Expectation", "What Enables Scale"].map(
                                                    (head) => (
                                                        <th
                                                            key={head}
                                                            className="px-4 py-3 font-bold
                      4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        >
                                                            {head}
                                                        </th>
                                                    )
                                                )}
                                            </tr>
                                        </thead>

                                        <tbody className="mt-2">
                                            {rows.map((row, idx) => (
                                                <tr key={idx} className={`${row.bg} border-b`}>
                                                    <td className=" px-4 py-4 font-semibold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        {row.stage}
                                                    </td>
                                                    <td className=" px-4 font-semibold py-4 mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        {row.focus}
                                                    </td>
                                                    <td className=" px-4 font-semibold py-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        {row.expectation}
                                                    </td>
                                                    <td className=" px-4 font-semibold py-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        {row.scale}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {
                                    whyTrustData.map((data, index) => (
                                        <p key={`${data.title}-${index}`} className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight" dangerouslySetInnerHTML={{ __html: data.desc2 }} />
                                    ))}


                                {/* Mobile Layout */}
                                <div className="md:hidden space-y-4">
                                    {rows.map((row, idx) => (
                                        <div
                                            key={idx}
                                            className={`${row.bg} border rounded-lg p-4`}
                                        >
                                            <div className="space-y-2">
                                                <div>
                                                    <p className="font-semibold">Stage</p>
                                                    <p>{row.stage}</p>
                                                </div>

                                                <div>
                                                    <p className="font-semibold">Engagement Focus</p>
                                                    <p>{row.focus}</p>
                                                </div>

                                                <div>
                                                    <p className="font-semibold">Enterprise Expectation</p>
                                                    <p>{row.expectation}</p>
                                                </div>

                                                <div>
                                                    <p className="font-semibold">What Enables Scale</p>
                                                    <p>{row.scale}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {
                                    standardizationData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />

                                            <h3 className=" 4xl:text-[22px] 2xl:text-[19px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 leading-tight mt-5">{data.boldTitle}</h3>

                                                <UnorderedList arrName={data.list} ulClassName="space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />

                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight" dangerouslySetInnerHTML={{ __html: data.desc2 }} />
                                        </div>
                                    ))
                                }

                                {
                                    whyErpData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <h3 className=" 4xl:text-[20px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] font-bold pb-4 leading-tight mt-10">{data.title2}</h3>


                                            {
                                                data.list.map((elem, id) => (
                                                    <div className="flex gap-5 md:gap-10 mt-8" key={id}>
                                                        <p className="md:w-[66px] w-[150px] h-[50px] flex items-center justify-center bg-[#1486E6] text-white font-bold 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">{id + 1}</p>
                                                        <div>
                                                            <h4 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.title}</h4>
                                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-2">{elem.desc}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                        </div>
                                    ))
                                }

                                {
                                    howSalesforceData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                            <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                            {
                                                data.list.map((elem, index) => (
                                                    <div key={`${elem.title}-${index}`} className="mt-8 pl-6 p-8 border border-[#707070] 4xl:w-[80%] 2xl:w-[90%] xl:w-[90%] md:w-full">
                                                        <h3 className="4xl:text-[20px] 2xl:text-[17px] text-[20px] font-bold">{elem.title}</h3>
                                                        <UnorderedList arrName={elem.desc} ulClassName={`4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium mt-4`} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                                {
                                    whyEnterpriseData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                                {data.title}
                                            </h2>

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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Scale SAP Consulting Partnerships</h2>
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