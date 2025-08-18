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
import UnorderedList from "@/app/[locale]/components/unorderedList";
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
  const t = useTranslations('howSuccessFactorEnhances')
  const locale = useLocale();
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { blogs, remoteData,commonData} = content.howSuccessFactorEnhances;
  const fullUrl = "https://www.rialtes.com/insights/blogs/how-sap-successfactors-enhances-remote-work-management";

  return (
    <div className="min-h-screen bg-white">
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

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/successfactors-remote-work.webp"
          alt="Discover SAP SuccessFactors' role in remote work management, shown with hands on a laptop against a sleek blue backdrop."
          fill
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          priority
        />
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white xl:max-w-[1084px] xl:w-[1084px]  ">
          <div className="">
            <div className="flex flex-col md:flex-row justify-between text-black items-center  ">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0]'>{t('blogTopic')}</span> <span className='text-[#ACACAC]'> | </span>21 Jan 2025
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
                        rel="noopener noreferrer" >
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

          <h1 className="text-[#000000] font-semibold pb-6 4xl:w-[1084px] xl:w-[724px] text-[26px] xl:text-[40px] 4xl:text-[60px] leading-tight">{t('blogTitle')}</h1>
          <div>
            <p className="text-black">{t('blogMainData')}</p>
            <div className="py-6"></div>
            {/* remote work section */}
            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4"> {t('remoteTitle')}</h2>

            <div className="pl-3">
              <UnorderedList arrName={remoteData} ulClassName="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 text-[16px] xl:text-[18px] 4xl:text-[20px] font-medium" />
            </div>


            <div className="py-3"></div>

            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('combatTitle')}</h2>
            {
              commonData.map((elem, ind) => {
                return (
                  <div key={ind}>
                    <h3 className="pb-4 h3-bold">{elem.title}</h3>

                    <p className="text-black pb-4">{elem.desc}</p>
                    <div className="pl-3">
                      <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 pb-8 text-[16px] xl:text-[18px] 4xl:text-[20px] font-medium">
                        {
                          elem.dataList.map((data, ind) => {
                            return (
                              <li className="pb-2" key={ind}><h4 className="inline">{data.title}</h4>{data.desc}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                )
              })
            }

            <div className="py-6"></div>
            {/* sap successfactor section */}

            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('successFactorTitle')}</h2>
            <p className="text-black pb-4"><Link className="text-[#0092E0]  transition duration-300 ease-out hover:text-gray-400 underline" href={"https://www.rialtes.com/insights/blogs/sap-successfactors-performance-and-goal-management?utm_source=blog&utm_medium=organic"}><span>{t('successFactorLink')}</span></Link>
              {t('successFactorDesc')}
            </p>
            <p className="text-black pb-4">{t('successFactorDesc2')}</p>
            <p className="text-black">{t('successFactorDesc3')}</p>
            <div className="py-6"></div>

            {/* manage remote and hybrid section */}
            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('manageTitle')}</h2>
            <p className="text-black pb-4">{t('manageDesc')}</p>
            <p className="text-black pb-4">{t('manageDesc2')} <Link className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline" href={"https://www.rialtes.com/contact-us/"}><span>{t('reachOutLink')}</span></Link>{t('manageDesc3')} </p>
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