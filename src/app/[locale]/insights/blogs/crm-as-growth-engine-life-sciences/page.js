"use client";
import Image from "next/image";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import Link from "next/link";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
export default function Page() {
        const t = useTranslations("crmBlog");
          const locale = useLocale();
          const currUrl = useUrl();
          const content = changeLocalization(locale, {
            en: enContent,
            es: esContent,
            fr: frContent,
          });
          const {blogMainData,lifeAiData,toolsData ,industryData,salesData,businessData,beforeAfterData,impactData,faqData,schemaData}= content.crmBlog; 
  const fullUrl = "https://www.rialtes.com/insights/blogs/crm-as-growth-engine-life-sciences";
  return (
    <section className="min-h-screen">
      <Seo
        title="Why CRM Is Now a Growth Driver in Life Sciences | Rialtes"
        description="Modern life sciences CRM goes beyond sales to drive growth through patient experience, intelligent insights, and compliance-ready workflows."
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/crm-as-growth-engine-life-sciences/`} 
      />
      <Script
        id="schema-copilots"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="lg:block hidden">
          <Image
            src="/images/blog/medical-diagnostic-imaging-analysis-multiple-screens.webp"
            className="w-full h-auto object-cover"
            alt={t('bannerAlt')}
            fill
            priority
          />
        </div>
        <div className="lg:hidden block">
          <Image
            src="/images/blog/medical-diagnostic-imaging-analysis-multiple-screens-mobile-banner.webp"
            alt={t('bannerAlt')}
            priority
            height={0}
            width={0}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12 grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11 col-span-12">
             {/* date and icons */}
               <BlogSocialIcons fullUrl={fullUrl} topic={t('blogCategory')} date="07 January 2026" />
    
            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[58px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t('headerText')}
              </h1>
              <div className="xl:mt-[38px] mt-[33px]">
                {blogMainData.map((data, ind) => {
                  return (
                    <p
                      key={ind}
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  );
                })}
              </div>
              {/* The Limits of Traditional Life Sciences CRM */}
              <div className="md:mt-[50px] mt-[40px]">
                {toolsData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                      <div className="lg:mt-[50px] mt-[25px]">
                        <p className="font-semibold  mb-10 4xl:text-[26px] 2xl:text-[21px] text-[20px]">
                          {t('whyText')}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                          {data.crmData.map((item, index) => (
                            <div
                              key={index}
                              className="flex flex-col md:items-start md:text-start items-center text-center"
                            >
                              <img
                                src={item.icon}
                                alt={item.alt}
                                className="4xl:w-[120px] 4xl:h-[120px]  xl:w-[100px] xl:h-[100px] w-[90px] h-[90px] mb-6 "
                              />
                              <p className="font-semibold 4xl:text-[26px] xl:text-[19px] text-[18px]">
                                {item.title}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* The Industry Has Shifted, and CRM Must Evolve With It*/}
              <div className="md:mt-[50px] mt-[40px]">
                {industryData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                      <p className="mt-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc4}
                      </p>
                      <p className="mt-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc5}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Introducing LifeAI+: A Connected, Intelligent Approach to Life Sciences CRM*/}
              <div className="md:mt-[50px] mt-[40px]">
                {lifeAiData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <h3 className="mt-5 4xl:text-[26px] 2xl:text-[21px] text-[20px] font-bold">
                        {data.desc2}
                      </h3>
                      <ul className="mt-5 list-disc pl-[36px] lg:pl-[56px] space-y-2">
                        {data.list.map((item, index) => (
                          <li key={index}>
                            <h4 className="4xl:text-[20px] font-medium 2xl:text-[18px] xl:text-[18px] md:text-[16px] text-[16px] ">
                              {item}
                            </h4>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-10 w-full xl:w-[70%] bg-[#E2F3FF] py-[36px] md:py-[36px]">
                        <div className=" mx-auto px-[36px]">
                          <div className="flex flex-col gap-6">
                            <p className="font-semibold 4xl:text-[31px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] ">
                             {t('pillerTitle')}
                            </p>
                            <p className="font-semibold 4xl:text-[26px] xl:text-[19px] text-[18px]">
                              {t('pillerOne')}<span className="mx-2">|</span>
                              {t('pillertwo')} <span className="mx-2">|</span>
                              {t('pillerThree')}{" "}
                              <span className="mx-2">|</span>
                              {t('pillerFour')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Going Beyond Sales: What Modern Life Sciences CRM Must Deliver*/}
              <div className="md:mt-[50px] mt-[40px]">
                {salesData.map((data, ind) => (
                  <div key={ind} className="space-y-10">
                    <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">
                      {data.title}
                    </h2>
                    <p
                      className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data.desc }}
                    />

                    {data.points.map((point, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="font-semibold 4xl:text-[24px] 2xl:text-[21px] text-[20px] xl:mb-7 mb-5">
                          {index + 1}. {point.heading}
                        </h3>

                        <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                          {point.intro}
                        </p>

                        {point.enablesText && (
                          <p className=" 4xl:text-[20px] 2xl:text-[17px] text-[16px] mt-5">
                            {point.enablesText}
                          </p>
                        )}

                        {point.list && (
                          <UnorderedList
                            arrName={point.list}
                            ulClassName="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                          />
                        )}
                        {point.outcome && (
                          <p className=" 4xl:text-[20px] 2xl:text-[17px] text-[16px] mt-5">
                            {point.outcome}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              {/* Business Outcomes That Leadership Cares About*/}
              <div className="md:mt-[50px] mt-[40px]">
                {businessData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                    </div>
                  );
                })}
                <div className="w-full xl:w-[80%] bg-[#F0F0F0] p-6 md:p-10 md:mt-[50px] mt-[40px]">
                  {/* Title */}
                  <p className="font-semibold text-gray-900 mb-6 4xl:text-[26px] 2xl:text-[21px] text-[20px]">
                    {t('chart')}
                  </p>

                  {/* Rows */}
                  <div className="divide-y divide-gray-400">
                    {beforeAfterData.map((item, index) => (
                      <div
                        key={index}
                        className="
          grid
          grid-cols-1
          md:grid-cols-[210px_48px_1fr]
          items-start md:items-center
          py-4 md:py-5
          gap-3 md:gap-4
        "
                      >
                        <p
                          className="text-gray-900
          4xl:text-[20px] xl:text-[17px] md:text-[16px] text-[16px]"
                        >
                          {item.before}
                        </p>

                        <div className="flex justify-start md:justify-center">
                          <AiOutlineCaretDown className="text-[#0A6BB8] text-[28px] md:hidden" />
                          <AiFillCaretRight className="text-[#0A6BB8] text-[28px] hidden md:block" />
                        </div>

                        <p
                          className="text-gray-900
          4xl:text-[20px] xl:text-[17px] md:text-[16px] text-[16px]"
                        >
                          {item.after}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Where LifeAI+ Makes the Biggest Impact*/}
              <div className="md:mt-[50px] mt-[40px]">
                {impactData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq section */}
      <section className="xl:mt-[80px] mt-[40px] custom-container">
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
          {t('faq')}
        </h2>
        <div className="mt-[29px] xl:mt-[30px]">
          <FAQAccordion faqData={faqData} />
        </div>
      </section>

      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </section>
  );
}
