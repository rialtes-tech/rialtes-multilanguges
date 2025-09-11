"use client";
import Image from "next/image";
import BlogsCarousel from "../../../components/latestBlogCarousel";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import enContent from '../../../../../../messages/en/blogs.json';
import esContent from '../../../../../../messages/es/blogs.json';
import frContent from '../../../../../../messages/fr/blogs.json';
import { changeLocalization } from "@/app/[locale]/components/changeLocalization";
const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "AI Patient Engagement: How Smart Agents Simplify Care",
    "description": "AI for patient engagement simplifies remote care by delivering real-time insights, smart escalations, and personalized healthcare experiences.",
    "image": "https://www.rialtes.com/images/blog/ai-in-patient-desktop-banner.webp",
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
        "@id": "https://www.rialtes.com/insights/blogs/ai-patient-engagement-medtech-remote-care/"
    },
    "datePublished": "2025-09-09",
    "mainEntity": {
        "@type": "FAQPage",
        "name": "AI for Patient Engagement with Smart Agents FAQs",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is AI for patient engagement?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI for patient engagement uses intelligent agents to provide personalized care, automate monitoring, and support real-time communication between patients and providers."
                }
            },
            {
                "@type": "Question",
                "name": "How do smart agents simplify patient care?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Smart agents simplify care by automating routine tasks, providing real-time insights, escalating urgent issues, and ensuring continuous patient support."
                }
            },
            {
                "@type": "Question",
                "name": "Why is AI important for MedTech and remote healthcare?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI enhances MedTech by improving remote monitoring, reducing provider workload, enabling predictive insights, and personalizing patient care journeys."
                }
            },
            {
                "@type": "Question",
                "name": "Can AI improve patient-provider communication?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, AI-powered agents enable two-way communication with reminders, symptom tracking, and instant escalations, leading to stronger patient engagement."
                }
            },
            {
                "@type": "Question",
                "name": "What are the benefits of AI for patient engagement?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The benefits include simplified care delivery, proactive interventions, reduced errors, enhanced personalization, and improved patient satisfaction."
                }
            }
        ]
    }
}


export default function Page() {
    const t = useTranslations('aiPatient')
    const locale = useLocale();
    const blogsContent = changeLocalization(locale, { en: enContent, es: esContent, fr: frContent });
    const { rolesData, commonData, benefitsData, faqs } = blogsContent.aiPatient;
    const fullUrl = "https://www.rialtes.com/insights/blogs/ai-patient-engagement-medtech-remote-care";

    return (
        <div className="min-h-screen">
            <Seo
                title="AI Patient Engagement: How Smart Agents Simplify Care | Rialtes"
                description=" Discover how AI for patient engagement helps MedTech streamline monitoring, simplify workflows, and enhance patient-provider interactions with ease."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/ai-patient-engagement-medtech-remote-care/"
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
                        src="/images/blog/ai-in-patient-desktop-banner.webp"
                        alt="ai that listens"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/ai-in-patient-mobile-banner.webp"
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
                                <span className="text-[#ACACAC]"> | </span>09 September 2025
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
                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('blogMainData')}</p>
                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('blogMainData2')}</p>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 xl:pr-0">{t('aiRoleTitle')}</h2>
                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('aiRoleDesc')}</p>

                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[26px] gap-y-[84px] sm:w-[70%] md:w-[90%] lg:w-[900px] xl:w-[1090px] 3xl:w-[1150px] mt-[83px]">
                                {rolesData.map((data, ind) => {
                                    return (
                                        <div
                                            key={ind}
                                            className="px-[36px] max-[360px]:pt-[80px] pt-[46px] sm:pt-[60px] lg:pt-[70px] pb-[40px] relative border border-[#707070] flex flex-col items-center">

                                            <p className="text-[16px] 2xl:text-[18px] xl:text-[18px] 4xl:text-[20px] font-bold bg-[#006FBE] text-white py-3 px-6 absolute -top-8 left-1/2 transform -translate-x-1/2 w-[76%] text-center">
                                                <span className={`${ind == 1 && "w-[70%] block md:py-0 mx-auto"} ${ind == 2 && "py-4 block"}`}>  {data.title}</span>
                                            </p>

                                            <p className="mt-5 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">
                                                {data.desc}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            <p className="mt-10 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('aiRoleDesc2')}</p>

                            <h3 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 xl:pr-0">{t('turningTitle')}</h3>

                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('turningDesc')}</p>
                            <p className="mt-6 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('turningDesc2')}</p>
                            <p className="mt-6 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]"><strong>{t('turningDescStrong')}</strong>{t('turningDesc3')} </p>
                            <p className="mt-6 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('turningDesc4')}</p>

                            {
                                commonData.map((data, ind) => {
                                    return (
                                        <div key={ind}>
                                            <h3 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 xl:pr-0">{data.title}</h3>
                                            <p className="mt-5 4xl:pr-20 pr-4 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc1}</p>
                                            <p className="mt-5 4xl:pr-20 pr-4 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc2}</p>
                                            <UnorderedList arrName={data.list} ulClassName="list-disc 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] pl-[36px] mt-3 font-medium" />
                                            {data.desc3 && <p className="mt-5 4xl:pr-20 pr-4 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc3}</p>}
                                        </div>
                                    )
                                })
                            }

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 xl:pr-0">{t('benefitsTitle')}</h2>
                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] lg:w-[90%]">{t('benefitsDesc')}</p>

                            <div className="grid md:grid-cols-2 grid-cols-1 gap-[26px] mt-[47px] sm:w-[70%] md:w-[90%] lg:w-[900px] xl:w-[1090px] 3xl:w-[1150px]">
                                {
                                    benefitsData.map((data, ind) => {
                                        return (
                                            <div key={ind} className="border border-[#707070] p-[28px] md:p-[34px]">
                                                <h3 className="mt-5 4xl:pr-20 pr-8 2xl:text-[22px] 4xl:text-[24px] xl:text-[20px] text-[18px] text-[#0092E0] font-bold pb-4 border-b border-[#707070]">{data.title}</h3>
                                                <p className="mt-5 4xl:pr-20 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <h2 className="font-semibold mt-16 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 xl:pr-0">{t('turnRemoteTitle')}</h2>
                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('turnDesc')}</p>
                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('turnDesc2')}<Link href={"https://www.rialtes.com/solutions/artificial-intelligence/salesforce-agentforce-consulting/"}><span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline">{t('turnDescLink')}  </span> </Link>{t('turnDesc3')}   <Link href={"https://www.rialtes.com/industry/life-sciences/home-health-ai-tech-solutions/"}><span className="text-[#0092E0] transition duration-300 ease-out hover:text-gray-400 underline"> {t('turnDescLink2')}</span></Link>{t('turnDesc4')} </p>

                            <h2 className="font-semibold mt-12 mb-5 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[25px] text-[23px] pr-10 xl:pr-0">{t('faqTitle')}</h2>
                            <FAQAccordion faqData={faqs} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="custom-container lg:pr-0 pb-10 mt-3">
                <BlogsCarousel />
            </div>
        </div>
    )
}