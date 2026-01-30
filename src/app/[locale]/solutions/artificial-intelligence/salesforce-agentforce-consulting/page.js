"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import HealthcareStats from "@/app/[locale]/components/HealthcareStats";
import LearnMoreButton from "@/app/[locale]/components/learnMore";
import ContactForm from "@/app/[locale]/components/contactform";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/solutions.json';
import esContent from '../../../../../../messages/es/solutions.json';
import frContent from '../../../../../../messages/fr/solutions.json';
import { changeLocalization } from "../../../components/changeLocalization.js";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'
import BreadcrumbSchema from "@/app/[locale]/components/BreadcrumbSchema";


export default function page() {
    const t = useTranslations("agentForce");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { managecustomerList, features, exampleOfActionList, schemaData, flexiblePricingList, items, salesforceAgentplusList, agentchatList, slides } = content.agentForce;

    const AIBusinessBanner = () => {

        return (
            <section className="relative text-white">
                <div className="flex flex-col xl:flex-row">
                    <div className="relative xl:w-[52%] h-full  xl:ml-[20px]">
                        <img
                            src="/images/salesforce-consulting-services/manage-customer.webp"
                            alt={t('manageCustomerAlt')}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="xl:w-[61%] bg-[#073259] max-md:mx-[35px] text-white p-6 pb-0  4xl:p-16 2xl:p-12 xl:p-10  xl:pb-0 flex flex-col  4xl:mt-[172px] 2xl:mt-[123px] xl:mt-[100px] absolute xl:left-[39%] top-[99%] xl:top-0 xl:h-[381px] 4xl:h-[553px] 2xl:h-[458px]">
                        <h2 className="4xl:text-[60px]  xl:text-[40px] md:text-[30px] leading-tight pt-8 xl:pt-0  text-[26px] 4xl:mb-10 xl:mb-5 mb-5 2xl:mb-10 4xl:pr-28 2xl:pr-24 xl:pr-20">
                            {t('manageCustomerInquiries')}
                        </h2>
                        <UnorderedList arrName={managecustomerList} ulClassName="space-y-3 4xl:space-y-3 xl:space-y-1 2xl:space-y-3 4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] mb-6 list-disc list-outside pl-[25px]" liClassName="" />

                        <div className="2xl:mt-[10px] 4xl:mt-[-10px] xl:mt-[-20px]">
                            <LearnMoreButton bgcolor="#006FBE" className="absolute" locale={locale}
                                btnName={t('learnMoreButton')} />
                        </div>
                    </div>
                </div>
            </section>

        );
    };


    const AgentforceBanner = () => {
        return (
            <section className="relative w-full custom-container max-md:px-0">
                {/* Background Image */}
                <div className="hidden xl:block">
                    <img
                        src="/images/salesforce-consulting-services/leaverage-cutting-desktop.webp" // Replace with your actual image path
                        alt={t('leaverageCuttingAlt')}
                        className={`
                                  ${locale === "es"
                                ? "absolute inset-0  z-0 w-full 4xl:h-[1104px] 2xl:h-[856px] xl:h-[953px]"
                                : locale === "fr"
                                    ? "absolute inset-0  z-0 w-full 4xl:h-[1134px] 2xl:h-[880px] xl:h-[929px]"
                                    : "absolute inset-0  z-0 w-full 4xl:h-[1029px] 2xl:h-[856px] xl:h-[879px]"
                            }`}

                    />
                </div>
                <div className="block xl:hidden">
                    <img
                        src="/images/salesforce-consulting-services/leaverage-cuttung-mobile.webp"
                        alt={t('leaverageCuttingAlt')}
                        className="0 w-full"
                    />
                </div>


                {/* Overlay Content */}
                <div className="relative z-10 flex h-full ">
                    <div className="bg-opacity-90 text-white 4xl:max-w-[44rem] 2xl:max-w-[36rem] xl:max-w-[30rem] bg-black xl:bg-transparent max-md:px-[35px] md:px-[35px] xl:px-0">
                        <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] leading-tight mb-4 pt-12">
                            {t('leaveragecuttingTitle')}
                        </h2>
                        <ul className="space-y-6 4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] mb-6 list-none pt-10">
                            <li className="border-b border-white pb-5">
                                <div className="font-bold">{t('agentforcedataCloude')}</div>
                                <div className="mt-3">{t('unifiysublist')}</div>
                            </li>
                            <li className="border-b border-white pb-6">
                                <div className="font-bold">{t('agentbuilder')}</div>
                                <div className="mt-3">{t('agentbuilderdesc')}</div>
                            </li>
                            <li className="border-b border-white pb-6">
                                <div className="font-bold">{t('atlasReasoningEngine')}</div>
                                <div className="mt-3">{t('atlasReasoningEnginedesc')}</div>
                            </li>
                            <li className="border-white">
                                <div className="font-bold">{t('partnerNetwork')}</div>
                                <div className="mt-3">{t('partnerNetworkDesc')}</div>
                            </li>
                        </ul>

                        <div className="">
                            <LearnMoreButton bgcolor="#006FBE" className="absolute" locale={locale}
                                btnName={t('learnMoreButton')} />
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    const AgentforcePromo = () => {
        return (
            <section>
                <div className="4xl:max-w-4xl 2xl:max-w-[45rem] xl:max-w-[40rem]">
                    <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] leading-tight mb-4">
                        {t('theNextleap')}
                    </h2>
                    <h3 className="4xl:text-[30px]  xl:text-[24px] md:text-[22px] text-[20px] font-semibold xl:mt-10 mt-6 leading-tight 4xl:pr-[12rem] 2xl:pr-20 xl:pr-18">
                        {t('agentforceEvolution')}
                    </h3>
                    <p className="4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] mt-8">{t('agentforceDebut')}</p>
                </div>


                <div className="mt-12 grid gap-5 md:grid-cols-3 4xl:pr-[276px] 2xl:pr-[200px] xl:pr-[120px]">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-8 transition border-2"
                        >
                            <h3 className="4xl:text-[26px] xl:text-[22px] md:text-[20px]  text-[18px] font-semibold mb-2 text-[#0A6BB8] leading-tight pr-0 xl:pr-20">
                                {feature.title}
                            </h3>
                            <p className="4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] leading-tight mt-5 xl:pr-10">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    const IndustryActionsBanner = () => {
        return (
            <section className="relative bg-white">
                <div className="grid xl:grid-cols-12 grid-cols-1 min-h-[500px]">
                    {/* Image section */}
                    <div className="xl:order-2 order-1 xl:col-span-5 col-span-12">
                        <div className="absolute z-10 md:z-0 xl:ml-[-775px] xl:block hidden">
                            <img
                                src="/images/salesforce-consulting-services/prebuilt-desktop.webp"
                                alt={t('prebuiltAlt')}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="xl:hidden block">
                            <img
                                src="/images/salesforce-consulting-services/prebuilt-mobile.webp"
                                alt={t('prebuiltAlt')}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Content section */}
                    <div className="relative z-20 xl:bg-[#073259] bg-black text-white px-8 pt-12 xl:pt-16 4xl:px-24 2xl:px-20 xl:px-16 xl:mt-40  xl:col-span-7 col-span-12 xl:order-1 order-2">
                        <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] leading-tight">
                            {t('prebuildTitle')}
                        </h2>

                        <p className="4xl:text-[40px] 2xl:text-[36px] xl:text-[32px] md:text-[26px]  text-[22px] font-semibold mb-8 leading-tight xl:pr-28 mt-5">
                            {t('prebuildDesc')}
                        </p>
                        <div className="flex gap-10 xl:flex-row md:flex-row flex-col">
                            <div>
                                <p className="font-semibold 4xl:text-[24px] xl:text-[20px] md:text-[20px] text-[18px]">
                                    {t('exampleOfActionTitle')}
                                </p>
                                <UnorderedList arrName={exampleOfActionList} ulClassName="list-disc space-y-5 4xl:text-[20px] xl:text-[16px] md:text-[18px]  text-[16px] list-outside mt-5 pl-5" liClassName="" />

                            </div>
                            <div>
                                <p className="font-semibold 4xl:text-[24px] xl:text-[20px] md:text-[20px] text-[18px] pr-16">
                                    {t('flexiblePricingTitle')}
                                </p>
                                <UnorderedList arrName={flexiblePricingList} ulClassName="list-disc space-y-5 4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] list-outside mt-5 4xl:pr-16 pl-5" liClassName="" />

                            </div>
                        </div>
                        <div className="4xl:mt-10 2xl:mt-10 xl:mt-5">
                            <LearnMoreButton bgcolor="#006FBE" className="absolute" locale={locale}
                                btnName={t('learnMoreButton')} />
                        </div>
                    </div>
                </div>
            </section>

        );
    }

    const AgentforceIndustryGrid = () => {


        return (
            <section>
                <div className="mb-10 grid xl:grid-cols-12 grid-cols-1">
                    <div className="4xl:col-span-9 2xl:col-span-7 xl:col-span-7 col-span-12">
                        <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] leading-tight">
                            {t('industrySpecificTitle')}
                        </h2>
                    </div>

                </div>

                <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 gap-y-10 lg:gap-x-8  border-gray-200">
                    {items.slice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            className={`${index !== 3
                                ? "lg:border-r-2 border-b-2 xl:border-b-0 pb-5 xl:pb-0 border-[#707070] pr-8"
                                : "pr-0"
                                }`}
                        >
                            <h3 className="font-semibold 4xl:text-[26px] 2xl:text-[22px] md:text-[22px]  text-[20px] mb-5 leading-tight">{item.title}</h3>
                            <p className="4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] leading-tight">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="block xl:hidden border-t-2 border-[#707070] my-10"></div>

                {/* Second Row */}
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-y-10 lg:gap-x-8 xl:mt-16  border-gray-200">
                    {items.slice(4).map((item, index) => (
                        <div
                            key={index}
                            className={` ${index !== 2
                                ? "lg:border-r-2 border-b-2 xl:border-b-0 pb-5 xl:pb-0 border-[#707070] pr-8"
                                : "pr-0"
                                }`}
                        >
                            <h3 className="font-semibold 4xl:text-[26px] xl:text-[22px] md:text-[22px] mb-5 text-[20px] leading-tight">{item.title}</h3>
                            <p className="4xl:text-[20px] xl:text-[16px] md:text-[18px]  text-[16px] leading-tight ">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 items-center xl:mt-8 mt-12">
                    <p className="lg:col-span-9 col-span-12 4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] leading-tight mb-6 lg:mb-0 w-full xl:mt-8">
                        {t('ourspecificparagraph')}
                    </p>
                    <div className="lg:col-span-3 col-span-12 flex lg:justify-end">
                        <LearnMoreButton bgcolor="#006FBE" locale={locale} btnName={t('learnMoreButton')} />
                    </div>
                </div>

            </section>
        );
    }

    const SalesforceAgentPromo = () => {
        return (
            <section className="bg-white py-12">
                <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-16 gap-10">
                    {/* Image Section */}
                    <div className="order-1 xl:order-2 xl:col-span-7">
                        <img
                            src="/images/salesforce-consulting-services/salesforce-agentplus-desktop.webp"
                            alt={t('agentPlusAlt')}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="order-2 xl:order-1 xl:col-span-5 max-md:px-[35px]">
                        <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] leading-tight">
                            {t('agentplusTitle')}
                        </h2>
                        <h3 className="4xl:text-[42px] 2xl:text-[36px] xl:text-[32px] md:text-[26px] text-[20px] font-semibold mb-4 leading-tight 4xl:mt-5 2xl:mt-10 mt-5  xl:pr-0">
                            {t('agentplusDesc')}
                        </h3>
                        <p className="4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] leading-tight mb-6 xl:pr-10">
                            {t('agentplusParagraph1')}
                        </p>
                        <p className="4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] leading-tight mb-6">
                            {t('agentplusParagraph2')}
                        </p>
                        <p className="4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] leading-tight mb-6">
                            {t('agentplusParagraph3')}
                        </p>
                        <UnorderedList arrName={salesforceAgentplusList} ulClassName="list-disc 4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] leading-tight space-y-5 mb-6 font-medium list-outside pl-5 xl:pr-10" liClassName="" />

                        <div>
                            <LearnMoreButton btnName={t('knowMoreButton')} bgcolor="#006FBE" href="/services/application-services/salesforce-managed-services-provider-salesforceagentplus/"
                                locale={locale}
                            />
                        </div>
                    </div>
                </div>
            </section>

        );
    }

    const AgentChatPromo = () => {
        return (
            <section className="bg-[#184671] text-white pt-12">
                <div className="w-full mb-10 custom-container mt-[-200px]">
                    <div className="xl:block hidden">
                        <img
                            src="/images/salesforce-consulting-services/agentforce-agentchat-desktop.webp"
                            alt={t('agentChatDesktopAlt')}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="xl:hidden block">
                        <img
                            src="/images/salesforce-consulting-services/agentchat-mobile-agentforce.jpg"
                            alt={t('agentChatDesktopAlt')}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 items-start custom-container">
                    <div className="xl:pr-32">
                        <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] leading-tight mb-5">{t('agentchatHeading')}</h2>
                        <p className="4xl:text-[38px] xl:text-[32px] md:text-[26px] text-[20px] font-semibold mb-4 leading-tight pr-8 xl:pr-0">
                            {t('agentchatSubheading')}
                        </p>

                    </div>
                    <div>
                        <h3 className="4xl:text-[24px] xl:text-[20px] md:text-[20px] text-[18px] font-semibold mb-2 leading-tight">{t('agentchatMoment')}</h3>
                        <UnorderedList arrName={agentchatList} ulClassName="list-disc  list-outside pl-5 xl:pl-4 space-y-5 4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] mt-6 leading-tight" liClassName="" />

                        <p className="4xl:text-[20px] md:text-[18px] xl:text-[16px] text-[16px] mt-10">
                            {t('agentchatParagraph')}
                        </p>
                        <div className="mt-10">
                            <LearnMoreButton btnName={t('knowMoreButton')} bgcolor="#006FBE"
                                href="/products/agentchat"
                                locale={locale}
                            />

                        </div>
                    </div>
                </div>
            </section>

        );
    }

    const AgentforceHero = () => {
        return (
            <section className="relative w-full h-auto">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10 xl:block hidden">
                    <img
                        src="/images/salesforce-consulting-services/your-stategic-partner.webp"
                        alt={t('yourStrategicPartnerAlt')}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" /> {/* Optional dark overlay */}
                </div>
                <div className="absolute inset-0 -z-10 xl:hidden block">
                    <img
                        src="/images/salesforce-consulting-services/your-stategic-partner-mobile.webp"
                        alt={t('yourStrategicPartnerAlt')}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" /> {/* Optional dark overlay */}
                </div>

                <div className="py-16 text-white custom-container grid xl:grid-cols-12 grid-cols-1">
                    <div className="4xl:col-span-9 xl:col-span-7 2xl:col-span-7 col-span-12">
                        <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] leading-tight mb-8">
                            {t('yourStrategiy')}
                        </h2>
                        <p className="4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] mb-6 leading-tight">
                            {t('yourStrategiyParagraph1')}  <br className="xl:block hidden"></br>  {t('yourStrategiyParagraph2')}
                        </p>

                        <p className="4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] mb-6 leading-tight">{t('hereWhat')}</p>
                        <ul className="space-y-8 4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] mb-6 leading-tight">
                            <li>
                                <strong>{t('provenExpert')}</strong><br /><br className="md:hidden block"></br>
                                {t('decedsOfExperience')} <br className="xl:block hidden"></br> {t('meansWeCant')} <br className="xl:block hidden"></br> {t('experimentation')}.
                            </li>
                            <li>
                                <strong>{t('endToEndConsulting')}</strong><br /><br className="md:hidden block"></br>
                                {t('fromStrategyToSupport')}<br className="xl:block hidden"></br> {t('guideYouThrough')}
                            </li>
                            <li>
                                <strong>{t('acceleratedAdoption')}</strong><br /><br className="md:hidden block"></br>
                                {t('ourRobustMethodology')}  <br className="xl:block hidden"></br> {t('ensureYourTeamsAdopt')} <br className="xl:block hidden"></br> {t('agentforceConfidently')}
                            </li>
                            <li>
                                <strong>{t('globalPresence')}</strong><br /><br className="md:hidden block"></br>
                                {t('unitedStates')}
                            </li>
                            <li>
                                <strong>{t('connectedEcosystem')}</strong><br /><br className="md:hidden block"></br>
                                {t('withRinse')} <br className="xl:block hidden"></br> {t('monitoringAnalyticsUpdates')}
                            </li>
                        </ul>

                        <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] mb-6 leading-tight">
                            {t('whethereYouStarting')} <br></br> {t('ourAgentforceConsulting')} <br></br> {t('andSupportNeeded')}
                        </p>

                    </div>
                </div>
            </section>
        );
    }

    return (
        <section>
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="home, website, welcome"
                canonical={`https://www.rialtes.com/${locale}/solutions/artificial-intelligence/salesforce-agentforce-consulting/`}
            />
            <Script
                id="schema-sap-buy-plus"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* breadcrumbs schema */}
            <BreadcrumbSchema />
            {/* hero section */}
            <section className="relative group overflow-hidden h-[350px] md:h-[500px] 4xl:h-[650px]  ">
                {/* Desktop Image */}
                <div className="hidden xl:block">
                    <Image
                        src="/images/salesforce-consulting-services/agentforce-banner-desktop.webp"
                        alt={t('bannerAlt')}
                        fill
                        style={{ objectFit: "cover", objectPosition: "55% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                {/* Mobile Image */}
                <div className="block xl:hidden">
                    <Image
                        src="/images/salesforce-consulting-services/agentforce-banner-mobile.webp"
                        alt={t('bannerAlt')}
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center text-[#ffffff]">
                    <div className="grid xl:grid-cols-12 grid-cols-4 md:grid-cols-7 w-full max-[375px]:grid-cols-3">
                        <div className="4xl:col-span-6 xl:col-span-5 col-span-3">
                            <h1 className="font-bold  4xl:text-[24px] xl:text-[20px] text-[20px] leading-tight">
                                {t('bannerTitle')}
                            </h1>
                            <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[30px] leading-tight mt-5  text-[26px] ">
                                {t('bannerSubtitle')}
                            </h2>
                        </div>
                        <div className="4xl:col-span-5 sm:col-span-4 xl:col-span-6 col-span-1">
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb */}
            <section className="custom-container">
                <BreadCrumbs />
            </section>
            {/* page information */}
            <section className="custom-container 4xl:mt-20 xl:mt-10 mt-10">
                <div className="grid xl:grid-cols-12">
                    <div className="4xl:col-span-9 2xl:col-span-8 xl:col-span-9">
                        <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[30px] leading-tight mt-5  text-[26px] xl:pr-20 4xl:pr-0 2xl:pr-0"> {t('whatYouNeedToKnow')}</h2>
                        <p className="leading-tight font-normal 4xl:text-[20px]  xl:text-[18px] md:text-[18px]  text-[16px] mt-10 max-[430px]:pr-10">
                            {t('whatYouNeedToKnowDes1')}
                        </p>
                        <p className="leading-tight font-normal mt-[19px] 4xl:text-[20px] xl:text-[16px]  text-[16px] md:text-[18px] 4xl:pr-8 max-[430px]:pr-10">
                            {t('whatYouNeedToKnowDes2')}
                        </p>

                    </div>
                </div>
            </section>
            <section className="custom-container 4xl:mt-20 xl:mt-10 mt-10 4xl:pr-[398px]">
                <div className="grid xl:grid-cols-12">
                    <div className="4xl:col-span-8 2xl:col-span-7 xl:col-span-7">
                        <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[30px] leading-tight mt-5  text-[26px] xl:pr-20 4xl:pr-0 2xl:pr-0 ">{t('buildAhealthierBusiness')}</h2>
                    </div>
                </div>
                <HealthcareStats />
            </section>
            <section className="custom-container xl:px-0 mt-20 max-md:px-0">
                <AIBusinessBanner />
            </section>
            <section
                className={`
                                  ${locale === "es"
                        ? "xl:px-0 xl:mt-20 max-md:px-0 md:px-0 mt-[670px] max-[375px]:mt-[700px] md:mt-[450px]"
                        : locale === "fr"
                            ? "xl:px-0 xl:mt-20 max-md:px-0 md:px-0 mt-[640px] md:mt-[450px]"
                            : "xl:px-0 xl:mt-20 max-md:px-0 md:px-0 mt-[610px] md:mt-[450px]"
                    }`}>
                <AgentforceBanner />
            </section>
            <section className="custom-container 4xl:mt-20 xl:mt-24  mt-14">
                <AgentforcePromo />
            </section>
            <section className="custom-container xl:px-0 xl:mt-20 max-md:px-0 mt-16 4xl:pl-[142px]">
                <IndustryActionsBanner />
            </section>

            <section className="custom-container xl:px-0 4xl:mt-28 2xl:mt-28 xl:mt-20 max-md:px-0 mt-20">
                <div className="xl:block hidden">
                    <img
                        src="/images/salesforce-consulting-services/industry-specific.webp"
                        alt={t('industrySpecificAlt')}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="xl:hidden block">
                    <img
                        src="/images/salesforce-consulting-services/industry-spacific-mobile.webp"
                        alt={t('industrySpecificAlt')}
                        className="object-cover w-full h-full"
                    />
                </div>

            </section>
            <section className="custom-container  4xl:mt-20 2xl:mt-20 xl:mt-16  mt-10">
                <AgentforceIndustryGrid />
            </section>

            <section className="custom-container xl:pr-[142px] xl:mt-10 max-md:px-0 mt-0">
                <SalesforceAgentPromo />
            </section>
            <section className="custom-container xl:px-0 mt-48 max-md:px-0">
                <AgentChatPromo />
            </section>

            <section className="custom-container xl:px-0  max-md:px-0 mt-0">
                <AgentforceHero />
            </section>
            {/* Contact Form */}
            <div className="custom-container pb-10 4xl:mt-[80px] 2xl:mt-[60px] xl:mt-[55px] mt-[50px] mb-[45px]">
                <ContactForm title={t("contactusTitle")} subtitle='Unlock AI, boost productivity, and optimize Salesforce with Agentforce consulting Services' className={"xl:w-[70%] xl:font-light 4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight"} />
            </div >
        </section>
    )
}