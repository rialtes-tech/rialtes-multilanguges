import ContactForm from "@/app/[locale]/components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import Seo from "@/app/[locale]/components/Seo";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/solutions.json';
import esContent from '../../../../../../messages/es/solutions.json';
import frContent from '../../../../../../messages/fr/solutions.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";

import UnorderedList from "@/app/[locale]/components/unorderedList";
export default function page() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "SAP Cloud Platform Integration Services",
        "url": "https://www.rialtes.com/solutions/integration/sap-cloud-platform-integration-consulting",
        "description": "Smarter cloud integration with SAP CPI. Empower enterprise agility, drive innovation, and unlock speed with AI-powered automation and real-time insights.",
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
        "serviceType": "SAP CPI Integration, Cloud Integration, SAP to Non-SAP Integration",
        "category": "SAP Cloud Integration",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "SAP CPI Services Catalog",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Integration Strategy, Advisory & Architecture" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "SAP CPI Implementation & Deployment" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Pre-built Accelerators & Industry Connectors" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Quality Assurance & Compliance Testing" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Post-Go-Live Support & Monitoring" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "SAP Ariba Cloud Integration" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "SAP S/4HANA Cloud Integration" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "SAP SuccessFactors Cloud Integration" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Salesforce SAP CPI Integration" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Oracle & Workday Integrations via SAP CPI" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Data Visualization & Insights with Tableau" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Production & Demand Planning with Mulesoft + SAP CPI" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Kinaxis RapidResponse Integration with SAP" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "AI-Powered SAP CPI Workflows & Automation" }
                },
                {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Agile Delivery with SCRUM-Certified Project Managers" }
                }
            ]
        }
    }
    const t = useTranslations('sapCpi')
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { thoughtLeadershipData, endToEndData, specializedData, integrationData, commonSectionsData, whyRialtesData, } = content.sapCpi;
    return (
        <section className="min-h-screen">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                canonical="https://www.rialtes.com/solutions/integration/sap-cloud-platform-integration-consulting/"
            />
            <Script
                id="schema-sap-cloud"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* herosection */}
            <section className="relative group overflow-hidden  h-[350px] md:h-[500px]  4xl:h-[650px] ">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/solutions/sap-cpi/hero-desk-banner.webp"
                        alt="desktop banner"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden">
                    <Image
                        src="/images/solutions/sap-cpi/Mobile/hero-mob-banner.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "25% 40%" }}
                        priority
                    />
                </div>
                <div className="relative h-full custom-container flex items-center text-[#ffffff]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
                        <div className="col-span-12">
                            <h1 className="text-[18px] lg:text-[24px] font-bold sm:w-[53%] :">
                                {t('headerTitle')}
                            </h1>
                            <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] md:mt-[28.5px] sm:w-[60%]">
                                {t('headerSubTitle1')}<br />  {t('headerSubTitle2')}
                            </h2>
                        </div>
                        <div className="col-span-12 lg:col-span-3 xl:col-span-5">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description */}
            <section className="custom-container xl:mt-[131px] mt-[50px]">
                <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-[40px] lg:gap-[20px] gap-y-[25px]">
                    <div className="lg:col-span-5 xl:col-span-6 4xl:col-span-7 col-span-12">
                        <div className=" lg:block hidden">
                            <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px]">
                                {t('pageDescTitle1')}   <br />{t('pageDescTitle2')}  <br />{t('pageDescTitle3')}
                            </h2>
                        </div>
                        <div className="block lg:hidden">
                            <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px]">
                                {t('pageDescSubTitle')}
                            </h2>
                        </div>
                    </div>
                    <div className="lg:col-span-7 xl:col-span-6 4xl:col-span-5 col-span-12">
                        <p className="xl:text-[19px] 4xl:text-[22px] text-[16px]"  dangerouslySetInnerHTML={{ __html: t('pageDesc') }}>

                        </p>
                    </div>
                </div>
            </section>
            {/* thought leadership section */}
            <section className="xl:mt-[88px] mt-[57px] relative">
                <div className="absolute inset-0 -z-10">
                    {/* Desktop Image */}
                    <div className="hidden md:block w-full h-full">
                        <Image
                            src="/images/solutions/sap-cpi/thought-leadership-desk.webp"
                            alt="thought-leadership"
                            fill
                            className="object-cover object-[35%_20%]"
                            priority
                        />
                    </div>
                </div>
                {/* Mobile Image */}
                <div className="block md:hidden w-full h-full">
                    <Image
                        src="/images/solutions/sap-cpi/Mobile/thought-leadership-mob.webp"
                        alt="thought-leadership"
                        width={0}
                        height={0}
                        className="object-cover object-center w-full h-full"
                        priority
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 custom-container sm:mt-[-14%] mt-[-20%] md:mt-0">
                    <div className="col-span-6 lg:col-span-7 xl:col-span-6 3xl:col-span-7 4xl:col-span-6"></div>
                    <div className="col-span-6 lg:col-span-5 xl:col-span-6 3xl:col-span-5 4xl:col-span-6">
                        <div className="md:bg-[#073259] md:mix-blend-hard-light bg-[#0A6BB8]/90 text-[#ffffff] xl:pt-[52px] pt-[29px] xl:pb-[40px] pb-[47px] xl:px-[63px] px-[23px]">
                            <h2 className="xl:text-[40px] 4xl:text-[60px] text-[26px] leading-tight font-light md:w-[50%]">
                                {t('thoughtTitle')}
                            </h2>
                            <h3 className="xl:text-[28px] 4xl:text-[36px] text-[20px] mt-[14px] xl:mt-[27px] leading-tight font-semibold">
                                {t('thoughtSubTitle')}
                            </h3>
                            <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[27px] mt-[14px] font-normal">
                                {t('thoughtDesc')}
                            </p>
                            <UnorderedList arrName={thoughtLeadershipData} ulClassName="list-disc xl:mt-[27px] mt-[22px] md:ml-[26px] ml-[20px] space-y-[19px] xl:space-y-[27px]" liClassName="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight" />
                            <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[33px] mt-[22px] font-normal">
                                {t('thoughtDesc2')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* end to end section */}
            <section className="xl:mt-[189px] mt-[90px] custom-container" >
                <div className="lg:mr-[80px] sm:mr-[60px] md:mr-0 border border-[#707070] lg:pl-[46px] xl:pr-[60px] 4xl:pr-[100px] sm:px-[36px] px-[28px] xl:pb-[75px] pb-[80px]">
                    <h2 className="xl:text-[40px] 4xl:text-[60px] text-[26px] leading-tight font-light sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[80%] bg-[#ffffff] mt-[-40px] xl:mt-[-50px]">
                        {t('endToEndTitle')}
                    </h2>
                    <div className="relative grid md:grid-cols-2 grid-cols-1 xl:mt-[62px] mt-[42px] gap-y-[48px] xl:gap-y-[89px] md:gap-[60px]">
                        {
                            endToEndData.map((data, ind) => {
                                return (
                                    <div className="border-l-[3px] border-[#006FBE] xl:pl-[32px] pl-[20px]" key={ind}>
                                        <p className="xl:text-[25px] 4xl:text-[30px] text-[20px] xl:mb-[27px] mb-[24px] leading-tight font-semibold text-[#0A6BB8]">
                                            {data.title}
                                        </p>
                                        <ul>
                                            {data?.dataList?.map((item, ind) => {
                                                // dash after li
                                                const isLastItem = ind === data.dataList.length - 1;
                                                return (
                                                    <React.Fragment key={ind}>
                                                        <li className="xl:text-[18px] 4xl:text-[24px] text-[16px] leading-tight">
                                                            {item}
                                                        </li>
                                                        {!isLastItem && (
                                                            <li className="w-[50px] h-[2px] bg-[#707070] my-[20px]" />
                                                        )}
                                                    </React.Fragment>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )
                            })
                        }
                        <div className="absolute max-md:left-0 md:right-0 bottom-[-100px]">
                            <LearnMore btnName={t('learnMore')}/>
                        </div>
                    </div>
                </div>
            </section>
            {/* specialized SAP section */}
            <section className="custom-container xl:mt-[168px] mt-[89px]">
                <h2 className="xl:text-[40px] 4xl:text-[60px] text-[26px] leading-tight font-light sm:w-[70%] md:w-[50%] xl:w-[52%] 4xl:w-[70%]">
                    {t('specializedTitle')}
                </h2>
                <div className="xl:mt-[92px] mt-[43px] space-y-[97px] lg:space-y-[153px]">
                    {
                        specializedData.map((data, ind) => {
                            return (
                                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-[40px] 4xl:gap-x-[60px]" key={ind} >
                                    <div className="lg:order-1 order-2 max-lg:mt-[43px]">
                                        <h3 className="xl:text-[30px] 4xl:text-[48px] text-[25px] leading-tight font-bold text-[#006FBE]">
                                            {data.title}
                                        </h3>
                                        <h4 className="xl:text-[28px] 4xl:text-[35px] text-[20px] leading-tight font-bold xl:mt-[48px] mt-[19px]">
                                            {data.subtitle}
                                        </h4>
                                        <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[42px] mt-[19px] font-normal md:w-[80%] lg:w-full">
                                            {data.desc}
                                        </p>
                                        <div className="grid lg:grid-cols-2 grid-cols-1 xl:mt-[56px] mt-[32px] md:gap-x-[20px] gap-y-[34px] ">
                                            <div>
                                                <p className="xl:text-[26px] 4xl:text-[31px] text-[18px] leading-tight font-semibold">
                                                    {t('keyTitle')}
                                                </p>
                                                <UnorderedList arrName={data.keyData} ulClassName="list-disc xl:space-y-[24px] space-y-[19px] xl:mt-[19px] mt-[19px] pl-[18px]" liClassName="xl:text-[17px] text-[16px] leading-tight" />
                                            </div>
                                            <div>
                                                <p className="xl:text-[26px] 4xl:text-[31px] text-[18px] leading-tight font-semibold">
                                                    {t('benefitsTitle')}
                                                </p>
                                                <UnorderedList arrName={data.businessData} ulClassName="list-disc xl:space-y-[24px] space-y-[19px] xl:mt-[19px] mt-[19px] pl-[18px]" liClassName="xl:text-[17px] text-[16px] leading-tight" />
                                            </div>
                                        </div>
                                        <div className="xl:mt-[61px] mt-[44px]">
                                            <LearnMore btnName={t('learnMore')}/>
                                        </div>
                                    </div>
                                    <div className="lg:order-2 order-1">
                                        {/* Desktop Image */}
                                        <div className="hidden lg:block w-full h-full">
                                            <Image
                                                src={data.deskImg}
                                                alt={`${data.title} image`}
                                                width={0}
                                                height={0}
                                                className="object-cover w-full h-full object-center lg:object-[20%_20%]"
                                                priority
                                            />
                                        </div>
                                        {/* Mobile Image */}
                                        <div className="block lg:hidden w-full h-full">
                                            <Image
                                                src={data.mobImg}
                                                alt={`${data.title} image`}
                                                width={0}
                                                height={0}
                                                className="object-cover object-center w-full h-full md:w-[80%]"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* integration section */}
            <section className="custom-container 4xl:!pl-[142px] xl:!pl-[52px] lg:!pl-[42px] max-md:px-0">
                <div className="xl:mt-[88px] mt-[57px] relative">
                    <div className="absolute inset-0 -z-10">
                        {/* Desktop Image */}
                        <div className="hidden md:block w-full h-full">
                            <Image
                                src="/images/solutions/sap-cpi/integration-desk.webp"
                                alt="integration image"
                                fill
                                className="object-cover object-[55%_20%]"
                                priority
                            />
                        </div>
                        {/* Mobile Image */}
                        <div className="block md:hidden w-full h-full">
                            <Image
                                src="/images/solutions/sap-cpi/Mobile/integration-mob.webp"
                                alt="integration image"
                                width={0}
                                height={0}
                                className="object-cover object-center w-full h-full"
                                priority
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="col-span-6 xl:col-span-6"></div>
                        <div className="col-span-6 xl:col-span-6">
                            <div className="bg-[#ffffff]/20 md:bg-[#ffffff]/50 text-[#000000] px-[36px] lg:pt-[76px] pt-[45px] md:pb-[91px] pb-[109px] md:pl-[43px] md:pr-[63px]">
                                <h2 className="xl:text-[38px] 4xl:text-[54px] text-[26px] leading-tight font-light">
                                    {t('integrationTitle')}
                                </h2>
                                <h3 className="xl:text-[26px] 4xl:text-[36px] text-[20px] mt-[19px] xl:mt-[34px] leading-tight font-semibold">
                                    {t('integrationSubTitle')}
                                </h3>
                                <p className="xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[44px] mt-[19px] font-normal">
                                    {t('integrationDesc')}
                                </p>
                                <UnorderedList arrName={integrationData} ulClassName="list-disc xl:mt-[44px] mt-[19px] md:ml-[26px] ml-[20px] space-y-[19px] xl:space-y-[27px]" liClassName="xl:text-[19px] 4xl:text-[20px] text-[16px] leading-tight" />
                                <div className="absolute md:mt-[40px] mt-[60px]">
                                    <LearnMore btnName={t('learnMore')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* common sections */}
            <section className="xl:mt-[232px] mt-[120px]">
                {
                    commonSectionsData.map((data, ind) => {
                        const evenSection = ind % 2 == 0;
                        return (
                            <div key={ind} className={`custom-container mt-[88px] xl:mt-[144px] ${evenSection ? "md:pr-0" : "md:pl-0"}`}>
                                {
                                    evenSection ?
                                        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] xl:gap-[60px] gap-y-[28px] sm:gap-y-0">
                                            <div className="md:col-span-5 col-span-12 md:order-1 order-2">
                                                <h2 className="md:block hidden xl:text-[38px] 4xl:text-[54px] text-[26px] leading-tight font-light">
                                                    {data.title}
                                                </h2>
                                                <h3 className="md:block hidden xl:text-[30px] 4xl:text-[40px] text-[20px] mt-[19px] xl:mt-[34px] leading-tight font-semibold">
                                                    {data?.subtitle}
                                                </h3>
                                                <p className={`xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight md:mt-[34px] mt-[20px] max-[360px]:mt-[58px] ${data?.subtitle && "mt-[60px]  "} font-normal sm:w-[80%] md:w-full`}>
                                                    {data.desc}
                                                </p>
                                                <UnorderedList arrName={data.dataList} ulClassName="list-disc xl:mt-[34px] mt-[19px] md:ml-[26px] ml-[20px] space-y-[19px] xl:space-y-[27px] sm:w-[80%] md:w-full" liClassName="xl:text-[18px] 4xl:text-[20px] text-[16px] leading-tight" />
                                                <div className="md:mt-[83px] mt-[25px]">
                                                    <LearnMore btnName={t('learnMore')}/>
                                                </div>
                                            </div>
                                            {/* image section */}
                                            <div className="md:col-span-7 col-span-12 md:order-2 order-1">
                                                {/* title and subtitle for mob */}
                                                <div>
                                                    <p className="md:hidden block xl:text-[38px] 4xl:text-[54px] text-[26px] leading-tight font-light sm:w-[80%]">
                                                        {data.title}
                                                    </p>
                                                    <p className="md:hidden block xl:text-[30px] 4xl:text-[40px] text-[20px] mt-[19px] xl:mt-[34px] leading-tight font-semibold">
                                                        {data?.subtitle}
                                                    </p>
                                                </div>
                                                {/* Desktop Image */}
                                                <div className="hidden md:block w-full h-full">
                                                    <Image
                                                        src={data.deskImg}
                                                        alt={`${data.title} image`}
                                                        width={0}
                                                        height={0}
                                                        className="object-cover object-[55%_20%] h-full w-full"
                                                        priority
                                                    />
                                                </div>
                                                {/* Mobile Image */}
                                                <div className="block md:hidden w-full mt-[27px] h-[70%] sm:h-[80%] max-[350px]:h-[60%]">
                                                    <Image
                                                        src={data.mobImg}
                                                        alt={`${data.title} image`}
                                                        width={0}
                                                        height={0}
                                                        className="object-cover w-full h-full"
                                                        priority
                                                    />
                                                </div>
                                            </div>
                                        </div> :
                                        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] xl:gap-[60px] 4xl:gap-[80px] gap-y-[28px] sm:gap-y-0">
                                            {/* image section */}
                                            <div className="md:col-span-7 col-span-12 order-1">
                                                {/* title and subtitle for mob */}
                                                <div>
                                                    <p className="md:hidden block xl:text-[38px] 4xl:text-[54px] text-[26px] leading-tight font-light sm:w-[80%]">
                                                        {data.title}
                                                    </p>
                                                    <p className="md:hidden block xl:text-[30px] 4xl:text-[40px] text-[20px] mt-[19px] xl:mt-[34px] leading-tight font-semibold">
                                                        {data?.subtitle}
                                                    </p>
                                                </div>
                                                {/* Desktop Image */}
                                                <div className="hidden md:block w-full h-full">
                                                    <Image
                                                        src={data.deskImg}
                                                        alt={`${data.title} image`}
                                                        width={0}
                                                        height={0}
                                                        className="object-cover object-[55%_20%] w-full h-full"
                                                        priority
                                                    />
                                                </div>

                                                {/* Mobile Image */}
                                                <div className="block md:hidden w-full mt-[27px] h-[70%] sm:h-[80%] max-[350px]:h-[60%]">
                                                    <Image
                                                        src={data.mobImg}
                                                        alt={`${data.title} image`}
                                                        width={0}
                                                        height={0}
                                                        className="object-cover object-center w-full h-full"
                                                        priority
                                                    />
                                                </div>
                                            </div>
                                            <div className="md:col-span-5 col-span-12 order-2">
                                                <h2 className="md:block hidden xl:text-[38px] 4xl:text-[54px] text-[26px] leading-tight font-light">
                                                    {data.title}
                                                </h2>
                                                <h3 className="md:block hidden xl:text-[30px] 4xl:text-[40px] text-[20px] mt-[19px] xl:mt-[34px] leading-tight font-semibold">
                                                    {data?.subtitle}
                                                </h3>
                                                <p className={`xl:text-[19px] 4xl:text-[22px] text-[16px] leading-tight font-normal sm:w-[80%] md:w-full ${data?.subtitle ? "mt-[30px]" : "mt-[20px]"} md:mt-[34px]`}>
                                                    {data.desc}
                                                </p>
                                                <UnorderedList arrName={data.dataList} ulClassName="list-disc xl:mt-[34px] mt-[19px] md:ml-[26px] ml-[20px] space-y-[19px] xl:space-y-[27px] sm:w-[80%] md:w-full" liClassName="xl:text-[18px] 4xl:text-[20px] text-[16px] leading-tight" />
                                                <div className="lg:mt-[60px] mt-[33px]">
                                                    <LearnMore btnName={t('learnMore')}/>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        )
                    })
                }
            </section>
            {/* why rialtes section */}
            <section className="custom-container relative 4xl:!pl-[142px] xl:!pl-[52px] lg:!pl-[42px] max-lg:px-0 xl:mt-[129px] mt-[76px] lg:pr-0">
                {/* Desktop Image */}
                <div className="hidden lg:block w-full lg:h-[430px] xl:h-[600px]">
                    <Image
                        src="/images/solutions/sap-cpi/why-rialtes-desk.webp"
                        alt="why-rialtes image"
                        width={0}
                        height={0}
                        className="object-cover object-center w-full h-full"
                        priority
                    />
                </div>
                {/* Mobile Image */}
                <div className="block lg:hidden w-full h-full">
                    <Image
                        src="/images/solutions/sap-cpi/Mobile/why-rialtes-mob.webp"
                        alt="why-rialtes image"
                        width={0}
                        height={0}
                        className="object-cover object-center w-full h-full"
                        priority
                    />
                </div>
                <div className="lg:absolute lg:mt-[-380px] xl:mt-[-520px] 4xl:mt-[-540px] max-lg:px-[36px] mt-[-60px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="col-span-6 lg:col-span-6 3xl:col-span-5">
                            <div className="bg-[#006FBE] text-[#ffffff] lg:ml-[60px] xl:pt-[60px] xl:px-[50px] xl:pb-[90px] pt-[29px] lg:px-[36px] px-[24px] pb-[65px]">
                                <h2 className="xl:text-[40px] 4xl:text-[56px] text-[26px] leading-tight font-light">
                                    {t('whyRialtesTitle')}
                                </h2>
                                <UnorderedList arrName={whyRialtesData} ulClassName="list-disc xl:mt-[60px] mt-[19px] md:ml-[26px] ml-[20px] space-y-[19px] xl:space-y-[27px]" liClassName="xl:text-[19px] 4xl:text-[20px] text-[16px] leading-tight" />
                                <div className="absolute xl:mt-[40px] lg:mt-[20px] sm:mt-[10px] mt-[20px]">
                                    <LearnMore btnName={t('learnMore')}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 lg:col-span-6"></div>
                    </div>
                </div>
            </section>
            {/* Contact Form */}
            <div className="custom-container xl:mt-[224px] lg:mt-[164px] xl:mb-[104px] mt-[104px] mb-[45px]">
                <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle1')} subtitle1={t('contactSubTitle2')} className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] lg:w-[70%] 4xl:w-[80%]" />
            </div >
        </section >
    )
}
