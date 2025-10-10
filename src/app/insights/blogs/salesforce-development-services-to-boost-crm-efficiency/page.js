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
    const fullUrl = "https://www.rialtes.com/insights/blogs/boost-your-crm-efficiency-with-tailored-salesforce-development-services/";
    const currUrl = useUrl()

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Salesforce Development Services to Boost CRM Efficiency | Rialtes",
        "description": "Explore why custom Salesforce development matters, how it boosts CRM efficiency, and why choosing the right partner makes all the difference.",
        "image": "https://www.rialtes.com/images/blog/salesforce-development-services-to-boost-efficiency.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/salesforce-development-services-to-boost-crm-efficiency/"
        },
        "datePublished": "2025-10-06",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "Boosting CRM Efficiency with Salesforce Development Services FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How can custom Salesforce development improve CRM efficiency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Custom development automates repetitive tasks, integrates siloed systems, and tailors workflows to match business needs. This reduces errors, speeds up processes, and improves user adoption."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the benefits of hiring a Salesforce development company in the USA?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "US-based partners often have industry-specific expertise, strong compliance knowledge, and access to a highly skilled Salesforce-certified workforce, making them ideal for enterprise projects."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do tailored Salesforce services reduce costs and improve ROI?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tightened development reduces operational costs and helps enterprises achieve faster ROI by cutting redundant processes, automating workflows, and enhancing reporting."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What should enterprises look for in Salesforce development partners?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Look for certified expertise, proven experience in CRM optimization, integration capabilities, and a partner who prioritizes scalability and user adoption."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does Rialtes help businesses with Salesforce CRM optimization and custom solutions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Rialtes combines deep Salesforce expertise with industry knowledge. From integrations to AI-powered apps, we deliver tailored solutions that help enterprises maximize CRM efficiency and stay future-ready."
                    }
                }
            ]
        }
    }

    const blogMainData = [
        "Customer Relationship Management (CRM) is the beating heart of modern enterprises. It drives how sales teams close deals, how service teams respond to customers, and how marketing delivers personalized campaigns. Among the many CRM platforms available, Salesforce stands out as the most trusted CRM out there. But here’s the catch: simply deploying Salesforce isn’t enough. To truly maximize its potential, businesses need tailored Salesforce services that adapt the platform to unique workflows, data models, and customer expectations.",
        "In this blog, we’ll explore why custom Salesforce development matters, how it boosts CRM efficiency, and why choosing the right partner, especially a trusted Salesforce development company in the USA, makes all the difference."
    ]
    const whyCrmDAta = [
        {
            "title": "Why CRM Efficiency Matters for Modern Enterprises",
            "desc": [
                "Enterprises today compete on customer experience. A slow, inefficient CRM system can mean lost opportunities, frustrated employees, and disengaged customers.",
                "Some common challenges organizations face with out-of-the-box Salesforce setups include:"
            ],
            "list": [
                "Redundant manual processes that slow down sales and service teams.",
                "Limited visibility into customer journeys because of siloed systems.",
                "Reports and dashboards that don’t deliver actionable insights.",
                "Poor adoption rates due to complex or irrelevant workflows."
            ],
            "desc2": "That’s why strategic Salesforce consulting for enterprises is essential to keep pace with modern business demands. When your CRM is efficient, your teams work smarter, customers get faster responses, and leadership gains the insights they need to make better decisions."
        }
    ]


    const rialtesYourTrustData = [
        {
            "title": "Rialtes: Your Trusted Salesforce Development Partner",
            "desc1": "At Rialtes, we understand that no two enterprises are alike. As one of the <a href='https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>top Salesforce development companies in the USA </a> , we specialize in delivering tailored Salesforce services that drive measurable efficiency, innovation, and growth.",
            "desc2": "Our expertise includes:",
            "desc3": "We don’t just implement Salesforce for you; we help you transform it into a growth engine. With our Crest Partner status, Rialtes combines deep industry expertise with proven Salesforce excellence.",
            "desc4": "If your enterprise is ready to move beyond off-the-shelf solutions and unlock the full power of Salesforce, Rialtes is here to help you thrive.",
            "list2": [
                "<strong>Salesforce CRM optimization </strong> to streamline operations.",
                "<strong>Custom integrations</strong> with ERP, marketing, and legacy systems",
                "<strong>App development</strong/> tailored to your unique workflows",
                "<strong>AI and analytics enablement</strong/> for future-ready insights",
            ]
        }
    ]

    const whatToLook = [
        {
            "title": "What to Look for in a Salesforce Development Company",
            "desc": [
                "Not all partners are created equal. The right partner won’t just configure Salesforce; they’ll future-proof your enterprise. Here are key qualities to look for:",
            ],
            "list": [
                "<h3 class='text-[20px]'>Proven track record in Salesforce CRM optimization</h3>",
                "<h3 class='text-[20px]'>Experience with Salesforce integrations, app development, and automation</h3>",
                "<h3 class='text-[20px]'>Ability to deliver scalable, AI-ready solutions</h3>",
                "<h3 class='text-[20px]'>Commitment to training and change management for smooth adoption</h3>"
            ],
        }
    ]

    const workFlowExample = [
        {
            "title": "Workflow Examples: How Integration Boosts Efficiency",
            "desc1": "Workflow Example 1: Lead to Customer Sync",
            "list1": [
                "A new lead is captured in Salesforce via a web form or campaign.",
                "The sales team qualifies the lead and converts it into an Account.",
                "An API triggers a data push to the internal CRM, automatically creating a Customer record.",
                "The operations team receives onboarding tasks in their dashboard without manual handoff.",
                "Status updates flow back into Salesforce, giving sales full visibility into progress."
            ],
            "desc2": "Workflow Example 2: Order Status Feedback Loop",
            "list2": [
                "A deal is closed in Salesforce, triggering an order request in the logistics system.",
                "The logistics team processes the order through its internal modules.",
                "Order status updates (e.g., “Packed,” “Shipped,” “Delivered”) are synced back into Salesforce.",
                "Salesforce uses Marketing Cloud to send automated email/SMS notifications to the customer."
            ]
        }
    ]

    const faqData = [
        {
            "question": "How can custom Salesforce development improve CRM efficiency?",
            "answer": "Custom development automates repetitive tasks, integrates siloed systems, and tailors workflows to match business needs. This reduces errors, speeds up processes, and improves user adoption."
        },
        {
            "question": "What are the benefits of hiring a Salesforce development company in the USA?",
            "answer": "US-based partners often have industry-specific expertise, strong compliance knowledge, and access to a highly skilled Salesforce-certified workforce, making them ideal for enterprise projects."
        },
        {
            "question": "How do tailored Salesforce services reduce costs and improve ROI?",
            "answer": "Tightened development reduces operational costs and helps enterprises achieve faster ROI by cutting redundant processes, automating workflows, and enhancing reporting."
        },
        {
            "question": "What should enterprises look for in Salesforce development partners?",
            "answer": "Look for certified expertise, proven experience in CRM optimization, integration capabilities, and a partner who prioritizes scalability and user adoption."
        },
        {
            "question": "How does Rialtes help businesses with Salesforce CRM optimization and custom solutions?",
            "answer": "Rialtes combines deep Salesforce expertise with industry knowledge. From integrations to AI-powered apps, we deliver tailored solutions that help enterprises maximize CRM efficiency and stay future-ready."
        },
    ]
    const theCaseOfCustom = [
        {
            "title": "The Case for Custom Salesforce Development",
            "whatMakes": "What Makes Salesforce Development Services Essential?",
            "desc": "Salesforce is incredibly powerful, but every enterprise operates differently. Standard features rarely fit every business process. That’s why we need Salesforce managed services for customization. It ensures that Salesforce isn’t just another system your teams use; it becomes the system that runs your business.",
            "desc2": "Think of it like tailoring a suit. Off-the-rack might work, but when custom-fitted, everything feels sharper, more comfortable, and more aligned with your needs.",
            "howCanCus": "How Can Custom Salesforce Development Improve CRM Efficiency?",
            "hereAre": "Here are some real-world improvements enterprises see through custom development:",
            "thisisWhere": "This is where tailored Salesforce development services unlock true CRM efficiency.",

            "list2": [
                "<strong><h4 class='inline text-[20px]'>Automating manual workflow</h4></strong> Instead of sales reps manually updating deal stages, automation moves opportunities through the pipeline.",
                "<strong> <h4 class='inline text-[20px]'>User-friendly dashboards</h4></strong> Leaders no longer wade through irrelevant data—they see exactly what matters",
                "<strong> <h4 class='inline text-[20px]'>Seamless integrations</h4></strong/> Finance, marketing, and ERP systems share data automatically, eliminating double entry",
            ]
        }
    ]

    const strategiesList = [
        {
            "title": "Roadmap development",
            "desc": "Define short-term priorities and long-term goals before customizing."
        },
        {
            "title": "Iterative development",
            "desc": "Build, test, and improve in cycles to reduce risks and ensure alignment"
        },
        {
            "title": "User training and adoption",
            "desc": "A great solution fails if users don’t embrace it—training is essential"
        },
        {
            "title": "Leverage Exchange extensions",
            "desc": "Use pre-built apps where possible, then tailor solutions for unique needs"
        },
    ]

    const keyBenifiteList = [
        {
            "title": "Enhanced customer experience",
            "desc": "Personalized interactions based on accurate data."
        },
        {
            "title": "Improved decision-making",
            "desc": "Advanced analytics and reporting give leaders the necessary insights."
        },
        {
            "title": "Reduced operational costs",
            "desc": "Automation eliminates redundant processes."
        },
        {
            "title": "Future-ready scalabilit",
            "desc": "As your enterprise grows, Salesforce scales with you."
        },
    ]

    const keyBenifitesSalesforce = [
        {
            "title": "Key Benefits of Tailored Salesforce Development Services",
            "desc":
                "Tailored development doesn’t just improve system performance; it transforms the way your business operates:",
            "desc2": "With customization, your CRM moves from being just a tool to becoming a competitive advantage."
        }

    ]



    const salesforceFeatureList = [
        {
            "title": "AI and predictive analytics",
            "desc": "Salesforce Einstein can forecast customer needs, sales trends, and service issues."
        },
        {
            "title": "Low-code/no-code customization",
            "desc": "Citizen developers can build workflows without deep coding skills."
        },
        {
            "title": "Continuous innovation",
            "desc": "Future updates will further integrate AI, automation, and connected data."
        }
    ]

    const salesforceFeature = [
        {
            "title": "The Future with Salesforce CRM: From Development to AI-Powered Innovation",
            "desc":
                "Salesforce comes with intelligence. Custom development today sets the foundation for AI-driven innovation tomorrow.",
            "desc2": "Enterprises that invest in tailored Salesforce development today are better positioned to harness AI-powered care pathways, predictive sales models, and advanced automation tomorrow."
        }
    ]

    const choosingRightData = [
        {
            "title": "Choosing the Right Salesforce Development Partner",
            "desc": "While Salesforce partners are global, <a href='https://www.rialtes.com/insights/blogs/how-top-salesforce-partners-help-enterprises-thrive-and-innovate/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>working with a leading Salesforce partner</a> comes with unique advantages:",
            "list2": [
                "<strong>Proximity to enterprise markets</strong> Teams understand local industry regulations and customer expectations",
                "<strong>Compliance and security</strong> US partners are well-versed in HIPAA, SOC 2, and other critical compliance standards",
                "<strong>Certified expertise</strong/> A deeper talent pool of Salesforce-certified developers and consultants",
            ]
        }
    ]

    return (
        <section className="min-h-screen">
            <Seo
                title="Salesforce Development Services for Enterprise Success | Rialtes"
                description="Explore why custom Salesforce development matters, how it boosts CRM efficiency, and why choosing the right partner makes all the difference"
                canonical={
                    "https://www.rialtes.com/insights/blogs/salesforce-development-services-to-boost-crm-efficiency/"
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
                        src="/images/blog/salesforce-development-services-to-boost-efficiency.webp"
                        alt="banner image"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/salesforce-consulting-cluster-feature-thumb.webp"
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
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>06 October 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">Boost Your CRM Efficiency with Tailored Salesforce Development Services</h1>
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
                            {/* chronic care section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    keyBenifitesSalesforce.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mb-[22px] xl:mb-[15px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                                <p
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>
                                        )
                                    })
                                }

                                <div >
                                    {
                                        keyBenifiteList.map((data, ind) => {
                                            return (
                                                <div
                                                    className="md:flex mt-24 md:mt-10 py-[34px] xl:py-[46px] px-[26px] 
                                                           md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative 
                                                           md:ml-[90px] sm:w-[80%] md:w-auto lg:w-[80%] xl:w-auto 4xl:w-[86%]"
                                                    key={ind}>
                                                    <h3
                                                        className="md:absolute md:flex items-center justify-center
                                                                max-md:mt-[-80px] sm:mt-[-70px] md:mt-0
                                                                md:top-1/2 md:-translate-y-1/2 md:left-[-80px]
                                                                bg-[#006FBE] text-white font-semibold
                                                                4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]
                                                                px-[30px] py-[22px] leading-tight
                                                                4xl:w-[340px] xl:w-[280px] md:w-[240px] w-fit 4xl:h-[100px]">
                                                        {data.title}
                                                    </h3>

                                                    <div
                                                        className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]
                                                                font-medium my-auto max-md:mt-8
                                                                md:ml-[220px] xl:ml-[210px] 4xl:ml-[320px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc }}
                                                    />

                                                </div>


                                            )
                                        })
                                    }
                                </div>
                                {
                                    keyBenifitesSalesforce.map((data, ind) => {
                                        return (
                                            <div key={ind}>

                                                <p
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-10"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                            </div>
                                        )
                                    })
                                }

                            </div>


                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Strategies for Successful Salesforce Development & Deployment</h2>
                                <p className="mt-[22px] xl:mt-[10px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Maximizing ROI from Salesforce requires a well-planned strategy. Here are proven approaches:</p>

                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full">
                                    {
                                        strategiesList.map((data, ind) => {
                                            return (
                                                <div key={ind} className={`mt-[48px] ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-md:border-b max-md:pb-5" : ""} ${ind == 3 ? "lg:pl-[32px] border-[#707070] lg:border-l" : ""} ${ind == 0 ? "lg:pr-[40px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-md:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                    <h4 className="4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] font-bold">{data.title}</h4>
                                                    <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-[60px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">These strategies help enterprises not only reduce Salesforce project risk but also maximize ROI.</p>

                            </div>


                            <div className="md:mt-[70px] mt-[40px]">
                                {
                                    salesforceFeature.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mb-[22px] xl:mb-[15px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                                <p
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>
                                        )
                                    })
                                }

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[26px] mt-[47px] sm:w-[70%] md:w-[90%] lg:w-[900px] xl:w-[1090px] 3xl:w-[1140px]">
                                    {
                                        salesforceFeatureList.map((data, ind) => {
                                            return (
                                                <div key={ind} className="border border-[#707070] p-[28px] md:px-[34px] md:pt-[26px] md:pb-[40px]">
                                                    <h3 className="mt-2  4xl:text-[24px] xl:text-[20px] text-[18px] text-[#0092E0] font-bold pb-4 border-b border-[#707070]">{data.title}</h3>
                                                    <p className="mt-5  4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-10">Enterprises that invest in tailored Salesforce development today are better positioned to harness AI-powered care pathways, predictive sales models, and advanced automation tomorrow.</p>
                            </div>









                            {/* why patient section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    whyCrmDAta.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mb-[22px] xl:mb-[10px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                {
                                                    data.desc.map((elem, id) => {
                                                        return (
                                                            <p
                                                                key={id}
                                                                className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                                dangerouslySetInnerHTML={{ __html: elem }}
                                                            />
                                                        )
                                                    })
                                                }
                                                <UnorderedList arrName={data.list} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* from diagnosis section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    theCaseOfCustom.map((data, id) => {
                                        return (
                                            <div key={id}>
                                                <h2 className="mb-[22px] xl:mb-[18px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <h3 className="mb-[22px] xl:mb-[10px] font-semibold  4xl:text-[22px] 2xl:text-[19px] xl:text-[18px] md:text-[18px] text-[18px] leading-tight">{data.whatMakes}</h3>
                                                <p
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <h3 className="mb-[22px] xl:mb-[10px] font-semibold  4xl:text-[22px] 2xl:text-[19px] xl:text-[18px] md:text-[18px] text-[18px] leading-tight mt-5">{data.howCanCus}</h3>
                                                <p
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.hereAre }}
                                                />
                                                <UnorderedList arrName={data.list2} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />
                                                <p
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-8"
                                                    dangerouslySetInnerHTML={{ __html: data.thisisWhere }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>



                            {/* digital patient section */}
                            <div className="md:mt-[60px] mt-[40px]">
                                {
                                    choosingRightData.map((data, id) => {
                                        return (
                                            <div key={id}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <UnorderedList arrName={data.list2} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />

                                            </div>
                                        )
                                    })
                                }

                            </div>



                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    whatToLook.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mt-2  4xl:text-[24px] xl:text-[20px] text-[18px]  font-bold pb-2 ">{data.title}</h2>                                                {
                                                    data.desc.map((elem, id) => {
                                                        return (
                                                            <p
                                                                key={id}
                                                                className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                                dangerouslySetInnerHTML={{ __html: elem }}
                                                            />
                                                        )
                                                    })
                                                }
                                                <UnorderedList arrName={data.list} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />

                                            </div>
                                        )
                                    })
                                }
                            </div>


                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    workFlowExample.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mt-2  4xl:text-[24px] xl:text-[20px] text-[18px]  font-bold pb-4 ">{data.title}</h2>

                                                <div>
                                                    <h3
                                                        className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold"
                                                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                                                    />


                                                    <UnorderedList arrName={data.list1} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />
                                                    <h3
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold"
                                                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                    />

                                                    <UnorderedList arrName={data.list2} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />
                                                </div>



                                            </div>
                                        )
                                    })
                                }
                            </div>



                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    rialtesYourTrustData.map((data, id) => {
                                        return (
                                            <div key={id}>
                                                <h2 className="mb-[22px] xl:mb-[10px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc1 }}
                                                />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <UnorderedList arrName={data.list2} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />

                                            </div>
                                        )
                                    })


                                }

                                {
                                    rialtesYourTrustData.map((data, id) => {
                                        return (
                                            <div key={id}>
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc4 }}
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
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Boosting CRM Efficiency with Salesforce Development</h2>
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