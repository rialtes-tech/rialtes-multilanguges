"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform"
import Seo from "@/app/components/Seo";
import LearnMore from "../../components/learnMore";
import Script from "next/script";
import BreadCrumbs from '@/app/components/BreadCrumbs'
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
 import { useRef } from "react";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Manufacturing IT Solutions & Industry Transformation",
  "url": "https://www.rialtes.com/industry/manufacturing-cloud-erp/",
  "description": "Rialtes delivers intelligent manufacturing transformation with SAP, Salesforce, AI, and advanced automation tools. We support discrete, process, repetitive, and job shop manufacturers with real-time data visibility, predictive analytics, digital twins, and ERP integration for future-ready operations.",
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
    "name": "Manufacturing IT Solutions & Industry Transformation",
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "Singapore" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Manufacturing Transformation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Discrete Manufacturing Solutions",
            "description": "Manage complex product configurations, supply chains, and engineering processes with integrated quoting, order management, and AI-powered maintenance prediction."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Process Manufacturing Solutions",
            "description": "Optimize batch production, compliance (FDA, GMP), and real-time quality tracking. Enable traceability and yield management through AI-enabled platforms."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Repetitive Manufacturing Solutions",
            "description": "Enhance mass production with capacity planning, real-time monitoring, and AI-driven anomaly detection to improve throughput and reduce cycle time."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Job Shop Manufacturing Solutions",
            "description": "Engineer-to-order (ETO) and make-to-order (MTO) solutions with real-time dashboards for costing, planning, and execution of high-variety, low-volume production."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Robotic Smart Factory Enablement",
            "description": "Implement predictive maintenance, robotic process automation, and digital twin capabilities for autonomous, zero-defect manufacturing environments."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SAP & Salesforce Integration for Manufacturing",
            "description": "Combine SAP Digital Manufacturing Cloud and Salesforce Manufacturing Cloud to connect customer feedback, factory workflows, and dealer networks into one system."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ERP Integration with MuleSoft",
            "description": "Integrate SAP and Oracle ERP with production and procurement systems using MuleSoft for unified, real-time business operations and reduced costs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Demand Planning with Kinaxis",
            "description": "Use Kinaxis RapidResponse for dynamic forecasting, inventory optimization, and supply chain agility in response to market volatility and disruptions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pre-Built Accelerators for Manufacturing",
            "description": "Deploy industry-specific solutions such as smart factory templates and AI-driven workflows to reduce setup time and ensure faster ROI."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Cloud & Tableau for Manufacturing Analytics",
            "description": "Enable real-time visibility into OEE, downtime, supply chain risks, and demand forecasting using AI-enhanced dashboards and analytics."
          }
        }
      ]
    }
  }
}
export default function Page() {
   const contactRef = useRef(null);

    const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="IT and Cloud ERP Solutions for Manufacturing Industry | Rialtes"
        description="Rialtes delivers expert IT and cloud ERP solutions for manufacturing businesses, helping drive efficiency, innovation, and digital transformation at scale."
        canonical="https://www.rialtes.com/industry/manufacturing-cloud-erp"
      />
      <Script
        id="schema-manufacturing"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* breadcrumb schema */}
      <BreadcrumbSchema
       currPage="Manufacturing"
      />
      {/* hero section */}
      <section className="relative pb-20">
        <div className="xl:block hidden">
          <Image
            src="/images/industry/manufacture/banner-desktop.webp"
            alt="desktop banner"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "75% 20%" }}

          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/industry/manufacture/banner-mobile.webp"
            alt="mobile banner"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}

          />
        </div>
        <div className="relative custom-container xl:!pr-0">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-20">
            <div className="xl:col-span-5 col-span-12 xl:pr-0  md:pr-0 mt-20">
              <h3 className="text-white xl:text-[24px] text-[18px] font-bold mb-2 mt-10">Manufacturing</h3>
              <h1 className="text-white  leading-tight mt-5 pr-10 xl:pr-0 4xl:text-[60px] xl:text-[45px] text-[26px]">
                Powering the Future of Manufacturing
              </h1>
              <h3 className="4xl:text-[40px] xl:text-[20px] mt-10 text-white font-bold text-[18px] leading-tight">Smarter, Faster, Connected</h3>
            </div>
            <div className="xl:col-span-6 col-span-12">
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb */}
      <div className="custom-container">
        <BreadCrumbs currPage="Manufacturing" />
      </div>
      {/* page description */}
      <section className="xl:mt-14 mt-8 custom-container">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-7 col-span-12">
            <p className="mt-10  leading-tight xl:pr-20 ">Driving end-to-end digital transformation for manufacturers with AI, Cloud, and Smart Automation. Rialtes empowers manufacturing companies to evolve beyond traditional operations and embrace next-gen manufacturing ecosystems that are agile, data-driven, and customer-centric.</p>
          </div>
          <div className="xl:col-span-5 col-span-12">
          </div>
        </div>
      </section>
      {/* thought leadership section */}
      <section className="relative  overflow-hidden mt-20 xl:!mr-[142px]">
        <div className="xl:block hidden">
          <Image
            src="/images/industry/manufacture/thoughts.webp"
            alt="thought leadership image"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "75% 20%" }}
          />
        </div>
        <div className="xl:hidden block h-[625px]">
          <Image
            src="/images/industry/manufacture/thoughts-mobile.webp"
            alt="thought leadership image"
            priority
            sizes="100vw"
            width={375}
            height={275}
            className="w-full h-full"
            style={{ objectFit: "cover", objectPosition: "75% 60%" }}
          />
        </div>
        <div className="custom-container h-full relative xl:block hidden ">
          <div className="relative  px-[48px] pb-[80px] pt-[45px]  4xl:w-[570px] w-[488px] 4xl:h-[695px] xl:block hidden">
            <div className="xl:absolute  inset-0 bg-[#016FBE] mix-blend-multiply"></div>
            <div className="relative  bg-opacity-80 text-white z-10 rounded-lg">
              <h2 className="font-light leading-tight 4xl:text-[60px] xl:text-[45px] md:text-[35px] text-[26px]">Thought Leadership</h2>
              <h3 className="4xl:text-[36px] xl:text-[26px] text-[22px] mt-5 leading-tight font-semibold">Leading the Digital Reinvention of Manufacturing</h3>
              <p className='mt-5 font-normal'>At Rialtes, we believe the future of manufacturing lies in resilient, adaptive, and AI-powered ecosystems. From digital twins to predictive supply chains, we help manufacturers think ahead of disruption and innovate at scale. Our focus is on customer personalization, operational efficiency, and global compliance, powered by connected data and automation.</p>       </div>
          </div>
        </div>
      </section>
      <div className="relative pt-[37px] pb-[53px] xl:hidden block custom-container ">
        <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
        <div className="relative  bg-opacity-80 text-white z-10  rounded-lg">
          <h2 className="font-light leading-tight">Thought Leadership</h2>
          <h3 className="xl:text-[36px] text-[22px] mt-5 leading-tight font-semibold pr-20">Leading the Digital Reinvention of Manufacturing</h3>
          <p className='mt-5 font-normal'>At Rialtes, we believe the future of manufacturing lies in resilient, adaptive, and AI-powered ecosystems. From digital twins to predictive supply chains, we help manufacturers think ahead of disruption and innovate at scale. Our focus is on customer personalization, operational efficiency, and global compliance, powered by connected data and automation.</p>       </div>
      </div>
      {/* end to end section */}
      <section className="relative">
        <div className="xl:block hidden">
          <Image
            src="/images/industry/manufacture/transform-desk.webp"
            alt="transform image"
            fill
            priority
            className="custom-container xl:!pr-0"
            style={{ objectFit: "cover" }}

            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/industry/manufacture/man-mobile.webp"
            alt="transform image"
            fill
            priority
            sizes="100vw"
            className="sm:object-cover sm:object-[position:75%_43%]"
          />
        </div>
        <div
          className="relative text-white grid xl:grid-cols-12 grid-cols-1" >
          <div className="col-span-2"></div>
          <div className="xl:pt-10 pt-5 4xl:pb-32 pb-10 col-span-4 xl:pl-10">
            <div className="xl:col-span-5 col-span-12 xl:pt-8  xl:mt-0 mt-[38rem] mx-[35px] xl:mx-0">
              <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">Rialtes’ End-to-End Manufacturing Transformation Services</h2>
              <p className="mt-5 font-light pr-8 xl:pr-0">Our services cover the entire manufacturing value chain, from advisory and architecture to implementation, testing, and continuous innovation. </p>
              <p className="xl:mt-5 font-light">We collaborate with leading platforms like SAP, Salesforce, MuleSoft, and Kinaxis to provide scalable, integrated, and future-ready solutions. Rialtes brings together technology, process, and industry expertise under one roof to deliver seamless transformation.</p>
              <div className="mt-5">
                <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"}  onClick={handleScrollToContact}
  btnName="Talk to Us" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* pre built section */}
      <section className="relative grid xl:grid-cols-12 grid-cols-1">
        <div className="xl:col-span-7 col-span-12">
          <Image
            src="/images/industry/manufacture/prebuilt.webp"
            alt="prebuilt image"
            priority
            className="w-full h-full"
            width={1200}
            height={650}
            sizes="100vw"
          />
        </div>
        <div className="xl:col-span-4 col-span-12">
          <div className="xl:col-span-4 col-span-12 bg-[#C17B57] text-white xl:pl-14 pr-4 pt-14 p-10 pb-0 w-full">
            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">Pre-Built Manufacturing Accelerators</h2>
            <h3 className="4xl:text-[36px] text-[22px] mt-5 font-semibold leading-tight">Speed, Scale, Success</h3>
            <p className="mt-5 xl:mb-10 mb-5 font-normal 4xl:pr-20 pr-5 leading-tight">With industry-specific accelerators, Rialtes enables manufacturers to deploy ready-to-use solutions that cut down months of setup time. From smart factory templates to AI-powered predictive workflows, our tools are designed to accelerate value realization, improve productivity, and drive intelligent operations. Our accelerators also ensure regulatory compliance and quality assurance, reducing risks during implementation.</p>
            <div className="xl:bottom-0">
              <LearnMore  onClick={handleScrollToContact}
  btnName="Talk to Us"/>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 col-span-12"></div>
      </section>
      {/* discrite manufacturing section */}
      <section className="custom-container max-md:px-0 mt-16">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          {/* Image First on Mobile */}
          <div className="xl:col-span-7 col-span-12 order-1 xl:order-2">
            <Image
              src="/images/industry/manufacture/discrite.webp"
              alt=""
              priority
              className="w-full"
              width={1200}
              height={650}
              sizes="100vw"
            />
          </div>
          {/* Text Second on Mobile */}
          <div className="xl:col-span-5 col-span-12 xl:mx-0 order-2 xl:order-1 custom-container md:px-0">
            <h2 className="leading-tight mt-10 xl:mt-0 4xl:text-[60px] xl:text-[40px] text-[26px]">Discrete Manufacturing</h2>
            <h3 className="4xl:text-[36px] text-[22px] mt-5 font-semibold xl:pr-20 leading-tight">
              Managing Complex Products Made Simple
            </h3>
            <p className="mt-5 xl:mb-10 font-normal 4xl:pr-24 pr-5 leading-tight xl:pr-10 4xl:text-[20px] xl:text-[18px]">
              Rialtes helps discrete manufacturers handle complex product configurations, multi-tier supply chains, and custom engineering processes. Our solutions integrate end-to-end quoting, engineering, and order management, delivering real-time visibility and seamless customer collaboration. AI-powered insights help predict maintenance needs, reduce downtime, and ensure superior product quality.
            </p>
            <div className="xl:bottom-0">
              <LearnMore  onClick={handleScrollToContact}
  btnName="Talk to Us"/>
            </div>
          </div>
        </div>
      </section>
      {/* process manufacturing */}
      <section className="relative custom-container mt-20 max-md:px-0">
        <div></div>
        <div className="xl:block hidden">
          <Image
            src="/images/industry/manufacture/man-process.webp"
            alt="man-process image"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/industry/manufacture/process-mamobile.webp"
            alt="man-process image"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="relative text-white">
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="col-span-7"></div>
            <div className="xl:col-span-5 col-span-12 xl:pt-8 xl:px-16 xl:mt-0 p-8 xl:p-0 mt-[30rem]  xl:pb-16 xl:mx-0 bg-[#0098D1] opacity-[0.9]">
              <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">Process Manufacturing</h2>
              <h3 className="4xl:text-[36px] text-[22px] mt-5 font-semibold  leading-tight">
                Optimize Compliance and Yield
              </h3>
              <p className="mt-5 font-light  leading-tight xl:pr-0">We support process manufacturers in managing complex formulations, compliance demands (FDA, ISO, GMP), and volatile supply chains. Our solutions optimize batch production, yield management, and real-time quality tracking, ensuring consistent outputs and reduced waste. Rialtes also enables traceability and recalls management through integrated, AI-enabled systems.</p>
            </div>
          </div>
        </div>
      </section>
      {/* repetative manufacturing section */}
      <section>
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="col-span-7 order-1 xl:order-2">
            <Image
              src="/images/industry/manufacture/repe-desk.webp"
              alt="Repetitive image"
              priority
              className="w-full h-full"
              width={1200}
              height={650}
              sizes="100vw"
            />
          </div>
          <div className="col-span-5 bg-[#DDF74D] order-2 xl:order-1 pb-10 xl:pb-0">
            <div className="custom-container xl:!pr-0">
              <h2 className="leading-tight mt-10 4xl:text-[60px] xl:text-[40px] text-[26px]">Repetitive Manufacturing</h2>
              <h3 className="4xl:text-[36px] text-[22px] mt-5 font-semibold leading-tight">
                Streamlining Mass Production Operations
              </h3>
              <p className="mt-5 xl:mb-5 font-normal xl:pr-10 4xl:text-[20px] xl:text-[18px] text-[16px]">
                For high-volume production, Rialtes offers solutions that enhance capacity planning, workforce allocation, and real-time production monitoring. Our tools optimize repetitive workflows and reduce cycle times, ensuring maximum throughput with minimum waste. AI-driven analytics help detect production anomalies early, ensuring product quality and cost efficiency.
              </p>
              <div>
                <LearnMore  onClick={handleScrollToContact}
  btnName="Talk to Us"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* robotics section */}
      <section className="custom-container">
        <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-16 text-white">
          <div className="col-span-6">
            <Image
              src="/images/industry/manufacture/robotics.webp"
              alt="robotics image"
              priority
              className="w-full"
              width={1200}
              height={650}
              sizes="100vw"
            />
            <div className="bg-[#CA7D12] p-10">
              <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">AI & Robotic Manufacturing</h2>
              <h3 className="4xl:text-[42px] text-[22px] mt-5 font-semibold xl:pr-20 leading-tight">
                Creating Smart, Autonomous Factories
              </h3>
              <p className="mt-5 xl:mb-5 font-normal xl:pr-10 pr-5 leading-tight">
                AI and Robotics are reshaping manufacturing, and Rialtes helps clients lead this transformation. From AI-powered predictive maintenance to robotic automation of production lines, we enable factories to be self-learning and adaptive. Digital twins and real-time IoT insights power zero-defect manufacturing and higher productivity, reducing human errors and downtime.
              </p>
            </div>
          </div>
          <div className="col-span-6 xl:mt-32 mt-10">
            <Image
              src="/images/industry/manufacture/shop.webp"
              alt="shop image"
              priority
              className="w-full"
              width={1200}
              height={650}
              sizes="100vw"
            />
            <div className="bg-[#0963C4] p-10">
              <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">Job Shop Manufacturing</h2>
              <h3 className="4xl:text-[42px] text-[22px] mt-5 font-semibold xl:pr-20 leading-tight">
                Managing Custom Production with Precision
              </h3>
              <p className="mt-5 xl:mb-5 font-normal xl:pr-10 leading-tight">
                Rialtes brings robust solutions for engineer-to-order (ETO) and make-to-order (MTO) job shop environments. Our tailored platforms manage custom project costing, production planning, and supplier coordination, ensuring on-time, on-budget delivery of high-variety, low-volume orders. Real-time dashboards provide visibility into job status, materials, and profitability.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*data cloude section */}
      <section className="relative">
        <div className="xl:block hidden">
          <Image
            src="/images/industry/manufacture/data-clude.webp"
            alt="data cloud image"
            className="w-full relative"
            priority
            width={1200}
            height={650}
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/industry/manufacture/cloude-mobile.webp"
            alt="data cloud image"
            className="w-full relative h-[668px]"
            priority
            width={375}
            height={668}
            sizes="100vw"
          />
        </div>
        <div className="grid xl:grid-cols-12 grid-cols-1 absolute 4xl:top-[27rem] xl:top-[18rem] top-[32rem]">
          <div className="col-span-6"></div>
          <div className="col-span-4">
            <div className="bg-[#A1DAF6] p-10 text-black pb-20 mx-[35px] xl:mx-0">
              <h2 className="leading-tight pr-10 xl:pr-0 4xl:text-[60px] xl:text-[40px] text-[26px]">Data Cloud & Tableau</h2>
              <h3 className="mt-5 4xl:text-[42px] text-[22px] leading-tight font-semibold pr-4 xl:pr-0">Actionable Insights with Visual Analytics</h3>
              <p className="mt-8 leading-tight 4xl:text-[20px] xl:text-[15px]">With Data Cloud and Tableau, Rialtes helps manufacturers turn complex operational data into meaningful insights. From OEE tracking and downtime analysis to supply chain risks and customer demand forecasting, our dashboards provide real-time visibility for proactive decision-making. AI models further enhance predictive maintenance and inventory optimization.</p>
              <div className="absolute mt-5">
                <LearnMore  onClick={handleScrollToContact}
  btnName="Talk to Us"/>
              </div>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
      </section>
      {/* ERP integration section */}
      <section className="4xl:mt-48 2xl:mt-36 xl:mt-48 custom-container xl:mx-0 mt-[28rem] max-[320px]:mt-[50rem]  max-[360px]:mt-[40rem] max-[395px]:mt-[34rem]   xl:!pr-[142px]">
        <div className="grid xl:grid-cols-12 grid-cols-1 gap-5">
          <div className="xl:col-span-7 col-span-12 order-1 xl:order-2">
            <Image
              src="/images/industry/manufacture/erp2.webp"
              alt="erp image"
              priority
              className="w-full  object-cover h-full"
              width={1200}
              height={650}
              sizes="100vw"
            />
          </div>
          <div className="xl:col-span-5 col-span-12 order-2 xl:order-1">
            <h2 className="leading-tight xl:pr-0 pr-4 4xl:text-[60px] xl:text-[40px] mt-4 text-[26px]">ERP Integration with SAP & Oracle via MuleSoft</h2>
            <h3 className="mt-5 4xl:text-[42px] text-[22px] leading-tight font-semibold">End-to-End Visibility</h3>
            <p className="mt-8 pr-4 font-normal leading-tight">
              Rialtes ensures seamless integration between front-end systems and back-end ERPs like SAP and Oracle using MuleSoft. This allows manufacturers to orchestrate production planning, order management, procurement, and finance without silos. Real-time data flows enable accurate decision-making, lower costs, and streamlined supply chains.
            </p>
          </div>
        </div>
      </section>
      {/* demand planning section */}
      <section className="mt-16 custom-container xl:mx-0 xl:!pr-[130px]">
        <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-16">
          <div className="xl:col-span-5 col-span-12 order-2 xl:order-2">
            <h2 className="leading-tight mt-8 xl:mt-0 4xl:text-[60px] xl:text-[40px] text-[26px]">Demand Planning with Kinaxis RapidResponse</h2>
            <h3 className="mt-5 4xl:text-[42px] text-[22px] leading-tight font-semibold">Staying Ahead of the Curve</h3>
            <p className="mt-8 font-light leading-tight">
              Rialtes leverages Kinaxis RapidResponse to empower manufacturers with dynamic demand forecasting and scenario planning. Our solutions help manage volatile markets, supplier risks, and customer demands, enabling manufacturers to respond in real-time to disruptions. AI-driven demand sensing ensures optimal inventory and supply chain agility.
            </p>
          </div>
          <div className="xl:col-span-6 col-span-12 order-1 xl:order-1">
            <Image
              src="/images/industry/manufacture/demand.webp"
              alt="demand image"
              priority
              className="w-full h-full"
              width={1200}
              height={650}
              sizes="100vw"
            />
          </div>
        </div>
      </section>
      {/* ai manufacturing section */}
      <section className="custom-container mt-16 xl:!pr-0 max-md:px-0">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:hidden block">
            <Image
              src="/images/industry/manufacture/ai-mobile.webp"
              alt="ai manufacturing image"
              priority
              className="w-full h-[492px] "
              width={375}
              height={250}
              sizes="100vw"
            />
          </div>
          <div className="xl:col-span-4 col-span-12 bg-[#33A316] p-10 text-white xl:mt-10 mb-10 z-[9] mx-[35px] xl:mx-0 mt-[-115px]">
            <h2 className="leading-tight  xl:mt-0 4xl:text-[60px] xl:text-[40px] text-[26px]">AI in Manufacturing</h2>
            <h3 className="mt-5 4xl:text-[42px] text-[22px] leading-tight font-semibold ">Shaping a Smarter Future</h3>
            <p className="mt-8  font-light leading-tight ">
              AI is no longer the future — it’s shaping today’s manufacturing. Rialtes brings AI-powered solutions for predictive maintenance, intelligent scheduling, defect detection, and demand forecasting. AI helps manufacturers adapt faster, optimize resources, and deliver customized products efficiently, enhancing both profitability and customer satisfaction.
            </p>
            <div className="xl:mt-5 mt-[-10px]  absolute  xl:relative">
              <LearnMore  onClick={handleScrollToContact}
  btnName="Talk to Us"/>
            </div>
          </div>
          <div className="xl:col-span-8 col-span-12 xl:block hidden xl:ml-[-300px]">
            <Image
              src="/images/industry/manufacture/ai.webp"
              alt="ai image"
              priority
              className="w-full h-full"
              width={1200}
              height={650}
              sizes="100vw"
            />
          </div>
        </div>
      </section>
      {/* power section */}
      <section className="xl:mt-24 mt-16  xl:mx-0 custom-container">
        <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-16">
          <div className="xl:col-span-6 col-span-12">
            <div className="xl:block hidden h-full">
              <Image
                src="/images/industry/manufacture/power.webp"
                alt="power image"
                priority
                className="w-full h-full"
                width={1200}
                height={650}
                sizes="100vw"
              />
            </div>
            <div className="xl:hidden block">
              <Image
                src="/images/industry/manufacture/power-mobile.webp"
                alt="power image"
                priority
                className="w-full h-full"
                width={375}
                height={250}
                sizes="100vw"
              />
            </div>
          </div>
          <div className="xl:col-span-5 col-span-12">
            <h2 className="leading-tight mt-8 xl:mt-0 4xl:text-[60px] xl:text-[40px] text-[26px]">SAP & Salesforce</h2>
            <h3 className="mt-5 4xl:text-[42px] text-[22px] leading-tight font-semibold">The Power Duo for Intelligent Manufacturing</h3>
            <p className="mt-8 font-normal leading-tight pr-4">
              Rialtes partners with SAP and Salesforce to create connected, intelligent, and agile manufacturing ecosystems. SAP’s Digital Manufacturing Cloud and Salesforce Manufacturing Cloud together deliver 360-degree visibility from factory to customer. We enable manufacturers to integrate customer feedback, dealer management, and service workflows into a single intelligent platform.
            </p>
            <div className="mt-5">
              <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"}  onClick={handleScrollToContact}
  btnName="Talk to Us"/>
            </div>
          </div>
        </div>
      </section>
      {/* fast facts section */}
      <section className="mt-20 relative">
        <div className="xl:block hidden pb-20">
          <Image
            src="/images/industry/manufacture/fast.webp"
            alt="fast facts image"
            priority
            className="w-full"
            width={1200}
            height={650}
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/industry/manufacture/fact-mobile.webp"
            alt="fast facts image"
            priority
            className="w-full h-[1440px] md:h-[1024px]  "
            width={375}
            height={250}
            sizes="100vw"
          />
        </div>
        <div className="grid xl:grid-cols-12 grid-cols-1 absolute top-20 text-white mx-[35px] xl:mx-0 mt-64 xl:mt-0 custom-container">
          <div className="xl:col-span-7 md:col-span-1 col-span-12">
            <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px]">Fast Facts</h2>
            <h3 className="mt-5 4xl:text-[42px] text-[22px] xl:text-[30px] leading-tight">Manufacturing Industry Insights</h3>
            <div className="grid xl:grid-cols-12 grid-cols-12 md:grid-cols-2 mt-10 ">
              <div className="xl:col-span-6 md:col-span-1 col-span-12">
                <div>
                  <h2 className="text-[#068EDA] font-extrabold leading-tight text-[40px] 4xl:text-[60px]">70% </h2>
                  <h3 className="pr-10 leading-tight 4xl:text-[30px] xl:text-[18px] text-[20px]">of manufacturers are accelerating Industry 4.0 investments.</h3>
                </div>
                <div className="mt-16">
                  <h2 className="text-[#068EDA] font-extrabold leading-tight text-[40px] 4xl:text-[60px]">76% </h2>
                  <h3 className="pr-10 leading-tight 4xl:text-[30px] xl:text-[18px] text-[20px]">of companies struggle with real-time supply chain visibility.</h3>
                </div>
                <div className="mt-16">
                  <h3 className="leading-tight 4xl:text-[30px] xl:text-[18px] text-[20px]">Cloud-enabled manufacturing systems increase equipment effectiveness by </h3>
                  <h2 className="text-[#068EDA] font-extrabold leading-tight text-[40px] 4xl:text-[60px]">15%.</h2>
                </div>
                <div className="4xl:mt-[50px] 2xl:mt-[190px] xl:mt-[-15px] mt-[395px] max-[375px]:mt-[375px] md:mt-8 absolute  ">
                  <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"}  onClick={handleScrollToContact}
  btnName="Talk to Us"/>
                </div>
              </div>
              <div className="xl:col-span-6 md:col-span-1 col-span-12 xl:space-y-10  mt-10 xl-mt-0">
                <div>
                  <h3 className="pr-10 leading-tight font-medium 4xl:text-[30px] xl:text-[18px] text-[20px]" >AI adoption in manufacturing expected to surpass   </h3>
                  <h2 className="text-[#068EDA] font-extrabold leading-tight text-[40px] 4xl:text-[60px] xl:text-[40px]">$20 billion </h2>
                  <h3 className="leading-tight">by 2030.</h3>
                </div>
                <div className="mt-10 xl:mt-0">
                  <h3 className="pr-12 leading-tight 4xl:text-[30px] xl:text-[18px] text-[20px]">Smart factories can boost productivity by up to </h3>
                  <h2 className="text-[#068EDA] font-extrabold leading-tight text-[40px] 4xl:text-[60px]">30% </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <div className="mt-20 xl:mt-10 custom-container text-black xl:py-20 pb-10 scroll-mt-28"  ref={contactRef}>
        <ContactForm title={'Ready to Reimagine Your Manufacturing Future?'} subtitle={"Partner with Rialtes to transform your manufacturing operations with AI, SAP, Salesforce, and next-gen tools. "} subtitle1={"Contact Us Today and start your journey toward intelligent, resilient, and customer-centric manufacturing!"} className={"max-w-[62rem]  leading-tight xl:text-[60px] text-[26px]"} />
      </div>
    </div>
  );
}