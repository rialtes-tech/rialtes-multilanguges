"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import Script from "next/script";
import BreadCrumbs from "@/app/components/BreadCrumbs";
import ContactForm from "@/app/components/contactform";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
import LearnMoreButton from "@/app/components/learnMore";
import { useRef } from "react";
const schemaData = {
  "@context": "https://schema.org",

  "@type": "Product",

  name: "MediAIna",

  image: "https://www.rialtes.com/images/products/mediaina/desktop/logo-1.svg",

  description:
    "MediAIna is Rialtes' next-generation digital patient journey platform for life sciences and healthcare. Built on Salesforce and powered by LifeAI+, MediAIna unifies clinical, operational and digital touchpoints to accelerate therapy adoption, optimize trials, automate prior authorization, and deliver connected long-term care with intelligent automation and compliant integrations.",

  brand: {
    "@type": "Organization",

    name: "Rialtes",

    url: "https://www.rialtes.com",

    logo: "https://www.rialtes.com/images/homepage/logo.svg",
  },

  url: "https://www.rialtes.com/products/mediaina-reimagining-patient-journeys/",

  category: "Patient Journey Platform",

  isRelatedTo: {
    "@type": "SoftwareApplication",

    applicationCategory: "MedicalApplication",

    operatingSystem: "Cloud",
  },

  mainEntityOfPage: {
    "@type": "WebPage",

    "@id":
      " https://www.rialtes.com/products/mediaina-reimagining-patient-journeys/",
  },

  additionalProperty: [
    {
      "@type": "PropertyValue",

      name: "Patient Identification",

      value:
        "AI-driven segmentation and candidate detection using clinical, claims, and wearable data for trial & therapy eligibility.",
    },

    {
      "@type": "PropertyValue",

      name: "Candidate Education",

      value:
        "Multilingual interactive education journeys, adaptive learning, and integrated chat support to improve adherence.",
    },

    {
      "@type": "PropertyValue",

      name: "Digital Prior Authorization (PA)",

      value:
        "End-to-end PA automation with real-time payer integrations, preconfigured rules, routing, and tracking dashboards.",
    },

    {
      "@type": "PropertyValue",

      name: "Clinical Trial Management",

      value:
        "360° patient view for trials with eligibility verification, digital diaries, adverse event capture, and retention workflows.",
    },

    {
      "@type": "PropertyValue",

      name: "Long-Term Care Management",

      value:
        "Personalized care pathways, remote monitoring, real-time risk alerts, and multi-provider collaboration tools.",
    },

    {
      "@type": "PropertyValue",

      name: "Body MAP App",

      value:
        "Visual-first 3D body mapping for pain tracking and longitudinal therapy progress monitoring.",
    },

    {
      "@type": "PropertyValue",

      name: "Conversational Insights (Agentforce)",

      value:
        "Natural language queries across MediAIna data with role-based, HIPAA-compliant guardrails for instant insights.",
    },

    {
      "@type": "PropertyValue",

      name: "AgentChat",

      value:
        "Secure omnichannel patient and staff chat with AI + live agent handoffs integrated into care workflows.",
    },

    {
      "@type": "PropertyValue",

      name: "Salesforce Data Cloud",

      value:
        "Harmonized patient, trial, provider and payer data with predictive models and cohort analytics.",
    },

    {
      "@type": "PropertyValue",

      name: "Integrations",

      value:
        "API-led connectivity with MuleSoft and connectors for Athenahealth, Epic, Cerner, SAP, and other EHR/ERP systems (FHIR/HL7).",
    },

    {
      "@type": "PropertyValue",

      name: "Order & Inventory",

      value:
        "Device and supply traceability with ERP (SAP) integration for procurement, fulfillment and billing workflows.",
    },

    {
      "@type": "PropertyValue",

      name: "Security & Compliance",

      value:
        "Designed for HIPAA, GDPR; Rialtes maintains SOC 2 Type II controls and supports FedRAMP-ready deployments.",
    },

    {
      "@type": "PropertyValue",

      name: "Audience",

      value:
        "Providers, Payers, CROs, MedTech, Pharmaceutical and Life Sciences enterprises.",
    },
  ],

  manufacturer: {
    "@type": "Organization",

    name: "Rialtes",

    url: "https://www.rialtes.com",
  },

  keywords:
    "patient journey platform, healthcare CRM, patient experience management, patient relationship management, clinical trials, prior authorization, claims authorization, ePA, remote monitoring, healthcare AI",
};

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
        title="MediAIna - Redefining Patient Journey Mapping in Healthcare"
        description="MediAIna puts patients at the center by mapping every care moment with Salesforce Cloud and Rialtes' LifeAI+ to enable truly connected, human-first healthcare."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/products/mediaina-reimagining-patient-journeys"
      />
      <Script
        id="schema-grow"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* breadcrumb schema */}
      <BreadcrumbSchema currPage="MediAIna" />
      {/* hero section */}
      <section className="relative group overflow-hidden pb-20 md:pb-48 xl:pb-20 4xl:pb-20">
        <div className="xl:block hidden">
          <Image
            src="/images/products/mediaina/mediaina-banner.webp"
            alt="grow with sap banner"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/products/mediaina/mediaina-mobile-banner.webp"
            alt="grow with sap banner"
            fill
            priority
          />
        </div>
        <div className="relative custom-container 4xl:pb-20">
          <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 mt-20 mx-auto">
            <div className="xl:col-span-7 col-span-12 pr-5 4xl:pr-[6rem]">
              <h1 className="text-white  leading-tight break-words 4xl:text-[60px] md:text-[32px]  xl:text-[40px] 2xl:text-[48px] 4xl:pr-0 md:pr-40 pr-10">
                <span className="text-white text-[20px] xl:text-[24px] font-bold mb-2 break-words">
                  MediAIna
                </span>{" "}
                <br></br>
                <div className="pt-5">
                  Redefining the<br></br> Digital Patient Journey for the Life
                  Sciences Industry
                </div>
              </h1>
            </div>
            <div className="xl:col-span-6 col-span-12"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="custom-container">
          {/* breadcrumb */}
          <BreadCrumbs currPage="MediAIna" />

          <div className="xl:pt-10">
            <div className="xl:grid xl:grid-cols-12 grid-cols-1 xl:mt-10  xl:gap-16 4xl:gap-10  flex flex-col-reverse">
              <div className="xl:col-span-8 col-span-12">
                <p className="leading-tight font-normal 4xl:pr-20 md:text-[18px] 4xl:text-[20px] text-[16px]">
                  MediAIna is Rialtes’ next-generation patient journey software
                  designed to transform the healthcare patient journey. It
                  integrates clinical, operational, and digital touchpoints
                  across providers, payers, MedTech, and life sciences
                  enterprises.
                </p>
                <p className="mt-5 font-normal 4xl:pr-32 md:text-[18px] 4xl:text-[20px] text-[16px]">
                  Backed by LifeAI+, Rialtes’ specialized healthcare consulting
                  suite, MediAIna offers intelligent, scalable, and compliant
                  solutions that accelerate innovation, improve outcomes, and
                  deliver human-centered healthcare at scale.
                </p>
              </div>
              <div className="xl:col-span-4 col-span-12">
                <Image
                  src="/images/products/mediaina/desktop/logo-1.svg"
                  alt="Empower your enterprise with Rialtes"
                  priority
                  className="xl:w-[500px]  xl:h-[233] h-[150px] w-[225px] md:h-[200px] md:w-[300px] xl:mt-[-20px]"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="custom-container mx-auto grid  4xl:grid-cols-[620px,991px] xl:mt-[-85px] 2xl:mt-[-100px] xl:grid-cols-[465px,710px]  grid-cols-1  gap-0 items-center 4xl:pr-0 2xl:pr-0 xl:pr-0  4xl:mt-0 mt-10">
          {/* Left Side - Text Card */}
          <div className="bg-[#05ACA6] text-white p-12 z-10  relative order-2 xl:order-1 2xl:mt-[60px] 4xl:mt-0 xl:mt-[80px]">
            <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[40px] leading-tight  md:text-[32px]">
              Rialtes LifeAI+
            </h2>
            <h3 className="4xl:text-[36px] xl:text-[30px] font-semibold mt-4 leading-tight">
              Our Vision for Life Sciences
            </h3>
            <p className="mt-6 md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight font-light">
              As a consulting leader in digital transformation, Rialtes believes
              the future of healthcare is built on connected ecosystems,
              predictive insights, and intelligent automation. With LifeAI+, our
              dedicated consulting services for life sciences, we help
              organizations:
            </p>

            <div className="mt-10 space-y-4 pb-20">
              <p className="font-bold md:text-[18px] 4xl:text-[20px] text-[16px]">
                Benefits
              </p>
              <ul className="list-disc pl-6 space-y-8 md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight 4xl:pr-8">
                <li>
                  Accelerate product-to-market timelines with agile delivery
                  models.
                </li>
                <li>
                  Enable smarter clinical trials, connected care, and digital
                  therapeutics.
                </li>
                <li>
                  Leverage Salesforce, AI, and cloud platforms for compliant
                  innovation.
                </li>
              </ul>
            </div>

            <Link href="https://www.rialtes.com/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting">
              <button className="bg-[#073259] md:text-[16px] 4xl:text-[20px] text-[16px] hover:bg-[#ffffff] bottom-0 absolute hover:text-[#134874] border-[solid] border-[#134874] 4xl:font-semibold font-normal text-white py-3 px-8 transition duration-300">
                Know More
              </button>
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="w-full h-full relative  order-1 xl:order-2">
            <div className="xl:block hidden 4xl:ml-[-200px] 4xl:mt-[9rem] 2xl:ml-[-100px] xl:mt-[12rem] xl:ml-[-100px] 2xl:mt-[12rem]">
              <Image
                src="/images/products/mediaina/desktop/lifeai.webp"
                alt="LifeAI Illustration"
                className="object-cover w-full h-full 4xl:h-[814px] 2xl:h-[800px] xl:h-[815px]"
                priority
                width={1200}
                height={630}
              />
            </div>
            <div className="xl:hidden block">
              <Image
                src="/images/products/mediaina/mobile/lifeai.webp"
                alt="LifeAI Illustration"
                className="object-cover w-full h-full"
                priority
                width={375}
                height={250}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container 4xl:px-0 2xl:pr-[60px] xl:pr-[60px] xl:pl-0  mt-10 max-md:px-0 max-md:mt-24">
        <div className="grid xl:grid-cols-12">
          <div className="xl:col-span-8 bg-[#CCF7F5] pt-10 4xl:pl-[280px] xl:pl-[75px] 2xl:pl-[135px] order-2 xl:order-1 max-md:px-[35px] md:px-10 max-md:mt-[-200px]">
            <h2 className="leading-tight max-md:pt-[13rem] 4xl:text-[60px] 2xl:text-[48px] xl:text-[40px]  md:text-[32px]">
              Patient Identification
            </h2>
            <p className="mt-5 4xl:pr-[26rem] 2xl:pr-[20rem] xl:pr-[12rem] font-light md:text-[18px] 4xl:text-[20px] text-[16px]">
              Leverage AI to detect, segment, and activate the right candidates
              for therapies, care plans, and trials.
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-16 gap-5  mb-6 mt-10 4xl:pr-[8rem] xl:pr-[8rem] 2xl:pr-[9rem]">
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Benefits
                </h3>
                <ul className="list-disc pl-5 space-y-5 xl:space-y-2 4xl:space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>
                    Predictive models trained on clinical, claims, and wearable
                    data.
                  </li>
                  <li>
                    {" "}
                    Smart filters for rare diseases, chronic care, and trial
                    eligibility.
                  </li>
                  <li> Integration with EHRs and lab data sources.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Outcomes
                </h3>
                <ul className="list-disc pl-5 xl:space-y-2 4xl:space-y-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>Higher patient precision and faster enrollments.</li>
                  <li> Reduced outreach cost and better ROI.</li>
                  <li> Improved access to targeted care and therapies.</li>
                </ul>
              </div>
            </div>
            <div className="xl:flex grid flex-wrap gap-4 xl:gap-8 mt-10 xl:mt-16">
              <LearnMoreButton
                bgcolor="#073259"
                onClick={handleScrollToContact}
                btnName="Talk to Us"
              />
            </div>
          </div>
          <div className="xl:col-span-4 4xl:mr-[142px] order-1 xl:order-2 max-md:px-[34px]">
            <div className="xl:block hidden pt-20 4xl:ml-[-150px] 4xl:h-[300px] xl:h-[500px] 2xl:ml-[-150px] xl:ml-[-150px]">
              <Image
                src="/images/products/mediaina/desktop/patient-desktop.webp"
                alt="enabling-dynamic-img-mobile"
                className="4xl:h-[551px] xl:h-[550px] 2xl:h-[500px] 4xl:w-[600px] w-full object-cover"
                width={1200}
                height={630}
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                src="/images/products/mediaina/mobile/paitient-mobile.webp"
                alt="enabling-dynamic-img-mobile"
                className="h-auto w-full max-w-full object-cover relative"
                width={375}
                height={250}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container 4xl:px-0 mt-5 max-md:px-0 max-md:mt-20 xl:px-0 xl:mt-32">
        <div className="grid xl:grid-cols-12">
          <div className="xl:col-span-4 4xl:ml-[143px]">
            <div className="xl:block hidden pt-10 4xl:mr-[-200px] xl:mr-[-100px] xl:mt-[-100px] 2xl:pl-[60px] xl:pl-0 4xl:pl-0">
              <Image
                src="/images/products/mediaina/desktop/candidate.webp"
                alt="enabling-dynamic-img-mobile"
                className="4xl:h-[615px] 4xl:w-[600px] 2xl:h-[550px] w-full object-cover relative"
                width={1200}
                height={630}
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                src="/images/products/mediaina/mobile/candidate.webp"
                alt="enabling-dynamic-img-mobile"
                className="h-auto w-full max-w-full object-cover max-md:px-[35px] relative"
                width={375}
                height={250}
                priority
              />
            </div>
          </div>
          <div className="xl:col-span-8 bg-[#C6E7FF] pt-10 4xl:pl-[200px] xl:pl-[180px] xl:pr-[100px] 2xl:pr-[200px]  max-md:px-[35px] max-md:mt-[-200px] md:px-10">
            <h2 className="leading-tight max-md:pt-[13rem] text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px] ">
              Candidate Education
            </h2>
            <p className="mt-5 md:text-[18px] 4xl:text-[20px] text-[16px] font-light">
              Transforming candidates into informed partners with personalized
              digital education, a crucial step in optimizing the patient
              engagement journey for successful therapy adoption.
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-16 gap-5 mb-6 mt-10  4xl:pr-[4rem]">
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Benefits
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>
                    Multilingual, interactive content for devices and therapies.
                  </li>
                  <li>
                    Adaptive learning based on candidate behavior and feedback.
                  </li>
                  <li>Integrated care education journeys with chat support.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Outcomes
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>Increased therapy compliance and satisfaction.</li>
                  <li>Reduced device misuse and support calls.</li>
                  <li>Higher candidate engagement with digital tools.</li>
                </ul>
              </div>
            </div>
            <div className="xl:flex grid flex-wrap gap-4 xl:gap-8 mt-10 xl:mt-16">
              <LearnMoreButton
                bgcolor="#073259"
                onClick={handleScrollToContact}
                btnName="Talk to Us"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container 4xl:px-0 mt-20 max-md:px-0 xl:px-0">
        <div className="grid xl:grid-cols-12">
          <div className="xl:col-span-8 bg-[#EDEDED] pt-10 4xl:pl-[280px] xl:pl-[75px] 2xl:pl-[140px] order-2 xl:order-1 max-md:px-[35px] max-md:mt-[-200px] md:px-10">
            <h2 className="leading-tight 4xl:pr-[11rem] 2xl:pr-[14rem] xl:pr-[15rem] max-md:pt-[13rem] text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px]">
              Digital Prior Authorization (PA)
            </h2>
            <p className="mt-5 md:text-[18px] 4xl:text-[20px] text-[16px] xl:pr-20 4xl:pr-32 2xl:pr-32 font-light">
              Automate complex prior authorization workflows and reduce
              treatment delays—an essential part of seamless patient journey in
              healthcare delivery.
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-10 mb-6 mt-10 4xl:pr-[8rem] xl:pr-[10rem]">
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Benefits
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>
                    End-to-end PA workflow automation with real-time payer
                    integration.
                  </li>
                  <li>
                    {" "}
                    Preconfigured rules for top payers and regulatory standards.
                  </li>
                  <li> Case routing, escalation, and tracking dashboards.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Outcomes
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>40–60% reduction in processing time. </li>
                  <li>Reduced manual errors and rework.</li>
                  <li>
                    {" "}
                    Faster time-to-care with lower administrative overhead.
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:flex grid flex-wrap gap-4 xl:gap-8 mt-10 xl:mt-16">
              <LearnMoreButton
                bgcolor="#073259"
                onClick={handleScrollToContact}
                btnName="Talk to Us"
              />
            </div>
          </div>
          <div className="xl:col-span-4 4xl:mr-[142px] order-1 xl:order-2">
            <div className="xl:block hidden pt-20 4xl:ml-[-150px] xl:ml-[-100px] 4xl:h-[300px] 2xl:h-[200px] xl:h-[300px] 2xl:pr-[60px] xl:pr-0 4xl:pr-0">
              <Image
                src="/images/products/mediaina/desktop/digital.webp"
                alt="enabling-dynamic-img-mobile"
                className="4xl:h-[651px] 2xl:h-[590px] xl:h-[600px] w-full object-cover"
                width={1200}
                height={630}
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                src="/images/products/mediaina/mobile/digital.webp"
                alt="enabling-dynamic-img-mobile"
                className="h-auto w-full max-w-full object-cover relative max-md:px-[35px]"
                width={375}
                height={250}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container 4xl:px-0 mt-5 max-md:mt-20 max-md:px-0 xl:px-0 xl:mt-32 relative">
        <div className="grid xl:grid-cols-12">
          <div className="xl:col-span-3 4xl:ml-[143px]">
            <div className="xl:block hidden pt-10 4xl:mr-[-200px] xl:mr-[-100px] 2xl:mr-[-100px] xl:mt-[-100px] 2xl:pl-[60px] 4xl:pl-0 xl:pl-0">
              <Image
                src="/images/products/mediaina/desktop/clinical.webp"
                alt="enabling-dynamic-img-mobile"
                className="4xl:h-[580px] xl:h-[600px] 2xl:h-[500px] w-full object-cover relative"
                width={1200}
                height={630}
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                src="/images/products/mediaina/mobile/clinical.webp"
                alt="enabling-dynamic-img-mobile"
                className="h-auto w-full max-w-full object-cover relative max-md:px-[35px]"
                width={375}
                height={250}
                priority
              />
            </div>
          </div>
          <div className="xl:col-span-9 bg-[#CCF7F5] 2xl:h-[575px] 4xl:h-[615px] xl:h-[590px] pt-10 4xl:pl-[280px] xl:pl-[200px] 2xl:pl-[170px] max-md:px-[35px] max-md:mt-[-200px] md:px-10">
            <h2 className="leading-tight 4xl:pr-[5rem] max-md:pt-[13rem] text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px]">
              Clinical Trial Management with 360° Patient View
            </h2>
            <p className="mt-5 md:text-[18px] 4xl:text-[20px] text-[16px] font-light">
              Centralize trial operations with unified patient intelligence.
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-16 gap-5 mb-6 mt-10  4xl:pr-[4rem] xl:pr-20">
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Benefits
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>
                    Real-time patient profiles from EHR, labs, and wearables.
                  </li>
                  <li>
                    {" "}
                    Eligibility verification, onboarding, and compliance
                    tracking.
                  </li>
                  <li>
                    {" "}
                    Integrated digital diaries and adverse event capture.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Outcomes
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>
                    Better trial outcomes through continuous patient
                    engagement.{" "}
                  </li>
                  <li>Enhanced trial efficiency and reduced dropouts.</li>
                  <li>Actionable insights for sponsors and CROs.</li>
                </ul>
              </div>
            </div>
            <div className="xl:flex grid flex-wrap gap-4 xl:gap-8 mt-10 xl:mt-16  xl:absolute bottom-0">
              <LearnMoreButton
                bgcolor="#073259"
                onClick={handleScrollToContact}
                btnName="Talk to Us"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container 4xl:px-0 mt-20 max-md:px-0 xl:px-0">
        <div className="grid xl:grid-cols-12 relative">
          <div className="xl:col-span-8 4xl:h-[674px] 2xl:h-[600px] xl:h-[600px] bg-[#C6E7FF] pt-16 4xl:pl-[280px] 2xl:pl-[150px] xl:pl-[75px] order-2 xl:order-1 max-md:mt-[-200px] max-md:px-[35px] md:px-10">
            <h2 className="leading-tight max-md:pt-[13rem] 4xl:text-[52px] 2xl:text-[48px] xl:text-[42px]  md:text-[32px]">
              Long-Term Care Management
            </h2>
            <p className="mt-5 md:text-[18px] 4xl:text-[20px] text-[16px] xl:pr-20 4xl:pr-40 font-light">
              Extend care beyond the clinic with automated, connected long-term
              care—empowering ongoing patient journey management and improving
              health outcomes.
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-10 mb-6 mt-10 xl:mt-16 4xl:pr-[10rem] xl:pr-[10rem]">
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Benefits
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>Personalized care pathways and remote monitoring. </li>
                  <li>
                    {" "}
                    Real-time alerts for risk scores and care deviations.
                  </li>
                  <li> Multi-provider collaboration tools and mobile access</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Outcomes
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>Improved health outcomes and patient retention. </li>
                  <li>Reduced readmissions and avoidable ER visits.</li>
                  <li> End-to-end visibility across the care continuum.</li>
                </ul>
              </div>
            </div>
            <div className="xl:flex grid flex-wrap gap-4 xl:gap-8 mt-10 xl:mt-16 xl:absolute bottom-0">
              <LearnMoreButton
                bgcolor="#073259"
                onClick={handleScrollToContact}
                btnName="Talk to Us"
              />
            </div>
          </div>
          <div className="xl:col-span-4 4xl:mr-[142px] order-1 xl:order-2">
            <div className="xl:block hidden pt-[6rem] 4xl:ml-[-130px] 4xl:h-[300px] xl:ml-[-100px] xl:h-[545px] 2xl:h-[500px]">
              <Image
                src="/images/products/mediaina/desktop/long.webp"
                alt="enabling-dynamic-img-mobile"
                className="4xl:h-[630px] w-full object-cover 2xl:h-[550px]"
                width={1200}
                height={630}
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                src="/images/products/mediaina/mobile/long.webp"
                alt="enabling-dynamic-img-mobile"
                className="h-auto w-full max-w-full object-cover relative max-md:px-[35px]"
                width={375}
                height={250}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container 4xl:px-0 mt-10 max-md:px-0 max-md:mt-20 xl:px-0 relative">
        <div className="grid xl:grid-cols-12">
          <div className="xl:col-span-3 4xl:ml-[143px]">
            <div className="xl:block hidden pt-10 4xl:mr-[-200px] xl:mr-[-100px]">
              <Image
                src="/images/products/mediaina/desktop/body.webp"
                alt="enabling-dynamic-img-mobile"
                className="4xl:h-[580px] w-full object-cover relative"
                width={1200}
                height={630}
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                src="/images/products/mediaina/mobile/body.webp"
                alt="enabling-dynamic-img-mobile"
                className="h-auto w-full max-w-full object-cover relative max-md:px-[35px]"
                width={375}
                height={250}
                priority
              />
            </div>
          </div>
          <div className="xl:col-span-9 bg-[#EDEDED] 4xl:h-[650px] xl:h-[600px] 2xl:h-[600px] pt-16 4xl:px-[280px] xl:px-[150px] xl:mt-24 4xl:mt-24 max-md:mt-[-200px] max-md:px-[35px] md:px-10">
            <h2 className="leading-tight 4xl:pr-32 2xl:pr-0 max-md:pt-[13rem] text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px] ">
              Body MAP App – Track Pain & Progress Visually
            </h2>
            <p className="mt-5 font-light md:text-[18px] 4xl:text-[20px] text-[16px]">
              A visual-first approach to understanding the patient’s symptoms
              and responses.
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-16 gap-5 mb-6 mt-10  4xl:pr-[4rem] xl:pr-0">
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Benefits
                </h3>
                <ul className="list-disc pl-5 space-y-5  text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>
                    10+ pain parameters visualized in one intuitive
                    interface.{" "}
                  </li>
                  <li>
                    {" "}
                    Interactive 3D body mapping for patients and
                    clinicians.{" "}
                  </li>
                  <li> Longitudinal tracking of pain vs. therapy progress.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Outcomes
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>Accelerated diagnostics and therapy adjustments. </li>
                  <li>Enhanced patient-provider communication.</li>
                  <li>Objective outcome measurement for chronic care.</li>
                </ul>
              </div>
            </div>
            <div className="xl:flex grid flex-wrap gap-4 xl:gap-8 mt-10 xl:mt-16 xl:absolute bottom-0">
              <LearnMoreButton
                bgcolor="#073259"
                onClick={handleScrollToContact}
                btnName="Talk to Us"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="custom-container 4xl:px-0 mt-20 max-md:px-0 xl:px-0">
        <div className="grid xl:grid-cols-12">
          <div className="xl:col-span-8 bg-[#CCF7F5] pt-10 4xl:pl-[280px] xl:pl-[75px] 2xl:pl-[135px] order-2 xl:order-1 max-md:mt-[-200px] max-md:px-[35px] md:px-10">
            <h2 className="leading-tight 4xl:pr-32 max-md:pt-[13rem] text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px] ">
              Conversational Insights with Agentforce
            </h2>
            <p className="mt-5 md:text-[18px] 4xl:text-[20px] text-[16px] font-light">
              Ask questions. Get instant answers. Act faster—powered by
              Agentforce.
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-16 gap-5 mb-6 mt-10 xl:mt-16 4xl:pr-[11rem] xl:pr-[10rem] 2xl:pr-[5rem]">
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Benefits
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>Natural language queries across all MediAIna data.</li>
                  <li>
                    {" "}
                    Automated insights on care gaps, patient status, and trial
                    KPIs.
                  </li>
                  <li> Role-based access with HIPAA-compliant guardrails.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Outcomes
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>Time savings for care teams and researchers. </li>
                  <li>Data democratization across departments.</li>
                  <li> Empowered, insight-driven decision-making. </li>
                </ul>
              </div>
            </div>
            <div className="xl:flex grid flex-wrap gap-4 xl:gap-8 mt-10 xl:mt-16">
              <LearnMoreButton
                bgcolor="#073259"
                onClick={handleScrollToContact}
                btnName="Talk to Us"
              />
            </div>
          </div>
          <div className="xl:col-span-4 4xl:mr-[142px] order-1 xl:order-2">
            <div className="xl:block hidden pt-20 4xl:ml-[-150px] xl:ml-[-100px] 2xl:ml-[-100px] 4xl:h-[300px] xl:h-[500px] 2xl:h-[600px]">
              <Image
                src="/images/products/mediaina/desktop/conversational.webp"
                alt="enabling-dynamic-img-mobile"
                className="4xl:h-[650px] 2xl:h-[600px] w-full object-cover"
                width={1200}
                height={630}
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                src="/images/products/mediaina/mobile/conver.webp"
                alt="enabling-dynamic-img-mobile"
                className="h-auto w-full max-w-full object-cover relative max-md:px-[35px]"
                width={375}
                height={250}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container 4xl:px-0 mt-10 max-md:mt-20 max-md:px-0 xl:px-0 relative">
        <div className="grid xl:grid-cols-12">
          <div className="xl:col-span-3 4xl:ml-[143px]">
            <div className="xl:block hidden pt-10 4xl:mr-[-200px] xl:mr-[-100px] 2xl:mr-[-100px]">
              <Image
                src="/images/products/mediaina/desktop/unified.webp"
                alt="enabling-dynamic-img-mobile"
                className="4xl:h-[650px]  w-full object-cover relative"
                width={1200}
                height={630}
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                src="/images/products/mediaina/mobile/unified.webp"
                alt="enabling-dynamic-img-mobile"
                className="h-auto w-full max-w-full object-cover relative max-md:px-[35px]"
                width={375}
                height={250}
                priority
              />
            </div>
          </div>
          <div className="xl:col-span-9 bg-[#C6E7FF] 4xl:h-[660px] 2xl:h-[600px] xl:h-[600px] pt-10 4xl:px-[280px] xl:mt-20 xl:pl-[180px] 2xl:pr-[200px] 4xl:mt-24 max-md:mt-[-200px] max-md:px-[35px] md:px-10 2xl:mt-32">
            <h2 className="leading-tight max-md:pt-[13rem] text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px] ">
              Unified Intelligence with Salesforce Data Cloud
            </h2>
            <p className="mt-5 font-light md:text-[18px] 4xl:text-[20px] text-[16px]">
              Bring every interaction, record, and insight into one powerful
              data platform.
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-16 gap-5 mb-6 mt-10  4xl:pr-[4rem]">
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Benefits
                </h3>
                <ul className="list-disc pl-5 4xl:space-y-8 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>
                    Harmonized data across providers, payers, trials, and
                    patients.
                  </li>
                  <li>
                    {" "}
                    Predictive models for risk scoring, engagement, and resource
                    planning.
                  </li>
                  <li>Real-time dashboards and cohort analytics.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Outcomes
                </h3>
                <ul className="list-disc pl-5 space-y-5 4xl:space-y-8 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>Smarter, personalized healthcare delivery. </li>
                  <li>Holistic decision-making for patient outcomes. </li>
                  <li>Improved population health management.</li>
                </ul>
              </div>
            </div>
            <div className="xl:flex grid flex-wrap gap-4 xl:gap-8 mt-10 xl:mt-16 xl:absolute bottom-0">
              <LearnMoreButton
                bgcolor="#073259"
                onClick={handleScrollToContact}
                btnName="Talk to Us"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container 4xl:px-0 mt-20 max-md:px-0 max-md:mt-20 xl:px-0 relative">
        <div className="grid xl:grid-cols-12">
          <div className="xl:col-span-8 4xl:h-[698px] 2xl:h-[570px] xl:h-[600px]  bg-[#EDEDED] pt-10 4xl:pl-[280px] xl:pl-[75px] 2xl:pl-[135px] order-2 xl:order-1 max-md:mt-[-200px] max-md:px-[35px] md:px-10">
            <h2 className="leading-tight xl:pr-10 4xl:pr-[10rem] max-md:pt-[13rem] text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px] ">
              Seamless Integration with MuleSoft + Athenahealth
            </h2>
            <p className="mt-5 md:text-[18px] 4xl:text-[20px] text-[16px] font-light">
              Enable a truly connected care ecosystem with secure, scalable
              integrations.
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-16 gap-5 mb-6 mt-10 xl:mt-16 4xl:pr-[11rem] xl:pr-[8rem]">
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Benefits
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>
                    API-led connectivity with Athenahealth, Epic, Cerner, and
                    SAP.{" "}
                  </li>
                  <li>
                    {" "}
                    Bi-directional data flow across EHR, CRM, and ERP systems.
                  </li>
                  <li> FHIR and HL7 standard compliance.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Outcomes
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>Unified patient records and device tracking.</li>
                  <li>Reduced duplication and data silos.</li>
                  <li>
                    {" "}
                    Faster implementation and interoperability at scale.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:flex grid flex-wrap gap-4 xl:gap-8 mt-10 xl:mt-16 xl:absolute bottom-0">
              <LearnMoreButton
                bgcolor="#073259"
                onClick={handleScrollToContact}
                btnName="Talk to Us"
              />
            </div>
          </div>
          <div className="xl:col-span-4 4xl:mr-[142px] order-1 xl:order-2">
            <div className="xl:block hidden pt-20 4xl:ml-[-150px] xl:ml-[-100px] 4xl:h-[300px] xl:h-[500px]">
              <Image
                src="/images/products/mediaina/desktop/seamless.webp"
                alt="enabling-dynamic-img-mobile"
                className="4xl:h-[680px] 2xl:h-[550px] w-full object-cover"
                width={1200}
                height={630}
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                src="/images/products/mediaina/mobile/seamless.webp"
                alt="enabling-dynamic-img-mobile"
                className="h-auto w-full max-w-full object-cover relative max-md:px-[35px]"
                width={375}
                height={250}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container 4xl:px-0 mt-10 max-md:px-0 max-md:mt-20 xl:px-0 relative">
        <div className="grid xl:grid-cols-12">
          <div className="xl:col-span-3 4xl:ml-[143px]">
            <div className="xl:block hidden pt-10 4xl:mr-[-200px] xl:mr-[-100px] 2xl:h-[600px]">
              <Image
                src="/images/products/mediaina/desktop/real.webp"
                alt="enabling-dynamic-img-mobile"
                className="4xl:h-[650px] w-full object-cover relative"
                width={1200}
                height={630}
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                src="/images/products/mediaina/mobile/real.webp"
                alt="enabling-dynamic-img-mobile"
                className="h-auto w-full max-w-full object-cover relative max-md:px-[35px]"
                width={375}
                height={250}
                priority
              />
            </div>
          </div>
          <div className="xl:col-span-9 4xl:h-[660px] 2xl:h-[600px] xl:h-[600px] bg-[#CCF7F5] pt-10 4xl:pl-[280px] xl:mt-20 2xl:mt-24 4xl:pr-[200px] xl:px-[150px] 4xl:mt-24 max-md:px-[35px] max-md:mt-[-200px] md:px-10">
            <h2 className="leading-tight max-md:pt-[13rem] 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[32px]">
              Real-Time Patient Engagement with AgentChat
            </h2>
            <p className="mt-5 font-light md:text-[18px] 4xl:text-[20px] text-[16px]">
              Drive proactive communication across the patient care journey with
              intelligent chat.
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-16 gap-5 mb-6 mt-10  4xl:pr-[4rem]">
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Benefits
                </h3>
                <ul className="list-disc pl-5 space-y-5 4xl:space-y-8 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>
                    Secure, HIPAA-compliant omnichannel chat for patients and
                    staff.{" "}
                  </li>
                  <li>
                    {" "}
                    AI and live agent handoffs for smarter conversations.
                  </li>
                  <li>Integrated with PA, education, and care workflows.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Outcomes
                </h3>
                <ul className="list-disc pl-5 space-y-5 4xl:space-y-8 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>
                    Higher satisfaction, better adherence, faster
                    resolutions.{" "}
                  </li>
                  <li>
                    {" "}
                    Reduced call volume and improved service metrics. <li></li>
                    Consistent experience across every touchpoint.
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:flex grid flex-wrap gap-4 xl:gap-8 mt-10 xl:mt-16 xl:absolute bottom-0">
              <Link href="https://www.rialtes.com/products/agentchat">
                <button className="bg-[#073259] 4xl:text-[20px] text-[16px] xl:text-[16px] hover:bg-[#ffffff] hover:text-[#134874] border-[solid] border-[#134874] 4xl:font-semibold font-normal text-white py-3 px-8 transition duration-300">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container 4xl:px-0 mt-20 max-md:px-0 max-md:mt-20 xl:px-0">
        <div className="grid xl:grid-cols-12">
          <div className="xl:col-span-8 bg-[#C6E7FF] pt-10 4xl:pl-[280px] xl:pl-[75px] 2xl:pl-[135px] order-2 xl:order-1 max-md:mt-[-200px] max-md:px-[35px] md:px-10">
            <h2 className="leading-tight 4xl:pr-[11rem] max-md:pt-[13rem] text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px] ">
              Order & Inventory Management Integration with ERP (SAP)
            </h2>
            <p className="mt-5 4xl:pr-[28rem] font-light md:text-[18px] 4xl:text-[20px] text-[16px]">
              Bridge clinical care with operational excellence.
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-16 gap-5 mb-6 mt-10 xl:mt-16 4xl:pr-[11rem] xl:pr-[5rem]">
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Benefits
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>
                    Real-time inventory visibility across warehouses and
                    hospitals.
                  </li>
                  <li>
                    Integration with SAP for procurement, fulfillment, and
                    billing.
                  </li>
                  <li>
                    Automated alerts for replenishment and stock
                    optimization.{" "}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Outcomes
                </h3>
                <ul className="list-disc pl-5 space-y-5 text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>360° product traceability from order to delivery.</li>
                  <li>
                    Improved device availability and logistics efficiency.
                    <li></li> Better compliance and cost control.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:flex grid flex-wrap gap-4 xl:gap-8 mt-10 xl:mt-16">
              <LearnMoreButton
                bgcolor="#073259"
                onClick={handleScrollToContact}
                btnName="Talk to Us"
              />
            </div>
          </div>
          <div className="xl:col-span-4 4xl:mr-[142px] order-1 xl:order-2">
            <div className="xl:block hidden pt-20 4xl:ml-[-150px] xl:ml-[-100px] 4xl:h-[300px] xl:h-[600px]">
              <Image
                src="/images/products/mediaina/desktop/order.webp"
                alt="enabling-dynamic-img-mobile"
                className="4xl:h-[580px] 2xl:h-[600px] xl:h-[600px] w-full object-cover"
                width={1200}
                height={600}
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                src="/images/products/mediaina/mobile/order.webp"
                alt="enabling-dynamic-img-mobile"
                className="h-auto w-full max-w-full object-cover relative max-md:px-[35px]"
                width={375}
                height={250}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="custom-container 4xl:px-0 mt-10 max-md:px-0 max-md:mt-20 xl:px-0 relative">
        <div className="grid xl:grid-cols-12">
          <div className="xl:col-span-3 4xl:ml-[143px]">
            <div className="xl:block hidden pt-10 4xl:mr-[-200px] xl:mr-[-100px]">
              <Image
                src="/images/products/mediaina/desktop/trusted.webp"
                alt="enabling-dynamic-img-mobile"
                className="4xl:h-[630px] w-full object-cover relative"
                width={1200}
                height={630}
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                src="/images/products/mediaina/mobile/trusted.webp"
                alt="enabling-dynamic-img-mobile"
                className="h-auto w-full max-w-full object-cover relative max-md:px-[35px]"
                width={375}
                height={250}
                priority
              />
            </div>
          </div>
          <div className="xl:col-span-9 bg-[#EDEDED] 2xl:h-[750px] xl:h-[700px] 4xl:h-[830px] pt-16 4xl:px-[280px] xl:pl-[150px] 2xl:pr-[200px] xl:pr-0 2xl:mt-32 xl:mt-20 4xl:mt-24 max-md:mt-[-200px] max-md:px-[35px] md:px-10">
            <h2 className="leading-tight 4xl:pr-[10rem] max-md:pt-[13rem] text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px] ">
              Trusted by Salesforce. Certified by Rialtes.
            </h2>
            <p className="mt-5 4xl:pr-48 font-light pr-20 md:text-[18px] 4xl:text-[20px] text-[16px]">
              Built on the Salesforce platform, MediAIna adheres to the most
              rigorous global security and privacy standards.
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-16 gap-5 mb-6 mt-10  4xl:pr-[4rem]">
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Benefits
                </h3>
                <ul className="list-disc pl-5 space-y-5  text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>HIPAA – Safeguarding electronic health data. </li>
                  <li> FedRAMP – Government-grade cloud security.</li>
                  <li>SOC 2 Type II – Operational integrity and controls.</li>
                  <li>GDPR – Privacy-compliant across the EU.</li>
                  <li>
                    Rialtes Certified Security Team – Continuous audits and
                    governance.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#006FBE] font-semibold mb-2 text-lg xl:4xl:text-[22px]">
                  Outcomes
                </h3>
                <ul className="list-disc pl-5 space-y-5  text-gray-800 text-base md:text-[18px] 4xl:text-[20px] text-[16px]">
                  <li>Trusted by providers, payers, CROs, and regulators.</li>
                  <li>
                    {" "}
                    Accelerated deployment in highly regulated
                    environments.{" "}
                  </li>
                  <li>
                    Total peace of mind for your stakeholders and patients.
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:flex grid flex-wrap gap-4 xl:gap-8 mt-10 xl:mt-16 xl:absolute bottom-0">
              <LearnMoreButton
                bgcolor="#073259"
                onClick={handleScrollToContact}
                btnName="Talk to Us"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="custom-container text-black py-16 mt-16 max-md:mt-0 scroll-mt-28" ref={contactRef}>
        <ContactForm
          title={"Let’s Begin."}
          subtitle={
            "The future of patient experience is intelligent, connected, and outcome-driven. With MediAIna, Rialtes empowers you to reimagine every step of the journey—from identification to engagement, from trials to care, and from data to decisions."
          }
          className={
            "leading-tight max-w-[76%] text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px]"
          }
        />
      </section>
    </div>
  );
}
