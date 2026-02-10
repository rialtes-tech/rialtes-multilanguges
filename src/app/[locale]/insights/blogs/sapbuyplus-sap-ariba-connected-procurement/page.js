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
    const fullUrl = "https://www.rialtes.com/insights/blogs/sapbuyplus-sap-ariba-connected-procurement";
    const currUrl = useUrl()
    const t = useTranslations("sapAriba");
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, {/*  */
        en: enContent,
        es: esContent,
        fr: frContent,
    });
    const { mainData, procurementData, sapbuyplusData, supplierCollaboration, aribaNetwork, automationIntelligence, traditionalAriba, businessOutcomes, sapbuyplus, sapAribaTransformation, faqData, schemaData } = blogsContent.sapAriba


    const ChevronRight = () => (
        <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 4xl:w-9 4xl:h-9"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );


    return (
        <section className="min-h-screen">
            <Seo
                title={t("seoTitle")}
                description={t("seoDescription")}
                keywords="Partners, website, welcome"
                canonical={
                    `https://www.rialtes.com/${locale}/insights/blogs/sapbuyplus-sap-ariba-connected-procurement`
                }
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
                        src="/images/blog/digital-connectivity-bridge-network-integration.webp"
                        alt={t("bannerAlt")}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/digital-connectivity-bridge-network-integration-mobile.webp"
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
                        <div className="sm:flex justify-between">
                            <div>
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("categoryTitle")}</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>12 January 2026
                            </div>

                            <div>
                                <div className="flex flex-row max-sm:mt-3 mt-[-10px] max-sm:ml-[-10px]">
                                    <BlogSocialIcons fullUrl={fullUrl} />
                                </div>
                            </div>
                        </div>

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                                {t("sapAribaTitle")}
                            </h1>
                            {/*Main section */}
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

                                {/* Procurement section */}
                                {
                                    procurementData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />

                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}

                                            />
                                            <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.descc}</p>
                                            <p className="mt-8 4xl:text-[20px] font-bold 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc3}</p>

                                            <div className="w-full h-full my-5 xl:mt-8 md:mt-6">
                                                <Image
                                                    src="/images/blog/procurement-workflow-progression-stages-diagram.svg"
                                                    alt={t("procurementImageAlt")}
                                                    className="w-[340px] md:w-[650px] 4xl:w-[800px] 2xl:w-[780px] xl:w-[750px] h-auto"
                                                    height={0}
                                                    width={0}
                                                    priority
                                                />
                                            </div>



                                        </div>
                                    ))
                                }


                                {/* SAPBUY+ section */}
                                {
                                    sapbuyplusData.map((data, ind) => (
                                        // this blog has extra margin top
                                        <div className="md:mt-[60px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.descc }}
                                            />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <p className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/*  Supplier Collaboration section */}
                                {
                                    supplierCollaboration.map((data, ind) => (

                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc3} ulClassName="mt-5  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <h3 className="mt-5 4xl:text-[24px] font-bold 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">{data.descc}</h3>

                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />

                                        </div>
                                    ))
                                }

                                {/**Ariba Network */}
                                {
                                    aribaNetwork.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-5 4xl:text-[20px]  2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.descc}</p>
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list2.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/*   Automation Intelligence section */}
                                {
                                    automationIntelligence.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <p
                                                className="mt-5  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                            <h3
                                                className="mt-5  4xl:text-[24px] font-bold 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <p
                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc6 }}
                                            />

                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>

                                            <p className="mt-5 md:mt-10 4xl:text-[20px] font-bold 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc4}</p>

                                            {/* Automation Model */}
                                            <div className=" mt-[50px]">

                                                <div className={`border border-b-0 border-black mt-[-25px] xl:px-6 px-2 xl:py-6  py-6 flex flex-wrap items-center gap-4 4xl:text-[22px] 2xl:text-[20px] xl:text-[20px] md:text-[18px]  font-medium
                                                 ${locale === "es"
                                                        ? "4xl:w-[540px] 2xl:w-[490px] xl:w-[510px] w-[320px] max-[400px]:w-[260px] md:w-[420px]"
                                                        : locale === "fr"
                                                            ? "4xl:w-[590px] 2xl:w-[520px] xl:w-[510px] w-[320px] max-[400px]:w-[260px] md:w-[420px]"
                                                            : "4xl:w-[540px] 2xl:w-[490px] xl:w-[470px] w-[320px] max-[400px]:w-[260px] md:w-[420px] "
                                                    }`

                                                }>

                                                    {data.model.steps.map((step, index) => (
                                                        <span key={index} className="flex items-center md:gap-4 gap-2 xl:gap-8">
                                                            <span className="4xl:text-[24px] 2xl:text-[20px] xl:text-[20px] md:text-[20px] text-[16px]">{step}</span>

                                                            {index !== data.model.steps.length - 1 && (
                                                                <div className="bg-[#006FBE] xl:p-[4px] rounded-full">
                                                                    <span className="text-white flex items-center">
                                                                        <ChevronRight />
                                                                    </span>
                                                                </div>

                                                            )}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className={`inline-block bg-[#006FBE] text-white px-6 py-3 font-semibold
                                             4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[16px]
                                              ${locale === "es"
                                                        ? " w-[340px] max-[400px]:w-[290px] md:w-[500px] 4xl:w-[760px] 2xl:w-[690px] xl:w-[620px]"
                                                        : locale === "fr"
                                                            ? " w-[340px] max-[400px]:w-[290px] md:w-[500px] 4xl:w-[670px] 2xl:w-[620px] xl:w-[570px]"
                                                            : " w-[340px] max-[400px]:w-[290px] md:w-[500px] 4xl:w-[680px] 2xl:w-[620px] xl:w-[570px]"
                                                    }`}>
                                                    {data.model.label}
                                                </div>
                                            </div>

                                            <p
                                                className="mt-5 md:mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />


                                        </div>
                                    ))
                                }

                                {/* Traditional Ariba section */}
                                {
                                    traditionalAriba.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            {
                                                data.list.map((elem, id) => (
                                                    <div className="flex gap-5 md:gap-10 mt-12" key={id}>
                                                        <p className="flex-shrink-0 w-[48px] h-[48px] md:w-[56px] md:h-[56px] xl:w-[60px] xl:h-[60px] 2xl:w-[64px] 2xl:h-[64px] 4xl:w-[65px] 4xl:h-[65px] flex items-center justify-center bg-[#1486E6] text-white font-bold  text-[20px] md:text-[22px] xl:text-[26px] 2xl:text-[26px] 4xl:text-[32px]">{id + 1}</p>
                                                        <div>
                                                            <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{elem.title}</h3>
                                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-2">{elem.desc}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }


                                            <p className="xl:mt-[80px] md:mt-[60px] mt-12 4xl:text-[24px] font-bold 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[18px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />


                                            <div className="mt-[30px]">
                                                <div className="flex flex-col md:flex-row md:items-start md:justify-between">

                                                    {data.model.steps.map((step, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex md:flex-col flex-row items-start md:items-start flex-1"
                                                        >


                                                            <div className="flex md:flex-row flex-col items-center md:w-full w-[40px] ">

                                                                <div className="bg-[#006FBE] xl:p-[6px] p-[4px] rounded-full flex items-center justify-center z-10">
                                                                    <span className="text-white flex items-center  transform rotate-90 md:rotate-0">
                                                                        <ChevronRight />
                                                                    </span>
                                                                </div>


                                                                {index !== data.model.steps.length - 1 && (
                                                                    <>

                                                                        <div className="hidden md:block flex-1 h-[2px] bg-black"></div>


                                                                        <div className="block md:hidden w-[2px] h-[26px] bg-black"></div>
                                                                    </>
                                                                )}
                                                            </div>


                                                            <span
                                                                className="md:mt-4 mt-1 ml-4 md:ml-0 font-bold 4xl:text-[24px]  2xl:text-[20px]  xl:text-[18px]    md:text-[18px]   text-[16px]"
                                                            >
                                                                {step}
                                                            </span>

                                                        </div>
                                                    ))}

                                                </div>
                                            </div>




                                        </div>
                                    ))
                                }

                                {/* Business Outcomes section */}
                                {
                                    businessOutcomes.map((data, ind) => (
                                        <div className="xl:mt-[80px] md:mt-[60px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                        </div>
                                    ))
                                }

                                {/**sapbuyplus Section */}
                                {
                                    sapbuyplus.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <p className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                        </div>
                                    ))
                                }


                                {/**SAP Ariba Transformation Section */}
                                {
                                    sapAribaTransformation.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</p></li>
                                                ))}
                                            </ul>
                                            <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                            />
                                            <p className="mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc3 }}
                                            />
                                            <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc4 }}
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
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("faqTitle")}
                </h2>
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