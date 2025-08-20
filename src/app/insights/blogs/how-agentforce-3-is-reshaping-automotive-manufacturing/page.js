"use client";
// pages/blog-detail.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogsCarousel from "@/app/[locale]/components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";

const schemaData = {

    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.rialtes.com/insights/blogs/how-agentforce-3-is-reshaping-automotive-manufacturing/"
    },
    "headline": "Discover How Salesforce Agentforce 3.0 is Reshaping Automotive Manufacturing in Real-time",
    "description": "Agentforce for automotive brings intelligent automation to factory floors—delivering real-time visibility, predictive quality, and scalable AI-driven operations across automotive manufacturing.",
    "image": "https://www.rialtes.com/images/blog/agentforce-3.0-desktop-banner.webp",
    "author": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rialtes",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.rialtes.com/images/homepage/logo.svg"
        }
    },
    "datePublished": "2025-07-29",
    "articleSection": "AI Automation",
    "url": "https://www.rialtes.com/insights/blogs/how-agentforce-3-is-reshaping-automotive-manufacturing/",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is Agentforce for Automotive?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Agentforce for Automotive is Salesforce’s AI-powered solution tailored for automotive manufacturers. It automates and optimizes key workflows across production, supply chain, quality, and compliance using Agentforce 3.0."
            }
        },
        {
            "@type": "Question",
            "name": "What makes Agentforce 3.0 valuable for automotive manufacturers?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Agentforce 3.0 brings intelligent automation to every part of the automotive factory floor, offering real-time visibility, predictive insights, smart agent coordination, and prebuilt industry workflows."
            }
        },
        {
            "@type": "Question",
            "name": "How does Agentforce integrate with existing automotive systems?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Agentforce for automotive integrates with ERP, MES, PLM, and IoT systems using Model Context Protocol, MuleSoft APIs, and Heroku AppLink, ensuring seamless connectivity with legacy and custom tools."
            }
        },
        {
            "@type": "Question",
            "name": "What use cases exist for Agentforce in automotive?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use cases include automated inspection summaries, predictive maintenance triggers, parts shortage alerts, service appointment agents, warranty claims validation, and AI-powered quality control agents."
            }
        },
        {
            "@type": "Question",
            "name": "What is the future of AI in automotive manufacturing?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI is transforming the automotive industry through smart factory automation, autonomous operations, adaptive supply chains, in-vehicle intelligence, and AI-driven diagnostics. Agents will play a pivotal role in this future."
            }
        }
    ]
};
const blogs = [
    {
        id: 1,
        image: "/images/blog/blog-1.webp",
        category: "Salesforce Agentforce",
        industry: "Generic",
        date: "30 Sept 2024",
        url: "how-salesforce-agentforce-actually-works",
        title: "How Salesforce Agentforce Actually Works",
        description:
            "Salesforce Agentforce, although a newer addition to the Salesforce ecosystem, is making rounds, particularly in organizations that deal with large teams of agents, such as sales agents, customer service representatives, and field service personnel.",
    },
    /* {
        id: 2,
        image: "/images/blog/blog-2.webp",
        category: "Salesforce Agentforce",
        industry: "Generic",
        date: "21 Oct 2024",
        title: "The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce",
        description: "As businesses scale, the complexity of managing customer interactions multiplies, driving the need for more intelligent and streamlined support systems.  Salesforce Agentforce provides a robust platform for customer service automation, now enhanced by the groundbreaking Atlas Reasoning Engine.",
      }, */
    {
        id: 3,
        image: "/images/blog/blog-3.webp",
        category: "Salesforce Agentforce",
        industry: "Generic",
        date: "28 Oct 2024",
        title:
            "Agents vs. Copilots vs. Bots: What’s the Difference and Why It Matters",
        description:
            "Tools like Agentforce are redefining how we view digital assistants, bringing distinctions between Agents, Copilots, and Bots to the forefront. The terms are frequently used within artificial intelligence-driven automation and conversational interfaces, each serving a distinct purpose.",
    },
    {
        id: 4,
        image: "/images/blog/blog-4.webp",
        category: "Salesforce Agentforce",
        industry: "Generic",
        date: "25 Nov 2024",
        title:
            "Agentforce Testing Center: Redefining AI Testing with Synthetic Data",
        description:
            "Salesforce has introduced a new feature called Testing Center within its agentic AI platform, Agentforce. This addition allows enterprise users to test and monitor AI agents before deploying them in production.",
    },
    {
        id: 5,
        image: "/images/blog/blog-5.webp",
        category: "SAP SuccessFactors",
        industry: "Human Resources",
        date: "24 Dec 2024",
        title:
            "How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration",
        description:
            "Seamless integration between enterprise applications offers improved collaboration, efficiency, and productivity. Integrating SAP SuccessFactors with Microsoft Office 365 combines the strengths of a leading human experience management (HXM) solution and a robust suite of productivity tools.",
    },
    {
        id: 6,
        image: "/images/blog/blog-6.webp",
        category: "Cloud Green Technology",
        industry: "Agriculture",
        date: "17 Sept 2024",
        title:
            "Agriculture 4.0. How Do Digital Technologies Transform Farming for a Better Tomorrow?",
        description:
            "Agriculture plays a significant role in India’s growing economy and its future cannot be accomplished without digital tools and technological innovation.",
    },
    {
        id: 7,
        image: "/images/blog/blog-7.webp",
        category: "SAP SuccessFactors",
        industry: "Human Resources",
        date: "29 Oct 2024",
        title: "SAP SuccessFactors Performance and Goal Management",
        description:
            "Achieving your organization’s goals is a key responsibility your entire team shares. When your team’s strategy aligns with its goals and the broader organizational objectives, doing the right thing becomes instinctive.",
    },

    // Add more blog objects as needed
];

export default function Page() {

    const faqs = [
        {
            question: "1. What is Agentforce for Automotive?",
            answer: [
                "Agentforce for Automotive is Salesforce’s AI-powered solution tailored for automotive manufacturers. It automates and optimizes key workflows across production, supply chain, quality, and compliance using Agentforce 3.0."
            ]
        },
        {
            question: "2. What makes Agentforce 3.0 valuable for automotive manufacturers?",
            answer: [
                "Agentforce 3.0 brings intelligent automation to every part of the automotive factory floor. It offers:",
                [
                    "Real-time operational visibility",
                    "Smart agent coordination across teams",
                    "Predictive insights and faster decision-making",
                    "Prebuilt industry workflows for quicker deployment"
                ]
            ]
        },
        {
            question: "3. How does Agentforce integrate with existing automotive systems?",
            answer: [
                "Agentforce for automotive integrates easily with legacy systems. It connects to ERP, MES, PLM, and IoT platforms using:",
                [
                    "Model Context Protocol (MCP)",
                    "MuleSoft for API integration",
                    "Heroku AppLink for custom tool connectivity"
                ]
            ]
        },
        {
            question: "4. What use cases exist for Agentforce in automotive?",
            answer: [
                "Top use cases of Agentforce for automotive include:",
                [
                    "Automated inspection summaries",
                    "Predictive maintenance scheduling",
                    "Defect and anomaly detection",
                    "Intelligent service appointment agents",
                    "Warranty claims validation and processing"
                ]
            ]
        },
        {
            question: "5. What is the future of AI in automotive?",
            answer: [
                "AI will revolutionize the automotive industry across operations and experiences. Key trends include:",
                [
                    "Smart factory automation with predictive quality checks",
                    "Autonomous driving systems powered by real-time data",
                    "Adaptive supply chains with AI-driven logistics",
                    "Personalized in-vehicle features using generative AI",
                    "AI-powered diagnostics and maintenance"
                ]
            ]
        }
    ];



    const features = [
        {
            title: "Automated vehicle servicing scheduling agents",
            description:
                "that proactively reach out to customers, suggest service appointments based on usage patterns or diagnostics data, and coordinate bookings with available technicians.",
        },
        {
            title: "Intelligent warranty claims validation agents",
            description:
                "that analyze repair data, service history, and contract terms to instantly approve or escalate claims.",
        },
        {
            title: "Real-time logistics updates and incident reporting agents",
            description:
                "that track parts shipments, detect delays or disruptions across the supply chain, and trigger automated workflows to reroute orders or notify relevant teams.",
        },
    ];

    const featuresData = [
        {
            icon: "/images/blog/realtime.webp",
            title: "Real-time operational visibility",
            description:
                "lets factory managers monitor performance metrics, machine statuses, and agent activity from a centralized Command Center, helping to prevent disruptions before they escalate.",
        },
        {
            icon: "/images/blog/ai.webp",
            title: "AI-powered agent collaboration across systems",
            description:
                "allows different parts of the manufacturing workflow—design, production, logistics, and services to work together seamlessly through intelligent agents that act as digital team members, not just taskbots.",
        },
        {
            icon: "/images/blog/faster.webp",
            title: "Faster diagnostics and resolution of production issues",
            description:
                "are enabled by agents that can trace faults across systems, recommend fixes, and even initiate workflows to schedule maintenance or reroute tasks, thereby minimizing downtime.",
        },
        {
            icon: "/images/blog/better.webp",
            title: "Better quality control and compliance tracking",
            description:
                "are accomplished through smart agents that flag deviations, analyze defect patterns, and ensure every product meets regulatory and internal standards, with audit trails and AI-driven insights.",
        },
        {
            icon: "/images/blog/deeper.webp",
            title: "Deeper integration with supply chain and customer systems",
            description:
                "lets automotive OEMs and suppliers connect the dots across procurement, warehousing, shipping, and even after-sales service, making operations more agile, transparent, and resilient.",
        },
    ];

    const fullUrl =
        "https://www.rialtes.com/insights/blogs/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions";

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Agentforce 3.0 for Automotive Manufacturing Success | Rialtes"
                description="Agentforce for Automotive is transforming vehicle production with AI-powered agents that enhance workflows, compliance, and agility on the factory floor."
                canonical={"  https://www.rialtes.com/insights/blogs/how-agentforce-3-is-reshaping-automotive-manufacturing/"}
            />

            <Script
                id="schema-discover"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <section className="relative  h-[350px] md:h-[400px]  4xl:h-[650px] 2xl:h-[500px]">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/blog/agentforce-3.0-desktop-banner.webp"
                        alt="Discover AgentExchange"
                        fill
                        priority
                    />
                </div>

                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/blog/agentforce-3.0-mobile.webp"
                        alt="Discover AgentExchange"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            </section>

            <section
                className="
       custom-container"
            >
                <div className="pt-10 bg-white">
                    <div className=" mx-auto">
                        <div className="flex flex-col md:flex-row justify-between text-black items-center max-w-[1084px] xl:w-[1084px]">
                            <div className="sm:mb-0 mb-6">
                                <span className="text-[#0092E0]">Agentforce</span>
                                <span className="text-[#ACACAC]"> | </span>29 July 2025
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-6">
                                    <div className="max-w-[40px]">
                                        <a
                                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                                                fullUrl
                                            )}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
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
                                        <a
                                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                                fullUrl
                                            )}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
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
                    <div className=" mx-auto">
                        <h1 className="text-[#000000] leading-tight text-[26px] 2xl:text-[48px] 4xl:text-[60px] xl:text-[42px] md:text-[28px] 
                         xl:w-[1000px] 4xl:w-[1150px] pb-6">
                            How Agentforce 3.0 is Reshaping Automotive Manufacturing
                        </h1>
                    </div>

                    <div className=" mx-auto">
                        <div className="max-w-[1084px] 4xl:w-[1084px] 2xl:w-[950px] xl:w-[850px]">
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                Salesforce has <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.salesforce.com/in/news/press-releases/2025/06/23/agentforce-3-announcement/">launched</Link>  Agentforce 3.0 — and it’s a significant leap forward. Agentforce has been a key part of Salesforce's AI strategy since its launch in September 2024. Since Agentforce 2.0's December release and Agentforce 2dx in March, the updates continue with the launch of Agentforce 3.0, marking another major milestone.
                            </p>

                            <p className="text-black mt-3 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">
                                Not in the exaggerated “overnight transformation” sense, but in the practical, measurable improvements that directly impact the professionals managing and optimizing AI in automotive production  every day. With over 200 prebuilt agent actions, Agentforce 3.0 significantly advances the operationalization of intelligent automation across core workflows.
                                While much of the external focus remains on headline-grabbing AI features, the real strategic value of this release lies in its ability to bridge the gap between visionary AI concepts and deployable, scalable automation, particularly for Salesforce administrators, developers, and DevOps teams driving industry innovation. Not all AI assistants are created equal—understanding the <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters/">difference between bots, copilots, and AI agents</Link>  can fundamentally reshape how you architect automation across your factory.
                                
                            </p>
                            <p className="text-black mt-3 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]"> The automotive industry is one of the sectors accelerating into a new era, defined by intelligent automation, supply chain volatility, and the shift to electric and autonomous vehicles. Manufacturers should not only focus on improving processes but also reinvent them to remain competitive. Agentforce 3.0 empowers automotive companies to build smarter factories, optimize quality, and drive faster innovation.</p>

                            <div className="py-6 "></div>

                            <h2 className=" pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                                Agentforce 3.0: A Game-Changer for Automotive
                            </h2>

                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                                Since its debut, Salesforce’s Agentforce platform has promised to reimagine how organizations interact with data, tools, and processes, bringing AI-powered intelligence to the heart of enterprise operations. With the launch of Agentforce 3.0, that vision is more actionable, especially for the automotive manufacturing sector.
                            </p>





                            <h3 className="pb-4 mt-6 font-bold text-[16px] 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">
                                Key automotive capabilities include:
                            </h3>

                           <div className="grid gap-10 mt-5">
  {featuresData.map((item, idx) => (
    <div
      key={idx}
      className="flex flex-col sm:flex-row sm:items-start sm:gap-[50px]"
    >
      <div className="min-w-[100px] sm:mt-1">
        <Image
          src={item.icon}
          alt={item.title}
          width={200}
          height={112}
          className="xl:w-[212px] xl:h-[90px] w-[100px]"
        />
      </div>
      <div className="mt-10 xl:mt-0 md:mt-0">
        <h4 className="inline font-bold xl:text-[17px] text-[16px] 4xl:text-[20px] 2xl:text-[18px] mr-1">
          {item.title}
        </h4>
        <span className="inline text-gray-700 xl:text-[17px] text-[16px] 2xl:text-[20px] 4xl:text-[20px] font-medium">
          {item.description}
        </span>
      </div>
    </div>
  ))}
</div>




                            <h2 className="pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] md:text-[23px] 2xl:text-[24px] xl:text-[21px] text-[23px] mt-16 leading-tight">
                                Streamline Operations with the Agentforce Command Center
                            </h2>

                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">One of the standout features of Agentforce 3.0 is the Command Center—a control tower for managing and optimizing AI agent performance.</p>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                                In an automotive factory setting, this means:
                            </p>



                            <ol className=" marker:text-xl text-black 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-3">
                                <li className="inline"><h4 className="inline font-bold 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">1. Live Monitoring of Production Agents: </h4> Get real-time alerts when an agent controlling robotic assembly lines faces anomalies.</li>
                                <li><h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">2. Performance Optimization:  </h4> Identify bottlenecks, track error rates, and ensure your plant runs at maximum efficiency.</li>
                                <li><h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">3. Cross-Team Transparency: </h4> View human and AI activity side-by-side, enabling coordinated efforts between maintenance teams and digital agents.</li>
                            </ol>
                            <p className="text-black pb-4 mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                                Imagine diagnosing a welding mistake or an equipment fault before it halts your production line. Agentforce makes it possible with predictive insights and proactive recommendations.
                            </p>


                            <h2 className="pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] md:text-[23px] 2xl:text-[24px] xl:text-[21px] text-[23px] mt-10 leading-tight">
                                Universal Integration with Model Context Protocol (MCP)
                            </h2>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">The Model Context Protocol (MCP) brings the “USB-C for AI agents” to automotive IT systems. For manufacturers juggling multiple platforms such as ERP, MES, PLM, and IoT dashboards. MCP acts as the universal adapter.</p>

                            <ol className="list-disc  marker:text-xl pl-4 text-black 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-4">
                                <li><h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">Seamless API Integration:</h4> Instantly convert manufacturing APIs into agent-compatible services via MuleSoft.  </li>
                                <li><h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">Custom Tool Connections:</h4> Use Heroku AppLink to securely expose custom applications like CAD systems or inventory tracking platforms.</li>
                                <li><h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">Secure Collaboration in Slack:</h4> Let agents interact with production updates, quality reports, or shift schedules within Slack, without breaching compliance or governance rules.</li>
                            </ol>



                            <p className="text-black pb-4 mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">This means your agents can now trigger reorders, adjust supply forecasts, or analyze parts defects in real time, across platforms.</p>

                            <p className="text-black pb-4 mt-5 4xl:text-[20px] 2xl:text-[18px] md:text-[23px] xl:text-[17px] text-[16px]">As automotive factories evolve beyond robotic task execution, intelligent agents are redefining how systems collaborate, learn, and respond. Explore how this shift is shaping the Future of Smart Manufacturing.</p>
                            <h2 className="pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] mt-10 leading-tight">
                                Revolutionize Quality and Compliance
                            </h2>

                            <p className="4xl:text-[20px] xl:text-[17px] 2xl:text-[18px] text-[16px]">Agentforce 3.0 is powered by Salesforce’s advanced Atlas Reasoning Engine, bringing a new level of intelligence and agility to this critical function.
                                By leveraging real-time data enrichment from Data Cloud, AI agents can continuously monitor production data, spot anomalies, and detect quality deviations as they happen.
                            </p>
                            <p className="mt-5 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]"> Through AI-powered plan generation and refinement, the system can not only identify issues but also recommend actionable design changes or procedural adjustments to improve outcomes.</p>
                            <p className="mt-5 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]"> Moreover, with Retrieval-Augmented Generation (RAG) and inline citations, every insight an agent delivers is traceable and transparent—an essential feature for regulated environments. The result is a smarter, more proactive approach to quality and compliance that reduces rework, ensures audit-readiness, and accelerates issue resolution.</p>
                            <p className="mt-5 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">With multilingual capabilities and FedRAMP High certification, Agentforce 3.0 is built to meet the needs of global manufacturers, including those operating in highly regulated or government-linked environments, offering a secure, scalable, and intelligent solution for modern automotive quality management.</p>
                            <h2 className="pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] md:text-[23px] 2xl:text-[24px] xl:text-[21px] text-[23px] mt-16 leading-tight">
                                Drive Innovation with the AgentExchange
                            </h2>
                            <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">Salesforce’s AgentExchange brings a plug-and-play marketplace for automotive innovation.
                            </p>

                            <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">Instead of building every agent from scratch, manufacturers can now:</p>

                            <ol className="list-disc  marker:text-xl pl-4 mt-4 text-black 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-3">
                                <li>Deploy pre-built agents for scheduling, procurement, or after-sales service</li>
                                <li>Leverage partners like PayPal, WRITER, and Box for agentic workflows</li>
                                <li>Share innovations across the industry for faster adoption</li>
                            </ol>

                            <h3 className="pb-4 font-bold text-[16px] 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] mt-10">
                                Use cases tailored to automotive manufacturers include:
                            </h3>


                            <div className="grid grid-cols-1 sm:grid-cols-2 mt-0 xl:mt-10 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black  border-black">
                                {features.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`py-6 xl:py-0 ${index === 0 ? 'pr-6' : 'xl:pl-6 xl:pr-5 md:pl-10'}`}
                                    >
                                        <h4 className="text-[#0067B9] font-semibold 4xl:text-[20px] xl:text-[17px] 2xl:text-[18px] text-[16px] leading-tight pl-2">
                                            {item.title}

                                            <span className="text-black font-normal 4xl:text-[22px] xl:text-[20px] text-[16px] pl-2">
                                                {item.description}
                                            </span>
                                        </h4>
                                    </div>
                                ))}
                            </div>

                            <p className="text-black xl:mt-16 mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                                This ecosystem-driven approach allows manufacturers to adopt proven agent workflows quickly without starting from scratch. It drastically reduces development time, accelerates deployment, and ensures that industry best practices and regulatory compliance are built into every agent from day one, giving automotive companies a smarter, faster, and more secure path to AI adoption with Agentforce for automotive manufacturing.
                            </p>

                            <h2 className="pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] md:text-[23px] 2xl:text-[24px] xl:text-[21px] text-[23px] mt-16 leading-tight">
                                Accelerate Time to Value with Pre-Built Industry Actions
                            </h2>



                            <p className="4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">Agentforce 3.0 isn’t just for tech groups; it’s built for immediate value on the factory floor. Salesforce is rolling out 100+ pre-built industry actions in 2025, tailored for sectors like automotive.
                                .</p>

                            <p className="mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">Use cases include:</p>
                            <ul className="list-disc marker:text-xl pl-4 text-black mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-4">
                                <li>Automated vehicle inspection summaries</li>
                                <li>Digital twin coordination</li>
                                <li>Predictive maintenance and repair triggers</li>
                                <li>Parts shortage alerts and resolution agents</li>
                            </ul>
                            <p className="mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">And with new per-user pricing models and unlimited usage for employee-facing agents, it’s easier than ever to scale AI across your workforce, without unpredictable costs.</p>


                            <h2 className="pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] md:text-[23px] 2xl:text-[24px] xl:text-[21px] text-[23px] mt-16 leading-tight">
                                Put AI to Work in Automotive, Starting Today
                            </h2>
                            <p className="4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">Agentforce arrives at a pivotal moment for the automotive industry. Amidst rising consumer expectations, electrification, and global competition, the pressure to do more with less has never been greater.
                            </p>

                            <p className="mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">Salesforce’s latest update gives manufacturers the AI building blocks they need to:</p>
                            <ul className="list-disc pl-4 marker:text-xl text-black 4xl:text-[20px] 2xl:text-[18px] mt-5  xl:text-[17px] text-[16px] font-medium space-y-4">
                                <li>Boost operational resilience</li>
                                <li>Speed up innovation cycles</li>
                                <li>Ensure compliance across geographies</li>
                                <li>Deliver better experiences across the vehicle lifecycle</li>
                            </ul>
                            <p className="4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] mt-10 text-[16px]">Whether you’re retrofitting legacy systems or building smart factories from the ground up, Agentforce 3.0 offers a powerful way to drive transformation.</p>
                            <p className="4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] mt-5 text-[16px]" >Are you ready to discover <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/insights/blogs/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions/">how Agentforce can benefit your factory?</Link>  Let our experts assist you in integrating, scaling, and succeeding with <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/industry/digital-transformation-in-automotive-industry/">AI in automotive manufacturing</Link> . Rialtes helps businesses incorporate customized Agentforce agents into their ERP platforms, automating tasks and optimizing workflows.</p>

                            <h2 className="pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] md:text-[23px] 2xl:text-[24px] xl:text-[21px] text-[23px] mt-16 leading-tight">
                                FAQs: Agentforce for AI-Powered Manufacturing Transformation
                            </h2>

                        </div>
                    </div>
                </div>
            </section>

            <section className="custom-container max-md:px-0">
                <FAQAccordion faqData={faqs} />
            </section>
            <div
                className="custom-container xl:pr-0 mt-10">
                <BlogsCarousel slides={blogs} />
            </div>
        </div>
    );
}
