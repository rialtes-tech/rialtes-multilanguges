"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import ContactForm from "@/app/[locale]/components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import React from "react";
import { useLocale, useTranslations } from 'next-intl';
import enContent from '../../../../../../messages/en/industry.json';
import esContent from '../../../../../../messages/es/industry.json';
import frContent from '../../../../../../messages/fr/industry.json';
import { changeLocalization } from "../../../components/changeLocalization"; 
import { useActiveLocale } from "@/app/[locale]/components/activeLanguages";
export default function Page() {
   
    const t = useTranslations('homeHealth')
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { frActive, esActive } = useActiveLocale();
    const { addressingData, aiRovolutionizingData, capabilitiesData, agentChat, homeHealth, relatedData,schemaData } = content.homeHealth
    return (
        <section className="min-h-screen">
            <Seo
                title={t('seoTitle')} 
                description={t('seoDescription')}
                canonical={`https://www.rialtes.com/${locale}/industry/life-sciences/home-health-ai-tech-solutions/`}
            />
            <Script
                id="schema-sap-bdc"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* herosection */}
            <section className="relative group overflow-hidden h-[350px] md:h-[500px] 4xl:h-[650px]">
                <div className="hidden md:block">
                    <Image
                        src="/images/home-health/hero-banner-desk.webp"
                        alt={t('bannerAlt')}
                        fill
                        style={{ objectFit: "cover", objectPosition: "55% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/home-health/Mobile/hero-banner-mob.webp"
                        alt={t('bannerAlt')}
                        fill
                        style={{ objectFit: "cover", objectPosition: "5% 20%" }}
                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full pt-[80px] md:pt-0">
                        <div className="col-span-12">
                            <h1 className="text-[#FFFFFF] text-[18px] md:text-[24px] font-bold lg:w-full">
                                {t('headerTitle')}
                                <div className="text-[#FFFFFF] text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px]">
                                    {t('headerSubTitle')}    <div className="min-[330px]:block hidden" />{t('headerSubTitle2')}  <div className="min-[330px]:block hidden" />{t('headerSubTitle3')}
                                </div>
                            </h1>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description section */}
            <div className="custom-container xl:mt-[124px] mt-[53px]">
                <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[40px] gap-y-[28px]">
                    <div className="lg:col-span-6 xl:col-span-7 col-span-12">
                        <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight md:w-[80%] xl:w-full">
                            {t('pageDescTitle')}
                        </h2>
                    </div>
                    <div className="lg:col-span-6 xl:col-span-5 col-span-12">
                        <p className="text-[16px] 4xl:text-[22px] xl:text-[18px] font-normal mt-[6px] w-[90%] md:w-[80%] lg:w-full">
                            {t('pageDesc')}
                        </p>
                    </div>
                </div>
            </div>
            {/* addressing section */}
            <section className="custom-container xl:mt-[166px] mt-[49px]">
                <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight lg:w-[60%] 4xl:w-[70%]">
                    {t('addressingTitle')}
                </h2>
                <p className="text-[16px] 4xl:text-[22px] xl:text-[18px] font-normal xl:mt-[39px] mt-[28px] w-[90%] lg:w-[65%] 4xl:w-[70%]">
                    {t('addressingDesc')}
                </p>
                {
                    addressingData.map((data, ind) => {
                        const isEven = ind % 2 === 0;
                        const content = [
                            <React.Fragment key="image">
                                <div className={`lg:col-span-4 col-span-12 ${!isEven && "lg:order-2 order-1"}`}>
                                    <div className="h-full w-full">
                                        <Image src={data.mobImg} alt={data.alt} className="block md:hidden w-full h-full object-cover" width={0} height={0} priority />
                                        <Image src={data.deskImg} alt={data.alt} className="hidden md:block w-full h-full object-cover" width={0} height={0} priority />
                                    </div>
                                </div>
                                <div className={`lg:col-span-8 col-span-12 xl:pt-[51px] xl:pb-[93px] xl:px-[68px] pt-[29px] pb-[64px] px-[30px] relative  ${!isEven && "lg:order-1 order-2"}`} key="text">
                                    <h2 className="4xl:text-[30px] xl:text-[26px] text-[22px] leading-tight text-[#0A6BB8] font-semibold w-[90%] md:w-full">{data.title}</h2>
                                    <p className="text-[16px] 4xl:text-[22px] xl:text-[18px] font-normal xl:mt-[39px] mt-[19px] w-[90%] lg:w-[94%]">{data.desc}</p>
                                    <div className="xl:mt-[40px] mt-[20px] absolute"><LearnMore btnName={t('learnMoreBtn')} locale={locale}/></div>
                                </div>
                            </React.Fragment>
                        ];
                        return (
                            <div className="xl:mt-[71px] mt-[70px]" key={ind}>
                                <div className="grid lg:grid-cols-12 grid-cols-1 border border-[#707070]">
                                    {isEven ? content : content.reverse()}
                                </div>
                            </div>
                        )
                    })
                }
            </section>
            {/* global expertise section */}
            <section className="custom-container xl:mt-[145px] mt-[70px] lg:pr-0 max-md:px-0">
                <div className="grid lg:grid-cols-12 grid-cols-1">
                    <div className="lg:col-span-5 col-span-12 lg:my-[40px] max-md:mx-[36px] lg:mr-[-90px] max-md:mt-[-120px] relative z-20 lg:order-1 order-2">
                        <div className="bg-[#006FBE] text-[#ffffff] xl:pt-[69px] xl:pb-[96px] lg:pl-[63px] xl:pr-[20px] pt-[39px] pb-[70px] px-[26px]">
                            <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light w-[95%] lg:w-[60%] xl:w-full">{t('globalTitle')}</h2>
                            <p className="text-[16px] 4xl:text-[22px] xl:text-[18px] font-normal xl:mt-[65px] mt-[25px] w-[94%] lg:w-[90%]">{t('globalSubTitle')}</p>
                            <div className="absolute xl:mt-[40px] mt-[20px]">
                                <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 col-span-12 lg:order-2 order-1">
                        <Image src="/images/home-health/Mobile/global-mob.webp" alt={t('globalDeleveryAlt')} className="block md:hidden w-full h-full object-cover" width={0} height={0} priority />
                        <Image src="/images/home-health/global-desk.webp" alt={t('globalDeleveryAlt')} className="hidden md:block w-full h-full object-cover" width={0} height={0} priority />
                    </div>
                </div>
            </section>
            {/* how ai section */}
            <section className="custom-container xl:mt-[119px] mt-[85px]">
                <div className="grid xl:grid-cols-12 grid-cols-1 gap-y-[29px] xl:gap-[60px]">
                    <div className="xl:col-span-7 col-span-12">
                        <h2 className="4xl:text-[55px] xl:text-[40px] text-[26px] leading-tight">
                            {t('howAiTitle')}
                        </h2>
                    </div>
                    <div className="xl:col-span-5 col-span-12">
                        <p className="text-[16px] 4xl:text-[20px] xl:text-[18px] font-normal md:w-[80%] xl:w-full">{t('howAiDesc')}</p>
                    </div>
                </div>
                <div className="xl:mt-[65px] mt-[39px]">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] sm:w-[70%] md:w-full">
                        {
                            aiRovolutionizingData.map((data, ind) => {
                                return (
                                    <div key={ind} className="border border-[#707070] xl:pt-[52px] xl:pb-[56px] xl:px-[40px] pt-[32px] pb-[32px] px-[26px]">
                                        <h3 className="4xl:text-[30px] xl:text-[26px] text-[20px] leading-tight text-[#006FBE] font-semibold">
                                            {data.title}
                                        </h3>
                                        <p className="text-[16px] 4xl:text-[22px] xl:text-[18px] font-normal xl:mt-[31px] mt-[22px] w-[90%] xl:w-full 4xl:w-[86%]">
                                            {data.desc}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* our capabilities section */}
            <section className="relative xl:mt-[133px] mt-[70px] xl:pt-[141px] pt-[45px] bg-no-repeat bg-cover bg-center
                    md:bg-[url('/images/home-health/our-capabilities-desk.webp')]
                    bg-[url('/images/home-health/Mobile/our-capabilities-mob.webp')]"
                alt={t('aiPoweredAlt')}>

                <div className="custom-container text-[#ffffff]">
                    <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight">
                        {t('ourCapabTitle')}
                    </h2>
                    <div className="grid lg:grid-cols-12 grid-cols-1 xl:mt-[36px] mt-[17px] lg:gap-[60px] gap-y-[17px]">
                        <div className="lg:col-span-5 col-span-12">
                            <h3 className="4xl:text-[42px] xl:text-[32px] text-[22px] leading-tight">
                                {t('ourCapabSubTitle')}
                            </h3>
                        </div>
                        <div className="lg:col-span-7 col-span-12">
                            <p className="text-[16px] 4xl:text-[20px] xl:text-[18px] font-normal w-[90%] md:w-[70%] lg:w-full 4xl:w-[90%]">
                                {t('ourCapabDesc')}
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 xl:mt-[79px] mt-[34px] md:w-[70%] lg:w-[90%] xl:w-[87%] lg:gap-x-[80px] lg:gap-y-[91px] gap-y-[55px]">
                        {
                            capabilitiesData.map((data, ind) => {
                                return (
                                    <div key={ind}>
                                        <h4 className="4xl:text-[36px] xl:text-[28px] text-[20px] leading-tight w-[90%] lg:w-full">
                                            {data.title}
                                        </h4>
                                        <p className="text-[16px] 4xl:text-[20px] xl:text-[18px] font-normal w-[90%] lg:w-full xl:mt-[35px] mt-[16px] 4xl:w-[98%]">
                                            {data.desc && data.desc}
                                        </p>
                                        <UnorderedList arrName={data.dataList} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[35px] mt-[17px] pl-[20px] w-[90%] md:w-full 4xl:w-[90%]" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="mt-[74px] xl:mt-[104px]">
                        <LearnMore btnName={t('learnMoreBtn')} locale={locale} bgcolor="#0C8AED" bordercolor="#0C8AED" />
                    </div>
                </div>
            </section>
            {/* agentchat section */}
            <section className="custom-container bg-[#0A6BB8] text-[#ffffff] xl:mt-[247px] mt-[174px] relative">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[80px] gap-y-[40px]">
                    <div className="relative mt-[-120px]">
                        <Image src="/images/home-health/Mobile/agent-chat-mob.webp" alt={t('agentchatAlt')} className="block md:hidden w-full h-full object-cover" width={0} height={0} priority />
                        <Image src="/images/home-health/agent-chat-desk.webp" alt={t('agentchatAlt')} className="hidden md:block w-full h-full object-cover md:h-[600px] lg:h-full" width={0} height={0} priority />
                    </div>
                    <div>
                        <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight lg:mt-[46px]">
                            {t('agentChatTitle')}
                        </h2>
                        <h3 className="4xl:text-[42px] xl:text-[32px] text-[22px] leading-tight xl:mt-[35px] mt-[17px] font-semibold w-[85%] md:w-full">
                            {t('agentChatSubTitle')}
                        </h3>
                        <p className="text-[16px] 4xl:text-[20px] xl:text-[18px] font-normal w-[90%] lg:w-full xl:mt-[35px] mt-[24px]">
                            {t('agentChatDesc')}
                        </p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 xl:mt-[91px] mt-[24px] gap-y-[32px] md:w-[90%] lg:w-full">
                    {
                        agentChat.map((data, ind) => {
                            const getXlPaddingRight = (ind) => {
                                if (ind === 2) return "xl:pr-0";
                                if (ind === 1) return "xl:pr-[73px]";
                                return "xl:pr-[40px]";
                            };
                            return (
                                <div
                                    key={ind}
                                    className={`border-l-2 border-[#ffffff] xl:pl-[32px] pl-[18px] ${getXlPaddingRight(ind)}`}>
                                    <h4 className="4xl:text-[32px] xl:text-[28px] text-[20px] leading-tight w-[90%] lg:w-full">
                                        {data.title}
                                    </h4>
                                    <p className="text-[16px] 4xl:text-[20px] xl:text-[18px] font-normal w-[90%] lg:w-full xl:mt-[21px] mt-[19px] 4xl:w-[98%]">
                                        {data.desc && data.desc}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="relative">
                    <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] gap-y-[19px] mt-[40px] xl:mt-[80px] items-stretch">
                        <div className="lg:col-span-3 col-span-12">
                            <h4 className="4xl:text-[36px] xl:text-[28px] text-[20px] leading-tight w-[90%] lg:w-full">
                                {t('agentChatSubTitle2')}
                            </h4>
                        </div>
                        <div className="lg:col-span-6 xl:col-span-7 col-span-12">
                            <UnorderedList arrName={homeHealth} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc pl-[20px] w-[90%] md:w-full 4xl:w-[90%] lg:pb-[120px]" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal" />
                        </div>
                        <div className="xl:col-span-2 lg:col-span-3 col-span-12 h-full">

                        </div>

                    </div>
                    <div className="lg:absolute lg:bottom-0 lg:right-0">
                        <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
                    </div>
                </div>
            </section>

            {/* related section */}
            <section className="custom-container xl:mt-[125px] mt-[64px]">
                <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight">
                    {t('relatedTitle')}
                </h2>
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-[60px] xl:gap-x-0 gap-y-[40px] xl:mt-[83px] mt-[40px] sm:w-[80%] xl:w-full">
                    {
                        relatedData.map((data, ind) => {
                            const paddingRight = (ind) => {
                                if (ind === 0) return "xl:pr-[60px] xl:border-r max-lg:border-b border-[d4d7db]";
                                if (ind === 1) return "max-lg:border-b border-[d4d7db] xl:border-r xl:px-[40px] "
                                if (ind === 2) return "xl:px-[40px] max-lg:border-b xl:border-r border-[d4d7db]";
                                if (ind === 3) return "xl:pl-[40px]";
                                return ""
                            };
                            return (
                                <div className={`${paddingRight(ind)} flex flex-col pb-[30px] xl:pb-0`} key={ind}>
                                    <h3 className="4xl:text-[30px] xl:text-[25px] text-[20px] leading-tight font-semibold text-[#006FBE]">
                                        {data.title}
                                    </h3>
                                    <p className="text-[16px] 4xl:text-[24px] xl:text-[18px] font-normal w-[90%] lg:w-full xl:mt-[31px] mt-[10px] xl:mb-[31px] mb-[18px]">
                                        {data.desc}
                                    </p>
                                    <div className="mt-auto">
                                        <LearnMore btnName={t('learnMoreBtn')} locale={locale} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* Contact Form */}
            <section className="custom-container xl:mt-[130px] xl:mb-[130px] mt-[65px] mb-[48px]">
                <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle')} className={"font-normal text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] xl:w-[60%] 4xl:w-[80%]"} />
            </section >
        </section>
    )
}

