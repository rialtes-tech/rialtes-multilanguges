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
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/blogs/enhancing-compliance-the-importance-of-sanctioned-party-list-screening-in-sap-gts-for-third-party-transactions/",
  },
  headline:
    "Enhancing Compliance: The Importance of Sanctioned Party List Screening in SAP GTS for Third-Party Transactions",
  description:
    "Learn how SAP GTS streamlines compliance with global trade laws using Sanctioned Party List (SPL) screening, ensuring secure and lawful third-party engagements.",
  image:
    "https://www.rialtes.com/images/blog/sap-gts-sanctioned-party-screening.webp",
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
  datePublished: "2024-12-19",
  articleSection: "SAP GTS",
  url: "https://www.rialtes.com/insights/blogs/enhancing-compliance-the-importance-of-sanctioned-party-list-screening-in-sap-gts-for-third-party-transactions/",
};

export default function Page() {
  const currUrl = useUrl()
  const t = useTranslations('enhancingCompliance')
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { commonData } = blogsContent.enhancingCompliance;
  const fullUrl = "https://www.rialtes.com/insights/blogs/enhancing-compliance-the-importance-of-sanctioned-party-list-screening-in-sap-gts-for-third-party-transactions";

  return (
    <section className="min-h-screen bg-white">
      <Seo
        title="How SAP GTS Sanctioned Party List Screening Ensures Compliance | Rialtes"
        description="Minimize risks with SAP Sanctioned Party List Screening by ensuring your business never deals with prohibited parties. Stay compliant and avoid legal penalties."
        canonical="https://www.rialtes.com/insights/blogs/enhancing-compliance-the-importance-of-sanctioned-party-list-screening-in-sap-gts-for-third-party-transactions/"
      />

      <Script
        id="schema-enhancing"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative group overflow-hidden 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[400px]">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/sap-gts-sanctioned-party-screening2.webp"
            alt="banner"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden h-full">
          <Image
            src="/images/blog/enhancing-compliance-blog-mob-banner2.webp"
            alt="banner"
            priority
            height={0}
            width={0}
            className="w-full h-full object-cover object-[60%_30%]"
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
                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>19 Dec 2024
              </div>

              <div>
                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                  <BlogSocialIcons fullUrl={fullUrl} />
                </div>
              </div>
            </div>

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight"> {t('blogTitle')}</h1>
              <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('blogMainData')}</p>
              <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t('blogMainData2')}
              </p>

              {/* understanding section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('understandingTitle')}</h2>

                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('understandingDesc')}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('understandingDesc2')}
                </p>
              </div>

              {/* features of sp section */}
              <div className="md:mt-[50px] mt-[40px]">
                {
                  commonData.map((data, ind) => {
                    return (
                      <div key={ind}>
                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                          {data.title}
                        </h2>
                        {
                          data.desc && <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                        }
                        <ul className="list-disc marker:text-xl mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] font-medium space-y-4">
                          {
                            data.list.map((elem, id) => {
                              return (
                                <li key={id}>
                                  <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {elem.title}
                                  </h3>
                                  {elem.desc}
                                </li>
                              )
                            })
                          }
                        </ul>
                        <div className="py-4"></div>
                      </div>
                    )
                  })
                }
              </div>

              {/* comply section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('complyTitle')}</h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('complyDesc')}
                </p>

                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('complyDesc2')}{" "}<Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                    href={"https://www.rialtes.com/solutions/enterprise-platforms/sap-consulting/?utm_source=blog&utm_medium=organic"}>
                    <span>{t('complyLink')}</span>
                  </Link>{" "}{t('complyDesc3')}
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
