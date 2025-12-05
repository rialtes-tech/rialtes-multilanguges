"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/[locale]/components/useUrl";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import UnorderedList from "@/app/[locale]/components/unorderedList";
import React from "react";

const mainData = [
    "Every clinical trial begins with optimism. Researchers design protocols with precision, investigators prepare sites, and patients sign up with real hope for better outcomes. But somewhere along the journey, many participants quietly step away. The industry rarely talks about it openly, yet dropout rates can reach up to 30% in Phase III trials, costing millions and delaying life-saving therapies.",
    "The fact behind is simple: patients don’t leave because they don’t care. They leave because staying engaged becomes too demanding, too isolating, or too confusing. If your research team is still wondering why patients drop out of clinical trials, the answer almost always traces back to gaps in experience, communication, or support.",
    "Introduction of digital innovation is rewriting that story. It gives patients clarity, confidence, personalization, and agency, qualities that traditional trial workflows rarely nurture. Once you improve the experience, retention follows."
]
const realData = [
    {
        "title": "The Real Reasons Behind Patient Dropouts",
        "desc": "Let’s break down the most common drivers:",
        "data": [
            {
                "title": "Complicated protocols without clear explanations",
                "desc": "When participants don’t fully understand what to expect, anxiety rises. A trial that’s confusing at the start becomes overwhelming later."
            },
            {
                "title": "Travel and scheduling burden",
                "desc": "Frequent on-site visits are hard for people balancing jobs, family, long distances, or limited mobility. Convenience matters more than most teams realize."
            },
            {
                "title": "Limited support when side effects appear",
                "desc": "If someone experiences discomfort at home without immediate guidance, withdrawing feels like the safer path."
            },
            {
                "title": "Emotional distance",
                "desc": "Patients have emotions, and they want to feel like people, not anonymous data sources. Without empathy and consistent engagement, motivation fades."
            },
            {
                "title": "Administrative overload",
                "desc": "Paper diaries, independent portals, and scattered reminders create obstacles that can be frustrating for patients. To address the significant challenge of reducing trial dropouts through digital engagement, we need to simplify the process for patients. This means removing barriers, increasing the relevance of information, and ensuring that communication is continuous. By implementing this combination, we can make a meaningful difference."
            }
        ]
    }
]
const digitalData = [
    {
        "title": "How Digital Engagement Improves Retention — The Approaches That Work",
        "desc": "Today’s innovation isn’t about replacing clinical expertise. It’s about amplifying it with technology that supports real human behavior.",
        "list": [
            {
                "title": "Personalized guidance throughout the entire journey",
                "desc": "Participants should always know what’s coming next — not in a packet of paperwork on day one, but through timely digital touchpoints that evolve with the trial."
            },
            {
                "title": "One conversational channel for clinical communication",
                "desc": "Patients should never have to wonder who to call. A single secure chat space for reporting symptoms, asking questions, and receiving feedback brings a sense of safety."
            },
            {
                "title": "Hybrid and remote participation to reduce the burden",
                "desc": "Telehealth, ePROs, wearable monitoring, and home sample collection minimize travel and disruption. When participation fits into daily life, commitment improves."
            },
            {
                "title": "Motivation through progress visibility",
                "desc": "Engagement isn’t only logistical; it’s emotional. Seeing milestones completed, contributions measured, and study value reflected in real time reinforces purpose."
            },
            {
                "title": "Predictive AI to identify and support at-risk participants early",
                "desc": "If a patient slows down reporting or stops engaging, digital systems can trigger human intervention before withdrawal happens."
            }
        ],
        "desc2": "These aren’t theoretical advantages. They form the foundation of the most effective strategies for improving trial retention across therapeutic areas and geographic populations."
    }
]
const retentionData = [
    {
        "title": "Retention Is Becoming the New Operational Priority",
        "desc": "Clinical trials used to focus primarily on <a href='https://www.rialtes.com/insights/blogs/ai-in-clinical-trials-rare-disease-enrolment/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>patient enrollment</a>. Today, high-performing studies prioritize retention just as strongly — because a full cohort delivers:",
        "list": [
            "Shorter research timelines",
            "Reduced cost of protocol amendments",
            "Higher statistical power ",
            "More realistic real-world insights ",
            "Faster regulatory success"
        ],
        "desc2": "This is why more sponsors and CROs are adopting patient adherence tools and trial engagement platform models. When technology supports patients continuously rather than sporadically, retention becomes scalable."
    }
]
const howMediainaData = [
    {
        "title": "How MediAIna Prevents Dropouts and Redefines Patient Engagement",
        "desc": [
            "MediAIna is Rialtes’ next-generation digital platform built to <a href='https://www.rialtes.com/insights/blogs/how-digital-innovation-transforms-clinical-trial-management/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>transform the clinical trial patient journey<a/> from enrollment to final reporting. Instead of fragmented systems for reminders, communication, reporting, and monitoring, MediAIna unifies every touchpoint across care teams, trial teams, and participants.",
            "With capabilities for:"
        ],
        "list": [
            {
                "img": "/images/blog/user-profile-download-icon.svg",
                "alt": "Outlined icon of a user profile above a laptop with a download arrow.",
                "desc": "AI-based patient enrollment solutions"
            },
            {
                "img": "/images/blog/location-tracking-map-monitoring-icon.svg",
                "alt": "Outlined icon of a computer screen displaying a map pin, route line, and radar for location tracking.",
                "desc": "Remote monitoring and digital symptom tracking"
            },
            {
                "img": "/images/blog/notification-bell-task-reminder-icon.svg",
                "alt": "Outlined icon of a notification bell with a task or reminder checklist.",
                "desc": "Automated reminders based on individual schedules"
            },
            {
                "img": "/images/blog/global-language-translation-icon.svg",
                "alt": "Outlined icon of a globe with speech bubbles showing language translation symbols.",
                "desc": "Multilingual clinical trial communication"
            },
            {
                "img": "/images/blog/customer-feedback-performance-rating-icon.svg",
                "alt": "Outlined icon showing analytics with a rising chart, star ratings, and a thumbs-up for feedback or performance review.",
                "desc": "Gamified progress visualization and motivational feedback"
            },
            {
                "img": "/images/blog/error-warning-troubleshooting-icon.svg",
                "alt": "Outlined icon showing a warning triangle with an error symbol indicating an issue or alert.",
                "desc": "Predictive dropout risk alerts"
            },
            {
                "img": "/images/blog/user-network-connection-icon.svg",
                "alt": "Outlined icon of a user surrounded by connected network nodes.",
                "desc": "Patient-centric experience design, not protocol-centric workflows"
            },
        ],
        "desc2": [
            "MediAIna supports <span>reimagining patient journeys in clinical trials</span> with one clear goal: to make participation easier, safer, and more meaningful.",
            "Trials using MediAIna see fewer barriers, less frustration, and more sustained involvement, not because patients are obligated, but because they feel supported, informed, connected, and valued. When the industry shifts from compliance to experience, retention stops being a challenge and becomes a natural outcome. Rialtes has been modernizing clinical trial management with MediAIna. If you’re ready, let’s talk about what MediAIna can unlock for you."
        ]
    }
]
const faqData = [
    {
        "question": "Why do patients drop out of clinical trials?",
        "answer": "Most dropouts occur due to unclear expectations, travel burden, limited support during side effects, emotional fatigue, or overwhelming administrative tasks."
    },
    {
        "question": "How does digital engagement reduce clinical trial dropouts?",
        "answer": "Digital tools offer real-time guidance, remote participation, symptom support, progress visibility, and proactive communication, making trials easier and more motivating for patients."
    },
    {
        "question": "What digital tools help improve patient retention in trials?",
        "answer": "Platforms for reminders, telehealth, ePROs, wearable monitoring, real-time chat, and progress dashboards significantly boost adherence and retention."
    },
    {
        "question": "Can technology really prevent clinical trial dropout?",
        "answer": "Yes. Trials adopting digital engagement strategies report better adherence, fewer missed visits, and higher dataset completeness compared to traditional workflows."
    },
    {
        "question": "What is the best strategy for improving trial retention?",
        "answer": "A unified platform that combines communication, symptom reporting, reminders, and guidance, so participation becomes simple and predictable."
    },
    {
        "question": "How does MediAIna support patient retention in clinical trials?",
        "answer": "MediAIna provides a fully connected digital engagement ecosystem that supports patients throughout the trial journey, reducing burden and strengthening motivation to stay involved."
    }
]

const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Why Clinical Trial Dropouts Happen — And How Digital Engagement Prevents Them | Rialtes",
    "description": "If your research team is still wondering why patients drop out of clinical trials, the answer almost always traces back to gaps in experience, communication, or support.",
    "image": "https://www.rialtes.com/images/blog/patient-consultation-genomics.webp",
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
        "@id": "https://www.rialtes.com/insights/blogs/why-patient-drop-out-clinical-trials-and-how-to-prevent-it/"
    },
    "datePublished": "2025-12-03",
    "keywords": "patient drop out clinical trials, clinical trial retention, MediAIna",
    "mainEntity": {
        "@type": "FAQPage",
        "name": "Clinical Trial Dropouts FAQs",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why do patients drop out of clinical trials?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most dropouts occur due to unclear expectations, travel burden, limited support during side effects, emotional fatigue, or overwhelming administrative tasks."
                }
            },
            {
                "@type": "Question",
                "name": "How does digital engagement reduce clinical trial dropouts?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Digital tools offer real-time guidance, remote participation, symptom support, progress visibility, and proactive communication, making trials easier and more motivating for patients."
                }
            },
            {
                "@type": "Question",
                "name": "What digital tools help improve patient retention in trials?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Platforms for reminders, telehealth, ePROs, wearable monitoring, real-time chat, and progress dashboards significantly boost adherence and retention."
                }
            },
            {
                "@type": "Question",
                "name": "Can technology really prevent clinical trial dropout?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Trials adopting digital engagement strategies report better adherence, fewer missed visits, and higher dataset completeness compared to traditional workflows."
                }
            },
            {
                "@type": "Question",
                "name": "What is the best strategy for improving trial retention?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A unified platform that combines communication, symptom reporting, reminders, and guidance, so participation becomes simple and predictable."
                }
            },
            {
                "@type": "Question",
                "name": "How does MediAIna support patient retention in clinical trials?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MediAIna provides a fully connected digital engagement ecosystem that supports patients throughout the trial journey, reducing burden and strengthening motivation to stay involved."
                }
            }
        ]
    }
}

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/why-patient-drop-out-clinical-trials-and-how-to-prevent-it";
    const currUrl = useUrl()

    return (
        <section className="min-h-screen">
            <Seo
                title="How Digital Care Reduces Patient Drop Out in Clinical Trials | Rialtes"
                description=" If your research team is still wondering why patients drop out of clinical trials, the reason often lies in gaps in experience, communication, or support."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/why-patient-drop-out-clinical-trials-and-how-to-prevent-it/"
                }
            />

            <Script
                id="schema-provenWays"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/patient-consultation-genomics.webp"
                        alt="Nurse showing medical information to a patient with a headscarf beside a digital DNA graphic."
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/patient-consultation-genomics-mobile.webp"
                        alt="Nurse showing medical information to a patient with a headscarf beside a digital DNA graphic."
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">MediAina </span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>03 December 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">Why Clinical Trial Dropouts Happen — And How Digital Engagement Prevents Them</h1>

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


                            {/* real reasons section */}
                            {
                                realData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        {data.desc && (
                                            <p
                                                className="mb-10 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                        )}
                                        {
                                            data.data.map((elem, id) => (
                                                <React.Fragment key={id}>
                                                    <h3 className="mt-10 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[16px] font-bold 4xl:w-[90%]">
                                                        {elem.title}
                                                    </h3>
                                                    <p
                                                        className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                    />
                                                </React.Fragment>
                                            ))
                                        }

                                    </div>
                                ))
                            }

                            {/* digital section */}
                            {
                                digitalData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        {data.desc && (
                                            <p
                                                className="mb-10 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                        )}

                                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] 4xl:w-[1220px] sm:w-[80%] md:w-full">
                                            {
                                                data.list.map((elem, id) => {
                                                    return (
                                                        <div className="4xl:p-[46px] p-[32px] border border-[#707070]" key={id}>
                                                            <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070]">{elem.title}</h3>
                                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: elem.desc }} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                        <p
                                            className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                    </div>
                                ))
                            }

                            {/* retention section */}
                            {
                                retentionData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        {data.desc && (
                                            <p
                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                        )}
                                        <UnorderedList arrName={data.list} ulClassName="pl-[30px] lg:pl-[40px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                        <p
                                            className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                    </div>
                                ))
                            }

                            {/* how meidaina section */}
                            {
                                howMediainaData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:mt-[80px] mt-[40px] gap-[40px] 4xl:w-[1200px] md:w-full">
                                            {
                                                data.list.map((elem, id) => (
                                                    <div key={id}>
                                                        <Image
                                                            src={elem.img}
                                                            alt={elem.alt}
                                                            width={0}
                                                            height={0}
                                                            className="w-[100px] h-[100px]"
                                                            priority
                                                        />
                                                        <p
                                                            className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold"
                                                            dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                        />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <UnorderedList arrName={data.desc2} ulClassName="space-y-1 lg:mt-[80px] mt-[40px] space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Leverage Data and AI to enhance Modern HR with SAP SuccessFactors</h2>
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