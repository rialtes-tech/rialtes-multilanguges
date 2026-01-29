"use client";
import ContactForm from "@/app/[locale]/components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import Seo from "@/app/[locale]/components/Seo";
import Image from "next/image";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../messages/en/industry.json';
import esContent from '../../../../../messages/es/industry.json';
import frContent from '../../../../../messages/fr/industry.json';
import { changeLocalization } from "../../components/changeLocalization";
import { useActiveLocale } from "../../components/activeLanguages";
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export default function Page() {
    const t = useTranslations('travelIndustry')
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { endToEndData, industryData, optimizeData, personalizedData, rightTechData, aiPoweredData, quickCommereceData,
        smarterServiceData, elavateTravelData, flawlessData, futureReadyData, turnSectionData, schemaData
    } = content.travelIndustry
    const { frActive, esActive } = useActiveLocale();

    return (
        <section>
            <div className="min-h-screen bg-white">
                <Seo
                    title={t("seoTitle")}
                    description={t("seoDescription")}
                    keywords="home, website, welcome"
                    canonical={`https://www.rialtes.com/${locale}/industry/travel-hospitality-it-solutions/`}
                />
                <Script
                    id="schema-travel"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
                {/* breadcrumbs schema */}
                <BreadcrumbSchema />
                {/* herosection */}
                <section className="relative group overflow-hidden h-[350px] md:h-[500px] 4xl:h-[650px]">
                    <div className="hidden md:block">
                        <Image
                            src="/images/industry/travel-transporation/hero-section-desktop-banner.webp"
                            alt={t("bannerAlt")}
                            fill
                            style={{ objectFit: "cover", objectPosition: "55% 20%" }}
                            priority
                            className="transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    {/* Mobile Image */}
                    <div className="block md:hidden">
                        <Image
                            src="/images/industry/travel-transporation/Mobile/hero-section-mob-banner.webp"
                            alt={t("bannerAlt")}
                            fill
                            style={{ objectFit: "cover", objectPosition: "5% 20%" }}
                            priority
                        />
                    </div>
                    <div className="relative h-full custom-container flex items-center">
                        <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                            <div className="col-span-12">
                                <h3 className="text-[#000000] text-[18px] md:text-[24px] font-bold max-lg:w-[80%] md:w-[50%] lg:w-full">
                                    {t('headerTitle')}
                                </h3>
                                <h1 className="text-[#00000] text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px] max-md:w-[69%] max-[380px]:w-[85%] md:w-[60%] 4xl:w-[65%] xl:w-[60%]">
                                    {t('headerSubTitle')}
                                </h1>
                            </div>
                            <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb */}
                <section className="custom-container">
                    <BreadCrumbs />
                </section>
                {/* page description section */}
                <section className="custom-container xl:mt-[135px] mt-[42px]">
                    <div className="grid grid-cols-1 xl:grid-cols-12 w-full 4xl:gap-[47px] gap-y-[32px] md:w-[80%] xl:w-full">
                        <div className="xl:col-span-7 col-span-12">
                            <h2 className="xl:text-[40px] 4xl:text-[60px] md:text-[30px] leading-tight text-[26px] xl:w-[90%]">
                                {t('pageDescTitle')}
                            </h2>
                        </div>
                        <div className="xl:col-span-5 col-span-12">
                            <p className="xl:text-[18px] 4xl:text-[22px] md:text-[18px] leading-tight text-[16px] font-normal">
                                {t('pageDesc1')}
                                <br /> <br />
                                {t('pageDesc2')}
                            </p>
                        </div>

                    </div>
                </section>
                {/* end to end section */}
                <section className="custom-container md:pr-0 max-md:px-0 xl:mt-[156px] mt-[102px]">
                    <div className="custom-container md:pl-0 bg-[#727272]">
                        <div className="grid grid-cols-1 md:grid-cols-12 w-full md:gap-[40px] gap-y-[34px] md:pt-[75px] pt-[40px]">
                            <div className="xl:col-span-7 md:col-span-6 col-span-12 text-[#FFFFFF] md:pl-[41px] md:order-1 order-2">
                                <h2 className="text-[26px] xl:text-[40px] 4xl:text-[60px] md:text-[30px] leading-tight 2xl:w-[88%]">
                                    {t('endToEndTitle')}
                                </h2>
                                <p className="xl:text-[16px] 4xl:text-[20px] md:text-[18px] text-[16px] leading-tight font-normal xl:mt-[48px] mt-[34px]">{t('endToEndDesc')}  </p>
                                <UnorderedList arrName={endToEndData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[48px] mt-[38px] pl-[20px]" liClassName="xl:text-[16px] 4xl:text-[20px] text-[16px] md:text-[18px] leading-tight font-light" />
                            </div>
                            <div className="xl:col-span-5 md:col-span-6 col-span-12 md:order-2 order-1">
                                <div className="hidden md:block relative w-full h-full">
                                    <Image
                                        src="/images/industry/travel-transporation/end-to-end-desktop-img.webp"
                                        alt={t('endtoendAlt')}
                                        className="h-full w-full"
                                        width={0}
                                        height={0}
                                        style={{ objectFit: "cover", objectPosition: "75% 20%" }}
                                        priority
                                    />
                                </div>
                                {/* Mobile Image */}
                                <div className="block md:hidden relative w-full h-[400px] sm:h-[600px] md:h-[700px]">
                                    <Image
                                        src="/images/industry/travel-transporation/Mobile/end-to-end-mob-img.webp"
                                        alt={t('endtoendAlt')}
                                        fill
                                        style={{ objectFit: "cover", objectPosition: "80% 20%" }}
                                        priority
                                        className="h-full"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="xl:mt-[49px] mt-[42px] md:pl-[60px]">
                            <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
                        </div>
                    </div>
                </section>
                {/* industry focused section */}
                <section className="text-[#ffffff] relative">
                    <div className=" lg:mt-[86px] mt-[46px]">
                        {/* Mobile View */}
                        <div className="block lg:hidden">
                            <Image
                                src="/images/industry/travel-transporation/Mobile/industry-focused-mob-img.webp"
                                alt={t('industryFocusAlt')}
                                className="w-full h-auto"
                                priority
                                width={0}
                                height={0}
                            />
                            <div className="border-none px-[35px] pt-[42px] z-10  xl:pb-[144px] pb-[77px]" style={{
                                background: "#073259",
                            }}>
                                <h2 className="text-[26px] md:text-[30px] xl:text-[60px] leading-tight">
                                    {t('industryFocusedTitle')}
                                </h2>
                                <p className="text-[16px] md:text-[18px] xl:text-[20px] leading-tight font-normal xl:mt-[37px] mt-[14px]">
                                    {t('industryFocusedDesc')}
                                </p>
                                <UnorderedList arrName={industryData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[48px] mt-[38px] pl-[20px]" liClassName="text-[16px] md:text-[18px] xl:text-[20px] leading-tight font-light" />
                                <div className="absolute bottom-[-20px] xl:pl-[61px] lg:pl-[26px]">
                                    <LearnMore btnName={t('learnMoreBtn')} locale={locale} bgcolor="#006FBE" />
                                </div>
                            </div>
                        </div>

                        {/* Desktop View */}
                        <div className="hidden lg:block w-full h-[980px] lg:h-[670px] xl:h-[1150px] 2xl:h-[1000px] 3xl:h-[950px]">
                            <Image
                                src="/images/industry/travel-transporation/industry-focused-desk-img.webp"
                                alt={t('industryFocusAlt')}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                style={{ objectPosition: "35% 20%" }}
                                priority
                            />
                            <div className="absolute inset-0 lg:top-[-87px]">
                                <div className="custom-container w-full h-full flex items-start justify-end">
                                    <div className="relative 3xl:w-[48%] 2xl:w-[54%] xl:w-[48%] lg:w-[42%] w-[60%] h-full">
                                        <div
                                            className="absolute inset-0 z-0 pointer-events-none"
                                            style={{
                                                background: "#073259",
                                                mixBlendMode: "multiply",
                                                opacity: 0.93,
                                            }}
                                        />
                                        <div className="relative z-10 h-full flex flex-col justify-center px-[26px] xl:px-[58px] overflow-y-auto">
                                            <h2 className={` xl:text-[40px] leading-tight ${(frActive || esActive) ? "4xl:text-[48px] text-[24px]" : "4xl:text-[60px] text-[26px]"} `}>
                                                {t('industryFocusedTitle')}
                                            </h2>
                                            <p className="xl:text-[16px] 4xl:text-[20px] text-[16px] leading-tight font-normal xl:mt-[37px] mt-[14px]">
                                                {t('industryFocusedDesc')}
                                            </p>
                                            <UnorderedList arrName={industryData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[48px] mt-[38px] pl-[20px]" liClassName="xl:text-[16px] 4xl:text-[20px] text-[16px] leading-tight font-light" />
                                        </div>
                                        <div className="absolute bottom-[-20px] xl:pl-[61px] lg:pl-[26px]">
                                            <LearnMore btnName={t('learnMoreBtn')} locale={locale} bgcolor="#006FBE" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* elevate travel section */}
                <section className="custom-container lg:pr-0 max-lg:px-0 lg:mt-[120px] mt-[10px]">
                    <div className="grid lg:grid-cols-12 grid-cols-1">
                        <div className="lg:col-span-5 col-span-12 lg:order-1 order-2">
                            <div className="bg-[#006FBE] text-[white] lg:py-[55px] lg:px-[64px] lg:w-[500px] xl:w-[600px] 3xl:w-[800px] 2xl:w-[700px] max-lg:px-[36px] pb-[42px] pt-[150px] lg:z-20 relative">
                                <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight">
                                    {t('elevateTitle')}
                                </h2>
                                <h3 className="text-[18px] md:text-[20px] xl:text-[30px] 4xl:text-[36px] leading-tight font-semibold xl:mt-[37px] mt-[14px]">
                                    {t('elevateSubTitle')}
                                </h3>
                                <p className="xl:text-[16px] md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight font-normal xl:mt-[40px] mt-[26px]  md:w-[70%] lg:w-[90%]">
                                    {t('elevateDesc')}
                                </p>
                                <UnorderedList arrName={elavateTravelData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[37px] mt-[26px] pl-[20px] md:w-[90%] lg:w-[90%]" liClassName="xl:text-[16px] 4xl:text-[20px] md:text-[18px] text-[16px] leading-tight font-light" />
                            </div>
                        </div>
                        <div className="lg:col-span-7 col-span-12 lg:order-2 order-1 max-lg:px-[36px]">
                            {/* Desktop Image */}
                            <div className="hidden lg:block relative w-full h-full top-[-52px] right-0 z-0">
                                <Image
                                    src="/images/industry/travel-transporation/elavate-travel-desk-img.webp"
                                    alt={t('elevateTravelAlt')}
                                    className="w-full h-full"
                                    width={0}
                                    height={0}
                                    style={{ objectFit: "cover", objectPosition: "45% 20%" }}
                                    priority
                                />
                            </div>
                            {/* Mobile Image */}
                            <div className="block lg:hidden w-full h-[500px] sm:h-[700px] md:h-[750px] relative">
                                <Image
                                    src="/images/industry/travel-transporation/Mobile/elavate-travel-mob-img.webp"
                                    alt={t('elevateTravelAlt')}
                                    width={0}
                                    height={0}
                                    style={{ objectFit: "cover", objectPosition: "20% 20%" }}
                                    priority
                                    className="h-full w-full absolute top-[110px] z-20"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* personalized engagement section */}
                <section className="xl:mt-0 mt-[65px] w-full h-full relative">
                    {/*  Desktop */}
                    <div className="hidden md:block h-full">
                        <Image
                            src="/images/industry/travel-transporation/personalized-img-desk1.webp"
                            alt={t('personalizedAlt')}
                            width={0}
                            height={0}
                            className="h-full w-full"
                            priority
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    {/*  Mobile */}
                    <div className="block md:hidden h-full">
                        <Image
                            src="/images/industry/travel-transporation/Mobile/personalized-img-mob.webp"
                            alt={t('personalizedAlt')}
                            className="h-full w-full"
                            priority
                            width={0}
                            height={0}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="bg-[#EDECE8] mt-[-60px] sm:mt-[-90px] md:mt-0 xl:mt-[-54px] pb-[74px]">
                        <div className="custom-container">
                            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[80px] xl:gap-[40px]">
                                <div>
                                    <h2 className="text-[26px] md:text-[30px] 4xl:text-[60px] xl:text-[40px] leading-tight">
                                        {t('personalizedTitle')}
                                    </h2>
                                    <p className="xl:text-[16px] md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight font-normal xl:mt-[53px] mt-[26px] xl:w-[90%]">{t('personalizedDesc')}</p>
                                </div>
                                <div>
                                    <UnorderedList arrName={personalizedData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc md:mt-[0px] mt-[38px] pl-[20px]" liClassName="xl:text-[16px] md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight font-normal" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute md:left-1/2 bottom-[-26px] max-md:ml-[36px] md:ml-[40px] lg:ml-[36px]">
                        <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
                    </div>
                </section>
                {/* optimize section */}
                <section className="relative xl:mt-[114px] mt-[79px] max-md:px-0">
                    <div className="custom-container max-md:px-0">
                        {/* Mobile Background */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/industry/travel-transporation/Mobile/optimize-asset-mob-img.webp"
                                alt={t('optimizeAlt')}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop Background */}
                        <div className="hidden md:block w-full 3xl:h-[950px] 2xl:h-[1050px] xl:h-[1070px] lg:h-[700px] md:h-[750px]">
                            <Image
                                src="/images/industry/travel-transporation/optimize-asset-desk-img.webp"
                                alt={t('optimizeAlt')}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                style={{ objectPosition: '25% 20%' }}
                                priority
                            />
                        </div>
                    </div>
                    <div className="z-10 md:pt-[55px] xl:pt-[80px] md:pb-[80px] pb-[79px] md:pr-[36px] md:absolute md:top-0">
                        <div className="custom-container max-md:px-0 ">
                            <div className="grid md:grid-cols-12 grid-cols-1 text-[#FFFFFF]">
                                <div className="md:col-span-6 col-span-12"></div>
                                <div className="md:col-span-6 col-span-12  max-md:bg-[#5DA8D3] max-md:pt-[31px] max-md:pb-[68px] max-md:px-[36px] ">
                                    <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight">
                                        {t('optimizeTitle')}
                                    </h2>
                                    <h3 className="text-[18px] md:text-[20px] xl:text-[36px] 4xl:text-[40px] leading-tight font-semibold xl:mt-[46px] mt-[26px]">
                                        {t('optimizeSubTitle')}
                                    </h3>
                                    <p className="xl:text-[16px] md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight font-normal xl:mt-[37px] mt-[14px]">
                                        {t('optimizeDesc')}
                                    </p>
                                    <UnorderedList arrName={optimizeData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[37px] mt-[38px] md:mt-[20px] pl-[20px] xl:pr-6 4xl:pr-0 " liClassName="xl:text-[16px] 4xl:text-[20px] text-[16px] md:text-[18px] leading-tight font-light" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute md:left-1/2 md:bottom-[-26px] bottom-[60px]  max-md:ml-[36px]">
                        <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
                    </div>
                </section>
                {/* driving repeat section */}
                <section className="xl:mt-[79px] md:mt-[61px] mt-0 custom-container max-md:px-0 md:pl-0">
                    <div className="grid md:grid-cols-12 grid-cols-1">
                        <div className="grid md:col-span-6 lg:col-span-8 custom-container md:pr-0 md:pt-[78px] pt-[44px] bg-[#EBEBEB] md:order-1 order-2">
                            <div className="md:pr-[40px]">
                                <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight w-full">
                                    {t('drivingTitle')}
                                </h2>
                                <h3 className="text-[18px] md:text-[20px] xl:text-[36px] 4xl:text-[42px] leading-tight font-semibold xl:mt-[18px] mt-[22px]">
                                    {t('drivingSubTitle')}
                                </h3>
                                <p className="xl:text-[16px] md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight font-normal xl:mt-[40px] mt-[20px] 2xl:w-[80%]">
                                    {t('drivingDesc')}
                                </p>
                                <UnorderedList arrName={futureReadyData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[37px] mt-[38px] pl-[20px] lg:w-[90%]" liClassName="xl:text-[16px] 4xl:text-[20px] text-[16px] md:text-[18px] leading-tight font-normal" />
                                <div className="mt-[44px]">
                                    <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
                                </div>
                            </div>
                        </div>
                        <div className="grid md:col-span-6 lg:col-span-4 relative md:order-2 order-1">
                            {/* Mobile Background */}
                            <div className="block md:hidden absolute bottom-0 w-full h-1/2 bg-[#EBEBEB] z-10 pointer-events-none" />
                            <div className="block md:hidden w-full h-full px-[36px] relative z-20">
                                <Image
                                    src="/images/industry/travel-transporation/Mobile/driving-repeat-mob-img.webp"
                                    alt={t('drivingReapeatAlt')}
                                    className="w-full h-full object-cover"
                                    width={0}
                                    height={0}
                                    priority
                                />
                            </div>
                            {/* Desktop Background */}
                            <div className="hidden md:block absolute top-0 left-0 w-1/2 h-full bg-[#EBEBEB] z-10 pointer-events-none" />
                            <div className="hidden md:flex w-full items-center z-20">
                                <Image
                                    src="/images/industry/travel-transporation/driving-repeat-desk-img.webp"
                                    alt={t('drivingReapeatAlt')}
                                    className="w-full h-[80%] py-auto object-cover"
                                    width={0}
                                    height={0}
                                    style={{ objectPosition: '85% 20%' }}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* flawless backend section  */}
                <section className="custom-container xl:mt-[75px] mt-[60px] lg:pr-0 max-md:px-0">
                    <div className="bg-[#073259] custom-container md:pl-0">
                        <div className="grid md:grid-cols-12 grid-cols-1 lg:gap-[65px] md:gap-[40px] gap-y-[30px] md:pt-[94px] md:pb-[103px] pb-[55px]">
                            <div className="md:col-span-6 col-span-12">
                                {/* Mobile img */}
                                <div className="block md:hidden w-full h-full">
                                    <Image
                                        src="/images/industry/travel-transporation/Mobile/flawless-backend-mob-img.webp"
                                        alt={t('flawlessAlt')}
                                        className="w-full h-full object-cover"
                                        width={0}
                                        height={0}
                                        priority

                                    />
                                </div>
                                {/* Desktop img */}
                                <div className="hidden md:block w-full h-full">
                                    <Image
                                        src="/images/industry/travel-transporation/flawless-backend-desk-img.webp"
                                        alt={t('flawlessAlt')}
                                        className="w-full h-full object-cover"
                                        width={0}
                                        height={0}
                                        style={{ objectPosition: '25% 20%' }}
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="text-[#ffffff] md:col-span-6 col-span-12">
                                <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight">
                                    {t('flawlessTitle')}
                                </h2>
                                <h3 className="text-[18px] md:text-[20px] xl:text-[36px] 4xl:text-[42px] leading-tight font-semibold xl:mt-[29px] mt-[20px]">
                                    {t('flawlessSubTitle')}
                                </h3>
                                <p className="xl:text-[16px] md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight font-normal xl:mt-[29px] mt-[26px]">
                                    {t('flawlessDesc')}
                                </p>
                                <UnorderedList arrName={flawlessData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[29px] mt-[32px] pl-[20px]" liClassName="xl:text-[16px] 4xl:text-[20px] text-[16px] md:text-[18px] leading-tight font-light" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* turn data section */}
                <section className="relative bg-[url('/images/industry/travel-transporation/Mobile/turn-data-mob-bg.webp')] 
                               md:bg-[url('/images/industry/travel-transporation/turn-data-desk-bg.webp')] bg-cover bg-center bg-no-repeat lg:mt-[76px] mt-[68px]">
                    <div className="custom-container h-full flex items-center max-md:px-0">
                        <div className="relative w-full max-md:mt-[162px]  max-md:mx-auto md:w-1/2 xl:w-1/2">
                            <div className="absolute inset-0 bg-[#363636] mix-blend-multiply z-0"></div>
                            <div className="relative z-10 text-white xl:pt-[49px] xl:pb-[77px] xl:px-[77px] pt-[55px] pb-[51px] px-[36px]">
                                <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight">
                                    {t('turnDataTitle')}
                                </h2>
                                <h3 className="text-[18px] md:text-[20px] xl:text-[36px] 4xl:text-[42px] leading-tight font-semibold xl:mt-[32px] mt-[23px]">
                                    {t('turnDataSubTitle')}
                                </h3>
                                <p className="xl:text-[16px] md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight font-normal xl:mt-[32px] mt-[23px]">
                                    {t('turnDataDesc1')}
                                </p>
                                <UnorderedList arrName={turnSectionData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[29px] mt-[32px] pl-[20px] lg:w-[90%]" liClassName="xl:text-[16px] 4xl:text-[20px] text-[16px] md:text-[18px] leading-tight font-light" />
                                <p className="xl:text-[16px] 4xl:text-[20px] text-[16px] leading-tight font-normal xl:mt-[63px] mt-[32px] md:ml-[10px]">
                                    {t('turnDataDesc2')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* why the right technology section */}
                <section className="xl:mt-[86px] mt-[53px] relative">
                    {/* Mobile Background */}
                    <div className="block md:hidden w-full h-full">
                        <Image
                            src="/images/industry/travel-transporation/Mobile/right-technology-mob-img.webp"
                            alt={t('rightTechPartAlt')}
                            className="w-full h-full object-cover"
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                    {/* Desktop Background */}
                    <div className="hidden md:block w-full h-full">
                        <Image
                            src="/images/industry/travel-transporation/right-technology-desk-img.webp"
                            alt={t('rightTechPartAlt')}
                            className="w-full h-full object-cover"
                            width={0}
                            height={0}
                            style={{ objectPosition: '25% 20%' }}
                            priority
                        />
                    </div>
                    <div className="custom-container text-[#ffffff] md:mt-[-16%] mt-[-40%] relative">
                        <div className="bg-[#006FBE] lg:px-[70px] px-[26px]">
                            <div className="grid lg:grid-cols-2 grid-cols-1 lg:py-[77px] pt-[38px] pb-[55px] lg:gap-[80px] xl:gap-[40px]">
                                <div>
                                    <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight lg:mt-[20px] xl:mt-0">
                                        {t('whyRightTitle')}
                                    </h2>
                                </div>
                                <div>
                                    <p className="xl:text-[16px] md:text-[18px] 4xl:text-[20px] text-[16px] leading-tight font-normal lg:mt-0 mt-[17px]">
                                        {t('whyRightDesc')}
                                    </p>
                                    <UnorderedList arrName={rightTechData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[37px] mt-[38px] pl-[20px]" liClassName="xl:text-[16px] 4xl:text-[20px] text-[16px] leading-tight md:text-[18px] font-light" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Ai powered section */}
                <section className="xl:mt-[102px] mt-[64px] custom-container max-md:px-0">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[20px] xl:gap-[40px] md:gap-[60px] gap-y-[44px]">
                        <div className="md:order-1 order-2 max-md:px-[36px] 2xl:col-span-6 md:col-span-6  lg:col-span-7 col-span-12 lg:pt-[20px] xl:pt-0">
                            <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] md:text-[30px] leading-tight">
                                {t('aiPoweredTitle')}
                            </h2>
                            <h3 className="4xl:text-[42px] xl:text-[36px] text-[18px] md:text-[20px] font-semibold 4xl:mt-[34px] mt-[26px] leading-tight w-full">
                                {t('aiPoweredSubTitle')}
                            </h3>
                            <p className="4xl:text-[22px] xl:text-[18px] text-[16px] md:text-[18px] leading-tight font-normal 4xl:mt-[42px] mt-[20px]">
                                {t('aiPoweredDesc')}
                            </p>
                            <UnorderedList arrName={aiPoweredData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc 4xl:mt-[44px] mt-[26px] pl-[20px]" liClassName="xl:text-[16px] 4xl:text-[20px] text-[16px] md:text-[18px] leading-tight font-normal" />
                        </div>
                        <div className="md:order-2 order-1 2xl:col-span-6 md:col-span-6 lg:col-span-5 col-span-12">
                            {/* Mobile Background */}
                            <div className="block md:hidden w-full h-full">

                                <Image
                                    src="/images/industry/travel-transporation/Mobile/ai-powered-mob-img.webp"
                                    alt={t('aiPoweredAlt')}
                                    className="w-full h-full object-cover"
                                    width={0}
                                    height={0}
                                    priority
                                />
                            </div>
                            {/* Desktop Background */}
                            <div className="hidden md:block w-full h-full">
                                <Image
                                    src="/images/industry/travel-transporation/ai-powered-desk-img.webp"
                                    alt={t('aiPoweredAlt')}
                                    className="w-full h-full object-cover"
                                    width={0}
                                    height={0}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="xl:mt-[20px] mt-[36px] max-md:ml-[36px]">
                        <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
                    </div>
                </section>
                {/* quick commerce section */}
                <section className="xl:mt-[102px] mt-[64px] custom-container max-lg:px-0 lg:pl-0">
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-[20px] xl:gap-[60px] lg:gap-[60px] gap-y-[44px]">
                        <div className="order-2 max-lg:px-[36px] lg:col-span-5 col-span-12 lg:pt-[20px] xl:pt-0">
                            <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] md:text-[30px] leading-tight">
                                {t('quickCommerceTitle')}
                            </h2>
                            <h3 className="4xl:text-[42px] xl:text-[36px] text-[18px] md:text-[20px] font-semibold xl:mt-[34px] mt-[26px] leading-tight w-full">
                                {t('quickCommerceSubTitle')}
                            </h3>
                            <p className="4xl:text-[22px] xl:text-[18px] text-[16px] md:text-[18px] leading-tight font-normal xl:mt-[42px] mt-[20px]">
                                {t('quickCommerceDesc')}
                            </p>
                            <UnorderedList arrName={quickCommereceData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[44px] mt-[26px] pl-[20px]" liClassName="xl:text-[16px] 4xl:text-[20px] text-[16px] md:text-[18px] leading-tight font-normal" />
                            <div className="xl:mt-[120px] mt-[36px]">
                                <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
                            </div>
                        </div>
                        <div className="order-1 lg:col-span-7 col-span-12">
                            {/* Mobile Background */}
                            <div className="block lg:hidden w-full h-full">
                                <Image
                                    src="/images/industry/travel-transporation/Mobile/quick-commerce-mob-img.webp"
                                    alt={t('quikCommerceAlt')}
                                    className="w-full h-full object-cover"
                                    width={0}
                                    height={0}
                                    priority
                                />
                            </div>
                            {/* Desktop Background */}
                            <div className="hidden lg:block w-full h-full">
                                <Image
                                    src="/images/industry/travel-transporation/quick-commerce-desk-img.webp"
                                    alt={t('quikCommerceAlt')}
                                    className="w-full h-full object-cover"
                                    width={0}
                                    height={0}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* smarter service section */}
                <section className="md:pt-[98px] md:mt-0 mt-[67px] custom-container max-md:px-0 bg-[#F5F5F5]">
                    <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] md:text-[30px] md:block hidden leading-tight md:mb-[36px]">
                        {t('smarterTitle')}
                    </h2>
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[20px] xl:mt-[48px] xl:gap-[40px] 2xl:gap-[80px] md:gap-[60px] gap-y-[44px]">
                        <div className="md:order-1 order-2 max-md:px-[36px] 2xl:col-span-7 lg:col-span-7 md:col-span-6 col-span-12 md:pt-[20px] xl:pt-0 lg:flex flex-col ">
                            <h2 className="text-[26px] md:text-[30px]  md:hidden leading-tight font-normal">
                                {t('smarterTitle')}
                            </h2>
                            <h3 className="4xl:text-[42px] xl:text-[36px] text-[18px] md:text-[20px] font-semibold md:mt-0 mt-[26px] leading-tight w-full">
                                {t('smarterSubTitle')}
                            </h3>
                            <p className="4xl:text-[22px] xl:text-[18px] text-[16px] md:text-[18px] leading-tight font-normal xl:mt-[34px] mt-[23px]">
                                {t('smarterDesc')}
                            </p>
                            <UnorderedList arrName={smarterServiceData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[44px] mt-[22px] pl-[20px] xl:w-[80%] 4xl:w-full" liClassName="xl:text-[16px] 4xl:text-[20px] md:text-[18px] text-[16px] leading-tight font-normal" />
                            <div className="lg:mt-auto lg:pt-[26px] mt-[26px]">
                                <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
                            </div>
                        </div>
                        <div className="md:order-2 order-1 2xl:col-span-5 lg:col-span-5 md:col-span-6 col-span-12">
                            {/* Mobile Background */}
                            <div className="block md:hidden w-full h-full px-[36px]">

                                <Image
                                    src="/images/industry/travel-transporation/Mobile/smarter-service-mob-img.webp"
                                    alt={t('smaterServiceAlt')}
                                    className="w-full h-full object-cover"
                                    width={0}
                                    height={0}
                                    priority
                                />
                            </div>
                            {/* Desktop Background */}
                            <div className="hidden md:block">
                                <Image
                                    src="/images/industry/travel-transporation/smarter-service-desk-img.webp"
                                    alt={t('smaterServiceAlt')}
                                    className="w-full h-full object-cover"
                                    width={0}
                                    height={0}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact Form */}
                <section className="custom-container xl:mt-[104px] xl:mb-[166px] mt-[45px] mb-[45px]">
                    <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle')} subtitle1={t('contactSubTitle2')} className={"xl:w-[80%] 4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px]"} />
                </section>
            </div>
        </section>
    )
}
