"use client";
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
      "https://www.rialtes.com/insights/case-studies/salesforce-health-cloud-prior-authorization/",
  },
  headline:
    "Case Study: Enhancing Prior Authorization Workflow Using Salesforce Health Cloud",
  description:
    "Explore how Rialtes helped streamline and automate the prior authorization workflow using Salesforce Health Cloud, leading to faster approvals, reduced errors, and improved patient outcomes.",
  image: "https://www.rialtes.com/images/case-studies/case-study-8.webp",
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
  datePublished: "2024-08-02",
};
export default function Page() {
  const t = useTranslations("salesForceCaseStudy");
  const locale = useLocale();
  const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { slides, problemList, solutionsList, benefitsList } =Content.salesForceCaseStudy;
  const fullUrl ="https://www.rialtes.com/insights/case-studies/salesforce-health-cloud-prior-authorization";
  return (
    <div className="min-h-screen bg-white">
      <Seo title="Salesforce Health Cloud Case Study: Prior Authorization Streamlined"
        description="See how Salesforce Health Cloud sped up prior authorizations, streamlining workflows in complex healthcare environments for faster patient care."
        canonical="https://www.rialtes.com/insights/case-studies/salesforce-health-cloud-prior-authorization/"
/>
      <Script
        id="schema-salesforce-health"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/case-study-8.webp "
          alt="Salesforce Health Cloud, Prior Authorization"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
          priority
        />
      </section>
      <section className="custom-container">
        <div className="py-10 bg-white 4xl:max-w-[1084px] 4xl:w-[1084px] xl:w-[850px]">
          <div className="">
            <h1 className="text-[#000000] py-6  leading-tight text-[24px] 4xl:text-[60px] xl:text-[45px]">
              {t("salesforceTitle")}
            </h1>
          </div>
          <div className="">
            <div className="flex flex-col md:flex-row justify-between text-black">
              <div className="pb-6">
                <span className="text-[#0092E0]">{t("healthcare")} </span>{" "}
                <span className="text-[#ACACAC]"> | </span>
                {t("date")}
              </div>

              <div className="flex flex-col ">
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
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t("clientTitle")}
              </h2>
              <p className="text-black">{t("clientDesc")}</p>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t("problemTitle")}
              </h2>
              <p className="text-black pb-6">{t("problemDesc")}</p>

              <div className="pl-2">
                <UnorderedList
                  ulClassName="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium"
                  liClassName="pb-4 text-black last:pb-0"
                  arrName={problemList}
                />
              </div>
              <div className="py-6"></div>
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t("solutionsTitle")}{" "}
              </h2>
              <p className="text-black pb-6">{t("solutionsDesc")} </p>

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium">
                  {solutionsList.map(({ title, description }, idx) => (
                    <li key={idx} className="pb-4 last:pb-0">
                      <h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">
                        {title}
                      </h3>
                      : {description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
            <div className="">
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t("benefitsTitle")}
              </h2>
              <div className="pl-2">
                <UnorderedList
                  ulClassName="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium"
                  liClassName="pb-4 text-black last:pb-0"
                  arrName={benefitsList}
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
