"use client";
import Image from "next/image";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import Link from "next/link";
import UnorderedList from "@/app/[locale]/components/unorderedList";
export default function Page() {
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/patient-experience-platform-transforming-long-term-care/";
  const currUrl = useUrl();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Patient Experience Platform Transforming Long-Term Care | MediAIna by Rialtes",
    description:
      "A patient experience platform becomes essential, helping healthcare providers deliver continuity, coordination, and personalized care at scale.",
    image:
      "https://www.rialtes.com/images/blog/patient-experience-platform-mediAIna-transforming-long-term-care.webp",
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
        "https://www.rialtes.com/insights/blogs/patient-experience-platform-transforming-long-term-care/",
    },
    datePublished: "2025-10-07",
    mainEntity: {
      "@type": "FAQPage",
      name: "Patient Experience Platform in Healthcare FAQs",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a patient experience platform in healthcare?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A patient experience platform is a digital solution that connects clinical, operational, and engagement touchpoints into one seamless journey. It ensures patients receive coordinated care, clear communication, and continuous support from diagnosis through long-term management.",
          },
        },
        {
          "@type": "Question",
          name: "How does a patient experience platform improve long-term patient care?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By integrating chronic care management, digital engagement, and monitoring tools, platforms like MediAIna provide care continuity. This reduces readmissions, strengthens adherence, and empowers patients to actively manage their health.",
          },
        },
        {
          "@type": "Question",
          name: "Why is digital patient engagement important in chronic care management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital patient engagement helps patients stay connected to providers through reminders, two-way communication, remote monitoring, and access to personalized resources. It turns long-term care into a proactive, patient-driven journey.",
          },
        },
        {
          "@type": "Question",
          name: "How does MediAIna support the integrated healthcare journey?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The MediAIna patient journey platform unifies data, communication, and care pathways across providers, payers, MedTech, and life sciences enterprises. It delivers chronic care management solutions, predictive insights, and compliant innovation for better outcomes.",
          },
        },
        {
          "@type": "Question",
          name: "What makes MediAIna healthcare different from other platforms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike point solutions, MediAIna healthcare is designed as a comprehensive ecosystem. Backed by Rialtes’ LifeAI+ consulting suite, it offers scalability, AI-driven intelligence, and compliance—making it ideal for complex, long-term patient care.",
          },
        },
        {
          "@type": "Question",
          name: "How do digital tools support the diagnosis-to-care management journey?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital tools for long-term patient care simplify transitions by offering personalized care pathways, educational resources, and continuous check-ins. They ensure patients don’t get lost between diagnosis, treatment, and follow-up stages.",
          },
        },
      ],
    },
  };

  const blogMainData = [
    "Every real estate business hits a wall at some point, usually when its systems stop talking to each other. You’ve got a property management tool here, a finance system there, and a CRM somewhere else holding your lead data hostage. Teams waste hours chasing updates, finance struggles to reconcile data, and executives get reports that are outdated by the time they’re printed.",
    "Here’s the fix: Open API integrations.",
    "An open API ecosystem allows your CRM, ERP, finance, and property management systems to exchange data in real time. Instead of building expensive, custom bridges, open APIs make it possible to connect any system to another securely, enabling unified operations, faster decision-making, and, ultimately, more scalable growth.",
    "Let’s break down what that means for real estate, which integrations you actually need, and how platforms like Exelona are helping leading firms move beyond disconnected tech stacks.",
  ];

  const realEstateData = [
    {
      title: "The Case for Open API in Real Estate",
      desc: "Most property management platforms were never designed to play nicely with others. Systems like Yardi, MRI, and legacy CRMs often store tenant, lease, and payment data in silos, making it hard for teams to collaborate across functions like leasing, maintenance, and finance.",
      desc2:
        "But the real estate industry is shifting fast. According to PwC’s Emerging Trends in Real Estate 2025, more than 68% of real estate executives prioritize system consolidation or open API adoption as part of their digital strategy.",
      desc3:
        "Why? Because data fragmentation costs money. It slows everything from billing cycles to technician dispatch, making real-time reporting impossible. Open APIs address this by:",
      list: [
        "Eliminating manual data transfer between systems",
        "Automating synchronization across CRM, ERP, and operations tools",
        "Reducing integration costs vs. traditional custom coding",
        "Enabling scalable ecosystem growth with new apps and partners",
      ],
    },
  ];
  const workData = [
    {
      title: "How Open APIs Work in Real Estate Systems",
      desc: "Think of an open API as a universal translator between systems. When your leasing software, CRM, and finance platform all speak different “languages,” an API defines how they exchange data, like how a tenant’s rent payment in one system can automatically update an account balance and trigger a renewal reminder in another.",
      desc2: "For example:",
      list: [
        "A Salesforce CRM API can pull lead data directly into your leasing platform.",
        "An SAP ERP API can push expense data back into your accounting tool.",
        "A maintenance system API can send technician updates directly to the tenant’s portal.",
      ],
      desc3:
        "This flow of structured data reduces duplication, prevents errors, and creates a continuous, real-time feedback loop across all business functions, a must-have for enterprise-scale real estate operations.",
    },
  ];
  const integrationData = [
    {
      title: "1. CRM and Property Management Integration",
      why: "<strong>Why it matters:</strong> Your leasing team works in CRM. Your property management team works in a separate system. Without integration, tenant information gets lost between departments.",
      list: [
        {
          title: "Automatic sync of leads and tenants",
          description:
            "When a lead signs a lease, the CRM automatically updates your property management system, creating a unified tenant profile.",
        },
        {
          title: "Faster onboarding",
          description:
            "Digital lease signing triggers automated workflows, like move-in scheduling or rent invoicing.",
        },
        {
          title: "End-to-end visibility",
          description:
            "From inquiry to occupancy, your teams can view every interaction in one dashboard.",
        },
      ],
      example:
        "A leading UK housing group integrated Salesforce with its MRI property platform using open APIs. The result? A 35% reduction in tenant onboarding time and 20% fewer data discrepancies across leasing and property systems.",
    },
    {
      title: "2. ERP and Financial Systems Integration",
      why: "<strong>Why it matters:</strong> Real estate finance teams often rely on SAP, Oracle, or QuickBooks, but these systems are disconnected from operations data like rent collections or maintenance costs.",
       list: [
        {
          title: "Unified financial tracking",
          description:
            "Automatically sync rent, deposits, and invoices between your ERP and property system.",
        },
        {
          title: "Accurate forecasting",
          description:
            "Real-time data from leases and operations helps forecast revenue and expenses with precision.",
        },
        {
          title: "Streamlined compliance",
          description:
            "Financial records are automatically updated with each transaction, reducing audit risks.",
        },
      ],
      example:
        "A German property investment firm integrated its SAP ERP with a Yardi database using open APIs. By doing so, it cut monthly financial reconciliation time by 40% and improved cash flow visibility across 120 properties.",
    },
    {
      title: "3. IoT and Predictive Maintenance Integration",
      why: "<strong>Why it matters:</strong> Maintenance costs are among the biggest operational drains in real estate. Delayed repairs, unexpected breakdowns, and poor technician allocation can drive Opex up by 20–30%.",
       list: [
        {
          title: "Sensor data integration",
          description:
            "Connect IoT devices (HVAC, elevators, meters) to predictive maintenance tools.",
        },
        {
          title: "Automated alerts",
          description:
            "When a sensor detects abnormal activity, it triggers a maintenance request in your system.",
        },
        {
          title: "Data-driven planning",
          description:
            "APIs feed real-time maintenance data into your analytics dashboard to predict failures before they happen.",
        },
      ],
      example:
        "A U.S.-based multifamily operator linked its IoT monitoring systems with its property management software using open APIs. The integration enabled real-time fault detection and automated service scheduling, cutting downtime by 28% and saving $120,000 annually in repair costs.",
    },
    {
      title: "4. Tenant Portal and Communication Tools Integration",
      why: "<strong>Why it matters:</strong> Residents expect 24/7 communication — not email loops or delayed responses. Integrating chat, portals, and ticketing systems is essential for modern resident experiences.",
      list: [
        {
          title: "Real-time messaging",
          description:
            "Connect WhatsApp, SMS, or chatbots directly to your tenant portal.",
        },
        {
          title: "Ticket automation",
          description:
            "Every resident request automatically creates a case in your CRM.",
        },
        {
          title: "Faster resolution",
          description:
            "Maintenance and customer service teams get instant visibility on open tickets.",
        },
      ],
      example:
        "A large housing association in the Netherlands integrated its tenant app with Salesforce Service Cloud using open APIs. The system automatically routed maintenance requests and provided updates to residents via WhatsApp, reducing ticket resolution time by 45% and boosting satisfaction scores.",
    },
    {
      title: "5. Analytics and Business Intelligence Integration",
      why: "<strong>Why it matters:</strong> Decisions in real estate are only as good as the data behind them. But when your leasing, finance, and operations data live in silos, it’s nearly impossible to get accurate insights.",
       list: [
        {
          title: "Unified dashboards",
          description:
            "Consolidate data from all systems (CRM, ERP, IoT) into one analytics tool like Tableau or Power BI.",
        },
        {
          title: "Performance tracking",
          description:
            "Measure key metrics like rent collection rates, SLA compliance, and maintenance efficiency.",
        },
        {
          title: "Predictive insights",
          description:
            "Use machine learning models to forecast occupancy trends or tenant churn.",
        },
      ],
      example:
        "An Australian commercial property firm integrated its SAP, Salesforce, and IoT data into a single Tableau dashboard via open APIs. The move provided a 360° portfolio view and reduced monthly reporting time by 60 hours per team.",
    },
  ];
const buildData=[
  {
      title: "The Bigger Picture: Open APIs Build Scalable Ecosystems",
      desc: "Here’s what’s really happening behind the scenes: open APIs are about building an adaptable, scalable foundation for future growth.",
      desc2: "As new tools emerge, whether AI-driven leasing bots or blockchain-based contracts, an open API framework ensures you can plug them in without re-engineering your tech stack. It’s the opposite of vendor lock-in. You decide which systems fit your business, and your data flows where it’s needed most.That makes open API integrations for real estate such a calculated differentiator. They turn your IT landscape into a flexible ecosystem that grows with your business.",
      desc3: "Most real estate firms need a platform that integrates everything they already use. <strong>Exelona</strong>  is designed as a unified real estate management platform. It combines CRM, ERP, finance, and operations into one system, powered by an open API architecture that connects seamlessly with tools like:",
       list: [
        {
          title: "SAP",
          description:
            "for enterprise resource planning",
        },
        {
          title: "Salesforce",
          description:
            "for lead and resident management",
        },
        {
          title: "Yardi and MRI",
          description:
            "for property operations",
        },
        {
          title: "IoT systems ",
          description:
            "for predictive maintenance",
        },{
          title: "Analytics tools",
          description:
            "for portfolio insights",
        },
      ],
      desc4:
        "If your current setup feels like a patchwork of disconnected apps and spreadsheets, it’s time to rethink integration and talk to our experts because Exelona is built to help you do exactly that.",
    },
]

  const faqData = [
    {
      question: "What is an open API in real estate management?",
      answer:
        "An open API allows different property systems — like CRM, ERP, and finance tools — to securely exchange data, enabling unified operations and real-time updates.",
    },
    {
      question: "Why is API integration important for real estate companies?",
      answer:
        "It helps eliminate data silos, automate processes, and improve decision-making by synchronizing information across leasing, finance, and maintenance teams.",
    },
    {
      question: "Can open APIs integrate legacy systems like Yardi or MRI?",
      answer:
        "Yes. Open APIs can bridge legacy platforms with modern CRMs and ERPs, allowing seamless data sharing without replacing existing systems.",
    },
    {
      question: "What are examples of open API integrations in real estate?",
      answer:
        "Common examples include connecting Salesforce CRM with SAP ERP, integrating IoT maintenance tools, or linking tenant apps to communication platforms like WhatsApp.",
    },
    {
      question: "How do open APIs reduce operational costs?",
      answer:
        "They eliminate manual data entry, reduce reconciliation errors, and enable automation, saving both time and resources across departments.",
    },
    {
      question: "How does Exelona support open API integrations?",
      answer:
        "Exelona’s open API architecture connects CRM, ERP, finance, IoT, and analytics systems into one platform, providing a single, scalable foundation for unified real estate operations.",
    },
  ];
  return (
    <section className="min-h-screen">
      <Seo
        title="Patient Experience Platform Transforming Long-Term Care | Rialtes"
        description="Discover how MediAIna, Rialtes’ patient experience platform, redefines healthcare journeys with digital engagement, AI insights, and chronic care support."
        canonical={
          "https://www.rialtes.com/insights/blogs/patient-experience-platform-transforming-long-term-care/"
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
            src="/images/blog/digital-puzzle-technology-integration.webp"
            alt="Abstract puzzle pieces connected with digital circuit lines symbolizing technology integration and data connection"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/digital-puzzle-technology-integration-mobile.webp"
            alt="Abstract puzzle pieces connected with digital circuit lines symbolizing technology integration and data connection"
            priority
            height={0}
            width={0}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12 grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11 col-span-12">
            {/* date and icons */}
            <div className="sm:flex justify-between">
              <div>
                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  Exelona
                </span>{" "}
                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {" "}
                  |{" "}
                </span>
                31 October 2025
              </div>

              <div>
                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                  <BlogSocialIcons fullUrl={fullUrl} />
                </div>
              </div>
            </div>

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                5 Open API Integrations Every Growing Real Estate Firm Needs
              </h1>
              <div className="xl:mt-[38px] mt-[33px]">
                {blogMainData.map((data, ind) => {
                  return (
                    <p
                      key={ind}
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  );
                })}
              </div>

              {/* Real Estate section */}
              <div className="md:mt-[50px] mt-[40px]">
                {realEstateData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                      />
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                      />
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                    </div>
                  );
                })}
              </div>

              {/*Open APIs Work section */}
              <div className="md:mt-[50px] mt-[40px]">
                {workData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                      />

                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                      />
                    </div>
                  );
                })}
              </div>
           {/*Integration section */}
              <div className="md:mt-[50px] mt-[40px]">
                {integrationData.map((data, ind) => {
                  return (
                    <div key={ind} className="md:mt-[50px] mt-[40px]">
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                       <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.why }}
                      />
                      
                      <h3 className="font-bold 4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[17px] text-[17px] mt-[25px]">
                        What open APIs enable:
                      </h3>
                      <ul className="pl-[36px] lg:pl-[56px] space-y-2 mt-5">
                        {data.list.map((enable, id) => {
                          return (
                            <li
                              key={id}
                              className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium"
                            >
                              <h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                {enable.title}:{" "}
                              </h4>
                              {enable.description}
                            </li>
                          );
                        })}
                      </ul>
                       <h3 className="font-bold 4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[17px] text-[17px] mt-[25px]">
                        Example:
                      </h3>
                      <p className="mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.example}
                      </p>
                    </div>
                  );
                })}
              </div>
               {/*The Bigger Picture: Open APIs Build Scalable Ecosystems section */}
                <div className="md:mt-[50px] mt-[40px]">
                {buildData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                      />
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                      />
                    <ul className="pl-[36px] lg:pl-[56px] space-y-2 mt-5">
                        {data.list.map((enable, id) => {
                          return (
                            <li
                              key={id}
                              className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium"
                            >
                              <h4 className="font-semibold inline 4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[17px] text-[17px]">
                                {enable.title}{" "}
                              </h4>
                              {enable.description}
                            </li>
                          );
                        })}
                      </ul>
                       <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc4 }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq section */}
      <section className="xl:mt-[80px] mt-[40px] custom-container">
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
          FAQs: Open API Integrations for Every Real Estate Firm Needs
        </h2>
        <div className="mt-[29px] xl:mt-[30px]">
          <FAQAccordion faqData={faqData} />
        </div>
      </section>

      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </section>
  );
}
