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
    const fullUrl = "https://www.rialtes.com/insights/blogs/integration-partners-for-salesforce-cutting-complexity-increasing-roi";
    const currUrl = useUrl()
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Integration Partners for Salesforce: Cutting Complexity, Increasing ROI | Rialtes",
        "description": "Salesforce integration partners help enterprises reduce system fragmentation, automate processes, and improve ROI by connecting CRM with ERP, data, and operations.",
        "image": "https://www.rialtes.com/images/blogs/salesforce-integration-partners.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/salesforce-integration-partners-for-enterprises-to-scale/"
        },
        "datePublished": "2025-12-23",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "FAQs: Salesforce Integration Partners & Enterprise ROI",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What do Salesforce integration partners do for enterprises?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Salesforce integration partners connect Salesforce with core enterprise systems such as ERP, finance, supply chain, marketing platforms, and data warehouses. Their role goes beyond technical connectors. They design integration architectures that unify data, automate processes, and ensure Salesforce operates as a central intelligence layer across the business."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the benefits of Salesforce integration services in the USA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Salesforce integration services in the USA offer deep expertise in enterprise-scale implementations, regulatory compliance, and industry-specific requirements. U.S.-based integration partners typically bring strong experience with complex ERP integrations, multi-cloud Salesforce deployments, and advanced data platforms that support AI and analytics initiatives."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does Salesforce integration improve ROI?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Integration improves ROI by increasing automation, reducing data duplication, and improving decision accuracy. When Salesforce is integrated with finance, operations, and service systems, teams spend less time reconciling data and more time acting on insights. This leads to faster sales cycles, better customer experiences, and lower operational costs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do Salesforce integration partners support AI and analytics?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI depends on clean, connected data. Salesforce integration partners unify data across systems, so AI models, analytics, and Data Cloud insights are accurate and actionable. Without integration, AI outputs remain fragmented. With it, Salesforce becomes a predictive and proactive platform rather than a reactive one."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do Salesforce integration partners ensure long-term scalability?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "They build integration architectures that support future growth, cloud expansion, and evolving business models. This includes reusable APIs, event-driven integrations, security governance, and performance optimization. Scalability is planned from day one, not added later as a fix."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do you choose the right Salesforce integration partner?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The right partner combines Salesforce expertise with enterprise integration experience. Look for proven success integrating Salesforce with ERP systems, strong data governance practices, and a strategic approach aligned to business outcomes. A trusted Salesforce partner should understand both technology and operational realities."
                    }
                }
            ]
        }

    }
    const mainData = [
        "Salesforce sits at the center of enterprise digital strategy for a reason. It connects revenue, customer experience, service operations, and data-driven decision-making on a single platform. Yet across industries, a familiar pattern keeps showing up: organizations invest heavily in Salesforce, adopt advanced clouds, and still see limited business impact.",
        "The bigger issue here isn’t Salesforce's capability. It’s fragmentation around it.",
        "When Salesforce operates alongside disconnected ERP systems, siloed finance tools, isolated service platforms, and manual data transfers, its intelligence is constrained. Critical signals get lost between systems. Processes slow down. ROI quietly erodes over time. This is where <a href='https://www.rialtes.com/insights/blogs/partner-salesforce-right-way-for-growth/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>trusted Salesforce partner relationships</a> come in handy; it stops being technical implementers and becomes strategic growth enablers.",
        "For enterprises focused on scale, automation, and AI readiness, integration is no longer a supporting activity. It’s foundational. It determines whether Salesforce functions as a static system of record or evolves into a dynamic system of intelligence that drives measurable business outcomes."
    ]
    const faqData = [
        {
            "question": "What do Salesforce integration partners do for enterprises?",
            "answer": "Salesforce integration partners connect Salesforce with core enterprise systems such as ERP, finance, supply chain, marketing platforms, and data warehouses. Their role goes beyond technical connectors. They design integration architectures that unify data, automate processes, and ensure Salesforce operates as a central intelligence layer across the business."
        },
        {
            "question": "What are the benefits of Salesforce integration services in the USA?",
            "answer": "Salesforce integration services in the USA offer deep expertise in enterprise-scale implementations, regulatory compliance, and industry-specific requirements. U.S.-based integration partners typically bring strong experience with complex ERP integrations, multi-cloud Salesforce deployments, and advanced data platforms that support AI and analytics initiatives."
        },
        {
            "question": "How does Salesforce integration improve ROI?",
            "answer": "Integration improves ROI by increasing automation, reducing data duplication, and improving decision accuracy. When Salesforce is integrated with finance, operations, and service systems, teams spend less time reconciling data and more time acting on insights. This leads to faster sales cycles, better customer experiences, and lower operational costs."
        },
        {
            "question": "How do Salesforce integration partners support AI and analytics?",
            "answer": "AI depends on clean, connected data. Salesforce integration partners unify data across systems, so AI models, analytics, and Data Cloud insights are accurate and actionable. Without integration, AI outputs remain fragmented. With it, Salesforce becomes a predictive and proactive platform rather than a reactive one."
        },
        {
            "question": "How do Salesforce integration partners ensure long-term scalability?",
            "answer": "They build integration architectures that support future growth, cloud expansion, and evolving business models. This includes reusable APIs, event-driven integrations, security governance, and performance optimization. Scalability is planned from day one, not added later as a fix."
        },
        {
            "question": "How do you choose the right Salesforce integration partner?",
            "answer": "The right partner combines Salesforce expertise with enterprise integration experience. Look for proven success integrating Salesforce with ERP systems, strong data governance practices, and a strategic approach aligned to business outcomes. A trusted Salesforce partner should understand both technology and operational realities."
        }
    ]
    const whyChoosingData = [
        {
            "title": "Why Salesforce Integrations Make or Break Enterprise ROI",
            "desc": "Most enterprises don’t fail at Salesforce adoption. They fail at orchestration. Sales teams may work efficiently in CRM, but finance operates in ERP. Service teams track cases in one system while marketing runs campaigns in another. Data exists everywhere, yet insight exists nowhere.",
            "listDes": "This leads to the following issues:",
            "list": [
                "Inconsistent customer records",
                "Manual reconciliation across teams",
                "Delayed reporting and unreliable forecasts",
                "Automation limited to single departments",
            ],
            "desc2": [
                "This is why maximizing Salesforce ROI depends less on features and more on how well Salesforce integrates with the rest of the enterprise ecosystem.",
                "<strong>The Hidden Cost of Disconnected Systems</strong>",
                "Disjointed systems create invisible friction. Revenue leaks through delayed billing. Service teams lack context. Leadership decisions rely on outdated dashboards. Over time, Salesforce becomes another tool instead of a growth engine.",
                "This challenge directly connects to what we explored in the pillar blog: choosing a Salesforce consulting company that understands enterprise pain points, not just platform configuration."
            ]
        }
    ]

    const howSalesforceData = [
        {
            "title": "How Salesforce Integration Partners Reduce Complexity",
            "desc": "The core value of integration lies in simplification.",
            "list": [
                {
                    "title": "Designing a Unified Data Flow",
                    "desc": ["At the center of every successful Salesforce ecosystem is a single, trusted data model."],
                    "descData": "Integration partners ensure:",
                    "list": [
                        "One customer record across sales, service, and finance",
                        "Real-time synchronization instead of batch updates",
                        "Elimination of duplicate and conflicting data",
                    ],
                    "desc2": "This unified data layer reduces errors, accelerates reporting, and creates confidence in decision-making."
                },
                {
                    "title": "Process Orchestration Across Systems",
                    "desc": [
                        "Modern Salesforce integration services don’t just move data. They orchestrate processes.",
                    ],
                    "descData": "For example:",
                    "list": [
                        "A closed deal triggers automated billing in ERP",
                        "A service escalation updates customer health scores",
                        "A contract renewal syncs across CRM and finance ",
                    ],
                    "desc2": "This orchestration removes manual steps, reduces cycle times, and ensures teams work from the same reality."
                },
                {
                    "title": "Scalable Architecture, Not Point-to-Point Chaos",

                    "desc": [
                        "Many enterprises start with quick integrations and hit a wall later. Point-to-point connections don’t scale.",
                    ],
                    "descData": "Experienced integration partners design:",
                    "list": [
                        "SAPI-led architectures",
                        "Event-driven integrations",
                        "Modular, reusable components",
                    ],
                    "desc2": "This future-proofs Salesforce and supports long-term growth, AI adoption, and platform evolution."
                }
            ]
        }
    ]
    const benefitsOfSalesforce = {
        title: "Benefits of Salesforce Integration Services in the USA",
        subtitle:
            "Enterprises seeking Salesforce integration services in the USA often do so for more than convenience.",
        sections: [
            {
                heading:
                    "Alignment with Enterprise Compliance and Security Standards",
                description:
                    "US-based enterprises operate under strict regulatory and security frameworks. Integration partners familiar with these environments design solutions that align with:",
                bullets: [
                    "Data privacy requirements",
                    "Industry regulations",
                    "Enterprise IT governance"
                ],
                footer:
                    "This reduces risk while accelerating delivery."
            },
            {
                heading: "Industry-Specific Integration Experience",
                description:
                    "Generic integration approaches don’t work at enterprise scale. The best partners bring industry context:",
                bullets: [
                    "Manufacturing process flows",
                    "Healthcare compliance and data sensitivity",
                    "Financial services reporting and audit needs"
                ],
                footer:
                    "This experience shortens implementation cycles and improves outcomes."
            },
            {
                heading:
                    "Faster ROI Through Proven Implementation Playbooks",
                description:
                    "Top partners rely on tested patterns rather than experimentation. This aligns directly with the pillar theme of Salesforce consulting expertise that delivers measurable business value.",
                bullets: [],
                footer: ""
            }
        ]
    };




    const salesforceIntegrationUseCases = [
        {
            "title": "Salesforce Integration Use Cases That Drive Measurable ROI",
            "desc": "Integration success is best measured by outcomes, not architecture diagrams.",
            "list": [
                {
                    "title": "Sales-to-Finance Integration",
                    "descData": "When Salesforce and ERP systems are integrated:",
                    "list": [
                        "Quotes convert to invoices faster",
                        "Revenue recognition becomes accurate and timel",
                        "Finance gains real-time visibility into pipelines",
                    ],
                    "desc2": "This reduces billing delays and improves cash flow predictability."
                },
                {
                    "title": "Service and Operations Alignment",
                    "descData": "Integrated service environments enable:",
                    "list": [
                        "Unified case management",
                        "Automated SLA tracking",
                        "Faster issue resolution ",
                    ],
                    "desc2": "Customer experience improves while operational costs decline."
                },
                {
                    "title": "Data and Analytics Integration",
                    "descData": "Leadership decisions improve when data flows seamlessly:",
                    "list": [
                        "Real-time dashboards replace manual reporting",
                        "Forecasts reflect live operational data",
                        "Performance metrics become reliable",
                    ],
                    "desc2": "This is where Salesforce evolves into a platform for informed decision-making."
                }
            ]
        }
    ]

    const choosingTheRightPartner = {
        title: "Choosing the Right Salesforce Integration Partner",
        subtitle:
            "Selecting the right partner is as critical as the technology itself. If you’re evaluating options, this ties directly to  <a href='https://www.linkedin.com/pulse/finding-ideal-salesforce-consulting-lvwcf/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>finding the right Salesforce consulting company in the USA</a> .",
        columns: [
            {
                heading: "Questions Enterprises Should Ask",
                items: [
                    "Do they start with business processes or tools?",
                    "How do they handle data governance and ownership?",
                    "Can they support growth beyond phase one?",
                    "Do they measure ROI post-implementation?"
                ]
            },
            {
                heading: "Red Flags to Watch For",
                items: [
                    "Tool-first recommendations without process clarity",
                    "Limited post-go-live optimization",
                    "No clear integration roadmap",
                    "Weak documentation and governance practices"
                ]
            }
        ]
    };

    const integrationAsPartOfBorder = [
        {
            "title": "Integration as Part of a Broader Salesforce Growth Strategy",
            "desc": "Integration is not a standalone project. It’s foundational. This aligns with the  <a href='https://www.rialtes.com/insights/blogs/salesforce-consulting-playbook-enterprise-growth/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Salesforce consulting playbook for growth</a>  discussed in our other helpful blog.",
            "list": [
                {
                    "title": "Integration Enables Automation and AI",
                    "descData": "AI and analytics rely on connected data. Without integration:",
                    "list": [
                        "AI insights lack context",
                        "Automation remains shallow",
                        "Personalization falls apart",
                    ],
                    "desc2": "Integration prepares Salesforce for advanced capabilities, not just operational efficiency."
                },

            ],
            "boldTitle": "Continuous Optimization, Not One-Time Projects",
            "desc2": "Enterprise Salesforce environments evolve. Integration strategies must evolve with them. Leading organizations treat integration as a living capability, supported through managed services, performance tuning, and ongoing optimization."
        }
    ]
    const howStrategicData = [
        {
            "title": "What Salesforce Integration Partners Actually Do",
            "desc": [
                "There’s a common misconception that integration partners simply “connect systems.” The best Salesforce integration partners do far more. They act as translators between business strategy and technical execution.",
            ],
            "list": [
                {
                    "title": ["Design How Salesforce Works",
                        "Across the Business",
                    ],
                    "desc": "True integration work starts before any code is written:",
                    "listData": [
                        "Mapping how data should flow across teams",
                        "Defining ownership of records",
                        "Establishing governance and security rules",
                        "Designing for scale, not just go-live"
                    ],
                    "desc3": "Tactical integrators connect systems. Strategic partners design ecosystems."
                },
                {
                    "title": ["Orchestrate Salesforce Across",
                        "the Enterprise Landscape",
                    ],
                    "desc2": "Enterprise Salesforce environments often integrate with:",
                    "listData": [
                        "ERP systems like SAP, Oracle, or NetSuite",
                        "Finance and billing platforms",
                        "Marketing automation tools",
                        "Data platforms and analytics tools",
                        "Industry-specific operational systems"
                    ],
                    "desc3": "Each integration must work independently and collectively. Otherwise, complexity multiplies instead of disappearing."
                }
            ]
        }
    ]

    const whyRialtesData = [
        {
            "title": "Turning Salesforce Integrations into a Competitive Advantage",
            "desc": [
                "Salesforce alone doesn’t drive growth. Integrated Salesforce does. Enterprises that treat integration as a checkbox end up managing complexity; those who approach it strategically unlock speed, intelligence, and scale. At Rialtes, we don’t approach integration as a technical exercise. We approach it as a business transformation lever.",
            ],
            "descData": "We help enterprises:",
            "list": [
                "Simplify complex Salesforce ecosystems",
                "Integrate CRM with ERP, data, and operation ",
                "Design scalable architectures that support AI and automation",
                "Measure ROI beyond go-live "
            ],
            "desc2": [
                "As a Salesforce Crest Partner, Rialtes combines deep platform expertise with industry understanding and enterprise-grade delivery discipline. Whether you’re modernizing integrations or building a future-ready Salesforce ecosystem, we help you move faster with confidence.",
                "Let’s turn Salesforce into the growth engine it was meant to be."
            ]
        }
    ]
    return (
        <section className="min-h-screen">
            <Seo
                title="Salesforce Integration Partners: The Foundation for Scale | Rialtes"
                description="For enterprises focused on scale, automation, and AI readiness, integration is no longer a supporting activity. It’s foundational."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/salesforce-integration-partners-for-enterprises-to-scale/"
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
                        src="/images/blog/salesforce-integration-partners.webp"
                        alt="Cloud integration icon on a smartphone representing Salesforce integration and enterprise system connectivity."
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/salesforce-integration-partners-mobile.webp"
                        alt="Cloud integration icon on a smartphone representing Salesforce integration and enterprise system connectivity."
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
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>22 December 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">Integration Partners for Salesforce: Cutting Complexity, Increasing ROI</h1>

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
                                            <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.listDes }}
                                            />
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                            <UnorderedList arrName={data.desc2} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        </div>
                                    ))
                                }
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
                                                                <h3 className="font-bold text-[18px] md:text-[19px] xl:text-[19px] 4xl:text-[22px] leading-tight">
                                                                    {Array.isArray(elem.title) ? (
                                                                        elem.title.map((line, index) => (
                                                                            <span key={index} className="block">
                                                                                {line}
                                                                            </span>
                                                                        ))
                                                                    ) : (
                                                                        elem.title
                                                                    )}
                                                                </h3>                                                            </div>

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

                                {/* how salesforce section */}
                                {
                                    howSalesforceData?.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data?.title}</h2>
                                            <p className="mt-[29px] xl:mt-[20px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data?.desc}</p>
                                            {
                                                data?.list?.map((elem, id) => (
                                                    <div className="border  border-gray-300 gap-6 mt-6" key={id}>
                                                        <h3 className="4xl:text-[24px] 2xl:text-[21px] pl-8 text-[20px] font-bold mt-10 text-[#006FBE] border-b pb-5 border-gray-300">{elem?.title}</h3>
                                                        <UnorderedList arrName={elem?.desc} ulClassName={`mt-5 md:pl-[24px] pl-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium`} />
                                                        <p
                                                            className="md:pl-[24px] pl-8 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem?.descData }}
                                                        />
                                                        {
                                                            elem?.list &&
                                                            <UnorderedList arrName={elem?.list} ulClassName="mt-5 space-y-2 pl-[26px] md:pl-[45px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                                        }
                                                        {elem?.desc2 && (
                                                            <p
                                                                className="md:pl-[24px] pl-8 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pb-6"
                                                                dangerouslySetInnerHTML={{ __html: elem?.desc2 }}
                                                            />
                                                        )}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }


                                {/* benefits of salesforce section */}
                                <div className="pt-14">
                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                        {benefitsOfSalesforce.title}
                                    </h2>

                                    {/* Subtitle */}
                                    <p className="mt-[29px] xl:mt-[20px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                        {benefitsOfSalesforce.subtitle}
                                    </p>

                                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">

                                        {/* Vertical dividers */}
                                        <span className="hidden md:block absolute left-1/3 top-0 h-full w-px bg-gray-800 mt-10" />
                                        <span className="hidden md:block absolute left-2/3 top-0 h-full w-px bg-gray-800 mt-10" />

                                        {benefitsOfSalesforce.sections.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`text-left ${index === 0
                                                    ? "pr-6"
                                                    : index === 1
                                                        ? "px-6"
                                                        : "pl-6"
                                                    }`}
                                            >
                                                <h3 className="4xl:text-[22px] 2xl:text-[20px] text-[20px] font-bold mt-10 mb-8 leading-tight">
                                                    {item.heading}
                                                </h3>

                                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mb-4">
                                                    {item.description}
                                                </p>

                                                {item.bullets.length > 0 && (
                                                    <ul className="list-disc pl-5 space-y-2 4xl:text-[20px] font-medium 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]-700 mb-4">
                                                        {item.bullets.map((bullet, i) => (
                                                            <li key={i}>{bullet}</li>
                                                        ))}
                                                    </ul>
                                                )}

                                                {item.footer && (
                                                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        {item.footer}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {
                                    salesforceIntegrationUseCases?.map((data, ind) => (
                                        <div className="md:mt-[80px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data?.title}</h2>
                                            <p className="mt-[29px] xl:mt-[20px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data?.desc}</p>
                                            {
                                                data?.list?.map((elem, id) => (
                                                    <div className="gap-6 mt-6" key={id}>
                                                        <h3 className="4xl:text-[24px] 2xl:text-[21px] text-[20px] font-bold mt-10">{elem?.title}</h3>
                                                        <p
                                                            className="md:pl-[24px] mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem?.descData }}
                                                        />
                                                        {
                                                            elem?.list &&
                                                            <UnorderedList arrName={elem?.list} ulClassName="mt-5 space-y-2 pl-[26px] md:pl-[64px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                                        }
                                                        {elem?.desc2 && (
                                                            <p
                                                                className="md:pl-[24px] mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pb-6"
                                                                dangerouslySetInnerHTML={{ __html: elem?.desc2 }}
                                                            />
                                                        )}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                                {/* salesforce integration use cases section */}
                                {
                                    integrationAsPartOfBorder?.map((data, ind) => (
                                        <div className="md:mt-[35px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data?.title}</h2>
                                            <p
                                                className="mt-[29px] xl:mt-[20px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data?.desc }}
                                            />
                                            {
                                                data?.list?.map((elem, id) => (
                                                    <div className="gap-6 mt-6" key={id}>
                                                        <h3 className="4xl:text-[24px] 2xl:text-[21px] text-[20px] font-bold mt-10">{elem?.title}</h3>
                                                        <p
                                                            className="md:pl-[24px] mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem?.descData }}
                                                        />
                                                        {
                                                            elem?.list &&
                                                            <UnorderedList arrName={elem?.list} ulClassName="mt-5 space-y-2 pl-[26px] md:pl-[64px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                                        }
                                                        {elem?.desc2 && (
                                                            <p
                                                                className="md:pl-[24px] mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pb-6"
                                                                dangerouslySetInnerHTML={{ __html: elem?.desc2 }}
                                                            />
                                                        )}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }



                                <div className="pt-6">
                                    {/* Title */}
                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                        {choosingTheRightPartner.title}
                                    </h2>
                                    <p
                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                        dangerouslySetInnerHTML={{ __html: choosingTheRightPartner.subtitle }}
                                    />



                                    {/* Two Column Layout */}
                                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">

                                        {/* Vertical Divider */}
                                        <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-800" />

                                        {choosingTheRightPartner.columns.map((col, index) => (
                                            <div
                                                key={index}
                                                className={index === 0 ? "pr-8" : "pl-8"}
                                            >
                                                <h3 className="font-bold text-[18px] md:text-[19px] xl:text-[19px] 4xl:text-[22px] mb-6">
                                                    {col.heading}
                                                </h3>

                                                <ul className="space-y-4 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">
                                                    {col.items.map((item, i) => (
                                                        <li key={i} className="flex gap-3">
                                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900 flex-shrink-0"></span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {
                                    whyRialtesData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <p className="mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.descData}</p>

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
            <section className="xl:mt-[60px] mt-[40px] custom-container">
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