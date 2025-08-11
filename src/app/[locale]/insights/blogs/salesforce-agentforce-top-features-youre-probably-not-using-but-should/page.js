"use client";
// pages/blog-detail.js
import Image from "next/image";
import Link from 'next/link';
import BlogsCarousel from '../../../components/latestBlogCarousel';
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/salesforce-agentforce-top-features-youre-probably-not-using-but-should/"
  },
  "headline": "Salesforce Agentforce Top Features You’re Probably Not Using but Should",
  "description": "Uncover the hidden gems of Salesforce Agentforce, including AI-powered routing, custom dashboards, and real-time analytics to boost your support operations.",
  "image": "https://www.rialtes.com/images/blog/salesforce-agentforce-features.webp",
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
  "datePublished": "2025-02-03",
  "articleSection": "Salesforce Agentforce",
  "url": "https://www.rialtes.com/insights/blogs/salesforce-agentforce-top-features-youre-probably-not-using-but-should/"
}


export default function Page() {
  const t = useTranslations('powerfulFeatures')
  const locale = useLocale();
  const content = locale === "es" ? esContent : enContent;
  const { blogs, blogMainData, commonData } = content.powerfulFeatures;
  const fullUrl = "https://www.rialtes.com/insights/blogs/salesforce-agentforce-top-features-youre-probably-not-using-but-should";

  return (
    <div className="min-h-screen">
      <Seo
        title="Key Features That Make Agentforce a Game-Changer | Rialtes"
        description="Salesforce Agentforce features address CX gaps with intelligent routing, AI-led case resolution, and performance dashboards for better decisions."
        canonical="https://www.rialtes.com/insights/blogs/salesforce-agentforce-top-features-youre-probably-not-using-but-should/"
      />

      <Script
        id="schema-sales-agentforce"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/salesforce-agentforce-features.webp "
          alt="Salesforce Agentforce: Top Features You’re Probably Not Using (But should!)"
          fill
          style={{ objectFit: "cover", objectPosition: "90% 20%" }}
          priority
        />
      </section>

      <section className="custom-container" >
        <div className="py-10">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black items-center   max-[1084px] xl:w-[1084px] ">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0]'>{t('blogTopic')}</span> <span className='text-[#ACACAC]'> | </span>03 Feb 2025
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
          <div className="container mx-auto pl-0">
            <h1 className="text-[#000000] font-semibold pb-8  xl:w-[750px] 4xl:w-[1084px] leading-tight text-[26px] xl:text-[40px] 4xl:text-[60px]">{t('blogTitle')}</h1>
          </div>

          <div className="container mx-auto pl-0">
            <div className="max-[1084px] xl:w-[1084px]">
              {
                blogMainData.map((data, ind) => {
                  return (
                    <p className="text-black pb-4" key={ind}>{data}</p>
                  )
                })
              }
              <div className="py-4"></div>
              {
                commonData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4"> {data.title}</h2>

                      <p className="text-black pb-4">{data.desc}</p>
                      <ul className="list-disc text-black marker:text-[#0092E0] pl-4 xl:text-[20px] text-[16px] font-medium mt-3">
                        {
                         data.data.map((elem, ind) => {
                            return (
                              <li className="pb-2" key={ind}><h3 className="font-bold inline xl:text-[20px] text-[16px]">{elem.title}</h3>{elem.desc}</li>
                            )
                          })
                        }
                      </ul>
                      <div className="py-4"></div>
                    </div>
                  )
                })
              }
              {/* transition section */}
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('transitionTitle')}</h2>
              <p className="text-black pb-4"><Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href={"https://www.rialtes.com/insights/blogs/how-salesforce-agentforce-actually-works/"}> {t('transitionLink')}</Link>{t('transitionDesc')} </p>
              <p className="text-black pb-4">{t('transitionDesc2')}<Link className="underline" href={"mailto:sales@rialtes.com"}>sales@rialtes.com</Link>.</p>
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