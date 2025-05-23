"use client";
// pages/case-study-detail.js
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';
import Seo from "@/app/components/Seo";

const schemaData ={
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/case-studies/warranty-claim-submission-mobile-i-pad-using-experience-cloud"
  },
  "headline": "Salesforce Experience Cloud Case Study: Mobile Warranty Portal",
  "description": "This case study details how Rialtes implemented a mobile-first Salesforce Experience Cloud solution for a leading roofing manufacturer, streamlining warranty submissions and enhancing customer experience through Lightning Web Components.",
  "image": "https://www.rialtes.com/images/case-studies/.svg",
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
  "proficiencyLevel": "Expert",
  "articleSection": "Case Studies",
  "datePublished": "2025-05-22",
  "dateModified": "2025-05-22"
}
const slides = [
    {
        id: 3,
        image: "/images/case-studies/case study 1_thumb_n.webp",
        category: "Healthcare",
        industry: "Real Estate",
        date: "17 Nov 2024",
        title: "Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP",
        description: "A global medical technology company that develops and manufactures innovative products",
        url: 'insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap'
    },
    {
        id: 4,
        image: "/images/case-studies/case-study-4_thumb.webp",
        category: "Real Estate",
        industry: "Healthcare",
        date: "14 Oct 2024",
        title: "Omnichannel case management with Salesforce Service Cloud",
        description: "A leading provider of high-performance analog semiconductors for wireless and wired connectivity.",
        url: 'insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud'
    },
    {
        id: 6,
        image: "/images/case-studies/case-study-6_thumb.webp",
        category: "Healthcare",
        industry: "Manufacturing",
        date: "4 Sept 2024",
        title: "Yardi Managed Services",
        description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
        url: 'insights/case-studies/yardi-managed-services'
    },
    {
        id: 7,
        image: "/images/case-studies/case study 3_thumb_n.webp",
        category: "SAP",
        industry: "Retail & e-Commerce",
        date: "25 Oct 2024",
        title: "Streamlined DevOps using Copado and Salesforce",
        description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
        url: "insights/case-studies/streamlined-devops-using-copado-and-salesforce"
    },
    {
        id: 8,
        image: "/images/case-studies/case-study-2_thumb_n.webp",
        category: "Salesforce",
        industry: "Hi-Tech",
        date: "25 Oct 2024",
        title: "RealForce Banking Module - ACH",
        description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
        url: 'insights/case-studies/realForce-banking-module-ach'
    },
    // Add more blog objects as needed
];


export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Seo
                title=" Salesforce Experience Cloud Case Study: Mobile Warranty Portal | Rialtes"
                description=" Discover how a leading roofing brand used Salesforce Experience Cloud to deliver a mobile-friendly warranty claim experience customers love."
                canonical="https://www.rialtes.com/insights/case-studies/warranty-claim-submission-mobile-i-pad-using-experience-cloud/"
            />
                <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

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
                        <h1 className="text-[#000000] py-6 max-w-4xl">Warranty Claim Submission Mobile/I-PAD Using Experience Cloud</h1>
                    </div>
                    <div className="py-4"></div>
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-between text-black  max-w-4xl xl:w-1/2">
                            <div className='pb-6'>
                                <span className='text-[#0092E0]'>Manufacturing</span> <span className='text-[#ACACAC]'> | </span>22 may 2025
                            </div>
                            <div className="flex flex-col">
                                <span>8 min read</span>
                            </div>
                        </div>
                        <div className="pt-4"></div>
                        <div className="flex flex-row gap-6 ">
                            <div className="max-w-[40px]">
                                <a href="https://www.linkedin.com/company/rialtes-technologies-llc/">
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
                            </div>  */}
                            <div className="max-w-[40px]">
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
                            </div>
                        </div>
                    </div>

                    <div className="py-6"></div>
                    <div className="container mx-auto">
                        <div className="max-w-4xl">


                             <h2  className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Client Profile</h2>
                            <p className="text-black">A leading manufacturer of high-quality roofing solutions designed to protect what matters most. Specializing in durable and innovative products for residential and commercial spaces, they offer a range of asphalt shingles, roofing underlayment, waterproofing solutions, and composite materials for superior protection and aesthetics. </p>
                            <div className="py-6"></div>
                          <h2  className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Challenges</h2>
                            {/* <h6 className="h3-bold text-[#0092E0] text-sm">Complex Sales Process</h6> */}
                            <p className="text-black pb-12">The Customers of our client were having a hard time submitting warranty claims from their mobile devices, forcing them to rely on desktops, which was an inconvenient and frustrating process. The Customers had to seek additional support to complete their claims. The lack of mobile accessibility led to delays, inefficiencies, and increased support requests, ultimately reducing customer satisfaction and straining operations.</p>

                      <h2  className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Solutions</h2>

                            <p className="text-black pb-6 ">Rialtes stepped in to improve the warranty claims process by developing a mobile-first portal with Salesforce Experience Cloud.  Our team worked and designed a user-friendly interface specifically for Android, iOS, iPads, and tablets, making it easy for customers to submit claims anytime, from anywhere. </p>

                             <p className="text-black pb-6 ">We built the portal using Lightning Web Components (LWC) to ensure smooth navigation, fast performance, and a simple, touch-friendly design. This improved experience allows customers to complete warranty claims quickly and effortlessly. </p>

                              <p className="text-black pb-12 ">Our solution enhances customer satisfaction, streamlines operations, and ensures a modern, efficient claims experience across all mobile devices. </p>

                            <h2  className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Benefits</h2>

                            <p className="text-black pb-6 ">Now that the UI is mobile-friendly with improved user experience, it enables their customers to have seamless warranty claim submissions from Android, iOS, iPads, and tablets. With an intuitive design, they require less time in support. Faster processing times and greater accessibility allowed them to submit claims anytime, enhancing satisfaction and improving operational efficiency.</p>

                            {/* <h6 className="h3-bold text-[#0092E0] text-sm">Lack of ERP-Salesforce Integration Leading to Manual ERP Updating</h6>

                            <p className="text-black mt-2">The company used SAP for backend project management but required the sales team to access project progress in real time without exposing sensitive ERP data.  </p>
                            <p className="text-black">The absence of Salesforce integration caused delays, miscommunication, and manual updating of ERP, heightening the risk of errors. A seamless flow from design approval to production was needed.</p>
                            <h6 className="h3-bold text-[#0092E0] text-sm mt-5">Isolated Data Across Subsidiaries </h6>
                            <p className="text-black mt-2">The organization operates across multiple countries, each with different workflows and reporting structures. A lack of a unified system means subsidiaries worked in silos which made it difficult to standardize processes, share data, and collaborate efficiently on global projects.</p>
                            <h6 className="h3-bold text-[#0092E0]  text-sm mt-5">Limited Language Support and Globalization</h6>
                            <p className="text-black mt-2">With operations spanning multiple regions, their manufacturing and sales teams combat language barriers, regional compliance variations, and inconsistent customer interactions. The absence of a system that supports multiple languages hinders seamless customer service and global sales alignment.</p> */}


                            {/* <div className="py-6"></div>
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
                            <h6 className="text-sm h3-bold text-[#0092E0] pb-6">Salesforce-ERP Integration for Seamless Workflow</h6> */}
                            {/* <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2">
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
                                <li className="pb-4 text-black">Allowed sales team to access insightful reports and dashboards to monitor revenue, pending payments, and forecasting.</li> */}
                            {/* </ul>
                            <h6 className="text-sm h3-bold text-[#0092E0] pb-6">Unified  Platform for All Subsidiaries</h6>
                            <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2">
                                <li className="pb-4 text-black">Standardized the sales process across multiple global subsidiaries using a single Salesforce instance.</li>
                                <li className="pb-4 text-black">A unified Salesforce platform supports scalability for global growth while enabling subsidiaries to maintain country-specific sales strategies.</li>
                                <li className="pb-4 text-black">Centralized their data repository for seamless sharing of financial data, sales, revenue, and expenses across all subsidiaries.</li>

                            </ul>
                            <h6 className="text-sm h3-bold text-[#0092E0] pb-6">Globalization</h6> */}
                            {/* <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-2">
                                <li className="pb-4 text-black">Implemented multi-language and multi-currency support to accommodate regional sales teams and customers.</li>
                                <li className="pb-4 text-black">Configured country-specific tax rules, pricing models, and regulatory compliance to align with business requirements.</li>
                            </ul> */}
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