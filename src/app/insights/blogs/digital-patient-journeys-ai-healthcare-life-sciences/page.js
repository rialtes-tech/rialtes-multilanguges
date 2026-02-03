"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from '@/app/components/blogSocialIcons'
import Link from "next/link";

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/digital-patient-journeys-ai-healthcare-life-sciences/";
    const currUrl = useUrl()
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Digital Patient Journeys: AI Reshaping Life Sciences | Rialtes",
        "description": "Digital patient journeys, powered by AI in life sciences, are making this possible, ensuring patients feel heard, supported, and cared for every step.",
        "image": "https://www.rialtes.com/images/blog/digital-patient-journeys.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/digital-patient-journeys-ai-healthcare -life-sciences/"
        },
        "datePublished": "2025-09-30",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "Digital Patient Journeys in Life Sciences FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is a digital patient journey in healthcare?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A digital patient journey is the end-to-end experience a patient has with a healthcare provider, supported by digital platforms. It integrates scheduling, consultations, records, insurance, and follow-ups into a unified pathway."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How is AI reshaping patient journeys in life sciences?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI enables predictive healthcare, personalized care pathways, virtual assistants, and operational automation. In life sciences, it improves clinical trials, supports precision medicine, and enhances patient engagement at scale."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why should healthcare providers and life sciences companies invest in digital patient journeys now?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Because patient expectations are changing fast. Adopting digital platforms ensures better engagement, improved outcomes, compliance with regulations, and a competitive advantage in healthcare."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does MediAIna help with digital patient journeys?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "MediAIna is Rialtes’ AI-powered platform that connects patients and providers across every touchpoint. It offers end-to-end journeys, AI-powered care pathways, and compliance-first design—delivering smarter, patient-centric experiences."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What role does Rialtes play in enabling healthcare transformation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Rialtes is a technology provider and transformation partner. With expertise in AI, cloud, and healthcare platforms, Rialtes helps organizations implement MediAIna, integrate with existing systems, and scale digital patient journeys."
                    }
                }
            ]
        }
    }
    const whyDigitalJourneyData = [
        "The healthcare industry is standing at a turning point. Patients no longer want fragmented experiences, waiting weeks for appointments, repeating their history at every touchpoint, or dealing with disconnected portals. They want personalized, continuous care that mirrors the convenience of other industries. This shift has accelerated the demand for digital patient journeys, where every step, from scheduling to follow-up, is connected, intelligent, and patient-centric.",
        "<a href='https://en.wikipedia.org/wiki/Artificial_intelligence_in_healthcare' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>AI in healthcare</a> and life sciences is at the heart of this transformation, bringing intelligence, automation, and personalization to care delivery. Platforms like MediAIna are proving that when technology aligns with empathy, we can reshape how patients interact with providers, insurers, and researchers.",
        "Let’s explore how AI drives patient experience innovation and why digital patient journeys are becoming the future of healthcare.",
    ]
    const keyElemData = [
        {
            "title": "Omnichannel access",
            "desc": "Patients can engage via mobile apps, portals, or even messaging platforms."
        },
        {
            "title": "Personalized care pathways",
            "desc": "Tailored treatment and follow-ups based on individual profiles."
        },
        {
            "title": "AI-driven insights",
            "desc": "Predictive models that anticipate patient needs before they arise."
        }
        ,
        {
            "title": "Interoperability",
            "desc": "Data flows across systems—clinics, labs, insurers, and pharmacies."
        }
    ]
    const roleData = [
        {
            "title": "Predictive healthcar",
            "desc": "Algorithms identify early warning signs of chronic conditions."
        },
        {
            "title": "Virtual assistant",
            "desc": "AI chatbots guide patients through scheduling, prescriptions, and post-care."
        },
        {
            "title": "Precision medicine",
            "desc": "AI supports personalized treatments by analyzing genetic and lifestyle data."
        },
        {
            "title": "Operational efficiency",
            "desc": "Automation reduces administrative bottlenecks for providers."
        }
    ]
    const commonData = [
        {
            "title": "From Fragmented to Connected: The Shift in Patient Experience",
            "desc": "Traditionally, healthcare has been reactive. A patient fell ill, sought treatment, and then was left on their own until the next visit. Today, AI-powered care pathways are turning that model on its head.",
            "listTitle": "With digital patient journeys, patients get:",
            "list": [
                {
                    "title": "Proactive engagement ",
                    "desc": "reminders for screenings, wellness tips, and medication alerts.",
                },
                {
                    "title": "Continuous communication",
                    "desc": "via secure chat, WhatsApp, or portals.",
                },
                {
                    "title": "Reduced delays ",
                    "desc": "automated scheduling, digital insurance approvals, and real-time lab updates.",
                }
            ],
            "desc2": "These <a href='https://www.rialtes.com/insights/blogs/connected-care-ecosystem-pharma-medtech/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>connected care ecosystems in pharma</a> represent more than convenience. It directly impacts outcomes; patients who feel supported and engaged are more likely to follow treatment plans, reducing readmissions and improving <a href=' https://www.rialtes.com/insights/blogs/patient-experience-platform-transforming-long-term-care/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>long-term patient care management strategies</a>. "
        },
        {
            "title": "Why Life Sciences Must Embrace Digital Patient Journeys",
            "desc": "For life sciences companies, digital transformation is something that they can’t put away. Patients expect more. Regulators demand better compliance. And competitors are already leveraging AI to accelerate innovation.",
            "listTitle": "Benefits include:",
            "list": [
                {
                    "title": "Enhanced patient recruitment and retention ",
                    "desc": "in clinical trials through digital outreach.",
                },
                {
                    "title": "Improved adherence tracking ",
                    "desc": "using real-time patient monitoring.",
                },
                {
                    "title": "Better insights into patient behavior ",
                    "desc": "for drug development and personalized therapies.",
                },
                {
                    "title": "Cost savings ",
                    "desc": "by reducing inefficiencies and manual processes.",
                }
            ],
            "desc2": "MediAIna supports these needs by bridging the gap between healthcare AI platforms and <span> <a href='https://www.linkedin.com/pulse/transforming-care-beyond-clinic-digital-health-o7ybf/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>digital patient engagement</a> in daily healthcare</span>, creating connected ecosystems for life sciences enterprises."
        }
    ]
    const digitalData = [
        {
            "title": "Digital Health Adoption: Current Trends and Challenges",
            "desc": "The rise of digital health adoption has been rapid, but not without obstacles.",
            "list": [
                {
                    "listTitle": "Key trends driving adoption:",
                    "listData": [
                        {
                            "title": "Telemedicine normalization",
                            "desc": "after the pandemic."
                        },
                        {
                            "title": "Integration of wearable data",
                            "desc": "into clinical decision-making."
                        },
                        {
                            "title": "AI-driven clinical trial management",
                            "desc": "for faster results."
                        },
                        {
                            "title": "Digital-first insurance models",
                            "desc": "simplifying approvals and claims."
                        }
                    ]
                },
                {
                    "listTitle": "Challenges still faced:",
                    "listData": [
                        {
                            "title": "Data silos",
                            "desc": "across providers, labs, and insurers."
                        },
                        {
                            "title": "Privacy and compliance concerns",
                            "desc": "with sensitive patient data."
                        },
                        {
                            "title": "Patient digital literacy gaps",
                            "desc": "are limiting access."
                        },
                        {
                            "title": "Resistance to change",
                            "desc": "within traditional healthcare systems."
                        }
                    ]
                }
            ],
            "desc2": "Platforms like MediAIna help overcome these barriers by focusing on interoperability, compliance, and ease of use, ensuring adoption feels natural for both patients and providers."
        }
    ]
    const futureData = [
        {
            "title": "Future of AI-Driven Healthcare Experiences",
            "desc": "So what does the future of AI-driven healthcare experiences look like?",
            "list": [
                {
                    "listTitle": "Hyper-personalized care",
                    "listDesc": "Treatment plans tailored not just by diagnosis but by lifestyle, genetics, and patient preferences."
                },
                {
                    "listTitle": "Predictive health ecosystems",
                    "listDesc": "AI models warning patients of potential risks before symptoms appear."
                },
                {
                    "listTitle": "Seamless digital touchpoints",
                    "listDesc": "Every step of the journey—from booking to billing—connected within one interface."
                },
                {
                    "listTitle": "Patient empowerment",
                    "listDesc": "Patients control their data, receive transparent updates, and actively participate in decisions."
                },
                {
                    "listTitle": "Collaborative networks",
                    "listDesc": "Life sciences, insurers, and providers sharing real-time data for better outcomes."
                }
            ],
            "desc2": "MediAIna positions itself at the forefront of this transformation by enabling future-ready patient experiences grounded in intelligence and empathy."
        }
    ]
    const medianaData = [
        {
            "title": "MediAIna: Transforming Digital Patient Journeys in Practice",
            "desc": "While the vision sounds futuristic, <a href='https://www.rialtes.com/products/mediaina-reimagining-patient-journeys/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>MediAIna</a>  makes it practical today.",
            "listTitle": "What sets MediAIna apart:",
            "list": [
                {
                    "title": "End-to-end digital journey",
                    "desc": "From onboarding to follow-up, everything is connected."
                },
                {
                    "title": "AI-powered care pathways ",
                    "desc": "Personalized engagement for each patient type."
                },
                {
                    "title": "Provider-patient collaboration ",
                    "desc": "Easy communication channels that reduce friction."
                },
                {
                    "title": "Compliance-first design ",
                    "desc": "Built to meet HIPAA, GDPR, and global healthcare regulations."
                },
                {
                    "title": "Scalable architecture ",
                    "desc": "Designed for hospitals, clinics, and life sciences enterprises."
                },
            ],
            "desc2": "By focusing on precision medicine, personalized care, and healthcare transformation, MediAIna helps organizations deliver patient journeys that aren’t just digital but deeply human."
        }
    ]
    const reshapingData = [
        "Here’s the truth: patients don’t just want treatment. They want experiences that reflect empathy, intelligence, and continuity. Digital patient journeys, powered by AI in life sciences, are making this possible.",
        "Organizations that adopt platforms like MediAIna today are not just meeting patient expectations—they’re redefining the future of healthcare. And this is where Rialtes comes in. As a trusted partner in digital transformation, Rialtes combines deep domain expertise with cutting-edge technology to design, implement, and scale digital patient journeys. With <a href='https://www.rialtes.com/products/mediaina-reimagining-patient-journeys/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>MediAIna</a> as the foundation, Rialtes ensures that your organization can deliver connected, personalized, and compliant healthcare experiences, not years from now, but today.",
        "The future belongs to those who see patient journeys not as transactions but as relationships to be nurtured. AI is the enabler. MediAIna is the bridge. Rialtes is the partner that makes it real.",
    ]
    const faqs = [
        {
            "question": "What is a digital patient journey in healthcare?",
            "answer": "A digital patient journey is the end-to-end experience a patient has with a healthcare provider, supported by digital platforms. It integrates scheduling, consultations, records, insurance, and follow-ups into a unified, seamless pathway."
        },
        {
            "question": "How is AI reshaping patient journeys in life sciences?",
            "answer": "AI enables predictive healthcare, personalized care pathways, virtual assistants, and operational automation. In life sciences, it improves clinical trials, supports precision medicine, and enhances patient engagement at scale."
        },
        {
            "question": "Why should healthcare providers and life sciences companies invest in digital patient journeys now?",
            "answer": "Because patient expectations are changing fast. Adopting digital platforms ensures better engagement, improved outcomes, compliance with regulations, and a competitive advantage in a rapidly evolving healthcare landscape."
        },
        {
            "question": "How does MediAIna help with digital patient journeys?",
            "answer": "MediAIna is Rialtes’ AI-powered platform that connects patients and providers across every touchpoint. It offers end-to-end digital journeys, AI-powered care pathways, and compliance-first design—helping organizations deliver smarter, patient-centric experiences."
        },
        {
            "question": "What role does Rialtes play in enabling healthcare transformation?",
            "answer": "Rialtes is a technology provider and a transformation partner. With expertise in AI, cloud, and healthcare platforms, Rialtes helps organizations implement MediAIna, integrate with existing systems, and scale digital patient journeys to meet future demands."
        }
    ]


    return (
        <section className="min-h-screen">
            <Seo
                title="Digital Patient Journeys: The Future of AI Healthcare | Rialtes"
                description=" The future of healthcare is digital patient journeys—AI-driven, predictive, and personalized pathways that empower patients and providers alike."
                canonical={
                    "https://www.rialtes.com/insights/blogs/digital-patient-journeys-ai-healthcare-life-sciences/"
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
                        src="/images/blog/digital-patient-journeys.webp"
                        alt="AI-enhanced patient journey timeline showing diagnosis, treatment steps, and continuous medical follow-up"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/digital-patient-journeys-mobile.webp"
                        alt="AI-enhanced patient journey timeline showing diagnosis, treatment steps, and continuous medical follow-up"
                        priority
                        height={250}
                        width={375}
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
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>30 September 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">The Future of Digital Patient Journeys: How AI is Reshaping Life Sciences</h1>

                            <div className="xl:mt-[38px] mt-[33px]">
                                <h2 className="font-semibold 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Why Digital Patient Journeys Matter Now</h2>
                                {
                                    whyDigitalJourneyData.map((data, ind) => {
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

                            {/* what are digital journey section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">What Are Digital Patient Journeys?</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> A digital patient journey is the integration of healthcare processes into a seamless, technology-driven flow. Instead of isolated interactions—booking an appointment here, accessing test results elsewhere, or calling support for queries, the patient moves through a unified experience.</p>

                                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-[48px] font-bold">Key elements include:</h3>
                                {
                                    keyElemData.map((data, ind) => {
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
                                <p className="mt-[34px] xl:mt-[49px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> MediAIna embodies this shift by providing an <Link className='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline' href="https://www.rialtes.com/products/mediaina-reimagining-patient-journeys/"> intelligent patient journey platform for digital care</Link>, connecting providers and patients through AI-powered workflows.</p>
                            </div>

                            {/* the role of ai section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">The Role of AI in Life Sciences and Patient Care</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">AI is not just an added feature; it’s the enabler of future-ready healthcare systems. By analyzing massive datasets from clinical trials, electronic medical records, and patient interactions, AI can help life sciences organizations identify trends, predict outcomes, and personalize care.</p>
                                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-[48px] font-bold">How AI is reshaping patient journeys in life sciences:</h3>

                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full">
                                    {
                                        roleData.map((data, ind) => {
                                            return (
                                                <div key={ind} className={`mt-[48px] ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-md:border-b max-md:pb-5" : ""} ${ind == 3 ? "lg:pl-[32px] border-[#707070] lg:border-l" : ""} ${ind == 0 ? "lg:pr-[40px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-md:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                    <h4 className="4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] font-bold">{data.title}</h4>
                                                    <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-[60px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">This isn’t just about efficiency. It’s about ensuring patients feel heard, supported, and cared for every step of the way.</p>

                            </div>


                            {/* common section */}
                            <>
                                {
                                    commonData.map((data, ind) => {
                                        return (
                                            <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-5 font-bold">{data.listTitle}</h3>

                                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"><h4 className="inline font-bold">{elem.title} {ind == 0 && "- "}</h4>{elem.desc}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                            </div>
                                        )
                                    })
                                }

                            </>

                            {/* digital health section */}
                            <>
                                {
                                    digitalData.map((data, ind) => {
                                        return (
                                            <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>

                                                {
                                                    data.list.map((elem, id) => {
                                                        return (
                                                            <div key={id}>
                                                                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-6 font-bold">{elem.listTitle}</h3>
                                                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                                                    {
                                                                        elem.listData.map((content, i) => {
                                                                            return (
                                                                                <li key={i} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"><h4 className="inline font-bold">{content.title} </h4>{content.desc}</li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2}</p>

                                            </div>
                                        )
                                    })
                                }
                            </>

                            {/* future section */}
                            <>
                                {
                                    futureData.map((data, ind) => {
                                        return (
                                            <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>

                                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] 4xl:w-[1300px] sm:w-[80%] md:w-full">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <div className="4xl:p-[50px] p-[32px] border border-[#707070]" key={id}>
                                                                    <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.listTitle}</h3>
                                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.listDesc}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p className="mt-[48px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2}</p>

                                            </div>
                                        )
                                    })
                                }
                            </>

                            {/* mediana section */}
                            <>
                                {
                                    medianaData.map((data, ind) => {
                                        return (
                                            <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }} />


                                                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-6 font-bold">{data.listTitle}</h3>

                                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"><h4 className="inline font-bold">{elem.title} {ind == 0 && "- "}</h4>{elem.desc}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2}</p>

                                            </div>
                                        )
                                    })}
                            </>
                            {/* reshaping section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">Reshaping Healthcare, One Journey at a Time</h2>
                                {
                                    reshapingData.map((data, ind) => {
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