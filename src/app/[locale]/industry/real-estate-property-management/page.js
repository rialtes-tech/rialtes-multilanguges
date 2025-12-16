"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import ExploreMoreCarousel from '../../components/servicesExploreMoreCarousel';
import CaseStudyIndivisual from '../../components/caseStudyIndivisual';
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../messages/en/industry.json';
import esContent from '../../../../../messages/es/industry.json';
import frContent from '../../../../../messages/fr/industry.json';
import { changeLocalization } from "../../components/changeLocalization";


export default function Page() {
  const t = useTranslations("realEstate");
  const locale = useLocale();
  const realContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { growLatestServices, latestServices, slides, schemaData } = realContent.realEstate;


  const ServicesCard = ({ services }) => (
    <div className="h-full flex flex-col border border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
      <div className="flex-grow flex flex-col">
        <h3 className="mb-[15px] md:mb-[25px] text-[#1F3F69] 4xl:text-[30px] xl:text-[24px] text-[20px]">{services.title}</h3>
        <p className='md:mb-[15px] mb-0 4xl:text-[22px] xl:text-[20px] text-[18px]'>{services.description}</p>
      </div>
    </div>
  );
  const Services = () => {
    return (
      <div className="text-black 2xl:pr-70 xl:pr-35 md:pr-8 pr-0 mt-20 ">
        <h2 className="text-black mb-6 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[85%] ">{t('serviceTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 mt-10 w-full">
          {latestServices.map((services) => (
            <ServicesCard key={services.id} services={services} />
          ))}
        </div>
      </div>
    );
  };
  const GrowServicesCard = ({ services }) => (
    <div className=" h-full">
      <div className="relative overflow-hidden">
        <Image
          className="w-full transition-transform duration-300 hover:scale-105"
          src={services.image}
          alt={services.alt}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="flex flex-col pt-8">
        <h3 className="mb-[10px] md:mb-[15px] font-semibold h3-bold 4xl:text-[30px] xl:text-[24px] text-[20px] line-clamp-2 min-h-[60px]">{services.title}</h3>
      </div>
      <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight mt-2">{services.description}</p>
      <UnorderedList arrName={services?.productsDetails} ulClassName="mt-6 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" liClassName="font-medium flex mt-3 items-start before:content-['•'] before:text-[#0092E0] before:text-4xl before:font-bold before:mr-2 before:leading-[0.5]" />
      <div className="mt-6"><LearnMore btnName={t('learnMoreBtn')} locale={locale} /></div>
    </div>
  );

  const GrowServices = () => {
    return (
      <div className="text-black lg:pr-20 md:pr-10 ">
        <h2 className="pb-10 text-red 4xl:w-[100%] xl:w-[79%] w-fill leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">{t('growTitle')}</h2>
        <p className="xl:w-full  text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{t('growDesc')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 md:gap-10 2xl:gap-[140px] lg:gap-[110px] mt-20">
          {growLatestServices.map((services) => (
            <GrowServicesCard key={services.id} services={services} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords="home, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/industry/real-estate-property-management/`}
      />
      <Script
        id="schema-real-estate"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px]  ">
        <div className="hidden md:block">
          <Image
            src="/images/industry/real-estate/architect-hand-pointing-city-model-urban-planning.webp"
            alt={t('bannerAlt')}
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/industry/real-estate/architect-hand-pointing-city-model-urban-planning-mobile.webp"
            alt={t('bannerAlt')}
            fill
            priority
          />
        </div>
        <div className="relative h-full custom-container flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12 xl:col-span-8 lg:col-span-9 mb-[139px] ">
              <h3 className="text-white text-[18px] xl:text-[24px] font-bold ">
                {t('headerSubTitle')}
              </h3>
              <h2 className="text-white leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]  xl:w-[75%] 2xl:w-[67%] 4xl:w-[92%] mt-[11.5px] md:mt-[28.5px]">
                {t('headerTitle')}
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
            </div>
          </div>
        </div>
      </section>
      {/* page description */}
      <section className="custom-container">
        <div className="py-10 bg-white">
          <div>
            <div className="flex flex-col xl:flex-row py-6 xl:gap-10">
              <div className="flex flex-col w-full 4xl:w-[50%] xl:w-[38%] 2xl:w-[35%] xl:mr-4 xl:mb-0 mb-4">
                <h1 className="text-black md:pb-0 pb-4 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
                  {t('realTitle')}
                </h1>
              </div>
              <div className="flex flex-col w-full xl:w-[40%]">
                <p className="text-[#000000] text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                  {t('realDescOne')}   </p>
                <p className="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                  {t('realDescTwo')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* We Help You Grow and Thrive */}
      <div className="custom-container mt-6">
        <section className="pb-16 xl:pt-0 bg-white">
          <GrowServices />
        </section>
      </div>
      <div className="bg-[#EDEDED]">
        <div className="custom-container">
          <section className="pb-16  pt-10">
            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] "> {t('estateTitle')}</h2>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:mt-16 mt-5 xl:gap-20 gap-10">
              <div>
                <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight"> {t('estateDesc')}</p>
              </div>
              <div className="xl:mr-[20px] xl:ml-2">
                <h4 className="text-[#0092E0] text-[22px] xl:text-[24px] 4xl:text-[26px] leading-tight"> {t('estateTitleOne')}</h4>
                <p className="mt-5 text-[18px] xl:text-[18px] 4xl:text-[22px] leading-tight">  {t('estateTitleOneDesc')}</p>
              </div>
              <div className="xl:border-l-2 xl:border-[#707070] ">
                <div className="xl:ml-11">
                  <h4 className="text-[#0092E0] text-[22px] xl:text-[24px] 4xl:text-[26px] leading-tight"> {t('estateTitleTwo')}</h4>
                  <p className="mt-5 text-[18px] xl:text-[18px] 4xl:text-[22px] leading-tight"> {t('estateTitleTwoDesc')}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Latest Services Section */}
      <div className="custom-container">
        <section className="pb-16 bg-white">
          <Services />
          <LearnMore btnName={t('learnMoreBtn')}  locale={locale} />
        </section>
      </div>
      <div className="bg-[#F5F5F5] py-6">
        <div className="custom-container md:!pr-0">
          <CaseStudyIndivisual slides={slides} />
        </div>
      </div>
      <div className="bg-[#808080] py-6" >
        <div className="custom-container md:!pr-0">
          <ExploreMoreCarousel />
        </div>
      </div>
      {/* Contact Form */}
      <div className="mb-20 mt-20 custom-container text-black py-6">
        <ContactForm title={t('contactUs')} className={"leading-tight text-black 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[65%] 4xl:w-[80%]"} />
      </div>
    </div>
  );
}