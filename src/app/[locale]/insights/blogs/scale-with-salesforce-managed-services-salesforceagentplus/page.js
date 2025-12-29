"use client";
import Image from "next/image";
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
import Link from "next/link";
import useUrl from "@/app/[locale]/components/useUrl";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'

export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/blogs/scale-with-salesforce-managed-services-salesforceagentplus";
    const currUrl = useUrl()
    const t = useTranslations('salesforceManaged')
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { salesforceManaged, salesforceBusiness, revenueGrowth, salesforceManagedSections, tableData, businessBiggestImpact, faqs, statePropertyPara1, discoverAgenticPara2 } = blogsContent.salesforceManaged;
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Salesforce Managed Services & SalesforceAgent+: Scale Revenue",
        "description": "SalesforceAgent+ delivers AI-driven Managed Services for Salesforce designed to accelerate business outcomes, not just CRM maintenance.",
        "image": "https://www.rialtes.com/images/blog/salesforce-managed-services-salesforceagent-plus.webp",
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
            "@id": "https://www.rialtes.com/insights/blogs/scale-with-salesforce-managed-services-salesforceagentplus/"
        },
        "url": "https://www.rialtes.com/insights/blogs/scale-with-salesforce-managed-services-salesforceagentplus/",
        "datePublished": "2025-12-02",
        "mainEntity": {
            "@type": "FAQPage",
            "name": "Scale Your Company’s Revenue with Salesforce Managed Services - FAQs",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What are managed services in Salesforce? (What exactly are managed services?)",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": " Managed services in Salesforce refer to ongoing expert support that helps businesses continuously optimize their CRM rather than just maintain it. Instead of handling everything internally, companies partner with certified Salesforce specialists who proactively improve workflows, fix issues, introduce new features, analyze data, and align Salesforce with evolving business goals. It's not break-fix support — it's continuous growth enablement."
                    }
                },
                {
                    "@type": "Question",
                    "name": " What are the benefits of Salesforce managed services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": ["Salesforce managed services help businesses unlock more value from their CRM investment by:",
                            "• Improving user adoption and productivity",
                            "• Automating sales, marketing, and service workflows",
                            "• Reducing dependency on internal tech teams",
                            "• Lowering the cost of full-time in-house admin and developer roles",
                            "• Accelerating innovation with AI, analytics, and automation",
                            "• Ensuring security, compliance, and clean data Over time, this leads to increased revenue, faster decision-making, and a CRM that evolves as the business scales.",
                        ]
                    }
                },
                {
                    "@type": "Question",
                    "name": " What are examples of managed services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": ["Examples include:",
                            "• Salesforce administration and enhancements",
                            "• Automation of lead, opportunity, and service processes",
                            "• Integration with ERPs and third-party applications",
                            "• AI and analytics enablement using Data Cloud and Tableau",
                            "• Release management and new feature enablement",
                            "• Data quality and governance",
                            "• Consulting and roadmap planning based on business goals",
                        ]
                    }
                },
                {
                    "@type": "Question",
                    "name": " What is the difference between SaaS and managed services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": ["SaaS (Software as a Service) provides access to software — such as Salesforce on a subscription basis. Managed services, on the other hand, provide the expertise to continually optimize that software.",
                            "In short:",
                            "• SaaS = the platform",
                            "• Managed services = the team ensuring the platform performs at its fullest potential",
                            "Because software alone doesn’t drive transformation; what matters is how effectively it’s configured, adopted, and optimized.",
                        ]
                    }
                },
                {
                    "@type": "Question",
                    "name": "What operational areas do Salesforce managed services cover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "They cover daily admin and enhancement requests, AI and automation (Einstein, flows), Sales Cloud & CPQ optimization, Service Cloud efficiency, Data Cloud & Marketing Cloud alignment, end-to-end integrations, data quality and governance, and analytics (Tableau/CRM Analytics)."
                    }
                },
                {
                    "@type": "Question",
                    "name": " How to choose a Salesforce managed services provider for your industry?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": ["Look for a provider that checks all these boxes:",
                            "• Proven experience in your industry and Salesforce Cloud relevant to your business",
                            "• Ability to support both core CRM and advanced AI-driven capabilities",
                            "• Access to certified consultants rather than generic support teams",
                            "• Flexible engagement models that scale with business needs",
                            "• A continuous innovation approach instead of ticket-based servicing",
                            "• Strong governance and security practices, not just development skills",
                        ]
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are AI capabilities part of managed services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes—modern managed services include AI-driven features such as predictive lead scoring, opportunity insights, churn probability, sentiment analysis, automated next-step recommendations, autonomous agents for service automation, and proactive opportunity intelligence."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do managed services handle data, security and governance?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "They implement role-based access controls, regular data cleansing and deduplication, compliance-ready governance, integration monitoring, periodic audits, and secure data flows between Salesforce and ERP/billing/support systems to ensure reliable insights."
                    }
                }
            ]
        }

    }

    return (
        <section className="min-h-screen">
            <Seo
                title={t("seoTitle")}
                description={t("seoDescription")}
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/scale-with-salesforce-managed-services-salesforceagentplus/"
                }
            />

            <Script
                id="schema-copilots"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/salesforce-managed-services-salesforceagent-plus.webp"
                        alt={t("bannerAlt")}
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/salesforce-managed-services-salesforceagent-plus-mobile.webp"
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
                        <BlogSocialIcons fullUrl={fullUrl} topic={t('blogTopic')} date="02 December 2025" />




                        <div className="xl:mt-[60px] mt-[42px]">
                            <h1 className="4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px] text-[26px] leading-tight">{t("salesforceManagedTitle")}</h1>

                            <div className="mt-[22px] xl:mt-[30px] ">
                                {
                                    salesforceManaged.map((data, ind) => {
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

                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("managedServicesTitle")}
                                </h2>
                                <h3 className="text-black mt-[22px] xl:mt-[30px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold leading-tight  ">
                                    {t("salesforceBusinessTitle")}
                                </h3>

                                <div className="mt-[22px] xl:mt-[20px] ">
                                    {
                                        salesforceBusiness.map((data, ind) => {
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

                                <h3 className="text-black mt-[22px] xl:mt-[30px] 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold  leading-tight">
                                    {t("revenueGrowthTitle")}
                                </h3>

                                <p className="mt-[22px] xl:mt-[20px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("revenueMetrics")}
                                </p>

                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                    {revenueGrowth.map((point, i) => (
                                        <li key={i} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{point}</li>
                                    ))}
                                </ul>

                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("salesforceFuel")}
                                </p>

                            </div>

                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("statePropertyTitle")}
                                </h2>

                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                    dangerouslySetInnerHTML={{ __html: statePropertyPara1 }} />
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("statePropertyPara2")}
                                </p>
                                <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("statePropertyPara3")}
                                </p>


                            </div>

                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("salesforceIncludeTitle")}
                                </h2>
                                <div className="mt-[40px] space-y-[60px]">

                                    {
                                        salesforceManagedSections.map((section, i) => (
                                            <div key={i}>

                                                <div className="flex items-center gap-6">
                                                    <span className="text-black 4xl:text-[43px] 2xl:text-[36px] xl:text-[30px] md:text-[26px] text-[24px] font-bold">
                                                        {section.number}
                                                    </span>
                                                    <div className="h-12 border-l-2 border-gray-400"></div>
                                                    <h3 className="text-black 4xl:text-[24px] 2xl:text-[21px] xl:text-[20px] md:text-[20px] text-[20px] font-bold leading-tight">
                                                        {section.title}
                                                    </h3>
                                                </div>



                                                {section.text && (
                                                    <p className="mt-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                        {section.text}
                                                    </p>
                                                )}


                                                <div className="grid md:grid-cols-3 gap-8 mt-[10px] md:mt-[25px] xl:mt-[30px]">
                                                    {section.items.map((item, idx) => (
                                                        <div
                                                            key={idx}
                                                            className={`
                                                                 ${idx !== 0
                                                                    ? "border-t border-gray-300 md:border-t-0 md:border-l md:border-gray-300 md:pl-10"
                                                                    : "border-t-0 pl-0"
                                                                }
                                                              `}
                                                        >
                                                            <h4 className="text-[#006FBE] font-semibold 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px] mt-6 md:mt-0 ">
                                                                {item.heading}
                                                            </h4>
                                                            <p className="mt-2 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    ))}

                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            <div className="md:mt-[90px] mt-[40px]">

                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("internalSalesforceTitle")}
                                </h2>


                                <div className="w-full mt-[22px] xl:mt-[30px] overflow-x-auto">
                                    <table className="w-full table-fixed border-collapse">

                                        <thead>
                                            <tr className="bg-[#E3E3E3] text-black font-medium 4xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[12px]">

                                                <th className="xl:w-[50%] md:w-[45%] w-[40%] text-left py-3 pl-4 ">
                                                    {t("internalSalesforceheading1")}
                                                </th>
                                                <th className="xl:w-[25%] md:w-[25%] w-[30%] text-left py-3 pl-6">
                                                    {t("internalSalesforceheading2")}
                                                </th>
                                                <th className="xl:w-[25%]  md:w-[30%] w-[30%] text-left py-3 pl-4">
                                                    {t("internalSalesforceheading3")}
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {tableData.map((row, idx) => (
                                                <tr key={idx} className="border-b border-black ">

                                                    <td className="py-3 font-medium align-top 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[12px] xl:pr-[220px] md:pr-[40px]">
                                                        {row.requirement}
                                                    </td>

                                                    <td className="py-3 font-medium pl-6 align-top 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[12px]">
                                                        {row.internal}
                                                    </td>

                                                    <td className="py-3 font-medium pl-4 align-top 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[12px]">
                                                        {row.managed}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>



                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    Managed Services isn’t outsourcing.</p>
                                <p className=" 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">It’s access to the exact skills you need, exactly when you need them.
                                </p>

                            </div>

                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("businessImpactTitle")}
                                </h2>

                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("businessImpactPara")}
                                </p>
                                <ul className="list-disc pl-[36px] font-medium mt-4 space-y-2">
                                    {businessBiggestImpact.map((point, i) => (
                                        <li key={i} className="4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">{point}</li>
                                    ))}
                                </ul>
                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("businessImpactPara2")}
                                </p>


                            </div>

                            <div className="md:mt-[50px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                                    {t("salesforceProjectTitle")}
                                </h2>

                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("salesforceProjectPara1")}
                                </p>

                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("salesforceProjectPara2")}
                                </p>


                                <div className="relative w-full mt-[45px] ">
                                    <img
                                        src="/images/blog/agentforce-agentic-ai-capabilities-platform-visualization.webp"
                                        alt={t("webinarImgAlt")}
                                        className={`
                                        ${locale === "es"
                                                ? "w-full 4xl:h-[380px] 2xl:h-[358px] xl:h-[320px] md:h-[315px] object-cover "
                                                : locale === "fr"
                                                    ? "w-full 4xl:h-[380px] 2xl:h-[358px] xl:h-[320px] md:h-[330px] object-cover "
                                                    : "w-full 4xl:h-[340px] 2xl:h-[320px] xl:h-[285px] md:h-[290px] object-cover "
                                            }`}
                                    />


                                    <div className="absolute top-[14%] left-[5%] w-[40%] hidden md:block">

                                        <h2 className="text-black font-bold 4xl:text-[28px] 2xl:text-[26px] xl:text-[20px] md:text-[18px] leading-tight">
                                            {t("discoverAgenticTitle")}
                                        </h2>

                                        <p className="text-black mt-4 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] leading-relaxed">
                                            {t("discoverAgenticPara")}
                                        </p>

                                        <Link
                                            href={`https://www.rialtes.com/${locale}/insights/webinars/discover-the-agentic-capabilities-of-agentforce/`}
                                        >
                                            <button
                                                className="4xl:mt-6 2xl:mt-9 xl:mt-5 mt-3 bg-[#006FBE] text-white px-6 py-3 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[14px] font-semibold">
                                                {t("watchButton")}
                                            </button></Link>
                                    </div>
                                </div>


                                <div className="block md:hidden bg-slate-200 p-4">

                                    <h2 className="text-black font-bold text-[16px] leading-tight">
                                        {t("discoverAgenticTitle")}
                                    </h2>

                                    <p className="text-black mt-2 text-[16px] leading-relaxed">
                                        {t("discoverAgenticPara")}
                                    </p>

                                    <Link
                                        href={`https://www.rialtes.com/${locale}/insights/webinars/discover-the-agentic-capabilities-of-agentforce/`}
                                    >
                                        <button
                                            className="mt-4 bg-[#006FBE] text-white px-4 py-2 text-[14px] font-semibold">
                                            {t("watchButton")}
                                        </button></Link>
                                </div>

                                <p className="mt-[40px] xl:mt-[45px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]"
                                    dangerouslySetInnerHTML={{ __html: discoverAgenticPara2 }} />

                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("discoverAgenticPara3")}
                                </p>

                                <p className="mt-[22px] xl:mt-[30px] 4xl:text-[20px] 2xl:text-[17px] xl:text-[17px] md:text-[16px] text-[16px]">
                                    {t("discoverAgenticPara4")}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="xl:mt-[80px] mt-[40px] custom-container">
                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px] leading-tight">
                    {t("faqTitle")}
                </h2>
                <div className="mt-[29px] xl:mt-[30px]">
                    <FAQAccordion faqData={faqs} />
                </div>
            </section>

            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </section>
    )
}