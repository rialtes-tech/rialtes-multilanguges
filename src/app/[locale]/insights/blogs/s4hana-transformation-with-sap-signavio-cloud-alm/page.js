"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import BlogsCarousel from "@/app/[locale]/components/latestBlogCarousel";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "SAP Signavio and Cloud ALM in S/4HANA Transformation",
    "description": "Pairing SAP Signavio with SAP Cloud ALM ensures control across every phase of the transformation. The closed-loop lifecycle ensures ongoing business value.",
    "image": "https://www.rialtes.com/images/blog/sap-signavio-sap-cloud-desktop.webp",
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
        "@id": "https://www.rialtes.com/insights/blogs/s4hana-transformation-with-sap-signavio-cloud-alm"
    },
    "datePublished": "2025-03-25",
    "mainEntity": {
        "@type": "FAQPage",
        "name": "SAP Signavio and Cloud ALM in S/4HANA Transformation FAQs",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why do I need both SAP Signavio and SAP Cloud ALM?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Signavio ensures clarity and standardization at the process design level, while Cloud ALM enforces governance and traceability during execution. Together, they connect strategy to delivery—something neither tool achieves alone."
                }
            },
            {
                "@type": "Question",
                "name": "How does this pairing strengthen governance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Signavio defines standardized processes and aligns stakeholders around them. Cloud ALM ensures those processes are executed as designed by governing requirements, changes, and testing. Governance moves from theory to practice."
                }
            },
            {
                "@type": "Question",
                "name": "What does traceability mean in an S/4HANA program, and how do these tools enable it?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Traceability is the ability to connect every business requirement and process decision to a corresponding system configuration and test case. Signavio documents the blueprint, while Cloud ALM links it to execution—creating a golden thread across the program."
                }
            },
            {
                "@type": "Question",
                "name": "Can these tools help us avoid scope creep and budget overruns?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. By aligning business and IT around “to-be” processes (Signavio) and managing every change through controlled workflows (Cloud ALM), the pairing reduces undocumented deviations, rework, and missed deadlines."
                }
            },
            {
                "@type": "Question",
                "name": "How do Signavio and Cloud ALM support KPI tracking?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Signavio defines baseline and target KPIs through process mining and modeling. Cloud ALM then validates those KPIs during testing and monitors them post go-live through live dashboards—closing the loop between design and business outcomes."
                }
            },
            {
                "@type": "Question",
                "name": "What happens if we implement S/4HANA without Signavio and Cloud ALM?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You risk migrating inefficiencies, losing control over scope, inflating costs due to rework, and lacking measurable proof of ROI. In short, you may go live, but the transformation won’t deliver its full value."
                }
            },
            {
                "@type": "Question",
                "name": "Where does Rialtes add value in this journey?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rialtes uses its Voyager+ methodology to embed Signavio and Cloud ALM into every stage of SAP Activate. This ensures process clarity, execution governance, and KPI measurement are not just set up, but sustained."
                }
            }
        ]
    }
}

export default function Page() {
    const t = useTranslations('s4HanaSapALM')
    const locale = useLocale();
    const content = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { blogs, mainData, whatDoesData, goverenanceData, traceabilityData, traceabilityData2, lifecycleData, faqData } = content.s4HanaSapALM;
    const fullUrl = "https://www.rialtes.com/insights/blogs/s4hana-transformation-with-sap-signavio-cloud-alm";

    return (
        <div className="min-h-screen">
            <Seo
                title="How SAP Signavio and Cloud ALM Redefine S/4HANA Transformation"
                description="Pairing SAP Signavio with SAP Cloud ALM creates a foundation of governance, traceability, and KPI-driven execution for successful S/4HANA transformation."
                canonical={"https://www.rialtes.com/insights/blogs/s4hana-transformation-with-sap-signavio-cloud-alm/"} />

            <Script
                id="schema-copilots"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={
                    {
                        __html: JSON.stringify(schemaData)
                    }
                }
            />

            <section className="relative 4xl:h-[638px] xl:h-[450px] 2xl:h-[500px] overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/sap-signavio-sap-cloud-desktop.webp"
                        alt="ai that listens"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/sap-signavio-sap-cloud-mobile.webp"
                        alt="ai that listens"
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
                                <span className="text-[#ACACAC]"> | </span>25 March 2025
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-6">
                                    <div className="max-w-[40px]">
                                        <a href={`https: //www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
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
                                        <a href={`https: //twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
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
                            <h1 className="text-[#000000]  pb-6 leading-tight text-[34px] xl:text-[42px] 2xl:text-[48px] 4xl:text-[60px] md:text-[28px]">
                                {t('blogTitle')}
                            </h1>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12">
                        <div className="col-span-9">
                            {
                                mainData.map((data, ind) => {
                                    return (
                                        <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]" key={ind}>{data}</p>
                                    )
                                })
                            }

                            <div>
                                <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('whatDoesTitle')}</h2>
                                <ul className="list-disc marker:text-black marker:text-xl text-black 4xl:pr-0 xl:pr-0 mt-2 space-y-3 font-medium pl-[34px]">
                                    {whatDoesData.map((data, ind) => (
                                        <li key={ind}>
                                            <h3 className="inline text-[16px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px]">
                                                {data.title
                                                }
                                            </h3><br />
                                            <p className="mt-2 4xl:text-[20px] xl:text-[17px] text-[16px]"
                                                dangerouslySetInnerHTML={{
                                                    __html: data.desc
                                                }}
                                            />
                                        </li>
                                    ))
                                    }
                                </ul>
                                <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('whatDoesDesc')}</p>
                            </div>

                            <div>
                                <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('governanceTitle')}</h2>
                                <p className="mt-3 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('governanceDesc')}</p>
                                <ul className="list-disc marker:text-black marker:text-xl text-black 4xl:pr-0 xl:pr-0 mt-5 space-y-3 text-[16px] xl:text-[18px] 4xl:text-[20px] font-medium pl-[34px]">
                                    {
                                        goverenanceData.map((data, ind) => {
                                            return (
                                                <li key={ind}><h3 className="inline text-[16px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px]">{data.title}</h3>
                                                    <UnorderedList arrName={data.list} ulClassName="list-[circle] pl-[34px] mt-3 space-y-2" liClassName="4xl:text-[20px] xl:text-[17px] text-[16px]" />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <p className="mt-5 4xl:pr-20  2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] font-semibold">{t('governanceDesc2')}</p>
                            </div>

                            <div>
                                <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[32px] xl:text-[26px] text-[24px] pr-10 4xl:pr-0 xl:pr-0">{t('traceabilityTitle')}</h2>
                                <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('traceabilityDesc')}</p>

                                <ul className="list-disc marker:text-black marker:text-xl text-black 4xl:pr-0 xl:pr-0 mt-3 space-y-3 text-[16px] xl:text-[17px] 4xl:text-[20px] font-medium pl-[34px]">
                                    {
                                        traceabilityData.map((data, ind) => {
                                            return (
                                                <li key={ind}><h3 className="inline text-[16px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px]">{data.title}</h3>
                                                    {" "} {data.desc}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                                <p className="mt-5 4xl:pr-20 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('traceabilityDesc2')}</p>

                                <UnorderedList arrName={traceabilityData2} ulClassName="list-disc marker:text-black marker:text-xl text-black 4xl:pr-0 xl:pr-0 mt-2 space-y-3 text-[16px] xl:text-[17px] 4xl:text-[20px] font-medium pl-[34px]" liClassName="" />
                                <p className="mt-5 4xl:pr-20 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('traceabilityDesc3')}</p>
                            </div>
                            <div>
                                <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('kpiTitle')}</h2>
                                <p className="mt-5 4xl:pr-20 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('kpiDesc')}</p>
                                <p className="mt-5 4xl:pr-20 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('kpiDesc2')}</p>
                            </div>
                            <div>
                                <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('lifecycleTitle')}</h2>
                                <p className="mt-5 4xl:pr-20 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('lifecycleDesc')}</p>
                                <div className="text-[16px] xl:text-[18px] 4xl:text-[20px] font-medium grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px] mt-[49px]">
                                    {
                                        lifecycleData.map((data, ind) => {
                                            return (
                                                <div key={ind} className="border border-[#707070] 3xl:p-[48px] 3xl:pl-[28 px] 3xl:pr-[26px] p-[30px] sm:w-[75%] md:w-full">
                                                    <h3 className="inline text-[18px] 2xl:text-[22px] xl:text-[20px] 4xl:text-[24px] text-[#006FBE] font-bold">{data.title}</h3>

                                                    {
                                                        data.list.map((elem, id) => {
                                                            return (
                                                                <div key={id}>
                                                                    <p className="4xl:text-[20px] xl:text-[17px] text-[16px] mt-[29px]">{elem}</p>
                                                                    {
                                                                        id == 0 && <div className="bg-[#006FBE] h-[2px] w-[40px] mt-6 mb-4"></div>
                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div>
                                <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('whyMatterTitle')}</h2>
                                <p className="mt-5 4xl:pr-20 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('whyMatterDesc')}</p>
                                <p className="mt-5 4xl:pr-20 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('whyMatterDesc2')}</p>
                            </div>
                            <div>
                                <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('governedTitle')}</h2>
                                <p className="mt-5 4xl:pr-20 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]"><Link href="https://www.rialtes.com/insights/blogs/why-sap-signavio-is-critical-for-a-successful-s4hana-implementation/"> <span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">{t('governedLink')} </span> </Link> {t('governedDesc')}</p>
                                <p className="mt-5 4xl:pr-20 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('governedAt')} <strong>{t('rialtes')}</strong> ,{t('governedDesc2')} <Link href="https://www.rialtes.com/solutions/enterprise-platforms/sap-consulting"> <span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">{t('sap')} </span> </Link>, {t('governedDesc3')}</p>
                            </div>
                            <div>
                                <section className="max-md:px-0">
                                    <h2 className="font-semibold mt-14 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] 4xl:pr-0 xl:pr-0">{t('faqTitle')}</h2>
                                    <FAQAccordion faqData={faqData} />
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            { /* Latest Blogs */}
            <div className="custom-container lg:pr-0 pb-10 mt-3">
                <BlogsCarousel slides={blogs} />
            </div>
        </div>
    )
}