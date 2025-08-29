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
    "@id": "https://www.rialtes.com/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce/"
  },
  "headline": "The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce",
  "description": "Discover how the Atlas Reasoning Engine powers Salesforce Agentforce, enabling AI agents to make smarter decisions and improve customer engagement.",
  "image": "https://www.rialtes.com/images/blog/atlas-reasoning-engine-agentforce.webp",
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
  "datePublished": "2024-10-21",
  "articleSection": "Salesforce AI",
  "url": "https://www.rialtes.com/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce/"
}

export default function Page() {
  const t = useTranslations('brainBehind')
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { blogs, commonData, atlasData } = blogsContent.brainBehind;
  const fullUrl = "https://www.rialtes.com/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="How Does a Reasoning Engine Work in Agentforce? | Rialtes"
        description="Learn how Agentforce’s reasoning engine works to optimize customer support and enhance service quality for improved customer experiences and satisfaction."
        canonical={"https://www.rialtes.com/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce/"}
        image="https://rialtes.netlify.app/images/blog/atlas-reasoning-engine-agentforce.jpg"
      />

      <Script
        id="schema-brain"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="https://rialtes.com/images/blog/atlas-reasoning-engine-agentforce.jpg"
          alt="The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce"
          fill
          style={{ objectFit: "cover", objectPosition: "70% 20%" }}
          priority
        />
      </section>

      <section className="custom-container">

        <div className="py-10 bg-white xl:max-w-[1084px] xl:w-[1084px]">
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black items-center max-w-4xl xl:w-4/2">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0]'>{t('blogTopic')}</span> <span className='text-[#ACACAC]'> | </span>21 Oct 2024
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

          <h1 className="text-[#000000] font-semibold pb-6 xl:w-[750px] 4xl:w-[1084px] leading-tight text-[26px] xl:text-[40px] 4xl:text-[60px]">{t('blogTitle')}</h1>
          <div>

            <p className="text-black pb-4">{t('blogMainData')} {" "}
              <Link className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline" href="https://www.rialtes.com/insights/blogs/salesforce-agentforce-top-features-youre-probably-not-using-but-should/" ><span>{t('blogMainDataLink')}</span></Link>{" "}{t('blogMainData2')}</p>
            <p className="text-black">{t('blogMainData3')}</p>
          
            <div className="py-6"></div>
            {
              commonData.map((data, ind) => {
                return (
                  <div key={ind}>
                    <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{data.title}</h2>
                    {
                      data.desc.map((elem, id) => {
                        return (
                          <p className="text-black pb-4" key={id}>{elem}</p>
                        )
                      })
                    }
                    <div className="py-6"></div>
                  </div>
                )
              })
            }

            <div className="py-6"></div>

            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4"> {t('atlasTitle')}</h2>
            {
              atlasData.map((data, ind) => {
                return (
                  <div key={ind}>
                    <h3 className="pb-4 h3-bold">{data.title}</h3>
                    <p className="text-black pb-4">{data.desc}</p>
                  </div>
                )
              })
            }
            <div className="py-6"></div>
            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4"> {t('gameTitle')}</h2>
            <p className="text-black pb-4">{t('gameDesc')}</p>
            <p className="text-black">{t('gameDesc2')}</p>
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