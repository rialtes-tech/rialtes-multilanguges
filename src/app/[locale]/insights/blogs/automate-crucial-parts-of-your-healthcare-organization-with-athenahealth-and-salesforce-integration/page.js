"use client";
import Image from "next/image";
import Link from "next/link";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import Script from "next/script";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/blogs/automate-crucial-parts-of-your-healthcare-organization-with-athenahealth-and-salesforce-integration/",
  },
  headline:
    "Automate Crucial Parts of Your Healthcare Organization with Athenahealth and Salesforce Integration",
  description:
    "See how integrating Athenahealth with Salesforce enhances healthcare operations—improving patient data access, workflows, and care coordination.",
  image:
    "https://www.rialtes.com/images/blog/athenahealth-salesforce-integration.webp",
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
  datePublished: "2024-11-11",
  articleSection: "Healthcare Integration",
  url: "https://www.rialtes.com/insights/blogs/automate-crucial-parts-of-your-healthcare-organization-with-athenahealth-and-salesforce-integration/",
};


export default function Page() {
  const currUrl = useUrl()
  const t = useTranslations('automateCrucial')
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { commonData, useCasesData } = blogsContent.automateCrucial;
  const fullUrl = "https://www.rialtes.com/insights/blogs/automate-crucial-parts-of-your-healthcare-organization-with-athenahealth-and-salesforce-integration";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Athenahealth Salesforce Integration: Elevate Patient Care | Rialtes"
        description="Integrating athenahealth with Salesforce is beneficial in many ways, providing a more comprehensive view of patient interactions and data across the healthcare journey."
        canonical="https://www.rialtes.com/insights/blogs/automate-crucial-parts-of-your-healthcare-organization-with-athenahealth-and-salesforce-integration/"
      />

      <Script
        id="schema-automate"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative group overflow-hidden 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[400px]">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/athenahealth-salesforce-integration.webp"
            alt="banner"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110 object-[90%_30%] xl:object-[60%_30%]"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden h-full">
          <Image
            src="/images/blog/athenahealth-salesforce-integration.webp"
            alt="banner"
            priority
            height={0}
            width={0}
            className="w-full h-full object-cover object-[90%_30%]"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

            {/* date and icons */}
            <div className="sm:flex justify-between">
              <div>
                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('blogTopic')}</span>{" "}
                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>11 Nov 2024
              </div>

              <div>
                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                  <BlogSocialIcons fullUrl={fullUrl} />
                </div>
              </div>
            </div>

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px]"> {t('blogTitle')}</h1>
              <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('blogMainData')}</p>
              <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('blogMainData2')}</p>

              {/* understanding section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('understandingTitle')}</h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('understandingData')}</p>
              </div>

              {/* common section */}
              {
                commonData.map((data, ind) => {
                  return (
                    <div key={ind} className="md:mt-[50px] mt-[40px]">
                      <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      {
                        data.list.map((elem, id) => {
                          return (
                            <div key={id}>
                              <h3 className="text-[20px] md:text-[20px] 2xl:text-[21px] xl:text-[20px] 4xl:text-[24px] mt-8 font-bold">
                                {elem.title}
                              </h3>

                              <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-3">
                                {elem.desc}
                              </p>
                            </div>
                          )
                        })
                      }
                    </div>
                  )
                })
              }

              {/* use cases section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('useCasesTitle')}</h2>
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl pl-[34px] space-y-3 mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">
                  {
                    useCasesData.map((data, ind) => {
                      return (
                        <li className="pb-4" key={ind}>
                          <h4 className="inline">
                            {data.title}
                          </h4>{data.desc}
                        </li>
                      )
                    })
                  }

                </ul>
              </div>

              {/* find section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('findTitle')}</h2>

                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('findDesc')}
                </p>

                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('findDesc2')}{" "}
                  <Link
                    className=" text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"
                    href={"https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/"}>
                    <span>{t('findLink')}</span>
                  </Link>{" "}
                  {t('findDesc3')} {" "}
                  <Link
                    className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"
                    href={"https://www.rialtes.com/industry/life-sciences/healthcare-medtech-patient-care/"}>
                    <span>{t('findLink2')}</span>
                  </Link>
                  {t('findDesc4')}
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
    </div>
  );
}
