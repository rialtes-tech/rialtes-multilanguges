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
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
export default function Page() {
  const fullUrl = "https://www.rialtes.com/insights/blogs/crm-as-growth-engine-life-sciences";
  const currUrl = useUrl();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Why CRM Is Now a Growth Driver in Life Sciences | Rialtes",
    description:
      "CRM in life sciences is no longer just a sales tool—it now drives patient engagement, compliance, and measurable business growth.",
    image:
      "https://www.rialtes.com/images/blog/medical-diagnostic-imaging-analysis-multiple-screens.webp",
    author: {
      "@type": "Organization",
      name: "Rialtes",
    },
    publisher: {
      "@type": "Organization",
      name: "Rialtes",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rialtes.com/images/homepage/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.rialtes.com/insights/blogs/crm-as-growth-engine-life-sciences/",
    },
    datePublished: "2026-01-07",
    mainEntity: {
      "@type": "FAQPage",
      name: "FAQs: Need for Life Sciences CRM",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Life Sciences CRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A CRM designed specifically for pharma, biotech, medtech, and healthcare organizations to manage HCP, patient, and commercial engagement with compliance and data transparency.",
          },
        },
        {
          "@type": "Question",
          name: "Why is traditional CRM not enough for life sciences anymore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Because it focuses mainly on sales interactions, modern healthcare demands patient support, omnichannel HCP engagement, automation, safety tracking, and outcomes-driven insights.",
          },
        },
        {
          "@type": "Question",
          name: "How does Rialtes LifeAI+ improve patient and HCP experience?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By unifying data, automating workflows, enabling digital engagement, and using AI to identify next actions, risks, and opportunities.",
          },
        },
        {
          "@type": "Question",
          name: "Does LifeAI+ support regulatory compliance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It provides consent management, AE tracking, transparency reporting, documentation workflows, and audit-ready data logs.",
          },
        },
        {
          "@type": "Question",
          name: "Which platforms does LifeAI+ use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Salesforce Life Sciences Cloud, Health Cloud, Data Cloud, Einstein AI, and automation frameworks built for healthcare.",
          },
        },
      ],
    },
  };
  const blogMainData = [
    "For years, most life sciences organizations treated CRM as a sales enablement tool — a place to track accounts, schedule visits, manage samples, and record touchpoints. It worked when commercial models were simpler, pipelines were linear, and patient engagement happened mostly through physicians. However, the healthcare landscape has undergone significant changes.",
    "Patients are more informed. Providers are more digital. Regulatory standards keep tightening. Treatment journeys are longer, complex, and outcome-driven. Meanwhile, commercial success doesn’t depend solely on sales representatives but also on experience, access, adherence, education, and data-driven engagement.",
    "Research validates the shift. Deloitte reports that more than 60 percent of life sciences leaders rank patient experience as a top strategic priority, yet only 28 percent feel their systems support end-to-end engagement. <a href='https://healthcareasiamagazine.com/healthcare/news/healthcare-data-projected-grow-36-cagr-2025/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Another study</a> suggests that healthcare data volumes are growing at a 36 percent CAGR, but much of it lies unused due to fragmented ecosystems and legacy technology.",
    "The conclusion is simple to comprehend: Life sciences CRM can’t stay sales-first. It must become <a href='https://www.rialtes.com/insights/blogs/digital-patient-journeys-ai-healthcare-life-sciences/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>patient-centric, data-intelligent, and AI-powered</a>.",
  ];

  const lifeAiData = [
    {
      title:
        "Introducing LifeAI+: A Connected, Intelligent Approach to Life Sciences CRM",
      desc: "LifeAI+ is our comprehensive consulting and implementation service built specifically for the life sciences ecosystem. It combines the power of Salesforce Life Sciences Cloud, Health Cloud, and AI-driven automation to help enterprises <a href='https://www.rialtes.com/insights/blogs/patient-experience-platform-transforming-long-term-care/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>modernize patient experience</a>, streamline HCP engagement, and scale compliant digital operations.",
      desc1:
        "Instead of treating CRM as a sales system, LifeAI+ turns it into an industry-wide engagement engine.",
      desc2: "What LifeAI+ brings to your organization",
      list: [
        "Unified patient, HCP, payer, and trial data",
        "Automated workflows across commercial & medical teams",
        "AI-powered insights for engagement, adherence, and next best action",
        "Compliance-built frameworks for regulatory safety",
        "Omnichannel experience across email, field, patient apps & portals",
        "Analytics and dashboards for real-time decision making",
      ],
    },
  ];
  const toolsData = [
    {
      title: "The Limits of Traditional Life Sciences CRM",
      desc: "Let’s call out the gap clearly. Traditional CRM was never designed for the complexities of modern healthcare. It tracks interactions, yes — but doesn’t connect clinical workflows, patient outcomes, medical affairs, market access, or post-commercial programs like adherence and remote monitoring.",
      desc1: "Common pain points include:",
      list: [
        "Siloed patient, HCP, and commercial data",
        "Limited visibility into treatment outcomes",
        "Manual processes across support teams",
        "Difficulty tracking omnichannel engagement",
        "Lack of real-time insights for decisions",
        "Compliance risk due to disjointed documentation",
      ],
      desc2:
        "This leads to a simple but painful result — great products struggle to unlock their full impact because the experience around them isn’t coordinated or intelligent.",
      crmData: [
        {
          title: "Sales-centric workflows",
          icon: "/images/blog/target-goal-precision-focus-icon.svg",
          alt: "Circular target icon with concentric rings representing goals, precision targeting, and business objective focus",
        },
        {
          title: "Disconnected patient & provider data",
          icon: "/images/blog/healthcare-cloud-storage-patient-data-icon.svg",
          alt: "Cloud storage icon with patient profile and medical cross representing healthcare data management and secure cloud backup",
        },
        {
          title: "No clinical or service integration",
          icon: "/images/blog/cloud-cancel-disconnect-service-termination-icon.svg",
          alt: "Cloud with cancel symbol icon representing cloud service cancellation, data removal, or disconnected cloud integration",
        },
        {
          title: "Low automation & insight generation",
          icon: "/images/blog/business-growth-analytics-performance-optimization-icon.svg",
          alt: "Gear with rising bar chart icon representing business growth analytics, performance metrics, and operational optimization",
        },
      ],
    },
  ];
  const industryData = [
    {
      title: "The Industry Has Shifted, and CRM Must Evolve With It",
      desc: "Modern life sciences organizations aren’t just selling therapies. They’re managing relationships across the entire healthcare value chain.",
      desc1: "That includes:",
      list: [
        "Healthcare professionals",
        "Patients & caregivers",
        "Clinical trial stakeholders",
        "Payers and PBMs",
        "Specialists & treatment centers",
        "Pharmacovigilance & safety teams",
      ],
      desc2:
        "The goal is to achieve continuous engagement, trust, and compliance-driven support. When CRM integrates clinical, operational, and real-world data, the organization shifts from reactive communication to proactive experience",
      desc3: "This is why the industry is moving from CRM = sales",
      desc4: "towards",
      desc5: "CRM = unified patient, provider, and commercial platform.",
    },
  ];
  const salesData = [
    {
      title: "Going Beyond Sales: What Modern Life Sciences CRM Must Deliver",
      desc: "Let’s break down what “next-generation CRM” looks like in real business scenarios — and how LifeAI+ enables it.",
      points: [
        {
          heading: "Patient Journey Support, Not Just HCP Calls",
          intro:
            "Care doesn’t end when a prescription is written. Patients need onboarding, financial assistance, reminders, education, and follow-ups.",
          enablesText: "LifeAI+ enables:",
          list: [
            "Digital onboarding workflows",
            "Personalized patient communication",
            "Nurse navigator and care team coordination",
            "Adherence tracking through patient apps",
            "AI-generated insights on drop-off risks",
          ],
          outcome:
            "Outcome? Higher therapy adherence and better real-world outcomes.",
        },
        {
          heading: "Real Intelligence for Field & Medical Teams",
          intro:
            "Sales reps need context. MSLs need evidence. Both need data in one place, not 12 spreadsheets.",
          enablesText: "LifeAI+ empowers them with:",
          list: [
            "HCP 360° profiles and preference insights",
            "Territory planning and call prioritization",
            "Medical inquiry management",
            "Remote, hybrid, and in-person visit tracking",
          ],
          outcome: "This makes engagement smarter, compliant, and value-based",
        },
        {
          heading: "Compliance Without Manual Burden",
          intro:
            "In life sciences, compliance isn’t optional — it’s survival. Manual tracking increases risk.",
          enablesText: "LifeAI+ enables policy-embedded workflows for:",
          list: [
            "Consent & data privacy",
            "Sample tracking",
            "HCP compensation transparency",
            "AE and pharmacovigilance reporting",
          ],
          outcome: "Regulatory alignment becomes proactive, not reactive.",
        },
        {
          heading: "Clinical-Commercial Continuity",
          intro:
            "Trials, launch, commercialization, and post-market — all stages should talk to each other.",
          enablesText: "LifeAI+ connects:",
          list: [
            "Trial participation data",
            "Patient support programs",
            "Safety & case management",
            "Real-world evidence & feedback loops",
          ],
          outcome: "This ensures outcomes, not assumptions, guide decisions.",
        },
      ],
    },
  ];
  const businessData = [
    {
      title: "Business Outcomes That Leadership Cares About",
      list: [
        "Faster launches and streamlined commercialization",
        "Higher HCP satisfaction and digital response rates",
        "Improved patient adherence & support outcomes",
        "Reduction in manual workload & operational costs",
        "Real-time dashboards for performance visibility",
        "Compliance-ready documentation and approvals",
        "AI-powered prediction for churn, adherence, and engagement",
      ],
      desc: "This is how CRM becomes a growth driver, not just a database.",
    },
  ];
  const beforeAfterData = [
    {
      before: "Manual tracking",
      after: "Automated workflows",
    },
    {
      before: "Data silos",
      after: "Single integrated data model",
    },
    {
      before: "Sales & Service",
      after: "Recommendation engines, automated quotations",
    },
    {
      before: "Sales-only CRM",
      after: "Patient + HCP + Case + Trial enablement",
    },
    {
      before: "Reactive insights",
      after: "Predictive intelligence",
    },
  ];
  const impactData = [
    {
      title: "Where LifeAI+ Makes the Biggest Impact",
      desc: "Perfect for organizations that want to overhaul experience, unify systems, or scale digitally.",
      list: [
        "Pharma and biotech launching new products",
        "Medtech companies managing device lifecycle",
        "CROs and research teams improving trial efficiency",
        "Specialty therapy providers needing adherence support",
        "Enterprises replacing legacy or fragmented CRMs",
      ],
      desc1:
        "If the mission is better outcomes, better engagement, and better decisions, <a href='https://www.rialtes.com/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>LifeAI+ is the step forward</a>. Life sciences don’t need another CRM; they need an intelligent experience platform. That’s what LifeAI+ brings to the table.",
    },
  ];
  const faqData = [
    {
      question: "1. What is Life Sciences CRM?",
      answer:
        "A CRM designed specifically for pharma, biotech, medtech, and healthcare organizations to manage HCP, patient, and commercial engagement with compliance and data transparency.",
    },
    {
      question:
        "2. Why is traditional CRM not enough for life sciences anymore?",
      answer:
        "Because it focuses mainly on sales interactions, modern healthcare demands patient support, omnichannel HCP engagement, automation, safety tracking, and outcomes-driven insights.",
    },
    {
      question:
        "3. How does Rialtes LifeAI+ improve patient and HCP experience?",
      answer:
        "By unifying data, automating workflows, enabling digital engagement, and using AI to identify next actions, risks, and opportunities.",
    },
    {
      question: "4. Does LifeAI+ support regulatory compliance?",
      answer:
        "Yes. It provides consent management, AE tracking, transparency reporting, documentation workflows, and audit-ready data logs.",
    },
    {
      question: "5. Which platforms does LifeAI+ use?",
      answer:
        "Salesforce Life Sciences Cloud, Health Cloud, Data Cloud, Einstein AI, and automation frameworks built for healthcare.",
    },
    {
      question:
        "6. What is the future of digital innovation in clinical research?",
      answer:
        "The future lies in AI-driven, patient-centric, and connected ecosystems that accelerate trial timelines, reduce costs, and enhance patient outcomes.",
    },
  ];
  return (
    <section className="min-h-screen">
      <Seo
        title="Why CRM Is Now a Growth Driver in Life Sciences | Rialtes"
        description="Modern life sciences CRM goes beyond sales to drive growth through patient experience, intelligent insights, and compliance-ready workflows."
        canonical={
          "https://www.rialtes.com/insights/blogs/crm-as-growth-engine-life-sciences/"
        }
      />
      <Script
        id="schema-copilots"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="lg:block hidden">
          <Image
            src="/images/blog/medical-diagnostic-imaging-analysis-multiple-screens.webp"
            className="w-full h-auto object-cover"
            alt="Doctor analyzing patient diagnostics on multiple screens displaying brain scans, skeletal images, and real-time vital signs"
            fill
            priority
          />
        </div>
        <div className="lg:hidden block">
          <Image
            src="/images/blog/medical-diagnostic-imaging-analysis-multiple-screens-mobile-banner.webp"
            alt="Doctor analyzing patient diagnostics on multiple screens displaying brain scans, skeletal images, and real-time vital signs"
            priority
            height={0}
            width={0}
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
                  Salesforce Life Sciences Cloud
                </span>{" "}
                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {" "}
                  |{" "}
                </span>
                07 January 2026
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
                Life Sciences CRM: Why Sales-Only Systems No Longer Work in
                Modern Healthcare
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
              {/* The Limits of Traditional Life Sciences CRM */}
              <div className="md:mt-[50px] mt-[40px]">
                {toolsData.map((data, id) => {
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
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                      <div className="lg:mt-[50px] mt-[25px]">
                        <p className="font-semibold  mb-10 4xl:text-[26px] 2xl:text-[21px] text-[20px]">
                          Why traditional CRM falls short
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                          {data.crmData.map((item, index) => (
                            <div
                              key={index}
                              className="flex flex-col md:items-start md:text-start items-center text-center"
                            >
                              <img
                                src={item.icon}
                                alt={item.alt}
                                className="4xl:w-[120px] 4xl:h-[120px]  xl:w-[100px] xl:h-[100px] w-[90px] h-[90px] mb-6 "
                              />
                              <p className="font-semibold 4xl:text-[26px] xl:text-[19px] text-[18px]">
                                {item.title}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* The Industry Has Shifted, and CRM Must Evolve With It*/}
              <div className="md:mt-[50px] mt-[40px]">
                {industryData.map((data, id) => {
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
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc2}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                      <p className="mt-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc4}
                      </p>
                      <p className="mt-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc5}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* Introducing LifeAI+: A Connected, Intelligent Approach to Life Sciences CRM*/}
              <div className="md:mt-[50px] mt-[40px]">
                {lifeAiData.map((data, id) => {
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
                      <h3 className="mt-5 4xl:text-[26px] 2xl:text-[21px] text-[20px] font-bold">
                        {data.desc2}
                      </h3>
                      <ul className="mt-5 list-disc pl-[36px] lg:pl-[56px] space-y-2">
                        {data.list.map((item, index) => (
                          <li key={index}>
                            <h4 className="4xl:text-[20px] font-medium 2xl:text-[18px] xl:text-[18px] md:text-[16px] text-[16px] ">
                              {item}
                            </h4>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-10 w-full xl:w-[70%] bg-[#E2F3FF] py-[36px] md:py-[36px]">
                        <div className=" mx-auto px-[36px]">
                          <div className="flex flex-col gap-6">
                            <p className="font-semibold 4xl:text-[31px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] ">
                              LifeAI+ Core Pillar
                            </p>
                            <p className="font-semibold 4xl:text-[26px] xl:text-[19px] text-[18px]">
                              Patient Experience <span className="mx-2">|</span>
                              HCP Engagement <span className="mx-2">|</span>
                              Compliance Automation{" "}
                              <span className="mx-2">|</span>
                              AI-Driven Intelligence
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Going Beyond Sales: What Modern Life Sciences CRM Must Deliver*/}
              <div className="md:mt-[50px] mt-[40px]">
                {salesData.map((data, ind) => (
                  <div key={ind} className="space-y-10">
                    <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">
                      {data.title}
                    </h2>
                    <p
                      className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: data.desc }}
                    />

                    {data.points.map((point, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="font-semibold 4xl:text-[24px] 2xl:text-[21px] text-[20px] xl:mb-7 mb-5">
                          {index + 1}. {point.heading}
                        </h3>

                        <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                          {point.intro}
                        </p>

                        {point.enablesText && (
                          <p className=" 4xl:text-[20px] 2xl:text-[17px] text-[16px] mt-5">
                            {point.enablesText}
                          </p>
                        )}

                        {point.list && (
                          <UnorderedList
                            arrName={point.list}
                            ulClassName="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                          />
                        )}
                        {point.outcome && (
                          <p className=" 4xl:text-[20px] 2xl:text-[17px] text-[16px] mt-5">
                            {point.outcome}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              {/* Business Outcomes That Leadership Cares About*/}
              <div className="md:mt-[50px] mt-[40px]">
                {businessData.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <UnorderedList
                        arrName={data.list}
                        ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[36px] lg:pl-[56px] font-medium space-y-2"
                      />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc}
                      </p>
                    </div>
                  );
                })}
                <div className="w-full xl:w-[80%] bg-[#F0F0F0] p-6 md:p-10 md:mt-[50px] mt-[40px]">
                  {/* Title */}
                  <p className="font-semibold text-gray-900 mb-6 4xl:text-[26px] 2xl:text-[21px] text-[20px]">
                    Before vs After LifeAI+ chart
                  </p>

                  {/* Rows */}
                  <div className="divide-y divide-gray-400">
                    {beforeAfterData.map((item, index) => (
                      <div
                        key={index}
                        className="
          grid
          grid-cols-1
          md:grid-cols-[210px_48px_1fr]
          items-start md:items-center
          py-4 md:py-5
          gap-3 md:gap-4
        "
                      >
                        <p
                          className="text-gray-900
          4xl:text-[20px] xl:text-[17px] md:text-[16px] text-[16px]"
                        >
                          {item.before}
                        </p>

                        <div className="flex justify-start md:justify-center">
                          <AiOutlineCaretDown className="text-[#0A6BB8] text-[28px] md:hidden" />
                          <AiFillCaretRight className="text-[#0A6BB8] text-[28px] hidden md:block" />
                        </div>

                        <p
                          className="text-gray-900
          4xl:text-[20px] xl:text-[17px] md:text-[16px] text-[16px]"
                        >
                          {item.after}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Where LifeAI+ Makes the Biggest Impact*/}
              <div className="md:mt-[50px] mt-[40px]">
                {impactData.map((data, id) => {
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
          FAQs: Need for Life Sciences CRM
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
