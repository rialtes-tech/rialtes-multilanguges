"use client";
import Image from "next/image";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Link from "next/link";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";

const fullUrl = "https://www.rialtes.com/insights/blogs/how-does-sap-ariba-streamline-direct-and-indirect-procurement-needs";

export default function Page() {
  const t = useTranslations("howDoesSapAribaStreamline");
  const locale = useLocale();
  const currUrl = useUrl();
  const content = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const { procurementData, mainActivityData, aribaOptimizesData,schemaData } =
    content.howDoesSapAribaStreamline;
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/how-does-sap-ariba-streamline-direct-and-indirect-procurement-needs/`}
      />
      <Script
        id="schema-how-does"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        {/* Desktop Image */}
        <div className="hidden xl:block">
          <Image
            src="/images/blog/fiber-optic-network-data-connectivity.webp"
            alt={t('bannerAlt')}
            fill
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block xl:hidden">
          <Image
            src="/images/blog/fiber-optic-network-data-connectivity-mobile.webp"
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
              topic="SAP Ariba"
              date="29 May 2024"
            />
            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight 4xl:w-[90%]">
                {t("blogTitle")}
              </h1>
              <div className="xl:mt-[38px] mt-[33px]">
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("blogMainData")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("blogMainData2")}
                </p>
              </div>
              {/* what is ariba section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {" "}
                  {t("procurementTitle")}{" "}
                </h2>
                <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mt-[29px] xl:mt-[34px]">
                  {t("procurementDesc")}
                </p>
                {procurementData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold mt-5">
                        {data.title}
                      </h3>
                      <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* main activities section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {" "}
                  {t("mainActivityTitle")}
                </h2>

                <p className=" mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("mainActivityDesc")}
                </p>

                <ul className="list-disc  pl-[36px] lg:pl-[56px] mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {mainActivityData.map((data, ind) => {
                    return (
                      <li className="mt-4 font-medium" key={ind}>
                        <span className="font-bold">{data.title} </span>
                        { }
                        {data.desc}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* ariba optimizes section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {" "}
                  {t("aribaOptimizesTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[34px]">
                  {aribaOptimizesData.map((data, ind) => {
                    return (
                      <div key={ind}>
                        <h3 className="mt-5 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">
                          {ind + 1}. {data.title}{" "}
                        </h3>
                        <p className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] md:pl-[24px]">
                          {data.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* integrate section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("integrateTitle")}
                </h2>

                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("integrateDesc")}
                </p>
                <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("integrateDesc2")}{" "}
                  <Link
                    className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                    href={`https://www.rialtes.com/${locale}/solutions/enterprise-platforms/sap-consulting/?utm_source=internal&utm_medium=blog`} target="_blank">
                    {t("integrateLink")}
                  </Link>{" "}
                  , {t("integrateDesc3")}{" "}
                </p>
              </div>{" "}
            </div>{" "}
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
