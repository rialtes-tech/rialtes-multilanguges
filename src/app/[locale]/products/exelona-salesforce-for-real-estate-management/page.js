"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import ContactForm from "@/app/[locale]/components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../messages/en/products.json';
import esContent from '../../../../../messages/es/products.json';
import frContent from '../../../../../messages/fr/products.json';
import { changeLocalization } from "../../components/changeLocalization";
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export default function Page() {
    const t = useTranslations("exelona");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { features, properties, assetMarketingData, aiEnabledData, excelPersonaData, excelPayData, agentChatData, builtData, buildSalesforceData, schemaData } = content.exelona;
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="home, website, welcome"
                canonical={`https://www.rialtes.com/${locale}/products/exelona-salesforce-for-real-estate-management/`}
            />
            <Script
                id="schema-grow"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* breadcrumbs schema */}
            <BreadcrumbSchema />
            {/* hero section */}
            <section className="relative overflow-hidden">
                <div className="xl:absolute inset-0 z-0">
                    <div className="hidden xl:block w-full h-full">
                        <Image
                            src="/images/products/exelona/desktop/smart-city-digital-transformation-concept.webp"
                            alt={t('bannerAlt')}
                            priority
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Mobile Banner */}
                    <div className="block xl:hidden w-full h-full">
                        <Image
                            src="/images/products/exelona/mobile/smart-city-digital-transformation-concept-mobile.webp"
                            alt={t('bannerAlt')}
                            priority
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Mask only in bottom-right corner */}
                <div className="absolute xl:bottom-0 xl:right-0 right-[-185px] bottom-[-59px] z-10">
                    <Image
                        src="/images/products/exelona/desktop/mask.webp"
                        alt="image mask"
                        width={500}
                        height={500}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="relative z-20 custom-container 4xl:mt-[22rem] 2xl:mt-[20rem] xl:mt-[18rem] mt-[200px] 4xl:pr-0">
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-2">
                        <div className="xl:col-span-12 col-span-12 pr-5 text-white">
                            {/* breadcrumb */}
                            <section className="py-2">
                                <BreadCrumbs />
                            </section>
                            <h1 className="leading-tight break-words text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] 4xl:pr-0 md:pr-40 pr-10">
                                <span className="text-white text-[28px] xl:text-[60px] 2xl:text-[80px] 4xl:text-[105px] mb-2 break-words">
                                    {t('headerTitle')}
                                    <span className="align-super inline-block w-5 h-5 xl:w-12 xl:h-12">
                                        <Image
                                            src="/images/products/exelona/desktop/trademark.png"
                                            alt="trademark logo"
                                            width={500}
                                            height={500}
                                            className="object-contain mt-1"
                                            priority
                                        />
                                    </span>
                                </span>
                            </h1>
                            <h2 className="xl:font-bold font-semibold leading-tight pb-10 xl:pb-0 text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] mt-5 ">
                                {t('headerSubTitle')}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* second section */}
            <section>
                <div className="grid grid-cols-12 bg-[#134874] custom-container 4xl:pr-0 2xl:pr-0 xl:pr-0">
                    <div className="xl:col-span-7 4xl:col-span-6 col-span-12 mt-10 4xl:pb-20 xl:pb-20 pb-10 4xl:pr-24 xl:pr-0 2xl:pr-0 pr-0">
                        <p className="text-white font-light leading-tight text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">
                            {t('pageDesc')}
                        </p>
                    </div>
                    <div className="xl:col-span-5 4xl:col-span-6 col-span-12 relative ">
                        <div className="absolute bottom-0 right-0 z-10 xl:block hidden">
                            <Image
                                src="/images/products/exelona/desktop/mask.webp"
                                alt="image mask"
                                width={500}
                                height={500}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* your digital section */}
            <section className="relative group overflow-hidden 2xl:pb-0 4xl:pb-0 bg-[#134874]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/products/exelona/desktop/abstract-digital-city-wireframe-architecture.webp"
                        alt={t('digitalAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/products/exelona/mobile/abstract-digital-city-wireframe-architecture-mobile.webp"
                        alt={t('digitalAlt')}
                        fill
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="relative custom-container 4xl:pb-0 text-white">
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 4xl:mt-32 xl:mt-20 mx-auto mt-20">
                        <div className="xl:col-span-12 col-span-12">
                            <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight">{t('yourDigitalTitle')}</h2>
                            <p className="leading-tight mt-[17px] xl:mt-[28px] xl:w-[80%] 2xl:w-full text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">{t('yourDigitalDesc')}</p>
                            <h3 className="4xl:text-[36px] text-[20px] xl:text-[30px] md:text-[20px] mt-[32px] xl:mt-[60px]">{t('yourDigitalSubTitle')}</h3>
                        </div>
                    </div>

                    <div className="xl:mt-[85px] mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[24px] 4xl:gap-[34px] sm:gap-y-[40px] sm:gap-x-[60px] gap-[50px]">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col">
                                <Image
                                    src={feature.img}
                                    alt={feature.alt}
                                    width={100}
                                    height={100}
                                    className="mb-4 w-[100px] h-[100px]"
                                />
                                <h3 className="font-bold 4xl:text-[23px] mt-5 text-[16px] md:text-[18px] leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-200 leading-tight mt-6 lg:mt-8 4xl:w-[90%] min-[400px]:w-[80%] sm:w-full text-[16px] md:text-[18px] 4xl:text-[23px]">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-[62px] xl:mt-[72px]">
                        <LearnMore btnName={t('learnMoreBtn')} locale={locale} bgcolor="#0A6BB8" bordercolor="#0A6BB8" href="/industry/real-estate-property-management/" />
                    </div>
                </div>

            </section>
            {/* asset marketing */}
            <section className="bg-[#134874] pb-[202px] xl:pb-[184px]">
                <div className="grid xl:grid-cols-2 grid-cols-1 custom-container xl:pr-0">
                    {/* Left Content */}
                    <div className="text-white">
                        <h2 className="min-[400px]:w-[80%] sm:w-full text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] font-light leading-tight text-white mt-20">
                            {t('assetMarketingTitle')}
                        </h2>
                        <h3 className="mt-8 4xl:text-[40px] xl:text-[36px] md:text-[26px]  text-[22px] font-semibold text-white">
                            {t('assetMarketingSubTitle')}
                        </h3>
                        <p className="mt-4 text-gray-200 leading-tight 4xl:w-[90%] min-[400px]:w-[90%] sm:w-full text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">
                            {t('assetMarketingDesc')}
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="mt-[34px]">
                        <Image
                            src="/images/products/exelona/desktop/smart-city-residential-complex-tablet.webp"
                            alt={t('assetAlt')}
                            width={0}
                            height={0}
                            className="object-cover h-full w-full xl:pt-[40px]"
                        />
                    </div>
                </div>
                <div className="custom-container text-white mt-[30px] xl:mt-[61px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 4xl:gap-[110px] xl:gap-[80px] gap-[37px] min-[400px]:w-[80%] sm:w-full">
                        {
                            assetMarketingData.map((data, ind) => {
                                return (
                                    <div key={ind}>
                                        <h4 className="font-semibold text-white text-[16px] md:text-[18px] 4xl:text-[22px]">{data.title}</h4>
                                        <UnorderedList arrName={data.list} ulClassName="mt-3 list-outside space-y-5 text-gray-200 list-disc text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] pl-[20px]" liClassName="" />
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Buttons */}
                    <div className="flex mt-[50px] lg:gap-[57px] max-lg:flex-col max-lg:gap-[36px] justify-between">
                        <div>
                            <LearnMore btnName={t('learnMoreBtn')} locale={locale} bgcolor="#0A6BB8" bordercolor="#0A6BB8" hoverTextColor="black" />
                        </div>
                        <div>
                            <p className={`bg-[#0A6BB8] text-white  md:py-[12px] md:px-[32px] py-[14px] px-[20px] md:mt-[23px] min-[400px]:w-[90%] sm:w-fit text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]"
                              ${locale === "es"
                                    ? "4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] text-[18px]"
                                    : locale === "fr"
                                        ? "4xl:text-[17px] 2xl:text-[16px] xl:text-[14px] text-[18px]"
                                        : "4xl:text-[24px] xl:text-[20px] text-[18px]"
                                }`}

                            > {t('assetMarketingBlueBox')}</p>
                        </div>
                    </div>
                </div>

            </section>
            {/* ai enabled section */}
            <section className="relative w-full max-lg:bg-[#C6E7FF]">
                <div className="custom-container mx-auto grid lg:grid-cols-12 gap-0 4xl:px-0 2xl:px-0 lg:px-0 max-lg:!px-0 lg:mt-[-80px] mt-[-20px]">
                    {/* Left Side - Image */}
                    <div className="lg:col-span-4 col-span-12 relative 4xl:my-16 2xl:my-14 lg:my-12 z-[9] 4xl:mr-[-140px] 2xl:m4-[100px] lg:mr-[-80px] mt-[-100px] ">
                        <img
                            src="/images/products/exelona/desktop/futuristic-data-analytics-city.webp"
                            alt={t('aiAlt')}
                            className="w-full h-full object-cover max-lg:px-[35px] md:h-[700px] lg:h-full"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="lg:col-span-8 col-span-12 bg-[#C6E7FF] lg:relative 4xl:pl-[230px] 2xl:px-[140px] lg:pl-[130px] lg:pr-[100px] px-10 lg:pt-[78px] pt-[30px] !pb-0">

                        {/* Text content */}
                        <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] text-[#0A2E4D] leading-tight mb-4">
                            {t('aiEnabledTitle')}
                        </h2>

                        <p className="font-semibold mt-10 4xl:text-[40px] xl:text-[36px] md:text-[26px] text-[22px] text-black mb-2 leading-tight">
                            {t('aiEnabledDesc')}
                        </p>
                        <p className="text-gray-700 mb-6 max-w-2xl mt-6 text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">
                            {t('aiEnabledDesc2')}
                        </p>

                        {/* Features + Outcomes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-[40px] min-[400px]:w-[90%] sm:w-full">
                            {
                                aiEnabledData.map((data, ind) => {
                                    return (
                                        <div key={ind}>
                                            <h3 className="font-semibold text-[#0A6FBF] mb-3 text-[16px] md:text-[18px] 4xl:text-[22px]">{data.title}</h3>
                                            <UnorderedList arrName={data.list} ulClassName="space-y-[19px] xl:space-y-[24px] text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] list-outside list-disc xl:pb-16 2xl:pb-14 4xl:pb-0 pl-[22px]" liClassName="" />
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* Buttons */}
                        <div className="mt-16 xl:mt-0 xl:flex gap-8 xl:gap-10 4xl:mt-[65px] items-end">

                            <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
                            <div>
                                <p className={`bg-[#0A6BB8] mt-10 w-fit xl:mt-[20px] px-6 py-[14px] text-white text-left
                                
                                  ${locale === "es"
                                        ? "4xl:text-[23px] 2xl:text-[18px] xl:text-[14px] text-[18px]"
                                        : locale === "fr"
                                            ? "4xl:text-[20px] 2xl:text-[16px] xl:text-[12px] text-[18px]"
                                            : "4xl:text-[26px] text-[18px] xl:text-[16px]"
                                    }`}

                                >
                                    {t('aiEnabledBlueBox')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* blue background sections */}
            <section className="blue-section text-white bg-[#134874]">
                {/* property section */}
                <section className="lg:pt-[170px] pt-[53px] lg:mt-[-80px] custom-container">
                    <>
                        <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] font-light leading-tight">{t('propertyTitle')}</h2>
                        <h3 className="xl:mt-[36px] mt-[14px] 4xl:text-[40px] xl:text-[36px] md:text-[26px]  text-[22px] font-semibold leading-tight">{t('propertySubTitle')}</h3>
                        <p className="xl:mt-[39px] mt-[16px text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">{t('propertyDesc')}</p>
                    </>
                    <div className="grid lg:grid-cols-2 4xl:gap-[140px] xl:gap-[60px] gap-10 xl:mt-[68px] lg:mt-[30px]">
                        {properties.map((feature, idx) => (
                            <div key={idx} className="flex flex-col space-y-10">
                                <div className="order-first lg:order-none mt-10 lg:mt-0">
                                    <Image
                                        src={feature.img}
                                        alt={feature.alt}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Content */}
                                <div className="4xl:w-[85%]">
                                    <h3 className="font-semibold mb-4 text-white 4xl:text-[28px] text-[18px]">
                                        {feature.title}
                                    </h3>
                                    <UnorderedList arrName={feature.points} ulClassName="list-disc pl-5 space-y-5 mb-4 text-white text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]" liClassName="" />
                                    <h4 className="font-semibold text-white mt-10 text-[16px] md:text-[18px] 4xl:text-[22px]">
                                        {t('outcomeTitle')}
                                    </h4>
                                    <UnorderedList arrName={feature.outcomes} ulClassName="list-disc pl-5 space-y-5 text-white mt-4 4xl:text-[20px] text-[16px] min-[400px]:w-[90%] sm:w-full" liClassName="" />
                                </div>
                            </div>
                        ))}


                    </div>
                    <div className="mt-16 md:flex items-end gap-8 md:gap-10 2xl:gap-10 4xl:mt-24 max-md:pr-[35px]">
                        <>
                            <LearnMore btnName={t('learnMoreBtn')} locale={locale} bgcolor="#073259" bordercolor="#073259" />
                        </>
                        <>
                            <p className="bg-[#0A6BB8] mt-10 xl:mt-0 px-6 py-3 text-white text-left text-[16px] md:text-[18px] 4xl:text-[22px] w-fit">
                                {t('propertyBlueBox')}
                            </p>
                        </>
                    </div>
                </section>
                {/* excel persona section */}
                <section className="grid xl:grid-cols-12 grid-cols-1 xl:px-0 xl:mt-[122px] mt-[72px] px-[36px]">
                    {/* Left Side - Image */}
                    <div className="relative xl:col-span-4 col-span-12">
                        <Image
                            src="/images/products/exelona/desktop/digital-architecture-3d-model.webp"
                            alt={t('excelAlt')}
                            className="object-cover w-full xl:h-full h-[300px] md:h-[500px] md:w-[800px]"
                            priority
                            width={1000}
                            height={1000}
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="4xl:px-16 text-white xl:col-span-8 col-span-12 2xl:px-14 xl:px-14">
                        <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] font-light leading-tight mt-10 xl:mt-0 4xl:mt-0 2xl:mt-0">
                            {t('excelPersonaTitle')}  <span className="align-super inline-block ml-[-6px] md:ml-[-8px] w-4 h-4 xl:w-6 xl:h-6">
                                <Image
                                    src="/images/products/exelona/desktop/trademark.png"
                                    alt="trademark logo"
                                    width={500}
                                    height={500}
                                    className="object-contain mt-[2px]"
                                    priority
                                />
                            </span> – {t('excelPersonaTitle2')}
                        </h2>
                        <h3 className="mt-8 4xl:text-[40px] xl:text-[36px] md:text-[26px]  text-[22px] font-semibold leading-tight 4xl:pr-64 2xl:pr-64 xl:pr-32 min-[400px]:w-[90%] sm:w-full">
                            {t('excelPersonaSubTitle')}
                        </h3>
                        <p className="mt-8 text-base 4xl:pr-[28rem] 2xl:pr-[20rem] xl:pr-[13rem] pr-10 text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">
                            {t('excelPersonaDesc')}
                        </p>

                        {/* Two Column Features + Outcomes */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 2xl:pr-32 md:gap-10 4xl:gap-[60px] 2xl:gap-0 gap-[48px] min-[400px]:w-[90%] sm:w-full">
                            {/* Features */}
                            {
                                excelPersonaData.map((data, ind) => {
                                    return (
                                        <div key={ind}>
                                            <h4 className="text-[16px] md:text-[18px] 4xl:text-[22px] font-semibold mb-3 xl:mb-[32px]">{data.title}</h4>
                                            <UnorderedList arrName={data.list} ulClassName="space-y-5 text-gray-200 list-disc list-outside text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] pl-5 4xl:pr-20 2xl:pr-20" liClassName="" />
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* CTA Button */}
                        <div className="mt-16 lg:flex gap-8 lg:gap-5 2xl:gap-10 4xl:mt-24 items-end">
                            <>
                                <LearnMore btnName={t('learnMoreBtn')} locale={locale} bgcolor="#073259" bordercolor="#073259" />
                            </>
                            <p className={`bg-[#0A6BB8] mt-10 xl:mt-0 px-6 py-3 w-fit text-white text-left  4xl:w-[60%]
                              ${locale === "es"
                                    ? "4xl:text-[22px] 2xl:text-[17px] xl:text-[15px] text-[18px]"
                                    : locale === "fr"
                                        ? "4xl:text-[20px] 2xl:text-[16px] xl:text-[12px] text-[18px]"
                                        : "4xl:text-[26px] text-[18px] xl:text-[16px]"
                                }`}


                            >
                                {t('excelPersonaBlueBox')}
                            </p>
                        </div>
                    </div>
                </section>
                {/* excel pay section */}
                <section className="relative w-full custom-container 4xl:px-0 2xl:px-0 xl:px-0 max-xl:px-0">
                    <div className="grid xl:grid-cols-12 gap-0 mt-20 max-md:px-0">
                        {/* Left Side - Content (desktop first, mobile second) */}
                        <div className="xl:col-span-10 col-span-12 bg-[#B4F0D0] 
                    xl:relative 4xl:pl-[280px] 4xl:pr-[436px]  
                    2xl:pl-[135px] 2xl:pr-[510px] xl:pl-[80px] xl:pr-[435px] 
                    pl-10 order-last xl:order-first mt-[-230px] 4xl:mt-0 2xl:mt-0 xl:mt-0 max-xl:px-[35px]">
                            {/* Text content */}
                            <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] text-[#0A2E4D] leading-tight mb-4 pt-[17rem] xl:pt-14 4xl:pt-20 2xl:pt-16 3xl:w-[90%]">
                                {t('excelPayTitle')}  <span className="align-super inline-block ml-[6px] w-4 h-4 xl:w-6 xl:h-6">
                                    <Image
                                        src="/images/products/exelona/desktop/black-trademark.png"
                                        alt="trademark logo"
                                        width={500}
                                        height={500}
                                        className="object-contain mt-[2px]"
                                        priority
                                    />
                                </span> <br /> {t('excelPayTitle2')}
                            </h2>

                            <p className="font-semibold mt-10 4xl:text-[40px] xl:text-[36px] md:text-[26px]  text-[22px] text-black mb-2 leading-tight 4xl:pr-[12rem] ">
                                {t('excelPayDesc')}
                            </p>
                            <p className="text-gray-700 mb-6 max-w-2xl mt-6 text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">
                                {t('excelPayDesc2')}
                            </p>

                            {/* Features + Outcomes */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[38px] md:gap-[38px]">
                                {
                                    excelPayData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h3 className="font-semibold text-[#000000] mb-3 4xl:mb-[] text-[16px] md:text-[18px] 4xl:text-[22px]">
                                                    {data.title}
                                                </h3>
                                                <UnorderedList arrName={data.list} ulClassName="4xl:space-y-5 space-y-3 xl:space-y-3 text-gray-800 text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] list-disc pl-[20px]" liClassName="" />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* Buttons */}
                            <div className="lg:flex gap-8 xl:gap-5 2xl:gap-10 xl:mt-[65px] mt-[36px] items-end">
                                <div>
                                    <LearnMore btnName={t('learnMoreBtn')} locale={locale} bgcolor="#073259" bordercolor="#073259" />
                                </div>
                                <p className={`bg-[#0A6BB8] w-fit mt-10 xl:mt-0 px-6 py-3 text-white text-left 
                                 ${locale === "es"
                                        ? "4xl:text-[22px] text-[18px] xl:text-[17px]"
                                        : locale === "fr"
                                            ? "4xl:text-[18px] 2xl:text-[17px] xl:text-[12px] text-[18px]"
                                            : "4xl:text-[22px] text-[18px] xl:text-[18px]"
                                    }`}

                                >
                                    {t('excelPayBlueBox')}
                                </p>
                            </div>

                        </div>

                        <div className="xl:col-span-1 4xl:ml-[-445px] 2xl:ml-[-440px] xl:ml-[-395px] col-span-12 relative 4xl:my-16 2xl:my-14 xl:my-12 z-[9] order-first xl:order-last">
                            <Image
                                src="/images/products/exelona/desktop/digital-payment-success.webp"
                                alt={t('paymentAlt')}
                                className="w-full h-full object-cover max-xl:px-[36px] sm:h-[700px] xl:h-full 4xl:h-[740px]"
                                priority
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                </section>
                {/* agent chat section */}
                <section className="custom-container mx-auto grid xl:grid-cols-12 gap-0 items-stretch 4xl:pl-[140px] 2xl:pl-[100px] xl:pl-[80px] 2xl:px-0 xl:px-0 max-xl:px-0 max-xl:bg-[#073259] max-xl:mt-[300px] xl:mt-20">
                    <div className="xl:col-span-3 col-span-12 relative 4xl:mt-16 2xl:mt-14 xl:mt-12 z-[9] 4xl:mr-[-140px] xl:mr-[-80px] mt-[-200px]">
                        <img
                            src="/images/products/exelona/desktop/woman-using-smartphone-happily.webp"
                            alt={t('agentAlt')}
                            className="w-full h-full object-cover max-xl:px-[36px]"
                        />
                    </div>

                    <div className="xl:col-span-9 4xl:mt-0 xl:mt-0 2xl:mt-0 xl:mb-20 col-span-12 bg-[#073259] text-white xl:relative 4xl:pl-[315px] 4xl:ml-[-100px] 4xl:pr-[150px] 2xl:px-[150px] xl:pl-[130px] xl:pr-[100px] px-10">

                        <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight mb-4 pt-[49px] xl:pt-14 4xl:pt-20 2xl:pt-16 min-[400px]:w-[90%] sm:w-full">
                            {t('agentchatTitle')}
                        </h2>

                        <p className="font-semibold mt-10 4xl:text-[40px] xl:text-[36px] md:text-[26px]  text-[22px] mb-2 leading-tight">
                            {t('agentChatDesc')}
                        </p>
                        <p className="mb-6 mt-6 leading-tight 4xl:pr-64 2xl:pr-64 xl:pr-32 text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">
                            {t('agentChatDesc2')}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-0 xl:mt-[62px]">
                            {
                                agentChatData.map((data, ind) => {
                                    return (
                                        <div key={ind}>
                                            <h3 className="font-bold mb-3 text-[16px] md:text-[18px] 4xl:text-[22px]">{data.title}</h3>
                                            <UnorderedList arrName={data.list} ulClassName="4xl:space-y-5 space-y-3 xl:space-y-3 text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] list-outside list-disc xl:pb-16 2xl:pb-14 4xl:pb-0 pr-10 4xl:pl-[20px] 2xl:pl-[20px] xl:pl-[20px] pl-[15px]" liClassName="" />
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* Buttons */}
                        <div className="mt-16 xl:mt-0 md:flex gap-8 md:gap-5 2xl:gap-10 4xl:mt-[65px] items-end">
                            <>
                                <LearnMore btnName={t('learnMoreBtn')} locale={locale} bgcolor="#134874" bordercolor="#134874" />
                            </>
                            <div>
                                <p className={`bg-[#0A6BB8] mt-10 xl:mt-0 px-6 py-[13px] text-white text-left  w-fit
                                
                                        ${locale === "es"
                                        ? "4xl:text-[22px] 2xl:text-[17px] xl:text-[14px] text-[18px]"
                                        : locale === "fr"
                                            ? "4xl:text-[20px] 2xl:text-[16px] xl:text-[13px] text-[18px]"
                                            : "4xl:text-[26px] text-[18px] xl:text-[16px]"
                                    }`}

                                >
                                    {t('agentChatBlueBox')}
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
                {/* built on scale section */}
                <section className="custom-container mt-20 xl:pb-[120px] pb-[90px]">
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 xl:gap-10 4xl:gap-[80px]">
                        <div className="xl:col-span-7 col-span-12">
                            <h2 className="text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight text-white font-light">
                                {t('builtTitle')}
                            </h2>
                        </div>

                        <div className="xl:col-span-5 col-span-12 max-lg:mt-[23px]">
                            <p className="text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] leading-relaxed text-gray-200 4xl:w-[86%]">
                                {t('builtDesc')}
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 text-[#000000] md:w-[80%] xl:w-full">
                        {
                            builtData.map((data, ind) => {
                                return (
                                    <div className="bg-white py-[30px] px-[27px] xl:py-[46px] xl:px-[40px]" key={ind}>
                                        <p className="leading-tight text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">{data}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </section>

            {/* built on salesforce section */}
            <section className="relative">
                <div className="lg:block hidden">
                    <Image
                        src="/images/products/exelona/desktop/cloud-data-digital-network.webp"
                        alt={t('builtAlt')}
                        fill
                        priority
                    />
                </div>

                <div className="lg:hidden block">
                    <Image
                        src="/images/products/exelona/mobile/cloud-data-digital-network-mobile.webp"
                        alt={t('builtAlt')}
                        fill
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="custom-container relative max-lg:px-0">
                    <div className="relative 4xl:w-[68%] xl:w-[62%] lg:w-[72%] pb-[240px] md:pb-[180px] lg:pb-[123px]">
                        {/* Overlay only on this block */}
                        <div className="absolute inset-0 bg-[#068EDA] mix-blend-multiply"></div>
                        <div className="relative pt-[63px] xl:pt-[80px] text-white xl:px-[81px] px-[36px] md:w-[90%] lg:w-full">
                            <h2 className="font-light text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px]">
                                {t('salesforceTitle')}
                            </h2>
                            <h3 className="font-semibold 4xl:text-[40px] xl:text-[36px] md:text-[26px]  text-[22px] xl:mt-[24px] mt-[22px]">
                                {t('salesforceSubTitle')}
                            </h3>
                            <p className="font-light text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] xl:mt-[33px] mt-[22px]">
                                {t('headerTitle')}  Exelona<span className="align-super inline-block ml-[1px] w-3 h-3 xl:w-4 xl:h-4">
                                    <Image
                                        src="/images/products/exelona/desktop/trademark.png"
                                        alt="trademark logo"
                                        width={500}
                                        height={500}
                                        className="object-contain md:mt-[5px]"
                                        priority
                                    />
                                </span>
                                {t('salesforceDesc')}
                            </p>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[29px] lg:gap-[40px]">
                                {
                                    buildSalesforceData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <p className="font-bold text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px] xl:mt-[33px] mt-[22px]">
                                                    {data.title}
                                                </p>
                                                <ul className="list-disc pl-6 xl:mt-[19px] mt-[12px] space-y-[19px]">
                                                    {data.list.map((elem, id) => (
                                                        <li key={id} className="mb-2">
                                                            {elem.title && (
                                                                <p className="font-bold text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">
                                                                    {elem.title}
                                                                </p>
                                                            )}
                                                            <p className="font-light text-[16px] md:text-[18px] xl:text-[16px] 4xl:text-[20px]">
                                                                {elem.desc}
                                                            </p>
                                                        </li>
                                                    ))}
                                                </ul>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="md:flex items-end gap-8 md:gap-10 2xl:gap-10 bottom-0 max-lg:mx-[36px] lg:right-0 absolute ">
                            <>
                                <LearnMore btnName={t('learnMoreBtn')} locale={locale} bgcolor="#073259" bordercolor="#073259" />
                            </>
                            <>
                                <p className="bg-[#0A6BB8] mt-10 xl:mt-0 px-6 py-3 text-white text-left 4xl:text-[26px] text-[18px] xl:text-[16px] min-[400px]:w-[96%] sm:w-fit">
                                    {t('salesforceBlueBox')}
                                </p>
                            </>
                        </div>
                    </div>
                </div>
            </section>

            <section className="custom-container text-white bg-[#134874] py-16 max-md:mt-0">
                <ContactForm title={t('contactUs')} subtitle={t('subTitle')} className={"leading-tight text-[26px] md:text-[30px] xl:text-[40px] 4xl:text-[60px]"} beginBtnBg="#006FBE" />

                <h3 className="font-semibold 4xl:text-[40px] xl:text-[26px] text-[18px] xl:mt-[91px] mt-[62px]">
                    {t('trustedTitle')}
                </h3>
            </section>
        </div>
    );
}