"use client";
import Image from "next/image";
import Link from 'next/link';
import BlogsCarousel from '../../../components/latestBlogCarousel';
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration/"
  },
  "headline": "How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration",
  "description": "Learn how to streamline workflows and boost HR team productivity by integrating SAP SuccessFactors with Microsoft Office 365 tools like Outlook and Teams.",
  "image": "https://www.rialtes.com/images/blog/successfactors-office365-integration.webp",
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
  "datePublished": "2024-12-24",
  "articleSection": "SAP Integration",
  "url": "https://www.rialtes.com/insights/blogs/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration/"
}

export default function Page() {
  const t = useTranslations('integrateSapSuccessFactor')
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { blogs, prerequisitesList, prerequisitesData, benefitsData, steps, whatDoesData } = blogsContent.integrateSapSuccessFactor;
  const fullUrl = "https://www.rialtes.com/insights/blogs/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="How to Integrate SAP with Office 365 for Enhanced HR Collaboration"
        description="Discover how SAP Office 365 integration can simplify HR processes, automate workflows, and foster seamless collaboration across Office 365 apps."
        canonical="https://www.rialtes.com/insights/blogs/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration/"
      />
      <Script
        id="schema-integrate-sap"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/successfactors-office365-integration.webp "
          alt="Discover SAP SuccessFactors and Office 365 integration benefits with vibrant intersecting dots on a sleek blue background."
          fill
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          priority
        />
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white">
          <div className="container mx-auto pl-0">
            <div className="flex flex-col md:flex-row justify-between text-black items-center  max-[1084px] xl:w-[1084px]">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0]'>{t('blogTopic')}</span> <span className='text-[#ACACAC]'> | </span>24 Dec 2024
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
                </div>
              </div>
            </div>
          </div>
          <div className="py-3"></div>
          <div className="container pl-0 ">
            <h1 className="text-[#000000] font-semibold pb-6 xl:w-[760px] 4xl:w-[1154px] leading-tight text-[26px] xl:text-[40px] 4xl:text-[60px]">{t('blogTitle')}</h1>
          </div>

          <div className="container mx-auto pl-0">
            <div className="max-[1084px] xl:w-[1084px]">
              <p className="text-black">{t('blogMainData')}</p>
              <div className="py-3"></div>

              {/* benefits section */}
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('benefitsTitle')}</h2>
              <ul className="list-none text-black pl-4 pb-6 xl:text-[20px] text-[16px] font-medium space-y-4">
                {
                  benefitsData.map((data, ind) => {
                    return (
                      <li key={ind}><h3 className="h3-bold inline">{data.title}</h3>{data.desc}</li>
                    )
                  })
                }
              </ul>

              <div className="py-3"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('prerequisitesTitle')}</h2>
              <p className="text-black pb-4">{t('prerequisitesMainData')}</p>

              <UnorderedList arrName={prerequisitesList} ulClassName="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] pb-6 font-medium" />

              <p className="text-black pb-4">{t('prerequisitesDesc')}</p>

              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 pb-6 xl:text-[20px] text-[16px] font-medium">
                {
                  prerequisitesData.map((data, ind) => {
                    return (
                      <li key={ind}><span className="font-bold pb-4">{data.title}</span>{data.desc}</li>
                    )
                  })
                }
              </ul>

              <div className="py-3"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('stepsTitle')}</h2>
              {
                steps.map((data, id) => {
                  return (
                    <div key={id}>
                      <h3 className="text-black pb-4 h3-bold">{data.title}</h3>
                      <p className="text-black pb-4">{data.desc}</p>
                      <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 pb-6 xl:text-[20px] text-[16px] font-medium">
                        {data.list.map((item, ind) => (
                          <li
                            key={ind}
                            className={id === 2 && (ind === 3 || ind === 4) ? "ml-5" : ""}>
                            {item}
                          </li>
                        ))}
                      </ul>

                    </div>
                  )
                })
              }

              <div className="py-3"></div>
              {/* what does section */}

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('whatDoesTitle')}</h2>
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 pb-6 xl:text-[20px] text-[16px] font-medium">
                {
                  whatDoesData.map((data, ind) => {
                    return (
                      <li key={ind}><h3 className="h3-bold inline">{data.title}</h3>{data.desc}</li>
                    )
                  })
                }
              </ul>
              <div className="py-3"></div>
              {/* complete section */}

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">{t('completeTitle')}</h2>

              <p className="text-black pb-4">{t('completeDesc')}</p>

              <p className="text-black pb-4">{t('completeDesc2')}
                {" "} <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href={"https://rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner?utm_source=blog&utm_medium=organic/"}>{t('completeLink')}</Link>
                {" "}  {t('completeDesc3')} <Link className="underline" href={"mailto:sales@rialtes.com"}><span >sales@rialtes.com</span></Link> {t('completeDesc4')}</p>
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