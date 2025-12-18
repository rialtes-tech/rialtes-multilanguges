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
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import { useActiveLocale } from "@/app/[locale]/components/activeLanguages";


export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/digital-twin-in-automotive-industry-salesforce-cloud/";
    const currUrl = useUrl()
    const t = useTranslations('digitalTwin')
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { mainData, digitalData, schemaData, faqData, howSalesforce, predectiveData, endData, digitalTwinData, buildingData } = blogsContent.digitalTwin;
    const { enActive } = useActiveLocale();

    return (
        <section className="min-h-screen">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="Partners, website, welcome"
                canonical={
                    `https://www.rialtes.com/${locale}/insights/blogs/digital-twin-in-automotive-industry-salesforce-cloud/`
                }
            />

            <Script
                id="schema-clinical"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/electric-vehicle-charging-energy.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/electric-vehicle-charging-energy-mobile.webp"
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
                        <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="11 December 2025" />


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

                            {/* digital section */}
                            {
                                digitalData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc }}
                                        />
                                        <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                        <p className="mt-10 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data.desc2 }}
                                        />

                                    </div>
                                ))
                            }


                            {/* how salesforce section */}
                            {
                                howSalesforce.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <UnorderedList arrName={data.desc} ulClassName="mt-5 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />
                                        <div className="grid lg:grid-cols-3 lg:gap-y-[60px] md:grid-cols-2 grid-cols-1 mt-[28px] md:gap-x-[60px] lg:gap-0 sm:w-[80%] md:w-full xl:w-[1000px] 4xl:w-[1300px]">
                                            {
                                                data.list.map((data, ind) => {
                                                    return (
                                                        <div key={ind} className={`mt-5 ${(ind == 1 || ind == 2 || ind == 4 || ind == 5) ? "lg:px-[30px] border-[#707070] lg:border-l max-lg:border-b max-lg:pb-5 max-lg:last:border-0" : ""} ${(ind == 0) ? "lg:pr-[40px] 4xl:pr-[20px] md:border-b lg:border-0 border-[#707070] max-md:border-b max-lg:pb-5" : ""} ${(ind == 1 || ind == 3) ? "pb-4 border-b lg:border-0 border-[#707070]" : ""} ${ind == 3 && "lg:pr-[40px]"} ${ind == 4 && "md:border-b-0"} `}>
                                                            <h3 className={`inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-bold ${(ind == 0 || ind == 3) && "w-[80%]"}`}>{data.title} </h3>
                                                            <p className="inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.desc}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <UnorderedList arrName={data.desc2} ulClassName="mt-10 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" />

                                    </div>
                                ))
                            }

                            {/* predictive section */}
                            {
                                predectiveData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                            {data.desc}
                                        </p>
                                        <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold mt-5">{data.subtitle}</h3>
                                        <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                            {data.desc2}
                                        </p>
                                        <ul className="mt-5 space-y-2 pl-[26px] lg:pl-[46px]">
                                            {
                                                data.list.map((elem, id) => (
                                                    <h4 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" key={id}><li className="list-disc">{elem}</li></h4>
                                                ))
                                            }
                                        </ul>
                                        <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                            {data.desc3}
                                        </p>
                                        <ul className="mt-5 space-y-2 pl-[26px] lg:pl-[46px]">
                                            {
                                                data.list2.map((elem, id) => (
                                                    <h4 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" key={id}><li className="list-disc">{elem}</li></h4>
                                                ))
                                            }
                                        </ul>
                                        <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                            {data.desc4}
                                        </p>
                                    </div>
                                ))
                            }

                            {/* end to end section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight md:mb-10">{t('endTitle')}</h2>
                                {
                                    endData.map((data, ind) => {
                                        return (
                                            <div className={`md:flex mt-24 md:mt-[26px] ${ind == 3 ? "4xl:py-[60px] py-[34px] md:py-[50px]" : "4xl:py-[24px] py-[34px] md:py-[26px]"} px-[26px] md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative md:ml-[90px] sm:w-[80%] md:w-auto xl:w-[1000px] 4xl:w-[1000px]`} key={ind}>
                                                <h3 className={`md:absolute max-md:mt-[-80px] sm:mt-[-70px] md:mt-0 md:top-[50%] md:translate-y-[-50%] 4xl:w-[250px] xl:w-[240px] md:w-[240px] w-fit md:left-[-60px] bg-[#006FBE] text-white font-semibold 4xl:text-[22px] 2xl:text-[19px] xl:text-[19px] md:text-[20px] text-[20px] px-[30px] py-[22px] leading-tight`}><span className={`${(ind == 3 || ind == 2) ? "xl:w-[90%] xl:block" : ""}`}>{data.title}</span></h3>
                                                <ul className="space-y-2 max-md:pl-[26px] my-auto max-md:mt-8 md:ml-[220px] xl:ml-[220px] 4xl:ml-[240px] list-disc">
                                                    {
                                                        data.desc.map((elem, id) => (
                                                            <h4 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium" key={id}><li className="list-disc">{elem}</li></h4>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* building section */}
                            {
                                buildingData.map((data, ind) => (
                                    <div className="md:mt-[50px] mt-[40px]" key={ind}>
                                        <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{data.title}</h2>
                                        <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                            {data.desc}
                                        </p>
                                        <UnorderedList arrName={data.list} ulClassName="mt-5 space-y-2 pl-[26px] lg:pl-[46px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium list-disc" />
                                        <p className="mt-[29px] xl:mt-[30px] font-bold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                            {data.subtitle}
                                        </p>

                                        <div className="lg:flex mt-5">
                                            {data.steps.map((elem, id) => (
                                                <div key={id}>
                                                    <div className={`lg:mt-5 max-lg:pb-6 max-lg:flex max-lg:ml-4 max-lg:border-l max-lg:border-[#aaa8a8] gap-4 lg:pr-10 3xl:pr-16 lg:pb-8 lg:border-b ${id == 4 && "lg:border-b-0 max-lg:border-l-0"} border-b-[#aaa8a8] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] lg:text-[16px] text-[16px] ${!enActive ? "lg:h-[100px] 4xl:h-[120px]" : ""}`}>
                                                        <p className="w-2 h-2 bg-[#1A82E0] rounded-full lg:hidden ml-[-5px]"></p> <span className="max-lg:mt-[-7px]">{elem}</span>
                                                    </div>
                                                    <div className="w-3 h-3 rounded-full hidden lg:block bg-[#1A82E0] lg:mt-[-6px]"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            }

                            {/* digital twin section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold mt-5 text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('digitalTitle')}</h2>
                                {
                                    digitalTwinData.map((data, ind) => {
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
                    <FAQAccordion faqData={faqData} />
                </div>
            </section>

            {/* blog carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section >

    )
}