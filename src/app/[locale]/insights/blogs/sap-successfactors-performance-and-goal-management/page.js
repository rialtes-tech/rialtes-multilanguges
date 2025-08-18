"use client";
// pages/blog-detail.js
import Image from "next/image";
import Link from 'next/link';
import BlogsCarousel from '../../../components/latestBlogCarousel';
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { changeLocalization } from "../../components/changeLocalization";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
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
  const t = useTranslations('successFactorPerformance')
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { blogs, keyFeaturesData, howSapData, implementData } = blogsContent.successFactorPerformance;
  const fullUrl = "https://www.rialtes.com/insights/blogs/sap-successfactors-performance-and-goal-management";

  return (
    <div className="min-h-screen bg-white">
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

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/successfactors-performance-goals.webp "
          alt="SAP SuccessFactors Performance and Goal Management"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "90% 20%" }}
        />
      </section>

      <section className="custom-container" >

        <div className="py-10 bg-white xl:max-w-[1084px] xl:w-[1084px]">
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black items-center">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0]'>{t('blogTopic')}</span> <span className='text-[#ACACAC]'> | </span>29 Oct 2024
              </div>
              <div className="flex flex-col">
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
          </div>
          <div className="py-6"></div>
          <h1 className="text-[#000000] 4xl:w-[1084px] xl:w-[745px] font-semibold pb-6 leading-tight text-[26px] xl:text-[40px] 4xl:text-[60px]">{t('blogTitle')}</h1>
          <div>
            <p className="text-black pb-4">{t('blogMainData')}</p>
            <p className="text-black">{t('blogMainData2')}</p>

            <div className="py-6"></div>
            {/* describing section */}
            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4"> {t('describingTitle')}</h2>
            <p className="text-black pb-4">{t('describingDesc')}</p>

            <h3 className="text-black pb-4 h3-bold">{t('configurationTitle')}</h3>
            <p className="text-black pb-4">{t('configurationDesc')}</p>

            <h3 className="text-black pb-4 h3-bold">{t('keyFeaturesTitle')}</h3>

            <div className="pl-3">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 ">
                {
                  keyFeaturesData.map((data, ind) => {
                    return (
                      <li key={ind}><h4 className="inline">{data.title}</h4>{data.desc}</li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="py-6"></div>
            {/* how sap successfactor section */}
            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4"> {t('howSapTitle')}</h2>
            <p className="text-black pb-4">{t('howSapDesc')}</p>

            <div className="pl-3">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4">
                {
                  howSapData.map((data, ind) => {
                    return (
                      <li key={ind}><h4 className="inline">{data.title}</h4>{data.desc}</li>
                    )
                  })
                }
              </ul>
            </div>

            <div className="py-6"></div>

            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('implementTitle')}</h2>

            <p className="text-black pb-4">{t('implementDesc')}</p>
            {
              implementData.map((data, ind) => {
                return (
                  <div key={ind}>
                    <h3 className="text-black pb-4 h3-bold">{data.title}</h3>
                    <p className="text-black pb-4">{data.desc}</p>
                  </div>
                )
              })
            }

            <div className="py-6"></div>

            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('empowerTitle')}</h2>

            <p className="text-black pb-4">{t('empowerDesc')}</p>

            <p className="text-black pb-4">{t('empowerDesc2')}{" "} 
              <Link className="underline" href={"mailto:sales@rialtes.com"}><span>sales@rialtes.com</span></Link> {t('empowerDesc3')} {" "} <Link className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline" href={"https://www.rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner/"}><span>
                {t('empowerLink')}  </span></Link>
            </p>

          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div className="custom-container lg:pr-0 pb-10">
        <BlogsCarousel slides={blogs} />
      </div>
    </div>
  );
}