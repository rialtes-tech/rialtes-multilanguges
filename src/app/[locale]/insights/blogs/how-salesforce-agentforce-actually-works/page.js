"use client";
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
    "@id": "https://www.rialtes.com/insights/blogs/how-salesforce-agentforce-actually-works/"
  },
  "headline": "How Salesforce Agentforce Actually Works",
  "description": "Explore how Salesforce Agentforce automates customer engagement using AI agents, enhancing decision-making and operational efficiency.",
  "image": "https://www.rialtes.com/images/blog/how-agentforce-works-blog-banner.webp",
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
  "datePublished": "2024-09-30",
  "articleSection": "Salesforce",
  "url": "https://www.rialtes.com/insights/blogs/how-salesforce-agentforce-actually-works/"
}
export default function Page() {
  const t = useTranslations('howSalesforceAgentforceWorks')
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { blogs, salesforceData, useCasesData } = blogsContent.howSalesforceAgentforceWorks;
  const fullUrl = "https://www.rialtes.com/insights/blogs/how-salesforce-agentforce-actually-works";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="How Does Salesforce Agentforce Work? | Rialtes"
        description="Discover how Salesforce Agentforce works to enhance customer engagement and streamline operations. Contact Rialtes today to embark on your AI journey!"
        canonical="https://www.rialtes.com/insights/blogs/how-salesforce-agentforce-actually-works/"
      />

      <Script
        id="schema-how-salesforce"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/how-agentforce-works-blog-banner.webp "
          alt="How Salesforce Agentforce Actually Works"
          fill
          style={{ objectFit: "cover", objectPosition: "70% 20%" }}
          priority
        />
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white">
          <div className="container pl-0 mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black items-center  xl:max-w-[1084px] xl:w-[1084px]">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0]'>{t('blogTopic')}</span> <span className='text-[#ACACAC]'> | </span>30 Sept 2024
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="max-w-[40px]">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer"                    >
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
            <h1 className="text-[#000000] font-semibold pb-6 xl:w-[584px] 4xl:w-[1084px] leading-tight text-[26px] xl:text-[40px] 4xl:text-[60px]">{t('blogTitle')}</h1>
          </div>
          <div className="container pl-0 mx-auto">
            <div className="max-[1084px] xl:w-[1084px]">

              <p className="text-black pb-4">{t('blogMainData')}</p>

              <div className="py-2"></div>
              {/* quick section */}
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-2">{t('quickTitle')}</h2>
              <p className="text-black pb-4">{t('quickDesc')}</p>
              <p className="text-black pb-4">{t('quickDesc2')}</p>

              <div className="py-2"></div>
              {/* how does ai agent section */}
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-2">{t('howTitle')}</h2>
              <p className="text-black pb-4">{t('howDesc')}</p>
              <div className="py-2"></div>

              {/* salesforce agentforce section */}
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-2">{t('salesforceTitle')}</h2>

              <p className="text-black pb-4">{t('salesforceDesc')} <Link href="mailto:sales@rialtes.com" className="underline"> <span >mrjohn@example.com</span></Link>”</p>

              <p className="text-black pb-4">{t('salesforceDesc2')}</p>
              {
                salesforceData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <p className="text-black font-bold pb-4">{data.title}</p>
                      {
                        data.desc.map((elem, id) => {
                          return (
                            <p className="text-black pb-4" key={id}>{elem}</p>
                          )
                        })
                      }
                    </div>
                  )
                })
              }

              <div className="py-2"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-2">{t('useCasesTitle')}</h2>

              <p className="text-black pb-4">{t('useCasesDesc')}</p>


              <ul className="list-disc text-black  marker:text-[#0092E0] pl-4 xl:text-[20px] text-[16px] font-medium mt-3">
                {
                  useCasesData.map((data, ind) => {
                    return (
                      <li className="pb-2" key={ind}><h3 className="font-bold inline xl:text-[20px] text-[16px]">{data.title}</h3>{data.desc}</li>
                    )
                  })
                }
              </ul>
              <div className="py-2"></div>
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-2">{t('gettingTitle')}</h2>
              <p>{t('gettingDesc')}
                {" "} <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.salesforce.com/dreamforce/">{t('gettingLink')}</Link>.
                {" "} {t('gettingDesc2')}
                {" "} <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/">{t('gettingLink2')}</Link>,{" "}
                {t('gettingDesc3')}   </p>
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