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
    "@id": "https://www.rialtes.com/insights/blogs/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai/"
  },
  "headline": "Agentforce Agents Scale Enterprise Resource Planning Systems with AI",
  "description": "Explore how Agentforce empowers ERP systems with intelligent agents to automate business processes, drive efficiency, and scale operations through AI.",
  "image": "https://www.rialtes.com/images/blog/agentforce-erp-scaling-ai.webp",
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
  "datePublished": "2025-01-13",
  "articleSection": "Agentforce AI",
  "url": "https://www.rialtes.com/insights/blogs/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai/"
}

export default function Page() {
  const t = useTranslations('agentForceAgents')
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { blogs, benefitsData, applicationData } = blogsContent.agentForceAgents;
  const fullUrl = "https://www.rialtes.com/insights/blogs/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Scale the Future of Enterprise Resource Planning with AI"
        description="With Salesforce AI, Agentforce automates ERP tasks, provides real-time insights, and ensures seamless collaboration, shaping the future of scalable systems."
        canonical="https://www.rialtes.com/insights/blogs/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai/"
      />

      <Script
        id="schema-agentforce-agents"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative  h-[350px] md:h-[400px]  4xl:h-[650px] 2xl:h-[500px] ">
        <div className="hidden md:block">
          <Image
          src="/images/blog/agentforce-erp-scaling-ai.webp "
          alt="Futuristic robotic hand on a laptop representing AI’s role in revolutionizing ERP systems through Agentforce innovation."
          fill
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          priority
        />

      </div>
       <div className="md:hidden block">
          <Image
          src="/images/blog/blog-12.webp"
          alt="Futuristic robotic hand on a laptop representing AI’s role in revolutionizing ERP systems through Agentforce innovation."
          fill
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          priority
        />
        
      </div>
      </section>

      <section className="custom-container">

        <div className="py-10 bg-white 4xl:w-[1084px] 2xl:w-[900px] xl:w-[800px]">
          <div className="">
            <div className="flex flex-col md:flex-row justify-between text-black items-center">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0]'>{t('blogTopic')}</span> <span className='text-[#ACACAC]'> | </span>13 Jan 2025
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
          <div className="pt-6"></div>
          <div className="pl-0">
            <h1 className="text-[#000000] pb-6 leading-tight text-[26px] 4xl:text-[60px]  2xl:text-[48px]   xl:text-[42px]  md:text-[28px]">{t('blogTitle')}</h1>
          </div>

          <div className="pl-0">
            <div className="">

              <p className="text-black 4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">{t('blogMainData')}</p>
              <p className="text-black pt-4 4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">{t('blogMainData2')}</p>
              <div className="py-4"></div>
              {/* agentforce integrated */}

              <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] xl:text-[26px] text-[22px] leading-tight pb-4"> {t('agentForceTitle')}</h2>

              <p className="text-black 4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">{t('agentForceDesc')}
                <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/solutions/data-ai/salesforce-data-cloud-consulting/">
                  {t('agentForceLink')}</Link>, {t('agentForceDesc2')} </p>

              <div className="py-4"></div>

              {/*  how does agentforce section */}
              <h3 className="h3-bold  pb-4 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight"> {t('howDoesTitle')}</h3>

              <p className="text-black pb-4 4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight"> {t('howDoesDesc')}</p>

              <p className="text-black 4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight"> {t('howDoesDesc2')}</p>

              <div className="py-4"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] xl:text-[26px] text-[22px] leading-tight pb-4">{t('benefitsTitle')}</h2>
              {
                benefitsData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h3 className="h3-bold pb-4 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">{data.title}</h3>
                      <p className="text-black pb-4 4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">{data.desc}</p>
                    </div>
                  )
                })
              }

              <h3 className="h3-bold pb-4 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">{t('enhancedTitle')}</h3>

              <p className="text-black 4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">{t('enhancedDesc')}
                <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/insights/blogs/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce/?utm_source=internal&utm_medium=blog">{t('enhancedLink')}</Link> {t('enhancedDesc2')} </p>


              <div className="py-4"></div>

              {/* application section */}
              <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] xl:text-[26px] text-[22px] leading-tight pb-4">{t('applicationTitle')}</h2>
              <p className="text-black pb-4 4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">{t('applicationDesc')}</p>
              {
                applicationData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h3 className="h3-bold pb-4 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">{data.title}</h3>
                      <p className="text-black pb-4 4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">{data.desc}</p>
                    </div>
                  )
                })
              }

              <div className="py-4"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] xl:text-[26px] text-[22px] leading-tight pb-4">{t('futureTitle')}</h2>
              <p className="text-black pb-4 4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">{t('futureDesc')}  <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.youtube.com/watch?v=EcPEwPAG2SM&utm_source=internal&utm_medium=blog">{t('futureLink')}</Link> {t('futureDesc2')}</p>
              <p className="text-black pb-4 4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">{t('futureDesc3')} <Link className="underline" href={"mailto:sales@rialtes.com"}>sales@rialtes.com</Link>.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Blogs */}
      <div className="custom-container pb-10 lg:pr-0">
        <BlogsCarousel slides={blogs} />
      </div>
    </div>
  );
}