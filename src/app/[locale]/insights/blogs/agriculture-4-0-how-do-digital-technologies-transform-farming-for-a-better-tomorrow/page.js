"use client";
import Image from "next/image";
import BlogsCarousel from '../../../components/latestBlogCarousel';
import Seo from "@/app/[locale]/components/Seo";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import Script from "next/script";
import { changeLocalization } from "../../components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow/"
  },
  "headline": "Agriculture 4.0: How Do Digital Technologies Transform Farming for a Better Tomorrow?",
  "description": "Explore how Agriculture 4.0 and platforms like Salesforce are revolutionizing modern farming with AI, automation, and real-time data-driven insights.",
  "image": "https://www.rialtes.com/images/blog/agriculture-4.0-digital-farming.webp",
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
  "datePublished": "2024-09-17",
  "articleSection": "Salesforce for Agriculture",
  "url": "https://www.rialtes.com/insights/blogs/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow/"
}

export default function Page() {
  const t = useTranslations('agriculture')
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { blogs, adoptingData,commonData } = blogsContent.agriculture;
  const fullUrl = "https://www.rialtes.com/insights/blogs/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow";

  return (
    <div className="min-h-screen bg-white">

      <Seo
        title="Salesforce for Agriculture: Digital Farming Revolution | Rialtes"
        description="Discover how Salesforce for agriculture powers digital farming, improving efficiency and driving innovation for a sustainable future in Agriculture 4.0."
        canonical="https://www.rialtes.com/insights/blogs/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow/"
        image="https://www.rialtes.com/images/blog/agriculture-4.0-digital-farming.webp"
      />

      <Script
        id="schema-agr-4"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/agriculture-4.0-digital-farming.webp "
          alt="Drone hovering over agricultural crops, showcasing the future of farming with digital innovations"
          fill
          style={{ objectFit: "cover", objectPosition: "70% 20%" }}
          priority
        />
      </section>
      <section className="custom-container">

        <div className="py-10 bg-white xl:max-w-[1084px] xl:w-[1084px]">
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black items-center">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0]'>{t('blogTopic')}</span> <span className='text-[#ACACAC]'> | </span>17 Sept 2024
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

          <h1 className="text-[#000000] 4xl:w-[1084px] xl:w-[745px] font-semibold pb-6 leading-tight text-[26px] xl:text-[40px] 4xl:text-[60px]">{t('blogTitle')}</h1>

          <>
            <div>
              <p className="text-black pb-4">{t('blogMainData')}</p>
              <p className="text-black">{t('blogMainData2')}</p>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('whatAgriTitle')}</h2>
              <p className="text-black pb-4">{t('whatAgriDesc')}</p>
              <p className="text-black">{t('whatAgriDesc2')}</p>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('adoptingTitle')}</h2>

              <div className="pl-3">
                <UnorderedList arrName={adoptingData} ulClassName="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4" liClassName="pb-4" />
              </div>

              <div className="py-6"></div>
              {
                commonData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{data.title}</h2>
                      <p className="text-black">{data.desc}</p>
                      <div className="py-6"></div>
                    </div>
                  )
                })
              }

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('moveTitle')}</h2>

              <p className="text-black pb-4">{t('moveDesc')}
               {" "} <Link className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline" href={"https://www.rialtes.com/contact-us/"}>
                  <span>{t('moveLink')} </span></Link>{" "} 
                {t('moveDesc2')}</p>
            </div>
          </>
        </div>
      </section>

      {/* Latest Blogs */}
      <div className="custom-container lg:pr-0 pb-10">
        <BlogsCarousel slides={blogs} />
      </div>
    </div>
  );
}