"use client";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import ExploreMoreCarousel from '../../../components/servicesExploreMoreCarousel';
import { useState } from "react";
import LearnMore from "@/app/[locale]/components/learnMore";
import CaseStudyIndivisual from '../../../components/caseStudyIndivisual';
import Script from "next/script";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from 'next-intl';
import enContent from '../../../../../../messages/en/industry.json';
import esContent from '../../../../../../messages/es/industry.json';


export default function Page() {
  const t = useTranslations('healthCare')
  const locale = useLocale();
  const content = locale === 'es' ? esContent : enContent;
  const { slidesCaseStudy, latestServices, growLatestServices, } = content.healthCare;
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Healthcare & MedTech IT Solutions",
    "url": "https://www.rialtes.com/industry/life-sciences/healthcare-medtech-patient-care/",
    "description": "Rialtes delivers Salesforce Health Cloud-powered solutions that transform patient care, provider operations, and MedTech services. From virtual care to hospital enhancements, we empower payers, providers, pharma, biotech, and MedTech organizations with connected, secure, and scalable healthcare IT solutions.",
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
      "name": "Healthcare & MedTech IT Solutions",
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "Singapore" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Patient Care, MedTech & Health Cloud Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Salesforce Health Cloud Implementation",
              "description": "Centralize patient records, enable remote monitoring, automate scheduling, and elevate decision-making with Health Cloud-driven care systems."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Urgent Care & Hospital Enhancements",
              "description": "Digitize admissions, discharge processes, emergency response systems, and resource allocation with real-time hospital software solutions."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tailored Patient Engagement Tools",
              "description": "Deploy virtual waiting rooms, e-prescriptions, and real-time health monitoring to improve patient satisfaction and care quality."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "MedTech IT Services",
              "description": "Ensure smooth tech operations across medical devices with EMR integrations, cybersecurity audits, and 24/7 MedTech support."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Payer Solutions",
              "description": "Streamline claim processing, provider communication, patient onboarding, and compliance for private and commercial payers."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Provider Solutions",
              "description": "Enable centralized EHR access, automate care coordination, simplify admin workflows, and ensure HIPAA-compliant operations."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pharma & Biotech Solutions",
              "description": "Accelerate R&D, ensure data security, and improve cross-system communication between pharmacies, patients, and providers using AI-powered digital tools."
            }
          }
        ]
      }
    }
  }
  const ServicesCard = ({ services }) => (
    <div className="w-full h-full flex flex-col border border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
      <div className="flex-grow flex flex-col">
        <h3 className="mb-[15px] md:mb-[25px] text-[#1F3F69] 4xl:text-[30px] xl:text-[24px] text-[20px] leading-tight">{services.title}</h3>
        <p className='md:mb-[15px] mb-0 4xl:text-[22px] xl:text-[18px] text-[16px] leading-tight'>{services.description}</p>
      </div>
    </div>
  );
  const GrowServicesCard = ({ services, className = '' }) => (
    <div className={`flex flex-col h-full ${className}`}>
      <div className="relative overflow-hidden">
        <Image
          className="w-full transition-transform duration-300 hover:scale-105"
          src={services.image}
          alt={services.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="flex flex-col pt-4 flex-grow 3xl:pr-[80px] xl:pr-[50px]">
        <h3 className="mb-[10px] md:mb-[15px] font-semibold h3-bold line-clamp-2 min-h-[60px] 4xl:text-[30px] xl:text-[24px] text-[20px] leading-tight">
          {services.title}
        </h3>
        <p className="text-[16px] xl:text-[18px]  4xl:text-[20px] leading-tight">
          {services.description}
        </p>
        <UnorderedList arrName={services?.productsDetails} ulClassName="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" liClassName="font-medium flex mt-3 items-start before:content-['•'] before:text-[#0092E0] before:text-4xl before:font-bold before:mr-2 before:leading-[0.5]" />
      </div>
      <div className="mt-auto pt-5">
        <LearnMore />
      </div>
    </div>


  );

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="MedTech Healthcare Consulting and Patient Care Solutions | Rialtes"
        description="Rialtes delivers AI-powered MedTech healthcare consulting and patient care solutions to enhance clinical outcomes and streamline healthcare operations."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/industry/life-sciences/healthcare-medtech-patient-care/"
      />
      <Script
        id="schema-healthcare"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
        <div className="hidden lg:block">
          <Image
            src="/images/healthcare/AdobeStock_752092287_Preview copy.webp"
            alt="desktop banner"
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Mobile Image */}
        <div className="block lg:hidden">
          <Image
            src="/images/healthcare/Healthcare-mobile.webp"
            alt="mobile banner"
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}

            fill
            priority
          />
        </div>
        <div className="relative h-full custom-container flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12 xl:col-span-7 lg:col-span-9">
              <h3 className="text-white text-[18px] md:text-[24px] font-bold">
                {t('headerTitle')}
              </h3>
              <h2 className="text-white  leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] 2xl:w-[80%] 4xl:w-[90%]  xl:w-[90%] md:w-[80%] mt-[11.5px] md:mt-[28.5px]">
                {t('headerSubTitle')}
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-[70px] custom-container">
        <div className="pb-5 bg-white">
          <div className=" mx-auto ">
            <div className="flex flex-col xl:flex-row py-6 xl:gap-20 gap-5">
              <div className="flex flex-col w-full 4xl:w-[50%] xl:w-[38%] xl:mr-4 xl:mb-0 ">
                <h1 className="text-black md:pb-0 pb-4 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">{t('pageDescTitle')}</h1>
              </div>
              <div className="flex flex-col w-full xl:w-[50%] ">
                <p className="text-[#000000] text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{t('pageDesc1')}
                </p>
                <p className="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{t('pageDesc2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* We Help You Grow and Thrive */}
      <div
        className="custom-container">
        <section className="bg-white">
          <div className="text-black xl:pt-[50px]">
            <h2 className="pb-10 text-black leading-tight xl:w-[60%] 2xl:w-[52%] 4xl:w-[70%] w-fill 4xl:text-[60px] xl:text-[40px] md:text-[26px]">{t('growServicesTitle')}</h2>
            <p className="xl:w-[65%] 4xl:w-[70%]  w-full text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{t('growServicesDesc')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 md:gap-10 lg:gap-20 mt-20  ">
              {growLatestServices.map((services, index) => (
                <GrowServicesCard key={services.id} services={services} className={`${index % 2 === 0 ? 'xl:mr-7' : 'xl:ml-7'}`} />
              ))}
            </div>
            <div className="mt-5">
            </div>
          </div>
        </section>
      </div>
      {/* Latest Services Section */}
      <div>
        <section className="pb-8 bg-white">
          <div className="custom-container mx-auto text-black mt-14 md:mt-20 xl:mt-[120px]">
            <h2 className="text-black mb-6 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[65%] 2xl:w-[60%] 4xl:w-[85%]">{t('servicesTitle')}</h2>
            <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{t('servicesDesc')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6 mt-10">
              {latestServices.map((services) => (
                <ServicesCard key={services.id} services={services} />
              ))}
            </div>
            <div className="mt-10">
              <LearnMore />
            </div>
          </div>
        </section>
      </div>
      {/* Latest Customer Success Stories */}
      <div className="bg-[#F5F5F5] py-20 mt-20" >
        <div className="custom-container" >
          <CaseStudyIndivisual slides={slidesCaseStudy} />
        </div>
      </div>

      {/* Explore More */}
      < div className="bg-[#808080] mt-20 py-20">
        <div className="custom-container">
          <ExploreMoreCarousel />
        </div>
      </div >
      {/* Contact Form */}
      <div className="mb-20 mt-20 custom-container text-black py-6">
        <ContactForm title={t('contactTitle')} className={"xl:w-[75%] w-full leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]"} />
      </div>
    </div>
  );
}