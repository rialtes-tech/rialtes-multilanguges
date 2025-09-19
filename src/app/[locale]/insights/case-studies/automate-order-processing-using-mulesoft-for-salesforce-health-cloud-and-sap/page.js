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
      "https://www.rialtes.com/insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap/",
  },
  headline:
    "Case Study: Automate Order Processing Using MuleSoft for Salesforce Health Cloud and SAP",
  description:
    "Learn how Rialtes leveraged MuleSoft to integrate Salesforce Health Cloud and SAP, enabling end-to-end order automation, faster turnaround, and improved patient experience.",
  image:
    "https://www.rialtes.com/images/case-studies/case%20study%201_n%201.webp",
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
  datePublished: "2024-11-17",
};
export default function Page() {
  const t = useTranslations("automateCaseStudy");
  const locale = useLocale();
  const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { slides, problemList, solutionsList, benefitsList } =
    Content.automateCaseStudy;

  const fullUrl2 =
    "https://www.rialtes.com/insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap";
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="MuleSoft Case Study: Order Processing Automation with Salesforce & SAP"
        description="Streamlined complex order flows using MuleSoft, Salesforce, and SAP APIs. Dive into this MuleSoft case study to see integration in action."
        canonical="https://www.rialtes.com/insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap/"
      />
      <Script
        id="schema-automate"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px]  4xl:h-[650px] 2xl:h-[550px] xl:h-[450px] overflow-hidden">
        <Image
          src="/images/case-studies/case study 1_n 1.webp "
          alt="Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP"
          fill
          style={{ objectFit: "cover", objectPosition: "70% 30%" }}
          priority
        />
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white 4xl:max-w-[1080px] 4xl:w-[1080px] xl:w-[950px]">
          <div className="">
            <h1 className="text-[#000000] py-6 leading-tight text-[26px] md:text-[48px] 4xl:text-[60px] xl:text-[45px]">
              {t("autoTitle")}
            </h1>
          </div>

          <div className="">
            <div className="flex flex-col md:flex-row justify-between text-black  items-center">
              <div>
                <span className="text-[#0092E0]">{t("healthcare")}</span>{" "}
                <span className="text-[#ACACAC]"> | </span>
                {t("date")}
              </div>
              <div className="flex flex-col">
                 <div className="flex flex-row gap-6 ml-[-8px]">
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="max-w-[40px]">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        fullUrl2
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
                        fullUrl2
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
              </div>
            </div>
            <div className="pt-4"></div>
           
          </div>

          <div className="py-6"></div>

          <div className="">
            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[25px] xl:text-[20px] text-[20px] pb-4">
              {t("cliendTitle")}
            </h2>
            <p className="text-black 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t("clientDesc")}</p>
            <div className="py-6"></div>

            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[25px] xl:text-[20px] text-[20px] pb-4">
              {t("companyTitle")}
            </h2>
            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t("companyDesc")}</p>

            <div className="pl-2">
              <ul className="list-disc marker:text-[#0092E0] xl:pl-10 marker:text-xl text-black pl-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px] font-medium ">
                  {problemList.map((item, idx) => (
                    <li className="pb-4 last:pb-0" key={idx}>
                      <h3 className="inline h3-bold 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px]">
                        {item.title}
                      </h3>{" "}{item.description}
                    </li>
                  ))}
                </ul>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[25px] xl:text-[20px] text-[20px] pb-4">
                {t("solutionsTitle")}
              </h2>
              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t("solutionsDesc")}</p>

              <div className="pl-2">
                   <ul className="list-disc marker:text-[#0092E0] xl:pl-10 marker:text-xl text-black pl-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px] font-medium ">
                  {solutionsList.map((item, idx) => (
                    <li className="pb-4 last:pb-0" key={idx}>
                      <h3 className="inline h3-bold 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px]">
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
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[25px] xl:text-[20px] text-[20px] pb-4">
                {t("benefitsTitle")}
              </h2>
              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t("benefitsDesc")}</p>

              <div className="pl-2">
                <UnorderedList
                  ulClassName="list-disc marker:text-[#0092E0] 4xl:pl-10 text-black pl-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px] font-medium"
                  liClassName="pb-4"
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
