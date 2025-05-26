"use client";
import Seo from "@/app/components/Seo";
import Image from "next/image";
export default function Page() {
    const fullUrl = "https://www.rialtes.com/insights/news/rialtes-joins-elite-group-as-an-official-salesforce-reseller-partner";
    const titleFromUrl = fullUrl
        .split("/")
        .pop()
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize each word

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Rialtes Becomes Official Salesforce Reseller Partner"
                canonical="https://www.rialtes.com/insights/news/rialtes-joins-elite-group-as-an-official-salesforce-reseller-partner/"
                description="Rialtes is now an official Salesforce Reseller Partner, offering complete Salesforce licensing, implementation, and managed services under one roof"
            />
            <section>

                <section className="relative overflow-hidden custom-container lg:!pr-0">
                    <div className="xl:block hidden">

                        <Image
                            src="/images/news/sales-news1.webp"
                            alt="How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration"
                            priority
                            className="h-[650px] w-full"
                            width={0}
                            height={0}
                        />


                    </div>
                    <div className="xl:hidden block">
                        <Image
                            src="/images/news/ba-mobile.webp"
                            alt="How to Integrate SAP SuccessFactors with Microsoft Office 365 for Enhanced Collaboration"
                            className="!w-full"
                            width={0}
                            height={0}
                            priority
                        />
                    </div>


                </section>
                <div className="pt-10 pb-24 bg-white  custom-container">
                    <div className="container mx-auto border-b-[2px] border-gray-400 pb-6">
                        <div className="flex flex-col md:flex-row justify-between text-black items-center  max-w-4xl xl:w-[1084px]">
                            <div className='sm:mb-0 mb-6'>
                                12 May 2025
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-6">
                                    <div className="max-w-[40px]">
                                        <a
                                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(titleFromUrl)}&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                src="/images/case-studies/linkedin.svg"
                                                alt="LinkedIn"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                priority
                                            />
                                        </a>
                                    </div>
                                    {/* <div className="max-w-[40px]">
                                        <a href="https://www.facebook.com/sharer/sharer.php?u=/how-salesforce-agentforce-actually-works">
                                            <Image
                                                src="/images/case-studies/facebook.svg"
                                                alt="Facebook"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                priority
                                            />
                                        </a>
                                    </div> */}
                                    {/* <div className="max-w-[40px]">
                                        <a href="https://x.com/Rialtestech">
                                            <Image
                                                src="/images/case-studies/twitter.svg"
                                                alt="Twitter"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                priority
                                            />
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-3"></div>


                    <div className="">

                        <p className="text-black  xl:text-[22px] text-[18px]">
                            Rialtes proudly announces that we have officially been named a <strong> Salesforce Reseller Partner,</strong> marking a significant milestone in our strategic journey to deliver enterprise innovation through trusted, cloud-first solutions.</p>


                        <p className="text-black  xl:text-[22px] text-[18px] mt-8">Already recognized as a top-rated Salesforce Crest Partner and a provider of Managed Services and Consulting, this new designation expands our capabilities to deliver end-to-end Salesforce value—from license advisory and procurement to implementation, customization, and ongoing managed support, all under one roof.</p>

                        <p className="text-black  xl:text-[22px] text-[18px] mt-8">“This is a pivotal step in our journey,” said <strong> Prasad Venkatesan,</strong> VP of Global Alliances and Partnerships at Rialtes. “Becoming a Salesforce Reseller Partner enables us to simplify technology procurement for our clients while ensuring they receive industry-best advisory and implementation services. We’re excited to deepen our alignment with Salesforce and deliver even greater value.”</p>

                        <p className="text-black  xl:text-[22px] text-[18px] mt-8">Our new status as a Reseller Partner reflects our certified talent, global delivery excellence, and strong collaboration with Salesforce. We're grateful to our incredible team and our partners at Salesforce, and our clients for making this possible. This partnership paves the way for agility, innovation, and simplified cloud adoption for enterprises worldwide.</p>



                        <p className="text-black  xl:text-[22px] text-[18px] mt-8">For more information on Rialtes' AI and data services, visit <a className="text-blue-600" href="https://www.rialtes.com/">www.rialtes.com </a> or contact <span className="text-blue-600">pr@rialtes.com </span> </p>
                    </div>

                </div>
            </section>
        </div>
    );
}