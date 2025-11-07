"use client";
import Image from "next/image";
import Link from "next/link";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/blogs/how-salesforce-agentforce-actually-works/",
  },
  headline: "How Salesforce Agentforce Actually Works",
  description:
    "Explore how Salesforce Agentforce automates customer engagement using AI agents, enhancing decision-making and operational efficiency.",
  image:
    "https://www.rialtes.com/images/blog/futuristic-robot-ai-digital-interface-technology.webp",
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
  datePublished: "2024-09-30",
  articleSection: "Salesforce",
  url: "https://www.rialtes.com/insights/blogs/how-salesforce-agentforce-actually-works/",
};
export default function Page() {
  const t = useTranslations("howSalesforceAgentforceWorks");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const { salesforceData, useCasesData } =
    blogsContent.howSalesforceAgentforceWorks;
  const fullUrl = "https://www.rialtes.com/insights/blogs/how-salesforce-agentforce-actually-works";
  const currUrl = useUrl();

  return (
    <section className="min-h-screen">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/how-salesforce-agentforce-actually-works/`}
      />

      <Script
        id="schema-how-salesforce"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative group overflow-hidden 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[400px]">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/futuristic-robot-ai-digital-interface-technology.webp"
            alt={t("bannerAlt")}
            fill
            style={{ objectFit: "cover" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110 object-[50%_30%]"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden h-full">
          <Image
            src="/images/blog/futuristic-robot-ai-digital-interface-technology-mobile.webp"
            alt={t("bannerAlt")}
            priority
            height={0}
            width={0}
            className="w-full h-full object-cover object-[50%_30%]"
          />
        </div>
      </section>


      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

            <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="30 Sept 2024" />

            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("blogTitle")}
              </h1>
              <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ">
                {t("blogMainData")}
              </p>

              {/* quick section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("quickTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("quickDesc")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("quickDesc2")}
                </p>
              </div>

              {/* how does ai agent section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("howTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("howDesc")}
                </p>
              </div>

              {/* salesforce agentforce section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("salesforceTitle")}
                </h2>

                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("salesforceDesc")}{" "}
                  <Link href="mailto:sales@rialtes.com" className="underline">
                    {" "}
                    <span>mrjohn@example.com</span>
                  </Link>
                  ”
                </p>

                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("salesforceDesc2")}
                </p>

                {salesforceData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h3 className="mt-[29px] xl:mt-[34px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold leading-tight">
                        {data.title}
                      </h3>
                      {data.desc.map((elem, id) => {
                        return (
                          <p
                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                            key={id}>
                            {elem}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}

                {/* use cases section */}
                <div className="md:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("useCasesTitle")}
                  </h2>

                  <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("useCasesDesc")}
                  </p>

                  <ul className="list-disc font-medium marker:text-xl 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 pl-[34px] space-y-4">
                    {useCasesData.map((data, ind) => {
                      return (
                        <li
                          className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                          key={ind}>
                          <h3 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                            {data.title}
                          </h3>
                          {data.desc}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* getting section */}
                <div className="md:mt-[50px] mt-[40px]">
                  {" "}
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("gettingTitle")}
                  </h2>
                  <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("gettingDesc")}{" "}
                    <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.salesforce.com/dreamforce/">
                      {t("gettingLink")}
                    </Link>
                    . {t("gettingDesc2")}{" "}
                    <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                      href="https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/">
                      {t("gettingLink2")}
                    </Link>
                    , {t("gettingDesc3")}{" "}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </section>
  );
}
