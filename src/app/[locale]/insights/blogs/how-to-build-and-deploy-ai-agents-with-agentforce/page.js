"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import FilteredBlogCarouse from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";


const faqs = [
  {
    "question": "What is Agentforce, and how does it help build AI agents?",
    "answer": "Agentforce is Salesforce’s agentic AI platform that lets you create intelligent agents without coding. Using tools like Agent Builder and Prompt Builder, you can automate workflows, integrate with CRM data, and deploy digital coworkers that reason, plan, and act on business tasks."
  },
  {
    "question": "Can I build an AI agent in Agentforce without coding skills?",
    "answer": "Yes. Agentforce provides a low-code, drag-and-drop interface. Business users, Salesforce admins, and product owners can build, train, and deploy agents using natural-language prompts and visual workflows—no advanced coding required."
  },
  {
    "question": "What kinds of AI agents can I create with Agentforce?",
    "answer": "You can build agents for customer support, sales assistance, HR onboarding, finance automation, IT helpdesks, marketing personalization, and compliance monitoring. Each agent is tailored to specific business processes and integrates with Salesforce data."
  },
  {
    "question": "How do I ensure my AI agent stays accurate and secure over time?",
    "answer": "Continuous training and monitoring are key. Feed your agent updated data, run regular audits with Salesforce’s Trust Layer, and track metrics like resolution rates and user satisfaction. This ensures accuracy, compliance, and long-term performance."
  },
  {
    "question": "What systems can Agentforce agents connect with?",
    "answer": "Agents integrate with Salesforce CRM objects, Data Cloud, external APIs, ERPs,knowledge bases, and service tools. This gives them real-time access to customer and business data, enabling smarter decisions and actions."
  },
  {
    "question": "How do I deploy my first AI agent with Agentforce?",
    "answer": "You’ll follow a clear process: define your agent’s purpose, use Agent Builder to design workflows, train the agent with data, build prompts, connect systems, run simulations, and finally deploy and monitor it in production."
  }
]

export default function Page() {
  const t = useTranslations("firstAiAgent");
  const locale = useLocale();
  const blogsContent = changeLocalization(locale, {
    en: enContent,
    es: esContent,
    fr: frContent,
  });
  const {
    mainData,
    whatIsAgenticData,
    meetData,
    stepsData,
    whatPowerData,
    whatKindData,
    keepYourData,
    readyData,
    schemaData
  } = blogsContent.firstAiAgent;
  const fullUrl = "https://www.rialtes.com/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce";
  const currUrl = useUrl();
  return (
    <div className="min-h-screen">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords="Partners, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce/`}
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
            src="/images/blog/artificial-intelligence-data-visualization.webp"
            alt={t("bannerAlt")}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/artificial-intelligence-data-visualization-mobile.webp"
            alt={t("bannerAlt")}
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
            <BlogSocialIcons fullUrl={fullUrl} topic="Salesforce Agentforce" date="02 September 2025" />

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px]">{t('blogTitle')}</h1>

              <div className="xl:mt-[38px] mt-[33px]">
                {
                  mainData.map((data, ind) => {
                    return (
                      <div key={ind}>
                        <h3 className="font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">{data.title}</h3>

                        <UnorderedList arrName={data.desc} ulClassName="mt-3 space-y-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                        <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[60px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                        <p
                          className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                          dangerouslySetInnerHTML={{ __html: data.desc2 }}
                        />
                      </div>
                    )
                  })
                }
              </div>

              {/* what is agentic ai section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('whatAgenticTitle')} </h2>
                {
                  whatIsAgenticData.map((data, ind) => {
                    return (
                      <p
                        key={ind}
                        className={`${ind == 0 ? "mt-[22px] xl:mt-[30px]" : "mt-5"} 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                        dangerouslySetInnerHTML={{ __html: data }}
                      />
                    )
                  })
                }
              </div>


              {/* meet section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('meetTitle')}</h2>
                {
                  meetData.map((data, ind) => {
                    return (
                      <div key={ind}>
                        <h3 className="mt-[22px] xl:mt-[30px] font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">{data.title}</h3>

                        <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                        <ul className="pl-[36px] lg:pl-[46px] space-y-3 mt-5">
                          {data.list.map((elems, idx) => (
                            <li
                              key={idx}
                              className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium"
                            >
                              <h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                {elems.title}
                              </h4>{" "}
                              {elems.desc}
                            </li>
                          ))}
                        </ul>
                        <p
                          className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                          dangerouslySetInnerHTML={{ __html: data.desc2 }}
                        />
                      </div>
                    )
                  })
                }
              </div>

              {/* steps section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t('stepTitle')}
                </h2>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('stepDesc')}
                </p>

                {/* Steps Content */}
                <div className="md:mt-[65px] mt-[40px] relative py-[30px] md:py-[60px]">
                  <div className="absolute top-0 xl:left-[-40px] 3xl:left-[-80px] 4xl:left-[-120px] w-full 4xl:w-[1730px] lg:w-[1030px] xl:w-[1220px] 3xl:w-[1450px] h-full bg-[#F4F4F4] z-0" />
                  {stepsData.map((data, ind) => (
                    <div
                      key={ind}
                      className={`relative grid grid-cols-12 py-[32px] px-[30px] border-b border-[#D9D9D9] last:border-b-0`}>
                      <div className="col-span-1">
                        <p className="text-[#1486E6] font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight mb-3">
                          STEP
                        </p>
                        <p className="inline 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] text-white bg-[#1486E6] py-2 px-6">
                          {ind + 1}
                        </p>
                      </div>
                      <div className="col-span-11 md:pl-[40px] pl-[60px]">
                        <h3 className="font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">
                          {data.title}
                        </h3>
                        <p
                          key={`desc2-${ind}`}
                          className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] text-[#333]"
                          dangerouslySetInnerHTML={{ __html: data.desc }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* what powers section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t('whatPowerTitle')}
                </h2>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('whatPowerDesc')}
                </p>
                <div>
                  {whatPowerData.map((elem, id) => (
                    <div className="md:flex mt-24 md:mt-10 py-[34px] xl:py-[30px] px-[26px] md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative md:ml-[100px] sm:w-[80%] md:w-auto lg:w-[80%] xl:w-auto" key={id}>
                      <p className="md:absolute max-md:mt-[-80px] sm:mt-[-70px] md:mt-0 md:top-[50%] md:translate-y-[-50%] 4xl:w-[320px] lg:w-[300px] md:w-[280px] w-fit md:left-[-80px] bg-[#006FBE] text-white font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] px-[40px] py-[22px] leading-tight">{elem.title}</p>
                      <div className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[200px] lg:ml-[240px] 4xl:ml-[260px]" dangerouslySetInnerHTML={{ __html: elem.desc }} />
                    </div>
                  ))}
                </div>
                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('whatPowerDesc2')}
                </p>
              </div>

              {/* what kind section */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                  {t('whatKindTitle')}
                </h2>
                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('whatKindDesc')}
                </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] sm:w-[90%] md:w-full 4xl:w-[1250px]">
                  {whatKindData.map((elem, id) => (
                    <div className="4xl:p-[36px] p-[22px] border border-[#707070]" key={id}>
                      <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.title}</h3>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: elem.desc }} />
                    </div>
                  ))}
                </div>
                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {t('whatKindDesc2')}
                </p>
              </div>

              {/* keep your section */}
              <div className="md:mt-[50px] mt-[40px]">
                {
                  keepYourData.map((data, ind) => (
                    <div key={ind}>
                      <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                      <p
                        className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                      <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-3 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-decimal font-medium" />

                    </div>
                  ))
                }
              </div>

              {/* ready data */}
              <div className="md:mt-[50px] mt-[40px]">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('readyTitle')} </h2>
                {
                  readyData.map((data, ind) => {
                    return (
                      <p
                        key={ind}
                        className={`${ind == 0 ? "mt-[22px] xl:mt-[30px]" : "mt-5"} 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                        dangerouslySetInnerHTML={{ __html: data }}
                      />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq section */}
      <section className="xl:mt-[80px] mt-[40px] custom-container">
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">{t('faqTitle')}</h2>
        <div className="mt-[29px] xl:mt-[34px]">
          <FAQAccordion faqData={faqs} />
        </div>
      </section>
      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
        <FilteredBlogCarouse url={currUrl} />
      </section>
    </div>
  );
}
