

"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/[locale]/components/Seo";
import Link from "next/link";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Script from "next/script";
import { changeLocalization } from "../../components/changeLocalization";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/services.json';
import esContent from '../../../../../../messages/es/services.json';
import LearnMore from "@/app/[locale]/components/learnMore";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Grow with SAP - Cloud ERP Implementation Services",
  "alternateName": "VoyagerNext by Rialtes",
  "url": "https://www.rialtes.com/services/business-transformation/grow-with-sap-services/",
  "description": "Rialtes provides end-to-end Grow with SAP transformation services, including SAP Cloud ERP implementation leveraging SAP S/4HANA Cloud, SAP Activate methodology, SAP Signavio, and SAP BTP. Services include implementation, migration from SAP B1, integration with Salesforce, and support for AI, automation, and digital procurement.",
  "provider": {
    "@type": "Organization",
    "name": "Rialtes",
    "url": "https://www.rialtes.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rialtes.com/images/homepage/logo.svg"
    },
    "sameAs": [
      "https://www.linkedin.com/company/rialtes-technologies-llc/",
      "https://www.youtube.com/@rialtes"
    ]
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
  "serviceType": [
    "Grow with SAP Services",
    "SAP S/4HANA Cloud Public Edition Implementation",
    "SAP B1 to S/4HANA Migration",
    "SAP Activate & SAP Signavio Enablement",
    "SAP SuccessFactors Integration",
    "SAP Ariba and Procurement Solutions",
    "SAP BTP Customization and Automation",
    "SAP CPI Integration",
    "Salesforce and SAP Integration",
    "Conversational AI for ERP (AgentChat)",
    "AI and Data Cloud Enablement"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "VoyagerNext Offerings",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SAP License Advisory",
          "description": "Guidance on SAP licensing for cost-effectiveness and scalability."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solution Design & Implementation",
          "description": "Design and implement SAP S/4HANA Cloud aligned with industry best practices."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "System Integration & Customization",
          "description": "Integrate SAP with legacy systems and customize using SAP BTP and CPI."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Post Go-Live Support & Optimization",
          "description": "Hypercare, continuous improvement, and performance monitoring post go-live."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quality Assurance & User Training",
          "description": "Ensure system readiness with testing and user enablement services."
        }
      }
    ]
  },
  "audience": {
    "@type": "Audience",
    "audienceType": [
      "Mid-market Enterprises",
      "Growing Businesses",
      "Enterprise IT Teams",
      "SAP Business One Customers",
      "Digital Transformation Leaders"
    ]
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/services/business-transformation/grow-with-sap-services/"
  }
}
export default function Page() {
  const t = useTranslations('growWithSap')
  const locale = useLocale();
  const content = locale === 'es' ? esContent : enContent;
  const { services, cardsData, benefits, sapBenefits, rialtesSapData, sapIntegrationPoints, sapInnovationList, featureHighlights, futureProofingData, keyPhasesData } = content.growWithSap;
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Grow with SAP Solutions by a Trusted SAP Partner | Rialtes"
        description="Grow with SAP solutions that deliver measurable business success, powered by Rialtes—a trusted SAP partner driving enterprise-ready innovation and growth."
        keywords="home, website, welcome"
        canonical="https://www.rialtes.com/services/business-transformation/grow-with-sap-services/"
      />
      <Script
        id="schema-grow"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* hero section */}
      <section className="relative group overflow-hidden pb-20">
        <div className="xl:block hidden">
          <Image
            src="/images/services/grow-with-sap/AdobeStock_1335365875.webp"
            alt="grow with sap banner"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="transform transition-transform duration-500 group-hover:scale-110 objet-[49%_20%]"
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/services/grow-with-sap/AdobeStock_1335365875 (1).webp"
            alt="grow with sap banner"
            fill
            priority
            className="transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="relative custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 mt-20 mx-auto">
            <div className="xl:col-span-7 col-span-12 pr-5 ">
              <h3 className="text-white text-[20px] xl:text-[24px] font-bold mb-2 break-words ">
                {t('headerTitle')}
              </h3>
              <h2 className="text-white  leading-tight break-words 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[81%] 2xl:w-[73%] 4xl:w-[100%]">
                {t('headerSubTitle')}
              </h2>
              <h3 className="mt-8 text-[18px] xl:text-[23px] 4xl:text-[35px]  text-white font-medium leading-tight xl:font-semibold max-w-full break-words pr-24">
                {t('headerSubTitle2')}
              </h3>
              <div className="md:w-32 w-20 pt-6 mt-5">
                <Image
                  src="/images/sap-consulting/SAP-partner-logo.webp"
                  alt="SAP Partner Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
            </div>
          </div>
        </div>
      </section>

      {/* page description section */}
      <section className="mt-16 custom-container">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="4xl:col-span-10 xl:col-span-9 col-span-12">
            <h1 className="leading-tight 4xl:text-[56px] xl:text-[40px] md:text-[26px] xl:mb-8  xl:w-[90%] 2xl:w-[80%] 4xl:w-[100%]">
              {t('pageDescTitle')}
            </h1>
            <p className="text-[16px] xl:text-[18px] 4xl:text-[22px] leading-tight mt-5">{t('pageDesc1')}  </p>
            <p className="text-[16px] xl:text-[18px] 4xl:text-[22px] leading-tight mt-5">{t('pageDesc2')} </p>
          </div>
          <div className="xl:col-span-4 col-span-12">
          </div>
        </div>
      </section>

      {/* services section */}
      <section>
        <div className="custom-container">
          <div className="grid xl:grid-cols-3 grid-cols-1 mt-16 gap-x-16 gap-y-10">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-10 xl:gap-5">
                <Image
                  className="xl:w-[138px] xl:h-[138px] w-[75px] h-[75px]"
                  src={service.img}
                  alt={service.text}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                />
                <p className="4xl:text-[26px] xl:text-[22px] text-[20px] leading-tight font-medium">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="custom-container max-md:px-0">
          <p className="4xl:text-[26px] xl:text-[20px] text-[18px] font-normal bg-[#0C8AD4] xl:pr-[270px] p-10 pl-10 text-white mt-20 leading-tight">{t('servicesBlueBox')} </p>
        </div>
      </section>
      {/* why now section */}
      <section className="relative  flex flex-col xl:flex-row-reverse mt-16 custom-container !pr-0 max-lg:px-0">
        <div
          className="relative group overflow-hidden pb-16">
          <div className="xl:block hidden">
            <Image
              src="/images/services/grow-with-sap/GWS.webp"
              alt="Grow with SAP: Why Now?"
              fill
              priority
              className="transform transition-transform duration-500 group-hover:scale-110 object-[35%_20%]"
            />
          </div>
          <div className="xl:hidden block">
            <Image
              src="/images/services/grow-with-sap/Why Now.webp"
              alt="Grow with SAP: Why Now?"
              fill
              priority
            />
          </div>
          <div>
          </div>
          <div className="xl:grid xl:grid-cols-12 grid-cols-1 relative  xl:mt-0 mt-[30rem]">
            <div className="xl:col-span-4 col-span-12 xl:pl-16 pl-8 text-white pr-22  xl:pr-0">
              <h2 className="xl:mt-20  leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
                {t('growWithSapTitle')}
              </h2>
            </div>
            <div className="xl:col-span-7 col-span-12">
            </div>
          </div>
          <div className="xl:grid xl:grid-cols-12 grid-cols-1 relative xl:pl-16 px-[35px] ">
            <div className="xl:col-span-5 col-span-12 text-white">
              <p className="mt-10 font-normal text-[16px] xl:text-[20px] 4xl:text-[22px] leading-tight">{t('growWithSapTitleDesc')} </p>
              <h3 className="mt-10  4xl:text-[30px] xl:text-[22px] text-[20px] leading-tight xl:font-bold  font-medium">{t('growWithSapSubTitle')}</h3>
              <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-light">
                {benefits.map((item, index) => (
                  <li key={index} className={index === 0 ? "mt-4" : ""}>
                    <span className="font-bold">{item.bold}</span>{item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="xl:col-span-1 col-span-12">
            </div>
            <div className="xl:col-span-6 col-span-12">
            </div>
          </div>
        </div>
      </section>

      {/* sap business section */}
      <section className="relative  xl:mt-32 mt-10">
        <div className="xl:block hidden">
          <Image
            src="/images/services/grow-with-sap/Migration.webp"
            alt="SAP Business"
            fill
            priority
          />
        </div>
        <div className="xl:hidden block">
          <Image
            src="/images/services/grow-with-sap/Group 458.webp"
            alt="SAP Business"
            fill
            priority
          />
        </div>
        <div
          className="h-full relative custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-1 text-white backdrop-blur-md bg-black/30 p-5">
            <div className="xl:col-span-8 col-span-12">
              <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[26px]  mt-16 leading-tight xl:pr-20">
                {t('sapBusinessTitle')}
              </h2>
              <h3 className="mt-5 4xl:text-[40px] xl:text-[30px] text-[22px]">{t('sapBusinessSubTitle')} </h3>
            </div>
            <div className="xl:col-span-4 col-span-12 xl:mt-16 mt-5 pr-20">
              <p className="xl:text-[22px] text-[16px] font-medium">{t('sapBusinessDesc')}</p>
            </div>
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1 text-white xl:pt-10 pt-16 xl:pb-20 xl:pr-10 xl:pl-10 backdrop-blur-md bg-black/30 p-5">
            <div className="xl:col-span-5 col-span-12">
              <h3 className="4xl:text-[30px] xl:text-[24px] text-[22px] leading-tight xl:font-bold font-medium pr-10">{t('benefitsTitle')} </h3>
              <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight xl:mt-10 mt-3">
                {sapBenefits.map((item, index) => (
                  <li key={index}>
                    <span className="font-bold">{item.bold} </span>{item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="xl:col-span-1 col-span-12">
            </div>
            <div className="xl:col-span-5 col-span-12 mt-20 xl:mt-0">
              <h3 className="4xl:text-[30px] xl:text-[24px] text-[22px] leading-tight font-bold">{t('rialtesSapMigratingTitle')}</h3>
              <UnorderedList arrName={rialtesSapData} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight " />
              <LearnMore />
            </div>
          </div>
        </div>
      </section>
      {/* rialtes and sap section */}
      <section className="custom-container text-black py-20 pt-16">
        <div className="grid xl:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-8 col-span-12 xl:w-[90%] 4xl:w-[100%]">
            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
              {t('rialtesSapTitle')}
            </h2>
            <h3 className="4xl:text-[40px] xl:text-[30px] text-[22px] mt-5">{t('rialtesSapSubTitle')} </h3>
          </div>
          <div className="xl:col-span-4 col-span-12 mt-5 xl:mt-0 font-normal ">
            <p className="4xl:text-[22px] xl:text-[20px] text-[18px] leading-tight">{t('rialtesSapDesc')} </p>
            <p className="mt-5 4xl:text-[22px] xl:text-[20px] text-[18px] leading-tight">{t('rialtesSapDesc2')} </p>
          </div>
        </div>
      </section>
      {/* key phases section */}
      <section className="xl:mb-20 mb-10 custom-container max-md:px-0 text-black">
        <h2 className="4xl:text-[30px] xl:text-[24px] text-[18px] leading-tight font-semibold max-md:pl-10 xl:mt-10 pr-10">{t('keyPhasesTitle')} </h2>
        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#D0EEFF] text-left">
                <th className="p-4 pl-10 4xl:text-[30px] xl:text-[24px] text-[16px] leading-tight font-medium">{t('keyPhasesTableTitle1')} </th>
                <th className="p-4 xl:pl-32 pl-20 4xl:text-[30px] xl:text-[24px] text-[16px] leading-tight font-medium">{t('keyPhasesTableTitle2')}</th>
              </tr>
            </thead>
            <tbody className="mt-3">
              {keyPhasesData.map((item, index) => (
                <tr key={index} className={`${index % 2 === 0 ? "bg-[#F2F2F2]" : "bg-white"}   mt-5`}>
                  <td className="p- font-light pl-10 4xl:text-[26px] xl:text-[20px] text-[16px] leading-tight">{item.title}</td>
                  <td className="p-6 xl:pl-32 pl-20  font-light 4xl:text-[26px] xl:text-[20px] text-[16px] leading-tight">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* sap signavio section */}
      <div className="xl:mb-20 mb-12 xl:mr-[142px] mt-0 custom-container text-black max-md:px-0">
        <div className="grid xl:grid-cols-12 grid-cols-1 bg-[#068EDA] xl:gap-8 gap-3 px-[36px]">
          <div className="xl:col-span-3 col-span-12 flex justify-center xl:justify-start pl-0 xl:pl-10">
            <Image
              src="/images/services/rise-with-sap/SAP Signavio.webp"
              alt="SAP Signavio"
              width={0}
              height={0}
              priority
              className="xl:w-[355px] w-[322px] h-full shadow-lg"
            />
          </div>
          <div className="xl:col-span-9 col-span-12 text-white p-5 pl-10 xl:pr-0 pr-5">
            <p className="4xl:text-[26px] xl:text-[20px] text-[16px] font-normal leading-tight">{t('sapSignavioDesc')} </p>
          </div>
        </div>
      </div>
      {/* expanding section */}
      <section className="relative w-full group overflow-visible">
        <div className="relative h-[660px] xl:h-[720px] w-full overflow-hidden">
          <Image
            src="/images/services/grow-with-sap/Expanding Value.webp"
            alt="Expanding Value with SAP"
            fill
            priority
            className="transition-transform duration-700 group-hover:scale-110 object-cover object-[85%_30%]"
          />
          <div className="relative  xl:mt-0 z-10 h-full custom-container">
            <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20">
              <div className="4xl:col-span-7 xl:col-span-6  col-span-12 pb-10">
                <h2 className="text-white max-md:mt-[390px] mt-16 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
                  {t('expandingTitle')}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-20 custom-container xl:mr-[420px] mt-[-5rem] xl:mt-[-300px]">
          <div className="flex flex-col xl:flex-row gap-6">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="flex-1 p-8 bg-white hover:bg-[#D9F2FF] text-black border-[3px] transition duration-300">
                <h3 className="text-[22px] xl:text-[30px] font-semibold leading-tight">
                  {card.title}
                </h3>
                <p className="text-[16px] xl:text-[20px] mt-5 font-normal leading-tight">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* sap cpi section */}
      <section className="xl:mt-24 mt-16 h-full relative custom-container">
        <div className="grid grid-cols-12">
          <div className="xl:col-span-10 col-span-12">
            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[78%] 4xl:w-[100%]">{t('sapCpiTitle')} </h2>
            <div className="grid xl:grid-cols-12 grid-cols-1 pt-10 xl:pb-32 pb-10 xl:gap-20">
              <div className="xl:col-span-6 col-span-12">
                <h3 className="4xl:text-[30px] xl:text-[24px] text-[21px]  xl:font-semibold font-medium  leading-tight">{t('sapCpiSubTitle')} </h3>
                <ul className="list-disc space-y-5 marker:font-bold marker:text-[#036CBC] marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] xl:mt-10 mt-5 leading-tight">
                  {sapIntegrationPoints.map((item, index) => (
                    <li key={index}>
                      <span className="font-bold">{item.bold}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="xl:col-span-6 col-span-12 mt-16 xl:mt-0">
                <h3 className="4xl:text-[30px] xl:text-[24px] text-[21px] xl:font-semibold font-medium leading-tight">{t('sapBtpTitle')} </h3>
                <p className="xl:mt-10 mt-5 font-normal text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{t('sapBtpDesc')}</p>
                <ul className="list-disc xl:space-y-5 marker:font-bold marker:text-[#036CBC] marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] xl:mt-10 mt-5">
                  {sapInnovationList.map((item, index) => (
                    <li key={index}>
                      <span className="font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3 col-span-12"></div>
        </div>
        <p className="xl:block hidden 4xl:text-[26px] xl:text-[20px] text-[16px] bg-[#0C8AD4] font-normal p-5 xl:pl-10  text-white leading-tight">{t('sapBtpBlueBoxDesk')} </p>
      </section>
      <p className="block xl:hidden 4xl:text-[26px] xl:text-[20px] text-[18px] bg-[#0C8AD4] p-5 pl-[30px] xl:pl-10 xl:mr-[142px] text-white leading-tight">{t('sapBtpBlueBoxMob')} </p>
      {/* conversational section */}
      <section className="bg-[#184671] xl:pb-20 pb-10 xl:mt-32 mt-10">
        <div className="custom-container h-full relative">
          <div className="relative xl:h-[665px] h-[341px]">
            <Image
              src="/images/services/grow-with-sap/Agentchat banner (1).webp"
              alt="grow with sap"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="w-full xl:mt-[-90px] mt-10 xl:object-[35%_20%] object-[58%_20%]"
            />
            <div className="grid xl:grid-cols-12 grid-cols-1 absolute xl:left-10">
              <div className="xl:col-span-7 col-span-12">
                <h2 className="text-black xl:mt-[-30px] mt-[23rem] bg-white xl:bg-transparent pl-8 p-10 xl:p-0 leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">{t('conversationalTitle')} </h2>
              </div>
              <div className="xl:col-span-6 col-span-12">
              </div>
            </div>
          </div>
          <div className="grid xl:grid-cols-12 grid-cols-1 text-white xl:gap-20 mt-80 md:mt-14 xl:mt-0">
            <div className="xl:col-span-5 col-span-12">
              <h2 className="4xl:text-[40px] xl:text-[28px] text-[20px] leading-tight xl:font-semibold  font-bold">{t('meetTitle')} </h2>
              <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] mt-5 font-normal leading-tight">
                {t('rialchatTitle')}</p>
              <LearnMore btnName="Know More" href='/products/agentchat' />
            </div>
            <div className="xl:col-span-7 col-span-12 xl:pr-20 ">
              <h3 className="4xl:text-[30px] xl:text-[24px] text-[18px] leading-tight font-semibold">{t('conversationalBenefitsTitle')}</h3>
              <ul className="list-disc xl:space-y-5 text-[16px] xl:text-[18px] 4xl:text-[20px] pl-5 marker:font-bold marker:text-2xl xl:pr-16 leading-tight">
                {featureHighlights.map((item, index) => (
                  <li key={index} className={index === 0 ? "mt-5" : ""}>
                    <span className="font-bold">{item.bold} </span>{item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* future proofing section */}
      <section className="xl:py-20 pt-16 pb-10 xl:mt-10">
        <div className="h-full relative custom-container">
          <div className="grid xl:grid-cols-12 grid-cols-1">
            <div className="xl:col-span-5 col-span-12 relative group overflow-hidden h-[383px] xl:h-full">
              <Image
                src="/images/services/grow-with-sap/Future-Proofing.webp"
                alt="Future-Proofing with AI"
                fill
                priority
                className=" transform transition-transform duration-500 group-hover:scale-110 xl:!h-[563px] xl:!w-[532px]"
              />
            </div>
            <div className="xl:col-span-1 col-span-12">
            </div>
            <div className="xl:col-span-6 col-span-12 text-black mt-8 xl:mt-0">
              <h2 className="leading-tight 4xl:text-[56px] xl:text-[43px] md:text-[26px]">{t('futureProofingTitle')} </h2>
              <p className="mt-5 xl:text-[22px] text-[16px] leading-tight">{t('futureProofingDesc')} </p>
              <UnorderedList arrName={futureProofingData} ulClassName="list-disc xl:space-y-5 marker:text-[#036CBC] marker:font-bold marker:text-2xl pl-5  font-semibold mt-10" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
            </div>
          </div>
        </div>
      </section>
      {/* contact form */}
      <section className="custom-container text-black py-16">
        <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle')} className={"leading-tight max-w-[76%] 4xl:text-[60px] xl:text-[40px] md:text-[26px] "} />
      </section>
    </div >
  );
}
