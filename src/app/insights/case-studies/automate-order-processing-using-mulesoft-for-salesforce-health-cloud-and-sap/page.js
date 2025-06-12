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
          style={{ objectFit: "cover", objectPosition: "70% 30%" }}
          priority
        />
      </section>

      <section
        className="custom-container"
      >

        <div className="py-10 bg-white xl:max-w-[1080px] xl:w-[1080px]">
          <div className="">
            <h1 className="text-[#000000] py-6 leading-tight text-[26px] md:text-[48px] xl:text-[60px]">Automating Order Processing in Healthcare using MuleSoft</h1>
          </div>

          <div className="">
            <div className="flex flex-col md:flex-row justify-between text-black  ">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Healthcare and Life Sciences</span> <span className='text-[#ACACAC]'> | </span>17 November 2024
              </div>
              <div className="flex flex-col">
                <span>8 min read</span>
              </div>
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-row gap-6 ml-[-8px]">
              <div className="flex flex-col">
                <div className="flex flex-row gap-6">
                  <div className="max-w-[40px]">
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl2)}&title=A%20public%20housing%20in%20US&summary=Summary%20of%20the%20case%20study&source=LinkedIn`}
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
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl2)}&text=Check%20out%20this%20blog%20on%20Agriculture%204.0!`}
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
            </div>
          </div>

          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Client Profile</h2>
              <p className="text-black">A global medical technology company specializing in the development and manufacture of innovative products for diagnosing, treating, and monitoring cardiovascular and endovascular conditions. Their portfolio includes pacemakers, defibrillators, and remote monitoring systems for patients with implanted devices. The company’s mission is to improve the quality of life for individuals with heart and blood vessel diseases through advanced medical technologies.</p>
              <div className="py-6"></div>


              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Problem or Challenge </h2>
              <p className="text-black pb-4">The company faced significant inefficiencies due to a manual, disconnected order processing workflow between Salesforce (used for sales and patient management) and SAP (used for finance and accounting). Key challenges included:</p>

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium ">
                  <li className="pb-4"><h3 className=" h3-bold inline xl:text-[20px] text-[17px] md:text-[19px] ">Manual data entry  </h3> across systems, leading to frequent delays and human errors</li>

                  <li className="pb-4"><h3 className=" h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">Lack of integration </h3> between sales and finance teams, resulting in data silos and miscommunication.</li>
                  <li><h3 className=" h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">Complexity in payment processing, </h3> including insurance claims, co-pays, and direct payments, added strain to the already inefficient process.</li>


                </ul>
              </div>

            </div>
          </div>
          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Solutions</h2>
              <p className="text-black pb-4 ">Rialtes implemented an integrated Salesforce-SAP solution using MuleSoft, bridging the gap between systems and automating the entire order lifecycle. Key components of the solution:</p>

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium ">
                  <li className="pb-4"><h3 className=" h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">Automated Order Syncing </h3>:  Orders created in Salesforce now automatically trigger corresponding entries in SAP, eliminating the need for manual duplication.</li>

                  <li className="pb-4"><h3 className=" h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">Real-Time Data Updates </h3>:  Any modifications in one system are instantly reflected in the other, ensuring data accuracy and consistency.</li>

                  <li className="pb-4"><h3 className=" h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">MuleSoft as a Middleware </h3>: Used to map and translate data between systems, accommodating different formats and adhering to healthcare data privacy regulations.</li>
                  <li><h3 className=" h3-bold inline xl:text-[20px] text-[17px] md:text-[19px]">Role-Based System Segregation </h3>: Salesforce is now focused on patient data and order creation, while SAP manages invoicing, settlements, and accounting—allowing teams to operate within their areas of expertise.</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Benefits</h2>
              <p className="text-black pb-4">The integration delivered measurable improvements across departments:</p>
              {/* <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] mt-5 font-medium">
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
              </ul> */}

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 ">
                  <p className="text-black pb-4"> <li>60% reduction in order processing time by eliminating manual data entry.</li></p>
                  <p className="text-black pb-4"> <li>Real-time synchronization between Salesforce and SAP minimized errors and improved data integrity.</li></p>
                  <p className="text-black pb-4"><li>Improved collaboration between sales and finance teams through shared visibility into order and payment statuses.</li></p>
                  <p className="text-black pb-4"> <li>Up to 40% fewer order discrepancies, thanks to automated validation and real-time updates.</li></p>
                  <p className="text-black pb-4"> <li>Streamlined payment handling, enabling seamless processing of insurance, co-pays, and direct payments.</li></p>
                  <p className="text-black "> <li>Increased productivity—sales teams can now focus on growth, while finance handles transactions with greater efficiency.</li></p>

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