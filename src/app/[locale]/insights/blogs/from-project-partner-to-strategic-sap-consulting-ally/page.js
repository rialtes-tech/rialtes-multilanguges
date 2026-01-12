"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/[locale]/components/useUrl";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import UnorderedList from "@/app/[locale]/components/unorderedList";
import { useLocale, useTranslations } from "next-intl";


export default function Page() {
    const t = useTranslations('fromProjectPartnerToStrategicSapConsultingAlly')
    const fullUrl = "https://www.rialtes.com/insights/blogs/what-makes-sap-consulting-companies-trustworthy";
    const currUrl = useUrl()
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { mainData, whyTrustData, whyEnterpriseData, rows, whyErpData, schemaData, howSalesforceData, faqdata, commonTrustData, standardizationData } = blogsContent.fromProjectPartnerToStrategicSapConsultingAlly;
    return (
        <section className="min-h-screen">
            <Seo
                title="How Enterprises Scale SAP Consulting Partnerships | Rialtes"
                description="Enterprises scale SAP relationships with partners who show ownership, governance discipline, and the ability to think beyond the current scope."
                keywords="Partners, website, welcome"
                canonical={`https://www.rialtes.com/insights/blogs/from-project-partner-to-strategic-sap-consulting-ally/`}
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
                        src="/images/blog/from-project-partner/scaling-sap-consulting-engagements.webp"
                        alt="Two people shaking hands with glowing digital lines symbolizing partnership and collaboration."
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/from-project-partner/mobile.webp"
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
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">SAP Consulting</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>02 January 2026
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
                                    commonTrustData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight" dangerouslySetInnerHTML={{ __html: data.desc2 }} />
                                        </div>
                                    ))
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
                                            <h3 className="mt-5 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold  leading-tight" dangerouslySetInnerHTML={{ __html: data.title2 }} />

                                        </div>
                                    ))
                                }
                                <div className="hidden md:block mt-5">
                                    <table className="w-full border-separate border-spacing-y-3">
                                        <thead>
                                            <tr className="bg-[#DEDEDE] text-left">
                                                {["Stage", "Engagement Focus", "Enterprise Expectation", "What Enables Scale"].map(
                                                    (head) => (
                                                        <th
                                                            key={head}
                                                            className="px-4 py-3 font-bold
                      4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                        >
                                                            {head}
                                                        </th>
                                                    )
                                                )}
                                            </tr>
                                        </thead>

                                        <tbody className="mt-2">
                                            {rows.map((row, idx) => (
                                                <tr key={idx} className={`${row.bg} border-b`}>
                                                    <td className=" px-4 py-4 font-semibold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        {row.stage}
                                                    </td>
                                                    <td className=" px-4 font-semibold py-4 mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        {row.focus}
                                                    </td>
                                                    <td className=" px-4 font-semibold py-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        {row.expectation}
                                                    </td>
                                                    <td className=" px-4 font-semibold py-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        {row.scale}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {
                                    whyTrustData.map((data, index) => (
                                        <p key={`${data.title}-${index}`} className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight" dangerouslySetInnerHTML={{ __html: data.desc2 }} />
                                    ))}


                                {/* Mobile Layout */}
                                <div className="md:hidden space-y-4">
                                    {rows.map((row, idx) => (
                                        <div
                                            key={idx}
                                            className={`${row.bg} border rounded-lg p-4`}
                                        >
                                            <div className="space-y-2">
                                                <div>
                                                    <p className="font-semibold">Stage</p>
                                                    <p>{row.stage}</p>
                                                </div>

                                                <div>
                                                    <p className="font-semibold">Engagement Focus</p>
                                                    <p>{row.focus}</p>
                                                </div>

                                                <div>
                                                    <p className="font-semibold">Enterprise Expectation</p>
                                                    <p>{row.expectation}</p>
                                                </div>

                                                <div>
                                                    <p className="font-semibold">What Enables Scale</p>
                                                    <p>{row.scale}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {
                                    standardizationData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />

                                            <h3 className=" 4xl:text-[22px] 2xl:text-[19px] xl:text-[20px] md:text-[20px] text-[20px] font-bold pb-4 leading-tight mt-5">{data.boldTitle}</h3>

                                            <h4>
                                                <UnorderedList arrName={data.list} ulClassName="space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />

                                            </h4>
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] leading-tight" dangerouslySetInnerHTML={{ __html: data.desc2 }} />
                                        </div>
                                    ))
                                }

                                {
                                    whyErpData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <h3 className=" 4xl:text-[20px] 2xl:text-[18px] xl:text-[18px] md:text-[18px] text-[18px] font-bold pb-4 leading-tight mt-10">{data.title2}</h3>


                                            {
                                                data.list.map((elem, id) => (
                                                    <div className="flex gap-5 md:gap-10 mt-8" key={id}>
                                                        <p className="md:w-[66px] w-[150px] h-[50px] flex items-center justify-center bg-[#1486E6] text-white font-bold 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">{id + 1}</p>
                                                        <div>
                                                            <h4 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.title}</h4>
                                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-2">{elem.desc}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                        </div>
                                    ))
                                }

                                {
                                    howSalesforceData.map((data, index) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={`${data.title}-${index}`}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                            <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                            {
                                                data.list.map((elem, index) => (
                                                    <div key={`${elem.title}-${index}`} className="mt-8 pl-6 p-8 border border-[#707070]">
                                                        <h3 className="4xl:text-[20px] 2xl:text-[17px] text-[20px] font-bold">{elem.title}</h3>
                                                        <UnorderedList arrName={elem.desc} ulClassName={`4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium mt-4`} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                                {
                                    whyEnterpriseData.map((data, index) => (
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