"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from '@/app/components/blogSocialIcons'
import UnorderedList from "@/app/components/unorderedList";

const mainData = [
    "Resident support in property management is getting harder to scale. Between maintenance requests, rent inquiries, amenity bookings, and move-in/move-out coordination, teams often stretch themselves thin. The problem isn’t that property managers don’t care; resident expectations have changed.",
    "They expect fast, friendly, 24/7 support.",
    "And that’s exactly where we need Conversational AI.",
    "Conversational AI refers to chatbots and virtual assistants that can manage client conversations. These AI tools can answer questions, schedule viewings, and even qualify leads around the clock—allowing agents to concentrate on more crucial tasks. In this blog, we’ll unpack how AI-driven chatbots and voice assistants are transforming property management, reducing support tickets, and keeping residents happy, without hiring extra staff.",
]

const traditionalData = [
    {
        "title": "Why Traditional Resident Support Doesn’t Scale",
        "desc": "For years, property management teams have relied on email threads, call centers, and ticketing systems to handle resident queries. While functional, these channels share one fatal flaw: they don’t scale efficiently.",
        "desc2": "Here’s what typically happens:",
        "list": [
            {
                title: "High Volume, Low Complexity",
                desc: "Roughly 60–70% of all resident tickets involve basic issues—like 'When is my rent due?' or 'How do I submit a maintenance request?'"
            },
            {
                title: "Human Bottlenecks",
                desc: "Even simple requests take time when each one requires manual review or follow-up."
            },
            {
                title: "Inconsistent Experience",
                desc: "Depending on staff workload, residents might wait minutes or days for a reply."
            }
        ],
        "desc3": "This leads to frustration for residents and burnout for staff. Conversational AI changes this dynamic completely."
    }
]

const whyConversationalData = [
    "When we talk about Conversational AI, we’re not just referring to generic chatbots. Modern AI assistants in property management use Natural Language Processing (NLP) and Machine Learning (ML) to understand context, intent, and even tone.",
    "Along with following the scripts, they can engage in natural back-and-forth conversations and take real actions across integrated systems like CRMs, ERP tools, and maintenance platforms.",
    "Imagine this:",
    "A resident messages the property portal saying, “My AC isn’t cooling properly.”",
    "The AI assistant identifies it as a maintenance issue, creates a service ticket in the property management system, assigns it to the right technician, and sends the resident an acknowledgment, all within seconds.",
    "It can even follow up with, “Would you like to schedule a visit between 10 AM–12 PM or 2 PM–4 PM tomorrow?” This isn’t a futuristic vision. Platforms like Exelona, an AI-enabled real estate management system, already make it possible."
]

const keyBenefitsData = [
    {
        "title": "Key Benefits of Conversational AI in Property Operations",
        "desc": "Let’s break down what this shift means in practical terms.",
        "list": [
            {
                "title": "24/7 Resident Support",
                "desc": [
                    "No team can be available round the clock, but AI can. Conversational AI assistants handle tenant queries day and night, ensuring immediate responses and reducing after-hours workload.",
                    "For example, if a tenant messages at midnight asking, “How can I pay rent online?”, the assistant can instantly guide them through the payment process, without human intervention. That’s not just convenience; it’s retention. Studies show that response time is one of the top three factors influencing resident satisfaction."
                ]
            },
            {
                "title": "Lower Ticket Volume (Without Lowering Quality)",
                "desc": [
                    "By automatically resolving repetitive questions, it reduces the ticket load that human agents see every day.",
                    "Some property teams report up to 40% reduction in ticket volume after deploying conversational AI. That frees up human agents to focus on complex issues that need a personal touch."
                ]
            },
            {
                "title": "Contextual Conversations Across Channels",
                "desc": [
                    "Today’s residents interact through multiple channels—web, mobile app, email, and even WhatsApp. Conversational AI keeps track of interactions across all of them, offering continuity.",
                    "If a resident starts a chat on the property app and later sends a follow-up email, the AI can recognize it’s the same thread, not a new ticket. This ensures residents never repeat themselves, a small but powerful trust builder."
                ]
            },
            {
                "title": "Smarter Technician Assignments",
                "desc": [
                    "AI isn’t limited to chat—it can optimize operations behind the scenes. When integrated with property management platforms like Exelona, conversational AI can analyze maintenance requests, predict priority levels, and automatically assign technicians based on skill, proximity, and workload.",
                    "The result? Faster service response times and fewer missed SLAs."
                ]
            },
            {
                "title": "Data-Driven Insights for Management",
                "desc": [
                    "Every conversation becomes a data point. AI aggregates resident sentiment, recurring issues, and satisfaction levels into dashboards that property managers can actually act on.",
                    "For instance:",
                    "25% of residents complained about late AC repairs in July.",
                    "12% of tickets came from the same building.",
                    "Most queries occurred after 6 PM.",
                    "These insights can shape better resource planning and preventive maintenance strategies."
                ]
            }
        ]
    }
]

const conversationalAI = [
    {
        "title": "Conversational AI Adoption in Real Estate: Slow Start, Fast Potential",
        "desc": [
            "Across Europe and the US, conversational AI is gradually reshaping how property companies engage with residents—but adoption remains uneven. In Germany, for instance, fewer than 10% of housing associations have deployed conversational AI to handle tenant interactions or maintenance requests. In the US, adoption is slightly higher, driven by large property management firms experimenting with AI assistants to manage lease renewals, payments, and service tickets.",
            "Early adopters are already seeing measurable gains, 15–25% faster response times, higher resident satisfaction scores, and notable reductions in support costs. Yet, many organizations still face the same bottlenecks: fragmented IT landscapes, limited process automation, and conversational systems that lack the functional depth to handle complex real estate workflows.",
            "This maturity gap often forces companies to rebuild their AI stack on platforms that better align with business processes and scale across property portfolios.",
            "Today, most property firms fall into one of three maturity stages in their automation journey:"
        ],
        "list": [
            {
                title: "Implement",
                desc: "Introducing conversational AI to handle basic resident queries."
            },
            {
                title: "Modernize",
                desc: "Replacing first-generation chatbots with scalable, data-integrated AI solutions."
            },
            {
                title: "Supplement",
                desc: "Enhancing existing platforms with advanced automation and analytics."
            }
        ]
    }
]

const howConversationalData = [
    {
        "title": "How Conversational AI Reduces Operational Costs",
        "desc": "The link between AI and cost reduction is direct",
        "list": [
            {
                "title": "Less manual workload",
                "desc": "Automating 60–70% of queries reduces staffing needs or allows teams to handle growth without additional hires."
            },
            {
                "title": "Faster turnaround",
                "desc": "Quicker resolutions mean fewer escalations and lower SLA breach penalties."
            },
            {
                "title": "Optimized resource allocation",
                "desc": "Predictive analytics help property teams schedule staff efficiently, cutting overtime costs."
            }
        ],
        "desc2": "Overall, studies from McKinsey suggest that AI-driven automation can reduce operational expenses (Opex) by 20–30% in property operations when properly integrated with maintenance and resident service workflows."
    }
]

const implementationData = [
    {
        "title": "Implementation: Getting Conversational AI Right",
        "desc": "Adding AI to your property management stack isn’t just about installing a chatbot widget—it’s about thoughtful integration.",
        "desc2": "Here’s a proven framework:",
        "list": [
            {
                "title": "Identify High-Volume Use Cases",
                "desc": "Start small. Begin with the top 5 query types that take up the most staff time (e.g., rent reminders, payment confirmations, maintenance tracking)."
            },
            {
                "title": "Integrate with Your Core Systems",
                "desc": "Your AI assistant should talk to your property management system, CRM, and billing tools. That’s how it becomes action-oriented rather than informational."
            },
            {
                "title": "Train the Model Continuously",
                "desc": "AI improves with feedback. Use resident interactions to refine intent detection and natural language understanding."
            },
            {
                "title": "Maintain a Human Escalation Loop",
                "desc": "Even the best AI should hand off to a human when needed—especially for emotional or complex issues. The goal isn’t replacement, but augmentation."
            },
            {
                "title": "Measure, Analyze, Improve",
                "desc": "Track key metrics: ticket reduction, response time, resident satisfaction, and cost per interaction. Use this data to iterate and improve."
            },
        ]
    }
]

const whatData = [
    {
        "title": "What This Means for the Future of Resident Experience",
        "desc": [
            "Conversational AI is redefining what “resident experience” means in modern real estate. It’s the difference between a tenant waiting hours for an update versus getting an instant response. Between reactive management and proactive care.",
            "As more residents get accustomed to AI-powered interactions in banking, travel, and e-commerce, they’ll expect the same from property management. Companies that adapt now will lead the market; those that don’t risk being left behind.",
            "Exelona was built for exactly this. It’s an <a href='https://www.rialtes.com/insights/blogs/ai-in-real-estate-reduce-opex-with-predictive-maintenance/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>AI-enabled property operations</a> platform that integrates CRM, maintenance, financials, and communication in one intelligent system.",
            "Its Conversational AI layer helps property teams:"
        ],
        "list": [
            "Handle thousands of resident interactions simultaneously",
            "Automatically log and route requests to the right teams",
            "Trigger maintenance, billing, and notification workflows",
            "Analyze trends in resident sentiment and performance metrics",
        ],
        "desc2": "If you’re ready to scale support, cut response times, and reduce Opex, Exelona gives you the tools to make it happen, without adding staff. Let’s automate repetitive communication and connecting systems behind the scenes and free property managers to focus on building communities."
    }
]

const faqs = [
    {
        question: "What is conversational AI in property management?",
        answer: "Conversational AI in property management uses intelligent chatbots and virtual assistants to handle resident interactions like rent inquiries, maintenance requests, and lease renewals—through natural, human-like conversations. These systems understand context, automate workflows, and connect directly with backend systems such as CRMs or ERPs for faster, more accurate responses."
    },
    {
        question: "Can chatbots really handle complex resident requests?",
        answer: "Yes. Modern conversational AI platforms are far more advanced than rule-based chatbots. They can interpret intent, process multiple data sources, and even trigger work orders or billing updates automatically. For example, a resident asking about a delayed repair can get real-time updates pulled from the maintenance system."
    },
    {
        question: "How does conversational AI reduce support tickets in real estate?",
        answer: "AI reduces support tickets by resolving the most common queries instantly like payment status, maintenance scheduling, or amenity access, before they reach your human staff. Some property firms report a 30–40% reduction in repetitive tickets after deploying AI-enabled property operations with smart routing and escalation."
    },
    {
        question: "What’s the ROI of using conversational AI for property management?",
        answer: "The ROI typically comes from three areas: lower operational costs, faster issue resolution, and improved resident satisfaction. On average, property managers can save up to 25% in customer service costs while boosting tenant retention by providing round-the-clock support and quicker response times."
    },
    {
        question: "Is conversational AI secure enough for resident communication?",
        answer: "Absolutely. Enterprise-grade conversational AI platforms comply with data protection standards like GDPR and SOC 2. They encrypt resident data, anonymize sensitive information, and include built-in access controls, ensuring privacy across all communication channels."
    },
    {
        question: "How can a property company get started with conversational AI?",
        answer: "Start small by identifying high-volume, repetitive interactions—like rent payment confirmations or maintenance tracking. Then, choose a platform like Exelona, which offers AI-enabled property operations, CRM + ERP integration, and conversational AI capabilities purpose-built for real estate. From there, scale gradually across properties and service functions."
    }
];

const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Conversational AI in Real Estate: Scale Resident Support Without Adding Staff",
    "description": "Discover how conversational AI helps property management teams scale resident support without adding staff. Learn how AI chatbots and voice assistants handle tenant interactions, reduce tickets, and improve satisfaction in real estate operations.",
    "image": "https://www.rialtes.com/images/blog/conversational-ai-in-real-estate.webp",
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
        "@id": " https://www.rialtes.com/insights/blogs/conversational-ai-in-real-estate-scale-resident-support/"
    },
    "datePublished": "2025-10-20",
    "mainEntity": {
        "@type": "FAQPage",
        "name": "Conversational AI in Real Estate FAQs",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is conversational AI in property management?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Conversational AI in property management uses intelligent chatbots and virtual assistants to manage resident interactions like rent inquiries, maintenance requests, and lease renewals through natural, human-like conversations integrated with backend systems."
                }
            },
            {
                "@type": "Question",
                "name": "Can chatbots really handle complex resident requests?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Modern conversational AI platforms go beyond simple rule-based bots. They use NLP and ML to interpret intent, access multiple data sources, and trigger workflows like maintenance updates or billing notifications automatically."
                }
            },
            {
                "@type": "Question",
                "name": "How does conversational AI reduce support tickets in real estate?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI reduces repetitive support tickets by instantly resolving common queries such as rent payments, maintenance scheduling, or amenity access. Many property firms see a 30–40% drop in ticket volume after implementing AI-driven automation."
                }
            },
            {
                "@type": "Question",
                "name": "What’s the ROI of using conversational AI for property management?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Conversational AI delivers ROI through lower operational costs, faster issue resolution, and improved resident satisfaction. Property managers typically save up to 25% in customer service costs while increasing tenant retention."
                }
            },
            {
                "@type": "Question",
                "name": "Is conversational AI secure enough for resident communication?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Enterprise-grade conversational AI systems comply with standards like GDPR and SOC 2, encrypt data, anonymize sensitive information, and enforce access controls to ensure secure and private resident communication."
                }
            },
            {
                "@type": "Question",
                "name": "How can a property company get started with conversational AI?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Start by identifying high-volume repetitive interactions like rent confirmations or maintenance tracking. Then implement a platform such as Exelona, which offers AI-enabled property operations, CRM + ERP integration, and conversational AI capabilities built for real estate."
                }
            }
        ]
    }
}

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/conversational-ai-in-real-estate-scale-resident-support/";
    const currUrl = useUrl()

    return (
        <section className="min-h-screen">
            <Seo
                title="Conversational AI in Real Estate: Scale Support Efficiently | Rialtes"
                description="In real estate, conversational AI assistants handle tenant queries day and night, ensuring immediate responses and reducing after-hours workload."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/conversational-ai-in-real-estate-scale-resident-support/"
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
                        src="/images/blog/conversational-ai-in-real-estate.webp"
                        alt="Digital illustration of person interacting with virtual chatbot interface representing conversational AI in real estate"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/conversational-ai-in-real-estate-mobile.webp"
                        alt="Digital illustration of person interacting with virtual chatbot interface representing conversational AI in real estate"
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Exelona</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>20 October 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">Conversational AI in Real Estate: Scale Resident Support Without Adding Staff</h1>

                            <div className="xl:mt-[38px] mt-[33px]">
                                {
                                    mainData.map((data, ind) => {
                                        return (
                                            <p
                                                key={ind}
                                                className={`${ind == 2 ? "" : "mt-5"} 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                dangerouslySetInnerHTML={{ __html: data }}
                                            />
                                        )
                                    })
                                }
                            </div>

                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    traditionalData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] 4xl:w-[1200px] sm:w-[80%] md:w-full">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <div className="4xl:p-[30px] p-[22px] border border-[#707070]" key={id}>
                                                                    <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070]">{elem.title}</h3>
                                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.desc}</p>
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

                            {/* why conversational section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">What Conversational AI Really Means in Property Management</h2>
                                {
                                    whyConversationalData.map((data, ind) => {
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

                            {/* key benefits section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    keyBenefitsData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <ol className="space-y-4 mt-5">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">
                                                                    <h3 className="mt-5 font-bold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">{id + 1}. {elem.title} </h3>
                                                                    <UnorderedList arrName={elem.desc} ulClassName="mt-2 space-y-3 pl-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" />
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ol>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* conversational section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    conversationalAI.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <UnorderedList arrName={data.desc} ulClassName="mt-[22px] xl:mt-[30px] space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                                <div className="mt-[60px]">
                                                    {
                                                        data.list.map((data, ind) => {
                                                            return (
                                                                <div
                                                                    className="md:flex mt-24 md:mt-[28px] py-[34px] xl:py-[36px] px-[26px] 
                                                           md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative 
                                                           md:ml-[90px] sm:w-[80%] md:w-auto"
                                                                    key={ind}>
                                                                    <p className="md:absolute md:flex items-center
                                                                max-md:mt-[-65px] sm:mt-[-70px] md:mt-0
                                                                md:top-1/2 md:-translate-y-1/2 md:left-[-80px]
                                                                bg-[#006FBE] text-white font-semibold
                                                                4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]
                                                                px-[20px] py-[15px] leading-tight
                                                                4xl:w-[200px] xl:w-[180px] md:w-[200px] w-fit">
                                                                        {data.title}
                                                                    </p>

                                                                    <div className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]
                                                                font-medium my-auto max-md:mt-8
                                                                md:ml-[150px] xl:ml-[150px] 4xl:ml-[160px]"
                                                                        dangerouslySetInnerHTML={{ __html: data.desc }}
                                                                    />
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


                            {/*how conversational section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    howConversationalData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />

                                                <div className="grid lg:grid-cols-3 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] lg:mt-[48px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full 4xl:w-[1400px]">
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
                                                    className={`mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />

                                            </div>
                                        )
                                    })
                                }
                            </div>


                            {/* implementation section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    implementationData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />

                                                <div className="grid xl:grid-cols-5 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] md:mt-[48px] gap-y-[40px] md:gap-x-[60px] lg:gap-[40px] sm:w-[80%] md:w-full xl:w-[1100px] 4xl:w-[1450px]">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <div key={id}>
                                                                    <span className="bg-[#0C8AED] w-12 h-12 flex items-center justify-center rounded-full text-white font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                                        {id + 1}
                                                                    </span>
                                                                    <h3 className="mt-[30px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.title}</h3>
                                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]">{elem.desc}</p>
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

                            {/* what section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    whatData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                {
                                                    data.desc.map((elem, ind) => {
                                                        return (
                                                            <p
                                                                key={ind}
                                                                className={`${ind == 0 ? "mt-[22px] xl:mt-[30px]" : "mt-5"} 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                                dangerouslySetInnerHTML={{ __html: elem }}
                                                            />
                                                        )
                                                    })
                                                }
                                                <UnorderedList arrName={data.list} ulClassName={`mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-3 list-disc`} />
                                                <p
                                                    key={ind}
                                                    className={`${ind == 0 ? "mt-[22px] xl:mt-[30px]" : "mt-5"} 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                            </div>
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
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Salesforce Implementation and Integration</h2>
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

