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
    "headline": "Conversational AI in Real Estate: Scale Resident Support Without Adding Staff",
    "description": "Discover how conversational AI helps property management teams scale resident support without adding staff. Learn how AI chatbots and voice assistants handle tenant interactions, reduce tickets, and improve satisfaction in real estate operations.",
    "image": "https://www.rialtes.com/images/blog/conversational-ai-in-real-estate.webp",
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
        "@id": " https://www.rialtes.com/insights/blogs/conversational-ai-in-real-estate-scale-resident-support/"
    },
    "datePublished": "2025-10-20",
    "mainEntity": {
        "@type": "FAQPage",
        "name": "Conversational AI in Real Estate FAQs",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is conversational AI in property management?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Conversational AI in property management uses intelligent chatbots and virtual assistants to manage resident interactions like rent inquiries, maintenance requests, and lease renewals through natural, human-like conversations integrated with backend systems."
                }
            },
            {
                "@type": "Question",
                "name": "Can chatbots really handle complex resident requests?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Modern conversational AI platforms go beyond simple rule-based bots. They use NLP and ML to interpret intent, access multiple data sources, and trigger workflows like maintenance updates or billing notifications automatically."
                }
            },
            {
                "@type": "Question",
                "name": "How does conversational AI reduce support tickets in real estate?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI reduces repetitive support tickets by instantly resolving common queries such as rent payments, maintenance scheduling, or amenity access. Many property firms see a 30–40% drop in ticket volume after implementing AI-driven automation."
                }
            },
            {
                "@type": "Question",
                "name": "What’s the ROI of using conversational AI for property management?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Conversational AI delivers ROI through lower operational costs, faster issue resolution, and improved resident satisfaction. Property managers typically save up to 25% in customer service costs while increasing tenant retention."
                }
            },
            {
                "@type": "Question",
                "name": "Is conversational AI secure enough for resident communication?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Enterprise-grade conversational AI systems comply with standards like GDPR and SOC 2, encrypt data, anonymize sensitive information, and enforce access controls to ensure secure and private resident communication."
                }
            },
            {
                "@type": "Question",
                "name": "How can a property company get started with conversational AI?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Start by identifying high-volume repetitive interactions like rent confirmations or maintenance tracking. Then implement a platform such as Exelona, which offers AI-enabled property operations, CRM + ERP integration, and conversational AI capabilities built for real estate."
                }
            }
        ]
    }
}

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/conversational-ai-in-real-estate-scale-resident-support/";
    const currUrl = useUrl()
    const t = useTranslations("conversationalAi");
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
    });

    const { mainData, traditionalData, whyConversationalData, keyBenefitsData, conversationalAI, howConversationalData, implementationData, whatData, faqs } = blogsContent.conversationalAi

    return (
        <section className="min-h-screen">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/conversational-ai-in-real-estate-scale-resident-support//"
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
                        src="/images/blog/conversational-ai-in-real-estate.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/conversational-ai-in-real-estate-mobile.webp"
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('blogCategory')}</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>20 October 2025
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
                                                className={`${ind == 2 ? "" : "mt-5"} 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                dangerouslySetInnerHTML={{ __html: data }}
                                            />
                                        )
                                    })
                                }
                            </div>

                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    traditionalData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] 4xl:w-[1200px] sm:w-[80%] md:w-full">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <div className="4xl:p-[30px] p-[22px] border border-[#707070]" key={id}>
                                                                    <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070]">{elem.title}</h3>
                                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.desc}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p
                                                    className={`mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* why conversational section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('conversationalTitle')}</h2>
                                {
                                    whyConversationalData.map((data, ind) => {
                                        return (
                                            <p
                                                key={ind}
                                                className={`${ind == 0 ? "mt-[22px] xl:mt-[30px]" : "mt-5"} 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                dangerouslySetInnerHTML={{ __html: data }}
                                            />
                                        )
                                    })
                                }

                            </div>

                            {/* key benefits section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    keyBenefitsData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <ol className="space-y-4 mt-5">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <li key={id} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">
                                                                    <h3 className="mt-5 font-bold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">{id + 1}. {elem.title} </h3>
                                                                    <UnorderedList arrName={elem.desc} ulClassName="mt-2 space-y-3 pl-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" />
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ol>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* conversational section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    conversationalAI.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <UnorderedList arrName={data.desc} ulClassName="mt-[22px] xl:mt-[30px] space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                                <div className="mt-[60px]">
                                                    {
                                                        data.list.map((data, ind) => {
                                                            return (
                                                                <div
                                                                    className="md:flex mt-24 md:mt-[28px] py-[34px] xl:py-[36px] px-[26px] 
                                                           md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative 
                                                           md:ml-[90px] sm:w-[80%] md:w-auto"
                                                                    key={ind}>
                                                                    <p className="md:absolute md:flex items-center
                                                                max-md:mt-[-65px] sm:mt-[-70px] md:mt-0
                                                                md:top-1/2 md:-translate-y-1/2 md:left-[-80px]
                                                                bg-[#006FBE] text-white font-semibold
                                                                4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]
                                                                px-[20px] py-[15px] leading-tight
                                                                4xl:w-[200px] xl:w-[180px] md:w-[200px] w-fit">
                                                                        {data.title}
                                                                    </p>

                                                                    <div className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]
                                                                font-medium my-auto max-md:mt-8
                                                                md:ml-[150px] xl:ml-[150px] 4xl:ml-[160px]"
                                                                        dangerouslySetInnerHTML={{ __html: data.desc }}
                                                                    />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>


                            {/*how conversational section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    howConversationalData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />

                                                <div className="grid lg:grid-cols-3 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] lg:mt-[48px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full 4xl:w-[1400px]">
                                                    {
                                                        data.list.map((data, ind) => {
                                                            return (
                                                                <div key={ind} className={`mt-5 ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-lg:border-b max-lg:pb-5 max-lg:last:border-0" : ""} ${ind == 0 ? "lg:pr-[40px] 4xl:pr-0 md:border-b lg:border-0 border-[#707070] max-md:border-b max-lg:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                                    <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{data.title}</h3>
                                                                    <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[84%]">{data.desc}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p
                                                    className={`mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />

                                            </div>
                                        )
                                    })
                                }
                            </div>


                            {/* implementation section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    implementationData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />

                                                <div className="grid xl:grid-cols-5 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] md:mt-[48px] gap-y-[40px] md:gap-x-[60px] lg:gap-[40px] sm:w-[80%] md:w-full xl:w-[1100px] 4xl:w-[1450px]">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <div key={id}>
                                                                    <span className="bg-[#0C8AED] w-12 h-12 flex items-center justify-center rounded-full text-white font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                                        {id + 1}
                                                                    </span>
                                                                    <h3 className="mt-[30px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.title}</h3>
                                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]">{elem.desc}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* what section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    whatData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                {
                                                    data.desc.map((elem, ind) => {
                                                        return (
                                                            <p
                                                                key={ind}
                                                                className={`${ind == 0 ? "mt-[22px] xl:mt-[30px]" : "mt-5"} 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                                dangerouslySetInnerHTML={{ __html: elem }}
                                                            />
                                                        )
                                                    })
                                                }
                                                <UnorderedList arrName={data.list} ulClassName={`mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-3 list-disc`} />
                                                <p
                                                    key={ind}
                                                    className={`${ind == 0 ? "mt-[22px] xl:mt-[30px]" : "mt-5"} 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
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

