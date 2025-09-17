"use client";
// pages/case-study-detail.js
import Image from "next/image";
import RelatedTopicsCarousel from "../../../components/relatedTopicsCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/caseStudy.json";
import esContent from "../../../../../../messages/es/caseStudy.json";
import frContent from "../../../../../../messages/fr/caseStudy.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud/",
  },
  headline:
    "Case Study: Omnichannel Case Management with Salesforce Service Cloud",
  description:
    "Discover how Rialtes implemented Salesforce Service Cloud to enable seamless omnichannel case management, reduce response time, and enhance customer satisfaction.",
  image: "https://www.rialtes.com/images/case-studies/case-study-4.webp",
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
  datePublished: "2025-10-14",
};

export default function Page() {
  const t = useTranslations("omnichannelCaseStudy");
  const locale = useLocale();
  const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { slides, problemList, featureList, benifitList } = Content.omnichannelCaseStudy;

  const fullUrl =
    "https://www.rialtes.com/insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Salesforce Service Cloud Case Study: Omnichannel Case Management"
        description="Discover a Salesforce Service Cloud success story—next-gen case management transformed with automation, faster service, and elevated customer support."
        canonical="https://www.rialtes.com/insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud/"
      />

      <Script
        id="schema-omnichannel"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[350px] md:h-[500px] xl:h-[450px] 4xl:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/case-study-4.webp "
          alt="Omnichannel case management with Salesforce Service Cloud"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
          priority
        />
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white 4xl:max-w-[1084px] 4xl:w-[1084px] xl:w-[850px]">
          <div>
            <h1 className="text-[#000000] py-6 leading-tight text-[26px 4xl:text-[60px] xl:text-[45px]">
              {t("serviceTitle")}
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between text-black mt-4">
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
          <div className="pt-4"></div>

          <div className="py-6"></div>
          <div>
            <div>
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[20px] pb-4">
                {t("clientTitle")}
              </h2>
              <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t("clientDesc")}</p>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[20px] pb-4">
                {t("problemTitle")}
              </h2>

              <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] pb-2">{t("problemDesc")}</p>

              <div className="pl-2">
                <UnorderedList
                  ulClassName="mt-3 list-disc marker:text-[#0092E0] marker:text-xl text-black pl-[34px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium"
                  liClassName="text-black pb-2"
                  arrName={problemList}
                />
              </div>
              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[20px] pb-4">
                {t("solutionsTitle")}{" "}
              </h2>

              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t("solutionsDesc")}</p>

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-[34px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium">
                  {featureList.map((feature, index) => (
                    <li key={index} className="pb-4">
                      <h3 className="h3-bold inline 4xl:text-[20px] text-[17px] xl:text-[18px]">
                        {feature.title}
                      </h3>
                      : {feature.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="py-6"></div>

          <div>
            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[20px] pb-4">
              {t("benefitsTitle")}
            </h2>

            <div className="pl-2">
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-[34px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium"
                liClassName="text-black pb-4"
                arrName={benifitList}
              />
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
