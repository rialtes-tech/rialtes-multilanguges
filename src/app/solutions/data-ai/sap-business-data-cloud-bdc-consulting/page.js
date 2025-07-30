"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "@/app/components/learnMore";
import ContactForm from "../../../components/contactform";
import Script from "next/script";
import UnorderedList from "@/app/components/unorderedList";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SAP Business Data Cloud: End Data Chaos Today",
  url: "https://www.rialtes.com/solutions/data-ai/sap-business-data-cloud-bdc-consulting",
  headline: "SAP Business Data Cloud: End Data Chaos Today",
  description:
    "SAP Business Data Cloud turns chaos into clarity with a single source of truth. Make smarter decisions with Rialtes. Start your data journey today.",
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
    "@type": "Product",
    name: "SAP Business Data Cloud Services",
    brand: {
      "@type": "Brand",
      name: "SAP",
    },
    description:
      "Rialtes helps you implement SAP Business Data Cloud for unified data management, migration from BW/Datasphere, Databricks integration, and intelligent data fabric design.",
    offers: {
      "@type": "Offer",
      price: "Contact for pricing",
      priceCurrency: "USD",
      url: "https://www.rialtes.com/contact-us",
    },
  },
  about: [
    {
      "@type": "Thing",
      name: "Data Fabric",
    },
    {
      "@type": "Thing",
      name: "SAP Integration",
    },
    {
      "@type": "Thing",
      name: "Enterprise Data Management",
    },
    {
      "@type": "Thing",
      name: "Cloud Data Strategy",
    },
  ],
};
const Data = [
  {
    title: "Business-Ready Data",
    desc: "Access and connect data from SAP and non-SAP systems while retaining rich business semantics and context.",
  },
  {
    title: "Open Ecosystem Integration",
    desc: "Integrate with industry leaders like Databricks, BigQuery, and AWS using open standards and APIs.",
  },
  {
    title: "Unified Governance & Security",
    desc: "Manage data securely across all layers with enterprise-grade governance and lineage.",
  },
  {
    title: "AI & ML Enabled",
    desc: "Power advanced analytics and AI-driven scenarios using embedded machine learning services.",
  },
];
const exploreData = [
  {
    title: "Assessment & Roadmapping",
    desc: " Analyze your existing SAP BW models and data flows to build a tailored migration strategy",
  },
  {
    title: "Automated Data Replication",
    desc: " Use SAP-provided migration tools and Rialtes accelerators to transition existing logic and semantics to SAP Business Data Cloud.",
  },
  {
    title: "Preserve Business Logic",
    desc: "Retain existing business metadata and KPIs for faster time-to-value.",
  },
  {
    title: "Improve Performance & Agility",
    desc: " Leverage cloud-native capabilities for real-time data consumption and visualization.",
  },
];
const sapDataFabricData = [
  "Connect live and replicated data across multi-cloud and hybrid landscapes",
  "Unify semantic definitions across domains and systems",
  "Ensure trusted data governance and lineage across all business functions",
  "Accelerate AI, planning, and analytics with clean, context-rich data",
]
const migrateData = [
  {
    title: "Data Mapping & Reconciliation",
    description: "We help map your current artifacts and pipelines from SAP Datasphere to SAP Business Data Cloud"
  },
  {
    title: "Business Context Retention",
    description: "Ensure all metadata, lineage, and context are preserved during the shift"
  },
  {
    title: "Open Extension",
    description: "Connect to external platforms like Databricks for advanced analytics and ML integration."
  },
  {
    title: "Future-Proof Architecture",
    description: "Establish a foundation for scalable AI, reporting, and cross-system data modeling."
  }
];
const connectSapData = [
  "Establish bi-directional data pipelines between SAP and Databricks",
  "Use Delta Lake and MLFlow with SAP semantic models ",
  "Enable real-time predictive insights using SAP business context ",
  "Create industry-specific AI models using unified data across platforms",
]
const ourSapData = [
  {
    title: "Consulting & Advisory",
    description: "Align your data strategy with business objectives and cloud roadmaps."
  },
  {
    title: "Implementation & Migration",
    description: "From BW and Datasphere to Business Data Cloud with full lifecycle support."
  },
  {
    title: "Managed Services & Optimization",
    description: "24x7 support, data quality monitoring, and optimization for performance and cost."
  }
];
const whyClientsData = [
  "SAP-Certified Implementation Experts ",
  "Official SAP & Databricks Partner",
  "Accelerators for BW and Datasphere Migration",
  "Global Delivery with 24x7 Support",
  "Industry-Specific Data Frameworks for Life Sciences,Retail, Automotive & More",
]
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="SAP Business Data Cloud: End Data Chaos Today | Rialtes"
        description="SAP Business Data Cloud turns chaos into clarity with a single source of truth. Make smarter decisions with Rialtes. Start your data journey today."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/solutions/data-ai/sap-business-data-cloud-bdc-consulting/"
      />
      <Script
        id="schema-sap-bdc"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* hero section */}
      <section className="relative h-[399px] xl:h-[650px] md:h-[600px]">
        <div className="xl:block hidden">
          <Image
            src="/images/sap-bdc-services/sap-bdc-services-web.webp"
            alt="SAP Business Data Cloud"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Mobile/Tablet Image */}
        <div className="xl:hidden block">
          <Image
            src="/images/sap-bdc-services/sap-bdc-services-mobile.webp"
            alt="SAP Business Data Cloud"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="2xl:mr-[33%] xl:mr-[30%]  custom-container max-md:mr-[12%] text-white xl:mt-0">
            <h3 className="text-[18px] md:text-[24px] font-bold  lg:w-auto">
              SAP Business Data Cloud
            </h3>
            <h1 className="text-[26px]  xl:text-[40px] xl:w-[67%] 4xl:w-[100%] 4xl:text-[60px] leeding-tight  mt-[11.5px] md:mt-[28.5px]">
              Unlock the Future of Data with SAP Business Data Cloud{" "}
            </h1>
          </div>
        </div>
      </section>
      {/* page description */}
      <section className="mt-16">
        <section className="custom-container">
          <h2 className="4xl:w-[69%] 2xl:w-[46%] xl:w-[55%] leading-tight pb-6 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
            Unify Your Enterprise Data From Finance to Frontline{" "}
          </h2>
          <p className=" xl:w-[67%] text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight ">
            Rialtes helps you connect and harmonize enterprise data across your
            business applications. With SAP Business Data Cloud, we enable you
            to integrate:
          </p>
          <div className="flex xl:gap-32 gap-10 flex-col lg:flex-row lg:mt-10 mt-5 xl:w-[85%]">
            <div className="lg:w-1/2">
              <UnorderedList arrName={[
                "Finance, Procurement, and Supply Chain Data from SAP S/4HANA",
                "Workforce and Payroll Intelligence from SAP SuccessFactors",
                "Sales, Service, and Marketing Insights from Salesforce or SAP CX",
              ]} ulClassName="list-disc text-black pl-4 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-medium space-y-4" liClassName="" />
            </div>
            <div className="lg:w-1/2">
              <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                Whether you’re optimizing profitability, driving operational
                efficiency, or delivering personalized customer experiences, SAP
                Business Data Cloud, implemented by Rialtes, gives you a unified
                and contextualized view of your enterprise landscape.
              </p>
            </div>
          </div>
        </section>
        <div className="py-7"></div>

        {/* A Unified, Open Data section */}
        <section className="custom-container lg:pl-0 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 4xl:gap-[60px] items-center gap-y-10">
            <div className="lg:col-span-7 h-full w-full ">
              <Image
                src="/images/sap-bdc-services/Unified-web.webp"
                alt="Open data foundation image"
                className="w-full h-full object-cover hidden lg:block "
                width={0}
                height={0}
                style={{ objectPosition: "75% 20%" }}
              />
              <Image
                src="/images/sap-bdc-services/Unified-mobile.webp"
                alt="Open data foundation image"
                width={0}
                height={0}
                className="block lg:hidden w-full h-full object-cover px-0"
              />
            </div>
            <div className="lg:col-span-5 2xl:pl-8 xl:pl-8 sm:pl-6">
              <h2 className=" text-black leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] pb-4 xl:w-[80%] 4xl:w-[84%] 2xl:w-[66%] ">
                A Unified, Open Data Foundation for Intelligent Enterprises
              </h2>
              <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                SAP Business Data Cloud enhances enterprise data management by
                combining SAP’s data platform capabilities with native
                integration for SAP applications and compatibility with
                third-party platforms like Databricks, Google BigQuery, and
                Snowflake. It enables the unification of business context and
                data for real-time insights and AI-driven decisions.
              </p>
              <p className="text-[16px] xl:text-[18px] 4xl:text-[20px]  mt-4 lg:pr-[56px] leading-tight">
                As a SAP Authorized Partner and a Databricks Strategic Partner,
                Rialtes empowers organizations to seamlessly adopt SAP Business
                Data Cloud and unlock the full value of their enterprise data.
              </p>
              <div className="xl:mt-[59px] mt-[22px]">
                <LearnMore />
              </div>
            </div>
          </div>
        </section>
        <div className="py-7"></div>
        {/* SAP Data Fabric section */}
        <section className="custom-container md:pr-0 grid xl:grid-cols-12 grid-cols-1  sm:mt-4 max-md:px-0">
          <div className="xl:col-span-6 order-1 xl:order-2 ">
            <div className="hidden lg:block h-full xl:py-20">
              <Image
                className="w-full h-full object-cover"
                src="/images/sap-bdc-services/SAP-data-web.webp"
                alt="Sap data fabric image"
                width={0}
                height={0} 
                priority
              />
            </div>
            {/* Mobile image */}
            <div className="block lg:hidden h-100%">
              <Image
                src="/images/sap-bdc-services/SAP-data-mobile.webp"
                alt="sap data fabric image"
                width={0}
                height={0}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="xl:col-span-6 bg-[#006FBE] p-8 xl:p-[75px] px-10 text-white order-2 xl:order-1 relative">
            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">SAP Data Fabric</h2>
            <h3 className="4xl:text-[36px] font-semibold text-[22px] mt-3 leading-tight">
              Powered by SAP Business Data Cloud
            </h3>
            <p className="mt-4 text-[#FFFFFF] font-light text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
              The SAP Data Fabric acts as a smart, connected data layer across
              your organization. It provides a consistent foundation for
              accessing, modeling, and governing enterprise data with business
              context intact.
            </p>
            <p className="mt-4 text-[#FFFFFF] font-light text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
              With SAP Data Fabric, you can:
            </p>
            <UnorderedList arrName={sapDataFabricData} ulClassName="list-disc space-y-4 p-4 text-[#FFFFFF] font-light pt-4 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" liClassName="" />
            <div className="absolute bottom-[-24px]">
              <LearnMore />
            </div>
          </div>
        </section>
        <div className="py-7"></div>
        {/* Why Choose SAP Business Data Cloud? section */}
        <section className="relative">
          <div className="hidden lg:block">
            <Image
              src="/images/sap-bdc-services/sap-cover.webp"
              alt="Why Choose SAP image"
              fill
              priority
              style={{ objectFit: "cover" }}
              className="z-0"
            />
          </div>
          {/* Mobile Background Image */}
          <div className="block lg:hidden">
            <Image
              src="/images/sap-bdc-services/sap-cover-mobile.webp"
              alt="Why Choose SAP image"
              fill
              priority
              style={{ objectFit: "cover" }}
              className="z-0"
            />
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row justify-between h-full px-4 text-white custom-container">
            <div className="text-left lg:w-[40%] flex pt-[59px] flex-col">
              <h2 className="leading-tight xl:w-[78%] 2xl:w-[75%] 4xl:w-[100%]  4xl:text-[60px] xl:text-[40px] lg:text-[45px] m">Why Choose SAP Business Data Cloud?</h2>
              <div className="lg:mt-[80px]">
                <Link
                  href="/contact-us"
                  className=" bg-[#006FBE] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 absolute  max-lg:bottom-[-20px]">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="lg:w-[60%] mt-6  lg:relative bottom-0 lg:bottom-[-50px] max-md:pb-10 max-lg:mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-9 z-90">
                {Data.map((item, index) => (
                  <div
                    key={index}
                    className=" bg-white border border-[#707070] p-8 xl:py-[3.5rem] text-black">
                    <p className="text-[#0A6BB8] 2xl:text-[30px] xl:text-[22px] text-[20px] font-bold leading-tight">
                      {item.title}
                    </p>
                    <p className="mt-4 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="py-10"></div>
        {/* Rialtes: Your Trusted SAP & Databricks Partner */}
        <section className="custom-container grid grid-cols-1 lg:grid-cols-12 gap-8 items-center md:mt-[52px] lg:mt-6">
          <div className="order-1 lg:order-2 2xl:h-[579px] h-full lg:col-span-5">
            <Image
              src="/images/sap-bdc-services/Your-Trusted-SAP-web.webp"
              alt="Your Trusted SAP image"
              width={0}
              height={0}
              className="w-full hidden md:block h-full"
              style={{ objectPosition: "75% 20%" }}
            />
            <Image
              src="/images/sap-bdc-services/your-trusted-sap-mobile.webp"
              alt="Your Trusted SAP image"
              width={0}
              height={0}
              className="w-full block md:hidden h-auto"
            />
          </div>
          <div className="order-2 lg:order-1 lg:col-span-7">
            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] lg:w-[75%] 2xl:w-[59%] 4xl:w-[87%] ">
              Rialtes: Your Trusted SAP & Databricks Partner
            </h2>
            <p className="leading-tight mt-[23px] font-normal text-[16px] xl:text-[18px] 4xl:text-[20px] lg:mt-[33px] lg:pr-20">
              Rialtes specializes in data cloud architecture, implementation,
              and governance with a team of SAP-certified engineers. We
              integrate process intelligence, data engineering, and cloud
              development to deliver measurable value from your enterprise data.
              Our certified teams assist you in:
            </p>
            <div>
              <UnorderedList arrName={[
                "Finance, Procurement, and Supply Chain Data from SAP S/4HANA",
                " Workforce and Payroll Intelligence from SAP SuccessFactors",
                "Sales, Service, and Marketing Insights from Salesforce or SAP CX",
              ]} ulClassName="list-disc pt-4 text-black pl-4 text-[16px] xl:text-[18px] 4xl:text-[20px] xl:pr-20 leading-tight space-y-3" liClassName="" />
            </div>
            <div className="lg:mt-[30px]">
              <LearnMore />
            </div>
          </div>
        </section>
        <div className="py-10"></div>
        {/* Seamless Migration from SAP section */}
        <section className="custom-container  px-[2rem]">
          <h2 className="xl:w-[63%] 2xl:w-[70%] leading-tight pb-6 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
            Seamless Migration from SAP Business Warehouse to SAP Business Data
            Cloud
          </h2>
          <p className=" xl:w-[75%] text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
            Modernize your analytics and accelerate cloud transformation:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:mt-[53px] mt-[36px]">
            {exploreData.map((data, ind) => {
              const isFirstThree = ind === 0 || ind === 1 || ind === 2;
              const borderClasses = isFirstThree
                ? "border-b lg:border-b-0 lg:border-r-2 border-[#848484] pb-[40px] xl:pb-0"
                : "";
              return (
                <div
                  className={`h-full ${borderClasses} first:pl-0 first:pt-0 pt-[42px] md:pt-0 last:pr-0 md:pl-[10px] md:pr-[10px] lg:pl-[30px] lg:pr-[20px] flex flex-col justify-between`}
                  key={ind}>
                  <div>
                    <h3 className="text-[#0A6BB8] xl:text-[20px] text-[16px] font-bold leading-tight">
                      {data.title}
                    </h3>
                    <p className="mt-4 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                      {data.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <div className="py-4"></div>
        {/* Migrate from SAP Datasphere to SAP Business Data Cloud */}
        <section className="lg:mt-[120px] mt-[10px]">
          <div className="grid lg:grid-cols-12 grid-cols-1">
            <div className="lg:col-span-6 col-span-12 lg:order-1 order-2  ">
              <div className="bg-[#073259] text-[white] lg:py-[55px] lg:w-[600px] xl:w-[750px] 3xl:w-[1110px] 2xl:w-[950px] max-lg:px-[36px] pb-[42px] pt-[32px] lg:z-0 relative">
                <div className="custom-container max-md:px-0 2xl:pr-0">
                  <div className="xl:w-[82%] lg:w-[80%] 2xl:w-[62%] ">
                    <h2 className=" leading-tight pb-6 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
                      Migrate from SAP Datasphere to SAP Business Data Cloud
                    </h2>
                    <p className="mt-5  text-[#FFFFFF] font-light leading-tight text-[16px] xl:text-[18px] 4xl:text-[20px] ">
                      SAP Business Data Cloud brings the next-generation
                      capabilities of Datasphere under a unified data
                      architecture. Rialtes makes this transition frictionless:
                    </p>
                    <ul className="list-disc p-4 text-white font-light pt-4 text-[16px] xl:text-[18px] 4xl:text-[20px] space-y-4 leading-tight">
                      {migrateData.map((step, index) => (
                        <li key={index} className={`${index !== migrateData.length - 1 ? "pb-1" : ""}`}>
                          <div className="font-semibold">{step.title}</div>
                          <div className="font-light">{step.description}</div>
                        </li>
                      ))}
                    </ul>
                    <div className="absolute mt-0 xl:mt-[3px] max-lg:mt-[-10px]">
                      <LearnMore bgcolor={"#006FBE"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 lg:order-2 order-1 max-md:px-0">
              {/* Desktop Image */}
              <div className="hidden lg:block relative w-full h-full top-[-72px] right-0 z-20">
                <Image
                  src="/images/sap-bdc-services/web.webp"
                  alt="Migrate from SAP image"
                  className="w-full h-full"
                  width={0}
                  height={0}
                  style={{ objectFit: "cover", objectPosition: "25% 20%" }}
                  priority
                />
              </div>
              {/* Mobile Image */}
              <div className="block lg:hidden w-full h-[340px] sm:h-[700px] md:h-[750px] relative">
                <Image
                  src="/images/sap-bdc-services/web.webp"
                  alt="Migrate from SAP image"
                  width={0}
                  height={0}
                  style={{ objectFit: "cover", objectPosition: "70% 20%" }}
                  priority
                  className="h-full w-full z-20"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="py-10"></div>
        {/* Connect SAP Business Data Cloud with Databricks */}
        <section className="custom-container xl:pr-0 max-md:px-0">
          <div className="relative overflow-hidden">
            <div className="hidden lg:block">
              <Image
                src="/images/sap-bdc-services/connect.webp"
                alt="Connect SAP Business image"
                fill
                priority
                style={{ objectFit: "cover" }}
                className="z-0"
              />
            </div>
            {/* Mobile Background Image */}
            <div className="block lg:hidden">
              <Image
                src="/images/sap-bdc-services/connect-mobile.webp"
                alt="Connect SAP Business image"
                fill
                priority
                style={{ objectFit: "cover" }}
                className="z-0"
              />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 h-full px-4 py-10 text-white max-md:pb-[22rem] ">
              <div className="lg:col-span-7 m-2 sm:m-4 md:m-6  p-3 sm:p-10 2xl:w-[75%] xl:w-[75%]  ">
                <h2 className="leading-tight pb-6 text-black  4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
                  Connect SAP Business Data Cloud with Databricks
                </h2>
                <p className="mt-4 text-black  font-light text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                  As a certified Databricks consulting partner, Rialtes helps
                  you:
                </p>
                <UnorderedList arrName={connectSapData} ulClassName="list-disc pt-4 text-black pl-5  font-light" liClassName="pb-2 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" />
              </div>
            </div>
          </div>
        </section>
        <div className="py-10"></div>
        {/* Our SAP Business Data Cloud Services */}
        <section className="relative max-[350px]:h-[600px] max-[417px]:h-[520px] h-[475px] md:h-[570px] lg:h-[470px] xl:h-[525px] 2xl:h-[530px] 4xl:h-[630px] overflow-hidden">
          <div className="hidden lg:block">
            <Image
              src="/images/sap-bdc-services/sap-business-web.webp"
              alt="Our SAP Business image"
              fill
              priority
              style={{ objectFit: "cover" }}
              className="z-0"
            />
          </div>
          {/* Mobile Background Image */}
          <div className="block lg:hidden">
            <Image
              src="/images/sap-bdc-services/sap-business-mobile.webp"
              alt="Our SAP Business image"
              fill
              priority
              style={{ objectFit: "cover" }}
              className="z-0"
            />
          </div>
          <div className="custom-container max-md:px-0">
            <div className="relative z-10 grid grid-cols-12 h-full px-4 max-md:px-0 md:ml-0 text-white">
              <div className="md:col-span-6 col-span-12 pt-10 z-10 hidden md:block"></div>
              <div className="md:col-span-6 col-span-12 relative h-full">
                <div className="">
                  <div
                    className="absolute md:inset-0 px-12 py-14 text-white max-[350px]:h-[600px] max-[417px]:h-[520px] h-[475px]  md:h-[570px] xl:h-[525px] lg:h-[600px] 2xl:h-[630px]"
                    style={{
                      background: "#113056",
                      mixBlendMode: "overlay",
                      opacity: 0.8,
                    }}>
                    <div style={{ opacity: 1, color: "#FFFFFF" }}>
                      <h2 className="mb-4 leading-tight  4xl:text-[56px] xl:text-[40px] md:text-[26px]">
                        Our SAP Business Data Cloud Services
                      </h2>
                      <ul className="list-disc leading-tight p-4 text-white font-light pt-4 text-[16px] xl:text-[18px] 4xl:text-[20px] space-y-4">
                        {ourSapData.map((item, index) => (
                          <li key={index} className="pb-1">
                            <div className="font-semibold">{item.title}</div>
                            <div className="font-light">{item.description}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Clients Choose Rialtes */}
        <section className="custom-container lg:mt-[120px] max-md:px-0">
          <div className="grid lg:grid-cols-12 grid-cols-1">
            <div className="lg:col-span-6 col-span-12 lg:order-1 order-2 xl:mr-[40px] relative">
              <div className="block lg:hidden relative z-10 px-6 ">
                <Image
                  src="/images/sap-bdc-services/clients-choose-rialtes-web.webp"
                  alt="Why Clients Choose Rialtes image"
                  width={0}
                  height={0}
                  className="w-full h-[400px] 2xl:h-[90%] md:w-[60%]"
                  style={{ objectFit: "cover", objectPosition: "70% 20%" }}
                  priority
                />
              </div>
              <div className="bg-[#006FBE] text-white lg:py-[55px] lg:w-[600px] xl:w-[800px] xl:pl-0 xl:h-[450px] 2xl:h-[480px] 4xl:h-[560px] 2xl:w-[1080px] max-xl:px-[36px] pb-[42px] pt-[32px] lg:z-0 relative max-lg:mt-[-150px] ">
                <div className="custom-container xl:pl-[70px] max-lg:pt-[160px] max-md:px-0">
                  <div className="4xl:w-[75%] xl:w-[66%] lg:w-[80%]">
                    <h2 className="leading-tight xl:w-[90%] 2xl:w-[80%] 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:mb-3">
                      Why Clients Choose Rialtes
                    </h2>
                    <UnorderedList arrName={whyClientsData} ulClassName="list-disc p-4 text-white font-light pt-4 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight space-y-4" liClassName="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Image */}
            <div className="lg:col-span-6 col-span-12 lg:order-2 order-1 xl:mr-5">
              <div className="hidden lg:block relative w-full h-full top-[-120px] right-0 z-20">
                <Image
                  src="/images/sap-bdc-services/clients-choose-rialtes-web.webp"
                  alt="Why Clients Choose Rialtes image"
                  className="w-full h-full "
                  width={0}
                  height={0}
                  style={{ objectFit: "cover", objectPosition: "25% 20%" }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className="mx-[35px] custom-container text-black py-16">
        <ContactForm className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[60%] 4xl:w-[80%]"
          title=
          "Let’s Build Your Enterprise Data Cloud Together"
          subtitle="
            Talk to our SAP Data Cloud experts today and begin your journey with Rialtes."/>
      </div>
    </div>
  );
}
