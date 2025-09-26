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
import { useActiveLocale } from "@/app/[locale]/components/activeLanguages";
export default function page() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Salesforce Financial Services Cloud Consulting & Implementation Services",
        "alternateName": "RialFinance+ Salesforce FSC Services",
        "url": "https://www.rialtes.com/services/lob/salesforce-fsc-consulting-rialfinanceplus/",
        "description": "Salesforce Financial Services Cloud Consulting by Rialtes’ RialFinance+ offers AI-led advisory, implementation, and post-go-live support for FSC success.",
        "provider": {
            "@type": "Organization",
            "name": "Rialtes",
            "url": "https://www.rialtes.com",
            "logo": "https://www.rialtes.com/images/homepage/logo.svg",
            "sameAs": [
                "https://www.linkedin.com/company/rialtes-technologies-llc",
                "https://x.com/Rialtestech",
                "https://www.youtube.com/@rialtes"
            ]
        },
        "areaServed": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "Singapore" },
            { "@type": "Country", "name": "India" },
            { "@type": "Continent", "name": "Europe" }
        ],
        "serviceType": "Salesforce FSC Strategy, AI Advisory, Custom Implementation, and Support",
        "category": "Salesforce Financial Services Cloud Consulting",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "RialFinance+ FSC Services Catalog",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Advisory & AI-Led Strategy",
                        "description": "Financial services strategy aligned to FSC features, AI use cases, and regulatory needs across retail, commercial, and corporate banking."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Implementation & Configuration",
                        "description": "Certified Salesforce FSC implementation tailored to banking, lending, insurance, and asset management workflows with full compliance."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Agentforce & AI Integration",
                        "description": "Pre-built bots and AI modules for onboarding, fraud detection, lending, and wealth — seamlessly embedded into FSC via Agentforce."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Quality Assurance & Compliance",
                        "description": "Risk and compliance validations, sandbox testing, UAT, and security checks aligned with global financial regulations."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Integration with SAP & Data Cloud",
                        "description": "Zero Copy Data integration with Salesforce and SAP ecosystems for a unified client profile and real-time financial insights."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Post Go-Live Support & Enhancements",
                        "description": "Global 24/7 support, training, enhancement sprints, FSC optimizations, and AI performance monitoring via RialFinance+."
                    }
                }
            ]
        },
        "additionalProperty": [
            {
                "@type": "PropertyValue",
                "name": "Certified Salesforce Financial Cloud Expertise",
                "value": "Experts in FSC, Data Cloud, Agentforce, and industry modules like lending, insurance, and wealth management."
            },
            {
                "@type": "PropertyValue",
                "name": "AI-Driven FSC Transformation with Agentforce",
                "value": "Conversational AI, compliance automation, and customer intelligence powered by Salesforce Agentforce."
            },
            {
                "@type": "PropertyValue",
                "name": "Integrated Real Estate & Finance with Exelona",
                "value": "Extend FSC to manage real estate portfolios, leasing, investor services, and revenue — all in one platform."
            }
        ]
    }
    const t = useTranslations('rialFinance')
    const locale = useLocale();
    const { frActive, esActive, enActive } = useActiveLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { startWithData, exelonaData, agentChat, agentforceData, salesforceData, howWeDeliverData, whyRialtesData, deepDiveData } = content.rialFinance
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Salesforce Financial Services Cloud Consulting | RialFinance+"
                description="Rialtes RialFinance+ delivers Salesforce Financial Services Cloud (FSC) consulting with AI-led design, strategic advisory, implementation, and 24/7 support."
                canonical="https://www.rialtes.com/services/lob/salesforce-fsc-consulting-rialfinanceplus/"
            />
            <Script
                id="schema-realfinance"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* herosection */}
            <section className="relative group overflow-hidden h-[420px] lg:h-[550px] 4xl:h-[650px]">
                <div className="hidden md:block">
                    <Image
                        src="/images/services/rial-finance/hero-desk-banner.webp"
                        alt="desktop banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "55% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/services/rial-finance/Mobile/hero-mob-banner.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "5% 20%" }}
                        priority
                    />
                </div>
                <div className="relative h-full custom-container sm:flex sm:items-center pt-[70px] sm:pt-0 ">
                    <div className="grid grid-cols-12 w-full">
                        <div className="4xl:col-span-8 sm:col-span-7 md:col-span-6 lg:col-span-6 col-span-9 max-[400px]:col-span-12">
                            <h3 className="text-[18px] md:text-[24px] font-bold">
                                {t('headerTitle')}
                            </h3>
                            <h1 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] lg:mt-[28.5px] w-[88%] sm:w-full">
                                {t('headerSubTitle')}
                            </h1>
                            <h2 className="text-[#000000] text-[20px] leading-tight xl:text-[28px] 4xl:text-[35px] mt-[14px] lg:mt-[46px] font-bold 4xl:w-[80%]">
                                {t('headerSubTitle2')}
                            </h2>
                        </div>
                        <div className="4xl:col-span-4 sm:col-span-5 md:col-span-6 lg:col-span-6 col-span-3">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description section */}
            <section className="custom-container xl:mt-[99px] mt-[50px]">
                <div>
                    <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] w-[90%] sm:w-full">
                        {t('pageDescTitle')}  <div className="sm:block hidden" />{t('pageDescTitle2')} <div className="sm:block hidden" />{t('pageDescTitle3')}
                    </h2>
                    <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight font-normal xl:mt-[43px] mt-[30px] w-[90%] sm:w-full xl:w-[80%]">
                        {t('pageDesc')}
                        <br />
                        <br />
                        {t('pageDesc2')}
                    </p>
                </div>
            </section>
            {/* start with agentforce section */}
            <section className="xl:mt-[124px] mt-[88px]">
                <div className="custom-container lg:pl-0 max-lg:px-0">
                    <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] gap-y-[44px]">
                        <div className="lg:col-span-7 col-span-12">
                            <div className="lg:block hidden w-full h-full">
                                <Image
                                    src="/images/services/rial-finance/start-with-desk.webp"
                                    alt="Start with Agentforce Adoption img"
                                    width={0}
                                    height={0}
                                    className="w-full h-full object-cover xl:object-[75%_20%] 4xl:object-[25%_20%]"
                                    priority
                                />
                            </div>
                            {/* mob image */}
                            <div className="lg:hidden block w-full h-full">
                                <Image
                                    src="/images/services/rial-finance/Mobile/start-with-mob.webp"
                                    alt="Start with Agentforce Adoption img"
                                    width={0}
                                    height={0}
                                    className="w-full h-full md:h-[600px] object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-5 col-span-12 max-lg:px-[36px] w-full lg:w-full">
                            <h2 className="text-[25px] xl:text-[40px] 4xl:text-[60px] leading-tight">
                                {t('startWithTitle')}
                            </h2>
                            <h3 className="text-[22px] xl:text-[30px] 4xl:text-[36px] font-semibold xl:mt-[25px] mt-[17px]">
                                {t('startWithSubTitle')}
                            </h3>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] xl:mt-[25px] mt-[17px] font-normal">
                                {t('startWithDesc')}
                            </p>
                            <UnorderedList arrName={startWithData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[25px] mt-[17px] pl-[20px]" liClassName="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal" />
                            <div className="xl:mt-[62px] mt-[46px]">
                                <LearnMore btnName={t('learnMoreBtn')} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="custom-container xl:mt-[46px] mt-[53px]">
                    <p className="xl:py-[31px] xl:px-[38px] py-[24px] px-[34px] bg-[#073259] text-[#ffffff] font-normal w-fit 4xl:text-[24px] xl:text-[20px] text-[18px]">{t('startWithBlueBox')}</p>
                </div>
            </section>
            {/* introducing rialfinance+ */}
            <section className="xl:mt-[121px] mt-[84px]">
                <div className="custom-container">
                    <p className="xl:text-[36px] 4xl:text-[40px] text-[18px] leading-tight font-light">
                        {t('introducingTitle')}
                    </p>
                    <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px]">
                        {t('introducingSubTitle')}
                    </h2>
                </div>
                <div className="custom-container xl:mt-[25px] mt-[17px] 4xl:!pr-[142px] xl:!pr-[52px] lg:!pr-[42px]">
                    <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] gap-y-[17px]">
                        <div className="lg:col-span-5 col-span-12 w-[90%] md:w-[80%] lg:w-full">
                            <h3 className="text-[20px] leading-tight xl:text-[26px] 4xl:text-[36px] font-semibold">
                                {t('introducingSubTitle2')}
                            </h3>
                        </div>
                        <div className="lg:col-span-7 col-span-12 w-[90%] md:w-[80%] lg:w-full">
                            <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight font-normal">
                                {t('introducingDesc')}
                            </p>
                        </div>
                    </div>
                    <h2 className="text-[18px] leading-tight xl:text-[26px] 4xl:text-[32px] xl:mt-[82px] mt-[41px] font-semibold">
                        {t('deepDiveTitle')}
                    </h2>
                </div>
                <div className="xl:mt-[90px] mt-[80px]">
                    {
                        deepDiveData.map((data, ind) => {
                            return (
                                <div className="relative custom-container xl:mt-[120px] mt-[80px] border-t border-[#707070]" key={ind}>
                                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[60px] 4xl:gap-[20px]">
                                        <div className="xl:pt-[60px] pt-[40px]">
                                            <div className="absolute top-[-50px]">
                                                <p className="text-[50px] px-4 pl-1 py-2 bg-[#ffffff] font-bold">{data.id}</p>
                                            </div>
                                            <h2 className="text-[20px] leading-tight xl:text-[30px] 4xl:text-[40px] text-[#006FBE] font-bold">
                                                {data.title}
                                            </h2>
                                            <h3 className="text-[17px] leading-tight xl:text-[24px] 4xl:text-[32px] font-medium xl:mt-[20px] mt-[16px]">
                                                {data.subtitle}
                                            </h3>
                                            {/* mob image */}
                                            <div className="md:hidden block mt-[23px]">
                                                <Image
                                                    src={data.mobImg}
                                                    alt={`${data.title} image`}
                                                    width={0}
                                                    height={0}
                                                    className="w-full h-full object-cover"
                                                    priority
                                                />
                                            </div>
                                            <UnorderedList arrName={data.dataList} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc pl-[20px] w-[90%] md:w-full xl:mt-[40px] mt-[23px]" liClassName="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normaltext-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight font-normal" />
                                        </div>
                                        <div>
                                            <div className="md:block hidden w-full h-full mt-[-20px]">
                                                <Image
                                                    src={data.deskImg}
                                                    alt="desktop img"
                                                    width={0}
                                                    height={0}
                                                    className="w-full h-full object-cover"
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:mt-5 4xl:mt-5 2xl:mt-5  mt-[27px]">
                                        <LearnMore btnName={t('learnMoreBtn')} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* exelona section */}
            <section className="xl:mt-[70px] mt-[63px]">
                <div className="custom-container md:pl-0 max-md:px-0">
                    <div className="lg:block hidden w-full h-full">
                        <Image
                            src="/images/services/rial-finance/exelona-desk.webp"
                            alt="exelona img"
                            width={0}
                            height={0}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                    {/* mob image */}
                    <div className="lg:hidden block w-full h-full">
                        <Image
                            src="/images/services/rial-finance/Mobile/exelona-mob.webp"
                            alt="exelona img"
                            width={0}
                            height={0}
                            className="w-full h-full md:h-[600px] object-cover"
                            priority
                        />
                    </div>
                </div>
                <div className="custom-container 4xl:!pr-[142px] xl:!pr-[36px] md:!pr-0 max-md:px-0 md:mt-[-120px] relative z-20">
                    <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[60px] 4xl:gap-[20px] gap-y-[30px] bg-[#0E3157] text-[#ffffff] xl:pt-[87px] xl:pl-[70px] xl:pr-[40px] xl:pb-[127px] pt-[41px] pb-[93px] px-[36px]">
                        <div className="md:col-span-6 col-span-12">
                            <h2 className="text-[26px] xl:text-[40px] 4xl:text-[60px] w-[90%] md:w-full lg:w-[60%] xl:w-full">
                                {t('exelonaTitle')}
                            </h2>
                            <h3 className="text-[22px] xl:text-[30px] 4xl:text-[36px] font-semibold xl:mt-[25px] mt-[17px] 4xl:w-[80%]">
                                {t('exelonaSubTitle')}
                            </h3>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] xl:mt-[25px] mt-[17px] font-normal 4xl:w-[70%]">
                                {t('exelonaDesc')}
                            </p>
                        </div>
                        <div className="md:col-span-6 col-span-12">
                            <UnorderedList arrName={exelonaData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc pl-[20px] w-[90%] md:w-full" liClassName="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal" />
                            <div className="xl:mt-[75px] mt-[55px]">
                                <LearnMore btnName={t('learnMoreBtn')} bgcolor="#006FBE" bordercolor="#006FBE" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute xl:px-[70px] px-[36px] mt-[-50px]">
                        <p className="xl:py-[31px] xl:px-[38px] py-[24px] px-[34px] bg-[#006FBE] text-[#ffffff] font-normal w-fit 4xl:text-[24px] xl:text-[20px] text-[18px]"> {t('exelonaBlueBox')} </p>
                    </div>
                </div>
            </section>
            {/* agent chat section */}
            <section className="xl:mt-[181px] mt-[123px] bg-[#184671] custom-container">
                <div className="lg:block hidden w-full h-full">
                    <Image
                        src="/images/services/rial-finance/agentchat-desk.webp"
                        alt="AgentChat img"
                        width={0}
                        height={0}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>
                {/* mob image */}
                <div className="lg:hidden block w-full h-full">
                    <Image
                        src="/images/services/rial-finance/Mobile/agentchat-mob.webp"
                        alt="AgentChat img"
                        width={0}
                        height={0}
                        className="w-full h-full md:h-[600px] object-cover"
                        priority
                    />
                </div>
                <h2 className="text-[26px] xl:text-[36px] 4xl:text-[50px] text-[#ffffff] xl:pt-[50px] pt-[41px]">
                    {t('agentChatTitle')}
                </h2>
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[60px] 4xl:gap-[80px] gap-y-[30px] text-[#ffffff] xl:mt-[23px] mt-[16px]">
                    <div className="md:col-span-5 col-span-12">
                        <h3 className="text-[20px] xl:text-[28px] 4xl:text-[38px] font-semibold w-[90%] xl:w-[90%] 4xl:w-full">
                            {t('agentChatSubTitle')}
                        </h3>
                        <p className="xl:text-[18px] 4xl:text-[20px] text-[16px] xl:mt-[35px] mt-[16px] font-normal w-[90%] xl:w-full">
                            {t('agentChatDesc')}
                        </p>
                    </div>
                    <div className="md:col-span-7 col-span-12">
                        <UnorderedList arrName={agentChat} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc pl-[20px] w-[90%] md:w-full" liClassName="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal" />
                        <p className="xl:text-[18px] 4xl:text-[22px] text-[18px] xl:mt-[52px] mt-[29px] font-normal">
                            {t('agentChatDesc2')}
                        </p>
                        <div className="xl:mt-[55px] mt-[37px]">
                            <LearnMore btnName={t('learnMoreBtn')} bgcolor="#006FBE" bordercolor="#006FBE" />
                        </div>
                    </div>
                </div>
            </section>
            {/* agent force section */}
            <section className="xl:mt-[73px] mt-[42px] custom-container">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] lg:gap-[80px] gap-y-[29px]">
                    <div className="md:order-1 order-2">
                        <h2 className="text-[26px] xl:text-[36px] 4xl:text-[50px]">
                            {t('agentForceTitle')}
                        </h2>
                        <h3 className="text-[20px] xl:text-[28px] 4xl:text-[38px] font-semibold w-[90%] xl:w-[90%] 4xl:w-full mt-[13px] xl:mt-[23px]">
                            {t('agentForceSubTitle')}
                        </h3>
                        <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] xl:mt-[35px] mt-[16px] font-normal w-[90%] xl:w-full">
                            {t('agentForceDesc')}
                        </p>
                        <UnorderedList arrName={agentforceData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[43px] mt-[16] pl-[20px] w-[90%] md:w-full" liClassName="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal" />
                        <p className="xl:text-[18px] 4xl:text-[22px] text-[18px] xl:mt-[49px] mt-[48px] font-normal w-[90%] md:w-full">
                            {t('agentForceDesc2')}
                        </p>
                        <div className="xl:mt-[55px] mt-[37px]">
                            <LearnMore btnName={t('learnMoreBtn')} bgcolor="#006FBE" bordercolor="#006FBE" />
                        </div>
                    </div>
                    <div className="md:order-2 order-1">
                        <div className="lg:block hidden w-full h-full">
                            <Image
                                src="/images/services/rial-finance/agentforce-desk.webp"
                                alt="agentforce img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        {/* mob image */}
                        <div className="lg:hidden block w-full h-full">
                            <Image
                                src="/images/services/rial-finance/Mobile/agentforce-mob.webp"
                                alt="agentforce img"
                                width={0}
                                height={0}
                                className="w-full h-full md:h-[600px] object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* salesforce section */}
            <section className="xl:mt-[147px] mt-[75px] custom-container md:pl-0">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] lg:gap-[60px] gap-y-[29px]">
                    <div className="md:col-span-7 col-span-12">
                        <div className="md:block hidden w-full h-full relative">
                            <Image
                                src="/images/services/rial-finance/salesforce-desk.webp"
                                alt="salesforce img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                            <div className="absolute right-0 mt-[-60px]">
                                <p className="xl:py-[31px] xl:px-[38px] py-[24px] px-[34px] bg-[#073259] text-[#ffffff] font-normal w-fit 4xl:text-[24px] xl:text-[20px] text-[18px]"> {t('salesforceBlueBox')} </p>
                            </div>
                        </div>
                        {/* mob image */}
                        <div className="md:hidden block w-full h-full">
                            <Image
                                src="/images/services/rial-finance/Mobile/salesforce-mob.webp"
                                alt="salesforce img"
                                width={0}
                                height={0}
                                className="w-full h-full md:h-[600px] object-cover"
                                priority
                            />
                        </div>
                    </div>
                    <div className="md:col-span-5 col-span-12">
                        <h2 className="text-[26px] xl:text-[36px] 4xl:text-[48px] w-[90%] md:w-full">
                            {t('salesforceTitle')}
                        </h2>
                        <h3 className="text-[20px] xl:text-[28px] 4xl:text-[38px] font-semibold w-[90%] xl:w-[90%] 4xl:w-full mt-[16px] xl:mt-[33px]">
                            {t('salesforceSubTitle')}
                        </h3>
                        <ul className="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[33px] mt-[17px] pl-[20px] w-[86%] md:w-full">
                            {salesforceData.map((data, ind) => (
                                <li
                                    className="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal"
                                    key={ind}>
                                    {data}
                                </li>
                            ))}
                        </ul>
                        <div className="xl:mt-[71px] mt-[37px]">
                            <LearnMore btnName={t('learnMoreBtn')} bgcolor="#006FBE" bordercolor="#006FBE" />
                        </div>
                        <div className="md:hidden mt-[40px]">
                            <p className="xl:py-[31px] xl:px-[38px] py-[24px] px-[34px] bg-[#073259] text-[#ffffff] font-normal w-fit 4xl:text-[24px] xl:text-[20px] text-[18px]">{t('salesforceBlueBox')}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* how we deliver section */}
            <section className="xl:mt-[147px] mt-[75px] custom-container lg:pr-0 max-lg:px-0">
                <div className="grid lg:grid-cols-12 grid-cols-1">
                    <div className="lg:col-span-5 col-span-12 lg:mr-[-90px] relative z-20 lg:order-1 order-2">
                        <div className="bg-[#5D5F63] max-lg:mx-[36px] text-[#ffffff] xl:pt-[57px] xl:pb-[101px] xl:pl-[80px] xl:pr-[60px] lg:my-[60px] pt-[34px] px-[30px] pb-[60px]">
                            <h2 className="text-[26px] xl:text-[36px] 4xl:text-[48px] w-[90%] md:w-full">
                                {t('howWeDeliverTitle')}
                            </h2>
                            <h3 className="text-[20px] xl:text-[28px] 4xl:text-[38px] font-semibold mt-[16px] xl:mt-[35px] w-[90%] lg:w-full">
                                {t('howWeDeliverSubTitle')}
                            </h3>
                            <UnorderedList arrName={howWeDeliverData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[33px] mt-[17px] pl-[20px] w-[86%] md:w-full 4xl:w-[90%]" liClassName="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal" />
                            <div className="xl:mt-[40px] mt-[10px] absolute">
                                <LearnMore btnName={t('learnMoreBtn')} />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 col-span-12 lg:order-2 order-1">
                        <div className="lg:block hidden w-full h-full">
                            <Image
                                src="/images/services/rial-finance/how-we-deliver-desk.webp"
                                alt="how-we-deliver img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        {/* mob image */}
                        <div className="lg:hidden block w-full h-full">
                            <Image
                                src="/images/services/rial-finance/Mobile/how-we-deliver-mob.webp"
                                alt="how-we-deliver img"
                                width={0}
                                height={0}
                                className="w-full h-full md:h-[600px] object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* why rialtes section */}
            <section className="custom-container max-md:px-0 3xl:!pr-[142px] xl:!pr-[36px] xl:mt-[163px] mt-[83px] relative">
                <div className="relative">
                    <div className="lg:w-[70%]">
                        <div className="lg:block hidden w-full h-full">
                            <Image
                                src="/images/services/rial-finance/why-rialtes-desk.webp"
                                alt="why-rialtes img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover xl:h-[790px] 2xl:h-full"
                                priority
                            />
                        </div>
                        {/* mob image */}
                        <div className="lg:hidden block w-full h-full">
                            <Image
                                src="/images/services/rial-finance/Mobile/why-rialtes-mob.webp"
                                alt="why-rialtes img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                    <div className="lg:absolute lg:right-0 xl:top-[-90px] lg:top-[-40px] lg:w-[50%] xl:w-[48%] 3xl:w-[40%] 4xl:w-[50%]">
                        <div className="bg-[#006FBE] text-[#ffffff] 4xl:pt-[79px] 4xl:pl-[67px] 4xl:pr-[60px] xl:pt-[54px] xl:pl-[50px] xl:pr-[50px] pt-[34px] px-[36px]">
                            <h2
                                className={`text-[26px] w-[90%] md:w-full 
                                    ${esActive ? "4xl:text-[52px] 2xl:text-[28px] xl:text-[37px]" : ""} 
                                    ${frActive ? "4xl:text-[40px] 2xl:text-[28px] xl:text-[30px] lg:text-[22px]" : ""} 
                                    ${enActive ? "4xl:text-[60px] xl:text-[40px]" : ""}`}>
                                {t('whyRialtesTitle')}
                            </h2>
                            <h3 className="text-[20px] xl:text-[28px] 4xl:text-[36px] font-semibold mt-[16px] xl:mt-[27px] w-[90%] lg:w-full">
                                {t('whyRialtesSubTitle')}
                            </h3>
                            <UnorderedList arrName={whyRialtesData} ulClassName="xl:space-y-[27px] space-y-[19px] list-disc xl:mt-[39px] mt-[16px] pl-[20px] w-[86%] md:w-full" liClassName="text-[16px] xl:text-[19px] 4xl:text-[22px] leading-tight font-normal" />
                            <div className="4xl:mt-[53px] mt-[34px]">
                                <LearnMore btnName={t('learnMoreBtn')} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Form */}
            < div className="custom-container lg:mt-[108px] lg:mb-[92px] mt-[41px] mb-[45px]">
                <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle')} subtitle1={t('contactSubTitle2')} className={"xl:text-[40px] 4xl:text-[60px] text-[26px] xl:w-[68%] 4xl:w-[80%]"} />
            </div >
        </div>
    )
}

