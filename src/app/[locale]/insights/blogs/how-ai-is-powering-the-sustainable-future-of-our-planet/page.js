"use client";
// pages/blog-detail.js
import Image from "next/image";
import Link from "next/link";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import OrderedList from "@/app/[locale]/components/orderedList";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";

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
  const {
    blogs,
    goalDesc1,
    energyContent,
    smartList,
    faqs,
    climatePara,
    sustainabilityPara,
    thatList,
    trendsList,
    oceanParagraphs,
    oceanUseCases,
    forestUseCases,
    farmingContent,
  } = blogsContent.aiPowerBlog;

  const fullUrl =
    "https://www.rialtes.com/insights/blogs/how-ai-is-powering-the-sustainable-future-of-our-planet";
  const currUrl = useUrl();

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        canonical={
          "https://www.rialtes.com/insights/blogs/how-ai-is-powering-the-sustainable-future-of-our-planet/"
        }
      />

      <Script
        id="schema-discover"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        {/* Desktop Image */}
        <div className="hidden xl:block">
          <Image
            src="/images/blog/sustainability-banner.webp"
            alt="Discover AgentExchange"
            fill
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block xl:hidden">
          <Image
            src="/images/blog/sustain-small-slider.webp"
            alt="Discover AgentExchange"
            height={0}
            width={0}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">
            {/* date and icons */}

            <BlogSocialIcons fullUrl={fullUrl} topic={t('artificial')} date="21 August 2025" />


            <div className="xl:mt-[60px] mt-[42px]">
              <h1
                className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                {t("aiTitle")}
              </h1>
              <div className="xl:mt-[38px] mt-[33px]">
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("aiDesc")}
                </p>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("whatTitle")}
                </h2>

                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("whatDesc")}
                  <Link
                    className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"
                    href={"https://sdgs.un.org/goals/"}
                  >
                    <span className="">{t("goal")}</span>
                  </Link>{" "}
                  {t("goalDesc")}
                </p>

                {goalDesc1.map((data, ind) => {
                  return (
                    <p
                      key={ind}
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  );
                })}
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("howTitle")}
                </h2>

                <div className="mt-[29px] xl:mt-[30px]">
                  {energyContent.map((paragraph, index) => (
                    <p
                      key={index}
                      className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("smartTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("smartDesc")}
                </p>

                <ol
                  className={
                    "list-disc marker:text-xl mt-4  pl-[36px] lg:pl-[56px]  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4"
                  }
                >
                  {smartList.map((item, i) => (
                    <li key={i}>
                      <h3
                        className={
                          "font-bold mt-5 inline 4xl:text-[22px] text-[18px] leading-tight "
                        }
                      >
                        {item.title}{" "}
                      </h3>
                      {item.desc}
                    </li>
                  ))}
                </ol>

                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
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
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("beingTitle")}
                </h2>
                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("beingDesc")}
                </p>

                <ol
                  className={
                    "list-disc  marker:text-xl pl-[36px] lg:pl-[56px]  mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4"
                  }
                >
                  {forestUseCases.map((item, i) => (
                    <li key={i}>
                      <h3
                        className={
                          "font-bold inline 4xl:text-[22px] text-[18px] leading-tight"
                        }
                      >
                        {item.title}{" "}
                      </h3>
                      {item.desc}
                    </li>
                  ))}
                </ol>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("beingDesc1")}
                </p>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("roleTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[30px]">
                  {farmingContent.map((text, i) => (
                    <p
                      key={i}
                      className={
                        "mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      }
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("howAiTitle")}
                </h2>

                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("howAiDesc")}
                </p>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("howAiDesc1")}</p>

                <ol
                  className={
                    "list-disc mt-5 marker:text-xl pl-[36px] lg:pl-[56px] 4xl:text-[20px]  xl:text-[17px] text-[16px] font-medium space-y-4"
                  }
                >
                  {oceanUseCases.map((item, i) => (
                    <li key={i}>
                      <h3
                        className={
                          "font-bold inline 4xl:text-[22px] text-[18px] leading-tight"
                        }
                      >
                        {item.title}{" "}
                      </h3>
                      {item.desc}
                    </li>
                  ))}
                </ol>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("howAiDesc2")}
                </p>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("oceanTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[30px]">
                  {oceanParagraphs.map((text, i) => (
                    <p
                      key={i}
                      className={
                        "mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      }
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("predictTitle")}
                </h2>

                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("predictDesc")}
                </p>
                <OrderedList
                  arrName={trendsList}
                  olClassName="list-disc  marker:text-xl pl-[36px] lg:pl-[56px] mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-3"
                />

                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t("helpDesc")}
                </p>
                <div className="md:mt-[50px] mt-[40px]">
                  <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px leading-tight">
                    {t("ethicalTitle")}
                  </h2>

                  <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("ethicalDesc")}
                  </p>
                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("that")}
                  </p>
                  <OrderedList
                    arrName={thatList}
                    olClassName="list-disc  marker:text-xl pl-[36px] lg:pl-[56px]  mt-4  4xl:text-[20px]  xl:text-[17px] text-[16px] font-medium space-y-3"
                  />

                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    {t("thatDesc")}
                  </p>
                </div>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("goals")}
                </h2>

                <div className="mt-[29px] xl:mt-[30px]">
                  {sustainabilityPara.map((text, i) => (
                    <p
                      key={i}
                      className={
                        "mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      }
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>
              </div>
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t("smarter")}
                </h2>
                <div className="mt-[29px] xl:mt-[30px]">
                  {climatePara.map((text, i) => (
                    <p
                      key={i}
                      className={
                        "mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      }
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="custom-container xl:mt-[80px] mt-[40px]">
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
          {t("faq")}
        </h2>
        <div className="mt-[29px] xl:mt-[30px]">
          <FAQAccordion faqData={faqs} />
        </div>
      </section>

      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </div>
  );
}
