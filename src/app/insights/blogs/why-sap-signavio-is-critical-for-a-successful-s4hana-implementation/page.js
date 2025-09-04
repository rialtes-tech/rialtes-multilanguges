"use client";
import Image from "next/image";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import Link from "next/link";
import UnorderedList from "@/app/components/unorderedList";
import FAQAccordion from "@/app/components/faqAccordion";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Why SAP Signavio is Critical for a Successful S/4HANA Implementation",
  "description": "SAP S/4HANA is the digital backbone for enterprises of the future. But to unlock its true potential, organizations need clarity, transparency, and AI-driven insights.",
  "image": "https://www.rialtes.com/images/blog/sap-signavio-s4hana.webp",
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
    "@id": "https://www.rialtes.com/insights/blogs/why-sap-signavio-is-critical-for-a-successful-s4hana-implementation"
  },
  "datePublished": "2025-06-16",

  "mainEntity": {
    "@type": "FAQPage",
    "name": "S/4HANA Implementation and SAP Signavio FAQs",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Isn’t S/4HANA powerful enough on its own? Why do I need Signavio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "S/4HANA provides the digital core, but without process clarity you risk migrating inefficiencies. Signavio ensures your processes are optimized, standardized, and aligned with SAP best practices before and after the move."
        }
      },
      {
        "@type": "Question",
        "name": "How does Signavio reduce risk in an S/4HANA program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By providing visibility into “as-is” and “to-be” processes, Signavio prevents scope creep, reduces rework, and enforces governance throughout the transformation."
        }
      },
      {
        "@type": "Question",
        "name": "Can Signavio help with faster adoption of S/4HANA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. With role-based documentation, visual process models, and AI-driven insights from Joule, Signavio simplifies training and empowers business users to adapt quickly."
        }
      },
      {
        "@type": "Question",
        "name": "What specific areas of the business benefit most from Signavio during S/4HANA migration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Finance, Procurement, Supply Chain, Manufacturing, Sales & Distribution, and HR all benefit through standardized, harmonized processes that drive efficiency and better experiences."
        }
      },
      {
        "@type": "Question",
        "name": "How does Signavio work with SAP Cloud ALM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The integration ensures traceability, KPI tracking, and compliance across the entire program lifecycle—making it easier to manage large-scale transformations."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if we implement S/4HANA without using Signavio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You risk carrying over legacy inefficiencies, extending timelines, inflating costs due to rework, and facing poor user adoption."
        }
      },
      {
        "@type": "Question",
        "name": "How does Rialtes’ Voyager+ methodology enhance Signavio’s impact?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voyager+ leverages Signavio at every stage of SAP Activate—from advisory and design to implementation and hypercare—ensuring business outcomes remain front and center."
        }
      }
    ]
  }
};
const blogs = [
  {
    id: 1,
    image: "/images/blog/blog-1.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "30 Sept 2024",
    url: "how-salesforce-agentforce-actually-works",
    title: "How Salesforce Agentforce Actually Works",
    description:
      "Salesforce Agentforce, although a newer addition to the Salesforce ecosystem, is making rounds, particularly in organizations that deal with large teams of agents, such as sales agents, customer service representatives, and field service personnel.",
  },
  {
    id: 2,
    image: "/images/blog/blog-2.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "21 Oct 2024",
    title:
      "The Brain Behind the Agents: Unveiling the Atlas Reasoning Engine in Agentforce",
    description:
      "As businesses scale, the complexity of managing customer interactions multiplies, driving the need for more intelligent and streamlined support systems.  Salesforce Agentforce provides a robust platform for customer service automation, now enhanced by the groundbreaking Atlas Reasoning Engine.",
  },
  {
    id: 4,
    image: "/images/blog/blog-4.webp",
    category: "Salesforce Agentforce",
    industry: "Generic",
    date: "25 Nov 2024",
    title:
      "Agentforce Testing Center: Redefining AI Testing with Synthetic Data",
    description:
      "Salesforce has introduced a new feature called Testing Center within its agentic AI platform, Agentforce. This addition allows enterprise users to test and monitor AI agents before deploying them in production.",
  },
  {
    id: 5,
    image: "/images/blog/blog-5.webp",
    category: "SAP SuccessFactors",
    industry: "Human Resources",
    date: "24 Dec 2024",
    title:
      "How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration",
    description:
      "Seamless integration between enterprise applications offers improved collaboration, efficiency, and productivity. Integrating SAP SuccessFactors with Microsoft Office 365 combines the strengths of a leading human experience management (HXM) solution and a robust suite of productivity tools.",
  },
  {
    id: 6,
    image: "/images/blog/blog-6.webp",
    category: "Cloud Green Technology",
    industry: "Agriculture",
    date: "17 Sept 2024",
    title:
      "Agriculture 4.0. How Do Digital Technologies Transform Farming for a Better Tomorrow?",
    description:
      "Agriculture plays a significant role in India’s growing economy and its future cannot be accomplished without digital tools and technological innovation.",
  },
  {
    id: 7,
    image: "/images/blog/blog-7.webp",
    category: "SAP SuccessFactors",
    industry: "Human Resources",
    date: "29 Oct 2024",
    title: "SAP SuccessFactors Performance and Goal Management",
    description:
      "Achieving your organization’s goals is a key responsibility your entire team shares. When your team’s strategy aligns with its goals and the broader organizational objectives, doing the right thing becomes instinctive.",
  },
];
const blogdescData = [
  "Organizations are at a stage where they must modernize their ERP systems, streamline operations, and harness real-time insights. SAP S/4HANA has become the digital core for businesses aiming to achieve this transformation. However, the real differentiator between a simple migration and a successful transformation lies in how effectively an organization aligns its business processes with S/4HANA.",
  "That’s where SAP Signavio Business Process Transformation Suite and Rialtes’ proven Voyager+ methodology come together to deliver measurable results. Rialtes ensures that business and IT leaders don’t just migrate to S/4HANA, but redefine how their enterprise operates in the digital era.",
];

const transformationPoints = [
  {
    title: "Process-Centric Approach",
    desc: "Ensures the transformation is driven by standardized, optimized processes rather than system constraints.",
  },
  {
    title: "Business-IT Alignment",
    desc: "Bridges the gap between functional leaders and IT by creating a common process language.",
  },
  {
    title: "Change Transparency",
    desc: "Offers visibility into “as-is” and “to-be” processes, enabling informed decision-making.",
  },
  {
    title: "Continuous Improvement",
    desc: "Transformation doesn’t stop at go-live. Signavio helps organizations adopt a culture of continuous optimization.",
  },
];
const voyagerPoints = [
  {
    title: "Advisory Services",
    desc: "Voyager+ begins with strategic assessments for licensing, process standardization, and readiness planning.",
  },
  {
    title: "Design & Process Modeling",
    desc: "Using Signavio, we define the future-state processes that align with SAP Best Practices and industry benchmarks.",
  },
  {
    title: "Implementation Excellence",
    desc: "Certified SAP Activate project managers ensure every blueprint and configuration is traceable to business outcomes.",
  },
  {
    title: "Go-Live & Beyond",
    desc: "Voyager+ ensures seamless cutover, knowledge transfer, and hypercare, with Rialtes’ managed services enabling continuous improvement.",
  },
];
const intelligentPoints = [
  {
    title: "Conversational Process Insights",
    desc: "Joule can surface process inefficiencies identified in Signavio in natural language, empowering faster decisions.",
  },
  {
    title: "Automated Recommendations",
    desc: "Joule generates improvement suggestions aligned with business KPIs tracked in Signavio.",
  },
  {
    title: "Real-Time Guidance",
    desc: "Business users get AI-driven process recommendations as they interact with S/4HANA, ensuring faster adoption.",
  },
];
const benefitsPoints = [
  {
    title: "Clarity of Current State Processes",
    desc: "Process mining through Signavio reveals execution patterns, bottlenecks, and inefficiencies, giving enterprises a factual baseline for transformation.",
  },
  {
    title: "Design Future-Ready Processes",
    desc: "By simulating “to-be” processes, enterprises can harmonize operations across geographies and business units while aligning with S/4HANA’s digital core.",
  },
  {
    title: "Accelerated Fit-to-Standard Workshops",
    desc: "Signavio provides ready process maps and KPIs, making workshops data-driven, outcome-focused, and faster to execute",
  },
  {
    title: "Integration with SAP Cloud ALM (CALM)",
    desc: "When paired with SAP Cloud ALM, Signavio ensures governance, traceability, and KPI tracking throughout the entire program lifecycle.",
  },
  {
    title: "Enhanced Change Management & Adoption",
    desc: "Role-based documentation and visualization simplify user training, driving faster adoption and long-term engagement with S/4HANA.",
  },
];
const domainsPoints = [
  {
    title: "Finance (Record-to-Report)",
    desc: "Standardized close cycles and fewer manual journal entries.",
  },
  {
    title: "Procurement (Procure-to-Pay)",
    desc: "Streamlined vendor onboarding and spend management.",
  },
  {
    title: "Sales & Distribution (Order-to-Cash)",
    desc: "Harmonized fulfillment and improved customer experiences.",
  },
  {
    title: "Manufacturing",
    desc: "Better planning and shop-floor integration with analytics-driven insights.",
  },
  {
    title: "Supply Chain",
    desc: "Enhanced demand planning and inventory control with embedded intelligence.",
  },
  {
    title: "Human Capital Management",
    desc: "Digitally enabled workforce processes that align with employee experience needs.",
  },
];
const riskPoints = [
  "Migrating inefficiencies into S/4HANA.",
  "Extended timelines due to unclear processes.",
  "Higher implementation costs from rework.",
  "Poor adoption rates due to lack of user clarity.",
];
const faqData = [
  {
    question: "1. Isn’t S/4HANA powerful enough on its own? Why do I need Signavio?",
    answer: [
      "S/4HANA provides the digital core, but without process clarity you risk migrating inefficiencies. Signavio ensures your processes are optimized, standardized, and aligned with SAP best practices before and after the move.",
    ],
  },
  {
    question: "2. How does Signavio reduce risk in an S/4HANA program?",
    answer: [
      "By providing visibility into “as-is” and “to-be” processes, Signavio prevents scope creep, reduces rework, and enforces governance throughout the transformation.",
    ],
  },
  {
    question: "3. Can Signavio help with faster adoption of S/4HANA?",
    answer: [
      "Yes. With role-based documentation, visual process models, and AI-driven insights from Joule, Signavio simplifies training and empowers business users to adapt quickly.",
    ],
  },
  {
    question: "4. What specific areas of the business benefit most from Signavio during S/4HANA migration?",
    answer: [
      "Finance, Procurement, Supply Chain, Manufacturing, Sales & Distribution, and HR all benefit through standardized, harmonized processes that drive efficiency and better experiences.",
    ],
  },
  {
    question: "5. How does Signavio work with SAP Cloud ALM?",
    answer: [
      "The integration ensures traceability, KPI tracking, and compliance across the entire program lifecycle—making it easier to manage large-scale transformations.",
    ],
  },
  {
    question: "6. What happens if we implement S/4HANA without using Signavio?",
    answer: [
      "You risk carrying over legacy inefficiencies, extending timelines, inflating costs due to rework, and facing poor user adoption.",
    ],
  },
  {
    question: "7. How does Rialtes’ Voyager+ methodology enhance Signavio’s impact?",
    answer: [
      "Voyager+ leverages Signavio at every stage of SAP Activate—from advisory and design to implementation and hypercare—ensuring business outcomes remain front and center.",
    ],
  },
];
export default function Page() {
  const fullUrl = "https://www.rialtes.com/insights/blog/why-sap-signavio-is-critical-for-a-successful-s4hana-implementation/";

  return (
    <div className="min-h-screen">
      <Seo
        title="SAP Signavio: Simplifying S/4HANA Implementation Success| Rialtes"
        description="Ready for S/4HANA Implementation? Rialtes’ Voyager+ and SAP Signavio make the journey smooth, transparent, and built for scalable enterprise success."
        keywords="Partners, website, welcome"
        canonical={
          "https://www.rialtes.com/insights/blog/why-sap-signavio-is-critical-for-a-successful-s4hana-implementation/"
        }
      />

      <Script
        id="schema-copilots"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/blog/sap-signavio-s4hana.webp"
            alt="SAP Signavio"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/blog/sap-signavio-s4hana-mobile-banner.webp"
            alt="SAP Signavio"
            priority
            height={0}
            width={0}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="custom-container">
        <div className="py-10 bg-white">
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black items-center xl:max-w-[1084px] xl:w-[1084px]">
              <div className="sm:mb-0 mb-6">
                <span className="text-[#0092E0]">SAP Signavio</span>
                <span className="text-[#ACACAC]"> | </span>16 June 2025
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="max-w-[40px]">
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
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
                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
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
          <div className="py-6"></div>
          <div className="grid xl:grid-cols-12">
            <div className="xl:col-span-10 col-span-12">
              <h1 className="text-[#000000] pb-6 leading-tight text-[26px] xl:text-[42px] 2xl:text-[48px] 4xl:text-[60px] md:text-[28px]">
                Why SAP Signavio is Critical for a Successful S/4HANA
                Implementation
              </h1>
            </div>
          </div>
          <div className="grid xl:grid-cols-12">
            <div className="col-span-9">
              {blogdescData.map((data, ind) => {
                return (
                  <p
                    key={ind}
                    className="mt-3 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]"
                  >
                    {data}
                  </p>
                );
              })}

              <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
                The Strategic Role of SAP Signavio in S/4HANA Transformations
              </h2>
              <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] pb-2">
                Migrating to S/4HANA is not merely a technical upgrade. It’s an
                enterprise-wide initiative that redefines processes, governance,
                and performance models. SAP Signavio provides the end-to-end
                visibility, modeling, and optimization capabilities that allow
                enterprises to transition with confidence.
              </p>
              <p className="mt-1 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] pb-2 ">
                Key reasons why Signavio matters:
              </p>
              <ul className="list-disc space-y-2 font-medium 4xl:text-[20px] xl:text-[18px] text-[16px] pl-[32px]">
                {transformationPoints.map((point, index) => (
                  <li key={index}>
                    <h3 className="font-bold inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">
                      {point.title}:
                    </h3>{" "}
                    {point.desc}
                  </li>
                ))}
              </ul>


              <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
                Rialtes’ Voyager+ Methodology: A Clear Roadmap for S/4HANA
              </h2>
              <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] ">
                At Rialtes, we have developed  <Link href={"https://www.rialtes.com/services/business-transformation/rise-with-sap-services/"}><span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">Voyager+</span></Link>, our
                proprietary methodology that simplifies and accelerates the
                S/4HANA journey by leveraging SAP Signavio at every stage of the{" "}
                <strong>SAP Activate framework.</strong>
              </p>
              <ol className="flex flex-col lg:flex-row relative lg:mt-[74px] mt-[60px] xl:w-[1100px]">
                {voyagerPoints.map((step, index) => (
                  <li
                    key={step.id}
                    className="relative flex-1 lg:mb-0 flex flex-col"
                  >
                    {/* Circle */}
                    <div className="z-10 flex justify-center w-4 h-4 bg-[#0C8AED] rounded-full ring-0 ring-white lg:ring-4 shrink-0">
                      <span className="flex w-3 h-3 bg-[#0C8AED] rounded-full"></span>
                    </div>

                    {/* Vertical line (mobile/tablet) */}
                    {index !== voyagerPoints.length - 1 && (
                      <div className="absolute top-4 left-2 w-0.5 h-full bg-[#9D9D9D] lg:hidden"></div>
                    )}

                    {/* Horizontal line (desktop) */}
                    {index !== voyagerPoints.length - 1 && (
                      <div className="hidden lg:block flex-1 w-full h-0.5 bg-[#9D9D9D] absolute top-2"></div>
                    )}

                    {/* Label */}
                    <div className="lg:mt-[44px] max-lg:ml-[40px] max-lg:mt-[-20px]">
                      <h3 className="font-bold inline 4xl:text-[24px] 2xl:text-[22px] xl:text-[20px] text-[18px] lg:pr-8 xl:pr-2">
                        {step.title}
                      </h3>
                      <p className="2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] lg:mt-[34px] mt-[8px] lg:pr-12 4xl:pr-10 max-lg:mb-12">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-[40px] lg:mt-[110px] 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                This methodology reduces risk, eliminates rework, and
                establishes a transformation framework that scales globally.
              </p>

              <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
                Joule + Signavio: The Intelligent Transformation Duo
              </h2>
              <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                SAP’s new generative AI assistant,<strong> Joule</strong>,
                brings intelligence directly into the transformation journey.
                When combined with <strong> Signavio</strong>, the impact
                multiplies:
              </p>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[50px] mt-[26px] md:gap-[18px] gap-y-[20px] sm:w-[70%] md:w-[90%] lg:w-full xl:w-[1100px]">
                {intelligentPoints.map((point, index) => (
                  <div key={index} className="border border-[#707070] lg:p-[40px] p-[26px]">
                    <h3 className="font-bold inline 4xl:text-[22px] 2xl:text-[20px] xl:text-[19px] text-[16px] text-[#006FBE]">
                      {point.title}
                    </h3>{" "}
                    <p className="mt-[16px] 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{point.desc}</p>
                  </div>
                ))}
              </div>

              <p className="4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] lg:mt-[47px] mt-[28px]">
                With <strong>Joule + Signavio</strong>, Rialtes enables clients
                to transform their organizations with{" "}
                <strong>AI-powered precision and human-centered design.</strong>
              </p>

              <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
                Benefits of Using SAP Signavio in an S/4HANA Journey
              </h2>
              <div className="flex flex-wrap justify-center lg:mt-[120px] mt-[80px] gap-y-[60px] md:gap-y-[90px] md:gap-x-[18px] xl:w-[1100px] md:w-[90%] sm:w-[70%]">
                {benefitsPoints.map((point, index) => (
                  <div
                    key={index}
                    className="border border-[#707070] relative flex-1 min-w-[300px] max-w-[350px] lg:pb-[41px] lg:pt-[70px] pt-[60px] pb-[40px]"
                  >
                    <div className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[80px] lg:h-[80px] absolute lg:top-[-40px] top-[-30px] left-1/2 -translate-x-1/2 flex items-center justify-center bg-[#006FBE] text-white font-bold rounded-full text-[26px] xl:text-[32px] 2xl:text-[38px] 4xl:text-[50px]">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="font-bold 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] p-4 bg-[#e0dfdf] px-[35px]">
                        {point.title}
                      </h3>
                      <p className="px-[35px] lg:pl-[28px] lg:pr-[22px] lg:mt-[32px] mt-[18px] 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="pb-3 font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
                Use Cases Across the Enterprise
              </h2>
              <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                SAP Signavio for S/4HANA drives measurable value across multiple
                domains:
              </p>

              <ul className="list-disc space-y-2 font-medium  4xl:text-[20px]  xl:text-[18px]  text-[16px] pl-[32px] pt-4">
                {domainsPoints.map((point, index) => (
                  <li key={index}>
                    <h3 className="font-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">
                      {point.title}:
                    </h3>{" "}
                    {point.desc}
                  </li>
                ))}
              </ul>
              <h2 className="pb-3 font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
                Why Not Having Signavio Can Be Risky
              </h2>
              <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                Without SAP Signavio, organizations risk:
              </p>
              <UnorderedList
                arrName={riskPoints}
                ulClassName="mt-3 font-medium list-disc 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[32px] space-y-2"
                liClassName=""
              />
              <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                In essence, an S/4HANA implementation without Signavio is like building a state-of-the-art skyscraper on a fragile foundation.
              </p>
              <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
                Rialtes + Signavio + S/4HANA = Intelligent Transformation
              </h2>
              <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] ">
                SAP S/4HANA is the digital backbone for enterprises of the future. But to unlock its true potential, organizations need clarity, transparency, and AI-driven insights. With Rialtes’ Voyager+ methodology, the Signavio process transformation suite, and the <Link href={"https://www.rialtes.com/insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule/"}><span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">intelligence of Joule</span></Link>, enterprises can confidently deliver business transformation that is scalable, measurable, and future-ready.

              </p>
              <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] ">
                The message is clear: With Rialtes as your transformation partner, S/4HANA becomes the foundation for intelligent enterprise reinvention.
              </p>
              <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
                FAQs: Frequently Asked Questions  </h2>
              <FAQAccordion faqData={faqData} />
            </div>
          </div>
        </div>
      </section>
      {/* Latest Blogs */}
      <div className="custom-container lg:pr-0 pb-10 mt-2">
        <BlogsCarousel slides={blogs} />
      </div>
    </div>
  );
}
