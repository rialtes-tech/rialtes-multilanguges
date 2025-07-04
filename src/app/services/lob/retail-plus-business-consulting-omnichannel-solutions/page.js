"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import LearnMore from "@/app/components/learnMore";
import { HeroSection } from "@/app/components/herosection";
import Script from "next/script";

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

export default function Retail({ items }) {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Retail Business Consulting Services and Omnichannel Solutions | Rialtes"
        description="Retail+ by Rialtes offers expert-led Retail Business Consulting Services and AI-powered Omnichannel Solutions. Start your retail transformation now."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/services/lob/retail-plus-business-consulting-omnichannel-solutions/"
      />
    
        <Script
        id="webinar-schema-retail-plus"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <HeroSection
        title="Intelligent, Connected, and Scalable Retail Transformation"
        subtitle="Retail+"
        mobimg="/images/industry/retail/bannerMob.webp"
        deskimg="/images/industry/retail/banner.webp"
        extraImg=""
      />

      <section className="mt-16 custom-container">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-8 col-span-12 ">
            <h2 className="leading-tight">
              Empowering Global Retailers with AI-Driven, Omnichannel Solutions
            </h2>
            <p className="xl:text-[22px]  mt-5 pr-8 xl:pr-0">
              In today’s dynamic and highly competitive retail landscape,
              customer expectations are evolving rapidly, driven by
              hyper-personalization, seamless omnichannel engagement, and
              intelligent operations. At Rialtes, we bring over a decade of
              global consulting experience to help B2B and B2C retailers
              successfully navigate these challenges and drive sustainable
              growth.
            </p>
            <p className="xl:text-[22px] mt-5 pr-8 xl:pr-0">
              Through Retail+, Rialtes delivers an end-to-end suite of services,
              combining strategic advisory, solution design, implementation,
              quality assurance, integration, and post-go-live support —
              designed to accelerate enterprise-wide retail transformation.
            </p>
            {/* <p className="xl:text-[22px] mt-5 pr-8 xl:pr-0"> As a certified Salesforce and SAP partner, with offices in India, United States, Canada, and Singapore, Rialtes is uniquely positioned to empower retail brands to optimize operations, enhance customer experience, and leverage AI for data-driven decisions.</p> */}
          </div>
          <div className="xl:col-span-2 col-span-12"></div>
        </div>
      </section>

      {/* comprehensive section */}
      <section className="relative  xl:h-[1125px] overflow-hidden mt-20">
        <div className="xl:block hidden">
          <Image
            src="/images/industry/retail/comprehensive.webp"
            alt="GROW with SAP"
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
          />
        </div>

        <div className="xl:hidden block">
          <Image
            src="/images/industry/retail/compre-mobile.webp"
            alt="GROW with SAP"
            style={{ objectFit: "cover", objectPosition: "15% 10%" }}
            fill
            priority
          />
        </div>
        <div
          className="
            custom-container"
        >
          <div className="relative p-6 xl:w-[828px] xl:pb-32 pb-20  mt-[40rem] md:mt-[60rem] xl:mt-0">
            <div className="absolute inset-0 bg-[#5D5D5D] mix-blend-multiply"></div>

            <div className="relative  bg-opacity-80 text-white z-10 p-3 xl:pl-8 rounded-lg">
              <h2 className="leading-tight xl:w-[80%] pr-20 xl:pr-0">
                Comprehensive Services for Modern Retail Enterprises
              </h2>
              <h3 className="xl:text-[36px] text-[22px] mt-5">
                Retail+ by Rialtes
              </h3>
              <h3 className="mt-5 text-[20px] xl:text-[30px]">Key Offerings</h3>
              <ul className="list-disc xl:space-y-5 space-y-2 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3 xl:pr-12">
                <li>
                  <span className="font-bold">
                    Advisory & Strategy Consulting:{" "}
                  </span>
                  Crafting scalable digital transformation roadmaps aligned with
                  global retail trends and enterprise goals.
                </li>
                <li>
                  <span className="font-bold">
                    Solution Design & Architecture:{" "}
                  </span>
                  End-to-end design covering commerce, supply chain, marketing,
                  and customer service — fully integrated with Salesforce and
                  SAP ecosystems.
                </li>
                <li>
                  <span className="font-bold"> Implementation & Rollout:</span>{" "}
                  Full lifecycle Salesforce Commerce Cloud, Service Cloud, SAP
                  S/4HANA, and AI-driven data integrations, tailored for B2B and
                  B2C models.
                </li>
                <li>
                  <span className="font-bold">
                    {" "}
                    Quality Assurance & Testing:{" "}
                  </span>{" "}
                  Robust functional, performance, and security testing to ensure
                  seamless operations.
                </li>
                <li>
                  <span className="font-bold">
                    {" "}
                    Systems Integration & Automation:
                  </span>{" "}
                  Real-time integrations with ERP, CRM, OMS, Payment, and
                  Inventory platforms, enhancing operational agility.{" "}
                </li>
                <li>
                  <span className="font-bold">
                    {" "}
                    Post Go-Live Optimization & Support:
                  </span>{" "}
                  Continuous enhancement, AI adoption, and managed services for
                  long-term value realization.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Link
        href="/contact-us"
        className=" bg-[#006FBE] absolute xl:ml-[335px] ml-[50px] mt-[-25px] xl:mt-[-30px] xl:text-[20px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300"
      >
        Learn More
      </Link>

      <div className="bg-[#E8E8E8] xl:pb-32 pb-48">
        <div className="custom-container ">
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="xl:col-span-8 col-span-12 xl:mt-32 mt-20">
              <h2 className="leading-tight">
                Deep Industry Expertise Across Retail Verticals
              </h2>
              <h3 className="xl:text-[36px] text-[22px] mt-5 leading-tight font-semibold pr-10">
                Our deep understanding of B2B and B2C retail enables us to
                address the unique needs of:
              </h3>
            </div>
            <div className="xl:col-span-2 col-span-12"></div>
          </div>
          <div className="grid xl:grid-cols-4 grid-cols-2 xl:gap-10 gap-16 mt-16">
            <div>
              <Image
                className="xl:w-[138px] xl:h-[138px] w-[75px] h-[75px]"
                src="/images/industry/retail/fashan.svg"
                alt="Taking the lead"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
              <h3 className="mt-5 font-semibold  leading-tight xl:pr-20">
                Fashion & Apparel
              </h3>
            </div>
            <div>
              <Image
                className="xl:w-[138px] xl:h-[138px] w-[75px] h-[75px]"
                src="/images/industry/retail/consumer.svg"
                alt="Taking the lead"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
              <h3 className="mt-5 font-semibold leading-tight xl:pr-20">
                Consumer Electronics
              </h3>
            </div>
            <div>
              <Image
                className="xl:w-[138px] xl:h-[138px] w-[75px] h-[75px]"
                src="/images/industry/retail/ferniture.svg"
                alt="Taking the lead"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
              <h3 className="mt-5 font-semibold xl:pr-20 leading-tight">
                Home & Furniture
              </h3>
            </div>
            <div>
              <Image
                className="xl:w-[138px] xl:h-[138px] w-[75px] h-[75px]"
                src="/images/industry/retail/lux.svg"
                alt="Taking the lead"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
              <h3 className="mt-5 font-semibold xl:pr-40 leading-tight">
                Luxury Goods & Lifestyle
              </h3>
            </div>
            <div>
              <Image
                className="xl:w-[138px] xl:h-[138px] w-[75px] h-[75px]"
                src="/images/industry/retail/foods.svg"
                alt="Taking the lead"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
              <h3 className="mt-5 font-semibold xl:pr-24 leading-tight">
                Food & Beverage
              </h3>
            </div>
            <div>
              <Image
                className="xl:w-[138px] xl:h-[138px] w-[75px] h-[75px]"
                src="/images/industry/retail/health.svg"
                alt="Taking the lead"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
              <h3 className="mt-5 font-semibold xl:pr-20 leading-tight">
                Health & Wellness
              </h3>
            </div>
            <div>
              <Image
                className="xl:w-[138px] xl:h-[138px] w-[75px] h-[75px]"
                src="/images/industry/retail/travel.svg"
                alt="Taking the lead"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
              <h3 className="mt-5 font-semibold xl:pr-12 leading-tight">
                Travel Retail and Duty-Free
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-12 grid-cols-1 custom-container ">
        <div className="xl:col-span-10 col-span-12 bg-[#163055] p-8 relative bottom-20">
          <h3 className="xl:text-[26px] text-[20px] text-white font-normal leading-tight">
            We help brands unlock new revenue streams, enhance customer loyalty,
            and streamline operations, powered by Salesforce, SAP, and AI-driven
            intelligence.
          </h3>
        </div>
        <div className="xl:col-span-2 col-span-12"></div>
      </div>

      <section className="custom-container md:pr-0 grid xl:grid-cols-12 grid-cols-1  sm:mt-4 max-md:px-0">
        {/* Image block - shown first on mobile (order-1), second on desktop (xl:order-2) */}
        <div className="xl:col-span-6 order-1 xl:order-2">
          <Image
            className="w-full h-full object-cover"
            src="/images/industry/retail/salesforce.webp"
            alt="Taking the lead"
            width={0}
            height={0}
            priority
          />
        </div>

        {/* Text content - shown second on mobile (order-2), first on desktop (xl:order-1) */}
        <div className="xl:col-span-6 bg-[#006FBE] xl:pt-20 pt-10 px-10 text-white order-2 xl:order-1 pb-20 ">
          <h2>Salesforce & SAP</h2>
          <h3 className="xl:text-[42px] font-semibold text-[22px] mt-5">
            Enterprise-Grade Solutions for Retail Success
          </h3>
          <h3 className="mt-5">Salesforce Retail & Consumer Goods Cloud</h3>
          <p className="mt-5 font-normal">
            Leverage Salesforce’s Retail Cloud capabilities — including unified
            customer profiles, AI-based personalization, loyalty management,
            omnichannel service, and marketing automation — to deliver
            consistent and personalized experiences across all customer
            touchpoints.
          </p>
          <h3 className="mt-5">SAP S/4HANA for Retail</h3>
          <p className="mt-5 font-normal">
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
      <section className="custom-container  text-white lg:mt-[-100px] mt-[-120px] relative z-20">
        <div className="bg-[#6E6E6E] lg:mr-20 lg:p-8 mb-2  md:p-8 sm:p-8  p-8  max-md:mr-0 max-sm:mb-8">
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="xl:col-span-6 col-span-12 xl:pl-14 xl:mt-10 ">
              <h2 className="leading-tight">
                Specialized Solutions for Real Estate & Hospitality Retail
              </h2>
            </div>
            <div className="xl:col-span-1 col-span-12 pl-16"></div>
            <div className="xl:col-span-5 col-span-12">
              <h3 className="xl:text-[42px] text-[22px] mt-5 xl:mt-10">
                Exelona
              </h3>
              <p className="mt-5 font-normal xl:pr-16">
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
              className="mx-auto md:mx-0 w-[350px] h-[391px] xl:w-full xl:h-[900px]"
              src="/images/industry/retail/advance-ai.webp"
              alt="Taking the lead"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
          <div className="bg-[#073259] text-white xl:col-span-6 px-16 xl:px-0 col-span-12 xl:ml-[-150px] xl:pl-[200px] xl:pr-[40px] xl;pb-32 pb-[6rem]  lg:pr-12 z-5">
            <h2 className="xl:mt-20 pt-[24rem] xl:pt-0">Advanced AI & Data</h2>
            <h3 className="xl:text-[42px] text-[22px] font-semibold xl:mt-10 mt-5 leading-tight">
              Salesforce Data Cloud & Agentforce for Retail
            </h3>
            <p className="mt-5 font-normal">
              Harness Salesforce Data Cloud to unify customer, sales, and supply
              chain data — driving real-time insights, segmentation, and
              personalized offers. Agentforce, Salesforce’s AI-powered service
              automation solution, enables proactive customer service,
              intelligent case routing, and personalized recommendations across
              channels.
            </p>
            <hr className="mt-10"></hr>
            <h3 className="xl:text-[42px] text-[22px] font-semibold mt-10 leading-tight">
              AI-Driven Consumer Case Management
            </h3>
            <p className="mt-5 font-medium">
              By integrating Salesforce Agentforce and Data Cloud, Rialtes helps
              retail enterprises transform case management and customer support,
              leveraging AI-driven chatbots, predictive analytics, and automated
              workflows to elevate customer service efficiency and satisfaction.
            </p>
            <Link
              href="/contact-us"
              className=" bg-[#006FBE] absolute  xl:mt-[41px] mt-12 xl:text-[20px] text-[16px] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="custom-container pt-8">
        <h2>Related Salesforce Cloud Capabilities</h2>
        <div className="grid xl:grid-cols-3 grid-cols-1 xl:gap-5 gap-16 mt-5">
          <div className="border relative h-[510px] max-xl:h-[260px] border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
            <h3 className="text-[#0A6BB8] xl:pr-20 font-semibold">
              Salesforce Service Cloud
            </h3>
            <p className="xl:text-[24px] text-[16px]  mt-5 font-normal">
              Empower customer service teams with omnichannel case management.
            </p>
            <div className="absolute bottom-[-20px]">
              <LearnMore />
            </div>
          </div>
          <div className="border  relative  h-[510px] max-xl:h-[260px] border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
            <h3 className="text-[#0A6BB8] xl:pr-20 font-semibold">
              Salesforce Experience (Community) Cloud
            </h3>
            <p className="xl:text-[24px] text-[16px] mt-5 xl:pr-12 font-normal">
              Build branded customer, partner, and employee portals for seamless
              communication.
            </p>
            <div className="absolute bottom-[-20px]">
              <LearnMore />
            </div>
          </div>
          <div className=" hidden md:block border  relative  h-[510px] max-xl:h-[260px] border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
            <h3 className="text-[#0A6BB8] xl:pr-20 font-semibold">
              Salesforce Agentforce & Data Cloud
            </h3>
            <p className="xl:text-[24px] text-[16px] mt-5 xl:pr-10 font-normal">
              AI-based automation, customer insights, and intelligent
              engagement.
            </p>
            <div className="absolute bottom-[-20px]">
              <LearnMore />
            </div>
          </div>
        </div>
      </section>

      {/* realchat section */}
      <section className="xl:mt-32 mt-20 custom-container lg:pr-0 pl-0 max-md:px-0 ">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="col-span-4 flex justify-center xl:block">
            <Image
              className="w-full max-w-[450px] md:max-w-[550px] xl:max-w-full h-auto mt-16 relative mx-auto xl:mx-0"
              src="/images/industry/retail/mobile-re.webp"
              alt="Taking the lead"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>

          <div className="col-span-8 bg-[#646464] text-white xl:ml-[-25rem] pb-20 xl:pb-0 px-[35px] xl:pl-[30rem] xl:pr-[3rem] xl:mt-0 mt-[-300px] xl:h-[900px] ">
            <h2 className=" xl:mt-10 mt-80">Introducing RialChat</h2>
            <h3 className="xl:text-[42px] text-[22px] mt-4 font-semibold leading-tight">
              Enterprise-Ready WhatsApp Engagement
            </h3>
            <p className="mt-5 font-normal">
              RialChat, Rialtes’ bi-directional WhatsApp conversational
              platform, is built natively on Salesforce and designed for
              enterprise-grade communications across sales, service, and
              operations.
            </p>
            <ul className="list-disc xl:space-y-3 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5 mb-20">
              <li>
                Ready-to-deploy within minutes, compatible with any Salesforce
                Cloud (Sales, Service, Marketing, Commerce, etc.).
              </li>
              <li>
                Advanced security and role-based access to ensure compliant
                communications.
              </li>
              <li>
                Supports delegation of cases, leads, work orders, service
                requests, and more by record type and business units.
              </li>
              <li>
                {" "}
                Fully integrated with Salesforce workflows and automation for
                real-time, intelligent conversations.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="xl:col-span-9 mx-[35px] z-[9] xl:mx-0 col-span-12 relative bg-[#163055] p-8 xl:mt-[-155px] mt-[-100px] xl:mr-[280px] xl:ml-[418px]">
        <h3 className="xl:text-[26px] text-[20px] text-white font-normal leading-tight">
          With RialChat, enterprises can deliver personalized, secure, and
          scalable customer interactions — directly on WhatsApp, embedded within
          Salesforce.
        </h3>
      </div>

      <section className="relative h-[1026px] xl:h-[870px] overflow-hidden mt-[-135px] xl:mt-0 ">
        <div className="xl:block hidden">
          <Image
            src="/images/industry/retail/why.webp"
            alt="GROW with SAP"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/industry/retail/why-mobile.webp"
            alt="GROW with SAP"
            fill
            priority
          />
        </div>
        <div
          className="h-full relative
                        mx-[35px] xl:mx-0
                        xl:ml-[280px] 
                        xl:mr-[156px] 
                        md:ml-[100px]">
          <div className="flex justify-end xl:mt-32 mt-[24rem]">
            <div className="relative p-10 w-[720px] h-[620px]">
              <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>

              <div className="relative bg-opacity-80 text-white z-10 xl:p-4 rounded-lg">
                <h2 className="leading-tight">
                  Why Choose Rialtes for Retail+?
                </h2>
                <h3 className="xl:text-[42px] text-[22px] font-semibold mt-5">
                  Extending S/4 HANA Value
                </h3>
                <ul className="list-disc xl:space-y-3 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] mt-5">
                  <li>Proven Salesforce & SAP Expertise</li>
                  <li>Decade-long experience serving global retailers</li>
                  <li>AI, Data, and Omnichannel experts</li>
                  <li> Tailored solutions for both B2B and B2C retail</li>
                  <li>
                    End-to-end partnership — strategy to post-go-live success
                  </li>
                </ul>
                <div className="mt-[60px]">
                  <LearnMore />
                </div>
              </div>
            </div>
          </div>
        </div>
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
