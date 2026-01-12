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
    const fullUrl = "https://www.rialtes.com/insights/blogs/what-makes-sap-consulting-companies-trustworthy";
    const currUrl = useUrl()
    const t = useTranslations("growWithSapERP");
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
    });
    const { schemaData, mainData, whyTrustData, whatAreData, whoShouldConsider, tableData, whoshouldlistCard, howSalesforceData, faqdata, commonTrustData, standardizationData } = blogsContent.growWithSapERP
    return (
        <section className="min-h-screen">
            <Seo
                title="Grow with SAP: Modern ERP for an AI-First Tomorrow | Rialtes"
                description="Grow with SAP gives you a clean, cloud-native ERP foundation so you can automate operations, connect data, and become truly AI-ready without legacy complexity."
                keywords="Partners, website, welcome"
                canonical={`https://www.rialtes.com/insights/blogs/grow-with-sap-ai-ready-cloud-erp/`}
            />

            <Script
                id="schema-cluster"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/voygernext/grow-with-sap-ai-first.webp"
                        alt="Two people shaking hands with glowing digital lines symbolizing partnership and collaboration."
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/voygernext/voyager-mobile.webp"
                        alt="Two people shaking hands with glowing digital lines symbolizing partnership and collaboration."
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
                        <div className="sm:flex justify-between">
                            <div>
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Grow with SAP</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>06 January 2026
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t('blogTitle')}</h1>

                            <div className="xl:mt-[38px] mt-[33px]">
                                {
                                    mainData.map((data, index) => {
                                        return (
                                            <p
                                                key={`${data}-${index}`}
                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data }}
                                            />
                                        )
                                    })
                                }


                                {
                                    whyTrustData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                                {data.title}
                                            </h2>

                                            {data.desc.map((item, index) => (
                                                <p
                                                    key={`${item}-${index}`}
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: item }}
                                                />
                                            ))}
                                        </div>
                                    ))
                                }
                                <div className="bg-[#006FBE] text-white 2xl:w-[90%] 4xl:w-full font-semibold p-5 mt-16 4xl:text-[26px] 2xl:text-[22px] xl:text-[22px] md:text-[20px] text-[20px]">GROW with SAP = Modern ERP + Standardization + Future AI Enablement</div>
                                <div className="xl:block hidden md:block">
                                    <img
                                        src="/images/blog/voygernext/infographic11.png"
                                        alt="Two people shaking hands with glowing digital lines symbolizing partnership and collaboration."
                                        className="w-full mt-16"
                                    />
                                </div>
                                <div className="xl:hidden block md:hidden">

                                    <img
                                        src="/images/blog/voygernext/mobile-info.webp"
                                        alt="Two people shaking hands with glowing digital lines symbolizing partnership and collaboration."
                                        className="mt-16 m-auto"
                                    />
                                </div>
                                <p className="xl:mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">This alone shifts companies from reactive problem-solving to proactive decision-making.</p>

                                {
                                    commonTrustData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                        </div>
                                    ))
                                }
                                {
                                    standardizationData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                        </div>
                                    ))
                                }
                                <div className="bg-[#EDEDED] p-6 mt-5 ml-8 4xl:w-[90%] 2xl:w-[80%] xl:w-[80%]">
                                    <img
                                        src="/images/blog/voygernext/infographic.png"
                                        alt="Two people shaking hands with glowing digital lines symbolizing partnership and collaboration."

                                    />
                                    <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] 4xl:pr-[8rem] 2xl:pr-[4rem]">A three-stage maturity roadmap showcasing evolution from manual processes to AI-powered decisions.</p>
                                </div>
                                {
                                    whatAreData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] sm:w-[80%] md:w-full xl:w-[96%]">
                                                {
                                                    data.list.map((elem, index) => {
                                                        return (
                                                            <div className="4xl:p-[30px] p-[32px] border border-[#707070]" key={`${elem.title}-${index}`}>
                                                                <h3 className="text-[#006FBE] 4xl:text-[22px] 2xl:text-[19px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 border-b border-[#707070] leading-tight">{elem.title}</h3>
                                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight" dangerouslySetInnerHTML={{ __html: elem.desc }} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                        </div>
                                    ))
                                }
                                {
                                    whoShouldConsider.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title1}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title1}</h2>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title2}</h2>


                                            {data.desc.map((item, index) => (
                                                <p
                                                    key={`${item}-${index}`}
                                                    className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                    dangerouslySetInnerHTML={{ __html: item }}
                                                />
                                            ))}
                                        </div>
                                    ))
                                }
                                <table className="4xl:w-[80%] 2xl:w-[85%] xl:w-[90%] border-collapse mt-10">
                                    {/* Header */}
                                    <thead className="bg-gray-100 border-b border-gray-500">
                                        <tr>
                                            <th className="text-left font-semibold p-4
              4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                {t('tableHeadFunction')}
                                            </th>
                                            <th className="text-left font-semibold p-4
              4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                {t('tableHeadUseCase')}
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {tableData.map((row, index) => (
                                            <tr
                                                key={`${row.function}-${index}`}
                                                className="border-b border-gray-500 xl:table-row"
                                            >
                                                <td
                                                    className="p-4 xl:table-cell font-medium 
                4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                >
                                                    {row.function}
                                                </td>

                                                <td
                                                    className="p-4 xl:table-cell font-medium
                4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                >

                                                    {row.useCase}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {
                                    whoshouldlistCard.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:mt-[40px] mt-[40px] gap-[20px] sm:w-[80%] md:w-full xl:w-[96%]">
                                                {
                                                    data.list.map((elem, index) => {
                                                        return (
                                                            <div className="4xl:p-[30px] p-[32px] border border-[#707070]" key={`${elem.title}-${index}`}>
                                                                <h3 className="text-[#006FBE] 4xl:text-[22px] 2xl:text-[19px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 leading-tight">{elem.title}</h3>
                                                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight" dangerouslySetInnerHTML={{ __html: elem.desc }} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                        </div>
                                    ))
                                }

                                {
                                    howSalesforceData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                            <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                            {
                                                data.list.map((elem, index) => (
                                                    <div key={`${elem.title}-${index}`} className="mt-8 pl-6">
                                                        <h3 className="4xl:text-[20px] 2xl:text-[17px] text-[20px] font-bold mt-8">{index + 1}. {elem.title}</h3>
                                                        <UnorderedList arrName={elem.desc} ulClassName={`md:pl-[24px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium`} />
                                                    </div>
                                                ))
                                            }
                                            <p
                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                        </div>
                                    ))
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