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
    const fullUrl = "https://www.rialtes.com/insights/blogs/sap-cpi-implementation-architecture-best-practices-use-cases";
    const t = useTranslations("sapCpiImplement");
    const locale = useLocale();
    const currUrl = useUrl();
    const blogsContent = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
    });
    const { schemaData, faqdata, mainData, commonData, sapArchitectData, sapImplementationData, deploymentData, enterpriseData, commonData2 } = blogsContent.sapCpiImplement

    return (
        <section className="min-h-screen" >
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="Partners, website, welcome"
                canonical={`https://www.rialtes.com/insights/blogs/sap-cpi-implementation-architecture-best-practices-use-cases`}
            />

            <Script
                id="schema-datapshere-blog"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/cloud-data-analytics-team.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/cloud-data-analytics-team-mobile.webp"
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
                        <BlogSocialIcons fullUrl={fullUrl} topic="SAP CPI" date="02 February 2026" />

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
                            {/* common section */}
                            {
                                commonData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc && data.desc}</p>
                                        {
                                            data.list &&
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                        }
                                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2 && data.desc2}</p>
                                        {data.list2 &&
                                            <UnorderedList arrName={data.list2} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                        }
                                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc3 && data.desc3}</p>
                                    </div>
                                ))
                            }

                            <div className="my-10">
                                <Image
                                    src="/images/blog/sap-cpi.svg"
                                    alt={t('sapImg')}
                                    width={0}
                                    height={0}
                                    className="h-full w-full"
                                />
                            </div>

                            {/* sap cpi section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('sapTitle')}</h2>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('sapDesc')}</p>
                                <div className="grid md:grid-cols-2 grid-cols-1 mt-10 gap-y-10 md:gap-y-20 xl:w-[1100px]">
                                    {
                                        sapArchitectData.map((data, ind) => (
                                            <div className={`${ind % 2 == 0 ? "md:border-r md:pr-20" : "md:pl-20"} max-md:border-b max-md:pb-5 border-[#707070] last:border-b-0`} key={ind}>
                                                <h3 className="font-bold text-[18px] md:text-[19px] xl:text-[19px] 4xl:text-[22px]">{data.title}</h3>
                                                <p
                                                    key={ind}
                                                    className="md:mt-8 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                {data.list && <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-1 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />}
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2 && data.desc2}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('sapDesc2')}</p>
                            </div>

                            {/* how Rialtes section */}
                            {
                                sapImplementationData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                        <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{data.subtitle}</h3>

                                        <div className="grid lg:grid-cols-3 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full lg:w-[940px] xl:w-[1100px] 4xl:w-[1250px]">
                                            {
                                                data.list.map((data, ind) => {
                                                    return (
                                                        <div
                                                            key={ind}
                                                            className={`mt-5 md:pr-8 border-[#707070] ${(ind === 1 || ind === 2 || ind === 4 || ind === 5) ? "4xl:pl-[50px] lg:pl-[30px] lg:border-l max-lg:border-b max-lg:pb-5 max-lg:last:border-b-0 md:pr-4" : ""} ${(ind === 0) ? "lg:pr-[40px] 4xl:pr-0 max-lg:border-b max-lg:pb-5" : ""} ${(ind === 1 || ind === 3) ? "max-lg:border-b max-lg:pb-4 lg:border-0" : ""} ${(ind === 4) ? "md:border-b-0" : ""}`}>
                                                            <h4 className={`4xl:text-[22px] 2xl:text-[19px] xl:text-[19px] md:text-[20px] text-[20px] font-bold text-[#0A6BB8] md:w-[80%]`}>{data.title}</h4>
                                                            <p
                                                                key={ind}
                                                                className="md:mt-8 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                                            />
                                                            {data.list && <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-1 pl-[26px] lg:pl-[36px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />}
                                                            <p className="md:mt-1 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:w-[80%]">{data.desc2}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                            {/* deployment section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    deploymentData.map((data, ind) => (
                                        <div key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-1 pl-[26px] lg:pl-[36px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                            <UnorderedList arrName={data.desc2} ulClassName="mt-5 space-y-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <UnorderedList arrName={data.list2} ulClassName="mt-5 space-y-1 pl-[26px] lg:pl-[36px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc3}</p>
                                        </div>
                                    ))
                                }
                            </div>

                            {/* enterprise section */}
                            {
                                enterpriseData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[50px] mt-[40px] gap-[20px] sm:w-[80%] md:w-full lg:w-[90%] xl:w-full 4xl:w-[1200px]">
                                            {
                                                data.list.map((elem, id) => {
                                                    return (
                                                        <div className="4xl:p-[36px] p-[32px] border border-[#707070]" key={id}>
                                                            <h3 className="text-[#006FBE] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4">{elem.title}</h3>
                                                            <UnorderedList arrName={elem.list} ulClassName="mt-4 space-y-1 pl-[26px] lg:pl-[26px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <p
                                            className="my-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />
                                    </div>
                                ))
                            }
                            {/* common section */}
                            {
                                commonData2.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        {
                                            data.list &&
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-1 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                        }
                                        <p
                                            key={ind}
                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 && data.desc2 }}
                                        />
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </section>
            {/* faq section */}
            <section className="xl:mt-[80px] mt-[40px] custom-container" >
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('faqTitle')}</h2>
                <div className="mt-[29px] xl:mt-[30px]">
                    <FAQAccordion faqData={faqdata} />
                </div>
            </section >

            {/* blog carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]" >
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section >
    )
}

// sap cpi