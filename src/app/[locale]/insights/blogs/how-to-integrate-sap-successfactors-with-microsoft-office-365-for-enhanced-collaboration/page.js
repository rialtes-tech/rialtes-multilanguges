"use client";
import Image from "next/image";
import Link from 'next/link';
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'

export default function Page() {
  const t = useTranslations('integrateSapSuccessFactor')
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { prerequisitesList, prerequisitesData, benefitsData, steps, whatDoesData, schemaData } = blogsContent.integrateSapSuccessFactor;
  const fullUrl = "https://www.rialtes.com/insights/blogs/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration";
  const currUrl = useUrl()
  return (
    <section className="min-h-screen bg-white">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/how-to-integrate-sap-successfactors-with-microsoft-office-365-for-enhanced-collaboration`}
      />
      <Script
        id="schema-integrate-sap"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative group overflow-hidden 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[400px]">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/blue-orange-halftone-wave-pattern-abstract.webp"
            alt={t("bannerAlt")}
            fill
            style={{ objectFit: "cover" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden h-full">
          <Image
            src="/images/blog/blue-orange-halftone-wave-pattern-abstract-mobile.webp"
            alt={t("bannerAlt")}
            priority
            height={0}
            width={0}
            className="w-full h-full object-cover object-[60%_30%]"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

            {/* date and icons */}
            <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="24 December 2024" />


            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight"> {t('blogTitle')}</h1>
              <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('blogMainData')}</p>


              {/* benefits section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('benefitsTitle')}</h2>
                <ul className="list-none mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4">
                  {
                    benefitsData.map((data, ind) => {
                      return (
                        <li key={ind}><h3 className="h3-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{data.title}</h3>{data.desc}</li>
                      )
                    })
                  }
                </ul>
              </div>

              {/* prerequisites section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('prerequisitesTitle')}</h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('prerequisitesMainData')}</p>

                <UnorderedList arrName={prerequisitesList} ulClassName="list-disc mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] font-medium" />

                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-8">{t('prerequisitesDesc')}</p>

                <ul className="list-disc marker:text-xl mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] font-medium">
                  {
                    prerequisitesData.map((data, ind) => {
                      return (
                        <li key={ind}><span className="font-bold pb-4">{data.title}</span>{data.desc}</li>
                      )
                    })
                  }
                </ul>
              </div>

              {/* steps section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('stepsTitle')}</h2>
                {
                  steps.map((data, id) => {
                    return (
                      <div key={id}>
                        <h3 className="mt-[29px] xl:mt-[30px] text-[20px] md:text-[20px] 2xl:text-[21px] xl:text-[20px] 4xl:text-[24px] font-bold leading-tight">{data.title}</h3>
                        <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">{data.desc}</p>
                        <ul className="list-disc marker:text-xl 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 pl-[34px] font-medium space-y-3">
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
              </div>

              {/* what does section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('whatDoesTitle')}</h2>
                <ul className="list-disc marker:text-xl mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] space-y-3 font-medium">
                  {
                    whatDoesData.map((data, ind) => {
                      return (
                        <li key={ind}><h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.title}</h3>{data.desc}</li>
                      )
                    })
                  }
                </ul>
              </div>

              {/* complete section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('completeTitle')}</h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('completeDesc')}</p>

                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">{t('completeDesc2')}
                  {" "} <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href={`https://rialtes.com/${locale}/services/hxm-transformation/successplus-successfactors-implementation-partner?utm_source=blog&utm_medium=organic/`}>{t('completeLink')}</Link>
                  {" "}  {t('completeDesc3')} <Link className="underline" href={"mailto:sales@rialtes.com"}><span >sales@rialtes.com</span></Link> {t('completeDesc4')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </section>
  );
}