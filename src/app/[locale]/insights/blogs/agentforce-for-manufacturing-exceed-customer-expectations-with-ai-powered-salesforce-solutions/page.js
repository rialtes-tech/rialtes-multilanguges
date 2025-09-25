"use client";
import Image from "next/image";
import Link from "next/link";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderdList from "@/app/[locale]/components/unorderedList";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import useUrl from "@/app/[locale]/components/useUrl";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'

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
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { empowerData, faqData, copilotData, intelligenceData, useCases, simplifyingData, giverPartnersData, realTimeData,
    realTimeVisibilityData
  } = content.agentforceForManufacturing

  const currUrl = useUrl();

  const fullUrl = "https://www.rialtes.com/insights/blogs/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions";

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

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/agentforce-ai-for-manufacturing.webp"
            alt="banner"
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
            alt="banner"
            priority
            height={0}
            width={0}
            className="w-full h-auto object-cover lg:object-[50%_30%]"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

            {/* date and icons */}
            <div className="sm:flex justify-between">
              <div>
                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('blogTopic')}</span>{" "}
                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>21 July 2025
              </div>

              <div>
                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                  <BlogSocialIcons fullUrl={fullUrl} />
                </div>
              </div>
            </div>

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight"> {t('blogTitle')}</h1>

              <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t('blogMainData')}
              </p>
              <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t('the')} {" "}
                <Link
                  className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                  href="https://www.salesforce.com/industry/manufacturing-cloud-erp/" target="_blank">

                  {t('blogMainDataLink')}
                </Link>{" "}{t('blogMainData2')}
              </p>
              <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t('blogMainData3')}
              </p>


              {/* turn customer section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('turnCustomerTitle')}</h2>

                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('turnCustomerData')}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('turnCustomerData2')}
                </p>

                <h3 className="text-[20px] md:text-[20px] 2xl:text-[21px] xl:text-[20px] 4xl:text-[24px] font-bold leading-tight mt-5">
                  {t('thatsWhereTitle')}
                </h3>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('thatsWhereData')}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
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

                <UnorderdList arrName={copilotData} ulClassName="list-disc 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[36px] mt-5 font-medium space-y-3" />

                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">
                  {t('withTitle')}
                </p>
                <ul className="pl-[34px] mt-5 list-disc font-medium space-y-3">
                  {
                    intelligenceData.map((data, ind) => {
                      return (
                        <li key={ind} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                          <h4 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                            {data.title}
                          </h4>
                          {data.desc}
                        </li>
                      )
                    })
                  }
                </ul>

                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">
                  {t('withData')}
                </p>
                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5"> {t('withData2')} </p>

              </div>

              {/* use cases section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('useCasesTitle')}</h2>

                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('useCasesData')}
                </p>
                <UnorderdList arrName={useCases} ulClassName="list-disc pl-[34px] mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-3" />
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('useCasesData2')}
                </p>
              </div>

              {/* agentforce for manufacturing section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('agentforceTitle')}</h2>

                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-[29px] xl:mt-[30px]">
                  {t('agentforceData')}
                </p>

                <UnorderdList arrName={simplifyingData} ulClassName="list-disc pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 font-medium space-y-3" />
                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">
                  {t('agentforceData2')}
                </p>
              </div>

              {/* empower section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('empowerTitle')}</h2>

                <h3 className="text-[20px] md:text-[20px] 2xl:text-[21px] xl:text-[20px] 4xl:text-[24px] font-bold leading-tight mt-[29px] xl:mt-[30px]">
                  {t('empowerTitle2')}
                </h3>
                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5" dangerouslySetInnerHTML={{ __html: empowerData }} />

                <UnorderdList arrName={giverPartnersData} ulClassName="list-disc pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 font-medium space-y-3" />
                <h3 className="mt-8 text-[20px] md:text-[20px] 2xl:text-[21px] xl:text-[20px] 4xl:text-[24px] font-bold leading-tight">
                  {t('enableMultilingualTitle')}
                </h3>
                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">
                  {t('enableMultilingualData')}
                </p>

                <h3 className="mt-8 text-[20px] md:text-[20px] 2xl:text-[21px] xl:text-[20px] 4xl:text-[24px] font-bold leading-tight">
                  {t('intelligentlyTitle')}
                </h3>
                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">
                  {t('intelligentlyData')}
                </p>
              </div>

              {/* real time section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="mb-[29px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('realTimeVisibilityTitle')}</h2>
                {realTimeVisibilityData.map((para, index) => (
                  <p key={index} className="mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {para}
                  </p>
                ))}
                <UnorderdList arrName={realTimeData} ulClassName="list-disc pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 font-medium space-y-3" />
              </div>

              {/* dont deliver section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t('dontDeliverTitle')}
                </h2>

                <p className="mt-[29px] xl:mt-[30px]  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('dontDeliverData')}  {" "}
                  <Link
                    className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                    href="https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters/" target="_blank">
                    {t('dontDeliverDataLink')}
                  </Link>{" "}
                  {t('dontDeliverData2')}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('asTitle')} {" "}
                  <Link
                    className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                    href="https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters/"
                    target="_blank">
                    {t('asDataLink')}
                  </Link>{" "}
                  {t('asData2')}    {" "}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('readyToTitle')}  {" "}
                  <Link
                    className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                    href="https://www.rialtes.com/contact-us/" target="_blank">
                    {t('letsTalk')}
                  </Link>{" "}
                </p>

              </div>
            </div>
          </div>
        </div>
      </section >

      {/* faq section */}
      <section className="xl:mt-[80px] mt-[40px] custom-container" >
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">{t('faqTitle')}</h2>
        <div className="mt-[29px] xl:mt-[34px]">
          <FAQAccordion faqData={faqData} />
        </div>
      </section>

      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </div >
  );
}
