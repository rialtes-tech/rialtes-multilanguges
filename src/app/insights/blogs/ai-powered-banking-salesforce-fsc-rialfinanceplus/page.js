"use client";
import Image from "next/image";
import FilteredBlogCarousel from "@/app/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from "@/app/components/blogSocialIcons";
import Link from "next/link";
import UnorderedList from "@/app/components/unorderedList";

export default function Page() {
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/ai-powered-banking-salesforce-fsc-rialfinanceplus";
  const currUrl = useUrl();

  const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "RialFinancePlus and the Rise of AI-Powered Banking",
  "description": "Through RialFinance+, we help financial institutions turn Salesforce FSC into a connected, compliant, and insight-driven platform that changes how teams engage clients, manage risk, and make decisions.",
  "image": "https://www.rialtes.com/image/blogs/smart-city-digital-network-iot-technology-banner",
  "author": {
    "@type": "Organization",
    "name": "Rialtes"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/ai-powered-banking-salesforce-fsc-rialfinanceplus/"
  },
  "datePublished": "2026-01-14",
  "mainEntity": {
    "@type": "FAQPage",
    "name": "AI-Driven Financial Services Transformation FAQs",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Salesforce Financial Services Cloud different from traditional CRM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Salesforce FSC is built specifically for financial services, with industry data models, compliance-ready workflows, and relationship hierarchies that generic CRMs lack. When combined with AI, it becomes a decision-support platform, not just a tracking system."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI improve client engagement in banking and wealth management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI analyzes behavior, life events, and interaction patterns to recommend next-best actions, personalized offers, and proactive service opportunities, helping advisors stay relevant without being intrusive."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI-powered FSC support regulatory compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. FSC embeds compliance into workflows, while AI adds predictive risk monitoring, automated documentation, and real-time exception handling."
        }
      },
      {
        "@type": "Question",
        "name": "What is RialFinance+ and how is it different from standard implementation services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RialFinance+ is a full managed services model that combines advisory, implementation, AI integration, QA, and continuous optimization into one unified approach, ensuring long-term value, not just a successful go-live."
        }
      },
      {
        "@type": "Question",
        "name": "Which financial institutions benefit most from RialFinance+?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Banks, lenders, credit unions, and wealth management firms are looking to modernize engagement, streamline operations, and scale personalization without compromising compliance."
        }
      }
    ]
  }
}
  const blogMainData = [
    "Financial services are changing faster than most institutions can redesign their operating models. <a href='https://www.accenture.com/us-en/insights/banking/banking-consumer-study' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>According to Accenture</a>, nearly 73% of banking customers now expect the same level of personalization and digital ease they get from consumer apps, yet only a fraction believes their bank delivers it. Add rising regulatory pressure and shrinking margins, and the gap becomes even clearer: institutions are being asked to move faster, act smarter, and stay compliant at the same time.",
    "Traditional CRM wasn’t built for this reality. It was designed to log interactions, not to guide decisions in real time. That’s why forward-thinking banks, lenders, and wealth firms are moving beyond basic CRM into AI-powered Salesforce Financial Services Cloud (FSC) — a platform built to connect data, intelligence, and action.",
    "And this is exactly where Rialtes’ RialFinance+ services step in, helping financial institutions modernize engagement, operations, and compliance through one connected, intelligent ecosystem that’s ready for today’s expectations and tomorrow’s demands.",
  ];
  const whyData = [
    {
      title: "Why Traditional CRM Falls Short in Financial Services",
      desc: "Most CRMs still behave like digital filing cabinets. They store data, but they don’t interpret it. They log interactions, but they don’t anticipate needs.",
      desc1: "For financial institutions, that creates real problems.",
      desc2: "The impact shows up everywhere",
      list: [
        "Advisors spend more time searching than advising",
        "Onboarding takes weeks instead of days",
        "Cross-sell feels forced, not relevant",
        "Compliance is reactive, not embedded",
        "Customer journeys stay fragmented across products and channels",
      ],
      desc3:
        "What this really means is lost trust, lost revenue, and lost momentum.",
      desc4:
        "Salesforce Financial Services Cloud changes that equation by combining industry data models, automation, and AI into a system designed specifically for banking, lending, and wealth management.",
    },
  ];
  const buildingData = [
    {
      title: "Building a True Client 360 for Financial Institutions",
      desc: "Everyone talks about Client 360. Few achieve it",
      desc1:
        "In most banks and financial institutions, customer data is stored everywhere. Core banking systems, loan platforms, CRM, marketing tools, and support desks. Each team sees only part of the story.",
      desc2:
        "Salesforce FSC changes this by creating a single financial profile that brings together:",
      list: [
        "Accounts and holdings",
        "Household and relationship hierarchies",
        "Life events and financial goals",
        "Service history and interaction data",
        "Compliance records and preferences",
      ],
    },
  ];
  const powerData = [
    {
      title: "The Power of AI + Salesforce FSC in Modern Banking ",
      desc: "AI doesn’t replace relationship managers. It makes them sharper. When embedded into Salesforce FSC, AI transforms the platform from a system of record to a system of intelligence.",
      desc1: "What AI brings to the table ",
      list: [
        "Predictive insights that flag client needs before they surface",
        "Next-best-action recommendations for advisors",
        "Automated workflows for onboarding and servicing",
        "Real-time risk and compliance checks",
        "Personalized engagement at scale",
      ],
      desc2: "Instead of reacting to events, teams start shaping outcomes.",
      desc3:
        "That’s the difference between digital transformation and real operational change.",
    },
  ];
  const scaleData = [
    {
      title: "Intelligent Onboarding and Advisory at Scale",
      desc: "Onboarding is the first real test of trust. And it’s often where institutions lose momentum. Paper-heavy processes, manual checks, disconnected approvals. All of it slows down what should be a confidence-building moment.",
      desc1: "With AI-enabled Salesforce FSC, onboarding becomes:",
      list: [
        "Digitally guided",
        "Policy-aware",
        "Automatically routed",
        "Compliance-validated in real time",
      ],
      desc2:
        "Documents are verified faster. Risk checks happen in parallel. Advisors focus on relationship building instead of paperwork.",
      desc3: "The same intelligence carries into advisory services.",
      desc4:
        "AI helps surface portfolio gaps, life-stage triggers, and cross-sell opportunities based on behavior, not assumptions. That turns advisory into a continuous, personalized experience instead of a once-a-year conversation.",
    },
  ];
  const frictionData = [
    {
      title: "Compliance-Ready Automation Without the Friction ",
      desc: "In financial services, automation only works if it respects regulation. That’s where many platforms fall short. They automate tasks but leave compliance as a separate layer. The result is rework, audits, and risk exposure.",
      desc1:
        "Salesforce FSC approaches this differently. Compliance becomes part of the workflow itself.",
      whatTitle: "What that looks like in practice",
      list: [
        "Automated KYC and AML processes embedded in onboarding",
        "Audit trails generated by default",
        "Policy-driven approvals for sensitive transactions",
        "Real-time monitoring for exceptions and risks",
        "Data governance aligned with regulatory requirements",
      ],
      desc2:
        "When AI is layered on top, institutions gain predictive risk signals instead of just historical reports. So compliance stops being a bottleneck and becomes a built-in strength.",
    },
  ];
  const rialData = [
    {
      title: "Why RialFinance+ Is Different ",
      desc: "Technology alone doesn’t transform financial services. Execution does.",
      desc1:
        "That’s why <a href='https://https://www.rialtes.com/services/lob/salesforce-fsc-consulting-rialfinanceplus/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Rialtes created RialFinance+</a> as a complete, managed services approach to Salesforce Financial Services Cloud. Instead of piecing together advisory, implementation, AI, and support from different vendors, RialFinance+ brings everything into one accountable model.",
      desc2: "What RialFinance+ delivers",
      list: [
        {
          title: "Strategic advisory",
          desc: "We align your business goals with a scalable FSC roadmap, grounded in real operational needs, not just features.",
        },
        {
          title: "System design and architecture",
          desc: "We design FSC environments that support banking, lending, and wealth models from day one.",
        },
        {
          title: "Certified implementation",
          desc: "Our teams configure Salesforce FSC with industry best practices, ensuring faster adoption and fewer surprises.",
        },
        {
          title: "AI integrations ",
          desc: "From predictive insights to intelligent automation, we embed AI where it creates measurable value.",
        },
        {
          title: "Quality assurance and governance ",
          desc: "We validate performance, security, and compliance before go-live and beyond.",
        },
        {
          title: "Ongoing managed services ",
          desc: "Optimization doesn’t stop at launch. We continuously refine workflows, analytics, and engagement models as your business evolves.",
        },
      ],
      desc3:
        "What this really means is simple. You get a partner focused on outcomes, not just deployments.",
    },
  ];
  const servicesData = [
    {
      title: "Real Business Impact Across Financial Services ",
      desc: "When AI-powered Salesforce FSC is implemented the right way, results show up fast.",
      desc1: "Banks see faster onboarding and higher account activation.",
      desc2: "Lenders see better risk control and smoother approvals.",
      desc3:
        "Wealth firms see stronger advisor productivity and deeper client relationships.",
      desc4: "Across the board, institutions gain:",
      list: [
        "Shorter time-to-value from digital initiatives",
        "Higher engagement across channels",
        "Improved compliance confidence",
        "Lower operational friction",
        "A platform that scales with new products and regulations",
      ],
      desc5:
        "That’s not transformation in theory. That’s transformation in practice.",
    },
  ];
  const futureData = [
    {
      title:
        "The Future of Financial Services Is Intelligent, Connected, and Trusted",
      desc: [
        "Customers don’t care how many systems you run. They care about how understood they feel. Regulators don’t care how complex your operations are. They care about how controlled they are. Advisors don’t care how powerful your CRM is. They care about how useful it is in the moment that matters.",
        "AI-powered Salesforce Financial Services Cloud delivers on all three fronts. But technology alone doesn’t transform happen.",
        "That’s where Rialtes comes in. Through RialFinance+, we help financial institutions turn Salesforce FSC into a connected, compliant, and insight-driven platform that changes how teams engage clients, manage risk, and make decisions.",
      ],
    },
  ];
  const faqData = [
    {
      question:
        "What makes Salesforce Financial Services Cloud different from traditional CRM? ",
      answer:
        "Salesforce FSC is built specifically for financial services, with industry data models, compliance-ready workflows, and relationship hierarchies that generic CRMs lack. When combined with AI, it becomes a decision-support platform, not just a tracking system.",
    },
    {
      question:
        "How does AI improve client engagement in banking and wealth management?",
      answer:
        "AI analyzes behavior, life events, and interaction patterns to recommend next-best actions, personalized offers, and proactive service opportunities, helping advisors stay relevant without being intrusive.",
    },
    {
      question: "Can AI-powered FSC support regulatory compliance?",
      answer:
        "Yes. FSC embeds compliance into workflows, while AI adds predictive risk monitoring, automated documentation, and real-time exception handling.",
    },
    {
      question:
        "What is RialFinance+ and how is it different from standard implementation services?",
      answer:
        "RialFinance+ is a full managed services model that combines advisory, implementation, AI integration, QA, and continuous optimization into one unified approach, ensuring long-term value, not just a successful go-live.",
    },
    {
      question: "Which financial institutions benefit most from RialFinance+?",
      answer:
        "Banks, lenders, credit unions, and wealth management firms are looking to modernize engagement, streamline operations, and scale personalization without compromising compliance.",
    },
  ];
  return (
    <section className="min-h-screen">
      <Seo
        title="How AI Is Redefining Banking with Salesforce FSC | RialFinancePlus"
        description="Through RialFinance+, financial institutions turn Salesforce FSC into a connected, compliant, insight-driven platform for intelligent engagement and risk control."
        canonical={
          "https://www.rialtes.com/insights/blogs/ai-powered-banking-salesforce-fsc-rialfinanceplus/"
        }
      />
      <Script
        id="schema-kinaxis"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="md:block hidden">
          <Image
            src="/images/blog/smart-city-digital-network-iot-technology-banner.webp"
            className="w-full h-auto object-cover"
            alt="Futuristic digital city with glowing data streams and network connections representing smart city technology and urban IoT"
            fill
            priority
          />
        </div>
        <div className="md:hidden block">
          <Image
            src="/images/blog/smart-city-digital-network-iot-technology-mobile-banner.webp"
            alt="Futuristic digital city with glowing data streams and network connections representing smart city technology and urban IoT"
            priority
            height={250}
            width={375}
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
                  Salesforce FSC
                </span>{" "}
                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {" "}
                  |{" "}
                </span>
                14 January 2026
              </div>

              <div>
                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                  <BlogSocialIcons fullUrl={fullUrl} />
                </div>
              </div>
            </div>

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[58px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                How AI-Powered Salesforce Financial Services Cloud Is
                Transforming Modern Banking
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
              {/* Why Traditional CRM Falls Short in Financial Services */}
              <div className="md:mt-[50px] mt-[40px]">
                {whyData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <p className="mt-5 font-bold 4xl:text-[24px] 2xl:text-[21px] text-[20px]">
                        {data.desc2}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc4}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* The Power of AI + Salesforce FSC in Modern Banking */}
              <div className="md:mt-[50px] mt-[40px]">
                {powerData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <h3 className="mt-5 font-bold 4xl:text-[24px] 2xl:text-[21px] text-[20px]">
                        {data.desc1}
                      </h3>

                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Building a True Client 360 for Financial Institutions*/}
              <div className="md:mt-[50px] mt-[40px]">
                {buildingData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      
                     <div className=" flex justify-start">
  <div className="relative w-[280px] sm:w-[220px] md:w-[360px] lg:w-[500px] aspect-square">
    <Image
      src="/images/blog/client-360-comprehensive-customer-view-diagram.webp"
      alt="Client 360 diagram showing comprehensive customer view with accounts, life events, transactions, preferences, risk, engagement"
      fill
      className="object-contain"
    />
  </div>
</div>

                    </div>
                  );
                })}
              </div>
              {/* Intelligent Onboarding and Advisory at Scale*/}
              <div className="">
                {scaleData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc4}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/*Compliance-Ready Automation Without the Friction */}
              <div className="md:mt-[50px] mt-[40px]">
                {frictionData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <h3 className="mt-5 font-bold 4xl:text-[24px] 2xl:text-[21px] text-[20px]">
                        {data.whatTitle}
                      </h3>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Why RialFinance+ Is Different */}
              <div className="md:mt-[50px] mt-[40px]">
                {rialData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                         <p
                                className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5"
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
                              <h4 className="text-[#006FBE] 4xl:text-[22px] xl:text-[19px] text-[18px] font-bold pb-4">
                                {item.title}
                              </h4>
                              <p
                                className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                dangerouslySetInnerHTML={{ __html: item.desc }}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Real Business Impact Across Financial Services */}
              <div className="md:mt-[50px] mt-[40px]">
                {servicesData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                      <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc4}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc5}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* The Future of Financial Services Is Intelligent, Connected, and Trusted */}
              <div className="md:mt-[50px] mt-[40px]">
                {futureData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>

                      {data.desc.map((para, index) => (
                        <p
                          key={index}
                          className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  );
                })}
              <div className="lg:mt-8 mt-6">
               <Image
                  src="/images/blog/crm-evolution-four-step-transformation-process.svg"
                  alt="Four-step CRM evolution process: Legacy CRM, Connected data, AI-enabled workflows, to Intelligent enterprise transformation"
                  width={375}
                  height={250}
                  className=" h-full w-full relative"
                /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq section */}
      <section className="xl:mt-[80px] mt-[40px] custom-container">
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
          FAQs: AI-Driven Financial Services Transformation
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
