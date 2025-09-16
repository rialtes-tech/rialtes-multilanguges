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
  "@type": "TechArticle",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/case-studies/warranty-claim-submission-mobile-i-pad-using-experience-cloud",
  },
  headline: "Salesforce Experience Cloud Case Study: Mobile Warranty Portal",
  description:
    "This case study details how Rialtes implemented a mobile-first Salesforce Experience Cloud solution for a leading roofing manufacturer, streamlining warranty submissions and enhancing customer experience through Lightning Web Components.",
  image:
    "https://www.rialtes.com/images/case-studies/Adaptis-for-web-casestudy-banner.webp",
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
  proficiencyLevel: "Expert",
  articleSection: "Case Studies",
  datePublished: "2025-05-30",
};
export default function Page() {
  const t = useTranslations("mobileCaseStudy");
  const locale = useLocale();
  const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { slides, benifitList } = Content.mobileCaseStudy;

  const fullUrl =
    "https://www.rialtes.com/insights/case-studies/warranty-claim-submission-mobile-i-pad-using-experience-cloud";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title=" Salesforce Experience Cloud Case Study: Mobile Warranty Portal | Rialtes"
        description=" Discover how a leading roofing brand used Salesforce Experience Cloud to deliver a mobile-friendly warranty claim experience customers love."
        canonical="https://www.rialtes.com/insights/case-studies/warranty-claim-submission-mobile-i-pad-using-experience-cloud/"
      />

      <Script
        id="schema-warranty-mobile"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[380px] sm:h-[550px] xl:h-[450px] 4xl:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/Adaptis-for-web-casestudy-banner.webp"
          alt="banner"
          className="md:block hidden"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <Image
          src="/images/case-studies/Adaptis-for-mobile-banner.webp"
          alt="banner"
          className="md:hidden block"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </section>
      <section className="custom-container">
        <div className="py-10 bg-white 4xl:max-w-[1084px] 4xl:w-[1084px] xl:w-[850px]">
          <div>
            <h1 className="text-[#000000] py-6 leading-tight text-[24px] 4xl:text-[60px] xl:text-[45px]">
              {t("claimTitle")}
            </h1>
          </div>                                                          
          <div className="py-4"></div>
          <div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="pb-6">
                <span className="text-[#0092E0]">{t("manufacturing")}</span>
                <span className="text-[#ACACAC]"> | </span>
                {t("date")}                        
              </div>
              <div className="flex flex-row gap-6 ml-[-8px] ">
                <div className="max-w-[40px]">
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`} target="_blank" rel="noopener noreferrer" >
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
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`} target="_blank" rel="noopener noreferrer" >

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
            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[20px] pb-4">
              {t("clientTitle")}
            </h2>
            <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t("clientDesc")}</p>
            <div className="py-6"></div>
            <h2 className=" font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[20px] pb-4">
              {t("challengesTitle")}
            </h2>
            <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] pb-12">{t("challengesDesc")}</p>
            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[20px] pb-4">
              {t("solutionsTitle")}
            </h2>
            <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] pb-6">{t("solutionsDesc")}</p>

            <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] pb-6">{t("solutionsDescOne")}</p>

            <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] pb-12">{t("solutionsDescTwo")}</p>

            <h2 className=" font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[20px] pb-4">
              {t("benefitsTitle")}
            </h2>
            <UnorderedList
              ulClassName="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-[38px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium"
              liClassName="pb-4 text-black last:pb-0"
              arrName={benifitList}
            />
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
