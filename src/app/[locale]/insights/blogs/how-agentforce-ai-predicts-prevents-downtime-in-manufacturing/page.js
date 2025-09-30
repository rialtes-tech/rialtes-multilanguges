"use client";
import Image from "next/image";
import Seo from "@/app/[locale]/components/Seo";
import Script from "next/script";
import UnorderedList from "@/app/[locale]/components/unorderedList";
import FAQAccordion from "@/app/[locale]/components/faqAccordion";
import FilteredBlogCarousel from '@/app/[locale]/components/FilteredLatestBlogCarousel'
import useUrl from "@/app/[locale]/components/useUrl";


const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How Agentforce AI Enables Zero Downtime Manufacturing",
    "description": "Agentforce AI helps manufacturers prevent unplanned downtime with predictive intelligence, ensuring zero disruption and 24/7 operational efficiency.",
    "image": "https://www.rialtes.com/images/blog/industry4-desktop-banner.webp",
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
        "@id": "https://www.rialtes.com/insights/blogs/how-agentforce-ai-predicts-prevents-downtime-in-manufacturing/"
    },
    "datePublished": "2025-09-08",
    "mainEntity": {
        "@type": "FAQPage",
        "name": "How Agentforce AI Enables Zero Downtime Manufacturing FAQs",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What makes Agentforce different from traditional predictive maintenance solutions?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Agentforce combines IoT insights with service histories, warranty claims, and Salesforce Field Service workflows to predict failures and act automatically."
                }
            },
            {
                "@type": "Question",
                "name": "Can Agentforce work with existing IoT and ERP systems?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Agentforce integrates with existing IoT platforms, MES, and ERP systems without requiring a rip-and-replace approach."
                }
            },
            {
                "@type": "Question",
                "name": "How does Agentforce reduce unplanned downtime?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It detects early failure signals, forecasts parts demand, and dispatches the right technician before issues escalate, reducing downtime by up to 30–40%."
                }
            },
            {
                "@type": "Question",
                "name": "Is Agentforce scalable for mid-sized manufacturers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, mid-sized manufacturers can start small and expand to multi-site predictive intelligence as their operations grow."
                }
            },
            {
                "@type": "Question",
                "name": "How does Agentforce improve customer experience?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It keeps customers informed with proactive updates, ensures parts and technicians are ready in advance, and minimizes service interruptions."
                }
            },
            {
                "@type": "Question",
                "name": "Can Agentforce support new business models like Equipment-as-a-Service?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, predictive capabilities allow uptime guarantees, subscription-based maintenance, or outcome-driven service contracts, turning service into a revenue stream."
                }
            }
        ]
    }
}

export default function Page() {
    const currUrl = useUrl()
    const fullUrl = "https://www.rialtes.com/insights/blogs/how-agentforce-ai-predicts-prevents-downtime-in-manufacturing";

    return (
        <div className="min-h-screen">
            <Seo
                title="How Agentforce AI Enables Zero Downtime Manufacturing | Rialtes"
                description="Agentforce AI helps manufacturers prevent unplanned downtime with predictive intelligence, ensuring zero disruption and 24/7 operational efficiency."
                keywords="Partners, website, welcome"
                canonical={
                    "https://www.rialtes.com/insights/blogs/how-agentforce-ai-predicts-prevents-downtime-in-manufacturing/"
                }
            />

            <Script
                id="schema-copilots"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative   4xl:h-[650px] 2xl:h-[500px]  xl:h-[450px] lg:h-[650px] md:h-[400px]  sm:h-[500px] h-[350px]  overflow-hidden">
                <div className="xl:block hidden">
                    <Image
                        src="/images/blog/industry4-desktop-banner.webp"
                        alt="ai that listens"
                        fill
                        priority
                    />
                </div>
                <div className="xl:hidden block">
                    <Image
                        src="/images/blog/industry4-mobile-banner.webp"
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
                                <span className="text-[#0092E0]">{t('bloTopic')}</span>{" "}
                                <span className="text-[#ACACAC]"> | </span>08 September 2025
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
                            <h1 className="text-[#000000]  pb-6 leading-tight text-[26px] xl:text-[42px] 2xl:text-[48px] 4xl:text-[60px] md:text-[28px]">
                               {t('blogTitle')} 
                            </h1>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-12">
                        <div className="col-span-9">
                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('blogMainData')}</p>
                            <p className="mt-5 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('blogMainData2')}</p>
                            <p className="mt-5 4xl:pr-5 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] font-bold">{t('blogMainData3')}</p>


                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[21px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('agentforceTitle')}</h2>
                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('agentforceDesc')}</p>
                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('agentforceDesc2')}</p>
                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('agentforceDesc3')}</p>

                            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:w-[80%] gap-y-[60px] sm:gap-x-[80px] lg:gap-x-[20px] lg:w-[980px] xl:w-[1090px] 3xl:w-[1150px] 4xl:w-[1380px] lg:mt-[60px] mt-[42px]">
                                {
                                    reactiveData.map((data, ind) => {
                                        return (
                                            <div key={ind}>
                                                <img src={data.image} className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]" />
                                                <p className="mt-10 lg:mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] font-bold">{data.title}</p>
                                                <p className="mt-3 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[21px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('agentforceEnablesTitle')}</h2>
                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('agentforceEnablesDesc')}</p>
                            {
                                agentforceEnablingData.map((data, ind) => {
                                    return (
                                        <div key={ind}>
                                            <h3 className="mt-12 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] font-bold">{data.title}</h3>
                                            <UnorderedList arrName={data.desc} ulClassName="mt-3" liClassName="4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] mt-1 font-medium" />
                                        </div>
                                    )
                                })
                            }
                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[21px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('impactTitle')}</h2>
                            <p className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('impactDesc')}</p>

                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-y-8 md:gap-x-6 lg:gap-0 sm:w-[50%] md:w-[80%] lg:mt-[50px] mt-[40px] lg:w-[980px] xl:w-[1090px] 3xl:w-[1150px]">
                                {
                                    impactData.map((data, ind) => {
                                        return (
                                            <div key={ind} className={` ${ind == 0 && "lg:border-r max-md:border-b max-md:pb-4 lg:pr-0 xl:pr-[39px] border-[#707070]"} ${ind == 3 && "md:pl-10 md:border-l md:pr-2 max-sm:pt-6 border-[#707070]"} ${(ind == 2 || ind == 1) && "lg:px-[39px] max-md:py-6 max-md:border-b border-[#707070]"} ${ind == 1 && "lg:border-r md:border-l md:pl-10  border-[#707070]"}`}>
                                                <span className="mt-5 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px] font-bold">{data.title} {" "}</span>
                                                <span className="mt-5 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <p className="mt-20 xl:w-[90%] 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('impactDesc2')}</p>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-[26px] gap-y-[26px] mt-[48px] lg:mt-[60px] xl:w-[1080px] sm:w-[85%] lg:w-full">
                                {
                                    impactData2.map((data, ind) => {
                                        return (
                                            <div key={ind} className="border border-[#707070] p-[24px] md:p-[34px]">
                                                <p className="mt-5  2xl:text-[22px] 4xl:text-[24px] xl:text-[20px] text-[18px] text-[#0092E0] font-bold pb-4 border-b border-[#707070]">{data.title}</p>
                                                <p className="mt-5   2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{data.desc}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <p className="mt-10 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]">{t('impactDesc3')}</p>

                            <h2 className="font-semibold mt-10 text-[#0092E0] 2xl:text-[24px] 4xl:text-[30px] xl:text-[21px] text-[23px] pr-10 4xl:pr-0 xl:pr-0">{t('readyTitle')}</h2>
                            {readyData.map((data, ind) => (
                                <p
                                    key={ind}
                                    className="mt-5 4xl:pr-20 pr-8 2xl:text-[18px] 4xl:text-[20px] xl:text-[17px] text-[16px]"
                                    dangerouslySetInnerHTML={{ __html: data }}
                                />
                            ))}


                            {/* faq section */}
                            <div className="xl:mt-[80px] mt-[40px]">
                                <h2 className="font-semibold text-[#0092E0] 4xl:text-[32px] 2xl:text-[26px] xl:text-[26px] md:text-[22px] text-[22px]">FAQs: Agentforce in Predicting and Preventing Downtime in Industry 4.0 Manufacturing</h2>
                                <div className="mt-[29px] xl:mt-[34px]">
                                    <FAQAccordion faqData={faqs} />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            {/* blog carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
                <FilteredBlogCarousel url={currUrl} />
            </section>
        </div>
    )
}