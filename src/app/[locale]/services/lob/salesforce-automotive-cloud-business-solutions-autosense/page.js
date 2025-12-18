"use client";
import Image from "next/image";
import LearnMore from "@/app/[locale]/components/learnMore";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import ContactForm from "@/app/[locale]/components/contactform";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/services.json';
import esContent from '../../../../../../messages/es/services.json';
import frContent from '../../../../../../messages/fr/services.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import Script from "next/script";

export default function page() {
    const t = useTranslations('autoSense')
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { keyPillarsSectionData, chooseRialtesData, rialtesMakesWorkData, thoughtLeadershipData ,schemaData} = content.autoSense;
    const KeyPillarsSectionDesign = () => {
        return (
            <section className="xl:mt-[95px] mt-[79px]">
                <Seo
                    title={t('seoTitle')}
                    description={t('seoDescription')}
                    keywords="home, website, welcome"
                    canonical={`https://www.rialtes.com/${locale}/services/lob/salesforce-automotive-cloud-business-solutions-autosense/`}
                />
                <div className="custom-container">
                    <h2 className="text-[000000] 4xl:text-[30px] xl:text-[24px] text-[18px] leading-tight font-bold">
                        {t('keyPillarsTitle')}
                    </h2>
                    <div className="xl:mt-[49px] mt-[35px]">
                        {keyPillarsSectionData.map((data, ind) => {
                            return (
                                <div
                                    key={ind}
                                    className="grid md:grid-cols-2 grid-cols-1 xl:mt-[31px] mt-[26px]">
                                    {ind % 2 === 0 ? (
                                        <>
                                            <div
                                                style={{ backgroundColor: data.bgColor, padding: '32px 22px 0px 22px' }}
                                                className="xl:pt-[46px] xl:px-[79px] pb-0 px-[22px] pt-[32px] order-2 md:order-none flex flex-col justify-between h-full">
                                                <h3 className="4xl:text-[36px] xl:text-[31px] text-[22px] leading-tight font-semibold text-[#FFFFFF] xl:pt-[31px] xl:pl-[34px] ">
                                                    {data.title}
                                                </h3>
                                                <UnorderedList arrName={data.listItems} ulClassName="list-disc text-[#FFFFFF] xl:mt-[24px] xl:px-[24px] pb-0 px-[22px] xl:pl-[52px] pl-[16px] xl:w-[80%] pr-0" liClassName="xl:mt[24px] mt-[19px] text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" />
                                                <div className="xl:mt-[31px] xl:px-[30px]">
                                                    <LearnMore btnName={t('learnMoreBtn')} />
                                                </div>
                                            </div>
                                            <div className="order-1 md:order-none">
                                                {/* Desktop Image */}
                                                <Image
                                                    src={data.imageUrl}
                                                    alt={data.imageAlt}
                                                    width={600}
                                                    height={100}
                                                    className="hidden md:block w-full h-full object-cover"
                                                    priority />
                                                {/* Mobile Image */}
                                                <Image
                                                    src={data.mobileImageUrl}
                                                    alt={data.imageAlt}
                                                    width={600}
                                                    height={100}
                                                    className="block md:hidden w-full h-full object-cover"
                                                    priority />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="order-1 md:order-none">
                                                {/* Desktop Image */}
                                                <Image
                                                    src={data.imageUrl}
                                                    alt={data.imageAlt}
                                                    width={600}
                                                    height={100}
                                                    className="hidden md:block w-full h-full object-cover"
                                                    priority
                                                />
                                                {/* Mobile Image */}
                                                <Image
                                                    src={data.mobileImageUrl}
                                                    alt={data.imageAlt}
                                                    width={600}
                                                    height={100}
                                                    className="block md:hidden w-full h-full object-cover"
                                                    priority
                                                />
                                            </div>
                                            <div style={{ backgroundColor: data.bgColor, padding: '32px 22px 0px 22px' }}
                                                className="xl:pt-[46px] xl:px-[79px] pb-0 px-[22px] pt-[32px] order-2 md:order-none flex flex-col justify-between h-full">
                                                <h3 className="4xl:text-[36px] xl:text-[31px] text-[22px]  font-semibold text-[#FFFFFF] xl:pt-[31px] xl:pl-[34px] xl:leading-[44px] leading-[27px]">
                                                    {data.title}
                                                </h3>
                                                <UnorderedList arrName={data.listItems} ulClassName="list-disc text-[#FFFFFF] xl:mt-[24px] xl:px-[24px] pb-0 px-[22px] xl:pl-[52px] pl-[16px] xl:w-[90%] pr-0" liClassName="xl:mt[24px] mt-[19px] text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" />
                                                <div className="xl:mt-[31px] xl:px-[30px]">
                                                    <LearnMore btnName={t('learnMoreBtn')} />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        )
    }
    const ChooseRialtes = () => {
        return (
            <section className="custom-container xl:mt-[135px] mt-[74px]">
                <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] font-light">
                    {t('whyChooseTitle')}   <span className="block">{t('whyChooseTitle2')} </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:mt-[61px] mt-[37px]">
                    {chooseRialtesData.map((item, ind) => {
                        return (
                            <div key={ind} className="xl:p-[47px] p-[42px] border-[1px] border-[#707070] hover:border-[#D9F2FF] hover:bg-[#D9F2FF] transition-colors duration-300">
                                <img src={item.imageUrl} alt={item.alt} />
                                <h3 className="xl:mt-[46px] mt-[33px] 4xl:text-[30px] xl:text-[23px] text-[20px] font-semibold leading-tight">{item.title}</h3>
                                <div>
                                    {item.listItems.map((listItem, index) => (
                                        <p key={index} className="xl:mt-[33px] mt-[26px] text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal ">{listItem}</p>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="xl:mt-[52px] mt-[32px]">
                    <LearnMore btnName={t('learnMoreBtn')} />
                </div>
            </section>
        );
    };
    const RialtesMakesWork = () => {
        return (
            <section className="custom-container xl:mt-[110px] mt-[70px]">
                <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">{t('makesItWorkTitle')}</h2>
                <h3 className="text-[22px] xl:text-[30px] 4xl:text-[42px] leading-tight font-semibold xl:mt-[16px] mt-[17px]">
                    {t('seamlessIntegrationTitle')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[60px] lg:gap-[100px] xl:gap-[158px] xl:mt-[61px] mt-[29px]">
                    {/* Left Column */}
                    {rialtesMakesWorkData[0] && (
                        <div className="rialtesmakecard-1">
                            <img src={rialtesMakesWorkData[0].image} alt={rialtesMakesWorkData[0].title} className="w-full hidden md:block" />
                            <img src={rialtesMakesWorkData[0].mobileImage} alt={rialtesMakesWorkData[0].title} className="w-full block md:hidden" />
                            <h4
                                className="xl:mt-[63px] mt-[33px] 4xl:text-[36px] xl:text-[28px] text-[20px] leading-tight  font-semibold ">
                                {rialtesMakesWorkData[0].title}
                            </h4>
                            <UnorderedList arrName={rialtesMakesWorkData[0].list} ulClassName="list-disc pl-5 xl:mt-[33px] mt-[29px] w-[90%]" liClassName="xl:mt-[24px] mt-[19px] text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" />
                        </div>
                    )}
                    {/* Right Column */}
                    {rialtesMakesWorkData[1] && (
                        <div className="rialtesmakecard-2 mt-[47px] md:mt-[160px] xl:mt-[230px]">
                            <img src={rialtesMakesWorkData[1].image} alt={rialtesMakesWorkData[1].title} className="w-full hidden md:block" />
                            <img src={rialtesMakesWorkData[1].mobileImage} alt={rialtesMakesWorkData[1].title} className="w-full block md:hidden" />
                            <h4 className="xl:mt-[63px] mt-[33px] 4xl:text-[36px] xl:text-[28px] text-[20px] leading-tight  font-semibold ">
                                {rialtesMakesWorkData[1].title}
                            </h4>
                            <UnorderedList arrName={rialtesMakesWorkData[1].list} ulClassName="list-disc pl-5 xl:text-[20px] text-[16px] xl:mt-[33px] mt-[29px]  w-[90%]" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight xl:mt-[24px] mt-[19px]" />
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-[40px] md:mt-[-60px] xl:mt-[-40px] 3xl:mt-[-80px]">
                    {/* Left Column */}
                    {rialtesMakesWorkData[2] && (
                        <div className="rialtesmakecard-1">
                            <img src={rialtesMakesWorkData[2].image} alt={rialtesMakesWorkData[2].title} className="w-full hidden md:block" />
                            <img src={rialtesMakesWorkData[2].mobileImage} alt={rialtesMakesWorkData[2].title} className="w-full block md:hidden" />
                            <h4 className="xl:mt-[63px] mt-[33px] 4xl:text-[36px] xl:text-[28px] text-[20px] leading-tight font-semibold ">
                                {rialtesMakesWorkData[2].title}
                            </h4>
                            <UnorderedList arrName={rialtesMakesWorkData[2].list} ulClassName="list-disc pl-5 xl:mt-[33px] mt-[29px] w-[90%]" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight xl:mt-[24px] mt-[19px]" />
                        </div>
                    )}
                </div>
            </section>
        );
    };
    const ThoughtLeadershipDesign = () => {
        return (
            <section
                className='bg-[url("/images/industry/auto-sense/Mobile/thought-leadership-mob-img.webp")] md:bg-[url("/images/industry/auto-sense/thought-leadership-img.webp")] bg-center bg-no-repeat bg-cover xl:pt-[151px] xl:pb-[93px] py-[65px] xl:mt-[70px] mt-[57px] px-[30px] xl:px-2'>
                <div className="custom-container max-lg:px-0">
                    <div>
                        <h2 className="text-[#FFFFFF] leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]  w-[100%] xl:w-[55%] 4xl:w-[65%] ">
                            {t('thoughtLeadershipTitle')}
                        </h2>
                        <p className="text-[#FFFFFF] font-semibold xl:mt[29px] mt-[26px]  xl:w-[71%] text-[20px] xl:text-[25px] 4xl:text-[30px] leading-tight">
                            {t('thoughtLeadershipDesc')}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-[89px] gap-[20px] md:gap-[40px] xl:gap-y-auto gap-y-[54px] xl:mt-[84px] mt-[40px]">
                            {thoughtLeadershipData.map((item, index) => (
                                <div key={index}>
                                    <h3 className="text-[20px] xl:text-[25px] 4xl:text-[30px] leading-tight font-semibold text-[#FFFFFF] ">
                                        {item.title}
                                    </h3>
                                    <p className="text-[16px] xl:text-[18px] 4xl:text-[24px] leading-tight mt-[15px] xl:mt-[29px] text-[#FFFFFF] w-[90%] font-light">
                                        {item.description}
                                    </p>
                                    <div className="mt-[38px] xl:mt-[56px] xl:w-[81px] w-[34px] h-[4px] bg-white"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="xl:mb-[34px] xl:mt-[78px] mt-[73px]">
                        <LearnMore btnName={t('learnMoreBtn')} />
                    </div>
                </div>
            </section>
        );
    };
    return (
        <>
            <Script
                id="schema-automotive-cloude"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative group overflow-hidden h-[400px] md:h-[480px] 4xl:h-[650px]">
                <div className="md:block hidden">
                    <Image
                        src="/images/industry/auto-sense/speed-motion-blue-highway-night.webp"
                        alt={t('bannerAlt')}
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                    />
                </div>
                <div className="md:hidden block">
                    <Image
                        src="/images/industry/auto-sense/Mobile/speed-motion-blue-highway-night-mobile.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="h-full relative custom-container">
                    <div className="grid md:grid-cols-12 grid-cols-1">
                        <div className="lg:col-span-5 2xl:col-span-5 4xl:col-span-7 col-span-12 mt-16 md:mt-28 2xl:mt-28 2xl:pr-[34px]">
                            <h3 className="text-white xl:text-[24px] text-[18px] font-bold mb-2">{t('headerTitle')}</h3>
                            <h1 className="text-white leading-tight md:text-[26px] xl:text-[40px] 4xl:text-[60px] mt-5 sm:w-[70%] lg:w-full">
                                {t('headerSubTitle')}
                            </h1>
                        </div>
                        <div className="xl:col-span-7 col-span-12">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description section */}
            <section className="custom-container xl:mt-[105px] mt-[55px] xl:mb-[114px] mb-[42px]">
                <p className="text-[16px] xl:text-[18px] 4xl:text-[22px] leading-tight xl:w-[70%] w-[96%]">{t('pageDesc')}</p>
            </section>
            {/* introducing rialtes */}
            <section className="custom-container">
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="flex flex-col w-full lg:max-w-xl lg:mb-0 mb-4">
                        <p className="text-[#000000] text-[18px] xl:text-[22px] 4xl:text-[30px] leading-tight font-normal">{t('introducingTitle')}</p>
                        <p className="text-[#000000] leading-tight 4xl:text-[50px] xl:text-[40px] text-[24px] font-medium">{t('introducingSubTitle')}</p>
                        <div className="text-[#000000] text-[22px] xl:text-[32px] 2xl:text-[34px] 4xl:text-[36px] leading-tight font-semibold xl:mt-[31px] mt-[12px] xl:w-full w-[76%]">{t('introducingSubTitle2')}</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <p className="text-[#000000] text-[16px] xl:text-[18px] 4xl:text-[22px] leading-tight xl:w-[90%] w-[90%]">{t('introducingDesc')} </p>
                    </div>
                </div>
            </section>
            {/* key pillars of autosense */}
            <KeyPillarsSectionDesign />
            {/* how rialtes makes it workd section */}
            <RialtesMakesWork />
            {/* why choose rialtes section */}
            <ChooseRialtes />
            {/* partner with rialtes */}
            <section className="relative mt-[60px] xl:mt-[81px]">
                <div className="custom-container md:pl-0 max-md:px-0">
                    {/* Desktop Image */}
                    <Image
                        src="/images/industry/auto-sense/man-charging-electric-vehicle.webp"
                        alt={t('partnerAlt')}
                        width={0}
                        height={0}
                        className="hidden lg:block w-full"
                        priority
                    />
                    {/* Mobile Image */}
                    <Image
                        src="/images/industry/auto-sense/Mobile/man-charging-electric-vehicle-mobile.webp"
                        alt={t('partnerAlt')}
                        width={0}
                        height={0}
                        className="block lg:hidden w-full"
                        priority
                    />
                </div>
                <div className="custom-container md:pr-0">
                    <div className="relative z-10 bg-[#073259] mt-[-60px] xl:mt-[-60px] xl:p-[71px] p-[32px] mx-auto">
                        <div className="mx-auto custom-container md:pl-0 max-md:px-0">
                            <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-[10px]">
                                <div className="">
                                    <h2 className="text-[#FFFFFF] leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] lg:w-[80%] xl:w-full 2xl:w-[90%] 4xl:w-[100%]">
                                        {t('partnerTitle')}
                                    </h2>
                                </div>
                                <div className="lg:mt-0 2xl:mt-[14px] mt-[27px] xl:ml-[61px] xl:w-[80%] lg:pl-[40px]">
                                    <p className="text-[#FFFFFF] text-[16px] xl:text-[18px] 4xl:text-[24px] leading-tight font-normal lg:w-[80%] xl:w-full">
                                        {t('partnerDesc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Thought leadership themes */}
            <ThoughtLeadershipDesign />
            {/* Contact Form */}
            <div className="custom-container text-black xl:pb-20 pb-10 pt-[115px] xl:pt-[138px]">
                <ContactForm title={t('contactTitle')} className={"max-w-[62rem] xl:font-light xl:leading-[73px] leading-[32px] 4xl:text-[60px] xl:text-[40px] text-[26px]"} />
            </div >
        </>
    )
}