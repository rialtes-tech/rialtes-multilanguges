"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/[locale]/components/useUrl";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import Link from "next/link";

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/how-top-salesforce-partners-help-enterprises-thrive-and-innovate";
    const currUrl = useUrl()
    const schemaData = {
          "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How Top Salesforce Partners Help Enterprises Thrive and Innovate | Rialtes",
  "description": "Top Salesforce partners help enterprises thrive by aligning technology with business growth, accelerating innovation, and ensuring long-term value.",
  "image": "https://www.rialtes.com/images/blog/top-salesforce-partners-help-enterprises-thrive.webp",
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
    "@id": "https://www.rialtes.com/insights/blogs/how-top-salesforce-partners-help-enterprises-thrive-and-innovate/"
  },
  "datePublished": "2025-10-10",
  "mainEntity": {
    "@type": "FAQPage",
    "name": "Top Salesforce Partners and Enterprise Growth FAQs",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who are the top Salesforce partners for enterprises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Top Salesforce partners are Crest or Summit-level consulting firms recognized for proven expertise, successful implementations, and innovation. Rialtes, as a Salesforce Crest Partner, is one of them."
        }
      },
      {
        "@type": "Question",
        "name": "How do Salesforce partners help business growth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Salesforce partners customize CRM solutions, enable AI-driven insights, automate workflows, and provide ongoing optimization, helping enterprises improve efficiency, reduce costs, and unlock new revenue opportunities."
        }
      },
      {
        "@type": "Question",
        "name": "What are enterprise CRM solutions, and why are they important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enterprise CRM solutions connect sales, marketing, service, and data into one unified platform. They help businesses manage customer relationships at scale, improve decision-making, and deliver personalized experiences."
        }
      },
      {
        "@type": "Question",
        "name": "Why should an enterprise choose a Salesforce Crest Partner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Crest Partners are recognized for advanced certifications, high customer satisfaction scores, and proven industry expertise. They deliver complex, large-scale Salesforce solutions with lower risk and faster ROI."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Rialtes considered one of the best Salesforce consulting partners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rialtes combines Salesforce expertise with industry-specific knowledge and a co-innovation approach. As a Crest Partner, Rialtes has delivered enterprise CRM solutions across multiple industries, helping clients thrive and innovate."
        }
      }
    ]
  }
    }
    const salesforcePartnersHelp = [
        "Salesforce has become the foundation for modern enterprise CRM solutions, helping organizations unify data, streamline processes, and deliver personalized customer experiences. But here’s the reality: buying Salesforce licenses alone doesn’t guarantee business success. Enterprises need the right expertise to unlock Salesforce’s full potential.",

        "That’s where we need the Salesforce partners. These consulting and implementation experts don’t just configure CRM tools; they help enterprises reimagine operations, innovate with AI, and scale with confidence. For companies wondering, “Who are the top Salesforce partners for enterprises?” the answer often lies in evaluating which partner can align technology with long-term business goals.",

        "Let’s break down how Salesforce partners deliver impact, what sets the best apart, and why choosing a Crest-level partner like Rialtes can redefine enterprise growth."
    ]

    const partneringtomorrow = [
        "Here’s the bottom line: Salesforce is the world’s #1 CRM, but its true potential is unlocked only with the right partner.  <a href='https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N3A00000FZIFCUA5'  class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Top Salesforce partners</a> help enterprises thrive by aligning technology with business growth, accelerating innovation, and ensuring long-term value.",

        "If you’re asking, “Who are the best Salesforce consulting partners for enterprises?” look for a Partner with industry expertise, proven success, and a vision for the future.",

        "That’s exactly what Rialtes delivers. As a Salesforce Crest Partner, Rialtes empowers enterprises with future-ready CRM solutions, AI-driven insights, and co-innovation at scale.  <a href='https://www.rialtes.com/contact-us/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Partner with Rialtes today</a> and turn Salesforce into the engine of your enterprise growth."
    ]


    const partners = [
        {
            title: "Summit Partners (Platinum)",
            image: "/images/blog/summit partner.webp",
            badge: "SUMMIT PARTNER",
            description:
                "The highest tier, indicating top-level expertise and strategic capabilities for large-scale deployments.",
        },
        {
            title: "Crest Partners (Silver)",
            image: "/images/blog/Crest Partner.webp",
            badge: "CREST PARTNER",
            description:
                "Recognized for proven success and extensive experience in delivering customer value.",
        },
        {
            title: "Ridge Partners (Gold)",
            image: "/images/blog/Ridge partner.webp",
            badge: "RIDGE PARTNER",
            description:
                "Demonstrates commitment to customer success and is ideal for mid-sized businesses seeking trusted support.",
        },
    ];

    const whatQualifies = [
        {
            "title": "Certifications and specializations",
            "desc": "Teams with Salesforce-certified consultants, architects, and developers."
        },
        {
            "title": "Proven track record",
            "desc": "Case studies of successful, large-scale deployments."
        },
        {
            "title": "Industry focus",
            "desc": "Expertise in verticals like healthcare, manufacturing, life sciences, and retail."
        },
        {
            "title": "Innovation",
            "desc": "Adoption of Salesforce AI, Data Cloud, MuleSoft, and Tableau to build future-ready solutions."
        }
    ]


    const businessGrowth = [
        {
            title: "Enterprise CRM Solutions as the Foundation",
            paragraphs: [
                `A Salesforce partner ensures the CRM is not just installed but deeply embedded into the organization’s processes. They tailor Salesforce to fit unique business models with  <a href='https://www.rialtes.com/insights/blogs/salesforce-development-services-to-boost-crm-efficiency/'  class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Salesforce CRM optimization services </a>—whether it’s managing complex sales cycles, supporting omnichannel retail, or enabling patient engagement in healthcare.`,
                `It means better data visibility, stronger customer relationships, and faster decision-making. Enterprises gain a CRM solution that scales instead of a one-size-fits-all system.`,
            ],
        },
        {
            title: "Driving Digital Transformation and Innovation",
            paragraphs: [
                `Modern enterprises don’t just need technology—they need innovation. Salesforce partners drive transformation by:`,
            ],
            list: [
                "Implementing AI-driven insights through Salesforce Einstein and Agentforce.",
                "Automating manual workflows to improve efficiency.",
                "Integrating Salesforce with ERP, HR, and supply chain systems.",
                "Leveraging Data Cloud for real-time, 360-degree customer views.",
            ],
            afterList: `These innovations go beyond cost savings. They help enterprises launch new revenue models, enter new markets, and build long-term competitive advantage.`,
        },
        {
            title: "Scaling with Confidence",
            paragraphs: [
                `Growth brings complexity, more users, more regions, and stricter regulations. The best Salesforce consulting partners ensure  <a href='https://www.rialtes.com/insights/blogs/salesforce-implementation-partner-strategies-reduce-risk-maximize-roi/'  class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>enterprises can scale without risk</a>. They provide:`,
            ],
            list: [
                "Governance frameworks for compliant data usage.",
                "Ongoing managed services and optimizations.",
                "Agile delivery models to adapt to evolving business needs.",
            ],
            afterList: `Instead of fearing disruption, enterprises gain the confidence to scale globally while maintaining consistency and compliance.`,
        },
    ];

    const keyBenefits = [
        {
            "title": "Faster Time-to-Value",
            "desc": "Pre-built accelerators, templates, and best practices speed up implementation."
        },
        {
            "title": "Access to Full Salesforce Ecosystem",
            "desc": "From Sales Cloud to Marketing Cloud, Data Cloud, MuleSoft, and Agentforce."
        },
        {
            "title": "Risk Reduction",
            "desc": "Avoid costly misconfigurations or compliance breaches."
        }
        ,
        {
            "title": "Continuous Innovation",
            "desc": "Partners bring the latest Salesforce updates, AI features, and ecosystem enhancements to clients."
        },
        {
            "title": "Strategic Alignment",
            "desc": "Technology roadmaps aligned with enterprise vision, not just IT requirements."
        }
    ]



    const partnerQualities = [
        {
            title: "Certifications and Crest/Summit Recognition",
            paragraph:
                "Always look for a Salesforce Partner, a recognition given only to partners with proven expertise, consistent delivery, and strong client success stories.",
        },
        {
            title: "Industry Expertise",
            paragraph:
                "A partner understands more than technology; they understand industry-specific challenges. For example:",
            list: [
                {
                    title: "Healthcare : ",
                    description: "Compliant patient engagement platforms.",
                },
                {
                    title: "Manufacturing : ",
                    description: "Smart supply chain and dealer management systems.",
                },
                {
                    title: "Financial services : ",
                    description: "Secure, AI-driven customer management.",
                },
            ],
        },
        {
            title: "Advisory + Technical Capabilities",
            paragraph:
                "Enterprises need a partner who does more than deployment. The best Salesforce consulting partners provide strategy, change management, and adoption support.",
        },
        {
            title: "Culture of Co-Innovation",
            paragraph:
                "Trusted partners collaborate, not dictate. They design solutions with enterprises, ensuring measurable outcomes tied to business KPIs.",
        },
    ];




    const enterpriseCRM = [
        {
            title: "Enterprise CRM Solution",
            description: "tailored for industries like life sciences, healthcare, manufacturing, and automotive.",
        },
        {
            title: "AI and Data Cloud innovations",
            description: "for predictive insights and customer 360.",
        },
        {
            title: "Agentforce and automation",
            description:
                "for scaling enterprise workflows.",
        },
        {
            title: "Integration Expertise",
            description:
                "across ERP, HR, and supply chain systems.",
        },
    ];


    const faqs = [
        {
            "question": "Who are the top Salesforce partners for enterprises?",
            "answer": "leading Salesforce partners are Crest or Summit-level consulting firms recognized for proven expertise, successful implementations, and innovation. Rialtes, as a Salesforce Crest Partner, is one of them."
        },
        {
            "question": "How do Salesforce partners help business growth?",
            "answer": "Salesforce partners customize CRM solutions, enable AI-driven insights, automate workflows, and provide ongoing optimization, helping enterprises improve efficiency, reduce costs, and unlock new revenue opportunities."
        },
        {
            "question": "What are enterprise CRM solutions, and why are they important?",
            "answer": "Enterprise CRM solutions connect sales, marketing, service, and data into one unified platform. They help businesses manage customer relationships at scale, improve decision-making, and deliver personalized experiences."
        },
        {
            "question": "Why should an enterprise choose a Salesforce Crest Partner?",
            "answer": "Crest Partners is recognized for advanced certifications, high customer satisfaction scores, and proven industry expertise. They deliver complex, large-scale Salesforce solutions with lower risk and faster ROI."
        },
        {
            "question": "Why is Rialtes considered one of the best Salesforce consulting partners?",
            "answer": "Rialtes combines Salesforce expertise with industry-specific knowledge and a co-innovation approach. As a Crest Partner, Rialtes has delivered enterprise CRM solutions across multiple industries, helping clients thrive and innovate."
        }
    ]

    return (
        <section className="min-h-screen">
            <Seo
                title="How Top Salesforce Partners Power Enterprise Success | Rialtes"
                description="Top Salesforce partners help enterprises thrive by aligning technology with business growth, accelerating innovation, and ensuring long-term value."
                keywords=""
                canonical={
                    "https://www.rialtes.com/insights/blogs/how-top-salesforce-partners-help-enterprises-thrive-and-innovate/"
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
                        src="/images/blog/top-salesforce-partners-help-enterprises-thrive.webp"
                        alt="banner image"
                        fill
                        priority
                    /> 
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/salesforce-consulting-mobile-banner.webp"
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Salesforce</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>10 October 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">How Top Salesforce Partners Help Enterprises Thrive and Innovate</h1>

                            <div className="xl:mt-[38px] mt-[33px]">
                                {
                                    salesforcePartnersHelp.map((data, ind) => {
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

                            {/* who are the top Salesforce Partners section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Who Are the Top Salesforce Partners for Enterprises?</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    Not all Salesforce partners are created equal. The Salesforce ecosystem recognizes partners based on expertise, customer success, and innovation. For every $1 Salesforce earns, its partner ecosystem earns $6.19, highlighting the value partners provide. Certified consultants configure the platform correctly from the start, ensuring your investment generates measurable returns.
                                </p>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Salesforce has a tiered partner program, with the highest levels offering significant benefits and recognition:</p>

                                <div className="grid md:grid-cols-3 xl:mt-[68px] mt-[30px]">
                                    {
                                        partners.map((data, ind) => {
                                            return (

                                                <div key={ind} className="px-4 py-4">
                                                    <div className=" w-32 h-32 relative mb-4">
                                                        <Image
                                                            src={data.image}
                                                            alt={data.badge}
                                                            layout="fill"
                                                            objectFit="contain"
                                                        />
                                                    </div>
                                                    <h3 className="4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] font-bold md:mt-6 mt-4">{data.title}</h3>
                                                    <p className="md:mt-2 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.description}</p>
                                                </div>


                                            )
                                        })
                                    }
                                </div>



                                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-[48px] xl:mt-[80px] font-bold">What qualifies as a certified Salesforce partner?</h3>

                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full">
                                    {
                                        whatQualifies.map((data, ind) => {
                                            return (
                                                <div key={ind} className={`mt-[48px] ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-md:border-b max-md:pb-5" : ""} ${ind == 3 ? "lg:pl-[32px] border-[#707070] lg:border-l" : ""} ${ind == 0 ? "lg:pr-[40px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-md:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                    <h4 className="4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] font-bold text-[#006FBE] ">{data.title}</h4>
                                                    <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] md:mb-4">{data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-[40px] xl:mt-[80px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">In short, the best Salesforce consulting partners combine technical mastery with deep business understanding, enabling enterprises to <Link href={'/'}  className='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>unlock growth with Salesforce consulting</Link>.</p>


                            </div>


                            {/* Salesforce Partners Business Growth section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    How Do Salesforce Partners Help Business Growth?
                                </h2>

                                {businessGrowth.map((section, index) => {
                                    return (
                                        <div key={index} className="mb-10 ">
                                            <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-5 font-bold">
                                                {section.title}
                                            </h3>

                                            {section.paragraphs?.map((para, idx) => (
                                                <p key={idx} className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"   dangerouslySetInnerHTML={{ __html: para }}/>
                                                    
                                            
                                            ))}

                                            {section.list && (
                                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                                    {section.list.map((item, i) => (
                                                        <li key={i} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{item}</li>
                                                    ))}
                                                </ul>
                                            )}

                                            {section.afterList && (
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-relaxed">{section.afterList}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Key Benefits section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Key Benefits of Working with Certified Salesforce Partners</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> When enterprises partner with the best, they unlock measurable benefits:</p>

                                {
                                    keyBenefits.map((data, ind) => {
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
                                                                md:ml-[220px] xl:ml-[210px] 4xl:ml-[300px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>


                                        )
                                    })
                                }
                                <p className="mt-[34px] xl:mt-[49px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> This answers the common question: “How do Salesforce partners help business growth?”, by providing expertise, innovation, and long-term value.</p>
                            </div>

                            {/* Best Salesforce Consultant Partners section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">What to Look for in the Best Salesforce Consulting Partners</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> Choosing a partner is as important as choosing the platform. Here’s what enterprises should prioritize:</p>

                                {partnerQualities.map((section, index) => {
                                    return (
                                        <div key={index} className="mb-8">
                                            <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-5 font-bold">
                                                {section.title}
                                            </h3>

                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                {section.paragraph}
                                            </p>
                                            {Array.isArray(section.list) && (
                                                <ul className="list-disc pl-[36px] mt-4 space-y-2">
                                                    {section.list.map((item, i) => (
                                                        <li key={i}>
                                                            <h4 className="font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">
                                                                {item.title}
                                                            </h4>
                                                            <p className="mt-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">
                                                                {item.description}
                                                            </p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}


                                        </div>
                                    );
                                })}
                            </div>


                            {/* Crest Partners section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Rialtes – Your Salesforce Crest Partner for Enterprise Success</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> Rialtes is a Salesforce Crest Partner trusted by enterprises worldwide. Recognized as one of the top Salesforce partners, we bring deep expertise in:
                                </p>

                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                    {enterpriseCRM.map((item, index) => (
                                        <li key={index}>
                                            <h3 className="mr-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 font-bold inline ">{item.title}</h3>
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item.description}</p>
                                        </li>
                                    ))}
                                </ul>


                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> What sets Rialtes apart is its dual focus: strategy + execution. With Rialtes, enterprises don’t just implement Salesforce; they thrive and innovate with it.
                                </p>
                            </div>


                            {/* Partnering for tomorrow section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Partnering for Tomorrow: Salesforce Partnerships Power Enterprise Growth</h2>

                                <div className="xl:mt-[30px] mt-[33px]">
                                    {
                                        partneringtomorrow.map((data, ind) => {
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
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs Frequently Asked Questions</h2>
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