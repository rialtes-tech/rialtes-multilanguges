"use client";
import Image from "next/image";
import Link from "next/link";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';

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
  const t = useTranslations('enhancingCompliance')
  const locale = useLocale();
  const blogsContent = locale === "es" ? esContent : enContent;
  const { blogs, commonData } = blogsContent.enhancingCompliance;
  const fullUrl = "https://www.rialtes.com/insights/blogs/enhancing-compliance-the-importance-of-sanctioned-party-list-screening-in-sap-gts-for-third-party-transactions";

  return (
    <div className="min-h-screen bg-white">
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
      <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/sap-gts-sanctioned-party-screening2.webp"
            alt="Explore SAP GTS SPL screening for seamless third-party compliance, showcased over a dynamic global trade map."
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/blog/enhancing-compliance-blog-mob-banner2.webp"
            alt="Explore SAP GTS SPL screening for seamless third-party compliance, showcased over a dynamic global trade map."
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
          />
        </div>
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white xl:max-w-[1084px] xl:w-[1084px]">
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black items-center">
              <div className="sm:mb-0 mb-6">
                <span className="text-[#0092E0]">{t('blogTopic')}</span>{" "}
                <span className="text-[#ACACAC]"> | </span>19 Dec 2024
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="max-w-[40px]">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)} &title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                      target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/case-studies/linkedin.svg"
                        alt="LinkedIn"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        priority
                      />
                    </a>
                  </div>

                  <div className="max-w-[40px]">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        fullUrl
                      )}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                      target="_blank"
                      rel="noopener noreferrer">
                      {" "}
                      <Image
                        src="/images/case-studies/twitter.svg"
                        alt="Twitter"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        priority
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4"></div>
          <div>
            <h1 className="text-[#000000] font-semibold pb-6 leading-tight 4xl:w-[1084px] xl:w-[704px] text-[26px] xl:text-[40px] 4xl:text-[60px]">
              {t('blogTitle')}
            </h1>
          </div>
          <div>
            <p className="text-black pb-4">
              {t('blogMainData')}
            </p>
            <p className="text-black">
              {t('blogMainData2')}
            </p>
            <div className="py-4"></div>
            {/* understandind section */}
            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
              {t('understandingTitle')}
            </h2>
            <p className="text-black pb-4">
              {t('understandingDesc')}
            </p>
            <p className="text-black ">
              {t('understandingDesc2')}
            </p>
            <div className="py-4"></div>
            {
              commonData.map((data, ind) => {
                return (
                  <div key={ind}>
                    <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                      {data.title}
                    </h2>
                    {
                      data.desc && <p className="text-black pb-4">{data.desc}</p>
                    }
                    <ul className="list-disc marker:text-[#0092E0] marker:text-xl pl-4 text-black xl:text-[20px] text-[16px] font-medium space-y-3">
                      {
                        data.list.map((elem, id) => {
                          return (
                            <li key={id}>
                              <h3 className="h3-bold inline">
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

            <div className="py-4"></div>
            {/* comply section */}
            <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
              {t('complyTitle')}
            </h2>

            <p className="text-black pb-4">
              {t('complyDesc')}
            </p>

            <p className="text-black pb-4">
              {t('complyDesc2')}
              <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                href={"https://www.rialtes.com/solutions/enterprise-platforms/sap-consulting/?utm_source=blog&utm_medium=organic"}>
                <span>{" "} {t('complyLink')} {" "} </span>
              </Link> 
              {t('complyDesc3')}
            </p>
          </div>
        </div>
      </section >

      {/* Latest Blogs */}
      <div className="custom-container lg:pr-0 pb-10" >
        <BlogsCarousel slides={blogs} />
      </div >
    </div >
  );
}
