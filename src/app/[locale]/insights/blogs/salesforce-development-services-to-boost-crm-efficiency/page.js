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
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';

export default function Page() {
    const t = useTranslations('salesforceDevelopment')
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const {schemaData , blogMainData, salesforceFeature, choosingRightData, whyCrmDAta, workFlowExample, rialtesYourTrustData, whatToLook, theCaseOfCustom, salesforceFeatureList, strategiesList, keyBenifitesSalesforce, keyBenifiteList, faqData } = blogsContent.salesforceDevelopment;
    const fullUrl = "https://www.rialtes.com/insights/blogs/salesforce-development-services-to-boost-crm-efficiency/";
    const currUrl = useUrl()

    return (
        <section className="min-h-screen">
            <Seo
                title={t("seoTitle")}
                description={t("seoDescription")}
                canonical={`https://www.rialtes.com/${locale}/insights/blogs/salesforce-development-services-to-boost-crm-efficiency`}
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
                        src="/images/blog/salesforce-development-services-to-boost-efficiency.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/salesforce-consulting-cluster-feature-thumb.webp"
                        alt={t('bannerAlt')}
                        priority
                        height={250}
                        width={375}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>

            <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
                <div className="grid lg:grid-cols-12 grid-cols-12">
                    <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11 col-span-12">
                       {/* date and icons */}
                            <BlogSocialIcons fullUrl={fullUrl} topic="Life Sciences" date="06 October 2025" />
                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t('blogTitle')}</h1>
                            <div className="xl:mt-[38px] mt-[33px]">
                                {
                                    blogMainData.map((data, ind) => {
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
                                    whyCrmDAta.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                {
                                                    data.desc.map((elem, id) => {
                                                        return (
                                                            <p
                                                                key={id}
                                                                className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                                dangerouslySetInnerHTML={{ __html: elem }}
                                                            />
                                                        )
                                                    })
                                                }
                                                <UnorderedList arrName={data.list} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    theCaseOfCustom.map((data, id) => {
                                        return (
                                            <div key={id}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <h3 className="mb-[22px] xl:mb-[10px] font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight">{data.whatMakes}</h3>
                                                <p
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <h3 className="mb-[22px] xl:mb-[10px] font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight mt-5">{data.howCanCus}</h3>
                                                <p
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.hereAre }}
                                                />
                                                <ul className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2">
                                                    {data.list2.map((item, i) => (
                                                        <li key={i}>
                                                            <h4 className="inline-block font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                                {item.title}
                                                            </h4>:{" "}
                                                            {item.description}
                                                        </li>
                                                    ))}
                                                </ul>                                                <p
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-8"
                                                    dangerouslySetInnerHTML={{ __html: data.thisisWhere }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    keyBenifitesSalesforce.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                                <p
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>
                                        )
                                    })
                                }
                                <div >
                                    {
                                        keyBenifiteList.map((data, ind) => {
                                            return (
                                                <div
                                                    className="md:flex mt-24 md:mt-10 py-[34px] xl:py-[46px] px-[26px] 
                                                           md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative 
                                                           md:ml-[90px] sm:w-[80%] md:w-auto lg:w-[80%] xl:w-auto 4xl:w-[86%]"
                                                    key={ind}>
                                                    <h3
                                                        className="md:absolute md:flex items-center justify-center
                                                                max-md:mt-[-80px] sm:mt-[-70px] md:mt-0
                                                                md:top-1/2 md:-translate-y-1/2 md:left-[-80px]
                                                                bg-[#006FBE] text-white font-semibold
                                                                4xl:text-[22px] xl:text-[19px] text-[18px] 
                                                                px-[30px] py-[22px] leading-tight
                                                                4xl:w-[390px] xl:w-[280px] md:w-[240px] w-fit 4xl:h-[100px]">
                                                        {data.title}
                                                    </h3>

                                                    <div
                                                        className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]
                                                                font-medium my-auto max-md:mt-8
                                                                md:ml-[220px] xl:ml-[210px] 4xl:ml-[320px]"
                                                        dangerouslySetInnerHTML={{ __html: data.desc }}
                                                    />

                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {
                                    keyBenifitesSalesforce.map((data, ind) => {
                                        return (
                                            <div key={ind}>

                                                <p
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-10"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                            </div>
                                        )
                                    })
                                }

                            </div>

                            <div className="md:mt-[60px] mt-[40px]">
                                {
                                    choosingRightData.map((data, id) => {
                                        return (
                                            <div key={id}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                                <ul className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2">
                                                    {data.list2.map((item, i) => (
                                                        <li key={i}>
                                                            <h3 className="inline-block font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px]">
                                                                {item.title}
                                                            </h3>:{" "}
                                                            {item.description}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    whatToLook.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mt-2 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-2 ">{data.title}</h2> {
                                                    data.desc.map((elem, id) => {
                                                        return (
                                                            <p
                                                                key={id}
                                                                className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                                dangerouslySetInnerHTML={{ __html: elem }}
                                                            />
                                                        )
                                                    })
                                                }
                                                <UnorderedList arrName={data.list} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />

                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('strategiesTitle')}</h2>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('strategiesDescription')}</p>

                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full">
                                    {
                                        strategiesList.map((data, ind) => {
                                            return (
                                                <div key={ind} className={`mt-[48px] ${(ind == 1 || ind == 2) ? "lg:px-[32px] border-[#707070] lg:border-l max-md:border-b max-md:pb-5" : ""} ${ind == 3 ? "lg:pl-[32px] border-[#707070] lg:border-l" : ""} ${ind == 0 ? "lg:pr-[40px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-md:pb-5" : ""} ${(ind == 1) ? "pb-4 md:border-b lg:border-0" : ""}`}>
                                                    <h4 className="4xl:text-[22px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] font-bold">{data.title}</h4>
                                                    <p className="md:mt-5 mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="mt-[30px] xl:mt-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('strategiesDesc2')}</p>

                            </div>

                            <div className="md:mt-[70px] mt-[40px]">
                                {
                                    salesforceFeature.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                                <p
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>
                                        )
                                    })
                                }

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[26px] mt-[47px] sm:w-[70%] md:w-[90%] lg:w-[900px] xl:w-[1090px] 3xl:w-[1140px]">
                                    {
                                        salesforceFeatureList.map((data, ind) => {
                                            return (
                                                <div key={ind} className="border border-[#707070] p-[28px] md:px-[34px] md:pt-[26px] md:pb-[40px]">
                                                    <h3 className="mt-2  4xl:text-[22px] xl:text-[19px] text-[18px]  text-[#0092E0] font-bold pb-4 border-b border-[#707070]">{data.title}</h3>
                                                    <p className="mt-5  4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-10">{t('desc2')}</p>
                            </div>

                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    workFlowExample.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h2 className="mt-2  4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]  font-bold pb-4 ">{data.title}</h2>

                                                <div>
                                                    <h3
                                                        className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold"
                                                        dangerouslySetInnerHTML={{ __html: data.desc1 }}
                                                    />


                                                    <UnorderedList arrName={data.list1} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />
                                                    <h3
                                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold"
                                                        dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                    />

                                                    <UnorderedList arrName={data.list2} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    rialtesYourTrustData.map((data, id) => {
                                        return (
                                            <div key={id}>
                                                <h2 className="mb-[22px] xl:mb-[30px] font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <p
                                                    className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc1 }}
                                                />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                                />
                                                <UnorderedList arrName={data.list2} ulClassName="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] list-disc pl-[34px] font-medium space-y-2" />

                                            </div>
                                        )
                                    })
                                }
                                {
                                    rialtesYourTrustData.map((data, id) => {
                                        return (
                                            <div key={id}>
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                                />
                                                <p
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: data.desc4 }}
                                                />
                                            </div>
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