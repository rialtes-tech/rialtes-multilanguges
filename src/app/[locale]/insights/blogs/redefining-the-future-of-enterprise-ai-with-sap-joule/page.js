"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Link from "next/link";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel';
import useUrl from "@/app/[locale]/components/useUrl";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule/"
  },
  "headline": "Redefining the Future of Enterprise AI with SAP Joule",
  "description": "Discover how SAP Joule is shaping enterprise AI by enabling smarter automation, enhanced decision-making, and transformative business insights.",
  "image": "https://www.rialtes.com/images/blog/sap-joule-ai.webp",
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
  "datePublished": "2025-04-22",
  "articleSection": "SAP AI",
  "url": "https://www.rialtes.com/insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule/"
}

export default function Page() {
  const t = useTranslations("redefiningBlog");
  const locale = useLocale();
    const currUrl = useUrl()
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { sapGenerativeData, jouleData, howAiWorkData, howSapJouleData, sapJouleData, quickGlimpseData1, responsiveData } = content.redefiningBlog
  const fullUrl = "https://www.rialtes.com/insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        canonical={"https://www.rialtes.com/insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule/"}
      />
      <Script
        id="schema-redefining"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative h-[350px]  4xl:h-[650px] 2xl:h-[500px] xl:h-[450px] overflow-hidden">
        <Image
          src="/images/blog/sap-joule-ai.webp"
          alt="Agentforce Agents Scales Enterprise Resource Planning Systems with AI"
          fill
          style={{ objectFit: "cover", objectPosition: "11% 20%" }}
          priority
        />
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white">
          <div className="pl-0 mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black max-[1084px] xl:w-[1084px]">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0]'>{t('blogTopic')}</span> <span className='text-[#ACACAC]'> | </span>25 April 2025
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
          <div className="container pl-0 mx-auto">
            <div className="xl:max-w-[1084px] xl:w-[1084px]">
              <h1 className="text-[#000000] pb-6 4xl:w-[1084px] xl:w-[720px] leading-tight text-[26px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] 4xl:text-[60px]">
                {t('blogTitle')}</h1>

              <p className="text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('blogMainData')} <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.youtube.com/watch?v=YRg5a0iKKuI&t=1s"> {t('blogMainLink')}</Link> {t('blogMainData2')}  </p>

              {/* a quick glimpse section */}
              <h2 className="mt-8 font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] text-[22px]">{t('quickGlimpseTitle')}</h2>
              <p className='mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]'> {t('quickGlimpseDesc')}</p>

              <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('quickGlimpseDescTitle')}</p>
              <UnorderedList arrName={quickGlimpseData1} ulClassName="list-disc xl:pl-10 text-black pl-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] font-medium my-3 marker:text-[#0092E0]" />

              <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('quickGlimpseDesc2')}</p>

              {/* sap generative section */}
              <h2 className="mt-10 font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] text-[22px]">{t('sapGenerativeTitle')}</h2>
              <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('sapGenerativeDesc')}</p>
              <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('sapGenerativeDesc2')}</p>
              <UnorderedList arrName={sapGenerativeData} ulClassName="list-disc xl:pl-10 text-black pl-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] font-medium mt-3 space-y-3 marker:text-[#0092E0]" />

              <h3 className="h3-bold mt-5">{t('resposibleTitle')}</h3>
              <p className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('responsiveDesc')}</p>
              <ul className="list-disc text-black pl-4 4xl:text-[20px] xl:pl-10 2xl:text-[17px] xl:text-[17px] text-[16px] font-medium mt-3 space-y-3 marker:text-[#0092E0]">
                {
                  responsiveData.map((data, ind) => {
                    return (
                      <li key={ind}><div className="font-bold inline">{data.title}</div>{data.desc}</li>
                    )
                  })
                }
              </ul>

              {/* how does joule work section */}
              <h2 className="mt-10 font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] text-[22px]">{t('jouleTitle')}</h2>
              <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('jouleDesc')}</p>

              {
                jouleData.map((data, ind) => {
                  return (
                    <div className="xl:pl-10" key={ind}>
                      <h3 className="h3-bold pb-4 mt-3">{ind + 1}. {data.title} </h3>
                      <p className="text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{data.desc}</p>
                    </div>
                  )
                })
              }

              {/* how does ai work */}
              <h2 className="mt-10 font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] text-[22px]">{t('howAiWorkTitle')}</h2>
              <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('howAiWorkDesc')}</p>
              <UnorderedList arrName={howAiWorkData} ulClassName="list-disc xl:pl-10 text-black pl-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] font-medium mt-3 marker:text-[#0092E0]" />

              <h2 className="mt-10 font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] text-[22px]">{t('howSapJouleTitle')}</h2>
              {
                howSapJouleData.map((data, ind) => {
                  return (
                    <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]" key={ind}>{data}</p>
                  )
                })
              }

              {/* sap joule section */}
              <h2 className="mt-10 font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] text-[22px]">{t('sapJouleTitle')}</h2>
              <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('sapJouleDesc')}</p>

              {/* sap joule data */}
              {
                sapJouleData.map((data, ind) => {
                  return (
                    <div key={ind} className="xl:pl-10">
                      <h3 className="h3-bold pb-4 mt-3">{data.title}</h3>
                      <p className="text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{data.desc}</p>
                    </div>
                  )
                })
              }

              <h2 className="mt-10 font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] text-[22px]">{t('shiftFromTitle')}</h2>
              <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('shiftFromDesc')}</p>
              <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('shiftFromDesc2')} <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/contact-us/?utm_source=blog&utm_medium=internal">{t('contactUsLink')}</Link> {t('shiftFromDesc3')} <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner/?utm_source=blog&utm_medium=internal">{t('shiftFromLink2')}</Link> {t('shiftFromAnd')} <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/services/spend-management/sapbuyplus-ariba-implementation-partner/?utm_source=blog&utm_medium=internal">{t('shiftFromLink3')}.</Link> </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div className="custom-container xl:pr-0 xl:my-[80px] my-[60px]">
       <FilteredBlogCarousel url={currUrl} />
      </div>
    </div>
  );
}