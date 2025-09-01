"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ContactForm from "../components/contactform";
import Seo from "../components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../messages/en/insight.json';
import esContent from '../../../../messages/es/insight.json';
import frContent from '../../../../messages/fr/insight.json';
import { changeLocalization } from "../components/changeLocalization";

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

export default function InsightsPage() {
  const t = useTranslations('insights')
  const locale = useLocale();
  const insightsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { caseStudies } = insightsContent.insights;

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
      <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
        <div className="hidden md:block">
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
              {t('insightTitle')}
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <div className="custom-container">
        <section className="mb-16 mt-[50px] md:mt-[100px] xl:mt-[100px] lg:max-w-[800px] xl:max-w-[1600px]">
          <h2 className="text-[#000000] text-[20px] sm:text-[26px] pb-6 mb-8 max-w-4xl">
            {t('insightDesc')}
          </h2>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-6">
            <h2>{t('featuredTitle')}</h2>
            <div className="hidden sm:block">
              <Link
                href="/insights/blogs"
                className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-5 px-8 transition duration-300 relative overflow-hidden">
                <span className="inline-flex items-center">{t('allBlog')}</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:flex-col xl:flex-row">
            <div
              className="border w-full xl:w-2/5 lg:w-full border-gray-200 overflow-hidden"
              onMouseEnter={handleMouseEnter("blog1")}
              onMouseLeave={handleMouseLeave("blog1")}
              onClick={handleClick("/insights/blogs/how-salesforce-agentforce-actually-works")}
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
                    src="/images/blog/blog-1.webp"
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
                <div className="flex flex-row items-center mb-4">
                  <span className="text-[#0092E0] font-medium">
                    {t('salesforceTitle')}
                  </span>
                  <span className="mx-2">|</span>
                  <span className="text-sm">{t('blogDate')}</span>
                </div>
                <h3 className="mb-3">
                  {t('howTitle')}
                </h3>
                <p className="mb-4">
                  {t('howDesc')}
                </p>
                <Link
                  href="/insights/blogs/how-salesforce-agentforce-actually-works"
                  className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group">
                  <span>{t('readMore')}</span>
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
                onClick={handleClick("/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce")}
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
                      src="/images/blog/blog-2.webp"
                      alt="Diversity illustration"
                      fill
                      className="object-cover h-full w-full"
                      style={{ objectPosition: "95% 60%" }}
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
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-[#0092E0] text-sm font-medium">
                      {t('salesforceTitle')}
                    </span>
                    <span className="text-gray-500 mx-2">|</span>
                    <span className="text-gray-600 text-sm">{t('brainDate')}</span>
                  </div>
                  <h3 className="mb-3">
                    {t('brainBlog')}
                  </h3>
                  <p className="mb-2">
                    {t('brainDesc')}
                  </p>
                  <div>
                    <Link
                      href="/insights/blogs/the-brain-behind-the-agents-unveiling-the-atlas-reasoning-engine-in-agentforce"
                      className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group">
                      <span>{t('readMore')}</span>
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
                onClick={handleClick("/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters")}
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
                      src="/images/blog/blog-3.webp"
                      alt="Diversity illustration"
                      fill
                      className="object-cover h-full w-full"
                      style={{ objectPosition: "60% 30%" }}
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
                  <div className="flex flex-row items-center mb-4">
                    <span className="text-[#0092E0] text-sm font-medium">
                      {t('salesforceTitle')}
                    </span>
                    <span className="text-gray-500 mx-2">|</span>
                    <span className="text-gray-600 text-sm">{t('agenticDate')}</span>
                  </div>
                  <h3 className="mb-3">
                    {t('agenticTitle')}
                  </h3>
                  <p className="mb-2">
                    {t('agenticDesc')}
                  </p>
                  <div>
                    <Link
                      href="/insights/blogs/agents-vs-copilots-vs-bots-whats-the-difference-and-why-it-matters"
                      className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group">
                      <span>{t('readMore')}</span>
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
              <span className="inline-flex items-center">{t('allBlog')}</span>
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
                <h2 className="mb-1">{t('caseTitle')}</h2>
                <p>{t('caseDesc')}</p>
              </div>
              <div className="hidden sm:block">
                <Link
                  href="/insights/case-studies"
                  className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-5 px-8 transition duration-300 relative overflow-hidden">
                  <span className="inline-flex items-center">
                    {t('allCaseStudy')}
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
                  <div className="flex flex-row items-center mb-3">
                    <span className="text-[#0092E0]">
                       {t('education')} 
                    </span>
                    <span className="mx-2">|</span>
                    <span className="text-sm">{t('leadingDate')}</span>
                  </div>
                  <h3 className="mb-3 4xl:text-[30px] xl:text-[26px] md:text-[24px] text-[20px] leading-tight">
                    {t('leadingTitle')}
                  </h3>
                  <p className="4xl:text-[20px] xl:text-[18px] md:text-[18px] text-[16px]">
                    {t('leadingblog')}
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
                    <div className="flex flex-row items-center mb-3">
                      <span className="text-[#0092E0]">{study.category}</span>
                      <span className="mx-2">|</span>
                      <span className="text-sm">{study.date}</span>
                    </div>
                    <h3 className="mb-2 4xl:text-[30px] xl:text-[26px] md:text-[24px] text-[20px] leading-tight">{study.title}</h3>
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
                {t('allCaseStudy')}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <div
        className="
       custom-container"
      >
        <section className="mt-16 mb-16 lg:max-w-[800px]  xl:max-w-[1600px]">
          <div className="flex flex-col justify-between items-start sm:items-center sm:flex-row mb-8">
            <h2 className="mb-1">{t('Webinars')}</h2>
            <div className="hidden sm:block">
              <Link
                href="/insights/webinars"
                className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-5 px-8 transition duration-300 relative overflow-hidden"
              >
                <span className="inline-flex items-center">
                  {t('allWebinars')}
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
                <h3 className="text-[#134874] mb-4 min-h-[4rem]">
                  {t('SapTitle')}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="font-medium">{t('sapdate')}</span>
                    <span className="mx-2">|</span>
                    <span>10:00 AM CST</span>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold"> Anuraag Aggarwal</div>
                    <div className=""> {t('president')}</div>
                  </div>
                </div>
                <Link
                  href=""
                  className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group"
                >
                  <span>{t('registerNow')}</span>
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
                <h3 className="text-[#134874] mb-4 min-h-[4rem]">
                  {t('discoverTitle')}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="font-medium">{t('discoverDate')}</span>
                    <span className="mx-2">|</span>
                    <span>10:00 AM CST</span>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold">Lokesh Adhikari</div>
                    <div className="">{t('Engineer')}</div>
                  </div>
                </div>
                <Link
                  href=""
                  className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group"
                >
                  <span>{t('registerNow')}</span>
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
                <h3 className="text-[#134874] mb-4 min-h-[4rem]">
                  {t('databricksTitle')}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="font-medium">{t('dataDate')}</span>
                    <span className="mx-2">|</span>
                    <span>10:00 AM CST</span>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold">Akshay Kale</div>
                    <div className="">{t('director')}</div>
                  </div>
                </div>
                <Link
                  href=""
                  className="inline-flex items-center text-[#0092E0] hover:text-[#007bbf] font-medium transition-colors duration-300 group"
                >
                  <span>{t('registerNow')}</span>
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
          <div className="block sm:hidden mt-12">
            <Link
              href="/insights/webinars"
              className="group bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-3 px-8 transition duration-300 relative overflow-hidden">
              <span className="inline-flex items-center">{t('allWebinars')}</span>
            </Link>
          </div>
        </section>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 custom-container text-black">
        <ContactForm title={t('contactUs')} className={'w-[70%] lg:w-[50%] xl:w-[70%]'} />
      </div>
    </div>
  );
}
