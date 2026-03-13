"use client";
import Image from "next/image";
import FilteredBlogCarousel from "@/app/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from "@/app/components/blogSocialIcons";
import UnorderedList from "@/app/components/unorderedList";
import styles from "../../../temp.module.css";

const mainData = [
  "Most SAP failures don’t start with bad technology. They start with outdated support models. According to a <a href='https://www.gartner.com/en/articles/top-technology-trends-2026' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Gartner survey</a>, more than 70 % of enterprise IT leaders say rising application complexity is one of their top three operational challenges, and that complexity has only increased as organizations adopt S/4HANA cores, cloud extensions, SAP BTP, Ariba, SuccessFactors, CPI, and an expanding ecosystem of third-party applications.¹ Yet many enterprises still rely on reactive, ticket-driven support models that were designed for older, simpler landscapes — where systems were fewer, changes were slower, and integrations were minimal.",
  "The result is predictable. Research from IDC estimates that unplanned downtime costs large enterprises between $2.5 million and $6.5 million per hour, with application failures and slow response times among the leading contributors to lost productivity. Rising support costs, recurring incidents, and long resolution cycles erode business confidence and force functional teams to build workarounds outside SAP.",
  "This is why CXOs are rethinking what SAP support really means. And it’s why SAP Managed Services has moved out of the category of operational expense and into the realm of <a href='https://www.rialtes.com/insights/blogs/sap-managed-services-enterprise-ai-strategy' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>strategic business investment</a>.",
];
export const whySapManagedServices = {
  sectionTitle: "Why SAP Managed Services Matter to Leadership",

  highlights: [
    {
      id: 1,
      title: "Faster decision-making",
      description: "powered by reliable data and consistent system performance",
    },
    {
      id: 2,
      title: "Process optimization",
      description: "through continuous improvements rather than one-off fixes",
    },
    {
      id: 3,
      title: "Innovation",
      description: "without fear that change will destabilize core operations",
    },
  ],

  paragraphs: [
    "For <span style='color: #0A6BB8;font-weight:bold'>CIOs</span>, SAP Managed Services reduce operational noise. Instead of teams constantly reacting to incidents, outages, and performance issues, CIOs gain a predictable, well-governed SAP environment where problems are identified early and resolved systematically. This frees IT leadership to focus on architecture decisions, modernization initiatives, and enabling the business, rather than firefighting.",

    "For <span style='color: #0A6BB8;font-weight:bold'>CFOs</span>, the value shows up in cost predictability and control. Managed services replace unpredictable support spend and emergency consulting with structured service models, clear SLAs, and transparent pricing. Downtime is reduced, rework is minimized, and SAP investments deliver measurable returns rather than ongoing surprises on the balance sheet.",

    "For <span style='color: #0A6BB8;font-weight:bold'>COOs</span>, protecting business continuity is non-negotiable. SAP systems sit at the heart of order processing, finance, supply chain, and workforce operations. Managed services ensure these systems remain stable, responsive, and resilient across regions and time zones, even as volumes grow and processes change.",

    "More importantly, SAP Managed Services allow leadership teams to shift their focus from keeping systems running to driving outcomes that matter. When <a href='https://www.rialtes.com/insights/blogs/sap-consulting-trust-through-accountability' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'> SAP is stable, governed, and continuously optimized</a>, it stops being a maintenance burden and becomes a strategic platform for:",
  ],
};
const whyTraditionalData = [
  {
    title: "Why Traditional SAP Support Models Are Breaking Down",

    desc: "Legacy SAP support was built around stability.",
    desc1: "Modern enterprises are built around change",
    desc2: "Here’s where the mismatch shows up:",
    list: [
      "<strong>Reactive issue handling</strong> instead of proactive system monitoring",
      "<strong>Siloed functional and technical teams</strong> that don’t see end-to-end impact",
      "<strong>Limited availability outside business hours,</strong> despite global operations",
      "<strong>Rising dependency on niche skills</strong> that are hard to retain in-house",
    ],

    extraParagraphs: [
      "As SAP landscapes expand across regions and platforms, even small issues can ripple across finance, supply chain, HR, and customer operations. When support teams are only responding after something breaks, business risk compounds quickly.",
      "This is no longer an inconvenience to support.",
      "It’s an operational liability.",
    ],
  },
];

const theHiddenCost = [
  {
    title: "The Hidden Cost of Reactive SAP Support",

    desc: "Downtime doesn’t just impact IT metrics",
    desc2: "It hits revenue, compliance, and customer trust.",
    desc3: "When SAP systems go down or underperform:",
    list: [
      "Order processing slows or stops",
      "Financial closes get delayed",
      "Compliance reporting becomes risky",
      "Business users revert to manual workarounds",
    ],

    extraParagraphs: [
      "Over time, this leads to a familiar pattern. IT spends more. Business value declines. Leadership questions the SAP investment itself.",
      "This is why leading enterprises are moving away from break-fix support and toward managed services models that prioritize prevention, performance, and continuous optimization.",
    ],
  },
];

const whatAreManage = [
  {
    title: "What Are SAP Managed Services?",

    desc: "SAP Managed Services go beyond traditional Application Management Services (AMS).",
    desc1: "At their core, they provide:",
    list: [
      "<strong>Proactive monitoring and incident prevention</strong>",
      "<strong>End-to-end ownership of SAP landscapes</strong>",
      "<strong>Continuous system optimization</strong>",
      "<strong>Business-aligned SLAs, not just ticket closures</strong>",
    ],

    extraParagraphs: [
      "Instead of asking “How fast can we fix this issue?”, managed services ask:",
      "“How do we stop this from happening again?”",
      "“How do we make SAP work better for the business next quarter?”",
      "That shift changes everything.",
    ],
  },
];

const intruducingSAPDigital = [
  {
    title: "Introducing SAP Digital Desk: A Modern SAP Support Model",

    desc: [
      " <a href='https://www.rialtes.com/services/business-transformation/sap-managed-services-provider' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>SAP Digital Desk</a> is Rialtes’ next-generation managed services platform, designed for modern, cloud-enabled SAP environments. It brings together functional expertise,",
      "technical depth, automation, and governance into a single, outcome-driven support model.",
      "Rather than treating SAP as a static system to be maintained, SAP Digital Desk treats it as a living platform that must evolve with the business.",
    ],
    boldHeading: "What Makes SAP Digital Desk Different",

    list: [
      "Proactive system health monitoring",
      "Predictive issue detection",
      "Integrated functional and technical suppor",
      "Continuous improvement is built into the engagement model",
    ],

    desc1: "The focus shifts from firefighting to foresight.",
  },
];

const By247SapSupport = [
  {
    title: "24x7 SAP Support That Matches Global Business Reality",

    desc: [
      "SAP doesn’t sleep. Neither should support",
      "Rialtes delivers 24x7 “follow-the-sun” SAP managed services, ensuring uninterrupted coverage across regions, time zones, and business cycles.",
      "This model includes:",
    ],

    list: [
      "Always-on system monitoring",
      "Real-time incident response",
      "Continuous service continuity, regardless of geography",
    ],

    desc1:
      "Whether your teams are in North America, Europe, or Asia-Pacific, SAP Digital Desk ensures consistent support without regional blind spots.",
  },
];

const whyEnterPricesChoose = [
  {
    title: "Why Enterprises Choose Rialtes for SAP Managed Services",
    des: "Rialtes isn’t just a support vendor. We’re a long-term SAP partner.",
    boldTitle: "Why Rialtes:",

    list: [
      "Global SAP-certified partner with presence in India, USA, Canada, and Singapore",
      "Deep expertise across S/4HANA, SAP BTP, cloud integrations, and industry solutions",
      "Proven delivery through SAP Digital Desk",
      "Strong governance, compliance, and security frameworks",
      "A support model designed for evolution, not stagnation",
    ],
  },
];

export const supportModels = {
  title: "Flexible SAP Support Delivery Models",
  des: "Every enterprise runs SAP differently. Support should adapt accordingly.",
  footerText:
    "Each model is designed to align with operational needs, risk tolerance, and budget realities.",
  models: [
    {
      id: 1,
      title: "24x7 Follow-the-Sun Global Support",
      description:
        "Always-on monitoring, incident management, and resolution across time zones. Ideal for mission-critical SAP environments with zero tolerance for downtime.",
    },
    {
      id: 2,
      title: "Hybrid Delivery Model (Onsite + Offshore)",
      description:
        "A strategic mix of onsite consultants for business alignment and offshore SAP Centers of Excellence for scale and cost efficiency. This model balances personalization with performance.",
    },
    {
      id: 3,
      title: "Onsite Delivery Model",
      description:
        "SAP experts embedded within your organization for high-touch collaboration. Best suited for critical programs, complex transformations, and executive-level stakeholder alignment.",
    },
    {
      id: 4,
      title: "Fully Offshore Model",
      description:
        "100% remote delivery from SAP Centers of Excellence in India and Singapore. Ideal for steady-state AMS, enhancements, and cost-optimized long-term support.",
    },
  ],
};

const faqData = [
  {
    question: "What are SAP Managed Services?",
    answer:
      "SAP Managed Services provide ongoing, proactive management of SAP systems, including monitoring, support, optimization, and innovation, beyond traditional break-fix support.",
  },
  {
    question: "How are SAP Managed Services different from AMS?",
    answer:
      "AMS focuses on issue resolution. Managed Services focus on system health, performance, and continuous improvement aligned with business goals.",
  },
  {
    question: "Is SAP Managed Services suitable for S/4HANA?",
    answer:
      "Yes. In fact, S/4HANA’s complexity makes managed services essential for stability, performance, and scalability.",
  },
  {
    question: "Can SAP Managed Services reduce costs?",
    answer:
      "Yes. By preventing issues, optimizing resources, and reducing downtime, enterprises often see lower total cost of ownership over time.",
  },
  {
    question: "How does SAP Digital Desk support global operations?",
    answer:
      "Through a follow-the-sun delivery model with 24x7 coverage, supported by global SAP Centers of Excellence.",
  },
];

const howSalesforce = [
  {
    datePageTitle: "Managed Services",
    date: "11-March-2026",
    pageTitle:
      "What Is SAP Managed Services? A Strategic Guide for Enterprise SAP Support",
    theEnterPriseSupportTitle:
      "The Enterprise SAP Support Problem No One Talks About",
    faqTittle: "FAQs: SAP Managed Services",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "What Is SAP Managed Services? A Strategic Guide for Enterprise SAP Support",
  description:
    "A strategic guide to SAP managed services explaining how enterprises manage, optimize, and support complex SAP landscapes for long-term business value.",
  image: "https://www.rialtes.com/images/blogs/sap-managed-services-guide.webp",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/insights/blogs/sap-managed-services-enterprise-support-guide",
  },
  datePublished: "2026-03-11",
  mainEntity: {
    "@type": "FAQPage",
    name: "SAP Managed Services FAQs",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are SAP Managed Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SAP Managed Services provide ongoing, proactive management of SAP systems, including monitoring, support, optimization, and innovation, beyond traditional break-fix support.",
        },
      },
      {
        "@type": "Question",
        name: "How are SAP Managed Services different from AMS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AMS focuses on issue resolution. Managed Services focus on system health, performance, and continuous improvement aligned with business goals.",
        },
      },
      {
        "@type": "Question",
        name: "Is SAP Managed Services suitable for S/4HANA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. In fact, S/4HANA’s complexity makes managed services essential for stability, performance, and scalability.",
        },
      },
      {
        "@type": "Question",
        name: "Can SAP Managed Services reduce costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. By preventing issues, optimizing resources, and reducing downtime, enterprises often see lower total cost of ownership over time.",
        },
      },
      {
        "@type": "Question",
        name: "How does SAP Digital Desk support global operations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Through a follow-the-sun delivery model with 24x7 coverage, supported by global SAP Centers of Excellence.",
        },
      },
    ],
  },
};
export default function Page() {
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/sap-managed-services-enterprise-support-guide";
  const currUrl = useUrl();

  return (
    <section className="min-h-screen">
      <Seo
        title="SAP Managed Services: A Strategic Guide for CXOs | Rialtes"
        description="Explore SAP managed services in this strategic guide to enterprise SAP support and learn how organizations manage and optimize SAP landscapes."
        keywords="Partners, website, welcome"
        canonical={
          "https://www.rialtes.com/insights/blogs/sap-managed-services-enterprise-support-guide"
        }
      />

      <Script
        id="schema-clinical"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/insights/blogs/sap-managed-services-strategic-guide-enterprise-support/sap-managed-services-guide.webp"
            alt="Electric vehicle charging port with glowing energy streams representing power and clean technology"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/insights/blogs/sap-managed-services-strategic-guide-enterprise-support/mobile-banner.webp"
            alt="Electric vehicle charging port with glowing energy streams representing power and clean technology"
            priority
            height={250}
            width={375}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="4xl:col-span-12 xl:col-span-10 col-span-1">
            <div className="sm:flex justify-between">
              <div>
                <span
                  className={`${styles.paragraph20} text-[#0092E0] font-medium`}
                >
                  {howSalesforce[0].datePageTitle}
                </span>
                <span className={`${styles.paragraph20} text-[#ACACAC] px-2`}>
                  |
                </span>
                <span className="max-sm:block max-sm:mt-2">
                  {howSalesforce[0].date}
                </span>
              </div>

              <div>
                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                  <BlogSocialIcons fullUrl={fullUrl} />
                </div>
              </div>
            </div>

            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className={`${styles.heading2} pb-5`}>
                {howSalesforce[0].pageTitle}
              </h1>
              <span className={`${styles.blogPara20} mt-10 font-bold`}>
                {howSalesforce[0].theEnterPriseSupportTitle}
              </span>

              <div className="xl:mt-[25px] mt-[33px]">
                {mainData.map((data, ind) => {
                  return (
                    <p
                      key={ind}
                      className={`${styles.blogPara20} mt-5`}
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  );
                })}
              </div>
              {whyTraditionalData.map((data, ind) => (
                <div className="md:mt-[50px] mt-[40px]" key={ind}>
                  <h2 className={`${styles.blogHeading2}`}>{data.title}</h2>

                  <p
                    className={`${styles.blogPara20} mt-[29px] xl:mt-[30px]`}
                    dangerouslySetInnerHTML={{ __html: data.desc }}
                  />
                  <p
                    className={`${styles.blogPara20}`}
                    dangerouslySetInnerHTML={{ __html: data.desc1 }}
                  />
                  <p
                    className={`${styles.blogPara20} mt-6`}
                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                  />

                  <UnorderedList
                    arrName={data.list}
                    ulClassName={`${styles.blogPara20} mt-5 space-y-2 xl:pl-14 pl-5 font-medium list-disc`}
                  />

                  {data.extraParagraphs?.map((para, i) => (
                    <p
                      key={i}
                      className={`${styles.blogPara20} mt-5`}
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}
                </div>
              ))}
              {theHiddenCost.map((data, ind) => (
                <div className="md:mt-[50px] mt-[40px]" key={ind}>
                  <h2 className={`${styles.blogHeading2}`}>{data.title}</h2>

                  <p
                    className={`${styles.blogPara20} mt-[29px] xl:mt-[30px]`}
                    dangerouslySetInnerHTML={{ __html: data.desc }}
                  />
                  <p
                    className={`${styles.blogPara20}`}
                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                  />
                  <p
                    className={`${styles.blogPara20} mt-6`}
                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                  />

                  <UnorderedList
                    arrName={data.list}
                    ulClassName={`${styles.blogPara20} mt-5 space-y-2 xl:pl-14 pl-5 font-medium list-disc`}
                  />

                  {data.extraParagraphs?.map((para, i) => (
                    <p
                      key={i}
                      className={`${styles.blogPara20} mt-5`}
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}
                </div>
              ))}

              {whatAreManage.map((data, ind) => (
                <div className="md:mt-[50px] mt-[40px]" key={ind}>
                  <h2 className={`${styles.blogHeading2}`}>{data.title}</h2>

                  <p
                    className={`${styles.blogPara20} mt-[29px] xl:mt-[30px]`}
                    dangerouslySetInnerHTML={{ __html: data.desc }}
                  />
                  <p
                    className={`${styles.blogPara20} mt-6`}
                    dangerouslySetInnerHTML={{ __html: data.desc1 }}
                  />

                  <UnorderedList
                    arrName={data.list}
                    ulClassName={`${styles.blogPara20} mt-5 space-y-2 xl:pl-14 pl-5 font-medium list-disc mb-10`}
                  />

                  {data.extraParagraphs?.map((para, i) => (
                    <p
                      key={i}
                      className={`${styles.blogPara20}`}
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}
                </div>
              ))}

              {intruducingSAPDigital.map((data, ind) => (
                <div className="md:mt-[50px] mt-[40px]" key={ind}>
                  <h2 className={`${styles.blogHeading2}`}>{data.title}</h2>

                  {data.desc?.map((para, i) => (
                    <p
                      key={i}
                      className={`${styles.blogPara20} mt-[29px] xl:mt-[30px]`}
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}
                  <h3 className={`${styles.blogPara20} mt-5 font-bold`}>
                    {data.boldHeading}
                  </h3>

                  <UnorderedList
                    arrName={data.list}
                    ulClassName={`${styles.blogPara20} mt-5 space-y-2 xl:pl-14 pl-5 font-medium list-disc`}
                  />
                  <p
                    className={`${styles.blogPara20

                    } mt-6`}
                    dangerouslySetInnerHTML={{ __html: data.desc1 }}
                  />
                </div>
              ))}

              {By247SapSupport.map((data, ind) => (
                <div className="md:mt-[50px] mt-[40px]" key={ind}>
                  <h2 className={`${styles.blogHeading2}`}>{data.title}</h2>

                  {data.desc?.map((para, i) => (
                    <p
                      key={i}
                      className={`${styles.blogPara20} mt-[29px] xl:mt-[30px]`}
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}

                  <UnorderedList
                    arrName={data.list}
                    ulClassName={`${styles.blogPara20} mt-5 space-y-2 xl:pl-14 pl-5 font-medium list-disc`}
                  />
                  <p
                    className={`${styles.blogPara20} mt-6`}
                    dangerouslySetInnerHTML={{ __html: data.desc1 }}
                  />
                </div>
              ))}

              <section className="py-16">
                <div>
                  <div className="mb-12">
                    <h2 className={`${styles.blogHeading2}`}>
                      {" "}
                      {supportModels.title}
                    </h2>

                    <p
                      className={`${styles.blogPara20} mt-6`}
                      dangerouslySetInnerHTML={{ __html: supportModels.des }}
                    />
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                    {supportModels.models.map((item) => (
                      <div key={item.id} className="xl:w-[420px]">
                        <div className="bg-[#1486E6] text-white 4xl:text-[36px] 2xl:text-[34px] xl:text-[32px] md:text-[30px] text-[28px] font-bold w-[4rem] h-[4rem] flex items-center justify-center mb-4">
                          {item.id}
                        </div>
                        <h3 className="font-bold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] text-[19px]  leading-tight">
                          {item.title}
                        </h3>
                        <p className={`${styles.blogPara20} mt-6`}>
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p
                    className={`${styles.blogPara20} mt-12`}
                    dangerouslySetInnerHTML={{
                      __html: supportModels.footerText,
                    }}
                  />
                </div>
              </section>

              <section>
                <div>
                  <div className="mb-5">
                    <h2 className={`${styles.blogHeading2}`}>
                      {whySapManagedServices.sectionTitle}
                    </h2>
                  </div>

                  <div>
                    {whySapManagedServices.paragraphs.map((para, index) => (
                      <p
                        key={index}
                        className={`${styles.blogPara20} mt-5`}
                        dangerouslySetInnerHTML={{
                          __html: para,
                        }}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-10">
                    {whySapManagedServices.highlights.map((item, index) => (
                      <div
                        key={item.id}
                        className="xl:text-left border-b md:border-b-0 md:border-r border-gray-700 pb-6 md:pb-0 md:pr-6 last:border-none"
                      >
                        {index === 2 ? (
                          <p className={`${styles.blogPara20}`}>
                            <span
                              className={`${styles.blogPara20} text-[#0A6BB8] font-bold`}
                            >
                              {item.title},
                            </span>{" "}
                            {item.description}
                          </p>
                        ) : (
                          <>
                            <span
                              className={`${styles.blogPara20} text-[#0A6BB8] font-bold`}
                            >
                              {item.title},
                            </span>
                            <p className={`${styles.blogPara20}`}>
                              {item.description}
                            </p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {whyEnterPricesChoose.map((data, ind) => (
                <div className="md:mt-[50px] mt-[40px]" key={ind}>
                  <h2 className={`${styles.blogHeading2}`}>{data.title}</h2>
                  <p
                    className={`${styles.blogPara20} mt-6 pb-5`}
                    dangerouslySetInnerHTML={{ __html: data.des }}
                  />
                  <span className={`${styles.blogPara20}  font-bold mt-5`}>
                    {data.boldTitle}
                  </span>
                  <UnorderedList
                    arrName={data.list}
                    ulClassName={`${styles.blogPara20} mt-5 space-y-2 xl:pl-14 pl-5 font-medium list-disc`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="xl:mt-[80px] mt-[40px] custom-container">
        <h2 className={`${styles.blogHeading2}`}>
          {howSalesforce[0].faqTittle}
        </h2>
        <div className="mt-[29px] xl:mt-[30px]">
          <FAQAccordion faqData={faqData} />
        </div>
      </section>
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </section>
  );
}
