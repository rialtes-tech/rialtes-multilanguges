"use client";
// pages/blog-detail.js
import Image from "next/image";
import Link from "next/link";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import { useState } from "react";
import FAQAccordion from "@/app/components/faqAccordion";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.rialtes.com/insights/blogs/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions/"
    },
    "headline": "Agentforce for Manufacturing: Exceed Customer Expectations with AI-Powered Salesforce Solutions",
    "description": "Scale with confidence. Agentforce for Manufacturing automates support, sales, and partner ops using AI copilots, predictive service, and self-service tools.",
    "image": "https://www.rialtes.com/images/blog/agentforce-ai-for-manufacturing.webp",
    "author": {
        "@type": "Organization",
        "name": "Rialtes Technologies",
        "url": "https://www.rialtes.com"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rialtes Technologies",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.rialtes.com/images/homepage/logo.svg"
        }
    },
    "datePublished": "2025-07-21",
    "keywords": [
        "Agentforce for Manufacturing",
        "AI for Manufacturing",
        "AI in Manufacturing",
        "AI Agents Automation Solutions Manufacturing",
        "Smart Manufacturing Support"
    ],
    "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What makes Agentforce different from other AI solutions for manufacturing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Agentforce is built natively on Salesforce and designed specifically for operational use in manufacturing environments. It goes past generic AI by offering industry-trained agents that handle supply chain requests, service scheduling, warranty claims, and partner support, without the need for custom code."
                }
            },
            {
                "@type": "Question",
                "name": "Can Agentforce integrate with our existing Salesforce CPQ or Manufacturing Cloud setup?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Agentforce is built to work seamlessly with Salesforce CPQ, Manufacturing Cloud, and other Salesforce-native solutions. It connects with your product catalog, pricing engine, contracts, and workflows. So your AI agents can quote, configure, or support based on live business logic and real-time data."
                }
            },
            {
                "@type": "Question",
                "name": "How do AI agents in Agentforce improve uptime and reduce manual workload?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Agentforce connects to Field Service, IoT signals, and service histories to flag potential issues before they cause downtime. It automates common workflows like dispatch scheduling, parts ordering, or claim initiation. That means fewer breakdowns and less manual overhead."
                }
            },
            {
                "@type": "Question",
                "name": "How does Agentforce help improve customer satisfaction?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Customers and channel partners get fast, accurate answers through 24/7 AI agents and no waiting on hold or chasing updates. Whether it’s tracking an order, scheduling service, or pulling a product manual, Agentforce delivers a consistent, self-service experience across web, mobile, WhatsApp, and SMS."
                }
            },
            {
                "@type": "Question",
                "name": "Is Agentforce suitable for mid-sized manufacturing businesses or only enterprises?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Agentforce is scalable by design. Whether you’re a growing mid-sized business or a global manufacturer, you can start small, automating a few high-volume workflows, and expand over time. No need for massive infrastructure changes. Just faster support, smarter operations, and real ROI."
                }
            }
        ]
    }
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

    const faqData = [
        {
            question: "1. What makes Agentforce different from other AI solutions for manufacturing?",
            answer: "Agentforce is built natively on Salesforce and tailored for operational use in manufacturing environments. Unlike generic AI solutions, it features industry-trained agents that efficiently handle tasks like supply chain management, service scheduling, warranty claims, and partner support—without the need for custom code."
        },
        {
            question: "2. Can Agentforce integrate with our existing Salesforce CPQ or Manufacturing Cloud setup?",
            answer: "Yes. Agentforce seamlessly integrates with Salesforce CPQ, Manufacturing Cloud, and other Salesforce-native solutions, connecting to your product catalogue, pricing engine, contracts, and workflows. This enables your AI agents to quote, configure, and provide real-time support using live business data and logic."
        },
        {
            question: "3. How do AI agents in Agentforce improve uptime and reduce manual workload?",
            answer: "Agentforce connects to Field Service, IoT signals, and service histories to proactively identify and flag potential issues before they result in downtime. It automates key workflows such as dispatch scheduling, parts ordering, and claim initiation, significantly reducing breakdowns and manual overhead."
        },
        {
            question: "4. How does Agentforce help improve customer satisfaction?",
            answer: "Agentforce delivers fast, accurate answers to customers and channel partners through 24/7 AI agents—eliminating the need for hold times and chase-ups. Whether it's tracking an order, scheduling service, or retrieving product manuals, Agentforce provides a consistent, seamless self-service experience across web, mobile, WhatsApp, and SMS."
        },
        {
            question: "5. Is Agentforce suitable for mid-sized manufacturing businesses or only enterprises?",
            answer: "Agentforce is designed for scalability, making it perfect for both mid-sized businesses and large enterprises. You can start small, automating key workflows, and expand over time—without needing massive infrastructure changes. Enjoy faster support, smarter operations, and a clear ROI as your business grows."
        },
    ];

    const fullUrl =
        "https://www.rialtes.com/insights/blogs/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions";

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Agentforce for Manufacturing: AI Service Edge | Rialtes"
                description="Want to scale smarter? Agentforce for Manufacturing brings AI copilots, predictive service, and self-service tools to elevate your support and sales ops."
                canonical={" https://www.rialtes.com/insights/blogs/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions/"}
            />

            <Script
                id="schema-discover"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px] ">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/blog/Agentforce-AI-For-Manufacturing-updated_banner.webp"
                        alt="Discover AgentExchange"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/blog/agentforce-mobile-banner.webp"
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
                                <span className="text-[#ACACAC]"> | </span>21 July 2025
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
                        <h1 className="text-[#000000] leading-tight text-[26px] 2xl:text-[48px] 4xl:text-[60px] xl:text-[42px] 
                         xl:w-[1000px] 4xl:w-[1150px] pb-6 ">
                            Agentforce for Manufacturing: Exceed Customer Expectations with AI-Powered Salesforce Solutions
                        </h1>
                    </div>

                    <div className=" mx-auto">
                        <div className="max-w-[1084px] 4xl:w-[1084px] 2xl:w-[950px] xl:w-[850px]">
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px]">
                                We know that Artificial intelligence has transformed how we work, significantly boosting productivity by automating manual tasks and allowing teams to focus on high-value deliverables. With customer expectations soaring, they demand seamless, personalized experiences and instant support. Imagine a workforce free from constraints, delivering exceptional service without overwhelm. That’s the promise of Agentforce. It blends human expertise with AI-powered agents on the Salesforce platform to create a smarter, more scalable workforce. It frees your team to focus on building stronger relationships and driving real business outcomes.
                            </p>
                            <p className="mt-3 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px]"> The <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/industry/manufacturing-cloud-erp/" target="_blank"> manufacturing industry is undergoing a digital transformation</Link>  with Industry 4.0, requiring smarter and more connected systems. Agentforce optimizes manufacturing operations, boosts productivity, and enhances customer satisfaction. By integrating the entire value chain from inventory to production to customer engagement, it helps manufacturing companies remain competitive. It’s an intelligence layer that helps manufacturers rethink how they engage, support, and grow customer relationships.
                            </p>
                            <p className="text-black mt-3 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px]">
                                Let’s break down how Agentforce helps you leap ahead, not just keep up
                            </p>

                            <div className="py-6 "></div>

                            <h2 className=" pb-4 font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[20px]">
                                Turn Customer Service Into a Strategic Growth Lever with Agentforce AI Agents
                            </h2>

                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">
                                In manufacturing, customers don't just reach out when something goes south. They expect your support function to know what they need, respond instantly, and add value in the process. That applies whether they’re checking the status of a high-volume parts order, asking about equipment installation, or logging a repair request for a 5-year-old assembly line component.
                            </p>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">And here's the thing: every one of these touchpoints is a growth opportunity, if your support operation is intelligent enough to catch it.</p>

                            <h3 className="pb-4 mt-6 h3-bold text-[18px] 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">
                                That’s where Agentforce comes in handy.
                            </h3>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">It transforms service desks from reactive help channels into proactive, revenue-generating hubs. It does this by embedding AI copilots that understand your products, workflows, and customer relationships inside and out.</p>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">
                                These copilots, part of our advanced <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting/" target="_blank">
                                    Agentforce deployment services</Link> are trained on your:
                            </p>

                            <div className="pl-6">

                                <ol className="list-disc  marker:text-xl pl-4 text-black 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-3">
                                    <li>SKU and parts catalogs</li>
                                    <li>Service-level agreements and entitlement rules</li>
                                    <li>Product documentation and troubleshooting guides</li>
                                    <li>Historical ticket data, resolutions, and escalation patterns</li>
                                </ol>
                            </div>
                            <p className="text-black pb-4 mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">
                                With this intelligence, your teams can:
                            </p>
                            <ol className="pl-4 list-disc text-black 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-3">
                                <li>
                                    <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">Resolve recurring issues faster with intelligent copilots</h3>- Let’s say a customer reports a recurring failure on a specific part. Instead of sifting through past tickets, manuals, and email chains, the Agentforce copilot summarizes previous incidents, suggests the most likely fix, and surfaces relevant documentation instantly.
                                </li>
                                <li>
                                    <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]" >Auto-route support cases based on product, SLA, and urgency</h3>-
                                    A warranty claim for a CNC machine in one geography doesn’t need to sit in a general queue. Agentforce identifies the product type, region, urgency, and SLA, and routes it to the right service technician, dealer, or internal team member in real time.
                                </li>
                                <li>
                                    <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">Make contextual upsell suggestions, not sales pitches</h3>-
                                    If a customer is reporting consistent wear-and-tear on a component nearing the end of its lifecycle, the agent (or the bot) can proactively suggest an upgraded replacement, or a bundled maintenance plan based on past purchasing behavior or industry benchmarks.
                                </li>
                                <li>
                                    <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">Reduce response and resolution time dramatically </h3>-
                                    No more "We'll get back to you in 24 hours." With AI agents handling FAQs, documentation pulls, and triage, and human agents focused on the critical cases, resolution times drop drastically from hours to minutes in many cases.
                                </li>



                            </ol>

                            <p className="text-black mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">
                                But beyond the metrics, here’s what this means: your customers feel seen, heard, and valued. They trust that your support team understands their business, not just your product.
                            </p>
                            <p className="mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">And trust pays off.</p>


                            <div className="py-6"></div>

                            <h2 className="pb-4 font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[20px]">
                                Salesforce Agentforce Use Cases: Predictive Intelligence in Field Service and Maintenance
                            </h2>

                            <p className="text-black 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] ">
                                Unplanned downtime can drain revenue and erode customer trust. Agentforce helps field service teams flip the script, from reacting to issues to anticipating them. By integrating with Salesforce Field Service, Agentforce analyses real-time signals from warranty claims, service logs, and IoT-enabled equipment. Following is the outcome of that:
                            </p>

                            <div className="py-4"></div>

                            <ol className="list-disc  marker:text-xl pl-4 text-black 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-3">
                                <li>It predicts service needs before failures occur</li>
                                <li>Automatically recommends dispatches with the right parts and technicians</li>
                                <li>Keeps customers in the loop through automated updates via WhatsApp or email</li>
                            </ol>
                            <p className="mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">Instead of waiting for problems to show up, you're already solving them. That’s predictive intelligence in action and a clear advantage over teams still chasing tickets.</p>
                            <h2 className="pb-4 font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[20px] mt-10">
                                Agentforce for Manufacturing Sales: Simplifying B2B with AI and Salesforce CPQ
                            </h2>

                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">
                                Industrial manufacturing sales are anything but simple. Multiple stakeholders, fluctuating specs, made-to-order configurations, and pricing dependencies mean manual back-and-forth kills speed and accuracy. Agentforce simplifies this mess using smart agents integrated with Salesforce CPQ and Data Cloud.
                            </p>
                            <ol className="list-disc  marker:text-xl pl-4 text-black 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-3">
                                <li>It can pre-validate order feasibility based on available capacity and materials</li>
                                <li>Pull real-time pricing and delivery estimates</li>
                                <li>Auto-generate quotes and route them for fast internal approvals</li>
                                <li>Get alerts on contract renewals and reorder signals</li>
                            </ol>
                            <p className="text-black mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">
                                This way, you’re not just reducing friction, you’re giving your sales team room to grow accounts instead of chasing paperwork.
                            </p>
                            <h2 className="pb-4 font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[20px] mt-10">
                                Empower Distributors and Channel Partners with Self-Service Agents
                            </h2>
                            <h3 className="pb-4 h3-bold text-[17px] 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">
                                Give partners real-time access to inventory, returns, and service tools
                            </h3>
                            <p className="4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">Distributors, resellers, and OEM partners are critical to your customer experience. In a manufacturing ecosystem, they need the same real-time responsiveness that your internal teams rely on. Agentforce 3.0 for automotive manufacturers delivers that with AI-powered self-service agents built specifically for extended supply chains. These agents let partners work independently:</p>
                            <ol className="list-disc  marker:text-xl pl-4 text-black 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-3 mt-5">
                                <li>Check current inventory status</li>
                                <li>Initiate return or warranty claims</li>
                                <li>Access technical documents like installation guides</li>
                                <li>Schedule logistics or service appointments</li>
                            </ol>
                            <h3 className=" mt-6 h3-bold text-[17px] 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">
                                Enable multilingual, mobile-first support channels
                            </h3>
                            <p className="mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">Agentforce supports multilingual communication and works across mobile, web, and popular messaging platforms like WhatsApp and SMS. No matter where your partner teams are located or what devices they use, they get a consistent and accessible support experience.</p>
                            <h3 className=" mt-6 h3-bold text-[17px] 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">
                                Intelligently escalate only high-priority partner requests
                            </h3>
                            <p className="mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">Agentforce steps up with smart routing whenever self-service hits a wall. Only complex or high-priority cases are escalated to human agents, ensuring quick resolution without bogging down your service teams. This gives you a faster, more empowered distribution network that strengthens your market reach with every interaction.</p>
                            <h2 className="pb-4 font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[20px] mt-10">
                                Real-Time Visibility, and Insights for Proactive Decision-Making
                            </h2>
                            <p className="4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">The key to exceeding customer expectations? Responding before they ask. That requires visibility.</p>
                            <p className="mt-2 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">Agentforce taps into Salesforce Manufacturing Cloud, Service Cloud, and ERP integrations to give you:</p>
                            <ol className="list-disc  marker:text-xl pl-4 text-black 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-3 mt-5">
                                <li>Real-time dashboards on customer satisfaction scores, open service issues, and deal cycle bottlenecks</li>
                                <li>AI summaries of customer sentiment pulled from emails, tickets, and chats</li>
                                <li>Predictive insights on churn risk or repeat issues</li>
                            </ol>
                            <h2 className="pb-4 font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[20px] mt-10">
                                Don’t Just Deliver Products. Deliver Trust at Every Touchpoint
                            </h2>
                            <p className="4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">Manufacturers already know how to build machines. But building lasting relationships? That takes more than machinery. It takes the ability to anticipate needs, personalize every interaction, and scale support without losing quality. Agentforce gives you exactly that: a smarter, AI-powered way to make every touchpoint count. If you're evaluating how AI agents differ from copilots or bots in driving efficiency and growth, explore our  <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters/" target="_blank">
                                strategic comparison of Agents vs Copilots vs Bots</Link>.  While competitors are still chasing tickets and juggling systems, this is your chance to outgrow expectations—and the competition.</p>
                            <p className="mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">As a <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/" target="_blank">
                                top-rated Salesforce Crest Partner</Link>,  we excel in deploying Salesforce Agentforce to enhance efficiency across industries. Our Managed Services and Consulting can help your business integrate AI agents into Sales, Service, Marketing, and Commerce. </p>
                            <p className="mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">Ready to see Agentforce in action for your manufacturing business? <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/contact-us/" target="_blank">
                                Let’s talk</Link>.</p>
                            <h2 className="pb-4 font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[20px] mt-16">
                                FAQs: Agentforce for AI-Powered Manufacturing Transformation
                            </h2>

                        </div>
                    </div>
                </div>
            </section>

            <section className="custom-container max-md:px-0">
                <FAQAccordion faqData={faqData} />
            </section>
            {/* Latest Blogs */}
            <div
                className="custom-container xl:pr-0 mt-10">
                <BlogsCarousel slides={blogs} />
            </div>
        </div>
    );
}
