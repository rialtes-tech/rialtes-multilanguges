"use client";
import Image from "next/image";
import Link from 'next/link';
import BlogsCarousel from '../../../components/latestBlogCarousel';
import Seo from "@/app/[locale]/components/Seo";
import { HeroSection } from "@/app/[locale]/components/herosection";
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
  const t = useTranslations('agentforceTesting')
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { blogs, commonData } = blogsContent.agentforceTesting;
  const fullUrl = "https://www.rialtes.com/insights/blogs/agentforce-testing-center-redefining-ai-testing-with-synthetic-data";

  return (
    <div className="min-h-screen bg-white">
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
      <HeroSection mobimg="/images/blog/blog-4-mob-banner.webp" deskimg="/images/blog/agentforce-testing-center.webp" />

      <section
        className="custom-container">

        <div className="py-10 bg-white xl:max-w-[1084px] xl:w-[1084px]">
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black items-center">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0]'>{t('blogTopic')}</span> <span className='text-[#ACACAC]'> | </span>25 Nov 2024
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
                  <div className="max-w-[30px]">
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
            <h1 className="text-[#000000] font-semibold pb-6 w-full  4xl:w-[1084px] xl:w-[804px] text-[26px] xl:text-[45px] 4xl:text-[60px] leading-tight">{t('blogTitle')}</h1>
          </div>
          <div>
            <p className="text-black">{t('blogMainData')}</p>

            <div className="py-6"></div>

            {/* the rise section */}
            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('riseTitle')}</h2>
            <p className="text-black pb-4">{t('riseDesc')}</p>
            <p className="text-black">{t('riseDesc2')}</p>

            <div className="py-6"></div>
            {
              commonData.map((data, ind) => {
                return (
                  <div key={ind}>
                    <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{data.title}</h2>
                    <p className="text-black pb-4">{data.para}</p>
                    {data.appTitle && <h3 className="h3-bold pb-4">{data.appTitle}</h3>}
                    <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 text-[16px] xl:text-[18px] 4xl:text-[20px] font-medium">
                      {data.list.map((elem, id) => {
                        return (
                          <li className="pb-2" key={id}><h4 className="font-bold inline">{elem.title}</h4>{" "}{elem.desc}</li>
                        )
                      })}
                    </ul>
                    <div className="py-6"></div>
                  </div>
                )
              })
            }

            {/* ai generated section */}
            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('aiTitle')}</h2>
            <p className="text-black pb-4">{t('aiDesc')}</p>
            <p className="text-black">{t('aiDesc2')}</p>

            <div className="py-6"></div>
            {/* why this matters section */}
            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('whyTitle')}</h2>
            <p className="text-black pb-4">{t('whyDesc')}</p>
            <p className="text-black pb-4">{t('whyDesc2')}</p>

            <p className="text-black pb-4">{t('whyDesc3')}{" "}<Link className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline" href={"https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting/"}><span className="font-normal">{t('whyLink')}</span></Link>{" "}{t('whyDesc4')} </p>

          </div>
        </div>
      </section >

      {/* Latest Blogs */}
      <div className="custom-container lg:pr-0 pb-10" >
        <BlogsCarousel slides={blogs} />
      </div >
    </div >
  );

}