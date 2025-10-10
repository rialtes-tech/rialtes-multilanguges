"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/caseStudy.json";
import esContent from "../../../../../../messages/es/caseStudy.json";
import frContent from "../../../../../../messages/fr/caseStudy.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Script from "next/script";
import useUrl from "@/app/[locale]/components/useUrl";
import RelatedCaseStudies from '@/app/[locale]/components/RelatedCaseStudies'
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/case-studies/transforming-student-success-with-salesforce-education-cloud-and-eduplus/",
  },
  headline:
    "Transforming Student Success with Salesforce Education Cloud and Edu+",
  description:
    "This case study explores how a leading North American university improved enrollment, student engagement, and case management with Rialtes Edu+ powered by Salesforce Education Cloud, Agentforce, and Data Cloud.",
  image:
    "https://www.rialtes.com/images/case-studies/Transforming-student-success.webp",
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
  datePublished: "2025-08-21",
};

export default function page() {
  const currUrl = useUrl()
  const t = useTranslations("eduplusCaseStudy");
  const locale = useLocale();
  const Content = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const { eduPlusFeatures, quantitativeResults, studentChallenges, aboutList, eduBenefits, eduSolutions } =
    Content.eduplusCaseStudy;

  const fullUrl = "https://www.rialtes.com/insights/case-studies/transforming-student-success-with-salesforce-education-cloud-and-eduplus";
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        canonical="https://www.rialtes.com/insights/case-studies/transforming-student-success-with-salesforce-education-cloud-and-eduplus/"
      />
      <Script
        id="schema-revolutionizing"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[380px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/case-studies/Transforming-student-success.webp"
            alt="banner image"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block h-full">
          <Image
            src="/images/case-studies/Feature Thumb.webp"
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
                <BlogSocialIcons fullUrl={fullUrl} topic={t('educationcloud')} date="21 August 2025" />
             {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">

              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("clientTitle")}
              </h1>
                            {/* client section */}
              <div className="md:mt-[50px] mt-[40px]">

              <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("cliendDesc")}
              </p>
           </div>
              <div className="md:mt-[50px] mt-[40px]">

              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                {t("challengesTitle")}
              </h2>

              <h3 className="4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight font-bold  mt-5 ">
                {t("challengesDesc")}
              </h3>
              <p className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] mt-5 ">
                {t("challengesOne")}
              </p>

              <UnorderedList
                ulClassName="4xl:text-[20px]    xl:text-[17px] text-[16px] marker:text-black list-disc text-black font-medium mt-5  pl-[32px]"
                liClassName="pb-4 text-black last:pb-0"
                arrName={studentChallenges}
              />
              <p className="4xl:text-[20px] xl:text-[17px] text-[16px] mt-5 ">
                {t("challengesTwo")}
              </p>
           </div>
              <div className="md:mt-[50px] mt-[40px]">

              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight mt-5 ">
                {t("solutionTitle")}
              </h2>

              <h3 className="4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight font-bold mt-5 ">
                {t("solutionDesc")}
              </h3>

              <p className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] mt-5">
                {t("solutionOne")}
              </p>

              <h3 className="4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight font-bold text-black xl:py-12 py-8">
                {t("highlights")}:
              </h3>
              <UnorderedList
                ulClassName="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] marker:text-black list-disc text-black font-medium mt-4 xl:pr-[10rem] pl-[32px]"
                liClassName="pb-4 text-black last:pb-0"
                arrName={eduSolutions}
              />

              <h3 className="4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] font-bold leading-tight text-black xl:py-12 py-8">
                {t("keyTitle")}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-8">
                {eduPlusFeatures.map((feature, index) => (
                  <div key={index} className="flex flex-col items-start">
                    <div className="w-[58px] h-[40px] mb-4">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="4xl:pr-20 2xl:pr-10 xl:pr-4 pt-2">
                      <h3 className="font-bold text-black 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight mt-5">
                        {feature.title}
                      </h3>
                      <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] mt-4">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] font-bold leading-tight text-black xl:py-12 py-8">
                {t("impactTitle")}
              </h3>

              <p className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] ">
                {t("impactDesc")}
              </p>
        <section className="w-full flex justify-center  ">
          <div className="w-full max-w-[1500px] flex flex-col lg:flex-row">
            <div className="4xl:w-[60%] 2xl:w-[58%] xl:w-[57%] pr-4 lg:pr-6 pb-10 lg:pb-0">
              <h2 className="font-bold text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] pb-6">
                {t("resultsTitle")}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {quantitativeResults.map((item, index) => (
                  <div key={index} className="md:col-span-1">
                    <span className="4xl:text-[40px] 2xl:text-[34px] xl:text-[30px] text-[30px] font-bold text-[#0C8AED]">
                      {item.value}
                    </span>
                    <p className="text-black 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="4xl:w-[35%] 2xl:w-[33%] xl:w-[32%] lg:pl-6 lg:border-l border-gray-500">
              <h3 className="text-black font-bold 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight pb-6">
                {t("benefits")}
              </h3>
              <UnorderedList
                ulClassName="list-disc pl-5 text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] space-y-4 font-medium pl-[32px]"
                liClassName="text-black"
                arrName={eduBenefits}
              />
            </div>
          </div>
        </section>
       </div>
        <div className=" 4xl:w-[1130px] 2xl:w-[900px] xl:w-[800px]">
          <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">
            {t("about")}
          </h2>
          <p className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] pb-4">
            {t("aboutDesc")}
          </p>
          <UnorderedList
            ulClassName="list-disc pl-5 text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] space-y-4 font-medium pl-[32px]"
            liClassName="text-black "
            arrName={aboutList}
          />
        </div>
       </div>  </div> </div>
      </section>
      {/* case study carousel */}
      {/* <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <RelatedCaseStudies url={currUrl} currTopic={t("educationcloud")} />
      </section> */}
    </div>
  );
}
