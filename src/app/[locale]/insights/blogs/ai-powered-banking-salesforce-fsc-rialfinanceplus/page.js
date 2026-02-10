"use client";
import Image from "next/image";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import Link from "next/link";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";

export default function Page() {
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/ai-powered-banking-salesforce-fsc-rialfinanceplus";
  const currUrl = useUrl();
  const t = useTranslations("rialfinanceBlog");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
    schemaData,
    blogMainData,
    whyData,
    buildingData,
    powerData,
    scaleData,
    frictionData,
    rialData,
    servicesData,
    futureData,
    faqData,
  } = blogsContent.rialfinanceBlog;

  return (
    <section className="min-h-screen">
      <Seo
        title="How AI Is Redefining Banking with Salesforce FSC | RialFinancePlus"
        description="Through RialFinance+, financial institutions turn Salesforce FSC into a connected, compliant, insight-driven platform for intelligent engagement and risk control."
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/ai-powered-banking-salesforce-fsc-rialfinanceplus`}
      />
      <Script
        id="schema-kinaxis"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="md:block hidden">
          <Image
            src="/images/blog/smart-city-digital-network-iot-technology-banner.webp"
            className="w-full h-auto object-cover"
            alt={t("bannerAlt")}
            fill
            priority
          />
        </div>
        <div className="md:hidden block">
          <Image
            src="/images/blog/smart-city-digital-network-iot-technology-mobile-banner.webp"
            alt={t("bannerAlt")}
            priority
            height={0}
            width={0}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12 grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11 col-span-12">
            {/* date and icons */}
            <BlogSocialIcons
              fullUrl={fullUrl}
              topic={t("blogCategory")}
              date="14 January 2026"
            />
            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[58px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("headerAlt")}
              </h1>
              <div className="xl:mt-[38px] mt-[33px]">
                {blogMainData.map((data, ind) => {
                  return (
                    <p
                      key={ind}
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  );
                })}
              </div>
              {/* Why Traditional CRM Falls Short in Financial Services */}
              <div className="md:mt-[50px] mt-[40px]">
                {whyData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <p className="mt-5 font-bold 4xl:text-[24px] 2xl:text-[21px] text-[20px]">
                        {data.desc2}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc4}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* The Power of AI + Salesforce FSC in Modern Banking */}
              <div className="md:mt-[50px] mt-[40px]">
                {powerData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <h3 className="mt-5 font-bold 4xl:text-[24px] 2xl:text-[21px] text-[20px]">
                        {data.desc1}
                      </h3>

                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Building a True Client 360 for Financial Institutions*/}
              <div className="md:mt-[50px] mt-[40px]">
                {buildingData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />

                      <div className="">
                        <div className="xl:py-10 py-8 w-[300px] md:w-[360px] xl:w-[520px]">
                          <Image
                            src="/images/blog/client-360-comprehensive-customer-view-diagram.webp"
                            alt={t("clientDiagram")}
                            width={0}
                            height={0}
                            className=" h-full w-full relative"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Intelligent Onboarding and Advisory at Scale*/}
              <div className="">
                {scaleData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc4}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/*Compliance-Ready Automation Without the Friction */}
              <div className="md:mt-[50px] mt-[40px]">
                {frictionData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <h3 className="mt-5 font-bold 4xl:text-[24px] 2xl:text-[21px] text-[20px]">
                        {data.whatTitle}
                      </h3>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Why RialFinance+ Is Different */}
              <div className="md:mt-[50px] mt-[40px]">
                {rialData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <p
                        className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5"
                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                      />
                      <h3 className="mt-5 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight font-bold">
                        {data.desc2}
                      </h3>
                      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[50px] mt-[40px] gap-[20px] sm:w-[80%] md:w-full 4xl:w-[1100px]">
                        {data.list.map((item, id) => {
                          return (
                            <div
                              className="4xl:p-[36px] p-[32px] border border-[#707070]"
                              key={id}
                            >
                              <h4 className="text-[#006FBE] 4xl:text-[22px] xl:text-[19px] text-[18px] font-bold pb-4">
                                {item.title}
                              </h4>
                              <p
                                className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                dangerouslySetInnerHTML={{ __html: item.desc }}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Real Business Impact Across Financial Services */}
              <div className="md:mt-[50px] mt-[40px]">
                {servicesData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                      <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc4}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc5}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* The Future of Financial Services Is Intelligent, Connected, and Trusted */}
              <div className="md:mt-[50px] mt-[40px]">
                {futureData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>

                      {data.desc.map((para, index) => (
                        <p
                          key={index}
                          className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  );
                })}
                <div className="lg:mt-8 mt-6">
                  <Image
                    src="/images/blog/crm-evolution-four-step-transformation-process.svg"
                    alt={t("crmAlt")}
                    width={0}
                    height={0}
                    className=" h-full w-full relative"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq section */}
      <section className="xl:mt-[80px] mt-[40px] custom-container">
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
          {t("faqTitle")}
        </h2>
        <div className="mt-[29px] xl:mt-[30px]">
          <FAQAccordion faqData={faqData} />
        </div>
      </section>

      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </section>
  );
}
