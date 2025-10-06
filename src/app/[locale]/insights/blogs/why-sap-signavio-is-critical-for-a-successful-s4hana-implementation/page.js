"use client";
import Image from "next/image";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import Link from "next/link";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel';
import useUrl from "@/app/[locale]/components/useUrl";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Why SAP Signavio is Critical for a Successful S/4HANA Implementation",
    "description": "SAP S/4HANA is the digital backbone for enterprises of the future. But to unlock its true potential, organizations need clarity, transparency, and AI-driven insights.",
    "image": "https://www.rialtes.com/images/blog/sap-signavio-s4hana.webp",
    "author": {
        "@type": "Organization",
        "name": "Rialtes"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Rialtes",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.rialtes.com/images/homepage/logo.svg"
        }
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.rialtes.com/insights/blog/why-sap-signavio-is-critical-for-a-successful-s4hana-implementation"
    },
    "datePublished": "2025-06-16",

    "mainEntity": {
        "@type": "FAQPage",
        "name": "S/4HANA Implementation and SAP Signavio FAQs",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Isn’t S/4HANA powerful enough on its own? Why do I need Signavio?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "S/4HANA provides the digital core, but without process clarity you risk migrating inefficiencies. Signavio ensures your processes are optimized, standardized, and aligned with SAP best practices before and after the move."
                }
            },
            {
                "@type": "Question",
                "name": "How does Signavio reduce risk in an S/4HANA program?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "By providing visibility into “as-is” and “to-be” processes, Signavio prevents scope creep, reduces rework, and enforces governance throughout the transformation."
                }
            },
            {
                "@type": "Question",
                "name": "Can Signavio help with faster adoption of S/4HANA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. With role-based documentation, visual process models, and AI-driven insights from Joule, Signavio simplifies training and empowers business users to adapt quickly."
                }
            },
            {
                "@type": "Question",
                "name": "What specific areas of the business benefit most from Signavio during S/4HANA migration?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Finance, Procurement, Supply Chain, Manufacturing, Sales & Distribution, and HR all benefit through standardized, harmonized processes that drive efficiency and better experiences."
                }
            },
            {
                "@type": "Question",
                "name": "How does Signavio work with SAP Cloud ALM?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The integration ensures traceability, KPI tracking, and compliance across the entire program lifecycle—making it easier to manage large-scale transformations."
                }
            },
            {
                "@type": "Question",
                "name": "What happens if we implement S/4HANA without using Signavio?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You risk carrying over legacy inefficiencies, extending timelines, inflating costs due to rework, and facing poor user adoption."
                }
            },
            {
                "@type": "Question",
                "name": "How does Rialtes’ Voyager+ methodology enhance Signavio’s impact?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Voyager+ leverages Signavio at every stage of SAP Activate—from advisory and design to implementation and hypercare—ensuring business outcomes remain front and center."
                }
            }
        ]
    }
};

export default function Page() {
    const t = useTranslations('whySapSignavio')
     const currUrl = useUrl()
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { blogs, blogdescData, transformationPoints, voyagerPoints, intelligentPoints, benefitsPoints, domainsPoints, riskPoints, faqData } = blogsContent.whySapSignavio;
    const fullUrl = "https://www.rialtes.com/insights/blog/why-sap-signavio-is-critical-for-a-successful-s4hana-implementation/";

    return (
        <div className="min-h-screen">
            <Seo
                title={t('seoTitle')}
                description={t('seoDescription')}
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blog/why-sap-signavio-is-critical-for-a-successful-s4hana-implementation/"
                }
            />

            <Script
                id="schema-copilots"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/sap-signavio-s4hana.webp"
                        alt="SAP Signavio"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/sap-signavio-s4hana-mobile-banner.webp"
                        alt="SAP Signavio"
                        priority
                        height={0}
                        width={0}
                        className="w-full h-auto object-cover md:h-[500px]"
                    />
                </div>
            </section>

            <section className="custom-container">
                <div className="py-10 bg-white">
                    <div>
                        <div className="flex flex-col md:flex-row justify-between text-black  xl:max-w-[1084px] xl:w-[1084px]">
                            <div className="sm:mb-0 mb-6">
                                <span className="text-[#0092E0]">{t('blogTopic')}</span>
                                <span className="text-[#ACACAC]"> | </span>16 June 2025
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-6">
                                    <div className="max-w-[40px]">
                                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            {" "}
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
                                        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                                            target="_blank"
                                            rel="noopener noreferrer" >
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
                    </div>
                    <div className="py-6"></div>
                    <div className="grid xl:grid-cols-12">
                        <div className="xl:col-span-10 col-span-12">
                            <h1 className="text-[#000000] pb-6 leading-tight text-[26px] xl:text-[42px] 2xl:text-[48px] 4xl:text-[60px] md:text-[28px]">
                                {t('blogTitle')}
                            </h1>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12">
                        <div className="col-span-9">
                            {blogdescData.map((data, ind) => {
                                return (
                                    <p key={ind} className="mt-3 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                        {data}
                                    </p>
                                );
                            })}

                            <h2 className="font-semibold mt-10 text-[#0092E0]  4xl:text-[32px] xl:text-[26px] 2xl:text-[26px] text-[22px] pr-10 4xl:pr-0 xl:pr-0">
                                {t('strategicTitle')}
                            </h2>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] pb-2">
                                {t('strategicDesc')}
                            </p>
                            <p className="mt-1 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] pb-2">
                                {t('keyReasonTitle')}
                            </p>
                            <ul className="list-disc space-y-2 font-medium  4xl:text-[20px] xl:text-[18px] text-[16px] pl-[32px]">
                                {transformationPoints.map((point, index) => (
                                    <li key={index}>
                                        <h3 className="font-bold inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">
                                            {point.title}:
                                        </h3>{" "}
                                        {point.desc}
                                    </li>
                                ))}
                            </ul>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 4xl:text-[32px] xl:text-[26px] 2xl:text-[26px] text-[22px] pr-10 4xl:pr-0 xl:pr-0">
                                {t('voyagerTitle')}
                            </h2>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] ">
                                {t('voyagerDesc')}{" "}<Link href={"https://www.rialtes.com/services/business-transformation/rise-with-sap-services/"}> <span className="text-[#0092E0] pr-2 transition duration-300 ease-out hover:text-gray-400 underline">{t('voyagerDescLink')}</span></Link>,
                                {t('voyagerDesc2')}
                                {t('voyagerDesc3')}  {" "}
                                <strong> {t('voyagerDescStrong')}</strong>
                            </p>
                            <ol className="flex flex-col lg:flex-row relative lg:mt-[74px] mt-[60px] xl:w-[1150px]">
                                {voyagerPoints.map((step, index) => (
                                    <li key={step.id} className="relative flex-1 lg:mb-0 flex flex-col"                                    >
                                        {/* Circle */}
                                        <div className="z-10 flex justify-center w-4 h-4 bg-[#0C8AED] rounded-full ring-0 ring-white lg:ring-4 shrink-0">
                                            <span className="flex w-3 h-3 bg-[#0C8AED] rounded-full"></span>
                                        </div>

                                        {/* Vertical line (mobile/tablet) */}
                                        {index !== voyagerPoints.length - 1 && (
                                            <div className="absolute top-4 left-2 w-0.5 h-full bg-[#9D9D9D] lg:hidden"></div>
                                        )}

                                        {/* Horizontal line (desktop) */}
                                        {index !== voyagerPoints.length - 1 && (
                                            <div className="hidden lg:block flex-1 w-full h-0.5 bg-[#9D9D9D] absolute top-2"></div>
                                        )}

                                        {/* Label */}
                                        <div className="lg:mt-[44px] max-lg:ml-[40px] max-lg:mt-[-20px]
                                        ">
                                            <h3 className={`font-bold inline"
                                              ${locale === "es"
                                    ? "lg:pr-8 xl:pr-2  4xl:text-[20px] 2xl:text-[20px] xl:text-[20px] text-[18px]"
                                    : locale === "fr"
                                        ? "lg:pr-8 xl:pr-2 4xl:text-[22px] 2xl:text-[21px] xl:text-[22px] text-[18px]"
                                        : "lg:pr-8 xl:pr-2  4xl:text-[24px] 2xl:text-[22px] xl:text-[20px] text-[18px]"
                                }`}
                                            
                                            >
                                                {step.title}
                                            </h3>
                                            <p className="2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] lg:mt-[34px] mt-[8px] lg:pr-12 4xl:pr-10 max-lg:mb-12">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>

                            <p className="md:mt-0 lg:mt-[110px] 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                {t('methodologyDesc')}
                            </p>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 4xl:text-[32px] xl:text-[26px] 2xl:text-[26px] text-[22px] pr-10 4xl:pr-0 xl:pr-0">
                                {t('jouleTitle')}
                            </h2>
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                {t('jouleDesc')}   ,<strong className="pl-1">{t('jouleDescStrong')} </strong>,
                                {t('jouleDesc2')}
                                {t('jouleDesc3')}   <strong>{t('signavioStrong')} </strong>, {t('jouleDesc4')}
                            </p>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[50px] mt-[26px] md:gap-[18px] gap-y-[20px] sm:w-[70%] md:w-[90%] lg:w-full xl:w-[1100px]">
                                {intelligentPoints.map((point, index) => (
                                    <div key={index} className="border border-[#707070] lg:p-[40px] p-[26px]">
                                        <h3 className="font-bold inline 4xl:text-[22px] 2xl:text-[20px] xl:text-[19px] text-[16px] text-[#006FBE]">
                                            {point.title}
                                        </h3>{" "}
                                        <p className="mt-[16px] 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{point.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] lg:mt-[47px] mt-[28px]">
                                {t('jouleSignavioDesc')}   <strong>{t('jouleSignavioStrong')}</strong>,<span className="pl-1"></span>
                                {t('jouleSignavioDesc2')}{" "}
                                <strong>{t('jouleSignavioDesc3')}</strong>
                            </p>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 4xl:text-[32px] xl:text-[26px] 2xl:text-[26px] text-[22px] pr-10 4xl:pr-0 xl:pr-0">
                                {t('benefitsTitle')}
                            </h2>

                            <div className="flex flex-wrap justify-center lg:mt-[120px] mt-[80px] gap-y-[60px] md:gap-y-[90px] md:gap-x-[18px] xl:w-[1100px] md:w-[90%] sm:w-[70%]">
                                {benefitsPoints.map((point, index) => (
                                    <div
                                        key={index}
                                        className="border border-[#707070] relative flex-1 min-w-[300px] max-w-[350px] lg:pb-[41px] lg:pt-[70px] pt-[60px] pb-[40px]"
                                    >
                                        <div className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[80px] lg:h-[80px] absolute lg:top-[-40px] top-[-30px] left-1/2 -translate-x-1/2 flex items-center justify-center bg-[#006FBE] text-white font-bold rounded-full text-[26px] xl:text-[32px] 2xl:text-[38px] 4xl:text-[50px]">
                                            {index + 1}
                                        </div>

                                        <div>
                                            <h3 className="font-bold 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px] p-4 bg-[#e0dfdf] px-[35px]">
                                                {point.title}
                                            </h3>
                                            <p className="px-[35px] lg:pl-[28px] lg:pr-[22px] lg:mt-[32px] mt-[18px] 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                                {point.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>




                            <h2 className="pb-3 font-semibold mt-10 text-[#0092E0] 4xl:text-[32px] xl:text-[26px] 2xl:text-[26px] text-[22px] pr-10 4xl:pr-0 xl:pr-0">
                                {t('useCasesTitle')}
                            </h2>
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                {t('useCasesDesc')}
                            </p>

                            <ul className="list-disc space-y-2 font-medium 4xl:text-[20px] xl:text-[18px] text-[16px] pl-[32px] pt-4">
                                {domainsPoints.map((point, index) => (
                                    <li key={index}>
                                        <h3 className="font-bold inline 4xl:text-[20px] 2xl:text-[18px] xl:text-[17px] text-[16px]">
                                            {point.title}:
                                        </h3>{" "}
                                        {point.desc}
                                    </li>
                                ))}
                            </ul>
                            <h2 className="pb-3 font-semibold mt-10 text-[#0092E0] 4xl:text-[32px] xl:text-[26px] 2xl:text-[26px] text-[22px] pr-10 4xl:pr-0 xl:pr-0">
                                {t('whyNotTitle')}
                            </h2>
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                {t('whyNotDesc')}
                            </p>
                            <UnorderedList
                                arrName={riskPoints}
                                ulClassName="mt-3 font-medium list-disc 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[32px] space-y-2"
                                liClassName=""
                            />
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                {t('whyNotDesc2')}
                            </p>
                            <h2 className="font-semibold mt-10 text-[#0092E0] 4xl:text-[32px] xl:text-[26px] 2xl:text-[26px] text-[22px] pr-10 4xl:pr-0 xl:pr-0">
                                {t('rialtesSignavioTitle')}
                            </h2>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                {t('rialtesSignavioDesc')}  <Link href={"https://www.rialtes.com/insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule/"}><span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"> {t('rialtesSignavioLink')} </span>{" "}</Link>,
                                {t('rialtesSignavioDesc2')}
                            </p>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                {t('rialtesSignavioDesc3')}
                            </p>
                            <h2 className="font-semibold mt-10 text-[#0092E0] 4xl:text-[32px] xl:text-[26px] 2xl:text-[26px] text-[22px] pr-10 4xl:pr-0 xl:pr-0">
                                {t('faqTitle')}
                            </h2>
                            <FAQAccordion faqData={faqData} />
                        </div>
                    </div>
                </div>
            </section>
            {/* Latest Blogs */}
            <div className="custom-container lg:pr-0 pb-10 mt-2">
                <FilteredBlogCarousel url={currUrl} />
            </div>
        </div>
    );
}
