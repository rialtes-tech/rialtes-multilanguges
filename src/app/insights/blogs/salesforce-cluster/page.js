"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from '@/app/components/blogSocialIcons'
import Link from "next/link";
import UnorderedList from "@/app/components/unorderedList";

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/patient-experience-platform-transforming-long-term-care/";
    const currUrl = useUrl()

    const blogMainData = [
        "Salesforce is the world’s leading CRM platform, powering enterprises across industries to better manage customers, data, and processes. But here’s the catch: Salesforce success isn’t guaranteed by simply purchasing licenses. Implementation is where many projects falter. Delays, scope creep, or poor adoption can turn what should be a growth driver into a sunk investment.",
        "This is why enterprises partner with expert Salesforce consultants. The right partner brings structure, expertise, and proven frameworks to reduce risk and maximize return on investment. From planning a Salesforce implementation roadmap to handling complex integrations, partners ensure enterprises extract full value from the platform.",
        "Let’s explore the strategies that top partners use to make Salesforce implementations seamless."
    ]
    const commonData = [
        {
            "title": "How to Ensure a Successful Salesforce Implementation?",
            "list": [
                {
                    "title": "Start with a Clear Salesforce Implementation Roadmap",
                    "desc": [
                        "A Salesforce rollout without a roadmap is like embarking on a cross-country trip without directions. The first step is aligning Salesforce to business objectives. Ask: What do we want Salesforce to achieve? Is the goal to shorten sales cycles, unify customer data, or streamline service processes?",
                        "An implementation roadmap defines phases, milestones, and deliverables. Partners help translate strategic goals into technical design, ensuring business outcomes guide configuration, not the other way around."
                    ]
                },
                {
                    "title": "Engage Stakeholders Early",
                    "desc": [
                        "Even the best technology fails without adoption. A successful implementation requires early involvement of sales, marketing, service, and IT teams. When stakeholders help shape requirements, they’re more likely to champion the solution later.",
                        "Change management is often underestimated. Partners who build communication and training into the roadmap increase adoption rates, helping enterprises avoid costly underutilization."
                    ]
                },
                {
                    "title": "Choose the Right Salesforce Integration Partner",
                    "desc": [
                        "Perhaps the most critical decision is choosing the right partner. Certified Salesforce integration partners bring experience across industries and geographies. They know common pitfalls and how to avoid them. Instead of learning on the job, they apply tried-and-tested frameworks, accelerators, and governance models."
                    ]
                }
            ]
        },
        {
            "title": "Best Practices for Salesforce Integration Success",
            "list": [
                {
                    "title": "Map the Salesforce Integration Roadmap",
                    "desc": [
                        "Salesforce rarely exists in isolation. It needs to talk to ERP, HR, finance, supply chain, and marketing systems. A clear Salesforce integration roadmap identifies which systems are most critical to connect and in what order.",
                        "For example, connecting Salesforce to ERP ensures sales teams see real-time inventory data. Linking to HR helps with territory management. Mapping out priorities prevents chaos and keeps integrations aligned with business needs."
                    ]
                },
                {
                    "title": "Leverage Certified Salesforce Integration Partners",
                    "desc": [
                        "Integrations are one of the biggest risk areas. A poorly designed integration can create data silos, duplication, or compliance risks. Certified Salesforce integration partners bring the technical skill and tools needed to connect Salesforce securely and efficiently.",
                        "The best partners combine technical know-how with industry experience. A life sciences integration looks very different from a manufacturing setup. Industry-aware partners prevent “cookie-cutter” mistakes."
                    ]
                },
                {
                    "title": "Build for Scalability",
                    "desc": [
                        "Integrations shouldn’t just solve today’s problems; they must prepare for tomorrow. Top partners build scalable frameworks that support future adoption of AI, Salesforce Data Cloud, and automation. This future-proofing ensures enterprise success with Salesforce partners within a year or two."
                    ]
                }
            ]
        }
    ]
    const salesforceData = [
        {
            "title": "Scope Creep",
            "desc": "Adding requirements without revisiting timelines."
        },
        {
            "title": "Misalignment",
            "desc": "When technical features don’t match business goals."
        },
        {
            "title": "Low Adoption",
            "desc": "Employees revert to old processes."
        },
        {
            "title": "Compliance Issues",
            "desc": "Particularly in regulated industries."
        }
    ]
    const salesforceStratergies = [
        {
            "title": "Frameworks and Accelerators",
            "desc": "Pre-built templates for workflows, dashboards, and integrations speed delivery and lower error rates."
        },
        {
            "title": "Agile Delivery Models",
            "desc": "Iterative sprints allow course correction before issues escalate."
        },
        {
            "title": "Compliance-First Design",
            "desc": "Especially for industries like healthcare or finance, partners ensure regulatory alignment from the start."
        }
    ]
    const maximizeData = [
        {
            "title": "Maximizing ROI with Salesforce Implementation and Integration",
            "list": [
                {
                    "title": "Measure ROI Beyond Cost Savings",
                    "descArr": [
                        {
                            "desc": "When enterprises think about ROI, they often focus on cost reduction. But Salesforce ROI extends much further:",
                            "steps": [
                                "Increased sales pipeline visibility.",
                                "Faster deal closures.",
                                "Improved service resolution times.",
                                "Enhanced customer satisfaction."
                            ],
                            "desc2": "Top partners help define metrics before the project begins, so ROI is measurable across revenue growth and experience improvements—not just expenses"
                        }
                    ]
                },
                {
                    "title": "Ongoing Optimization and Managed Services",
                    "descArr": [
                        {
                            "desc": "Implementation is just the start. Salesforce is constantly evolving, with new features and innovations released multiple times per year. Without ongoing optimization, enterprises risk falling behind.",
                            "desc2": "This is where managed services from partners come in. They ensure Salesforce evolves with the business, continuously fine-tuning workflows, automations, and integrations."
                        }
                    ]
                },
                {
                    "title": "From Implementation to Innovation",
                    "descArr": [
                        {
                            "desc": "The best partners don’t stop at implementation. They introduce enterprises to new Salesforce capabilities like AI-driven insights, Agentforce automation, and Data Cloud-powered personalization. This shift from system-of-record to system-of-intelligence multiplies ROI over time.",
                        }
                    ]
                }
            ]
        }
    ]
    const trustedData = [
        {
            "title": "Rialtes – Your Trusted Salesforce Implementation Partner",
            "desc": "When it comes to Salesforce partners, not every firm can deliver enterprise-grade success. Rialtes stands apart as a Salesforce Crest Partner, recognized for its expertise, certifications, and tailored Salesforce development for integration.",
            "desc2": "Here’s what Rialtes brings to the table:",
            "list": [
                {
                    "title": "Structured Roadmaps",
                    "desc": "Guiding enterprises from discovery to post-launch optimization."
                },
                {
                    "title": "Risk Reduction",
                    "desc": "Using accelerators, governance models, and compliance-first design."
                },
                {
                    "title": "Integration Expertise",
                    "desc": "Connecting Salesforce with ERP, HR, supply chain, and marketing systems for true enterprise alignment."
                },
                {
                    "title": "Industry Experience",
                    "desc": "Deep knowledge in life sciences, healthcare, manufacturing, and automotive ensures solutions are tailored, not generic."
                },
                {
                    "title": "Innovation at Scale",
                    "desc": "Rialtes helps clients adopt AI, automation, and Data Cloud to transform Salesforce into a true growth engine."
                }
            ],
            "desc3": "Enterprises trust Rialtes because it doesn’t just deliver Salesforce, it delivers results."
        }
    ]
    const buildData = [
        "A Salesforce implementation can either be a catalyst for growth or a costly misstep. The difference lies in execution. With the right partners and Salesforce integration partners, enterprises can reduce risk, accelerate adoption, and maximize ROI.",
        "If you’re asking <i>“How to ensure a successful Salesforce implementation?”</i> or <i>“What are the best practices for Salesforce integration?”</i> the answer is simple: partner with experts who combine strategy, industry knowledge, and technical excellence.",
        "That’s exactly what Rialtes offers. As a Salesforce Crest Partner, Rialtes has helped enterprises across industries implement and integrate Salesforce seamlessly—delivering measurable ROI while setting the stage for future innovation. Partner with Rialtes and turn Salesforce into the backbone of your enterprise success."
    ]
    const faqs = [
        {
            "question": "How to ensure a successful Salesforce implementation?",
            "answer": "Start with a clear roadmap, engage stakeholders early, and work with certified Salesforce implementation partners who can align the system with your business goals."
        },
        {
            "question": "What are the best practices for Salesforce integration?",
            "answer": "Best practices include mapping an integration roadmap, prioritizing critical systems, and leveraging Salesforce integration partners with proven expertise. Scalability and compliance should always be built in."
        },
        {
            "question": "Why do enterprises need Salesforce integration partners?",
            "answer": "Integration partners bring frameworks, accelerators, and industry expertise that reduce risk and speed time-to-value. They ensure Salesforce isn’t just installed but optimized for measurable business outcomes."
        },
        {
            "question": "How can Salesforce integration partners reduce project risk?",
            "answer": "They prevent common issues like data duplication, scope creep, or compliance failures. Certified integration partners design secure, scalable connections that future-proof your Salesforce ecosystem."
        },
        {
            "question": "Why choose Rialtes as a Salesforce implementation partner?",
            "answer": "Rialtes is a Salesforce Crest Partner with a proven track record in seamless implementations, complex integrations, and ongoing innovation. With Rialtes, enterprises reduce project risks and maximize Salesforce ROI."
        }
    ]

    return (
        <section className="min-h-screen">
            <Seo
                title="Patient Experience Platform Transforming Long-Term Care | Rialtes"
                description="Discover how MediAIna, Rialtes’ patient experience platform, redefines healthcare journeys with digital engagement, AI insights, and chronic care support."
                canonical={
                    "https://www.rialtes.com/insights/blogs/patient-experience-platform-transforming-long-term-care/"
                }
            />

            {/* <Script
                id="schema-copilots"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            /> */}

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/patient-experience-platform-mediAIna-transforming-long-term-care.webp"
                        alt="banner image"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/patient-experience-platform-mediAIna-transforming-long-term-care-mobile.webp"
                        alt="banner image"
                        priority
                        height={0}
                        width={0}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>


            <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
                <div className="grid lg:grid-cols-12 grid-cols-12">
                    <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11 col-span-12">

                        {/* date and icons */}
                        <div className="sm:flex justify-between">
                            <div>
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Salesforce</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>07 October 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">Seamless Salesforce Implementation: Partner Strategies That Reduce Risk & Maximize ROI</h1>


                            <div className="xl:mt-[38px] mt-[33px]">
                                {
                                    blogMainData.map((data, ind) => {
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


                            {/* common data */}
                            <>
                                {
                                    commonData.map((data, ind) => {
                                        return (
                                            <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                                {
                                                    data.list.map((elem, id) => (
                                                        <div key={id}>
                                                            <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.title}</h3>
                                                            <UnorderedList arrName={elem.desc} ulClassName={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4`} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </>

                            {/* how salesforce partners section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">How Salesforce Partners Reduce Project Risk</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Implementing Salesforce at an enterprise scale is not without challenges. Common risks include:</p>
                                {
                                    salesforceData.map((data, ind) => {
                                        return (
                                            <div
                                                className="md:flex mt-24 md:mt-[47px] py-[34px] xl:py-[46px] px-[26px] 
                                                           md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative 
                                                           md:ml-[90px] sm:w-[80%] md:w-auto lg:w-[80%] xl:w-auto 4xl:w-[86%]"
                                                key={ind}>
                                                <h3
                                                    className="md:absolute md:flex items-center
                                                                max-md:mt-[-65px] sm:mt-[-70px] md:mt-0
                                                                md:top-1/2 md:-translate-y-1/2 md:left-[-80px]
                                                                bg-[#006FBE] text-white font-semibold
                                                                4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]
                                                                px-[20px] py-[15px] leading-tight
                                                                4xl:w-[320px] xl:w-[270px] md:w-[250px] w-fit">
                                                    {data.title}
                                                </h3>

                                                <div
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]
                                                                font-medium my-auto max-md:mt-8
                                                                md:ml-[200px] xl:ml-[240px] 4xl:ml-[300px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>
                                        )
                                    })
                                }

                                <p className="md:mt-[63px] mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Salesforce partners reduce these risks through proven strategies:</p>
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] 4xl:w-[1200px] sm:w-[80%] md:w-full">
                                    {
                                        salesforceStratergies.map((elem, id) => {
                                            return (
                                                <div className="4xl:p-[30px] p-[22px] border border-[#707070]" key={id}>
                                                    <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070]">{elem.title}</h3>
                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <p className="md:mt-[47px] mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Ultimately, reducing risk isn’t just about avoiding failure. It’s about ensuring the project delivers measurable business value. Risk management is directly tied to ROI.</p>

                            </div>

                            {/* maximize section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    maximizeData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                {
                                                    data.list.map((elem, id) => (
                                                        <div key={id}>
                                                            <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.title}</h3>
                                                            {
                                                                elem.descArr?.map((item, i) => (
                                                                    <div key={i}>
                                                                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{item.desc}</p>
                                                                        {
                                                                            item.steps &&
                                                                            <UnorderedList arrName={item.steps} ulClassName={`mt-5 list-disc pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-2`} />
                                                                        }
                                                                        {
                                                                            item.desc2 && <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{item.desc2}</p>
                                                                        }
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* trusted section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    trustedData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2}</p>

                                                <div className="grid lg:grid-cols-3 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] lg:mt-[48px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full 4xl:w-[1050px]">
                                                    {
                                                        data.list.map((data, ind) => {
                                                            return (
                                                                <div key={ind} className={`mt-5 ${(ind == 1 || ind == 2 || ind == 4) ? "lg:px-[32px] border-[#707070] lg:border-l max-lg:border-b max-lg:pb-5 max-lg:last:border-0" : ""} ${ind == 3 ? "lg:pr-[32px] max-lg:border-b max-lg:pb-5 border-[#707070]" : ""} ${ind == 0 ? "lg:pr-[40px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-md:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                                    <h4 className="4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] font-bold">{data.title}</h4>
                                                                    <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p className="mt-[40px] lg:mt-[80px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc3}</p>

                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* build section */}
                            <div className="xl:mt-[38px] mt-[33px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Build Salesforce the Right Way, Maximize ROI with the Right Partner</h2>
                                {
                                    buildData.map((data, ind) => {
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