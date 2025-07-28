"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/services.json';
import esContent from '../../../../../../messages/es/services.json';
import Link from "next/link";
import LearnMore from "@/app/[locale]/components/learnMore";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Retail Business Consulting Services",
  "alternateName": "RetailPlus by Rialtes",
  "url": "https://www.rialtes.com/services/lob/retail-plus-business-consulting-omnichannel-solutions/",
  "description": "Retail+ by Rialtes offers intelligent, scalable, and AI-powered retail transformation services for B2B and B2C enterprises across industries such as fashion, electronics, furniture, luxury, food, wellness, and more. Services include advisory, solution design, implementation, integration, quality assurance, and ongoing support using Salesforce and SAP platforms.",
  "provider": {
    "@type": "Organization",
    "name": "Rialtes",
    "url": "https://www.rialtes.com"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Canada"
    },
    {
      "@type": "Country",
      "name": "India"
    },
    {
      "@type": "Country",
      "name": "Singapore"
    }
  ],
  "serviceType": "Retail Business Consulting",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Retail+ Key Offerings",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Advisory & Strategy Consulting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solution Design & Architecture"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Implementation & Rollout"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quality Assurance & Testing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Systems Integration & Automation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Post Go-Live Optimization & Support"
        }
      }
    ]
  }
}

export default function page() {
  const t = useTranslations('retailPlus')
  const locale = useLocale();
  const content = locale === 'es' ? esContent : enContent;
  const { retailServices, retailVerticals, salesforceSolutions, whyChooseData, rialChat } = content.retailPlus;
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Retail Business Consulting Services and Omnichannel Solutions | Rialtes"
        description="Retail+ by Rialtes offers expert-led Retail Business Consulting Services and AI-powered Omnichannel Solutions. Start your retail transformation now."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/services/lob/retail-plus-business-consulting-omnichannel-solutions/"
      />
      <Script
        id="schema-retail-plus"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="relative group overflow-hidden">
        <div className="xl:block hidden">
          <Image
            src="/images/industry/retail/banner.webp"
            alt="auto-sense-banner"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/industry/retail/bannerMob.webp"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative custom-container pb-40 md:pb-[30rem] xl:pb-40 4xl:pb-40">
          <div className="grid md:grid-cols-12 grid-cols-1 4xl:mt-20 ">
            <div className="lg:col-span-5 2xl:col-span-5 4xl:col-span-7 col-span-12 mt-28  2xl:pr-[34px]">
              <h3 className="text-white xl:text-[24px] text-[18px] font-bold mb-2">{t('headerTitle')}</h3>
              <h1 className="text-white leading-tight text-[26px] xl:text-[40px] 4xl:text-[60px] mt-5 pr-32 xl:pr-0 4xl:pr-0 md:pr-64">
                {t('headerSubTitle')}
              </h1>
            </div>
            <div className="xl:col-span-7 col-span-12">
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 custom-container">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-10 col-span-12 ">
            <h2 className="leading-tight text-[26px] xl:text-[45px] 4xl:text-[60px] 4xl:pr-10 xl:pr-24">
              {t('empoweringTitle')}
            </h2>
            <p className="4xl:text-[22px] xl:text-[18px]  mt-5 pr-8 xl:pr-0">
              {t('empoweringDesc1')}
            </p>
            <p className="4xl:text-[22px] xl:text-[18px] mt-5 pr-8 xl:pr-0">
              {t('empoweringDesc2')}
            </p>
          </div>
          <div className="xl:col-span-2 col-span-12"></div>
        </div>
      </section>
      {/* comprehensive section */}
      <section className="relative  overflow-hidden mt-20 ">
        <div className="xl:block hidden w-full aspect-[20/0]">
          <Image
            src="/images/industry/retail/comprehensive.webp"
            alt="comprehensive image"
            fill
            priority
            sizes="100vw"
            className="w-full h-full"
          />
        </div>

        <div className="xl:hidden block w-full aspect-[3/0]">
          <Image
            src="/images/industry/retail/compre-mobile.webp"
            alt="comprehensive image"
            priority
            sizes="100vw"
            className="w-full h-full"
            fill
          />
        </div>
        <div
          className="custom-container max-md:px-0">
          <div className="relative p-6 4xl:w-[828px] xl:w-[630px] 4xl:pb-32 pb-20 xl:pb-10  mt-[25rem] md:mt-[60rem] xl:mt-0">
            <div className="absolute inset-0 bg-[#5D5D5D] mix-blend-multiply"></div>
            <div className="relative  bg-opacity-80 text-white z-10 p-3 xl:pl-8 rounded-lg">
              <h2 className="leading-tight 4xl:w-[80%] xl:w-[75%] pr-20 xl:pr-0 xl:text-[40px] 4xl:text-[60px] text-[26px]">
                {t('comprehensiveTitle')}
              </h2>
              <h3 className="4xl:text-[36px] text-[22px] mt-5">
                {t('comprehensiveSubTitle')}
              </h3>
              <h3 className="mt-5 text-[20px] 4xl:text-[30px]">{t('keyTitle')}</h3>
              <ul className="list-disc leading-tight 4xl:space-y-5 space-y-2 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] text-[16px] 4xl:mt-10 mt-3 4xl:pr-16">
                {retailServices.map((service, index) => (
                  <li key={index}>
                    <span className="font-bold">{service.title} </span>
                    {service.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" />
      {/* deep industry section */}
      <section className="bg-[#E8E8E8] xl:pb-32 pb-48">
        <div className="custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="xl:col-span-9 col-span-12 xl:mt-32 mt-20">
              <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px] xl:pr-32 4xl:pr-0">
                {t('deepIndustryTitle')}
              </h2>
              <h3 className="4xl:text-[36px] text-[22px] mt-5 leading-tight font-semibold pr-10 xl:pr-64 4xl:pr-0">
                {t('deepIndustrySubTitle')}
              </h3>
            </div>
            <div className="xl:col-span-2 col-span-12"></div>
          </div>
          <div className="grid xl:grid-cols-4 grid-cols-2 xl:gap-10 gap-16 mt-16">
            {retailVerticals.map((item, index) => (
              <div key={index}>
                <Image
                  className="4xl:w-[138px] 4xl:h-[138px] w-[75px] h-[75px]"
                  src={item.icon}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                />
                <h3 className={`mt-5 font-semibold 4xl:text-[30px] xl:text-[20px] leading-tight ${item.paddingClass}`}>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="grid xl:grid-cols-12 grid-cols-1 custom-container">
        <div className="xl:col-span-10 col-span-12 bg-[#163055] p-8 relative bottom-20">
          <h3 className="4xl:text-[26px] text-[20px] text-white font-normal leading-tight pr-5 xl:pr-0 4xl:pr-0">
            {t('deepIndustryBlueBox')}
          </h3>
        </div>
        <div className="xl:col-span-2 col-span-12"></div>
      </div>
      <section className="custom-container md:pr-0 grid xl:grid-cols-12 grid-cols-1 sm:mt-4 max-md:px-0">
        <div className="xl:col-span-6 order-1 xl:order-2">
          <Image
            className="w-full h-full"
            src="/images/industry/retail/salesforce.webp"
            alt="Taking the lead"
            width={0}
            height={0}
            priority
            sizes="100vw"
          />
        </div>
        <div className="xl:col-span-6 bg-[#006FBE] 4xl:pt-20 pt-10 px-10 4xl:px-16 xl:px-16 xl:pr-10 text-white order-2 xl:order-1 pb-20 ">
          <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px]">{t('saleforceTitle')}</h2>
          <h3 className="4xl:text-[42px] font-semibold text-[22px] mt-5 leading-tight xl:pr-32 4xl:pr-24">
            {t('saleforceSubTitle1')}
          </h3>
          <h3 className="mt-5 leading-tight 4xl:text-[30px] text-[20px] xl:pr-24 4xl:pr-32">{t('saleforceSubTitle2')}</h3>
          <p className="mt-5 font-normal 4xl:text-[20px] xl:text-[16px] xl:pr-0 4xl:pr-[95px]">
            {t('saleforceDesc')}
          </p>
          <h3 className="mt-5 4xl:text-[30px] text-[20px]">{t('sapHanaTitle')}</h3>
          <p className="mt-5 font-normal 4xl:text-[20px] xl:text-[16px] xl:pr-0 4xl:pr-[100px]">
            {t('sapHanaDesc')}
          </p>
        </div>
      </section>
      {/* exelona section */}
      <section className="custom-container mt-16 max-lg:px-0">
        <div className="lg:block hidden">
          <Image
            className="w-full"
            src="/images/industry/retail/exelona-desk.webp"
            alt="Taking the lead"
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </div>
        <div className="lg:hidden block">
          <Image
            className="w-full"
            src="/images/industry/retail/exelona-mobile.webp"
            alt="Taking the lead"
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </div>
      </section>
      <section className="custom-container text-white lg:mt-[-100px] mt-[-120px] relative z-20">
        <div className="bg-[#6E6E6E] lg:mr-20 lg:p-8 mb-2 md:p-8 sm:p-8 p-8 max-md:mr-0 max-sm:mb-8 pb-20 xl:pb-0 4xl:pb-0">
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="xl:col-span-6 col-span-12 xl:pl-14 xl:mt-10 ">
              <h2 className="leading-tight 4xl:text-[57px] xl:text-[40px] text-[26px] xl:pr-10 4xl:pr-0">
                {t('specializedTitle')}
              </h2>
            </div>
            <div className="xl:col-span-1 col-span-12 pl-16"></div>
            <div className="xl:col-span-5 col-span-12">
              <h3 className="xl:text-[42px] text-[22px] mt-5 xl:mt-10">
                {t('specializedSubTitle')}
              </h3>
              <p className="mt-5 font-normal xl:pr-16 4xl:text-[20px] text-[16px] leading-tight">
                {t('specializedDesc')}
              </p>
              <div className="bottom-0 xl:relative mb-[-31px] absolute xl:mt-[41px] mt-12">
                <LearnMore />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* advance AI section */}
      <section className="xl:mt-16">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-6 col-span-12 mt-16 xl:mb-16 mb-[-20rem] z-10 flex justify-center lg:justify-start">
            <Image
              className="mx-auto md:mx-0  w-full max-md:px-[35px] xl:h-full h-[391px]"
              src="/images/industry/retail/advance-ai.webp"
              alt="advance-ai image"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
          <div className="bg-[#073259] text-white xl:col-span-6 px-16 xl:px-0  4xl:pr-[16rem] col-span-12 xl:ml-[-150px] xl:pl-[200px] 4xl:pl-[240px] xl:pr-[40px] xl:pb-32 pb-[6rem]  lg:pr-12 z-5">
            <h2 className="xl:mt-20 pt-[24rem] xl:pt-0 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('advanceAiTitle')}</h2>
            <h3 className="4xl:text-[42px] text-[22px] xl:text-[32px] font-semibold xl:mt-10 mt-5 leading-tight">
              {t('advanceAiSubTitle')}
            </h3>
            <p className="mt-5 font-normal 4xl:text-[20px] xl:text-[16px] text-[16px] xl:pr-20 leading-tight">
              {t('advanceAiDesc')}
            </p>
            <hr className="mt-10"></hr>
            <h3 className="4xl:text-[42px] text-[22px] xl:text-[32px] font-semibold mt-10 leading-tight">
              {t('aiDrivenTitle')}
            </h3>
            <p className="mt-5 font-light 4xl:text-[20px] xl:text-[16px] text-[16px] xl:pr-24 4xl:pr-16 leading-tight">
              {t('aiDrivenDesc')}
            </p>
            <div className="relative">
              <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" />
            </div>
          </div>
        </div>
      </section>
      {/* related section */}
      <section className="custom-container pt-16">
        <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px]">{t('relatedTitle')}</h2>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 gap-16 mt-5 sm:w-[80%] md:w-full">
          {salesforceSolutions.map((item, index) => (
            <div
              key={index}
              className="border relative border-[#707070] p-10 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
              <h3 className="text-[#0A6BB8] xl:pr-20 4xl:pr-8 font-semibold leading-tight 4xl:text-[30px] xl:text-[20px]">{item.title}</h3>
              <p className="4xl:text-[24px] text-[16px] mt-5 xl:pr-10 font-normal mb-[40px] leading-tight">{item.description}</p>
              <div className="absolute bottom-[-20px]">
                <LearnMore />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* realchat section */}
      <section className="xl:mt-32 mt-20 custom-container lg:pr-0 pl-0 max-md:px-0 ">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="col-span-4 flex justify-center xl:block">
            <Image
              className="w-full  h-auto 4xl:h-[671px] xl:h-[451px] mt-16 relative mx-auto xl:mx-0 max-md:px-[35px]"
              src="/images/industry/retail/mobile-re.webp"
              alt="RialChat image"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
          <div className="col-span-8 bg-[#646464] text-white 4xl:ml-[-25rem] xl:ml-[-20rem] 4xl:pr-80  pb-20 xl:pb-0 px-[35px] 4xl:pl-[30rem] xl:pl-[24rem] xl:pr-[10rem] xl:mt-0 mt-[-300px] xl:h-[630px] 4xl:h-[865px]">
            <h2 className=" xl:mt-10 mt-80 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('realChatTitle')}</h2>
            <h3 className="4xl:text-[42px] text-[22px] mt-4 font-semibold leading-tight">
              {t('realChatSubTitle')}
            </h3>
            <p className="mt-5 font-normal 4xl:pr-10 leading-tight 4xl:text-[20px] text-[16px]">
              {t('rialChatDesc')}
            </p>
            <UnorderedList arrName={rialChat} ulClassName="list-disc  4xl:space-y-3 leading-tight marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] text-[16px] mt-5 mb-20 4xl:pr-10" liClassName="" />
          </div>
        </div>
      </section>
      <div className="grid grid-cols-12">
        <div className="xl:col-span-3"></div>
        <div className="xl:col-span-7 mx-[35px] z-[9] xl:mx-0 4xl:ml-[-54px] 2xl:ml-[-100px] 3xl:ml-[-20px]  xl:ml-[-165px] 4xl:mt-[-130px] col-span-12 relative bg-[#163055] p-8 xl:mt-[-115px] mt-[-100px]">
          <h3 className="4xl:text-[26px] text-[20px] text-white font-normal leading-tight">
            {t('rialChatBlueBox')}
          </h3>
        </div>
      </div>
      {/* why choose section */}
      <section className="relative h-[1026px] xl:h-[870px] overflow-hidden mt-[-135px] xl:mt-0 ">
        <div className="xl:block hidden">
          <Image
            src="/images/industry/retail/why.webp"
            alt="GROW with SAP"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/industry/retail/why-mobile.webp"
            alt="GROW with SAP"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div
          className="h-full mx-[35px] xl:mx-0 xl:ml-[280px] xl:mr-[156px] md:ml-[100px]">
          <div className="flex justify-end xl:mt-32 mt-[24rem]">
            <div className="relative p-10 4xl:w-[720px] 4xl:h-[620px] xl:w-[560px] xl:h-[495px]">
              <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
              <div className="relative bg-opacity-80 text-white z-10 xl:p-4 rounded-lg">
                <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">
                  {t('whyChooseTitle')}
                </h2>
                <h3 className="4xl:text-[42px] text-[22px] font-semibold mt-5">
                  {t('whyChooseSubTitle')}
                </h3>
                <UnorderedList arrName={whyChooseData} ulClassName="list-disc 4xl:space-y-3 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] text-[16px] mt-5" liClassName="" />
                <div className="mt-[60px] 4xl:mt-[18px] xl:mt-[30px] absolute">
                  <LearnMore />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact form */}
      <div className="mx-[35px] custom-container text-black py-16">
        <ContactForm
          title={t('contactTitle')}
          className={"xl:max-w-[72%] leading-tight  4xl:text-[59px] text-[26px] xl:text-[40px]"} />
      </div>
    </div>
  );
}
