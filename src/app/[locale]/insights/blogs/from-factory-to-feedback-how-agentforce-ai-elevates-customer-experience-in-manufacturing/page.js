"use client";
import Image from "next/image";
import Link from "next/link";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
const schemaData = {

    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "From Factory to Feedback: How Agentforce AI Elevates Customer Experience in Manufacturing",
    "description": "Agentforce for manufacturers reimagines Customer Experience with AI agents that predict disruptions, automate resolutions, and deliver smarter, seamless customer journeys.",
    "image": " https://www.rialtes.com/images/blog/factory-banner.webp",
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
        "@id": "https://www.rialtes.com/insights/blogs/from-factory-to-feedback-how-agentforce-ai-elevates-customer-experience-in-manufacturing/"
    },
    "datePublished": "2025-08-22",

    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is Agentforce, and how does it help manufacturers improve customer experience?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Agentforce is an AI-powered platform built on Salesforce that enables manufacturers to deploy intelligent agents across sales, service, and operations. These agents monitor real-time data, predict customer-impacting issues, automate responses, and personalize engagement."
            }
        },
        {
            "@type": "Question",
            "name": "How does Agentforce detect and respond to problems before customers complain?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Agentforce connects to ERP, CRM, and IoT systems to monitor operational signals like machine downtime, delivery delays, or part shortages. When a risk is detected, AI agents automatically notify account managers, trigger alerts, and in some cases, inform customers before the issue escalates."
            }
        },
        {
            "@type": "Question",
            "name": "Can Agentforce be integrated with existing systems like Salesforce CPQ or Manufacturing Cloud?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Agentforce is natively built for Salesforce and integrates seamlessly with tools like Salesforce CPQ, Service Cloud, Manufacturing Cloud, and even third-party systems. It enhances existing workflows without requiring a complete system overhaul."
            }
        },
        {
            "@type": "Question",
            "name": "How does Agentforce improve case resolution in manufacturing service centers?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Agentforce uses AI agents to triage, route, and auto-fill service tickets based on priority, product history, and customer profile. It reduces resolution time by directing cases to the right reps or resolving simple issues autonomously."
            }
        },
        {
            "@type": "Question",
            "name": "Is Agentforce suitable for small and mid-sized manufacturing businesses, or just enterprises?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Agentforce scales easily across businesses of all sizes. For mid-sized manufacturers looking to modernize without large IT investments, it offers modular deployment, so you can start small and expand as you grow."
            }
        },
        {
            "@type": "Question",
            "name": "What kind of ROI can manufacturers expect from using Agentforce?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "While ROI varies by use case, manufacturers typically see measurable gains in first-response times, reduced service costs, and improved Net Promoter Scores (NPS). More importantly, Agentforce boosts customer loyalty by making every interaction faster, more informed, and more human."
            }
        },
        {
            "@type": "Question",
            "name": "Is Agentforce secure and compliant for regulated industries?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Agentforce adheres to Salesforce’s enterprise-grade security protocols and can be deployed in compliance with industry regulations like ISO, SOC 2, and HIPAA, making it suitable for manufacturers in aerospace, medical devices, automotive, and more."
            }
        }
    ]

}

export default function Page() {
    const t = useTranslations('factoryToFeedback')
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { blogs, faqs, mainData, bestAiToolsDesc, bestAiToolsData, intelligentDesc, intelligentData, businessData, postSaleData, postSaleData2, consistencyData, readyData } = blogsContent.factoryToFeedback;
    const fullUrl = "https://www.rialtes.com/insights/blogs/how-ai-is-powering-the-sustainable-future-of-our-planet";

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Agentforce for Manufacturers: Smart AI for CX | Rialtes"
                description="With AI-driven visibility and automation, Agentforce for manufacturers reimagines CX, creating smarter, proactive, and seamless customer journeys."
                canonical={"https://www.rialtes.com/insights/blogs/from-factory-to-feedback-how-agentforce-ai-elevates-customer-experience-in-manufacturing/"}
            />

            <Script
                id="schema-discover"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <section className="relative  h-[350px] md:h-[400px]  4xl:h-[600px] 2xl:h-[500px]">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/blog/factory-banner.webp"
                        alt="Discover AgentExchange"
                        fill
                        priority
                    />
                </div>

                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/blog/small-mobile-banner.webp"
                        alt="Discover AgentExchange"
                        fill
                        style={{ objectFit: "cover" }}
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
                                <span className="text-[#ACACAC]"> | </span>22 August 2025
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-6">
                                    <div className="max-w-[40px]">
                                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                                            target="_blank"
                                            rel="noopener noreferrer" >
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
                                        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                                            target="_blank"
                                            rel="noopener noreferrer" >
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
                        <h1 className="text-[#000000] leading-tight text-[26px] 2xl:text-[48px] 4xl:text-[60px] xl:text-[42px] md:text-[28px] 
                         xl:w-[1000px] 4xl:w-[1150px] pb-6">
                            {t('blogTitle')}
                        </h1>
                    </div>

                    <div className="mx-auto">
                        <div className="max-w-[1200px] 4xl:w-[1284px] 2xl:w-[950px] xl:w-[850px] mt-5">
                            {
                                mainData?.map((data, ind) => {

                                    return (
                                        <div key={ind}>
                                            <h2 className=" pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                                                {data.title}
                                            </h2>
                                            {
                                                data.desc.map((elem, id) => {
                                                    return (
                                                        <p key={id} className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">
                                                            {elem}
                                                        </p>
                                                    )
                                                })
                                            }
                                            <div className="py-3"></div>
                                        </div>
                                    )
                                })
                            }

                            <h3 className="pb-4 font-semibold 4xl:text-[26px] 2xl:text-[22px] xl:text-[20px] text-[20px] leading-tight">
                                {t('bestAiToolsTitle')}
                            </h3>
                            {
                                bestAiToolsDesc.map((data, ind) => {
                                    return (
                                        <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] pl-[24px]" key={ind}>
                                            {data}
                                        </p>
                                    )
                                })
                            }
                            <UnorderedList arrName={bestAiToolsData} ulClassName="list-disc marker:text-xl space-y-5 pl-4 mt-4 text-black 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium pl-[56px]" />

                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mt-5">
                                {t('bestAiToolsDesc2')}
                            </p>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                {t('bestAiToolsDesc3')}
                            </p>

                            <h3 className=" pb-4 font-semibold 4xl:text-[26px] 2xl:text-[22px] xl:text-[20px] text-[20px] leading-tight mt-10">
                                {t('aiToolTitle')}
                            </h3>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] pl-[24px]">
                                {t('aiToolDesc')}
                            </p>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] pl-[24px]">
                                {t('aiToolDesc2')}
                            </p>
                            <h3 className=" pb-4 font-semibold  4xl:text-[26px] 2xl:text-[22px] xl:text-[20px] text-[20px] leading-tight mt-10">
                                {t('intelligentTitle')}
                            </h3>
                            {
                                intelligentDesc.map((data, ind) => {
                                    return (
                                        <p key={ind} className="text-black ml-[24px] pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                            {data}
                                        </p>
                                    )
                                })
                            }

                            <ul className="list-disc marker:text-xl pl-[56px] text-black 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium space-y-5">
                                {
                                    intelligentData.map((data, ind) => {
                                        return (
                                            <li><h4 className="font-bold inline 4xl:text-[18px] 2xl:text-[16px] xl:text-[15px] text-[16px]">{data.title}</h4>{data.desc}</li>
                                        )
                                    })
                                }
                            </ul>

                            <h3 className=" pb-4 font-semibold  4xl:text-[26px] 2xl:text-[22px] xl:text-[20px] text-[20px] leading-tight mt-10">
                                {t('businessTitle')}
                            </h3>
                            <UnorderedList arrName={businessData} ulClassName="list-disc marker:text-xl pl-[32px] text-black 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium space-y-3" />

                            <h3 className=" pb-4 font-semibold  4xl:text-[26px] 2xl:text-[22px] xl:text-[20px] text-[20px] leading-tight mt-10">
                                {t('postSaleTitle')}
                            </h3>

                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] pl-[24px]">
                                {t('postSaleDesc')}
                            </p>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] pl-[24px]">
                                {t('postSaleDesc2')}
                            </p>
                            <UnorderedList arrName={postSaleData} ulClassName="list-disc marker:text-xl pl-[56px] mt-4 text-black 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium space-y-3" />

                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mt-10 pl-[24px]">
                                {t('postSaleDesc3')}
                            </p>
                            <UnorderedList arrName={postSaleData2} ulClassName="list-disc marker:text-xl pl-[56px] mt-2 text-black 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium space-y-3" />

                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mt-7 pl-[24px]">
                                {t('postSaleDesc4')}
                            </p>

                            <h3 className="pb-4 font-semibold 4xl:text-[26px] 2xl:text-[22px] xl:text-[20px] text-[20px] leading-tight mt-10">
                                {t('consistencyTitle')}
                            </h3>


                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] pl-[24px]">
                                {t('consistencyDesc')}
                            </p>

                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] pl-[24px]">
                                {t('consistencyDesc2')}
                            </p>
                            <UnorderedList arrName={consistencyData} ulClassName="list-disc marker:text-xl pl-[56px] mt-4 text-black 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium space-y-3" />

                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mt-7 pl-[24px]">
                                {t('consistencyDesc3')}
                            </p>

                            <h2 className=" pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] mt-10 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                                {t('aiThinksTitle')}
                            </h2>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                {t('aiThinkDesc')}
                            </p>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                {t('aiThinkDesc2')}
                            </p>

                            <h2 className=" pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] mt-10 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                                {t('readyTitle')}
                            </h2>

                            <h3 className=" pb-4 font-semibold 4xl:text-[26px] 2xl:text-[22px] xl:text-[20px] text-[20px] leading-tight mt-3">
                                {t('readySubTitle')}
                            </h3>

                            <UnorderedList arrName={readyData} ulClassName="list-disc marker:text-xl pl-[34px] mt-4 text-black 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium space-y-3" />

                            <p className="text-black pb-4 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                                {t('rialtesTalkDesc')}
                                <Link className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"
                                    href={"https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/"}>
                                    <span>{t('rialtesTalkLink')}</span>
                                </Link> {t('rialtesTalkDesc2')},
                            </p>

                            <h2 className="pb-4 2xl:text-[24px] font-medium text-[#0092E0] 4xl:text-[30px] xl:text-[21px] text-[23px] mt-10">
                                {t('faqTitle')}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

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
