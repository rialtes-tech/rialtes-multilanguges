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
import RelatedCaseStudies from '../../../components/RelatedCaseStudies';
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

  const fullUrl =
    "https://www.rialtes.com/insights/case-studies/transforming-student-success-with-salesforce-education-cloud-and-eduplus";
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Salesforce Education Cloud Case Study | Rialtes"
        description="See how Rialtes Edu+ on Salesforce Education Cloud boosted enrollment by 22% and improved student support with AI, automation, and connected experiences."
        canonical="https://www.rialtes.com/insights/case-studies/transforming-student-success-with-salesforce-education-cloud-and-eduplus/"
      />
      <Script
        id="schema-revolutionizing"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[350px] md:h-[500px]  4xl:h-[650px]  overflow-hidden">
        <div className="hidden lg:block">
          <Image
            src="/images/case-studies/Transforming-student-success.webp"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "50% 20%" }}
            priority
          />
        </div>
        <div className="block lg:hidden">
          <Image
            src="/images/case-studies/Feature Thumb.webp"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "50% 20%" }}
            priority
          />
        </div>
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white  4xl:w-[1130px] 2xl:w-[900px] xl:w-[800px]">
          <div className=""></div>
          <div>
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center text-black  ">
              <div className="">
                <span className="text-[#0092E0] 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">
                  {t("educationcloud")}
                </span>{" "}
                <span className="text-[#ACACAC]"> | </span>
                {t("date")}
              </div>
              <div className="flex flex-row gap-6  ml-[-8px]">
                <div className="max-w-[40px]">
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      fullUrl
                    )}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                    {" "}
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
            <div className="pt-4"></div>
            <div>
              <h1 className="text-[#000000] py-4  leading-tight  text-[26px] 4xl:text-[60px]  2xl:text-[48px]   xl:text-[42px] md:text-[28px] ">
                {t("eduTitle")}
              </h1>
            </div>
          </div>

          <div className="py-6"></div>
          <div>
            <div>
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">
                {t("clientTitle")}
              </h2>
              <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">
                {t("cliendDesc")}
              </p>
              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">
                {t("challengesTitle")}
              </h2>

              <h3 className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-bold leading-tight text-black pb-4">
                {t("challengesDesc")}
              </h3>
              <p className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] pb-4">
                {t("challengesOne")}
              </p>

              <UnorderedList
                ulClassName="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] marker:text-black list-disc text-black font-medium pb-4 pl-[32px]"
                liClassName="pb-4 text-black last:pb-0"
                arrName={studentChallenges}
              />
              <p className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">
                {t("challengesTwo")}
              </p>

              <div className="py-6"></div>
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">
                {t("solutionTitle")}
              </h2>

              <h3 className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-bold leading-tight text-black pb-4">
                {t("solutionDesc")}
              </h3>

              <p className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] pb-6">
                {t("solutionOne")}
              </p>

              <h3 className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-bold leading-tight text-black pb-4">
                {t("highlights")}:
              </h3>
              <UnorderedList
                ulClassName="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] marker:text-black list-disc text-black font-medium pb-4 xl:pr-[10rem] pl-[32px]"
                liClassName="pb-4 text-black last:pb-0"
                arrName={eduSolutions}
              />

              <div className="py-6"></div>
              <h3 className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-bold leading-tight text-black pb-4">
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
                      <h3 className="font-bold text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="xl:py-12 py-8"></div>
              <h3 className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-bold leading-tight text-black pb-4">
                {t("impactTitle")}
              </h3>

              <p className="4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] ">
                {t("impactDesc")}
              </p>
            </div>
          </div>
        </div>
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
              <h3 className="text-black font-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] pb-6">
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
        <div className="xl:py-10 py-6"></div>
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
        <div className="py-6"></div>
      </section>
      {/* case study carousel */}
      {/* <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <RelatedCaseStudies url={currUrl} currTopic={t("educationcloud")} />
      </section> */}
    </div>
  );
}
