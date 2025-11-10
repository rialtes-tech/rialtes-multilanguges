"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import FilteredBlogCarouse from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How to Build and Deploy Your First AI Agent with Agentforce",
  "description": "This step-by-step guide shows how to build and deploy AI agents in Salesforce Agentforce without coding, using visual tools, templates, and workflows.",
  "image": "https://www.rialtes.com/images/blog/artificial-intelligence-data-visualization.webp",
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
  const t = useTranslations("firstAiAgent");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
    stepToGuideData,
    agentBuilderData,
    componentsData,
    actionsData,
    typesOfAgents,
  } = blogsContent.firstAiAgent;
  const fullUrl = "https://www.rialtes.com/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce";
  const currUrl = useUrl();

  return (
    <div className="min-h-screen">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords="Partners, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce/`}
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
            src="/images/blog/artificial-intelligence-data-visualization.webp"
            alt={t("bannerAlt")}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/artificial-intelligence-data-visualization-mobile.webp"
            alt={t("bannerAlt")}
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
            <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="02 September 2025" />
            {/* main blog */}

            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>

              <div className="xl:mt-[38px] mt-[33px]">
                {" "}
                <p className="mt-5  4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("mainData")}
                </p>
                <p className="mt-5  4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("mainData2")}
                </p>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("agentforceTitle")}
                </h2>

                <p className="mt-[29px] xl:mt-[34px]  4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("agentforceDesc")}
                </p>
                <p className="mt-5  4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("agentforceDesc2")}
                </p>
                <ul className="list-disc marker:text-black marker:text-xl mt-2 space-y-3 4xl:text-[20px] xl:text-[17px] text-[16px] font-medium pl-[36px] lg:pl-[56px]">
                  {agentBuilderData.map((data, ind) => {
                    return (
                      <li key={ind}>
                        <h4 className="inline 4xl:text-[22px] text-[18px] leading-tight">
                          {data.title}
                        </h4>
                        {data.desc}
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-5  4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("agentforceDesc3")}
                </p>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("stepsTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[34px]">
                  {stepToGuideData.map((data, ind) => {
                    return (
                      <div key={ind}>
                        <h3 className="4xl:text-[22px] text-[18px] leading-tight mt-7 font-bold">
                          {data.step}
                        </h3>
                        {data.desc && (
                          <p className="mt-1  4xl:text-[20px] xl:text-[17px] text-[16px]">
                            {data.desc}
                          </p>
                        )}
                        <UnorderedList
                          arrName={data.list}
                          ulClassName="list-disc marker:text-black marker:text-xl text-black  mt-2 space-y-1 4xl:text-[20px] xl:text-[17px] text-[16px] font-medium pl-[36px] lg:pl-[56px]"
                          liClassName=""
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("componentsTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[34px]">
                  {componentsData.map((data, ind) => {
                    return (
                      <div key={ind}>
                        <h3 className="4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] mt-7 font-bold">
                          {data.title}
                        </h3>
                        {data.desc && (
                          <p className="mt-2 4xl:text-[20px] xl:text-[17px] text-[16px]">
                            {data.desc}
                          </p>
                        )}
                        <ul className="list-disc marker:text-black marker:text-xl text-black  mt-2 space-y-3 4xl:text-[20px] xl:text-[17px] text-[16px] font-medium pl-[36px] lg:pl-[56px]">
                          {data.list.map((elem, id) => {
                            return (
                              <li key={id}>
                                <h4 className="inline 4xl:text-[22px] text-[18px] leading-tight">
                                  {elem.title}:{" "}
                                </h4>
                                {elem.desc}
                              </li>
                            );
                          })}
                        </ul>
                        {data.desc2 && (
                          <p className="mt-3 4xl:text-[20px] xl:text-[17px] text-[16px]">
                            {data.desc2}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <h3 className="4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] mt-7 font-bold">
                  {t("actionsTitle")}
                </h3>
                <p className="mt-1  4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("actionsDesc")}
                </p>
                <UnorderedList
                  arrName={actionsData}
                  ulClassName="mt-3 list-disc 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[36px] lg:pl-[56px] space-y-2"
                  liClassName="text-black font-medium"
                />
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("typeTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("typeDesc")}
                </p>
                <ul className="list-decimal pl-[26px] lg:pl-[32px] marker:text-black marker:text-xl  mt-2 space-y-3 4xl:text-[20px] xl:text-[17px] text-[16px] font-medium ">
                  {typesOfAgents.map((data, ind) => {
                    return (
                      <li className="" key={ind}>
                        <h4 className="inline 4xl:text-[22px] text-[18px] leading-tight ">
                          {data.title}
                        </h4>
                        - {data.desc}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("futureTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("futureDesc")}
                </p>
                <p className="mt-5  4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("futureDesc2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarouse url={currUrl} />
      </section>
    </div>
  );
}
