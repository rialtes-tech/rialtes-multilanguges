"use client";
import Seo from "@/app/[locale]/components/Seo";
import Image from "next/image";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/insight.json";
import esContent from "../../../../../../messages/es/insight.json";
import frContent from '../../../../../../messages/fr/insight.json';
import { changeLocalization } from "../../../components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";


export default function Page() {
  const t = useTranslations("newsDataBricks");
  const locale = useLocale();
  const newsDataBricksContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { paragraphs, paragraphsEnd, listItems,schemaData } = newsDataBricksContent.newsDataBricks;


  const fullUrl = "https://www.rialtes.com/insights/news/rialtes-becomes-certified-databricks-partner-to-deliver-next-gen-ai-and-data-services-across-sap-and-salesforce-ecosystems";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        canonical={`https://www.rialtes.com/${locale}/insights/news/rialtes-becomes-certified-databricks-partner-to-deliver-next-gen-ai-and-data-services-across-sap-and-salesforce-ecosystems`}
      />

      <Script
        id="schema-rialtes-become"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="custom-container">
        <section className="relative overflow-hidden xl:h-[500px] 4xl:h-[650px]">
          <div className="xl:block hidden">
            <Image
              src={t('bannerImage')}
              alt={t("bannerAlt")}
              fill
              priority
            />
          </div>
          <div className="xl:hidden block">
            <Image
              src={t('bannerImageMobile')}
              alt={t("bannerAlt")}
              className="!w-full h-full"
              width={0}
              height={0}
              priority
            />
          </div>
        </section>
        <h1 className="mt-10 4xl:text-[60px]  2xl:text-[48px]   xl:text-[42px]  md:text-[28px] text-[26px] leading-tight xl:w-[80%] 4xl:w-full">{t("title")}</h1>

        <div className="pt-10 pb-24 bg-white">
          <div className="container mx-auto border-b-[2px] border-gray-400 pb-6">
            <div className="flex flex-col md:flex-row justify-between text-black items-center  max-w-4xl xl:w-[1084px]">
              <div className="sm:mb-0 mb-6">18 April 2025</div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="max-w-[40px]">
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer">
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
                      target="_blank"
                      rel="noopener noreferrer">
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

          <div className="mx-auto ">
            <div className="xl:w-[1084px]">
              {paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className={`text-black 4xl:text-[20px] xl:text-[17px] text-[16px] mt-8`}
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
              <UnorderedList
                ulClassName="list-disc text-black pl-[36px] lg:pl-[56px] 4xl:text-[20px] xl:text-[17px] text-[16px] font-medium mt-3"
                liClassName="pb-4"
                arrName={listItems}
              />
              {paragraphsEnd.map((para, idx) => (
                <p
                  key={idx}
                  className="text-black 4xl:text-[20px] xl:text-[17px] text-[16px] mt-8"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}
