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

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Patient Experience Platform Transforming Long-Term Care | MediAIna by Rialtes",
        "description": "A patient experience platform becomes essential, helping healthcare providers deliver continuity, coordination, and personalized care at scale.",
        "image": "https://www.rialtes.com/images/blog/patient-experience-platform-mediAIna-transforming-long-term-care.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/patient-experience-platform-transforming-long-term-care/"
        },
        "datePublished": "2025-10-07",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "Patient Experience Platform in Healthcare FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is a patient experience platform in healthcare?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A patient experience platform is a digital solution that connects clinical, operational, and engagement touchpoints into one seamless journey. It ensures patients receive coordinated care, clear communication, and continuous support from diagnosis through long-term management."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does a patient experience platform improve long-term patient care?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "By integrating chronic care management, digital engagement, and monitoring tools, platforms like MediAIna provide care continuity. This reduces readmissions, strengthens adherence, and empowers patients to actively manage their health."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is digital patient engagement important in chronic care management?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Digital patient engagement helps patients stay connected to providers through reminders, two-way communication, remote monitoring, and access to personalized resources. It turns long-term care into a proactive, patient-driven journey."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does MediAIna support the integrated healthcare journey?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The MediAIna patient journey platform unifies data, communication, and care pathways across providers, payers, MedTech, and life sciences enterprises. It delivers chronic care management solutions, predictive insights, and compliant innovation for better outcomes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What makes MediAIna healthcare different from other platforms?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Unlike point solutions, MediAIna healthcare is designed as a comprehensive ecosystem. Backed by Rialtes’ LifeAI+ consulting suite, it offers scalability, AI-driven intelligence, and compliance—making it ideal for complex, long-term patient care."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do digital tools support the diagnosis-to-care management journey?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Digital tools for long-term patient care simplify transitions by offering personalized care pathways, educational resources, and continuous check-ins. They ensure patients don’t get lost between diagnosis, treatment, and follow-up stages."
                    }
                }
            ]
        }
    }

    const blogMainData = [
        "Providing healthcare has always been about more than just diagnosis. For patients, the real journey begins after they receive a diagnosis, navigating treatment options, managing chronic conditions, and learning how to live with ongoing care needs. Unfortunately, traditional systems often fail to support patients beyond the walls of the clinic. That is why a patient experience platform becomes essential, helping healthcare providers deliver continuity, coordination, and personalized care at scale.",
        "<strong>MediAIna</strong>, Rialtes’ next-generation patient journey platform, is designed to close these gaps. Integrating clinical, operational, and digital touchpoints reimagines the healthcare journey from first diagnosis to long-term management. Let’s break down how platforms like MediAIna create  <span>digital patient journeys beyond the clinic</span> and set new standards in long-term care. "
    ]
    const whyPatientData = [
        {
            "title": "Why the Patient Experience Platform is the Future of Healthcare",
            "desc": [
                "A platform like this is more than a digital record system. It’s a connected ecosystem that brings together patient data, communication channels, monitoring tools, and analytics to create a seamless and human-centered healthcare journey.",
                "Today’s patients expect healthcare to mirror the convenience of other digital experiences, personalized, proactive, and available anytime. Whether it’s chronic care management or post-surgical recovery, platforms like MediAIna ensure every touchpoint is integrated. For healthcare providers and life sciences enterprises, this means fewer setbacks, smarter decisions, and stronger patient engagement. For patients, it translates into confidence that their journey is supported every step of the way."
            ]
        }
    ]
    const faqData = [
        {
            "question": "What is a patient experience platform in healthcare?",
            "answer": "A patient experience platform is a digital solution that connects clinical, operational, and engagement touchpoints into one seamless journey. It ensures patients receive coordinated care, clear communication, and continuous support from diagnosis through long-term management."
        },
        {
            "question": "How does a patient experience platform improve long-term patient care?",
            "answer": "By integrating chronic care management, digital engagement, and monitoring tools, platforms like MediAIna provide care continuity. This reduces readmissions, strengthens adherence, and empowers patients to actively manage their health."
        },
        {
            "question": "Why is digital patient engagement important in chronic care management?",
            "answer": "Digital patient engagement helps patients stay connected to providers through reminders, two-way communication, remote monitoring, and access to personalized resources. It turns long-term care into a proactive, patient-driven journey."
        },
        {
            "question": "How does MediAIna support the integrated healthcare journey?",
            "answer": "The MediAIna patient journey platform unifies data, communication, and care pathways across providers, payers, MedTech, and life sciences enterprises. It delivers chronic care management solutions, predictive insights, and compliant innovation for better outcomes."
        },
        {
            "question": "What makes MediAIna healthcare different from other platforms?",
            "answer": "Unlike point solutions, MediAIna healthcare is designed as a comprehensive ecosystem. Backed by Rialtes’ LifeAI+ consulting suite, it offers scalability, AI-driven intelligence, and compliance—making it ideal for complex, long-term patient care."
        },
        {
            "question": "How do digital tools support the diagnosis-to-care management journey?",
            "answer": "Digital tools for long-term patient care simplify transitions by offering personalized care pathways, educational resources, and continuous check-ins. They ensure patients don’t get lost between diagnosis, treatment, and follow-up stages."
        }
    ]
    const fromDiagnosisSection = [
        {
            "title": "From Diagnosis to Care Management Journey",
            "desc": "The period right after diagnosis is critical. Patients often feel overwhelmed by medical jargon, complex treatment regimens, and the uncertainty of long-term implications. Without strong guidance, many drop off treatment plans or fail to follow care recommendations.",
            "desc2": "This is why the diagnosis-to-care management journey needs a structured, connected approach. A patient experience platform like MediAIna bridges the gap by:",
            "list": [
                "<a href='https://www.rialtes.com/insights/blogs/digital-patient-journeys-ai-healthcare-life-sciences/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Digitizing patient experience in healthcare</a>",
                "Offering ongoing communication and check-ins to maintain adherence.",
                "Enabling patients to access resources and support beyond the clinic."
            ],
            "desc3": "Instead of leaving patients to navigate care alone, digital platforms act as companions, ensuring no step in the journey is missed."
        }
    ]
    const chronicData = [
        {
            "title": "Chronic Care Management Solutions for a Digital-First Era",
            "desc": [
                "Chronic conditions such as diabetes, cardiovascular diseases, and rare genetic disorders are on the rise globally. For healthcare systems, managing these conditions requires scale, coordination, and constant engagement—three areas where manual methods fall short.",
                "Here’s where chronic care management solutions powered by digital technology make a difference. They create structured care pathways that adapt to patient progress, monitor vitals remotely, and send alerts for early intervention.",
                "MediAIna aligns with this need by offering intelligent tools for chronic care. By integrating digital health innovation with compliance-ready processes, healthcare enterprises can deliver personalized, efficient, and cost-effective care for patients who need long-term support."
            ]
        }
    ]
    const medianaRedData = [
        {
            "title": "Unified Patient View",
            "desc": "Consolidates data from multiple sources to provide a 360-degree view of the patient journey."
        },
        {
            "title": "AI-Driven Insights",
            "desc": "Predicts potential risks and opportunities for intervention, enabling proactive care."
        },
        {
            "title": "Scalable & Compliant",
            "desc": "Built with industry standards in mind, supporting regulatory compliance without slowing innovation."
        },
        {
            "title": "Human-Centered Design",
            "desc": "Keeps the patient’s experience at the center, ensuring usability for both patients and providers."
        },
    ]
    const digitalPatientData = [
        {
            "title": "Digital Patient Engagement as the Backbone of Long-Term Care",
            "desc": "When we talk about digital patient engagement, it’s not just about sending reminders for medication or appointments. True engagement involves empowering patients to take ownership of their health, fostering two-way communication, and ensuring care teams are always connected.",
            "desc2": "Examples of digital engagement in action include:",
            "list": [
                "Remote monitoring of chronic conditions.",
                "Personalized health education tailored to patient profiles.",
                "Two - way messaging between patients and providers for quick clarifications.",
                "Virtual follow - ups to reduce unnecessary hospital visits."

            ],
            "desc3": "The result? Higher patient satisfaction, stronger provider-patient relationships, and measurable improvements in adherence and outcomes. MediAIna makes this possible by embedding engagement into the core of every patient journey."
        }
    ]
    const buildingData = [
        {
            "title": "Building the Next Chapter of Patient Experience",
            "desc": [
                "The healthcare industry is at a crossroads. While diagnosis and treatment remain critical, the long-term patient journey is where the real opportunity lies. Patients no longer want fragmented care; they want connected experiences that evolve with them, from first diagnosis to ongoing management.",
                "This is why patient experience platforms like MediAIna are set to define the next era of healthcare. They don’t just digitize processes—they humanize them, making care more accessible, predictive, and continuous.",
                "Behind MediAIna stands <strong>Rialtes</strong>, a consulting leader in digital transformation for the life sciences and healthcare industries. Our vision is simple: to build <a href='https://www.rialtes.com/insights/blogs/connected-care-ecosystem-pharma-medtech/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>integrated ecosystems for pharma & MedTech</a>, where patients, providers, payers, and MedTech organizations work together seamlessly. When you choose MediAIna, you’re choosing Rialtes’ promise of continuous innovation, measurable outcomes, and a future-ready healthcare ecosystem.",
            ]
        }
    ]
    const howMedianaData = [
        {
            "title": "How MediAIna Elevates Long-Term Patient Care",
            "desc": "For long-term care, continuity is everything. Patients with chronic or rare conditions need consistent monitoring, ongoing support, and flexible engagement models. MediAIna brings this vision to life.",
            "listData": [
                {
                    "listTitle": "Benefits for Patients",
                    "list": [
                        "Clear care pathways that reduce confusion.",
                        "24/7 digital support and access to resources.",
                        "Improved adherence to treatment plans through nudges and reminders.",
                        "Greater confidence in managing their own health."
                    ]
                },
                {
                    "listTitle": "Benefits for Healthcare Enterprises",
                    "list": [
                        "Lower readmission rates thanks to predictive monitoring.",
                        "Stronger patient loyalty through personalized digital engagement.",
                        "Better resource allocation as automation handles routine processes.",
                        "Insights-driven strategies to design new care models."
                    ]
                }
            ],
            "desc2": "By focusing on care continuity and coordinated care, MediAIna enables outcomes that go beyond traditional patient support, creating a healthcare system that is truly future-ready.",
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

            <Script
                id="schema-copilots"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">MediAIna</span>{" "}
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
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">How a Patient Experience Platform Transforms Care from Diagnosis to Long-Term Management</h1>
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

                            {/* why patient section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    whyPatientData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                {
                                                    data.desc.map((elem, id) => {
                                                        return (
                                                            <p
                                                                key={id}
                                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
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

                            {/* from diagnosis section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    fromDiagnosisSection.map((data, id) => {
                                        return (
                                            <div key={id}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <UnorderedList arrName={data.list} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* chronic care section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    chronicData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                {
                                                    data.desc.map((elem, id) => {
                                                        return (
                                                            <p
                                                                key={id}
                                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
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

                            {/* digital patient section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    digitalPatientData.map((data, id) => {
                                        return (
                                            <div key={id}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <UnorderedList arrName={data.list} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* mediana redifining section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">MediAIna: Redefining the Integrated Healthcare Journey</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> Unlike traditional point solutions, MediAIna healthcare delivers a unified platform that integrates clinical, operational, and digital experiences. Designed specifically for the life sciences and MedTech ecosystem, it is backed by Rialtes’ LifeAI+ consulting suite to ensure scalability, intelligence, and compliance.</p>

                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Here’s what sets the MediAIna patient journey platform apart:</p>
                                {
                                    medianaRedData.map((data, ind) => {
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
                                <p className="mt-[34px] xl:mt-[49px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">By connecting providers, payers, MedTech, and life sciences organizations, MediAIna ensures that no part of the patient journey is fragmented or overlooked. </p>
                            </div>

                            {/* how mediana section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    howMedianaData.map((data, id) => {
                                        return (
                                            <div key={id}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />

                                                <div className="grid md:grid-cols-2 grid-cols-1 gap-[80px]">
                                                    {
                                                        data.listData.map((elem, id) => {
                                                            return (
                                                                <div key={id}>
                                                                    <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-[48px] font-bold">{elem.listTitle}</h3>
                                                                    <UnorderedList arrName={elem.list} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-4" />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p className="4xl:mt-[40px] mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                            </div>
                                        )
                                    })}
                            </div>

                            {/* building section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    buildingData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                {
                                                    data.desc.map((elem, id) => {
                                                        return (
                                                            <p
                                                                key={id}
                                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
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

                        </div>
                    </div>
                </div>
            </section>

            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Transforms Care with Patient Experience Platform</h2>
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