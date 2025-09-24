"use client";
import Image from "next/image";
import Link from 'next/link';
import BlogsCarousel from '../../../components/latestBlogCarousel';
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/sap-successfactors-performance-and-goal-management/"
  },
  "headline": "SAP SuccessFactors Performance and Goal Management",
  "description": "Learn how SAP SuccessFactors empowers organizations to streamline performance reviews, align individual goals, and boost workforce productivity.",
  "image": "https://www.rialtes.com/images/blog/successfactors-performance-goals.webp",
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
  "datePublished": "2024-10-29",
  "articleSection": "SAP HCM",
  "url": "https://www.rialtes.com/insights/blogs/sap-successfactors-performance-and-goal-management/"
}

export default function Page() {
  const currUrl = useUrl()
  const t = useTranslations('successFactorPerformance')
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { keyFeaturesData, howSapData, implementData } = blogsContent.successFactorPerformance;
  const fullUrl = "https://www.rialtes.com/insights/blogs/sap-successfactors-performance-and-goal-management";

  return (
    <section className="min-h-screen bg-white">
      <Seo
        title="SuccessFactors Performance Management & Goal Management Tips | Rialtes"
        description="SuccessFactors performance management and goal management boost employee engagement and strategic alignment. Contact us today for expert guidance and support!"
        canonical="https://www.rialtes.com/insights/blogs/sap-successfactors-performance-and-goal-management/"
      />

      <Script
        id="schema-performance"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative group overflow-hidden 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[400px]">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/successfactors-performance-goals.webp"
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
            src="/images/blog/successfactors-performance-goals.webp"
            alt="banner"
            priority
            height={0}
            width={0}
            className="w-full h-full object-cover object-[80%_30%]"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

            {/* date and icons */}
            <div className="sm:flex justify-between">
              <div>
                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('blogTopic')}</span>{" "}
                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>29 Oct 2024
              </div>

              <div>
                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                  <BlogSocialIcons fullUrl={fullUrl} />
                </div>
              </div>
            </div>

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px]"> {t('blogTitle')}</h1>
              <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('blogMainData')}</p>
              <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('blogMainData2')}</p>


              {/* describing section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('describingTitle')}</h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('describingDesc')}</p>

                <h3 className="text-[20px] md:text-[20px] 2xl:text-[21px] xl:text-[20px] 4xl:text-[24px] mt-8 font-bold">{t('configurationTitle')}</h3>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('configurationDesc')}</p>

                <h3 className="text-[20px] md:text-[20px] 2xl:text-[21px] xl:text-[20px] 4xl:text-[24px] mt-8 font-bold">{t('keyFeaturesTitle')}</h3>
                <ul className="list-disc font-medium marker:text-[#0092E0] marker:text-xl 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 pl-[34px] space-y-4">
                  {
                    keyFeaturesData.map((data, ind) => {
                      return (
                        <li key={ind}><h4 className="inline">{data.title}{" "}</h4>{data.desc}</li>
                      )
                    })
                  }
                </ul>

              </div>

              {/* how sap section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('howSapTitle')}</h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('howSapDesc')}</p>
                <ul className="list-disc font-medium marker:text-[#0092E0] marker:text-xl 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 pl-[34px] space-y-4">
                  {
                    howSapData.map((data, ind) => {
                      return (
                        <li key={ind}><h4 className="inline">{data.title}{" "}</h4>{data.desc}</li>
                      )
                    })
                  }
                </ul>
              </div>

              {/* implement section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('implementTitle')}</h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('implementDesc')}</p>
                <ul className="list-none font-medium 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 pl-[24px] space-y-5">
                  {
                    implementData.map((data, ind) => {
                      return (
                        <li key={ind}><h3 className="inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold">{data.title}{" "}</h3>{data.desc}</li>
                      )
                    })
                  }
                </ul>
              </div>

              {/* empower section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('empowerTitle')}</h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('empowerDesc')}</p>
                <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">{t('empowerDesc2')}{" "}
                  <Link className="underline" href={"mailto:sales@rialtes.com"}><span>sales@rialtes.com</span></Link> {t('empowerDesc3')} {" "} <Link className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline" href={"https://www.rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner/"}><span>
                    {t('empowerLink')}  </span></Link>
                </p>
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