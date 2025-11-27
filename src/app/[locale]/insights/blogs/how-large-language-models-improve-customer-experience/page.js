"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import Link from "next/link";
export default function Page() {
  const t = useTranslations("aiThatListens");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
    blogMainData,
    LLMarchData,
    howLLMsData,
    voiceSearchExample,
    askingData,
    voiceSearchData,
    fromChatbotsData,
    readyData,
    schemaData
  } = blogsContent.aiThatListens;

  const fullUrl = "https://www.rialtes.com/insights/blogs/how-large-language-models-improve-customer-experience";
  const currUrl = useUrl();

  return (
    <div className="min-h-screen">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        keywords="Partners, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/how-large-language-models-improve-customer-experience/`}
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
            src="/images/blog/abstract-digital-waves-and-data-flow.webp"
            alt={t("aithatlistensAlt")}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/abstract-digital-waves-and-data-flow-mobile.webp"
            alt={t("aithatlistensAlt")}
            priority
            height={0}
            width={0}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px] ">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11 ">

            <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date=" 11 September 2025" />


            <div className="xl:mt-[60px] mt-[42px]">
              <div className="">
                <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                  {t("blogTitle")}
                </h1>
              </div>
            </div>
            <div className="">
              <div className="xl:mt-[38px] mt-[33px]">
                {blogMainData.map((data, ind) => {
                  return (
                    <p
                      key={ind}
                      className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  );
                })}{" "}
                <div className="md:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("llmTitle")}
                  </h2>

                  <p className="mt-[29px] xl:mt-[30px] 4xl:pr-20  4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {t("llmDesc")}{" "}
                    <Link
                      href={
                        "https://www.rialtes.com/insights/blogs/reimagine-enterprise-using-agentic-ai-systems"
                      }
                    >
                      <span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">
                        {t("llmStrongDesc")}</span></Link>{" "}{t("llmDesc2")}{" "}
                  </p>
                  <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {t("llmArchTitle")}
                  </p>
                  <div className="grid sm:w-[80%] md:w-full md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[26px] mt-8 lg:w-[900px] 3xl:w-[1060px]">
                    {LLMarchData.map((data, ind) => {
                      return (
                        <div
                          className="border border-[#707070] p-[26px] font-medium  2xl:text-[18px] 4xl:text-[22px]"
                          key={ind}
                        >
                          <h4 className="inline">{data.title}</h4>
                          {data.desc}
                        </div>
                      );
                    })}
                  </div>

                  <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {t("llmArchDesc")}
                  </p>
                </div>
                <div className="md:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("llmChangingTitle")}
                  </h2>
                  <div className="mt-[29px] xl:mt-[30px]">
                    {howLLMsData.map((data, ind) => {
                      return (
                        <div
                          className={`md:flex mt-24 md:mt-10 py-[34px] px-[26px]  border border-[#707070] relative md:ml-[90px] sm:w-[80%] md:w-auto lg:w-[850px] 3xl:w-[1100px] ${ind == 5 && "md:py-[54px]"
                            }`}
                          key={ind}
                        >
                          <div
                            className={`md:absolute max-md:mt-[-80px] md:top-[50%] md:translate-y-[-50%] 4xl:w-[360px] xl:w-[320px] md:w-[280px]  md:left-[-80px] bg-[#006FBE] text-white font-semibold 4xl:text-[24px] xl:text-[20px] text-[17px] px-[40px] py-[22px]`}
                          >
                            {data.title}
                          </div>
                          <div className="4xl:text-[20px] xl:text-[17px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[220px] xl:ml-[260px] 4xl:ml-[300px]">
                            {data.desc}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>{" "}
                <div className="md:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("voiceSearchTitle")}
                  </h2>
                  <div className="mt-[29px] xl:mt-[30px]">
                    {voiceSearchData.map((data, ind) => {
                      return (
                        <p
                          className="mt-5  4xl:text-[20px] xl:text-[17px] text-[16px]"
                          key={ind}
                        >
                          {data}
                        </p>
                      );
                    })}
                  </div>

                  <UnorderedList
                    arrName={voiceSearchExample}
                    ulClassName="list-disc pl-[36px] lg:pl-[56px] marker:text-xl text-black  mt-5 space-y-1 4xl:text-[20px] xl:text-[17px] text-[16px] font-medium "
                    liClassName=""
                  />

                  <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {" "}
                    {t("voiceSearchDesc")}
                  </p>
                  <p className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {t("voiceSearchDesc2")}
                  </p>
                </div>{" "}
                <div className="md:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("fromChatbotTitle")}
                  </h2>
                  <div className="mt-[29px] xl:mt-[30px]">
                    {fromChatbotsData.map((data, ind) => {
                      return (
                        <p
                          className="mt-3 4xl:text-[20px] xl:text-[17px] text-[16px]"
                          key={ind}
                        >
                          {data}
                        </p>
                      );
                    })}
                  </div>
                  <UnorderedList
                    arrName={askingData}
                    ulClassName="list-disc pl-[36px] lg:pl-[56px] marker:text-black marker:text-xl text-black mt-4 space-y-1 4xl:text-[20px] xl:text-[17px] text-[16px] font-medium"
                    liClassName=""
                  />
                  <p className="mt-5 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {t("fromChatbotDesc")}{" "}
                    <Link
                      href={
                        "https://www.rialtes.com/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce/"
                      }
                    >
                      <span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">

                        {t("fromChatbotStrongDesc")}
                      </span></Link>{" "}
                    {t("fromChatbotDesc2")}
                  </p>
                </div>{" "}
                <div className="md:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("readyTitle")}
                  </h2>
                  <div className="mt-[29px] xl:mt-[30px]">
                    {readyData.map((data, ind) => {
                      return (
                        <p
                          key={ind}
                          className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px]"
                          dangerouslySetInnerHTML={{ __html: data }}
                        />
                      );
                    })}
                  </div>
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
    </div>
  );
}
