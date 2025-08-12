"use client";
// pages/case-study-detail.js
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/caseStudy.json";
import esContent from "../../../../../../messages/es/caseStudy.json";
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
   const Content = locale === "es" ? esContent : enContent;
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

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
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
          <div className=" ">
            <h1 className="text-[#000000] py-6 leading-tight text-[24px] 4xl:text-[60px] xl:text-[45px] ">{t('warrantyTitle')}</h1>
          </div>
          <div className="py-4"></div>
          <div className="">
            <div className="flex flex-col md:flex-row justify-between text-black  xl:max-w-[1084px] xl:w-[1084px]">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>{t('manufacturing')}</span> <span className='text-[#ACACAC]'> | </span>{t('date')}
              </div>
              <div className="flex flex-col">
                <span>{t('read')}</span>
              </div>
            </div>
            <div className="pt-4"></div>
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
                    >                      <Image
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

          <div className="py-6"></div>
          <div className="">
            <div className="">


              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px]  pb-6">{t('clientTitle')}</h2>
              <p className="text-black">{t('clientDesc')}</p>

              <div className="py-6"></div>
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px]  pb-6">{t('challengesTitle')}</h2>
              <p className="text-black ">{t('challengesDesc')}</p>

              <div className="py-6"></div>
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px]  pb-6">{t('solutionsTitle')}</h2>
              <p className="text-black pb-6">{t('solutionsDesc')}</p>

              <p className="text-black pb-6">{t('solutionsDescOne')}</p>

              <p className="text-black">{t('solutionsDescTwo')}</p>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px]  pb-6">{t('benefitsTitle')}</h2>
             <div className="pl-2">
                 <UnorderedList
                              ulClassName="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium"
                              liClassName="pb-4 text-black last:pb-0"
                              arrName={benefitsList}
                            />
               
             </div>

            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div
        className="py-10
        custom-container"
      >
        <RelatedTopicsCarousel slides={slides} />

      </div>
    </div>
  );
}