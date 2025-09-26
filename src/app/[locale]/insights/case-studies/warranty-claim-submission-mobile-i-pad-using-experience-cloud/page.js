"use client";
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
  "@type": "TechArticle",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/case-studies/warranty-claim-submission-mobile-i-pad-using-experience-cloud",
  },
  headline: "Salesforce Experience Cloud Case Study: Mobile Warranty Portal",
  description:
    "This case study details how Rialtes implemented a mobile-first Salesforce Experience Cloud solution for a leading roofing manufacturer, streamlining warranty submissions and enhancing customer experience through Lightning Web Components.",
  image:
    "https://www.rialtes.com/images/case-studies/Adaptis-for-web-casestudy-banner.webp",
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
  proficiencyLevel: "Expert",
  articleSection: "Case Studies",
  datePublished: "2025-05-30",
};
export default function Page() {
  const currUrl = useUrl()
  const t = useTranslations("mobileCaseStudy");
  const locale = useLocale();
  const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { benifitList } = Content.mobileCaseStudy;

  const fullUrl = "https://www.rialtes.com/insights/case-studies/warranty-claim-submission-mobile-i-pad-using-experience-cloud";

  return (
    <section className="min-h-screen">
      <Seo
        title=" Salesforce Experience Cloud Case Study: Mobile Warranty Portal | Rialtes"
        description=" Discover how a leading roofing brand used Salesforce Experience Cloud to deliver a mobile-friendly warranty claim experience customers love."
        canonical="https://www.rialtes.com/insights/case-studies/warranty-claim-submission-mobile-i-pad-using-experience-cloud/"
      />

      <Script
        id="schema-warranty-mobile"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[380px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/case-studies/Adaptis-for-web-casestudy-banner.webp"
            alt="banner image"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block h-full">
          <Image
            src="/images/case-studies/Adaptis-for-mobile-banner.webp"
            alt="banner image"
            priority
            height={0}
            width={0}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

            {/* date and icons */}
            <BlogSocialIcons fullUrl={fullUrl} topic={t('manufacturing')} date="30 May 2025" />

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t('claimTitle')}</h1>

              {/* client section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('clientTitle')}</h2>
                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('clientDesc')}</p>
              </div>
              {/* challenges section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('challengesTitle')}</h2>
                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('challengesDesc')}</p>
              </div>
              {/* solutions section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('solutionsTitle')}</h2>
                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('solutionsDesc')}</p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('solutionsDescOne')}</p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('solutionsDescTwo')}</p>
              </div>
              {/* benefits section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('benefitsTitle')}</h2>

                <UnorderedList
                  ulClassName="list-disc mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] space-y-3 font-medium"
                  arrName={benifitList}
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
    </section >
  );
}
