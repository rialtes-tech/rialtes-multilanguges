"use client";
import Image from "next/image";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/blogs/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow/",
  },
  headline:
    "Agriculture 4.0: How Do Digital Technologies Transform Farming for a Better Tomorrow?",
  description:
    "Explore how Agriculture 4.0 and platforms like Salesforce are revolutionizing modern farming with AI, automation, and real-time data-driven insights.",
  image:
    "https://www.rialtes.com/images/blog/agriculture-4.0-digital-farming.webp",
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
  datePublished: "2024-09-17",
  articleSection: "Salesforce for Agriculture",
  url: "https://www.rialtes.com/insights/blogs/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow/",
};

export default function Page() {
  const t = useTranslations("agriculture");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {  adoptingData, commonData } = blogsContent.agriculture;
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow";
  const currUrl = useUrl();

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Salesforce for Agriculture: Digital Farming Revolution | Rialtes"
        description="Discover how Salesforce for agriculture powers digital farming, improving efficiency and driving innovation for a sustainable future in Agriculture 4.0."
        canonical="https://www.rialtes.com/insights/blogs/agriculture-4-0-how-do-digital-technologies-transform-farming-for-a-better-tomorrow/"
        image="https://www.rialtes.com/images/blog/agriculture-4.0-digital-farming.webp"
      />

      <Script
        id="schema-agr-4"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="hidden lg:block">
          <Image
            src="/images/blog/agriculture-4.0-digital-farming.webp "
            alt="Drone hovering over agricultural crops, showcasing the future of farming with digital innovations"
            fill
            style={{ objectFit: "cover", objectPosition: "70% 20%" }}
            priority
          />
        </div>
        <div className="block lg:hidden">
          <Image
            src="/images/blog/blog-6.webp "
            alt="Drone hovering over agricultural crops, showcasing the future of farming with digital innovations"
            fill
            style={{ objectFit: "cover", objectPosition: "70% 20%" }}
            priority
          />
        </div>
      </section>
      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">
            <div className="sm:flex justify-between">
              <div>
                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("blogTopic")}
                </span>{" "}
                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {" "}
                  |{" "}
                </span>
                17 Sept 2024
              </div>
              <div>
                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                  <BlogSocialIcons fullUrl={fullUrl} />
                </div>
              </div>
            </div>

            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>

              <div className="xl:mt-[38px] mt-[33px]">
                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("blogMainData")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("blogMainData2")}
                </p>

                <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("whatAgriTitle")}
                  </h2>
                  <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("whatAgriDesc")}
                  </p>
                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("whatAgriDesc2")}
                  </p>
                </div>
                <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px leading-tight">
                    {t("adoptingTitle")}
                  </h2>

                  <div className="mt-[29px] xl:mt-[34px] ">
                    <UnorderedList
                      arrName={adoptingData}
                      ulClassName="marker:text-[#0092E0] pl-[36px] lg:pl-[56px] space-y-4 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium"
                      liClassName=""
                    />
                  </div>
                </div>

                <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]">
                  {commonData.map((data, ind) => {
                    return (
                      <div key={ind}>
                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] mt-[29px] xl:mt-[34px] leading-tight">
                          {data.title}
                        </h2>
                        <p className="mt-[29px] xl:mt-[34px]  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                          {data.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("moveTitle")}
                  </h2>

                  <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("moveDesc")}{" "}
                    <Link
                      className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"
                      href={"https://www.rialtes.com/contact-us/"}
                    >
                      <span>{t("moveLink")}</span>
                    </Link>{" "}
                    {t("moveDesc2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </div>
  );
}
