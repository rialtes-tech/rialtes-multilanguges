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
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel';
import useUrl from "@/app/[locale]/components/useUrl";

const schemaData =
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/agentic-pharma-the-ai-driven-era-of-the-pharmaceutical-industry"
  },
  "headline": "Agentic Pharma – The AI-driven era of the Pharmaceutical Industry",
  "description": "Discover how Agentic AI is transforming the pharmaceutical industry—from drug discovery to patient support programs—by enhancing compliance, efficiency, and patient outcomes.",
  "image": "https://www.rialtes.com/images/blog/agentic-pharma-blog-banner.webp",
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
  "datePublished": "2025-05-30",
  "keywords": [
    "Agentic AI in pharma",
    "AI in the pharmaceutical industry",
    "Pharma AI applications",
    "Pharma supply chain AI"
  ],
  "articleSection": "AI in Pharma",
  "url": "https://www.rialtes.com/insights/blogs/agentic-pharma-the-ai-driven-era-of-the-pharmaceutical-industry"
}

const fullUrl = "https://www.rialtes.com/insights/blogs/agentic-pharma-the-ai-driven-era-of-the-pharmaceutical-industry";

export default function Page() {
  const t = useTranslations("agenticPharma");
   const currUrl = useUrl()
  const locale = useLocale();
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { blogs, blogMainData, whyPharmaData, agenticAppData } = content.agenticPharma
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Agentic AI Pharma: Automating Complex Pharma Workflows | Rialtes"
        description="Agentic AI pharma simplifies complexity. Goal-driven, adaptive, and context-aware, it manages complex, multi-step workflows with minimal human intervention"
        canonical={"https://www.rialtes.com/insights/blogs/agentic-pharma-the-ai-driven-era-of-the-pharmaceutical-industry/"}
      />
      <Script
        id="schema-agentic-pharma"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative h-[350px] md:h-[500px] 4xl:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/agentic-pharma-blog-banner.webp"
          alt="Agentic Pharma"
          fill
          style={{ objectFit: "cover", objectPosition: "20% 60%" }}
          priority
          className="w-full h-full lg:block hidden "
        />
        <Image
          src="/images/blog/agentic-pharma-mobile-banner.webp"
          alt="Agentic Pharma"
          fill
          priority
          className="lg:hidden block"
          style={{ objectFit: "cover", objectPosition: "50% 60%" }}
        />
      </section>
      <section className="custom-container">
        <div className="py-10 bg-white">
          <div className="mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black max-w-[1084px] xl:w-[1084px]">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0] text-[16px] md:text-[20px] xl:text-[20px]'>{t('blogTopic')}</span> <span className='text-[#ACACAC]'> | </span>30 May 2025
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="max-w-[40px]">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer">
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
                      rel="noopener noreferrer">
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
          </div>
          <div className="py-6"></div>
          <div>
            <h1 className="text-[#000000] pb-6 4xl:w-[1084px] xl:w-[920px] leading-tight text-[26px] 2xl:text-[48px] xl:text-[42px] 4xl:text-[60px] md:text-[28px]">{t('blogTitle')}</h1>
          </div>
          <div>
            <div className="max-w-[1084px] xl:w-[1084px]">
              {
                blogMainData.map((data, ind) => {
                  return (
                    <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]" key={ind}>
                      {data}
                    </p>
                  )
                })
              }
              <div className="py-4"></div>

              {/* breaking down section */}
              <h2 className="pb-4 font-medium text-[#0092E0] 4xl:text-[32px] xl:text-[26px] 2xl:text-[26px]  md:text-[22px] text-[22px]"> {t('breakingTitle')}</h2>

              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('breakingData')} </p>
              <p className="text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('breakingData2')}</p>
              <div className="py-6"></div>

              {/* how agentic section */}
              <h2 className="pb-4 font-medium text-[#0092E0] 4xl:text-[32px] xl:text-[26px] 2xl:text-[26px]  md:text-[22px] text-[22px]">{t('howAgenticTitle')}</h2>
              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('howAgenticData')}</p>
              <p className="text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('howAgenticData2')}</p>
              <div className="py-6"></div>

              {/* why the pharma section */}
              <h2 className="pb-4 font-medium text-[#0092E0] 4xl:text-[32px] xl:text-[26px] 2xl:text-[26px]  md:text-[22px] text-[22px]">{t('whyPharmaTitle')}</h2>
              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('whyPharmaDesc')}</p>
              <ul className="list-disc text-black space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] font-medium xl:pl-10 pl-5">
                {
                  whyPharmaData.map((data, ind) => {
                    return (
                      <li key={ind}>
                        <h3 className="h3-bold inline 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[20px]">{data.title} : </h3>{data.desc}
                      </li>
                    )
                  })
                }
              </ul>

              <div className="py-6"></div>
              {/* agentict applications section */}
              <h2 className="pb-4 font-medium text-[#0092E0] 4xl:text-[32px] xl:text-[26px] 2xl:text-[26px]  md:text-[22px] text-[22px]"> {t('agenticAppTitle')}</h2>
              <>
                {
                  agenticAppData.map((data, ind) => {
                    return (
                      <div key={ind} className="xl:pl-10">
                        <h3 className="text-black pb-2 h3-bold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[20px]">{ind + 1} .&nbsp;{data.title}  </h3>
                        <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{data.desc}</p>
                      </div>
                    )
                  })
                }
              </>
              <div className="py-6"></div>
              {/* improve patient section */}
              <h2 className="pb-4 font-medium text-[#0092E0] 4xl:text-[32px] xl:text-[26px] 2xl:text-[26px]  md:text-[22px] text-[22px]">{t('improveTitle')}</h2>
              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]"> {t('improveData')}</p>
              <p className="text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('improveData2')} <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/industry/life-sciences/pharma-biotech-digital-transformation/?utm_source=internal&utm_medium=blog" target="_blank"> {t('improveDataLink')}</Link> {t('improveData3')} </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div className="custom-container xl:pr-0 pb-20">
        <FilteredBlogCarousel url={currUrl} />
      </div>
    </div>
  );
}