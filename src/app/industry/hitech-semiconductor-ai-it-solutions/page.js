"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import LearnMore from "@/app/components/learnMore";
import Seo from "@/app/components/Seo";
import Link from "next/link";
import Script from "next/script";
import UnorderedList from "@/app/components/unorderedList";
import BreadCrumbs from '@/app/components/BreadCrumbs'
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Semiconductor Industry Digital Transformation and IT Solutions",
  "url": "https://www.rialtes.com/industry/hitech-semiconductor-ai-it-solutions/",
  "description": "Semiconductor industry IT solutions powered by SAP, Salesforce, and AI to optimize chip design, fab operations, compliance, and customer collaboration.",
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
    "name": "Semiconductor Industry Digital Transformation and IT Solutions",
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "Singapore" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Semiconductor Digital Transformation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SAP S/4HANA for Semiconductor",
            "description": "Streamline fab operations, yield management, and supply chain compliance with SAP S/4HANA."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Salesforce Industry Cloud for Semiconductor",
            "description": "Enable deal registration, partner collaboration, and customer support with Salesforce Industry Cloud."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Powered Chip Design & Testing",
            "description": "Leverage AI for RTL verification, defect prediction, yield optimization, and post-silicon validation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Semiconductor Supply Chain Visibility",
            "description": "Improve demand forecasting and logistics efficiency with real-time supply chain insights and AI models."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Compliance and Certification Automation",
            "description": "Automate RoHS, REACH, ITAR, and Conflict Minerals compliance across global operations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Partner Relationship Management (PRM)",
            "description": "Enhance semiconductor partner ecosystems with deal tracking, pricing, and co-design portals."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Integrated SAP & Salesforce Platforms",
            "description": "Enable unified data visibility and faster decision-making with integrated SAP and Salesforce workflows."
          }
        }
      ]
    }
  }
}
const thoughtData = [
  "Fab process integration with enterprise systems for yield, cost, and quality control.",
  "Managing complex compliance, datasheet generation, and safety certifications across global markets.",
  "Enabling contract manufacturing, packaging, testing, and supply chain orchestration.",
  "AI-driven design, validation, and production optimization across the semiconductor lifecycle.",
]
const endToEndData = [
  {
    title: "Customer Specification and Initial Design",
    desc: "The journey starts with customer technical requirements, datasheets, and regulatory specifications. Companies require:",
    dataList: [
      "Robust customer specification management platforms.",
      "Configuration, design, and engineering collaboration systems.",
      "Integration of compliance and certification standards (RoHS, REACH, CE)."
    ]
  },
  {
    title: "Fab-based Processes and Foundry Management",
    desc: "We support semiconductor foundries and IDMs (Integrated Device Manufacturers) to streamline fab processes:",
    dataList: [
      "Wafer fabrication aligned with process node targets (e.g., 3nm, 5nm).",
      "Managing mask set creation, fab scheduling, and yield optimization.",
      "Integration of Bluetooth, PCI-Express, Cellular, IEEE 1588, Wi-Fi, and other IP-based standards.",
      "Real-time process data capture and analysis for quality and cost optimization."
    ]
  },
  {
    title: "Design, Verification & Validation (V&V)",
    desc: "",
    dataList: [
      "Full EDA tool integration for RTL, layout, and post-silicon validation. ",
      "Tape-out readiness and DRC/LVS checks.",
      "Managing compliance to datasheets, safety certifications, and testing protocols.",
      "AI-enabled defect analysis and yield prediction."
    ]
  },
  {
    title: "Assembly, Packaging, and Testing (APT)",
    desc: "",
    dataList: [
      "Chiplet and advanced packaging (2.5D, 3D IC) design support.",
      "Process for wire-bonding, flip-chip, wafer-level packaging.",
      "End-to-end final testing, validation, and defect classification."
    ]
  },
  {
    title: "Contract Manufacturing and External Foundry Collaboration",
    desc: "",
    dataList: [
      "Managing contract manufacturers (CMs) and foundry partners.",
      "Integrating demand, production orders, logistics, and compliance.",
      "Deal registration and design-win tracking for customer-specific chips."
    ]
  },

]
const semiconductorFoundryData = [
  "Foundry outsourcing and wafer supply chain visibility.",
  "Assembly and test service provider (ATSP) integration.",
  "Managing supply risks, quality control, and compliance across partners.",
  "Real-time insights into production cycle times and capacity.",
]
const commonSectionData = [
  {
    title: "SAP S/4 HANA for Semiconductor Manufacturing Excellence",
    desc: "SAP S/4 HANA serves as a centralized, intelligent ERP backbone for semiconductor companies looking to streamline fab operations, foundry collaboration, and assembly/test processes, while ensuring financial and regulatory compliance.",
    keyData: [
      "Comprehensive supply chain and wafer production management integrated with real-time shop floor data from fabs and foundries.",
      "Material traceability and lot genealogy tracking for semiconductor wafers, dies, substrates, and packaging.",
      "Yield tracking and quality control analytics embedded into every step of the manufacturing cycle, from mask sets to finished ICs. ",
      "Regulatory compliance automation covering global mandates (RoHS, REACH, export controls, and ITAR).",
      "Costing, profitability, and revenue recognition linked directly to production yields, customer-specific agreements, and volume pricing models.",
      "Warranty, return, and service management for both B2B and B2C semiconductor products, including support for long lifecycle components."
    ],
    mobImg: "/images/industry/semi-conductor/Mobile/sap-s4hana-mob.webp",
    deskImg: "/images/industry/semi-conductor/sap-s4hana-desk.webp"
  },
  {
    title: "Salesforce Industry Cloud for Semiconductor Customer and Partner Engagement",
    desc: "Salesforce Industry Cloud, tailored for semiconductor companies, enables customer-facing teams to seamlessly manage design wins, customer requirements, and long-term technical partnerships, bringing agility and visibility to every customer interaction.",
    keyData: [
      "End-to-end deal registration, opportunity, and design-win management to track customer-specific engagements and custom chip development projects.",
      "Partner relationship management (PRM) for managing channel partners, distributors, and foundries — all aligned to engineering and sales cycles.",
      "Customer-specific pricing, rebate, and incentive programs management integrated with ERP and manufacturing data.",
      "Customer support, RMA, and technical service case management, including escalation tracking and AI-based service analytics.",
      "Intelligent forecasting and demand planning driven by customer engagement insights and AI/ML analysis of sales pipelines and design pipelines."
    ],
    mobImg: "/images/industry/semi-conductor/Mobile/salesforce-mob.webp",
    deskImg: "/images/industry/semi-conductor/salesforce-desk.webp"
  },
  {
    title: "Unified SAP and Salesforce Integration",
    subtitle: "A 360° View of Semiconductor Operations",
    desc: "Combining SAP S/4 HANA and Salesforce Industry Cloud, Rialtes delivers an integrated view of product, customer, and operational data — breaking down silos between engineering, manufacturing, sales, and finance teams.",
    keyData: [
      "Faster new product introductions (NPIs) through collaborative design-to-delivery management.",
      "Accurate demand forecasting and production alignment based on real-time customer opportunities and confirmed design wins.",
      "Enhanced customer satisfaction and loyalty through proactive service, transparent lead times, and custom order fulfillment.",
      "Streamlined compliance and audit readiness, covering everything from environmental certifications to export licenses.",
      "End-to-end visibility from customer spec to wafer production, assembly, and final shipment, ensuring responsiveness and risk mitigation."
    ],
    mobImg: "/images/industry/semi-conductor/Mobile/unified-mob.webp",
    deskImg: "/images/industry/semi-conductor/unified-desk.webp"
  },
]
const keyAreasData = [
  {
    title: "AI-Powered Chip Design & Verification",
    desc: "Designing next-generation semiconductor chips (like AI processors, GPUs, automotive-grade chips, or 5G ICs) requires managing billions of transistors with extreme precision. AI and ML are now embedded in EDA (Electronic Design Automation) tools to automate design rule checks, power optimization, and floor planning.",
    realWorldData: [
      "Faster RTL verification and error prediction, reducing time from design to tape-out.",
      "Automated layout and power optimization, reducing chip size and energy consumption.",
      "Detecting design rule violations early, minimizing costly redesigns."
    ],
    mobImg: "/images/industry/semi-conductor/Mobile/ai-powered-mob.webp",
    deskImg: "/images/industry/semi-conductor/ai-powered-desk.webp"
  },
  {
    title: "Predictive Yield Management & Fab Operations Optimization",
    desc: "AI models analyze terabytes of sensor and equipment data from fabs to predict yield issues before wafers are scrapped, optimizing production. AI helps identify equipment drifts, particle contamination, and recipe anomalies to improve overall equipment effectiveness (OEE).",
    realWorldData: [
      "Predictive failure detection for fab tools to prevent downtime.",
      "AI models predicting wafer yields based on real-time fab data, reducing production losses.",
      "Automated root cause analysis (RCA) for yield drops, shortening investigation time."
    ],
    mobImg: "/images/industry/semi-conductor/Mobile/predictive-mob.webp",
    deskImg: "/images/industry/semi-conductor/predictive-desk.webp"
  },
  {
    title: "AI-Driven Supply Chain and Demand Forecasting",
    desc: "With global chip shortages and supply chain disruptions, AI helps predict demand fluctuations, lead times, and sourcing risks. AI-powered platforms analyze global supply/demand signals, customer forecasts, and logistics bottlenecks to optimize production and inventory.",
    realWorldData: [
      "Accurate forecasting of demand for specific chip models using AI on customer and market data.",
      "Risk mitigation through AI-led supplier risk monitoring and dual sourcing strategies.",
      "Dynamic production scheduling and fab capacity planning based on AI demand forecasts."
    ],
    mobImg: "/images/industry/semi-conductor/Mobile/ai-supply-mob.webp",
    deskImg: "/images/industry/semi-conductor/ai-supply-desk.webp"
  },
  {
    title: "AI for Test, Validation, and Post-Silicon Debug",
    desc: "Testing complex chips (like AI chips or automotive-grade ICs) generates massive data sets. AI analyzes this data to identify patterns, detect anomalies, and improve test coverage while reducing cycle times.",
    realWorldData: [
      "AI-driven adaptive test strategies reduce test time without compromising quality.",
      "Early identification of systematic defects and design-for-test (DFT) optimization.",
      "Anomaly detection in silicon validation, speeding up debug cycles for first-silicon success."
    ],
    mobImg: "/images/industry/semi-conductor/Mobile/ai-test-mob.webp",
    deskImg: "/images/industry/semi-conductor/ai-test-desk.webp"
  },
]
const summaryData = [
  "Accelerates chip design and reduces tape-out risks.",
  "Increases fab yield and reduces downtime, saving millions in production losses.",
  "Optimizes supply chains and reduces exposure to global risks.",
  "Enhances customer relationships and accelerates time-to-revenue through smarter sales enablement.",
  "Improves final product quality through intelligent testing and validation."
]
const keyPillarsData = [
  {
    id: 1,
    title: "Empowering Channel Partners with Salesforce Experience Cloud",
    desc: "Salesforce Experience Cloud, combined with PRM, enables partners, distributors, and resellers to register deals in real-time, track opportunities, and collaborate directly with sales and engineering teams — all through a secure, branded partner portal.",
    dataList: [
      "Streamlined deal registration process with guided forms, automated workflows, and transparent approval cycles.",
      "Real-time visibility into registered opportunities, reducing channel conflicts and overlaps.",
      "Partner self-service access to critical sales assets — datasheets, product roadmaps, technical support, and pricing.",
      "AI-driven opportunity scoring to prioritize high-potential deals and allocate resources intelligently.",
    ]
  },
  {
    id: 2,
    title: "Enhancing Customer Co-Design & Technical Collaboration",
    desc: "In the semiconductor industry, customer design cycles are collaborative and require tight integration between customers, sales teams, and design engineers. Through Experience Cloud, companies can create secure customer portals where customers can submit design requirements, track design validation progress, and collaborate on engineering issues.",
    dataList: [
      "Centralized customer collaboration for reference designs, datasheet requests, and application engineering support. ",
      "AI-assisted recommendations for similar use-cases, product compatibility, and design reuse.",
      "Direct communication and escalation with internal design teams and field application engineers (FAEs).",
      "Secure sharing of sensitive technical information like simulation models, characterization data, and compliance certifications.",
    ]
  },
  {
    id: 3,
    title: "Automated Deal Governance and Compliance",
    desc: "Managing global semiconductor deals means complying with export regulations, trade compliance, and IP protection policies. Salesforce automates these processes with rule-based workflows and audit trails ensuring every registered deal complies with regulatory requirements.",
    dataList: [
      "Automated compliance checks for export controls (EAR, ITAR), IP licensing, and NDAs. ",
      "End-to-end visibility and auditability of deal registration and approval processes.",
      "Integrated risk management to prevent IP leakage and enforce customer segmentation policies.",
    ]
  },
  {
    id: 4,
    title: "Data-Driven Intelligence with AI & Analytics",
    desc: "Using Salesforce AI (Einstein GPT) and Tableau, semiconductor companies gain deep insights into partner performance, deal conversion rates, and customer buying patterns. AI models can score registered deals, recommend upsell opportunities, and predict at-risk opportunities — driving proactive sales strategies.",
    dataList: [
      "Predictive analytics for deal closure probability, helping sales prioritize high-value accounts.",
      "Insights into partner performance with metrics like conversion rates, average deal size, and win/loss analysis.",
      "AI-driven product recommendations based on customer design profiles and previous engagements.",
      "Visual dashboards for leadership, enabling strategic decisions on partner programs, product roadmaps, and regional focus.",
    ]
  },
  {
    id: 5,
    title: "Frictionless Quoting and Pricing Collaboration",
    desc: "Semiconductor deals often require custom pricing, volume discounts, and contract negotiations. By integrating Salesforce CPQ (Configure, Price, Quote) into the partner portal, Rialtes enables partners and internal teams to collaborate on real-time quoting, accelerating the path to PO (Purchase Order).",
    dataList: [
      "Automated quote generation and configuration based on product catalogs and customer requirements.",
      "Approval workflows for pricing exceptions, special terms, and strategic deals.",
      "Visibility into available inventory, lead times, and alternative product recommendations.",
    ]
  },
]
const endSemiconductorData = [
  "Faster deal cycles and reduced time to market for new design wins.",
  "Increased partner satisfaction and deeper partner engagement. ",
  "Improved revenue predictability through AI-driven deal intelligence. ",
  "Regulatory and IP compliance assurance throughout the deal lifecycle.",
  "Tight integration of engineering and sales collaboration, ensuring technical accuracy and customer satisfaction.",
]
const rialtesData = [
  "20+ years of real semiconductor industry experience.",
  "Fortune 500-level process and technology expertise.",
  "SAP & Salesforce certified experts with deep semiconductor solutions knowledge.",
  "AI and Data-first approach for competitive advantage.",
  "Proven track record in delivering complex, large-scale transformation."
]
const strategicData = [
  {
    id: '1',
    title: "Supply Chain and Capacity Constraints",
    dataList: [
      "Volatile demand and limited fab capacities.",
      "Shortages in substrates, packaging, and test availability.",
      "Difficulty in managing multi-tier supplier networks.",
    ]
  },
  {
    id: '2',
    title: "Regulatory and Compliance Complexity",
    dataList: [
      "Global mandates such as RoHS, REACH, Conflict Minerals, ITAR, and Export Controls.",
      "Difficulty in maintaining compliant datasheets and certifications.",
      "Need for traceability and audit-ready documentation.",
    ]
  },
  {
    id: '3',
    title: "Product Lifecycle and Time-to-Market Pressure",
    dataList: [
      "Rapid evolution of standards (PCIe, Wi-Fi, Bluetooth, 5G, IEEE 1588).",
      "Shortening design cycles and need for faster prototype-to-production transitions.",
      "Customer-specific modifications and deal-based designs needing rapid adaptation.",
    ]
  },
  {
    id: '4',
    title: "Complex Contract Manufacturing and Testing Ecosystem",
    dataList: [
      "Managing multi-party manufacturing and testing.",
      "Ensuring IP security and quality compliance.",
      "Aligning ERP, PLM, and partner networks in real-time.",
    ]
  },
]
const keyReasonsData = [
  {
    id: "1",
    title: "20+ Years of Semiconductor Domain Experience — Industry-Aligned, Actionable Solutions",
    mobImg: "/images/industry/semi-conductor/Mobile/20yrssemiconductor-mob.webp",
    deskImg: "/images/industry/semi-conductor/20yrssemiconductor-desk.webp",
    desc: "Rialtes has built a reputation working closely with some of the world’s largest semiconductor brands to modernize their business processes. We understand the unique complexity of semiconductor value chains — from wafer fabrication, IC design, and testing, to contract manufacturing, and IP licensing.",
    dataList: [
      "Practical knowledge of fabless and foundry models",
      "Deep understanding of NPI (New Product Introduction), tape-out, and design-to-silicon processes",
      "Experience with complex supply chain, yield management, and IP security",
      "Aligned to industry-specific workflows like deal registration, partner co-selling, and compliance"
    ],
    bgColor: "#E7F0F7"
  },
  {
    id: "2",
    title: "Business Process Experts with Fortune 500 Project Expertise",
    mobImg: "/images/industry/semi-conductor/Mobile/business-mob.webp",
    deskImg: "/images/industry/semi-conductor/business-desk.webp",
    desc: "Our consultants and architects are not just technologists — they are semiconductor business process experts with real-world expertise driving transformation projects in Fortune 500 semiconductor firms. We understand what it takes to make SAP & Salesforce work for complex, global, multi-stakeholder environments.",
    dataList: [
      "End-to-end advisory on streamlining design-win processes, deal management, and supply chain",
      "Bringing best practices from top semiconductor companies into every project we deliver",
      "Experts in both front-end processes (customer, sales, engineering) and back-end (manufacturing, logistics, finance)",
      "Capability to bridge gaps between engineering, operations, and sales teams through smart platforms",
    ],
    bgColor: "#EDDACD"
  },
  {
    id: "3",
    title: "Proven SAP S/4 HANA & Salesforce Integration for Semiconductor",
    mobImg: "/images/industry/semi-conductor/Mobile/proven-mob.webp",
    deskImg: "/images/industry/semi-conductor/proven-desk.webp",
    desc: "Rialtes delivers fully integrated SAP and Salesforce solutions tailored for semiconductor processes — enabling seamless information flow from the customer to the fab floor and back. Our approach ensures one version of truth across sales, engineering, and operations, reducing errors, improving collaboration, and driving faster time to market.",
    dataList: [
      "Integrated deal registration and quoting directly linked to SAP order management",
      "Real-time integration of Salesforce design collaboration portals with SAP product master and supply chain",
      "Optimized finance and compliance processes for high-value deals, IP protection, and export controls",
      "AI-enabled data models combining Salesforce and SAP datasets for predictive sales and supply chain intelligence",
    ],
    bgColor: "#D7F4F2"
  },
  {
    id: "4",
    title: "AI-Driven Approach with Data at the Core",
    mobImg: "/images/industry/semi-conductor/Mobile/ai-approach-mob.webp",
    deskImg: "/images/industry/semi-conductor/ai-approach-desk.webp",
    desc: "In today’s semiconductor landscape, data and AI play a pivotal role in everything from demand planning to engineering collaboration and partner management. Rialtes combines AI, analytics, and automation across Salesforce and SAP platforms to empower semiconductor companies with data-driven decision-making.",
    dataList: [
      "Predictive deal scoring and partner performance insights",
      "Yield optimization and supply chain planning using AI-based forecasting",
      "AI-driven compliance and risk monitoring in real-time for global deals",
      "AI models to identify upsell and cross-sell opportunities in customer design cycles",
    ],
    bgColor: "#CAE1ED"
  },
  {
    id: "5",
    title: "Agile, End-to-End Delivery: Advisory to Post-Go-Live Success",
    mobImg: "/images/industry/semi-conductor/Mobile/agile-mob.webp",
    deskImg: "/images/industry/semi-conductor/agile-desk.webp",
    desc: "What sets Rialtes apart is our commitment to end-to-end ownership — from initial advisory, process design, system implementation, to post-go-live support and continuous optimization. We work as a true partner, not just an implementer.",
    dataList: [
      "Pre-built accelerators for semiconductor-specific SAP & Salesforce processes",
      "Agile and collaborative project delivery models aligned to semiconductor release cycles",
      "Post-go-live managed services to optimize system performance and user adoption",
      "Business and technical user training for seamless transformation adoption",
    ],
    bgColor: "#EFF0D5"
  },
]
export default function Page() {
  return (
    <section className="min-h-screen bg-white">
      <Seo
        title="Semiconductor Industry: Digital Solutions That Scale | Rialtes"
        description=" Explore semiconductor industry IT solutions with SAP and Salesforce to streamline chip design, testing, partner collaboration, and customer engagement."
        canonical="https://www.rialtes.com/industry/hitech-semiconductor-ai-it-solutions/"
      />
      <Script
        id="schema-hitech"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* breadcrumb schema */}
      <BreadcrumbSchema
        currPage="Semiconductor"
      />
      {/* herosection */}
      <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px] ">
        <div className="hidden md:block">
          <Image
            src="/images/industry/semi-conductor/hero-banner-desk.webp"
            alt="desktop banner"
            fill
            style={{ objectFit: "cover", objectPosition: "55% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/industry/semi-conductor/Mobile/hero-banner-mob.webp"
            alt="mobile banner"
            fill
            style={{ objectFit: "cover", objectPosition: "5% 20%" }}
            priority
          />
        </div>
        <div className="relative h-full custom-container flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12">
              <h1 className="text-[#FFFFFF] text-[18px] md:text-[24px] font-bold lg:w-full">
                Semiconductor Industry
              </h1>
              <h2 className="text-[#FFFFFF] text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px] w-[71%] sm:w-full">
                Empowering <div className="sm:block hidden" /> Semiconductor Innovation <div className="sm:block hidden" /> with End-to-End Digital <div className="sm:block hidden" /> Transformation
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb */}
      <div className="custom-container">
        <BreadCrumbs currPage="Semiconductor" />
      </div>
      {/* page description section */}
      <section className="custom-container xl:mt-[110px] mt-[62px]">
        <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[56px] lg:w-[80%] xl:w-full">
          Powering Semiconductor Innovation with Intelligent Enterprise Solutions
        </h2>
        <p className="xl:text-[22px] text-[16px] leading-tight lg:w-[80%] 4xl:w-[70%] w-[90%] font-normal mt-8">
          The semiconductor industry is evolving fast, driven by AI, IoT, and global supply chain demands. Rialtes helps semiconductor companies stay ahead with SAP and Salesforce-powered solutions that streamline design, production, compliance, and customer collaboration.
          <br /><br />
          As a certified consulting partner, we deliver end-to-end services across advisory, implementation, integration, and post-go-live support.
        </p>
      </section>
      {/* section thought leadership */}
      <section className="custom-container max-lg:px-0 lg:pl-0 lg:mt-[110px] xl:mt-[141px] mt-[33px]">
        <div className="grid lg:grid-cols-12 grid-cols-1">
          <div className="lg:col-span-7 xl:col-span-6 4xl:col-span-7 col-span-12 my-auto">
            <div className="hidden md:block">
              <Image
                src="/images/industry/semi-conductor/thought-desk.webp"
                alt="thought desktop image"
                height={0}
                width={0}
                priority
                className="lg:h-[600px] xl:h-[800px] w-full object-cover"
              />
            </div>

            {/* Mobile Image */}
            <div className="block md:hidden">
              <Image
                src="/images/industry/semi-conductor/Mobile/thought-mob.webp"
                alt="thought mobile image"
                height={0}
                width={0}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5 xl:col-span-6 4xl:col-span-5 col-span-12 bg-[#006FBE] text-[#ffffff] xl:pt-[73px] xl:pb-[84px] xl:px-[50px] pt-[29px] pb-[67px] px-[26px] max-lg:mx-[36px] max-lg:mt-[-110px]">
            <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[56px]">
              Thought Leadership
            </h2>
            <h3 className="xl:text-[30px] 4xl:text-[36px] text-[22px] font-semibold xl:mt-[27px] mt-[14px] w-[90%] lg:w-full">
              Digital and AI-Powered Future for Semiconductors
            </h3>
            <p className="xl:text-[18px] 4xl:text-[20px] text-[16px] leading-tight xl:mt-[27px] mt-[14px] font-normal w-[90%] lg:w-full">
              At Rialtes, we bring deep semiconductor process knowledge and best-in-class technology platforms to address the unique needs of the industry, including:
            </p>
            <UnorderedList arrName={thoughtData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[61px] mt-[24px] pl-[20px] 4xl:w-[96%] w-[90%] lg:w-full" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal" />
            <p className="xl:text-[18px] 4xl:text-[20px] text-[16px] leading-tight xl:mt-[56px] mt-[26px] font-normal w-[90%] lg:w-full">
              We integrate SAP S/4 HANA, Salesforce Industry Clouds, and AI solutions to enable smarter decision-making, faster time-to-market, and enhanced compliance.
            </p>
            <div className="absolute mt-[20px] xl:mt-[30px]">
              <LearnMore />
            </div>
          </div>
        </div>
      </section>
      {/* end to end section */}
      <section className="custom-container relative 4xl:mt-[80px] xl:mt-[40px] mt-[54px] xl:pt-[119px] pt-[55px] lg:pb-[65px] pb-0
             bg-no-repeat bg-cover bg-[20%_30%] lg:bg-[65%_20%]
             bg-[url('/images/industry/semi-conductor/Mobile/end-to-end-mob.webp')] lg:bg-[url('/images/industry/semi-conductor/end-to-end-desk.webp')]">
        <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] w-[80%] lg:w-full">
          End-to-End Semiconductor Processes
        </h2>
        <p className="xl:text-[30px] 4xl:text-[36px] text-[22px] font-semibold xl:mt-[27px] mt-[17px]">
          Digitally Enabled with Rialtes
        </p>
        <div className="relative grid lg:grid-cols-2 grid-cols-1 xl:mt-[66px] mt-[46.5px] md:w-[80%] lg:w-full xl:w-[98%]">
          {
            endToEndData.map((data, ind) => {
              return (
                <div key={ind} className={`lg:w-[82%] ${ind == 2 && "lg:mt-[-100px]"}`}>
                  <h3 className={`xl:text-[24px] 4xl:text-[30px] text-[18px] leading-tight font-semibold lg:mt-[80px] mt-[40px] w-[90%] lg:w-full ${(ind == 0) && "!mt-0"} ${(ind == 0 || ind == 1) && "lg:!mt-0"} ${(ind == 4) && "xl:!mt-[40px] lg:!mt-0 2xl:!mt-0 4xl:!mt-[80px]"} text-[#0A6BB8]`}>
                    {data.title}
                  </h3>
                  {data.desc && <p className="xl:text-[20px] 4xl:text-[24px] text-[16px] leading-tight font-normal mt-[18px] xl:mt-[40px] w-[90%] lg:w-full">
                    {data.desc}
                  </p>}
                  <UnorderedList arrName={data.dataList} ulClassName="lg:pb-[60px] pb-[40px] xl:space-y-[29px] space-y-[19px] list-disc xl:mt-[40px] mt-[24px] pl-[20px] 4xl:w-[96%] w-[90%] lg:w-full" liClassName="text-[16px] xl:text-[20px] 4xl:text-[24px] leading-tight font-normal" />
                  <div className={`h-[1px] w-full bg-[#707070] ${ind == 3 && "lg:bg-transparent"} ${ind == 4 && "bg-transparent"}`}></div>
                  {ind === 3 && (
                    <div className="hidden lg:block absolute lg:bottom-[60px]">
                      <LearnMore />
                    </div>
                  )}
                  {ind === 4 && (
                    <div className="block lg:hidden max-lg:mt-[25px]">
                      <LearnMore />
                    </div>
                  )}
                </div>
              )
            })
          }
        </div>
      </section>
      {/* semiconductor foundry section */}
      <section className="custom-container max-md:mt-[75px]">
        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[63px]">
          <div className="md:col-span-6 col-span-12 lg:pt-[178px] md:pt-[80px] pt-[33px] md:order-1 order-2">
            <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[52px]">
              Semiconductor Foundry and Outsourced Operations Support
            </h2>
            <p className="xl:text-[18px] 4xl:text-[20px] text-[16px] leading-tight xl:mt-[35px] mt-[22px] font-normal 4xl:w-[93%] w-[90%] md:w-full">
              Semiconductor manufacturing is increasingly collaborative and distributed. Rialtes helps companies manage:
            </p>
            <UnorderedList arrName={semiconductorFoundryData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[37px] mt-[26px] pl-[20px] 4xl:w-[80%] xl:w-[90%] w-[90%] md:w-full" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal" />
            <div className="xl:mt-[87px] mt-[24px]">
              <LearnMore />
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 md:order-2 order-1">
            <div className="hidden md:block h-full w-full">
              <Image
                src="/images/industry/semi-conductor/semiconductor-foundry-desk.webp"
                alt="Semiconductor image"
                height={0}
                width={0}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            {/* Mobile Image */}
            <div className="block md:hidden">
              <Image
                src="/images/industry/semi-conductor/Mobile/semiconductor-foundry-mob.webp"
                alt="Semiconductor image"
                height={0}
                width={0}
                priority
                className="h-full w-full sm:h-[600px] md:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* strategic challenges section */}
      <section className="xl:mt-[117px] mt-[64px] custom-container relative xl:pt-[112px] xl:pb-[151px] pt-[79px] pb-[107px] text-[#ffffff] bg-no-repeat bg-cover
             bg-[url('/images/industry/semi-conductor/Mobile/strategic-mob.webp')] lg:bg-[url('/images/industry/semi-conductor/strategic-desk.webp')]">
        <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] w-[90%] md:w-[70%] xl:w-[80%]">
          Top 4 Strategic Challenges Facing the Semiconductor Industry Today
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:mt-[102px] mt-[83px] lg:gap-[20px] items-start lg:gap-y-[100px] 3xl:gap-y-[120px] gap-y-[75px] sm:w-[80%] 4xl:w-[82%]">
          {
            strategicData.map((data, ind) => {
              return (
                <div className={`pt-[51px] xl:px-[46px] pb-[59px] px-[36px] border border-[#FFFFFF] ${ind == 2 && "lg:mt-[-80px] lg:h-[440px] xl:h-[530px] 2xl:h-[520px] 4xl:h-[620px]"}`} key={ind}>
                  <div className="absolute lg:mt-[-80px] xl:mt-[-90px] 4xl:mt-[-100px] mt-[-80px]">
                    <p className="xl:text-[60px] 4xl:text-[70px] text-[50px] leading-tight px-6 py-0 text-[#FFD800] inline bg-[#073259] mix-blend-hard-light font-bold">
                      {data.id}
                    </p>
                  </div>
                  <h3 className="text-[20px] leading-tight xl:text-[30px] 4xl:text-[40px] font-bold lg:mt-[30px] xl:mt-[10px] 3xl:mt-[40px]">
                    {data.title}
                  </h3>
                  <UnorderedList arrName={data.dataList} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[40px] mt-[18px] pl-[20px] w-[90%] lg:w-full 4xl:w-[90%]" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal" />
                </div>
              )
            })
          }
        </div>

        <div className="absolute bottom-0">
          {/* <LearnMore bgcolor="#0C8AED" bordercolor="#0C8AED" /> */}
          <Link
            href="/contact-us"
            className={`inline-block 4xl:text-[20px] text-[16px] border  font-semibold text-white py-3 px-8 transition duration-300 mt-6
        bg-[#0C8AED] border-[#0C8AED]  hover:bg-white hover:text-[#134874] hover:border-[#134874]`}
          >
            Learn More
          </Link>
        </div>
      </section>
      {/* deep industry section */}
      <section className="custom-container xl:mt-[139px] mt-[62px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[40px] gap-y-[40px]">
          <div>
            <div className="hidden md:block h-full w-full">
              <Image
                src="/images/industry/semi-conductor/deep-industry-desk.webp"
                alt="deep-industry desktop image"
                height={0}
                width={0}
                priority
                className="h-full md:h-[600px] lg:h-full w-full object-cover"
              />
            </div>
            {/* Mobile Image */}
            <div className="block md:hidden">
              <Image
                src="/images/industry/semi-conductor/Mobile/deep-industry-mob.webp"
                alt="deep-industry mobile image"
                height={0}
                width={0}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[59px] w-[90%]  xl:w-[90%] 4xl:w-full">
              Deep Industry Knowledge in SAP S/4 HANA & Salesforce for Semiconductor
            </h2>
            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[65px] mt-[22px] font-normal w-[90%] lg:w-[94%]">
              At Rialtes, we bring specialized expertise in implementing SAP S/4 HANA and Salesforce Industry Cloud solutions, specifically tailored for semiconductor companies navigating the complex, high-stakes world of chip design, fabrication, testing, and distribution.
              <br /><br />
              Our knowledge goes beyond traditional enterprise systems — we understand the intricate connections between fab operations, customer-specific designs, contract manufacturing, and evolving compliance mandates. We help semiconductor organizations align engineering, production, sales, and global supply chain teams under a unified digital strategy.
            </p>
          </div>
        </div>
      </section>
      {/* common section */}
      <section className="custom-container lg:pr-0 lg:mt-[130px] xl:mt-[123px] mt-[62px]">
        {
          commonSectionData.map((data, ind) => {
            return (
              <div key={ind} className="md:mt-[130px] first:mt-0 mt-[63px] ">
                <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] w-[90%] md:mb-[43px] xl:mb-[53px] md:w-[60%] lg:w-[50%] xl:w-[70%] 4xl:w-[70%]">
                  {data.title}
                </h2>
                <div className="grid md:grid-cols-2 xl:grid-cols-12 grid-cols-1 lg:gap-[40px] xl:gap-0 4xl:gap-[40px] md:gap-[20px]">
                  <div className="xl:col-span-5">
                    {data.subtitle && <p className="xl:text-[30px] 4xl:text-[40px] text-[20px] leading-tight font-semibold max-md:mt-[13px] w-[90%] lg:w-full">
                      {data.subtitle}
                    </p>}
                    <p className={`xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal max-md:mt-[23px] w-[90%] lg:w-[94%] 4xl:w-full ${ind == 2 && "xl:mt-[34px] mt-[23px]"}`}>
                      {data.desc}
                    </p>
                    {/* Mobile Image */}
                    <div className="block md:hidden mt-[41px]">
                      <Image
                        src={data.mobImg}
                        alt="mobile image"
                        height={0}
                        width={0}
                        priority
                        className="h-full sm:h-[400px] sm:w-[90%] w-full object-cover"
                      />
                    </div>
                    {
                      ind == 2 ?
                        <p className="xl:text-[26px] 4xl:text-[32px] text-[18px] leading-tight xl:mt-[59px] mt-[40px] font-semibold">
                          Key Business Outcomes from Integration:
                        </p>
                        :
                        <p className="xl:text-[26px] 4xl:text-[32px] text-[18px] leading-tight xl:mt-[59px] mt-[40px] font-semibold">
                          Key Capabilities:
                        </p>
                    }
                    <UnorderedList arrName={data.keyData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[34px] mt-[26px] pl-[20px] 4xl:w-[96%] xl:w-[90%] w-[90%] md:w-full" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal" />
                  </div>
                  <div className="xl:col-span-7 hidden md:block h-full w-full">
                    <Image
                      src={data.deskImg}
                      alt="desktop image"
                      height={0}
                      width={0}
                      priority
                      className="h-full md:h-[600px] lg:h-full w-full max-2xl:object-cover object-[25%_20%]"
                    />
                  </div>
                </div>
                <div className="max-md:mt-[31px] mt-[40px]">
                  <LearnMore />
                </div>
              </div>
            )
          })
        }
      </section>
      {/* ai driven section */}
      <section className="xl:mt-[123px] mt-[62px]">
        {/* Mobile Image */}
        <div className="block md:hidden mt-[41px]">
          <Image
            src="/images/industry/semi-conductor/Mobile/ai-driven-mob.webp"
            alt="AI-Driven mobile image"
            height={0}
            width={0}
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden md:block h-full w-full">
          <Image
            src="/images/industry/semi-conductor/ai-driven-desk.webp"
            alt="AI-Driven desktop image"
            height={0}
            width={0}
            priority
            className="h-full h w-full object-cover"
          />
        </div>
        <div className="relative mt-[-140px] sm:mt-[-120px] md:mt-[-140px] xl:mt-[-300px]">
          <div className="custom-container">
            <div className="md:w-[60%] xl:w-[86%] 4xl:w-[80%] bg-[#ffffff]/80 xl:pt-[66px] xl:pb-[66px] xl:px-[71px] pt-[27px] pb-[32px] px-[26px]">
              <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] lg:w-[80%] 4xl:w-fulll">
                AI-Driven Innovation in Semiconductor
              </h2>
              <p className="xl:text-[30px] 4xl:text-[40px] text-[20px] leading-tight xl:mt-[34px] mt-[18px] font-semibold">
                Practical Impact
              </p>
              <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[18px] font-normal w-[90%] md:w-full">
                Artificial Intelligence (AI) is revolutionizing the semiconductor industry, fundamentally reshaping how companies design, manufacture, test, and manage semiconductors in today’s rapidly evolving markets. From chip design optimization to predictive yield analysis, AI is helping semiconductor manufacturers reduce costs, improve quality, accelerate time-to-market, and address the increasing complexity of advanced chips like AI accelerators, SoCs, and 5G modems.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#E8E8E8] md:mt-[-300px] max-[422px]:mt-[-550px] sm:mt-[-300px] mt-[-400px] max-[422px]:pt-[600px] sm:pt-[350px] lg:pt-[300px] lg:pb-[116px] md:pt-[280px] pt-[460px] pb-[67px]">
          <div className="custom-container relative">
            <h3 className="xl:text-[26px] 4xl:text-[32px] text-[18px] leading-tight md:mt-[63px]  xl:mt-[43px]  mt-0 font-semibold w-[90%] md:w-full">
              Key Areas Where AI Is Transforming Semiconductor Industry:
            </h3>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[40px] md:gap-x-[60px] lg:gap-x-0  md:gap-y-[101px] md:mt-[71px] mt-[0px]">
              {
                keyAreasData.map((data, ind) => {
                  return (
                    <div className="lg:w-[80%]" key={ind}>
                      {/* Mobile Image */}
                      <div className="block md:hidden mt-[41px]">
                        <Image
                          src={data.mobImg}
                          alt="Key Areas mobile image"
                          height={0}
                          width={0}
                          priority
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="hidden md:block">
                        <Image
                          src={data.deskImg}
                          alt="Key Areas desktop image"
                          height={0}
                          width={0}
                          priority
                          className="h-[370px] h w-full object-cover"
                        />
                      </div>
                      <h4 className="xl:text-[26px] 4xl:text-[40px] text-[18px] leading-tight xl:mt-[45px] mt-[29px] font-semibold text-[#006FBE] w-[90%] md:w-full">
                        {data.title}
                      </h4>
                      <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[24px] font-normal w-[90%] md:w-full">
                        {data.desc}
                      </p>
                      <p className="xl:text-[26px] 4xl:text-[32px] text-[17px] leading-tight xl:mt-[34px] mt-[29px] font-semibold">
                        Real-World Impacts:
                      </p>
                      <UnorderedList arrName={data.realWorldData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[22px] mt-[20px] pl-[20px] w-[90%] md:w-full" liClassName="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal" />
                    </div>
                  )
                })
              }
            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[60px] md:gap-y-[101px] md:mt-[71px] mt-[40px]">
              <div className="md:col-span-5 col-span-12">
                {/* Mobile Image */}
                <div className="block md:hidden mt-[41px]">
                  <Image
                    src="/images/industry/semi-conductor/Mobile/ai-enabled-mob.webp"
                    alt="mobile image"
                    height={0}
                    width={0}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="hidden md:block">
                  <Image
                    src="/images/industry/semi-conductor/ai-enabled-desk.webp"
                    alt="desktop image"
                    height={0}
                    width={0}
                    priority
                    className="h-[370px] w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-6 col-span-12">
                <h4 className="xl:text-[26px] 4xl:text-[40px] text-[18px] leading-tight md:mt-0 mt-[29px] font-semibold text-[#006FBE]">
                  AI-Enabled Customer & Partner Collaboration (Salesforce & SAP Integration)
                </h4>
                <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[24px] font-normal">
                  AI enhances customer engagement platforms by offering real-time analytics on customer design needs, usage patterns, and product performance. AI-driven insights allow sales, engineering, and partner teams to recommend optimal solutions and pricing, creating a seamless customer experience.
                </p>
                <p className="xl:text-[26px] 4xl:text-[32px] text-[17px] leading-tight xl:mt-[34px] mt-[29px] font-semibold">
                  Real-World Impacts:
                </p>
                <ul className="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[22px] mt-[20px] pl-[20px]">
                  {[
                    "AI-based opportunity scoring and deal prioritization in Salesforce for faster design-win closure.",
                    "AI-generated personalized technical content and datasheets for customer engagements.",
                    "Customer support AI bots integrated with Salesforce Agentforce for proactive issue resolution and engineering collaboration."
                  ].map((data, ind) => (
                    <li className="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal" key={ind}>
                      {data}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute lg:mt-[60px] mt-[20px]">
              <LearnMore />
            </div>
          </div>
        </div>
      </section>
      {/* summary section */}
      <section className="custom-container relative max-md:px-0  lg:pr-0 lg:mt-[169px] mt-[120px]">
        <div className="custom-container bg-no-repeat bg-cover xl:pt-[96px] xl:pb-[85px] xl:pl-[81px] pt-[75px] pb-[46px] bg-[20%_30%] lg:bg-[65%_20%] text-[#ffffff] max-md:px-[36px]
             bg-[url('/images/industry/semi-conductor/Mobile/summary-mob.webp')] lg:bg-[url('/images/industry/semi-conductor/summary-desk.webp')]">
          {/* summary title */}
          <span className="absolute top-[-30px] xl:top-[-60px] text-[#ffffff] bg-[#00C6C6] xl:py-[33px] xl:px-[42px] py-[17px] px-[15px] 4xl:text-[40px] xl:text-[30px] text-[23px] leading-tight font-bold">
            Summary
          </span>
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] gap-y-[58px] w-[90%] md:w-full">
            <div className="lg:col-span-6 xl:col-span-7 col-span-12">
              <h3 className="text-[18px] leading-tight xl:text-[30px] 4xl:text-[38px] font-bold">
                AI’s Value for Semiconductor Industry
              </h3>
              <p className={`xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[41px] mt-[21px] 4xl:w-[90%]`}>
                Artificial Intelligence (AI) is revolutionizing the semiconductor industry, fundamentally reshaping how companies design, manufacture, test, and manage semiconductors in today’s rapidly evolving markets. From chip design optimization to predictive yield analysis, AI is helping semiconductor manufacturers reduce costs, improve quality, accelerate time-to-market, and address the increasing complexity of advanced chips like AI accelerators, SoCs, and 5G modems.
              </p>
              <UnorderedList arrName={summaryData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[41px] mt-[25px] pl-[20px] 4xl:w-[96%]" liClassName="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal" />
              <p className={`xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[44px] mt-[43px]`}>
                At Rialtes, we help semiconductor companies operationalize AI by connecting SAP S/4 HANA’s core processes, Salesforce Industry Cloud customer intelligence, and AI/ML platforms to create an intelligent semiconductor ecosystem that adapts to the future of chip innovation.
              </p>
            </div>
            <div className="lg:col-span-6 xl:col-span-5 col-span-12 ">
              <h2 className="text-[18px] leading-tight xl:text-[30px] 4xl:text-[38px] font-bold">
                Deal Registration and Customer Engagement — Streamlined & Intelligent
              </h2>
              <p className={`xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[35px] mt-[21px]`}>
                In the semiconductor industry, where design wins, long sales cycles, and complex partner ecosystems dominate the landscape, managing deal registration and customer engagement efficiently is critical to success. From OEMs and Tier-1 customers to contract manufacturers and channel partners, transparency, speed, and control over the sales and design collaboration process can mean the difference between winning or losing a major opportunity.
                <br /><br />
                Rialtes helps semiconductor companies redefine deal registration and customer engagement processes using Salesforce Experience Cloud and Partner Relationship Management (PRM) tools — turning them into intelligent, automated, and collaborative ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* key pillars */}
      <section className="custom-container xl:mt-[72px] mt-[52px]">
        <h3 className="text-[17px] leading-tight xl:text-[24px] 4xl:text-[32px] font-semibold w-[70%] xl:w-[50%] 4xl:w-[60%]">
          Key Pillars of a Modern Deal Registration & Customer Engagement Strategy
        </h3>
        {
          keyPillarsData.map((data, ind) => {
            return (
              <div className="xl:py-[60px] py-[44px] border-b border-[#707070] last:border-0" key={ind}>
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[60px] w-[90%] md:w-[80%] lg:w-full">
                  <div>
                    <div className="flex flex-row xl:gap-[30px] gap-[30px]">
                      <div>
                        <p className="text-[60px] leading-tight xl:text-[80px] 4xl:text-[100px] font-extrabold text-[#006FBE] mt-[-10px]">
                          {data.id}
                        </p>
                      </div>
                      <div>
                        <h4 className={`text-[20px] leading-tight xl:text-[30px] 4xl:text-[40px] font-semibold text-[#006FBE] 4xl:w-[93%] md:w-[80%] lg:w-full ${data.id == 4 && "4xl:w-full w-[101%]"}`}>
                          {data.title}
                        </h4>
                        <p className={`lg:block hidden xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[33px] mt-[22px] 4xl:w-[96%]`}>
                          {data.desc}
                        </p>
                      </div>
                    </div>
                    <p className={`lg:hidden block xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[33px] mt-[22px]`}>
                      {data.desc}
                    </p>
                  </div>
                  <div>
                    <p className={`xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-semibold max-lg:mt-[22px]`}>
                      Strategic Benefits:
                    </p>
                    <UnorderedList arrName={data.dataList} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[22px] mt-[18px] pl-[20px] 4xl:w-[82%]" liClassName="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal" />
                  </div>
                </div>
              </div>
            )
          })
        }
      </section>
      {/* end to end section*/}
      <section className="xl:mt-[109px] mt-[60px]">
        <div className="custom-container 4xl:!pl-[142px] xl:!pl-[52px] lg:!pl-[22px] max-lg:px-0 lg:pr-0">
          {/* Mobile Image */}
          <div className="block lg:hidden mt-[41px]">
            <Image
              src="/images/industry/semi-conductor/Mobile/end-mob.webp"
              alt="mobile image"
              height={0}
              width={0}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden lg:block">
            <Image
              src="/images/industry/semi-conductor/end-desk.webp"
              alt="desktop image"
              height={0}
              width={0}
              priority
              className="h-full w-full object-cover relative"
            />
          </div>
        </div>
        <div className="custom-container">
          <div className="relative">
            <div className="absolute inset-0 bg-[#656565] mix-blend-multiply"></div>
            <div className="4xl:mt-[-320px] lg:mt-[-240px] relative z-20 xl:pt-[75px] lg:pb-[64px] xl:px-[64px] pt-[33px] pb-0 px-[28px] text-[#ffffff]">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-[34px] ">
                <div className="sm:w-[80%] lg:w-full">
                  <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] lg:w-[80%] xl:w-full">
                    End-to-End Semiconductor Deal Ecosystem
                  </h2>
                  <p className="text-[20px] leading-tight xl:text-[36px] 4xl:text-[40px] xl:mt-[46px] mt-[22px] font-bold lg:w-[80%] xl:w-full">
                    Powered by Salesforce + Rialtes Advisory
                  </p>
                  <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[37px] mt-[22px] font-normal w-[90%] lg:w-[80%] xl:w-full">
                    Our approach transforms the traditional, manual deal registration processes into a real-time, AI-enhanced ecosystem, where customers, channel partners, and sales teams collaborate effectively, supported by intelligent workflows and deep insights.
                    <br /><br />
                    Rialtes brings deep domain knowledge, certified Salesforce and SAP experts, and proven accelerators to deliver these modern capabilities at scale.
                  </p>
                </div>
                <div className="sm:w-[80%] lg:w-full xl:w-[90%] lg:ml-auto">
                  <h3 className="xl:text-[26px] 4xl:text-[32px] text-[17px] leading-tight lg:w-[60%] xl:w-full font-semibold">
                    Benefits for Semiconductor Companies:
                  </h3>
                  <UnorderedList arrName={endSemiconductorData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[32px] mt-[22px] pl-[20px] w-[94%] lg:w-full" liClassName="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal" />
                  <div className="xl:mt-[97px] mt-[48] lg:float-end">
                    <LearnMore />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* by combining section */}
      <section className="xl:mt-[65px] mt-[64px] custom-container xl:pt-[49px] xl:pb-[48px] pt-[43px] pb-[47px] px-[34px] text-[#ffffff] bg-no-repeat bg-cover bg-[url('/images/industry/semi-conductor/Mobile/combining-mob.webp')] lg:bg-[url('/images/industry/semi-conductor/combining-desk.webp')]">
        <p className="xl:text-[28px] 4xl:text-[34px] text-[22px] leading-tight w-[85%] md:w-[70%] lg:w-[60%] xl:w-[76%] 2xl:w-[72%] font-medium">
          By combining Salesforce Experience Cloud with Rialtes industry-aligned advisory and implementation services, semiconductor companies can unlock the next level of growth and operational efficiency — transforming deal registration from a bottleneck into a competitive advantage.
        </p>
      </section>

      {/* why rialtes section */}
      <section className="custom-container">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[60px]">
          <div>
            {/* Mobile Image */}
            <div className="block md:hidden">
              <Image
                src="/images/industry/semi-conductor/Mobile/why-rialtes-mob.webp"
                alt="mobile image"
                height={0}
                width={0}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/industry/semi-conductor/why-rialtes-desk.webp"
                alt="desktop image"
                height={0}
                width={0}
                priority
                className="h-full w-full object-cover relative"
              />
            </div>
          </div>
          <div className="md:mt-[102px] lg:mt-[142px] mt-[60px] ml-auto md:w-[94%]">
            <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px]">
              Why Rialtes for SAP & Salesforce in Semiconductor?
            </h2>
            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[29px] mt-[22px] font-normal w-[90%] md:w-full">
              With 20+ years of deep, hands-on experience in the semiconductor industry, Rialtes stands as a trusted transformation partner for global semiconductor manufacturers, fabless companies, and foundries. Our unparalleled understanding of semiconductor business processes, combined with certified expertise in SAP S/4 HANA and Salesforce industry solutions, enables us to deliver end-to-end digital transformation—from design to manufacturing to sales and distribution—tailored to the highly specialized needs of this complex industry.
              <br /><br />
              Having worked with Fortune 500 semiconductor and electronics giants, Rialtes brings an insider’s perspective to the unique operational, engineering, and customer engagement challenges faced by semiconductor companies today.
            </p>
          </div>
        </div>
      </section>
      {/* key reasons  */}
      <section className="md:mt-[90px] mt-[50px]">
        <div className="custom-container">
          <h3 className="text-[17px] leading-tight xl:text-[26px] 4xl:text-[40px] font-bold w-[90%] lg:w-[60%] 2xl:w-[50%] 4xl:w-[80%]">
            Key Reasons Why Leading Semiconductor Companies Trust Rialtes
          </h3>
        </div>
        {keyReasonsData.map((data, ind) => {
          const isEven = ind % 2 === 0;
          return (
            <div key={ind} className={`relative ${ind == 0 ? "mt-0" : "max-lg:mt-[80px]"} `}>
              <div className="absolute inset-0 w-full h-full"
                style={{ backgroundColor: data.bgColor }}></div>
              <div className={`${ind == 0 && "xl:!h-[150px] 4xl:!h-[190px] lg:h-[80px]"} absolute w-full h-[80px] sm:h-[200px] lg:h-[55px] xl:h-[120px] 4xl:h-[140px]`}
                style={{ backgroundColor: "white" }}></div>
              <div className={`custom-container relative z-10 ${isEven ? "4xl:!pl-[142px] xl:!pl-[52px] lg:!pl-[42px]" : "4xl:!pr-[142px] xl:!pr-[52px] lg:!pr-[42px]"
                }`}>
                <div className={`grid lg:grid-cols-12 grid-cols-1 lg:gap-[30px] xl:gap-[40px] ${isEven ? "4xl:gap-[60px]" : "4xl:gap-[20px]"} max-[400px]:gap-y-[20px] gap-y-[40px] mt-[29px] lg:mt-[97px]`}>
                  <div className={`lg:col-span-4 4xl:col-span-5 col-span-12 ${isEven ? "" : "lg:order-2 order-1"
                    }`}>
                    {/* Mobile Image */}
                    <div className="block md:hidden h-full w-full">
                      <Image
                        src={data.mobImg}
                        alt="Key Reasons mobile image"
                        height={0}
                        width={0}
                        priority
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="hidden md:block h-full">
                      <Image
                        src={data.deskImg}
                        alt="Key Reasons desktop image"
                        height={0}
                        width={0}
                        priority
                        className="h-full md:h-[600px] lg:h-full w-full object-cover object-[35%_40%] relative"
                      />
                    </div>
                  </div>
                  <div
                    className={`lg:col-span-8 4xl:col-span-7 col-span-12 sm:w-[80%] lg:w-full ${isEven ? "" : "lg:order-1 order-2"
                      }`}>
                    <h4 className="text-[20px] leading-tight xl:text-[30px] 4xl:text-[40px] text-[#006FBE] font-semibold w-[90%] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] 4xl:w-full">
                      {data.title}
                    </h4>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[30px] xl:gap-[0px] gap-y-[25px] xl:mt-[99px] mt-[34px] lg:mb-[70px] mb-[100px]">
                      <div className="relative">
                        <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal w-[90%] lg:w-full xl:w-[90%] 4xl:w-[92%]">
                          {data.desc}
                        </p>
                      </div>
                      <div>
                        <UnorderedList arrName={data.dataList} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc pl-[20px] w-[90%] lg:w-full" liClassName="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`absolute bottom-0 ${isEven && "lg:left-1/3 4xl:left-[770px] ml-[20px]"}`}>
                  <LearnMore />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* rialtes section */}
      <section className="custom-container max-md:px-0 xl:mt-[105px] mt-[93px]">
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/industry/semi-conductor/Mobile/rialtes-mob.webp"
            alt="Rialtes mobile image"
            height={0}
            width={0}
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden md:block">
          <Image
            src="/images/industry/semi-conductor/rialtes-desk.webp"
            alt="Rialtes desktop image"
            height={0}
            width={0}
            priority
            className="h-full w-full object-cover relative"
          />
        </div>
        <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] xl:mt-[52px] mt-[30px] max-md:px-[36px] w-[90%] md:w-[80%] lg:w-[70%] 4xl:w-[76%] text-[#000000] font-normal">
          Rialtes — Your Strategic Partner for Semiconductor Growth
        </h2>
        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] 4xl:gap-[60px] xl:mt-[59px] mt-[25px] gap-y-[33px] max-md:px-[36px]">
          <div className="md:col-span-5 col-span-12">
            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal w-[90%] xl:w-[88%]">
              Whether you are a fabless design house, an IDM (Integrated Device Manufacturer), a foundry, or a contract manufacturer, Rialtes understands the semiconductor industry’s DNA. We leverage our global delivery model with offices in India, United States, Canada, and Singapore to bring cost-effective, high-value solutions to some of the most demanding and complex organizations in the world.
            </p>
          </div>
          <div className="md:col-span-7 col-span-12">
            <p className="xl:text-[30px] 4xl:text-[40px] text-[17px] leading-tight font-bold">
              Why Choose Rialtes?
            </p>
            <UnorderedList arrName={rialtesData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[37px] mt-[19px] pl-[20px] w-[94%] lg:w-full" liClassName="text-[16px] xl:text-[19px] 4xl:text-[20px] leading-tight font-normal" />
          </div>
        </div>
      </section>
      {/* Contact Form */}
      < div className="custom-container md:mt-[122px] xl:mb-[92px] mt-[54px] mb-[45px]">
        <ContactForm title={'Ready to Connect Your Enterprise?'} subtitle="Partner with Rialtes to simplify integrations, accelerate digital transformation, and unlock real business value." subtitle1="Contact us today for a free consultation and explore how we can empower your connected enterprise!" className={" text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px]"} />
      </div >
    </section >
  );
}