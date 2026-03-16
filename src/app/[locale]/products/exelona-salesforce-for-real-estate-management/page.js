"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import ContactForm from "@/app/components/contactform";
import LearnMore from "@/app/components/learnMore";
import BreadCrumbs from "@/app/components/BreadCrumbs";
import UnorderedList from "@/app/components/unorderedList";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
import { useRef } from "react";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Exelona",
  image:
    "https://www.rialtes.com/images/products/exelona/desktop/banner-desk.webp",
  description:
    "Exelona is an intelligent real estate cloud platform built on Salesforce. It unifies every step of the property lifecycle—from lead generation to financial closeout—with AI-driven automation, CRM + ERP convergence, and mobile-first experiences. Designed for property managers, developers, and portfolio owners, Exelona transforms marketing, operations, finance, and resident engagement in one secure platform.",
  brand: {
    "@type": "Organization",
    name: "Rialtes",
    url: "https://www.rialtes.com",
    logo: "https://www.rialtes.com/images/homepage/logo.svg",
  },
  url: "https://www.rialtes.com/products/exelona-salesforce-for-real-estate-management/",
  category: "Real Estate Cloud Platform",
  isRelatedTo: {
    "@type": "SoftwareApplication",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud",
    softwareRequirements: "Salesforce platform",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/products/exelona-salesforce-for-real-estate-management/",
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Mobile-Enabled",
      value:
        "100% mobile-first experience for leasing, maintenance, and finance.",
    },
    {
      "@type": "PropertyValue",
      name: "AI + Conversational Interfaces",
      value:
        "Agentic AI for automation, prioritization, and resident/agent communication.",
    },
    {
      "@type": "PropertyValue",
      name: "CRM + ERP Unified",
      value:
        "One system for marketing, leasing, operations, accounting, and reporting.",
    },
    {
      "@type": "PropertyValue",
      name: "Open API Integrations",
      value:
        "Easily integrates with SAP, Oracle, Yardi, Salesforce, and other platforms.",
    },
    {
      "@type": "PropertyValue",
      name: "Asset Marketing",
      value:
        "Lead and campaign management, digital asset management, and analytics to maximize leasing velocity.",
    },
    {
      "@type": "PropertyValue",
      name: "Property Operations",
      value:
        "AI-enabled operations, automated billing, work order management, SLA tracking, and technician assignment.",
    },
    {
      "@type": "PropertyValue",
      name: "Financial Suite",
      value:
        "Accounts receivable, budgeting & forecasting, accounts payable, procurement, and asset management.",
    },
    {
      "@type": "PropertyValue",
      name: "Resident Experience",
      value:
        "ExelPersona™ branded portals with multilingual support, self-service, and AI chatbot.",
    },
    {
      "@type": "PropertyValue",
      name: "Payments",
      value:
        "ExelPay™ integrated payments supporting ACH, checks, credit/debit cards with reconciliation.",
    },
    {
      "@type": "PropertyValue",
      name: "AI Assistant",
      value:
        "AgentChat conversational AI for residents, applicants, and property teams.",
    },
    {
      "@type": "PropertyValue",
      name: "Security & Compliance",
      value:
        "Built on Salesforce with SOC2, HIPAA, GDPR, and FedRAMP compliance.",
    },
    {
      "@type": "PropertyValue",
      name: "Scalability",
      value:
        "Supports residential, commercial, and mixed-use portfolios from 100 to 100,000+ units.",
    },
  ],
};
export default function Page() {
  const contactRef = useRef(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const features = [
    {
      img: "/images/products/exelona/mobile-enable.svg",
      alt: "Mobile Enabled",
      title: "100% Mobile-Enabled",
      desc: "Manage leasing, maintenance, and finance on any device.",
    },
    {
      img: "/images/products/exelona/web-chat.svg",
      alt: "AI Interfaces",
      title: "Agentic AI + Conversational Interfaces",
      desc: "AI that automates, prioritizes, and communicates.",
    },
    {
      img: "/images/products/exelona/crm.svg",
      alt: "CRM + ERP",
      title: "CRM + ERP, Unified",
      desc: "One system for marketing, operations, leasing, and accounting.",
    },
    {
      img: "/images/products/exelona/open-api.svg",
      alt: "Open API",
      title: "OPENAPI Architecture",
      desc: "Easily integrates with SAP, Yardi, Oracle, Salesforce, and more.",
    },
  ];
  const properties = [
    {
      title: "Accounts Receivable",
      img: "/images/products/exelona/desktop/account.webp",
      points: [
        "Automated tenant billing and late fee application.",
        "Write-off approval workflows and history tracking.",
        "Receipts processing and ledger reconciliation.",
      ],
      outcomes: [
        "Increased collection efficiency.",
        "Real-time AR visibility across properties.",
      ],
    },
    {
      title: "Budgeting, Forecasting & Financial Reporting",
      img: "/images/products/exelona/desktop/budgeting.webp",
      points: [
        "Multi-year budgeting with property-level customization.",
        "Rolling forecasts based on occupancy and lease data.",
        "Financial statements: Balance Sheet, Trial Balance, Income Statement.",
      ],
      outcomes: [
        "Accurate, dynamic financial planning.",
        "Board-ready, real-time reporting.",
      ],
    },
    {
      title: "Accounts Payable & Procurement",
      img: "/images/products/exelona/desktop/account-payble.webp",
      points: [
        "Payable invoice automation and approval workflows.",
        "Purchase order creation and receipt matching.",
        "Multi-mode payment scheduling and vendor management.",
      ],
      outcomes: [
        "Centralized purchasing and audit compliance.",
        "Transparent spend control across your portfolio.",
      ],
    },
    {
      title: "Inventory & Asset Management",
      img: "/images/products/exelona/desktop/inventory.webp",
      points: [
        "Track inventory at unit, building, and warehouse level.",
        "Manage capital assets with depreciation schedules.",
        "Maintenance and replacement forecasting.",
      ],
      outcomes: [
        "Improved asset utilization and accuracy.",
        "Financial alignment with CAPEX strategy.",
      ],
    },
  ];
  const assetMarketingData = [
    {
      title: "Core Capabilities",
      list: [
        "Lead & campaign management across email, social, and web.",
        "Brand consistency through centralized digital asset management.",
        "Real-time campaign analytics for property-specific performance.",
      ],
    },
    {
      title: "From Lead to Lease",
      list: [
        "Generate leads through branded websites, landing pages, and ExelPersona.",
        "Score and nurture leads using automated AI workflows.",
        "Convert prospects to applicants and residents seamlessly within Exelona.",
      ],
    },
    {
      title: "Business Outcomes",
      list: [
        "Reduced cost per lead and faster lease-up cycles.",
        "Stronger brand recall across your portfolio.",
        "Increased occupancy and improved marketing ROI.",
      ],
    },
  ];
  const aiEnabledData = [
    {
      title: "Key Features",
      list: [
        "Resident move-in/move-out flows with automated checklists.",
        "AI-enabled monthly billing and recurring charges.",
        "Smart work order management with knowledge article suggestions.",
        "Real-time dashboards with geolocation and skill-based technician assignment.",
        "SLA tracking, maintenance routing, and inventory linkage.",
      ],
    },
    {
      title: "Business Outcomes",
      list: [
        "30% improvement in maintenance resolution time.",
        "Higher resident satisfaction and retention.",
        "Streamlined operations across distributed teams.",
      ],
    },
  ];
  const excelPersonaData = [
    {
      title: "Top Features",
      list: [
        "Branded UI for each property or region.",
        "Mobile-first design with native access on iOS & Android.",
        "Multilingual support for diverse communities.",
        "Real-time application status, lease e-sign, service requests, and payments.",
        "Built-in AI chatbot powered by AgentChat.",
      ],
    },
    {
      title: "Outcomes",
      list: [
        "Shorter lease cycles and higher conversion.",
        "Reduced call volume with self-service access.",
        "Enhanced resident satisfaction and retention.",
      ],
    },
  ];
  const excelPayData = [
    {
      title: "Capabilities",
      list: [
        "Accepts checks, ACH, and credit/debit cards.",
        "Supports one-time, scheduled, and recurring payments.",
        "Automatically syncs with tenant ledgers and financial reports.",
      ],
    },
    {
      title: "Business Outcomes",
      list: [
        "Improved cash flow and faster collections.",
        "Reduced manual entry and reconciliation errors.",
        "Secure, PCI-compliant transactions.",
      ],
    },
  ];
  const agentChatData = [
    {
      title: "Key Capabilities",
      list: [
        "Natural language queries for status updates, billing, and maintenance.",
        "Embedded in ExelPersona, web, and mobile apps.",
        "Multilingual, role-based access.",
      ],
    },
    {
      title: "Outcomes",
      list: [
        "40–60% drop in support tickets and emails. ",
        "24/7 availability without additional staff cost.",
        "Improved engagement and satisfaction scores.",
      ],
    },
  ];
  const builtData = [
    "Used by asset managers, operators, and developers.",
    "Secure, cloud-native, and compliance-ready.",
    "Scalable for residential, commercial, and mixed-use portfolios.",
    "Integrated with SAP, Oracle, Yardi, Salesforce, and more.",
  ];
  const buildSalesforceData = [
    {
      title: "Why Salesforce?",
      list: [
        {
          title: "Enterprise-Grade Security & Compliance",
          desc: "Includes SOC2, HIPAA, GDPR, FedRAMP, and more.",
        },
        {
          title: "Scalability Without Limits",
          desc: "Proven to support portfolios from single-site operators to global REITs.",
        },
        {
          title: "Continuous Innovation",
          desc: "Benefit from three major platform upgrades every year—without disruption.",
        },
        {
          title: "Extensive Ecosystem",
          desc: "Integrates natively with tools, apps, and services from the Salesforce AppExchange and beyond.",
        },
      ],
    },
    {
      title: "Outcomes",
      list: [
        { desc: "Future-proof technology stack with unmatched reliability." },
        {
          desc: "Confidence in platform stability, scalability, and compliance.",
        },
        {
          desc: "Full flexibility to integrate, customize, and extend to fit your unique real estate needs.",
        },
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Exelona™ – Salesforce for Real Estate Property Management | Rialtes"
        description="Exelona leverages AI and Salesforce for Real Estate to streamline intelligent property management, driving automation, insights, and operational excellence."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/products/exelona-salesforce-for-real-estate-management"
      />
      <Script
        id="schema-grow"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* breadcrumb schema */}
      <BreadcrumbSchema currPage="Exelona" />
      {/* hero section */}
      <section className="relative overflow-hidden">
        <div className="xl:absolute inset-0 z-0">
          <div className="hidden xl:block w-full h-full">
            <Image
              src="/images/products/exelona/desktop/banner-desk.webp"
              alt="grow with sap banner desktop"
              priority
              fill
              className="object-cover"
            />
          </div>

          {/* Mobile Banner */}
          <div className="block xl:hidden w-full h-full">
            <Image
              src="/images/products/exelona/mobile/mobile-banner.webp"
              alt="grow with sap banner mobile"
              priority
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mask only in bottom-right corner */}
        <div className="absolute xl:bottom-0 xl:right-0 right-[-185px] bottom-[-59px] z-10">
          <Image
            src="/images/products/exelona/desktop/mask.webp"
            alt="mask decoration"
            width={500} // adjust as needed
            height={500} // adjust as needed
            className="object-contain"
            priority
          />
        </div>
        {/* Content */}
        <div className="relative z-20 text-white custom-container 4xl:mt-[22rem] 2xl:mt-[20rem] xl:mt-[18rem] mt-[200px] 4xl:pr-0">
          {/* breadcrumb */}
          <BreadCrumbs currPage="Exelona" />
          <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 mt-5">
            <div className="xl:col-span-12 col-span-12 pr-5 ">
              <h1 className="leading-tight break-words 4xl:text-[60px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:pr-0 md:pr-40 pr-10">
                <span className="text-white text-[28px] xl:text-[60px] 2xl:text-[80px] 4xl:text-[105px] mb-2 break-words">
                  Exelona
                  <span className="align-super inline-block w-4 h-4 xl:w-6 xl:h-6">
                    <Image
                      src="/images/products/exelona/desktop/trademark.png"
                      alt="mask decoration"
                      width={500}
                      height={500}
                      className="object-contain mt-1"
                      priority
                    />
                  </span>
                </span>
              </h1>
              <h2 className="xl:font-bold font-semibold leading-tight pb-10 xl:pb-0 text-[20px] 4xl:text-[60px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] mt-5 pr-16 4xl:pr-0 2xl:pr-0 xl:pr-0">
                Powering the Modern Real Estate Enterprise
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* second section */}
      <section>
        <div className="grid grid-cols-12 bg-[#134874] custom-container 4xl:pr-0 2xl:pr-0 xl:pr-0">
          <div className="xl:col-span-7 4xl:col-span-6 col-span-12 mt-10 4xl:pb-20 xl:pb-20 pb-10 4xl:pr-24 xl:pr-0 2xl:pr-0 pr-10">
            <p className="text-white font-light leading-tight md:text-[18px] 4xl:text-[20px] text-[16px]">
              Welcome to Exelona, the intelligent real estate cloud platform
              that unifies every step of the property lifecycle—from lead
              generation to financial closeout. Built for property managers,
              developers, and portfolio owners, Exelona delivers AI-driven
              automation, mobile-first experiences, and CRM + ERP convergence,
              all from a single platform.
            </p>
          </div>
          <div className="xl:col-span-5 4xl:col-span-6 col-span-12 relative ">
            <div className="absolute bottom-0 right-0 z-10 xl:block hidden">
              <Image
                src="/images/products/exelona/desktop/mask.webp"
                alt="mask decoration"
                width={500}
                height={500}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* your digital section */}
      <section className="relative group overflow-hidden 2xl:pb-0 4xl:pb-0 bg-[#134874]">
        <div className="xl:block hidden">
          <Image
            src="/images/products/exelona/desktop/your-desktop.webp"
            alt="grow with sap banner"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/products/exelona/mobile/your.webp"
            alt="grow with sap banner"
            fill
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="relative custom-container 4xl:pb-0 text-white">
          <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 4xl:mt-32 xl:mt-20 mx-auto mt-20">
            <div className="xl:col-span-12 col-span-12">
              <h2 className="4xl:text-[60px] 2xl:text-[48px] text-[26px] xl:text-[40px] md:text-[32px] leading-tight">
                Your Digital Real Estate Backbone
              </h2>
              <p className="md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight mt-[17px] xl:mt-[28px] xl:w-[80%] 2xl:w-full">
                Built for modern portfolios, Exelona empowers your teams with
                seamless collaboration, automation, and scale.
              </p>
              <h3 className="4xl:text-[36px] xl:text-[30px] text-[18px] mt-[32px] xl:mt-[60px]">
                What Sets Exelona Apart
              </h3>
            </div>
          </div>

          <div className="xl:mt-[85px] mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[24px] 4xl:gap-[34px] sm:gap-y-[40px] sm:gap-x-[60px] gap-[50px]">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <Image
                  src={feature.img}
                  alt={feature.alt}
                  width={100}
                  height={100}
                  className="mb-4 w-[100px] h-[100px]"
                />
                <h3 className="font-bold 4xl:text-[23px] mt-5 text-[18px] leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-tight mt-6 lg:mt-8 4xl:w-[90%] min-[400px]:w-[80%] sm:w-full md:text-[18px] 4xl:text-[20px] text-[16px]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-[62px] xl:mt-[72px]">
            <LearnMore
              bgcolor="#0A6BB8"
              bordercolor="#0A6BB8"
              href="https://www.rialtes.com/industry/real-estate-property-management"
              btnName="Know More"
            />
          </div>
        </div>
      </section>
      {/* asset marketing */}
      <section className="bg-[#134874] pb-[202px] xl:pb-[184px]">
        <div className="grid xl:grid-cols-2 grid-cols-1 custom-container xl:pr-0">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="min-[400px]:w-[80%] sm:w-full 4xl:text-[60px] 2x:text-[40px] xl:text-[40px] md:text-[32px] font-light leading-tight text-white mt-20">
              Asset Marketing – Maximize Leasing Velocity & Brand Performance
            </h2>
            <h3 className="mt-8 4xl:text-[40px] 2xl:text-[30px] xl:text-[28px] font-semibold text-white">
              Market smarter. Lease faster.
            </h3>
            <p className="mt-4 text-gray-200 leading-tight 4xl:w-[90%] min-[400px]:w-[90%] sm:w-full md:text-[18px] 4xl:text-[20px] text-[16px]">
              Exelona’s Asset Marketing module transforms how you position,
              promote, and lease your properties.
            </p>
          </div>

          {/* Right Image */}
          <div className="mt-[34px]">
            <Image
              src="/images/products/exelona/desktop/asset-marketing.webp"
              alt="Asset Marketing"
              width={1200}
              height={630}
              className="object-cover h-full w-full xl:pt-[40px]"
            />
          </div>
        </div>
        <div className="custom-container text-white mt-[30px] xl:mt-[61px]">
          <div className="grid grid-cols-1 md:grid-cols-3 4xl:gap-[110px] xl:gap-[80px] gap-[37px] min-[400px]:w-[80%] sm:w-full">
            {assetMarketingData.map((data, ind) => {
              return (
                <div key={ind}>
                  <h4 className="font-semibold text-white 4xl:text-[22px] text-[18px]">
                    {data.title}
                  </h4>
                  <UnorderedList
                    arrName={data.list}
                    ulClassName="mt-3 list-outside space-y-5 text-gray-200 list-disc md:text-[18px] 4xl:text-[20px] text-[16px] pl-[20px]"
                    liClassName=""
                  />
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex mt-[50px] lg:gap-[57px] max-lg:flex-col max-lg:gap-[36px]">
            <div>
              <LearnMore
                bgcolor="#0A6BB8"
                bordercolor="#0A6BB8"
                hoverTextColor="black"
                onClick={handleScrollToContact}
                btnName="Talk to Us"
              />
            </div>
            <div>
              <p className="bg-[#0A6BB8] text-white md:text-[18px] 4xl:text-[20px] text-[16px] md:py-[12px] md:px-[32px] py-[14px] px-[20px] md:mt-[23px] min-[400px]:w-[90%] sm:w-fit">
                See how top portfolios grow occupancy with Asset Marketing
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ai enabled section */}
      <section className="relative w-full max-lg:bg-[#C6E7FF]">
        <div className="custom-container mx-auto grid lg:grid-cols-12 gap-0 4xl:px-0 2xl:px-0 lg:px-0 max-lg:!px-0 lg:mt-[-80px] mt-[-20px]">
          {/* Left Side - Image */}
          <div className="lg:col-span-4 col-span-12 relative 4xl:my-16 2xl:my-14 lg:my-12 z-[9] 4xl:mr-[-140px] 2xl:m4-[100px] lg:mr-[-80px] mt-[-100px] ">
            <Image
              src="/images/products/exelona/desktop/ai-enable.webp"
              alt="AI Property Operations"
              className="w-full h-full object-cover max-lg:px-[35px] md:h-[700px] lg:h-full"
              width={1200}
              height={700}
            />
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-8 col-span-12 bg-[#C6E7FF] lg:relative 4xl:pl-[230px] 2xl:px-[140px] lg:pl-[130px] lg:pr-[100px] px-10 lg:pt-[78px] pt-[30px] !pb-0">
            {/* Text content */}
            <h2 className="text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px]  text-[#0A2E4D] leading-tight mb-4">
              AI-Enabled Property Operations – Run Smarter, Respond Faster
            </h2>

            <p className="font-semibold 4xl:text-[40px] mt-10 2xl:text-[30px] xl:text-[24px] text-[18px] text-black mb-2 leading-tight">
              Operational excellence meets automation.
            </p>
            <p className="text-gray-700 mb-6 max-w-2xl mt-6 md:text-[18px] 4xl:text-[20px] text-[16px]">
              Exelona’s AI-enabled property operations give you full control
              over daily operations with AI at the core.
            </p>

            {/* Features + Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-[40px] min-[400px]:w-[90%] sm:w-full">
              {aiEnabledData.map((data, ind) => {
                return (
                  <div key={ind}>
                    <h3 className="font-semibold text-[#0A6FBF] mb-3 text-[18px] xl:text-[20px] 4xl:text-[22px]">
                      {data.title}
                    </h3>
                    <UnorderedList
                      arrName={data.list}
                      ulClassName="space-y-[19px] xl:space-y-[24px] md:text-[18px] 4xl:text-[20px] text-[16px] list-outside list-disc xl:pb-16 2xl:pb-14 4xl:pb-0 pl-[22px]"
                      liClassName=""
                    />
                  </div>
                );
              })}
            </div>
            {/* Buttons */}

            <div className="mt-16 xl:mt-0 xl:flex gap-8 xl:gap-10 4xl:mt-[65px] items-end">
              <LearnMore onClick={handleScrollToContact} btnName="Talk to Us" />
              <div>
                <p className="bg-[#0A6BB8] mt-10 w-fit xl:mt-[20px] px-6 py-[14px] text-white text-left md:text-[18px] 4xl:text-[20px] text-[16px]">
                  Automate and optimize property operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blue background sections */}
      <section className="blue-section text-white bg-[#134874]">
        {/* property section */}
        <section className="lg:pt-[170px] pt-[53px] lg:mt-[-80px] custom-container">
          <>
            <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[40px] text-[26px] md:text-[32px] font-light leading-tight">
              Property Financial Suite – <br></br>Real Estate Finance Reimagined
            </h2>
            <h3 className="xl:mt-[36px] mt-[14px] 4xl:text-[40px] 2xl:text-[30px] xl:text-[28px] font-semibold leading-tight">
              Own your financials from billing to balance sheets.
            </h3>
            <p className="xl:mt-[39px] mt-[16px] md:text-[18px] 4xl:text-[20px] text-[16px]">
              Exelona’s financial modules deliver accuracy, automation, and
              clarity across your property finance stack.
            </p>
          </>
          <div className="grid lg:grid-cols-2 4xl:gap-[140px] xl:gap-[60px] gap-10 xl:mt-[68px] lg:mt-[30px]">
            {properties.map((feature, idx) => (
              <div key={idx} className="flex flex-col space-y-10">
                <div className="order-first lg:order-none mt-10 lg:mt-0">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="4xl:w-[85%]">
                  <h3 className="font-semibold mb-4 text-white 4xl:text-[28px] text-[18px]">
                    {feature.title}
                  </h3>
                  <UnorderedList
                    arrName={feature.points}
                    ulClassName="list-disc pl-5 space-y-5 mb-4 text-white md:text-[18px] 4xl:text-[20px] text-[16px]"
                    liClassName=""
                  />
                  <h4 className="font-semibold text-white mt-10 4xl:text-[22px] text-[18px]">
                    Outcomes
                  </h4>
                  <UnorderedList
                    arrName={feature.outcomes}
                    ulClassName="list-disc pl-5 space-y-5 text-white mt-4 md:text-[18px] 4xl:text-[20px] text-[16px] min-[400px]:w-[90%] sm:w-full"
                    liClassName=""
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 md:flex items-end gap-8 md:gap-10 2xl:gap-10 4xl:mt-24 max-md:pr-[35px]">
            <>
              <LearnMore
                bgcolor="#073259"
                bordercolor="#073259"
                onClick={handleScrollToContact}
                btnName="Talk to Us"
              />
            </>
            <>
              <p className="bg-[#0A6BB8] mt-10 xl:mt-0 px-6 py-3 text-white text-left md:text-[18px] 4xl:text-[20px] text-[16px] w-fit">
                Streamline your real estate finance
              </p>
            </>
          </div>
        </section>
        {/* excel persona section */}
        <section className="grid xl:grid-cols-12 grid-cols-1 xl:px-0 xl:mt-[122px] mt-[72px] px-[36px]">
          {/* Left Side - Image */}
          <div className="relative xl:col-span-4 col-span-12">
            <Image
              src="/images/products/exelona/desktop/excel-persona.webp"
              alt="ExelPersona Preview"
              className="object-cover w-full xl:h-full h-[300px] md:h-[500px] md:w-[800px]"
              priority
              width={1000}
              height={1000}
            />
          </div>

          {/* Right Side - Content */}
          <div className="4xl:px-16 text-white xl:col-span-8 col-span-12 2xl:px-14 xl:px-14">
            <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[40px] text-[26px] md:text-[32px] font-light leading-tight mt-10 xl:mt-0 4xl:mt-0 2xl:mt-0">
              ExelPersona{" "}
              <span className="align-super inline-block ml-[-6px] md:ml-[-8px] w-4 h-4 xl:w-6 xl:h-6">
                <Image
                  src="/images/products/exelona/desktop/trademark.png"
                  alt="mask decoration"
                  width={500}
                  height={500}
                  className="object-contain mt-[2px]"
                  priority
                />
              </span>{" "}
              – The Ultimate Resident & Applicant Experience
            </h2>
            <h3 className="mt-8 4xl:text-[40px] 2xl:text-[30px] xl:text-[28px] text-[18px] font-semibold leading-tight 4xl:pr-64 2xl:pr-64 xl:pr-32 min-[400px]:w-[90%] sm:w-full">
              Custom-branded portals. Multilingual access. Mobile-native by
              design.
            </h3>
            <p className="mt-8 md:text-[18px] 4xl:text-[20px] text-[16px] text-base 4xl:pr-[28rem] 2xl:pr-[20rem] xl:pr-[13rem] pr-10">
              ExelPersona is your fully customizable applicant and resident
              portal, created to reflect your brand and deliver 24/7
              self-service.
            </p>

            {/* Two Column Features + Outcomes */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 2xl:pr-32 md:gap-10 4xl:gap-[60px] 2xl:gap-0 gap-[48px] min-[400px]:w-[90%] sm:w-full">
              {/* Features */}
              {excelPersonaData.map((data, ind) => {
                return (
                  <div key={ind}>
                    <h4 className="4xl:text-[22px] text-[18px] font-semibold mb-3 xl:mb-[32px]">
                      {data.title}
                    </h4>
                    <UnorderedList
                      arrName={data.list}
                      ulClassName="space-y-5 text-gray-200 list-disc list-outside md:text-[18px] 4xl:text-[20px] text-[16px] pl-5 4xl:pr-20 2xl:pr-20"
                      liClassName=""
                    />
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-16 lg:flex gap-8 lg:gap-5 2xl:gap-10 4xl:mt-24 items-end">
              <>
                <LearnMore
                  bgcolor="#073259"
                  bordercolor="#073259"
                  onClick={handleScrollToContact}
                  btnName="Talk to Us"
                />
              </>
              <p className="bg-[#0A6BB8] mt-10 xl:mt-0 px-6 py-3 w-fit text-white text-left md:text-[18px] 4xl:text-[20px] text-[16px] 4xl:w-[60%]">
                Design your branded resident experience with ExelPersona
              </p>
            </div>
          </div>
        </section>
        {/* excel pay section */}
        <section className="relative w-full custom-container 4xl:px-0 2xl:px-0 xl:px-0 max-xl:px-0">
          <div className="grid xl:grid-cols-12 gap-0 mt-20 max-md:px-0">
            {/* Left Side - Content (desktop first, mobile second) */}
            <div
              className="xl:col-span-10 col-span-12 bg-[#B4F0D0] 
                    xl:relative 4xl:pl-[280px] 4xl:pr-[436px]  
                    2xl:pl-[135px] 2xl:pr-[510px] xl:pl-[80px] xl:pr-[435px] 
                    pl-10 order-last xl:order-first mt-[-230px] 4xl:mt-0 2xl:mt-0 xl:mt-0 max-xl:px-[35px]"
            >
              {/* Text content */}
              <h2 className="text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px] text-[#0A2E4D] leading-tight mb-4 pt-[17rem] xl:pt-14 4xl:pt-20 2xl:pt-16 3xl:w-[90%]">
                ExelPay
                <span className="align-super inline-block ml-[6px] w-4 h-4 xl:w-6 xl:h-6">
                  <Image
                    src="/images/products/exelona/desktop/black-trademark.png"
                    alt="mask decoration"
                    width={500}
                    height={500}
                    className="object-contain mt-[2px]"
                    priority
                  />
                </span>{" "}
                <br /> Built-In Payments. Complete Control.
              </h2>

              <p className="font-semibold 4xl:text-[40px] mt-10 2xl:text-[30px] xl:text-[24px] text-[18px] text-black mb-2 leading-tight 4xl:pr-[12rem]">
                Integrated payments that work how your residents pay.
              </p>
              <p className="text-gray-700 mb-6 max-w-2xl mt-6 md:text-[18px] 4xl:text-[20px] text-[16px]">
                ExelPay is Exelona’s secure payment gateway for collecting rent,
                deposits, and fees with full reconciliation.
              </p>

              {/* Features + Outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[38px] md:gap-[38px]">
                {excelPayData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <h3 className="font-semibold text-[#000000] mb-3 4xl:mb-[] 4xl:text-[22px] text-[18px]">
                        {data.title}
                      </h3>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="4xl:space-y-5 space-y-3 xl:space-y-3 text-gray-800 md:text-[18px] 4xl:text-[20px] text-[16px] list-disc pl-[20px]"
                        liClassName=""
                      />
                    </div>
                  );
                })}
              </div>

              {/* Buttons */}
              <div className="lg:flex gap-8 xl:gap-5 2xl:gap-10 xl:mt-[65px] mt-[36px] items-end">
                <div className="xl:w-[200px]">
                  <LearnMore
                    bgcolor="#073259"
                    bordercolor="#073259"
                    onClick={handleScrollToContact}
                    btnName="Talk to Us"
                  />
                </div>
                <p className="bg-[#0A6BB8] w-fit mt-10 xl:mt-0 px-6 py-3 text-white text-left md:text-[18px] 4xl:text-[20px] text-[16px]">
                  Power up your collections with ExelPay
                </p>
              </div>
            </div>

            <div className="xl:col-span-1 4xl:ml-[-445px] 2xl:ml-[-440px] xl:ml-[-395px] col-span-12 relative 4xl:my-16 2xl:my-14 xl:my-12 z-[9] order-first xl:order-last">
              <Image
                src="/images/products/exelona/desktop/payment.webp"
                alt="AI Property Operations"
                className="w-full h-full object-cover max-xl:px-[36px] sm:h-[700px] xl:h-full 4xl:h-[740px]"
                priority
                width={1200}
                height={630}
              />
            </div>
          </div>
        </section>
        {/* agent chat section */}
        <section className="custom-container mx-auto grid xl:grid-cols-12 gap-0 items-stretch 4xl:pl-[140px] 2xl:pl-[100px] xl:pl-[80px] 2xl:px-0 xl:px-0 max-xl:px-0 max-xl:bg-[#073259] max-xl:mt-[300px] xl:mt-20">
          <div className="xl:col-span-3 col-span-12 relative 4xl:mt-16 2xl:mt-14 xl:mt-12 z-[9] 4xl:mr-[-140px] xl:mr-[-80px] mt-[-200px]">
            <Image
              src="/images/products/exelona/desktop/agentchat.webp"
              alt="AI Property Operations"
              className="w-full h-full object-cover max-xl:px-[36px]"
              width={1200}
              height={630}
              priority
            />
          </div>

          <div className="xl:col-span-9 4xl:mt-0 xl:mt-0 2xl:mt-0 xl:mb-20 col-span-12 bg-[#073259] text-white xl:relative 4xl:pl-[315px] 4xl:ml-[-100px] 4xl:pr-[150px] 2xl:px-[150px] xl:pl-[130px] xl:pr-[100px] px-10">
            <h2 className="text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px]  leading-tight mb-4 pt-[49px] xl:pt-14 4xl:pt-20 2xl:pt-16 min-[400px]:w-[90%] sm:w-full">
              AgentChat – Real-Time AI Assistant for Residents & Teams
            </h2>

            <p className="font-semibold 4xl:text-[40px] mt-10 2xl:text-[30px] xl:text-[24px] text-[18px] mb-2 leading-tight">
              Scale your support without scaling your staff.
            </p>
            <p className="mb-6 mt-6 leading-tight 4xl:pr-64 2xl:pr-64 xl:pr-32 md:text-[18px] 4xl:text-[20px] text-[16px]">
              AgentChat is the conversational AI built into Exelona for
              residents, applicants, and property teams.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-0 xl:mt-[62px]">
              {agentChatData.map((data, ind) => {
                return (
                  <div key={ind}>
                    <h3 className="font-bold mb-3 4xl:text-[22px] text-[18px]">
                      {data.title}
                    </h3>
                    <UnorderedList
                      arrName={data.list}
                      ulClassName="4xl:space-y-5 space-y-3 xl:space-y-3 md:text-[18px] 4xl:text-[20px] text-[16px] list-outside list-disc xl:pb-16 2xl:pb-14 4xl:pb-0 pr-10 4xl:pl-[20px] 2xl:pl-[20px] xl:pl-[20px] pl-[15px]"
                      liClassName=""
                    />
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="mt-16 xl:mt-0 md:flex gap-8 md:gap-5 2xl:gap-10 4xl:mt-[65px] items-end">
              <>
                <LearnMore
                  bgcolor="#134874"
                  bordercolor="#134874"
                  onClick={handleScrollToContact}
                  btnName="Talk to Us"
                />
              </>
              <div>
                <p className="bg-[#0A6BB8] mt-10 xl:mt-0 px-6 py-[13px] text-white text-left md:text-[18px] 4xl:text-[20px] text-[16px] w-fit">
                  Experience AI-powered property communication
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* built on scale section */}
        <section className="custom-container mt-20 xl:pb-[120px] pb-[90px]">
          <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 xl:gap-10 4xl:gap-[80px]">
            <div className="xl:col-span-7 col-span-12">
              <h2 className="text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px] leading-tight text-white font-light">
                Built for Scale. Trusted by Real Estate Leaders.
              </h2>
            </div>

            <div className="xl:col-span-5 col-span-12 max-lg:mt-[23px]">
              <p className="text-lg leading-relaxed text-gray-200 4xl:w-[86%]">
                Whether you manage 100 units or 100,000, Exelona gives you a
                flexible, intelligent, and secure platform to run your real
                estate enterprise.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 text-[#000000] md:w-[80%] xl:w-full">
            {builtData.map((data, ind) => {
              return (
                <div
                  className="bg-white py-[30px] px-[27px] xl:py-[46px] xl:px-[40px]"
                  key={ind}
                >
                  <p className="leading-tight md:text-[18px] 4xl:text-[20px] text-[16px]">
                    {data}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </section>

      {/* built on salesforce section */}
      <section className="relative">
        <div className="lg:block hidden">
          <Image
            src="/images/products/exelona/desktop/built-on.webp"
            alt="grow with sap banner"
            fill
            priority
          />
        </div>

        <div className="lg:hidden block">
          <Image
            src="/images/products/exelona/mobile/built-on.webp"
            alt="grow with sap banner"
            fill
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="custom-container relative max-lg:px-0">
          <div className="relative 4xl:w-[68%] xl:w-[62%] lg:w-[72%] pb-[240px] md:pb-[180px] lg:pb-[123px]">
            {/* Overlay only on this block */}
            <div className="absolute inset-0 bg-[#068EDA] mix-blend-multiply"></div>
            <div className="relative pt-[63px] xl:pt-[80px] text-white xl:px-[81px] px-[36px] md:w-[90%] lg:w-full">
              <h2 className="font-light 4xl:text-[60px] xl:text-[40px] text-[26px] md:text-[32px]">
                Built on Salesforce
              </h2>
              <h3 className="font-semibold 4xl:text-[40px] xl:text-[30px] text-[18px] xl:mt-[24px] mt-[22px]">
                Trusted Infrastructure for the Real Estate Enterprise
              </h3>
              <p className="font-light md:text-[18px] 4xl:text-[20px] text-[16px] xl:mt-[33px] mt-[22px]">
                Exelona
                <span className="align-super inline-block ml-[1px] w-3 h-3 xl:w-4 xl:h-4">
                  <Image
                    src="/images/products/exelona/desktop/trademark.png"
                    alt="mask decoration"
                    width={500}
                    height={500}
                    className="object-contain md:mt-[5px]"
                    priority
                  />
                </span>{" "}
                is proudly built on the Salesforce platform, leveraging the
                world’s #1 enterprise cloud to deliver unmatched performance,
                flexibility, and trust for real estate.
              </p>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-[29px] lg:gap-[40px]">
                {buildSalesforceData.map((data, ind) => {
                  return (
                    <div key={ind}>
                      <p className="font-bold 4xl:text-[22px] xl:text-[20px] text-[18px] xl:mt-[33px] mt-[22px]">
                        {data.title}
                      </p>
                      <ul className="list-disc pl-6 xl:mt-[19px] mt-[12px] space-y-[19px]">
                        {data.list.map((elem, id) => (
                          <li key={id} className="mb-2">
                            {elem.title && (
                              <p className="font-bold md:text-[18px] 4xl:text-[20px] text-[16px]">
                                {elem.title}
                              </p>
                            )}
                            <p className="font-light md:text-[18px] 4xl:text-[20px] text-[16px]">
                              {elem.desc}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="md:flex items-end gap-8 md:gap-10 2xl:gap-10 bottom-0 max-lg:mx-[36px] lg:right-0 absolute ">
              <>
                <LearnMore
                  bgcolor="#073259"
                  bordercolor="#073259"
                  onClick={handleScrollToContact}
                  btnName="Talk to Us"
                />
              </>
              <>
                <p className="bg-[#0A6BB8] mt-10 xl:mt-0 px-6 py-3 text-white text-left md:text-[18px] 4xl:text-[20px] text-[16px] min-[400px]:w-[96%] sm:w-fit">
                  Explore the power of Salesforce + Exelona
                </p>
              </>
            </div>
          </div>
        </div>
      </section>

      <section
        className="custom-container text-white bg-[#134874] py-16 max-md:mt-0 scroll-mt-28"
        ref={contactRef}
      >
        <ContactForm
          title={"Ready to Transform Your Real Estate Business?"}
          subtitle={"Let’s build it, automate it, and grow it—with Exelona."}
          className={
            "leading-tight  xl:w-[70%] text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px]"
          }
          beginBtnBg="#006FBE"
        />

        <h3 className="font-semibold 4xl:text-[40px] xl:text-[30px] text-[18px] xl:mt-[91px] mt-[62px]">
          Trusted Infrastructure for the Real Estate Enterprise
        </h3>
      </section>
    </div>
  );
}
