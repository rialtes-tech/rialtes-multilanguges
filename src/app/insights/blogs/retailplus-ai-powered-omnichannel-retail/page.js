"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from '@/app/components/blogSocialIcons'
import UnorderedList from "@/app/components/unorderedList";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "RetailPlus: AI-Powered Omnichannel Retail | Rialtes",
    "description": "Retail+ by Rialtes delivers an end-to-end transformation model that connects strategy, systems, and scale. AI-powered omnichannel retail is no longer a differentiator. It’s the baseline for staying relevant.",
    "image": "https://www.rialtes.com/images/blogs/woman-using-tablet-digital-overlay-technology.webp",
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
        "@id": "https://www.rialtes.com/insights/blogs/retailplus-ai-powered-omnichannel-retail/"
    },
    "datePublished": "2026-01-15",
    "mainEntity": {
        "@type": "FAQPage",
        "name": "AI in Retail and Omnichannel Transformation FAQs",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What does AI in retail really mean?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI in retail refers to using machine learning and predictive analytics to personalize experiences, optimize inventory, automate operations, and improve decision-making across the retail value chain."
                }
            },
            {
                "@type": "Question",
                "name": "How does AI improve omnichannel retail?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI connects data from every channel and uses it to guide real-time actions — from personalized offers to dynamic fulfillment and proactive service."
                }
            },
            {
                "@type": "Question",
                "name": "What platforms enable AI-driven omnichannel retail?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A strong combination includes Salesforce Retail & Consumer Goods Cloud for engagement and SAP S/4HANA for Retail for operations, supported by AI and analytics layers."
                }
            },
            {
                "@type": "Question",
                "name": "Why is unified commerce critical for retailers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Without unified systems, AI can’t access consistent data. Unified commerce ensures inventory, customer, and order data flow seamlessly across channels."
                }
            },
            {
                "@type": "Question",
                "name": "How does Retail+ help retailers transform faster?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Retail+ delivers a complete model — advisory, implementation, integration, and optimization, so retailers move from strategy to execution without fragmentation."
                }
            }
        ]
    }
}

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/sapbuyplus-sap-ariba-connected-procurement";
    const currUrl = useUrl()


    const mainData = [
        "Retail has entered a new reality. Customers don’t think in channels anymore. They move from app to store to website to social in a single buying journey, and they expect every interaction to feel connected, relevant, and effortless.",
        "But here’s the problem.",
        "Most retailers are still running disconnected systems behind the scenes. One platform for e-commerce. Another for stores. Another for loyalty. Another for service. The result is a fractured experience that shows up as missed personalization, inconsistent pricing, slow fulfilment, and lost loyalty.",
        "This is exactly where AI-enabled omnichannel retail changes the game. Not by adding another tool, but by connecting the entire retail ecosystem and turning data into action at every touchpoint. Through Retail+, Rialtes helps retailers build that connected foundation combining Salesforce Retail & Consumer Goods Cloud and SAP S/4HANA for Retail to deliver intelligent experiences, operational agility, and scalable growth."

    ]
    const faqData = [
        {
            "question": "What does AI in retail really mean?",
            "answer": "AI in retail refers to using machine learning and predictive analytics to personalize experiences, optimize inventory, automate operations, and improve decision-making across the retail value chain."
        },
        {
            "question": "How does AI improve omnichannel retail?",
            "answer": "AI connects data from every channel and uses it to guide real-time actions — from personalized offers to dynamic fulfilment and proactive service."
        },
        {
            "question": "What platforms enable AI-driven omnichannel retail?",
            "answer": "A strong combination includes Salesforce Retail & Consumer Goods Cloud for engagement and SAP S/4HANA for Retail for operations, supported by AI and analytics layers."
        },
        {
            "question": "Why is unified commerce critical for retailers?",
            "answer": "Without unified systems, AI can’t access consistent data. Unified commerce ensures inventory, customer, and order data flow seamlessly across channels."
        },
        {
            "question": "How does Retail+ help retailers transform faster?",
            "answer": "Retail+ delivers a complete model — advisory, implementation, integration, and optimization, so retailers move from strategy to execution without fragmentation."
        }
    ]
    const omnichannelRetailBreaks = [
        {
            title: "Why Omnichannel Retail Still Breaks Without AI ",
            desc: [
                "Most omnichannel strategies fail for one simple reason."
            ],
            descc2: "They connect channels, but not intelligence.",
            descc3: "Without AI, retailers face three persistent challenges:",
            list: [
                {
                    "title": "Data lives in silos ",
                    "description": "across POS, e-commerce, CRM, and ERP"
                },
                {
                    "title": "Personalization is rule-based, ",
                    "description": "not behavior-driven"
                },
                {
                    "title": "Operations react late ",
                    "description": "because insights arrive after the moment has passed"
                },
            ],
            desc2:
                "This creates a dangerous gap between what customers expect and what systems can deliver.",
            descc: "AI in retail closes that gap by turning fragmented data into real-time decisions. It connects demand signals to inventory, customer intent to recommendations, and service interactions to loyalty outcomes.",
            comparison: {
                leftTitle: "Left: Channel-led retail",
                rightTitle: "Right: AI-led omnichannel retail",
                rows: [
                    {
                        left: "Inventory managed by channel, not centrally",
                        right: "Real-time inventory visibility across all locations"
                    },
                    {
                        left: "Personalization based on broad segments",
                        right: "AI-driven personalization at every touchpoint"
                    },
                    {
                        left: "Promotions run in silos",
                        right: "Dynamic pricing and promotions"
                    },
                    {
                        left: "Customer data scattered across systems",
                        right: "Unified customer profiles"
                    },
                    {
                        left: "Decisions made after the fact",
                        right: "Predictive insights guiding decisions"
                    }
                ]
            }



        }
    ];


    const aiDriven = [
        {
            "title": "AI-Driven Personalization: From Segments to Moments",
            "desc": [
                "Traditional personalization relies on static segments.",
                "AI-driven personalization adapts to each customer in real time."
            ],
            "descc": "With Salesforce Retail Cloud, retailers can:",
            "list": [
                "Build unified customer profiles across digital and physical touchpoints",
                "Use AI to predict next-best actions and product recommendations",
                "Trigger context-aware offers based on behavior, location, and purchase history",
                "Personalize loyalty experiences instead of running generic campaigns",


            ],
            "desc2": "The result is simple but powerful.",
            "desc3": "Customers stop feeling like targets. They start feeling understood.",
            "desc4": "What this looks like in practice:",
            "desc5": "A shopper browses running shoes online, tries them in-store, abandons the cart, and later receives a personalized offer through the mobile app with store pickup availability — all driven by connected intelligence."

        }
    ]

    const omnichannelRetail = [
        {
            "title": "Executing True Omnichannel Retail at Scale",
            "desc3": [
                "Omnichannel is easy to promise. Hard to execute.",
            ],
            "descc": "Execution breaks down when:",
            "list": [
                "Inventory visibility isn’t real-time",
                "Order management can’t flex across channels",
                "Service teams can’t see the full customer context",
            ],
            "desc2": "Salesforce Retail Cloud + SAP S/4HANA for Retail work together to solve this.",
            "desc7": "Salesforce manages engagement and experience.",
            "desc4": "SAP powers operations and fulfilment.",
            "desc5": "Together, they enable:",
            "list2": [
                "Buy online, pick up in store",
                "Endless aisle and ship-from-store",
                "Unified returns and exchanges",
                "Consistent pricing and promotions"
            ],
            "desc6": "Not as isolated features, but as one connected commerce engine."
        }
    ]

    const unifiedCommerce = [
        {
            "title": "Unified Commerce Systems: The Backbone of Modern Retail ",
            "desc": [
                "<a href='https://www.rialtes.com/industry/retail-industry-digital-transformation/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Retail transformation</a> stalls when front-end innovation outpaces back-end readiness. AI can only deliver value when it sits on top of clean, connected, and standardized systems."
            ],
            "desc2": "With SAP S/4HANA for Retail, organizations gain:",
            "list": [
                "Real-time inventory and demand visibility",
                "Intelligent replenishment and allocation",
                "Faster financial closes and margin analysis",
                "Supply chain optimization across stores and distribution centers",
            ],
            "descc": "When this operational core connects with Salesforce Retail Cloud, retailers finally break the wall between experience and execution.",

        }
    ]

    const retailplusFits = [
        {
            "title": "Where Retail+ Fits in the Transformation Journey ",
            "desc": "Technology alone doesn’t create omnichannel success.",
            "desc5": "Execution does.",
            "desc2": "<a href='https://www.rialtes.com/services/lob/retail-plus-business-consulting-omnichannel-solutions/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Retail+ by Rialtes</a> delivers an end-to-end transformation model that connects strategy, systems, and scale.",
            "desc3": "Retail+ Services Include: ",
            "retailServices": [
                {
                    "title": "Strategic Advisory",
                    "desc": "Align omnichannel goals with AI-ready architecture and business outcomes."
                },
                {
                    "title": "Solution Design",
                    "desc": "Build connected commerce models across Salesforce and SAP."
                },
                {
                    "title": "Implementation",
                    "desc": "Deploy Salesforce Retail Cloud and SAP S/4HANA Retail with speed and precision."
                }
                ,
                {
                    "title": "Quality Assurance",
                    "desc": "Ensure performance, security, and reliability across channels."
                },
                {
                    "title": "Integration",
                    "desc": "Connect POS, ERP, CRM, loyalty, marketing, and service systems."
                },
                {
                    "title": "Post-Go-Live Support",
                    "desc": "Continuous optimization, training, and analytics-driven improvement."
                }
            ],
            "desc4": "This is how retailers move from experimentation to execution and from digital ambition to measurable impact."
        }
    ]
    const retailAnalytics = [
        {
            "title": "Retail Analytics That Drive Decisions, Not Just Reports",
            "desc": "Retailers don’t lack data.",
            "desc2": "They lack clarity.",
            "descc": "AI-powered analytics changes the role of insight in three ways:",
            "list": [
                {
                    "title": "From hindsight to foresight",
                    "desc": "Predict demand swings, churn risk, and promotion impact."
                },
                {
                    "title": "From dashboards to decisions",
                    "desc": "AI surfaces actions, not just metrics."
                },
                {
                    "title": "From centralized to embedded",
                    "desc": "Insights appear inside workflows for store managers, merchandisers, and service teams."
                },

            ],
            "desc4": "With Retail+, analytics becomes part of everyday operations, not a monthly review ritual.",


        }
    ]
    const aienabledOmnichannel = [
        {
            "title": "What AI-Enabled Omnichannel Looks Like in Action",
            "desc": [
                "Here’s how modern retailers are using AI on the ground, not in pilots, but in daily operations."
            ],
            "list": [
                {
                    "heading": "Merchandising teams ",
                    "description": "use predictive models to spot regional demand patterns before trends show up in sales reports. Instead of relying on last season’s data, they adjust assortments by location, climate, and buying behavior, reducing markdowns and improving sell-through."
                },
                {
                    "heading": "Store managers ",
                    "description": "receive real-time alerts when fast-moving items are at risk of stockouts or when slow-moving inventory needs attention. That means fewer empty shelves, fewer rushed transfers, and a smoother experience for customers who expect availability on demand."
                },
                {
                    "heading": "Service agents ",
                    "description": "no longer jump between systems to understand a customer. With a unified view across online, in-store, and service interactions, they can resolve issues faster, personalize conversations, and turn support moments into loyalty moments."
                },
                {
                    "heading": "Marketing teams ",
                    "description": "shift from broad campaigns to precision engagement. AI analyzes browsing behavior, purchase history, and engagement signals to trigger campaigns that feel timely and relevant — not generic blasts based on assumptions."
                },
                {
                    "heading": "Leadership teams ",
                    "description": "stop waiting for end-of-month reports. They see real-time views of revenue performance, margin pressure, fulfilment bottlenecks, and channel effectiveness, allowing them to make decisions while there’s still time to change the outcome."
                }
            ],

        }

    ]
    const aiInRetail = [
        {
            "title": "Why AI in Retail Is Now a Competitive Requirement ",
            "desc": [
                "Retail leaders are no longer asking if they should invest in AI."
            ],
            "descc": "They’re asking how fast they can operationalize it.",
            "desc3": "Because today:",
            "list": [
                "Customers reward relevance",
                "Markets punish inefficiency",
                "Growth depends on agility",

            ],
            "desc2": "AI-powered omnichannel retail is no longer a differentiator.",
            "desc4": "It’s the baseline for staying relevant.",
            "desc5": "And this is where Rialtes plays a critical role. Through Retail+, we help retailers move from ambition to execution. The success in retail belongs to organizations that can act on intelligence, not just talk about it. With the right foundation and the right partner, that future is already within reach."

        }
    ]


    const ChevronRight = () => (
        <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 4xl:w-9 4xl:h-9"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );


    return (
        <section className="min-h-screen">
            <Seo
                title="RetailPlus: How AI Powers True Omnichannel Retail | Rialtes"
                description="RetailPlus by Rialtes connects strategy, systems, and scale to deliver AI-powered omnichannel retail that is no longer a differentiator, but the baseline."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/retailplus-ai-powered-omnichannel-retail/"
                }
            />

            <Script
                id="schema-voyager"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/woman-using-tablet-digital-overlay-technology.webp"
                        alt="Woman using glowing tablet at night with futuristic digital data overlay and bokeh lights representing connected technology"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/woman-using-tablet-digital-overlay-technology-mobile.webp"
                        alt="Woman using glowing tablet at night with futuristic digital data overlay and bokeh lights representing connected technology"
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Agentic AI </span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>15 January 2026
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">How AI Improves Omnichannel Retail Experiences</h1>
                            {/*Main section */}
                            <div className="xl:mt-[38px] mt-[33px]">
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

                                {/* Omnichannel Retail Breaks section */}
                                {
                                    omnichannelRetailBreaks.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />

                                            <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.descc2 }}

                                            />
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.descc3 }}

                                            />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold inline">{data.title}</p>
                                                        <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium inline">{data.description}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}

                                            />
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.descc}</p>

                                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

                                                <div className=" overflow-hidden bg-[#E6FBFA]">
                                                    <div className="bg-[#CCF7F5] px-6 py-4 font-semibold 4xl:text-[22px] 2xl:text-[20px] text-[18px] ">
                                                        {data.comparison.leftTitle}
                                                    </div>

                                                    {data.comparison.rows.map((row, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="px-6 py-4 border-t-8 border-white  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] font-medium"
                                                        >
                                                            {row.left}
                                                        </div>
                                                    ))}
                                                </div>

                                               
                                                <div className=" overflow-hidden bg-[#EAF4FF]">
                                                    <div className="bg-[#C6E7FF] px-6 py-4 font-semibold 4xl:text-[22px] 2xl:text-[20px] text-[18px]">
                                                        {data.comparison.rightTitle}
                                                    </div>

                                                    {data.comparison.rows.map((row, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="px-6 py-4 border-t-8 border-white 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] font-medium"
                                                        >
                                                            {row.right}
                                                        </div>
                                                    ))}
                                                </div>

                                            </div>





                                        </div>
                                    ))
                                }


                                {/* AI Driven section */}
                                {
                                    aiDriven.map((data, ind) => (
                                        // this blog has extra margin top
                                        <div className="md:mt-[60px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.descc }}
                                            />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                            <p className=" mt-5 font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc4 }}
                                            />
                                            <p className="mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc5 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/*   Omnichannel Retail section */}
                                {
                                    omnichannelRetail.map((data, ind) => (

                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc3} ulClassName="mt-5  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />

                                            <h3 className="mt-5  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data.descc}</h3>

                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc7 }}
                                            />
                                            <p className="mt-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc4 }}
                                            />
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc5 }}
                                            />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list2.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc6 }}
                                            />

                                        </div>
                                    ))
                                }

                                {/**Unified Commerce Network */}
                                {
                                    unifiedCommerce.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-5 4xl:text-[20px]  2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.descc}</p>


                                        </div>
                                    ))
                                }

                                {/*  Retail Analytics section */}
                                {retailAnalytics.map((data, ind) => (
                                    <div className="mt-[40px] md:mt-[50px]" key={ind}>

                                        <h2 className="font-semibold text-[#0092E0] text-[22px] md:text-[22px] xl:text-[26px] 2xl:text-[26px] 4xl:text-[32px] leading-tight">
                                            {data.title}
                                        </h2>

                                        <p className="mt-5 text-[16px] md:text-[16px] xl:text-[17px] 2xl:text-[17px] 4xl:text-[20px]">
                                            {data.desc}
                                        </p>
                                        <p className="text-[16px] md:text-[16px] xl:text-[17px] 2xl:text-[17px] 4xl:text-[20px]">
                                            {data.desc2}
                                        </p>
                                        <p className="mt-4 text-[16px] md:text-[16px] xl:text-[17px] 2xl:text-[17px] 4xl:text-[20px]">
                                            {data.descc}
                                        </p>


                                        <ol className="mt-5 pl-[22px] md:pl-[30px] space-y-4 list-decimal  text-[16px] md:text-[16px] xl:text-[17px] 2xl:text-[17px] 4xl:text-[20px] font-bold">
                                            {data.list.map((item, idx) => (
                                                <li key={idx}>
                                                    <p className="font-bold text-[16px] md:text-[16px] xl:text-[17px] 2xl:text-[17px] 4xl:text-[20px]">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-[16px] md:text-[16px] xl:text-[17px] 2xl:text-[17px] 4xl:text-[20px]">
                                                        {item.desc}
                                                    </p>
                                                </li>
                                            ))}
                                        </ol>


                                        <p className="mt-5 md:mt-10 text-[16px] md:text-[16px] xl:text-[17px] 2xl:text-[17px] 4xl:text-[20px]">
                                            {data.desc4}
                                        </p>
                                    </div>
                                ))}


                                {/* Retail+ Fits section */}
                                {retailplusFits.map((data, ind) => (
                                    <div className="mt-[40px] md:mt-[50px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">  {data.title}</h2>
                                        <p className="mt-5 text-[16px] md:text-[16px] xl:text-[17px] 2xl:text-[17px] 4xl:text-[20px]">
                                            {data.desc}
                                        </p>
                                        <p className=" text-[16px] md:text-[16px] xl:text-[17px] 2xl:text-[17px] 4xl:text-[20px]">
                                            {data.desc5}
                                        </p>
                                        <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                        <p className="mt-5 text-[20px] md:text-[20px] xl:text-[20px] 2xl:text-[21px] 4xl:text-[24px] font-bold">
                                            {data.desc3}
                                        </p>
                                        {
                                            data.retailServices.map((data, ind) => {
                                                return (
                                                    <div
                                                        className="md:flex mt-24 md:mt-10 py-[34px] 2xl:py-[46px] xl:py-[40px] px-[26px] 
                                                           md:pr-[44px] 4xl:pr-[80px] 2xl:pr-[60px] xl:pr-[40px] border border-[#707070] relative 
                                                           md:ml-[90px] sm:w-[80%] md:w-[78%] lg:w-[80%] xl:w-[86%] 4xl:w-[85%] 2xl:w-[78%] "
                                                        key={ind}>
                                                        <h4
                                                            className="md:absolute md:flex items-center justify-start
                                                                max-md:mt-[-80px] sm:mt-[-70px] md:mt-0
                                                                md:top-1/2 md:-translate-y-1/2 md:left-[-80px]
                                                                bg-[#006FBE] text-white font-semibold
                                                                4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]
                                                                px-[30px] py-[22px] leading-tight
                                                                4xl:w-[280px] 2xl:w-[280px] xl:w-[280px] md:w-[250px] w-fit 4xl:h-[100px] 2xl:h-[100px] xl:h-[90px]">
                                                            {data.title}
                                                        </h4>

                                                        <div
                                                            className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]
                                                                font-medium my-auto max-md:mt-8
                                                                md:ml-[200px] xl:ml-[220px] 4xl:ml-[240px] 2xl:ml-[230px]  "
                                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                                        />
                                                    </div>


                                                )
                                            })
                                        }
                                        <p className="mt-12 text-[16px] md:text-[16px] xl:text-[17px] 2xl:text-[17px] 4xl:text-[20px]">
                                            {data.desc4}
                                        </p>
                                    </div>
                                ))}


                                {/* Ai enabled Omnichannel  section */}
                                {
                                    aienabledOmnichannel.map((data, ind) => (
                                        <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />

                                            {data.list.map((data, idx) => (

                                                <div className="mt-8" key={idx}>
                                                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold inline " >{data.heading}</p>
                                                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium inline" key={idx}>{data.description}</p>
                                                </div>

                                            ))}

                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />

                                        </div>
                                    ))
                                }

                                {/**Ai In Retail Section */}
                                {
                                    aiInRetail.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />

                                            <p className="mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.descc }}
                                            />
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc4 }}
                                            />
                                            <p className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc5 }}
                                            />
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
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: AI in Retail and Omnichannel Transformation</h2>
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