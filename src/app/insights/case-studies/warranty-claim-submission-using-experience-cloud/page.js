"use client";
// pages/case-study-detail.js
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';
import Seo from "@/app/components/Seo";
import Script from "next/script";

const schemaData =
{
    "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/case-studies/warranty-claim-submission-using-experience-cloud"
  },
  "headline": "Case Study: Salesforce Experience Cloud Transforms Warranty Claims for a Roofing Manufacturer",
  "description": "Rialtes helped a roofing manufacturer in the building materials industry modernize warranty claims using Salesforce Experience Cloud, integrating LWC, address validation, automation, and ERP for better accuracy and efficiency.",
  "image": "https://www.rialtes.com/images/homepage/logo.svg",
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
  "datePublished": "2025-06-10"
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
    const fullUrl = "https://www.rialtes.com/insights/case-studies/warranty-claim-submission-using-experience-cloud";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Salesforce Experience Cloud for Roofing Manufacturer | Rialtes"
        description="Know how Rialtes used Salesforce Experience Cloud to streamline warranty claims and improve customer satisfaction for a roofing manufacturer."
        canonical="https://www.rialtes.com/insights/case-studies/warranty-claim-submission-using-experience-cloud/"
      />
         <Script
        id="schema-warranty-desktop"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/adaptis_web-banner.webp"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "90% 20%" }}
          priority
        />
      </section>

      <section
        className="
      custom-container"
      >

        <div className="py-10 bg-white 4xl:max-w-[1200px] 4xl:w-[1200px] xl:w-[1000px]">
          <div className=" ">
            <h1 className="text-[#000000] py-6 leading-tight text-[24px] 4xl:text-[60px] xl:text-[45px] ">40% Enhanced Adoption of Warranty Application Using Salesforce Experience Cloud Capability</h1>
          </div>
          <div className="py-4"></div>
          <div className="">
            <div className="flex flex-col md:flex-row justify-between text-black  xl:max-w-[1084px] xl:w-[1084px]">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Manufacturing</span> <span className='text-[#ACACAC]'> | </span>10 June 2025
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


              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px]  pb-6">Client Profile</h2>
              <p className="text-black">A top manufacturer of roofing products known for innovation and quality. With decades of experience, they specialize in asphalt shingles, roofing accessories, waterproofing solutions, and underlayments for both residential and commercial use. Committed to sustainability, they invest in advanced manufacturing technologies and maintain a broad distribution network, ensuring that builders, contractors, and homeowners have access to premium roofing solutions.</p>

              <div className="py-6"></div>
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px]  pb-6">Challenges </h2>
              <p className="text-black ">The client needed a structured warranty claim submission process, as no system was in place. They required a user-friendly portal integrated with Salesforce to streamline claim submissions while ensuring accurate address validation. Additionally, the absence of automation for notifications and seamless data integration with SAP and other ERP systems led to inefficiencies in claim tracking and management.</p>

              <div className="py-6"></div>
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px]  pb-6">Solutions </h2>
              <p className="text-black pb-6">Rialtes implemented a Salesforce Experience Builder portal with an LWC-based UI to streamline the warranty claim submission process. To ensure accurate address capture, we integrated Google API Address Validation. </p>

              <p className="text-black pb-6">Carried out automated workflows that eliminated manual intervention, enabling seamless claim handling. Real-time email and SMS notifications kept customers informed about their claim status, enhancing transparency. </p>

              <p className="text-black">Additionally, we established SAP and ERP integrations for smooth data exchange, reducing manual effort and significantly improving claim processing efficiency.</p>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px]  pb-6">Benefits</h2>
             <div className="pl-2">
               <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] font-medium">
                <li className="pb-4">Reduced claim submission time by 60%, allowing customers to complete requests in under 5 minutes through the intuitive web portal.</li>
                <li className="pb-4">Address validation via Google API reduced incorrect or incomplete address entries by over 85%, eliminating delays caused by manual corrections.</li>
                <li className="pb-4">Automated workflows decreased manual processing, freeing up internal teams to focus on more strategic tasks.</li>
                <li className="pb-4">Real-time SMS and email alerts cut down customer follow-ups by 40%, improving transparency and customer satisfaction.</li>
                <li className="pb-4">Seamless data sync with SAP and ERP systems enabled near real-time tracking of warranty claims, boosting processing accuracy and cutting claim resolution time by half.</li>
                <li >A modern LWC-based UI improved user accessibility and reduced training time for internal users by 30%.</li>
              </ul>
             </div>

            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div
        className="py-10
        custom-container"
      >
        <RelatedTopicsCarousel slides={slides} />

      </div>
    </div>
  );
}