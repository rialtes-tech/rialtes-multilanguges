"use client";
import Image from "next/image";
import Seo from "../../../components/Seo";
import ContactForm from "../../../components/contactform";
import BreadCrumbs from "../../../components/BreadCrumbs";
import React from "react";
import Script from "next/script";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
import UnorderedList from "@/app/components/unorderedList";
import LearnMoreButton from "@/app/components/learnMore";
import styles from "../../../temp.module.css";

export const agentChatData = {
  title: "Introducing AgentChat",
  subtitle:
    "Transforming WhatsApp Conversations with Salesforce WhatsApp Integration",

  description:
    "Meet AgentChat, Rialtes’ proprietary bi-directional WhatsApp conversational app built natively on the Salesforce Platform — designed to accelerate customer interactions across any Salesforce Cloud.",

  features: [
    "<strong>Instant Deployment:</strong> Go live in minutes — no complex setup required.",
    "<strong>Universal Salesforce Compatibility:</strong> Works seamlessly with Sales, Service, Marketing, and Experience Clouds.",
    "<strong>Multi-Role and Secure:</strong> Supports robust role-based access and enterprise-grade security models.",
    "<strong>End-to-End Record Delegation:</strong> Assign Cases, Leads, Work Orders, and Custom Records by type, ensuring seamless workflows.",
    "<strong>Enhanced Customer Experience:</strong> Enable real-time two-way WhatsApp conversations directly from Salesforce, improving engagement and resolution rates.",
  ],

  footerText:
    "AgentChat is the ideal solution for managing customer service, sales inquiries, order updates, and marketing outreach, all securely within Salesforce.",
};
export const autoSenseResultsData = {
  list: [
    "Reduce sales cycle by 15–30% with AI-assisted workflows",
    "Improve service resolution times by 40% using Agentforce",
    "Achieve 100% adoption of Lightning & Data Cloud-enabled workflows",
    "Cut integration costs by 25–40% with MuleSoft accelerators",
  ],
};

export const rialFinancePlusData = {
  title: "RialFinance+",
  subtitle:
    "Reinventing Financial Services With AI, Data, and Industry Insight",

  description:
    "RialFinance+ helps financial institutions modernize operations, enhance customer experience, and unlock data-driven decision making. Powered by Salesforce Financial Services Cloud, Agentforce, and Data Cloud, it delivers strategy, implementation, automation, and ongoing optimization.",

  list: [
    "Faster onboarding and client lifecycle management",
    "Intelligent automation for advisory, lending, and service processes",
    "Predictive insights and relationship intelligence",
    "Connected experiences across every channel",
  ],
};

export const lifeAIPlusData = {
  title: "LifeAI+",
  subtitle:
    "Salesforce Life Sciences Cloud for Intelligent, Patient-Centric Solutions",

  description:
    "LifeAI+ is our comprehensive consulting framework purpose-built for life sciences organizations, supporting innovation across drug development, patient engagement, clinical operations, and compliance.",

  list: [
    "Strategic advisory and digital roadmap planning",
    "Salesforce Health Cloud & Life Sciences Cloud implementations",
    "Integration with ERP, EMR, and partner ecosystems",
    "Regulatory compliance, data privacy, and quality assurance",
    "Continuous enhancement and managed services",
    "AI-powered analytics with Salesforce Data Cloud",
    "Agentforce copilots for intelligent process automation",
  ],
};

export const advantagePlusData = {
  title: "Advantage+",
  subtitle:
    "Reimagine Marketing with Data, Intelligence, and Personalization with Salesforce Marketing Cloud Services",

  description:
    "Advantage+ helps B2B and B2C organizations unlock the full potential of Salesforce Marketing Cloud with end-to-end advisory, implementation, integration, and continuous optimization.",

  list: [
    "Predictive campaign optimization powered by Einstein AI",
    "Unified real-time customer profiles across email, mobile, web, and social",
    "AI-generated campaign strategies through Agentforce for faster conversions",
    "Dynamic segmentation that adapts to behavior automatically",
  ],
};
export const salesforceAgentData = {
  title: "SalesforceAgent+",
  subtitle: "Salesforce Managed Services with Rialtes",

  description: [
    "Agentforce is reshaping how businesses automate work and support customers. With SalesforceAgent+, we help you design, deploy, and scale autonomous AI agents that deliver measurable impact from day one.",
    "Our certified consultants guide you through the full lifecycle — from readiness assessment and deployment to adoption and optimization — so your teams see value fast.",
  ],
  whereWeCreate: " Where we create impact",
  deliverTitle: "What we deliver",
  keyCapabilities: " Key capabilities",
  whatIsIncluded: "  What’s included:",
  businessValue: " Business value",
  keyFeatures: "Key Features of AgentChat:",

  list: [
    "AI readiness assessments tailored to your industry",
    "Conversational AI for Sales, Service, and Field teams",
    "Einstein GPT automations for proactive support and smarter selling",
    "Agentforce enablement workshops and onboarding",
    "Pre-built AI agents for case routing, lead nurturing, and knowledge intelligence",
  ],
};

export default function SalesForceConsulting() {
  const data = advantagePlusData;
  const datalifeAi = lifeAIPlusData;
  const dataRialFinance = rialFinancePlusData;
  const dataAgentChat = agentChatData;
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Salesforce Consulting Services",
    url: "https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/",
    description:
      "Rialtes provides comprehensive Salesforce consulting services including implementation, integration, migration, and support to help businesses scale, automate processes, and enhance customer engagement.",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "Rialtes",
      url: "https://www.rialtes.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rialtes.com/images/homepage/logo.svg",
      },
    },
    mainEntity: {
      "@type": "Service",
      name: "Salesforce Consulting Services",
      serviceType:
        "Salesforce Implementation, Integration, Migration, Support, Agentforce & Data Cloud Solutions",
      provider: {
        "@type": "Organization",
        name: "Rialtes",
        url: "https://www.rialtes.com",
      },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Singapore" },
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "Enterprise Leaders, CIOs, IT Heads, CRM Managers, Customer Experience Teams",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Salesforce Consulting Services by Rialtes",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Salesforce Implementation Services",
              description:
                "Customized Salesforce implementations to align CRM functionality with business needs.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Salesforce Integration Services",
              description:
                "Connect Salesforce with ERP, third-party apps, and APIs for seamless data flow.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Salesforce Migration Services",
              description:
                "Smooth data migration from legacy CRMs or other platforms to Salesforce with zero data loss.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Salesforce Support Services",
              description:
                "Ongoing CRM support, maintenance, and optimization for peak system performance.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Salesforce Agentforce Solutions",
              description:
                "Create and deploy autonomous AI agents for 24/7 support and service automation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Salesforce Data Cloud Implementation",
              description:
                "Unify customer data for actionable insights and 360° engagement with Data Cloud.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Salesforce Lightning App Development",
              description:
                "Custom apps using Lightning framework for enhanced UX and faster workflows.",
            },
          },
        ],
      },
    },
  };

  const list = [
    "Salesforce + SAP Integration Experts",
    "Full GenAI + Agentforce Lifecycle Enablement",
    "Deep Industry Accelerators (AutoSense, LifeAI+, RialFinance+, Advantage+)",
    "Productized IP like AgentChat & SalesforceAgent+",
    "Enterprise-Scale Governance, Security & AI Compliance",
  ];

  const services = [
    {
      title: "Lightning Services",
      desc: "We help you harness the full power of Salesforce Lightning. From building intuitive interfaces to developing custom components, our team crafts Lightning experiences that simplify work for your users and elevate customer engagement.",
    },
    {
      title: "Integration Services",
      desc: "Your systems shouldn’t operate in silos. We connect Salesforce with ERP, legacy platforms, third-party tools, and modern cloud applications to create a unified data flow. The result: faster decisions, accurate insights, and a truly connected customer journey.",
    },
    {
      title: "Implementation Services",
      desc: "A successful Salesforce implementation is more than setup — it’s strategy, alignment, and adoption. Our experts tailor the platform to your business model, automate key processes, and set up a scalable foundation that evolves as you grow.",
    },
    {
      title: "Migration Services",
      desc: "Whether you’re moving from spreadsheets, legacy CRMs, or another cloud system, we ensure a clean, secure, and efficient migration to Salesforce. You get structured data, improved usability, and a modern UI that boosts productivity from day one.",
    },
    {
      title: "Managed Support",
      desc: "Salesforce shouldn’t stop evolving after go-live. Our managed support keeps enhancements, automation, and security updates continuous—so the platform grows with your business, not behind it.",
    },
    {
      title: "Agentforce & AI Implementation",
      desc: "AI is now core to CRM. We deploy Agentforce and industry-trained AI agents to automate support, sales, service, and field operations. Your teams focus on strategic work while AI handles routine requests at scale.",
    },
    {
      title: "Data Cloud + Zero-Copy Architecture",
      desc: "We implement Data Cloud to unify customer data from all systems without duplicating it. Real-time insights, identity resolution, and activation across Sales, Service, Marketing, and Commerce—powered by zero-copy data access.",
    },
    {
      title: "MuleSoft + API-led Integration",
      desc: "We use the MuleSoft API-led architecture to standardize integration across applications, devices, and data sources. Faster connectivity, modular design, and reusable APIs that cut integration timelines for future initiatives.",
    },
  ];
  const agentforceServices = [
    {
      title: "Agentforce Strategy & Readiness",
      desc: "We assess your processes, data, and use cases to map out where AI agents can deliver the biggest impact across sales, service, marketing, and operations.",
    },
    {
      title: "AI Agent Development & Customization",
      desc: "Using Agent Builder, Prompt Builder, and the Atlas Reasoning Engine, we design AI agents that understand your workflows, follow your guardrails, and operate with human-level reasoning.",
    },
    {
      title: "Enterprise Deployment of AI Agents",
      desc: "From security to governance to testing, we handle the complete rollout of Agentforce agents, ensuring seamless integration with your Salesforce org, Data Cloud, and existing automations.",
    },
    {
      title: "Agentforce Optimization & Monitoring",
      desc: "Our team fine-tunes agent performance with real-time analytics, A/B testing, and continuous improvements, ensuring your AI agents learn, adapt, and get better over time.",
    },
    {
      title: "Workshops & User Enablement",
      desc: "We train your teams to work confidently with AI agents, ensuring adoption, trust, and long-term success across the organization.",
    },
  ];

  const salesforceProductsData = {
    heading: "Salesforce Products",
    subheading:
      "Salesforce consulting is only part of what we deliver. We help you unlock the full power of the Salesforce ecosystem with products that elevate every function across your business.",
    experTiesHEading: " Rialtes Salesforce Expertise",
    expertiseSubheading:
      "The force behind our consulting success is people, proven skills, and deep industry know-how.",
    faqHeading: " Salesforce FAQs",

    sections: [
      {
        title: "Salesforce Health Cloud",
        image: "/images/salesforce-consulting/desktop/health-cloude.webp",
        alt: "Salesforce Health Cloud",
        description:
          "Give your care teams real-time visibility into patient information and streamline coordination across the healthcare journey. Improve outcomes, enhance experience, and operate with confidence.",
        list: [
          "Unified patient view with real-time updates",
          "Better care planning and collaboration",
          "Higher patient satisfaction and improved outcomes",
          "Streamlined workflows and clinical efficiency",
        ],
        buttons: [
          { label: "Learn More", type: "primary" },
          { label: "Visit Full LifeAI+ Page", type: "secondary" },
        ],
        href: "https://www.rialtes.com/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting",
      },
      {
        title: "Salesforce Data Cloud",
        image:
          "/images/salesforce-consulting/desktop/salesforce-data-cloude.webp",
        alt: "Salesforce Data Cloud",
        description:
          "Transform fragmented data into actionable intelligence. Connect systems, unify customer profiles, and deliver personalized experiences at scale.",
        list: [
          "True Customer 360",
          "Zero-copy integration across platforms",
          "Real-time decisioning and segmentation",
          "Consistent omnichannel engagement",
        ],
        buttons: [
          { label: "Learn More", type: "primary" },
          { label: "Visit Full Data Cloud Page", type: "secondary" },
        ],
        href: "https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india",
      },

      {
        title: "MuleSoft",
        image: "/images/salesforce-consulting/desktop/mulesoft.webp",
        alt: "MuleSoft",
        description:
          "Build a connected ecosystem with powerful integration and API-led automation. Improve agility, cut operational complexity, and accelerate delivery across all systems.",
        list: [
          "Lower maintenance and integration costs",
          "Faster time-to-market",
          "Streamlined digital workflows",
          "End-to-end visibility and performance",
        ],
        buttons: [
          { label: "Learn More", type: "primary" },
          { label: "Visit Full MuleSoft Page", type: "secondary" },
        ],
        href: "https://www.rialtes.com/solutions/integration/mulesoft-salesforce",
      },
      {
        title: "Revenue Cloud",
        image: "/images/salesforce-consulting/desktop/revenue.webp",
        alt: "Revenue Cloud",
        description:
          "Optimize your revenue lifecycle — from configuration and pricing to billing and reporting. Bring sales and finance closer together and deliver a better buying experience.",
        list: [
          "Faster and simplified revenue generation",
          "Higher conversion and deal accuracy",
          "A more seamless buyer journey",
          "Smarter product configuration and delivery",
        ],
        buttons: [{ label: "Learn More", type: "primary" }],
        href: "https://www.rialtes.com/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting",
      },
    ],
  };

  const faqs = [
    {
      question: "What does a Salesforce consulting partner do?",
      answer:
        "A consulting partner helps you get the most out of Salesforce. They tailor the platform to your business processes, automate workflows, integrate external systems, and guide user adoption.",
    },
    {
      question: "How does Rialtes integrate Salesforce with SAP?",
      answer:
        "Rialtes connects Salesforce and SAP using API-led integrations, MuleSoft, and prebuilt accelerators. Customer, order, pricing, and inventory data flows in real time between both systems.",
    },
    {
      question: "What is Agentforce, and how does it work?",
      answer:
        "Agentforce is Salesforce’s AI platform for creating autonomous digital agents. These agents can quote, schedule service, resolve support requests, pull inventory data, or push updates to customers.",
    },
    {
      question: "What industries does Rialtes specialize in?",
      answer:
        "Rialtes works across Manufacturing, Life Sciences, Healthcare, Higher Education, Automotive, Consumer Goods, and Public Sector.",
    },
    {
      question: "What is the cost of Salesforce consulting services?",
      answer:
        "Pricing depends on project scope—whether quick implementation, deep customization, integrations, or long-term support. Most customers start with a discovery workshop.",
    },
    {
      question: "How does Data Cloud improve personalization?",
      answer:
        "Data Cloud unifies customer data from every system into a single, real-time profile. It activates that unified data across Salesforce apps for personalized experiences.",
    },
  ];

  const autoSenseData = {
    headerTitle: "Salesforce Consulting Services",
    subHeader: " Unlock AI, Data, and Enterprise-Scale Growth.",
    unlockPara:
      " We help enterprises accelerate Salesforce adoption, integrate SAP & legacy systems seamlessly, and activate GenAI + Agentforce across Sales, Service, Marketing & Industries.",
    whyChooseTitle: " Why Choose Rialtes",
    salesforceParagraph:
      " Salesforce Consulting Services That Move Your Business Forward",
    rialtesSalesforceParagraph:
      " Rialtes is a Salesforce Crest Consulting Partner with a clear mission: help businesses run smarter, move faster, and grow  without the usual complexity. We work across the full Salesforce ecosystem — implementation, customization, integrations, managed services, and everything in between.",
    whatYouCanAchieveTitle: "What You Can Achieve With Rialtes",
    ourSalesforceCRMTitle: "Our Salesforce CRM Consulting Services",
    salesforceTitle: " Agentforce Services",
    agentforceParagraph:
      " Agentforce is redefining how businesses use AI, and we help you deploy it with confidence and clarity.",
    title: "AutoSense",
    subtitle: "Salesforce Automotive Cloud for the Mobility Era",
    description1:
      "AutoSense is our specialized consulting framework for automotive transformation. With deep industry expertise and modern platforms like Salesforce Automotive Cloud, SAP integrations, and AI-powered automation, we help brands innovate across the mobility lifecycle.",

    description2:
      "Whether you're investing in EV ecosystems, redefining customer experience, or modernizing supply chain operations, AutoSense delivers outcomes that move your business forward.",

    list: [
      "OEMs, EV startups, suppliers, and dealership networks",
      "Electrification and connected vehicle strategies",
      "Seamless service and after-sales experiences",
      "Integrated mobility data and intelligent forecasting",
    ],
  };

  const statsData = [
    {
      text: "Crest Consulting Partner",
      width: "w-[220px] 4xl:w-[350px] 2xl:w-[240px] xl:w-[250px]",
      border: "pr-6 border-r border-[#8D8D8D]",
    },
    {
      text: "300+ Salesforce Certifications",
      width: "w-[250px] 4xl:w-[400px] 2xl:w-[240px] xl:w-[250px]",
      border: "px-6 border-r border-[#8D8D8D]",
    },
    {
      text: "5★ AppExchange Rating",
      width: "w-[245px] 4xl:w-[400px] 2xl:w-[250px] xl:w-[250px]",
      border: "pl-6",
    },
  ];

  const expertiseData = [
    {
      title: "300+ Salesforce Certifications",
      description:
        "Covering Agentforce, Sales Cloud, Service Cloud, Data Cloud, Marketing Cloud, MuleSoft, and Tableau.",
    },
    {
      title: "Certified Architects & AI Consultants",
      description:
        "Enterprise-scale solutions designed and delivered by Salesforce Architects, AI specialists, and experienced consultants.",
    },
    {
      title: "Industry Specialists",
      description:
        "Expertise in Healthcare, Manufacturing, Education, Automotive, Life Sciences, Retail, and more.",
    },
    {
      title: "Cross-Cloud Experts",
      description:
        "Skilled in unifying Sales, Service, Marketing, and Industry Clouds with AI and Data Cloud.",
    },
    {
      title: "Proven Innovation Track Record",
      description:
        "From AI adoption with Agentforce to Zero Copy data models between Salesforce and SAP.",
    },
  ];

  return (
    <div>
      <Seo
        title="AI-Driven Salesforce Consulting Services | Rialtes"
        description="Rialtes offers Salesforce consulting services focused on AI-led implementation, integration, and scalable digital transformation for modern enterprises."
        canonical={
          "https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india"
        }
      />
      <Script
        id="schema-salesforce-consulting"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <BreadcrumbSchema currPage="Salesforce Consulting" />

      <div className="relative group overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/salesforce-consulting/desktop/banner.webp"
            alt="Salesforce Consulting Team"
            className="xl:h-full h-[300px] md:h-[350px] 4xl:h-[650px] 2xl:h-[600px]"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            priority
          />
        </div>
        <div className="xl:hidden block w-full h-[320px] md:h-[450px] 4xl:h-[650px] 2xl:h-[600px] xl:h-[550px]">
          <Image
            src="/images/salesforce-consulting/mobile/banner.webp"
            alt="Salesforce Consulting Team"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            priority
          />
        </div>

        <div className="absolute custom-container  top-[30%] xl:text-start xl:top-[25%] text-white">
          <h1
            className={`${styles.heading2} md:w-[46%]  lg:w-[37%]  xl:w-[48%] leading-tight  2xl:w-[41%] 4xl:w-[56%]`}
          >
            {autoSenseData.headerTitle}
          </h1>
        </div>
      </div>

      <div className="custom-container">
        <BreadCrumbs currPage="Salesforce Consulting" />
      </div>
      <div className="grid lg:grid-cols-10 xl:gap-16 gap-5 px-6 custom-container mt-10 lg:mt-16">
        <div className="lg:col-span-6 4xl:col-span-9 2xl:col-span-5 ">
          <h2 className={` ${styles.heading2}`}>{autoSenseData.subHeader}</h2>
        </div>
      </div>
      <section className="custom-container xl:mt-10 mt-5">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-9 col-span-1">
            <p className={`${styles.paragraph22} lg:mt-3 mb-8 mt-3`}>
              {autoSenseData.unlockPara}
            </p>
            <div className="flex flex-col xl:flex-row mt-10">
              {statsData.map((item, index) => (
                <div
                  key={index}
                  className={`
        ${item.width}
        py-4 xl:py-0
        flex xl:block
        justify-start
      `}
                >
                  <p
                    className={`
    inline-block
    text-[#0A6BB8] 
    font-bold 
    text-[20px] 
    xl:text-[22px] 
    2xl:text-[24px] 
    4xl:text-[26px] 
    leading-tight
    border-gray-300
    pb-2 xl:pb-0
    ${index !== 0 ? "xl:pl-8" : ""}
    ${
      index !== statsData.length - 1
        ? "border-b-[3px] xl:border-b-0 xl:border-r-[3px]"
        : "border-b-0 xl:border-r-0"
    }
  `}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className={` ${styles.heading2} xl:mt-20 mt-10`}>
          {autoSenseData.whyChooseTitle}
        </h2>

        <UnorderedList
          arrName={list}
          ulClassName={` ${styles.unorderedList}`}
        />
      </section>

      <section className="w-full bg-[#f2f2f2] xl:mt-20 mt-32 custom-container 4xl:pr-[143px] xl:h-[691px] 4xl:h-[780px] 2xl:h-[685px]">
        <div className="pt-16">
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="relative w-full xl:col-span-6 col-span-1 order-1 xl:order-3 top-[-130px] xl:top-0">
              <div className="relative w-full h-[320px] md:h-[500px] xl:h-[540px] 2xl:h-[530px] 4xl:h-[600px] 4xl:top-[47px] 2xl:top-[38px] xl:top-[50px]">
                <Image
                  src="/images/salesforce-consulting/desktop/services.webp"
                  alt="Salesforce Consulting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="xl:col-span-9 col-span-1 order-2 xl:order-1 mt-[-115px] xl:mt-0">
              <h2 className={`${styles.heading2} mt-8 xl:mt-0`}>
                {autoSenseData.salesforceParagraph}
              </h2>
            </div>

            <div className="xl:col-span-6 col-span-1  order-3 xl:order-2">
              <p
                className={`${styles.paragraph20} mt-8 4xl:pr-16 2xl:pr-16 xl:pr-10`}
              >
                {autoSenseData.rialtesSalesforceParagraph}
              </p>

              <h3 className={`${styles.paragraph22} mt-10 font-bold`}>
                {autoSenseData.whatYouCanAchieveTitle}
              </h3>

              <UnorderedList
                arrName={autoSenseResultsData.list}
                ulClassName={`${styles.unorderedList} 4xl:pr-20`}
              />

              <div className="mt-8">
                <LearnMoreButton
                  bgcolor="#073259"
                  href="https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full xl:mt-16 mt-10">
        <div className="custom-container md:py-24 lg:py-28">
          <h2 className={` ${styles.heading2}`}>
            {autoSenseData.ourSalesforceCRMTitle}
          </h2>
          <div
            className="
            xl:mt-16 mt-10
            grid
            xl:grid-cols-3
            md:grid-cols-2
            grid-cols-1
            xl:gap-y-14 gap-y-10
            gap-x-12
          "
          >
            {services.map((service, index) => (
              <div key={index} className="max-w-md">
                <h3
                  className={`${styles.paragraph22} font-bold text-[#1e73be]`}
                >
                  {service.title}
                </h3>

                <p className={`${styles.paragraph20} mt-4`}>{service.desc}</p>
              </div>
            ))}
            <div className="xl:relative 4xl:bottom-[-175px] 2xl:bottom-[-150px] xl:bottom-[-120px] xl:text-center">
              <LearnMoreButton bgcolor="#073259" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#071a3c]  xl:mt-40 mt-24">
        <div className="custom-container  pt-48  md:pt-24 xl:pt-28">
          <div className="relative  h-[320px] md:h-[380px] lg:h-[450px] xl:h-[520px] bottom-[250px]">
            <Image
              src="/images/salesforce-consulting/desktop/agentforce-services.webp"
              alt="Agentforce Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-[-190px]">
            <h2 className={` ${styles.heading2} text-white`}>
              {autoSenseData.salesforceTitle}
            </h2>

            <p
              className={`${styles.paragraph20} 4xl:pr-[115px] 2xl:pr-[100px] xl:pr-[80px] text-white`}
            >
              {autoSenseData.agentforceParagraph}
            </p>
          </div>

          <div
            className="
            mt-16
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-y-14
            gap-x-12 xl:pr-[150px] 2xl:pr-[300px] 4xl:pr-[50px]
          "
          >
            {agentforceServices.map((service, index) => (
              <div key={index} className="max-w-md">
                <h4
                  className={`${styles.paragraph22} font-semibold text-white`}
                >
                  {service.title}
                </h4>

                <p
                  className={`${styles.paragraph20} mt-4 text-white font-light`}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex xl:justify-end 4xl:pr-[50px] 2xl:pr-[300px] xl:pr-[150px] mt-10">
            <LearnMoreButton
              bgcolor="#073259"
              href="https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting"
            />
          </div>
        </div>
      </section>
      <section className="w-full overflow-hidden custom-container xl:pl-0 max-md:px-0">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div
            className="bg-[#C4E5EB] pl-0 xl:pt-16 pt-[18rem] md:px-[35px]
        xl:col-span-7 col-span-1 
        xl:pl-[80px] 4xl:pl-[280px] 
        4xl:pr-[300px] 2xl:pr-[400px] xl:pr-[350px] 
        xl:mr-[-280px] 2xl:pl-[145px]
        order-2 xl:order-1 max-md:px-[35px]"
          >
            <h3 className={`${styles.heading2} font-light`}>
              {salesforceAgentData.title}
            </h3>

            <h4 className={`${styles.heading30} mt-4`}>
              {salesforceAgentData.subtitle}
            </h4>

            {salesforceAgentData.description.map((para, index) => (
              <p
                key={index}
                className={`${styles.paragraph20} mt-6 text-black`}
              >
                {para}
              </p>
            ))}

            <div className="mt-10">
              <h4 className={`${styles.paragraph22} font-bold`}>
                {salesforceAgentData.deliverTitle}
              </h4>

              <UnorderedList
                arrName={salesforceAgentData.list}
                ulClassName={`${styles.unorderedList}`}
              />
            </div>

            <div className="mt-10">
              <LearnMoreButton
                bgcolor="#073259"
                href="https://www.rialtes.com/services/application-services/salesforce-managed-services-provider-salesforceagentplus"
              />
            </div>
          </div>
          <div className="relative w-full xl:col-span-5 col-span-1 xl:mt-16 order-1 xl:order-2 max-md:px-[35px] mt-[-200px]">
            <div className="relative w-full h-[320px] md:h-[500px] 4xl:h-[690px] 2xl:h-[605px] xl:h-[630px] top-[260px] xl:top-0">
              <Image
                src="/images/salesforce-consulting/desktop/salesforce.webp"
                alt="Salesforce Agent Plus"
                fill
                className="object-cover shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container w-full  xl:pr-0 mt-8 max-md:px-0">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="relative xl:col-span-5 max-md:px-[35px]  col-span-1 w-full h-[320px]  md:h-[500px] ] 4xl:h-[660px] 2xl:h-[590px] xl:h-[560px]  xl:mt-16 ">
            <Image
              src="/images/salesforce-consulting/desktop/autosense.webp"
              alt="AutoSense Mobility"
              fill
              className="object-cover max-md:px-[35px]"
              priority
            />
          </div>

          <div className=" bg-[#C3EAFF] xl:pt-14 pt-[21rem] max-md:px-[35px] md:px-[35px]  mt-[-300px] xl:mt-0 col-span-7 2xl:pl-[280px] xl:pl-[260px] 4xl:ml-[-300px] xl:ml-[-200px]  4xl:pl-[415px]  4xl:pr-[180px] 2xl:pr-[170px] xl:pr-[50px]">
            <h3 className={`${styles.heading2} font-light`}>
              {autoSenseData.title}
            </h3>

            <h4 className={`${styles.heading30} mt-6`}>
              {autoSenseData.subtitle}
            </h4>
            <p className={`${styles.paragraph20} mt-6`}>
              {autoSenseData.description1}
            </p>

            <p className={`${styles.paragraph20} mt-6 `}>
              {autoSenseData.description2}
            </p>

            <h4 className={`${styles.paragraph22} mt-8 font-bold`}>
              {salesforceAgentData.whereWeCreate}
            </h4>

            <UnorderedList
              arrName={autoSenseData.list}
              ulClassName={` ${styles.unorderedList}`}
            />

            <div className="mt-10">
              <LearnMoreButton
                bgcolor="#073259"
                href="https://www.rialtes.com/services/lob/salesforce-automotive-cloud-business-solutions-autosense"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full custom-container xl:pl-0 mt-10 max-md:px-0">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div
            className="bg-[#538DC1] 
        4xl:pr-[330px] 2xl:pr-[240px] 4xl:mr-[-280px] 2xl:mr-[-150px] xl:mr-[-100px]
        text-white 4xl:pl-[280px] xl:pl-[80px] pl-10 
        xl:pt-16 xl:col-span-7 col-span-1 xl:pr-[142px]
        order-2 xl:order-1 pt-[19rem] mt-[-275px] xl:mt-0"
          >
            <h3 className={`${styles.heading2} font-light`}>{data.title}</h3>

            <h4 className={`${styles.heading30} mt-6`}>{data.subtitle}</h4>

            <p className={`${styles.paragraph20} mt-6`}>{data.description}</p>

            <h4 className={`${styles.paragraph22} mt-8 font-semibold`}>
              {salesforceAgentData.keyCapabilities}
            </h4>

            <UnorderedList
              arrName={data.list}
              ulClassName={`${styles.unorderedList} pl-20`}
            />

            <div className="mt-10">
              <LearnMoreButton
                bgcolor="#073259"
                href="https://www.rialtes.com/services/lob/salesforce-marketing-cloud-implementation-consulting"
              />
            </div>
          </div>
          <div className="relative mt-10 xl:mt-16  xl:col-span-5 col-span-1 order-1 xl:order-2 max-md:px-[35px]">
            <div className="w-full h-[320px] md:h-[500px] 4xl:h-[650px] 2xl:h-[550px] xl:h-[560px] relative">
              <Image
                src="/images/salesforce-consulting/desktop/advantage.webp"
                alt="Advantage Plus Marketing"
                fill
                className="object-cover shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden  custom-container xl:pr-0 mt-10 max-md:px-0">
        <div className="relative">
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="relative w-full h-[320px]  md:h-[550px] 4xl:h-[695px] 2xl:h-[590px] xl:h-[615px] xl:col-span-5 col-span-1 xl:mt-16 mt-8">
              <Image
                src="/images/salesforce-consulting/desktop/lifeaiplus.webp"
                alt="LifeAI Plus"
                fill
                className="object-cover  max-md:px-[35px]"
                priority
              />
            </div>
            <div className="bg-[#AFE5E2] max-md:px-[35px] md:px-[35px]  mt-[-275px] xl:mt-0 pt-[19rem] xl:pt-14   xl:col-span-7 col-span-1 2xl:pr-[135px] 4xl:ml-[-250px] 4xl:pr-[160px] xl:pr-[100px] xl:ml-[-150px] 4xl:pl-[380px] xl:pl-[210px] 2xl:pl-[230px]">
              <h3 className={`${styles.heading2} font-light`}>
                {datalifeAi.title}
              </h3>
              <h3 className={`${styles.heading30} mt-6`}>
                {datalifeAi.subtitle}
              </h3>
              <p className={`${styles.paragraph20} mt-6 `}>
                {datalifeAi.description}
              </p>

              <h4 className={`${styles.paragraph22} mt-8 font-bold`}>
                {salesforceAgentData.whatIsIncluded}
              </h4>

              <UnorderedList
                arrName={datalifeAi.list}
                ulClassName={` ${styles.unorderedList}`}
              />

              <div className="mt-10">
                <LearnMoreButton
                  bgcolor="#073259"
                  href="https://www.rialtes.com/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full overflow-hidden custom-container xl:pl-0 xl:mt-10 mt-0  max-md:px-0">
        <div className="relative">
          <div className="grid xl:grid-cols-12 grid-cols-1  gap-10 lg:gap-20">
            <div className="bg-[#C4DBF5] max-md:px-[35px] md:px-[35px]  order-2 xl:order-1 pt-[21rem] mt-[-350px] xl:mt-0 xl:pt-16 xl:col-span-7 col-span-1 4xl:mr-[-450px] 2xl:mr-[-300px] xl:mr-[-280px] 4xl:pl-[280px] 2xl:pl-[150px] xl:pl-[85px] 4xl:pr-[440px] xl:pr-[320px] 2xl:pr-[350px]">
              <h3 className={`${styles.heading2} font-light`}>
                {dataRialFinance.title}
              </h3>
              <h4 className={`${styles.heading30} mt-6`}>
                {dataRialFinance.subtitle}
              </h4>

              <p className={`${styles.paragraph20} mt-6`}>
                {dataRialFinance.description}
              </p>
              <h4 className={`${styles.paragraph22} mt-8 font-bold`}>
                {salesforceAgentData.businessValue}
              </h4>

              <UnorderedList
                arrName={dataRialFinance.list}
                ulClassName={` ${styles.unorderedList}`}
              />
              <div className="mt-10">
                <LearnMoreButton
                  bgcolor="#073259"
                  href="https://www.rialtes.com/services/lob/salesforce-fsc-consulting-rialfinanceplus"
                />
              </div>
            </div>
            <div className="relative w-full h-[320px]  md:h-[550px] 4xl:h-[600px] 2xl:h-[530px] xl:h-[550px] xl:col-span-5 col-span-1 mt-16 order-1 xl:order-2">
              <Image
                src="/images/salesforce-consulting/desktop/realfinance.webp"
                alt="Rial Finance"
                fill
                className="object-cover  max-md:px-[35px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0A6BB8] text-white  mt-40 custom-container xl:px-0">
        <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-16 gap-8 4xl:pl-[280px] 4xl:pr-[360px] 2xl:px-[140px]  xl:px-[100px]">
          <div className="relative w-full h-[320px]  md:h-[500px] 4xl:h-[590px] 2xl:h-[600px] xl:h-[465px] xl:col-span-6 col-span-1 mt-[-100px]">
            <Image
              src="/images/salesforce-consulting/desktop/agentchat.webp"
              alt="AgentChat"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="xl:col-span-6 col-span-1 xl:pt-16 2xl:pr-[250px] 4xl:pr-0 xl:pr-0">
            <h3 className={`${styles.heading2} font-light`}>
              {dataAgentChat.title}
            </h3>

            <h4 className={`${styles.heading30} mt-6`}>
              {dataAgentChat.subtitle}
            </h4>
            <p className={`${styles.paragraph20} mt-10 `}>
              {dataAgentChat.description}
            </p>
          </div>
        </div>

        <div className="mt-16 4xl:px-[280px]   2xl:px-[140px] xl:px-[100px]">
          <h4
            className="
            font-bold
            4xl:text-[34px]
            2xl:text-[30px]
            xl:text-[24px]
            md:text-[20px]
            text-[16px]
          "
          >
            {salesforceAgentData.keyFeatures}
          </h4>

          <div className="grid md:grid-cols-2 xl:gap-8 4xl:mt-6 2xl:mt-8 xl:mt-0">
            <UnorderedList
              arrName={dataAgentChat.features.slice(0, 3)}
              ulClassName={` ${styles.unorderedList} pl-[20px] font-light`}
            />

            <UnorderedList
              arrName={dataAgentChat.features.slice(3)}
              ulClassName={` ${styles.unorderedList} pl-[36px] font-light`}
            />
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="xl:col-span-8 col-span-1">
              <p
                className={`${styles.paragraph20} 4xl:mt-10 2xl:mt-8 xl:mt-10 mt-10 font-light`}
              >
                {dataAgentChat.footerText}
              </p>
            </div>
          </div>

          <div className="xl:text-right mt-8 xl:mt-0">
            <LearnMoreButton
              bgcolor="#134874"
              href="https://www.rialtes.com/products/agentchat"
            />
          </div>
        </div>
      </section>

      <div className="xl:space-y-16 custom-container xl:mt-20 mt-10">
        <h2 className={` ${styles.heading2}`}>
          {" "}
          {salesforceProductsData.heading}
        </h2>
        <p className={`${styles.paragraph20} 4xl:mt-10 2xl:mt-8 xl:mt-4 mt-5`}>
          {salesforceProductsData.subheading}
        </p>

        <div className="grid xl:grid-cols-2 4xl:gap-32 2xl:gap-24 xl:gap-16 gap-10">
          {salesforceProductsData.sections.map((section, idx) => (
            <section key={idx} className="space-y-6">
              <Image
                src={section.image}
                alt={section.alt}
                width={600}
                height={400}
                className="w-full h-auto mt-8"
              />
              <div>
                <h3 className={`${styles.heading30}`}>{section.title}</h3>
                <p className={`${styles.paragraph20} mt-6`}>
                  {section.description}
                </p>

                <UnorderedList
                  arrName={section.list}
                  ulClassName={` ${styles.unorderedList}`}
                />
                <div className="mt-6 flex gap-4 flex-wrap">
                  <LearnMoreButton bgcolor="#073259" href={section.href} />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="bg-[#EDEDED] min-h-screen 4xl:mt-60 2xl:mt-48 xl:mt-48 mt-40">
        <div className="w-full relative custom-container h-[300px]  md:h-[500px] lg:h-[600px] xl:h-[700px]">
          <Image
            src="/images/salesforce-consulting/desktop/salesforce-experties.webp"
            alt="Salesforce Expertise"
            className="h-full object-cover absolute mt-[-100px] custom-container"
            fill
          />
        </div>
        <div className="custom-container">
          <div>
            <h2 className={` ${styles.heading2} mt-[-60px]`}>
              {salesforceProductsData.experTiesHEading}
            </h2>
            <h3 className={` ${styles.heading30} mb-12 mt-10`}>
              {salesforceProductsData.expertiseSubheading}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseData.map((item, index) => {
                const isLast = index === expertiseData.length - 1;
                const isDesktopLastColumn = index % 3 === 2;

                return (
                  <div
                    key={index}
                    className={`
          pr-6 pb-8 border-gray-500 leading-tight
          ${!isLast ? "border-b-2" : "border-b-0"}
          ${!isDesktopLastColumn ? "xl:border-r-2" : ""}
          ${isLast ? "xl:border-b-0" : "xl:border-b-0"}
          xl:pb-0
        `}
                  >
                    <h3
                      className={`${styles.paragraph22} font-bold text-[#0A6BB8] mb-4`}
                    >
                      {item.title}
                    </h3>

                    <p className={`${styles.paragraph20}`}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="xl:mt-12 xl:text-end">
              <LearnMoreButton
                bgcolor="#073259"
                href="https://www.rialtes.com/contact-us"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen py-12 px-6 custom-container 4xl:mt-20 2xl:mt-16 xl:mt-10 mt-8">
        <div>
          <h2 className={`${styles.heading2} mb-8 font-bold`}>
            {salesforceProductsData.faqHeading}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className={`${styles.paragraph20} font-bold  mb-3`}>
                  {faq.question}
                </h3>
                <p className={`${styles.paragraph20}`}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="pb-20  custom-container  4xl:mt-20 2xl:mt-16 xl:mt-10">
        <ContactForm
          className={`${styles.heading2} xl:w-[85%] w-full`}
          title={"Let’s Elevate Salesforce Together."}
          subtitle={
            "Book a Free 30-Minute Salesforce AI & Agentforce Readiness Assessment"
          }
        />
      </section>
    </div>
  );
}
