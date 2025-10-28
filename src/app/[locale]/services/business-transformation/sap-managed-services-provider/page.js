"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import ContactForm from "../../../components/contactform";
import LearnMore from "../../../components/learnMore";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/services.json';
import esContent from '../../../../../../messages/es/services.json';
import frContent from '../../../../../../messages/fr/services.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SAP Managed Services Provider",
    "description": "As a next-gen SAP Managed Services Provider, Rialtes future-proofs your SAP stack with AI, automation, cloud-native apps, and continuous innovation.",
    "serviceType": "SAP Managed Services",
    "provider": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": "https://www.rialtes.com/images/homepage/logo.svg"
    },
    "areaServed": [
        {
            "@type": "Place",
            "name": "India"
        },
        {
            "@type": "Place",
            "name": "United States"
        },
        {
            "@type": "Place",
            "name": "Canada"
        },
        {
            "@type": "Place",
            "name": "Singapore"
        },
        {
            "@type": "Place",
            "name": "Europe"
        }
    ],
    "url": "https://www.rialtes.com/services/business-transformation/sap-managed-services-provider",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SAP Services Catalog",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "SAP S/4HANA Support"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "SAP SuccessFactors Support"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "SAP BTP Services"
                }
            }
        ]
    }
}

export default function Page() {
    const t = useTranslations('sapDigitalDesk')
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { sapCertificationData, sapCertificationData2, sapFeatureGrid, futureData, revolutionizeData, unleashData, seamlessData
        , codeData, intelligentData, winningSectionData, sapAribaData, sapDatasphereData, sapTransformationSteps, superchargeData, btpData
        , migrateData1, migrateData2, whyPartnerData, rialtesTwentyData1, rialtesTwentyData2, onsiteDeliveryData, onsiteDeliveryData2, projectPartnershipData } = content.sapDigitalDesk;
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/services/business-transformation/sap-managed-services-provider/"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative  xl:pb-40 md:pb-[10rem] pb-20 h-[350px] md:h-[500px]  4xl:h-[650px] ">
                <div className="md:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/sap-digital-desk-investment-expertise.webp"
                        alt={t("bannerAlt")}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        sizes="100vw" />
                </div>
                <div className="md:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/sap-digital-desk-investment-expertise-mobile.webp"
                     alt={t("bannerAlt")}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="relative custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 mt-20 md:text-black text-white">
                        <div className="xl:col-span-6  xl:pt-40 pt-20 md:pr-80 xl:pr-0">
                            <h3 className="text-[20px] xl:text-[24px] font-bold mb-2 break-words">
                                {t('headerTitle')}
                            </h3>
                            <h2 className={`leading-tight break-words xl:mt-10 mt-5  4xl:text-[56px] text-[26px] xl:text-[50px]
                            
                                  ${locale === "es"
                                    ? "pr-[3rem] md:pr-0 xl:pr-0"
                                    : locale === "fr"
                                        ? "pr-10 md:pr-0 xl:pr-0"
                                        : "pr-0 md:pr-0 xl:pr-0"
                                }`}
                            
                            >
                                {t('headerSubTitle')}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* page description */}
            <section className="mt-20 custom-container">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-10 col-span-12">
                        <h1 className="leading-tight 4xl:text-[56px] text-[26px] xl:text-[50px]">
                            {t('pageDescTitle')}
                        </h1>
                        <p className="xl:text-[22px] text-[16px] mt-5 xl:pr-32">{t('pageDesc1')}</p>
                        <p className="xl:text-[22px] text-[16px] mt-5 xl:pr-40">{t('pageDesc2')}
                        </p>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                    </div>
                </div>
            </section>
            {/* rialtes 24/7 section */}
            <section className="relative xl:mt-32 mt-10 pb-20 xl:pb-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/sap-support-delivery-models-24-7.webp"
                        alt={t("rialtesSectionAlt")}
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/sap-support-delivery-models-24-7-mobile.webp"
                        alt={t("rialtesSectionAlt")}
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="h-full relative custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white">
                        <div className="xl:col-span-6 col-span-12 xl:pr-20">
                            <h2 className="4xl:text-[56px] text-[26px] xl:text-[50px] mt-16 leading-tight">
                                {t('rilatesTitle')}
                            </h2>
                        </div>
                        <div className="col-span-1"></div>
                        <div className="xl:col-span-5 col-span-12 xl:mt-16 mt-5">
                            <p className="xl:text-[22px] text-[16px] font-medium">{t('rialtesData')}</p>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white items-center xl:pt-20 pt-10">
                        <div className="xl:col-span-5 col-span-12">
                            <h3 className="text-[20px] xl:text-[32px] leading-tight">
                                {t('rialtesTitle2')}
                            </h3>
                        </div>
                        <div className="xl:col-span-7 col-span-12 xl:border-b-2 xl:border-white">
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white pt-10  xl:pb-20">
                        <div className="xl:col-span-6 col-span-12">
                            <h3 className="xl:text-[28px] text-[18px] xl:font-bold font-medium">{t('followTheSunTitle')}</h3>
                            <UnorderedList arrName={rialtesTwentyData1} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3 xl:pr-20" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            <h3 className="xl:text-[28px] text-[18px] xl:font-bold font-medium xl:pr-20 xl:pt-20 pt-10">{t('hybridTitle')}</h3>
                            <UnorderedList arrName={rialtesTwentyData2} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3 xl:pr-20" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            <div className="xl:absolute bottom-[-26px] xl:block hidden">
                                <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')}/>
                            </div>
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12 mt-10 xl:mt-0">
                            <h3 className="xl:text-[28px] text-[18px] font-bold">{t('onsiteDeliveryTitle')}</h3>
                            <UnorderedList arrName={onsiteDeliveryData} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            <h3 className="xl:text-[28px] text-[18px] font-bold xl:pt-20 pt-10">{t('onsiteDeliveryTitle2')}</h3>
                            <UnorderedList arrName={onsiteDeliveryData2} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            <div className="absolute mt-[28px] xl:hidden block">
                                <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* project leadership section */}
            <section className="custom-container xl:mt-32 xl:!pr-0 h-full max-md:px-0 mt-16">
                <div className="md:grid xl:grid-cols-12 grid-cols-1 h-full gap-10">

                    {/* Image first on mobile, second on desktop */}
                    <div className="col-span-7 order-1 xl:order-2 max-md:px-0">
                        <Image
                            src="/images/sap/sap-digital-desk/desktop/digital-warehouse-technology-visualization.webp"
                            alt={t("projectleadershipAlt")}
                            priority
                            className="w-full xl:h-full h-[458px] object-cover"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    {/* Content second on mobile, first on desktop */}
                    <div className="col-span-5 order-2 xl:order-1 mt-10 xl:mt-0 mx-[35px] xl:mx-0 md:mx-0">
                        <h2 className="leading-tight 4xl:text-[56px] text-[26px] xl:text-[50px]">{t('projectPartnershipTitle')}</h2>
                        <p className="mt-5 4xl:pr-40 font-medium">
                            {t('projectPartnershipDesc1')}
                        </p>
                        <UnorderedList arrName={projectPartnershipData} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3 4xl:pr-32 font-medium" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px] " />
                        <p className="mt-10 4xl:pr-40 pb-10 font-medium">
                            {t('projectPartnershipDesc2')}
                        </p>
                        <LearnMore btnName={t('learnMoreBtn')}/>
                    </div>
                </div>
            </section>

            {/* 150 sap section */}
            <section className="relative  4xl:mt-24 xl:mt-20">
                <div className="xl:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/sap-certifications-competency-modules.webp"
                        alt={t("sapSectionAlt")}
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/sap-certifications-competency-modules-mobile.webp"
                        alt={t("sapSectionAlt")}
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="h-full relative custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-black">
                        <div className="xl:col-span-8 col-span-12 xl:pr-20">
                            <h2 className="text-[25px] 4xl:text-[60px] xl:text-[40px] mt-16 leading-tight">
                                {t('SapTitle')}
                            </h2>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-[#006FBE] items-center pt-10">
                        <div className="xl:col-span-6 col-span-12">
                            <h3 className="text-[20px] 4xl:text-[30px] xl:text-[25px] leading-tight font-semibold">
                                {t('SapTitle2')}
                            </h3>
                        </div>
                        <div className="xl:col-span-6 col-span-12  xl:border-b-2 xl:border-black">
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-black xl:pb-20">
                        <div className="xl:col-span-6 col-span-12">
                            <UnorderedList arrName={sapCertificationData} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3 xl:pr-20" liClassName="xl:text-[18x] 4xl:text-[20px] text-[16px]" />
                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12  xl:mt-0">
                            <UnorderedList arrName={sapCertificationData2} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-3" liClassName="xl:text-[18px] 4xl:text-[20px] text-[16px] " />
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-[#006FBE]  items-center mt-10 xl:mt-0">
                        <div className="xl:col-span-4 col-span-12">
                            <h3 className="text-[20px] 4xl:text-[30px] xl:text-[25px] leading-tight font-semibold">
                                {t('SapTitle3')}
                            </h3>
                        </div>
                        <div className="xl:col-span-8 col-span-12 xl:border-b-2 xl:border-black">
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 text-black xl:mt-16 mt-5 4xl:gap-16 gap-8 xl:pr-40">
                        {sapFeatureGrid.map((item, index) => (
                            <div key={index}>
                                <p className="xl:pb-5 pb-2 4xl:text-[20px] xl:text-[17px] font-bold leading-tight">
                                    {item.title}
                                </p>
                                <p className="xl:text-[18px] 4xl:text-[20px] leading-tight">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="xl:pr-64">
                        <div className="bg-[#163055] p-8 4xl:text-[26px] text-[20px] text-white mt-16 leading-tight">{t('sapBlueBox')}</div>
                    </div>
                </div>
            </section>
            {/* future proof section */}
            <section className="custom-container xl:mt-32 mt-10  xl:!pl-0 !px-0">
                <div className="grid xl:grid-cols-12 grid-cols-1  xl:gap-20">
                    <div className="col-span-6">
                        <Image
                            src="/images/sap/sap-digital-desk/desktop/industrial-worker-digital-monitoring-system.webp"
                            alt={t("futureProofAlt")}
                            priority
                            className="w-full 4xl:h-full xl:h-[495px]"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="col-span-5 4xl:pr-32 mt-10 xl:mt-0 mx-[35px] xl:mx-0">
                        <h2 className="4xl:text-[56px] text-[26px] xl:text-[40px] leading-tight">{t('futureProofTitle')}</h2>
                        <h3 className="4xl:text-[36px] text-[22px] mt-5 font-semibold leading-tight">{t('futureProofTitle2')}</h3>
                        <p className="mt-5 font-normal 4xl:text-[20px] xl:text-[18px]">{t('futureProofDesc')}</p>
                        <UnorderedList arrName={futureData} ulClassName="list-disc 4xl:space-y-3 xl:space-y-2 marker:font-bold marker:text-2xl pl-5 4xl:mt-10 mt-3 4xl:pr-24" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="4xl:mt-10 xl:mt-2">
                            <LearnMore btnName={t('learnMoreBtn')}/>
                        </div>
                    </div>
                </div>
            </section>
            {/* sap fiori section */}
            <section className="relative mt-5 xl:mt-0  xl:ml-[142px]">
                <div className="md:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/professional-woman-working-laptop-office.webp"
                        alt={t("sapFioriSectionAlt")}
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="md:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/professional-woman-working-laptop-office-mobile.webp"
                        alt={t("sapFioriSectionAlt")}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover sm:object-[20%,26%]"
                    />
                </div>
                <div className="relative custom-container xl:!ml-[-110px] max-md:px-0">
                    <div className="grid xl:grid-cols-12 grid-cols-1">
                        <div className="col-span-6">
                            <div className="relative xl:p-12 p-10 mt-40 xl:mt-0">
                                <div className="absolute inset-0 md:bg-[#016FBE] mix-blend-multiply"></div>
                                <div className="relative bg-opacity-80 text-white z-10 rounded-lg">
                                    <h2 className="leading-tight 4xl:text-[56px] text-[26px] xl:text-[45px]">{t('sapFioriTitle')}</h2>
                                    <h3 className="4xl:text-[36px] text-[20px] mt-5 leading-tight font-semibold">{t('sapFioriTitle2')}</h3>
                                    <p className="mt-5 font-normal">{t('sapFioriDesc')}</p>
                                    <UnorderedList arrName={revolutionizeData} ulClassName="list-disc 4xl:space-y-5 marker:font-bold marker:text-2xl pl-5 4xl:mt-10 mt-3" liClassName="4xl:text-[20px] xl:text-[18px] font-normal text-[16px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* unleash section */}
            <section className="bg-[#EFEFEF] xl:mt-20 xl:pb-0 custom-container xl:!px-0 h-full max-md:px-0 pb-[5rem]">
                <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-24  xl:!pr-0">
                    <div className="xl:col-span-6 col-span-12 order-1 xl:order-1">
                        <div className="xl:block hidden h-full">
                            <Image
                                src="/images/sap/sap-digital-desk/desktop/business-professionals-tablet-collaboration.webp"
                                width={950}
                                height={600}
                                priority
                                sizes="100vw"
                                alt={t("unleashSectionAlt")}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/sap/sap-digital-desk/mobile/business-professionals-tablet-collaboration-mobile.webp"
                                width={950}
                                height={600}
                                className="w-full"
                                alt={t("unleashSectionAlt")}
                                priority
                                sizes="100vw"
                            />
                        </div>
                    </div>
                    <div className="xl:col-span-6 col-span-12 order-2 xl:order-1 h-full px-[35px] xl:px-0 md:px-0">
                        <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] mt-10 xl:mt-0 leading-tight 4xl:pt-16 xl:pt-5">
                            {t('unleashTitle')}
                        </h2>
                        <h3 className="4xl:text-[36px] text-[20px] mt-5 xl:font-bold font-medium  4xl:pr-40 leading-tight">
                            {t('unleashSubTitle')}
                        </h3>
                        <p className="mt-5 leading-tight pr-10 4xl:pr-40 font-normal">
                            {t('unleashTitleDesc')}
                        </p>
                        <UnorderedList arrName={unleashData} ulClassName="list-disc 4xl:space-y-5 4xl:text-[20px] xl:text-[18px] text-[16px] pl-5 marker:font-bold marker:text-2xl leading-tight pr-5 xl:pr-0" liClassName="first:mt-3" />
                        <div className="absolute 4xl:mt-10 mt-2">
                            <LearnMore btnName={t('learnMoreBtn')}/>
                        </div>
                    </div>
                </div>
            </section>
            {/* seamless section */}
            <section className="mt-16">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:hidden block">
                        <Image
                            src="/images/sap/sap-digital-desk/mobile/highway-intersection-aerial-connectivity-view-mobile.webp"
                            alt={t("seamlessSectionAlt")}
                            priority
                            className="w-full h-[657px] object-cover"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="xl:col-span-6 col-span-12 bg-[#068EDA] p-8 text-white xl:mt-10 mb-10 z-[9]  mt-[-175px] custom-container xl:!pr-0  !w-[85%] xl:!w-full">
                        <h2 className="leading-tight xl:mt-0 xl:text-[40px]">{t('seamlessTitle')}</h2>
                        <h3 className="mt-5 xl:text-[36px] text-[20px] leading-tight font-semibold">{t('seamlessSubTitle')}</h3>
                        <p className="mt-8 font-light leading-tight">
                            {t('seamlessDesc')}
                        </p>
                        <UnorderedList arrName={seamlessData} ulClassName="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl leading-tight xl:pr-32 font-light" liClassName="first:mt-5" />
                    </div>
                    <div className="xl:col-span-6 col-span-12 xl:block hidden xl:ml-[-350px]">
                        <Image
                            src="/images/sap/sap-digital-desk/desktop/highway-intersection-aerial-connectivity-view.webp"
                            alt={t("seamlessSectionAlt")}
                            priority
                            className="w-full h-full"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                </div>
            </section>
            {/* code the future section */}
            <section className="custom-container xl:mt-24  h-full xl:!pl-0 max-md:px-0">
                <div className="grid xl:grid-cols-12 grid-cols-1 h-full xl:gap-20 items-center">
                    <div className="col-span-8">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/sap/sap-digital-desk/desktop/software-developer-coding-programming-interface.webp"
                                alt={t("codeFutureAlt")}
                                priority
                                className="w-full h-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/sap/sap-digital-desk/mobile/software-developer-coding-programming-interface-mobile.webp"
                                alt={t("codeFutureAlt")}
                                priority
                                className="w-full  md:h-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                    </div>
                    <div className="col-span-4 mx-[35px] xl:mx-0 mt-10 xl:mt-0 md:mx-0">
                        <h2 className="leading-tight 4xl:text-[56px] text-[26px] xl:text-[40px]">{t('codeFutureTitle')}</h2>
                        <h3 className="4xl:text-[36px] text-[22px] mt-5 font-semibold leading-tight">{t('codeFutureSubTitle')}</h3>
                        <p className="mt-5 leading-tight">{t('codeFutureDesc')}</p>
                        <UnorderedList arrName={codeData} ulClassName="list-disc 4xl:space-y-3 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] text-[16px] 4xl:mt-10 mt-3" liClassName="first:mt-5" />
                    </div>
                </div>
            </section>
            {/* intelligent section */}
            <section className="mt-16 custom-container xl:!pr-0 max-md:px-0">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="col-span-7 order-1 xl:order-2 xl:ml-[-300px]">
                        <Image
                            src="/images/sap/sap-digital-desk/desktop/business-analytics-dashboard-data-review.webp"
                            alt={t("intelligentSectionAlt")}
                            priority
                            className="w-full xl:h-full h-[466px] xl:pb-20"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>

                    {/* Content second on mobile, first on desktop */}
                    <div className={`col-span-5  order-2 xl:order-1  bg-[#073259] xl:pb-0 pb-20 p-8 text-white xl:mt-24 z-[9] mx-[35px] xl:mx-0 mt-[-115px] xl:!pr-0 xl:pl-[80px]"
                    
                                  ${locale === "es"
                                    ? "xl:h-[690px] 2xl:h-[650px] 4xl:h-[718px]"
                                    : locale === "fr"
                                        ? "xl:h-[640px] 2xl:h-[650px] 4xl:h-[650px]"
                                        : "xl:h-[640px] 2xl:h-[600px] 4xl:h-[650px]"
                                }`}
                    
                    >
                        <h2 className="leading-tight xl:mt-10 4xl:text-[56px] text-[26px] xl:text-[40px]">{t('intelligentTitle')}</h2>
                        <h3 className="mt-5 4xl:text-[36px] text-[20px] leading-tight font-semibold xl:pr-10">
                            {t('intelligentSubTitle')}
                        </h3>
                        <p className="mt-8 font-light leading-tight xl:pr-20">
                            {t('intelligentDesc')}
                        </p>
                        <UnorderedList arrName={intelligentData} ulClassName="list-disc xl:space-y-5 xl:text-[20px] text-[16px] pl-5 marker:font-bold marker:text-2xl leading-tight font-light" liClassName="first:mt-5" />
                        <div className="4xl:mt-[36px] 2xl:mt-[48px] xl:mt-[40px] mt-[29px] absolute">
                            <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')}/>
                        </div>
                    </div>
                </div>
            </section>
            {/* winning section */}
            <section className="relative xl:mt-10 custom-container mt-[5rem] xl:!pr-0 max-md:px-0">
                <div className="relative">
                    <div className="relative">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/sap/sap-digital-desk/desktop/sap-successfactors-hr-talent-meeting.webp"
                                alt={t("winnigSectionAlt")}
                                priority
                                className="w-full h-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/sap/sap-digital-desk/mobile/sap-successfactors-hr-talent-meeting-mobile.webp"
                                alt={t("winnigSectionAlt")}
                                priority
                                className="w-full h-[297px] md:h-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                        <div className="absolute xl:inset-0 items-start px-[35px] md:px-0 grid xl:grid-cols-12   xl:px-20 py-11 text-black xl:pr-40">
                            <div className="col-span-10 2xl:col-span-6">
                                <h2 className="4xl:text-[60px] text-[26px] xl:text-[40px] leading-tight pr-0 4xl:pr-64">
                                    {t('winningTitle')}
                                </h2>
                                <h3 className="mt-5 4xl:text-[36px] text-[22px] leading-tight font-semibold pr-0 2xl:pr-32">
                                    {t('winningTitle2')}
                                </h3>
                                <p className="mt-5 font-normal">
                                    {t('winningDesc')}
                                </p>
                                <UnorderedList arrName={winningSectionData} ulClassName="list-disc 4xl:space-y-5 xl:space-y-3 pl-5 4xl:text-[20px] text-[16px] mt-5 " liClassName="" />
                                <div className="xl:bottom-0 absolute">
                                    <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* smart procurement section */}
            <section className="custom-container xl:mt-20 mt-[30rem] max-[500px]:mt-[590px] max-[378px]:mt-[624px] md:mt-[25rem] ">
                <div className="grid xl:grid-cols-12 grid-cols-12">
                    <div className="xl:col-span-6 col-span-12">
                        <h2 className="leading-tight 4xl:text-[56px] text-[26px] xl:text-[40px]">{t('smartTitle')}</h2>
                        <h3 className="4xl:text-[36px] xl:text-[30px] text-[20px] mt-5 leading-tight font-semibold">{t('smartSubTitle')}</h3>
                        <UnorderedList arrName={sapAribaData} ulClassName="list-disc space-y-3 pl-5 xl:text-[20px] text-[16px] mt-5" liClassName="" />
                    </div>
                    <div className="xl:col-span-6 col-span-12 mt-20 xl:mt-0">
                        <h2 className="leading-tight 4xl:text-[56px] text-[26px] xl:text-[40px]">{t('modernTitle')}</h2>
                        <h3 className="4xl:text-[36px] xl:text-[30px] text-[20px] mt-5 leading-tight font-semibold">{t('modernSubTitle')}</h3>
                        <UnorderedList arrName={sapDatasphereData} ulClassName="list-disc space-y-3 pl-5 xl:text-[20px] text-[16px] mt-5" liClassName="" />
                    </div>
                </div>
            </section>
            {/* sap signavio section */}
            <section className="relative  xl:mt-32 mt-10">
                <div className="xl:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/sap-signavio-activate-implementation-process.webp"
                        alt={t("sapSignavioAlt")}
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/sap-signavio-activate-implementation-process-mobile.webp"
                        alt={t("sapSignavioAlt")}
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="h-full relative custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-black">
                        <div className="xl:col-span-9 col-span-12">
                            <h2 className="text-[25px] 4xl:text-[60px] mt-16 leading-tight 2xl:text-[48px] xl:text-[42px]">
                                {t('sapSignavioTitle')}
                            </h2>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-black">
                        <div className="xl:col-span-7 col-span-12">
                            <p className="mt-5">{t('sapSignavioDesc')} </p>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 xl:gap-x-12 gap-y-6 mt-16">
                        <div className="grid gap-6 xl:col-span-5 col-span-12">
                            {sapTransformationSteps.slice(0, 3).map(({ step, title, description }, index) => (
                                <div key={step} className="flex w-full gap-x-4 items-start min-h-[100px]">
                                    <div className="w-[70px] h-[70px] flex-shrink-0 bg-[#006FBE] text-white font-bold flex items-center justify-center text-4xl">
                                        {step}
                                    </div>
                                    <div className="flex flex-col xl:flex-row xl:gap-10 justify-center w-full xl:items-center">
                                        <p className="font-bold 4xl:text-[22px] xl:text-[20px] text-[18px] text-black">{title}</p>
                                        <p className={`font-normal 4xl:text-[20px] xl:text-[18px] text-black mt-1`}>{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="grid xl:col-span-5 col-span-12 gap-6">
                            {sapTransformationSteps.slice(3).map(({ step, title, description, plOverride }, index) => (
                                <div key={step} className="flex w-full gap-x-4 items-start min-h-[100px]">
                                    <div className="w-[70px] h-[70px] flex-shrink-0 bg-[#006FBE] text-white font-bold flex items-center justify-center text-4xl">
                                        {step} 
                                    </div>
                                    <div className="flex flex-col xl:items-center xl:flex-row xl:gap-10 justify-center w-full">
                                        <p className="font-bold 4xl:text-[22px] xl:text-[20px] text-[18px] text-black">{title}</p>
                                        <p className={`font-normal 4xl:text-[20px] xl:text-[18px] text-black mt-1`}>{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-[#163055] xl:mb-[-60px] col-span-10 z-[20] p-8 xl:text-[26px] text-[20px] text-white mt-16 leading-tight font-normal">
                            {t('sapSignavioBlueBox')}    
                        </div>
                    </div>
                </div>
            </section>
            {/* supercharge section */}
            <section className="relative custom-container xl:!pl-0 xl:!pr-[142px] mt-[5rem] xl:mt-0 max-md:px-0">
                <div className="relative">
                    <div className="xl:block hidden">
                        <picture>
                            <source
                                media="(min-width: 1280px)"
                                srcSet="/images/sap/sap-digital-desk/desktop/sap-joule-hr-integration-puzzle-concept.webp"
                            />
                            <img
                                src="/images/sap/sap-digital-desk/desktop/sap-joule-hr-integration-puzzle-concept.webp"
                                alt={t("superchargeSectionAlt")}
                                className="w-full h-[500px] xl:h-[720px] 2xl:h-[820px] 4xl:h-[800px]"
                            />
                        </picture>
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/sap/sap-digital-desk/mobile/sap-joule-hr-integration-puzzle-concept-mobile.webp"
                            alt={t("superchargeSectionAlt")}
                            priority
                            className="w-full h-full sm:h-[1150px] md:h-[1100px] max-[420px]:h-[999px] object-cover"
                            style={{ objectPosition: "75% 20%" }}
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="py-10 xl:py-20 text-black relative xl:absolute xl:inset-0 xl:flex xl:items-end xl:justify-end -mt-[39rem] md:mt-[-32rem] xl:mt-0 px-[35px] xl:px-7">
                        <div className="4xl:max-w-[710px] xl:max-w-[440px]">
                            <h2 className="text-[25px] 4xl:text-[60px] xl:text-[40px] leading-tight">
                                {t('superChargeTitle')}
                            </h2>
                            <p className="mt-5 font-normal">
                                {t('superChargeDesc')}
                            </p>
                            <UnorderedList arrName={superchargeData} ulClassName="list-disc space-y-3 pl-5 4xl:text-[20px] xl:text-[18px] text-[16px] mt-5" liClassName="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* rialtes BTP section */}
            <section className="h-full custom-container xl:pr-0 max-md:px-0 mt-0 ">
                <div className="grid xl:grid-cols-12 grid-cols-1 h-full 4xl:gap-20 xl:gap-10 items-center">
                    <div className="xl:col-span-7 col-span-12 order-1 xl:order-2 h-full z-20">
                        <div className="xl:block hidden h-full">
                            <Image
                                src="/images/sap/sap-digital-desk/desktop/business-team-digital-dashboard-analysis.webp"
                                alt={t("btpSectionAlt")}
                                priority
                                className="w-full h-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/sap/sap-digital-desk/mobile/business-team-digital-dashboard-analysis-mobile.webp"
                                alt={t("btpSectionAlt")}
                                priority
                                className="w-full h-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </div>
                    </div>
                    <div className="xl:col-span-5 col-span-12 order-2 xl:order-1 mx-[35px] xl:mx-0 xl:mt-0 md:mx-0 ">
                        <h2 className="leading-tight 4xl:text-[56px] text-[26px] xl:text-[35px] mt-16">{t('btpTitle')}</h2>
                        <h3 className="4xl:text-[36px] text-[22px] mt-5 font-semibold leading-tight">
                            {t('btpSubTitle')}
                        </h3>
                        <p className="4xl:mt-8 xl:mt-4 font-normal 4xl:text-[20px] text-[16px]">
                            {t('btpDesc')}
                        </p>
                        <UnorderedList arrName={btpData} ulClassName="list-disc 4xl:space-y-5 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] text-[16px] 4xl:mt-10 mt-3 xl:pr-10" liClassName="" />
                        <div className="mt-5 relative">
                            <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')}/>
                        </div>
                    </div>
                </div>
            </section>
            {/* migrate section */}
            <section className="relative xl:mt-32 mt-10 pb-20 xl:pb-0">
                <div className="xl:block hidden">
                    <Image
                        src="/images/sap/sap-digital-desk/desktop/sap-successfactors-migration-services-overview.webp"
                        alt={t("migrateSectionAlt")}
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/sap/sap-digital-desk/mobile/sap-successfactors-migration-services-overview-mobile.webp"
                        alt={t("migrateSectionAlt")}
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className="h-full relative custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white">
                        <div className="xl:col-span-9 col-span-12">
                            <h2 className="text-[25px] 4xl:text-[60px] xl:text-[50px] mt-16 leading-tight">
                                {t('migrateTitle')}
                            </h2>
                            <h3 className="xl:text-[36px] text-[20px] xl:mt-12 mt-5">{t('migrateSubTitle')}</h3>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white xl:pt-10 pt-5 xl:pb-20">
                        <div className="xl:col-span-6 col-span-12">
                            <h3 className="xl:text-[28px] text-[18px] xl:font-semibold font-medium">{t('migrateSubTitle2')}</h3>
                            <UnorderedList arrName={migrateData1} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3 xl:pr-20" liClassName="" />
                        </div>
                        <div className="xl:col-span-6 col-span-12 mt-10 xl:mt-0">
                            <h3 className="xl:text-[28px] text-[18px] xl:font-semibold font-medium xl:pr-20">{t('migrateSubTitle3')}</h3>
                            <UnorderedList arrName={migrateData2} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:text-[20px] text-[16px] xl:mt-10 mt-3 xl:pr-20" liClassName="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* why partner section */}
            <section className="custom-container h-full xl:!pl-[142px] max-md:px-0 mt-10 xl:mt-0">
                <div className="grid xl:grid-cols-12 grid-cols-1 h-full xl:gap-20">
                    <div className="col-span-7">
                        <Image
                            src="/images/sap/sap-digital-desk/desktop/digital-partnership-handshake-technology-connection.webp"
                            alt={t("whyPartnersAlt")}
                            priority
                            className="w-full h-full"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="col-span-5 xl:mt-20 mx-[35px] xl:mx-0 mt-10 md:mx-0">
                        <h2 className="leading-tight xl:text-[40px] 4xl:text-[60px] text-[26px]">{t('whyPartenerTitle')}</h2>
                        <h3 className="4xl:text-[36px] text-[20px] mt-5 font-semibold leading-tight">{t('whyPartenerSubTitle')}</h3>
                        <UnorderedList arrName={whyPartnerData} ulClassName="list-disc 4xl:space-y-5 xl:space-y-3 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] text-[16px] xl:mt-5 4xl:mt-10 mt-3" liClassName="" />
                    </div>
                </div>
            </section>
            {/* contact form */}
            <div className="custom-container text-black py-20">
                <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle')} className={"leading-tight xl:text-[40px] xl:max-w-[71%]"} />
            </div >
        </div >
    );
}