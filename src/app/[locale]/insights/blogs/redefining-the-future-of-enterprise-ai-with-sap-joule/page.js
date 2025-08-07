"use client";
import Image from "next/image";
import BlogsCarousel from '../../../components/latestBlogCarousel';
import Seo from "@/app/[locale]/components/Seo";
import Link from "next/link";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl"; 
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import UnorderedList from "@/app/[locale]/components/unorderedList";
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
  const content = locale === "es" ? esContent : enContent;
  const { blogs, sapGenerativeData, jouleData, howAiWorkData, howSapJouleData, sapJouleData, quickGlimpseData1, responsiveData } = content.redefiningBlog
  const fullUrl = "https://www.rialtes.com/insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="SAP Joule AI: Powering the Future of Enterprise | Rialtes"
        description="SAP Joule AI transforms business operations by enabling faster decision-making, giving users instant answers without navigating complex dashboards."
        canonical={"https://www.rialtes.com/insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule/"}
      />
      <Script
        id="schema-redefining"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/sap-joule-ai.webp"
          alt="Agentforce Agents Scales Enterprise Resource Planning Systems with AI"
          fill
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          priority
        />
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white">
          <div className="container pl-0 mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black items-center max-[1084px] xl:w-[1084px]">
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
              <h1 className="text-[#000000] font-semibold pb-6 4xl:w-[1084px] xl:w-[720px] leading-tight text-[26px] xl:text-[40px] 4xl:text-[60px]">
                {t('blogTitle')}</h1>

              <p className="text-black">{t('blogMainData')} <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.youtube.com/watch?v=YRg5a0iKKuI&t=1s"> {t('blogMainLink')}</Link>{t('blogMainData2')}  </p>

              {/* a quick glimpse section */}
              <h2 className="mt-8 font-medium text-[#0092E0] xl:text-[30px] text-[20px]">{t('quickGlimpseTitle')}</h2>
              <p className='mt-3'> {t('quickGlimpseDesc')}</p>

              <p className="mt-3">{t('quickGlimpseDescTitle')}</p>
              <UnorderedList arrName={quickGlimpseData1} ulClassName="list-disc text-black pl-4 xl:text-[20px] text-[16px] font-medium my-3" />

              <p>{t('quickGlimpseDesc2')}</p>

              {/* sap generative section */}
              <h2 className="mt-10 font-medium text-[#0092E0] xl:text-[30px] text-[20px]">{t('sapGenerativeTitle')}</h2>
              <p className="mt-3">{t('sapGenerativeDesc')}</p>
              <p className="mt-3">{t('sapGenerativeDesc2')}</p>
              <UnorderedList arrName={sapGenerativeData} ulClassName="list-disc text-black pl-4 xl:text-[20px] text-[16px] font-medium mt-3 space-y-3" />

              <h3 className="h3-bold mt-5">{t('resposibleTitle')}</h3>
              <p className="mt-4">{t('responsiveDesc')}</p>
              <ul className="list-disc text-black pl-4 xl:text-[20px] text-[16px] font-medium mt-3 space-y-3">
                {
                  responsiveData.map((data, ind) => {
                    return (
                      <li key={ind}><h4 className="font-bold inline">{data.title}</h4>{data.desc}</li>
                    )
                  })
                }
              </ul>

              {/* how does joule work section */}
              <h2 className="mt-10 font-medium text-[#0092E0] xl:text-[30px] text-[20px]">{t('jouleTitle')}</h2>
              <p className="mt-3">{t('jouleDesc')}</p>

              {
                jouleData.map((data, ind) => {
                  return (
                    <div>
                      <h3 className="h3-bold pb-4 mt-3">{ind + 1}.{data.title} </h3>
                      <p className="text-black">{data.desc}</p>
                    </div>
                  )
                })
              }

              {/* how does ai work */}
              <h2 className="mt-10 font-medium text-[#0092E0] xl:text-[30px] text-[20px]">{t('howAiWorkTitle')}</h2>
              <p className="mt-3">{t('howAiWorkDesc')}</p>
              <UnorderedList arrName={howAiWorkData} ulClassName="list-disc text-black pl-4 xl:text-[20px] text-[16px] font-medium mt-3" />

              <h2 className="mt-10 font-medium text-[#0092E0] xl:text-[30px] text-[20px]">{t('howSapJouleTitle')}</h2>
              {
                howSapJouleData.map((data, ind) => {
                  return (
                    <p className="mt-3" key={ind}>{data}</p>
                  )
                })
              }

              {/* sap joule section */}
              <h2 className="mt-10 font-medium text-[#0092E0] xl:text-[30px] text-[20px]">{t('sapJouleTitle')}</h2>
              <p className="mt-3">{t('sapJouleDesc')}</p>

              {/* sap joule data */}
              {
                sapJouleData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h3 className="h3-bold pb-4 mt-3">{data.title}</h3>
                      <p className="text-black">{data.desc}</p>
                    </div>
                  )
                })
              }

              <h2 className="mt-10 font-medium text-[#0092E0] xl:text-[30px] text-[20px]">{t('shiftFromTitle')}</h2>
              <p className="mt-3">{t('shiftFromDesc')}</p>
              <p className="mt-3">{t('shiftFromDesc2')} <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/contact-us/?utm_source=blog&utm_medium=internal">
                {t('contactUsLink')}</Link>
                {t('shiftFromDesc3')}
                <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner/?utm_source=blog&utm_medium=internal">{t('shiftFromLink2')} </Link> {t('shiftFromAnd')} <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/services/spend-management/sapbuyplus-ariba-implementation-partner/?utm_source=blog&utm_medium=internal">{t('shiftFromLink3')}.</Link> </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div className="custom-container">
        <BlogsCarousel slides={blogs} />
      </div>
    </div>
  );
}