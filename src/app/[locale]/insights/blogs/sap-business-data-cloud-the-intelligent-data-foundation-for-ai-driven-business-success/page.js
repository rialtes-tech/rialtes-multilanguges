"use client";
import Image from "next/image";
import BlogsCarousel from '../../../components/latestBlogCarousel';
import Seo from "@/app/[locale]/components/Seo";
import Link from "next/link";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/sap-business-data-cloud-the-intelligent-data-foundation-for-ai-driven-business-success/"
  },
  "headline": "SAP Business Data Cloud: The Intelligent Data Foundation for AI-Driven Business Success",
  "description": "Explore how SAP Business Data Cloud provides a unified, intelligent data platform that accelerates AI initiatives and drives business transformation.",
  "image": "https://www.rialtes.com/images/blog/sap-business-data-cloud.webp",
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
  "articleSection": "SAP Data Cloud",
  "url": "https://www.rialtes.com/insights/blogs/sap-business-data-cloud-the-intelligent-data-foundation-for-ai-driven-business-success/"
}

export default function Page() {
  const t = useTranslations('sapDataCloud')
  const locale = useLocale();
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { blogs, scenario1Data } = content.sapDataCloud;
  const fullUrl = "https://www.rialtes.com/insights/blogs/sap-business-data-cloud-the-intelligent-data-foundation-for-ai-driven-business-success";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="What Is BDC in SAP? Transform with SAP Business Data Cloud | Rialtes"
        description="SAP BDC simplifies data integration by enabling real-time access to trustworthy data, supporting AI-ready decision-making and business transformation."
        canonical={"https://www.rialtes.com/insights/blogs/sap-business-data-cloud-the-intelligent-data-foundation-for-ai-driven-business-success/"}
      />

      <Script
        id="schema-nonprofit"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/sap-business-data-cloud.webp"
          alt="Agentforce Agents Scales Enterprise Resource Planning Systems with AI"
          fill
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          priority
        />
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white">
          <div className="container pl-0 mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black items-center  xl:max-w-[1084px] xl:w-[1084px]">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0]'> {t('blogTopic')}</span> <span className='text-[#ACACAC]'> | </span>22 April 2025
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
              <h1 className="text-[#000000] font-semibold  pb-6 xl:w-[704px] 4xl:w-[1004px] leading-tight text-[26px] xl:text-[40px] 4xl:text-[60px]">{t('blogTitle')}
              </h1>
              <p className="text-black">{t('blogMainData1')} <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://news.sap.com/2025/02/sap-business-data-cloud-databricks-turbocharge-business-ai/">{t('blogMainDataLink')}</Link> {t('blogMainData2')} </p>
              <p className="mt-3">{t('blogMainData3')}</p>

              {/* understanding sap business data cloud */}
              <h2 className="mt-8 font-medium text-[#0092E0] xl:text-[30px] text-[20px]">{t('understandingTitle')}</h2>
              <p className='mt-3'>{t('understandingDesc')}</p>
              <Image
                src="/images/blog/image (5).png"
                alt="How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration"
                fill
                priority
                className="!w-full !h-full !relative"
              />
              <Image
                src="/images/blog/image (5).png"
                alt="How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration"
                fill
                priority
                className="hidden !w-full !h-full !relative"
              />

              {/* whats new section */}
              <h2 className="mt-8 font-medium text-[#0092E0] xl:text-[30px] text-[20px]">{t('whatsNewTitle')}</h2>
              <p className="mt-5">{t('whatsNewDesc')}</p>
              <p className="mt-3">{t('whatsNewDesc2')}</p>

              {/* sap bdc section */}
              <h3 className="h3-bold pb-4 mt-8">{t('sapBdcTitle')}</h3>

              <p className="text-black pb-4">{t('sapBdcDesc')}</p>
              <p>{t('sapBdcDesc2')}</p>

              {/* creating unified place section */}
              <h3 className="h3-bold pb-4 mt-3">{t('creatingTitle')}</h3>

              <p className="text-black">{t('creatingDesc')}</p>

              {/* delivering section */}
              <h3 className="h3-bold pb-4 mt-4">{t('deliveringTitle')}</h3>
              <p className="text-black">{t('deliveringDesc')}</p>

              {/* how BDC works section */}
              <h2 className="mt-10 font-medium text-[#0092E0] xl:text-[30px] text-[20px]">{t('howBdcTitle')}</h2>
              <p className="mt-3">{t('howBdcDesc')}</p>

              {/* scenario 1 */}
              <h3 className="h3-bold pb-4 mt-5">{t('scenario1Title')}</h3>
              <p className="text-black pb-4">{t('scenario1Desc')}</p>

              <UnorderedList arrName={scenario1Data} ulClassName="list-disc text-black pl-4 xl:text-[20px] text-[16px] font-medium mt-3" />

              <p>{t('scenario1Desc2')}</p>

              {/* scenario 2 */}
              <h3 className="h3-bold pb-4 mt-5">{t('scenario2Title')}</h3>

              <p className="text-black">{t('scenario2Desc')}</p>

              <h2 className="mt-10 text-[#0092E0] font-medium xl:text-[30px] text-[20px]">{t('whyExcitedTitle')}</h2>
              <p className="mt-3">{t('whyExcitedDesc')}</p>

              {/* sap bdc accelerates section */}
            
              <h2 className="mt-10 font-medium text-[#0092E0] leading-tight xl:text-[30px] text-[20px]">{t('acceleratesTitle')}</h2>
              <p className="mt-3">{t('acceleratesDesc')}</p>
              <p className="mt-3">{t('acceleratesDesc2')}  <Link className='text-[#0092E0] underline' href="https://www.rialtes.com/contact-us/?utm_source=blog&utm_medium=internal">{t('acceleratesLink')}</Link> {t('acceleratesDesc3')} </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div className="custom-container pb-10">
        <BlogsCarousel slides={blogs} />
      </div>
    </div>
  );
}