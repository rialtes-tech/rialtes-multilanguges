"use client";
import Image from "next/image";
import Link from 'next/link';
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
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
  "image": "https://www.rialtes.com/images/blog/abstract-cloud-computing-network-architecture.webp",
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
        title={t('seoTitle')}
        description={t('seoDescription')}
        canonical={"https://www.rialtes.com/insights/blogs/how-sap-successfactors-integrations-enhance-hr-and-payroll-operations/"}
      />

      <Script
        id="schema-how-integrations"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

 <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/abstract-cloud-computing-network-architecture.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/abstract-cloud-computing-network-architecture-mobile.webp"
                        alt={t('bannerAlt')}
                        priority
                        height={0}
                        width={0}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">

        <div className="grid lg:grid-cols-12">
                              <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">
     {/* date and icons */}
                        <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="28 May 2024"/>
             {/* main blog */}
                                     <div className="xl:mt-[60px] mt-[42px]">

          <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
            {t('blogTitle')}</h1>
                            <div className="xl:mt-[38px] mt-[33px]">
            {
              blogMainData.map((data, ind) => {
                return (
                  <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]" key={ind}>
                    {data}
                  </p>
                )
              })
            }
                            <div className="md:mt-[50px] mt-[40px]">
            {/* what should enterprises section */}
            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight"> {t('enterpriseTitle')}</h2>
            <p className="text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mt-[29px] xl:mt-[34px]">{t('enterpriseDesc')}</p>
            </div>

            {/* hr mgmt section */}
                                        <div className="md:mt-[50px] mt-[40px]">

            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('hrmgmtTitle')}</h2>
            <div className="pl-[36px] lg:pl-[56px] mt-[29px] xl:mt-[34px]">
              <UnorderedList arrName={hrmgmtData} ulClassName="list-disc font-medium marker:text-[#0092E0] marker:text-xl text-black text-[16px] xl:text-[17px] 4xl:text-[20px] space-y-3" liClassName="" />
            </div>
           </div>

            {/* role integration section */}
                                        <div className="md:mt-[50px] mt-[40px]">

            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight"> {t('roleIntegrationTitle')}</h2>
            <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('roleIntegrationDesc')}</p>

            <div className="pl-[36px] lg:pl-[56px] mt-5">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black  text-[16px] xl:text-[17px] 2xl:text-[17px] 4xl:text-[20px] font-medium">
                {
                  roleIntegrationData.map((data, ind) => {
                    return (
                      <li className="pb-2" key={ind}><h3 className="h3-bold inline text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{data.title}</h3>{data.desc}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

            {/* sap success facotrs integration section */}
                                        <div className="md:mt-[50px] mt-[40px]">

            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('successFactorIntegrationTitle')}</h2>

            {
              successFactorIntegration.map((data, ind) => {
                return (
                  <div key={ind} className="mt-[29px] xl:mt-[34px]">
                    <h3 className=" mt-6 h3-bold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[20px]">{ind + 1}. {data.title} </h3>
                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                    <div className="pl-[36px] lg:pl-[56px]">
                      <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black  text-[16px]  xl:text-[17px] 4xl:text-[20px] font-medium">
                        {
                          data.list.map((elem, ind) => {
                            return (
                              <li className="mt-3" key={ind}><div className="inline text-black font-bold">{elem.title} </div>{elem.desc}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                )
              })
            }

          </div>
            {/* employee section */}
                            <div className="md:mt-[50px] mt-[40px]">

            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('empTitle')} </h2>

            <p className="text-black mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{t('empDesc')} </p>
            {
              empData.map((data, ind) => {
                return (
                  <div key={ind}>
                    <h3 className="mt-5 h3-bold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[20px]">{data.title}</h3>
                    <p className="text-black mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">{data.desc}</p>
                  </div>
                )
              })
            }
       </div>

            {/* overcome section */}
                                        <div className="md:mt-[50px] mt-[40px]">

            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight"> {t('overcomeTitle')}</h2>
            <p className="text-black mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]"> {t('overcomeDesc')}</p>
            <p className="text-black mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]"> {t('overcomeDesc2')} <Link href={" https://www.rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner/?utm_source=internal&utm_medium=blog"} className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"> <span> {t('overcomeLink')} </span></Link></p>
          </div>  </div>
        </div>  </div>  </div>
      </section>
      {/* Latest Blogs */}
      <div className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </div>
    </div>
  );
}