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
import FilteredBlogCarouse from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
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
    useCaseList,
  } = blogsContent.howAgentforce;

  const fullUrl =
    "https://www.rialtes.com/insights/blogs/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions";
  const currUrl = useUrl();
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Agentforce 3.0 for Automotive Manufacturing Success | Rialtes"
        description="Agentforce for Automotive is transforming vehicle production with AI-powered agents that enhance workflows, compliance, and agility on the factory floor."
        canonical={
          "https://www.rialtes.com/insights/blogs/how-agentforce-3-is-reshaping-automotive-manufacturing/"
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

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">
            {/* date and icons */}
            <div className="sm:flex justify-between">
              <div>
                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("agentforce")}
                </span>{" "}
                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {" "}
                  |{" "}
                </span>
                29 July 2025
              </div>

              <div>
                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                  <BlogSocialIcons fullUrl={fullUrl} />
                </div>
              </div>
            </div>

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("title")}
              </h1>
            </div>

            <div className="xl:mt-[38px] mt-[33px]">
              <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("desc")}{" "}
                <Link
                  className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                  href="https://www.salesforce.com/in/news/press-releases/2025/06/23/agentforce-3-announcement/"
                >
                  {t("descLink")}
                </Link>
                {t("descLink2")}
              </p>

              <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("desctwo")}
                <Link
                  className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                  href="https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters/"
                >
                  {t("desctwoLink")}
                </Link>{" "}
                {t("desctwoLink1")}
              </p>
              <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("autoTitle")}
              </p>

              {/* agentforce section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight ">
                  {t("automotive")}
                </h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ">
                  {t("sinceTitle")}
                </p>
                <h3 className="mt-[29px] xl:mt-[30px]  font-bold  4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">
                  {t("keyTitle")}
                </h3>
                <div className="grid gap-10 mt-10">
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
                        <h4 className="inline font-bold 4xl:text-[20px] xl:text-[17px] text-[16px]  leading-tight mr-1">
                          {item.title}
                        </h4>
                        <span className="inline text-gray-700 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]  font-medium">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* streamline section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] ">
                  {t("streamlineTitle")}
                </h2>

                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ">
                  {t("oneTitle")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ">
                  {t("means")}
                </p>
                <ol className="list-decimal mt-3 pl-[36px] lg:pl-[56px]  text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]  font-medium space-y-3">
                  {commandList.map((item, i) => (
                    <li key={i}>
                      <span className="font-bold">{item.title}:</span>{" "}
                      {item.desc}
                    </li>
                  ))}
                </ol>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ">
                  {t("meansdesc")}
                </p>
              </div>

              {/* universal integration section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] ">
                  {t("universalTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ">
                  {t("modelTitle")}
                </p>

                <ol className="list-disc mt-5 marker:text-xl pl-[36px] lg:pl-[56px]  text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]  font-medium space-y-4">
                  {integrationPoints.map((item, i) => (
                    <li key={i}>
                      <span className="font-bold">{item.title}:</span>{" "}
                      {item.desc}
                    </li>
                  ))}
                </ol>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ">
                  {t("modelDesc")}
                </p>

                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ">
                  {t("modelDesc1")}
                </p>
              </div>

              {/* revolutionize section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] ">
                  {t("qualityTitle")}
                </h2>

                <div className="mt-[29px] xl:mt-[30px]">
                  {agentforceContent.map((text, i) => (
                    <p
                      key={i}
                      className={`${
                        i === 0 ? "" : "mt-5"
                      } 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] `}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              {/* drive section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] ">
                  {t("driveTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ">
                  {t("driveDesc")}
                </p>

                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ">
                  {t("driveDesc1")}
                </p>
                <OrderedList
                  arrName={listItems}
                  olClassName="list-disc marker:text-xl pl-[36px] lg:pl-[56px]  mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]  font-medium space-y-2"
                />

                <h3 className="pb-4 font-bold 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight mt-8">
                  {t("useTitle")}
                </h3>

                <div className="grid grid-cols-1 mt-0 xl:mt-10 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black border-black">
                  {features.map((item, index) => (
                    <div
                      key={index}
                      className={`py-6 xl:py-0 ${
                        index === 0
                          ? "pr-6"
                          : "xl:pl-6 xl:pr-5 lg:px-10 md:px-5"
                      }`}
                    >
                      <h4 className="text-[#0067B9] font-semibold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2">
                        {item.title}

                        <span className="font-medium text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2">
                          {item.description}
                        </span>
                      </h4>
                    </div>
                  ))}
                </div>

                <p className="xl:mt-16 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("useDesc")}
                </p>
              </div>

              {/* accelerate section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] ">
                  {t("action")}
                </h2>

                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("actionDesc")}
                </p>

                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("useCase")}
                </p>
                <UnorderedList
                  arrName={useCaseList}
                  ulClassName="list-disc marker:text-xl pl-[36px] lg:pl-[56px] text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-3 mt-5"
                />

                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("newTitle")}
                </p>
              </div>

              {/* ai work section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] ">
                  {t("putTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("putDesc")}
                </p>

                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("putDesc2")}
                </p>
                <UnorderedList
                  arrName={aiList}
                  ulClassName="list-disc pl-[36px] lg:pl-[56px] mt-5 marker:text-xl text-black 4xl:text-[20px] xl:text-[17px] text-[16px] font-medium space-y-3"
                />

                <p className="4xl:text-[20px]  xl:text-[17px] text-[16px] mt-5">
                  {t("whetherDesc")}
                </p>
                <p className="4xl:text-[20px] xl:text-[17px] text-[16px] mt-5">
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
        </div>
      </section>

      {/* faq section */}
      <section className="custom-container xl:mt-[80px] mt-[40px]">
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">
          {t("faq")}
        </h2>
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
