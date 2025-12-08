"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import useUrl from "@/app/[locale]/components/useUrl";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import React from "react";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";


export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/reimagining-clinical-trial-patient-journey";
    const currUrl = useUrl()
    const t = useTranslations("reimaginingClinical");
    const locale = useLocale();
    const content = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
    });
    const { schemaData, mainData, fragmentationData, intelligentData, howIntelligentData, whyIntelligentData, howMediainaData, faqData } = content.reimaginingClinical;
    return (
        <section className="min-h-screen">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/reimagining-clinical-trial-patient-journey/"
                }
            />

            <Script
                id="schema-reimagine"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/future-of-digital-healthcare.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/future-of-digital-healthcare-mobile.webp"
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
                        <BlogSocialIcons fullUrl={fullUrl} topic="MediAina" date="04 December 2025" />

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


                            {/* fragmentation section */}
                            {
                                fragmentationData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        {data.desc && (
                                            <p
                                                className="mb-10 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                        )}
                                        {
                                            data.list.map((elem, id) => (
                                                <React.Fragment key={id}>
                                                    <h3 className="mt-10 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[16px] font-bold 4xl:w-[90%]">
                                                        {elem.title}
                                                    </h3>
                                                    <p
                                                        className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                    />
                                                </React.Fragment>
                                            ))
                                        }
                                        <p
                                            className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                    </div>
                                ))
                            }

                            {/* intelligent section */}
                            {
                                intelligentData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />

                                        <h3 className="mt-10 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[16px] font-bold">
                                            {data.subTitle}
                                        </h3>
                                        <p
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                        {
                                            data.list.map((elem, id) => (
                                                <div className={`grid lg:grid-cols-12 grid-cols-1 gap-[20px] mt-10 pb-[30px] border-b border-[#bfbdbd] ${id == 2 && "border-0"}`} key={id}>
                                                    <div className="flex gap-5 lg:gap-[40px] lg:col-span-4 max-lg:items-center">
                                                        <div className="text-center 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] bg-[#1486E6] text-white pt-2 font-bold w-[50px] lg:h-[60px] lg:w-[70px]">
                                                            {id + 1}
                                                        </div>
                                                        <h4 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold">{elem.title}</h4>
                                                    </div>
                                                    <div className="lg:col-span-7">
                                                        <p
                                                            className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                        />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <p
                                            className="mt-5 lg:mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                        />
                                    </div>
                                ))
                            }

                            {/* how intelligent ecosystem section */}
                            {
                                howIntelligentData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-10 mt-10">
                                            {
                                                data.list.map((elem, id) => (
                                                    <div className={`${(id == 0 || id == 2) ? "lg:pr-[60px] lg:border-r border-[#bfbdbd]" : "lg:pl-[60px]"}`} key={id}>
                                                        <h3 className="4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[16px] font-bold 4xl:w-[90%]">
                                                            {elem.title}
                                                        </h3>
                                                        <p
                                                            className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] lg:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                        />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <p
                                            className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] lg:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />
                                    </div>
                                ))
                            }

                            {/* why intelligent section */}{
                                whyIntelligentData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />
                                        <UnorderedList arrName={data.list} ulClassName="pl-[30px] lg:pl-[40px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                        <p
                                            className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />
                                    </div>
                                ))
                            }
                            {/* how mediaina section */}{
                                howMediainaData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="space-y-2 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <UnorderedList arrName={data.list} ulClassName="pl-[30px] lg:pl-[40px] space-y-1 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                        <UnorderedList arrName={data.desc2} ulClassName="space-y-2 mt-10 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('faqTitle')}</h2>
                <div className="mt-[29px] xl:mt-[30px]">
                    <FAQAccordion faqData={faqData} />
                </div>
            </section>

            {/* blog carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section>
    )
}