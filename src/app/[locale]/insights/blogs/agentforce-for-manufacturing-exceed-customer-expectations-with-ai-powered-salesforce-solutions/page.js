"use client";
import Image from "next/image";
import Link from "next/link";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import OrderedList from "@/app/[locale]/components/orderedList";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/blogs/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions/",
  },
  headline:
    "Agentforce for Manufacturing: Exceed Customer Expectations with AI-Powered Salesforce Solutions",
  description:
    "Scale with confidence. Agentforce for Manufacturing automates support, sales, and partner ops using AI copilots, predictive service, and self-service tools.",
  image:
    "https://www.rialtes.com/images/blog/agentforce-ai-for-manufacturing.webp",
  author: {
    "@type": "Organization",
    name: "Rialtes Technologies",
    url: "https://www.rialtes.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Rialtes Technologies",
    logo: {
      "@type": "ImageObject",
      url: "https://www.rialtes.com/images/homepage/logo.svg",
    },
  },
  datePublished: "2025-07-21",
  keywords: [
    "Agentforce for Manufacturing",
    "AI for Manufacturing",
    "AI in Manufacturing",
    "AI Agents Automation Solutions Manufacturing",
    "Smart Manufacturing Support",
  ],
};

export default function Page() {
  const t = useTranslations("agentforceForManufacturing");
  const locale = useLocale();
  const content = locale === "es" ? esContent : enContent;
  const { blogs, faqData, copilotData, intelligenceData, useCases, simplifyingData, giverPartnersData, realTimeData,
    realTimeVisibilityData
   } = content.agentforceForManufacturing
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fullUrl =
    "https://www.rialtes.com/insights/blogs/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Agentforce for Manufacturing: AI Service Edge | Rialtes"
        description="Want to scale smarter? Agentforce for Manufacturing brings AI copilots, predictive service, and self-service tools to elevate your support and sales ops."
        canonical={"https://www.rialtes.com/insights/blogs/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions/"} />
      <Script
        id="schema-discover"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/agentforce-ai-for-manufacturing.webp"
            alt="Discover AgentExchange"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/blog/agentforce-mobile-banner.webp"
            alt="Discover AgentExchange"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white">
          <div className="mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black items-center max-w-[1084px] xl:w-[1084px]">
              <div className="sm:mb-0 mb-6">
                <span className="text-[#0092E0]">{t('blogTopic')}</span>
                <span className="text-[#ACACAC]"> | </span>21 July 2025
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
                      rel="noopener noreferrer"
                    >
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
            <h1 className="text-[#000000] leading-tight text-[26px] xl:text-[40px] 4xl:text-[60px] font-semibold pb-6 xl:w-[730px] 4xl:w-[1084px]">
              {t('blogTitle')}
            </h1>
          </div>

          <div className="mx-auto">
            <div className="max-w-[1084px] xl:w-[1084px]">
              <p className="text-black pb-4">
                {t('blogMainData')}   {" "}
                <Link
                  className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                  href="https://www.salesforce.com/industry/manufacturing-cloud-erp/" target="_blank">
                  {" "}
                  {t('blogMainDataLink')}
                </Link>
                <br></br> {t('blogMainData2')}
              </p>

              <p className="text-black">
                {t('blogMainData3')}
              </p>

              <div className="py-6 "></div>

              {/* turn customer section */}
              <h2 className="pb-4 font-medium text-[#0092E0] xl:text-[30px] text-[20px]">
                {t('turnCustomerTitle')}
              </h2>

              <p className="text-black pb-4">
                {t('turnCustomerData')}
              </p>
              <p className="text-black pb-4">
                {t('turnCustomerData2')}
              </p>

              <h3 className="pb-4 mt-6 h3-bold text-[18px] xl:text-[24px] 4xl:text-[26px]">
                {t('thatsWhereTitle')}
              </h3>
              <p className="text-black pb-4">
                {t('thatsWhereData')}
              </p>
              <p className="text-black pb-4">
                {t('thatsWhereData2')}   {" "}
                <Link
                  className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                  href="https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting/"
                  target="_blank"
                >
                  {t('thatsWhereDataLink')}
                </Link>{" "}
                {t('thatsWhereData3')}
              </p>

              <div className="pl-6">
                <OrderedList arrName={copilotData} olClassName="list-disc marker:text-xl pl-4 text-black xl:text-[20px] text-[16px] font-medium space-y-3" />
              </div>
              <p className="text-black pb-4 mt-5">
                {t('withTitle')}
              </p>
              <ol className="pl-4 list-disc text-black xl:text-[20px] text-[16px] font-medium space-y-3">
                {
                  intelligenceData.map((data, ind) => {
                    return (
                      <li key={ind}>
                        <h4 className="h3-bold inline xl:text-[20px] text-[16px]">
                          {data.title}
                        </h4>
                        {data.desc}
                      </li>
                    )
                  })
                }
              </ol>

              <p className="text-black mt-5">
                {t('withData')}
              </p>
              <p className="mt-5"> {t('withData2')} </p>

              <div className="py-6"></div>

              <h2 className="pb-4 font-medium text-[#0092E0] xl:text-[30px] text-[20px]">
                {t('useCasesTitle')}
              </h2>

              <p className="text-black ">
                {t('useCasesData')}
              </p>
              <div className="py-4"></div>
              <OrderedList arrName={useCases} olClassName="list-disc marker:text-xl pl-4 text-black xl:text-[20px] text-[16px] font-medium space-y-3" />
              <p className="mt-5">
                {t('useCasesData2')}
              </p>

              {/* Agentforce for Manufacturing Sales section */}
              <h2 className="pb-4 font-medium text-[#0092E0] xl:text-[30px] text-[20px] mt-10">
                {t('agentforceTitle')}
              </h2>

              <p className="text-black pb-4">
                {t('agentforceData')}
              </p>

              <OrderedList arrName={simplifyingData} olClassName="list-disc marker:text-xl pl-4 text-black xl:text-[20px] text-[16px] font-medium space-y-3" />
              <p className="text-black mt-5">
                {t('agentforceData2')}
              </p>

              {/* empower section */}
              <h2 className="pb-4 font-medium text-[#0092E0] xl:text-[30px] text-[20px] mt-10">
                {t('empowerTitle')}
              </h2>
              <h3 className="pb-4 mt-6 h3-bold text-[18px] xl:text-[24px] 4xl:text-[26px]">
                {t('empowerTitle2')}
              </h3>
              <p className="mt-5">
                {t('empowerData')}
              </p>
              <OrderedList arrName={giverPartnersData} olClassName="list-disc marker:text-xl pl-4 text-black xl:text-[20px] text-[16px] font-medium space-y-3 mt-5" />
              <h3 className="pb-4 mt-6 h3-bold text-[18px] xl:text-[24px] 4xl:text-[26px]">
                {t('enableMultilingualTitle')}
              </h3>
              <p className="mt-5">
                {t('enableMultilingualData')}
              </p>

              {/* Intelligently  section */}
              <h3 className="pb-4 mt-6 h3-bold text-[18px] xl:text-[24px] 4xl:text-[26px]">
                {t('intelligentlyTitle')}
              </h3>
              <p className="mt-5">
                {t('intelligentlyData')}
              </p>

              {/* real time section */}
              <h2 className="pb-4 font-medium text-[#0092E0] xl:text-[30px] text-[20px] mt-10">
                {t('realTimeVisibilityTitle')}
              </h2>
              <p className="mt-3">
                {realTimeVisibilityData.map((para, index) => (
                  <span key={index}>
                    {para}
                    <br />
                  </span>
                ))}

              </p>
              <OrderedList arrName={realTimeData} olClassName="list-disc marker:text-xl pl-4 text-black xl:text-[20px] text-[16px] font-medium space-y-3 mt-5" />
           
              <h2 className="pb-4 font-medium text-[#0092E0] xl:text-[30px] text-[20px] mt-10">
                {t('dontDeliverTitle')}   
              </h2>
              <p className="mt-5">
                {t('dontDeliverData')}  {" "}
                <Link
                  className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                  href="https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters/" target="_blank">
                  {t('dontDeliverDataLink')}   
                </Link>{" "}
               {t('dontDeliverData2')} 
              </p>
              <p className="mt-5">
                {t('asTitle')} {" "}
                <Link
                  className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                  href="https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters/"
                  target="_blank">
                  {t('asDataLink')}   
                </Link>{" "}
                {t('asData2')}    {" "}
              </p>
              <p className="mt-5">
                {t('readyToTitle')}  {" "}
                <Link
                  className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                  href="https://www.rialtes.com/contact-us/" target="_blank">
                  {t('letsTalk')} 
                </Link>{" "}
              </p>
              <h2 className="pb-4 font-medium text-[#0092E0] xl:text-[30px] text-[20px] mt-10">
                {t('faqTitle')} 
              </h2>
              <div className="mx-auto">
                {faqData.map((item, index) => (
                  <div key={index} className="border-b border-gray-300">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center py-4 text-left bg-gray-100">
                      <span className="font-medium text-xl text-gray-800">
                        {item.question}
                      </span>
                      <span className="text-black text-2xl">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    {openIndex === index && (
                      <div className="pb-4 text-black transition-all text-lg">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Latest Blogs */}
      <div className="custom-container xl:pr-0" >
        <BlogsCarousel slides={blogs} />
      </div>
    </div >
  );
}
