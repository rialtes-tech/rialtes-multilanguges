"use client";
import Image from "next/image";
import Link from "next/link";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import Script from "next/script";
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
  const t = useTranslations('automateCrucial')
  const locale = useLocale();
  const blogsContent = locale === "es" ? esContent : enContent;
  const { blogs, commonData, useCasesData } = blogsContent.automateCrucial;
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

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/blog/athenahealth-salesforce-integration.webp "
          alt="Automate Crucial Parts of your Healthcare Organization with athenahealth and Salesforce Integration"
          fill
          style={{ objectFit: "cover", objectPosition: "90% 20%" }}
          priority
        />
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white xl:max-w-[1084px] xl:w-[1084px]">
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black items-center">
              <div className="sm:mb-0 mb-6">
                <span className="text-[#0092E0]">{t('blogTopic')}</span>{" "}
                <span className="text-[#ACACAC]"> | </span>11 Nov 2024
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="max-w-[40px]">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        fullUrl
                      )}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                      rel="noopener noreferrer"
                    >
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
          <div className="py-6"></div>
          <div>
            <h1 className="text-[#000000] font-semibold pb-6 xl:w-[750px] 4xl:w-[1084px] leading-tight text-[26px] xl:text-[40px] 4xl:text-[60px]">
              {t('blogTitle')}
            </h1>
          </div>

          <div>
            <div>
              <p className="text-black pb-4">
                {t('blogMainData')}
              </p>

              <p className="text-black">
                {t('blogMainData2')}
              </p>

              <div className="py-6"></div>
              {/* understanding section */}
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t('understandingTitle')}
              </h2>

              <p className="text-black ">
                {t('understandingData')}
              </p>

              <div className="py-6"></div>
              {
                commonData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                        {data.title}
                      </h2>
                      <p className="text-black pb-4">
                        {data.desc}
                      </p>
                      {
                        data.list.map((elem, id) => {
                          return (
                            <div key={id}>
                              <h3 className="text-black pb-4 h3-bold">
                                {elem.title}
                              </h3>

                              <p className="text-black pb-4">
                                {elem.desc}
                              </p>
                            </div>
                          )
                        })
                      }
                      <div className="py-6"></div>
                    </div>
                  )
                })
              }

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t('useCasesTitle')}
              </h2>

              <div className="pl-3">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 text-[16px] xl:text-[18px] 4xl:text-[20px] font-medium">
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
              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t('findTitle')}
              </h2>

              <p className="text-black pb-4">
                {t('findDesc')}
              </p>

              <p className="text-black pb-4">
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
      </section>

      {/* Latest Blogs */}
      <div className="custom-container lg:pr-0 pb-10">
        <BlogsCarousel slides={blogs} />
      </div>
    </div>
  );
}
