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
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/news/rialtes-joins-elite-group-as-an-official-salesforce-reseller-partner"
  },
  "headline": "Rialtes Joins Elite Group as an Official Salesforce Reseller Partner",
  "description": "Rialtes earns the prestigious Salesforce Reseller Partner status, expanding its capacity to deliver end-to-end Salesforce solutions globally.",
  "image": "https://www.rialtes.com/images/news/salesforce-authorized-cloud-reseller-partner.webp",
  "datePublished": "2025-05-12",
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
  "articleSection": "News",
  "keywords": "Salesforce reseller, Rialtes Salesforce partnership, official Salesforce partner, Rialtes news"

}

export default function Page() {
  const t = useTranslations("newsElite");
  const locale = useLocale();
  const newsEliteContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { } = newsEliteContent.newsElite;


  const fullUrl = "https://www.rialtes.com/insights/news/rialtes-joins-elite-group-as-an-official-salesforce-reseller-partner";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        canonical={`https://www.rialtes.com/${locale}/insights/news/rialtes-joins-elite-group-as-an-official-salesforce-reseller-partner/`}
      />

      <Script
        id="schema-rialtes-joins"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="custom-container ">
        <section className="relative overflow-hidden  lg:!pr-0">
          <div className="xl:block hidden">
            <Image
              src="/images/news/salesforce-authorized-cloud-reseller-partner.webp"
              alt={t("bannerAlt")}
              priority
              className="h-[650px] w-full"
              width={0}
              height={0}
            />
          </div>
          <h1 className="leading-tight mt-10 4xl:text-[60px] 2xl:text-[48px] xl:text-[40px] text-[26px]">{t('title')}</h1>
          <div className="xl:hidden block mt-10 xl:mt-0">
            <Image
              src="/images/news/salesforce-authorized-cloud-reseller-partner-mobile.webp"
              alt={t("bannerAlt")}
              className="!w-full"
              width={0}
              height={0}
              priority
            />
          </div>
        </section>
        <div className="pt-10 pb-24 bg-white  ">
          <div className="container mx-auto border-b-[2px] border-gray-400 pb-6">
            <div className="flex flex-col md:flex-row justify-between text-black items-center  max-w-4xl xl:w-[1084px]">
              <div className='sm:mb-0 mb-6'>
                12 May 2025
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="max-w-[40px]">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/case-studies/linkedin.svg"
                        alt="LinkedIn-Logo"
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
                        alt="Twitter-Logo"
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
            {/* <BlogSocialIcons fullUrl={fullUrl} date="12 May 2025"/> */}
          </div>
          <div className="py-3"></div>
          <div className="">
            <p className="text-black 4xl:text-[22px] 2xl:text-[20px] xl:text-[19px] text-[18px]  mt-8">
              {t('rialtesOne')} <strong>{t('rialtesTwo')}</strong>{t('rialtesThree')} </p>

            <p className="text-black  4xl:text-[22px] 2xl:text-[20px] xl:text-[19px] text-[18px]  mt-8">{t('crest')}</p>

            <p className="text-black  4xl:text-[22px] 2xl:text-[20px] xl:text-[19px] text-[18px] mt-8">{t('journeyOne')} <strong> Prasad Venkatesan,</strong> {t('journeyTwo')}</p>

            <p className="text-black  4xl:text-[22px] 2xl:text-[20px] xl:text-[19px] text-[18px] mt-8">{t('reseller')}</p>

            <p className="text-black  4xl:text-[22px] 2xl:text-[20px] xl:text-[19px] text-[18px] mt-8">{t('visitOne')}<a className="text-blue-600" href="https://www.rialtes.com/">www.rialtes.com </a> {t('visitTwo')}<span className="text-blue-600">pr@rialtes.com </span></p>
          </div >

        </div >
      </section >
    </div >
  );
}