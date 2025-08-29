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

export default function DemandPlusSection() {
const t = useTranslations("tosca");
  const locale = useLocale();
  const homepageContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const {whychooseData,endToEndData,qTestData ,liveCompareData,neoLoadData,expertsList ,seamlessData  } = homepageContent.tosca;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tosca Automation Testing Services",
    alternateName: "Tricentis Tosca Test Automation by Rialtes",
    description:
      "Rialtes offers end-to-end Tosca automation testing services, including implementation, test management, risk-based testing, and integration with SAP, Salesforce, Oracle, and DevOps pipelines.",
    provider: {
      "@type": "Organization",
      name: "Rialtes",
      url: "https://www.rialtes.com",
      logo: "https://www.rialtes.com/images/homepage/logo.svg",
      sameAs: [
        "https://www.linkedin.com/company/rialtes-technologies-llc",
        "https://x.com/Rialtestech",
      ],
    },
    areaServed: [
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "Canada",
      },
      {
        "@type": "Country",
        name: "Singapore",
      },
      {
        "@type": "Continent",
        name: "Europe",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    audience: {
      "@type": "Audience",
      audienceType:
        "Enterprises in Manufacturing, Healthcare, Retail, Semiconductor, Automotive, and Financial Services",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tosca Automation Testing Offerings",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Thing",
            name: "Tosca Implementation & Advisory",
            description:
              "End-to-end Tosca installation, configuration, API/UI/mobile/data testing, DevOps pipeline integration, and AI-powered self-healing automation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Thing",
            name: "qTest Test Management Services",
            description:
              "Centralized test lifecycle management with qTest, including integration with Jira and Tosca, real-time dashboards, and risk-based workflows.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Thing",
            name: "LiveCompare Implementation",
            description:
              "AI-based SAP change impact analysis, integration with Tosca/qTest, and continuous testing optimization for SAP updates.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Thing",
            name: "NeoLoad Performance Testing",
            description:
              "End-to-end performance, scalability, and endurance testing integrated into CI/CD for SAP, Oracle, Salesforce, and custom apps.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Thing",
            name: "Certified Tosca Experts",
            description:
              "Tricentis-certified experts with experience in SAP, Oracle, Salesforce, Agile, DevOps, and enterprise test automation.",
          },
        },
      ],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.rialtes.com/solutions/quality-engineering-assurance/tosca-software-automation-testing",
    },
  };
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Tosca Software Automation Testing Services | Rialtes"
        description="Rialtes offers Tosca Software Automation Testing Services with AI, CI/CD, and risk-based testing for seamless transformation of SAP, Salesforce, and DevOps"
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/solutions/quality-engineering-assurance/tosca-software-automation-testing/"
      />
      <Script
        id="schema-toska"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* hero section */}
      <section className="relative">
        <div className="xl:block hidden">
          <Image
            src="/images/toska/desktop/banner-desktop.webp"
            alt="Tosca Banner desktop"
            width={0}
            height={0}
            priority
            sizes="100vw"
            className="w-full object-cover"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/toska/mobile/banner-mobile.webp"
            alt="Toska Banner Mobile"
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
              <h3 className="text-white xl:text-[24px]  font-bold mb-2">
              {t('headerSubTitle')}</h3>
              <h1 className="text-white leading-tight mt-5   text-[26px] 4xl:text-[60px]   xl:text-[44px]">
                {t('headerTitle')}
              </h1>
            </div>
            <div className="xl:col-span-7 col-span-12"></div>
          </div>
        </div>
      </section>
      {/* page description */}
      <section className="custom-container xl:!pr-0">
        <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-24 mt-10">
          <div className="xl:col-span-9">
            <h2 className="leading-tight text-[26px] 4xl:text-[60px]  xl:text-[42px]">
              {t('empowerTitleOne')} <br className="hidden sm:block" />
              {t('empowerTitleTwo')}
            </h2>
            <p className="xl:mt-12 mt-5 4xl:text-[22px] text-[16px] pr-[36px] 4xl:pr-0">
             {t('empowerDescOne')}
            </p>
            <p className="mt-5 pb-16 4xl:text-[22px] text-[16px] pr-[30px] 4xl:pr-0">
             {t('empowerDescTwo')}
            </p>
          </div>
        </div>
      </section>
      {/* why choose rialtes section */}
      <section className="relative">
        <div className="md:block hidden  2xl:h-full xl:h-[633px]">
          <Image
            src="/images/toska/desktop/why-choose.webp"
            alt="Why Choose Rialtes for Tosca Implementation?"
            priority
            sizes="100vw"
            className="w-full h-full object-cover"
            width={0}
            height={0}
          />
        </div>
        <div className="md:hidden block">
          <Image
            src="/images/toska/mobile/why-choose-mobile.webp"
            alt="Why Choose Rialtes for Tosca Implementation?"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[400px] object-cover"
            priority
          />
        </div>
        <div className="grid xl:grid-cols-12">
          <div className="xl:col-span-6"></div>
          <div className="xl:col-span-6 absolute 4xl:right-[333px] xl:right-[170px] top-[320px]  xl:top-0 ">
            <div className="bg-[#016FBE] xl:bg-opacity-90 text-white p-8 4xl:w-[765px] xl:w-[550px] 4xl:pb-20  2xl:pb-[105px] pb-[220px]  xl:pb-10">
              <h2 className="leading-tight 4xl:mt-10 text-[26px] 4xl:text-[60px]  xl:text-[40px]">
               {t('whyTitle')}
              </h2>
              <h3 className="4xl:text-[42px] text-[22px] font-semibold leading-tight 4xl:mt-8 xl:mt-5 mt-5 md:pr-[36px] 4xl:pr-0">
                {t('whySubTitle')}
              </h3>
              <UnorderedList
                arrName={whychooseData}
                ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 md:pr-12 mt-8 xl:pr-0"
                liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]"
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
      <section className="custom-container xl:!pr-0 max-[425px]:mt-[660px] max-[372px]:mt-[705px] max-[345px]:mt-[770px] mt-[630px] md:mt-[540px] lg:mt-[325px] xl:mt-[144px] 4xl:mt-22 ">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-8 xl:pr-10 4xl:pr-10">
            <h2 className="leading-tight text-[26px] 4xl:text-[60px]  xl:text-[42px] 4xl:block xl:block hidden">
              {t('serviceTitle')}
            </h2>
          </div>
        </div>
        <div className="grid xl:grid-cols-12 grid-cols-1 4xl:gap-10 xl:gap-16 4xl:mt-10 mt-16">
          <div className="xl:col-span-6 order-1 xl:order-2">
            <Image
              src="/images/toska/desktop/end-to-end-desktop.webp"
              alt="End to End desktop right side Image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full object-cover"
              priority
            />
          </div>
          <div className="xl:col-span-6 order-2 xl:order-1">
            <h2 className="leading-tight text-[26px]  4xl:hidden xl:hidden block md:mt-20 mt-10 pr-10 4xl:pr-0">
              {t('serviceTitle')}
            </h2>
            <h3 className="4xl:text-[36px] text-[22px] xl:text-[25px] font-semibold leading-tight mt-5 4xl:mt-0 xl:mt-0 pr-10 4xl:pr-0">
               {t('serviceTitleOne')}
            </h3>
            <h3 className="mt-5 text-[#006FBE] font-semibold 4xl:text-[32px] xl:text-[22px] text-[20px] leading-tight">
              {t('serviceTitleTwo')}
            </h3>
            <p className="mt-5 4xl:text-[22px] text-[16px]">
               {t('ServiceDescOne')}
            </p>
            <UnorderedList
              arrName={endToEndData}
              ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-2 marker:font-bold marker:text-2xl pl-5 font-medium 4xl:mt-8 mt-5 pr- xl:pr-0 md:pb-0"
              liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]"
            />
          </div>
        </div>
      </section>
      <div className="grid xl:grid-cols-12 4xl:mt-[-85px] mt-[1rem] sm:mt-10 xl:mt-[-50px] max-md:px-[35px] custom-container">
        <div className="xl:col-span-2">
          <div className="4xl:mt-[44px]  xl:mt-[75px] 2xl:mt-[5rem]">
            <LearnMore bgcolor={"#134874"} bordercolor={"#006FBE"} />
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
            src="/images/toska/desktop/qtest.webp"
            alt="Qtest Desktop"
            priority
            sizes="100vw"
            className="w-full h-full"
            width={0}
            height={0}
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/toska/mobile/qtest-mobile.webp"
            alt="Qtest Mobile"
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
            <h2 className="text-[26px] 4xl:text-[60px]  xl:text-[42px] leading-tight 4xl:pr-16 xl:pr-10">
               {t('testTitle')}
            </h2>
            <h3 className="4xl:text-[36px] text-[22px] xl:text-[25px] font-semibold leading-tight mt-8 xl:pr-48">
               {t('testSubTitle')}
            </h3>
            <h3 className="mt-5 font-semibold 4xl:text-[32px] xl:text-[22px] text-[20px] leading-tight xl:pr-48 ">
               {t('testSubTitleOne')}
            </h3>
          </div>
          <div className="xl:col-span-5">
            <p className="4xl:text-[22px] text-[18px] mt-10 xl:mt-0 4xl:mt-0">
               {t('testDesc')}
            </p>
            <UnorderedList
              arrName={qTestData}
              ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-2  marker:font-bold marker:text-2xl pl-5 font-light 4xl:mt-8 mt-5 xl:pr-0"
              liClassName=" 4xl:text-[20px] xl:text-[18px] text-[16px]"
            />
          </div>
        </div>
      </section>
      <section className="custom-container xl:px-0 4xl:pl-[280px] 4xl:pr-[398px] xl:pl-[200px] xl:pr-[220px] max-[350px]:mt-[900px] max-[375px]:mt-[820px] max-sm:mt-[770px]  sm:mt-[37rem] md:mt-[32rem] lg:mt-[32rem]  xl:mt-0 4xl:mt-0">
        <div className=" bg-[#073259] p-8 4xl:mt-[27rem] xl:mt-[20rem] relative">
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
              className="w-full 4xl:h-[760px] 4xl:mt-16 4xl:mb-16 xl:mt-16  relative"
              src="/images/toska/desktop/live-desk.webp"
              alt="Live Desktop"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
          <div className="xl:col-span-7 bg-[#D0EBFF] text-black 4xl:ml-[-32rem] max-md:px-[65px]  xl:ml-[-28rem] pb-[15rem] xl:pb-[9rem] 4xl:pb-[11rem] px-[35px] 4xl:pl-[36rem] xl:pl-[31rem] 4xl:pr-[10rem] xl:pr-[7rem] xl:mt-0 mt-[-200px] ">
            <h2 className="text-[26px] 4xl:text-[60px] xl:text-[38px] leading-tight 4xl:pr-16 xl:pr-10 pt-[15rem] 4xl:pt-16 xl:pt-[4rem] 2xl:text-[30px]">
              {t('liveTitle')}
            </h2>
            <h3 className="4xl:text-[36px] text-[22px] xl:text-[25px] font-semibold leading-tight  xl:mt-3  xl:pr-0 mt-5 pr-0">
              {t('liveSubTitle')}
            </h3>
            <h3 className="text-[#006FBE] mt-5 font-semibold 4xl:text-[32px] xl:text-[22px] text-[20px] leading-tight 4xl:pr-[4rem] pr-0">
               {t('liveSubTitleOne')}
            </h3>
            <p className="4xl:text-[22px] xl:text-[14px] text-[16px] font-normal mt-5 pr-0">
              {t('liveDesc')}
            </p>
            <UnorderedList
              arrName={liveCompareData}
              ulClassName="list-disc leading-tight 4xl:space-y-5 marker:font-bold marker:text-2xl pl-5 font-normal 4xl:pr-32 4xl:mt-5 mt-5 pr-0 xl:pr-0"
              liClassName="4xl:text-[20px] xl:text-[14px] text-[16px]"
            />
            <div className="xl:hidden block mt-5">
              <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} />
            </div>
          </div>
        </div>
      </section>
      <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-[-73px] 4xl:mt-[-78px]">
        <div className="xl:col-span-8 col-span-12 mx-[35px] z-[9] xl:mx-0 relative bg-[#163055] p-8 4xl:mt-[-57px] xl:mt-[-40px] mt-[-200px] 4xl:ml-[280px] xl:ml-[78px] md:mt-[-150px]">
          <p className="4xl:text-[26px] xl:text-[16px] text-[20px] text-white font-normal leading-tight">
             {t('livePara')}
          </p>
        </div>
        <div className="xl:col-span-1"></div>
        <div className="xl:col-span-2 xl:block hidden">
          <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} />
        </div>
      </div>
      {/* neo load section */}
      <section className="mt-10 xl:custom-container 4xl:px-[142px] max-lg:px-0">
        <div className="grid xl:grid-cols-12">
          <div className="xl:col-span-5 col-span-12 mt-10 xl:mt-[10rem] 4xl:ml-[-200px] xl:ml-[-105px] 2xl:ml-[-155px] order-1 xl:order-2">
            <div className="xl:block hidden">
              <Image
                className="w-full 4xl:mt-[6rem] 4xl:mb-16 xl:mt-10 xl:-mb-16 relative"
                src="/images/toska/desktop/neoload-desktop.webp"
                alt="Neoload desktop Image"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                className="w-full 4xl:mt-[6rem] 4xl:mb-16 xl:mt-10 xl:-mb-16 relative px-[35px] xl:px-0 4xl:px-0"
                src="/images/toska/mobile/neoload-mobile.webp"
                alt="Neoload desktop Image"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
          </div>
          <div className="xl:col-span-7 col-span-12 bg-[#427C8A] text-white px-[35px] md:pl-10 xl:pl-[5rem] 4xl:h-[1090px] 4xl:pl-[8rem] order-2 xl:order-1 mt-[-200px] xl:mt-0 4xl:mt-0  xl:pb-0 4xl:pb-0 4xl:pr-0 2xl:pr-40">
            <h2 className="text-[26px] 4xl:text-[60px] xl:text-[40px] leading-tight 4xl:pr-0  pt-[15rem] xl:pt-16 4xl:pt-16">
              {t('neoTitle')}
            </h2>
            <div className="4xl:pr-[14rem] xl:pr-[8rem]">
              <h3 className="4xl:text-[40px] xl:text-[30px] text-[20px] font-semibold mt-5 leading-tight">
                {t('neoSubTitle')}
              </h3>
              <h3 className="mt-5 font-semibold 4xl:text-[32px] xl:text-[22px] text-[20px] leading-tight">
                 {t('neoSubTitleOne')}
              </h3>
              <p className="4xl:text-[22px] xl:text-[14px] text-[16px] mt-5 font-light">
                 {t('neoDesc')}
              </p>
              <UnorderedList
                arrName={neoLoadData}
                ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-1 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 2xl:mt-10 mt-5 pr-1 xl:pr-0 "
                liClassName=" 4xl:text-[20px] 2xl:text-[18px] text-[16px]"
              />
              <div className="xl:hidden block mt-10">
                <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
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
          <div className=" bg-[#073259] xl:block hidden p-8  xl:mt-[-50px]  2xl:mt-[-2rem]">
            <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal">
              {t('neoPara')}
            </p>
          </div>
        </section>
        <div className="xl:col-span-1"></div>
        <div className="xl:col-span-2 4xl:mt-[42px] xl:block hidden">
          <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
        </div>
      </div>
      {/* rialtes certified section */}
      <section className="mt-20 4xl:mt-20 2xl:mt-40 xl:mt-40 custom-container 4xl:pl-[280px] 4xl:pr-[120px] xl:pl-[142px]">
        <div className="grid xl:grid-cols-12 4xl:gap-16 grid-cols-1">
          <div className="xl:col-span-5 col-span-12">
            <div className="xl:block hidden">
              <Image
                className="w-full h-full object-cover"
                src="/images/toska/desktop/new-to.webp"
                alt="Certifide Unamtched Image"
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
            <div className="xl:hidden block">
              <Image
                className="w-full h-[350px] md:h-full "
                src="/images/toska/mobile/certifide.webp"
                alt="Certifide Unamtched Image"
                style={{ objectFit: "cover", objectPosition: "5% 20%" }}
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </div>
          </div>
          <div className="xl:col-span-7 col-span-12  sm:px-0 md:px-[35px]">
            <h2 className="text-[26px] 4xl:text-[60px]  xl:text-[40px] 2xl:text-[30px] leading-tight 4xl:pr-64 xl:pr-48 pt-10 xl:pt-0 4xl:pt-0">
               {t('toscaTitle')}
            </h2>
            <h3 className="4xl:text-[40px] xl:text-[25px] text-[20px] font-semibold mt-5">
               {t('toscaSubTitle')}
            </h3>
            <p className="4xl:text-[22px] text-[16px] mt-5">
               {t('toscaDesc')}
            </p>
            <section className="mx-auto py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                {expertsList.map((item, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <div
                      className={`w-[${item.lineWidth}] h-full bg-[#006FBE]`}
                    ></div>
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
            src="/images/toska/desktop/seamless.webp"
            alt="Seamless Desktop"
            priority
            sizes="100vw"
            className="w-full h-full xl:h-[700px] 3xl:h-[650px] 4xl:h-[900px]"
            width={0}
            height={0}
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/toska/mobile/seamless-mobile.webp"
            alt="Seamless Mobile"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-cover md:h-[650px] sm:h-[690px] h-[800px] max-[455px]:h-[900px] max-[395px]:h-[1025px]"
            priority
          />
        </div>
        <div className="absolute top-0 max-md:px-[35px] custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="xl:col-span-9 col-span-12">
              <h2 className="text-[26px] 4xl:text-[60px]  xl:text-[40px] leading-tight pt-20 pr-10 xl:pr-0 4xl:pr-0">
                 {t('sapTitle')}
              </h2>
            </div>
          </div>
          <h3 className="4xl:text-[40px] xl:text-[25px] text-[20px] font-semibold mt-5 sm:pr-10 xs:pr-10">
            {t('sapSubTitle')}
          </h3>
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="xl:col-span-6 col-span-12">
              <p className="4xl:text-[22px] text-[16px] mt-5 sm:pr-10">
                 {t('sapDesc')}
              </p>
              <UnorderedList
                arrName={seamlessData}
                ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-1 space-y-2 font-medium  marker:font-bold marker:text-2xl pl-5 4xl:mt-8 mt-5 pr-12 xl:pr-0"
                liClassName=" 4xl:text-[20px] xl:text-[18px] text-[16px]"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="custom-container">
        <div className="relative">
          <div className="xl:grid xl:grid-cols-12">
            <div className="order-1 xl:order-3 col-span-2 max-[405px]:mt-[-185px] max-[520px]:mt-[-172px] mt-[-156px] md:mt-[-146px] xl:mt-[-74px] 3xl:mt-[-74px] 4xl:mt-[-80px]">
              <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
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
      <div className="custom-container 4xl:pl-[280px] xl:mt-[6rem] 4xl:pr-0 pr-0 mt-[8rem] md:mt-40 max-md:pr-0">
        <section className="bg-[#EAEAEA] px-4 md:px-8 lg:px-16 py-12 ">
          <div className="max-w-7xl  grid grid-cols-1 xl:grid-cols-12 gap-y-10">
            <div className="xl:col-span-8 col-span-12">
              <h2 className="text-[26px] 4xl:text-[60px]  xl:text-[45px] leading-tight pr-10 xl:pr-0 4xl:pr-0">
                 {t('factTitle')}
              </h2>
            </div>
            <div className="xl::col-span-12 col-span-12  pl-4">
              <p className="4xl:text-[30px] text-[24px] xl:text-[20px] font-bold leading-tight">
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
              <p className="4xl:text-[30px] text-[24px] xl:text-[20px] font-bold leading-tight">
                {t('companiesDesc')} <span className="text-[#006FBE] font-bold 4xl:text-[65px] xl:text-[40px] text-[20px]"> 90% </span>{t('companiesPara')}

                <br />
                {t('companiesParaOne')}

              </p>
            </div>
            <span className="border-b-2 border-gray-400 w-[30%] xl:w-full 4xl:w-full"></span>
            <div className="xl:col-span-12 col-span-12  pl-4">
              <p className="4xl:text-[30px] text-[24px] xl:text-[20px] font-bold leading-tight">
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
              <p className="4xl:text-[30px] text-[24px] xl:text-[20px] font-bold leading-tight pr-10 xl:pr-0 4xl:pr-0">
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
            "4xl:max-w-[59rem] xl:max-w-[44rem] leading-tight text-[26px] font-light 4xl:text-[60px]  xl:text-[45px] xl:pr-0"
          }
        />
      </div>
    </div>
  );
}
