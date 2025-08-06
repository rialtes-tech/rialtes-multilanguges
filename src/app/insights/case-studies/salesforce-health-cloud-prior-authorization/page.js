"use client";
// pages/case-study-detail.js
import Head from "next/head";
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';
import Seo from "@/app/components/Seo";
import Script from "next/script";
const schemaData={
    "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/case-studies/salesforce-health-cloud-prior-authorization/"
  },
  "headline": "Case Study: Enhancing Prior Authorization Workflow Using Salesforce Health Cloud",
  "description": "Explore how Rialtes helped streamline and automate the prior authorization workflow using Salesforce Health Cloud, leading to faster approvals, reduced errors, and improved patient outcomes.",
  "image": "https://www.rialtes.com/images/case-studies/case-study-8.webp",
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
  "datePublished": "2024-08-02"

}
const slides = [
  {
    id: 3,
    image: "/images/case-studies/case study 1_thumb_n.webp",
    category: "Healthcare",
    industry: "Real Estate",
    date: "17 Nov 2024",
    title: "Automating Order Processing in Healthcare using MuleSoft",
    description: "A global medical technology company that develops and manufactures innovative products",
    url: 'insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap'
  },
  {
    id: 4,
    image: "/images/case-studies/case-study-4_thumb.webp",
    category: "Manufacturing",
    industry: "Healthcare",
    date: "14 Oct 2024",
    title: "Transforming Omnichannel Case Management Using Salesforce Service Cloud",
    description: "A leading provider of high-performance analog semiconductors for wireless and wired connectivity.",
    url: 'insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud'
  },
  {
    id: 6,
    image: "/images/case-studies/case-study-6_thumb.webp",
    category: "Real Estate",
    industry: "Manufacturing",
    date: "04 Sept 2024",
    title: "Reduced Downtime for a Multifamily Real Estate Firm Using Yardi Managed Services",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
    url: 'insights/case-studies/yardi-managed-services'
  },
  {
    id: 7,
    image: "/images/case-studies/case study 3_thumb_n.webp",
    category: "Manufacturing",
    industry: "Retail & e-Commerce",
    date: "08 Jan 2025",
    title: "DevOps Transformation using Copado and Salesforce",
    description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
    url: "insights/case-studies/streamlined-devops-using-copado-and-salesforce"
  },
  {
    id: 8,
    image: "/images/case-studies/case-study-2_thumb_n.webp",
    category: "Real Estate",
    industry: "Hi-Tech",
    date: "22 Dec 2024",
    title: "Automating ACH and Journal Entries with Our Exelona Banking Module",
    description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
    url: 'insights/case-studies/realForce-banking-module-ach'
  },
  // Add more blog objects as needed
];

export default function Page() {
const fullUrl = "https://www.rialtes.com/insights/case-studies/salesforce-health-cloud-prior-authorization";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Salesforce Health Cloud Case Study: Prior Authorization Streamlined"
        description="See how Salesforce Health Cloud sped up prior authorizations, streamlining workflows in complex healthcare environments for faster patient care.
"
        canonical="https://www.rialtes.com/insights/case-studies/salesforce-health-cloud-prior-authorization/"
      />
    
         <Script
        id="schema-salesforce-health"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[350px] md:h-[500px]  4xl:h-[650px]  overflow-hidden">
       <div className="hidden md:block">
         <Image
          src="/images/case-studies/case-study-8.webp "
          alt="Salesforce Health Cloud, Prior Authorization"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
          priority
        />
       </div>
          <div className="block md:hidden">
         <Image
          src="/images/case-studies/case-study-8_thumb.webp "
          alt="Salesforce Health Cloud, Prior Authorization"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
          priority
        />
       </div>
      </section>

      <section
        className="custom-container"
      >

        <div className="py-10 bg-white xl:max-w-[1084px] 4xl:w-[1084px] 2xl:w-[900px] xl:w-[800px]">
          <div className="">
            <h1 className="text-[#000000] py-6  leading-tight text-[26px] 4xl:text-[60px] 2xl:text-[48px] xl:text-[42px] md:text-[28px]">Digitizing Prior Authorization for Better Patient Outcomes  </h1>
          </div>
       
          <div className="">
            <div className="flex flex-col md:flex-row justify-between text-black">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Healthcare </span> <span className='text-[#ACACAC]'> | </span>02 August 2024
              </div>
           
              <div className="flex flex-col ">
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


              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Client Profile</h2>
              <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">A global medical technology leader that designs and manufactures life-saving cardiovascular and endovascular products such as pacemakers, defibrillators, and remote patient monitoring systems. The company's mission is to enhance and extend the lives of patients with heart and blood vessel conditions through advanced innovation and patient-centric care.</p>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px]  2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Problem or Challenge </h2>

              <p className="text-black pb-6 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">The prior authorization process, a critical step in patient treatment, was a major bottleneck in the company’s healthcare delivery and revenue cycle operations.</p>

  <div className="pl-2">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
             <li className="pb-4">Patients often had multiple policies with varying coverage rules, leading to confusion and delayed approvals.</li>
               <li className="pb-4">Patients were frequently unaware of non-covered treatments until they received post-treatment denial notifications, resulting in unexpected costs.</li>
                <li className="pb-4">Hospitals manually gathered medical data from multiple departments, each needing to match specific formats required by various insurers.</li>
                <li>Reliance on paper forms or scanned PDFs led to processing delays, impacting treatment timelines and revenue collection.</li>
              </ul>
            </div>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Solutions </h2>


              <p className="text-black pb-6 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">To streamline and digitize the prior authorization process, Rialtes developed a Salesforce-based solution using Salesforce Health Cloud that connected hospitals, healthcare providers, patients, and insurers within a unified digital workflow. </p>

               <div className="pl-2">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium ">
            <li className="pb-4"><h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Unified Digital Platform </h3>: Consolidated insurance details, ICD codes, and treatment information into a single interface accessible to hospitals and care teams.</li>

               <li className="pb-4"><h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Medical Input from Physicians </h3>: Enabled doctors to directly enter required clinical data, ensuring accuracy and completeness. </li>

                <li className="pb-4"><h3 className="inline h3-bold x4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Digital Patient Consent </h3>: Integrated electronic consent collection, ensuring transparency and compliance with patient authorization requirements. </li>

             <li className="pb-4"><h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Standardized Submissions </h3>: Automated the transmission of complete medical records using industry-standard formats (HL7 and FHIR), compliant with HIPAA regulations.</li>

                <li ><h3 className="inline h3-bold 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Condition-Aware UI </h3>: The user interface dynamically adjusts based on the medical condition, guiding users through all required steps to maximize authorization success.</li>
              
              </ul>
            </div>


            </div>   </div> 
          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px]   2xl:text-[24px]  xl:text-[21px] text-[23px] leading-tight pb-4">Benefits</h2>
               <div className="pl-2">
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 4xl:text-[20px] 2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                <li className="pb-4">Streamlined communication between hospitals, providers, patients, and insurers through a single source of truth.</li>
               <li className="pb-4">Improved accuracy and completeness of submissions reduced insurance denials by 30%, minimizing delays in patient care and revenue loss.</li>

               <li className="pb-4">Transitioning from paper to digital submissions cuts prior authorization approval times by up to 50%, improving overall care delivery speed.</li>

                <li className="pb-4">Greater transparency reduced surprise billing and enabled more confident treatment planning.</li>
              <li>Hospital administrative workload for prior authorization processing decreased by 35%, freeing up staff to focus on patient care.</li>
                
              </ul>
            </div>
            </div>
          </div>
   
        </div>
      </section>

      {/* Latest Blogs */}
      <div
        className="py-10 custom-container lg:pr-0"
      >
        <RelatedTopicsCarousel slides={slides} />

      </div>
    </div>
  );
}