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


export default function Page() {
  const currUrl = useUrl()
  const fullUrl = "https://www.rialtes.com/insights/case-studies/realForce-banking-module-ach";

  return (
    <div className="min-h-screen bg-white">

      <Seo
        title="Exelona Case Study: Front Load ACH and Journals"
        description="Learn how Rialtes helped front load ACH and journal entries using Exelona’s banking module to streamline finance ops and improve accuracy."
        canonical="https://www.rialtes.com/insights/case-studies/realForce-banking-module-ach"
      />

      <Script
        id="schema-realforce"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[350px] md:h-[500px]  4xl:h-[650px]   overflow-hidden">
        <div className="hidden md:block">
          <Image
            src="/images/case-studies/case study 2_n 1.webp "
            alt="Business professionals and architect reviewing blueprints and pointing at construction plans in bright modern office space"
            fill
            style={{ objectFit: "cover", objectPosition: "30% 90%" }}
            priority
          />
        </div>
        <div className="block md:hidden">
          <Image
            src="/images/case-studies/case-study-2_thumb_n.webp"
            alt="Business professionals and architect reviewing blueprints and pointing at construction plans in bright modern office space Mobile"
            fill
            style={{ objectFit: "cover", objectPosition: "30% 90%" }}
            priority
          />
        </div>
      </section>

      <section
        className="custom-container"
      >

        <div className="py-10 bg-white xl:max-w-[1084px] 4xl:w-[1084px] 2xl:w-[900px] xl:w-[800px] ">
          <div className="">
            <h1 className="text-[#000000] py-6 leading-tight text-[26px] 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px]">Automating ACH and Journal Entries with Our Exelona Banking Module</h1>
          </div>
          <div className="py-4"></div>
          <div className="">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-black   ">
              <div className=''>
                <span className='text-[#0092E0]'>Real Estate</span> <span className='text-[#ACACAC]'> | </span>22 December 2024
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
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Client Profile</h2>
              <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">A leading U.S.-based multifamily real estate investment firm focused on acquisitions, development, and operational excellence. With a portfolio of residential properties across the country, the firm’s mission is to build thriving communities for residents while driving strong returns for investors.</p>


              <div className="py-6"></div>
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Problem or Challenge </h2>
              <p className="text-black pb-6 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">The client was operating on a legacy banking application hosted in a non-standard, outdated environment (referred to as a "dark net" system), which presented several challenges:</p>

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium ">
                  <li className="pb-4"><h3 className=" h3-bold inline  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Manual Processes </h3>: Automated clearing house (ACH) payments and journal entries were created manually, increasing the risk of errors and slowing down transaction processing.</li>

                  <li className="pb-4"><h3 className=" h3-bold inline  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Inefficient Reconciliation </h3>: Bank reconciliation was time-consuming and lacked visibility and automation.</li>
                  <li className="pb-4"><h3 className=" h3-bold inline  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Lack of Usability </h3>: The existing system was not user-friendly, lacked modern UI/UX standards, and failed to meet reporting and security needs.</li>
                  <li><h3 className=" h3-bold inline  4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Scalability Issues </h3>: The legacy platform was not responsive or scalable enough to support future growth or integrations.</li>

                </ul>
              </div>


              <div className="py-6"></div>
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Solutions </h2>
              <p className="text-black pb-6 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Rialtes modernized the client’s ACH and journal entry operations by implementing a custom Exelona Banking Module built on Salesforce Einstein 1 Platform. Key components of the solution included:</p>

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium ">
                  <li className="pb-4"><h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">ACH Automation </h3>:  Developed ACH functionality to auto-generate pre-formatted ACH files compatible with Bank of America.</li>

                  <li className="pb-4"><h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Automated Journal Entries </h3>: ACH transactions now automatically generate journal entries in Excel format for upload into the Yardi accounting system. </li>

                  <li className="pb-4"><h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Scheduled File Transfers </h3>: Scheduled File Transfers: End-of-day ACH files are automatically uploaded to the bank, eliminating manual intervention. </li>
                  <li className="pb-4"><h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Unified Platform </h3>: Consolidated all financial operations within Salesforce, leveraging Einstein 1 for intelligent reporting, automation, and a seamless user experience.</li>
                  <li><h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Real-Time Accounting Integration </h3>: Synchronized ACH processes with real-time accounting systems to ensure financial accuracy and visibility</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Benefits</h2>

              <div className="pl-3">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium ">
                  <li className="pb-4">Improved UI enabled faster, more accurate data entry and streamlined user workflows.</li>
                  <li className="pb-4">Unified platform supports future integration of additional banking or financial tools.</li>
                  <li className="pb-4">Automation of ACH file creation and journal entries eliminated over 80% of manual tasks previously handled by a full-time resource.</li>
                  <li className="pb-4">Bank reconciliation time reduced from ~10 hours to under 1 hour per cycle, enabling quicker month-end closures.</li>
                  <li className="pb-4">Automation eliminated the need for a full-time resource previously dedicated to this process.</li>
                  <li className="pb-4">Finance and accounts payable teams can now process double the transaction volume in the same time.</li>
                  <li>Real-time dashboards and analytics empower better, faster financial decisions.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="py-6"></div> */}
        </div>
      </section>


      {/* case study carousel */}
      <section className="custom-container lg:pr-0 xl:my-[80px] md:my-[60px] my-[40px]">
        <RelatedCaseStudies url={currUrl} currTopic="Real Estate" />
      </section>
    </div>
  );
}