"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/[locale]/components/useUrl";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import UnorderedList from "@/app/[locale]/components/unorderedList";
import React from "react";
import LearnMoreButton from "@/app/[locale]/components/learnMore";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/sap-managed-services-enterprise-ai-strategy";
    const currUrl = useUrl()
    const t = useTranslations("sapManaged");
    const locale = useLocale();
    const content = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
    });
    const { schemaData, faq, mainData, whatSapData, whyManagedData, keyData, whatDoData, whatEnterpriseData, howToChooseData } = content.sapManaged;

    return (
        <section className="min-h-screen">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="Partners, website, welcome"
                canonical={
                    `https://www.rialtes.com/${locale}/insights/blogs/sap-managed-services-enterprise-ai-strategy`
                }
            />

            <Script
                id="schema-sapManaged"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/digital-data-stream.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/digital-data-stream-mobile.webp"
                        alt={t('bannerAlt')}
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
                        <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="05 December 2025" />


                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t('blogTitle')}</h1>

                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    mainData.map((data, ind) => {
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


                            {/* what sap section */}
                            {
                                whatSapData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="space-y-2 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] text-[20px] font-bold">
                                            {data.subTitle}
                                        </h3>
                                        <UnorderedList arrName={data.list} ulClassName="pl-[30px] lg:pl-[40px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                        <p
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                    </div>
                                ))
                            }
                            {/* why managed section */}
                            {
                                whyManagedData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="space-y-2 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <UnorderedList arrName={data.list} ulClassName="pl-[30px] lg:pl-[40px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                        <UnorderedList arrName={data.desc2} ulClassName="space-y-2 mt-10 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <UnorderedList arrName={data.list2} ulClassName="pl-[30px] lg:pl-[40px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                    </div>
                                ))
                            }
                            {/* key section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('keyTitle')}</h2>
                                {keyData.map((data, ind) => (
                                    <div className="grid md:grid-cols-12 gap-x-5 max-md:pb-10 max-md:last:pb-0 max-md:pt-5 md:py-5 border-b border-[#b0aeae] last:border-0" key={ind} >

                                        <div className="md:col-span-2 max-md:flex gap-10">
                                            <div className="text-[#1A82E0] 4xl:text-[150px] 2xl:text-[130px] xl:text-[120px] md:text-[100px] text-[80px]">
                                                {ind + 1}
                                            </div>

                                            <div className="max-md:flex justify-center items-center">
                                                <p className="md:hidden block 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[16px] font-bold">
                                                    {data.title}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="md:col-span-10 flex flex-col justify-center">
                                            <h3 className="md:block hidden 4xl:text-[24px] 2xl:text-[21px] xl:text-[18px] md:text-[16px] text-[16px] font-bold">
                                                {data.title}
                                            </h3>

                                            <p
                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* what section */}
                            {
                                whatDoData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />

                                        <table className="w-full table-fixed border-collapse mt-10">

                                            <thead>
                                                <tr className="bg-[#E3E3E3] text-black font-medium 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[14px]">
                                                    <th className="xl:w-[30%] md:w-[25%] w-[30%] text-left py-3 pl-6">{t('tableTitle1')}</th>
                                                    <th className="xl:w-[32%] md:w-[45%] w-[40%] text-left py-3 pl-4">{t('tableTitle2')}</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {data.list.map((row, idx) => (
                                                    <tr key={idx} className="border-b border-[#b0aeae] last:border-0">

                                                        <td className="p-3 font-medium align-top 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[14px] xl:pr-[220px] md:pr-[40px]">
                                                            {row.business}
                                                        </td>

                                                        <td className="p-3 font-medium pl-6 align-top 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[14px]">
                                                            {row.managed}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <p
                                            className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                    </div>
                                ))
                            }

                            {/* how to choose section */}
                            {
                                howToChooseData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />
                                        {
                                            data.list.map((data, ind) => {
                                                return (
                                                    <div className="md:flex mt-24 md:mt-[26px] py-[34px] md:py-[40px] lg:py-[40px] 4xl:py-[40px] px-[26px] md:pr-[50px] 4xl:pr-[30px] border border-[#707070] relative md:ml-[90px] sm:w-[80%] md:w-auto xl:w-[950px] 4xl:w-[1100px]" key={ind}>
                                                        <h3 className={`md:absolute max-md:mt-[-80px] sm:mt-[-70px] md:mt-0 md:top-[50%] md:translate-y-[-50%] 4xl:w-[400px] 2xl:w-[360px] xl:w-[360px] md:w-[380px] w-fit md:left-[-60px] bg-[#006FBE] text-white font-semibold 4xl:text-[22px] 2xl:text-[19px] xl:text-[19px] md:text-[20px] text-[20px] px-[20px] py-[18px] md:px-[30px] md:py-[22px] leading-tight xl:h-[90px] 4xl:h-[110px] ${(ind == 4) ? "xl:pt-[36px]" : ""} ${(ind == 2) ? "4xl:pt-[36px]" : ""}`}><span>{data.title}</span></h3>
                                                        <div className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[340px] xl:ml-[320px] 4xl:ml-[380px]" dangerouslySetInnerHTML={{ __html: data.desc }} />
                                                    </div>

                                                )
                                            })
                                        }
                                    </div>
                                ))
                            }

                            <div className="md:mt-[50px] mt-[40px] lg:w-[920px] xl:w-[1100px] 4xl:w-[1300px] relative md:h-[340px] lg:h-[300pxc] xl:h-[340px] 4xl:h-[400px] md:block hidden">
                                {/* IMAGE */}
                                <Image
                                    src="/images/blog/digital-ocean-wave.webp"
                                    alt={t('webinarImgAlt')}
                                    width={1000}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                                {/* TEXT BLOCK */}
                                <div className="absolute inset-0 flex flex-col justify-between px-10 pt-8 text-white md:max-w-[480px] lg:max-w-[550px]">

                                    <div>
                                        <h2 className="font-bold 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                            {t('webinarTitle')}</h2>

                                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                            {t('webinarDesc')}
                                        </p>
                                    </div>

                                    <div>
                                        <LearnMoreButton bgcolor="#006FBE" bordercolor="#006FBE" btnName={t("watchbuttonText")} href="https://www.rialtes.com/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes/" arialabel="watch webinar button" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 md:hidden">
                                <div className="h-[300px]">
                                    <Image
                                        src="/images/blog/digital-ocean-wave-mobile.webp"
                                        alt="Large ocean wave blended with glowing digital network lines symbolizing data and technology."
                                        width={1000}
                                        height={600}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="bg-[#073259] flex flex-col justify-between px-10 pt-10 text-white">

                                    <div>
                                        <p className="font-bold 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                            Voyage with SAP – Transformational RISE with SAP Services by Rialtes
                                        </p>

                                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mb-5">
                                            {t('webinarDesc')}
                                        </p>
                                    </div>

                                    <div>
                                        <LearnMoreButton bgcolor="#006FBE" bordercolor="#006FBE" btnName={t('watchBtn')} href="https://www.rialtes.com/insights/webinars/voyage-with-sap-transformational-rise-with-sap-services-by-rialtes/" arialabel="watch webinar button" />
                                    </div>
                                </div>
                            </div>

                            {/* why enterprise section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('whyTitle')}</h2>
                                {
                                    whatEnterpriseData.map((data, ind) => {
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
            </section>
            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('faqTitle')}</h2>
                <div className="mt-[29px] xl:mt-[30px]">
                    <FAQAccordion faqData={faq} />
                </div>
            </section>

            {/* blog carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section>
    )
}