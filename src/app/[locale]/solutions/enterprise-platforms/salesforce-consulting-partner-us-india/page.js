"use client";
import Image from "next/image";
import Seo from "../../../components/Seo";
import ContactForm from "../../../components/contactform";
import CarouselComponent from "../../../components/useCarousel";
import InsightsCarousel from "../../../components/servicesInsightsCarousel";
import FeaturedCarousel from "../../../components/servicesFeaturedCarousel";
import Link from "next/link";
import LearnMore from "@/app/[locale]/components/learnMore";
import React from "react";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/solutions.json";
import esContent from "../../../../../../messages/es/solutions.json";
import frContent from '../../../../../../messages/fr/solutions.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";

export default function SalesForceConsulting() {
  const t = useTranslations("salesForceConsulting");
  const locale = useLocale();
  const homepageContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { salesForce, salesForceProduct, businessDetails, growthData } = homepageContent.salesForceConsulting;
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Salesforce Consulting Services",
    url: "https://www.rialtes.com/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/",
    description:
      "Rialtes provides comprehensive Salesforce consulting services including implementation, integration, migration, and support to help businesses scale, automate processes, and enhance customer engagement.",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "Rialtes",
      url: "https://www.rialtes.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rialtes.com/images/homepage/logo.svg",
      },
    },
    mainEntity: {
      "@type": "Service",
      name: "Salesforce Consulting Services",
      serviceType:
        "Salesforce Implementation, Integration, Migration, Support, Agentforce & Data Cloud Solutions",
      provider: {
        "@type": "Organization",
        name: "Rialtes",
        url: "https://www.rialtes.com",
      },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Singapore" },
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "Enterprise Leaders, CIOs, IT Heads, CRM Managers, Customer Experience Teams",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Salesforce Consulting Services by Rialtes",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Salesforce Implementation Services",
              description:
                "Customized Salesforce implementations to align CRM functionality with business needs.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Salesforce Integration Services",
              description:
                "Connect Salesforce with ERP, third-party apps, and APIs for seamless data flow.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Salesforce Migration Services",
              description:
                "Smooth data migration from legacy CRMs or other platforms to Salesforce with zero data loss.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Salesforce Support Services",
              description:
                "Ongoing CRM support, maintenance, and optimization for peak system performance.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Salesforce Agentforce Solutions",
              description:
                "Create and deploy autonomous AI agents for 24/7 support and service automation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Salesforce Data Cloud Implementation",
              description:
                "Unify customer data for actionable insights and 360° engagement with Data Cloud.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Salesforce Lightning App Development",
              description:
                "Custom apps using Lightning framework for enhanced UX and faster workflows.",
            },
          },
        ],
      },
    },
  };
 
  return (
    <div>
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        canonical={`https://www.rialtes.com/${locale}/solutions/enterprise-platforms/salesforce-consulting-partner-us-india/`}
      />
      <Script
        id="schema-salesforce-consulting"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="relative group overflow-hidden">
        <Image
          src="/images/salesforce-consulting-services/salesforce-consulting-banner.webp"
          alt={t("bannerAltText")}
          className="transform transition-transform duration-500 group-hover:scale-110 xl:h-full h-[250px] md:h-[350px] lg:h-[450px]"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            objectFit: "cover",
          }}
          priority
        />
        <div className="absolute custom-container  top-[10%] lg:text-start lg:top-[25%] sm:top-[20%] text-black">
          <h1 className="font-bold 4xl:text-[24px] xl:text-[20px] text-[18px]">
            {t("consultingTitle")}
          </h1>
          <h2 className="md:w-[46%]  lg:w-[37%]  xl:w-[48%]  2xl:w-[41%] 4xl:w-[56%] 4xl:text-[60px] xl:text-[40px] text-[26px]">
            {t("consultingDesc")}
          </h2>
          <Image
            src="/images/salesforce-consulting-services/salesforce-partner-logo.webp"
            className="w-[22%] h-full bg-transperent lg:mt-20 lg:m-0 mt-5"
            alt={t("partnerLogoAltText")}
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-10 xl:gap-16 gap-5 px-6 custom-container mt-5 lg:mt-16">
        <div className="lg:col-span-6 4xl:col-span-6 2xl:col-span-5 ">
          <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
            {t("clientsTitle")}
          </h2>
        </div>

        <div className="lg:col-span-4">
          <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight xl:mr-[96px]">
            {t("clientsDesc")}
          </p>
        </div>
      </div>

      {/* section crm consulting */}
      <section className="mt-16 px-6  custom-container ">
        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
          {t("SalesforceTitle")}
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-10 gap-5 mt-10">
          {salesForce.map((sales) => {
            return (
              <div
                key={sales.id}
                className="border-2 p-8 hover:bg-[#A9D6EE] hover:border-transparent transition-all duration-300 "
              >
                <div>
                  <Image
                    src={sales.imageUrl}
                    alt={sales.altText}
                    className="w-20 h-20"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                    }}
                    priority
                  />
                </div>
                <h3 className="mt-5 4xl:text-[30px] xl:text-[22px] text-[20px] text-[#1F3F69] leading-tight font-bold">
                  {sales.title}
                </h3>
                <p className="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                  {sales.description}
                </p>
              </div>
            );
          })}
        </div>
        <LearnMore />
      </section>
      {/* Salesforce product */}

      <section className="mt-20  px-6  custom-container">
        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
          {t("productsTitle")}
        </h2>
        <p className="lg:mt-3 mb-8 mt-3 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
          {t("productsDesc")}
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-5 gap-5">
          {salesForceProduct.map((product) => {
            return (
              <div key={product.id} className="border-2">
                <div className="relative group overflow-hidden m-3">
                  <Image
                    src={product.imageUrl}
                    alt={product.altText}
                    className="transform transition-transform duration-500 group-hover:scale-110"
                    height={325}
                    width={1250}
                    sizes="100vw"
                    priority
                  />
                </div>
                <div className="p-8">
                  <h3 className="mt-5 leading-tight 4xl:text-[30px] xl:text-[22px] text-[20px] font-bold text-[#1F3F69]">
                    {product.title}
                  </h3>
                  <p className="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                    {product.description}
                  </p>
                  <ul className="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                    {product?.productsDetails?.map((details, index) => {
                      return (
                        <li
                          key={index}
                          className="font-medium flex mt-3 items-start before:content-['•'] before:text-[#0092E0] before:text-4xl before:font-bold before:mr-2  before:leading-[0.5]"
                        >
                          {details}
                        </li>
                      );
                    })}
                  </ul>
                  <h5 className="text-[#0092E0] mt-10 font-bold  underline cursor-pointer text-[16px] xl:text-[19px] 4xl:text-[24px] leading-tight">
                    <Link href={product?.knowMore}>{t("knowMore")}</Link>
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* your business */}
      <section className="mt-16 px-6 custom-container">
        <h2 className="font-normal xl:w-[71%] 4xl:w-[93%] w-full leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
          {t("businessTitle")}
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:mt-10 xl:gap-20 gap-5 pb-16">
          {businessDetails.map((bussiness) => {
            return (
              <div key={bussiness.id}>
                <h3 className="font-bold mt-3  4xl:text-[30px] xl:text-[22px] text-[20px] leading-tight">
                  {bussiness.title}
                </h3>
                <p className="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                  {bussiness.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Action section */}
      <section className="bg-[#EDEDED] lg:mt-10 mt-5 py-[70px]">
        <div className="px-6 custom-container">
          <h3 className=" mb-10 text-[#000000] 4xl:text-[40px] xl:text-[30px] text-[22px]">
            {t("actionTitle")}
          </h3>
          <div className="grid  xl:grid-cols-3 gap-16">
            {growthData.map((item, index) => (
              <div key={index}>
                <div className="px-2 bg-[#EDEDED] py-1 rounded text-[#0092E0] font-bold 4xl:text-[70px] xl:text-[40px] text-[23px]">
                  {item.percentage}
                </div>
                <div className="px-2 rounded leading-[20px] text-[#0092E0] font-bold 4xl:text-[50px] xl:text-[35px] text-[20px]">
                  {item.label}
                </div>

                <p className={`mt-10  leading-tight  whitespace-nowrap
                    ${locale === "es"
                    ? "xl:text-[17px] 2xl:text-[18px] 4xl:text-[20px] text-[14px]"
                    : locale === "fr"
                      ? "xl:text-[17px] 2xl:text-[18px] 4xl:text-[20px] text-[16px]"
                      : "xl:text-[17px] 2xl:text-[18px] 4xl:text-[20px] text-[16px]"
                  }`}
                >
                  {item.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* different industries different mindset */}
      <section className="custom-container lg:mt-20 mt-5 pb-20 xl:pr-0">
        <div>
          <h2 className="text-black mb-6 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
            {t("mindsetsTitle")}
          </h2>
          <CarouselComponent />
        </div>
      </section>
      <section className="bg-[#F5F5F5]  custom-container xl:mt-12 mt-10 pb-20 pt-20 xl:pr-0">
        <div className="">
          <FeaturedCarousel />
        </div>
      </section>
      <section className=" custom-container lg:mt-20 mt-10 xl:pr-0">
        <InsightsCarousel />
      </section>

      <section className="xl:mt-40 relative">
        <div className="group overflow-hidden">
          <div className="w-full">
            <Image
              quality={100}
              layout="responsive"
              priority
              width="100"
              height="100"
              className="w-full lg:!h-[500px] hidden xl:block transition-transform duration-500 transform group-hover:scale-110"
              alt={t("neuralNetworkAltText")}
              src="/images/salesforce-consulting-services/agentforce-banner-desktop.webp"
            />
          </div>
        </div>
        <div className="bg-[#0077CE] hidden xl:block absolute p-10 text-white lg:w-[28%] lg:right-[8rem] lg:top-[-3.5rem] top-[392px]">
          <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
            {t("agentforce")}
          </h2>
          <p className="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
            {t("agentforceDesc")}
          </p>
          <Link href="/solutions/artificial-intelligence/salesforce-agentforce-consulting">
            <p className="mt-8">
              {t("learnMore")} <span> &#8594;</span>
            </p>
          </Link>
        </div>
      </section>
      <section className="pb-20  custom-container  pt-10 mt-20">
        <ContactForm
          className="xl:w-[85%] w-full leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]"
          title={t("contactUs")}
        />
      </section>
    </div>
  );
}
