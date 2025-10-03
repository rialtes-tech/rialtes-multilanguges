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
const t = useTranslations("uiPath");
  const locale = useLocale();
  const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
  const {whyRpaData,featureBoxes,featureBoxes2,aribaUseCases,aribaBenefits,s4hanaUseCases,s4hanaBenefits,successFactorUsecases,successFactorBenefits,salesforceUsecases,salesforceBenefits,hrData,retailData,manufacturingData,automativeIndustryData,aiEnhanceData,visualizationData,whyRiatlesData,provenData} = content.uiPath;
 
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "RPA Consulting Services and Solutions",
        "url": "https://www.rialtes.com/solutions/process-automation/rpa-consulting-services-provider",
        "description": "Looking for RPA consulting services providers? We help automate SAP and Salesforce workflows, cut costs, and boost efficiency using UiPath. Start today.",
        "provider": {
            "@type": "Organization",
            "name": "Rialtes",
            "url": "https://www.rialtes.com",
            "logo": "https://www.rialtes.com/images/homepage/logo.svg",
            "sameAs": [
                "https://www.linkedin.com/company/rialtes-technologies-llc",
                "https://x.com/Rialtestech",
                "https://www.youtube.com/@rialtes"
            ]
        },
        "areaServed": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "Singapore" },
            { "@type": "Country", "name": "India" },
            { "@type": "Continent", "name": "Europe" }
        ],
        "serviceType": "UiPath RPA Consulting Services",
        "category": "Robotic Process Automation",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "End-to-End RPA Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Automation Strategy & License Advisory" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Bot Design, Development & Implementation" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Pre-built Industry Accelerators" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Quality Assurance & Compliance" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Post-Go-Live Bot Monitoring and Support" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "RPA Automation with SAP Ariba" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "RPA Automation with SAP S/4HANA" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "RPA Automation with SAP SuccessFactors" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "RPA Automation with Salesforce" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "AI-Enhanced RPA with IDP, NLP, and Predictive Analytics" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Data Visualization & RPA Analytics with Tableau/Qlik" }
                }
            ]
        }
    }
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/solutions/process-automation/rpa-consulting-services-provider/"
            />
            <Script
                id="schema-rpa"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative">
                <div className="xl:block hidden">
                    <Image
                        src="/images/uipath/desktop/banner.webp"
                        alt="Tosca Banner desktop"
                        width={0}
                        height={0}
                        priority
                        sizes="100vw"
                        className="w-full"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/uipath/mobile/banner.webp"
                        alt="Toska Banner Mobile"
                        className="w-full h-[490px] object-cover max-[360px]:h-[540px]"
                        priority
                        sizes="100vw"
                        width={0}
                        height={0}
                    />
                </div>
                <div className="h-full absolute custom-container xl:!pr-0 mr-0 top-0">
                    <div className="grid xl:grid-cols-12  grid-cols-1 gap-2">
                        <div className="xl:col-span-6  col-span-12 4xl:mt-32 xl:mt-20 mt-40 4xl:pr-16  xl:pr-10 pr-20 md:pr-64">
                            <h3 className="text-white xl:text-[24px]  font-bold mb-2">  {t('headerTitle')}  </h3>
                            <h2 className="text-white leading-tight mt-5   text-[26px] 4xl:text-[60px]   xl:text-[44px]">
                            {t('headerDesc')}</h2>
                        </div>
                        <div className="xl:col-span-7 col-span-12">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description */}
            <section className="custom-container xl:!pr-0">
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-24 mt-10 items-center">
                    <div className="col-span-2 mt-10 xl:mt-20 order-1 xl:order-2">
                        <Image
                            src="/images/uipath/image.svg"
                            alt="UiPath Banner"
                            className="4xl:w-full w-[170px]"
                            priority
                            sizes="100vw"
                            width={0}
                            height={0}
                        />
                    </div>
                    <div className="xl:col-span-8 order-2 xl:order-1">
                        <h1 className="leading-tight text-[26px] 4xl:text-[60px] xl:text-[42px] xl:pr-20 mt-10 4xl:mt-0 xl:mt-0 pr-10">
                         {t('operationsTitle')}</h1>
                        <p className="xl:mt-12 mt-5 4xl:text-[22px] text-[16px] pr-[36px] 4xl:pr-20 xl:pr-32">
                       {t('operationsDescOne')}</p>
                        <p className="mt-5 pb-16 4xl:text-[22px] text-[16px] pr-[30px] 4xl:pr-20 xl:pr-24">
                        {t('operationsDescTwo')}</p>
                    </div>
                </div>
            </section>
            {/* why RPA section */}
            <section className="custom-container 4xl:!pr-[142px] 4xl:pl-[280px] max-md:px-0">
                <div className="xl:grid-cols-12 grid">
                    <div className="xl:col-span-5 order-1 xl:order-2">
                        <Image
                            src="/images/uipath/desktop/why-rpa.webp"
                            alt="Why RPA with UiPath?"
                            priority
                            sizes="100vw"
                            className="w-full h-full"
                            width={0}
                            height={0}
                        />
                    </div>
                    <div className="xl:col-span-7 bg-[#006FBE] p-10 text-white order-2 xl:order-1 pb-40 4xl:pb-20 xl:pb-16">
                        <h2 className="leading-tight text-[26px] 4xl:text-[60px] xl:text-[42px]"> {t('uiTitle')}  </h2>
                        <p className="mt-5 4xl:text-[22px] text-[16px] font-normal 4xl:pr-20">
                        {t('uiDesc')}</p>
                        <UnorderedList arrName={whyRpaData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 pr-12 mt-8 xl:pr-0 4xl:pr-20" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                    </div>
                </div>
            </section>
            <section className="custom-container 4xl:!pr-[142px] 4xl:pl-[280px] mt-[-100px] 4xl:mt-0 xl:mt-0">
                <div className="xl:grid-cols-12 grid">
                    <div className="xl:col-span-8 bg-[#163055] p-8">
                        <p className="4xl:text-[24px] xl:text-[16px] text-[18px] text-white leading-tight font-normal">{t('whyDesc')} </p>
                    </div>
                </div>
            </section>
            {/* end to end section */}
            <section className="xl:mt-24 4xl:mt-24 mt-16 my-10 custom-container 4xl:pr-[464px] xl:pr-[200px]">
                <h2 className="leading-tight text-[26px] 4xl:text-[60px]  xl:text-[42px]">
               {t('serviceTitle')}  </h2>
                <div className="4xl:text-[36px] text-[22px] xl:text-[25px] font-semibold leading-tight mt-5"> {t('serviceeDesc')}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:mt-[67px] mt-[48px]">
                    {featureBoxes.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white border border-black hover:bg-[#D9F2FF] 4xl:p-10 p-8 flex flex-col h-full">
                            <div className="flex flex-col items-start mb-4">
                                <h3 className="text-[#0A6BB8] mt-2 4xl:text-[30px] xl:text-[24px] text-[20px] font-semibold leading-tight">{feature.title}</h3>
                            </div>
                            <p className="text-[#000000] mt-2 4xl:text-[24px] xl:text-[18px] text-[16px] leading-tight font-normal">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* pre configured section */}
            <section className="mt-24 my-10 custom-container 4xl:pr-[405px] ">
                <h2 className="leading-tight text-[26px] 4xl:text-[60px]  xl:text-[42px]">
                 {t('industryTitle')}</h2>
                <p className="4xl:text-[22px] text-[16px] leading-tight mt-5">{t('industryDesc')}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-5 4xl:gap-5 gap-20 xl:mt-[67px] mt-[48px] sm:w-[90%] md:w-[80%] lg:w-[90%] xl:w-full">
                    {featureBoxes2.map((feature, index) => (
                        <div
                            key={index}
                            className={`4xl:border-r xl:border-r ${index < 3 ? "border-b" : ""} ${index === 2 || index === 3 ? "md:border-0" : ""} xl:border-b-0 4xl:border-b-0 border-black lg:pr-10  flex flex-col h-full pb-10 pr-10`}>
                            <div className="w-[140px] h-[140px] flex items-start justify-start">
                                <Image
                                    src={feature.icon}
                                    alt={`${feature.title} image`}
                                    width={100}
                                    height={100}
                                    priority
                                    className="h-full w-full"
                                />
                            </div>
                            <div className="flex flex-col items-start mb-4 pt-10">
                                <h3 className="text-[#0A6BB8] mt-2 4xl:text-[30px] xl:text-[24px] text-[24px] font-bold leading-tight">{feature.title}</h3>
                            </div>
                            <p className="text-[#000000] mt-2 4xl:text-[22px] xl:text-[18px] text-[20px] leading-tight font-normal pb-6 lg:pb-4">{feature.description}</p>
                            <div className="mt-auto">
                                <LearnMore btnName={t('learnMoreBtn')}/>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* ariba section */}
            <section className="mt-20 custom-container 4xl:pl-[280px] 4xl:pr-0 max-md:px-0 relative">
                <div className="grid xl:grid-cols-12">
                    <div className="xl:col-span-4 xl:mt-20 4xl:mt-20 mb-32">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/uipath/desktop/rpa-sap-ariba.webp"
                                alt="RPA Automation with SAP Ariba"
                                priority
                                sizes="100vw"
                                className="w-full relative"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:hidden block px-[35px]">
                            <Image
                                src="/images/uipath/mobile/sap-ariba.webp"
                                alt="RPA Automation with SAP Ariba"
                                priority
                                sizes="100vw"
                                className="w-full relative"
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                    <div className="xl:col-span-8 bg-[#F0DCC9] max-md:px-[35px] 4xl:pb-[100px] xl:pb-32 md:px-[35px] text-black 4xl:pl-64 4xl:pr-[22rem] pb-[90px] xl:pr-[14rem] xl:pl-[11rem] pt-16  4xl:ml-[-200px] xl:ml-[-130px] mt-[-230px] 4xl:mt-0 xl:mt-0">
                        <h2 className="leading-tight text-[26px] 4xl:text-[60px]  xl:text-[40px] pt-24 4xl:pt-0 xl:pt-0 pr-20 xl:pr-0 4xl:pr-0">
                           {t('autoTitle')}
                        </h2>
                        <h3 className="4xl:text-[40px] xl:text-[25px] text-[20px] font-semibold mt-5 leading-tight pr-20 xl:pr-0 4xl:pr-0">
                           {t('autoSubtitle')}
                        </h3>
                        <p className="mt-5 4xl:text-[22px] text-[16px]">{t('autoDesc')}</p>
                        <div className="4xl:mt-10 xl:mt-5 font-semibold 4xl:text-[32px] xl:text-[20px] text-[18px] leading-tight mt-10">{t('titleOne')}</div>
                        <UnorderedList arrName={aribaUseCases} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-1  font-medium marker:font-bold marker:text-2xl pl-5  mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="4xl:mt-10 xl:mt-5 font-semibold 4xl:text-[32px] xl:text-[20px] text-[18px] leading-tight mt-10">{t('titleTwo')}</div>
                        <UnorderedList arrName={aribaBenefits} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-1 font-medium  marker:font-bold marker:text-2xl pl-5 mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="mt-5 absolute bottom-0">
                            <LearnMore btnName={t('learnMoreBtn')}/>
                        </div>
                    </div>
                </div>
            </section>
            {/* sap s4hana section */}
            <section className="mt-20 custom-container 4xl:pl-[142px] 4xl:pr-[280px] max-md:px-0 relative">
                <div className="grid xl:grid-cols-12">
                    <div className="4xl:col-span-5 xl:col-span-6 xl:mt-20 4xl:mb-32 mb-16 order-1 xl:order-2">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/uipath/desktop/rpa-auto.webp"
                                alt="RPA Automation with SAP S/4HANA"
                                priority
                                sizes="100vw"
                                className="w-full relative"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/uipath/mobile/saps4hana.webp"
                                alt="RPA Automation with SAP S/4HANA"
                                priority
                                sizes="100vw"
                                className="w-full relative max-md:px-[35px]"
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                    <div className="4xl:col-span-7 max-md:px-[35px] 4xl:pb-32 xl:pb-20 md:px-[35px] xl:col-span-6 pb-[90px] bg-[#BFDEE3] text-black pt-16 4xl:pl-[197px] 4xl:pr-[250px] 4xl:mr-[-200px] xl:pl-20 xl:pr-[200px] xl:mr-[-150px] order-2 xl:order-1 mt-[-285px] xl:mt-0 4xl:mt-0">
                        <h2 className="leading-tight text-[26px] 4xl:text-[60px] xl:text-[42px] pt-48 xl:pt-0 4xl:pt-0">
                           {t('hanaTitle')}
                        </h2>
                        <h3 className="4xl:text-[40px] xl:text-[30px] text-[20px] font-semibold mt-5 leading-tight">
                            {t('hanaSubtitle')}
                        </h3>
                        <p className="mt-5 4xl:text-[22px] text-[16px]">
                            {t('hanaDesc')}
                        </p>
                        <div className="4xl:mt-10 xl:mt-8 mt-10 font-semibold 4xl:text-[32px] xl:text-[22px] text-[18px] leading-tight">
                            {t('hanaTitleOne')}</div>
                        <UnorderedList arrName={s4hanaUseCases} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-3 marker:font-bold marker:text-2xl pl-5 font-medium mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="4xl:mt-10 xl:mt-8 mt-10 font-semibold 4xl:text-[32px] xl:text-[22px] text-[18px] leading-tight">
                            {t('hanaTilteTwo')}
                        </div>
                        <UnorderedList arrName={s4hanaBenefits} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-3 marker:font-bold marker:text-2xl pl-5 font-medium mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="mt-5 absolute bottom-0">
                            <LearnMore btnName={t('learnMoreBtn')}/>
                        </div>
                    </div>
                </div>
            </section>
            {/* success factor section */}
            <section className="mt-20 custom-container 4xl:pl-[280px] 4xl:pr-0 max-md:px-0 relative">
                <div className="grid xl:grid-cols-12">
                    <div className="xl:col-span-4 xl:mt-20 mb-16 xl:mb-32">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/uipath/desktop/sap-successfactor.webp"
                                alt="RPA Automation with SAP SuccessFactors"
                                priority
                                sizes="100vw"
                                className="w-full relative"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/uipath/mobile/sap-successfactor.webp"
                                alt="RPA Automation with SAP SuccessFactors"
                                priority
                                sizes="100vw"
                                className="w-full relative max-md:px-[35px]"
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                    <div className="xl:col-span-8 bg-[#E6D2D2] 4xl:pb-32 xl:pb-20 max-md:px-[35px] md:px-[35px] mt-[-200px] pb-[90px] xl:mt-0 4xl:mt-0 text-black 4xl:pl-64 4xl:pr-[22rem] xl:pr-[14rem] xl:pl-[11rem] pt-16 4xl:ml-[-200px] xl:ml-[-130px] order-2 xl:order-1">
                        <h2 className="leading-tight text-[26px] 4xl:text-[60px] xl:text-[40px] pt-32 xl:pt-0 4xl:pt-0">
                            {t('rpaTitle')}
                        </h2>
                        <h3 className="4xl:text-[40px] xl:text-[25px] text-[20px] font-semibold mt-5 leading-tight">
                          {t('rpaSubtitle')}

                        </h3>
                        <p className="mt-5 4xl:text-[22px] text-[16px]">
                            {t('rpaDesc')}
                        </p>
                        <div className="4xl:mt-10 xl:mt-5 font-semibold 4xl:text-[32px] xl:text-[20px] text-[18px] leading-tight mt-10">
                           {t('rpaTitleOne')}
                        </div>
                        <UnorderedList arrName={successFactorUsecases} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-1 marker:font-bold marker:text-2xl pl-5 font-medium mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="4xl:mt-10 xl:mt-5 font-semibold 4xl:text-[32px] xl:text-[20px] text-[18px] leading-tight mt-10">
                            {t('rpaTilteTwo')}
                        </div>
                        <UnorderedList arrName={successFactorBenefits} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-1 marker:font-bold marker:text-2xl pl-5 font-medium mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="mt-5 absolute bottom-0">
                            <LearnMore btnName={t('learnMoreBtn')}/>
                        </div>
                    </div>
                </div>
            </section>
            {/* salesforce section */}
            <section className="mt-20 custom-container 4xl:pl-[142px] 4xl:pr-[280px] max-md:px-0 relative">
                <div className="grid xl:grid-cols-12">
                    <div className="4xl:col-span-5 xl:col-span-6  xl:mt-20 4xl:mb-32 mb-16 order-1 xl:order-2">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/uipath/desktop/rpa.webp"
                                alt="RPA Automation with Salesforce"
                                priority
                                sizes="100vw"
                                className="w-full relative"
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/uipath/mobile/rpa-auto.webp"
                                alt="RPA Automation with Salesforce"
                                priority
                                sizes="100vw"
                                className="w-full relative max-md:px-[35px]"
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                    <div className="4xl:col-span-7 xl:col-span-6 4xl:pb-32 xl:pb-20 max-md:px-[35px] md:px-[35px] bg-[#ACD8ED] pb-[90px] mt-[-200px] xl:mt-0 4xl:mt-0 text-black pt-16 4xl:pl-[197px] 4xl:pr-[250px] 4xl:mr-[-200px] xl:pl-20 xl:pr-[200px] xl:mr-[-150px] order-2 xl:order-1">
                        <h2 className="leading-tight text-[26px] 4xl:text-[60px] xl:text-[42px] pt-32 xl:pt-0 4xl:pt-0">
                            {t('SalesforceTitle')}
                        </h2>
                        <h3 className="4xl:text-[40px] xl:text-[30px] text-[20px] font-semibold mt-5 leading-tight">
                           {t('SalesforceSubtitle')}
                        </h3>
                        <p className="mt-5 4xl:text-[22px] text-[16px]">
                            {t('SalesforceDesc')}
                        </p>
                        <div className="4xl:mt-10 xl:mt-8 font-semibold 4xl:text-[32px] xl:text-[22px] text-[18px] leading-tight mt-10">
                            {t('SalesforceTitleOne')}
                        </div>
                        <UnorderedList arrName={salesforceUsecases} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-3 marker:font-bold marker:text-2xl pl-5 font-medium mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="4xl:mt-10 xl:mt-8 font-semibold 4xl:text-[32px] xl:text-[22px] text-[18px] leading-tight mt-10">
                            {t('SalesforceTilteTwo')}
                        </div>
                        <UnorderedList arrName={salesforceBenefits} ulClassName="list-disc leading-tight 4xl:space-y-3 xl:space-y-3 marker:font-bold marker:text-2xl pl-5 font-medium mt-3 pr-12 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="mt-10 absolute bottom-0">
                            <LearnMore btnName={t('learnMoreBtn')}/>
                        </div>
                    </div>
                </div>
            </section>
            {/* industry focused section */}
            <section className="relative 4xl:mt-32 xl:mt-32 mt-20 custom-container 4xl:pl-[280px] 4xl:pr-0 xl:pr-0 max-md:pr-0">
                <div>
                    <Image
                        src="/images/uipath/desktop/industry.webp"
                        alt="Automotive Industry"
                        priority
                        sizes="100vw"
                        className="w-full h-[300px] xl:h-full"
                        width={0}
                        height={0}
                    />
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-1  4xl:mt-[-285px] xl:mt-[-200px]">
                    <div className="xl:col-span-10 bg-[#016FBE]  text-white p-8 xl:pl-20 4xl:pl-20 4xl:pb-20 pb-24 xl:pb-10">
                        <h2 className="leading-tight 4xl:mt-10 text-[26px] 4xl:text-[60px]  xl:text-[40px] pr-10 xl:pr-0 4xl:pr-0">{t('focusTitle')}</h2>
                        <div className="4xl:text-[40px] text-[20px] font-semibold leading-tight 4xl:mt-8 xl:mt-5 mt-5">{t('focusDesc')}</div>
                        <div className="flex xl:gap-20 4xl:gap-20 gap-10 4xl:mt-14 mt-10 md:gap-0 xl:flex-row flex-col md:flex-row">
                            <div>
                                <h3 className="4xl:text-[30px] text-[18px] xl:text-[22px]">{t('headingOne')}</h3>
                                <UnorderedList arrName={automativeIndustryData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 pr-12 mt-3 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            </div>
                            <div>
                                <h3 className="4xl:text-[30px] text-[18px] xl:text-[22px]">{t('headingTwo')}</h3>
                                <UnorderedList arrName={manufacturingData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 pr-12 mt-3 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            </div>
                        </div>
                        <div className="flex xl:gap-20 4xl:gap-24 gap-10 md:gap-6 xl:flex-row flex-col 4xl:mt-16 xl:mt-16 mt-10 md:flex-row">
                            <div>
                                <h3 className="4xl:text-[30px] text-[18px] xl:text-[22px]">{t('headingThree')}</h3>
                                <UnorderedList arrName={retailData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 pr-12 mt-3 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                                <div className="absolute 4xl:mt-5 xl:block hidden">
                                    <LearnMore btnName={t('learnMoreBtn')}/>
                                </div>
                            </div>
                            <div>
                                <h3 className="4xl:text-[30px] text-[18px] xl:text-[22px]">{t('headingFour')}</h3>
                                <UnorderedList arrName={hrData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 pr-12 mt-3 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                                <div className="absolute mt-5 xl:hidden block">
                                    <LearnMore btnName={t('learnMoreBtn')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* data visualization section */}
            <section className="mt-24 custom-container 4xl:pr-[142px]">
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20 4xl:gap-20">
                    <div className="xl:col-span-5 col-span-12">
                        <Image
                            src="/images/uipath/desktop/data-visu.webp"
                            alt="Data Visualization"
                            priority
                            sizes="100vw"
                            className="w-full relative"
                            width={0}
                            height={0}
                        />
                    </div>
                    <div className="xl:col-span-7 mt-16">
                        <h2 className="leading-tight 4xl:mt-10 text-[26px] 4xl:text-[60px]  xl:text-[40px] pr-10 xl:pr-0 4xl:pr-0">{t('dataTitle')}</h2>
                        <UnorderedList arrName={visualizationData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 marker:font-bold marker:text-2xl pl-5 font-medium 4xl:mt-8 xl:mt-5 pr-12 mt-8 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                    </div>
                </div>
            </section>
            {/* ai enhaced section */}
            <section className="xl:mt-24 4xl:mt-24 mt-16 custom-container 4xl:pr-0 xl:pr-0">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-8 4xl:ml-[35px] order-1 xl:order-2">
                        <Image
                            src="/images/uipath/desktop/ai-enhance.webp"
                            alt="AI-Enhanced RPA"
                            priority
                            sizes="100vw"
                            className="w-full"
                            width={0}
                            height={0}
                        />
                    </div>
                    <div className="xl:col-span-4 order-2 xl:order-1">
                        <h2 className="leading-tight text-[26px] 4xl:text-[55px] xl:text-[40px] 4xl:pr-10 pt-10 xl:pt-0 4xl:pt-0">
                           {t('aiTitle')}
                        </h2>
                        <h3 className="4xl:text-[40px] xl:text-[30px] text-[20px] mt-5 leading-tight font-bold pr-10 xl:pr-0 4xl:pr-0">
                            {t('aiSubtitle')}
                        </h3>
                        <p className="4xl:text-[22px] text-[16px] leading-tight mt-5">
                            {t('aiDesc')}
                        </p>
                        <UnorderedList arrName={aiEnhanceData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-medium marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5  mt-8 4xl:pr-16" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="absolute mt-5 xl:mt-5">
                            <LearnMore btnName={t('learnMoreBtn')}/>
                        </div>
                    </div>
                </div>
            </section>
            {/* proven section */}
            <section className="mt-40 custom-container 4xl:pr-0 xl:pr-0 4xl:pl-[142px]">
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20">
                    <div className="xl:col-span-5 4xl:ml-[35px]">
                        <Image
                            src="/images/uipath/desktop/proven.webp"
                            alt="Rialtes’ certified SCRUM"
                            priority
                            sizes="100vw"
                            className="w-full"
                            width={0}
                            height={0}
                        />
                    </div>
                    <div className="4xl:col-span-5 xl:col-span-6">
                        <h2 className="leading-tight text-[26px] 4xl:text-[60px]  xl:text-[40px] 4xl:pr-10 pt-10 xl:pt-0 4xl:pt-0">{t('globalTitle')}</h2>
                        <p className="4xl:text-[22px] text-[16px] leading-tight mt-5">{t('globalSubtitle')}</p>
                        <UnorderedList arrName={provenData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-medium marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 pr-12 mt-5 4xl:pr-16" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                    </div>
                </div>
            </section>
            <section className="relative xl:mt-32 4xl:mt-32 mt-16 custom-container 4xl:pl-[280px] 4xl:pr-[142px] xl:pr-0 max-md:px-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/uipath/desktop/why-uipath-rpa.webp"
                        alt="Why Rialtes for UiPath RPA?"
                        priority
                        sizes="100vw"
                        className="w-full h-full"
                        width={0}
                        height={0}
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/uipath/mobile/why-uipath-rpa.webp"
                        alt="Why Rialtes for UiPath RPA?"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full object-cover"
                        priority
                    />
                </div>
                <div
                    className="grid xl:grid-cols-12  grid-cols-1 4xl:mt-[-100px] xl:mt-[-70px] max-md:px-[35px]">
                    <div className="col-span-1"></div>
                    <div className="xl:col-span-10 bg-[#016FBE]  text-white p-8 xl:pl-20 4xl:pl-20  pb-12 xl:pb-[rem] 4xl:pb-16">
                        <div className="flex xl:gap-20 xl:flex-row flex-col">
                            <div>
                                <h2 className="leading-tight 4xl:mt-10 text-[26px] 4xl:text-[60px]  xl:text-[40px] pr-10 xl:pr-0 4xl:pr-0">{t('why')}</h2>
                            </div>
                            <div>
                                <UnorderedList arrName={whyRiatlesData} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 4xl:mt-8 xl:mt-5 pr-10 mt-8 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-20 custom-container pb-20">
                <ContactForm title={t('contactTitle')} subtitle={t('contactSubtitle')} subtitle1={t('contactSubtitleOne')} className={"4xl:max-w-[58rem] xl:max-w-[44rem] leading-tight text-[26px] !font-light 4xl:text-[60px]  xl:text-[45px] pr-10 xl:pr-0"} />
            </div >
        </div>
    );
}
