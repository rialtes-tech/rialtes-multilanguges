"use client";
// pages/case-study-detail.js
import Head from "next/head";
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';
import Seo from "@/app/components/Seo";
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
const fullUrl = "https://www.rialtes.com/insights/case-studies/salesforce-health-cloud-prior-authorization";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Salesforce Health Cloud Case Study: Prior Authorization Streamlined"
        description="See how Salesforce Health Cloud sped up prior authorizations, streamlining workflows in complex healthcare environments for faster patient care.
"
        canonical="https://www.rialtes.com/insights/case-studies/salesforce-health-cloud-prior-authorization/"
      />
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/case-study-8.webp "
          alt="Salesforce Health Cloud, Prior Authorization"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
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
            <h1 className="text-[#000000] py-6 max-w-4xl leading-tight">Accelerating Prior Authorizations Using Salesforce Health Cloud</h1>
          </div>
          <div className="py-4"></div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black  max-w-4xl xl:w-1/2">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Healthcare And Life Sciences</span> <span className='text-[#ACACAC]'> | </span>02 August 2024
              </div>
              <div className="flex flex-col">
                <span>8 min read</span>
              </div>
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-row gap-6">
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
          <div className="container mx-auto">
            <div className="max-w-4xl">


              <h3 className="h3-bold text-[#0092E0] pb-6">Client Profile</h3>
              <p className="text-black">A global medical technology leader that designs and manufactures life-saving cardiovascular and endovascular products such as pacemakers, defibrillators, and remote patient monitoring systems. The company's mission is to enhance and extend the lives of patients with heart and blood vessel conditions through advanced innovation and patient-centric care.</p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Problem or Challenge </h3>

              <p className="text-black pb-6">The prior authorization process, a critical step in patient treatment, was a major bottleneck in the company’s healthcare delivery and revenue cycle operations.</p>

              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px]  font-medium">
                <li className="pb-4">Patients often had multiple policies with varying coverage rules, leading to confusion and delayed approvals.
                </li>
                <li className="pb-4">Patients were frequently unaware of non-covered treatments until they received post-treatment denial notifications, resulting in unexpected costs.</li>
                <li className="pb-4">Hospitals manually gathered medical data from multiple departments, each needing to match specific formats required by various insurers.
                </li>
                <li className="pb-4">Reliance on paper forms or scanned PDFs led to processing delays, impacting treatment timelines and revenue collection.
                </li>
              </ul>


              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Solutions </h3>


              <p className="text-black pb-6">To streamline and digitize the prior authorization process, Rialtes developed a Salesforce-based solution using Salesforce Health Cloud that connected hospitals, healthcare providers, patients, and insurers within a unified digital workflow. </p>
              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px]">
                <li className="pb-4"><strong>Unified Digital Platform: </strong> Consolidated insurance details, ICD codes, and treatment information into a single interface accessible to hospitals and care teams.</li>
                <li className="pb-4"><strong>Medical Input from Physicians:  </strong> Enabled doctors to directly enter required clinical data, ensuring accuracy and completeness. </li>
                <li className="pb-4"><strong>Digital Patient Consent:  </strong> Integrated electronic consent collection, ensuring transparency and compliance with patient authorization requirements. </li>
                <li className="pb-4"><strong>Standardized Submissions: </strong>Automated the transmission of complete medical records using industry-standard formats (HL7 and FHIR), compliant with HIPAA regulations.</li>
                <li className="pb-4"><strong>Condition-Aware UI: </strong> The user interface dynamically adjusts based on the medical condition, guiding users through all required steps to maximize authorization success.</li>

              </ul>
            </div>    </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Benefits</h3>


              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] mt-5 font-medium">
                <li className="pb-4">Streamlined communication between hospitals, providers, patients, and insurers through a single source of truth.
                </li>
                <li className="pb-4">Improved accuracy and completeness of submissions reduced insurance denials by 30%, minimizing delays in patient care and revenue loss.</li>
                <li className="pb-4">Transitioning from paper to digital submissions cuts prior authorization approval times by up to 50%, improving overall care delivery speed.
                </li>
                <li className="pb-4">Greater transparency reduced surprise billing and enabled more confident treatment planning.
                </li>
                <li className="pb-4">Hospital administrative workload for prior authorization processing decreased by 35%, freeing up staff to focus on patient care.
                </li>
              </ul>
            </div>
          </div>
          <div className="py-6"></div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div
        className="py-10
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