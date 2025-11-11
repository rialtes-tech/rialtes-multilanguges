"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import Link from "next/link";
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
    const fullUrl = "https://www.rialtes.com/insights/blogs/why-enterprises-choose-sap-consulting-partners";
    const currUrl = useUrl()
    const t = useTranslations("whyEnterprises");
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
    });
    const { faqs, mainData, commonData, rightSap, partnerData } = blogsContent.whyEnterprises
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Why Leading Enterprises Choose Top SAP Consulting Partners for Growth and Innovation | Rialtes",
        "description": "Discover how top SAP consulting partners turn complexity into clarity, align SAP strategy with business goals, deliver customized development, and drive measurable ROI through best-practice implementations and continuous optimization.",
        "image": "https://www.rialtes.com/images/blog/digital-transformation-journey-ai.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/why-enterprises-choose-sap-consulting-partners/"
        },
        "datePublished": "2025-11-10",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "Choose Top SAP Consulting Partners for Growth and Innovation — FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What do SAP consulting partners do for large enterprises?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SAP consulting partners help design, implement, and optimize SAP solutions mapped to business goals. They assess current systems, build an implementation roadmap, integrate platforms like SAP S/4HANA, and provide ongoing support to ensure long-term ROI."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do top SAP implementation partners ensure project success?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "They use proven frameworks and agile delivery with KPI-based planning. This covers discovery, data migration, integrations, compliance, change management, user training, and post–go-live optimization to ensure measurable outcomes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why should enterprises work with SAP consulting partners instead of managing in-house?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Certified partners bring deep product expertise and cross-industry experience, reducing risk and time-to-value. Their structured methodologies and accelerators help avoid costly trial-and-error common with purely in-house approaches."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the key benefits of customized SAP development solutions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Customization tailors SAP to unique workflows, improves automation, and enables capabilities like AI-driven analytics, mobile access, and IoT integrations—turning SAP into a growth engine aligned to your operating model."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do SAP consulting partners help maximize ROI after implementation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "They provide continuous improvement—monitoring performance, fine-tuning processes, upgrading features, and aligning dashboards and KPIs with evolving goals—so adoption stays high and ROI compounds over time."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why choose Rialtes as your SAP consulting partner?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Rialtes combines deep domain expertise with an innovation-first, people-centric approach. We align SAP strategy to business outcomes, deliver industry-specific solutions, and support continuous optimization to drive measurable, long-term growth."
                    }
                }
            ]
        },
        "keywords": [
            "SAP consulting partners",
            "SAP implementation partners",
            "SAP S/4HANA",
            "enterprise digital transformation",
            "custom SAP development",
            "SAP ROI",
            "Rialtes"
        ],
        "articleSection": "Enterprise Transformation"
    }


    return (
        <section className="min-h-screen">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="Partners, website, welcome"
                canonical={`https://www.rialtes.com/${locale}/insights/blogs/why-enterprises-choose-sap-consulting-partners/`}
            />

            <Script
                id="schema-enterprisechoose"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/digital-transformation-journey-ai.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/digital-transformation-journey-ai-mobile.webp"
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
                        <BlogSocialIcons
                            fullUrl={fullUrl}
                            topic={t("blogTopic")}
                            date="November 2025"
                        />


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

                            {/* common data */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t('roleTitle')}
                                </h2>

                                {
                                    commonData.map((data, ind) => {
                                        return (
                                            <div className="mt-10" key={ind}>
                                                {data.title &&
                                                    <h3 className="font-semibold text-[#0092E0] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">{data.title}</h3>
                                                }
                                                <h4 className="4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] pb-2 font-bold leading-tight mt-8">{ind + 1}. {data.subTitle}</h4>
                                                <UnorderedList arrName={data.desc} ulClassName={`space-y-4  ${ind == 0 ? "mt-5" : "mt-2"} space-y-5 md:pl-[26px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium`} />
                                                {
                                                    data.list && ind === 7 ? (
                                                        <div className="pb-10">
                                                            {data.list.map((elem, id) => (
                                                                <div className="md:flex mt-24 md:mt-10 py-[34px] xl:py-[46px] px-[26px] md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative md:ml-[100px] sm:w-[80%] md:w-auto lg:w-[80%] xl:w-auto" key={id}>
                                                                    <p className="md:absolute max-md:mt-[-80px] sm:mt-[-70px] md:mt-0 md:top-[50%] md:translate-y-[-50%] 4xl:w-[300px] xl:w-[280px] md:w-[240px] w-fit md:left-[-80px] bg-[#006FBE] text-white font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] px-[40px] py-[22px] leading-tight">{elem.title}</p>
                                                                    <div className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[180px] xl:ml-[210px] 4xl:ml-[220px]" dangerouslySetInnerHTML={{ __html: elem.description }} />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )
                                                }
                                                {
                                                    (data.list && ind === 3) &&
                                                    <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-4 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                                }
                                                {
                                                    data.desc2 &&
                                                    <p
                                                        key={ind}
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                    />
                                                }

                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* choosing right sap section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('choosingTitle')}</h2>
                                {
                                    rightSap.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-3 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                            </div>
                                        )
                                    })
                                }

                            </div>

                            {/* partner section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('partnerTitle')}</h2>
                                {
                                    partnerData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data }}
                                                />
                                            </div>
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