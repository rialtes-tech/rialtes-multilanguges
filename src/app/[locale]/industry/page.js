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
import frContent from '../../../../messages/fr/industry.json';
import { changeLocalization } from "../components/changeLocalization";

export default function Industry() {
  const t = useTranslations("industry");
  const locale = useLocale();
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { growLatestServices,schemaData } = content.industry;


  const GrowServicesCard = ({ services }) => (
    <div className="w-full h-full flex flex-col">
      <div className="relative overflow-hidden">
        <Image
          className="w-full transition-transform duration-300 hover:scale-105"
          src={services.image}
          alt={services.imageAlt}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          priority
        />

      </div>
      <div className="flex flex-col mt-[23px]">
        <h3 className="4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight font-semibold ">{services.title}</h3>
      </div>
      <p className='4xl:text-[20px]  xl:text-[18px]   text-[16px] leading-tight mt-[25px] mb-[33px]'>{services.description}</p>
      <h5 className="text-[#0092E0] font-bold cursor-pointer mt-auto 4xl:text-[20px]  xl:text-[18px]   text-[16px]">
        <Link href={services?.knowMore} aria-label={services.title}> {t('knowMore')}</Link>
      </h5>
    </div>
  );
  const GrowServices = () => {
    return (
      <div>
        <h2 className="xl:mb-[-20px] 4xl:text-[60px]  2xl:text-[48px]   xl:text-[42px] md:text-[28px] leading-tight mb-[40px] text-black">
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
        title={t('seoTitle')}
        description={t('seoDescription')}
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
      <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px] ">
        <div className="hidden md:block">
          <Image
            src="/images/industry/digital-transformation-client-engagement-industries.webp"
            alt={t('bannerAlt')}
            fill
            style={{ objectFit: "cover", objectPosition: "55% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/industry/digital-transformation-client-engagement-industries.webp"
            alt={t('bannerAlt')}
            fill
            style={{ objectFit: "cover", objectPosition: "5% 20%" }}
            priority
          />
        </div>
        <div className="relative h-full custom-container flex items-center text-[#ffffff]">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12">
              <h3 className="text-[18px] xl:text-[24px] font-bold ">
                {t('headerTitle')}
              </h3>
              <h2 className="4xl:text-[60px]  2xl:text-[48px]   xl:text-[42px] md:text-[28px] leading-tight  mt-[11.5px] md:mt-[28.5px] ">
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
          <div className="xl:col-span-6 col-span-12">
            <h1 className="text-[#000000] 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] leading-tight">
              {t('mindsetTitle')}
            </h1>
          </div>
          <div className="2xl:col-span-6 xl:col-span-5 col-span-12 xl:ml-5">
            <p className="4xl:text-[22px]  xl:text-[18px]  text-[16px] leading-tight">
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
        <ContactForm title={t('contactUs')} className={'max-w-4xl '} />
      </div>
    </div>
  );
}
