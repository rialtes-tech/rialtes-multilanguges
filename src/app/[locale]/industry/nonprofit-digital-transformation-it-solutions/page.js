import ContactForm from "@/app/[locale]/components/contactform";
import LearnMore from "@/app/[locale]/components/learnMore";
import Seo from "../../components/Seo";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../messages/en/industry.json';
import esContent from '../../../../../messages/es/industry.json';
import frContent from '../../../../../messages/fr/industry.json';
import { changeLocalization } from "../../components/changeLocalization";
export default function retailPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Nonprofit Digital Transformation and IT Solutions",
        "url": "https://www.rialtes.com/industry/nonprofit-digital-transformation-it-solutions/",
        "description": "Smart IT solutions and digital transformation by Rialtes empower nonprofits to streamline grants, donors, volunteers, and mission-critical operations.",
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
            "name": "Nonprofit Digital Transformation and IT Solutions",
            "description": "Salesforce and SAP-powered IT transformation for nonprofits. Streamline donor journeys, grants, volunteers, and outcomes with AI and automation.",
            "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "Singapore" }
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Nonprofit Digital Transformation Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Fundraising & Campaign Management",
                            "description": "Create personalized, multichannel donor campaigns with real-time engagement tracking and automated impact reporting."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Family & Household Donor Mapping",
                            "description": "Visualize household giving patterns, uncover networks, and manage legacy or collective donor relationships."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Salesforce Marketing Cloud for Nonprofits",
                            "description": "Run AI-powered donor journeys, trigger-based outreach, and personalized communications for increased retention."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Donor Relationship Management",
                            "description": "Manage 360-degree donor profiles, major gift planning, and loyalty programs with transparency and insight."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Volunteer Engagement Solutions",
                            "description": "Optimize volunteer recruitment, scheduling, and retention with personalized communication and self-service portals."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Program & Outcome Management",
                            "description": "Track real-time program impact, outcome metrics, and performance dashboards for stakeholders and funders."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Grant Lifecycle Automation",
                            "description": "Automate grant applications, approvals, fund allocation, compliance, and reporting with integrated workflows."
                        }
                    }
                ]
            }
        }
    }
    const t = useTranslations('nonProfit')
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { whyChooseData, thoughtLeadershipData, preDeliveredData, commonSectionData, } = content.nonProfit
    return (
        <section className="min-h-screen">
            <Seo
                title="Nonprofit Digital Transformation and IT Solutions | Rialtes"
                description="Rialtes empowers nonprofits with smart IT solutions and digital transformation to streamline grants, donors, volunteers, and program operations seamlessly."
                canonical="https://www.rialtes.com/industry/nonprofit-digital-transformation-it-solutions/"
            />
            <Script
                id="schema-nonprofit"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            {/* herosection */}
            <section className="relative group overflow-hidden h-[420px] lg:h-[550px] 4xl:h-[650px]">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/industry/non-profit-industry/hero-desk-banner.webp"
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
                        src="/images/industry/non-profit-industry/Mobile/hero-mob-banner.webp"
                        alt="mobile banner"
                        fill
                        style={{ objectFit: "cover", objectPosition: "5% 20%" }}
                        priority
                    />
                </div>
                <div className="relative h-full custom-container sm:flex sm:items-center pt-[123px] sm:pt-0 ">
                    <div className="grid grid-cols-12 w-full">
                        <div className="4xl:col-span-7 sm:col-span-7 md:col-span-6 lg:col-span-6 col-span-9 max-[400px]:col-span-12">
                            <h3 className="text-[18px] md:text-[24px] font-bold">
                                {t('headerTitle')}
                            </h3>
                            <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px] mt-[11.5px] lg:mt-[28.5px] w-[88%] sm:w-full">
                                {t('headerSubTitle')}
                            </h2>
                            <h2 className="text-[#000000] text-[20px] leading-tight xl:text-[28px] 4xl:text-[35px] mt-[14px] lg:mt-[46px] font-bold">
                                {t('headerSubTitle2')}
                            </h2>
                        </div>
                        <div className="4xl:col-span-5 sm:col-span-5 md:col-span-6 lg:col-span-6 col-span-3">
                        </div>
                    </div>
                </div>
            </section>
            {/* page description section */}
            <section className="custom-container xl:mt-[99px] mt-[50px]">
                <div className="md:w-[80%] lg:w-[70%] 4xl:w-[80%] sm:w-[90%]">
                    <h1 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[56px] ">
                        {t('pageDescTitle')}
                    </h1>
                    <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[43px] mt-[30px] w-[94%] md:w-[90%] lg:w-[90%]">
                        {t('pageDesc')}
                    </p>
                </div>
            </section>
            {/* thought leadership section */}
            <section className="custom-container xl:mt-[121px] mt-[72px] max-md:px-0">
                <div className="grid lg:grid-cols-12 grid-cols-1">
                    <div className="col-span-12 md:order-1 order-2">
                        <div className="grid md:grid-cols-12 grid-cols-1 lg:gap-[40px]">
                            <div className="4xl:col-span-5 xl:col-span-5 md:col-span-6 col-span-12 max-md:mt-[36px] max-md:px-[36px]">
                                <h2 className="text-[26px] xl:text-[40px] 4xl:text-[50px]">
                                    {t('thoughtTitle')}
                                </h2>
                            </div>
                            <div className="4xl:col-span-7 xl:col-span-7 md:col-span-6 col-span-12 max-md:px-[36px]">
                                <h3 className="text-[22px] xl:text-[30px] 4xl:text-[36px] font-semibold max-md:mt-[14px] w-[90%] sm:w-[70%] md:w-full">
                                    {t('thoughtSubTitle')}
                                </h3>
                                <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] xl:mt-[19px] mt-[26px] sm:w-[80%] md:w-[90%] lg:w-[84%]">
                                    {t('thoughtDesc')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:order-2 order-1 md:mt-[56px] mt-0">
                        <div>
                            <div className="md:block hidden w-full h-full">
                                <Image
                                    src="/images/industry/non-profit-industry/thought-leadership-desk.webp"
                                    alt="thought-leadership desktop img"
                                    width={0}
                                    height={0}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                            <div className="md:hidden block w-full h-full">
                                <Image
                                    src="/images/industry/non-profit-industry/Mobile/thought-leadership-mob.webp"
                                    alt="thought-leadership mob img"
                                    width={0}
                                    height={0}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[80px] 4xl:gap-[120px] gap-y-[40px] mt-[30px] xl:mt-[55px] max-md:px-[36px]">
                    {
                        thoughtLeadershipData.map((data, ind) => {
                            return (
                                <div key={ind}>
                                    <p className="xl:text-[28px] 4xl:text-[32px] text-[20px] leading-tight font-semibold">
                                        {data.title}
                                    </p>
                                    <UnorderedList arrName={data.dataList} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[19px] mt-[20px] pl-[20px]" liClassName="text-[16px] xl:text-[20px] leading-tight font-normal" />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            {/* pre-delivered section */}
            <section className="custom-container xl:mt-[110px] mt-[89px]">
                <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[56px] md:w-[70%] lg:w-[50%] xl:w-[70%] 4xl:w-[70%]">
                    {t('preDeliveredTitle')}
                </h2>
                <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight mb-[34px] xl:mb-[46px] xl:mt-[41px] mt-[26px] font-normal md:w-[80%] xl:w-[70%]">
                    {t('preDeliveredDesc')}
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 xl:mt-[56px] mt-[26px] sm:w-[80%] md:gap-[40px] md:gap-y-[21px] gap-y-[16px]">
                    {
                        preDeliveredData.map((data, ind) => {
                            return (
                                <div className="pt-[33px] px-[28px] pb-[46px] xl:px-[48px] xl:pt-[52px] xl:pb-[42px] border border-[#707070] hover:bg-[#D9F2FF]" key={ind}>
                                    <p className="xl:text-[26px] 4xl:text-[30px] text-[20px] leading-tight font-bold text-[#006FBE]">
                                        {data.title}
                                    </p>
                                    <p className="xl:text-[18px] 4xl:text-[24px] text-[16px] leading-tight xl:mt-[27px] mt-[24px] font-normal">
                                        {data.desc}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mt-[30px] xl:mt-[58px]">
                    <LearnMore btnName={t('learnMoreBtn')} />
                </div>
            </section>
            {/* common sections */}
            <section className={`md:mt-[133px] mt-[90px] md:space-y-[190px] space-y-[89px]`}>
                {
                    commonSectionData.map((data, ind) => {
                        return (
                            <div key={ind} className="custom-container !pr-0 max-md:px-0 ">
                                <div className="relative max-md:pl-[36px]">
                                    <div className="absolute z-20 mt-[-36px] md:mt-[-40px] xl:mt-[-50px]">
                                        <p className="xl:text-[60px] 4xl:text-[70px] text-[50px] text-[#006FBE] ml-[32px] font-bold">{ind + 1}</p>
                                    </div>
                                    <div className="custom-container !pl-0 xl:pt-[88px] pt-[58px] border-b-4 border-[#006FBE]" style={{ backgroundColor: data.bgColor }}>
                                        {/* extension */}
                                        <div className="absolute top-0 left-0 md:left-[-20px] xl:left-[-40px] 4xl:left-[-100px] h-full w-[36px] md:w-[20px] xl:w-[40px] 4xl:w-[100px] z-0 border-t-4 border-[#006FBE]"
                                            style={{ backgroundColor: data.bgColor }}></div>
                                        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] 4xl:gap-[40px] gap-y-[22px]">
                                            <div className="md:col-span-6 col-span-12">
                                                <h2
                                                    className={`text-[26px] leading-tight xl:text-[40px] 4xl:text-[60px]  ${ind === 3 || ind === 5 ? "xl:w-[60%] lg:w-[70%]" : "md:w-[80%] lg:w-[70%] xl:w-[80%] 4xl:w-[98%]"}`}>
                                                    {data.title}
                                                </h2>
                                            </div>
                                            <div className="md:col-span-6 col-span-12">
                                                {data.title2 && <h2 className={`text-[20px] leading-tight xl:text-[30px] 4xl:text-[36px] font-bold`}>
                                                    {data.title2}
                                                </h2>}
                                                <p className={`xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight ${ind == 2 ? "xl:mt-4" : "xl:mt-[32px]"}  mt-[16px] font-normal`}>
                                                    {data.desc}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] 4xl:gap-[60px] gap-y-[26px] md:mt-0 mt-[34px] relative">
                                            <div className="md:order-1 order-2">
                                                <p className={`xl:text-[28px] 4xl:text-[32px] text-[18px] leading-tight font-semibold md:mt-[80px] ${ind == 2 && "xl:mt-[51px]"}`}>
                                                    {t('significanceTitle')}
                                                </p>
                                                <UnorderedList arrName={data.dataList} ulClassName={`xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[19px] mt-[22px] pl-[20px] xl:w-[88%] xl:pb-[182px] pb-[87px] ${ind == 2 && "xl:pb-[108px]"}`} liClassName="text-[16px] xl:text-[20px] leading-tight font-normal" />
                                            </div>
                                            <div className="md:order-2 order-1">
                                                <div className="md:block hidden w-full h-full relative">
                                                    <Image
                                                        src={data.deskImg}
                                                        alt="desktop img"
                                                        width={0}
                                                        height={0}
                                                        className={`w-full h-full object-cover absolute mt-[80px] ${ind == 2 && "md:mt-[50px] lg:mt-[30px]"}`}
                                                        priority
                                                    />
                                                </div>
                                                <div className="md:hidden block w-full h-full">
                                                    <Image
                                                        src={data.mobImg}
                                                        alt="mob img"
                                                        width={0}
                                                        height={0}
                                                        className="w-full h-full object-cover"
                                                        priority
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0">
                                        <div className={`z-20`}>
                                            <LearnMore btnName={t('learnMoreBtn')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
            {/* seamless section */}
            <section className="custom-container md:mt-[207px] 4xl:mt-[267px] mt-[70px]">
                <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[56px] md:w-[60%] lg:w-[63%] 4xl:w-[80%]">
                    {t('seamlessTitle')}
                </h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:mt-[87px] mt-[43px] lg:gap-y-[127px] md:gap-[40px] lg:gap-0 md:gap-y-[50px] gap-y-[50px]">
                    {/* Card 1 */}
                    <div className="md:flex md:flex-col md:h-full">
                        <div className="md:flex md:flex-grow md:flex-col sm:w-[80%] lg:w-full lg:border-r lg:border-gray-700 lg:pr-[40px] max-lg:border-b max-lg:border-gray-700 max-lg:pb-[40px]">
                            <p className="xl:text-[26px] 4xl:text-[30px] text-[20px] leading-tight font-bold text-[#006FBE] xl:w-[80%]">
                                {t('seamlessCard1Title')}
                            </p>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mb-[46px] xl:mt-[19px] mt-[14px] font-normal">
                                {t('seamlessCard1Desc')}
                            </p>
                            <div className="md:mt-auto mt-[30px]">
                                <LearnMore btnName={t('learnMoreBtn')} />
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="md:flex md:flex-col md:h-full">
                        <div className="md:flex md:flex-grow md:flex-col sm:w-[80%] lg:w-full lg:pl-[40px] lg:border-r lg:border-gray-700 lg:pr-[40px] max-lg:border-b max-lg:border-gray-700 max-lg:pb-[40px]">
                            <p className="xl:text-[26px] 4xl:text-[30px] text-[20px] leading-tight font-bold text-[#006FBE]">
                                {t('seamlessCard2Title')}
                            </p>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mb-[46px] xl:mt-[19px] mt-[14px] font-normal">
                                {t('seamlessCard2Desc')}
                            </p>
                            <div className="md:mt-auto mt-[30px]">
                                <LearnMore btnName={t('learnMoreBtn')} />
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="md:flex md:flex-col md:h-full">
                        <div className="md:flex md:flex-grow md:flex-col sm:w-[80%] lg:w-full lg:pl-[40px] max-lg:border-b max-lg:border-gray-700 max-lg:pb-[40px]">
                            <p className="xl:text-[26px] 4xl:text-[30px] text-[20px] leading-tight font-bold text-[#006FBE] xl:w-[80%]">
                                {t('seamlessCard3Title')}
                            </p>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mb-[46px] xl:mt-[19px] mt-[14px] font-normal">
                                {t('seamlessCard3Desc')}
                            </p>
                            <div className="md:mt-auto mt-[30px]">
                                <LearnMore btnName={t('learnMoreBtn')} />
                            </div>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="md:flex md:flex-col md:h-full">
                        <div className="md:flex md:flex-grow md:flex-col sm:w-[80%] lg:w-full lg:border-r lg:border-gray-700 lg:pr-[40px] max-lg:border-b max-lg:border-gray-700 max-lg:pb-[40px]">
                            <p className="xl:text-[26px] 4xl:text-[30px] text-[20px] leading-tight font-bold text-[#006FBE]">
                                {t('seamlessCard4Title')}     <br /><span className="xl:text-[18px] 4xl:text-[24px] text-[16px]">{t('seamlessCard4Title2')}</span>
                            </p>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mb-[46px] xl:mt-[19px] mt-[14px] font-normal">
                                {t('seamlessCard4Desc')}
                            </p>
                            <div className="md:mt-auto mt-[30px]">
                                <LearnMore btnName={t('learnMoreBtn')} />
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="md:flex md:flex-col md:h-full">
                        <div className="md:flex md:flex-grow md:flex-col sm:w-[80%] lg:w-full lg:pl-[40px]">
                            <p className="xl:text-[26px] 4xl:text-[30px] text-[20px] leading-tight font-bold text-[#006FBE]">
                                {t('seamlessCard5Title')}  <br /> <span className="xl:text-[18px] 4xl:text-[24px] text-[16px]">{t('seamlessCard5Title2')}</span>
                            </p>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mb-[46px] xl:mt-[19px] mt-[14px] font-normal">
                                {t('seamlessCard5Desc')}
                            </p>
                            <div className="md:mt-auto mt-[30px]">
                                <LearnMore btnName={t('learnMoreBtn')} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* enhanced engagement section */}
            <section className="custom-container md:mt-[121px] mt-[40px] bg-[#F0F0F0] xl:pt-[75px] pt-[43px] xl:pb-[146px] pb-[77px]">
                <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[56px] xl:w-[60%] sm:w-[70%] md:w-[50%] lg:w-[60%]">
                    {t('enhancedTitle')}
                </h2>
                <div className="grid md:grid-cols-2 grid-cols-1 xl:mt-[48px] mt-[47px] md:gap-[20px] gap-y-[93px] sm:gap-y-[0px]">
                    {/* col 1 */}
                    <div>
                        <div className="md:block hidden w-[80%] h-[60%]">
                            <Image
                                src="/images/industry/non-profit-industry/donor-volunteer-desk-img.webp"
                                alt="donor-volunteer desktop img"
                                width={0}
                                height={0}
                                className=" w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className="md:hidden block w-full h-[60%]">
                            <Image
                                src="/images/industry/non-profit-industry/Mobile/donor-volunteer-mob-img.webp"
                                alt="donor-volunteer mob img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className="sm:w-[80%] xl:w-[90%] 4xl:w-[80%]">
                            <h3 className="text-[20px] leading-tight xl:text-[36px] 4xl:text-[40px] xl:mt-[59px] mt-[29px] font-bold">
                                {t('enhancedSubTitle')}
                            </h3>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[20px]">
                                {t('enhancedDesc')}
                                <br /> <br />
                                {t('enhancedDesc2')}
                            </p>
                        </div>
                    </div>
                    {/* col 2 */}
                    <div>
                        <div className="md:block hidden w-[80%] h-[60%]">
                            <Image
                                src="/images/industry/non-profit-industry/agentforce-desk-img.webp"
                                alt="agentforce desktop img"
                                width={0}
                                height={0}
                                className=" w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className="md:hidden block w-full h-[60%]">
                            <Image
                                src="/images/industry/non-profit-industry/Mobile/agentforce-mob-img.webp"
                                alt="agentforce mob img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className="sm:w-[80%] xl:w-[90%] 4xl:w-[80%]">
                            <h3 className="text-[20px] leading-tight xl:text-[36px] 4xl:text-[40px] xl:mt-[59px] mt-[29px] font-bold">
                                {t('agentforceTitle')}
                            </h3>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[20px]">
                                {t('agentforceDesc1')}   <br /> <br /> {t('agentforceDesc2')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[75px] gap-y-[29px] md:mt-[148px] xl:mt-[188px] sm:mt-[0px] mt-[93px]">
                    <div className="4xl:col-span-5 md:col-span-5 lg:col-span-6 col-span-12 flex justify-center">
                        <div className="md:block hidden w-full h-full">
                            <Image
                                src="/images/industry/non-profit-industry/data-cloud-desk-img.webp"
                                alt="data-cloud desktop img"
                                width={0}
                                height={0}
                                className=" w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className="md:hidden block w-full h-full">
                            <Image
                                src="/images/industry/non-profit-industry/Mobile/data-cloud-mob-img.webp"
                                alt="data-cloud mob img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                    <div className="4xl:col-span-5 md:col-span-5 lg:col-span-6 col-span-12">
                        <div className="sm:w-[80%] md:w-[90%] lg:w-[80%] flex flex-col items-center xl:w-full">
                            <h3 className="text-[20px] leading-tight xl:text-[36px] 4xl:text-[40px] font-bold">
                                {t('dataCloudTitle')}
                            </h3>
                            <p className="xl:text-[18px] 4xl:text-[22px] text-[16px] leading-tight xl:mt-[34px] mt-[20px]">
                                {t('dataCloudDesc')}
                                <br />
                                <br />
                                {t('dataCloudDesc2')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* learn more btn */}
            <div className="custom-container">
                <div className="absolute mt-[-50px]">
                    <LearnMore btnName={t('learnMoreBtn')} />
                </div>
            </div>
            {/* why choose section */}
            <section className="custom-container md:pr-0 xl:mt-[181px] mt-[94px] text-[#000000]">
                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[40px] max-md:gap-y-[34px]">
                    <div className="md:col-span-6 col-span-12 md:order-1 order-2 xl:w-[90%]">
                        <h2 className="text-[26px] leading-tight xl:text-[40px] 4xl:text-[56px]">
                            {t('whyChooseTitle')}
                        </h2>
                        <UnorderedList arrName={whyChooseData} ulClassName="xl:space-y-[24px] space-y-[19px] list-disc xl:mt-[61px] mt-[24px] pl-[20px] 4xl:w-[74%]" liClassName="text-[16px] xl:text-[20px] leading-tight font-normal" />
                        <div className="mt-[46px] xl:mt-[84px]">
                            <LearnMore btnName={t('learnMoreBtn')} />
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12 md:order-2 order-1">
                        <div className="md:block hidden w-full h-full">
                            <Image
                                src="/images/industry/non-profit-industry/why-choose-desk-img.webp"
                                alt="why-choose desktop img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                        <div className="md:hidden block w-full h-full">
                            <Image
                                src="/images/industry/non-profit-industry/Mobile/why-choose-mob-img.webp"
                                alt="why-choose mob img"
                                width={0}
                                height={0}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Form */}
            < div className="custom-container lg:mt-[120px] lg:mb-[92px] mt-[73px] mb-[45px]">
                <ContactForm title={t('contactTitle')} subtitle={t('contactSubTitle')} subtitle1={t('contactSubTitle2')} className={"xl:text-[40px] 4xl:text-[60px] text-[26px] xl:w-[50%] 4xl:w-[50%] md:w-[50%]"} />
            </div >
        </section>
    )
}

