"use client";
import Image from "next/image";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import Link from "next/link";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import FilteredBlogCarouse from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "5 Signs You’re Ready to Implement AI Agents in Manufacturing Operations | Rialtes",
    description:
      "AI agents represent not just a new tool, but a fundamental shift in how work is performed, decisions are made, and problems are solved.",
    image:
      "https://www.rialtes.com/images/blog/ai-agents-in-manufacturing.webp",
    author: {
      "@type": "Organization",
      name: "Rialtes",
    },
    publisher: {
      "@type": "Organization",
      name: "Rialtes",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rialtes.com/images/homepage/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.rialtes.com/insights/blogs/implementing-ai-agents-in-manufacturing-operations/",
    },
    datePublished: "2025-09-17",
    mainEntity: {
      "@type": "FAQPage",
      name: "AI Agents in Manufacturing FAQs",
      mainEntity: [
        {
          "@type": "Question",
          name: "How are AI agents different from regular automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Regular automation follows set rules and scripts. AI agents adapt based on context, learn from outcomes, and can make decisions autonomously within defined parameters.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a complete system overhaul to use AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Modern AI agents can integrate with your existing ERP, MES, and CRM systems, allowing gradual adoption.",
          },
        },
        {
          "@type": "Question",
          name: "Are AI agents only for large-scale manufacturers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Mid-sized manufacturers often see the fastest ROI because AI agents reduce the need for additional headcount and infrastructure.",
          },
        },
        {
          "@type": "Question",
          name: "How long before AI agents start showing results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For well-scoped implementations, you can see measurable improvements in lead times, uptime, and service response within 3–6 months.",
          },
        },
        {
          "@type": "Question",
          name: "What risks should I consider before adopting AI agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key considerations include data quality, integration complexity, and setting clear boundaries for autonomous actions to avoid unintended outcomes.",
          },
        },
      ],
    },
  };
  const t = useTranslations("fiveSigns");
  const locale = useLocale();
  const Content = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const { mainData, payoffData, commonData, faqs } = Content.fiveSigns;
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/implementing-ai-agents-in-manufacturing-operations";
  const currUrl = useUrl();

  return (
    <div className="min-h-screen">
      <Seo
        title="AI Agents in Manufacturing: 5 Signs You’re Ready | Rialtes"
        description=" AI agents represent not just a new tool, but a fundamental shift in how work is performed, decisions are made, and problems are solved for manufacturers today."
        keywords="Partners, website, welcome"
        canonical={
          "https://www.rialtes.com/insights/blogs/implementing-ai-agents-in-manufacturing-operations/"
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
            src="/images/blog/ai-agents-in-manufacturing.webp "
            alt="ai that listens"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/ai-agents-in-manufacturing-mobile.webp"
            alt="ai that listens"
            priority
            height={0}
            width={0}
            style={{ objectFit: "cover", objectPosition: "90% 20%" }}
            className="w-full h-full"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">
            {/* date and icons */}
            <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="11 September 2025" />


            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>
            </div>
            <div className="xl:mt-[38px] mt-[33px]">
              {mainData.map((data, ind) => {
                return (
                  <p
                    key={ind}
                    className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]"
                    dangerouslySetInnerHTML={{ __html: data }}
                  />
                );
              })}
            </div>
            {commonData.map((data, ind) => {
              return (
                <div key={ind}>
                  <div className="md:mt-[50px] mt-[40px]">
                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight flex gap-1">
                      <span>{ind + 1}.</span>
                      {data.title}
                    </h2>

                    <p
                      className="mt-[29px] xl:mt-[34px]  4xl:text-[20px] xl:text-[17px] text-[16px] pl-8"
                      dangerouslySetInnerHTML={{ __html: data.desc }}
                    />
                    {data.list && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:my-10 pl-8 lg:gap-[20px] sm:w-[70%] md:w-[100%] lg:w-[900px] xl:w-[1090px] 3xl:w-[1240px]">
                        {data.list.map((elem, id) => (
                          <div
                            key={id}
                            className={` 4xl:text-[20px] xl:text-[17px] text-[16px] font-medium border-[#707070] ${ind == 0 &&
                              "lg:p-[40px] p-[30px] border max-lg:my-5 md:mx-5 lg:mx-0"
                              }
                                                            ${ind !== 0 &&
                                id !== 0
                                ? "lg:px-[36px] max-lg:p-[30px] lg:border-l max-md:border-b max-lg:last:border-none"
                                : ""
                              } ${ind !== 0 && id == 0
                                ? "lg:w-[90%] max-lg:p-[30px] max-md:border-b md:border-r lg:border-r-0"
                                : ""
                              }
                                                            `}
                          >
                            {elem}
                          </div>
                        ))}
                      </div>
                    )}

                    {data.desc2 && (
                      <p
                        className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px] pl-8"
                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                      />
                    )}

                    {data.desc3 && (
                      <p
                        className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px] pl-8"
                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
            <div className="md:mt-[50px] mt-[40px]">
              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                {t("payoffTitle")}
              </h2>
              <div className="mt-[29px] xl:mt-[34px]">
                {payoffData.map((data, ind) => {
                  return (
                    <p
                      key={ind}
                      className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  );
                })}</div>
            </div>{" "}
            <div className="xl:mt-[80px] mt-[40px]">
              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                {t("faqTitle")}
              </h2>
              <div className="mt-[29px] xl:mt-[34px]">
                <FAQAccordion faqData={faqs} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarouse url={currUrl} />
      </section>
    </div>
  );
}
