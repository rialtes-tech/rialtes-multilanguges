"use client";
import ContactForm from "@/app/[locale]/components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import Seo from "@/app/[locale]/components/Seo";
import Image from "next/image";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/solutions.json';
import esContent from '../../../../../../messages/es/solutions.json';
import frContent from '../../../../../../messages/fr/solutions.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'
import BreadcrumbSchema from "@/app/[locale]/components/BreadcrumbSchema";

export default function DemandPlusSection() {
  const t = useTranslations("tosca");
  const locale = useLocale();
  const homepageContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { whychooseData, endToEndData, qTestData, liveCompareData, neoLoadData, expertsList, seamlessData, schemaData } = homepageContent.tosca;
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords="home, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/solutions/quality-engineering-assurance/tosca-software-automation-testing`}
      />
      <Script
        id="schema-toska"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* breadcrumbs schema */}
      <BreadcrumbSchema />
      {/* hero section */}
      <section className="relative">
        <div className="xl:block hidden">
          <Image
            src="/images/toska/desktop/tricentis-tosca-automation-testing-services.webp"
            alt={t('bannerAlt')}
            width={0}
            height={0}
            priority
            sizes="100vw"
            className="w-full object-cover"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/toska/mobile/tricentis-tosca-automation-testing-services-mobile.webp"
            alt={t('bannerAlt')}
            className="w-full h-[400px] md:h-full object-cover"
            priority
            sizes="100vw"
            width={0}
            height={0}
          />
        </div>
        <div className="h-full absolute custom-container xl:!pr-0  mr-0 top-0">
          <div className="grid xl:grid-cols-12  grid-cols-1 gap-2">
            <div className="xl:col-span-6 md:col-span-2 col-span-12 4xl:mt-32 xl:mt-20 mt-[8rem] 4xl:pr-16  2xl:pr-14 xl:pr-10 pr-5 md:pr-64">
              <h3 className="text-white lg:text-[24px]  text-[18px] font-bold mb-2">
                {t('headerSubTitle')}</h3>
              <h1 className="text-white leading-tight mt-5 text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px]">
                {t('headerTitle')}
              </h1>
            </div>
            <div className="xl:col-span-7 col-span-12"></div>
          </div>
        </div>
      </section>
      {/* breadcrumb */}
      <section className="custom-container">
        <BreadCrumbs />
      </section>
      {/* page description */}
      <section className="custom-container xl:!pr-0">
        <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-24 mt-10">
          <div className="xl:col-span-9">
            <h2 className="leading-tight text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px]">
              {t('empowerTitleOne')} <br className="hidden sm:block" />
              {t('empowerTitleTwo')}
            </h2>
            <p className="xl:mt-12 mt-5 4xl:text-[22px] md:text-[18px] text-[16px]">
              {t('empowerDescOne')}
            </p>
            <p className="mt-5 pb-16 4xl:text-[22px] md:text-[18px] text-[16px]">
              {t('empowerDescTwo')}
            </p>
          </div>
        </div>
      </section>
      {/* why choose rialtes section */}
      <section className="relative">
        <div className="md:block hidden  2xl:h-full xl:h-[633px]">
          <Image
            src="/images/toska/desktop/software-developers-collaboration-coding.webp"
            alt={t('trustAlt')}
            priority
            sizes="100vw"
            className="w-full h-full object-cover"
            width={0}
            height={0}
          />
        </div>
        <div className="md:hidden block">
          <Image
            src="/images/toska/mobile/software-developers-collaboration-coding-mobile.webp"
            alt={t('trustAlt')}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[400px] object-cover"
            priority
          />
        </div>
        <div className="grid xl:grid-cols-12">
          <div className="xl:col-span-6"></div>
          <div className="xl:col-span-6 absolute 4xl:right-[333px] xl:right-[170px] top-[320px] xl:top-0 ">
            <div className="bg-[#016FBE] xl:bg-opacity-90 text-white p-8 4xl:w-[765px] xl:w-[550px] 4xl:pb-20 2xl:pb-[105px] pb-[220px] xl:pb-10">
              <h2 className="leading-tight 4xl:mt-10 text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px]">
                {t('whyTitle')}
              </h2>
              <h3 className="text-[20px] md:text-[26px] xl:text-[30px] 4xl:text-[42px] font-semibold leading-tight 4xl:mt-8 xl:mt-5 mt-5 md:pr-[36px] 4xl:pr-0">
                {t('whySubTitle')}
              </h3>
              <UnorderedList
                arrName={whychooseData}
                ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 md:pr-12 mt-8 xl:pr-0"
                liClassName="4xl:text-[20px] text-[16px]"
              />
            </div>
            <div className="bg-[#163055] max-xl:bottom-0 p-8 absolute mx-10 xl:mx-0 4xl:mx-0  4xl:mt-0   xl:mt-0">
              <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal pr-[10px] 4xl:pr-0">
                {t('whyDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end to end section */}
      <section className={`custom-container xl:!pr-0
       ${locale === "es"
          ? "mt-[750px] md:mt-[630px] lg:mt-[440px] 2xl:mt-[230px] xl:mt-[220px] 4xl:mt-[24rem]"
          : locale === "fr"
            ? "mt-[750px] md:mt-[615px] lg:mt-[440px] 2xl:mt-[230px] xl:mt-[220px] 4xl:mt-[18rem]"
            : "max-[425px]:mt-[660px] max-[372px]:mt-[705px] max-[345px]:mt-[770px] mt-[630px] md:mt-[560px] lg:mt-[355px] xl:mt-[144px] 4xl:mt-22"
        }`}
      >
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-8 xl:pr-10 4xl:pr-10">
            <h2 className="leading-tight text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] 4xl:block xl:block hidden">
              {t('serviceTitle')}
            </h2>
          </div>
        </div>
        <div className="grid xl:grid-cols-12 grid-cols-1 4xl:gap-10 xl:gap-16 4xl:mt-10 mt-16">
          <div className="xl:col-span-6 order-1 xl:order-2">
            <Image
              src="/images/toska/desktop/financial-data-analytics-multi-screen.webp"
              alt={t('serviceAlt')}
              width={0}
              height={0}
              sizes="100vw"
              className={`w-full object-cover 
               ${locale === "es"
                  ? "xl:h-[580px] 4xl:h-[765px]"
                  : locale === "fr"
                    ? "xl:h-[580px] 4xl:h-[765px]"
                    : "xl:h-[540px] 4xl:h-[655px]"
                }`}
              priority
            />
          </div>
          <div className="xl:col-span-6 order-2 xl:order-1">
            <h2 className="leading-tight text-[26px]  4xl:hidden xl:hidden block md:mt-20 mt-10">
              {t('serviceTitle')}
            </h2>
            <h3 className="text-[22px] md:text-[26px] xl:text-[30px] 4xl:text-[36px] font-semibold leading-tight mt-5 4xl:mt-0 xl:mt-0 ">
              {t('serviceTitleOne')}
            </h3>
            <h3 className="mt-5 text-[#006FBE] font-semibold 4xl:text-[32px] xl:text-[22px] text-[20px] leading-tight">
              {t('serviceTitleTwo')}
            </h3>
            <p className="mt-5 4xl:text-[20px] text-[16px]">
              {t('ServiceDescOne')}
            </p>
            <UnorderedList
              arrName={endToEndData}
              ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-1  marker:font-bold marker:text-2xl pl-5 font-medium 4xl:mt-8 mt-5 md:pb-0"
              liClassName="4xl:text-[20px] text-[16px]"
            />
          </div>
        </div>
      </section>

      <div className={`grid xl:grid-cols-12  max-md:px-[35px] custom-container
       ${locale === "es"
          ? "4xl:mt-[-85px] mt-[1rem] 2xl:mt-[-100px] xl:mt-[-90px]"
          : locale === "fr"
            ? "4xl:mt-[-85px] mt-[1rem] 2xl:mt-[-100px] xl:mt-[-100px]"
            : "4xl:mt-[-85px] mt-[1rem] sm:mt-10 2xl:mt-[-100px] xl:mt-[-100px]"
        }`}
      >
        <div className="xl:col-span-2">
          <div className="4xl:mt-[44px]  xl:mt-[75px] 2xl:mt-[5rem]">
            <LearnMore bgcolor={"#134874"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} locale={locale} />
          </div>
        </div>
        <div className="xl:col-span-1"></div>
        <div className="xl:col-span-9 mt-10 4xl:mt-0">
          <div className="bg-[#163055] p-8">
            <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal">
              {t('ServiceDescTwo')}
            </p>
          </div>
        </div>
      </div>
      {/* qTest section */}
      <section className="relative mt-16 xl:custom-container px-0 sm:px-0 md:px-6 4xl:px-[142px]">
        <div className="xl:block hidden">
          <Image
            src="/images/toska/desktop/tech-team-collaboration-modern-office.webp"
            alt={t('qtestAlt')}
            priority
            sizes="100vw"
            className="w-full h-full"
            width={0}
            height={0}
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/toska/mobile/tech-team-collaboration-modern-office-mobile.webp"
            alt={t('qtestAlt')}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[400px] object-cover"
            priority
          />
        </div>
      </section>
      <section className="4xl:-mt-[12rem] xl:custom-container px-0 sm:px-0 md:px-6 xl:-mt-[9rem] absolute 4xl:!pl-[205px] xl:pl-[80px] xl:pr-[150px] 4xl:pr-[280px]">
        <div className="bg-[#006FBE] xl:p-16 4xl:p-16 p-10 grid xl:grid-cols-12 text-white 4xl:pb-32 sm:pb-32 pb-36 max-[375px]:pb-40">
          <div className="xl:col-span-7">
            <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight 4xl:pr-16 2xl:pr-10">
              {t('testTitle')}
            </h2>
            <h3 className="text-[22px] md:text-[26px] xl:text-[30px] 4xl:text-[36px] font-semibold leading-tight mt-8 2xl:pr-48">
              {t('testSubTitle')}
            </h3>
            <h3 className="mt-5 font-semibold 4xl:text-[32px] md:text-[24px] xl:text-[22px] text-[20px] leading-tight 2xl:pr-48 ">
              {t('testSubTitleOne')}
            </h3>
          </div>
          <div className="xl:col-span-5">
            <p className="4xl:text-[22px] text-[16px]  mt-10 xl:mt-0 4xl:mt-0">
              {t('testDesc')}
            </p>
            <UnorderedList
              arrName={qTestData}
              ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-2  marker:font-bold marker:text-2xl pl-5 font-light 4xl:mt-8 mt-5 xl:pr-0"
              liClassName=" 4xl:text-[20px] text-[16px]"
            />
          </div>
        </div>
      </section>
      <section className="custom-container xl:px-0 4xl:pl-[280px] 4xl:pr-[398px] xl:pl-[200px] xl:pr-[220px] xl:mt-0 4xl:mt-0">
        <div className={`bg-[#073259] p-8 relative
         ${locale === "es"
            ? "4xl:mt-[440px] xl:mt-[330px] 2xl:mt-[300px] md:mt-[38rem] lg:mt-[32rem]  sm:mt-[37rem] max-[350px]:mt-[900px] max-[390px]:mt-[850px] max-[375px]:mt-[870px] max-sm:mt-[780px]"

            : locale === "fr"
              ? "4xl:mt-[420px] xl:mt-[330px] 2xl:mt-[280px] md:mt-[38rem] lg:mt-[32rem]  sm:mt-[37rem] max-[350px]:mt-[900px] max-[390px]:mt-[835px] max-[375px]:mt-[850px] max-sm:mt-[755px]"
              : "4xl:mt-[420px] xl:mt-[310px] 2xl:mt-[290px] md:mt-[32rem] lg:mt-[31rem]  sm:mt-[32rem] max-[350px]:mt-[900px] max-[390px]:mt-[780px] max-[375px]:mt-[810px] max-sm:mt-[710px]"
          }`}
        >
          <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal">
            {t('testDescTwo')}
          </p>
        </div>
      </section>
      {/* live compare section */}
      <section className="xl:mt-32 mt-24 xl:custom-container lg:px-0 pl-0">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-5  max-md:px-[35px]">
            <Image
              className={`w-full  4xl:mt-16 4xl:mb-16 xl:mt-10  relative
               ${locale === "es"
                  ? "4xl:h-[840px] xl:h-[620px] 2xl:h-[695px]"
                  : locale === "fr"
                    ? "4xl:h-[865px] xl:h-[620px] 2xl:h-[645px]"
                    : "4xl:h-[760px] 2xl:h-[565px] xl:h-[590px]"
                }`}
              src="/images/toska/desktop/data-analyst-digital-transformation.webp"
              alt={t('liveAlt')}
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
          <div className="xl:col-span-7 bg-[#D0EBFF] text-black 4xl:ml-[-32rem] max-md:px-[65px]  xl:ml-[-28rem] pb-[15rem] 2xl:pb-[12rem] xl:pb-[9rem] 4xl:pb-[11rem] px-[35px] 4xl:pl-[36rem] xl:pl-[31rem] 4xl:pr-[10rem] xl:pr-[7rem] xl:mt-0 mt-[-200px] ">
            <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight 4xl:pr-16 xl:pr-10 pt-[15rem] 4xl:pt-16 xl:pt-[4rem] 2xl:text-[40px]">
              {t('liveTitle')}
            </h2>
            <h3 className="text-[22px] md:text-[26px] xl:text-[30px] 4xl:text-[36px] font-semibold leading-tight  xl:mt-3  xl:pr-0 mt-5 pr-0">
              {t('liveSubTitle')}
            </h3>
            <h3 className="text-[#006FBE] mt-5 font-semibold 4xl:text-[32px] xl:text-[22px] text-[20px] leading-tight 4xl:pr-[4rem] pr-0">
              {t('liveSubTitleOne')}
            </h3>
            <p className="4xl:text-[22px] md:text-[18px] text-[16px] font-normal mt-5 pr-0">
              {t('liveDesc')}
            </p>
            <UnorderedList
              arrName={liveCompareData}
              ulClassName="list-disc leading-tight 4xl:space-y-5 2xl:space-y-4 marker:font-bold marker:text-2xl pl-5 font-normal 4xl:pr-32 4xl:mt-5 mt-5 pr-0 xl:pr-0"
              liClassName="4xl:text-[20px] text-[16px]"
            />
            <div className="xl:hidden block mt-5">
              <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} locale={locale} />
            </div>
          </div>
        </div>
      </section>
      <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-[-73px] 4xl:mt-[-78px]">
        <div className={`xl:col-span-8 col-span-12 mx-[35px] z-[9] xl:mx-0 relative bg-[#163055] p-8
         ${locale === "es"
            ? "4xl:mt-[-80px] xl:mt-[-40px] mt-[-200px] 4xl:ml-[250px] xl:ml-[66px] md:mt-[-150px]"
            : locale === "fr"
              ? "4xl:mt-[-54px] xl:mt-[-40px] mt-[-200px] 4xl:ml-[250px] xl:ml-[66px] md:mt-[-150px]"
              : "4xl:mt-[-82px] xl:mt-[-40px] 2xl:mt-[-45px] mt-[-200px] 4xl:ml-[258px] xl:ml-[66px] md:mt-[-150px]"
          }`}
        >
          <p className="4xl:text-[26px] 2xl:text-[20px] xl:text-[18px] text-[20px] text-white font-normal leading-tight">
            {t('livePara')}
          </p>
        </div>
        <div className="xl:col-span-1"></div>
        <div className="xl:col-span-2 xl:block hidden">
          <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} locale={locale} />
        </div>
      </div>
      {/* neo load section */}
      <section className="mt-10 xl:custom-container 4xl:px-[142px] max-lg:px-0">
        <div className="grid xl:grid-cols-12">
          <div className="xl:col-span-5 col-span-12 mt-10 xl:mt-[10rem] 4xl:ml-[-200px] xl:ml-[-105px] 2xl:ml-[-155px] order-1 xl:order-2">
            <div className="xl:block hidden">
              <Image
                className={`w-full  relative
                 ${locale === "es"
                    ? "4xl:h-[1028px] 4xl:mt-[110px] 4xl:mb-16 xl:mt-10 xl:-mb-16"
                    : locale === "fr"
                      ? "4xl:h-[980px] 4xl:mt-[110px] 4xl:mb-16 xl:mt-10 xl:-mb-16"
                      : "4xl:mt-[110px] 4xl:mb-16 xl:mt-10 xl:-mb-16"
                  }`}
                src="/images/toska/desktop/business-data-analytics-meeting.webp"
                alt={t('businessAlt')}
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                className="w-full 4xl:mt-[6rem] 4xl:mb-16 xl:mt-10 xl:-mb-16 relative px-[35px] xl:px-0 4xl:px-0"
                src="/images/toska/mobile/business-data-analytics-meeting-mobile.webp"
                alt={t('businessAlt')}
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
          </div>
          <div className={`xl:col-span-7 col-span-12 bg-[#427C8A] text-white px-[35px] md:pl-10 xl:pl-[5rem]  4xl:pl-[8rem] order-2 xl:order-1 mt-[-200px] xl:mt-0 4xl:mt-0  xl:pb-0 4xl:pb-0 4xl:pr-0 2xl:pr-40
           ${locale === "es"
              ? "4xl:h-[1210px]"
              : locale === "fr"
                ? "4xl:h-[1160px]"
                : "4xl:h-[1090px]"
            }`}
          >
            <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight 4xl:pr-0  pt-[15rem] xl:pt-16 4xl:pt-16">
              {t('neoTitle')}
            </h2>
            <div className="4xl:pr-[14rem] xl:pr-[8rem]">
              <h3 className="text-[22px] md:text-[26px] xl:text-[30px] 4xl:text-[40px] font-semibold mt-5 leading-tight">
                {t('neoSubTitle')}
              </h3>
              <h3 className="mt-5 font-semibold 4xl:text-[32px] xl:text-[22px] text-[20px] leading-tight">
                {t('neoSubTitleOne')}
              </h3>
              <p className="4xl:text-[22px] md:text-[18px] text-[16px] mt-5 font-light">
                {t('neoDesc')}
              </p>
              <UnorderedList
                arrName={neoLoadData}
                ulClassName="list-disc leading-tight 4xl:space-y-5 2xl:space-y-5 xl:space-y-1 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 2xl:mt-10 mt-5 pr-1 xl:pr-0 "
                liClassName=" 4xl:text-[20px]  text-[16px]"
              />
              <div className="xl:hidden block mt-10">
                <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} locale={locale} />
              </div>
              <div className="xl:hidden block bg-[#073259] p-8  mt-[40px]">
                <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal">
                  {t('neoPara')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-12 xl:mt-[-10px] 4xl:mt-[-186px]  absolute">
        <section className="custom-container bottom-0 xl:col-span-7 col-span-12  xl:px-0 4xl:pl-[280px]  xl:pl-[82px]  mt-[-11rem] md:mt-[-7rem] xl:mt-[20px] 4xl:mt-0">
          <div className={`bg-[#073259] xl:block hidden p-8 
           ${locale === "es"
              ? "xl:mt-[-70px]  2xl:mt-[-50px] 4xl:mt-[-32px]"
              : locale === "fr"
                ? "xl:mt-[-70px]  2xl:mt-[-50px] 4xl:mt-[-32px]"
                : "xl:mt-[-50px]  2xl:mt-[-50px] 4xl:mt-[-32px]"
            }`}

          >
            <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal">
              {t('neoPara')}
            </p>
          </div>
        </section>
        <div className="xl:col-span-1"></div>
        <div className="xl:col-span-2 4xl:mt-[42px] xl:block hidden">
          <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} locale={locale} />
        </div>
      </div>
      {/* rialtes certified section */}
      <section className="mt-20 4xl:mt-20 2xl:mt-40 xl:mt-40 custom-container 4xl:pl-[280px] 4xl:pr-[120px] xl:pl-[142px]">
        <div className="grid xl:grid-cols-12 4xl:gap-16 grid-cols-1">
          <div className="xl:col-span-5 col-span-12">
            <div className="xl:block hidden h-full">
              <Image
                className="w-full h-full object-cover"
                src="/images/toska/desktop/collaborative-coding-session.webp"
                alt={t('codeAlt')}
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                className="w-full h-[350px] md:h-full "
                src="/images/toska/mobile/collaborative-coding-session-mobile.webp.webp"
                alt={t('codeAlt')}
                style={{ objectFit: "cover", objectPosition: "5% 20%" }}
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
          </div>
          <div className="xl:col-span-7 col-span-12  sm:px-0 md:px-[35px]">
            <h2 className="text-[26px] 4xl:text-[60px]  xl:text-[40px] 2xl:text-[40px] leading-tight 4xl:pr-64 xl:pr-48 pt-10 xl:pt-0 4xl:pt-0">
              {t('toscaTitle')}
            </h2>
            <h3 className="text-[22px] md:text-[26px] xl:text-[30px] 4xl:text-[40px] font-semibold mt-5">
              {t('toscaSubTitle')}
            </h3>
            <p className="4xl:text-[22px] md:text-[18px] text-[16px] mt-5">
              {t('toscaDesc')}
            </p>
            <section className="mx-auto py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                {expertsList.map((item, index) => (
                  <div
                    key={index}
                    className="pl-4 border-l-2 border-[#006FBE]" // left border
                  >
                    <p className="text-black font-semibold 4xl:text-[24px] text-[18px] leading-tight">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            <div className=" bg-[#073259] p-8">
              <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal">
                {t('toscaPara')}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* seamless section */}
      <section className="relative mt-16 4xl:mt-32 xl:custom-container xl:pl-0 4xl:pr-[280px] xl:pr-[80px] ">
        {/* Desktop Image */}
        <div className="xl:block hidden">
          <Image
            src="/images/toska/desktop/enterprise-integration-testing-banner.webp"
            alt={t('desktopAlt')}
            priority
            sizes="100vw"
            className="w-full h-full xl:h-[700px] 3xl:h-[650px] 4xl:h-[900px]"
            width={0}
            height={0}
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/toska/mobile/enterprise-integration-testing-banner-mobile.webp"
            alt={t('desktopAlt')}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-cover md:h-[690px] sm:h-[690px] h-[800px] max-[455px]:h-[900px] max-[395px]:h-[1025px]"
            priority
          />
        </div>
        <div className="absolute top-0 max-md:px-[35px] custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="xl:col-span-9 col-span-12">
              <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight pt-20 pr-10 xl:pr-0 4xl:pr-0">
                {t('sapTitle')}
              </h2>
            </div>
          </div>
          <h3 className="text-[22px] md:text-[26px] xl:text-[30px] 4xl:text-[40px] font-semibold mt-5 sm:pr-10 xs:pr-10">
            {t('sapSubTitle')}
          </h3>
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="xl:col-span-6 col-span-12">
              <p className="4xl:text-[22px] md:text-[18px] text-[16px] mt-5 sm:pr-10">
                {t('sapDesc')}
              </p>
              <UnorderedList
                arrName={seamlessData}
                ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-1 space-y-2 font-medium  marker:font-bold marker:text-2xl pl-5 4xl:mt-8 mt-5 pr-12 xl:pr-0"
                liClassName=" 4xl:text-[20px] text-[16px]"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="custom-container">
        <div className="relative">
          <div className="xl:grid xl:grid-cols-12">
            <div className="order-1 xl:order-3 col-span-2 max-[405px]:mt-[-185px] max-[520px]:mt-[-172px] mt-[-156px] md:mt-[-146px] xl:mt-[-74px] 3xl:mt-[-74px] 4xl:mt-[-80px]">
              <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} locale={locale} />
            </div>
            <div className="order-2 xl:order-2 xl:col-span-1"></div>
            <div className="order-3 xl:order-1 xl:col-span-7 col-span-12 xl:mr-0 4xl:mr-0 mt-[26px]  xl:mt-[-70px] 3xl:mt-[-50px] 4xl:mt-[-80px]">
              <div className="bg-[#073259] p-8">
                <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal">
                  {t('sapPara')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* interesting facts section */}
      <div className="custom-container 4xl:pl-[280px] xl:mt-[6rem] 4xl:pr-0 pr-0 mt-[8rem] md:mt-16 max-md:pr-0">
        <section className="bg-[#EAEAEA] px-4 md:px-8 lg:px-16 py-12 ">
          <div className="max-w-7xl  grid grid-cols-1 xl:grid-cols-12 gap-y-10">
            <div className="xl:col-span-8 col-span-12">
              <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight pr-10 xl:pr-0 4xl:pr-0">
                {t('factTitle')}
              </h2>
            </div>
            <div className="xl::col-span-12 col-span-12  pl-4">
              <p className="4xl:text-[30px] text-[21px] xl:text-[20px] font-bold leading-tight">
                <span className="text-[#006FBE] font-bold 4xl:text-[65px] xl:text-[40px] text-[20px]">
                  85%
                </span>
                {t('enterprisesDesc')}
                <br />
                {t('enterprisesPara')}
              </p>
            </div>
            <span className="border-b-2 border-gray-400 w-[30%] xl:w-full 4xl:w-full"></span>
            <div className="xl:col-span-12 col-span-12 pl-4">
              <p className="4xl:text-[30px] text-[21px] xl:text-[20px] font-bold leading-tight">
                {t('companiesDesc')} <span className="text-[#006FBE] font-bold 4xl:text-[65px] xl:text-[40px] text-[20px]"> 90% </span>{t('companiesPara')}

                <br />
                {t('companiesParaOne')}

              </p>
            </div>
            <span className="border-b-2 border-gray-400 w-[30%] xl:w-full 4xl:w-full"></span>
            <div className="xl:col-span-12 col-span-12  pl-4">
              <p className="4xl:text-[30px] text-[21px] xl:text-[20px] font-bold leading-tight">
                {t('aiDesc')}

                <br />
                <span className="text-[#006FBE] font-bold 4xl:text-[65px] xl:text-[40px] text-[20px]">
                  40%
                </span>
                {t('aiPara')}
              </p>
            </div>
            <span className="border-b-2 border-gray-400 w-[30%] xl:w-full 4xl:w-full"></span>
            <div className="xl:col-span-12 col-span-12  pl-4">
              <p className="4xl:text-[30px] text-[21px] xl:text-[20px] font-bold leading-tight pr-10 xl:pr-0 4xl:pr-0">
                {t('platformDesc')}
                <br />
                <span className="text-[#006FBE] font-bold 4xl:text-[65px] xl:text-[40px] text-[20px]">
                  80%
                </span>
                {t('platformPara')}
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="mt-20 custom-container text-black pb-20">
        <ContactForm
          title={t('contactTitle')}
          subtitle={t('contactSubTitle')}
          subtitle1={t('ContactSubTitleOne')}
          className={
            "4xl:max-w-[59rem] xl:max-w-[44rem] leading-tight  font-light text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] xl:pr-0"
          }
        />
      </div>
    </div>
  );
}
