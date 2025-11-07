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
    const { whatASingleSourceData, whyRealEstatedata, crmErpData, crmDataList2, theBusinessCase, aDayInLife, theRoleOfAI, steps, steps2, fromDataChaos, yourPathTitle, keyElemData, faqs } = blogsContent.whatDoesASingle;
    const fullUrl = "https://www.rialtes.com/insights/blogs/what-does-a-single-source-of-truth-mean-for-real-estate-from-lead-to-lease/";
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "From Lead to Lease: Why Real Estate Needs a Single Source of Truth | Rialtes",
        "description": "Learn how a Single Source of Truth (SSOT) unifies CRM and ERP to eliminate data silos across leasing, finance, and operations—speeding reporting, improving compliance, and enabling AI-driven decisions for property management.",
        "image": "https://www.rialtes.com/images/blog/single-source-of-truth-real-estate-lead-to-lease.webp",
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
            "@id": "https://rialtes.netlify.app/insights/blogs/what-does-a-single-source-of-truth-mean-for-real-estate/"
        },
        "datePublished": "2025-11-04",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "Single Source of Truth (SSOT) in Real Estate — FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What does ‘single source of truth’ mean in real estate operations?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It means using one centralized system that connects leasing, finance, and operational data so every team works from the same verified, real-time information instead of multiple conflicting copies."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does CRM + ERP convergence improve efficiency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "By integrating lead management, leasing, billing, and reporting, convergence eliminates duplicate data entry and manual reconciliations. Lease details flow into billing automatically, operations see occupancy and service needs instantly, and finance receives real-time payment updates."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why do property managers need a single source of truth?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Fragmented systems slow decisions, create errors, and hide insights. SSOT ensures consistent, traceable records across departments, improving tenant experience and reducing revenue leakage from missed billing or delays."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can AI help maintain a single source of truth in real estate?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. AI detects inconsistencies between lease and billing data, flags duplicates, forecasts maintenance costs, and automates validation—keeping records accurate and enabling proactive decision-making."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does centralizing leasing and finance data improve reporting?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Unified data enables instant, accurate, audit-ready reporting without manual consolidation, significantly reducing compliance and month-end reporting cycles."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What makes Exelona different from other property management tools?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Exelona unifies CRM and ERP for real estate, centralizing leases, tenants, and payments; embedding AI-driven operations and predictive maintenance; integrating with platforms like Yardi or Oracle; and providing mobile-first experiences and automated, audit-ready insights."
                    }
                }
            ]
        }
    }


    return (
        <section className="min-h-screen">
            <Seo
                title="End Data Chaos: Single Source of Truth for Real Estate | Rialtes"
                description="A Single Source of Truth transforms how real estate teams work, plan, and grow. It connects CRM and ERP systems, breaks down silos, and gives you clarity"
                canonical={
                    "https://www.rialtes.com/insights/blogs/what-does-a-single-source-of-truth-mean-for-real-estate/"
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
                        src="/images/blog/single-source-of-truth-real-estate-lead-to-lease.webp"
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
                                                    <p className="mt-[22px] xl:mt-[10px] 2xl:mt-2 4xl:mt-[10px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                    <p
                                                        className="mt-[22px] xl:mt-[10px] 2xl:mt-2 4xl:mt-[10px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
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
                                        crmDataList2.map((data, ind) => {
                                            return (
                                                <div key={ind}>
                                                    <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                                        {
                                                            data.list.map((elem, id) => {
                                                                return (
                                                                    <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"><p className="inline font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" >{elem.title} {ind == 0}</p>{elem.desc}</li>
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
                                                    <ul className="list-disc xl:pl-[36px] md:pl-[36px] font-medium mt-4 space-y-4">
                                                        {data.list.map((elem, id) => (
                                                            <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-none">
                                                                <h3 className="font-bold mb-1 block 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">
                                                                    {elem.title}
                                                                </h3>

                                                                <p className="leading-relaxed xl:pl-8 md:pl-8 text-gray-800 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                                    {elem.desc}

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

                                <div className="flex flex-col md:flex-row justify-center  border-gray-300 border-2  overflow-hidden max-w-6xl mx-auto">
                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300">
                                        <div className="h-[280px] flex flex-col items-center justify-start px-6 py-8">
                                            <p className="4xl:text-[20px] 2xl:text-[17px]  xl:text-[17px] md:text-[16px] text-[16px]">{t('aleadsfill')} </p>
                                            <p className="mb-2 4xl:text-[20px] 2xl:text-[17px]  xl:text-[17px] md:text-[16px] text-[16px]">{t('aform')}</p>
                                            <div className={`
                                                ${locale === "es"
                                                    ? "absolute 4xl:top-[150px] top-[100px] 2xl:top-[150px] xl:top-[150px] left-1/2 transform -translate-x-1/2"
                                                    : locale === "fr"
                                                        ? "absolute 4xl:top-[120px] top-[100px] 2xl:top-[120px] xl:top-[125px] left-1/2 transform -translate-x-1/2"
                                                        : "absolute 4xl:top-[110px] top-[100px] 2xl:top-[110px] xl:top-[110px] left-1/2 transform -translate-x-1/2"
                                                }`}


                                            >
                                                <svg className="text-[#006FBE] h-[60px] w-[50px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            <p className={`
                                               ${locale === "es"
                                                    ? "4xl:mt-[80px] 2xl:mt-[98px] md:mt-[100px] mt-[130px] xl:mt-[100px] 4xl:text-[19px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    : locale === "fr"
                                                        ? "4xl:mt-[90px] 2xl:mt-[90px] md:mt-[100px] mt-[130px] xl:mt-[90px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        : "4xl:mt-[90px] 2xl:mt-[90px] md:mt-[100px] mt-[130px] xl:mt-[90px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                }`}


                                            >{t('entersCrm')}</p>
                                        </div>
                                        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="xl:hidden block absolute md:hidden  bottom-[-35px] left-[145px] transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300">
                                        <div className={`
                                        
                                  ${locale === "es"
                                                ? "h-[300px] flex flex-col items-center justify-start px-6 py-8"
                                                : locale === "fr"
                                                    ? "h-[300px] flex flex-col items-center justify-start px-6 py-8"
                                                    : "h-[280px] flex flex-col items-center justify-start px-6 py-8"
                                            }`}

                                        >
                                            <p className="mb-2 4xl:text-[20px]  2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('leaseis')}</p>
                                            <div className={`
                                                  ${locale === "es"
                                                    ? "absolute 4xl:top-[150px] top-[100px] 2xl:top-[150px] xl:top-[150px] left-1/2 transform -translate-x-1/2"
                                                    : locale === "fr"
                                                        ? "absolute 4xl:top-[115px] top-[100px] 2xl:top-[112px] xl:top-[125px] left-1/2 transform -translate-x-1/2"
                                                        : "absolute 4xl:top-[115px] top-[100px] 2xl:top-[112px] xl:top-[110px] left-1/2 transform -translate-x-1/2"
                                                }`}

                                            >
                                                <svg className="text-[#006FBE] h-[60px] w-[50px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            <p className={`
                                              ${locale === "es"
                                                    ? "4xl:mt-[80px] 2xl:mt-[95px] md:mt-[100px] mt-[130px] xl:mt-[100px] 4xl:text-[19px] 2xl:text-[16px] xl:text-[16px] md:text-[16px] text-[16px]"
                                                    : locale === "fr"
                                                        ? "4xl:mt-[120px] 2xl:mt-[120px] md:mt-[100px] mt-[130px] xl:mt-[120px] 4xl:text-[19px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        : "4xl:mt-[120px] 2xl:mt-[120px] md:mt-[100px] mt-[130px] xl:mt-[120px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                }`}

                                            >{t('detailsreenter')}</p>
                                        </div>
                                        <div className="md:block hidden absolute top-1/2 xl:right-0 transform translate-x-1/2 -translate-y-1/2 z-10 right-0">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="xl:hidden block absolute md:hidden   bottom-[-35px] left-[145px] transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300">
                                        <div className={`
                                        
                                          ${locale === "es"
                                                ? "h-[360px] flex flex-col items-center justify-start px-6 py-8"
                                                : locale === "fr"
                                                    ? "h-[280px] flex flex-col items-center justify-start px-6 py-8"
                                                    : "h-[280px] flex flex-col items-center justify-start px-6 py-8"
                                            }`}
                                        >
                                            <p className={`
                                            
                                  ${locale === "es"
                                                    ? "mb-2 4xl:text-[19px] 2xl:text-[17px] xl:text-[16px] md:text-[16px] text-[16px]"
                                                    : locale === "fr"
                                                        ? "mb-2 4xl:text-[18px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        : "mb-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                }`}


                                            >{t('maintainentce')}</p>
                                            <div className={`
                                              ${locale === "es"
                                                    ? "absolute 4xl:top-[150px] top-[100px] 2xl:top-[150px] xl:top-[150px] left-1/2 transform -translate-x-1/2"
                                                    : locale === "fr"
                                                        ? "absolute 4xl:top-[120px] top-[100px] 2xl:top-[120px] xl:top-[125px] left-1/2 transform -translate-x-1/2"
                                                        : "absolute 4xl:top-[110px] top-[100px] 2xl:top-[110px] xl:top-[110px] left-1/2 transform -translate-x-1/2"
                                                }`}


                                            >
                                                <svg className="text-[#006FBE] h-[60px] w-[50px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            <p className={`
                                            
                                              ${locale === "es"
                                                    ? "4xl:mt-[90px] 2xl:mt-[95px] mt-[130px] md:mt-[80px] xl:mt-[80px] 4xl:text-[17px] 2xl:text-[16px] xl:text-[16px] md:text-[16px] text-[16px]"
                                                    : locale === "fr"
                                                        ? "4xl:mt-[70px] 2xl:mt-[70px] mt-[130px] md:mt-[80px] xl:mt-[45px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        : "4xl:mt-[90px] 2xl:mt-[95px] mt-[130px] md:mt-[80px] xl:mt-[90px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                }`}

                                            >{t('emailed')}</p>
                                        </div>
                                        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>

                                        </div>
                                        <div className="xl:hidden block absolute  md:hidden  bottom-[-35px] left-[145px] transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-gray-300">
                                        <div className="h-[280px] flex flex-col items-center justify-center px-6 py-8">
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('finanace')}</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('para4')} </p>


                                <div className="flex flex-col md:flex-row justify-center border border-[#6DC1FD]  overflow-hidden max-w-6xl mx-auto mt-5 bg-[#EFF8FF]">
                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-b md:border-b-0 md:border-r border-[#6DC1FD]">
                                        <div className="h-[300px] flex flex-col items-center justify-start px-6 py-8">
                                            <h3 className="mb-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('theLead')}</h3>
                                            <div className="absolute 4xl:top-[120px] top-[100px] md:top-[100px] 2xl:top-[120px] xl:top-[120px] left-1/2 transform -translate-x-1/2">
                                                <svg className="text-[#006FBE] h-[60px] w-[50px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            <p className={`
                                            
                                             ${locale === "es"
                                                    ? "4xl:mt-[85px] xl:mt-[90px] md:mt-[80px] mt-[100px] 4xl:text-[19px] 2xl:text-[17px] xl:text-[16px] md:text-[16px] text-[16px]"
                                                    : locale === "fr"
                                                        ? "4xl:mt-[85px] xl:mt-[90px] md:mt-[80px] mt-[100px] 4xl:text-[19px] 2xl:text-[17px] xl:text-[16px] md:text-[16px] text-[16px]"
                                                        : "4xl:mt-[115px] xl:mt-[120px] md:mt-[80px] mt-[100px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                }`}


                                            >{t('automatically')}</p>
                                        </div>
                                        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="xl:hidden block absolute md:hidden   bottom-[-35px] left-[145px] transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-b md:border-b-0 md:border-r border-[#6DC1FD]">
                                        <div className="h-[300px] flex flex-col items-center justify-start px-6 py-8">
                                            <h3 className="mb-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('whenSign')}</h3>
                                            <div className="absolute 4xl:top-[115px] top-[100px] md:mt-[10px] 2xl:top-[110px] xl:top-[115px] left-1/2 transform -translate-x-1/2">
                                                <svg className="text-[#006FBE] h-[60px] w-[50px]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            <p className={`
                                            
                                             ${locale === "es"
                                                    ? "4xl:mt-[60px] 2xl:mt-[70px] mt-[100px] md:mt-[100px] xl:mt-[70px] 4xl:text-[19px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    : locale === "fr"
                                                        ? "4xl:mt-[85px] 2xl:mt-[115px] mt-[100px] md:mt-[100px] xl:mt-[90px] 4xl:text-[19px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        : "4xl:mt-[85px] 2xl:mt-[100px] mt-[100px] md:mt-[100px] xl:mt-[100px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                }`}
                                            >{t('billing')}</p>
                                        </div>
                                        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="xl:hidden block absolute md:hidden   bottom-[-35px] left-[145px] transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-b md:border-b-0 md:border-r border-[#6DC1FD]">
                                        <div className="h-[300px] flex flex-col items-center justify-center px-6 py-8">
                                            <p className="mb-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('anyManatainance')}</p>
                                        </div>
                                        <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="xl:hidden block absolute md:hidden   bottom-[-35px] left-[145px] transform translate-x-1/2 -translate-y-1/2 z-10">
                                            <div className="bg-[#C9C9C9] p-1 rounded-full">
                                                <svg className="text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="26" height="26">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative flex flex-col items-center text-center w-full md:w-1/4 border-[#6DC1FD]">
                                        <div className="h-[300px] flex flex-col items-center justify-center px-6 py-8">
                                            <h3 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('reports')}</h3>
                                        </div>
                                    </div>
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


                                <div className="">
                                    {keyElemData.map((data, ind) => (
                                        <div
                                            key={ind}
                                            className="relative flex flex-col md:flex-row w-full md:w-auto flex-1 border border-[#707070] bg-white
                 py-[34px] xl:py-[46px] px-[26px] md:pr-[54px] 4xl:pr-[30px] mt-24 md:mt-10 md:ml-[90px]
                 sm:w-[80%] lg:w-[80%] xl:w-auto 4xl:w-[86%] min-h-[150px]"
                                        >
                                            {/* Title box */}
                                            <h3
                                                className="md:absolute md:flex items-center justify-center
                   max-md:mt-[-80px] sm:mt-[-70px] md:mt-0
                   md:top-1/2 md:-translate-y-1/2 md:left-[-80px]
                   bg-[#006FBE] text-white font-semibold
                   4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]
                   px-[30px] py-[22px] leading-tight
                   4xl:w-[340px] xl:w-[280px] 2xl:w-[325px] md:w-[240px] w-fit 4xl:h-[100px]"
                                            >
                                                {data.title}
                                            </h3>

                                            {/* Description box */}
                                            <div
                                                className="flex-grow flex items-center
                   4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]
                   font-medium max-md:mt-8 md:ml-[220px] xl:ml-[210px] 4xl:ml-[300px] 2xl:ml-[250px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                        </div>
                                    ))}
                                </div>
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