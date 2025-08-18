"use client";
// pages/case-study-detail.js
import Image from "next/image";
import RelatedTopicsCarousel from "../../../components/relatedTopicsCarousel";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/caseStudy.json";
import esContent from "../../../../../../messages/es/caseStudy.json";
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

  const fullUrl =
    "https://www.rialtes.com/insights/blogs/optimizing-sales-processes-with-salesforce-sales-cloud-for-a-manufacturing-company";

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

      <section>
        <div className="xl:block hidden">
          <Image
            src="/images/case-studies/streamline-banner.webp"
            alt="Streamlined DevOps using Copado and Salesforce"
            priority
            className="w-full h-full"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>

        <div className="xl:hidden block">
          <Image
            src="/images/case-studies/streamline-mobile-banner.webp"
            alt="Streamlined DevOps using Copado and Salesforce"
            priority
            className="w-full"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </section>
      <section className="custom-container">
        <div className="py-10 bg-white 4xl:max-w-[1100px] 4xl:w-[1100px] xl:w-[850px]">
          <h1 className="text-[#000000] py-6  leading-tight text-[24px]  4xl:text-[60px] xl:text-[45px] ">
            {t("salesTitle")}
          </h1>
          <div className="py-4"></div>
          <div>
            <div className="flex flex-col md:flex-row justify-between  text-black">
              <div className="pb-6">
                <span className="text-[#0092E0]">{t("manufacturing")}</span>{" "}
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
          <div className="py-6"></div>
          <div>
            <div className="">
              <h2 className="text-[#0092E0] pb-6 xl:text-[30px] text-[20px] font-medium">
                {t("clientTitle")}
              </h2>
              <p className="text-black">{t("clientDesc")}</p>
              <div className="py-6"></div>
              <h2 className=" text-[#0092E0] pb-6 xl:text-[30px] text-[20px] font-medium">
                {t("problemTitle")}
              </h2>
              <div>
                {problemList.map((item, index) => (
                  <div key={index} className="pb-6">
                    <h3 className="text-lg h3-bold">{item.title}</h3>
                    <p className="text-black mt-2">{item.description}</p>
                  </div>
                ))}
              </div>{" "}
              <div className="py-6"></div>
              <h2 className="text-[#0092E0] pb-6 xl:text-[30px] text-[20px] font-medium">
                {t("impactTitle")}{" "}
              </h2>
              <h3 className="text-lg h3-bold pb-6">{t("maxiTitle")}</h3>
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 font-medium xl:text-[20px] text-[16px]"
                liClassName="pb-4 text-black"
                arrName={maxiList}
              />
              <h3 className="text-lg h3-bold pb-6">{t("coustomerTitle")}</h3>
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 font-medium xl:text-[20px] text-[16px]"
                liClassName="pb-4 text-black"
                arrName={coustomerList}
              />
              <h3 className="text-lg h3-bold pb-6">{t("workflowTitle")}</h3>
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 font-medium xl:text-[20px] text-[16px]"
                liClassName="pb-4 text-black"
                arrName={workflowList}
              />
              <h3 className="text-lg h3-bold pb-6">{t("managingTitle")}</h3>
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 font-medium xl:text-[20px] text-[16px]"
                liClassName="pb-4 text-black"
                arrName={managingList}
              />
              <h3 className="text-lg h3-bold pb-6">{t("unifiedTitle")}</h3>
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 font-medium xl:text-[20px] text-[16px]"
                liClassName="pb-4 text-black"
                arrName={unifiedList}
              />
              <h3 className="text-lg h3-bold pb-6">{t("globalTitle")}</h3>
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 font-medium xl:text-[20px] text-[16px]"
                liClassName="text-black"
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
