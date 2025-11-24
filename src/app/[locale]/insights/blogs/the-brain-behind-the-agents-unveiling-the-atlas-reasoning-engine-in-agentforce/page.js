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
  const fullUrl = "https://www.rialtes.com/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce";
  const currUrl = useUrl()
  const t = useTranslations("brainBehind");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });

  const { mainData, quickCommonData, faqData, howAtlasData, whyAtlasCommonData, keyData, businessData, rialtesData } = blogsContent.brainBehind


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Why Is the Atlas Reasoning Engine the Brain of Agentforce? | Rialtes",
    "description": "The Atlas Reasoning Engine acts as the intelligent brain of Agentforce, enabling agents to understand goals, reason through decisions, and deliver smarter support.",
    "image": "https://www.rialtes.com/images/blogs/digital-brain-ai-circuit-technology-illustration.webp",
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
      "@id": " https://www.rialtes.com/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce/"
    },
    "datePublished": "2024-10-21",
    "dateModified": "2025-11-19",
    "mainEntity": {
      "@type": "FAQPage",
      "name": "Atlas Reasoning Engine in Agentforce FAQs",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Atlas Reasoning Engine in Agentforce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Atlas Reasoning Engine is the decision-making core inside Salesforce Agentforce that helps AI agents understand user goals, reason through complex situations, and choose the right next action autonomously."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Atlas Reasoning Engine work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It follows a reasoning cycle that includes goal understanding, plan formulation, context gathering loops, action selection, and execution across channels—allowing agents to think and adapt dynamically."
          }
        },
        {
          "@type": "Question",
          "name": "Why is the Atlas Reasoning Engine the ‘brain’ of Agentforce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Atlas acts as the intelligence layer that interprets context, evaluates options, learns from history, and drives autonomous decisions, making it function like the brain behind Salesforce Agentforce."
          }
        },
        {
          "@type": "Question",
          "name": "How is Atlas different from traditional Salesforce automation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike rigid workflows, Atlas uses goal-driven reasoning. When new information appears or situations change, it adapts instantly instead of breaking or escalating unnecessarily."
          }
        },
        {
          "@type": "Question",
          "name": "Can Atlas work across multiple Salesforce clouds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Atlas works across Sales Cloud, Service Cloud, and even external platforms to help agents take consistent and context-aware actions."
          }
        },
        {
          "@type": "Question",
          "name": "How does Atlas improve customer service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "By helping agents reason, analyze context, fill in gaps, and execute decisions rapidly, Atlas enables faster resolution times, more accurate actions, and highly personalized support experiences."
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
          "https://www.rialtes.com/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce/"
        }
      />

      <Script
        id="schema-provenWays"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/blog/digital-brain-ai-circuit-technology-illustration.webp"
            alt={t('bannerAlt')}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/digital-brain-ai-circuit-technology-illustration-mobile.webp"
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
                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Salesforce Agentforce</span>{" "}
                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>19 November 2025
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

              {/* quick common section */}
              {
                quickCommonData.map((data, ind) => (
                  <div className="md:mt-[50px] mt-[40px]" key={ind}>
                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                    <UnorderedList arrName={data.desc} ulClassName="mt-[29px] xl:mt-[30px] space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                  </div>
                ))
              }

              {/* how atlas section */}
              {
                howAtlasData.map((data, ind) => {
                  return (
                    <div key={ind} className="md:mt-[50px] mt-[40px]">
                      <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                      <p
                        className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                        dangerouslySetInnerHTML={{ __html: data.desc }}
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
                    </div>
                  )
                })
              }
              {/* why Atlas common section */}
              {
                whyAtlasCommonData.map((data, ind) => (
                  <div className="md:mt-[50px] mt-[40px]" key={ind}>
                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                    <UnorderedList arrName={data.desc} ulClassName="mt-[29px] xl:mt-[30px] space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                    <UnorderedList arrName={data.list} ulClassName="mt-5 pl-[26px] lg:pl-[36px] list-disc space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                    <UnorderedList arrName={data.desc2} ulClassName="mt-10 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                  </div>
                ))
              }

              {/* key section */}
              {
                keyData.map((data, ind) => (
                  <div className="md:mt-[50px] mt-[40px]" key={ind}>
                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                    <p
                      className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                      dangerouslySetInnerHTML={{ __html: data.desc }}
                    />
                    {
                      data.list.map((elem, id) => (
                        <div className="mt-10 grid md:grid-cols-12 grid-cols-1 md:gap-y-[26px] border border-[#707070] sm:w-[90%] md:w-auto xl:w-[1000px] 4xl:w-[1200px]" key={id}>
                          <div className="bg-[#F0F0F0] p-[32px] col-span-4 flex items-center">
                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold">
                              {elem.title}
                            </p>
                          </div>
                          <div className="p-[32px] col-span-8">
                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                              {elem.desc}
                            </p>
                          </div>
                        </div>
                      ))
                    }
                    <p
                      className={`mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                      dangerouslySetInnerHTML={{ __html: data.desc2 }}
                    />
                  </div>
                ))
              }

              {/* business section */}
              {
                businessData.map((data, ind) => (
                  <div className="md:mt-[50px] mt-[40px]" key={ind}>
                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                    <p
                      className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                      dangerouslySetInnerHTML={{ __html: data.desc }}
                    />
                    <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-2 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                    <p
                      className={`mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                      dangerouslySetInnerHTML={{ __html: data.desc2 }}
                    />
                  </div>
                ))
              }


              {/* how rialtes section */}
              {
                rialtesData.map((data, ind) => (
                  <div className="md:mt-[50px] mt-[40px]" key={ind}>
                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                    <UnorderedList arrName={data.desc} ulClassName="mt-[29px] xl:mt-[30px] space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-[80px] gap-[40px]">
                      {
                        data.list.map((elem, id) => (
                          <div key={id}>
                            <span
                              key={id}
                              className="bg-[#006FBE] h-10 w-10 md:h-16 md:w-16 xl:h-20 xl:w-20 rounded-full text-white flex items-center justify-center 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]"
                            >
                              {id + 1}
                            </span>
                            <h3 className="pb-3 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold leading-tight mt-5"> {elem}</h3>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
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