"use client";
// pages/case-study-detail.js
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';
import Seo from "@/app/components/Seo";

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
        title="Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP"
        canonical="https://www.rialtes.com/insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap/"
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
            <h1 className="text-[#000000] py-6 max-w-4xl">Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP</h1>
          </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black  max-w-4xl xl:w-1/2">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Healthcare and Life Sciences</span> <span className='text-[#ACACAC]'> | </span>25 Oct 2024
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
              <p className="text-black">Client Profile A global medical technology company that develops and manufactures innovative products used by doctors to diagnose, treat, and monitor people with cardiovascular and endovascular conditions. This includes pacemakers, defibrillators for regulating heart rhythm and remote monitoring systems for patients with implanted devices. Their main goal is to improve the lives of people diagnosed with heart and blood vessel diseases.</p>
              <div className="py-6"></div>
              <h3 className="h3-bold text-[#0092E0] pb-6">Problem or Challenge </h3>
              <p className="text-black">The MedTech company’s manual order processing involved manual data entry across Salesforce, including sales & patient management, and SAP, including finance & accounting. This caused delays, errors and efficiencies. Sales and accounting worked in separate systems with lack of transparency and data silos. Orders required handling various payment methods, including insurance, co-pays, or out-of-pocket payments. This added complexity to the manual order processing workflow. </p>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Solutions</h3>

              <ul className="list-disc marker:text-[#0092E0] text-black pl-4">
                <li className="pb-4">Rialtes implemented an integrated solution using Mulsesoft platform. This made it possible to leverage the strengths of both Salesforce and SAP.</li>
                <li className="pb-4">Orders created in Salesforce now automatically trigger order creations in SAP, which eliminates the manual data entry and reduces errors. </li>
                <li className="pb-4">Any changes to orders in either system was reflected in real time in the other system, ensuring that data remains consistent across departments. </li>
                <li className="pb-4">Mulesoft mapped the data between Salesforce and SAP and allows for different data formats that ensure privacy regulations </li>
                <li>With the segregation of the two systems, Sales team can now focus on patient data and order creation in Salesforce, while the finance team handles invoicing, accounting, and settlements using SAP.</li>
              </ul>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Benefits</h3>

              <ul className="list-disc marker:text-[#0092E0] text-black pl-4">
                <li className="pb-4">Automated order processing eliminated manual work, saving time and resources for sales and finance teams.
                </li>
                <li className="pb-4">Elimination of manual data transfer improved accuracy and efficiency.</li>
                <li className="pb-4">Real-time data synchronization ensured data consistency across systems, minimizing errors.
                </li>
                <li className="pb-4">Sales and finance teams have real-time visibility into order status and financial data, improving collaboration.
                </li>
                <li className="pb-4">The solution allows efficient handling of different payment types.
                </li>
                <li>Sales teams can now focus on selling, and finance teams can focus on financial management, leading to improved overall productivity.</li>
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