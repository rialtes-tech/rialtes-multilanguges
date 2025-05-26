"use client";
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
    image: "/images/case-studies/case study 2_thumb_n.webp",
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
        title="YARDI Implementation and 5 years of successful AMS journey with largest PHA in North America"
        canonical="https://www.rialtes.com/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams-journey-with-largest-pha-in-north-america/"
      />

      <section className="relative h-[250px] sm:h-[500px] lg:h-[650px] overflow-hidden">
        <Image
          src="/images/case-studies/case-study-5.webp "
          alt="A public housing in US"
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
            <h1 className="text-[#000000] py-6 max-w-4xl">YARDI Implementation and 5 Years of Successful AMS Journey with The Largest PHA in North America</h1>
          </div>
          <div className="py-4"></div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black  max-w-4xl xl:w-1/2">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Public Sector</span> <span className='text-[#ACACAC]'> | </span>25 Oct 2024
              </div>
              <div className="flex flex-col">
                <span>8 min read</span>
              </div>
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-row gap-6 ">
              <div className="max-w-[40px]">
                <a
                  href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Frialtes.netlify.app%2Finsights%2Fcase-studies%2Fyardi-implementation-and-5-years-of-successful-ams-journey-with-largest-pha-in-north-america&title=Yardi%20Implementation%20and%205%20Years%20of%20Successful%20AMS%20Journey%20with%20Largest%20PHA%20in%20North%20America&summary=Summary%20of%20the%20case%20study&source=LinkedIn"
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
                <a href="https://www.facebook.com/sharer/sharer.php?u=/case-study-6">
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
                <a href="https://twitter.com/intent/tweet?url=/case-study-6&text=A public housing in US">
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
              <p className="text-black">A public housing authority responsible for managing and delivering affordable housing programs across multiple counties. Their services include Section 8 vouchers, project-based housing, VASH (Veterans Affairs Supportive Housing), Section 3 employment programs, and other HUD-administered initiatives designed to support low-income individuals and families.</p>
              <p className="mt-5">Rialtes has been a trusted AMS partner of this authority for over 5 years, supporting their digital transformation and ensuring continuity, stability, and innovation across critical operations. This long-term collaboration reflects our commitment to public sector excellence.</p>
              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Challenges</h3>
              <p>The housing authority was operating with outdated legacy software (Tenmast) that created multiple operational inefficiencies and user experience challenges:</p>
              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] mt-5 font-medium">
                <li className="pb-4">Non-responsive portals for residents and applicants, hindering digital engagement.</li>
                <li className="pb-4">Manual, paper-based application processes slow down approvals and increase administrative burden.</li>
                <li className="pb-4">Centralized software installation, requiring an administrator to configure Tenmast on each laptop, makes system updates complex, slow, and costly.</li>
                <li className="pb-4">Lack of automation leads to time-consuming manual workflows, delayed responses, and limited scalability.</li>
              </ul>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Solutions </h3>

              <p className="text-black pb-6">Rialtes partnered with the housing authority to lead a complete digital transformation by implementing Yardi Voyager 7S, a modern property management solution tailored for affordable housing operations.</p>

              <p className="text-black pb-6">Implementation Steps:</p>
              <ul className="list-decimal marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] font-medium">
                <li className="pb-4"> <strong>Collaborative Discovery: </strong> Conducted in-depth sessions with stakeholders to understand existing workflows and identify areas for automation and improvement. Developed an “as-is to to-be” process document to guide transformation.</li>
                <li className="pb-4"><strong>Data Migration & Integration: </strong> Built an SQL-based interface to extract legacy data from Tenmast and convert it into a format compatible with Yardi, ensuring complete and accurate migration.</li>
                <li className="pb-4"><strong>Resident Portal Deployment – Rent Café: </strong> Developed a user-friendly, self- service web portal (Rent Café) enabling residents and applicants to submit applications online, access status updates, and interact with housing staff, eliminating the need for paper forms or office visits.</li>
                <li className="pb-4"><strong>Real-Time System Integration: </strong> Enabled seamless data synchronization between Rent Café and Yardi, ensuring up-to-date information across the resident portal and back-office operations.</li>
                <li className="pb-4"><strong>Phased Rollout: </strong> Executed the project in two stages—first with a QA/test environment for validation and training, followed by a full-scale launch of the production system with complete functionality.</li>
              </ul>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Benefits</h3>
              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 xl:text-[20px] text-[16px] font-medium">
                <li className="pb-4"> <strong>Faster Response Times: </strong> Digital application processes reduced response time to resident and applicant inquiries by up to 60%.</li>
                <li className="pb-4"><strong>Improved Accessibility: </strong> Applicants can now submit applications online 24/7, increasing engagement and convenience, especially for those in remote or underserved areas.</li>
                <li className="pb-4"><strong>Increased Operational Efficiency: </strong> Automated workflows in Yardi led to a 40% reduction in staff workload related to application processing and document handling.</li>
                <li className="pb-4"><strong>Reduced Administrative Overhead: </strong> Paper usage dropped by 70%, and manual data entry tasks were reduced by over 50%, lowering processing errors and administrative costs</li>
                <li className="pb-4"><strong>Enhanced User Experience: </strong> A responsive and intuitive portal interface improved satisfaction for both applicants and residents, reducing support requests and office visits.</li>
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