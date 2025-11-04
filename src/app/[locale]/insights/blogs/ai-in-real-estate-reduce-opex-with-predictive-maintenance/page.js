"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/[locale]/components/useUrl";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";

export default function Page() {
    const t = useTranslations("aiRealEstate"); 
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
    });
    const { blogMainData, howAiData, howAiData2, keyTechData, predictionData, howAiImprovesData, optimizingData, fromMaintenanceData, exelonaEdgeData, preparingData, keyElemData, faqs } = blogsContent.aiRealEstate;
    const fullUrl = "https://www.rialtes.com/insights/blogs/ai-in-real-estate-reduce-opex-with-predictive-maintenance/";
    const currUrl = useUrl()

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "AI in Property Operations: Cut Downtime 30% and Reduce Opex with Predictive Maintenance",
        "description": "AI-driven predictive maintenance transforms property operations, cutting downtime by 30% and reducing Opex through proactive interventions.",
        "image": "https://www.rialtes.com/images/blogs/ai-property-operations-predictive-maintenance.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/ai-in-real-estate-reduce-opex-with-predictive-maintenance/"
        },
        "datePublished": "2025-10-13",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "AI in Property Operations FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How can AI reduce maintenance downtime in property management?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI continuously analyzes equipment data to predict potential failures before they occur. Maintenance teams can act proactively, reducing downtime and avoiding costly emergency repairs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How to reduce time spent on corrective maintenance?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Strategies include improving accessibility, interchangeability, managing redundant systems, accounting for human limitations, and enhancing fault recognition and isolation efficiency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is predictive maintenance for property operations?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Predictive maintenance uses AI and IoT sensors to monitor equipment health in real time, forecasting when assets need servicing to improve uptime and extend asset lifespan."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does AI optimize technician assignment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI evaluates technician skills, availability, and location to automatically assign the best person for each job, reducing response times and enhancing efficiency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the benefits of using AI in property operations?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Benefits include up to 30% less downtime, lower operational costs, faster service responses, and improved tenant satisfaction through real-time insights and automation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does Exelona help with predictive maintenance and Opex reduction?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Exelona integrates AI, IoT, and workflow automation to monitor assets, predict issues, and dispatch technicians efficiently, helping property managers reduce Opex, extend asset life, and improve portfolio performance."
                    }
                }
            ]
        }
    }

    return (
        <section className="min-h-screen">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                canonical={
                    "https://www.rialtes.com/insights/blogs/ai-in-real-estate-reduce-opex-with-predictive-maintenance/"
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
                        src="/images/blog/ai-property-operations-predictive-maintenance.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/ai-property-operations-predictive-maintenance-mobile.webp"
                       alt={t('bannerAlt')}
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
                        <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="13 October 2025" />

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t('blogTitle')}</h1>
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

                            {/* how ai section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('howAiTitle')}</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('howAiDesc')}</p>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('howAiDesc2')}</p>

                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:mt-[70px] mt-[30px] gap-[20px] sm:w-[80%] lg:w-full">
                                    {
                                        howAiData.map((data, ind) => {
                                            return (
                                                <div key={ind} className="border border-[#707070] lg:p-[36px] p-[24px]">
                                                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <p className="mt-[24px] xl:mt-[50px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('howAiDesc3')}</p>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('howAiDesc4')}</p>
                                <div className="grid md:grid-cols-2 grid-cols-1 xl:mt-[60px] mt-[30px] gap-[60px] sm:w-[90%] 4xl:w-[80%]">
                                    {
                                        howAiData2.map((data, ind) => {
                                            return (

                                                <div key={ind}>
                                                    <h3 className="mb-2 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] px-[22px] py-[12px] leading-tight bg-[#006FBE] text-white">{data.title}</h3>
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] py-4 border-b last:border-0 border-[#707070]" key={id}>{elem}</p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {/* predective maintenance section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('predictiveTitle')}</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('predictiveDesc')}</p>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('predictiveDesc2')}</p>

                                <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{t('predictiveDesc3')}</h3>

                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-[28px] lg:mt-[48px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full 4xl:w-[1300px]">
                                    {
                                        keyTechData.map((data, ind) => {
                                            return (
                                                <div key={ind} className={`mt-5 ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-md:border-b max-md:pb-5" : ""} ${ind == 3 ? "lg:pl-[32px] border-[#707070] lg:border-l" : ""} ${ind == 0 ? "lg:pr-[40px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-md:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                    <h4 className="4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] font-bold text-[#006FBE]">{data.title}</h4>
                                                    <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('predictiveDesc4')} <span>{t('predictiveDesc4Link')}</span>.</p>

                                <h3 className="mt-10 lg:mt-[80px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{t('dataPowerTitle')}</h3>
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-[28px] lg:mt-[48px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full 4xl:w-[1200px]">
                                    {
                                        predictionData.map((data, ind) => {
                                            return (
                                                <div key={ind} className={`mt-5 ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-md:border-b max-md:pb-5" : ""} ${ind == 3 ? "lg:pl-[32px] border-[#707070] lg:border-l" : ""} ${ind == 0 ? "lg:pr-[40px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-md:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                    <h4 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold text-[#006FBE]">{data.title}</h4>
                                                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('predictionDesc')}</p>
                            </div>
                            {/* optmizing section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    optimizingData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2}</p>
                                                {
                                                    data.commonData.map((elem, id) => {

                                                        return (
                                                            <div key={id}>
                                                                <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.listTitle}</h3>
                                                                <UnorderedList arrName={elem.list} ulClassName={`mt-5 ${id == 1 ? "list-decimal" : "list-disc"} 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] font-medium space-y-4`} />
                                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.desc}</p>

                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* how ai improves section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    howAiImprovesData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{data.listDataTitle}</h3>
                                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] 4xl:w-[1400px] sm:w-[80%] md:w-full">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <div className="4xl:p-[30px] p-[22px] border border-[#707070]" key={id}>
                                                                    <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070]">{elem.title}</h3>
                                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: elem.desc }} />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* from maintenance section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    fromMaintenanceData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                <UnorderedList arrName={data.list} ulClassName={`mt-5 list-disc 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[38px] font-medium space-y-3`} />
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: data.desc2 }} />
                                            </div>
                                        )
                                    }
                                    )
                                }
                            </div>

                            {/* exelona section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    exelonaEdgeData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: data.desc2 }} />
                                                <h3 className="mt-8 font-bold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">{data.listTitle}</h3>

                                                <ul className="list-disc pl-[36px] font-medium mt-5 space-y-2">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"><h4 className="inline font-bold">{elem.title}</h4>
                                                                    <p className="">{elem.desc}</p>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: data.desc3 }} />

                                            </div>
                                        )
                                    }
                                    )
                                }
                            </div>

                            {/* preparing section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('preparingTitle')}</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('preparingDesc')}</p>
                                <h3 className="mt-8 font-bold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">{t('preparingDesc2')}</h3>
                                <ul className="list-disc pl-[36px] font-medium mt-[20px] xl:mt-[30px] space-y-2">
                                    {
                                        preparingData.map((elem, id) => {
                                            return (
                                                <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"><h4 className="inline font-bold">{elem.title} : </h4>{elem.desc}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <p className="mt-[32px] xl:mt-[60px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('preparingDesc3')}</p>
                            </div>


                            {/* key section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('keyTitle')}</h2>
                                {
                                    keyElemData.map((data, ind) => {
                                        return (
                                            <div
                                                className="md:flex mt-24 md:mt-10 py-[34px] xl:py-[46px] px-[26px] 
                                                           md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative 
                                                           md:ml-[90px] sm:w-[80%] md:w-auto lg:w-[80%] xl:w-auto 4xl:w-[86%]"
                                                key={ind}>
                                                <h3
                                                    className="md:absolute md:flex items-center
                                                                max-md:mt-[-80px] sm:mt-[-70px] md:mt-0
                                                                md:top-1/2 md:-translate-y-1/2 md:left-[-80px]
                                                                bg-[#006FBE] text-white font-semibold
                                                                4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]
                                                                px-[30px] py-[22px] leading-tight
                                                                4xl:w-[380px] xl:w-[320px] md:w-[340px] w-fit 4xl:h-[110px]">
                                                    {data.title}
                                                </h3>

                                                <div
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]
                                                                font-medium my-auto max-md:mt-8
                                                                md:ml-[300px] xl:ml-[280px] 4xl:ml-[380px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>
                                        )
                                    })
                                }

                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('keyDesc')}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('faqTitle')}</h2>
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