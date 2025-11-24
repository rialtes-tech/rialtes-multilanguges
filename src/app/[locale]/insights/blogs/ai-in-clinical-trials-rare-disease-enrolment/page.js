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
    const fullUrl = "https://www.rialtes.com/insights/blogs/ai-in-clinical-trials-rare-disease-enrolment/";
    const currUrl = useUrl()
    const t = useTranslations("aiClinical");
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
    });
    const { mainData, challenges, faqData, fromData, futureData, mediainaData, commonData } = blogsContent.aiClinical

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "5 Proven Ways AI Accelerates Patient Enrolment in Rare Disease Clinical Trials",
        "description": "This post explains five proven ways AI accelerates patient enrolment in rare disease clinical trials — from automated recruitment and clinical automation to digital enrolment, precision matching, and AI-driven engagement. It also highlights how MediAIna, Rialtes’ digital patient journey platform, is redefining clinical research.",
        "image": "https://www.rialtes.com/images/blogs/digital-touchscreen-technology.webp",
        "author": {
            "@type": "Organization",
            "name": "Rialtes",
            "url": "https://www.rialtes.com"
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
            "@id": "https://www.rialtes.com/insights/blogs/ai-in-clinical-trials-rare-disease-enrolment/"
        },
        "datePublished": "2025-11-20",
        "articleSection": [
            "Clinical Trials",
            "AI in Healthcare",
            "Rare Disease",
            "Digital Patient Journeys"
        ],
        "keywords": "AI in clinical trials, rare disease enrolment, patient recruitment, digital enrolment, MediAIna, clinical trial automation",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "Improve Patient Enrolment in Rare Disease Clinical Trials using AI - FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How does AI improve patient enrolment in rare disease clinical trials?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI makes it easier to identify and match eligible patients by analyzing large datasets from electronic health records, genetic information, and patient registries. This speeds up rare disease patient recruitment and reduces trial delays."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What role does AI play in digital trial enrolment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "With digital trial enrolment, AI streamlines onboarding through automated eligibility screening, remote consent, and virtual touchpoints. This reduces paperwork and makes participation easier for patients, especially those in remote or underserved regions."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is patient recruitment for rare disease studies so challenging?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Rare diseases affect small, dispersed populations, making it hard to locate eligible participants. Strict criteria and geographic limitations add complexity, which is why AI-driven patient recruitment strategies are critical for improving efficiency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does AI ensure trial efficiency and reduce costs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI-powered clinical trial automation accelerates enrolment, monitors patient data in real time, and predicts potential dropouts. This lowers administrative costs while improving trial outcomes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can AI help with long-term patient engagement in rare disease trials?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Beyond enrolment, AI healthcare solutions keep patients engaged through personalized communication, reminders, and remote monitoring, ensuring they remain active participants throughout the trial."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the role of machine learning in trials?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Machine learning in trials enables predictive analytics, identifying patients who are most likely to qualify and remain compliant. It also helps researchers adapt protocols in real time to maximize trial success."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does MediAIna support digital enrolment for rare disease studies?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "MediAIna, Rialtes’ patient journey platform, simplifies digital enrolment for rare disease studies by integrating AI, automation, and compliance features. It enables smarter recruitment, continuous engagement, and human-centered digital patient journeys for life sciences organizations."
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
                canonical={
                    `https://www.rialtes.com/${locale}/insights/blogs/ai-in-clinical-trials-rare-disease-enrolment/`
                }
            />

            <Script
                id="schema-clinical"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/digital-touchscreen-technology.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/digital-touchscreen-technology-mobile.webp"
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
                        <div className="sm:flex justify-between">
                            <div>
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">MediAIna</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>20 November 2025
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

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

                            {/* challenges section */}
                            {
                                challenges.map((data, ind) => (
                                    <div key={ind} className="md:mt-[50px] mt-[40px]">
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p
                                            className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />

                                        {
                                            data.data.map((data, ind) => {
                                                return (
                                                    <div className="md:flex mt-24 md:mt-10 py-[34px] md:py-[60px] 4xl:py-[50px] px-[26px] md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative md:ml-[90px] sm:w-[80%] md:w-auto xl:w-[1000px] 4xl:w-[1150px]" key={ind}>
                                                        <h3 className={`md:absolute max-md:mt-[-80px] sm:mt-[-70px] md:mt-0 md:top-[50%] md:translate-y-[-50%] 4xl:w-[250px] xl:w-[240px] md:w-[240px] w-fit md:left-[-80px] bg-[#006FBE] text-white font-semibold 4xl:text-[22px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] px-[30px] py-[22px] leading-tight lg:h-[100px]`}><span className={`${(ind == 3 || ind == 2) ? "xl:w-[90%] xl:block" : ""}`}>{data.title}</span></h3>
                                                        <div className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[180px] xl:ml-[180px] 4xl:ml-[190px]" dangerouslySetInnerHTML={{ __html: data.desc }} />
                                                    </div>

                                                )
                                            })
                                        }
                                        <UnorderedList arrName={data.desc2} ulClassName="space-y-4 mt-10 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                    </div>
                                ))
                            }

                            {/* common data */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">How AI Solves the Patient Enrolment Challenge in Rare Disease Clinical Trials</h2>
                                {
                                    commonData.map((data, ind) => (
                                        <div key={ind}>
                                            <h3 className="mt-10 font-semibold text-[#0092E0] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">{ind + 1}. {data.title}</h3>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-[29px] xl:mt-[30px] md:pl-[20px] space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                            <p className="mt-[29px] xl:mt-[30px]  md:pl-[20px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            {
                                                data.desc3 && <p className="mt-[29px] xl:mt-[30px]  md:pl-[20px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />
                                            }
                                        </div>
                                    ))
                                }
                            </div>

                            {/* mediaina section */}
                            {
                                mediainaData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="mt-[29px] xl:mt-[30px] space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <div className="grid lg:grid-cols-4 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full xl:w-[1000px] 4xl:w-[1300px]">
                                            {
                                                data.list.map((data, ind) => {
                                                    return (
                                                        <div key={ind} className={`mt-5 ${(ind == 1 || ind == 2 || ind == 3) ? "lg:px-[30px] border-[#707070] lg:border-l max-lg:border-b max-lg:pb-5 max-lg:last:border-0" : ""} ${ind == 0 ? "lg:pr-[40px] 4xl:pr-0 md:border-b lg:border-0 border-[#707070] max-md:border-b max-lg:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""} ${(ind == 2) ? "md:border-b-0" : ""}`}>
                                                            <h3 className={`4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold ${ind == 0 && "w-[90%]"}`}>{data.title}</h3>
                                                            <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[84%]">{data.desc}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <UnorderedList arrName={data.desc2} ulClassName="mt-10 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                    </div>
                                ))
                            }

                            {/* future section */}
                            {
                                futureData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p
                                            className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />
                                        <ul className="pl-[36px] space-y-2 list-disc font-medium">
                                            {
                                                data.list.map((elem, id) => (
                                                    <li key={id} className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        <span className="font-bold">{elem.title}</span>{" "}{elem.desc}
                                                    </li>
                                                ))
                                            }
                                        </ul>

                                        <p
                                            className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                    </div>
                                ))
                            }

                            {/* from section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('fromTitle')}</h2>
                                {
                                    fromData.map((data, ind) => {
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
                    <FAQAccordion faqData={faqData} />
                </div>
            </section>

            {/* blog carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section >
    )
}