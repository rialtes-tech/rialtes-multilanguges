"use client";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import ExploreMoreCarousel from '../../../components/servicesExploreMoreCarousel';
import LearnMore from "@/app/[locale]/components/learnMore";
import CaseStudyIndivisual from '../../../components/caseStudyIndivisual';
import Script from "next/script";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from 'next-intl';
import enContent from '../../../../../../messages/en/industry.json';
import esContent from '../../../../../../messages/es/industry.json';
import frContent from '../../../../../../messages/fr/industry.json';
import { changeLocalization } from "../../../components/changeLocalization";
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'
import BreadcrumbSchema from "@/app/[locale]/components/BreadcrumbSchema";

export default function Page() {
  const t = useTranslations('healthCare')
  const locale = useLocale();
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { slidesCaseStudy, latestServices, growLatestServices, schemaData } = content.healthCare;

  const ServicesCard = ({ services }) => (
    <div className="w-full h-full flex flex-col border border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
      <div className="flex-grow flex flex-col">
        <h3 className="mb-[15px] md:mb-[25px] text-[#1F3F69] 4xl:text-[30px] xl:text-[24px] md:text-[22px] text-[20px] leading-tight">{services.title}</h3>
        <p className='md:mb-[15px] mb-0 4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px] leading-tight'>{services.description}</p>
      </div>
    </div>
  );
  const GrowServicesCard = ({ services, className = '' }) => (
    <div className={`flex flex-col h-full ${className}`}>
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
      <div className="flex flex-col pt-4 flex-grow 3xl:pr-[80px] xl:pr-[50px]">
        <h3 className="mb-[10px] md:mb-[15px] font-semibold h3-bold line-clamp-2 min-h-[30px] 4xl:text-[30px] xl:text-[24px] md:text-[22px] text-[20px] leading-tight">
          {services.title}
        </h3>
        <p className="text-[16px] xl:text-[16px] md:text-[18px]  4xl:text-[20px] leading-tight">
          {services.description}
        </p>
        <UnorderedList arrName={services?.productsDetails} ulClassName="mt-5 text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] leading-tight" liClassName="font-medium flex mt-3 items-start before:content-['•'] before:text-[#0092E0] before:text-4xl before:font-bold before:mr-2 before:leading-[0.5]" />
      </div>
      <div className="mt-auto pt-5">
        <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
      </div>
    </div>


  );

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords="home, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/industry/life-sciences/healthcare-medtech-patient-care/`}
      />
      <Script
        id="schema-healthcare"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* breadcrumbs schema */}
      <BreadcrumbSchema />
      <section className="relative group overflow-hidden h-[400px] md:h-[500px] 4xl:h-[650px]">
        <div className="hidden lg:block">
          <Image
            src="/images/healthcare/healthcare-professional-holographic-medical-data.webp"
            alt={t('bannerAlt')}
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Mobile Image */}
        <div className="block lg:hidden">
          <Image
            src="/images/healthcare/healthcare-professional-holographic-medical-data-mobile.webp"
            alt={t('bannerAlt')}
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            fill
            priority
          />
        </div>
        <div className="relative h-full custom-container flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12 xl:col-span-7 lg:col-span-9">
              <h3 className="text-white text-[18px] xl:text-[20px] 4xl:text-[24px] font-bold">
                {t('headerTitle')}
              </h3>
              <h2 className="text-white leading-tight 4xl:text-[60px] xl:text-[40px]  md:text-[30px] text-[26px] 2xl:w-[80%] 4xl:w-[90%] xl:w-[90%] md:w-[60%] mt-[11.5px] md:mt-[28.5px]">
                {t('headerSubTitle')}
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb */}
      <section className="custom-container">
        <BreadCrumbs />
      </section>
      <section className="mt-[70px] custom-container">
        <div className="pb-5 bg-white">
          <div className=" mx-auto ">
            <div className="flex flex-col xl:flex-row py-6 xl:gap-20 gap-5">
              <div className="flex flex-col w-full 4xl:w-[50%] xl:w-[38%] xl:mr-4 xl:mb-0 ">
                <h1 className="text-black md:pb-0 pb-4 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px]">{t('pageDescTitle')}</h1>
              </div>
              <div className="flex flex-col w-full xl:w-[50%] ">
                <p className="text-[#000000] text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] leading-tight">{t('pageDesc1')}
                </p>
                <p className="mt-5 text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] leading-tight">{t('pageDesc2')}</p>
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
            <h2 className="pb-10 text-black leading-tight xl:w-[60%] 2xl:w-[52%] 4xl:w-[75%] w-fill 4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px]">{t('growServicesTitle')}</h2>
            <p className="xl:w-[65%] 4xl:w-[70%]  w-full text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] leading-tight">{t('growServicesDesc')}</p>
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
            <h2 className="text-black mb-6 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] xl:w-[75%] 2xl:w-[70%] 4xl:w-[85%]">{t('servicesTitle')}</h2>
            <p className="text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] leading-tight lg:w-[80%]">{t('servicesDesc')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6 mt-10">
              {latestServices.map((services) => (
                <ServicesCard key={services.id} services={services} />
              ))}
            </div>
            <div className="mt-10">
              <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
            </div>
          </div>
        </section>
      </div>
      {/* Latest Customer Success Stories */}
      <div className="bg-[#F5F5F5] py-20 mt-20" >
        <div className="custom-container lg:!pr-0">
          <CaseStudyIndivisual slides={slidesCaseStudy} />
        </div>
      </div>

      {/* Explore More */}
      < div className="bg-[#808080] mt-20 py-20">
        <div className="custom-container lg:!pr-0">
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