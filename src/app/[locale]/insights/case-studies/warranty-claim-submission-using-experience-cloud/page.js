"use client";
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/caseStudy.json";
import esContent from "../../../../../../messages/es/caseStudy.json";
import frContent from "../../../../../../messages/fr/caseStudy.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Script from "next/script";

const schemaData =
{
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/case-studies/warranty-claim-submission-using-experience-cloud"
  },
  "headline": "Case Study: Salesforce Experience Cloud Transforms Warranty Claims for a Roofing Manufacturer",
  "description": "Rialtes helped a roofing manufacturer in the building materials industry modernize warranty claims using Salesforce Experience Cloud, integrating LWC, address validation, automation, and ERP for better accuracy and efficiency.",
  "image": "https://www.rialtes.com/images/homepage/logo.svg",
  "author": {
    "@type": "Organization",
    "name": "Rialtes"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  },
  "articleSection": "Case Studies",
  "datePublished": "2025-06-10"
}

export default function Page() {
  const t = useTranslations("warrantyClaimCaseStudy");
  const locale = useLocale();
  const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { slides, benefitsList } = Content.warrantyClaimCaseStudy;

  const fullUrl = "https://www.rialtes.com/insights/case-studies/warranty-claim-submission-using-experience-cloud";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Salesforce Experience Cloud for Roofing Manufacturer | Rialtes"
        description="Know how Rialtes used Salesforce Experience Cloud to streamline warranty claims and improve customer satisfaction for a roofing manufacturer."
        canonical="https://www.rialtes.com/insights/case-studies/warranty-claim-submission-using-experience-cloud/"
      />
      <Script
        id="schema-warranty-desktop"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[350px] md:h-[500px] xl:h-[450px] 4xl:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/adaptis_web-banner.webp"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "90% 20%" }}
          priority
        />
      </section>

      <section className="custom-container">

        <div className="py-10 bg-white 4xl:max-w-[1200px] 4xl:w-[1200px] xl:w-[1000px]">
          <div>
            <h1 className="text-[#000000] py-6 leading-tight text-[24px] 4xl:text-[60px] xl:text-[45px]">{t('warrantyTitle')}</h1>
          </div>
          <div className="py-4"></div>
          <div>
            <div className="flex flex-col md:flex-row justify-between xl:max-w-[1084px] xl:w-[1084px]">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>{t('manufacturing')}</span> <span className='text-[#ACACAC]'> | </span>{t('date')}
              </div>

              <div className="flex flex-row gap-6 ml-[-8px]">
                <div className="max-w-[40px]">
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/case-studies/linkedin.svg"
                      alt="LinkedIn"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      priority
                    />
                  </a>
                </div>
                <div className="max-w-[40px]">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/case-studies/twitter.svg"
                      alt="Twitter"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="py-6"></div>
          <div>
            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[20px] pb-6">{t('clientTitle')}</h2>
            <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t('clientDesc')}</p>

            <div className="py-6"></div>
            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[20px] pb-6">{t('challengesTitle')}</h2>
            <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t('challengesDesc')}</p>

            <div className="py-6"></div>
            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[20px] pb-6">{t('solutionsTitle')}</h2>
            <p className="pb-6 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t('solutionsDesc')}</p>

            <p className="pb-6 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t('solutionsDescOne')}</p>

            <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t('solutionsDescTwo')}</p>
            <div className="py-6"></div>
            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[20px] pb-6">{t('benefitsTitle')}</h2>
            <div className="pl-2">
              <UnorderedList
                ulClassName="list-disc marker:text-[#0092E0] pl-[34px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium"
                liClassName="pb-4 last:pb-0"
                arrName={benefitsList}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div
        className="py-10 custom-container lg:pr-0">
        <RelatedTopicsCarousel slides={slides} />
      </div>
    </div>
  );
}