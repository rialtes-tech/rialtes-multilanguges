"use client";
import Image from "next/image";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.rialtes.com/insights/blogs/how-agentforce-3-is-reshaping-automotive-manufacturing/"
    },
    "headline": "Discover How Salesforce Agentforce 3.0 is Reshaping Automotive Manufacturing in Real-time",
    "description": "Agentforce for automotive brings intelligent automation to factory floors—delivering real-time visibility, predictive quality, and scalable AI-driven operations across automotive manufacturing.",
    "image": "https://www.rialtes.com/images/blog/agentforce-3.0-desktop-banner.webp",
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
    "datePublished": "2025-07-29",
    "articleSection": "AI Automation",
    "url": "https://www.rialtes.com/insights/blogs/how-agentforce-3-is-reshaping-automotive-manufacturing/",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is Agentforce for Automotive?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Agentforce for Automotive is Salesforce’s AI-powered solution tailored for automotive manufacturers. It automates and optimizes key workflows across production, supply chain, quality, and compliance using Agentforce 3.0."
            }
        },
        {
            "@type": "Question",
            "name": "What makes Agentforce 3.0 valuable for automotive manufacturers?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Agentforce 3.0 brings intelligent automation to every part of the automotive factory floor, offering real-time visibility, predictive insights, smart agent coordination, and prebuilt industry workflows."
            }
        },
        {
            "@type": "Question",
            "name": "How does Agentforce integrate with existing automotive systems?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Agentforce for automotive integrates with ERP, MES, PLM, and IoT systems using Model Context Protocol, MuleSoft APIs, and Heroku AppLink, ensuring seamless connectivity with legacy and custom tools."
            }
        },
        {
            "@type": "Question",
            "name": "What use cases exist for Agentforce in automotive?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use cases include automated inspection summaries, predictive maintenance triggers, parts shortage alerts, service appointment agents, warranty claims validation, and AI-powered quality control agents."
            }
        },
        {
            "@type": "Question",
            "name": "What is the future of AI in automotive manufacturing?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI is transforming the automotive industry through smart factory automation, autonomous operations, adaptive supply chains, in-vehicle intelligence, and AI-driven diagnostics. Agents will play a pivotal role in this future."
            }
        }
    ]
};


export default function Page() {
    const t = useTranslations("remagineEnterprise");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { blogs, faqs, tableData, benefits, agenticData, aiThinksData, humansData,manufacturingDesc2 } = content.remagineEnterprise
    const fullUrl = "https://www.rialtes.com/insights/blogs/how-ai-is-powering-the-sustainable-future-of-our-planet";

    return (
        <div className="min-h-screen bg-white">
            {/* <Seo
                title=""
                description=""
                canonical={"  https://www.rialtes.com/insights/blogs/how-agentforce-3-is-reshaping-automotive-manufacturing/"}
            />

            <Script
                id="schema-discover"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            /> */}
            <section className="relative  h-[350px] md:h-[400px]  4xl:h-[600px] 2xl:h-[500px]">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/blog/reimagine-banner.webp"
                        alt="Discover AgentExchange"
                        fill
                        priority
                    />
                </div>

                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/blog/reimagine-mobile-banner.webp"
                        alt="Discover AgentExchange"
                        fill
                        priority
                    />
                </div>
            </section>

            <section className="custom-container">
                <div className="pt-10 bg-white">
                    <div className=" mx-auto">
                        <div className="flex flex-col md:flex-row justify-between text-black items-center max-w-[1084px] xl:w-[1084px]">
                            <div className="sm:mb-0 mb-6">
                                <span className="text-[#0092E0]">{t('blogTopic')}</span>
                                <span className="text-[#ACACAC]"> | </span>{t('date')}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-6">
                                    <div className="max-w-[40px]">
                                        <a
                                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                                                fullUrl
                                            )}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                                            target="_blank"
                                            rel="noopener noreferrer">
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
                                        <a
                                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                                fullUrl
                                            )}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                                            target="_blank"
                                            rel="noopener noreferrer">
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
                    <div className=" mx-auto">
                        <h1 className="text-[#000000] leading-tight text-[26px] 2xl:text-[48px] 4xl:text-[60px] xl:text-[42px] md:text-[28px] xl:w-[1000px] 4xl:w-[1150px] pb-6">
                            {t('blogTitle')}
                        </h1>
                    </div>

                    <div className="mx-auto">
                        <div className="max-w-[1200px] 4xl:w-[1284px] 2xl:w-[950px] xl:w-[850px]">
                            <div className="py-6 "></div>
                            <h2 className=" pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                                {t('manufacturingTitle')}
                            </h2>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                                {t('manufacturingDesc')}
                            </p>
                            {
                                manufacturingDesc2.map((data, ind) => {
                                    return (
                                        <p
                                            key={ind}
                                            className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data }}
                                        />
                                    )
                                })
                            }

                            <div className="py-6 "></div>

                            <h2 className=" pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                                {t('agenticAiTitle')}
                            </h2>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                {t('agenticAiDesc')}
                            </p>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                {t('agenticAiDesc2')}
                            </p>

                            <ol className="list-disc pl-[25px] lg:pl-[32px] marker:text-xl text-black 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-5">
                                {
                                    agenticData.map((data, ind) => {
                                        return (
                                            <li key={ind}><h4 className=" font-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">{data.title}</h4>
                                                {" "}  {data.desc}
                                            </li>
                                        )
                                    })
                                }
                            </ol>

                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mt-5">
                                {t('agenticAiDesc3')}
                            </p>


                            <h2 className=" pb-4 mt-10 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                                {t('howEnterpriseTitle')}
                            </h2>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                {t('howEnterpriseDesc')}
                            </p>


                            <h3 className=" pb-4 font-semibold  4xl:text-[26px] 2xl:text-[22px] xl:text-[20px] text-[20px] leading-tight mt-3">
                                {t('keyTitle')}
                            </h3>
                            <div className="space-y-8">
                                {benefits.map((item, index) => (
                                    <div key={index} className="pl-[8px] lg:pl-[17px] flex items-start gap-4">
                                        <div className="flex-shrink-0 w-2 h-2 mt-2 bg-black rounded-full"></div>
                                        <div>
                                            <h4 className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">
                                                {item.title}
                                            </h4>
                                            <p className="mt-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 className="mt-10 pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                                {t('agenticAiGenTitle')}
                            </h2>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                {t('agenticAiGenDesc')}
                            </p>

                            <div className="mt-5">
                                <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
                                    <table className="w-full text-sm text-left border-collapse">
                                        <thead className="bg-gradient-to-r from-[#0092E0] to-indigo-600 text-white text-base">
                                            <tr>
                                                <th className="px-6 py-4"> </th>
                                                <th className="px-6 py-4">{t('tableTitle')}</th>
                                                <th className="px-6 py-4">{t('tableTitle2')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData.map((row, idx) => (
                                                <tr
                                                    key={idx}
                                                    className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                                                        } hover:bg-blue-50 transition`}
                                                >
                                                    <td className="px-6 py-4 font-semibold">
                                                        {row.label}
                                                    </td>
                                                    <td className="px-6 py-4 ">{row.genAI}</td>
                                                    <td className="px-6 py-4">{row.agentAI}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <p className="text-black mt-10 pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                {t('agenticAiGenDesc2')}
                            </p>


                            <h2 className=" pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] mt-10 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                                {t('aiThinksTitle')}
                            </h2>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                {t('aiThinksDesc')}
                            </p>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                {t('aiThinksDesc2')}
                            </p>
                            {
                                aiThinksData.map((data, ind) => {
                                    return (
                                        <div key={ind}>
                                            <h4 className="mt-5 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">{data.title}</h4>
                                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mt-3">
                                                {data.desc}
                                            </p>
                                        </div>
                                    )
                                })
                            }

                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                {t('aiThinksDesc3')}
                            </p>

                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                {t('aiThinksDesc4')}
                            </p>
                            <h2 className=" pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] mt-10 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                                {t('humansTitle')}
                            </h2>
                            {
                                humansData.map((data, ind) => {
                                    return (
                                        <p key={ind} className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                            {data}
                                        </p>
                                    )
                                })
                            }
                            <h2 className="pb-4 2xl:text-[24px] font-medium text-[#0092E0] 4xl:text-[30px]  xl:text-[21px] text-[23px] mt-16">
                                {t('faqTitle')}
                            </h2>
                        </div>
                    </div>
                </div>
            </section >

            <section className="custom-container max-md:px-0 pb-10">
                <FAQAccordion faqData={faqs} />
            </section>
            <div
                className="custom-container xl:pr-0 mt-10">
                <BlogsCarousel slides={blogs} />
            </div>
        </div>
    );
}
