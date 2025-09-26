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
import Script from "next/script";
import useUrl from "@/app/[locale]/components/useUrl";
import RelatedCaseStudies from '../../../components/RealtedCaseStudies';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/case-studies/leading-automotive-manufacturer-achieved-35percent-higher-customer-satisfaction-score-with-autosense/",
  },
  headline:
    "Salesforce Warranty Management Case Study: AutoSense Boosts Customer Satisfaction by 35%",
  description:
    "This Salesforce warranty management case study highlights how AutoSense streamlined warranty claims, improved dealer engagement, and boosted customer satisfaction.",
  image:
    "https://www.rialtes.com/images/case-studies/AutoSense%20Warranty%20Management%20Modules_Case%20study%20banner.webp",
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
  datePublished: "2025-06-30",
};
export default function Page() {
  const currUrl = useUrl()
  const t = useTranslations("leadingCaseStudy");
  const locale = useLocale();
  const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const {
    slides,
    keyList,
    solutionList,
    featureList,
    benefitsList,
    serviceList,
  } = Content.leadingCaseStudy;

  const fullUrl = "https://www.rialtes.com/insights/case-studies/leading-automotive-manufacturer-achieved-35percent-higher-customer-satisfaction-score-with-autosense/";

  return (
    <div className="min-h-screen xl:mb-[80px] md:mb-[60px] mb-[40px]">
      <Seo
        title="Salesforce Warranty Management: AutoSense in Action"
        description="This Salesforce warranty management case study highlights how AutoSense automated warranty claims, reduced errors, and improved operational efficiency."
        canonical="https://www.rialtes.com/insights/case-studies/leading-automotive-manufacturer-achieved-35percent-higher-customer-satisfaction-score-with-autosense/"
      />

      <Script
        id="schema-leading"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] 4xl:h-[650px] 2xl:h-[550px] xl:h-[450px] overflow-hidden">
        <Image
          className="lg:block hidden overflow-hidden "
          src="/images/case-studies/AutoSense Warranty Management Modules_Case study banner.webp "
          alt="AutoSense Warranty managment case study"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
          priority
        />

        <Image
          className="block xl:hidden overflow-hidden "
          src="/images/case-studies/AutoSense Warranty Management Modules_Case study Mobile banner.webp "
          alt="AutoSense Warranty managment case study"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
          priority
        />
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white 4xl:max-w-[1084px] 4xl:w-[1084px] xl:w-[900px]">

          <div>
            <div className="flex flex-col md:flex-row justify-between text-black items-center">
              <div>
                <span className="text-[#0092E0]">{t("Automotive")} </span>{" "}
                <span className="text-[#ACACAC]"> | </span>
                {t("date")}
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-6 ml-[-8px]">
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
            <div className="pt-4"></div>

          </div>
          <div  >
            <h1 className="text-[#000000] py-6 leading-tight  text-[26px]  4xl:text-[60px] xl:text-[42px] 2xl:text-[48px]nmd:text-[28px]">
              {t("leadingTitle")}
            </h1>
          </div>


          <div className="py-6"></div>
          <div  >
            <div  >
              <h2 className="font-medium text-[#0092E0] 2xl:text-[26px] xl:text-[26px] 4xl:text-[32px] md:text-[22px] text-[22px] pb-4">
                {t("clientTitle")}
              </h2>
              <p className="text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t("clientDesc")}</p>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] 2xl:text-[26px] xl:text-[26px] 4xl:text-[32px] md:text-[22px] text-[22px]">
                {t("keyTitle")}
              </h2>

              <p className="text-black pb-2 4xl:text-[20px] 2xl:text-[17px]  xl:text-[17px] text-[16px]">{t("keyDesc")}</p>

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] xl:pl-10 marker:text-xl text-black pl-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] md:text-[19px] font-medium">
                  {keyList.map((item, index) => (
                    <li key={index} className="pb-4 last:pb-0">
                      <h3 className="font-bold inline 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[20px] md:text-[20px]">
                        {item.title}
                      </h3> : {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] 2xl:text-[26px] xl:text-[26px] 4xl:text-[32px] md:text-[22px] text-[22px] pb-4">
                {t("solutionTitle")}
              </h2>

              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px]  xl:text-[17px] text-[16px]">{t("solutionDesc")}</p>

              <h3 className="h3-bold pb-4 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[20px] md:text-[20px]">
                {t("approchTitle")}
              </h3>
              <div className="pl-2">
                <ol className="list-decimal marker:text-[#000] xl:pl-10 marker:text-xl text-black pl-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] md:text-[19px] font-medium space-y-4">
                  {solutionList.map((item, index) => (
                    <li className="last:pb-4" key={index}>
                      <h3 className="h3-bold inline 4xl:text-[22px] 2xl:text-[19px] xl:text-[18px] text-[20px] md:text-[20px]">
                        {item.title}
                      </h3> : {item.desc}
                    </li>
                  ))}
                </ol>
              </div>

              <h3 className="h3-bold pb-4 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[20px] md:text-[20px]">
                {t("featuresTitle")}
              </h3>
              <div className="pl-2">
                <ol className="list-decimal marker:text-[#000] xl:pl-10 marker:text-xl text-black pl-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] md:text-[19px] font-medium space-y-4">
                  {featureList.map((item, index) => (
                    <li key={index}>
                      <h3 className="h3-bold inline 4xl:text-[22px] 2xl:text-[19px] xl:text-[18px] text-[20px] md:text-[20px]">
                        {item.title}
                      </h3> : {item.desc}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <div  >
            <div  >
              <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] text-[22px] pb-4 md:text-[22px]">
                {t("benefitsTitle")}
              </h2>
              <div className="pl-2">
                <p className="text-black pb-2 4xl:text-[20px] 2xl:text-[17px]  xl:text-[17px] text-[16px]">{t("benefitsDesc")}</p>
                <ul className="list-disc marker:text-[#0092E0] xl:pl-10 marker:text-xl text-black  4xl:text-[20px] 2xl:text-[17px]  xl:text-[17px] text-[16px] md:text-[19px] font-medium space-y-4">
                  {benefitsList.map((item, index) => (
                    <li className="last:pb-4" key={index}>
                      <h3 className="h3-bold inline 4xl:text-[22px] 2xl:text-[19px] xl:text-[18px] text-[20px] md:text-[20px]">
                        {item.title}
                      </h3> : {item.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="h3-bold pb-4 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[20px] md:text-[20px]">
                {t("serviceTitle")}
              </h3>

              <div className="pl-2">
                <ol className="list-decimal marker:text-[#000] xl:pl-10 marker:text-xl text-black pl-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] md:text-[19px] font-medium space-y-4">
                  {serviceList.map((step, index) => (
                    <li key={index}>
                      <h4 className="h3-bold inline 4xl:text-[22px] 2xl:text-[19px] xl:text-[18px] text-[20px] md:text-[20px]">
                        {step.title}
                      </h4> : {step.desc}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] text-[22px] pb-4 md:text-[22px]">
            {t("conclusion")}
          </h2>
          <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px]  xl:text-[17px] text-[16px]">{t("conclusionDesc")}</p>
          <p className="text-black 4xl:text-[20px] 2xl:text-[17px]  xl:text-[17px] text-[16px]">{t("conclusionDescOne")} </p>
        </div>
      </section>

      {/* case study carousel */}
      {/* <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <RelatedCaseStudies url={currUrl} currTopic={t("Automotive")} />
      </section> */}
    </div>
  );
}
