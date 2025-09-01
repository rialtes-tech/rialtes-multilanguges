"use client";
// pages/blog-detail.js
import Image from "next/image";
import Link from "next/link";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import OrderedList from "@/app/[locale]/components/orderedList";

const schemaData = {
  "@context": "https://schema.org",

  "@type": "BlogPosting",

  headline: "How AI Powers The Sustainable Future of Our Planet",

  description:
    "AI is a powerful ally in building a sustainable future by enhancing energy efficiency, protecting forests, preserving biodiversity, and enabling smarter climate solutions.",

  image: "https://www.rialtes.com/images/blog/sustainability-banner.webp",

  author: {
    "@type": "Organization",

    name: "Rialtes",
  },

  publisher: {
    "@type": "Organization",

    name: "Rialtes",

    logo: {
      "@type": "ImageObject",

      url: " https://www.rialtes.com/images/homepage/logo.svg",
    },
  },

  mainEntityOfPage: {
    "@type": "WebPage",

    "@id":
      "https://www.rialtes.com/insights/blogs/how-ai-is-powering-the-sustainable-future-of-our-planet/",
  },

  datePublished: "2025-08-21",

  mainEntity: {
    "@type": "FAQPage",

    name: "AI and Sustainability FAQs",

    acceptedAnswer: [],

    mainEntity: [
      {
        "@type": "Question",

        name: "How is AI transforming energy management?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "AI improves how we generate, store, and use energy. It predicts demand, manages smart grids, and helps optimize performance in real time. Think solar panels that adjust based on weather forecasts or buildings that auto-regulate power consumption.",
        },
      },

      {
        "@type": "Question",

        name: "What are smart grids, and how does AI support them?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Smart grids are energy systems that adjust dynamically based on usage and supply. AI enables them to forecast demand, balance load, detect faults, and reduce outages. The result? Cleaner energy, fewer blackouts, and better integration of renewables like wind and solar.",
        },
      },

      {
        "@type": "Question",

        name: "Can AI help fight deforestation?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Yes. AI analyzes satellite imagery to detect illegal logging, predicts wildfire risks using weather data, and even listens for chainsaws in remote forests. These tools enable conservationists to act more quickly and protect more land more effectively.",
        },
      },

      {
        "@type": "Question",

        name: "Is AI being used to protect biodiversity, too?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Absolutely. AI-powered camera traps can identify species, track migrations, and monitor endangered populations without disturbing them. It’s helping researchers protect wildlife with minimal human intrusion.",
        },
      },

      {
        "@type": "Question",

        name: "What role does AI play in ocean conservation?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "AI-guided underwater drones collect data on temperature, pH, and marine life. Algorithms track illegal fishing by flagging suspicious vessel behavior. It’s all about turning raw ocean data into insight—and action.",
        },
      },

      {
        "@type": "Question",

        name: "Can AI predict natural disasters and climate shifts?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Yes. AI-enhanced models predict floods, hurricanes, and rising sea levels faster and more accurately than traditional systems. That gives governments and communities the time to plan, adapt, and reduce damage.",
        },
      },

      {
        "@type": "Question",

        name: "What are the risks of using AI for environmental goals?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "There are ethical concerns, bias in data, lack of transparency, or using AI in ways that harm local communities or ecosystems. That’s why responsible design, community involvement, and clear accountability are essential.",
        },
      },
    ],
  },
};

export default function Page() {
  const t = useTranslations("aiPowerBlog");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const { blogs, energyContent, smartList,faqs,climatePara,sustainabilityPara , thatList, trendsList, oceanParagraphs,oceanUseCases ,forestUseCases,farmingContent, } = blogsContent.aiPowerBlog;

  const fullUrl =
    "https://www.rialtes.com/insights/blogs/how-ai-is-powering-the-sustainable-future-of-our-planet";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="How AI Can Enable a Sustainable Future for Our Planet | Rialtes"
        description="AI is helping protect the planet and make sustainability scalable, from tracking deforestation to predicting energy demand and preserving biodiversity."
        canonical={
          "https://www.rialtes.com/insights/blogs/how-ai-is-powering-the-sustainable-future-of-our-planet/"
        }
      />

      <Script
        id="schema-discover"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative  h-[350px] md:h-[400px]  4xl:h-[650px] 2xl:h-[500px]">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/blog/sustainability-banner.webp"
            alt="Discover AgentExchange"
            fill
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/blog/sustain-mobile.webp"
            alt="Discover AgentExchange"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      <section
        className="
       custom-container"
      >
        <div className="pt-10 bg-white">
          <div className=" mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black items-center max-w-[1084px] xl:w-[1084px]">
              <div className="sm:mb-0 mb-6">
                <span className="text-[#0092E0]">{t("artificial")}</span>
                <span className="text-[#ACACAC]"> | </span>
                {t("date")}
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
          <div className=" mx-auto">
            <h1
              className="text-[#000000] leading-tight text-[26px] 2xl:text-[48px] 4xl:text-[60px] xl:text-[42px] md:text-[28px] 
                         xl:w-[1000px] 4xl:w-[1150px] pb-6"
            >
              {t("aiTitle")}
            </h1>
          </div>

          <div className=" mx-auto">
            <div className="max-w-[1200px] 4xl:w-[1284px] 2xl:w-[950px] xl:w-[850px]">
              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                {t("aiDesc")}
              </p>

              <div className="py-6 "></div>

              <h2 className=" pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                {t("whatTitle")}
              </h2>

              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px]">
                {t("whatDesc")}
                <Link
                  className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"
                  href={"https://sdgs.un.org/goals/"}
                >
                  <span className="">{t("goal")}</span>
                </Link>
                {t("goalDesc")}
              </p>

              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                {t("goalDesc1")}
              </p>

              <div className="py-6 "></div>

              <h2 className=" pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                {t("howTitle")}
              </h2>

              <div>
                {energyContent.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="py-6 "></div>
              <h2 className=" pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                {t("smartTitle")}
              </h2>
              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                {t("smartDesc")}
              </p>

              <ol
                className={
                  "list-disc marker:text-xl pl-4 text-black 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] font-medium space-y-4"
                }
              >
                {smartList.map((item, i) => (
                  <li key={i}>
                    <h3
                      className={
                        "font-bold inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]"
                      }
                    >
                      {item.title}{" "}
                    </h3>
                    {item.desc}
                  </li>
                ))}
              </ol>

              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mt-5">
                {t("smartDesc1")}
              </p>

              <Image
                src="/images/blog/sus-contain.webp"
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

              <h2 className=" pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                {t("beingTitle")}
              </h2>
              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                {t("beingDesc")}
              </p>

              <ol
                className={
                  "list-disc  marker:text-xl pl-4 text-black 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-4"
                }
              >
                {forestUseCases.map((item, i) => (
                  <li key={i}>
                    <h3
                      className={
                        "font-bold inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]"
                      }
                    >
                      {item.title}{" "}
                    </h3>
                    {item.desc}
                  </li>
                ))}
              </ol>
              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mt-3">
                {t("beingDesc1")}
              </p>

              <h2 className=" pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight mt-10">
                {t("roleTitle")}
              </h2>
              {farmingContent.map((text, i) => (
                <p
                  key={i}
                  className={
                    "text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]"
                  }
                >
                  {text}
                </p>
              ))}
              <h2 className="mt-10 pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                {t("howAiTitle")}
              </h2>

              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                {t("howAiDesc")}
              </p>
              <p className="mt-3">{t("howAiDesc1")}</p>

              <ol
                className={
                  "list-disc mt-3  marker:text-xl pl-4 text-black 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-4"
                }
              >
                {oceanUseCases.map((item, i) => (
                  <li key={i}>
                    <h3
                      className={
                        "font-bold inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]"
                      }
                    >
                      {item.title}{" "}
                    </h3>
                    {item.desc}
                  </li>
                ))}
              </ol>
              <p className="text-black mt-3 pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                {t("howAiDesc2")}
              </p>

              <h2 className="mt-10 pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                {t("oceanTitle")}
              </h2>
              {oceanParagraphs.map((text, i) => (
                <p
                  key={i}
                  className={
                    "text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]"
                  }
                >
                  {text}
                </p>
              ))}

              <h2 className="mt-10 pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                {t("predictTitle")}
              </h2>

              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                {t("predictDesc")}
              </p>
              <OrderedList
                arrName={trendsList}
                olClassName="list-disc  marker:text-xl pl-4 mt-4 text-black 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-3"
              />

              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                {t("helpDesc")}
              </p>
              <h2 className="mt-10 pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                {t("ethicalTitle")}
              </h2>

              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                {t("ethicalDesc")}
              </p>
              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                {t("that")}
              </p>
              <OrderedList
                arrName={thatList}
                olClassName="list-disc  marker:text-xl pl-4 mt-2 text-black 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium space-y-3"
              />

              <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]">
                {t("thatDesc")}
              </p>

              <h2 className="mt-10 pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                {t("goals")}
              </h2>

              <>
                {sustainabilityPara.map((text, i) => (
                  <p
                    key={i}
                    className={
                      "text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]"
                    }
                  >
                    {text}
                  </p>
                ))}
              </>

              <h2 className="mt-10 pb-4 font-semibold text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight">
                {t("smarter")}
              </h2>
              <>
                {climatePara.map((text, i) => (
                  <p
                    key={i}
                    className={
                      "text-black pb-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px]"
                    }
                  >
                    {text}
                  </p>
                ))}
              </>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container max-md:px-0 pb-10">
        <FAQAccordion faqData={faqs} />
      </section>
      <div className="custom-container xl:pr-0 mt-10">
        <BlogsCarousel slides={blogs} />
      </div>
    </div>
  );
}
