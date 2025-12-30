"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";

export default function Page() {
  const t = useTranslations("agentforceIndustry4");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
    agentforceEnablingData,
    reactiveData,
    impactData,
    readyData,
    impactData2,
    faqs,
    schemaData
  } = blogsContent.agentforceIndustry4;
  const currUrl = useUrl();
  const fullUrl = "https://www.rialtes.com/insights/blogs/how-agentforce-ai-predicts-prevents-downtime-in-manufacturing";

  return (
    <div className="min-h-screen">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords="Partners, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/how-agentforce-ai-predicts-prevents-downtime-in-manufacturing/`}
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
            src="/images/blog/industry-4-automation-technology.webp"
            alt={t("bannerAlt")}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/industry-4-automation-technology-mobile.webp"
            alt={t("bannerAlt")}
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
            <BlogSocialIcons
              fullUrl={fullUrl}
              topic="Salesforce Agentforce"
              date="08 September 2025"
            />

            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>
              <div className="xl:mt-[38px] mt-[33px]">
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("blogMainData")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("blogMainData2")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold">
                  {t("blogMainData3")}
                </p>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("agentforceTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("agentforceDesc")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("agentforceDesc2")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("agentforceDesc3")}
                </p>

                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:w-[80%] gap-y-[60px] sm:gap-x-[80px] lg:gap-x-[20px] lg:w-[980px] xl:w-[1090px] 3xl:w-[1150px] 4xl:w-[1380px] lg:mt-[60px] mt-[42px]">
                  {reactiveData.map((data, ind) => {
                    return (
                      <div key={ind}>
                        <img
                          src={data.image}
                          alt={`${data.alt}`}
                          className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]"
                        />
                        <p className="mt-10 lg:mt-5 4xl:pr-20 pr-8  4xl:text-[20px] xl:text-[17px] text-[16px] font-bold">
                          {data.title}
                        </p>
                        <p className="mt-3 4xl:pr-20 pr-8 4xl:text-[20px] xl:text-[17px] text-[16px]">
                          {data.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("agentforceEnablesTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("agentforceEnablesDesc")}
                </p>
                {agentforceEnablingData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h3 className="mt-12 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight font-bold">
                        {data.title}
                      </h3>
                      <UnorderedList
                        arrName={data.desc}
                        ulClassName="mt-3"
                        liClassName="4xl:text-[20px] xl:text-[17px] text-[16px] mt-1 font-medium"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("impactTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("impactDesc")}
                </p>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-y-8 md:gap-x-6 lg:gap-0 sm:w-[50%] md:w-[80%] lg:mt-[50px] mt-[40px] lg:w-[980px] xl:w-[1090px] 3xl:w-[1150px]">
                  {impactData.map((data, ind) => {
                    return (
                      <div
                        key={ind}
                        className={` ${ind == 0 &&
                          "lg:border-r max-md:border-b max-md:pb-4 lg:pr-0 xl:pr-[39px] border-[#707070]"
                          } ${ind == 3 &&
                          "md:pl-10 md:border-l md:pr-2 max-sm:pt-6 border-[#707070]"
                          } ${(ind == 2 || ind == 1) &&
                          "lg:px-[39px] max-md:py-6 max-md:border-b border-[#707070]"
                          } ${ind == 1 &&
                          "lg:border-r md:border-l md:pl-10  border-[#707070]"
                          }`}
                      >
                        <span className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px] font-bold">
                          {data.title}{" "}
                        </span>
                        <span className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                          {data.desc}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-14 xl:w-[90%] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("impactDesc2")}
                </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-[26px] gap-y-[26px] mt-[48px] lg:mt-[60px] xl:w-[1080px] sm:w-[85%] lg:w-full">
                  {impactData2.map((data, ind) => {
                    return (
                      <div
                        key={ind}
                        className="border border-[#707070] p-[24px] md:p-[34px]"
                      >
                        <h3 className="mt-5 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight text-[#0092E0] font-bold pb-4 border-b border-[#707070]">
                          {data.title}
                        </h3>
                        <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                          {data.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-10  4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("impactDesc3")}
                </p>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("readyTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[34px]">
                  {readyData.map((data, ind) => (
                    <p
                      key={ind}
                      className="mt-5  4xl:text-[20px] xl:text-[17px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  ))}
                </div>
              </div>
              {/* faq section */}
              <div className="xl:mt-[80px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("faqTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[34px]">
                  <FAQAccordion faqData={faqs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </div>
  );
}
