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
    const t = useTranslations('beyondRobotics')
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { blogs, blogdescData, transformationPoints, voyagerPoints, intelligentPoints, benefitsPoints, domainsPoints, riskPoints, faqData } = blogsContent.beyondRobotics;
    const fullUrl = "https://www.rialtes.com/insights/blog/why-sap-signavio-is-critical-for-a-successful-s4hana-implementation/";

    return (
        <div className="min-h-screen">
            <Seo
                title="SAP Signavio: Simplifying S/4HANA Implementation Success| Rialtes"
                description="Ready for S/4HANA Implementation? Rialtes’ Voyager+ and SAP Signavio make the journey smooth, transparent, and built for scalable enterprise success."
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
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>

            <section className="custom-container">
                <div className="py-10 bg-white">
                    <div>
                        <div className="flex flex-col md:flex-row justify-between text-black items-center  xl:max-w-[1084px] xl:w-[1084px]">
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
                            <h1 className="text-[#000000]  pb-6 leading-tight text-[26px] xl:text-[42px] 2xl:text-[48px] 4xl:text-[60px] md:text-[28px]">
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

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
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

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
                                {t('voyagerTitle')}
                            </h2>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] ">
                                {t('voyagerDesc')}<Link href={"https://www.rialtes.com/services/business-transformation/rise-with-sap-services/"}><span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">{t('voyagerDescLink')}</span></Link>,
                                {t('voyagerDesc2')}
                                {t('voyagerDesc3')}  {" "}
                                <strong> {t('voyagerDescStrong')}</strong>
                            </p>
                            <ol className="list-decimal space-y-2 font-medium  4xl:text-[20px]  xl:text-[18px]  text-[16px] pl-[32px] mt-4">
                                {voyagerPoints.map((point, index) => (
                                    <li key={index}>
                                        <h3 className="font-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">
                                            {point.title}:
                                        </h3>{" "}
                                        {point.desc}
                                    </li>
                                ))}
                            </ol>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                {t('methodologyDesc')}
                            </p>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
                                {t('jouleTitle')}
                            </h2>
                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                {t('jouleDesc')}   ,<strong>{t('jouleDescStrong')} </strong>,
                                {t('jouleDesc2')}
                                {t('jouleDesc3')}   <strong>{t('signavioStrong')} </strong>, {t('jouleDesc4')}
                            </p>
                            <ul className="list-disc space-y-2 font-medium  4xl:text-[20px]  xl:text-[18px]  text-[16px] pl-[32px] pt-4">
                                {intelligentPoints.map((point, index) => (
                                    <li key={index}>
                                        <h3 className="font-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">
                                            {point.title}:
                                        </h3>{" "}
                                        {point.desc}
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-3 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                {t('jouleSignavioDesc')}   <strong>{t('jouleSignavioStrong')}</strong>,
                                {t('jouleSignavioDesc2')}{" "}
                                <strong>{t('jouleSignavioDesc3')}</strong>
                            </p>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
                                {t('benefitsTitle')}
                            </h2>
                            <ol className="list-decimal space-y-2 font-medium 4xl:text-[20px] xl:text-[18px] text-[16px] pl-[32px] mt-4">
                                {benefitsPoints.map((point, index) => (
                                    <li key={index}>
                                        <h3 className="font-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] pb-2">
                                            {point.title}
                                        </h3>
                                        {point.desc}
                                    </li>
                                ))}
                            </ol>

                            <h2 className="pb-3 font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
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
                            <h2 className="pb-3 font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
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
                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
                                {t('rialtesSignavioTitle')}
                            </h2>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                {t('rialtesSignavioDesc')}  <Link href={"https://www.rialtes.com/insights/blogs/redefining-the-future-of-enterprise-ai-with-sap-joule/"}><span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"> {t('rialtesSignavioLink')}</span></Link>,
                                {t('rialtesSignavioDesc2')}
                            </p>
                            <p className="mt-4 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                {t('rialtesSignavioDesc3')}
                            </p>
                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">
                                {t('faqTitle')}
                            </h2>
                            <FAQAccordion faqData={faqData} />
                        </div>
                    </div>
                </div>
            </section>
            {/* Latest Blogs */}
            <div className="custom-container lg:pr-0 pb-10 mt-2">
                <BlogsCarousel slides={blogs} />
            </div>
        </div>
    );
}
