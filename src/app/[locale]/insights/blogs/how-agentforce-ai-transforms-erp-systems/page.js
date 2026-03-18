"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";

export default function Page() {
  const currUrl = useUrl();
  const t = useTranslations("agentforceHitech");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
    agentfoceIntegrates,
    benefitsData,
    applicationData,
    buildingData,
    faqs,
    schemaData
  } = blogsContent.agentforceHitech;
  const fullUrl = "https://www.rialtes.com/insights/blogs/how-agentforce-ai-transforms-erp-systems/";

  return (
    <section className="min-h-screen">
      <Seo 
        title={t("seoTitle")}
        description={t("seoDescription")}
        keywords="Partners, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/how-agentforce-ai-transforms-erp-systems`}
      />

      <Script
        id="schema-copilots"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/blog/agentforce-ai-erp.webp"
            alt={t('bannerAlt')}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/agentforce-ai-erp-mobile.webp"
            alt={t('bannerAlt')}
            priority
            height={0}
            width={0}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px] ">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11 max-[365px]:pr-[38px]">
            <BlogSocialIcons fullUrl={fullUrl} topic="Salesforce Agentforce" date="15 September 2025" />


            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>
              <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("blogMainData")}
              </p>

              {/* agentforce section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("agentforceTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[34px]">
                  {agentfoceIntegrates.map((data, ind) => {
                    return (
                      <p
                        key={ind}
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data }}
                      />
                    );
                  })}

                  <h3 className="mt-8 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight font-bold">
                    {t("howDoesTitle")}
                  </h3>
                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("howDoesDesc")}
                  </p>
                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("howDoesDesc2")}
                  </p>
                </div>
              </div>

              {/* benefits section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("benefitsTitle")}
                </h2>

                <div className="mt-[29px] xl:mt-[34px]">
                  {benefitsData.map((data, ind) => {
                    return (
                      <div className={`md:flex mt-24 md:mt-10 py-[34px] px-[26px] border border-[#707070] relative md:ml-[90px] sm:w-[80%] md:w-auto lg:w-[850px] 3xl:w-[1100px] ${ind == 5 && "md:py-[54px]"}`} key={ind}>
                        <h3 className={`md:absolute max-md:mt-[-80px] max-md:w-fit 4xl:w-[330px] xl:w-[320px] md:w-[280px] md:left-[-80px] bg-[#006FBE] text-white font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight px-[40px] py-[22px]`}>
                          {data.title}
                        </h3>
                        <div className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[220px] xl:ml-[260px] 4xl:ml-[280px]">
                          {data.desc}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* application section */}
              <div className="md:mt-[80px] mt-[60px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("applicationTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("applicationDesc")}
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 max-md:gap-y-12 gap-[26px] md:mt-[50px] mt-[40px] sm:w-[70%] md:w-full xl:w-[1090px] 3xl:w-[1250px]">
                  {applicationData.map((data, ind) => {
                    return (
                      <div
                        key={ind}
                        className="md:pr-[34px] md:pt-[26px] md:pb-[40px]">
                        <h3 className="mt-2 4xl:text-[22px] xl:text-[19px] text-[18px] font-bold pb-4 border-b border-[#006FBE]">
                          {data.title}
                        </h3>
                        <p
                          key={ind}
                          className="mt-5 4xl:pr-20 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[94%]"
                          dangerouslySetInnerHTML={{ __html: data.desc }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>


              {/* building section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("buildingTitle")}
                </h2>
                {buildingData.map((data, ind) => {
                  return (
                    <p
                      key={ind}
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq section */}
      <section className="xl:mt-[80px] mt-[40px] custom-container">
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('faqTitle')}</h2>
        <div className="mt-[29px] xl:mt-[34px]">
          <FAQAccordion faqData={faqs} />
        </div>
      </section>

      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </section>
  );
}
