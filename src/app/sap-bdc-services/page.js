"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "@/app/components/learnMore";
import { HeroSection } from "@/app/components/herosection";
import ContactForm from "../components/contactform";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "SAP Business Data Cloud: End Data Chaos Today",
  "url": "/sap-business-data-cloud-bdc-consulting",
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

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="SAP Business Data Cloud: End Data Chaos Today | Rialtes"
        description="SAP Business Data Cloud turns chaos into clarity with a single source of truth. Make smarter decisions with Rialtes. Start your data journey today."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/services/lob/retail-plus-business-consulting-omnichannel-solutions/"
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
        <section className="custom-container" >
          <h2 className="xl:w-[75%] leading-tight pb-6">Unify Your Enterprise Data – From Finance to Frontline </h2>
          <p className=" xl:w-[75%] ">Rialtes helps you connect and harmonize enterprise data across your business applications—unlocking insights like never before. With SAP Business Data Cloud, we enable you to integrate:</p>

          <div className="flex xl:gap-32 gap-10   flex-col lg:flex-row lg:mt-10 mt-5 xl:w-[85%] ">
            <div className="lg:w-1/2">
              <ul className="list-disc text-black pl-4 xl:text-[20px] text-[16px] font-medium ">
                <li className="pb-4">Finance, Procurement, and Supply Chain Data from SAP S/4HANA</li>
                <li className="pb-4"> Workforce and Payroll Intelligence from SAP SuccessFactors</li>
                <li > Sales, Service, and Marketing Insights from Salesforce or SAP CX</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <p>Whether you’re optimizing profitability, driving operational efficiency, or delivering personalized customer experiences, SAP Business Data Cloud—implemented by Rialtes—gives you a unified and contextualized view of your enterprise landscape.</p>
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
                priority
              />
              <Image
                src="/images/sap-bdc-services/Unified-mobile.webp"
                alt="agent-chat-img"
                width={0}
                height={0}
                className="block lg:hidden w-full h-full object-cover px-0"
                priority
              />
            </div>

            <div className="lg:col-span-5  xl:pl-3">
              <h2 className=" text-black">
                A Unified, Open Data Foundation for Intelligent Enterprises
              </h2>
              <p className="text-[16px] lg:text-[20px]">
                SAP Business Data Cloud is the next evolution in enterprise data management—bringing together the trusted capabilities of SAP’s data platform, native integration with SAP applications, and openness to third-party platforms like Databricks, Google BigQuery, and Snowflake. It helps you unify business context with data from across your enterprise landscape for real-time insights and AI-powered decisions.

              </p> <p className="text-[16px] lg:text-[20px]">
                As a SAP Authorized Partner and a Databricks Strategic Partner, Rialtes empowers organizations to seamlessly adopt SAP Business Data Cloud and unlock the full value of their enterprise data.
              </p>
              <div className="">
                <LearnMore />

              </div>  </div>  </div>
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
                priority
              />
            </div>
          </div>


          <div className="xl:col-span-6 bg-[#006FBE]  py-7 px-10 text-white order-2 xl:order-1  ">
            <h2>SAP Data Fabric</h2>
            <h3 className="xl:text-[42px] font-semibold text-[22px] mt-5">
              Powered by SAP Business Data Cloud                   </h3>
            <p className="mt-5  text-[#FFFFFF] font-light">
              The SAP Data Fabric—enabled by SAP Business Data Cloud—acts as a smart, connected data layer across your organization. It provides a consistent foundation for accessing, modeling, and governing enterprise data with business context intact.
            </p>
            <p className="mt-5  text-[#FFFFFF] font-light"> With SAP Data Fabric, you can:</p>

            <ul className="list-disc p-4 text-[#FFFFFF] font-light pt-4  ">
              <li className="pb-4"> Connect live and replicated data across multi-cloud and hybrid landscapes
              </li>
              <li className="pb-4">  Unify semantic definitions across domains and systems
              </li>
              <li className="pb-4" >  Ensure trusted data governance and lineage across all business functions </li>
              <li className="">   Accelerate AI, planning, and analytics with clean, context-rich data
              </li>
            </ul>
            <div className="absolute mt-[-25px] xl:mt-[-30px]">
              <LearnMore /></div>

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

          {/* Text */}

          <div className="relative z-10 flex flex-col lg:flex-row justify-between h-full px-4 text-white custom-container">
            {/* Left text */}
            <div className="text-left lg:w-[40%] flex flex-col justify-center">
              <h2 className="">Why Choose SAP Business Data Cloud?</h2>
              <div className="xl:mt-[106px] "> <Link href="/" className=" bg-[#006FBE]   hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
                Learn More
              </Link></div>
            </div>

            {/* Right text */}

            <div className="lg:w-[60%] mt-6  lg:relative bottom-0 lg:bottom-[-50px] max-md:pb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-9 z-90">
                {[
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
                ].map((item, index) => (
                  <div
                    key={index}
                    className=" bg-white border border-[#707070] p-8 text-black"
                  >
                    <p className="text-[#0A6BB8] text-[20px] font-semibold leading-tight">
                      {item.title}
                    </p>
                    <p className="mt-4 text-[16px] leading-[24px] font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </section>
        <div className="py-7"></div>

      </section>
      <div
        className="mx-[35px]  custom-container text-black py-16"
      >
        <ContactForm
          title={
            "Contact Rialtes today to explore how Retail+ can future-proof your retail enterprise."
          }
          className={"xl:max-w-[72%] leading-tight  xl:text-[59px] text-[26px]"}
        />
      </div>
    </div>
  );
}
