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

  const fullUrl = "https://www.rialtes.com/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams journey-with-largest-pha-in-north-america";


  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="YARDI Implementation and 5 years of successful AMS journey with largest PHA in North America"
        canonical="https://www.rialtes.com/insights/case-studies/yardi-implementation-and-5-years-of-successful-ams journey-with-largest-pha-in-north-america/"
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
            <h1 className="text-[#000000] py-6 max-w-4xl">YARDI Implementation and 5 years of successful AMS journey with largest PHA in North America</h1>
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
              <p className="text-black">A Public housing authority responsible for managing affordable housing programs across multiple counties in their zone. These programs include Section 8 vouchers, project-based housing, VASH programs, Section 3 programs, and others administered by the Department of Housing and Urban Development (HUD). </p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Problem or Challenge </h3>

              <p className="text-black pb-6">The public housing authority was struggling with an outdated software system called Tenmast. </p>

              <p className="text-black pb-6">Non-responsive resident and applicant portals. </p>

              <p className="text-black pb-6">Manual and paper-based application processes. </p>

              <p className="text-black pb-6">The Tenmast system required a central administrator to install it on laptops. This made updates and maintenance complex and expensive. </p>

              <p className="text-black">The system lacked automation, leading to manual processes and slow response times for applications. </p>

              <div className="py-6"></div>

              <h3 className="h3-bold text-[#0092E0] pb-6">Solutions </h3>

              <p className="text-black pb-6">Rialtes implemented Yardi Voyager 7s, a comprehensive property management software solution. Yardi’s affordable housing module perfectly matched the public housing authority’s requirements. </p>

              <p className="text-black pb-6">Rialtes collaborated with the Housing Authority to understand their current workflows for various programs and Tenmast’s architecture. An “as-is” to “to-be” document was created, outlining improvements and automation opportunities within the new Yardi system. </p>

              <p className="text-black pb-6">The Yardi system was designed and implemented. </p>

              <p className="text-black pb-6">We created a database of the Tenmast system and converted it into a custom SQL-based user interface. It was developed to extract data from Tenmast and convert it into a format compatible with Yardi. </p>

              <p className="text-black pb-6">Rent Café, a resident portal solution, was created to provide a user-friendly self-service platform for applicants and residents. There was a real-time integration between Rent Café and Yardi to ensure a seamless data flow between the portal and backend office. </p>

              <p className="text-black">A two-phase approach was implemented. First, a QA system was used for testing and data migration. Finally, the production system was launched with all functionalities available.</p>

            </div>
          </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Benefits</h3>
              <p className="text-black pb-6">Improved response time to applicants and residents </p>

              <p className="text-black pb-6">Applicants can now submit applications online through the Rent Café portal, eliminating the need for paper applications and in-person visits. </p>

              <p className="text-black pb-6">Automation within Yardi helps prioritize applications based on defined criteria, improving efficiency for staff.</p>

              <p className="text-black pb-6">User-friendly reports and dashboards provide valuable insights for the public housing authority </p>

              <p className="text-black">Overall, the Yardi implementation has led to increased productivity and efficiency for the public housing authority staff.</p>
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