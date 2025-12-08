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

export default function Page() {
  const fullUrl = "https://www.rialtes.com/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce";
  const currUrl = useUrl()
  const t = useTranslations("brainBehind");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });

  const { mainData, quickCommonData, faqData, howAtlasData, whyAtlasCommonData, keyData, businessData, rialtesData,schemaData } = blogsContent.brainBehind

  return (
    <section className="min-h-screen">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords="Partners, website, welcome"
        canonical={
          `https://www.rialtes.com/${locale}/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce/`
        }
      />

      <Script
        id="schema-provenWays"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/blog/digital-brain-ai-circuit-technology-illustration.webp"
            alt={t('bannerAlt')}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/digital-brain-ai-circuit-technology-illustration-mobile.webp"
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

            {/* date and icons */}
             <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="19 November 2025" />

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t('blogTitle')}</h1>

              <div className="xl:mt-[38px] mt-[33px]">
                {
                  mainData.map((data, ind) => {
                    return (
                      <p
                        key={ind}
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data }}
                      />
                    )
                  })
                }
              </div>

              {/* quick common section */}
              {
                quickCommonData.map((data, ind) => (
                  <div className="md:mt-[50px] mt-[40px]" key={ind}>
                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                    <UnorderedList arrName={data.desc} ulClassName="mt-[29px] xl:mt-[30px] space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                  </div>
                ))
              }

              {/* how atlas section */}
              {
                howAtlasData.map((data, ind) => {
                  return (
                    <div key={ind} className="md:mt-[50px] mt-[40px]">
                      <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                      <p
                        className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] 4xl:w-[1200px] sm:w-[80%] md:w-full">
                        {
                          data.list.map((elem, id) => {
                            return (
                              <div className="4xl:p-[30px] p-[22px] border border-[#707070]" key={id}>
                                <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070]">{elem.title}</h3>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.desc}</p>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  )
                })
              }
              {/* why Atlas common section */}
              {
                whyAtlasCommonData.map((data, ind) => (
                  <div className="md:mt-[50px] mt-[40px]" key={ind}>
                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                    <UnorderedList arrName={data.desc} ulClassName="mt-[29px] xl:mt-[30px] space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                    <UnorderedList arrName={data.list} ulClassName="mt-5 pl-[26px] lg:pl-[36px] list-disc space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                    <UnorderedList arrName={data.desc2} ulClassName="mt-10 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                  </div>
                ))
              }

              {/* key section */}
              {
                keyData.map((data, ind) => (
                  <div className="md:mt-[50px] mt-[40px]" key={ind}>
                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                    <p
                      className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                      dangerouslySetInnerHTML={{ __html: data.desc }}
                    />
                    {
                      data.list.map((elem, id) => (
                        <div className="mt-10 grid md:grid-cols-12 grid-cols-1 md:gap-y-[26px] border border-[#707070] sm:w-[90%] md:w-auto xl:w-[1000px] 4xl:w-[1200px]" key={id}>
                          <div className="bg-[#F0F0F0] p-[32px] col-span-4 flex items-center">
                            <h3 className="4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[16px] font-bold 4xl:w-[90%]">
                              {elem.title}
                            </h3>
                          </div>
                          <div className="p-[32px] col-span-8">
                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                              {elem.desc}
                            </p>
                          </div>
                        </div>
                      ))
                    }
                    <p
                      className={`mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                      dangerouslySetInnerHTML={{ __html: data.desc2 }}
                    />
                  </div>
                ))
              }

              {/* business section */}
              {
                businessData.map((data, ind) => (
                  <div className="md:mt-[50px] mt-[40px]" key={ind}>
                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                    <p
                      className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                      dangerouslySetInnerHTML={{ __html: data.desc }}
                    />
                    <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-2 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                    <p
                      className={`mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                      dangerouslySetInnerHTML={{ __html: data.desc2 }}
                    />
                  </div>
                ))
              }


              {/* how rialtes section */}
              {
                rialtesData.map((data, ind) => (
                  <div className="md:mt-[50px] mt-[40px]" key={ind}>
                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                    <UnorderedList arrName={data.desc} ulClassName="mt-[29px] xl:mt-[30px] space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-[80px] gap-[40px]">
                      {
                        data.list.map((elem, id) => (
                          <div key={id}>
                            <span
                              key={id}
                              className="bg-[#006FBE] h-10 w-10 md:h-16 md:w-16 xl:h-20 xl:w-20 rounded-full text-white flex items-center justify-center 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]"
                            >
                              {id + 1}
                            </span>
                            <h3 className="pb-3 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold leading-tight mt-5"> {elem}</h3>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      {/* faq section */}
      <section className="xl:mt-[80px] mt-[40px] custom-container">
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('faqTitle')}</h2>
        <div className="mt-[29px] xl:mt-[30px]">
          <FAQAccordion faqData={faqData} />
        </div>
      </section>

      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </section>
  )
}