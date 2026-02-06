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
import BreadCrumbs from '@/app/[locale]/components/BreadCrumbs'
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export default function retailPage() {
    const t = useTranslations('retailIndustry')
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { newRealityData, chooseRialtesData, fashionRetailData, loyaltyData, frictionlessData, rightData, aiPoweredRetailData,
        fastData, proprietaryData, aiPoweredCustomerData, actionableData, hyperPersonalizationData, realTimeData, schemaData } = content.retailIndustry

    return (
        <section className="min-h-screen">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                canonical={`https://www.rialtes.com/${locale}/industry/retail-industry-digital-transformation`}
            />
            <Script
                id="schema-retail"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* breadcrumbs schema */}
            <BreadcrumbSchema />
            {/* herosection */}
            <section className="relative group overflow-hidden h-[350px] md:h-[500px]  4xl:h-[650px]  ">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/industry/retail-industry/retail-industry-digital-shopping-innovation.webp"
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
                        src="/images/industry/retail-industry/mobile/retail-industry-digital-shopping-innovation-mobile.webp"
                        alt={t("bannerAlt")}
                        fill
                        style={{ objectFit: "cover", objectPosition: "5% 20%" }}
                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center">
                    <div className="grid xl:grid-cols-12">
                        <div className="xl:col-span-6 ">
                            <h3 className="text-[#FFFFFF] text-[18px] md:text-[24px]  font-bold lg:w-full">
                                {t('headerTitle')}
                            </h3>
                            <h1 className="text-[#FFFFFF] md:pr-52  xl:pr-0 text-[26px] leading-tight md:text-[30px] lg:text-[40px]  4xl:text-[60px]  xl:text-[40px]  mt-[11.5px] md:mt-[28.5px] max-[350px]:text-[22px]">
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
                <h2 className="4xl:text-[60px]  xl:text-[40px] md:text-[30px] 2xl:w-[88%] lg:text-[40px] xl:w-[80%] lg:w-[79%]  text-[26px] leading-tight font-light max-[390px]:text-[24px]  ">
                    {t('pageDescTitle')}
                </h2>
                <p className="4xl:text-[22px] xl:text-[18px] md:text-[18px]   text-[16px] leading-[19px] xl:leading-[30px] lg:leading-[25px] xl:mt-[34px] mt-[23px] lg:w-[68%] max-md:w-[94%]">
                    {t('pageDesc1')}
                    <br /><br />
                    {t('pageDesc2')}
                </p>
            </section>
            {/* retails new reality */}
            <section className="custom-container xl:mt-[96px] mt-[59px] md:mt-[70px] max-md:px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] gap-y-[41px]">
                    <div className="md:col-span-6 col-span-12 md:order-1 order-2 max-md:px-[36px]">
                        <h2 className="4xl:text-[60px] xl:text-[40px] lg:text-[40px] md:text-[30px] text-[26px] leading-tight">
                            {t('retailsTitle')}
                        </h2>
                        <h3 className="4xl:text-[36px] xl:text-[30px] md:text-[26px] text-[22px] font-semibold md:mt-[24px] mt-[23px] leading-tight   lg:w-[465px] 4xl:w-[585px] 2xl:w-[550px] xl:w-[500px] ">
                            {t('retailsSubTitle')}
                        </h3>
                        <ul className="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[34px] mt-[23px] pl-[20px] md:pb-[49px]">
                            {newRealityData.map((data, ind) => (
                                <li className="text-[16px] 4xl:text-[22px] xl:text-[18px] md:text-[18px] leading-tight font-normal" key={ind}>
                                    <span className="font-bold">{data.title} </span>{data.subtitle}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-6 col-span-12 md:order-2 order-1">
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/mobile/retail-employee-inventory-management-tablet-mobile.webp"
                                alt={t("newRealitySectionAlt")}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/retail-employee-inventory-management-tablet.webp"
                                alt={t("newRealitySectionAlt")}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                                style={{ objectPosition: '80% 20%' }}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-[#163055] md:w-[90%] 2xl:w-[80%] max-md:mx-[36px] text-[#ffffff] max-md:mt-[35px]">
                    <p className="4xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[20px] text-[18px] leading-tight py-[24px] px-[24px] lg:pl-[31px] font-light">
                        {t('retailsBlueBox')}
                    </p>
                </div>
                <div className="lg:mt-[50px] mt-[36px] max-md:mx-[36px]">
                    <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" btnName={t('learnMoreBtn')} locale={locale} />
                </div>
            </section>
            {/* why choose rialtes section */}
            <section className="xl:mt-[63px] mt-[60px] bg-[#EFEFEF] md:relative">
                <div className="custom-container xl:pt-[82px] pt-[52px]">
                    <h2 className="4xl:text-[60px] xl:text-[40px] lg:text-[40px] md:text-[30px] text-[26px] leading-tight font-light">
                        {t('whyChooseTitle')}
                    </h2>
                    <h2 className="4xl:text-[36px] xl:text-[30px] md:text-[26px] text-[22px] leading-tight font-semibold mt-[23px] xl:mt-[34px]">
                        {t('whyChooseSubTitle')}
                    </h2>
                    <p className="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px]  leading-tight xl:mt-[37px] mt-[23px]">
                        {t('whyChooseDesc')}
                    </p>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:mt-[87px] mt-[61px] sm:gap-[60px] gap-y-[40px] max-sm:w-[84%] 4xl:w-[83%] 2xl:w-[82%] xl:w-[84%] lg:w-[85%]">
                        {
                            chooseRialtesData.map((data, ind) => {
                                return (
                                    <div key={ind}>
                                        <Image
                                            src={data.imgUrl}
                                            alt={`${data.alt}`}
                                            className="lg:w-[138px] lg:h-[138px] w-[100px] h-[100px] object-cover"
                                            width={0}
                                            height={0}
                                            priority
                                        />
                                        <p className="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px]  leading-tight font-bold mt-[34px]">
                                            {data.desc}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="md:absolute bottom-[-50px] md:ml-[80px] md:mr-[-60px]">
                        <div className="bg-[#163055] md:w-[70%] lg:w-[60%] xl:w-[70%] 2xl:w-[60%] text-[#ffffff] max-md:mt-[60px] mx-auto">
                            <p className=" 4xl:text-[24px] xl:text-[20px] md:text-[20px] text-[18px]  leading-tight py-[24px] px-[28px] md:px-[24px] lg:pl-[31px] font-light">
                                {t('whyChooseBlueBox')}</p>
                        </div>
                    </div>
                    <div className="xl:mt-[78px] mt-[54px]">
                        <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
                    </div>
                </div>
            </section>
            {/* fashion retail section */}
            <section className="xl:mt-[81px] mt-[93px] text-[#ffffff] md:pt-[63px]">
                <div className="relative">
                    <>
                        <div className="custom-container max-lg:px-0">
                            <div className="lg:pt-[63px] pb-[130px] lg:pb-[43px] xl:pb-[63px] bg-[#4DADC7] relative max-lg:px-[36px]">
                                <div className="hidden lg:block absolute top-0 2xl:left-[-120px] lg:left-[-50px] h-full bg-[#4DADC7] z-0 2xl:w-[120px] lg:w-[50px]" />
                                <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[41px]">
                                    <div className="lg:col-span-6 col-span-12 lg:order-1 order-2 relative">
                                        <div className="lg:pr-[20px]">
                                            <h2 className="4xl:text-[60px] xl:text-[40px]  md:text-[30px]  text-[26px] leading-tight max-[400px]:text-[22px]">
                                                {t('fashionTitle')}
                                            </h2>
                                            <div className="lg:pr-[70px]">
                                                <p className="text-[16px] 4xl:text-[22px]  xl:text-[18px] md:text-[18px]  leading-tight font-normal xl:mt-[36px] mt-[15px] max-[400px]:text-[16px]">
                                                    {t('fashionDesc')}
                                                </p>
                                                <UnorderedList arrName={fashionRetailData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[44px] mt-[21px] pl-[20px] lg:pb-[49px]" liClassName="text-[16px] md:text-[18px] 4xl:text-[22px] xl:text-[18px] max-[400px]:text-[16px] leading-tight font-normal" />
                                            </div>
                                        </div>
                                        <div className={`
                                          ${locale === "es"
                                                ? "absolute bottom-[-185px] 2xl:bottom-[-130px] 4xl:bottom-[-136px] xl:bottom-[-121px] md:bottom-[-130px] [@media(max-width:320px)]:bottom-[-204px]"
                                                : locale === "fr"
                                                    ? "absolute bottom-[-195px] 2xl:bottom-[-96px] 4xl:bottom-[-135px] xl:bottom-[-121px] md:bottom-[-130px] [@media(max-width:320px)]:bottom-[-204px]"
                                                    : "absolute bottom-[-170px] 2xl:bottom-[-96px] 4xl:bottom-[-107px] xl:bottom-[-96px] md:bottom-[-130px]"
                                            }`}

                                        >
                                            <div className="bg-[#163055] text-[#ffffff] max-lg:mt-[35px]">
                                                <p className="4xl:text-[24px]  xl:text-[20px] md:text-[20px] text-[18px]  leading-tight  py-[24px] px-[24px] lg:pl-[31px] font-light">
                                                    {t('fashionBlueBox')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-6 col-span-12 lg:order-2 order-1">
                                        {/* Mobile image */}
                                        <div className="block md:hidden w-full h-full">
                                            <Image
                                                src="/images/industry/retail-industry/mobile/professional-interactive-touchscreen-display-technology-mobile.webp"
                                                alt={t("fashionRetailAlt")}
                                                className="w-full h-full object-cover"
                                                width={0}
                                                height={0}
                                                priority
                                            />
                                        </div>
                                        {/* Desktop image */}
                                        <div className="hidden md:block w-full h-full">
                                            <Image
                                                src="/images/industry/retail-industry/professional-interactive-touchscreen-display-technology.webp"
                                                alt={t("fashionRetailAlt")}
                                                className="w-full h-full object-cover"
                                                width={0}
                                                height={0}
                                                priority
                                                style={{ objectPosition: '30% 20%' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </section>
            {/* salesforce marketing section  */}
            <section className="custom-container xl:mt-[158px] md:mt-[100px] mt-[88px] lg:pl-0 max-lg:px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-y-[36px] md:gap-[40px] xl:gap-[50px] 2xl:gap-[80px] relative">
                    <div className="md:col-span-6 col-span-12">
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/mobile/person-browsing-ecommerce-products-tablet-mobile.webp"
                                alt={t("salesforceMarketingAlt")}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/person-browsing-ecommerce-products-tablet.webp"
                                alt={t("salesforceMarketingAlt")}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                style={{ objectPosition: '40% 20%' }}
                                priority
                            />
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12 max-md:px-[36px] md:pr-[36px]">
                        <h2 className="4xl:text-[60px] xl:text-[40px]  md:text-[30px] text-[26px] leading-tight">
                            {t('salesforceTitle')}
                        </h2>
                        <h3 className="4xl:text-[36px] xl:text-[30px] md:text-[26px]  text-[22px] font-semibold md:mt-[31px] mt-[22px] leading-tight w-[92%] max-[400px]:text-[18px] lg:w-[80%] 4xl:[97%] 2xl:w-[90%] xl:w-[90%]">
                            {t('salesforceSubTitle')}
                        </h3>
                        <div className="lg:pr-[120px]">
                            <p className="text-[16px] 4xl:text-[22px] xl:text-[18px] md:text-[18px] leading-tight font-normal xl:mt-[31px] mt-[22px]">
                                {t('salesforceDesc')}
                            </p>
                            <UnorderedList arrName={hyperPersonalizationData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[25px] mt-[18px] pl-[30px] mb-[166px] sm:mb-[136px] md:mb-[106px]" liClassName="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px] leading-tight font-normal" />
                        </div>
                    </div>
                    <div className="absolute bottom-[-35px] right-0">
                        <div className="bg-[#163055] text-[#ffffff] max-lg:mt-[35px] max-md:mx-[36px] md:mr-[36px] lg:mr-auto xl:mr-[100px]">
                            <p className="4xl:text-[24px] md:text-[20px] xl:text-[20px] text-[18px]   leading-tight py-[24px] px-[24px] lg:pl-[31px] font-light">
                                {t('salesforceBlueBox')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*real time section */}
            <section className="lg:mt-[84px] mt-[62px] md:mt-[72px] relative">
                {/* Background Image */}
                <div className={`w-full h-auto hidden  lg:h-[710px] xl:h-[1000px] 2xl:h-[1080px] 3xl:h-[1036px] 4xl:h-[1136px]
                  ${locale === "es"
                        ? "md:block md:h-[820px] "
                        : locale === "fr"
                            ? "md:block md:h-[860px]"
                            : "md:block md:h-[760px]"
                    }`}


                >
                    <Image
                        src="/images/industry/retail-industry/warehouse-workers-inventory-management-system.webp"
                        alt={t("realTimeAlt")}
                        className="w-full h-full object-cover"
                        width={0}
                        height={0}
                        style={{ objectPosition: "90% 20%" }}
                        priority
                    />
                </div>
                <div className="w-full h-auto block md:hidden">
                    <Image
                        src="/images/industry/retail-industry/mobile/warehouse-workers-inventory-management-system-mobile.webp"
                        alt={t("realTimeAlt")}
                        className="w-full h-full object-cover"
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                <div className="relative md:absolute md:inset-0 md:flex md:items-stretch max-md:mt-[-170px]"


                >
                    <div className="custom-container md:h-full">
                        <div className="bg-[rgba(0,111,190,0.85)] h-full w-full md:w-[52%] xl:w-[55%] 2xl:w-[54%] 3xl:w-[54%] text-white flex flex-col xl:pt-[68px] xl:px-[77px] md:pt-[50px] pt-[25px] px-[33px]">
                            <div>
                                <h2 className="4xl:text-[60px] xl:text-[40px]  md:text-[30px] text-[26px] leading-tight max-[400px]:text-[22px] ">
                                    {t('realTimeTitle')}
                                </h2>
                                <h3 className="4xl:text-[36px] xl:text-[30px] md:text-[26px] text-[22px] font-semibold mt-[22px] md:mt-[29px] leading-tight max-[400px]:text-[20px]">
                                    {t('realTimeSubTitle')}
                                </h3>
                                <p className="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px] font-normal mt-[22px] md:mt-[29px] leading-tight">
                                    {t('realTimeDesc')}
                                </p>
                                <UnorderedList arrName={realTimeData} ulClassName="list-disc mt-[18px] md:mt-[16px] pl-[20px] xl:space-y-[27px] space-y-[19px] lg:pr-[35px]" liClassName="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px] leading-tight font-normal" />
                            </div>
                            <div className={`mt-auto"
                              ${locale === "es"
                                    ? "pt-[27px]"
                                    : locale === "fr"
                                        ? "pt-[40px]"
                                        : "4xl:pt-[125px] 2xl:pt-[105px] xl:pt-[150px] pt-[25px] "
                                }`}

                            >
                                <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* loyalty program section */}
            <section className="custom-container xl:mt-[86px] mt-[61px]">
                <div className="grid md:grid-cols-12 grid-cols-1">
                    <div className="md:col-span-5 col-span-12">
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/mobile/loyalty-program-rewards-icons-display-mobile.webp"
                                alt={t("loyaltySectionAlt")}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/loyalty-program-rewards-icons-display.webp"
                                alt={t("loyaltySectionAlt")}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                style={{ objectPosition: '50% 20%' }}
                                priority
                            />
                        </div>
                    </div>
                    <div className="md:col-span-7 col-span-12 max-md:px-[36px] bg-[#EFEFEF]">
                        <div className={`md:mx-[40px] md:pt-[64px] md:pb-[56px] pb-[31px] pt-[34px]
                          ${locale === "es"
                                ? "4xl:pr-[15px] 2xl:pr-0 xl:pr-[65px]"
                                : locale === "fr"
                                    ? "4xl:pr-[15px] 2xl:pr-0 xl:pr-[65px]"
                                    : "4xl:pr-[170px] 2xl:pr-[130px] xl:pr-[120px]"
                            }`}




                        >
                            <h2 className="4xl:text-[60px] xl:text-[40px]  md:text-[30px] text-[26px]  leading-tight max-[400px]:text-[24px]">
                                {t('loyaltyTitle')}
                            </h2>
                            <h3 className="4xl:text-[36px]  xl:text-[30px] md:text-[26px] text-[22px]  font-semibold md:mt-[34px] mt-[22px] leading-tight w-[92%] lg:w-[80%] xl:w-full max-[400px]:text-[18px]">
                                {t('loyaltySubTitle')}
                            </h3>
                            <p className="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px]  leading-tight font-normal xl:mt-[31px] mt-[18px]">
                                {t('loyaltyDesc')}
                            </p>
                            <UnorderedList arrName={loyaltyData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[34px] mt-[23px] pl-[20px] md:pb-[49px]" liClassName="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px] leading-tight font-normal" />
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1">
                    <div className="md:col-span-5 col-span-12"></div>
                    <div className="md:col-span-7 col-span-12">
                        <div className="bg-[#163055] text-[#ffffff]">
                            <p className="4xl:text-[26px] xl:text-[20px]  md:text-[20px] text-[18px] leading-tight py-[24px] px-[20px] lg:pl-[31px] font-light max-[400px]:text-[16px]">
                                {t('loyaltyBlueBox')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* frictionless backend section */}
            <section className="custom-container xl:mt-[96px] mt-[59px] max-md:px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] gap-y-[41px]">
                    <div className="md:col-span-6 col-span-12 md:order-1 order-2 max-md:px-[36px]">
                        <h2 className="4xl:text-[60px] xl:text-[40px]  md:text-[30px] text-[26px] leading-tight max-[350px]:text-[20px]">
                            {t('frictionalTitle')}
                        </h2>
                        <h3 className="4xl:text-[36px] xl:text-[30px] md:text-[26px] text-[18px]  font-semibold md:mt-[35px] mt-[24px] leading-tight max-[350px]:text-[16px]  w-full">
                            {t('frictionalSubTitle')}
                        </h3>
                        <p className="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px]  leading-tight font-normal xl:mt-[31px] mt-[24px] max-[350px]:text-[16px]">
                            {t('frictionalDesc')}
                        </p>
                        <UnorderedList arrName={frictionlessData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[34px] mt-[23px] pl-[20px] md:pb-[49px]" liClassName="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px] leading-tight font-normal max-[350px]:text-[16px]" />
                        <div className="bg-[#163055] text-[#ffffff] md:mt-[39px] mt-[35px]">
                            <p className="4xl:text-[24px] md:text-[20px] xl:text-[20px]  text-[18px] leading-tight py-[24px] px-[24px] lg:pl-[31px] font-light">
                                {t('frictionalBlueBox')}
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12 md:order-2 order-1">
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/mobile/interactive-business-analytics-dashboard-interface-mobile.webp"
                                alt={t("frictionlessSectionAlt")}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/interactive-business-analytics-dashboard-interface.webp"
                                alt={t("frictionlessSectionAlt")}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                style={{ objectPosition: '80% 20%' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* actionable section */}
            <section className="custom-container xl:mt-[67px] mt-[51px] max-md:px-0 relative">
                {/* Mobile image */}
                <div className="block md:hidden w-full h-full">
                    <Image
                        src="/images/industry/retail-industry/mobile/data-cloud-analytics-visualization-interface-mobile.webp"
                        alt={t("actionableSectionAlt")}
                        className="w-full h-full object-cover"
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                {/* Desktop image */}
                <div className="hidden md:block w-full h-full">
                    <Image
                        src="/images/industry/retail-industry/data-cloud-analytics-visualization-interface.webp"
                        alt={t("actionableSectionAlt")}
                        className="w-full h-full object-cover"
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                <div className="relative">
                    <div className="md:mt-[-16%] mt-[-30%]">
                        <div className="bg-[#FFC143] xl:pt-[48px] pt-[34px] xl:pl-[67px] xl:pr-[40px] max-md:mx-[36px] px-[35px] text-[#000000] lg:w-[95%] md:w-[90%]">
                            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[25px]">
                                <div className="flex flex-col h-full">
                                    <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] leading-tight max-[400px]:text-[22px] font-light">
                                        {t('actionableTitle')}
                                    </h2>
                                    <p className="4xl:text-[36px] xl:text-[30px] md:text-[26px] text-[22px] leading-tight xl:mt-[31px] mt-[23px]">
                                        {t('actionableSubTitle')}
                                    </p>
                                    <div className="mt-auto max-lg:hidden">
                                        <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
                                    </div>
                                </div>
                                <div>
                                    <p className="4xl:text-[30px] xl:text-[26px] md:text-[20px] lg:text-[20px] text-[18px] font-semibold leading-tight lg:mt-0 mt-[23px] max-[400px]:text-[16px]">
                                        {t('actionableDesc')}
                                    </p>
                                    <p className="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px] leading-tight lg:mt-[27px] mt-[23px]">
                                        {t('actionableDesc2')}
                                    </p>
                                    <div className="lg:pr-[75px]">
                                        <UnorderedList arrName={actionableData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[34px] mt-[27px] pl-[20px] pb-[48px] md:pb-[52px]" liClassName="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px] leading-tight font-normal" />
                                    </div>
                                    <div className="mt-auto block lg:hidden">
                                        <LearnMore btnName={t('learnMoreBtn')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* making right section */}
            <section className="custom-container xl:mt-[71px] mt-[51px] lg:pr-0 max-md:px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] 2xl:gap-[80px] gap-y-[41px]">
                    <div className="md:col-span-5 col-span-12 md:order-1 order-2 max-md:px-[36px]">
                        <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] leading-tight max-[400px]:text-[22px]">
                            {t('makingTitle')}
                        </h2>
                        <h3 className="4xl:text-[36px] xl:text-[30px] md:text-[26px] text-[20px] leading-tight font-semibold md:mt-[31px] mt-[23px]  w-full lg:w-[80%] xl:w-full">
                            {t('makingSubTitle')}
                        </h3>
                        <p className="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px]  font-normal xl:mt-[41px] mt-[23px]">
                            {t('makingDesc')}
                        </p>
                        <UnorderedList arrName={rightData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[24px] mt-[23px] pl-[20px] xl:w-[80%]" liClassName="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px] leading-tight font-normal" />
                    </div>
                    <div className="md:col-span-7 col-span-12 md:order-2 order-1">
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/mobile/retail-store-manager-employee-tablet-consultation-mobile.webp"
                                alt={t("rightSectionAlt")}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/retail-store-manager-employee-tablet-consultation.webp"
                                alt={t("rightSectionAlt")}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                style={{ objectPosition: '30% 20%' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* ai powered retail section */}
            <section className="custom-container xl:mt-[123px] mt-[65px] lg:pl-0 max-lg:px-0 bg-[#B2D6D9]">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] xl:gap-[50px] 2xl:gap-[80px]">
                    <div className="md:col-span-6 col-span-12">
                        {/* Mobile image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/mobile/retail-staff-mobile-payment-technology-checkout-mobile.webp"
                                alt={t("aiPoweredAlt")}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/industry/retail-industry/retail-staff-mobile-payment-technology-checkout.webp"
                                alt={t("aiPoweredAlt")}
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                style={{ objectPosition: '40% 20%' }}
                                priority
                            />
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12 max-md:px-[36px] md:pr-[36px] lg:pr-auto lg:pt-[60] pt-[41px]">
                        <h2 className="4xl:text-[60px] xl:text-[40px] md:text-[30px] text-[26px] leading-tight max-[400px]:text-[22px]">
                            {t('aiPoweredTitle')}
                        </h2>
                        <h3 className="4xl:text-[36px] xl:text-[30px] md:text-[26px] text-[20px] leading-tight font-semibold md:mt-[39px] mt-[23px]  w-[92%] lg:w-[80%] xl:w-full max-[350px]:text-[18px]">
                            {t('aiPoweredSubTitle')}
                        </h3>
                        <div className="max-md:pr-[20px]">
                            <p className="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px] leading-tight font-normal xl:mt-[41px] mt-[23px]">
                                {t('aiPoweredDesc')}
                            </p>
                            <UnorderedList arrName={aiPoweredRetailData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[24px] mt-[23px] pl-[20px] xl:w-[95%]" liClassName="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px] leading-tight font-normal" />
                        </div>
                        <p className="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px] leading-tight font-normal xl:mt-[31px] mt-[44px] xl:w-[84%]">
                            {t('aiPoweredDesc2')}
                        </p>
                        <div className="xl:mt-[74px] mt-[31px]">
                            <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
                        </div>
                    </div>
                </div>
            </section>
            {/* fast flexible section */}
            <section className="custom-container xl:mt-[74px] mt-[53px] lg:pl-0 max-lg:px-0 bg-[#EAC84C]">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] xl:gap-[20px] 2xl:gap-[80px]">
                    <div className="2xl:col-span-7 md:col-span-6 col-span-12">
                        {/* Mobile Background */}
                        <div
                            className="block md:hidden w-full bg-cover h-[365px] sm:h-[630px]"
                            style={{ backgroundImage: "url('/images/industry/retail-industry/mobile/delivery-person-24-hour-fast-shipping-service-mobile.webp')" }}
                        />
                        {/* Desktop Background */}
                        <div className="hidden md:block w-full h-full bg-cover" style={{ backgroundImage: "url('/images/industry/retail-industry/delivery-person-24-hour-fast-shipping-service.webp')", backgroundPosition: "8% 20%" }} />
                    </div>


                    <div className="2xl:col-span-5 md:col-span-6 col-span-12 max-md:px-[36px] md:pr-[36px] lg:pr-auto xl:pt-[72px] md:pt-[35px] pt-[30px] lg:pb-[97px] pb-[83px]">
                        <h2 className="4xl:text-[60px] xl:text-[40px]  md:text-[30px] text-[26px] leading-tight max-[400px]:text-[22px]">
                            {t('fastTitle')}
                        </h2>
                        <h3 className="4xl:text-[36px] xl:text-[30px] md:text-[26px] text-[20px] leading-tight font-semibold md:mt-[39px] mt-[23px]   lg:w-[80%] xl:w-[90%] max-[400px]:text-[18px]">
                            {t('fastSubTitle')}
                        </h3>
                        <p className="4xl:text-[30px] xl:text-[24px] md:text-[20px] text-[18px] leading-tight font-semibold xl:mt-[41px] mt-[24px]  max-[400px]:text-[16px]">
                            {t('fastDesc')}
                        </p>
                        <UnorderedList arrName={fastData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[34px] mt-[31px] pl-[20px] lg:pr-[70px]" liClassName="text-[16px] 4xl:text-[22px]  xl:text-[18px] md:text-[18px] leading-tight font-normal" />
                        <div className="absolute">
                            <div className="bg-[#163055] text-[#ffffff] mr-[25px] lg:mt-[62px] mt-[35px] max-sm:w-[84%] ">
                                <p className="4xl:text-[24px]  xl:text-[20px] md:text-[20px]  text-[20px] leading-tight xl:py-[24px] xl:px-[44px] py-[23px] px-[32px] lg:pl-[31px] font-light max-[400px]:text-[18px]">
                                    {t('fastBlueBox')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* proprietary section */}
            <section className="bg-[url('/images/industry/retail-industry/mobile/rialtes-accelerators-retail-technology-solutions-mobile.webp')]
                           md:bg-[url('/images/industry/retail-industry/rialtes-accelerators-retail-technology-solutions.webp')]
                           bg-cover bg-no-repeat bg-center xl:pt-[99px] pt-[42px] pb-[71px] xl:pb-[82px] lg:mt-[94px] mt-[89px] text-[#FFFFFF]">
                <div className="custom-container">
                    <h2 className="4xl:text-[60px] xl:text-[40px]  md:text-[30px] text-[26px] leading-tight max-[400px]:text-[22px] ">
                        {t('proprietaryTitle')}
                    </h2>
                    <h3 className="4xl:text-[36px] xl:text-[30px]  md:text-[26px] text-[20px]  font-semibold xl:mt-[32px] mt-[23px] leading-tight">
                        {t('proprietarySubTitle')}
                    </h3>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:mt-[45px] mt-[23px] md:gap-[40px] gap-y-[20px] w-full ">
                        {
                            proprietaryData.map((data, ind) => {
                                return (
                                    <div key={ind} className="card bg-[#ffffff] xl:py-[55px] py-[34px] 2xl:px-[60px] px-[28px] xl:px-[50px]">
                                        <p className="4xl:text-[26px] xl:text-[20px]  text-[20px]  text-[#0A6BB8] leading-tight font-semibold">{data.title}</p>
                                        <p className="4xl:text-[22px]  xl:text-[18px] md:text-[18px] text-[16px] leading-tight xl:mt-[32px] mt-[23px] text-[#000000]">{data.desc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p className="text-[16px] 4xl:text-[22px] md:text-[18px] xl:text-[18px]  leading-tight xl:mt-[92px] mt-[31px]">
                        {t('proprietaryDesc')}
                    </p>
                </div>
            </section>
            {/* ai powered customer section */}
            <section className="custom-container xl:mt-[124px] mt-[58px] max-md:pr-0">
                <h2 className="4xl:text-[60px] xl:text-[40px]  md:text-[30px] text-[26px] leading-tight max-[400px]:text-[22px]  2xl:w-[80%] xl:w-[78%] max-md:pr-[36px]">
                    {t('aiCustomerTitle')}
                </h2>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[20px] gap-y-[94px] md:mt-[106px] xl:mt-[126px] mt-[94px]">
                    {
                        aiPoweredCustomerData.map((data, ind) => {
                            return (
                                <div key={ind} className="card bg-[#EDEDED] lg:pb-[52px] py-[34px] lg:px-[58px] px-[28px] relative">
                                    {/* Mobile image */}
                                    <div className="block md:hidden w-[calc(100%-60px)] h-[360px] absolute top-[-50px] left-0">
                                        <Image
                                            src={data.mobImgUrl}
                                            alt={`${data.alt}`}
                                            className="w-full h-full object-cover"
                                            width={0}
                                            height={0}
                                            style={{ objectPosition: "64% 20%" }}
                                            priority
                                        />
                                    </div>
                                    {/* Desktop image */}
                                    <div className="hidden md:block md:w-[calc(100%-60px)] lg:h-[420px] md:h-[360px] absolute top-[-50px] left-0">
                                        <Image
                                            src={data.deskImgUrl}
                                            alt={`${data.alt}`}
                                            className="w-full h-full object-cover"
                                            width={0}
                                            height={0}
                                            style={{ objectPosition: "60% 20%" }}
                                            priority
                                        />
                                    </div>
                                    <div className="lg:mt-[380px] md:mt-[320px] mt-[320px]">
                                        <p className="4xl:text-[36px] xl:text-[30px] md:text-[26px] text-[22px] text-[#0A6BB8] leading-tight font-semibold">{data.title}</p>
                                        <p className="4xl:text-[22px] md:text-[18px] xl:text-[18px] text-[16px]  leading-tight xl:mt-[29px] mt-[20px] text-[#000000]">{data.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* Contact Form */}
            < div className="custom-container md:mt-[129px] xl:mb-[104px] mt-[41px] mb-[45px]">
                <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle')} subtitle1={t('contactSubTitle2')} className={"xl:w-[70%] 2xl:w-[75%] lg:w-[70%] 4xl:text-[60px] xl:text-[40px]  md:text-[30px] text-[26px] leading-tight max-[400px]:text-[22px] "} />
            </div >
        </section>
    )
}
