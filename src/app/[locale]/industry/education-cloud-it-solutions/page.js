"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform";
import Link from "next/link";
import LearnMore from "../../components/learnMore";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Seo from "../../components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../messages/en/industry.json';
import esContent from '../../../../../messages/es/industry.json';
import frContent from '../../../../../messages/fr/industry.json';
import { changeLocalization } from "../../components/changeLocalization";
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export default function Page() {
  const t = useTranslations("education");
  const locale = useLocale();
  const realContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const { latestServices2, keyIndustryData, approachData, studentLeadData, selectionData, studentData, hyperData, lifelongData, selfData, s4HanaData, dynamicData, unifiedData, empoweringData, educationSolutions, schemaData } = realContent.education;

  const Services2 = () => {
    return (
      <div className="mx-auto text-black">
        <h2 className="text-black mb-6 4xl:text-[60px]  xl:text-[40px] md:text-[30px] text-[26px] max-[350px]:text-[22px] leading-tight">
          {t('rialtesTitle')}
        </h2>
        <h3 className="4xl:text-[42px]  2xl:text-[36px] xl:text-[30px] md:text-[26px] max-[390px]:text-[20px] xl:font-bold  font-medium mt-5 text-[22px] pr-10 xl:pr-0">
          {t('rialtesSubtitle')}
        </h3>
        <p className="mt-5 4xl:text-[22px]  xl:text-[18px] md:text-[18px] text-[16px] w-full pr-4 xl:pr-0 font-light leading-tight">
          {t('rialtesDesc')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8 mt-10">
          {latestServices2.map((services) => (
            <ServicesCard key={services.id} services={services} />
          ))}
        </div>
        <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
      </div>
    );
  };
  const ServicesCard = ({ services }) => (
    <div className="w-full h-full flex flex-col border border-[#707070] py-10 px-6 2xl:p-14 xl:p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
      <div className="flex-grow flex flex-col">
        <h3 className="mb-[15px] md:mb-[25px] 4xl:text-[24px]  xl:text-[20px]  text-[20px] max:[400px]:text-[18px] font-semibold leading-tight">
          {services.title}
        </h3>
        <p className="md:mb-[15px] mb-0 4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] leading-tight font-light">
          {services.description}
        </p>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={t("seoTitle")}
        description={t("seoDescription")}
        canonical={`https://www.rialtes.com/${locale}/industry/education-cloud-it-solutions/`}
      />
      <Script
        id="schema-education"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* breadcrumbs schema */}
      <BreadcrumbSchema />
      {/* hero section */}
      <section className="relative group overflow-hidden xl:pb-40 2xl:pb-20 pb-10 h-[400px] md:h-[530px]  4xl:h-[650px] 2xl:h-[500px] xl:h-[550px]">
        <div className="md:block hidden">
          <Image
            src="/images/education/digital-education-graduate-future-learning.webp"
            alt={t('bannerAlt')}
            fill
            priority
            sizes="100vw"
            className="transform transition-transform object-cover duration-500 group-hover:scale-110"
          />
        </div>
        <div className="md:hidden block">
          <Image
            src="/images/education/digital-education-graduate-future-learning-mobile.webp"
            alt={t('bannerAlt')}
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
            sizes="100vw"
          />
        </div>
        <div className="h-full relative custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-1  xl:mt-20  mt-[9rem]">
            <div className="xl:col-span-7 col-span-12">
              <h2 className="text-white 2xl:text-[24px] xl:text-[20px] md:text-[20px] text-[18px] font-bold mb-2 mt-10">
                {t('headerTitle')}
              </h2>
              <h1 className="text-white leading-tight xl:pr-[130px] xl:mt-10 4xl:text-[60px] xl:text-[40px] md:text-[30px]  text-[26px] ">
                {t('headerSubTitle')}
              </h1>
              <h3 className="4xl:text-[45px] xl:text-[36px] md:text-[26px]  xl:mt-10 mt-5 text-white font-bold text-[20px] leading-tight">
                {t('headerSubTitleOne')}
              </h3>
            </div>
            <div className="xl:col-span-5 col-span-12"></div>
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
          <div className="xl:col-span-11 col-span-12">
            <h2 className="4xl:text-[60px]   xl:text-[40px] md:text-[30px] max-[400px]:text-[24px] mt-5 leading-tight 4xl:w-[1222px] 2xl:w-[1150px] xl:w-[900px] lg:w-[800px] text-[26px] ">
              {t('educationTitle')}
            </h2>
            <p className="4xl:text-[22px] xl:text-[18px] md:text-[18px]  text-[16px] mt-10 lg:pr-32 leading-tight">
              {t('educationDesc')}
            </p>
            <p className="4xl:text-[22px] xl:text-[18px] md:text-[18px]  text-[16px] mt-5 xl:pr-32 leading-tight">
              {t('educationDescOne')}
            </p>
          </div>
          <div className="xl:col-span-1 col-span-12"></div>
        </div>
      </section>
      {/**Thought Leadership Section */}
      <section className="relative group xl:mt-20 mt-16 pb-20">
        <div className="xl:block hidden">
          <Image
            src="/images/education/business-professional-using-tablet.webp"
            alt={t('businessAlt')}
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/education/business-professional-using-tablet-mobile.webp"
            alt={t('businessAlt')}
            priority
            sizes="100vw"
            className="h-[343px] w-full"
            style={{ objectFit: "cover", objectPosition: "35% 5%" }}
            width={0}
            height={0}
          />
        </div>
        <div className="relative xl:mt-16 mt-8 custom-container">
          <div className="xl:pt-16">
            <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] max-[350px]:text-[22px]">
              {t('thoughtTitle')}
            </h2>
            <h3 className="4xl:text-[42px]  2xl:text-[36px] xl:text-[30px] md:text-[26px]  max-[350px]:text-[18px] mt-5 xl:font-bold font-medium text-[22px] ">
              {t('thoughtSubTitle')}
            </h3>
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:pt-10 pt-5">
            <div className="xl:col-span-5 col-span-12">
              <h3 className="4xl:text-[26px]  xl:text-[20px] text-[20px] font-bold max-[350px]:text-[18px]">
                {t('industryTitle')}
              </h3>
              <UnorderedList
                arrName={keyIndustryData}
                ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 text-[16px] md:text-[18px] 4xl:text-[20px] xl:text-[16px] xl:mt-5 mt-3 lg:pr-10"
                liClassName=""
              />
            </div>
            <div className="xl:col-span-5 col-span-12  bg-[#0A69B7] xl:absolute xl:left-[44%] left-0 mt-16  md:left-[30px]  xl:top-[22rem] text-white p-10 pb-12  xl:w-[500px]">
              <h3 className="4xl:text-[26px] xl:text-[20px]  text-[20px] font-bold ">
                {t('approachTitle')}
              </h3>
              <UnorderedList
                arrName={approachData}
                ulClassName="list-disc xl:space-y-5 space-y-3 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] xl:text-[16px] text-[16px] md:text-[18px] lg:pr-4 mt-5"
                liClassName=""
              />
            </div>
          </div>
        </div>
      </section>
      {/**Pre-Delivered Accelerators */}
      <section className={`custom-container xl:!pr-[142px]
        ${locale === "es"
          ? "xl:mt-[14rem] 4xl:mt-[14rem] 2xl:mt-[13rem]"
          : locale === "fr"
            ? "xl:mt-[16rem] 4xl:mt-[18rem] 2xl:mt-[18rem]"
            : "xl:mt-[15rem]"
        }`}>
        <div className="pb-16 bg-white">
          <Services2 />
        </div>
      </section>
      {/**Student Journey * */}
      <section className="relative group overflow-hidden h-auto 4xl:h-[1670px] 2xl:h-[1350px] xl:h-[1440px]  xl:mt-0">
        <div className="xl:block hidden">
          <Image
            src="/images/education/student-working-laptop-outdoors-city.webp"
            alt={t('studentALt')}
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/education/student-working-laptop-outdoors-city-mobile.webp"
            alt={t('studentALt')}
            fill
            style={{ objectFit: "cover", objectPosition: "35% 20%" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
            sizes="100vw"
          />
        </div>
        <div className="h-full relative custom-container">
          <div className="flex">
            <div className="relative 4xl:w-[1014px] 2xl:w-[980px] xl:w-[850px] xl:h-[1701px] pb-16 xl:pb-0">
              <div className="absolute xl:inset-0 bg-[#016FBE] mix-blend-multiply opacity-[0.9]"></div>
              <div className="relative bg-opacity-80 text-white z-10 rounded-lg">
                <div className=" pt-16  xl:pr-0 xl:pl-20">
                  <h2 className="leading-tight xl:pr-20 4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] max-[350px]:text-[22px]">
                    {t('journeyTitle')}
                  </h2>
                  <h3 className="4xl:text-[42px]  2xl:text-[36px] xl:text-[30px]  md:text-[26px] text-[22px] max-[350px]:text-[18px] xl:font-bold font-medium mt-10 leading-tight xl:pr-40 ">
                    {t('journeySubtitle')}
                  </h3>
                </div>
                <div>
                  <div className="xl:pl-20 flex items-center xl:gap-5 gap-3">
                    <h3 className="4xl:text-[36px] mt-10 2xl:text-[30px] xl:text-[28px]  md:text-[22px] text-[20px] font-bold  xl:pr-0 max-[350px]:text-[18px]">
                      {t('journeySubtitleOne')}
                    </h3>
                  </div>
                </div>
                <div className="xl:pl-20 xl:pr-0 4xl:pt-10 xl:pt-6 pt-5">
                  <h3 className="4xl:text-[30px] xl:text-[24px] md:text-[20px] text-[18px] xl:font-bold font-medium max-[350px]:text-[16px]">
                    {t('leadTitle')}
                  </h3>
                  <UnorderedList
                    arrName={studentLeadData}
                    ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] xl:mt-5 mt-3 xl:pr-64 font-light"
                    liClassName=""
                  />
                </div>
                <div className="xl:pl-20 pt-10">
                  <h3 className="4xl:text-[30px]  xl:text-[24px] md:text-[20px] text-[18px] font-medium max-[350px]:text-[16px]">
                    {t('selectionTitle')}
                  </h3>
                  <UnorderedList
                    arrName={selectionData}
                    ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px]  xl:text-[16px] md:text-[18px] text-[16px] mt-5 xl:pr-64"
                    liClassName=""
                  />
                </div>
                <div className="xl:pl-20 flex items-center xl:gap-5 gap-3 mt-10">
                  <h3 className="4xl:text-[36px] 2xl:text-[30px] xl:text-[28px]  md:text-[22px] text-[20px] font-bold max-[350px]:text-[18px]">
                    {t('studentTitle')}
                  </h3>
                </div>
                <div className="xl:pl-20  pt-5">
                  <UnorderedList
                    arrName={studentData}
                    ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px]  xl:text-[16px] text-[16px] md:text-[18px] xl:mt-5 xl:pr-64"
                    liClassName=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hyper and lifelong section */}
      <section className="relative xl:mt-16">
        <div className="grid xl:grid-cols-2 grid-cols-1 items-start relative z-10 gap-10">
          <div className="relative z-10">
            <div className="custom-container xl:!pr-12 xl:top-[3rem] top-[5rem] relative">
              <div className="relative group overflow-hidden">
                <Image
                  src="/images/education/students-collaborating-library-study-group.webp"
                  alt={t('markeAlt')}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="100vw"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div className="bg-[#C4EBEA] custom-container w-full xl:pr-20 xl:pb-20 pb-10 pt-[8rem] xl:pt-[5rem]">
              <h2 className="text-[28px] 4xl:text-[47px]  2xl:text-[36px] xl:text-[30px] md:text-[26px] font-medium leading-tight max-[400px]:text-[25px] max-[350px]:text-[20px] ">
                {t('hyperTitle')}
              </h2>
              <UnorderedList
                arrName={hyperData}
                ulClassName="list-disc mt-5 pl-5 space-y-4 text-[16px] 4xl:text-[20px]  xl:text-[16px] font-medium leading-tight marker:font-bold marker:text-2xl  md:text-[18px]"
                liClassName=""
              />
              <div className="mt-5">
                <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <div className="custom-container xl:pl-16  xl:mt-[20rem]">
              <div className="relative group overflow-hidden">
                <Image
                  src="/images/education/students-outdoor-collaborative-discussion.webp"
                  alt={t('studentAlt')}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="100vw"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div className="bg-[#F7E2D4] w-full xl:pb-20 pb-10 pt-[6rem] xl:!pl-12 mt-[-3rem]  custom-container">
              <h2 className="text-[28px] 4xl:text-[47px]  2xl:text-[36px] xl:text-[30px]  md:text-[26px] font-medium leading-tight 4xl:w-[608px] 2xl:w-[590px] xl:w-[550px] max-[400px]:text-[25px] max-[350px]:text-[22px]">
                {t('lifelongTitle')}
              </h2>
              <UnorderedList
                arrName={lifelongData}
                ulClassName="list-disc mt-5 pl-5 space-y-4 text-[16px] 4xl:text-[20px]  xl:text-[16px] font-medium leading-tight marker:font-bold marker:text-2xl md:text-[18px]"
                liClassName=""
              />
              <div className="mt-5">
                <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* salesforce and seamless section */}
      <section className="relative xl:mt-0 mt-[3rem]">
        <div className="grid xl:grid-cols-2 grid-cols-1 items-start relative z-10 gap-10">
          <div className="relative z-10">
            <div className="custom-container xl:!pr-12">
              <div className="relative group overflow-hidden">
                <Image
                  src="/images/education/business-team-meeting-office-discussion.webp"
                  alt={t('teamAlt')}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="100vw"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div className="bg-[#D6CFCF] custom-container w-full xl:pr-12 xl:pb-20 pb-10 pt-[5rem] -mt-14">
              <h2 className="text-[28px] 4xl:text-[47px]  2xl:text-[36px] xl:text-[30px]  md:text-[26px] font-medium leading-tight max-[400px]:text-[25px] max-[350px]:text-[20px]">
                {t('serviceTitle')}
              </h2>
              <h3 className="mt-10 font-bold 4xl:text-[40px] leading-tight  2xl:text-[34px] xl:text-[28px] md:text-[26px] text-[22px] max-[400px]:text-[21px] pr-10 xl:pr-0">
                {t('serviceSubtitle')}
              </h3>
              <UnorderedList
                arrName={selfData}
                ulClassName="list-disc mt-5 pl-5 space-y-4 text-[16px] 4xl:text-[20px] xl:text-[16px] font-medium leading-tight marker:font-bold marker:text-2xl md:text-[18px]"
                liClassName=""
              />
              <div className="mt-5">
                <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <div className="custom-container xl:pl-16 xl:mt-[14rem]">
              <div className="relative group overflow-hidden">
                <Image
                  src="/images/education/professional-woman-smartphone-city-street.webp"
                  alt={t('hanaAlt')}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="100vw"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div className="bg-[#E8DFC7] w-full xl:pb-20 pb-10 pt-[6rem] xl:!pl-16 mt-[-3rem] custom-container">
              <h2 className="text-[26px] 4xl:text-[47px]   2xl:text-[36px] xl:text-[30px] md:text-[26px] font-medium leading-tight max-[400px]:text-[25px] max-[350px]:text-[20px]  ">
                {t('seamlessTitle')}
              </h2>
              <h3 className="mt-10 font-bold 4xl:text-[40px] leading-tight 2xl:text-[34px] xl:text-[28px]  md:text-[26px] text-[22px]  max-[400px]:text-[21px] max-[350px]:text-[18px]">
                {t('seamlessSubtitle')}
              </h3>
              <UnorderedList
                arrName={s4HanaData}
                ulClassName="list-disc mt-5 pl-5 space-y-4 text-[16px] 4xl:text-[20px] xl:text-[16px] md:text-[18px] font-medium leading-tight marker:font-bold marker:text-2xl"
                liClassName=""
              />
              <div className="mt-5">
                <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* dynamic and unified section */}
      <section className="relative xl:mt-0 mt-[3rem]">
        <div className="grid xl:grid-cols-2 grid-cols-1 items-start relative z-10 gap-10">
          <div className="relative z-10">
            <div className="custom-container xl:!pr-12">
              <div className="relative group overflow-hidden">
                <Image
                  src="/images/education/woman-celebrating-online-shopping-success.webp"
                  alt={t('cloudAlt')}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="100vw"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div className="bg-[#F1D8D9] custom-container w-full xl:pr-20 xl:pb-20 pb-10 pt-[6rem] xl:pt-[6rem] -mt-16">
              <h2 className="text-[26px] 4xl:text-[47px]   2xl:text-[36px] xl:text-[30px] md:text-[26px]  max-[400px]:text-[25px] max-[350px]:text-[20px] font-medium leading-tight pr-10">
                {t('dynamicTitle')}
              </h2>
              <h3 className="xl:mt-10 mt-5 font-bold 4xl:text-[40px] leading-tight  2xl:text-[34px] xl:text-[28px]  text-[22px] max-[350px]:text-[18px] max-[400px]:text-[21px]">
                {t('dynamicSubtitle')}
              </h3>
              <UnorderedList
                arrName={dynamicData}
                ulClassName="list-disc mt-5 pl-5 space-y-4 text-[16px] 4xl:text-[20px] xl:text-[16px] font-medium leading-tight marker:font-bold marker:text-2xl md:text-[18px]"
                liClassName=""
              />
              <div className="mt-5">
                <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <div className="custom-container xl:pl-16  xl:mt-[14rem]">
              <div className="relative group overflow-hidden">
                <Image
                  src="/images/education/male-graduate-diploma-university-campus.webp"
                  alt={t('campusAlt')}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="100vw"
                  width={0}
                  height={0}
                />
              </div>
            </div>
            <div className="bg-[#C7E8E9] w-full xl:pb-20 pb-10 pt-[6rem] xl:!pl-16 mt-[-3rem] custom-container">
              <h2 className="text-[26px] 4xl:text-[47px]  2xl:text-[36px] xl:text-[30px]  md:text-[26px]   max-[350px]:text-[20px]  font-medium  leading-tight">
                {t('unifiedTitle')}
              </h2>
              <h3 className="xl:mt-10 mt-5 font-bold 4xl:text-[40px] md:text-[26px] leading-tight 2xl:text-[34px] xl:text-[28px]  text-[22px]  max-[400px]:text-[21px] max-[350px]:text-[18px]">
                {t('unifiedSubtitle')}
              </h3>
              <UnorderedList
                arrName={unifiedData}
                ulClassName="list-disc mt-5 pl-5 space-y-4 text-[16px] 4xl:text-[20px] xl:text-[16px] font-medium leading-tight marker:font-bold marker:text-2xl md:text-[18px]"
                liClassName=""
              />
              <div className="mt-5">
                <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* empowering section */}
      <section className="relative xl:mt-0 mt-[3rem]">
        <div className="grid xl:grid-cols-2 grid-cols-1 items-start relative z-10 gap-10">
          <div className="relative z-10">
            <div className="custom-container xl:!pr-12">
              <div className="relative group overflow-hidden">
                <Image
                  src="/images/education/digital-learning-brain-technology-concept.webp"
                  alt={t('empowerAlt')}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="100vw"
                  width={0}
                  height={0}
                />
              </div>
            </div>

            <div className="bg-[#C4E2FF] custom-container w-full xl:pr-20 xl:pb-20 pb-10 pt-[7rem] xl:pt-[6rem] -mt-16">
              <h2 className="text-[28px] 4xl:text-[47px]  2xl:text-[36px] xl:text-[30px] md:text-[26px]  max-[400px]:text-[25px] max-[350px]:text-[20px]  font-medium leading-tight  xl:pr-0">
                {t('empoweringTitle')}
              </h2>
              <h3 className="mt-5 font-bold 4xl:text-[40px] 2xl:text-[34px] xl:text-[28px]   text-[22px] leading-tight  max-[400px]:text-[21px] max-[350px]:text-[18px]">
                {t('empoweringSubtitle')}
              </h3>
              <UnorderedList
                arrName={empoweringData}
                ulClassName="list-disc mt-5 pl-5 space-y-4 text-[16px] 4xl:text-[20px] xl:text-[16px] font-medium leading-tight marker:font-bold marker:text-2xl md:text-[18px]"
                liClassName=""
              />
              <div className="mt-5">
                <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* agentchat section */}
      <section className="xl:mt-32 mt-16 ">
        <div className="relative h-[2750px] md:h-[1000px] group md:overflow-hidden">
          <div className="md:block hidden">
            <Image
              src="/images/education/ai-powered-mobile-learning-technology.webp"
              alt={t('aiAlt')}
              fill
              priority
              className="transform transition-transform duration-500 group-hover:scale-110"
              style={{ objectFit: "cover", objectPosition: "35% 20%" }}
              sizes="100vw"
            />
          </div>
          <div className="md:hidden block">
            <Image
              src="/images/education/ai-powered-mobile-learning-technology-mobile.webp"
              alt={t('aiAlt')}
              fill
              priority
              className="!h-full"
              sizes="100vw"
            />
          </div>
        </div>
        <div className="bg-[#8792D9] md:pb-40 pb-16 mt-[-147rem] md:mt-0">
          <div className="text-white h-full relative custom-container">
            <div className="grid md:grid-cols-12 grid-cols-1 text-white">
              <div className="md:col-span-8 col-span-12 md:pr-20">
                <h2 className="text-[26px] 4xl:text-[50px]  xl:text-[40px] md:text-[30px]  text-white leading-tight md:pr-10 font-medium max-[400px]:text-[26px] max-[350px]:text-[24px]">
                  <span className="font-bold 4xl:text-[70px]  xl:text-[40px]  md:text-[50px] text-[40px] max-[400px]:text-[36px] max-[350px]:text-[34px]">
                    {t('agentchatTitle')}
                  </span>
                  <br></br>{t('agentchatSubtitle')}
                </h2>
              </div>
              <div className="md:col-span-4 col-span-12 mt-10 md:mt-0">
                <p className="4xl:text-[22px]  xl:text-[18px] md:text-[18px] text-[16px]  xl:pr-0 leading-tight font-light">
                  {t('agentchatDesc')}
                </p>
              </div>
            </div>

            <div className="xl:mt-20 mt-10">
              <h3 className="2xl:text-[30px] xl:text-[24px] md:text-[26px] text-[24px]">
                {t('keyTitle')}
              </h3>
              <div className="flex flex-col md:flex-row xl:flex-row mt-10 xl:gap-20 gap-8 mb-16">
                <div className="flex flex-col xl:flex-row  xl:items-start gap-4 xl:gap-0 xl:w-1/2">
                  <Image
                    className="xl:w-[200px] xl:h-[200px] w-[156px] h-[156px]"
                    src="/images/education/cloud-automation-integration-icon.svg"
                    alt={t('autoAlt')}
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                  />
                  <div className="mt-4 xl:mt-0 xl:ml-12">
                    <h3 className="4xl:text-[24px] xl:text-[20px] md:text-[22px] text-[20px]   xl:text-left pr-16 xl:pr-0 leading-tight">
                      {t('keySubtitle')}
                    </h3>
                    <p className="4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px] mt-3  xl:text-left  xl:pr-0 leading-tight font-light">
                      {t('keyDesc')}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  xl:flex-row  xl:items-start gap-4 xl:gap-0 xl:w-1/2 mt-10 md:mt-0 xl:mt-0">
                  <Image
                    className="xl:w-[200px] xl:h-[200px] w-[156px] h-[156px]"
                    src="/images/education/smart-manufacturing-automation-icon.svg"
                    alt={t('smartAlt')}
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                  />
                  <div className="mt-4 xl:mt-0 xl:ml-12">
                    <h3 className="4xl:text-[24px]  xl:text-[20px] md:text-[22px] text-[20px] pr-16 xl:pr-0 xl:text-left leading-tight ">
                      {t('aiTitle')}
                    </h3>
                    <p className="4xl:text-[22px]  xl:text-[18px] md:text-[18px] text-[16px] mt-3  xl:pr-0  xl:text-left leading-tight font-light">
                      {t('aiDesc')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row xl:flex-row mt-10 xl:gap-20 gap-8 mb-16">
                <div className="flex flex-col xl:flex-row  xl:items-start gap-4 xl:gap-0 xl:w-1/2 mt-10 xl:mt-0">
                  <Image
                    className="xl:w-[200px] xl:h-[200px] w-[156px] h-[156px]"
                    src="/images/education/system-integration-communication-icon.svg"
                    alt={t('systemAlt')}
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                  />
                  <div className="mt-4 xl:mt-0 xl:ml-12">
                    <h3 className="4xl:text-[24px] xl:text-[20px] md:text-[22px] text-[20px] pr-16 xl:pr-0 xl:text-left leading-tight">
                      {t('scalableTitle')}
                    </h3>
                    <p className="4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px] mt-3 xl:pr-0 xl:text-left leading-tight font-light">
                      {t('scalableDesc')}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col xl:flex-row  xl:items-start gap-4 xl:gap-0 xl:w-1/2 mt-10 xl:mt-0">
                  <Image
                    className="xl:w-[200px] xl:h-[200px] w-[156px] h-[156px]"
                    src="/images/education/secure-communication-encryption-icon.svg"
                    alt={t('leadAlt')}
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                  />
                  <div className="mt-4 xl:mt-0 xl:ml-12">
                    <h3 className="4xl:text-[24px] xl:text-[20px] md:text-[22px] text-[20px] pr-16 xl:pr-0 xl:text-left leading-tight">
                      {t('insightsTitle')}
                    </h3>
                    <p className="4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px] mt-3  xl:pr-0 xl:text-left leading-tight font-light">
                      {t('insightsDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="relative">
          <div className="h-full xl:mr-[142px] custom-container z-40">
            <p className={`4xl:text-[26px]  xl:text-[20px]  md:text-[20px]  text-[18px] bg-[#0C8AD4]  p-5 xl:p-8  pl-6  text-white max-[360px]:mt-[-70px] max-[414px]:mt-[-60px]  md:mt-[-50px] xl:mt-[-55px] 4xl:mt-[-65px]  xl:w-[80%] leading-tight font-light max-[400px]:text-[17px]
              ${locale === "es"
                ? "mt-[-60px]"
                : locale === "fr"
                  ? "mt-[-60px]"
                  : "mt-[30px]"
              }`}

            >
              {t('withDesc')}
            </p>
          </div>
          <div className="mt-10 custom-container ">
            <button className="bg-[#134874]  hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-white py-3 text-[16px] 4xl:text-[22px] xl:text-[18px] md:text-[18px]   px-8 transition duration-300 order-4 mt-6">
              <Link href={`/${locale}/products/agentchat`}>   {t('knowMore')}</Link>
            </button>
          </div>
        </div>
      </section>
      {/* related section */}
      <section>
        <div className="py-32 xl:mt-5 md:mt-[-80px] mt-[-40px]">
          <div className="relative custom-container">
            <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-16">
              <div className="xl:col-span-5 col-span-12 relative group overflow-hidden">
                <div className="xl:block hidden">
                  <Image
                    src="/images/education/digital-education-technology-elearning.webp"
                    alt={t('solutionAlt')}
                    fill
                    priority
                    sizes="100vw"
                    className="w-full object-cover origin-center transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                  />
                </div>
                <div className="xl:hidden block">
                  <Image
                    src="/images/education/digital-education-technology-elearning.webp"
                    alt={t('solutionAlt')}
                    priority
                    sizes="100vw"
                    className="w-full h-full "
                    width={0}
                    height={0}

                  />
                </div>
              </div>
              <div className="xl:col-span-5 col-span-12 text-black">
                <h2 className="4xl:text-[60px]  xl:text-[40px] md:text-[30px] text-[26px] max-[350px]:text-[22px] font-light mb-8 mt-10 xl:mt-0">
                  {t('relatedTitle')}
                </h2>
                <div className="space-y-10">
                  {educationSolutions.map((item, index) => (
                    <div key={index}>
                      <Link
                        href={item.href}
                        className="text-[#0C8AD4] font-semibold underline 4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[18px] pr-10 xl:pr-0"
                      >
                        {item.title}
                      </Link>
                      <p className="text-gray-700 mt-2 4xl:text-[20px]  xl:text-[16px] md:text-[18px] text-[16px] xl:pr-0">
                        {item.description}
                      </p>
                      {index !== educationSolutions.length - 1 && (
                        <hr className="mt-8 border-gray-300 border-1" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <div className="custom-container text-black xl:py-20 pb-10">
        <ContactForm
          title={t('contactTitle')}
          subtitle={t('contactSubTitle')}
          subtitle1={t('contactSubtitleOne')}
          className={
            "max-w-[62rem] leading-tight  4xl:text-[60px]   xl:text-[40px] md:text-[30px] text-[26px] max-[400px]:text-[24px]"
          }
        />
      </div>
    </div>
  );
}
