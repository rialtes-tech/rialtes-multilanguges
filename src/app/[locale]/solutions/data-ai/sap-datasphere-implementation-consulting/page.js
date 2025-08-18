"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import ContactForm from "@/app/[locale]/components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Script from "next/script";
import { changeLocalization } from "../../components/changeLocalization";
import enContent from '../../../../../../messages/en/solutions.json';
import esContent from '../../../../../../messages/es/solutions.json';
import { useLocale, useTranslations } from "next-intl";

export default function () {
    const t = useTranslations('datasphere')
    const locale = useLocale();
    const content = locale === 'es' ? esContent : enContent;
    const { whyrialtessectiondata, industryAcceleratorsData, buildIntelligentData, intelligentData, aiPoweredData, educationSectionData, omniSectionData, aiReadyData
        , sapHanaData, sapAribaData, sapSuccessData, salesforcesapData, advancedData, aiPoweredUseData, globalPresenceData
    } = content.datasphere;

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "SAP Datasphere Consulting & Implementation Services",
        "url": "https://www.rialtes.com/solutions/data-ai/sap-datasphere-implementation-consulting/",
        "description": "Looking to unify and harness enterprise data using SAP Datasphere? Rialtes offers consulting, implementation, integration, and AI optimization services to turn data into actionable insights.",
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
        "serviceType": "SAP Datasphere Consulting and AI-Driven Data Lake Implementation",
        "category": "Enterprise Data Management & Analytics",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "End-to-End SAP Datasphere Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "SAP Datasphere Consulting & Architecture Advisory" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "SAP Datasphere Implementation & Configuration" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "SAP Datasphere Integration with SAP & Non-SAP Systems" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Industry-Specific AI Data Lake Accelerators" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Real-Time Data Governance & Compliance Setup" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "AI-Powered Data Visualization with SAP Analytics Cloud & Tableau" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Post-Go-Live AI Optimization and KPI Dashboards" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Integration with SAP S/4HANA, Ariba, and SuccessFactors" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Salesforce + SAP Datasphere Integration for Customer 360" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "AI Use Cases for Manufacturing, Automotive, Retail, Education & HR" }
                }
            ]
        }
    }
    const WhyRialtesSection = () => {
        return (
            <section className="w-full relative">
                <div className="w-full xl:pt-[100px] z-[0]">
                    {/* Mobile Image */}
                    <Image
                        src="/images/solutions/data-sphere/Mobile/why-rialtes-mob-img.webp"
                        alt="why-rialtes-img-mobile"
                        className="w-full block md:hidden"
                        priority
                        width={0}
                        height={0}
                    />
                    {/* Desktop Image */}
                    <div className="md:h-[600px] lg:h-[830px] xl:h-[860px] 2xl:h-[960px] w-full">
                        <Image
                            src="/images/solutions/data-sphere/why-rialtes-img.webp"
                            alt="why-rialtes-img"
                            className="w-full hidden md:block h-full md:object-[75%_25%] xl:object-[45%_25%]"
                            priority
                            width={0}
                            height={0}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
                {/* Content Section */}
                <div className="w-full xl:absolute xl:top-0 xl:left-0 xl:bg-transparent bg-[#80857E] xl:pt-[150px] 2xl:pt-[154px] pt-[37px] xl:pb-[41px] z-[1]">
                    <div className="custom-container mx-auto grid xl:grid-cols-12 xl:gap-[20px] gap-[39px]">
                        <div className="xl:col-span-7">
                            <h2 className="text-[#FFFFFF] 4xl:text-[60px] xl:text-[40px] text-[26px] font-Light leading-tight">
                                {t('whyRialtesTitle')}
                            </h2>
                            <h3 className="text-[#FFFFFF] 4xl:text-[42px] xl:text-[36px] text-[22px] font-semibold leading-tight xl:w-[100%] w-[90%] xl:mt-[38px] mt-[17px]">
                                {t('whyRialtesSubTitle')}
                            </h3>

                            <div className="grid lg:grid-cols-2 lg:gap-[20px] lg:w-[94%] w-[90%] md:w-[70%]">
                                {whyrialtessectiondata.map((data, ind) => {
                                    const isBorderLeft = ind === 1 || ind === 3;
                                    const isNotLast = ind !== whyrialtessectiondata.length - 1;
                                    return (
                                        <div key={ind} className="w-full flex items-center">
                                            <div
                                                className={`relative 4xl:mt-[48px] lg:mt-[38px] lg:py-0 py-[39px] text-[#FFFFFF] 4xl:text-[20px] xl:text-[16px] text-[17px] font-medium leading-[20px] xl:leading-[24px] ${isBorderLeft ? 'lg:border-l-2 lg:pl-6 border-white' : ''} lg:border-b-0`}>
                                                {data}
                                                {isNotLast && (
                                                    <div className="absolute bottom-0 left-0 w-[73px] border-b-2 border-white lg:hidden" />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="mt-[6px] md:mt-[40px] md:mb-[40px] xl:mt-[61px] xl:mb-[61px]">
                                <LearnMore bgcolor="[#006FBE]" bordercolor="[#006FBE]" />
                            </div>
                        </div>
                        <div className="w-full"></div>
                    </div>
                </div>
            </section>
        )
    }
    const BuildIntelligentSection = () => {
        return (
            <section>
                <section className="custom-container max-md:px-0 md:!pr-0 xl:mt-[0px] mt-[0px]">
                    <div>
                        {/* Mobile Image */}
                        <Image
                            src="/images/solutions/data-sphere/Mobile/build-intelligent-mob-img.webp"
                            alt="build-intelligent-mob-img"
                            className="w-full h-full block md:hidden"
                            priority
                            width={0}
                            height={0}
                        />
                        {/* Desktop Image */}
                        <Image
                            src="/images/solutions/data-sphere/build-intelligent-img.webp"
                            alt="build-intelligent-desktop-img"
                            className="w-full h-full hidden md:block"
                            priority
                            width={0}
                            height={0}
                        />
                    </div>
                </section>
                <div className="custom-container max-md:px-0">
                    <div className="xl:pl-[94px] px-[35px] xl:mt-[-100px] mt-[-30px] xl:pt-[78px] pt-[38px] xl:pb-[0px] pb-[0px] bg-[#073259] relative">
                        <h2 className="text-[#FFFFFF] 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light xl:w-[70%]">
                            {t('buildTitle')}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-[71px] gap-[20px] xl:mt-[53px] mt-[24px]">
                            {/* Left Column */}
                            <div>
                                <h2 className="text-[#FFFFFF] 4xl:text-[40px] xl:text-[36px] text-[22px] leading-tight font-semibold">
                                    {t('unifiedTitle')}
                                </h2>
                                <h3 className="text-[#FFFFFF] font-semibold 4xl:text-[36px] xl:text-[30px] text-[18px] leading-[22px] xl:leading-[44px] mt-[24px] xl:mt-[37px]">
                                    {t('unlockTitle')}
                                </h3>
                                <p className="text-[#FFFFFF] font-light 4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight mt-[24px] xl:mt-[37px] xl:w-[80%] w-[90%]">
                                    {t('buildDesc')}
                                </p>
                            </div>
                            {/* Right Column */}
                            <div className="flex flex-col">
                                <p className="text-[#FFFFFF] font-semibold xl:text-[22px] text-[20px] leading-[24px] xl:leading-[27px] md:mt-0 mt-[26px]"> {t('keyBenefitsTitle')}</p>
                                <UnorderedList arrName={buildIntelligentData} ulClassName="list-disc pl-[22px] xl:w-[86%] w-[90%] xl:mt-[29px] mt-[26px]" liClassName="text-[#FFFFFF] mt-[19px] first:mt-0 xl:mt-[24px] 4xl:text-[20px] xl:text-[18px] text-[16px] xl:leading-tight font-light" />
                                <div className="2xl:mt-[104px] xl:mt-[144px] mt-[44px] xl:ml-1">
                                    <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    const IndustryAcceleratorsSection = () => {
        return (
            <section className="w-full xl:mt-[147px] mt-[41px]">
                <div className="grid grid-cols-1 md:grid-cols-[4fr_5fr]">
                    <div className="w-full">
                        {/* Mobile Image */}
                        <Image
                            src="/images/solutions/data-sphere/Mobile/industry-accelerators-mob-img.webp"
                            alt="industry-accelerators-mob-img"
                            className="w-full h-full block md:hidden"
                            priority
                            width={0}
                            height={0}
                        />
                        <div className="h-full w-full">
                            <Image
                                src="/images/solutions/data-sphere/industry-accelerators-img.webp"
                                alt="industry-accelerators-desktop-img"
                                className="w-full h-full hidden md:block object-cover"
                                priority
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                    <div className="text-[#000000] xl:pl-[60px] mx-[35px] xl:pt-0 pt-[40px]">
                        <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light">
                            {t('industryTitle')}
                        </h2>
                        <h3 className="font-semibold 4xl:text-[42px] xl:text-[38px] text-[22px] leading-tight mt-[29px] xl:mt-[29px]">
                            {t('industrySubTitle1')}
                        </h3>
                        <h3 className="font-semibold 4xl:text-[36px] xl:text-[30px] text-[18px] leading-tight mt-[22px] xl:mt-[29px] xl:w-[90%]">
                            {t('industrySubTitle2')}
                        </h3>
                        <p className="4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight mt-[22px] xl:mt-[45px] xl:w-[86%] font-light">
                            {t('industryDesc')}
                        </p>
                        <h4 className="font-semibold 4xl:text-[22px] xl:text-[20px] text-[18px] leading-tight mt-[29px] xl:mt-[54px]">
                            {t('industrySubTitle3')}
                        </h4>
                        <UnorderedList ulClassName="list-disc pl-[22px] w-[90%] xl:mt-[28px] mt-[22px] 4xl:space-y-[24px] space-y-[19px]" arrName={industryAcceleratorsData} liClassName="4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight font-light" />
                    </div>
                </div>
            </section>
        )
    }
    const IntelligentAutomativeSection = () => {
        return (
            <section className="relative xl:mt-[66px] mt-[53px] custom-container max-md:px-0 md:!pr-0">
                <Image
                    src="/images/solutions/data-sphere/Mobile/intelligent-automative-mob-img.webp"
                    alt="intelligent-automative-img"
                    className="block md:hidden w-full max-[442px]:h-[1200px] h-[1000px]"
                    priority
                    width={0}
                    height={0}
                />
                {/* Desktop Image */}
                <div className="md:h-[630px] lg:h-[630px] xl:h-[800px] 2xl:h-[860px]">
                    <Image
                        src="/images/solutions/data-sphere/intelligent-automative-img.webp"
                        alt="intelligent-automative-img"
                        className="hidden md:block w-full h-full object-cover"
                        style={{ objectPosition: "75% 20%" }}
                        priority
                        width={0}
                        height={0}
                    />
                </div>
                <div className="absolute inset-0 flex items-start justify-start md:mt-[64px] mt-[254px]">
                    <div className="md:w-[86%] custom-container">
                        <h2 className="text-[#FFFFFF] 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light 4xl:w-[90%] xl:w-[80%] lg:w-[80%]">
                            {t('intelligentTitle')}
                        </h2>
                        <h3 className="text-[#FFFFFF] 4xl:text-[42px] xl:text-[38px] text-[22px] leading-tight font-semibold xl:mt-[45px] mt-[24px] xl:w-[80%] w-[90%]">
                            {t('intelligentSubTitle')}
                        </h3>
                        <UnorderedList arrName={intelligentData} ulClassName="list-disc pl-[22px] lg:w-[70%] w-[90%] mt-[24px] xl:mt-[39px] 4xl:space-y-[24px] space-y-[19px]" liClassName="text-[#FFFFFF] 4xl:text-[20px] xl:text-[18px] text-[16px] xl:leading-tight" />
                        <div className="xl:mt-[20px] mt-[54px]">
                            <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} />
                        </div>
                        <div className="bg-[#163055] absolute bottom-[-70px] mr-[36px] lg:ml-[-20px]">
                            <p className="text-[#FFFFFF] 4xl:text-[26px] xl:text-[24px] text-[22px] leading-tight xl:py-[37px] py-[27px] xl:px-[43px] px-[24px] font-light">
                                {t('intelligentDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    const AIReadyManufacturingSection = () => {
        return (
            <section className="w-full xl:mt-[158px] mt-[180px] relative">
                <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr]">
                    <div className="order-1 md:order-2 w-full">
                        <Image
                            src="/images/solutions/data-sphere/Mobile/ai-ready-mob-img.webp"
                            alt="ai-ready-mob-img"
                            className="w-full h-full block md:hidden"
                            priority
                            width={0}
                            height={0}
                        />
                        {/* Desktop Image */}
                        <Image
                            src="/images/solutions/data-sphere/ai-ready-img.webp"
                            alt="ai-ready-img"
                            className="w-full h-full hidden md:block object-cover"
                            priority
                            width={0}
                            height={0}
                        />
                    </div>
                    <div className="order-2 md:order-1 text-[#FFFFFF] custom-container lg:!pr-0 xl:pt-[88px] pt-[46px] pb-[120px] bg-[#64676C]">
                        <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light xl:w-full w-[80%]">
                            {t('aiReadyTitle')}
                        </h2>
                        <h3 className="font-semibold 4xl:text-[42px] xl:text-[36px] text-[22px] leading-tight mt-[19px] 4xl:mt-[45px] xl:mt-[40px] xl:w-full w-[80%]">
                            {t('aiReadySubTitle1')}
                        </h3>
                        <h3 className="font-semibold 4xl:text-[36px] xl:text-[30px] text-[18px] leading-[22px] xl:leading-[44px] mt-[19px] 4xl:mt-[45px] xl:mt-[40px] xl:w-[80%]">
                            {t('aiReadySubTitle2')}
                        </h3>
                        <UnorderedList arrName={aiReadyData} ulClassName="list-disc pl-[22px] w-[80%] xl:mt-[39px] mt-[29px] 4xl:space-y-[24px] space-y-[19px]" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px] xl:leading-[24px] leading-[22px] font-light" />
                    </div>
                </div>
                <div className="custom-container">
                    <div className="md:w-[56%] relative">
                        <div className="bg-[#163055] mt-[-90px] sm:mt-[-60px] w-full">
                            <p className="text-[#FFFFFF] 4xl:text-[26px] xl:text-[20px] text-[22px] leading-tight xl:py-[37px] py-[27px] xl:px-[43px] px-[24px] font-light">
                                {t('aiReadyDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    const OmnichannelSmartEducationSection = () => {
        return (
            <section className="custom-container max-md:px-0 xl:mt-[144px] mt-[120px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <div className="relative">
                            <Image
                                src="/images/solutions/data-sphere/Mobile/omnichannel-mob-img.webp"
                                alt="omnichannel-mob-img"
                                className="block xl:hidden h-auto mx-auto -mb-[247px] relative z-10 w-[80%]"
                                priority
                                width={0}
                                height={0}
                            />
                            {/* Desktop Image */}
                            <div className="hidden xl:block w-[80%] mx-auto relative z-10 xl:-mb-[46%]">
                                <Image
                                    src="/images/solutions/data-sphere/omnichannel-img.webp"
                                    alt="omnichannel-img"
                                    className="w-full"
                                    priority
                                    width={0}
                                    height={0}
                                />
                            </div>
                        </div>
                        <div className="relative text-[#000000] bg-[#E0E0E0] xl:pt-[300px] 2xl:pt-[360px] pt-[305px] xl:pb-[145px] pb-[100px] px-[35px] xl:px-[70px] overflow-visible">
                            <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light xl:w-[70%]">
                                {t('omniTitle')}
                            </h2>
                            <h3 className="font-semibold 4xl:text-[42px] xl:text-[36px] text-[26px] leading-tight mt-[27px] xl:mt-[39px] xl:w-[90%] 2xl:w-[80%]">
                                {t('omniSubTitle')}
                            </h3>
                            <UnorderedList arrName={omniSectionData} ulClassName="list-disc pl-[22px] w-[90%] xl:mt-[47px] mt-[25px] 4xl:space-y-[24px] space-y-[19px]" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px] xl:leading-tight font-light" />
                        </div>
                        <div className="bg-[#163055] mx-[35px] xl:mx-[70px] xl:mt-[-90px] mt-[-60px] relative z-20">
                            <p className="text-[#FFFFFF] 4xl:text-[26px] xl:text-[22px] text-[20px] leading-tight xl:py-[37px] py-[27px] xl:px-[43px] px-[24px] font-light">
                                {t('omniDesc')}
                            </p>
                        </div>
                    </div>
                    <div className="xl:mt-[40%] mt-[80px]">
                        <div className="relative">
                            <Image
                                src="/images/solutions/data-sphere/Mobile/smart-education-mob-img.webp"
                                alt="smart-education-mob-img"
                                className="block xl:hidden h-auto mx-auto -mb-[247px] relative z-10 w-[80%]"
                                priority
                                width={0}
                                height={0}
                            />
                            {/* Desktop Image */}
                            <div className="hidden xl:block w-[80%] mx-auto relative z-10 xl:-mb-[46%]">
                                <Image
                                    src="/images/solutions/data-sphere/smart-education-img.webp"
                                    alt="smart-education-img"
                                    className="w-full"
                                    priority
                                    width={0}
                                    height={0}
                                />
                            </div>
                        </div>
                        <div className="relative text-[#000000] bg-[#7AB5BF] xl:pt-[300px] 2xl:pt-[360px] pt-[305px] xl:pb-[145px] pb-[100px] px-[35px] xl:pl-[70px] xl:pr-[40px] overflow-visible">
                            <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light xl:w-[90%]">
                                {t('smartEducationTitle')}
                            </h2>
                            <h3 className="font-semibold  4xl:text-[42px] xl:text-[36px] text-[26px] leading-tight mt-[27px] xl:mt-[36px] xl:w-[90%] 2xl:w-[80%]">
                                {t('smartEducationSubTitle')}
                            </h3>
                            <h4 className="font-semibold xl:text-[36px] text-[20px] leading-tight mt-[23px] xl:mt-[36px] xl:w-[90%] 2xl:w-[80%]">
                                {t('smartEducationSubTitle1')}
                            </h4>
                            <UnorderedList arrName={educationSectionData} ulClassName="list-disc pl-[22px] 2xl:w-[80%] xl:w-[90%] w-[90%] xl:mt-[49px] mt-[25px] 4xl:space-y-[24px] space-y-[19px]" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px] xl:leading-tight font-light" />
                        </div>
                        <div className="bg-[#163055] mx-[35px] xl:mx-[70px] xl:mt-[-90px] mt-[-60px] relative z-20">
                            <p className="text-[#FFFFFF] 4xl:text-[26px] xl:text-[22px]  text-[20px] leading-tight xl:py-[37px] py-[27px] xl:px-[43px] px-[24px] font-light">
                                {t('smartEducation')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    const AiPoweredHRAnalyticsSection = () => {
        return (
            <section className="xl:mt-[142px] mt-[107px] custom-container max-lg:px-0 xl:!pl-0 ">
                <div className="grid grid-cols-1 xl:grid-cols-[7fr_5fr]">
                    <div>
                        <Image
                            src="/images/solutions/data-sphere/Mobile/ai-powered-hr-analytics-mob-img.webp"
                            alt="ai-powered-hr-analytics-mob-img"
                            className="block md:hidden h-full w-full mx-auto object-cover"
                            priority
                            width={0}
                            height={0}
                        />
                        {/* Desktop Image */}
                        <div className="w-full h-full">
                            <Image
                                src="/images/solutions/data-sphere/ai-powered-hr-analytics-img.webp"
                                alt="ai-powered-hr-analytics-desktop-img"
                                className="hidden md:block w-full h-full object-cover"
                                priority
                                width={0}
                                height={0}
                                style={{ objectPosition: "20% 20%" }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="relative text-[#FFFFFF] xl:pl-[72px] xl:ml-[-20%] xl:mt-[100px] mx-[0px] px-[35px] xl:pt-[76px] pt-[42px] bg-[#006FBE] xl:pb-[76px] pb-[142px] overflow-visible">
                            <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light xl:w-[80%]">
                                {t('aiPoweredTitle')}
                            </h2>
                            <h3 className="font-semibold 4xl:text-[42px] xl:text-[36px] text-[26px] leading-tight mt-[27px] xl:mt-[36px] xl:w-[80%]">
                                {t('aiPoweredSubTitle1')}
                            </h3>
                            <h4 className="font-semibold xl:text-[28px] 4xl:text-[36px] text-[20px] leading-tight mt-[23px] xl:mt-[36px] xl:w-full">
                                {t('aiPoweredSubTitle2')}
                            </h4>
                            <UnorderedList arrName={aiPoweredData} ulClassName="list-disc pl-[22px] w-[90%] xl:mt-[49px] mt-[25px] 4xl:space-y-[24px] space-y-[19px]" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight font-light" />
                            <div className="bg-[#163055] w-[80%] absolute bottom-[-50px] xl:left-[0px] xl:w-[100%] xl:right-[-72px] xl:bottom-auto xl:top-full xl:mt-[0px] xl:transform-none">
                                <p className="text-[#FFFFFF] 4xl:text-[26px] xl:text-[22px] text-[20px] leading-tight xl:py-[37px] py-[27px] xl:px-[43px] px-[24px] font-light">
                                    {t('aiPoweredHrDesc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    const SapAribaSection = () => {
        return (
            <>
                <section className="custom-container max-md:px-0 md:!pr-0 xl:mt-[240px] mt-[94px]">
                    <h2 className="text-[#000000] 4xl:text-[60px] xl:text-[40px] text-[26px] font-light px-[36px] md:px-0">
                        {t('endToEndTitle1')} <div className="sm:block hidden" /> {t('endToEndTitle2')}
                    </h2>
                    <div>
                        <Image
                            src="/images/solutions/data-sphere/Mobile/sap-ariba-mob-img.webp"
                            alt="sap-ariba-mob-img"
                            className="w-full h-full block md:hidden mt-[60px]"
                            priority
                            width={0}
                            height={0}
                        />
                        {/* Desktop Image */}
                        <Image
                            src="/images/solutions/data-sphere/sap-ariba-img.webp"
                            alt="sap-ariba-desktop-img"
                            className="w-full h-full hidden md:block md:mt-[84px]"
                            priority
                            width={0}
                            height={0}
                        />
                    </div>
                </section>
                <div className="custom-container max-md:px-0">
                    <div className=" xl:pl-[57px] px-[35px] xl:mt-[-16%] mt-[-30px] xl:pt-[70px] pt-[42px] xl:pb-[68px] pb-[49px] bg-[#3280A3] relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-[20px] gap-[20px] xl:mt-[0px] mt-[24px]">
                            <div>
                                <h2 className="text-[#FFFFFF] 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light 2xl:w-[80%]">
                                    {t('endToEndSubTitle1')}
                                </h2>
                                <h3 className="text-[#FFFFFF] font-semibold 4xl:text-[42px] xl:text-[38px] text-[20px] leading-tight mt-[27px] xl:mt-[31px] xl:w-[90%] w-[80%]">
                                    {t('endToEndSubTitle2')}
                                </h3>
                            </div>
                            <div className="flex flex-col">
                                <UnorderedList arrName={sapAribaData} ulClassName="list-disc pl-[22px] 2xl:w-[86%] w-[90%] md:mt-[0] mt-[21px] 4xl:space-y-[24px] space-y-[19px]" liClassName="text-[#FFFFFF] xl:text-[24px] text-[16px] leading-tight font-normal" />
                                <div className="xl:mt-[49px] mt-[34px] xl:ml-1 ">
                                    <LearnMore />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const SapHanaSection = () => {
        return (
            <section className="custom-container max-md:px-0 md:!pl-0 ">
                <div className="bg-[#75603B] xl:mt-[91px] mt-[55px]">
                    <div className="grid grid-cols-1 md:grid-cols-[6fr_5fr]">
                        <div>
                            <Image
                                src="/images/solutions/data-sphere/Mobile/sap-hana-mob-img.webp"
                                alt="sap-hana-mob-img"
                                className="w-full h-full block md:hidden"
                                priority
                                width={0}
                                height={0}
                            />
                            {/* Desktop Image */}
                            <Image
                                src="/images/solutions/data-sphere/sap-hana-img.webp"
                                alt="sap-hana-desktop-img"
                                className="w-full h-full hidden md:block object-cover"
                                priority
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="text-[#FFFFFF] xl:pl-[36px] mx-[35px] xl:pt-[57px] pt-[42px]">
                            <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light">
                                {t('sapHanaTitle')}
                            </h2>
                            <h3 className="font-semibold 4xl:text-[42px] xl:text-[38px] text-[20px] leading-tight mt-[27px] xl:mt-[37px] xl:w-full">
                                {t('sapHanaSubTitle')}
                            </h3>
                            <UnorderedList arrName={sapHanaData} ulClassName="list-disc pl-[22px] w-[90%] xl:mt-[49px] mt-[45px] 4xl:space-y-[24px] space-y-[19px]" liClassName="xl:text-[20px] text-[16px] xl:leading-tight font-light" />
                            <div className="xl:my-[62px] mt-[34px] mb-[49px]">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    const SapSucessFactorSection = () => {
        return (
            <section className="custom-container max-md:px-0 md:!pr-0">
                <div className="bg-[#006FBE] xl:mt-[97px] mt-[55px]">
                    <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr]">
                        <div className="order-1 md:order-2">
                            <Image
                                src="/images/solutions/data-sphere/Mobile/sap-success-factos-mob-img.webp"
                                alt="sap-success-factors-mob-img"
                                className="w-full h-full block md:hidden"
                                priority
                                width={0}
                                height={0}
                            />
                            {/* Desktop Image */}
                            <Image
                                src="/images/solutions/data-sphere/sap-success-factos-img.webp"
                                alt="sap-success-factors-desktop-img"
                                className="w-full h-full hidden md:block object-cover"
                                priority
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="order-2 md:order-1 text-[#FFFFFF] xl:pl-[36px] mx-[35px] xl:pt-[57px] pt-[42px]">
                            <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light">
                                {t('sapSuccessFactorTitle')}
                            </h2>
                            <h3 className="font-semibold 4xl:text-[42px] xl:text-[38px] text-[20px] leading-tight mt-[27px] xl:mt-[37px] xl:w-full">
                                {t('sapSuccessFactorSubTitle')}
                            </h3>
                            <UnorderedList arrName={sapSuccessData} ulClassName="list-disc pl-[22px] w-[90%] xl:mt-[49px] mt-[45px] 4xl:space-y-[24px] space-y-[19px]" liClassName="xl:text-[20px] text-[16px] leading-tight font-light" />
                            <div className="xl:my-[62px] mt-[34px] mb-[49px]">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    const SalesforceSap = () => {
        return (
            <section className="custom-container max-md:px-0 md:!pl-0">
                <div className="bg-[#C2EBEF] xl:mt-[98px] mt-[64px]">
                    <div className="grid grid-cols-1 md:grid-cols-[6fr_5fr]">
                        <div>
                            <Image
                                src="/images/solutions/data-sphere/Mobile/salesforcesap-mob-img.webp"
                                alt="salesforcesap-mob-img"
                                className="w-full h-full block md:hidden"
                                priority
                                width={0}
                                height={0}
                            />
                            {/* Desktop Image */}
                            <Image
                                src="/images/solutions/data-sphere/salesforcesap-img.webp"
                                alt="salesforcesap-desktop-img"
                                className="w-full h-full hidden md:block object-cover"
                                priority
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="text-[#000000] xl:pl-[36px] mx-[35px] xl:pt-[57px] pt-[42px]">
                            <h2 className="4xl:text-[60px] xl:text-[40px]  text-[26px] leading-tight font-light">
                                {t('salesforceSapTitle')}
                            </h2>
                            <h3 className="font-semibold 4xl:text-[42px] xl:text-[38px]  text-[20px] leading-tight mt-[27px] xl:mt-[37px] xl:w-full">
                                {t('salesforceSapSubTitle')}
                            </h3>
                            <UnorderedList arrName={salesforcesapData} ulClassName="list-disc pl-[22px] w-[90%] xl:mt-[49px] mt-[45px] 4xl:space-y-[24px] space-y-[19px]" liClassName="xl:text-[20px] text-[16px] xl:leading-tight font-light" />
                            <div className="xl:my-[62px] mt-[34px] mb-[49px]">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    const AdvancedDataSection = () => {
        return (
            <>
                <section className="custom-container max-md:px-0 md:!pr-0 ">
                    <div className="bg-[#A16B5D] xl:mt-[98px] mt-[64px] md:pb-0 pb-[47px] relative">
                        <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr]">
                            <div className="order-1 md:order-2">
                                <Image
                                    src="/images/solutions/data-sphere/Mobile/advanced-data-mob-img.webp"
                                    alt="advanced-data-mob-img"
                                    className="w-full h-full block md:hidden"
                                    priority
                                    width={0}
                                    height={0}
                                />
                                {/* Desktop Image */}
                                <Image
                                    src="/images/solutions/data-sphere/advanced-data-img.webp"
                                    alt="advanced-data-desktop-img"
                                    className="w-full h-full hidden md:block object-cover"
                                    priority
                                    width={0}
                                    height={0}
                                />
                            </div>
                            <div className="order-2 md:order-1 text-[#FFFFFF] xl:pl-[36px] mx-[35px] xl:pt-[57px] pt-[42px]">
                                <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light">
                                    {t('advancedTitle')}
                                </h2>
                                <h3 className="font-semibold 4xl:text-[42px] xl:text-[38px] text-[20px] leading-tight mt-[19px] xl:mt-[37px] xl:w-[86%]">
                                    {t('advancedSubTitle1')}
                                </h3>
                                <h3 className="font-semibold 4xl:text-[36px] xl:text-[24px] text-[18px] leading-[22px] xl:leading-[44px] mt-[19px] xl:mt-[27px] xl:w-full">
                                    {t('advancedSubTitle2')}
                                </h3>
                                <UnorderedList arrName={advancedData} ulClassName="list-disc pl-[22px] w-[80%] xl:w-[90%] xl:mt-[49px] mt-[45px] 4xl:space-y-[24px] space-y-[19px]" liClassName="xl:text-[24px] text-[16px] xl:leading-tight font-light" />
                                <div className="xl:my-[62px] mt-[34px] mb-[49px]">
                                    <LearnMore />
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#163055] 4xl:w-[57%] xl:w-[64%] mx-[35px] md:ml-[0px] md:mr-0 absolute md:top-[98%] 2xl:top-[95%]">
                            <p className="text-[#FFFFFF] 4xl:text-[26px] xl:text-[24px] text-[22px] leading-tight xl:py-[37px] py-[27px] xl:px-[33px] px-[24px] font-light">
                                {t('advenacedDesc')}
                            </p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
    const AIPoweredUseSection = () => {
        return (
            <>
                <section className="relative 2xl:mt-[141px] xl:mt-[200px] mt-[164px] w-full">
                    <div className="relative block md:hidden">
                        <Image
                            src="/images/solutions/data-sphere/Mobile/ai-powered-use-mob-img.webp"
                            alt="ai-powered-use-mob-img"
                            className="w-full h-[1000px] object-cover"
                            priority
                            width={0}
                            height={0}
                        />
                        <div className="absolute bottom-[220px] max-[360px]:top-[25%] top-[38%] sm:top-[40%] left-0 right-0 inset-0 z-0"
                            style={{
                                background: "#006FBE",
                                mixBlendMode: "multiply",
                                opacity: 1,
                            }}
                        ></div>
                        <div className="relative">
                            <div className="mx-[10px] absolute bottom-[220px] left-0 right-0 px-[22px] pt-[0px] pb-[73px] z-10 text-white">
                                <h2 className="text-[26px] leading-tight font-light">
                                    {t('aiPoweredUseTitle')}
                                </h2>
                                <h3 className="text-[20px] 4xl:text-[36px] xl:text-[24px] font-semibold mt-[19px] leading-tight w-[90%]">
                                    {t('aiPoweredUseSubTitle')}
                                </h3>
                                <UnorderedList arrName={aiPoweredUseData} ulClassName="list-disc pl-[22px] mt-[22px] 4xl:space-y-[24px] space-y-[19px]" liClassName="text-[16px] leading-[19px]" />
                                <div className="mt-[44px] absolute">
                                    <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Desktop View */}
                    <Image
                        src="/images/solutions/data-sphere/ai-powered-use-img.webp"
                        alt="ai-powered-use-img"
                        className="hidden md:block w-full md:h-[700px] xl:h-[900px] object-cover"
                        priority
                        width={0}
                        height={0}
                    />
                    <div className="hidden md:flex absolute inset-0 items-start justify-start custom-container">
                        <div className="relative">
                            <div
                                className="absolute inset-0 z-0 pointer-events-none md:h-[498px] xl:h-full"
                                style={{
                                    background: "#006FBE",
                                    mixBlendMode: "multiply",
                                    opacity: 1,
                                }}
                            />
                            <div className="relative z-10 xl:pt-[70px] pt-[57px] xl:pb-[80px] pb-[0px] px-[26px] md:px-[67px] text-white">
                                <h2 className=" 4xl:text-[60px] xl:text-[40px] leading-tight font-light w-[70%]">
                                    {t('aiPoweredUseTitle')}
                                </h2>
                                <h3 className=" 4xl:text-[42px] xl:text-[38px] text-[22px] font-semibold xl:mt-[38px] mt-[18px] leading-tight">
                                    {t('aiPoweredUseSubTitle')}
                                </h3>
                                <UnorderedList arrName={aiPoweredData} ulClassName="list-disc pl-[22px] xl:mt-[43px] mt-[16px] w-[80%]  4xl:space-y-[24px] space-y-[19px]" liClassName="xl:text-[20px] text-[15px] leading-tight font-light" />

                                <div className="mt-[40px] absolute">
                                    <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-container">
                        <div className="bg-[#163055] absolute xl:-mt-[58px] -mt-[45px] mr-[36px] sm:w-[90%] md:w-auto">
                            <p className="text-[#FFFFFF] 4xl:text-[26px] xl:text-[24px] text-[22px] leading-tight xl:py-[37px] py-[27px] xl:px-[35px] px-[24px] font-light">
                                {t('aiPoweredUseDesc')}
                            </p>
                        </div>
                    </div>
                </section>
            </>
        );
    };
    const GlobalPresenceSection = () => {
        return (
            <section className="xl:mt-[121px] mt-[136px] custom-container lg:!pr-0 max-md:px-0">
                <div className="relative">
                    <div>
                        <Image
                            src="/images/solutions/data-sphere/Mobile/global-presence-mob-img.webp"
                            alt="global-presence-mob-img"
                            className="block lg:hidden h-full mx-auto w-full"
                            priority
                            width={0}
                            height={0}
                        />
                        {/* Desktop Image */}
                        <Image
                            src="/images/solutions/data-sphere/global-presence-img.webp"
                            alt="global-presence-img"
                            className="hidden lg:block w-full h-full object-cover"
                            priority
                            width={0}
                            height={0}
                        />
                    </div>
                    <div
                        className="px-[40px] lg:pl-[60px] lg:pr-[40px] xl:pl-[60px] 2xl:pl-[90px] xl:pr-[40px] py-[40px] lg:py-[44px] xl:py-[44px] 2xl:py-[74px] absolute lg:top-1/2 lg:left-[-80px] xl:left-[-120px] lg:transform lg:-translate-y-1/2 z-20 lg:w-[750px] xl:w-[800px] 2xl:w-[900px] 3xl:w-[960px] flex justify-center sm:mx-[52px] w-auto md:w-auto max-lg:mt-[-250px] max-md:mx-auto"
                        style={{ background: "rgba(7, 50, 89, 0.92)", }}>
                        <div className="z-30">
                            <h2 className="text-[#FFFFFF] xl:text-[40px] 4xl:text-[60px] text-[26px] font-light leading-tight">
                                {t('globalPresenceTitle')}
                            </h2>
                            <div className="grid md:grid-cols-2 md:gap-[40px] lg:gap-[10px] 2xl:gap-[40px]">
                                {globalPresenceData.map((data, ind) => {
                                    const isBorderLeft = ind === 1 || ind === 3;
                                    const isNotLast = ind !== globalPresenceData.length - 1;
                                    return (
                                        <div key={ind} className="w-full flex items-center">
                                            <div
                                                className={`relative xl:mt-[56px] mt-[20px] xl:py-0 py-4 xl:w-[100%] w-[90%] text-[#FFFFFF] 4xl:text-[20px] text-[18px] font-semibold leading-[22px] xl:leading-[24px] ${isBorderLeft ? 'md:border-l-2 md:pl-[48px] lg:pl-[50px] xl:pl-[68px] border-white' : ''} ${!isBorderLeft ? 'xl:mr-[45px]' : ''} md:border-b-0 `}>
                                                {data}
                                                {isNotLast && (
                                                    <div className="absolute bottom-0 left-0 w-[100%] border-b-2 border-[#848484] md:hidden" />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    return (
        <>
            <Seo
                title="SAP Datasphere Implementation with AI Consulting Services | Rialtes"
                description="Need smarter data? SAP Datasphere Implementation Consulting by Rialtes blends AI with expertise to unify systems, optimize workflows, and drive success."
                canonical="https://www.rialtes.com/solutions/data-ai/sap-datasphere-implementation-consulting/"
            />
            <Script
                id="schema-sap-datasphere"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative group overflow-hidden h-[399px] lg:h-[600px] 4xl:h-[650px] ">
                <div className="hidden md:block">
                    <Image
                        src="/images/solutions/data-sphere/data-sphere-banner.webp"
                        alt="desktop banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "55% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110" />
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/solutions/data-sphere/Mobile/data-sphere-mob-banner.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority />
                </div>
                <div className="relative h-full custom-container flex items-center text-[#ffffff]">
                    <div className="grid grid-cols-12 w-full">
                        <div className="4xl:col-span-7 sm:col-span-8 xl:col-span-6 col-span-11">
                            <h3 className="text-[18px] md:text-[24px] font-bold">
                                {t('headerTitle')}
                            </h3>
                            <h1 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px]">
                                {t('headerSubtitle')}
                            </h1>
                        </div>
                        <div className="4xl:col-span-5 sm:col-span-4 xl:col-span-6 col-span-1">
                        </div>
                    </div>
                </div>
            </section>
            {/* future proof section */}
            <section className="custom-container xl:mt-[124px] mt-[53px] xl:mb-[0px] mb-[52px]">
                <div className="grid xl:grid-cols-12 2xl:gap-[60px] xl:gap-[46px] gap-y-[39px]">
                    <div className="4xl:col-span-7 xl:col-span-6 col-span-12">
                        <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] font-Light leading-tight xl:w-[100%] lg:w-[80%]">{t('pageDescTitle')}</h2>
                    </div>
                    <div className="4xl:col-span-5 xl:col-span-6 col-span-12">
                        <p className="4xl:text-[22px] xl:text-[18px] text-[16px] font-normal leading-tight xl:w-full lg:w-[90%] w-[96%]">{t('pageDesc1')}</p>
                        <p className="4xl:text-[22px] xl:text-[18px] text-[16px] font-normal leading-tight xl:w-full lg:w-[90%] w-[96%] xl:mt-[30px] mt-[19px]">{t('pageDesc2')}</p>
                    </div>
                </div>
            </section>
            {/* why rialtes section */}
            <WhyRialtesSection />
            {/* Build Intelligent Section */}
            <BuildIntelligentSection />
            {/* industry accelerators section */}
            <IndustryAcceleratorsSection />
            {/* Intelligent Automative Section */}
            <IntelligentAutomativeSection />
            {/* AI Ready Manufacturing Section */}
            <AIReadyManufacturingSection />
            {/* OmnichannelSmartEducationSection */}
            <OmnichannelSmartEducationSection />
            {/* ai powered hr analytics section */}
            <AiPoweredHRAnalyticsSection />
            {/* sap ariba section */}
            <SapAribaSection />
            {/* sap hana section */}
            <SapHanaSection />
            {/* sap success factors */}
            <SapSucessFactorSection />
            {/* SalesforceSap section */}
            <SalesforceSap />
            {/* advanced data visualization */}
            <AdvancedDataSection />
            {/* ai powered section */}
            <AIPoweredUseSection />
            {/* Global Presence Section */}
            <GlobalPresenceSection />
            {/* Contact Form */}
            <div className="custom-container text-[#000000] pb-10  max-[460px]:mt-[540px] mt-[400px] sm:mt-[460px] md:mt-[400px] lg:mt-[80px] xl:mt-[90px]">
                <ContactForm title={'Ready to Transform Your Data Landscape?'} subtitle={"Rialtes is here to guide you on every step of your AI and data consolidation journey — from strategy to execution to AI insights that create real business value. "} subtitle1={"Contact us today for a personalized consultation and see how SAP Datasphere can redefine your enterprise!"} className={"xl:w-[70%] xl:font-normal 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight mt-[52px] xl:mt-[89px]"} />
            </div >
        </>
    )
}