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

const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Connected Care Ecosystems: Pharma & MedTech’s Digital Future | Rialtes",
    "description": "A connected care ecosystem empowers Pharma & MedTech with predictive alerts, chronic disease management, and remote monitoring for better healthcare outcomes.",
    "image": "https://www.rialtes.com/images/blogs/connected-care-ecosystem.webp",
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
        "@id": " https://www.rialtes.com/insights/blogs/connected-care-ecosystem-pharma-medtech/"
    },
    "datePublished": "2025-09-18",
    "mainEntity": {
        "@type": "FAQPage",
        "name": "Connected Care Ecosystems in Pharma & MedTech FAQs",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is a connected care ecosystem in healthcare?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A connected care ecosystem links patients, providers, payers, Pharma, and MedTech companies into one integrated digital framework. It ensures real-time data sharing, continuity of care, and better patient outcomes across the entire healthcare journey."
                }
            },
            {
                "@type": "Question",
                "name": "Why are connected care ecosystems important for Pharma and MedTech?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "They help organizations move beyond siloed systems. Pharma and MedTech companies gain real-time insights, accelerate clinical trials, and improve compliance while delivering patient-first digital healthcare experiences."
                }
            },
            {
                "@type": "Question",
                "name": "How do connected care ecosystems improve patient engagement?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "By enabling digital patient engagement in daily healthcare, ecosystems give patients access to personalized apps, remote monitoring, virtual consultations, and timely reminders, all of which boost adherence and trust."
                }
            },
            {
                "@type": "Question",
                "name": "What role do connected ecosystems play in long-term patient care?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "They power long-term patient care management strategies such as chronic disease monitoring, remote care, and predictive alerts. This prevents complications and reduces costs while ensuring continuous care outside hospital walls."
                }
            },
            {
                "@type": "Question",
                "name": "How is MediAIana different from other digital health platforms?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MediAIana goes beyond digital patient portals. It integrates clinical, operational, and digital touchpoints across the healthcare ecosystem, powered by Rialtes’ LifeAI+. It’s built for compliance, scalability, and innovation in life sciences and MedTech."
                }
            },
            {
                "@type": "Question",
                "name": "How do connected ecosystems support digital transformation in life sciences?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "They enable reimagining digital patient journeys in life sciences by creating seamless experiences across clinical trials, therapies, and care delivery, empowering organizations to innovate faster and deliver human-centered healthcare."
                }
            }
        ]
    }
}

export default function Page() {
    const t = useTranslations('connectedCore')
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { mainData, whyConnectedData, patientCenterData, longTermData, reimaginingData, medianaData, benefitsData, competitiveData, bettingData, faqs } = blogsContent.connectedCore;
    const fullUrl = "https://www.rialtes.com/insights/blogs/connected-care-ecosystem-pharma-medtech";
    const currUrl = useUrl();

    return (
        <section className="min-h-screen">
            <Seo
                title="Connected Care Ecosystems: Future for Pharma and MedTech | Rialtes"
                description="Discover how a connected care ecosystem helps Pharma and MedTech with predictive alerts, chronic care, and remote monitoring for better outcomes."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/connected-care-ecosystem-pharma-medtech/"
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
                        src="/images/blog/connected-care-ecosystem.webp"
                        alt="banner image"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/connected-care-ecosystem-mobile.webp"
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
                    <div className="4xl:col-span-9 xl:col-span-10 lg:col-span-11">

                        {/* date and icons */}
                        <div className="sm:flex justify-between">
                            <div>
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('blogTopic')}</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>18 September 2025
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

                            {/* why connected section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    whyConnectedData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <h3
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight"
                                                    dangerouslySetInnerHTML={{ __html: data.listDesc }}
                                                />
                                                <ul className="pl-[36px] lg:pl-[56px] space-y-4 mt-5">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium">
                                                                    <h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.title} </h4>{elem.description}
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                <p
                                                    className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />
                                            </div>

                                        )
                                    })
                                }

                            </div>

                            {/* patient at the center section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">{t('patientTitle')}</h2>
                                <div className="mt-[29px] xl:mt-[34px]">
                                    {
                                        patientCenterData.map((data, ind) => {
                                            return (

                                                <p
                                                    key={ind}
                                                    className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data }}
                                                />

                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {/* long term section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">{t('longTermTitle')}</h2>
                                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('longTermDesc')}</p>

                                {
                                    longTermData.map((data, ind) => {
                                        return (
                                            <div className="md:flex mt-24 md:mt-10 py-[34px] xl:py-[46px] px-[26px] md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative md:ml-[90px] sm:w-[80%] md:w-auto lg:w-[80%] xl:w-auto" key={ind}>
                                                <h3 className="md:absolute max-md:mt-[-80px] sm:mt-[-70px] md:mt-0 md:top-[50%] md:translate-y-[-50%] 4xl:w-[300px] xl:w-[280px] md:w-[240px] w-fit md:left-[-80px] bg-[#006FBE] text-white font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] px-[40px] py-[22px] leading-tight">{data.title}</h3>
                                                <div className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[180px] xl:ml-[210px] 4xl:ml-[240px]" dangerouslySetInnerHTML={{ __html: data.desc }} />
                                            </div>

                                        )
                                    })
                                }

                                <p className="mt-[30px] xl:mt-[49px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('longTermDesc2')}</p>

                            </div>

                            {/* reimagining section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    reimaginingData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {data.desc2}</p>
                                                <div className="mt-5 space-y-4">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <div key={id}>
                                                                    <p className={`pb-2 md:w-[80%] lg:w-[70%] 4xl:w-[80%] ${id != 3 && "border-[#707070] border-b"} 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium`}>{elem}
                                                                    </p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {data.desc3}</p>

                                            </div>

                                        )
                                    })
                                }

                            </div>

                            {/* mediana redefining section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    medianaData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <h3 className="mt-5 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]"> {data.desc2}</h3>
                                                <div className="mt-[30px] lg:mt-[49px] grid lg:grid-cols-3 md:grid-cols2 grid-cols-1 lg:gap-[60px] gap-y-[40px] sm:w-[80%] md:w-[90%] lg:w-[950px] xl:w-[1100px] 4xl:w-[1200px]">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <div key={id} className="4xl:w-[85%]">
                                                                    <h4 className="font-semibold text-[#0092E0] 4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] pb-3 border-b border-[#707070]">{elem.title}</h4>

                                                                    <p className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium`}>{elem.description}
                                                                    </p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p className="mt-[62px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {data.desc3}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                            {/* benefits section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('benefitsTitle')}</h2>
                                <p className={`mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}>{t('benefitsDesc')}</p>
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-[60px] lg:gap-x-0 max-lg:gap-y-[24px] sm:w-[80%] md:w-[90%] lg:w-[950px] xl:w-[1100px] 4xl:w-[1200px] xl:mt-[44px] mt-[30px]">
                                    {
                                        benefitsData.map((data, ind) => {
                                            return (
                                                <div key={ind} className={`${ind == 0 ? "lg:pr-[24px]" : "lg:px-[34px]"} ${ind == 3 ? "lg:pr-0 max-lg:border-b-0 max-lg:pb-0" : ""} ${ind == 2 && "md:border-b-0"} max-lg:pb-3 max-lg:border-b lg:first:border-0 lg:border-l border-[#707070]`}>
                                                    <h3 className="pb-3 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold"> {data.title}</h3>
                                                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] lg:w-[80%]"> {data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-[62px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] border p-4 border-[#006FBE] lg:w-[950px] xl:w-[1000px] 4xl:w-[1100px]">{t('benefitsDesc2')}</p>

                            </div>

                            {/* competitive Edge section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    competitiveData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p className={`mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}>{data.desc}</p>
                                                <p className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}>{data.desc2}</p>

                                                <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-4 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                                <p className={`mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}>{data.desc3}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                            {/* betting section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">{t('bettingTitle')}</h2>
                                <div className="mt-[29px] xl:mt-[34px]">
                                    {
                                        bettingData.map((data, ind) => {
                                            return (
                                                <p key={ind} className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`} dangerouslySetInnerHTML={{ __html: data }} />
                                            )
                                        })
                                    }
                                </div>
                            </div>


                            {/* faq section */}
                            <div className="xl:mt-[80px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('faqTitle')}</h2>
                                <div className="mt-[29px] xl:mt-[34px]">
                                    <FAQAccordion faqData={faqs} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* blog carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section>
    )
}