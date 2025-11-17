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
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import { useActiveLocale } from "@/app/[locale]/components/activeLanguages";


export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/salesforce-implementation-partner-strategies-reduce-risk-maximize-roi/";
    const currUrl = useUrl()
    const t = useTranslations('salesforceImplementation')
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { blogMainData, commonData, salesforceData, salesforceStratergies, maximizeData, trustedData, buildData, faqs } = content.salesforceImplementation;
    const { enActive } = useActiveLocale()
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Salesforce Implementation: Partner Strategies That Reduce Risk & Maximize ROI",
        "description": "From planning a Salesforce implementation roadmap to handling complex integrations, best partners ensure enterprises extract full value from the platform.",
        "image": "https://www.rialtes.com/images/blog/salesforce-implementation-partners-strategies.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/salesforce-implementation-partner-strategies-reduce-risk-maximize-roi/"
        },
        "datePublished": "2025-09-29",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "Salesforce Implementation FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How to ensure a successful Salesforce implementation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Start with a clear roadmap, engage stakeholders early, and work with certified Salesforce implementation partners who align the system with your business goals."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are the best practices for Salesforce integration?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Best practices include mapping an integration roadmap, prioritizing critical systems, leveraging certified partners, and building scalability and compliance into the design."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why do enterprises need Salesforce integration partners?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Integration partners bring frameworks, accelerators, and industry expertise that reduce risk and speed time-to-value, ensuring Salesforce is optimized for business outcomes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can Salesforce integration partners reduce project risk?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Certified partners prevent common issues like data duplication, scope creep, and compliance failures, designing secure, scalable connections to future-proof the Salesforce ecosystem."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why choose Rialtes as a Salesforce implementation partner?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Rialtes, a Salesforce Crest Partner, delivers seamless implementations, complex integrations, and ongoing innovation, reducing project risks and maximizing Salesforce ROI."
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
                canonical={`https://www.rialtes.com/${locale}/insights/blogs/salesforce-implementation-partner-strategies-reduce-risk-maximize-roi/`}
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
                        src="/images/blog/salesforce-implementation-partners-strategies.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/salesforce-implementation-partners-strategies-mobile.webp"
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
                        <BlogSocialIcons fullUrl={fullUrl} topic="Salesforce Agentforce" date="29 September 2025" />


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

                            {/* common data */}
                            <>
                                {
                                    commonData.map((data, ind) => {
                                        return (
                                            <div key={ind} className="md:mt-[50px] mt-[40px]">
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                                {
                                                    data.list.map((elem, id) => (
                                                        <div key={id}>
                                                            <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.title}</h3>
                                                            <UnorderedList arrName={elem.desc} ulClassName={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4`} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </>

                            {/* how salesforce partners section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('howSalesforceTitle')}</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] xl:w-[90%]">{t('howSalesforceDesc')}</p>
                                {
                                    salesforceData.map((data, ind) => {
                                        return (
                                            <div
                                                className="md:flex mt-24 md:mt-[40px] py-[34px] xl:py-[46px] px-[26px] 
                                                           md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative 
                                                           md:ml-[90px] sm:w-[80%] md:w-auto lg:w-[80%] xl:w-auto 4xl:w-[80%]"
                                                key={ind}>
                                                <p
                                                    className={`md:absolute md:flex items-center
                                                                max-md:mt-[-65px] sm:mt-[-70px] md:mt-0
                                                                md:top-1/2 md:-translate-y-1/2 md:left-[-80px]
                                                                bg-[#006FBE] text-white font-semibold
                                                                4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]
                                                                px-[20px] py-[15px] leading-tight
                                                                 xl:w-[270px] md:w-[340px] ${enActive ? "4xl:w-[300px]" : "md:h-[80px] xl:h-[95px] 4xl:w-[350px]"} w-fit`}>
                                                    {data.title}
                                                </p>

                                                <div
                                                    className={`4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]
                                                                font-medium my-auto max-md:mt-8
                                                                md:ml-[300px] xl:ml-[240px]  ${enActive ? "4xl:ml-[260px]" : "4xl:ml-[300px]"}`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>
                                        )
                                    })
                                }

                                <p className="md:mt-[63px] mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('howSalesforceDesc2')}</p>
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] 4xl:w-[1200px] sm:w-[80%] md:w-full">
                                    {
                                        salesforceStratergies.map((elem, id) => {
                                            return (
                                                <div className="4xl:p-[30px] p-[22px] border border-[#707070]" key={id}>
                                                    <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070]">{elem.title}</h3>
                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <p className="md:mt-[47px] mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('howSalesforceDesc3')}</p>

                            </div>

                            {/* maximize section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    maximizeData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                {
                                                    data.list.map((elem, id) => (
                                                        <div key={id}>
                                                            <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.title}</h3>
                                                            {
                                                                elem.descArr?.map((item, i) => (
                                                                    <div key={i}>
                                                                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{item.desc}</p>
                                                                        {
                                                                            item.steps &&
                                                                            <UnorderedList arrName={item.steps} ulClassName={`mt-5 list-disc pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-2`} />
                                                                        }
                                                                        {
                                                                            item.desc2 && <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{item.desc2}</p>
                                                                        }
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* trusted section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    trustedData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: data.desc }} />
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2}</p>

                                                <div className="grid lg:grid-cols-3 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] lg:mt-[48px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full 4xl:w-[1050px]">
                                                    {
                                                        data.list.map((data, ind) => {
                                                            return (
                                                                <div key={ind} className={`mt-5 ${(ind == 1 || ind == 2 || ind == 4) ? "lg:px-[32px] border-[#707070] lg:border-l max-lg:border-b max-lg:pb-5 max-lg:last:border-0" : ""} ${ind == 3 ? "lg:pr-[32px] max-lg:border-b max-lg:pb-5 border-[#707070]" : ""} ${ind == 0 ? "lg:pr-[40px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-md:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                                    <h4 className="4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] font-bold">{data.title}</h4>
                                                                    <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p className="mt-[40px] lg:mt-[80px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc3}</p>

                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* build section */}
                            <div className="xl:mt-[38px] mt-[33px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('buildTitle')}</h2>
                                {
                                    buildData.map((data, ind) => {
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