"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/[locale]/components/Seo";
import LearnMore from "@/app/[locale]/components/learnMore";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/services.json';
import esContent from '../../../../../../messages/es/services.json';
import frContent from '../../../../../../messages/fr/services.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";


export default function Page() {
    const t = useTranslations('advantagePlus')
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { latestServices, moreSalesforce, deepData1, deepData2, marketingFeatures, aiMarketingData, agentChatData, yourGrowthData,schemaData } = content.advantagePlus;
    const ServicesCard = ({ services }) => (
        <div className="flex flex-col border border-[#707070] p-6 transition ease-out duration-300 hover:bg-[#D9F2FF] hover:border-[#D9F2FF]">
            <div className="flex-grow flex flex-col">
                <h3 className="mb-[15px] md:mb-[25px]  font-semibold  text-[#0A6BB8] 4xl:text-[30px] text-[20px] leading-tight">{services.title}</h3>
                <p className='md:mb-[15px] mb-0  4xl:text-[24px] text-[16px] font-normal pr-12 xl:pr-0 4xl:pr-0 leading-tight'>{services.description}</p>
            </div>
        </div>
    );
    const SalesforceExplore = () => {
        return (
            <section className="bg-[#EAF8FD] pt-16 pb-16 xl:pb-0 4xl:pb-0">
                <div className="custom-container">
                    <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] font-light mb-12">
                        {t('exploreMoreTitle')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 text-left">
                        {moreSalesforce.map((service, index) => (
                            <div key={index} className="flex flex-col items-start justify-between h-full">
                                <div>
                                    <h3 className="text-[#005BA1] font-semibold 4xl:text-[36px] text-[20px] mb-5 leading-tight pr-[7rem] xl:pr-0 4xl:pr-0">{service.title}</h3>
                                    <p className="text-black xl:mb-5 4xl:text-[22px] text-[16px] leading-tight pr-[5rem] xl:pr-0 4xl:pr-10">{service.description}</p>
                                </div>
                                <div>
                                    <LearnMore btnName={t('learnMoreBtn')} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };
    const Services = () => {
        return (
            <div className="text-black 2xl:pr-70 xl:pr-10 md:pr-8">
                <div className="grid 4xl:grid-cols-12">
                    <div className="4xl:col-span-12">
                        <h2 className="text-black mb-6  xl:text-[40px] 4xl:pr-[2rem] xl:pr-80 4xl:text-[60px]  text-[26px]  leading-tight mt-16 xl:mt-0 4xl:mt-0 pr-[4rem]">{t('ourAdvantageTitle')}</h2>
                        <p className="4xl:text-[22px] text-[16px] my-12">{t('ourAdvantageDesc')}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-6">
                    {latestServices.map((services) => (
                        <ServicesCard key={services.id} services={services} />
                    ))}
                </div>
                <div className="4xl:mt-10 xl:mt-10 mt-5">
                    <LearnMore btnName={t('learnMoreBtn')} />
                </div>
            </div>
        );
    };
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="home, website, welcome"
                canonical={`https://www.rialtes.com/${locale}/services/lob/salesforce-marketing-cloud-implementation-consulting/`}
            />
            <Script
                id="schema-salesforce-marketing"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative group overflow-hidden  lg:pb-[10rem] xs:pb-40 xl:pb-[6rem] 2xl:pb-[10rem] 4xl:pb-[12rem] sm:pb-[12rem]  pb-20">
                <div className="xl:block hidden pt-20">
                    <Image
                        src="/images/services/lob/advantageplus/desktop/rocket-launching-laptop-startup-growth-concept.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                        className="objet-[49%_20%]"
                    />
                </div>
                <div className="xl:hidden block md:pt-64">
                    <Image
                        src="/images/services/lob/advantageplus/mobile/rocket-launching-laptop-startup-growth-concept-mobile.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                        className="h-full objet-[49%_20%] object-cover"

                    />
                </div>
                <div className="relative custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 xl:mt-20 4xl:mt-20 mt-16 md:mt-0 mx-auto">
                        <div className="xl:col-span-7 col-span-12 pr-5 ">
                            <h3 className="text-white text-[20px] xl:text-[24px] font-bold mb-2 break-words ">
                                {t('headerTitle')}
                            </h3>

                            <h2 className="text-white  leading-tight break-words 4xl:text-[60px] xl:text-[40px] text-[26px]  xl:mt-10 4xl:mt-10 mt-5 4xl:pr-0 xl:pr-0 md:pr-[22rem] sm:pr-20 xs:pr-16">
                                {t('headerSubTitle')}
                            </h2>
                            <h1 className="xl:mt-8 4xl:mt-8 mt-5 text-[18px] xl:text-[23px] 4xl:text-[35px] xl:pr-[15rem] 4xl:pr-[10rem] text-white font-bold  leading-tight  pr-[7rem] md:pr-[25rem]">
                                {t('headerSubTitle2')}
                            </h1>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description */}
            <section className="mt-16 custom-container">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="4xl:col-span-10 xl:col-span-8 col-span-12">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:mb-8 pr-[2rem] xl:pr-0 4xl:pr-0">
                            {t('pageDescTitle')}
                        </h2>
                        <p className="text-[16px] 4xl:text-[22px] leading-tight mt-5 4xl:pr-[25px] pr-[2rem] xl:pr-0">{t('pageDesc')}</p>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                    </div>
                </div>
            </section>
            {/* advantage+ section */}
            <div className="custom-container lg:mt-20 4xl:pr-[457px]">
                <section className="bg-white">
                    <Services />
                </section>
            </div>
            {/* deep salesforce section */}
            <section>
                <div className="relative w-full xl:mt-16 mt-16 4xl:mt-16 2xl:mt-16">
                    <div className="w-full xl:h-[1083px]">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/services/lob/advantageplus/desktop/business-team-digital-network-collaboration-meeting.webp"
                                alt={t('deepAlt')}
                                fill
                                className="object-cover"
                                priority
                                sizes="100vw"
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/services/lob/advantageplus/mobile/business-team-digital-network-collaboration-meeting-mobile.webp"
                                alt={t('deepAlt')}
                                priority
                                width={0}
                                height={0}
                                className="w-full"
                                sizes="100vw"
                            />
                        </div>
                    </div>
                </div>

                <section className=" text-white py-12 custom-container xl:absolute relative  xl:z-0 4xl:mt-[-450px] mt-[-125px] xl:mt-[-450px]">
                    <div className="custom-container mx-auto px-6 xl:px-14 bg-[#006FBE]">
                        {/* Title + Description */}
                        <div className="text-left mb-5">

                            <h2 className="4xl:text-[60px] xl:text-[40px] 2xl:text-[50px] text-[26px] leading-tight pt-10 2xl:pt-20 4xl:pt-16 xl:pt-10 lg:pr-0 4xl:pr-64 2xl:pr-64 xl:pr-64">
                                {t('deepTitle')}     </h2>

                            <p className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] 4xl:pr-[40rem] 2xl:pr-[32rem] xl:pr-[25rem]">
                                {t('deepDesc')}    
                            </p>
                        </div>

                        {/* Lists */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-10">
                            <UnorderedList arrName={deepData1} ulClassName="list-disc font-light xl:font-medium pl-5 mt-4 xl:mt-8 space-y-3 4xl:space-y-6 xl:space-y-5 text-[16px] 4xl:text-[20px] leading-tight  marker:text-white 4xl:pr-[20px] pr-3" liClassName="" />
                            <UnorderedList arrName={deepData2} ulClassName="list-disc pl-5 font-light xl:font-medium mt-4 xl:mt-8 space-y-3 4xl:space-y-6 xl:space-y-5 text-[16px] 4xl:text-[20px] leading-tight  marker:text-white 4xl:pr-[20px] pr-3" liClassName="" />
                        </div>

                        {/* Button */}
                        <div className="xl:mt-10 mt-5  xl:text-left">
                            <LearnMore btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                </section>

            </section>
            {/* driving business section*/}
            <section className="xl:mt-64 4xl:mt-[28rem] 2xl:mt-[20rem] custom-container 4xl:pl-0 4xl:pr-[192px] xl:pl-0 max-md:pl-0 md:mt-[-17rem]">
                <div className="grid lg:grid-cols-12 grid-cols-1 xs:mt-[2rem] sm:mt-[5rem] mt-10 md:mt-[22rem]  lg:mt-[20rem] xl:mt-0 4xl:mt-0">
                    <div className="lg:col-span-7 col-span-12 4xl:pr-[60px] xl:pr-20 lg:pr-10">
                        <Image
                            src="/images/services/lob/advantageplus/desktop/diverse-team-reviewing-digital-tablets-office.webp"
                            alt={t('drivingAlt')}
                            priority
                            width={0}
                            height={0}
                            className="w-full h-full object-cover"
                            sizes="100vw"
                        />
                    </div>
                    <div className="lg:col-span-5 col-span-12 max-md:px-[35px]">
                        <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight pt-10 lg:pt-0 4xl:pt-0  lg:pr-0 4xl:pr-0">{t('drivingBusinessTitle')}</h2>
                        <p className="4xl:pt-10 xl:pt-3 pt-5 pr-10 lg:pr-0 4xl:pr-0">{t('drivingBusinessDesc')}</p>
                        <ul className="list-disc 4xl:space-y-5 lg:space-y-2 space-y-3 marker:font-bold marker:text-2xl pl-5 text-[16px] 4xl:text-[20px] leading-tight 4xl:mt-8 mt-3 4xl:pr-[11rem] xl:pr-0 ">
                            {marketingFeatures.map((feature, index) => (
                                <li key={index}>
                                    <span className="font-bold">{feature.title} </span>
                                    {feature.description}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10">
                            <LearnMore btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                </div>
            </section>
            {/* reimagine section */}
            <div className="relative 4xl:mt-[20rem] 4xl:pl-[142px] pb-20 custom-container mt-[10rem] max-md:px-0 xl:mt-[14rem]">
                <div className="bg-[#F0F0F0] relative 4xl:pl-[142px]">
                    {/* Image Section */}
                    <div className="relative z-10 -mt-[8vh] md:-mt-[10vh] xl:-mt-[12vh] 4xl:mr-[-140px] xl:mr-[-70px] xl:ml-[80px] 4xl:ml-0">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/services/lob/advantageplus/desktop/woman-analyzing-cloud-computing-data-dashboard.webp"
                                alt={t('reimaginAlt')}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto object-cover max-md:px-[35px]"
                                priority
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/services/lob/advantageplus/mobile/woman-analyzing-cloud-computing-data-dashboard-mobile.webp"
                                alt={t('reimaginAlt')}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto object-cover max-md:px-[35px] mt-[-80px]"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative z-20 grid xl:grid-cols-2 gap-10 px-4 xl:px-0 max-md:px-[35px] pb-[0px] xl:pb-0">
                        {/* Left Content */}
                        <div className="pt-10  xl:pt-20 4xl:pt-20 xl:ml-[5rem] 4xl:ml-0 flex flex-col justify-between">
                            <div>
                                <h2 className="text-[26px] xl:text-[40px] 4xl:text-[60px] leading-tight pr-10 xl:pr-0 4xl:pr-0">
                                    {t('reimaginTitle')}
                                </h2>
                                <p className="mt-5 text-[16px] 4xl:text-[22px]">
                                    {t('reimaginDesc')}
                                </p>
                            </div>


                            <div className="hidden xl:block mt-10">
                                <LearnMore btnName={t('learnMoreBtn')} />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className=" xl:pt-20 4xl:pt-20 4xl:pb-[60px] 2xl:pb-[70px] xl:pb-[70px]">
                            <ul className="list-disc marker:text-black marker:font-bold 4xl:pl-5 4xl:p-10 4xl:pt-0 4xl:pb-5 text-[16px] 4xl:text-[22px] space-y-3 pr-6 pl-6 xl:pr-20 4xl:pr-24 font-medium">
                                {aiMarketingData.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.title}</strong> {item.description}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-[16px] 4xl:text-[22px] mt-5 xl:mt-5 4xl:mt-5 pr-12 xl:pr-4 4xl:pr-4">
                                {t('byHarnessingTitle')}
                            </p>
                        </div>


                        <div className="xl:hidden col-span-full flex justify-start mt-10">
                            <LearnMore btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                </div>
            </div>

            {/* introducing agentchat section */}
            <section className="relative 4xl:mt-[9rem] mt-[1rem] xl:mt-[84px] 2xl:mt-[83px]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/services/lob/advantageplus/desktop/professional-businessman-using-smartphone-office.webp"
                        alt={t('agentAlt')}
                        width={0}
                        height={0}
                        className="w-full object-cover mt-[-100px]"
                        sizes="100vw"
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/services/lob/advantageplus/mobile/professional-businessman-using-smartphone-office-mobile.webp"
                        alt={t('agentAlt')}
                        width={0}
                        height={0}
                        className="w-full object-cover mt-[-100px]"
                        sizes="100vw"
                        priority
                    />
                </div>
                <div className="grid xl:grid-cols-12 grid-cols-12 absolute xl:top-[-4rem] 4xl:top-[-8rem]  md:top-[57rem]">
                    <div className="xl:col-span-6 col-span-12"></div>
                    <div className="xl:col-span-5 col-span-12 bg-[#184671] text-white 4xl:pt-16 xl:pt-8 4xl:px-14 xl:px-10 px-10 pt-10">
                        <h2 className="4xl:text-[50px] text-[26px] xl:text-[38px] leading-tight font-light">{t('introducingAgentChatTitle')}</h2>
                        <h3 className="4xl:text-[35px] text-[24px] xl:text-[25px] mt-8 leading-tight pr-12 xl:pr-0 4xl:pr-0">{t('introducingAgentChatSubTitle')}</h3>
                        <h3 className="mt-8 leading-tight 4xl:text-[30px] text-[20px] pr-14 xl:pr-0 4xl:pr-0">{t('introducingAgentChatSubTitle2')}</h3>
                        <p className="mt-8 leading-tight font-light 4xl:text-[22px] text-[16px] pr-12 xl:pr-0 4xl:pr-0">{t('introducingAgentChatDesc')}</p>
                        <h3 className="mt-5 4xl:text-[30px] text-[20px]">{t('keyFeatures')}</h3>
                        <ul className="list-disc marker:text-white marker:font-bold pl-5 text-[16px] 4xl:text-[20px] leading-tight 4xl:space-y-8 xl:space-y-4 space-y-4 mt-5 pr-8 xl:pr-0 4xl:pr-16">
                            {agentChatData.map((feature, index) => (
                                <li key={index}>
                                    <strong>{feature.title}</strong> {feature.description}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 4xl:text-[22px] text-[16px] font-light 4xl:pr-6">{t('introducingAgentChatDesc2')}</p>
                        <div className="mt-5">
                            <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                </div>
            </section>
            {/* your growth section */}
            <section className={` custom-container relative 4xl:pr-[142px]  max-md:px-0
             ${locale === "es"
                    ? "4xl:mt-[24rem] 2xl:mt-[10rem] mt-[100rem] xs:mt-[1333px] sm:mt-[58rem] md:mt-[52rem] lg:mt-[80rem] xl:mt-[30rem]"
                    : locale === "fr"
                        ? "4xl:mt-[24rem] 2xl:mt-[10rem] mt-[104rem] xs:mt-[1413px] sm:mt-[58rem] md:mt-[56rem] lg:mt-[80rem] xl:mt-[32rem] max-md:px-0"
                        : "4xl:mt-[14rem] 2xl:mt-[10rem] mt-[98rem] xs:mt-[1200px] sm:mt-[58rem] md:mt-[56rem] lg:mt-[80rem] xl:mt-[20rem] max-md:px-0"
                }`}
            >
                <div className="grid grid-cols-1 xl:grid-cols-2 items-stretch relative">
                    <div className={`relative z-0 order-1 xl:order-2
                     ${locale === "es"
                            ? "4xl:ml-[-185px] 2xl:ml-[-240px] xl:ml-[-120px]"
                            : locale === "fr"
                                ? "4xl:ml-[-185px] 2xl:ml-[-240px] xl:ml-[-120px]"
                                : "4xl:ml-[-300px] xl:ml-[-211px]"
                        }`}
                    >
                        <div className="xl:block hidden">
                            <Image
                                src="/images/services/lob/advantageplus/desktop/businesswoman-presenting-whiteboard-office-meeting.webp"
                                alt={t('growthAlt')}
                                width={0}
                                height={0}
                                className={`w-full  mt-10 xl:mt-20 object-cover
                                 ${locale === "es"
                                        ? "4xl:h-[980px] xl:h-[800px]"
                                        : locale === "fr"
                                            ? "4xl:h-[980px] xl:h-[800px]"
                                            : "4xl:h-[980px] xl:h-[800px]"
                                    }`}


                                sizes="100vw"
                                priority
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/services/lob/advantageplus/mobile/businesswoman-presenting-whiteboard-office-meeting-mobile.webp"
                                alt={t('growthAlt')}
                                width={0}
                                height={0}
                                className="w-full h-full mt-10  object-cover"
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                    <div className="bg-[#3991AB] text-white z-10 4xl:p-10 4xl:pl-14 relative 4xl:pb-28 xl:pb-20 4xl:pt-10 order-2 xl:order-1 max-md:px-[35px] md:px-[35px] xl:pl-12 xl:pt-8 xl:mb-[70px] 4xl:mb-20">
                        <h2 className="text-[26px] xl:text-[40px] 4xl:text-[55px] leading-tight pt-10 xl:pt-0 4xl:pt-0">
                            {t('yourGrowthTitle')}
                        </h2>
                        <h3 className="mt-4 xl:mt-3 text-[20px] xl:text-[26px] 4xl:text-[36px] font-semibold pr-20 leading-tight xl:pr-0 4xl:pr-0">
                            {t('yourGrowthSubTitle')}
                        </h3>
                        <p className="mt-4 xl:mt-5 text-[16px] 4xl:text-[22px] leading-tight font-light 4xl:pr-6">
                            {t('yourGrowthDesc')}
                        </p>
                        <UnorderedList arrName={yourGrowthData} ulClassName="list-disc pl-5 mt-4 xl:mt-8 space-y-3 4xl:space-y-5 xl:space-y-3 text-[16px] 4xl:text-[22px] leading-tight font-normal marker:text-white 4xl:pr-[20px] pr-10" liClassName="" />
                        <div className="xl:absolute xl:mt-2 bottom-0 mt-8 4xl:mt-2">
                            <LearnMore btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                </div>
            </section>
            {/* explore more section */}
            <div className="mt-[4rem] 4xl:mt-[5rem] xl:mt-[3rem]">
                <section className=" bg-white">
                    <SalesforceExplore />
                </section>
            </div>
            {/* contact form section */}
            <div className="custom-container text-black py-16">
                <ContactForm title={t('contactTitle')} className={"leading-tight xl:max-w-[65%] max-w-full 4xl:text-[60px] xl:text-[40px] md:text-[26px] font-light"} />
            </div >
        </div >
    );
}