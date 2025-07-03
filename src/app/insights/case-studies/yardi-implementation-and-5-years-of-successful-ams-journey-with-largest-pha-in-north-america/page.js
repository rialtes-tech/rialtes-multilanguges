"use client";
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';
import Seo from "@/app/components/Seo";
const schemaData = {

  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams-journey-with-largest-pha-in-north-america/"
  },
  "headline": "Case Study: Yardi Implementation and 5 Years of Successful AMS Journey with Largest PHA in North America",
  "description": "Explore how Rialtes partnered with North America’s largest PHA for a full-scale Yardi implementation and provided 5 years of robust AMS support, ensuring operational excellence and compliance.",
  "image": "https://www.rialtes.com/images/case-studies/case-study-5.webp",
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
  "datePublished": "2024-09-27"

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
  const fullUrl = "https://www.rialtes.com/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams-journey-with-largest-pha-in-north-america";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Yardi Implementation Case Study: 5 Years, 1 PHA, and Big Wins"
        description="Explore our Yardi implementation case study to see how we supported a 5-year digital transformation journey with Yardi AMS for long-term success."
        canonical="https://www.rialtes.com/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams-journey-with-largest-pha-in-north-america/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/publicsector (1).webp "
          alt="A public housing in US"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
          priority
        />
      </section>

      <section
        className="custom-container"
      >
        <div className="py-10 bg-white 4xl:max-w-[1080px] 4xl:w-[1080px] xl:w-[900px]">
          <div>
            <h1 className="text-[#000000] py-6 leading-tight text-[26px]  4xl:text-[60px] xl:text-[45px]">Trusted YARDI Partner for North America’s Largest PHA</h1>
          </div>
          <div className="py-2"></div>
          <div>
            <div className="flex flex-col md:flex-row justify-between text-black">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Public Sector</span> <span className='text-[#ACACAC]'> | </span>27 September 2024
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
          <div>
            <div>

              <h3 className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Client Profile</h3>
              <p className="text-black">A prominent multifamily real estate firm based in the U.S. specializes in acquiring, developing, and repositioning residential and commercial properties. Focusing on operational excellence and long-term value creation, the firm is dedicated to building thriving communities while maximizing returns for its investors.</p>
              <div className="py-6"></div>

              <h3 className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Challenges</h3>
              <p className="pb-4 text-black">The client faced operational inefficiencies in managing multiple property management platforms, including Yardi Voyager 7, MRI, Voyager, and RealPage:</p>
              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium">
                <li className="pb-4"> <h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">Skill Silos:</h3> Reliance on individual experts for each platform created bottlenecks. Any unavailability led to delays.</li>
                <li className="pb-4"> <h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">Talent Shortage: </h3> Local hiring markets lacked specialists with deep knowledge of the client’s specific tech stack.</li>
                <li className="pb-4"> <h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">Lack of Centralized Oversight:</h3> Projects were loosely organized, limiting effective collaboration and knowledge sharing.</li>

              </ul>

              <div className="py-6"></div>

              <h3 className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Solutions </h3>

              <p className="text-black pb-4">Rialtes, a trusted Yardi Managed Services provider, delivered a structured and scalable solution to address these gaps:</p>

              <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 xl:text-[20px] text-[16px] md:text-[19px] font-medium">
                <li className="pb-4"> <h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">Capability Assessment:  </h3>Conducted a thorough review of the client’s internal team and identified skill gaps.</li>
                <li className="pb-4"> <h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">Team Augmentation:  </h3> Deployed skilled resources to complement the client's in-house team, providing immediate support for Yardi, MRI, and RealPage.</li>
                <li className="pb-4"> <h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">Collaborative Transition: </h3> Initial support was provided offshore by Rialtes' technical team, gradually transitioning to a hybrid model with shared responsibilities.</li>
                <li className="pb-4"> <h3 className="inline h3-bold xl:text-[20px] text-[17px] md:text-[19px]">End-to-End Ownership:</h3> After a successful year, Rialtes took full ownership of all related systems—Yardi, RealPage, affordable housing, residential, and commercial support, delivering a comprehensive managed service model.</li>
              </ul>
            </div>
          </div>
          <div className="py-6"></div>
          <div>
            <div>
              <h3 className=" font-medium text-[#0092E0] xl:text-[30px] text-[20px] pb-4">Benefits</h3>
              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] font-medium">
                <p><li className="pb-4">With a follow-the-sun model, the client now receives round-the-clock assistance, ensuring zero operational downtime across time zones</li></p>
                <p><li className="pb-4"> Multi-resource coverage eliminated dependency on individual contributors, increasing system resilience by 90%</li></p>
                <p><li className="pb-4"> By introducing primary and backup personnel for all critical systems, Rialtes significantly reduced service interruptions</li></p>
                <p><li className="pb-4"> Leveraging offshore resources cuts costs by nearly one-third compared to maintaining a full in-house California-based team</li></p>
                <p><li className="pb-4"> The client gained on-demand access to a wide range of skills across Yardi, MRI, RealPage, and infrastructure without the burden of hiring locally</li></p>
              </ul>
            </div>
          </div>
          <div className="py-6"></div>
        </div>
      </section>

      {/* Latest Blogs */}
      <div
        className="pb-10 custom-container lg:pr-0"
      >
        <RelatedTopicsCarousel slides={slides} />

      </div>
    </div>
  );
}