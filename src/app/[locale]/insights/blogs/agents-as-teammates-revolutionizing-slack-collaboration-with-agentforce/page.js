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
      "https://www.rialtes.com/insights/blogs/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce/",
  },
  headline:
    "Agents as Teammates: Revolutionizing Slack Collaboration with Agentforce",
  description:
    "Discover how Agentforce transforms Slack into a collaborative space with AI teammates that automate workflows, manage tasks, and enhance productivity.",
  image:
    "https://www.rialtes.com/images/blog/agentforce-slack-integration.webp",
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
  datePublished: "2024-12-30",
  articleSection: "Agentforce",
  url: "https://www.rialtes.com/insights/blogs/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce/",
};
export default function Page() {
  const t = useTranslations('meetTeammate')
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { blogs, featuresData, whatAgentData, integrateData, bringData } = blogsContent.meetTeammate;
  const fullUrl ="https://www.rialtes.com/insights/blogs/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="How to Enhance Slack Collaboration with Agentforce | Rialtes"
        description="Agentforce turns Slack into a smarter collaboration hub, combining real-time messaging with AI agents to streamline IT requests and enhance teamwork."
        canonical="https://www.rialtes.com/insights/blogs/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce/"
      />
      <Script
        id="schema-agents-vs"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* hero section */}
      <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/agents-as-teammates-mob-img.webp"
            alt="desktop banner"
            fill
            style={{ objectFit: "cover", objectPosition: "35% 30%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/blog/agents-as-teammates-desk-img.webp"
            alt="mobile banner"
            fill
            style={{ objectFit: "cover", objectPosition: "60% 20%" }}
            priority
          />
        </div>
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white xl:max-w-[1084px] xl:w-[1084px]">
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black items-center  ">
              <div className="sm:mb-0 mb-6">
                <span className="text-[#0092E0]">{t('blogTopic')}</span>{" "}
                <span className="text-[#ACACAC]"> | </span>30 Dec 2024
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="max-w-[40px]">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        fullUrl
                      )}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer">
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
            <h1 className="text-[#000000] 4xl:w-[1084px] xl:w-[850px] font-semibold pb-6 leading-tight text-[26px] xl:text-[45px] 4xl:text-[58px]">
              {t('blogTitle')}
            </h1>
          </div>

          <div>
            <div>
              <p className="text-black">
                {t('blogMainData')}
              </p>
              <div className="py-4"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t('feturesTitle')}
              </h2>

              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] font-medium">
                {
                  featuresData.map((data, ind) => {
                    return (
                      <li key={ind}>
                        <h3 className="h3-bold inline">{data.title}</h3>{data.desc}
                      </li>
                    )
                  })
                }
              </ul>

              <div className="py-4"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t('roleTitle')}
              </h2>

              <p className="text-black pb-4">
                {t('roleDesc')}
              </p>

              <p className="text-black">
                {t('roleDesc2')}
              </p>

              <div className="py-4"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t('whatAgentTitle')}
              </h2>

              <p className="text-black pb-4">
                {t('whatAgentDesc')}
              </p>

              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] font-medium">
                {
                  whatAgentData.map((data, ind) => {
                    return (
                      <li>
                        <h3 className="h3-bold inline">
                          {data.title}
                        </h3>
                        {data.desc}
                      </li>
                    )
                  })
                }
              </ul>

              <div className="py-4"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t('integrateTitle')}
              </h2>
              {
                integrateData.map((data, ind) => {
                  return (
                    <p className="text-black pb-4" key={ind}>
                      {data}
                    </p>
                  )
                })
              }

              <div className="py-4"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t('bringTitle')}
              </h2>

              <ul className="list-none text-black xl:text-[20px] text-[16px] font-medium">
                {
                  bringData.map((data, ind) => {
                    return (
                      <li className="pb-4" key={ind}>
                        <h3 className="h3-bold inline">{data.title}</h3>{data.desc}
                      </li>
                    )
                  })
                }
              </ul>

              <div className="py-4"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">
                {t('collaborateTitle')}
              </h2>

              <p className="text-black pb-4">
                {t('collaborateDesc')}
              </p>

              <p className="text-black pb-4">
                {t('collaborateDesc2')}<Link className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400" href={"https://rialtes.netlify.app/solutions/artificial-intelligence/salesforce-agentforce-consulting?utm_source=blog&utm_medium=organic"}><span>{" "}{t('collaborateLink')}{" "}</span></Link>
                {" "} {t('collaborateDesc3')}{" "}
                <Link className="underline" href={"mailto:sales@rialtes.com"}>
                  <span className="font-normal">sales@rialtes.com</span>
                </Link>
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
