"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";
import UnorderedList from "@/app/components/unorderedList";
import Script from "next/script";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "SuccessFactors Implementation Partner",
  "url": "https://www.rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner/",
  "description": "Rialtes offers end-to-end SAP SuccessFactors consulting and implementation services, helping organizations transform HR operations and optimize employee experiences using AI, ML, and analytics.",
  "inLanguage": "en",
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
    "@type": "Service",
    "name": "SAP SuccessFactors Implementation & Consulting",
    "serviceType": "SAP SuccessFactors Implementation, Support, Data Migration, Integration, Employee Central & Payroll",
    "provider": {
      "@type": "Organization",
      "name": "Rialtes",
      "url": "https://www.rialtes.com"
    },
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "Singapore" }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "HR Directors, CHROs, HR Managers, Payroll Leads, IT & HCM Transformation Leaders"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SAP SuccessFactors Services by Rialtes",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SuccessFactors Implementation",
            "description": "End-to-end implementation services across HR Core, Talent, and Analytics modules with SAP-certified preconfigured solutions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SuccessFactors Support",
            "description": "Comprehensive release management, adoption assistance, technical support, and administration for ongoing system optimization."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Modelling and Migration",
            "description": "Align and migrate organizational data using tools and methods tailored for SuccessFactors schemas and requirements."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Integration and Data Management",
            "description": "Maintain high data quality through precise ETL processes and integration strategies for connected HR systems."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Employee Central",
            "description": "Manage organizational structures, employee profiles, and benefits through centralized data for clear reporting and operations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Employee Central Payroll",
            "description": "Modernize global payroll management, improve processing speed, ensure compliance, and reduce manual errors."
          }
        }
      ]
    }
  }
}
const relatedData = [
  "SAP S/4HANA for Finance & Operations.",
  "SAP Ariba for Direct & Indirect Procurement",
  "SAP Concur for Travel & Expense",
  "SAP CPI for Cloud Integrations",
]
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
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="SAP SuccessFactors Consulting and Implementation Partners | Rialtes"
        description="Reimagine HR with a trusted SuccessFactors implementation partner, Rialtes. Unlock AI-powered consulting and automation built for your transformation goals"
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/services/hxm-transformation/successplus-successfactors-implementation-partner/"
      />
      <Script
        id="schema-sucessfactor"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* hero section */}
      <section className="relative h-[470px] sm:h-[640px] lg:h-[650px] overflow-hidden">
        <div className="md:block hidden">
          <Image
            src="/images/services/success-plus/desktop-banner.webp"
            alt="SuccessFactor"
            fill
            style={{ objectFit: "cover", objectPosition: "75% 20%" }}
            priority
          />
        </div>
        <div className="md:hidden block">
          <Image
            src="/images/services/success-plus/Mobile/mobile-banner.webp"
            alt="SuccessFactor"
            fill
            style={{ objectFit: "cover", objectPosition: "75% 20%" }}
            priority
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
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* page description */}
      <section className="custom-container xl:mt-[78px] mt-[51px]">
        <h1 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] md:w-[80%] xl:w-[80%] 4xl:w-[94%] w-[96%]">
          End-to-End SuccessFactors Consulting Services for a Future-Ready Workforce
        </h1>
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-[20px]">
          <div className="lg:col-span-8 col-span-12 order-2 lg:order-1">
            <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] xl:mt-[43px] mt-[20px] font-normal 4xl:w-[90%] w-[96%]">
              At Rialtes, we believe HR is at the center of every organization’s success. Our ‘SuccessPlus’ suite of SAP SuccessFactors services is designed to help organizations transform their human capital management (HCM) strategies, streamline HR processes, and deliver an exceptional employee experience.
              <br /><br />
              As a certified SAP partner with global offices in India, the United States, Canada, and Singapore, Rialtes brings deep industry knowledge, SAP-certified experts, and real-world experience to design, implement, and optimize SAP SuccessFactors solutions tailored to your needs.
            </p>
          </div>
          <div className="lg:col-span-4 col-span-12 lg:my-auto lg:ml-auto order-1 lg:order-2 mt-[40px]">
            <Image
              src="/images/services/success-plus/successfactor-logo-1.jpg"
              alt="SAP Partner Logo"
              width={0}
              height={0}
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
              <span className="xl:text-[34px] 4xl:text-[45px] leading-tight text-[22px] font-semibold">A Full Lifecycle SAP <div className="4xl:mt-[-16px]" /> SuccessFactors Offering</span>
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
            width={0}
            height={0}
          />
        </div>
        <div className="md:hidden block">
          <Image
            src="/images/services/success-plus/Mobile/key-services-mob.webp"
            alt="key-services-mobile image"
            className="w-full h-full object-cover"
            priority
            width={0}
            height={0}
          />
        </div>
      </section>
      {/* workday section */}
      <section className="text-white custom-container xl:mt-[183px] mt-[87px] pt-[50px] xl:pt-[148px] md:bg-[url('/images/services/success-plus/workday-bg-desk.webp')] bg-[url('/images/services/success-plus/Mobile/workday-bg-mob.webp')] bg-cover">
        {/* workday */}
        <>
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[20px] xl:gap-[60px] gap-y-[29px]">
            <div className="lg:col-span-7 3xl:col-span-8 col-span-12 lg:order-1 order-2">
              <h2 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] sm:w-[92%] xl:w-full">
                Workday to SAP SuccessFactors <div className="block lg:hidden" /> Migration - <span className="xl:text-[34px] 4xl:text-[45px] leading-tight text-[22px] font-bold"> <div className="block lg:hidden" />Migrate with Confidence</span>
              </h2>
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-medium xl:mt-[51px] mt-[17px] w-[96%] xl:w-[90%]">
                Organizations seeking to move from Workday to SAP SuccessFactors can rely on Rialtes’ proven methodology to ensure a secure, compliant, and smooth transition.
              </p>
            </div>
            <div className="lg:col-span-5 3xl:col-span-4 col-span-12 lg:order-2 order-1">
              <div className="lg:block hidden h-[180px]">
                <Image
                  src="/images/services/success-plus/workday-desk.webp"
                  alt="workday-desktop image"
                  className="w-full h-full object-cover"
                  priority
                  width={0}
                  height={0}
                />
              </div>
              <div className="lg:hidden block h-[80px] w-[200px] md:h-[120px] md:w-[260px]">
                <Image
                  src="/images/services/success-plus/Mobile/workday-mob.webp"
                  alt="workday-mobile image"
                  className="w-full h-full object-cover"
                  priority
                  width={0}
                  height={0}
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
        </>
        <div className="w-full h-[1px] bg-gray-300"></div>
        {/* zoho */}
        <>
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[20px] xl:gap-[60px] gap-y-[39px] xl:mt-[90px] mt-[60px]">
            <div className="lg:col-span-7 3xl:col-span-8 col-span-12 lg:order-1 order-2">
              <h2 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] sm:w-[92%] xl:w-[92%]">
                ZOHO HR to SAP SuccessFactors <div className="block lg:hidden" /> Migration - <div className="xl:text-[34px] 4xl:text-[45px] leading-tight text-[22px] font-bold">Enterprise-Grade HR Transformation</div>
              </h2>
              <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-medium xl:mt-[51px] mt-[17px] w-[94%] md:w-[80%] lg:w-full">
                Outgrowing ZOHO HR? Rialtes offers end-to-end migration from ZOHO HR to SAP SuccessFactors, enabling a shift to a global, enterprise-grade HR platform.
              </p>
            </div>
            <div className="lg:col-span-5 3xl:col-span-4 col-span-12 lg:order-2 order-1">
              <div className="lg:block hidden h-[180px]">
                <Image
                  src="/images/services/success-plus/zoho-desk.webp"
                  alt="zoho-desktop image"
                  className="w-full h-full object-cover"
                  priority
                  width={0}
                  height={0}
                />
              </div>
              <div className="lg:hidden block h-[80px] w-[200px] md:h-[120px] md:w-[260px]">
                <Image
                  src="/images/services/success-plus/Mobile/zoho-mob.webp"
                  alt="zoho-mobile image"
                  className="w-full h-full object-cover"
                  priority
                  width={0}
                  height={0}
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

        {/* benefits of migrating */}
        <div className="xl:mt-[100px] mt-[63px] bg-[#FFFFFF] py-[40px] px-[24px] xl:py-[83px] md:px-[60px]">
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
                        className="w-[120px] h-[120px] object-cover"
                        priority
                        width={0}
                        height={0}
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
          <div className="xl:col-span-8 col-span-12">
            <h2 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] w-[92%] md:w-[76%] xl:w-[91%]">
              Process-Driven Success with SAP Signavio and SAP Activate Methodology
            </h2>
            <h3 className="xl:text-[34px] 4xl:text-[40px] leading-tight text-[22px] xl:mt-[72px] mt-[26px] font-normal">
              <span className="font-bold">SAP Activate Methodology - </span> <div /> Phased Approach with Rialtes:
            </h3>
          </div>
          <div className="xl:col-span-4 col-span-12">
            <p className="xl:text-[19px] 4xl:text-[22px] leading-tight text-[16px] font-normal w-[96%] md:w-[80%] xl:w-full">
              Rialtes leverages SAP Signavio’s powerful process intelligence combined with SAP Activate Methodology to ensure smooth and efficient implementation of SAP SuccessFactors.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:mt-[120px] mt-[40px] sm:w-[80%] md:w-[90%] xl:w-full 2xl:w-[90%] md:gap-x-[60px] lg:gap-0">
          {
            sapActivateData.map((data, ind) => {
              return (
                <div key={ind} className={`lg:first:py-0 max-lg:border-b max-lg:last:border-0 border-[#B9B9B9] py-[60px] md:py-[40px] lg:py-0 
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
      {/* related section */}
      <section className="custom-container xl:mt-[205px] mt-[44px]">
        <h2 className="xl:text-[40px] 4xl:text-[60px] leading-tight text-[26px] w-[90%] lg:w-full">
          Related SAP Solutions for End-to-End <div className="md:block hidden" /> Transformation
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 sm:w-[76%] md:w-[84%] lg:w-[70%] md:gap-[34px] gap-y-[20px] xl:mt-[39px] mt-[22px]">
          {
            relatedData.map((data, ind) => {
              return (
                <div key={ind} className="py-[26px] px-[28px] xl:py-[49px] xl:px-[50px] border border-[#707070]">
                  <h3 className="xl:text-[25px] 4xl:text-[30px] leading-tight text-[20px] font-semibold">
                    {data}
                  </h3>
                </div>
              )
            })
          }
        </div>
      </section>
      {/* agentchat section */}
      <section className="xl:mt-[177px] mt-[59px] bg-[#184671] xl:pt-[176px] pt-[36px]">
        <div className="custom-container md:pr-0 relative">
          <div className="md:block hidden">
            <Image
              src="/images/services/success-plus/agentchat-desk.webp"
              alt="agentchat-desktop image"
              className="w-full h-full object-cover"
              priority
              width={0}
              height={0}
            />
          </div>
          <div className="md:hidden block">
            <Image
              src="/images/services/success-plus/Mobile/agentchat-mob.webp"
              alt="agentchat-mob image"
              className="w-full h-full object-cover"
              priority
              width={0}
              height={0}
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
                  width={0}
                  height={0}
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
            <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" />
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <div className="xl:mt-[118px] mt-[48px] xl:mb-[92px] mb-[171px] custom-container text-black">
        <ContactForm title={'Partner with Rialtes for Your SAP SuccessFactors Journey'} subtitle="Whether you are starting fresh, migrating from Workday or ZOHO, or enhancing your current SuccessFactors environment, Rialtes’ SuccessPlus offers the expertise, tools, and methodology to drive real HR transformation." className={'2xl:text-[56px] xl:text-[46px] xl:w-[1000px] 2xl:w-[1200px]  4xl:text-[60px] 4xl:w-[1200px] lg:text-[38px] lg:w-[900px] leading-tight text-[24px]  md:text-[32px] '} />
      </div >
    </div >
  );
}