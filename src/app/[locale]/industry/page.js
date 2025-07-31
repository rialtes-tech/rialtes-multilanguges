"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/contactform";
import Seo from "../components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../messages/en/industry.json';
import esContent from '../../../../messages/es/industry.json';
export default function Industry() {
  const t = useTranslations("industry");
    const locale = useLocale();
    const homepageContent = locale === "es" ? esContent : enContent;
    const {growLatestServices} = homepageContent.industry;
   
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Industries We Serve | Rialtes",
    "url": "https://www.rialtes.com/industry",
    "description": "Explore how Rialtes delivers industry-specific digital transformation solutions across Life Sciences, Manufacturing, Automotive, Hi-Tech, Real Estate, Non-Profit, Finance, Retail, Travel & Hospitality, and Education.",
    "publisher": {
      "@type": "Organization",
      "name": "Rialtes Technologies LLC",
      "url": "https://www.rialtes.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.rialtes.com/images/homepage/logo.svg"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Industries Served",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Life Sciences",
          "url": "https://www.rialtes.com/industry/life-sciences",
          "description": "Empowering Healthcare, Pharma & Biotech, and Medical Device companies with AI, cloud, and compliance-focused digital solutions."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Manufacturing",
          "url": "https://www.rialtes.com/industry/manufacturing-cloud-erp",
          "description": "Driving smart factory transformation with digital twins, predictive analytics, and integrated ERP systems."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Automotive",
          "url": "https://www.rialtes.com/industry/automotive-industry-cloud-solutions",
          "description": "Delivering cloud-based dealer management, warranty automation, and connected vehicle solutions."
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Hi-Tech & Semiconductor",
          "url": "https://www.rialtes.com/industry/hitech-semiconductor",
          "description": "Enabling innovation in semiconductor and high-tech sectors with PLM, IoT, and smart manufacturing systems."
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Real Estate / Property Management",
          "url": "https://www.rialtes.com/industry/real-estate-property-management",
          "description": "Modernizing property operations with scalable leasing, accounting, payments, and mobile tenant portals."
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Non-Profit",
          "url": "https://www.rialtes.com/industry/nonprofit-digital-transformation-it-solutions",
          "description": "Transforming donor management, fundraising, and mission delivery through Salesforce Nonprofit Cloud."
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Finance",
          "url": "https://www.rialtes.com/industry/finance",
          "description": "Driving agility and compliance for banks, insurers, and wealth firms through SAP and Salesforce solutions."
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Retail",
          "url": "https://www.rialtes.com/industry/retail",
          "description": "Enabling omnichannel retail, personalized experiences, and intelligent inventory using digital platforms."
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Travel & Hospitality",
          "url": "https://www.rialtes.com/industry/travel-hospitality",
          "description": "Enhancing guest experiences and operational efficiency with connected travel and hospitality solutions."
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Education",
          "url": "https://www.rialtes.com/industry/education",
          "description": "Transforming learning environments and administrative workflows for academic institutions through cloud technology."
        }
      ]
    }
  }
  const GrowServicesCard = ({ services }) => (
    <div className="w-full h-full flex flex-col">
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
      <div className="flex flex-col mt-[23px]">
        <h3 className="lg:text-[30px] text-[20px] font-semibold leading-tight">{services.title}</h3>
      </div>
      <p className='lg:text-[20px] lg:leading-[30px] mt-[25px] mb-[33px]'>{services.description}</p>
      <h5 className="text-[#0092E0] font-bold cursor-pointer mt-auto text-[20px]">
        <Link href={services?.knowMore} aria-label={services.title}> {t('knowMore')}</Link>
      </h5>
    </div>
  );
  const GrowServices = () => {
    return (
      <div>
        <h2 className="xl:mb-[-20px] xl:text-[60px] text-[26px] mb-[40px] text-black">
          {t('growTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[40px] gap-y-[60px] lg:mt-[78px]">
          {growLatestServices.map((services) => (
            <GrowServicesCard key={services.id} services={services} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <Seo
        title="Salesforce & SAP Solutions by Industry | Rialtes"
        description="Salesforce and SAP industry solutions that drive measurable outcomes, streamline operations, and unlock innovation in every sector we serve."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/industry/"
      />
      <Script
        id="schema-industry"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
     {/* herosection */}
      <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
        <div className="hidden md:block">
          <Image
            src="/images/industry/industry-header.webp"
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
            src="/images/industry/industry-header.webp"
            alt="mobile banner"
            fill
            style={{ objectFit: "cover", objectPosition: "5% 20%" }}
            priority
          />
        </div>
        <div className="relative h-full custom-container flex items-center text-[#ffffff]">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12">
              <h3 className="text-[18px] md:text-[24px] font-bold ">
                {t('headerTitle')}
              </h3>
              <h2 className="text-[26px] leading-[38px] md:text-[36px] md:leading-[50px] lg:text-[60px] lg:leading-[73px] mt-[11.5px] md:mt-[28.5px] ">
                {t('headerSubTitleOne')}<br />{t('headerSubTitleTwo')}<br /> {t('headerSubTitleThree')}
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            </div>
          </div>
        </div>
      </section>
      <section className="custom-container lg:mt-[111px] mt-[45px]">
        <div className="grid lg:grid-cols-12 grid-cols-1  gap-y-[20px]">
          <div className="2xl:col-span-6 xl:col-span-7 col-span-12">
            <h1 className="text-[#000000] xl:text-[60px] text-[26px] leading-tight">
             {t('mindsetTitle')}
            </h1>
          </div>
          <div className="2xl:col-span-6 xl:col-span-5 col-span-12">
            <p className="xl:text-[22px] text-[16px]">        
            {t('mindsetDesc')}
            </p>
          </div>
        </div>
      </section>
     <div className="custom-container lg:mt-[103px] mt-[60px]">
        <section className=" bg-white">
          <GrowServices />
        </section>
      </div>
      {/* Contact Form Section */}
      <div className="custom-container xl:py-[84px] py-[60px]">
        <ContactForm title= {t('contactUs')} className={'max-w-4xl'} />
      </div>
    </div>
  );
}
