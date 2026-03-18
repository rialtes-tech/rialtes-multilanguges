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
    const fullUrl = "https://www.rialtes.com/insights/blogs/erp-crm-convergence-real-estate-leaders-guide";
    const currUrl = useUrl()
    const t = useTranslations("erpCrm");
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
    });

    const { mainData, hiddenData, commonData, whyData, painData, unifiedData, roleData, payoffData, buildData, oneUnifiedData, faqs, schemaData } = blogsContent.erpCrm

    return (
        <section className="min-h-screen">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="Partners, website, welcome"
                canonical={`https://www.rialtes.com/${locale}/insights/blogs/erp-crm-convergence-real-estate-leaders-guide`}
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
                        src="/images/blog/crm-erp-convergence-for-real-estate.webp"
                        alt={t("bannerAlt")}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/crm-erp-convergence-for-real-estate-mobile.webp"
                        alt={t("bannerAlt")}
                        priority
                        height={250}
                        width={375}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>


            <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
                <div className="grid lg:grid-cols-12">
                    <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">
                        {/* date and icons */}
                                <BlogSocialIcons fullUrl={fullUrl} topic={t('blogCategory')} date="03 November 2025" />
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
                            </div>
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    hiddenData.map((elem, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{elem.title}</h2>
                                                <UnorderedList arrName={elem.data} ulClassName="space-y-4 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                                <UnorderedList arrName={elem.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-4 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />

                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <>
                                {
                                    commonData.map((elem, ind) => {
                                        return (
                                            <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{elem.title}</h2>
                                                {
                                                    elem.subTitle &&
                                                    <h3 className="pb-3 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold leading-tight mt-5"> {elem.subTitle}</h3>
                                                }
                                                <UnorderedList arrName={elem.data} ulClassName={`space-y-4  ${ind == 0 ? "mt-5" : "mt-2"} space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium`} />
                                            </div>
                                        )
                                    })
                                }
                            </>

                            {/* why section */}
                            {
                                whyData.map((data, ind) => {
                                    return (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <p
                                                className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />

                                            {
                                                data.data.map((data, ind) => {
                                                    return (
                                                        <div className="md:flex mt-24 md:mt-10 py-[34px] xl:py-[36px] px-[26px] md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative md:ml-[90px] sm:w-[80%] md:w-auto xl:w-[1000px] 4xl:w-[1200px]" key={ind}>
                                                            <h3 className="md:absolute max-md:mt-[-80px] sm:mt-[-70px] md:mt-0 md:top-[50%] md:translate-y-[-50%] 4xl:w-[350px] xl:w-[280px] md:w-[240px] w-fit md:left-[-80px] bg-[#006FBE] text-white font-semibold 4xl:text-[22px] xl:text-[19px] text-[18px] px-[40px] py-[22px] leading-tight">{data.title}</h3>
                                                            <div className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[180px] xl:ml-[210px] 4xl:ml-[300px]" dangerouslySetInnerHTML={{ __html: data.desc }} />
                                                        </div>

                                                    )
                                                })
                                            }
                                            <p
                                                className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                        </div>
                                    )
                                })
                            }

                            {/* pain points */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    painData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />

                                                <div className="grid lg:grid-cols-3 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] lg:mt-[48px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full 4xl:w-[1300px]">
                                                    {
                                                        data.list.map((data, ind) => {
                                                            return (
                                                                <div key={ind} className={`mt-5 ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-lg:border-b max-lg:pb-5 max-lg:last:border-0" : ""} ${ind == 0 ? "lg:pr-[40px] 4xl:pr-0 md:border-b lg:border-0 border-[#707070] max-md:border-b max-lg:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                                    <h3 className="4xl:text-[22px] xl:text-[19px] text-[18px] font-bold">{data.title}</h3>
                                                                    <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[84%]">{data.desc}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p
                                                    className={`mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />

                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* unified section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    unifiedData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-4 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />
                                                <div className="grid md:grid-cols-3 gap-y-[40px] sm:grid-cols-2 grid-cols-1 mt-[28px] lg:mt-[48px] md:gap-x-[60px]">
                                                    {
                                                        data.numberList.map((elem, ind) => {
                                                            return (
                                                                <div key={ind}>
                                                                    <h3 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight font-bold text-[#006FBE]">{elem.number}{" "}
                                                                        <p
                                                                            className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[65%] font-semibold text-black`}
                                                                            dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                                        />
                                                                    </h3>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>

                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc4 }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* role section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    roleData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight font-semibold mt-5">{data.subtitle}</h3>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-4 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                                <p
                                                    className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* payoff section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('payoffTitle')}</h2>
                                {
                                    payoffData.map((data, ind) => {
                                        return (
                                            <div className="mt-[22px] xl:mt-[30px]" key={ind}>
                                                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight font-semibold mt-5">{data.title}</h3>
                                                <p
                                                    className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />

                                                {
                                                    data.list && <UnorderedList arrName={data.list} ulClassName="pl-[36px] lg:pl-[56px] space-y-4 mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />
                                                }
                                                {
                                                    data.desc2 && <p
                                                        className={`mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                    />
                                                }

                                            </div>
                                        )
                                    })
                                }

                            </div>

                            {/* build section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    buildData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <div className="grid xl:grid-cols-4 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] md:mt-[48px] gap-y-[40px] md:gap-x-[60px] lg:gap-[40px] sm:w-[80%] md:w-full xl:w-[1100px] 4xl:w-[1200px]">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <div key={id}>
                                                                    <span className="bg-[#0C8AED] w-12 h-12 flex items-center justify-center rounded-full text-white font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                                        {id + 1}
                                                                    </span>
                                                                    <h3 className="mt-[30px] 4xl:text-[22px] xl:text-[19px] text-[18px] font-bold">{elem.title}</h3>
                                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[90%]">{elem.desc}</p>
                                                                    {
                                                                        elem.lists && <UnorderedList arrName={elem.lists} ulClassName="pl-[26px] space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc font-medium" />

                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* one unified section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('unifiedTitle')}</h2>
                                {
                                    oneUnifiedData.map((data, ind) => {
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