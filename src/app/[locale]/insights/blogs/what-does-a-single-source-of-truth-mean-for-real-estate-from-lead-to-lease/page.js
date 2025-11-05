"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/[locale]/components/useUrl";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import { ChevronDown, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";


export default function Page() {
    const t = useTranslations("whatDoesASingle");
    const locale = useLocale();
    const currUrl = useUrl();
    const blogsContent = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
    });
    const { whatASingleSourceData, whyRealEstatedata, crmErpData, theBusinessCase, aDayInLife, theRoleOfAI, steps, steps2, fromDataChaos, yourPathTitle, keyElemData, faqs } = blogsContent.whatDoesASingle;
    const fullUrl = "https://www.rialtes.com/insights/blogs/what-does-a-single-source-of-truth-mean-for-real-estate-from-lead-to-lease/";
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
                        src="/images/blog/exelona-cluster-banner.webp"
                        alt="banner image"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/exelona-cluster-mobile-banner.webp"
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Exelona</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>03 November 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t("blogTitle")}</h1>



                            <div className="md:mt-[50px] mt-[40px]">
                                {/* <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">What Are Digital Patient Journeys?</h2> */}
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {t("para1")}</p>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("para2")}</p>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("para3")} </p>


                                <>
                                    {
                                        whatASingleSourceData.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>


                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                    />
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                    />
                                                </div>
                                            )
                                        })
                                    }

                                </>
                                <>
                                    {
                                        whyRealEstatedata.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                    <h3 className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.listTitle}</h3>

                                                    <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                                        {
                                                            data.list.map((elem, id) => {
                                                                return (
                                                                    <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.desc}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                    />
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                    />
                                                </div>
                                            )
                                        })
                                    }

                                </>
                                <>
                                    {
                                        crmErpData.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                    <p
                                                        className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                                                    />
                                                    <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                                        {
                                                            data.list.map((elem, id) => {
                                                                return (
                                                                    <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"><h4 className="inline font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" >{elem.title} {ind == 0}</h4>{elem.desc}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                    />
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                    />
                                                </div>
                                            )
                                        })
                                    }

                                </>

                                <>
                                    {
                                        theBusinessCase.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <ul className="list-disc pl-[36px] font-medium mt-4 space-y-4">
                                                        {data.list.map((elem, id) => (
                                                            <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                                {/* Title in one line */}
                                                                <h4 className="font-bold mb-1 block 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                                    {elem.title}
                                                                </h4>

                                                                {/* Description: each sentence on a new line */}
                                                                <p className="leading-relaxed text-gray-800">
                                                                    {elem.desc
                                                                        .split('.')
                                                                        .filter(sentence => sentence.trim() !== '')
                                                                        .map((sentence, index) => (
                                                                            <span key={index} className="block">
                                                                                {sentence.trim()}.
                                                                            </span>
                                                                        ))}
                                                                </p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )
                                        })
                                    }

                                </>
                                <>
                                    {
                                        aDayInLife.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.des }}
                                                    />
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                                                    />
                                                    <h3 className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold pb-6">{data.des2}</h3>

                                                </div>
                                            )
                                        })
                                    }
                                </>


                                <div className="flex flex-col md:flex-row justify-center border border-gray-300 rounded-md overflow-hidden max-w-6xl mx-auto">
                                    {steps.map((step, index) => (
                                        <div
                                            key={index}
                                            className={`relative flex flex-col justify-center items-center text-center p-6 sm:p-8 w-full md:w-1/4 border-gray-300 
          ${index !== steps.length - 1 ? "border-b md:border-b-0 md:border-r" : ""}`}
                                        >
                                            <h3 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mb-2">
                                                {step.title}
                                            </h3>

                                            {step.subtitle && (
                                                <>
                                                    <ChevronDown className="text-[#006FBE] mb-2 h-[60px] w-[50px]" size={20} />
                                                    <p className="text-gray-700 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{step.subtitle}</p>
                                                </>
                                            )}

                                            {/* Connector arrows */}
                                            {index !== steps.length - 1 && (
                                                <>
                                                    {/* Desktop right arrow */}
                                                    <div className="hidden md:flex absolute right-[-18px] top-1/2 -translate-y-1/2 bg-[#C9C9C9] p-1 rounded-full">
                                                        <ChevronRight className="text-white" size={26} />
                                                    </div>

                                                    {/* Mobile down arrow */}
                                                    <div className="flex md:hidden absolute bottom-[-18px] left-1/2 -translate-x-1/2 bg-[#C9C9C9] p-1 rounded-full">
                                                        <ChevronDown className="text-white" size={20} />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('para4')} </p>


                                <div className="flex flex-col md:flex-row justify-center border border-[#6DC1FD] rounded-md overflow-hidden max-w-6xl mx-auto mt-10 bg-[#EFF8FF]">
                                    {steps2.map((step, index) => (
                                        <div
                                            key={index}
                                            className={`relative flex flex-col justify-center items-center text-center p-6 sm:p-8 w-full md:w-1/4 border-[#6DC1FD] 
      ${index !== steps2.length - 1 ? "border-b md:border-b-0 md:border-r" : ""}`}
                                        >
                                            {/* Render title only if it exists */}
                                            {step.title && (
                                                <h3 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mb-2">
                                                    {step.title}
                                                </h3>
                                            )}

                                            {/* Render ChevronDown only if title exists */}
                                            {step.title && step.subtitle && (
                                                <ChevronDown className="text-[#006FBE] mb-2 h-[60px] w-[50px]" size={20} />
                                            )}

                                            {/* Always show subtitle (if available) */}
                                            {step.subtitle && (
                                                <p className="text-gray-700 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                    {step.subtitle}
                                                </p>
                                            )}

                                            {/* Connector arrows */}
                                            {index !== steps2.length - 1 && step.title && (
                                                <>
                                                    {/* Desktop right arrow */}
                                                    <div className="hidden md:flex absolute right-[-18px] top-1/2 -translate-y-1/2 bg-[#C9C9C9] p-1 rounded-full">
                                                        <ChevronRight className="text-white" size={26} />
                                                    </div>

                                                    {/* Mobile down arrow */}
                                                    <div className="flex md:hidden absolute bottom-[-18px] left-1/2 -translate-x-1/2 bg-[#C9C9C9] p-1 rounded-full">
                                                        <ChevronDown className="text-white" size={20} />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>


                                <>
                                    {
                                        theRoleOfAI.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.des }}
                                                    />
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                                                    />
                                                    <p className="mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pb-6">{data.des2}</p>

                                                </div>
                                            )
                                        })
                                    }
                                </>
                                <>
                                    {
                                        yourPathTitle.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[15px] mt-[40px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.des }}
                                                    />
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                                                    />

                                                </div>
                                            )
                                        })
                                    }
                                </>


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
                                                                4xl:text-[24px] 2xl:text-[20px] xl:text-[20px] md:text-[20px] text-[20px]
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

                                <>
                                    {
                                        fromDataChaos.map((data, ind) => {
                                            return (
                                                <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.des }}
                                                    />
                                                    <p
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                                                    />

                                                </div>
                                            )
                                        })
                                    }
                                </>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('faqTitle')} </h2>
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