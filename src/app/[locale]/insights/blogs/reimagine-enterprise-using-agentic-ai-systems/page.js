"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import BlogSocialIcons from "@/app/[locale]/components/blogSocialIcons";
import FilteredBlogCarousel from "@/app/[locale]/components/FilteredLatestBlogCarousel";
import useUrl from "@/app/[locale]/components/useUrl";
import { useLocale, useTranslations } from "next-intl";

export default function Page() {
    const currUrl = useUrl()
    const t = useTranslations("remagineEnterprise");
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { faqs, tableData, benefits, agenticData, aiThinksData, humansData, manufacturingDesc2,schemaData } = content.remagineEnterprise
    const fullUrl = "https://www.rialtes.com/insights/blogs/reimagine-enterprise-using-agentic-ai-systems";

    return (
        <section className="min-h-screen">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                canonical={`https://www.rialtes.com/${locale}/insights/blogs/reimagine-enterprise-using-agentic-ai-systems/`}
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
                        src="/images/blog/agentic-ai-technology-microchip-computing.webp"
                        alt={t("bannerAlt")}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        className="transform transition-transform duration-500 group-hover:scale-110 object-[20%_30%]"
                    />
                </div>

                {/* Mobile Image */}
                <div className="block md:hidden h-full">
                    <Image
                        src="/images/blog/agentic-ai-technology-microchip-computing-mobile.webp"
                        alt={t("bannerAlt")}
                        priority
                        height={0}
                        width={0}
                        className="w-full h-full object-cover object-[20%_30%]"
                    />
                </div>
            </section>

            <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
                <div className="grid grid-cols-12 lg:grid-cols-12">
                    <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11 col-span-12">

                        {/* date and icons */}
                        <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="25 August 2025" />

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight"> {t('blogTitle')}</h1>

                            {/* manufacturing section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('manufacturingTitle')}</h2>
                                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t('manufacturingDesc')}
                                </p>
                                {
                                    manufacturingDesc2.map((data, ind) => {
                                        return (
                                            <p key={ind} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-5"
                                                dangerouslySetInnerHTML={{ __html: data }} />
                                        )
                                    })
                                }
                            </div>

                            {/* agentic section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('agenticAiTitle')}</h2>
                                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t('agenticAiDesc')}
                                </p>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t('agenticAiDesc2')}
                                </p>

                                <ul className="mt-[29px] xl:mt-[30px] list-disc font-medium marker:text-xl 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] pl-[34px] space-y-3">
                                    {
                                        agenticData.map((data, ind) => {
                                            return (
                                                <li key={ind}>
                                                    <h4 className=" font-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.title}
                                                    </h4>{" "}{data.desc}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                                <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t('agenticAiDesc3')}
                                </p>
                            </div>


                            {/* how enterprise section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('howEnterpriseTitle')}</h2>
                                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t('howEnterpriseDesc')}
                                </p>
                                <h3 className="mt-5 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">{t('keyTitle')}</h3>

                                <div className="space-y-8 mt-5">
                                    {benefits.map((item, index) => (
                                        <div key={index} className="pl-[34px] flex items-start gap-4">
                                            <div className="flex-shrink-0 w-2 h-2 mt-2 bg-black rounded-full"></div>
                                            <div>
                                                <h4 className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                    {item.title}
                                                </h4>
                                                <p className="mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>

                            {/* agentic ai section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('agenticAiGenTitle')}</h2>
                                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t('agenticAiGenDesc')}
                                </p>
                                <div className="mt-5">
                                    <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
                                        <table className="lg:w-full 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] text-left border-collapse">
                                            <thead className="bg-gradient-to-r from-[#0092E0] to-indigo-600 text-white text-base">
                                                <tr>
                                                    <th className="px-6 py-4"> </th>
                                                    <th className="px-6 py-4">{t('tableTitle')}</th>
                                                    <th className="px-6 py-4">{t('tableTitle2')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableData.map((row, idx) => (
                                                    <tr key={idx} className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition`}>
                                                        <td className="px-6 py-4 font-semibold">
                                                            {row.label}
                                                        </td>
                                                        <td className="px-6 py-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{row.genAI}</td>
                                                        <td className="px-6 py-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{row.agentAI}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <p className="mt-8 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t('agenticAiGenDesc2')}
                                </p>
                            </div>

                            {/* ai thinks section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('aiThinksTitle')}</h2>
                                <p className="mt-[29px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t('aiThinksDesc')}
                                </p>
                                <p className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t('aiThinksDesc2')}
                                </p>
                                {
                                    aiThinksData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <h4 className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{data.title}</h4>
                                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-3">
                                                    {data.desc}
                                                </p>
                                            </div>
                                        )
                                    })
                                }

                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]] mt-5">
                                    {t('aiThinksDesc3')}
                                </p>

                                <p className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]] mt-5">
                                    {t('aiThinksDesc4')}
                                </p>
                            </div>

                            {/* humans section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('humansTitle')}</h2>
                                <div className="mt-[29px] xl:mt-[30px]">
                                    {
                                        humansData.map((data, ind) => {
                                            return (
                                                <p key={ind} className="mt-5 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]" dangerouslySetInnerHTML={{ __html: data }} />
                                            )
                                        })
                                    }
                                </div>
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
