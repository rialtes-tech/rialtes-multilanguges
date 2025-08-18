"use client";
import Seo from "@/app/[locale]/components/Seo";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../messages/en/insight.json';
import esContent from '../../../../../messages/es/insight.json';


const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/news/"
  },
  "name": "Rialtes News | Product Launches, Events & Media Mentions",
  "headline": "Rialtes in the News – Announcements & Industry Coverage",
  "description": "Stay up to date with the latest news from Rialtes. Discover product launches, partnership announcements, media coverage, and event highlights.",
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  }

}

export default function Page() {
  const t = useTranslations('news')
  const locale = useLocale();
  const newsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const {latestCaseStudy} = newsContent.news;

  const CaseStudyCard = ({ casestudy }) => (
  <div className="border border-[#707070] w-full h-full flex flex-col group">
    <div className="relative overflow-hidden">
      <Link href={casestudy.url}>
        <Image
          className="w-full transition-transform duration-300 hover:scale-105"
          src={casestudy.image}
          alt={casestudy.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          priority
        />
      </Link>
    </div>
    <div className="p-6 flex-grow flex flex-col justify-between transition duration-300 ease-in-out group-hover:bg-[#F0F0F0]">
      <div>
        <div className="pb-3 md:pb-4 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight">
          <span className="text-[#0092E0]">{casestudy.industry}</span>
          <span className="text-[#ACACAC]"> | </span>
          {casestudy.date}
        </div>
        <Link href={casestudy.url}>
          <h4 className="mb-2 md:mb-4 md:font-semibold 4xl:text-[30px] xl:text-[22px] text-[20px] leading-tight line-clamp-4">{casestudy.title}</h4>
        </Link>
      </div>
      <Link href={casestudy.url}>
        <p className="text-[#0092E0] font-bold mt-5 4xl:text-[30px] xl:text-[20px] text-[18px] leading-tight">{t('readMore')}</p>
      </Link>
    </div>
  </div>
);
const CaseStudy = () => {
  const [visibleCaseStudy, setVisibleCaseStudy] = useState(6);
  const loadMoreCaseStudy = () => setVisibleCaseStudy((prev) => prev + 6);
  const isLoadMoreVisible = visibleCaseStudy < latestCaseStudy.length;

  return (
    <div className="text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
        {latestCaseStudy.slice(0, visibleCaseStudy).map((casestudy) => (
          <CaseStudyCard key={casestudy.id} casestudy={casestudy} />
        ))}
      </div>

      {isLoadMoreVisible && (
        <div className="w-full mx-auto text-center md:py-20 py-10">
          <button
            type="button"
            className="border border-[#707070] font-medium w-[160px] h-[50px] relative group hover:bg-[#EDEDED]"
            onClick={loadMoreCaseStudy}>
            <span className="group-hover:pr-4 transition-all duration-300 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight">{t('loadMore')}</span>
            <svg
              className="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

  
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Rialtes News | PR Highlights and Industry Collaborations"
        description="From headline PR to powerful partnerships—explore how Rialtes leads industry change with innovation, tech moves, and smart collaborations."
        canonical="https://www.rialtes.com/insights/news/"
      />
      <Script
        id="schema-news-main"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/** hero section * */}
      <section className="relative group overflow-hidden h-[399px] lg:h-[550px] ">
        <div className="hidden md:block">
          <Image
            src="/images/news/news header.webp"
            alt="desktop banner"
            fill
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/news/news_mobile_banner.webp"
            alt="mobile banner"
            fill
            priority
          />
        </div>
        <div className="relative h-full custom-container flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12">
              <h2 className="text-black leading-tight 4xl:text-[70px]  xl:text-[50px]   text-[35px]">
               {t('newsTitle')}
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            </div>
          </div>
        </div>
      </section>
      <section
        className="custom-container">
        <div className="md:py-10 py-6 bg-white">
          <p className="text-[#000000] py-6 max-w-4xl 4xl:text-[20px] xl:text-[18px] text-[16px]  leading-tight">{t('newsDesc')}</p>
        </div>
      </section>
      <div className="custom-container">
        <section className="xl:pb-32 pt-10 pb-16 bg-white xl:pr-[142px] ">
          <CaseStudy />
        </section>
      </div>
    </div>
  );
}