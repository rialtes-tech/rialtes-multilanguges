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

const schemaData =
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/how-does-sap-ariba-streamline-direct-and-indirect-procurement-needs/"
  },
  "headline": "SAP Ariba Procurement: Streamlining Direct and Indirect Needs",
  "description": "SAP Ariba streamlines direct and indirect procurement by digitizing workflows, enhancing compliance, and driving cost efficiency.",
  "image": "https://www.rialtes.com/images/blog/sap-ariba-web-banner.webp",
  "author": {
    "@type": "Organization",
    "name": "Rialtes"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  },
  "datePublished": "2025-05-29",
}

const fullUrl = "https://www.rialtes.com/insights/blogs/how-does-sap-ariba-streamline-direct-and-indirect-procurement-needs";

export default function Page() {
  const t = useTranslations("howDoesSapAribaStreamline");
  const locale = useLocale();
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { blogs, procurementData, mainActivityData, aribaOptimizesData } = content.howDoesSapAribaStreamline
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="SAP Ariba Procurement for Direct & Indirect Efficiency | Rialtes"
        description="SAP Ariba streamlines direct and indirect procurement by digitizing every step—from sourcing to payment—boosting savings, speed, and control."
        canonical={"https://www.rialtes.com/insights/blogs/how-does-sap-ariba-streamline-direct-and-indirect-procurement-needs/"}
      />
      <Script
        id="schema-how-does"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative group overflow-hidden  h-[350px] md:h-[500px]  4xl:h-[650px]  ">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/sap-ariba-web-banner.webp"
            alt="SAP Ariba Streamline"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/blog/sap-ariba-mobile-banner.webp"
            alt="SAP Ariba Streamline"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white">
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black items-center max-w-[1084px] xl:w-[1084px]">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0] text-[16px] md:text-[20px] xl:text-[20px]'>{t('blogTopic')}</span> <span className='text-[#ACACAC]'> | </span>29 May 2024
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
          <div>
            <h1 className="text-[#000000]  pb-6 w-full  4xl:w-[1084px] xl:w-[900px] leading-tight text-[26px] xl:text-[50px] 4xl:text-[60px]">
              {t('blogTitle')}</h1>
          </div>

          <div>
            <div className="xl:max-w-[1084px] xl:w-[1084px]">
              <p className="text-black pb-4">{t('blogMainData')}</p>
              <p className="text-black">{t('blogMainData2')}</p>
              <div className="py-6"></div>

              {/* what is ariba section */}
              <h2 className="pb-4 font-medium text-[#0092E0] xl:text-[30px] md:text-[24px] text-[20px]"> {t('procurementTitle')} </h2>
              <p className="text-black">{t('procurementDesc')}</p>
              <div className="pb-4"></div>
              {
                procurementData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h3 className="h3-bold pb-2">{data.title}</h3>
                      <p className="text-black pb-4">{data.desc}</p>
                    </div>
                  )
                })
              }
              <div className="py-6"></div>
              {/* main activities section */}
              <h2 className="pb-4 font-medium text-[#0092E0] xl:text-[30px] md:text-[24px] text-[20px]"> {t('mainActivityTitle')}</h2>

              <p className="text-black pb-4">{t('mainActivityDesc')}</p>

              <ul className="list-disc text-black pl-8 md:text-[20px] text-[16px]  marker:text-[#0092E0]">
                {
                  mainActivityData.map((data, ind) => {
                    return (
                      <li className="pb-2 font-medium" key={ind}>
                        <span className="font-bold">{data.title} </span>{ }
                        {data.desc}
                      </li>
                    )
                  })
                }
              </ul>
              <div className="py-6"></div>

              {/* ariba optimizes section */}
              <h2 className=" pb-4 font-medium text-[#0092E0] xl:text-[30px] md:text-[24px] text-[20px]"> {t('aribaOptimizesTitle')}</h2>

              {
                aribaOptimizesData.map((data, ind) => {
                  return (
                    <div key={ind} className="xl:pl-10">
                      <h3 className="text-black pb-2 h3-bold">{ind + 1}. {data.title}  </h3>
                      <p className="text-black pb-4">{data.desc}</p>
                    </div>
                  )
                })
              }
              <div className="py-6"></div>
              {/* integrate section */}
              <h2 className="pb-4 font-medium text-[#0092E0] xl:text-[30px] md:text-[24px] text-[20px]">
                {t('integrateTitle')}</h2>

              <p className="text-black pb-4">{t('integrateDesc')}</p>
              <p className="text-black">
                {t('integrateDesc2')}{" "}<Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href=" https://www.rialtes.com/solutions/enterprise-platforms/sap-consulting/?utm_source=internal&utm_medium=blog" target="_blank">
                  {t('integrateLink')}</Link> , {t('integrateDesc3')}  </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div className="custom-container pb-10 xl:pr-0">
        <BlogsCarousel slides={blogs} />
      </div>
    </div>
  );
}