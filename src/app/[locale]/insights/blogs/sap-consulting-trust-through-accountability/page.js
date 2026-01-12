"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/[locale]/components/useUrl";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import UnorderedList from "@/app/[locale]/components/unorderedList";
import React from "react";


export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/sap-consulting-trust-through-accountability";
    const currUrl = useUrl()

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Accountability in SAP Consulting: What Enterprises Must Demand from Partners | Rialtes",
        "description": "Enterprise SAP programs don’t fail because technology isn’t available; they fail when governance breaks down, when ownership blurs, and when decisions lack accountability.",
        "image": "https://www.rialtes.com/images/blogs/data-analysis-business-strategy.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/sap-consulting-trust-through-accountability/"
        },
        "datePublished": "2026-01-02",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "SAP Consulting Governance & Accountability FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is SAP consulting governance?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Governance in SAP programs is the operating system for decision-making. It defines how scope changes are evaluated, who signs off on architectural choices, how risks surface, and how accountability flows between business and IT. Strong governance keeps programs predictable. It ensures design doesn’t drift, stakeholder alignment stays intact, and the implementation doesn’t rely on heroics or firefighting. Without it, even technically strong projects collapse under ambiguity."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why does accountability matter more than capability?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Capability gets the project started, accountability determines whether it survives complexity. Enterprises have seen talented partners fail because ownership was diluted. When roles aren’t clear, issues linger, decisions stall, and blame replaces progress. Accountability enforces responsibility for outcomes, not just deliverables. A credible partner steps forward during conflict, not sideways. They accept ownership for process, quality, timelines, and business impact"
                    }
                },
                {
                    "@type": "Question",
                    "name": "What does scalable governance look like?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Scalable governance is visible, measurable, and repeatable across phases and global rollouts. It includes steering committees that intervene proactively, escalation paths that don’t depend on individual relationships, RACIs that remove ambiguity, and structured change control that protects scope without blocking innovation. It means playbooks for UAT, hypercare, regression testing, and release management — so execution stays consistent whether the program expands from one plant to 15 or one country to 20."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do CIOs assess accountability before selection?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "CIOs test partner maturity early — usually before a contract is signed. They study the escalation model, how the partner responds when challenged, and whether risks are acknowledged transparently or downplayed to win the deal. They ask who shows up in governance meetings — senior leaders or only sales teams. They check the continuity of delivery leadership and ask for real scenario walkthroughs, like rollback management or cutover risks."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What signals a trustworthy SAP consulting partner?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Trustworthy partners demonstrate clarity and integrity from day one. They don’t overpromise, they question assumptions respectfully, and they back recommendations with data and reasoning. They operate with a challenge culture willing to say \"no\" when something risks future instability. They think beyond go-live, designing for supportability, future upgrades, and business adoption, not just technical completion. A credible partner feels less like a vendor and more like a co-owner of outcomes."
                    }
                }
            ]
        }
    }
    const faqData = [
        {
            question: "What is SAP consulting governance? ",
            answer:
                "Governance in SAP programs is the operating system for decision-making. It defines how scope changes are evaluated, who signs off on architectural choices, how risks surface, and how accountability flows between business and IT. Strong governance keeps programs predictable. It ensures design doesn’t drift, stakeholder alignment stays intact, and the implementation doesn’t rely on heroics or firefighting. Without it, even technically strong projects collapse under ambiguity."
        },
        {
            question: "Why does accountability matter more than capability?",
            answer:
                "Capability gets the project started, accountability determines whether it survives complexity. Enterprises have seen talented partners fail because ownership was diluted. When roles aren’t clear, issues linger, decisions stall, and blame replaces progress. Accountability enforces responsibility for outcomes, not just deliverables. A credible partner steps forward during conflict, not sideways. They accept ownership for process, quality, timelines, and business impact."
        },
        {
            question: "What does scalable governance look like?",
            answer:
                "Scalable governance is visible, measurable, and repeatable across phases and global rollouts. It includes steering committees that intervene proactively, escalation paths that don’t depend on individual relationships, RACIs that remove ambiguity, and structured change control that protects scope without blocking innovation. It means playbooks for UAT, hypercare, regression testing, and release management — so execution stays consistent whether the program expands from one plant to 15 or one country to 20."
        },
        {
            question: "How do CIOs assess accountability before selection?",
            answer:
                "CIOs test partner maturity early — usually before a contract is signed. They study the escalation model, how the partner responds when challenged, and whether risks are acknowledged transparently or downplayed to win the deal. They ask who shows up in governance meetings — senior leaders or only sales teams. They check the continuity of delivery leadership and ask for real scenario walkthroughs, like rollback management or cutover risks. "
        },
        {
            question: "What signals a trustworthy SAP consulting partner?",
            answer:
                "Trustworthy partners demonstrate clarity and integrity from day one. They don’t overpromise, they question assumptions respectfully, and they back recommendations with data and reasoning. They operate with a challenge culture willing to say 'no' when something risks future instability. They think beyond go-live, designing for supportability, future upgrades, and business adoption, not just technical completion. A credible partner feels less like a vendor and more like a co-owner of outcomes."
        }
    ]
    const mainData = [
        "Enterprise SAP programs don’t fail because technology isn’t available; they fail when governance breaks down, when ownership blurs, and when decisions lack accountability. Large transformation programs involve multi-year roadmaps, cross-functional impact, and the kind of complexity where assumptions compound into risk quickly. That’s why enterprises don’t just evaluate SAP capability; they evaluate how a partner behaves under pressure, escalates issues, and protects business continuity long after go-live.",
        "This cluster dives into the real deciding factor behind <a href='https://www.linkedin.com/pulse/how-enterprises-evaluate-choose-sap-consulting-citof/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>SAP partner selection</a> — governance maturity. It breaks down how organizations assess accountability, what scalable ownership frameworks look like in practice, and why credibility comes from structure, discipline, and delivery behavior, not promises. What this really shows is that trust is earned in how a consulting partner runs the program, challenges decisions, and stands beside IT leadership when the stakes are high."
    ]
    const whyGovData = [
        {
            "title": "Why Governance Defines SAP Consulting Success More Than Delivery Speed",
            "desc": [
                "Fast delivery means little without control. SAP initiatives fail when decision ownership is unclear, escalation is slow, or accountability sits in the gaps between teams. Strong governance protects outcomes, budgets, and timelines.",
                "Governance creates:"
            ],
            "list": [
                "A system for decisions, not just meetings",
                "Accountability paths that prevent blame loops",
                "Visibility into risk before it becomes disruption",
                "Confidence for CIOs and business sponsors"
            ]
        }
    ]
    const whyGovernanceData = [
        {
            "title": "What Enterprises Expect From Scalable SAP Consulting Governance",
            "list": [
                {
                    "title": "Clear Ownership at Every Layer",
                    "desc": "Teams move faster when everyone knows who owns what. Ambiguity introduces risk.",
                    "listTitle": "Enterprises expect:",
                    "listData": [
                        "Named owners for design, data, testing, and cutover",
                        "Defined sponsor and steering roles",
                        "Decisions documented, not implied"
                    ]
                },
                {
                    "title": "A Governance Model That Scales With the Program",
                    "desc": "What works for a pilot won’t hold when the scope doubles or regions expand.",
                    "listTitle": "Signals of scalability:",
                    "listData": [
                        "Structured steering committee rhythm",
                        "Decision authority by impact level",
                        "Playbooks for change, risk, and communicatio"
                    ]
                },
                {
                    "title": "Transparency in Risk and Escalation",
                    "desc": "In enterprise SAP work, risk hides where leaders can’t see it. Trusted partners surface issues early, with options and impact clarity.",
                    "listTitle": "Red flags to avoid:",
                    "listData": [
                        "Risks buried in status reports",
                        "Escalations routed through sales",
                        "No formal threshold for decision elevation"
                    ]
                },
                {
                    "title": "Accountability Beyond Go-Live",
                    "desc": "Accountability doesn’t end with deployment. Enterprises expect partners to invest in mid-term outcomes — stability, adoption, optimization.",
                    "listTitle": "Long-term accountability indicators:",
                    "listData": [
                        "Post-go-live KPIs (performance, adoption, incident response)",
                        "Ownership for change intake and backlog management",
                        "Strategy alignment to SAP roadmap evolution"
                    ]
                }
            ]
        }
    ]
    const sapDeliveryData = [
        {
            "title": "SAP Delivery Accountability: What CIOs Use to Judge Credibility",
            "desc": [
                "CIOs don't look for cheerleading; they look for discipline and the ability to operate under real-world pressure. Tools, timelines, and credentials matter, but what really earns confidence is how a partner behaves when friction appears. SAP programs always hit moments of conflict, scope debates, data integrity gaps, and unrealistic deadlines",
                "CIOs assess:"
            ],
            "list": [
                "How decisions are made when priorities clash or change mid-flight",
                "Whether the partner challenges risky assumptions instead of nodding along",
                "If delivery teams are empowered to make progress without waiting for executive intervention",
                "How transparently risks are surfaced, documented, and acted on",
                "Whether accountability is proactive or only reactive once issues escalat"
            ],
            "desc2": "A partner who won't say 'no' is a bigger risk than one who challenges. CIOs value consultants who protect the program — even if it means difficult conversations — because that is the <a href='https://www.rialtes.com/insights/blogs/what-makes-sap-consulting-companies-trustworthy/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>behavior of a true owner</a>, not a vendor."
        }
    ]
    const howAccountablilityData = [
        {
            "title": "How Accountability Influences SAP Consulting Company Selection",
            "list": [
                {
                    "title": "Why Accountability Matters",
                    "desc": "<strong>Accountability signals</strong> more than capability — it shows whether the partner will:",
                    "list": [
                        "Take ownership when projects get tough",
                        "Challenge risky decisions",
                        "Focus on value, not just task completion"
                    ]
                },
                {
                    "title": "High Accountability = Deeper Engagement",
                    "desc": "When accountability is strong, enterprises move partners from <span>vendor to strategic collaborator</span>.",
                    "listTitle": "Access expands into:",
                    "list": [
                        "Requirement shaping & governance meetings",
                        "Risk and scenario planning",
                        "Architecture & design councils",
                        "Production readiness reviews"
                    ],
                    "desc2": "Trust = More influence + more responsibility"
                },
                {
                    "title": "Low Accountability = Limited Trust",
                    "desc": "Partners who lack accountability often:",
                    "list": [
                        "Avoid tough discussions",
                        "Say yes to everything without impact evaluation",
                        "Fail to track or document decisions"
                    ]
                }
            ]
        }
    ]
    const whyEnterpriseData = [
        {
            "title": "Why Enterprises Trust Rialtes for Governance and Risk Ownership",
            "data": [
                "Rialtes operates with the governance maturity enterprises expect, not as a delivery vendor, but as a risk-bearing partner. From day one, we establish accountability, clarity, escalation thresholds, and decision rights that prevent noise and confusion later.",
                "Our teams bring structure to programs with steering cadences, transparent risk logs, proactive communication, and leadership involvement through critical milestones. We call out risks early, challenge assumptions respectfully, and ensure decisions protect long-term value and do not focus just on short-term progress.",
                "For CIOs and transformation leaders who prioritize accountability, control, and <a href='https://www.rialtes.com/solutions/enterprise-platforms/sap-consulting-implementation-partners/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>enterprise-grade SAP consulting governance</a>, Rialtes stands out as a partner who owns outcomes, not just deliverables."
            ]
        }
    ]
    const tableData = [
        {
            level: 'High',
            trust: 'Strong',
            role:
                'Strategic councils, transformation decisions, hands-on delivery leadership',
            bg: 'bg-[#E9FFE9]',
        },
        {
            level: 'Low',
            trust: 'Weak',
            role: 'Proposals, demos, surface-level conversations only',
            bg: 'bg-[#FFF1E6]',
        },
    ]
    return (
        <section className="min-h-screen">
            <Seo
                title="SAP Accountability: The Real Measure of Consulting Trust | Rialtes"
                description="Accountability enforces responsibility for outcomes, not just deliverables. A credible SAP partner steps forward during conflict, not sideways."
                keywords="Partners, website, welcome"
                canonical={"https://www.rialtes.com/insights/blogs/sap-consulting-trust-through-accountability/"}
            />

            <Script
                id="schema-sapConsulting"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/data-analysis-business-strategy.webp"
                        alt="Team reviewing business data and performance metrics on a digital analytics dashboard"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/data-analysis-business-strategy-mobile.webp"
                        alt="Team reviewing business data and performance metrics on a digital analytics dashboard"
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
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>09 January 2026
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">Accountability in SAP Consulting: What Enterprises Must Demand from Partners</h1>

                            <div className="md:mt-[50px] mt-[40px]">
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
                            {
                                whyGovData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <UnorderedList arrName={data.list} ulClassName="pl-[30px] lg:pl-[40px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                    </div>
                                ))
                            }
                            {/* why governance section */}
                            {
                                whyGovernanceData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />

                                        {
                                            data.list.map((elem, id) => (
                                                <div className={`grid lg:grid-cols-12 grid-cols-1 gap-[20px] md:gap-x-[60px] mt-10 pb-[30px] 4xl:w-[1200px] ${id == 3 ? "border-0" : "border-b border-[#bfbdbd]"}`} key={id}>
                                                    <div className="flex gap-5 lg:gap-[40px] lg:col-span-4 max-lg:items-center">
                                                        <div className="">
                                                            <div className="text-center 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] bg-[#1486E6] text-white font-bold flex justify-center items-center w-[50px] h-[50px] lg:h-[60px] lg:w-[60px]">
                                                                {id + 1}
                                                            </div>
                                                        </div>
                                                        <h3 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold">{elem.title}</h3>
                                                    </div>
                                                    <div className="lg:col-span-7">
                                                        <p
                                                            className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                        />
                                                        <h4 className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold">{elem.listTitle}</h4>
                                                        <UnorderedList arrName={elem.listData} ulClassName="pl-[30px] lg:pl-[40px] space-y-1 mt-5 space-y-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                            {/* sap deliver section */}
                            {
                                sapDeliveryData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />

                                        <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                            {data.list.map((data, idx) => (
                                                <li key={idx}><h3 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</h3></li>
                                            ))}
                                        </ul>
                                        <p
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />

                                    </div>
                                ))
                            }
                            {/* how accountablity section */}
                            {
                                howAccountablilityData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        {
                                            data.list.map((elem, id) => (
                                                <div key={id}>
                                                    <h3 className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold">{elem.title}</h3>
                                                    <p
                                                        key={ind}
                                                        className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                    />
                                                    <h4 className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold">{elem.listTitle && elem.listTitle}</h4>
                                                    <UnorderedList arrName={elem.list} ulClassName="pl-[30px] lg:pl-[40px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.desc2 && elem.desc2}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                            <div>
                                <table className="border-collapse md:table block max-sm:w-[90%] mt-10">
                                    {/* HEADER (hidden on mobile) */}
                                    <thead className="bg-[#EAF6FF] hidden md:table-header-group">
                                        <tr>
                                            <th className="p-4 text-left 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                Accountability Level
                                            </th>
                                            <th className="p-4 text-left 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                Enterprise Trust
                                            </th>
                                            <th className="p-4 text-left 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                Access & Role
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="block md:table-row-group">
                                        {tableData.map((item, index) => (
                                            <tr
                                                key={index}
                                                className={`${item.bg} block md:table-row border rounded-lg md:rounded-none mb-4 md:mb-0`}>
                                                <td className="p-4 block md:table-cell">
                                                    <span className="md:hidden block 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold">
                                                        Accountability Level
                                                    </span>
                                                    <span className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-semibold">{item.level}</span>
                                                </td>

                                                <td className="p-4 block md:table-cell">
                                                    <span className="md:hidden block 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold">
                                                        Enterprise Trust
                                                    </span>
                                                    <span className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-semibold">{item.trust}</span>
                                                </td>

                                                <td className="p-4 block md:table-cell">
                                                    <span className="md:hidden block 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold">
                                                        Access & Role
                                                    </span>
                                                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] md:font-semibold w-[80%]">{item.role}</p>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* why enterprise section */}
                            {
                                whyEnterpriseData.map((data, ind) => {
                                    return (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.data} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: SAP Consulting Governance & Accountability</h2>
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
