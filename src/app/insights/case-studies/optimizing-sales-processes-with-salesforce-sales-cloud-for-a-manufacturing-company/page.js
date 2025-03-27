"use client";
// pages/case-study-detail.js
import Head from "next/head";
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';

const slides = [
    /* {
      id: 1,
      image: "/images/case-studies/case-study-1_thumb.webp",
      category: "Manufacturing",
      industry: "Retail & e-Commerce",
      date: "8 Jan 2025",
      title: "Streamlined DevOps using Copado and Salesforce",
      description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
    }, */
    {
        id: 2,
        image: "/images/case-studies/case-study-2_thumb.webp",
        category: "Real Estate",
        industry: "Hi-tech",
        date: "22 Dec 2024",
        title: "RealForce Banking Module - ACH",
        description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
    },
    {
        id: 3,
        image: "/images/case-studies/case-study-3_thumb.webp",
        category: "Healthcare",
        industry: "Real Estate",
        date: "17 Nov 2024",
        title: "Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP",
        description: "A global medical technology company that develops and manufactures innovative products",
    },
    {
        id: 4,
        image: "/images/case-studies/case-study-4_thumb.webp",
        category: "Real Estate",
        industry: "Healthcare",
        date: "14 Oct 2024",
        title: "Omnichannel case management with Salesforce Service Cloud",
        description: "A leading provider of high-performance analog semiconductors for wireless and wired connectivity.",
    },
    {
        id: 5,
        image: "/images/case-studies/case-study-5_thumb.webp",
        category: "Public Sector",
        industry: "Finance",
        date: "27 Sept 2024",
        title: "A public housing in US",
        description: "A Public housing authority responsible for managing affordable housing programs across multiple counties in their zone.",
    },
    {
        id: 6,
        image: "/images/case-studies/case-study-6_thumb.webp",
        category: "Healthcare",
        industry: "Manufacturing",
        date: "4 Sept 2024",
        title: "Yardi Managed Services",
        description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
    },
    {
        id: 7,
        image: "/images/case-studies/case-study-7_thumb.webp",
        category: "SAP",
        industry: "Retail & e-Commerce",
        date: "25 Oct 2024",
        title: "Streamlined DevOps using Copado and Salesforce",
        description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
    },
    {
        id: 8,
        image: "/images/case-studies/case-study-8_thumb.webp",
        category: "Salesforce",
        industry: "Hi-tech",
        date: "25 Oct 2024",
        title: "RealForce Banking Module - ACH",
        description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
    },
    // Add more blog objects as needed
];


export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Streamlined DevOps using Copado and Salesforce | Company Name</title>
                <meta name="description" content="About our company" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
                <Image
                    src="/images/case-studies/sales cloud case study.webp "
                    alt="Streamlined DevOps using Copado and Salesforce"
                    fill
                    style={{ objectFit: "cover", objectPosition: "90% 20%" }}
                    priority
                />
            </section>

            <section
                className="
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >

                <div className="py-10 bg-white">
                    <div className="container mx-auto">
                        <h1 className="text-[#000000] py-6 max-w-4xl">Streamlining Sales with Salesforce Sales Cloud for Manufacturing</h1>
                    </div>
                    <div className="py-4"></div>
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-between text-black  max-w-4xl xl:w-1/2">
                            <div className='pb-6'>
                                <span className='text-[#0092E0]'>Manufacturing</span> <span className='text-[#ACACAC]'> | </span>26 Mar 2025
                            </div>
                            <div className="flex flex-col">
                                <span>8 min read</span>
                            </div>
                        </div>
                        <div className="pt-4"></div>
                        <div className="flex flex-row gap-6 ">
                            <div className="max-w-[40px]">
                                <a href="https://www.linkedin.com/shareArticle?mini=true&url=/case-study-3&title=Streamlined DevOps using Copado and Salesforce&summary=Summary%20of%20the%20case%20study&source=LinkedIn">
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
                                <a href="https://www.facebook.com/sharer/sharer.php?u=/case-study-3">
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
                            </div>
                            <div className="max-w-[40px]">
                                <a href="https://twitter.com/intent/tweet?url=/case-study-3&text=Streamlined DevOps using Copado and Salesforce">
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
                            </div>
                        </div>
                    </div>

                    <div className="py-6"></div>
                    <div className="container mx-auto">
                        <div className="max-w-4xl">


                            <h3 className="h3-bold text-[#0092E0] pb-6">Client Overview</h3>
                            <p className="text-black">The company is a leading manufacturer specializing in customized water treatment equipment. Each product is uniquely designed based on specific customer requirements, meaning no two products are alike. Their sales team comprises engineers who handle sales and technical specifications to meet customer needs. The complexity of the sales process requires a robust solution to maximize sales output, enhance customer engagement, and integrate seamlessly with existing ERP systems.</p>
                            <div className="py-6"></div>
                            <h3 className="h3-bold text-[#0092E0] pb-6">Problem or Challenge </h3>
                            <h6 className="h3-bold text-[#0092E0] text-sm">Complex Sales Process</h6>
                            <p className="text-black pb-6 mt-2">Since every product is custom designed, the sales team needed a structured approach to track project details and customer requirements and ensure smooth communication between the sales, design, and production teams. The absence of a structured workflow led to inefficiencies and delays in finalizing sales contracts.</p>

                            <h6 className="h3-bold text-[#0092E0] text-sm ">Lack of a Customer Engagement System</h6>

                            <p className="text-black pb-6 mt-2">With multiple ongoing projects and unique specifications for each client, the company faced challenges in maintaining a complete historical record of requirements, preferences, and past communications. This led to misalignment between sales and engineering teams, delayed responses to customer inquiries, and difficulty in personalizing sales approaches, ultimately affecting customer satisfaction.</p>

                            <h6 className="h3-bold text-[#0092E0]  text-sm">Overcoming Budget and Invoice Management Challenges</h6>

                            <p className="text-black pb-6 mt-2">Managing budgets, order history, and invoices across multiple projects and subsidiaries is demanding. Without an integrated financial tracking system, sales teams were having difficulty monitoring payment schedules, outstanding invoices, and budget adherence. This occasionally resulted in revenue leakage and inefficiencies in financial management.</p>

                            <h6 className="h3-bold text-[#0092E0] text-sm">Lack of ERP-Salesforce Integration Leading to Manual ERP Updating</h6>

                            <p className="text-black mt-2">The company used SAP for backend project management but required the sales team to access project progress in real time without exposing sensitive ERP data.  </p>
                            <p className="text-black">The absence of Salesforce integration caused delays, miscommunication, and manual updating of ERP, heightening the risk of errors. A seamless flow from design approval to production was needed.</p>
                            <h6 className="h3-bold text-[#0092E0] text-sm mt-5">Isolated Data Across Subsidiaries </h6>
                            <p className="text-black mt-2">The organization operates across multiple countries, each with different workflows and reporting structures. A lack of a unified system means subsidiaries worked in silos which made it difficult to standardize processes, share data, and collaborate efficiently on global projects.</p>
                            <h6 className="h3-bold text-[#0092E0]  text-sm mt-5">Limited Language Support and Globalization</h6>
                            <p className="text-black mt-2">With operations spanning multiple regions, their manufacturing and sales teams combat language barriers, regional compliance variations, and inconsistent customer interactions. The absence of a system that supports multiple languages hinders seamless customer service and global sales alignment.</p>


                            <div className="py-6"></div>
                            <h3 className="h3-bold text-[#0092E0] pb-6">Impact and Results </h3>
                            <h6 className="text-sm h3-bold text-[#0092E0] pb-6">Maximized Sales </h6>
                            <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2">

                                <li className="pb-4 text-black">Implemented Salesforce Sales Cloud to automate lead qualification and opportunity management.</li>
                                <li className="pb-4 text-black">Implementing automated lead tracking and AI-driven recommendations boosted sales team productivity, reducing the average sales cycle from 46 days to 28 days and enabling faster deal closures.</li>
                                <li className="pb-4 text-black">Our team facilitated the use of analytics to identify high-potential leads and reduce sales cycle times.</li>
                                <li className="pb-4 text-black">Enabled their sales teams to configure complex quotes with Salesforce CPQ (Configure, Price, Quote), ensuring accurate pricing and quick approvals</li>
                            </ul>
                            <h6 className="text-sm h3-bold text-[#0092E0] pb-6">Improving Customer Engagement</h6>
                            <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2">
                                <li className="pb-4 text-black">We deployed Salesforce Customer 360 using Salesforce Sales Cloud, allowing the sales individuals to track every customer interaction, past project, and service history.</li>
                                <li className="pb-4 text-black">The well-defined workflow increased their sales cycle efficiency by 30, while a centralized CRM enhanced customer satisfaction through improved tracking and personalized interactions.</li>
                                <li className="pb-4 text-black">Integrated Salesforce with email and communication platforms to simplify follow-ups and maintain a structured communication flow.</li>
                                <li className="pb-4 text-black">Leveraged Agentforce for personalized recommendations and proactive engagement with customers.</li>
                            </ul>
                            <h6 className="text-sm h3-bold text-[#0092E0] pb-6">Salesforce-ERP Integration for Seamless Workflow</h6>
                            <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2">
                                <li className="pb-4 text-black">Integrated Sales Cloud with ERP to enable seamless data flow from project design to manufacturing without exposing ERP data such as leads, PII, and quotes.</li>
                                <li className="pb-4 text-black">Seamless ERP integration cut order processing time, allowing production to begin within 48 hours of design approval and ensuring smooth project execution.</li>
                                <li className="pb-4 text-black">Created a bridge between Salesforce and the ERP ecosystem, ensuring that approved designs move automatically into production planning.</li>
                                <li className="pb-4 text-black">Facilitated bidirectional data sync to ensure sales and manufacturing teams work with real-time data.</li>

                            </ul>
                            <h6 className="text-sm h3-bold text-[#0092E0] pb-6">Managing Budgets, Order History, and Invoices</h6>
                            <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2">
                                <li className="pb-4 text-black">Implemented Sales Cloud with financial management enhancements,  enabling real-time tracking of budgets and financial transactions.</li>
                                <li className="pb-4 text-black">Real-time financial tracking minimized invoicing errors and revenue leakage by 1.5%, improving budgeting accuracy and cash flow management.</li>
                                <li className="pb-4 text-black">Automated invoicing and order tracking, reducing manual errors and improving financial transparency.</li>
                                <li className="pb-4 text-black">Allowed sales team to access insightful reports and dashboards to monitor revenue, pending payments, and forecasting.</li>
                            </ul>
                            <h6 className="text-sm h3-bold text-[#0092E0] pb-6">Unified  Platform for All Subsidiaries</h6>
                            <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2">
                                <li className="pb-4 text-black">Standardized the sales process across multiple global subsidiaries using a single Salesforce instance.</li>
                                <li className="pb-4 text-black">A unified Salesforce platform supports scalability for global growth while enabling subsidiaries to maintain country-specific sales strategies.</li>
                                <li className="pb-4 text-black">Centralized their data repository for seamless sharing of financial data, sales, revenue, and expenses across all subsidiaries.</li>

                            </ul>
                            <h6 className="text-sm h3-bold text-[#0092E0] pb-6">Globalization</h6>
                            <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2">
                                <li className="pb-4 text-black">Implemented multi-language and multi-currency support to accommodate regional sales teams and customers.</li>
                                <li className="pb-4 text-black">Configured country-specific tax rules, pricing models, and regulatory compliance to align with business requirements.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* Latest Blogs */}
            <div
                className="py-20
        container
        ml-[15px] w-[calc(100%-15px)] mr-0
        xl:ml-[280px] xl:w-[calc(100%-280px)]
        md:ml-[100px] md:w-[calc(100%-100px)]
        sm:mx-5 sm:w-[calc(100%-40px)]
        xs:mx-4 xs:w-[calc(100%-32px)]"
            >
                <RelatedTopicsCarousel slides={slides} />

            </div>
        </div>
    );
}