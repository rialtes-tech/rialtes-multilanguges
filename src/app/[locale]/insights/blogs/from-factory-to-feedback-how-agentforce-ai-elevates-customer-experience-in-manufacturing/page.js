"use client";
import Image from "next/image";
import Link from "next/link";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'


export default function Page() {
    const t = useTranslations('factoryToFeedback')
    const currUrl = useUrl()
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { faqs, mainData, bestAiToolsDesc, bestAiToolsData, intelligentDesc, intelligentData,schemaData, businessData, postSaleData, postSaleData2, rialtesTalkData, consistencyData, readyData } = blogsContent.factoryToFeedback;
    const fullUrl = "https://www.rialtes.com/insights/blogs/from-factory-to-feedback-how-agentforce-ai-elevates-customer-experience-in-manufacturing/";

    return (
        <section className="min-h-screen bg-white">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                canonical={`https://www.rialtes.com/${locale}/insights/blogs/from-factory-to-feedback-how-agentforce-ai-elevates-customer-experience-in-manufacturing/`}
            />

            <Script
                id="schema-discover"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <section className="relative group overflow-hidden 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[400px]">
                {/* Desktop Image */}
                <div className="hidden md:block">
                    <Image
                        src="/images/blog/technology-team-collaboration-command-center.webp"
                        alt={t("bannerAlt")}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Mobile Image */}
                <div className="block md:hidden h-full">
                    <Image
                        src="/images/blog/technology-team-collaboration-command-center-mobile.webp"
                        alt={t("bannerAlt")}
                        priority
                        height={0}
                        width={0}
                        className="w-full h-full object-cover object-[60%_30%]"
                    />
                </div>
            </section>
            <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
                <div className="grid lg:grid-cols-12">
                    <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

                        {/* date and icons */}
                        <BlogSocialIcons fullUrl={fullUrl} topic="Salesforce Agentforce" date="22 August 2025" />

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight"> {t('blogTitle')}</h1>
                            {/* main data */}
                            <div className="md:mt-[50px] mt-[40px]">
                                {
                                    mainData?.map((data, ind) => {
                                        return (
                                            <div key={ind} className="mt-[29px] xl:mt-[30px]">
                                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                                    {data.title}
                                                </h2>
                                                {
                                                    data.desc.map((elem, id) => {
                                                        return (
                                                            <p key={id} className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: elem }} />
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* best ai tools section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h3 className="font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">
                                    {t('bestAiToolsTitle')}
                                </h3>
                                {
                                    bestAiToolsDesc.map((data, ind) => {
                                        return (
                                            <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2 lg:pl-[24px] mt-4" key={ind}>
                                                {data}
                                            </p>
                                        )
                                    })
                                }
                                <UnorderedList arrName={bestAiToolsData} ulClassName="list-disc mt-3 space-y-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium pl-[36px] lg:pl-[56px] " />
                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-8 pl-2 lg:pl-[24px]">
                                    {t('bestAiToolsDesc2')}
                                </p>
                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5 pl-2 lg:pl-[24px]">
                                    {t('bestAiToolsDesc3')}
                                </p>
                            </div>

                            {/* ai tool section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h3 className="font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">
                                    {t('aiToolTitle')}
                                </h3>

                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2 lg:pl-[24px] mt-3">
                                    {t('aiToolDesc')}
                                </p>
                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2 lg:pl-[24px] mt-3">
                                    {t('aiToolDesc2')}
                                </p>
                            </div>

                            {/* intelligent section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h3 className="font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">
                                    {t('intelligentTitle')}
                                </h3>
                                <div className="pl-2 lg:pl-[24px]">
                                    {
                                        intelligentDesc.map((data, ind) => {
                                            return (
                                                <p key={ind} className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: data }} />
                                            )
                                        })
                                    }
                                </div>
                                <ul className="list-disc mt-3  4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4 pl-[36px] lg:pl-[56px] ">
                                    {
                                        intelligentData.map((data, ind) => {
                                            return (
                                                <li key={ind}><h4 className="font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.title}</h4>{" "}{data.desc}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            {/* business section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h3 className="font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">
                                    {t('businessTitle')}
                                </h3>
                                <UnorderedList arrName={businessData} ulClassName="list-disc mt-5 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium pl-[36px] lg:pl-[56px]" />
                            </div>

                            {/* post sale section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h3 className="font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">
                                    {t('postSaleTitle')}
                                </h3>
                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2 lg:pl-[24px] mt-3">
                                    {t('postSaleDesc')}
                                </p>
                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2 lg:pl-[24px] mt-5">
                                    {t('postSaleDesc2')}
                                </p>
                                <UnorderedList arrName={postSaleData} ulClassName="list-disc mt-3 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium pl-[36px] lg:pl-[56px]" />
                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2 lg:pl-[24px] mt-8">
                                    {t('postSaleDesc3')}
                                </p>
                                <UnorderedList arrName={postSaleData2} ulClassName="list-disc mt-3 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium pl-[36px] lg:pl-[56px]" />
                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2 lg:pl-[24px] mt-8">
                                    {t('postSaleDesc4')}
                                </p>
                            </div>

                            {/* consistency section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h3 className="font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">
                                    {t('consistencyTitle')}
                                </h3>
                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2 lg:pl-[24px] mt-3">
                                    {t('consistencyDesc')}
                                </p>
                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2 lg:pl-[24px] mt-3">
                                    {t('consistencyDesc2')}
                                </p>
                                <UnorderedList arrName={consistencyData} ulClassName="list-disc mt-3 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium pl-[36px] lg:pl-[56px] " />
                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2 lg:pl-[24px] mt-5">
                                    {t('consistencyDesc3')}
                                </p>
                            </div>

                            {/* ai thinks section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t('aiThinksTitle')}
                                </h2>
                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2 lg:pl-[24px] mt-[29px] xl:mt-[34px]">
                                    {t('aiThinkDesc')}
                                </p>
                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2 lg:pl-[24px] mt-3">
                                    {t('aiThinkDesc2')}
                                </p>
                            </div>

                            {/* ready section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t('readyTitle')}
                                </h2>
                                <h3 className="mt-[29px] xl:mt-[34px] font-semibold 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px]">
                                    {t('readySubTitle')}
                                </h3>
                                <UnorderedList arrName={readyData} ulClassName="list-disc mt-5 space-y-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium pl-[36px] lg:pl-[56px] " />

                                {
                                    rialtesTalkData.map((data, ind) => {
                                        return (
                                            <p
                                                key={ind}
                                                className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-2 lg:pl-[24px] mt-5"
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
                <div className="mt-[29px] xl:mt-[34px]">
                    <FAQAccordion faqData={faqs} />
                </div>
            </section>
            {/* blog carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section>
    );
}
