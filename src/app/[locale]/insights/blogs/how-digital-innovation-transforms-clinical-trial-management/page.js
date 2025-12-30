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

    const fullUrl =
    "https://www.rialtes.com/insights/blogs/how-digital-innovation-transforms-clinical-trial-management";

export default function Page() {
     const t = useTranslations("digitalInnovationBlog");
      const locale = useLocale();
      const currUrl = useUrl();
      const content = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
      });
      const {
      blogMainData,
       analyticsData,
       trialsData,
       buildData,
       toolsData,
       innovationData,
       quickAnswer,
       faqData,
       schemaData
      } = content.digitalInnovationBlog; 
  return (
    <section className="min-h-screen">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/how-digital-innovation-transforms-clinical-trial-management/`}
      />
      <Script
        id="schema-copilots"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="md:block hidden">
          <Image
            src="/images/blog/digital-medical-hologram-banner.webp"
            className="w-full h-auto object-cover"
            alt={t("bannerAlt")}
            fill
            priority
          />
        </div>
        <div className="md:hidden block">
          <Image
            src="/images/blog/digital-medical-hologram-mobile.webp"
            alt={t("bannerAlt")}
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
           <BlogSocialIcons
                        fullUrl={fullUrl}
                        topic={t("blogTopic")}
                        date="25 November 2025"
                      />
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
              {/* The Shift from Traditional to Digital Clinical Trials */}
              <div className="md:mt-[50px] mt-[40px]">
                <div>
                  <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t('shiftTitle')}
                  </h2>
                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t('shiftDesc')}
                  </p>
                  <div className="grid xl:gap-[38px] md:gap-[25px] gap-4 sm:grid-cols-2 lg:grid-cols-4  xl:mt-[40px] mt-4 mb-5">
                    {trialsData.map((item, index) => (
                       <div key={index} >
                       <span> <h3 className="inline font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight text-black lg:mt-0 mt-4">
                          {item.title}
                        </h3>,</span>
                        <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight mt-1">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="xl:mt-[35px] mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t('shiftDescOne')}
                  </p>
                </div>
              </div>
              {/* Smarter Patient Recruitment with AI and Predictive Analytics */}
              <div className="md:mt-[50px] mt-[40px]">
                {analyticsData.map((item, index) => (
                  <div key={index}>
                    <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                      {item.title}
                    </h2>

                    {item.data.map((paragraph, i) => (
                      <p
                      key={i}
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                    ))}
                  </div>
                ))}
              </div>

              {/* Reducing Clinical Trial Dropout Rates with Digital Tools */}
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
                    </div>
                  );
                })}
              </div>
              {/* Building Intelligent Healthcare Ecosystems for Trials */}
              <div className="md:mt-[50px] mt-[40px]">
                {buildData.map((data, id) => {
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
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold ">
                        {data.desc2}
                      </p>
                      <div className="lg:mt-[50px] mt-[25px] relative grid grid-cols-1 md:grid-cols-2 lg:gap-y-12 gap-y-6">
                        <div className="relative flex flex-col md:pr-14">
                          <div className="hidden md:block absolute left-full top-0 bottom-0 w-px bg-[#707070]"></div>
                          <h3 className="text-[#006FBE] font-bold 4xl:text-[22px] 2xl:text-[19px] text-[18px]">
                            {data.gridLeft[0]}
                          </h3>
                        </div>

                        <div className="relative flex flex-col md:pl-14">
                          <h3 className="text-[#006FBE] font-bold 4xl:text-[22px] 2xl:text-[19px] text-[18px]">
                            {data.gridRight[0]}
                          </h3>
                        </div>

                        <div className="relative flex flex-col md:pr-14">
                          <div className="hidden md:block absolute left-full top-0 bottom-0 w-px bg-[#707070]"></div>
                          <h3 className="text-[#006FBE] font-bold 4xl:text-[22px] 2xl:text-[19px] text-[18px]">
                            {data.gridLeft[1]}
                          </h3>
                        </div>

                        <div className="relative flex flex-col md:pl-14">
                          <p className="text-[#006FBE] font-bold 4xl:text-[22px] 2xl:text-[19px] text-[18px]">
                            {data.gridRight[1]}
                          </p>
                        </div>
                      </div>

                      <p className="xl:mt-[60px] mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* The Role of Data and AI in Clinical Research Innovation */}
              <div className="md:mt-[50px] mt-[40px]">
                {innovationData.map((data, id) => {
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
                    </div>
                  );
                })}
              </div>
              {/* A Seamless Future with MediAIna*/}
              <div className="md:mt-[50px] mt-[40px]">
                {quickAnswer.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                       dangerouslySetInnerHTML={{ __html: data.desc }} />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                       dangerouslySetInnerHTML={{ __html: data.desc1 }} />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold ">
                        {data.desc2}
                      </p>
                      <div className="xl:mt-[30px] mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 4xl:mr-28 xl:mr-20">
                        {data.features.map((item, i) => (
                          <div
                            key={i}
                            className="border border-[#A2A2A2] opacity-100 p-5 h-full flex items-start"
                          >
                            <h3 className="font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                              {item}
                            </h3>
                          </div>
                        ))}
                      </div>

                      <p className="xl:mt-[30px] mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                       dangerouslySetInnerHTML={{ __html: data.desc4 }} />
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
