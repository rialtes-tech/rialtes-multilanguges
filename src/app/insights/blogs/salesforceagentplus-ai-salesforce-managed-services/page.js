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
  "Salesforce has become the backbone of modern sales, service, and customer engagement. <a href='https://www.grandviewresearch.com/industry-analysis/customer-relationship-management-crm-market' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>IDC says</a> than 60 % of global enterprises cite CRM platforms like Salesforce as the central system of engagement for revenue operations and customer experience, powering everything from revenue forecasting and partner management to marketing automation and AI-driven engagement. ¹ But behind this success, a quiet risk is emerging. Most organizations are still running Salesforce on overstretched internal teams, fragmented vendor support models, and ad-hoc administrators, which was manageable when deployments were simpler. Today, as platforms expand with  <a href='https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Agentforce</a>, Data Cloud, AI automations, and complex cross-cloud and third-party integrations, the support model starts to break down. ",
];

const digitalData = [
  {
    desc: "The symptoms are familiar:",
    list: [
      "Critical updates get delayed ",
      "Security configurations drift without consistent governance ",
      "Backlogs of enhancements pile up ",
      "Incidents take too long to resolve ",
    ],
    desc2:
      "Over time, what once accelerated business becomes an operational bottleneck that undermines agility and disrupts execution. This is why leading enterprises are rethinking how Salesforce is managed — shifting from break-fix, ticket-driven models to strategic managed services that reduce risk, enforce consistency, and enable innovation. Salesforce Managed Services are no longer a tactical support option; they have become a strategic priority for sustainable growth.",
  },
];

const theHiddenCost = [
  {
    title: "The Hidden Cost of Internal Salesforce Management",
    content:
      "On paper, internal Salesforce teams often look efficient. They know the business. They understand existing processes. They’ve kept the platform running for years. But in practice, this model carries invisible risks that compound over time.",
  },
  {
    content:
      "Most enterprises become heavily dependent on a small number of key administrators and architects. When those individuals are unavailable, overloaded, or leave the organization, critical knowledge goes with them. At the same time, internal teams typically operate with limited 24x7 coverage, making it difficult to respond quickly during outages, peak periods, or global incidents. Response times slow. Backlogs grow. Strategic enhancements are repeatedly deferred in favor of short-term fixes.",
  },
  {
    content:
      "As Salesforce ecosystems expand, this pressure intensifies. No single team can realistically master Sales Cloud, Service Cloud, Data Cloud, Agentforce, complex integrations, security frameworks, analytics, and regulatory compliance simultaneously. Each new capability adds operational weight.",
  },
  {
    content:
      "When expertise is stretched thin, platforms stop evolving. Preventive maintenance gives way to firefighting. Innovation slows. User confidence erodes. And operational risk quietly rises.",
  },
];

const runningSalsforce = [
  {
    title: "Running Salesforce Without Risk ",
    content:
      "Salesforce It is the operational backbone for revenue, service, marketing, and customer intelligence. When it underperforms, the impact is felt immediately across forecasting, customer experience, compliance, and decision-making. Platforms this critical cannot be managed casually or reactively.",
  },
  {
    content:
      "As Salesforce becomes more intelligent, more integrated, and more embedded in enterprise operations through AI, Data Cloud, and automation, management models must evolve with it. Basic support and ad-hoc administration are no longer enough. What organizations need is a structured, proactive, and accountable operating model. ",
  },
  {
    content:
      "SalesforceAgent+ is built to deliver exactly that. It provides stability through continuous monitoring and optimization. Governance through standardized controls and best practices. Speed through ready access to certified expertise. And confidence through predictable performance and reduced operational risk. ",
  },
  {
    content:
      "This is not just support. It is long-term assurance that Salesforce will consistently enable growth, innovation, and business outcomes. ",
  },
];

export const phasesData = [
  {
    id: 1,
    title: "Discovery and Revenue Process Alignment",
    timeline: "2–4 weeks",
    owners: "Sales Ops, Finance, IT, Implementation Partner",
    description:
      "This phase sets the foundation. Skipping it is the most common and costly mistake.",
    sections: [
      {
        heading: "What happens in this phase",
        points: [
          "Map current quote-to-cash workflows",
          "Identify pricing models, discounting rules, and approval flows",
          "Document billing scenarios and revenue recognition requirements",
          "Define success metrics for go-live and post-go-live",
        ],
      },
      {
        heading: "Key outputs",
        points: [
          "Revenue process blueprint",
          "Fit-gap analysis for Salesforce Revenue Cloud",
          "Clear scope boundaries to prevent mid-project surprises",
        ],
      },
    ],
    footer:
      "This is where an experienced Salesforce Revenue Cloud implementation partner adds the most value. They challenge assumptions early, before those assumptions turn into technical debt.",
  },
  {
    id: 2,
    title: "Solution Design and Architecture",
    timeline: "3–5 weeks",
    owners: "IT, Architecture Team, Salesforce Partner",
    description: "Once the business model is clear, design begins.",
    sections: [
      {
        heading: "Design focus areas",
        points: [
          "CPQ structure and product catalog hierarchy",
          "Pricing, discounting, and approval logic",
          "Contract lifecycle and amendment scenarios",
          "Billing models and revenue schedules",
          "Integration architecture with ERP and payment systems",
        ],
      },
      {
        heading: "Governance matters here",
        points: [
          "Design decisions should be reviewed through a cross-functional governance model. Every rule added should answer one question: Does this protect revenue or slow it down?",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Configuration and Build",
    timeline: "6–10 weeks",
    owners: "Salesforce Partner, IT, Business SMEs",
    description: "This is where Salesforce Revenue Cloud comes to life.",
    sections: [
      {
        heading: "Configuration best practices",
        points: [
          "Favor configuration over customization wherever possible",
          "Keep CPQ rules simple and readable",
          "Design for scale, not just current volume",
          "Avoid building edge cases into core logic",
        ],
      },
      {
        heading: "What strong partners do differently",
        points: [
          "A strong Salesforce Revenue Cloud consulting team doesn’t just configure features. They actively remove unused rules, redundant dashboards, and overly complex flows that hurt performance later.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Data Readiness and Migration",
    timeline: "Runs parallel to build",
    owners: "IT, Data Team, Partner",
    description:
      "Data issues don’t show up at go-live. They show up on day two.",
    sections: [
      {
        heading: "What needs to be addressed",
        points: [
          "Product and price book accuracy",
          "Contract and subscription history",
          "Billing and invoice records",
          "Customer master data consistency",
        ],
      },
      {
        heading: "Migration approach",
        points: [
          "Clean before you migrate",
          "Migrate only what supports future operations",
          "Validate with business users, not just IT",
        ],
      },
    ],
    footer:
      "Hassle-free data migration is less about tools and more about discipline.",
  },
  {
    id: 5,
    title: "Integration, Testing, and Validation",
    timeline: "4–6 weeks",
    owners: "IT, Finance, Sales Ops",
    description: "Revenue Cloud works best when it’s not isolated.",
    sections: [
      {
        heading: "Common integrations",
        points: [
          "Sales Cloud",
          "ERP systems",
          "Payment gateways",
          "Tax and compliance tools",
        ],
      },
      {
        heading: "Testing focus",
        points: [
          "End-to-end quote-to-cash scenarios",
          "Exception handling",
          "Performance under load",
          "Finance reconciliation checks",
        ],
      },
    ],
    footer: "Testing should mirror real deals, not ideal ones.",
  },
  {
    id: 6,
    title: "Go-Live, Enablement, and Support",
    timeline: "Go-live plus 30–90 days",
    owners: "Business Teams, Partner, IT",
    description: "Go-live is not the finish line. It’s the starting point.",
    sections: [
      {
        heading: "Post go-live priorities",
        points: [
          "Role-based enablement for sales and finance",
          "Monitoring adoption and cycle times",
          "Fine-tuning rules based on real usage",
          "Ongoing support and maintenance",
        ],
      },
    ],
    footer:
      "Strong support teams handle data fixes, admin needs, upgrades, and post-release validation without disrupting daily operations.",
  },
];

const faqData = [
  {
    question: "What is SalesforceAgent+? ",
    answer:
      "SalesforceAgent+ is Rialtes’ managed services offering for continuous Salesforce optimization, governance, and innovation.",
  },
  {
    question: "How is this different from traditional support?",
    answer:
      "Traditional support reacts to issues. SalesforceAgent+ prevents them and drives platform evolution.",
  },
  {
    question: "Can SalesforceAgent+ support AI initiatives?",
    answer:
      "Yes. It includes Agentforce and Einstein GPT enablement with governance.",
  },
  {
    question: "Is this suitable for global enterprises?",
    answer:
      "Yes. The model is built for multi-region, multi-org environments. ",
  },
  {
    question: "Does it replace internal teams? ",
    answer: "No. It complements them and removes operational burden. ",
  },
];

const howSalesforce = [
  {
    datePageTitle: "Managed Services",
    date: "12-Mar-2026",
    pageTitle:
      "How SalesforceAgent+ Helps Enterprises Run Salesforce Without Operational Risk",
    phaseTitle: "Phase",
    timelineTitle: "Timeline",
    primaryOwnersTitle: "Primary owners",
    challengeTitle: "Challenge",
    migrationTitle: "Mitigation",
    faqTittle: "FAQs: Salesforce Managed Services",
    title:
      "Common Salesforce Revenue Cloud Implementation Challenges (and How to Avoid Them)",
    desc: [
      "Salesforce Automotive Cloud becomes the command center where every data signal from the vehicle, the customer, and the dealer converges. Instead of scattering insights across engineering tools, service portals, dealership systems, and telematics platforms, it unifies them into a living, continuously updated profile of each vehicle and its owner.",
      "Across the customer and vehicle lifecycle, Automotive Cloud brings together:",
    ],
    list: [
      {
        title: "Real-time vehicle performance and telemetry",
        desc: "to understand component health, driving patterns, usage intensity, and upcoming maintenance needs.",
      },
      {
        title: "Predictive service alerts ",
        desc: "generated through AI models that detect anomalies before they turn into failures.",
      },
      {
        title: "Warranty claims, repair history, and recall eligibility ",
        desc: "are presented in context instead of being buried in legacy systems.",
      },
      {
        title: "Dealer service logs and communications ",
        desc: "so the OEM always knows how each customer has been served.",
      },
      {
        title: "Customer interactions, preferences, and sentiment ",
        desc: "across WhatsApp, mobile apps, in-dealership touchpoints, and connected vehicle apps.",
      },
      {
        title: "Connected services and subscription models, ",
        desc: "including past purchases, renewal status, and upsell opportunities.",
      },
    ],
    desc2: [
      "What this really means",
      "OEMs, suppliers, and dealers stop operating in a reactionary loop. They no longer wait for a breakdown, a complaint, or a warranty claim to trigger engagement. They already know what the vehicle needs, how urgent the issue is, and the best moment to intervene.",
    ],
  },
];
const predectiveData = [
  {
    title: "What Salesforce Managed Services Should Deliver Today ",
    desc: " <a href='https://www.rialtes.com/insights/blogs/scale-with-salesforce-managed-services-salesforceagentplus' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Modern Salesforce Managed Services</a> are no longer about ticket handling.",
    desc1: "They are about platform ownership. ",
    des2: "Enterprises need partners who can: ",
    list: [
      "Keep systems stable and secure ",
      "Continuously optimize performance ",
      "Enable AI and automation safely",
      "Govern change at scale ",
      "Support global operations 24x7 ",
    ],
    des3: "This requires mature governance, enterprise-grade SLAs, and deep platform expertise. This is exactly what SalesforceAgent+ was built to deliver.",
  },
];

const howSalesforceAgentreduce = [
  {
    title: "How SalesforceAgent+ Reduces Downtime and Admin Dependency",
    desc: "One of the biggest risks in Salesforce operations is over-reliance on individuals. When key admins leave or become overloaded, performance tends to suffer. ",
    desc1: "SalesforceAgent+ eliminates this dependency through:",
    list: [
      "Centralized documentation and governance ",
      "Shared knowledge models ",
      "Redundant expert coverage ",
      "Automated monitoring and alerts",
    ],
    des2: "With proactive system health checks and predictive issue detection, problems are addressed before they impact users.",
    des3: "Downtime drops.",
    des4: "Stability increases.",
    des5: "Business confidence improves. ",
  },
];

const whenShouldEnter = [
  {
    title: "When Should Enterprises Shift to Managed Services? ",
    desc: "Not every organization needs managed services on day one.",
    desc1: "But most reach a tipping point. ",
    des2: "You should consider SalesforceAgent+ when: ",
    list: [
      "Your platform supports multiple business units or regions ",
      "AI and automation initiatives are increasing",
      "Internal teams are overloaded ",
      "Innovation backlogs keep growing ",
      "Incidents take too long to resolve ",
      "Compliance requirements are rising ",
    ],
    des3: "At this stage, managed services are not a cost",
    des4: "They are risk mitigation.",
  },
];

const agentForceAdoption = [
  {
    title: "Agentforce Adoption Services with Rialtes",
    desc: "AI is transforming Salesforce",
    desc1: "But only when implemented correctly.",
    des2: "Rialtes enables safe, scalable Agentforce adoption through:",
    list: [
      "Rapid AI-readiness assessments ",
      "Conversational AI deployment for Sales and Service ",
      "Einstein GPT and intelligent automation ",
      "Agentforce enablement workshops",
      "Pre-built AI bots for operations",
    ],
    des3: "This ensures AI improves productivity without compromising governance or trust.",
  },
];
const introducingData = [
  {
    title:
      "Introducing SalesforceAgent+: Built for Scale, Security, and Speed ",
    desc: "At Rialtes, we go beyond traditional Salesforce support. ",
    desc1:
      "<strong> <a href='https://www.rialtes.com/services/application-services/salesforce-managed-services-provider-salesforceagentplus' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>SalesforceAgent+</a></strong> is our next-generation managed services offering, designed to keep your Salesforce platform future-ready, AI-enabled, and continuously optimized. ",
    des2: "It combines: ",
  },
];
export const featuresData = [
  {
    id: 1,
    icon: "/images/insights/blogs/salesforce-agentplus-blog-help/24.svg",
    title: "24×7 global support",
  },
  {
    id: 2,
    icon: "/images/insights/blogs/salesforce-agentplus-blog-help/ai.svg",
    title: "AI-driven innovation through Agentforce",
  },
  {
    id: 3,
    icon: "/images/insights/blogs/salesforce-agentplus-blog-help/bank.svg",
    title: "Enterprise governance frameworks",
  },
  {
    id: 4,
    icon: "/images/insights/blogs/salesforce-agentplus-blog-help/cloud.svg",
    title: "Deep cross-cloud expertise",
  },
  {
    id: 5,
    icon: "/images/insights/blogs/salesforce-agentplus-blog-help/integration.svg",
    title: "Seamless enterprise integrations",
  },
];
const rialData = [
  {
    title: "SalesforceAgent+ Capabilities",

    list: [
      {
        title: "Transform Sales & Service Cloud Operations",
        desc: "Optimize revenue and service workflows with intelligent case management, AI-powered lead conversion, and omnichannel engagement.",
      },
      {
        title: "Lightning Development & UX Modernization",
        desc: "Custom LWCs, responsive UI, accessibility optimization, and mobile-first experiences. ",
      },
      {
        title: "Seamless MuleSoft Integrations",
        desc: "API-led connectivity with SAP, Oracle, NetSuite, Workday, and more — secured and scalable. ",
      },
      {
        title: "Hassle-Free Data Migrations",
        desc: "Clean, compliant migrations from legacy CRMs with full validation and staging. ",
      },
      {
        title: "Industry Cloud Expertise",
        desc: "Healthcare, Manufacturing, Life Sciences, Education, Automotive, Real Estate, and Transportation — with compliance-ready accelerators.",
      },
      {
        title: "Analytics & Data Cloud Support",
        desc: "Advanced insights using Tableau CRM and unified profiles through Salesforce Data Cloud and Zero Copy architecture.",
      },
      {
        title: "Marketing Cloud & Personalization ",
        desc: "End-to-end journey orchestration, personalization, and engagement analytics. ",
      },
    ],
  },
];

const whyEnterPrises = [
  {
    title: "Why Enterprises Choose Rialtes ",
    desc: "Rialtes brings you technical skills as well as operating maturity. ",
    list: [
      "Certified Salesforce partner",
      "Global delivery model ",
      "Cross-cloud expertise ",
      "Industry specialization",
      "Proven governance frameworks ",
      "AI and automation leadership ",
    ],
    des3: "SalesforceAgent+ is designed to scale with your business, not constrain it.",
  },
];
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SalesforceAgent+: Run Salesforce Without Operational Risk",
  description:
    "SalesforceAgent+ managed services help enterprises reduce operational risk, ensure Salesforce stability, and enable AI-driven innovation at scale.",
  image:
    "https://www.rialtes.com/images/blogs/salesforceagentplus-managed-services.webp",
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
      "https://www.rialtes.com/insights/blogs/salesforceagentplus-ai-salesforce-managed-services",
  },
  datePublished: "2026-03-12",
  mainEntity: {
    "@type": "FAQPage",
    name: "Salesforce Managed Services FAQs",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SalesforceAgent+?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SalesforceAgent+ is Rialtes’ managed services offering for continuous Salesforce optimization, governance, and innovation.",
        },
      },
      {
        "@type": "Question",
        name: "How is this different from traditional support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional support reacts to issues. SalesforceAgent+ prevents them and drives platform evolution.",
        },
      },
      {
        "@type": "Question",
        name: "Can SalesforceAgent+ support AI initiatives?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It includes Agentforce and Einstein GPT enablement with governance.",
        },
      },
      {
        "@type": "Question",
        name: "Is this suitable for global enterprises?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The model is built for multi-region, multi-org environments.",
        },
      },
      {
        "@type": "Question",
        name: "Does it replace internal teams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. It complements them and removes operational burden.",
        },
      },
    ],
  },
};
export default function Page() {
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/salesforceagentplus-ai-salesforce-managed-services";
  const currUrl = useUrl();

  return (
    <section className="min-h-screen">
      <Seo
        title="SalesforceAgent+: AI-Ready Salesforce Managed Services | Rialtes"
        description="SalesforceAgent+ managed services help enterprises reduce operational risk, ensure Salesforce stability, and enable AI-driven innovation at scale."
        keywords="Partners, website, welcome"
        canonical={
          "https://www.rialtes.com/insights/blogs/salesforceagentplus-ai-salesforce-managed-services"
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
            src="/images/insights/blogs/salesforce-agentplus-blog-help/salesforceagentplus-managed-services.webp"
            alt="Electric vehicle charging port with glowing energy streams representing power and clean technology"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/insights/blogs/salesforce-agentplus-blog-help/mobile.webp"
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
          <div className="4xl:col-span-11 xl:col-span-10 col-span-1">
            <div className="sm:flex justify-between">
              <div>
                <span
                  className={`${styles.paragraph20} text-[#0092E0] font-medium`}
                >
                  {howSalesforce[0].datePageTitle}
                </span>
                <span className={`${styles.paragraph20} text-[#ACACAC] px-3`}>
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
              <h1 className={`${styles.heading2}`}>
                {howSalesforce[0].pageTitle}
              </h1>

              <div className="xl:mt-[38px] mt-[33px]">
                {mainData.map((data, ind) => {
                  return (
                    <p
                      key={ind}
                      className={`${styles.paragraph22} mt-5`}
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  );
                })}
                {digitalData.map((data, ind) => (
                  <div className="mt-6" key={ind}>
                    <p
                      className={`${styles.paragraph22} mt-[29px] xl:mt-[30px]`}
                      dangerouslySetInnerHTML={{ __html: data.desc }}
                    />
                    <UnorderedList
                      arrName={data.list}
                      ulClassName={`${styles.paragraph22} mt-5 space-y-2 pl-[26px] font-medium list-disc`}
                    />
                    <p
                      className={`${styles.paragraph22} mt-10`}
                      dangerouslySetInnerHTML={{ __html: data.desc2 }}
                    />
                  </div>
                ))}
              </div>

              {theHiddenCost.map((data, ind) => {
                return (
                  <div key={ind} className="md:mt-[50px] mt-[40px]">
                    {data.title && (
                      <h2 className={`${styles.blogHeading2}`}>{data.title}</h2>
                    )}

                    <p
                      className={`${styles.paragraph22} mt-5`}
                      dangerouslySetInnerHTML={{ __html: data.content }}
                    />
                  </div>
                );
              })}

              {predectiveData.map((data, ind) => (
                <div className="md:mt-[50px] mt-[40px]" key={ind}>
                  <h2 className={`${styles.blogHeading2}`}>{data.title}</h2>
                  <p
                    className={`${styles.paragraph22} mt-[29px] xl:mt-[30px]`}
                    dangerouslySetInnerHTML={{ __html: data.desc }}
                  />

                  <p className={`${styles.paragraph22} mt-5`}>{data.desc1}</p>
                  <p className={`${styles.paragraph22} mt-5`}>{data.des2}</p>

                  <ul className="mt-5 space-y-2 pl-[26px] lg:pl-[46px]">
                    {data.list.map((elem, id) => (
                      <div
                        className={`${styles.paragraph22} font-medium`}
                        key={id}
                      >
                        <li className="list-disc">{elem}</li>
                      </div>
                    ))}
                  </ul>
                  <p className={`${styles.paragraph22} mt-5`}>{data.des3}</p>
                </div>
              ))}

              {introducingData.map((data, ind) => (
                <div className="md:mt-[50px] mt-[40px]" key={ind}>
                  <h2 className={`${styles.blogHeading2}`}>{data.title}</h2>
                  <p className={`${styles.paragraph22} mt-[29px] xl:mt-[30px]`}>
                    {data.desc}
                  </p>
                  <p
                    className={`${styles.paragraph22} mt-5`}
                    dangerouslySetInnerHTML={{ __html: data.desc1 }}
                  />

                  <p className={`${styles.paragraph22} mt-5`}>{data.des2}</p>
                </div>
              ))}
              <section>
                <div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-14">
                    {featuresData.map((item) => (
                      <div key={item.id} className="flex flex-col  gap-4">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={80}
                          height={80}
                        />

                        <p className="4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] font-bold leading-tight">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {howSalesforceAgentreduce.map((data, ind) => (
                <div className="md:mt-[50px] mt-[40px]" key={ind}>
                  <h2 className={`${styles.blogHeading2}`}>{data.title}</h2>
                  <p className={`${styles.paragraph22} mt-[29px] xl:mt-[30px]`}>
                    {data.desc}
                  </p>
                  <p className={`${styles.paragraph22} mt-5`}>{data.desc1}</p>

                  <ul className="mt-5 space-y-2 pl-[26px] lg:pl-[46px]">
                    {data.list.map((elem, id) => (
                      <div
                        className={`${styles.paragraph22} font-medium`}
                        key={id}
                      >
                        <li className="list-disc">{elem}</li>
                      </div>
                    ))}
                  </ul>
                  <p className={`${styles.paragraph22} mt-5`}>{data.des2}</p>

                  <p className={`${styles.paragraph22} mt-5`}>{data.des3}</p>
                  <p className={`${styles.paragraph22} `}>{data.des4}</p>

                  <p className={`${styles.paragraph22} `}>{data.des5}</p>
                </div>
              ))}

              {whenShouldEnter.map((data, ind) => (
                <div className="md:mt-[50px] mt-[40px]" key={ind}>
                  <h2 className={`${styles.blogHeading2}`}>{data.title}</h2>
                  <p className={`${styles.paragraph22} mt-[29px] xl:mt-[30px]`}>
                    {data.desc}
                  </p>
                  <p className={`${styles.paragraph22} mt-5`}>{data.desc1}</p>
                  <p className={`${styles.paragraph22} mt-5`}>{data.des2}</p>

                  <ul className="mt-5 space-y-2 pl-[26px] lg:pl-[46px]">
                    {data.list.map((elem, id) => (
                      <div
                        className={`${styles.paragraph22} font-medium`}
                        key={id}
                      >
                        <li className="list-disc">{elem}</li>
                      </div>
                    ))}
                  </ul>

                  <p className={`${styles.paragraph22} mt-5`}>{data.des3}</p>
                  <p className={`${styles.paragraph22} `}>{data.des4}</p>
                </div>
              ))}

              {agentForceAdoption.map((data, ind) => (
                <div className="md:mt-[50px] mt-[40px]" key={ind}>
                  <h2 className={`${styles.blogHeading2}`}>{data.title}</h2>
                  <p className={`${styles.paragraph22} mt-[29px] xl:mt-[30px]`}>
                    {data.desc}
                  </p>
                  <p className={`${styles.paragraph22}`}>{data.desc1}</p>
                  <p className={`${styles.paragraph22} mt-5`}>{data.des2}</p>

                  <ul className="mt-5 space-y-2 pl-[26px] lg:pl-[46px]">
                    {data.list.map((elem, id) => (
                      <div
                        className={`${styles.paragraph22} font-medium`}
                        key={id}
                      >
                        <li className="list-disc">{elem}</li>
                      </div>
                    ))}
                  </ul>

                  <p className={`${styles.paragraph22} mt-5`}>{data.des3}</p>
                </div>
              ))}
              <div className="md:mt-[50px] mt-[40px]">
                {rialData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2
                        className={`mb-[22px] xl:mb-[30px] ${styles.blogHeading2}`}
                      >
                        {data.title}
                      </h2>
                      <p className={`${styles.paragraph22} mt-5`}>
                        {data.desc}
                      </p>
                      <p
                        className={`${styles.paragraph22} mt-5`}
                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                      />
                      <h3 className="mt-5 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight font-bold">
                        {data.desc2}
                      </h3>
                      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[50px] mt-[40px] gap-[20px] sm:w-[80%] md:w-full 4xl:w-[1100px]">
                        {data.list.map((item, id) => {
                          return (
                            <div
                              className="4xl:p-[36px] p-[32px] border border-[#707070]"
                              key={id}
                            >
                              <div
                                className={`${styles.paragraph22} pb-4 text-[#006FBE] font-bold`}
                              >
                                {item.title}
                              </div>
                              <p
                                className={`${styles.paragraph22}`}
                                dangerouslySetInnerHTML={{ __html: item.desc }}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <p className={`${styles.paragraph22} mt-5`}>
                        {data.desc3}
                      </p>
                    </div>
                  );
                })}
              </div>

              {whyEnterPrises.map((data, ind) => (
                <div className="md:mt-[50px] mt-[40px]" key={ind}>
                  <h2 className={`${styles.blogHeading2}`}>{data.title}</h2>
                  <p className={`${styles.paragraph22} mt-[29px] xl:mt-[30px]`}>
                    {data.desc}
                  </p>

                  <ul className="mt-5 space-y-2 pl-[26px] lg:pl-[46px]">
                    {data.list.map((elem, id) => (
                      <div
                        className={`${styles.paragraph22} font-medium`}
                        key={id}
                      >
                        <li className="list-disc">{elem}</li>
                      </div>
                    ))}
                  </ul>

                  <p className={`${styles.paragraph22} mt-5`}>{data.des3}</p>
                </div>
              ))}

              {runningSalsforce.map((data, ind) => {
                return (
                  <div key={ind} className="md:mt-[50px] mt-[40px]">
                    {data.title && (
                      <h2 className={`${styles.blogHeading2}`}>{data.title}</h2>
                    )}

                    <p
                      className={`${styles.paragraph22} mt-5`}
                      dangerouslySetInnerHTML={{ __html: data.content }}
                    />
                  </div>
                );
              })}
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
