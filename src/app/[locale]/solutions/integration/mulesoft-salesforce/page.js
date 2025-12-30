import React from "react";
import ServiceSection from "./components/ServiceSection";
import FeaturedCarousel from "../../../components/servicesFeaturedCarousel";
import ExploreMoreCarousel from "../../../components/servicesExploreMoreCarousel";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/[locale]/components/Seo";
import Image from "next/image";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import LearnMore from "@/app/[locale]/components/learnMore";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/solutions.json";
import esContent from "../../../../../../messages/es/solutions.json";
import frContent from "../../../../../../messages/fr/solutions.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
const page = () => {
  const t = useTranslations("mulesoft");
  const locale = useLocale();
  const homepageContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { pointsData, serveData, driveData ,schemaData} = homepageContent.mulesoft;

  return (
    <>
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords="home, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/solutions/integration/mulesoft-salesforce/`}
      />
      <Script
        id="schema-mulesoft"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* hero section */}
      <section className="relative group overflow-hidden h-[400px] md:h-[500px] 4xl:h-[650px]">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/mulesoft-integration/mulesoft-digital-business-integration-banner.webp"
            alt={t('bannerAlt')}
            fill
            style={{ objectFit: "cover", objectPosition: "85% 40%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/mulesoft-integration/mulesoft-digital-business-integration-banner.webp"
            alt={t('bannerAlt')}
            fill
            style={{ objectFit: "cover", objectPosition: "25% 40%" }}
            priority
          />
        </div>

        <div className="absolute custom-container  lg:text-start top-[22%] text-[#ffffff]">
          <h1 className="text-[18px] 4xl:text-[24px] xl:text-[20px] md:text-[20px] font-bold">
            {t("MmuleSoftTitle")}
          </h1>
          <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] md:text-[30px] mt-[11.5px] md:mt-[28.5px]">
            {t("digitalOne")}
            <br /> {t("digitaltwo")}
            <br />
            {t("digitalThree")}
          </h2>
          <div className="flex sm:justify-end justify-start">
            <Image
              src="/images/salesforce-consulting-services/salesforce-partnership-badge.webp"
              className="sm:w-[22%] w-[37%]  h-full bg-transperent sm:mt-15  mt-8"
              alt={t('partnerAlt')}
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
        </div>
        {/* <div className="relative h-full custom-container flex items-center text-[#ffffff]">

        <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
          <div className="col-span-12">
            <h1 className="text-[18px] lg:text-[24px] font-bold">
              MuleSoft Integration Solutions
            </h1>
            <h2 className="text-[26px] leading-tight lg:text-[40px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px]">
              Connecting Digital <br /> Businesses using the <br /> MuleSoft Platform
            </h2>
            
          </div>
          <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            
          </div>
        </div>
        
     
      </div> */}
      </section>
      {/* page description */}
      <div className="lg:py-28 py-14 custom-container">
        <div className=" flex items-start lg:gap-[100px] gap-[20px] max-md:flex-col">
          <h2 className="w-full md:max-w-[50%] 2xl:w-[40%] 4xl:w-[50%] max-w-full leading-tight pb-6 4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px]">
            {t("leadingTitle")}
          </h2>
          <p className="w-full md:max-w-[532px] max-w-full lg:text-xl text-base 4xl:text-[20px] xl:text-[16px]  md:text-[18px] text-[16px] leading-tight">
            {t("leadingDesc")}
          </p>
        </div>
      </div>
      <ServiceSection />
      {/* transformation section */}
      <section className="py-24">
        <div className="custom-container flex items-start max-xl:flex-col justify-between gap-10">
          <div className="w-full xl:max-w-[50%] max-w-full">
            <h2 className="w-full mb-8 4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] leading-tight">
              {t("unleashingTitle")}
            </h2>
            <p className="w-full text-[16px] xl:text-[16px]  md:text-[18px] 4xl:text-[20px]">
              {t("unleashingTitle")}
            </p>
            <UnorderedList
              arrName={pointsData}
              ulClassName="mt-[40px]  4xl:text-[20px] xl:text-[16px]  md:text-[18px] text-[16px]"
              liClassName="font-medium flex mt-3 items-start before:content-['•'] before:text-[#0092E0] before:text-4xl before:font-bold before:mr-2  before:leading-[0.5]"
            />
          </div>
          <div className="w-full xl:max-w-[50%] h-full max-w-full relative flex xl:justify-end max-xl:gap-5">
            <Image
              src="/images/mulesoft-integration/digital-transformation-integration-solution.webp"
              width={650}
              height={500}
              alt={t('robustAlt')}
              priority
            />
          </div>
        </div>
        <div className="mt-6 custom-container">
          <LearnMore btnName={t('learnMore')}  locale={locale} />
        </div>
      </section>
      {/* serve section */}
      <section className="custom-container">
        <div className="w-full mb-14">
          <h2 className="w-full mb-8 leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]  md:text-[30px] ">
            {t("serveTitle")}
          </h2>
          <p className="w-full  text-[16px] 4xl:text-[20px] xl:text-[16px]  md:text-[18px] leading-tight">
            {t("servicesTitle")}
          </p>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-7 2xl:gap-10 gap-10 ">
          {serveData.map(({ _id, tittle, descrip }) => (
            <div className="border-r border-[#707070] xl:pr-4  " key={_id}>
              <div className="max-w-[256px]">
                <h4 className=" font-bold leading-tight 4xl:text-[24px] xl:text-[20px] md:text-[20px] text-[18px]">
                  {tittle}
                </h4>
                <p className="4xl:text-[20px] xl:text-[16px]  md:text-[18px] text-[16px] font-medium">
                  {descrip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* drive data section */}
      <div className="bg-[#fffbfb] py-16 mt-10 xl:mt-20">
        <div className="custom-container">
          <h2 className=" font-light mb-16 leading-tight 4xl:text-[40px] xl:text-[36px] md:text-[30px] text-[26px] ">
            {t("driveTitle")}
          </h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
            {driveData.map(({ _id, percent, des }) => (
              <div key={_id}>
                <h2 className="font-extrabold 4xl:text-[70px] xl:text-[50px] md:text-[40px] text-[32px] text-[#0092E0]">
                  {percent}
                </h2>
                <p className="4xl:text-[24px] xl:text-[20px] md:text-[20px] text-[16px]  leading-tight">
                  {des}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="custom-container py-20 bg-[#F5F5F5] xl:pr-0">
        <FeaturedCarousel />
      </div>
      <div className="mt-[120px] py-20 bg-[#808080]">
        <div className="custom-container">
          <ExploreMoreCarousel />
        </div>
      </div>
      <div className="!py-[90px] custom-container">
        <ContactForm
          className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] xl:w-[88%] 4xl:w-[100%]"
          title={t("contactTitle")}
        />
      </div>
    </>
  );
};
export default page;
