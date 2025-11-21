"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/[locale]/components/useUrl";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import UnorderedList from "@/app/[locale]/components/unorderedList";


export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/ai-in-clinical-trials-rare-disease-enrolment/";
    const currUrl = useUrl()

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "5 Proven Ways AI Accelerates Patient Enrolment in Rare Disease Clinical Trials",
        "description": "This post explains five proven ways AI accelerates patient enrolment in rare disease clinical trials — from automated recruitment and clinical automation to digital enrolment, precision matching, and AI-driven engagement. It also highlights how MediAIna, Rialtes’ digital patient journey platform, is redefining clinical research.",
        "image": "https://www.rialtes.com/images/blogs/digital-touchscreen-technology.webp",
        "author": {
            "@type": "Organization",
            "name": "Rialtes",
            "url": "https://www.rialtes.com"
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
            "@id": "https://www.rialtes.com/insights/blogs/ai-in-clinical-trials-rare-disease-enrolment/"
        },
        "datePublished": "2025-11-20",
        "articleSection": [
            "Clinical Trials",
            "AI in Healthcare",
            "Rare Disease",
            "Digital Patient Journeys"
        ],
        "keywords": "AI in clinical trials, rare disease enrolment, patient recruitment, digital enrolment, MediAIna, clinical trial automation",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "Improve Patient Enrolment in Rare Disease Clinical Trials using AI - FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How does AI improve patient enrolment in rare disease clinical trials?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI makes it easier to identify and match eligible patients by analyzing large datasets from electronic health records, genetic information, and patient registries. This speeds up rare disease patient recruitment and reduces trial delays."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What role does AI play in digital trial enrolment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "With digital trial enrolment, AI streamlines onboarding through automated eligibility screening, remote consent, and virtual touchpoints. This reduces paperwork and makes participation easier for patients, especially those in remote or underserved regions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is patient recruitment for rare disease studies so challenging?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Rare diseases affect small, dispersed populations, making it hard to locate eligible participants. Strict criteria and geographic limitations add complexity, which is why AI-driven patient recruitment strategies are critical for improving efficiency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does AI ensure trial efficiency and reduce costs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI-powered clinical trial automation accelerates enrolment, monitors patient data in real time, and predicts potential dropouts. This lowers administrative costs while improving trial outcomes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can AI help with long-term patient engagement in rare disease trials?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Beyond enrolment, AI healthcare solutions keep patients engaged through personalized communication, reminders, and remote monitoring, ensuring they remain active participants throughout the trial."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the role of machine learning in trials?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Machine learning in trials enables predictive analytics, identifying patients who are most likely to qualify and remain compliant. It also helps researchers adapt protocols in real time to maximize trial success."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does MediAIna support digital enrolment for rare disease studies?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "MediAIna, Rialtes’ patient journey platform, simplifies digital enrolment for rare disease studies by integrating AI, automation, and compliance features. It enables smarter recruitment, continuous engagement, and human-centered digital patient journeys for life sciences organizations."
                    }
                }
            ]
        }
    }

    const mainData = [
        "Clinical trials are the lifeblood of medical innovation, especially when it comes to rare diseases. Yet, one of the biggest hurdles in developing new therapies isn’t the science; it’s finding, enrolling, and retaining the right patients. This challenge becomes even more daunting for rare diseases, where eligible participants may number in the hundreds worldwide.",
        "This is where AI in clinical trials is proving to be a game-changer. By automating recruitment, improving digital enrolment, and personalizing engagement, AI is helping Pharma and MedTech organizations cut through bottlenecks that have stalled progress for decades.As digital tools evolve, they’re also becoming central to <span>preventing clinical trial dropouts with digital tools</span>, ensuring patient retention matches patient acquisition.",
        "Let’s break down the challenges of rare disease patient recruitment and explore five proven ways AI accelerates enrolment—while also showing how platforms like MediAIna are redefining digital journeys in clinical research."
    ]
    const challenges = [
        {
            "title": "The Challenge of Rare Disease Patient Recruitment",
            "desc": "Recruiting patients for common conditions like diabetes or hypertension is challenging enough. For rare diseases, it’s exponentially harder. Here’s why:",
            "data": [
                {
                    "title": "Limited patient populations",
                    "desc": "Rare diseases, by definition, affect small numbers of people scattered across regions."
                },
                {
                    "title": "Strict eligibility criteria",
                    "desc": "Genetic markers, age brackets, and comorbidities can further narrow the pool."
                },
                {
                    "title": "Geographic barriers",
                    "desc": "Patients may live far from trial sites, making participation burdensome."
                },
                {
                    "title": "Delayed diagnoses",
                    "desc": "Many rare diseases go undiagnosed or misdiagnosed for years."
                }
            ],
            "desc2": [
                "The result? Trials often struggle to meet recruitment targets, timelines stretch out, and costs soar. That’s why rare disease patient recruitment is considered one of the biggest obstacles in clinical development.",
                "But AI is changing that story."
            ]
        }
    ]
    const faqData = [
        {
            question: "How does AI improve patient enrolment in rare disease clinical trials?",
            answer: "AI makes it easier to identify and match eligible patients by analyzing large datasets from electronic health records, genetic information, and patient registries. This speeds up rare disease patient recruitment and reduces trial delays."
        },
        {
            question: "What role does AI play in digital trial enrolment?",
            answer: "With digital trial enrolment, AI streamlines onboarding through automated eligibility screening, remote consent, and virtual touchpoints. This reduces paperwork and makes participation easier for patients, especially those in remote or underserved regions."
        },
        {
            question: "Why is patient recruitment for rare disease studies so challenging?",
            answer: "Rare diseases affect small, dispersed populations, making it hard to locate eligible participants. Strict criteria and geographic limitations add complexity, which is why AI-driven patient recruitment strategies are critical for improving efficiency."
        },
        {
            question: "How does AI ensure trial efficiency and reduce costs?",
            answer: "AI-powered clinical trial automation accelerates enrolment, monitors patient data in real time, and predicts potential dropouts. This lowers administrative costs while improving trial outcomes."
        },
        {
            question: "Can AI help with long-term patient engagement in rare disease trials?",
            answer: "Yes. Beyond enrolment, AI healthcare solutions keep patients engaged through personalized communication, reminders, and remote monitoring, ensuring they remain active participants throughout the trial."
        },
        {
            question: "What is the role of machine learning in trials?",
            answer: "Machine learning in trials enables predictive analytics, identifying patients who are most likely to qualify and remain compliant. It also helps researchers adapt protocols in real time to maximize trial success."
        },
        {
            question: "How does MediAIna support digital enrolment for rare disease studies?",
            answer: "MediAIna, Rialtes’ patient journey platform, simplifies digital enrolment for rare disease studies by integrating AI, automation, and compliance features. It enables smarter recruitment, continuous engagement, and human-centered digital patient journeys for life sciences organizations."
        }
    ];
    const fromData = [
        "Patient enrolment has long been the Achilles’ heel of clinical trials, especially for rare diseases. But with AI, the tide is turning. From automated recruitment and digital enrolment to personalized engagement and retention, AI is delivering measurable improvements in speed, accuracy, and efficiency.",
        "MediAIna is at the forefront of this transformation. By combining AI in clinical trials with <a href='https://www.rialtes.com/insights/blogs/digital-patient-journeys-ai-healthcare-life-sciences/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>patient-first digital journeys</a>, it empowers Pharma, MedTech, and life sciences organizations to accelerate rare disease studies without compromising on quality or compliance.",
        "The message is clear: the future of clinical trials lies in how AI accelerates rare disease clinical trials, and with MediAIna, that future has already caught up."
    ]
    const futureData = [
        {
            "title": "The Future of Digital Enrolment for Rare Disease Studies",
            "desc": "Looking ahead, the combination of AI, digital-first healthcare, and precision medicine will reshape how trials are conducted. Some emerging trends include:",
            "list": [
                {
                    "title": "Fully virtual trials",
                    "desc": "with remote monitoring and decentralized operations."
                },
                {
                    "title": "Real-world data integration",
                    "desc": "from wearables and patient apps."
                },
                {
                    "title": "Predictive recruitment models",
                    "desc": "that anticipate enrolment bottlenecks before they occur."
                }
            ],
            "desc2": "For rare disease studies, these innovations are essential to ensure therapies reach patients faster."
        }
    ]
    const mediainaData = [
        {
            "title": "How MediAIna Redefines AI in Clinical Trials",
            "desc": [
                "So, where does MediAIna fit into this landscape?",
                "MediAIna is Rialtes’ next-generation <a href='https://www.rialtes.com/products/mediaina-reimagining-patient-journeys/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>digital patient journey platform</a>, designed specifically for life sciences and healthcare enterprises. Backed by LifeAI+, Rialtes’ healthcare consulting suite, MediAIna leverages AI in clinical trials to accelerate recruitment and improve engagement at scale.",
                "Here’s how:"
            ],
            "list": [
                {
                    "title": "Automated recruitment and screening",
                    "desc": "MediAIna integrates with EHRs and real-world datasets to identify eligible patients faster."
                },
                {
                    "title": "Patient enrolment technology",
                    "desc": "Its digital-first workflows enable global digital trial enrolment for rare disease studies."
                },
                {
                    "title": "AI-driven personalization",
                    "desc": "MediAIna tailors communication, reminders, and engagement pathways for each patient."
                },
                {
                    "title": "Compliance and scalability",
                    "desc": "Built on secure, cloud-based infrastructure, it ensures trials meet regulatory standards worldwide."
                },
            ],
            "desc2": [
                "By weaving clinical, operational, and digital touchpoints into one platform, MediAIna helps organizations overcome the toughest recruitment barriers in rare disease trials.",
                "In short, it’s not just a tool—it’s the backbone for the next era of AI-driven patient recruitment strategies."
            ],
        }
    ]
    const commonData = [
        {
            "title": "AI-Driven Patient Recruitment Strategies",
            "desc": [
                "Traditional recruitment depends heavily on physician referrals and manual chart reviews. Both are slow and prone to missing potential candidates.",
                "AI flips this process on its head. By analyzing electronic health records (EHRs), genomic databases, claims data, and even patient-reported outcomes, AI can rapidly identify individuals who match trial criteria.",
                "For rare diseases, where every eligible patient matters, this is transformative. With AI-driven patient recruitment strategies, sponsors can:"
            ],
            "list": [
                "Discover patients earlier in their diagnostic journey.",
                "Match participants to trials with unprecedented accuracy.",
                "Expand recruitment beyond traditional sites."
            ],
            "desc2": "This approach not only accelerates enrolment but also reduces costs and improves the likelihood of successful trials."
        },
        {
            "title": "Clinical Trial Automation for Faster Screening",
            "desc": [
                "Screening patients for eligibility is another time-consuming step. Manually reviewing lab results, medical histories, and eligibility checklists can take weeks—or even months.",
                "Here’s where clinical trial automation comes in. Using machine learning algorithms, AI can rapidly scan large datasets and flag potential candidates based on predefined criteria. Automated tools also reduce errors and bias, ensuring a more accurate match.",
                "For example:"
            ],
            "list": [
                "A genetic screening tool can instantly identify patients carrying a rare mutation.",
                "AI-powered platforms can auto-check trial eligibility against EHR data.",
                "Chatbots and virtual assistants can pre-screen participants with guided questionnaires."
            ],
            "desc2": "This level of automation not only accelerates enrolment but also frees up clinical staff to focus on high-value activities, boosting trial efficiency."
        },
        {
            "title": "Digital Trial Enrolment for Global Reach",
            "desc": [
                "One of the biggest barriers to rare disease trials is geography. Patients are often scattered across the world, making travel to trial sites difficult or impossible.",
                "Digital trial enrolment is solving this challenge. By enabling virtual sign-ups, remote assessments, and telehealth consultations, trials can reach patients wherever they are.",
                "This has several advantages:"
            ],
            "list": [
                "Expands recruitment pools globally.",
                "Improves trial diversity by including patients from different regions.",
                "Reduces the patient burden of travel and logistics."
            ],
            "desc2": "For rare diseases, digital enrolment for rare disease studies isn’t just convenient—it’s essential. It ensures that trials don’t exclude eligible patients simply because of where they live.",
            "desc3": "And when paired with <span>intelligent healthcare ecosystems for trials</span>, sponsors can unify enrollment, consent, patient communication, and data collection across countries and care networks."
        },
        {
            "title": "Personalized Matching with Precision Medicine",
            "desc": [
                "No two patients are the same, especially in the world of rare diseases where conditions often present in unique ways. That’s why precision medicine—care tailored to the individual is critical.",
                "AI supports this by analyzing genomic data, lifestyle factors, and health records to create personalized patient care pathways. In trials, this translates into more precise matching between patients and studies.",
                "With machine learning in trials, AI can"
            ],
            "list": [
                "Identify biomarkers that predict treatment response.",
                "Segment patients based on genetic profiles.",
                "Reduce dropouts by enrolling those most likely to benefit."
            ],
            "desc2": "This is a direct contributor to <span>digital innovation in clinical trial management</span>, ensuring decisions are data-driven rather than assumption-driven."
        },
        {
            "title": "AI Healthcare Solutions for Engagement and Retention",
            "desc": [
                "Recruiting patients is only half the battle. Retaining them through the duration of a study is equally critical. Dropouts can derail a trial, wasting resources and skewing data.",
                "AI helps here, too. AI healthcare solutions can deliver continuous support through:"
            ],
            "list": [
                "Automated reminders for medication and appointments.",
                "Virtual assistants that answer questions in real time.",
                "Predictive analytics that flag disengagement risks early."
            ],
            "desc2": "This creates a smoother patient experience, strengthens trust, and significantly improves retention rates. For rare disease studies, where every participant counts, this is a game-changer."
        }
    ]

    return (
        <section className="min-h-screen">
            <Seo
                title="AI in Clinical Trials: Solving Rare Disease Enrolment | Rialtes"
                description="AI in clinical trials transforms rare disease enrolment through automated recruitment, digital-first workflows, and personalized patient engagement at scale."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/ai-in-clinical-trials-rare-disease-enrolment/"
                }
            />

            <Script
                id="schema-clinical"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/digital-touchscreen-technology.webp"
                        alt="Person interacting with digital touchscreen interface displaying AI and futuristic technology elements"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/digital-touchscreen-technology-mobile.webp"
                        alt="Person interacting with digital touchscreen interface displaying AI and futuristic technology elements"
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
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>20 November 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">5 Proven Ways AI Accelerates Patient Enrolment in Rare Disease Clinical Trials</h1>

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

                            {/* challenges section */}
                            {
                                challenges.map((data, ind) => (
                                    <div key={ind} className="md:mt-[50px] mt-[40px]">
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p
                                            className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />

                                        {
                                            data.data.map((data, ind) => {
                                                return (
                                                    <div className="md:flex mt-24 md:mt-10 py-[34px] md:py-[60px] px-[26px] md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative md:ml-[90px] sm:w-[80%] md:w-auto xl:w-[1000px] 4xl:w-[1100px]" key={ind}>
                                                        <h3 className={`md:absolute max-md:mt-[-80px] sm:mt-[-70px] md:mt-0 md:top-[50%] md:translate-y-[-50%] 4xl:w-[300px] xl:w-[280px] md:w-[240px] w-fit md:left-[-80px] bg-[#006FBE] text-white font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] px-[40px] py-[22px] ${ind == 3 && "xl:pt-[36px] 2xl:pt-[22px]"} leading-tight lg:h-[100px]`}>{data.title}</h3>
                                                        <div className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[180px] xl:ml-[210px] 4xl:ml-[230px]" dangerouslySetInnerHTML={{ __html: data.desc }} />
                                                    </div>

                                                )
                                            })
                                        }
                                        <UnorderedList arrName={data.desc2} ulClassName="space-y-4 mt-10 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                    </div>
                                ))
                            }

                            {/* common data */}
                            {
                                commonData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{ind + 1}. {data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="mt-[29px] xl:mt-[30px] space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-3 pl-[26px] lg:pl-[36px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                        <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                        {
                                            data.desc3 && <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                        }
                                    </div>
                                ))
                            }


                            {/* mediaina section */}
                            {
                                mediainaData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="mt-[29px] xl:mt-[30px] space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <div className="grid lg:grid-cols-4 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full 4xl:w-[1300px]">
                                            {
                                                data.list.map((data, ind) => {
                                                    return (
                                                        <div key={ind} className={`mt-5 ${(ind == 1 || ind == 2 || ind == 3) ? "lg:px-[30px] border-[#707070] lg:border-l max-lg:border-b max-lg:pb-5 max-lg:last:border-0" : ""} ${ind == 0 ? "lg:pr-[40px] 4xl:pr-0 md:border-b lg:border-0 border-[#707070] max-md:border-b max-lg:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""} ${(ind == 2) ? "md:border-b-0" : ""}`}>
                                                            <h3 className={`4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold ${ind == 0 && "w-[90%]"}`}>{data.title}</h3>
                                                            <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[84%]">{data.desc}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <UnorderedList arrName={data.desc2} ulClassName="mt-10 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                    </div>
                                ))
                            }

                            {/* future section */}
                            {
                                futureData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p
                                            className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />
                                        <ul className="pl-[36px] space-y-2 list-disc font-medium">
                                            {
                                                data.list.map((elem, id) => (
                                                    <li key={id} className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        <span className="font-bold">{elem.title}</span>{" "}{elem.desc}
                                                    </li>
                                                ))
                                            }
                                        </ul>

                                        <p
                                            className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                    </div>
                                ))
                            }

                            {/* from section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">From Bottlenecks to Breakthroughs</h2>
                                {
                                    fromData.map((data, ind) => {
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
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Improve Patient Enrolment in Rare Disease Clinical Trials using AI</h2>
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