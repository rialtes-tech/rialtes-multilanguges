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
    "@id": "https://www.rialtes.com/insights/case-studies/streamlined-devops-using-copado-and-salesforce/"
  },
  "headline": "Case Study: Streamlined DevOps Using Copado and Salesforce",
  "description": "Discover how Rialtes helped a company enhance release management, improve collaboration, and accelerate DevOps cycles using Copado integrated with Salesforce.",
  "image": "https://www.rialtes.com/images/case-studies/case%20study%203_n%201.webp",
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
  "datePublished": "2025-01-08"

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
   const fullUrl = "https://www.rialtes.com/insights/case-studies/streamlined-devops-using-copado-and-salesforce";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Salesforce DevOps Case Study: How to Front Load Delivery"
        description="Discover how front loading DevOps with Copado and Salesforce improved release speed and reduced manual errors for a tech-forward enterprise."
        canonical="https://www.rialtes.com/insights/case-studies/streamlined-devops-using-copado-and-salesforce/"
      />
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/case study 3_n 1.webp "
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
            <h1 className="text-[#000000] py-6 max-w-4xl leading-tight">DevOps Transformation using Copado and Salesforce</h1>
          </div>
          <div className="py-4"></div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black  max-w-4xl xl:w-1/2">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Manufacturing</span> <span className='text-[#ACACAC]'> | </span>08 January 2025
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
              <p className="text-black">A prominent manufacturer specializing in innovative building materials for both residential and commercial construction. Their product portfolio includes roofing shingles, decking, railing, and waterproofing solutions. The company is committed to supporting contractors, builders, and homeowners in enhancing building durability, performance, and visual appeal.</p>
              <div className="py-6"></div>
              <h3 className="h3-bold text-[#0092E0] pb-6">Problem or Challenge </h3>
              <p className="text-black pb-6">The client was struggling with a fragmented and inefficient deployment process due to a complex, multi-layered environment, which included:</p>

              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] font-medium">
                <li className="pb-4">Multiple sandboxes across development, QA, pre-production, and production stages.
                </li>
                <li className="pb-4">Monthly release cycles supplemented with ad-hoc deployments, leading to delays in delivering new features and fixes.</li>
                <li className="pb-4">Manual deployment processes that involved cross-functional handoffs, increasing the risk of human error and inconsistencies.
                </li>
                <li className="pb-4">Limited version control and a lack of centralized access management make it difficult to maintain a stable, bug-free production environment.
                </li>

              </ul>


              <div className="py-6"></div>
              <h3 className="h3-bold text-[#0092E0] pb-6">Solutions </h3>
              <p className="text-black pb-6">Rialtes introduced a robust DevOps strategy leveraging Copado, a native Salesforce DevOps platform, to streamline and automate the client's deployment lifecycle.</p>
              <p className="font-bold pb-3">Approach</p>
              <ul className="list-decimal text-black pl-4 xl:text-[20px] text-[16px]">
                <li className="pb-4"><strong>Process Assessment: </strong> Conducted a thorough analysis of the client's existing deployment workflows.</li>
                <li className="pb-4"><strong>Fit-Gap Analysis:  </strong> Identified gaps between current practices and the capabilities offered by Copado.</li>
                <li className="pb-4"><strong>Education & Enablement:  </strong> Trained internal teams on DevOps best practices and Copado functionalities.</li>
                <li className="pb-4"><strong>Deployment Landscape Redesign: </strong> Defined a streamlined deployment architecture tailored to the client’s environment.</li>
              </ul>
            </div>
          </div>
          <div className="py-4"></div>
          <div className="container mx-auto">
            <p className="h3-bold pb-6">Technology Implementation</p>
            <ul className="list-decimal  text-black pl-4 xl:text-[20px] text-[16px]">
              <li className="pb-4"><strong>CI/CD Pipeline Setup: </strong> Built a simplified and automated DevOps pipeline using Copado.</li>
              <li className="pb-4"><strong>Tool Integration:  </strong> GitHub for centralized version control.<br />
                Azure DevOps for agile project and release management.
              </li>
              <li className="pb-4"><strong>Centralized Control:  </strong> Enabled consistent oversight of versioning, access, data, and environment provisioning.</li>
            </ul>
          </div>


          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Benefits</h3>
              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-6 xl:text-[20px] text-[16px] font-medium">
                <li className="pb-4">Automated CI/CD pipelines and streamlined workflows cut deployment time by more than half, enabling quicker time-to-market for new features and bug fixes.</li>
                <li className="pb-4">Transitioning from manual to automated deployments drastically reduced human errors, ensuring more stable and reliable releases.</li>
                <li className="pb-4">The ability to run minor, major, and bug-fix releases simultaneously improved release frequency and responsiveness to business needs. Resulting in 50% faster release cycles.</li>
                <li className="pb-4"> GitHub integration provided full traceability and transparency across environments, reducing code conflicts and improving audit readiness.</li>
                <li className="pb-4">With centralized tools and automated workflows, development and QA teams spent less time on repetitive tasks, increasing DevOps Team Productivity by 40%</li>
                <li>Fewer deployment errors led to higher environment uptime and fewer rollbacks, ensuring a more stable production environment.</li>
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