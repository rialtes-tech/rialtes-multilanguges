"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";
import UnorderedList from "@/app/components/unorderedList";
import Script from "next/script";
import BreadCrumbs from '../../../components/BreadCrumbs'
import Link from "next/link";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Success+ – SAP SuccessFactors Consulting & Implementation Services",
  "url": "https://www.rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner/",
  "description": "Success+ by Rialtes offers AI-powered SAP SuccessFactors consulting and implementation services to modernize human capital management and accelerate HR transformation across industries.",
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "url": "https://www.rialtes.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    },
    "sameAs": [
      "https://www.linkedin.com/company/rialtes-technologies-llc",
      "https://x.com/Rialtestech",
      "https://www.youtube.com/@rialtes"
    ]
  },
  "mainEntity": {
    "@type": "Service",
    "name": "SAP SuccessFactors Consulting, Migration, and Implementation",
    "serviceType": "HCM Digital Transformation Services",
    "category": "Human Capital Management & HR Automation",
    "provider": {
      "@type": "Organization",
      "name": "Rialtes"
    },
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "Singapore" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Success+ SAP SuccessFactors Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "SAP SuccessFactors Consulting & Advisory" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "SuccessFactors Implementation & Configuration (Core HR, Talent, Learning, Compensation)" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Workday to SAP SuccessFactors Migration" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "ZOHO HR to SAP SuccessFactors Migration" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Integration with SAP S/4HANA, Finance, and Payroll" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "SAP Joule AI Implementation & Customization" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "SAP BTP Extensions for SAP SuccessFactors" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "SuccessFactors Integration via SAP CPI" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "HR Process Optimization using SAP Signavio & Activate Methodology" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "AgentChat Integration with SAP SuccessFactors (WhatsApp-based HR automation)" }
        }
      ]
    }
  }
}
const relatedData = [
  {
    text: "SAP S/4HANA for Finance & Operations.",
    link: null,
  },
  {
    text: "SAP Ariba for Direct & Indirect Procurement",
    link: "https://www.rialtes.com/services/spend-management/sapbuyplus-ariba-implementation-partner/",
  },
  {
    text: "SAP Concur for Travel & Expense",
    link: null,
  },
  {
    text: "SAP CPI for Cloud Integrations",
    link: "https://www.rialtes.com/solutions/integration/sap-cloud-platform-integration-consulting/",
  },
];
const agentData = [
  "Role-based communication (recruiters, managers, HR).",
  "Case, lead, and work order delegation by type.",
  "Employee self-service for leave, benefits, and more.",
  "Quick setup in minutes. Fully secure and compliant.",
]
const ourWorkdayData = [
  "Comprehensive system comparison and gap analysis.",
  "Mapping Workday HR processes to SAP SuccessFactors best practices.",
  "Secure data migration, validation, and cleansing.",
  "Change management and employee training to ensure adoption.",
  "Integration with SAP S/4HANA, Finance, and Payroll.",
]
const keyBenefitsData = [
  "Unified platform with SAP S/4HANA for HR and business processes.",
  "Reduced operational costs and improved scalability.",
  "Enhanced analytics and AI capabilities with SAP Joule.",
]
const ourZohoData = [
  "Assessment and mapping of ZOHO HR processes to SuccessFactors.",
  "Employee data migration with validation and secure handling.",
  "Re-engineering workflows to align with SuccessFactors’ HXM principles.",
  "User training and post-deployment support.",
]
const zohoBenefitsData = [
  "Enterprise compliance and data security.",
  "End-to-end employee lifecycle management.",
  "AI-driven insights and enhanced user experiences.",
]
const migratingBenefitsData = [
  {
    img: "/images/services/success-plus/unified-img.svg",
    title: "Unified HR platform aligned with business goals."
  },
  {
    img: "/images/services/success-plus/future-img.svg",
    title: "Future-proofing HR with AI, automation, and advanced analytics."
  },
  {
    img: "/images/services/success-plus/integration-img.svg",
    title: "Integration with core SAP and third-party systems for a connected enterprise."
  },
  {
    img: "/images/services/success-plus/global-hr-img.svg",
    title: "Global HR compliance and local adaptability."
  },
]
const sapActivateData = [
  {
    id: 1,
    title: "Discover Phase",
    list: [
      "Understanding your HR transformation goals.",
      "Initial system evaluation, readiness checks, and value mapping.",
      "High-level scoping and timeline planning.",
    ]
  },
  {
    id: 2,
    title: "Prepare Phase",
    list: [
      "Project planning, governance setup, and team onboarding.",
      "System access and pre-requisite checklists.",
    ]
  },
  {
    id: 3,
    title: "Explore Phase",
    list: [
      "Fit-to-standard workshops leveraging SAP Signavio to align processes with industry best practices.",
      "Identify customizations and integration points.",
    ]
  },
  {
    id: 4,
    title: "Realize Phase",
    list: [
      "Configuration of SuccessFactors modules (Employee Central, Talent, Learning, Compensation, etc.).",
      "Custom development and integrations. ",
      "Data migration and testing (unit, integration, UAT).",
    ]
  },
  {
    id: 5,
    title: "Deploy Phase",
    list: [
      "Final system readiness, user training, and go-live planning.",
      "Cutover execution and post-go-live support setup.",
    ]
  },
  {
    id: 6,
    title: "Run Phase",
    list: [
      "Stabilization, ongoing support, and continuous improvement roadmap.",
    ]
  },
]
const sapSuccessFactorData = [
  "Employee lifecycle data feeding finance and procurement.",
  "Unified organizational management. ",
  "Streamlined payroll and time management.",
]
const sapJouleData = [
  "Conversational AI for employee self-service (ESS).",
  "AI recommendations for career growth, learning, and wellness.",
  "AI-driven HR case resolution and knowledge management.",
  "Predictive insights for HR leaders on attrition, performance, and more.",
]
const sapCpiData = [
  "SAP S/4HANA, SAP Ariba, Concur, Fieldglass. ",
  "Third-party applications (ADP, Salesforce, Workday, Oracle).",
  "Custom enterprise systems.",
]
const extendData = [
  "Custom HR workflows and forms.",
  "Integrations with third-party solutions. ",
  "Employee experience applications and mobile enablement.",
  "AI/ML solutions for talent management, learning, and engagement.",
]
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="SAP SuccessFactors Consulting and Implementation Partners | Rialtes"
        description="Success+ by Rialtes delivers AI-powered SuccessFactors consulting and implementation to modernize HCM and accelerate your HR transformation. Let’s begin!"
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner"
      />
      <Script
        id="schema-sucessfactor"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema currPage="SAP SuccessFactors" subPath="Human Experience Management" />
      {/* hero section */}
      <section className="relative h-[470px] sm:h-[640px] lg:h-[650px] overflow-hidden">
        <div className="md:block hidden">
          <Image
            src="/images/services/success-plus/desktop-banner.webp"
            alt="SuccessFactor"
            style={{ objectFit: "cover", objectPosition: "75% 20%" }}
            priority
            width={630}
            height={1200}
            className="w-full"
          />
        </div>
        <div className="md:hidden block">
          <Image
            src="/images/services/success-plus/Mobile/mobile-banner.webp"
            alt="SuccessFactor"
            style={{ objectFit: "cover", objectPosition: "75% 20%" }}
            priority
            height={1200}
            width={630}
            className="w-full"
          />
        </div>
        <div
          className="custom-container h-full relative">
          <div className="h-full flex flex-col justify-center mt-[40px] lg:mt-0">
            <h3 className="text-white xl:text-[24px] text-[18px] font-bold mb-2">Success+</h3>
            <h2 className="text-white 2xl:text-[56px] xl:text-[40px] 4xl:text-[60px] lg:text-[38px] leading-tight text-[24px] md:text-[32px] mt-[20.5px]">
              Transforming HR for  <div className="" /> the Modern Enterprise
              <div className="lg:mt-[20px] mt-[10px]" /><span className="text-[16px] font-bold lg:text-[36px] 4xl:text-[45px]"> Rialtes’ Success+ </span> <div className="2xl:mt-[-20px] lg:mt-[-5px] xl:mt-0 mt-[-10px]" /><span className="text-[16px] lg:text-[36px] 4xl:text-[45px]"> for SAP SuccessFactors</span>
            </h2>
            <div className="md:max-w-32 w-20 4xl:w-[160px] 2xl:w-[140px] lg:w-[100px] xl:w-[100px] mt-[49px] xl:mt-[62px]">
              <Image
                src="/images/services/success-plus/sap-partner-logo.webp"
                alt="SAP Partner Logo"
                width={630}
                height={1200}
                sizes="100vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* page description */}
      <section className="custom-container mt-5">
        {/* breadcrumbs */}
        <BreadCrumbs currPage="SAP SuccessFactors" subPath="Human Experience Management" />

        <h1 className="xl:mt-[78px] mt-[51px] xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] md:w-[80%] xl:w-[80%] 4xl:w-[94%] w-[96%]">
          End-to-End SuccessFactors Consulting Services for a Future-Ready Workforce
        </h1>
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-[20px]">
          <div className="lg:col-span-8 col-span-12 order-2 lg:order-1">
            <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] xl:mt-[43px] mt-[20px] font-normal 4xl:pr-16 w-[96%] xl:pr-16 2xl:pr-20">
              At Rialtes, we believe HR is at the center of every organization’s success. Our ‘SuccessPlus’ suite of SAP SuccessFactors services is designed to help organizations transform their human capital management (HCM) strategies, streamline HR processes, and deliver an exceptional employee experience.
              <br /><br />
              As a certified SAP partner with global offices in India, the United States, Canada, and Singapore, Rialtes brings deep industry knowledge, SAP-certified experts, and real-world experience to design, implement, and optimize SAP SuccessFactors solutions tailored to your needs.
            </p>
          </div>
          <div className="lg:col-span-4 col-span-12 lg:my-auto lg:ml-auto order-1 lg:order-2 mt-[40px]">
            <Image
              src="/images/services/success-plus/successfactor-logo-1.jpg"
              alt="SAP Partner Logo"
              width={630}
              height={1200}
              className="w-full h-full md:w-[50%] lg:w-full lg:h-full"
              priority
            />
          </div>
        </div>

      </section>
      {/* what is rialtes success section */}
      <section className="custom-container xl:mt-[112px] lg:mt-[82px] mt-[34px]">
        <div className="grid xl:grid-cols-12 grid-cols-1 4xl:gap-[70px] gap-y-[20px]">
          <div className="xl:col-span-8 col-span-12">
            <h2 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] w-[92%] xl:w-full">
              What is Rialtes’ Success+?
              <br />
              <span className="xl:text-[34px] 4xl:text-[45px] leading-tight text-[22px] mt-4 font-semibold">A Full Lifecycle SAP <div className="4xl:mt-[-16px]" /> SuccessFactors Offering</span>
            </h2>
          </div>
          <div className="xl:col-span-4 col-span-12 md:w-[80%] w-[92%] xl:w-full">
            <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal">
              Our SuccessPlus services combine license advisory, implementation, configuration, integration, quality assurance, and post-go-live support to deliver a holistic and seamless SAP SuccessFactors journey for your organization.
            </p>
          </div>
        </div>
      </section>
      {/* success key image */}
      <section className="custom-container md:px-0 mt-[58px] md:mt-[90px] xl:mt-[173px]">
        <div className="md:block hidden">
          <Image
            src="/images/services/success-plus/key-services-desk.webp"
            alt="key-services-desktop image"
            className="w-full h-full object-cover"
            priority
            width={630}
            height={1200}
          />
        </div>
        <div className="md:hidden block">
          <Image
            src="/images/services/success-plus/Mobile/key-services-mob.webp"
            alt="key-services-mobile image"
            className="w-full h-full object-cover"
            priority
            width={630}
            height={1200}
          />
        </div>
      </section>
      {/* workday section */}
      <section className="text-white custom-container 4xl:pr-0 4xl:mt-[183px] 2xl:mt-[140px] xl:mt-[100px] mt-[87px] pt-[50px] 4xl:pt-[148] 2xl:pt-[100px] xl:pt-[100px] md:bg-[url('/images/services/success-plus/workday-bg-desk.webp')] bg-[url('/images/services/success-plus/Mobile/workday-bg-mob.webp')] bg-cover">
        <div>
          <div className="grid 4xl:pr-[280px] lg:grid-cols-12 grid-cols-1 lg:gap-[20px] xl:gap-[60px] gap-y-[29px]">
            <div className="lg:col-span-7 3xl:col-span-8 col-span-12 lg:order-1 order-2">
              <h2 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] sm:w-[92%] xl:w-full">
                Workday to SAP SuccessFactors <div className="block lg:hidden" /> Migration - <span className="xl:text-[34px] 4xl:text-[45px] leading-tight text-[22px] font-bold"> <div className="block lg:hidden" />Migrate with Confidence</span>
              </h2>
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-medium xl:mt-[51px] mt-[17px] w-[96%] xl:w-[90%]">
                Organizations seeking to move from Workday to SAP SuccessFactors can rely on Rialtes’ proven methodology to ensure a secure, compliant, and smooth transition.
              </p>
            </div>
            <div className="lg:col-span-5 3xl:col-span-4 col-span-12 lg:order-2 order-1">
              <div className="lg:block hidden h-[180px] aspect-[19/9]">
                <Image
                  src="/images/services/success-plus/workday-desk.webp"
                  alt="workday-desktop image"
                  className="w-full h-full object-contain"
                  priority
                  width={630}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              <div className="lg:hidden block h-[80px] w-[200px] md:h-[120px] md:w-[260px]">
                <Image
                  src="/images/services/success-plus/Mobile/workday-mob.webp"
                  alt="workday-mobile image"
                  className="w-full h-full object-cover"
                  priority
                  width={630}
                  height={1200}
                />
              </div>
            </div>
          </div>
          <div className="relative grid lg:grid-cols-2 grid-cols-1 xl:mt-[58px] mt-[29px] lg:w-[90%] 4xl:w-[80%] gap-y-[56px] lg:gap-[60px] xl:mb-[80px] mb-[80px]">
            <div>
              <h3 className="xl:text-[26px] 4xl:text-[30px] leading-tight text-[22px] w-[92%] xl:w-full">
                Our Workday to SuccessFactors Migration Includes:
              </h3>
              <UnorderedList arrName={ourWorkdayData} ulClassName="w-[92%] lg:w-full xl:mt-[39px] mt-[26px] xl:space-y-[27px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[19px] 4xl:text-[20px] leading-tight text-[16px] font-normal" />
            </div>
            <div>
              <h3 className="xl:text-[26px] 4xl:text-[30px] leading-tight text-[22px] w-[92%] xl:w-full">
                Key Benefits of Migrating from Workday to SuccessFactors:
              </h3>
              <UnorderedList arrName={keyBenefitsData} ulClassName="w-[92%] lg:w-full xl:mt-[39px] mt-[26px] xl:space-y-[27px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[19px] 4xl:text-[20px] leading-tight text-[16px] font-normal" />
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>

        <>
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[20px] xl:gap-[60px] gap-y-[39px] xl:mt-[90px] mt-[60px] 4xl:pr-[280px]">
            <div className="lg:col-span-7 3xl:col-span-8 col-span-12 lg:order-1 order-2">
              <h2 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] sm:w-[92%] xl:w-[92%]">
                ZOHO HR to SAP SuccessFactors <div className="block lg:hidden" /> Migration - <div className="xl:text-[34px] 4xl:text-[45px] leading-tight text-[22px] font-bold">Enterprise-Grade HR Transformation</div>
              </h2>
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-medium xl:mt-[51px] mt-[17px] w-[94%] md:w-[80%] lg:w-full">
                Outgrowing ZOHO HR? Rialtes offers end-to-end migration from ZOHO HR to SAP SuccessFactors, enabling a shift to a global, enterprise-grade HR platform.
              </p>
            </div>
            <div className="lg:col-span-5 3xl:col-span-4 col-span-12 lg:order-2 order-1">
              <div className="lg:block hidden h-[180px] aspect-[19/9]">
                <Image
                  src="/images/services/success-plus/zoho-desk.webp"
                  alt="zoho-desktop image"
                  className="w-full h-full object-contain"
                  priority
                  width={630}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              <div className="lg:hidden block h-[80px] w-[200px] md:h-[120px] md:w-[260px]">
                <Image
                  src="/images/services/success-plus/Mobile/zoho-mob.webp"
                  alt="zoho-mobile image"
                  className="w-full h-full object-cover"
                  priority
                  width={630}
                  height={1200}
                />
              </div>
            </div>
          </div>
          <div className="relative grid lg:grid-cols-2 grid-cols-1 xl:mt-[58px] mt-[29px] lg:w-[90%] 4xl:w-[80%] gap-y-[56px] lg:gap-[60px] xl:mb-[60px] mb-[40px]">
            <div>
              <h3 className="xl:text-[26px] 4xl:text-[30px] leading-tight text-[22px] w-[90%] xl:w-full">
                Our ZOHO to SuccessFactors Migration Includes:
              </h3>
              <UnorderedList arrName={ourZohoData} ulClassName="w-[92%] lg:w-full xl:mt-[39px] mt-[26px] xl:space-y-[27px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[19px] 4xl:text-[20px] leading-tight text-[16px] font-normal" />
            </div>
            <div>
              <h3 className="xl:text-[26px] 4xl:text-[30px] leading-tight text-[22px] w-[90%] xl:w-full">
                Benefits of Migrating from ZOHO HR to SAP SuccessFactors:
              </h3>
              <UnorderedList arrName={zohoBenefitsData} ulClassName="w-[92%] lg:w-full xl:mt-[39px] mt-[26px] xl:space-y-[27px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[19px] 4xl:text-[20px] leading-tight text-[16px] font-normal" />
            </div>
          </div>
        </>
        <div className="4xl:mr-[280px] xl:shadow-lg border-b-2 border-white xl:mt-[100px] mt-[63px] bg-[#FFFFFF] pt-[40px]  pl-[24px]  xl:py-[83px] md:px-[60px]">
          <h2 className="text-black xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] sm:w-[92%] lg:w-[60%] xl:w-full">
            Benefits of Migrating to SAP SuccessFactors with Rialtes’ Success+
          </h2>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-[40px] 2xl:gap-[60px] gap-y-[26px] sm:w-[90%] lg:w-full">
            {
              migratingBenefitsData.map((data, ind) => {
                return (
                  <div className="xl:mt-[48px] mt-[26px]" key={ind}>
                    <div>
                      <Image
                        src={data.img}
                        alt={`${data.title} image`}
                        className="xl:w-[120px] xl:h-[120px] object-cover h-[75px] w-[75px]"
                        priority
                        width={630}
                        height={1200}
                      />
                    </div>
                    <h4 className="text-black leading-tight text-[20px] mt-[16px] xl:mt-[26px] w-[92%] xl:w-full font-semibold">
                      {data.title}
                    </h4>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      {/* process section */}
      <section className="custom-container xl:mt-[116px] mt-[55px]">
        <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-[60px] gap-y-[26px]">
          {/* <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-[60px] gap-y-[26px]">
  {/* Heading - First on mobile */}
          <div className="xl:col-span-8 col-span-12 order-1">
            <h2 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] w-[92%] md:w-[76%] xl:w-[94%]">
              Process-Driven Success with SAP Signavio and SAP Activate Methodology
            </h2>
          </div>

          {/* Paragraph - Second on mobile */}
          <div className="xl:col-span-4 col-span-12 order-2">
            <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal w-[96%] md:w-[80%] xl:w-full">
              Rialtes leverages SAP Signavio’s powerful process intelligence combined
              with SAP Activate Methodology to ensure smooth and efficient
              implementation of SAP SuccessFactors.
            </p>
          </div>

          {/* SAP Activate - Third on mobile */}
          <div className="xl:col-span-8 col-span-12 order-3">
            <h3 className="xl:text-[34px] 4xl:text-[40px] leading-tight text-[22px] xl:mt-[72px] mt-[26px] font-normal pr-8 xl:pr-0">
              <span className="font-bold">SAP Activate Methodology - </span>
              Phased Approach with Rialtes:
            </h3>
          </div>
        </div>


        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:mt-[120px] mt-[40px] sm:w-[80%] md:w-[90%] xl:w-full 2xl:w-[90%] md:gap-x-[60px] lg:gap-0">
          {
            sapActivateData.map((data, ind) => {
              return (
                <div key={ind} className={`lg:first:py-0 max-lg:border-b max-lg:last:border-0 border-[#B9B9B9] py-[30px] md:py-[40px] lg:py-0
                                          ${(data.id === 5 || data.id === 6) && "md:border-0"}
                                          ${data.id === 2 && "lg:!py-0"}
                                          ${(data.id == 2 || data.id == 5) && "lg:mt-[60] xl:mt-[80px] lg:h-[250px] xl:h-[260px] 4xl:h-[330px] lg:px-[30px] xl:px-[40px] lg:border-l border-[#B9B9B9]"}
                                          ${(data.id == 3 || data.id == 6) && "lg:mt-[120] xl:mt-[140px] lg:pl-[40px] lg:border-l"}
                                          ${(data.id == 1 || data.id == 4) && "lg:pr-[40px]"}
                                          ${(data.id == 6) && "lg:pb-[80px] 4xl:pb-[110px]"} `}>
                  <h4 className="text-[#0C8AD4] xl:text-[27px] 4xl:text-[30px] leading-tight text-[24px] xl:mb-[28px] mb-[16px] flex">
                    <div className="xl:text-[60px] 4xl:text-[70px] leading-tight text-[50px] mr-[20px] font-extrabold">{data.id}</div> <div className="my-auto">{data.title}</div>
                  </h4>
                  <UnorderedList arrName={data.list} ulClassName="w-[88%] lg:w-full 4xl:w-[96%] xl:space-y-[30px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal" />
                </div>
              )
            })
          }
        </div>
      </section>
      {/* sap success factor section */}
      <section className="custom-container relative lg:mt-[130px] xl:mt-[175px] mt-[38px] 4xl:!pr-[142px] 2xl:!pr-[90px] lg:!pr-[40px] md:!pr-0 max-lg:px-0">
        <div className="lg:pl-[59px] lg:pr-[60px]  px-[36px] bg-[#F2ECD9]">
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] gap-y-[30px]">
            <div className="lg:order-1 order-2 lg:col-span-5 4xl:col-span-5 lg:pt-[86px] xl:pb-[68px] pb-[52]">
              <h2 className="xl:text-[30px] 4xl:text-[40px] leading-tight text-[22px] font-bold w-[90%] lg:w-full">
                SAP SuccessFactors and SAP S/4HANA - <div className="font-normal">Better Together</div>
              </h2>
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal w-[92%] md:w-[80%] lg:w-full xl:mt-[42px] mt-[26px]">
                SAP SuccessFactors natively integrates with SAP S/4HANA, enabling seamless HR processes that are tightly coupled with finance, procurement, and operations.
              </p>
              <h3 className="xl:mt-[31px] mt-[26px] xl:text-[25px] 4xl:text-[30px] leading-tight text-[21px] font-semibold">Key Integrated Processes:</h3>
              <UnorderedList arrName={sapSuccessFactorData} ulClassName="4xl:mt-[38px] mt-[22px] w-[88%] lg:w-full 4xl:w-[96%] xl:space-y-[24px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[18px] 4xl:text-[20px] leading-tight text-[16px] font-semibold" />
            </div>
            <div className="lg:order-2 order-1 lg:col-span-7 4xl:col-span-6 max-lg:pt-[45px]">
              <div className="lg:block hidden h-full 4xl:h-[800px] xl:h-[710px] lg:h-[620px] w-full lg:mt-[-60px]">
                <Image
                  src="/images/services/success-plus/successfactor-desk.webp"
                  alt="successfactor-desktop image"
                  className="w-full h-full object-cover"
                  priority
                  width={630}
                  height={1200}
                />
              </div>
              <div className="lg:hidden block">
                <Image
                  src="/images/services/success-plus/Mobile/successfactor-mob.webp"
                  alt="successfactor-mobile image"
                  className="w-full h-full object-cover"
                  priority
                  width={375}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* sap CPI section */}
      <section className="custom-container relative lg:mt-[130px] xl:mt-[175px] mt-[60px] 4xl:!pr-[142px] 2xl:!pr-[90px] lg:!pr-[40px] md:!pr-0 max-lg:px-0">
        <div className="absolute bg-[#EFE0CD] bottom-0 top-0 4xl:w-[120px] 4xl:ml-[-120px] 2xl:w-[90px] 2xl:ml-[-90px] lg:w-[26px] lg:ml-[-26px]"></div>
        <div className="lg:pr-[60px] max-lg:px-[36px] bg-[#EFE0CD]">
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] gap-y-[30px]">
            <div className="lg:order-2 order-2 lg:col-span-6 lg:pt-[86px] xl:pb-[68px] pb-[52]">
              <h2 className="xl:text-[30px] 4xl:text-[40px] leading-tight text-[22px] font-bold w-[90%] lg:w-full">
                SAP CPI - <div className="font-normal"> Integrating SAP SuccessFactors Across Ecosystems</div>
              </h2>
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal w-[92%] md:w-[80%] lg:w-full xl:mt-[42px] mt-[26px]">
                With SAP Cloud Platform Integration (CPI), Rialtes ensures smooth and secure integration of SuccessFactors with:
              </p>
              <h3 className="xl:mt-[31px] mt-[26px] xl:text-[25px] 4xl:text-[30px] leading-tight text-[21px] font-semibold">Key Integrated Processes:</h3>
              <UnorderedList arrName={sapCpiData} ulClassName="4xl:mt-[38px] mt-[22px] w-[88%] lg:w-full 4xl:w-[96%] xl:space-y-[24px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[18px] 4xl:text-[20px] leading-tight text-[16px] font-semibold" />
            </div>
            <div className="lg:order-1 order-1 lg:col-span-6 max-lg:pt-[45px]">
              <div className="lg:block hidden h-full 4xl:h-[800px] xl:h-[710px] lg:h-[620px] w-full lg:mt-[-60px]">
                <Image
                  src="/images/services/success-plus/sap-cpi-desk.webp"
                  alt="sap-cpi-desktop image"
                  className="w-full h-full object-cover"
                  priority
                  width={630}
                  height={1200}
                />
              </div>
              <div className="lg:hidden block">
                <Image
                  src="/images/services/success-plus/Mobile/sap-cpi-mob.webp"
                  alt="sap-cpi-mobile image"
                  className="w-full h-full object-cover"
                  priority
                  width={375}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* sap joule section */}
      <section className="custom-container relative lg:mt-[130px] xl:mt-[175px] mt-[68px] 4xl:!pr-[142px] 2xl:!pr-[90px] xl:!pr-[40px] md:!pr-0 max-lg:px-0 ">
        <div className="lg:pl-[59px] lg:pr-[60px] lg:pb-[90px] xl:pb-[138px] px-[36px] bg-[#BEDDFC]">
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[80px] gap-y-[30px]">
            <div className="lg:order-1 order-2 lg:col-span-6 lg:pt-[76px] pb-[52]">
              <h2 className="xl:text-[30px] 4xl:text-[40px] leading-tight text-[22px] font-bold w-[90%] lg:w-full">
                SAP Joule -<div className="font-normal"> AI-Powered HR Assistant for SuccessFactors Leverage AI with SAP Joule - Empowering the Future of HR</div>
              </h2>
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal w-[92%] md:w-[80%] lg:w-full xl:mt-[42px] mt-[26px]">
                Rialtes enables organizations to adopt SAP Joule, the intelligent AI assistant for SAP SuccessFactors.
              </p>
              <h3 className="xl:mt-[31px] mt-[26px] xl:text-[25px] 4xl:text-[30px] leading-tight text-[21px] font-semibold">Capabilities of SAP Joule:</h3>
              <UnorderedList arrName={sapJouleData} ulClassName="4xl:mt-[38px] mt-[22px] w-[94%] lg:w-full 4xl:w-[96%] xl:space-y-[24px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[18px] 4xl:text-[20px] leading-tight text-[16px] font-semibold" />
            </div>
            <div className="lg:order-2 order-1 lg:col-span-6 max-lg:pt-[45px]">
              <div className="lg:block hidden h-full w-full lg:mt-[-60px]">
                <Image
                  src="/images/services/success-plus/sap-desk.webp"
                  alt="sap-desktop image"
                  className="w-full h-full object-cover"
                  priority
                  width={630}
                  height={1200}
                />
              </div>
              <div className="lg:hidden block">
                <Image
                  src="/images/services/success-plus/Mobile/sap-mob.webp"
                  alt="sap-mobile image"
                  className="w-full h-full object-cover"
                  priority
                  width={375}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
        {/* blue box */}
        <div className="lg:mt-[-60px]">
          <div className="xl:py-[39px] xl:px-[54px] py-[27px] px-[36px] bg-[#068EDA] text-white lg:w-fit">
            <h4 className="xl:text-[24px] 4xl:text-[26px] 2xl:text-[24px] leading-tight text-[18px] font-normal">Rialtes customizes and fine-tunes Joule to align with your HR needs.</h4>
          </div>
        </div>
      </section>
      {/* extend sap section */}
      <section className="custom-container relative lg:mt-[130px] xl:mt-[175px] mt-[68px] 4xl:!pr-[142px] 2xl:!pr-[90px] lg:!pr-[40px] md:!pr-0 max-lg:px-0">
        <div className="absolute bg-[#E4EAD2] bottom-0 top-0 4xl:w-[120px] 4xl:ml-[-120px] 2xl:w-[90px] 2xl:ml-[-90px] lg:w-[26px] lg:ml-[-26px]"></div>
        <div className="lg:pr-[60px] max-lg:px-[36px] bg-[#E4EAD2] relative">
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] gap-y-[30px]">
            <div className="lg:order-2 order-2 lg:col-span-6 lg:pt-[86px] xl:pb-[68px] pb-[52]">
              <h2 className="xl:text-[30px] 4xl:text-[40px] leading-tight text-[22px] font-bold w-[90%] lg:w-full">
                Extend SAP SuccessFactors with SAP BTP - <div className="font-normal"> Rialtes’ Unmatched Expertise </div>
              </h2>
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal w-[92%] md:w-[80%] lg:w-full xl:mt-[42px] mt-[26px]">
                Rialtes’ strong SAP Business Technology Platform (BTP) competency allows for custom extensions, advanced analytics, and integrations:
              </p>
              <h3 className="xl:mt-[31px] mt-[26px] xl:text-[25px] 4xl:text-[30px] leading-tight text-[21px] font-semibold">Key Integrated Processes:</h3>
              <UnorderedList arrName={extendData} ulClassName="4xl:mt-[38px] mt-[22px] w-[88%] lg:w-full 4xl:w-[96%] xl:space-y-[24px] space-y-[19px] list-disc pl-[20px] lg:pb-[120px]" liClassName="xl:text-[18px] 4xl:text-[20px] leading-tight text-[16px] font-semibold" />
              {/* blue box desktop*/}
              <div className="lg:absolute lg:mt-[-20px] lg:ml-[-20px] mt-[40px] lg:block hidden">
                <div className="xl:py-[39px] xl:px-[54px] py-[27px] px-[36px] bg-[#068EDA] text-white lg:w-fit">
                  <h4 className="xl:text-[20px] 4xl:text-[26px] leading-tight text-[18px] font-normal">Our SAP-certified BTP experts ensure secure, scalable, and compliant extensions that align with enterprise standards.</h4>
                </div>
              </div>
            </div>
            <div className="lg:order-1 order-1 lg:col-span-6 max-lg:pt-[45px]">
              <div className="lg:block hidden h-full w-full lg:mt-[-60px]">
                <Image
                  src="/images/services/success-plus/extend-desk.webp"
                  alt="extend-desktop image"
                  className="w-full h-full object-cover"
                  priority
                  width={630}
                  height={1200}
                />
              </div>
              <div className="lg:hidden block">
                <Image
                  src="/images/services/success-plus/Mobile/extend-mob.webp"
                  alt="extend-mobile image"
                  className="w-full h-full object-cover"
                  priority
                  width={375}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
        {/* blue box mobile */}
        <div className="lg:hidden">
          <div className="xl:py-[39px] xl:px-[54px] py-[27px] px-[36px] bg-[#068EDA] text-white lg:w-fit">
            <h4 className="xl:text-[20px] 4xl:text-[26px] leading-tight text-[18px] font-normal">Our SAP-certified BTP experts ensure secure, scalable, and compliant extensions that align with enterprise standards.</h4>
          </div>
        </div>
      </section>
      {/* related section */}
      <section className="custom-container xl:mt-[205px] lg:mt-[125px] mt-[44px]">
        <h2 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] w-[90%] lg:w-full">
          Related SAP Solutions for End-to-End <div className="md:block hidden" /> Transformation
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 sm:w-[76%] md:w-[84%] lg:w-[70%] md:gap-[34px] gap-y-[20px] xl:mt-[39px] mt-[22px]">
          {relatedData.map((item, ind) => (
            <div
              key={ind}
              className="py-[26px] px-[28px] xl:py-[49px] xl:px-[50px] border border-[#707070]"
            >
              <h3 className="xl:text-[25px] 4xl:text-[30px] leading-tight text-[20px] font-semibold">
                {item.link ? (
                  <Link
                    href={item.link}
                    className="hover:underline"
                  >
                    {item.text}
                  </Link>
                ) : (
                  item.text
                )}
              </h3>
            </div>
          ))}
        </div>
      </section>
      {/* agentchat section */}
      <section className="xl:mt-[115px] mt-[59px] bg-[#184671] xl:pt-[120px] 2xl:pt-[140px] 4xl:pt-[176px] pt-[36px] 2xl:mt-[125px] 4xl:mt-[176px]">
        <div className="custom-container md:pr-0 relative">
          <div className="md:block hidden">
            <Image
              src="/images/services/success-plus/agentchat-desk.webp"
              alt="agentchat-desktop image"
              className="w-full h-full object-cover"
              priority
              width={630}
              height={1200}
            />
          </div>
          <div className="md:hidden block">
            <Image
              src="/images/services/success-plus/Mobile/agentchat-mob.webp"
              alt="agentchat-mob image"
              className="w-full h-full object-cover"
              priority
              width={375}
              height={600}
            />
          </div>
          <div className="md:absolute top-0">
            <div className="bg-[#FFFFFF] xl:pt-[52px] xl:px-[60px] xl:pb-[123px] pt-[30px] px-[26px] pb-[68px] md:w-[40%] md:ml-[48px]">
              <h3 className="xl:text-[36px] 4xl:text-[50px] leading-tight text-[26px] font-light">AgentChat — Empowering HR Conversations on WhatsApp</h3>
              <div className="absolute">
                <Image
                  src="/images/services/success-plus/whatsapp-icon.webp"
                  alt="whatsapp-icon image"
                  className="xl:w-[150px] xl:h-[150px] lg:w-[96px] lg:h-[96px] w-[80px] h-[80px] object-cover xl:mt-[50px] mt-[20px]"
                  priority
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="custom-container xl:mt-[60px] mt-[66px]">
          <div className="grid lg:grid-cols-12 grid-cols-1 text-white lg:gap-[80px] gap-y-[28px]">
            <div className="lg:col-span-6 lg:w-[88%]">
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal w-[90%] lg:w-full">
                AgentChat is a bi-directional WhatsApp conversational app, natively built on Salesforce, and integrates with SAP SuccessFactors to drive better HR service delivery.
              </p>
            </div>
            <div className="lg:col-span-6">
              <h3 className="xl:text-[24px] 4xl:text-[30px] leading-tight text-[18px] font-semibold">Key Features:</h3>
              <UnorderedList arrName={agentData} ulClassName="w-[92%] lg:w-full xl:mt-[37px] mt-[17px] xl:space-y-[27px] space-y-[19px] list-disc pl-[20px]" liClassName="xl:text-[19px] 4xl:text-[20px] leading-tight text-[16px] font-semibold" />
            </div>
          </div>
          <div className="xl:mt-[64px] mt-[49px]">
            <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" btnName="Know More" href="https://www.rialtes.com/products/agentchat" />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="xl:mt-[118px] mt-[48px] xl:mb-[120px] mb-[120px] custom-container text-black">
        <ContactForm title={'Partner with Rialtes for Your SAP SuccessFactors Journey'} subtitle="Whether you are starting fresh, migrating from Workday or ZOHO, or enhancing your current SuccessFactors environment, Rialtes’ SuccessPlus offers the expertise, tools, and methodology to drive real HR transformation." className={'2xl:text-[56px] xl:text-[46px] xl:w-[1000px] 2xl:w-[1200px]  4xl:text-[60px] 4xl:w-[1200px] lg:text-[38px] lg:w-[900px] leading-tight text-[24px]  md:text-[32px] '} />
      </div >
      {/* empowering section */}
      <div className="custom-container bg-[#134874] xl:mt-[92px] mt-[48px] xl:py-[63px] py-[34px] text-white">
        <h2 className="xl:text-[30px] 4xl:text-[50px] leading-tight text-[25px] font-light w-[90%] xl:w-[70%] 2xl:w-[90%]">
          Rialtes — Empowering Enterprises to Lead with SAP SuccessFactors Journey
        </h2>
      </div>
    </div >
  );
}
