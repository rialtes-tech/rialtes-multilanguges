"use client";
import Image from "next/image";
import Link from "next/link";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'

export default function Page() {
  const t = useTranslations("discoverAgentExchange");
  const locale = useLocale();
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { understandingDataList, whatLedData, exploreAllData, seamlessData,
    understandingData,schemaData
  } = content.discoverAgentExchange
  const fullUrl = "https://www.rialtes.com/insights/blogs/discover-agentexchange-your-trusted-marketplace-for-agentforce-success";
  const currUrl = useUrl()
  return (
    <section className="min-h-screen bg-white">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/discover-agentexchange-your-trusted-marketplace-for-agentforce-success/`}
      />

      <Script
        id="schema-discover"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative group overflow-hidden 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px]">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/digital-network-connectivity-waves-abstract.webp"
            alt={t("bannerAlt")}
            fill
            style={{ objectFit: "cover" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/blog/digital-network-connectivity-waves-abstract-mobile.webp"
            alt={t("bannerAlt")}
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
            <BlogSocialIcons fullUrl={fullUrl} topic="Salesforce Agentforce" date="02 July 2025" />

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight"> {t('blogTitle')}</h1>

              <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t('blogMainData')}{" "}
                <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.salesforce.com/in/news/press-releases/2025/03/04/agentexchange-announcement/" target="_blank">{t('blogMainDataLink')}</Link>
                {t('blogMainData2')}
              </p>
              <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t('blogMainData3')}
              </p>


              {/* understanding Data */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="mb-[29px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight"> {t('understandingTitle')}</h2>

                {
                  understandingData.map((data, ind) => (
                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" key={ind}>
                      {data}
                    </p>
                  ))
                }

                <ol className="list-decimal marker:text-xl pl-[34px] mt-6 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-3">
                  {
                    understandingDataList.map((data, ind) => {
                      return (
                        <li key={ind}>
                          <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                            {data.title}
                          </h3>
                          {" "}  {data.desc}
                        </li>
                      )
                    })
                  }
                </ol>
              </div>

              {/* what led section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('whatLedTitle')}</h2>

                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('whatLedDesc')}
                </p>

                <ol className="mt-5  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-3 list-none">
                  {
                    whatLedData.map((data, ind) => {
                      return (
                        <li key={ind}>
                          <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.title}</h3>
                          {" "} {data.desc}
                        </li>
                      )
                    })
                  }
                </ol>
              </div>

              {/* explore section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight"> {t('exploreAllTitle')}</h2>
                <h3 className="mt-[29px] xl:mt-[30px] text-[20px] md:text-[20px] 2xl:text-[21px] xl:text-[20px] 4xl:text-[24px] font-bold leading-tight">
                  {t('exploreAllTitle2')}
                </h3>

                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">
                  <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href={`https://www.rialtes.com/${locale}/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/`} target="_blank">
                    {t('exploreAllLink')}</Link>{" "}
                  {t('exploreAllDesc')}
                </p>

                <ol className="mt-5 list-decimal 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-3 pl-[36px]">
                  {
                    exploreAllData.map((data, desc) => {
                      return (
                        <li key={desc}>
                          <h4 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                            {data.title}
                          </h4>
                          {" "} {data.desc}
                        </li>
                      )
                    })
                  }
                </ol>

                <h3 className="text-[20px] md:text-[20px] 2xl:text-[21px] xl:text-[20px] 4xl:text-[24px] font-bold leading-tight mt-10">
                  {t('seamlessAiTitle')}
                </h3>

                <ol className="mt-5 list-none 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-3 pl-[24px]">
                  {
                    seamlessData.map((data, ind) => {
                      return (
                        <li key={ind}>
                          <h4 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.title} {" "}</h4>
                          {data.desc}
                        </li>
                      )
                    })
                  }
                </ol>
                <h3 className="text-[20px] md:text-[20px] 2xl:text-[21px] xl:text-[20px] 4xl:text-[24px] font-bold leading-tight mt-10">
                  {t('fosteringTitle')}
                </h3>
                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">
                  {t('fosteringData')}
                </p>
              </div>

              {/* industries section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('industriesTitle')}</h2>
                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-[29px] xl:mt-[30px]">
                  {t('industriesData')}
                </p>
              </div>

              {/* availability section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight"> {t('availabilityTitle')}</h2>
                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-[29px] xl:mt-[30px]">
                  {t('availabilityData')}
                </p>

                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">
                  {t('availabilityData2')}{" "}
                  <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href={`https://www.rialtes.com/${locale}/insights/blogs/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai/?utm_source=blog&utm_medium=organic`} target="_blank">
                    {t('availabilityLink')}</Link>,{" "}
                  {t('availabilityData3')} ,
                  <Link className="underline" href={"mailto:sales@rialtes.com"}>
                    <span>sales@rialtes.com</span>.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </section>
  );
}
