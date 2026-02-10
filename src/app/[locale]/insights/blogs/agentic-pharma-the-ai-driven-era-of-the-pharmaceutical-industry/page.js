"use client";
import Image from "next/image";
import Link from "next/link";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";

const fullUrl = "https://www.rialtes.com/insights/blogs/agentic-pharma-the-ai-driven-era-of-the-pharmaceutical-industry";

export default function Page() {
  const t = useTranslations("agenticPharma");
  const currUrl = useUrl();
  const locale = useLocale();
  const content = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const { blogMainData, whyPharmaData, agenticAppData, schemaData } = content.agenticPharma;
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/agentic-pharma-the-ai-driven-era-of-the-pharmaceutical-industry`}
      />
      <Script
        id="schema-agentic-pharma"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/blog/fiber-optic-tree-network-connectivity-illustration.webp"
            alt={t("bannerAlt")}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/fiber-optic-tree-network-connectivity-illustration-mobile.webp"
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
              topic={t("blogTopic")}
              date="30 May 2025"
            />

            {/* main blog */}

            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>
            </div>
            <div className="xl:mt-[38px] mt-[33px]">
              {blogMainData.map((data, ind) => {
                return (
                  <p
                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                    key={ind}
                  >
                    {data}
                  </p>
                );
              })}
              <div className="md:mt-[50px] mt-[40px]">
                {/* breaking down section */}
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {" "}
                  {t("breakingTitle")}
                </h2>

                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("breakingData")}{" "}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("breakingData2")}
                </p>
              </div>
              {/* how agentic section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("howAgenticTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("howAgenticData")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("howAgenticData2")}
                </p>
              </div>
              {/* why the pharma section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("whyPharmaTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("whyPharmaDesc")}
                </p>
                <ul className="list-disc mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] font-medium pl-[36px] lg:pl-[46px]">
                  {whyPharmaData.map((data, ind) => {
                    return (
                      <li key={ind}>
                        <h3 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight mt-5">
                          {data.title} :{" "}
                        </h3>
                        {data.desc}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* agentict applications section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {" "}
                  {t("agenticAppTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[34px] ">
                  {agenticAppData.map((data, ind) => {
                    return (
                      <div key={ind}>
                        <h3 className="mt-8 font-bold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">
                          {ind + 1} .&nbsp;{data.title}{" "}
                        </h3>
                        <p className="md:pl-[26px] lg:pl-[36px] mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                          {data.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* improve patient section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("improveTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {" "}
                  {t("improveData")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("improveData2")}{" "}
                  <Link
                    className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                    href={`https://www.rialtes.com/${locale}/industry/life-sciences/pharma-biotech-digital-transformation/?utm_source=internal&utm_medium=blog`}
                    target="_blank">
                    {" "}
                    {t("improveDataLink")}
                  </Link>{" "}
                  {t("improveData3")}{" "}
                </p>
              </div>{" "}
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
