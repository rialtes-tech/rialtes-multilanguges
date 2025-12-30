"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/[locale]/components/Seo";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/solutions.json';
import esContent from '../../../../../../messages/es/solutions.json';
import frContent from '../../../../../../messages/fr/solutions.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
export default function Page() { 
  const t = useTranslations('oracle')
  const locale = useLocale();
  const homepageContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { data, InventoryData, oracleFeatures, ebsListItems, keyCapabilitiesData, businessBenefitsData, howWeTransformData, outcomeData, endToEndData, realWorldData ,schemaData,
    aiDrivenData, ebsData
  } = homepageContent.oracle;
  return ( 
    <div className="min-h-screen bg-white">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        canonical={`https://www.rialtes.com/${locale}/solutions/enterprise-platforms/oracle-ebs-consulting/`}
      />
      <Script
        id="schema-oracle"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* Header Section */}
      <section className="relative h-[350px] md:h-[500px]  4xl:h-[650px] ">
        {/* Desktop Image */}
        <div className="xl:block hidden">
          <Image
            src="/images/oracle-ebs/oracle-ebs-services-banner.webp"
            alt={t('bannerAlt')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Mobile/Tablet Image */}
        <div className="xl:hidden block">
          <Image
            src="/images/oracle-ebs/mobile-header-banner.webp"
            alt={t('bannerAlt')}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Text Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="custom-container text-white mt-20 xl:mt-0">
            <h1 className="text-[18px] xl:text-[24px] font-bold mb-2 leading-tight">
              {t('headerTitle')}
            </h1>
            <h2 className="leading-tight 4xl:text-[60px] xl:text-[45px] text-[24px]  md:text-[26px] xl:font-normal mt-5 font-light pr-20 xl:pr-0  xl:w-[35%] 2xl:w-[30%] 4xl:w-[37%] ">
              {t('headerSubtitle')}
            </h2>
          </div>
        </div>
      </section>
      {/* Empower your enterprise with Rialtes section */}
      <section className="xl:py-20 pt-10 pb-5">
        <div className="custom-container">
          <div>
            <h2 className="4xl:text-[40px] xl:text-[32px] text-[26px] 4xl:w-[89%] 2xl:w-[78%] xl:w-[88%] w-full xl:pr-0 leading-tight">
              {t('pageDescTitle')}
            </h2>
            <div className="xl:grid xl:grid-cols-12 grid-cols-1 mb-8 xl:mt-10 xl:gap-16 flex flex-col-reverse">
              <div className="xl:col-span-7 col-span-12">
                <p className="4xl:text-[22px] xl:text-[18px] text-[16px] leading-tight">
                  {t('pageDesc')}
                </p>
              </div>
              <div className="xl:col-span-1 col-span-12"></div>
              <div className="xl:col-span-3 col-span-12">
                <Image
                  src="/images/oracle-ebs/oracle-ebusiness-suite-logo.webp"
                  alt={t('ebsSuitelogoAlt')}
                  priority
                  className="w-[397px] h-[233] xl:mt-[-20px]"
                  width={0}
                  height={0}
                />
              </div>
              <div className="xl:col-span-1 col-span-12"></div>
            </div>
          </div>
        </div>
      </section>
      {/* ebs plus section */}
      <section className="relative pb-20 lg:pb-0">
        <div className="hidden xl:block">
          <Image
            src="/images/oracle-ebs/oracle-ebsplus-overview.webp"
            alt={t('ebsimageAlt')}
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/oracle-ebs/oracle-ebs-mobile.webp"
            alt={t('ebsimageAlt')}
            fill
            priority
          />
        </div>
        <div className="custom-container">
          <div className=" flex flex-col text-white relative  xl:py-10 py-6">
            <div className="xl:mt-20 mt-8">
              <h2 className="text-[26px] xl:text-[40px] 4xl:text-[60px] leading-tight">
                {t('ebsTitle')}
              </h2>
              <div className="grid xl:grid-cols-12 grid-cols-1 items-center xl:mt-5 mt-3">
                <div className="xl:col-span-9 col-span-12">
                  <h2 className="text-[22px] xl:text-[30px] 4xl:text-[42px] xl:font-bold font-medium xl:mt-5 leading-tight ">
                    {t('ebsSubTitle')}
                  </h2>
                </div>
                <div className="xl:col-span-3 col-span-12"></div>
              </div>
              <div className="grid xl:grid-cols-12 grid-cols-1 items-center xl:mt-8 mt-5">
                <div className="xl:col-span-6 col-span-12">
                  <p className="text-[16px]  xl:text-[18px] 4xl:text-[22px] xl:mt-5 font-light xl:font-normal leading-tight">
                    {t('ebsDesc')}
                  </p>
                </div>
                <div className="xl:col-span-6 col-span-12"></div>
              </div>
              <h3 className="text-[20px] xl:text-[25px] 4xl:text-[30px] leading-tight xl:mt-20 mt-16">
                {t('whatEbsTitle')}
              </h3>
            </div>
          </div>
        </div>
        <div className=" grid xl:gap-10 gap-8  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-black xl:!pr-[142px] relative z-10 custom-container">
          {ebsData.map((item, index) => (
            <div key={index} className="bg-white p-10 shadow">
              <h3 className="text-[22px] xl:text-[23px]  4xl:text-[24px] font-bold leading-tight">
                {item.title}
              </h3>
              <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] xl:text-lg mt-4 pr-5 xl:pr-10 leading-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Deep Expertise in Oracle EBS section*/}
      <section className="relative h-auto pb-20 xl:h-[1482px] z-0 xl:pb-20 xl:mt-[-60px]">
        <div className="xl:block hidden">
          <Image
            src="/images/oracle-ebs/oracle-ebs-deep-expertise.webp"
            alt={t('deepexpertiseAlt')}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/oracle-ebs/oracle-deep-experties-mobile.webp"
            alt={t('deepexpertiseAlt')}
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100vw"
          />
        </div>
        <div className="h-full relative custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-12 items-center text-white">
            <div className="4xl:col-span-9 xl:col-span-8 col-span-12 text-white sm:backdrop-blur-md sm:p-5 xl:p-0 sm:bg-blue-800/30 xl:backdrop-blur-0 xl:bg-transparent">
              <h2 className="xl:mt-32 mt-16 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
                {t('deepExpertiesTitle')}
              </h2>
              <p className="4xl:text-[22px] xl:text-[18px] text-[16px] mt-5 leading-tight ">
                {t('deepExpertiesDesc')}
              </p>
            </div>
            <div className="xl:col-span-3 col-span-12"></div>
          </div>
          <div className="xl:absolute bottom-[80px] xl:bottom-0  bg-opacity-80 text-white">
            <div className="grid grid-cols-1 md:gap-[50px] md:grid-cols-2 xl:grid-cols-4 xl:pr-[85px] mt-[35rem] xl:mt-0">
              {oracleFeatures.map((item, index) => (
                <div
                  key={index}
                  className={`${index < 3 ? "xl:border-r max-md:border-b" : ""} 
                              ${index === 0 || index === 1 ? "md:border-b lg:border-b" : ""} 
                              xl:border-b-0 
                              border-white/50 
                              flex flex-col 
                              pt-10 
                              pb-10 xl:pb-0 xl:pt-0 
                              pr-10 max-sm:pr-0
                            `} >
                  <p className="4xl:text-[30px] xl:text-[25px] text-[18px] leading-tight font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Thought Leadership: Why Rialtes? section */}
      <section className="relative pb-12 md:pb-[6rem] xl:pb-40 z-0 bg-[#F2F2F2] xl:mt-0 max-sm:px-0 custom-container">
        <div className="xl:block hidden">
          <Image
            src="/images/oracle-ebs/oracle-ebs-thought-leadership.webp"
            alt={t('thoughtleadershipAlt')}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="h-full relative xl:mr-0  ">
          <div className="grid xl:grid-cols-12 grid-cols-1 items-center">
            <div className="xl:col-span-6 col-span-12">
              <div className="pt-20 ">
                <div className="max-sm:px-[36px]">
                  <h2 className="pr-10 xl:pr-0 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] text-[22px]">
                    {t('thoughtTitle')}
                  </h2>
                  <p className="4xl:text-[22px] xl:text-[18px] text-[16px] mt-5 leading-tight xl:pr-14">
                    {t('thoughtDesc')}
                  </p>
                </div>
                {/* Mobile Image */}
                <div className="block xl:hidden relative w-full h-[400px] sm:px-0 custom-container md:h-[900px] mt-8">
                  <Image
                    src="/images/oracle-ebs/thought-mobile.webp"
                    alt={t('thoughtleadershipAlt')}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw" 
                  />
                </div>
                <div className="max-sm:px-[36px]">
                  <h3 className="4xl:text-[30px] xl:text-[26px] text-[22px] font-bold mt-10 md:mt-16 xl:mt-8">
                    {t('thoughtPillarsTitle')}
                  </h3>
                  <ul className="list-disc xl:space-y-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight pl-5 marker:font-bold marker:text-2xl mt-4 4xl:w-[94%]">
                    {ebsListItems.map((item, index) => (
                      <li key={index} className={`${index === 0 ? "mt-5" : ""}`}>
                        {item.fullBold ? (
                          <span className="font-bold">{item.text}</span>
                        ) : (
                          <>
                            <span className="font-bold">
                              {item.bold}
                            </span>
                            {""} {item.text}
                            {item.secondBold &&
                              <span className="font-bold">
                                {item.secondBold}
                              </span>
                            }
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12"></div>
          </div>
        </div>
      </section>
      {/* Supply Chain Planning section */}
      <section className="pb-20  z-0 mt-10 xl:mt-0">
        <div className=" h-full relative custom-container xl:!pr-0">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20">
            <div className="xl:col-span-4 col-span-12">
              <Image
                src="/images/oracle-ebs/oracle-ebs-kinaxis-supply-chain-planning.webp"
                width={0}
                height={0}
                priority
                sizes="100vw"
                className="xl:h-[850px] h-[398px] md:h-[550px] w-full xl:w-[532px] xl:mt-[-80px] object-cover"
                alt={t('supplyChainAlt')}
              />
            </div>
            <div className="xl:col-span-7 col-span-12">
              <h2 className=" xl:mt-20 mt-16 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
                {t('supplyChainTitle')}
              </h2>
              <h2 className="4xl:text-[40px] xl:text-[28px] text-[22px] xl:font-bold font-medium mt-5 leading-tight">
                {t('supplyChainSubTitle')}
              </h2>
              <p className="4xl:text-[22px] xl:text-[18px] text-[16px]  mt-5 leading-tight ">
                {t('supplyChainDesc')}
              </p>
              <div className="grid xl:grid-cols-2 md:grid-cols-2 xl:gap-16 gap-10 mt-10">
                <div>
                  <h3 className="text-[20px] xl:text-[24px] 4xl:text-[28px] leading-tight text-[#006CBC] font-bold">
                    {t('keyTitle')}
                  </h3>
                  <UnorderedList arrName={keyCapabilitiesData} ulClassName="list-disc xl:space-y-5 pl-5 xl:mt-5 mt-3 marker:font-bold marker:text-2xl leading-tight" liClassName=" text-[16px] xl:text-[18px] 4xl:text-[20px]" />
                </div>
                <div>
                  <h3 className="text-[20px] xl:text-[24px] 4xl:text-[28px] leading-tight text-[#006CBC] font-bold">
                    {t('businessTitle')}
                  </h3>
                  <UnorderedList arrName={businessBenefitsData} ulClassName="list-disc xl:space-y-5 xl:mt-5 mt-3 leading-tight pl-5 marker:font-bold marker:text-2xl" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sales and Operations Planning section*/}
      <section className="relative h-auto pb-10 xl:pb-0 xl:h-[1205px] xl:overflow-hidden xl:mt-0">
        {/* Desktop Image */}
        <div className="xl:block hidden">
          <Image
            src="/images/oracle-ebs/oracle-ebs-sales-operations-planning.webp"
            alt={t('salesAndOperationsAlt')}
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            sizes="100vw"
          />
        </div>
        {/* Mobile Image */}
        <div className="xl:hidden block relative w-full h-[415px]">
          <Image
            src="/images/oracle-ebs/oracle-ebs-sales-operations-planning-mobile.webp"
            alt={t('salesAndOperationsAlt')}
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative xl:absolute 4xl:mx-[280px] 2xl:mx-[140px] xl:mx-[80px] xl:bottom-0 left-0 right-0 bg-[#005B9D] bg-opacity-90 text-white p-[35px] xl:p-16">
          <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
            {t('salesTitle')}
          </h2>
          <h3 className="mt-2 text-[22px] xl:text-[30px] 4xl:text-[40px] font-bold">
            {t('salesSubTitle')}
          </h3>
          <div className="grid grid-cols-12 items-center">
            <div className="xl:col-span-7 col-span-12">
              <p className="mt-5 4xl:text-[22px] xl:text-[18px] text-[16px]  leading-tight">
                {t('salesDesc')}
              </p>
            </div>
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1 md:grid-cols-2 xl:mt-[65px] xl:gap-20 xl:pr-[138px]">
            <div className="xl:col-span-6 col-span-12 md:col-span-1 mt-10 xl:mt-0">
              <h3 className="4xl:text-[30px] xl:text-[28px] text-[24px] font-medium leading-tight">
                {t('howWeTitle')}
              </h3>
              <UnorderedList arrName={howWeTransformData} ulClassName="list-disc xl:space-y-5 xl:mt-5 mt-3 pl-5 marker:font-bold marker:text-2xl leading-tight" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
            </div>
            <div className="xl:col-span-6 col-span-12 md:col-span-1 mt-10 xl:mt-0">
              <h3 className="4xl:text-[30px] xl:text-[28px] text-[24px] font-medium leading-tight">
                {t('outcomeTitle')}
              </h3>
              <UnorderedList arrName={outcomeData} ulClassName="list-disc xl:space-y-5 pl-5 xl:mt-5 mt-3 marker:font-bold marker:text-2xl leading-tight" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
            </div>
          </div>
        </div>
      </section>
      {/* Inventory Optimization & Enterprise Scheduling section */}
      <section>
        <div className="xl:mt-0 h-auto custom-container xl:gap-16 xl:!pr-0">
          <div className="flex xl:flex-row flex-col xl:gap-16">
            <Image
              src="/images/oracle-ebs/inventory.webp"
              alt={t('inventoryAlt')}
              priority
              className="xl:w-[618px] xl:h-[640] h-[309] w-full object-cover"
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="xl:mt-[6rem] xl:pr-[25px]">
              <h2 className="leading-tight mt-10 xl:mt-0 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
                {t('inventoryTitle')}
              </h2>
              <h3 className="4xl:text-[40px] xl:text-[26px] text-[22px] mt-5 xl:font-bold font-medium  leading-tight">
                {t('inventorySubTitle')}
              </h3>
              <div className="grid xl:grid-cols-12 grid-cols-1 items-center">
                <div className="2xl:col-span-7 xl:col-span-11">
                  <p className="4xl:text-[22px] xl:text-[18px] text-[16px] mt-5 leading-tight ">
                    {t('inventoryDesc')}
                  </p>
                </div>
                <div className="col-span-5"></div>
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1 md:grid-cols-2  mt-10  xl:gap-12 gap-8 xl:pr-[200px] ">
            {InventoryData.map((block, index) => (
              <div key={index} className="xl:col-span-4">
                <h3 className="text-[#006CBC] font-bold leading-tight 4xl:text-[30px] xl:text-[23px] text-[20px]">
                  {block.title}
                </h3>
                <UnorderedList arrName={block?.points} ulClassName="list-disc xl:space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5 leading-tight" liClassName="text-[16px] xl:mt-4 mt-2 xl:text-[18px] 4xl:text-[20px]" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End-to-End Scenario Planning section */}
      <section>
        <div className="bg-[#F2F2F2] mt-20 pb-10 xl:pb-0">
          <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-24 custom-container xl:!pr-0">
            <div className="xl:col-span-7 col-span-12 order-1 xl:order-2">
              <div className="xl:block hidden">
                <Image
                  src="/images/oracle-ebs/oracle-ebs-scenario-planning.webp"
                  width={950}
                  height={600}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  priority
                  sizes="100vw"
                  alt={t('senarioplanningAlt')}
                />
              </div>
              <div className="xl:hidden block">
                <Image
                  src="/images/oracle-ebs/oracle-ebs-scenario-planning-mobile.webp"
                  width={950}
                  height={600}
                  alt={t('senarioplanningAlt')}
                  className="w-full"
                  priority
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="xl:col-span-5 col-span-12 order-2 xl:order-1 pb-20">
              <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[26px] mt-10 xl:mt-0 leading-tight xl:pt-20 4xl:w-[95%] xl:w-[90%] md:w-[85%] w-full pr-10 xl:pr-0">
                {t('endToEndTitle')}
              </h2>
              <h3 className="4xl:text-[40px] xl:text-[30px] text-[22px] mt-5 xl:font-bold font-medium pr-10 xl:pr-0 leading-tight">
                {t('endToEndSubTitle')}
              </h3>
              <p className="4xl:text-[22px] xl:text-[18px] text-[16px] mt-5 leading-tight ">
                {t('endToEndDesc')}
              </p>
              <UnorderedList arrName={endToEndData} ulClassName="mt-5 list-disc xl:space-y-5 pl-5 marker:font-bold marker:text-2xl leading-tight" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
            </div>
          </div>
        </div>
      </section>
      {/* AI & Data-Driven section */}
      <section className="relative pb-16 xl:py-20">
        <div className="lg:block hidden">
          <Image
            src="/images/oracle-ebs/oracle-ebs-ai-data-transformation.webp"
            alt={t('aiDrivenAlt')}
            fill
            priority
          />
        </div>
        <div className="lg:hidden block">
          <Image
            src="/images/oracle-ebs/oracle-ebs-ai-data-transformation-mobile.webp"
            alt={t('aiDrivenAlt')}
            priority
            style={{ objectFit: "cover", objectPosition: "35% 0%" }}
            width={0}
            height={0}
            className="w-full md:h-[1400px]  h-[1350px]"
          />
        </div>
        <div className="relative custom-container">
          <div className="flex flex-col justify-center text-white ">
            <div className="grid lg:grid-cols-12 grid-cols-1 md:grid-cols-2 items-center lg:mt-[40px] md:mt-0">
              <div className="lg:col-span-8 col-span-12 md:col-span-2 max-lg:absolute max-lg:mr-[36px] bottom-[54px] lg:mt-0">
                <h2 className="pr-10 xl:pr-0 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
                  {t('aiDrivenTitle')}    <br />
                  <span className="block"> {t('aiDrivenTitle2')} </span>
                </h2>
                <p className="4xl:text-[22px] xl:text-[18px] text-[16px] leading-tight mt-5  xl:pr-0">
                  {t('aiDrivenDesc')}
                </p>
                <div className="flex xl:flex-row md:flex-row flex-col xl:mt-[50px] xl:gap-24 gap-10">
                  <div>
                    <h3 className="4xl:text-[30px] xl:text-[25px] text-[20px] leading-tight xl:font-bold font-medium mt-10 xl:mt-0 xl:pr-0 2xl:pr-10">
                      {t('realWorldTitle')}
                    </h3>
                    <UnorderedList arrName={realWorldData} ulClassName="mt-5 list-disc xl:space-y-5 xl:font-medium font-light pl-5 marker:font-bold marker:text-2xl pr-5 xl:pr-16 leading-tight" liClassName=" 4xl:text-[20px] xl:text-[18px] text-[16px]" />
                  </div>
                  <div className="md:mt-10 xl:mt-0">
                    <h3 className="4xl:text-[30px] xl:text-[25px] text-[20px] xl:font-bold font-medium pr-10 xl:pr-0">
                      {t('benefitsTitle')}
                    </h3>
                    <UnorderedList arrName={aiDrivenData} ulClassName="mt-5 list-disc xl:space-y-5 pl-5 xl:font-medium font-light marker:font-bold marker:text-2xl pr-8 xl:pr-10 leading-tight" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Rialtes - Oracle EBS Partner of Choice section */}
      <section className="xl:py-20 lg:py-8">
        <div className="mx-[35px] xl:mr-0 custom-container">
          <div>
            <h2 className="4xl:text-[60px] xl:text-[40px] mb-4 md:text-[26px] leading-tight">
              {t('whyRialtesTitle')}
            </h2>
            <h3 className="text-[#000000] mb-8 mt-2 xl:mt-0 xl:font-bold font-medium w-full 4xl:text-[40px] xl:text-[30px] text-[22px] leading-tight pr-10 xl:pr-0">
              {t('whyRialtesSubTitle')}
            </h3>
            <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 mb-8 mt-16 xl:gap-5 gap-16">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`flex xl:block items-start gap-6 ${index >= 3 ? "xl:mt-16" : ""}`}>
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={100}
                    height={100}
                    priority
                    className="xl:w-[118px] xl:h-[118px] w-[87px] h-[87px]"
                    sizes="100vw"
                  />
                  <p className="mt-0 xl:mt-5 4xl:text-[20px] xl:text-[19px] text-[18px] xl:w-[60%] font-bold leading-tight">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <div className="xl:mt-0 custom-container text-black pb-20">
        <ContactForm
          title={t('contactTitle')}
          className={
            "xl:max-w-[60rem] font-light pr-10 xl:pr-0 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]"
          }
        />
      </div>
    </div>
  );
}
