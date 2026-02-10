"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/caseStudy.json";
import esContent from "../../../../../../messages/es/caseStudy.json";
import frContent from "../../../../../../messages/fr/caseStudy.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import Script from "next/script";
import useUrl from "@/app/[locale]/components/useUrl";
import BlogSocialIcons from '@/app/[locale]/components/blogSocialIcons'
import RelatedCaseStudies from '@/app/[locale]/components/RelatedCaseStudies'

export default function Page() {
    const currUrl = useUrl()
    const t = useTranslations("autoSenseCaseStudy");
    const locale = useLocale();
    const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const {
        keyList,
        approachList,
        featuresList,
        benefitsList,
        deliverablesList,
        schemaData
    } = Content.autoSenseCaseStudy;

    const fullUrl = "https://www.rialtes.com/insights/case-studies/revolutionizing-dealer-management-for-a-leading-automotive-manufacturer-with-autosense";
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                canonical={`https://www.rialtes.com/${locale}/insights/case-studies/revolutionizing-dealer-management-for-a-leading-automotive-manufacturer-with-autosense`}
            />
            <Script
                id="schema-revolutionizing"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] h-[380px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/case-studies/business-professionals-collaborating-laptop-modern-office.webp"
                        alt={t('bannerAlt')}
                        fill
                        priority
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="xl:hidden block h-full">
                    <Image
                        src="/images/case-studies/business-professionals-collaborating-laptop-modern-office.webp"
                        alt={t('bannerAlt')}
                        priority
                        height={0}
                        width={0}
                        className="w-full h-full object-cover object-[80%_20%]"
                    />
                </div>
            </section>

            <section className="custom-container 4xl:mt-[80px] xl:mt-[60px] mt-[40px]">
                <div className="grid lg:grid-cols-12">
                    <div className="4xl:col-span-10 xl:col-span-10 lg:col-span-11">

                        {/* date and icons */}
                        <BlogSocialIcons fullUrl={fullUrl} topic={t('caseTopic')} date="03 June 2025" />

                        {/* main blog */}
                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t('dealerTitle')}</h1>

                            {/* client section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('cliendTitle')}</h2>
                                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('cliendDesc')}</p>
                            </div>

                            {/* key section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('keyTitle')}</h2>
                                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('keyDesc')}</p>
                                <ul className="list-disc mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4">
                                    {keyList.map(({ title, description }, index) => (
                                        <li key={index}>
                                            <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                {title}
                                            </h3>
                                            : {description}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* auto section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('autoTitle')}</h2>
                                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('autoDesc')}</p>
                                {/* approach section */}
                                <div className="md:mt-[34px] mt-[29px]">
                                    <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">
                                        {t("approachTitle")}
                                    </h3>
                                    <ol className="list-decimal mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4">
                                        {approachList.map(({ title, description }, index) => (
                                            <li key={index}>
                                                <h4 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                    {title}
                                                </h4>
                                                : {description}
                                            </li>
                                        ))}
                                    </ol>
                                </div>

                                {/* features section */}
                                <div className="md:mt-[34px] mt-[29px]">
                                    <h3 className="4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold">
                                        {t("featuresTitle")}
                                    </h3>
                                    <ol className="list-decimal mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4">
                                        {featuresList.map(({ title, description }, index) => (
                                            <li key={index}>
                                                <h4 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                    {title}
                                                </h4>
                                                : {description}
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>

                            {/* benefits section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('benifitTitle')}</h2>
                                <ul className="list-disc mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4">
                                    {benefitsList.map(({ title, description }, index) => (
                                        <li key={index}>
                                            <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                {title}
                                            </h3>
                                            : {description}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* deliverable section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('deliverablesTitle')}</h2>
                                <ul className="list-disc mt-5 pl-[34px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] font-medium space-y-4">
                                    {deliverablesList.map(({ title, description }, index) => (
                                        <li key={index}>
                                            <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                {title}
                                            </h3>
                                            : {description}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* conclusion section */}
                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">{t('conclusionTitle')}</h2>
                                <p className="mt-[16px] xl:mt-[22px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{t('conclusionDesc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* case study carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] my-[60px]">
                <RelatedCaseStudies url={currUrl} currTopic={t("caseTopic")} />
            </section>
        </div>
    );
}
