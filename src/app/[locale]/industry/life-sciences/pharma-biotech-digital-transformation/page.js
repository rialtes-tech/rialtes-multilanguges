"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform"
import Seo from "@/app/[locale]/components/Seo";
import LearnMore from "@/app/[locale]/components/learnMore";
import Link from "next/link";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from 'next-intl';
import enContent from '../../../../../../messages/en/industry.json';
import esContent from '../../../../../../messages/es/industry.json'; 
import frContent from '../../../../../../messages/fr/industry.json';
import { changeLocalization } from "../../../components/changeLocalization";
import { useActiveLocale } from "@/app/[locale]/components/activeLanguages";

export default function Page() {
    const t = useTranslations('pharmaBiotech')
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { frActive, esActive, enActive } = useActiveLocale();
    const { thoughtData, whyRialtesData, salesforceLifeData, sapData, keyAiImpact, benefitsOfAiData, patientData, remoteData, agentChatData, salesforceAgentData, strategicChallengeData,schemaData } = content.pharmaBiotech;
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                canonical={`https://www.rialtes.com/${locale}/industry/life-sciences/pharma-biotech-digital-transformation/`}
            />
            <Script
                id="schema-pharma"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative group overflow-hidden h-[400px] md:h-[500px] 4xl:h-[650px]">
                <div className="hidden md:block">
                    <Image
                        src="/images/pharma/pharma-header-banner.webp"
                        alt={t('bannerAlt')}
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/pharma/pharma-header-banner-mobile.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                        <div className="col-span-12 xl:col-span-7 lg:col-span-9 text-white">
                            <h3 className="text-[18px] 4xl:text-[24px] xl:text-[20px] md:text-[18px] font-bold">
                                {t('headerTitle')}
                            </h3>
                            <h1 className="text-[26px] md:text-[30px] xl:text-[40px]  4xl:text-[60px] leading-tight mt-[11.5px] md:mt-[28.5px]  "  >
                                {t('headerSubTitle')}
                            </h1>

                            <h3 className="text-[18px] md:text-[24px] xl:text-[36px] 4xl:text-[45px] leading-tight w-[239px] 4xl:w-[650px] 2xl:w-[600px] xl:w-[580px] lg:w-[420px] md:w-[380px] mt-[11.5px] md:mt-[28.5px]">
                                {t('headerSubTitle2')}
                            </h3>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description */}
            <section className="xl:mt-16 mt-8 custom-container">
                <div className="grid lg:grid-cols-12 grid-cols-1">
                    <div className="lg:col-span-10 col-span-12">
                        <p className="4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px] mt-5 font-medium lg:font-normal">{t('pageDesc')}</p>
                        <p className="4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px] mt-5 font-medium lg:font-normal">{t('pageDesc1')} </p>
                    </div>
                    <div className="lg:col-span-2 col-span-12">
                    </div>
                </div>
            </section>
            {/* thought leadership section */}
            <section
                className={`relative group overflow-hidden text-white mt-16 xl:mt-20 
    ${frActive ? "4xl:h-[1100px] 2xl:h-[900px] xl:h-[990px] lg:h-[820px] md:h-[920px] sm:h-[1050px] h-[1200px] max-[432px]:h-[1360px] max-[374px]:h-[1500px]" : ""}
    ${esActive ? "4xl:h-[1080px] 2xl:h-[800px] xl:h-[990px] lg:h-[850px] md:h-[840px] sm:h-[1050px] h-[1150px] max-[432px]:h-[1300px] max-[356px]:h-[1500px]" : ""}
    ${enActive ? "3xl:h-[850px] xl:h-[920px] md:h-[720px] sm:h-[950px] h-[1150px] max-[374px]:h-[1300px]" : ""}`}>

                <div className="md:block hidden">
                    <Image
                        src="/images/pharma/pharma-thought-leadership.webp"
                        alt={t('thoughtLeadershipAlt')}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="md:hidden block">
                    <Image
                        src="/images/pharma/pharma-thought-leadership-mobile.webp"
                        alt={t('thoughtLeadershipAlt')}
                        style={{ objectFit: "cover", objectPosition: "35% 10%" }}
                        fill
                        priority
                    />
                </div>
                {/* thought leadership section */}

                <div className="custom-container absolute bottom-0 ">
                    <div className="grid md:grid-cols-12 grid-cols-1">
                        <div className="md:col-span-7 col-span-12">
                            <h2 className={`${(esActive || frActive) ? "4xl:text-[57px]  " : "4xl:text-[60px] "} text-[26px] md:text-[30px]  xl:text-[40px] mt-[400px]`}>{t('thoughtLeadershipTitle')}</h2>
                            <h3 className="4xl:text-[42px]  xl:text-[36px] md:text-[26px] text-[22px] xl:mt-5 mt-3 font-bold leading-tight lg:w-[94%]">{t('thoughtLeadershipSubTitle')}</h3>
                            <p className="4xl:text-[22px] xl:text-[18px]  md:text-[18px] text-[16px] mt-5 leading-tight">{t('thoughtLeadershipDesc')}</p>
                            <UnorderedList arrName={thoughtData} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] xl:text-[16px]  md:text-[18px] text-[16px] mt-5 leading-tight" liClassName="" />
                        </div>
                    </div>
                    <div
                        className="xl:mt-[67px] mt-[41px]">
                        <p className="4xl:text-[26px] xl:text-[20px] md:text-[20px] text-[18px] bg-[#073259] p-5 lg:p-10 text-white leading-tight">{t('thoughtLeadershipBlueBox')}</p>
                    </div>
                </div>
            </section>

            {/* leading pharma section */}
            <section className={`relative ${(frActive || esActive) ? "h-[1400px] sm:h-[1260px]  xl:h-[1200px]" : "h-[1300px] sm:h-[1260px] xl:h-[1000px]"}  mt-16 xl:mt-0`}>
                <div className="lg:block hidden">
                    <Image
                        src="/images/pharma/why-rialtes-pharma.webp"
                        alt={t('whyRialtesAlt')}
                        fill
                        style={{ objectFit: "cover", objectPosition: "65% 20%" }}
                        priority
                    />
                </div>
                <div className="lg:hidden block">
                    <Image
                        src="/images/pharma/why-rialtes-pharma-mobile.webp"
                        alt={t('whyRialtesAlt')}
                        style={{ objectFit: "cover", objectPosition: "20% 30%" }}
                        fill
                        priority
                    />
                </div>
                <div className="custom-container">
                    <div className={`relative p-6 md:p-12  ${(frActive || esActive) ? " 4xl:h-[470px] xl:h-[350px] w-[340px] max-[395px]:w-[320px] max-[365px]:w-[285px]" : " 4xl:h-[403px] xl:h-[303px] w-[280px]"} 4xl:w-[828px] 2xl:w-[800px] xl:w-[700px] lg:w-[650px] md:w-[500px]`}>
                        <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
                        <div className="relative bg-opacity-80 text-white z-10 xl:p-4 rounded-lg">
                            <h2 className="text-[26px] md:text-[30px] xl:text-[40px]  4xl:text-[60px] leading-tight 4xl:w-[698px] 2xl:w-[630px] xl:w-[580px] lg:w-[550px] md:w-[400px] w-[257px]">{t('leadingPharmaTitle')}</h2>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-[-280px] sm:bottom-[-80px] md:bottom-[-80px]">
                    <div className="custom-container grid grid-cols-1 gap-[21px] lg:gap-[32px] md:grid-cols-2 xl:grid-cols-3 text-black relative z-10">
                        {whyRialtesData.map((item, index) => (
                            <div key={index} className="bg-white xl:p-14 p-[40px] rounded border border-black sm:mx-auto sm:w-[96%] w-full md:w-full">
                                <h3 className="4xl:text-[24px] xl:text-[20px]  text-[20px] font-bold leading-tight ">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* strategic challenge section */}
            <>
                <div className="custom-container sm:mt-[147px] mt-[350px]  ">
                    <div className="w-full sm:w-[80%] xl:w-full 2xl:w-[80%] ">
                        <h2 className="text-[26px]  md:text-[30px]  xl:text-[40px] 4xl:text-[60px] leading-tight">
                            {t('strategicTitle')}
                        </h2>
                    </div>
                </div>
                <div className="custom-container max-md:px-0">
                    {strategicChallengeData.map((item, index) => (
                        <div
                            key={index}
                            className="lg:mt-[55px] mt-[50px]"
                            style={{ backgroundColor: item.bgColor }}>
                            <div className={`grid lg:grid-cols-12 grid-cols-1 max-lg:px-[36px]`}>
                                {index % 2 !== 0 && <div className="lg:col-span-1 col-span-12" />}
                                <div
                                    className={`lg:col-span-4 col-span-12 relative group overflow-hidden ${index % 2 === 0 ? "order-1 lg:order-2" : ""}`}>
                                    <div className="lg:block hidden">
                                        <Image
                                            src={item.imgDesktop}
                                            alt={item.imageAlt}
                                            fill
                                            priority
                                            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="lg:hidden block">
                                        <Image
                                            src={item.imgMobile}
                                            alt={item.imageAlt}
                                            width={600}
                                            height={400}
                                            priority
                                            className="w-full h-full object-cover mx-auto"
                                        />
                                    </div>
                                </div>
                                <div
                                    className={`lg:col-span-7 col-span-12 md:pt-[43px] pb-[69px] ${index % 2 === 0 ? "lg:px-[60px]" : "lg:pl-[60px] lg:pr-[40px]"
                                        } ${index % 2 === 0 ? "order-2 lg:order-1" : ""}`}>
                                    <div className="flex lg:gap-10 gap-3 lg:items-center lg:flex-row flex-col">
                                        <h2
                                            className="xl:text-[100px] text-[60px] font-bold"
                                            style={{ color: item.numberColor }}>
                                            {item.number}
                                        </h2>
                                        <h2 className="4xl:text-[42px] xl:text-[36px] md:text-[26px] text-[22px] xl:font-bold font-medium leading-tight  ">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <p className="4xl:text-[22px] xl:text-[18px] md:text-[18px]  text-[16px] xl:mt-3 mt-5 pr-10 xl:pr-0 font-medium lg:font-normal">
                                        {item.description}
                                    </p>
                                    <UnorderedList arrName={item.points} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] md:text-[18px] xl:text-[16px] text-[16px] mt-5 pr-8 xl:pr-0 leading-tight font-medium lg:font-normal" liClassName="" />
                                </div>
                                {index % 2 === 0 && <div className="lg:col-span-1 col-span-12 order-3"></div>}
                            </div>
                        </div>
                    ))}
                    <div className="mt-[20px] lg:mt-[40px] max-md:px-[36px]">
                        <LearnMore btnName={t('learnMoreBtn')}  locale={locale}/>
                    </div>
                </div>
            </>
            {/* deep expertise section */}
            <section className="relative group overflow-hidden h-auto text-white xl:pt-[99px] xl:pb-[175px] pt-[39px] pb-[150px] mt-[32px] xl:mt-[160px]">
                <div className="lg:block hidden">
                    <Image
                        src="/images/pharma/pharma-deep-expertise.webp"
                        alt={t('deepExpertiesAlt')}
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="lg:hidden block">
                    <Image
                        src="/images/pharma/pharma-deep-expertise-mobile.webp"
                        alt={t('deepExpertiesAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="h-full relative custom-container">
                    <div className="xl:w-[75%] w-[95%]">
                        <h2 className="text-[26px]  md:text-[30px]  xl:text-[40px] 4xl:text-[60px] leading-tight">{t('deepExpertiseTitle')}</h2>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-[158px] lg:gap-[108px] lg:mt-[60px] mt-[44px]">
                        <div className="4xl:w-[532px] 2xl:w-[510px]">
                            <div className="relative">
                                <Image
                                    src="/images/pharma/pharma-life-sciences-platform.webp"
                                    alt={t('lifeSciencesPlatformAlt')}
                                    priority
                                    height={0}
                                    width={0}
                                    className="w-full h-full"
                                />
                            </div>
                            <h3 className="4xl:text-[42px]  xl:text-[36px] md:text-[30px] text-[28px] mt-10 font-bold leading-tight">{t('deepExpertiseSubTitle')} </h3>
                            <h3 className="mt-5 4xl:text-[35px] xl:text-[28px] md:text-[26px] text-[22px] leading-tight">{t('deepExpertiseSubTitle2')}</h3>
                            <p className="4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px] mt-5">{t('deepExpertiseDesc')}</p>
                            <UnorderedList arrName={salesforceLifeData} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px]  xl:text-[16px] md:text-[18px] text-[16px] mt-5" liClassName="" />
                        </div>
                        <div>
                            <div className="relative mt-[70px] lg:mt-[180px]">
                                <Image
                                    src="/images/pharma/pharma-sap-operations.webp"
                                    alt={t('sapOperationsAlt')}
                                    priority
                                    height={0}
                                    width={0}
                                    className="w-full h-full"
                                />
                            </div>
                            <h3 className="4xl:text-[40px]  xl:text-[34px] md:text-[30px] text-[28px]  mt-10 font-bold leading-tight">{t('sapHanaTitle')} </h3>
                            <h3 className="mt-5 4xl:text-[35px] xl:text-[28px] lg:text-[26px] md:text-[28px] text-[22px] leading-tight pr-4 xl:pr-0">{t('sapHanaSubTitle')}</h3>
                            <p className="4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px]  mt-5 pr-10 xl:pr-5">{t('sapHanaDesc')}</p>
                            <UnorderedList arrName={sapData} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px]  mt-5 pr-4 xl:pr-20 leading-tight" liClassName="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* blue box of deep expertise */}
            <div className="custom-container absolute">
                <div className="lg:mt-[-80px] sm:mt-[-60px] mt-[-80px]">
                    <p className=" 4xl:w-[50%] 2xl:w-[56%] xl:w-[60%] lg:w-[66%] md:w-[80%] sm:w-[90%] w-[82%] 4xl:text-[26px] xl:text-[20px]  md:text-[20px] text-[18px] lg:py-[41px] py-[26px] lg:pl-[48px] px-[33px] bg-[#0E3157] text-white absolute leading-tight">{t('sapHanaBlueBox')}</p>
                </div>
            </div>

            {/* how AI is revolutionizing section */}
            <div className="custom-container h-full mt-[141px] lg:mt-[165px]">
                <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-[70px] lg:gap-[40px] gap-y-[21px]">
                    <div className="xl:col-span-7 lg:col-span-6 col-span-12">
                        <h2 className="text-[26px]  md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight">
                            {t('aiRevolTitle')}
                        </h2>
                    </div>
                    <div className="xl:col-span-5 lg:col-span-6  col-span-12">
                        <p className="4xl:text-[22px] xl:text-[18px]  md:text-[18px] text-[16px] lg:w-[80%] md:w-[96%] lg:float-right">
                            {t('aiRevolDesc')}
                        </p>
                    </div>
                </div>
            </div>
            {/* key ai impact card */}
            <div className="custom-container mt-[40px] xl:mt-[57px] max-md:px-0">
                <div className="text-white group overflow-hidden relative">
                    <div className="lg:block hidden">
                        <Image
                            src="/images/pharma/pharma-key-ai-impact.webp"
                            alt={t('keyImpactAlt')}
                            fill
                            style={{ objectFit: "cover", objectPosition: "70% 20%" }}
                            priority
                            className="transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="lg:hidden block">
                        <Image
                            src="/images/pharma/pharma-key-ai-impact-mobile.webp"
                            alt={t('keyImpactAlt')}
                            fill
                            style={{ objectFit: "cover", objectPosition: "70% 10%" }}
                            priority
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="grid lg:grid-cols-12 grid-cols-1 relative ">
                        <div className="lg:col-span-6 col-span-12 lg:mt-[93px] mt-[500px md:mt-[600px] sm:mt-[500px] mt-[480px] lg:ml-[61px] ml-[36px] lg:mb-[81px] mb-[40px]">
                            <h3 className="4xl:text-[40px] xl:text-[36px] md:text-[30px] text-[22px] font-bold lg:w-[680px] max-md:pr-[36px] leading-tight">{t('keyImpactTitle')}</h3>
                            <UnorderedList arrName={keyAiImpact} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] md:text-[18px] xl:text-[16px] lg:text-[16px] text-[16px] mt-5 lg:pr-4 pr-8" liClassName="" />
                            <LearnMore btnName={t('learnMoreBtn') }  locale={locale} bgcolor="#ffffff" textColor="#134874" />

                        </div>
                    </div>
                </div>
            </div>
            {/* benefits of ai card */}
            <div className="custom-container max-md:px-0">
                <div className=" text-white group overflow-hidden relative">
                    <div className="lg:block hidden">
                        <Image
                            src="/images/pharma/pharma-benefits-of-ai.webp"
                            alt={t('benefitsAlt')}
                            fill
                            style={{ objectFit: "cover", objectPosition: "70% 20%" }}
                            priority
                            className="transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="lg:hidden block">
                        <Image
                            src="/images/pharma/pharma-benefits-of-ai-mobile.webp"
                            alt={t('benefitsAlt')}
                            fill
                            style={{ objectFit: "cover", objectPosition: "70% 10%" }}
                            priority
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="grid lg:grid-cols-12 grid-cols-1 relative max-md:pr-[35px] text-black">
                        <div className="lg:col-span-5 col-span-12">
                        </div>
                        <div className="lg:col-span-7 lg:order-2 col-span-12 lg:mt-[93px] mt-[500px md:mt-[600px] sm:mt-[500px] mt-[480px] lg:ml-[61px] lg:mr-[20px] ml-[36px] lg:mb-[81px] mb-[40px]">
                            <h3 className="4xl:text-[40px] xl:text-[36px] md:text-[30px] text-[22px] font-bold  lg:w-[680px] max-[415px]:pr-5 leading-tight">{t('benefitsTitle')}</h3>
                            <UnorderedList arrName={benefitsOfAiData} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] xl:text-[18px] md:text-[18px] text-[16px] mt-5 xl:pr-20 pr-10" liClassName="" />
                            <div className="mt-5 xl:block hidden">
                                <LearnMore btnName={t('learnMoreBtn')}  locale={locale} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* patient centric and remote card */}
            <div className="bg-[#0C8AD4] custom-container lg:mt-[225px] mt-[125px] lg:pb-[180px] pb-[96px]">
                <div className="text-white relative">
                    <div className="grid lg:grid-cols-12 grid-cols-1 3xl:gap-[120px] lg:gap-[80px] xl:gap-[96px] gap-y-[59px]">
                        <div className="lg:col-span-6 col-span-12 mt-[-4rem] md:w-[80%] lg:w-full">
                            <div className="group overflow-hidden relative">
                                <Image
                                    src="/images/pharma/pharma-patient-centric-apps.webp"
                                    alt={t('patientCentricAlt')}
                                    priority
                                    height={0}
                                    width={0}
                                    className="xl:!h-[472px] xl:!w-[670px] !h-[252px] !w-[360px] transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                                />
                            </div>
                            <h2 className="mt-10 text-[26px]  md:text-[30px]  xl:text-[40px]   4xl:text-[60px] leading-tight">{t('patientTitle')}</h2>
                            <h3 className={`4xl:text-[42px] xl:text-[36px]  md:text-[30px] text-[22px] mt-10 font-bold leading-tight ${enActive ? "4xl:w-[670px] lg:w-[500px] md:w-[450px]" : ""}`}>{t('patientSubTitle')} </h3>
                            <p className={`4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px] xl:mt-10 mt-5 leading-tight ${enActive ? "4xl:w-[670px]  lg:w-[500px]" : " "} `}>{t('patientDesc')}</p>
                            <UnorderedList arrName={patientData} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px]  2xl:text-[16px] md:text-[18px] text-[16px] mt-5" liClassName="" />
                            <p className="bg-[#163055] 4xl:text-[26px] xl:text-[20px] md:text-[20px] text-[18px] p-4 xl:p-10 py-8 mt-10 leading-tight">{t('patientBlueBox')}</p>
                        </div>
                        <div className="lg:col-span-6 col-span-12 lg:mt-64 mt-0 md:w-[80%] lg:w-full">
                            <div className="relative group overflow-hidden">
                                <Image
                                    src="/images/pharma/pharma-remote-monitoring.webp"
                                    alt={t('remoteMonitoringAlt')}
                                    priority
                                    height={0}
                                    width={0}
                                    className="xl:!h-[472px] xl:!w-[670px] !h-[252px] !w-[360px] transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h2 className="mt-10 text-[26px]  md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight pr-10 xl:pr-0">{t('remoteTitle')}</h2>
                            <p className="4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px] mt-10 pr-10 xl:pr-0 leading-tight">{t('remoteSubTitle')}</p>
                            <UnorderedList arrName={remoteData} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] mt-5 pr-10 leading-tight" liClassName="" />
                            <p className="bg-[#163055] absolute 4xl:text-[26px] xl:text-[20px] md:text-[20px] text-[18px] p-4 sm:p-10  lg:mt-[100px] xl:mt-[80px] 2xl:mt-[80px] 4xl:mt-[100px] mt-[40px] leading-tight">{t('remoteBlueBox')}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* agent chat section */}
            <div className={`custom-container lg:mt-[160px] mt-[140px] max-[490px]:mt-[180px] ${(frActive || esActive)} h-full relative`}>
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-[80px]">
                    <div className="xl:col-span-6 col-span-12">
                        <div className="group overflow-hidden relative h-full w-full">
                            <Image
                                src="/images/pharma/pharma-agentchat-whatsapp.webp"
                                alt={t('agentChatAlt')}
                                priority
                                height={0}
                                width={0}
                                className="xl:!h-full xl:!w-full md:!h-[550px] md:!w-[550px] !h-[389px] !w-[360px] object-cover"
                            />
                        </div>
                    </div>
                    <div className="xl:col-span-6 lg:w-full md:w-[650px]">
                        <h2 className="4xl:text-[50px] xl:text-[40px] md:text-[30px] text-[26px] mt-8 xl:mt-0">{t('agentChatTitle')}</h2>
                        <h3 className="4xl:text-[42px] xl:text-[36px] lg:text-[26px] md:text-[22px] text-[24px] lg:font-bold font-medium leading-tight">{t('agentChatSubTitle')}</h3>
                        <p className="4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px] xl:mt-10 mt-6">{t('agentChatDesc')}</p>
                        <h3 className="4xl:text-[30px] xl:text-[26px] lg:text-[20px] text-[18px] font-bold xl:mt-10 mt-6">{t('keyFeatureTitle')}</h3>
                        <UnorderedList arrName={agentChatData} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] xl:text-[16px] md:text-[18px] text-[16px] mt-5 font-bold leading-tight" liClassName="" />
                        <div className={`mt-6 xl:mb-[90px]`}>
                            <LearnMore href='/products/agentchat' btnName={t('knowMoreBtn')}  locale={locale} />
                        </div>
                    </div>
                </div>
                <div className="h-full mt-20 xl:mt-0">
                    <p className="4xl:text-[26px] xl:text-[20px] md:text-[20px] text-[18px] bg-[#068EDA] p-6 lg:p-10 text-white mt-[-2rem] lg:absolute md:w-[80%] 4xl:w-[60%] 2xl:w-[68%] xl:w-[70%] lg:w-[75%]">{t('agentChatBlueBox')}</p>
                </div>
            </div>
            {/* salesforce section */}
            <div className="bg-[#184671] text-white xl:pb-[150px] pb-40 mt-[65px] lg:mt-0">
                <div className="mt-[30px] custom-container text-black xl:py-20">
                    <div className="group overflow-hidden relative mt-0 lg:mt-[230px] xl:mt-[194px]">
                        <div className="xl:block hidden">
                            <Image
                                src="/images/pharma/pharma-agentforce-salesforce.webp"
                                alt={t('agentForceAlt')}
                                priority
                                height={0}
                                width={0}
                                className="h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/pharma/pharma-agentforce-salesforce-mobile.webp"
                                alt={t('agentForceAlt')}
                                priority
                                height={0}
                                width={0}
                                className="h-[382px] w-[370px] md:h-[500px] md:w-[500px]"
                            />
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 mt-10 text-white">
                        <div className="xl:col-span-5 col-span-12">
                            <h2 className="4xl:text-[50px] xl:text-[40px]  md:text-[30px] text-[26px]">{t('salesforceTitle')}</h2>
                            <h3 className="4xl:text-[42px]  xl:text-[36px] md:text-[30px] text-[26px] leading-tight font-semibold">{t('salesforceSubTitle')}</h3>
                            <div className="xl:mt-5">
                                <button className="bg-white hover:bg-[#ffffff] xl:text-[20px] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-black py-3 px-8 transition duration-300 order-4 mt-6">
                                    <Link href='/solutions/artificial-intelligence/salesforce-agentforce-consulting'>{t('knowMoreBtn')}</Link>
                                </button>
                            </div>

                        </div>
                        <div className="xl:col-span-1 col-span-12">
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <p className="4xl:text-[22px] xl:text-[18px] md:text-[18px] text-[16px] xl:mt-5 mt-10 font-light">{t('salesforceDesc')}</p>
                            <UnorderedList arrName={salesforceAgentData} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] xl:text-[16px] md:text-[18px]  text-[16px] mt-5 font-medium pr-6 xl:pr-0" liClassName="" />
                        </div>
                    </div>
                </div>
                <div className="absolute">
                    <div className="custom-container">
                        <p className="4xl:text-[26px] xl:text-[20px]  md:text-[20px] text-[18px] bg-[#068EDA] p-6 lg:p-10 text-white mt-[60px] sm:mt-[80px] lg:w-[80%]">{t('salesforceBlueBox')}</p>
                    </div>
                </div>
            </div>
            {/* Contact Form */}
            <div className={`xl:mt-32 ${(frActive || esActive) ? "max-[360px]:mt-20 mt-14" : "mt-12"} custom-container text-black py-20`}>
                <ContactForm title={t('contactTitle')} className={"max-w-[62rem]  font-light text-[26px]  md:text-[30px] xl:text-[40px] 4xl:text-[60px] leading-tight pr-10 xl:pr-0"} />
            </div>
        </div >
    );
}