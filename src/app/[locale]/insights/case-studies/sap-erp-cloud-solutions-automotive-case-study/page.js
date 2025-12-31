"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import Script from "next/script";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import useUrl from "@/app/[locale]/components/useUrl";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/caseStudy.json";
import esContent from "../../../../../../messages/es/caseStudy.json";
import frContent from "../../../../../../messages/fr/caseStudy.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import RelatedCaseStudies from "@/app/[locale]/components/RelatedCaseStudies"



export default function page() {
    const currUrl = useUrl()
    const fullUrl = "https://www.rialtes.com/insights/case-studies/sap-erp-cloud-solutions-automotive-case-study";
    const t = useTranslations("sapErp");
    const locale = useLocale();
    const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { challenges, solutions, fioriData, benefits, businessData,schemaData } = Content.sapErp;
    return (
        <section className="min-h-screen bg-white">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                canonical={`https://www.rialtes.com/${locale}/insights/case-studies/sap-erp-cloud-solutions-automotive-case-study/`}
            />
            <Script
                id="schema-sapErp"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[380px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/case-studies/automotive-tire-factory-production-line.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block h-full">
                    <Image
                        src="/images/case-studies/automotive-tire-factory-production-line-mobile.webp"
                        alt={t('bannerAlt')}
                        priority
                        height={0}
                        width={0}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
                <div className="grid lg:grid-cols-12">
                    <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

                        {/* date and icons */}
                        <BlogSocialIcons fullUrl={fullUrl} topic={t('caseTopic')} date="19 November 2025" />


                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">
                                {t('caseTitle')}
                            </h1>

                            {/* client section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t('clientTitle')}
                                </h2>

                                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t('clientDesc')}
                                </p>
                            </div>{" "}

                            {/* challenges section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t('challengeTitle')}
                                </h2>
                                {
                                    challenges.map((data, ind) => {
                                        return (
                                            <div key={ind} className="md:mt-10">
                                                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight font-bold  mt-5">
                                                    {data.title}
                                                </h3>
                                                <UnorderedList
                                                    ulClassName="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] marker:text-black list-disc text-black font-medium mt-5 pl-[36px] lg:pl-[46px] "
                                                    liClassName="mt-4 text-black last:pb-0"
                                                    arrName={data.desc}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* solutions section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t('solutionTitle')}
                                </h2>
                                <p className="mt-[29px] font-medium xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t("solutionPara")}</p>
                                <div className="grid md:grid-cols-2 grid-cols-1 mt-5 gap-x-[80px] md:gap-y-[30px] gap-y-[20px]">
                                    {
                                        solutions.map((data, ind) => (
                                            <div key={ind} >
                                                <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight font-bold mt-5">
                                                    {ind + 1}. {data.title}
                                                </h3>
                                                <ol
                                                    className="mt-[16px] xl:mt-[20px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] space-y-3">
                                                    {data.desc.map((elem, id) => (
                                                        <li key={id}>
                                                            {elem}
                                                        </li>
                                                    ))}
                                                </ol>

                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* fiori section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t('fioriTitle')}
                                </h2>
                                <p className="mt-[29px] font-medium xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("fioriPara")}
                                </p>

                                {
                                    fioriData.map((data, ind) => (
                                        <div key={ind}>
                                            <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight font-bold mt-10 xl:mt-[50px]">
                                                {data.title}
                                            </h3>
                                            <UnorderedList
                                                ulClassName="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] marker:text-black list-disc text-black font-medium mt-5 pl-[26px]"
                                                liClassName="mt-4 text-black last:pb-0"
                                                arrName={data.desc}
                                            />
                                        </div>
                                    ))
                                }

                            </div>

                            {/* benefits section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t('benefitsTitle')}
                                </h2>
                                <p className="mt-[29px] font-medium xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("benefitsPara")}
                                </p>
                                <div className=" mt-7 grid md:grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[40px]">
                                    {
                                        benefits.map((data, ind) => (
                                            <div key={ind} className="mt-[15px]">
                                                <h3 className="4xl:text-[22px] 2xl:text-[19px] xl:text-[19px] md:text-[18px] text-[18px] leading-tight font-bold">
                                                    {data.title}
                                                </h3>
                                                <p
                                                    className={`mt-[18px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* business section */}
                                <h3 className="mt-10 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] leading-tight font-bold">
                                    {t('businessTitle')}
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[46px] sm:w-[80%] md:w-full">
                                    {
                                        businessData.map((data, ind) => (
                                            <div key={ind} className="mt-10">
                                                <div className="w-11 h-11 mb-5 flex items-center justify-center rounded-full bg-[#0C8AED] text-white 4xl:text-[22px] 2xl:text-[19px] xl:text-[19px] md:text-[18px] text-[18px] font-bold">
                                                    {ind + 1}
                                                </div>
                                                <h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.title}
                                                    <span className="text-[#0C8AED] block 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">{data.perc}</span>
                                                </h4>
                                                <p
                                                    className={`mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]`}
                                                    dangerouslySetInnerHTML={{ __html: data.desc }}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* case study carousel */}
            <section className="custom-container lg:pr-0 xl:my-[120px] md:my-[60px] my-[60px]">
                <RelatedCaseStudies url={currUrl} currTopic={t("Automotive")} />
            </section>
        </section>
    );
}
