"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from '@/app/components/blogSocialIcons'
import UnorderedList from "@/app/components/unorderedList";
import Link from "next/link";

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/boost-enterprise-agility-with-sap-consulting-implementation-services";
    const currUrl = useUrl()
    console.log(currUrl);

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Boost Enterprise Agility with Tailored SAP Consulting and Implementation Services | Rialtes",
        "description": "Custom SAP consulting and implementation services enable businesses to go beyond configuration and achieve true operational transformation.",
        "image": "https://www.rialtes.com/images/blogs/sap-consulting-and-implementation.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/boost-enterprise-agility-with-sap-consulting-implementation-services/"
        },
        "datePublished": "2025-11-12",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "Tailored SAP Development and Integration Services FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are custom SAP development services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Custom SAP development services involve designing and building tailored solutions within the SAP ecosystem to address unique enterprise needs. This includes workflow customization, module extensions, and integrations for improved efficiency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is SAP consulting important for large enterprises?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SAP consulting helps enterprises align technology investments with business goals. It ensures optimized implementation, process efficiency, and scalability while reducing risks and costs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do SAP implementation strategies impact ROI?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Effective SAP implementation strategies, like agile rollouts and integration-led models, shorten deployment timelines, reduce rework, and deliver measurable ROI faster."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What’s the difference between standard and custom SAP solutions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Standard SAP solutions offer preconfigured capabilities, while custom solutions are adapted to fit specific workflows, industry needs, and business objectives for greater agility."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can working with top SAP partners benefit my business?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Top SAP partners bring deep domain expertise, proven methodologies, and technology insight to help you achieve enterprise transformation with lower risk and faster returns."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why choose Rialtes for SAP consulting and implementation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Rialtes combines innovation, experience, and strategic vision to deliver SAP solutions that are scalable, industry-focused, and built for sustainable enterprise growth."
                    }
                }
            ]
        }
    }
    const sapDevelopmentIntegration = [
        "Today,  adaptability defines survival; custom SAP development has become a core driver of enterprise agility and growth. Off-the-shelf solutions often meet immediate needs, but fall short when scaling, integrating with legacy systems, or optimizing for unique business models. That’s where custom SAP consulting and implementation services are needed, enabling businesses to go beyond configuration and achieve true operational transformation.",
        "Let’s see how custom SAP development reshapes enterprise operations, supports strategic agility, and drives measurable efficiency across industries."
    ]

    const sapConsulting = [
        "At Rialtes, we’re innovators who believe enterprise technology should evolve as fast as your business does. Our <a href='https://www.rialtes.com/solutions/enterprise-platforms/sap-consulting-implementation-partners/'  class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'> SAP consulting and implementation services</a> are designed to help you reimagine operations, enhance agility, and unlock new growth potential.",

        "We partner with enterprises to build scalable, secure, and intelligent SAP systems—from consulting strategy and implementation to custom development and integration. Whether it’s modernizing your legacy infrastructure or designing future-ready architectures, Rialtes ensures your transformation is seamless, value-driven, and built for tomorrow. With a global team of certified SAP experts, proven methodologies, and a passion for innovation, Rialtes helps you go beyond technology, toward real business impact."
    ]




    const customSAP = [
        {
            "title": "Eliminate data silos ",
            "desc": "by connecting SAP with external applications, CRMs, and industry-specific systems."
        },
        {
            "title": "Accelerate decision-making ",
            "desc": "through customized dashboards, KPIs, and analytics."
        },
        {
            "title": "Enhance user experience ",
            "desc": "by aligning workflows with real-world roles and responsibilities."
        }
        ,
        {
            "title": "Reduce manual intervention ",
            "desc": "through automation tailored to internal processes."
        },
    ]


    const integrationBackbone = [
        "Sync SAP with CRMs like Salesforce for unified customer insights.",
        "Connect SAP with third-party logistics platforms for automated inventory updates.",
        "Integrate SAP with HR and payroll systems for consistent data flow.",
        "Enable real-time analytics by linking SAP data with BI platforms."
    ];


    const tailoringSAP = [
        {
            title: "Manufacturing",
            description: ": Integrate IoT data with SAP S/4HANA for predictive maintenance, production monitoring, and real-time cost optimization.",
        },
        {
            title: "Healthcare",
            description: " : Build secure patient record interfaces and automate compliance workflows through tailored SAP extensions.",
        },
        {
            title: "Retail",
            description: " : Customize pricing, promotions, and omnichannel order management with SAP Commerce Cloud integration.",
        },
        {
            title: "Finance",
            description: " : Automate reconciliations, auditing, and reporting using bespoke SAP Fiori apps.",
        },
    ];

    const topSAPPartners = [
        {
            title: "Technical expertise ",
            description: "across S/4HANA, BTP, and Fiori.",
        },
        {
            title: "Cross-industry experience ",
            description: "for scalable solution design.",
        },
        {
            title: "Proven frameworks ",
            description: "for project delivery, risk mitigation, and change management.",
        },
        {
            title: "Innovation mindset ",
            description: "for continuous improvement.",
        },
    ];

    const realBusiness = [
        {
            title: "20–30% improvement ",
            description: "in operational efficiency through workflow automation."
        },
        {
            title: "Up to 40% cost reduction ",
            description: "by removing redundant legacy integrations."
        },
        {
            title: "Increased ROI ",
            description: "through better process visibility and data-driven decisions."
        }
    ]

    const roleofSAP = [
        {
            "title": "Business Process Mapping",
            "desc": "Identifying inefficiencies, redundancies, and opportunities for automation."
        },
        {
            "title": "Technology Assessment",
            "desc": "Reviewing current SAP architecture and compatibility with custom extensions."
        },
        {
            "title": "Scalable Roadmapping",
            "desc": "Planning phased enhancements to minimize disruption."
        },
        {
            "title": "User-Centric Design",
            "desc": "Ensuring configurations reflect real workflows across departments."
        }

    ]

    const blueprintBuild = [
        {
            "title": "Iterative Development",
            "desc": "Instead of massive, long-term rollouts, enterprises are embracing agile sprints, testing features early, gathering feedback, and iterating continuously."
        },
        {
            "title": "Integration First",
            "desc": "A modern SAP environment must coexist with CRM, HR, and analytics systems. Integration ensures real-time data flow and eliminates blind spots."
        },
        {
            "title": "Change Enablement",
            "desc": "People make or break implementation success. Ongoing training, workshops, and role-based dashboards improve adoption and satisfaction."
        },

    ]

    const modernEnterprise = [
        "Enterprises today face a common challenge: balancing complexity with speed. While SAP systems offer powerful, standardized tools, no two organizations operate exactly alike. Business models evolve, customer expectations shift, and regulatory frameworks differ by geography and sector.",
        "Custom SAP development ensures your enterprise platform aligns with your exact business logic, rather than forcing your teams to adapt to rigid workflows. With tailored configurations, extensions, and integrations, organizations can:"
    ]


    const faqs = [
        {
            "question": "What are custom SAP development services?",
            "answer": "Custom SAP development services involve designing and building tailored solutions within the SAP ecosystem to address unique enterprise needs. This includes workflow customization, module extensions, and integrations for improved efficiency."
        },
        {
            "question": "Why is SAP consulting important for large enterprises?",
            "answer": "SAP consulting helps enterprises align technology investments with business goals. It ensures optimized implementation, process efficiency, and scalability while reducing risks and costs."
        },
        {
            "question": "How do SAP implementation strategies impact ROI?",
            "answer": "Effective SAP implementation strategies, like agile rollouts and integration-led models, shorten deployment timelines, reduce rework, and deliver measurable ROI faster."
        },
        {
            "question": "What’s the difference between standard and custom SAP solutions?",
            "answer": "Standard SAP solutions offer preconfigured capabilities, while custom solutions are adapted to fit specific workflows, industry needs, and business objectives for greater agility."
        },
        {
            "question": "How can working with top SAP partners benefit my business?",
            "answer": "Top SAP partners bring deep domain expertise, proven methodologies, and technology insight to help you achieve enterprise transformation with lower risk and faster returns."
        },
        {
            "question": "Why choose Rialtes for SAP consulting and implementation?",
            "answer": "Rialtes combines innovation, experience, and strategic vision to deliver SAP solutions that are scalable, industry-focused, and built for sustainable enterprise growth."
        }
    ]

    return (
        <section className="min-h-screen">
            <Seo
                title="How SAP Consulting and Implementation Drive Agility | Rialtes"
                description="Our SAP consulting and implementation services are designed to help you reimagine operations, enhance agility, and unlock new growth potential."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/boost-enterprise-agility-with-sap-consulting-implementation-services/"
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
                        src="/images/blog/digital-network-touch-data-connection-visualization.webp"
                        alt="banner image"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/digital-network-touch-data-connection-visualization-mobile.webp"
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Integration</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>12 November 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">Boost Enterprise Agility with Tailored SAP Consulting and Implementation Services</h1>
                            

                            <div className="xl:mt-[38px] mt-[33px]">
                                {
                                    sapDevelopmentIntegration.map((data, ind) => {
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



                            {/* Custom SAP Development Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Why Custom SAP Development Matters for Modern Enterprises</h2>
                                <div className="xl:mt-[38px] mt-[33px]">
                                    {
                                        modernEnterprise.map((data, ind) => {
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
                                {
                                    customSAP.map((data, ind) => {
                                        return (
                                            <div
                                                className="md:flex mt-24 md:mt-10 py-[34px] 2xl:py-[46px] xl:py-[40px] px-[26px] 
                                                           md:pr-[44px] 4xl:pr-[80px] 2xl:pr-[60px] xl:pr-[40px] border border-[#707070] relative 
                                                           md:ml-[90px] sm:w-[80%] md:w-[78%] lg:w-[80%] xl:w-[86%] 4xl:w-[86%] 2xl:w-[80%] "
                                                key={ind}>
                                                <h3
                                                    className="md:absolute md:flex items-center justify-start
                                                                max-md:mt-[-80px] sm:mt-[-70px] md:mt-0
                                                                md:top-1/2 md:-translate-y-1/2 md:left-[-80px]
                                                                bg-[#006FBE] text-white font-semibold
                                                                4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]
                                                                px-[30px] py-[22px] leading-tight
                                                                4xl:w-[340px] 2xl:w-[320px] xl:w-[300px] md:w-[300px] w-fit 4xl:h-[100px] 2xl:h-[100px] xl:h-[90px]">
                                                    {data.title}
                                                </h3>

                                                <div
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]
                                                                font-medium my-auto max-md:mt-8
                                                                md:ml-[220px] xl:ml-[260px] 4xl:ml-[310px] 2xl:ml-[300px]  "
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>


                                        )
                                    })
                                }
                                <p className="mt-[34px] xl:mt-[49px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> According to IDC, enterprises that invest in custom SAP enhancements report up to 35% faster process execution and 20% higher user adoption rates compared to those using standard SAP modules.</p>
                            </div>

                            {/*Role of SAP Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    The Role of SAP Consulting Strategy for Enterprises
                                </h2>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Before diving into custom development, a clear <a href='/'  className='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'> SAP consulting strategy for enterprises</a> is essential. This strategy defines not just what to build, but why it’s being built, and how it ties to business outcomes.</p>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">An effective consulting approach usually involves:</p>

                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full">
                                    {
                                        roleofSAP.map((data, ind) => {
                                            return (
                                                <div key={ind} className={`mt-[48px] ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-md:border-b max-md:pb-5" : ""} ${ind == 3 ? "lg:pl-[32px] border-[#707070] lg:border-l" : ""} ${ind == 0 ? "lg:pr-[20px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-md:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                    <h3 className="4xl:text-[22px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold  ">{data.title}</h3   >
                                                    <p className="md:mt-4 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] md:mb-4">{data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">When done right, consulting becomes a partnership, not a service. It aligns technology capabilities with enterprise vision, ensuring every enhancement contributes to measurable ROI.</p>

                            </div>

                            {/**Blueprint to Build Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    From Blueprint to Build: SAP Implementation Strategies that Work
                                </h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Many SAP initiatives fail not because the technology lacks capability, but because execution falters. Leading <a href='https://www.rialtes.com/insights/blogs/sap-implementation-strategies-for-2026-success/'  className='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'> SAP implementation strategies</a> focus on three pillars:</p>
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] 4xl:w-[1200px] sm:w-[80%] md:w-full">
                                    {
                                        blueprintBuild.map((elem, id) => {
                                            return (
                                                <div className="4xl:p-[30px] p-[22px] border border-[#707070]" key={id}>
                                                    <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070]">{elem.title}</h3>
                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Data from Gartner shows that organizations using iterative, integration-led SAP implementation models realize projects 30% faster and reduce post-launch issues by 40%.</p>
                            </div>




                            {/* Tailoring SAP Development Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Tailoring SAP Development for Industry-Specific Needs</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> SAP development becomes truly powerful when it’s contextualized for your industry. Whether you’re in manufacturing, healthcare, or retail, custom SAP solutions bridge the gap between generic capabilities and domain-specific requirements.
                                </p>

                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                    {tailoringSAP.map((item, index) => (
                                        <li key={index}>
                                            <h3 className="mr-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 font-bold inline ">{item.title}</h3>
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item.description}</p>
                                        </li>
                                    ))}
                                </ul>



                            </div>

                            {/**Integration the backbone section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Integration: The Backbone of Enterprise Agility</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> Custom development means little if your SAP environment isn’t well-integrated. Many organizations struggle with disconnected systems that duplicate data and slow down decision-making.
                                </p>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> Through custom SAP integration services, enterprises can:
                                </p>

                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                    {integrationBackbone.map((item, index) => (
                                        <li key={index}>
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item}</p>
                                        </li>
                                    ))}
                                </ul>


                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">McKinsey’s research found that companies with tightly integrated ERP ecosystems experience 50% higher cross-departmental efficiency and 2x faster strategic decision-making. </p>
                            </div>

                            {/**Top SAP Partners Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Value of Working with Top SAP Partners</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> Here’s where going for the <a href='https://www.rialtes.com/insights/blogs/why-enterprises-choose-sap-consulting-partners/'  className='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'> top SAP partners</a> changes everything. The right partner doesn’t just implement; they co-create. They understand your business goals; design tailored solutions and stay with you through the entire lifecycle, from consulting to deployment to optimization.
                                </p>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    A leading SAP partner brings:</p>

                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                    {topSAPPartners.map((item, index) => (
                                        <li key={index}>
                                            <h3 className="mr-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 font-bold inline ">{item.title}</h3>
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item.description}</p>
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> In short, they ensure that your SAP environment remains adaptive, resilient, and aligned with growth goals.

                                </p>


                            </div>

                            {/**Real Business Outcomes Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Real Business Outcomes of Tailored SAP Development</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> When executed strategically, custom SAP development directly translates to tangible results. Enterprises report:
                                </p>


                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                    {realBusiness.map((item, index) => (
                                        <li key={index}>
                                            <h3 className="mr-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 font-bold inline ">{item.title}</h3>
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item.description}</p>
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> But the real value goes beyond metrics; it’s about transforming how your business operates, how teams collaborate, and how decisions are made at scale.

                                </p>


                            </div>


                            {/* Partner in SAP Consulting & Implementation section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Rialtes: Your Partner in SAP Consulting and Implementation</h2>

                                <div className="xl:mt-[30px] mt-[33px]">
                                    {
                                        sapConsulting.map((data, ind) => {
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
                </div>
            </section>
            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Tailored SAP Development and Integration Services to Boost Agility</h2>
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