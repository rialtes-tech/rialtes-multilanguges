"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/[locale]/components/useUrl";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export default function Page() {
     const fullUrl = "https://www.rialtes.com/insights/blogs/kinaxis-rapidresponse-demandplus-real-time-supply-chain"
        const currUrl = useUrl()
        const t = useTranslations("kinaxisBlog");
        const locale = useLocale();
        const blogsContent = changeLocalization(locale, {
            en: enContent,
            es: esContent,
            fr: frContent,
        });
    
        const { schemaData,blogMainData ,whyData ,realData, planData,visibilityData ,DemandData ,DemandplusData,DeliversData,benefitsData ,businessData,faqData} = blogsContent.kinaxisBlog


  return (
    <section className="min-h-screen">
      <Seo
        title="DemandPlus with Kinaxis RapidResponse: Resilient Supply Chains"
        description="DemandPlus is our end-to-end service suite built around Kinaxis RapidResponse to help organizations achieve connected, intelligent, and resilient supply chains."
         canonical={`https://www.rialtes.com/${locale}/insights/blogs/kinaxis-rapidresponse-demandplus-real-time-supply-chain/`}
      />
      <Script
        id="schema-kinaxis"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="md:block hidden">
          <Image
            src="/images/blog/automated-warehouse-conveyor-system-logistics.webp"
            className="w-full h-auto object-cover"
            alt={t('bannerAlt')}
            fill
            priority
          />
        </div>
        <div className="md:hidden block">
          <Image
            src="/images/blog/automated-warehouse-conveyor-system-logistics-mobile-banner.webp"
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
             <BlogSocialIcons fullUrl={fullUrl} topic={t('blogCategory')} date="13 January 2026" />

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[58px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t('bannerTitle')}
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
              {/* Why Traditional Supply Chain Planning Can’t Keep Up */}
              <div className="md:mt-[50px] mt-[40px]">
                {whyData.map((data, id) => {
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
                      <h3 className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </h3>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />

                      <div className="xl:w-[70%]  p-4 xl:mt-[40px] mt-[30px]">
                        <p className="font-semibold mb-6 4xl:text-[24px] 2xl:text-[21px] text-[20px]">
                          {t('bannerTitle')}
                        </p>
                        <div className="grid grid-cols-2 border  overflow-hidden gap-1">
                          <div className="bg-[#C9C9C9] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                           {t('old')}
                          </div>
                          <div className="bg-[#E2E2E2] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                            {t('realTitle')}
                          </div>

                          <div className="bg-[#B5E0DA] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                           {t('batchTitle')}
                          </div>
                          <div className="bg-[#C6F5EE] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                            {t('continue')}
                          </div>

                          <div className="bg-[#9BD4E7] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                            {t('data')}
                          </div>
                          <div className="bg-[#AEE8FD] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                           {t('eco')}
                          </div>

                          <div className="bg-[#9FA3E2] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                           {t('reactive')}
                          </div>
                          <div className="bg-[#BFC3FE] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                           {t('pro')}
                          </div>
                        </div>
                      </div>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                      />
                    </div>
                  );
                })}
              </div>
              {/* What Real-Time, Resilient Planning Really Means*/}
              <div className="md:mt-[50px] mt-[40px]">
                {realData.map((data, id) => {
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
                      <ol className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-decimal pl-[36px] lg:pl-[56px] font-medium space-y-2">
                        {data.list.map((item, index) => (
                          <li key={index}>
                            <span className="font-bold">{item.title}</span>{" "}
                            {item.desc}
                          </li>
                        ))}
                      </ol>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* The Power of Concurrent Planning with Kinaxis RapidResponse*/}
              <div className="md:mt-[50px] mt-[40px]">
                {planData.map((data, id) => {
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

                      <ul className="mt-5 list-disc pl-[36px] lg:pl-[56px] space-y-2">
                        {data.list.map((item, index) => (
                          <li key={index}>
                            <p className="4xl:text-[20px] font-medium 2xl:text-[18px] xl:text-[18px] md:text-[16px] text-[16px] ">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                       <p className="md:mt-8 mt-5 4xl:text-[24px] 2xl:text-[19px] text-[18px] font-bold">
                        {data.desc4}
                      </p>
                      <div className="mt-8 w-full">
                        {/* Desktop Layout */}
                        <div className="hidden lg:flex items-center w-full">
                          {data.steps.map((step, index) => (
                            <div
                              key={index}
                              className="flex items-center relative"
                            >
                              <div
                              style={{ backgroundColor: step.bg }}
                                className="px-6 py-3 font-bold 4xl:text-[22px] 2xl:text-[19px] lg:text-[16px]  min-w-[160px] text-start"
                              >
                                {step.text}
                              </div>

                              {index !== data.steps.length - 1 && (
                                <div className="absolute -right-[16px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#848484] flex items-center justify-center shadow z-20">
                                  <FaChevronRight className="text-white font-bold text-[16px]" />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        {/* Mobile Layout */}
                        <div className="lg:hidden flex flex-col items-center">
                          {data.steps.map((step, index) => (
                            <div
                              key={index}
                              className="relative w-full flex flex-col items-center"
                            >
                              <div style={{ backgroundColor: step.bg }}
                                className="px-4 py-6 font-bold text-[16px] w-[100%] md:w-[50%] text-center"
                              >
                                {step.text}
                              </div>
                              {index !== data.steps.length - 1 && (
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
                                  <div className="w-8 h-8 rounded-full bg-[#848484] flex items-center justify-center shadow">
                                    <FaChevronDown className="text-white text-[14px]" />
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="md:mt-8 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Why Resilience Starts with Visibility*/}
              <div className="md:mt-[50px] mt-[40px]">
                {visibilityData.map((data, id) => {
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
                      <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                      <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                      <UnorderedList
                        arrName={data.listTwo}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc4}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Introducing Rialtes Demand+: Real-Time Planning in Action*/}
              <div className="md:mt-[50px] mt-[40px]">
                {DemandData.map((data, id) => {
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
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* What Demand+ Delivers */}
              <div className="md:mt-[50px] mt-[40px]">
                {DemandplusData.map((data, id) => (
                  <div key={id}>
                    <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                      {data.title}
                    </h2>
                    <p
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data.desc }}
                    />
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[50px] mt-[40px] gap-[20px] sm:w-[80%] md:w-full 4xl:w-[1100px]">
                      {data.list.map((item, id) => {
                        return (
                          <div
                            className="4xl:p-[36px] p-[32px] border border-[#707070]"
                            key={id}
                          >
                            <h3 className="text-[#006FBE] 4xl:text-[22px] xl:text-[19px] text-[18px] font-bold pb-4">
                              {item.title}
                            </h3>
                            <p
                              className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                              dangerouslySetInnerHTML={{ __html: item.desc }}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="md:mt-[40px] mt-[30px]">
                      <div className="bg-[#f2f2f2] p-6 md:p-10 rounded-md ">
                        <p className="font-bold text-lg md:text-xl mb-6 md:mb-10 4xl:text-[22px] xl:text-[19px] text-[18px]">
                          {t('demandTitle')}
                        </p>

                        {/* Desktop */}
                        <div className="hidden md:flex items-center justify-between relative">
                          <div className="absolute top-5 left-0 right-[80px] h-[2px] bg-gray-400"></div>
                          {data.steps.map((step, index) => (
                            <div key={index} className="flex flex-col  z-10">
                              <div className="w-10 h-10 bg-[#006FBE] rounded-full flex items-center justify-center">
                                <FaChevronRight className="text-white text-lg" />
                              </div>
                              <span className="mt-3 font-bold text-black 4xl:text-[24px] 2xl:text-[19px] text-[18px]">
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Mobile  */}
                        <div className="flex flex-col gap-6 md:hidden">
                          {data.steps.map((step, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-4 relative"
                            >
                              {index !== 0 && (
                                <div className="absolute left-[14px] -top-6 h-6 w-[2px] bg-gray-400"></div>
                              )}
                              <div className="w-8 h-8 bg-[#006FBE] rounded-full flex items-center justify-center shrink-0">
                                <FaChevronDown className="text-white text-sm" />
                              </div>
                              <span className="font-bold 4xl:text-[24px] 2xl:text-[21px] text-[20px] mt-[1px] text-center">
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* How Demand+ Enables Faster Response to Disruption */}
              <div className="md:mt-[50px] mt-[40px]">
                {DeliversData.map((data, id) => (
                  <div key={id}>
                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight mb-[22px] xl:mb-[30px]">
                      {data.title}
                    </h2>
                    <p
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data.desc }}
                    />
                    <div className="mt-5">
                      {data.list.map((item, id) => {
                        return (
                          <div className="" key={id}>
                            <h3 className=" 4xl:text-[22px] xl:text-[19px] text-[18px] font-bold mt-5">
                              {item.title}
                            </h3>
                            <p
                              className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-4"
                              dangerouslySetInnerHTML={{ __html: item.desc }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              {/* Who Benefits Most from DemandPlus */}
              <div className="md:mt-[50px] mt-[40px]">
                {benefitsData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
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
              {/* Business Outcomes Leaders Care About */}
              <div className="md:mt-[50px] mt-[40px]">
                {businessData.map((data, id) => {
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
          {t('faqTitle')}
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
