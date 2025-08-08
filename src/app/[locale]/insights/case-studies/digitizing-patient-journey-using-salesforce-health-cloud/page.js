"use client";
// pages/case-study-detail.js
import Head from "next/head";
import Image from "next/image";
import RelatedTopicsCarousel from "../../../components/relatedTopicsCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/caseStudy.json";
import esContent from "../../../../../../messages/es/caseStudy.json";

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
  const t = useTranslations("digitizingCaseStudy");
  const locale = useLocale();
  const Content = locale === "es" ? esContent : enContent;
  const { slides, challengesList, solutionsList, benefitsList } =
    Content.digitizingCaseStudy;

  const fullUrl =
    "https://www.rialtes.com/insights/blogs/digitizing-patient-journey-using-salesforce-health-cloud";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Salesforce Health Cloud Case Study: Patient Journey Digitized"
        description="Discover how healthcare is transforming with a digital-first patient journey powered by Salesforce, enhancing care, access, and patient engagement.
"
        canonical="https://www.rialtes.com/insights/case-studies/digitizing-patient-journey-using-salesforce-health-cloud/"
      />
      <Script
        id="schema-digitizing"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/case-study-7.webp"
          alt="Digitizing patient journey using Salesforce health cloud"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
          priority
        />
      </section>
      <section className="custom-container">
        <div className="py-10 bg-white 4xl:max-w-[1084px] 4xl:w-[1084px] xl:w-[950px]">
          <div className="">
            <h1 className="text-[#000000] py-6  leading-tight text-[26px]  4xl:text-[60px] xl:text-[45px]">
              {t("digitizingTitle")}
            </h1>
          </div>
          <div className="py-4"></div>
          <div className="">
            <div className="flex flex-col md:flex-row justify-between text-black">
              <div className="pb-6">
                <span className="text-[#0092E0]">{t("healthcare")} </span>
                <span className="text-[#ACACAC]"> | </span>
                {t("date")}
              </div>
              <div className="flex flex-col">
                <span>{t("read")}</span>
              </div>
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-col ml-[-8px]">
              <div className="flex flex-row gap-6">
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
          </div>

          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t("clientTitle")}
              </h2>
              <p className="text-black">{t("clientDesc")} </p>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t("peoblemTitle")}
              </h2>
              <p className="text-black pb-6">{t("peoblemDesc")}</p>

              {challengesList.map((item, index) => (
                <div
                  key={index}
                  className="pb-4 last:pb-0 text-black font-medium xl:text-[20px] text-[16px] md:text-[19px]"
                >
                  <h3 className="h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">
                    {item.title}
                  </h3>
                  <span> : {item.description}</span>
                </div>
              ))}

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t("solutionsTitle")}
              </h2>

              <p className="text-black pb-6">{t("solutionsDesc")}</p>
              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium ">
                  {solutionsList.map((item, idx) => (
                    <li className="pb-4 last:pb-0" key={idx}>
                      <h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">
                        {item.title}
                      </h3> : {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t('benefitsTitle')}
              </h2>

              <div className="pl-2">
                <UnorderedList
                  ulClassName="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium"
                  liClassName="text-black pb-4"
                  arrName={benefitsList}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div className="py-10 custom-container lg:pr-0">
        <RelatedTopicsCarousel slides={slides} />
      </div>
    </div>
  );
}
