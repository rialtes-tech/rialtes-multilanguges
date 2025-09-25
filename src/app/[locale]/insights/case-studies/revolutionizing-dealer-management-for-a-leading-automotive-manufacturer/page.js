"use client";
import Image from "next/image";
import RelatedTopicsCarousel from "../../../components/relatedTopicsCarousel";
import Seo from "@/app/[locale]/components/Seo";
import { useLocale, useTranslations } from "next-intl";
import enContent from "../../../../../../messages/en/caseStudy.json";
import esContent from "../../../../../../messages/es/caseStudy.json";
import frContent from "../../../../../../messages/fr/caseStudy.json";
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import Script from "next/script";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
            "https://www.rialtes.com/insights/case-studies/revolutionizing-dealer-management-for-a-leading-automotive-manufacturer-with-autosense/",
    },
    headline:
        "Case Study: Revolutionizing Dealer Management for a Leading Automotive Manufacturer with AutoSense",
    description:
        "Discover how Rialtes transformed automotive dealer management with AutoSense—modern UX, SAP & Salesforce integration, and real-time operations.",
    image:
        "https://www.rialtes.com/images/case-studies/revolutionizing-dealer-management-for-a-eading-automotive-anufacturer-with-autosense-case-study-banner.webp",
    author: {
        "@type": "Organization",
        name: "Rialtes",
    },
    publisher: {
        "@type": "Organization",
        name: "Rialtes",
        logo: {
            "@type": "ImageObject",
            url: "https://www.rialtes.com/images/homepage/logo.svg",
        },
    },
    articleSection: "Case Studies",
    datePublished: "2025-06-03",
};
export default function Page() {
    const t = useTranslations("autoSenseCaseStudy");
    const locale = useLocale();
    const Content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const {
        slides,
        keyList,
        approachList,
        featuresList,
        benefitsList,
        deliverablesList,
    } = Content.autoSenseCaseStudy;

    const fullUrl =
        "https://www.rialtes.com/insights/case-studies/revolutionizing-dealer-management-for-a-leading-automotive-manufacturer-with-autosense";
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Revolutionizing Automotive Dealer Management with AutoSense | Rialtes"
                description="Discover how Rialtes transformed automotive dealer management with AutoSense—modern UX, SAP & Salesforce integration, and real-time operations."
                canonical="https://www.rialtes.com/insights/case-studies/revolutionizing-dealer-management-for-a-leading-automotive-manufacturer-with-autosense/"
            />
            <Script
                id="schema-revolutionizing"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <section className="relative h-[250px] sm:h-[500px] 4xl:h-[650px] 2xl:h-[550px] xl:h-[450px] overflow-hidden">
                <Image
                    src="/images/case-studies/revolutionizing-dealer-management-for-a-eading-automotive-anufacturer-with-autosense-case-study-banner.webp"
                    alt="Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP"
                    fill
                    style={{ objectFit: "cover", objectPosition: "90% 20%" }}
                    priority
                />
            </section>
            <section className="custom-container">
                <div className="py-10 bg-white 4xl:max-w-[1084px] 4xl:w-[1084px] xl:w-[840px]">
                    <div>
                        <h1 className="text-[#000000] py-6  leading-tight  text-[24px]  4xl:text-[60px] xl:text-[42px] 2xl:text-[48px]">
                            {t("dealerTitle")}
                        </h1>
                    </div>
                    <div className="py-4"></div>
                    <div>
                        <div className="flex flex-col md:flex-row justify-between text-black items-center">
                            <div>
                                <span className="text-[#0092E0]">{t("manufacturing")}</span>{" "}
                                <span className="text-[#ACACAC]"> | </span>
                                {t("date")}
                            </div>
                            <div className="flex flex-col ">
                                <div className="flex flex-row gap-6 ml-[-8px]">
                                    <div className="max-w-[40px]">
                                        <a
                                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                                                fullUrl
                                            )}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                src="/images/case-studies/linkedin.svg"
                                                alt="LinkedIn"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                priority
                                            />
                                        </a>
                                    </div>
                                    <div className="max-w-[40px]">
                                        <a
                                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                                fullUrl
                                            )}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {" "}
                                            <Image
                                                src="/images/case-studies/twitter.svg"
                                                alt="Twitter"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                                priority
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4"></div>

                    </div>
                    <div className="py-6"></div>
                    <div>
                        <div className="">
                            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[25px] xl:text-[20px]  text-[20px] pb-4">
                                {t("cliendTitle")}
                            </h2>
                            <p className="text-black 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] text-[16px] md:text-[19px]">{t("cliendDesc")}</p>
                            <div className="py-6"></div>
                            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[25px] xl:text-[20px]  text-[20px] pb-4">
                                {t("keyTitle")}
                            </h2>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t("keyDesc")}</p>
                            <div className="pl-3">
                                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px] font-medium">
                                    {keyList.map((item, index) => (
                                        <li key={index} className="pb-4 last:pb-0">
                                            <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px]">
                                                {item.title}
                                            </h3>
                                            : {item.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="py-6"></div>
                    <div>
                        <div className="">
                            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[25px] xl:text-[20px]  text-[20px] pb-4">
                                {t("autoTitle")}
                            </h2>
                            <p className="text-black pb-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">{t("autoDesc")}</p>
                            <h3 className="h3-bold pb-4 4xl:text-[20px] 2xl:text-[19px] xl:text-[18px] text-[18px] md:text-[19px]">
                                {t("approachTitle")}
                            </h3>
                            <div className="pl-2">
                                <ul className="list-decimal marker:text-[#000] text-black pl-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px] font-medium">
                                    {approachList.map((item, index) => (
                                        <li key={index} className="pb-4 ">
                                            <h4 className="inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px]">
                                                {item.title}
                                            </h4>
                                            : {item.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="pt-2">
                            <h3 className="h3-bold pb-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[18px] md:text-[19px]">
                                {t("featuresTitle")}
                            </h3>
                            <div className="pl-2">
                                <ul className="list-decimal marker:text-[#000] text-black pl-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px] font-medium">
                                    {featuresList.map((item, index) => (
                                        <li key={index} className="pb-4 last:pb-0">
                                            <h4 className="inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px]">
                                                {item.title}
                                            </h4>
                                            : {item.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="py-6"></div>
                    <div>
                        <div className="">
                            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[25px] xl:text-[20px] text-[20px] pb-4">
                                {t("benifitTitle")}
                            </h2>
                            <div className="pl-2">
                                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px] font-medium">
                                    {benefitsList.map((item, index) => (
                                        <li key={index} className="pb-4 last:pb-0">
                                            <h3 className="h3-bold inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[17px] md:text-[19px]">
                                                {item.title}
                                            </h3>
                                            : {item.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="py-6"></div>
                    <div>
                        <div className="">
                            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[25px] xl:text-[20px] text-[20px] pb-4">
                                {t("deliverablesTitle")}
                            </h2>

                            <div className="pl-2">
                                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black  pl-4 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px] font-medium">
                                    {deliverablesList.map((step, idx) => (
                                        <li key={idx} className="pb-4 last:pb-0">
                                            <h3 className="inline h3-bold 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px]">
                                                {step.title}
                                            </h3>{" "}
                                            : {step.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="py-6"></div>
                    <div>
                        <div className="">
                            <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[25px] xl:text-[20px] text-[20px] pb-4">
                                {t("conclusionTitle")}
                            </h2>
                            <p className="4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] md:text-[19px]">{t("conclusionDesc")}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Blogs */}
            <div className="py-10 custom-container xl:!pr-0">
                <RelatedTopicsCarousel slides={slides} />
            </div>
        </div>
    );
}
