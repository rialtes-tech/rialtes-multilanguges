"use client";
import ContactForm from "@/app/[locale]/components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import Seo from "@/app/[locale]/components/Seo";
import Image from "next/image";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/services.json';
import esContent from '../../../../../../messages/es/services.json';
import frContent from '../../../../../../messages/fr/services.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";

export default function DemandPlusSection() {
    const t = useTranslations('kinaxis')
    const locale = useLocale();
    const homepageContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { kinaxisServices, endToEndData, supplyChain, inventeryOptimizationData, enterpriseSchedulingData, scenarioData,
        seamlessIntegrationData, rialtesStrongData, agentChatData, whyKinaxisData, leadingData, salesData, schemaData } = homepageContent.kinaxis;
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="home, website, welcome"
                canonical={`https://www.rialtes.com/${locale}/services/intelligent-scm/demandplus-kinaxis-rapidresponse-services/`}
            />
            <Script
                id="schema-demandplus"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative group overflow-hidden h-[400px] md:h-[500px]  4xl:h-[650px] ">
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/aerial-cargo-ships-port-logistics.webp"
                        alt={t('bannerAlt')}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110 object-cover"
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/aerial-cargo-ships-port-logistics-mobile.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110 object-cover"
                        sizes="100vw" />
                </div>
                <div className="h-full relative custom-container xl:!pr-0  mr-0">
                    <div className="grid xl:grid-cols-12  grid-cols-1 gap-2  xl:mt-20 md:mt-20 mt-10">
                        <div className="xl:col-span-7 md:col-span-2 col-span-12">
                            <h3 className="text-white xl:text-[24px]  font-bold mb-2">{t('headerTitle')}</h3>
                            <h1 className="text-white leading-tight mt-5  xl:pr-0 md:text-[36px] 4xl:text-[60px] xl:text-[45px] text-[26px]">
                                {t('headerSubTitle')}
                            </h1>
                        </div>
                        <div className="xl:col-span-7 col-span-12">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description */}
            <section
                className="custom-container xl:!pr-0">
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:mt-24 mt-10">
                    <div className="xl:col-span-8 xl:pr-0 pr-10">
                        <h2 className="leading-tight md:text-[36px] 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('pageDescTitle')}</h2>
                        <p className="mt-12">{t('pageDesc1')} </p>
                        <p className="mt-8 pb-16">{t('pageDesc2')}</p>
                    </div>
                    <div className="xl:col-span-4"></div>
                </div>
            </section>
            <section className={`relative  group overflow-hidden
              ${locale === "es"
                    ? "4xl:h-[775px] 2xl:h-[660px] xl:h-[650px]"
                    : locale === "fr"
                        ? "4xl:h-[700px] 2xl:h-[660px] xl:h-[650px]"
                        : "4xl:h-[700px] 2xl:h-[660px] xl:h-[650px]"
                }`}
            >
                {/* Desktop Image */}
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/logistics-workers-container-yard-inspection.webp"
                        alt={t('demandAlt')}
                        className="transform transition-transform duration-500 group-hover:scale-110 object-cover"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                {/* Mobile Image */}
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/logistics-workers-container-yard-inspection-mobile.webp"
                        alt={t('demandAlt')}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-[400px] object-cover"
                        priority
                    />
                </div>
                {/* Content Block */}
                <div className={`custom-container z-10 relative xl:absolute 4xl:top-[45%] 2xl:top-[43%] xl:top-[43%] top-[-100px]  xl:-translate-y-1/2`}>
                    <div className={`bg-[#016FBE] bg-opacity-90 text-white p-[20px] md:p-8 xl:w-[720px] xl:pb-20 4xl:pb-20 pb-32`}>
                        <h3 className={`font-light xl:text-[30px] text-[20px] md:text-[26px]
                          ${locale === "es"
                                ? "pt-20"
                                : locale === "fr"
                                    ? "pt-10"
                                    : "pt-10"
                            }`}
                        >{t('introducingTitle')} </h3>
                        <h3 className="4xl:text-[50px] xl:text-[40px] text-[23px] max-[350px]:text-[20px] leading-[60px]">{t('introducingTitle2')}</h3>
                        <h3 className="4xl:text-[36px] xl:text-[25px] text-[22px] mt-5">{t('introducingTitle3')}</h3>
                        <p className="mt-8 4xl:text-[22px] text-[16px] leading-tight font-normal">
                            {t('introducingDesc')}
                        </p>
                        <UnorderedList arrName={endToEndData} ulClassName="list-disc leading-tight xl:space-y-3 font-light marker:font-bold marker:text-2xl pl-5 mt-5  xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px] " />
                        <div className="mt-5 absolute">
                            <LearnMore bgcolor="#134874" bordercolor="#134874" btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="grid xl:grid-cols-12 grid-cols-1 4xl:mt-[-67px] 2xl:mt-[-77px] xl:mt-[-67px] sticky mt-[-7rem] md:mt-[-7rem] mx-[35px] xl:mx-0 z-[20]">
                <div className="col-span-4"></div>
                <div className="col-span-7 bg-[#163055] p-8">
                    <p className="4xl:text-[26px] text-[18px] text-white leading-tight font-normal xl:pr-10">{t('introducingBlueBox')} </p>
                </div>
                <div className="col-span-1"></div>
            </div>
            <section className="relative group overflow-hidden xl:mt-16 xl:mr-[142px]">
                <div className="w-full xl:h-[1046px] ">
                    <div className="xl:block hidden">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/warehouse-managers-reviewing-tablet-inventory.webp"
                            alt={t('whyAlt')}
                            fill
                            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                            priority
                            sizes="100vw"
                        />
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/warehouse-managers-reviewing-tablet-inventory-mobile.webp"
                            alt={t('whyAlt')}
                            priority
                            width={0}
                            height={0}
                            className="w-full md:h-[1000px] h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                            sizes="100vw"
                        />
                    </div>
                    <div className="absolute text-white grid lg:grid-cols-12 grid-cols-12 xl:top-[25rem] top-[260px] sm:top-[36rem] :">
                        <div className="lg:col-span-6 col-span-10 bg-[#0B3A66] pl-[35px] xl:py-16 py-8 xl:pr-20  xl:mr-0 custom-container">
                            <h2 className="lg-4 leading-tight 4xl:text-[60px] xl:text-[45px] text-[26px]">{t('whyKinaxisTitle')} </h2>
                            <p className="font-light xl:pr-0 xl:mt-10 mt-5">
                                {t('whyKinaxisSubTitle')}
                            </p>
                        </div>
                        <div className="lg:col-span-6"></div>
                    </div>
                </div>
                <div className={`grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 relative xl:-mt-10 mt-[-40px]  xl:mr-[50px] custom-container xl:!pr-16
                  ${locale === "es"
                        ? "[@media(max-width:360px)]:mt-[-10px]"
                        : locale === "fr"
                            ? "[@media(max-width:360px)]:mt-[-10px]"
                            : "[@media(max-width:360px)]:mt-[-40px]"
                    }`}
                >
                    {whyKinaxisData.map((item, index) => (
                        <div
                            key={index}
                            className=" shadow-md p-7 text-black border-black border hover:bg-[#D9F2FF] transition-all bg-white">
                            <p className="font-semibold 4xl:text-[24px] text-[20px] 2xl:text-[20px] xl:text-[18px]">{item}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mt-20 custom-container xl:!pr-0 max-md:px-0">
                <div className="grid xl:grid-cols-12">
                    <div className="col-span-6">
                        <h2 className="leading-tight pr-16 4xl:text-[60px] xl:text-[40px] text-[26px] max-md:px-[35px]">{t('supplyChainTitle')} </h2>
                    </div>
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="col-span-5  xl:mx-0">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/warehouse-worker-analyzing-logistics-data.webp"
                            alt={t('supplyAlt')}
                            priority
                            className="w-full 4xl:mt-16 xl:mt-8 mt-10 relative xl:h-full 4xl:h-auto max-md:px-[35px]"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="col-span-7 bg-[#006FBE] 4xl:mt-[-2rem] xl:mt-[-1rem] mt-[-4rem] text-white 4xl:ml-[-90px] xl:ml-[-108px] 4xl:mb-[75px] xl:pl-[10rem] px-[35px] pb-16  xl:pb-20">
                        <h3 className="4xl:pt-20 xl:pt-10 pt-24 text-[22px] 4xl:text-[30px] 4xl:pr-[20rem] xl:pr-[14rem]">{t('endToEndTitle')}</h3>
                        <UnorderedList arrName={supplyChain} ulClassName="list-disc leading-tight 4xl:space-y-5 xl:space-y-1 font-light marker:font-bold marker:text-2xl pl-5 mt-8 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[17px] 2xl:text-[18px] text-[16px]" />
                        <div className="4xl:mt-6 2xl:mt-32 xl:mt-10 mt-4 absolute">
                            <LearnMore bgcolor={"#134874"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-24 custom-container xl:!pr-0">
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20">
                    <div className="xl:col-span-6 order-1 xl:order-2">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/business-team-collaborating-modern-office.webp"
                            alt={t('salesAlt')}
                            priority
                            className={`
                              ${locale === "es"
                                    ? "w-full h-full 4xl:h-[775px] xl:h-[590px]"
                                    : locale === "fr"
                                        ? "w-full h-full 4xl:h-[850px] xl:h-[650px]"
                                        : "w-full  4xl:h-[685px]"
                                }`}
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="xl:col-span-5 order-2 xl:order-1">
                        <h2 className={`leading-tight mt-10 xl:mt-0 xl:pr-0 
                          ${locale === "es"
                                ? "4xl:text-[60px] xl:text-[38px] text-[26px]"
                                : locale === "fr"
                                    ? "4xl:text-[60px] xl:text-[40px] text-[26px]"
                                    : "4xl:text-[60px] xl:text-[40px] text-[26px]"
                            }`}


                        >{t('salesTitle')} </h2>
                        <h3 className="4xl:text-[42px] xl:text-[30px] 2xl:text-[32px] text-[22px] xl:mt-5 mt-5 leading-tight font-semibold">{t('driveTitle')} </h3>
                        <p className="mt-5 font-normal 4xl:text-[20px] text-[16px] xl:text-[17px] leading-tight">
                            {t('salesDesc')}
                        </p>
                        <UnorderedList arrName={salesData} ulClassName="list-disc leading-tight xl:space-y-1 4xl:space-y-5 font-normal marker:font-bold marker:text-2xl pl-5 4xl:mt-8 2xl:mt-8 xl:mt-4 mt-5" liClassName="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]" />
                    </div>
                </div>
            </section>
            <p className={`bg-[#163055] p-8 xl:!mx-[280px] z-[15] max-md:mx-[35px] text-white  mt-10 relative 4xl:text-[26px] 2xl:text-[20px] xl:text-[15px] text-[18px] font-normal
              ${locale === "es"
                    ? "4xl:mt-[-10px] 2xl:mt-[-45px] xl:mt-[-35px]"
                    : locale === "fr"
                        ? "4xl:mt-[-90px] 2xl:mt-[-72px] xl:mt-[-56px]"
                        : "4xl:mt-[-50px] 2xl:mt-[-45px] xl:mt-[-35px]"
                }`}


            >{t('outcomeTitle')} </p>

            <section className={`relative w-full 
              ${locale === "es"
                    ? "2xl:mt-[-80px] mt-16 4xl:mt-[-95px] xl:mt-[-75px]"
                    : locale === "fr"
                        ? "xl:mt-[-53px] mt-16"
                        : "xl:mt-[-53px] mt-16"
                }`}
            >
                <div className="w-full xl:h-[1083px]">
                    <div className="xl:block hidden">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/aerial-warehouse-worker-inventory-management.webp"
                            alt={t('inventoryAlt')}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/aerial-warehouse-worker-inventory-management-mobile.webp"
                            alt={t('inventoryAlt')}
                            priority
                            width={0}
                            height={0}
                            className="w-full"
                            sizes="100vw"
                        />
                    </div>
                    <div className="absolute text-white grid xl:grid-cols-12 grid-cols-1  top-[23rem] md:top-[46rem] max-[390px]:mt-[-100px] max-[320px]:mt-[-200px] md:mt-[300px] 4xl:top-[13rem] 2xl:top-[16rem] xl:top-[18rem]">
                        <div className="xl:col-span-7  custom-container xl:!pr-0 pl-[35px] xl:py-16 py-8">
                            <h2 className="mb-4 leading-tight 4xl:text-[60px] xl:text-[45px] text-[26px]">{t('inventoryTitle')} </h2>
                            <h3 className="4xl:text-[42px] xl:text-[32px] text-[22px] mt-5">{t('inventoryTitle2')}</h3>
                            <p className="font-light xl:pr-24 pr-10 mt-5 leading-tight">
                                {t('inventoryDesc')}
                            </p>
                        </div>
                        <div className="xl:col-span-5"></div>
                    </div>
                </div>
            </section>
            <div className={`grid xl:grid-cols-12 grid-cols-1 absolute xl:mt-[-100px]  md:mt-0 custom-container
              ${locale === "es"
                    ? "[@media(max-width:360px)]:mt-0"
                    : locale === "fr"
                        ? "[@media(max-width:360px)]:mt-0"
                        : "[@media(max-width:360px)]:mt-[-50px] mt-[-75px]"
                }`}

            >
                <div className="xl:col-span-5 col-span-12 bg-[#163055] px-10 py-10 text-white">
                    <h3 className="leading-tight">{t('inventeryOptimizationTitle')} </h3>
                    <UnorderedList arrName={inventeryOptimizationData} ulClassName="list-disc leading-tight xl:space-y-5 font-normal marker:font-bold marker:text-2xl pl-5 xl:mt-8 mt-5" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                </div>
                <div className="xl:col-span-1 col-span-12 bg-[#163055] xl:flex xl:items-center xl:justify-center">
                    <div className="border-b border-white [@media(max-width:430px)]:mx-[35px] xl:mx-0 xl:border-b-0 xl:border-r xl:h-[70%] xl:w-auto"></div>
                </div>
                <div className="xl:col-span-5 col-span-12 bg-[#163055] px-10 py-10 text-white">
                    <h3 className="leading-tight"> {t('enterpriseTitle')} </h3>
                    <UnorderedList arrName={enterpriseSchedulingData} ulClassName="list-disc leading-tight xl:space-y-5 font-normal marker:font-bold marker:text-2xl pl-5 xl:mt-8 mt-5" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                </div>
                <div className="xl:col-span-3 col-span-12"></div>
            </div>
            <section className={`relative h-auto  custom-container xl:!pr-0 max-md:px-0 md:mt-[33rem]
              ${locale === "es"
                    ? "mt-[39rem] max-[360px]:mt-[51rem] max-[375px]:mt-[46rem] max-[390px]:mt-[44rem] max-[414px]:mt-[43rem] max-[400px]:mt-[44rem]   max-[320px]:mt-[53rem] 2xl:mt-[15rem] xl:mt-[19rem]"
                    : locale === "fr"
                        ? "mt-[42rem] max-[360px]:mt-[55rem] max-[375px]:mt-[52rem] max-[390px]:mt-[49rem] max-[400px]:mt-[48rem]  max-[320px]:mt-[53rem] 2xl:mt-[17rem] xl:mt-[19rem] "
                        : "mt-[32rem] max-[360px]:mt-[44rem] max-[375px]:mt-[40rem] max-[390px]:mt-[35rem] max-[400px]:mt-[35rem]  max-[320px]:mt-[53rem] 2xl:mt-[15rem] xl:mt-[15rem]"
                }`}
            >
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/diverse-team-collaborating-office-project.webp"
                        alt={t('scenarioAlt')}
                        className={`w-full

                          ${locale === "es"
                                ? "xl:h-[666px] 2xl:h-[730px] 4xl:h-[826px]"
                                : locale === "fr"
                                    ? "xl:h-[710px] 2xl:h-[750px] 4xl:h-[826px]"
                                    : "xl:h-[596px] 2xl:h-[620px] 4xl:h-[725px]"
                            }`}
                        priority
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/diverse-team-collaborating-office-project-mobile.webp"
                        alt={t('scenarioAlt')}
                        className="object-cover w-full"
                        priority
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-1 absolute  top-0 xl:pl-20 4xl:pt-20 max-[390px]:pt-[22rem] pt-[25rem] md:pt-[11rem] xl:pt-10">
                    <div className="xl:col-span-5 px-[35px] md:px-[45px] xl:px-[20px]">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('scenarioTitle')} </h2>
                        <h3 className="4xl:text-[42px] xl:text-[30px] text-[22px] mt-5 font-semibold leading-tight">{t('scenarioSubTitle')} </h3>
                        <p className="xl:mt-8 mt-5 font-medium leading-tight 4xl:text-[20px] text-[16px] ">{t('scenarioDesc')} </p>
                        <UnorderedList arrName={scenarioData} ulClassName="list-disc xl:space-y-3 font-medium marker:font-bold marker:text-2xl pl-5  mt-8 leading-tight" liClassName="4xl:text-[20px] xl:text-[16px] text-[16px]" />
                        <div className={` absolute
                         ${locale === "es"
                                ? "mt-6 4xl:mt-[65px] 2xl:mt-[128px] xl:mt-[42px]  md:mt-[50px]"
                                : locale === "fr"
                                    ? "mt-6 4xl:mt-[40px] 2xl:mt-[178px] xl:mt-[65px]  md:mt-[40px]"
                                    : "mt-6 4xl:mt-[88px] 2xl:mt-[104px] xl:mt-[40px]  md:mt-[50px]"
                            }`}>
                            <LearnMore bgcolor={"#134874"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={`mt-[40rem] xl:mt-0 md:mt-[6rem]
              ${locale === "es"
                    ? "[@media(max-width:400px)]:mt-[48rem]"
                    : locale === "fr"
                        ? "[@media(max-width:400px)]:mt-[50rem]"
                        : "[@media(max-width:375px)]:mt-[46rem]"
                }`}
            >
                <div className="grid xl:grid-cols-12 grid-cols-1 mx-[35px] xl:mx-0">
                    <div className="col-span-6">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/colleagues-celebrating-high-five-office.webp"
                            alt={t('seamlessAlt')}
                            className="object-cover w-full h-full"
                            priority
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="col-span-6 xl:bg-[#EAEAEA] xl:p-20 pt-8 xl:pr-[120px]">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('seamlessTitle')} </h2>
                        <h3 className="mt-10 4xl:text-[42px] xl:text-[32px] text-[22px] font-semibold leading-tight">{t('seamlessSubTitle')} </h3>
                        <p className="mt-5 xl:pr-20 font-normal leading-tight 4xl:text-[20px] text-[16px]">{t('seamlessDesc')} </p>
                        <UnorderedList arrName={seamlessIntegrationData} ulClassName="list-disc leading-normal xl:space-y-3 font-normal marker:font-bold marker:text-2xl pl-5 mt-5  xl:pr-16" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                    </div>
                </div>
            </section>
            <div className="grid xl:grid-cols-12 grid-cols-1 4xl:mt-[-110px] 2xl:mt-[-90px] xl:mt-[-60px] mt-10 mx-[35px] xl:mx-0">
                <div className="col-span-6"></div>
                <div className="col-span-5">
                    <p className="4xl:text-[26px] text-[18px] bg-[#163055] p-8 text-white font-normal 4xl:pr-32 xl:pl-20 leading-tight">{t('seamlessBlueBox')} </p>
                </div>
                <div className="col-span-1"></div>
            </div>
            <section className="custom-container xl:!pr-0 max-md:px-0">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:order-2 order-1 col-span-6">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/modern-data-center-server-infrastructure.webp"
                            alt={t('btpAlt')}
                            className="object-cover w-full h-full"
                            priority
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="xl:order-1 order-2 col-span-6">
                        <div className="bg-[#006FBE] xl:p-20 p-10 text-white xl:pb-32 pb-[20rem]">
                            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('rialtesStrongTitle')} </h2>
                            <h3 className="4xl:text-[42px] xl:text-[30px] text-[22px] mt-5 leading-tight">{t('rialtesStrongSubTitle')} </h3>
                            <p className="mt-5 font-light leading-tight">
                                {t('rialtesStrongDesc')}
                            </p>
                            <UnorderedList arrName={rialtesStrongData} ulClassName="list-disc leading-normal xl:space-y-4 font-light marker:font-bold marker:text-2xl pl-5 mt-8 xl:pr-16" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                            <div className="mt-5 absolute">
                                <LearnMore bgcolor={"#134874"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} />
                            </div>
                        </div>
                        <p className="4xl:text-[26px] text-[18px] bg-[#163055] xl:p-8 p-6 xl:pl-14 pl-10 4xl:pr-32 text-white font-light mx-[35px] xl:mx-0 mt-[-172px] xl:mt-0 leading-tight">{t('rialtesStrongBlueBox')}</p>
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="xl:block hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/digital-cloud-network-wireframe-structure.webp"
                        alt={t('bringingAlt')}
                        className="object-cover w-full xl:h-[885px]"
                        priority
                        width={0}
                        height={0}
                        sizes="100vw" />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/digital-cloud-network-wireframe-structure-mobile.webp"
                        alt={t('bringingAlt')}
                        className="w-full h-[1233px]"
                        priority
                        width={0}
                        sizes="100vw"
                        height={0} />
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-1 custom-container mx-[35px] xl:mx-0 absolute top-0">
                    <div className="col-span-7 pt-20">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('bringingTitle')} </h2>
                        <h3 className="4xl:text-[42px] xl:text-[32px] text-[22px] mt-10 font-bold leading-tight">{t('bringingSubTitle')} </h3>
                    </div>
                </div>
                <div className={`custom-container mx-[35px] xl:mx-0 xl:mr-[464px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 absolute bottom-[-3rem] z-[9]
                  ${locale === "es"
                        ? "[@media(max-width:375px)]:bottom-[-8rem]"
                        : locale === "fr"
                            ? "[@media(max-width:375px)]:bottom-[-8rem]"
                            : "[@media(max-width:375px)]:bottom-[-8rem]"
                    }`}

                >
                    {kinaxisServices.map((service, index) => (
                        <div
                            key={index}
                            className="border hover:bg-[#D9F2FF] p-10 flex flex-col xl:h-[425px] transition-all bg-white shadow-lg">
                            <h3 className="mb-8 text-[#0A6BB8] font-semibold leading-tight 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] ">{service.title}</h3>
                            <p className="text-[#000000] leading-tight 4xl:text-[24px] 2xl:text-[22px] xl:text-[20px] text-[16px]">{service.description}</p>
                            <div className="xl:bottom-[30px] xl:absolute">
                                <LearnMore href={service.knowMore} btnName={t('knowMoreBtn')} arialabel="kinaxis know more btn" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="relative xl:h-[700px]">
                {/* Desktop Image */}
                <div className="hidden xl:block">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/warehouse-conveyor-belt-sorting-packages.webp"
                        alt={t('sapAlt')}
                        className="object-cover"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>
                {/* Mobile Image */}
                <div className="block xl:hidden">
                    <Image
                        src="/images/solutions/enterprise-platform/kinaxis/warehouse-conveyor-belt-sorting-packages-mobile.webp"
                        alt={t('sapAlt')}
                        className="w-full h-auto"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                    />
                </div>
                {/* Text Block */}
                <div className={`custom-container text-white xl:absolute xl:top-[20%] relative xl:w-[62%] w-full z-10 max-md:px-0`}>
                    <div className="bg-[#073259] xl:p-16 p-10">
                        <h2 className={`leading-tight pr-20 xl:pr-0  xl:text-[50px] text-[26px]
                          ${locale === "es"
                                ? "4xl:text-[60px]"
                                : locale === "fr"
                                    ? "4xl:text-[52px]"
                                    : "4xl:text-[60px]"
                            }`}

                        >{t('sapAribaTitle')}</h2>
                        <h3 className="xl:text-[40px] text-[22px] font-semibold leading-tight mt-5 xl:pr-0">
                            {t('sapAribaSubTitle')}
                        </h3>
                        <h3 className="mt-5 leading-tight"> {t('sapAribaSubTitle2')}</h3>
                        <p className="mt-5 mb-5 font-normal leading-tight">
                            {t('sapAribaDesc')}
                        </p>
                        <div className="absolute 4xl:mt-[10px] 2xl:mt-[13px] xl:mt-[13px]">
                            <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-[#555555] mt-0">
                <div className={`pt-32 mx-[35px] xl:mx-0
                  ${locale === "es"
                        ? "xl:pt-64"
                        : locale === "fr"
                            ? "xl:pt-[19rem]"
                            : "xl:pt-64"
                    }`}

                >
                    <div className="xl:block hidden">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/professional-woman-office-meeting-collaboration.webp"
                            alt={t('enhanceAlt')}
                            className="w-[1360px] xl:h-[612px] custom-container"
                            priority
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/solutions/enterprise-platform/kinaxis/professional-woman-office-meeting-collaboration-mobile.webp"
                            alt={t('enhanceAlt')}
                            className="w-full"
                            priority
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                </div>
                <div className="custom-container mx-[35px] grid xl:grid-cols-12 grid-cols-1 text-white mt-16 xl:gap-20">
                    <div className="col-span-6">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] text-[26px]">{t('enhanceTitle')} </h2>
                        <h3 className="mt-10 xl:text-[42px] text-[22px] leading-tight font-bold">{t('enhanceTitle2')} </h3>
                    </div>
                    <div className="col-span-6">
                        <h3 className="mt-8 xl:mt-0 pr-16 xl:pr-0 4xl:text-[30px] xl:text-[25px] text-[20px] leading-tight">{t('agentChatTitle')} </h3>
                        <p className="mt-5 font-normal">{t('agentChatDesc')}</p>
                        <h3 className="xl:text-[24px] text-[18px] mt-10">{t('highlightTitle')} </h3>
                        <UnorderedList arrName={agentChatData} ulClassName="list-disc leading-tight xl:space-y-4 mb-10 font-light marker:font-bold marker:text-2xl pl-5 mt-5 xl:pr-0" liClassName="4xl:text-[20px] xl:text-[18px] text-[16px]" />
                        <div className="xl:mt-10">
                            <LearnMore href="/products/agentchat" btnName={t('knowMoreBtn')} arialabel="kinaxis know more btn" />
                        </div>
                    </div>
                </div>
                <div className="custom-container mx-[35px] xl:mx-0 grid xl:grid-cols-12 grid-cols-1 mt-16">
                    <div className="col-span-9 bg-[#068EDA] p-8 pl-12 text-white">
                        <p className="4xl:text-[26px] text-[18px] font-normal xl:pr-32 4xl:pr-16 leading-tight">{t('agentChatBlueBox')} </p>
                    </div>
                </div>
            </div>
            <section className="relative  custom-container xl:!pr-0 max-md:px-0">
                {/* Desktop Image */}
                <div className="hidden xl:block">
                    <Image src="/images/solutions/enterprise-platform/kinaxis/warehouse-worker-digital-inventory-management-system.webp"
                        alt={t('leadingAlt')}
                        className="w-full h-full xl:h-[618px] 2xl:h-[556px] 4xl:h-[840px] object-cover"
                        priority
                        width={0}
                        height={0}
                        sizes="100vw" /> </div>
                {/* Mobile Image */}
                <div className="block xl:hidden">
                    <Image src="/images/solutions/enterprise-platform/kinaxis/warehouse-worker-digital-inventory-management-system-mobile.webp"
                        alt={t('leadingAlt')}
                        className="w-full object-cover h-[800px] sm:h-[875px] md:h-[725px] lg:h-[700px] xl:h-[770px]" priority
                        width={0}
                        height={0}
                        sizes="100vw" />
                </div>
                <div className="absolute top-[500px] xl:top-1/2 -translate-y-1/2 grid grid-cols-1 xl:grid-cols-12 text-white  px-9 xl:px-0">
                    <div className="col-span-6 xl:px-16 ">
                        <h2 className="leading-tight text-[26px] xl:text-[40px] 4xl:text-[60px] xl:pr-0 md:pr-6"> {t('leadingTitle')} </h2>
                        <p className="mt-6 font-light text-[16px] 4xl:text-[20px] md:pr-8"> {t('leadingDesc')} </p> <UnorderedList arrName={leadingData} ulClassName="list-disc leading-tight space-y-3 xl:space-y-4 font-light marker:font-bold marker:text-2xl pl-5 mt-5" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px]" />
                    </div>
                    <div className="col-span-6" />
                </div>
                <div className="absolute -bottom-[30px] z-10 px-12">
                    <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" btnName={t('learnMoreBtn')} /> </div>
            </section>



            {/* contact form */}
            <div className="mt-20 custom-container text-black pb-20" >
                <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle')} className={"4xl:max-w-[60rem] xl:max-w-[40rem] leading-tight text-[26px] font-light 4xl:text-[60px] xl:text-[40px] xl:pr-0"} />
            </div >
        </div>
    );
}
