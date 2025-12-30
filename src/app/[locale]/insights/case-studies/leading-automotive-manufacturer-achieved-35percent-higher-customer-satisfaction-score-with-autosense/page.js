"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/caseStudy.json";
import esContent from "../../../../../../messages/es/caseStudy.json";
import frContent from "../../../../../../messages/fr/caseStudy.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import Script from "next/script";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import RelatedCaseStudies from "@/app/[locale]/components/RelatedCaseStudies"


export default function Page() {
  const currUrl = useUrl()
  const t = useTranslations("leadingCaseStudy");
  const locale = useLocale();
  const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const {
    keyList,
    solutionList,
    featureList,
    benefitsList,
    serviceList,
    schemaData
  } = Content.leadingCaseStudy;

  const fullUrl = "https://www.rialtes.com/insights/case-studies/leading-automotive-manufacturer-achieved-35percent-higher-customer-satisfaction-score-with-autosense/";

  return (
    <div className="min-h-screen  xl:mb-0 mb-[80px]">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        canonical={`https://www.rialtes.com/${locale}/insights/case-studies/leading-automotive-manufacturer-achieved-35percent-higher-customer-satisfaction-score-with-autosense/`}
      />

      <Script
        id="schema-leading"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[380px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/case-studies/automotive-robotic-assembly-line-car-manufacturing.webp"
            alt={t('bannerAlt')}
            fill
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="xl:hidden block h-full">
          <Image
            src="/images/case-studies/automotive-robotic-assembly-line-car-manufacturing-mobile.webp"
            alt={t('bannerAlt')}
            priority
            height={0}
            width={0}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

            {/* date and icons */}
            <BlogSocialIcons fullUrl={fullUrl} topic={t('Automotive')} date="30 June 2025" />

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t('leadingTitle')}</h1>

              {/* client section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('clientTitle')}</h2>
                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('clientDesc')}</p>
              </div>

              {/* key section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('keyTitle')}</h2>
                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('keyDesc')}</p>
                <ul className="list-disc mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-3">
                  {keyList.map(({ title, desc }, index) => (
                    <li key={index}>
                      <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {title}
                      </h3>
                      : {desc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* solution section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('solutionTitle')}</h2>
                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('solutionDesc')}</p>

                {/* approach section */}
                <div className="md:mt-[34px] mt-[29px]">
                  <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">
                    {t("approchTitle")}
                  </h3>

                  <ol className="list-decimal mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4">
                    {solutionList.map((item, index) => (
                      <li className="last:pb-4" key={index}>
                        <h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                          {item.title}
                        </h4> : {item.desc}
                      </li>
                    ))}
                  </ol>
                </div>
                {/* features section */}
                <div className="md:mt-[34px] mt-[29px]">
                  <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">
                    {t("featuresTitle")}
                  </h3>

                  <ol className="list-decimal mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4">
                    {featureList.map((item, index) => (
                      <li className="last:pb-4" key={index}>
                        <h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                          {item.title}
                        </h4> : {item.desc}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* benefits section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('benefitsTitle')}</h2>
                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('benefitsDesc')}</p>
                <ul className="list-disc mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4">
                  {benefitsList.map(({ title, desc }, index) => (
                    <li key={index}>
                      <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {title}
                      </h3>
                      : {desc}
                    </li>
                  ))}
                </ul>

                <div className="md:mt-[50px] mt-[40px]">
                  <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">
                    {t("serviceTitle")}
                  </h3>

                  <ol className="list-decimal mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4">
                    {serviceList.map((item, index) => (
                      <li className="last:pb-4" key={index}>
                        <h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                          {item.title}
                        </h4> : {item.desc}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* conclusion section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('conclusion')}</h2>
                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('conclusionDesc')}</p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('conclusionDescOne')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* case study carousel */}
      <section className="custom-container lg:pr-0 xl:mt-[80px] md:mt-[60px] my-[40px]">
        <RelatedCaseStudies url={currUrl} currTopic={t('Automotive')} />
      </section>
    </div>
  );
}
