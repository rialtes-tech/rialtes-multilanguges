"use client";
import Image from "next/image";
import Link from "next/link";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
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
  const t = useTranslations("meetTeammate");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const { blogs, featuresData, whatAgentData, integrateData, bringData } =
    blogsContent.meetTeammate;
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce";

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
      <section className="relative group overflow-hidden h-[350px] md:h-[400px]  4xl:h-[650px] 2xl:h-[500px] ">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/agents-as-teammates-desk-img.webp"
            alt="desktop banner"
            fill
            style={{ objectFit: "cover", objectPosition: "55% 10%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/blog/agents-as-teammates-mob-img.webp"
            alt="mobile banner"
            fill
            style={{ objectFit: "cover", objectPosition: "60% 20%" }}
            priority
          />
        </div>
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white xl:max-w-[1084px] 4xl:w-[1084px] 2xl:w-[900px] xl:w-[800px]">
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black items-center  ">
              <div className="sm:mb-0 mb-6">
                <span className="text-[#0092E0]">{t("blogTopic")}</span>{" "}
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
          <div className="py-4"></div>
          <div>
            <h1 className="text-[#000000] pb-6 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
              {t("blogTitle")}
            </h1>
          </div>

          <div>
            <div>
              <p className="text-black  4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">
                {t("blogMainData")}
              </p>
              <div className="py-4"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] xl:text-[26px] text-[22px] leading-tight pb-4">
                {t("feturesTitle")}
              </h2>

              <ul className="list-disc marker:text-[#0092E0] 4xl:text-[20px] text-[16px] 2xl:text-[18px]  xl:text-[17px] font-medium pl-[25px] lg:pl-[32px]">
                {featuresData.map((data, ind) => {
                  return (
                    <li className="pb-4" key={ind}>
                      <h3 className="h3-bold inline 4xl:text-[22px] text-[18px] leading-tight">
                        {data.title}
                      </h3>
                      {data.desc}
                    </li>
                  );
                })}
              </ul>

              <div className="py-4"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] xl:text-[26px] text-[22px] pb-4 leading-tight">
                {t("roleTitle")}
              </h2>

              <p className="text-black pb-4  4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">
                {t("roleDesc")}
              </p>

              <p className="text-black 4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">
                {t("roleDesc2")}
              </p>

              <div className="py-4"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] xl:text-[26px] text-[22px] leading-tight pb-4">
                {t("whatAgentTitle")}
              </h2>

              <p className="text-black pb-4  4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">
                {t("whatAgentDesc")}
              </p>

              <ul className="list-disc marker:text-[#0092E0] text-black   4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight font-medium pl-[25px] lg:pl-[32px]">
                {whatAgentData.map((data, ind) => {
                  return (
                    <li className="pb-4 last:pb-0">
                      <h3 className="h3-bold inline 4xl:text-[22px] text-[18px] leading-tight">
                        {data.title}
                      </h3>
                      {data.desc}
                    </li>
                  );
                })}
              </ul>

              <div className="py-4"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] xl:text-[26px] text-[22px] leading-tight pb-4">
                {t("integrateTitle")}
              </h2>
              {integrateData.map((data, ind) => {
                return (
                  <p
                    className="text-black pb-4  4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight "
                    key={ind}
                  >
                    {data}
                  </p>
                );
              })}

              <div className="py-4"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] xl:text-[26px] text-[22px] leading-tight pb-4">
                {t("bringTitle")}
              </h2>

              <ul className="list-none text-black  4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight font-medium">
                {bringData.map((data, ind) => {
                  return (
                    <li className="pb-4 last:pb-0" key={ind}>
                      <h3 className="h3-bold inline 4xl:text-[22px] text-[18px] leading-tight">
                        {data.title}
                      </h3>
                      {data.desc}
                    </li>
                  );
                })}
              </ul>

              <div className="py-4"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[32px] xl:text-[26px] text-[22px] leading-tight pb-4">
                {t("collaborateTitle")}
              </h2>

              <p className="text-black pb-4  4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">
                {t("collaborateDesc")}
              </p>

              <p className="text-black pb-4  4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight">
                {t("collaborateDesc2")}{" "}
                <Link
                  className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                  href={
                    "https://rialtes.netlify.app/solutions/artificial-intelligence/salesforce-agentforce-consulting?utm_source=blog&utm_medium=organic"
                  }
                >
                  <span>{t("collaborateLink")}</span>
                </Link>{" "}
                {t("collaborateDesc3")}{" "}
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
