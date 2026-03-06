"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import UnorderedList from "@/app/components/unorderedList";
import BreadCrumbs from '../../../components/BreadCrumbs'
import Script from "next/script";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
 import { useRef } from "react";
import LearnMoreButton from "@/app/components/learnMore";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Grow with SAP - Cloud ERP Implementation Services",
  "alternateName": "VoyagerNext by Rialtes",
  "url": "https://www.rialtes.com/services/business-transformation/grow-with-sap-services/",
  "description": "Rialtes provides end-to-end Grow with SAP transformation services, including SAP Cloud ERP implementation leveraging SAP S/4HANA Cloud, SAP Activate methodology, SAP Signavio, and SAP BTP. Services include implementation, migration from SAP B1, integration with Salesforce, and support for AI, automation, and digital procurement.",
  "provider": {
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
  "serviceType": [
    "Grow with SAP Services",
    "SAP S/4HANA Cloud Public Edition Implementation",
    "SAP B1 to S/4HANA Migration",
    "SAP Activate & SAP Signavio Enablement",
    "SAP SuccessFactors Integration",
    "SAP Ariba and Procurement Solutions",
    "SAP BTP Customization and Automation",
    "SAP CPI Integration",
    "Salesforce and SAP Integration",
    "Conversational AI for ERP (AgentChat)",
    "AI and Data Cloud Enablement"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "VoyagerNext Offerings",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SAP License Advisory",
          "description": "Guidance on SAP licensing for cost-effectiveness and scalability."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solution Design & Implementation",
          "description": "Design and implement SAP S/4HANA Cloud aligned with industry best practices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "System Integration & Customization",
          "description": "Integrate SAP with legacy systems and customize using SAP BTP and CPI."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Post Go-Live Support & Optimization",
          "description": "Hypercare, continuous improvement, and performance monitoring post go-live."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quality Assurance & User Training",
          "description": "Ensure system readiness with testing and user enablement services."
        }
      }
    ]
  },
  "audience": {
    "@type": "Audience",
    "audienceType": [
      "Mid-market Enterprises",
      "Growing Businesses",
      "Enterprise IT Teams",
      "SAP Business One Customers",
      "Digital Transformation Leaders"
    ]
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/services/business-transformation/grow-with-sap-services/"
  }
}
const services = [
  {
    text: 'SAP License Advisory',
    img: '/images/services/grow-with-sap/sap-license.svg',
  },
  {
    text: 'Quality Assurance & User Training',
    img: '/images/services/grow-with-sap/quality-assurance.svg',
  },
  {
    text: 'Post Go-Live Support & Continuous Optimization',
    img: '/images/services/grow-with-sap/post-go-live.svg',
  },
  {
    text: 'Solution Design & Implementation',
    img: '/images/services/grow-with-sap/solution-design.svg',
  },
  {
    text: 'System Integration & Customization',
    img: '/images/services/grow-with-sap/system-integration.svg',
  },
];
const cardsData = [
  {
    title: "SAP SuccessFactors + S/4HANA Cloud",
    description:
      "Enable next-generation HR and workforce management seamlessly integrated with SAP S/4HANA for unified employee and finance data. Manage the entire hire-to-retire lifecycle, aligned with real-time business operations.",
  },
  {
    title: "SAP Ariba + S/4HANA Cloud",
    description:
      "Integrate direct and indirect procurement seamlessly with S/4HANA to drive supplier collaboration, contract management, and procurement analytics. Rialtes ensures end-to-end Ariba-S/4HANA integrations for global sourcing.",
  },
  {
    title: "Direct and Indirect Procurement",
    description:
      "Enable complete procurement transformation, reduce costs, enhance supplier visibility, and ensure compliance with integrated sourcing strategies.",
  },
];
const benefits = [
  { bold: "Fast time-to-value", text: " with preconfigured processes." },
  { bold: "Cloud agility and scalability", text: " for growing businesses." },
  { bold: "AI and automation ready", text: " for future innovation." },
  { bold: "End-to-end compliance and security", text: "" },
];
const sapBenefits = [
  {
    bold: "Scalability —",
    text: "Move beyond the limitations of SAP B1 to a cloud-first, scalable ERP.",
  },
  {
    bold: "Advanced Analytics & AI —",
    text: "Unlock real-time insights and automation",
  },
  {
    bold: "Global Compliance & Localization —",
    text: "Built-in support for global operations.",
  },
  {
    bold: "Seamless Integrations —",
    text: "Easily integrate with suppliers, partners, and customers.",
  },
  {
    bold: "Modern User Experience —",
    text: "SAP Fiori-based modern UX for enhanced productivity.",
  },
];
const rialtesSapData = [
  "Current Landscape Assessment & Fit Analysis",
  "Business Process Mapping to S/4HANA Best Practices",
  "Data Migration Planning and Execution",
  "System Setup, Configuration & Custom Extensions",
  "Training, Testing, and Go-Live Support",
]
const sapIntegrationPoints = [
  {
    bold: "Connect SAP S/4HANA with non-SAP apps ",
    text: "like Salesforce, ServiceNow, and legacy systems.",
  },
  {
    bold: "Real-time, secure API-based integrations.",
    text: "",
  },
];
const sapInnovationList = [
  "SAP Build Process Automation and Extensions",
  "AI/ML and IoT Integrations",
  "API Management and Security",
];
const featureHighlights = [
  {
    bold: "Quick Deployment —",
    text: "Setup in minutes, ready to scale.",
  },
  {
    bold: "Enterprise Security —",
    text: "Role-based access and audit trails.",
  },
  {
    bold: "Flexible Process Delegation —",
    text: "Manage cases, leads, orders, work orders, and more — by record type.",
  },
  {
    bold: "Seamless SAP and Salesforce Integration —",
    text: "Drive conversations linked to ERP and CRM workflows.",
  },
];
const futureProofingData = [
  "AI-driven analytics and recommendations",
  "Customer segmentation for targeted marketing",
  "Predictive insights for supply chain and procurement",
  "Personalized experiences with Data Cloud + AI",
]
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
        title="Grow with SAP Solutions by a Trusted SAP Partner | Rialtes"
        description="Grow with SAP solutions that deliver measurable business success, powered by Rialtes—a trusted SAP partner driving enterprise-ready innovation and growth."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/services/business-transformation/grow-with-sap-services"
      />
      <Script
        id="schema-grow"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema currPage="Grow with SAP" />
      {/* hero section */}
      <section className="relative group overflow-hidden pb-20 h-[400px] md:h-[500px] 2xl:h-[600px] 4xl:h-[650px] ">
        <div className="xl:block hidden">
          <Image
            src="/images/services/grow-with-sap/AdobeStock_1335365875.webp"
            alt="grow with sap banner"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110 objet-[49%_20%]"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/services/grow-with-sap/AdobeStock_1335365875 (1).webp"
            alt="grow with sap banner"
            fill
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="relative custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 mt-20 mx-auto">
            <div className="xl:col-span-7 col-span-12 pr-5 3xl:mt-10">
              <h3 className="text-white text-[20px] xl:text-[24px] font-bold mb-2 break-words">
                VoyagerNext
              </h3>
              <h2 className="text-white  leading-tight  4xl:text-[60px] xl:text-[40px] 2xl:text-[48px] md:text-[26px] xl:w-[82%] 2xl:w-[73%] 4xl:w-[100%] max-[340px]:text-[22px] pr-2 max-[390px]:pr-0 md:w-[50%]">
                Grow Faster, Smarter with Rialtes' VoyagerNext
              </h2>
              <h3 className="mt-4 text-[18px] xl:text-[23px] 4xl:text-[35px]  text-white font-medium leading-tight xl:font-semibold 4xl:w-[80%] 2xl:w-[60%] xl:w-[60%] pr-2 max-[390px]:pr-0 md:w-[50%]">
                Your Partner for SAP S/4HANA Cloud Transformation
              </h3>
              <div className="md:w-32 w-20 pt-6 mt-2">
                <Image
                  src="/images/sap-consulting/SAP-partner-logo.webp"
                  alt="SAP Partner Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
            </div>
          </div>
        </div>
      </section>

      {/* page description section */}
      <section className="mt-5 custom-container">
        {/* breadcrumb */}
        <BreadCrumbs currPage="Grow with SAP" />

        <div className="grid xl:grid-cols-12 grid-cols-1 mt-16 ">
          <div className="4xl:col-span-10 xl:col-span-9 col-span-12">
            <h1 className="leading-tight text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px] xl:mb-8  xl:w-[92%] 2xl:w-[80%] 4xl:w-[100%]">
              Unlock the Power of SAP S/4HANA Cloud with Rialtes VoyagerNext Services
            </h1>
            <p className="md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight mt-5">At Rialtes, we help organizations embrace SAP's next-generation S/4HANA Cloud ERP using Grow with SAP — delivering enterprise-grade solutions built for scalability, agility, and future-proof growth </p>
            <p className="md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight  mt-5">As a certified SAP partner with presence in the United States, Canada, India, and Singapore, and a team of highly certified SAP experts, Rialtes is your trusted partner for end-to-end SAP transformation. Our VoyagerNext services seamlessly combine:</p>
          </div>
          <div className="xl:col-span-4 col-span-12">
          </div>
        </div>
      </section>

      {/* services section */}
      <section>
        <div className="custom-container">
          <div className="grid xl:grid-cols-3 grid-cols-1 mt-16 gap-x-16 gap-y-10">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-10 xl:gap-5">
                <Image
                  className="xl:w-[138px] xl:h-[138px] w-[75px] h-[75px]"
                  src={service.img}
                  alt={service.text}
                  width={375}
                  height={250}
                  sizes="100vw"
                  priority
                />
                <p className="4xl:text-[24px] xl:text-[22px] text-[20px] leading-tight font-medium">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="custom-container max-md:px-0">
          <p className="4xl:text-[26px] xl:text-[20px] text-[18px]  font-normal bg-[#0C8AD4] xl:pr-[270px] p-10 pl-10 text-white mt-20 leading-tight">We deliver business value from strategy to execution — enabling you to Grow with SAP and accelerate towards an intelligent, AI-powered enterprise.</p>
        </div>
      </section>
      {/* why now section */}
      <section className="relative  flex flex-col xl:flex-row-reverse mt-16 custom-container !pr-0 max-lg:px-0">
        <div
          className="relative group overflow-hidden pb-16">
          <div className="xl:block hidden">
            <Image
              src="/images/services/grow-with-sap/GWS.webp"
              alt="Grow with SAP: Why Now?"
              fill
              priority
              className="transform transition-transform duration-500 group-hover:scale-110 object-[35%_20%]"
            />
          </div>
          <div className="xl:hidden block">
            <Image
              src="/images/services/grow-with-sap/Why Now.webp"
              alt="Grow with SAP: Why Now?"
              fill
              priority
            />
          </div>
          <div>
          </div>
          <div className="xl:grid xl:grid-cols-12 grid-cols-1 relative  xl:mt-0 mt-[30rem]">
            <div className="xl:col-span-4 col-span-12 xl:pl-16 pl-8 text-white pr-22  xl:pr-0">
              <h2 className="xl:mt-20  leading-tight text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px]">
                Grow with SAP: Why Now?
              </h2>
            </div>
            <div className="xl:col-span-7 col-span-12">
            </div>
          </div>
          <div className="xl:grid xl:grid-cols-12 grid-cols-1 relative xl:pl-16 px-[35px] ">
            <div className="xl:col-span-5 col-span-12 text-white">
              <p className="mt-10 font-normal md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight">Grow with SAP brings the power of SAP S/4HANA Cloud Public Edition to mid-market and growing enterprises with pre-configured industry best practices, rapid deployment, and flexible licensing — making enterprise-grade ERP affordable, scalable, and fast to implement.</p>
              <h3 className="mt-10  4xl:text-[30px] xl:text-[22px] text-[20px] leading-tight xl:font-bold  font-medium">Benefits of Grow with SAP:</h3>
              <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight font-light">
                {benefits.map((item, index) => (
                  <li key={index} className={index === 0 ? "mt-4" : ""}>
                    <span className="font-bold">{item.bold}</span>{item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="xl:col-span-1 col-span-12">
            </div>
            <div className="xl:col-span-6 col-span-12">
            </div>
          </div>
        </div>
      </section>

      {/* sap business section */}
      <section className="relative  xl:mt-32 mt-10">
        <div className="xl:block hidden">
          <Image
            src="/images/services/grow-with-sap/Migration.webp"
            alt="SAP Business"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/services/grow-with-sap/Group 458.webp"
            alt="SAP Business"
            fill
            priority
          />
        </div>
        <div
          className="h-full relative custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-1 text-white backdrop-blur-md bg-black/30 p-5 ">
            <div className="xl:col-span-8 col-span-12">
              <h2 className="text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px]text-[26px] mt-16 leading-tight xl:pl-10 ">
                SAP Business One (B1) to SAP S/4HANA Migration
              </h2>
              <h3 className="mt-5 4xl:text-[40px] xl:text-[30px] text-[22px] xl:pl-10">Future-Proof Your ERP</h3>
            </div>
            <div className="xl:col-span-4 col-span-12 xl:mt-16 mt-5 pr-10">
              <p className="md:text-[18px] 4xl:text-[20px] text-[16px] font-medium">For businesses running SAP Business One (SAP B1), Rialtes provides a clear, structured path to migrate to SAP S/4HANA Cloud under Grow with SAP.</p>
            </div>
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1 text-white xl:pt-10 pt-16 xl:pb-20 xl:pr-10 xl:pl-20 backdrop-blur-md bg-black/30 p-5">
            <div className="xl:col-span-5 col-span-12">
              <h3 className="4xl:text-[30px] xl:text-[24px] text-[22px] leading-tight xl:font-bold font-medium ">Benefits of Migrating from SAP B1 to S/4HANA Cloud:</h3>
              <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight xl:mt-10 mt-3">
                {sapBenefits.map((item, index) => (
                  <li key={index}>
                    <span className="font-bold">{item.bold} </span>{item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="xl:col-span-1 col-span-12">
            </div>
            <div className="xl:col-span-5 col-span-12 mt-20 xl:mt-0">
              <h3 className="4xl:text-[30px] xl:text-[24px] text-[22px] leading-tight font-bold">Rialtes SAP B1 to S/4HANA Migration Approach:</h3>
              <UnorderedList arrName={rialtesSapData} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3" liClassName="md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight " />
             <LearnMoreButton onClick={handleScrollToContact}
  btnName="Talk to Us" 
/>
            </div>
          </div>
        </div>
      </section>
      {/* rialtes and sap section */}
      <section className="custom-container text-black py-20 pt-16">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-8 col-span-12 xl:w-[90%] 4xl:w-[100%]">
            <h2 className="leading-tight text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px]">
              Rialtes and SAP Activate Methodology + SAP Signavio
            </h2>
            <h3 className="4xl:text-[40px] xl:text-[30px] text-[22px] mt-5">Your Roadmap to Success</h3>
          </div>
          <div className="xl:col-span-4 col-span-12 mt-5 xl:mt-0 font-normal ">
            <p className="md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight">Delivering Success with SAP Activate & SAP Signavio Business Process Intelligence (BPI)</p>
            <p className="mt-5 md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight">Rialtes leverages SAP Activate methodology combined with SAP Signavio to ensure a process-first, value-driven ERP transformation.</p>
          </div>
        </div>
      </section>
      {/* key phases section */}
      <section className="xl:mb-20 mb-10 custom-container max-md:px-0 text-black">
        <h2 className="4xl:text-[30px] xl:text-[24px] text-[18px] leading-tight font-semibold max-md:pl-10 xl:mt-10 pr-10">Key Phases of SAP Activate Methodology:</h2>
        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#D0EEFF] text-left">
                <th className="p-4 pl-10 4xl:text-[30px] xl:text-[24px] text-[16px] leading-tight font-medium">Phase</th>
                <th className="p-4 xl:pl-32 pl-20 4xl:text-[30px] xl:text-[24px] text-[16px] leading-tight font-medium">What We Deliver</th>
              </tr>
            </thead>
            <tbody className="mt-3">
              {[
                { title: "Discover", desc: "Value identification, business case, high-level roadmap." },
                { title: "Prepare", desc: "Team enablement, project planning, initial scoping." },
                { title: "Explore", desc: "Fit-to-standard analysis powered by SAP Signavio, gap identification." },
                { title: "Realize", desc: "System configuration, extensions on SAP BTP, integration design." },
                { title: "Deploy", desc: "End-user training, data migration, go-live execution." },
                { title: "Run", desc: "Hypercare, continuous improvement, AI integration." }

              ].map((item, index) => (
                <tr key={index} className={`${index % 2 === 0 ? "bg-[#F2F2F2]" : "bg-white"}   mt-5`}>
                  <td className="p- font-light pl-10 md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight">{item.title}</td>
                  <td className="p-6 xl:pl-32 pl-20  font-light md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* sap signavio section */}
      <div className="xl:mb-20 mb-12 xl:mr-[142px] mt-0 custom-container text-black max-md:px-0">
        <div className="grid xl:grid-cols-12 grid-cols-1  bg-[#068EDA] xl:gap-8 gap-3 px-[36px]">
          <div className="xl:col-span-3 col-span-12 flex justify-center xl:justify-start pl-0 xl:pl-10  ">
            <Image
              src="/images/services/rise-with-sap/SAP Signavio.webp"
              alt="SAP Signavio"
              width={375}
              height={250}
              priority
              className="xl:w-[355px] w-[322px] h-full shadow-lg"
            />
          </div>
          <div className="xl:col-span-9 col-span-12 text-white p-5 pl-10 xl:pr-0 pr-5">
            <p className="4xl:text-[26px] md:text-[20px] text-[16px] font-normal leading-tight">SAP Signavio enables process modeling, simulation, and improvement for a future-ready operating model aligned with SAP standards.</p>
          </div>
        </div>
      </div>
      {/* expanding section */}
      <section className="relative w-full group overflow-visible">
        <div className="relative h-[660px] xl:h-[720px] w-full overflow-hidden">
          <Image
            src="/images/services/grow-with-sap/Expanding Value.webp"
            alt="Expanding Value with SAP"
            fill
            priority
            className="transition-transform duration-700 group-hover:scale-110 object-cover object-[85%_30%]"
          />
          <div className="relative  xl:mt-0 z-10 h-full custom-container">
            <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20">
              <div className="4xl:col-span-7 xl:col-span-6  col-span-12 pb-10">
                <h2 className="text-white max-md:mt-[390px] mt-16 leading-tight text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px]">
                  Expanding Value with SAP SuccessFactors, Ariba, and Procurement
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-20 custom-container  xl:mr-[420px] mt-[-5rem] xl:mt-[-300px]">
          <div className="flex flex-col xl:flex-row gap-6">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="flex-1 p-8 bg-white hover:bg-[#D9F2FF] text-black border-[3px] transition duration-300">
                <h3 className="text-[22px] xl:text-[30px] font-semibold leading-tight">
                  {card.title}
                </h3>
                <p className="md:text-[18px] 4xl:text-[20px] text-[16px] mt-5 font-normal leading-tight">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* sap cpi section */}
      <section className="xl:mt-24 mt-16 h-full relative custom-container">
        <div className="grid grid-cols-12">
          <div className="xl:col-span-10 col-span-12">
            <h2 className="leading-tight text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px]xl:w-[78%] 4xl:w-[100%]">SAP CPI and BTP — Integrated, Customized, and Future-Ready ERP</h2>
            <div className="grid xl:grid-cols-12 grid-cols-1 pt-10 xl:pb-32 pb-10 xl:gap-20">
              <div className="xl:col-span-6 col-span-12">
                <h3 className="4xl:text-[30px] xl:text-[24px] text-[21px]  xl:font-semibold font-medium  leading-tight">SAP Cloud Platform Integration (CPI)</h3>
                <ul className="list-disc space-y-5 marker:font-bold marker:text-[#036CBC] marker:text-2xl pl-5 md:text-[18px] 4xl:text-[20px] text-[16px] xl:mt-10 mt-5 leading-tight">
                  {sapIntegrationPoints.map((item, index) => (
                    <li key={index}>
                      <span className="font-bold">{item.bold}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="xl:col-span-6 col-span-12 mt-16 xl:mt-0 ">
                <h3 className="4xl:text-[30px] xl:text-[24px] text-[21px]  xl:font-semibold font-medium  leading-tight">SAP BTP — Customization and Innovation at Scale</h3>
                <p className="xl:mt-10 mt-5 font-normal md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight">Rialtes offers strong SAP BTP competency to build custom apps, automate workflows, and extend S/4HANA:</p>
                <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-[#036CBC] marker:text-2xl pl-5 md:text-[18px] 4xl:text-[20px] text-[16px] xl:mt-10 mt-5">
                  {sapInnovationList.map((item, index) => (
                    <li key={index}>
                      <span className="font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 col-span-12"></div>
        </div>
        <p className="xl:block hidden 4xl:text-[26px] xl:text-[20px] text-[16px] bg-[#0C8AD4] font-normal p-5 xl:pl-10  text-white leading-tight">Our certified BTP experts ensure future-proof architecture for every client.</p>
      </section>
      <p className="block xl:hidden 4xl:text-[26px] xl:text-[20px] text-[18px] bg-[#0C8AD4] p-5 pl-[30px] xl:pl-10 xl:mr-[142px] text-white leading-tight">Our certified BTP experts ensure future-proof architecture for every client.</p>
      {/* conversational section */}
      <section className="bg-[#184671] xl:pb-20 pb-10 xl:mt-32 mt-10">
        <div className="custom-container h-full relative">
          <div className="relative xl:h-[665px] h-[341px]">
            <Image
              src="/images/services/grow-with-sap/Agentchat banner (1).webp"
              alt="grow with sap"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="w-full xl:mt-[-90px] mt-10 xl:object-[35%_20%] object-[58%_20%]"
            />
            <div className="grid xl:grid-cols-12 grid-cols-1 absolute xl:left-10">
              <div className="xl:col-span-7 col-span-12">
                <h2 className="text-black xl:mt-[-30px] mt-[23rem] bg-white xl:bg-transparent pl-8 p-10 xl:p-0 leading-tight text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px]">Conversational AI with AgentChat — Transforming Customer Engagement</h2>
              </div>
              <div className="xl:col-span-6 col-span-12">
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1 text-white xl:gap-20  mt-80 md:mt-14 xl:mt-0">
            <div className="xl:col-span-5 col-span-12">
              <h2 className="4xl:text-[40px]   xl:text-[28px] text-[20px] leading-tight xl:font-semibold  font-bold">Meet AgentChat — WhatsApp for Salesforce and SAP</h2>
              <p className="md:text-[18px] 4xl:text-[20px] text-[16px] mt-5 font-normal leading-tight">
                RialChat is a bi-directional WhatsApp conversational app, fully integrated within Salesforce and extendable to SAP.              </p>
              <button className="4xl:text-[20px] text-[16px] xl:text-[16px] border-[1px] border-[solid]  border-[#134874] font-semibold bg-white text-black p-3  transition duration-300 order-4 xl:mt-16 mt-10 mb-10 xl:mb-0">
                <Link href='/products/agentchat'>Know More</Link>
              </button>
            </div>
            <div className="xl:col-span-7 col-span-12 xl:pr-20 ">
              <h3 className="4xl:text-[30px] xl:text-[24px] text-[18px] leading-tight font-semibold">Benefits of Grow with SAP:</h3>
              <ul className="list-disc xl:space-y-5 md:text-[18px] 4xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl xl:pr-16 leading-tight">
                {featureHighlights.map((item, index) => (
                  <li key={index} className={index === 0 ? "mt-5" : ""}>
                    <span className="font-bold">{item.bold} </span>{item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* future proofing section */}
      <section className="xl:py-20 pt-16 pb-10 xl:mt-10">
        <div className="h-full relative custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="xl:col-span-5 col-span-12 relative group overflow-hidden h-[383px] md:h-[450px] xl:h-full">
              <Image
                src="/images/services/grow-with-sap/Future-Proofing.webp"
                alt="Future-Proofing with AI"
                fill
                priority
                className=" transform transition-transform duration-500 group-hover:scale-110 xl:!h-[563px] xl:!w-[532px]"
              />
            </div>
            <div className="xl:col-span-1 col-span-12">
            </div>
            <div className="xl:col-span-6 col-span-12 text-black mt-8 xl:mt-0">
              <h2 className="leading-tight text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px]">Future-Proofing with AI, Data, and Automation: The Next Frontier</h2>
              <p className="mt-5 md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight">Leverage SAP Data Cloud and Salesforce Agentforce AI to unlock next-gen ERP capabilities:</p>
              <UnorderedList arrName={futureProofingData} ulClassName="list-disc xl:space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5  font-semibold mt-10" liClassName="4xl:text-[20px] md:text-[18px] text-[16px]" />
            </div>
          </div>
        </div>
      </section>
      {/* contact form */}
      <section className="custom-container text-black py-16  scroll-mt-28" ref={contactRef}>
        <ContactForm title={'Ready to Grow with SAP? Partner with Rialtes VoyagerNext Today!'} subtitle={"Empower your growth journey with VoyagerNext — the Rialtes way to unlock S/4HANA Cloud potential."} className={"leading-tight max-w-[96%] text-[26px] md:text-[32px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px]"} />
      </section>
    </div >
  );
}