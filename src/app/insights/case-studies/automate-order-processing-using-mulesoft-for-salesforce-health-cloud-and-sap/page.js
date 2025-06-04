"use client";
// pages/case-study-detail.js
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';
import Seo from "@/app/components/Seo";
const schemaData={
  
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap/"
  },
  "headline": "Case Study: Automate Order Processing Using MuleSoft for Salesforce Health Cloud and SAP",
  "description": "Learn how Rialtes leveraged MuleSoft to integrate Salesforce Health Cloud and SAP, enabling end-to-end order automation, faster turnaround, and improved patient experience.",
  "image": "https://www.rialtes.com/images/case-studies/case%20study%201_n%201.webp",
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
  "datePublished": "2024-11-17"

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
  const fullUrl2 = "https://www.rialtes.com/insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap";
  const title = "Automate Order Processing Using Mulesoft For Salesforce Health Cloud And SAP";
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="MuleSoft Case Study: Order Processing Automation with Salesforce & SAP"
        description="Streamlined complex order flows using MuleSoft, Salesforce, and SAP APIs. Dive into this MuleSoft case study to see integration in action."
        canonical="https://www.rialtes.com/insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap/"
      />
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/case study 1_n 1.webp "
          alt="Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP"
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
            <h1 className="text-[#000000] py-6 max-w-4xl">Automating Order Processing using Mulesoft for Salesforce Health Cloud and SAP</h1>
          </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black  max-w-4xl xl:w-1/2">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Healthcare and Life Sciences</span> <span className='text-[#ACACAC]'> | </span>17 November 2024
              </div>
              <div className="flex flex-col">
                <span>8 min read</span>
              </div>
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-row gap-6">
              <div className="max-w-[40px]">
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl2)}&title=${encodeURIComponent(title)}&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
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
                <a href="https://www.facebook.com/sharer/sharer.php?u=/case-study-1">
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
                <a href="https://twitter.com/intent/tweet?url=/case-study-1&text=Automate%20Order%20Processing%20using%20Mulesoft%20for%20Salesforce%20Health%20Cloud%20and%20SAP">
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

          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Client Profile</h3>
              <p className="text-black">A global medical technology company specializing in the development and manufacture of innovative products for diagnosing, treating, and monitoring cardiovascular and endovascular conditions. Their portfolio includes pacemakers, defibrillators, and remote monitoring systems for patients with implanted devices. The company’s mission is to improve the quality of life for individuals with heart and blood vessel diseases through advanced medical technologies.</p>
              <div className="py-6"></div>
              <h3 className="h3-bold text-[#0092E0] pb-6">Problem or Challenge </h3>
              <p className="text-black">The company faced significant inefficiencies due to a manual, disconnected order processing workflow between Salesforce (used for sales and patient management) and SAP (used for finance and accounting). Key challenges included:</p>
              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] mt-5">
                <li className="pb-4"><strong>Manual data entry </strong> across systems, leading to frequent delays and human errors</li>
                <li className="pb-4"><strong>Lack of integration </strong> between sales and finance teams, resulting in data silos and miscommunication.</li>
                <li className="pb-4"><strong>Complexity in payment processing, </strong> including insurance claims, co-pays, and direct payments, added strain to the already inefficient process.</li>
              </ul>

            </div>
          </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Solutions</h3>
              <p>Rialtes implemented an integrated Salesforce-SAP solution using MuleSoft, bridging the gap between systems and automating the entire order lifecycle. Key components of the solution:</p>
              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 mt-5 xl:text-[20px] text-[16px]">
                <li className="pb-4"><strong>Automated Order Syncing: </strong> Orders created in Salesforce now automatically trigger corresponding entries in SAP, eliminating the need for manual duplication.</li>
                <li className="pb-4"><strong>Real-Time Data Updates:  </strong> Any modifications in one system are instantly reflected in the other, ensuring data accuracy and consistency.</li>
                <li className="pb-4"><strong>MuleSoft as a Middleware:  </strong> Used to map and translate data between systems, accommodating different formats and adhering to healthcare data privacy regulations.</li>
                <li className="pb-4"><strong>Role-Based System Segregation: </strong> Salesforce is now focused on patient data and order creation, while SAP manages invoicing, settlements, and accounting—allowing teams to operate within their areas of expertise.</li>

              </ul>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Benefits</h3>
              <p>The integration delivered measurable improvements across departments:</p>
              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] mt-5 font-medium">
                <li className="pb-4">60% reduction in order processing time by eliminating manual data entry.
                </li>
                <li className="pb-4">Real-time synchronization between Salesforce and SAP minimized errors and improved data integrity.</li>
                <li className="pb-4">Improved collaboration between sales and finance teams through shared visibility into order and payment statuses.
                </li>
                <li className="pb-4">Up to 40% fewer order discrepancies, thanks to automated validation and real-time updates.
                </li>
                <li className="pb-4">Streamlined payment handling, enabling seamless processing of insurance, co-pays, and direct payments.
                </li>
                <li>Increased productivity—sales teams can now focus on growth, while finance handles transactions with greater efficiency.</li>
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