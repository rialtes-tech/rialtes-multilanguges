"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/components/unorderedList";
import useUrl from "@/app/components/useUrl";
import FilteredBlogCarousel from '@/app/components/FilteredLatestBlogCarousel'
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from '@/app/components/blogSocialIcons'

export default function Page() {
    const currUrl = useUrl();

    const fullUrl = "https://www.rialtes.com/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce";

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "How to Build and Deploy Your First AI Agent with Agentforce",
        "description": "This step-by-step guide shows how to build and deploy AI agents in Salesforce Agentforce without coding, using visual tools, templates, and workflows.",
        "image": "https://www.rialtes.com/images/blog/first-ai-agent-desktop-banner.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce/"
        },
        "datePublished": "2025-09-02",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "Building and Deploying AI Agents in Agentforce FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is Agentic AI and why does it matter?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Agentic AI goes beyond simple automation. It enables agents to reason, plan, act, and adapt—essentially acting as digital coworkers rather than bots."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I build AI agents in Salesforce without coding?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Agentforce Agent Builder offers a drag-and-drop, low-code interface to build AI agents using templates, workflows, and prompt builder tools."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the steps to build and deploy an AI agent in Agentforce?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The process includes defining the agent’s purpose, setting up Agentforce, structuring logic with Agent Builder, training the agent, building conversations, integrating systems, testing, and deploying."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What kind of AI agents can be built with Agentforce?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can build customer support agents, sales assistants, HR and recruitment bots, finance agents, IT helpdesk bots, marketing agents, and compliance monitors."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I keep my AI agent effective after deployment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ensure continuous learning with new data, run regular security reviews, add integrations as needs evolve, and monitor key performance metrics like resolution rates and user satisfaction."
                    }
                }
            ]
        }
    }

    const faqs = [
        {
            "question": "What is Agentforce, and how does it help build AI agents?",
            "answer": "Agentforce is Salesforce’s agentic AI platform that lets you create intelligent agents without coding. Using tools like Agent Builder and Prompt Builder, you can automate workflows, integrate with CRM data, and deploy digital coworkers that reason, plan, and act on business tasks."
        },
        {
            "question": "Can I build an AI agent in Agentforce without coding skills?",
            "answer": "Yes. Agentforce provides a low-code, drag-and-drop interface. Business users, Salesforce admins, and product owners can build, train, and deploy agents using natural-language prompts and visual workflows—no advanced coding required."
        },
        {
            "question": "What kinds of AI agents can I create with Agentforce?",
            "answer": "You can build agents for customer support, sales assistance, HR onboarding, finance automation, IT helpdesks, marketing personalization, and compliance monitoring. Each agent is tailored to specific business processes and integrates with Salesforce data."
        },
        {
            "question": "How do I ensure my AI agent stays accurate and secure over time?",
            "answer": "Continuous training and monitoring are key. Feed your agent updated data, run regular audits with Salesforce’s Trust Layer, and track metrics like resolution rates and user satisfaction. This ensures accuracy, compliance, and long-term performance."
        },
        {
            "question": "What systems can Agentforce agents connect with?",
            "answer": "Agents integrate with Salesforce CRM objects, Data Cloud, external APIs, ERPs,knowledge bases, and service tools. This gives them real-time access to customer and business data, enabling smarter decisions and actions."
        },
        {
            "question": "How do I deploy my first AI agent with Agentforce?",
            "answer": "You’ll follow a clear process: define your agent’s purpose, use Agent Builder to design workflows, train the agent with data, build prompts, connect systems, run simulations, and finally deploy and monitor it in production."
        }
    ]
    const mainData = [
        {
            "title": "Want to Build an AI Agent Without Coding? Start Here.",
            "desc": [
                "By 2028, 33% of enterprise software apps will utilize agentic AI. The transition from Predictive to Generative AI has accelerated, allowing businesses to move beyond simple forecasting to defining optimal actions. Despite ethical concerns, the value of training AI for growth and its role in <a href='https://www.rialtes.com/insights/blogs/how-ai-is-powering-the-sustainable-future-of-our-planet/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>powering the sustainable future of the planet</a> is clear. ",
                "If you've been thinking about automating business tasks with AI but aren’t sure where to begin, this is it. Agentforce by Salesforce lets you build AI agents without diving into complex code or expensive infrastructure.",
                "This guide walks you through everything:"
            ],
            "list": [
                "What agentic AI is",
                "How to build your first AI agent",
                "Real-world use cases",
                "What tools and data do you need",
                "And how to future-proof your deployment "
            ],
            "desc2": "We’ll keep it simple, visual, and action-oriented, so whether you're a product owner, Salesforce admin, or innovation lead, you’ll walk away knowing how to get started today. "
        }
    ]
    const whatIsAgenticData = [
        "Let’s break it down: ",
        "Most AI tools today respond to prompts or automate simple tasks. Agentic AI goes further. It enables <a href='https://www.rialtes.com/insights/blogs/how-large-language-models-improve-customer-experience/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>agents that can reason, plan, act, and adapt</a>. Think of it as AI with initiative. ",
        "In the context of Salesforce, Agentforce is the platform that brings agentic AI to life. It’s designed to help you build intelligent agents that work across systems, automate decision-making, interact naturally with users, and continuously learn and improve. Whether you're integrating with CRM data, streamlining workflows, or creating personalized user experiences, Agentforce equips your business with the tools to make AI truly adaptive and collaborative. ",
        "You’re not just building a bot. You’re deploying a digital coworker that knows what to do and when to escalate. ",
    ]
    const meetData = [
        {
            "title": "Build AI Agents with Visual Tools, Not Code ",
            "desc": [
                "This is where the magic happens. Agentforce Agent Builder is your drag-and-drop canvas to create smart agents tailored to your business. It is a low-code tool in Salesforce for customizing AI agents across various business functions. Users can create tasks for agents by defining topics with natural-language instructions and setting guardrails. ",
                "What makes it different: "
            ],
            "list": [
                {
                    "title": "Low-code UI",
                    "desc": "Build with clicks, not code"
                },
                {
                    "title": "Reusable Templates",
                    "desc": "Start faster with prebuilt flows"
                },
                {
                    "title": "Prompt Builder",
                    "desc": "Create smart conversations using generative AI"
                },
                {
                    "title": "Workflow Automation",
                    "desc": "Define how the agent should act or escalate"
                },
                {
                    "title": "Testing & Debugging Tools",
                    "desc": "Simulate interactions before going live"
                }
            ],
            "desc2": "Whether you're building a finance assistant, HR onboarding agent, or field service bot, the setup process stays the same. "
        }
    ]
    const stepsData = [
        {
            "title": "Define Your Agent’s Purpose",
            "desc": "Decide what business process you want to automate—customer support, order tracking, policy management, lead routing, etc."
        },
        {
            "title": "Set Up Your Agentforce Environment",
            "desc": "Log in to your Salesforce org with Agentforce enabled. Choose whether you’ll start with a prebuilt agent or create from scratch."
        },
        {
            "title": "Use Agent Builder to Structure Logic",
            "desc": "Drag and drop decision flows. Add tasks like “check CRM,” “send alert,” or “update case.” Customize how your agent handles queries and escalates when needed."
        },
        {
            "title": "Train Your Agent",
            "desc": "Use historical data, chat transcripts, or structured inputs to fine-tune how the agent interprets intent and responds."
        },
        {
            "title": "Build Conversations with Prompt Builder",
            "desc": "Create dynamic prompts to guide the agent’s language. Tailor tone and context based on user personas."
        },
        {
            "title": "Integrate with Systems",
            "desc": "Connect to Salesforce objects, external APIs, knowledge bases, or CRMs. Agents can retrieve data, trigger actions, or update records in real time."
        },
        {
            "title": "Test and Simulate",
            "desc": "Use built-in test environments to run simulations. See how the agent handles edge cases, ambiguous queries, or unexpected inputs."
        },
        {
            "title": "Deploy and Monitor",
            "desc": "Push your agent live. Use dashboards to monitor interactions, handoffs, time-to-resolution, and performance insights."
        }
    ]
    const whatPowerData = [
        {
            "title": "Metadata",
            "desc": "The configuration layer—what the agent knows about objects, workflows, user roles, and rules."
        },
        {
            "title": "Data Cloud",
            "desc": "Unifies data across sources (CRM, ERP, service tools) to give your agent real-time, 360° context."
        },
        {
            "title": "Models",
            "desc": "Choose from Einstein, bring-your-own model, or use fine-tuned LLMs for tasks like classification or conversation."
        },
        {
            "title": "Prompt Builder",
            "desc": "A no-code tool to craft dynamic prompts using plain language and business logic."
        },
        {
            "title": "Trust Layer",
            "desc": "Protects data privacy, governs model behavior, and logs agent decisions for auditability."
        },
        {
            "title": "Action Framework",
            "desc": "Enables agents to act and not just chat. Submit forms, update databases, send emails, trigger flows."
        }
    ]
    const whatKindData = [
        {
            "title": "Customer Support Agents",
            "desc": "Handle queries, triage tickets, pull past orders, and escalate complex cases."
        },
        {
            "title": "Sales Assistants",
            "desc": "Suggest next best actions, qualify leads, and log CRM updates instantly."
        },
        {
            "title": "HR and Recruitment Bots",
            "desc": "Screen candidates, answer policy questions, or automate onboarding flows."
        },
        {
            "title": "Finance and Accounting Agents",
            "desc": "Reconcile invoices, track payments, flag anomalies."
        },
        {
            "title": "IT Helpdesk Bots",
            "desc": "Provide troubleshooting steps, log tickets, and monitor incident resolution."
        },
        {
            "title": "Marketing Agents",
            "desc": "Analyze campaign data, personalize content, or answer product questions."
        },
        {
            "title": "Compliance Monitors",
            "desc": "Flag policy violations, document decisions, and help navigate regulations."
        }
    ]
    const keepYourData = [
        {
            "title": "Keep Your Agent Performing Like A Pro ",
            "desc": "Building an AI agent isn’t a one-time project; it’s an ongoing investment in long-term autonomy. To keep it effective, you need to plan for growth, change, and learning.  ",
            "list": [
                "Start with continuous learning by feeding your agent new data to sharpen its relevance and accuracy.",
                "Run regular security reviews using the Einstein Trust Layer to audit access, permissions, and model usage.",
                "As your needs evolve, your AI agent should too.Thanks to a scalable architecture, you can easily add integrations, new prompts, or business workflows.",
                "Finally, stay on top of real - time monitoring by tracking key metrics, such as resolution rates, fallback triggers, and user satisfaction."
            ]
        }
    ]
    const readyData = [
        "Successful deployment requires an integrated technological infrastructure for agents to access up-to-date data and perform effectively. Rialtes Can Help You Launch Agentic AI in Salesforce. ",
        "If you want help building an AI agent, or even a full network of digital coworkers, Rialtes can support you at every step. We work with <a href='https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Salesforce platforms</a> to deliver AI agents tailored to your goals. Whether you're in manufacturing, healthcare, the public sector, or financial services, we’ve done it. ",
        "<a href='https://www.rialtes.com/contact-us/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Let’s talk</a> about how Agentforce can power your next AI move. "
    ]


    return (
        <section className="min-h-screen">
            <Seo
                title="How to Deploy AI Agents in Salesforce Agentforce | Rialtes"
                description="Ready to automate with AI? Use this step-by-step guide to build AI agents in Agentforce by Salesforce without coding or expensive systems."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce/"
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
                        src="/images/blog/first-ai-agent-desktop-banner.webp"
                        alt="Man interacting with glowing AI data visualization wave representing digital transformation and machine learning."
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/first-ai-agent-mob-banner.webp"
                        alt="Man interacting with glowing AI data visualization wave representing digital transformation and machine learning."
                        priority
                        height={250}
                        width={375}
                        className="w-full h-auto object-cover lg:object-[50%_30%]"
                    />
                </div>
            </section>

            <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
                <div className="grid lg:grid-cols-12">
                    <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

                        {/* date and icons */}
                        <div className="sm:flex justify-between">
                            <div>
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Salesforce Agentforce</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>18 September 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px]">How to Build and Deploy Your First AI Agent with Agentforce (Step-by-Step Guide)</h1>

                            <div className="xl:mt-[38px] mt-[33px]">
                                {
                                    mainData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h3 className="font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">{data.title}</h3>

                                                <UnorderedList arrName={data.desc} ulClassName="mt-3 space-y-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                                <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[60px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                                <p
                                                    className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* what is agentic ai section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">What Is Agentic AI—and Why Should You Care? </h2>
                                {
                                    whatIsAgenticData.map((data, ind) => {
                                        return (
                                            <p
                                                key={ind}
                                                className={`${ind == 0 ? "mt-[22px] xl:mt-[30px]" : "mt-5"} 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                dangerouslySetInnerHTML={{ __html: data }}
                                            />
                                        )
                                    })
                                }
                            </div>


                            {/* meet section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Meet the Agentforce Agent Builder </h2>
                                {
                                    meetData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h3 className="mt-[22px] xl:mt-[30px] font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">{data.title}</h3>

                                                <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                                <ul className="pl-[36px] lg:pl-[46px] space-y-3 mt-5">
                                                    {data.list.map((elems, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium"
                                                        >
                                                            <h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                                {elems.title}
                                                            </h4>{" "}
                                                            {elems.desc}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <p
                                                    className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* steps section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    Step-by-Step: How to Build an AI Agent with Agentforce
                                </h2>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    You’re ready to go. Here’s how it works in 8 clear steps:
                                </p>

                                {/* Steps Content */}
                                <div className="md:mt-[65px] mt-[40px] relative py-[30px] md:py-[60px]">
                                    <div className="absolute top-0 xl:left-[-40px] 3xl:left-[-80px] 4xl:left-[-120px] w-full 4xl:w-[1730px] lg:w-[1030px] xl:w-[1220px] 3xl:w-[1450px] h-full bg-[#F4F4F4] z-0" />
                                    {stepsData.map((data, ind) => (
                                        <div
                                            key={ind}
                                            className={`relative grid grid-cols-12 py-[32px] px-[30px] border-b border-[#D9D9D9] last:border-b-0`}>
                                            <div className="col-span-1">
                                                <p className="text-[#1486E6] font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight mb-3">
                                                    STEP
                                                </p>
                                                <p className="inline 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] text-white bg-[#1486E6] py-2 px-6">
                                                    {ind + 1}
                                                </p>
                                            </div>
                                            <div className="col-span-11 md:pl-[40px] pl-[60px]">
                                                <h3 className="font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">
                                                    {data.title}
                                                </h3>
                                                <p
                                                    key={`desc2-${ind}`}
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] text-[#333]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* what powers section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    What Powers These Agents?
                                </h2>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    Each AI agent built in Agentforce runs on a stack of intelligent components. Here’s what makes it work:
                                </p>
                                <div>
                                    {whatPowerData.map((elem, id) => (
                                        <div className="md:flex mt-24 md:mt-10 py-[34px] xl:py-[30px] px-[26px] md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative md:ml-[100px] sm:w-[80%] md:w-auto lg:w-[80%] xl:w-auto" key={id}>
                                            <p className="md:absolute max-md:mt-[-80px] sm:mt-[-70px] md:mt-0 md:top-[50%] md:translate-y-[-50%] 4xl:w-[320px] lg:w-[300px] md:w-[280px] w-fit md:left-[-80px] bg-[#006FBE] text-white font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] px-[40px] py-[22px] leading-tight">{elem.title}</p>
                                            <div className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[200px] lg:ml-[240px] 4xl:ml-[260px]" dangerouslySetInnerHTML={{ __html: elem.desc }} />
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    This architecture makes your agents smarter, safer, and more business-aware from day one.
                                </p>
                            </div>

                            {/* what kind section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    What Kind of AI Agents Can You Build with Agentforce?
                                </h2>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    Here’s what’s possible:
                                </p>
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] sm:w-[90%] md:w-full 4xl:w-[1250px]">
                                    {whatKindData.map((elem, id) => (
                                        <div className="4xl:p-[36px] p-[22px] border border-[#707070]" key={id}>
                                            <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.title}</h3>
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: elem.desc }} />
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    You can build one agent, or a whole mesh of them—each designed for a specific process or team.
                                </p>
                            </div>

                            {/* keep your section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    keepYourData.map((data, ind) => (
                                        <div key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <p
                                                className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                            <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-3 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-decimal font-medium" />

                                        </div>
                                    ))
                                }
                            </div>

                            {/* ready data */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Ready to Build Smarter? </h2>
                                {
                                    readyData.map((data, ind) => {
                                        return (
                                            <p
                                                key={ind}
                                                className={`${ind == 0 ? "mt-[22px] xl:mt-[30px]" : "mt-5"} 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
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
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">FAQs: Building and Deploying AI Agents with Agentforce</h2>
                <div className="mt-[29px] xl:mt-[34px]">
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