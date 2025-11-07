"use client";
import Image from "next/image";
import Link from "next/link";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce/",
  },
  headline:
    "The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce",
  description:
    "Discover how the Atlas Reasoning Engine powers Salesforce Agentforce, enabling AI agents to make smarter decisions and improve customer engagement.",
  image:
    "https://www.rialtes.com/images/blog/digital-brain-ai-circuit-technology-illustration.webp",
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
  datePublished: "2024-10-21",
  articleSection: "Salesforce AI",
  url: "https://www.rialtes.com/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce/",
};

export default function Page() {
  const t = useTranslations("brainBehind");
  const locale = useLocale();
  const currUrl = useUrl();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const { commonData, atlasData } = blogsContent.brainBehind;
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce/`}
        image="https://rialtes.netlify.app/images/blog/atlas-reasoning-engine-agentforce.jpg"
      />

      <Script
        id="schema-brain"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="hidden  xl:block">
          <Image
            src="/images/blog/digital-brain-ai-circuit-technology-illustration.jpg"
            alt={t("bannerAlt")}
            fill
            priority
          />
        </div>
        <div className="block xl:hidden">
          <Image
            src="/images/blog/digital-brain-ai-circuit-technology-illustration-mobile.webp"
            alt={t("bannerAlt")}
            priority
            height={0}
            width={0}
            className="w-full h-[390px] object-cover"
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
              date="21 Oct 2024"
            />
            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>
              <div>
                <div className="xl:mt-[38px] mt-[33px]">
                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("blogMainData")}{" "}
                    <Link
                      className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"
                      href="https://www.rialtes.com/insights/blogs/salesforce-agentforce-top-features-youre-probably-not-using-but-should/"
                    >
                      <span>{t("blogMainDataLink")}</span>
                    </Link>{" "}
                    {t("blogMainData2")}
                  </p>
                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("blogMainData3")}
                  </p>
                </div>

                {commonData.map((data, ind) => {
                  return (
                    <div key={ind} className="md:mt-[50px] mt-[40px]">
                      <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      {data.desc.map((elem, id) => {
                        return (
                          <p
                            className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                            key={id}
                          >
                            {elem}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
                <div className="md:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("atlasTitle")}
                  </h2>
                  <div className="mt-[29px] xl:mt-[34px]">
                    {atlasData.map((data, ind) => {
                      return (
                        <div key={ind}>
                          <h3 className="h3-bold mt-5 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">
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
                <div className="md:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {" "}
                    {t("gameTitle")}
                  </h2>
                  <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("gameDesc")}
                  </p>
                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("gameDesc2")}
                  </p>
                </div>
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
