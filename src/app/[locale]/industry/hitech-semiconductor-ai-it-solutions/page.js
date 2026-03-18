"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import Seo from "@/app/[locale]/components/Seo";
import Link from "next/link";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../messages/en/industry.json";
import esContent from "../../../../../messages/es/industry.json";
import frContent from '../../../../../messages/fr/industry.json';
import { changeLocalization } from "../../components/changeLocalization";
import { useActiveLocale } from "../../components/activeLanguages";
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export default function Page() {
  const t = useTranslations("semiconductor");
  const locale = useLocale();
  const homepageContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { frActive, esActive, enActive } = useActiveLocale();
  const {
    thoughtData,
    endToEndData,
    semiconductorFoundryData,
    strategicData,
    commonSectionData,
    keyAreasData,
    enabledData,
    summaryData,
    keyPillarsDesc,
    endSemiconductorData,
    keyReasonsData,
    rialtesData,
    schemaData
  } = homepageContent.semiconductor;

  return (
    <section className="min-h-screen bg-white">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        canonical={`https://www.rialtes.com/${locale}/industry/hitech-semiconductor-ai-it-solutions`}
      />
      <Script
        id="schema-hitech"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* breadcrumbs schema */}
      <BreadcrumbSchema />
      {/* herosection */}
      <section className="relative group overflow-hidden h-[350px] md:h-[500px] 4xl:h-[650px]">
        <div className="hidden md:block">
          <Image
            src="/images/industry/semi-conductor/semiconductor-wafer-microchips-technology.webp"
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
            src="/images/industry/semi-conductor/Mobile/pharmaceutical-manufacturing-production-biotechnology.webp"
            alt={t('bannerAlt')}
            fill
            style={{ objectFit: "cover", objectPosition: "5% 20%" }}
            priority
          />
        </div>
        <div className="relative h-full custom-container flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
            <div className="col-span-12">
              <h1 className="text-[#FFFFFF] text-[18px] md:text-[24px] font-bold lg:w-full">
                {t("headerTitle")}
              </h1>
              <h2 className="text-[#FFFFFF] text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px]  sm:w-full">
                {t("subTitleOne")} <div className="sm:block hidden" />{" "}
                {t("subTitleTwo")}
                <div className="sm:block hidden" /> {t("subTitleThree")}
                <div className="sm:block hidden" /> {t("subTitleFour")}
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 xl:col-span-5"></div>
          </div>
        </div>
      </section>
      {/* breadcrumb */}
      <section className="custom-container">
        <BreadCrumbs />
      </section>
      {/* page description section */}
      <section className="custom-container xl:mt-[131px] mt-[62px]">
        <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[56px] lg:w-[80%] xl:w-[85%]">
          {t("powerTitle")}
        </h2>
        <p className="4xl:text-[22px]  xl:text-[18px] text-[16px] leading-tight lg:w-[80%] 4xl:w-[70%] w-[90%] font-normal mt-8">
          {t("powerDesc")}
          <br />
          <br />
          {t("powerDescOne")}
        </p>
      </section>
      {/* section thought leadership */}
      <section className="custom-container max-lg:px-0 lg:pl-0 lg:mt-[110px] xl:mt-[141px] mt-[33px]">
        <div className="grid lg:grid-cols-12 grid-cols-1">
          <div className="lg:col-span-7 xl:col-span-6 4xl:col-span-7 col-span-12 my-auto">
            <div className="hidden md:block">
              <Image
                src="/images/industry/semi-conductor/quantum-computing-processor-data-visualization.webp"
                alt={t('dataAlt')}
                height={0}
                width={0}
                priority
                className="lg:h-[600px] xl:h-[800px] w-full object-cover"
              />
            </div>

            {/* Mobile Image */}
            <div className="block md:hidden">
              <Image
                src="/images/industry/semi-conductor/Mobile/quantum-computing-processor-data-visualization-mobile.webp"
                alt={t('dataAlt')}
                height={0}
                width={0}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5 xl:col-span-6 4xl:col-span-5 col-span-12 bg-[#006FBE] text-[#ffffff] xl:pt-[73px] xl:pb-[84px] xl:px-[50px] pt-[29px] pb-[67px] px-[26px] max-lg:mx-[36px] max-lg:mt-[-110px]">
            <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[56px]">
              {t("thoughtTitle")}
            </h2>
            <h3 className="xl:text-[30px] 4xl:text-[36px] text-[22px] font-semibold xl:mt-[27px] mt-[14px] w-[90%] lg:w-full">
              {t("thoughtSubTitle")}
            </h3>
            <p className="xl:text-[18px] 4xl:text-[20px] text-[16px] leading-tight xl:mt-[27px] mt-[14px] font-normal w-[90%] lg:w-full">
              {t("thoughtDesc")}
            </p>
            <UnorderedList
              arrName={thoughtData}
              ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[61px] mt-[24px] pl-[20px] 4xl:w-[96%] w-[90%] lg:w-full"
              liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal"
            />
            <p className="xl:text-[18px] 4xl:text-[20px] text-[16px] leading-tight xl:mt-[56px] mt-[26px] font-normal w-[90%] lg:w-full">
              {t("thoughtDescOne")}
            </p>
            <div className="absolute mt-[20px] xl:mt-[30px]">
              <LearnMore btnName={t('learnMore')} locale={locale} />
            </div>
          </div>
        </div>
      </section>
      {/* end to end section */}
      <section className="custom-container relative 4xl:mt-[80px] xl:mt-[40px] mt-[54px] xl:pt-[119px] pt-[55px] lg:pb-[65px] pb-0
             bg-no-repeat bg-cover bg-[20%_30%] lg:bg-[65%_20%]
             bg-[url('/images/industry/semi-conductor/Mobile/end-to-end-mob.webp')] lg:bg-[url('/images/industry/semi-conductor/end-to-end-desk.webp')]">
        <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] w-[80%] lg:w-full">
          {t("endTitle")}
        </h2>
        <p className="xl:text-[30px] 4xl:text-[36px] text-[22px] font-semibold xl:mt-[27px] mt-[17px]">
          {t("endDesc")}
        </p>
        <div className="relative grid lg:grid-cols-2 grid-cols-1 md:w-[80%] lg:w-full xl:w-[98%]">
          {endToEndData.map((data, ind) => {
            return (
              <div
                key={ind}
                className={` ${(frActive || esActive) ? "lg:w-[88%] " : "lg:w-[82%] "} ${ind == 2 && "lg:mt-[-100px]"}`}>
                <h3
                  className={`
    text-[18px] xl:text-[24px] 4xl:text-[30px] 
    leading-tight font-semibold 
    mt-[40px] lg:mt-[80px]
    w-[90%] lg:w-full 
    text-[#0A6BB8]
    ${ind === 0 ? "mt-0 lg:mt-0" : ""}
    ${ind === 1 ? "lg:mt-0" : ""}
    ${ind === 4 ? "xl:mt-[40px] lg:mt-0 2xl:mt-10 4xl:mt-[80px]" : ""}
    ${((frActive || esActive) && (ind == 2 || ind == 4)) ? "2xl:pt-[60px] 3xl:pt-0 4xl:pt-[40px]" : ""}
  `}
                >
                  {data.title}
                </h3>

                {data.desc && (
                  <p className="xl:text-[20px] 4xl:text-[24px] text-[16px] leading-tight font-normal mt-[18px] xl:mt-[40px] w-[90%] lg:w-full">
                    {data.desc}
                  </p>
                )}
                <UnorderedList
                  arrName={data.dataList}
                  ulClassName="lg:pb-[60px] pb-[40px] xl:space-y-[29px] space-y-[19px] list-disc xl:mt-[40px] mt-[24px] pl-[20px] 4xl:w-[96%] w-[90%] lg:w-full"
                  liClassName="text-[16px] xl:text-[20px] 4xl:text-[24px] leading-tight font-normal"
                />
                <div className={`h-[1px] w-full bg-[#707070] ${ind == 3 && "lg:bg-transparent"} ${ind == 4 && "bg-transparent"}`}></div>
                {ind === 3 && (
                  <div className="hidden lg:block absolute lg:bottom-[60px]">
                    <LearnMore btnName={t('learnMore')} locale={locale} />
                  </div>
                )}
                {ind === 4 && (
                  <div className="block lg:hidden max-lg:mt-[25px]">
                    <LearnMore btnName={t('learnMore')} locale={locale} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      {/* semiconductor foundry section */}
      <section className="custom-container max-md:mt-[75px]">
        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[63px]">
          <div className="md:col-span-6 col-span-12 lg:pt-[178px] md:pt-[80px] pt-[33px] md:order-1 order-2">
            <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[52px]">
              {t("foundryTitle")}
            </h2>
            <p className="xl:text-[18px] 4xl:text-[20px] text-[16px] leading-tight xl:mt-[35px] mt-[22px] font-normal 4xl:w-[93%] w-[90%] md:w-full">
              {t("foundryDesc")}
            </p>
            <UnorderedList
              arrName={semiconductorFoundryData}
              ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[37px] mt-[26px] pl-[20px] 4xl:w-[80%] xl:w-[90%] w-[90%] md:w-full"
              liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal"
            />
            <div className="xl:mt-[87px] mt-[24px]">
              <LearnMore btnName={t('learnMore')} locale={locale} />
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 md:order-2 order-1">
            <div className="hidden md:block h-full w-full">
              <Image
                src="/images/industry/semi-conductor/semiconductor-technician-silicon-wafer-cleanroom.webp"
                alt={t('semiALt')}
                height={0}
                width={0}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            {/* Mobile Image */}
            <div className="block md:hidden">
              <Image
                src="/images/industry/semi-conductor/Mobile/semiconductor-technician-silicon-wafer-cleanroom-mobile.webp"
                alt={t('semiALt')}
                height={0}
                width={0}
                priority
                className="h-full w-full sm:h-[600px] md:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* strategic challenges section */}
      <section className="xl:mt-[117px] mt-[64px] custom-container relative xl:pt-[112px] xl:pb-[151px] pt-[79px] pb-[107px] text-[#ffffff] bg-no-repeat bg-cover
             bg-[url('/images/industry/semi-conductor/Mobile/strategic-mob.webp')] lg:bg-[url('/images/industry/semi-conductor/strategic-desk.webp')]">
        <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] w-[90%] md:w-[70%] xl:w-[80%]">
          {t("topTitle")}
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:mt-[102px] mt-[83px] lg:gap-[20px] items-start lg:gap-y-[100px] 3xl:gap-y-[120px] gap-y-[75px] sm:w-[80%] 4xl:w-[82%]">
          {strategicData.map((data, ind) => {
            return (
              <div
                className={`pt-[51px] xl:px-[46px] pb-[59px] px-[36px] border border-[#FFFFFF] ${((frActive || esActive) && ind == 1) ? "lg:h-[440px] xl:h-[530px] 2xl:h-[520px] 4xl:h-[680px] " : ""} ${(enActive && ind == 2) &&
                  "lg:mt-[-60px] lg:h-[440px] xl:h-[530px] 2xl:h-[520px] 4xl:h-[620px]"}  ${((frActive || esActive) && ind == 2) ? "lg:mt-[-60px] xl:mt-[-70px]" : ""}`} key={ind}>
                <div className="absolute lg:mt-[-80px] xl:mt-[-90px] 4xl:mt-[-100px] mt-[-80px]">
                  <p className="xl:text-[60px] 4xl:text-[70px] text-[50px] leading-tight px-6 py-0 text-[#FFD800] inline bg-[#073259] mix-blend-hard-light font-bold">
                    {data.id}
                  </p>
                </div>
                <h3 className="text-[20px] leading-tight xl:text-[28px] 4xl:text-[40px] font-bold lg:mt-[30px] xl:mt-[10px] 3xl:mt-[40px]">
                  {data.title}
                </h3>
                <UnorderedList
                  arrName={data.dataList}
                  ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[40px] mt-[18px] pl-[20px] w-[90%] lg:w-full 4xl:w-[90%]"
                  liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal"
                />
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-0">
          {/* <LearnMore bgcolor="#0C8AED" bordercolor="#0C8AED" /> */}
          <Link
            href={`/${locale}/contact-us`}
            className={`inline-block 4xl:text-[20px] text-[16px] border  font-semibold text-white py-3 px-8 transition duration-300 mt-6
        bg-[#0C8AED] border-[#0C8AED]  hover:bg-white hover:text-[#134874] hover:border-[#134874]`}
          >
            {t("learnMore")}
          </Link>
        </div>
      </section>
      {/* deep industry section */}
      <section className="custom-container xl:mt-[139px] mt-[62px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[40px] gap-y-[40px]">
          <div>
            <div className="hidden md:block h-full w-full">
              <Image
                src="/images/industry/semi-conductor/glowing-microchip-semiconductor-innovation.webp"
                alt={t('deepAlt')}
                height={0}
                width={0}
                priority
                className="h-full md:h-[600px] lg:h-full w-full object-cover"
              />
            </div>
            {/* Mobile Image */}
            <div className="block md:hidden">
              <Image
                src="/images/industry/semi-conductor/Mobile/glowing-microchip-semiconductor-innovation-mobile.webp"
                alt={t('deepAlt')}
                height={0}
                width={0}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[59px] w-[90%]  xl:w-[90%] 4xl:w-full">
              {t("deepTitle")}
            </h2>
            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[65px] mt-[22px] font-normal w-[90%] lg:w-[94%]">
              {t("deepDesc")} <br />
              <br />
              {t("deepDescOne")}
            </p>
          </div>
        </div>
      </section>
      {/* common section */}
      <section className="custom-container lg:pr-0 lg:mt-[130px] xl:mt-[123px] mt-[62px]">
        {commonSectionData.map((data, ind) => {
          return (
            <div key={ind} className="md:mt-[130px] first:mt-0 mt-[63px] ">
              <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] w-[90%] md:mb-[43px] xl:mb-[53px] md:w-[60%] lg:w-[50%] xl:w-[70%] 4xl:w-[70%]">
                {data.title}
              </h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-12 grid-cols-1 lg:gap-[40px] 4xl:gap-[40px] md:gap-[20px]">
                <div className="xl:col-span-5">
                  {data.subtitle && (
                    <p className="xl:text-[30px] 4xl:text-[40px] text-[20px] leading-tight font-semibold max-md:mt-[13px] w-[90%] lg:w-full">
                      {data.subtitle}
                    </p>
                  )}
                  <p
                    className={`xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal max-md:mt-[23px] w-[90%] lg:w-[94%] 4xl:w-full ${ind == 2 && "xl:mt-[34px] mt-[23px]"
                      }`}
                  >
                    {data.desc}
                  </p>
                  {/* Mobile Image */}
                  <div className="block md:hidden mt-[41px]">
                    <Image
                      src={data.mobImg}
                      alt={data.imageAlt}
                      height={0}
                      width={0}
                      priority
                      className="h-full sm:h-[400px] sm:w-[90%] w-full object-cover"
                    />
                  </div>
                  {ind == 2 ? (
                    <p className="xl:text-[26px] 4xl:text-[32px] text-[18px] leading-tight xl:mt-[59px] mt-[40px] font-semibold">
                      {t("keyTitle")}
                    </p>
                  ) : (
                    <p className="xl:text-[26px] 4xl:text-[32px] text-[18px] leading-tight xl:mt-[59px] mt-[40px] font-semibold">
                      {t("keyTitleOne")}
                    </p>
                  )}
                  <UnorderedList
                    arrName={data.keyData}
                    ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[34px] mt-[26px] pl-[20px] 4xl:w-[96%] xl:w-[90%] w-[90%] md:w-full"
                    liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal"
                  />
                </div>
                <div className="xl:col-span-7 hidden md:block h-full w-full">
                  <Image
                    src={data.deskImg}
                    alt={data.imageAlt}
                    height={0}
                    width={0}
                    priority
                    className="h-full md:h-[600px] lg:h-full w-full max-2xl:object-cover object-[25%_20%]"
                  />
                </div>
              </div>
              <div className="max-md:mt-[31px] mt-[40px]">
                <LearnMore btnName={t('learnMore')} locale={locale} />
              </div>
            </div>
          );
        })}
      </section>
      {/* ai driven section */}
      <section className="xl:mt-[123px] mt-[62px]">
        {/* Mobile Image */}
        <div className="block md:hidden mt-[41px]">
          <Image
            src="/images/industry/semi-conductor/Mobile/robotic-semiconductor-wafer-inspection-manufacturing-mobile.webp"
            alt={t('aiAlt')}
            height={0}
            width={0}
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden md:block h-full w-full">
          <Image
            src="/images/industry/semi-conductor/robotic-semiconductor-wafer-inspection-manufacturing.webp"
            alt={t('aiAlt')}
            height={0}
            width={0}
            priority
            className="h-full h w-full object-cover"
          />
        </div>
        <div className="relative mt-[-240px]  md:mt-[-190px] xl:mt-[-300px]">
          <div className="custom-container">
            <div className="md:w-[60%] xl:w-[86%] 4xl:w-[80%] bg-[#ffffff]/80 xl:pt-[66px] xl:pb-[66px] xl:px-[71px] pt-[27px] pb-[32px] px-[26px]">
              <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] lg:w-[80%] 4xl:w-fulll">
                {t("aiTitle")}
              </h2>
              <p className="xl:text-[30px] 4xl:text-[40px] text-[20px] leading-tight xl:mt-[34px] mt-[18px] font-semibold">
                {t("aiDesc")}
              </p>
              <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[18px] font-normal w-[90%] md:w-full">
                {t("aiDescOne")}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#E8E8E8] md:mt-[-300px] max-[422px]:mt-[-550px] sm:mt-[-300px] mt-[-400px] max-[422px]:pt-[600px] sm:pt-[350px] lg:pt-[300px] lg:pb-[116px] md:pt-[280px] pt-[460px] pb-[67px]">
          <div className="custom-container relative">
            <h3 className="xl:text-[26px] 4xl:text-[32px] text-[18px] leading-tight md:mt-[63px]  xl:mt-[43px]  mt-0 font-semibold w-[90%] md:w-full">
              {t("areaTitle")}
            </h3>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[40px] md:gap-x-[60px] lg:gap-x-0  md:gap-y-[101px] md:mt-[71px] mt-[0px]">
              {keyAreasData.map((data, ind) => {
                return (
                  <div className="lg:w-[80%]" key={ind}>
                    {/* Mobile Image */}
                    <div className="block md:hidden mt-[41px]">
                      <Image
                        src={data.mobImg}
                        alt={data.imageAlt}
                        height={0}
                        width={0}
                        priority
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="hidden md:block">
                      <Image
                        src={data.deskImg}
                        alt={data.imageAlt}
                        height={0}
                        width={0}
                        priority
                        className="h-[370px] h w-full object-cover"
                      />
                    </div>
                    <h4 className="xl:text-[26px] 4xl:text-[40px] text-[18px] leading-tight xl:mt-[45px] mt-[29px] font-semibold text-[#006FBE] w-[90%] md:w-full">
                      {data.title}
                    </h4>
                    <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[24px] font-normal w-[90%] md:w-full">
                      {data.desc}
                    </p>
                    <p className="xl:text-[26px] 4xl:text-[32px] text-[17px] leading-tight xl:mt-[34px] mt-[29px] font-semibold">
                      {t("worldTitle")}
                    </p>
                    <UnorderedList
                      arrName={data.realWorldData}
                      ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[22px] mt-[20px] pl-[20px] w-[90%] md:w-full"
                      liClassName="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal"
                    />
                  </div>
                );
              })}
            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[60px] md:gap-y-[101px] md:mt-[71px] mt-[40px]">
              <div className="md:col-span-5 col-span-12">
                {/* Mobile Image */}
                <div className="block md:hidden mt-[41px]">
                  <Image
                    src="/images/industry/semi-conductor/Mobile/industrial-monitoring-production-data-dashboard-operations-mobile.webp"
                    alt={t('keyAlt')}
                    height={0}
                    width={0}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="hidden md:block">
                  <Image
                    src="/images/industry/semi-conductor/industrial-monitoring-production-data-dashboard-operations.webp"
                    alt={t('keyAlt')}
                    height={0}
                    width={0}
                    priority
                    className="h-[370px] w-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-6 col-span-12">
                <h4 className="xl:text-[26px] 4xl:text-[40px] text-[18px] leading-tight md:mt-0 mt-[29px] font-semibold text-[#006FBE]">
                  {t("enabledTitle")}
                </h4>
                <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[24px] font-normal">
                  {t("enabledDesc")}
                </p>
                <p className="xl:text-[26px] 4xl:text-[32px] text-[17px] leading-tight xl:mt-[34px] mt-[29px] font-semibold">
                  {t("enabledPara")}
                </p>
                <ul className="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[22px] mt-[20px] pl-[20px]">
                  {enabledData.map((data, ind) => (
                    <li
                      className="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal"
                      key={ind}
                    >
                      {data}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute lg:mt-[60px] mt-[20px]">
              <LearnMore btnName={t('learnMore')} locale={locale} />
            </div>
          </div>
        </div>
      </section>
      {/* summary section */}
      <section className="custom-container relative max-md:px-0  lg:pr-0 lg:mt-[169px] mt-[120px]">
        <div
          className="custom-container bg-no-repeat bg-cover xl:pt-[96px] xl:pb-[85px] xl:pl-[81px] pt-[75px] pb-[46px] bg-[20%_30%] lg:bg-[65%_20%] text-[#ffffff] max-md:px-[36px]
             bg-[url('/images/industry/semi-conductor/Mobile/summary-mob.webp')] lg:bg-[url('/images/industry/semi-conductor/summary-desk.webp')]"
        >
          {/* summary title */}
          <span className="absolute top-[-30px] xl:top-[-60px] text-[#ffffff] bg-[#00C6C6] xl:py-[33px] xl:px-[42px] py-[17px] px-[15px] 4xl:text-[40px] xl:text-[30px] text-[23px] leading-tight font-bold">
            {t("valueTitle")}
          </span>
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] gap-y-[58px] w-[90%] md:w-full">
            <div className="lg:col-span-6 xl:col-span-7 col-span-12">
              <h3 className="text-[18px] leading-tight xl:text-[30px] 4xl:text-[38px] font-bold">
                {t("valueSubtitle")}
              </h3>
              <p
                className={`xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[41px] mt-[21px] 4xl:w-[90%]`}
              >
                {t("valueDesc")}
              </p>
              <UnorderedList
                arrName={summaryData}
                ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[41px] mt-[25px] pl-[20px] 4xl:w-[96%]"
                liClassName="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal"
              />
              <p
                className={`xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[44px] mt-[43px]`}
              >
                {t("valueDescOne")}
              </p>
            </div>
            <div className="lg:col-span-6 xl:col-span-5 col-span-12 ">
              <h2 className="text-[18px] leading-tight xl:text-[30px] 4xl:text-[38px] font-bold">
                {t("dealTitle")}
              </h2>
              <p
                className={`xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[35px] mt-[21px]`}
              >
                {t("dealDescOne")}
                <br />
                <br />
                {t("dealDescTwo")}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* key pillars */}
      <section className="custom-container xl:mt-[72px] mt-[52px]">
        <h3 className="text-[20px] leading-tight xl:text-[24px] 4xl:text-[32px] font-semibold w-[80%] xl:w-[50%] 4xl:w-[60%]">
          {t("keyPillarTitle")}
        </h3>
        {keyPillarsDesc.map((data, ind) => {
          return (
            <div
              className="xl:py-[60px] py-[44px] border-b border-[#707070] last:border-0" key={ind}
            >
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[60px] w-[90%] md:w-[80%] lg:w-full">
                <div>
                  <div className="flex flex-row xl:gap-[30px] gap-[30px]">
                    <div>
                      <p className="text-[60px] leading-tight xl:text-[80px] 4xl:text-[100px] font-extrabold text-[#006FBE] mt-[-10px]">
                        {data.id}
                      </p>
                    </div>
                    <div>
                      <h4
                        className={`text-[20px] leading-tight xl:text-[30px] 4xl:text-[40px] font-semibold text-[#006FBE] 4xl:w-[93%] md:w-[80%] lg:w-full ${data.id == 4 && "4xl:w-full w-[101%]"
                          }`}
                      >
                        {data.title}
                      </h4>
                      <p
                        className={`lg:block hidden xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[33px] mt-[22px] 4xl:w-[96%]`}
                      >
                        {data.desc}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`lg:hidden block xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[33px] mt-[22px]`}
                  >
                    {data.desc}
                  </p>
                </div>
                <div>
                  <p
                    className={`xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-semibold max-lg:mt-[22px]`}
                  >
                    {t("benefitsTitle")}
                  </p>
                  <UnorderedList
                    arrName={data.dataList}
                    ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[22px] mt-[18px] pl-[20px] 4xl:w-[82%]"
                    liClassName="text-[16px] xl:text-[18px] 4xl:text-[22px] leading-tight font-normal"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {/* end to end section*/}
      <section className="xl:mt-[109px] mt-[60px]">
        <div className="custom-container 4xl:!pl-[142px] xl:!pl-[52px] lg:!pl-[22px] max-lg:px-0 lg:pr-0">
          {/* Mobile Image */}
          <div className="block lg:hidden mt-[41px]">
            <Image
              src="/images/industry/semi-conductor/Mobile/digital-partnership-technology-integration-collaboration-mobile.webp"
              alt={t('endAlt')}
              height={0}
              width={0}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden lg:block">
            <Image
              src="/images/industry/semi-conductor/digital-partnership-technology-integration-collaboration.webp"
              alt={t('endAlt')}
              height={0}
              width={0}
              priority
              className="h-full w-full object-cover relative"
            />
          </div>
        </div>
        <div className="custom-container">
          <div className="relative">
            <div className="absolute inset-0 bg-[#656565] mix-blend-multiply"></div>
            <div className="4xl:mt-[-320px] lg:mt-[-240px] relative z-20 xl:pt-[75px] lg:pb-[64px] xl:px-[64px] pt-[33px] pb-0 px-[28px] text-[#ffffff]">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-[34px] ">
                <div className="sm:w-[80%] lg:w-full">
                  <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] lg:w-[80%] xl:w-full">
                    {t("ecosystemTitle")}
                  </h2>
                  <p className="text-[20px] leading-tight xl:text-[36px] 4xl:text-[40px] xl:mt-[46px] mt-[22px] font-bold lg:w-[80%] xl:w-full">
                    {t("ecosystemDesc")}
                  </p>
                  <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[37px] mt-[22px] font-normal w-[90%] lg:w-[80%] xl:w-full">
                    {t("ecosystemDescOne")}
                    <br />
                    <br />
                    {t("ecosystemDescTwo")}
                  </p>
                </div>
                <div className="sm:w-[80%] lg:w-full xl:w-[90%] lg:ml-auto">
                  <h3 className="xl:text-[26px] 4xl:text-[32px] text-[17px] leading-tight lg:w-[60%] xl:w-full font-semibold">
                    {t("benifitsTitleTwo")}
                  </h3>
                  <UnorderedList
                    arrName={endSemiconductorData}
                    ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[32px] mt-[22px] pl-[20px] w-[94%] lg:w-full"
                    liClassName="text-[16px] xl:text-[18px] 4xl:text-[22px] leading-tight font-normal"
                  />
                  <div className="xl:mt-[97px] mt-[48] lg:float-end">
                    <LearnMore btnName={t('learnMore')} locale={locale} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* by combining section */}
      <section className="xl:mt-[65px] mt-[64px] custom-container xl:pt-[49px] xl:pb-[48px] pt-[43px] pb-[47px] px-[34px] text-[#ffffff] bg-no-repeat bg-cover bg-[url('/images/industry/semi-conductor/Mobile/combining-mob.webp')] lg:bg-[url('/images/industry/semi-conductor/combining-desk.webp')]">
        <p className="xl:text-[28px] 4xl:text-[34px] text-[22px] leading-tight w-[85%] md:w-[70%] lg:w-[60%] xl:w-[76%] 2xl:w-[72%] font-medium">
          {t("byTitle")}
        </p>
      </section>

      {/* why rialtes section */}
      <section className="custom-container">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[60px]">
          <div>
            {/* Mobile Image */}
            <div className="block md:hidden">
              <Image
                src="/images/industry/semi-conductor/Mobile/semiconductor-engineer-microchip-research-mobile.webp"
                alt={t('whyAlt')}
                height={0}
                width={0}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/industry/semi-conductor/semiconductor-engineer-microchip-research.webp"
                alt={t('whyAlt')}
                height={0}
                width={0}
                priority
                className="h-full w-full object-cover relative"
              />
            </div>
          </div>
          <div className="md:mt-[102px] lg:mt-[142px] mt-[60px] ml-auto md:w-[94%]">
            <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px]">
              {t("sapTitle")}
            </h2>
            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[29px] mt-[22px] font-normal w-[90%] md:w-full">
              {t("sapDesc")}
              <br />
              <br />
              {t("sapDescOne")}
            </p>
          </div>
        </div>
      </section>
      {/* key reasons  */}
      <section className="md:mt-[90px] mt-[50px]">
        <div className="custom-container">
          <h3 className="text-[17px] leading-tight xl:text-[30px] 4xl:text-[40px] font-bold w-[90%] lg:w-[60%] 2xl:w-[60%] 4xl:w-[80%]">
            {t("reasonsTitle")}
          </h3>
        </div>
        {keyReasonsData.map((data, ind) => {
          const isEven = ind % 2 === 0;
          return (
            <div
              key={ind}
              className={`relative ${ind == 0 ? "mt-0" : "max-lg:mt-[80px]"} `}>
              <div
                className="absolute inset-0 w-full h-full"
                style={{ backgroundColor: data.bgColor }}></div>
              <div
                className={`${ind == 0 && "xl:!h-[150px] 4xl:!h-[190px] lg:h-[80px]"
                  } absolute w-full h-[80px] sm:h-[200px] lg:h-[55px] xl:h-[120px] 4xl:h-[140px]`}
                style={{ backgroundColor: "white" }}></div>
              <div
                className={`custom-container relative z-10 ${isEven
                  ? "4xl:!pl-[142px] xl:!pl-[52px] lg:!pl-[42px]"
                  : "4xl:!pr-[142px] xl:!pr-[52px] lg:!pr-[42px]"
                  }`}>
                <div
                  className={`grid lg:grid-cols-12 grid-cols-1 lg:gap-[30px] xl:gap-[40px] ${isEven ? "4xl:gap-[60px]" : "4xl:gap-[20px]"
                    } max-[400px]:gap-y-[20px] gap-y-[40px] mt-[29px] lg:mt-[97px]`}>
                  <div className={`lg:col-span-4 4xl:col-span-5 col-span-12 ${isEven ? "" : "lg:order-2 order-1"}`}>
                    {/* Mobile Image */}
                    <div className="block md:hidden h-full w-full">
                      <Image
                        src={data.mobImg}
                        alt={data.imageAlt}
                        height={0}
                        width={0}
                        priority
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="hidden md:block h-full">
                      <Image
                        src={data.deskImg}
                        alt={data.imageAlt}
                        height={0}
                        width={0}
                        priority
                        className="h-full md:h-[600px] lg:h-full w-full object-cover object-[35%_40%] relative"
                      />
                    </div>
                  </div>
                  <div
                    className={`lg:col-span-8 4xl:col-span-7 col-span-12 sm:w-[80%] lg:w-full ${isEven ? "" : "lg:order-1 order-2"}`} >
                    <h4 className="text-[20px] leading-tight xl:text-[30px] 4xl:text-[40px] text-[#006FBE] font-semibold w-[90%]  xl:w-[80%] 2xl:w-[75%] 4xl:w-full">
                      {data.title}
                    </h4>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[30px] xl:gap-[0px] gap-y-[25px] xl:mt-[99px] mt-[34px] lg:mb-[70px] mb-[100px]">
                      <div className="relative">
                        <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal w-[90%] lg:w-full xl:w-[90%] 4xl:w-[92%]">
                          {data.desc}
                        </p>
                      </div>
                      <div>
                        <UnorderedList
                          arrName={data.dataList}
                          ulClassName="xl:space-y-[27px] space-y-[19px] list-disc pl-[20px] w-[90%] lg:w-full"
                          liClassName="text-[16px] xl:text-[18px] 4xl:text-[22px] leading-tight font-normal"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`absolute bottom-0 ${isEven && "lg:left-1/3 4xl:left-[770px] ml-[20px]"}`}>
                  <LearnMore btnName={t('learnMore')} locale={locale} />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* rialtes section */}
      <section className="custom-container max-md:px-0 xl:mt-[105px] mt-[93px]">
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/images/industry/semi-conductor/Mobile/global-data-analysis-team-mobile.webp"
            alt={t('globalAlt')}
            height={0}
            width={0}
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden md:block">
          <Image
            src="/images/industry/semi-conductor/global-data-analysis-team.webp"
            alt={t('globalAlt')}
            height={0}
            width={0}
            priority
            className="h-full w-full object-cover relative"
          />
        </div>
        <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] xl:mt-[52px] mt-[30px] max-md:px-[36px] w-[90%] md:w-[80%] lg:w-[70%] 4xl:w-[76%] text-[#000000] font-normal">
          {t("partnerTitle")}
        </h2>
        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] 4xl:gap-[60px] xl:mt-[59px] mt-[25px] gap-y-[33px] max-md:px-[36px]">
          <div className="md:col-span-5 col-span-12">
            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal w-[90%] xl:w-[88%]">
              {t("partnerDesc")}
            </p>
          </div>
          <div className="md:col-span-7 col-span-12">
            <p className="xl:text-[30px] 4xl:text-[40px] text-[17px] leading-tight font-bold">
              {t("partnerDescOne")}
            </p>
            <UnorderedList
              arrName={rialtesData}
              ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[37px] mt-[19px] pl-[20px] w-[94%] lg:w-full"
              liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal"
            />
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <div className="custom-container md:mt-[122px] xl:mb-[92px] mt-[54px] mb-[45px]">
        <ContactForm
          title={t("contactTitle")}
          subtitle={t("contactSubTitle")}
          subtitle1={t("contactSubtitleOne")}
          className={" text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px]"} />
      </div>
    </section>
  );
}
