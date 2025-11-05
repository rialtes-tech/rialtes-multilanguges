"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Link from "next/link";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule/",
  },
  headline: "Redefining the Future of Enterprise AI with SAP Joule",
  description:
    "Discover how SAP Joule is shaping enterprise AI by enabling smarter automation, enhanced decision-making, and transformative business insights.",
  image: "https://www.rialtes.com/images/blog/data-connectivity-network-visualization-digital-tree.webp",
  author: {
    "@type": "Organization",
    name: "Rialtes",
    url: "https://www.rialtes.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Rialtes",
    logo: {
      "@type": "ImageObject",
      url: "https://www.rialtes.com/images/homepage/logo.svg",
    },
  },
  datePublished: "2025-04-22",
  articleSection: "SAP AI",
  url: "https://www.rialtes.com/insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule/",
};

export default function Page() {
  const t = useTranslations("redefiningBlog");
  const locale = useLocale();
  const currUrl = useUrl();
  const content = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
    sapGenerativeData,
    jouleData,
    howAiWorkData,
    howSapJouleData,
    sapJouleData,
    quickGlimpseData1,
    responsiveData,
  } = content.redefiningBlog;
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        canonical={
          "https://www.rialtes.com/insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule/"
        }
      />
      <Script
        id="schema-redefining"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/blog/data-connectivity-network-visualization-digital-tree.webp "
            alt={t('bannerAlt')}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/data-connectivity-network-visualization-digital-tree-carousel.webp"
            alt={t('bannerAlt')}
            priority
            height={0}
            width={0}
            className="w-full md:h-auto h-[390px] object-cover"
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
              date="25 April 2025"
            />
            {/* main blog */}

            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>
              <div className="xl:mt-[38px] mt-[33px]">
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("blogMainData")}{" "}
                  <Link
                    className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                    href="https://www.youtube.com/watch?v=YRg5a0iKKuI&t=1s"
                  >
                    {" "}
                    {t("blogMainLink")}
                  </Link>{" "}
                  {t("blogMainData2")}{" "}
                </p>
              </div>
              {/* a quick glimpse section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("quickGlimpseTitle")}
                </h2>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {" "}
                  {t("quickGlimpseDesc")}
                </p>

                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("quickGlimpseDescTitle")}
                </p>
                <UnorderedList
                  arrName={quickGlimpseData1}
                  ulClassName="list-disc pl-[36px] lg:pl-[56px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] font-medium my-4 space-y-4 marker:text-[#0092E0]"
                />

                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("quickGlimpseDesc2")}
                </p>
              </div>
              {/* sap generative section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("sapGenerativeTitle")}
                </h2>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("sapGenerativeDesc")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("sapGenerativeDesc2")}
                </p>
                <UnorderedList
                  arrName={sapGenerativeData}
                  ulClassName="list-disc pl-[36px] lg:pl-[56px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] font-medium mt-5 space-y-4 marker:text-[#0092E0]"
                />

                <h3
                  className="h3-bold mt-5  4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight"
                >
                  {t("resposibleTitle")}
                </h3>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("responsiveDesc")}
                </p>
                <ul className="list-disc text-black  4xl:text-[20px] pl-[36px] lg:pl-[56px] 2xl:text-[17px] xl:text-[17px] text-[16px] font-medium mt-5 space-y-4 marker:text-[#0092E0]">
                  {responsiveData.map((data, ind) => {
                    return (
                      <li key={ind}>
                        <div className="font-bold inline">{data.title}</div>
                        {data.desc}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* how does joule work section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("jouleTitle")}
                </h2>
                <p className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("jouleDesc")}
                </p>

                {jouleData.map((data, ind) => {
                  return (
                    <div className="" key={ind}>
                      <h3 className="h3-bold pb-4 mt-5">
                        {ind + 1}. {data.title}{" "}
                      </h3>
                      <p className="text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                        {data.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* how does ai work */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("howAiWorkTitle")}
                </h2>
                <p className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("howAiWorkDesc")}
                </p>
                <UnorderedList
                  arrName={howAiWorkData}
                  ulClassName="list-disc pl-[36px] lg:pl-[56px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] font-medium mt-5 space-y-4 marker:text-[#0092E0]"
                />
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("howSapJouleTitle")}
                </h2>
                {howSapJouleData.map((data, ind) => {
                  return (
                    <p
                      className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]"
                      key={ind}
                    >
                      {data}
                    </p>
                  );
                })}
              </div>
              {/* sap joule section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("sapJouleTitle")}
                </h2>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("sapJouleDesc")}
                </p>

                {/* sap joule data */}
                {sapJouleData.map((data, ind) => {
                  return (
                    <div key={ind} className="">
                      <h3 className="h3-bold pb-4 mt-5  4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">
                        {data.title}
                      </h3>
                      <p className="text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                        {data.desc}
                      </p>
                    </div>
                  );
                })}
              </div>{" "}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("shiftFromTitle")}
                </h2>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("shiftFromDesc")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                  {t("shiftFromDesc2")}{" "}
                  <Link
                    className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                    href="https://www.rialtes.com/contact-us/?utm_source=blog&utm_medium=internal"
                  >
                    {t("contactUsLink")}
                  </Link>{" "}
                  {t("shiftFromDesc3")}{" "}
                  <Link
                    className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                    href="https://www.rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner/?utm_source=blog&utm_medium=internal"
                  >
                    {t("shiftFromLink2")}
                  </Link>{" "}
                  {t("shiftFromAnd")}{" "}
                  <Link
                    className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                    href="https://www.rialtes.com/services/spend-management/sapbuyplus-ariba-implementation-partner/?utm_source=blog&utm_medium=internal"
                  >
                    {t("shiftFromLink3")}.
                  </Link>{" "}
                </p>
              </div>
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
