"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform"
import LearnMore from "../../components/learnMore";
import Script from "next/script";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../messages/en/industry.json';
import esContent from '../../../../../messages/es/industry.json';
import frContent from '../../../../../messages/fr/industry.json';
import { changeLocalization } from "../../components/changeLocalization";
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export default function Page() {
  const t = useTranslations('manufacturing')
  const locale = useLocale();
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { schemaData } = content.manufacturing;
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        canonical={`https://www.rialtes.com/${locale}/industry/manufacturing-cloud-erp`}
      />
      <Script
        id="schema-manufacturing"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* breadcrumbs schema */}
      <BreadcrumbSchema />
      {/* hero section */}
      <section className="relative pb-20">
        <div className="xl:block hidden">
          <Image
            src="/images/industry/manufacture/smart-manufacturing-technology.webp"
            alt={t('bannerAlt')}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "75% 20%" }}

          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/industry/manufacture/smart-manufacturing-technology-mobile.webp"
            alt={t('bannerAlt')}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}

          />
        </div>
        <div className="relative custom-container xl:!pr-0">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-20">
            <div className="xl:col-span-5 col-span-12 xl:pr-0  md:pr-0 mt-20">
              <h3 className="text-white xl:text-[24px] text-[18px] font-bold mb-2 mt-10">{t('headerTitle')}</h3>
              <h1 className="text-white  leading-tight mt-5 pr-10 xl:pr-0 4xl:text-[60px] xl:text-[45px] text-[26px]">
                {t('headerSubTitleOne')}
              </h1>
              <h3 className="4xl:text-[40px] xl:text-[20px] mt-10 text-white font-bold text-[18px] leading-tight">{t('headerSubTitleTwo')}</h3>
            </div>
            <div className="xl:col-span-6 col-span-12">
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb */}
      <section className="custom-container">
        <BreadCrumbs />
      </section>
      {/* page description */}
      <section className="xl:mt-16 mt-8 custom-container">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-7 col-span-12">
            <p className="mt-10  leading-tight xl:pr-20 pr-10 4xl:text-[20px] xl:text-[18px]  text-[16px]">{t('drivingDesc')}</p>
          </div>
          <div className="xl:col-span-5 col-span-12">
          </div>
        </div>
      </section>
      {/* thought leadership section */}
      <section className="relative  overflow-hidden mt-20 xl:!mr-[142px]">
        <div className="xl:block hidden">
          <Image
            src="/images/industry/manufacture/digital-manufacturing-transformation.webp"
            alt={t('thoughtAlt')}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "75% 20%" }}
          />
        </div>
        <div className="xl:hidden block h-[625px]">
          <Image
            src="/images/industry/manufacture/digital-manufacturing-transformation-mobile.webp"
            alt={t('thoughtAlt')}
            priority
            sizes="100vw"
            width={0}
            height={0}
            className="w-full h-full"
            style={{ objectFit: "cover", objectPosition: "75% 60%" }}
          />
        </div>
        <div className="custom-container h-full relative xl:block hidden ">
          <div className={`relative  px-[48px] pb-[80px] pt-[45px]  4xl:w-[570px] w-[488px]  xl:block hidden
            ${locale === "es"
              ? "4xl:h-[695px]"
              : locale === "fr"
                ? "4xl:h-[750px]"
                : "4xl:h-[695px]"
            }`}

          >
            <div className="xl:absolute  inset-0 bg-[#016FBE] mix-blend-multiply"></div>
            <div className="relative  bg-opacity-80 text-white z-10 rounded-lg">
              <h2 className="font-light leading-tight 4xl:text-[60px] xl:text-[45px]  text-[26px]">{t('thoughtTitle')}</h2>
              <h3 className="4xl:text-[36px] xl:text-[26px] text-[22px] mt-5 leading-tight font-semibold">{t('thoughtSubTitle')}</h3>
              <p className='mt-5 font-normal 4xl:text-[20px] xl:text-[18px]  text-[16px]
 '>{t('thoughtSubTitleOne')}</p></div>
          </div>
        </div>
      </section>
      <div className="relative pt-[37px] pb-[53px] xl:hidden block custom-container ">
        <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
        <div className="relative  bg-opacity-80 text-white z-10  rounded-lg">
          <h2 className="font-light leading-tight 4xl:text-[60px] xl:text-[45px] md:text-[36px] text-[26px] ">{t('thoughtTitle')}</h2>
          <h3 className="xl:text-[36px] text-[22px] mt-5 leading-tight font-semibold">{t('thoughtSubTitle')}</h3>
          <p className='mt-5 font-normal 4xl:text-[20px] xl:text-[18px]  text-[16px]
 '> {t('thoughtSubTitleOne')}</p></div>
      </div>

      {/* end to end section */}
      <section className="relative">
        <div className="xl:block hidden">
          <Image
            src="/images/industry/manufacture/end-to-end-manufacturing-services.webp"
            alt={t('endAlt')}
            fill
            priority
            className="custom-container xl:!pr-0"
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/industry/manufacture/end-to-end-manufacturing-services-mobile.webp"
            alt={t('endAlt')}
            fill
            priority
            sizes="100vw"
            className="sm:object-cover sm:object-[75%_43%]"
          />
        </div>
        <div
          className="relative text-white grid xl:grid-cols-12 grid-cols-1" >
          <div className="col-span-2"></div>
          <div className="xl:pt-10 pt-5 4xl:pb-32 pb-10 col-span-4 xl:pl-10">
            <div className="xl:col-span-5 col-span-12 xl:pt-8  xl:mt-0 mt-[38rem] mx-[35px] xl:mx-0">
              <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('endTitle')}</h2>
              <p className="mt-5 font-light pr-8 xl:pr-0 4xl:text-[20px] xl:text-[18px]  text-[16px]
 ">{t('endSubTitle')}</p>
              <p className="xl:mt-5 font-light 4xl:text-[20px] xl:text-[18px]  text-[16px]">{t('endDesc')}</p>
              <div className="mt-5">
                <LearnMore btnName={t('learnMoreBtn')} bgcolor={"#006FBE"} bordercolor={"#006FBE"} locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* pre built section */}
      <section className="relative grid xl:grid-cols-12 grid-cols-1">
        <div className="xl:col-span-7 col-span-12">
          <Image
            src="/images/industry/manufacture/futuristic-digital-city-horizon.webp"
            alt={t('preAlt')}
            priority
            className="w-full h-full"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="xl:col-span-4 col-span-12">
          <div className="xl:col-span-4 col-span-12 bg-[#C17B57] text-white xl:pl-14 pt-14 p-10 pb-0 w-full">
            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('preTitle')}</h2>
            <h3 className="4xl:text-[36px] text-[22px] mt-5 font-semibold leading-tight">{t('preSubtitle')}</h3>
            <p className="mt-5 xl:mb-10 mb-5 font-normal 4xl:pr-20 pr-5 leading-tight 4xl:text-[20px] xl:text-[18px]  text-[16px]">{t('preDesc')}</p>
            <div className="xl:bottom-0">
              <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 col-span-12"></div>
      </section>
      {/* discrite manufacturing section */}
      <section className="custom-container max-md:px-0 mt-16">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          {/* Image First on Mobile */}
          <div className="xl:col-span-7 col-span-12 order-1 xl:order-2">
            <Image
              src="/images/industry/manufacture/precision-manufacturing-engineer-assembly.webp"
              alt={t('enginerAlt')}
              priority
              className="w-full"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          {/* Text Second on Mobile */}
          <div className="xl:col-span-5 col-span-12 xl:mx-0 order-2 xl:order-1 max-md:px-[35px]">
            <h2 className="leading-tight mt-10 xl:mt-0 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('discreteTitle')}</h2>
            <h3 className="4xl:text-[36px] text-[22px] mt-5 font-semibold xl:pr-20 leading-tight">
              {t('discreteSubTitle')}
            </h3>
            <p className="mt-5 xl:mb-10 font-normal 4xl:pr-24 pr-5 leading-tight xl:pr-10 4xl:text-[20px] xl:text-[18px]  text-[16px] ">
              {t('discreteDesc')}</p>
            <div className="xl:bottom-0">
              <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
            </div>
          </div>
        </div>
      </section>
      {/* process manufacturing */}
      <section className="relative custom-container mt-20 max-md:px-0">
        <div></div>
        <div className="xl:block hidden">
          <Image
            src="/images/industry/manufacture/automated-pharmaceutical-production-line.webp"
            alt={t('manAlt')}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/industry/manufacture/automated-pharmaceutical-production-line-mobile.webp"
            alt={t('manAlt')}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="relative text-white">
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="col-span-7"></div>
            <div className="xl:col-span-5 col-span-12 xl:pt-8 xl:px-16 xl:mt-0 p-10 xl:p-0 mt-[30rem]  xl:pb-16 xl:mx-0 bg-[#0098D1] opacity-[0.9]">
              <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('processTitle')}</h2>
              <h3 className="4xl:text-[36px] text-[22px] mt-5 font-semibold  leading-tight">
                {t('processSubtitle')}</h3>
              <p className="mt-5 font-light leading-tight xl:pr-0 4xl:text-[20px] xl:text-[18px]  text-[16px]">{t('processDesc')} </p>
            </div>
          </div>
        </div>
      </section>
      {/* repetative manufacturing section */}
      <section>
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="col-span-7 order-1 xl:order-2">
            <Image
              src="/images/industry/manufacture/engineers-analyzing-manufacturing-data.webp"
              alt={t('dataAlt')}
              priority
              className="w-full h-full"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="col-span-5 bg-[#DDF74D] order-2 xl:order-1 pb-10 xl:pb-0">
            <div className="custom-container xl:!pr-4">
              <h2 className="leading-tight mt-10 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] text-[26px]">{t('repetitiveTitle')}</h2>
              <h3 className="4xl:text-[36px] 2xl:text-[30px] xl:text-[25px] text-[22px] mt-5 font-semibold leading-tight xl:pr-10">
                {t('repetitiveSubtitle')}
              </h3>
              <p className="mt-5 xl:mb-5 font-normal xl:pr-10 4xl:text-[20px] xl:text-[18px] text-[16px]">
                {t('repetitiveDesc')}
              </p>
              <div>
                <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* robotics section */}
      <section className="custom-container">
        <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-16 text-white">
          <div className="col-span-6">
            <Image
              src="/images/industry/manufacture/robotic-ev-battery-assembly-line.webp"
              alt={t('roboticAlt')}
              priority
              className="w-full"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="bg-[#CA7D12] p-12">
              <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('aiTitle')}</h2>
              <h3 className="4xl:text-[42px] text-[22px] mt-5 font-semibold xl:pr-20 leading-tight">
                {t('aiSubtitle')}
              </h3>
              <p className="mt-5 xl:mb-5 font-normal xl:pr-10 pr-5 leading-tight 4xl:text-[20px] xl:text-[18px]  text-[16px]">
                {t('aiDesc')}
              </p>
            </div>
          </div>
          <div className="col-span-6 xl:mt-32 mt-10">
            <Image
              src="/images/industry/manufacture/quality-control-food-processing-inspection.webp"
              alt={t('shopAlt')}
              priority
              className="w-full"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="bg-[#0963C4] p-12">
              <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('jobTitle')}</h2>
              <h3 className="4xl:text-[42px] text-[22px] mt-5 font-semibold xl:pr-20 leading-tight">
                {t('jobSubTitle')}
              </h3>
              <p className="mt-5 xl:mb-5 font-normal xl:pr-10 leading-tight 4xl:text-[20px] xl:text-[18px]  text-[16px]">
                {t('jobDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*data cloude section */}
      <section className="relative">
        <div className="xl:block hidden">
          <Image
            src="/images/industry/manufacture/cybersecurity-analyst-monitoring-dashboard.webp"
            alt={t('cloudAlt')}
            className="w-full relative"
            priority
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/industry/manufacture/cybersecurity-analyst-monitoring-dashboard-mobile.webp"
            alt={t('cloudAlt')}
            className="w-full relative h-[668px]"
            priority
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="grid xl:grid-cols-12 grid-cols-1 absolute 4xl:top-[27rem] xl:top-[18rem] top-[32rem]">
          <div className="col-span-6"></div>
          <div className="col-span-4">
            <div className="bg-[#A1DAF6] p-10 text-black pb-20 mx-[35px] xl:mx-0">
              <h2 className="leading-tight xl:pr-0 4xl:text-[60px] 2xl:text-[48px] xl:text-[40px] text-[26px]">{t('dataTitle')}</h2>
              <h3 className={`mt-5  leading-tight font-semibold  xl:pr-0
                ${locale === "es"
                  ? "4xl:text-[42px] 2xl:text-[32px] xl:text-[27px] text-[22px]"
                  : locale === "fr"
                    ? "4xl:text-[42px] 2xl:text-[32px] xl:text-[27px] text-[22px]"
                    : "4xl:text-[42px] 2xl:text-[36px] xl:text-[30px] text-[22px]"
                }`}

              >{t('dataSubtitle')}</h3>
              <p className="mt-8 leading-tight 4xl:text-[20px] xl:text-[15px] 2xl:text-[17px] text-[16px]">{t('dataDesc')}  </p>
              <div className={`
                ${locale === "es"
                  ? "absolute mt-[30px]"
                  : locale === "fr"
                    ? "absolute mt-[30px]"
                    : "absolute mt-5"
                }`}

              >
                <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
              </div>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
      </section>
      {/* ERP integration section */}
      <section className={` custom-container xl:mx-0  xl:!pr-[142px]
        ${locale === "es"
          ? "mt-[35rem]  md:mt-[24rem] [@media(max-width:375px)]:mt-[40rem] 4xl:mt-[15rem] 2xl:mt-[12rem] xl:mt-[15rem]"
          : locale === "fr"
            ? "mt-[35rem] md:mt-[24rem] [@media(max-width:375px)]:mt-[40rem] 4xl:mt-48 2xl:mt-[12rem] xl:mt-[15rem]"
            : "mt-[29rem] md:mt-[20rem] [@media(max-width:375px)]:mt-[34rem] 4xl:mt-48 2xl:mt-36 xl:mt-48"
        }`}

      >
        <div className="grid xl:grid-cols-12 grid-cols-1 gap-5">
          <div className="xl:col-span-7 col-span-12 order-1 xl:order-2">
            <Image
              src="/images/industry/manufacture/wind-energy-engineers-inspecting-turbines.webp"
              alt={t('erpAlt')}
              priority
              className="w-full  object-cover h-full"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="xl:col-span-5 col-span-12 order-2 xl:order-1">
            <h2 className="leading-tight xl:pr-0 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('erpTitle')}</h2>
            <h3 className="mt-5 4xl:text-[42px] text-[22px] leading-tight font-semibold">{t('erpSubtitle')}</h3>
            <p className="mt-8 font-normal leading-tight 4xl:text-[20px] xl:text-[18px]  text-[16px]">
              {t('erpDesc')}
            </p>
          </div>
        </div>
      </section>
      {/* demand planning section */}
      <section className="mt-16 custom-container xl:mx-0 xl:!pr-[130px]">
        <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-16">
          <div className="xl:col-span-5 col-span-12 order-2 xl:order-2">
            <h2 className="leading-tight mt-8 xl:mt-0 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('demandTitle')}</h2>
            <h3 className="mt-5 4xl:text-[42px] text-[22px] leading-tight font-semibold">{t('demandSubTitle')}</h3>
            <p className="mt-8 font-light leading-tight 4xl:text-[20px] xl:text-[18px]  text-[16px]">
              {t('demandDesc')}
            </p>
          </div>
          <div className="xl:col-span-6 col-span-12 order-1 xl:order-1">
            <Image
              src="/images/industry/manufacture/warehouse-workers-distribution-center.webp"
              alt={t('demandAlt')}
              priority
              className="w-full h-full"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </section>
      {/* ai manufacturing section */}
      <section className="custom-container mt-16 xl:!pr-0 max-md:px-0">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:hidden block">
            <Image
              src="/images/industry/manufacture/digital-infrastructure-sustainable-energy-mobile.webp"
              alt={t('aiAlt')}
              priority
              className="w-full h-[492px] "
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="xl:col-span-4 col-span-12 bg-[#33A316] p-8 text-white xl:mt-10 mb-10 z-[9] mx-[35px] xl:mx-0 mt-[-115px] pb-20 xl:pb-0">
            <h2 className="leading-tight  xl:mt-0 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('shapingTitle')}</h2>
            <h3 className="mt-5 4xl:text-[42px] text-[22px] leading-tight font-semibold ">{t('shapingSubtitle')}</h3>
            <p className="mt-8  font-light leading-tight 4xl:text-[20px] xl:text-[18px]  text-[16px]">
              {t('shapingDesc')}
            </p>
            <div className="mt-5 absolute  xl:relative">
              <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
            </div>
          </div>
          <div className="xl:col-span-8 col-span-12 xl:block hidden xl:ml-[-300px]">
            <Image
              src="/images/industry/manufacture/digital-infrastructure-sustainable-energy.webp"
              alt={t('aiAlt')}
              priority
              className="w-full h-full"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </section>
      {/* power section */}
      <section className="xl:mt-24 mt-16  xl:mx-0 custom-container">
        <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-16">
          <div className="xl:col-span-6 col-span-12">
            <div className="xl:block hidden h-full">
              <Image
                src="/images/industry/manufacture/neon-innovation-energy-light-bulb.webp"
                alt={t('powerAlt')}
                priority
                className="w-full h-full"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="xl:hidden block">
              <Image
                src="/images/industry/manufacture/neon-innovation-energy-light-bulb-mobile.webp"
                alt={t('powerAlt')}
                priority
                className="w-full h-full"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
          <div className="xl:col-span-5 col-span-12">
            <h2 className="leading-tight mt-8 xl:mt-0 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('sapTitle')}</h2>
            <h3 className="mt-5 4xl:text-[42px] text-[22px] leading-tight font-semibold">{t('sapSubtitle')}</h3>
            <p className="mt-8 font-normal leading-tight 4xl:text-[20px] xl:text-[18px]  text-[16px]">
              {t('sapDesc')}
            </p>
            <div className="mt-5">
              <LearnMore btnName={t('learnMoreBtn')} bgcolor={"#006FBE"} bordercolor={"#006FBE"} locale={locale} />
            </div>
          </div>
        </div>
      </section>
      {/* fast facts section */}
      <section className="mt-20 py-[100px] max-[515px]:pt-[320px] max-[575px]:pt-[500px] relative text-white bg-[url('/images/industry/manufacture/fact-mobile.webp')] sm:bg-[url('/images/industry/manufacture/fast.webp')] bg-cover bg-center bg-no-repeat">
        <div className="custom-container">
          <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] xl:w-[80%]">{t('factTitle')}</h2>
          <h3 className="mt-5 4xl:text-[42px] text-[22px] xl:text-[30px] leading-tight xl:w-[60%]">{t('factSubtitle')}</h3>
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[60px] mt-10 lg:w-[70%] sm:w-[70%] md:w-full">
            <div className="md:col-span-5 space-y-14">
              <div>
                <h2 className="text-[#068EDA] font-extrabold leading-tight text-[40px] 4xl:text-[60px]">{t('factNum')} </h2>
                <h3 className="leading-tight 4xl:text-[30px] xl:text-[18px] text-[20px]"> {t('factDesc')}</h3>
              </div>
              <div>
                <h2 className="text-[#068EDA] font-extrabold leading-tight text-[40px] 4xl:text-[60px]">{t('factOneNum')}</h2>
                <h3 className="leading-tight 4xl:text-[30px] xl:text-[18px] text-[20px]">{t('factDescOne')}</h3>
              </div>
              <div>
                <h3 className="leading-tight 4xl:text-[30px] xl:text-[18px] text-[20px]">{t('factDescTwo')}</h3>
                <h2 className="text-[#068EDA] font-extrabold leading-tight text-[40px] 4xl:text-[60px]">{t('factTwo')}</h2>
              </div>
            </div>

            {/* 2nd col */}
            <div className="md:col-span-6 lg:col-span-5 space-y-14">
              <div className="lg:mt-10">
                <h3 className="leading-tight font-medium 4xl:text-[30px] xl:text-[18px] text-[20px]" >{t('adoption')}</h3>
                <h2 className="text-[#068EDA] font-extrabold leading-tight text-[40px] 4xl:text-[60px] xl:text-[40px]">{t('billion')} </h2>
                <h3 className="leading-tight font-medium 4xl:text-[30px] xl:text-[18px] text-[20px]">{t('by')}</h3>
              </div>
              <div>
                <h3 className="leading-tight 4xl:text-[30px] xl:text-[18px] text-[20px]">{t('smartTitle')}</h3>
                <h2 className="text-[#068EDA] font-extrabold leading-tight text-[40px] 4xl:text-[60px]">{t('smartNum')}</h2>
              </div>
            </div>
          </div>

          <div className="-bottom-6 absolute">
            <LearnMore btnName={t('learnMoreBtn')} bgcolor={"#006FBE"} bordercolor={"#006FBE"} locale={locale} />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="mt-20 xl:mt-10 custom-container text-black xl:py-20 pb-10">
        <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle')} subtitle1={t('contactSubtitleOne')} className={"max-w-[62rem]  leading-tight 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] text-[26px]"} />
      </div>
    </div>
  );
}