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
    const fullUrl = "https://www.rialtes.com/insights/blogs/rise-with-sap-erp-transformation-strategy";
    const currUrl = useUrl()

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Rise with SAP: Rethinking ERP Transformation Strategy",
        "description": "RISE with SAP was built to solve this exact enterprise challenge.",
        "image": "https://www.rialtes.com/images/blogs/enterprise-growth-strategy.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/rise-with-sap-erp-transformation-strategy/"
        },
        "datePublished": "2026-01-05",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "FAQs: ERP Modernization with RISE with SAP",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is RISE with SAP?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A transformation program that delivers SAP S/4HANA Cloud, infrastructure, tools, and services under one contract — helping enterprises modernize ERP with predictability and speed."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does RISE reduce ERP project risk?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "With fit-to-standard adoption, clean core principles, governance controls, and guided methodology, it prevents over-customization and cost escalation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why not just upgrade the existing ERP?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Traditional upgrades retain legacy ERP modernization complexity. RISE enables modernization with automation, cloud innovation, and future AI extensibility."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does RISE with SAP support hybrid and multi-cloud models?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. It supports hyperscalers like AWS, Azure, and GCP, giving enterprises flexibility and global deployment efficiency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What makes Rialtes a strong implementation partner?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Deep industry experience, certified SAP experts, and global delivery capabilities — ensuring transformations succeed with real operational impact."
                    }
                }
            ]
        }
    }
    const mainData = [
        "ERP modernization has been on boardroom agendas for years, yet success stories are still far fewer than expected. Leaders know transformation is necessary, but the path often turns bumpy. Gartner reports that 55 percent of ERP projects fail to meet their original business case, while McKinsey notes 70 percent of digital transformation efforts stall or fail to scale beyond pilots. The reasons repeat themselves: legacy technical debt, customizations that lock flexibility, ballooning implementation costs, and a slow crawl toward business value.",
        "Enterprises are now asking the right questions. <br/> Not “Should we modernize?” <br/> But “How do we transform without repeating the mistakes of the last decade?”",
        "This shift in mindset is prompting organizations to reassess their ERP strategy, move beyond fragmented upgrades, and seek a guided, outcomes-driven approach. That’s exactly where RISE with SAP becomes an inflection point."
    ]
    const faqData = [
        {
            "question": "What is RISE with SAP?",
            "answer": "A transformation program that delivers SAP S/4HANA Cloud, infrastructure, tools, and services under one contract, helping enterprises modernize ERP with predictability and speed."
        },
        {
            "question": "How does RISE reduce ERP project risk?",
            "answer": "By enabling fit-to-standard adoption, clean core principles, governance controls, and guided methodologies that prevent over-customization and cost escalation."
        },
        {
            "question": "Why not just upgrade the existing ERP?",
            "answer": "Traditional upgrades retain legacy ERP complexity, while RISE enables modernization through automation, cloud innovation, and future AI extensibility."
        },
        {
            "question": "Does RISE with SAP support hybrid and multi-cloud models?",
            "answer": "Yes. It supports hyperscalers such as AWS, Azure, and Google Cloud Platform, offering flexibility and global deployment efficiency."
        },
        {
            "question": "What makes Rialtes a strong implementation partner?",
            "answer": "Deep industry expertise, certified SAP professionals, and global delivery capabilities that ensure transformations deliver real operational impact."
        }
    ]
    const legacyData = [
        {
            "title": "The Legacy ERP Problem No One Can Ignore Anymore",
            "desc": [
                "Many ERP systems did their job well in their time. They maintained structured, controlled, and compliant processes. But business today moves differently, faster, interconnected, data-rich, and AI-driven."
            ],
            "descc": "Legacy ERPs struggle here, and these are the symptoms",
            "list": [
                "Every new integration feels like a patchwork job",
                "Reporting takes days because data lives in silos",
                "Customizations break during upgrades",
                "Teams rely on spreadsheets to compensate for system gaps",
                "Innovation plans get stuck behind technical constraints"
            ],
            "desc2": "A system built for yesterday slows down a business built for tomorrow.",
            "desc3": "This stagnation is expensive. IDC estimates global businesses lose trillions annually due to process inefficiencies and outdated systems. Enterprises cannot compete with agility if their core runs like it’s still 2008."
        }
    ]
    const whyErpData = [
        {
            "title": "Why ERP Transformations Fail",
            "desc": [
                "When transformation doesn’t land, it’s rarely the software. It’s execution, governance, and the mindset driving modernization.",
                "The common failure patterns look like this:"
            ],
            "list": [
                {
                    "title": "Over-customization that kills flexibility",
                    "desc": "Enterprises replicate old processes instead of adopting standardized best practices. This makes upgrades painful, expensive, and risky."
                },
                {
                    "title": "Scope creep and cost overruns",
                    "desc": "Projects start with clarity but grow beyond control. Without guardrails and governance, timelines expand, and budgets stretch."
                },
                {
                    "title": "Technology-first, business-second",
                    "desc": "Implementations often focus on IT migration instead of value creation. The outcome? New system, same old inefficiencies."
                },
                {
                    "title": "Change management as an afterthought",
                    "desc": "Employees resist new processes when they don’t understand the ‘why’. User adoption becomes the biggest roadblock."
                }
            ],
            "subtitle": "Why ERP Projects Fail Over-customization",
            "subList": [
                "Scope creep",
                "Tech-first mindset",
                "Low adoption"
            ],
            "desc2": "The lesson here is practical: transformation needs structure, not just software licenses."
        }
    ]
    const riseData = [
        {
            "title": "RISE with SAP: A Smarter Way to Transform, Not Just Replace ERP",
            "desc": [
                "RISE with SAP was built to solve this exact enterprise challenge.",
                "It’s a business transformation as a service model, combining SAP S/4HANA Cloud, infrastructure, tools, accelerators, and support in one package. Instead of navigating ERP modernization alone, enterprises get a managed, guided, and outcome-oriented journey.",
            ],
            "descc": "What makes RISE different?",
            "list": [
                "Single contract for ERP, cloud, infrastructure, and tools",
                "Clean core approach reduces customization drag",
                "Faster time-to-value with fit-to-standard adoption",
                "AI-ready foundation with SAP BTP extensibility",
                "Built-in automation, analytics, and continuous innovation",
                "Upgrade-safe architecture built for long-term agility"
            ],
            "desc2": "Businesses aren’t just installing software. They’re future-proofing operations."
        }
    ]
    const howRiseData = [
        {
            "title": "How RISE with SAP Helps Enterprises Break Out of Legacy Gravity",
            "desc": "Let’s look at what transformation feels like when executed right.",
            "list": [
                {
                    "title": "Migrate to SAP S/4HANA with confidence",
                    "desc": "Enterprises get a clear roadmap from assessment to go-live. Legacy complexity is untangled, processes are rationalized, and the move is structured instead of chaotic."
                },
                {
                    "title": "Run on a clean core instead of customization-heavy ERP",
                    "desc": "Adopting industry best practices reduces code debt and keeps future upgrades effortless. No more ten-year build-up of brittle workflows."
                },
                {
                    "title": "Automate instead of firefight",
                    "desc": "With embedded AI, workflows, and analytics, teams spend less time fixing problems and more time improving performance."
                },
                {
                    "title": "Innovate continuously",
                    "desc": "Quarterly updates bring new automation features, compliance capabilities, and intelligence enhancements without downtime."
                }
            ],
            "desc2": "RISE with SAP = Migration + Innovation + Acceleration",
            "list2": [
                "One contract, one platform",
                "Standardized processes",
                "Automation & analytics baked in",
                "Evergreen cloud ERP"
            ]
        }
    ]
    const commonData = [
        {
            "title": "Where RISE with SAP Fits Best",
            "desc": [
                "This isn’t just for IT modernization. It’s for organizations aiming to build business advantage.",
                "Perfect for:"
            ],
            "list": [
                "Enterprises planning a full digital core modernization",
                "Organizations with heavy customization debt",
                "Global firms requiring standardization across regions",
                "Companies preparing for AI, automation, BTP extensions",
                "Businesses are tired of high upgrade and maintenance cost"
            ],
            "desc2": "If transformation needs clarity and speed instead of uncertainty, RISE is the direction."
        },
        {
            "title": "Business Outcomes That Matter to Leadership",
            "desc": [
                "The real value shows up in result"
            ],
            "list": [
                "Faster modernization versus multi-year ERP rebuilds",
                "Lower operational and infrastructure overhead",
                "Global process standardization and governance",
                "Reduced maintenance and upgrade disruption",
                "Improved reporting speed and decision confidence",
                "Foundation ready for AI, automation, and data-driven growth"
            ],
            "desc2": "This is how enterprises break out of ERP stagnation and move toward continuous transformation instead of one-time migration."
        }
    ]
    const howRialtesData = [
        {
            "title": "How Rialtes Delivers Successful RISE with SAP Transformations",
            "desc": [
                "Technology alone doesn’t guarantee outcomes; the partner doing the transformation does.",
                "At Rialtes, we help enterprises adopt and scale SAP S/4HANA <a href='https://www.rialtes.com/services/business-transformation/rise-with-sap-services/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>through RISE with SAP with an approach<a/> built around governance, predictability, and measurable business deliverables. With certified consultants and multi-country delivery centers across the United States, Canada, India, and Singapore, we manage transformation end-to-end: from assessment to deployment to optimization."
            ],
            "subtitle": "Our methodology ensures success without chaos:",
            "list": [
                {
                    "title": "Discovery & Value Mapping",
                    "desc": "Identify pain points, maturity gaps, and business outcomes."
                },
                {
                    "title": "Fit-to-Standard Adoption",
                    "desc": "Use best practices instead of reinventing processes."
                },
                {
                    "title": "Clean Core Build & Data Migration",
                    "desc": "Keep systems stable, scalable, and integration-friendly."
                },
                {
                    "title": "Automation & AI Enablement",
                    "desc": "Introduce workflows, analytics dashboards, and self-service operations."
                },
                {
                    "title": "Continuous Improvement Model",
                    "desc": "Post-go-live support, KPI tracking, and innovation roadmap planning."
                }
            ],
            "subtitle2": "Rialtes RISE Delivery Model"
        }
    ]
    return (
        <section className="min-h-screen">
            <Seo
                title="Why Rise with SAP Is Key to ERP Modernization Success | Rialtes"
                description="Discover how RISE with SAP helps enterprises modernize ERP with speed, governance, and measurable outcomes to stay competitive in a digital-first era."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/rise-with-sap-erp-transformation-strategy"
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
                        src="/images/blog/enterprise-growth-strategy.webp"
                        alt="Business leader on a path symbolizing enterprise growth and digital transformation"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/enterprise-growth-strategy-mobile.webp"
                        alt="Business leader on a path symbolizing enterprise growth and digital transformation"
                        priority
                        height={375}
                        width={250} 
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Rise with SAP</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>05 January 2026
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">Why ERP Transformation Challenges Are Forcing Enterprises to Rethink Their Strategy</h1>

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

                                {/* legacy section */}
                                {
                                    legacyData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <h3 className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.descc}</h3>
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><h4 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</h4></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <div className="w-full h-full my-5">
                                                <Image
                                                    src="/images/blog/legacy-erp-reality-check.webp"
                                                    alt="Legacy ERP challenges including slow upgrades, costly integrations, and data silos"
                                                    className="xl:w-[700px] w-full h-full"
                                                    width={1200}
                                                    height={630}
                                                    priority
                                                />
                                            </div>

                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/* why erp section */}
                                {
                                    whyErpData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            {
                                                data.list.map((elem, id) => (
                                                    <div className="flex gap-5 md:gap-10 mt-12" key={id}>
                                                        <p className="md:w-[66px] w-[150px] h-[50px] flex items-center justify-center bg-[#1486E6] text-white font-bold 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">{id + 1}</p>
                                                        <div>
                                                            <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.title}</h3>
                                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-2">{elem.desc}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                            <div className="bg-[#E2F3FF] 3xl:w-[90%] p-[36px] pb-0 mt-10">
                                                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{data.subtitle}</h3>
                                                <div className="flex max-md:flex-col gap-10 mt-10">
                                                    {
                                                        data.subList.map((elem, id) => (
                                                            <p className="sm:w-[80%] md:w-fit px-[40px] py-[20px] font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] text-white bg-[#D58383]" key={id}>{elem}</p>
                                                        ))
                                                    }
                                                </div>

                                            </div>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/* rise section */}
                                {
                                    riseData.map((data, ind) => (
                                        // this blog has extra margin top
                                        <div className="md:mt-[80px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <h3 className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.descc}</h3>

                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><h4 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</h4></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/* how rise section */}
                                {
                                    howRiseData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <p
                                                className="mt-5 md:mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:mt-[50px] mt-[40px] gap-[20px] sm:w-[80%] md:w-full 4xl:w-[1100px]">
                                                {
                                                    data.list.map((elem, id) => {
                                                        return (
                                                            <div className="4xl:p-[36px] p-[32px] border border-[#707070]" key={id}>
                                                                <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4">{elem.title}</h3>
                                                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: elem.desc }} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <p
                                                className="my-10 4xl:text-[28px] 2xl:text-[24px] xl:text-[22px] md:text-[18px] text-[18px] bg-[#006FBE] text-white p-[36px] w-fit"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />

                                            <UnorderedList arrName={data.list2} ulClassName="list-disc pl-[26px] lg:pl-[46px] mt-5 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />

                                        </div>
                                    ))
                                }

                                {/* common section */}
                                {
                                    commonData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><h3 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</h3></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                        </div>
                                    ))
                                }
                                {/* how Rialtes section */}
                                {
                                    howRialtesData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{data.subtitle}</h3>

                                            <div className="grid lg:grid-cols-3 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full xl:w-[1000px] 4xl:w-[1100px]">
                                                {
                                                    data.list.map((data, ind) => {
                                                        return (
                                                            <div key={ind} className={`mt-5 ${(ind == 1 || ind == 2 || ind == 4) ? "4xl:pl-[60px] lg:pl-[30px] border-[#707070] lg:border-l max-lg:border-b max-lg:pb-5 max-lg:last:border-0" : ""} ${ind == 0 ? "lg:pr-[40px] 4xl:pr-0 md:border-b lg:border-0 border-[#707070] max-md:border-b max-lg:pb-5" : ""} ${(ind == 1 || ind == 3) ? "pb-4 border-b border-[#707070] lg:border-0" : ""} ${(ind == 2) ? "lg:border-b-0" : ""}`}>
                                                                <h4 className={`4xl:text-[22px] 2xl:text-[19px] xl:text-[19px] md:text-[20px] text-[20px] font-bold text-[#0A6BB8] md:w-[80%]`}>{data.title}</h4>
                                                                <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[80%]">{data.desc}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <h3 className="lg:mt-10 mt-5 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{data.subtitle2}</h3>
                                            <div className="w-full h-full lg:mt-10 mt-5">
                                                <Image
                                                    src="/images/blog/discover-define-deploy.webp"
                                                    alt="Process flow showing discover, define, deploy, automate, optimize, and innovate stages"
                                                    className="w-full h-full"
                                                    height={1200}
                                                    width={630}
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: ERP Modernization with RISE with SAP</h2>
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