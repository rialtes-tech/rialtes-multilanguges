import ContactForm from "@/app/[locale]/components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/services.json';
import esContent from '../../../../../../messages/es/services.json';
import Image from "next/image";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
export default function page() {
    const t = useTranslations("salesforceAgent");
    const locale = useLocale();
    const homepageContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { startYourAIData, salesforceagentData, unlockData, rialChatData, ourGlobalData, rialtesSalesforceData, ourSalesforceData, migrateData, certifiedData, whyChooseData } = homepageContent.salesforceAgent;
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Salesforce Managed Services",
        "name": "SalesforceAgent+ — Always-On, AI-Ready Salesforce Managed Services",
        "provider": {
            "@type": "Organization",
            "name": "Rialtes Technologies",
            "url": "https://www.rialtes.com",
            "logo": "https://www.rialtes.com/images/homepage/logo.svg",
            "sameAs": [
                "https://www.linkedin.com/company/rialtes-technologies-llc",
                "https://x.com/rialtestech"
            ]
        },
        "areaServed": {
            "@type": "Place",
            "name": ["USA", "Canada", "Singapore", "India"]
        },
        "description": "Rialtes' SalesforceAgent+ is a next-gen Salesforce managed services offering that delivers 24x7 support, AI-powered innovations, seamless MuleSoft integrations, and specialized industry cloud expertise. Empower your Salesforce with Agentforce, Einstein GPT, and zero-copy SAP data cloud integration.",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "SalesforceAgent+ Services Catalog",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "AI-Driven Salesforce Support",
                        "description": "Conversational AI, Einstein GPT, and Agentforce for sales, service, and field operations."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Lightning Component Development",
                        "description": "Custom LWC and responsive UX for modern Salesforce experiences."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "MuleSoft Integrations",
                        "description": "Secure, API-led integrations with SAP, Oracle, NetSuite, Workday, and more."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Salesforce Data Migrations",
                        "description": "Secure, compliant transitions from legacy CRMs to Salesforce."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Salesforce Industry Cloud Solutions",
                        "description": "Healthcare, Manufacturing, Education, Automotive, and more — with compliance-ready workflows."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Tableau CRM & Salesforce Data Cloud",
                        "description": "Unified customer profiles, zero-copy data, and predictive analytics."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "RialChat - WhatsApp for Salesforce",
                        "description": "Free WhatsApp messaging, AI bots, and notifications — embedded inside Salesforce."
                    }
                }
            ]
        },
        "audience": {
            "@type": "Audience",
            "audienceType": ["CIO", "CTO", "CMO", "IT Heads", "Customer Experience Leaders"]
        },
        "brand": {
            "@type": "Brand",
            "name": "SalesforceAgent+"
        }
    }

    return (
        <section>
            <Seo
                title="Salesforce Managed Services Provider | Rialtes SalesforceAgent+"
                description="Looking for a Salesforce managed services partner and provider? Rialtes drives innovation with SalesforceAgent+, making your platform smarter, faster, and AI-ready."
                canonical="https://www.rialtes.com/services/application-services/salesforce-managed-services-provider-salesforceagentplus/"
            />
            <Script
                id="schema-salesforceplus"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* herosection */}
            <section className="relative group overflow-hidden h-[399px] lg:h-[650px] ">
                <div className="hidden md:block">
                    <Image
                        src="/images/services/salesforce-agentforce/hero-desk-banner.webp"
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
                        src="/images/services/salesforce-agentforce/Mobile/hero-mob-banner.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "5% 40%" }}
                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                        <div className="col-span-12 text-[#ffffff]">
                            <h3 className="text-[18px] lg:text-[24px] font-bold">
                                {t('headerTitle')}
                            </h3>
                            <h1 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px]">
                                {t('headerSubTitleone')} <br />  {t('headerSubTitletwo')}<br /> {t('headerSubTitleThree')}
                            </h1>
                            <h4 className="text-[20px] leading-tight xl:text-[28px] 4xl:text-[35px] font-bold xl:mt-[23px] mt-[15px]">
                                {t('headerOne')}<br /> {t('headerTwo')}
                            </h4>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>
            {/* page desc section */}
            <section className="custom-container xl:mt-[135px] mt-[42px]">
                <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px]">
                    <div className="lg:col-span-6 xl:col-span-7 col-span-12">
                        <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light md:w-[90%] lg:w-[80%] xl:w-[90%] 2xl:w-[70%] 4xl:w-full">
                            {t('empowerTitle')}
                        </h2>
                    </div>
                    <div className="lg:col-span-6 xl:col-span-5 col-span-12">
                        <p className="xl:text-19px] 4xl:text-[22px] text-[16px] leading-tight mt-[23px] lg:mt-[10px]">
                            {t('empowerSubtitle')}
                        </p>
                    </div>
                </div>
            </section>
            {/* start your AI section */}
            <section className="xl:mt-[94px] mt-[49px]">
                <div className="block md:hidden w-full h-full">
                    <Image
                        src="/images/services/salesforce-agentforce/Mobile/start-your-ai-mob-img.webp"
                        alt="start your AI image"
                        className="w-full h-full object-cover"
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                {/* Desktop image */}
                <div className="hidden md:block w-full h-full 4xl:pr-[80px] 2xl:pr-[60px] xl:pr-[40px] lg:pr-[20px]">
                    <Image
                        src="/images/services/salesforce-agentforce/start-your-ai-desk-img.webp"
                        alt="start your AI image"
                        className="w-full h-full object-cover"
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                <div className="relative z-20 2xl:mt-[-230px] xl:mt-[-160px] lg:mt-[-120px] md:mt-[-120px] sm:mt-[-180px] mt-[-120px]">
                    <div className="custom-container">
                        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px] 2xl:gap-[80px] bg-[#006FBE] xl:pt-[64px] pt-[26px] xl:pl-[61px] 2xl:pl-[81px] xl:pr-[81px] px-[26px] pl-[36px] pr-[46px] max-[360px]:px-[26px] md:px-[36px] text-[#ffffff]">
                            <div className="lg:col-span-6 xl:col-span-6 col-span-12">
                                <div className="h-full flex flex-col">
                                    <div className="xl:mb-[61px]">
                                        <h2 className="2xl:text-[60px] xl:text-[40px] text-[26px] leading-tight font-light lg:w-[60%] xl:w-[80%] 2xl:w-full">
                                            {t('aiTitle')}
                                        </h2>
                                        <h3 className="xl:text-[30px] 4xl:text-[36px] text-[22px] mt-[18px] xl:mt-[31px] leading-tight font-semibold lg:w-[70%] xl:w-full">
                                            {t('aiSubTitle')}
                                        </h3>
                                        <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[28px] mt-[23px] font-light">
                                            {t('aiSubTitleOne')}
                                        </p>
                                    </div>
                                    <div className="mt-auto lg:block hidden">
                                        <LearnMore />
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-6 xl:col-span-6 col-span-12">
                                <ul className="list-disc xl:space-y-[27px] space-y-[19px] max-md:pl-[26px]">
                                    {
                                        startYourAIData.map((data, ind) => {
                                            return (
                                                <div key={ind}>
                                                    <li className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight lg:mt-0 mt-[23px]">
                                                        <span className="font-bold">{data.title}</span> {data.subtitle}
                                                    </li>
                                                </div>
                                            )
                                        })
                                    }
                                </ul>
                                <p className="xl:text-[20px] 4xl:text-[24px] text-[17px] leading-tight xl:mt-[36px] mt-[38px] font-light lg:mb-[56px]">
                                    {t('aiPara')}
                                </p>
                                <div className="mt-[48px] lg:hidden block">
                                    <LearnMore />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* salesforceagent section */}
            <section className="custom-container lg:mt-[98px] mt-[48px]">
                <h2 className="xl:text-[40px] 4xl:text-[60px] text-[26px] leading-tight font-light max-sm:w-[80%]">
                    {t('manageTitle')}
                </h2>
                <h3 className="xl:text-[36px] 4xl:text-[30px] text-[22px] leading-tight font-semibold xl:mt-[34px] mt-[15px] max-[345px]:w-full max-sm:w-[90%]">
                    {t('titleOne')} <br />  {t('titleTwo')} <br />  {t('titleThree')}
                </h3>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] xl:gap-y-[89px] lg:gap-y-[59px] gap-y-[68px] xl:mt-[106px] mt-[59px] 2xl:w-[80%] xl:w-[90%] md:w-[86%] sm:w-[70%]">
                    {
                        salesforceagentData.map((data, ind) => {
                            return (
                                <div key={ind} className="border border-[#707070] xl:px-[40px] xl:pb-[46px] xl:pt-[90px] px-[21px] pb-[34px] pt-[55px]">
                                    <h4 className={`w-fit max-xl:pr-[20px] pl-[10px] xl:text-[26px] 4xl:text-[30px] text-[20px] leading-tight text-[#006FBE] font-semibold bg-[#ffffff] ${ind == 1 || ind == 2 && "xl:w-[88%]"} ${ind == 4 ? "xl:mt-[-110px]" : "xl:mt-[-124px]"} md:mt-[-73px] mt-[-70px]`}>
                                        {data.title}
                                    </h4>
                                    <UnorderedList arrName={data.list} ulClassName="list-disc xl:space-y-[27px] space-y-[19px] xl:mt-[54px] mt-[30px] xl:ml-[26px] ml-[20px]" liClassName="xl:text-[21px] 4xl:text-[22px] text-[16px] leading-tight" />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* unlock ai section */}
            <section className="custom-container xl:mt-[71px] mt-[72px]">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-y-[36px] lg:gap-[60px] 2xl:gap-[80px]">
                    <>
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/Mobile/unlock-mob-img.webp"
                                alt="unlock ai image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/unlock-desk-img.webp"
                                alt="unlock ai image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                    </>
                    <div className="my-auto">
                        <h2 className="xl:text-[40px] 4xl:text-[60px] text-[26px] leading-tight font-light">
                            {t('dataTitle')}
                        </h2>
                        <h3 className="xl:text-[30px] 4xl:text-[36px] text-[22px] mt-[18px] xl:mt-[31px] leading-tight font-semibold w-[88%] md:w-full">
                            {t('dataSubtitle')}
                        </h3>
                        <UnorderedList arrName={unlockData} ulClassName="list-disc xl:mt-[35px] mt-[29px] lg:ml-[26px] ml-[20px]" liClassName="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[23px]" />
                        <div className="mt-[40px] xl:mt-[53px] xl:p-[32px] p-[24px] bg-[#006FBE] text-[#ffffff] w-[88%] md:w-[90%] lg:w-full">
                            <p className="xl:text-[20px] 4xl:text-[24px] text-[18px] leading-tight font-normal">
                                {t('dataDesc')}
                            </p>
                        </div>
                        <div className="xl:mt-[53px] mt-[20px]">
                            <LearnMore />
                        </div>
                    </div>
                </div>
            </section>
            {/* rial chat section */}
            <section className="xl:mt-[134px] mt-[72px]">
                <div className="block lg:hidden w-full h-full">
                    <Image
                        src="/images/services/salesforce-agentforce/Mobile/rial-chat-mob-img.webp"
                        alt="rial chat image"
                        className="w-full h-full object-cover"
                        width={0}
                        height={0}
                        priority
                    />
                </div>
                {/* Desktop image */}
                <div className="2xl:mx-[80px] xl:mx-[40px] lg:mx-[20px]">
                    <div className="hidden lg:block w-full h-full">
                        <Image
                            src="/images/services/salesforce-agentforce/rial-chat-desk-img.webp"
                            alt="rial chat image"
                            className="w-full h-full object-cover"
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                </div>
                <div className="custom-container max-lg:px-0">
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[21px] lg:gap-[60px] 2xl:gap-[80px] lg:bg-[#006FBE] bg-[#068EDA] xl:pb-[106px] pb-[77px] xl:pt-[64px] pt-[26px] xl:pl-[61px] 2xl:pl-[81px] xl:pr-[81px] px-[36px] md:px-[36px] text-[#ffffff]">
                        <div className="lg:col-span-6 xl:col-span-6 col-span-12">
                            <div className="h-full flex flex-col">
                                <div>
                                    <h2 className="4xl:text-[58px] xl:text-[40px] text-[26px] leading-tight font-light w-[80%] lg:w-[70%] xl:w-full 3xl:w-[80%] 4xl:w-full">
                                        {t('freeTitle')}
                                    </h2>
                                    <h3 className="xl:text-[30px] 4xl:text-[36px] text-[22px] mt-[18px] xl:mt-[31px] lg:w-[70%] xl:w-full leading-tight font-semibold">
                                        {t('freeSubTitle')}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 xl:col-span-6 col-span-12">
                            <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight font-light w-[90%] md:w-[70%] lg:w-full">
                                {t('freeDesc')}
                            </p>
                            <UnorderedList arrName={rialChatData} ulClassName="list-disc xl:space-y-[27px] space-y-[19px] xl:mt-[36px] mt-[25px] xl:ml-[26px] ml-[20px] w-[90%] lg:w-[90%] xl:w-full 3xl:w-[80%]" liClassName="xl:text-[19px] 4xl:text-[22x] text-[16px] leading-tight lg:mt-0 mt-[23px]" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[10px] lg:gap-[20px] px-[36px] xl:pl-[61px] 2xl:pl-[81px] xl:mt-[-50px] lg:mt-[-40px] mt-[-40px] xl:pr-[81px]">
                        <div className="lg:col-span-9 col-span-12">
                            <div className="xl:py-[28px] xl:px-[31px] py-[22px] px-[25px] bg-[#073259] text-[#ffffff] sm:w-fit">
                                <p className="xl:text-[21px] 4xl:text-[24px] text-[18px] leading-tight font-normal">
                                    {t('freeDescOne')}
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-3 col-span-12">
                            <div className="flex flex-row w-full lg:mt-[-10px] xl:mt-0">
                                <div className="lg:ml-auto">
                                    <LearnMore btnName={t('knowMore')} href="https://www.rialtes.com/products/agentchat/" arialabel="agent chat" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* our global section */}
            <section className="custom-container xl:mt-[117px] mt-[58px]">
                <h2 className="xl:text-[40px] 4xl:text-[60px] text-[26px] leading-tight font-light w-[90%] 4xl:w-[90%] md:w-[80%] xl:w-[80%] lg:w-[60%]">
                    {t('globalTitle')}
                </h2>

                <h3 className="xl:text-[24px] 4xl:text-[36px] text-[20px] leading-tight xl:mt-[36px] mt-[22px] font-semibold w-[80%] lg:w-full">
                    {t('globalSubTitle')}
                </h3>
                <UnorderedList arrName={ourGlobalData} ulClassName="list-disc xl:space-y-[27px] space-y-[19px] xl:mt-[58px] mt-[25px] xl:ml-[26px] ml-[20px] md:w-[65%] lg:w-[55%] 2xl:w-[50%]" liClassName="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight" />
            </section>
            {/* rialtes salesforce section */}
            <section className="custom-container xl:mt-[129px] mt-[72px]">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-y-[36px] lg:gap-[60px] xl:gap-[40px] 2xl:gap-[60px]">
                    <>
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/Mobile/rialtes-salesforce-mob-img.webp"
                                alt="rialtes salesforce image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/rialtes-salesforce-desk-img.webp"
                                alt="rialtes salesforce image"
                                className="w-full h-full object-cover"
                                style={{ objectPosition: "95% 20%" }}
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                    </>
                    <div className="my-auto">
                        <h2 className="xl:text-[40px] 4xl:text-[60px] text-[26px] leading-tight font-light">
                            {t('salesforceTitle')}
                        </h2>
                        <h3 className="xl:text-[30px] 4xl:text-[36px] text-[22px] mt-[18px] xl:mt-[35px] leading-tight font-semibold">
                            {t('salesforceSubTitle')}
                        </h3>
                        <UnorderedList arrName={rialtesSalesforceData} ulClassName="list-disc xl:mt-[52px] mt-[31px] lg:ml-[26px] ml-[20px]" liClassName="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[23px]" />
                        <div className="mt-[54px] xl:mt-[32px] xl:px-[31px]  xl:py-[26px] p-[24px] bg-[#163055] text-[#ffffff] md:w-[90%] lg:w-full">
                            <p className="xl:text-[20px] 4xl:text-[24px] text-[18px] leading-tight font-normal">
                                {t('salesforceDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* our salesforce section */}
            <section>
                <div className="xl:mt-[155px] mt-[110px] bg-[url('/images/services/salesforce-agentforce/Mobile/our-salesforce-mob-bg.webp')] md:bg-[url('/images/services/salesforce-agentforce/our-salesforce-desk-bg.webp')] bg-cover bg-no-repeat bg-center xl:pt-[84px] pt-[52px] xl:pb-[103px] pb-[142px] text-[#ffffff]">
                    <div className="custom-container">
                        <h2 className="xl:text-[40px] 4xl:text-[60px] text-[26px] leading-tight font-light xl:w-[70%] 2xl:w-[60%] lg:w-[40%] sm:w-[60%]">
                            {t('ourTitle')}
                        </h2>
                        <h3 className="xl:text-[26px] 4xl:text-[36px] text-[20px] leading-tight xl:mt-[47px] mt-[31px]">
                            {t('ourSubTitle')}
                        </h3>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-[20px] gap-y-[21px] lg:mt-[65px] mt-[38px] xl:w-[96%] 4xl:w-[95%] md:w-[94%] sm:w-[70%]">
                            {
                                ourSalesforceData.map((data, ind) => {
                                    return (
                                        <div key={ind} className="2xl:pt-[39px] 2xl:px-[49px] 2xl:pb-[49px] pt-[33px] px-[22px] pb-[38px] bg-[#ffffff]">
                                            <p className="xl:text-[20px] 4xl:text-[26px] text-[20px] leading-tight text-[#006FBE] font-semibold">
                                                {data.title}
                                            </p>
                                            <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[23px] mt-[16px] text-[#000000]">
                                                {data.desc}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="custom-container">
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-[21px] lg:gap-[20px] xl:mt-[-50px] lg:mt-[-40px] mt-[-40px]">
                        <div className="lg:col-span-9 col-span-12">
                            <div className="xl:py-[28px] xl:px-[31px] py-[22px] px-[25px] bg-[#006FBE] text-[#ffffff] sm:w-fit">
                                <p className="xl:text-[21px] 4xl:text-[24px] text-[18px] leading-tight font-normal">
                                    {t('ourPara')}
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-3 col-span-12">
                            <div className="flex flex-row w-full lg:mt-[-10px] xl:mt-0">
                                <div className="lg:ml-auto">
                                    <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* migrate salesforce section */}
            <section className="custom-container xl:mt-[197px] mt-[72px]">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[36px] md:gap-[20px]">
                    <div className="my-auto md:order-1 order-2">
                        <h2 className="xl:text-[40px] 4xl:text-[60px] text-[26px] leading-tight font-light">
                            {t('migrateTitle')}
                        </h2>
                        <h3 className="xl:text-[28px] 4xl:text-[36px] text-[20px] mt-[24px] xl:mt-[37px] leading-tight font-semibold">
                            {t('migrateSubTitle')}
                        </h3>
                        <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[37px] mt-[23px] font-normal xl:w-[80%]">
                            {t('migrateDesc')}
                        </p>
                        <UnorderedList arrName={migrateData} ulClassName="list-disc xl:mt-[52px] mt-[31px] md:ml-[26px] ml-[20px] xl:w-[80%]" liClassName="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[23px]" />
                        <div className="mt-[34px] xl:mt-[63px] xl:pl-[31px] xl:py-[26px] p-[24px] bg-[#163055] text-[#ffffff] w-fit md:w-[90%] lg:w-full">
                            <p className="xl:text-[19px] 4xl:text-[24px] text-[18px] leading-tight font-normal">
                                {t('migrateDescOne')}
                            </p>
                        </div>
                    </div>
                    <div className="md:order-2 order-1">
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/Mobile/migrate-mob-img.webp"
                                alt="migrate salesforce image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/migrate-desk-img.webp"
                                alt="migrate salesforce image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* certified salesforce section */}
            <section className="custom-container  4xl:!pr-[142px] 2xl:!pr-[80px] xl:!pr-[50px] lg:!pr-[42px] xl:mt-[125px] mt-[83px] md:pl-0 max-md:px-0">
                <div className="grid md:grid-cols-12 grid-cols-1">
                    <div className="md:col-span-7 xl:col-span-7">
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/Mobile/certified-mob-img.webp"
                                alt="certified salesforce image"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        {/* Desktop image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/services/salesforce-agentforce/certified-desk-img.webp"
                                alt="certified salesforce image"
                                className="w-full h-full object-cover"
                                style={{ objectPosition: "35% 20%" }}
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                    </div>
                    <div className="md:col-span-5 xl:col-span-5">
                        <div className="bg-[#67C774] xl:pt-[47px] xl:px-[60px] 2xl:px-[80px] xl:pb-[92px] pt-[41px] px-[26px] pb-[79px] md:mt-[20%] max-md:mx-[36px]">
                            <h2 className="4xl:text-[60px] xl:text-[39px] text-[26px] leading-tight font-light sm:w-[80%] md:w-full lg:w-[70%] xl:w-full">
                                {t('certifiedTitle')}
                            </h2>
                            <UnorderedList arrName={certifiedData} ulClassName="list-disc xl:mt-[44px] mt-[28px] md:ml-[26px] ml-[20px]" liClassName="xl:text-[21px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[23px]" />
                            <div className="absolute xl:mt-[40px] mt-[30px]">
                                <LearnMore />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* why choose section */}
            <section className="custom-container xl:mt-[125px] mt-[83px]">
                <h2 className="xl:text-[40px] 4xl:text-[60px] text-[26px] leading-tight font-light">
                    {t('whyTitle')}</h2>
                <h3 className="xl:text-[28px] 4xl:text-[36px] text-[20px] mt-[20px] xl:mt-[40px] leading-tight font-semibold sm:w-[70%] md:w-[50%] 2xl:w-[50%] xl:w-[54%] lg:w-[40%]">
                    {t('whySubTitle')}
                </h3>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[60px] gap-y-[60px] xl:gap-y-[80px] 2xl:gap-y-[110px] xl:gap-[60px] 2xl:gap-[80px] xl:mt-[68px] mt-[70px]">
                    {
                        whyChooseData.map((data, ind) => {
                            return (
                                <div key={ind}>
                                    <div>
                                        <Image
                                            src={data.img}
                                            alt="Why Choose Rialtes? image"
                                            className="lg:w-[139px] lg:h-[139px] w-[100px] h-[100px]"
                                            width={0}
                                            height={0}
                                            priority
                                        />
                                    </div>
                                    <p className="xl:text-[21px] 4xl:text-[23px] text-[18px] leading-tight lg:mt-[45px] mt-[32px] font-semibold md:w-[80%] xl:w-full 2xl:w-[90%] sm:w-[48%]">
                                        {data.data}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* Contact Form */}
            < div className="custom-container xl:mt-[117px] xl:mb-[104px] mt-[104px] mb-[45px]">
                <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle')} subtitle1={t('contactSubTitleOne')} className="4xl:text-[60px] xl:text-[40px] text-[26px]" />
            </div >
        </section>
    )
}