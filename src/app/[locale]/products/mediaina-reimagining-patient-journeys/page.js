"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Link from "next/link";
import Script from "next/script";
import ContactForm from "@/app/[locale]/components/contactform";
import UnorderedList from "../../components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../messages/en/products.json';
import esContent from '../../../../../messages/es/products.json';
import frContent from '../../../../../messages/fr/products.json';
import { changeLocalization } from "../../components/changeLocalization";
import LearnMore from "../../components/learnMore";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Grow with SAP - Cloud ERP Implementation Services",
    "alternateName": "VoyagerNext by Rialtes",
    "url": "https://www.rialtes.com/services/business-transformation/grow-with-sap-services/",
    "description": "Rialtes provides end-to-end Grow with SAP transformation services, including SAP Cloud ERP implementation leveraging SAP S/4HANA Cloud, SAP Activate methodology, SAP Signavio, and SAP BTP. Services include implementation, migration from SAP B1, integration with Salesforce, and support for AI, automation, and digital procurement.",
    "provider": {
        "@type": "Organization",
        "name": "Rialtes",
        "url": "https://www.rialtes.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.rialtes.com/images/homepage/logo.svg"
        },
        "sameAs": [
            "https://www.linkedin.com/company/rialtes-technologies-llc/",
            "https://www.youtube.com/@rialtes"
        ]
    },
    "areaServed": [
        {
            "@type": "Country",
            "name": "United States"
        },
        {
            "@type": "Country",
            "name": "Canada"
        },
        {
            "@type": "Country",
            "name": "India"
        },
        {
            "@type": "Country",
            "name": "Singapore"
        }
    ],
    "serviceType": [
        "Grow with SAP Services",
        "SAP S/4HANA Cloud Public Edition Implementation",
        "SAP B1 to S/4HANA Migration",
        "SAP Activate & SAP Signavio Enablement",
        "SAP SuccessFactors Integration",
        "SAP Ariba and Procurement Solutions",
        "SAP BTP Customization and Automation",
        "SAP CPI Integration",
        "Salesforce and SAP Integration",
        "Conversational AI for ERP (AgentChat)",
        "AI and Data Cloud Enablement"
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "VoyagerNext Offerings",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "SAP License Advisory",
                    "description": "Guidance on SAP licensing for cost-effectiveness and scalability."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Solution Design & Implementation",
                    "description": "Design and implement SAP S/4HANA Cloud aligned with industry best practices."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "System Integration & Customization",
                    "description": "Integrate SAP with legacy systems and customize using SAP BTP and CPI."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Post Go-Live Support & Optimization",
                    "description": "Hypercare, continuous improvement, and performance monitoring post go-live."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Quality Assurance & User Training",
                    "description": "Ensure system readiness with testing and user enablement services."
                }
            }
        ]
    },
    "audience": {
        "@type": "Audience",
        "audienceType": [
            "Mid-market Enterprises",
            "Growing Businesses",
            "Enterprise IT Teams",
            "SAP Business One Customers",
            "Digital Transformation Leaders"
        ]
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.rialtes.com/services/business-transformation/grow-with-sap-services/"
    }
}

export default function Page() {
    const t = useTranslations("mediaina");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { rialtesBenefits, commonData } = content.mediaina
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="MediAIna - Redefining Patient Journey Mapping in Healthcare"
                description="MediAIna puts patients at the center by mapping every care moment with Salesforce Cloud and Rialtes' LifeAI+ to enable truly connected, human-first healthcare."
                keywords="home, website, welcome"
                canonical="https://www.rialtes.com/products/mediaina-reimagining-patient-journeys/"
            />
            <Script
                id="schema-grow"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative group overflow-hidden pb-20 md:pb-48 xl:pb-20 4xl:pb-20">
                <div className="xl:block hidden">
                    <Image
                        src="/images/products/mediyana/mediyana-banner.webp"
                        alt="grow with sap banner"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/products/mediyana/mediyana-mobile-banner.webp"
                        alt="grow with sap banner"
                        fill
                        priority
                    />
                </div>
                <div className="relative custom-container 4xl:pb-20">
                    <div className="grid xl:grid-cols-12 grid-cols-1 gap-2 mt-20 mx-auto">
                        <div className="xl:col-span-7 col-span-12 pr-5 4xl:pr-[6rem]">
                            <h1 className="text-white  leading-tight break-words 4xl:text-[60px] md:text-[32px]  xl:text-[40px] 2xl:text-[48px] 4xl:pr-0 md:pr-40 pr-10">
                                <span className="text-white text-[20px] xl:text-[24px] font-bold mb-2 break-words">{t('headerTitle')}</span>  <br>
                                </br>
                                <div className="pt-5">{t('headerSubTitle')}<br></br>{t('headerSubTitle2')} </div>
                            </h1>

                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description section */}
            <section className="xl:pt-10">
                <div className="custom-container">
                    <div>
                        <div className="xl:grid xl:grid-cols-12 grid-cols-1 xl:mt-10 xl:gap-16 4xl:gap-10 flex flex-col-reverse">
                            <div className="xl:col-span-8 col-span-12">
                                <p className="leading-tight font-normal 4xl:pr-20">
                                    {t('pageDesc')}
                                </p>
                                <p className="mt-5 font-normal 4xl:pr-32">{t('pageDesc2')}</p>
                            </div>
                            <div className="xl:col-span-4 col-span-12">
                                <Image
                                    src="/images/products/mediyana/desktop/logo-1.svg"
                                    alt="Empower your enterprise with Rialtes"
                                    priority
                                    className="xl:w-[500px]  xl:h-[233] h-[150px] w-[225px] md:h-[200px] md:w-[300px] xl:mt-[-20px]"
                                    width={0}
                                    height={0}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* our vision section */}
            <section>
                <div className="custom-container mx-auto grid  4xl:grid-cols-[620px,991px] xl:mt-[-85px] 2xl:mt-[-100px] 2xl:grid-cols-[530px,842px] xl:grid-cols-[465px,710px]  grid-cols-1  gap-0 items-center 4xl:pr-0 2xl:pr-0 xl:pr-0  4xl:mt-0 mt-10">
                    {/* Left Side - Text Card */}
                    <div className="bg-[#05ACA6] text-white p-12 z-10 relative order-2 xl:order-1 2xl:mt-[60px] 4xl:mt-0 xl:mt-[80px]">
                        <h2 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] leading-tight md:text-[23px]">{t('visionTitle')}</h2>
                        <h3 className="4xl:text-[36px] xl:text-[30px] font-semibold mt-4 leading-tight">
                            {t('visionSubTitle')}
                        </h3>
                        <p className="mt-6 leading-tight font-light">
                            {t('visionDesc')}
                        </p>

                        <div className="mt-10 space-y-4 pb-20">
                            <p className="font-bold 4xl:text-[20px]">{t('benefitsTitle')}</p>
                            <UnorderedList arrName={rialtesBenefits} ulClassName="list-disc pl-6 space-y-8 4xl:text-[20px] leading-tight 4xl:pr-8" liClassName="" />
                        </div>
                        <div className="absolute bottom-0">
                            <LearnMore href="https://www.rialtes.com/services/lob/lifeaiplus-salesforce-life-sciences-cloud-consulting/" btnName={t('learnMoreBtn')} />

                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full h-full relative  order-1 xl:order-2">
                        <div className="xl:block hidden 4xl:ml-[-200px] 4xl:mt-[9rem] 2xl:ml-[-100px] xl:mt-[12rem] xl:ml-[-100px] 2xl:mt-[12rem]">
                            <Image
                                src="/images/products/mediyana/desktop/lifeai.webp"
                                alt="LifeAI Illustration"
                                className="object-cover w-full h-full 4xl:h-[814px] 2xl:h-[800px] xl:h-[900px]"
                                priority
                                width={0}
                                height={0}
                            />
                        </div>
                        <div className="xl:hidden block">
                            <Image
                                src="/images/products/mediyana/mobile/lifeai.webp"
                                alt="LifeAI Illustration"
                                className="object-cover w-full h-full"
                                priority
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {
                commonData.map((data, ind) => {
                    return (
                        ind % 2 == 0 ?
                            <section className="custom-container xl:pl-0 max-xl:px-0 relative lg:!pr-[0px] xl:!pr-[80px] 4xl:!pr-[140px] mt-[103px] xl:mt-[21px]" key={ind}>
                                <div className="grid xl:grid-cols-12 grid-cols-1 relative xl:gap-[40px] items-stretch">
                                    <div className={`4xl:col-span-9 xl:col-span-8 col-span-1 
       xl:pt-[81px] md:pt-[360px] max-[400px]:pt-[180px] pt-[220px] sm:pt-[240px] 
        custom-container xl:!pr-[20px] xl:order-1 order-2 xl:mt-0 max-[400px]:mt-[-140px] mt-[-180px] sm:mt-[-200px] md:mt-[-300px] 
        relative z-10 xl:mb-[60px] 2xl:mb-[100px] 4xl:mb-[80px] 
        

          ${locale === "es"
                                    ? "4xl:pb-[120px] 2xl:pb-[120px] xl:pb-[80px]"
                                    : locale === "fr"
                                        ? "4xl:pb-[100px] 2xl:pb-[120px] xl:pb-[80px]"
                                        : ""
                                }`}
        
        
        style={{
                                            backgroundColor: data.bgColor ? data.bgColor : 'transparent'
                                        }}>

                                        <h2 className={`4xl:text-[52px] xl:text-[40px] 2xl:text-[48px] text-[26px] leading-tight max-lg:w-[90%] ${ind == 4 || ind == 8 ? "xl:w-[90%]" : " xl:w-[70%]"} ${ind == 10 && "xl:w-[80%]"}`}>
                                            {data.title}
                                        </h2>
                                        <p className="4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight mt-[15px] xl:mt-[18px] font-normal xl:w-[80%] 4xl:w-[76%]">
                                            {data.desc}
                                        </p>

                                        <div className="grid xl:grid-cols-2 grid-cols-1 mt-[31px] xl:mt-[63px] xl:gap-[40px] xl:pr-[110px] 4xl:pr-[160px] gap-y-[36px] max-xl:mb-[36px] 4xl:w-[96%]">
                                            <div>
                                                <h3 className="text-[#006FBE] font-bold 4xl:text-[22px] xl:text-[20px] text-[18px] leading-tight">
                                                    Benefits
                                                </h3>
                                                <UnorderedList arrName={data.benefitList} ulClassName="list-disc pl-5 space-y-[14px] xl:space-y-[18px] 4xl:text-[20px] xl:text-[18px] text-[16px] mt-[12px] xl:mt-[19px]" liClassName="" />
                                            </div>
                                            <div>
                                                <h3 className="text-[#006FBE] font-bold 4xl:text-[22px] xl:text-[20px] text-[18px] leading-tight">
                                                    Outcomes
                                                </h3>
                                                <UnorderedList arrName={data.outcomeList} ulClassName="list-disc pl-5 space-y-[14px] xl:space-y-[18px] 4xl:text-[20px] xl:text-[18px] text-[16px] mt-[12px] xl:mt-[19px]" liClassName="" />
                                            </div>
                                        </div>

                                        <div className="xl:mt-[65px] xl:absolute bottom-0">
                                            <div>
                                                <LearnMore bgcolor="#073259" bordercolor="#073259" btnName={t('learnMoreBtn')} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="4xl:col-span-3 xl:col-span-4 col-span-1 xl:order-2 order-1 relative">
                                        <div className="xl:block hidden  xl:mt-[80px] 4xl:mt-[120px] xl:ml-[-120px] 4xl:ml-[-180px] relative z-20 h-full">
                                            <Image
                                                src={data.deskImg}
                                                alt="desktop Image"
                                                className={`w-full object-cover h-full  xl:h-[760px] xl:w-[900px] 4xl:w-[600px] ${(ind == 0 || ind == 4 || ind == 6 || ind == 8) ? "4xl:h-[660px]" : "4xl:h-[750px]"}`}
                                                width={0}
                                                height={0}
                                                priority
                                            />
                                        </div>

                                        {/* Mobile */}
                                        <div className="xl:hidden block relative z-20">
                                            <Image
                                                src={data.mobImg}
                                                alt="Mobile Img"
                                                className="h-full w-full object-cover max-xl:px-[36px] md:w-[80%] max-lg:mx-auto"
                                                width={0}
                                                height={0}
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section> :
                            <section
                                className="custom-container lg:pr-0 max-xl:px-0 relative xl:!pl-[80px] 4xl:!pl-[140px] mt-[103px] xl:mt-[113px]"
                                key={ind}>
                                <div className="grid xl:grid-cols-12 grid-cols-1 relative xl:gap-[40px] items-stretch">
                                    <div className="4xl:col-span-3 xl:col-span-4 col-span-1 xl:order-1 order-1 relative">
                                        <div className="xl:block hidden xl:mt-[-80px] xl:mr-[-120px] 4xl:mr-[-180px] relative z-20 h-full">
                                            <Image
                                                src={data.deskImg}
                                                alt="desktop Image"
                                                className="w-full object-cover h-full 4xl:h-[720px] xl:h-[680px] xl:w-[900px] 4xl:w-[600px]"
                                                width={0}
                                                height={0}
                                                priority
                                            />
                                        </div>

                                        {/* Mobile */}
                                        <div className="xl:hidden block relative z-20">
                                            <Image
                                                src={data.mobImg}
                                                alt="Mobile Img"
                                                className="h-full w-full object-cover max-xl:px-[36px] md:w-[80%] max-lg:mx-auto"
                                                width={0}
                                                height={0}
                                                priority
                                            />
                                        </div>
                                    </div>

                                    <div
                                        className={`4xl:col-span-9 xl:col-span-8 col-span-1 
xl:pt-[81px] md:pt-[360px] max-[400px]:pt-[180px] pt-[220px] sm:pt-[240px] 
        custom-container xl:order-2 order-2 xl:mt-0 max-[400px]:mt-[-140px] mt-[-180px] sm:mt-[-200px] md:mt-[-300px] 
        relative z-10 xl:mb-[60px] 2xl:mb-[100px] 4xl:mb-[80px] xl:pl-[120px] 4xl:pl-[220px] xl:!pr-[60px] 4xl:!pr-[140px]
        `} style={{
                                            backgroundColor: data.bgColor ? data.bgColor : 'transparent'
                                        }}>
                                        <h2 className={`4xl:text-[58px] xl:text-[40px] 2xl:text-[48px] text-[26px] leading-tight max-lg:w-[90%] ${ind == 9 ? "4xl:w-[90%]" : "4xl:w-[80%]"}`}>
                                            {data.title}
                                        </h2>
                                        <p className="4xl:text-[20px] xl:text-[18px] text-[16px] leading-tight mt-[15px] xl:mt-[18px] font-normal xl:w-[90%]">
                                            {data.desc}
                                        </p>

                                        <div className="grid xl:grid-cols-2 grid-cols-1 mt-[31px] xl:mt-[63px] xl:gap-[40px] gap-y-[36px] max-xl:mb-[36px] 4xl:w-[90%]">
                                            <div>
                                                <h3 className="text-[#006FBE] font-bold 4xl:text-[22px] xl:text-[20px] text-[18px] leading-tight">
                                                    Benefits
                                                </h3>
                                                <UnorderedList
                                                    arrName={data.benefitList}
                                                    ulClassName="list-disc pl-5 space-y-[14px] xl:space-y-[18px] 4xl:text-[20px] xl:text-[18px] text-[16px] mt-[12px] xl:mt-[19px]"
                                                    liClassName=""
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-[#006FBE] font-bold 4xl:text-[22px] xl:text-[20px] text-[18px] leading-tight">
                                                    Outcomes
                                                </h3>
                                                <UnorderedList
                                                    arrName={data.outcomeList}
                                                    ulClassName="list-disc pl-5 space-y-[14px] xl:space-y-[18px] 4xl:text-[20px] xl:text-[18px] text-[16px] mt-[12px] xl:mt-[19px]"
                                                    liClassName=""
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-auto xl:mt-[65px] items-end">
                                            <div>
                                                <LearnMore bgcolor="#073259" bordercolor="#073259" btnName={t('learnMoreBtn')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                    )
                })
            }


            <section className="custom-container text-black py-16 mt-10 max-md:mt-0">
                <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle')} className={"leading-tight max-w-[76%] 4xl:text-[60px] xl:text-[40px]"} />
            </section>
        </div >
    );
}