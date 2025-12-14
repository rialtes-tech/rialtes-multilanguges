"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import Link from "next/link";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";


export default function Page() {
  const t = useTranslations("whySapSignavio");
  const currUrl = useUrl();
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
    blogdescData,
    transformationPoints,
    voyagerPoints,
    intelligentPoints,
    benefitsPoints,
    domainsPoints,
    riskPoints,
    faqData,
    schemaData
  } = blogsContent.whySapSignavio;
  const fullUrl = "https://www.rialtes.com/insights/blogs/why-sap-signavio-is-critical-for-a-successful-s4hana-implementation/";

  return (
    <div className="min-h-screen">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        keywords="Partners, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/why-sap-signavio-is-critical-for-a-successful-s4hana-implementation/`}
      />

      <Script
        id="schema-sapSignavio"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/blog/digital-data-tunnel-technology-speed-concept.webp"
            alt={t("bannerAlt")}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/digital-data-tunnel-technology-speed-concept-mobile.webp"
            alt={t("bannerAlt")}
            priority
            height={0}
            width={0}
            className="w-full h-auto object-cover "
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">
            {/* date and icons */}
            <BlogSocialIcons
              fullUrl={fullUrl}
              topic={t("blogTopic")}
              date="16 June 2025"
            />

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              {" "}
              <h1 className="text-[#000000] pb-6 leading-tight text-[26px] xl:text-[42px] 2xl:text-[48px] 4xl:text-[60px] md:text-[28px]">
                {t("blogTitle")}
              </h1>
              <div className="xl:mt-[38px] mt-[33px]">
                {blogdescData.map((data, ind) => {
                  return (
                    <p
                      key={ind}
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                    >
                      {data}
                    </p>
                  );
                })}
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("strategicTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("strategicDesc")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("keyReasonTitle")}
                </p>
                <ul className="list-disc mt-5 space-y-4 font-medium  4xl:text-[20px]  text-[16px] pl-[36px] lg:pl-[46px]">
                  {transformationPoints.map((point, index) => (
                    <li key={index}>
                      <h3 className="font-bold inline mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight">
                        {point.title}:
                      </h3>{" "}
                      {point.desc}
                    </li>
                  ))}
                </ul>{" "}
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("voyagerTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("voyagerDesc")}{" "}
                  <Link
                    href={
                      "https://www.rialtes.com/services/business-transformation/rise-with-sap-services/"
                    }
                  >
                    {" "}
                    <span className="text-[#0092E0] pr-2 transition duration-300 ease-out hover:text-gray-400 underline">
                      {t("voyagerDescLink")}
                    </span>
                  </Link>
                  ,{t("voyagerDesc2")}
                  {t("voyagerDesc3")} <strong> {t("voyagerDescStrong")}</strong>
                </p>
                <ol className="flex flex-col lg:flex-row relative lg:mt-[74px] mt-[60px] xl:w-[1100px]">
                  {voyagerPoints.map((step, index) => (
                    <li
                      key={index}
                      className="relative flex-1 lg:mb-0 flex flex-col"
                    >
                      {/* Circle */}
                      <div className="z-10 flex justify-center w-4 h-4 bg-[#0C8AED] rounded-full ring-0 ring-white lg:ring-4 shrink-0">
                        <span className="flex w-3 h-3 bg-[#0C8AED] rounded-full"></span>
                      </div>

                      {/* Vertical line (mobile/tablet) */}
                      {index !== voyagerPoints.length - 1 && (
                        <div className="absolute top-4 left-2 w-0.5 h-full bg-[#9D9D9D] lg:hidden"></div>
                      )}

                      {/* Horizontal line (desktop) */}
                      {index !== voyagerPoints.length - 1 && (
                        <div className="hidden lg:block flex-1 w-full h-0.5 bg-[#9D9D9D] absolute top-2"></div>
                      )}

                      {/* Label */}
                      <div
                        className="lg:mt-[44px] max-lg:ml-[40px] max-lg:mt-[-20px]"
                      >
                        <h3
                          className={`font-bold inline 4xl:text-[22px] 2xl:text-[19px] xl:text-[19px] md:text-[18px] text-[18px] lg:pr-8 xl:pr-2}`}>
                          {step.title}
                        </h3>
                        <p className="4xl:text-[20px] xl:text-[17px] text-[16px] lg:mt-[34px] mt-[8px] lg:pr-12 4xl:pr-10 max-lg:mb-12">
                          {step.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="md:mt-0 lg:mt-[110px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("methodologyDesc")}
                </p>{" "}
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("jouleTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("jouleDesc")} ,
                  <strong className="pl-1">{t("jouleDescStrong")} </strong>,
                  {t("jouleDesc2")}
                  {t("jouleDesc3")} <strong>{t("signavioStrong")} </strong>,{" "}
                  {t("jouleDesc4")}
                </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[50px] mt-[26px] md:gap-[18px] gap-y-[20px] sm:w-[70%] md:w-[90%] lg:w-full xl:w-[1100px]">
                  {intelligentPoints.map((point, index) => (
                    <div
                      key={index}
                      className="border border-[#707070] lg:p-[40px] p-[26px]"
                    >
                      <h3 className="font-bold inline 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[20px] leading-tight text-[#006FBE]">
                        {point.title}
                      </h3>{" "}
                      <p className="mt-[16px]  4xl:text-[20px] xl:text-[17px] text-[16px]">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <p className=" 4xl:text-[20px] xl:text-[17px] text-[16px] lg:mt-[47px] mt-[28px]">
                  {t("jouleSignavioDesc")}{" "}
                  <strong>{t("jouleSignavioStrong")}</strong>,
                  <span className="pl-1"></span>
                  {t("jouleSignavioDesc2")}{" "}
                  <strong>{t("jouleSignavioDesc3")}</strong>
                </p>{" "}
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("benefitsTitle")}
                </h2>
                <div className="flex flex-wrap justify-center lg:mt-[120px] mt-[80px] gap-y-[60px] md:gap-y-[90px] md:gap-x-[18px] xl:w-[1100px] md:w-[90%] sm:w-[70%]">
                  {benefitsPoints.map((point, index) => (
                    <div
                      key={index}
                      className="border border-[#707070] relative flex-1 min-w-[300px] max-w-[350px] lg:pb-[41px] lg:pt-[70px] pt-[60px] pb-[40px]"
                    >
                      <div className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[80px] lg:h-[80px] absolute lg:top-[-40px] top-[-30px] left-1/2 -translate-x-1/2 flex items-center justify-center bg-[#006FBE] text-white font-bold rounded-full text-[26px] xl:text-[32px] 2xl:text-[38px] 4xl:text-[50px]">
                        {index + 1}
                      </div>

                      <div>
                        <h3 className="font-bold 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight p-4 bg-[#e0dfdf] px-[35px]">
                          {point.title}
                        </h3>
                        <p className="px-[35px] lg:pl-[28px] lg:pr-[22px] lg:mt-[32px] mt-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>{" "}
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("useCasesTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("useCasesDesc")}
                </p>
                <ul className="list-disc space-y-3 font-medium 4xl:text-[20px] xl:text-[18px] text-[16px] pl-[36px] lg:pl-[46px] pt-4">
                  {domainsPoints.map((point, index) => (
                    <li key={index}>
                      <h3 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight">
                        {point.title}:
                      </h3>{" "}
                      {point.desc}
                    </li>
                  ))}
                </ul>{" "}
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("whyNotTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("whyNotDesc")}
                </p>
                <UnorderedList
                  arrName={riskPoints}
                  ulClassName="mt-3 font-medium list-disc 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[36px] lg:pl-[46px]  space-y-3"
                  liClassName=""
                />
                <p className="mt-3 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("whyNotDesc2")}
                </p>{" "}
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("rialtesSignavioTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("rialtesSignavioDesc")}{" "}
                  <Link
                    href={
                      "https://www.rialtes.com/insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule/"
                    }
                  >
                    <span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">
                      {" "}
                      {t("rialtesSignavioLink")}{" "}
                    </span>{" "}
                  </Link>
                  ,{t("rialtesSignavioDesc2")}
                </p>
                <p className="mt-4 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("rialtesSignavioDesc3")}
                </p>{" "}
              </div>
              <h2 className="font-semibold mt-10 text-[#0092E0] 4xl:text-[32px] xl:text-[26px] 2xl:text-[26px] text-[22px]">
                {t("faqTitle")}
              </h2>
              <FAQAccordion faqData={faqData} />
            </div>
          </div>{" "}
        </div>
      </section>
      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </div>
  );
}
