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
    const fullUrl = "https://www.rialtes.com/insights/blogs/sap-implementation-strategies-for-2026-success/";
    const currUrl = useUrl()

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Proven SAP Implementation Strategies that Minimize Risk and Accelerate ROI | Rialtes",
        "description": "Discover proven SAP implementation strategies that reduce risk, ensure faster ROI, and align technology with business goals. Learn how expert SAP consultants and value-driven partnerships enable seamless integration, user adoption, and measurable business outcomes.",
        "image": "https://www.rialtes.com/images/blogs/futuristic-data-analytics-visualization.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/sap-implementation-strategies-for-2026-success/"
        },
        "datePublished": "2025-11-11",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "SAP Implementation Strategies to Minimize Risk FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are the key steps in a successful SAP implementation process?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A successful SAP implementation includes discovery, design, configuration, testing, go-live, and continuous optimization. Each step should align with business goals and be guided by experienced SAP consultants to ensure smooth execution and maximum ROI."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do SAP implementation partners minimize project risk?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Top SAP partners use proven methodologies such as SAP Activate, agile frameworks, and structured governance models. These approaches enable early risk identification, clear milestones, and controlled delivery within time and budget."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What makes Rialtes a trusted SAP implementation partner for enterprises?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Rialtes combines deep SAP expertise with industry-specific knowledge to deliver value-driven implementations. With experience across S/4HANA, SuccessFactors, and Analytics Cloud, Rialtes ensures every project aligns with strategic enterprise outcomes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does an SAP implementation usually take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The typical SAP implementation takes between 6 and 18 months, depending on project scope, data complexity, and the level of customization required. This timeline includes discovery, migration, testing, and training phases."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the biggest ROI drivers after SAP go-live?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Post-launch ROI is driven by automation, real-time analytics, process efficiency, and continuous system optimization. Enterprises that align SAP with strategic KPIs often achieve faster decision-making and long-term scalability."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can working with expert SAP consultants improve business outcomes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Expert SAP consultants ensure that every module is tailored to your business processes. Their industry experience helps achieve compliance, increase user adoption, and drive measurable improvements across finance, operations, and supply chain."
                    }
                }
            ]
        }
    }
    const mainData = [
        "We know that implementing SAP isn’t just about upgrading a system. It’s about reshaping how an enterprise operates, from finance and supply chain to HR and customer experience. When done right, it can cut costs, increase transparency, and accelerate growth. When done wrong, it can drain budgets and frustrate teams for months.",
        "According to McKinsey, nearly 55% of large ERP implementations either exceed budgets or fail to deliver expected ROI. The culprit? A lack of strategic alignment and inadequate change management. SAP implementation isn’t a plug-and-play exercise; it demands a roadmap that balances technology, business goals, and people.",
        "This is where expert SAP consultants and value-driven implementation partners play a defining role. They don’t just configure modules; they translate enterprise vision into scalable architecture. Let’s break down how you can build a strategy that minimizes risk and delivers measurable value."
    ]
    const howAiImprovesData = [
        {
            "title": "Understanding the Real Challenges in SAP Implementation",
            "desc": "Even the most advanced organizations stumble during SAP projects. The usual pitfalls include:",
            "listDataTitle": "Why Many Enterprises Struggle with SAP Deployments",
            "list": [
                {
                    "title": "Poor requirement mapping",
                    "desc": "Implementing technology without defining business objectives."
                },
                {
                    "title": "Fragmented systems",
                    "desc": "Disconnected tools for finance, procurement, and operations."
                },
                {
                    "title": "Limited user adoption",
                    "desc": "Teams resist change when systems feel too complex."
                },
                {
                    "title": "Inadequate post-go-live support",
                    "desc": "leading to unresolved data and performance issues."
                }
            ],
            "desc2": "A 2024 Gartner report highlighted that over 60% of ERP project overruns stem from a lack of clarity between IT and business stakeholders. The message is clear: SAP transformation isn’t just a tech project, it’s a business reinvention initiative.",
        }
    ]
    const implementData = [
        "SAP implementation affects every layer of an organization. Without strong governance, scope creep, over-customization, and untested integrations can snowball into massive costs.",
        "To safeguard ROI, enterprises need a strategy that connects technical outcomes to business KPIs, whether that’s improved cash flow visibility, faster order cycles, or better compliance reporting."
    ]
    const fivePillarsData = [
        {
            "title": "Define a Clear Business Case and KPIs from Day One",
            "list": [
                "Before you even configure a single module, define why you’re implementing SAP. Are you optimizing procurement? Enhancing financial transparency? Or scaling for international growth? Every successful project starts with measurable outcomes, reducing Opex by 20%, accelerating reporting cycles by 30%, or increasing order fulfilment speed by 25%.",
                "For example, a global manufacturing firm implemented SAP S/4HANA to streamline its financial consolidation process. The result? Reporting time dropped from 15 days to 4, freeing up finance teams for strategic analysis instead of manual reconciliation."
            ]
        },
        {
            "title": "Work with Expert SAP Consultants Who Know Your Industry",
            "list": [
                "SAP has immense depth, but only when configured for your industry’s nuances. A retail implementation differs vastly from healthcare, logistics, or manufacturing. <a href='https://www.linkedin.com/pulse/reimagine-enterprise-efficiency-sap-consulting-4pm1f/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Working with expert SAP consultants</a> ensures your solution fits your workflows, not the other way around. These consultants bring functional experience in specific domains, ensuring compliance and operational alignment.",
                "For instance, a global logistics enterprise partnered with an SAP consulting team specializing in supply chain optimization. By mapping real-time tracking data into SAP’s Logistics Execution module, they cut delivery delays by 40% and reduced manual data entry by 50%."
            ]
        },
        {
            "title": "Focus on a Seamless Data Migration and Integration Plan",
            "list": [
                "Data migration is where most projects stumble. Legacy systems, duplicate records, and inconsistent formats lead to poor insights and reporting chaos post-launch.",
                "A structured data migration strategy involves"
            ],
            "list2": [
                "Cleansing and validating data before migration.",
                "Mapping master data to ensure uniformity across systems.",
                "Integrating SAP with existing ERP, CRM, and HR platforms.",
            ],
            "list3": [
                "<a href='https://www.rialtes.com/insights/blogs/boost-enterprise-agility-with-sap-consulting-implementation-services/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Custom SAP development and integration</a> ensure smooth information flow across the enterprise, from sales to finance. Think about integrating SAP with Salesforce for real-time customer insights or connecting it with IoT systems to enable predictive maintenance.",
                "When a European energy firm linked its SAP ERP with field service tools via open APIs, it improved work order accuracy by 35% and reduced downtime across operations by 22%."
            ]
        },
        {
            "title": "Empower Users Early",
            "list": [
                "The best SAP system in the world fails if people don’t use it. End-user adoption is the cornerstone of every implementation. Leading enterprises now embed change management and training into every implementation phase, not as an afterthought. Early user involvement helps identify usability gaps and builds confidence across teams.",
                "An energy company in North America launched an internal SAP learning hub six months before its official rollout. The result? User adoption hit 92% within the first 30 days, while support tickets dropped by 40% post-launch."
            ]
        },
        {
            "title": "Measure Value Continuously — Not Just at Go-Live",
            "list": [
                "Success evolves through continuous improvement. Enterprises that conduct regular post-implementation audits often find opportunities to optimize workflows, automate redundant tasks, and unlock new efficiencies.",
                "With value-driven SAP partnerships, companies benefit from ongoing performance tuning, system updates, and roadmap alignment to business goals. Continuous value realization ensures the ROI curve doesn’t flatten after year one."
            ]
        }
    ]
    const howSapData = [
        {
            "title": "Proven Methodologies that Minimize Project Risks",
            "desc": [
                "Top SAP implementation partners follow structured methodologies to reduce risks and control project complexity. SAP’s own Activate methodology combines agile principles with predefined best practices, helping teams go live faster without sacrificing quality. This approach shortens timelines by 20–30% and ensures each phase, from discovery to deployment, remains transparent and measurable."
            ]
        },
        {
            "title": "Aligning Technical Implementation with Business Strategy",
            "desc": [
                "Technology shouldn’t lead; strategy should. The best SAP partners make sure every module supports a business outcome.",
                "Take a manufacturing enterprise integrating SAP PP (Production Planning) with its MES (Manufacturing Execution System). By aligning system logic with production KPIs, the company improved capacity utilization by 28% and reduced material wastage by 17%."
            ]
        },
        {
            "title": "Predictive and Proactive Maintenance with SAP S/4HANA",
            "desc": [
                "SAP S/4HANA’s AI and predictive analytics capabilities are game changers for modern enterprises. Predictive maintenance helps detect anomalies in real time, preventing equipment failures before they occur.",
                "A European auto parts manufacturer used SAP’s predictive modeling tools to analyze machine data. The system forecasted potential breakdowns and automatically generated maintenance orders, resulting in 22% lower operational costs and 30% less downtime."
            ]
        }
    ]
    const commonData = [
        {
            "title": "Building a Value-Driven Partnership for Scalable SAP Success",
            "desc": [
                "A successful SAP ecosystem never stays static. Cloud transitions, new regulatory requirements, and AI-led analytics all demand constant evolution.",
                "<a href='https://www.rialtes.com/insights/blogs/why-enterprises-choose-sap-consulting-partners/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Value-driven SAP partnerships</a> go beyond go-live support. They focus on long-term scalability, ensuring enterprises stay adaptable as business priorities shift. Regular health checks, performance reviews, and feature updates ensure your SAP environment continues to evolve with your business."
            ]
        },
        {
            "title": "The ROI Equation: Turning Implementation Costs into Measurable Gains",
            "desc": [
                "SAP’s true ROI isn’t just cost savings; it’s more about agility and foresight. A Deloitte report found that enterprises leveraging integrated SAP environments see up to 33% higher ROI within the first year compared to those that treat SAP as an isolated IT tool.",
                "ROI drivers include:"
            ],
            "list": [
                {
                    "title": "Faster decision-making",
                    "desc": "with unified data."
                },
                {
                    "title": "Operational cost reduction",
                    "desc": "through automation."
                },
                {
                    "title": "Scalable innovation",
                    "desc": "through continuous integration of new modules."
                }
            ],
            "desc2": "When implementation partners align business goals with SAP capabilities, enterprises can continuously extract value, not just efficiency."
        }, {
            "title": "Why Rialtes is the SAP Implementation Partner Enterprises Trust",
            "desc": [
                "Every enterprise transformation begins with one decision: choosing the right partner. Rialtes isn’t just an SAP implementation vendor; it’s a team of innovators and strategists who understand the intersection of business and technology.",
                "As one of the top SAP implementation partners, Rialtes brings:"
            ],
            "list": [
                "Deep expertise across SAP S/4HANA, SuccessFactors, and Analytics Cloud.",
                "A structured implementation roadmap aligned with your enterprise strategy.",
                "Cross-industry experience, from manufacturing and logistics to healthcare and real estate.",
                "Continuous post-go-live support for optimization and scalability."
            ],
            "desc2": "At Rialtes, we create value ecosystems where SAP becomes a driver of growth. Our mission is to help enterprises modernize, innovate, and thrive with seamless <a href='https://www.rialtes.com/solutions/enterprise-platforms/sap-consulting-implementation-partners/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>SAP implementation services</a> designed for measurable outcomes."
        }
    ]
    const faqs = [
        {
            "question": "What are the key steps in a successful SAP implementation process?",
            "answer": "The process includes discovery, design, configuration, testing, go-live, and continuous optimization, all supported by experienced SAP consultants who align business goals with technology outcomes."
        },
        {
            "question": "How do SAP implementation partners minimize project risk?",
            "answer": "Top partners use proven frameworks like SAP Activate, agile methods, and data-driven governance to predict and mitigate risks while keeping projects on schedule and within budget."
        },
        {
            "question": "What makes Rialtes a trusted SAP implementation partner for enterprises?",
            "answer": "Rialtes combines custom SAP development and integration expertise with deep industry knowledge, ensuring that every implementation delivers measurable business results."
        },
        {
            "question": "How long does an SAP implementation usually take?",
            "answer": "Depending on project size and complexity, implementations typically take 6 to 18 months, including planning, migration, and training phases."
        },
        {
            "question": "What are the biggest ROI drivers after SAP go-live?",
            "answer": "Automation, real-time analytics, process efficiency, and strategic scalability are the main contributors to post-launch ROI."
        },
        {
            "question": "How can working with expert SAP consultants improve business outcomes?",
            "answer": "Working with expert SAP consultants ensures your implementation aligns with core business needs, maximizes adoption, and unlocks long-term value across all operations."
        }
    ]


    return (
        <section className="min-h-screen">
            <Seo
                title=" Expert SAP Implementation Strategies for 2026 Success | Rialtes"
                description="SAP implementation isn't a plug-and-play exercise; it demands a roadmap and strategy that balances technology, business goals, and people."
                keywords="Partners, website, welcome"
                canonical={`https://www.rialtes.com/insights/blogs/sap-implementation-strategies-for-2026-success/`}
            />

            <Script
                id="schema-implementation"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/futuristic-data-analytics-visualization.webp"
                        alt="Conceptual illustration of a smart city connected through cloud computing and data networks"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/futuristic-data-analytics-visualization-mobile.webp"
                        alt="Conceptual illustration of a smart city connected through cloud computing and data networks"
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
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>11 November 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">Proven SAP Implementation Strategies that Minimize Risk and Accelerate ROI</h1>

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
                            </div>

                        </div>

                        {/* understanding section */}
                        <div className="md:mt-[50px] mt-[40px]">
                            {
                                howAiImprovesData.map((data, ind) => {
                                    return (
                                        <div key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{data.listDataTitle}</h3>
                                            <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] 4xl:w-[1400px] sm:w-[80%] md:w-full">
                                                {
                                                    data.list.map((elem, id) => {
                                                        return (
                                                            <div className="4xl:p-[30px] p-[22px] border border-[#707070]" key={id}>
                                                                <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070]">{elem.title}</h3>
                                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: elem.desc }} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2}</p>

                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* how implement section */}
                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">How Implementation Complexity Impacts ROI</h2>
                            {
                                implementData.map((data, ind) => {
                                    return (
                                        <p
                                            key={ind}
                                            className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                            dangerouslySetInnerHTML={{ __html: data }}
                                        />
                                    )
                                })
                            }
                        </div>

                        {/* 5 pillars section */}
                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">The 5 Pillars of a Successful SAP Implementation Strategy</h2>
                            {
                                fivePillarsData.map((data, ind) => {
                                    return (
                                        <div className="mt-8" key={ind}>
                                            <h3 className="font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">{ind + 1}. {data.title}</h3>
                                            {
                                                data.list.map((elem, id) => (
                                                    <p
                                                        key={id}
                                                        className="mt-5 md:pl-[26px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: elem }}
                                                    />
                                                ))
                                            }
                                            {
                                                data.list2 && <UnorderedList arrName={data.list2} ulClassName="pl-[36px] lg:pl-[60px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                            }

                                            {
                                                data.list3 &&
                                                data.list3.map((elem, id) => (
                                                    <p
                                                        key={id}
                                                        className="mt-5 md:pl-[26px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: elem }}
                                                    />
                                                ))
                                            }
                                        </div>
                                    )
                                })
                            }

                        </div>

                        {/* how sap section */}
                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">How SAP Implementation Partners Reduce Risk and Ensure Long-Term Value</h2>
                            {
                                howSapData.map((data, ind) => {
                                    return (
                                        <div key={ind}>
                                            <h3 className="mt-[22px] xl:mt-[30px] font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">{data.title}</h3>
                                            {
                                                data.desc.map((elem, id) => {
                                                    return (
                                                        <p
                                                            key={id}
                                                            className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                            dangerouslySetInnerHTML={{ __html: elem }}
                                                        />
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/* common data */}
                        {
                            commonData.map((data, ind) => (
                                <div className="md:mt-[50px] mt-[40px]" key={`common-${ind}`}>
                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                        {data.title}
                                    </h2>

                                    {data.desc.map((elem, id) => (
                                        <p
                                            key={`desc-${ind}-${id}`}
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: elem }}
                                        />
                                    ))}

                                    {data.list && ind === 1 && (
                                        <ul className="pl-[36px] lg:pl-[46px] space-y-3 mt-5">
                                            {data.list.map((elems, idx) => (
                                                <li
                                                    key={`list1-${ind}-${idx}`}
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium"
                                                >
                                                    <h3 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        {elems.title}
                                                    </h3>{" "}
                                                    {elems.desc}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {data.list && ind === 2 && (
                                        <UnorderedList
                                            key={`unordered-${ind}`}
                                            arrName={data.list}
                                            ulClassName="pl-[36px] lg:pl-[56px] space-y-3 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium"
                                        />
                                    )}

                                    {data.desc2 && (
                                        <p
                                            key={`desc2-${ind}`}
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                    )}
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: SAP Implementation Strategies to Minimize Risk</h2>
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