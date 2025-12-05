"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from '@/app/components/blogSocialIcons'
import UnorderedList from "@/app/components/unorderedList";
import React from "react";

const mainData = [
    "Clinical trials are supposed to measure the impact of medicine, yet for many participants, the experience feels more like a marathon of logistics. There are multiple portals, disconnected care teams, repetitive forms, unclear next steps, and little visibility into progress, which makes participation feel like work instead of care.",
    "What occurs within the trial design often differs significantly from what patients experience in reality. While clinical teams work tirelessly to manage highly coordinated workflows, patients often perceive these interactions as disconnected and scattered. This disconnect can lead to issues such as dropouts, missed reports, missed visits, and incomplete datasets, not because participants lose interest, but because the patient journey fails to prioritize their needs.",
    "Digital innovation is transforming the healthcare industry by creating intelligent ecosystems that integrate various touchpoints into seamless experiences. When data systems, teams, devices, channels, and engagement tools collaborate effectively, clinical trials become faster and focused on the needs of patients."
]
const fragmentationData = [
    {
        "title": "Why Fragmentation Is Still the Biggest Barrier to Trial Success",
        "desc": "Even well-designed studies struggle when the patient journey lacks continuity. Most challenges stem from the same set of disconnects:",
        "list": [
            {
                "title": "Disjointed care teams and communication",
                "desc": "Patients may interact with sponsors, sites, CROs, investigators, telehealth clinicians, labs, and support groups, but rarely through a single unified channel."
            },
            {
                "title": "Stand-alone digital tools that don’t talk to each other",
                "desc": "Wearables, ePRO apps, EHRs, telehealth platforms, and recruitment systems often operate in isolation, making the experience complicated and inconsistent."
            },
            {
                "title": "Lack of visibility into the journey",
                "desc": "Participants usually don’t see their progress, milestones, or the bigger picture, which leads to emotional distance."
            },
            {
                "title": "Poor interoperability across the ecosystem",
                "desc": "Even when data is collected digitally, the absence of interoperability slows decision-making, eligibility checks, safety assessments, and follow-up."
            }
        ],
        "desc2": "This creates confusion, friction, delay, and ultimately disengagement. The reason why building intelligent healthcare ecosystems in trials has become a core operational priority for sponsors and CROs."
    }
]
const intelligentData = [
    {
        "title": "What an Intelligent Trial Ecosystem Should Look Like",
        "desc": "This shift requires a fundamental change in how clinical research systems interact. Instead of isolated operations, the ecosystem aligns around a simple principle:",
        "subTitle": "Everything the clinical team must coordinate, the patient should experience seamlessly.",
        "desc2": "An intelligent trial ecosystem is built on three essential pillars:",
        "list": [
            {
                "title": "Connected Digital Trial Management",
                "desc": "All clinical, operational, and patient-facing systems function as one. Scheduling, reminders, telehealth, ePRO reporting, recruitment, monitoring, and consent flow within the same digital environment."
            },
            {
                "title": "Patient Journey Orchestration",
                "desc": "Engagement adapts to each participant — their condition, geography, lifestyle, treatment stage, and progress. It’s not just communication; it’s orchestration of every interaction based on context."
            },
            {
                "title": "Interoperable Health Solutions",
                "desc": "Wearables, devices, labs, EHRs, and trial systems exchange data without forcing participants to repeat tasks or navigate multiple apps."
            }
        ],
        "desc3": "When these three elements come together, patients don’t feel like they’re navigating the trial; the trial guides them."
    }
]
const whatIntelligentData = [
    {
        "title": "What an Intelligent Trial Ecosystem Should Look Like",
        "desc": "This shift requires a fundamental change in how clinical research systems interact. Instead of isolated operations, the ecosystem aligns around a simple principle:",
        "subTitle": "Everything the clinical team must coordinate, the patient should experience seamlessly.",
        "desc2": "An intelligent trial ecosystem is built on three essential pillars:",
        "list": [
            {
                "title": "Connected Digital Trial Management",
                "desc": "All clinical, operational, and patient-facing systems function as one. Scheduling, reminders, telehealth, ePRO reporting, recruitment, monitoring, and consent flow within the same digital environment."
            },
            {
                "title": "Patient Journey Orchestration",
                "desc": "Engagement adapts to each participant — their condition, geography, lifestyle, treatment stage, and progress. It’s not just communication; it’s orchestration of every interaction based on context."
            },
            {
                "title": "Interoperable Health Solutions",
                "desc": "Wearables, devices, labs, EHRs, and trial systems exchange data without forcing participants to repeat tasks or navigate multiple apps"
            }
        ],
        "desc3": "When these three elements come together, patients don’t feel like they’re navigating the trial; the trial guides them",
    }
]
const howIntelligentData = [
    {
        "title": "How Intelligent Ecosystems Transform Clinical Trial Patient Journeys",
        "list": [
            {
                "title": "Less burden, more clarity",
                "desc": "Clear timelines, simplified reporting, and a supportive digital pathway reduce cognitive and emotional load."
            },
            {
                "title": "Continuous support rather than reactive troubleshooting",
                "desc": "Instead of waiting for an issue to escalate, predictive alerts flag participants who may be struggling before dropouts occur, reinforcing and preventing clinical trial dropouts with digital engagement."
            },
            {
                "title": "Global participation without geographic barriers",
                "desc": "Remote onboarding and decentralized operations make it easier to expand reach and diversity in cohorts, the blueprint behind AI accelerating rare disease enrolment in earlier MediAIna discussions."
            },
            {
                "title": "A human-centered experience",
                "desc": "Progress dashboards, two-way messaging, multilingual support, and personalization help patients feel valued and in control."
            }
        ],
        "desc": "This is the foundation of digital patient journey orchestration, and it’s rewriting how trials operate."
    }
]
const whyIntelligentData = [
    {
        "title": "Why Intelligent Ecosystems Will Define the Future of Trial Management",
        "desc": "The industry is moving toward a landscape where patient-first orchestration determines trial success. Some of the strongest indicators of this shift include:",
        "list": [
            "Integrated platforms replacing stand-alone apps",
            "Real-world data infusion for more dynamic decisions",
            "Digital engagement models to maintain adherence",
            "Automated reporting that reduces operational load",
            "Coordinated workflows across payers, providers, sponsors, and CROs"
        ],
        "desc2": "In other words, the future of clinical trial management will not be powered only by digital tools, but by connected systems that think and respond like ecosystems."
    }
]
const howMediainaData = [
    {
        "title": "How MediAIna Fills this Gap Between Fragmented and Intelligent Trial Experiences",
        "desc": [
            "Built for life sciences and healthcare innovators, MediAIna transforms clinical trials by eliminating fragmentation and replacing it with an orchestrated, intelligent patient ecosystem.",
            "MediAIna supports:"
        ],
        "list": [
            "Digital trial management across all phases and patient populations ",
            "Patient journey orchestration with automated, adaptive engagement",
            "Unified consent, ePROs, telehealth, reminders, and reporting in one environment ",
            "Device and EHR interoperability to ensure seamless data exchange ",
            "Multilingual and multimodal communication for global participation ",
            "Predictive analytics to identify disengagement risk early ",
            "A trial-wide ecosystem platform connecting every stakeholder"
        ],
        "desc2": [
            "Instead of adding more tools to already complex workflows, MediAIna creates a fully integrated clinical experience that works the same for every participant, whether they’re remote, hybrid, or on-site.",
            "For sponsors, CROs, MedTech, and pharma organizations looking to move from fragmented to connected trial care, MediAIna doesn’t just digitize the trial; it transforms the patient journey. Let’s build the era of patient care together. Talk to our healthcare transformation team at <a href='mailto:sales@rialtes.com' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>sales@rialtes.com</a>."
        ]
    }
]
const faqData = [
    {
        "question": "What is an intelligent healthcare ecosystem in clinical trials?",
        "answer": "It’s a unified digital environment that connects all trial systems, communication, and patient touchpoints to create a seamless and coordinated study experience."
    },
    {
        "question": "Why is the clinical trial patient journey often fragmented?",
        "answer": "Systems for scheduling, reporting, telehealth, reminders, and recruitment are often disconnected, requiring patients to navigate multiple interfaces."
    },
    {
        "question": "How does patient journey orchestration improve retention?",
        "answer": "By delivering personalized guidance, reminders, and support at the right time through the right channel, instead of expecting patients to manage trial complexity on their own."
    },
    {
        "question": "What role does data interoperability play in clinical trial success?",
        "answer": "It eliminates manual tasks, reduces errors, and accelerates decision-making by ensuring every team and system receives real-time, connected data."
    },
    {
        "question": "Can digital trial management help reduce dropouts?",
        "answer": "Yes. Trials that unify remote interactions, communication, monitoring, and support within a single digital platform consistently show higher adherence and retention."
    },
    {
        "question": "How does MediAIna simplify the patient journey in clinical trials?",
        "answer": "MediAIna connects every clinical and digital interaction into a single ecosystem, making participation easier, safer, and more engaging while improving retention and data quality."
    }
]

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

            {/* <Script
                id="schema-provenWays"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            /> */}

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/future-of-digital-healthcare.webp"
                        alt="People walking in a digital network landscape with a futuristic smart capsule floating above."
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/future-of-digital-healthcare-mobile.webp"
                        alt="People walking in a digital network landscape with a futuristic smart capsule floating above."
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
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">From Fragmented Care to Intelligent Ecosystems: Reimagining the Patient Journey in Trials</h1>

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


                            {/* fragmentation section */}
                            {
                                fragmentationData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        {data.desc && (
                                            <p
                                                className="mb-10 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                        )}
                                        {
                                            data.list.map((elem, id) => (
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
                                        <p
                                            className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                    </div>
                                ))
                            }

                            {/* intelligent section */}
                            {
                                intelligentData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />

                                        <h3 className="mt-10 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[16px] font-bold">
                                            {data.subTitle}
                                        </h3>
                                        <p
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                        {
                                            data.list.map((elem, id) => (
                                                <div className={`grid lg:grid-cols-12 grid-cols-1 gap-[20px] mt-10 pb-[30px] border-b border-[#bfbdbd] ${id == 2 && "border-0"}`} key={id}>
                                                    <div className="flex gap-5 lg:gap-[40px] lg:col-span-4 max-lg:items-center">
                                                        <div className="text-center 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] bg-[#1486E6] text-white pt-2 font-bold w-[50px] lg:h-[60px] lg:w-[70px]">
                                                            {id + 1}
                                                        </div>
                                                        <h4 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold">{elem.title}</h4>
                                                    </div>
                                                    <div className="lg:col-span-7">
                                                        <p
                                                            className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                        />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <p
                                            className="mt-5 lg:mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                        />
                                    </div>
                                ))
                            }

                            {/* how intelligent ecosystem section */}
                            {
                                howIntelligentData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-10 mt-10">
                                            {
                                                data.list.map((elem, id) => (
                                                    <div className={`${(id == 0 || id == 2) ? "lg:pr-[60px] lg:border-r border-[#bfbdbd]" : "lg:pl-[60px]"}`} key={id}>
                                                        <h3 className="4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[16px] font-bold 4xl:w-[90%]">
                                                            {elem.title}
                                                        </h3>
                                                        <p
                                                            className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] lg:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                        />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <p
                                            className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] lg:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />
                                    </div>
                                ))
                            }

                            {/* why intelligent section */}{
                                whyIntelligentData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />
                                        <UnorderedList arrName={data.list} ulClassName="pl-[30px] lg:pl-[40px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                        <p
                                            className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                    </div>
                                ))
                            }
                            {/* how mediaina section */}{
                                howMediainaData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="space-y-2 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <UnorderedList arrName={data.list} ulClassName="pl-[30px] lg:pl-[40px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                        <UnorderedList arrName={data.desc2} ulClassName="space-y-2 mt-10 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Reimagine the Patient Journey in Clinical Trials</h2>
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