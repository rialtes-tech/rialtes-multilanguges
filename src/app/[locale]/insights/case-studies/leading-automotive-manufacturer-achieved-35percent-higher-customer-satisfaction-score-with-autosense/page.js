"use client";
// pages/case-study-detail.js
import Image from "next/image";
import RelatedTopicsCarousel from "../../../components/relatedTopicsCarousel";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/caseStudy.json";
import esContent from "../../../../../../messages/es/caseStudy.json";

import Script from "next/script";
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
  const t = useTranslations("leadingCaseStudy");
  const locale = useLocale();
  const Content = locale === "es" ? esContent : enContent;
  const {
    slides,
    keyList,
    solutionList,
    featureList,
    benefitsList,
    serviceList,
  } = Content.leadingCaseStudy;

  const fullUrl =
    "https://www.rialtes.com/insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud";

  return (
    <div className="min-h-screen bg-white">
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

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
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
          <div className="">
            <h1 className="text-[#000000] py-6 leading-tight  text-[26px]  4xl:text-[60px] xl:text-[45px]">
              {t("leadingTitle")}
            </h1>
          </div>

          <div className="">
            <div className="flex flex-col md:flex-row justify-between text-black">
              <div className="pb-6">
                <span className="text-[#0092E0]">{t("Automotive")} </span>{" "}
                <span className="text-[#ACACAC]"> | </span>
                {t("date")}
              </div>
              <div className="flex flex-col">
                <span>{t("read")}</span>
              </div>
            </div>
            <div className="pt-4"></div>
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

          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] md:text-[22px] text-[20px] pb-4">
                {t("clientTitle")}
              </h2>
              <p className="text-black">{t("clientDesc")}</p>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4 md:text-[22px]">
                {t("keyTitle")}
              </h2>

              <p className="text-black pb-2">{t("keyDesc")}</p>

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium">
                  {keyList.map((item, index) => (
                    <li key={index} className="pb-4 last:pb-0">
                      <h3 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">
                        {item.title}
                      </h3> : {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4 md:text-[22px]">
                {t("solutionTitle")}
              </h2>

              <p className="text-black pb-4">{t("solutionDesc")}</p>

              <h3 className="h3-bold pb-4 xl:text-[22px] text-[18px] md:text-[19px]">
                {t("approchTitle")}
              </h3>
              <div className="pl-2">
                <ol className="list-decimal marker:text-[#000] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium space-y-4">
                  {solutionList.map((item, index) => (
                    <li className="last:pb-4" key={index}>
                      <h4 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">
                        {item.title}
                      </h4> : {item.desc}
                    </li>
                  ))}
                </ol>
              </div>

              <h3 className="h3-bold pb-4 xl:text-[22px] text-[18px] md:text-[19px]">
                {t("featuresTitle")}
              </h3>
              <div className="pl-2">
                <ol className="list-decimal marker:text-[#000] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium space-y-4">
                  {featureList.map((item, index) => (
                    <li key={index}>
                      <h4 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">
                        {item.title}
                      </h4> : {item.desc}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4 md:text-[22px]">
                {t("benefitsTitle")}
              </h2>
              <div className="pl-2">
                <p className="text-black pb-2">{t("benefitsDesc")}</p>
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium space-y-4">
                  {benefitsList.map((item, index) => (
                    <li className="last:pb-4" key={index}>
                      <h3 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">
                        {item.title}
                      </h3> : {item.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="h3-bold pb-4 xl:text-[20px] text-[18px] md:text-[19px]">
                {t("serviceTitle")}
              </h3>

              <div className="pl-2">
                <ol className="list-decimal marker:text-[#000] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium space-y-4">
                  {serviceList.map((step, index) => (
                    <li key={index}>
                      <h4 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">
                        {step.title}
                      </h4> : {step.desc}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4 md:text-[22px]">
            {t("conclusion")}
          </h2>
          <p className="text-black pb-4">{t("conclusionDesc")}</p>
          <p className="text-black">{t("conclusionDescOne")} </p>
        </div>
      </section>

      {/* Latest Blogs */}
      <div className="py-10 custom-container lg:pr-0">
        <RelatedTopicsCarousel slides={slides} />
      </div>
    </div>
  );
}
