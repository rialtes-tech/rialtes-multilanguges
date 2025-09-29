"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
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
  headline: "How Agentforce AI Transforms ERP Systems | Rialtes",
  description:
    "Agentforce is Salesforce’s AI-powered platform that integrates with ERP and SCM systems to unify data, automate processes, and provide predictive insights.",
  image: "https://www.rialtes.com/images/blog/agentforce-ai-erp.webp",
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
      "https://www.rialtes.com/insights/blogs/how-agentforce-ai-transforms-erp-systems/",
  },
  datePublished: "2025-09-15",
  mainEntity: {
    "@type": "FAQPage",
    name: "Agentforce AI ERP Systems FAQs",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Agentforce, and how does it enhance ERP systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Agentforce is Salesforce’s AI-powered platform that integrates with ERP and SCM systems to unify data, automate processes, and provide predictive insights. It turns ERP into an intelligent ecosystem, enabling faster decisions and greater operational efficiency.",
        },
      },
      {
        "@type": "Question",
        name: "How does Agentforce integrate with existing ERP platforms like SAP, Oracle, or Microsoft Dynamics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Agentforce connects through Salesforce’s Data Cloud and MuleSoft’s pre-built connectors. This allows real-time synchronization of ERP and SCM data—such as orders, finances, and inventory—without heavy custom integration.",
        },
      },
      {
        "@type": "Question",
        name: "What types of tasks can Agentforce agents automate within ERP systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They handle routine processes like inventory monitoring, order processing, financial reporting, HR workflows, and customer query responses. This reduces manual effort and errors while freeing up employees for more strategic work.",
        },
      },
      {
        "@type": "Question",
        name: "Can Agentforce provide predictive insights for supply chain and operations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. By analyzing ERP and SCM data alongside external factors like weather or market demand, Agentforce predicts supply chain disruptions, demand fluctuations, and inventory needs. This proactive approach helps organizations stay ahead of risks.",
        },
      },
      {
        "@type": "Question",
        name: "How does Agentforce improve collaboration across teams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because it’s part of Salesforce’s ecosystem, Agentforce connects ERP data with tools like Slack and Salesforce Customer 360. This gives teams shared visibility into real-time data and enables faster, more coordinated decision-making.",
        },
      },
      {
        "@type": "Question",
        name: "What industries can benefit most from integrating Agentforce with ERP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manufacturing, logistics, agriculture, healthcare, retail, and financial services all benefit. For example, it helps manufacturers optimize production, retailers reduce stockouts, and logistics companies manage seasonal shipment spikes.",
        },
      },
      {
        "@type": "Question",
        name: "Is Agentforce scalable for growing businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Agentforce is designed to handle increased ERP and SCM workloads without needing proportional increases in staff. AI agents dynamically manage higher data volumes, ensuring the system grows with your business.",
        },
      },
      {
        "@type": "Question",
        name: "Does Agentforce replace human decision-making?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Agentforce is built to complement human expertise, not replace it. By automating repetitive tasks and surfacing reliable insights, it frees people to focus on complex, strategic decisions.",
        },
      },
      {
        "@type": "Question",
        name: "How secure is Agentforce when working with ERP data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Agentforce leverages Salesforce’s enterprise-grade security, compliance, and governance standards. Data is handled securely, ensuring organizations can adopt automation without compromising trust.",
        },
      },
      {
        "@type": "Question",
        name: "How can my business start integrating Agentforce with ERP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rialtes specializes in customizing Agentforce agents for ERP systems. We align the agents with your business goals, optimize workflows, and ensure reliable automation.",
        },
      },
    ],
  },
};

export default function Page() {
  const t = useTranslations("agentforceHitech");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
    agentfoceIntegrates,
    benefitsData,
    applicationData,
    buildingData,
    faqs,
  } = blogsContent.agentforceHitech;
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/ecommerce-in-salesforce-data-cloud-smarter-cx-driving-loyalty";
  const currUrl = useUrl();

  return (
    <div className="min-h-screen">
      <Seo
        title="How Agentforce AI Transforms ERP with Automation | Rialtes"
        description="By analyzing ERP and SCM data, Agentforce offers predictive insights that enhance decision-making and boost productivity across industries. Know more!"
        keywords="Partners, website, welcome"
        canonical={
          "https://www.rialtes.com/insights/blogs/how-agentforce-ai-transforms-erp-systems/"
        }
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
            src="/images/blog/agentforce-ai-erp.webp"
            alt="banner image"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/agentforce-ai-erp-mobile.webp"
            alt="banner image"
            priority
            height={0}
            width={0}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px] ">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11 max-[365px]:pr-[38px]">
            <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="15 September 2025" />

            <div className="xl:mt-[60px] mt-[42px]">
              <div className="">
                <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                  {t("blogTitle")}
                </h1>
              </div>
            </div>
            <div className="xl:mt-[38px] mt-[33px]">
              <div className="">
                <p className="mt-5 4xl:pr-20 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t("blogMainData")}
                </p>
                <div className="md:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("agentforceTitle")}
                  </h2>

                  {agentfoceIntegrates.map((data, ind) => {
                    return (
                      <p
                        key={ind}
                        className="mt-5 4xl:pr-20 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data }}
                      />
                    );
                  })}

                  <h3 className="mt-8   4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight font-bold">
                    {t("howDoesTitle")}
                  </h3>
                  <p className="mt-5  4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {t("howDoesDesc")}
                  </p>
                  <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {t("howDoesDesc2")}
                  </p>
                </div>
                <div className="md:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight ">
                    {t("benefitsTitle")}
                  </h2>

                  {benefitsData.map((data, ind) => {
                    return (
                      <div
                        className={`md:flex mt-24 md:mt-10 py-[34px] px-[26px] border border-[#707070] relative md:ml-[90px] sm:w-[80%] md:w-auto lg:w-[850px] 3xl:w-[1100px] ${ind == 5 && "md:py-[54px]"
                          }`}
                        key={ind}
                      >
                        <h3
                          className={`md:absolute max-md:mt-[-80px] max-md:w-fit 4xl:w-[330px] xl:w-[320px] md:w-[280px] md:left-[-80px] bg-[#006FBE] text-white font-semibold 4xl:text-[24px]  2xl:text-[21px] text-[20px] leading-tight px-[40px] py-[22px]`}
                        >
                          {data.title}
                        </h3>
                        <div className="4xl:text-[20px] xl:text-[17px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[220px] xl:ml-[260px] 4xl:ml-[280px]">
                          {data.desc}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="md:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("applicationTitle")}
                  </h2>
                  <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {t("applicationDesc")}
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 max-md:gap-y-12 gap-[26px] mt-[37px] sm:w-[70%] md:w-full xl:w-[1090px] 3xl:w-[1250px]">
                    {applicationData.map((data, ind) => {
                      return (
                        <div
                          key={ind}
                          className="md:pr-[34px] md:pt-[26px] md:pb-[40px]"
                        >
                          <h3 className="mt-2 2xl:text-[22px] 4xl:text-[24px] xl:text-[20px] text-[18px] font-bold pb-4 border-b border-[#006FBE]">
                            {data.title}
                          </h3>
                          <p
                            key={ind}
                            className="mt-5 4xl:pr-20 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] 4xl:w-[94%]"
                            dangerouslySetInnerHTML={{ __html: data.desc }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>{" "}
                <div className="md:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("buildingTitle")}
                  </h2>

                  {buildingData.map((data, ind) => {
                    return (
                      <p
                        key={ind}
                        className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data }}
                      />
                    );
                  })}
                </div>
                <div className="xl:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">
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
