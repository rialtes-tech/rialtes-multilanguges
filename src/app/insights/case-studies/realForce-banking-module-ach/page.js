"use client";
// pages/case-study-detail.js
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';
import Seo from "@/app/components/Seo";
const schemaData = {

  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/case-studies/realForce-banking-module-ach/"
  },
  "headline": "Case Study: RealForce Banking Module for ACH Integration",
  "description": "Explore how Rialtes implemented the RealForce Banking Module to enable seamless ACH integration, reduce payment processing time, and enhance financial automation.",
  "image": "https://www.rialtes.com/images/case-studies/case%20study%202_n%201.webp",
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
  "datePublished": "2024-12-22"

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
 const fullUrl = "https://www.rialtes.com/insights/case-studies/realForce-banking-module-ach";

  return (
    <div className="min-h-screen bg-white">

      <Seo
        title="Exelona Case Study: Front Load ACH and Journals"
        description="Learn how Rialtes helped front load ACH and journal entries using Exelona’s banking module to streamline finance ops and improve accuracy."
        canonical="https://www.rialtes.com/insights/case-studies/realForce-banking-module-ach/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/case study 2_n 1.webp "
          alt="RealForce Banking Module - ACH"
          fill
          style={{ objectFit: "cover", objectPosition: "30% 90%" }}
          priority
        />
      </section>

      <section
        className="custom-container"
      >

        <div className="py-10 bg-white xl:max-w-[1084px] xl:w-[1084px]">
          <div className="">
            <h1 className="text-[#000000] py-6 leading-tight text-[24px] md:text-[48px] xl:text-[60px] ">Automating ACH and Journal Entries with Our Exelona Banking Module</h1>
          </div>
          <div className="py-4"></div>
          <div className="">
            <div className="flex flex-col md:flex-row justify-between text-black  ">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Real Estate</span> <span className='text-[#ACACAC]'> | </span>22 December 2024
              </div>
              <div className="flex flex-col">
                <span>8 min read</span>
              </div>
            </div>
            <div className="pt-4"></div>
           <div className="flex flex-row gap-6 ml-[-8px]">
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

          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Client Profile</h2>
              <p className="text-black">A leading U.S.-based multifamily real estate investment firm focused on acquisitions, development, and operational excellence. With a portfolio of residential properties across the country, the firm’s mission is to build thriving communities for residents while driving strong returns for investors.</p>


              <div className="py-6"></div>
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Problem or Challenge </h2>
              <p className="text-black pb-6">The client was operating on a legacy banking application hosted in a non-standard, outdated environment (referred to as a "dark net" system), which presented several challenges:</p>
            
  <div className="pl-2">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium ">
        <li className="pb-4"><h3 className=" h3-bold inline  xl:text-[20px] text-[17px] md:text-[19px]">Manual Processes </h3>: Automated clearing house (ACH) payments and journal entries were created manually, increasing the risk of errors and slowing down transaction processing.</li>

              <li className="pb-4"><h3 className=" h3-bold inline  xl:text-[20px] text-[17px] md:text-[19px]">Inefficient Reconciliation </h3>: Bank reconciliation was time-consuming and lacked visibility and automation.</li>
        <li className="pb-4"><h3 className=" h3-bold inline  xl:text-[20px] text-[17px] md:text-[19px]">Lack of Usability </h3>: The existing system was not user-friendly, lacked modern UI/UX standards, and failed to meet reporting and security needs.</li>
           <li><h3 className=" h3-bold inline  xl:text-[20px] text-[17px] md:text-[19px]">Scalability Issues </h3>: The legacy platform was not responsive or scalable enough to support future growth or integrations.</li>
              
              </ul>
            </div>


              <div className="py-6"></div>
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Solutions </h2>
              <p className="text-black pb-6">Rialtes modernized the client’s ACH and journal entry operations by implementing a custom Exelona Banking Module built on Salesforce Einstein 1 Platform. Key components of the solution included:</p>
            
           <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium ">
                <li className="pb-4"><h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">ACH Automation </h3>:  Developed ACH functionality to auto-generate pre-formatted ACH files compatible with Bank of America.</li>

           <li className="pb-4"><h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">Automated Journal Entries </h3>: ACH transactions now automatically generate journal entries in Excel format for upload into the Yardi accounting system. </li>

             <li className="pb-4"><h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">Scheduled File Transfers </h3>: Scheduled File Transfers: End-of-day ACH files are automatically uploaded to the bank, eliminating manual intervention. </li>
     <li className="pb-4"><h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">Unified Platform </h3>: Consolidated all financial operations within Salesforce, leveraging Einstein 1 for intelligent reporting, automation, and a seamless user experience.</li>
               <li><h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">Real-Time Accounting Integration </h3>: Synchronized ACH processes with real-time accounting systems to ensure financial accuracy and visibility</li>
              
              </ul>
           </div>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Benefits</h2>
           
              <div className="pl-3">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium ">
                <p className="text-black pb-4"> <li>Improved UI enabled faster, more accurate data entry and streamlined user workflows.</li></p>
                <p className="text-black pb-4"> <li>Unified platform supports future integration of additional banking or financial tools.</li></p>
                <p className="text-black pb-4"><li>Automation of ACH file creation and journal entries eliminated over 80% of manual tasks previously handled by a full-time resource.</li></p>
                <p className="text-black pb-4"> <li>Bank reconciliation time reduced from ~10 hours to under 1 hour per cycle, enabling quicker month-end closures.</li></p>
                <p className="text-black pb-4"><li>Automation eliminated the need for a full-time resource previously dedicated to this process.</li></p>
                <p className="text-black pb-4 "><li>Finance and accounts payable teams can now process double the transaction volume in the same time.</li></p>
                <p className="text-black "><li>Real-time dashboards and analytics empower better, faster financial decisions.</li></p>
              </ul>
            </div>
            </div>
          </div>
          {/* <div className="py-6"></div> */}
        </div>
      </section>

      {/* Latest Blogs */}
      <div
        className="py-10 lg:pr-0
        custom-container "
      >
        <RelatedTopicsCarousel slides={slides} />

      </div>
    </div>
  );
}