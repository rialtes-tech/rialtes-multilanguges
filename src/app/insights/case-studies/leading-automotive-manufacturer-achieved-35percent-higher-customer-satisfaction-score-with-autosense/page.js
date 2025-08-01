"use client";
// pages/case-study-detail.js
import Image from "next/image";
import RelatedTopicsCarousel from '../../../components/relatedTopicsCarousel';
import Seo from "@/app/components/Seo";
import Script from "next/script";
const schemaData = {
 "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rialtes.com/insights/case-studies/leading-automotive-manufacturer-achieved-35percent-higher-customer-satisfaction-score-with-autosense/"
  },
  "headline": "Salesforce Warranty Management Case Study: AutoSense Boosts Customer Satisfaction by 35%",
  "description": "This Salesforce warranty management case study highlights how AutoSense streamlined warranty claims, improved dealer engagement, and boosted customer satisfaction.",
  "image": "https://www.rialtes.com/images/case-studies/AutoSense%20Warranty%20Management%20Modules_Case%20study%20banner.webp",
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
  "datePublished": "2025-06-30"

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
  const fullUrl = "https://www.rialtes.com/insights/case-studies/omnichannel-case-management-with-salesforce-service-cloud";

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Salesforce Warranty Management: AutoSense in Action"
        description="This Salesforce warranty management case study highlights how AutoSense automated warranty claims, reduced errors, and improved operational efficiency."
        canonical="https://www.rialtes.com/insights/case-studies/leading-automotive-manufacturer-achieved-35percent-higher-customer-satisfaction-score-with-autosense/"
      />
   
         <Script
        id="schema-leading"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative h-[350px] md:h-[500px]  4xl:h-[650px]  overflow-hidden">
        <Image
        className="md:block hidden overflow-hidden "
          src="/images/case-studies/AutoSense Warranty Management Modules_Case study banner.webp "
          alt="AutoSense Warranty managment case study"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
          priority
        />

         <Image
        className="block md:hidden overflow-hidden "
          src="/images/case-studies/AutoSense Warranty Management Modules_Case study Mobile banner.webp "
          alt="AutoSense Warranty managment case study"
          fill
          style={{ objectFit: "cover", objectPosition: "40% 20%" }}
          priority
        />
      </section>

      <section
        className="custom-container"
      >

        <div className="py-10 bg-white xl:max-w-[1084px] 4xl:w-[1084px] 2xl:w-[900px] xl:w-[800px]">
          <div className="">
            <h1 className="text-[#000000] py-6 leading-tight  text-[26px] 4xl:text-[60px]  2xl:text-[48px] xl:text-[42px] md:text-[28px]">Leading Automotive Manufacturer Achieved 35% Higher Customer Satisfaction Score with AutoSense</h1>
          </div>
        
          <div className="">
            <div className="flex flex-col md:flex-row justify-between items-center text-black">
              <div className='pb-6'>
                <span className='text-[#0092E0]'>Automotive </span> <span className='text-[#ACACAC]'> | </span>30 June 2025
              </div>
              <div className="flex flex-col">
                <span>8 min read</span>
              </div>
            </div>
            <div className="pt-4"></div>
            <div className="flex flex-row gap-6  justify-center md:justify-start ">
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
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Client Overview</h2>
              <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">A prominent global automotive car manufacturer, known for its innovation and high-performance vehicles, was facing challenges with its legacy warranty management system. The system was built on a Java/J2EE-based dealer portal, which had become cumbersome, difficult to maintain, and lacked the flexibility required to support evolving business needs. The client needed a comprehensive, modern solution to streamline warranty claims, enhance dealer interaction, and optimize overall warranty management processes.</p>

              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">Key Challenges:</h2>

              <p className="text-black pb-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">The client’s legacy system posed several significant challenges that hindered warranty management and overall dealer performance:</p>

              <div className="pl-2">
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Outdated Technology </h3>: The legacy Java/J2EE-based application was no longer able to meet the dynamic needs of the automotive business. The system struggled with scalability issues, slowing down response times and leading to inefficiencies.</li>

                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Lack of Integration </h3>: The warranty management system was not integrated with other critical business platforms such as inventory management and sales systems, leading to disjointed workflows and data silos.</li>

                  <li><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Limited Functionality </h3>: The legacy system was incapable of handling modern warranty claims processes, such as real-time claims tracking, inventory checks, and the management of vehicle lifecycles.</li>

                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Poor User Experience  </h3>:  The dealer portal lacked an intuitive interface, leading to low adoption and significant frustration for dealers who struggled with complex navigation and time-consuming processes.</li>


                  <li className=""><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Inefficient Claims Process </h3>:  The warranty claims process was manual, error-prone, and lacked transparency, which caused delays, increased costs, and dissatisfied customers.</li>

                </ul>
              </div>
              <div className="py-6"></div>

              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4">The AutoSense Solution by Rialtes </h2>

              <p className="text-black pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">To address these challenges, the automotive manufacturer partnered with Rialtes, a global consulting company known for its expertise in AI-powered digital solutions, to deliver a state-of-the-art Warranty Management System built on Salesforce Automotive Cloud.  Rialtes implemented its signature service, AutoSense, to provide a modern, scalable, and integrated warranty management platform.</p>

<h3 className="h3-bold pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Approach</h3>
              <div className="pl-2">
                <ol className="list-decimal marker:text-[#000] marker:text-xl text-black pl-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                  <li className="pb-4"><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">	Design Workshops </h4>: Rialtes began the project with a series of design workshops, engaging key stakeholders from the manufacturer’s warranty, dealer management, and IT teams. These workshops helped define the specific pain points, business requirements, and goals for the new warranty management system.</li>

                  <li className="pb-4"><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Agile Development Process </h4>: Rialtes adopted a detailed agile plan, breaking the solution into manageable sprints to ensure timely delivery of key functionalities. Each sprint focused on delivering high-priority features and capabilities, with regular feedback loops to ensure alignment with the client’s objectives.</li>
                  <li className="pb-4"><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Salesforce Automotive Cloud Integration </h4>: The warranty management portal was built on Salesforce Automotive Cloud, leveraging its powerful features to streamline warranty claims, automate workflows, and provide real-time visibility into claims processing, inventory, and vehicle lifecycle data.</li>

                  <li className="pb-4"><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] "> SAP S/4 HANA Integration for Order & Financial Management </h4>:  Rialtes ensured the solution integrated seamlessly with SAP S/4 HANA to optimize order processing, financial tracking, and warranty claim financial settlements, reducing errors and ensuring accurate invoicing.</li>

                </ol>
              </div>


<h3 className="h3-bold pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Key Features of the AutoSense Warranty Management Portal</h3>
 <div className="pl-2">
                <ol className="list-decimal marker:text-[#000] marker:text-xl text-black pl-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                  <li className="pb-4"><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">	Warranty Claims Submission & Tracking </h4>: The AutoSense portal enabled dealers to submit and track warranty claims seamlessly. Dealers could view real-time status updates, ensuring faster resolution times and improving overall customer satisfaction.</li>

                  <li className="pb-4"><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Lead Submission & Nurturing </h4>: AutoSense’s warranty portal integrated lead submission functionality, allowing the warranty team to capture claims-related leads and proactively nurture them through automated follow-up processes.</li>
                  <li className="pb-4"><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]"> Opportunity Management </h4>: The system allowed warranty managers to track potential opportunities arising from warranty claims, including upsell and cross-sell possibilities for extended warranties and additional services, improving overall revenue potential.</li>

                  <li className="pb-4"><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] "> Order Management </h4>:  The portal provided an integrated order management system for warranty replacements, enabling dealers to track replacement parts, place orders, and update claim statuses in real-time.</li>

                   <li className="pb-4"><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]"> 	Inventory Search with Vehicle Images </h4>: The AutoSense portal offered an intuitive inventory search tool that allowed dealers to check available replacement parts, view part images, and filter inventory by specifications. This reduced downtime and sped up the claims process, enhancing dealer productivity.</li>

                  <li className=""><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]"> Vehicle Lifecycle Management </h4>:  AutoSense provided visibility into the entire lifecycle of each vehicle, from the original sale to post-sale services and warranty claims. This holistic view ensured warranty managers had accurate information when processing claims and tracking vehicle-related issues.</li>

                </ol>
              </div>


            </div>
          </div>
          <div className="py-6"></div>
          <div className="">
            <div className="">
              <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4 ">Key Benefits for the Client</h2>
  <div className="pl-2">

     <p className="text-black pb-2 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">By leveraging the AutoSense warranty management solution, the automotive manufacturer achieved several significant benefits:</p>
                <ul className="list-disc marker:text-[#0092E0] marker:text-xl text-black pl-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]"> Improved Warranty Claims Efficiency </h3>: The streamlined process for submitting, tracking, and managing warranty claims reduced manual intervention, sped up processing times, and increased dealer satisfaction.</li>

                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]"> Real-Time Visibility </h3>: With the integration of Salesforce Automotive Cloud, the client gained access to real-time data on warranty claims, inventory, and vehicle status, enabling more informed decision-making and faster resolution of issues.</li>

                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]"> Increased Dealer Adoption </h3>: The modern, user-friendly interface of the AutoSense portal led to higher dealer adoption rates, improving overall productivity and engagement.</li>

                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Operational Efficiency </h3>: Automation of key workflows reduced errors, improved accuracy in warranty claim settlements, and freed up valuable resources to focus on more strategic tasks.</li>


                  <li className="pb-4"><h3 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]"> Enhanced Customer Satisfaction </h3>:  The faster, more transparent warranty claims process led to improved customer satisfaction, as dealers could resolve warranty issues promptly, increasing customer loyalty and trust.</li>

                </ul>
              </div>

<h3 className="h3-bold pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Key Deliverables by Rialtes Under the AutoSense Service:</h3>

<div className="pl-2">
                <ol className="list-decimal marker:text-[#000] marker:text-xl text-black pl-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] font-medium">
                  <li className="pb-4"><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">	Stakeholder Workshops & Requirement Definition </h4>: Rialtes facilitated workshops with warranty, IT, and dealer management teams to capture pain points, define business requirements, and align on a clear project vision.</li>

                  <li className="pb-4"><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">	Agile Solution Development </h4>: Rialtes followed an agile development methodology, delivering the solution in defined sprints, ensuring iterative progress and flexibility to adapt to emerging needs.</li>

                  <li className="pb-4"><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]"> Custom Warranty Management Portal Development </h4>: The warranty management portal was built on Salesforce Automotive Cloud, featuring warranty claims submission, order management, inventory tracking, and vehicle lifecycle management.</li>

                  <li className="pb-4"><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] "> Seamless System Integration </h4>:  Rialtes integrated AutoSense with SAP S/4 HANA  for order and financial management, ensuring accurate financial tracking and efficient order fulfillment.</li>

                   <li className="pb-4"><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">	Testing & Quality Assurance </h4>: Rialtes ensured that the solution met rigorous quality standards, conducting extensive testing to ensure the platform’s performance, security, and usability.</li>

                  <li className=""><h4 className=" h3-bold inline 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px] "> Training & Support </h4>: Comprehensive training for dealers and internal teams was provided to ensure smooth adoption and effective use of the new portal. Rialtes also offered ongoing support to address future updates and enhancements.</li>

                </ol>
              </div>
              
            </div>
          </div>
            <div className="py-6"></div>
 <h2 className="font-medium text-[#0092E0] 4xl:text-[30px] 2xl:text-[24px] xl:text-[21px] text-[23px] leading-tight pb-4 ">Conclusion</h2>
              <p className="text-black pb-4 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">Rialtes successfully delivered a transformative warranty management system for the automotive manufacturer, shifting from the outdated Java/J2EE-based portal to a powerful, integrated solution powered by Salesforce Automotive Cloud and integrated with  SAP S/4 HANA. The result was a more efficient, scalable, and user-friendly warranty management process that significantly enhanced dealer performance, reduced claim resolution times, and improved customer satisfaction.</p>
              <p className="text-black 4xl:text-[20px]  2xl:text-[18px]  xl:text-[17px] text-[16px]">With the AutoSense service, Rialtes empowered the client to streamline its warranty claims management, optimize workflows, and gain real-time insights into warranty data, positioning the manufacturer for continued growth in a competitive automotive market.</p>
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