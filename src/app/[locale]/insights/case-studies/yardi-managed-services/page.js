"use client";
// pages/case-study-detail.js
import Head from "next/head";
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
      "https://www.rialtes.com/insights/case-studies/yardi-managed-services/",
  },
  headline:
    "Case Study: Driving Operational Efficiency with Yardi Managed Services",
  description:
    "Learn how Rialtes empowered a public housing authority to achieve operational excellence, ensure regulatory compliance, and streamline workflows through comprehensive Yardi managed services.",
  image: "https://www.rialtes.com/images/case-studies/case-study-6.webp",
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
  datePublished: "2024-09-04",
};

export default function Page() {
  const t = useTranslations("yardiManageCaseStudy");
  const locale = useLocale();
  const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { slides, solutionList, businessList, benefitsList } =
    Content.yardiManageCaseStudy;

  const fullUrl =
    "https://www.rialtes.com/insights/case-studies/yardi-managed-services";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Yardi Case Study: Reducing Downtime in Multifamily Real Estate"
        description="Discover how our Yardi Managed Services significantly reduced downtime, improved performance, and boosted operational efficiency for a real estate leader."
        canonical="https://www.rialtes.com/insights/case-studies/yardi-managed-services/"
      />

      <Script
        id="schema-yardi-managed"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] 4xl:h-[650px] 2xl:h-[550px] xl:h-[450px] overflow-hidden">
        <Image
          src="/images/case-studies/case-study-6.webp "
          alt="Yardi Managed Services"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
          priority
        />
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white 4xl:max-w-[1100px] 4xl:w-[1100px] xl:w-[850px]">
          <div>
            <h1 className="text-[#000000] py-6  leading-tight text-[26px]  4xl:text-[60px] xl:text-[45px]">
              {t("yardiTitle")}
            </h1>
          </div>

          <div>
            <div className="flex flex-col md:flex-row justify-between text-black items-center">
              <div>
                <span className="text-[#0092E0]">{t("realEstate")}</span>
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

          <div className="py-6"></div>
          <div>
            <div>
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[25px] xl:text-[20px] text-[20px] pb-4">
                {t("clientProfile")}
              </h2>
              <p className="text-black 4xl:text-[24px] 2xl:text-[20px] xl:text-[18px] text-[16px] md:text-[19px]">{t("clientDesc")}</p>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[25px] xl:text-[20px] text-[20px] pb-4">
                {t("businessTitle")}
              </h2>

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium space-y-4">
                  {businessList.map((item, index) => (
                    <li key={index}>
                      <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px]">
                        {item.title}
                      </h3>{" "}
                      : {item.description}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[25px] xl:text-[20px] text-[20px] pb-4">
                {t("solutionsTitle")}
              </h2>

              <p className="text-black pb-6 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t("solutionsDesc")}</p>

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px] font-medium space-y-4">
                  {solutionList.map((item, index) => (
                    <li key={index}>
                      <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px]">
                        {item.title}
                      </h3>{" "}
                      : {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <div>
            <div>
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[25px] xl:text-[20px] text-[20px] pb-4">
                {t("benefitsTitle")}
              </h2>

              <div className="pl-2">
                <UnorderedList
                  ulClassName="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px] font-medium"
                  liClassName="pb-4 text-black last:pb-0"
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
