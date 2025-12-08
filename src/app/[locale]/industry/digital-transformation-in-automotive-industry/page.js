"use client";
import Image from "next/image";
import ContactForm from "../../components/contactform"
import Seo from "@/app/[locale]/components/Seo";
import LearnMore from "../../components/learnMore";
import Script from "next/script";
import UnorderedList from "../../components/unorderedList";
import { useLocale, useTranslations } from 'next-intl';
import enContent from '../../../../../messages/en/industry.json';
import esContent from '../../../../../messages/es/industry.json';
import frContent from '../../../../../messages/fr/industry.json';
import { changeLocalization } from "../../components/changeLocalization";
import { useActiveLocale } from "../../components/activeLanguages";
export default function page() {
   
    const t = useTranslations('automativeIndustry')
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { keyIndustryChallenges, rialtesSolutions, predeliveredCardData, endtoendautomativesection, comprehensiveCustomerData, personalizedData,
        revolutionizingData, enablingDynamicData, dealerData, empoweringData, unlockingData, integratingAutomativeData, partenringPowerData, relatedSolutionsData,schemaData } = content.automativeIndustry;

    const { frActive, esActive } = useActiveLocale();

    const ThoughtLeadershipSection = () => {
        return (
            <section className="relative w-full xl:mt-[84px] mt-[64px]">
                {/* Mobile View */}
                <div className="block md:hidden">
                    <Image
                        src="/images/industry/auto-industry/Mobile/automotive-team-consulting-tablet-dealership-mobile.webp"
                        alt={t("thoughtLeadershipAlt")}
                        className="w-full h-auto"
                        width={0}
                        height={0}
                        priority
                    />
                    <div className="border-none px-[30px] pt-[42px] z-10 xl:pb-[144px] pb-[57px]" style={{
                        background: "#073259",
                    }}>
                        <h2 className="text-[#FFFFFF] text-[26px] leading-[32px]">
                            {t('thoughtTitle')}
                        </h2>
                        <h3 className="text-[#FFFFFF] text-[22px] font-semibold mt-[17px] leading-[27px]">
                            {t('thoughtSubTitle')}
                        </h3>
                        <h4 className="text-[#FFFFFF] text-[18px] mt-[17px] leading-[22px] font-semibold w-[80%]">
                            {t('thoughtSubTitle2')}
                        </h4>
                        <UnorderedList arrName={keyIndustryChallenges} ulClassName="list-disc pl-[20px] text-[#FFFFFF] mt-[17px]" liClassName="mt-[19px] text-[16px] leading-[19px]" />
                        <h4 className="text-[#FFFFFF] text-[18px] mt-[61px] leading-[19px] font-semibold">
                            {t('thoughtSubTitle3')}
                        </h4>
                        <UnorderedList arrName={rialtesSolutions} ulClassName="list-disc pl-[20px] text-[#FFFFFF]" liClassName="mt-[19px] text-[16px] leading-[19px]" />
                    </div>
                </div>
                {/* Desktop View */}
                <div className={`hidden md:block relative w-full ${(frActive || esActive) ? "lg:h-[1100px] xl:h-[1300px] md:h-[1150px] 2xl:h-[1450px] 3xl:h-[1300px] 4xl:h-[1500px]" : "lg:h-[1000px] xl:h-[1200px] md:h-[1100px] 2xl:h-[1450px] 3xl:h-[1300px]"} `}>
                    <Image
                        src="/images/industry/auto-industry/automotive-team-consulting-tablet-dealership.webp"
                        alt={t("thoughtLeadershipAlt")}
                        className="w-full h-full object-cover"
                        width={0}
                        height={0}
                        priority
                    />
                    <div className="absolute inset-0">
                        <div className="custom-container w-full h-full flex items-start justify-end">
                            <div className="relative 2xl:w-[55%] lg:w-[58%] w-[60%] h-full">
                                <div
                                    className="absolute inset-0 z-0 pointer-events-none"
                                    style={{
                                        background: "#073259",
                                        mixBlendMode: "multiply",
                                        opacity: 1,
                                    }}
                                />
                                <div className="relative z-10 h-full flex flex-col justify-center px-[26px] xl:px-[40px] overflow-y-auto">
                                    <h2 className="text-[#FFFFFF] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] max-[350px]:text-[22px] leading-[32px] xl:leading-[73px] ">
                                        {t('thoughtTitle')}
                                    </h2>
                                    <h3 className="text-[#FFFFFF] 4xl:text-[42px] 2xl:text-[38px] xl:text-[32px] lg:text-[30px] md:text-[22px] text-[22px] font-semibold xl:mt-[35px] mt-[16px] leading-tight max-[380px]:text-[20px] ">
                                        {t('thoughtSubTitle')}
                                    </h3>
                                    <h4 className="text-[#FFFFFF] 4xl:text-[36px] 2xl:text-[32px] xl:text-[28px] lg:text-[26px] md:text-[22px]  text-[22px] font-semibold xl:mt-[20px] mt-[16px] leading-[27px] xl:leading-[44px]">
                                        {t('thoughtSubTitle2')}
                                    </h4>
                                    <UnorderedList arrName={keyIndustryChallenges} ulClassName="list-disc pl-[22px] text-[#FFFFFF] xl:mt-[23px] mt-[16px]" liClassName="mt-[19px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] md:text-[16px] text-[15px]" />
                                    <h4 className="text-[#FFFFFF] 4xl:text-[36px] 2xl:text-[32px] xl:text-[30px] lg:text-[28px] md:text-[26px] text-[22px] font-light xl:mt-[38px] mt-[22px] leading-[27px] xl:leading-[44px]">
                                        {t('thoughtSubTitle3')}
                                    </h4>
                                    <UnorderedList arrName={rialtesSolutions} ulClassName="list-disc pl-[22px] text-[#FFFFFF] xl:mt-[26px] mt-[16px]" liClassName="mt-[19px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] md:text-[16px] text-[15px] leading-tight" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    const PreDeliveredSection = () => {
        return (
            <section>
                <div className="relative mt-[60px] md:mt-0 mb-20 max-[400px]:h-[1200px] h-[1000px] sm:h-[1000px] xl:h-[1000px] 2xl:h-[1200px] 3xl:h-[1100px]">
                    <div className="absolute inset-0 xl:w-[94%] mx-auto
                            bg-[url('/images/industry/auto-industry/Mobile/automotive-accelerators-blue-motion-technology-mobile.webp')]
                            md:bg-[url('/images/industry/auto-industry/Mobile/automotive-accelerators-blue-motion-technology-mobile.webp')]
                            xl:bg-[url('/images/industry/auto-industry/automotive-accelerators-blue-motion-technology.webp')]
                            bg-no-repeat bg-cover
                            z-0" style={{ backgroundSize: "100% 100%" }}></div>
                    <div className="relative z-10 pt-[64px] xl:pt-[82px] max-[350px]:h-[1100px] h-[1050px] sm:h-[760px] md:h-full">
                        <div className="custom-container">
                            <h2 className="text-white 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] leading-tight font-light lg:w-[58%] max-[380px]:text-[22px]">
                                {t('preDeliverTitle')}
                            </h2>
                            <h3 className="text-white 4xl:text-[42px] 2xl:text-[38px] xl:text-[26px] lg:text-[30px] md:text-[22px] text-[22px] leading-[27px] xl:leading-[52px] font-semibold xl:mt-[49px] mt-[21px] max-[380px]:text-[20px]">
                                {t('preDeliverSubTitle')}
                            </h3>
                            <p className="text-white 4xl:text-[22px] 2xl:text-[20px] xl:text-[16px] lg:text-[18px] md:text-[18px] text-[16px] leading-[19px] xl:leading-[30px] font-light xl:mt-[35px] mt-[21px] xl:w-[80%] w-[90%]">
                                {t('preDeliverDesc')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative z-20 max-[400px]:mt-[-230%] mt-[-140%] sm:mt-[-100%] md:mt-[-83%] lg:mt-[-45%] xl:mt-[-30%] 2xl:mt-[-35%] 3xl:mt-[-25%] custom-container">
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-12">
                        {predeliveredCardData.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#707070] pt-[33px] xl:pt-[65px] pb-[47px] xl:pb-[36px] xl:px-[50px] px-[33px]">
                                <h4 className="text-[#006FBE] 4xl:text-[30px] 2xl:text-[28px] xl:text-[22px] lg:text-[24px] md:text-[24px] text-[20px] font-semibold leading-tight w-[99%]">
                                    {card.title}
                                </h4>
                                <p className="text-black 4xl:text-[24px] 2xl:text-[22px] xl:text-[18px] lg:text-[18px] md:text-[18px] text-[16px] leading-tight font-normal mt-[21px] xl:mt-[20px]">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-[36px] xl:mt-[37px]">
                        <LearnMore btnName={t('learnMoreBtn')} />
                    </div>
                </div>
            </section>
        );
    }
    const EndToEndAutomativeSection = () => {
        return (
            <section className="lg:mt-[80px] mt-[60px] custom-container lg:pr-0 max-lg:!px-0 relative">
                <div className=" xl:pt-[67px] pt-[42px] xl:pb-[99px] pb-[89px] border border-[#707070] lg:pl-[40px] max-lg:px-[30px] ">
                    <h2 className="text-[#000000] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] leading-tight font-Light max-[380px]:text-[22px]">
                        {t('endToEndTitle')}
                    </h2>
                    <h3 className="text-[#030303] 4xl:text-[42px] 2xl:text-[38px] xl:text-[28px] lg:text-[26px] text-[22px] leading-[27px] xl:leading-[52px] font-semibold xl:mt-[33px] mt-[17px] max-[380px]:text-[20px]">
                        {t('endToEndSubTitle')}
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-[60px] gap-[82px] xl:mt-[63px] mt-[32px] 3xl:pr-[280px] 2xl:pr-[140px] xl:pr-[80px] lg:pr-[48px]">
                        {endtoendautomativesection.map((section, index) => (
                            <div key={index} className={`${index === 1 ? "lg:mt-[179px]" : "lg:mt[63px]"}`}>
                                {/* Mobile Image */}
                                <Image
                                    src={section.imgUrlMobile}
                                    alt={section.alt}
                                    className="block lg:hidden mb-4 h-auto w-full"
                                    width={0}
                                    height={0}
                                    priority
                                />
                                {/* Desktop Image */}
                                <Image
                                    src={section.imgUrlDesktop}
                                    alt={section.alt}
                                    className="hidden lg:block mb-4 h-auto w-full"
                                    width={0}
                                    height={0}
                                    priority
                                />
                                <h4 className="mt-[29px] xl:mt-[63px] 4xl:text-[36px] 2xl:text-[32px] xl:text-[28px] lg:text-[28px] md:text-[28px] xl:font-semibold font-medium text-[20px] leading-tight">{section.title}</h4>
                                <UnorderedList arrName={section.list} ulClassName="list-disc xl:mt-[13px] mt-[6px] pl-[22px]" liClassName="mt-[19px] 4xl:text-[20px] 2xl:text-[18px] xl:text-[16px] lg:text-[16px] md:text-[18px] text-[16px] xl:leading-[24px] leading-[19px] w-[90%] lg:w-full" />
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-[-20px]">
                        <LearnMore btnName={t('learnMoreBtn')} />
                    </div>
                </div>
            </section>
        );
    };
    const ComprehensiveCustomerSection = () => {
        return (
            <section className="relative xl:mt-[93px] mt-[107px] w-full">
                {/* Mobile Image */}
                <Image
                    src="/images/industry/auto-industry/Mobile/automotive-manager-smartphone-fleet-dealership-mobile.webp"
                    alt={t("comprehensiveSectionAlt")}
                    className="block md:hidden w-full h-full object-cover"
                    width={0}
                    height={0}
                    priority
                />
                {/* Desktop Image */}
                <div className="3xl:h-full xl:h-[700px]">
                    <Image
                        src="/images/industry/auto-industry/automotive-manager-smartphone-fleet-dealership.webp"
                        alt={t("comprehensiveSectionAlt")}
                        className="hidden md:block w-full h-full object-cover"
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                <div className="absolute inset-0 ">
                    <div className="custom-container">
                        <div className="relative xl:w-[54%] lg:w-[50%] 2xl:w-[55%] max-[450px]:w-[87%] w-[75%] md:w-[45%]">
                            <div
                                className="absolute inset-0 z-0 pointer-events-none"
                                style={{
                                    background: "rgba(0, 111, 190, 1)",
                                    mixBlendMode: "multiply",
                                    opacity: 1,
                                    borderRadius: "inherit",
                                }}
                            />
                            <div className="relative z-10 xl:pt-[70px] pt-[32px] xl:pb-[55px] pb-[27px] px-[28px] md:px-[30px] 4xl:px-[100px] 2xl:px-[80px] xl:px-[80px] lg:px-[70px]">
                                <h2 className="text-[#FFFFFF] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] md:text-[29px] max-[400px]:text-[22px] leading-tight font-light max-">
                                    {t('comprehensiveTitle')}
                                </h2>
                                <h3 className="text-[#FFFFFF] 4xl:text-[42px] 2xl:text-[38px] xl:text-[32px] lg:text-[30px] md:text-[23px] text-[22px] max-[400px]:text-[18px] font-semibold xl:mt-[39px] mt-[23px] leading-[27px] xl:leading-[52px]">
                                    {t('comprehensiveSubTitle')}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="custom-container xl:mt-[64px] mt-[33px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-x-[87px] gap-y-[58px]">
                        {comprehensiveCustomerData.map((section, index) => (
                            <div key={index}>
                                <h4 className="4xl:text-[36px] 2xl:text-[32px] xl:text-[28px] lg:text-[28px] md:text-[26px] font-semibold text-[20px] leading-tight">
                                    {section.title}
                                </h4>
                                <UnorderedList arrName={section.list} ulClassName="list-disc pl-[22px] xl:mt-[21px]" liClassName="mt-[19px] xl:mt-[19px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] md:text-[18px] text-[16px] leading-tight" />
                            </div>
                        ))}
                    </div>
                    <div className=" xl:mt-[66px] mt-[39px]">
                        <LearnMore btnName={t('learnMoreBtn')} />
                    </div>
                </div>
            </section>
        );
    };
    const PersonalizingSection = () => {
        return (
            <section className="relative h-full xl:mt-[96px] mt-[91px] custom-container md:pr-0 max-md:px-0">
                <div className="flex items-start justify-start xl:pt-[64px] pt-[38px] xl:pb-[104px] pb-[73px] bg-[url('/images/industry/auto-industry/Mobile/salesforce-marketing-cloud-automotive-personalization-mobile.webp')]
                        md:bg-[url('/images/industry/auto-industry/salesforce-marketing-cloud-automotive-personalization.webp')] bg-no-repeat bg-cover">
                    <div className="md:pl-[76px] w-full 2xl:w-[61%] xl:w-[81%] lg:w-[60%] md:w-[70%] sm:w-[80%] max-md:pl-[36px]">
                        <h2 className="text-[#FFFFFF] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] md:text-[29px] max-[400px]:text-[22px] leading-tight font-light 4xl:w-[732px] 2xl:w-[710px] xl:w-[500px] lg:w-[587px] md:w-[425px] w-full">
                            {t('personalizingTitle')}
                        </h2>
                        <h3 className="text-[#FFFFFF] 4xl:text-[42px] 2xl:text-[38px] xl:text-[30px] lg:text-[30px] md:text-[23px] text-[22px] max-[400px]:text-[18px] leading-tight font-semibold xl:mt-[23px] mt-[20px] 4xl:w-[670px] 2xl:w-[650px] xl:w-[620px] lg:w-[600px] md:w-[483px] w-full">
                            {t('personalizingSubTitle')}
                        </h3>
                        <UnorderedList arrName={personalizedData} ulClassName="list-disc pl-[22px] 4xl:w-[520px] 2xl:w-[519px] xl:w-[470px] lg:w-[420px] md:w-[380px] w-[340px] max-[400px]:w-[270px]" liClassName="text-[#FFFFFF] mt-[19px] xl:mt-[24px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] md:text-[18px] text-[16px] leading-tight" />
                        <div className="absolute bottom-[-20px]">
                            <LearnMore btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    const RevolutionizingServiceSection = () => {
        return (
            <>
                <div className="mt-[78px] xl:mt-[89px]">
                    {/* Mobile Image */}
                    <Image
                        src="/images/industry/auto-industry/Mobile/automotive-technician-diagnostic-tablet-service-center-mobile.webp"
                        alt={t("revolutionizingAlt")}
                        className="block md:hidden w-full"
                        width={0}
                        height={0}
                        priority
                    />
                    {/* Desktop Image */}
                    <Image
                        src="/images/industry/auto-industry/automotive-technician-diagnostic-tablet-service-center.webp"
                        alt={t("revolutionizingAlt")}
                        className="hidden md:block w-full h-full object-cover"
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                <div className="custom-container">
                    <div className="lg:pl-[72px] px-[31px] lg:mt-[-200px] mt-[-30px] lg:pt-[56px] pt-[32px] lg:pb-[0px] pb-[60px] bg-[#073259] relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-[71px] gap-[20px]">
                            <div>
                                <h2 className="text-[#FFFFFF] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] text-[26px] md:text-[29px] max-[400px]:text-[22px] leading-tight 2xl:w-[99%] xl:w-[80%] lg:w-[60%] font-light ">
                                    {t('revolutionizingTitle')}
                                </h2>
                                <h3 className="text-[#FFFFFF] font-semibold 4xl:text-[42px] 2xl:text-[38px] xl:text-[30px] lg:text-[30px] md:text-[23px] text-[20px] max-[400px]:text-[18px] leading-tight mt-[13px] xl:mt-[22px]">
                                    {t('revolutionizingSubTitle')}
                                </h3>
                            </div>
                            {/* Right Column */}
                            <div className="flex flex-col">
                                <UnorderedList arrName={revolutionizingData} ulClassName="list-disc pl-[22px] 4xl:w-[431px] 2xl:w-[426px] xl:w-[400px] lg:w-[350px] xl:mt-[20px]" liClassName="text-[#FFFFFF] mt-[19px] first:mt-0 xl:mt-[24px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] md:text-[18px] text-[16px] leading-tight" />
                                {/* Button only visible on desktop inside the box */}
                                <div className="hidden lg:block mt-[56px] xl:ml-4">
                                    <LearnMore btnName={t('learnMoreBtn')} bgcolor="#006FBE" bordercolor="#006FBE" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Button outside grid for mobile */}
                <div className="block lg:hidden custom-container xl:pl-[70px] ml-[36px] -mt-[50px] absolute z-10">
                    <LearnMore btnName={t('learnMoreBtn')} bgcolor="#006FBE" bordercolor="#006FBE" />
                </div>
            </>
        );
    };
    const EnablingDynamicSection = () => {
        return (
            <section className="relative md:mt-[60px] min-[430px]:mt-[14rem] sm:mt-[15rem] mt-[12rem] md:pr-[20px] lg:pr-[60px] ">
                <div className="flex flex-col md:flex-row relative">
                    <div className="w-full relative z-20 md:flex md:items-center">
                        {/* Mobile Image - overlapping on content */}
                        <div className="block sm:block md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[25%] z-20 w-[80%] max-w-[460px]">
                            <Image
                                src="/images/industry/auto-industry/Mobile/car-salesman-customer-consultation-showroom-computer-mobile.webp"
                                alt={t("enablingSectionAlt")}
                                className="h-auto w-full max-w-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop Image */}
                        <div className="absolute h-[80%] w-full hidden md:block">
                            <Image
                                src="/images/industry/auto-industry/car-salesman-customer-consultation-showroom-computer.webp"
                                alt={t("enablingSectionAlt")}
                                className="w-full object-cover h-full"
                                style={{ objectPosition: '40% 20%' }}
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                    </div>
                    <div className={`md:ml-[-220px] xl:ml-[-200px] relative z-0 bg-[#A16B4D] flex flex-col md:pl-[240px] xl:pl-[260px] md:pr-[55px] 2xl:pr-[75px] px-[40px] xl:pt-[94px] md:pt-[44px] pb-0 h-auto md:h-full md:min-h-full  ${(frActive || esActive) ? "min-h-[850px] sm:min-h-[850px]" : "min-h-[810px] sm:min-h-[820px] max-[460px]:min-h-[800px]"}`}>
                        <div className="max-md:absolute bottom-0">
                            <div className="max-md:pr-[36px]">
                                <h2 className="text-white 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px]  max-[380px]:text-[22px] leading-tight  4xl:w-[689px]  2xl:w-[670px] xl:w-[500px] lg:w-[500px]   max-[380px]:w-[256px] font-light">
                                    {t('enablingTitle')}
                                </h2>
                                <h3 className="text-white font-semibold 4xl:text-[42px] 2xl:text-[38px] xl:text-[28px] lg:text-[28px]  text-[20px] max-[38px]:text-[18px]   leading-tight mt-[18px] xl:mt-[39px] 2xl:w-[93%] xl:w-[80%] lg:w-[90%] ">
                                    {t('enablingSubTitle')}
                                </h3>
                                <UnorderedList arrName={enablingDynamicData} ulClassName="list-disc pl-[22px] xl:mt-[30px] mt-[23px] xl:mb-[74px] mb:[42px] 2xl:w-full xl:w-[95%] lg:w-[90%]" liClassName="text-white first:mt-0 mt-[19px] xl:mt-[24px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] text-[16px] leading-tight font-light" />
                                <div className="mt-[20px] xl:mt-[4px] mb-0">
                                    <LearnMore btnName={t('learnMoreBtn')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    const DealerBuyerSection = () => {
        return (
            <section className="relative md:mt-[60px] min-[430px]:mt-[14rem] sm:mt-[15rem] mt-[12rem] custom-container md:pr-0 max-md:px-0">
                <div className="flex flex-col md:flex-row-reverse relative">
                    <div className="w-full relative z-10 px-[35px] md:px-0 md:flex md:items-center">
                        {/* Mobile Image - overlapping on content */}
                        <div className="block sm:block md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[25%] z-20 w-[80%] max-w-[460px]">
                            <Image
                                src="/images/industry/auto-industry/Mobile/sales-professionals-tablet-dealership-consultation-mobile.webp"
                                alt={t("dealerSectionAlt")}
                                className="block md:hidden h-full w-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop Image */}
                        <Image
                            src="/images/industry/auto-industry/sales-professionals-tablet-dealership-consultation.webp"
                            alt={t("dealerSectionAlt")}
                            className="hidden md:block w-full h-[80%] lg:h-[90%] object-cover"
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                    <div className={`w-full relative md:-mr-[180px] z-0 bg-[#3B4E59] flex flex-col md:pl-[30px] lg:pl-[50px] md:pr-[194px] lg:pr-[204px] px-[35px] xl:pt-[104px] md:pt-[54px] pb-0h-auto md:h-full md:min-h-full ${(frActive || esActive) ? "min-h-[840px] sm:min-h-[860px] max-[460px]:min-h-[820px]" : "min-h-[810px] sm:min-h-[820px] max-[460px]:min-h-[820px]"} `}>
                        <div className="max-md:absolute max-md:bottom-0 pr-[36px] ">
                            <h2 className="text-[#FFFFFF] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] max-[380px]:text-[22px] leading-tight 4xl:w-[734px] 2xl:w-[670px] xl:w-[500px] lg:w-[500px] max-[350px]:w-[265px] font-light">
                                {t('dealerTitle')}
                            </h2>
                            <h3 className="text-[#FFFFFF] font-semibold 4xl:text-[42px] 2xl:text-[38px] xl:text-[28px] lg:text-[28px] text-[20px] max-[380px]:text-[18px] leading-tight 2xl:w-[93%] xl:w-[88%] lg:w-[95%] mt-[19px] xl:mt-[28px]">
                                {t('dealerSubTitle')}
                            </h3>
                            <UnorderedList arrName={dealerData} ulClassName="list-disc pl-[22px] 2xl:w-[90%] xl:w-[90%] lg:w-[95%] xl:mt-[40px] mt-[28px]" liClassName="text-[#FFFFFF] mt-[19px] first:mt-0  xl:mt-[24px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] text-[16px] leading-tight xl:leading-[24px] font-light" />
                            <div className="mt-[20px] xl:mt-[48px] md:mb-[94px]">
                                <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" btnName={t('learnMoreBtn')} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    const EmpoweringDealersSection = () => {
        return (
            <section className="relative md:mt-[60px] min-[430px]:mt-[14rem] sm:mt-[15rem] mt-[12rem] md:pr-[20px] lg:pr-[60px] ">
                <div className="flex flex-col md:flex-row relative">
                    <div className="w-full relative z-20 md:flex md:items-center">
                        {/* Mobile Image - overlapping on content */}
                        <div className="block sm:block md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[25%] z-20 w-[80%] max-w-[460px]">
                            <Image
                                src="/images/industry/auto-industry/Mobile/cloud-technology-highway-digital-automotive-future-mobile.webp"
                                alt={t("empoweringSectionAlt")}
                                className="h-auto w-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop Image */}
                        <div className="absolute h-[80%] w-full hidden md:block">
                            <Image
                                src="/images/industry/auto-industry/cloud-technology-highway-digital-automotive-future.webp"
                                alt={t("empoweringSectionAlt")}
                                className="w-full object-cover h-full"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                    </div>
                    <div className={`md:ml-[-220px] xl:ml-[-200px] relative z-0 bg-[#4087C7] flex flex-col md:pl-[240px] xl:pl-[260px] md:pr-[55px] 2xl:pr-[75px] px-[35px] xl:pt-[94px] md:pt-[44px] pb-0 h-auto md:h-full md:min-h-full ${(frActive || esActive) ? "min-h-[870px] max-[400px]:min-h-[890px]" : "min-h-[810px] sm:min-h-[820px] max-[460px]:min-h-[800px]"}`}>
                        <div className="max-md:absolute bottom-0">
                            <div className="max-md:pr-[36px]">
                                <h2 className="text-white 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] max-[380px]:text-[22px] leading-tight 4xl:w-[670px] 2xl:w-[670px] xl:w-[500px] lg:w-[500px] max-[350px]:w-[265px] font-light">
                                    {t('empoweringTitle')}
                                </h2>
                                <h3 className="text-white font-semibold 4xl:text-[42px] 2xl:text-[38px] xl:text-[28px] lg:text-[28px] text-[20px] max-[400px]:text-[18px] max-[350px]:w-[256px] leading-tight 2xl:w-[717px] xl:w-full lg:w-[95%] mt-[18px] xl:mt-[39px] w-[80%]">
                                    {t('empoweringSubTitle')}
                                </h3>
                                <UnorderedList arrName={empoweringData} ulClassName="list-disc pl-[22px] 2xl:w-[90%] xl:w-[90%] lg:w-[95%] xl:mt-[40px] mt-[23px]" liClassName="text-white mt-[19px] first:mt-0 xl:mt-[24px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] text-[16px] leading-tight xl:leading-[24px] font-light" />
                                <div className="mt-[20px] xl:mt-[60px] xl:mb-[70px] mb-0">
                                    <LearnMore btnName={t('learnMoreBtn')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    const UnlockingDataSection = () => {
        return (
            <section className="relative md:mt-[60px] min-[430px]:mt-[14rem] sm:mt-[15rem] mt-[12rem] custom-container md:pr-0 max-md:px-0">
                <div className="flex flex-col md:flex-row-reverse relative">
                    <div className="w-full relative z-10 px-[35px] md:px-0 md:flex md:items-center">
                        {/* Mobile Image - overlapping on content */}
                        <div className="block sm:block md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[25%] z-20 w-[80%] max-w-[460px]">
                            <Image
                                src="/images/industry/auto-industry/Mobile/commercial-vehicle-technician-maintenance-workshop-mobile.webp"
                                alt={t("unlockingSectionAlt")}
                                className="block md:hidden h-full w-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop Image */}
                        <Image
                            src="/images/industry/auto-industry/commercial-vehicle-technician-maintenance-workshop.webp"
                            alt={t("unlockingSectionAlt")}
                            className="hidden md:block w-full h-[80%] lg:h-[90%] object-cover"
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                    <div className={`w-full relative md:-mr-[180px] z-0 bg-[#3B4E59] flex flex-col md:pl-[30px] lg:pl-[50px] md:pr-[194px] lg:pr-[204px] px-[35px] xl:pt-[104px] md:pt-[54px] pb-0h-auto md:h-full md:min-h-full  ${(frActive || esActive) ? "min-h-[840px] sm:min-h-[860px] max-[460px]:min-h-[860px]" : "min-h-[810px] sm:min-h-[820px] max-[460px]:min-h-[800px]"}`}>
                        <div className="max-md:absolute max-md:bottom-0 pr-[36px]">
                            <h2 className="text-white 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] max-[380px]:text-[22px] leading-tight  4xl:w-[689px]  2xl:w-[670px] xl:w-[500px] lg:w-[500px]   font-light ">
                                {t('unlockingTitle')}
                            </h2>
                            <h3 className="text-white font-semibold 4xl:text-[42px] 2xl:text-[38px] xl:text-[28px] lg:text-[28px] text-[20px] max-[380px]:text-[18px]  max-[390px]:w-[256px] leading-tight  2xl:w-[689px] xl:w-full lg:w-[95%]   mt-[18px] xl:mt-[39px]">
                                {t('unlockingSubTitle')}
                            </h3>
                            <UnorderedList arrName={unlockingData} ulClassName="list-disc pl-[22px] 2xl:w-[90%] xl:w-[90%] lg:w-[95%] mt-[23px] xl:mt-[38px]" liClassName="text-white mt-[19px] first:mt-0 xl:mt-[24px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] text-[16px] xl:leading-[24px] leading-[19px] font-light" />
                            <div className="mt-[20px] xl:mt-[48px] xl:mb-[94px] mb-0">
                                <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" btnName={t('learnMoreBtn')} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    const IntegratingAutomativeSection = () => {
        return (
            <section className="relative xl:mt-[106px] mt-[99px] w-full">
                {/* Mobile View */}
                <div className="relative block md:hidden">
                    <div className="sm:h-[1200px] h-full">
                        <Image
                            src="/images/industry/auto-industry/Mobile/ev-charging-integration-automotive-technology-sap-mobile.webp"
                            alt={t("integrationSectionAlt")}
                            className="w-full h-full object-cover sm:object-[35%_50%]"
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                    <div className="sm:mx-[100px] mx-[40px] absolute bottom-0 left-0 right-0 bg-[rgba(0,111,190,0.8)] px-[22px] pt-[32px]">
                        <h2 className="text-[#FFFFFF] text-[26px] max-[350px]:text-[22px] leading-[32px] font-light">
                            {t('integratingTitle')}
                        </h2>
                        <h3 className="text-[#FFFFFF] text-[22px] max-[350px]:text-[18px] font-semibold mt-[16px] leading-[27px] w-[90%]">
                            {t('integratingSubTitle')}
                        </h3>
                        <UnorderedList arrName={integratingAutomativeData} ulClassName="list-disc pl-[22px] text-[#FFFFFF] mt-[16px]" liClassName="mt-[19px] first:mt-0 text-[16px] leading-[19px]" />
                        <div className="mt-[51px]">
                            <LearnMore btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                </div>
                {/* Desktop View */}
                <div className={`${(frActive || esActive) ? "2xl:h-[990px]" : "2xl:h-[900px]"}  xl:h-[1000px] md:h-[700px]`}>
                    <Image
                        src="/images/industry/auto-industry/ev-charging-integration-automotive-technology-sap.webp"
                        alt={t("integrationSectionAlt")}
                        className="hidden md:block w-full h-full object-cover"
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                <div className="hidden md:flex absolute inset-0 items-start justify-start">
                    <div className="custom-container">
                        <div className={`relative ${(frActive || esActive) ? " 2xl:w-[66%]" : " 2xl:w-[61%]"} w-[55%] xl:w-[56%]`}>
                            <div
                                className="absolute inset-0 z-0 pointer-events-none"
                                style={{
                                    background: "rgba(0, 111, 190, 0.8)",
                                    borderRadius: "inherit",
                                }}
                            />
                            <div className="relative z-10 xl:pt-[70px] pt-[32px] xl:pb-[55px] pb-[27px] px-[26px] xl:px-[61px] ">
                                <h2 className="text-[#FFFFFF] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px]  max-[380px]:text-[22px] leading-tight  4xl:w-[689px]  2xl:w-[670px] xl:w-[400px] lg:w-[500px] md:w-[350px]   font-light">
                                    {t('integratingTitle')}
                                </h2>
                                <h3 className="text-[#FFFFFF] 4xl:text-[42px] 2xl:text-[38px] xl:text-[28px] lg:text-[28px]  text-[20px] max-[380px]:text-[18px]  max-[390px]:w-[256px] leading-tight  2xl:w-[689px] xl:w-[500px] lg:w-[95%]    font-semibold xl:mt-[38px] mt-[16px]  xl:leading-[52px]">
                                    {t('integratingSubTitle')}
                                </h3>
                                <UnorderedList arrName={integratingAutomativeData} ulClassName="list-disc pl-[22px] text-[#FFFFFF] xl:mt-[40px] mt-[16px] 4xl:w-[85%] 2xl:w-[89%] xl:w-[90%] lg:w-[95%]" liClassName="mt-[19px] first:mt-0 2xl:text-[20px] xl:text-[16px] lg:text-[16px] text-[16px] leading-tight font-light" />
                                <div className="xl:mt-[40px] mt-[41px]">
                                    <LearnMore btnName={t('learnMoreBtn')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    const PartenringPowerSection = () => {
        return (
            <section className="relative w-full">
                {/* Mobile View */}
                <div className="md:h-[700px] block md:hidden">
                    <div className="sm:h-[1200px] h-full">
                        <Image
                            src="/images/industry/auto-industry/Mobile/highway-light-trails-sap-salesforce-partnership-mobile.webp"
                            alt={t("partneringPowerAlt")}
                            className="w-full h-full"
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                    <div className="sm:mx-[100px] mx-[40px] absolute bottom-0 left-0 right-0 bg-[rgba(255,255,255,0.8)] px-[14px] pt-[32px] z-10">
                        <h2 className="text-[#000000] text-[26px] max-[350px]:text-[22px]  leading-[32px]">
                            {t('partneringTitle')}
                        </h2>
                        <h3 className="text-[#0B0B0B] text-[22px]  max-[350px]:text-[18px] font-semibold xl:mt-[18px] mt-[16px] leading-[27px]">
                            {t('partneringSubTitle')}
                        </h3>
                        <p className="text-[#000000] text-[16px] mt-[16px] leading-[19px] font-normal">
                            {t('partneringDesc')}
                        </p>
                        <UnorderedList arrName={partenringPowerData} ulClassName="list-disc pl-[20px] text-[#000000] mt-[45px]" liClassName="mt-[19px] first:mt-0 text-[16px] leading-[19px]" />
                        <div className="mt-[33px]">
                            <LearnMore btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                </div>
                {/* Desktop View */}
                <div className={`hidden md:block relative w-full h-full ${(frActive || esActive) ? "md:h-[530px] lg:h-[590px] xl:h-[650px] 2xl:h-[800px] 4xl:h-[780px]" : "md:h-[500px] lg:h-[550px] xl:h-[615px] 2xl:h-[740px] 4xl:h-[780px]"} `}>
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/industry/auto-industry/highway-light-trails-sap-salesforce-partnership.webp"
                            alt={t("partneringPowerAlt")}
                            className="w-full h-full object-cover"
                            width={0}
                            height={0}
                            priority
                        />
                        <div className="absolute inset-0">
                            <div className="custom-container w-full h-full flex items-start justify-end">
                                <div className="relative bg-white h-full xl:pt-[66px] pt-[32px] px-[26px] xl:px-[61px] md:w-[55%] w-full">
                                    <h2 className="text-[#000000] 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] max-[380px]:text-[22px] leading-tight 4xl:w-[620px] xl:w-[500px] lg:w-[380px] md:w-[350px] font-light">
                                        {t('partneringTitle')}
                                    </h2>
                                    <h3 className="text-[#0B0B0B] 4xl:text-[42px] 2xl:text-[38px] xl:text-[28px] lg:text-[28px] text-[20px] max-[380px]:text-[18px] max-[390px]:w-[256px] leading-tight 4xl:w-[614px] 2xl:w-[568px] xl:w-[405px] lg:w-[77%] font-semibold xl:mt-[18px] mt-[16px]  ">
                                        {t('partneringSubTitle')}
                                    </h3>
                                    <p className="text-[#000000] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] text-[16px] leading-tight font-normal xl:mt-[11px] mt-[16px]  xl:leading-[24px]">
                                        {t('partneringDesc')}
                                    </p>
                                    <UnorderedList arrName={partenringPowerData} ulClassName="list-disc pl-[22px] text-[#000000] xl:mt-[26px] mt-[16px]" liClassName="mt-[19px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] text-[16px] xl:leading-[24px] leading-[19px]" />
                                    <div className="absolute bottom-0">
                                        <LearnMore btnName={t("learnMoreBtn")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    const RelatedSolutionsSection = () => {
        return (
            <section className="custom-container max-md:px-0">
                <div
                    className={`xl:pl-[61px] px-[35px] xl:mt-[94px] mt-[63px] xl:pt-[129px] pt-[49px] xl:pb-[160px] pb-[59px] 
                    bg-[url('/images/industry/auto-industry/Mobile/blue-technology-network-related-automotive-solutions-mobile.webp')] bg-cover bg-center
                    md:bg-[url('/images/industry/auto-industry/blue-technology-network-related-automotive-solutions.webp')] md:bg-cover md:bg-center`}>
                    <h2 className="4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px]  max-[380px]:text-[22px] leading-tight font-light text-[#FFFFFF]">
                        {t('relatedTitle')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:mt-[45px] mt-[33px] gap-[30px] lg:gap-0">
                        {relatedSolutionsData.map((item, index) => {

                            const borderRight = index < 2 ? 'xl:border-r-[2px] xl:border-[#FFFFFF]' : '';
                            const borderBottom = 'border-b-[2px] border-[#FFFFFF] lg:border-0 pb-[33px] last:border-b-0 last:pb-0';

                            let paddingClass = '';
                            if (index === 0) {
                                paddingClass = 'xl:pr-4';
                            } else {
                                paddingClass = 'xl:px-[30px]';
                            }
                            return (
                                <div key={index} className={`flex xl:flex-col xl:justify-between md:w-[80%] xl:w-full ${borderRight} ${borderBottom} ${paddingClass} h-full`}>
                                    <div className="flex flex-col flex-1 xl:min-h-[300px]">
                                        <h4 className="text-white 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] text-[18px] xl:font-semibold font-medium leading-tight">
                                            {item.title}
                                        </h4>
                                        <p className="text-white 4xl:text-[20px] xl:text-[18px] text-[16px] font-light leading-tight xl:mt-[18px] mt-[18px] ">
                                            {item.desc}
                                        </p>
                                        <div className={`mt-auto pt-[20px] xl:hidden block`}>
                                            <LearnMore btnName={t('learnMoreBtn')} bgcolor="#006FBE" bordercolor="#006FBE" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="xl:block hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] lg:gap-0 mt-[-120px] 4xl:mt-[-90px]">
                            {relatedSolutionsData.map((item, index) => (
                                <div key={index} className={`w-fit ${index !== 0 ? "pl-[30px]" : ""}`}>
                                    <LearnMore

                                        btnName={t('learnMoreBtn')}
                                        bgcolor="#006FBE"
                                        bordercolor="#006FBE"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    return (
        <>
            <Seo
                title={t("seoTitle")}
                description={t("seoDescription")}
                canonical={`https://www.rialtes.com/${locale}/industry/digital-transformation-in-automotive-industry/`}
            />
            <Script
                id="schema-automotive"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative group overflow-hidden h-[400px] md:h-[500px] 4xl:h-[650px]">
                <div className="hidden md:block">
                    <Image
                        src="/images/industry/auto-industry/digital-car-green-technology-urban-transformation.webp"
                        alt={t("bannerAlt")}
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/industry/auto-industry/Mobile/digital-car-green-technology-urban-transformation-mobile.webp"
                        alt={t("bannerAlt")}
                        fill
                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 ">
                        <div className="col-span-12 xl:col-span-7 lg:col-span-9 text-white">
                            <h3 className="text-[18px] 4xl:text-[24px] 2xl:text-[22px] xl:text-[20px] lg:text-[16px] md:text-[18px] font-bold pr-[60px]">
                                {t('headerTitle')}
                            </h3>
                            <h1 className={`text-[24px] md:text-[36px] xl:text-[50px] 4xl:text-[60px] leading-tight mt-[11.5px] md:mt-[28.5px] ${(frActive || esActive) ? "sm:w-[70%] xl:w-[95%] 4xl:w-[90%]" : "sm:w-[70%] xl:w-[90%] 4xl:w-[70%]"}`}>
                                {t('headerSubTitle')}
                            </h1>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>
            {/* powering next gen section */}
            <section className="custom-container xl:mt-[112px] mt-[62px]">
                <h2 className="4xl:text-[60px] 2xl:text-[58px] xl:text-[40px] lg:text-[40px] md:text-[35px] text-[26px] max-[400px]:text-[22px] leading-tight xl:w-[69%] 2xl:w-[85%] lg:w-[77%] font-light">{t('pageDescTitle')}</h2>
                <div className="mt-[22px] xl:mt-[48px]">
                    <p className="4xl:text-[22px] 2xl:text-[20px] xl:text-[16px] text-[16px] font-normal lg:w-[78%] w-[96%]">{t('pageDesc')}</p>
                    <p className="4xl:text-[22px] 2xl:text-[20px] xl:text-[16px] text-[16px] font-normal mt-[22px] xl:mt[48px] lg:w-[78%] w-[96%]">{t('pageDesc2')}</p>
                </div>
            </section>
            <ThoughtLeadershipSection />
            <PreDeliveredSection />
            <EndToEndAutomativeSection />
            <ComprehensiveCustomerSection />
            <PersonalizingSection />
            <RevolutionizingServiceSection />
            <EnablingDynamicSection />
            <DealerBuyerSection />
            <EmpoweringDealersSection />
            <UnlockingDataSection />
            <IntegratingAutomativeSection />
            <PartenringPowerSection />
            <RelatedSolutionsSection />
            {/* Contact Form */}
            <div className="custom-container pb-10">
                <ContactForm title={t('contactTitle')} className={"max-w-[66rem] xl:font-normal 4xl:text-[60px] 2xl:text-[56px] xl:text-[40px] lg:text-[40px] text-[26px] leading-tight mt-[52px] xl:mt-[89px]"} />
            </div >
        </>
    )
}

