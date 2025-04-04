"use client";
// pages/case-study-detail.js
import Head from "next/head";
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';

const slides = [
  {
   id: 3,
   image: "/images/case-studies/case study 1_thumb_n.webp",
   category: "Healthcare",
   industry: "Real Estate",
   date: "17 Nov 2024",
   title: "Automate Order Processing using Mulesoft for Salesforce Health Cloud and SAP",
   description: "A global medical technology company that develops and manufactures innovative products",
   url:'insights/case-studies/automate-order-processing-using-mulesoft-for-salesforce-health-cloud-and-sap'
 },
 {
   id: 4,
   image: "/images/case-studies/case-study-4_thumb.webp",
   category: "Real Estate",
   industry: "Healthcare",
   date: "14 Oct 2024",
   title: "Omnichannel case management with Salesforce Service Cloud",
   description: "A leading provider of high-performance analog semiconductors for wireless and wired connectivity.",
   url:'insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud'
 },
 {
   id: 6,
   image: "/images/case-studies/case-study-6_thumb.webp",
   category: "Healthcare",
   industry: "Manufacturing",
   date: "4 Sept 2024",
   title: "Yardi Managed Services",
   description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
 url:'insights/case-studies/yardi-managed-services'
 },
 {
   id: 7,
   image: "/images/case-studies/case study 3_thumb_n.webp",
   category: "SAP",
   industry: "Retail & e-Commerce",
   date: "25 Oct 2024",
   title: "Streamlined DevOps using Copado and Salesforce",
   description: "A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects.",
 url:"insights/case-studies/streamlined-devops-using-copado-and-salesforce"
 },
 {
   id: 8,
   image: "/images/case-studies/case study 2_thumb_n.webp",
   category: "Salesforce",
   industry: "Hi-Tech",
   date: "25 Oct 2024",
   title: "RealForce Banking Module - ACH",
   description: "A multifamily real estate firm based out of the US that specializes in managing and investing in multifamily properties.",
 url:'insights/case-studies/realForce-banking-module-ach'
 },
 // Add more blog objects as needed
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Streamlined DevOps using Copado and Salesforce | Company Name</title>
        <meta name="description" content="About our company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            <h1 className="text-[#000000] py-6 max-w-4xl">Streamlined DevOps using Copado and Salesforce</h1>
          </div>
          <div className="py-4"></div>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between text-black  max-w-4xl xl:w-1/2">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Manufacturing</span> <span className='text-[#ACACAC]'> | </span>25 Oct 2024
              </div>
              <div className="flex flex-col">
                <span>8 min read</span>
              </div>
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-row gap-6 ">
              <div className="max-w-[40px]">
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=/case-study-3&title=Streamlined DevOps using Copado and Salesforce&summary=Summary%20of%20the%20case%20study&source=LinkedIn">
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
                <a href="https://www.facebook.com/sharer/sharer.php?u=/case-study-3">
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
                <a href="https://twitter.com/intent/tweet?url=/case-study-3&text=Streamlined DevOps using Copado and Salesforce">
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
              </div>
            </div>
          </div>

          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">


              <h3 className="h3-bold text-[#0092E0] pb-6">Client Profile</h3>
              <p className="text-black">A leading manufacturer that specializes in building innovative materials for residential and commercial construction projects. They offer high-quality products, including roofing (shingles), decking, railing, and waterproofing solutions. Their focus is on helping contractors, builders, and homeowners to enhance the durability, performance, and aesthetics of their buildings. </p>
              <div className="py-6"></div>
              <h3 className="h3-bold text-[#0092E0] pb-6">Problem or Challenge </h3>
              <p className="text-black pb-6">The company had a complex multi-layered deployment environment with numerous sandboxes for development, QA, pre-production, and production. And this made managing releases difficult. </p>

              <p className="text-black pb-6">Releases happened monthly with additional ad-hoc deployments, leading to delays in getting features and fixes to end users. </p>

              <p className="text-black pb-6">Deployments were manual that required transfers between development, QA, and production teams, which increased the risk of errors and inconsistencies. </p>

              <p className="text-black">Version control was challenging, and managing access across different environments was complex, which made maintaining a stable and bug free production environment difficult. </p>
              <div className="py-6"></div>
              <h3 className="h3-bold text-[#0092E0] pb-6">Solutions </h3>
              <p className="text-black pb-6">Rialtes implemented a refined DevOps process with improved continuous integration (CI) and continuous development (CD) practices. We introduced Copado, a native Salesforce DevOps platform, to streamline deployments and automate their existing workflows.</p>

              <p className="text-black pb-6">Rialtes analyzed the existing deployment processes of the manufacturing company. We performed a fit gap analysis to identify gaps between current practices and Copado’s capabilities. Additionally, we educated the manufacturing company on DevOps best practices and Copado’s functionalities and defined a deployment landscape with a streamlined process.</p>

              <p className="text-black">We created a simplified DevOps pipeline with Copado and integrated GitHub for version control and Azure DevOps for project management. Deployments were automated with CI/CD practices and centralized control over versions, access, data and the ability to quickly create new environments as needed was provided to the manufacturing company.</p>
            </div>
          </div>
          <div className="py-6"></div>
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h3 className="h3-bold text-[#0092E0] pb-6">Benefits</h3>



              <ul className="list-disc marker:text-[#0092E0] text-black pl-4 pb-6">

                <li className="pb-4">Copado provides a central platform for managing versions, access, data, and deployments, which simplifies oversight and version control. </li>
                <li className="pb-4">Copado ensures secure development environments and robust version control, preventing code conflicts. </li>
                <li className="pb-4">Manual deployments are eliminated and replaced by automated workflows with a user-friendly dashboard for monitoring releases. </li>
                <li>The manufacturing company can now run independent minor, major, and bug fix releases simultaneously and accelerating delivery.</li>
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