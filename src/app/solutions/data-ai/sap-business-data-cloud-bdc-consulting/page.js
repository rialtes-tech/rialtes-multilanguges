"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "@/app/components/learnMore";
import { HeroSection } from "@/app/components/herosection";
import ContactForm from "../../../components/contactform";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "SAP Business Data Cloud: End Data Chaos Today",
  "url": "https://www.rialtes.com/solutions/data-ai/sap-business-data-cloud-bdc-consulting",
  "headline": "SAP Business Data Cloud: End Data Chaos Today",
  "description": "SAP Business Data Cloud turns chaos into clarity with a single source of truth. Make smarter decisions with Rialtes. Start your data journey today.",
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "url": "https://www.rialtes.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  },
  "mainEntity": {
    "@type": "Product",
    "name": "SAP Business Data Cloud Services",
    "brand": {
      "@type": "Brand",
      "name": "SAP"
    },
    "description": "Rialtes helps you implement SAP Business Data Cloud for unified data management, migration from BW/Datasphere, Databricks integration, and intelligent data fabric design.",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD",
      "url": "https://www.rialtes.com/contact-us"
    }
  },
  "about": [
    {
      "@type": "Thing",
      "name": "Data Fabric"
    },
    {
      "@type": "Thing",
      "name": "SAP Integration"
    },
    {
      "@type": "Thing",
      "name": "Enterprise Data Management"
    },
    {
      "@type": "Thing",
      "name": "Cloud Data Strategy"
    }
  ]
}
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
    title: "Automated Data Replication & Modeling",
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
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="SAP Business Data Cloud: End Data Chaos Today | Rialtes"
        description="SAP Business Data Cloud turns chaos into clarity with a single source of truth. Make smarter decisions with Rialtes. Start your data journey today."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/solutions/data-ai/sap-business-data-cloud-bdc-consulting/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <HeroSection
        title="Unlock the Future of Data with SAP Business Data Cloud"
        subtitle="SAP Business Data Cloud"
        mobimg="/images/sap-bdc-services/sap-bdc-services-mobile.webp"
        deskimg="/images/sap-bdc-services/sap-bdc-services-web.webp"
        extraImg=""
      />

      <section className="mt-16  ">
        <section className="custom-container">
          <h2 className="xl:w-[75%] leading-tight pb-6">
            Unify Your Enterprise Data – From Finance to Frontline{" "}
          </h2>
          <p className=" xl:w-[75%] ">
            Rialtes helps you connect and harmonize enterprise data across your
            business applications—unlocking insights like never before. With SAP
            Business Data Cloud, we enable you to integrate:
          </p>

          <div className="flex xl:gap-32 gap-10   flex-col lg:flex-row lg:mt-10 mt-5 xl:w-[85%] ">
            <div className="lg:w-1/2">
              <ul className="list-disc text-black pl-4 xl:text-[20px] text-[16px] font-medium ">
                <li className="pb-4">
                  Finance, Procurement, and Supply Chain Data from SAP S/4HANA
                </li>
                <li className="pb-4">
                  {" "}
                  Workforce and Payroll Intelligence from SAP SuccessFactors
                </li>
                <li>
                  {" "}
                  Sales, Service, and Marketing Insights from Salesforce or SAP
                  CX
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <p>
                Whether you’re optimizing profitability, driving operational
                efficiency, or delivering personalized customer experiences, SAP
                Business Data Cloud—implemented by Rialtes—gives you a unified
                and contextualized view of your enterprise landscape.
              </p>
            </div>
          </div>
        </section>
        <div className="py-7"></div>
        {/* A Unified, Open Data section */}
        <section className=" custom-container  lg:px-0 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center  ">
            <div className="lg:col-span-7 h-full 2xl:h-[579px]">
              <Image
                src="/images/sap-bdc-services/Unified-web.webp"
                alt="Unified"
                className="w-full h-full object-cover hidden lg:block "
                width={0}
                height={0}
                style={{ objectPosition: "75% 20%" }}
              />
              <Image
                src="/images/sap-bdc-services/Unified-mobile.webp"
                alt="agent-chat-img"
                width={0}
                height={0}
                className="block lg:hidden w-full h-full object-cover px-0"
              />
            </div>
            <div className="lg:col-span-5  xl:pl-3">
              <h2 className=" text-black">
                A Unified, Open Data Foundation for Intelligent Enterprises
              </h2>
              <p className="text-[16px] lg:text-[20px]">
                SAP Business Data Cloud is the next evolution in enterprise data
                management—bringing together the trusted capabilities of SAP’s
                data platform, native integration with SAP applications, and
                openness to third-party platforms like Databricks, Google
                BigQuery, and Snowflake. It helps you unify business context
                with data from across your enterprise landscape for real-time
                insights and AI-powered decisions.
              </p>
              <p className="text-[16px] lg:text-[20px]">
                As a SAP Authorized Partner and a Databricks Strategic Partner,
                Rialtes empowers organizations to seamlessly adopt SAP Business
                Data Cloud and unlock the full value of their enterprise data.
              </p>
              <div className="">
                <LearnMore />
              </div>{" "}
            </div>{" "}
          </div>
        </section>
        <div className="py-7"></div>
        {/* SAP Data Fabric section */}
        <section className="custom-container md:pr-0 grid xl:grid-cols-12 grid-cols-1  sm:mt-4 max-md:px-0">
          <div className="xl:col-span-6 order-1 xl:order-2 ">
            {/* Desktop image */}
            <div className="hidden lg:block h-[741px] xl:py-20">
              <Image
                className="w-full h-full object-cover"
                src="/images/sap-bdc-services/SAP-data-web.webp"
                alt="Sap data"
                width={0}
                height={0}
                priority
              />
            </div>

            {/* Mobile image */}
            <div className="block lg:hidden h-100%">
              <Image
                src="/images/sap-bdc-services/SAP-data-mobile.webp"
                alt="sap data"
                width={0}
                height={0}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="xl:col-span-6 bg-[#006FBE]  py-7 px-10 text-white order-2 xl:order-1  ">
            <h2>SAP Data Fabric</h2>
            <h3 className="xl:text-[42px] font-semibold text-[22px] mt-5">
              Powered by SAP Business Data Cloud{" "}
            </h3>
            <p className="mt-5  text-[#FFFFFF] font-light">
              The SAP Data Fabric—enabled by SAP Business Data Cloud—acts as a
              smart, connected data layer across your organization. It provides
              a consistent foundation for accessing, modeling, and governing
              enterprise data with business context intact.
            </p>
            <p className="mt-5  text-[#FFFFFF] font-light">
              With SAP Data Fabric, you can:
            </p>

            <ul className="list-disc p-4 text-[#FFFFFF] font-light pt-4  ">
              <li className="pb-4">
                Connect live and replicated data across multi-cloud and hybrid
                landscapes
              </li>
              <li className="pb-4">
                Unify semantic definitions across domains and systems
              </li>
              <li className="pb-4">
                Ensure trusted data governance and lineage across all business
                functions
              </li>
              <li className="">
                Accelerate AI, planning, and analytics with clean, context-rich
                data
              </li>
            </ul>
            <div className="absolute mt-[-25px] xl:mt-[-30px]">
              <LearnMore />
            </div>
          </div>
        </section>
        <div className="py-7"></div>
        <section className="relative">
          {/* Desktop Background Image */}
          <div className="hidden lg:block">
            <Image
              src="/images/sap-bdc-services/sap-cover.webp"
              alt="SAP Desktop"
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
              alt="SAP Mobile"
              fill
              priority
              style={{ objectFit: "cover" }}
              className="z-0"
            />
          </div>


          <div className="relative z-10 flex flex-col lg:flex-row justify-between h-full px-4 text-white custom-container">
            {/* Left text */}
            <div className="text-left lg:w-[40%] flex pt-[46px] flex-col ">
              <h2 className="">Why Choose SAP Business Data Cloud?</h2>
              <div className="xl:mt-[80px]  ">
             
                <Link
                  href="/contact-us"
                  className=" bg-[#006FBE]   hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 absolute  max-lg:bottom-[-20px]"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right text */}

            <div className="lg:w-[60%] mt-6  lg:relative bottom-0 lg:bottom-[-50px] max-md:pb-10 max-lg:mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-9 z-90">
                {Data.map((item, index) => (
                  <div
                    key={index}
                    className=" bg-white border border-[#707070] p-8 xl:py-[3.5rem] text-black"
                  >
                    <p className="text-[#0A6BB8] text-[20px] font-bold leading-tight">
                      {item.title}
                    </p>
                    <p className="mt-4 text-[16px] leading-[24px] ">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="py-10"></div>
        <section className="custom-container xl:pr-0 grid grid-cols-1 xl:grid-cols-12 gap-8 items-center md:mt-[52px] lg:mt-0">
          <div className="order-1 xl:order-2 2xl:h-[579px] xl:col-span-5">
            <Image
              src="/images/sap-bdc-services/Your-Trusted-SAP-web.webp"
              alt="supplier-profile-img"
              width={0}
              height={0}
              className="w-full hidden md:block h-full"
              style={{ objectPosition: "75% 20%" }}
            />
            <Image
              src="/images/sap-bdc-services/your-trusted-sap-mobile.webp"
              alt="supplier-profile-mob-img"
              width={0}
              height={0}
              className="w-full block md:hidden h-auto"
            />
          </div>

          <div className="order-2 xl:order-1  xl:col-span-7 xl:pr-20">
            <h2 className="text-[26px] leading-[32px] font-light lg:text-[60px] lg:leading-[73px] md:text-[36px] md:leading-[44px]">
              Rialtes: Your Trusted SAP & Databricks Partner
            </h2>
            <p className="text-[16px] leading-[19px] mt-[23px] font-normal md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[24px] lg:mt-[33px]">
              With a global footprint and a strong team of SAP-certified
              engineers, Rialtes brings deep expertise in data cloud
              architecture, implementation, and governance. Our certified teams
              help you:
            </p>
            <div>
              <ul className="list-disc pt-4 text-black pl-4 xl:text-[20px] text-[16px] ">
                <li className="pb-2">
                  Finance, Procurement, and Supply Chain Data from SAP S/4HANA
                </li>
                <li className="pb-2">
                  Workforce and Payroll Intelligence from SAP SuccessFactors
                </li>
                <li>
                  Sales, Service, and Marketing Insights from Salesforce or SAP
                  CX
                </li>
              </ul>
            </div>
            <p className="text-[16px] leading-[19px] pt-4 font-normal md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[24px] lg:mt-[6px]">
              We combine process intelligence, data engineering, and
              cloud-native development to give you measurable value from your
              enterprise data.{" "}
            </p>
            <div className="lg:mt-[7px]">
              <LearnMore />
            </div>
          </div>
        </section>
        <div className="py-10"></div>
        <section className="custom-container  px-[2rem]">
          <h2 className="xl:w-[75%] leading-tight pb-6">
            Seamless Migration from SAP Business Warehouse to SAP Business Data
            Cloud
          </h2>
          <p className=" xl:w-[75%] ">
            Modernize your analytics and accelerate cloud transformation:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:mt-[53px] mt-[36px]">
            {exploreData.map((data, ind) => {
              const isFirstThree = ind === 0 || ind === 1 || ind === 2;
              const borderClasses = isFirstThree
                ? "border-b md:border-b-0 md:border-r-2 border-[#848484] pb-[40px] lg:pb-0"
                : "";
              return (
                <div
                  className={`h-full ${borderClasses} first:pl-0 first:pt-0 pt-[42px] md:pt-0 last:pr-0 md:pl-[10px] md:pr-[10px] lg:pl-[30px] lg:pr-[20px] flex flex-col justify-between`}
                  key={ind}
                >
                  <div>
                    <h3 className="text-[#0A6BB8] text-[20px] font-bold leading-tight">
                      {data.title}
                    </h3>
                    <p className="mt-4 text-[16px] leading-[24px] ">
                      {data.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="py-4"></div>

        <section className="lg:mt-[120px] mt-[10px]">
          <div className="grid lg:grid-cols-12 grid-cols-1">
            <div className="lg:col-span-6 col-span-12 lg:order-1 order-2  xl:mr-[40px]">
              <div className="bg-[#073259] text-[white] lg:py-[55px] lg:w-[600px] xl:w-[750px] 3xl:w-[1110px] 2xl:w-[950px] max-lg:px-[36px] pb-[42px] pt-[32px] lg:z-0 relative">
                <div className="custom-container max-md:px-0">
                  <div className="xl:w-[82%] lg:w-[80%]">
                    <h2 className="xl:w-[95%] leading-tight ">
                      Migrate from SAP Datasphere to SAP Business Data Cloud
                    </h2>
                    <p className="mt-5  text-[#FFFFFF] font-light">
                      SAP Business Data Cloud brings the next-generation
                      capabilities of Datasphere under a unified data
                      architecture. Rialtes makes this transition frictionless:
                    </p>
                    <p className="mt-5  text-[#FFFFFF] font-light">
                      With SAP Data Fabric, you can:
                    </p>
                    <ul className="list-disc p-4 text-white font-light pt-4 xl:text-[20px] text-[16px] space-y-4">
                      <li className="pb-1">
                        <div className="font-semibold">
                          Data Mapping & Reconciliation
                        </div>
                        <div className="font-light">
                          We help map your current artifacts and pipelines from
                          SAP Datasphere to SAP Business Data Cloud
                        </div>
                      </li>
                      <li className="pb-1">
                        <div className="font-semibold">
                          Business Context Retention
                        </div>
                        <div className="font-light">
                          Ensure all metadata, lineage, and context are
                          preserved during the shift
                        </div>
                      </li>
                      <li className="pb-1">
                        <div className="font-semibold">Open Extension </div>
                        <div className="font-light">
                          Connect to external platforms like Databricks for
                          advanced analytics and ML integration.
                        </div>
                      </li>
                      <li className="">
                        <div className="font-semibold">
                          Future-Proof Architecture
                        </div>
                        <div className="font-light">
                          Establish a foundation for scalable AI, reporting, and
                          cross-system data modeling.
                        </div>
                      </li>
                    </ul>

                    <div className="absolute mt-0 xl:mt-0">
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
                  alt="desktop image"
                  className="w-full h-full"
                  width={0}
                  height={0}
                  style={{ objectFit: "cover", objectPosition: "25% 20%" }}
                  priority
                />
              </div>

              {/* Mobile Image */}
              <div className="block lg:hidden w-full h-[500px] sm:h-[700px] md:h-[750px] relative">
                <Image
                  src="/images/sap-bdc-services/web.webp"
                  alt="mobile image"
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

        <section className="custom-container xl:pr-0 max-md:px-0">
          <div className="relative overflow-hidden">
            {/* Desktop Background Image */}
            <div className="hidden lg:block">
              <Image
                src="/images/sap-bdc-services/connect.webp"
                alt="SAP Desktop"
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
                alt="SAP Mobile"
                fill
                priority
                style={{ objectFit: "cover" }}
                className="z-0"
              />
            </div>

            {/* Text Over the Image */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 h-full px-4 py-10 text-white max-md:pb-[22rem] ">
              <div className="lg:col-span-7 m-2 sm:m-4 md:m-6  p-3 sm:p-10 ">
                <h2 className="leading-tight pb-6 text-black  ">
                  Connect SAP Business Data Cloud with Databricks
                </h2>
                <p className="mt-4 text-black  font-light">
                  As a certified Databricks consulting partner, Rialtes helps
                  you:
                </p>
                <ul className="list-disc pt-4 text-black pl-5  font-light">
                  <li className="pb-2">
                    Establish bi-directional data pipelines between SAP and
                    Databricks
                  </li>

                  <li className="pb-2">
                    Use Delta Lake and MLFlow with SAP semantic models
                  </li>
                  <li className="pb-2">
                    Enable real-time predictive insights using SAP business
                    context
                  </li>
                  <li>
                    Create industry-specific AI models using unified data across
                    platforms
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="py-10"></div>

        <section className="relative max-[417px]:h-[860px] h-[600px] sm:h-[540px] md:h-[740px] lg:h-[600px] xl:h-[900px] 2xl:h-[790px] overflow-hidden">
          {/* Desktop Background Image */}
          <div className="hidden lg:block">
            <Image
              src="/images/sap-bdc-services/sap-business-web.webp"
              alt="SAP business"
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
              alt="SAP business"
              fill
              priority
              style={{ objectFit: "cover" }}
              className="z-0"
            />
          </div>

          {/* Text Content Section */}
          <div className="custom-container max-md:px-0">
            <div className="relative z-10 grid grid-cols-12 h-full px-4 max-md:px-0 md:ml-0 text-white">
              <div className="md:col-span-6 col-span-12 pt-10 z-10 hidden md:block"></div>

              <div className="md:col-span-6 col-span-12 relative h-full">
                
                <div className="">
                  <div
                    className="absolute md:inset-0  px-11 py-12 text-white max-[417px]:h-[860px] h-[700px] sm:h-[540px] md:h-[740px] xl:h-[900px] lg:h-[600px] 2xl:h-[790px]"
                    style={{
                      background: "#113056",
                      mixBlendMode: "overlay",
                      opacity: 0.8,
                    }}
                  >
                    <div style={{ opacity: 1, color: "#FFFFFF" }}>
                      <h2 className="xl:text-[60px] text-[26px] mb-4 leading-tight">
                        Our SAP Business Data Cloud Services
                      </h2>
                      <p className="text-lg font-light">
                        Use SAP Business Data Cloud with Databricks to
                        harmonize, enrich, and operationalize your data across
                        platforms.
                      </p>
                      <ul className="list-disc p-4 text-white font-light pt-4 xl:text-[20px] text-[16px] space-y-4">
                        <li className="pb-1">
                          <div className="font-semibold">
                            Consulting & Advisory
                          </div>
                          <div className="font-light">
                            Align your data strategy with business objectives
                            and cloud roadmaps.
                          </div>
                        </li>
                        <li className="pb-1">
                          <div className="font-semibold">
                            Implementation & Migration
                          </div>
                          <div className="font-light">
                            From BW and Datasphere to Business Data Cloud with
                            full lifecycle support.
                          </div>
                        </li>
                        <li className="pb-1">
                          <div className="font-semibold">
                            Managed Services & Optimization
                          </div>
                          <div className="font-light">
                            24x7 support, data quality monitoring, and
                            optimization for performance and cost.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Clients Choose Rialtes */}
        <section className="custom-container  lg:mt-[120px]  max-md:px-0">
          <div className="grid lg:grid-cols-12 grid-cols-1">
            <div className="lg:col-span-6 col-span-12 lg:order-1 order-2 xl:mr-[40px]">
              <div className="bg-[#006FBE] text-[white] lg:py-[55px] lg:w-[600px] xl:w-[750px] xl:pl-0 2xl:h-[630px] 2xl:w-[1000px] max-xl:px-[36px] pb-[42px] pt-[32px] lg:z-0 relative">
                <div className="custom-container  xl:pl-[70px]">
                  <div className="xl:w-[70%] lg:w-[80%]">
                    <h2 className="leading-tight ">
                      Why Clients Choose Rialtes
                    </h2>

                    <ul className="list-disc p-4 text-white font-light pt-4 xl:text-[20px] text-[16px]">
                      <li className="pb-2">
                        SAP-Certified Implementation Experts
                      </li>
                      <li className="pb-2">
                        Accelerators for BW and Datasphere Migration
                      </li>
                      <li className="pb-2">
                        Global Delivery with 24x7 Support
                      </li>
                      <li>
                        Industry-Specific Data Frameworks for Life Sciences,
                        Retail, Automotive & More
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 lg:order-2 order-1 xl:mr-5">
              {/* Desktop Image */}
              <div className="hidden lg:block relative w-full h-full top-[-120px] right-0 z-20 ">
                <Image
                  src="/images/sap-bdc-services/clients-choose-rialtes-web.webp"
                  alt="desktop image"
                  className="w-full h-full"
                  width={0}
                  height={0}
                  style={{ objectFit: "cover", objectPosition: "25% 20%" }}
                  priority
                />
              </div>

              {/* Mobile Image */}
              <div className="block lg:hidden w-full h-[500px] sm:h-[700px] md:h-[750px] relative">
                <Image
                  src="/images/sap-bdc-services/clients-choose-rialtes-web.webp"
                  alt="mobile image"
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
      </section>
      <div className="mx-[35px]  custom-container text-black py-16">
        <ContactForm
          title={
            "Contact Rialtes today to explore how Retail+ can future-proof your retail enterprise."
          }
        />
      </div>
    </div>
  );
}
