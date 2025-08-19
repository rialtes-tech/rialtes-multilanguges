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

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/how-sap-successfactors-supports-diversity-equity-and-inclusion-initiatives/"
  },
  "headline": "How SAP SuccessFactors Supports Diversity, Equity, and Inclusion Initiatives",
  "description": "Discover how SAP SuccessFactors helps organizations champion DEI through analytics, inclusive hiring, unbiased performance reviews, and culture-driven tools.",
  "image": "https://www.rialtes.com/images/blog/successfactors-diversity-inclusion.webp",
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
  "datePublished": "2024-11-12",
  "articleSection": "SAP HXM",
  "url": "https://www.rialtes.com/insights/blogs/how-sap-successfactors-supports-diversity-equity-and-inclusion-initiatives/"
}

export default function Page() {
  const t = useTranslations('successfactorSupportsDiversity')
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { blogs, overcomingData } = blogsContent.successfactorSupportsDiversity;
  const fullUrl = "https://www.rialtes.com/insights/blogs/how-sap-successfactors-supports-diversity-equity-and-inclusion-initiatives";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="How SuccessFactors Diversity and Inclusion Drives Workplace Equity | Rialtes"
        description="Discover how SAP SuccessFactors diversity and inclusion capabilities support unbiased hiring, inclusive performance, and engagement. Learn more with Rialtes."
        canonical="https://www.rialtes.com/insights/blogs/how-sap-successfactors-supports-diversity-equity-and-inclusion-initiatives/"
      />

      <Script
        id="schema-how-succ-support"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/successfactors-diversity-inclusion.webp "
          alt="SuccessFactors diversity and inclusion: colorful puzzle with gender & accessibility icons, highlighting SAP's DEI commitment"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
          priority
        />
      </section>

      <section className="custom-container">

        <div className="py-10 bg-white">
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black items-center max-[1084px] xl:w-[1084px]">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0]'>{t('bloTopic')}</span> <span className='text-[#ACACAC]'> | </span>12 Nov 2024
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="max-w-[40px]">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                      target="_blank" rel="noopener noreferrer">
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
            <h1 className="text-[#000000] font-semibold pb-6 xl:w-[750px] 4xl:w-[1084px] leading-tight  text-[26px] xl:text-[40px] 4xl:text-[60px]">{t('blogTitle')}</h1>
          </div>

          <div>
            <div className="max-[1084px] xl:w-[1084px]">
              <p className="text-black pb-4">{t('blogMainData')}</p>
              <p className="text-black">{t('blogMainData2')}</p>
              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('overcomingTitle')}</h2>
              {
                overcomingData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h3 className="text-black pb-4 h3-bold">{data.title}</h3>
                      <p className="text-black pb-4">{data.desc && data.desc}</p>
                      <p className="text-black pb-4">{data.desc2} {data.link && <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href={"https://www.sap.com/products/hcm/corporate-lms/what-is-lms.html"}><span>{data.link}</span></Link>}{data.desc3 && data.desc}</p>
                      {data.desc4 && <p className="text-black pb-4">{data.desc4}</p>}
                    </div>
                  )
                })
              }
              <div className="py-6"></div>
              {/* is your HR system */}

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('hrSystemTitle')}</h2>
              <p className="text-black pb-4">{t('hrSystemDesc')}</p>
              <p className="text-black pb-4">{t('hrSystemDesc2')}
                <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href={"https://www.rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner/?utm_source=blog&utm_medium=organic"}><span> {t('hrSystemLink')} </span> </Link>{t('hrSystemDesc3')} <Link className="underline" href={"mailto:sales@rialtes.com"}><span > sales@rialtes.com</span></Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div className="custom-container xl:pr-0 pb-10">
        <BlogsCarousel slides={blogs} />
      </div>
    </div>
  );
}