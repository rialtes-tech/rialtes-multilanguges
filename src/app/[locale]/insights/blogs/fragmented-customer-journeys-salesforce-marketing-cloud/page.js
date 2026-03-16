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
    const t = useTranslations("salesforceMarketingCloud");
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, {/*  */
        en: enContent,
        es: esContent,
        fr: frContent,
    });
    const { mainData, fragmentedData, fragmentedJourney, personalizedMarketing, connectedJourney, advantageplus, solveFragmentation, benefits, faqData,schemaData } = blogsContent.salesforceMarketingCloud


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
                title={t("seoTitle")}
                description={t("seoDescription")}
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
                        alt={t("bannerAlt")}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/fragmented-customer-journeys-mobile.webp"
                        alt={t("bannerAlt")}
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("categoryName")}</span>{" "}
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
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                                {t("salesforcemarketingTitle")}
                            </h1>
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
                                                    <div className=" bg-[#DEDEDE] py-[10px] xl:px-[24px] md:px-[20px] px-[10px]  md:w-[580px]  xl:w-[640px] 4xl:w-[680px] mb-14">
                                                        <div className=" flex flex-wrap  text-start items-center  text-[18px] max-[400px]:text-[13px] md:text-[18px] xl:text-[20px] 4xl:text-[22px]  text-black gap-y-2 ">
                                                            {data.snapshot.channels.map((item, idx) => (
                                                                <span key={idx} className="flex items-center whitespace-nowrap">
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
                                                    src="/images/blog/personalization-failure-process-diagram.svg"
                                                    alt={t("personalizedImageAlt")}
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
                                                            <span className="4xl:text-[30px] 2xl:text-[22px] xl:text-[19px] md:text-[20px] text-[16px]">{step}</span>

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
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("faqTitle")}
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