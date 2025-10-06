"use client";
import Image from "next/image";
import Link from 'next/link';
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { HeroSection } from "@/app/[locale]/components/herosection";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel';
import useUrl from "@/app/[locale]/components/useUrl";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/how-sap-successfactors-integrations-enhance-hr-and-payroll-operations"
  },
  "headline": "How SAP SuccessFactors Integrations Enhance HR and Payroll Operations",
  "description": "Explore how integrating SAP SuccessFactors with various enterprise systems streamlines HR and payroll processes, ensuring accuracy, compliance, and improved employee satisfaction.",
  "image": "https://www.rialtes.com/images/blog/successfactor-web-banner.webp",
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
  "datePublished": "2024-05-28",
}

export default function Page() {
  const t = useTranslations("howSapSuccessFactorIntegration");
  const locale = useLocale();
  const currUrl = useUrl()
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { blogMainData, hrmgmtData, roleIntegrationData, successFactorIntegration, empData } = content.howSapSuccessFactorIntegration
  const fullUrl = "https://www.rialtes.com/insights/blogs/how-sap-successfactors-integrations-enhance-hr-and-payroll-operations";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="SAP SuccessFactors Integration: Enhance HR and Payroll | Rialtes"
        description="SAP SuccessFactors integrations are a game-changer for HR and payroll operations—enhancing efficiency, accuracy, and compliance for global and local teams."
        canonical={"https://www.rialtes.com/insights/blogs/how-sap-successfactors-integrations-enhance-hr-and-payroll-operations/"}
      />

      <Script
        id="schema-how-integrations"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <HeroSection mobimg="/images/blog/successfactor-mobile-banner.webp" deskimg="/images/blog/successfactor-web-banner.webp" extraImg="" />

      <section className="custom-container">

        <div className="py-10 bg-white xl:max-w-[1084px] xl:w-[1084px]">
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black ">
              <div className='sm:mb-0 mb-6'>
                <span className='text-[#0092E0]'>{t('blogTopic')}</span> <span className='text-[#ACACAC]'> | </span>28 May 2024
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
          <h1 className="text-[#000000] 4xl:w-[1084px] xl:w-[750px] pb-6 leading-tight xl:text-[42px]  md:text-[28px] text-[26px] 2xl:text-[48px] 4xl:text-[60px]">
            {t('blogTitle')}</h1>
          <div>
            {
              blogMainData.map((data, ind) => {
                return (
                  <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]" key={ind}>
                    {data}
                  </p>
                )
              })
            }
            <div className="py-6"></div>
            {/* what should enterprises section */}
            <h2 className="font-medium text-[#0092E0] pb-4 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] text-[22px]"> {t('enterpriseTitle')}</h2>
            <p className="text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('enterpriseDesc')}</p>
            <div className="py-6"></div>

            {/* hr mgmt section */}
            <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] text-[22px] pb-4">{t('hrmgmtTitle')}</h2>
            <div className="pl-6">
              <UnorderedList arrName={hrmgmtData} ulClassName="list-disc font-medium marker:text-[#0092E0] marker:text-xl text-black pl-4 text-[16px] xl:text-[18px] 4xl:text-[20px] space-y-2" liClassName="" />
            </div>
            <div className="py-6"></div>

            {/* role integration section */}
            <h2 className=" font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] text-[22px] pb-4"> {t('roleIntegrationTitle')}</h2>
            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('roleIntegrationDesc')}</p>

            <div className="pl-6">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 text-[16px] xl:text-[17px] 2xl:text-[17px] 4xl:text-[20px] font-medium">
                {
                  roleIntegrationData.map((data, ind) => {
                    return (
                      <li className="pb-2" key={ind}><h3 className="h3-bold inline text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{data.title}</h3>{data.desc}</li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="py-6"></div>

            {/* sap success facotrs integration section */}
            <h2 className=" font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] text-[22px]">{t('successFactorIntegrationTitle')}</h2>

            {
              successFactorIntegration.map((data, ind) => {
                return (
                  <div key={ind}>
                    <h3 className="pb-4 mt-6 h3-bold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[20px]">{ind + 1}. {data.title} </h3>
                    <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{data.desc}</p>
                    <div className="pl-6">
                      <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 text-[16px] 2xl:text-[18px] xl:text-[17px] 4xl:text-[20px] font-medium">
                        {
                          data.list.map((elem, ind) => {
                            return (
                              <li className="pb-2" key={ind}><div className="inline text-black font-bold">{elem.title} </div>{elem.desc}</li>
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
            {/* employee section */}

            <h2 className=" font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] text-[22px] pb-4">{t('empTitle')} </h2>

            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('empDesc')} </p>
            {
              empData.map((data, ind) => {
                return (
                  <div key={ind}>
                    <h3 className="pb-4 h3-bold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[20px]">{data.title}</h3>
                    <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{data.desc}</p>
                  </div>
                )
              })
            }
            <div className="py-6"></div>

            {/* overcome section */}
            <h2 className=" font-medium text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] text-[22px] pb-4"> {t('overcomeTitle')}</h2>
            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]"> {t('overcomeDesc')}</p>
            <p className="text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]"> {t('overcomeDesc2')} <Link href={" https://www.rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner/?utm_source=internal&utm_medium=blog"} className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"> <span> {t('overcomeLink')} </span></Link></p>
          </div>
        </div>
      </section>
      {/* Latest Blogs */}
      <div className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </div>
    </div>
  );
}