"use client";
import Image from "next/image";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";

import useUrl from "@/app/[locale]/components/useUrl";
const schemaData = {};

const fullUrl =
  "https://www.rialtes.com/insights/blogs/himachal-pradesh-the-pharma-jewel-of-north-india-with-the-largest-pharma-manufacturing-facilities";

export default function Page() {
  const t = useTranslations("himachalBlog");
  const locale = useLocale();
  const currUrl = useUrl();
  const content = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
    blogMainData,
    pharmaData,
    economicData,
    economicData2,
    economicData3,
    hmData,
  } = content.himachalBlog;
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        canonical={
          "https://www.rialtes.com/insights/blogs/himachal-pradesh-the-pharma-jewel-of-north-india-with-the-largest-pharma-manufacturing-facilities/"
        }
      />
      <Script
        id="schema-himachal"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <Image
          src="/images/blog/Pharma Jewel of North India_Blog banner.webp"
          alt="Himachal Pradesh: The Pharma Jewel of North India"
          fill
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          priority
          className="w-full h-full xl:block hidden "
        />
        <Image
          src="/images/blog/Pharma Jewel of North India_Blog mobile banner.webp"
          alt="Himachal Pradesh: The Pharma Jewel of North India"
          fill
          priority
          className="xl:hidden block"
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
        />
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">
            {/* date and icons */}
            <BlogSocialIcons
              fullUrl={fullUrl}
              topic={t("blogTopic")}
              date="01 July 2025"
            />
            {/* main blog */}

            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>
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
                <Image
                  src={t('impactImage')}
                  alt="India's impact on the global pharmaceutical industry"
                  width={0}
                  height={0}
                  className="xl:w-full h-full w-full relative xl:right-[64px] lg:right-[55px]  md:w-[80%]"
                />
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("northernTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("northerData")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("northerData2")}
                </p>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("pharmaTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[34px]">
                  {pharmaData.map((data, ind) => {
                    return (
                      <p
                        className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]]"
                        key={ind}
                      >
                        {data}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("economicTitle")}{" "}
                </h2>

                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("economicDesc")}
                </p>

                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("economicDesc2")}
                </p>
                <div className="pl-[36px] lg:pl-[56px] space-y-4 mt-5">
                  <UnorderedList
                    arrName={economicData}
                    ulClassName="list-disc mt-5 marker:text-[#0092E0] marker:text-xl text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium"
                  />
                </div>

                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("economicDesc3")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("economicDesc4")}
                </p>
                <div className="pl-[36px] lg:pl-[56px] space-y-4 mt-5">
                  <UnorderedList
                    arrName={economicData2}
                    ulClassName="list-disc mt-5 marker:text-[#0092E0] marker:text-xl text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium"
                  />
                </div>
                <p className="text-black mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("economicDesc5")}
                </p>
                <div className="pl-[36px] lg:pl-[56px] space-y-4 mt-5">
                  <UnorderedList
                    arrName={economicData3}
                    ulClassName="list-disc mt-5 marker:text-[#0092E0] marker:text-xl text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium"
                  />
                </div>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("economicDesc6")}
                </p>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                {/* himachal pradeshs section */}
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("hmRoleTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[34px]">
                  {hmData.map((data, ind) => {
                    return (
                      <p
                        className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        key={ind}
                      >\     
                        {data}
                      </p>
                    );
                  })}
                </div>

                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("hmDesc")}{" "}
                  <Link className="underline" href={"mailto:sales@rialtes.com"}>
                    <span>sales@rialtes.com</span>
                  </Link>{" "}
                  {t("hmDesc2")}
                </p>
              </div>
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
