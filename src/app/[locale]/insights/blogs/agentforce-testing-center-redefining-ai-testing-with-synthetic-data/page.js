"use client";
import Image from "next/image";
import Link from 'next/link';
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'
import Seo from "@/app/[locale]/components/Seo";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/agentforce-testing-center-redefining-ai-testing-with-synthetic-data/"
  },
  "headline": "Agentforce Testing Center: Redefining AI Testing with Synthetic Data",
  "description": "Explore how Agentforce Testing Center leverages synthetic data to revolutionize AI model testing, ensuring security, reliability, and scalability.",
  "image": "https://www.rialtes.com/images/blog/agentforce-testing-center.webp",
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
  "datePublished": "2024-11-25",
  "articleSection": "AI Testing",
  "url": "https://www.rialtes.com/insights/blogs/agentforce-testing-center-redefining-ai-testing-with-synthetic-data/"

}
export default function Page() {
  const currUrl = useUrl()
  const t = useTranslations('agentforceTesting')
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { commonData } = blogsContent.agentforceTesting;
  const fullUrl = "https://www.rialtes.com/insights/blogs/agentforce-testing-center-redefining-ai-testing-with-synthetic-data";

  return (
    <section className="min-h-screen bg-white">
      <Seo
        title="Agentforce Testing Center: Test AI Agents Before Production"
        description="The Agentforce Testing Center is a powerful suite of tools that helps enterprises evaluate AI agents before they are deployed in production. Know more."
        canonical="https://www.rialtes.com/insights/blogs/agentforce-testing-center-redefining-ai-testing-with-synthetic-data/"
      />

      <Script
        id="schema-agent-tes"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative group overflow-hidden 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[400px]">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/agentforce-testing-center.webp"
            alt="banner"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden h-full">
          <Image
            src="/images/blog/blog-4-mob-banner.webp"
            alt="banner"
            priority
            height={0}
            width={0}
            className="w-full h-full object-cover object-[60%_30%]"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

            {/* date and icons */}
            <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="25 Nov 2024" />

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight"> {t('blogTitle')}</h1>
              <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('blogMainData')}</p>

              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('riseTitle')}</h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('riseDesc')}</p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('riseDesc2')}</p>
              </div>

              {/* common section */}
              <div>
                {
                  commonData.map((data, ind) => {
                    return (
                      <div key={ind} className="md:mt-[50px] mt-[40px]">
                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                        <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.para}</p>
                        {data.appTitle && <h3 className="text-[20px] md:text-[20px] 2xl:text-[21px] xl:text-[20px] 4xl:text-[24px] mt-5">{data.appTitle}</h3>}
                        <ul className="list-disc marker:text-[#0092E0] marker:text-xl mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] font-medium">
                          {data.list.map((elem, id) => {
                            return (
                              <li className="pb-2" key={id}><h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.title}</h4>{" "}{elem.desc}</li>
                            )
                          })}
                        </ul>
                      </div>
                    )
                  })
                }

              </div>

              {/* ai generated section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('aiTitle')}</h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('aiDesc')}</p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('aiDesc2')}</p>
              </div>

              {/* why this matters section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('whyTitle')}</h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('whyDesc')}</p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('whyDesc2')}</p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('whyDesc3')}{" "}<Link className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline" href={"https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting/"}><span className="font-normal">{t('whyLink')}</span></Link>{" "}{t('whyDesc4')} </p>

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