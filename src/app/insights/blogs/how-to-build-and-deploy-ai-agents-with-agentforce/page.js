"use client";
import Image from "next/image";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Build and Deploy Your First AI Agent with Agentforce",
    "description": "This step-by-step guide shows how to build and deploy AI agents in Salesforce Agentforce without coding, using visual tools, templates, and workflows.",
    "image": "https://www.rialtes.com/images/blog/first-ai-agent-desktop-banner.webp",
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
        "@id": "https://www.rialtes.com/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce/"
    },
    "datePublished": "2025-09-02",
    "mainEntity": {
        "@type": "FAQPage",
        "name": "Building and Deploying AI Agents in Agentforce FAQs",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Agentic AI and why does it matter?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Agentic AI goes beyond simple automation. It enables agents to reason, plan, act, and adapt—essentially acting as digital coworkers rather than bots."
                }
            },
            {
                "@type": "Question",
                "name": "Can I build AI agents in Salesforce without coding?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Agentforce Agent Builder offers a drag-and-drop, low-code interface to build AI agents using templates, workflows, and prompt builder tools."
                }
            },
            {
                "@type": "Question",
                "name": "What are the steps to build and deploy an AI agent in Agentforce?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The process includes defining the agent’s purpose, setting up Agentforce, structuring logic with Agent Builder, training the agent, building conversations, integrating systems, testing, and deploying."
                }
            },
            {
                "@type": "Question",
                "name": "What kind of AI agents can be built with Agentforce?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can build customer support agents, sales assistants, HR and recruitment bots, finance agents, IT helpdesk bots, marketing agents, and compliance monitors."
                }
            },
            {
                "@type": "Question",
                "name": "How do I keep my AI agent effective after deployment?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ensure continuous learning with new data, run regular security reviews, add integrations as needs evolve, and monitor key performance metrics like resolution rates and user satisfaction."
                }
            }
        ]
    }
}

export default function Page() {
<<<<<<<< HEAD:src/app/[locale]/insights/blogs/first-ai-agent/page.js
    const t = useTranslations('firstAiAgent')
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { blogs, stepToGuideData, agentBuilderData, componentsData, actionsData, typesOfAgents } = blogsContent.firstAiAgent;
    const fullUrl = "https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters";
========
    const fullUrl = "https://www.rialtes.com/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce";
>>>>>>>> old-origin/develop:src/app/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce/page.js

    return (
        <div className="min-h-screen">
            <Seo
                title="How to Deploy AI Agents in Salesforce Agentforce | Rialtes"
                description="Ready to automate with AI? Use this step-by-step guide to build AI agents in Agentforce by Salesforce without coding or expensive systems."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce/"
                }
            />

            <Script
                id="schema-copilots"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/first-ai-agent-desktop-banner.webp"
                        alt="ai that listens"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/first-ai-agent-mob-banner.webp"
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
                        <div className="flex flex-col md:flex-row justify-between text-black items-center  xl:max-w-[1084px] xl:w-[1084px]">
                            <div className="sm:mb-0 mb-6">
<<<<<<<< HEAD:src/app/[locale]/insights/blogs/first-ai-agent/page.js
                                <span className="text-[#0092E0]">{t('blogTopic')}</span>{" "}
                                <span className="text-[#ACACAC]"> | </span>25 July 2025
========
                                <span className="text-[#0092E0]">Artificial Intelligence</span>{" "}
                                <span className="text-[#ACACAC]"> | </span>02 September 2025
>>>>>>>> old-origin/develop:src/app/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce/page.js
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-6">
                                    <div className="max-w-[40px]">
                                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
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
                                        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
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
                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('mainData')}</p>
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('mainData2')}</p>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('agentforceTitle')}</h2>

                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('agentforceDesc')}</p>
                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('agentforceDesc2')}</p>
                            <ul className="list-disc marker:text-black marker:text-xl text-black pr-14 4xl:pr-0 xl:pr-0 mt-2 space-y-3 text-[16px] xl:text-[18px] 4xl:text-[20px] font-medium pl-[26px]">
                                {
                                    agentBuilderData.map((data, ind) => {
                                        return (
                                            <li key={ind}><h4 className="inline text-[16px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px]">{data.title}</h4>{data.desc}</li>
                                        )
                                    })
                                }
                            </ul>
                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('agentforceDesc3')}</p>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('stepsTitle')}</h2>
                            {
                                stepToGuideData.map((data, ind) => {
                                    return (
                                        <div key={ind}>
                                            <h3 className="text-[16px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px] mt-7 font-bold">{data.step}</h3>
                                            {data.desc && <p className="mt-1 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc}</p>}
                                            <UnorderedList arrName={data.list} ulClassName="list-disc marker:text-black marker:text-xl text-black pr-14 4xl:pr-0 xl:pr-0 mt-2 space-y-1 text-[16px] xl:text-[18px] 4xl:text-[20px] font-medium pl-[30px]" liClassName="" />
                                        </div>
                                    )
                                })
                            }

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('componentsTitle')}</h2>
                            {
                                componentsData.map((data, ind) => {
                                    return (
                                        <div key={ind}>
                                            <h3 className="text-[16px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px] mt-7 font-bold">{data.title}</h3>
                                            {data.desc && <p className="mt-2 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc}</p>}
                                            <ul className="list-disc marker:text-black marker:text-xl text-black pr-14 4xl:pr-0 xl:pr-0 mt-2 space-y-3 text-[16px] xl:text-[18px] 4xl:text-[20px] font-medium pl-[30px]">

                                                {
                                                    data.list.map((elem, id) => {
                                                        return (
                                                            <li key={id}><h4 className="inline text-[16px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px]">{elem.title}: </h4>{elem.desc}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            {data.desc2 && <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc2}</p>}
                                        </div>
                                    )
                                })
                            }

                            <h3 className="text-[16px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px] mt-7 font-bold">{t('actionsTitle')}</h3>
                            <p className="mt-1 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('actionsDesc')}</p>
                            <UnorderedList arrName={actionsData} ulClassName="mt-3 list-disc 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[30px] space-y-2" liClassName="" />

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('typeTitle')}</h2>
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('typeDesc')}</p>
                            <ul className="list-decimal marker:text-black marker:text-xl text-black pr-14 4xl:pr-0 xl:pr-0 mt-2 space-y-3 text-[16px] xl:text-[18px] 4xl:text-[20px] font-medium pl-[26px]">
                                {
                                    typesOfAgents.map((data, ind) => {
                                        return (
                                            <li key={ind}><h4 className="inline text-[16px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px]">{data.title}</h4>- {data.desc}</li>
                                        )
                                    })
                                }
                            </ul>
                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('futureTitle')}</h2>
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('futureDesc')}</p>
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('futureDesc2')}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Latest Blogs */}
            <div className="custom-container lg:pr-0 pb-10 mt-3">
                <BlogsCarousel slides={blogs} />
            </div>
        </div>
    )
}