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
      "https://www.rialtes.com/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams-journey-with-largest-pha-in-north-america/",
  },
  headline: "Case Study: Trusted YARDI Partner for North America’s Largest PHA",
  description:
    "Explore how Rialtes partnered with North America’s largest PHA for a full-scale Yardi implementation and provided 5 years of robust AMS support, ensuring operational excellence and compliance.",
  image: "https://www.rialtes.com/images/case-studies/case-study-5.webp",
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
  datePublished: "2024-09-27",
};

export default function Page() {
  const currUrl = useUrl()
  const t = useTranslations("yardiCaseStudy");
  const locale = useLocale();
  const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { challengesList, solutionStepsList, benefitsList } =
    Content.yardiCaseStudy;

  const fullUrl = "https://www.rialtes.com/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams-journey-with-largest-pha-in-north-america";

  return (
    <section className="min-h-screen xl:mb-[120px] mb-[80px]">
      <Seo
        title="Yardi Implementation Case Study: 5 Years, 1 PHA, and Big Wins"
        description="Explore our Yardi implementation case study to see how we supported a 5-year digital transformation journey with Yardi AMS for long-term success."
        canonical="https://www.rialtes.com/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams-journey-with-largest-pha-in-north-america/"
      />
      <Script
        id="schema-yardi"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[380px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/case-studies/publicsector (1).webp"
            alt="banner image"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block h-full">
          <Image
            src="/images/case-studies/publicsector (1).webp"
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
            <BlogSocialIcons fullUrl={fullUrl} topic={t('publicTitle')} date="27 September 2024" />

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t('headerTitle')}</h1>

              {/* client section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('clientTitle')}</h2>
                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('clientDesc')}</p>
              </div>

              {/* challenge section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('challengesTitle')}</h2>
                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('challengesDesc')}</p>
                <ul className="list-disc mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-3">
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


              {/* solutions section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('solutionsTitle')}</h2>
                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('solutionsDesc')}</p>
                <ul className="list-disc mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-3">
                  {solutionStepsList.map(({ title, description }, index) => (
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
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('benefits')}</h2>
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
      {/* <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <RelatedCaseStudies url={currUrl} currTopic={t('publicTitle')} />
      </section> */}
    </section>
  );
}
