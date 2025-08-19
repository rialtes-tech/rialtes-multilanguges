"use client";
import Seo from "@/app/[locale]/components/Seo";
import Image from "next/image";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/insight.json";
import esContent from "../../../../../../messages/es/insight.json";
import frContent from '../../../../../../messages/fr/insight.json';
import { changeLocalization } from "../../../components/changeLocalization";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh/",
  },
  headline: "Rialtes Opens New Sales Office in Baddi, Himachal Pradesh",
  description:
    "Rialtes expands its regional presence with a new sales office in Baddi, Himachal Pradesh, supporting digital transformation needs in North India.",
  image: "https://www.rialtes.com/images/news/baddi-office-banner.webp",
  datePublished: "2025-04-04",
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
  articleSection: "News",
};

export default function Page() {
  const t = useTranslations("newsSales");
  const locale = useLocale();
  const newsSalesContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const {  paragraphs } =newsSalesContent.newsSales;
  
  const fullUrl =
    "https://www.rialtes.com/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Rialtes Opens Sales Office in Baddi, HP"
        description="Rialtes opens a new office in Baddi, Himachal Pradesh, to enhance client service and deliver Salesforce and SAP solutions for the manufacturing industry."
        canonical="https://www.rialtes.com/insights/news/rialtes-opens-new-sales-office-in-baddi-himachal-pradesh/"
      />

      <Script
        id="schema-rilates-opens"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="custom-container ">
        <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
          <div>
            <Image
              src="/images/homepage/inauguration-14 2.webp"
              alt="How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration"
              fill
              priority
            />
            <h1 className="text-white xl:text-[50px] font-medium xl:w-[65%] absolute container xl:pl-20 xl:pt-[15rem] pl-8 pt-16">
              {t("rialtesTitle")}
            </h1>
          </div>
        </section>
        <div className="pt-10 pb-24 bg-white">
          <div className="container mx-auto border-b-[2px] border-gray-400 pb-6">
            <div className="flex flex-col md:flex-row justify-between text-black items-center  max-w-4xl xl:w-[1084px]">
              <div className="sm:mb-0 mb-6">{t("date")}</div>
              <div className="flex flex-col">
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
          </div>
          <div className="py-3"></div>

            <div className="">
              {paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-black xl:text-[22px] text-[18px] mt-8"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
              <h3 className="text-[#068EDA] mt-10 font-bold">{t("heading")}</h3>
              <p className="text-black  xl:text-[22px] text-[18px] mt-8">
                {t("aboutDesc")}
              </p>
              <p className="text-black  xl:text-[22px] text-[18px] mt-10">
                {t("aboutDescOne")}
              </p>
              <p className="text-black  xl:text-[22px] text-[18px] mt-10 font-bold">
                {t("aboutDescTwo")}
              </p>

              <p className="xl:text-[22px] text-[18px]">
                Email: pr@rialtes.com
              </p>
            </div>
         
        </div>
      </section>
    </div>
  );
}
