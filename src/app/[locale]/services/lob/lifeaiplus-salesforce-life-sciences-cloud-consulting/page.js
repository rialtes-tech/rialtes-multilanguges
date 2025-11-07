"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform";
import Seo from "@/app/[locale]/components/Seo";
import LearnMore from "@/app/[locale]/components/learnMore";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/services.json';
import esContent from '../../../../../../messages/es/services.json';
import frContent from '../../../../../../messages/fr/services.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "LifeAI+ Salesforce Life Sciences Cloud Consulting",
    "url": "https://www.rialtes.com/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting/",
    "description": "Rialtes LifeAI+ is an end-to-end Salesforce Life Sciences Cloud consulting service empowering life sciences organizations with AI-driven compliance, automation, and patient engagement solutions.",
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
        "name": "Rialtes LifeAI+ for Salesforce Life Sciences Cloud",
        "serviceType": "Salesforce Life Sciences Cloud Consulting",
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
            "audienceType": "Pharmaceutical, Biotech, Medical Devices, Healthcare Providers, Life Sciences Leaders"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "LifeAI+ Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Salesforce Life Sciences Cloud Implementation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Strategic Advisory & Roadmap Development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Regulatory Compliance & Quality Assurance"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "System Integration with ERP, EMR, and Partner Platforms"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "AI-Powered Insights with Salesforce Data Cloud"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Prior Authorization Management"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Remote Patient Monitoring & Telehealth Solutions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Digital Signature & Document Extraction Automation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Patient & HCP 360° Engagement Journeys"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Medical Affairs & Field Team Enablement"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Omnichannel Communication Setup"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "AI-Driven Case Management with Agentforce"
                    }
                }
            ]
        }
    }
}

export default function page() {
    const t = useTranslations('lifeAiPlus')
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { featureBoxes, lifeAiData, whyPartnerData, deepData, howRialtesData, priorData, aiDrivenData, relatedSolutionsData } = content.lifeAiPlus
    const RelatedSolutionsSection = () => {
        return (
            <section className={`custom-container lg:mt-[95px] mt-[80px] pb-[59px]`}>
                <h2 className="leading-tight text-black pr-10 xl:pr-0 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
                    {t('relatedTitle')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 xl:mt-[45px] mt-[33px] text-black">
                    {relatedSolutionsData.map((item, index) => {
                        // Border 
                        const borderRight = index < 2 ? 'xl:border-r-[1px] xl:border-black' : '';
                        const borderBottom = 'border-b-[1px] border-black md:border-0 pb-[33px] last:border-b-0 last:pb-0';
                        return (
                            <div
                                key={index}
                                className={`flex flex-col justify-between ${borderRight} ${borderBottom} h-full`}>
                                <div className="flex-1 flex flex-col">
                                    <h3 className="text-black font-semibold 4xl:text-[30px] xl:text-[26px] text-[22px] leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-black mt-10 font-normal pr-10 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                                        {item.desc}
                                    </p>
                                    <div className={`mt-auto pt-10 ${index === relatedSolutionsData.length - 1 ? 'xl:mt-[37px]' : ''}`}>
                                        <LearnMore bgcolor="#006FBE" bordercolor="#006FBE" btnName={t('learnMoreBtn')} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        )
    }
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="home, website, welcome"
                canonical={`https://www.rialtes.com/${locale}/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting/`}
            />
            <Script
                id="schema-lifeaiplus"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative h-[435px] 4xl:h-[650px] xl:h-[500px]">
                <div className="xl:block hidden">
                    <Image
                        src="/images/services/lob/lifeai/biotech-dna-growth.webp"
                        alt={t('headerAlt')}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/services/lob/lifeai/biotech-dna-growth-mobile.webp"
                        alt={t('headerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="h-full relative custom-container">
                    <div className="grid md:grid-cols-12 grid-cols-1 xl:mt-20">
                        <div className="md:col-span-5 4xl:col-span-6 col-span-12 mt-32">
                            <h3 className="text-white xl:text-[24px] text-[18px] font-bold mb-2">{t('headerTitle')}</h3>
                            <h2 className="text-white leading-tight md:text-[26px] xl:text-[40px] 4xl:text-[60px] mt-5">
                                {t('headerSubTitle')}
                            </h2>
                        </div>
                        <div className="xl:col-span-7 col-span-12">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description section */}
            <section className="mt-16 custom-container">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-8 2xl:col-span-7 4xl:col-span-9 col-span-12 xl:pr-16">
                        <h1 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
                            {t('pageDescTitle')}
                        </h1>
                        <p className="mt-10 xl:pr-0  text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{t('pageDesc1')}</p>
                        <p className="mt-5 xl:pr-0  text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{t('pageDesc2')}</p>
                    </div>
                    <div className="xl:col-span-2 col-span-12">
                    </div>
                </div>
            </section>
            {/* what is lifeAI+ section */}
            <section className="relative lg:min-h-[980px] 2xl:min-h-[1100px] lg:mt-[95px] mt-[80px]">
                <div className="relative w-full h-[500px] lg:h-[980px]">
                    <Image
                        src="/images/services/lob/lifeai/microalgae-green-cells.webp"
                        alt={t('whatAlt')}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div className="custom-container max-lg:px-0 text-white relative">
                    <div className="bg-[#0F71BF]  md:p-14 max-md:p-[33px] lg:mt-[-595px] relative">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">{t('whatIsLifeTitle')}</h2>
                        <p className="mt-5 font-normal xl:pr-20 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{t('whatIsLifeDesc')}</p>
                        <h3 className="text-[22px] xl:text-[30px] 4xl:text-[36px] leading-tight font-semibold mt-5">{t('whatIsLifeSubTitle')}</h3>
                        <div className="grid lg:grid-cols-12  grid-cols-1 mt-10 lg:gap-10 gap-y-10">
                            {
                                lifeAiData.map((data, ind) => {
                                    return (
                                        <div className="lg:col-span-4 col-span-12 h-full" key={ind}>
                                            <p className={`font-bold ${ind == 2 || ind == 5 || ind == 6 ? "" : " lg:border-r-[2px] border-white "}  ${ind == 4 ? "max-lg:pb-8" : "pb-8"} lg:pr-10 text-[17px] xl:text-[19px] 4xl:text-[20px] leading-tight`}>{data}</p>
                                            {
                                                ind !== 6 && <div className="absolute h-[2px] bg-white w-[20%] lg:hidden"></div>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="max-lg:mt-8 lg:absolute lg:right-20 lg:bottom-20">
                            <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                </div>
            </section>
            {/* why partner with rialtes */}
            <section className="lg:mt-[95px] mt-[80px]">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="col-span-6 order-1 xl:order-2">
                        <Image
                            className="w-full h-full object-cover"
                            src="/images/services/lob/lifeai/virtual-reality-brain-research.webp"
                            alt={t('whyAlt')}
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>
                    <div className="col-span-6 bg-[#073259] text-white order-2 xl:order-1 pb-20 xl:pb-32">
                        <div className="custom-container xl:pt-16 pt-10 xl:pr-[8rem] mx-[35px] xl:mx-0">
                            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]  pr-16 xl:pr-0">{t('whyPartnerTitle')}</h2>
                            <UnorderedList arrName={whyPartnerData} ulClassName="list-disc leading-tight 4xl:space-y-4 xl:space-y-3 2xl:space-y-3 font-normal marker:font-bold marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] mt-5 pr-2 xl:pr-0" liClassName="" />
                            <div className="mt-5 absolute">
                                <LearnMore bgcolor={"#006FBE"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Deep Expertise in Salesforce Life Sciences Cloud section */}
            <section className="lg:mt-[95px] mt-[80px]">
                <div className="md:pl-0">
                    <div className="xl:block hidden">
                        <Image
                            className="w-full xl:h-full h-[400px]"
                            src="/images/services/lob/lifeai/healthcare-cloud-technology.webp"
                            alt={t('deepAlt')}
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>
                    <div className="xl:hidden block">
                        <Image
                            className="w-full h-full object-cover"
                            src="/images/services/lob/lifeai/healthcare-cloud-technology-mobile.webp"
                            alt={t('deepAlt')}
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                </div>
                <div className="custom-container xl:pr-0">
                    <div className="grid xl:grid-cols-12 grid-cols-1 md:gap-[10px] xl:gap-[50px] bg-[#0690C9] text-white mt-[-100px] relative custom-container 4xl:px-[90px] py-[20px]">
                        <div className="xl:col-span-6 col-span-12 pt-[20px] xl:pr-[100px]">
                            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">{t('deepExpertiseTitle')}</h2>
                            <p className="mt-5 font-normal text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                                {t('deepExpertiseDesc')}
                            </p>
                            <div className=" absolute bottom-[75px] xl:block hidden">
                                <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} />
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-12 xl:mt-10 mt-5">
                            <h3 className="text-[22px] xl:text-[25px] 4xl:text-[36px] font-semibold leading-tight xl:pr-16">
                                {t('keySalesforceTitle')}
                            </h3>
                            <UnorderedList arrName={deepData} ulClassName="list-disc leading-tight xl:space-y-4 font-normal marker:font-bold marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] mt-5 lg:pr-4" liClassName="" />
                            <div className="mt-12 xl:hidden block pb-[20px]">
                                <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} />
                            </div>
                        </div>
                        <div className="xl:col-span-1 col-span-12"></div>
                    </div>
                </div>
            </section>
            {/* How Rialtes LifeAI+  section */}
            <section className="custom-container lg:mt-[95px] mt-[80px]">
                <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-24 gap-10">

                    {/* Image First on Mobile, Second on Desktop */}
                    <div className="xl:col-span-6 order-1 xl:order-2">
                        <Image
                            className="w-full"
                            src="/images/services/lob/lifeai/scientist-using-digital-tablet-lab.webp"
                            alt={t('rialtesAlt')}
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                        />
                    </div>
                    {/* Content Second on Mobile, First on Desktop */}
                    <div className="xl:col-span-6 order-2 xl:order-1">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]  xl:w-[81%] 4xl:w-[100%]">{t('howRialtesTitle')}</h2>
                        <p className="mt-5  xl:pr-0 font-normal text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">
                            {t('howRialtesDesc')}
                        </p>
                        <UnorderedList arrName={howRialtesData} ulClassName="list-disc xl:space-y-4 font-normal marker:font-bold marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight mt-6" liClassName="" />
                    </div>
                </div>
            </section>
            {/* Specialized Expertise for the Future section */}
            <section className="mt-[80px] sm:mt-[90px] md:mt-[95px] bg-[#EDEDED] pb-30">
                <div className="custom-container relative bottom-[-60px]">
                    <h2 className=" pb-6 leading-tight pr-10 xl:pr-0 xl:pt-[30px] xl:pb-0 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[65%] 2xl:w-[60%] 4xl:w-[83%]">{t('specializedTitle')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 xl:mt-16">
                        {featureBoxes.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border hover:border-[#EDEDED] border-gray-300 hover:bg-[#D9F2FF] p-12 flex flex-col h-full">
                                <div className="flex flex-col items-start mb-4">
                                    <h3 className="text-[#0A6BB8] mt-2 leading-tight 4xl:text-[30px] xl:text-[25px] md:text-[20px]   font-semibold">{feature.title}</h3>
                                </div>
                                <p className="mt-2 text-[16px] xl:text-[18px] 4xl:text-[24px] leading-tight">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Prior Authorization Management section */}
            <section className="lg:mt-[180px] mt-[140px]">
                <div className="xl:block hidden">
                    <Image
                        className="w-full"
                        src="/images/services/lob/lifeai/business-team-collaboration-meeting.webp"
                        alt={t('priorAlt')}
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        className="w-full"
                        src="/images/services/lob/lifeai/business-team-collaboration-meeting-mobile.webp"
                        alt={t('priorAlt')}
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                    />
                </div>
                <div className="custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 bg-[#A16B5D] text-white xl:pb-16 pb-8 sticky xl:mt-[-100px] pr-3">
                        <div className="col-span-6 xl:pl-20 xl:pt-20 pl-10 pt-10">
                            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">{t('priorMgmtTitle')}</h2>
                            <h3 className="4xl:text-[42px] xl:text-[30px] text-[20px] mt-5 font-semibold leading-tight">{t('priorMgmtSubTitle')}</h3>
                            <p className="mt-5 font-normal pr-10 xl:pr-0 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight">{t('priorMgmtDesc')}</p>
                        </div>
                        <div className="col-span-6  xl:p-16 p-8">
                            <UnorderedList arrName={priorData} ulClassName="list-disc leading-tight xl:space-y-4 space-y-2 font-normal marker:font-bold marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] xl:mt-10 xl:pr-14 pr-8" liClassName="" />
                            <div className="xl:mt-10 mt-5">
                                <LearnMore bgcolor={"#073259"} bordercolor={"#006FBE"} btnName={t('learnMoreBtn')} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="custom-container relative">
                <div className="xl:px-[110px] max-xl:px-0">
                    <div className="bg-[#163055]  p-8 text-[20px] xl:text-[22px] 4xl:text-[26px] text-white xl:mt-[-60px] leading-tight">
                        {t('priorDataBlueBox')}   </div>
                </div>
            </div>
            {/* AI-Driven Life Sciences with Salesforce Data Cloud & Agentforce section */}
            <section className={`relative h-full  overflow-hidden lg:mt-[95px] mt-[80px]
              ${locale === "es"
                    ? "2xl:h-[950px] 4xl:h-[1045px] xl:h-[880px]"
                    : locale === "fr"
                        ? "2xl:h-[950px] 4xl:h-[1045px] xl:h-[950px]"
                        : "xl:h-[909px]"
                }`}

            >
                <div className="xl:block hidden">
                    <Image
                        src="/images/services/lob/lifeai/digital-cloud-data-network.webp"
                        alt={t('aiAlt')}
                        className="object-cover"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/services/lob/lifeai/digital-cloud-data-network-mobile.webp"
                        alt={t('aiAlt')}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="h-full relative custom-container mt-[30rem] md:mt-0">
                    <div className="relative p-8 4xl:w-[907px] xl:w-[725px] h-full mt-[17rem] xl:mt-0 pb-10">
                        <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
                        <div className="relative bg-opacity-80 text-white z-10 xl:p-10 xl:pl-24 rounded-lg">
                            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] pr-5 xl:pr-0">{t('aiDrivenTitle')}</h2>
                            <p className='mt-5 font-normal text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight'>{t('aiDrivenDesc1')}</p>
                            <UnorderedList arrName={aiDrivenData} ulClassName="list-disc leading-tight xl:space-y-8 font-normal marker:font-bold marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] mt-5 xl:pr-0 pr-5" liClassName="" />
                            <p className="mt-8 font-normal leading-tight text-[16px] xl:text-[18px] 4xl:text-[20px]">{t('aiDrivenDesc2')}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* related solutions section */}
            <RelatedSolutionsSection />
            {/* contact form */}
            <div className="custom-container text-black py-16">
                <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle')} subtitle1={t('contactSubTitle2')} className={"xl:max-w-[72%] leading-tight font-normal 4xl:text-[56px] xl:text-[40px] text-[26px] "} />
            </div>
        </div >
    );
}