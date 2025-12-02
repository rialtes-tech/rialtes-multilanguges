"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from '@/app/components/blogSocialIcons'
import UnorderedList from "@/app/components/unorderedList";
import Link from "next/link";

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/scale-with-salesforce-managed-services-salesforceagentplus";
    const currUrl = useUrl()
    const schemaData = {
//         "@context": "https://schema.org",
//         "@type": "BlogPosting",
//         "headline": "Salesforce Managed Services & SalesforceAgent+: Scale Revenue",
//         "description": "SalesforceAgent+ delivers AI-driven Managed Services for Salesforce designed to accelerate business outcomes, not just CRM maintenance.",
//         "image": "https://www.rialtes.com/images/blog/salesforce-managed-services-salesforceagent-plus.webp",
//         "author": {
//             "@type": "Organization",
//             "name": "Rialtes"
//         },
//         "publisher": {
//             "@type": "Organization",
//             "name": "Rialtes",
//             "logo": {
//                 "@type": "ImageObject",
//                 "url": "https://www.rialtes.com/images/homepage/logo.svg"
//             }
//         },
//         "mainEntityOfPage": {
//             "@type": "WebPage",
//             "@id": "https://www.rialtes.com/insights/blogs/scale-with-salesforce-managed-services-salesforceagentplus/"
//         },
//         "url": "https://www.rialtes.com/insights/blogs/scale-with-salesforce-managed-services-salesforceagentplus/",
//         "datePublished": "2025-12-02",
//         "mainEntity": {
//             "@type": "FAQPage",
//             "name": "Scale Your Company’s Revenue with Salesforce Managed Services - FAQs",
//             "mainEntity": [
//                 {
//                     "@type": "Question",
//                     "name": "What are managed services in Salesforce? (What exactly are managed services?)",
//                     "acceptedAnswer": {
//                         "@type": "Answer",
//                         "text": " Managed services in Salesforce refer to ongoing expert support that helps businesses continuously optimize their CRM rather than just maintain it. Instead of handling everything internally, companies partner with certified Salesforce specialists who proactively improve workflows, fix issues, introduce new features, analyze data, and align Salesforce with evolving business goals. It's not break-fix support — it's continuous growth enablement."
//                     }
//                 },
//                 {
//                     "@type": "Question",
//                     "name": " What are the benefits of Salesforce managed services?",
//                     "acceptedAnswer": {
//                         "@type": "Answer",
//                         "text": [
//                             " Salesforce managed services help businesses unlock more value from their CRM investment by:",
//                         "• Improving user adoption and productivity",
//                         "• Automating sales, marketing, and service workflows",
//                         "• Reducing dependency on internal tech teams",
//                         "• Lowering the cost of full - time in -house admin and developer roles",
//                         "• Accelerating innovation with AI, analytics, and automation",
//                         "• Ensuring security, compliance, and clean data. Over time, this leads to increased revenue, faster decision - making, and a CRM that evolves as the business scales."
//                         ]
// }
//                 },
//                 {
//                     "@type": "Question",
//                     "name": " What are examples of managed services?",
//                     "acceptedAnswer": {
//                         "@type": "Answer",
//                         "text": " Examples include:
// • Salesforce administration and enhancements
// • Automation of lead, opportunity, and service processes
// • Integration with ERPs and third - party applications
// • AI and analytics enablement using Data Cloud and Tableau
// • Release management and new feature enablement
// • Data quality and governance
// • Consulting and roadmap planning based on business goals"
// }
// },
// {
//     "@type": "Question",
//         "name": " What is the difference between SaaS and managed services?",
//             "acceptedAnswer": {
//         "@type": "Answer",
//             "text": " SaaS (Software as a Service) provides access to software — such as Salesforce on a subscription basis. Managed services, on the other hand, provide the expertise to continually optimize that software.
// In short:
// • SaaS = the platform
// • Managed services = the team ensuring the platform performs at its fullest potential
// Because software alone doesn’t drive transformation; what matters is how effectively it’s configured, adopted, and optimized."
//     }
// },
// {
//     "@type": "Question",
//         "name": "What operational areas do Salesforce managed services cover?",
//             "acceptedAnswer": {
//         "@type": "Answer",
//             "text": "They cover daily admin and enhancement requests, AI and automation (Einstein, flows), Sales Cloud & CPQ optimization, Service Cloud efficiency, Data Cloud & Marketing Cloud alignment, end-to-end integrations, data quality and governance, and analytics (Tableau/CRM Analytics)."
//     }
// },
// {
//     "@type": "Question",
//         "name": " How to choose a Salesforce managed services provider for your industry?",
//             "acceptedAnswer": {
//         "@type": "Answer",
//             "text": " Look for a provider that checks all these boxes:
// • Proven experience in your industry and Salesforce Cloud relevant to your business
// • Ability to support both core CRM and advanced AI - driven capabilities
// • Access to certified consultants rather than generic support teams
// • Flexible engagement models that scale with business needs
// • A continuous innovation approach instead of ticket - based servicing
// • Strong governance and security practices, not just development skills"
//     }
// },
// {
//     "@type": "Question",
//         "name": "Are AI capabilities part of managed services?",
//             "acceptedAnswer": {
//         "@type": "Answer",
//             "text": "Yes—modern managed services include AI-driven features such as predictive lead scoring, opportunity insights, churn probability, sentiment analysis, automated next-step recommendations, autonomous agents for service automation, and proactive opportunity intelligence."
//     }
// },
// {
//     "@type": "Question",
//         "name": "How do managed services handle data, security and governance?",
//             "acceptedAnswer": {
//         "@type": "Answer",
//             "text": "They implement role-based access controls, regular data cleansing and deduplication, compliance-ready governance, integration monitoring, periodic audits, and secure data flows between Salesforce and ERP/billing/support systems to ensure reliable insights."
//     }
// }
//     ]
//   }
    }

const faqs = [
    {
        "question": "What are managed services in Salesforce? (What exactly are managed services?)",
        "answer": "Managed services in Salesforce refer to ongoing expert support that helps businesses continuously optimize their CRM rather than just maintain it. Instead of handling everything internally, companies partner with certified Salesforce specialists who proactively improve workflows, fix issues, introduce new features, analyze data, and align Salesforce with evolving business goals. It's not break-fix support — it's continuous growth enablement."
    },
    {
        question: "What are the benefits of Salesforce managed services?",
        answer: [
            "Salesforce managed services help businesses unlock more value from their CRM investment by:",
            [
                "Improving user adoption and productivity",
                "Automating sales, marketing, and service workflows",
                "Reducing dependency on internal tech teams",
                "Lowering the cost of full-time in-house admin and developer roles",
                "Accelerating innovation with AI, analytics, and automation",
                "Ensuring security, compliance, and clean data. Over time, this leads to increased revenue, faster decision-making, and a CRM that evolves as the business scales. "
            ],

        ]
    },
    {
        "question": "What are examples of managed services?",
        "answer": [
            "Examples include:",
            [
                "Salesforce administration and enhancements",
                "Automation of lead, opportunity, and service processes",
                "Integration with ERPs and third-party applications",
                "AI and analytics enablement using Data Cloud and Tableau",
                "Release management and new feature enablement",
                "Data quality and governance",
                "Consulting and roadmap planning based on business goals"
            ]
        ]
    },
    {
        "question": "What is the difference between SaaS and managed services?",
        "answer": [
            "SaaS (Software as a Service) provides access to software — such as Salesforce on a subscription basis. Managed services, on the other hand, provide the expertise to continually optimize that software.",
            "In short:",
            [
                "SaaS = the platform",
                "Managed services = the team ensuring the platform performs at its fullest potential.Because software alone doesn’t drive transformation; what matters is how effectively it’s configured, adopted, and optimized.",
            ],

        ]
    },
    {
        "question": "How to choose a Salesforce managed services provider for your industry?",
        "answer": [
            "Look for a provider that checks all these boxes:",
            [
                "Proven experience in your industry and Salesforce Cloud relevant to your business",
                "Ability to support both core CRM and advanced AI-driven capabilities",
                "Access to certified consultants rather than generic support teams",
                "Flexible engagement models that scale with business needs",
                "A continuous innovation approach instead of ticket-based servicing",
                "Strong governance and security practices, not just development skills"
            ]
        ]
    },

]

const salesforceManaged = [
    "Most companies invest heavily in Salesforce, yet only a fraction unlock its real business value. The platform is powerful, but without continuous optimization, automation, data improvement, and AI-driven insights, it quietly becomes an under-utilized CRM instead of a revenue engine.",

    "This is where Salesforce Managed Services makes the real difference, not as “external support,” but as a revenue growth catalyst. What this really means is simple. Salesforce doesn’t transform the business on day one. It transforms the business every single day you improve it.",
]

const salesforceBusiness = [
    "Salesforce is constantly evolving with new AI releases, features, security models, updated APIs, automation options, and reimagined data models. However, internal teams often find themselves overwhelmed, managing daily operations, handling enhancement requests, fixing bugs, and rolling out new features. As a result, innovation often takes a back seat.",

    "Managed Services can address this gap by ensuring that Salesforce remains aligned with business needs without the delays associated with “budget cycles” or “large upgrade projects.”"
]

const revenueGrowth = [
    "Lead conversion depends on faster workflows and relevant data",
    "Sales velocity depends on automation and AI-based prioritization",
    "Renewal probability depends on strong customer visibility",
    "Upsell success depends on segmentation and insights"
]

const businessBiggestImpact = [
    "Sales cycles are slow or unpredictable",
    "Manual work blocks scale",
    "Reports exist but don’t drive decisions",
    "Customer service escalations are rising",
    "Integrations break during volume peaks",
    "The CRM is technically stable, but business value is stagnant"
]

const salesforceManagedSections = [
    {
        number: "1",
        title: "Daily Operations Without the Bottlenecks",
        items: [
            {
                heading: "Admin and Enhancement Requests",
                description:
                    "New custom fields, page layouts, user roles, workflows, validation rules, dashboards, and approval hierarchies — handled without waiting months."
            },
            {
                heading: "AI- and Automation-Based Productivity",
                description:
                    "Designing and deploying automations, flows, and Einstein recommendations to improve the speed of selling and reduce manual work."
            }
        ]
    },

    {
        number: "2",
        title: "Revenue-Focused Salesforce Optimization",
        items: [
            {
                heading: "Sales Cloud & CPQ Optimization",
                description:
                    "Better quoting cycles, pricing rules, discount strategies, product configuration, and renewal automation."
            },
            {
                heading: "Service Cloud Efficiency",
                description:
                    "Smarter assignment routing, case resolutions, knowledge management, SLA-based triggers, and workforce forecasting."
            },
            {
                heading: "Data Cloud & Marketing Cloud Alignment",
                description:
                    "Unified customer profiles, real-time segmentation, targeted campaigns, and activation workflows across channels."
            }
        ]
    },

    {
        number: "3",
        title: "Data, Integration & Governance for Reliable Insights",
        items: [
            {
                heading: "End-to-End Integration Management",
                description:
                    "Salesforce with ERP, billing, support systems, and external apps — built and continuously monitored."
            },
            {
                heading: "Data Quality & Security",
                description:
                    "Role-based access, data cleansing, deduplication, compliance-ready governance, and periodic audits."
            },
            {
                heading: "Analytics for Decisions That Matter",
                description:
                    "Tableau and CRM Analytics dashboards for forecasting, pipeline health, win/loss drivers, and customer success outcomes."
            }
        ]
    },

    {
        number: "4",
        title: "AI-Driven Innovation",
        text: "AI is now central to Salesforce, not optional. Managed Services ensures you don’t fall behind.",
        items: [
            {
                heading: "Einstein AI for Sales and Service",
                description:
                    "Predictive lead scoring, opportunity insights, churn probability, sentiment analysis, and automated next-step recommendations."
            },
            {
                heading: "Agentforce & Autonomous Agents",
                description:
                    "Deploying AI-powered agents to automate customer service operations, case resolution workflows, data entry, and triage."
            },
            {
                heading: "Proactive Opportunity Intelligence",
                description:
                    "AI flags revenue opportunities your team might otherwise miss, and prioritizes high-impact actions."
            }
        ]
    }
];

const tableData = [
    {
        requirement: "Admin + BA + Architect + Developer + AI Specialist",
        internal: "Expensive",
        managed: "Included"
    },
    {
        requirement: "Time to onboard the full team",
        internal: "3–9 months",
        managed: "Zero"
    },
    {
        requirement: "Expertise across clouds & AI",
        internal: "Limited",
        managed: "Full-spectrum"
    },
    {
        requirement: "Scalability",
        internal: "Difficult",
        managed: "Flexible"
    },
    {
        requirement: "Cost efficiency",
        internal: "Low",
        managed: "High"
    }
];


return (
    <section className="min-h-screen">
        <Seo
            title="Salesforce Managed Services: How SalesforceAgent+ Drives Growth"
            description="SalesforceAgent+ delivers AI-driven Managed Services for Salesforce designed to accelerate business outcomes, not just CRM maintenance."
            keywords=""
            canonical={
                "https://www.rialtes.com/insights/blogs/scale-with-salesforce-managed-services-salesforceagentplus/"
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
                    src="/images/blog/salesforce-managed-services-salesforceagent-plus.webp"
                    alt="Colorful flowing fiber optic lines with glowing dots representing data flow network connectivity and digital technology"
                    fill
                    priority
                />
            </div>
            <div className="xl:hidden block">
                <Image
                    src="/images/blog/salesforce-managed-services-salesforceagent-plus-mobile.webp"
                    alt="Colorful flowing fiber optic lines with glowing dots representing data flow network connectivity and digital technology"
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
                            <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                Managed Services</span>{" "}
                            <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>02 December 2025
                        </div>

                        <div>
                            <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                <BlogSocialIcons fullUrl={fullUrl} />
                            </div>
                        </div>
                    </div>

                    <div className="xl:mt-[60px] mt-[42px]">
                        <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">Salesforce Managed Services: The Secret to Scaling Revenue, Not Just Maintaining CRM</h1>

                        <div className="mt-[22px] xl:mt-[30px] ">
                            {
                                salesforceManaged.map((data, ind) => {
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
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Why Salesforce Managed Services Matter More Than Ever</h2>
                            <h3 className="text-black mt-[22px] xl:mt-[30px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold  ">Salesforce is changing fast and businesses need to keep up</h3>

                            <div className="mt-[22px] xl:mt-[20px] ">
                                {
                                    salesforceBusiness.map((data, ind) => {
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

                            <h3 className="text-black mt-[22px] xl:mt-[30px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold  ">Revenue growth depends on continuous CRM improvement</h3>

                            <p className="mt-[22px] xl:mt-[20px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Every revenue metric ties back to CRM performance:</p>

                            <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                {revenueGrowth.map((point, i) => (
                                    <li key={i} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{point}</li>
                                ))}
                            </ul>

                            <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Salesforce Managed Services fuel that system every day.</p>

                        </div>

                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">What Are Managed Services in Salesforce?</h2>
                            <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"><a href='https://www.rialtes.com/services/application-services/salesforce-managed-services-provider-salesforceagentplus/' className='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Salesforce Managed Services</a> is an ongoing partnership that provides dedicated expertise to continuously optimize Salesforce, implement new capabilities, manage integrations, automate processes, and capture revenue opportunities without expanding internal IT teams.</p>
                            <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">In other words:</p>
                            <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Instead of using Salesforce “as is,” Managed Services keep improving it month after month based on business goals.</p>






                        </div>

                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">What Salesforce Managed Services Actually Include</h2>
                            <div className="mt-[40px] space-y-[60px]">

                                {
                                    salesforceManagedSections.map((section, i) => (
                                        <div key={i}>

                                            <div className="flex items-center gap-6">
                                                <span className="text-black 4xl:text-[43px] 2xl:text-[36px] xl:text-[30px] md:text-[26px] text-[24px] font-bold">
                                                    {section.number}
                                                </span>
                                                <div className="xl:h-12 h-8 border-l-2 border-gray-400"></div>
                                                <h3 className="text-black 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold leading-tight">
                                                    {section.title}
                                                </h3>
                                            </div>



                                            {section.text && (
                                                <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                    {section.text}
                                                </p>
                                            )}


                                            <div className="grid md:grid-cols-3 gap-8 mt-[10px] md:mt-[25px] xl:mt-[30px]">
                                                {section.items.map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`
                                                                 ${idx !== 0
                                                                ? "border-t border-gray-300 md:border-t-0 md:border-l md:border-gray-300 md:pl-10"
                                                                : "border-t-0 pl-0"
                                                            }
                                                              `}
                                                    >
                                                        <h4 className="text-[#006FBE] font-semibold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-6 md:mt-0 ">
                                                            {item.heading}
                                                        </h4>
                                                        <p className="mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                ))}

                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className="md:mt-[90px] mt-[40px]">

                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                Managed Services vs Internal Salesforce Hiring: The Reality
                            </h2>


                            <div className="w-full mt-[22px] xl:mt-[30px] overflow-x-auto">
                                <table className="w-full table-fixed border-collapse">

                                    <thead>
                                        <tr className="bg-[#E3E3E3] text-black font-medium 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[14px]">

                                            <th className="xl:w-[50%] md:w-[45%] w-[40%] text-left py-3 pl-4">Requirement</th>
                                            <th className="xl:w-[25%] md:w-[25%] w-[30%] text-left py-3 pl-6">Internal Hiring</th>
                                            <th className="xl:w-[25%]  md:w-[30%] w-[30%] text-left py-3 pl-4">Managed Services</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {tableData.map((row, idx) => (
                                            <tr key={idx} className="border-b border-black ">

                                                <td className="py-3 font-medium align-top 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[14px] xl:pr-[220px] md:pr-[40px]">
                                                    {row.requirement}
                                                </td>

                                                <td className="py-3 font-medium pl-6 align-top 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[14px]">
                                                    {row.internal}
                                                </td>

                                                <td className="py-3 font-medium pl-4 align-top 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[14px]">
                                                    {row.managed}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>



                            <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                Managed Services isn’t outsourcing.</p>
                            <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">It’s access to the exact skills you need, exactly when you need them.
                            </p>

                        </div>

                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">When Businesses See the Biggest Impact</h2>

                            <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">You’ll see managed services transform Salesforce fastest when:</p>
                            <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                {businessBiggestImpact.map((point, i) => (
                                    <li key={i} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{point}</li>
                                ))}
                            </ul>
                            <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">For many organizations, Salesforce isn’t a lost cause, it’s just underperforming at the mment.</p>


                        </div>

                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                Salesforce Isn’t a One-Time Project; It’s a Revenue Engine
                            </h2>

                            <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                The companies that scale fastest don’t treat Salesforce as software.
                                They treat it as the operational core of revenue, constantly improving,
                                continuously automated, always aligned to strategy.
                            </p>

                            <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                And that’s where SalesforceAgent+ does its magic.
                            </p>


                            <div className="relative w-full mt-[45px] ">
                                <img
                                    src="/images/blog/ad-webinar-banner.webp"
                                    alt="Agentforce"
                                    className="w-full h-auto object-cover "
                                />


                                <div className="absolute top-[14%] left-[5%] w-[40%] hidden md:block">

                                    <p className="text-black font-bold 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] md:text-[14px] leading-tight">
                                        Discover the Agentic Capabilities of Agentforce
                                    </p>

                                    <p className="text-black mt-4 4xl:text-[22px] 2xl:text-[19px] xl:text-[18px] md:text-[14px] leading-relaxed">
                                        See how your teams can steer every customer interaction using data, AI,
                                        and automation—from lead to loyalty, all inside one connected platform
                                    </p>

                                    <button className="4xl:mt-6 2xl:mt-9 xl:mt-5 md:mt-3 bottom-0 bg-[#006FBE] text-white px-6 py-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[14px] font-semibold">
                                        Watch the Webinar
                                    </button>
                                </div>
                            </div>


                            <div className="block md:hidden  bg-slate-200 p-4">

                                <p className="text-black font-bold text-[16px] leading-tight">
                                    Discover the Agentic Capabilities of Agentforce
                                </p>

                                <p className="text-black mt-2 text-[16px] leading-relaxed">
                                    See how your teams can steer every customer interaction using data, AI,
                                    and automation—from lead to loyalty, all inside one connected platform
                                </p>

                                <button className="mt-4 bg-[#006FBE] text-white px-4 py-2 text-[14px] font-semibold">
                                    Watch the Webinar
                                </button>
                            </div>


                            <p className="mt-[40px] xl:mt-[45px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                <a href='https://www.rialtes.com/services/application-services/salesforce-managed-services-provider-salesforceagentplus/' className='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>SalesforceAgent+</a> delivers AI-driven Managed Services designed specifically to
                                accelerate business outcomes, not just CRM maintenance. From automation and
                                integrations to analytics, Data Cloud activation, and AI agents — the model
                                ensures Salesforce keeps getting smarter month after month.
                            </p>

                            <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                Instead of planning “big CRM overhauls” every two years, you get ongoing
                                growth, better adoption, faster selling, and higher customer lifetime
                                value — without increasing internal workload.
                            </p>

                            <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                If Salesforce is already central to your business, SalesforceAgent+ makes sure
                                it becomes central to your success.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <section className="xl:mt-[80px] mt-[40px] custom-container">
            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Scale Your Company’s Revenue with Salesforce Managed Services
            </h2>
            <div className="mt-[29px] xl:mt-[30px]">
                <FAQAccordion faqData={faqs} />
            </div>
        </section>

        <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
            <FilteredBlogCarousel url={currUrl} />
        </section>
    </section>
)
}