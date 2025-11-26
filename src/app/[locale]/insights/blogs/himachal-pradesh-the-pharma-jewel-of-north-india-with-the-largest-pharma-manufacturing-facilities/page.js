"use client";
import Image from "next/image";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import useUrl from "@/app/[locale]/components/useUrl";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "The Rise of Himachal in India’s Pharma Industry | Rialtes",
  "description": "Explore how Himachal Pradesh became a pharma manufacturing leader with SEZs, tax breaks, global supply links, and 600+ certified production units.",
  "image": "https://www.rialtes.com/images/blog/pharmaceutical-manufacturing-robotics-automation.webp",
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
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/himachal-pradesh-the-pharma-jewel-of-north-india-with-the-largest-pharma-manufacturing-facilities/"
  },
  "datePublished": "2025-07-01",
  "dateModified": "2025-11-21",
  "keywords": "Himachal Pradesh pharma industry, pharma manufacturing, contract manufacturing, pharmaceuticals India",
  "articleSection": [
    "Pharmaceutical Manufacturing",
    "Industrial Policy",
    "Regional Clusters",
    "Export & Supply Chain"
  ],
  "wordCount": 940,
  "articleBody": "This article explains how Himachal Pradesh transformed into a major pharmaceutical manufacturing hub in North India through policy incentives, industrial clusters (Baddi, Nalagarh, Paonta Sahib), SEZ support, competitive infrastructure, and a skilled workforce. It covers market size and growth, government schemes (Special Industrial Package 2003, Industrial Development Scheme 2018), CETPs and corridors, proximity to research institutes (IIT Mandi, IIM Sirmaur), and the state's role in domestic and global pharma supply chains.",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many pharma manufacturing units are there in Himachal Pradesh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "More than 600 units operate across the state, spanning formulations, APIs, and contract manufacturing facilities."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Baddi called the pharma hub of India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Baddi hosts the highest concentration of pharma units in the region, benefits from SEZ and export-friendly policies, strong logistics and ancillary services, and a steady supply of skilled workers — making it a preferred third-party manufacturing hub."
      }
    },
    {
      "@type": "Question",
      "name": "Does Himachal Pradesh offer tax benefits for pharma companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The state has offered incentives including income-tax holidays, excise duty exemptions, capital subsidies, and targeted incentives under state industrial schemes and SEZ benefits that reduce upfront and operating costs."
      }
    },
    {
      "@type": "Question",
      "name": "What percentage of India’s pharma output comes from Himachal Pradesh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The article reports that approximately 35 percent of India's total pharmaceutical production originates from Himachal Pradesh, driven by its high concentration of manufacturing units and contract manufacturers."
      }
    },
    {
      "@type": "Question",
      "name": "Why do multinational companies invest in Himachal Pradesh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multinationals invest for predictable governance, low operational costs, export-capable SEZs, reliable utilities and CETPs, faster approvals, and a skilled workforce — all of which support high-quality, GMP-compliant manufacturing at scale."
      }
    }
  ]
}
const fullUrl = "https://www.rialtes.com/insights/blogs/himachal-pradesh-the-pharma-jewel-of-north-india-with-the-largest-pharma-manufacturing-facilities";

export default function Page() {
  const t = useTranslations("himachalBlog");
  const locale = useLocale();
  const currUrl = useUrl();
  const content = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
  blogMainData,
   faqData,
   supplyData,
   manufacturersData,
   incentivesData,
   marketSizeData,
   riseData,
   quickAnswer
  } = content.himachalBlog;
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/himachal-pradesh-the-pharma-jewel-of-north-india-with-the-largest-pharma-manufacturing-facilities/`}
      />
      <Script
        id="schema-himachal"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        {/* Desktop Image */}
        <div className="hidden xl:block">
          <Image
            src="/images/blog/pharmaceutical-manufacturing-robotics-automation.webp"
            alt={t("bannerAlt")}
            fill
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block xl:hidden">
          <Image
            src="/images/blog/pharmaceutical-manufacturing-robotics-automation-mobile.webp"
            alt={t("bannerAlt")}
            height={0}
            width={0}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">
            {/* date and icons */}
            <BlogSocialIcons
              fullUrl={fullUrl}
              topic={t("blogTopic")}
              date="01 July 2025"
            />
            {/* main blog */}

            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>
              <div className="xl:mt-[38px] mt-[33px]">
                {blogMainData.map((data, ind) => {
                  return (
                    <p
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      key={ind}
                    >
                      {data}
                    </p>
                  );
                })}
                <Image
                  src={t('impactImage')}
                  alt={t("impactImgAlt")}
                  width={0}
                  height={0}
                  className="xl:w-full h-full w-full relative xl:right-[64px] lg:right-[55px]  md:w-[80%]"
                />
              </div>
               {/* Quick Answer */}
              <div className="md:mt-[50px] mt-[40px]">
                {quickAnswer.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}{" "}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}{" "}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* The Rise of Pharma  */}
              <div className="md:mt-[50px] mt-[40px]">
                {riseData.map((item, index) => (
                  <div key={index}>
                    <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                      {item.title}
                    </h2>

                    {item.data.map((paragraph, i) => (
                      <p
                        key={i}
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
              {/* Market Size and Growth*/}
              <div className="md:mt-[50px] mt-[40px]">
                {marketSizeData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}{" "}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}{" "}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* How Government Incentives Built Himachal’s Pharma Landscape */}
              <div className="md:mt-[50px] mt-[40px]">
                {incentivesData.map((block, i) => (
                  <div key={i} className="mt-[40px] md:mt-[50px]">
                    <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                      {block.title}
                    </h2>
                    <p
                      key={i}
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                    >
                      {block.description}
                    </p>

                    {block.sections.map((sec, j) => (
                      <div key={j} className="mt-5">
                        <h3 className="font-semibold 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px]">
                          {sec.subtitle}
                        </h3>

                        <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                          {sec.desc}
                        </p>

                        <UnorderedList
                          arrName={sec.list}
                          ulClassName="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                        />

                        {sec.footer && (
                          <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                            {sec.footer}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              {/* Why Manufacturers Prefer Baddi, Solan, and Nalagarh */}
              <div className="md:mt-[50px] mt-[40px]">
                {manufacturersData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}{" "}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}{" "}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Himachal Pradesh’s Growing Role in Asia’s Pharma Supply Chain */}
              <div className="md:mt-[50px] mt-[40px]">
                {supplyData.map((item, index) => (
                  <div key={index}>
                    <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                      {item.title}
                    </h2>

                    {item.data.map((paragraph, i) => (
                      <p  key={i}
                        className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* faq section */}
             <section className="xl:mt-[80px] mt-[40px] custom-container">
               <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                 {t('faq')}
               </h2>
               <div className="mt-[29px] xl:mt-[30px]">
                 <FAQAccordion faqData={faqData} />
               </div>
             </section>
       
      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </div>
  );
}
