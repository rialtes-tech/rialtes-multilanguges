"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Ecommerce in Salesforce: Driving Loyalty with Data Cloud | Rialtes",
  description:
    "Salesforce Data Cloud centralizes customer data, enabling businesses to predict behaviors, personalize experiences, and make real-time decisions.",
  image:
    "https://www.rialtes.com/images/blog/data-cloud-ecom-desktop-banner.webp",
  author: {
    "@type": "Organization",
    name: "Rialtes",
  },
  publisher: {
    "@type": "Organization",
    name: "Rialtes",
    logo: {
      "@type": "ImageObject",
      url: "https://www.rialtes.com/images/homepage/logo.svg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/blogs/ecommerce-in-salesforce-data-cloud-smarter-cx-driving-loyalty/",
  },
  datePublished: "2025-09-12",
  mainEntity: {
    "@type": "FAQPage",
    name: "Ecommerce in Salesforce with Data Cloud FAQs",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Salesforce Data Cloud used for in e-commerce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salesforce Data Cloud centralizes customer data, enabling businesses to predict behaviors, personalize experiences, and make real-time decisions. It is particularly powerful for ecommerce in Salesforce, where unified data leads to smarter personalization.",
        },
      },
      {
        "@type": "Question",
        name: "How does predictive analytics improve customer experience in e-commerce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Predictive analytics anticipates needs, recommends relevant products, and provides real-time insights that make interactions feel more personal and proactive.",
        },
      },
      {
        "@type": "Question",
        name: "Can Salesforce Data Cloud help reduce cart abandonment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. By detecting abandoned carts in real time, Salesforce Data Cloud can trigger personalized emails, discounts, or alerts that encourage customers to complete their purchases.",
        },
      },
      {
        "@type": "Question",
        name: "How does Einstein AI fit into Salesforce Data Cloud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Einstein AI powers predictive models, NLP sentiment analysis, and automated decision-making within Salesforce Data Cloud to enhance personalization and efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "Why is real-time data important for predictive e-commerce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Real-time insights enable instant adjustments to pricing, promotions, and recommendations, keeping customers engaged and reducing churn.",
        },
      },
    ],
  },
};

export default function Page() {
  const t = useTranslations("ecommerceDataCloud");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const { salesforceData, driveData, predectiveData, empowerData, faqs } =
    blogsContent.ecommerceDataCloud;
  const fullUrl = "https://www.rialtes.com/insights/blogs/ecommerce-in-salesforce-data-cloud-smarter-cx-driving-loyalty";
  const currUrl = useUrl();

  return (
    <div className="min-h-screen">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        keywords="Partners, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/ecommerce-in-salesforce-data-cloud-smarter-cx-driving-loyalty/`}
      />

      <Script
        id="schema-copilots"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/blog/data-cloud-ecom-desktop-banner.webp"
            alt={t('bannerAlt')}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/data-cloud-ecom-mobile-banner.webp"
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

            <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="12 September 2025" />

            <div className="xl:mt-[60px] mt-[42px]">
              <div className="">
                <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                  {t("blogTitle")}
                </h1>
              </div>
            </div>
            <div className="">
              <div className="xl:mt-[38px] mt-[33px]">
                <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("blogMainData")}
                </p>
                <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("blogMainData2")}
                </p>
                <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("salesforceTitle")}
                  </h2>

                  <div className="mt-[29px] xl:mt-[34px]  grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[26px] sm:w-[70%] md:w-[90%] lg:w-[900px] xl:w-[1090px] 3xl:w-[1140px]">
                    {salesforceData.map((data, ind) => {
                      return (
                        <div
                          key={ind}
                          className="border border-[#707070] p-[28px] md:px-[34px] md:pt-[26px] md:pb-[40px]"
                        >
                          <h3 className="mt-2  4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight text-[#0092E0] font-bold pb-4 border-b border-[#707070]">
                            {data.title}
                          </h3>
                          <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                            {data.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <p className="mt-5  4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {t("salesforceDesc")}
                  </p>
                </div>{" "}
                <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("driveTitle")}
                  </h2>

                  <p className="mt-[29px] xl:mt-[34px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {t("driveDesc")}
                  </p>

                  {driveData.map((data, ind) => {
                    return (
                      <div key={ind}>
                        <h3 className="mt-10 4xl:pr-20 4xl:text-[22px] xl:text-[20px] text-[18px] font-bold leading-tight">
                          {data.title}
                        </h3>
                        <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                          {data.desc}
                        </p>
                        <UnorderedList
                          arrName={data.list}
                          ulClassName="mt-5 list-disc pl-[36px] space-y-2"
                          liClassName="font-medium 4xl:pr-20 4xl:text-[20px] xl:text-[17px] text-[16px]"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]">
                  <h2 className="font-semibold mt-20 text-[#0092E0] 4xl:text-[30px] xl:text-[26px] text-[22px] pr-10 xl:pr-0 leading-tight">
                    {t("predictiveTitle")}
                  </h2>

                  <div className="mt-[29px] xl:mt-[34px] lg:w-[900px] xl:w-[1090px] 3xl:w-[1140px]">
                    {predectiveData.map((data, ind) => {
                      return (
                        <div
                          className={`grid lg:grid-cols-12 grid-cols-1 gap-[22px] lg:gap-x-[46px] mt-10 ${ind != 4 && "border-b  pb-14"
                            } border-[#BABABA]`}
                          key={ind}
                        >
                          <div className="flex gap-8 lg:col-span-4" key={ind}>
                            <p className="mt-3 lg:mt-5 text-[26px] xl:text-[42px] 2xl:text-[48px] 4xl:text-[60px]">
                              {" "}
                              <span className="border-r border-[#BABABA] pr-4">
                                {" "}
                                {ind + 1}
                              </span>{" "}
                            </p>
                            <h3 className="mt-3 lg:mt-5 4xl:text-[22px] xl:text-[20px] text-[18px] font-bold 4xl:w-[74%] leading-tight">
                              {data.title}
                            </h3>
                          </div>
                          <div className="lg:col-span-8">
                            <p className="mt-3 lg:mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                              {data.desc}
                            </p>
                            {data.list && (
                              <ul className="list-disc marker:text-[#006FBE] pl-[32px] space-y-2">
                                {data.list.map((item, ind) => (
                                  <li className="mt-5" key={ind}>
                                    <p className="inline font-bold text-[16px] xl:text-[18px] 4xl:text-[20px]">
                                      {item.title} :{" "}
                                    </p>
                                    <span className=" font-medium text-[16px] xl:text-[18px] 4xl:text-[20px]">
                                      {item.desc}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            )}

                            <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                              {data.desc2}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>{" "}
                <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("empowerTitle")}
                  </h2>
                  <div className="mt-[29px] xl:mt-[34px]">
                    {empowerData.map((data, ind) => {
                      return (
                        <p
                          key={ind}
                          className="mt-5 4xl:pr-20 4xl:text-[20px] xl:text-[17px] text-[16px]"
                          dangerouslySetInnerHTML={{ __html: data }}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="xl:mt-[80px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {" "}
                    {t("faqTitle")}
                  </h2>
                  <div className="mt-[29px] xl:mt-[30px]">
                    <FAQAccordion faqData={faqs} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </div>
  );
}
