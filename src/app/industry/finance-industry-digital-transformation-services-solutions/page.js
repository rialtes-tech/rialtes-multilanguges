"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import LearnMore from "@/app/components/learnMore";
import ContactForm from "@/app/components/contactform";
import Script from "next/script";
import UnorderedList from "@/app/components/unorderedList";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Financial Services Cloud Salesforce (FSC) and SAP Consulting",
  "url": "https://www.rialtes.com/industry/finance-industry-digital-transformation-services-solutions/",
  "description": "Rialtes offers Salesforce Financial Services Cloud (FSC) and SAP consulting to help banks, wealth firms, insurers, and real estate companies drive AI-powered transformation, streamline compliance, and enhance customer experiences.",
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "url": "https://www.rialtes.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    },
    "sameAs": [
      "https://www.linkedin.com/company/rialtes-technologies-llc/",
      "https://www.youtube.com/@rialtes"
    ]
  },
  "mainEntity": {
    "@type": "Service",
    "name": "Financial Services Cloud Salesforce (FSC) and SAP Consulting",
    "description": "Salesforce FSC and SAP-powered digital transformation for banks, insurers, and real estate firms with AI, analytics, and personalized customer engagement.",
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "Singapore" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Financial Services Digital Transformation Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Salesforce Financial Services Cloud (FSC) Consulting",
            "description": "Implement and optimize Salesforce FSC for personalized onboarding, AI workflows, and unified customer engagement across banking and wealth management."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SAP S/4HANA for Financial Services",
            "description": "Integrate SAP S/4HANA with Salesforce FSC for core banking operations, risk management, real-time finance analytics, and regulatory compliance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Driven Financial Decisioning",
            "description": "Leverage AI for risk scoring, fraud detection, and customer insights with Salesforce Einstein and SAP AI."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AgentChat — WhatsApp for Salesforce FSC",
            "description": "Enable real-time, secure WhatsApp communication within Salesforce FSC for onboarding, alerts, and support."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Exelona — Real Estate Cloud for FSC",
            "description": "Transform real estate asset management and finance with Exelona, Rialtes’ proprietary FSC-based solution."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Zero Copy Data Integration",
            "description": "Unify Salesforce and SAP data clouds for real-time analytics and AI without moving data — secure, compliant, and actionable."
          }
        }
      ]
    }
  }
}
const challenges = [
  {
    number: "1",
    title: "Disconnected Customer Experiences & Legacy Systems",
    points: [
      "Inability to offer personalized, seamless banking experiences.",
      "Fragmented data across multiple systems limits real-time insights.",
    ],
  },
  {
    number: "2",
    title: "Regulatory and Risk Complexity",
    points: [
      "Struggling with fast-changing regulations (AML, KYC, ESG).",
      "Lack of streamlined compliance and audit processes.",
    ],
  },
  {
    number: "3",
    title: "Manual and Inefficient Lending, Wealth, and Advisory Operations",
    points: [
      "Delays in loan approvals, wealth management onboarding, and servicing.",
      "High operational costs due to outdated workflows.",
    ],
  },
  {
    number: "4",
    title: "Demand for AI-Driven, Real-Time Services",
    points: [
      "Customers expect instant decisions and service.",
      "Need for AI-based risk and credit analysis, fraud detection, and personalization.",
    ],
  },
];
const thougthLeadershipData = [
  "Omnichannel customer engagement powered by AI and real-time data.",
  "End-to-end compliant and efficient financial operations.",
  "Seamless integration between front office and core banking systems.",
  "Intelligent, AI-driven decision-making for risk, lending, and customer personalization. ",
]
const salesforceData = [
  "Customer onboarding, KYC, and AI-driven workflows.",
  "Integrated service, marketing, and advisory processes.",
  "Personalized experiences across retail, commercial, and wealth segments.",
]
const sapHanaData = [
  "Integrated finance and risk management.",
  "Real-time financial analytics and forecasting.",
  "Payments, contract management, and regulatory compliance.",
]
const aiData = [
  "Predictive credit and risk scoring.",
  "AI-driven customer personalization and insights.",
  "Fraud and compliance anomaly detection.",
  "AI-powered service and onboarding automation.",
]
const exelonaData = [
  "End-to-end asset and portfolio management.",
  "Integrated leasing, marketing, and tenant engagement.",
  "Revenue, expense, and performance optimization.",
  "AI-driven risk and investment modeling.",
]
const agentchatData = [
  "Instant customer onboarding and KYC verification via WhatsApp.",
  "AI-enabled conversational banking and lending support.",
  "Real-time alerts for fraud detection, transactions, and regulatory updates.",
  "Seamless document and signature collection.",
]
const drivenData = [
  "Unified client profile with data from SAP S/4 HANA and Salesforce FSC.",
  "AI-powered analytics without moving data — secure and compliant.",
  "Real-time insights for lending, wealth, and operations.",
]
const whyChooseData = [
  "Comprehensive strategy to execution for Financial Services Cloud & SAP.",
  "Proprietary tools like Exelona (Real Estate Cloud) and Agentchat (WhatsApp Integration).",
  "Deep AI and Data Cloud integrations for predictive and real-time operations.",
  "Unmatched understanding of compliance, risk, and customer experience.",
  "Global footprint with local expertise to drive lasting transformation.",
]

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Digital Finance Transformation Services and Solutions | Rialtes"
        description="Rialtes delivers expert-led digital finance transformation consulting with proven SAP and Salesforce solutions tailored to financial institutions, globally."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/industry/finance-industry-digital-transformation-services-solutions/"
      />
      <Script
        id="schema-finance"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* hero section */}
      <section className="relative h-[350px] md:h-[500px] 4xl:h-[650px]">
        <div className="xl:block hidden">
          <Image
            src="/images/Finance/finance.webp"
            alt="Finance desktop banner"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Mobile/Tablet Image */}
        <div className="xl:hidden block">
          <Image
            src="/images/Finance/mobile/finance-mobile.webp"
            alt="Finance mobile banner"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="2xl:mr-[33%] xl:mr-[30%]  custom-container  text-white xl:mt-0">
            <h1 className="text-[18px] md:text-[24px] font-bold  lg:w-auto leading-tight">
              Finance Industry Solutions
            </h1>
            <h2 className="text-[26px]  xl:text-[40px] xl:w-[67%] 4xl:w-[100%] 4xl:text-[60px] leading-tight  mt-[11.5px] md:mt-[28.5px]">
              Shaping the Future of Intelligent Financial Experiences
            </h2>
          </div>
        </div>
      </section>
      {/* page description */}
      <section className="custom-container xl:py-[97] py-[60px]">
        <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[56px] lg:w-[80%] xl:w-[80%] 4xl:w-[76%]">
          Accelerating Digital Transformation in Financial Services
        </h2>
        <p className="xl:text-[22px] text-[16px] leading-tight lg:w-[80%] 4xl:w-[70%] w-[95%] font-normal mt-8">
          Rialtes empowers banks, insurers, wealth managers, and real estate firms to drive innovation confidently. As a certified Salesforce and SAP partner, we offer end-to-end services—from advisory to post-go-live support—specialized in Financial Services Cloud, SAP S/4HANA, and AI solutions. With a global presence and deep industry expertise, we help financial institutions transform securely, stay compliant, and deliver exceptional customer experiences.
        </p>
      </section>
      {/* Thought Leadership section */}
      <section>
        <div className="relative pb-10 xl:pb-0 xl:mt-0">
          {/* Desktop Image */}
          <div className="md:block hidden">
            <Image
              src="/images/Finance/thought-leadership.webp"
              alt="thought-leadership image"
              width={0}
              height={0}
              className="h-full w-full"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          {/* Mobile Image */}
          <div className="md:hidden block relative w-full">
            <Image
              src="/images/Finance/mobile/thought-leadership-mobile.webp"
              alt="thought-leadership image"
              width={0}
              height={0}
              className="h-full w-full"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        <div className="relative 4xl:mx-[280px] 2xl:mx-[140px] md:mx-[80px]  left-0 right-0 bg-[#006FBE]  text-white p-[35px] xl:p-16 max-md:mx-[36px] max-xl:mt-[-100px] xl:mt-[-150px]">
          <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
            Thought Leadership
          </h2>

          <div className="grid lg:grid-cols-12 grid-cols-1 md:grid-cols-2 lg:mt-[27px] mt-[20px] md:gap-10 lg:gap-15 ">
            <div className="lg:col-span-6 col-span-12 md:col-span-1 ">
              <h3 className="4xl:text-[30px] xl:text-[28px] text-[24px] font-medium leading-tight">
                Beyond Implementation, Driving Financial Innovation
              </h3>
              <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight xl:my-[27px] my-[20px]">
                At Rialtes, we don’t just implement technology — we design the
                future of finance. Our RialFinance+ framework ensures seamless
                collaboration across advisory, design, AI integration,
                implementation, and post-go-live innovation, helping financial
                institutions achieve:
              </p>
            </div>
            <div className="lg:col-span-6 col-span-12 md:col-span-1">
              <UnorderedList arrName={thougthLeadershipData} ulClassName="list-disc xl:space-y-5 text-[16px] xl:text-[18px] 4xl:text-[20px] pl-5 marker:font-bold marker:text-2xl leading-tight pb-[40px]" liClassName="" />
              <div className=" absolute bottom-0">
                <LearnMore />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Critical Challenges Facing Commercial and Retail section */}
      <section className="custom-container relative grid grid-cols-12 gap-5 xl:pt-[89px] pt-[73px]">
        <div className="4xl:col-span-10 2xl:col-span-8 xl:col-span-9 col-span-12">
          <h2 className="leading-tight 4xl:text-[58px] xl:text-[40px] md:text-[26px]">
            Top 4 Critical Challenges Facing Commercial and Retail Banking Today
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-2 xl:gap-14 gap-20 mb-20 mt-20 grid-cols-1 items-stretch">
            {challenges.map((item, i) => (
              <div key={i} className="relative h-full">
                <div className="border border-gray-300 xl:p-12  p-8  xl:mt-[40px] h-full">
                  <div className="absolute  xl:mt-[-90px] 4xl:mt-[-100px] mt-[-65px]">
                    <p className="xl:text-[60px] 4xl:text-[70px] text-[50px] leading-tight px-5 inline bg-[#ffffff]">
                      {item.number}
                    </p>
                  </div>
                  <p className="mt-3 4xl:text-[40px] xl:text-[30px] text-[22px] leading-tight font-bold text-[#006FBE]">
                    {item.title}
                  </p>
                  <UnorderedList arrName={item.points} ulClassName="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl leading-tight pb-[7px] my-6" liClassName="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Deep Expertise in Salesforce FSC & SAP S/4 HANA section */}
      <section className="md:mt-[40px] mt-[5px] md:space-y-[190px] space-y-[89px]">
        <div className="custom-container !pr-0 max-md:px-0 ">
          <div className="relative max-md:pl-[36px]">
            <div className="absolute z-20 mt-[-36px] md:mt-[-40px] xl:mt-[-50px]"></div>
            <div className="custom-container md:!pl-0 xl:pt-[88px] pt-[58px] "
              style={{ backgroundColor: "#EFEFEF" }}>
              <div className="absolute top-0 left-0 md:left-[-20px] xl:left-[-40px] 4xl:left-[-100px] h-full md:w-[20px] xl:w-[40px] 4xl:w-[100px] z-0 "
                style={{ backgroundColor: "#EFEFEF" }}></div>
              <h2 className="leading-tight 4xl:text-[58px] xl:text-[40px] md:text-[26px] md:w-[65%] w-full">
                Deep Expertise in Salesforce FSC & SAP S/4 HANA
              </h2>
              <h3 className="leading-tight 4xl:text-[40px] xl:text-[30px] text-[20px] xl:mt-[37px] mt-[17px] ">
                Transforming Financial Operations End-to-End
              </h3>
              <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[70px] 4xl:gap-[127px] gap-y-[22px] xl:mt-9 mt-7 ml-1">
                <div className="md:col-span-5 col-span-12">
                  <div className="">
                    <Image
                      src="/images/Finance/deep-expertise-web.webp"
                      alt="Deep Expertise in Salesforce"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      width={0}
                      height={0}
                      sizes="100vw"
                      priority
                    />
                  </div>
                  <h3 className="xl:mt-9 mt-7 leading-tight 4xl:text-[30px] xl:text-[22px] text-[20px] text-[#006FBE]">
                    Salesforce Financial Services Cloud (FSC)
                  </h3>
                  <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight xl:mt-9 mt-7">
                    Our Salesforce-certified architects and consultants deliver
                    tailored FSC solutions to meet modern banking, lending, and
                    wealth management needs:
                  </p>
                  <UnorderedList arrName={salesforceData} ulClassName="list-disc xl:space-y-5 text-[16px] xl:text-[18px] 4xl:text-[20px] pl-5 marker:font-bold marker:text-2xl leading-tight pt-4" liClassName="" />
                  <LearnMore />
                </div>
                <div className="md:col-span-5 col-span-12 xl:mt-[100px] mt-0">
                  <div className="">
                    <Image
                      src="/images/Finance/deep-expertise1-web.webp"
                      alt="Deep Expertise in Salesforce"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      width={0}
                      height={0}
                      sizes="100vw"
                      priority
                    />
                  </div>
                  <h3 className="xl:mt-9 mt-7 leading-tight 4xl:text-[30px] xl:text-[22px] text-[20px] text-[#006FBE]">
                    SAP S/4 HANA for Financial Services
                  </h3>
                  <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight xl:mt-9 mt-7">
                    We extend Salesforce FSC capabilities with SAP S/4 HANA core
                    banking and finance solutions:
                  </p>
                  <UnorderedList arrName={sapHanaData} ulClassName="list-disc xl:space-y-5 text-[16px] xl:text-[18px] 4xl:text-[20px] pl-5 marker:font-bold marker:text-2xl leading-tight pt-4" liClassName="" />
                  <LearnMore />
                </div>
              </div>
              <div className="relative bottom-[-55px]">
                <p className="xl:w-[80%] 4xl:text-[26px] xl:text-[22px] text-[18px] xl:mt-[28px] mt-[10px] w-fit bg-[#0E3157] p-[24px] max-sm:ml-[-36px] text-white leading-tight">
                  Rialtes creates a unified financial services platform —
                  integrating Salesforce’s front office and SAP’s core financial
                  engine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* AI: Revolutionizing the Future of Finance section */}
      <section className="custom-container pt-[105px] pb-[50px]">
        <div>
          <>
            {/* Mobile Image */}
            <Image
              src="/images/Finance/mobile/revolutionizing-mobile.webp"
              alt="Revolutionizing the Future"
              className="w-full h-full block md:hidden"
              priority
              width={0}
              height={0}
            />

            {/* Desktop Image */}
            <Image
              src="/images/Finance/revolutionizing-web.webp"
              alt="Revolutionizing the Future"
              className="w-full h-full hidden md:block"
              priority
              width={0}
              height={0}
            />
          </>
        </div>
        <div className="grid  md:grid-cols-12 xl:gap-14 gap-1">
          <div className=" md:col-span-6 mt-9 sm:mr-0 md:mr-[60px] 4xl:mr-[1px] 2xl:mr-[66px]">
            <h2 className="leading-tight 4xl:text-[58px] xl:text-[40px] text-[26px] pb-4">
              AI: Revolutionizing the Future of Finance
            </h2>
            <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] xl:mt-9 leading-tight ">
              AI is transforming every layer of financial services — from
              customer service to credit decisioning. Rialtes leverages
              Salesforce AI (Einstein, Agentforce) and SAP AI tools to deliver:
            </p>
          </div>
          <div className="md:col-span-6 xl:ml-[70px] xl:my-9 my-5 ">
            <UnorderedList arrName={aiData} ulClassName="list-disc xl:space-y-5 text-[16px] xl:text-[18px] 4xl:text-[20px] pl-5 marker:font-bold marker:text-2xl leading-tight" liClassName="" />
            <div className="mt-10">
              <LearnMore />
            </div>
          </div>
        </div>
        <p className="4xl:text-[26px] xl:text-[22px] text-[18px] xl:mt-[28px] mt-[10px] w-fit bg-[#0E3157] p-[24px] text-white leading-tight">
          Rialtes makes AI actionable — not just a vision.
        </p>
      </section>
      {/* Exelona section */}
      <section className="relative py-7">
        <div className="h-full w-full relative z-0">
          {/* Desktop */}
          <div className=" hidden md:block h-full w-full md:h-[900px] lg:h-[800px] 3xl:h-full">
            <Image
              src="/images/Finance/exelona-web.webp"
              alt="Exelona"
              width={0}
              height={0}
              priority
              style={{ objectFit: "cover" }}
              className="z-0 h-full w-full"
            />
          </div>
          {/* Mobile */}
          <div className="block md:hidden">
            <Image
              src="/images/Finance/mobile/exelona-mobile.webp"
              alt="Exelona"
              width={800}
              height={600}
              priority
              className="w-full h-auto"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="md:absolute w-full top-[27px] text-white z-10">
          <div className="grid grid-cols-12 gap-2 custom-container max-md:px-0">
            <div className="md:col-span-6 col-span-12 pt-10 hidden md:block"></div>
            <div className="md:col-span-6 col-span-12 h-full relative overflow-hidden">
              {/* Blend layer  */}
              <div className="hidden md:block absolute inset-0 z-0">
                <Image
                  src="/images/Finance/bg-1.jpg"
                  alt="Exelona"
                  fill
                  priority
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-[#606060] mix-blend-multiply" />
              </div>
              <div className="relative z-10 lg:px-[54px] lg:pt-[70px] px-[36px] pt-[40px] max-md:bg-[#606060]">
                <h2 className="mb-4 leading-tight 2xl:text-[50px] xl:text-[40px] md:text-[26px]">
                  Exelona
                </h2>
                <h3 className="mb-4 leading-tight 4xl:text-[38px] xl:text-[28px] md:text-[26px]">
                  Revolutionizing Real Estate Finance with Salesforce FSC
                </h3>
                <p className="mb-4 leading-tight 4xl:text-[20px] xl:text-[18px] text-[16px]">
                  Exelona, our proprietary Real Estate Cloud Solution,
                  integrated with Salesforce FSC, transforms how real estate
                  firms manage financial assets and operations:
                </p>
                <UnorderedList arrName={exelonaData} ulClassName="list-disc leading-tight p-4 text-white font-light pt-4 text-[16px] xl:text-[18px] 4xl:text-[20px] space-y-4" liClassName="pb-1" />
                {/* Desktop  */}
                <p className="4xl:text-[26px] xl:text-[22px] text-[18px]  bg-[#006FBE] p-[24px] text-white leading-tight block md:hidden">
                  Exelona + FSC: A game-changing combination for Real Estate
                  Finance and Operations.
                </p>
              </div>
              {/* Mobile */}
              <p className="4xl:text-[26px] xl:text-[22px] text-[18px] max-md:m-[29px] bg-[#006FBE] p-[24px] text-white leading-tight hidden md:block relative mt-[25px] ">
                Exelona + FSC: A game-changing combination for Real Estate
                Finance and Operations.
              </p>
            </div>
          </div>
        </div>
        <div className="max-md:mt-[5px] md:bottom-[28px] max-md:m-[29px] absolute md:left-1/2">
          <LearnMore />
        </div>
      </section>
      {/* AgentChat section */}
      <section className="custom-container xl:pr-0 max-md:px-0 md:pt-14 pt-20">
        <div>
          <>
            {/* Mobile Image */}
            <Image
              src="/images/Finance/mobile/agentchat-mobile.webp"
              alt="AgentChat"
              className="w-full h-full block md:hidden"
              priority
              width={0}
              height={0}
            />
            {/* Desktop Image */}
            <Image
              src="/images/Finance/agentchat-web.webp"
              alt="AgentChat"
              className="w-full h-full hidden md:block"
              priority
              width={0}
              height={0}
            />
          </>
        </div>
        <div className="relative lg:w-[90%] md:w-full h-full bg-[#184671] text-white  md:p-[67px] max-md:p-[37px]">
          <div className="grid  md:grid-cols-12 xl:gap-14 gap-1">
            <div className=" md:col-span-6  sm:mr-0 md:mr-[60px]">
              <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px] pb-4 font-light">
                AgentChat
              </h2>
              <h3 className="leading-tight 4xl:text-[38px] xl:text-[30px] font-semibold text-[20px] pb-4">
                Real-Time WhatsApp Integration for Financial Services Cloud
              </h3>
              <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] xl:mt-9 mt-7 leading-tight">
                AgentChat, developed by Rialtes, brings real-time WhatsApp
                communication inside Salesforce FSC — fully secure and
                compliant:
              </p>
            </div>
            <div className="md:col-span-6 xl:my-9 my-7 ">
              <h3 className="leading-tight 4xl:text-[28px] xl:text-[20px] font-semibold text-[16px] pb-4">
                Real-Time WhatsApp Integration for Financial Services Cloud
              </h3>
              <UnorderedList arrName={agentchatData} ulClassName="list-disc xl:space-y-5 text-[16px] xl:text-[18px] 4xl:text-[20px] pl-5 marker:font-bold marker:text-2xl leading-tight" liClassName="" />
              <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] xl:mt-9 mt-7 max-md:mb-7 lg:mb-0 leading-tight">
                Included as part of Rialtes’ Financial Services solutions —
                enabling real-time, modern client engagement.
              </p>
              <div className="absolute bottom-0 ">
                <LearnMore bgcolor={"#006FBE"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* data driven section */}
      <section className="pt-[61px] xl:pt-[163px] custom-container xl:pr-0 max-md:px-0">
        <h2 className="leading-tight xl:w-[65%] 2xl:w-[58%] 4xl:w-[70%] 4xl:text-[60px] xl:text-[40px] text-[26px] pb-4 font-light hidden xl:block  ">
          Data-Driven Insights with Salesforce and SAP Data Clouds
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center ">
          <div className="order-1 xl:order-2 w-full h-full xl:col-span-7 ">
            <Image
              src="/images/Finance/zero-copy-architecture-web.webp"
              alt="Data-Driven-Insights-img"
              width={0}
              height={0}
              className="w-full hidden md:block h-full"
              style={{ objectPosition: "75% 20%" }}
            />
            <Image
              src="/images/Finance/mobile/zero-copy-architecture-mobile.webp"
              alt="Data-Driven-Insights-img"
              width={0}
              height={0}
              className="w-full block md:hidden h-auto"
            />
          </div>
          <div className="order-2 xl:order-1 xl:col-span-5 max-md:px-[37px] ">
            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px] pb-4 font-light  xl:hidden block ">
              Data-Driven Insights with Salesforce and SAP Data Clouds
            </h2>

            <h3 className="leading-tight 4xl:text-[28px] xl:text-[20px] font-semibold text-[16px] pb-4">
              Zero Copy Architecture
            </h3>
            <p className="leading-tight  font-normal text-[16px] xl:text-[18px] 4xl:text-[20px]  ">
              Rialtes enables real-time, AI-ready data across Salesforce and
              SAP environments using Data Cloud and Zero Copy architecture:
            </p>
            <div>
              <UnorderedList arrName={drivenData} ulClassName="list-disc pt-4 text-black pl-4 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" liClassName="pb-2" />
              <p className="4xl:text-[26px] xl:text-[22px] text-[18px] xl:mt-[60px] mt-[26px] w-fit bg-[#0E3157] p-[24px] text-white leading-tight xl:w-[80%]">
                Single source of truth — actionable, secure, and AI-ready.
              </p>
              <div className="lg:mt-[45px]">
                <LearnMore bgcolor={"#006FBE"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Unmatched Salesforce + SAP Competency section */}
      <section className="md:pt-[105] pt-[52px]">
        <div className="bg-[#E6F7FF] custom-container">
          <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px]  md:pt-[84px] pt-[50px] leading-tight">
            Unmatched Salesforce + SAP Competency
          </h2>
          <h3 className="4xl:text-[38px] xl:text-[26px] text-[20px] md:py-7 py-5 font-semibold leading-tight">
            Built for Financial Services
          </h3>
          <p className="4xl:text-[22px] xl:text-[18px] text-[16px] w-full xl:w-[50%] leading-tight ">
            Rialtes enables real-time, AI-ready data across Salesforce and SAP
            environments using Data Cloud and Zero Copy architecture:
          </p>
          <div>
            <div className="mx-auto ">
              <div className="flex flex-col xl:flex-row mb-8 mt-16 xl:gap-[80px] gap-10">
                <div className="grid flex-start items-center">
                  <Image
                    src="/images/Finance/certified-experts.svg"
                    alt="Certified experts"
                    width={100}
                    height={100}
                    priority
                    className="4xl:w-[150px] 4xl:h-[150px] xl:w-[120px] xl:h-[120px] w-[100px] h-[100px]"
                  />
                  <p className="mt-5 4xl:text-[28px] xl:text-[22px] text-[20px] text-[#006FBE] font-bold leading-tight">
                    Certified experts
                  </p>
                  <p className="mt-5  4xl:text-[22px] xl:text-[18px] text-[16px] leading-tight ">
                    in Salesforce FSC, Data Cloud, Agentforce AI, and SAP S/4
                    HANA.
                  </p>
                </div>
                <div className="grid flex-start items-center">
                  <Image
                    src="/images/Finance/certifications.svg"
                    alt="150+ certifications"
                    width={100}
                    height={100}
                    priority
                    className="4xl:w-[150px] 4xl:h-[150px] xl:w-[120px] xl:h-[120px] w-[100px] h-[100px]"
                  />
                  <p className="mt-5 4xl:text-[28px] xl:text-[22px] text-[20px] text-[#006FBE] font-bold leading-tight ">
                    150+ certifications
                  </p>
                  <p className="mt-5  4xl:text-[22px] xl:text-[18px] text-[16px] leading-tight  ">
                    in key financial services and technology modules.
                  </p>
                </div>
                <div className="grid flex-start items-center">
                  <Image
                    src="/images/Finance/global-delivery-from.svg"
                    alt="Global delivery from"
                    width={100}
                    height={100}
                    priority
                    className="4xl:w-[150px] 4xl:h-[150px] xl:w-[120px] xl:h-[120px] w-[100px] h-[100px]"
                  />
                  <p className="mt-5 4xl:text-[22px] xl:text-[18px] text-[16px] leading-tight  ">
                    Global delivery from
                  </p>
                  <p className="mt-5  4xl:text-[26px] xl:text-[22px] text-[20px] text-[#006FBE] font-bold leading-tight ">
                    US, Canada, India, and Singapore.
                  </p>
                </div>
                <div className="grid flex-start items-center ">
                  <Image
                    src="/images/Finance/support.svg"
                    alt="support"
                    width={100}
                    height={100}
                    priority
                    className="4xl:w-[150px] 4xl:h-[150px] xl:w-[120px] xl:h-[120px] w-[100px] h-[100px]"
                  />
                  <p className="mt-5 text-[#006FBE] font-bold 4xl:text-[28px] xl:text-[22px] text-[20px] leading-tight ">
                    24x7 support
                  </p>

                  <p className="mt-5 4xl:text-[22px] xl:text-[18px] text-[16px] leading-tight  ">
                    for continuous innovation and optimization.
                  </p>
                </div>
              </div>
              <div className=" flex xl:justify-end lg:justify-start">
                <p className="4xl:text-[26px] xl:text-[22px] text-[18px] xl:mt-[60px] mt-[26px] w-fit bg-[#0E3157] p-[24px] text-white leading-tight ">
                  Enterprise-grade, globally trusted, future-ready.
                </p>
              </div>

              <div className="mt-[29px] xl-mt-[50px] flex xl:justify-end lg:justify-start">
                <LearnMore />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Rialtes for Financial Industry Solutions? section */}
      <section className="xl:mt-0 mt-[58px] custom-container max-lg:px-0 xl:!pr-0">
        <div className="grid grid-cols-1 xl:grid-cols-[6fr_6fr]">
          <div className="block md:hidden w-full h-auto">
            <Image
              src="/images/Finance/mobile/financial-industry-mobile.webp"
              alt="Financial-Industry-img"
              className="mx-auto w-full object-cover"
              priority
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          {/* Desktop Image */}
          <div className="w-full h-full">
            <Image
              src="/images/Finance/financial-industry-web.webp"
              alt="Financial-Industry-img"
              className="hidden md:block  object-cover w-full mx-auto"
              priority
              width={0}
              height={0}
              style={{ objectPosition: "20% 20%" }}
            />
          </div>
          <div className="">
            <div className="relative  text-[#FFFFFF] xl:mr-[142px] xl:pl-[72px] xl:ml-[-20%] xl:mt-[100px] mx-[0px] px-[35px] xl:pt-[74px] pt-[42px] bg-[#A87867] xl:pb-[125px] pb-[79px] overflow-visible">
              <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light 4xl:w-[90%] 3xl:w-[75%] xl:w-[90%]">
                Why Choose Rialtes for Financial Industry Solutions?
              </h2>
              <UnorderedList arrName={whyChooseData} ulClassName="list-disc pl-[22px] w-[90%] xl:mt-[48px] mt-[34px] 4xl:space-y-[24px] space-y-[19px] 4xl:text-[22px] xl:text-[18px] text-[16px] leading-tight" liClassName="" />
              <div className="absolute bottom-0">
                <LearnMore />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-[35px] custom-container text-black py-16">
        <ContactForm className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[60%] 2xl:w-[50%] 4xl:w-[70%]"
          title="Ready to Transform Your Financial Services Experience?"
          subtitle="Partner with Rialtes — where innovation meets industry expertise to shape the future of finance. Contact us today to begin your RialFinance+ journey!"
          subtitle1=" Contact us today to begin your RialFinance+ journey!"
        />
      </div>
    </div>
  );
}
