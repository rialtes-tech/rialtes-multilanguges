"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import useUrl from "@/app/[locale]/components/useUrl";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/tracking-service-level-agreements-without-losing-mind";
    const currUrl = useUrl()
    const t = useTranslations('slasBilling')
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { dataDriven, propertyOpsSection, gutDriven, trackingDilemmaSection, smarterBilling, smartDashboardSection, dashboardStats, mostFirms, faqs, schemaData } = blogsContent.slasBilling;


    return (
        <section className="min-h-screen">
            <Seo
                title={t("seoTitle")}
                description={t("seoDescription")}
                keywords="Partners, website, welcome"
                canonical={`https://www.rialtes.com/${locale}/insights/blogs/tracking-service-level-agreements-without-losing-mind/`}
            />

            <Script
                id="schema-trackingService"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/ai-sla-billing-efficiency.webp"
                        alt={t("bannerAlt")}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/ai-sla-billing-efficiency-mobile.webp"
                        alt={t("bannerAlt")}
                        priority
                        height={0}
                        width={0}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>


            <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
                <div className="grid lg:grid-cols-12">
                    <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

                        {/* date and icons */}
                        <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="27 October 2025" />

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t("slasTitle")}</h1>

                            <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                {t("slasPara1")}
                            </p>

                            <h2 className="font-semibold 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] mt-5 xl:mt-[20px] leading-tight">{t("slasTitle2")}</h2>

                            <div className="xl:mt-[20px] mt-5">
                                {
                                    dataDriven.map((data, ind) => {
                                        return (
                                            <p
                                                key={ind}
                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data }}
                                            />
                                        )
                                    })

                                }

                            </div>

                            {/**State Property Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t("slasTitle3")}</h2>

                                <div className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{propertyOpsSection.paragraph}</p>
                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{propertyOpsSection.paragraph2}</p>

                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{propertyOpsSection.bulletIntro}</p>
                                    <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                        {propertyOpsSection.bulletPoints.map((point, i) => (
                                            <li key={i} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{point}</li>
                                        ))}
                                    </ul>

                                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5">{propertyOpsSection.closing}</p>


                                </div>
                            </div>

                            {/**Gut-Driven to Data-Driven Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("gutDrivenSection")}
                                </h2>

                                <div className="xl:mt-[38px] mt-[33px]">
                                    {
                                        gutDriven.map((data, ind) => {
                                            return (
                                                <p
                                                    key={ind}
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data }}
                                                />
                                            )
                                        })

                                    }

                                </div>


                            </div>

                            {/**SLA  Tracking Dilemma Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t("slasTitle5")}</h2>

                                <div className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{trackingDilemmaSection.paragraph}</p>
                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{trackingDilemmaSection.paragraph2}</p>

                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{trackingDilemmaSection.bulletIntro}</p>
                                    <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                        {trackingDilemmaSection.bulletPoints.map((point, i) => (
                                            <li key={i} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{point}</li>
                                        ))}
                                    </ul>

                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{trackingDilemmaSection.closing}</p>


                                </div>
                            </div>

                            {/**Smart Billing Sectionv */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("slasTitle6")}
                                </h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("smarterBillingPara1")}</p>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("smarterBillingPara2")}</p>
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] 4xl:w-[1200px] sm:w-[80%] md:w-full">
                                    {
                                        smarterBilling.map((elem, id) => {
                                            return (
                                                <div className="4xl:p-[30px] p-[22px] border border-[#707070]" key={id}>
                                                    <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070]">{elem.title}</h3>
                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("smarterBillingPara3")}</p>
                            </div>

                            {/**Smart Dashboard Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("smartDashboardTitle")}
                                </h2>
                                <div className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {smartDashboardSection.introParagraphs.map((para, i) => (
                                        <p key={i} className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{para}</p>
                                    ))}

                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{smartDashboardSection.bulletIntro}</p>

                                    <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                        {smartDashboardSection.bulletPoints.map((item, i) => (
                                            <li key={i} className="mt-2">
                                                <p className="font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item.bold}</p>
                                                <p className="mt-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item.text}</p>
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" >{smartDashboardSection.closing}</p>
                                </div>
                            </div>

                            {/**ROI Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("roiTitle")}
                                </h2>

                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("roiPara1")}
                                </p>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("roiPara2")}
                                </p>

                                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 mt-12 xl:pr-[10rem]">
                                    {dashboardStats.map((item, i) => (
                                        <div key={i}>
                                            <p className="text-[#006FBE] 4xl:text-[35px] 2xl:text-[32px] xl:text-[28px] md:text-[24px] text-[24px] font-bold">
                                                {item.percentage}
                                            </p>
                                            <p className="text-[#006FBE] font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">
                                                {item.boldText}
                                            </p>
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item.description}</p>
                                        </div>
                                    ))}
                                </div>



                                <p className="mt-12 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("roiPara3")}
                                </p>


                            </div>

                            {/**Data Driven Operations Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("dataDrivenTitle")}
                                </h2>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {t("dataDrivenPara1")}</p>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("dataDrivenPara2")}
                                </p>

                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full">
                                    {
                                        mostFirms.map((data, ind) => {
                                            return (
                                                <div key={ind} className={`mt-[48px] ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-md:border-b max-md:pb-5" : ""} ${ind == 3 ? "lg:pl-[32px] border-[#707070] lg:border-l" : ""} ${ind == 0 ? "lg:pr-[40px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-md:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                    <h3 className="4xl:text-[22px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold  ">{data.title}</h3   >
                                                    <p className="md:mt-4 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] md:mb-4">{data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("dataDrivenPara3")}
                                </p>

                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t("faqTitle")}</h2>
                <div className="mt-[29px] xl:mt-[30px]">
                    <FAQAccordion faqData={faqs} />
                </div>
            </section>

            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section>
    )
}
