"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import Link from "next/link";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters/",
  },
  headline:
    "Agents vs. Copilots vs. Bots: What’s the Difference and Why It Matters",
  description:
    "Discover how AI Agents, Copilots, and Bots differ in intelligence, autonomy, and use cases—and why choosing the right one is key to scaling enterprise automation, improving operational efficiency, and future-proofing your digital transformation strategy.",
  image:
    "https://www.rialtes.com/images/blog/agents-vs-bots-vs-copilot-comparison-explained.webp",
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
  datePublished: "2024-10-28",
  dateModified: "2025-07-25",
  articleSection: "AI Automation",
  url: "https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters/",
  mainEntity: [
    {
      "@type": "Question",
      name: "What’s the difference between bots, copilots, and agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bots follow simple rules to perform tasks. Copilots offer contextual help and suggestions, often requiring user input. Agents act independently, make decisions, and can operate across systems autonomously. Think of bots as basic responders, copilots as smart assistants, and agents as decision-makers.",
      },
    },
    {
      "@type": "Question",
      name: "What is an example of a bot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A chatbot that answers questions like 'What is your return policy?' on an e-commerce website is a good example of a bot. It follows scripted responses and doesn’t adapt to complex queries.",
      },
    },
    {
      "@type": "Question",
      name: "What does an AI agent do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI agent can understand tasks, make decisions, and execute actions without constant human intervention. In manufacturing, for example, an agent can predict delays and reschedule workflows automatically.",
      },
    },
    {
      "@type": "Question",
      name: "Is Copilot better than chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A copilot provides intelligent suggestions based on context and user behavior, whereas a chatbot sticks to predefined scripts. Copilots are more dynamic and user-focused than basic bots.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI tool is more powerful: agent or copilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agents are more powerful. While copilots assist users by providing recommendations, AI agents go further—they make decisions, adapt, and act autonomously across processes.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI should I use for customer support in manufacturing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI agents are best for manufacturing customer service. They handle complex queries, integrate with enterprise systems, and resolve issues faster than traditional bots or copilots.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI agents fully replace humans in operations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. AI agents are ideal for automating repetitive and data-driven tasks, but human-AI collaboration is still essential for strategic decisions, creativity, and empathy-driven customer service.",
      },
    },
  ],
};

export default function Page() {
  const t = useTranslations("agentCopilot");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const { faqData, list, caseStudies, agentUseCases, copilotList } =
    blogsContent.agentCopilot;
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters";
  const currUrl = useUrl();

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        keywords="Partners, website, welcome"
        canonical={
          "https://www.rialtes.com/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters/"
        }
      />

      <Script
        id="schema-copilots"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/blog/agents-vs-copilots-vs-bots-explained.webp "
            alt="Agents vs. Copilots vs. Bots: What’s the Difference and Why It Matters"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/agents-vs-copilots-vs-bots-comparison.webp"
            alt="Agents vs. Copilots vs. Bots: What’s the Difference and Why It Matters"
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

            <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="25 July 2025" />

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="text-[#000000]  pb-6  leading-tight 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px]">
                <span className="font-bold 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px]">
                  {t("blogTitle")}{" "}
                </span>
                <br className="xl:block hidden"></br>
                {t("blogMainData")}
              </h1>
            </div>
            <div className="xl:mt-[38px] mt-[33px]">
              <div className="">
                <div className="">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("why")}
                  </h2>

                  <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("whyDesc")}
                  </p>
                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("whyDescOne")}
                  </p>
                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("whylink")}
                    <Link
                      className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                      href="https://www.rialtes.com/insights/blogs/agentforce-for-manufacturing-exceed-customer-expectations-with-ai-powered-salesforce-solutions/"
                      target="_blank"
                    >
                      {t("whylinkOne")}
                    </Link>{" "}
                    {t("whylinkTwo")}
                  </p>
                  <div className="flex  items-center py-8 mt-5">
                    <div className="relative border border-[#0A6BB8] rounded-sm py-12 px-8  w-full">
                      <div className="absolute -top-8 left-4  px-1 w-[84px] h-[50px]">
                        <Image
                          src="/images/blog/quote-mark.svg"
                          alt="Agents vs. Copilots vs. Bots: What’s the Difference and Why It Matters"
                          fill
                          priority
                        />
                      </div>

                      <p className=" text-gray-800 font-medium leading-tight 4xl:text-[28px] xl:text-[25px] text-[20px]">
                        {t("title")}
                      </p>
                      <p className="mt-5 4xl:text-[28px] xl:text-[25px] text-[20px] font-medium text-gray-800">
                        {t("name")}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("aiTitle")}
                  </p>
                </div>
                <div className="md:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("aiDesc")}
                  </h2>
                  <h3 className="4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight font-semibold mt-[29px] xl:mt-[30px]">
                    {t("aiDesc1")}
                  </h3>
                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("aiDesc2")}
                  </p>
                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("aiDesc3")}
                  </p>
                  <h3 className="4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight mt-[30px] lg:mt-[49px] font-bold ">
                    {t("application")}
                  </h3>
                  <ul className="list-none marker:text-black marker:text-xl  mt-5 space-y-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px]  text-[16px] font-medium">
                    {list.map((useCase, index) => (
                      <li key={index} className="pb-2">
                        <h4 className="inline 4xl:text-[22px] text-[18px] leading-tight font-bold">
                          {useCase.title}
                        </h4>{" "}
                        : {useCase.desc}
                      </li>
                    ))}
                  </ul>
                  <h3 className="4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] mt-[30px] lg:mt-[49px] font-bold leading-tight">
                    {t("smartTitle")}
                  </h3>
                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("smartDesc")}
                  </p>
                  <p className="mt-4 4xl:pr-5 pr-10 xl:pr-0 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">
                    {t("smartDesc1")}
                  </p>
                  <h3 className="4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight mt-[30px] lg:mt-[49px] font-bold">
                    {t("application")}
                  </h3>
                  <ul className="list-none marker:text-black marker:text-xl mt-5 text-black space-y-5 4xl:text-[20px]  xl:text-[17px] text-[16px] font-medium">
                    {copilotList.map((useCase, index) => (
                      <li key={index} className="">
                        <h4 className="inline font-bold 4xl:text-[22px] text-[18px] leading-tight">
                          {useCase.title}
                        </h4>
                        : {useCase.desc}
                      </li>
                    ))}
                  </ul>
                  <h3 className="4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] mt-[30px] lg:mt-[49px] font-bold leading-tight">
                    {t("agentTitle")}
                  </h3>
                  <p className="4xl:text-[20px] xl:text-[17px] text-[16px] mt-5">
                    {t("agentDesc")}
                  </p>
                  <p className="4xl:text-[20px] xl:text-[17px] text-[16px] mt-5">
                    {t("agentDescOne")}
                  </p>
                  <p className="4xl:text-[20px] xl:text-[17px] text-[16px] mt-5">
                    {t("agentDescTwo")}
                  </p>
                  <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[20px] mt-[30px] lg:mt-[49px] font-bold leading-tight">
                    {t("application")}
                  </h3>
                  <ul className="list-none marker:text-black marker:text-xl mt-5 space-y-5 text-black 4xl:text-[20px] xl:text-[17px] text-[16px] leading-tight font-medium">
                    {agentUseCases.map((useCase, index) => (
                      <li key={index} className="">
                        <h4 className="inline font-bold 4xl:text-[22px] text-[18px] leading-tight">
                          {useCase.title}
                        </h4>
                        : {useCase.desc}
                      </li>
                    ))}
                  </ul>{" "}
                </div>

                <h2 className="md:mt-[50px] mt-[40px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("bot")}
                </h2>
                <p className="4xl:text-[20px] xl:text-[17px] text-[16px] mt-5">
                  {t("botdesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className="4xl:text-[24px]  2xl:text-[21px] xl:text-[20px] text-[20px] mt-[30px] lg:mt-[49px]  font-bold  custom-container leading-tight ">
          {t("auto")}
        </h3>
        <div className="xl:block hidden mt-5">
          <Image
            src={t('agentChart')}
            alt="Agents vs. Copilots vs. Bots: What’s the Difference and Why It Matters"
            priority
            height={0}
            width={0}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="xl:hidden block mt-5">
          <Image
            src={t('agentChartMobile')}
            alt="Agents vs. Copilots vs. Bots: What’s the Difference and Why It Matters"
            priority
            height={0}
            width={0}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      <section className="custom-container max-md:px-0">
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] md:mt-[50px] mt-[40px] leading-tight 4xl:pr-[30rem]  max-md:px-[37px]">
          {t("decision")}
        </h2>
        <AITable />
        <div className="grid xl:grid-cols-12 xl:mt-16 mt-10 max-md:px-[35px]">
          <div className="col-span-10">
            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] pb-5 leading-tight">
              {t("real")}
            </h2>

            {caseStudies.map((item, index) => (
              <div key={index} className={index > 0 ? "mt-10" : "mt-3"}>
                <h3 className="font-semibold 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px]">
                  {item.title}
                </h3>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {item.desc}
                </p>
              </div>
            ))}
            <div className="md:mt-[50px] mt-[40px]">
              <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                {t("toolTitle")}
              </h2>
              <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("toolDesc")}
              </p>
              <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                {t("toolDecs1")}
              </p>{" "}
            </div>
            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
              {t("toolLink")}
              <Link
                className="text-[#0092E0] underline transition duration-300 ease-out hover:text-gray-400"
                href="https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting/"
                target="_blank"
              >
                {t("toolLink1")}
              </Link>
              {t("toolLink2")}
            </p>
            <h2 className="pb-4 font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] xl:mt-[80px] mt-[40px] leading-tight">
              {t("faq")}
            </h2>
          </div>
        </div>
      </section>
      <section className="custom-container max-md:px-0 mt-[29px] xl:mt-[30px]">
        <FAQAccordion faqData={faqData} />
      </section>

      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </div>
  );
}

const AITable = () => {
  const t = useTranslations("agentCopilot");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const { data } = blogsContent.agentCopilot;
  return (
    <div className="py-8">
      <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full border-separate border-spacing-y-1">
          <thead>
            <tr className="bg-[#527391] text-left 4xl:text-[22px] xl:text-[20px] font-semibold text-white">
              <th className="p-3 pl-10">{t("scenario")}</th>
              <th className="p-3">{t("task")}</th>
              <th className="p-3">{t("decisionTitle")}</th>
              <th className="p-3 pr-10">{t("recommended")}</th>
              <th className="p-3">{t("justification")}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className={`${row.color} border-t border-gray-200`}>
                <td className="p-3 pl-10 4xl:text-[20px] xl:text-[18px] text-[14px]">
                  {row.scenario}
                </td>
                <td className="p-3 4xl:text-[20px] xl:text-[18px] text-[14px]">
                  {row.complexity}
                </td>
                <td className="p-3 4xl:text-[20px] xl:text-[18px] text-[14px]">
                  {row.criticality}
                </td>
                <td className="p-3 4xl:text-[20px] xl:text-[18px] text-[14px]">
                  {row.tool}
                </td>
                <td className="p-3 4xl:text-[20px] xl:text-[18px] text-[14px]">
                  {row.justification}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-2">
        {data.map((row, idx) => (
          <div
            key={idx}
            className={`${row.color} border border-gray-200 px-[35px] p-4 space-y-1`}
          >
            <div className="grid grid-cols-2 gap-y-4 gap-x-4">
              {/* First column pair */}
              <div>
                <p className="font-bold text-[#527391] text-[14px]">
                  {t("scenario")}
                </p>
                <p className="text-[14px] mt-2">{row.scenario}</p>
              </div>
              <div>
                <p className="font-bold text-[#527391] text-[14px]">
                  {t("task")}
                </p>
                <p className="text-[14px] mt-2">{row.complexity}</p>
              </div>

              {/* Second column pair */}
              <div>
                <p className="font-bold text-[#527391] text-[14px]">
                  {t("decisionTitle")}
                </p>
                <p className="text-[14px] mt-2">{row.criticality}</p>
              </div>
              <div>
                <p className="font-bold text-[#527391] text-[14px]">
                  {t("recommended")}
                </p>
                <p className="text-[14px] mt-2">{row.tool}</p>
              </div>

              {/* Full-width Justification */}
              <div className="col-span-2">
                <p className="font-bold text-[#527391] text-[14px]">
                  {t("justification")}
                </p>
                <p className="text-[14px] mt-2">{row.justification}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
