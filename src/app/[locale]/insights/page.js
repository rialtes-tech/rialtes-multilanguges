"use client";
import React, { useState, useEffect } from "react";
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


export default function InsightsPage() {
  const t = useTranslations('insights')
  const locale = useLocale();
  const insightsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { caseStudies,schemaData } = insightsContent.insights;

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
        title={t('seoTitle')}
        description={t('seoDescription')}
        canonical={`https://www.rialtes.com/${locale}/insights/`}
      />
      <Script
        id="schema-insights"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section with Deep Blue Gradient Background */}
      <section className="relative group overflow-hidden h-[399px] 4xl:h-[650px] 2xl:h-[500px] xl:h-[500px]">
        <div className="hidden md:block">
          <Image
            src="/images/insights/iceberg-industry-insights-expert-knowledge.webp"
            alt={t("bannerAlt")}
            fill
            priority
            className="transform transition-transform duration-500 group-hover:scale-110 object-cover"
          />
        </div>
        {/* Mobile Image */}
        <div className="block lg:hidden">
          <Image
            src="/images/insights/iceberg-industry-insights-expert-knowledge.webp"
            alt={t("bannerAlt")}
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
          <h2 className="text-[#000000] text-[20px] 4xl:text-[26px] pb-6 mb-8 max-w-4xl md:text-[20px] ">
            {t('insightDesc')}
          </h2>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-6">
            <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] text-[26px]">{t('featuredTitle')}</h2>
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
                    src="/images/blog/cloud-data-digital-transformation-mobile.webp"
                    alt={t('dataCloudeDigitalAlt')}
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
                  <div className="text-gray-600 text-sm 2xl:pl-2 xl:pl-0 pl-2 max-[400px]:pl-0">Aug. 26, 2025</div>
                </div>
                <h3 className="mb-3 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">
                  {t('sapPi')}
                </h3>
                <p className="mb-4 4xl:text-[20px] xl:text-[17px] text-[16px]">
                  {t('sapPiDesc')}</p>
                <Link
                  href="/insights/blogs/sap-pi-po-to-cpi-migration-complete-guide"
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
                      src="/images/blog/futuristic-medical-technology-innovation-mobile.webp"
                      alt= {t('futuristicMedTechAlt')}
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
                    <div className="text-gray-600 text-sm 2xl:pl-2 xl:pl-0 pl-2 max-[400px]:pl-0">Sep. 09, 2025</div>
                  </div>
                  <h3 className="mb-3 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">
                    {t('aiTitle')}
                  </h3>
                  <p className="mb-2 4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {t('aiDesc')}
                  </p>
                  <div>
                    <Link
                      href="/insights/blogs/ai-patient-engagement-medtech-remote-care"
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
                      src="/images/blog/artificial-intelligence-data-visualization-mobile.webp"
                      alt={t('dataVisualizationAlt')}
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
                    <div className="text-gray-600 text-sm 2xl:pl-2 xl:pl-0 pl-2 max-[400px]:pl-0">Sep. 02, 2025</div>
                  </div>
                  <h3 className="mb-3 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">
                    {t('buildTitle')}
                  </h3>
                  <p className="mb-2 4xl:text-[20px] xl:text-[17px] text-[16px]">
                    {t('buildDesc')}
                  </p>
                  <div>
                    <Link
                      href="/insights/blogs/how-to-build-and-deploy-ai-agents-with-agentforce"
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
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div className="md:w-[50%]">
                <h2 className="mb-1 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] text-[26px]">{t('caseTitle')}</h2>
                <p className="4xl:text-[20px] xl:text-[17px] text-[16px]">{t('caseDesc')}</p>
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
                    src="/images/case-studies/graduation-cap-ladder-clouds-education-success-concept-mobile.webp"
                    alt={t('transformingAlt')}
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
                    <div className="text-gray-600 text-sm 2xl:pl-2 xl:pl-0 pl-2 max-[400px]:pl-0">Aug. 21, 2025</div>
                  </div>
                  <h3 className="mb-3 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">
                    {t('transforming')}
                  </h3>
                  <p className="4xl:text-[20px] xl:text-[17px] text-[16px]">
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
                    <div className="flex 2xl:flex-row xl:flex-col flex-row max-[400px]:flex-col  mb-4">
                      <div className="text-[#0092E0] text-sm font-medium pr-3 max-[400px]:border-0 border-r xl:border-r-0 2xl:border-r border-gray-500">
                        {study.category}
                      </div>
                      <div className="text-gray-600 text-sm 2xl:pl-2 xl:pl-0 pl-2 max-[400px]:pl-0">{study.date}</div>
                    </div>
                    <h3 className="mb-2 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">{study.title}</h3>
                    <p className="4xl:text-[20px] xl:text-[17px] text-[16px]">{study.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div className="sm:hidden mt-12">
            <Link
              href="/insights/case-studies"
              className="bg-[#134874] hover:bg-[#ffffff] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-3 px-8 transition duration-300">
              <span className="items-center inline-block">
                {t('allCaseStudy')}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <div className="custom-container">
        <section className="mt-16 mb-16 lg:max-w-[800px]  xl:max-w-[1600px]">
          <div className="flex flex-col justify-between items-start sm:items-center sm:flex-row mb-8">
            <h2 className="mb-1 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] text-[26px]">{t('Webinars')}</h2>
            <div className="hidden sm:block">
              <Link
                href="/insights/webinars"
                className="group bg-[#134874] hover:text-[#134874] font-semibold border-[1px] border-[solid] border-[#134874] text-white py-5 px-8 transition duration-300 relative overflow-hidden"
              >
                <span className="inline-flex items-center">
                  {t('allWebinars')}
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <div
              className="border border-gray-200 overflow-hidden bg-white"
              onMouseEnter={handleMouseEnter("webinar-1")}
              onMouseLeave={handleMouseLeave("webinar-1")}
              onClick={handleClick("/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes")}
              style={{
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                backgroundColor:
                  hoveredBlog === "webinar-1" ? "#f1f1f1" : "transparent",
              }}
            >
              <div className="">
                <div className="w-full overflow-hidden">
                  <div
                    className="w-full h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "webinar-1"
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/webinar/slider-rise.webp"
                      alt= {t('voyageAlt')}
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
                <h3 className="text-[#134874] mb-4 min-h-[4rem] 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">
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
                      src="/images/webinar/ai-digital-transformation-data-overlay-carousal.webp"
                      alt={t('agenticAlt')}
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
                <h3 className="text-[#134874] mb-4 min-h-[4rem] 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">
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
              onMouseEnter={handleMouseEnter("webinar-3")}
              onMouseLeave={handleMouseLeave("webinar-3")}
              onClick={handleClick("/insights/webinars/databricks-and-datasphere-whats-in-sap-business-data-cloud")}
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
                    className="w-full h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === "webinar-3"
                          ? "scale(1.05)"
                          : "scale(1)",
                    }}
                  >
                    <Image
                      src="/images/webinar/digital-data-wave-visualization-abstract-carousal.webp"
                      alt={t('databricksAlt')}
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
                <h3 className="text-[#134874] mb-4 min-h-[4rem] 4xl:text-[24px]  2xl:text-[21px]  xl:text-[20px] text-[20px] leading-tight">
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
