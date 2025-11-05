"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/[locale]/components/useUrl";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/tracking-service-level-agreements-without-losing-mind";
    const currUrl = useUrl()
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "How Do You Track SLAs and Billing Without Losing Your Mind?",
        "description": "Discover how AI dashboards are transforming real estate operations by automating SLA tracking, billing accuracy, and vendor performance monitoring. Learn how data-driven operational efficiency helps property teams improve visibility, prevent errors, and drive measurable ROI.",
        "image": "https://www.rialtes.com/images/blog/ai-sla-billing-efficiency.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/tracking-service-level-agreements-without-losing-mind/"
        },
        "datePublished": "2025-10-27",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "Data-Driven Operational Efficiency in Real Estate FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How can I monitor SLA performance in property operations?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can monitor SLA performance using AI dashboards that track vendor response times, work order completion rates, and compliance metrics in real time. Platforms like Exelona automate alerts when SLAs are at risk of being breached."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is data-driven operational efficiency in real estate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Data-driven operational efficiency means using AI and analytics to optimize property operations — from SLA tracking to billing and maintenance — based on real-time insights instead of manual monitoring."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can AI dashboards help with billing and maintenance tracking?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. AI dashboards automatically match invoices with work orders, flag anomalies, and display maintenance costs, making billing faster, more transparent, and accurate across multiple vendors."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does predictive maintenance improve real estate operations?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Predictive maintenance helps property managers anticipate equipment failures and schedule timely service before issues occur, reducing downtime and unnecessary expenses."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What’s the ROI of adopting AI dashboards for property management?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Real estate firms typically report up to 40% fewer SLA violations, 25% lower maintenance costs, and faster billing cycles within the first year of implementing AI-powered operational dashboards."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What features should I look for in an operational analytics platform?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Look for real-time SLA tracking, billing automation, predictive alerts, and vendor performance insights. Platforms like Exelona bring all of these together in one cohesive dashboard."
                    }
                }
            ]
        }
    }
    const dataDriven = [
        "Keeping property operations smooth is no small feat. Between tracking service-level agreements (SLAs), managing vendor payments, and keeping maintenance bills in check, operations teams often find themselves buried in spreadsheets and email threads.",

        "Here’s the thing: as portfolios grow and service expectations rise, traditional tracking methods can’t keep up. That’s where you need data-driven operational efficiency in real estate. With AI-enabled dashboards, automated billing, and predictive insights, property managers can monitor everything from SLA compliance to maintenance costs, all in real time. Let’s unpack how the industry is shifting gears and why this transformation is long overdue.",
    ]

    const gutDriven = [
        "Across the US and Europe, real estate firms are increasingly turning to AI-powered analytics platforms to unify their property operations.",
        "In the US, more than 40% of real estate companies have adopted AI dashboards for SLA monitoring and <a href='https://www.rialtes.com/insights/blogs/ai-in-real-estate-reduce-opex-with-predictive-maintenance/'  class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'> predictive maintenance in real estate</a> , according to a 2025 Statista report.",
        "In Europe, smart operations solutions are projected to grow at a 15% CAGR through 2028, driven by the demand for transparency and efficiency in large residential and commercial portfolios. What’s changing isn’t just technology; it’s mindset.",
        "Instead of reacting to issues after they occur, property operators are embracing data visibility and predictive insights to prevent delays, overbilling, and maintenance backlogs before they start. This shift from gut-driven decision-making to data-driven execution is what’s defining the next wave of operational excellence in real estate."
    ]

    const propertyOpsSection = {
        paragraph: `Let’s start with the obvious: operational inefficiencies are everywhere in property management.`,

        paragraph2: `According to a 2024 Deloitte survey on real estate operations, nearly 62% of property managers report that manual SLA tracking is among their top three operational challenges. Add to that the billing delays caused by fragmented vendor systems, and it's easy to see why even the most capable teams feel stretched thin.`,

        bulletIntro: "What this means is:",
        bulletPoints: [
            "SLAs get missed because there’s no centralized performance dashboard.",
            "Billing disputes drag on because of inconsistent maintenance logs.",
            "Teams spend more time reconciling data than improving service quality."
        ],

        closing: `In an environment where residents expect instant resolutions and transparent billing, inefficiency gets frustrating and expensive. So, how do leading real estate firms fix it? The answer lies in making data the operational backbone.`
    };

    const trackingDilemmaSection = {
        paragraph: `Tracking SLAs manually through spreadsheets or shared drives might work when you’re managing ten properties. But once you scale to hundreds, it becomes chaos.`,

        paragraph2: `The problem isn’t just human error. It’s the lack of real-time visibility. By the time a missed SLA is noticed, the service window has already closed, and the resident is frustrated. Worse, managers have little insight into why it happened. Was it vendor performance? A delay in approval? Or an incomplete work order?`,

        bulletIntro: "Here’s where AI dashboards simplify it.",
        bulletPoints: [
            "They aggregate data from multiple systems (tenant apps, vendor portals, billing platforms).",
            "They display SLA compliance metrics in real time.",
            "They trigger alerts for potential breaches before they occu"
        ],

        closing: `Instead of manually checking performance metrics every week, you can now see SLA health briefly, across all properties and vendors. This kind of automation doesn’t replace teams; it empowers them to focus on improvement rather than inspection.`
    }

    const smarterBilling = [
        {
            "title": "Automated invoice matching",
            "desc": "Vendor invoices are verified against work orders and SLA logs in seconds."
        },
        {
            "title": "Exception alerts",
            "desc": "Any anomalies (duplicate entries, mismatched hours, cost deviations) trigger instant notifications."
        },
        {
            "title": "Approval workflows",
            "desc": "Managers can review, approve, or reject bills directly within the dashboard."
        },

    ]

    const smartDashboardSection = {
        title: "Turning Data Into Decisions: What Smart Dashboards Do Differently",

        introParagraphs: [
            "Not all dashboards are created equal.",
            "Most property management systems provide basic reports. But AI-powered dashboards go further; they interpret data."
        ],

        bulletIntro: "Key features include:",
        bulletPoints: [
            {
                bold: "Real-time SLA heatmaps ",
                text: "to visualize performance gaps."
            },
            {
                bold: "Automated vendor scorecards ",
                text: "that rank contractors by reliability and response time."
            },
            {
                bold: "Integrated billing analytics ",
                text: "that connect financial outflows to operational activities."
            },
            {
                bold: "Predictive alerts ",
                text: "that help prevent SLA breaches or asset failures."
            }
        ],

        closing:
            "By translating operational data into clear, visual insights, managers can identify bottlenecks, allocate budgets smartly, and ensure accountability at every level. This shift from *data collection to data intelligence* is what separates reactive organizations from proactive ones."
    };


    const dashboardStats = [
        {
            percentage: "30–40%",
            boldText: "reduction in SLA violations ",
            description: "within the first year."
        },
        {
            percentage: "20%",
            boldText: "faster vendor payment cycles ",
            description: "due to automated billing verification."
        },
        {
            percentage: "25–35%",
            boldText: "improvement in maintenance planning ",
            description: "through predictive insights."
        }
    ];

    const mostFirms = [
        {
            "title": "1. Data fragmentation",
            "desc": "Legacy systems don’t talk to each other."
        },
        {
            "title": "2. Skill gaps",
            "desc": "Teams aren’t trained to interpret operational analytics."
        },
        {
            "title": "3. Change resistance",
            "desc": "Shifting from manual processes feels disruptive — even if it’s better in the long run."
        },

    ]

    const faqs = [
        {
            "question": "How can I monitor SLA performance in property operations?",
            "answer": "You can monitor SLA performance using AI dashboards that track vendor response times, work order completion rates, and compliance metrics in real time. Platforms like Exelona automate alerts when SLAs are at risk of being breached."
        },
        {
            "question": "What is data-driven operational efficiency in real estate?",
            "answer": "It refers to using AI and analytics to optimize property operations, from SLA tracking to billing and maintenance, based on real-time data insights rather than manual tracking."
        },
        {
            "question": "Can AI dashboards help with billing and maintenance tracking?",
            "answer": "Yes. AI dashboards automatically match invoices with work orders, flag anomalies, and display maintenance costs, making billing faster and more accurate."
        },
        {
            "question": "How does predictive maintenance improve real estate operations?",
            "answer": "Predictive maintenance in real estate helps property managers anticipate equipment failures and schedule service before issues occur, reducing downtime and repair costs."
        },
        {
            "question": "What’s the ROI of adopting AI dashboards for property management?",
            "answer": "Most firms report up to 40% fewer SLA violations, 25% cost savings in maintenance, and faster billing cycles within the first year of adopting AI-powered dashboards."
        },
        {
            "question": "What features should I look for in an operational analytics platform?",
            "answer": "Look for real-time SLA tracking, billing automation, predictive alerts, and vendor performance insights. Platforms like Exelona offer all of these in one place."
        }
    ]

    return (
        <section className="min-h-screen">
            <Seo
                title="Service Level Agreement (SLA) Tracking: AI-Driven Guide | Rialtes"
                description="With AI-enabled dashboards, automated billing, and predictive insights, property managers monitor SLA compliance and maintenance costs in real time."
                keywords=""
                canonical={
                    "https://www.rialtes.com/insights/blogs/tracking-service-level-agreements-without-losing-mind/"
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
                        src="/images/blog/ai-sla-billing-efficiency.webp"
                        alt="banner image"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/ai-sla-billing-efficiency-mobile.webp"
                        alt="banner image"
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
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>27 October 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">How Do You Track SLAs and Billing Without Losing Your Mind?</h1>

                            <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                A service-level agreement (SLA) outlines the expected level of service from a vendor. It specifies the metrics used to measure that service and the remedies available if the agreed-upon service levels are not met. The SLA is a vital part of any contract with a technology vendor.
                            </p>

                            <h2 className="font-semibold 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] mt-5 xl:mt-[20px] leading-tight">Driving Data-Driven Operational Efficiency in Real Estate with AI Dashboards and Predictive Insights</h2>

                            <div className="xl:mt-[20px] mt-5">
                                {
                                    dataDriven.map((data, ind) => {
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


                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">The State of Property Operations: Too Many Tasks, Too Little Time</h2>

                                <div className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{propertyOpsSection.paragraph}</p>
                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{propertyOpsSection.paragraph2}</p>

                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{propertyOpsSection.bulletIntro}</p>
                                    <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                        {propertyOpsSection.bulletPoints.map((point, i) => (
                                            <li key={i} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{point}</li>
                                        ))}
                                    </ul>

                                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">{propertyOpsSection.closing}</p>


                                </div>
                            </div>

                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    From Gut-Driven to Data-Driven: The Shift Is Already Underway
                                </h2>

                                <div className="xl:mt-[38px] mt-[33px]">
                                    {
                                        gutDriven.map((data, ind) => {
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

                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">The SLA Tracking Dilemma: Why Manual Monitoring Fails</h2>

                                <div className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{trackingDilemmaSection.paragraph}</p>
                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{trackingDilemmaSection.paragraph2}</p>

                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{trackingDilemmaSection.bulletIntro}</p>
                                    <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                        {trackingDilemmaSection.bulletPoints.map((point, i) => (
                                            <li key={i} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{point}</li>
                                        ))}
                                    </ul>

                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{trackingDilemmaSection.closing}</p>


                                </div>
                            </div>

                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    Smarter Billing: When Every Dollar Needs Accountability
                                </h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">If SLA tracking is the heart of operational transparency, billing is the backbone of financial discipline. Yet, according to CBRE’s 2024 operations study, billing inaccuracies account for nearly 8% of total annual operational costs in large real estate portfolios.</p>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">The root cause turned out to be fragmented billing data. Maintenance teams use one system. Vendors use another. Finance uses spreadsheets. AI dashboards and data-driven billing modules simplify this mess by integrating everything under one system:</p>
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] 4xl:w-[1200px] sm:w-[80%] md:w-full">
                                    {
                                        smarterBilling.map((elem, id) => {
                                            return (
                                                <div className="4xl:p-[30px] p-[22px] border border-[#707070]" key={id}>
                                                    <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070]">{elem.title}</h3>
                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">By connecting every billing event to operational data, property firms can finally ensure accuracy without extra overhead. And this isn’t theory; in fact, a large UK-based property group recently reported saving nearly 25% in vendor overpayments within six months of switching to an AI-enabled billing system. That’s the power of data-driven operational efficiency in action.</p>
                            </div>

                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    Turning Data Into Decisions: What Smart Dashboards Do Differently
                                </h2>
                                <div className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {smartDashboardSection.introParagraphs.map((para, i) => (
                                        <p key={i} className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{para}</p>
                                    ))}

                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{smartDashboardSection.bulletIntro}</p>

                                    <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                        {smartDashboardSection.bulletPoints.map((item, i) => (
                                            <li key={i} className="mt-2">
                                                <p className="font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item.bold}</p>
                                                <p className="mt-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item.text}</p>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" >{smartDashboardSection.closing}</p>
                                </div>
                            </div>

                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    The ROI of Going Data-Driven
                                </h2>

                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Let’s put some numbers behind the narrative.</p>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Companies that implement AI dashboards for operational tracking typically report:</p>

                                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 mt-12 xl:pr-[20rem]">
                                    {dashboardStats.map((item, i) => (
                                        <div key={i}>
                                            <p className="text-[#006FBE] 4xl:text-[35px] 2xl:text-[32px] xl:text-[28px] md:text-[24x] text-[24px] font-bold">
                                                {item.percentage}
                                            </p>
                                            <p className="text-[#006FBE] font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">
                                                {item.boldText}
                                            </p>
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item.description}</p>
                                        </div>
                                    ))}
                                </div>



                                <p className="mt-12 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Beyond the numbers, the biggest ROI is clarity. Teams know what’s working, what’s not, and where they can intervene early. In a market where margins are tightening and expectations are rising, that clarity plays a big role.</p>


                            </div>

                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    Why Most Firms Still Struggle with Data-Driven Operations
                                </h2>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">If data-driven operations are so effective, why hasn’t every property firm adopted them yet?</p>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">There are three main barriers:</p>

                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full">
                                    {
                                        mostFirms.map((data, ind) => {
                                            return (
                                                <div key={ind} className={`mt-[48px] ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-md:border-b max-md:pb-5" : ""} ${ind == 3 ? "lg:pl-[32px] border-[#707070] lg:border-l" : ""} ${ind == 0 ? "lg:pr-[40px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-md:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                    <h3 className="4xl:text-[22px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold  ">{data.title}</h3   >
                                                    <p className="md:mt-4 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] md:mb-4">{data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Overcoming these hurdles requires the right mix of technology, training, and transformation. At Rialtes, we built Exelona to make operational intelligence accessible, not overwhelming. It consolidates SLA tracking, billing automation, vendor performance, and maintenance analytics into one cohesive dashboard. It’s designed for real estate teams that want clarity without complexity. So instead of juggling ten systems and dozens of spreadsheets, let’s get a single source of operational truth.</p>

                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs Frequently Asked Questions</h2>
                <div className="mt-[29px] xl:mt-[30px]">
                    <FAQAccordion faqData={faqs} />
                </div>
            </section>

            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section>
    )
}
