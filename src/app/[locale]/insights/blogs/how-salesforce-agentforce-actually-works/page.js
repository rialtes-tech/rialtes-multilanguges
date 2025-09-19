"use client";
import Image from "next/image";
import Link from "next/link";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";

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
    "https://www.rialtes.com/images/blog/how-agentforce-works-blog-banner.webp",
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
  const { blogs, salesforceData, useCasesData } =
    blogsContent.howSalesforceAgentforceWorks;
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/how-salesforce-agentforce-actually-works";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="How Does Salesforce Agentforce Work? | Rialtes"
        description="Discover how Salesforce Agentforce works to enhance customer engagement and streamline operations. Contact Rialtes today to embark on your AI journey!"
        canonical="https://www.rialtes.com/insights/blogs/how-salesforce-agentforce-actually-works/"
      />

      <Script
        id="schema-how-salesforce"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <Image
          src="/images/blog/how-agentforce-works-blog-banner.webp "
          alt="How Salesforce Agentforce Actually Works"
          fill
          style={{ objectFit: "cover", objectPosition: "70% 20%" }}
          priority
        />
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">
            <div className="sm:flex justify-between">
              <div>
                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("blogTopic")}
                </span>
                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {" "}
                  |{" "}
                </span>
                30 Sept 2024
              </div>
              <div>
                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                  <BlogSocialIcons fullUrl={fullUrl} />
                </div>
              </div>
            </div>
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px]">
                {t("blogTitle")}
              </h1>
            </div>
            <div className="xl:mt-[38px] mt-[33px]">
              <div className="">
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("blogMainData")}
                </p>

                <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]">
                  {/* quick section */}
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">
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
                <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">
                    {t("howTitle")}
                  </h2>
                  <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("howDesc")}
                  </p>
                </div>
                <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]">
                  {/* salesforce agentforce section */}
                  <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-2">
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
                        <h3 className="font-bold mt-[29px] xl:mt-[34px]  4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">
                          {data.title}
                        </h3>
                        {data.desc.map((elem, id) => {
                          return (
                            <p
                              className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                              key={id}
                            >
                              {elem}
                            </p>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
  <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">
                  {t("useCasesTitle")}
                </h2>

                <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("useCasesDesc")}
                </p>

                <ul className="pl-[36px] lg:pl-[56px] space-y-4 mt-5  marker:text-[#0092E0]">
                  {useCasesData.map((data, ind) => {
                    return (
                      <li
                        className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium"
                        key={ind}
                      >
                        <h3
                          className="font-bold inline  4xl:text-[22px] text-[18px] leading-tight
"
                        >
                          {data.title}
                        </h3>
                        {data.desc}
                      </li>
                    );
                  })}
                </ul>
                </div>
                <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]">
                  {" "}
                  <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-2">
                    {t("gettingTitle")}
                  </h2>
                  <p>
                    {t("gettingDesc")}{" "}
                    <Link
                      className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                      href="https://www.salesforce.com/dreamforce/"
                    >
                      {t("gettingLink")}
                    </Link>
                    . {t("gettingDesc2")}{" "}
                    <Link
                      className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                      href="https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/"
                    >
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
      <div className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <BlogsCarousel slides={blogs} />
      </div>
    </div>
  );
}
