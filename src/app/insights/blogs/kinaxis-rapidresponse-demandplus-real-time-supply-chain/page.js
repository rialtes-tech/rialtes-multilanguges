"use client";
import Image from "next/image";
import FilteredBlogCarousel from "@/app/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/components/useUrl";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/components/faqAccordion";
import BlogSocialIcons from "@/app/components/blogSocialIcons";
import Link from "next/link";
import UnorderedList from "@/app/components/unorderedList";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export default function Page() {
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/kinaxis-rapidresponse-demandplus-real-time-supply-chain";
  const currUrl = useUrl();

  const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Kinaxis RapidResponse & DemandPlus for Real-Time Supply Chain Resilience | Rialtes",
  "description": "It’s built on real-time, concurrent planning that connects demand, supply, inventory, and capacity in one living model.",
  "image": "https://www.rialtes.com/images/blog/automated-warehouse-conveyor-system-logistics.webp",
  "author": {
    "@type": "Organization",
    "name": "Rialtes"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/blogs/kinaxis-rapidresponse-demandplus-real-time-supply-chain/"
  },
  "datePublished": "2026-01-13",
  "mainEntity": {
    "@type": "FAQPage",
    "name": "Rialtes Demand+ and Kinaxis RapidResponse FAQs",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Demand+ by Rialtes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Demand+ is Rialtes’ end-to-end service framework built around Kinaxis RapidResponse to enable real-time, concurrent, and resilient supply chain planning."
        }
      },
      {
        "@type": "Question",
        "name": "How does Kinaxis RapidResponse support real-time planning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It uses a single, in-memory data model that updates demand, supply, inventory, and capacity simultaneously, allowing instant scenario analysis and decision-making."
        }
      },
      {
        "@type": "Question",
        "name": "Why is concurrent planning important for resilience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because disruptions affect the entire supply chain at once. Sequential planning delays response, while concurrent planning enables immediate, coordinated action."
        }
      },
      {
        "@type": "Question",
        "name": "Does DemandPlus integrate with SAP and Oracle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. DemandPlus integrates Kinaxis RapidResponse with SAP S/4HANA, Oracle EBS, and non-SAP systems for seamless data flow."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Rialtes a strong Kinaxis partner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Certified Kinaxis experts, global delivery capability, and a proven Demand+ framework that focuses on outcomes, not just implementation."
        }
      }
    ]
  }
}
  const blogMainData = [
    "Supply chains don’t break anymore. They bend, snap back, and get tested again almost immediately. Demand spikes without warning. Suppliers miss commitments. Transportation costs swing overnight. And planning teams are expected to respond in hours, not weeks. According to a <a href='https://www.mckinsey.com/capabilities/operations/our-insights/boosting-supply-chain-resilience' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>2023 McKinsey supply chain survey</a>, 73 percent of global executives experienced significant disruptions in the past two years, and nearly half say their current planning systems still lack the agility to respond in real time. At the same time, Gartner reports that only 22 percent of organizations have achieved true end-to-end supply chain visibility, leaving most leaders making high-impact decisions with partial information. <br /> Source:",
    "That’s the dangerous gap today: what’s happening on the ground versus what leaders see. And it’s why resilience is no longer built on faster spreadsheets or tighter batch cycles. It’s built on real-time, concurrent planning that connects demand, supply, inventory, and capacity in one living model.",
  ];
  const whyData = [
    {
      title: "Why Traditional Supply Chain Planning Can’t Keep Up",
      desc: "Most planning environments were designed for stability. Monthly S&OP cycles. Weekly demand reviews. Overnight batch runs. That worked when disruption was the exception.",
      desc1: "Now disruption is the norm.",
      desc2: "Common challenges we see across enterprises:",
      list: [
        "Demand plans out of sync with supply realities",
        "Inventory buffers masking deeper issues",
        "Delayed visibility into supplier constraints",
        "Manual scenario planning that takes days",
        "Teams reacting instead of anticipating",
      ],
      desc3:
        "The problem isn’t a lack of effort but a lack of concurrency.",
    },
  ];
  const realData = [
    {
      title: "What Real-Time, Resilient Planning Really Means",
      desc: "Resilience doesn’t mean avoiding disruption. It means absorbing shocks and adapting faster than the impact spreads.",
      desc1:
        "In a modern supply chain, that requires three capabilities work together:",
      list: [
        {
          title: "Real-time visibility",
          desc: "across demand, supply, inventory, and capacity",
        },
        {
          title: "Concurrent planning",
          desc: "so every change ripples instantly across the network",
        },
        {
          title: "Rapid scenario simulation",
          desc: "to test responses before executing them",
        },
      ],
      desc2:
        "This is the foundation of Kinaxis RapidResponse and the core of DemandPlus.",
    },
  ];
  const planData = [
    {
      title: "The Power of Concurrent Planning with Kinaxis RapidResponse",
      desc: "Unlike traditional planning tools that run sequential processes, Kinaxis RapidResponse operates on a single, in-memory data model.",
      desc1: "That means:",
      list: [
        "A change in demand updates supply instantly",
        "A supplier delay recalculates production plans in seconds",
        "A capacity constraint reshapes fulfillment priorities automatically",
        "A new forecast scenario shows impact across revenue, service levels, and margin",
      ],
      desc2:
        "Planning teams stop waiting for reports. They start working with live truth.",
      desc3:
        "This is how organizations move from reacting late to acting early.",
        desc4:"Concurrent Planning in Action",
      steps: [
        { text: "Demand change", bg: "bg-[#E3F8FF]" },
        { text: "Supply recalculates", bg: "bg-[#FAF1D2]" },
        { text: "Inventory adjusts", bg: "bg-[#E3F8FF]" },
        { text: "Financial impact visible", bg: "bg-[#FAF1D2]" },
        { text: "All in real time", bg: "bg-[#E3F8FF]" },
      ],
    },
  ];
  const visibilityData = [
    {
      title: "Why Resilience Starts with Visibility",
      desc: "You can’t fix what you can’t see. Most disruptions escalate because signals are buried in systems that don’t talk to each other. By the time leadership notices, the cost is already locked in.",
      desc1: "DemandPlus connects:",
      list: [
        "Demand planning",
        "Supply planning",
        "Inventory optimization",
        "Capacity management",
        "S&OP and IBP",
        "Financial impact modeling",
      ],
      desc2: "Into one synchronized environment.",
      desc3: "Leaders gain instant answers to questions like:",
      listTwo: [
        "What happens if this supplier misses a shipment?",
        "Can we reallocate inventory without hurting service levels?",
        "Which customers should we prioritize if supply tightens?",
        "How does this decision affect the margin next quarter?",
      ],
      desc4: "This is resilience built on clarity, not guesswork.",
    },
  ];
  const DemandData = [
    {
      title: "Introducing Rialtes Demand+: Real-Time Planning in Action",
      desc: "Rialtes DemandPlus is our end-to-end service suite built around <a href='https://www.rialtes.com/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Kinaxis RapidResponse</a> to help organizations achieve connected, intelligent, and resilient supply chains.",
      desc1:
        "As a certified Kinaxis and SAP partner with offices in the United States, Canada, India, and Singapore, and a team of highly certified Kinaxis experts, we help enterprises turn RapidResponse into a strategic advantage — not just another tool.",
      desc2:
        "Demand+ isn’t just about deploying software. It’s about changing how planning decisions are made.",
    },
  ];
  const DemandplusData = [
    {
      title: "What Demand+ Delivers",
      desc: "Our Demand+ framework brings together strategy, technology, and execution into one cohesive transformation model.",
      list: [
        {
          title: "Kinaxis License Advisory & Value Assessment",
          desc: "We help organizations define the right scope, roadmap, and ROI before implementation begins.",
        },
        {
          title: "Solution Architecture & Design",
          desc: "Planning models are built around your real business constraints — not generic templates.",
        },
        {
          title: "Rapid Implementation & Process Configuration",
          desc: "Accelerated deployment with best-practice workflows for demand, supply, inventory, and S&OP.",
        },
        {
          title: "Quality Assurance, Testing & User Training",
          desc: "Ensuring planners trust the system — because adoption is everything.",
        },
        {
          title: "Integration with SAP S/4HANA, Oracle EBS & Non-SAP Systems",
          desc: "DemandPlus connects RapidResponse with your ERP and ecosystem so data flows without friction.",
        },
        {
          title: "Post-Go-Live Support & Continuous Optimization",
          desc: "Resilience improves over time. We stay engaged to evolve processes, not just maintain systems.",
        },
      ],
      model: {
        label: "Advantage+ Marketing Transformation Model",
        steps: ["Strategy", "Build", "Create", "Test", "Connect", "Optimize"],
      },
      steps: [
        "Assess",
        "Design",
        "Implement",
        "Integrate",
        "Enable",
        "Optimize",
      ],
    },
  ];
  const DeliversData = [
    {
      title: "How Demand+ Enables Faster Response to Disruption",
      desc: "Let’s look at real-world scenarios.",
      list: [
        {
          title: "Scenario 1: Sudden Demand Spike",
          desc: "A promotion drives unexpected orders. With batch planning, teams react days later. With RapidResponse, demand changes trigger instant supply and inventory recalculations. Planners rebalance production and fulfillment in the same day.",
        },
        {
          title: "Scenario 2: Supplier Delay",
          desc: "A critical component is delayed by two weeks. RapidResponse immediately shows downstream impact on service levels, revenue, and margin. Teams simulate alternatives and commit to the best option before the disruption cascades.",
        },
        {
          title: "Scenario 3: Capacity Constraint",
          desc: "A manufacturing line goes down. Instead of manual spreadsheets, planners see real-time trade-offs across plants, SKUs, and customers",
        },
      ],
    },
  ];
  const benefitsData = [
    {
      title: "Who Benefits Most from DemandPlus",
      desc: "<a href='https://www.rialtes.com/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>DemandPlus</a> is ideal for organizations that operate in complex, fast-moving environments:",
      list: [
        "Manufacturing and distribution enterprises",
        "Life sciences and medtech supply chains",
        "Consumer goods and retail networks",
        "Automotive and industrial companies",
        "High-tech and electronics firms",
      ],
      desc1:
        "If volatility is part of your reality, real-time planning should be too.",
    },
  ];
  const businessData = [
    {
      title: "Business Outcomes Leaders Care About",
      desc: "When real-time resilience becomes the norm, the impact is tangible:",
      list: [
        "Faster response to demand and supply changes",
        "Higher service levels with lower inventory",
        "Reduced expediting and firefighting costs",
        "Better alignment between planning and finance",
        "Stronger confidence in S&OP and IBP decisions",
        "A supply chain that adapts instead of absorbing losses",
      ],
      desc1:
        "This is how planning moves from operational support to strategic advantage. With Rialtes Demand+ and Kinaxis RapidResponse, real-time planning becomes your advantage, turning uncertainty into a competitive edge",
    },
  ];
  const faqData = [
    {
      question: "What is Demand+ by Rialtes?",
      answer:
        "Demand+ is Rialtes’ end-to-end service framework built around Kinaxis RapidResponse to enable real-time, concurrent, and resilient supply chain planning.",
    },
    {
      question: "How does Kinaxis RapidResponse support real-time planning?",
      answer:
        "It uses a single, in-memory data model that updates demand, supply, inventory, and capacity simultaneously, allowing instant scenario analysis and decision-making.",
    },
    {
      question: "Why is concurrent planning important for resilience?",
      answer:
        "Because disruptions affect the entire supply chain at once. Sequential planning delays response, while concurrent planning enables immediate, coordinated action.",
    },
    {
      question: "Does DemandPlus integrate with SAP and Oracle?",
      answer:
        "Yes. DemandPlus integrates Kinaxis RapidResponse with SAP S/4HANA, Oracle EBS, and non-SAP systems for seamless data flow.",
    },
    {
      question: "What makes Rialtes a strong Kinaxis partner?",
      answer:
        "Certified Kinaxis experts, global delivery capability, and a proven Demand+ framework that focuses on outcomes, not just implementation.",
    },
  ];
  return (
    <section className="min-h-screen">
      <Seo
        title="DemandPlus with Kinaxis RapidResponse: Resilient Supply Chains"
        description="DemandPlus is our end-to-end service suite built around Kinaxis RapidResponse to help organizations achieve connected, intelligent, and resilient supply chains."
        canonical={"https://www.rialtes.com/insights/blogs/kinaxis-rapidresponse-demandplus-real-time-supply-chain/" }
      />
      <Script
        id="schema-kinaxis"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="md:block hidden">
          <Image
            src="/images/blog/automated-warehouse-conveyor-system-logistics.webp"
            className="w-full h-auto object-cover"
            alt="Automated warehouse with colorful light trails showing high-speed conveyor systems and efficient inventory movement in motion"
            fill
            priority
          />
        </div>
        <div className="md:hidden block">
          <Image
            src="/images/blog/automated-warehouse-conveyor-system-logistics-mobile-banner.webp"
            alt="Automated warehouse with colorful light trails showing high-speed conveyor systems and efficient inventory movement in motion"
            priority
            height={250}
            width={375}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
        <div className="grid lg:grid-cols-12 grid-cols-12">
          <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11 col-span-12">
            {/* date and icons */}
            <div className="sm:flex justify-between">
              <div>
                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  Kinaxis RapidResponse
                </span>{" "}
                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {" "}
                  |{" "}
                </span>
                13 January 2026
              </div>

              <div>
                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                  <BlogSocialIcons fullUrl={fullUrl} />
                </div>
              </div>
            </div>

            {/* main blog */}
            <div className="xl:mt-[60px] mt-[42px]">
              <h1 className="4xl:text-[58px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                Building a Real-Time, Resilient Supply Chain with Rialtes
                Demand+
              </h1>
              <div className="xl:mt-[38px] mt-[33px]">
                {blogMainData.map((data, ind) => {
                  return (
                    <p
                      key={ind}
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  );
                })}
              </div>
              {/* Why Traditional Supply Chain Planning Can’t Keep Up */}
              <div className="md:mt-[50px] mt-[40px]">
                {whyData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <h3 className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </h3>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />

                      <div className="xl:w-[70%]  p-4 xl:mt-[40px] mt-[30px]">
                        <p className="font-semibold mb-6 4xl:text-[24px] 2xl:text-[21px] text-[20px]">
                          Old Planning vs Real-Time Planning
                        </p>
                        <div className="grid grid-cols-2 border  overflow-hidden gap-1">
                          <div className="bg-[#C9C9C9] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                            Old
                          </div>
                          <div className="bg-[#E2E2E2] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                            Real-Time
                          </div>

                          <div className="bg-[#B5E0DA] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                            Batch cycles
                          </div>
                          <div className="bg-[#C6F5EE] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                            Continuous decisioning
                          </div>

                          <div className="bg-[#9BD4E7] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                            Siloed data
                          </div>
                          <div className="bg-[#AEE8FD] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                            Connected ecosystem
                          </div>

                          <div className="bg-[#9FA3E2] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                            Reactive firefighting
                          </div>
                          <div className="bg-[#BFC3FE] p-4 font-semibold 4xl:text-[24px] 2xl:text-[19px] md:text-[18px] text-[16px]">
                            Proactive resilience
                          </div>
                        </div>
                      </div>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc3 }}
                      />
                    </div>
                  );
                })}
              </div>
              {/* What Real-Time, Resilient Planning Really Means*/}
              <div className="md:mt-[50px] mt-[40px]">
                {realData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <ol className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-decimal pl-[36px] lg:pl-[56px] font-medium space-y-2">
                        {data.list.map((item, index) => (
                          <li key={index}>
                            <span className="font-bold">{item.title}</span>{" "}
                            {item.desc}
                          </li>
                        ))}
                      </ol>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* The Power of Concurrent Planning with Kinaxis RapidResponse*/}
              <div className="md:mt-[50px] mt-[40px]">
                {planData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>

                      <ul className="mt-5 list-disc pl-[36px] lg:pl-[56px] space-y-2">
                        {data.list.map((item, index) => (
                          <li key={index}>
                            <p className="4xl:text-[20px] font-medium 2xl:text-[18px] xl:text-[18px] md:text-[16px] text-[16px] ">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                       <p className="md:mt-8 mt-5 4xl:text-[24px] 2xl:text-[19px] text-[18px] font-bold">
                        {data.desc4}
                      </p>
                      <div className="mt-8 w-full">
                        {/* Desktop Layout */}
                        <div className="hidden lg:flex items-center w-full">
                          {data.steps.map((step, index) => (
                            <div
                              key={index}
                              className="flex items-center relative"
                            >
                              <div
                                className={`px-6 py-3 font-bold 4xl:text-[24px] 2xl:text-[19px] text-[18px] min-w-[160px] text-start ${step.bg}`}
                              >
                                {step.text}
                              </div>

                              {index !== data.steps.length - 1 && (
                                <div className="absolute -right-[16px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#848484] flex items-center justify-center shadow z-20">
                                  <FaChevronRight className="text-white font-bold text-[16px]" />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        {/* Mobile Layout */}
                        <div className="lg:hidden flex flex-col items-center">
                          {data.steps.map((step, index) => (
                            <div
                              key={index}
                              className="relative w-full flex flex-col items-center"
                            >
                              <div
                                className={`px-4 py-6 font-bold text-[16px] w-[100%] md:w-[50%] text-center ${step.bg}`}
                              >
                                {step.text}
                              </div>
                              {index !== data.steps.length - 1 && (
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
                                  <div className="w-8 h-8 rounded-full bg-[#848484] flex items-center justify-center shadow">
                                    <FaChevronDown className="text-white text-[14px]" />
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="md:mt-8 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Why Resilience Starts with Visibility*/}
              <div className="md:mt-[50px] mt-[40px]">
                {visibilityData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                      <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                      <UnorderedList
                        arrName={data.listTwo}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc4}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Introducing Rialtes Demand+: Real-Time Planning in Action*/}
              <div className="md:mt-[50px] mt-[40px]">
                {DemandData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                         <p
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data.desc }}
                    />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc1}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* What Demand+ Delivers */}
              <div className="md:mt-[50px] mt-[40px]">
                {DemandplusData.map((data, id) => (
                  <div key={id}>
                    <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                      {data.title}
                    </h2>
                    <p
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data.desc }}
                    />
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[50px] mt-[40px] gap-[20px] sm:w-[80%] md:w-full 4xl:w-[1100px]">
                      {data.list.map((item, id) => {
                        return (
                          <div
                            className="4xl:p-[36px] p-[32px] border border-[#707070]"
                            key={id}
                          >
                            <h3 className="text-[#006FBE] 4xl:text-[22px] xl:text-[19px] text-[18px] font-bold pb-4">
                              {item.title}
                            </h3>
                            <p
                              className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                              dangerouslySetInnerHTML={{ __html: item.desc }}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="md:mt-[40px] mt-[30px]">
                      <div className="bg-[#f2f2f2] p-6 md:p-10 rounded-md ">
                        <p className="font-bold text-lg md:text-xl mb-6 md:mb-10 4xl:text-[22px] xl:text-[19px] text-[18px]">
                          The Demand+ Delivery Model
                        </p>

                        {/* Desktop */}
                        <div className="hidden md:flex items-center justify-between relative">
                          <div className="absolute top-5 left-0 right-[80px] h-[2px] bg-gray-400"></div>
                          {data.steps.map((step, index) => (
                            <div key={index} className="flex flex-col  z-10">
                              <div className="w-10 h-10 bg-[#006FBE] rounded-full flex items-center justify-center">
                                <FaChevronRight className="text-white text-lg" />
                              </div>
                              <span className="mt-3 font-bold text-black 4xl:text-[24px] 2xl:text-[19px] text-[18px]">
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Mobile  */}
                        <div className="flex flex-col gap-6 md:hidden">
                          {data.steps.map((step, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-4 relative"
                            >
                              {index !== 0 && (
                                <div className="absolute left-[14px] -top-6 h-6 w-[2px] bg-gray-400"></div>
                              )}
                              <div className="w-8 h-8 bg-[#006FBE] rounded-full flex items-center justify-center shrink-0">
                                <FaChevronDown className="text-white text-sm" />
                              </div>
                              <span className="font-bold 4xl:text-[24px] 2xl:text-[21px] text-[20px] mt-[1px] text-center">
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* How Demand+ Enables Faster Response to Disruption */}
              <div className="md:mt-[50px] mt-[40px]">
                {DeliversData.map((data, id) => (
                  <div key={id}>
                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight mb-[22px] xl:mb-[30px]">
                      {data.title}
                    </h2>
                    <p
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data.desc }}
                    />
                    <div className="mt-5">
                      {data.list.map((item, id) => {
                        return (
                          <div className="" key={id}>
                            <h3 className=" 4xl:text-[22px] xl:text-[19px] text-[18px] font-bold mt-5">
                              {item.title}
                            </h3>
                            <p
                              className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-4"
                              dangerouslySetInnerHTML={{ __html: item.desc }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              {/* Who Benefits Most from DemandPlus */}
              <div className="md:mt-[50px] mt-[40px]">
                {benefitsData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                       <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                      />
                    </div>
                  );
                })}
              </div>
              {/* Business Outcomes Leaders Care About */}
              <div className="md:mt-[50px] mt-[40px]">
                {businessData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                       <p
                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq section */}
      <section className="xl:mt-[80px] mt-[40px] custom-container">
        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
          FAQs: Transform Your Supply Chain with Rialtes ‘Demand+’
        </h2>
        <div className="mt-[29px] xl:mt-[30px]">
          <FAQAccordion faqData={faqData} />
        </div>
      </section>

      {/* blog carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <FilteredBlogCarousel url={currUrl} />
      </section>
    </section>
  );
}
