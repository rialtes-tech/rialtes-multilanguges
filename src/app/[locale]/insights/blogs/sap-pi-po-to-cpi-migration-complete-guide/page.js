"use client";
import Image from "next/image";
import Link from "next/link";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import useUrl from "@/app/[locale]/components/useUrl";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SAP PI PO to CPI Migration: A Complete Guide",
  description:
    "Migrating from SAP PI/PO to SAP BTP Integration Suite is not just limited to re-platforming interfaces; it involves adopting a modern, cloud-native integration backbone.",
  image:
    "https://www.rialtes.com/images/industry/sap/sap-consulting-banner.webp",
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
      "https://www.rialtes.com/insights/blogs/sap-pi-po-to-cpi-migration-complete-guide/",
  },
  datePublished: "2025-08-26",

  mainEntity: {
    "@type": "FAQPage",
    name: "SAP PI PO to CPI Migration FAQs",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why should we move from PI/PO to CPI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PI/PO was designed for an on-premise era and has limitations in cloud-first architectures. CPI is cloud-native, scalable, API-first, and continuously updated.",
        },
      },
      {
        "@type": "Question",
        name: "Is CPI just a technical upgrade?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Moving to CPI is a strategic shift toward a cloud-enabled, intelligent enterprise. It allows you to optimize business processes, reduce risk, and leverage AI-driven monitoring.",
        },
      },
      {
        "@type": "Question",
        name: "How does CPI support hybrid landscapes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CPI connects both SAP cloud solutions (S/4HANA Cloud, SuccessFactors, Ariba, Concur) and on-premise systems, enabling seamless integration across all enterprise applications.",
        },
      },
      {
        "@type": "Question",
        name: "What are the key benefits of CPI over PI/PO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CPI offers cloud-native flexibility, pre-built content, API-first architecture, AI-enabled monitoring, predictive alerts, and lower TCO compared to PI/PO.",
        },
      },
      {
        "@type": "Question",
        name: "How can enterprises migrate without disrupting business processes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Parallel migration strategies allow PI/PO and CPI interfaces to run simultaneously. Iterative migration, testing, and monitoring ensure business continuity during the transition.",
        },
      },
      {
        "@type": "Question",
        name: "What role do Early Watch Systems (EWS) and alerts play?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EWS provides predictive diagnostics for bottlenecks, while multi-layered alerts notify teams of SLA breaches, system failures, or business-impacting disruptions.",
        },
      },
      {
        "@type": "Question",
        name: "How does CPI support KPI tracking and business confidence?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CPI dashboards track live performance against SLAs, process KPIs, and compliance metrics. Alerts tied to business outcomes ensure enterprises can act immediately when deviations occur.",
        },
      },
    ],
  },
};

export default function Page() {
  const t = useTranslations("sapPiPo");
  const locale = useLocale();
  const content = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
    steps,
    features1,
    cards,
    items,
    monitoringFeatures,
    earlyWatchAlerts,
    faqs,
    piPoServedData,
    multilayerData,
  } = content.sapPiPo;

  const fullUrl =
    "https://www.rialtes.com/insights/blogs/sap-pi-po-to-cpi-migration-complete-guide";
  const currUrl = useUrl();

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        type="article"
        canonical={
          "https://www.rialtes.com/insights/blogs/sap-pi-po-to-cpi-migration-complete-guide/"
        }
      />

      <Script
        id="schema-discover"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        {/* Desktop Image */}
        <div className="hidden xl:block">
          <Image
            src="/images/blog/sap-pi-po-cpi-migration-banner.webp"
            alt="Discover AgentExchange"
            fill
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block xl:hidden">
          <Image
            src="/images/blog/sap-cpi-mobile-banner.webp"
            alt="Discover AgentExchange"
            height={0}
            width={0}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">
            {/* date and icons */}
            <BlogSocialIcons
              fullUrl={fullUrl}
              topic={t("blogTopic")}
              date="26 August 2025"
            />
            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>

              <div className="xl:mt-[38px] mt-[33px]">
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("blogMainData")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("blogMainData1")}
                  <Link
                    className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400 pl-2"
                    href="https://www.rialtes.com/solutions/integration/sap-cloud-platform-integration-consulting/"
                  >
                    {t("blogMainDataLink")}
                  </Link>
                  . {t("blogMainData2")}
                </p>
              </div>
              {/* Why SAP Section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("whySapTitle")}
                </h2>

                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("piPoServedDesc")}
                </p>
                <ol className="list-disc marker:text-xl pl-[36px] lg:pl-[56px] space-y-4 mt-5 4xl:text-[20px] xl:text-[17px] text-[16px] font-medium ">
                  {piPoServedData.map((data, ind) => {
                    return (
                      <li key={ind}>
                        <h3 className="font-bold inline 4xl:text-[22px] text-[18px] leading-tight">
                          {data.title}{" "}
                        </h3>{" "}
                        {data.desc}
                      </li>
                    );
                  })}
                </ol>
              </div>
              {/* Future of SAP section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("futureOfSapTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("futureOfSapDesc")}
                </p>

                <div className="w-full max-w-5xl 4xl:px-8 2xl:px-8 xl:pl-8 xl:pt-8 pt-20 xl:space-y-10 space-y-20">
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className="relative border border-black bg-white shadow-sm"
                    >
                      <div className="absolute xl:w-[337px]  top-[-50px] xl:left-[-40px] xl:translate-x-0 left-1/2 -translate-x-1/2 4xl:top-5 2xl:top-4 xl:top-3 bg-[#006FBE] text-white font-semibold 4xl:text-[20px] xl:text-[17px] text-[16px] md:px-6 md:py-8 px-4 py-6  shadow-md">
                        {card.title}
                      </div>
                      <div className="4xl:pl-[22rem] 2xl:pl-[20rem] xl:pl-[20rem] xl:pr-10 py-6 p-6 pt-20 xl:pt-5 4xl:text-[20px] xl:text-[17px] text-[16px] font-medium">
                        {card.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Migration Strategy section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("migrationStrTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("migrationStrDesc")}
                </p>

                <div className="w-full max-w-7xl mx-auto pt-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                      <div
                        key={index}
                        className="border border-gray-800 bg-white shadow-sm p-6 flex flex-col"
                      >
                        <h3 className="text-[#006FBE] font-semibold leading-tight 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px]">
                          {step.title}
                        </h3>
                        <div className="border-t border-[1px] border-gray-400 my-5" />
                        <ul className="space-y-5 list-none font-medium 4xl:text-[20px]  xl:text-[17px] text-[16px] list-inside">
                          {step.description.map((line, i) => (
                            <li key={i}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Early Watch section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("earlyWatchTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("earlyWatchDesc")}
                </p>
                <h3 className="font-semibold 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight mt-10">
                  {t("proactiveTitle")}
                </h3>

                <UnorderedList
                  arrName={monitoringFeatures}
                  ulClassName="list-disc pl-[36px] lg:pl-[56px] marker:text-xl space-y-4 mt-5 text-black 4xl:text-[20px] xl:text-[17px] text-[16px] font-medium"
                  liClassName=""
                />
                <h3 className=" font-semibold 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight mt-10">
                  {t("multilayerTitle")}
                </h3>

                <ol className="list-disc marker:text-xl pl-[36px] lg:pl-[56px] space-y-4 mt-5 4xl:text-[20px] xl:text-[17px] text-[16px] font-medium">
                  {multilayerData.map((data, ind) => {
                    return (
                      <li>
                        <h4 className="font-bold inline 4xl:text-[22px] text-[18px] leading-tight">
                          {data.title}{" "}
                        </h4>
                        {data.desc}
                      </li>
                    );
                  })}
                </ol>
                <h3 className="font-semibold  4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight mt-10">
                  {t("intelligentTitle")}
                </h3>
                <p className="4xl:text-[20px]  xl:text-[17px] text-[16px] mt-5">
                  {t("intelligentDesc")}
                </p>

                <UnorderedList
                  arrName={earlyWatchAlerts}
                  ulClassName="list-disc  pl-[36px] lg:pl-[56px] space-y-4 mt-5 marker:text-xl text-black 4xl:text-[20px] xl:text-[17px] text-[16px] font-medium"
                  liClassName=""
                />
              </div>
              {/* Best Practices section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("bestPracticesTitle")}
                </h2>

                <section className="w-full mt-[29px] xl:mt-[34px] bg-white">
                  <div className="max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:gap-8 gap-10 lg:text-left">
                      {features1.map((feature, index) => (
                        <div
                          key={index}
                          className={`relative flex flex-col items-start xl:border-none max-md:border-b border-black xl:pb-0 pb-10 ${index !== 0 ? "md:pl-10" : ""
                            }`}
                        >
                          {index !== 0 && (
                            <span className="absolute left-0 top-0 h-full md:border-l border-b border-gray-300"></span>
                          )}

                          <h3 className="font-semibold  4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">
                            {feature.title}
                          </h3>
                          <div className="w-8 h-0.5 bg-sky-600 my-6"></div>
                          <p className="4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">
                            {feature.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                {/* Upcoming Features section */}
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("upcomingTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px]  xl:text-[17px] text-[16px]">
                  {t("upcomingDesc")}
                </p>
                <section className="w-full py-12 bg-white">
                  <div className="max-w-7xl mx-auto ">
                    <div className="grid grid-cols-1 xl:grid-cols-3 ">
                      <div className="bg-[#C6E7FF] 4xl:p-8 xl:p-5 p-8 4xl:pr-10 shadow-sm">
                        <p className=" 4xl:text-[20px] xl:text-[17px] text-[16px]">
                          {t("upcomingData1")}
                        </p>
                      </div>
                      <div className="bg-[#EDEDED] 4xl:p-8 xl:p-5 p-8 4xl:pr-12 shadow-sm transform md:translate-y-14 md:mt-[-60px] xl:mt-0">
                        <p className=" 4xl:text-[20px] xl:text-[17px] text-[16px]">
                          {t("upcomingData2")}
                        </p>
                      </div>
                      <div className="bg-[#C6E7FF] 4xl:p-8 xl:p-5 p-8 4xl:pr-12 shadow-sm transform xl:translate-y-32 md:mt-14 xl:mt-16">
                        <p className=" 4xl:text-[20px] xl:text-[17px] text-[16px]">
                          {t("upcomingData3")}
                        </p>
                      </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-6 md:mt-0">
                      <div className="bg-[#EDEDED] p-7 4xl:pr-12 shadow-sm xl:translate-y-8 xl:col-span-4 col-span-12 md:col-span-2">
                        <p className=" 4xl:text-[20px] xl:text-[17px] text-[16px]">
                          {t("upcomingData4")}
                        </p>
                      </div>
                      <div className="bg-[#C6E7FF] p-10 pr-12 shadow-sm xl:translate-y-[6.5rem]  xl:col-span-4 col-span-12 md:col-span-2">
                        <p className=" 4xl:text-[20px] xl:text-[17px] text-[16px]">
                          {t("upcomingData5")}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/* What Are The Benefits  section */}
              <div className="xl:mt-[110px] mt-[20px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("benefitsTitle")}
                </h2>
                <div className="w-full mt-[29px] xl:mt-[34px]">
                  <div className="hidden md:flex relative items-start">
                    <div className="absolute top-2 left-2 h-0.5 w-full bg-gray-400"></div>

                    {items.map((text, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start text-left pr-10 relative"
                      >
                        {/* Circle */}
                        <div className="w-4 h-4 bg-[#0C8AED] border-2 border-blue-500 rounded-full z-10"></div>
                        <div className="w-0.5 h-6 bg-blue-500 ml-[7px]"></div>
                        <p className="mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="md:hidden relative">
                    {/* Vertical line */}
                    <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-400"></div>

                    {items.map((text, index) => (
                      <div
                        key={index}
                        className="mb-8 flex items-start relative"
                      >
                        {/* Circle */}
                        <div className="absolute left-0 mt-1 w-4 h-4 bg-[#0C8AED] border-2 border-blue-500 rounded-full"></div>
                        <div className="absolute left-4 top-2 h-0.5 w-6 bg-blue-500"></div>
                        <p className="ml-12 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* How can we help section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("howCanHelpTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("howCanHelpDesc")}
                </p>
                <p className="pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("howCanHelpDesc2")}
                </p>
                <p className="pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("howCanHelpDesc3")}{" "}
                  <Link
                    className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                    href="https://www.rialtes.com/solutions/integration/sap-cloud-platform-integration-consulting/"
                  >
                    {t("howCanHelpDescLink")}
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:mt-[80px] mt-[40px] custom-container">
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
          {t("faqTitle")}
        </h2>
        {/* faq section */}
        <div className="mt-[29px] xl:mt-[34px]">
          <FAQAccordion faqData={faqs} />
        </div>
      </section>
      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </div>
  );
}
