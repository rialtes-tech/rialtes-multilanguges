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
export default function Page() {
  const fullUrl =
    "https://www.rialtes.com/insights/blogs/how-digital-innovation-transforms-clinical-trial-management";
  const currUrl = useUrl();

  const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "How Digital Innovation Is Transforming Clinical Trial Management | Rialtes",
  "description": "Digital innovation is transforming the clinical research landscape as AI, automation, and connected ecosystems redefine execution of digital clinical trials.",
  "image": "https://www.rialtes.com/images/blog/digital-medical-hologram-banner.webp",
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
    "@id": "https://www.rialtes.com/insights/blogs/how-digital-innovation-transforms-clinical-trial-management/"
  },
  "datePublished": "2025-11-25",
    "mainEntity": {
    "@type": "FAQPage",
    "name": " FAQs: Transforming Clinical Trial Management",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are digital clinical trials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital clinical trials utilize technologies such as AI, cloud platforms, and wearable devices to collect, manage, and analyze data more efficiently than traditional trials."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI improve patient enrollment in clinical trials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-powered systems analyze patient records and demographics to match participants quickly and accurately, especially for rare disease studies."
        }
      },
      {
        "@type": "Question",
        "name": "What tools help reduce clinical trial dropout rates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mobile apps, telehealth platforms, and digital reminders improve engagement, communication, and adherence, helping lower trial dropout rates."
        }
      },
      {
        "@type": "Question",
        "name": "Why are intelligent healthcare ecosystems important for trials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They connect providers, payers, and research systems, ensuring smoother data exchange, regulatory compliance, and real-time monitoring."
        }
      },
      {
        "@type": "Question",
        "name": "How does MediAIna support digital clinical trial management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MediAIna integrates clinical, operational, and patient data across multiple systems, automating trial management and improving decision-making."
        }
      },
      {
        "@type": "Question",
        "name": "What is the future of digital innovation in clinical research?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The future lies in AI-driven, patient-centric, and connected ecosystems that accelerate trial timelines, reduce costs, and enhance patient outcomes."
        }
      }
    ]
  }
};
  const blogMainData = [
    "Clinical trials have always been the core of medical progress. But here’s the bitter truth: usual trials are often slow, expensive, and feel disconnected from the digital-first world in which patients now live. Data silos, manual processes, and low patient retention continue to challenge research outcomes.",
    "Digital innovation is transforming the clinical research landscape. Technologies such as AI, automation, and <a href='https://www.rialtes.com/insights/blogs/connected-care-ecosystem-pharma-medtech/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>connected ecosystems</a> are redefining the design, monitoring, and execution of digital clinical trials. These advancements improve accuracy, accelerate timelines, and enhance the patient experience. Let’s explore how digital transformation is revolutionizing clinical trial management, reducing dropout rates, and paving the way for smarter, patient-centric research.",
  ];
  const analyticsData = [
    {
      title: "Smarter Patient Recruitment with AI and Predictive Analytics",
      data: [
        "One of the biggest challenges in clinical trials has always been patient enrollment, particularly for rare diseases, where suitable candidates are few and often geographically dispersed.",
        "Here’s where <a href='https://www.rialtes.com/insights/blogs/ai-in-clinical-trials-rare-disease-enrolment/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>AI-powered patient enrollment in rare disease trials</a> changes the game. Advanced algorithms analyze medical histories, genomic data, and electronic health records (EHRs) to identify eligible participants with remarkable precision. This not only accelerates recruitment but also ensures diversity and compliance with inclusion criteria. Predictive analytics tools further refine this process by forecasting enrollment patterns and identifying potential drop-offs before they occur. For sponsors, this means better planning and higher success rates. According to a McKinsey analysis, AI-based recruitment tools can cut enrollment times by 50%.",
      ],
    },
  ];
  const trialsData = [
    {
      title: "Decentralized participation",
      desc: "allowing patients to contribute from anywhere.",
    },
    {
      title: "Automated data collection",
      desc: "reducing reliance on manual input.",
    },
    {
      title: "Real-time analytics",
      desc: "ensuring quicker decision-making.",
    },
    {
      title: "Improved compliance",
      desc: "as data is securely tracked and monitored end-to-end.",
    },
  ];
  const buildData = [
    {
      title: "Building Intelligent Healthcare Ecosystems for Trials",
      desc: "Clinical research no longer happens in isolation. To deliver meaningful outcomes, data must flow seamlessly between healthcare providers, payers, MedTech platforms, and regulatory bodies.",
      desc1:
        "This creates the need for intelligent healthcare ecosystems for trials, connected digital infrastructures that unify data, automate reporting, and ensure regulatory compliance.",
      desc2: "Such ecosystems bring together:",
      gridLeft: [
        "Electronic Data Capture (EDC) and Electronic Trial Master File (eTMF) systems.",
        "AI-powered data validation for real-time quality checks.",
      ],
      gridRight: [
        "Remote patient monitoring (RPM) tools and telemedicine interfaces.",
        "Interoperability frameworks for integrating with existing EMRs or hospital systems.",
      ],
      desc3:
        "The World Health Organization notes that digital ecosystems can reduce data discrepancies by over 70%, creating more reliable, compliant, and transparent clinical outcomes.",
    },
  ];
  const toolsData = [
    {
      title: "Reducing Clinical Trial Dropout Rates with Digital Tools",
      desc: "Patient engagement is the cornerstone of trial success. Yet, many studies report dropout rates of up to 40%, often due to lack of communication, accessibility challenges, or poor participant experience.",
      desc1:
        "By reducing clinical trial dropout rates with digital tools, organizations can now build more engaging, connected trial journeys. Mobile apps, wearables, and telehealth platforms allow participants to:",
      list: [
        "Track progress and medication schedules easily",
        "Communicate with study coordinators in real-time.",
        "Receive automated reminders and follow-ups.",
        "Log side effects or feedback from home.",
      ],
      desc2:
        "These digital interventions foster trust, convenience, and continuity. The result? Improved adherence, higher data integrity, and faster trial completion. A study published in Nature Digital Medicine found that patient engagement platforms improved retention by up to 60%, particularly in long-term chronic disease studies.",
    },
  ];
  const innovationData = [
    {
      title: "The Role of Data and AI in Clinical Research Innovation",
      desc: "With advanced analytics and machine learning, organizations can now extract deep insights from trial data, predict outcomes, optimize study design, and even identify potential adverse reactions before they escalate.",
      desc1:
        "Here’s how clinical research innovation through AI is accelerating progress:",
      list: [
        "Automated anomaly detection for cleaner datasets.",
        "Predictive modeling for dosage optimization.",
        "Natural Language Processing (NLP) for faster regulatory documentation.",
        "Digital twins for simulating trial outcomes before deployment.",
      ],
      desc2:
        "According to Accenture, life sciences companies adopting AI in research see 40–50% improvement in data accuracy and 25% faster regulatory submissions.",
    },
  ];
  const quickAnswer = [
    {
      title:
        "A Seamless Future with MediAIna for Digital Clinical Trial Management",
      desc: "At the center of this transformation are platforms that unify every digital and operational touchpoint. <a href='https://www.rialtes.com/products/mediaina-reimagining-patient-journeys/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>MediAIna</a> is one such next-generation solution.",
      desc1:
        "Developed by <a href='https://www.rialtes.com/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>Rialtes</a>, MediAIna redefines how healthcare and life sciences enterprises conduct and oversee trials. By integrating clinical, operational, and patient engagement data, it creates a 360-degree view of trial performance — from recruitment to post-trial analysis.",
      desc2: "Key capabilities include:",
      features: [
        "AI-based patient enrollment and retention tools.",
        "Automated data collection with advanced analytics dashboards.",
        "Seamless integration with EHRs, MedTech devices, and lab systems.",
        "Compliance-ready workflows aligned with global standards like HIPAA and GxP.",
      ],
      desc3:
        "MediAIna is the foundation of a smarter, more connected healthcare ecosystem. It helps life sciences organizations reduce trial costs, shorten timelines, and enhance patient outcomes while staying fully compliant and future-ready.",
      desc4:
        "Rialtes’ vision with MediAIna is simple yet powerful: to <a href='https://www.rialtes.com/insights/blogs/digital-patient-journeys-ai-healthcare-life-sciences/' class='text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline'>transform the patient journey</a> by merging clinical intelligence with digital innovation.",
    },
  ];
  const faqData = [
    {
      question: "1. What are digital clinical trials?",
      answer:
        "Digital clinical trials utilize technologies such as AI, cloud platforms, and wearable devices to collect, manage, and analyze data more efficiently than traditional trials.",
    },
    {
      question: "2. How does AI improve patient enrollment in clinical trials?",
      answer:
        "AI-powered systems analyze patient records and demographics to match participants quickly and accurately, especially for rare disease studies.",
    },
    {
      question: "3. What tools help reduce clinical trial dropout rates?",
      answer:
        "Mobile apps, telehealth platforms, and digital reminders improve engagement, communication, and adherence, helping lower trial dropout rates.",
    },
    {
      question:
        "4. Why are intelligent healthcare ecosystems important for trials?",
      answer:
        "They connect providers, payers, and research systems, ensuring smoother data exchange, regulatory compliance, and real-time monitoring.",
    },
    {
      question:
        "5. How does MediAIna support digital clinical trial management?",
      answer:
        "TMediAIna integrates clinical, operational, and patient data across multiple systems, automating trial management and improving decision-making.",
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
        title="Digital Innovation Unlocking Smarter Clinical Trial Management"
        description="Digital innovation is transforming the clinical research landscape as AI, automation, and connected ecosystems redefine execution of digital clinical trials."
        canonical={
          "https://www.rialtes.com/insights/blogs/how-digital-innovation-transforms-clinical-trial-management/"
        }
      />

      <Script
        id="schema-copilots"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        <div className="md:block hidden">
          <Image
            src="/images/blog/digital-medical-hologram-banner.webp"
            className="w-full h-auto object-cover"
            alt="Doctor interacting with holographic medical data and 3D health visuals in a futuristic digital lab"
            fill
            priority
          />
        </div>
        <div className="md:hidden block">
          <Image
            src="/images/blog/digital-medical-hologram-mobile.webp"
            alt="Doctor interacting with holographic medical data and 3D health visuals in a futuristic digital lab"
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
                  MediAIna
                </span>{" "}
                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                  {" "}
                  |{" "}
                </span>
                25 November 2025
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
                How Digital Innovation is Transforming Clinical Trial Management{" "}
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
              {/* The Shift from Traditional to Digital Clinical Trials */}
              <div className="md:mt-[50px] mt-[40px]">
                <div>
                  <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    The Shift from Traditional to Digital Clinical Trials
                  </h2>
                  <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    In conventional clinical trials, data collection is all over
                    the place, involving multiple systems and manual entry
                    points. This slows down analysis and increases the
                    likelihood of human error. By contrast, digital clinical
                    trials leverage cloud platforms, AI algorithms, and remote
                    monitoring tools to manage every stage of a trial, from
                    design to patient follow-up. These innovations have enabled:
                  </p>
                  <div className="grid xl:gap-[38px] md:gap-[25px] gap-4 sm:grid-cols-2 lg:grid-cols-4  xl:mt-[40px] mt-4 mb-5">
                    {trialsData.map((item, index) => (
                      <div key={index} >
                       <span> <h3 className=" inline font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight text-black lg:mt-0 mt-4">
                          {item.title}
                        </h3>,</span>
                        <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight mt-1">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="xl:mt-[35px] mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                    According to a recent Deloitte report, digital solutions can
                    reduce trial timelines by up to 30% and cut operational
                    costs by nearly 25%. For research teams and sponsors, that’s
                    the difference between a breakthrough and a bottleneck.
                  </p>
                </div>
              </div>
              {/* Smarter Patient Recruitment with AI and Predictive Analytics */}
              <div className="md:mt-[50px] mt-[40px]">
                {analyticsData.map((item, index) => (
                  <div key={index}>
                    <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                      {item.title}
                    </h2>

                    {item.data.map((paragraph, i) => (
                      <p
                      key={i}
                      className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                    ))}
                  </div>
                ))}
              </div>

              {/* Reducing Clinical Trial Dropout Rates with Digital Tools */}
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
                    </div>
                  );
                })}
              </div>
              {/* Building Intelligent Healthcare Ecosystems for Trials */}
              <div className="md:mt-[50px] mt-[40px]">
                {buildData.map((data, id) => {
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
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold ">
                        {data.desc2}
                      </p>
                      <div className="lg:mt-[50px] mt-[25px] relative grid grid-cols-1 md:grid-cols-2 lg:gap-y-12 gap-y-6">
                        <div className="relative flex flex-col pr-14">
                          <div className="hidden md:block absolute left-full top-0 bottom-0 w-px bg-[#707070]"></div>
                          <h3 className="text-[#006FBE] font-bold 4xl:text-[22px] 2xl:text-[19px] text-[18px]">
                            {data.gridLeft[0]}
                          </h3>
                        </div>

                        <div className="relative flex flex-col md:pl-14">
                          <h3 className="text-[#006FBE] font-bold 4xl:text-[22px] 2xl:text-[19px] text-[18px]">
                            {data.gridRight[0]}
                          </h3>
                        </div>

                        <div className="relative flex flex-col pr-14">
                          <div className="hidden md:block absolute left-full top-0 bottom-0 w-px bg-[#707070]"></div>
                          <h3 className="text-[#006FBE] font-bold 4xl:text-[22px] 2xl:text-[19px] text-[18px]">
                            {data.gridLeft[1]}
                          </h3>
                        </div>

                        <div className="relative flex flex-col md:pl-14">
                          <h3 className="text-[#006FBE] font-bold 4xl:text-[22px] 2xl:text-[19px] text-[18px]">
                            {data.gridRight[1]}
                          </h3>
                        </div>
                      </div>

                      <p className="xl:mt-[60px] mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* The Role of Data and AI in Clinical Research Innovation */}
              <div className="md:mt-[50px] mt-[40px]">
                {innovationData.map((data, id) => {
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
                    </div>
                  );
                })}
              </div>
              {/* A Seamless Future with MediAIna*/}
              <div className="md:mt-[50px] mt-[40px]">
                {quickAnswer.map((data, id) => {
                  return (
                    <div key={id}>
                      <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                        {data.title}
                      </h2>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                       dangerouslySetInnerHTML={{ __html: data.desc }} />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                       dangerouslySetInnerHTML={{ __html: data.desc1 }} />
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold ">
                        {data.desc2}
                      </p>
                      <div className="xl:mt-[30px] mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 4xl:mr-28 xl:mr-20">
                        {data.features.map((item, i) => (
                          <div
                            key={i}
                            className="border border-[#A2A2A2] opacity-100 p-5 h-full flex items-start"
                          >
                            <h3 className="font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                              {item}
                            </h3>
                          </div>
                        ))}
                      </div>

                      <p className="xl:mt-[30px] mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                        {data.desc3}
                      </p>
                      <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                       dangerouslySetInnerHTML={{ __html: data.desc4 }} />
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
          FAQs: Transforming Clinical Trial Management
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
