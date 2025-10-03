"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/caseStudy.json";
import esContent from "../../../../../../messages/es/caseStudy.json";
import frContent from "../../../../../../messages/fr/caseStudy.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import RelatedCaseStudies from '@/app/[locale]/components/RelatedCaseStudies'

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud/",
  },
  headline:
    "Case Study: Digitizing Patient Journey Using Salesforce Health Cloud",
  description:
    "Discover how Rialtes transformed patient engagement by digitizing the entire care journey using Salesforce Health Cloud—enhancing experience, coordination, and outcomes.",
  image: "https://www.rialtes.com/images/case-studies/case-study-7.webp",
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
  datePublished: "2024-08-16",
};

export default function Page() {
  const currUrl = useUrl()
  const t = useTranslations("digitizingCaseStudy");
  const locale = useLocale();
  const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { challengesList, solutionsList, benefitsList } =
    Content.digitizingCaseStudy;

  const fullUrl = "https://www.rialtes.com/insights/blogs/digitizing-patient-journey-using-salesforce-health-cloud";

  return (
    <section className="min-h-screen">
      <Seo
        title="Salesforce Health Cloud Case Study: Patient Journey Digitized"
        description="Discover how healthcare is transforming with a digital-first patient journey powered by Salesforce, enhancing care, access, and patient engagement."
        canonical="https://www.rialtes.com/insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud/" />
      <Script
        id="schema-digitizing"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[380px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/case-studies/case-study-7.webp"
            alt="banner image"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block h-full">
          <Image
            src="/images/case-studies/case-study-7.webp"
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
            <BlogSocialIcons fullUrl={fullUrl} topic={t('healthcare')} date="16 August 2024" />

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t('digitizingTitle')}</h1>

              {/* client section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('clientTitle')}</h2>
                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('clientDesc')}</p>
              </div>

              {/* problem section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('peoblemTitle')}</h2>
                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('peoblemDesc')}</p>
                <ul className="list-disc mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4">
                  {challengesList.map(({ title, description }, index) => (
                    <li key={index}>
                      <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {title}
                      </h3>
                      : {description}
                    </li>
                  ))}
                </ul>
              </div>

              {/* solution section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('solutionsTitle')}</h2>
                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('solutionsDesc')}</p>
                <ul className="list-disc mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4">
                  {solutionsList.map(({ title, description }, index) => (
                    <li key={index}>
                      <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {title}
                      </h3>
                      : {description}
                    </li>
                  ))}
                </ul>
              </div>

              {/* benefits section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('benefitsTitle')}</h2>
                <UnorderedList
                  ulClassName="list-disc mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] space-y-4 font-medium"
                  arrName={benefitsList}
                />
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* case study  carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <RelatedCaseStudies url={currUrl} currTopic={t('healthcare')} />
      </section>
    </section>
  );
}
