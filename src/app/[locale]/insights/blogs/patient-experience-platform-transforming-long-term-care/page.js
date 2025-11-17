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
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';

export default function Page() {
    const t = useTranslations('patientExperience')
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { blogMainData, whyPatientData, faqData, fromDiagnosisSection, chronicData, medianaRedData, digitalPatientData, buildingData, howMedianaData } = blogsContent.patientExperience;
    const fullUrl = "https://www.rialtes.com/insights/blogs/patient-experience-platform-transforming-long-term-care/";
    const currUrl = useUrl()

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Patient Experience Platform Transforming Long-Term Care | MediAIna by Rialtes",
        "description": "A patient experience platform becomes essential, helping healthcare providers deliver continuity, coordination, and personalized care at scale.",
        "image": "https://www.rialtes.com/images/blog/patient-experience-platform-mediAIna-transforming-long-term-care.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/patient-experience-platform-transforming-long-term-care/"
        },
        "datePublished": "2025-10-07",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "Patient Experience Platform in Healthcare FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is a patient experience platform in healthcare?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A patient experience platform is a digital solution that connects clinical, operational, and engagement touchpoints into one seamless journey. It ensures patients receive coordinated care, clear communication, and continuous support from diagnosis through long-term management."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does a patient experience platform improve long-term patient care?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "By integrating chronic care management, digital engagement, and monitoring tools, platforms like MediAIna provide care continuity. This reduces readmissions, strengthens adherence, and empowers patients to actively manage their health."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is digital patient engagement important in chronic care management?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Digital patient engagement helps patients stay connected to providers through reminders, two-way communication, remote monitoring, and access to personalized resources. It turns long-term care into a proactive, patient-driven journey."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does MediAIna support the integrated healthcare journey?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The MediAIna patient journey platform unifies data, communication, and care pathways across providers, payers, MedTech, and life sciences enterprises. It delivers chronic care management solutions, predictive insights, and compliant innovation for better outcomes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What makes MediAIna healthcare different from other platforms?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Unlike point solutions, MediAIna healthcare is designed as a comprehensive ecosystem. Backed by Rialtes’ LifeAI+ consulting suite, it offers scalability, AI-driven intelligence, and compliance—making it ideal for complex, long-term patient care."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do digital tools support the diagnosis-to-care management journey?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Digital tools for long-term patient care simplify transitions by offering personalized care pathways, educational resources, and continuous check-ins. They ensure patients don’t get lost between diagnosis, treatment, and follow-up stages."
                    }
                }
            ]
        }
    }

    return (
        <section className="min-h-screen"> 
            <Seo
                title={t("seoTitle")}
                description={t("seoDescription")}
                canonical={`https://www.rialtes.com/${locale}/insights/blogs/patient-experience-platform-transforming-long-term-care/`}
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
                        src="/images/blog/patient-experience-platform-mediAIna-transforming-long-term-care.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/patient-experience-platform-mediAIna-transforming-long-term-care-mobile.webp"
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
                        <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="07 October 2025" />

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

                            {/* why patient section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    whyPatientData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                {
                                                    data.desc.map((elem, id) => {
                                                        return (
                                                            <p
                                                                key={id}
                                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
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

                            {/* from diagnosis section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    fromDiagnosisSection.map((data, id) => {
                                        return (
                                            <div key={id}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <UnorderedList arrName={data.list} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* chronic care section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    chronicData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                {
                                                    data.desc.map((elem, id) => {
                                                        return (
                                                            <p
                                                                key={id}
                                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
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

                            {/* digital patient section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    digitalPatientData.map((data, id) => {
                                        return (
                                            <div key={id}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <UnorderedList arrName={data.list} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* mediana redifining section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('medianaTitle')}</h2>
                                <p
                                    className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                    dangerouslySetInnerHTML={{ __html: blogsContent.patientExperience.medianaDesc }}
                                />


                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('medianaDesc2')}</p>
                                {
                                    medianaRedData.map((data, ind) => {
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
                                                                md:ml-[220px] xl:ml-[210px] 4xl:ml-[320px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>


                                        )
                                    })
                                }
                                <p className="mt-[34px] xl:mt-[49px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('medianaDesc3')}</p>
                            </div>

                            {/* how mediana section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    howMedianaData.map((data, id) => {
                                        return (
                                            <div key={id}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />

                                                <div className="grid md:grid-cols-2 grid-cols-1 gap-[80px]">
                                                    {
                                                        data.listData.map((elem, id) => {
                                                            return (
                                                                <div key={id}>
                                                                    <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] mt-[48px] font-bold">{elem.listTitle}</h3>
                                                                    <UnorderedList arrName={elem.list} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-4" />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p className="4xl:mt-[40px] mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                            </div>
                                        )
                                    })}
                            </div>

                            {/* building section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    buildingData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                {
                                                    data.desc.map((elem, id) => {
                                                        return (
                                                            <p
                                                                key={id}
                                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
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

                        </div>
                    </div>
                </div>
            </section>

            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('faqTitle')}</h2>
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