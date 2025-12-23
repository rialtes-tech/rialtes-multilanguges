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
    const fullUrl = "https://www.rialtes.com/insights/blogs/partner-salesforce-right-way-for-growth";
    const currUrl = useUrl()
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Why Choosing the Right Salesforce Partner Matters | Rialtes",
        "description": "This blog breaks down what makes Salesforce partnerships successful, how they drive enterprise growth, and how the best partners deliver measurable value.",
        "image": "https://www.rialtes.com/images/blogs/cloud-computing-digital-storage.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/partner-salesforce-right-way-for-growth/"
        },
        "datePublished": "2025-12-18",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "FAQs: Choose the Right Salesforce Partner",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What does it mean to partner with Salesforce consulting companies?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It means working with certified experts who help you design, implement, integrate, and optimize Salesforce based on your enterprise goals."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Who are the leading Salesforce partner companies today?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The leading partners are those with strong certifications, proven industry experience, multi-cloud capabilities, and a clear track record of delivering enterprise outcomes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do Salesforce partners deliver long-term value?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "They align CRM with strategy, build scalable architectures, manage integrations, drive adoption, and offer ongoing optimization for continuous growth."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the benefits of collaborating with a trusted Salesforce partner?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You gain a reliable team that improves processes, enhances customer experience, streamlines workflows, and ensures your Salesforce environment evolves as your business grows."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can a Salesforce integration partner improve enterprise ROI?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "By unifying systems, eliminating data silos, increasing automation, and enabling real-time insights, all of which reduce costs and improve performance."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why should enterprises choose Rialtes as their Salesforce partner?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Because Rialtes blends strategy, technical strength, integration expertise, and long-term commitment to help enterprises unlock the full value of Salesforce."
                    }
                }
            ]
        }
    }
    const mainData = [
        "When an enterprise chooses to partner with Salesforce, the goal isn’t just implementation. It’s a long-term transformation. Strong partnerships with the right Salesforce partner companies can simplify complex processes, integrate disconnected systems, and unlock the true potential of the platform across every team.",
        "But here’s the thing: value doesn’t come from the platform alone. It comes from the collaboration between your business and the partner you choose. The right relationship turns Salesforce into a strategic engine — not another software license you’re trying to make sense of.",
        "This blog breaks down what makes Salesforce partnerships successful, how they drive enterprise growth, and how the best partners deliver measurable value."
    ]
    const faqData = [
        {
            "question": "What does it mean to partner with Salesforce consulting companies?",
            "answer": "It means working with certified experts who help you design, implement, integrate, and optimize Salesforce based on your enterprise goals."
        },
        {
            "question": "Who are the leading Salesforce partner companies today?",
            "answer": "The leading partners are those with strong certifications, proven industry experience, multi-cloud capabilities, and a clear track record of delivering enterprise outcomes."
        },
        {
            "question": "How do Salesforce partners deliver long-term value?",
            "answer": "They align CRM with strategy, build scalable architectures, manage integrations, drive adoption, and offer ongoing optimization for continuous growth."
        },
        {
            "question": "What are the benefits of collaborating with a trusted Salesforce partner?",
            "answer": "You gain a reliable team that improves processes, enhances customer experience, streamlines workflows, and ensures your Salesforce environment evolves as your business grows."
        },
        {
            "question": "How can a Salesforce integration partner improve enterprise ROI?",
            "answer": "By unifying systems, eliminating data silos, increasing automation, and enabling real-time insights, all of which reduce costs and improve performance."
        },
        {
            "question": "Why should enterprises choose Rialtes as their Salesforce partner?",
            "answer": "Because Rialtes blends strategy, technical strength, integration expertise, and long-term commitment to help enterprises unlock the full value of Salesforce."
        }
    ]
    const whyChoosingData = [
        {
            "title": "Why Choosing the Right Salesforce Partner Matters",
            "desc": "A Salesforce partner isn’t just a vendor. They become your:",
            "list": [
                "Strategy advisor ",
                "Integration architect ",
                "Long-term optimization specialist ",
                "Training and adoption guide ",
                "Innovation partner"
            ],
            "desc2": [
                "Your success depends on how well they understand your business model, challenges, workflows, and goals.",
                "This is where trusted Salesforce consulting strategies are important. They bring clarity to complex transformation projects and make sure your CRM strategy actually delivers business outcomes"
            ]
        }
    ]
    const whatAreData = [
        {
            "title": "What are The Qualities of Leading Salesforce Partner Companies?",
            "desc": [
                "Enterprises often ask which partners stand out in a crowded market. The leading firms are those that combine strategy, technical expertise, multi-cloud capability, and industry-specific knowledge. They’re the partners who not only solve today’s CRM challenges but also anticipate tomorrow’s.",
                "Top Salesforce partner companies typically have:"
            ],
            "list": [
                {
                    "title": "Strong Cloud Expertise",
                    "desc": "Sales, Service, Experience, Marketing, Commerce, Data Cloud, MuleSoft, Field Service, Tableau, and leading partners bring mastery across all."
                },
                {
                    "title": "Real-world Integration Experience",
                    "desc": "The best Salesforce integration partners build connected systems across ERPs, legacy tools, financial systems, and data sources to ensure your CRM never functions in isolation."
                },
                {
                    "title": "Proven Track Record",
                    "desc": "Case studies, measurable outcomes, and repeat enterprise relationships speak louder than any certification list."
                },
                {
                    "title": "Strategic Thinking",
                    "desc": "This is the core of an  <a href='https://www.linkedin.com/pulse/finding-ideal-salesforce-consulting-lvwcf/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>ideal Salesforce consulting company for enterprises </a>  — a partner who understands growth levers, not just configurations."
                }
            ]
        }
    ]
    const howSalesforceData = [
        {
            "title": "How Salesforce Partners Deliver Enterprise Value",
            "desc": "Let’s break down the real ways Salesforce partners accelerate enterprise transformation",
            "list": [
                {
                    "title": "They align Salesforce with business strategy",
                    "desc": ["Technology only works when it’s tied to vision.", "Great partners start by understanding:"],
                    "descData": "",
                    "list": [
                        "Your customers ",
                        "Your sales cycles ",
                        "Your service flows ",
                        "Your operational bottlenecks ",
                        "Your long-term objectives"
                    ],
                    "desc2": "With this, they build Salesforce environments that solve real problems instead of creating new ones."
                },
                {
                    "title": "They architect scalable and future-proof systems",
                    "desc": [
                        "Enterprises evolve. Workflows change. Teams expand.",
                        "A strong partner ensures your CRM scales with you — not against you"
                    ],
                    "descData": "This includes:",
                    "list": [
                        "Clean data models ",
                        "Modular automation ",
                        "Strong security governance ",
                        "Future-ready integrations ",
                        "Cloud expansion readiness"
                    ],
                    "desc2": "These are the foundations of <a href='https://www.rialtes.com/insights/blogs/salesforce-integration-partners-for-enterprises-to-scale/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>enterprise ROI with Salesforce integration partners</a>"
                },
                {
                    "title": "They make integrations work smoothly",
                    "desc": [
                        "Data silos kill business efficiency.",
                        "Leading Salesforce partners specialize in connecting platforms so your teams get a unified view of customers, operations, and KPIs."
                    ],
                    "descData": "They excel at:",
                    "list": [
                        "SAP integrations ",
                        "ERP connections ",
                        "Finance dashboards ",
                        "Real-time data syncing ",
                        "API-driven automations"
                    ],
                    "desc2": "This is where partners matter most."
                },
                {
                    "title": "They drive adoption and change management",
                    "desc": [
                        "A CRM that no one uses doesn’t create value.",
                        "Top partners design structured enablement programs that make Salesforce intuitive, helpful, and woven into everyday workflows."
                    ],

                },
                {
                    "title": "They enable continuous improvement",
                    "desc": [
                        "The relationship doesn’t end at go-live.",
                        "Great partners track your metrics, recommend new enhancements, fix inefficiencies, and evolve your CRM strategy quarter after quarter."
                    ],
                    "descData": "This is the heart of Salesforce collaboration benefits: you get a team that grows with you",

                }
            ]
        }
    ]
    const howStrategicData = [
        {
            "title": "How Strategic Salesforce Partnerships Turn Consulting into Continuous Growth",
            "desc": [
                "The best Salesforce partner companies don’t rely on guesswork. They follow a disciplined, repeatable approach that aligns technology with business outcomes. When these strategies come together, the result is a CRM ecosystem that runs smoothly, scales confidently, and delivers measurable value.",
                "Let’s break down the core methods high-performing partners use to help enterprises grow."
            ],
            "list": [
                {
                    "title": "Process-first <br/> discovery",
                    "desc": "Everything starts with clarity. Before touching configurations or building integrations, top partners take time to understand how your business works.",
                    "desc2": "They map:",
                    "listData": [
                        "How leads move through the funnel ",
                        "How your service teams respond to cases ",
                        "Where data gets duplicated ",
                        "What slows teams down ",
                        "What customers expect across channels"
                    ],
                    "desc3": "This process-first approach ensures Salesforce reflects real workflows instead of forcing teams into rigid templates. Partners build from the ground up, aligning every field, object, and automation to your operational reality."
                },
                {
                    "title": "Data intelligence <br/> that drives decisions",
                    "desc": "Data quality and visibility can make or break Salesforce projects. Leading partners treat data as a strategic asset, not an afterthought.",
                    "desc2": "Their focus goes beyond dashboards. They design:",
                    "listData": [
                        "Clean data models ",
                        "Consistent naming and governance ",
                        "Automated data validation rules ",
                        "Predictive insights using Einstein AI ",
                        "Real-time reporting through Data Clou"
                    ],
                    "desc3": "This gives leaders a clear view into pipeline health, service performance, financial metrics, and customer behavior—without relying on manual exports or siloed tools."
                },
                {
                    "title": "Automation that supports <br/> teams (not overwhelms them)",
                    "desc": "Every enterprise wants automation, but few think about adoption. Good partners do. They build workflows that make daily work easier instead of more complicated.",
                    "desc2": "This includes:",
                    "listData": [
                        "Auto-assigning tasks based on skills ",
                        "Triggering follow-ups when deals stall ",
                        "Routing service cases to the right queues ",
                        "Automating approval flows for pricing or discounts ",
                        "Eliminating repetitive data entry"
                    ],
                    "desc3": "These automations shorten response times, reduce errors, and free up teams to focus on higher-value work. When built strategically, automation feels like an extra teammate—not another system to fight."
                },
                {
                    "title": "Personalized customer <br/> journeys powered by AI",
                    "desc": "Enterprise growth depends on customer experience. Salesforce partners use AI and automation to design journeys that guide customers from first interaction to long-term loyalty.",
                    "desc2": "This covers:",
                    "listData": [
                        "Tailored lead nurturing sequences ",
                        "Next-best-action recommendations ",
                        "Predictive customer scoring ",
                        "Personalized upsell and retention paths ",
                        "Unified experiences across Sales, Service, and Marketing"
                    ],
                    "desc3": "Instead of generic touchpoints, every customer receives communication that reflects their preferences, history, and intent. This is how modern enterprises improve conversion rates, increase CSAT scores, and strengthen lifetime value."
                },
                {
                    "title": "Governance and quality <br/> that keep systems scalable",
                    "desc": "A CRM built without structure becomes messy fast. The best partners prevent this by establishing strong governance from day one.",
                    "desc2": "They enforce:",
                    "listData": [
                        "Code reviews for clean development ",
                        "Rigorous testing before deployments ",
                        "Documentation for every component ",
                        "Performance monitoring to prevent slowdown ",
                        "Security best practices and compliance safeguards"
                    ],
                    "desc3": ""
                }
            ]
        }
    ]
    const trueBenefitData = [
        {
            "title": "The True Benefit of Partnering with Salesforce: Shared Vision and Trusted Execution",
            "desc": [
                "When you choose the right Salesforce partner, Salesforce stops being just a platform and starts becoming a competitive advantage. The relationship moves beyond technical delivery into a strategic partnership built on shared goals, measurable outcomes, and long-term business impact.",
                "A true Salesforce partnership begins with a shared vision that aligns business objectives, KPIs, and transformation priorities upfront and succeeds through trusted execution, driven by accountability, governance, and continuous optimization. This combination is what turns strategy into results.We break this down clearly in our <span>Salesforce consulting playbook</span>.",
                "A trusted Salesforce partner brings:"
            ],
            "list": [
                {
                    "title": "Confidence in your digital roadmap ",
                    "desc": "Clear alignment between business goals and Salesforce capabilities ensures every initiative supports long-term growth."
                },
                {
                    "title": "Efficiency across workflows ",
                    "desc": "Streamlined processes that reduce friction, eliminate manual work, and improve cross-team productivity."
                },
                {
                    "title": "Intelligence across decision-making ",
                    "desc": "Unified, reliable data that enables faster, smarter, and more confident business decisions."
                },
                {
                    "title": "Integration across systems",
                    "desc": "Seamless connectivity between Salesforce, ERP, legacy platforms, and third-party tools, creating a single source of truth."
                },
                {
                    "title": "Growth across every function ",
                    "desc": "Sales, service, marketing, operations, and leadership all benefit from scalable, outcome-driven execution."
                }
            ],
            "desc2": "This is the difference between “using Salesforce” and getting value from Salesforce"
        }
    ]
    const whyRialtesData = [
        {
            "title": "Why Rialtes Is a Trusted Salesforce Partner Company",
            "desc": [
                "Rialtes combines strategic clarity and deep Salesforce expertise with industry-specific insights across manufacturing, retail, real estate, healthcare, education, and financial services.",
                "Enterprises trust us because we deliver:"
            ],
            "list": [
                "End - to - end Salesforce consulting",
                "Integration excellence (ERP, SAP, custom systems, data platforms) ",
                "Multi-cloud implementations ",
                "A proven governance and delivery framework ",
                "Adoption, training, and long-term optimization ",
                "Continuous innovation and enhancement cycles"
            ],
            "desc2": [
                "Our job doesn’t end at implementing the Salesforce platform; we shape it around your business model and long-term vision.",
                "If you’re looking for a Salesforce partner company that delivers measurable value and builds a lasting partnership, Rialtes is the team that helps enterprises turn Salesforce into a true growth engine."
            ]
        }
    ]
    return (
        <section className="min-h-screen">
            <Seo
                title=" Why Choosing the Right Salesforce Partner Matters | Rialtes"
                description="This blog breaks down what makes Salesforce partnerships successful, how they drive enterprise growth, and how the best partners deliver measurable value."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/partner-salesforce-right-way-for-growth/"
                }
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
                        src="/images/blog/cloud-computing-digital-storage.webp"
                        alt="Hand holding a smartphone with a glowing cloud icon representing cloud computing and data storage"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/cloud-computing-digital-storage-mobile.webp"
                        alt="Hand holding a smartphone with a glowing cloud icon representing cloud computing and data storage"
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Salesforce Consulting</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>18 December 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">Partner Salesforce the Right Way: Creating Strategic Relationships That Deliver Measurable Growth</h1>

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

                                {/* why choosing section */}
                                {
                                    whyChoosingData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                            <UnorderedList arrName={data.desc2} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        </div>
                                    ))
                                }
                                {/* what are section */}
                                {
                                    whatAreData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] sm:w-[80%] md:w-full xl:w-[96%]">
                                                {
                                                    data.list.map((elem, id) => {
                                                        return (
                                                            <div className="4xl:p-[46px] p-[32px] border border-[#707070]" key={id}>
                                                                <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070]">{elem.title}</h3>
                                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: elem.desc }} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                        </div>
                                    ))
                                }

                                {/* how salesforce section */}
                                {
                                    howSalesforceData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                            {
                                                data.list.map((elem, id) => (
                                                    <div className="" key={id}>
                                                        <h3 className="4xl:text-[24px] 2xl:text-[21px] text-[20px] font-bold mt-10">{id + 1}. {elem.title}</h3>
                                                        <UnorderedList arrName={elem.desc} ulClassName={`mt-5 md:pl-[24px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium`} />
                                                        <p
                                                            className="md:pl-[24px] mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem.descData }}
                                                        />
                                                        {
                                                            elem.list &&
                                                            <UnorderedList arrName={elem.list} ulClassName="mt-5 space-y-2 pl-[26px] md:pl-[64px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                                        }
                                                        {elem.desc2 && (
                                                            <p
                                                                className="md:pl-[24px] mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                                dangerouslySetInnerHTML={{ __html: elem.desc2 }}
                                                            />
                                                        )}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }

                                {/* how strategic section */}

                                {
                                    howStrategicData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName={`mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium`} />

                                            {
                                                data.list.map((elem, id) => (
                                                    <div key={id}>
                                                        <div className="flex items-center w-full mt-14 gap-5 md:gap-10">
                                                            <div className="flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-[#1486E6] text-white font-bold 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">
                                                                {id + 1}
                                                            </div>

                                                            <div>
                                                                <h3 className={`font-bold text-[18px] md:text-[19px] xl:text-[19px] 4xl:text-[22px]`} dangerouslySetInnerHTML={{ __html: elem.title }} />
                                                            </div>

                                                            <div className="flex-1 border-t border-[#707070] md:block hidden"></div>
                                                        </div>

                                                        <p
                                                            className="mt-5 md:mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                        />
                                                        <p
                                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem.desc2 }}
                                                        />

                                                        <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                            {elem.listData.map((data, idx) => (
                                                                <li key={idx}><h4 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</h4></li>
                                                            ))}
                                                        </ul>
                                                        <p
                                                            className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem.desc3 }}
                                                        />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                                {/* true benefits section */}
                                {
                                    trueBenefitData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />

                                            <ul className={`mt-5 space-y-8 pl-[26px] lg:pl-[36px] list-disc`}>
                                                {data.list.map((elem, idx) => (
                                                    <div key={idx}>
                                                        <li><h3 className="4xl:text-[24px] 2xl:text-[21px] text-[20px] font-bold">{elem.title}</h3></li>
                                                        <p className="mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                        />
                                                    </div>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/* why rialtes section */}
                                {
                                    whyRialtesData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><h3 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</h3></li>
                                                ))}
                                            </ul>
                                            <UnorderedList arrName={data.desc2} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
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
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Choose the Right Salesforce Partner </h2>
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