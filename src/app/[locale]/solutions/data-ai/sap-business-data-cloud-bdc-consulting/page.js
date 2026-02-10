"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Link from "next/link";
import LearnMore from "@/app/[locale]/components/learnMore";
import ContactForm from "../../../components/contactform";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/solutions.json';
import esContent from '../../../../../../messages/es/solutions.json';
import frContent from '../../../../../../messages/fr/solutions.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'
import BreadcrumbSchema from "@/app/[locale]/components/BreadcrumbSchema";


export default function Page() {
  const t = useTranslations("sapBdc");
  const locale = useLocale();
  const homepageContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { listItems, fabricList, dataItems, schemaData, partnerList, exploreData, migrateData, connectSapData, ourSapData, whyClientsData } = homepageContent.sapBdc;

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords="home, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/solutions/data-ai/sap-business-data-cloud-bdc-consulting`}
      />
      <Script
        id="schema-sap-bdc"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* breadcrumbs schema */}
      <BreadcrumbSchema /> 
      {/* hero section */}
      <section className="relative h-[350px] md:h-[500px] 4xl:h-[650px]">
        <div className="xl:block hidden">
          <Image
            src="/images/sap-bdc-services/network-grid-technology.webp"
            alt={t('headerAlt')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Mobile/Tablet Image */}
        <div className="xl:hidden block">
          <Image
            src="/images/sap-bdc-services/network-grid-technology-mobile.webp"
            alt={t('headerAlt')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="2xl:mr-[33%] xl:mr-[30%]  custom-container max-md:mr-[12%] text-white xl:mt-0">
            <h3 className="text-[18px] md:text-[24px] font-bold  lg:w-auto">
              {t('headerTitle')}
            </h3>
            <h1 className="text-[26px]  xl:text-[40px] xl:w-[67%] 4xl:w-[100%] 4xl:text-[60px] leading-tight mt-[11.5px] md:mt-[28.5px]">
              {t('headerSubtitle')}
            </h1>
          </div>
        </div>
      </section>
      {/* breadcrumb */}
      <section className="custom-container">
        <BreadCrumbs />
      </section>
      {/* page description */}
      <section className="mt-16">
        <section className="custom-container">
          <h2 className="4xl:w-[69%] 2xl:w-[46%] xl:w-[55%] leading-tight pb-6 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
            {t('unifyTitle')}
          </h2>
          <p className=" xl:w-[67%] text-[16px] xl:text-[18px] md:text-[18px] 4xl:text-[20px] leading-tight ">
            {t('unifyDesc')}

          </p>
          <div className="flex xl:gap-32 gap-10 flex-col lg:flex-row lg:mt-10 mt-5 xl:w-[85%]">
            <div className="lg:w-1/2">
              <UnorderedList
                arrName={listItems}
                ulClassName="list-disc text-black pl-4 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-medium space-y-4"
                liClassName=""
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-[16px] xl:text-[18px] md:text-[18px] 4xl:text-[20px] leading-tight">
                {t('listDesc')}
              </p>
            </div>
          </div>
        </section>
        <div className="py-7"></div>

        {/* A Unified, Open Data section */}
        <section className="custom-container lg:pl-0 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 4xl:gap-[60px] items-center gap-y-10">
            <div className="lg:col-span-7 h-full w-full ">
              <Image
                src="/images/sap-bdc-services/business-team-strategy-meeting.webp"
                alt={t('unifiedAlt')}
                className="w-full h-full object-cover hidden lg:block "
                width={0}
                height={0}
                style={{ objectPosition: "75% 20%" }}
              />
              <Image
                src="/images/sap-bdc-services/business-team-strategy-meeting-mobile.webp"
                alt={t('unifiedAlt')}
                width={0}
                height={0}
                className="block lg:hidden w-full h-full object-cover px-0"
              />
            </div>
            <div className="lg:col-span-5 2xl:pl-8 xl:pl-8 sm:pl-6">
              <h2 className=" text-black leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] pb-4 xl:w-[80%] 4xl:w-[84%] 2xl:w-[66%] ">
                {t('dataTitle')}</h2>
              <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] md:text-[18px] leading-tight">
                {t('dataSubtitleOne')}
              </p>
              <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] md:text-[18px]  mt-4 lg:pr-[56px] leading-tight">
                {t('dataSubtitleTwo')}
              </p>
              <div className="xl:mt-[59px] mt-[22px]">
                <LearnMore btnName={t('learnMore')} />
              </div>
            </div>
          </div>
        </section>
        <div className="py-7"></div>
        {/* SAP Data Fabric section */}
        <section className="custom-container md:pr-0 grid xl:grid-cols-12 grid-cols-1  sm:mt-4 max-md:px-0">
          <div className="xl:col-span-6 order-1 xl:order-2 ">
            <div className="hidden lg:block h-full xl:py-20">
              <Image
                className="w-full h-full object-cover"
                src="/images/sap-bdc-services/warehouse-manager-inventory.webp"
                alt={t('sapDataAlt')}
                width={0}
                height={0}
                priority
              />
            </div>
            {/* Mobile image */}
            <div className="block lg:hidden h-100%">
              <Image
                src="/images/sap-bdc-services/warehouse-manager-inventory-mobile.webp"
                alt={t('sapDataAlt')}
                width={0}
                height={0}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="xl:col-span-6 bg-[#006FBE] p-8 xl:p-[75px] px-10 text-white order-2 xl:order-1 relative">
            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
              {t('fabricTitle')}
            </h2>
            <h3 className="4xl:text-[36px] font-semibold text-[22px] mt-3 leading-tight">
              {t('fabricSubtitle')}</h3>
            <p className="mt-4 text-[#FFFFFF] font-light text-[16px] xl:text-[18px] md:text-[18px] 4xl:text-[20px] leading-tight">
              {t('fabricDesc')}
            </p>
            <p className="mt-4 text-[#FFFFFF] font-light text-[16px] xl:text-[18px] md:text-[18px] 4xl:text-[20px] leading-tight">
              {t('fabricPara')}</p>
            <UnorderedList
              arrName={fabricList}
              ulClassName="list-disc space-y-4 p-4 text-[#FFFFFF] font-light pt-4 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight"
              liClassName=""
            />
            <div className="absolute bottom-[-24px]">
              <LearnMore btnName={t('learnMore')} />
            </div>
          </div>
        </section>
        <div className="py-7"></div>
        {/* Why Choose SAP Business Data Cloud? section */}
        <section className="relative">
          <div className="hidden lg:block">
            <Image
              src="/images/sap-bdc-services/digital-network-waves.webp"
              alt={t('sapBdcAlt')}
              fill
              priority
              style={{ objectFit: "cover" }}
              className="z-0"
            />
          </div>
          {/* Mobile Background Image */}
          <div className="block lg:hidden">
            <Image
              src="/images/sap-bdc-services/digital-network-waves-mobile.webp"
              alt={t('sapBdcAlt')}
              fill
              priority
              style={{ objectFit: "cover" }}
              className="z-0"
            />
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row justify-between h-full px-4 text-white custom-container">
            <div className="text-left lg:w-[40%] flex pt-[59px] flex-col">
              <h2 className="leading-tight xl:w-[78%] 2xl:w-[75%] 4xl:w-[100%] 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
                {t('sapTitle')}</h2>
              <div className="lg:mt-[80px]">
                <Link
                  href="/contact-us"
                  className=" bg-[#006FBE] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 px-8 transition duration-300 absolute  max-lg:bottom-[-20px]"
                >
                  {t('learnMore')}
                </Link>
              </div>
            </div>
            <div className="lg:w-[60%] mt-6  lg:relative bottom-0 lg:bottom-[-50px] max-md:pb-10 max-lg:mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-9 z-90">
                {dataItems.map((item, index) => (
                  <div
                    key={index}
                    className=" bg-white border border-[#707070] p-8 xl:py-[3.5rem] text-black"
                  >
                    <p className="text-[#0A6BB8] 2xl:text-[30px] xl:text-[22px] text-[20px] font-bold leading-tight">
                      {item.title}
                    </p>
                    <p className="mt-4 text-[16px] xl:text-[18px] md:text-[18px] 4xl:text-[20px] leading-tight">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="py-10"></div>
        {/* Rialtes: Your Trusted SAP & Databricks Partner */}
        <section className="custom-container grid grid-cols-1 lg:grid-cols-12 gap-8 items-center md:mt-[52px] lg:mt-6">
          <div className="order-1 lg:order-2 2xl:h-[579px] h-full lg:col-span-5">
            <Image
              src="/images/sap-bdc-services/businesswoman-writing-whiteboard.webp"
              alt={t('trustedAlt')}
              width={0}
              height={0}
              className="w-full hidden md:block h-full object-cover"
              style={{ objectPosition: "75% 20%" }}
            />
            <Image
              src="/images/sap-bdc-services/businesswoman-writing-whiteboard-mobile.webp"
              alt={t('trustedAlt')}
              width={0}
              height={0}
              className="w-full block md:hidden h-auto object-cover"
            />
          </div>
          <div className="order-2 lg:order-1 lg:col-span-7">
            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] lg:w-[75%] 2xl:w-[59%] 4xl:w-[87%] ">
              {t('partnerTitle')}</h2>
            <p className="leading-tight mt-[23px] font-normal text-[16px] xl:text-[18px] md:text-[18px] 4xl:text-[20px] lg:mt-[33px] lg:pr-20">
              {t('partnerDesc')}
            </p>
            <div>
              <UnorderedList
                arrName={partnerList}
                ulClassName="list-disc pt-4 text-black pl-4 text-[16px] xl:text-[18px] 4xl:text-[20px] xl:pr-20 leading-tight space-y-3"
                liClassName=""
              />
            </div>
            <div className="lg:mt-[30px]">
              <LearnMore btnName={t('learnMore')} />
            </div>
          </div>
        </section>
        <div className="py-10"></div>
        {/* Seamless Migration from SAP section */}
        <section className="custom-container  px-[2rem]">
          <h2 className="xl:w-[63%] 2xl:w-[70%] leading-tight pb-6 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
            {t('migrationTitle')}
          </h2>
          <p className=" xl:w-[75%] text-[16px] xl:text-[18px] md:text-[18px] 4xl:text-[20px] leading-tight">
            {t('migrationPara')}</p>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:mt-[53px] mt-[36px]">
            {exploreData.map((data, ind) => {
              const isFirstThree = ind === 0 || ind === 1 || ind === 2;
              const borderClasses = isFirstThree
                ? "border-b lg:border-b-0 lg:border-r-2 border-[#848484] pb-[40px] md:pb-[30px] xl:pb-0"
                : "";
              return (
                <div
                  className={`h-full ${borderClasses} first:pl-0 first:pt-0 pt-[42px] md:pt-0 last:pr-0 md:pl-[10px] md:pr-[10px] lg:pl-[30px] lg:pr-[20px] flex flex-col justify-between`}
                  key={ind}
                >
                  <div>
                    <h3 className="text-[#0A6BB8] xl:text-[20px] text-[16px] md:text-[18px] font-bold leading-tight md:mt-4">
                      {data.title}
                    </h3>
                    <p className="mt-4 text-[16px] xl:text-[18px] md:text-[18px] 4xl:text-[20px] leading-tight">
                      {data.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <div className="py-4"></div>
        {/* Migrate from SAP Datasphere to SAP Business Data Cloud */}
        <section className="lg:mt-[120px] mt-[10px]">
          <div className="grid lg:grid-cols-12 grid-cols-1">
            <div className="lg:col-span-6 col-span-12 lg:order-1 order-2  ">
              <div className="bg-[#073259] text-[white] lg:py-[55px] lg:w-[600px] xl:w-[750px] 3xl:w-[1110px] 2xl:w-[950px] max-lg:px-[36px] pb-[42px] pt-[32px] lg:z-0 relative">
                <div className="custom-container max-md:px-0 2xl:pr-0">
                  <div className="xl:w-[82%] lg:w-[80%] 2xl:w-[62%] ">
                    <h2 className=" leading-tight pb-6 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
                      {t('migrateTitle')}
                    </h2>
                    <p className="mt-5  text-[#FFFFFF] font-light leading-tight text-[16px] xl:text-[18px] 4xl:text-[20px] md:text-[18px]">
                      {t('migrateDesc')}
                    </p>
                    <ul className="list-disc p-4 text-white font-light pt-4 text-[16px] xl:text-[18px] 4xl:text-[20px] space-y-4 leading-tight">
                      {migrateData.map((step, index) => (
                        <li
                          key={index}
                          className={`${index !== migrateData.length - 1 ? "pb-1" : ""
                            }`}
                        >
                          <div className="font-semibold">{step.title}</div>
                          <div className="font-light">{step.description}</div>
                        </li>
                      ))}
                    </ul>
                    <div className="absolute mt-0 xl:mt-[3px] max-lg:mt-[-10px]">
                      <LearnMore bgcolor={"#006FBE"} btnName={t('learnMore')} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 lg:order-2 order-1 max-md:px-0">
              {/* Desktop Image */}
              <div className="hidden lg:block relative w-full h-full top-[-72px] right-0 z-20">
                <Image
                  src="/images/sap-bdc-services/developers-analyzing-code.webp"
                  alt={t('migrateAlt')}
                  className="w-full h-full"
                  width={0}
                  height={0}
                  style={{ objectFit: "cover", objectPosition: "25% 20%" }}
                  priority
                />
              </div>
              {/* Mobile Image */}
              <div className="block lg:hidden w-full h-[340px] sm:h-[700px] md:h-[750px] relative">
                <Image
                  src="/images/sap-bdc-services/developers-analyzing-code.webp"
                  alt={t('migrateAlt')}
                  width={0}
                  height={0}
                  style={{ objectFit: "cover", objectPosition: "70% 20%" }}
                  priority
                  className="h-full w-full z-20"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="py-10"></div>
        {/* Connect SAP Business Data Cloud with Databricks */}
        <section className="custom-container xl:pr-0 max-md:px-0">
          <div className="relative overflow-hidden">
            <div className="hidden lg:block">
              <Image
                src="/images/sap-bdc-services/hand-holding-cloud-concept.webp"
                alt={t('connectAlt')}
                fill
                priority
                style={{ objectFit: "cover" }}
                className="z-0"
              />
            </div>
            {/* Mobile Background Image */}
            <div className="block lg:hidden">
              <Image
                src="/images/sap-bdc-services/hand-holding-cloud-concept-mobile.webp"
                alt={t('connectAlt')}
                fill
                priority
                style={{ objectFit: "cover" }}
                className="z-0"
              />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 h-full px-4 py-10 text-white max-md:pb-[22rem] ">
              <div className="lg:col-span-7 m-2 sm:m-4 md:m-6  p-3 sm:p-10 2xl:w-[75%] xl:w-[75%]  ">
                <h2 className="leading-tight pb-6 text-black  4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
                  {t('databricksTitle')}</h2>
                <p className="mt-4 text-black  font-light text-[16px] xl:text-[18px] 4xl:text-[20px] md:text-[18px] leading-tight">
                  {t('databricksDesc')}
                </p>
                <UnorderedList
                  arrName={connectSapData}
                  ulClassName="list-disc pt-4 text-black pl-5  font-light"
                  liClassName="pb-2 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="py-10"></div>
        {/* Our SAP Business Data Cloud Services */}
        <section className="relative max-[345px]:h-[580px] max-[390px]:h-[530px] h-[455px] md:h-[530px] lg:h-[470px] xl:h-[560px] 2xl:h-[530px] 4xl:h-[630px] overflow-hidden">
          <div className="hidden lg:block">
            <Image
              src="/images/sap-bdc-services/wind-turbine-digital-network.webp"
              alt={t('businessAlt')}
              fill
              priority
              style={{ objectFit: "cover" }}
              className="z-0"
            />
          </div>
          {/* Mobile Background Image */}
          <div className="block lg:hidden">
            <Image
              src="/images/sap-bdc-services/wind-turbine-digital-network-mobile.webp"
              alt={t('businessAlt')}
              fill
              priority
              style={{ objectFit: "cover" }}
              className="z-0"
            />
          </div>
          <div className="custom-container max-md:px-0">
            <div className="relative z-10 grid grid-cols-12 h-full px-4 max-md:px-0 md:ml-0 text-white">
              <div className="md:col-span-6 col-span-12 pt-10 z-10 hidden md:block"></div>
              <div className="md:col-span-6 col-span-12 relative h-full">
                <div className="">
                  <div
                    className="absolute md:inset-0 lg:px-12 lg:py-14 px-8 py-8 text-white max-[345px]:h-[580px] max-[390px]:h-[530px]   h-[455px]  md:h-[530px] xl:h-[560px] lg:h-[600px] 2xl:h-[630px]"
                    style={{
                      background: "#113056",
                      mixBlendMode: "overlay",
                      opacity: 0.8,
                    }}
                  >
                    <div style={{ opacity: 1, color: "#FFFFFF" }}>
                      <h2 className="mb-4 leading-tight  4xl:text-[56px] xl:text-[40px] md:text-[26px]">
                        {t("dataCloud")}
                      </h2>
                      <ul className="list-disc leading-tight p-4 text-white font-light pt-4 text-[16px] xl:text-[18px] 4xl:text-[20px] space-y-4">
                        {ourSapData.map((item, index) => (
                          <li key={index} className="pb-1">
                            <div className="font-semibold">{item.title}</div>
                            <div className="font-light">{item.description}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Clients Choose Rialtes */}
        <section className="custom-container lg:mt-[120px] max-md:px-0">
          <div className="grid lg:grid-cols-12 grid-cols-1">
            <div className="lg:col-span-6 col-span-12 lg:order-1 order-2 xl:mr-[40px] relative">
              <div className="block lg:hidden relative z-10 px-6 ">
                <Image
                  src="/images/sap-bdc-services/software-developer-workspace.webp"
                  alt={t('clientsAlt')}
                  width={0}
                  height={0}
                  className="w-full h-[400px] 2xl:h-[90%] md:w-[60%]"
                  style={{ objectFit: "cover", objectPosition: "70% 20%" }}
                  priority
                />
              </div>
              <div className="bg-[#006FBE] text-white lg:py-[50px] lg:w-[600px] xl:w-[800px] xl:pl-0 xl:h-[460px]  4xl:h-[580px] 4xl:w-[1050px] 2xl:w-[1000px] max-xl:px-[36px] pb-[42px] pt-[32px] lg:z-0 relative max-lg:mt-[-150px] ">
                <div className="custom-container xl:pl-[60px] max-lg:pt-[160px] max-md:px-0">
                  <div className="4xl:w-[79%] xl:w-[68%] lg:w-[80%]">
                    <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:mb-3">
                      {t('clientsTitle')}</h2>
                    <UnorderedList
                      arrName={whyClientsData}
                      ulClassName="list-disc p-4 text-white font-light pt-4 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight space-y-4"
                      liClassName=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Image */}
            <div className="lg:col-span-6 col-span-12 lg:order-2 order-1 xl:mr-5">
              <div className="hidden lg:block relative w-full h-full top-[-120px] right-0 z-20">
                <Image
                  src="/images/sap-bdc-services/software-developer-workspace.webp"
                  alt={t('clientsAlt')}
                  className="w-full h-full "
                  width={0}
                  height={0}
                  style={{ objectFit: "cover", objectPosition: "25% 20%" }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className="mx-[35px] custom-container text-black py-16">
        <ContactForm
          className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[60%] 4xl:w-[80%]"
          title={t('contactTitle')}
          subtitle={t('SubTitle')}
        />
      </div>
    </div>
  );
}
