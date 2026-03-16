"use client";
import Image from "next/image";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/[locale]/components/useUrl";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import UnorderedList from "@/app/[locale]/components/unorderedList";
import enContent from "../../../../../../messages/en/blogs.json";
import esContent from "../../../../../../messages/es/blogs.json";
import frContent from "../../../../../../messages/fr/blogs.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import { useLocale, useTranslations } from "next-intl";

export default function Page() { 
    const fullUrl = "https://www.rialtes.com/insights/blogs/salesforce-integration-partners-for-enterprises-to-scale";
    const currUrl = useUrl()
    const t = useTranslations("integrationPartnersForSalesforce");
    const locale = useLocale();
    const Content = changeLocalization(locale, {
        en: enContent,
        es: esContent,
        fr: frContent,
    });
    const { mainData, whyChoosingData, howSalesforceData, benefitsOfSalesforce, salesforceIntegrationUseCases, choosingTheRightPartner, integrationAsPartOfBorder, howStrategicData, whatAreData, faqData, schemaData, whyRialtesData } = Content.integrationPartnersForSalesforce;

    return (
        <section className="min-h-screen">
            <Seo
                title="Salesforce Integration Partners: The Foundation for Scale | Rialtes"
                description="For enterprises focused on scale, automation, and AI readiness, integration is no longer a supporting activity. It’s foundational."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/salesforce-integration-partners-for-enterprises-to-scale"
                }
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
                        src="/images/blog/salesforce-integration-partners.webp"
                        alt="Cloud integration icon on a smartphone representing Salesforce integration and enterprise system connectivity."
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/salesforce-integration-partners-mobile.webp"
                        alt="Cloud integration icon on a smartphone representing Salesforce integration and enterprise system connectivity."
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
                        <div className="sm:flex justify-between">
                            <div>
                                <span className="text-[#0092E0] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">Salesforce Consulting</span>{" "}
                                <span className="text-[#ACACAC] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"> | </span>22 December 2025
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
                                    mainData?.map((data, ind) => {
                                        return (
                                            <p
                                                key={ind}
                                                className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data }}
                                            />
                                        )
                                    })
                                }

                                {/* why choosing section */}
                                {
                                    whyChoosingData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>

                                            <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.desc }}
                                            />
                                            <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data.listDes }}
                                            />
                                            <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                            <UnorderedList arrName={data.desc2} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        </div>
                                    ))
                                }
                                {
                                    howStrategicData?.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName={`mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium`} />

                                            {
                                                data.list.map((elem, id) => (
                                                    <div key={id}>
                                                        <div className="flex items-center w-full mt-14 gap-5 md:gap-10">
                                                            <div className="flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-[#1486E6] text-white font-bold 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">
                                                                {id + 1}
                                                            </div>

                                                            <div>
                                                                <h3 className="font-bold text-[18px] md:text-[19px] xl:text-[19px] 4xl:text-[22px] leading-tight">
                                                                    {Array.isArray(elem.title) ? (
                                                                        elem.title.map((line, index) => (
                                                                            <span key={index} className="block">
                                                                                {line}
                                                                            </span>
                                                                        ))
                                                                    ) : (
                                                                        elem.title
                                                                    )}
                                                                </h3>                                                            </div>

                                                            <div className="flex-1 border-t border-[#707070] md:block hidden"></div>
                                                        </div>

                                                        <p
                                                            className="mt-5 md:mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem.desc }}
                                                        />
                                                        <p
                                                            className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem.desc2 }}
                                                        />

                                                        <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                            {elem.listData.map((data, idx) => (
                                                                <li key={idx}><h4 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</h4></li>
                                                            ))}
                                                        </ul>
                                                        <p
                                                            className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem.desc3 }}
                                                        />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }

                                {/* how salesforce section */}
                                {
                                    howSalesforceData?.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data?.title}</h2>
                                            <p className="mt-[29px] xl:mt-[20px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data?.desc}</p>
                                            {
                                                data?.list?.map((elem, id) => (
                                                    <div className="border  border-gray-300 gap-6 mt-6" key={id}>
                                                        <h3 className="4xl:text-[24px] 2xl:text-[21px] pl-8 text-[20px] font-bold mt-10 text-[#006FBE] border-b pb-5 border-gray-300">{elem?.title}</h3>
                                                        <UnorderedList arrName={elem?.desc} ulClassName={`mt-5 md:pl-[24px] pl-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium`} />
                                                        <p
                                                            className="md:pl-[24px] pl-8 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem?.descData }}
                                                        />
                                                        {
                                                            elem?.list &&
                                                            <UnorderedList arrName={elem?.list} ulClassName="mt-5 space-y-2 pl-[26px] md:pl-[64px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                                        }
                                                        {elem?.desc2 && (
                                                            <p
                                                                className="md:pl-[24px] pl-8 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pb-6"
                                                                dangerouslySetInnerHTML={{ __html: elem?.desc2 }}
                                                            />
                                                        )}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }


                                {/* benefits of salesforce section */}
                                <div className="pt-14">
                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                        {benefitsOfSalesforce?.title}
                                    </h2>

                                    {/* Subtitle */}
                                    <p className="mt-[29px] xl:mt-[20px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                        {benefitsOfSalesforce?.subtitle}
                                    </p>

                                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">

                                        {/* Vertical dividers */}
                                        <span className="hidden md:block absolute left-1/3 top-0 h-full w-px bg-gray-800 mt-10" />
                                        <span className="hidden md:block absolute left-2/3 top-0 h-full w-px bg-gray-800 mt-10" />

                                        {benefitsOfSalesforce?.sections.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`text-left ${index === 0
                                                    ? "pr-6"
                                                    : index === 1
                                                        ? "px-6"
                                                        : "pl-6"
                                                    }`}
                                            >
                                                <h3 className="4xl:text-[22px] 2xl:text-[20px] text-[20px] font-bold mt-10 mb-8 leading-tight">
                                                    {item.heading}
                                                </h3>

                                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mb-4">
                                                    {item.description}
                                                </p>

                                                {item.bullets.length > 0 && (
                                                    <ul className="list-disc pl-5 space-y-2 4xl:text-[20px] font-medium 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]-700 mb-4">
                                                        {item.bullets.map((bullet, i) => (
                                                            <li key={i}>{bullet}</li>
                                                        ))}
                                                    </ul>
                                                )}

                                                {item.footer && (
                                                    <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        {item.footer}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {
                                    salesforceIntegrationUseCases?.map((data, ind) => (
                                        <div className="md:mt-[80px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data?.title}</h2>
                                            <p className="mt-[29px] xl:mt-[20px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data?.desc}</p>
                                            {
                                                data?.list?.map((elem, id) => (
                                                    <div className="gap-6 mt-6" key={id}>
                                                        <h3 className="4xl:text-[24px] 2xl:text-[21px] text-[20px] font-bold mt-10">{elem?.title}</h3>
                                                        <p
                                                            className="md:pl-[24px] mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem?.descData }}
                                                        />
                                                        {
                                                            elem?.list &&
                                                            <UnorderedList arrName={elem?.list} ulClassName="mt-5 space-y-2 pl-[26px] md:pl-[64px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                                        }
                                                        {elem?.desc2 && (
                                                            <p
                                                                className="md:pl-[24px] mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pb-6"
                                                                dangerouslySetInnerHTML={{ __html: elem?.desc2 }}
                                                            />
                                                        )}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                                {/* salesforce integration use cases section */}
                                {
                                    integrationAsPartOfBorder?.map((data, ind) => (
                                        <div className="md:mt-[35px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data?.title}</h2>
                                            <p
                                                className="mt-[29px] xl:mt-[20px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                dangerouslySetInnerHTML={{ __html: data?.desc }}
                                            />
                                            {
                                                data?.list?.map((elem, id) => (
                                                    <div className="gap-6 mt-6" key={id}>
                                                        <h3 className="4xl:text-[24px] 2xl:text-[21px] text-[20px] font-bold mt-10">{elem?.title}</h3>
                                                        <p
                                                            className="md:pl-[24px] mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                                            dangerouslySetInnerHTML={{ __html: elem?.descData }}
                                                        />
                                                        {
                                                            elem?.list &&
                                                            <UnorderedList arrName={elem?.list} ulClassName="mt-5 space-y-2 pl-[26px] md:pl-[64px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                                        }
                                                        {elem?.desc2 && (
                                                            <p
                                                                className="md:pl-[24px] mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pb-6"
                                                                dangerouslySetInnerHTML={{ __html: elem?.desc2 }}
                                                            />
                                                        )}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }



                                <div className="pt-6">
                                    {/* Title */}
                                    <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                        {choosingTheRightPartner?.title}
                                    </h2>


                                    <p
                                        className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                        dangerouslySetInnerHTML={{ __html: choosingTheRightPartner?.subtitle }}
                                    />
                                    {/* Two Column Layout */}
                                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">

                                        {/* Vertical Divider */}
                                        <span className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-800" />

                                        {choosingTheRightPartner?.columns.map((col, index) => (
                                            <div
                                                key={index}
                                                className={index === 0 ? "pr-8" : "pl-8"}
                                            >
                                                <h3 className="font-bold text-[18px] md:text-[19px] xl:text-[19px] 4xl:text-[22px] mb-6">
                                                    {col.heading}
                                                </h3>

                                                <ul className="space-y-4 mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">
                                                    {col.items.map((item, i) => (
                                                        <li key={i} className="flex gap-3">
                                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900 flex-shrink-0"></span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {
                                    whyRialtesData.map((data, ind) => (
                                        <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                            <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                            <p className="mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.descData}</p>

                                            <ul className={`mt-5 space-y-1 pl-[26px] lg:pl-[46px] list-disc`}>
                                                {data.list.map((data, idx) => (
                                                    <li key={idx}><h3 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium">{data}</h3></li>
                                                ))}
                                            </ul>
                                            <UnorderedList arrName={data.desc2} ulClassName="mt-5 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* faq section */}
            <section className="xl:mt-[60px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">FAQs: Choose the Right Salesforce Partner </h2>
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