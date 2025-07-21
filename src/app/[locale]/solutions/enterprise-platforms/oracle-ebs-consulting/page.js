"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/[locale]/components/Seo";
;
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Script from "next/script";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Oracle EBS Services",
  alternateName: "OracleEBSPlus by Rialtes",
  description:
    "Rialtes offers comprehensive Oracle EBS services through its EBSPlus framework, integrating Kinaxis RapidResponse for supply chain optimization, S&OP, and AI-driven transformation. Services include Oracle EBS implementation, advisory, integration, support, and OCI cloud enablement.",
  url: "https://www.rialtes.com/solutions/enterprise-platforms/oracle-ebs-consulting/",
  provider: {
    "@type": "Organization",
    name: "Rialtes",
    url: "https://www.rialtes.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.rialtes.com/images/homepage/logo.svg",
    },
    sameAs: [
      "https://www.linkedin.com/company/rialtes-technologies-llc/",
      "https://www.youtube.com/@rialtes",
    ],
  },
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "Country",
      name: "United States",
    },
    {
      "@type": "Country",
      name: "Canada",
    },
    {
      "@type": "Country",
      name: "Singapore",
    },
  ],
  serviceType: [
    "Oracle EBS Consulting",
    "Oracle EBS Implementation",
    "Kinaxis RapidResponse Integration",
    "Oracle Cloud Infrastructure (OCI) Migration",
    "Oracle Supply Chain Planning",
    "Sales and Operations Planning (S&OP)",
    "Inventory Optimization",
    "Enterprise Scheduling",
    "Scenario Planning",
    "AI & Data-Driven ERP Transformation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Oracle EBSPlus Offerings",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "License & Advisory Services",
          description:
            "Optimize Oracle EBS and Kinaxis licensing with cost-effective strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Implementation & Design",
          description:
            "End-to-end Oracle EBS implementation using agile and industry best practices.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Quality Assurance & Testing",
          description:
            "Business-aligned QA and testing for smooth, disruption-free go-lives.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Integration & Data Strategy",
          description:
            "Seamlessly connect Oracle EBS, Kinaxis, and third-party platforms.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Post Go-Live Support & Optimization",
          description:
            "Managed services and continuous improvements for Oracle EBS systems.",
        },
      },
    ],
  },
  audience: {
    "@type": "Audience",
    audienceType: [
      "Manufacturing",
      "Healthcare",
      "Retail",
      "Semiconductor",
      "Enterprise IT",
    ],
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.rialtes.com/solutions/enterprise-platforms/oracle-ebs-consulting/",
  },
};
const data = [
  {
    img: "/images/oracle-ebs/20 yrs ERP.svg",
    text: "20+ years of ERP expertise with Fortune 500 clients.",
  },
  {
    img: "/images/oracle-ebs/oracle certify.svg",
    text: "Certified Oracle and Kinaxis partner with real industry insights.",
  },
  {
    img: "/images/oracle-ebs/global delivery.svg",
    text: "Global delivery with localized expertise in India, US, Canada, and Singapore.",
  },
  {
    img: "/images/oracle-ebs/transformation.svg",
    text: "Proven track record of end-to-end Oracle EBS transformations.",
  },
  {
    img: "/images/oracle-ebs/AI approach.svg",
    text: "AI and Data-first approach for future-ready operations.",
  },
];
const InventoryData = [
  {
    title: "Inventory Optimization:",
    points: [
      "Demand-driven inventory strategies to avoid overstocking and stock-outs.",
      "Lot, batch, and serialized inventory tracking for regulated industries.",
      "Integrated warehouse management for real-time inventory visibility.",
    ],
  },
  {
    title: "Enterprise Scheduling:",
    points: [
      "Advanced production scheduling integrated with Oracle EBS Manufacturing.",
      "Capacity constraint management and lead time optimization.",
      "Scenario-based scheduling for predictive production planning.",
    ],
  },
  {
    title: "Real-World Outcomes:",
    points: [
      "Reduced carrying costs and working capital optimization.",
      "Enhanced customer satisfaction through timely fulfillment.",
      "Improved production efficiency and throughput.",
    ],
  },
];
const oracleFeatures = [
  {
    text: "Leverage autonomous database, AI/ML integrations, and serverless architecture.",
  },
  {
    text: "Enable secure and compliant environments for regulated industries.",
  },
  {
    text: "Optimize compute, storage, and networking for global ERP operations.",
  },
  {
    text: "Integrate Oracle EBS with OCI-native solutions for enhanced scalability and performance.",
  },
];
const ebsListItems = [
  {
    bold: "Bringing AI to Oracle EBS",
    text: "for predictive analytics and intelligent automation.",
  },
  {
    bold: "Integrating Kinaxis RapidResponse®",
    text: "for agile supply chain responsiveness.",
  },
  {
    bold: "",
    text: "Cloud-driven cost optimization and performance enhancement.",
    fullBold: true,
  },
  {
    bold: "End-to-end ownership,",
    text: "of the entire Oracle EBS lifecycle — ",
    secondBold: "advisory to support"
  },
];
const keyCapabilitiesData = [
  "Integrated demand, supply, and capacity planning powered by Oracle ASCP and Kinaxis.",
  "Scenario modeling and what-if analysis for proactive risk management.",
  "Supplier collaboration and visibility with Kinaxis-integrated portals.",
  "End-to-end tracking from order to fulfillment with actionable insights."
]
const businessBenefitsData = [
  "Improved forecast accuracy and reduced stock-outs.",
  "Shorter planning cycles and faster response to disruptions.",
  "Optimized inventory and working capital.",
  "Stronger supplier relationships and compliance.",
]
const howWeTransformData = [
  "End-to-end integration of Oracle EBS and Kinaxis for unified planning.",
  "Real-time collaboration between sales, operations, finance, and supply chain teams.",
  "Forecasting, demand shaping, and inventory balancing — on a single platform.",
  "AI-based analytics to drive actionable insights and improve consensus planning.",
]
const outcomeData = [
  "Alignment of demand and supply with corporate goals.",
  "Agility to respond to customer demands and market shifts.",
  "Reduced operational costs and improved service levels.",
]
const endToEndData = [
  "What-if simulations for supply chain disruptions.",
  "Financial impact analysis of operational decisions.",
  "Collaborative scenario planning across stakeholders.",
  "Risk mitigation strategies through proactive modeling.",
]
const realWorldData = [
  "Predictive supply chain and demand forecasting.",
  "AI-powered customer service and order management.",
  "Machine learning algorithms for predictive maintenance.",
  "AI-based risk scoring for supplier and compliance risks.",
]
const aiDrivenData = [
  "Faster decision-making with real-time data.",
  "Reduced operational risks and disruptions.",
  "Higher accuracy in forecasts and financial projections.",
  "Improved customer experiences and faster issue resolution.",
]
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Oracle EBS Consulting Services and Solutions | Rialtes"
        description="Oracle EBS Consulting Services and Solutions by Rialtes' OracleEBS+ deliver smarter ERP performance, increased agility, and innovation-driven business growth."
        canonical="https://www.rialtes.com/solutions/enterprise-platforms/oracle-ebs-consulting/"
      />
      <Script
        id="schema-oracle"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* Header Section */}
      <section className="relative h-[399px] xl:h-[650px] md:h-[600px]">
        {/* Desktop Image */}
        <div className="xl:block hidden">
          <Image
            src="/images/oracle-ebs/oracle header.webp"
            alt="Oracle EBS Services"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Mobile/Tablet Image */}
        <div className="xl:hidden block">
          <Image
            src="/images/oracle-ebs/Header banner Oracle.webp"
            alt="Oracle EBS Services"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Text Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="custom-container text-white mt-20 xl:mt-0">
            <h1 className="text-[18px] xl:text-[24px] font-bold mb-2 leading-tight">
              Oracle EBS Services
            </h1>
            <h2 className="leading-tight 4xl:text-[60px] xl:text-[45px] text-[24px]  md:text-[26px] xl:font-normal mt-5 font-light pr-20 xl:pr-0  xl:w-[35%] 2xl:w-[30%] 4xl:w-[37%] ">
              Modernizing Your Enterprise, End-to-End
            </h2>
          </div>
        </div>
      </section>
      {/* Empower your enterprise with Rialtes section */}
      <section className="xl:py-20 pt-10 pb-5">
        <div className="custom-container">
          <div>
            <h2 className="4xl:text-[40px]  xl:text-[32px] text-[26px] 4xl:w-[89%] 2xl:w-[78%] xl:w-[88%] w-full  xl:pr-0 leading-tight">
              Empower your enterprise with Rialtes’ cutting-edge Oracle EBS
              solutions, backed by deep industry knowledge, certified expertise,
              and end-to-end ownership — from advisory to post-go-live success.
            </h2>
            <div className="xl:grid xl:grid-cols-12 grid-cols-1 mb-8 xl:mt-10  xl:gap-16  flex flex-col-reverse">
              <div className="xl:col-span-7 col-span-12">
                <p className="4xl:text-[22px] xl:text-[18px] text-[16px] leading-tight ">
                  As a certified Oracle and Kinaxis partner, Rialtes offers a
                  powerful combination of Oracle E-Business Suite (EBS) and
                  Kinaxis RapidResponse® services through our flagship “EBSPlus”
                  offering. With global offices across India, United States,
                  Canada, and Singapore, Rialtes is uniquely positioned to drive
                  global Oracle EBS transformations for enterprises in
                  manufacturing, retail, healthcare, semiconductor, and beyond.
                </p>
              </div>
              <div className="xl:col-span-1 col-span-12"></div>
              <div className="xl:col-span-3 col-span-12">
                <Image
                  src="/images/oracle-ebs/oracle EBS logo.webp"
                  alt="Empower your enterprise with Rialtes"
                  priority
                  className="w-[397px] h-[233] xl:mt-[-20px]"
                  width={0}
                  height={0}
                />
              </div>
              <div className="xl:col-span-1 col-span-12"></div>
            </div>
          </div>
        </div>
      </section>
      {/* ebs plus section */}
      <section className="relative">
        <div className="hidden xl:block">
          <Image
            src="/images/oracle-ebs/EBSplus.webp"
            alt="ebs plus section"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/oracle-ebs/Group 465.webp"
            alt="ebs plus section"
            fill
            priority
          />
        </div>
        <div className="custom-container">
          <div className=" flex flex-col text-white relative  xl:py-10 py-6">
            <div className="xl:mt-20 mt-8">
              <h2 className="text-[26px] xl:text-[45px] 4xl:text-[60px] leading-tight">
                EBSPlus
              </h2>
              <div className="grid xl:grid-cols-12 grid-cols-1 items-center xl:mt-5 mt-3">
                <div className="xl:col-span-9 col-span-12">
                  <h2 className="text-[22px] xl:text-[30px] 4xl:text-[42px] xl:font-bold font-medium xl:mt-5 leading-tight ">
                    Your Comprehensive Oracle EBS & Kinaxis Transformation
                    Framework
                  </h2>
                </div>
                <div className="xl:col-span-3 col-span-12"></div>
              </div>
              <div className="grid xl:grid-cols-12 grid-cols-1 items-center xl:mt-8 mt-5">
                <div className="xl:col-span-6 col-span-12">
                  <p className="text-[16px]  xl:text-[18px] 4xl:text-[22px] xl:mt-5 font-light xl:font-normal leading-tight">
                    Rialtes’ EBSPlus is designed to simplify, modernize, and
                    optimize your Oracle EBS journey, delivering seamless
                    business and supply chain operations integrated with Kinaxis
                    for real-time planning and execution.
                  </p>
                </div>
                <div className="xl:col-span-6 col-span-12"></div>
              </div>
              <h3 className="text-[20px] xl:text-[25px] 4xl:text-[30px] leading-tight xl:mt-20 mt-16">
                What EBSPlus Brings to You:
              </h3>
            </div>
          </div>
        </div>
        <div className=" grid xl:gap-10 gap-8  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-black xl:!pr-[142px] relative z-10 custom-container">
          {[
            {
              title: "License & Advisory Services",
              description:
                "Right-size your Oracle EBS and Kinaxis licenses with optimal cost management.",
            },
            {
              title: "End-to-End Implementation & Design",
              description:
                "Industry-best practices, customized workflows, and agile project delivery.",
            },
            {
              title: "Quality Assurance & Testing",
              description:
                "Business-aligned testing to ensure zero-disruption go-lives.",
            },
            {
              title: "Integration & Data Strategy",
              description:
                "Connect Oracle EBS, Kinaxis, and external platforms for seamless business visibility.",
            },
            {
              title: "Post Go-Live Support & Optimization",
              description:
                "Continuous improvement and managed services for ongoing success.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-10 shadow">
              <h3 className="text-[22px] xl:text-[23px]  4xl:text-[24px] font-bold leading-tight">
                {item.title}
              </h3>
              <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] xl:text-lg mt-4 pr-5 xl:pr-10 leading-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Deep Expertise in Oracle EBS section*/}
      <section className="relative h-auto pb-20 xl:h-[1482px] z-0 xl:pb-20 xl:mt-[-60px]">
        <div className="xl:block hidden">
          <Image
            src="/images/oracle-ebs/deep expertise.webp"
            alt="Deep Expertise in Oracle EBS"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/oracle-ebs/OCI.webp"
            alt="Deep Expertise in Oracle EBS"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100vw"
          />
        </div>
        <div className="h-full relative custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-12 items-center text-white">
            <div className="4xl:col-span-9 xl:col-span-8 col-span-12 text-white sm:backdrop-blur-md sm:p-5 xl:p-0 sm:bg-blue-800/30 xl:backdrop-blur-0 xl:bg-transparent">
              <h2 className="xl:mt-32 mt-16 leading-tight 4xl:text-[60px] xl:text-[45px] md:text-[26px] ">
                Deep Expertise in Oracle EBS & Cloud Infrastructure (OCI)
              </h2>
              <p className="4xl:text-[22px] xl:text-[18px] text-[16px] mt-5 leading-tight ">
                With highly certified Oracle EBS and OCI experts, Rialtes
                ensures that your critical workloads and ERP operations are
                secure, scalable, and cloud-ready. Our deep understanding of
                Oracle Cloud Infrastructure (OCI) enables clients to:
              </p>
            </div>
            <div className="xl:col-span-3 col-span-12"></div>
          </div>
          <div className="xl:absolute bottom-[80px] xl:bottom-0  bg-opacity-80 text-white">
            <div className="grid grid-cols-1 md:gap-[50px] md:grid-cols-2 xl:grid-cols-4 xl:pr-[85px] mt-[35rem] xl:mt-0">
              {oracleFeatures.map((item, index) => (
                <div
                  key={index}
                  className={`${index < 3 ? "xl:border-r max-md:border-b" : ""} 
                              ${index === 0 || index === 1 ? "md:border-b lg:border-b" : ""} 
                              xl:border-b-0 
                              border-white/50 
                              flex flex-col 
                              pt-10 
                              pb-10 xl:pb-0 xl:pt-0 
                              pr-10 max-sm:pr-0
                            `} >
                  <p className="4xl:text-[30px] xl:text-[25px] text-[18px] leading-tight font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Thought Leadership: Why Rialtes? section */}
      <section className="relative pb-12 md:pb-[6rem] xl:pb-40 z-0 bg-[#F2F2F2]  xl:mt-0 max-sm:px-0 custom-container">
        <div className="xl:block hidden">
          <Image
            src="/images/oracle-ebs/thought leadership.webp"
            alt="Thought Leadership"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="h-full relative xl:mr-0  ">
          <div className="grid xl:grid-cols-12 grid-cols-1 items-center">
            <div className="xl:col-span-6 col-span-12">
              <div className="pt-20 ">
                <div className="max-sm:px-[36px]">
                  <h2 className="pr-10 xl:pr-0 leading-tight 4xl:text-[60px] 2xl:text-[49px] xl:text-[45px] md:text-[26px] text-[22px]">
                    Thought Leadership: Why Rialtes?
                  </h2>
                  <p className="4xl:text-[22px] xl:text-[18px] text-[16px] mt-5 leading-tight xl:pr-14">
                    Rialtes is not just a technology partner — we are business
                    transformation leaders. Our industry-driven accelerators,
                    AI-infused solutions, and agile methodologies ensure that
                    clients experience real, measurable value from their Oracle
                    EBS investments.
                  </p>
                </div>
                {/* Mobile Image */}
                <div className="block xl:hidden relative w-full h-[400px] sm:px-0 custom-container md:h-[900px] mt-8">
                  <Image
                    src="/images/oracle-ebs/TL (1).webp"
                    alt="Thought Leadership"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                  />
                </div>
                <div className="max-sm:px-[36px]">
                  <h3 className="4xl:text-[30px] xl:text-[26px] text-[22px] font-bold mt-10 md:mt-16 xl:mt-8">
                    Our Thought Leadership Pillars:
                  </h3>
                  <ul className="list-disc xl:space-y-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight pl-5 marker:font-bold marker:text-2xl mt-4 4xl:w-[94%]">
                    {ebsListItems.map((item, index) => (
                      <li key={index} className={`${index === 0 ? "mt-5" : ""}`}>
                        {item.fullBold ? (
                          <span className="font-bold">{item.text}</span>
                        ) : (
                          <>
                            <span className="font-bold">
                              {item.bold}
                            </span>
                            {""} {item.text}
                            {item.secondBold &&
                              <span className="font-bold">
                                {item.secondBold}
                              </span>
                            }
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12"></div>
          </div>
        </div>
      </section>
      {/* Supply Chain Planning section */}
      <section className="pb-20  z-0 mt-10 xl:mt-0">
        <div className=" h-full relative custom-container xl:!pr-0">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20">
            <div className="xl:col-span-4 col-span-12">
              <Image
                src="/images/oracle-ebs/supply chain.webp"
                width={0}
                height={0}
                priority
                sizes="100vw"
                className="xl:h-[850px] h-[398px] md:h-[550px] w-full xl:w-[532px] xl:mt-[-80px] object-cover"
                alt="Supply Chain Planning with Oracle EBS and Kinaxis image"
              />
            </div>
            <div className="xl:col-span-7 col-span-12">
              <h2 className=" xl:mt-20 mt-16 leading-tight 4xl:text-[60px] xl:text-[44px] md:text-[26px]">
                Supply Chain Planning
              </h2>
              <h2 className="4xl:text-[40px] xl:text-[28px] text-[22px] xl:font-bold font-medium mt-5 leading-tight">
                Future-Proofing with Oracle EBS & Kinaxis
              </h2>
              <p className="4xl:text-[22px] xl:text-[18px] text-[16px]  mt-5 leading-tight ">
                In today’s volatile markets, supply chain agility is
                non-negotiable. Rialtes helps enterprises optimize and
                future-proof their supply chains using Oracle EBS Supply Chain
                modules enhanced with Kinaxis RapidResponse® for real-time S&OP
                (Sales & Operations Planning).
              </p>
              <div className="grid xl:grid-cols-2 md:grid-cols-2 xl:gap-16 gap-10 mt-10">
                <div>
                  <h3 className="text-[20px] xl:text-[24px] 4xl:text-[28px] leading-tight text-[#006CBC] font-bold">
                    Key Capabilities:
                  </h3>
                  <UnorderedList arrName={keyCapabilitiesData} ulClassName="list-disc xl:space-y-5 pl-5 xl:mt-5 mt-3 marker:font-bold marker:text-2xl leading-tight" liClassName=" text-[16px] xl:text-[18px] 4xl:text-[20px]" />
                </div>
                <div>
                  <h3 className="text-[20px] xl:text-[24px] 4xl:text-[28px] leading-tight text-[#006CBC] font-bold">
                    Business Benefits:
                  </h3>
                  <UnorderedList arrName={businessBenefitsData} ulClassName="list-disc xl:space-y-5 xl:mt-5 mt-3 leading-tight pl-5 marker:font-bold marker:text-2xl" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sales and Operations Planning section*/}
      <section className="relative h-auto pb-10 xl:pb-0 xl:h-[1205px] xl:overflow-hidden xl:mt-0">
        {/* Desktop Image */}
        <div className="xl:block hidden">
          <Image
            src="/images/oracle-ebs/sales planning.webp"
            alt="Sales and Operations Planning"
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            sizes="100vw"
          />
        </div>
        {/* Mobile Image */}
        <div className="xl:hidden block relative w-full h-[415px]">
          <Image
            src="/images/oracle-ebs/Sales and Operations Planning.webp"
            alt="Sales and Operations Planning"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative xl:absolute 4xl:mx-[280px] 2xl:mx-[140px] xl:mx-[80px] xl:bottom-0 left-0 right-0 bg-[#005B9D] bg-opacity-90 text-white p-[35px] xl:p-16">
          <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
            Sales and Operations Planning
          </h2>
          <h3 className="mt-2 text-[22px] xl:text-[30px] 4xl:text-[40px] font-bold">
            Smarter, Faster, Integrated
          </h3>
          <div className="grid grid-cols-12 items-center">
            <div className="xl:col-span-7 col-span-12">
              <p className="mt-5 4xl:text-[22px] xl:text-[18px] text-[16px]  leading-tight">
                With Rialtes, Sales and Operations Planning (S&OP) becomes a
                dynamic, collaborative process that adapts to market changes in
                real-time.
              </p>
            </div>
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1 md:grid-cols-2 xl:mt-[65px] xl:gap-20 xl:pr-[138px]">
            <div className="xl:col-span-6 col-span-12 md:col-span-1 mt-10 xl:mt-0">
              <h3 className="4xl:text-[30px] xl:text-[28px] text-[24px] font-medium leading-tight">
                How We Transform S&OP:
              </h3>
              <UnorderedList arrName={howWeTransformData} ulClassName="list-disc xl:space-y-5 xl:mt-5 mt-3 pl-5 marker:font-bold marker:text-2xl leading-tight" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
            </div>
            <div className="xl:col-span-6 col-span-12 md:col-span-1 mt-10 xl:mt-0">
              <h3 className="4xl:text-[30px] xl:text-[28px] text-[24px] font-medium leading-tight">
                The Outcome:
              </h3>
              <UnorderedList arrName={outcomeData} ulClassName="list-disc xl:space-y-5 pl-5 xl:mt-5 mt-3 marker:font-bold marker:text-2xl leading-tight" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
            </div>
          </div>
        </div>
      </section>
      {/* Inventory Optimization & Enterprise Scheduling section */}
      <section>
        <div className="xl:mt-0 h-auto custom-container xl:gap-16 xl:!pr-0">
          <div className="flex xl:flex-row flex-col xl:gap-16">
            <Image
              src="/images/oracle-ebs/inventory.webp"
              alt=" Inventory Optimization & Enterprise Scheduling image"
              priority
              className="xl:w-[618px] xl:h-[640] h-[309] w-full object-cover"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="xl:mt-[6rem] xl:pr-[25px]">
              <h2 className="leading-tight mt-10 xl:mt-0 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
                Inventory Optimization & Enterprise Scheduling
              </h2>
              <h3 className="4xl:text-[40px] xl:text-[26px] text-[22px] mt-5 xl:font-bold font-medium  leading-tight">
                Precision Planning with Oracle EBS
              </h3>
              <div className="grid xl:grid-cols-12 grid-cols-1 items-center">
                <div className="2xl:col-span-7 xl:col-span-11">
                  <p className="4xl:text-[22px] xl:text-[18px] text-[16px] mt-5 leading-tight ">
                    Optimizing inventory and managing complex production
                    schedules are critical for businesses with global operations
                    and dynamic supply chains. Rialtes leverages Oracle EBS
                    Inventory and Advanced Supply Chain Planning (ASCP) to
                    enable precision-driven inventory management and scheduling.
                  </p>
                </div>
                <div className="col-span-5"></div>
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1 md:grid-cols-2  mt-10  xl:gap-12 gap-8 xl:pr-[200px] ">
            {InventoryData.map((block, index) => (
              <div key={index} className="xl:col-span-4">
                <h3 className="text-[#006CBC] font-bold leading-tight 4xl:text-[30px] xl:text-[23px] text-[20px]">
                  {block.title}
                </h3>
                <UnorderedList arrName={block?.points} ulClassName="list-disc xl:space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5 leading-tight" liClassName="text-[16px] xl:mt-4 mt-2 xl:text-[18px] 4xl:text-[20px]" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End-to-End Scenario Planning section */}
      <section>
        <div className="bg-[#F2F2F2] mt-20 pb-10 xl:pb-0">
          <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-24 custom-container xl:!pr-0">
            <div className="xl:col-span-7 col-span-12 order-1 xl:order-2">
              <div className="xl:block hidden">
                <Image
                  src="/images/oracle-ebs/scenario planining.webp"
                  width={950}
                  height={600}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  priority
                  sizes="100vw"
                  alt="End-to-End Scenario Planning"
                />
              </div>
              <div className="xl:hidden block">
                <Image
                  src="/images/oracle-ebs/Scenario-Planning-mobile.webp"
                  width={950}
                  height={600}
                  alt="End-to-End Scenario Planning "
                  className="w-full"
                  priority
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="xl:col-span-5 col-span-12 order-2 xl:order-1 pb-20">
              <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[26px] mt-10 xl:mt-0 leading-tight xl:pt-20 4xl:w-[95%] xl:w-[90%] md:w-[85%] w-full pr-10 xl:pr-0">
                End-to-End Scenario Planning
              </h2>
              <h3 className="4xl:text-[40px] xl:text-[30px] text-[22px] mt-5 xl:font-bold font-medium pr-10 xl:pr-0 leading-tight">
                Make Every Business Decision Count
              </h3>
              <p className="4xl:text-[22px] xl:text-[18px] text-[16px] mt-5 leading-tight ">
                Rialtes enables enterprises to model, simulate, and evaluate
                multiple business scenarios using Oracle EBS integrated with
                Kinaxis, ensuring that every business decision is backed by data
                and foresight.
              </p>
              <UnorderedList arrName={endToEndData} ulClassName="mt-5 list-disc xl:space-y-5 pl-5 marker:font-bold marker:text-2xl leading-tight" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
            </div>
          </div>
        </div>
      </section>
      {/* AI & Data-Driven section */}
      <section className="relative pb-16 xl:py-20">
        <div className="lg:block hidden">
          <Image
            src="/images/oracle-ebs/AI transformation.webp"
            alt=" AI & Data-Driven image"
            fill
            priority
          />
        </div>
        <div className="lg:hidden block">
          <Image
            src="/images/oracle-ebs/AI & Data-Driven-mobile.webp"
            alt=" AI & Data-Driven image"
            priority
            style={{ objectFit: "cover", objectPosition: "35% 0%" }}
            width={0}
            height={0}
            className="w-full md:h-[1400px]  h-[1350px]"
          />
        </div>
        <div className="relative custom-container">
          <div className="flex flex-col justify-center text-white ">
            <div className="grid lg:grid-cols-12 grid-cols-1 md:grid-cols-2 items-center lg:mt-[40px] md:mt-0">
              <div className="lg:col-span-8 col-span-12 md:col-span-2 max-lg:absolute max-lg:mr-[36px] bottom-[54px] lg:mt-0">
                <h2 className="pr-10 xl:pr-0 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
                  AI & Data-Driven <br />
                  <span className="block">Transformation for Oracle EBS</span>
                </h2>
                <p className="4xl:text-[22px] xl:text-[18px] text-[16px] leading-tight mt-5  xl:pr-0">
                  AI is redefining how enterprises leverage Oracle EBS for
                  competitive advantage. Rialtes brings AI-driven insights
                  directly into your Oracle EBS workflows:
                </p>
                <div className="flex xl:flex-row md:flex-row flex-col xl:mt-[50px] xl:gap-24 gap-10">
                  <div>
                    <h3 className="4xl:text-[30px] xl:text-[25px] text-[20px] leading-tight xl:font-bold font-medium mt-10 xl:mt-0 xl:pr-0 2xl:pr-10">
                      Real-World AI Applications in Oracle EBS:
                    </h3>
                    <UnorderedList arrName={realWorldData} ulClassName="mt-5 list-disc xl:space-y-5 xl:font-medium font-light pl-5 marker:font-bold marker:text-2xl pr-5 xl:pr-16 leading-tight" liClassName=" 4xl:text-[20px] xl:text-[18px] text-[16px]" />
                  </div>
                  <div className="md:mt-10 xl:mt-0">
                    <h3 className="4xl:text-[30px] xl:text-[25px] text-[20px] xl:font-bold font-medium pr-10 xl:pr-0">
                      Benefits of AI-Driven Oracle EBS:
                    </h3>
                    <UnorderedList arrName={aiDrivenData} ulClassName="mt-5 list-disc xl:space-y-5 pl-5 xl:font-medium font-light marker:font-bold marker:text-2xl pr-8 xl:pr-10 leading-tight" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Rialtes - Oracle EBS Partner of Choice section */}
      <section className="xl:py-20 lg:py-8">
        <div className="mx-[35px] xl:mr-0 custom-container">
          <div>
            <h2 className="4xl:text-[60px] xl:text-[40px] mb-4 md:text-[26px] leading-tight">
              Why Rialtes -
            </h2>
            <h3 className="text-[#000000] mb-8 mt-2 xl:mt-0 xl:font-bold font-medium w-full 4xl:text-[40px] xl:text-[30px] text-[22px] leading-tight pr-10 xl:pr-0">
              Oracle EBS Partner of Choice
            </h3>
            <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 mb-8 mt-16 xl:gap-5 gap-16">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`flex xl:block items-start gap-6 ${index >= 3 ? "xl:mt-16" : ""}`}>
                  <Image
                    src={item.img}
                    alt="Why Rialtes"
                    width={100}
                    height={100}
                    priority
                    className="xl:w-[118px] xl:h-[118px] w-[87px] h-[87px]"
                    sizes="100vw"
                  />
                  <p className="mt-0 xl:mt-5 4xl:text-[20px] xl:text-[19px] text-[18px] xl:w-[60%] font-bold leading-tight">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <div className="xl:mt-0 custom-container text-black pb-20">
        <ContactForm
          title={"Ready to Modernize Oracle EBS for Your Business?"}
          className={
            "xl:max-w-[60rem] font-light pr-10 xl:pr-0 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]"
          }
        />
      </div>
    </div>
  );
}
