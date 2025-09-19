"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ContactForm from "../components/contactform";
import Seo from "../components/Seo";
import Script from "next/script";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/"
  },
  "name": "Rialtes Insights | Salesforce, SAP, and Technology Trends",
  "headline": "Explore Insights That Power Digital Transformation",
  "description": "Discover Rialtes Insights: A knowledge hub featuring thought leadership blogs, real-world case studies, and expert-led webinars focused on Salesforce, SAP, and enterprise tech innovation.",
  "hasPart": [
    {
      "@type": "CollectionPage",
      "name": "Rialtes Blogs | Expert Insights on Digital Transformation",
      "url": "https://www.rialtes.com/insights/blogs/"
    },
    {
      "@type": "CollectionPage",
      "name": "Rialtes Case Studies | Proven Salesforce and SAP Implementations",
      "url": "https://www.rialtes.com/insights/case-studies/"
    },
    {
      "@type": "CollectionPage",
      "name": "Rialtes Webinars | Learn from Salesforce & SAP Experts",
      "url": "https://www.rialtes.com/insights/webinars/"
    }
  ],
  "publisher": {
    "@type": "Organization",
    "name": "Rialtes",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    }
  }

}
const caseStudies = [
  {
    id: "case-study-2",
    image: "/images/case-studies/AutoSense Warranty Management Modules_Case study feature thumb.webp",
    alt: "Diversity illustration",
    category: "Automotive",
    date: "30 June 2025",
    title: "Leading Automotive Manufacturer Achieved 35% Higher Customer Satisfaction Score with AutoSense",
    description:
      "A prominent global automotive car manufacturer, known for its innovation and high-performance vehicles, was facing challenges with its legacy warranty management system.",
    link: "/insights/case-studies/leading-automotive-manufacturer-achieved-35percent-higher-customer-satisfaction-score-with-autosense",

  },
  {
    id: "case-study-3",
    image: "/images/case-studies/revolutionary-filter.webp",
    alt: "Dealer management transformation",
    category: "Manufacturing",
    date: "03 June 2025",
    title: "Revving Up Dealer Management with AutoSense by Rialtes",
    description:
      "A renowned global automotive manufacturer, recognized for its cutting-edge vehicles, faced significant challenges with their outdated dealer portal.",
    link: "/insights/case-studies/revolutionizing-dealer-management-for-a-leading-automotive-manufacturer-with-autoSense",
  },
  {
    id: "case-study-4",
    image: "/images/case-studies/adaptis-for-carousel.webp",
    alt: "Warranty claim experience",
    category: "Manufacturing",
    date: "30 May 2025",
    title:
      "Claim in 4 Minutes: Rialtes Builds Mobile-First Portal to Transform Claims Experience",
    description:
      "A leading manufacturer of high-quality roofing solutions designed to protect what matters most.",
    link: "/insights/case-studies/warranty-claim-submission-mobile-i-pad-using-experience-cloud",
  },
  // {
  //   id: "case-study-4",
  //   image: "/images/case-studies/fiory-carosel.webp",
  //   alt: "Self-service with SAP Fiori",
  //   category: "Manufacturing",
  //   date: "28 May 2025",
  //   title:
  //     "150 Orders a Day, Zero Manual Work: The Fiori-Powered Self-Service Order Prioritization",
  //   description:
  //     "Our client is a renowned manufacturer of high-quality roofing products with a legacy built on innovation, quality, and sustainability.",
  //   link: "/insights/case-studies/empowering-a-leading-roofing-manufacturer-with-self-service-order-prioritization-using-sap-fiori",
  // },
];

export default function InsightsPage() {
  const [hoveredBlog, setHoveredBlog] = useState(null);
  const [isRouterReady, setIsRouterReady] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsRouterReady(true);
  }, []);
  const handleMouseEnter = (blogName) => {
    return () => {
      setHoveredBlog(blogName);
    };
  };
  const handleMouseLeave = () => {
    return () => {
      setHoveredBlog(null);
    };
  };
  const handleClick = (blogName) => {
    return () => {
      if (isRouterReady) {
        router.push(blogName);
      }
    };
  };
  return (
    <div className="min-h-scree">
      <Seo
        title="Rialtes Insights Hub | Salesforce and SAP | Rialtes"
        description="Stay ahead with Rialtes insights: access blogs, real-world case studies, and webinars on Salesforce, SAP, and digital innovation."
        canonical="https://www.rialtes.com/insights/"
      />
      <Script
        id="schema-insights"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section with Deep Blue Gradient Background */}
      <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px]  ">
        <div className="hidden lg:block">
          <Image
            src="/images/insights/insight-header-banner-new.webp"
            alt="desktop banner"
            fill
            priority
            className="transform transition-transform duration-500 group-hover:scale-110 object-cover"
          />
        </div>
        {/* Mobile Image */}
        <div className="block lg:hidden">
          <Image
            src="/images/insights/insight-header-banner-new.webp"
            alt="mobile banner"
            className="transform transition-transform duration-500 group-hover:scale-110 "
            fill
            style={{ objectFit: "cover", objectPosition: "75% 20%" }}
            priority
          />
        </div>
        <div className="relative h-full custom-container flex items-center">
          <div className="4xl:w-[64%] xl:w-[50%]">
            <h1 className="text-white leading-tight xl:mt-10 4xl:text-[60px] xl:text-[40px] text-[26px] ">
              Stay Ahead with Expert Industry Insights
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <div className="custom-container">
        <section className="mb-16 mt-[50px] md:mt-[70px] xl:mt-[100px] lg:max-w-[800px] xl:max-w-[1600px]">
          <h2 className="text-[#000000] text-[20px] sm:text-[26px] pb-6 mb-8 max-w-4xl leading-tight">
            Take a tour of our insights section to see our latest blogs, press
            releases, case studies, news coverage, updates and upcoming events.
          </h2>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-6">
            <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[40px] text-[26px]">Featured Blog</h2>
            <div className="hidden sm:block">
              <Link
                href="/insights/blogs"
                className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-5 px-8 transition duration-300 relative overflow-hidden">
                <span className="inline-flex items-center">See All Blogs</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:flex-col xl:flex-row">
            <div
              className="border w-full xl:w-2/5 lg:w-full border-gray-200 overflow-hidden"
              onMouseEnter={handleMouseEnter("blog1")}
              onMouseLeave={handleMouseLeave("blog1")}
              onClick={handleClick("/insights/blogs/sap-pi-po-to-cpi-migration-complete-guide")}
              style={{ cursor: "pointer" }}
            >
              <div className="relative h-[300px] md:h-[500px]  lg:h-[700px] xl:h-[900px] 2xl:h-[750px] w-full overflow-hidden">
                <div
                  className="h-full w-full"
                  style={{
                    transition: "transform 0.3s ease",
                    transform:
                      hoveredBlog === "blog1" ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <Image
                    src="/images/blog/sap-cpi-mobile-banner.webp"
                    alt="Green computing illustration showing tree and circuit integration"
                    fill
                    className="object-cover h-full"
                    style={{ objectPosition: "65% 70%" }}
                    priority
                  />
                </div>
              </div>
              <div
                className="p-6 h-full"
                style={{
                  transition: "background-color 0.3s ease",
                  backgroundColor:
                    hoveredBlog === "blog1" ? "#f1f1f1" : "transparent",
                }}>
                <div className="flex 2xl:flex-row xl:flex-col flex-row max-[400px]:flex-col  mb-4">
                  <div className="text-[#0092E0] text-sm font-medium pr-3 max-[400px]:border-0 border-r xl:border-r-0 2xl:border-r border-gray-500">
                    SAP
                  </div>
                  <div className="text-gray-600 text-sm 2xl:pl-2 xl:pl-0 pl-2 max-[400px]:pl-0">26 Aug 2025</div>
                </div>
                <h3 className="mb-3 4xl:text-[30px] xl:text-[26px] md:text-[24px] text-[20px]">
                  SAP PI PO to SAP CPI Migration: A Complete Guide
                </h3>
                <p className="mb-4 4xl:text-[20px] xl:text-[18px] md:text-[18px] text-[16px]">
                  Enterprises can’t afford disconnected systems anymore; integration is the backbone of true digital transformation. For years, SAP Process Integration (PI) and Process Orchestration (PO) handled this role, connecting SAP and non-SAP landscapes. But as organizations shift to cloud-first strategies, the cracks in PI/PO are showing.
                </p>
                <Link
                  href="/insights/blogs/sap-pi-po-to-cpi-migration-complete-guide"
                  className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group">
                  <span>Read More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-10 w-full  xl:w-3/5 lg:w-full">
              <div
                className="border border-gray-200 overflow-hidden flex flex-col lg:flex-row h-full"
                onMouseEnter={handleMouseEnter("blog2")}
                onMouseLeave={handleMouseLeave("blog2")}
                onClick={handleClick("/insights/blogs/ai-patient-engagement-medtech-remote-care")}
                style={{ cursor: "pointer" }}>
                <div className="relative h-[300px] md:h-[500px] lg:h-auto lg:w-1/2 overflow-hidden ">
                  <div
                    className="h-full w-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "blog2" ? "scale(1.05)" : "scale(1)",
                    }}>
                    <Image
                      src="/images/blog/ai-in-patient-mobile-banner.webp"
                      alt="Diversity illustration"
                      fill
                      className="object-cover h-full w-full"
                      style={{ objectPosition: "15% 60%" }}
                      priority
                    />
                  </div>
                </div>
                <div
                  className="p-6 lg:p-8 lg:w-1/2 bg-white flex flex-col justify-between "
                  style={{
                    transition: "background-color 0.3s ease",
                    backgroundColor:
                      hoveredBlog === "blog2" ? "#f1f1f1" : "transparent",
                  }}>
                  <div className="flex 2xl:flex-row xl:flex-col flex-row max-[400px]:flex-col  mb-4">
                    <div className="text-[#0092E0] text-sm font-medium pr-3 max-[400px]:border-0 border-r xl:border-r-0 2xl:border-r border-gray-500">
                      Artificial Intelligence
                    </div>
                    <div className="text-gray-600 text-sm 2xl:pl-2 xl:pl-0 pl-2 max-[400px]:pl-0">09 Sept. 2025</div>
                  </div>
                  <h3 className="mb-3 4xl:text-[30px] xl:text-[26px] md:text-[24px] text-[20px]">
                    AI in Patient Engagement: How AI Agents Support MedTech in Remote Monitoring
                  </h3>
                  <p className="mb-2 4xl:text-[20px] xl:text-[18px] md:text-[18px] text-[16px]">
                    Early detection of health deterioration is vital for patients with chronic conditions or those recovering from surgery. That is the reason why patients and clinicians now rely on real-time data for faster...
                  </p>
                  <div>
                    <Link
                      href="/insights/blogs/ai-patient-engagement-medtech-remote-care"
                      className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group">
                      <span>Read More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="border border-gray-200 overflow-hidden flex flex-col lg:flex-row h-full"
                onMouseEnter={handleMouseEnter("blog3")}
                onMouseLeave={handleMouseLeave("blog3")}
                onClick={handleClick("/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce")}
                style={{ cursor: "pointer" }}>
                <div className="relative h-[300px] md:h-[500px] lg:h-auto lg:w-1/2 overflow-hidden">
                  <div
                    className="h-full w-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "blog3" ? "scale(1.05)" : "scale(1)",
                    }}>
                    <Image
                      src="/images/blog/first-ai-agent-mob-banner.webp"
                      alt="Diversity illustration"
                      fill
                      className="object-cover h-full w-full"
                      style={{ objectPosition: "10% 30%" }}
                      priority
                    />
                  </div>
                </div>
                <div
                  className="p-6 lg:p-8 lg:w-1/2 bg-white flex flex-col justify-between"
                  style={{
                    transition: "background-color 0.3s ease",
                    backgroundColor:
                      hoveredBlog === "blog3" ? "#f1f1f1" : "transparent",
                  }}>
                  <div className="flex 2xl:flex-row xl:flex-col flex-row max-[400px]:flex-col  mb-4">
                    <div className="text-[#0092E0] text-sm font-medium pr-3 max-[400px]:border-0 border-r xl:border-r-0 2xl:border-r border-gray-500">
                      Artificial Intelligence
                    </div>
                    <div className="text-gray-600 text-sm 2xl:pl-2 xl:pl-0 pl-2 max-[400px]:pl-0">02 Sept. 2025</div>
                  </div>
                  <h3 className="mb-3 4xl:text-[30px] xl:text-[26px] md:text-[24px] text-[20px]">
                    Build and Deploy Your First AI Agent Using Agentforce
                  </h3>
                  <p className="mb-2 4xl:text-[20px] xl:text-[18px] md:text-[18px] text-[16px]">
                    By 2028, 33% of enterprise software apps will utilize agentic AI. The transition from Predictive to Generative AI has accelerated, allowing businesses to move beyond simple forecasting to defining optimal actions.
                  </p>
                  <div>
                    <Link
                      href="/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce"
                      className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group">
                      <span>Read More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block sm:hidden mt-12">
            <Link
              href="/insights/blogs"
              className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-3 px-8 transition duration-300 relative overflow-hidden">
              <span className="inline-flex items-center">See All Blogs</span>
            </Link>
          </div>
        </section>
      </div>
      {/* Case Studies Section */}
      <section className="mt-16 py-16 bg-[#f1f1f1]">
        <div className="custom-container">
          <div className="lg:max-w-[800px]  xl:max-w-[1600px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-6">
              <div>
                <h2 className="mb-1 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[40px] text-[26px]">Case Studies</h2>
                <p>Find our latest work and collaborations</p>
              </div>
              <div className="hidden sm:block">
                <Link
                  href="/insights/case-studies"
                  className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-5 px-8 transition duration-300 relative overflow-hidden">
                  <span className="inline-flex items-center">
                    See All Case Studies
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="border h-full border-gray-200 overflow-hidden mb-6 flex flex-col md:flex-row"
              onMouseEnter={handleMouseEnter("case-study-1")}
              onMouseLeave={handleMouseLeave("case-study-1")}
              onClick={handleClick("/insights/case-studies/transforming-student-success-with-salesforce-education-cloud-and-eduplus")}
              style={{
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                backgroundColor:
                  hoveredBlog === "case-study-1" ? "#f1f1f1" : "#ffffff",
              }}>
              <div className="md:w-[80%] overflow-hidden">
                <div
                  className="relative w-full h-64 md:h-full "
                  style={{
                    transition: "transform 0.3s ease",
                    transform:
                      hoveredBlog === "case-study-1"
                        ? "scale(1.05)"
                        : "scale(1)",
                  }}>
                  <Image
                    src="/images/case-studies/Small thumb.webp"
                    alt="Transforming Student Success"
                    fill
                    sizes=""
                    className="object-cover h-full"
                    priority
                  />
                </div>
              </div>
              <div className="w-full h-full">
                <div className=" p-6 xl:p-12 max-w-2xl">
                  <div className="flex 2xl:flex-row xl:flex-col flex-row max-[400px]:flex-col mb-4">
                    <div className="text-[#0092E0] text-sm font-medium pr-3 max-[400px]:border-0 border-r xl:border-r-0 2xl:border-r border-gray-500">
                      Education Cloud
                    </div>
                    <div className="text-gray-600 text-sm 2xl:pl-2 xl:pl-0 pl-2 max-[400px]:pl-0">21 August 2025</div>
                  </div>
                  <h3 className="mb-3 4xl:text-[30px] xl:text-[26px] md:text-[24px] text-[20px]">
                    Transforming Student Success with Salesforce Education Cloud and Edu+

                  </h3>
                  <p className="4xl:text-[20px] xl:text-[18px] md:text-[18px] text-[16px]">
                    A leading private university in North America with over 25,000 students and multiple academic programs across undergraduate, graduate, and continuing education divisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="border border-gray-200 bg-[#ffffff] overflow-hidden"
                  onMouseEnter={handleMouseEnter(study.id)}
                  onMouseLeave={handleMouseLeave(study.id)}
                  onClick={handleClick(study.link)}
                  style={{
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    backgroundColor:
                      hoveredBlog === study.id ? "#f1f1f1" : "#ffffff",
                  }}
                >
                  <div className="h-80 overflow-hidden">
                    <div
                      className="h-full"
                      style={{
                        transition: "transform 0.3s ease",
                        transform:
                          hoveredBlog === study.id ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      <Image
                        src={study.image}
                        alt={study.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <div className="p-6 xl:p-8">
                    <div className="flex 2xl:flex-row xl:flex-col flex-row max-[400px]:flex-col  mb-4">
                      <div className="text-[#0092E0] text-sm font-medium pr-3 max-[400px]:border-0 border-r xl:border-r-0 2xl:border-r border-gray-500">
                        {study.category}
                      </div>
                      <div className="text-gray-600 text-sm 2xl:pl-2 xl:pl-0 pl-2 max-[400px]:pl-0">{study.date}</div>
                    </div>
                    <h3 className="mb-2  4xl:text-[30px] xl:text-[26px] md:text-[24px] text-[20px] leading-tight">{study.title}</h3>
                    <p className="4xl:text-[20px] xl:text-[18px] md:text-[18px] text-[16px]">{study.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div className="block sm:hidden mt-12">
            <Link
              href="/insights/case-studies"
              className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-3 px-8 transition duration-300 relative overflow-hidden">
              <span className="inline-flex items-center">
                See All Case Studies
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <div className="custom-container">
        <section className="mt-16 mb-16 lg:max-w-[800px]  xl:max-w-[1600px]">
          <div className="flex flex-col justify-between items-start sm:items-center sm:flex-row mb-8">
            <h2 className="mb-1 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[40px] text-[26px]">Webinars</h2>
            <div className="hidden sm:block">
              <Link
                href="/insights/webinars"
                className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-5 px-8 transition duration-300 relative overflow-hidden"
              >
                <span className="inline-flex items-center">
                  See All Webinars
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* webinar 3 */}
            <div
              className="border border-gray-200 overflow-hidden bg-white"
              onMouseEnter={handleMouseEnter("webinar-2")}
              onMouseLeave={handleMouseLeave("webinar-2")}
              onClick={handleClick("/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes")}
              style={{
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                backgroundColor:
                  hoveredBlog === "webinar-2" ? "#f1f1f1" : "transparent",
              }}
            >
              <div className="">
                <div className="w-full overflow-hidden">
                  <div
                    className="w-full h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "webinar-2"
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/webinar/slider-rise.webp"
                      alt="Leadership Team"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[#134874] mb-4 min-h-[4rem]  4xl:text-[30px] xl:text-[26px] md:text-[24px] text-[20px]">
                  Voyage with SAP – Transformational RISE with SAP Services by Rialtes
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="font-medium">May 20, 2025</span>
                    <span className="mx-2">|</span>
                    <span>10:00 AM CST</span>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold">Anuraag Aggarwal</div>
                    <div className="">Vice President of Global Sales</div>
                  </div>
                </div>
                <Link
                  href=""
                  className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group"
                >
                  <span>Register Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div
              className="border border-gray-200 overflow-hidden bg-white"
              onMouseEnter={handleMouseEnter("webinar-2")}
              onMouseLeave={handleMouseLeave("webinar-2")}
              onClick={handleClick("/insights/webinars/discover-the-agentic-capabilities-of-agentforce")}
              style={{
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                backgroundColor:
                  hoveredBlog === "webinar-2" ? "#f1f1f1" : "transparent",
              }}
            >
              <div className="">
                <div className="w-full overflow-hidden">
                  <div
                    className="w-full h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "webinar-2"
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/webinar/Webinar_15 May 25_webinar thumb.webp"
                      alt="Leadership Team"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[#134874] mb-4 min-h-[4rem]  4xl:text-[30px] xl:text-[26px] md:text-[24px] text-[20px]">
                  Discover the Agentic Capabilities of Agentforce
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="font-medium">May 15, 2025</span>
                    <span className="mx-2">|</span>
                    <span>10:00 AM CST</span>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold">Lokesh Adhikari</div>
                    <div className="">Software Engineer - Salesforce</div>
                  </div>
                </div>
                <Link
                  href=""
                  className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group"
                >
                  <span>Register Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div
              className="border border-gray-200 overflow-hidden bg-white"
              onMouseEnter={handleMouseEnter("webinar-2")}
              onMouseLeave={handleMouseLeave("webinar-2")}
              onClick={handleClick("/insights/webinars/databricks-and-datasphere-whats-in-sap-business-data-cloud")}
              style={{
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                backgroundColor:
                  hoveredBlog === "webinar-2" ? "#f1f1f1" : "transparent",
              }}
            >
              <div className="">
                <div className="w-full overflow-hidden">
                  <div
                    className="w-full h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "webinar-2"
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/webinar/Webinar_13 May 25_webinar thumb.webp"
                      alt="Leadership Team"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[#134874] mb-4 min-h-[4rem]  4xl:text-[30px] xl:text-[26px] md:text-[24px] text-[20px]">
                  Databricks and Datasphere — What’s in SAP Business Data Cloud?
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="font-medium">May 13, 2025</span>
                    <span className="mx-2">|</span>
                    <span>10:00 AM CST</span>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold">Akshay Kale</div>
                    <div className="">Sr. Managing Director – SAP Services</div>
                  </div>
                </div>
                <Link
                  href=""
                  className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group"
                >
                  <span>Register Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            {/* webinar 2 */}


            {/* webinar 1 */}



            {/* <div
              className="border border-gray-200 overflow-hidden bg-white"
              onMouseEnter={handleMouseEnter("webinar-3")}
              onMouseLeave={handleMouseLeave("webinar-3")}
              onClick={handleClick("/about-us")}
              style={{
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                backgroundColor:
                  hoveredBlog === "webinar-3" ? "#f1f1f1" : "transparent",
              }}
            >
              <div className="">
                <div className="w-full overflow-hidden">
                  <div
                    className="t w-full h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "webinar-3"
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/insights/sap-business-webinar-3.webp"
                      alt="Leadership Team"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[#134874] mb-4 min-h-[4rem]">
                  SAP Business AI: Setting Up Joule for SAP S/4 HANA Cloud
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="font-medium">November 5, 2024</span>
                    <span className="mx-2">|</span>
                    <span>10:00 AM CST</span>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold">Kushagra Shah</div>
                    <div className="">Senior Principal Consultant, SAP</div>
                  </div>
                </div>
                <Link
                  href="/blog/diversity"
                  className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group"
                >
                  <span>Register Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div> */}
          </div>
          <div className="block sm:hidden mt-12">
            {" "}
            <Link
              href="/insights/webinars"
              className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-3 px-8 transition duration-300 relative overflow-hidden"
            >
              <span className="inline-flex items-center">See All Webinars</span>
            </Link>
          </div>
        </section>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 custom-container text-black">
        <ContactForm title={'Take the next step to operational excellence with us.'} className={'w-[70%] lg:w-[50%] xl:w-[70%]'} />
      </div>
    </div>
  );
}
