"use client";
import Image from "next/image";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import Link from "next/link";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Beyond Robotic Automation: Why Agents Are the Future of Smart Manufacturing",
    "description": "Agentforce brings in autonomous agents that close the gap between production and experience. That means fewer silos, faster decisions, and smarter systems.",
    "image": "https://www.rialtes.com/images/blog/byond-robotics-desktop-baner.webp",
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
        "@id": " https://www.rialtes.com/insights/blogs/why-ai-agents-are-the-future-of-smart-manufacturing/"
    },
    "datePublished": "2025-09-01",
    "mainEntity": {
        "@type": "FAQPage",
        "name": "Smart Manufacturing with AI Agents FAQs",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What makes AI agents better than RPA in manufacturing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "RPA handles repetitive tasks based on rules. AI agents understand context, learn from data, and act across systems like ERP, CRM, and IoT—making them better suited for dynamic manufacturing challenges."
                }
            },
            {
                "@type": "Question",
                "name": "Can I keep my existing automation setup and add Agentforce?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Agentforce enhances what you already use by layering intelligence over existing systems. You don’t need to rip and replace."
                }
            },
            {
                "@type": "Question",
                "name": "What kinds of manufacturing processes benefit most from AI agents?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When augmented by agents, customer service, production scheduling, maintenance, order fulfillment, quality control, and supply chain monitoring all see major gains."
                }
            },
            {
                "@type": "Question",
                "name": "How long does deploying Agentforce in a real-world factory take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Timelines vary, but most manufacturers start seeing value within weeks by starting with one or two focused use cases—like service case automation or supply chain alerts."
                }
            },
            {
                "@type": "Question",
                "name": "Is Agentforce secure for regulated industries like aerospace or pharma?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Built on Salesforce, Agentforce adheres to enterprise-grade security standards and can be configured to comply with industry-specific regulations."
                }
            }
        ]
    }
}
const blogs = [
    {
        id: 1,
        image: "/images/blog/blog-1.webp",
        category: "Salesforce Agentforce",
        industry: "Generic",
        date: "30 Sept 2024",
        url: "how-salesforce-agentforce-actually-works",
        title: "How Salesforce Agentforce Actually Works",
        description: "Salesforce Agentforce, although a newer addition to the Salesforce ecosystem, is making rounds, particularly in organizations that deal with large teams of agents, such as sales agents, customer service representatives, and field service personnel.",
    },
    {
        id: 2,
        image: "/images/blog/blog-2.webp",
        category: "Salesforce Agentforce",
        industry: "Generic",
        date: "21 Oct 2024",
        title: "The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce",
        description: "As businesses scale, the complexity of managing customer interactions multiplies, driving the need for more intelligent and streamlined support systems.  Salesforce Agentforce provides a robust platform for customer service automation, now enhanced by the groundbreaking Atlas Reasoning Engine.",
    },
    {
        id: 4,
        image: "/images/blog/blog-4.webp",
        category: "Salesforce Agentforce",
        industry: "Generic",
        date: "25 Nov 2024",
        title: "Agentforce Testing Center: Redefining AI Testing with Synthetic Data",
        description: "Salesforce has introduced a new feature called Testing Center within its agentic AI platform, Agentforce. This addition allows enterprise users to test and monitor AI agents before deploying them in production.",
    },
    {
        id: 5,
        image: "/images/blog/blog-5.webp",
        category: "SAP SuccessFactors",
        industry: "Human Resources",
        date: "24 Dec 2024",
        title: "How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration",
        description: "Seamless integration between enterprise applications offers improved collaboration, efficiency, and productivity. Integrating SAP SuccessFactors with Microsoft Office 365 combines the strengths of a leading human experience management (HXM) solution and a robust suite of productivity tools.",
    },
    {
        id: 6,
        image: "/images/blog/blog-6.webp",
        category: "Cloud Green Technology",
        industry: "Agriculture",
        date: "17 Sept 2024",
        title: "Agriculture 4.0. How Do Digital Technologies Transform Farming for a Better Tomorrow?",
        description: "Agriculture plays a significant role in India’s growing economy and its future cannot be accomplished without digital tools and technological innovation.",
    },
    {
        id: 7,
        image: "/images/blog/blog-7.webp",
        category: "SAP SuccessFactors",
        industry: "Human Resources",
        date: "29 Oct 2024",
        title: "SAP SuccessFactors Performance and Goal Management",
        description: "Achieving your organization’s goals is a key responsibility your entire team shares. When your team’s strategy aligns with its goals and the broader organizational objectives, doing the right thing becomes instinctive.",
    },
];
const blogMainData = [
    "Industrial automation isn’t a new concept. Robots have been welding, assembling, and packaging on factory floors for decades. But here’s the shift: automation is no longer just about machines moving faster. It’s about systems thinking smarter. But most factories still rely on automation that follows fixed rules, limited to one job, one system, and zero learning.",
    "Here’s the issue: Manufacturers today face a complex web of global demand shifts, compliance pressure, customer personalization needs, and fragile supply chains. Solving for that requires more than just faster arms and pre-programmed bots.",
]
const whyNeedShiftData = [
    "In addition to executing, they understand goals and work toward them.",
    "They operate across CRMs, ERPs, MES, and IoT systems, not just one machine.",
    "They learn from data, customer feedback, and historical context and adapt accordingly."
]
const agentforceData = [
    "Monitor production lines for anomalies in real - time",
    "Escalate supply chain disruptions before they hit order fulfillment",
    "Auto - route service tickets based on part availability, warranty status, and product history",
    "Guide floor technicians with contextual knowledge and step - by - step workflows",
]
const manufacturingAreasData = [
    {
        "title": "Production That Performs and Predicts",
        "desc": "Think about the last time a machine failed mid-run. Chances are, your maintenance team scrambled, customer orders got delayed, and no one saw it coming.With Agentforce, AI agents track machine telemetry, maintenance records, and real-time output. They spot performance degradation before failure and alert technicians, reschedule impacted orders, and notify customers proactively",
    },
    {
        "title": "Connected Supply Chains That Think Ahead",
        "desc": "Supply chain fragility is a given now. From raw material volatility to transport delays, the system is stretched. What agents do differently:",
        "list": [
            "Monitor supplier reliability, lead time variability, and fulfillment status",
            "Predict bottlenecks and suggest alternate sourcing",
            "Notify stakeholders automatically, including account managers and customers, when disruptions threaten delivery"
        ],
        "desc2": "Unlike static dashboards or manual escalations, agents close the loop from detection to communication to resolution."
    },
    {
        "title": "Smarter, Self-Triage Customer Support",
        "desc": "In manufacturing, customer service is more about accuracy, context, and speed. Agentforce agents auto-triage cases based on urgency, product type, customer tier, and SLA terms. They pre-fill tickets with data like order ID, warranty status, and product configuration. Route to the best available agent or handle resolution autonomously for simple issues.",
        "desc2": "Whether it’s scheduling a replacement, issuing documentation, or answering a claim, agents shrink response times and boost customer satisfaction."
    },
    {
        "title": "Post-Sale Intelligence That Drives Loyalty",
        "desc": "The factory might stop after delivery, but your customer journey doesn’t.",
        "desc3": "Agents continue working post-sale to:",
        "list": [
            "Track usage patterns from connected products",
            "Identify accounts at churn risk based on behavior or sentiment",
            "Recommend personalized follow-ups, preventive maintenance, or upsell opportunities"
        ],
        "desc2": "This is where real customer experience is won, not just in what you build, but how you support and evolve with the customer over time."
    },
    {
        "title": "AI That Unifies OEMs, Distributors, and Channel Partners",
        "desc": "Most manufacturers don’t sell directly. You have partners, resellers, field teams, and support providers, all contributing to the customer experience (or fracturing it). Everyone acts from the same playbook, and customers get the same quality of support, regardless of who delivers it.",
        "desc3": "Agentforce agents bring consistency across that ecosystem:",
        "list": [
            "Provide self-service for distributors to check inventory, request support, or file claims",
            "Standardize SLAs and workflows across all partner channels",
            "Monitor partner response times and surface red flags in customer experience"
        ],
    }
]
const agentforceTable = [
    {
        robotic: "Fixed rules, no learning",
        agents: "Learns from outcomes, adapts in real time",
    },
    {
        robotic: "Siloed task execution",
        agents: "Cross-functional orchestration",
    },
    {
        robotic: "Requires manual escalation",
        agents: "Autonomous triage, routing, and resolution",
    },
    {
        robotic: "No customer context",
        agents: "Embedded in sales, service, and support systems",
    },
    {
        robotic: "Great for precision",
        agents: "Crucial for responsiveness and foresight",
    },
];
const agenticData = [
    {
        "highlight": "self-service agent",
        "desc": "Add a self-service agent for distributors to check stock or raise claims."
    },
    {
        "highlight": "monitoring agent",
        "desc": "Deploy a monitoring agent to flag machine health issues before they escalate."
    },
    {
        "highlight": "routing agent",
        "desc": "Let a routing agent triage service cases faster based on real context."
    }
]
const readyToUpgradeData = [
    "Agentforce brings in autonomous agents that close the gap between production and experience. That means fewer silos, faster decisions, and smarter systems that understand what the customer needs—even when the customer hasn’t said it yet.",
    "In short?",
    "Bots follow instructions.",
    "Agents follow intent.",
    "And that’s the leap manufacturers need to thrive in the next decade.",
]
const faqData = [
    {
        "question": "1. What makes AI agents better than RPA in manufacturing?",
        "answer": [
            "RPA handles repetitive tasks based on rules. AI agents understand context, learn from data, and act across systems like ERP, CRM, and IoT—making them better suited for dynamic manufacturing challenges."
        ]
    },
    {
        "question": "2. Can I keep my existing automation setup and add Agentforce?",
        "answer": [
            "Yes. Agentforce enhances what you already use by layering intelligence over existing systems. You don’t need to rip and replace."
        ]
    },
    {
        "question": "3. What kinds of manufacturing processes benefit most from AI agents?",
        "answer": [
            "When augmented by agents, customer service, production scheduling, maintenance, order fulfillment, quality control, and supply chain monitoring all see major gains."
        ]
    },
    {
        "question": "4. How long does deploying Agentforce in a real-world factory take?",
        "answer": [
            "Timelines vary, but most manufacturers start seeing value within weeks by starting with one or two focused use cases—like service case automation or supply chain alerts."
        ]
    },
    {
        "question": "5. Is Agentforce secure for regulated industries like aerospace or pharma?",
        "answer": [
            "Yes. Built on Salesforce, Agentforce adheres to enterprise-grade security standards and can be configured to comply with industry-specific regulations."
        ]
    }
]

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/why-ai-agents-are-the-future-of-smart-manufacturing/";

    return (
        <div className="min-h-screen">
            <Seo
                title="Beyond Automation: Why AI Agents Power Smart Manufacturing"
                description="Agentforce brings in autonomous agents that close the gap between production and experience. That means fewer silos, faster decisions, and smarter systems."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/why-ai-agents-are-the-future-of-smart-manufacturing/"
                }
            />

            <Script
                id="schema-copilots"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/byond-robotics-desktop-baner.webp"
                        alt="ai that listens"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/byond-robotics-mobile-banner.webp"
                        alt="ai that listens"
                        priority
                        height={0}
                        width={0}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>

            <section className="custom-container">
                <div className="py-10 bg-white">
                    <div>
                        <div className="flex flex-col md:flex-row justify-between text-black items-center  xl:max-w-[1084px] xl:w-[1084px]">
                            <div className="sm:mb-0 mb-6">
                                <span className="text-[#0092E0]">Artificial Intelligence</span>{" "}
                                <span className="text-[#ACACAC]"> | </span>01 September 2025
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-6">
                                    <div className="max-w-[40px]">
                                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                                            fullUrl
                                        )}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            {" "}
                                            <Image
                                                src="/images/case-studies/linkedin.svg"
                                                alt="LinkedIn"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                priority
                                            />
                                        </a>
                                    </div>
                                    <div className="max-w-[40px]">
                                        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            {" "}
                                            <Image
                                                src="/images/case-studies/twitter.svg"
                                                alt="Twitter"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                priority
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6"></div>
                    <div className="grid xl:grid-cols-12">
                        <div className="xl:col-span-10 col-span-12">
                            <h1 className="text-[#000000]  pb-6 leading-tight text-[26px] xl:text-[42px] 2xl:text-[48px] 4xl:text-[60px] md:text-[28px]">
                                Beyond Robotic Automation: Why Agents Are the Future of Smart Manufacturing
                            </h1>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12">
                        <div className="col-span-9">
                            <h3 className="text-[16px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px] mt-2 font-bold">Robotic Automation Solves Tasks. AI Agents Solve Problems.</h3>
                            {
                                blogMainData.map((data, ind) => {
                                    return (
                                        <p key={ind} className="mt-3 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data}</p>
                                    )
                                })
                            }
                            <p className="mt-3 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">That's where AI agents can help you incorporate intelligence that can adapt, reason, and act across the value chain. The next generation of  <Link href={"https://www.rialtes.com/insights/blogs/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions/"}><span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">smart manufacturing </span></Link> transcends automation and becomes agentic."</p>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">Why You Need to Shift from Static Automation to Agentic Intelligence?</h2>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">Most robotic systems excel at handling repetitive tasks, such as welding or packing. But ask them to respond to a late shipment, coordinate across departments, or update a customer about a delay? They freeze.</p>
                            <p className="mt-1 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">Now compare that with AI agents, like those built into Agentforce:</p>
                            <UnorderedList arrName={whyNeedShiftData} ulClassName="mt-3 pl-[42px] list-disc 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[30px] space-y-2" liClassName="" />
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">So, while a bot assembles parts, an agent detects a shortage, reroutes a delivery, updates the customer, and alerts procurement before the line stops. That’s intelligent orchestration.</p>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">Agentforce: The Intelligent Layer Over Your Factory</h2>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">Agentforce isn’t just AI layered onto your tech stack. It’s a network of autonomous, outcome-driven agents designed for real-world manufacturing complexity. These agents are embedded into Salesforce's Manufacturing Cloud, CPQ, Service, and Field Service systems and extended to your MES, IoT platforms, and legacy apps.</p>
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]"><strong>Agentforce, </strong>for example, lets manufacturers deploy AI agents that can:</p>
                            <UnorderedList arrName={agentforceData} ulClassName="mt-3 pl-[42px] list-disc 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[30px] space-y-2" liClassName="" />
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">Let’s look at how they work across core manufacturing areas:</p>
                            {
                                manufacturingAreasData.map((data, ind) => {
                                    return (
                                        <div key={ind}>
                                            <h3 className="text-[16px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px] mt-8 font-bold">{ind + 1}. {data.title}</h3>
                                            <p className="mt-3 pl-[26px] 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc}</p>
                                            {data.desc3 && <p className="mt-1 pl-[26px] 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc3}</p>}
                                            {
                                                data.list && <UnorderedList arrName={data.list} ulClassName="mt-3 pl-[48px] list-disc 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[30px] space-y-2" liClassName="" />
                                            }
                                            {data.desc2 && <p className="mt-3 pl-[26px] 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc2}</p>}
                                        </div>
                                    )
                                })
                            }

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">What Agentforce Unlocks That Bots Never Could</h2>
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">Let’s recap how agentic AI goes further than robotic automation:</p>
                            <div className="w-full max-w-3xl mx-auto py-10">
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-gray-300 text-left text-sm md:text-base">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="border border-gray-300 p-3 font-semibold">
                                                    Robotic Automation
                                                </th>
                                                <th className="border border-gray-300 p-3 font-semibold">
                                                    AI Agents (Agentforce)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {agentforceTable.map((row, idx) => (
                                                <tr key={idx}>
                                                    <td className="border border-gray-300 p-3">{row.robotic}</td>
                                                    <td className="border border-gray-300 p-3">{row.agents}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <p className="mt-1 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">The true power of agents is that they improve over time. Every interaction, be it a field fix, a ticket resolution, or a customer response, feeds into the model. Agents get smarter. Recommendations get sharper. Efficiency compounds.</p>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">McKinsey found that AI-driven companies in manufacturing see a 15–20% improvement in throughput and up to 50% reductions in unplanned downtime. Those are numbers robotic automation alone can’t touch.</p>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">How to Get Started with Agentic AI in Manufacturing</h2>
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">You don’t need to overhaul everything on Day 1. Start where it matters:</p>
                            <ul className="mt-4 pl-[36px] list-disc 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] space-y-2">
                                {agenticData.map((item, idx) => {
                                    const [before, ...afterParts] = item.desc.split(item.highlight);
                                    const after = afterParts.join(item.highlight);

                                    return (
                                        <li key={idx}>
                                            {before}
                                            <strong>{item.highlight}</strong>
                                            {after}
                                        </li>
                                    );
                                })}
                            </ul>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">These agents plug directly into your Salesforce stack—CPQ, Service Cloud, Manufacturing Cloud, and scale as you grow.</p>

                            <h2 className="pb-3 font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">Ready to Upgrade from Automation to Intelligence?</h2>
                            {
                                readyToUpgradeData.map((data, ind) => {
                                    return (
                                        <p className="mt-2 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]" key={ind}>{data}</p>
                                    )
                                })
                            }
                            <p className="mt-2 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                "Rialtes helps manufacturers implement Agentforce across operations, sales, and service. As a  <Link href={"https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/"}><span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">Salesforce Crest Partner </span></Link>, we bring the strategy, systems, and support to make AI agents real and fast.",
                            </p>
                            <p className="mt-1 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] font-bold">Let’s build smarter factories with thinking agents.</p>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">FAQs: Smart Manufacturing with AI Agents</h2>
                            <FAQAccordion faqData={faqData} />

                        </div>
                    </div>
                </div>
            </section>
            {/* Latest Blogs */}
            <div className="custom-container lg:pr-0 pb-10 mt-2">
                <BlogsCarousel slides={blogs} />
            </div>
        </div>
    )
}
