"use client";
import React, { useState } from "react";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import Script from "next/script";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/solutions.json';
import esContent from '../../../../../../messages/es/solutions.json';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Salesforce Data Cloud Consulting Services",
  "url": "https://www.rialtes.com/solutions/data-ai/salesforce-data-cloud-consulting/",
  "description": "Rialtes provides Salesforce Data Cloud Consulting services to help businesses unify data, drive real-time personalization, and activate AI-powered insights across marketing, commerce, and operations.",
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
    "name": "Salesforce Data Cloud Consulting",
    "serviceType": "Customer 360 Integration, AI Activation, Real-Time Personalization",
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
      "audienceType": "CMOs, CIOs, Marketing Leaders, CRM Architects, Data Platform Owners"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Salesforce Data Cloud Services by Rialtes",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Salesforce Data Cloud Implementation",
            "description": "Infrastructure setup, source configuration, and activation of real-time data orchestration features in Salesforce Data Cloud."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Cloud Consulting",
            "description": "Tailored advisory services to help organizations architect personalized, privacy-compliant, and AI-powered data ecosystems."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Salesforce Data Cloud Migration",
            "description": "Seamless and secure migration from legacy data platforms to Salesforce Data Cloud with minimal disruption."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Managed Cloud Services",
            "description": "Ongoing performance monitoring, governance, and optimization of public, private, and hybrid Salesforce Cloud environments."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Private Cloud Services",
            "description": "Deploy isolated private cloud infrastructure for enhanced compliance, control, and security of sensitive data workloads."
          }
        }
      ]
    }
  }
}

export default function DataCloud() {
  const t = useTranslations('salesforceDataCloud')
  const locale = useLocale();
  const cloudContent = locale === 'es' ? esContent : enContent;

  const { featureBoxes, stats, services } = cloudContent.salesforceDataCloud;
  const [hoveredBlog, setHoveredBlog] = useState(null);
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
  return (
    <div className="min-h-screen">
      <Seo
        title="Salesforce Data Cloud Implementation and Consulting Services | Rialtes"
        description="Expert Salesforce Data Cloud implementation and consulting to fuel growth, boost decisions, accelerate innovation, and drive stronger outcomes with Rialtes."
        keywords="home, website, welcome"
        canonical={"https://www.rialtes.com/solutions/data-ai/salesforce-data-cloud-consulting/"}
      />
      <Script
        id="schema-data-cloude"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* hero section */}
      <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
        <div className="hidden md:block">
          <Image
            src="/images/data-cloud/salesforce-data-cloud-header.webp"
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
            src="/images/data-cloud/salesforce-data-cloud-header.webp"
            alt="mobile banner"
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
          />
        </div>
        <div className="relative h-full custom-container flex items-center text-[#000000]">
          <div className="grid grid-cols-12 w-full">
            <div className="4xl:col-span-5 md:col-span-4 col-span-4">
            </div>
            <div className="4xl:col-span-7 md:col-span-8 col-span-8">
              <h3 className="text-[18px] md:text-[24px] font-bold max-lg:w-[60%] md:w-[50%] lg:w-full">
                {t('headerTitle')}
              </h3>
              <h1 className="text-[26px] leading-tight xl:text-[44px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px]">
                {t('headerSubtitle')}
              </h1>
              <h3 className="font-bold leading-tight mt-10 xl:text-[26px] 4xl:text-[30px] text-[20px] md:block hidden">
                {t('headerDesc')}
              </h3>
              <div className=" w-full xl:mt-10 mt-5">
                <Image
                  src="/images/data-cloud/salesforce-partner.webp"
                  alt="salesforce-partner image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="sm:h-[30%] sm:w-[30%] h-[45%] w-[45%]"
                  style={{
                    objectFit: "cover",
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* page description */}
      <section className="custom-container">
        <section className="pt-16 bg-white">
          <div className="mx-auto">
            <h2 className="text-[#000000] 4xl:text-[60px] xl:text-[40px] text-[26px] mb-8">
              {t('pageDescTitle')}
            </h2>
            <p className="md:max-w-xl xl:max-w-4xl mb-8 4xl:text-[22px] xl:text-[18px] text-[16px]">
              {t('pageDesc1')}.
            </p>
            <p className="md:max-w-xl xl:max-w-4xl 4xl:text-[22px] xl:text-[18px] text-[16px]">
              {t('pageDesc2')}
            </p>
          </div>
        </section>
      </section>
      {/* creating section */}
      <section className="custom-container">
        <section className="py-8 my-10">
          <h2 className="text-[#000000] lg:w-[70%] xl:w-[76%] 4xl:w-[90%] 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight">
            {t('creatingTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:mt-[67px] mt-[48px]">
            {featureBoxes.map((feature, index) => (
              <div
                key={index}
                className="bg-white border hover:bg-[#D9F2FF] 4xl:p-12 p-8 flex flex-col h-full">
                <div className="flex flex-col items-start mb-4">
                  <div className="w-16 h-16 flex-shrink-0 mb-4">
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={feature.icon}
                        alt={`${feature.title} image`}
                        width={100}
                        height={100}
                        priority
                      />
                    </div>
                  </div>
                  <h3 className="text-[#1F3F69] mt-2 4xl:text-[30px] xl:text-[24px] text-[20px]">{feature.title}</h3>
                </div>
                <p className="text-[#000000] mt-2 4xl:text-[22px] xl:text-[18px] text-[16px]">{feature.description}</p>
              </div>
            ))}
          </div>
          <LearnMore />
        </section>
      </section>
      {/* Stats Section */}
      <section className="bg-[#EDEDED] xl:pt-[83px] xl:pb-[76px] py-[40px]">
        <div className="custom-container">
          <div className="">
            <h3 className="text-left 4xl:text-[36px] xl:text-[30px] text-[26px] mb-6 font-[300] max-w-[900px]">
              {t('unitedTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 xl:mt-[64px] mt-[46px]">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-[#0092E0]">
                      {stat.percentage}
                    </span>
                  </div>
                  <p className="text-[#000000] 4xl:text-[22px] xl:text-[18px] text-[16px] lg:w-[70%] md:w-[90%] w-[90%]">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <div className="custom-container">
        <section className="pb-12 pt-20">
          <h2 className="text-left mb-10 leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px] ">
            {t('ourSalesforceTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-20 xl:gap-12 xl:gap-y-[60px] mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col h-full"
                onMouseEnter={handleMouseEnter(service.id)}
                onMouseLeave={handleMouseLeave(service.id)}>
                <div className="mb-4">
                  <div
                    className="w-full h-full"
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredBlog === service.id ? "scale(1.05)" : "scale(1)",
                    }}>
                    <Image
                      src={service.image}
                      alt={`${service.title} image`}
                      width={0}
                      height={0}
                      style={{
                        objectFit: "cover",
                      }}
                      className="h-full w-full"
                      priority
                    />
                  </div>
                </div>
                <h3 className="h3-bold mb-3 4xl:text-[26px] xl:text-[22px] text-[18px] mt-6">{service.title}</h3>
                <p className="text-[#000000] 4xl:text-[22px] xl:text-[18px] text-[16px] mb-6">{service.description}</p>
                <div className="mt-auto">
                  <LearnMore />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* Contact Form Section */}
      <div className="py-20 custom-container">
        <ContactForm title={t('contactTitle')} className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] 4xl:w-[80%] xl:w-[70%]" />
      </div>
    </div>
  );
}
