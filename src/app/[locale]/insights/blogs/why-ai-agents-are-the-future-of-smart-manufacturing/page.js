"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
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
    "headline": "Beyond Robotic Automation: Why Agents Are the Future of Smart Manufacturing",
    "description": "Agentforce brings in autonomous agents that close the gap between production and experience. That means fewer silos, faster decisions, and smarter systems.",
    "image": "https://www.rialtes.com/images/blog/byond-robotics-desktop-baner.webp",
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
        "@id": " https://www.rialtes.com/insights/blogs/why-ai-agents-are-the-future-of-smart-manufacturing/"
    },
    "datePublished": "2025-09-01",
    "mainEntity": {
        "@type": "FAQPage",
        "name": "Smart Manufacturing with AI Agents FAQs",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What makes AI agents better than RPA in manufacturing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "RPA handles repetitive tasks based on rules. AI agents understand context, learn from data, and act across systems like ERP, CRM, and IoT—making them better suited for dynamic manufacturing challenges."
                }
            },
            {
                "@type": "Question",
                "name": "Can I keep my existing automation setup and add Agentforce?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Agentforce enhances what you already use by layering intelligence over existing systems. You don’t need to rip and replace."
                }
            },
            {
                "@type": "Question",
                "name": "What kinds of manufacturing processes benefit most from AI agents?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When augmented by agents, customer service, production scheduling, maintenance, order fulfillment, quality control, and supply chain monitoring all see major gains."
                }
            },
            {
                "@type": "Question",
                "name": "How long does deploying Agentforce in a real-world factory take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Timelines vary, but most manufacturers start seeing value within weeks by starting with one or two focused use cases—like service case automation or supply chain alerts."
                }
            },
            {
                "@type": "Question",
                "name": "Is Agentforce secure for regulated industries like aerospace or pharma?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Built on Salesforce, Agentforce adheres to enterprise-grade security standards and can be configured to comply with industry-specific regulations."
                }
            }
        ]
    }
}

export default function Page() {
    const t = useTranslations('beyondRobotics')
    const currUrl = useUrl()
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { blogMainData, whyNeedShiftData, agentforceData, manufacturingAreasData, agentforceTable, agenticData, readyToUpgradeData, faqData } = blogsContent.beyondRobotics
    const fullUrl = "https://www.rialtes.com/insights/blogs/why-ai-agents-are-the-future-of-smart-manufacturing/";

    return (
        <div className="min-h-screen">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/why-ai-agents-are-the-future-of-smart-manufacturing/"
                }
            />

            <Script
                id="schema-copilots"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] h-[350px] sm:h-[500px] lg:h-[650px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/byond-robotics-desktop-baner.webp"
                        alt="ai that listens"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/byond-robotics-mobile-banner.webp"
                        alt="ai that listens"
                        priority
                        height={0}
                        width={0}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>

            <section className="custom-container">
                <div className="py-10 bg-white">
                    <div>
                        <div className="flex flex-col md:flex-row justify-between text-black items-center xl:max-w-[1084px] xl:w-[1084px]">
                            <div className="sm:mb-0 mb-6">
                                <span className="text-[#0092E0]">{t('blogTopic')}</span>{" "}
                                <span className="text-[#ACACAC]"> | </span>01 September 2025
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-6">
                                    <div className="max-w-[40px]">
                                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                                            fullUrl
                                        )}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            {" "}
                                            <Image
                                                src="/images/case-studies/linkedin.svg"
                                                alt="LinkedIn"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                priority
                                            />
                                        </a>
                                    </div>
                                    <div className="max-w-[40px]">
                                        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                            fullUrl
                                        )}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            {" "}
                                            <Image
                                                src="/images/case-studies/twitter.svg"
                                                alt="Twitter"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                priority
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6"></div>
                    <div className="grid xl:grid-cols-12">
                        <div className="xl:col-span-10 col-span-12">
                            <h1 className="text-[#000000]  pb-6 leading-tight text-[26px] xl:text-[42px] 2xl:text-[48px] 4xl:text-[60px] md:text-[28px]">
                                {t('blogTitle')}
                            </h1>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12">
                        <div className="col-span-9">
                            <h3 className="text-[16px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px] mt-2 font-bold max-[335px]:mr-[30px]">{t('roboticTitle')}</h3>
                            {
                                blogMainData.map((data, ind) => {
                                    return (
                                        <p key={ind} className="mt-3 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data}</p>
                                    )
                                })
                            }

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[21px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('whyNeedTitle')}</h2>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('whyNeedDesc')}</p>
                            <p className="mt-1 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('whyNeedDesc2')}</p>
                            <UnorderedList arrName={whyNeedShiftData} ulClassName="mt-3 list-disc 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[30px] space-y-2 font-medium max-[335px]:mr-[30px]" liClassName="" />
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('whyNeedDesc3')}</p>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[21px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('agentforceTitle')}</h2>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('agentforceDesc')}</p>
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]"><strong>{t('agentforceDesc2')}, </strong>{t('agentforceDesc3')}</p>
                            <UnorderedList arrName={agentforceData} ulClassName="mt-3 list-disc 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[30px] space-y-2 font-medium max-[335px]:mr-[30px] " liClassName="" />
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('manufacturingTitle')}</p>
                            {
                                manufacturingAreasData.map((data, ind) => {
                                    return (
                                        <div className="xl:pl-[15px]" key={ind}>
                                            <h3 className="text-[16px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px] mt-8 font-bold max-[335px]:mr-[30px]">{ind + 1}. {data.title}</h3>
                                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]  ">{data.desc}</p>
                                            {data.desc3 && <p className="mt-1 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] ">{data.desc3}</p>}
                                            {
                                                data.list && <UnorderedList arrName={data.list} ulClassName="mt-3  list-disc font-medium 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[30px] space-y-2 max-[335px]:mr-[30px]" liClassName="" />
                                            }
                                            {data.desc2 && <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]  ">{data.desc2}</p>}
                                        </div>
                                    )
                                })
                            }

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[21px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('whatAgentforceTitle')}</h2>
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('whatAgentforceDesc')}</p>
                            <div className="w-full max-w-3xl mx-auto py-10">
                                <div className="overflow-x-auto">
                                    <table className="w-full border border-gray-300 text-left text-sm md:text-base ">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="border border-gray-300 max-[335px]:p-[9px] p-3 font-semibold">
                                                    {t('tableTitle')}
                                                </th>
                                                <th className="border border-gray-300 p-3 max-[335px]:p-[9px] font-semibold">
                                                    {t('tableTitle2')}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {agentforceTable.map((row, idx) => (
                                                <tr key={idx}>
                                                    <td className="border border-gray-300 p-3 max-[335px]:p-[9px]">{row.robotic}</td>
                                                    <td className="border border-gray-300 p-3 max-[335px]:p-[9px]">{row.agents}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <p className="mt-1 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('whatAgentforceDesc2')}</p>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('whatAgentforceDesc3')}</p>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[21px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('agenticTitle')}</h2>
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('agenticDesc')}</p>
                            <ul className="mt-4 list-disc 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[30px] max-[335px]:mr-[15px] space-y-2 font-medium">
                                {agenticData.map((item, idx) => {
                                    const [before, ...afterParts] = item.desc.split(item.highlight);
                                    const after = afterParts.join(item.highlight);
                                    return (
                                        <li key={idx}>
                                            {before}
                                            <strong>{item.highlight}</strong>
                                            {after}
                                        </li>
                                    );
                                })}
                            </ul>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('agenticDesc2')}</p>

                            <h2 className="pb-3 font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[21px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('readyTitle')}</h2>
                            {
                                readyToUpgradeData.map((data, ind) => {
                                    return (
                                        <p className="mt-2 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] " key={ind}>{data}</p>
                                    )
                                })
                            }
                            <p className="mt-1 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] font-bold">{t('readyDesc')}</p>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[21px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('faqTitle')}</h2>
                            <FAQAccordion faqData={faqData} />
                        </div>
                    </div>
                </div>
            </section>
            {/* blog carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </div>
    )
}
