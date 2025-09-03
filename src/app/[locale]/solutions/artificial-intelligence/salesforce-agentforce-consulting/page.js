"use client";
import Image from "next/image";
import FeaturedCarousel from '../../../components/servicesFeaturedCarousel';
import ServicesBlogs from '../../../components/servicesBlogs';
import ExploreMoreCarousel from '../../../components/servicesExploreMoreCarousel';
import ContactForm from "../../../components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/solutions.json';
import esContent from '../../../../../../messages/es/solutions.json';
import frContent from '../../../../../../messages/fr/solutions.json';
import Script from "next/script";
import { changeLocalization } from "../../../components/changeLocalization.js";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Salesforce Agentforce Consulting Services",
    "url": "https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting/",
    "description": "Rialtes offers Salesforce Agentforce Consulting services to help businesses deploy autonomous AI agents that automate sales, service, and marketing processes with real-time data and low-code tools.",
    "inLanguage": "en",
    "publisher": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.rialtes.com/images/homepage/logo.svg"
        }
    },
    "mainEntity": {
        "@type": "Service",
        "name": "Salesforce Agentforce Consulting",
        "serviceType": "AI Agent Implementation, Customization, Automation Consulting",
        "provider": {
            "@type": "Organization",
            "name": "Rialtes",
            "url": "https://www.rialtes.com"
        },
        "areaServed": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "India" },
            { "@type": "Country", "name": "Singapore" }
        ],
        "audience": {
            "@type": "Audience",
            "audienceType": "Sales Leaders, Customer Service Heads, Marketing Managers, IT and AI Architects"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Agentforce Consulting Services by Rialtes",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Agentforce Implementation",
                        "description": "Deploy and configure AI agents in Salesforce to automate workflows across business functions."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Agent Builder Configuration",
                        "description": "Low-code tool to build and customize agents using Prompt Builder and Model Builder."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Salesforce Data Cloud Integration",
                        "description": "Connect and unify customer data for real-time AI agent actions and insights."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Prompt & Model Builder Setup",
                        "description": "Create trusted AI prompts and deploy external AI models using Salesforce data."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Atlas Reasoning Engine Enablement",
                        "description": "Leverage the Atlas Engine to create autonomous agents capable of adapting and reasoning."
                    }
                }
            ]
        }
    }
}
export default function Agentforce() {
    const t = useTranslations("agentForce");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { salesForce, salesForce2, agentBlocks, industryBenifite, slides } = content.agentForce;

    return (
        <section>
            <Seo
                title="Agentforce Consulting Services | Rialtes"
                description="Agentforce Consulting Services by Rialtes combines AI and expertise to help businesses optimize workflows, scale smarter, and achieve lasting success."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting/"
            />
            <Script
                id="schema-agentforce"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
            {/* hero section */}
            <section className="relative group overflow-hidden">
                <div className="relative w-full h-[360px] md:h-[400px] xl:h-[540px] lg:h-[520px] 4xl:h-[740px] 2xl:h-[600px]">
                    <Image
                        src="/images/salesforce-consulting-services/Agentforce banner 2.webp"
                        alt="Agentforce banner"
                        fill
                        className="transition-transform duration-500 group-hover:scale-110 object-cover"
                        priority
                    />
                </div>
                <div className="grid xl:grid-cols-12 absolute px-6 lg:pr-0 top-[14%] lg:top-[24%] md:top-[15%] text-white w-full">
                    <div className="xl:col-span-6 lg:col-span-11 sm:col-span-11 col-span-12"></div>
                    <div className="xl:col-span-5 space-y-4 xl:pl-[90px]">
                        <h4 className="font-bold lg:text-[24px] text-[18px] md:text-[20px]" >{t('headerTitle')}</h4>
                        <h2 className={`mt-3 leading-tight 2xl:text-[45px] xl:text-[40px] md:text-[30px] 4xl:text-[57px]  lg:text-[38px]"
                         ${locale === "es"
                                    ? "2xl:w-[600px] xl:w-[500px] 4xl:w-[750px] md:w-[280px]"
                                    : locale === "fr"
                                        ? "2xl:w-[600px] xl:w-[500px] 4xl:w-[750px] md:w-[280px]"
                                        : "w-[300px] 4xl:w-[600px] 2xl:w-[600px] xl:w-[500px]"
                                }`}
                        
                        >
                            {t('headerDesc')}
                        </h2> 
                        <div>
                            <div className="relative w-[120px] h-[40px] 4xl:w-[300px] 4xl:h-[102px] lg:w-[200px] lg:h-[60px] md:w-[150px] md:h-[50px] 2xl:w-[260px] 2xl:h-[80px] xl:w-[240px] xl-h-[70px]">
                                <Image
                                    src="/images/salesforce-consulting-services/salesforce-partner.webp"
                                    alt="salesforce-partner"
                                    fill
                                    className="object-contain"
                                    priority />
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-1 col-span-12"></div>
                </div>
            </section>
            <div className="grid lg:grid-cols-10 gap-5 px-6 custom-container lg:mt-16 mt-10">
                <div className="lg:col-span-6">
                    <h1 className="leading-tight text-[22px] md:text-[40px] lg:text-[38px] xl:text-[40px] 2xl:text-[56px] 4xl:text-[60px] ">{t('headerOne')}<br /> {t('headerTwo')}</h1>
                </div>
            </div>
            <div className="flex xl:gap-20 gap-10 px-6 custom-container flex-col lg:flex-row lg:mt-10 mt-5">
                <div className="leading-tight md:w-[700px]">
                    <p className="text-[16px] md:text-[18px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] 4xl:text-[20px] leading-tight">{t('headerParaOne')}</p>
                    <p className="mt-6 text-[16px] md:text-[18px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] leading-tight 4xl:text-[20px]">{t('headerParaTwo')}</p>
                </div>
                <div>
                    <Image
                        src="/images/salesforce-consulting-services/agentforce logo.webp"
                        className="4xl:w-[398px] 4xl:h-[78px] 2xl:w-[300px] 2xl:h-[65px] xl:w-[280px] xl:h-[60px] lg:w-[240px] lg:h-[55px] md:w-[220px]  md:4-[75px] w-[150px] h-[40px] bg-transperent"
                        alt="agentforce logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>
            <section className="mt-[50px] md:mt-[60px] lg:mt-[94px] lg:pr-0 custom-container">
                <h2 className="xl:w-[630px] md:w-[700px] 2xl:w-[850px] 4xl:w-[1000px] xl:h-[100px] 4xl:h-[219px] 2xl:h-[190px] lg:h-[100px] leading-tight text-[22px] md:text-[40px] xl:text-[40px] 2xl:text-[24px] 4xl:text-[60px] lg:text-[38px] lg:w-[600px]">{t('manageTitle')}</h2>
                <div className="grid lg:grid-cols-4 grid-cols-1 lg:mt-16 md:grid-cols-2">
                    {salesForce.map((sales) => {
                        return (
                            <div key={sales.id}>
                                <div className="mt-10">
                                    <Image
                                        src={sales.imageUrl}
                                        alt={`${sales.title} image`}
                                        className="w-20 h-20"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{
                                            objectFit: "cover",
                                        }}
                                        priority />
                                </div>
                                <h4 className="mt-5 text-[16px] lg:text-[14px] md:text-[20px] xl:text-[16px] 2xl:text-[20px] 4xl:text-[24px] 4xl:w-[260px] 2xl:w-[210px] xl:w-[180px] lg:w-[150px] w-[180px] ">{sales.title}</h4>
                            </div>
                        )
                    })}
                </div>
                <h2 className="mt-[60px] md:mt-[70px] lg:mt-[104px] xl:w-[900px] lg:w-[850px] 2xl:w-[1250px] 4xl:w-[1300px] leading-tight text-[22px] md:text-[40px] lg:text-[38px] xl:text-[40px] 2xl:text-[56px] 4xl:text-[60px]">{t('leverageTitle')}</h2>
                <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:mt-10 gap-3 mt-10 ">
                    {salesForce2.map((sales) => {
                        return (
                            <div key={sales.id} className="border-2 p-8 hover:bg-[#A9D6EE] hover:border-transparent transition-all duration-300 ">
                                <h4 className="mt-5 text-[#1F3F69] xl:text-[20px] md:text-[18px] 2xl:text-[26px] 4xl:text-[30px] 2xl:w-[300px]">{sales.title}</h4>
                                <p className="mt-5 text-[16px] xl:text-[16px] md:text-[18px] lg:text-[15px] 2xl:text-[20px] 4xl:text-[22px] 4xl:w-[300px]" >{sales.description}</p>
                            </div>
                        )
                    })}
                </div>
                <LearnMore />
            </section>
            <section className="mt-[60px] md:mt-[70px] lg:mt-[104px] px-6 custom-container">
                <h2 className="xl:w-[700px] md:w-[700px] 2xl:w-[1000px] 4xl:w-[980px] leading-tight text-[22px] md:text-[40px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px] lg:text-[38px]">
                    {t('blocksTitle')}</h2>
                <div className={`grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  xl:gap-16 gap-5 md:gap-12"
                 ${locale === "es"
                                    ? "4xl:mt-20 2xl:mt-10 xl:mt-16 mt-10"
                                    : locale === "fr" 
                                        ? "mt-16"
                                        : "mt-10"
                                }`}
                >
                    {agentBlocks.map((block, index) => (
                        <div key={index} className="flex xl:gap-5 gap-2">
                            <div>
                                <Image
                                    src={block.image}
                                    alt={block.title}
                                    className="lg:w-[150px] h-20 w-[100px]"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                            <div className="w-[256px] h-[109px]">
                                <h4 className="xl:text-[20px] md:text-[22px] lg:text-[16px] 2xl:text-[26px] 4xl:text-[30px] 2xl:w-[300px]">
                                    {block.title}
                                </h4>
                                <p className="xl:text-[16px] md:text-[20px] lg:text-[14px] 2xl:text-[18px] 4xl:text-[20px]">
                                    {block.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* //industries benifites */}
            <section className={`px-6 custom-container
             ${locale === "es"
                                    ? "4xl:mt-40 2xl:mt-32 xl:mt-32 mt-20 md:mt-40"
                                    : locale === "fr"
                                        ? "4xl:mt-40 2xl:mt-32 xl:mt-32 mt-20 md:mt-40"
                                        : "mt-[75px] md:mt-[120px] lg:mt-[120px]"
                                }`}
            >
                <h2 className="w-full leading-tight xl:w-[900px] md:w-[700px] 2xl:w-[900px] 4xl:w-[1100px]   text-[22px] md:text-[40px] xl:text-[40px] 2xl:text-[48px] 4xl:text-[60px] lg:text-[38px]">{t('industryTitle')}</h2>
                <div className="grid lg:grid-cols-3 lg:gap-20 gap-10 grid-cols-1 md:grid-cols-2">
                    {industryBenifite.map((benifite) => {
                        return (
                            <div key={benifite.id}>
                                <div>
                                    <Image
                                        src={benifite.imageUrl}
                                        alt={`${benifite.title} image`}
                                        className="pt-10"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                        priority
                                    />
                                </div>
                                <h4 className="mt-5 text-[20px] 4xl:text-[30px] 2xl:text-[26px] xl:text-[22px] md:text-[24px] lg:text-[20px]">{benifite.title}</h4>
                                <p className="mt-3 text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] 4xl:text-[20px] 2xl:w-[400px] lg:w-[300px] xl:w-[350px]">{benifite.description}</p>
                                <LearnMore />
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="bg-[#F5F5F5] mt-[60px] md:mt-[70px] lg:mt-[94px] py-20">
                <div className="custom-container px-6 lg:pr-0">
                    <FeaturedCarousel />
                </div>
            </section>
            <div className="mt-[60px] md:mt-[70px] lg:mt-[94px] mb-20 custom-container lg:pr-0">
                <ServicesBlogs slides={slides} />
            </div>
            <section className='px-6 custom-container lg:pr-0 lg:mt-20 bg-[#808080] pb-20 mt-10 py-20'>
                <ExploreMoreCarousel />
            </section>
            <section className="px-6 custom-container lg:pr-0 lg:mt-20 pb-20 mt-10">
                <ContactForm title={t('contactTitle')} className=" 2xl:text-[56px] xl:text-[46px] xl:w-[1000px] 2xl:w-[1200px]  4xl:text-[60px] 4xl:w-[1200px] lg:text-[38px] lg:w-[900px] leading-tight text-[24px]  md:text-[32px]" />
            </section>
        </section>
    )
}

