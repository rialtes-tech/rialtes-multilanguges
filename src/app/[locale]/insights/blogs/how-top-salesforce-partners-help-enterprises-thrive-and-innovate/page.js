"use client";
import Image from "next/image";
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
import useUrl from "@/app/[locale]/components/useUrl";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'


export default function Page() {
    const t = useTranslations('salesforcePartners')
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { salesforcePartnersHelp, partners, whatQualifies, businessGrowth, keyBenefits, partnerQualities, enterpriseCRM, partneringtomorrow, faqs, salesforcePara3 } = blogsContent.salesforcePartners;
    const fullUrl = "https://www.rialtes.com/insights/blogs/how-top-salesforce-partners-help-enterprises-thrive-and-innovate";
    const currUrl = useUrl();
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "How Top Salesforce Partners Help Enterprises Thrive and Innovate | Rialtes",
        "description": "Top Salesforce partners help enterprises thrive by aligning technology with business growth, accelerating innovation, and ensuring long-term value.",
        "image": "https://www.rialtes.com/images/blog/top-salesforce-partners-help-enterprises-thrive.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/how-top-salesforce-partners-help-enterprises-thrive-and-innovate/"
        },
        "datePublished": "2025-10-10",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "Top Salesforce Partners and Enterprise Growth FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Who are the top Salesforce partners for enterprises?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Top Salesforce partners are Crest or Summit-level consulting firms recognized for proven expertise, successful implementations, and innovation. Rialtes, as a Salesforce Crest Partner, is one of them."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do Salesforce partners help business growth?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Salesforce partners customize CRM solutions, enable AI-driven insights, automate workflows, and provide ongoing optimization, helping enterprises improve efficiency, reduce costs, and unlock new revenue opportunities."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are enterprise CRM solutions, and why are they important?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Enterprise CRM solutions connect sales, marketing, service, and data into one unified platform. They help businesses manage customer relationships at scale, improve decision-making, and deliver personalized experiences."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why should an enterprise choose a Salesforce Crest Partner?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Crest Partners are recognized for advanced certifications, high customer satisfaction scores, and proven industry expertise. They deliver complex, large-scale Salesforce solutions with lower risk and faster ROI."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is Rialtes considered one of the best Salesforce consulting partners?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Rialtes combines Salesforce expertise with industry-specific knowledge and a co-innovation approach. As a Crest Partner, Rialtes has delivered enterprise CRM solutions across multiple industries, helping clients thrive and innovate."
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
                keywords=""
                canonical={
                    " https://www.rialtes.com/insights/blogs/how-top-salesforce-partners-help-enterprises-thrive-and-innovate/"
                }
            />

            <Script
                id="schema-copilots"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/top-salesforce-partners-help-enterprises-thrive.webp"
                        alt="banner image"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/salesforce-consulting-mobile-banner.webp"
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
                        <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="10 October 2025" />
                        {/* date and icons */}


                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight"> {t("salesforceTitle")}</h1>

                            <div className="xl:mt-[38px] mt-[33px]">
                                {
                                    salesforcePartnersHelp.map((data, ind) => {
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

                            {/* who are the top Salesforce Partners section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t("salesforceSubTitle")}</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("salesforcePara1")}
                                </p>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("salesforcePara2")}</p>

                                <div className="grid md:grid-cols-3 xl:mt-[68px] mt-[30px]">
                                    {
                                        partners.map((data, ind) => {
                                            return (

                                                <div key={ind} className="px-4 py-4">
                                                    <div className=" w-32 h-32 relative mb-4">
                                                        <Image
                                                            src={data.image}
                                                            alt={data.badge || "Salesforce Partner Logo"}
                                                            layout="fill"
                                                            objectFit="contain"
                                                        />
                                                    </div>
                                                    <h3 className="4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] font-bold md:mt-6 mt-4">{data.title}</h3>
                                                    <p className="md:mt-2 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.description}</p>
                                                </div>


                                            )
                                        })
                                    }
                                </div>



                                <h2 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-[48px] xl:mt-[80px] font-bold">{t("topSalesforce")}</h2>

                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full">
                                    {
                                        whatQualifies.map((data, ind) => {
                                            return (
                                                <div key={ind} className={`mt-[48px] ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-md:border-b max-md:pb-5" : ""} ${ind == 3 ? "lg:pl-[32px] border-[#707070] lg:border-l" : ""} ${ind == 0 ? "lg:pr-[40px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-md:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                    <h3 className="4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] font-bold text-[#006FBE] ">{data.title}</h3>
                                                    <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] md:mb-4">{data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-[40px] xl:mt-[80px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                    dangerouslySetInnerHTML={{ __html: salesforcePara3 }} />


                            </div>


                            {/* Salesforce Partners Business Growth section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("businessTitle")}
                                </h2>

                                {businessGrowth.map((section, index) => {
                                    return (
                                        <div key={index} className="mb-10 ">
                                            <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-5 font-bold">
                                                {section.title}
                                            </h3>

                                            {section.paragraphs?.map((para, idx) => (
                                                <p key={idx} className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: para }} />


                                            ))}

                                            {section.list && (
                                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                                    {section.list.map((item, i) => (
                                                        <li key={i} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{item}</li>
                                                    ))}
                                                </ul>
                                            )}

                                            {section.afterList && (
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-relaxed">{section.afterList}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Key Benefits section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t("keyBenefitsTitle")}</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {t("keyBenefitsPara")}</p>

                                {
                                    keyBenefits.map((data, ind) => {
                                        return (
                                            <div
                                                className={`md:flex mt-24 md:mt-10 py-[34px] 2xl:py-[46px] xl:py-[40px] px-[26px] 
                                                            border border-[#707070] relative 
                                                           md:ml-[90px] sm:w-[80%]  lg:w-[80%] xl:w-[86%] 4xl:w-[86%] 2xl:w-[80%]
                                                           ${locale === "es"
                                                            ? "md:pr-[44px] 4xl:pr-[70px] 2xl:pr-[55px] xl:pr-[30px] 4xl:w-[92%] 4xl:py-[56px] 2xl:w-[87%] xl:w-[92%] md:w-[86%] md:py-[46px]  "
                                                            : locale === "fr"
                                                                ? "md:pr-[44px] 4xl:pr-[40px] 2xl:pr-[40px] xl:pr-[30px] 4xl:w-[99%] 4xl:py-[56px] 2xl:w-[92%] xl:w-[94%] md:py-[46px] md:w-[86%]  "
                                                                : "md:pr-[44px] 4xl:pr-[80px] 2xl:pr-[60px] xl:pr-[40px] md:w-[79%]"
                                                        }`}
                                                key={ind}>
                                                <h3
                                                    className={`md:absolute md:flex items-center justify-start
                                                                max-md:mt-[-80px] sm:mt-[-70px] md:mt-0
                                                                md:top-1/2 md:-translate-y-1/2 md:left-[-80px]
                                                                bg-[#006FBE] text-white font-semibold
                                                                4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]
                                                                px-[30px] py-[22px] leading-tight
                                                                  w-fit  2xl:h-[100px] xl:h-[90px]
                                                                 ${locale === "es"
                                                            ? "4xl:h-[120px] 4xl:w-[380px] 2xl:w-[360px] xl:w-[320px] md:w-[310px]"
                                                            : locale === "fr"
                                                                ? "4xl:h-[120px] 4xl:w-[360px] 2xl:w-[340px] xl:w-[320px] md:w-[310px] "
                                                                : "4xl:h-[100px] 4xl:w-[340px] 2xl:w-[320px] xl:w-[300px] md:w-[290px]"
                                                        }`}>
                                                    {data.title}
                                                </h3>

                                                <div
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]
                                                                font-medium my-auto max-md:mt-8
                                                                md:ml-[230px] xl:ml-[260px] 4xl:ml-[310px] 2xl:ml-[300px] "
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>


                                        )
                                    })
                                }
                                <p className="mt-[34px] xl:mt-[49px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {t("keyBenefitsPara2")}</p>
                            </div>

                            {/* Best Salesforce Consultant Partners section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t("consultantTitle")}</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {t('consultantPara')}</p>

                                {partnerQualities.map((section, index) => {
                                    return (
                                        <div key={index} className="mb-8">
                                            <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-5 font-bold leading-tight">
                                                {section.title}
                                            </h3>

                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                {section.paragraph}
                                            </p>
                                            {Array.isArray(section.list) && (
                                                <ul className="list-disc pl-[36px] mt-4 space-y-2">
                                                    {section.list.map((item, i) => (
                                                        <li key={i}>
                                                            <p className="font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">
                                                                {item.title}
                                                            </p >
                                                            <p className="mt-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">
                                                                {item.description}
                                                            </p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}


                                        </div>
                                    );
                                })}
                            </div>


                            {/* Crest Partners section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t("crestTitle")}</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {t("crestPara1")}
                                </p>

                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                    {enterpriseCRM.map((item, index) => (
                                        <li key={index}>
                                            <h3 className="mr-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 font-bold inline ">{item.title}</h3>
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item.description}</p>
                                        </li>
                                    ))}
                                </ul>


                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {t("crestPara2")}
                                </p>
                            </div>


                            {/* Partnering for tomorrow section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('partneringTitle')}</h2>

                                <div className="xl:mt-[30px] mt-[33px]">
                                    {
                                        partneringtomorrow.map((data, ind) => {
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
                </div>
            </section>
            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t("faqTitle")}</h2>
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