"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/sap-implementation-strategies-for-2026-success/";
    const currUrl = useUrl()
    const t = useTranslations("sap2026");
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
    });
    const { mainData, howAiImprovesData, implementData, fivePillarsData, howSapData, commonData, faqs } = blogsContent.sap2026

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Proven SAP Implementation Strategies that Minimize Risk and Accelerate ROI | Rialtes",
        "description": "Discover proven SAP implementation strategies that reduce risk, ensure faster ROI, and align technology with business goals. Learn how expert SAP consultants and value-driven partnerships enable seamless integration, user adoption, and measurable business outcomes.",
        "image": "https://www.rialtes.com/images/blogs/futuristic-data-analytics-visualization.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/sap-implementation-strategies-for-2026-success/"
        },
        "datePublished": "2025-11-11",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "SAP Implementation Strategies to Minimize Risk FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are the key steps in a successful SAP implementation process?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A successful SAP implementation includes discovery, design, configuration, testing, go-live, and continuous optimization. Each step should align with business goals and be guided by experienced SAP consultants to ensure smooth execution and maximum ROI."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do SAP implementation partners minimize project risk?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Top SAP partners use proven methodologies such as SAP Activate, agile frameworks, and structured governance models. These approaches enable early risk identification, clear milestones, and controlled delivery within time and budget."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What makes Rialtes a trusted SAP implementation partner for enterprises?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Rialtes combines deep SAP expertise with industry-specific knowledge to deliver value-driven implementations. With experience across S/4HANA, SuccessFactors, and Analytics Cloud, Rialtes ensures every project aligns with strategic enterprise outcomes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does an SAP implementation usually take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The typical SAP implementation takes between 6 and 18 months, depending on project scope, data complexity, and the level of customization required. This timeline includes discovery, migration, testing, and training phases."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the biggest ROI drivers after SAP go-live?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Post-launch ROI is driven by automation, real-time analytics, process efficiency, and continuous system optimization. Enterprises that align SAP with strategic KPIs often achieve faster decision-making and long-term scalability."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can working with expert SAP consultants improve business outcomes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Expert SAP consultants ensure that every module is tailored to your business processes. Their industry experience helps achieve compliance, increase user adoption, and drive measurable improvements across finance, operations, and supply chain."
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
                keywords="Partners, website, welcome"
                canonical={`https://www.rialtes.com/insights/blogs/sap-implementation-strategies-for-2026-success/`}
            />

            <Script
                id="schema-implementation"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/futuristic-data-analytics-visualization.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/futuristic-data-analytics-visualization-mobile.webp"
                        alt={t('bannerAlt')}
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
                        <BlogSocialIcons fullUrl={fullUrl}
                            topic={t("blogTopic")}
                            date="11 November 2025" />


                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t('blogTitle')}</h1>

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

                        </div>

                        {/* understanding section */}
                        <div className="md:mt-[50px] mt-[40px]">
                            {
                                howAiImprovesData.map((data, ind) => {
                                    return (
                                        <div key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{data.listDataTitle}</h3>
                                            <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
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

                        {/* how implement section */}
                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('implementationTitle')}</h2>
                            {
                                implementData.map((data, ind) => {
                                    return (
                                        <p
                                            key={ind}
                                            className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                            dangerouslySetInnerHTML={{ __html: data }}
                                        />
                                    )
                                })
                            }
                        </div>

                        {/* 5 pillars section */}
                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('pillarsTitle')}</h2>
                            {
                                fivePillarsData.map((data, ind) => {
                                    return (
                                        <div className="mt-8" key={ind}>
                                            <h3 className="font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">{ind + 1}. {data.title}</h3>
                                            {
                                                data.list.map((elem, id) => (
                                                    <p
                                                        key={id}
                                                        className="mt-5 md:pl-[26px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: elem }}
                                                    />
                                                ))
                                            }
                                            {
                                                data.list2 && <UnorderedList arrName={data.list2} ulClassName="pl-[36px] lg:pl-[60px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                            }

                                            {
                                                data.list3 &&
                                                data.list3.map((elem, id) => (
                                                    <p
                                                        key={id}
                                                        className="mt-5 md:pl-[26px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: elem }}
                                                    />
                                                ))
                                            }
                                        </div>
                                    )
                                })
                            }

                        </div>

                        {/* how sap section */}
                        <div className="md:mt-[50px] mt-[40px]">
                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('sapTitle')}</h2>
                            {
                                howSapData.map((data, ind) => {
                                    return (
                                        <div key={ind}>
                                            <h3 className="mt-[22px] xl:mt-[30px] font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">{data.title}</h3>
                                            {
                                                data.desc.map((elem, id) => {
                                                    return (
                                                        <p
                                                            key={id}
                                                            className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
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
                        {/* common data */}
                        {
                            commonData.map((data, ind) => (
                                <div className="md:mt-[50px] mt-[40px]" key={`common-${ind}`}>
                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                        {data.title}
                                    </h2>

                                    {data.desc.map((elem, id) => (
                                        <p
                                            key={`desc-${ind}-${id}`}
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: elem }}
                                        />
                                    ))}

                                    {data.list && ind === 1 && (
                                        <ul className="pl-[36px] lg:pl-[46px] space-y-3 mt-5">
                                            {data.list.map((elems, idx) => (
                                                <li
                                                    key={`list1-${ind}-${idx}`}
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium"
                                                >
                                                    <h3 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        {elems.title}
                                                    </h3>{" "}
                                                    {elems.desc}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {data.list && ind === 2 && (
                                        <UnorderedList
                                            key={`unordered-${ind}`}
                                            arrName={data.list}
                                            ulClassName="pl-[36px] lg:pl-[56px] space-y-3 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium"
                                        />
                                    )}

                                    {data.desc2 && (
                                        <p
                                            key={`desc2-${ind}`}
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                    )}
                                </div>
                            ))
                        }

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