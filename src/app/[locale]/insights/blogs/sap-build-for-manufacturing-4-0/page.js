"use client";
// pages/blog-detail.js
import Image from "next/image";
import Link from 'next/link';
import BlogsCarousel from '../../../components/latestBlogCarousel';
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "SAP Build for Smart Manufacturing Industry 4.0",
    "description": "SAP Build helps manufacturers strengthen connected machines, integrated data, and agile processes—shortening innovation cycles and boosting resilience.",
    "image": "https://www.rialtes.com/images/blog/sap-industry-desktop-banner.webp",
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
        "@id": "https://www.rialtes.com/insights/blogs/sap-build-for-manufacturing-4-0/ "
    },
    "datePublished": "2025-09-16",
    "mainEntity": {
        "@type": "FAQPage",
        "name": "SAP Build for Smart Manufacturing FAQs",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What makes SAP Build different from other low-code platforms for manufacturing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SAP Build is natively integrated with SAP ERP, MES, and Manufacturing Cloud. This means apps, workflows, and dashboards connect directly to core manufacturing data without heavy customization."
                }
            },
            {
                "@type": "Question",
                "name": "Can non-technical staff in manufacturing plants really use SAP Build?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. SAP Build is designed for citizen developers. With drag-and-drop interfaces and prebuilt templates, process engineers, supervisors, and managers can design apps or workflows without writing code."
                }
            },
            {
                "@type": "Question",
                "name": "How does SAP Build improve factory-floor operations?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SAP Build enables faster decision-making and fewer delays. IoT alerts can trigger automated maintenance requests, defect photos can be routed instantly to quality teams, and operators can access digital SOPs through Work Zone portals."
                }
            },
            {
                "@type": "Question",
                "name": "How does SAP Build support sustainability goals?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Manufacturers can create apps that capture energy, waste, and emissions data directly from production systems. Automated workflows then generate reports or trigger alerts when usage exceeds thresholds."
                }
            },
            {
                "@type": "Question",
                "name": "Can SAP Build integrate with non-SAP systems?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. While its native integration with SAP solutions is unmatched, SAP Build also connects to third-party systems, IoT platforms, and cloud apps via APIs and connectors."
                }
            },
            {
                "@type": "Question",
                "name": "What kind of ROI can manufacturers expect from SAP Build?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Companies typically see faster app deployment (up to 70% quicker), reduced IT costs (20–40%), and lower downtime (20–30%). These benefits compound into significant savings and higher productivity within the first year."
                }
            }
        ]
    }
}

export default function Page() {
    const t = useTranslations('sapBuild')
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { blogMainData, whySapData, howSapData, practicalData, businessImpactData, readyData, faqData } = blogsContent.sapBuild
    const fullUrl = "https://www.rialtes.com/insights/blogs/sap-build-for-manufacturing-4-0";

    return (
        <div className="min-h-screen">
            <Seo
                title="SAP Build for Manufacturing Sector: Cut Downtime 30% | Rialtes"
                description="Discover how SAP Build helps manufacturers accelerate innovation, reduce downtime, and empower teams with low-code apps and automation."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/sap-build-for-manufacturing-4-0/"
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
                        src="/images/blog/sap-industry-desktop-banner.webp"
                        alt="banner image"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/sap-industry-mobile-banner.webp"
                        alt="banner image"
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
                        <div className="flex flex-col md:flex-row justify-between text-black items-center xl:max-w-[1084px] xl:w-[1084px]">
                            <div className="sm:mb-0 mb-6">
                                <span className="text-[#0092E0]">{t('blogTopic')}</span>{" "}
                                <span className="text-[#ACACAC]"> | </span>16 September 2025
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
                                            rel="noopener noreferrer">
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
                            <div>
                                {
                                    blogMainData.map((data, ind) => {
                                        return (
                                            <p className="mt-5 4xl:pr-20 pr-8 4xl:text-[20px] xl:text-[17px] text-[16px]" key={ind}>{data}</p>
                                        )
                                    })
                                }
                            </div>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 4xl:text-[30px] xl:text-[26px] text-[22px] pr-10 xl:pr-0">{t('whySapTitle')}</h2>
                            <p className="mt-3 4xl:pr-20 pr-8 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('whySapDesc')}</p>

                            {
                                whySapData.map((data, ind) => {
                                    return (
                                        <div className="mt-5 text-[16px] xl:text-[18px] 4xl:text-[20px]" key={ind}><h4 className="inline font-bold">{data.title} - </h4><span className="font-medium">{data.desc}</span></div>
                                    )
                                })
                            }

                            <h2 className="font-semibold mt-10 text-[#0092E0] 4xl:text-[30px] xl:text-[26px] text-[22px] pr-10 xl:pr-0">{t('howSapTitle')}</h2>
                            <p className="mt-3 4xl:pr-20 pr-8 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('howSapDesc')}</p>
                            <p className="mt-5 4xl:pr-20 pr-8 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('howSapDesc2')}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:w-[80%] md:w-[90%] lg:w-[950px] xl:w-[1100px] 4xl:w-[1200px] mt-[95px] gap-[26px] gap-y-[80px] md:gap-y-[90px]">
                                {
                                    howSapData.map((data, ind) => {
                                        return (
                                            <div key={ind} className="border border-[#707070] p-[26px] relative md:px-10 lg:px-[26px] pb-[62px]">
                                                <p className="absolute top-[-24px] md:top-[-40px] 4xl:text-[20px] xl:text-[17px] text-[16px] text-[#0092E0] font-bold w-[80%] sm:w-[70%] lg:w-[80%] xl:w-[70%] 4xl:w-[80%] pb-4 px-3 bg-white border-b border-[#0092E0]">{data.title}</p>
                                                <p className="4xl:mt-20 lg:mt-16 md:mt-16 sm:mt-12 mt-14 max-[352px]:mt-20 4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc}</p>
                                                <ul className="mt-[32px]">
                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <li
                                                                    key={id}
                                                                    className="mt-5 4xl:text-[20px] xl:text-[17px] text-[16px] font-medium">
                                                                    {elem}
                                                                    {id < data.list.length - 1 && (
                                                                        <p className="w-16 h-[3px] mt-4 bg-[#0092E0]"></p>
                                                                    )}
                                                                </li>

                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <h2 className="font-semibold mt-20 text-[#0092E0] 4xl:text-[30px] xl:text-[26px] text-[22px] pr-10 xl:pr-0">{t('practicalTitle')}</h2>
                            <p className="mt-5 4xl:pr-20 pr-8 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('practicalDesc')}</p>

                            {
                                practicalData.map((data, ind) => {
                                    return (
                                        <div className="md:flex mt-24 md:mt-10 py-[34px] xl:py-[46px] px-[26px] md:pr-[54px] 4xl:pr-[30px] border border-[#707070] relative md:ml-[90px] sm:w-[80%] md:w-auto lg:w-[80%] xl:w-auto" key={ind}>
                                            <div className="md:absolute max-md:mt-[-80px] sm:mt-[-70px] md:mt-0 md:top-[50%] md:translate-y-[-50%] 4xl:w-[300px] xl:w-[280px] md:w-[240px] w-fit md:left-[-80px] bg-[#006FBE] text-white font-semibold 4xl:text-[24px] xl:text-[20px] text-[17px] px-[40px] py-[22px]">{data.title}</div>
                                            <div className="4xl:text-[20px] xl:text-[17px] text-[16px] font-medium my-auto max-md:mt-8 md:ml-[180px] xl:ml-[210px] 4xl:ml-[240px]">{data.desc}</div>
                                        </div>

                                    )
                                })
                            }
                            <h2 className="font-semibold mt-20 4xl:text-[24px] xl:text-[22px] text-[20px] pr-10 xl:pr-0">{t('impactTitle')}</h2>
                            <p className="mt-5 4xl:pr-20 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('impactDesc')}</p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-[26px] mt-[47px] sm:w-[70%] md:w-[90%] lg:w-[900px] xl:w-[1090px] 3xl:w-[1140px]">
                                {
                                    businessImpactData.map((data, ind) => {
                                        return (
                                            <div key={ind} className="border border-[#707070] p-[28px] md:px-[34px] md:pt-[26px] md:pb-[40px]">
                                                <h3 className="mt-2 2xl:text-[22px] 4xl:text-[24px] xl:text-[20px] text-[18px] text-[#0092E0] font-bold pb-4 border-b border-[#707070]">{data.title}</h3>
                                                <p className="mt-5 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <h2 className="font-semibold mt-20 text-[#0092E0] 4xl:text-[30px] xl:text-[26px] text-[22px] pr-10 xl:pr-0">{t('readyTitle')}</h2>

                            {
                                readyData.map((data, ind) => {
                                    return (
                                        <p
                                            key={ind}
                                            className="mt-5 4xl:pr-20 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]"
                                            dangerouslySetInnerHTML={{ __html: data }}
                                        />
                                    )
                                })
                            }


                            <h2 className="font-semibold mt-10 text-[#0092E0] 4xl:text-[30px] xl:text-[26px] text-[22px] pb-3">{t('faqTitle')}</h2>
                            <FAQAccordion faqData={faqData} />

                        </div>
                    </div>
                </div>
            </section>

            <section className="custom-container lg:pr-0 my-10">
                <BlogsCarousel />
            </section>
        </div>
    )
}