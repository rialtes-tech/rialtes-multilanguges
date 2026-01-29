
"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/[locale]/components/Seo";
import Link from "next/link";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/services.json';
import esContent from '../../../../../../messages/es/services.json';
import frContent from '../../../../../../messages/fr/services.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import { useActiveLocale } from "@/app/[locale]/components/activeLanguages";
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'
import BreadcrumbSchema from "@/app/[locale]/components/BreadcrumbSchema";


const BulletList = ({ items }) => (
  <ul className="list-disc space-y-4 marker:font-bold marker:text-2xl pl-5 text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">
    {items.map(({ title, description }, idx) => (
      <li key={idx}>
        <h4 className="font-bold inline text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">
          {title} —
        </h4>{" "}{description}
      </li>
    ))}
  </ul>
);
export default function Page() {
  const t = useTranslations('riseWithSap')
  const locale = useLocale();
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { frActive, esActive } = useActiveLocale();
  const { greenfieldItemsLeft, greenfieldItemsRight, brownfieldItemsLeft, brownfieldItemsRight, sapTransformations, btpData, sapIntegrations, communicationBenefits, aiData, ourActivateData, schemaData } = content.riseWithSap;
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t('seoTitle')}
        description={t('seoDescription')}
        keywords="home, website, welcome"
        canonical={`https://www.rialtes.com/${locale}/services/business-transformation/rise-with-sap-services/`}
      />
      <Script
        id="schema-rise"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* breadcrumbs schema */}
      <BreadcrumbSchema />
      {/* hero section */}
      <section className="relative h-[350px] md:h-[500px] xl:h-[550px] 4xl:h-[700px] group overflow-hidden">
        <div className="xl:block hidden ">
          <Image
            src="/images/services/rise-with-sap/abstract-blue-radial-pattern.webp"
            alt={t('bannerAlt')}
            className="transform transition-transform duration-500 group-hover:scale-110 object-cover"
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/services/rise-with-sap/abstract-blue-radial-pattern.webp"
            alt={t('bannerAlt')}
            fill
            className="transform transition-transform duration-500 group-hover:scale-110 object-cover"
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
          />
        </div>
        <div
          className="custom-container h-full relative">
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-white xl:text-[24px] text-[17px] font-medium mb-4">{t('headerTitle')}</h3>
            <h1 className={`text-white leading-tight text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] 2xl:w-[620px]  w-[266px] md:w-[400px] ${frActive || esActive ? "lg:w-[624px] xl:w-[542px] 4xl:w-[700px]" : "lg:w-[424px] xl:w-[512px] 4xl:w-[667px]"}`}>
              {t('headerSubTitle')}
            </h1>
            <div className="md:max-w-32 w-20 4xl:w-[160px] 2xl:w-[140px] lg:w-[100px] xl:w-[100px] pt-8">
              <Image
                src="/images/sap-consulting/SAP-partner-logo.webp"
                alt="SAP Partner Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb */}
      <section className="custom-container">
        <BreadCrumbs />
      </section>
      {/* unlock section */}
      <section className="xl:mt-[78px] mt-[51px] custom-container">
        <h2 className="font-light text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] xl:w-[1000px] 4xl:w-[1222px] 2xl:w-[1100px] md:w-[700px] leading-tight">
          {t('pageDescTitle')}
        </h2>
        <p className="4xl:text-[22px] md:text-[18px] text-[16px] font-normal xl:w-[81%] w-[94%] 4xl:w-[81%] 2xl:w-[80%] xl:mt-[43px] mt-[32px]">
          {t('pageDesc')}
        </p>
        <p className="font-normal 4xl:text-[22px] md:text-[18px] text-[16px] 4xl:w-[81%] xl:w-[81%] w-[94%] mt-[20px]">
          {t('pageDesc2')}
        </p>
      </section>
      {/* why chooose section */}
      <div className="bg-[#DBDBDB]">
        <section className="custom-container pb-[39px] lg:pb-[50px] mt-[145px]">
          <div className="flex flex-col-reverse lg:flex-row gap-[60px] lg:gap-[60px] xl:gap-[100px]">
            <div className="w-full xl:w-1/2 lg:mt-[81px] lg:mb-[50px]">
              <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] font-light xl:w-[600px] 2xl:w-[700px] 4xl:w-[689px]  lg:w-[450px]  leading-tight ">
                {t('whyChooseTitle')}
              </h2>
              <p className="mt-5 4xl:text-[22px] md:text-[18px] text-[16px] 4xl:w-[674px] 2xl:w-[620px] xl:w-[560px] lg:w-[500px]">
                {t('whyChooseDesc')}
              </p>
              <h3 className="mt-10 font-bold md:text-[20px] text-[18px] xl:text-[24px] 4xl:text-[30px]">
                {t('withRialtesTitle')}
              </h3>
              <ul className="list-disc space-y-5 mt-5 text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] pl-5 marker:font-bold">
                {sapTransformations.map((item, index) => (
                  <li key={index}>
                    <h4 className="font-bold text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">
                      {item.bold}{" "}
                      <span className="font-normal text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">
                        {item.normal}
                      </span>
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full group xl:w-1/2 flex justify-center xl:justify-end">
              <Image
                src="/images/services/rise-with-sap/professional-working-network-visualization.webp"
                alt={t('whyAlt')}
                width={0}
                height={0}
                className=" transform transition-transform duration-500 group-hover:scale-110 w-[95%] md:w-[75%] lg:w-full xl:w-full mt-[-90px] h-full lg:mt-[-80px] xl:mt-[-70px] object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </section>
      </div>
      {/* greenfield section */}
      <section className="relative group overflow-hidden xl:mt-0">
        <Image
          src="/images/services/rise-with-sap/high-speed-digital-highway-night.webp"
          alt={t('greenAlt')}
          className="transform transition-transform duration-500 group-hover:scale-110 object-cover"
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div className="h-full relative custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-[95px] mt-[48px] text-white">
            <div className="xl:col-span-12 col-span-12">
              <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight">
                {t('greenfieldTitle')}  <br />
                {t('greenfieldTitle2')}
              </h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:mt-[55px] mt-[28px] text-white bg-[#0C723F] lg:p-12 p-[25px]">
            <div className="lg:col-span-7 col-span-12 flex items-center">
              <h2 className="4xl:text-[45px] text-[22px] md:text-[26px] xl:text-[36px] leading-tight font-medium xl:w-[94%] lg:w-[90%]">
                {t('greenFieldSubTitle')}
              </h2>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <p className="4xl:text-[22px] md:text-[18px] text-[16px] mt-[16px] lg:mt-0">
                {t('greenFieldDesc')}
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 grid-cols-1 bg-white lg:pt-[40px] lg:px-[60px] lg:pb-[109px] px-[26px] pt-[28px] pb-[80px]">
            <div className="lg:col-span-6 col-span-12">
              <h3 className="4xl:text-[30px] xl:text-[24px] md:text-[20px] text-[18px] font-bold">
                {t('ourGreenFieldTitle')}
              </h3>
              <div className="lg:mt-[26px] mt-[19px] lg:mr-[20px]">
                <BulletList items={greenfieldItemsLeft} />
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 lg:mt-[65px] lg:ml-[20px] mt-[19px]">
              <BulletList items={greenfieldItemsRight} />
            </div>
          </div>
          <p className="4xl:text-[26px] xl:text-[22px] lg:text-[20px] md:text-[18px] bg-[#0C8AD4] p-5 pl-10 text-white xl:w-[93%] mt-[-50px] xl:ml-[50px]">
            {t('ourGreenFieldDesc')}
          </p>
          <div className="grid lg:grid-cols-12 grid-cols-1 mt-20 text-white bg-[#713A18] lg:p-12 p-[25px]">
            <div className="lg:col-span-7 col-span-12 flex items-center">
              <h2 className="4xl:text-[45px] text-[22px] md:text-[26px] xl:text-[36px] leading-tight font-medium xl:w-[96%] lg:w-[90%]">
                {t('brownFieldTitle')}
              </h2>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <p className="4xl:text-[22px] md:text-[18px] text-[16px] mt-[16px] lg:mt-0">
                {t('brownFieldDesc')}
              </p>
            </div>
          </div>
          {/* brownfield */}
          <div className="grid lg:grid-cols-12 grid-cols-1 bg-white lg:pt-[40px] lg:px-[60px] lg:pb-[109px] px-[26px] pt-[28px] pb-[80px]">
            <div className="lg:col-span-6 col-span-12">
              <h3 className="4xl:text-[30px] xl:text-[24px] md:text-[20px] text-[18px] font-bold">
                {t('ourBrownfiledTitle')}
              </h3>
              <div className="xl:mt-[28px] mt-[19px]">
                <BulletList items={brownfieldItemsLeft} />
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 lg:mt-[65px] lg:ml-[20px] mt-[19px]">
              <BulletList items={brownfieldItemsRight} />
            </div>
          </div>
          <p className="4xl:text-[26px] xl:text-[22px] lg:text-[20px] md:text-[18px] bg-[#0C8AD4] p-5 pl-10 text-white xl:w-[93%] mt-[-50px] xl:ml-[50px]">
            {t('ourBrownFieldDesc')}
          </p>
          <button className="text-[16px] xl:text-[20px] border-[1px] border-[solid] border-[#134874] font-semibold bg-white text-black p-5 py-5 transition duration-300 order-4 mt-16">
            <Link href={`/${locale}/contact-us`} >{t('learnMoreBtn')}</Link>
          </button>
        </div>
      </section>
      {/* laveraging section */}
      <div className="custom-container xl:mt-[111px] mt-[46px]">
        <div className="grid lg:grid-cols-12 grid-cols-1 items-center xl:gap-16 gap-5">
          <div className="xl:col-span-8 col-span-12  ">
            <h2 className="font-light text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] xl:w-[751px] 4xl:w-[900px] 2xl:w-[850px] lg:w-[600px]  md:w-[700px]  mt-[52px] leading-tight ">
              {t('leveragingTitle')}
            </h2>
            <h3 className="4xl:text-[40px] text-[22px] md:text-[26px] xl:text-[36px]  leading-tight xl:mt-[42px] mt-[18px]">{t('leveragingSubTitle')}</h3>
          </div>
          <div className="xl:col-span-4 col-span-12">
            <p className="4xl:text-[22px] md:text-[18px] text-[16px] leading-tight">{t('leveragingDesc')}  </p>
          </div>
        </div>
      </div>
      {/* our activate section */}
      <section>
        <div className="custom-container">
          <h3 className="4xl:text-[30px] xl:text-[26px] md:text-[20px] text-[18px] font-bold xl:mt-[86px] mt-[32px] w-[80%] lg:w-full">{t('ourActivateSection')} </h3>
        </div>
        <div className="custom-container max-md:px-0">
          <div className="overflow-x-auto xl:mt-[36px] mt-[39px]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#D0EEFF] text-left">
                  <th className="xl:py-[30px] xl:pl-[30px] pl-[30px] py-[18px] 4xl:text-[30px] 2xl:text-[28px] xl:text-[26px] lg:text-[20px] text-[18px] font-bold">{t('ourActivateTableTitle1')} </th>
                  <th className="xl:py-[30px] xl:pl-[30px] pl-[30px] py-[18px] 4xl:text-[30px] 2xl:text-[28px] xl:text-[26px] lg:text-[20px] text-[18px] font-bold">{t('ourActivateTableTitle2')} </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {ourActivateData.map((item, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? "bg-[#F2F2F2]" : "bg-white"} text-left mt-5`}>
                    <td className="xl:py-[30px] xl:px-[30px] px-[30px] py-[18px] text-[16px] 4xl:text-[26px] 2xl:text-[22px] xl:text-[20px] lg:text-[18px] ">{item.title}</td>
                    <td className="xl:py-[30px] xl:px-[30px] px-[30px] py-[18px] text-[16px] 4xl:text-[26px]  2xl:text-[22px] xl:text-[20px] lg:text-[18px]">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* signavio section */}
      <div className="relative">
        <div className="absolute left-0 right-0 xl:mt-[74px] lg:mt-[95px] mt-[40px] sm:mt-[50px] md:mt-[62px]">
          <div className="custom-container">
            <div className="grid lg:grid-cols-12 grid-cols-1 bg-[#068EDA] lg:gap-8">
              <div className="xl:col-span-4 lg:col-span-4 col-span-12 lg:pl-10 md:px-4">
                <Image
                  src="/images/services/rise-with-sap/sap-signavio-logo.webp"
                  alt="sap-signavio-logo"
                  width={0}
                  height={0}
                  className="lg:w-full md:w-[50%] w-full h-full object-scale-down"
                  priority
                />
              </div>
              <div className="xl:col-span-8 lg:col-span-8 col-span-12 text-white p-[24px] lg:py-[19px]">
                <p className="text-[16px] 4xl:text-[26px] 2xl:text-[22px] xl:text-[20px] lg:text-[18px] font-normal">
                  {t('signavioDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* extending section */}
      <div className="bg-[#DBDBDB] lg:py-[102px] lg:pb-[132px] lg:mt-[153px] mt-[400px] md:mt-[320px] pt-[45px] pb-[73px]">
        <div className="custom-container text-black">
          <div className="grid lg:grid-cols-12 grid-cols-1">
            <div className="lg:col-span-8 lg:mt-16 mt-5">
              <h2 className="font-light text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] xl:w-[751px] 4xl:w-[900px] 2xl:w-[880px] lg:w-[600px] md:w-[700px] xl:leading-tight">{t('extendingTitle')} </h2>
            </div>
            <div className="lg:col-span-4 col-span-12">
            </div>
          </div>
          <div className="grid lg:grid-cols-12 grid-cols-1 mt-10 gap-5">
            <div className="lg:col-span-5 col-span-12">
              <h3 className="4xl:text-[30px] xl:text-[24px] md:text-[20px] text-[18px] font-bold">{t('extendingSubTitle')}  </h3>
              <p className="mt-5 4xl:text-[22px] md:text-[18px] text-[16px]">{t('extendingDesc')}  </p>
              <UnorderedList arrName={btpData} ulClassName="list-disc space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5" liClassName="first:mt-4 text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]" />
            </div>
            <div className="lg:col-span-1 col-span-12">
            </div>
            <div className="lg:col-span-5 col-span-12">
              <h3 className="4xl:text-[30px] xl:text-[24px] md:text-[20px] text-[18px] font-bold" >{t('sapCpiTitle')}</h3>
              <p className="mt-5 4xl:text-[22px] md:text-[18px] text-[16px]">{t('sapCpiDesc')} </p>
            </div>
          </div>
        </div>
      </div>
      {/* connected sap solution */}
      <section className="relative xl:mt-0 mt-0 pb-[91px] xl:pb-[0px] xl:h-[600px]">
        <Image
          src="/images/services/rise-with-sap/data-stream-network-visualization.webp"
          alt={t('connectedAlt')}
          fill
          style={{ objectFit: "cover", objectPosition: "35% 20%" }}
          priority
        />
        <div className="h-full relative custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="col-span-12">
              <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] xl:mt-[63px] mt-[59px] text-white leading-tight w-[90%]  4xl:w-[80%] 2xl:w-[80%] xl:w-[80%] lg:w-[96%]">
                {t('connectedTitle')}
              </h2>
            </div>
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-[100px] mt-[43px] ">
            <div className="col-span-12 flex xl:flex-row flex-col gap-5">
              {sapIntegrations.map((item, index) => (
                <div
                  key={index}
                  className="flex-1 lg:pt-[49px] lg:px-[40px] lg:pb-[40px] pt-[42px] px-[32px] pb-[48px] bg-white text-black">
                  <h3 className="4xl:text-[30px] xl:text-[24px] md:text-[20px] text-[18px] font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="xl:col-span-2 col-span-12"></div>
          </div>
        </div>
      </section>
      {/* conversational AI section */}
      <div className="bg-[#184671] 4xl:pt-[180px] 2xl:pt-[146px] xl:pt-[100px] pb-[68px]">
        <div className="custom-container xl:!pr-0">
          <div className="relative xl:h-[665px] h-auto xl:mt-20">
            <div className="relative group overflow-hidden xl:absolute xl:inset-0 h-[300px] xl:h-full w-full">
              <Image
                src="/images/services/rise-with-sap/professional-using-smartphone-outdoors.webp"
                alt={t('agentAlt')}
                fill
                style={{ objectFit: "cover", objectPosition: "68%" }}
                priority
                className="w-full h-full transform transition-transform duration-500 group-hover:scale-110 "
              />
            </div>
            <div className="grid xl:grid-cols-12 grid-cols-1 relative xl:absolute xl:top-0 xl:left-0 w-full">
              <div className="xl:col-span-5 col-span-12 xl:w-[720px] xl:h-[360px]">
                <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight bg-white text-black xl:p-12 p-5 xl:mt-0">
                  {t('conversationalTitle')}
                </h2>
              </div>
              <div className="xl:col-span-7 col-span-12" />
            </div>
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1 text-white xl:mt-[60px] mt-[28px]">
            <div className="xl:col-span-4 col-span-12">
              <h3 className="4xl:text-[40px] text-[22px] md:text-[26px] xl:text-[36px]  font-bold 4xl:w-[96%] 2xl:w-[99%] xl:w-[108%] leading-tight">{t('conversationalSubTitle')}</h3>
              <p className="4xl:text-[22px] md:text-[18px] text-[16px] font-normal leading-tight xl:mt-[30px] mt-[21px] w-[90%] lg:w-full">
                {t('conversationalDesc')}  </p>
              <button className="text-[20px] border-[1px] border-[solid] border-[#134874] font-semibold bg-white text-black p-3 transition duration-300 order-4 mt-16 xl:block hidden">
                <Link href={`/${locale}/products/agentchat`}>{t('knowMoreBtn')}</Link>
              </button>
            </div>
            <div className="xl:col-span-1 col-span-12">
            </div>
            <div className="xl:col-span-5 col-span-12 mt-[36px] xl:mt-0">
              <h3 className="4xl:text-[30px] xl:text-[24px] md:text-[20px] text-[18px] font-bold">{t('keyFeaturesTitle')} </h3>
              <ul className="list-disc space-y-5 text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] pl-5 marker:font-bold marker:text-2xl">
                {communicationBenefits.map((item, index) => (
                  <li key={index} className={index === 0 ? "mt-5" : ""}>
                    <span className="font-bold">{item.bold}</span> {item.text}
                  </li>
                ))}
              </ul>
              <button className="text-[20px] border-[1px] border-[solid] border-[#134874] font-semibold bg-white text-black p-3 transition duration-300 order-4 mt-16 xl:hidden block">
                <Link href={`/${locale}/products/agentchat`}>{t('knowMoreBtn')}</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* AI and data driven section */}
      <div className="custom-container xl:mt-[134px] mt-[37px]">
        <div className="grid lg:grid-cols-12 grid-cols-1 md:gap-[40px] xl:gap-[100px] items-center">
          {/* Image Column */}
          <div className="col-span-12 group overflow-hidden lg:col-span-5 relative h-[450px] md:h-[600px] md:w-[700px] lg:w-full md:mx-auto lg:h-full">
            <Image
              src="/images/services/rise-with-sap/hand-holding-glowing-sphere-vision.webp"
              alt={t('aiAlt')}
              fill
              style={{ objectFit: "cover", objectPosition: "35% 20%" }}
              priority
              className="w-full transform transition-transform duration-500 group-hover:scale-110 object-cover"
            />
          </div>
          {/* Content Column */}
          <div className="lg:col-span-7 col-span-12 text-black">
            <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight mt-8 lg:mt-0 w-[90%]  4xl:w-full xl:w-[104%]">
              {t('contentTitle')}
            </h2>
            <p className="mt-5 xl:mt-10  4xl:text-[22px] md:text-[18px] text-[16px] leading-tight font-normal xl:w-[90%]">
              {t('contentDesc')}
            </p>
            <UnorderedList arrName={aiData} ulClassName="list-disc marker:text-[#036CBC] pl-5 mt-6 xl:mt-10 font-semibold space-y-4" liClassName="text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]" />
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <section
        className="custom-container text-black xl:mt-[119px] mt-[72px] mb-[58px] xl:mb-[148px]">
        <ContactForm title={t('contactTitle')}
          className={"max-w-[80rem] font-normal text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight"} />
      </section>
    </div >
  );
}