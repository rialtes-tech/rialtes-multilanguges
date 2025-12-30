"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import useUrl from "@/app/[locale]/components/useUrl";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";


export default function Page() {
  const t = useTranslations("s4HanaSapALM");
  const locale = useLocale();
  const content = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
    mainData,
    whatDoesData,
    goverenanceData,
    traceabilityData,
    traceabilityData2,
    lifecycleData,
    faqData,
    schemaData
  } = content.s4HanaSapALM;
  const fullUrl = "https://www.rialtes.com/insights/blogs/s4hana-transformation-with-sap-signavio-cloud-alm";
  const currUrl = useUrl();

  return (
    <div className="min-h-screen">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/s4hana-transformation-with-sap-signavio-cloud-alm/`}
      />

      <Script
        id="schema-s4hana"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/blog/abstract-data-visualization-digital-wave-technology.webp"
            alt={t('bannerAlt')}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/abstract-data-visualization-digital-wave-technology-mobile.webp"
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
            <BlogSocialIcons
              fullUrl={fullUrl}
              topic="SAP Signavio"
              date="25 March 2025"
            />
            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>
            </div>
            <div className="xl:mt-[38px] mt-[33px]">
              {mainData.map((data, ind) => {
                return (
                  <p
                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                    key={ind}
                  >
                    {data}
                  </p>
                );
              })}
            </div>{" "}
            {/* What Does Each section */}
            <div className="md:mt-[50px] mt-[40px]">
              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                {t("whatDoesTitle")}
              </h2>
              <>
                <ul className="list-disc marker:text-black marker:text-xl text-black 4xl:pr-0 xl:pr-0 mt-2 space-y-3 font-medium pl-[36px] lg:pl-[56px]">
                  {whatDoesData.map((data, ind) => (
                    <li key={ind} className="mt-5">
                      <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight mt-8">
                        {data.title}
                      </h3>
                      <p
                        className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{
                          __html: data.desc,
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </>
              <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ">
                {t("whatDoesDesc")}
              </p>
            </div>
            {/* Governance to Ensure section */}
            <div className="md:mt-[50px] mt-[40px]">
              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                {t("governanceTitle")}
              </h2>
              <p className="mt-[29px] xl:mt-[34px]  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("governanceDesc")}
              </p>
              <ul className="list-disc marker:text-black marker:text-xl mt-5 space-y-3 text-[16px] xl:text-[18px] 4xl:text-[20px] font-medium pl-[36px] lg:pl-[56px]">
                {goverenanceData.map((data, ind) => {
                  return (
                    <li key={ind}>
                      <h3 className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight">
                        {data.title}
                      </h3>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="list-[circle] pl-[34px] mt-5 space-y-3"
                        liClassName="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      />
                    </li>
                  );
                })}
              </ul>
              <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]  font-semibold">
                {t("governanceDesc2")}
              </p>
            </div>
            {/* Traceability to section */}
            <div className="md:mt-[50px] mt-[40px]">
              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                {t("traceabilityTitle")}
              </h2>
              <p className="mt-[29px] xl:mt-[34px]  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ">
                {t("traceabilityDesc")}
              </p>

              <ul className="list-disc marker:text-black marker:text-xl mt-3 space-y-3 text-[16px] xl:text-[17px] 4xl:text-[20px] font-medium pl-[36px] lg:pl-[56px]">
                {traceabilityData.map((data, ind) => {
                  return (
                    <li key={ind}>
                      <h3 className="inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight">
                        {data.title}
                      </h3>{" "}
                      {data.desc}
                    </li>
                  );
                })}
              </ul>

              <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ">
                {t("traceabilityDesc2")}
              </p>

              <UnorderedList
                arrName={traceabilityData2}
                ulClassName="list-disc marker:text-black marker:text-xl mt-5 space-y-3 text-[16px] xl:text-[17px] 4xl:text-[20px] font-medium pl-[36px] lg:pl-[56px]"
                liClassName=""
              />
              <p className="mt-5  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("traceabilityDesc3")}
              </p>
            </div>
            {/* KPI Tracking section */}
            <div className="md:mt-[50px] mt-[40px]">
              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                {t("kpiTitle")}
              </h2>
              <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ">
                {t("kpiDesc")}
              </p>
              <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("kpiDesc2")}
              </p>
            </div>
            {/* The Program Lifecycle section */}
            <div className="md:mt-[50px] mt-[40px]">
              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                {t("lifecycleTitle")}
              </h2>
              <p className="mt-[29px] xl:mt-[34px]  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ">
                {t("lifecycleDesc")}
              </p>
              <div className="text-[16px] xl:text-[18px] 4xl:text-[20px] font-medium grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px] mt-[49px]">
                {lifecycleData.map((data, ind) => {
                  return (
                    <div
                      key={ind}
                      className="border border-[#707070] 3xl:p-[48px] 3xl:pl-[28 px] 3xl:pr-[26px] p-[30px] sm:w-[75%] md:w-full"
                    >
                      <h3 className="inline 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight text-[#006FBE] font-bold">
                        {data.title}
                      </h3>

                      {data.list.map((elem, id) => {
                        return (
                          <div key={id}>
                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-[29px]">
                              {elem}
                            </p>
                            {id == 0 && (
                              <div className="bg-[#006FBE] h-[2px] w-[40px] mt-6 mb-4"></div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Why This Matters for Enterprises section */}
            <div className="md:mt-[50px] mt-[40px]">
              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                {t("whyMatterTitle")}
              </h2>
              <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("whyMatterDesc")}
              </p>
              <p className="mt-5  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("whyMatterDesc2")}
              </p>
            </div>
            {/* Governed, Measurable section */}
            <div className="md:mt-[50px] mt-[40px]">
              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                {t("governedTitle")}
              </h2>
              <p className="mt-[29px] xl:mt-[34px]  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                <Link href={`https://www.rialtes.com/${locale}/insights/blogs/why-sap-signavio-is-critical-for-a-successful-s4hana-implementation/`}>
                  {" "}
                  <span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">
                    {t("governedLink")}
                  </span>
                </Link>{" "}
                {t("governedDesc")}
              </p>
              <p className="mt-5   4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("governedAt")} <strong>{t("rialtes")}</strong> ,
                {t("governedDesc2")}{" "}
                <Link href={`https://www.rialtes.com/${locale}/solutions/enterprise-platforms/sap-consulting`}>
                  {" "}
                  <span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">
                    {t("sap")}
                  </span>
                </Link>
                , {t("governedDesc3")}
              </p>
            </div>
            <div>
              {/* faq section */}

              <section className="xl:mt-[80px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("faqTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[34px]">
                  <FAQAccordion faqData={faqData} />{" "}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </div>
  );
}
