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
  const t = useTranslations("sapBuild");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
    blogMainData,
    whySapData,
    howSapData,
    practicalData,
    businessImpactData,
    readyData,
    faqData,
    schemaData
  } = blogsContent.sapBuild;
  const fullUrl = "https://www.rialtes.com/insights/blogs/sap-build-for-manufacturing-4-0";
  const currUrl = useUrl();
  return (
    <section className="min-h-screen">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords="Partners, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/sap-build-for-manufacturing-4-0/`}
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
            src="/images/blog/sap-industry-desktop-banner.webp"
            alt={t('bannerAlt')}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/sap-industry-mobile-banner.webp"
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

            <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="16 September 2025" />

            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>
              <div className="mt-[29px] xl:mt-[34px]">
                {blogMainData.map((data, ind) => {
                  return (
                    <p
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" key={ind}>
                      {data}
                    </p>
                  );
                })}
              </div>

              {/* why sap section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('whySapTitle')}</h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("whySapDesc")}
                </p>
                {whySapData.map((data, ind) => {
                  return (
                    <div className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" key={ind}>
                      <h4 className="inline font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.title} -{" "}
                      </h4>
                      <span className="font-medium">{data.desc}</span>
                    </div>
                  );
                })}
              </div>

              {/* how sap section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('howSapTitle')}</h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("howSapDesc")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("howSapDesc2")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:w-[80%] md:w-[90%] lg:w-[950px] xl:w-[1100px] 4xl:w-[1200px] mt-[95px] gap-[26px] gap-y-[80px] md:gap-y-[90px]">
                  {howSapData.map((data, ind) => {
                    return (
                      <div
                        key={ind}
                        className="border border-[#707070] p-[26px] relative md:px-10 lg:px-[26px] pb-[62px]" >
                        <p className="absolute top-[-24px] md:top-[-40px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] text-[#0092E0] font-bold w-[80%] sm:w-[70%] lg:w-[80%] xl:w-[70%] 4xl:w-[80%] pb-4 px-3 bg-white border-b border-[#0092E0]">
                          {data.title}
                        </p>
                        <p className="4xl:mt-20 lg:mt-16 md:mt-16 sm:mt-12 mt-14 max-[352px]:mt-20 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                          {data.desc}
                        </p>
                        <ul className="mt-[32px]">
                          {data.list.map((elem, id) => {
                            return (
                              <li key={id} className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">
                                {elem}
                                {id < data.list.length - 1 && (
                                  <p className="w-16 h-[3px] mt-4 bg-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"></p>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* practical section */}
                <div className="md:mt-[80px] mt-[60px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('practicalTitle')}</h2>
                  <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("practicalDesc")}
                  </p>
                  {practicalData.map((data, ind) => {
                    return (
                      <div
                        className="md:flex mt-24 md:mt-10 py-[34px] xl:py-[46px] px-[26px] md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative md:ml-[90px] sm:w-[80%] md:w-auto lg:w-[80%] xl:w-auto"
                        key={ind}>
                        <div className="md:absolute max-md:mt-[-80px] sm:mt-[-70px] md:mt-0 md:top-[50%] md:translate-y-[-50%] 4xl:w-[300px] xl:w-[280px] md:w-[240px] w-fit md:left-[-80px] bg-[#006FBE] text-white font-semibold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] px-[40px] py-[22px]">
                          {data.title}
                        </div>
                        <div className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[180px] xl:ml-[210px] 4xl:ml-[240px]">
                          {data.desc}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* impact section */}
                <div className="md:mt-[80px] mt-[60px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('impactTitle')}</h2>
                  <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("impactDesc")}
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[26px] mt-[47px] sm:w-[70%] md:w-[90%] lg:w-[900px] xl:w-[1090px] 3xl:w-[1140px]">
                    {businessImpactData.map((data, ind) => {
                      return (
                        <div key={ind} className="border border-[#707070] p-[28px] md:px-[34px] md:pt-[26px] md:pb-[40px]">
                          <h3 className="mt-2 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight text-[#0092E0] font-bold pb-4 border-b border-[#707070]">
                            {data.title}
                          </h3>
                          <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                            {data.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ready section */}
                <div className="md:mt-[80px] mt-[60px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('readyTitle')}</h2>
                  <div className="mt-[29px] xl:mt-[34px]">
                    {readyData.map((data, ind) => {
                      return (
                        <p
                          key={ind}
                          className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                          dangerouslySetInnerHTML={{ __html: data }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq section */}
      <section className="xl:mt-[80px] mt-[40px] custom-container">
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('faqTitle')}</h2>
        <div className="mt-[29px] xl:mt-[34px]">
          <FAQAccordion faqData={faqData} />
        </div>
      </section>

      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </section>
  );
}
