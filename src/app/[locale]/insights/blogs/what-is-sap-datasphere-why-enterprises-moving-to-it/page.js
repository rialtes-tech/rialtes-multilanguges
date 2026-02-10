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
    const fullUrl = "https://www.rialtes.com/insights/blogs/what-is-sap-datasphere-why-enterprises-moving-to-it";
    const t = useTranslations("sapDataEnterprise");
    const locale = useLocale();
    const currUrl = useUrl();
    const blogsContent = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
    });

    const { schemaData, mainData, realBusinessData, commonData, tableData, whySap, whatExecutiveData, howRialtesData, faqdata } = blogsContent.sapDataEnterprise;
   
    return (
        <section className="min-h-screen">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="Partners, website, welcome"
                canonical={`https://www.rialtes.com/${locale}/insights/blogs/what-is-sap-datasphere-why-enterprises-moving-to-it`}
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
                        src="/images/blog/sap-datasphere-data-fabric.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/sap-datasphere-data-fabric-mobile.webp"
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
                        <BlogSocialIcons fullUrl={fullUrl} topic="SAP Datasphere" date="03 February 2026" />
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

                            {/* real business section */}
                            {
                                realBusinessData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        {
                                            data.list.map((elem, id) => (
                                                <div key={id}>
                                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{elem.title}</p>
                                                    <UnorderedList arrName={elem.descList} ulClassName="mt-5 space-y-1 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                                </div>
                                            ))
                                        }
                                        <h3 className="mt-10 font-bold text-[18px] md:text-[19px] xl:text-[19px] 4xl:text-[22px]">{data.subTitle}</h3>
                                        <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                    </div>
                                ))
                            }
                            {/* common section */}
                            {
                                commonData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                        <UnorderedList arrName={data.desc2} ulClassName="mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                    </div>
                                ))
                            }
                            {/* sap datasphere section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('sapTitle')}</h2>
                                <div className="mt-5 w-full overflow-x-auto">
                                    <table className="w-full 4xl:w-[80%] border-separate border-spacing-x-1 sm:border-spacing-x-5 border-spacing-y-1 rounded-lg">
                                        <thead>
                                            <tr>
                                                {tableData.headers.map((header, index) => (
                                                    <th
                                                        key={index}
                                                        className={`px-4 py-3 text-left font-semibold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ${index === 0 ? "bg-[#CCF7F5]" : "bg-[#C6E7FF]"}`}>
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {tableData.rows.map((row, rowIndex) => (
                                                <tr key={rowIndex} className="border-b last:border-none">
                                                    {row.map((cell, cellIndex) => (
                                                        <td
                                                            key={cellIndex}
                                                            className={`px-4 py-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] ${rowIndex % 2 == 0 ? "bg-[#EAEAEA]" : "bg-[#F5F5F5]"}`}>
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('sapDesc')}</p>
                            </div>

                            {/* why sap section */}
                            <div className="xl:mt-[38px] mt-[33px]">
                                {
                                    whySap.map((data, ind) => {
                                        return (
                                            <div className="mt-5" key={ind}>
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                                <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* what executive section */}
                            <div className="xl:mt-[38px] mt-[33px]">
                                {
                                    whatExecutiveData.map((data, ind) => {
                                        return (
                                            <div className="mt-5" key={ind}>
                                                <h3 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h3>
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc2}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* how rialtes section */}
                            {
                                howRialtesData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:w-[70%] md:w-full lg:w-[900px] xl:w-[1100px] gap-[30px] items-stretch">
                                            {data.list.map((elem, id) => (
                                                <div key={id} className="flex flex-col h-full">
                                                    <h3 className="py-3 px-4 bg-[#006FBE] text-white font-semibold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        {elem.title}
                                                    </h3>

                                                    <p className="bor der border-[#707070] p-5 pb-8 flex-1 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        {elem.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <UnorderedList arrName={data.desc2} ulClassName="mt-10 space-y-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
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
                    <FAQAccordion faqData={faqdata} />
                </div>
            </section>

            {/* blog carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section>
    )
}