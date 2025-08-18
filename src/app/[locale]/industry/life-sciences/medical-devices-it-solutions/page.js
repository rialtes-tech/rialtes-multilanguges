"use client";
import Image from "next/image";
import ContactForm from "../../../components/contactform"
import Seo from "@/app/[locale]/components/Seo";
import Link from "next/link";
import LearnMore from "@/app/[locale]/components/learnMore";
import Script from "next/script";
import { changeLocalization } from "../../components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from 'next-intl';
import enContent from '../../../../../../messages/en/industry.json';
import esContent from '../../../../../../messages/es/industry.json';
const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Medical Devices IT Solutions",
    "url": "https://www.rialtes.com/industry/life-sciences/medical-devices-it-solutions/",
    "description": "Rialtes delivers customized IT solutions for the medical device industry powered by Salesforce, SAP, and cloud technologies. Our services support R&D, Quality Management Systems (QMS), compliance, sales automation, and supply chain optimization for MedTech organizations.",
    "publisher": {
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
    "mainEntity": {
        "@type": "Service",
        "name": "Medical Devices IT Solutions",
        "areaServed": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "India" },
            { "@type": "Country", "name": "Singapore" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Medical Devices Solutions",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Regulatory Compliance & Quality Management",
                        "description": "Ensure FDA and ISO compliance with advanced QMS and audit trail capabilities using SAP S/4HANA and Salesforce Health Cloud."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Salesforce CRM for MedTech",
                        "description": "Empower field sales and service agents with real-time insights, mobile access, and automated lead-to-quote processes."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Supply Chain and Inventory Management",
                        "description": "Enhance visibility and agility across procurement, production, and distribution using SAP Digital Supply Chain solutions."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Product Lifecycle Management",
                        "description": "Streamline R&D, testing, and market launch cycles with integrated SAP PLM and collaboration tools."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Field Service & Asset Management",
                        "description": "Optimize medical equipment servicing with predictive maintenance, IoT integration, and mobile workflows via Salesforce Field Service."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Advanced Analytics & Data Cloud",
                        "description": "Drive decision-making with real-time analytics, clinical performance dashboards, and data harmonization using Tableau and Salesforce Data Cloud."
                    }
                }
            ]
        }
    }
}

export default function Page() {
    const t = useTranslations('medicalDevices')
    const locale = useLocale();
    const content = locale === 'es' ? esContent : enContent;
    const { thoughLeadershipData, whyPartnerData, challenges, salesforceLifeData, sapData, keyAiData, benefitsofAi, patientData, integratedData, mobileData, remoteDeviceData, salesforceAgentData, realTimeData } = content.medicalDevices
    const CriticalChallengesSection = () => {

        return (
            <section className="sm:mt-[120px] mt-[100px]">
                <div className="custom-container">
                    <div className="grid md:grid-cols-12 grid-cols-1">
                        <div className="4xl:col-span-10 lg:col-span-9 2xl:col-span-7 md:col-span-9 col-span-12">
                            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] ">
                                {t('criticalChTitle')}
                            </h2>
                        </div>
                    </div>
                    {challenges.map((challenge) => (
                        <div
                            key={challenge.id}
                            className="relative grid lg:grid-cols-12 grid-cols-1 lg:mt-[80px]">
                            <div className="absolute lg:top-20 top-[100px] w-full border-t border-[#007bff] z-0"></div>
                            <div className="lg:col-span-6 col-span-12 z-10 flex flex-col mt-[60px] lg:mt-0">
                                <div className="bg-[#007bff] text-white lg:w-[157px] h-[73px] w-[73px] lg:h-[148px] flex items-center justify-center xl:text-[100px] text-[60px] font-bold z-10 order-1">
                                    {challenge.id}
                                </div>
                                <div className="block lg:hidden order-2 mt-14">
                                    <Image
                                        src={challenge.imageMobile}
                                        alt={challenge.title}
                                        width={800}
                                        height={600}
                                        className="w-full object-cover max-sm:mx-auto sm:w-[80%]"
                                        priority
                                    />
                                </div>
                                {/* Text Content */}
                                <div className="order-3">
                                    <h2 className="xl:w-[90%] 4xl:text-[42px] xl:text-[33px] text-[28px] xl:font-bold font-medium mb-6 lg:mt-[46px] mt-[36px] leading-tight sm:w-[80%] lg:w-full">
                                        {challenge.title}
                                    </h2>
                                    <UnorderedList arrName={challenge.points} ulClassName="list-disc lg:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] xl:text-[18px] text-[16px] lg:mt-[46px] leading-tight mt-[25px]" liClassName="" />
                                </div>
                            </div>
                            <div className="lg:col-span-1 col-span-12 order-4 lg:order-2"></div>
                            {/* Desktop Image */}
                            <div className="relative lg:col-span-5 col-span-12 z-10 hidden lg:block order-5">
                                <Image
                                    src={challenge.imageDesktop}
                                    alt={challenge.title}
                                    width={800}
                                    height={600}
                                    className="h-full w-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
    return (
        <div>
            <Seo
                title="Salesforce-Powered IT Solutions for Medical Device Companies | Rialtes"
                description="Salesforce-based IT solutions for medical device companies simplify compliance, improve traceability, and accelerate sales. Discover the Rialtes advantage."
                canonical="https://www.rialtes.com/industry/life-sciences/medical-devices-it-solutions/"
            />
            <Script
                id="schema-medical"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* hero section */}
            <section className="relative h-[400px] lg:h-[650px]">
                <div className="md:block hidden">
                    <Image
                        src="/images/medical/Medical device banner.webp"
                        alt="Transforming Medical Device img"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="md:hidden block">
                    <Image
                        src="/images/medical/medical-header.webp"
                        alt="Transforming Medical Device img"
                        fill
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="h-full relative custom-container">
                    <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-20 xl:mt-20">
                        <div className="4xl:col-span-7 xl:col-span-6 col-span-12 sm:pr-5">
                            <h3 className="text-white xl:text-[24px] text-[18px] leading-tight font-bold xl:mb-2 mb-5 xl:mt-32 mt-20">{t('headerTitle')}</h3>
                            <h1 className="text-white leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
                                {t('headerSubTitle')}
                            </h1>
                            <h3 className="4xl:text-[45px] xl:text-[33px] md:text-[18px] mt-5 text-white font-bold leading-tight pr-16 xl:pr-0">{t('headerSubTitle2')}</h3>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description */}
            <section className="xl:mt-10 mt-4 custom-container">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-10 col-span-12 leading-tight font-medium">
                        <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight mt-10">{t('pageDesc')} </p>
                        <p className="text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight mt-5">{t('pageDesc2')} </p>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                    </div>
                </div>
            </section>
            {/* thought leadership section */}
            <section className="relative group overflow-hidden xl:h-[1000px] 2xl:h-[960px] lg:h-[700px] md:h-[650px] sm:h-[850px] h-[900px] xl:mt-24 mt-16 text-white">
                <div className="md:block hidden">
                    <Image
                        src="/images/medical/TL Medical Device.webp"
                        alt="medical device img"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                {/* Mobile Image */}
                <div className="md:hidden block">
                    <Image
                        src="/images/medical/TL-(3).webp"
                        alt="medical device img"
                        fill
                        className="object-cover sm:object-[35%_0%] object-[20%_0]"
                        priority
                    />
                </div>
                <div className="custom-container absolute md:mt-[86px] lg:mt-[106px] max-md:bottom-[52px] md:bottom-auto">
                    <div className="grid md:grid-cols-12 grid-cols-1">
                        <div className="md:col-span-7 2xl:col-span-6 col-span-12">
                            <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:mt-10 mt-5">{t('thoughtTitle')}</h2>
                            <h3 className="4xl:text-[42px] xl:text-[35px] text-[22px] xl:mt-5 mt-3 font-bold leading-tight xl:w-[90%]">
                                {t('thoughtSubTitle')}
                            </h3>
                            <p className="4xl:text-[22px] xl:text-[20px] text-[16px] mt-5 leading-tight">
                                {t('thoughtDesc')}
                            </p>
                            <UnorderedList arrName={thoughLeadershipData} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 4xl:text-[20px] xl:text-[18px] text-[16px] mt-5 leading-tight" liClassName="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* why partner with rialtes */}
            <section className="relative h-[1200px] lg:h-[1100px] md:h-[900px] sm:h-[1160px] xl:h-[1000px]" >
                <div className="lg:block hidden">
                    <Image
                        src="/images/medical/why-rialtes.webp"
                        alt="partner with rialtes img"
                        fill
                        style={{ objectFit: "cover", objectPosition: "65% 20%" }}
                        priority
                    />
                </div>
                <div className="lg:hidden block">
                    <Image
                        src="/images/medical/why-rialtes-medical.webp"
                        alt="partner with rialtes img"
                        priority
                        className="object-cover sm:object-[35%_50%] md:object-[35%_70%] object-[20%_50%]"
                        fill
                    />
                </div>
                <div className="custom-container">
                    <div className="relative p-6 md:p-12 4xl:w-[690px] 4xl:h-[430px] xl:w-[520px] xl:h-[367px]">
                        <div className="absolute inset-0 bg-[#016FBE] mix-blend-multiply"></div>
                        <div className="relative bg-opacity-80 text-white z-10 xl:p-4 rounded-lg">
                            <h2 className="4xl:text-[60px] xl:text-[42px] text-[26px] leading-tight">{t('whyPartnerTitle')}</h2>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-[-260px] sm:bottom-[-80px] md:bottom-[-80px]">
                    <div className="custom-container grid grid-cols-1 gap-[21px] lg:gap-[32px] md:grid-cols-2 xl:grid-cols-3 text-black relative z-10">
                        {whyPartnerData.map((item, index) => (
                            <div key={index} className="bg-white xl:p-12 p-[40px] border-[1px] border-solid border-[#707070] hover:bg-[#D9F2FF] text-black sm:mx-auto sm:w-[80%] md:w-full">
                                <h3 className="4xl:text-[24px] xl:text-[22px] text-[20px] font-bold leading-tight">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="sm:mt-[10rem] mt-[20rem] custom-container">
                <LearnMore />
            </div>
            {/* critical challenges section */}
            <CriticalChallengesSection />

            {/* end to end section */}
            <section className="relative xl:mt-[147px] mt-[80px]">
                <div className="lg:block hidden">
                    <Image
                        src="/images/medical/Expertise in Salesforce.webp"
                        alt="Expertise in Salesforce image"
                        fill
                        style={{ objectFit: "cover", objectPosition: "35% 20%" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="lg:hidden block">
                    <Image
                        src="/images/medical/Expertise in Salesforce (1).webp"
                        alt="Expertise in Salesforce image"
                        fill
                        priority
                    />
                </div>
                <div className="text-white custom-container h-full relative">
                    <div className="grid grid-cols-12">
                        <div className="4xl:col-span-10 2xl:col-span-7 xl:col-span-8 lg:col-span-11 sm:col-span-11 col-span-12 xl:mt-[106px] mt-[52px]">
                            <h2 className="leading-tight  4xl:text-[60px] xl:text-[42px] text-[26px]">{t('endTitle')}</h2>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12 grid-cols-1 text-white xl:pt-20 pt-10">
                        <div className="xl:col-span-5 col-span-12">
                            <h3 className="4xl:text-[40px] xl:text-[33px] text-[28px] font-bold leading-tight">{t('salesforceTitle')} </h3>
                            <h2 className="4xl:text-[35px] xl:text-[25px] text-[22px] leading-tight mt-5 font-medium xl:font-normal">{t('salesforceSubTitle')}</h2>
                            <UnorderedList arrName={salesforceLifeData} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight xl:mt-10 mt-5" liClassName="" />
                        </div>
                        <div className="xl:col-span-2 col-span-12">
                        </div>
                        <div className="xl:col-span-5 col-span-12 mt-[72px] xl:mt-0">
                            <h3 className="4xl:text-[40px]  xl:text-[33px] text-[28px] font-bold leading-tight">{t('sapTitle')} </h3>
                            <h2 className="4xl:text-[35px] xl:text-[25px] text-[22px] leading-tight mt-5 font-medium xl:font-normal">{t('sapSubTitle')} </h2>
                            <UnorderedList arrName={sapData} ulClassName="list-disc xl:space-y-5 marker:font-bold marker:text-2xl pl-5 xl:mt-10 mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" liClassName="" />
                        </div>
                    </div>
                    <button className="bg-white hover:bg-[#ffffff]  hover:text-[#134874] border-[1px] text-[20px] border-[solid] border-[#134874] my-[60px] font-semibold text-black py-3 px-8 transition duration-300 order-4">
                        <Link href='/contact-us'>{t('learnMoreTitle')}</Link>
                    </button>
                </div>
            </section>
            {/* Ai powred transformation section*/}
            <div className="xl:mt-[136px] mt-[56px] custom-container h-full relative">
                <div className="grid xl:grid-cols-12 grid-cols-1">
                    <div className="3xl:col-span-8 lg:col-span-10 col-span-12">
                        <h2 className="leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px]">
                            AI-Powered Transformation
                        </h2>
                        <h3 className="4xl:text-[40px] xl:text-[30px] text-[22px] font-bold xl:mt-[35px] mt-[22px]">{t('aiPoweredTitle')}</h3>
                    </div>
                </div>
            </div>
            {/* key ai impact card */}
            <div className="custom-container max-md:px-0 xl:mt-[50px] mt-[42px]">
                <div className="text-white group overflow-hidden relative">
                    <div className="lg:block hidden">
                        <Image
                            src="/images/medical/AI Impact.webp"
                            alt="AI Impact image"
                            fill
                            style={{ objectFit: "cover", objectPosition: "40% 20%" }}
                            priority
                            className="transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="lg:hidden block">
                        <Image
                            src="/images/medical/Key AI Impact (2).webp"
                            alt="AI Impact image"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="grid lg:grid-cols-12 grid-cols-1 relative text-white">
                        <div className="lg:col-span-6 col-span-12">
                        </div>
                        <div className="lg:col-span-6 lg:order-2 col-span-12 lg:mt-[92px] lg:mb-[123px] mt-[57px] mb-[95px] lg:mx-[61px] mx-[36px]">
                            <h3 className="4xl:text-[40px] xl:text-[32px] text-[22px] leading-tight font-bold">{t('keyAiTitle')}</h3>
                            <UnorderedList arrName={keyAiData} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight mt-5" liClassName="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* benefits of AI  card*/}
            <div className="custom-container max-md:px-0">
                <div className=" text-white group overflow-hidden relative">
                    <div className="lg:block hidden">
                        <Image
                            src="/images/medical/Benefits of AI (1).webp"
                            alt="Benefits of AI image"
                            fill
                            style={{ objectFit: "cover", objectPosition: "70% 20%" }}
                            priority
                            className="transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="lg:hidden block">
                        <Image
                            src="/images/medical/Benefits of AI (2).webp"
                            alt="Benefits of AI image"
                            fill
                            style={{ objectFit: "cover", objectPosition: "70% 10%" }}
                            priority
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="grid lg:grid-cols-12 grid-cols-1 relative">
                        <div className="lg:col-span-7 col-span-12 lg:mt-[92px] lg:mb-[83px] mt-[57px] mb-[95px] lg:mx-[61px] mx-[36px]">
                            <h3 className="4xl:text-[40px] xl:text-[32px] text-[22px] leading-tight font-bold">{t('benefitsAiTitle')}</h3>
                            <UnorderedList arrName={benefitsofAi} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight mt-5" liClassName="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* patient trial section */}
            <div className="xl:mt-32 mt-[46px] h-full relative custom-container lg:pr-0">
                <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[40px] 2xl:gap-[90px]">
                    <div className="lg:col-span-5 2xl:col-span-6 col-span-12 order-1 lg:order-2">
                        <div className="lg:block hidden h-full">
                            <Image
                                src="/images/medical/Outcome Management .webp"
                                alt="Outcome Management"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                        <div className="lg:hidden block">
                            <Image
                                src="/images/medical/Patient Trial & Outcome Management .webp"
                                alt="Outcome Management"
                                className="w-full h-full object-cover"
                                width={0}
                                height={0}
                                priority
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-7 2xl:col-span-6 col-span-12 order-2 lg:order-1">
                        <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] font-light mb-8 leading-tight mt-10 xl:mt-0">
                            {t('patientTitle')}
                        </h2>
                        <div className="xl:pr-12 pr-0">
                            <h3 className="4xl:text-[40px] xl:text-[33px] text-[22px] font-bold leading-tight">
                                {t('patientSubTitle')}
                            </h3>
                            <UnorderedList arrName={patientData} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 mt-5 leading-tight text-[16px] xl:text-[18px] 4xl:text-[20px]" liClassName="" />
                            <p className="4xl:text-[26px] xl:text-[22px] text-[18px] xl:mt-[68px] mt-[50px] bg-[#0E3157] p-[24px] lg:p-[40px] text-white leading-tight w-[94%]">
                                {t('patientDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* integrated order section */}
            <div className="xl:mt-[129px] mt-[51px] h-full relative custom-container" >
                <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-[60px]">
                    <div className="lg:col-span-6 col-span-12">
                        <Image
                            src="/images/medical/SAP & Oracle ERP.webp"
                            alt="SAP & Oracle ERP image"
                            className="w-full h-full object-cover"
                            width={0}
                            height={0}
                            priority
                        />
                    </div>
                    <div className="lg:col-span-6 col-span-12 xl:pl-[55px]">
                        <h2 className="4xl:text-[50px] xl:text-[39px] text-[26px] font-light mb-8 leading-tight mt-10 xl:mt-0">{t('integratedTitle')}</h2>
                        <UnorderedList arrName={integratedData} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 leading-tight text-[16px] xl:text-[18px] 4xl:text-[20px] xl:mt-5" liClassName="" />
                    </div>
                </div>
                <p className="4xl:text-[26px] xl:text-[22px] text-[18px] bg-[#0E3157] xl:py-10 text-white xl:mt-[63px] mt-[35px] p-[24px] 2xl:mr-[40px]">{t('integratedDesc')}</p>
            </div>
            {/* mobile apps and remote device section */}
            <div className="xl:mt-[126px] mt-[54px] relative custom-container">
                <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-20">
                    <div className="lg:col-span-6 col-span-12">
                        <div className="relative">
                            <Image
                                src="/images/medical/Mobile Apps.webp"
                                alt=" Mobile Apps img"
                                priority
                                height={0}
                                width={0}
                                className="h-full w-full transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                            />
                        </div>
                        <h2 className="mt-10 4xl:text-[50px] xl:text-[40px] text-[26px] leading-tight">{t('mobileTitle')}</h2>
                        <h3 className="4xl:text-[38px] xl:text-[30px] text-[22px] xl:mt-10 mt-5 font-bold leading-tight">{t('mobileSubTitle')}</h3>
                        <UnorderedList arrName={mobileData} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 text-[16px] xl:text-[18px] 4xl:text-[20px] mt-5 leading-tight" liClassName="" />
                        <p className="bg-[#068EDA] text-white 4xl:text-[26px] xl:text-[19px] text-[18px] p-[24px] xl:p-[30px] 4xl:p-[40px]  xl:mt-[56px] mt-[38px] leading-tight">{t('mobileDesc')}</p>
                    </div>
                    <div className="lg:col-span-6 col-span-12 lg:mt-64 mt-16">
                        <div className="relative">
                            <Image
                                src="/images/medical/Remote Device Monitoring.webp"
                                alt="Remote Device img"
                                priority
                                height={0}
                                width={0}
                                className="h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h2 className="mt-10 4xl:text-[47px] xl:text-[38px] text-[26px] leading-tight">{t('remoteTitle')}</h2>
                        <h3 className="4xl:text-[40px] xl:text-[30px] text-[22px] xl:mt-10 mt-5 font-bold leading-tight">{t('remoteSubTitle')}</h3>
                        <UnorderedList arrName={remoteDeviceData} ulClassName="list-disc xl:space-y-4 marker:font-bold marker:text-2xl pl-5 mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" liClassName="" />
                        <p className="bg-[#068EDA] text-white 4xl:text-[26px] xl:text-[19px] text-[18px]  p-[24px] xl:p-[30px] 4xl:p-[40px]  xl:mt-[62px] mt-[38px] leading-tight">{t('remoteDesc')}</p>
                    </div>
                </div>
            </div>
            {/* salesforce agentforce section */}
            <div className="bg-[#184671] text-white pb-20 xl:mt-[16rem] mt-[14rem] relative">
                <div className="mt-[30px] custom-container text-black pt-20 pb-10 lg:pb-20">
                    <div className="relative mt-[-200px]">
                        <div className="lg:block hidden">
                            <Image
                                src="/images/medical/Agentforce.webp"
                                alt="salesforce agentforce img"
                                priority
                                height={0}
                                width={0}
                                className="w-full h-full transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                            />
                        </div>
                        <div className="lg:hidden block">
                            <Image
                                src="/images/medical/Agentforce (2).webp"
                                alt="salesforce agentforce img"
                                priority
                                height={0}
                                width={0}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-12 grid-cols-1 lg:mt-[61px] mt-[66px] text-white lg:gap-[60px]">
                        <div className="lg:col-span-6 col-span-12">
                            <h2 className="4xl:text-[50px] xl:text-[40px] text-[26px] leading-tight">{t('salesforceAgentTitle')}</h2>
                            <h3 className="4xl:text-[42px] xl:text-[32px] text-[26px] leading-tight xl:font-semibold">{t('salesforceAgentSubTitle')}</h3>
                            <p className="4xl:text-[22px] xl:text-[18px] text-[16px] xl:mt-5 mt-8 font-normal leading-tight">{t('salesforceAgentDesc')}</p>
                            <div className="xl:mt-10 mt-5">
                                <button className="bg-white xl:text-[20px] hover:bg-[#ffffff] hover:text-[#134874] border-[1px] border-[solid] border-[#134874] font-semibold text-black py-3 px-8 transition duration-300 order-4 mt-6" aria-label="salesforce agentforce button">
                                    <Link href='/solutions/artificial-intelligence/salesforce-agentforce-consulting'>{t('knowMoreBtn')}</Link>
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-6 col-span-12">
                            <h3 className="4xl:text-[30px] xl:text-[23px] text-[18px] xl:mt-5 mt-8 xl:font-semibold">{t('howAgentTitle')}</h3>
                            <UnorderedList arrName={salesforceAgentData} ulClassName="list-disc leading-tight xl:space-y-4 marker:font-bold marker:text-2xl pl-5 font-medium  mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px]" liClassName="" />
                        </div>
                    </div>
                </div>
                <div className="absolute sm:mt-[20px] lg:mt-[38px] xl:mt-0">
                    <div className="custom-container">
                        <p className="4xl:text-[26px] xl:text-[23px] text-[18px] bg-[#068EDA] xl:py-[52px] xl:pl-[48px] p-[24px] text-white leading-tight font-normal">{t('salesforceAgentBlueBox')}</p>
                    </div>
                </div>
            </div>
            {/* real time communication section */}
            <div className="bg-[#626262] text-white xl:mt-[16rem] md:mt-[8rem] mt-[10rem] xl:pb-[168px] pb-[119px] relative">
                <div className="custom-container">
                    <div className="relative ">
                        <div className="lg:block hidden">
                            <Image
                                src="/images/medical/AgentChat (2).webp"
                                alt="real time communication img"
                                priority
                                height={0}
                                width={0}
                                className="h-full w-full transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-150"
                            />
                        </div>
                        <div className="lg:hidden block">
                            <Image
                                src="/images/medical/AgentChat (4).webp"
                                alt="real time communication img"
                                priority
                                height={0}
                                width={0}
                                className="h-full w-full"
                            />
                        </div>
                    </div>
                    <h2 className="4xl:text-[60px] xl:text-[40px] text-[26px] text-white mt-10 leading-tight">{t('realTimeTitle')}</h2>
                    <div className="grid lg:grid-cols-12 grid-cols-1 text-white mt-8 lg:gap-[60px]">
                        <div className="lg:col-span-6 col-span-12">
                            <h3 className="4xl:text-[40px] xl:text-[34px] text-[26px] leading-tight font-bold">{t('realTimeSubTitle')}</h3>
                            <p className="4xl:text-[22px] xl:text-[18px] text-[16px] mt-8 leading-tight">{t('realTimeDesc')}</p>
                        </div>
                        <div className="lg:col-span-6 col-span-12">
                            <UnorderedList arrName={realTimeData} ulClassName="list-disc lg:space-y-4 marker:font-bold marker:text-2xl pl-5 mt-5 font-medium lg:mt-0 text-[16px] xl:text-[18px] 4xl:text-[20px] leading-tight" liClassName="" />
                            <div className="mt-5">
                                <button className="bg-white xl:text-[20px] border-[1px] hover:text-[#134874] font-semibold text-black py-3 px-8 transition duration-300 order-4 mt-6" aria-label="real time know more button">
                                    <Link href='/products/agentchat'>{t('knowMoreBtn')}</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute md:mt-[80px] mt-[60px] 2xl:mt-[90px]">
                    <div className="custom-container">
                        <p className="text-[18px] xl:text-[23px] 4xl:text-[25px] bg-[#068EDA] xl:p-[48px] p-[24px] text-white inline-block">
                            {t('stayConnectedTitle')}
                        </p>
                    </div>
                </div>
            </div>
            {/* Contact Form */}
            <div className="xl:mt-16 mt-10 custom-container text-black py-20">
                <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle')} className={"max-w-[70rem] leading-tight 4xl:text-[60px] xl:text-[40px] md:text-[26px] xl:w-[70%] 4xl:w-full"} />
            </div>
        </div>
    );
}
