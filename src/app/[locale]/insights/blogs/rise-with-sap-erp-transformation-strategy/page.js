"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/[locale]/components/useUrl";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";


export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/partner-salesforce-right-way-for-growth";
    const currUrl = useUrl()
    const t = useTranslations("voyagerERP");
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
    });
    const { mainData, faqData, legacyData, whyErpData, riseData, howRiseData, commonData, howRialtesData } = blogsContent.voyagerERP

    const schemaData = {}

    return (
        <section className="min-h-screen">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="Partners, website, welcome"
                canonical={`https://www.rialtes.com/${locale}/insights/blogs/partner-salesforce-right-way-for-growth/`}
            />

            <Script
                id="schema-voyager"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/enterprise-growth-strategy.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/enterprise-growth-strategy-mobile.webp"
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
                        <BlogSocialIcons fullUrl={fullUrl} topic="Rise With SAP" date="05 January 2026" />


                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t('blogTitle')}</h1>

                            <div className="xl:mt-[38px] mt-[33px]">
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

                                {/* legacy section */}
                                {
                                    legacyData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <h3 className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.descc}</h3>
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><h4 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</h4></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <div className="w-full h-full my-5">
                                                <Image
                                                    src="/images/blog/legacy-erp-reality-check.webp"
                                                    alt={t("legacyAlt")}
                                                    className="4xl:w-[600px] w-full h-full"
                                                    height={0}
                                                    width={0}
                                                    priority
                                                />
                                            </div>

                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/* why erp section */}
                                {
                                    whyErpData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            {
                                                data.list.map((elem, id) => (
                                                    <div className="flex gap-5 md:gap-10 mt-12" key={id}>
                                                        <p className="md:w-[66px] w-[150px] h-[50px] flex items-center justify-center bg-[#1486E6] text-white font-bold 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">{id + 1}</p>
                                                        <div>
                                                            <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.title}</h3>
                                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-2">{elem.desc}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                            <div className="bg-[#E2F3FF] 3xl:w-[90%] p-[36px] pb-0 mt-10">
                                                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{data.subtitle}</h3>
                                                <div className="flex max-md:flex-col gap-10 mt-10">
                                                    {
                                                        data.subList.map((elem, id) => (
                                                            <p className="sm:w-[80%] md:w-fit px-[40px] py-[20px] font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] text-white bg-[#D58383]" key={id}>{elem}</p>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/* rise section */}
                                {
                                    riseData.map((data, ind) => (
                                        // this blog has extra margin top
                                        <div className="md:mt-[80px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <h3 className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.descc}</h3>

                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><h4 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</h4></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/* how rise section */}
                                {
                                    howRiseData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <p
                                                className="mt-5 md:mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:mt-[50px] mt-[40px] gap-[20px] sm:w-[80%] md:w-full 4xl:w-[1100px]">
                                                {
                                                    data.list.map((elem, id) => {
                                                        return (
                                                            <div className="4xl:p-[36px] p-[32px] border border-[#707070]" key={id}>
                                                                <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4">{elem.title}</h3>
                                                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: elem.desc }} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <p
                                                className="my-10 4xl:text-[28px] 2xl:text-[24px] xl:text-[22px] md:text-[18px] text-[18px] bg-[#006FBE] text-white p-[36px] w-fit"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <UnorderedList arrName={data.list2} ulClassName="list-disc pl-[26px] lg:pl-[46px] mt-5 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        </div>
                                    ))
                                }

                                {/* common section */}
                                {
                                    commonData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><h3 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</h3></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                        </div>
                                    ))
                                }
                                {/* how Rialtes section */}
                                {
                                    howRialtesData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{data.subtitle}</h3>

                                            <div className="grid lg:grid-cols-3 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full xl:w-[1000px] 4xl:w-[1200px]">
                                                {
                                                    data.list.map((data, ind) => {
                                                        return (
                                                            <div key={ind} className={`mt-5 ${(ind == 1 || ind == 2 || ind == 4) ? "4xl:pl-[50px] lg:pl-[30px] border-[#707070] lg:border-l max-lg:border-b max-lg:pb-5 max-lg:last:border-0" : ""} ${ind == 0 ? "lg:pr-[40px] 4xl:pr-0 md:border-b lg:border-0 border-[#707070] max-md:border-b max-lg:pb-5" : ""} ${(ind == 1 || ind == 3) ? "pb-4 border-b border-[#707070] lg:border-0" : ""} ${(ind == 2) ? "lg:border-b-0" : ""}`}>
                                                                <h4 className={`4xl:text-[22px] 2xl:text-[19px] xl:text-[19px] md:text-[20px] text-[20px] font-bold text-[#0A6BB8] md:w-[80%]`}>{data.title}</h4>
                                                                <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[80%]">{data.desc}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <h3 className="lg:mt-10 mt-5 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{data.subtitle2}</h3>
                                            <div className="w-full h-full lg:mt-10 mt-5">
                                                <Image
                                                    src="/images/blog/discover-define-deploy.webp"
                                                    alt={t('discoverAlt')}
                                                    width={1200}
                                                    height={700}
                                                    className="w-full h-auto"
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    ))}
                            </div>
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