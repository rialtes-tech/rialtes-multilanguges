"use client";
import Image from "next/image";
import Seo from "@/app/components/Seo";
import Script from "next/script";
import useUrl from "@/app/components/useUrl";
import RelatedCaseStudies from '../../../components/RealtedCaseStudies';
const schemaData = {

    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.rialtes.com/insights/case-studies/optimizing-sales-processes-with-salesforce-sales-cloud-for-a-manufacturing-company/"
    },
    "headline": "Case Study: Optimizing Sales Processes with Salesforce Sales Cloud for a Manufacturing Company",
    "description": "Learn how a global manufacturing company streamlined lead management, improved sales productivity, and enhanced reporting using Salesforce Sales Cloud with Rialtes’ expertise.",
    "image": "https://www.rialtes.com/images/case-studies/sales%20cloud%20case%20study.webp",
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
    "articleSection": "Case Studies",
    "datePublished": "2025-03-26"

}

export default function Page() {
    const currUrl = useUrl()
    const fullUrl = "https://www.rialtes.com/insights/blogs/optimizing-sales-processes-with-salesforce-sales-cloud-for-a-manufacturing-company";

    return (
        <div className="min-h-screen bg-white">
            <Seo
                title="Salesforce Sales Cloud Case Study: Front Load in Manufacturing"
                description="Discover how front loading sales workflows using Salesforce Sales Cloud improved conversion speed and deal closures for a manufacturer."
                canonical="https://www.rialtes.com/insights/case-studies/optimizing-sales-processes-with-salesforce-sales-cloud-for-a-manufacturing-company"
            />


            <Script
                id="schema-optimizing"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="h-[350px] md:h-[500px]  4xl:h-[650px] relative overflow-hidden ">
                <div className="md:block hidden">
                    <Image
                        src="/images/case-studies/streamline-banner.webp"
                        alt="Female quality control technician in hairnet and safety glasses inspecting clear bottle on automated manufacturing line"
                        priority

                        fill
                        style={{ objectFit: "cover", objectPosition: "90% 20%" }}

                    />
                </div>

                <div className="md:hidden block">

                    <Image
                        src="/images/case-studies/streamline-mobile-banner.webp"
                        alt="Female quality control technician in hairnet and safety glasses inspecting clear bottle on automated manufacturing line Mobile"
                        priority
                        fill
                        style={{ objectFit: "cover", objectPosition: "90% 20%" }}


                    />
                </div>
            </section>

            <section
                className="custom-container"
            >

                <div className="py-10 bg-white xl:max-w-[1084px] 4xl:w-[1084px] 2xl:w-[900px] xl:w-[800px]">

                    <h1 className="text-[#000000]   leading-tight text-[26px] 4xl:text-[60px] 2xl:text-[48px]   xl:text-[42px] md:text-[28px]">Streamlining Sales with Salesforce Sales Cloud for Manufacturing</h1>
                    <div className="py-4"></div>

                    <div>
                        <div className="flex flex-col md:flex-row justify-between gap-4 items-center   text-black">
                            <div className=''>
                                <span className='text-[#0092E0]'>Manufacturing</span> <span className='text-[#ACACAC]'> | </span>26 March 2025
                            </div>
                            <div className="flex flex-row gap-6 ml-[-8px] ">
                                <div className="max-w-[40px]">
                                    <a
                                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
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

                                <div className="max-w-[40px]">
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >                      <Image
                                            src="/images/case-studies/twitter.svg"
                                            alt="Twitter"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            priority
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4"></div>

                    </div>
                    <div className="py-6"></div>
                    <div>
                        <div className="">


                            <h2 className="text-[#0092E0] pb-4 4xl:text-[30px]   2xl:text-[24px]  xl:text-[21px] text-[23px] leading-tight last:font-medium">Client Overview</h2>
                            <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">The company is a leading manufacturer specializing in customized water treatment equipment. Each product is uniquely designed based on specific customer requirements, meaning no two products are alike. Their sales team comprises engineers who handle sales and technical specifications to meet customer needs. The complexity of the sales process requires a robust solution to maximize sales output, enhance customer engagement, and integrate seamlessly with existing ERP systems.</p>
                            <div className="py-6"></div>
                            <h2 className=" text-[#0092E0] pb-4 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight font-medium">Problem or Challenge </h2>
                            <h3 className=" h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Complex Sales Process</h3>
                            <p className="text-black pb-6 mt-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Since every product is custom designed, the sales team needed a structured approach to track project details and customer requirements and ensure smooth communication between the sales, design, and production teams. The absence of a structured workflow led to inefficiencies and delays in finalizing sales contracts.</p>

                            <h3 className=" h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Lack of a Customer Engagement System</h3>

                            <p className="text-black pb-6 mt-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">With multiple ongoing projects and unique specifications for each client, the company faced challenges in maintaining a complete historical record of requirements, preferences, and past communications. This led to misalignment between sales and engineering teams, delayed responses to customer inquiries, and difficulty in personalizing sales approaches, ultimately affecting customer satisfaction.</p>

                            <h3 className=" h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Overcoming Budget and Invoice Management Challenges</h3>

                            <p className="text-black pb-6 mt-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Managing budgets, order history, and invoices across multiple projects and subsidiaries is demanding. Without an integrated financial tracking system, sales teams were having difficulty monitoring payment schedules, outstanding invoices, and budget adherence. This occasionally resulted in revenue leakage and inefficiencies in financial management.</p>

                            <h3 className=" h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Lack of ERP-Salesforce Integration Leading to Manual ERP Updating</h3>

                            <p className="text-black mt-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">The company used SAP for backend project management but required the sales team to access project progress in real time without exposing sensitive ERP data.  </p>
                            <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">The absence of Salesforce integration caused delays, miscommunication, and manual updating of ERP, heightening the risk of errors. A seamless flow from design approval to production was needed.</p>
                            <h3 className=" h3-bold mt-5 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Isolated Data Across Subsidiaries </h3>
                            <p className="text-black mt-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">The organization operates across multiple countries, each with different workflows and reporting structures. A lack of a unified system means subsidiaries worked in silos which made it difficult to standardize processes, share data, and collaborate efficiently on global projects.</p>
                            <h3 className=" h3-bold mt-5 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Limited Language Support and Globalization</h3>
                            <p className="text-black mt-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">With operations spanning multiple regions, their manufacturing and sales teams combat language barriers, regional compliance variations, and inconsistent customer interactions. The absence of a system that supports multiple languages hinders seamless customer service and global sales alignment.</p>


                            <div className="py-6"></div>
                            <h2 className="text-[#0092E0] pb-4 4xl:text-[30px]  2xl:text-[24px]  xl:text-[21px] text-[23px] leading-tight font-medium">Impact and Results </h2>
                            <h3 className=" h3-bold pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Maximized Sales </h3>
                            <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 font-medium 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">

                                <li className="pb-4 text-black">Implemented Salesforce Sales Cloud to automate lead qualification and opportunity management.</li>
                                <li className="pb-4 text-black">Implementing automated lead tracking and AI-driven recommendations boosted sales team productivity, reducing the average sales cycle from 46 days to 28 days and enabling faster deal closures.</li>
                                <li className="pb-4 text-black">Our team facilitated the use of analytics to identify high-potential leads and reduce sales cycle times.</li>
                                <li className="pb-4 text-black">Enabled their sales teams to configure complex quotes with Salesforce CPQ (Configure, Price, Quote), ensuring accurate pricing and quick approvals</li>
                            </ul>
                            <h3 className=" h3-bold pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Improving Customer Engagement</h3>
                            <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 font-medium 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">
                                <li className="pb-4 text-black">We deployed Salesforce Customer 360 using Salesforce Sales Cloud, allowing the sales individuals to track every customer interaction, past project, and service history.</li>
                                <li className="pb-4 text-black">The well-defined workflow increased their sales cycle efficiency by 30, while a centralized CRM enhanced customer satisfaction through improved tracking and personalized interactions.</li>
                                <li className="pb-4 text-black">Integrated Salesforce with email and communication platforms to simplify follow-ups and maintain a structured communication flow.</li>
                                <li className="pb-4 text-black">Leveraged Agentforce for personalized recommendations and proactive engagement with customers.</li>
                            </ul>
                            <h3 className=" h3-bold pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Salesforce-ERP Integration for Seamless Workflow</h3>
                            <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 font-medium 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">
                                <li className="pb-4 text-black">Integrated Sales Cloud with ERP to enable seamless data flow from project design to manufacturing without exposing ERP data such as leads, PII, and quotes.</li>
                                <li className="pb-4 text-black">Seamless ERP integration cut order processing time, allowing production to begin within 48 hours of design approval and ensuring smooth project execution.</li>
                                <li className="pb-4 text-black">Created a bridge between Salesforce and the ERP ecosystem, ensuring that approved designs move automatically into production planning.</li>
                                <li className="pb-4 text-black">Facilitated bidirectional data sync to ensure sales and manufacturing teams work with real-time data.</li>

                            </ul>
                            <h3 className=" h3-bold pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Managing Budgets, Order History, and Invoices</h3>
                            <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 font-medium 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">
                                <li className="pb-4 text-black">Implemented Sales Cloud with financial management enhancements,  enabling real-time tracking of budgets and financial transactions.</li>
                                <li className="pb-4 text-black">Real-time financial tracking minimized invoicing errors and revenue leakage by 1.5%, improving budgeting accuracy and cash flow management.</li>
                                <li className="pb-4 text-black">Automated invoicing and order tracking, reducing manual errors and improving financial transparency.</li>
                                <li className="pb-4 text-black">Allowed sales team to access insightful reports and dashboards to monitor revenue, pending payments, and forecasting.</li>
                            </ul>
                            <h3 className=" h3-bold pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Unified  Platform for All Subsidiaries</h3>
                            <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 font-medium 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">
                                <li className="pb-4 text-black">Standardized the sales process across multiple global subsidiaries using a single Salesforce instance.</li>
                                <li className="pb-4 text-black">A unified Salesforce platform supports scalability for global growth while enabling subsidiaries to maintain country-specific sales strategies.</li>
                                <li className="pb-4 text-black">Centralized their data repository for seamless sharing of financial data, sales, revenue, and expenses across all subsidiaries.</li>

                            </ul>
                            <h3 className=" h3-bold pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Globalization</h3>
                            <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2 font-medium 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">
                                <li className="pb-4 text-black">Implemented multi-language and multi-currency support to accommodate regional sales teams and customers.</li>
                                <li className=" text-black">Configured country-specific tax rules, pricing models, and regulatory compliance to align with business requirements.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>


            {/* case study carousel */}
            <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
                <RelatedCaseStudies url={currUrl} currTopic="Manufacturing" />
            </section>
        </div>
    );
}