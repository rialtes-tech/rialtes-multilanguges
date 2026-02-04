"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from '@/app/components/blogSocialIcons'
import UnorderedList from "@/app/components/unorderedList";
import React from "react";
import Link from "next/link";
import LearnMoreButton from "@/app/components/learnMore";

const faqData = [
    {
        "question": "What are SAP managed services?",
        "answer": "They are ongoing services that support, optimize, and innovate your SAP environment — including monitoring, change management, enhancements, cloud migration, and AI-driven transformation."
    },
    {
        "question": "What are examples of managed services?",
        "answer": "System upgrades, bug resolution, workflow automation, integration buildouts, analytics enablement, performance optimization, and Joule-powered AI enhancements."
    },
    {
        "question": "What is the difference between ITSM and managed services?",
        "answer": "ITSM manages service delivery across IT systems broadly. Managed services focus specifically on improving, modernizing, and strategically scaling SAP."
    },
    {
        "question": "What is a managed services provider?",
        "answer": "It is an organization that takes responsibility for maintaining and optimizing SAP systems through SLA-driven services, innovation support, and business-aligned improvement programs."
    }
]

const mainData = [
    "The majority of organizations rely on SAP to run finance, supply chain, HR, manufacturing, procurement, and customer operations. But the truth is simple — implementing SAP is only the starting line. The real value lies in keeping systems optimized, innovating continuously, and aligning SAP capabilities with evolving business priorities.",
    "That is exactly where SAP managed services prove their worth. They go beyond “keeping systems running.” They turn SAP into a living digital engine that learns, adapts, scales, and fuels enterprise transformation through AI, automation, and intelligent workflows.",
    "Let’s break down how SAP managed services reshape business outcomes, and why more enterprises are now treating them as a long-term strategy, rather than emergency support."
]
const whatSapData = [
    {
        "title": "What Are SAP Managed Services?",
        "desc": [
            "SAP managed services give enterprises long-term support across their SAP landscape — cloud, on-premises, hybrid, and industry-specific solutions. Instead of relying on internal teams alone, companies work with an <a href='https://www.rialtes.com/services/business-transformation/sap-managed-services-provider/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>expert SAP managed services provider</a> to run, stabilize, modernize, and evolve their SAP stack.",
            "It covers everything you need to ensure SAP is always moving toward business goals, including:"
        ],
        "subTitle": "Core pillars of managed SAP services",
        "list": [
            "24x7 system monitoring, security, and SLA-based incident management",
            "Continuous enhancement, patching, and version upgrades",
            "Demand-driven development of new features and integrations",
            "Proactive performance tuning and process optimization",
            "Cloud migration, modernization, and hyperscaler management",
            "Predictive maintenance using AI and observability tools",
            "Governance, analytics insights, and strategic roadmap guidance",
        ],
        "desc2": "What this really means: SAP stops being “maintenance heavy” and becomes a platform that keeps evolving as your enterprise evolves."
    }
]
const whyManagedData = [
    {
        "title": "Why Managed SAP Services Matter in the Era of Enterprise AI",
        "desc": [
            "Today’s SAP environments sit at the center of a much wider digital ecosystem, cloud, data platforms, AI agents, automation, MES, CRM, supply chain networks, and industry systems.",
            "AI has changed business expectations. Leadership doesn’t just want SAP uptime. They want:"
        ],
        "list": [
            "Real-time reporting with zero manual effort",
            "Autonomous workflows replacing repetitive tasks",
            "Predictive supply chain decisions instead of reactive fixes",
            "Personalized employee and customer experiences",
            "Data flowing freely across systems instead of being siloed"
        ],
        "desc2": [
            "Those ambitions demand an SAP landscape that constantly improves.",
            "SAP managed services make that possible by combining system reliability with AI-driven innovation. You keep the foundation strong while accelerating capabilities like:"
        ],
        "list2": [
            "Joule-powered generative AI experiences across SAP applications",
            "Predictive planning and intelligent analytics",
            "Hyperautomation across finance, HR, and procurement",
            "Industry-specific AI accelerators and cloud extensions"
        ]
    }
]
const keyData = [
    {
        "title": "Reduce operational cost without overloading internal IT",
        "desc": "Instead of building a large in-house support team, you tap into a full spectrum of SAP skills on demand that are functional, technical, cloud, security, integration, and analytics. You get a broader talent pool at a fraction of the cost."
    },
    {
        "title": "Accelerate adoption of SAP cloud innovations",
        "desc": "New releases, enhancements, and upgrades stop being postponed projects. They’re integrated into your roadmap with clear business outcomes, helping you unlock new automation and AI features faster."
    },
    {
        "title": "Strengthen security and compliance across the SAP landscape",
        "desc": "Monitoring, patching, vulnerability management, and audit readiness become a continuous cycle, not crisis-driven tasks. Potential risks are neutralized before they disrupt operations."
    },
    {
        "title": "Maintain peak system performance and uninterrupted business",
        "desc": "Performance tuning, predictive monitoring, and incident prevention keep SAP running smoothly during high-volume cycles like financial close, payroll, procurement, and production. Business uptime becomes the norm."
    },
    {
        "title": "Enable ongoing transformation instead of isolated improvements",
        "desc": "Enhancements don’t stop after go-live. Process innovation, automation, and analytics remain aligned with business strategy, ensuring SAP evolves in tandem with customer expectations, market conditions, and growth goals."
    }
]
const whatDoData = [
    {
        "title": "What Do Managed SAP Services Look Like in Action?",
        "desc": "Below are common examples of managed services, aligned to real-world enterprise priorities:",
        "list": [
            {
                "business": "Improve FP&A accuracy",
                "managed": "AI-powered forecasting, real-time analytics automation"
            },
            {
                "business": "Optimize supply chain",
                "managed": "Integrated planning, demand sensing, predictive inventory"
            },
            {
                "business": "Scale HR operations",
                "managed": "SuccessFactors enhancements, LMS automation, workflow improvements"
            },
            {
                "business": "Reduce manufacturing downtime",
                "managed": "Plant maintenance optimization, asset IoT insights"
            },
            {
                "business": "Hybrid cloud expansion",
                "managed": "RISE with SAP migration and hyperscaler management"
            },
            {
                "business": "Strengthen data governance",
                "managed": "Enterprise-wide data quality and master data stewardship"
            }
        ],
        "desc2": "When SAP stops being a collection of modules and becomes a connected intelligence ecosystem, business agility rises fast."
    }
]
const whatEnterpriseData = [
    "Enterprises don’t need more support tickets or reactive maintenance cycles. They need SAP environments that evolve automatically, scale confidently, and <a href='https://www.rialtes.com/insights/blogs/sap-implementation-strategies-for-2026-success/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>accelerate digital transformation</a>.",
    "And that’s exactly where SAP Digital Desk delivers next-generation impact.",
    "It unifies stabilization, modernization, and innovation across the entire SAP landscape. From platform performance and cloud evolution to AI-enabled automation and business-aligned enhancements, SAP Digital Desk turns SAP into a strategic growth engine, not just an operational tool. Ready to Unlock Maximum Value from SAP? Let’s Talk!",
    "Contact us at <a href='mailto:sales@rialtes.com' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>sales@rialtes.com<a/> to explore how SAP Digital Desk can transform your SAP operations."
]
const howToChooseData = [
    {
        "title": "How to Choose the Right SAP Managed Services Provider",
        "desc": "If you’re evaluating partners, don’t focus only on certifications or ticket resolution speed. Instead, look for:",
        "list": [
            {
                "title": "Alignment with enterprise strategy",
                "desc": "They should offer transformation roadmaps, not only production support."
            },
            {
                "title": "Experience with SAP cloud and industry adoption",
                "desc": "Every industry runs SAP differently — depth of domain expertise matters."
            },
            {
                "title": "AI and automation capability",
                "desc": "Joule, ML, analytics, and business process automation must be core strengths."
            },
            {
                "title": "Platform-driven governance and observability",
                "desc": "Your SAP environment should be monitored continuously, not reactively."
            },
            {
                "title": "Co-innovation mindset",
                "desc": "The provider should help your SAP evolve as your business evolves."
            }
        ]
    }
]
const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "SAP Managed Services: The Enterprise AI Strategy Behind Always-On SAP Success",
    "description": "SAP managed services help enterprises optimize systems, innovate continuously, and align SAP capabilities with evolving business priorities through AI and automation.",
    "image": "https://www.rialtes.com/images/blog/digital-data-stream.webp",
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
        "@id": "https://www.rialtes.com/insights/blogs/sap-managed-services-enterprise-ai-strategy/"
    },
    "datePublished": "2025-12-05",
    "mainEntity": {
        "@type": "FAQPage",
        "name": "FAQs: SAP Managed Services",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are SAP managed services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "They are ongoing services that support, optimize, and innovate your SAP environment — including monitoring, change management, enhancements, cloud migration, and AI-driven transformation."
                }
            },
            {
                "@type": "Question",
                "name": "What are examples of managed services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "System upgrades, bug resolution, workflow automation, integration buildouts, analytics enablement, performance optimization, and Joule-powered AI enhancements."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between ITSM and managed services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ITSM manages service delivery across IT systems broadly. Managed services focus specifically on improving, modernizing, and strategically scaling SAP."
                }
            },
            {
                "@type": "Question",
                "name": "What is a managed services provider?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is an organization that takes responsibility for maintaining and optimizing SAP systems through SLA-driven services, innovation support, and business-aligned improvement programs."
                }
            }
        ]
    }
}
export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/sap-managed-services-enterprise-ai-strategy";
    const currUrl = useUrl()

    return (
        <section className="min-h-screen">
            <Seo
                title="How AI Elevates SAP Managed Services for Modern Enterprises | Rialtes"
                description="Learn how AI-powered innovations elevate SAP managed services so enterprises can optimize performance, automate tasks, and drive continuous transformation."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/sap-managed-services-enterprise-ai-strategy"
                }
            />

            <Script
                id="schema-sapManaged"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/digital-data-stream.webp"
                        alt="Colorful digital lines and light trails forming a fast-moving futuristic data stream."
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/digital-data-stream-mobile.webp"
                        alt="Colorful digital lines and light trails forming a fast-moving futuristic data stream."
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Managed Services </span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>05 December 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">SAP Managed Services: The Enterprise AI Strategy Behind Always-On SAP Success</h1>

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


                            {/* what sap section */}
                            {
                                whatSapData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="space-y-2 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <h3 className="mt-10 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[16px] font-bold">
                                            {data.subTitle}
                                        </h3>
                                        <UnorderedList arrName={data.list} ulClassName="pl-[30px] lg:pl-[40px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                        <p
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                    </div>
                                ))
                            }
                            {/* why managed section */}
                            {
                                whyManagedData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="space-y-2 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <UnorderedList arrName={data.list} ulClassName="pl-[30px] lg:pl-[40px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                        <UnorderedList arrName={data.desc2} ulClassName="space-y-2 mt-10 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <UnorderedList arrName={data.list2} ulClassName="pl-[30px] lg:pl-[40px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                    </div>
                                ))
                            }
                            {/* key section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Key Benefits of Partnering With an SAP Managed Services Provider</h2>
                                {keyData.map((data, ind) => (
                                    <div className="grid md:grid-cols-12 gap-x-5 max-md:pb-10 max-md:last:pb-0 max-md:pt-5 md:py-5 border-b border-[#b0aeae] last:border-0" key={ind} >

                                        <div className="md:col-span-2 max-md:flex gap-10">
                                            <div className="text-[#1A82E0] 4xl:text-[150px] 2xl:text-[130px] xl:text-[120px] md:text-[100px] text-[80px]">
                                                {ind + 1}
                                            </div>

                                            <div className="max-md:flex justify-center items-center">
                                                <p className="md:hidden block 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[16px] font-bold">
                                                    {data.title}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="md:col-span-10 flex flex-col justify-center">
                                            <h3 className="md:block hidden 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[16px] font-bold">
                                                {data.title}
                                            </h3>

                                            <p
                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* what section */}
                            {
                                whatDoData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />

                                        <table className="w-full table-fixed border-collapse mt-10">

                                            <thead>
                                                <tr className="bg-[#E3E3E3] text-black font-medium 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[14px]">
                                                    <th className="xl:w-[30%] md:w-[25%] w-[30%] text-left py-3 pl-6">Business Priority</th>
                                                    <th className="xl:w-[32%] md:w-[45%] w-[40%] text-left py-3 pl-4">Managed SAP Service Deliverable</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {data.list.map((row, idx) => (
                                                    <tr key={idx} className="border-b border-[#b0aeae] last:border-0">

                                                        <td className="p-3 font-medium align-top 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[14px] xl:pr-[220px] md:pr-[40px]">
                                                            {row.business}
                                                        </td>

                                                        <td className="p-3 font-medium pl-6 align-top 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[14px]">
                                                            {row.managed}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <p
                                            className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                    </div>
                                ))
                            }

                            {/* how to choose section */}
                            {
                                howToChooseData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />
                                        {
                                            data.list.map((data, ind) => {
                                                return (
                                                    <div className="md:flex mt-24 md:mt-[26px] py-[34px] md:py-[40px] lg:py-[40px] 4xl:py-[40px] px-[26px] md:pr-[50px] 4xl:pr-[30px] border border-[#707070] relative md:ml-[90px] sm:w-[80%] md:w-auto xl:w-[950px] 4xl:w-[1100px]" key={ind}>
                                                        <h3 className={`md:absolute max-md:mt-[-80px] sm:mt-[-70px] md:mt-0 md:top-[50%] md:translate-y-[-50%] 4xl:w-[400px] xl:w-[340px] md:w-[380px] w-fit md:left-[-60px] bg-[#006FBE] text-white font-semibold 4xl:text-[22px] 2xl:text-[19px] xl:text-[19px] md:text-[20px] text-[20px] px-[20px] py-[18px] md:px-[30px] md:py-[22px] leading-tight xl:h-[90px] 4xl:h-[100px] ${(ind == 4) ? "xl:pt-[36px]" : ""} ${(ind == 2) ? "4xl:pt-[36px]" : ""}`}><span>{data.title}</span></h3>
                                                        <div className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[340px] xl:ml-[300px] 4xl:ml-[380px]" dangerouslySetInnerHTML={{ __html: data.desc }} />
                                                    </div>

                                                )
                                            })
                                        }
                                    </div>
                                ))
                            }

                            <div className="md:mt-[50px] mt-[40px] lg:w-[920px] xl:w-[1100px] 4xl:w-[1300px] relative md:h-[340px] lg:h-[300pxc] xl:h-[340px] 4xl:h-[400px] md:block hidden">
                                {/* IMAGE */}
                                <Image
                                    src="/images/blog/digital-ocean-wave.webp"
                                    alt="Large ocean wave blended with glowing digital network lines symbolizing data and technology."
                                    width={1000}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                                {/* TEXT BLOCK */}
                                <div className="absolute inset-0 flex flex-col justify-between px-10 pt-8 text-white md:max-w-[480px] lg:max-w-[550px]">

                                    <div>
                                        <h2 className="font-bold 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                            Voyage with SAP – Transformational RISE with SAP Services by Rialtes
                                        </h2>

                                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                            Discover how your teams can steer every customer interaction using data, AI,
                                            and automation, from lead to loyalty, all inside one connected platform.
                                        </p>
                                    </div>

                                    <div>
                                        <LearnMoreButton bgcolor="#006FBE" bordercolor="#006FBE" btnName="Watch the Webinar" href="https://www.rialtes.com/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes/" arialabel="watch webinar button" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 md:hidden">
                                <div className="h-[300px]">
                                    <Image
                                        src="/images/blog/digital-ocean-wave-mobile.webp"
                                        alt="Large ocean wave blended with glowing digital network lines symbolizing data and technology."
                                        width={1000}
                                        height={600}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="bg-[#073259] flex flex-col justify-between px-10 pt-10 text-white">

                                    <div>
                                        <p className="font-bold 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                            Voyage with SAP – Transformational RISE with SAP Services by Rialtes
                                        </p>

                                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mb-5">
                                            Discover how your teams can steer every customer interaction using data, AI,
                                            and automation, from lead to loyalty, all inside one connected platform.
                                        </p>
                                    </div>

                                    <div>
                                        <LearnMoreButton bgcolor="#006FBE" bordercolor="#006FBE" btnName="Watch the Webinar" href="https://www.rialtes.com/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes/" arialabel="watch webinar button" />
                                    </div>
                                </div>
                            </div>

                            {/* why enterprise section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Why Enterprises Are Choosing SAP Managed Services as a Long-Term Strategy</h2>
                                {
                                    whatEnterpriseData.map((data, ind) => {
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
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: SAP Managed Services</h2>
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