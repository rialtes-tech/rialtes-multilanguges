"use client";
import Image from "next/image";
import Link from 'next/link';
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/how-sap-successfactors-enhances-remote-work-management/"
  },
  "headline": "How SAP SuccessFactors Enhances Remote Work Management",
  "description": "Learn how SAP SuccessFactors supports remote workforce management with tools for engagement, performance tracking, and seamless collaboration.",
  "image": "https://www.rialtes.com/images/blog/successfactors-remote-work.webp",
  "author": {
    "@type": "Organization",
    "name": "Rialtes",
    "url": "https://www.rialtes.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  },
  "datePublished": "2025-01-21",
  "articleSection": "SAP HXM",
  "url": "https://www.rialtes.com/insights/blogs/how-sap-successfactors-enhances-remote-work-management/"
}

export default function Page() {
  const currUrl = useUrl()
  const t = useTranslations('howSuccessFactorEnhances')
  const locale = useLocale();
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { remoteData, commonData } = content.howSuccessFactorEnhances;
  const fullUrl = "https://www.rialtes.com/insights/blogs/how-sap-successfactors-enhances-remote-work-management";

  return (
    <section className="min-h-screen">
      <Seo
        title="Your Guide to SAP SuccessFactors for Remote Teams | Rialtes"
        description="Facing challenges managing remote teams? SAP SuccessFactors offers tools to boost engagement, track performance, and ensure seamless collaboration."
        canonical="https://www.rialtes.com/insights/blogs/how-sap-successfactors-enhances-remote-work-management/"
      />
      <Script
        id="schema-how-sap"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative group overflow-hidden 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[400px]">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/successfactors-remote-work.webp"
            alt="banner"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110 object-[80%_30%]"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden h-full">
          <Image
            src="/images/blog/successfactors-remote-work.webp"
            alt="banner"
            priority
            height={0}
            width={0}
            className="w-full h-full object-cover object-[20%_30%]"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

            {/* date and icons */}
            <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="21 Jan 2025" />

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight"> {t('blogTitle')}</h1>
              <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('blogMainData')}</p>

              {/* remote section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('remoteTitle')}</h2>
                <UnorderedList arrName={remoteData} ulClassName="pl-[34px] space-y-3 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
              </div>

              {/* common section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('combatTitle')}</h2>
                {
                  commonData.map((elem, ind) => {
                    return (
                      <div key={ind}>
                        <h3 className="md:mt-[50px] mt-[40px] first:mt-8 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold leading-tight">{elem.title}</h3>

                        <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-3">{elem.desc}</p>
                        <div>
                          <ul className="list-disc font-medium marker:text-xl 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 pl-[34px] space-y-4">
                            {
                              elem.dataList.map((data, ind) => {
                                return (
                                  <li key={ind}><h4 className="inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.title}{" "}</h4>{data.desc}</li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

              {/* sap successfactor section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('successFactorTitle')}</h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"><Link className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline" href={"https://www.rialtes.com/insights/blogs/sap-successfactors-performance-and-goal-management?utm_source=blog&utm_medium=organic"}><span>{t('successFactorLink')}</span></Link> {t('successFactorDesc')}</p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('successFactorDesc2')}</p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('successFactorDesc3')}</p>
              </div>

              {/* manage remote and hybrid section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('manageTitle')}</h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('manageDesc')}</p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('manageDesc2')} <Link className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline" href={"https://www.rialtes.com/contact-us/"}><span>{t('reachOutLink')}</span></Link> {t('manageDesc3')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </section>
  );
}