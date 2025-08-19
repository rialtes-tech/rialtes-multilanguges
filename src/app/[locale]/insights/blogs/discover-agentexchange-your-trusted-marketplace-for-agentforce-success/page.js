"use client";
import Image from "next/image";
import Link from "next/link";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/blogs/discover-agentexchange-your-trusted-marketplace-for-agentforce-success/",
  },
  headline: "Discover AgentExchange by Salesforce",
  description:
    "AgentExchange simplifies the discovery and deployment of trusted AI solutions. Customers can explore offerings through the marketplace or within Salesforce’s Agent Builder tool, ensuring the right fit for their industry and use case.",
  image: "https://www.rialtes.com/images/blog/agentexchange-banner.jpg",
  author: {
    "@type": "Organization",
    name: "Rialtes",
  },
  publisher: {
    "@type": "Organization",
    name: "Rialtes",
    logo: {
      "@type": "ImageObject",
      url: "https://www.rialtes.com/images/homepage/logo.svg",
    },
  },
  datePublished: "2025-05-22",
  dateModified: "2025-05-22",
};

export default function Page() {
  const t = useTranslations("discoverAgentExchange");
  const locale = useLocale();
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { blogs, understandingDataList, whatLedData, exploreAllData, seamlessData,
    understandingData
  } = content.discoverAgentExchange
  const fullUrl = "https://www.rialtes.com/insights/blogs/discover-agentexchange-your-trusted-marketplace-for-agentforce-success";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Why AgentExchange Is a Game-Changer | Rialtes"
        description="AgentExchange is a thriving ecosystem where businesses, partners, and Agentblazers collaborate, share best practices, and drive the future of agentic AI together."
        canonical={"https://www.rialtes.com/insights/blogs/discover-agentexchange-your-trusted-marketplace-for-agentforce-success/"}
      />

      <Script
        id="schema-discover"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative group overflow-hidden  h-[350px] md:h-[500px]  4xl:h-[650px]  ">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/agentexchange-blog-banner.webp"
            alt="Discover AgentExchange"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/blog/agentexchange-blog-banner-mobile.webp"
            alt="Discover AgentExchange"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white">
          <div className=" mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black items-center max-w-[1084px] xl:w-[1084px]">
              <div className="sm:mb-0 mb-6">
                <span className="text-[#0092E0]">{t('blogTopic')}</span>
                <span className="text-[#ACACAC] text-[16px] md:text-[20px] xl:text-[20px]"> | </span>02 July 2025
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
          <div className="mx-auto">
            <h1 className="text-[#000000] leading-tight text-[26px] xl:text-[50px] 4xl:text-[60px] font-semibold pb-6 xl:w-[830px] 4xl:w-[1084px]">
              {t('blogTitle')}
            </h1>
          </div>

          <div className="mx-auto">
            <div className="max-w-[1084px] xl:w-[1084px]">
              <p className="text-black pb-4">
                {t('blogMainData')}
                <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.salesforce.com/in/news/press-releases/2025/03/04/agentexchange-announcement/" target="_blank">{t('blogMainDataLink')}</Link>
                {t('blogMainData2')}
              </p>
              <p className="text-black">
                {t('blogMainData3')}
              </p>
              <div className="py-6 "></div>
              <h2 className="pb-4 font-medium text-[#0092E0] xl:text-[30px] md:text-[24px] text-[20px]">
                {t('understandingTitle')}
              </h2>
              {
                understandingData.map((data, ind) => (
                  <p className="text-black pb-4" key={ind}>
                    {data}
                  </p>
                ))
              }
              <div className="pl-6">
                <ol className="list-decimal marker:text-xl text-black md:text-[20px] text-[16px] font-medium space-y-3">
                  {
                    understandingDataList.map((data, ind) => {
                      return (
                        <li key={ind}>
                          <h3 className="h3-bold inline md:text-[20px] text-[16px]">
                            {data.title}
                          </h3>
                          {data.desc}
                        </li>
                      )
                    })
                  }
                </ol>
              </div>
              <div className="py-6"></div>
              <h2 className="pb-4 font-medium text-[#0092E0] xl:text-[30px] md:text-[24px] text-[20px]">
                {t('whatLedTitle')}
              </h2>
              <p className="text-black pb-4">
                {t('whatLedDesc')}
              </p>

              <ol className="text-black md:text-[20px] text-[16px] font-medium space-y-3 list-none">
                {
                  whatLedData.map((data, ind) => {
                    return (
                      <li key={ind}>
                        <h3 className="h3-bold inline md:text-[20px] text-[16px]">{data.title}</h3>
                        {data.desc}
                      </li>
                    )
                  })
                }
              </ol>
              <div className="py-6"></div>
              <h2 className=" font-medium text-[#0092E0] xl:text-[30px] md:text-[24px] text-[20px]">
                {t('exploreAllTitle')}  {" "}
              </h2>

              <h3 className="pb-4 mt-6 h3-bold text-[18px] md:text-[22px] xl:text-[24px] 4xl:text-[26px]">
                {t('exploreAllTitle2')}
              </h3>

              <p className="text-black pb-4">
                <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/" target="_blank">
                  {t('exploreAllLink')}   </Link>
                {t('exploreAllDesc')}
              </p>
              <div className="pl-6">
                <ol className="list-decimal marker:text-xl text-black md:text-[20px] text-[16px] font-medium space-y-3">
                  {
                    exploreAllData.map((data, desc) => {
                      return (
                        <li key={desc}>
                          <h4 className="h3-bold inline md:text-[20px] text-[16px]">
                            {data.title}
                          </h4>
                          {data.desc}
                        </li>
                      )
                    })
                  }
                </ol>
              </div>

              <h3 className="pb-4 mt-6 h3-bold text-[18px] md:text-[22px] xl:text-[24px] 4xl:text-[26px]">
                {t('seamlessAiTitle')}
              </h3>

              <ol className="text-black md:text-[20px] text-[16px] font-medium space-y-3 list-none">
                {
                  seamlessData.map((data, ind) => {
                    return (
                      <li key={ind}>
                        <h4 className="h3-bold inline md:text-[20px] text-[16px]">{data.title}</h4>
                        {data.desc}
                      </li>
                    )
                  })
                }
              </ol>
              <h3 className="pb-4 mt-6 h3-bold text-[18px] md:text-[22px] xl:text-[24px] 4xl:text-[26px]">
                {t('fosteringTitle')}
              </h3>
              <p className="text-black">
                {t('fosteringData')}
              </p>
              <div className="py-6"></div>
              <h2 className="pb-4 font-medium text-[#0092E0] xl:text-[30px] md:text-[24px] text-[20px]">
                {t('industriesTitle')}
              </h2>
              <p className="text-black">
                {t('industriesData')}
              </p>
              <div className="py-6"></div>
              <h2 className="pb-4 font-medium text-[#0092E0] xl:text-[30px] md:text-[24px] text-[20px]">
                {t('availabilityTitle')}
              </h2>
              <p className="text-black pb-4">
                {t('availabilityData')}
              </p>

              <p className="text-black">
                {t('availabilityData2')}
                <Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href="https://www.rialtes.com/insights/blogs/agentforce-agents-scales-enterprise-resource-planning-systems-with-ai/?utm_source=blog&utm_medium=organic" target="_blank">
                  {t('availabilityLink')}   </Link>
                {t('availabilityData3')} , 
                <Link className="underline" href={"mailto:sales@rialtes.com"}>
                  <span> sales@rialtes.com.</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div className="custom-container xl:pr-0">
        <BlogsCarousel slides={blogs} />
      </div>
    </div>
  );
}
