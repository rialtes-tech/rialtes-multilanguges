"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "@/app/components/learnMore";
import Script from "next/script";
import UnorderedList from "@/app/components/unorderedList";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Retail Business Consulting Services",
  "alternateName": "RetailPlus by Rialtes",
  "url": "https://www.rialtes.com/services/lob/retail-plus-business-consulting-omnichannel-solutions/",
  "description": "Retail+ by Rialtes offers intelligent, scalable, and AI-powered retail transformation services for B2B and B2C enterprises across industries such as fashion, electronics, furniture, luxury, food, wellness, and more. Services include advisory, solution design, implementation, integration, quality assurance, and ongoing support using Salesforce and SAP platforms.",
  "provider": {
    "@type": "Organization",
    "name": "Rialtes",
    "url": "https://www.rialtes.com"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Canada"
    },
    {
      "@type": "Country",
      "name": "India"
    },
    {
      "@type": "Country",
      "name": "Singapore"
    }
  ],
  "serviceType": "Retail Business Consulting",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Retail+ Key Offerings",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Advisory & Strategy Consulting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solution Design & Architecture"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Implementation & Rollout"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quality Assurance & Testing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Systems Integration & Automation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Post Go-Live Optimization & Support"
        }
      }
    ]
  }
}
const retailServices = [
  {
    title: "Advisory & Strategy Consulting:",
    description:
      "Crafting scalable digital transformation roadmaps aligned with global retail trends and enterprise goals.",
  },
  {
    title: "Solution Design & Architecture:",
    description:
      "End-to-end design covering commerce, supply chain, marketing, and customer service — fully integrated with Salesforce and SAP ecosystems.",
  },
  {
    title: "Implementation & Rollout:",
    description:
      "Full lifecycle Salesforce Commerce Cloud, Service Cloud, SAP S/4HANA, and AI-driven data integrations, tailored for B2B and B2C models.",
  },
  {
    title: "Quality Assurance & Testing:",
    description:
      "Robust functional, performance, and security testing to ensure seamless operations.",
  },
  {
    title: "Systems Integration & Automation:",
    description:
      "Real-time integrations with ERP, CRM, OMS, Payment, and Inventory platforms, enhancing operational agility.",
  },
  {
    title: "Post Go-Live Optimization & Support:",
    description:
      "Continuous enhancement, AI adoption, and managed services for long-term value realization.",
  },
];
const retailVerticals = [
  {
    title: "Fashion & Apparel",
    icon: "/images/industry/retail/fashan.svg",
    paddingClass: "xl:pr-20",
  },
  {
    title: "Consumer Electronics",
    icon: "/images/industry/retail/consumer.svg",
    paddingClass: "xl:pr-20",
  },
  {
    title: "Home & Furniture",
    icon: "/images/industry/retail/ferniture.svg",
    paddingClass: "xl:pr-20",
  },
  {
    title: "Luxury Goods & Lifestyle",
    icon: "/images/industry/retail/lux.svg",
    paddingClass: "xl:pr-40",
  },
  {
    title: "Food & Beverage",
    icon: "/images/industry/retail/foods.svg",
    paddingClass: "xl:pr-24",
  },
  {
    title: "Health & Wellness",
    icon: "/images/industry/retail/health.svg",
    paddingClass: "xl:pr-20",
  },
  {
    title: "Travel Retail and Duty-Free",
    icon: "/images/industry/retail/travel.svg",
    paddingClass: "xl:pr-12",
  },
];
const salesforceSolutions = [
  {
    title: "Salesforce Service Cloud",
    description: "Empower customer service teams with omnichannel case management.",
  },
  {
    title: "Salesforce Experience (Community) Cloud",
    description: "Build branded customer, partner, and employee portals for seamless communication.",
  },
  {
    title: "Salesforce Agentforce & Data Cloud",
    description: "AI-based automation, customer insights, and intelligent engagement.",
  },
];
const whyChooseData = [
  "Proven Salesforce & SAP Expertise",
  "Decade-long experience serving global retailers",
  "AI, Data, and Omnichannel experts",
  "Tailored solutions for both B2B and B2C retail",
  "End-to-end partnership — strategy to post - go - live success",
]
const rialChat = [
  "Ready-to-deploy within minutes, compatible with any Salesforce Cloud (Sales, Service, Marketing, Commerce, etc.).",
  "Advanced security and role-based access to ensure compliant communications.",
  "Supports delegation of cases, leads, work orders, service requests, and more by record type and business units.",
  "Fully integrated with Salesforce workflows and automation for real - time, intelligent conversations."
]
export default function page() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Retail Business Consulting Services and Omnichannel Solutions | Rialtes"
        description="Retail+ by Rialtes offers expert-led Retail Business Consulting Services and AI-powered Omnichannel Solutions. Start your retail transformation now."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/services/lob/retail-plus-business-consulting-omnichannel-solutions/"
      />
      <Script
        id="schema-retail-plus"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative group overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/industry/retail/banner.webp"
            alt="auto-sense-banner"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/industry/retail/bannerMob.webp"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative  custom-container pb-40 md:pb-[30rem] xl:pb-24 4xl:pb-40">
          <div className="grid md:grid-cols-12 grid-cols-1 4xl:mt-20 ">
            <div className="lg:col-span-5 2xl:col-span-5 4xl:col-span-7 col-span-12 mt-28  2xl:pr-[34px]">
              <h3 className="text-white xl:text-[24px] text-[18px] font-bold mb-2">Retail+</h3>
              <h1 className="text-white leading-tight text-[26px] xl:text-[40px] lg:text-[36px] 4xl:text-[60px] md:text-[35px] mt-5 pr-32 xl:pr-0 4xl:pr-0 md:pr-64">
                Intelligent, Connected, and Scalable Retail Transformation
              </h1>
            </div>
            <div className="xl:col-span-7 col-span-12">
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 custom-container">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-10 col-span-12 ">
            <h2 className="leading-tight text-[26px] xl:text-[45px] 4xl:text-[60px] 4xl:pr-10 xl:pr-24">
              Empowering Global Retailers with AI-Driven, Omnichannel Solutions
            </h2>
            <p className="4xl:text-[22px] xl:text-[18px]  mt-5 pr-8 xl:pr-0">
              In today’s dynamic and highly competitive retail landscape,
              customer expectations are evolving rapidly, driven by
              hyper-personalization, seamless omnichannel engagement, and
              intelligent operations. At Rialtes, we bring over a decade of
              global consulting experience to help B2B and B2C retailers
              successfully navigate these challenges and drive sustainable
              growth.
            </p>
            <p className="4xl:text-[22px] xl:text-[18px] mt-5 pr-8 xl:pr-0">
              Through Retail+, Rialtes delivers an end-to-end suite of services,
              combining strategic advisory, solution design, implementation,
              quality assurance, integration, and post-go-live support —
              designed to accelerate enterprise-wide retail transformation.
            </p>
          </div>
          <div className="xl:col-span-2 col-span-12"></div>
        </div>
      </section>
      {/* comprehensive section */}
      <section className="relative  xl:mt-20 h-[934px] 2xl:h-[868px] xl:h-[830px] md:h-[840px] 4xl:h-[1135px]">
        <div className="xl:block hidden">
          <Image
            src="/images/industry/retail/comprehensive.webp"
            alt="comprehensive image"
            fill
            priority
            sizes="100vw"
            className="w-full h-full"
          />
        </div>

        <div className="xl:hidden block w-full">
          <Image
            src="/images/industry/retail/compre-mobile.webp"
            alt="comprehensive image"
            priority
            sizes="100vw"
            className="w-full h-full"
            fill
          />
        </div>
        <div
          className="custom-container max-md:px-0">
          <div className="relative p-6 4xl:w-[828px] xl:w-[630px] 4xl:pb-32 pb-20 xl:pb-10  mt-[4rem] md:mt-[5rem] xl:mt-0 ">
            <div className="absolute inset-0 bg-[#5D5D5D] mix-blend-multiply h-[934px] 2xl:h-[868px] xl:h-[830px] md:h-[840px] 4xl:h-[1135px]"></div>
            <div className="relative  bg-opacity-80 text-white z-10 p-3 xl:pl-8 rounded-lg">
              <h2 className="leading-tight 4xl:w-[80%] xl:w-[75%] pr-20 xl:pr-0 xl:text-[40px] md:text-[30px] 2xl:text-[41px] 4xl:text-[60px] text-[26px]">
                Comprehensive Services for Modern Retail Enterprises
              </h2>
              <h3 className="4xl:text-[36px] md:text-[30px] text-[22px] mt-5">
                Retail+ by Rialtes
              </h3>
              <h3 className="mt-5 text-[20px] 4xl:text-[30px] md:text-[24px]">Key Offerings</h3>
              <ul className="list-disc leading-tight 4xl:space-y-5 2xl:space-y-5 md:space-y-5 xl:space-y-3 space-y-2 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] md:text-[18px] xl:text-[16px] text-[16px] 4xl:mt-10 mt-3 4xl:pr-16">
                {retailServices.map((service, index) => (
                  <li key={index}>
                    <span className="font-bold">{service.title} </span>
                    {service.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Link
        href="/contact-us"
        className=" bg-[#006FBE] absolute 4xl:ml-[335px] 2xl:ml-[192px] xl:ml-[140px] ml-[50px] mt-[-25px] xl:mt-[-30px] 4xl:text-[20px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
        Learn More
      </Link>
      {/* deep industry section */}
      <section className="bg-[#E8E8E8] xl:pb-32 pb-48">
        <div className="custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="xl:col-span-9 col-span-12 xl:mt-32 mt-20">
              <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px] xl:pr-32 4xl:pr-0">
                Deep Industry Expertise Across Retail Verticals
              </h2>
              <h3 className="4xl:text-[36px] text-[22px] mt-5 leading-tight font-semibold pr-10 xl:pr-64 4xl:pr-0">
                Our deep understanding of B2B and B2C retail enables us to
                address the unique needs of:
              </h3>
            </div>
            <div className="xl:col-span-2 col-span-12"></div>
          </div>
          <div className="grid xl:grid-cols-4 grid-cols-2 xl:gap-10 gap-16 mt-16">
            {retailVerticals.map((item, index) => (
              <div key={index}>
                <Image
                  className="4xl:w-[138px] 4xl:h-[138px] w-[75px] h-[75px]"
                  src={item.icon}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                />
                <h3 className={`mt-5 font-semibold 4xl:text-[30px] xl:text-[20px] md:text-[24px] leading-tight ${item.paddingClass}`}>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="grid xl:grid-cols-12 grid-cols-1 custom-container ">
        <div className="xl:col-span-10 col-span-12 bg-[#163055] p-8 relative bottom-20">
          <h3 className="4xl:text-[26px] text-[20px] text-white font-normal leading-tight pr-5 xl:pr-0 4xl:pr-0">
            We help brands unlock new revenue streams, enhance customer loyalty,
            and streamline operations, powered by Salesforce, SAP, and AI-driven
            intelligence.
          </h3>
        </div>
        <div className="xl:col-span-2 col-span-12"></div>
      </div>
      <section className="custom-container md:pr-0 grid xl:grid-cols-12 grid-cols-1  sm:mt-4 max-md:px-0">
        <div className="xl:col-span-6 order-1 xl:order-2">
          <Image
            className="w-full h-full"
            src="/images/industry/retail/salesforce.webp"
            alt="Taking the lead"
            width={0}
            height={0}
            priority
            sizes="100vw"
          />
        </div>
        <div className="xl:col-span-6 bg-[#006FBE] 4xl:pt-20 pt-10 px-10 4xl:px-16 xl:px-16 xl:pr-10 text-white order-2 xl:order-1 pb-20 ">
          <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px]">Salesforce & SAP</h2>
          <h3 className="4xl:text-[42px] font-semibold text-[22px] mt-5 leading-tight xl:pr-32 4xl:pr-24">
            Enterprise-Grade Solutions for Retail Success
          </h3>
          <h3 className="mt-5 leading-tight 4xl:text-[30px] text-[20px] xl:pr-24 4xl:pr-32">Salesforce Retail & Consumer Goods Cloud</h3>
          <p className="mt-5 font-normal 4xl:text-[20px] xl:text-[16px] xl:pr-0 4xl:pr-[95px]">
            Leverage Salesforce’s Retail Cloud capabilities — including unified
            customer profiles, AI-based personalization, loyalty management,
            omnichannel service, and marketing automation — to deliver
            consistent and personalized experiences across all customer
            touchpoints.
          </p>
          <h3 className="mt-5 4xl:text-[30px] text-[20px]">SAP S/4HANA for Retail</h3>
          <p className="mt-5 font-normal 4xl:text-[20px] xl:text-[16px] xl:pr-0 4xl:pr-[100px]">
            Transform back-end operations with SAP S/4HANA Retail, enabling
            intelligent inventory management, demand forecasting, supply chain
            optimization, and real-time analytics to drive profitability and
            responsiveness.
          </p>
        </div>
      </section>
      {/* exelona section */}
      <section className="custom-container  mt-16 max-lg:px-0">
        <div className="lg:block hidden">
          <Image
            className="w-full"
            src="/images/industry/retail/exelona-desk.webp"
            alt="Taking the lead"
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </div>
        <div className="lg:hidden block ">
          <Image
            className="w-full"
            src="/images/industry/retail/exelona-mobile.webp"
            alt="Taking the lead"
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </div>
      </section>
      <section className="custom-container text-white lg:mt-[-100px] mt-[-120px] relative z-20">
        <div className="bg-[#6E6E6E] lg:mr-20 lg:p-8 mb-2  md:p-8 sm:p-8  p-8  max-md:mr-0 max-sm:mb-8 pb-20 xl:pb-0 4xl:pb-0">
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="xl:col-span-6 col-span-12 xl:pl-14 xl:mt-10 ">
              <h2 className="leading-tight 4xl:text-[57px] xl:text-[40px] text-[26px] xl:pr-10 4xl:pr-0">
                Specialized Solutions for Real Estate & Hospitality Retail
              </h2>
            </div>
            <div className="xl:col-span-1 col-span-12 pl-16"></div>
            <div className="xl:col-span-5 col-span-12">
              <h3 className="xl:text-[42px] text-[22px] mt-5 xl:mt-10">
                Exelona
              </h3>
              <p className="mt-5 font-normal xl:pr-16 4xl:text-[20px] text-[16px] leading-tight">
                For retailers operating in real estate and hospitality sectors,
                Exelona — Rialtes’ proprietary solution built natively on
                Salesforce — enables end-to-end asset management, marketing,
                finance, and operations on a single unified platform. With
                Exelona, real estate retail businesses can manage property
                sales, leasing, tenant engagement, and operations seamlessly and
                securely.
              </p>
              <div className="bottom-0  xl:relative mb-[-31px]  absolute  xl:mt-[41px] mt-12">
                <LearnMore />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* advance AI section */}
      <section className="xl:mt-16  ">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-6 col-span-12 mt-16 xl:mb-16 mb-[-20rem] z-10 flex justify-center lg:justify-start">
            <Image
              className="mx-auto md:mx-0  w-full max-md:px-[35px] xl:h-full h-[391px]"
              src="/images/industry/retail/advance-ai.webp"
              alt="advance-ai image"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
          <div className="bg-[#073259] text-white xl:col-span-6 px-16 xl:px-0  4xl:pr-[16rem] col-span-12 xl:ml-[-150px] xl:pl-[200px] 4xl:pl-[240px] xl:pr-[40px] xl:pb-32 pb-[6rem]  lg:pr-12 z-5">
            <h2 className="xl:mt-20 pt-[24rem] xl:pt-0 4xl:text-[60px] xl:text-[40px] text-[26px]">Advanced AI & Data</h2>
            <h3 className="4xl:text-[42px] text-[22px] xl:text-[32px] font-semibold xl:mt-10 mt-5 leading-tight">
              Salesforce Data Cloud & Agentforce for Retail
            </h3>
            <p className="mt-5 font-normal 4xl:text-[20px] xl:text-[16px] text-[16px] xl:pr-20 leading-tight">
              Harness Salesforce Data Cloud to unify customer, sales, and supply
              chain data — driving real-time insights, segmentation, and
              personalized offers. Agentforce, Salesforce’s AI-powered service
              automation solution, enables proactive customer service,
              intelligent case routing, and personalized recommendations across
              channels.
            </p>
            <hr className="mt-10"></hr>
            <h3 className="4xl:text-[42px] text-[22px] xl:text-[32px] font-semibold mt-10 leading-tight">
              AI-Driven Consumer Case Management
            </h3>
            <p className="mt-5 font-light 4xl:text-[20px] xl:text-[16px] text-[16px] xl:pr-24 4xl:pr-16 leading-tight">
              By integrating Salesforce Agentforce and Data Cloud, Rialtes helps
              retail enterprises transform case management and customer support,
              leveraging AI-driven chatbots, predictive analytics, and automated
              workflows to elevate customer service efficiency and satisfaction.
            </p>
            <div className="relative">
              <Link
                href="/contact-us"
                className=" bg-[#006FBE] absolute 4xl:bottom-[-147px] 4xl:mt-[41px] xl:mt-[78px] mt-12 4xl:text-[20px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* related section */}
      <section className="custom-container pt-16">
        <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px]">Related Salesforce Cloud Capabilities</h2>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 gap-16 mt-5 sm:w-[80%] md:w-full">
          {salesforceSolutions.map((item, index) => (
            <div
              key={index}
              className="border relative border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
              <h3 className="text-[#0A6BB8] xl:pr-20 4xl:pr-8 font-semibold leading-tight 4xl:text-[30px] xl:text-[20px]">{item.title}</h3>
              <p className="4xl:text-[24px] text-[16px] mt-5 xl:pr-10 font-normal mb-[40px] leading-tight">{item.description}</p>
              <div className="absolute bottom-[-20px]">
                <LearnMore />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* realchat section */}
      <section className="xl:mt-32 mt-20 custom-container lg:pr-0 pl-0 max-md:px-0 ">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="col-span-4 flex justify-center xl:block">
            <Image
              className="w-full  h-auto 4xl:h-[671px] xl:h-[451px] 2xl:h-[500px] mt-16 relative mx-auto xl:mx-0 max-md:px-[35px]"
              src="/images/industry/retail/mobile-re.webp"
              alt="RialChat image"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
          <div className="col-span-8 bg-[#646464] text-white 4xl:ml-[-25rem] xl:ml-[-20rem] 4xl:pr-80  pb-20 xl:pb-0 px-[35px] 4xl:pl-[30rem] xl:pl-[24rem] xl:pr-[10rem] xl:mt-0 mt-[-300px] xl:h-[630px] 2xl:h-[680px] 4xl:h-[865px]">
            <h2 className=" xl:mt-10 mt-80 4xl:text-[60px] xl:text-[45px] 2xl:text-[45px] text-[26px]">Introducing RialChat</h2>
            <h3 className="4xl:text-[42px] text-[22px] 2xl:text-[32px] mt-4 font-semibold leading-tight">
              Enterprise-Ready WhatsApp Engagement
            </h3>
            <p className="mt-5 font-normal 4xl:pr-10 leading-tight 4xl:text-[20px] text-[16px] 2xl:pr-40">
              RialChat, Rialtes’ bi-directional WhatsApp conversational
              platform, is built natively on Salesforce and designed for
              enterprise-grade communications across sales, service, and
              operations.
            </p>
            <UnorderedList arrName={rialChat} ulClassName="list-disc  4xl:space-y-3 leading-tight marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] text-[16px] mt-5 mb-20 4xl:pr-10 2xl:pr-40" liClassName="" />
          </div>
        </div>
      </section>
      <div className="grid grid-cols-12">
        <div className="xl:col-span-3"></div>
        <div className="xl:col-span-7 mx-[35px] z-[9] xl:mx-0 4xl:ml-[-54px] 2xl:ml-[-100px] 3xl:ml-[-20px]  xl:ml-[-165px] 2xl:mt-[-115px] 4xl:mt-[-130px] col-span-12 relative bg-[#163055] p-8 xl:mt-[-115px] mt-[-100px]">
          <h3 className="4xl:text-[26px] text-[20px] text-white font-normal leading-tight">
            With RialChat, enterprises can deliver personalized, secure, and
            scalable customer interactions — directly on WhatsApp, embedded within
            Salesforce.
          </h3>
        </div>
      </div>
      {/* why choose section */}
      <section className="relative h-[1026px] 2xl:h-[715px] xl:h-[715px] 4xl:h-[870px] overflow-hidden mt-[-135px] xl:mt-0 ">
        <div className="xl:block hidden">
          <Image
            src="/images/industry/retail/why.webp"
            alt="GROW with SAP"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/industry/retail/why-mobile.webp"
            alt="GROW with SAP"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="h-full mx-[35px] xl:mx-0 xl:ml-[280px] xl:mr-[156px] md:ml-[100px]">
          <div className="xl:flex xl:justify-end xl:mt-32 mt-[24rem]">
            <div className="relative p-10 4xl:w-[720px] 4xl:h-[620px] xl:w-[560px] xl:h-[495px]">
              <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
              <div className="relative bg-opacity-80 text-white z-10 xl:p-4 rounded-lg">
                <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">
                  Why Choose Rialtes for Retail+?
                </h2>
                <h3 className="4xl:text-[42px] text-[22px] font-semibold mt-5">
                  Extending S/4 HANA Value
                </h3>
                <UnorderedList arrName={whyChooseData} ulClassName="list-disc 4xl:space-y-3 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] text-[16px] mt-5" liClassName="" />
                <div className="mt-[60px] 4xl:mt-[18px] xl:mt-[30px] absolute">
                  <LearnMore />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact form */}
      <div className="mx-[35px]  custom-container text-black py-16">
        <ContactForm
          title={
            "Contact Rialtes today to explore how Retail+ can future-proof your retail enterprise."
          }
          className={"xl:max-w-[72%] leading-tight  4xl:text-[59px] text-[26px] xl:text-[40px]"} />
      </div>
    </div>
  );
}
