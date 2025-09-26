"use client";
// pages/case-study-detail.js
import Image from "next/image";
import RelatedTopicsCarousel from "../../../components/relatedTopicsCarousel";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/caseStudy.json";
import esContent from "../../../../../../messages/es/caseStudy.json";
import frContent from "../../../../../../messages/fr/caseStudy.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Script from "next/script";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import RealtedCaseStudies from '@/app/[locale]/components/RealtedCaseStudies'
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/case-studies/optimizing-sales-processes-with-salesforce-sales-cloud-for-a-manufacturing-company/",
  },
  headline:
    "Case Study: Optimizing Sales Processes with Salesforce Sales Cloud for a Manufacturing Company",
  description:
    "Learn how a global manufacturing company streamlined lead management, improved sales productivity, and enhanced reporting using Salesforce Sales Cloud with Rialtes’ expertise.",
  image:
    "https://www.rialtes.com/images/case-studies/sales%20cloud%20case%20study.webp",
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
  articleSection: "Case Studies",
  datePublished: "2025-03-26",
};

export default function Page() {
  const currUrl = useUrl()
  const t = useTranslations("optimizingCaseStudy");
  const locale = useLocale();
  const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const {
    problemList,
    slides,
    maxiList,
    coustomerList,
    workflowList,
    managingList,
    unifiedList,
    globaList,
  } = Content.optimizingCaseStudy;

  const fullUrl = "https://www.rialtes.com/insights/blogs/optimizing-sales-processes-with-salesforce-sales-cloud-for-a-manufacturing-company";

  return (
    <section className="min-h-screen">
      <Seo
        title="Salesforce Sales Cloud Case Study: Front Load in Manufacturing"
        description="Discover how front loading sales workflows using Salesforce Sales Cloud improved conversion speed and deal closures for a manufacturer."
        canonical="https://www.rialtes.com/insights/case-studies/optimizing-sales-processes-with-salesforce-sales-cloud-for-a-manufacturing-company/"
      />

      <Script
        id="schema-optimizing"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[380px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/case-studies/streamline-banner.webp"
            alt="banner image"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block h-full">
          <Image
            src="/images/case-studies/streamline-banner.webp"
            alt="banner image"
            priority
            height={0}
            width={0}
            className="w-full h-full object-cover object-[70%_60%]"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

            {/* date and icons */}
            <BlogSocialIcons fullUrl={fullUrl} topic={t('manufacturing')} date="26 March 2025" />

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t('salesTitle')}</h1>
              {/* client section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('clientTitle')}</h2>
                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('clientDesc')}</p>
              </div>

              {/* problem section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('problemTitle')}</h2>
                {problemList.map((item, index) => (
                  <div key={index} className="mt-[29px] xl:mt-[34px]">
                    <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{item.title}</h3>
                    <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* impact section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('impactTitle')}</h2>


                <h3 className="mt-[29px] xl:mt-[34px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{t("maxiTitle")}</h3>
                <UnorderedList
                  ulClassName="list-disc mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] space-y-4 font-medium"
                  arrName={maxiList}
                />
                <h3 className="mt-[29px] xl:mt-[34px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{t("coustomerTitle")}</h3>
                <UnorderedList
                  ulClassName="list-disc mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] space-y-4 font-medium"
                  arrName={coustomerList}
                />
                <h3 className="mt-[29px] xl:mt-[34px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{t("workflowTitle")}</h3>
                <UnorderedList
                  ulClassName="list-disc mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] space-y-4 font-medium"
                  arrName={workflowList}
                />
                <h3 className="mt-[29px] xl:mt-[34px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{t("managingTitle")}</h3>
                <UnorderedList
                  ulClassName="list-disc mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] space-y-4 font-medium"
                  arrName={managingList}
                />
                <h3 className="mt-[29px] xl:mt-[34px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{t("unifiedTitle")}</h3>
                <UnorderedList
                  ulClassName="list-disc mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] space-y-4 font-medium"
                  arrName={unifiedList}
                />
                <h3 className="mt-[29px] xl:mt-[34px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{t("globalTitle")}</h3>
                <UnorderedList
                  ulClassName="list-disc mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] space-y-4 font-medium"
                  arrName={globaList}
                />
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* case study  carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <RealtedCaseStudies url={currUrl} currTopic={t('manufacturing')} />
      </section>
    </section>
  );
}
