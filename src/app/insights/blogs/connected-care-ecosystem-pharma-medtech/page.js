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
    "headline": "Connected Care Ecosystems: Pharma & MedTech’s Digital Future | Rialtes",
    "description": "A connected care ecosystem empowers Pharma & MedTech with predictive alerts, chronic disease management, and remote monitoring for better healthcare outcomes.",
    "image": "https://www.rialtes.com/images/blogs/connected-care-ecosystem.webp",
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
        "@id": " https://www.rialtes.com/insights/blogs/connected-care-ecosystem-pharma-medtech/"
    },
    "datePublished": "2025-09-18",
    "mainEntity": {
        "@type": "FAQPage",
        "name": "Connected Care Ecosystems in Pharma & MedTech FAQs",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is a connected care ecosystem in healthcare?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A connected care ecosystem links patients, providers, payers, Pharma, and MedTech companies into one integrated digital framework. It ensures real-time data sharing, continuity of care, and better patient outcomes across the entire healthcare journey."
                }
            },
            {
                "@type": "Question",
                "name": "Why are connected care ecosystems important for Pharma and MedTech?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "They help organizations move beyond siloed systems. Pharma and MedTech companies gain real-time insights, accelerate clinical trials, and improve compliance while delivering patient-first digital healthcare experiences."
                }
            },
            {
                "@type": "Question",
                "name": "How do connected care ecosystems improve patient engagement?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "By enabling digital patient engagement in daily healthcare, ecosystems give patients access to personalized apps, remote monitoring, virtual consultations, and timely reminders, all of which boost adherence and trust."
                }
            },
            {
                "@type": "Question",
                "name": "What role do connected ecosystems play in long-term patient care?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "They power long-term patient care management strategies such as chronic disease monitoring, remote care, and predictive alerts. This prevents complications and reduces costs while ensuring continuous care outside hospital walls."
                }
            },
            {
                "@type": "Question",
                "name": "How is MediAIana different from other digital health platforms?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MediAIana goes beyond digital patient portals. It integrates clinical, operational, and digital touchpoints across the healthcare ecosystem, powered by Rialtes’ LifeAI+. It’s built for compliance, scalability, and innovation in life sciences and MedTech."
                }
            },
            {
                "@type": "Question",
                "name": "How do connected ecosystems support digital transformation in life sciences?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "They enable reimagining digital patient journeys in life sciences by creating seamless experiences across clinical trials, therapies, and care delivery, empowering organizations to innovate faster and deliver human-centered healthcare."
                }
            }
        ]
    }
}
const mainData = [
    "The life sciences industry is at an inflection point. Pharma and MedTech organizations are no longer judged only by how well they innovate in labs or build medical devices. Today, they’re measured by how effectively they can connect patients, providers, payers, and partners into one unified healthcare experience. That’s where connected care ecosystems come in, and why they’re becoming the next big bet for the industry.",
    "Let’s break down why this shift matters, the opportunities it creates, and how platforms <span>MediAIana</span> are redefining what it means to deliver care in the digital era."
]
const whyConnectedData = [
    {
        "title": "Why Connected Care Ecosystems are a Big Deal",
        "desc": "The healthcare landscape is currently more disconnected than ever. Patients move between primary care, specialists, hospitals, pharmacies, insurance portals, and wellness apps, often without a single system linking them all together. The result: broken communication, duplicate processes, delayed interventions, and unnecessary costs.",
        "desc2": "A connected care ecosystem aims to fix this by weaving together every digital, clinical, and operational touchpoint into a single framework. Instead of siloed systems, you get continuity of care across the entire patient journey.",
        "listDesc": "For Pharma and MedTech companies, this translates to:",
        "list": [
            {
                "title": "Real-time insights",
                "description": "from patient interactions, device usage, and clinical data."
            },
            {
                "title": "Better patient outcomes",
                "description": "thanks to proactive interventions instead of reactive treatments."
            },
            {
                "title": "Faster innovation cycles",
                "description": "with data-driven R&D and smarter clinical trials."
            },
            {
                "title": "Improved compliance",
                "description": "through integrated governance across workflows and geographies."
            }
        ],
        "desc3": "The business case is clear: companies that embrace connected ecosystems will outpace those that don’t."
    }
]
const patientCenterData = [
    "Here’s the thing: at the heart of connected ecosystems lies one simple truth: the patient must be the focal point. Patients today expect healthcare to mirror their experiences in other industries: personalized, accessible, and digital-first. They want reminders on their phones, virtual consultations on demand, and access to their health history without repeating themselves at every step.",
    "That’s why <span>digital patient engagement in daily healthcare</span> is no longer optional. It’s the foundation of trust, adherence, and long-term outcomes. Pharma and MedTech leaders that invest here aren’t just enhancing patient experience, they’re building loyalty and differentiation in a competitive market."
]
const longTermData = [
    {
        "title": "Chronic disease management",
        "desc": "Diabetes, heart disease, and cancer care require ongoing support. Here, <a href='https://www.rialtes.com/insights/blogs/patient-experience-platform-transforming-long-term-care/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>long-term patient care management strategies</a>  powered by AI, wearables, and real-time monitoring can prevent complications and reduce costs."
    },
    {
        "title": "Remote care adoption",
        "desc": "Patients can stay on track outside the hospital with telemedicine and digital therapeutics."
    },
    {
        "title": "Value-based care models",
        "desc": "Pharma and MedTech can demonstrate value to payers and regulators by tracking outcomes more effectively."
    }
]
const reimaginingData = [
    {
        "title": "Reimagining Digital Patient Journeys",
        "desc": "What this really means is rethinking the way healthcare journeys are designed. Instead of focusing on isolated events (a hospital visit, a prescription, a device implant), it’s about <a href='https://www.rialtes.com/insights/blogs/digital-patient-journeys-ai-healthcare-life-sciences/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>reimagining digital patient journeys in life sciences</a>  from end to end.",
        "desc2": "That includes:",
        "list": [
            "A seamless transition from clinical trials to therapy adoption.",
            "Transparent communication between providers, payers, and patients.",
            "Predictive alerts that help clinicians step in before a crisis.",
            "Data-driven personalization that adapts to each patient’s lifestyle."

        ],
        "desc3": "This is exactly where our patient journey software MediAIna helps."
    }
]
const medianaData = [
    {
        "title": "MediAIna: Redefining Connected Care",
        "desc": "<strong>MediAIna</strong>, Rialtes’ <a href='https://www.rialtes.com/products/mediaina-reimagining-patient-journeys/'><span class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>next-generation patient journey software</span></a>, is built to solve these exact challenges for the life sciences industry. It doesn’t just digitize patient interactions—it connects the entire healthcare ecosystem.",
        "desc2": "Here’s how it works:",
        "list": [
            {
                "title": "Integrated touchpoints",
                "description": "MediAIna links clinical, operational, and digital channels across Pharma, MedTech, providers, and payers."
            },
            {
                "title": "Powered by LifeAI+",
                "description": "Backed by Rialtes’ specialized healthcare consulting suite, MediAIana leverages AI, cloud, and Salesforce to deliver scalable, compliant, and intelligent solutions."
            },
            {
                "title": "Human-centered care",
                "description": "By keeping patients at the core, it ensures better outcomes, higher engagement, and lasting trust."
            }
        ],
        "desc3": "For Pharmaceutical and MedTech companies, MediAIna accelerates innovation, supports connected care delivery, and confidently drives digital therapeutics."
    }
]
const benefitsData = [

    {
        "title": "Accelerated innovation",
        "desc": "Bring new therapies and devices to market faster with agile delivery models."
    },
    {
        "title": "Smarter clinical trials",
        "desc": "Gain real-world patient insights that optimize recruitment and adherence."
    },
    {
        "title": "Connected care delivery",
        "desc": "Unify care journeys across multiple stakeholders."
    },
    {
        "title": "Compliance at scale",
        "desc": "Maintain global standards while innovating locally."
    }
]
const competitiveData = [
    {
        "title": "The Competitive Edge",
        "desc": "For Pharma and MedTech, the choice is stark. Stick with siloed systems and risk falling behind or invest in connected care ecosystems and secure long-term relevance.",
        "desc2": "The winners will be those who can:",
        "list": [
            "Combine data, AI, and cloud platforms for predictive insights.",
            "Build patient-first digital journeys that drive loyalty and trust.",
            "Scale innovation without compromising compliance."
        ],
        "desc3": "That’s exactly the vision Rialtes brings to the industry with MediAIna and LifeAI+."
    }
]

const bettingData = [
    "Connected care ecosystems are the inevitable future of healthcare. Pharma and MedTech leaders betting here will transform not only their businesses but also the lives of millions of patients.",
    "With <a href='https://www.rialtes.com/products/mediaina-reimagining-patient-journeys/'><span class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>MediAIna</span></a>, Rialtes is helping the industry take this leap, enabling organizations to connect, innovate, and deliver human-centered healthcare at scale. The next big bet is here. The question is: are you ready to make it?"
]

const faqs = [
    {
        "question": "What is a connected care ecosystem in healthcare?",
        "answer": "A connected care ecosystem links patients, providers, payers, Pharma, and MedTech companies into one integrated digital framework. It ensures real-time data sharing, continuity of care, and better patient outcomes across the entire healthcare journey."
    },
    {
        "question": "Why are connected care ecosystems important for Pharma and MedTech?",
        "answer": "They help organizations move beyond siloed systems. Pharma and MedTech companies gain real-time insights, accelerate clinical trials, and improve compliance while delivering patient-first digital healthcare experiences."
    },
    {
        "question": "How do connected care ecosystems improve patient engagement?",
        "answer": "By enabling digital patient engagement in daily healthcare, ecosystems give patients access to personalized apps, remote monitoring, virtual consultations, and timely reminders, all of which boost adherence and trust."
    },
    {
        "question": "What role do connected ecosystems play in long-term patient care?",
        "answer": "They power long-term patient care management strategies such as chronic disease monitoring, remote care, and predictive alerts. This prevents complications and reduces costs while ensuring continuous care outside hospital walls."
    },
    {
        "question": "How is MediAIana different from other digital health platforms?",
        "answer": "MediAIana goes beyond digital patient portals. It integrates clinical, operational, and digital touchpoints across the healthcare ecosystem, powered by Rialtes’ LifeAI+. It’s built for compliance, scalability, and innovation in life sciences and MedTech."
    },
    {
        "question": "How do connected ecosystems support digital transformation in life sciences?",
        "answer": "They enable reimagining digital patient journeys in life sciences by creating seamless experiences across clinical trials, therapies, and care delivery, empowering organizations to innovate faster and deliver human-centered healthcare."
    }
]
export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/connected-care-ecosystem-pharma-medtech";
    const currUrl = useUrl()

    return (
        <section className="min-h-screen">
            <Seo
                title="Connected Care Ecosystems: Future for Pharma and MedTech | Rialtes"
                description="Discover how a connected care ecosystem helps Pharma and MedTech with predictive alerts, chronic care, and remote monitoring for better outcomes."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/connected-care-ecosystem-pharma-medtech/"
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
                        src="/images/blog/connected-care-ecosystem.webp"
                        alt="banner image"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/connected-care-ecosystem-mobile.webp"
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">MediAIna</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>18 September 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">Why Connected Care Ecosystems Are the Next Big Bet for Pharma & MedTech</h1>

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

                            {/* why connected section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    whyConnectedData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <h3
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight"
                                                    dangerouslySetInnerHTML={{ __html: data.listDesc }}
                                                />
                                                <ul className="pl-[36px] lg:pl-[56px] space-y-4 mt-5">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium">
                                                                    <h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.title} </h4>{elem.description}
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                <p
                                                    className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />
                                            </div>

                                        )
                                    })
                                }

                            </div>

                            {/* patient at the center section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">The Patient at the Center</h2>
                                <div className="mt-[29px] xl:mt-[30px]">
                                    {
                                        patientCenterData.map((data, ind) => {
                                            return (

                                                <p
                                                    key={ind}
                                                    className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data }}
                                                />

                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {/* long term section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Long-Term Value for Pharma and MedTech</h2>
                                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">A connected care ecosystem isn’t just about solving today’s problems—it’s about planning for tomorrow’s opportunities. Consider: </p>

                                {
                                    longTermData.map((data, ind) => {
                                        return (
                                            <div className="md:flex mt-24 md:mt-10 py-[34px] xl:py-[46px] px-[26px] md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative md:ml-[90px] sm:w-[80%] md:w-auto lg:w-[80%] xl:w-auto" key={ind}>
                                                <h3 className="md:absolute max-md:mt-[-80px] sm:mt-[-70px] md:mt-0 md:top-[50%] md:translate-y-[-50%] 4xl:w-[300px] xl:w-[280px] md:w-[240px] w-fit md:left-[-80px] bg-[#006FBE] text-white font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] px-[40px] py-[22px] leading-tight">{data.title}</h3>
                                                <div className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[180px] xl:ml-[210px] 4xl:ml-[240px]" dangerouslySetInnerHTML={{ __html: data.desc }} />
                                            </div>

                                        )
                                    })
                                }

                                <p className="mt-[30px] xl:mt-[49px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">The long-term bet? Connected ecosystems will evolve from “nice to have” to the only viable operating model for healthcare.</p>

                            </div>

                            {/* reimagining section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    reimaginingData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {data.desc2}</p>
                                                <div className="mt-5 space-y-4">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <div key={id}>
                                                                    <p className={`pb-2 md:w-[80%] lg:w-[70%] 4xl:w-[80%] ${id != 3 && "border-[#707070] border-b"} 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium`}>{elem}
                                                                    </p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {data.desc3}</p>

                                            </div>

                                        )
                                    })
                                }

                            </div>

                            {/* mediana redefining section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    medianaData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <h3 className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight"> {data.desc2}</h3>
                                                <div className="mt-[30px] lg:mt-[49px] grid lg:grid-cols-3 md:grid-cols2 grid-cols-1 lg:gap-[60px] gap-y-[40px] sm:w-[80%] md:w-[90%] lg:w-[950px] xl:w-[1100px] 4xl:w-[1200px]">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <div key={id} className="4xl:w-[85%]">
                                                                    <h4 className="font-semibold text-[#0092E0] 4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] pb-3 border-b border-[#707070]">{elem.title}</h4>

                                                                    <p className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium`}>{elem.description}
                                                                    </p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p className="mt-[62px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {data.desc3}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                            {/* benefits section */}
                            <div className="xl:mt-[80px] md:mt-[60px] mt-[29px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">The Benefits of MediAIna in Action</h2>
                                <p className={`mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}>Organizations adopting MediAIna can expect measurable impact:
                                </p>
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-[60px] lg:gap-x-0 max-lg:gap-y-[24px] sm:w-[80%] md:w-[90%] lg:w-[950px] xl:w-[1100px] 4xl:w-[1200px] xl:mt-[44px] mt-[30px]">
                                    {
                                        benefitsData.map((data, ind) => {
                                            return (
                                                <div key={ind} className={`${ind == 0 ? "lg:pr-[24px]" : "lg:px-[34px]"} ${ind == 3 ? "lg:pr-0 max-lg:border-b-0 max-lg:pb-0" : ""} ${ind == 2 && "md:border-b-0"} max-lg:pb-3 max-lg:border-b lg:first:border-0 lg:border-l border-[#707070]`}>
                                                    <h3 className="pb-3 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold leading-tight"> {data.title}</h3>
                                                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] lg:w-[80%]"> {data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-[62px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] border p-4 border-[#006FBE] lg:w-[950px] xl:w-[1000px] 4xl:w-[1100px]">In short, MediAIna is more than software; it’s the backbone of a connected care ecosystem for the future.</p>

                            </div>

                            {/* competitive Edge section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    competitiveData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className={`mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}>{data.desc}</p>
                                                <p className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}>{data.desc2}</p>

                                                <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-4 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                                <p className={`mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}>{data.desc3}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                            {/* betting section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Betting on the Future</h2>
                                <div className="mt-[29px] xl:mt-[30px]">
                                    {
                                        bettingData.map((data, ind) => {
                                            return (
                                                <p key={ind} className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`} dangerouslySetInnerHTML={{ __html: data }} />
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
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Importance of Connected Care Ecosystems for Pharma & MedTech</h2>
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