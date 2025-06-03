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
    "@id": "https://www.rialtes.com/insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud/"
  },
  "headline": "Case Study: Omnichannel Case Management with Salesforce Service Cloud",
  "description": "Discover how Rialtes implemented Salesforce Service Cloud to enable seamless omnichannel case management, reduce response time, and enhance customer satisfaction.",
  "image": "https://www.rialtes.com/images/case-studies/case-study-4.webp",
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
  "datePublished": "2025-10-14"

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
        title="Salesforce Service Cloud Case Study: Omnichannel Case Management"
        description="Discover a Salesforce Service Cloud success story—next-gen case management transformed with automation, faster service, and elevated customer support."
        canonical="https://www.rialtes.com/insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud/"
      />
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/case-study-4.webp "
          alt="Omnichannel case management with Salesforce Service Cloud"
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
            <h1 className="text-[#000000] py-6 max-w-4xl leading-tight">Transforming Omnichannel Case Management Using Salesforce Service Cloud</h1>
          </div>
          <div className="py-4"></div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black  max-w-4xl xl:w-1/2">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Manufacturing (Semi-Conductor)</span> <span className='text-[#ACACAC]'> | </span>14 October 2025
              </div>
              <div className="flex flex-col">
                <span>8 min read</span>
              </div>
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-row gap-6 ">
              <div className="max-w-[40px]">
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=/case-study-7&title=Omnichannel case management with Salesforce Service Cloud&summary=Summary%20of%20the%20case%20study&source=LinkedIn">

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
                <a href="https://www.facebook.com/sharer/sharer.php?u=/case-study-7">
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
                <a href="https://twitter.com/intent/tweet?url=/case-study-7&text=Omnichannel case management with Salesforce Service Cloud">
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
              <p className="text-black">A leading provider of high-performance analog semiconductors powering wireless and wired connectivity across industries. Their core offerings, amplifiers, filters, switches, and integrated modules, support efficient wireless transmission for smartphones, routers, medical devices, automobiles, and more. Renowned for innovation, they are a critical technology partner for both consumer and industrial applications globally.</p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Problem or Challenge </h3>

              <p className="text-black">The client faced persistent challenges in delivering consistent, high-quality customer service across global regions due to a fragmented, legacy support system. Key issues included:</p>
              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] mt-5 font-medium">
                <li className="pb-4">Disjointed customer interaction data across platforms, making it hard to track service history.
                </li>
                <li className="pb-4">Lack of visibility into historical case data and customer behavior.</li>
                <li className="pb-4">Manual case management with no automation for routing or resolution.
                </li>
                <li className="pb-4">Limited self-service options, forcing customers to rely on email and phone channels.
                </li>
              </ul>
              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Solutions </h3>

              <p className="text-black pb-6">Rialtes implemented Salesforce Service Cloud and Experience Cloud to centralize customer support and create a scalable, future-ready solution. Key elements of the implementation:</p>

              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px]">
                <li className="pb-4"><strong>Unified Support Platform:</strong> All customer interactions, across internal teams, distributors, and OEMs, are now managed on a single platform.</li>
                <li className="pb-4"><strong>Self-Service Portal:  </strong> Distributors and OEMs can submit and track cases, and access a robust knowledge base 24/7.</li>
                <li className="pb-4"><strong>Real-Time Communication:  </strong> Built-in chat and messaging facilitate direct conversations between support teams and customers.</li>
                <li className="pb-4"><strong>Knowledge Consolidation: </strong> Legacy support content was migrated into a centralized, searchable repository.</li>
                <li className="pb-4"><strong>Einstein AI Assistance: </strong> AI-driven recommendations help customers resolve issues faster and reduce case volume.</li>
                <li className="pb-4"><strong>Automated Case Assignment: </strong> Routing logic based on geography and expertise ensures timely and accurate responses.</li>
                <li className="pb-4"><strong>Cross-Continent Collaboration: </strong> Support teams can now share knowledge and updates effortlessly across time zones.</li>
                <li className="pb-4"><strong>Segmented Content Delivery: </strong> Targeted release of support updates and critical info to specific customer groups.</li>
                <li className="pb-4"><strong>Data Migration & Insights: </strong>Historical case data migration enables in-depth trend analysis and smarter decision-making.</li>

              </ul>





            </div>
          </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Benefits</h3>

              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] mt-5 font-medium">
                <li className="pb-4">60% reduction in average case resolution time, thanks to automation and AI assistance.
                </li>
                <li className="pb-4">30% increase in customer self-service adoption, reducing support workload.</li>
                <li className="pb-4">Enhanced visibility into the complete customer journey, enabling targeted upselling and proactive service.
                </li>
                <li className="pb-4">360° customer view across service channels, devices, and global teams.
                </li>
                <li className="pb-4">Improved global support consistency and seamless collaboration across continents.
                </li>
                <li className="pb-4">Scalability for future integration with Salesforce CPQ and Marketing Cloud, enabling a unified customer lifecycle.</li>
                <li>Knowledge article usage increased by 45%, improving first-contact resolution.</li>
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