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
  "headline": "What Are Fragmented Customer Journeys in Salesforce Marketing Cloud?",
  "description": "A fragmented customer journey occurs when interactions across channels, teams, and systems fail to connect into a single, coherent experience.",
  "image": "https://www.rialtes.com/images/blogs/fragmented-customer-journeys.webp",
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
    "@id": "https://www.rialtes.com/insights/blogs/fragmented-customer-journeys-salesforce-marketing-cloud/"
  },
  "datePublished": "2026-01-08",
  "mainEntity": {
    "@type": "FAQPage",
    "name": "Fragmented Customer Journeys in Salesforce FAQs",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are fragmented customer journeys?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They occur when customer interactions across channels and systems are disconnected, leading to inconsistent and irrelevant experiences."
        }
      },
      {
        "@type": "Question",
        "name": "Why does personalized marketing fail at scale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because data is siloed, journeys are channel-driven, and systems lack real-time orchestration."
        }
      },
      {
        "@type": "Question",
        "name": "How does Salesforce Marketing Cloud help fix fragmentation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It enables cross-channel journeys, real-time personalization, and automation — when integrated and implemented correctly."
        }
      },
      {
        "@type": "Question",
        "name": "What is Advantage+ by Rialtes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A full-spectrum consulting and services framework that helps organizations adopt, integrate, and optimize Salesforce Marketing Cloud for scalable personalization."
        }
      },
      {
        "@type": "Question",
        "name": "Does Advantage+ support both B2B and B2C?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Advantage+ is designed for complex B2B journeys and high-volume B2C engagement."
        }
      }
    ]
  }
}

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/fragmented-customer-journeys-salesforce-marketing-cloud";
    const currUrl = useUrl()


    const mainData = [
        "Personalized marketing has been the promise for over a decade. Yet despite better tools, more data, and smarter platforms, customer engagement continues to fall short. Emails go unopened. Push notifications feel irrelevant. Journeys break mid-way. Campaigns launch on time but fail to connect.",
        "The problem isn’t a lack of effort. It’s fragmentation.",
        "According to <a href='https://www.salesforce.com/small-business/what-are-customer-expectations/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Salesforce research</a> , 76 percent of customers expect companies to understand their needs and expectations, yet over half say most marketing messages still feel generic. Gartner adds that more than 60 percent of marketing leaders struggle to activate personalization at scale due to disconnected systems and inconsistent data.",
        "This gap between intent and execution is exactly what fragmented customer journeys create, and why they matter more than most teams realize."
    ]
    const faqData = [
        {
            "question": "What are fragmented customer journeys?",
            "answer": "They occur when customer interactions across channels and systems are disconnected, leading to inconsistent and irrelevant experiences."
        },
        {
            "question": "Why does personalized marketing fail at scale?",
            "answer": "Because data is siloed, journeys are channel-driven, and systems lack real-time orchestration."
        },
        {
            "question": "How does Salesforce Marketing Cloud help fix fragmentation?",
            "answer": "It enables cross-channel journeys, real-time personalization, and automation — when integrated and implemented correctly."
        },
        {
            "question": "Does RISE with SAP support hybrid and multi-cloud models?",
            "answer": "A full-spectrum consulting and services framework that helps organizations adopt, integrate, and optimize Salesforce Marketing Cloud for scalable personalization."
        },
        {
            "question": "Does Advantage+ support both B2B and B2C?",
            "answer": "Yes. Advantage+ is designed for complex B2B journeys and high-volume B2C engagement."
        }
    ]
    const fragmentedData = [
        {
            title: "What Are Fragmented Customer Journeys?",
            desc: [
                "A fragmented customer journey occurs when interactions across channels, teams, and systems fail to connect into a single, coherent experience."
            ],
            descc: "From the customer’s perspective, it looks like this:",
            list: [
                "An email promotes a product that they have already purchased",
                "A service case has no context of recent marketing interactions",
                "Website content doesn’t reflect known preferences",
                "Offers feel random instead of timely"
            ],
            desc2:
                "Behind the scenes, fragmentation is usually driven by data silos, disconnected platforms, and channel-first execution instead of journey-first design.",
            desc3: "Fragmented Journey Snapshot",

            snapshot: {
                channels: ["Email", "Web", "Mobile", "Ads", "Service", "Sales"],
                cards: [
                    {
                        icon: "/images/blog/file_955224.svg",
                        text: "No shared context",
                        alt : "Blue document with gear icon representing workflow automation and document management process optimization",
                        scale: 1.1
                    },
                    {
                        icon: "/images/blog/Group 1104.svg",
                        text: "No real-time data sync",
                        alt : "Blue cloud with prohibition symbol and download icon representing cloud access restrictions and data control",
                        scale: 1.5
                    },
                    {
                        icon: "/images/blog/cloud-computing_4279195.svg",
                        text: "No unified customer view",
                        alt : "Blue network nodes with magnifying glass prohibition symbol representing restricted data analysis and access control",
                        scale: 1.2
                    }
                ]
            }
        }
    ];

    const personalizedMarketing = [
        {
            "title": "Why Personalized Marketing Still Fails at Scale",
            "desc": [
                "Personalization works in pilots. It breaks when volume, channels, and complexity increase. Here’s why.",

            ],
            "list": [
                {
                    "title": "Data Lives in Too Many Places",
                    "desc": "Customer data is spread across CRM, ERP, web analytics, mobile apps, e-commerce platforms, and third-party tools. Without a unified data model, marketers rely on partial views and outdated segments.",
                    "desc2": "Result: personalization based on assumptions, not behavior."
                },
                {
                    "title": "Journeys Are Built Around Channels, Not Customers",
                    "desc": "Email teams optimize email. Mobile teams optimize push. Digital teams manage web content. But the customer doesn’t experience channels — they experience a journey.",
                    "desc2": "When channels don’t talk to each other, journeys break."
                },
                {
                    "title": "Static Segmentation Can’t Keep Up",
                    "desc": "Rule-based segments struggle to adapt to real-time behavior. By the time a campaign fires, the moment has already passed.",
                    "desc2": "Low engagement isn’t a creative problem. It’s a timing problem."
                },
                {
                    "title": "Marketing and Sales Operate in Silos",
                    "desc": "Marketing launches campaigns without visibility into pipeline stages or service issues. Sales enters conversations without knowing what marketing promised.",
                    "desc2": "Customers feel the disconnect immediately."
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
    const fragmentedJourney = [
        {
            "title": "Why Fragmented Journeys Hurt More Than Engagement Metrics",
            "desc": [
                "Fragmentation doesn’t just reduce clicks. It impacts revenue, trust, and long-term growth."
            ],
            "list": [
                "Higher unsubscribe and opt-out rates",
                "Lower conversion across channels",
                "Wasted ad spend on irrelevant messaging",
                "Slower funnel progression",
                "Poor customer lifetime value",

            ],
            "desc2": "McKinsey estimates that companies delivering consistent, connected experiences grow revenue 10–15 percent faster than peers. Fragmentation does the opposite.",
            "desc3": "In competitive markets, customers leave without complaining"
        }
    ]

    const connectedJourney = [
        {
            "title": "What a Connected Journey Actually Looks Like",
            "desc": [
                "A connected journey adapts in real time. Each interaction builds on the last.",

            ],
            "descc": "Example:",
            "list": [
                "A website visit updates customer intent",
                "Email content adapts automatically",
                "Sales sees engagement history in CRM",
                "Service agents view recent campaigns",
                "Offers change based on lifecycle stage",
            ],
            "desc2": "This is not manual coordination. It’s system-driven orchestration.  When implemented, this is where Salesforce Marketing Cloud shines."
        }
    ]
    const advantageplus = [
        {
            "title": "Advantage+: Turning Salesforce Marketing Cloud into a Journey Engine",
            "desc": "Salesforce Marketing Cloud is powerful. But power without structure leads to complexity. We help organizations move from campaign execution to full-scale marketing transformation with our <a href='https://www.rialtes.com/services/lob/salesforce-marketing-cloud-implementation-consulting/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Advantage+ Services</a> using Salesforce Marketing Cloud as the foundation.",
            "desc2": "Advantage+ Is Built Around the Entire Marketing Lifecycle",
            "list": [
                {
                    "title": "Advisory & Strategy Development",
                    "desc": "We align business objectives with Salesforce capabilities. No tool-first decisions. Every journey maps to measurable outcomes."
                },
                {
                    "title": "Implementation & Configuration",
                    "desc": "Rapid, structured deployment tailored to your customer engagement model — B2B or B2C."
                },
                {
                    "title": "Creative & Design Services",
                    "desc": "Responsive email templates, landing pages, and journey assets designed for consistency across channels."
                },
                {
                    "title": "Quality Assurance & Optimization",
                    "desc": "End-to-end testing across devices, channels, and scenarios before launch."
                },
                {
                    "title": "Integration & Data Readiness",
                    "desc": "We connect Marketing Cloud with Sales Cloud, Service Cloud, CRM, ERP, and third-party platforms — eliminating silos."
                },
                {
                    "title": "Post Go-Live Support & Analytics",
                    "desc": "Ongoing optimization, training, and analytics ensure continuous ROI and performance improvement."
                }
            ],
            model: {
                label: "Advantage+ Marketing Transformation Model",
                steps: [
                    "Strategy",
                    "Build",
                    "Create",
                    "Test",
                    "Connect",
                    "Optimize"
                ]
            },

        }
    ]
    const solveFragmentation = [
        {
            "title": "How Advantage+ Solves Fragmentation ",
            "desc": [
                "Here’s what changes when journeys are connected:"
            ],
            "list": [
                "Single customer view across systems",
                "Behavior-driven journeys instead of static campaigns",
                "Real-time triggers and personalization",
                "Unified marketing, sales, and service context",
                "Scalable automation without losing relevance"
            ],
            "desc2": "Personalization stops being fragile and starts being repeatable."
        }

    ]
    const benefits = [
        {
            "title": "Who Benefits Most from Advantage+ Services",
            "list": [
                "B2B organizations with long buying cycles",
                "B2C brands managing multi-channel engagement",
                "Enterprises struggling with low campaign ROI",
                "Teams migrating or optimizing Marketing Cloud",
                "Businesses aiming to operationalize personalization",
            ],
            "desc2": "If personalization feels complex, inconsistent, or hard to scale,  Advantage+ brings structure.",
            "desc3": "When data connects, systems align, and journeys adapt in real time, engagement follows naturally. With the right foundation and execution model, Salesforce Marketing Cloud becomes more than a campaign tool; it becomes the engine for meaningful customer relationships. Rialtes help organizations harness the power of Salesforce Marketing Cloud with our Advantage+ Services. Ready to Accelerate Your Marketing? <a href='https://www.rialtes.com/contact-us/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Let’s Talk!</a>"
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
                title="What Are Fragmented Customer Journeys in Salesforce? | Rialtes"
                description="A fragmented customer journey occurs when interactions across channels, teams, and systems fail to connect into a single, coherent experience."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/fragmented-customer-journeys-salesforce-marketing-cloud"
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
                        src="/images/blog/fragmented-customer-journeys.webp"
                        alt="Red person icons on wooden hexagonal tiles representing organizational network structure and team collaboration hierarchy"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/fragmented-customer-journeys-mobile.webp"
                        alt="Red person icons on wooden hexagonal tiles representing organizational network structure and team collaboration hierarchy"
                        priority
                        height={250}
                        width={375}
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Salesforce Marketing Cloud</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>08 January 2026
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">What Are Fragmented Customer Journeys and Why Do They Matter?</h1>
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

                                {/* Fragmented section */}
                                {
                                    fragmentedData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.descc}</p>
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />

                                            <p className="mt-8 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                            
                                            {data.snapshot && (
                                                <div className="mt-5 ">
                                                    <div className="bg-[#DEDEDE] py-[10px] xl:px-[24px]  md:px-[20px] px-[10px]
  max-[400px]:w-[310px] w-[350px] md:w-[580px] 4xl:w-[680px]  xl:w-[640px] mb-14 overflow-x-auto">
                                                        <div className="flex text-start items-start justify-start text-[14px] max-[400px]:text-[13px] md:text-[18px] 4xl:text-[22px] xl:text-[20px] text-black ">
                                                            {data.snapshot.channels.map((item, idx) => (
                                                                <span key={idx} className="flex items-center">
                                                                    {item}
                                                                    {idx !== data.snapshot.channels.length - 1 && (
                                                                        <span className="md:mx-[14px] mx-[6px] max-[375px]:mx-[4px] text-black">|</span>
                                                                    )}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="w-full max-w-[808px] mt-5">
                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[0px] gap-y-8 items-start">

                                                            {data.snapshot.cards.map((item, idx) => (
                                                                <div key={idx} className="text-left">


                                                                    <div className="h-[64px] flex items-center">
                                                                        <Image
                                                                            src={item.icon}
                                                                            alt={item.alt}
                                                                            width={64}
                                                                            height={64}
                                                                            style={{ transform: `scale(${item.scale || 1})` }}
                                                                            className="object-contain origin-left "
                                                                        />
                                                                    </div>

                                                                    <p className="mt-4 xl:mt-10 font-bold xl:pr-20 md:pr-14 text-[18px] md:text-[20px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] leading-tight">
                                                                        {item.text}
                                                                    </p>

                                                                </div>
                                                            ))}

                                                        </div>
                                                    </div>





                                                </div>
                                            )}


                                        </div>
                                    ))
                                }

                                {/* Personalized Marketing section */}
                                {
                                    personalizedMarketing.map((data, ind) => (
                                        <div className="md:mt-[70px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            {
                                                data.list.map((elem, id) => (
                                                    <div
                                                        key={id}
                                                        className="grid grid-cols-[66px_1fr] md:gap-x-[52px] gap-x-[30px] mt-12 xl:mt-12"
                                                    >
                                                        
                                                        <div className="w-[66px] h-[67px] flex items-center justify-center bg-[#1486E6] text-white font-bold
        4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] xl:mt-4">
                                                            {id + 1}
                                                        </div>


                                                        <h3 className="4xl:text-[24px] flex items-center 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">
                                                            {elem.title}
                                                        </h3>


                                                        <p className="col-start-1 col-span-2 mt-4 xl:mt-[40px]
        4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                            {elem.desc}
                                                        </p>


                                                        <p className="col-start-1 col-span-2 mt-2 xl:mt-5 font-bold
        4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                            {elem.desc2}
                                                        </p>
                                                    </div>
                                                ))
                                            }


                                             <div className="w-full h-full my-5 xl:mt-14 md:mt-10">
                                                <Image
                                                    src="/images/blog/Group 1118.svg"
                                                    alt="Why personalization fails diagram showing progression from data silos to fragmented journeys, delayed insights, low engagement"
                                                    className="w-[340px] md:w-[700px] 4xl:w-[830px] 2xl:w-[780px] xl:w-[750px] h-auto"
                                                    height={0}
                                                    width={0}
                                                    priority
                                                />
                                            </div>


                                        </div>
                                    ))
                                }

                                {/* Fragmented Journey section */}
                                {
                                    fragmentedJourney.map((data, ind) => (
                                        // this blog has extra margin top
                                        <div className="md:mt-[60px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />

                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <p className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/* Connected Journey section */}
                                {
                                    connectedJourney.map((data, ind) => (

                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.descc}</p>

                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />

                                        </div>
                                    ))
                                }

                                {/* Advantage+ section */}
                                {
                                    advantageplus.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <p
                                                className="mt-5 md:mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                            <p
                                                className="mt-5 md:mt-10 4xl:text-[24px] font-bold 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[50px] mt-[40px] gap-[20px] sm:w-[80%] md:w-full 4xl:w-[1100px]">
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
                                            {/* Advantage+ Model */}
                                            <div className="relative mt-[50px] w-full max-w-[1100px]">

                                                
                                                <div className="inline-block bg-[#006FBE] text-white 
    px-6 py-3 font-semibold
    4xl:text-[26px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[16px]">
                                                    {data.model.label}
                                                </div>

                                               
                                                <div className="bg-[#CFEAFF] mt-[-25px] px-6 py-6 pt-12
    flex flex-wrap items-center gap-4
    4xl:text-[22px] 2xl:text-[20px] xl:text-[20px] md:text-[18px] text-[18px]
    font-medium">

                                                    {data.model.steps.map((step, index) => (
                                                        <span key={index} className="flex items-center md:gap-4 gap-2">
                                                            <span className="4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] md:text-[20px] text-[16px]">{step}</span>

                                                            {index !== data.model.steps.length - 1 && (
                                                               <span className="text-[#0092E0] flex items-center">
  <ChevronRight />
</span>

                                                            )}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>




                                        </div>
                                    ))
                                }

                                {/* Solve Fragmentation section */}
                                {
                                    solveFragmentation.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/**Benefits Section */}
                                {
                                    benefits.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <p className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
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
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Fragmented Customer Journey 
</h2>
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