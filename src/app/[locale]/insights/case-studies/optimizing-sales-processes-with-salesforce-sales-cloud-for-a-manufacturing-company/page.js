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
    <div className="min-h-screen bg-white">
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

      <section className="relative h-[350px] md:h-[550px] xl:h-[450px] 4xl:h-[650px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/case-studies/streamline-banner.webp"
            alt="Streamlined DevOps using Copado and Salesforce"
            priority
            className="w-full object-cover h-full"
            width={0}
            height={0}
            fill
          />
        </div>

        <div className="xl:hidden block">
          <Image
            src="/images/case-studies/streamline-mobile-banner.webp"
            alt="Streamlined DevOps using Copado and Salesforce"
            priority
            className="w-full"
            style={{ objectFit: "cover", objectPosition: "90% 20%" }}
            width={0}
            height={0}
            fill
          />
        </div>
      </section>
      <section className="custom-container">
        <div className="py-10 bg-white 4xl:max-w-[1100px] 4xl:w-[1100px] xl:w-[850px]">
          <h1 className="text-[#000000] py-6 leading-tight text-[24px] 4xl:text-[60px] xl:text-[45px]">
            {t("salesTitle")}
          </h1>
          <div className="py-4"></div>
          <div>
            <div className="flex flex-col md:flex-row justify-between ">
              <div className="pb-6">
                <span className="text-[#0092E0]">{t("manufacturing")}</span>{" "}
                <span className="text-[#ACACAC]"> | </span>
                {t("date")}
              </div>
              <div className="flex flex-row gap-6 ml-[-8px]">
                <div className="max-w-[40px]">
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                    target="_blank" rel="noopener noreferrer">
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
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                    target="_blank" rel="noopener noreferrer">
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
          </div>
          <div className="py-6"></div>
          <div>
            <div className="">
              <h2 className="text-[#0092E0] pb-6 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[20px] font-medium">
                {t("clientTitle")}
              </h2>
              <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t("clientDesc")}</p>
              <div className="py-6"></div>
              <h2 className=" text-[#0092E0] pb-6 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[20px] font-medium">
                {t("problemTitle")}
              </h2>
              <div>
                {problemList.map((item, index) => (
                  <div key={index} className="pb-6">
                    <h3 className="text-lg h3-bold">{item.title}</h3>
                    <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] mt-2 pl-[16px]">{item.description}</p>
                  </div>
                ))}
              </div>{" "}
              <h2 className="text-[#0092E0] mt-4 pb-6 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[20px] font-medium">
                {t("impactTitle")}{" "}
              </h2>
              <h3 className="text-lg h3-bold pb-4 mt-2">{t("maxiTitle")}</h3>
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] pl-[34px] pb-2 font-medium 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]"
                liClassName="pb-4"
                arrName={maxiList}
              />
              <h3 className="text-lg h3-bold pb-4 mt-2">{t("coustomerTitle")}</h3>
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] pl-[34px] pb-2 font-medium 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]"
                liClassName="pb-4"
                arrName={coustomerList}
              />
              <h3 className="text-lg h3-bold pb-4 mt-2">{t("workflowTitle")}</h3>
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] pl-[34px] pb-2 font-medium 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]"
                liClassName="pb-4"
                arrName={workflowList}
              />
              <h3 className="text-lg h3-bold pb-4 mt-2">{t("managingTitle")}</h3>
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] pl-[34px] pb-2 font-medium 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]"
                liClassName="pb-4"
                arrName={managingList}
              />
              <h3 className="text-lg h3-bold pb-4 mt-2">{t("unifiedTitle")}</h3>
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] pl-[34px] pb-2 font-medium 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]"
                liClassName="pb-4"
                arrName={unifiedList}
              />
              <h3 className="text-lg h3-bold pb-4 mt-2">{t("globalTitle")}</h3>
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] pl-[34px] pb-2 font-medium 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]"
                liClassName=""
                arrName={globaList}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div className="py-10 custom-container xl:!pr-0">
        <RelatedTopicsCarousel slides={slides} />
      </div>
    </div>
  );
}
