"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import FeaturedCarousel from "../../../components/servicesFeaturedCarousel";
import ExploreMoreCarousel from "../../../components/servicesExploreMoreCarousel";
import LearnMore from "@/app/[locale]/components/learnMore";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/solutions.json";
import esContent from "../../../../../../messages/es/solutions.json";
import frContent from '../../../../../../messages/fr/solutions.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'
import BreadcrumbSchema from "@/app/[locale]/components/BreadcrumbSchema";

export default function HealthCloud() {
  const t = useTranslations("revenueCloud");
  const locale = useLocale();
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { revenueStats, salesForce, salesForce2, schemaData } = content.revenueCloud;

  return (
    <section>
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords="home, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/solutions/enterprise-platforms/salesforce-revenue-cloud-consulting/`}
      />
      <Script
        id="schema-revenue-cloude"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* breadcrumbs schema */}
      <BreadcrumbSchema />
      <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/images/revenue-cloud/revenue-cloud-banner.webp"
            alt={t("bannerAlt")}
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/revenue-cloud/revenue-cloud-banner-mob.webp"
            alt={t("bannerAlt")}
            style={{ objectFit: "cover", objectPosition: "55% 20%" }}
            fill
            priority
          />
        </div>
        <div className="relative h-full custom-container flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12 xl:col-span-7 lg:col-span-9">
              <h3 className="text-white text-[14px] md:text-[20px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 4xl:text-[24px] font-bold">
                {t("revenueTitle")}
              </h3>
              <h2 className="text-white text-[24px] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[73px] mt-[11.5px] md:mt-[10px] xl:text-[55px] 2xl:text-[60px] 4xl:text-[60px] w-[300px] md:w-[490px] lg:w-[600px] xl:w-[700px] 2xl:w-[700px] 4xl:w-[778px] leading-tight ">
                {t("revenueSubTitle")}
              </h2>
              <Image
                src="/images/salesforce-consulting-services/salesforce-partner-logo.webp"
                alt={t("sapPartnerLogoAlt")}
                width={0}
                height={0}
                priority
                className="mt-10 w-[100px] md:w-[140px] lg:w-[160px] xl:w-[180px] 2xl:w-[230px] 4xl:w-[260px]"
              />
            </div>
            <div className="col-span-12 lg:col-span-3 xl:col-span-5"></div>
          </div>
        </div>
      </section>
      {/* breadcrumb */}
      <section className="custom-container">
        <BreadCrumbs />
      </section>
      {/* page description */}
      <section className="custom-container">
        <div className="py-8 bg-white">
          <div className="2xl:pr-72 xl:pr-40 md:pr-20 4xl:pr-20">
            <div className="flex flex-col lg:flex-row items-center py-6 ">
              <div className="flex flex-col  xl:mb-0 mb-4 ">
                <h1 className=" md:pb-0 pb-4  xl:w-[650px] 2xl:w-[700px] 4xl:w-[740px] lg:w-[520px] leading-tight 4xl:text-[60px] 2xl:text-[40px] xl:text-[40px] md:text-[30px] text-[26px]">
                  {t("simplifyTitle")}
                </h1>
              </div>
              <div className="flex flex-col w-full ">
                <p className="text-[#000000] 2xl:w-[520px] 4xl:w-[580px] xl:w-[460px] lg:w-[400px] 4xl:pl-10 2xl:pl-8 xl:pl-8 lg:pl-6 text-[16px] md:text-[18px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px]">
                  {t("simplifyDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:mt-20 custom-container py-10">
        <h3 className="text-[24px] md:text-[24px] lg:text-[30px] xl:text-[34px] 2xl:text-[38px] 4xl:text-[40px] leading-tight  font-normal">
          {t("cloudTitle")}
        </h3>
        <Image
          src={t("revenueCloudImg")}
          alt={t("infographicAlt")}
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
      </section>
      <section className="lg:mt-20 custom-container mt-10 pb-10">
        <h2 className="4xl:text-[60px] 2xl:text-[40px] xl:text-[40px] md:text-[30px] text-[26px] leading-tight font-normal">
          {t("streamlineTitle")}
        </h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:mt-10 gap-14">
          {salesForce.map((sales) => {
            return (
              <div key={sales.id}>
                <div className="mt-10">
                  <Image
                    src={sales.imageUrl}
                    alt={sales.alt}
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
                <h4 className="mt-5 text-[18px] md:text-[22px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] 4xl:text-[30px] w-[200px] md:w-[210px] lg:w-[160px] xl:w-[180px] 2xl:w-[220px] 4xl:w-[256px]">
                  {sales.title}
                </h4>
              </div>
            );
          })}
        </div>
        <h2 className="4xl:text-[60px] 2xl:text-[40px] xl:text-[40px] md:text-[30px] text-[26px] leading-tight  font-normal mt-20 lg:mt-40 2xl:w-[980px] 4xl:w-[1084px] xl:w-[860px] lg:w-[730px] ">
          {t("pipelineTitle")}
        </h2>
        <div className="my-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-10 gap-5">
            {salesForce2.map((sales) => {
              return (
                <div
                  key={sales.id}
                  className="border-2 p-10 hover:bg-[#D9F2FF] hover:border-transparent transition-all duration-300">
                  <h3 className="mt-5 text-[#1F3F69] text-[22px] md:text-[24px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 4xl:text-[30px] md:w-[210px] lg:w-[230px] xl:w-[240px] 2xl:w-[260px] 4xl:w-[301px]">
                    {sales.title}
                  </h3>
                  <p className="mt-5 text-[16px] md:text-[18px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px] 4xl:w-[304px] 2xl:w-[290px] xl:w-[260px] lg:w-[200px]">
                    {sales.description}
                  </p>
                </div>
              );
            })}
          </div>
          <LearnMore btnName={t('learnMore')} />
        </div>
      </section>
      {/* Reduce Revenue Pitfalls, Supercharge Your Sales Funnel */}
      <section className="bg-[#fffafa] py-6 ">
        <div className="custom-container">
          <div>
            <div className="py-10">
              <h2 className="pb-4 text-black text-[24px] md:text-[24px] lg:text-[30px] xl:text-[34px] 2xl:text-[38px] 4xl:text-[40px] leading-tight font-normal 2xl:w-[1080px] 4xl:w-[1190px] xl:w-[1000px] lg:w-[990px]">
                {t("funnelTitle")}
              </h2>
              <p className="pb-8 text-[16px] md:text-[18px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                {t("funnelDesc")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {revenueStats.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${item.widthClasses}`}>
                    <h2 className="text-[#0092E0] font-bold mb-2 4xl:text-[60px] 2xl:text-[40px] xl:text-[40px] md:text-[30px] text-[26px]">
                      {item.value}
                    </h2>
                    <p className="text-black text-[16px] md:text-[18px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F5F5F5] py-20 ">
        <div className="custom-container xl:pr-0">
          <FeaturedCarousel />
        </div>
      </section>
      <section className="custom-container md:!pr-0 lg:mt-20 bg-[#808080] mt-10 py-20">
        <ExploreMoreCarousel />
      </section>
      <section className="custom-container lg:mt-20 pb-20 mt-10">
        <ContactForm />
      </section>
    </section>
  );
}
