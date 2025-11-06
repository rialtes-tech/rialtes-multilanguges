"use client";
import Image from "next/image";
import Link from "next/link";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
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
      "https://www.rialtes.com/insights/blogs/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce/",
  },
  headline:
    "Agents as Teammates: Revolutionizing Slack Collaboration with Agentforce",
  description:
    "Discover how Agentforce transforms Slack into a collaborative space with AI teammates that automate workflows, manage tasks, and enhance productivity.",
  image:
    "https://www.rialtes.com/images/blog/ai-agent-digital-interface.webp",
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
  const currUrl = useUrl()
  const t = useTranslations("meetTeammate");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const { featuresData, whatAgentData, integrateData, bringData } =
    blogsContent.meetTeammate;
  const fullUrl = "https://www.rialtes.com/insights/blogs/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce";

  return (
    <section className="min-h-screen">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/agents-as-teammates-revolutionizing-slack-collaboration-with-agentforce/`}
      />
      <Script
        id="schema-agents-vs"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative group overflow-hidden 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[400px]">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/ai-agent-digital-interface.webp"
            alt={t('bannerAlt')}
            fill
            style={{ objectFit: "cover" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110 object-[80%_30%]"
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden h-full">
          <Image
            src="/images/blog/ai-agent-digital-interface-mobile.webp"
            alt={t('bannerAlt')}
            priority
            height={0}
            width={0}
            className="w-full h-full object-cover object-[20%_30%]"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

            {/* date and icons */}
            <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="30 Dec 2024" />

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight"> {t('blogTitle')}</h1>
              <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('blogMainData')}</p>
            </div>

            {/* features section */}
            <div className="md:mt-[50px] mt-[40px]">
              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('feturesTitle')}</h2>
              <ul className="mt-[29px] xl:mt-[30px] list-disc font-medium marker:text-xl 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] space-y-3">
                {featuresData.map((data, ind) => {
                  return (
                    <li className="pb-4" key={ind}>
                      <h3 className="inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold leading-tight">
                        {data.title}
                      </h3>
                      {data.desc}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* role section */}
            <div className="md:mt-[50px] mt-[40px]">
              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('roleTitle')}</h2>
              <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("roleDesc")}
              </p>
              <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("roleDesc2")}
              </p>
            </div>

            {/* why agent section */}
            <div className="md:mt-[50px] mt-[40px]">
              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('whatAgentTitle')}</h2>
              <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("whatAgentDesc")}
              </p>
              <ul className="list-disc font-medium marker:text-xl 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 pl-[34px] space-y-3">
                {whatAgentData.map((data, ind) => {
                  return (
                    <li className="pb-4" key={ind}>
                      <h3 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline font-bold leading-tight">
                        {data.title}
                      </h3>
                      {data.desc}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* integrate section */}
            <div className="md:mt-[50px] mt-[40px]">
              <h2 className="mb-[29px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('integrateTitle')}</h2>
              {integrateData.map((data, ind) => {
                return (
                  <p
                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] first:mt-0 mt-5"
                    key={ind}>
                    {data}
                  </p>
                );
              })}
            </div>

            {/* bring section */}
            <div className="md:mt-[50px] mt-[40px]">
              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('bringTitle')}</h2>
              <ul className="list-disc font-medium marker:text-xl 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 pl-[34px] space-y34">
                {bringData.map((data, ind) => {
                  return (
                    <li className="pb-4" key={ind}>
                      <h3 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline font-bold leading-tight">
                        {data.title}
                      </h3>
                      {data.desc}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* collaborate section */}
            <div className="md:mt-[50px] mt-[40px]">
              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('collaborateTitle')}</h2>
              <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("collaborateDesc")}
              </p>

              <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("collaborateDesc2")}{" "}
                <Link
                  className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                  href={"https://rialtes.netlify.app/solutions/artificial-intelligence/salesforce-agentforce-consulting?utm_source=blog&utm_medium=organic"}>
                  <span>{t("collaborateLink")}</span>
                </Link>{" "}
                {t("collaborateDesc3")}{" "}
                <Link className="underline" href={"mailto:sales@rialtes.com"}>
                  <span className="font-normal">sales@rialtes.com</span>
                </Link>.
              </p>
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
