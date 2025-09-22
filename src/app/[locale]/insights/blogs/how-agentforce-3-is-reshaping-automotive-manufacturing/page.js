"use client";
// pages/blog-detail.js
import Image from "next/image";
import Link from "next/link";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import OrderedList from "@/app/[locale]/components/orderedList";
import FilteredBlogCarouse from '@/app/[locale]/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/[locale]/components/useUrl";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/blogs/how-agentforce-3-is-reshaping-automotive-manufacturing/",
  },
  headline:
    "Discover How Salesforce Agentforce 3.0 is Reshaping Automotive Manufacturing in Real-time",
  description:
    "Agentforce for automotive brings intelligent automation to factory floors—delivering real-time visibility, predictive quality, and scalable AI-driven operations across automotive manufacturing.",
  image:
    "https://www.rialtes.com/images/blog/agentforce-3.0-desktop-banner.webp",
  author: {
    "@type": "Organization",
    name: "Rialtes",
    url: "https://www.rialtes.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Rialtes",
    logo: {
      "@type": "ImageObject",
      url: "https://www.rialtes.com/images/homepage/logo.svg",
    },
  },
  datePublished: "2025-07-29",
  articleSection: "AI Automation",
  url: "https://www.rialtes.com/insights/blogs/how-agentforce-3-is-reshaping-automotive-manufacturing/",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Agentforce for Automotive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agentforce for Automotive is Salesforce’s AI-powered solution tailored for automotive manufacturers. It automates and optimizes key workflows across production, supply chain, quality, and compliance using Agentforce 3.0.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Agentforce 3.0 valuable for automotive manufacturers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agentforce 3.0 brings intelligent automation to every part of the automotive factory floor, offering real-time visibility, predictive insights, smart agent coordination, and prebuilt industry workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How does Agentforce integrate with existing automotive systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agentforce for automotive integrates with ERP, MES, PLM, and IoT systems using Model Context Protocol, MuleSoft APIs, and Heroku AppLink, ensuring seamless connectivity with legacy and custom tools.",
      },
    },
    {
      "@type": "Question",
      name: "What use cases exist for Agentforce in automotive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use cases include automated inspection summaries, predictive maintenance triggers, parts shortage alerts, service appointment agents, warranty claims validation, and AI-powered quality control agents.",
      },
    },
    {
      "@type": "Question",
      name: "What is the future of AI in automotive manufacturing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI is transforming the automotive industry through smart factory automation, autonomous operations, adaptive supply chains, in-vehicle intelligence, and AI-driven diagnostics. Agents will play a pivotal role in this future.",
      },
    },
  ],
};
export default function Page() {
  const t = useTranslations("howAgentforce");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
    faqs,
    features,
    featuresData,
    commandList,
    agentforceContent,
    integrationPoints,
    listItems,
    aiList,
    useCaseList
  } = blogsContent.howAgentforce;

  const fullUrl = "https://www.rialtes.com/insights/blogs/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions";
  const currUrl = useUrl()
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Agentforce 3.0 for Automotive Manufacturing Success | Rialtes"
        description="Agentforce for Automotive is transforming vehicle production with AI-powered agents that enhance workflows, compliance, and agility on the factory floor."
        canonical={"https://www.rialtes.com/insights/blogs/how-agentforce-3-is-reshaping-automotive-manufacturing/"} />

      <Script
        id="schema-discover"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[500px] overflow-hidden">
        {/* Desktop Image */}
        <div className="hidden xl:block">
          <Image
            src="/images/blog/agentforce-3.0-desktop-banner.webp"
            alt="Discover AgentExchange"
            fill
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block xl:hidden">
          <Image
            src="/images/blog/agentforce-3.0-mobile.webp"
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
                <span className="text-[#0092E0]">{t("agentforce")}</span>
                <span className="text-[#ACACAC]"> | </span>
                29 July 2025
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="max-w-[40px]">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                      target="_blank" rel="noopener noreferrer">
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
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                      target="_blank" rel="noopener noreferrer">
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
              {t("title")}
            </h1>
          </div>

          <div className="mx-auto">
            <div className="max-w-[1084px] 4xl:w-[1084px] 2xl:w-[950px] xl:w-[850px]">
              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                {t("desc")}{" "}
                <Link
                  className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                  href="https://www.salesforce.com/in/news/press-releases/2025/06/23/agentforce-3-announcement/"
                >
                  {t("descLink")}
                </Link>
                {t("descLink2")}
              </p>

              <p className="text-black mt-3 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">
                {t("desctwo")}
                <Link
                  className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                  href="https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters/"
                >
                  {t("desctwoLink")}
                </Link>{" "}
                {t("desctwoLink1")}
              </p>
              <p className="text-black mt-3 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">
                {t("autoTitle")}
              </p>

              <div className="py-6 "></div>

              <h2 className=" pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                {t("automotive")}
              </h2>

              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                {t("sinceTitle")}
              </p>
              <h3 className="pb-4 mt-6 font-bold text-[16px] 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px]">
                {t("keyTitle")}
              </h3>
              <div className="grid gap-10 mt-5">
                {featuresData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-start sm:gap-[50px]"
                  >
                    <div className="min-w-[100px] sm:mt-1">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={200}
                        height={112}
                        className="xl:w-[212px] xl:h-[90px] w-[100px]"
                      />
                    </div>
                    <div className="mt-10 xl:mt-0 md:mt-0">
                      <h4 className="inline font-bold xl:text-[17px] text-[16px] 4xl:text-[20px] 2xl:text-[18px] mr-1">
                        {item.title}
                      </h4>
                      <span className="inline text-gray-700 xl:text-[17px] text-[16px] 2xl:text-[20px] 4xl:text-[20px] font-medium">
                        {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] md:text-[23px] 2xl:text-[24px] xl:text-[21px] text-[23px] mt-16 leading-tight">
                {t("streamlineTitle")}
              </h2>

              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                {t("oneTitle")}
              </p>
              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                {t("means")}
              </p>
              <ol className="list-decimal pl-5 text-black 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium space-y-3">
                {commandList.map((item, i) => (
                  <li key={i}>
                    <span className="font-bold">{item.title}:</span> {item.desc}
                  </li>
                ))}
              </ol>
              <p className="text-black pb-4 mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                {t("meansdesc")}
              </p>

              <h2 className="pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] md:text-[23px] 2xl:text-[24px] xl:text-[21px] text-[23px] mt-10 leading-tight">
                {t("universalTitle")}
              </h2>
              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                {t("modelTitle")}
              </p>

              <ol className="list-disc marker:text-xl pl-4 text-black 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium space-y-4">
                {integrationPoints.map((item, i) => (
                  <li key={i}>
                    <span className="font-bold">{item.title}:</span> {item.desc}
                  </li>
                ))}
              </ol>
              <p className="text-black pb-4 mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                {t("modelDesc")}
              </p>

              <p className="text-black pb-4 mt-5 4xl:text-[20px] 2xl:text-[18px] md:text-[23px] xl:text-[17px] text-[16px]">
                {t("modelDesc1")}
              </p>
              <h2 className="pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] mt-10 leading-tight">
                {t("qualityTitle")}
              </h2>

              <div>
                {agentforceContent.map((text, i) => (
                  <p
                    key={i}
                    className={`${i === 0 ? "" : "mt-5"
                      } 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]`}
                  >
                    {text}
                  </p>
                ))}
              </div>
              <h2 className="pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] md:text-[23px] 2xl:text-[24px] xl:text-[21px] text-[23px] mt-16 leading-tight">
                {t("driveTitle")}
              </h2>
              <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">
                {t("driveDesc")}
              </p>

              <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">
                {t("driveDesc1")}
              </p>
              <OrderedList
                arrName={listItems}
                olClassName="list-disc marker:text-xl pl-4 mt-4 text-black 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium space-y-3"
              />

              <h3 className="pb-4 font-bold text-[16px] 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] mt-10">
                {t("useTitle")}
              </h3>

              <div className="grid grid-cols-1 mt-0 xl:mt-10 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black border-black">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className={`py-6 xl:py-0 ${index === 0 ? "pr-6" : "xl:pl-6 xl:pr-5 lg:px-10 md:px-5"
                      }`}
                  >
                    <h4 className="text-[#0067B9] font-semibold 4xl:text-[20px] xl:text-[17px] 2xl:text-[18px] text-[16px] leading-tight pl-2">
                      {item.title}

                      <span className="text-black font-normal 4xl:text-[22px] xl:text-[20px] text-[16px] pl-2">
                        {item.description}
                      </span>
                    </h4>
                  </div>
                ))}
              </div>

              <p className="text-black xl:mt-16 mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                {t("useDesc")}
              </p>

              <h2 className="pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] md:text-[23px] 2xl:text-[24px] xl:text-[21px] text-[23px] mt-16 leading-tight">
                {t("action")}
              </h2>

              <p className="4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                {t("actionDesc")}
              </p>

              <p className="mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                {t("useCase")}
              </p>
              <UnorderedList
                arrName={useCaseList}
                ulClassName="list-disc marker:text-xl pl-4 text-black mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-4"
              />

              <p className="mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                {t("newTitle")}
              </p>

              <h2 className="pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] md:text-[23px] 2xl:text-[24px] xl:text-[21px] text-[23px] mt-16 leading-tight">
                {t("putTitle")}
              </h2>
              <p className="4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                {t("putDesc")}
              </p>

              <p className="mt-5 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                {t("putDesc2")}
              </p>
              <UnorderedList
                arrName={aiList}
                ulClassName="list-disc pl-4 marker:text-xl text-black 4xl:text-[20px] 2xl:text-[18px] mt-5  xl:text-[17px] text-[16px] font-medium space-y-4"
              />

              <p className="4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] mt-10 text-[16px]">
                {t("whetherDesc")}
              </p>
              <p className="4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] mt-5 text-[16px]">
                {t("link")}
                <Link
                  className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                  href="https://www.rialtes.com/insights/blogs/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions/"
                >
                  {t("link1")}
                </Link>{" "}
                {t("link2")}
                <Link
                  className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                  href="https://www.rialtes.com/industry/digital-transformation-in-automotive-industry/"
                >
                  {t("link3")}
                </Link>
                {t("link4")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* faq section */}
      <section className="custom-container xl:mt-[80px] mt-[40px]">
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">{t("faq")}</h2>
        <div className="mt-[29px] xl:mt-[30px]">
          <FAQAccordion faqData={faqs} />
        </div>
      </section>

      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarouse url={currUrl} />
      </section>
    </div>
  );
}
