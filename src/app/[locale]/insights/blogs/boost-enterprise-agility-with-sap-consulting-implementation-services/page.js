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
    const fullUrl = "https://www.rialtes.com/insights/blogs/boost-enterprise-agility-with-sap-consulting-implementation-services";
    const currUrl = useUrl()
    const t = useTranslations('sapIntegrationServices')
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { sapDevelopmentIntegration, modernEnterprise, customSAP, roleofSAP, blueprintBuild, tailoringSAP, integrationBackbone, topSAPPartners, realBusiness, sapConsulting, faqs, roleofSAPPara, blueprintPara1, topSAPPartnersPara, schemaData } = blogsContent.sapIntegrationServices;

    return (
        <section className="min-h-screen">
            <Seo
                title={t("seoTitle")}
                description={t("seoDescription")}
                keywords="Partners, website, welcome"
                canonical={
                    `https://www.rialtes.com/${locale}/insights/blogs/boost-enterprise-agility-with-sap-consulting-implementation-services/`
                }
            />

            <Script
                id="schema-copilots"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/digital-network-touch-data-connection-visualization.webp"
                        alt={t("bannerAlt")}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/digital-network-touch-data-connection-visualization-mobile.webp"
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
                        <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="12 November 2025" />




                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t("sapIntegrationTitle")}</h1>

                            <div className="xl:mt-[38px] mt-[33px]">
                                {
                                    sapDevelopmentIntegration.map((data, ind) => {
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



                            {/* Custom SAP Development Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("sapDevelopmentTitle")}
                                </h2>
                                <div className="xl:mt-[38px] mt-[33px]">
                                    {
                                        modernEnterprise.map((data, ind) => {
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
                                {
                                    customSAP.map((data, ind) => {
                                        return (
                                            <div
                                                className="md:flex mt-24 md:mt-10 py-[34px] 2xl:py-[46px] xl:py-[40px] px-[26px] 
                                                           md:pr-[44px] 4xl:pr-[100px] 2xl:pr-[90px] xl:pr-[40px] border border-[#707070] relative 
                                                           md:ml-[90px] sm:w-[80%] md:w-[78%] lg:w-[75%] xl:w-[80%] 4xl:w-[81%] 2xl:w-[80%] "
                                                key={ind}>
                                                <h3
                                                    className="md:absolute md:flex items-center justify-start
                                                                max-md:mt-[-80px] sm:mt-[-70px] md:mt-0
                                                                md:top-1/2 md:-translate-y-1/2 md:left-[-80px]
                                                                bg-[#006FBE] text-white font-semibold
                                                                4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]
                                                                px-[30px] py-[22px] leading-tight
                                                                4xl:w-[340px] 2xl:w-[320px] xl:w-[300px] md:w-[300px] w-fit 4xl:h-[100px] 2xl:h-[100px] xl:h-[90px]">
                                                    {data.title}
                                                </h3>

                                                <div
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]
                                                                font-medium my-auto max-md:mt-8
                                                                md:ml-[220px] xl:ml-[260px] 4xl:ml-[310px] 2xl:ml-[300px]  "
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>


                                        )
                                    })
                                }
                                <p className="mt-[34px] xl:mt-[49px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("sapDevelopmentPara")}
                                </p>
                            </div>

                            {/*Role of SAP Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("roleofSAPTitle")}
                                </h2>

                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                    dangerouslySetInnerHTML={{ __html: roleofSAPPara }} />

                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("roleofSAPPara2")}
                                </p>

                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full">
                                    {
                                        roleofSAP.map((data, ind) => {
                                            return (
                                                <div key={ind} className={`mt-[48px] ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-md:border-b max-md:pb-5" : ""} ${ind == 3 ? "lg:pl-[32px] border-[#707070] lg:border-l" : ""} ${ind == 0 ? "lg:pr-[20px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-md:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                    <h3 className="4xl:text-[22px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold  ">{data.title}</h3   >
                                                    <p className="md:mt-4 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] md:mb-4">{data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("roleofSAPPara3")}
                                </p>

                            </div>

                            {/**Blueprint to Build Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("blueprintTitle")}
                                </h2>

                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                    dangerouslySetInnerHTML={{ __html: blueprintPara1 }} />
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] 4xl:w-[1200px] sm:w-[80%] md:w-full">
                                    {
                                        blueprintBuild.map((elem, id) => {
                                            return (
                                                <div className="4xl:p-[30px] p-[22px] border border-[#707070]" key={id}>
                                                    <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070]">{elem.title}</h3>
                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("blueprintPara2")}
                                </p>
                            </div>




                            {/* Tailoring SAP Development Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("tailoringSAPTitle")}
                                </h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {t("tailoringSAPPara")}
                                </p>

                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                    {tailoringSAP.map((item, index) => (
                                        <li key={index}>
                                            <h3 className="mr-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 font-bold inline ">{item.title}</h3>
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item.description}</p>
                                        </li>
                                    ))}
                                </ul>



                            </div>

                            {/**Integration the backbone section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("IntegrationTitle")}
                                </h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {t("IntegrationPara1")}
                                </p>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {t("IntegrationPara2")}
                                </p>

                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                    {integrationBackbone.map((item, index) => (
                                        <li key={index}>
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item}</p>
                                        </li>
                                    ))}
                                </ul>


                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("IntegrationPara3")}
                                </p>
                            </div>

                            {/**Top SAP Partners Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("topSAPPartnersTitle")}
                                </h2>

                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                    dangerouslySetInnerHTML={{ __html: topSAPPartnersPara }} />

                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("topSAPPartnersPara2")} </p>

                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                    {topSAPPartners.map((item, index) => (
                                        <li key={index}>
                                            <h3 className="mr-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 font-bold inline ">{item.title}</h3>
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item.description}</p>
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {t("topSAPPartnersPara3")}

                                </p>


                            </div>

                            {/**Real Business Outcomes Section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("realBusinessTitle")}
                                </h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {t("realBusinessPara")}
                                </p>


                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                    {realBusiness.map((item, index) => (
                                        <li key={index}>
                                            <h3 className="mr-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 font-bold inline ">{item.title}</h3>
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] inline">{item.description}</p>
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> {t("realBusinessPara2")}

                                </p>


                            </div>


                            {/* Partner in SAP Consulting & Implementation section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("partnersinSAPTitle")}
                                </h2>

                                <div className="xl:mt-[30px] mt-[33px]">
                                    {
                                        sapConsulting.map((data, ind) => {
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




                        </div>
                    </div>
                </div>
            </section>
            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("faqTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[30px]">
                    <FAQAccordion faqData={faqs} />
                </div>
            </section>

            {/* blog carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section>
    )
}